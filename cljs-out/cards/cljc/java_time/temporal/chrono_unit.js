// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljc.java_time.temporal.chrono_unit');
goog.require('cljs.core');
goog.require('cljs.java_time.interop');
goog.require('java.time.temporal');
cljc.java_time.temporal.chrono_unit.millis = java.time.temporal.ChronoUnit.MILLIS;
cljc.java_time.temporal.chrono_unit.minutes = java.time.temporal.ChronoUnit.MINUTES;
cljc.java_time.temporal.chrono_unit.micros = java.time.temporal.ChronoUnit.MICROS;
cljc.java_time.temporal.chrono_unit.half_days = java.time.temporal.ChronoUnit.HALF_DAYS;
cljc.java_time.temporal.chrono_unit.millennia = java.time.temporal.ChronoUnit.MILLENNIA;
cljc.java_time.temporal.chrono_unit.years = java.time.temporal.ChronoUnit.YEARS;
cljc.java_time.temporal.chrono_unit.decades = java.time.temporal.ChronoUnit.DECADES;
cljc.java_time.temporal.chrono_unit.days = java.time.temporal.ChronoUnit.DAYS;
cljc.java_time.temporal.chrono_unit.centuries = java.time.temporal.ChronoUnit.CENTURIES;
cljc.java_time.temporal.chrono_unit.weeks = java.time.temporal.ChronoUnit.WEEKS;
cljc.java_time.temporal.chrono_unit.hours = java.time.temporal.ChronoUnit.HOURS;
cljc.java_time.temporal.chrono_unit.eras = java.time.temporal.ChronoUnit.ERAS;
cljc.java_time.temporal.chrono_unit.seconds = java.time.temporal.ChronoUnit.SECONDS;
cljc.java_time.temporal.chrono_unit.months = java.time.temporal.ChronoUnit.MONTHS;
cljc.java_time.temporal.chrono_unit.nanos = java.time.temporal.ChronoUnit.NANOS;
cljc.java_time.temporal.chrono_unit.forever = java.time.temporal.ChronoUnit.FOREVER;
cljc.java_time.temporal.chrono_unit.values = (function cljc$java_time$temporal$chrono_unit$values(){
return java.time.temporal.ChronoUnit.values();
});
cljc.java_time.temporal.chrono_unit.value_of = (function cljc$java_time$temporal$chrono_unit$value_of(var_args){
var G__13755 = arguments.length;
switch (G__13755) {
case 1:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String3063){
return java.time.temporal.ChronoUnit.valueOf(java_lang_String3063);
});

cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class3064,java_lang_String3065){
return java.time.temporal.ChronoUnit.valueOf(java_lang_Class3064,java_lang_String3065);
});

cljc.java_time.temporal.chrono_unit.value_of.cljs$lang$maxFixedArity = 2;

cljc.java_time.temporal.chrono_unit.ordinal = (function cljc$java_time$temporal$chrono_unit$ordinal(this3066){
return this3066.ordinal();
});
cljc.java_time.temporal.chrono_unit.is_duration_estimated = (function cljc$java_time$temporal$chrono_unit$is_duration_estimated(this3067){
return this3067.isDurationEstimated();
});
cljc.java_time.temporal.chrono_unit.to_string = (function cljc$java_time$temporal$chrono_unit$to_string(this3068){
return this3068.toString();
});
cljc.java_time.temporal.chrono_unit.is_date_based = (function cljc$java_time$temporal$chrono_unit$is_date_based(this3069){
return this3069.isDateBased();
});
cljc.java_time.temporal.chrono_unit.add_to = (function cljc$java_time$temporal$chrono_unit$add_to(this3070,java_time_temporal_Temporal3071,long3072){
return this3070.addTo(java_time_temporal_Temporal3071,long3072);
});
cljc.java_time.temporal.chrono_unit.name = (function cljc$java_time$temporal$chrono_unit$name(this3073){
return this3073.name();
});
cljc.java_time.temporal.chrono_unit.is_supported_by = (function cljc$java_time$temporal$chrono_unit$is_supported_by(this3074,java_time_temporal_Temporal3075){
return this3074.isSupportedBy(java_time_temporal_Temporal3075);
});
cljc.java_time.temporal.chrono_unit.get_declaring_class = (function cljc$java_time$temporal$chrono_unit$get_declaring_class(this3076){
return this3076.declaringClass();
});
cljc.java_time.temporal.chrono_unit.between = (function cljc$java_time$temporal$chrono_unit$between(this3077,java_time_temporal_Temporal3078,java_time_temporal_Temporal3079){
return this3077.between(java_time_temporal_Temporal3078,java_time_temporal_Temporal3079);
});
cljc.java_time.temporal.chrono_unit.hash_code = (function cljc$java_time$temporal$chrono_unit$hash_code(this3080){
return this3080.hashCode();
});
cljc.java_time.temporal.chrono_unit.compare_to = (function cljc$java_time$temporal$chrono_unit$compare_to(this3081,G__3082){
return this3081.compareTo(G__3082);
});
cljc.java_time.temporal.chrono_unit.get_duration = (function cljc$java_time$temporal$chrono_unit$get_duration(this3083){
return this3083.duration();
});
cljc.java_time.temporal.chrono_unit.equals = (function cljc$java_time$temporal$chrono_unit$equals(this3084,java_lang_Object3085){
return this3084.equals(java_lang_Object3085);
});
cljc.java_time.temporal.chrono_unit.is_time_based = (function cljc$java_time$temporal$chrono_unit$is_time_based(this3086){
return this3086.isTimeBased();
});
