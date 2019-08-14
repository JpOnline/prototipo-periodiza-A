// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.zone_offset');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.zone_offset.max = java.time.ZoneOffset.MAX;
cljc.java_time.zone_offset.min = java.time.ZoneOffset.MIN;
cljc.java_time.zone_offset.utc = java.time.ZoneOffset.UTC;
cljc.java_time.zone_offset.get_available_zone_ids = (function cljc$java_time$zone_offset$get_available_zone_ids(){
return java.time.ZoneOffset.getAvailableZoneIds();
});
cljc.java_time.zone_offset.range = (function cljc$java_time$zone_offset$range(this2979,java_time_temporal_TemporalField2980){
return this2979.range(java_time_temporal_TemporalField2980);
});
cljc.java_time.zone_offset.of_total_seconds = (function cljc$java_time$zone_offset$of_total_seconds(int2981){
return java.time.ZoneOffset.ofTotalSeconds(int2981);
});
cljc.java_time.zone_offset.of = (function cljc$java_time$zone_offset$of(var_args){
var G__24495 = arguments.length;
switch (G__24495) {
case 1:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1 = (function (G__2983){
return java.time.ZoneOffset.of(G__2983);
});

cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String2984,java_util_Map2985){
return java.time.ZoneOffset.of(java_lang_String2984,java_util_Map2985);
});

cljc.java_time.zone_offset.of.cljs$lang$maxFixedArity = 2;

cljc.java_time.zone_offset.of_offset = (function cljc$java_time$zone_offset$of_offset(java_lang_String2986,java_time_ZoneOffset2987){
return java.time.ZoneOffset.ofOffset(java_lang_String2986,java_time_ZoneOffset2987);
});
cljc.java_time.zone_offset.query = (function cljc$java_time$zone_offset$query(this2988,java_time_temporal_TemporalQuery2989){
return this2988.query(java_time_temporal_TemporalQuery2989);
});
cljc.java_time.zone_offset.to_string = (function cljc$java_time$zone_offset$to_string(this2990){
return this2990.toString();
});
cljc.java_time.zone_offset.get_display_name = (function cljc$java_time$zone_offset$get_display_name(this2991,java_time_format_TextStyle2992,java_util_Locale2993){
return this2991.displayName(java_time_format_TextStyle2992,java_util_Locale2993);
});
cljc.java_time.zone_offset.get_long = (function cljc$java_time$zone_offset$get_long(this2994,java_time_temporal_TemporalField2995){
return this2994.getLong(java_time_temporal_TemporalField2995);
});
cljc.java_time.zone_offset.get_rules = (function cljc$java_time$zone_offset$get_rules(this2996){
return this2996.rules();
});
cljc.java_time.zone_offset.of_hours = (function cljc$java_time$zone_offset$of_hours(int2997){
return java.time.ZoneOffset.ofHours(int2997);
});
cljc.java_time.zone_offset.get_id = (function cljc$java_time$zone_offset$get_id(this2998){
return this2998.id();
});
cljc.java_time.zone_offset.normalized = (function cljc$java_time$zone_offset$normalized(this2999){
return this2999.normalized();
});
cljc.java_time.zone_offset.system_default = (function cljc$java_time$zone_offset$system_default(){
return java.time.ZoneOffset.systemDefault();
});
cljc.java_time.zone_offset.from = (function cljc$java_time$zone_offset$from(G__3001){
return java.time.ZoneOffset.from(G__3001);
});
cljc.java_time.zone_offset.of_hours_minutes_seconds = (function cljc$java_time$zone_offset$of_hours_minutes_seconds(int3002,int3003,int3004){
return java.time.ZoneOffset.ofHoursMinutesSeconds(int3002,int3003,int3004);
});
cljc.java_time.zone_offset.is_supported = (function cljc$java_time$zone_offset$is_supported(this3005,java_time_temporal_TemporalField3006){
return this3005.isSupported(java_time_temporal_TemporalField3006);
});
cljc.java_time.zone_offset.hash_code = (function cljc$java_time$zone_offset$hash_code(this3007){
return this3007.hashCode();
});
cljc.java_time.zone_offset.get_total_seconds = (function cljc$java_time$zone_offset$get_total_seconds(this3008){
return this3008.totalSeconds();
});
cljc.java_time.zone_offset.adjust_into = (function cljc$java_time$zone_offset$adjust_into(this3009,java_time_temporal_Temporal3010){
return this3009.adjustInto(java_time_temporal_Temporal3010);
});
cljc.java_time.zone_offset.of_hours_minutes = (function cljc$java_time$zone_offset$of_hours_minutes(int3011,int3012){
return java.time.ZoneOffset.ofHoursMinutes(int3011,int3012);
});
cljc.java_time.zone_offset.compare_to = (function cljc$java_time$zone_offset$compare_to(this3013,G__3014){
return this3013.compareTo(G__3014);
});
cljc.java_time.zone_offset.get = (function cljc$java_time$zone_offset$get(this3015,java_time_temporal_TemporalField3016){
return this3015.get(java_time_temporal_TemporalField3016);
});
cljc.java_time.zone_offset.equals = (function cljc$java_time$zone_offset$equals(this3017,java_lang_Object3018){
return this3017.equals(java_lang_Object3018);
});
