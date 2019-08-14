// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.year');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.year.min_value = java.time.Year.MIN_VALUE;
cljc.java_time.year.max_value = java.time.Year.MAX_VALUE;
cljc.java_time.year.range = (function cljc$java_time$year$range(this2825,java_time_temporal_TemporalField2826){
return this2825.range(java_time_temporal_TemporalField2826);
});
cljc.java_time.year.of = (function cljc$java_time$year$of(int2827){
return java.time.Year.of(int2827);
});
cljc.java_time.year.at_day = (function cljc$java_time$year$at_day(this2828,int2829){
return this2828.atDay(int2829);
});
cljc.java_time.year.plus = (function cljc$java_time$year$plus(var_args){
var G__27702 = arguments.length;
switch (G__27702) {
case 2:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2830,G__2831){
return this2830.plus(G__2831);
});

cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2832,G__2833,G__2834){
return this2832.plus(G__2833,G__2834);
});

cljc.java_time.year.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year.is_valid_month_day = (function cljc$java_time$year$is_valid_month_day(this2835,java_time_MonthDay2836){
return this2835.isValidMonthDay(java_time_MonthDay2836);
});
cljc.java_time.year.query = (function cljc$java_time$year$query(this2837,java_time_temporal_TemporalQuery2838){
return this2837.query(java_time_temporal_TemporalQuery2838);
});
cljc.java_time.year.is_leap = (function cljc$java_time$year$is_leap(long57050){
return java.time.Year.isLeap(long57050);
});
cljc.java_time.year.to_string = (function cljc$java_time$year$to_string(this2839){
return this2839.toString();
});
cljc.java_time.year.is_before = (function cljc$java_time$year$is_before(this2840,java_time_Year2841){
return this2840.isBefore(java_time_Year2841);
});
cljc.java_time.year.minus = (function cljc$java_time$year$minus(var_args){
var G__27705 = arguments.length;
switch (G__27705) {
case 3:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2842,G__2843,G__2844){
return this2842.minus(G__2843,G__2844);
});

cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2845,G__2846){
return this2845.minus(G__2846);
});

cljc.java_time.year.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.year.at_month_day = (function cljc$java_time$year$at_month_day(this2847,java_time_MonthDay2848){
return this2847.atMonthDay(java_time_MonthDay2848);
});
cljc.java_time.year.get_value = (function cljc$java_time$year$get_value(this2849){
return this2849.value();
});
cljc.java_time.year.get_long = (function cljc$java_time$year$get_long(this2850,java_time_temporal_TemporalField2851){
return this2850.getLong(java_time_temporal_TemporalField2851);
});
cljc.java_time.year.at_month = (function cljc$java_time$year$at_month(this2852,G__2853){
return this2852.atMonth(G__2853);
});
cljc.java_time.year.until = (function cljc$java_time$year$until(this2854,java_time_temporal_Temporal2855,java_time_temporal_TemporalUnit2856){
return this2854.until(java_time_temporal_Temporal2855,java_time_temporal_TemporalUnit2856);
});
cljc.java_time.year.length = (function cljc$java_time$year$length(this2857){
return this2857.length();
});
cljc.java_time.year.from = (function cljc$java_time$year$from(java_time_temporal_TemporalAccessor2858){
return java.time.Year.from(java_time_temporal_TemporalAccessor2858);
});
cljc.java_time.year.is_after = (function cljc$java_time$year$is_after(this2859,java_time_Year2860){
return this2859.isAfter(java_time_Year2860);
});
cljc.java_time.year.is_supported = (function cljc$java_time$year$is_supported(this2861,G__2862){
return this2861.isSupported(G__2862);
});
cljc.java_time.year.minus_years = (function cljc$java_time$year$minus_years(this2863,long2864){
return this2863.minusYears(long2864);
});
cljc.java_time.year.parse = (function cljc$java_time$year$parse(var_args){
var G__27708 = arguments.length;
switch (G__27708) {
case 2:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2865,java_time_format_DateTimeFormatter2866){
return java.time.Year.parse(java_lang_CharSequence2865,java_time_format_DateTimeFormatter2866);
});

cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2867){
return java.time.Year.parse(java_lang_CharSequence2867);
});

cljc.java_time.year.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.year.hash_code = (function cljc$java_time$year$hash_code(this2868){
return this2868.hashCode();
});
cljc.java_time.year.adjust_into = (function cljc$java_time$year$adjust_into(this2869,java_time_temporal_Temporal2870){
return this2869.adjustInto(java_time_temporal_Temporal2870);
});
cljc.java_time.year.with$ = (function cljc$java_time$year$with(var_args){
var G__27711 = arguments.length;
switch (G__27711) {
case 2:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2871,G__2872){
return this2871.with(G__2872);
});

cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2873,G__2874,G__2875){
return this2873.with(G__2874,G__2875);
});

cljc.java_time.year.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.year.now = (function cljc$java_time$year$now(var_args){
var G__27714 = arguments.length;
switch (G__27714) {
case 0:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Year.now();
});

cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2877){
return java.time.Year.now(G__2877);
});

cljc.java_time.year.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.year.compare_to = (function cljc$java_time$year$compare_to(this2878,G__2879){
return this2878.compareTo(G__2879);
});
cljc.java_time.year.get = (function cljc$java_time$year$get(this2880,java_time_temporal_TemporalField2881){
return this2880.get(java_time_temporal_TemporalField2881);
});
cljc.java_time.year.equals = (function cljc$java_time$year$equals(this2882,java_lang_Object2883){
return this2882.equals(java_lang_Object2883);
});
cljc.java_time.year.format = (function cljc$java_time$year$format(this2884,java_time_format_DateTimeFormatter2885){
return this2884.format(java_time_format_DateTimeFormatter2885);
});
cljc.java_time.year.plus_years = (function cljc$java_time$year$plus_years(this2886,long2887){
return this2886.plusYears(long2887);
});

//# sourceMappingURL=year.js.map
