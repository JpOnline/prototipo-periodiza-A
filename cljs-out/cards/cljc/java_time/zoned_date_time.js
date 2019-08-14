// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.zoned_date_time');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.zoned_date_time.minus_minutes = (function cljc$java_time$zoned_date_time$minus_minutes(this2105,long2106){
return this2105.minusMinutes(long2106);
});
cljc.java_time.zoned_date_time.truncated_to = (function cljc$java_time$zoned_date_time$truncated_to(this2107,java_time_temporal_TemporalUnit2108){
return this2107.truncatedTo(java_time_temporal_TemporalUnit2108);
});
cljc.java_time.zoned_date_time.minus_weeks = (function cljc$java_time$zoned_date_time$minus_weeks(this2109,long2110){
return this2109.minusWeeks(long2110);
});
cljc.java_time.zoned_date_time.to_instant = (function cljc$java_time$zoned_date_time$to_instant(this2111){
return this2111.toInstant();
});
cljc.java_time.zoned_date_time.plus_weeks = (function cljc$java_time$zoned_date_time$plus_weeks(this2112,long2113){
return this2112.plusWeeks(long2113);
});
cljc.java_time.zoned_date_time.range = (function cljc$java_time$zoned_date_time$range(this2114,java_time_temporal_TemporalField2115){
return this2114.range(java_time_temporal_TemporalField2115);
});
cljc.java_time.zoned_date_time.with_earlier_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_earlier_offset_at_overlap(this2116){
return this2116.withEarlierOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.get_hour = (function cljc$java_time$zoned_date_time$get_hour(this2117){
return this2117.hour();
});
cljc.java_time.zoned_date_time.minus_hours = (function cljc$java_time$zoned_date_time$minus_hours(this2118,long2119){
return this2118.minusHours(long2119);
});
cljc.java_time.zoned_date_time.of = (function cljc$java_time$zoned_date_time$of(var_args){
var G__24360 = arguments.length;
switch (G__24360) {
case 3:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 8:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 2:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate2120,java_time_LocalTime2121,java_time_ZoneId2122){
return java.time.ZonedDateTime.of(java_time_LocalDate2120,java_time_LocalTime2121,java_time_ZoneId2122);
});

cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int2123,int2124,int2125,int2126,int2127,int2128,int2129,java_time_ZoneId2130){
return java.time.ZonedDateTime.of(int2123,int2124,int2125,int2126,int2127,int2128,int2129,java_time_ZoneId2130);
});

cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime2131,java_time_ZoneId2132){
return java.time.ZonedDateTime.of(java_time_LocalDateTime2131,java_time_ZoneId2132);
});

cljc.java_time.zoned_date_time.of.cljs$lang$maxFixedArity = 8;

cljc.java_time.zoned_date_time.with_month = (function cljc$java_time$zoned_date_time$with_month(this2133,int2134){
return this2133.withMonth(int2134);
});
cljc.java_time.zoned_date_time.is_equal = (function cljc$java_time$zoned_date_time$is_equal(this2135,java_time_chrono_ChronoZonedDateTime2136){
return this2135.isEqual(java_time_chrono_ChronoZonedDateTime2136);
});
cljc.java_time.zoned_date_time.get_nano = (function cljc$java_time$zoned_date_time$get_nano(this2137){
return this2137.nano();
});
cljc.java_time.zoned_date_time.of_local = (function cljc$java_time$zoned_date_time$of_local(java_time_LocalDateTime2138,java_time_ZoneId2139,java_time_ZoneOffset2140){
return java.time.ZonedDateTime.ofLocal(java_time_LocalDateTime2138,java_time_ZoneId2139,java_time_ZoneOffset2140);
});
cljc.java_time.zoned_date_time.get_year = (function cljc$java_time$zoned_date_time$get_year(this2141){
return this2141.year();
});
cljc.java_time.zoned_date_time.minus_seconds = (function cljc$java_time$zoned_date_time$minus_seconds(this2142,long2143){
return this2142.minusSeconds(long2143);
});
cljc.java_time.zoned_date_time.get_second = (function cljc$java_time$zoned_date_time$get_second(this2144){
return this2144.second();
});
cljc.java_time.zoned_date_time.plus_nanos = (function cljc$java_time$zoned_date_time$plus_nanos(this2145,long2146){
return this2145.plusNanos(long2146);
});
cljc.java_time.zoned_date_time.get_day_of_year = (function cljc$java_time$zoned_date_time$get_day_of_year(this2147){
return this2147.dayOfYear();
});
cljc.java_time.zoned_date_time.plus = (function cljc$java_time$zoned_date_time$plus(var_args){
var G__24363 = arguments.length;
switch (G__24363) {
case 3:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2148,G__2149,G__2150){
return this2148.plus(G__2149,G__2150);
});

cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2151,G__2152){
return this2151.plus(G__2152);
});

