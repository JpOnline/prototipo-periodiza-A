// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.month');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.month.may = java.time.Month.MAY;
cljc.java_time.month.december = java.time.Month.DECEMBER;
cljc.java_time.month.june = java.time.Month.JUNE;
cljc.java_time.month.september = java.time.Month.SEPTEMBER;
cljc.java_time.month.february = java.time.Month.FEBRUARY;
cljc.java_time.month.january = java.time.Month.JANUARY;
cljc.java_time.month.november = java.time.Month.NOVEMBER;
cljc.java_time.month.august = java.time.Month.AUGUST;
cljc.java_time.month.july = java.time.Month.JULY;
cljc.java_time.month.march = java.time.Month.MARCH;
cljc.java_time.month.october = java.time.Month.OCTOBER;
cljc.java_time.month.april = java.time.Month.APRIL;
cljc.java_time.month.range = (function cljc$java_time$month$range(this2704,java_time_temporal_TemporalField2705){
return this2704.range(java_time_temporal_TemporalField2705);
});
cljc.java_time.month.values = (function cljc$java_time$month$values(){
return java.time.Month.values();
});
cljc.java_time.month.value_of = (function cljc$java_time$month$value_of(var_args){
var G__10328 = arguments.length;
switch (G__10328) {
case 1:
return cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String2706){
return java.time.Month.valueOf(java_lang_String2706);
});

cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class2707,java_lang_String2708){
return java.time.Month.valueOf(java_lang_Class2707,java_lang_String2708);
});

cljc.java_time.month.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.month.of = (function cljc$java_time$month$of(int2709){
return java.time.Month.of(int2709);
});
cljc.java_time.month.ordinal = (function cljc$java_time$month$ordinal(this2710){
return this2710.ordinal();
});
cljc.java_time.month.first_month_of_quarter = (function cljc$java_time$month$first_month_of_quarter(this2711){
return this2711.firstMonthOfQuarter();
});
cljc.java_time.month.min_length = (function cljc$java_time$month$min_length(this2712){
return this2712.minLength();
});
cljc.java_time.month.plus = (function cljc$java_time$month$plus(this2713,long2714){
return this2713.plus(long2714);
});
cljc.java_time.month.query = (function cljc$java_time$month$query(this2715,java_time_temporal_TemporalQuery2716){
return this2715.query(java_time_temporal_TemporalQuery2716);
});
cljc.java_time.month.to_string = (function cljc$java_time$month$to_string(this2717){
return this2717.toString();
});
cljc.java_time.month.first_day_of_year = (function cljc$java_time$month$first_day_of_year(this2718,boolean2719){
return this2718.firstDayOfYear(boolean2719);
});
cljc.java_time.month.minus = (function cljc$java_time$month$minus(this2720,long2721){
return this2720.minus(long2721);
});
cljc.java_time.month.get_display_name = (function cljc$java_time$month$get_display_name(this2722,java_time_format_TextStyle2723,java_util_Locale2724){
return this2722.displayName(java_time_format_TextStyle2723,java_util_Locale2724);
});
cljc.java_time.month.get_value = (function cljc$java_time$month$get_value(this2725){
return this2725.value();
});
cljc.java_time.month.max_length = (function cljc$java_time$month$max_length(this2726){
return this2726.maxLength();
});
cljc.java_time.month.name = (function cljc$java_time$month$name(this2727){
return this2727.name();
});
cljc.java_time.month.get_long = (function cljc$java_time$month$get_long(this2728,java_time_temporal_TemporalField2729){
return this2728.getLong(java_time_temporal_TemporalField2729);
});
cljc.java_time.month.length = (function cljc$java_time$month$length(this2730,boolean2731){
return this2730.length(boolean2731);
});
cljc.java_time.month.get_declaring_class = (function cljc$java_time$month$get_declaring_class(this2732){
return this2732.declaringClass();
});
cljc.java_time.month.from = (function cljc$java_time$month$from(java_time_temporal_TemporalAccessor2733){
return java.time.Month.from(java_time_temporal_TemporalAccessor2733);
});
cljc.java_time.month.is_supported = (function cljc$java_time$month$is_supported(this2734,java_time_temporal_TemporalField2735){
return this2734.isSupported(java_time_temporal_TemporalField2735);
});
cljc.java_time.month.hash_code = (function cljc$java_time$month$hash_code(this2736){
return this2736.hashCode();
});
cljc.java_time.month.adjust_into = (function cljc$java_time$month$adjust_into(this2737,java_time_temporal_Temporal2738){
return this2737.adjustInto(java_time_temporal_Temporal2738);
});
cljc.java_time.month.compare_to = (function cljc$java_time$month$compare_to(this2739,G__2740){
return this2739.compareTo(G__2740);
});
cljc.java_time.month.get = (function cljc$java_time$month$get(this2741,java_time_temporal_TemporalField2742){
return this2741.get(java_time_temporal_TemporalField2742);
});
cljc.java_time.month.equals = (function cljc$java_time$month$equals(this2743,java_lang_Object2744){
return this2743.equals(java_lang_Object2744);
});

//# sourceMappingURL=month.js.map
