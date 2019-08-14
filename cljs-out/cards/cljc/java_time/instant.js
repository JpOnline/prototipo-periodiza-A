// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.instant');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.instant.min = java.time.Instant.MIN;
cljc.java_time.instant.epoch = java.time.Instant.EPOCH;
cljc.java_time.instant.max = java.time.Instant.MAX;
cljc.java_time.instant.truncated_to = (function cljc$java_time$instant$truncated_to(this2350,java_time_temporal_TemporalUnit2351){
return this2350.truncatedTo(java_time_temporal_TemporalUnit2351);
});
cljc.java_time.instant.range = (function cljc$java_time$instant$range(this2352,java_time_temporal_TemporalField2353){
return this2352.range(java_time_temporal_TemporalField2353);
});
cljc.java_time.instant.of_epoch_second = (function cljc$java_time$instant$of_epoch_second(var_args){
var G__11169 = arguments.length;
switch (G__11169) {
case 1:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1 = (function (long2354){
return java.time.Instant.ofEpochSecond(long2354);
});

cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2 = (function (long2355,long2356){
return java.time.Instant.ofEpochSecond(long2355,long2356);
});

cljc.java_time.instant.of_epoch_second.cljs$lang$maxFixedArity = 2;

cljc.java_time.instant.at_offset = (function cljc$java_time$instant$at_offset(this2357,java_time_ZoneOffset2358){
return this2357.atOffset(java_time_ZoneOffset2358);
});
cljc.java_time.instant.minus_millis = (function cljc$java_time$instant$minus_millis(this2359,long2360){
return this2359.minusMillis(long2360);
});
cljc.java_time.instant.get_nano = (function cljc$java_time$instant$get_nano(this2361){
return this2361.nano();
});
cljc.java_time.instant.plus_millis = (function cljc$java_time$instant$plus_millis(this2362,long2363){
return this2362.plusMillis(long2363);
});
cljc.java_time.instant.minus_seconds = (function cljc$java_time$instant$minus_seconds(this2364,long2365){
return this2364.minusSeconds(long2365);
});
cljc.java_time.instant.plus_nanos = (function cljc$java_time$instant$plus_nanos(this2366,long2367){
return this2366.plusNanos(long2367);
});
cljc.java_time.instant.plus = (function cljc$java_time$instant$plus(var_args){
var G__11172 = arguments.length;
switch (G__11172) {
case 3:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2368,G__2369,G__2370){
return this2368.plus(G__2369,G__2370);
});

cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2371,G__2372){
return this2371.plus(G__2372);
});

cljc.java_time.instant.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.instant.query = (function cljc$java_time$instant$query(this2373,java_time_temporal_TemporalQuery2374){
return this2373.query(java_time_temporal_TemporalQuery2374);
});
cljc.java_time.instant.to_string = (function cljc$java_time$instant$to_string(this2375){
return this2375.toString();
});
cljc.java_time.instant.is_before = (function cljc$java_time$instant$is_before(this2376,java_time_Instant2377){
return this2376.isBefore(java_time_Instant2377);
});
cljc.java_time.instant.minus = (function cljc$java_time$instant$minus(var_args){
var G__11175 = arguments.length;
switch (G__11175) {
case 3:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2378,G__2379,G__2380){
return this2378.minus(G__2379,G__2380);
});

cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2381,G__2382){
return this2381.minus(G__2382);
});

cljc.java_time.instant.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.instant.at_zone = (function cljc$java_time$instant$at_zone(this2383,java_time_ZoneId2384){
return this2383.atZone(java_time_ZoneId2384);
});
cljc.java_time.instant.of_epoch_milli = (function cljc$java_time$instant$of_epoch_milli(long2385){
return java.time.Instant.ofEpochMilli(long2385);
});
cljc.java_time.instant.get_long = (function cljc$java_time$instant$get_long(this2386,java_time_temporal_TemporalField2387){
return this2386.getLong(java_time_temporal_TemporalField2387);
});
cljc.java_time.instant.until = (function cljc$java_time$instant$until(this2388,java_time_temporal_Temporal2389,java_time_temporal_TemporalUnit2390){
return this2388.until(java_time_temporal_Temporal2389,java_time_temporal_TemporalUnit2390);
});
cljc.java_time.instant.from = (function cljc$java_time$instant$from(java_time_temporal_TemporalAccessor2391){
return java.time.Instant.from(java_time_temporal_TemporalAccessor2391);
});
cljc.java_time.instant.is_after = (function cljc$java_time$instant$is_after(this2392,java_time_Instant2393){
return this2392.isAfter(java_time_Instant2393);
});
cljc.java_time.instant.minus_nanos = (function cljc$java_time$instant$minus_nanos(this2394,long2395){
return this2394.minusNanos(long2395);
});
cljc.java_time.instant.is_supported = (function cljc$java_time$instant$is_supported(this2396,G__2397){
return this2396.isSupported(G__2397);
});
cljc.java_time.instant.parse = (function cljc$java_time$instant$parse(java_lang_CharSequence2398){
return java.time.Instant.parse(java_lang_CharSequence2398);
});
cljc.java_time.instant.hash_code = (function cljc$java_time$instant$hash_code(this2399){
return this2399.hashCode();
});
cljc.java_time.instant.adjust_into = (function cljc$java_time$instant$adjust_into(this2400,java_time_temporal_Temporal2401){
return this2400.adjustInto(java_time_temporal_Temporal2401);
});
cljc.java_time.instant.with$ = (function cljc$java_time$instant$with(var_args){
var G__11178 = arguments.length;
switch (G__11178) {
case 3:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2402,G__2403,G__2404){
return this2402.with(G__2403,G__2404);
});

cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2405,G__2406){
return this2405.with(G__2406);
});

cljc.java_time.instant.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.instant.now = (function cljc$java_time$instant$now(var_args){
var G__11181 = arguments.length;
switch (G__11181) {
case 0:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Instant.now();
});

cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1 = (function (java_time_Clock2407){
return java.time.Instant.now(java_time_Clock2407);
});

cljc.java_time.instant.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.instant.to_epoch_milli = (function cljc$java_time$instant$to_epoch_milli(this2408){
return this2408.toEpochMilli();
});
cljc.java_time.instant.get_epoch_second = (function cljc$java_time$instant$get_epoch_second(this2409){
return this2409.epochSecond();
});
cljc.java_time.instant.compare_to = (function cljc$java_time$instant$compare_to(this2410,G__2411){
return this2410.compareTo(G__2411);
});
cljc.java_time.instant.plus_seconds = (function cljc$java_time$instant$plus_seconds(this2412,long2413){
return this2412.plusSeconds(long2413);
});
cljc.java_time.instant.get = (function cljc$java_time$instant$get(this2414,java_time_temporal_TemporalField2415){
return this2414.get(java_time_temporal_TemporalField2415);
});
cljc.java_time.instant.equals = (function cljc$java_time$instant$equals(this2416,java_lang_Object2417){
return this2416.equals(java_lang_Object2417);
});

//# sourceMappingURL=instant.js.map
