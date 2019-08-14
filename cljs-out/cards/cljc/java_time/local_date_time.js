// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.local_date_time');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.local_date_time.max = java.time.LocalDateTime.MAX;
cljc.java_time.local_date_time.min = java.time.LocalDateTime.MIN;
cljc.java_time.local_date_time.minus_minutes = (function cljc$java_time$local_date_time$minus_minutes(this1956,long1957){
return this1956.minusMinutes(long1957);
});
cljc.java_time.local_date_time.truncated_to = (function cljc$java_time$local_date_time$truncated_to(this1958,java_time_temporal_TemporalUnit1959){
return this1958.truncatedTo(java_time_temporal_TemporalUnit1959);
});
cljc.java_time.local_date_time.minus_weeks = (function cljc$java_time$local_date_time$minus_weeks(this1960,long1961){
return this1960.minusWeeks(long1961);
});
cljc.java_time.local_date_time.to_instant = (function cljc$java_time$local_date_time$to_instant(this1962,java_time_ZoneOffset1963){
return this1962.toInstant(java_time_ZoneOffset1963);
});
cljc.java_time.local_date_time.plus_weeks = (function cljc$java_time$local_date_time$plus_weeks(this1964,long1965){
return this1964.plusWeeks(long1965);
});
cljc.java_time.local_date_time.range = (function cljc$java_time$local_date_time$range(this1966,java_time_temporal_TemporalField1967){
return this1966.range(java_time_temporal_TemporalField1967);
});
cljc.java_time.local_date_time.of_epoch_second = (function cljc$java_time$local_date_time$of_epoch_second(long1968,int1969,java_time_ZoneOffset1970){
return java.time.LocalDateTime.ofEpochSecond(long1968,int1969,java_time_ZoneOffset1970);
});
cljc.java_time.local_date_time.get_hour = (function cljc$java_time$local_date_time$get_hour(this1971){
return this1971.hour();
});
cljc.java_time.local_date_time.at_offset = (function cljc$java_time$local_date_time$at_offset(this1972,java_time_ZoneOffset1973){
return this1972.atOffset(java_time_ZoneOffset1973);
});
cljc.java_time.local_date_time.minus_hours = (function cljc$java_time$local_date_time$minus_hours(this1974,long1975){
return this1974.minusHours(long1975);
});
cljc.java_time.local_date_time.of = (function cljc$java_time$local_date_time$of(var_args){
var G__24500 = arguments.length;
switch (G__24500) {
case 6:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6 = (function (G__1977,G__1978,G__1979,G__1980,G__1981,G__1982){
return java.time.LocalDateTime.of(G__1977,G__1978,G__1979,G__1980,G__1981,G__1982);
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5 = (function (G__1984,G__1985,G__1986,G__1987,G__1988){
return java.time.LocalDateTime.of(G__1984,G__1985,G__1986,G__1987,G__1988);
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7 = (function (G__1990,G__1991,G__1992,G__1993,G__1994,G__1995,G__1996){
return java.time.LocalDateTime.of(G__1990,G__1991,G__1992,G__1993,G__1994,G__1995,G__1996);
});

cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDate1997,java_time_LocalTime1998){
return java.time.LocalDateTime.of(java_time_LocalDate1997,java_time_LocalTime1998);
});

cljc.java_time.local_date_time.of.cljs$lang$maxFixedArity = 7;

cljc.java_time.local_date_time.with_month = (function cljc$java_time$local_date_time$with_month(this1999,int2000){
return this1999.withMonth(int2000);
});
cljc.java_time.local_date_time.is_equal = (function cljc$java_time$local_date_time$is_equal(this2001,java_time_chrono_ChronoLocalDateTime2002){
return this2001.isEqual(java_time_chrono_ChronoLocalDateTime2002);
});
cljc.java_time.local_date_time.get_nano = (function cljc$java_time$local_date_time$get_nano(this2003){
return this2003.nano();
});
cljc.java_time.local_date_time.get_year = (function cljc$java_time$local_date_time$get_year(this2004){
return this2004.year();
});
cljc.java_time.local_date_time.minus_seconds = (function cljc$java_time$local_date_time$minus_seconds(this2005,long2006){
return this2005.minusSeconds(long2006);
});
cljc.java_time.local_date_time.get_second = (function cljc$java_time$local_date_time$get_second(this2007){
return this2007.second();
});
cljc.java_time.local_date_time.plus_nanos = (function cljc$java_time$local_date_time$plus_nanos(this2008,long2009){
return this2008.plusNanos(long2009);
});
cljc.java_time.local_date_time.get_day_of_year = (function cljc$java_time$local_date_time$get_day_of_year(this2010){
return this2010.dayOfYear();
});
cljc.java_time.local_date_time.plus = (function cljc$java_time$local_date_time$plus(var_args){
var G__24503 = arguments.length;
switch (G__24503) {
case 3:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this2011,G__2012,G__2013){
return this2011.plus(G__2012,G__2013);
});

cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this2014,G__2015){
return this2014.plus(G__2015);
});

cljc.java_time.local_date_time.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date_time.with_hour = (function cljc$java_time$local_date_time$with_hour(this2016,int2017){
return this2016.withHour(int2017);
});
cljc.java_time.local_date_time.with_minute = (function cljc$java_time$local_date_time$with_minute(this2018,int2019){
return this2018.withMinute(int2019);
});
cljc.java_time.local_date_time.plus_minutes = (function cljc$java_time$local_date_time$plus_minutes(this2020,long2021){
return this2020.plusMinutes(long2021);
});
cljc.java_time.local_date_time.query = (function cljc$java_time$local_date_time$query(this2022,java_time_temporal_TemporalQuery2023){
return this2022.query(java_time_temporal_TemporalQuery2023);
});
cljc.java_time.local_date_time.get_day_of_week = (function cljc$java_time$local_date_time$get_day_of_week(this2024){
return this2024.dayOfWeek();
});
cljc.java_time.local_date_time.to_string = (function cljc$java_time$local_date_time$to_string(this2025){
return this2025.toString();
});
cljc.java_time.local_date_time.plus_months = (function cljc$java_time$local_date_time$plus_months(this2026,long2027){
return this2026.plusMonths(long2027);
});
cljc.java_time.local_date_time.is_before = (function cljc$java_time$local_date_time$is_before(this2028,java_time_chrono_ChronoLocalDateTime2029){
return this2028.isBefore(java_time_chrono_ChronoLocalDateTime2029);
});
cljc.java_time.local_date_time.minus_months = (function cljc$java_time$local_date_time$minus_months(this2030,long2031){
return this2030.minusMonths(long2031);
});
cljc.java_time.local_date_time.minus = (function cljc$java_time$local_date_time$minus(var_args){
var G__24506 = arguments.length;
switch (G__24506) {
case 3:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this2032,G__2033,G__2034){
return this2032.minus(G__2033,G__2034);
});

cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this2035,G__2036){
return this2035.minus(G__2036);
});

cljc.java_time.local_date_time.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date_time.at_zone = (function cljc$java_time$local_date_time$at_zone(this2037,G__2038){
return this2037.atZone(G__2038);
});
cljc.java_time.local_date_time.plus_hours = (function cljc$java_time$local_date_time$plus_hours(this2039,long2040){
return this2039.plusHours(long2040);
});
cljc.java_time.local_date_time.plus_days = (function cljc$java_time$local_date_time$plus_days(this2041,long2042){
return this2041.plusDays(long2042);
});
cljc.java_time.local_date_time.to_local_time = (function cljc$java_time$local_date_time$to_local_time(this2043){
return this2043.toLocalTime();
});
cljc.java_time.local_date_time.get_long = (function cljc$java_time$local_date_time$get_long(this2044,java_time_temporal_TemporalField2045){
return this2044.getLong(java_time_temporal_TemporalField2045);
});
cljc.java_time.local_date_time.with_year = (function cljc$java_time$local_date_time$with_year(this2046,int2047){
return this2046.withYear(int2047);
});
cljc.java_time.local_date_time.with_nano = (function cljc$java_time$local_date_time$with_nano(this2048,int2049){
return this2048.withNano(int2049);
});
cljc.java_time.local_date_time.to_epoch_second = (function cljc$java_time$local_date_time$to_epoch_second(this2050,java_time_ZoneOffset2051){
return this2050.toEpochSecond(java_time_ZoneOffset2051);
});
cljc.java_time.local_date_time.until = (function cljc$java_time$local_date_time$until(this2052,java_time_temporal_Temporal2053,java_time_temporal_TemporalUnit2054){
return this2052.until(java_time_temporal_Temporal2053,java_time_temporal_TemporalUnit2054);
});
cljc.java_time.local_date_time.with_day_of_month = (function cljc$java_time$local_date_time$with_day_of_month(this2055,int2056){
return this2055.withDayOfMonth(int2056);
});
cljc.java_time.local_date_time.get_day_of_month = (function cljc$java_time$local_date_time$get_day_of_month(this2057){
return this2057.dayOfMonth();
});
cljc.java_time.local_date_time.from = (function cljc$java_time$local_date_time$from(java_time_temporal_TemporalAccessor2058){
return java.time.LocalDateTime.from(java_time_temporal_TemporalAccessor2058);
});
cljc.java_time.local_date_time.is_after = (function cljc$java_time$local_date_time$is_after(this2059,java_time_chrono_ChronoLocalDateTime2060){
return this2059.isAfter(java_time_chrono_ChronoLocalDateTime2060);
});
cljc.java_time.local_date_time.minus_nanos = (function cljc$java_time$local_date_time$minus_nanos(this2061,long2062){
return this2061.minusNanos(long2062);
});
cljc.java_time.local_date_time.is_supported = (function cljc$java_time$local_date_time$is_supported(this2063,G__2064){
return this2063.isSupported(G__2064);
});
cljc.java_time.local_date_time.minus_years = (function cljc$java_time$local_date_time$minus_years(this2065,long2066){
return this2065.minusYears(long2066);
});
cljc.java_time.local_date_time.get_chronology = (function cljc$java_time$local_date_time$get_chronology(this2067){
return this2067.chronology();
});
cljc.java_time.local_date_time.parse = (function cljc$java_time$local_date_time$parse(var_args){
var G__24509 = arguments.length;
switch (G__24509) {
case 2:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence2068,java_time_format_DateTimeFormatter2069){
return java.time.LocalDateTime.parse(java_lang_CharSequence2068,java_time_format_DateTimeFormatter2069);
});

cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence2070){
return java.time.LocalDateTime.parse(java_lang_CharSequence2070);
});

cljc.java_time.local_date_time.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_date_time.with_second = (function cljc$java_time$local_date_time$with_second(this2071,int2072){
return this2071.withSecond(int2072);
});
cljc.java_time.local_date_time.to_local_date = (function cljc$java_time$local_date_time$to_local_date(this2073){
return this2073.toLocalDate();
});
cljc.java_time.local_date_time.get_minute = (function cljc$java_time$local_date_time$get_minute(this2074){
return this2074.minute();
});
cljc.java_time.local_date_time.hash_code = (function cljc$java_time$local_date_time$hash_code(this2075){
return this2075.hashCode();
});
cljc.java_time.local_date_time.adjust_into = (function cljc$java_time$local_date_time$adjust_into(this2076,java_time_temporal_Temporal2077){
return this2076.adjustInto(java_time_temporal_Temporal2077);
});
cljc.java_time.local_date_time.with$ = (function cljc$java_time$local_date_time$with(var_args){
var G__24512 = arguments.length;
switch (G__24512) {
case 2:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this2078,G__2079){
return this2078.with(G__2079);
});

cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this2080,G__2081,G__2082){
return this2080.with(G__2081,G__2082);
});

cljc.java_time.local_date_time.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date_time.now = (function cljc$java_time$local_date_time$now(var_args){
var G__24515 = arguments.length;
switch (G__24515) {
case 0:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalDateTime.now();
});

cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__2084){
return java.time.LocalDateTime.now(G__2084);
});

