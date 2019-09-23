// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.day_of_week');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.day_of_week.saturday = java.time.DayOfWeek.SATURDAY;
cljc.java_time.day_of_week.thursday = java.time.DayOfWeek.THURSDAY;
cljc.java_time.day_of_week.friday = java.time.DayOfWeek.FRIDAY;
cljc.java_time.day_of_week.wednesday = java.time.DayOfWeek.WEDNESDAY;
cljc.java_time.day_of_week.sunday = java.time.DayOfWeek.SUNDAY;
cljc.java_time.day_of_week.monday = java.time.DayOfWeek.MONDAY;
cljc.java_time.day_of_week.tuesday = java.time.DayOfWeek.TUESDAY;
cljc.java_time.day_of_week.range = (function cljc$java_time$day_of_week$range(this2575,java_time_temporal_TemporalField2576){
return this2575.range(java_time_temporal_TemporalField2576);
});
cljc.java_time.day_of_week.values = (function cljc$java_time$day_of_week$values(){
return java.time.DayOfWeek.values();
});
cljc.java_time.day_of_week.value_of = (function cljc$java_time$day_of_week$value_of(var_args){
var G__9826 = arguments.length;
switch (G__9826) {
case 1:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String2577){
return java.time.DayOfWeek.valueOf(java_lang_String2577);
});

cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class2578,java_lang_String2579){
return java.time.DayOfWeek.valueOf(java_lang_Class2578,java_lang_String2579);
});

cljc.java_time.day_of_week.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.day_of_week.of = (function cljc$java_time$day_of_week$of(int2580){
return java.time.DayOfWeek.of(int2580);
});
cljc.java_time.day_of_week.ordinal = (function cljc$java_time$day_of_week$ordinal(this2581){
return this2581.ordinal();
});
cljc.java_time.day_of_week.plus = (function cljc$java_time$day_of_week$plus(this2582,long2583){
return this2582.plus(long2583);
});
cljc.java_time.day_of_week.query = (function cljc$java_time$day_of_week$query(this2584,java_time_temporal_TemporalQuery2585){
return this2584.query(java_time_temporal_TemporalQuery2585);
});
cljc.java_time.day_of_week.to_string = (function cljc$java_time$day_of_week$to_string(this2586){
return this2586.toString();
});
cljc.java_time.day_of_week.minus = (function cljc$java_time$day_of_week$minus(this2587,long2588){
return this2587.minus(long2588);
});
cljc.java_time.day_of_week.get_display_name = (function cljc$java_time$day_of_week$get_display_name(this2589,java_time_format_TextStyle2590,java_util_Locale2591){
return this2589.displayName(java_time_format_TextStyle2590,java_util_Locale2591);
});
cljc.java_time.day_of_week.get_value = (function cljc$java_time$day_of_week$get_value(this2592){
return this2592.value();
});
cljc.java_time.day_of_week.name = (function cljc$java_time$day_of_week$name(this2593){
return this2593.name();
});
cljc.java_time.day_of_week.get_long = (function cljc$java_time$day_of_week$get_long(this2594,java_time_temporal_TemporalField2595){
return this2594.getLong(java_time_temporal_TemporalField2595);
});
cljc.java_time.day_of_week.get_declaring_class = (function cljc$java_time$day_of_week$get_declaring_class(this2596){
return this2596.declaringClass();
});
cljc.java_time.day_of_week.from = (function cljc$java_time$day_of_week$from(java_time_temporal_TemporalAccessor2597){
return java.time.DayOfWeek.from(java_time_temporal_TemporalAccessor2597);
});
cljc.java_time.day_of_week.is_supported = (function cljc$java_time$day_of_week$is_supported(this2598,java_time_temporal_TemporalField2599){
return this2598.isSupported(java_time_temporal_TemporalField2599);
});
cljc.java_time.day_of_week.hash_code = (function cljc$java_time$day_of_week$hash_code(this2600){
return this2600.hashCode();
});
cljc.java_time.day_of_week.adjust_into = (function cljc$java_time$day_of_week$adjust_into(this2601,java_time_temporal_Temporal2602){
return this2601.adjustInto(java_time_temporal_Temporal2602);
});
cljc.java_time.day_of_week.compare_to = (function cljc$java_time$day_of_week$compare_to(this2603,G__2604){
return this2603.compareTo(G__2604);
});
cljc.java_time.day_of_week.get = (function cljc$java_time$day_of_week$get(this2605,java_time_temporal_TemporalField2606){
return this2605.get(java_time_temporal_TemporalField2606);
});
cljc.java_time.day_of_week.equals = (function cljc$java_time$day_of_week$equals(this2607,java_lang_Object2608){
return this2607.equals(java_lang_Object2608);
});

//# sourceMappingURL=day_of_week.js.map
