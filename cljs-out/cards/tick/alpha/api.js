// Compiled by ClojureScript 1.10.520 {}
goog.provide('tick.alpha.api');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('tick.core');
goog.require('tick.format');
goog.require('tick.interval');
goog.require('clojure.set');
goog.require('java.time');
goog.require('java.time.format');
tick.alpha.api.new_time = tick.core.new_time;
tick.alpha.api.new_date = tick.core.new_date;
tick.alpha.api.unit_map = tick.core.unit_map;
tick.alpha.api.now = (function tick$alpha$api$now(){
return tick.core.now.call(null);
});
tick.alpha.api.today = (function tick$alpha$api$today(){
return tick.core.today.call(null);
});
tick.alpha.api.tomorrow = (function tick$alpha$api$tomorrow(){
return tick.core.tomorrow.call(null);
});
tick.alpha.api.yesterday = (function tick$alpha$api$yesterday(){
return tick.core.yesterday.call(null);
});
tick.alpha.api.time = (function tick$alpha$api$time(var_args){
var G__14592 = arguments.length;
switch (G__14592) {
case 0:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.time.call(null,v);
});

tick.alpha.api.time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.date = (function tick$alpha$api$date(var_args){
var G__14595 = arguments.length;
switch (G__14595) {
case 0:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.alpha.api.today.call(null);
});

tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date.call(null,v);
});

tick.alpha.api.date.cljs$lang$maxFixedArity = 1;

