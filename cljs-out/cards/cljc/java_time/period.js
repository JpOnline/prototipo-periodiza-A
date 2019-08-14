// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.period');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time');
cljc.java_time.period.zero = java.time.Period.ZERO;
cljc.java_time.period.get_months = (function cljc$java_time$period$get_months(this1789){
return this1789.months();
});
cljc.java_time.period.of_weeks = (function cljc$java_time$period$of_weeks(int1790){
return java.time.Period.ofWeeks(int1790);
});
cljc.java_time.period.of_days = (function cljc$java_time$period$of_days(int1791){
return java.time.Period.ofDays(int1791);
});
cljc.java_time.period.is_negative = (function cljc$java_time$period$is_negative(this1792){
return this1792.isNegative();
});
cljc.java_time.period.of = (function cljc$java_time$period$of(int1793,int1794,int1795){
return java.time.Period.of(int1793,int1794,int1795);
});
cljc.java_time.period.is_zero = (function cljc$java_time$period$is_zero(this1796){
return this1796.isZero();
});
cljc.java_time.period.multiplied_by = (function cljc$java_time$period$multiplied_by(this1797,G__1798){
return this1797.multipliedBy(G__1798);
});
cljc.java_time.period.get_units = (function cljc$java_time$period$get_units(this1799){
return this1799.units();
});
cljc.java_time.period.with_days = (function cljc$java_time$period$with_days(this1800,int1801){
return this1800.withDays(int1801);
});
cljc.java_time.period.plus = (function cljc$java_time$period$plus(this1802,G__1803){
return this1802.plus(G__1803);
});
cljc.java_time.period.of_months = (function cljc$java_time$period$of_months(int1804){
return java.time.Period.ofMonths(int1804);
});
cljc.java_time.period.to_string = (function cljc$java_time$period$to_string(this1805){
return this1805.toString();
});
cljc.java_time.period.plus_months = (function cljc$java_time$period$plus_months(this1806,long1807){
return this1806.plusMonths(long1807);
});
cljc.java_time.period.minus_months = (function cljc$java_time$period$minus_months(this1808,long1809){
return this1808.minusMonths(long1809);
});
cljc.java_time.period.minus = (function cljc$java_time$period$minus(this1810,G__1811){
return this1810.minus(G__1811);
});
cljc.java_time.period.add_to = (function cljc$java_time$period$add_to(this1812,java_time_temporal_Temporal1813){
return this1812.addTo(java_time_temporal_Temporal1813);
});
cljc.java_time.period.to_total_months = (function cljc$java_time$period$to_total_months(this1814){
return this1814.toTotalMonths();
});
cljc.java_time.period.plus_days = (function cljc$java_time$period$plus_days(this1815,long1816){
return this1815.plusDays(long1816);
});
cljc.java_time.period.of_years = (function cljc$java_time$period$of_years(int1817){
return java.time.Period.ofYears(int1817);
});
cljc.java_time.period.get_days = (function cljc$java_time$period$get_days(this1818){
return this1818.days();
});
cljc.java_time.period.negated = (function cljc$java_time$period$negated(this1819){
return this1819.negated();
});
cljc.java_time.period.get_years = (function cljc$java_time$period$get_years(this1820){
return this1820.years();
});
cljc.java_time.period.with_years = (function cljc$java_time$period$with_years(this1821,int1822){
return this1821.withYears(int1822);
});
cljc.java_time.period.normalized = (function cljc$java_time$period$normalized(this1823){
return this1823.normalized();
});
cljc.java_time.period.with_months = (function cljc$java_time$period$with_months(this1824,int1825){
return this1824.withMonths(int1825);
});
cljc.java_time.period.between = (function cljc$java_time$period$between(java_time_LocalDate1826,java_time_LocalDate1827){
return java.time.Period.between(java_time_LocalDate1826,java_time_LocalDate1827);
});
cljc.java_time.period.from = (function cljc$java_time$period$from(java_time_temporal_TemporalAmount1828){
return java.time.Period.from(java_time_temporal_TemporalAmount1828);
});
cljc.java_time.period.minus_years = (function cljc$java_time$period$minus_years(this1829,long1830){
return this1829.minusYears(long1830);
});
cljc.java_time.period.get_chronology = (function cljc$java_time$period$get_chronology(this1831){
return this1831.chronology();
});
cljc.java_time.period.parse = (function cljc$java_time$period$parse(java_lang_CharSequence1832){
return java.time.Period.parse(java_lang_CharSequence1832);
});
cljc.java_time.period.hash_code = (function cljc$java_time$period$hash_code(this1833){
return this1833.hashCode();
});
cljc.java_time.period.subtract_from = (function cljc$java_time$period$subtract_from(this1834,java_time_temporal_Temporal1835){
return this1834.subtractFrom(java_time_temporal_Temporal1835);
});
cljc.java_time.period.get = (function cljc$java_time$period$get(this1836,java_time_temporal_TemporalUnit1837){
return this1836.get(java_time_temporal_TemporalUnit1837);
});
cljc.java_time.period.equals = (function cljc$java_time$period$equals(this1838,java_lang_Object1839){
return this1838.equals(java_lang_Object1839);
});
cljc.java_time.period.plus_years = (function cljc$java_time$period$plus_years(this1840,long1841){
return this1840.plusYears(long1841);
});
cljc.java_time.period.minus_days = (function cljc$java_time$period$minus_days(this1842,long1843){
return this1842.minusDays(long1843);
});
