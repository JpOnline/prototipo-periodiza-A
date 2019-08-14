// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.local_date');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.local_date.max = java.time.LocalDate.MAX;
cljc.java_time.local_date.min = java.time.LocalDate.MIN;
cljc.java_time.local_date.minus_weeks = (function cljc$java_time$local_date$minus_weeks(this1844,long1845){
return this1844.minusWeeks(long1845);
});
cljc.java_time.local_date.plus_weeks = (function cljc$java_time$local_date$plus_weeks(this1846,long1847){
return this1846.plusWeeks(long1847);
});
cljc.java_time.local_date.length_of_year = (function cljc$java_time$local_date$length_of_year(this1848){
return this1848.lengthOfYear();
});
cljc.java_time.local_date.range = (function cljc$java_time$local_date$range(this1849,java_time_temporal_TemporalField1850){
return this1849.range(java_time_temporal_TemporalField1850);
});
cljc.java_time.local_date.get_era = (function cljc$java_time$local_date$get_era(this1851){
return this1851.era();
});
cljc.java_time.local_date.of = (function cljc$java_time$local_date$of(G__1853,G__1854,G__1855){
return java.time.LocalDate.of(G__1853,G__1854,G__1855);
});
cljc.java_time.local_date.with_month = (function cljc$java_time$local_date$with_month(this1856,int1857){
return this1856.withMonth(int1857);
});
cljc.java_time.local_date.is_equal = (function cljc$java_time$local_date$is_equal(this1858,java_time_chrono_ChronoLocalDate1859){
return this1858.isEqual(java_time_chrono_ChronoLocalDate1859);
});
cljc.java_time.local_date.get_year = (function cljc$java_time$local_date$get_year(this1860){
return this1860.year();
});
cljc.java_time.local_date.to_epoch_day = (function cljc$java_time$local_date$to_epoch_day(this1861){
return this1861.toEpochDay();
});
cljc.java_time.local_date.get_day_of_year = (function cljc$java_time$local_date$get_day_of_year(this1862){
return this1862.dayOfYear();
});
cljc.java_time.local_date.plus = (function cljc$java_time$local_date$plus(var_args){
var G__17520 = arguments.length;
switch (G__17520) {
case 2:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2 = (function (this1863,G__1864){
return this1863.plus(G__1864);
});

cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3 = (function (this1865,G__1866,G__1867){
return this1865.plus(G__1866,G__1867);
});

cljc.java_time.local_date.plus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.is_leap_year = (function cljc$java_time$local_date$is_leap_year(this1868){
return this1868.isLeapYear();
});
cljc.java_time.local_date.query = (function cljc$java_time$local_date$query(this1869,java_time_temporal_TemporalQuery1870){
return this1869.query(java_time_temporal_TemporalQuery1870);
});
cljc.java_time.local_date.get_day_of_week = (function cljc$java_time$local_date$get_day_of_week(this1871){
return this1871.dayOfWeek();
});
cljc.java_time.local_date.to_string = (function cljc$java_time$local_date$to_string(this1872){
return this1872.toString();
});
cljc.java_time.local_date.plus_months = (function cljc$java_time$local_date$plus_months(this1873,long1874){
return this1873.plusMonths(long1874);
});
cljc.java_time.local_date.is_before = (function cljc$java_time$local_date$is_before(this1875,java_time_chrono_ChronoLocalDate1876){
return this1875.isBefore(java_time_chrono_ChronoLocalDate1876);
});
cljc.java_time.local_date.minus_months = (function cljc$java_time$local_date$minus_months(this1877,long1878){
return this1877.minusMonths(long1878);
});
cljc.java_time.local_date.minus = (function cljc$java_time$local_date$minus(var_args){
var G__17523 = arguments.length;
switch (G__17523) {
case 2:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2 = (function (this1879,G__1880){
return this1879.minus(G__1880);
});

cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3 = (function (this1881,G__1882,G__1883){
return this1881.minus(G__1882,G__1883);
});

cljc.java_time.local_date.minus.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.plus_days = (function cljc$java_time$local_date$plus_days(this1884,long1885){
return this1884.plusDays(long1885);
});
cljc.java_time.local_date.get_long = (function cljc$java_time$local_date$get_long(this1886,java_time_temporal_TemporalField1887){
return this1886.getLong(java_time_temporal_TemporalField1887);
});
cljc.java_time.local_date.with_year = (function cljc$java_time$local_date$with_year(this1888,int1889){
return this1888.withYear(int1889);
});
cljc.java_time.local_date.length_of_month = (function cljc$java_time$local_date$length_of_month(this1890){
return this1890.lengthOfMonth();
});
cljc.java_time.local_date.until = (function cljc$java_time$local_date$until(var_args){
var G__17526 = arguments.length;
switch (G__17526) {
case 2:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2 = (function (this1891,G__1892){
return this1891.until(G__1892);
});

cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3 = (function (this1893,java_time_temporal_Temporal1894,java_time_temporal_TemporalUnit1895){
return this1893.until(java_time_temporal_Temporal1894,java_time_temporal_TemporalUnit1895);
});

cljc.java_time.local_date.until.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.of_epoch_day = (function cljc$java_time$local_date$of_epoch_day(long1896){
return java.time.LocalDate.ofEpochDay(long1896);
});
cljc.java_time.local_date.with_day_of_month = (function cljc$java_time$local_date$with_day_of_month(this1897,int1898){
return this1897.withDayOfMonth(int1898);
});
cljc.java_time.local_date.get_day_of_month = (function cljc$java_time$local_date$get_day_of_month(this1899){
return this1899.dayOfMonth();
});
cljc.java_time.local_date.from = (function cljc$java_time$local_date$from(java_time_temporal_TemporalAccessor1900){
return java.time.LocalDate.from(java_time_temporal_TemporalAccessor1900);
});
cljc.java_time.local_date.is_after = (function cljc$java_time$local_date$is_after(this1901,java_time_chrono_ChronoLocalDate1902){
return this1901.isAfter(java_time_chrono_ChronoLocalDate1902);
});
cljc.java_time.local_date.is_supported = (function cljc$java_time$local_date$is_supported(this1903,G__1904){
return this1903.isSupported(G__1904);
});
cljc.java_time.local_date.minus_years = (function cljc$java_time$local_date$minus_years(this1905,long1906){
return this1905.minusYears(long1906);
});
cljc.java_time.local_date.get_chronology = (function cljc$java_time$local_date$get_chronology(this1907){
return this1907.chronology();
});
cljc.java_time.local_date.parse = (function cljc$java_time$local_date$parse(var_args){
var G__17529 = arguments.length;
switch (G__17529) {
case 2:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence1908,java_time_format_DateTimeFormatter1909){
return java.time.LocalDate.parse(java_lang_CharSequence1908,java_time_format_DateTimeFormatter1909);
});

cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence1910){
return java.time.LocalDate.parse(java_lang_CharSequence1910);
});

cljc.java_time.local_date.parse.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_date.hash_code = (function cljc$java_time$local_date$hash_code(this1911){
return this1911.hashCode();
});
cljc.java_time.local_date.adjust_into = (function cljc$java_time$local_date$adjust_into(this1912,java_time_temporal_Temporal1913){
return this1912.adjustInto(java_time_temporal_Temporal1913);
});
cljc.java_time.local_date.with$ = (function cljc$java_time$local_date$with(var_args){
var G__17532 = arguments.length;
switch (G__17532) {
case 2:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2 = (function (this1914,G__1915){
return this1914.with(G__1915);
});

cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3 = (function (this1916,G__1917,G__1918){
return this1916.with(G__1917,G__1918);
});

cljc.java_time.local_date.with$.cljs$lang$maxFixedArity = 3;

cljc.java_time.local_date.now = (function cljc$java_time$local_date$now(var_args){
var G__17535 = arguments.length;
switch (G__17535) {
case 0:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.LocalDate.now();
});

cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1 = (function (G__1920){
return java.time.LocalDate.now(G__1920);
});

cljc.java_time.local_date.now.cljs$lang$maxFixedArity = 1;

cljc.java_time.local_date.at_start_of_day = (function cljc$java_time$local_date$at_start_of_day(var_args){
var G__17538 = arguments.length;
switch (G__17538) {
case 2:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2 = (function (this1921,java_time_ZoneId1922){
return this1921.atStartOfDay(java_time_ZoneId1922);
});

cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1 = (function (this1923){
return this1923.atStartOfDay();
});

cljc.java_time.local_date.at_start_of_day.cljs$lang$maxFixedArity = 2;

cljc.java_time.local_date.get_month_value = (function cljc$java_time$local_date$get_month_value(this1924){
return this1924.monthValue();
});
cljc.java_time.local_date.with_day_of_year = (function cljc$java_time$local_date$with_day_of_year(this1925,int1926){
return this1925.withDayOfYear(int1926);
});
cljc.java_time.local_date.compare_to = (function cljc$java_time$local_date$compare_to(this1927,G__1928){
return this1927.compareTo(G__1928);
});
cljc.java_time.local_date.get_month = (function cljc$java_time$local_date$get_month(this1929){
return this1929.month();
});
cljc.java_time.local_date.of_year_day = (function cljc$java_time$local_date$of_year_day(int1930,int1931){
return java.time.LocalDate.ofYearDay(int1930,int1931);
});
cljc.java_time.local_date.get = (function cljc$java_time$local_date$get(this1932,java_time_temporal_TemporalField1933){
return this1932.get(java_time_temporal_TemporalField1933);
});
cljc.java_time.local_date.equals = (function cljc$java_time$local_date$equals(this1934,java_lang_Object1935){
return this1934.equals(java_lang_Object1935);
});
cljc.java_time.local_date.at_time = (function cljc$java_time$local_date$at_time(var_args){
var G__17541 = arguments.length;
switch (G__17541) {
case 3:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3 = (function (this1936,int1937,int1938){
return this1936.atTime(int1937,int1938);
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4 = (function (this1939,int1940,int1941,int1942){
return this1939.atTime(int1940,int1941,int1942);
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2 = (function (this1943,G__1944){
return this1943.atTime(G__1944);
});

cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5 = (function (this1945,int1946,int1947,int1948,int1949){
return this1945.atTime(int1946,int1947,int1948,int1949);
});

cljc.java_time.local_date.at_time.cljs$lang$maxFixedArity = 5;

cljc.java_time.local_date.format = (function cljc$java_time$local_date$format(this1950,java_time_format_DateTimeFormatter1951){
return this1950.format(java_time_format_DateTimeFormatter1951);
});
cljc.java_time.local_date.plus_years = (function cljc$java_time$local_date$plus_years(this1952,long1953){
return this1952.plusYears(long1953);
});
cljc.java_time.local_date.minus_days = (function cljc$java_time$local_date$minus_days(this1954,long1955){
return this1954.minusDays(long1955);
});