tick.alpha.api.inst = (function tick$alpha$api$inst(var_args){
var G__14598 = arguments.length;
switch (G__14598) {
case 0:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.inst.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.inst.call(null,v);
});

tick.alpha.api.inst.cljs$lang$maxFixedArity = 1;

tick.alpha.api.instant = (function tick$alpha$api$instant(var_args){
var G__14601 = arguments.length;
switch (G__14601) {
case 0:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.instant.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.instant.call(null,v);
});

tick.alpha.api.instant.cljs$lang$maxFixedArity = 1;

tick.alpha.api.date_time = (function tick$alpha$api$date_time(var_args){
var G__14604 = arguments.length;
switch (G__14604) {
case 0:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.date_time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date_time.call(null,v);
});

tick.alpha.api.date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.offset_date_time = (function tick$alpha$api$offset_date_time(var_args){
var G__14607 = arguments.length;
switch (G__14607) {
case 0:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.offset_date_time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.offset_date_time.call(null,v);
});

tick.alpha.api.offset_date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zoned_date_time = (function tick$alpha$api$zoned_date_time(var_args){
var G__14610 = arguments.length;
switch (G__14610) {
case 0:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.zoned_date_time.call(null,tick.alpha.api.now.call(null));
});

tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.zoned_date_time.call(null,v);
});

tick.alpha.api.zoned_date_time.cljs$lang$maxFixedArity = 1;

tick.alpha.api.nanosecond = (function tick$alpha$api$nanosecond(t){
return tick.core.nanosecond.call(null,t);
});
tick.alpha.api.microsecond = (function tick$alpha$api$microsecond(t){
return tick.core.microsecond.call(null,t);
});
tick.alpha.api.millisecond = (function tick$alpha$api$millisecond(t){
return tick.core.millisecond.call(null,t);
});
tick.alpha.api.second = (function tick$alpha$api$second(t){
return tick.core.second.call(null,t);
});
tick.alpha.api.minute = (function tick$alpha$api$minute(t){
return tick.core.minute.call(null,t);
});
tick.alpha.api.hour = (function tick$alpha$api$hour(t){
return tick.core.hour.call(null,t);
});
tick.alpha.api.day_of_week = (function tick$alpha$api$day_of_week(var_args){
var G__14613 = arguments.length;
switch (G__14613) {
case 0:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_week.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_week.call(null,v);
});

tick.alpha.api.day_of_week.cljs$lang$maxFixedArity = 1;

tick.alpha.api.day_of_month = (function tick$alpha$api$day_of_month(var_args){
var G__14616 = arguments.length;
switch (G__14616) {
case 0:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_month.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_month.call(null,v);
});

tick.alpha.api.day_of_month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.month = (function tick$alpha$api$month(var_args){
var G__14619 = arguments.length;
switch (G__14619) {
case 0:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.month.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.month.call(null,v);
});

tick.alpha.api.month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.year = (function tick$alpha$api$year(var_args){
var G__14622 = arguments.length;
switch (G__14622) {
case 0:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year.call(null,v);
});

tick.alpha.api.year.cljs$lang$maxFixedArity = 1;

tick.alpha.api.year_month = (function tick$alpha$api$year_month(var_args){
var G__14625 = arguments.length;
switch (G__14625) {
case 0:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year_month.call(null,tick.alpha.api.today.call(null));
});

tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year_month.call(null,v);
});

tick.alpha.api.year_month.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zone = (function tick$alpha$api$zone(var_args){
var G__14628 = arguments.length;
switch (G__14628) {
case 0:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_zone.call(null);
});

tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.core.zone.call(null,z);
});

tick.alpha.api.zone.cljs$lang$maxFixedArity = 1;

tick.alpha.api.zone_offset = (function tick$alpha$api$zone_offset(var_args){
var G__14631 = arguments.length;
switch (G__14631) {
case 1:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1 = (function (offset){
return tick.core.zone_offset.call(null,offset);
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return java.time.ZoneOffset.ofHoursMinutes(hours,minutes);
});

tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return java.time.ZoneOffset.ofHoursMinutesSeconds(hours,minutes,seconds);
});

tick.alpha.api.zone_offset.cljs$lang$maxFixedArity = 3;

tick.alpha.api.on = (function tick$alpha$api$on(t,d){
return tick.core.on.call(null,t,tick.alpha.api.date.call(null,d));
});
tick.alpha.api.at = (function tick$alpha$api$at(d,t){
return tick.core.at.call(null,d,tick.alpha.api.time.call(null,t));
});
tick.alpha.api.in$ = (function tick$alpha$api$in(ldt,z){
return tick.core.in$.call(null,ldt,tick.alpha.api.zone.call(null,z));
});
tick.alpha.api.offset_by = (function tick$alpha$api$offset_by(ldt,offset){
return tick.core.offset_by.call(null,ldt,tick.alpha.api.zone_offset.call(null,offset));
});
tick.alpha.api.MONDAY = java.time.DayOfWeek.MONDAY;
tick.alpha.api.TUESDAY = java.time.DayOfWeek.TUESDAY;
tick.alpha.api.WEDNESDAY = java.time.DayOfWeek.WEDNESDAY;
tick.alpha.api.THURSDAY = java.time.DayOfWeek.THURSDAY;
tick.alpha.api.FRIDAY = java.time.DayOfWeek.FRIDAY;
tick.alpha.api.SATURDAY = java.time.DayOfWeek.SATURDAY;
tick.alpha.api.SUNDAY = java.time.DayOfWeek.SUNDAY;
tick.alpha.api.JANUARY = java.time.Month.JANUARY;
tick.alpha.api.FEBRUARY = java.time.Month.FEBRUARY;
tick.alpha.api.MARCH = java.time.Month.MARCH;
tick.alpha.api.APRIL = java.time.Month.APRIL;
tick.alpha.api.MAY = java.time.Month.MAY;
tick.alpha.api.JUNE = java.time.Month.JUNE;
tick.alpha.api.JULY = java.time.Month.JULY;
tick.alpha.api.AUGUST = java.time.Month.AUGUST;
tick.alpha.api.SEPTEMBER = java.time.Month.SEPTEMBER;
tick.alpha.api.OCTOBER = java.time.Month.OCTOBER;
tick.alpha.api.NOVEMBER = java.time.Month.NOVEMBER;
tick.alpha.api.DECEMBER = java.time.Month.DECEMBER;
tick.alpha.api.beginning = (function tick$alpha$api$beginning(v){
return tick.core.beginning.call(null,v);
});
tick.alpha.api.end = (function tick$alpha$api$end(v){
return tick.core.end.call(null,v);
});
tick.alpha.api.duration = (function tick$alpha$api$duration(v){
return tick.core.duration.call(null,v);
});
tick.alpha.api.coincident_QMARK_ = tick.core.coincident_QMARK_;
tick.alpha.api.noon = tick.core.noon;
tick.alpha.api.midnight = tick.core.midnight;
tick.alpha.api.midnight_QMARK_ = tick.core.midnight_QMARK_;
tick.alpha.api.epoch = tick.core.epoch;
tick.alpha.api.fields = tick.core.fields;
tick.alpha.api.with$ = tick.core.with$;
tick.alpha.api.ago = tick.core.ago;
tick.alpha.api.hence = tick.core.hence;
tick.alpha.api.UTC = tick.alpha.api.zone.call(null,"UTC");
tick.alpha.api.parse = tick.core.parse;
tick.alpha.api._PLUS_ = (function tick$alpha$api$_PLUS_(var_args){
var G__14638 = arguments.length;
switch (G__14638) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14640 = arguments.length;
var i__4731__auto___14641 = (0);
while(true){
if((i__4731__auto___14641 < len__4730__auto___14640)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14641]));

var G__14642 = (i__4731__auto___14641 + (1));
i__4731__auto___14641 = G__14642;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
});

tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return arg;
});

tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.call(null,(function (p1__14633_SHARP_,p2__14634_SHARP_){
return tick.core._PLUS_.call(null,p1__14633_SHARP_,p2__14634_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq14636){
var G__14637 = cljs.core.first.call(null,seq14636);
var seq14636__$1 = cljs.core.next.call(null,seq14636);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14637,seq14636__$1);
});

tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1);

tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__14648 = arguments.length;
switch (G__14648) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14650 = arguments.length;
var i__4731__auto___14651 = (0);
while(true){
if((i__4731__auto___14651 < len__4730__auto___14650)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14651]));

var G__14652 = (i__4731__auto___14651 + (1));
i__4731__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

tick.alpha.api._.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
});

