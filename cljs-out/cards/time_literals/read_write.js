// Compiled by ClojureScript 1.10.520 {}
goog.provide('time_literals.read_write');
goog.require('cljs.core');
goog.require('java.time');
goog.require('cljs.reader');
time_literals.read_write.print_to_string = (function time_literals$read_write$print_to_string(t,o){
return ["#time/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),"\""].join('');
});
time_literals.read_write.print_period = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"period");
time_literals.read_write.print_date = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"date");
time_literals.read_write.print_date_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"date-time");
time_literals.read_write.print_zoned_date_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"zoned-date-time");
time_literals.read_write.print_offset_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"offset-time");
time_literals.read_write.print_instant = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"instant");
time_literals.read_write.print_offset_date_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"offset-date-time");
time_literals.read_write.print_zone = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"zone");
time_literals.read_write.print_day_of_week = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"day-of-week");
time_literals.read_write.print_time = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"time");
time_literals.read_write.print_month = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"month");
time_literals.read_write.print_duration = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"duration");
time_literals.read_write.print_year = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"year");
time_literals.read_write.print_year_month = cljs.core.partial.call(null,time_literals.read_write.print_to_string,"year-month");
time_literals.read_write.print_time_literals_cljs_BANG_ = (function time_literals$read_write$print_time_literals_cljs_BANG_(){
java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_year_month.call(null,d__$1));
});

java.time.Year.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_year.call(null,d__$1));
});

java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_zoned_date_time.call(null,d__$1));
});

java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_offset_time.call(null,d__$1));
});

java.time.Instant.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_instant.call(null,d__$1));
});

java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZoneId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_zone.call(null,d__$1));
});

java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_date.call(null,d__$1));
});

java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_time.call(null,d__$1));
});

java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_date_time.call(null,d__$1));
});

java.time.Month.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Month.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_month.call(null,d__$1));
});

java.time.Period.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_period.call(null,d__$1));
});

java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

java.time.DayOfWeek.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_day_of_week.call(null,d__$1));
});

java.time.Duration.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

return java.time.Duration.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var d__$1 = this;
return cljs.core._write.call(null,writer,time_literals.read_write.print_duration.call(null,d__$1));
});
});
time_literals.read_write.print_time_literals_clj_BANG_ = (function time_literals$read_write$print_time_literals_clj_BANG_(){
return null;
});
time_literals.read_write.tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("time","instant","time/instant",-2013236992,null),new cljs.core.Symbol("time","duration","time/duration",-1273941668,null),new cljs.core.Symbol("time","offset-date-time","time/offset-date-time",-1254592482,null),new cljs.core.Symbol("time","day-of-week","time/day-of-week",-1018890461,null),new cljs.core.Symbol("time","time","time/time",-1246984162,null),new cljs.core.Symbol("time","year-month","time/year-month",-1840595535,null),new cljs.core.Symbol("time","offset-time","time/offset-time",-1026521346,null),new cljs.core.Symbol("time","period","time/period",1291634901,null),new cljs.core.Symbol("time","zoned-date-time","time/zoned-date-time",-2125640645,null),new cljs.core.Symbol("time","month","time/month",-324062169,null),new cljs.core.Symbol("time","date","time/date",179823674,null),new cljs.core.Symbol("time","year","time/year",1979222727,null),new cljs.core.Symbol("time","date-time","time/date-time",1814680468,null),new cljs.core.Symbol("time","zone","time/zone",-580695523,null)],[(function (t){
return java.time.Instant.parse(t);
}),(function (t){
return java.time.Duration.parse(t);
}),(function (t){
return java.time.OffsetDateTime.parse(t);
}),(function (t){
return java.time.DayOfWeek.valueOf(t);
}),(function (t){
return java.time.LocalTime.parse(t);
}),(function (t){
return java.time.YearMonth.parse(t);
}),(function (t){
return java.time.OffsetTime.parse(t);
}),(function (t){
return java.time.Period.parse(t);
}),(function (t){
return java.time.ZonedDateTime.parse(t);
}),(function (t){
return java.time.Month.valueOf(t);
}),(function (t){
return java.time.LocalDate.parse(t);
}),(function (t){
return java.time.Year.parse(t);
}),(function (t){
return java.time.LocalDateTime.parse(t);
}),(function (t){
return java.time.ZoneId.of(t);
})]);
var seq__14285_14301 = cljs.core.seq.call(null,time_literals.read_write.tags);
var chunk__14286_14302 = null;
var count__14287_14303 = (0);
var i__14288_14304 = (0);
while(true){
if((i__14288_14304 < count__14287_14303)){
var vec__14295_14305 = cljs.core._nth.call(null,chunk__14286_14302,i__14288_14304);
var tag_14306 = cljs.core.nth.call(null,vec__14295_14305,(0),null);
var read_fn_14307 = cljs.core.nth.call(null,vec__14295_14305,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_14306,read_fn_14307);


var G__14308 = seq__14285_14301;
var G__14309 = chunk__14286_14302;
var G__14310 = count__14287_14303;
var G__14311 = (i__14288_14304 + (1));
seq__14285_14301 = G__14308;
chunk__14286_14302 = G__14309;
count__14287_14303 = G__14310;
i__14288_14304 = G__14311;
continue;
} else {
var temp__5735__auto___14312 = cljs.core.seq.call(null,seq__14285_14301);
if(temp__5735__auto___14312){
var seq__14285_14313__$1 = temp__5735__auto___14312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14285_14313__$1)){
var c__4550__auto___14314 = cljs.core.chunk_first.call(null,seq__14285_14313__$1);
var G__14315 = cljs.core.chunk_rest.call(null,seq__14285_14313__$1);
var G__14316 = c__4550__auto___14314;
var G__14317 = cljs.core.count.call(null,c__4550__auto___14314);
var G__14318 = (0);
seq__14285_14301 = G__14315;
chunk__14286_14302 = G__14316;
count__14287_14303 = G__14317;
i__14288_14304 = G__14318;
continue;
} else {
var vec__14298_14319 = cljs.core.first.call(null,seq__14285_14313__$1);
var tag_14320 = cljs.core.nth.call(null,vec__14298_14319,(0),null);
var read_fn_14321 = cljs.core.nth.call(null,vec__14298_14319,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_14320,read_fn_14321);


var G__14322 = cljs.core.next.call(null,seq__14285_14313__$1);
var G__14323 = null;
var G__14324 = (0);
var G__14325 = (0);
seq__14285_14301 = G__14322;
chunk__14286_14302 = G__14323;
count__14287_14303 = G__14324;
i__14288_14304 = G__14325;
continue;
}
} else {
}
}
break;
}
