// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.offset_date_time');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.offset_date_time.min = java.time.OffsetDateTime.MIN;
cljc.java_time.offset_date_time.max = java.time.OffsetDateTime.MAX;
cljc.java_time.offset_date_time.minus_minutes = (function cljc$java_time$offset_date_time$minus_minutes(this2418,long2419){
return this2418.minusMinutes(long2419);
});
cljc.java_time.offset_date_time.truncated_to = (function cljc$java_time$offset_date_time$truncated_to(this2420,java_time_temporal_TemporalUnit2421){
return this2420.truncatedTo(java_time_temporal_TemporalUnit2421);
});
cljc.java_time.offset_date_time.minus_weeks = (function cljc$java_time$offset_date_time$minus_weeks(this2422,long2423){
return this2422.minusWeeks(long2423);
});
cljc.java_time.offset_date_time.to_instant = (function cljc$java_time$offset_date_time$to_instant(this2424){
return this2424.toInstant();
});
cljc.java_time.offset_date_time.plus_weeks = (function cljc$java_time$offset_date_time$plus_weeks(this2425,long2426){
return this2425.plusWeeks(long2426);
});
cljc.java_time.offset_date_time.range = (function cljc$java_time$offset_date_time$range(this2427,java_time_temporal_TemporalField2428){
return this2427.range(java_time_temporal_TemporalField2428);
});
cljc.java_time.offset_date_time.get_hour = (function cljc$java_time$offset_date_time$get_hour(this2429){
return this2429.hour();
});
cljc.java_time.offset_date_time.at_zone_same_instant = (function cljc$java_time$offset_date_time$at_zone_same_instant(this2430,java_time_ZoneId2431){
return this2430.atZoneSameInstant(java_time_ZoneId2431);
});
cljc.java_time.offset_date_time.minus_hours = (function cljc$java_time$offset_date_time$minus_hours(this2432,long2433){
return this2432.minusHours(long2433);
});
cljc.java_time.offset_date_time.of = (function cljc$java_time$offset_date_time$of(var_args){
var G__27895 = arguments.length;
switch (G__27895) {
case 2:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 8:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime2434,java_time_ZoneOffset2435){
return java.time.OffsetDateTime.of(java_time_LocalDateTime2434,java_time_ZoneOffset2435);
});

cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate2436,java_time_LocalTime2437,java_time_ZoneOffset2438){
return java.time.OffsetDateTime.of(java_time_LocalDate2436,java_time_LocalTime2437,java_time_ZoneOffset2438);
});

cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int2439,int2440,int2441,int2442,int2443,int2444,int2445,java_time_ZoneOffset2446){
return java.time.OffsetDateTime.of(int2439,int2440,int2441,int2442,int2443,int2444,int2445,java_time_ZoneOffset2446);
});

cljc.java_time.offset_date_time.of.cljs$lang$maxFixedArity = 8;

cljc.java_time.offset_date_time.with_month = (function cljc$java_time$offset_date_time$with_month(this2447,int2448){
return this2447.withMonth(int2448);
});
cljc.java_time.offset_date_time.is_equal = (function cljc$java_time$offset_date_time$is_equal(this2449,java_time_OffsetDateTime2450){
return this2449.isEqual(java_time_OffsetDateTime2450);
});
cljc.java_time.offset_date_time.get_nano = (function cljc$java_time$offset_date_time$get_nano(this2451){
return this2451.nano();
});
cljc.java_time.offset_date_time.to_offset_time = (function cljc$java_time$offset_date_time$to_offset_time(this2452){
return this2452.toOffsetTime();
});
cljc.java_time.offset_date_time.at_zone_similar_local = (function cljc$java_time$offset_date_time$at_zone_similar_local(this2453,java_time_ZoneId2454){
return this2453.atZoneSimilarLocal(java_time_ZoneId2454);
});
cljc.java_time.offset_date_time.get_year = (function cljc$java_time$offset_date_time$get_year(this2455){
return this2455.year();
});
cljc.java_time.offset_date_time.minus_seconds = (function cljc$java_time$offset_date_time$minus_seconds(this2456,long2457){
return this2456.minusSeconds(long2457);
});
cljc.java_time.offset_date_time.get_second = (function cljc$java_time$offset_date_time$get_second(this2458){
return this2458.second();
});
cljc.java_time.offset_date_time.plus_nanos = (function cljc$java_time$offset_date_time$plus_nanos(this2459,long2460){
return this2459.plusNanos(long2460);
});
cljc.java_time.offset_date_time.get_day_of_year = (function cljc$java_time$offset_date_time$get_day_of_year(this2461){
return this2461.dayOfYear();
});
cljc.java_time.offset_date_time.plus = (function cljc$java_time$offset_date_time$plus(var_args){
var G__27898 = arguments.length;
switch (G__27898) {
case 2:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2462,G__2463){
return this2462.plus(G__2463);
});

cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2464,G__2465,G__2466){
return this2464.plus(G__2465,G__2466);
});

