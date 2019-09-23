// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.app_state');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('tick.alpha.api');
goog.require('cljs.spec.alpha');
goog.require('pr4.util');
pr4.app_state.week_days_of_training = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.api.TUESDAY,tick.alpha.api.WEDNESDAY,tick.alpha.api.FRIDAY], null);
pr4.app_state.default_sessions = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(11),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(14),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(9),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(11),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"12",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"19",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"14",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"18",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),"13",new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null)], true);
pr4.app_state.default_microcycles = cljs.core.mapv.call(null,cljs.core.inc,cljs.core.map.call(null,cljs.core.last,cljs.core.partition_all.call(null,(4),cljs.core.range.call(null,cljs.core.count.call(null,pr4.app_state.default_sessions)))));
pr4.app_state.create_calendar = (function pr4$app_state$create_calendar(sessions,week_sessions,first_day){
var week_days_of_training = cljs.core.mapv.call(null,new cljs.core.PersistentArrayMap(null, 7, ["Segunda",tick.alpha.api.MONDAY,"Ter\u00E7a",tick.alpha.api.TUESDAY,"Quarta",tick.alpha.api.WEDNESDAY,"Quinta",tick.alpha.api.THURSDAY,"Sexta",tick.alpha.api.FRIDAY,"S\u00E1bado",tick.alpha.api.SATURDAY,"Domingo",tick.alpha.api.SUNDAY], null),week_sessions);
var offset_list = ((function (week_days_of_training){
return (function (p1__25448_SHARP_,p2__25449_SHARP_){
return cljs.core.take.call(null,cljs.core.count.call(null,p1__25448_SHARP_),cljs.core.drop.call(null,p2__25449_SHARP_,cljs.core.cycle.call(null,p1__25448_SHARP_)));
});})(week_days_of_training))
;
var rearranged_week_days = (function (){var current = pr4.util.plus_days.call(null,first_day,(1));
var index = week_days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current)));
while(true){
if(cljs.core._EQ_.call(null,(-1),index)){
var G__25476 = pr4.util.plus_days.call(null,current,(1));
var G__25477 = week_days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,pr4.util.plus_days.call(null,current,(1)))));
current = G__25476;
index = G__25477;
continue;
} else {
return offset_list.call(null,week_days_of_training,index);
}
break;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),first_day,new cljs.core.Keyword(null,"days","days",-1394072564),(function (){var idx = (0);
var val = cljs.core.PersistentVector.EMPTY;
var current_day = first_day;
var G__25456 = sessions;
var vec__25458 = G__25456;
var seq__25459 = cljs.core.seq.call(null,vec__25458);
var first__25460 = cljs.core.first.call(null,seq__25459);
var seq__25459__$1 = cljs.core.next.call(null,seq__25459);
var current_session = first__25460;
var sessions__$1 = seq__25459__$1;
var G__25457 = rearranged_week_days;
var vec__25461 = G__25457;
var seq__25462 = cljs.core.seq.call(null,vec__25461);
var first__25463 = cljs.core.first.call(null,seq__25462);
var seq__25462__$1 = cljs.core.next.call(null,seq__25462);
var current_week_day = first__25463;
var week_days = seq__25462__$1;
var idx__$1 = idx;
var val__$1 = val;
var current_day__$1 = current_day;
var G__25456__$1 = G__25456;
var G__25457__$1 = G__25457;
while(true){
var idx__$2 = idx__$1;
var val__$2 = val__$1;
var current_day__$2 = current_day__$1;
var vec__25470 = G__25456__$1;
var seq__25471 = cljs.core.seq.call(null,vec__25470);
var first__25472 = cljs.core.first.call(null,seq__25471);
var seq__25471__$1 = cljs.core.next.call(null,seq__25471);
var current_session__$1 = first__25472;
var sessions__$2 = seq__25471__$1;
var vec__25473 = G__25457__$1;
var seq__25474 = cljs.core.seq.call(null,vec__25473);
var first__25475 = cljs.core.first.call(null,seq__25474);
var seq__25474__$1 = cljs.core.next.call(null,seq__25474);
var current_week_day__$1 = first__25475;
var week_days__$1 = seq__25474__$1;
if((current_session__$1 == null)){
return val__$2;
} else {
if(cljs.core.not_EQ_.call(null,current_week_day__$1,tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current_day__$2)))){
var G__25478 = idx__$2;
var G__25479 = cljs.core.conj.call(null,val__$2,cljs.core.PersistentArrayMap.EMPTY);
var G__25480 = pr4.util.plus_days.call(null,current_day__$2,(1));
var G__25481 = cljs.core.cons.call(null,current_session__$1,sessions__$2);
var G__25482 = cljs.core.cons.call(null,current_week_day__$1,week_days__$1);
idx__$1 = G__25478;
val__$1 = G__25479;
current_day__$1 = G__25480;
G__25456__$1 = G__25481;
G__25457__$1 = G__25482;
continue;
} else {
var G__25483 = (idx__$2 + (1));
var G__25484 = cljs.core.conj.call(null,val__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),idx__$2], null));
var G__25485 = pr4.util.plus_days.call(null,current_day__$2,(1));
var G__25486 = sessions__$2;
var G__25487 = cljs.core.concat.call(null,week_days__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_week_day__$1], null));
idx__$1 = G__25483;
val__$1 = G__25484;
current_day__$1 = G__25485;
G__25456__$1 = G__25486;
G__25457__$1 = G__25487;
continue;

}
}
break;
}
})()], null);
});
pr4.app_state.sessions_micros_synced_QMARK_ = (function pr4$app_state$sessions_micros_synced_QMARK_(p__25488){
var map__25489 = p__25488;
var map__25489__$1 = (((((!((map__25489 == null))))?(((((map__25489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25489):map__25489);
var sessions = cljs.core.get.call(null,map__25489__$1,new cljs.core.Keyword(null,"sessions","sessions",-699316392));
var microcycles = cljs.core.get.call(null,map__25489__$1,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776));
return cljs.core._EQ_.call(null,cljs.core.count.call(null,sessions),cljs.core.last.call(null,microcycles));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25491){
return cljs.core.map_QMARK_.call(null,G__25491);
}),(function (G__25491){
return cljs.core.contains_QMARK_.call(null,G__25491,new cljs.core.Keyword(null,"ui","ui",-469653645));
}),(function (G__25491){
return cljs.core.contains_QMARK_.call(null,G__25491,new cljs.core.Keyword(null,"domain","domain",1847214937));
})], null),(function (G__25491){
return ((cljs.core.map_QMARK_.call(null,G__25491)) && (cljs.core.contains_QMARK_.call(null,G__25491,new cljs.core.Keyword(null,"ui","ui",-469653645))) && (cljs.core.contains_QMARK_.call(null,G__25491,new cljs.core.Keyword(null,"domain","domain",1847214937))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ui","ui",-469653645))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"domain","domain",1847214937)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","ui","pr4.app-state/ui",-157732596),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),new cljs.core.Keyword("pr4.app-state","increment-scale","pr4.app-state/increment-scale",-206336952)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),new cljs.core.Keyword("pr4.app-state","increment-scale","pr4.app-state/increment-scale",-206336952)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25492){
return cljs.core.map_QMARK_.call(null,G__25492);
}),(function (G__25492){
return cljs.core.contains_QMARK_.call(null,G__25492,new cljs.core.Keyword(null,"session-selection","session-selection",-255735966));
}),(function (G__25492){
return cljs.core.contains_QMARK_.call(null,G__25492,new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219));
})], null),(function (G__25492){
return ((cljs.core.map_QMARK_.call(null,G__25492)) && (cljs.core.contains_QMARK_.call(null,G__25492,new cljs.core.Keyword(null,"session-selection","session-selection",-255735966))) && (cljs.core.contains_QMARK_.call(null,G__25492,new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),new cljs.core.Keyword("pr4.app-state","increment-scale","pr4.app-state/increment-scale",-206336952)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-selection","session-selection",-255735966),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nat_int_QMARK_,cljs.core.nat_int_QMARK_], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.app-state","domain","pr4.app-state/domain",-833688622),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)),new cljs.core.Symbol("pr4.app-state","sessions-micros-synced?","pr4.app-state/sessions-micros-synced?",-1351832713,null)),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)),new cljs.core.Symbol("pr4.app-state","sessions-micros-synced?","pr4.app-state/sessions-micros-synced?",-1351832713,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137),new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375),new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25493){
return cljs.core.map_QMARK_.call(null,G__25493);
}),(function (G__25493){
return cljs.core.contains_QMARK_.call(null,G__25493,new cljs.core.Keyword(null,"sessions","sessions",-699316392));
}),(function (G__25493){
return cljs.core.contains_QMARK_.call(null,G__25493,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776));
}),(function (G__25493){
return cljs.core.contains_QMARK_.call(null,G__25493,new cljs.core.Keyword(null,"calendar","calendar",62308146));
})], null),(function (G__25493){
return ((cljs.core.map_QMARK_.call(null,G__25493)) && (cljs.core.contains_QMARK_.call(null,G__25493,new cljs.core.Keyword(null,"sessions","sessions",-699316392))) && (cljs.core.contains_QMARK_.call(null,G__25493,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776))) && (cljs.core.contains_QMARK_.call(null,G__25493,new cljs.core.Keyword(null,"calendar","calendar",62308146))));
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
pr4.app_state.default_redefine_periodization = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"For\u00E7a",new cljs.core.Keyword(null,"level","level",1290497552),"Intermedi\u00E1rio",new cljs.core.Keyword(null,"week-sessions","week-sessions",482312455),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Segunda","Ter\u00E7a","Quinta","Sexta"], null),new cljs.core.Keyword(null,"planning-start","planning-start",782605822),pr4.app_state.default_first_day.call(null,"2019-05-19"),new cljs.core.Keyword(null,"planning-end","planning-end",33818477),pr4.util.plus_days.call(null,pr4.app_state.default_first_day.call(null,"2019-05-19"),(120)),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935),(1800)], null);
pr4.app_state.default_app_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-selection","session-selection",-255735966),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219),(0),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sessions","sessions",-699316392),pr4.app_state.default_sessions,new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776),pr4.app_state.default_microcycles,new cljs.core.Keyword(null,"calendar","calendar",62308146),pr4.app_state.create_calendar.call(null,pr4.app_state.default_sessions,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Segunda","Ter\u00E7a","Quinta","Sexta"], null),pr4.app_state.default_first_day.call(null,"2019-05-19")),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),pr4.app_state.default_redefine_periodization], null)], null);
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
pr4.app_state.calendar = (function pr4$app_state$calendar(p__25496){
var map__25497 = p__25496;
var map__25497__$1 = (((((!((map__25497 == null))))?(((((map__25497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25497):map__25497);
var first_day = cljs.core.get.call(null,map__25497__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__25497__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return cljs.core.map.call(null,((function (map__25497,map__25497__$1,first_day,days){
return (function (p1__25494_SHARP_,p2__25495_SHARP_){
return cljs.core.assoc.call(null,p1__25494_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462),p2__25495_SHARP_);
});})(map__25497,map__25497__$1,first_day,days))
,days,cljs.core.iterate.call(null,pr4.app_state.next_day,first_day));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-raw","pr4.app-state/calendar-raw",285611410)], null),pr4.app_state.calendar);
pr4.app_state.absent_coll = (function pr4$app_state$absent_coll(p__25499){
var map__25500 = p__25499;
var map__25500__$1 = (((((!((map__25500 == null))))?(((((map__25500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25500):map__25500);
var days = cljs.core.get.call(null,map__25500__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
return cljs.core.map.call(null,new cljs.core.Keyword(null,"absent?","absent?",1101710978),days);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","absent-coll","pr4.app-state/absent-coll",1776366743),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-raw","pr4.app-state/calendar-raw",285611410)], null),pr4.app_state.absent_coll);
pr4.app_state.calendar_selection = (function pr4$app_state$calendar_selection(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146),pr4.app_state.calendar_selection);
pr4.app_state.absent_QMARK_ = (function pr4$app_state$absent_QMARK_(p__25502){
var vec__25503 = p__25502;
var map__25506 = cljs.core.nth.call(null,vec__25503,(0),null);
var map__25506__$1 = (((((!((map__25506 == null))))?(((((map__25506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25506):map__25506);
var days = cljs.core.get.call(null,map__25506__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var vec__25507 = cljs.core.nth.call(null,vec__25503,(1),null);
var sel_start = cljs.core.nth.call(null,vec__25507,(0),null);
var sel_end = cljs.core.nth.call(null,vec__25507,(1),null);
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
var G__25511 = session_state;
switch (G__25511) {
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
var G__25513 = session_state;
switch (G__25513) {
case "editing-sets":
return "grid";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","adjust-sets-display","pr4.app-state/adjust-sets-display",-1034755893),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735)], null),pr4.app_state.adjust_sets_display);
pr4.app_state.adjust_intensity_display = (function pr4$app_state$adjust_intensity_display(session_state){
var G__25515 = session_state;
switch (G__25515) {
case "editing-intensity":
return "grid";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","adjust-intensity-display","pr4.app-state/adjust-intensity-display",638208732),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-state","pr4.app-state/session-state",1081402735)], null),pr4.app_state.adjust_intensity_display);
pr4.app_state.adjust_rest_time_display = (function pr4$app_state$adjust_rest_time_display(session_state){
var G__25517 = session_state;
switch (G__25517) {
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
var G__25519 = session_state;
switch (G__25519) {
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
pr4.app_state.macrocycle_timeline = (function pr4$app_state$macrocycle_timeline(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.app-state","macrocycle-timeline","pr4.app-state/macrocycle-timeline",-2103232921),pr4.app_state.macrocycle_timeline);

//# sourceMappingURL=app_state.js.map
