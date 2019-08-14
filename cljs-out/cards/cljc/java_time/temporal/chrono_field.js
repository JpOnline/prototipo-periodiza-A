// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.temporal.chrono_field');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time.temporal');
cljc.java_time.temporal.chrono_field.milli_of_second = java.time.temporal.ChronoField.MILLI_OF_SECOND;
cljc.java_time.temporal.chrono_field.year_of_era = java.time.temporal.ChronoField.YEAR_OF_ERA;
cljc.java_time.temporal.chrono_field.clock_hour_of_day = java.time.temporal.ChronoField.CLOCK_HOUR_OF_DAY;
cljc.java_time.temporal.chrono_field.era = java.time.temporal.ChronoField.ERA;
cljc.java_time.temporal.chrono_field.instant_seconds = java.time.temporal.ChronoField.INSTANT_SECONDS;
cljc.java_time.temporal.chrono_field.ampm_of_day = java.time.temporal.ChronoField.AMPM_OF_DAY;
cljc.java_time.temporal.chrono_field.offset_seconds = java.time.temporal.ChronoField.OFFSET_SECONDS;
cljc.java_time.temporal.chrono_field.nano_of_second = java.time.temporal.ChronoField.NANO_OF_SECOND;
cljc.java_time.temporal.chrono_field.nano_of_day = java.time.temporal.ChronoField.NANO_OF_DAY;
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month = java.time.temporal.ChronoField.ALIGNED_DAY_OF_WEEK_IN_MONTH;
cljc.java_time.temporal.chrono_field.month_of_year = java.time.temporal.ChronoField.MONTH_OF_YEAR;
cljc.java_time.temporal.chrono_field.hour_of_ampm = java.time.temporal.ChronoField.HOUR_OF_AMPM;
cljc.java_time.temporal.chrono_field.year = java.time.temporal.ChronoField.YEAR;
cljc.java_time.temporal.chrono_field.micro_of_second = java.time.temporal.ChronoField.MICRO_OF_SECOND;
cljc.java_time.temporal.chrono_field.aligned_week_of_year = java.time.temporal.ChronoField.ALIGNED_WEEK_OF_YEAR;
cljc.java_time.temporal.chrono_field.proleptic_month = java.time.temporal.ChronoField.PROLEPTIC_MONTH;
cljc.java_time.temporal.chrono_field.day_of_month = java.time.temporal.ChronoField.DAY_OF_MONTH;
cljc.java_time.temporal.chrono_field.second_of_minute = java.time.temporal.ChronoField.SECOND_OF_MINUTE;
cljc.java_time.temporal.chrono_field.second_of_day = java.time.temporal.ChronoField.SECOND_OF_DAY;
cljc.java_time.temporal.chrono_field.epoch_day = java.time.temporal.ChronoField.EPOCH_DAY;
cljc.java_time.temporal.chrono_field.day_of_year = java.time.temporal.ChronoField.DAY_OF_YEAR;
cljc.java_time.temporal.chrono_field.aligned_week_of_month = java.time.temporal.ChronoField.ALIGNED_WEEK_OF_MONTH;
cljc.java_time.temporal.chrono_field.day_of_week = java.time.temporal.ChronoField.DAY_OF_WEEK;
cljc.java_time.temporal.chrono_field.clock_hour_of_ampm = java.time.temporal.ChronoField.CLOCK_HOUR_OF_AMPM;
cljc.java_time.temporal.chrono_field.minute_of_day = java.time.temporal.ChronoField.MINUTE_OF_DAY;
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year = java.time.temporal.ChronoField.ALIGNED_DAY_OF_WEEK_IN_YEAR;
cljc.java_time.temporal.chrono_field.minute_of_hour = java.time.temporal.ChronoField.MINUTE_OF_HOUR;
cljc.java_time.temporal.chrono_field.hour_of_day = java.time.temporal.ChronoField.HOUR_OF_DAY;
cljc.java_time.temporal.chrono_field.milli_of_day = java.time.temporal.ChronoField.MILLI_OF_DAY;
cljc.java_time.temporal.chrono_field.micro_of_day = java.time.temporal.ChronoField.MICRO_OF_DAY;
cljc.java_time.temporal.chrono_field.get_range_unit = (function cljc$java_time$temporal$chrono_field$get_range_unit(this3087){
return this3087.rangeUnit();
});
cljc.java_time.temporal.chrono_field.range = (function cljc$java_time$temporal$chrono_field$range(this3088){
return this3088.range();
});
cljc.java_time.temporal.chrono_field.values = (function cljc$java_time$temporal$chrono_field$values(){
return java.time.temporal.ChronoField.values();
});
cljc.java_time.temporal.chrono_field.value_of = (function cljc$java_time$temporal$chrono_field$value_of(var_args){
var G__27546 = arguments.length;
switch (G__27546) {
case 1:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String3089){
return java.time.temporal.ChronoField.valueOf(java_lang_String3089);
});

cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class3090,java_lang_String3091){
return java.time.temporal.ChronoField.valueOf(java_lang_Class3090,java_lang_String3091);
});

