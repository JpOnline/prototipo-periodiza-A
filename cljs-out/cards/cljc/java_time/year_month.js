// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.year_month');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.year_month.length_of_year = (function cljc$java_time$year_month$length_of_year(this2888){
return this2888.lengthOfYear();
});
cljc.java_time.year_month.range = (function cljc$java_time$year_month$range(this2889,java_time_temporal_TemporalField2890){
return this2889.range(java_time_temporal_TemporalField2890);
});
cljc.java_time.year_month.is_valid_day = (function cljc$java_time$year_month$is_valid_day(this2891,int2892){
return this2891.isValidDay(int2892);
});
cljc.java_time.year_month.of = (function cljc$java_time$year_month$of(G__2894,G__2895){
return java.time.YearMonth.of(G__2894,G__2895);
});
cljc.java_time.year_month.with_month = (function cljc$java_time$year_month$with_month(this2896,int2897){
return this2896.withMonth(int2897);
});
cljc.java_time.year_month.at_day = (function cljc$java_time$year_month$at_day(this2898,int2899){
return this2898.atDay(int2899);
});
cljc.java_time.year_month.get_year = (function cljc$java_time$year_month$get_year(this2900){
return this2900.year();
});
cljc.java_time.year_month.plus = (function cljc$java_time$year_month$plus(var_args){
var G__9789 = arguments.length;
switch (G__9789) {
case 3:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2901,G__2902,G__2903){
return this2901.plus(G__2902,G__2903);
});

cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2904,G__2905){
return this2904.plus(G__2905);
});

cljc.java_time.year_month.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year_month.is_leap_year = (function cljc$java_time$year_month$is_leap_year(this2906){
return this2906.isLeapYear();
});
cljc.java_time.year_month.query = (function cljc$java_time$year_month$query(this2907,java_time_temporal_TemporalQuery2908){
return this2907.query(java_time_temporal_TemporalQuery2908);
});
cljc.java_time.year_month.to_string = (function cljc$java_time$year_month$to_string(this2909){
return this2909.toString();
});
cljc.java_time.year_month.plus_months = (function cljc$java_time$year_month$plus_months(this2910,long2911){
return this2910.plusMonths(long2911);
});
cljc.java_time.year_month.is_before = (function cljc$java_time$year_month$is_before(this2912,java_time_YearMonth2913){
return this2912.isBefore(java_time_YearMonth2913);
});
cljc.java_time.year_month.minus_months = (function cljc$java_time$year_month$minus_months(this2914,long2915){
return this2914.minusMonths(long2915);
});
cljc.java_time.year_month.minus = (function cljc$java_time$year_month$minus(var_args){
var G__9792 = arguments.length;
switch (G__9792) {
case 2:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2916,G__2917){
return this2916.minus(G__2917);
});

cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2918,G__2919,G__2920){
return this2918.minus(G__2919,G__2920);
});

cljc.java_time.year_month.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year_month.get_long = (function cljc$java_time$year_month$get_long(this2921,java_time_temporal_TemporalField2922){
return this2921.getLong(java_time_temporal_TemporalField2922);
});
cljc.java_time.year_month.with_year = (function cljc$java_time$year_month$with_year(this2923,int2924){
return this2923.withYear(int2924);
});
cljc.java_time.year_month.at_end_of_month = (function cljc$java_time$year_month$at_end_of_month(this2925){
return this2925.atEndOfMonth();
});
cljc.java_time.year_month.length_of_month = (function cljc$java_time$year_month$length_of_month(this2926){
return this2926.lengthOfMonth();
});
cljc.java_time.year_month.until = (function cljc$java_time$year_month$until(this2927,java_time_temporal_Temporal2928,java_time_temporal_TemporalUnit2929){
return this2927.until(java_time_temporal_Temporal2928,java_time_temporal_TemporalUnit2929);
});
cljc.java_time.year_month.from = (function cljc$java_time$year_month$from(java_time_temporal_TemporalAccessor2930){
return java.time.YearMonth.from(java_time_temporal_TemporalAccessor2930);
});
cljc.java_time.year_month.is_after = (function cljc$java_time$year_month$is_after(this2931,java_time_YearMonth2932){
return this2931.isAfter(java_time_YearMonth2932);
});
cljc.java_time.year_month.is_supported = (function cljc$java_time$year_month$is_supported(this2933,G__2934){
return this2933.isSupported(G__2934);
});
cljc.java_time.year_month.minus_years = (function cljc$java_time$year_month$minus_years(this2935,long2936){
return this2935.minusYears(long2936);
});
cljc.java_time.year_month.parse = (function cljc$java_time$year_month$parse(var_args){
var G__9795 = arguments.length;
switch (G__9795) {
case 2:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2937,java_time_format_DateTimeFormatter2938){
return java.time.YearMonth.parse(java_lang_CharSequence2937,java_time_format_DateTimeFormatter2938);
});

cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2939){
return java.time.YearMonth.parse(java_lang_CharSequence2939);
});

cljc.java_time.year_month.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.year_month.hash_code = (function cljc$java_time$year_month$hash_code(this2940){
return this2940.hashCode();
});
cljc.java_time.year_month.adjust_into = (function cljc$java_time$year_month$adjust_into(this2941,java_time_temporal_Temporal2942){
return this2941.adjustInto(java_time_temporal_Temporal2942);
});
cljc.java_time.year_month.with$ = (function cljc$java_time$year_month$with(var_args){
var G__9798 = arguments.length;
switch (G__9798) {
case 2:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2943,G__2944){
return this2943.with(G__2944);
});

cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2945,G__2946,G__2947){
return this2945.with(G__2946,G__2947);
});

cljc.java_time.year_month.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.year_month.now = (function cljc$java_time$year_month$now(var_args){
var G__9801 = arguments.length;
switch (G__9801) {
case 1:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2949){
return java.time.YearMonth.now(G__2949);
});

cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.YearMonth.now();
});

cljc.java_time.year_month.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.year_month.get_month_value = (function cljc$java_time$year_month$get_month_value(this2950){
return this2950.monthValue();
});
cljc.java_time.year_month.compare_to = (function cljc$java_time$year_month$compare_to(this2951,G__2952){
return this2951.compareTo(G__2952);
});
cljc.java_time.year_month.get_month = (function cljc$java_time$year_month$get_month(this2953){
return this2953.month();
});
cljc.java_time.year_month.get = (function cljc$java_time$year_month$get(this2954,java_time_temporal_TemporalField2955){
return this2954.get(java_time_temporal_TemporalField2955);
});
cljc.java_time.year_month.equals = (function cljc$java_time$year_month$equals(this2956,java_lang_Object2957){
return this2956.equals(java_lang_Object2957);
});
cljc.java_time.year_month.format = (function cljc$java_time$year_month$format(this2958,java_time_format_DateTimeFormatter2959){
return this2958.format(java_time_format_DateTimeFormatter2959);
});
cljc.java_time.year_month.plus_years = (function cljc$java_time$year_month$plus_years(this2960,long2961){
return this2960.plusYears(long2961);
});

//# sourceMappingURL=year_month.js.map
