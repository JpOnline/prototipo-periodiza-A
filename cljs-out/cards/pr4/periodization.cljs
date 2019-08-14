(ns pr4.periodization
  (:require
   [clojure.spec.alpha :as spec]))

(spec/def ::between-1-and-30 (spec/and int? #(> % 0) #(<= % 30)))
(spec/def ::percentage (spec/and #(>= % 0) #(<= % 100)))

(defn pre-validation [spec input message]
  "Throw a message when the input don't conform to the spec."
  (or (spec/valid? spec input)
      (throw (ex-info message (spec/explain-data spec input)))))

;; It needs validation because is user input
(defn reps-to-intensity
  "Returns the percentage of 1RM associated with the number of repetitions
  accomplished."
  [max-reps]
  {:pre [(pre-validation
           ::between-1-and-30
           max-reps
           "Repetições deve ser entre 1 e 30.")]
   :post [(spec/valid? ::percentage %)]}
  (let [intensity-list [0 100 95 93 90 87 85 83 80 77 75 70 67.5 67 66 65 63.3
                        61.7 60 58.3 56.7 55 53.3 51.7 50 48.3 46.7 45 43.3
                        41.7 40]]
    (nth intensity-list max-reps)))

(spec/fdef reps-to-intensity
           :args (spec/cat :max-reps ::between-1-and-30)
           :ret int?)

(defn get-1rm [reps weight]
  "Assuming the practitioner went to exhaustion,
   it returns the maximum weight that he/she would do."
  (/ (* 100 weight) (reps-to-intensity reps)))

(defn session-volume [reps sets]
  (-> reps reps-to-intensity (* reps) (* sets)))

(defn session->total-volume
  "Uses repetitions of an exercise, calculating the intensity of this
  reps in % of RM (max repetition) and sets to output the range of
  total volume in % of 1 RM."
  [{:keys [reps-min reps-max total-sets]}]
  (let [vol-min (Math.round (session-volume reps-min total-sets))
        vol-max (Math.round (session-volume reps-max total-sets))]
    (if (= reps-min reps-max)
      (str vol-min "%")
      (str vol-min "-" vol-max "%"))))

(defn execution-time
  "Receives a session with reps, sets and rest.
  Suppose each repetition takes 3 seconds
  Returns a the execution time estimation in seconds"
  [reps sets]
  (-> reps (* 3) (* sets)))

(defn total-rest-time [sets rest-per-set]
  (* rest-per-set (dec sets)))

(defn session->time-estimate
  "Receives a session with a: range of reps, sets and rest-time.
  Returns a text representing the time estimation of the session in
  the format mm:ss"
  [{:keys [reps-min reps-max rest-time total-sets]}]
  (+ (execution-time reps-max total-sets)
     (total-rest-time total-sets rest-time)))

(def micros-models
  {
   ;; Exemplo de micro com 3 sessões
   [{:reps-min 1 :reps-max 3 :total-sets 18}
    {:reps-min 1 :reps-max 3 :total-sets 18}
    {:reps-min 1 :reps-max 3 :total-sets 18}]
   "Ordinário"

   [{:reps-min 12 :reps-max 15 :rest-time 45} ;; 50%
    {:reps-min 10 :reps-max 12 :rest-time 60} ;; 60%
    {:reps-min 11 :reps-max 14 :rest-time 45} ;; 55%
    {:reps-min 9 :reps-max 11 :rest-time 60} ;; 65%
    ]
   "Incorporação"

   [{:reps-min 8 :reps-max 10 :rest-time 75} ;; 70%
    {:reps-min 10 :reps-max 12 :rest-time 60} ;; 60%
    {:reps-min 12 :reps-max 15 :rest-time 45} ;; 50%
    {:reps-min 13 :reps-max 15 :rest-time 45}] ;; 40%
   "Ordinário"

   [{:reps-min 6 :reps-max 8 :rest-time 90} ;; 80%
    {:reps-min 4 :reps-max 6 :rest-time 105} ;; 90%
    {:reps-min 3 :reps-max 5 :rest-time 120} ;; 100%
    {:reps-min 6 :reps-max 8 :rest-time 90}] ;; 80%
   "Choque 1"

   [{:reps-min 6 :reps-max 8 :rest-time 90} ;; 80%
    {:reps-min 10 :reps-max 12 :rest-time 60} ;; 60%
    {:reps-min 4 :reps-max 6 :rest-time 105} ;; 90%
    {:reps-min 3 :reps-max 5 :rest-time 120}] ;; 100%
   "Choque 2"

   [{:reps-min 8 :reps-max 10 :rest-time 75} ;; 70%
    {:reps-min 13 :reps-max 15 :rest-time 45} ;; 40%
    {:reps-min 10 :reps-max 12 :rest-time 60} ;; 60%
    {:reps-min 14 :reps-max 15 :rest-time 45} ;; 30%
    ]
   "Recuperação"
   })