cljc.java_time.zoned_date_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.with_hour = (function cljc$java_time$zoned_date_time$with_hour(this2153,int2154){
return this2153.withHour(int2154);
});
cljc.java_time.zoned_date_time.with_minute = (function cljc$java_time$zoned_date_time$with_minute(this2155,int2156){
return this2155.withMinute(int2156);
});
cljc.java_time.zoned_date_time.plus_minutes = (function cljc$java_time$zoned_date_time$plus_minutes(this2157,long2158){
return this2157.plusMinutes(long2158);
});
cljc.java_time.zoned_date_time.query = (function cljc$java_time$zoned_date_time$query(this2159,java_time_temporal_TemporalQuery2160){
return this2159.query(java_time_temporal_TemporalQuery2160);
});
cljc.java_time.zoned_date_time.get_day_of_week = (function cljc$java_time$zoned_date_time$get_day_of_week(this2161){
return this2161.dayOfWeek();
});
cljc.java_time.zoned_date_time.to_string = (function cljc$java_time$zoned_date_time$to_string(this2162){
return this2162.toString();
});
cljc.java_time.zoned_date_time.plus_months = (function cljc$java_time$zoned_date_time$plus_months(this2163,long2164){
return this2163.plusMonths(long2164);
});
cljc.java_time.zoned_date_time.is_before = (function cljc$java_time$zoned_date_time$is_before(this2165,java_time_chrono_ChronoZonedDateTime2166){
return this2165.isBefore(java_time_chrono_ChronoZonedDateTime2166);
});
cljc.java_time.zoned_date_time.minus_months = (function cljc$java_time$zoned_date_time$minus_months(this2167,long2168){
return this2167.minusMonths(long2168);
});
cljc.java_time.zoned_date_time.minus = (function cljc$java_time$zoned_date_time$minus(var_args){
var G__24366 = arguments.length;
switch (G__24366) {
case 3:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2169,G__2170,G__2171){
return this2169.minus(G__2170,G__2171);
});

cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2172,G__2173){
return this2172.minus(G__2173);
});

