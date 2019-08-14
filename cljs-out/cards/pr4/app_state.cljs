(ns pr4.app-state
  (:require
    [re-frame.core :as re-frame]
    [tick.alpha.api :as tick]
    [clojure.spec.alpha :as spec]
    )
  )

(def today "2019-06-15")
(def week-days-of-training [tick/MONDAY tick/WEDNESDAY tick/FRIDAY])
(def default-sessions
  [{:reps-min 12, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 11, :reps-max 14, :total-sets 15, :rest-time 45}
   {:reps-min 9, :reps-max 11, :total-sets 15, :rest-time 60}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 12, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 12, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 14, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 12, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 6, :reps-max 8, :total-sets 15, :rest-time 90}
   {:reps-min 4, :reps-max 6, :total-sets 15, :rest-time 105}
   {:reps-min 3, :reps-max 5, :total-sets 15, :rest-time 120}
   {:reps-min 6, :reps-max 8, :total-sets 15, :rest-time 90}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 14, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 6, :reps-max 8, :total-sets 15, :rest-time 90}
   {:reps-min 4, :reps-max 6, :total-sets 15, :rest-time 105}
   {:reps-min 3, :reps-max 5, :total-sets 15, :rest-time 120}
   {:reps-min 6, :reps-max 8, :total-sets 15, :rest-time 90}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 14, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 6, :reps-max 8, :total-sets 15, :rest-time 90}
   {:reps-min 4, :reps-max 6, :total-sets 15, :rest-time 105}
   {:reps-min 3, :reps-max 5, :total-sets 15, :rest-time 120}
   {:reps-min 6, :reps-max 8, :total-sets 15, :rest-time 90}
   {:reps-min 6, :reps-max 8, :total-sets 15, :rest-time 90}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 4, :reps-max 6, :total-sets 15, :rest-time 105}
   {:reps-min 3, :reps-max 5, :total-sets 15, :rest-time 120}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 14, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 8, :reps-max 10, :total-sets 15, :rest-time 75}
   {:reps-min 13, :reps-max 15, :total-sets 15, :rest-time 45}
   {:reps-min 10, :reps-max 12, :total-sets 15, :rest-time 60}
   {:reps-min 14, :reps-max 15, :total-sets 15, :rest-time 45}])
(def default-microcycles
  (->> (count default-sessions)
       range
       (partition-all 4)
       (map last)
       (mapv inc)))

(defn dates [days-week-of-training first-day sessions]
  (loop [val []
         current (first sessions)
         sessions (rest sessions)
         days-week days-week-of-training
         current-day (tick/date first-day)]
    (cond
      (nil? current) val
      (not= (tick/day-of-week current-day) (first days-week))
        (recur
          val
          current
          sessions
          days-week
          (tick/+ current-day (tick/new-period 1 :days)))
      :else (recur
              (conj val {:date current-day :session-idx (count val)})
              (first sessions)
              (rest sessions)
              (conj (vec (rest days-week)) (first days-week))
              (tick/+ current-day (tick/new-period 1 :days))))))

(defn expand-days [calendar]
  (loop [val []
         current (first calendar)
         coll (rest calendar)
         current-day (:date (first calendar))]
    (cond
      (nil? current) val
      (= current-day (:date current))
        (recur (conj val current)
               (first coll)
               (rest coll)
               (tick/+ current-day (tick/new-period 1 :days)))
      :else
        (recur (conj val {:date current-day})
               current
               coll
               (tick/+ current-day (tick/new-period 1 :days))))))

(defn bad-fn-please-refactor [sessions week-days-of-training first-day]
  (let [old-data-structure (expand-days
                             (dates week-days-of-training
                                    first-day
                                    sessions))]
    {:first-day first-day
     :days (map #(dissoc % :date) old-data-structure)}))

(defn sessions-micros-synced? [{:keys [sessions microcycles]}]
  (= (count sessions) (last microcycles))) ;; They correspond to the same number of sessions.

(spec/def ::valid-app-state
  (spec/keys :req-un [::ui ::domain]))

(spec/def ::ui
  (spec/keys :req-un [::session-selection ::increment-scale]))

(spec/def ::session-selection
  (spec/tuple nat-int? nat-int?))

(spec/def ::domain
  (spec/and (spec/keys :req-un [::sessions ::microcycles ::calendar])
            sessions-micros-synced?))

(def default-app-state
  {:ui {:session-selection [0 4]
        :increment-scale 0
        :calendar-selection [0 1]}
   :domain {:sessions default-sessions
            :microcycles default-microcycles
            ;; :calendar (expand-days (dates week-days-of-training today default-sessions))
            :calendar (bad-fn-please-refactor default-sessions week-days-of-training "2019-05-20")
            }})

(defn sessions
  [app-state]
  (get-in app-state [:domain :sessions]))
(re-frame/reg-sub
  ::sessions
  sessions)

(defn microcycles
  [app-state]
  (get-in app-state [:domain :microcycles]))
(re-frame/reg-sub
  ::microcycles
  microcycles)

(defn idx-micros
  "Output example:
    {0 0, 32 11, 3 1, 6 2, 9 3, 12 4, 15 5, 18 6, 21 7, 24 8, 27 9, 30 10}"
  [micros]
  (into {0 0} (map-indexed (fn [i v] [v (inc i)]) micros)))
(re-frame/reg-sub
  ::idx-micros
  :<- [::microcycles]
  idx-micros)

(defn session-selection
  [app-state]
  (get-in app-state [:ui :session-selection]))
(re-frame/reg-sub
  ::session-selection
  session-selection)

(defn increment-scale
  [app-state]
  (get-in app-state [:ui :increment-scale]))
(re-frame/reg-sub
  ::increment-scale
  increment-scale)

(defn calendar-raw
  [app-state]
  (get-in app-state [:domain :calendar]))
(re-frame/reg-sub
  ::calendar-raw
  calendar-raw)

(defn next-day [current-day]
  (str (tick/+ (tick/date current-day) (tick/new-period 1 :days))))

;; e.g. [{:date "2019-06-14 :session-idx 3} {:date "2019-06-13" :absence true}]
(defn calendar
  [{:keys [first-day days]}]
  (map #(assoc %1 :date %2)
       days
       (iterate next-day first-day)))
(re-frame/reg-sub
  ::calendar
  :<- [::calendar-raw]
  calendar)

(defn absent-coll
  [{:keys [days]}]
  (map :absent? days))
(re-frame/reg-sub
  ::absent-coll
  :<- [::calendar-raw]
  absent-coll)

(defn calendar-selection [app-state]
  (get-in app-state [:ui :calendar-selection]))
(re-frame/reg-sub ::calendar-selection calendar-selection)

(defn absent?
  [[{:keys [days]} [sel-start sel-end]]]
  (:absent? (nth days sel-start)))
(re-frame/reg-sub
  ::absent?
  :<- [::calendar-raw]
  :<- [::calendar-selection]
  absent?)

(defn first-calendar-day
  [app-state]
  (get-in app-state [:domain :calendar :first-day]))
(re-frame/reg-sub
  ::first-calendar-day
  first-calendar-day)
