// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.zone_id');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.zone_id.short_ids = java.time.ZoneId.SHORT_IDS;
cljc.java_time.zone_id.get_available_zone_ids = (function cljc$java_time$zone_id$get_available_zone_ids(){
return java.time.ZoneId.getAvailableZoneIds();
});
cljc.java_time.zone_id.of = (function cljc$java_time$zone_id$of(var_args){
var G__24442 = arguments.length;
switch (G__24442) {
case 1:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String2559){
return java.time.ZoneId.of(java_lang_String2559);
});

cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String2560,java_util_Map2561){
return java.time.ZoneId.of(java_lang_String2560,java_util_Map2561);
});

cljc.java_time.zone_id.of.cljs$lang$maxFixedArity = 2;

cljc.java_time.zone_id.of_offset = (function cljc$java_time$zone_id$of_offset(java_lang_String2562,java_time_ZoneOffset2563){
return java.time.ZoneId.ofOffset(java_lang_String2562,java_time_ZoneOffset2563);
});
cljc.java_time.zone_id.to_string = (function cljc$java_time$zone_id$to_string(this2564){
return this2564.toString();
});
cljc.java_time.zone_id.get_display_name = (function cljc$java_time$zone_id$get_display_name(this2565,java_time_format_TextStyle2566,java_util_Locale2567){
return this2565.displayName(java_time_format_TextStyle2566,java_util_Locale2567);
});
cljc.java_time.zone_id.get_rules = (function cljc$java_time$zone_id$get_rules(this2568){
return this2568.rules();
});
cljc.java_time.zone_id.get_id = (function cljc$java_time$zone_id$get_id(this2569){
return this2569.id();
});
cljc.java_time.zone_id.normalized = (function cljc$java_time$zone_id$normalized(this2570){
return this2570.normalized();
});
cljc.java_time.zone_id.system_default = (function cljc$java_time$zone_id$system_default(){
return java.time.ZoneId.systemDefault();
});
cljc.java_time.zone_id.from = (function cljc$java_time$zone_id$from(java_time_temporal_TemporalAccessor2571){
return java.time.ZoneId.from(java_time_temporal_TemporalAccessor2571);
});
cljc.java_time.zone_id.hash_code = (function cljc$java_time$zone_id$hash_code(this2572){
return this2572.hashCode();
});
cljc.java_time.zone_id.equals = (function cljc$java_time$zone_id$equals(this2573,java_lang_Object2574){
return this2573.equals(java_lang_Object2574);
});