tick.alpha.api._.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return tick.core.negated.call(null,arg);
});

tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.call(null,(function (p1__14643_SHARP_,p2__14644_SHARP_){
return tick.core._.call(null,p1__14643_SHARP_,p2__14644_SHARP_);
}),arg,args);
});

/** @this {Function} */
tick.alpha.api._.cljs$lang$applyTo = (function (seq14646){
var G__14647 = cljs.core.first.call(null,seq14646);
var seq14646__$1 = cljs.core.next.call(null,seq14646);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14647,seq14646__$1);
});

tick.alpha.api._.cljs$lang$maxFixedArity = (1);

tick.alpha.api.inc = (function tick$alpha$api$inc(t){
return tick.core.inc.call(null,t);
});
tick.alpha.api.dec = (function tick$alpha$api$dec(t){
return tick.core.dec.call(null,t);
});
tick.alpha.api._GT__GT_ = (function tick$alpha$api$_GT__GT_(t,amt){
return tick.core._GT__GT_.call(null,t,amt);
});
tick.alpha.api._LT__LT_ = (function tick$alpha$api$_LT__LT_(t,amt){
return tick.core._LT__LT_.call(null,t,amt);
});
tick.alpha.api.max = tick.core.max;
tick.alpha.api.min = tick.core.min;
tick.alpha.api.range = tick.core.range;
tick.alpha.api.int$ = (function tick$alpha$api$int(arg){
return tick.core.int$.call(null,arg);
});
tick.alpha.api.long$ = (function tick$alpha$api$long(arg){
return tick.core.long$.call(null,arg);
});
tick.alpha.api.nanos = (function tick$alpha$api$nanos(v){
return tick.core.nanos.call(null,v);
});
tick.alpha.api.micros = (function tick$alpha$api$micros(v){
return tick.core.micros.call(null,v);
});
tick.alpha.api.millis = (function tick$alpha$api$millis(v){
return tick.core.millis.call(null,v);
});
tick.alpha.api.seconds = (function tick$alpha$api$seconds(v){
return tick.core.seconds.call(null,v);
});
tick.alpha.api.minutes = (function tick$alpha$api$minutes(v){
return tick.core.minutes.call(null,v);
});
tick.alpha.api.hours = (function tick$alpha$api$hours(v){
return tick.core.hours.call(null,v);
});
tick.alpha.api.days = (function tick$alpha$api$days(v){
return tick.core.days.call(null,v);
});
tick.alpha.api.months = (function tick$alpha$api$months(v){
return tick.core.months.call(null,v);
});
tick.alpha.api.years = (function tick$alpha$api$years(v){
return tick.core.years.call(null,v);
});
tick.alpha.api.units = tick.core.units;
tick.alpha.api.truncate = tick.core.truncate;
tick.alpha.api._LT_ = (function tick$alpha$api$_LT_(var_args){
var G__14657 = arguments.length;
switch (G__14657) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14659 = arguments.length;
var i__4731__auto___14660 = (0);
while(true){
if((i__4731__auto___14660 < len__4730__auto___14659)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14660]));

var G__14661 = (i__4731__auto___14660 + (1));
i__4731__auto___14660 = G__14661;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT_.call(null,x,y);
});

tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14662 = y;
var G__14663 = cljs.core.first.call(null,more);
var G__14664 = cljs.core.next.call(null,more);
x = G__14662;
y = G__14663;
more = G__14664;
continue;
} else {
return tick.core._LT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq14654){
var G__14655 = cljs.core.first.call(null,seq14654);
var seq14654__$1 = cljs.core.next.call(null,seq14654);
var G__14656 = cljs.core.first.call(null,seq14654__$1);
var seq14654__$2 = cljs.core.next.call(null,seq14654__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14655,G__14656,seq14654__$2);
});

tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__14669 = arguments.length;
switch (G__14669) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14671 = arguments.length;
var i__4731__auto___14672 = (0);
while(true){
if((i__4731__auto___14672 < len__4730__auto___14671)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14672]));

var G__14673 = (i__4731__auto___14672 + (1));
i__4731__auto___14672 = G__14673;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT__EQ_.call(null,x,y);
});

tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14674 = y;
var G__14675 = cljs.core.first.call(null,more);
var G__14676 = cljs.core.next.call(null,more);
x = G__14674;
y = G__14675;
more = G__14676;
continue;
} else {
return tick.core._LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq14666){
var G__14667 = cljs.core.first.call(null,seq14666);
var seq14666__$1 = cljs.core.next.call(null,seq14666);
var G__14668 = cljs.core.first.call(null,seq14666__$1);
var seq14666__$2 = cljs.core.next.call(null,seq14666__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14667,G__14668,seq14666__$2);
});

tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__14681 = arguments.length;
switch (G__14681) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14683 = arguments.length;
var i__4731__auto___14684 = (0);
while(true){
if((i__4731__auto___14684 < len__4730__auto___14683)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14684]));

var G__14685 = (i__4731__auto___14684 + (1));
i__4731__auto___14684 = G__14685;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT_.call(null,x,y);
});

tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14686 = y;
var G__14687 = cljs.core.first.call(null,more);
var G__14688 = cljs.core.next.call(null,more);
x = G__14686;
y = G__14687;
more = G__14688;
continue;
} else {
return tick.core._GT_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq14678){
var G__14679 = cljs.core.first.call(null,seq14678);
var seq14678__$1 = cljs.core.next.call(null,seq14678);
var G__14680 = cljs.core.first.call(null,seq14678__$1);
var seq14678__$2 = cljs.core.next.call(null,seq14678__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14679,G__14680,seq14678__$2);
});

tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2);

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__14693 = arguments.length;
switch (G__14693) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14695 = arguments.length;
var i__4731__auto___14696 = (0);
while(true){
if((i__4731__auto___14696 < len__4730__auto___14695)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14696]));

var G__14697 = (i__4731__auto___14696 + (1));
i__4731__auto___14696 = G__14697;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
});

tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT__EQ_.call(null,x,y);
});

tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT__EQ_.call(null,x,y))){
if(cljs.core.next.call(null,more)){
var G__14698 = y;
var G__14699 = cljs.core.first.call(null,more);
var G__14700 = cljs.core.next.call(null,more);
x = G__14698;
y = G__14699;
more = G__14700;
continue;
} else {
return tick.core._GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

/** @this {Function} */
tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq14690){
var G__14691 = cljs.core.first.call(null,seq14690);
var seq14690__$1 = cljs.core.next.call(null,seq14690);
var G__14692 = cljs.core.first.call(null,seq14690__$1);
var seq14690__$2 = cljs.core.next.call(null,seq14690__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14691,G__14692,seq14690__$2);
});

tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2);

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__14702 = arguments.length;
switch (G__14702) {
case 0:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_clock.call(null);
});

tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.core.clock.call(null,i);
});

tick.alpha.api.clock.cljs$lang$maxFixedArity = 1;

var ret__4776__auto___14708 = (function (){
tick.alpha.api.with_clock = (function tick$alpha$api$with_clock(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14709 = arguments.length;
var i__4731__auto___14710 = (0);
while(true){
if((i__4731__auto___14710 < len__4730__auto___14709)){
args__4736__auto__.push((arguments[i__4731__auto___14710]));

var G__14711 = (i__4731__auto___14710 + (1));
i__4731__auto___14710 = G__14711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return tick.alpha.api.with_clock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

tick.alpha.api.with_clock.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clock,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tick.core","*clock*","tick.core/*clock*",762077043,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("tick.core","clock","tick.core/clock",634291280,null),null,(1),null)),(new cljs.core.List(null,clock,null,(1),null))))),null,(1),null)))))),null,(1),null)),body)));
});

tick.alpha.api.with_clock.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
tick.alpha.api.with_clock.cljs$lang$applyTo = (function (seq14704){
var G__14705 = cljs.core.first.call(null,seq14704);
var seq14704__$1 = cljs.core.next.call(null,seq14704);
var G__14706 = cljs.core.first.call(null,seq14704__$1);
var seq14704__$2 = cljs.core.next.call(null,seq14704__$1);
var G__14707 = cljs.core.first.call(null,seq14704__$2);
var seq14704__$3 = cljs.core.next.call(null,seq14704__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14705,G__14706,G__14707,seq14704__$3);
});

return null;
})()
;
tick.alpha.api.with_clock.cljs$lang$macro = true;

tick.alpha.api.atom = tick.core.atom;
tick.alpha.api.swap_BANG_ = tick.core.swap_BANG_;
tick.alpha.api.swap_vals_BANG_ = tick.core.swap_vals_BANG_;
tick.alpha.api.compare_and_set_BANG_ = tick.core.compare_and_set_BANG_;
tick.alpha.api.reset_BANG_ = tick.core.reset_BANG_;
tick.alpha.api.reset_vals_BANG_ = tick.core.reset_vals_BANG_;
tick.alpha.api.new_interval = (function tick$alpha$api$new_interval(x,y){
return tick.interval.new_interval.call(null,x,y);
});
tick.alpha.api.extend = (function tick$alpha$api$extend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14714 = arguments.length;
var i__4731__auto___14715 = (0);
while(true){
if((i__4731__auto___14715 < len__4730__auto___14714)){
args__4736__auto__.push((arguments[i__4731__auto___14715]));

var G__14716 = (i__4731__auto___14715 + (1));
i__4731__auto___14715 = G__14716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.call(null,tick.interval.extend,ival,durations);
});

tick.alpha.api.extend.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.alpha.api.extend.cljs$lang$applyTo = (function (seq14712){
var G__14713 = cljs.core.first.call(null,seq14712);
var seq14712__$1 = cljs.core.next.call(null,seq14712);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14713,seq14712__$1);
});

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14719 = arguments.length;
var i__4731__auto___14720 = (0);
while(true){
if((i__4731__auto___14720 < len__4730__auto___14719)){
args__4736__auto__.push((arguments[i__4731__auto___14720]));

var G__14721 = (i__4731__auto___14720 + (1));
i__4731__auto___14720 = G__14721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.call(null,tick.interval.extend,ival,durations);
});

tick.alpha.api.scale.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tick.alpha.api.scale.cljs$lang$applyTo = (function (seq14717){
var G__14718 = cljs.core.first.call(null,seq14717);
var seq14717__$1 = cljs.core.next.call(null,seq14717);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14718,seq14717__$1);
});

/**
 * Return an interval which forms the bounding-box of the given arguments.
 */
tick.alpha.api.bounds = tick.interval.bounds;
tick.alpha.api.am = (function tick$alpha$api$am(date){
return tick.interval.am.call(null,date);
});
tick.alpha.api.pm = (function tick$alpha$api$pm(date){
return tick.interval.pm.call(null,date);
});
tick.alpha.api.relation = (function tick$alpha$api$relation(i1,i2){
return tick.interval.relation.call(null,i1,i2);
});
tick.alpha.api.new_duration = (function tick$alpha$api$new_duration(n,u){
return tick.core.new_duration.call(null,n,u);
});
tick.alpha.api.new_period = (function tick$alpha$api$new_period(n,u){
return tick.core.new_period.call(null,n,u);
});
tick.alpha.api.between = (function tick$alpha$api$between(v1,v2){
return tick.core.between.call(null,v1,v2);
});
tick.alpha.api.concur = (function tick$alpha$api$concur(var_args){
var G__14725 = arguments.length;
switch (G__14725) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14727 = arguments.length;
var i__4731__auto___14728 = (0);
while(true){
if((i__4731__auto___14728 < len__4730__auto___14727)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14728]));

var G__14729 = (i__4731__auto___14728 + (1));
i__4731__auto___14728 = G__14729;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.reduce.call(null,tick.interval.concur,x,args);
});

/** @this {Function} */
tick.alpha.api.concur.cljs$lang$applyTo = (function (seq14723){
var G__14724 = cljs.core.first.call(null,seq14723);
var seq14723__$1 = cljs.core.next.call(null,seq14723);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14724,seq14723__$1);
});

tick.alpha.api.concur.cljs$lang$maxFixedArity = (1);

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14731 = arguments.length;
var i__4731__auto___14732 = (0);
while(true){
if((i__4731__auto___14732 < len__4730__auto___14731)){
args__4736__auto__.push((arguments[i__4731__auto___14732]));

var G__14733 = (i__4731__auto___14732 + (1));
i__4731__auto___14732 = G__14733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
return cljs.core.apply.call(null,tick.interval.concurrencies,intervals);
});

tick.alpha.api.concurrencies.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq14730){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14730));
});

