// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.app_state');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('tick.alpha.api');
goog.require('cljs.spec.alpha');
goog.require('pr4.util');
pr4.app_state.week_days_of_training = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.api.MONDAY,tick.alpha.api.WEDNESDAY,tick.alpha.api.FRIDAY], null);
pr4.app_state.default_sessions = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(11),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(14),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(9),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(11),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null)], true);
pr4.app_state.default_microcycles = cljs.core.mapv.call(null,cljs.core.inc,cljs.core.map.call(null,cljs.core.last,cljs.core.partition_all.call(null,(4),cljs.core.range.call(null,cljs.core.count.call(null,pr4.app_state.default_sessions)))));
pr4.app_state.dates = (function pr4$app_state$dates(days_week_of_training,first_day,sessions){
var val = cljs.core.PersistentVector.EMPTY;
var current = cljs.core.first.call(null,sessions);
var sessions__$1 = cljs.core.rest.call(null,sessions);
var days_week = days_week_of_training;
var current_day = tick.alpha.api.date.call(null,first_day);
while(true){
if((current == null)){
return val;
} else {
if(cljs.core.not_EQ_.call(null,tick.alpha.api.day_of_week.call(null,current_day),cljs.core.first.call(null,days_week))){
var G__29283 = val;
var G__29284 = current;
var G__29285 = sessions__$1;
var G__29286 = days_week;
var G__29287 = tick.alpha.api._PLUS_.call(null,current_day,tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564)));
val = G__29283;
current = G__29284;
sessions__$1 = G__29285;
days_week = G__29286;
current_day = G__29287;
continue;
} else {
var G__29288 = cljs.core.conj.call(null,val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),current_day,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),cljs.core.count.call(null,val)], null));
var G__29289 = cljs.core.first.call(null,sessions__$1);
var G__29290 = cljs.core.rest.call(null,sessions__$1);
var G__29291 = cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,days_week)),cljs.core.first.call(null,days_week));
var G__29292 = tick.alpha.api._PLUS_.call(null,current_day,tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564)));
val = G__29288;
current = G__29289;
sessions__$1 = G__29290;
days_week = G__29291;
current_day = G__29292;
continue;

}
}
break;
}
});
pr4.app_state.expand_days = (function pr4$app_state$expand_days(calendar){
var val = cljs.core.PersistentVector.EMPTY;
var current = cljs.core.first.call(null,calendar);
var coll = cljs.core.rest.call(null,calendar);
var current_day = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,calendar));
while(true){
if((current == null)){
return val;
} else {
if(cljs.core._EQ_.call(null,current_day,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(current))){
var G__29293 = cljs.core.conj.call(null,val,current);
var G__29294 = cljs.core.first.call(null,coll);
var G__29295 = cljs.core.rest.call(null,coll);
var G__29296 = tick.alpha.api._PLUS_.call(null,current_day,tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564)));
val = G__29293;
current = G__29294;
coll = G__29295;
current_day = G__29296;
continue;
} else {
var G__29297 = cljs.core.conj.call(null,val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),current_day], null));
var G__29298 = current;
var G__29299 = coll;
var G__29300 = tick.alpha.api._PLUS_.call(null,current_day,tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564)));
val = G__29297;
current = G__29298;
coll = G__29299;
current_day = G__29300;
continue;

}
}
break;
}
});
pr4.app_state.bad_fn_please_refactor = (function pr4$app_state$bad_fn_please_refactor(sessions,week_days_of_training,first_day){
var old_data_structure = pr4.app_state.expand_days.call(null,pr4.app_state.dates.call(null,week_days_of_training,first_day,sessions));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),first_day,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.map.call(null,((function (old_data_structure){
return (function (p1__29301_SHARP_){
return cljs.core.dissoc.call(null,p1__29301_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
});})(old_data_structure))
,old_data_structure)], null);
});
pr4.app_state.sessions_micros_synced_QMARK_ = (function pr4$app_state$sessions_micros_synced_QMARK_(p__29302){
var map__29303 = p__29302;
var map__29303__$1 = (((((!((map__29303 == null))))?(((((map__29303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29303):map__29303);
var sessions = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"sessions","sessions",-699316392));
var microcycles = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776));
return cljs.core._EQ_.call(null,cljs.core.count.call(null,sessions),cljs.core.last.call(null,microcycles));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29305){
return cljs.core.map_QMARK_.call(null,G__29305);
}),(function (G__29305){
return cljs.core.contains_QMARK_.call(null,G__29305,new cljs.core.Keyword(null,"ui","ui",-469653645));
}),(function (G__29305){
return cljs.core.contains_QMARK_.call(null,G__29305,new cljs.core.Keyword(null,"domain","domain",1847214937));
})], null),(function (G__29305){
return ((cljs.core.map_QMARK_.call(null,G__29305)) && (cljs.core.contains_QMARK_.call(null,G__29305,new cljs.core.Keyword(null,"ui","ui",-469653645))) && (cljs.core.contains_QMARK_.call(null,G__29305,new cljs.core.Keyword(null,"domain","domain",1847214937))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ui","ui",-469653645))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"domain","domain",1847214937)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),new cljs.core.Keyword("pr4.app-state","increment-scale","pr4.app-state/increment-scale",-206336952)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),new cljs.core.Keyword("pr4.app-state","increment-scale","pr4.app-state/increment-scale",-206336952)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29306){
return cljs.core.map_QMARK_.call(null,G__29306);
}),(function (G__29306){
return cljs.core.contains_QMARK_.call(null,G__29306,new cljs.core.Keyword(null,"session-selection","session-selection",-255735966));
}),(function (G__29306){
return cljs.core.contains_QMARK_.call(null,G__29306,new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219));
})], null),(function (G__29306){
return ((cljs.core.map_QMARK_.call(null,G__29306)) && (cljs.core.contains_QMARK_.call(null,G__29306,new cljs.core.Keyword(null,"session-selection","session-selection",-255735966))) && (cljs.core.contains_QMARK_.call(null,G__29306,new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),new cljs.core.Keyword("pr4.app-state","increment-scale","pr4.app-state/increment-scale",-206336952)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-selection","session-selection",-255735966),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nat_int_QMARK_,cljs.core.nat_int_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)),new cljs.core.Symbol("pr4.app-state","sessions-micros-synced?","pr4.app-state/sessions-micros-synced?",-1351832713,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)),new cljs.core.Symbol("pr4.app-state","sessions-micros-synced?","pr4.app-state/sessions-micros-synced?",-1351832713,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29307){
return cljs.core.map_QMARK_.call(null,G__29307);
}),(function (G__29307){
return cljs.core.contains_QMARK_.call(null,G__29307,new cljs.core.Keyword(null,"sessions","sessions",-699316392));
}),(function (G__29307){
return cljs.core.contains_QMARK_.call(null,G__29307,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776));
}),(function (G__29307){
return cljs.core.contains_QMARK_.call(null,G__29307,new cljs.core.Keyword(null,"calendar","calendar",62308146));
})], null),(function (G__29307){
return ((cljs.core.map_QMARK_.call(null,G__29307)) && (cljs.core.contains_QMARK_.call(null,G__29307,new cljs.core.Keyword(null,"sessions","sessions",-699316392))) && (cljs.core.contains_QMARK_.call(null,G__29307,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776))) && (cljs.core.contains_QMARK_.call(null,G__29307,new cljs.core.Keyword(null,"calendar","calendar",62308146))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"calendar","calendar",62308146)))], null),null])),pr4.app_state.sessions_micros_synced_QMARK_], null),null));
pr4.app_state.default_first_day = (function pr4$app_state$default_first_day(first_option){
var $ = first_option;
var $__$1 = pr4.util.days_difference.call(null,tick.alpha.api.date.call(null),$);
var $__$2 = ($__$1 - (60));
var $__$3 = pr4.util.round_to_precision.call(null,$__$2,(120));
var $__$4 = tick.alpha.api.new_period.call(null,$__$3,new cljs.core.Keyword(null,"days","days",-1394072564));
var $__$5 = tick.alpha.api._PLUS_.call(null,tick.alpha.api.date.call(null,first_option),$__$4);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1($__$5);
});
pr4.app_state.default_app_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-selection","session-selection",-255735966),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219),(0),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),pr4.app_state.default_sessions,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776),pr4.app_state.default_microcycles,new cljs.core.Keyword(null,"calendar","calendar",62308146),pr4.app_state.bad_fn_please_refactor.call(null,pr4.app_state.default_sessions,pr4.app_state.week_days_of_training,pr4.app_state.default_first_day.call(null,"2019-05-20"))], null)], null);
pr4.app_state.sessions = (function pr4$app_state$sessions(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),pr4.app_state.sessions);
pr4.app_state.microcycles = (function pr4$app_state$microcycles(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),pr4.app_state.microcycles);
/**
 * Output example:
 *  {0 0, 32 11, 3 1, 6 2, 9 3, 12 4, 15 5, 18 6, 21 7, 24 8, 27 9, 30 10}
 */
