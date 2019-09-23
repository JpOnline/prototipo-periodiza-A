// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.duration');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.duration.zero = java.time.Duration.ZERO;
cljc.java_time.duration.minus_minutes = (function cljc$java_time$duration$minus_minutes(this2745,long2746){
return this2745.minusMinutes(long2746);
});
cljc.java_time.duration.to_nanos = (function cljc$java_time$duration$to_nanos(this2747){
return this2747.toNanos();
});
cljc.java_time.duration.minus_millis = (function cljc$java_time$duration$minus_millis(this2748,long2749){
return this2748.minusMillis(long2749);
});
cljc.java_time.duration.minus_hours = (function cljc$java_time$duration$minus_hours(this2750,long2751){
return this2750.minusHours(long2751);
});
cljc.java_time.duration.of_days = (function cljc$java_time$duration$of_days(long2752){
return java.time.Duration.ofDays(long2752);
});
cljc.java_time.duration.is_negative = (function cljc$java_time$duration$is_negative(this2753){
return this2753.isNegative();
});
cljc.java_time.duration.of = (function cljc$java_time$duration$of(long2754,java_time_temporal_TemporalUnit2755){
return java.time.Duration.of(long2754,java_time_temporal_TemporalUnit2755);
});
cljc.java_time.duration.is_zero = (function cljc$java_time$duration$is_zero(this2756){
return this2756.isZero();
});
cljc.java_time.duration.multiplied_by = (function cljc$java_time$duration$multiplied_by(this2757,long2758){
return this2757.multipliedBy(long2758);
});
cljc.java_time.duration.with_nanos = (function cljc$java_time$duration$with_nanos(this2759,int2760){
return this2759.withNanos(int2760);
});
cljc.java_time.duration.get_units = (function cljc$java_time$duration$get_units(this2761){
return this2761.units();
});
cljc.java_time.duration.get_nano = (function cljc$java_time$duration$get_nano(this2762){
return this2762.nano();
});
cljc.java_time.duration.plus_millis = (function cljc$java_time$duration$plus_millis(this2763,long2764){
return this2763.plusMillis(long2764);
});
cljc.java_time.duration.to_minutes = (function cljc$java_time$duration$to_minutes(this2765){
return this2765.toMinutes();
});
cljc.java_time.duration.minus_seconds = (function cljc$java_time$duration$minus_seconds(this2766,long2767){
return this2766.minusSeconds(long2767);
});
cljc.java_time.duration.plus_nanos = (function cljc$java_time$duration$plus_nanos(this2768,long2769){
return this2768.plusNanos(long2769);
});
cljc.java_time.duration.plus = (function cljc$java_time$duration$plus(var_args){
var G__10378 = arguments.length;
switch (G__10378) {
case 2:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2770,java_time_Duration2771){
return this2770.plus(java_time_Duration2771);
});

cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2772,long2773,java_time_temporal_TemporalUnit2774){
return this2772.plus(long2773,java_time_temporal_TemporalUnit2774);
});

cljc.java_time.duration.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.duration.divided_by = (function cljc$java_time$duration$divided_by(this2775,long2776){
return this2775.dividedBy(long2776);
});
cljc.java_time.duration.plus_minutes = (function cljc$java_time$duration$plus_minutes(this2777,long2778){
return this2777.plusMinutes(long2778);
});
cljc.java_time.duration.to_string = (function cljc$java_time$duration$to_string(this2779){
return this2779.toString();
});
cljc.java_time.duration.minus = (function cljc$java_time$duration$minus(var_args){
var G__10381 = arguments.length;
switch (G__10381) {
case 3:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2780,long2781,java_time_temporal_TemporalUnit2782){
return this2780.minus(long2781,java_time_temporal_TemporalUnit2782);
});

cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2783,java_time_Duration2784){
return this2783.minus(java_time_Duration2784);
});