cljc.java_time.temporal.chrono_field.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.temporal.chrono_field.resolve = (function cljc$java_time$temporal$chrono_field$resolve(this3092,java_util_Map3093,java_time_temporal_TemporalAccessor3094,java_time_format_ResolverStyle3095){
return this3092.resolve(java_util_Map3093,java_time_temporal_TemporalAccessor3094,java_time_format_ResolverStyle3095);
});
cljc.java_time.temporal.chrono_field.ordinal = (function cljc$java_time$temporal$chrono_field$ordinal(this3096){
return this3096.ordinal();
});
cljc.java_time.temporal.chrono_field.check_valid_int_value = (function cljc$java_time$temporal$chrono_field$check_valid_int_value(this3097,long3098){
return this3097.checkValidIntValue(long3098);
});
cljc.java_time.temporal.chrono_field.get_base_unit = (function cljc$java_time$temporal$chrono_field$get_base_unit(this3099){
return this3099.baseUnit();
});
cljc.java_time.temporal.chrono_field.to_string = (function cljc$java_time$temporal$chrono_field$to_string(this3100){
return this3100.toString();
});
cljc.java_time.temporal.chrono_field.is_date_based = (function cljc$java_time$temporal$chrono_field$is_date_based(this3101){
return this3101.isDateBased();
});
cljc.java_time.temporal.chrono_field.get_display_name = (function cljc$java_time$temporal$chrono_field$get_display_name(this3102,java_util_Locale3103){
return this3102.displayName(java_util_Locale3103);
});
cljc.java_time.temporal.chrono_field.name = (function cljc$java_time$temporal$chrono_field$name(this3104){
return this3104.name();
});
cljc.java_time.temporal.chrono_field.is_supported_by = (function cljc$java_time$temporal$chrono_field$is_supported_by(this3105,java_time_temporal_TemporalAccessor3106){
return this3105.isSupportedBy(java_time_temporal_TemporalAccessor3106);
});
cljc.java_time.temporal.chrono_field.range_refined_by = (function cljc$java_time$temporal$chrono_field$range_refined_by(this3107,java_time_temporal_TemporalAccessor3108){
return this3107.rangeRefinedBy(java_time_temporal_TemporalAccessor3108);
});
cljc.java_time.temporal.chrono_field.get_declaring_class = (function cljc$java_time$temporal$chrono_field$get_declaring_class(this3109){
return this3109.declaringClass();
});
cljc.java_time.temporal.chrono_field.hash_code = (function cljc$java_time$temporal$chrono_field$hash_code(this3110){
return this3110.hashCode();
});
cljc.java_time.temporal.chrono_field.adjust_into = (function cljc$java_time$temporal$chrono_field$adjust_into(this3111,java_time_temporal_Temporal3112,long3113){
return this3111.adjustInto(java_time_temporal_Temporal3112,long3113);
});
cljc.java_time.temporal.chrono_field.get_from = (function cljc$java_time$temporal$chrono_field$get_from(this3114,java_time_temporal_TemporalAccessor3115){
return this3114.from(java_time_temporal_TemporalAccessor3115);
});
cljc.java_time.temporal.chrono_field.compare_to = (function cljc$java_time$temporal$chrono_field$compare_to(this3116,G__3117){
return this3116.compareTo(G__3117);
});
cljc.java_time.temporal.chrono_field.equals = (function cljc$java_time$temporal$chrono_field$equals(this3118,java_lang_Object3119){
return this3118.equals(java_lang_Object3119);
});
cljc.java_time.temporal.chrono_field.is_time_based = (function cljc$java_time$temporal$chrono_field$is_time_based(this3120){
return this3120.isTimeBased();
});
cljc.java_time.temporal.chrono_field.check_valid_value = (function cljc$java_time$temporal$chrono_field$check_valid_value(this3121,long3122){
return this3121.checkValidValue(long3122);
});

//# sourceMappingURL=chrono_field.js.map
