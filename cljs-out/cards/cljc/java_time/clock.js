// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.clock');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.clock.tick = (function cljc$java_time$clock$tick(java_time_Clock2962,java_time_Duration2963){
return java.time.Clock.tick(java_time_Clock2962,java_time_Duration2963);
});
cljc.java_time.clock.offset = (function cljc$java_time$clock$offset(java_time_Clock2964,java_time_Duration2965){
return java.time.Clock.offset(java_time_Clock2964,java_time_Duration2965);
});
cljc.java_time.clock.system_utc = (function cljc$java_time$clock$system_utc(){
return java.time.Clock.systemUTC();
});
cljc.java_time.clock.system_default_zone = (function cljc$java_time$clock$system_default_zone(){
return java.time.Clock.systemDefaultZone();
});
cljc.java_time.clock.fixed = (function cljc$java_time$clock$fixed(java_time_Instant2966,java_time_ZoneId2967){
return java.time.Clock.fixed(java_time_Instant2966,java_time_ZoneId2967);
});
cljc.java_time.clock.tick_minutes = (function cljc$java_time$clock$tick_minutes(java_time_ZoneId2968){
return java.time.Clock.tickMinutes(java_time_ZoneId2968);
});
cljc.java_time.clock.tick_seconds = (function cljc$java_time$clock$tick_seconds(java_time_ZoneId2969){
return java.time.Clock.tickSeconds(java_time_ZoneId2969);
});
cljc.java_time.clock.millis = (function cljc$java_time$clock$millis(this2970){
return this2970.millis();
});
cljc.java_time.clock.with_zone = (function cljc$java_time$clock$with_zone(this2971,java_time_ZoneId2972){
return this2971.withZone(java_time_ZoneId2972);
});
cljc.java_time.clock.get_zone = (function cljc$java_time$clock$get_zone(this2973){
return this2973.zone();
});
cljc.java_time.clock.hash_code = (function cljc$java_time$clock$hash_code(this2974){
return this2974.hashCode();
});
cljc.java_time.clock.system = (function cljc$java_time$clock$system(java_time_ZoneId2975){
return java.time.Clock.system(java_time_ZoneId2975);
});
cljc.java_time.clock.instant = (function cljc$java_time$clock$instant(this2976){
return this2976.instant();
});
cljc.java_time.clock.equals = (function cljc$java_time$clock$equals(this2977,java_lang_Object2978){
return this2977.equals(java_lang_Object2978);
});
