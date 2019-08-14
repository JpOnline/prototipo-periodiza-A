(ns pr4.util
  (:require
    [clojure.spec.alpha :as spec]
    )
  )

(defn round-to-precision
  "it takes an argument for which number to floor,
  the same as the classic floor had the implicit
  argument of 1 (e.g. (floor 2.3) is the same as
  (round-to-precision 2.3 1)"
  [n & [precision]]
  (let [temp (+ n (if precision (/ precision 2) 0.5))]
    (- temp (mod temp (or precision 1)))))

(defn between? [value [min max]]
  (and (>= value min) (< value max)))

(defn pre-validation [spec input message]
  "Throw a message when the input don't conform to the spec."
  (or (spec/valid? spec input)
      (throw (ex-info message {:spec-input input
                               :spec-data (spec/explain-data spec input)}))))

(defn validate-interval [coll [i-1 i-2]]
  (or (<= i-1 i-2 (count coll))
      (throw (ex-info "Interval not in coll range"
                      {:coll coll :interval [i-1 i-2]}))))

(defn select-indexes [coll interval]
  {:pre [(validate-interval coll interval)]}
  (map #(nth coll %) (apply range interval)))

(defn seconds->minute-text [seconds]
  (let [min (quot seconds 60)
        sec (mod seconds 60)]
    (str min ":" (when (< sec 10) "0") sec)))

(defn first-filter [f coll]
  (some #(if (f %) %) coll))