tick.alpha.api.divide_by = (function tick$alpha$api$divide_by(divisor,t){
return tick.core.divide.call(null,t,divisor);
});
tick.alpha.api.divide = (function tick$alpha$api$divide(t,divisor){
return tick.core.divide.call(null,t,divisor);
});
tick.alpha.api.ordered_disjoint_intervals_QMARK_ = tick.interval.ordered_disjoint_intervals_QMARK_;
tick.alpha.api.unite = tick.interval.unite;
tick.alpha.api.normalize = tick.interval.normalize;
tick.alpha.api.union = tick.interval.union;
tick.alpha.api.conj = tick.interval.conj;
tick.alpha.api.intersection = tick.interval.intersection;
tick.alpha.api.intersects_QMARK_ = tick.interval.intersects_QMARK_;
tick.alpha.api.difference = tick.interval.difference;
tick.alpha.api.complement = tick.interval.complement;
tick.alpha.api.group_by = tick.interval.group_by;
tick.alpha.api.format = (function tick$alpha$api$format(var_args){
var G__14735 = arguments.length;
switch (G__14735) {
case 1:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return tick.format.format.call(null,o);
});

tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.format.call(null,fmt,o);
});

tick.alpha.api.format.cljs$lang$maxFixedArity = 2;

/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-date etc
 */
tick.alpha.api.formatter = (function tick$alpha$api$formatter(var_args){
var G__14738 = arguments.length;
switch (G__14738) {
case 1:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.call(null,fmt);
});

tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
return tick.format.formatter.call(null,fmt,locale);
});

tick.alpha.api.formatter.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=api.js.map