cljc.java_time.offset_date_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.offset_date_time.time_line_order = (function cljc$java_time$offset_date_time$time_line_order(){
return java.time.OffsetDateTime.timeLineOrder();
});
cljc.java_time.offset_date_time.with_hour = (function cljc$java_time$offset_date_time$with_hour(this2467,int2468){
return this2467.withHour(int2468);
});
cljc.java_time.offset_date_time.with_minute = (function cljc$java_time$offset_date_time$with_minute(this2469,int2470){
return this2469.withMinute(int2470);
});
cljc.java_time.offset_date_time.plus_minutes = (function cljc$java_time$offset_date_time$plus_minutes(this2471,long2472){
return this2471.plusMinutes(long2472);
});
cljc.java_time.offset_date_time.query = (function cljc$java_time$offset_date_time$query(this2473,java_time_temporal_TemporalQuery2474){
return this2473.query(java_time_temporal_TemporalQuery2474);
});
cljc.java_time.offset_date_time.with_offset_same_instant = (function cljc$java_time$offset_date_time$with_offset_same_instant(this2475,java_time_ZoneOffset2476){
return this2475.withOffsetSameInstant(java_time_ZoneOffset2476);
});
cljc.java_time.offset_date_time.get_day_of_week = (function cljc$java_time$offset_date_time$get_day_of_week(this2477){
return this2477.dayOfWeek();
});
cljc.java_time.offset_date_time.to_string = (function cljc$java_time$offset_date_time$to_string(this2478){
return this2478.toString();
});
cljc.java_time.offset_date_time.plus_months = (function cljc$java_time$offset_date_time$plus_months(this2479,long2480){
return this2479.plusMonths(long2480);
});
cljc.java_time.offset_date_time.is_before = (function cljc$java_time$offset_date_time$is_before(this2481,java_time_OffsetDateTime2482){
return this2481.isBefore(java_time_OffsetDateTime2482);
});
cljc.java_time.offset_date_time.minus_months = (function cljc$java_time$offset_date_time$minus_months(this2483,long2484){
return this2483.minusMonths(long2484);
});
cljc.java_time.offset_date_time.minus = (function cljc$java_time$offset_date_time$minus(var_args){
var G__27901 = arguments.length;
switch (G__27901) {
case 3:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2485,G__2486,G__2487){
return this2485.minus(G__2486,G__2487);
});

cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2488,G__2489){
return this2488.minus(G__2489);
});

cljc.java_time.offset_date_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.offset_date_time.plus_hours = (function cljc$java_time$offset_date_time$plus_hours(this2490,long2491){
return this2490.plusHours(long2491);
});
cljc.java_time.offset_date_time.plus_days = (function cljc$java_time$offset_date_time$plus_days(this2492,long2493){
return this2492.plusDays(long2493);
});
cljc.java_time.offset_date_time.to_local_time = (function cljc$java_time$offset_date_time$to_local_time(this2494){
return this2494.toLocalTime();
});
cljc.java_time.offset_date_time.get_long = (function cljc$java_time$offset_date_time$get_long(this2495,java_time_temporal_TemporalField2496){
return this2495.getLong(java_time_temporal_TemporalField2496);
});
cljc.java_time.offset_date_time.get_offset = (function cljc$java_time$offset_date_time$get_offset(this2497){
return this2497.offset();
});
cljc.java_time.offset_date_time.to_zoned_date_time = (function cljc$java_time$offset_date_time$to_zoned_date_time(this2498){
return this2498.toZonedDateTime();
});
cljc.java_time.offset_date_time.with_year = (function cljc$java_time$offset_date_time$with_year(this2499,int2500){
return this2499.withYear(int2500);
});
cljc.java_time.offset_date_time.with_nano = (function cljc$java_time$offset_date_time$with_nano(this2501,int2502){
return this2501.withNano(int2502);
});
cljc.java_time.offset_date_time.to_epoch_second = (function cljc$java_time$offset_date_time$to_epoch_second(this2503){
return this2503.toEpochSecond();
});
cljc.java_time.offset_date_time.until = (function cljc$java_time$offset_date_time$until(this2504,java_time_temporal_Temporal2505,java_time_temporal_TemporalUnit2506){
return this2504.until(java_time_temporal_Temporal2505,java_time_temporal_TemporalUnit2506);
});
cljc.java_time.offset_date_time.with_offset_same_local = (function cljc$java_time$offset_date_time$with_offset_same_local(this2507,java_time_ZoneOffset2508){
return this2507.withOffsetSameLocal(java_time_ZoneOffset2508);
});
cljc.java_time.offset_date_time.with_day_of_month = (function cljc$java_time$offset_date_time$with_day_of_month(this2509,int2510){
return this2509.withDayOfMonth(int2510);
});
cljc.java_time.offset_date_time.get_day_of_month = (function cljc$java_time$offset_date_time$get_day_of_month(this2511){
return this2511.dayOfMonth();
});
cljc.java_time.offset_date_time.from = (function cljc$java_time$offset_date_time$from(java_time_temporal_TemporalAccessor2512){
return java.time.OffsetDateTime.from(java_time_temporal_TemporalAccessor2512);
});
cljc.java_time.offset_date_time.is_after = (function cljc$java_time$offset_date_time$is_after(this2513,java_time_OffsetDateTime2514){
return this2513.isAfter(java_time_OffsetDateTime2514);
});
cljc.java_time.offset_date_time.minus_nanos = (function cljc$java_time$offset_date_time$minus_nanos(this2515,long2516){
return this2515.minusNanos(long2516);
});
cljc.java_time.offset_date_time.is_supported = (function cljc$java_time$offset_date_time$is_supported(this2517,G__2518){
return this2517.isSupported(G__2518);
});
cljc.java_time.offset_date_time.minus_years = (function cljc$java_time$offset_date_time$minus_years(this2519,long2520){
return this2519.minusYears(long2520);
});
cljc.java_time.offset_date_time.parse = (function cljc$java_time$offset_date_time$parse(var_args){
var G__27904 = arguments.length;
switch (G__27904) {
case 1:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2521){
return java.time.OffsetDateTime.parse(java_lang_CharSequence2521);
});

cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2522,java_time_format_DateTimeFormatter2523){
return java.time.OffsetDateTime.parse(java_lang_CharSequence2522,java_time_format_DateTimeFormatter2523);
});