cljc.java_time.zoned_date_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.with_fixed_offset_zone = (function cljc$java_time$zoned_date_time$with_fixed_offset_zone(this2174){
return this2174.withFixedOffsetZone();
});
cljc.java_time.zoned_date_time.plus_hours = (function cljc$java_time$zoned_date_time$plus_hours(this2175,long2176){
return this2175.plusHours(long2176);
});
cljc.java_time.zoned_date_time.with_zone_same_local = (function cljc$java_time$zoned_date_time$with_zone_same_local(this2177,G__2178){
return this2177.withZoneSameLocal(G__2178);
});
cljc.java_time.zoned_date_time.with_zone_same_instant = (function cljc$java_time$zoned_date_time$with_zone_same_instant(this2179,G__2180){
return this2179.withZoneSameInstant(G__2180);
});
cljc.java_time.zoned_date_time.plus_days = (function cljc$java_time$zoned_date_time$plus_days(this2181,long2182){
return this2181.plusDays(long2182);
});
cljc.java_time.zoned_date_time.to_local_time = (function cljc$java_time$zoned_date_time$to_local_time(this2183){
return this2183.toLocalTime();
});
cljc.java_time.zoned_date_time.get_long = (function cljc$java_time$zoned_date_time$get_long(this2184,java_time_temporal_TemporalField2185){
return this2184.getLong(java_time_temporal_TemporalField2185);
});
cljc.java_time.zoned_date_time.get_offset = (function cljc$java_time$zoned_date_time$get_offset(this2186){
return this2186.offset();
});
cljc.java_time.zoned_date_time.with_year = (function cljc$java_time$zoned_date_time$with_year(this2187,int2188){
return this2187.withYear(int2188);
});
cljc.java_time.zoned_date_time.with_nano = (function cljc$java_time$zoned_date_time$with_nano(this2189,int2190){
return this2189.withNano(int2190);
});
cljc.java_time.zoned_date_time.to_epoch_second = (function cljc$java_time$zoned_date_time$to_epoch_second(this2191){
return this2191.toEpochSecond();
});
cljc.java_time.zoned_date_time.to_offset_date_time = (function cljc$java_time$zoned_date_time$to_offset_date_time(this2192){
return this2192.toOffsetDateTime();
});
cljc.java_time.zoned_date_time.with_later_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_later_offset_at_overlap(this2193){
return this2193.withLaterOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.until = (function cljc$java_time$zoned_date_time$until(this2194,java_time_temporal_Temporal2195,java_time_temporal_TemporalUnit2196){
return this2194.until(java_time_temporal_Temporal2195,java_time_temporal_TemporalUnit2196);
});
cljc.java_time.zoned_date_time.get_zone = (function cljc$java_time$zoned_date_time$get_zone(this2197){
return this2197.zone();
});
cljc.java_time.zoned_date_time.with_day_of_month = (function cljc$java_time$zoned_date_time$with_day_of_month(this2198,int2199){
return this2198.withDayOfMonth(int2199);
});
cljc.java_time.zoned_date_time.get_day_of_month = (function cljc$java_time$zoned_date_time$get_day_of_month(this2200){
return this2200.dayOfMonth();
});
cljc.java_time.zoned_date_time.from = (function cljc$java_time$zoned_date_time$from(java_time_temporal_TemporalAccessor2201){
return java.time.ZonedDateTime.from(java_time_temporal_TemporalAccessor2201);
});
cljc.java_time.zoned_date_time.is_after = (function cljc$java_time$zoned_date_time$is_after(this2202,java_time_chrono_ChronoZonedDateTime2203){
return this2202.isAfter(java_time_chrono_ChronoZonedDateTime2203);
});
cljc.java_time.zoned_date_time.minus_nanos = (function cljc$java_time$zoned_date_time$minus_nanos(this2204,long2205){
return this2204.minusNanos(long2205);
});
cljc.java_time.zoned_date_time.is_supported = (function cljc$java_time$zoned_date_time$is_supported(this2206,G__2207){
return this2206.isSupported(G__2207);
});
cljc.java_time.zoned_date_time.minus_years = (function cljc$java_time$zoned_date_time$minus_years(this2208,long2209){
return this2208.minusYears(long2209);
});
cljc.java_time.zoned_date_time.get_chronology = (function cljc$java_time$zoned_date_time$get_chronology(this2210){
return this2210.chronology();
});
cljc.java_time.zoned_date_time.parse = (function cljc$java_time$zoned_date_time$parse(var_args){
var G__24369 = arguments.length;
switch (G__24369) {
case 2:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2211,java_time_format_DateTimeFormatter2212){
return java.time.ZonedDateTime.parse(java_lang_CharSequence2211,java_time_format_DateTimeFormatter2212);
});

cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2213){
return java.time.ZonedDateTime.parse(java_lang_CharSequence2213);
});