pr4.app_state.idx_micros = (function pr4$app_state$idx_micros(micros){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [(0),(0)], null),cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,(i + (1))], null);
}),micros));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","idx-micros","pr4.app-state/idx-micros",-1514411070),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375)], null),pr4.app_state.idx_micros);
pr4.app_state.session_selection = (function pr4$app_state$session_selection(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),pr4.app_state.session_selection);
pr4.app_state.increment_scale = (function pr4$app_state$increment_scale(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","increment-scale","pr4.app-state/increment-scale",-206336952),pr4.app_state.increment_scale);
pr4.app_state.calendar_raw = (function pr4$app_state$calendar_raw(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","calendar-raw","pr4.app-state/calendar-raw",285611410),pr4.app_state.calendar_raw);
pr4.app_state.next_day = (function pr4$app_state$next_day(current_day){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api._PLUS_.call(null,tick.alpha.api.date.call(null,current_day),tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564))));
});
pr4.app_state.calendar = (function pr4$app_state$calendar(p__29310){
var map__29311 = p__29310;
var map__29311__$1 = (((((!((map__29311 == null))))?(((((map__29311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29311):map__29311);
var first_day = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return cljs.core.map.call(null,((function (map__29311,map__29311__$1,first_day,days){
return (function (p1__29308_SHARP_,p2__29309_SHARP_){
return cljs.core.assoc.call(null,p1__29308_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462),p2__29309_SHARP_);
});})(map__29311,map__29311__$1,first_day,days))
,days,cljs.core.iterate.call(null,pr4.app_state.next_day,first_day));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-raw","pr4.app-state/calendar-raw",285611410)], null),pr4.app_state.calendar);
pr4.app_state.absent_coll = (function pr4$app_state$absent_coll(p__29313){
var map__29314 = p__29313;
var map__29314__$1 = (((((!((map__29314 == null))))?(((((map__29314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29314):map__29314);
var days = cljs.core.get.call(null,map__29314__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return cljs.core.map.call(null,new cljs.core.Keyword(null,"absent?","absent?",1101710978),days);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","absent-coll","pr4.app-state/absent-coll",1776366743),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-raw","pr4.app-state/calendar-raw",285611410)], null),pr4.app_state.absent_coll);
pr4.app_state.calendar_selection = (function pr4$app_state$calendar_selection(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146),pr4.app_state.calendar_selection);
pr4.app_state.absent_QMARK_ = (function pr4$app_state$absent_QMARK_(p__29316){
var vec__29317 = p__29316;
var map__29320 = cljs.core.nth.call(null,vec__29317,(0),null);
var map__29320__$1 = (((((!((map__29320 == null))))?(((((map__29320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29320):map__29320);
var days = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var vec__29321 = cljs.core.nth.call(null,vec__29317,(1),null);
var sel_start = cljs.core.nth.call(null,vec__29321,(0),null);
var sel_end = cljs.core.nth.call(null,vec__29321,(1),null);
return new cljs.core.Keyword(null,"absent?","absent?",1101710978).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,days,sel_start));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","absent?","pr4.app-state/absent?",1153211167),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-raw","pr4.app-state/calendar-raw",285611410)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null),pr4.app_state.absent_QMARK_);
pr4.app_state.first_calendar_day = (function pr4$app_state$first_calendar_day(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"first-day","first-day",-1519249764)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","first-calendar-day","pr4.app-state/first-calendar-day",-862392952),pr4.app_state.first_calendar_day);
pr4.app_state.today_date = (function pr4$app_state$today_date(app_state){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api.date.call(null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","today","pr4.app-state/today",595935666),pr4.app_state.today_date);
pr4.app_state.session_state = (function pr4$app_state$session_state(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-state","session-state",1300785688)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735),pr4.app_state.session_state);
pr4.app_state.set_inten_boxes_display = (function pr4$app_state$set_inten_boxes_display(session_state){
var G__29325 = session_state;
switch (G__29325) {
case "editing-sets":
return "none";

break;
case "editing-intensity":
return "none";

break;
default:
return "flex";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","set-inten-boxes-display","pr4.app-state/set-inten-boxes-display",-2106184780),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735)], null),pr4.app_state.set_inten_boxes_display);
pr4.app_state.adjust_sets_display = (function pr4$app_state$adjust_sets_display(session_state){
var G__29327 = session_state;
switch (G__29327) {
case "editing-sets":
return "grid";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","adjust-sets-display","pr4.app-state/adjust-sets-display",-1034755893),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735)], null),pr4.app_state.adjust_sets_display);
pr4.app_state.adjust_intensity_display = (function pr4$app_state$adjust_intensity_display(session_state){
var G__29329 = session_state;
switch (G__29329) {
case "editing-intensity":
return "grid";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","adjust-intensity-display","pr4.app-state/adjust-intensity-display",638208732),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735)], null),pr4.app_state.adjust_intensity_display);
pr4.app_state.adjust_rest_time_display = (function pr4$app_state$adjust_rest_time_display(session_state){
var G__29331 = session_state;
switch (G__29331) {
case "editing-sets":
return "grid";

break;
case "editing-intensity":
return "grid";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","adjust-rest-time-display","pr4.app-state/adjust-rest-time-display",2009185317),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735)], null),pr4.app_state.adjust_rest_time_display);
pr4.app_state.adjust_buttons_display = (function pr4$app_state$adjust_buttons_display(session_state){
var G__29333 = session_state;
switch (G__29333) {
case "editing-sets":
return "flex";

break;
case "editing-intensity":
return "flex";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","adjust-buttons-display","pr4.app-state/adjust-buttons-display",-1277840286),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735)], null),pr4.app_state.adjust_buttons_display);