cljc.java_time.offset_date_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.offset_date_time.with_second = (function cljc$java_time$offset_date_time$with_second(this2524,int2525){
return this2524.withSecond(int2525);
});
cljc.java_time.offset_date_time.to_local_date = (function cljc$java_time$offset_date_time$to_local_date(this2526){
return this2526.toLocalDate();
});
cljc.java_time.offset_date_time.get_minute = (function cljc$java_time$offset_date_time$get_minute(this2527){
return this2527.minute();
});
cljc.java_time.offset_date_time.hash_code = (function cljc$java_time$offset_date_time$hash_code(this2528){
return this2528.hashCode();
});
cljc.java_time.offset_date_time.adjust_into = (function cljc$java_time$offset_date_time$adjust_into(this2529,java_time_temporal_Temporal2530){
return this2529.adjustInto(java_time_temporal_Temporal2530);
});
cljc.java_time.offset_date_time.with$ = (function cljc$java_time$offset_date_time$with(var_args){
var G__27907 = arguments.length;
switch (G__27907) {
case 3:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2531,G__2532,G__2533){
return this2531.with(G__2532,G__2533);
});

cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2534,G__2535){
return this2534.with(G__2535);
});

cljc.java_time.offset_date_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.offset_date_time.now = (function cljc$java_time$offset_date_time$now(var_args){
var G__27910 = arguments.length;
switch (G__27910) {
case 1:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2537){
return java.time.OffsetDateTime.now(G__2537);
});

cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.OffsetDateTime.now();
});

cljc.java_time.offset_date_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.offset_date_time.to_local_date_time = (function cljc$java_time$offset_date_time$to_local_date_time(this2538){
return this2538.toLocalDateTime();
});
cljc.java_time.offset_date_time.get_month_value = (function cljc$java_time$offset_date_time$get_month_value(this2539){
return this2539.monthValue();
});
cljc.java_time.offset_date_time.with_day_of_year = (function cljc$java_time$offset_date_time$with_day_of_year(this2540,int2541){
return this2540.withDayOfYear(int2541);
});
cljc.java_time.offset_date_time.compare_to = (function cljc$java_time$offset_date_time$compare_to(this2542,G__2543){
return this2542.compareTo(G__2543);
});
cljc.java_time.offset_date_time.get_month = (function cljc$java_time$offset_date_time$get_month(this2544){
return this2544.month();
});
cljc.java_time.offset_date_time.of_instant = (function cljc$java_time$offset_date_time$of_instant(java_time_Instant2545,java_time_ZoneId2546){
return java.time.OffsetDateTime.ofInstant(java_time_Instant2545,java_time_ZoneId2546);
});
cljc.java_time.offset_date_time.plus_seconds = (function cljc$java_time$offset_date_time$plus_seconds(this2547,long2548){
return this2547.plusSeconds(long2548);
});
cljc.java_time.offset_date_time.get = (function cljc$java_time$offset_date_time$get(this2549,java_time_temporal_TemporalField2550){
return this2549.get(java_time_temporal_TemporalField2550);
});
cljc.java_time.offset_date_time.equals = (function cljc$java_time$offset_date_time$equals(this2551,java_lang_Object2552){
return this2551.equals(java_lang_Object2552);
});
cljc.java_time.offset_date_time.format = (function cljc$java_time$offset_date_time$format(this2553,java_time_format_DateTimeFormatter2554){
return this2553.format(java_time_format_DateTimeFormatter2554);
});
cljc.java_time.offset_date_time.plus_years = (function cljc$java_time$offset_date_time$plus_years(this2555,long2556){
return this2555.plusYears(long2556);
});
cljc.java_time.offset_date_time.minus_days = (function cljc$java_time$offset_date_time$minus_days(this2557,long2558){
return this2557.minusDays(long2558);
});

//# sourceMappingURL=offset_date_time.js.map