cljc.java_time.zoned_date_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.zoned_date_time.with_second = (function cljc$java_time$zoned_date_time$with_second(this2214,int2215){
return this2214.withSecond(int2215);
});
cljc.java_time.zoned_date_time.to_local_date = (function cljc$java_time$zoned_date_time$to_local_date(this2216){
return this2216.toLocalDate();
});
cljc.java_time.zoned_date_time.get_minute = (function cljc$java_time$zoned_date_time$get_minute(this2217){
return this2217.minute();
});
cljc.java_time.zoned_date_time.hash_code = (function cljc$java_time$zoned_date_time$hash_code(this2218){
return this2218.hashCode();
});
cljc.java_time.zoned_date_time.with$ = (function cljc$java_time$zoned_date_time$with(var_args){
var G__24372 = arguments.length;
switch (G__24372) {
case 3:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2219,G__2220,G__2221){
return this2219.with(G__2220,G__2221);
});

cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2222,G__2223){
return this2222.with(G__2223);
});

cljc.java_time.zoned_date_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.now = (function cljc$java_time$zoned_date_time$now(var_args){
var G__24375 = arguments.length;
switch (G__24375) {
case 1:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2225){
return java.time.ZonedDateTime.now(G__2225);
});

cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.ZonedDateTime.now();
});

cljc.java_time.zoned_date_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.zoned_date_time.to_local_date_time = (function cljc$java_time$zoned_date_time$to_local_date_time(this2226){
return this2226.toLocalDateTime();
});
cljc.java_time.zoned_date_time.get_month_value = (function cljc$java_time$zoned_date_time$get_month_value(this2227){
return this2227.monthValue();
});
cljc.java_time.zoned_date_time.with_day_of_year = (function cljc$java_time$zoned_date_time$with_day_of_year(this2228,int2229){
return this2228.withDayOfYear(int2229);
});
cljc.java_time.zoned_date_time.compare_to = (function cljc$java_time$zoned_date_time$compare_to(this2230,G__2231){
return this2230.compareTo(G__2231);
});
cljc.java_time.zoned_date_time.of_strict = (function cljc$java_time$zoned_date_time$of_strict(java_time_LocalDateTime2232,java_time_ZoneOffset2233,java_time_ZoneId2234){
return java.time.ZonedDateTime.ofStrict(java_time_LocalDateTime2232,java_time_ZoneOffset2233,java_time_ZoneId2234);
});
cljc.java_time.zoned_date_time.get_month = (function cljc$java_time$zoned_date_time$get_month(this2235){
return this2235.month();
});
cljc.java_time.zoned_date_time.of_instant = (function cljc$java_time$zoned_date_time$of_instant(var_args){
var G__24378 = arguments.length;
switch (G__24378) {
case 3:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDateTime2236,java_time_ZoneOffset2237,java_time_ZoneId2238){
return java.time.ZonedDateTime.ofInstant(java_time_LocalDateTime2236,java_time_ZoneOffset2237,java_time_ZoneId2238);
});

cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2 = (function (java_time_Instant2239,java_time_ZoneId2240){
return java.time.ZonedDateTime.ofInstant(java_time_Instant2239,java_time_ZoneId2240);
});

cljc.java_time.zoned_date_time.of_instant.cljs$lang$maxFixedArity = 3;

cljc.java_time.zoned_date_time.plus_seconds = (function cljc$java_time$zoned_date_time$plus_seconds(this2241,long2242){
return this2241.plusSeconds(long2242);
});
cljc.java_time.zoned_date_time.get = (function cljc$java_time$zoned_date_time$get(this2243,java_time_temporal_TemporalField2244){
return this2243.get(java_time_temporal_TemporalField2244);
});
cljc.java_time.zoned_date_time.equals = (function cljc$java_time$zoned_date_time$equals(this2245,java_lang_Object2246){
return this2245.equals(java_lang_Object2246);
});
cljc.java_time.zoned_date_time.format = (function cljc$java_time$zoned_date_time$format(this2247,java_time_format_DateTimeFormatter2248){
return this2247.format(java_time_format_DateTimeFormatter2248);
});
cljc.java_time.zoned_date_time.plus_years = (function cljc$java_time$zoned_date_time$plus_years(this2249,long2250){
return this2249.plusYears(long2250);
});
cljc.java_time.zoned_date_time.minus_days = (function cljc$java_time$zoned_date_time$minus_days(this2251,long2252){
return this2251.minusDays(long2252);
});
