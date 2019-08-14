// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.local_time');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.local_time.max = java.time.LocalTime.MAX;
cljc.java_time.local_time.noon = java.time.LocalTime.NOON;
cljc.java_time.local_time.midnight = java.time.LocalTime.MIDNIGHT;
cljc.java_time.local_time.min = java.time.LocalTime.MIN;
cljc.java_time.local_time.minus_minutes = (function cljc$java_time$local_time$minus_minutes(this2609,long2610){
return this2609.minusMinutes(long2610);
});
cljc.java_time.local_time.truncated_to = (function cljc$java_time$local_time$truncated_to(this2611,java_time_temporal_TemporalUnit2612){
return this2611.truncatedTo(java_time_temporal_TemporalUnit2612);
});
cljc.java_time.local_time.range = (function cljc$java_time$local_time$range(this2613,java_time_temporal_TemporalField2614){
return this2613.range(java_time_temporal_TemporalField2614);
});
cljc.java_time.local_time.get_hour = (function cljc$java_time$local_time$get_hour(this2615){
return this2615.hour();
});
cljc.java_time.local_time.at_offset = (function cljc$java_time$local_time$at_offset(this2616,java_time_ZoneOffset2617){
return this2616.atOffset(java_time_ZoneOffset2617);
});
cljc.java_time.local_time.minus_hours = (function cljc$java_time$local_time$minus_hours(this2618,long2619){
return this2618.minusHours(long2619);
});
cljc.java_time.local_time.of = (function cljc$java_time$local_time$of(var_args){
var G__27655 = arguments.length;
switch (G__27655) {
case 2:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2 = (function (int2620,int2621){
return java.time.LocalTime.of(int2620,int2621);
});

cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3 = (function (int2622,int2623,int2624){
return java.time.LocalTime.of(int2622,int2623,int2624);
});

cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4 = (function (int2625,int2626,int2627,int2628){
return java.time.LocalTime.of(int2625,int2626,int2627,int2628);
});

cljc.java_time.local_time.of.cljs$lang$maxFixedArity = 4;

cljc.java_time.local_time.get_nano = (function cljc$java_time$local_time$get_nano(this2629){
return this2629.nano();
});
cljc.java_time.local_time.minus_seconds = (function cljc$java_time$local_time$minus_seconds(this2630,long2631){
return this2630.minusSeconds(long2631);
});
cljc.java_time.local_time.get_second = (function cljc$java_time$local_time$get_second(this2632){
return this2632.second();
});
cljc.java_time.local_time.plus_nanos = (function cljc$java_time$local_time$plus_nanos(this2633,long2634){
return this2633.plusNanos(long2634);
});
cljc.java_time.local_time.plus = (function cljc$java_time$local_time$plus(var_args){
var G__27658 = arguments.length;
switch (G__27658) {
case 3:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2635,G__2636,G__2637){
return this2635.plus(G__2636,G__2637);
});

cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2638,G__2639){
return this2638.plus(G__2639);
});

cljc.java_time.local_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_time.with_hour = (function cljc$java_time$local_time$with_hour(this2640,int2641){
return this2640.withHour(int2641);
});
cljc.java_time.local_time.with_minute = (function cljc$java_time$local_time$with_minute(this2642,int2643){
return this2642.withMinute(int2643);
});
cljc.java_time.local_time.plus_minutes = (function cljc$java_time$local_time$plus_minutes(this2644,long2645){
return this2644.plusMinutes(long2645);
});
cljc.java_time.local_time.query = (function cljc$java_time$local_time$query(this2646,java_time_temporal_TemporalQuery2647){
return this2646.query(java_time_temporal_TemporalQuery2647);
});
cljc.java_time.local_time.at_date = (function cljc$java_time$local_time$at_date(this2648,java_time_LocalDate2649){
return this2648.atDate(java_time_LocalDate2649);
});
cljc.java_time.local_time.to_string = (function cljc$java_time$local_time$to_string(this2650){
return this2650.toString();
});
cljc.java_time.local_time.is_before = (function cljc$java_time$local_time$is_before(this2651,java_time_LocalTime2652){
return this2651.isBefore(java_time_LocalTime2652);
});
cljc.java_time.local_time.minus = (function cljc$java_time$local_time$minus(var_args){
var G__27661 = arguments.length;
switch (G__27661) {
case 3:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2653,G__2654,G__2655){
return this2653.minus(G__2654,G__2655);
});

cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2656,G__2657){
return this2656.minus(G__2657);
});

cljc.java_time.local_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_time.plus_hours = (function cljc$java_time$local_time$plus_hours(this2658,long2659){
return this2658.plusHours(long2659);
});
cljc.java_time.local_time.to_second_of_day = (function cljc$java_time$local_time$to_second_of_day(this2660){
return this2660.toSecondOfDay();
});
cljc.java_time.local_time.get_long = (function cljc$java_time$local_time$get_long(this2661,java_time_temporal_TemporalField2662){
return this2661.getLong(java_time_temporal_TemporalField2662);
});
cljc.java_time.local_time.with_nano = (function cljc$java_time$local_time$with_nano(this2663,int2664){
return this2663.withNano(int2664);
});
cljc.java_time.local_time.until = (function cljc$java_time$local_time$until(this2665,java_time_temporal_Temporal2666,java_time_temporal_TemporalUnit2667){
return this2665.until(java_time_temporal_Temporal2666,java_time_temporal_TemporalUnit2667);
});
cljc.java_time.local_time.of_nano_of_day = (function cljc$java_time$local_time$of_nano_of_day(long2668){
return java.time.LocalTime.ofNanoOfDay(long2668);
});
cljc.java_time.local_time.from = (function cljc$java_time$local_time$from(java_time_temporal_TemporalAccessor2669){
return java.time.LocalTime.from(java_time_temporal_TemporalAccessor2669);
});
cljc.java_time.local_time.is_after = (function cljc$java_time$local_time$is_after(this2670,java_time_LocalTime2671){
return this2670.isAfter(java_time_LocalTime2671);
});
cljc.java_time.local_time.minus_nanos = (function cljc$java_time$local_time$minus_nanos(this2672,long2673){
return this2672.minusNanos(long2673);
});
cljc.java_time.local_time.is_supported = (function cljc$java_time$local_time$is_supported(this2674,G__2675){
return this2674.isSupported(G__2675);
});
cljc.java_time.local_time.parse = (function cljc$java_time$local_time$parse(var_args){
var G__27664 = arguments.length;
switch (G__27664) {
case 2:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2676,java_time_format_DateTimeFormatter2677){
return java.time.LocalTime.parse(java_lang_CharSequence2676,java_time_format_DateTimeFormatter2677);
});

cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2678){
return java.time.LocalTime.parse(java_lang_CharSequence2678);
});

