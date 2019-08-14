(ns cljc.java-time.clock (:require [cljs.java-time.interop :as jti] #? (:cljs [java.time :refer [Clock]])) (:refer-clojure :exclude [get range format min max next name resolve]) #? (:clj (:import [java.time Clock])))
(clojure.core/defn tick {:arglists (quote (["java.time.Clock" "java.time.Clock" "java.time.Duration"]))} (^java.time.Clock [^java.time.Clock java-time-Clock2962 ^java.time.Duration java-time-Duration2963] (. java.time.Clock tick java-time-Clock2962 java-time-Duration2963)))
(clojure.core/defn offset {:arglists (quote (["java.time.Clock" "java.time.Clock" "java.time.Duration"]))} (^java.time.Clock [^java.time.Clock java-time-Clock2964 ^java.time.Duration java-time-Duration2965] (. java.time.Clock offset java-time-Clock2964 java-time-Duration2965)))
(clojure.core/defn system-utc {:arglists (quote (["java.time.Clock"]))} (^java.time.Clock [] (. java.time.Clock systemUTC)))
(clojure.core/defn system-default-zone {:arglists (quote (["java.time.Clock"]))} (^java.time.Clock [] (. java.time.Clock systemDefaultZone)))
(clojure.core/defn fixed {:arglists (quote (["java.time.Clock" "java.time.Instant" "java.time.ZoneId"]))} (^java.time.Clock [^java.time.Instant java-time-Instant2966 ^java.time.ZoneId java-time-ZoneId2967] (. java.time.Clock fixed java-time-Instant2966 java-time-ZoneId2967)))
(clojure.core/defn tick-minutes {:arglists (quote (["java.time.Clock" "java.time.ZoneId"]))} (^java.time.Clock [^java.time.ZoneId java-time-ZoneId2968] (. java.time.Clock tickMinutes java-time-ZoneId2968)))
(clojure.core/defn tick-seconds {:arglists (quote (["java.time.Clock" "java.time.ZoneId"]))} (^java.time.Clock [^java.time.ZoneId java-time-ZoneId2969] (. java.time.Clock tickSeconds java-time-ZoneId2969)))
(clojure.core/defn millis {:arglists (quote (["java.time.Clock"]))} (^long [^java.time.Clock this2970] (.millis this2970)))
(clojure.core/defn with-zone {:arglists (quote (["java.time.Clock" "java.time.ZoneId"]))} (^java.time.Clock [^java.time.Clock this2971 ^java.time.ZoneId java-time-ZoneId2972] (.withZone this2971 java-time-ZoneId2972)))
(clojure.core/defn get-zone {:arglists (quote (["java.time.Clock"]))} (^java.time.ZoneId [^java.time.Clock this2973] (jti/getter zone this2973)))
(clojure.core/defn hash-code {:arglists (quote (["java.time.Clock"]))} (^java.lang.Integer [^java.time.Clock this2974] (.hashCode this2974)))
(clojure.core/defn system {:arglists (quote (["java.time.Clock" "java.time.ZoneId"]))} (^java.time.Clock [^java.time.ZoneId java-time-ZoneId2975] (. java.time.Clock system java-time-ZoneId2975)))
(clojure.core/defn instant {:arglists (quote (["java.time.Clock"]))} (^java.time.Instant [^java.time.Clock this2976] (.instant this2976)))
(clojure.core/defn equals {:arglists (quote (["java.time.Clock" "java.lang.Object"]))} (^java.lang.Boolean [^java.time.Clock this2977 ^java.lang.Object java-lang-Object2978] (.equals this2977 java-lang-Object2978)))