cljc.java_time.local_date_time.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.local_date_time.get_month_value = (function cljc$java_time$local_date_time$get_month_value(this2085){
return this2085.monthValue();
});
cljc.java_time.local_date_time.with_day_of_year = (function cljc$java_time$local_date_time$with_day_of_year(this2086,int2087){
return this2086.withDayOfYear(int2087);
});
cljc.java_time.local_date_time.compare_to = (function cljc$java_time$local_date_time$compare_to(this2088,G__2089){
return this2088.compareTo(G__2089);
});
cljc.java_time.local_date_time.get_month = (function cljc$java_time$local_date_time$get_month(this2090){
return this2090.month();
});
cljc.java_time.local_date_time.of_instant = (function cljc$java_time$local_date_time$of_instant(java_time_Instant2091,java_time_ZoneId2092){
return java.time.LocalDateTime.ofInstant(java_time_Instant2091,java_time_ZoneId2092);
});
cljc.java_time.local_date_time.plus_seconds = (function cljc$java_time$local_date_time$plus_seconds(this2093,long2094){
return this2093.plusSeconds(long2094);
});
cljc.java_time.local_date_time.get = (function cljc$java_time$local_date_time$get(this2095,java_time_temporal_TemporalField2096){
return this2095.get(java_time_temporal_TemporalField2096);
});
cljc.java_time.local_date_time.equals = (function cljc$java_time$local_date_time$equals(this2097,java_lang_Object2098){
return this2097.equals(java_lang_Object2098);
});
cljc.java_time.local_date_time.format = (function cljc$java_time$local_date_time$format(this2099,java_time_format_DateTimeFormatter2100){
return this2099.format(java_time_format_DateTimeFormatter2100);
});
cljc.java_time.local_date_time.plus_years = (function cljc$java_time$local_date_time$plus_years(this2101,long2102){
return this2101.plusYears(long2102);
});
cljc.java_time.local_date_time.minus_days = (function cljc$java_time$local_date_time$minus_days(this2103,long2104){
return this2103.minusDays(long2104);
});