cljc.java_time.local_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_time.with_second = (function cljc$java_time$local_time$with_second(this2679,int2680){
return this2679.withSecond(int2680);
});
cljc.java_time.local_time.get_minute = (function cljc$java_time$local_time$get_minute(this2681){
return this2681.minute();
});
cljc.java_time.local_time.hash_code = (function cljc$java_time$local_time$hash_code(this2682){
return this2682.hashCode();
});
cljc.java_time.local_time.adjust_into = (function cljc$java_time$local_time$adjust_into(this2683,java_time_temporal_Temporal2684){
return this2683.adjustInto(java_time_temporal_Temporal2684);
});
cljc.java_time.local_time.with$ = (function cljc$java_time$local_time$with(var_args){
var G__27667 = arguments.length;
switch (G__27667) {
case 2:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2685,G__2686){
return this2685.with(G__2686);
});

cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2687,G__2688,G__2689){
return this2687.with(G__2688,G__2689);
});

cljc.java_time.local_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_time.now = (function cljc$java_time$local_time$now(var_args){
var G__27670 = arguments.length;
switch (G__27670) {
case 0:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalTime.now();
});

cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2691){
return java.time.LocalTime.now(G__2691);
});

cljc.java_time.local_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.local_time.compare_to = (function cljc$java_time$local_time$compare_to(this2692,G__2693){
return this2692.compareTo(G__2693);
});
cljc.java_time.local_time.to_nano_of_day = (function cljc$java_time$local_time$to_nano_of_day(this2694){
return this2694.toNanoOfDay();
});
cljc.java_time.local_time.plus_seconds = (function cljc$java_time$local_time$plus_seconds(this2695,long2696){
return this2695.plusSeconds(long2696);
});
cljc.java_time.local_time.get = (function cljc$java_time$local_time$get(this2697,java_time_temporal_TemporalField2698){
return this2697.get(java_time_temporal_TemporalField2698);
});
cljc.java_time.local_time.of_second_of_day = (function cljc$java_time$local_time$of_second_of_day(long2699){
return java.time.LocalTime.ofSecondOfDay(long2699);
});
cljc.java_time.local_time.equals = (function cljc$java_time$local_time$equals(this2700,java_lang_Object2701){
return this2700.equals(java_lang_Object2701);
});
cljc.java_time.local_time.format = (function cljc$java_time$local_time$format(this2702,java_time_format_DateTimeFormatter2703){
return this2702.format(java_time_format_DateTimeFormatter2703);
});

//# sourceMappingURL=local_time.js.map
