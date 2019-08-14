(ns pr4.events
  (:require
    [re-frame.core :as re-frame]
    [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
    [pr4.app-state :as app-state]
    [pr4.util :as util]
    [pr4.periodization :as periodization]
    [tick.alpha.api :as tick]
   )
  )

(re-frame/reg-event-db
  ::initialize-app-state
  (fn-traced
    [_ _]
    app-state/default-app-state))

(defn change-selected-range [neg?-pos? default]
  (fn [app-state]
    (let [[sel-start sel-end] (get-in app-state [:ui :session-selection])
          updated-increment-state (update-in app-state [:ui :increment-scale]
                                             #(if (neg?-pos? %)
                                                (* % 2)
                                                default))
          amount-to-sum (get-in updated-increment-state [:ui :increment-scale])
          new-end (+ sel-end amount-to-sum)
          sessions-count (count (get-in app-state [:domain :sessions]))
          corrected-end (cond
                          (<= new-end sel-start) (inc sel-start)
                          (> new-end sessions-count) sessions-count
                          :else new-end)]
      (update-in updated-increment-state [:ui :session-selection]
                 #(update % 1 (constantly corrected-end))))))

(re-frame/reg-event-db ::decrease-selected-range (change-selected-range neg? -1))
(re-frame/reg-event-db ::increase-selected-range (change-selected-range pos? 1))

(defn explode-micros [micros]
  (loop [val []
         current (first micros)
         coll (rest micros)
         current-idx 0]
    (cond
      (nil? current) (butlast val)
      (= current-idx (dec current)) (recur (into val [current-idx :m])
                                           (first coll)
                                           (rest coll)
                                           (inc current-idx))
      :else (recur (conj val current-idx)
                   current
                   coll
                   (inc current-idx))))
  )

(defn implode-micros [exploded-micros]
  (loop [val []
         previous nil
         current (first exploded-micros)
         coll (rest exploded-micros)
         current-idx 0]
    (cond
      (nil? current) (conj val current-idx)
      (= current previous :m) (recur val
                                     current
                                     (first coll)
                                     (rest coll)
                                     current-idx)
      (= current :m) (recur (conj val current-idx)
                            current
                            (first coll)
                            (rest coll)
                            current-idx)
      :else (recur val
                   current
                   (first coll)
                   (rest coll)
                   (inc current-idx)))))

;; If the resulted selection is out of bound after the deletion it throws an
;; error that wouldn't be a problem using re-frame.
(defn-traced delete-selected-sessions [app-state]
  {:pre [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "events/delete-selected-sessions: Input of an invalid app-state")]
   :post [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "events/delete-selected-sessions: Returned an invalid app-state")]}
  (let [sessions-count (count (get-in app-state [:domain :sessions]))
        session-sel (get-in app-state [:ui :session-selection])
        indexes-to-keep (clojure.set/difference (set (range sessions-count))
                                                (set (apply range session-sel)))]
    (-> app-state
        (update-in [:domain :sessions] #(map (partial nth %) indexes-to-keep))
        (update-in [:domain :microcycles] #(->> %
                                                explode-micros
                                                (remove (set (apply range session-sel)))
                                                implode-micros)))))
(re-frame/reg-event-db ::delete-selected-sessions delete-selected-sessions)

(defn-traced duplicate-selected-sessions [app-state]
  {:pre [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Input of an invalid app-state")]
   :post [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Returned an invalid app-state")]}
  (let [sessions (get-in app-state [:domain :sessions])
        session-sel (get-in app-state [:ui :session-selection])
        selected-sessions (util/select-indexes sessions session-sel)
        [before after] (split-at (second session-sel) sessions)]
    (update-in app-state [:domain] assoc :sessions
               (concat before selected-sessions after))))
(re-frame/reg-event-db ::duplicate-selected-sessions duplicate-selected-sessions)

(defn chop-coll
  "E.g.
  (chop-coll [0 1 2 3 4 5 6 7 8 9] [3 7])
  => [(0 1) (2) (3 4 5 6) (7) (8 9)]"
  [coll selection]
  (let [[temp rest] (split-at (first selection) coll)
        [s1 s2] (split-at (dec (count temp)) temp)
        [s3 rest] (split-at (apply - (reverse selection)) rest)
        [s4 rest] (split-at 1 rest)]
    [s1 s2 s3 s4 rest]))
(defn-traced move-sessions-right [app-state]
  {:pre [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Input of an invalid app-state")]
   :post [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Returned an invalid app-state")]}
  (let [sessions (get-in app-state [:domain :sessions])
        session-sel (get-in app-state [:ui :session-selection])
        [s1 s2 s3 s4 r] (chop-coll sessions session-sel)]
    (-> app-state
        (update-in [:domain] assoc :sessions (concat s1 s2 s4 s3 r))
        (update-in [:ui :session-selection] #(mapv (partial inc) %)))))
(defn-traced move-sessions-left [app-state]
  {:pre [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Input of an invalid app-state")]
   :post [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Returned an invalid app-state")]}
  (let [sessions (get-in app-state [:domain :sessions])
        session-sel (get-in app-state [:ui :session-selection])
        [s1 s2 s3 s4 r] (chop-coll sessions session-sel)]
    (-> app-state
        (update-in [:domain] assoc :sessions (concat s1 s3 s2 s4 r))
        (update-in [:ui :session-selection] #(mapv (partial dec) %)))))
(re-frame/reg-event-db ::move-sessions-left move-sessions-left)
(re-frame/reg-event-db ::move-sessions-right move-sessions-right)

(defn change-reps-range [comparator]
  (fn [app-state]
    (let [session-sel (get-in app-state [:ui :session-selection])
          veced-app-state (update-in app-state [:domain :sessions] vec)
          reps-max-updator (fn [session]
                             (assoc session :reps-max (comparator session)))
          update-fn (fn [app-state idx]
                      (update-in app-state [:domain :sessions idx] reps-max-updator))]
      (reduce update-fn veced-app-state (apply range session-sel)))))
(re-frame/reg-event-db ::decrease-reps-range
                       (change-reps-range (fn [{:keys [reps-max reps-min]}]
                                            (if (= reps-max reps-min)
                                              reps-max
                                              (dec reps-max)))))

(re-frame/reg-event-db ::increase-reps-range
                       (change-reps-range (fn [{:keys [reps-max reps-min]}]
                                            (if (= reps-max 30)
                                              reps-max
                                              (inc reps-max)))))

(defn-traced reps-slider-change [app-state [event min]]
  {:pre [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Input of an invalid app-state")]
   :post [(util/pre-validation
           ::app-state/valid-app-state
           app-state
           "Returned an invalid app-state")]}
  (let [sessions (get-in app-state [:domain :sessions])
        session-sel (get-in app-state [:ui :session-selection])
        last-selected (last (util/select-indexes sessions session-sel))
        diff (- (last-selected :reps-max) (last-selected :reps-min))
        new-min (if (> (+ diff min) 30)
                  (last-selected :reps-min)
                  min)
        new-max (+ new-min diff)
        veced-app-state (update-in app-state [:domain :sessions] vec)
        update-fn (fn [app-state idx]
                    (-> app-state
                        (update-in [:domain :sessions idx] assoc :reps-min new-min)
                        (update-in [:domain :sessions idx] assoc :reps-max new-max)))]
    (reduce update-fn veced-app-state (apply range session-sel))))
(re-frame/reg-event-db ::reps-slider-change reps-slider-change)

(defn-traced total-sets-changed [app-state [event new-val]]
  (let [sessions (get-in app-state [:domain :sessions])
        session-sel (get-in app-state [:ui :session-selection])
        veced-app-state (update-in app-state [:domain :sessions] vec)
        update-fn (fn [app-state idx]
                    (update-in app-state [:domain :sessions idx]
                               assoc :total-sets new-val))]
    (reduce update-fn veced-app-state (apply range session-sel))))
(re-frame/reg-event-db ::total-sets-changed total-sets-changed)

(defn-traced rest-slider-changed [app-state [event new-val]]
  (let [sessions (get-in app-state [:domain :sessions])
        session-sel (get-in app-state [:ui :session-selection])
        veced-app-state (update-in app-state [:domain :sessions] vec)
        update-fn (fn [app-state idx]
                    (update-in app-state [:domain :sessions idx]
                               assoc :rest-time new-val))]
    (reduce update-fn veced-app-state (apply range session-sel))))
(re-frame/reg-event-db ::rest-slider-changed rest-slider-changed)

(defn-traced session-sel-slider-changed [app-state [event start]]
  (let [sessions-count (count (get-in app-state [:domain :sessions]))
        [selected-start selected-end] (get-in app-state [:ui :session-selection])
        diff (- selected-end selected-start)
        new-start (if (> (+ diff start) sessions-count)
                    selected-start
                    start)
        new-end (+ new-start diff)]
    (-> app-state
        (update-in [:ui :session-selection] assoc 0 new-start)
        (update-in [:ui :session-selection] assoc 1 new-end))))
(re-frame/reg-event-db ::session-sel-slider-changed session-sel-slider-changed)

(defn-traced microcycles-sel-slider-changed [app-state [event start]]
  (let [microcycles (get-in app-state [:domain :microcycles])
        new-end (nth microcycles start)
        new-start (nth microcycles (dec start) 0)]
    (-> app-state
        (update-in [:ui :session-selection] assoc 0 new-start)
        (update-in [:ui :session-selection] assoc 1 new-end))))
(re-frame/reg-event-db ::microcycles-sel-slider-changed microcycles-sel-slider-changed)

(defn-traced update-sessions-by-model [app-state [event chosen-model-name]]
  (let [chosen-micros-models (filter #(-> % val ((partial = chosen-model-name)))
                                     periodization/micros-models)
        [session-sel-start session-sel-end] (get-in app-state
                                                    [:ui :session-selection])
        sel-sessions-count (- session-sel-end session-sel-start)
        chosen-model (->> chosen-micros-models
                          (map first)
                          (filter #(-> % count ((partial = sel-sessions-count))))
                          first)
        veced-app-state (update-in app-state [:domain :sessions] vec)
        update-fn (fn [app-state idx]
                    (update-in app-state [:domain :sessions idx]
                               merge (nth chosen-model (- idx session-sel-start))))]
    (reduce update-fn veced-app-state (range session-sel-start session-sel-end))))
(re-frame/reg-event-db ::update-sessions-by-model update-sessions-by-model)

(defn-traced move-calendar-sel-left [app-state]
  (let [{:keys [first-day days]} (get-in app-state [:domain :calendar])
        selection (get-in app-state [:ui :calendar-selection])
        [begin one-left selected one-right the-rest] (chop-coll days selection)
        previous-day (str (tick/- (tick/date first-day) (tick/new-period 1 :days)))]
    ;; TODO: Actually it needs to check if the map contains :session-idx, because it can have the :absent? false
    (when (not (empty? (first one-left)))
      (throw (ex-info "There's already information in the previous day."
                      {:previous-day-info one-left})))
    (if (not (map? (first one-left)))
      (update-in app-state [:domain] assoc
                 :calendar
                 {:first-day previous-day
                  :days (concat selected [{}] one-right the-rest)})
      (-> app-state
          (update-in [:domain :calendar] assoc :days
                     (concat begin selected one-left one-right the-rest))
          (update-in [:ui :calendar-selection] #(mapv (partial dec) %))))))
(re-frame/reg-event-db ::move-calendar-sel-left move-calendar-sel-left)

(defn-traced move-calendar-sel-right [app-state]
  (let [{:keys [days]} (get-in app-state [:domain :calendar])
        selection (get-in app-state [:ui :calendar-selection])
        [begin one-left selected one-right the-rest] (chop-coll days selection)]
    (when (not (empty? (first one-right)))
      (throw (ex-info "There's already information in the next day."
                      {:next-day-info one-right})))
    (-> app-state
        (update-in [:domain :calendar] assoc :days
                   (concat begin one-left [{}] selected the-rest))
        (update-in [:ui :calendar-selection] #(mapv (partial inc) %)))))
(re-frame/reg-event-db ::move-calendar-sel-right move-calendar-sel-right)

(defn push-days-to-right [to-add the-rest]
  (loop [[f-to-add & to-add] to-add
         [f-coll & coll] the-rest
         added []]
    (cond
      (and (nil? f-to-add) (nil? f-coll)) added
      (nil? f-to-add) (concat added (cons f-coll coll))
      (:session-idx f-coll) (recur (conj (vec to-add) f-coll) coll (conj added f-to-add))
      :else (recur to-add coll (conj added f-to-add)))))

(defn update-absent [app-state]
  (let [selection (get-in app-state [:ui :calendar-selection])
        days (get-in app-state [:domain :calendar :days])
        [s1 s2 selected-days s3 the-rest] (chop-coll days selection)
        absences (map #(into {:absent? true}) selected-days)
        selected-days-with-info (remove #(empty? %) selected-days)
        pushed-rest (push-days-to-right selected-days-with-info (concat s3 the-rest))]
    (update-in app-state [:domain :calendar]
               assoc :days (concat s1 s2 absences pushed-rest))))

(defn update-not-absent [app-state]
  (let [veced-app-state (update-in app-state [:domain :calendar :days] vec)
        selection (get-in app-state [:ui :calendar-selection])
        update-fn (fn [app-state idx]
                    (update-in app-state
                               [:domain :calendar :days idx]
                               assoc :absent? false))]
    (reduce update-fn veced-app-state (apply range selection))))

(defn-traced toggled-absent [app-state [event absent?]]
  (if absent?
    (update-absent app-state)
    (update-not-absent app-state)))
(re-frame/reg-event-db ::toggled-absent toggled-absent)

(defn-traced toggle-multiple-calendar-selection [app-state]
  (update-in app-state [:ui :calendar-selection]
             (fn [[day-s day-e]]
               (if (= (- day-e day-s) 1)
                 [day-s (+ day-e 2)]
                 [day-s (inc day-s)]))))
(re-frame/reg-event-db
  ::toggle-multiple-calendar-selection
  toggle-multiple-calendar-selection)

(defn-traced reset-calendar-selection [app-state [event new-val]]
  (update app-state :ui assoc :calendar-selection new-val))
(re-frame/reg-event-db ::reset-calendar-selection reset-calendar-selection)