cljc.java_time.duration.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.duration.add_to = (function cljc$java_time$duration$add_to(this2785,java_time_temporal_Temporal2786){
return this2785.addTo(java_time_temporal_Temporal2786);
});
cljc.java_time.duration.plus_hours = (function cljc$java_time$duration$plus_hours(this2787,long2788){
return this2787.plusHours(long2788);
});
cljc.java_time.duration.plus_days = (function cljc$java_time$duration$plus_days(this2789,long2790){
return this2789.plusDays(long2790);
});
cljc.java_time.duration.of_hours = (function cljc$java_time$duration$of_hours(long2791){
return java.time.Duration.ofHours(long2791);
});
cljc.java_time.duration.to_millis = (function cljc$java_time$duration$to_millis(this2792){
return this2792.toMillis();
});
cljc.java_time.duration.to_hours = (function cljc$java_time$duration$to_hours(this2793){
return this2793.toHours();
});
cljc.java_time.duration.of_nanos = (function cljc$java_time$duration$of_nanos(long2794){
return java.time.Duration.ofNanos(long2794);
});
cljc.java_time.duration.of_millis = (function cljc$java_time$duration$of_millis(long2795){
return java.time.Duration.ofMillis(long2795);
});
cljc.java_time.duration.negated = (function cljc$java_time$duration$negated(this2796){
return this2796.negated();
});
cljc.java_time.duration.abs = (function cljc$java_time$duration$abs(this2797){
return this2797.abs();
});
cljc.java_time.duration.between = (function cljc$java_time$duration$between(java_time_temporal_Temporal2798,java_time_temporal_Temporal2799){
return java.time.Duration.between(java_time_temporal_Temporal2798,java_time_temporal_Temporal2799);
});
cljc.java_time.duration.get_seconds = (function cljc$java_time$duration$get_seconds(this2800){
return this2800.seconds();
});
cljc.java_time.duration.from = (function cljc$java_time$duration$from(java_time_temporal_TemporalAmount2801){
return java.time.Duration.from(java_time_temporal_TemporalAmount2801);
});
cljc.java_time.duration.minus_nanos = (function cljc$java_time$duration$minus_nanos(this2802,long2803){
return this2802.minusNanos(long2803);
});
cljc.java_time.duration.parse = (function cljc$java_time$duration$parse(java_lang_CharSequence2804){
return java.time.Duration.parse(java_lang_CharSequence2804);
});
cljc.java_time.duration.hash_code = (function cljc$java_time$duration$hash_code(this2805){
return this2805.hashCode();
});
cljc.java_time.duration.with_seconds = (function cljc$java_time$duration$with_seconds(this2806,long2807){
return this2806.withSeconds(long2807);
});
cljc.java_time.duration.of_minutes = (function cljc$java_time$duration$of_minutes(long2808){
return java.time.Duration.ofMinutes(long2808);
});
cljc.java_time.duration.subtract_from = (function cljc$java_time$duration$subtract_from(this2809,java_time_temporal_Temporal2810){
return this2809.subtractFrom(java_time_temporal_Temporal2810);
});
cljc.java_time.duration.compare_to = (function cljc$java_time$duration$compare_to(this2811,G__2812){
return this2811.compareTo(G__2812);
});
cljc.java_time.duration.plus_seconds = (function cljc$java_time$duration$plus_seconds(this2813,long2814){
return this2813.plusSeconds(long2814);
});
cljc.java_time.duration.get = (function cljc$java_time$duration$get(this2815,java_time_temporal_TemporalUnit2816){
return this2815.get(java_time_temporal_TemporalUnit2816);
});
cljc.java_time.duration.equals = (function cljc$java_time$duration$equals(this2817,java_lang_Object2818){
return this2817.equals(java_lang_Object2818);
});
cljc.java_time.duration.of_seconds = (function cljc$java_time$duration$of_seconds(var_args){
var G__10384 = arguments.length;
switch (G__10384) {
case 1:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1 = (function (long2819){
return java.time.Duration.ofSeconds(long2819);
});

cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2 = (function (long2820,long2821){
return java.time.Duration.ofSeconds(long2820,long2821);
});

cljc.java_time.duration.of_seconds.cljs$lang$maxFixedArity = 2;

cljc.java_time.duration.minus_days = (function cljc$java_time$duration$minus_days(this2822,long2823){
return this2822.minusDays(long2823);
});
cljc.java_time.duration.to_days = (function cljc$java_time$duration$to_days(this2824){
return this2824.toDays();
});

//# sourceMappingURL=duration.js.map
