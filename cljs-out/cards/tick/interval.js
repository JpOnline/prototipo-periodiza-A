// Compiled by ClojureScript 1.10.520 {}
goog.provide('tick.interval');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('tick.core');
goog.require('cljc.java_time.duration');
goog.require('java.time');
goog.require('java.time.temporal');
goog.require('cljs.java_time.extend_eq_and_compare');
tick.interval.make_interval = (function tick$interval$make_interval(beginning,end){
if(cljs.core.truth_(tick.core._LT_.call(null,beginning,end))){
} else {
throw (new Error("Assert failed: (t/< beginning end)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning,new cljs.core.Keyword("tick","end","tick/end",-269896517),end], null);
});
tick.interval.temporal_QMARK_ = (function tick$interval$temporal_QMARK_(o){
return java.time.temporal.Temporal.isPrototypeOf(cljs.core.type.call(null,o));
});
tick.interval.temporal_amount_QMARK_ = (function tick$interval$temporal_amount_QMARK_(o){
return java.time.temporal.TemporalAmount.isPrototypeOf(cljs.core.type.call(null,o));
});

/**
 * @interface
 */
tick.interval.ITimeSpanable = function(){};

/**
 * Return a value of a type that satisfies t/ITimeSpan
 */
tick.interval.temporal_value = (function tick$interval$temporal_value(_){
if((((!((_ == null)))) && ((!((_.tick$interval$ITimeSpanable$temporal_value$arity$1 == null)))))){
return _.tick$interval$ITimeSpanable$temporal_value$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (tick.interval.temporal_value[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (tick.interval.temporal_value["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeSpanable.temporal-value",_);
}
}
}
});

java.time.YearMonth.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
});

java.time.Year.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
});

java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
});

java.time.Instant.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Instant.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
});

Date.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return tick.core.instant.call(null,d__$1);
});

java.time.LocalDate.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
});

goog.object.set(tick.interval.ITimeSpanable,"string",true);

goog.object.set(tick.interval.temporal_value,"string",(function (s){
return tick.interval.temporal_value.call(null,tick.core.parse.call(null,s));
}));

goog.object.set(tick.interval.ITimeSpanable,"function",true);

goog.object.set(tick.interval.temporal_value,"function",(function (f){
return tick.interval.temporal_value.call(null,f.call(null));
}));

java.time.LocalTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
});

java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
});

java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
});
tick.interval.new_interval = (function tick$interval$new_interval(v1,v2){
var t1 = tick.core.beginning.call(null,tick.interval.temporal_value.call(null,v1));
var t2 = tick.core.end.call(null,tick.interval.temporal_value.call(null,v2));
if(cljs.core.truth_(tick.core._LT_.call(null,t1,t2))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),t1,new cljs.core.Keyword("tick","end","tick/end",-269896517),t2], null);
} else {
throw cljs.core.ex_info.call(null,"Interval must span between two times, the first must be before the second",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),v1,new cljs.core.Keyword("tick","end","tick/end",-269896517),v2], null));
}
});
tick.interval.extend = (function tick$interval$extend(ival,dur){
return tick.interval.make_interval.call(null,tick.core.beginning.call(null,ival),tick.core.forward_duration.call(null,tick.core.end.call(null,ival),dur));
});
tick.interval.scale = (function tick$interval$scale(ival,factor){
return tick.interval.make_interval.call(null,tick.core.beginning.call(null,ival),tick.core.forward_duration.call(null,tick.core.beginning.call(null,ival),cljc.java_time.duration.multiplied_by.call(null,tick.core.duration.call(null,ival),factor)));
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$forward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.call(null,cljs.core.update.call(null,ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),((function (ival__$1){
return (function (p1__14724_SHARP_){
return tick.core.forward_duration.call(null,p1__14724_SHARP_,d);
});})(ival__$1))
),new cljs.core.Keyword("tick","end","tick/end",-269896517),((function (ival__$1){
return (function (p1__14725_SHARP_){
return tick.core.forward_duration.call(null,p1__14725_SHARP_,d);
});})(ival__$1))
);
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeShift$backward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.call(null,cljs.core.update.call(null,ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),((function (ival__$1){
return (function (p1__14726_SHARP_){
return tick.core.backward_duration.call(null,p1__14726_SHARP_,d);
});})(ival__$1))
),new cljs.core.Keyword("tick","end","tick/end",-269896517),((function (ival__$1){
return (function (p1__14727_SHARP_){
return tick.core.backward_duration.call(null,p1__14727_SHARP_,d);
});})(ival__$1))
);
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$on$arity$2 = (function (i,date){
var i__$1 = this;
return tick.interval.new_interval.call(null,tick.core.on.call(null,tick.core.beginning.call(null,i__$1),date),tick.core.on.call(null,tick.core.end.call(null,i__$1),date));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeReify$in$arity$2 = (function (i,zone){
var i__$1 = this;
return tick.interval.new_interval.call(null,tick.core.in$.call(null,tick.core.beginning.call(null,i__$1),zone),tick.core.in$.call(null,tick.core.end.call(null,i__$1),zone));
});
tick.interval.bounds = (function tick$interval$bounds(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14729 = arguments.length;
var i__4731__auto___14730 = (0);
while(true){
if((i__4731__auto___14730 < len__4730__auto___14729)){
args__4736__auto__.push((arguments[i__4731__auto___14730]));

var G__14731 = (i__4731__auto___14730 + (1));
i__4731__auto___14730 = G__14731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return tick.interval.make_interval.call(null,cljs.core.apply.call(null,tick.core.min,cljs.core.map.call(null,tick.core.beginning,args)),cljs.core.apply.call(null,tick.core.max,cljs.core.map.call(null,tick.core.end,args)));
});

tick.interval.bounds.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.bounds.cljs$lang$applyTo = (function (seq14728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14728));
});

tick.interval.am = (function tick$interval$am(date){
return tick.interval.new_interval.call(null,tick.core.beginning.call(null,date),tick.core.noon.call(null,date));
});
tick.interval.pm = (function tick$interval$pm(date){
return tick.interval.new_interval.call(null,tick.core.noon.call(null,date),tick.core.end.call(null,date));
});
tick.interval.precedes_QMARK_ = (function tick$interval$precedes_QMARK_(x,y){
return tick.core._LT_.call(null,tick.core.end.call(null,x),tick.core.beginning.call(null,y));
});
tick.interval.equals_QMARK_ = (function tick$interval$equals_QMARK_(x,y){
return ((cljs.core._EQ_.call(null,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y))) && (cljs.core._EQ_.call(null,tick.core.end.call(null,x),tick.core.end.call(null,y))));
});
tick.interval.meets_QMARK_ = (function tick$interval$meets_QMARK_(x,y){
return cljs.core._EQ_.call(null,tick.core.end.call(null,x),tick.core.beginning.call(null,y));
});
tick.interval.overlaps_QMARK_ = (function tick$interval$overlaps_QMARK_(x,y){
var and__4120__auto__ = tick.core._LT_.call(null,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y));
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tick.core._GT_.call(null,tick.core.end.call(null,x),tick.core.beginning.call(null,y));
if(cljs.core.truth_(and__4120__auto____$1)){
return tick.core._LT_.call(null,tick.core.end.call(null,x),tick.core.end.call(null,y));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
tick.interval.during_QMARK_ = (function tick$interval$during_QMARK_(x,y){
var and__4120__auto__ = tick.core._GT_.call(null,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y));
if(cljs.core.truth_(and__4120__auto__)){
return tick.core._LT_.call(null,tick.core.end.call(null,x),tick.core.end.call(null,y));
} else {
return and__4120__auto__;
}
});
tick.interval.starts_QMARK_ = (function tick$interval$starts_QMARK_(x,y){
var and__4120__auto__ = cljs.core._EQ_.call(null,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y));
if(and__4120__auto__){
return tick.core._LT_.call(null,tick.core.end.call(null,x),tick.core.end.call(null,y));
} else {
return and__4120__auto__;
}
});
tick.interval.finishes_QMARK_ = (function tick$interval$finishes_QMARK_(x,y){
var and__4120__auto__ = tick.core._GT_.call(null,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,tick.core.end.call(null,x),tick.core.end.call(null,y));
} else {
return and__4120__auto__;
}
});
/**
 * The converse of a basic relation.
 */
tick.interval.conv = (function tick$interval$conv(f){
return (function (x,y){
return f.call(null,y,x);
});
});
tick.interval.preceded_by_QMARK_ = (function tick$interval$preceded_by_QMARK_(x,y){
return tick.interval.conv.call(null,tick.interval.precedes_QMARK_).call(null,x,y);
});
tick.interval.met_by_QMARK_ = (function tick$interval$met_by_QMARK_(x,y){
return tick.interval.conv.call(null,tick.interval.meets_QMARK_).call(null,x,y);
});
tick.interval.overlapped_by_QMARK_ = (function tick$interval$overlapped_by_QMARK_(x,y){
return tick.interval.conv.call(null,tick.interval.overlaps_QMARK_).call(null,x,y);
});
tick.interval.finished_by_QMARK_ = (function tick$interval$finished_by_QMARK_(x,y){
return tick.interval.conv.call(null,tick.interval.finishes_QMARK_).call(null,x,y);
});
tick.interval.contains_QMARK_ = (function tick$interval$contains_QMARK_(x,y){
return tick.interval.conv.call(null,tick.interval.during_QMARK_).call(null,x,y);
});
tick.interval.started_by_QMARK_ = (function tick$interval$started_by_QMARK_(x,y){
return tick.interval.conv.call(null,tick.interval.starts_QMARK_).call(null,x,y);
});
tick.interval.relation__GT_kw = cljs.core.PersistentHashMap.fromArrays([tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.started_by_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.precedes_QMARK_,tick.interval.during_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_],[new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.Keyword(null,"started-by","started-by",1211835163),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"meets","meets",-1936224493),new cljs.core.Keyword(null,"met-by","met-by",-2020460159),new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),new cljs.core.Keyword(null,"preceded-by","preceded-by",1381560976),new cljs.core.Keyword(null,"precedes","precedes",-1540274203),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.Keyword(null,"overlapped-by","overlapped-by",1890442040),new cljs.core.Keyword(null,"finishes","finishes",-431359586)]);
tick.interval.basic_relations = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.equals_QMARK_,tick.interval.started_by_QMARK_,tick.interval.during_QMARK_,tick.interval.finishes_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.interval.GeneralRelation = (function (relations,__meta,__extmap,__hash){
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k14733,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__14738 = k14733;
var G__14738__$1 = (((G__14738 instanceof cljs.core.Keyword))?G__14738.fqn:null);
switch (G__14738__$1) {
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14733,else__4388__auto__);

}
});

tick.interval.GeneralRelation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__14739){
var vec__14740 = p__14739;
var k__4408__auto__ = cljs.core.nth.call(null,vec__14740,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__14740,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

tick.interval.GeneralRelation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#tick.interval.GeneralRelation{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
});

tick.interval.GeneralRelation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14732){
var self__ = this;
var G__14732__$1 = this;
return (new cljs.core.RecordIter((0),G__14732__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

tick.interval.GeneralRelation.prototype.call = (function (self__,x,y){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.some.call(null,((function (_,self____$1){
return (function (f){
if(cljs.core.truth_(f.call(null,x,y))){
return f;
} else {
return null;
}
});})(_,self____$1))
,self__.relations);
});

tick.interval.GeneralRelation.prototype.apply = (function (self__,args14737){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14737)));
});

tick.interval.GeneralRelation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var _ = this;
return cljs.core.some.call(null,((function (_){
return (function (f){
if(cljs.core.truth_(f.call(null,x,y))){
return f;
} else {
return null;
}
});})(_))
,self__.relations);
});

tick.interval.GeneralRelation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

tick.interval.GeneralRelation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,self__.__extmap,self__.__hash));
});

tick.interval.GeneralRelation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

tick.interval.GeneralRelation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-248703908 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

tick.interval.GeneralRelation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14734,other14735){
var self__ = this;
var this14734__$1 = this;
return (((!((other14735 == null)))) && ((this14734__$1.constructor === other14735.constructor)) && (cljs.core._EQ_.call(null,this14734__$1.relations,other14735.relations)) && (cljs.core._EQ_.call(null,this14734__$1.__extmap,other14735.__extmap)));
});

tick.interval.GeneralRelation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relations","relations",-427124442),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

tick.interval.GeneralRelation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__14732){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__14743 = cljs.core.keyword_identical_QMARK_;
var expr__14744 = k__4393__auto__;
if(cljs.core.truth_(pred__14743.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442),expr__14744))){
return (new tick.interval.GeneralRelation(G__14732,self__.__meta,self__.__extmap,null));
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__14732),null));
}
});

tick.interval.GeneralRelation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations,null))], null),self__.__extmap));
});

tick.interval.GeneralRelation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__14732){
var self__ = this;
var this__4384__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,G__14732,self__.__extmap,self__.__hash));
});

tick.interval.GeneralRelation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

tick.interval.GeneralRelation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
});

tick.interval.GeneralRelation.cljs$lang$type = true;

tick.interval.GeneralRelation.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"tick.interval/GeneralRelation",null,(1),null));
});

tick.interval.GeneralRelation.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"tick.interval/GeneralRelation");
});

/**
 * Positional factory function for tick.interval/GeneralRelation.
 */
tick.interval.__GT_GeneralRelation = (function tick$interval$__GT_GeneralRelation(relations){
return (new tick.interval.GeneralRelation(relations,null,null,null));
});

/**
 * Factory function for tick.interval/GeneralRelation, taking a map of keywords to field values.
 */
tick.interval.map__GT_GeneralRelation = (function tick$interval$map__GT_GeneralRelation(G__14736){
var extmap__4424__auto__ = (function (){var G__14746 = cljs.core.dissoc.call(null,G__14736,new cljs.core.Keyword(null,"relations","relations",-427124442));
if(cljs.core.record_QMARK_.call(null,G__14736)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14746);
} else {
return G__14746;
}
})();
return (new tick.interval.GeneralRelation(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__14736),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

tick.interval.new_relation = (function tick$interval$new_relation(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14749 = arguments.length;
var i__4731__auto___14750 = (0);
while(true){
if((i__4731__auto___14750 < len__4730__auto___14749)){
args__4736__auto__.push((arguments[i__4731__auto___14750]));

var G__14751 = (i__4731__auto___14750 + (1));
i__4731__auto___14750 = G__14751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic = (function (basic_relations){
return tick.interval.__GT_GeneralRelation.call(null,basic_relations);
});

tick.interval.new_relation.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.new_relation.cljs$lang$applyTo = (function (seq14748){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14748));
});

/**
 * A function to determine the (basic) relation between two intervals.
 */
tick.interval.basic_relation = cljs.core.apply.call(null,tick.interval.new_relation,tick.interval.basic_relations);
tick.interval.relation = (function tick$interval$relation(x,y){
return tick.interval.relation__GT_kw.call(null,tick.interval.basic_relation.call(null,x,y));
});
/**
 * Return the complement of the general relation. The complement ~r of
 *   a relation r is the relation consisting of all basic relations not
 *   in r.
 */
tick.interval.complement_r = (function tick$interval$complement_r(r){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.remove.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)),tick.interval.basic_relations));
});
tick.interval.not_yet_implemented = (function tick$interval$not_yet_implemented(){
return (new Error("Not yet implemented"));
});
/**
 * Return the composition of r and s
 */
tick.interval.compose_r = (function tick$interval$compose_r(r,s){
throw tick.interval.not_yet_implemented.call(null);
});
/**
 * Return the converse of the given general relation. The converse !r
 *   of a relation r is the relation consisting of the converses of all
 *   basic relations in r.
 */
tick.interval.converse_r = (function tick$interval$converse_r(r){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.map.call(null,tick.interval.conv,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)));
});
/**
 * Return the intersection of the r with s
 */
tick.interval.intersection_r = (function tick$interval$intersection_r(r,s){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"target/public/cljs-out/cards/cljs/spec/alpha.cljs",20,1,true,1477,1479,cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_.call(null,r,(function (p1__14752_SHARP_){
return (p1__14752_SHARP_ instanceof tick.interval.GeneralRelation);
}));
} else {
}
} else {
}

tick.interval.__GT_GeneralRelation.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r))));

throw tick.interval.not_yet_implemented.call(null);
});
tick.interval.disjoint_QMARK_ = tick.interval.new_relation.call(null,tick.interval.precedes_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_);
tick.interval.concur_QMARK_ = tick.interval.complement_r.call(null,tick.interval.disjoint_QMARK_);
tick.interval.precedes_or_meets_QMARK_ = tick.interval.new_relation.call(null,tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_);

/**
 * @interface
 */
tick.interval.IIntervalOps = function(){};

/**
 * Fit the interval between beginning and end, slicing off one or both ends as necessary
 */
tick.interval.slice = (function tick$interval$slice(this$,beginning,end){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$slice$arity$3 == null)))))){
return this$.tick$interval$IIntervalOps$slice$arity$3(this$,beginning,end);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (tick.interval.slice[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,beginning,end);
} else {
var m__4431__auto__ = (tick.interval.slice["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,beginning,end);
} else {
throw cljs.core.missing_protocol.call(null,"IIntervalOps.slice",this$);
}
}
}
});

/**
 * Splice another interval on to this one
 */
tick.interval.splice = (function tick$interval$splice(this$,ival){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$splice$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$splice$arity$2(this$,ival);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (tick.interval.splice[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,ival);
} else {
var m__4431__auto__ = (tick.interval.splice["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,ival);
} else {
throw cljs.core.missing_protocol.call(null,"IIntervalOps.splice",this$);
}
}
}
});

/**
 * Split ival into 2 intervals at t, returned as a 2-element vector
 */
tick.interval.split = (function tick$interval$split(this$,t){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$split$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$split$arity$2(this$,t);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (tick.interval.split[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,t);
} else {
var m__4431__auto__ = (tick.interval.split["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,t);
} else {
throw cljs.core.missing_protocol.call(null,"IIntervalOps.split",this$);
}
}
}
});

tick.interval.split_with_assert = (function tick$interval$split_with_assert(ival,t){
if(cljs.core.truth_((function (){var and__4120__auto__ = tick.core._LT_.call(null,tick.core.beginning.call(null,ival),t);
if(cljs.core.truth_(and__4120__auto__)){
return tick.core._LT_.call(null,t,tick.core.end.call(null,ival));
} else {
return and__4120__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (t/< (t/beginning ival) t) (t/< t (t/end ival)))"));
}

return tick.interval.split.call(null,ival,t);
});
tick.interval.slice_interval = (function tick$interval$slice_interval(ival,beginning,end){
var beginning__$1 = tick.core.max.call(null,tick.core.beginning.call(null,ival),beginning);
var end__$1 = tick.core.min.call(null,tick.core.end.call(null,ival),end);
if(cljs.core.truth_(tick.core._LT_.call(null,beginning__$1,end__$1))){
if(cljs.core.associative_QMARK_.call(null,ival)){
return cljs.core.assoc.call(null,ival,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning__$1,new cljs.core.Keyword("tick","end","tick/end",-269896517),end__$1);
} else {
return tick.interval.make_interval.call(null,beginning__$1,end__$1);
}
} else {
return null;
}
});
tick.interval.split_interval = (function tick$interval$split_interval(ival,t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice_interval.call(null,ival,tick.core.beginning.call(null,ival),t),tick.interval.slice_interval.call(null,ival,t,tick.core.end.call(null,ival))], null);
});
tick.interval.flatten = (function tick$interval$flatten(s){
return cljs.core.mapcat.call(null,(function (x){
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var ivals = temp__5733__auto__;
return ivals;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),s);
});
cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec.call(null,cljs.core.keep.call(null,((function (intervals,temp__5733__auto__,this$__$1){
return (function (p1__14753_SHARP_){
return tick.interval.slice.call(null,p1__14753_SHARP_,beginning,end);
});})(intervals,temp__5733__auto__,this$__$1))
,intervals)));
} else {
return tick.interval.slice_interval.call(null,this$__$1,beginning,end);
}
});

cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,other){
var this$__$1 = this;
var this_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
var other_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(other);
if(cljs.core.truth_((function (){var and__4120__auto__ = this_intervals;
if(cljs.core.truth_(and__4120__auto__)){
return other_intervals;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.update.call(null,this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.concat,other_intervals);
} else {
if(cljs.core.truth_(this_intervals)){
return cljs.core.update.call(null,this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,other);
} else {
if(cljs.core.truth_(other_intervals)){
return cljs.core.update.call(null,other,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,this$__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,other], null)], null);

}
}
}
});

cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec.call(null,cljs.core.keep.call(null,((function (intervals,temp__5733__auto__,this$__$1){
return (function (p1__14754_SHARP_){
return tick.interval.slice.call(null,p1__14754_SHARP_,tick.core.beginning.call(null,this$__$1),t);
});})(intervals,temp__5733__auto__,this$__$1))
,intervals))),cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec.call(null,cljs.core.keep.call(null,((function (intervals,temp__5733__auto__,this$__$1){
return (function (p1__14755_SHARP_){
return tick.interval.slice.call(null,p1__14755_SHARP_,t,tick.core.end.call(null,this$__$1));
});})(intervals,temp__5733__auto__,this$__$1))
,intervals)))], null);
} else {
return tick.interval.split_interval.call(null,this$__$1,t);
}
});

java.time.LocalDate.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval.call(null,this$__$1,beginning,end);
});

java.time.LocalDate.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.call(null,"splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
});

java.time.LocalDate.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval.call(null,this$__$1,t);
});

java.time.YearMonth.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval.call(null,this$__$1,beginning,end);
});

java.time.YearMonth.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.call(null,"splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
});

java.time.YearMonth.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval.call(null,this$__$1,t);
});

java.time.Year.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval.call(null,this$__$1,beginning,end);
});

java.time.Year.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.call(null,"splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
});

java.time.Year.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval.call(null,this$__$1,t);
});
/**
 * Return the interval representing the interval, if there is one,
 *   representing the interval of time the given intervals are
 *   concurrent.
 */
tick.interval.concur = (function tick$interval$concur(x,y){
var G__14756 = tick.interval.relation.call(null,x,y);
var G__14756__$1 = (((G__14756 instanceof cljs.core.Keyword))?G__14756.fqn:null);
switch (G__14756__$1) {
case "overlaps":
return tick.interval.slice.call(null,x,tick.core.beginning.call(null,y),tick.core.end.call(null,x));

break;
case "overlapped-by":
return tick.interval.slice.call(null,x,tick.core.beginning.call(null,x),tick.core.end.call(null,y));

break;
case "starts":
case "finishes":
case "during":
case "equals":
return x;

break;
case "started-by":
case "finished-by":
case "contains":
return tick.interval.slice.call(null,x,tick.core.beginning.call(null,y),tick.core.end.call(null,y));

break;
default:
return null;

}
});
/**
 * Return a sequence of occurances where intervals coincide (having
 *   non-nil concur intervals).
 */
tick.interval.concurrencies = (function tick$interval$concurrencies(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14765 = arguments.length;
var i__4731__auto___14766 = (0);
while(true){
if((i__4731__auto___14766 < len__4730__auto___14765)){
args__4736__auto__.push((arguments[i__4731__auto___14766]));

var G__14767 = (i__4731__auto___14766 + (1));
i__4731__auto___14766 = G__14767;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
var intervals__$1 = cljs.core.vec.call(null,intervals);
var iter__4523__auto__ = ((function (intervals__$1){
return (function tick$interval$iter__14759(s__14760){
return (new cljs.core.LazySeq(null,((function (intervals__$1){
return (function (){
var s__14760__$1 = s__14760;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14760__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var xi = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__14760__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function tick$interval$iter__14759_$_iter__14761(s__14762){
return (new cljs.core.LazySeq(null,((function (s__14760__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function (){
var s__14762__$1 = s__14762;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__14762__$1);
if(temp__5735__auto____$1){
var s__14762__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14762__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14762__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14764 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14763 = (0);
while(true){
if((i__14763 < size__4522__auto__)){
var yi = cljs.core._nth.call(null,c__4521__auto__,i__14763);
if((xi < yi)){
var x = cljs.core.get.call(null,intervals__$1,xi);
var y = cljs.core.get.call(null,intervals__$1,yi);
var conc = tick.interval.concur.call(null,x,y);
if(cljs.core.truth_(conc)){
cljs.core.chunk_append.call(null,b__14764,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation.call(null,x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null));

var G__14768 = (i__14763 + (1));
i__14763 = G__14768;
continue;
} else {
var G__14769 = (i__14763 + (1));
i__14763 = G__14769;
continue;
}
} else {
var G__14770 = (i__14763 + (1));
i__14763 = G__14770;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14764),tick$interval$iter__14759_$_iter__14761.call(null,cljs.core.chunk_rest.call(null,s__14762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14764),null);
}
} else {
var yi = cljs.core.first.call(null,s__14762__$2);
if((xi < yi)){
var x = cljs.core.get.call(null,intervals__$1,xi);
var y = cljs.core.get.call(null,intervals__$1,yi);
var conc = tick.interval.concur.call(null,x,y);
if(cljs.core.truth_(conc)){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation.call(null,x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null),tick$interval$iter__14759_$_iter__14761.call(null,cljs.core.rest.call(null,s__14762__$2)));
} else {
var G__14771 = cljs.core.rest.call(null,s__14762__$2);
s__14762__$1 = G__14771;
continue;
}
} else {
var G__14772 = cljs.core.rest.call(null,s__14762__$2);
s__14762__$1 = G__14772;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__14760__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
,null,null));
});})(s__14760__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,intervals__$1))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,tick$interval$iter__14759.call(null,cljs.core.rest.call(null,s__14760__$1)));
} else {
var G__14773 = cljs.core.rest.call(null,s__14760__$1);
s__14760__$1 = G__14773;
continue;
}
} else {
return null;
}
break;
}
});})(intervals__$1))
,null,null));
});})(intervals__$1))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,intervals__$1)));
});

tick.interval.concurrencies.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.concurrencies.cljs$lang$applyTo = (function (seq14758){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14758));
});

tick.interval.interval = (function tick$interval$interval(t){
return tick.interval.new_interval.call(null,tick.core.beginning.call(null,t),tick.core.end.call(null,t));
});
cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.meets_QMARK_,tick.interval.precedes_QMARK_]).call(null,tick.interval.basic_relation.call(null,x__$1,y));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.starts_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.precedes_QMARK_]).call(null,tick.interval.basic_relation.call(null,x__$1,y));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_]).call(null,tick.interval.basic_relation.call(null,x__$1,y));
});

cljs.core.PersistentArrayMap.prototype.tick$core$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.started_by_QMARK_,tick.interval.equals_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_]).call(null,tick.interval.basic_relation.call(null,x__$1,y));
});
/**
 * Are all the intervals in the given set time-ordered and
 *   disjoint? This is a useful property of a collection of
 *   intervals. The given collection must contain proper intervals (that
 *   is, intervals that have finite greater-than-zero durations).
 */
tick.interval.ordered_disjoint_intervals_QMARK_ = (function tick$interval$ordered_disjoint_intervals_QMARK_(s){
var rel = tick.interval.new_relation.call(null,tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_);
return (!(((function (){var G__14777 = s;
var vec__14778 = G__14777;
var seq__14779 = cljs.core.seq.call(null,vec__14778);
var first__14780 = cljs.core.first.call(null,seq__14779);
var seq__14779__$1 = cljs.core.next.call(null,seq__14779);
var x = first__14780;
var xs = seq__14779__$1;
var G__14777__$1 = G__14777;
while(true){
var vec__14781 = G__14777__$1;
var seq__14782 = cljs.core.seq.call(null,vec__14781);
var first__14783 = cljs.core.first.call(null,seq__14782);
var seq__14782__$1 = cljs.core.next.call(null,seq__14782);
var x__$1 = first__14783;
var xs__$1 = seq__14782__$1;
if((((x__$1 == null)) || ((cljs.core.first.call(null,xs__$1) == null)))){
return true;
} else {
if(cljs.core.truth_(rel.call(null,x__$1,cljs.core.first.call(null,xs__$1)))){
var G__14784 = xs__$1;
G__14777__$1 = G__14784;
continue;
} else {
return null;
}
}
break;
}
})() == null)));
});
/**
 * Is the first interval in a sequence time-ordered and disjoint with
 *   respect to the second? Note, only compares first two in a
 *   sequence. Used by functions to ensure the head of the (possibly
 *   lazy) sequence satisfies this invariant.
 */
tick.interval.assert_proper_head = (function tick$interval$assert_proper_head(s){
var vec__14785 = s;
var initial = cljs.core.nth.call(null,vec__14785,(0),null);
var subsequent = cljs.core.nth.call(null,vec__14785,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = (initial == null);
if(and__4120__auto__){
return subsequent;
} else {
return and__4120__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Unexpected nil in sequence",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nil-before","nil-before",1412757500),subsequent], null));
} else {
}

if(cljs.core.truth_(subsequent)){
if(cljs.core.truth_(tick.interval.precedes_or_meets_QMARK_.call(null,initial,subsequent))){
} else {
throw cljs.core.ex_info.call(null,"Intervals in sequence violate requirement that intervals are time-ordered and disjoint",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),initial,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),subsequent], null));
}
} else {
}

return s;
});
/**
 * Unite concurrent intervals. Intervals must be ordered by beginning
 *   but not necessarily disjoint (the purpose of this function is to
 *   splice together intervals that are concurrent resulting in a
 *   time-ordered sequence of disjoint intervals that is returned.
 */
tick.interval.unite = (function tick$interval$unite(intervals){
var unite = (function tick$interval$unite_$_unite(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__14792 = intervals__$1;
var seq__14793 = cljs.core.seq.call(null,vec__14792);
var first__14794 = cljs.core.first.call(null,seq__14793);
var seq__14793__$1 = cljs.core.next.call(null,seq__14793);
var ival1 = first__14794;
var first__14794__$1 = cljs.core.first.call(null,seq__14793__$1);
var seq__14793__$2 = cljs.core.next.call(null,seq__14793__$1);
var ival2 = first__14794__$1;
var r = seq__14793__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,ival1,null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__14795 = tick.interval.relation.call(null,ival1,ival2);
var G__14795__$1 = (((G__14795 instanceof cljs.core.Keyword))?G__14795.fqn:null);
switch (G__14795__$1) {
case "precedes":
case "meets":
return cljs.core.cons.call(null,ival1,tick$interval$unite_$_unite.call(null,cljs.core.rest.call(null,intervals__$1)));

break;
case "overlaps":
case "contains":
case "starts":
case "started-by":
case "finished-by":
return tick$interval$unite_$_unite.call(null,cljs.core.cons.call(null,tick.interval.splice.call(null,ival1,ival2),r));

break;
default:
throw cljs.core.ex_info.call(null,"Intervals in sequence violate requirement that intervals are time-ordered",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),ival1,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),ival2,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation.call(null,ival1,ival2)], null));

}

}
}),null,null));
});
return unite.call(null,intervals);
});
/**
 * Return an interval group. Interval groups are maps with
 *   a :tick/intervals entry that contain a time-ordered sequence of
 *   disjoint intervals.
 */
tick.interval.new_interval_group = (function tick$interval$new_interval_group(x){
if(cljs.core.truth_(new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null);
}
});
/**
 * Within a time-ordered sequence of disjoint intervals, return a
 *   sequence of interval groups, splicing together meeting intervals.
 */
tick.interval.normalize = (function tick$interval$normalize(intervals){
var normalize = (function tick$interval$normalize_$_normalize(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__14801 = intervals__$1;
var seq__14802 = cljs.core.seq.call(null,vec__14801);
var first__14803 = cljs.core.first.call(null,seq__14802);
var seq__14802__$1 = cljs.core.next.call(null,seq__14802);
var ival1 = first__14803;
var first__14803__$1 = cljs.core.first.call(null,seq__14802__$1);
var seq__14802__$2 = cljs.core.next.call(null,seq__14802__$1);
var ival2 = first__14803__$1;
var r = seq__14802__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,tick.interval.new_interval_group.call(null,ival1),null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__14804 = tick.interval.relation.call(null,ival1,ival2);
var G__14804__$1 = (((G__14804 instanceof cljs.core.Keyword))?G__14804.fqn:null);
switch (G__14804__$1) {
case "meets":
return tick$interval$normalize_$_normalize.call(null,cljs.core.cons.call(null,tick.interval.splice.call(null,ival1,ival2),r));

break;
default:
return cljs.core.cons.call(null,tick.interval.new_interval_group.call(null,ival1),tick$interval$normalize_$_normalize.call(null,tick.interval.assert_proper_head.call(null,cljs.core.rest.call(null,intervals__$1))));

}
}
}),null,null));
});
return normalize.call(null,tick.interval.assert_proper_head.call(null,intervals));
});
/**
 * Merge multiple time-ordered sequences of disjoint intervals into a
 *   single sequence of time-ordered disjoint intervals.
 */
tick.interval.union = (function tick$interval$union(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14818 = arguments.length;
var i__4731__auto___14819 = (0);
while(true){
if((i__4731__auto___14819 < len__4730__auto___14818)){
args__4736__auto__.push((arguments[i__4731__auto___14819]));

var G__14820 = (i__4731__auto___14819 + (1));
i__4731__auto___14819 = G__14820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tick.interval.union.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
var union = (function tick$interval$union(colls__$1){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.count.call(null,colls__$1) <= (1))){
return cljs.core.first.call(null,colls__$1);
} else {
var vec__14811 = cljs.core.sort_by.call(null,(function (p1__14806_SHARP_){
return tick.core.beginning.call(null,cljs.core.first.call(null,p1__14806_SHARP_));
}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,colls__$1));
var seq__14812 = cljs.core.seq.call(null,vec__14811);
var first__14813 = cljs.core.first.call(null,seq__14812);
var seq__14812__$1 = cljs.core.next.call(null,seq__14812);
var c1 = first__14813;
var first__14813__$1 = cljs.core.first.call(null,seq__14812__$1);
var seq__14812__$2 = cljs.core.next.call(null,seq__14812__$1);
var c2 = first__14813__$1;
var r = seq__14812__$2;
if((c2 == null)){
return c1;
} else {
if(cljs.core.truth_(tick.interval.disjoint_QMARK_.call(null,cljs.core.first.call(null,c1),cljs.core.first.call(null,c2)))){
return cljs.core.cons.call(null,cljs.core.first.call(null,c1),tick$interval$union.call(null,cljs.core.apply.call(null,cljs.core.list,cljs.core.next.call(null,c1),c2,r)));
} else {
return tick$interval$union.call(null,cljs.core.apply.call(null,cljs.core.list,cljs.core.cons.call(null,tick.interval.splice.call(null,cljs.core.first.call(null,c1),cljs.core.first.call(null,c2)),cljs.core.next.call(null,c1)),cljs.core.next.call(null,c2),r));
}
}
}
}),null,null));
});
return union.call(null,(function (){var iter__4523__auto__ = (function tick$interval$iter__14814(s__14815){
return (new cljs.core.LazySeq(null,(function (){
var s__14815__$1 = s__14815;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__14815__$1);
if(temp__5735__auto__){
var s__14815__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14815__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__14815__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__14817 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__14816 = (0);
while(true){
if((i__14816 < size__4522__auto__)){
var coll = cljs.core._nth.call(null,c__4521__auto__,i__14816);
if(cljs.core.truth_(coll)){
cljs.core.chunk_append.call(null,b__14817,cljs.core.sort_by.call(null,tick.core.beginning,coll));

var G__14821 = (i__14816 + (1));
i__14816 = G__14821;
continue;
} else {
var G__14822 = (i__14816 + (1));
i__14816 = G__14822;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14817),tick$interval$iter__14814.call(null,cljs.core.chunk_rest.call(null,s__14815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14817),null);
}
} else {
var coll = cljs.core.first.call(null,s__14815__$2);
if(cljs.core.truth_(coll)){
return cljs.core.cons.call(null,cljs.core.sort_by.call(null,tick.core.beginning,coll),tick$interval$iter__14814.call(null,cljs.core.rest.call(null,s__14815__$2)));
} else {
var G__14823 = cljs.core.rest.call(null,s__14815__$2);
s__14815__$1 = G__14823;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,colls);
})());
});

tick.interval.union.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tick.interval.union.cljs$lang$applyTo = (function (seq14807){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14807));
});

tick.interval.conj = (function tick$interval$conj(coll,interval){
return tick.interval.union.call(null,coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null));
});
/**
 * Return a time-ordered sequence of disjoint intervals where two or
 *   more intervals of the given sequences are concurrent. Arguments must
 *   be time-ordered sequences of disjoint intervals.
 */
tick.interval.intersection = (function tick$interval$intersection(var_args){
var G__14828 = arguments.length;
switch (G__14828) {
case 1:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14832 = arguments.length;
var i__4731__auto___14833 = (0);
while(true){
if((i__4731__auto___14833 < len__4730__auto___14832)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14833]));

var G__14834 = (i__4731__auto___14833 + (1));
i__4731__auto___14833 = G__14834;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.interval.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

tick.interval.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var intersection = (function tick$interval$intersection(xs,ys){
return (new cljs.core.LazySeq(null,(function (){
var x = cljs.core.first.call(null,xs);
var y = cljs.core.first.call(null,ys);
if(cljs.core.truth_((function (){var and__4120__auto__ = x;
if(cljs.core.truth_(and__4120__auto__)){
return y;
} else {
return and__4120__auto__;
}
})())){
var G__14830 = tick.interval.relation.call(null,x,y);
var G__14830__$1 = (((G__14830 instanceof cljs.core.Keyword))?G__14830.fqn:null);
switch (G__14830__$1) {
case "precedes":
case "meets":
return tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),ys);

break;
case "preceded-by":
case "met-by":
return tick$interval$intersection.call(null,xs,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys)));

break;
case "started-by":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,y),tick.core.end.call(null,y)),tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.end.call(null,y),tick.core.end.call(null,x)),cljs.core.next.call(null,xs))),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
case "finished-by":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,y),tick.core.end.call(null,y)),tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
case "overlaps":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,y),tick.core.end.call(null,x)),tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,y),tick.core.end.call(null,x)),cljs.core.next.call(null,xs))),tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,y,tick.core.end.call(null,x),tick.core.end.call(null,y)),cljs.core.next.call(null,ys)))));

break;
case "overlapped-by":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,x),tick.core.end.call(null,y)),tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.end.call(null,y),tick.core.end.call(null,x)),cljs.core.next.call(null,xs))),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
case "contains":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,y),tick.core.end.call(null,y)),tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.end.call(null,y),tick.core.end.call(null,x)),cljs.core.next.call(null,xs))),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
case "during":
return cljs.core.cons.call(null,x,tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,y,tick.core.end.call(null,x),tick.core.end.call(null,y)),cljs.core.next.call(null,ys)))));

break;
case "equals":
return cljs.core.cons.call(null,x,tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
case "finishes":
return cljs.core.cons.call(null,x,tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
case "starts":
return cljs.core.cons.call(null,x,tick$interval$intersection.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,y,tick.core.end.call(null,x),tick.core.end.call(null,y)),cljs.core.next.call(null,ys)))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14830__$1)].join('')));

}
} else {
return cljs.core.List.EMPTY;
}
}),null,null));
});
return intersection.call(null,tick.interval.assert_proper_head.call(null,s1),tick.interval.assert_proper_head.call(null,s2));
});

tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,tick.interval.intersection,s1,cljs.core.conj.call(null,sets,s2));
});

/** @this {Function} */
tick.interval.intersection.cljs$lang$applyTo = (function (seq14825){
var G__14826 = cljs.core.first.call(null,seq14825);
var seq14825__$1 = cljs.core.next.call(null,seq14825);
var G__14827 = cljs.core.first.call(null,seq14825__$1);
var seq14825__$2 = cljs.core.next.call(null,seq14825__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14826,G__14827,seq14825__$2);
});

tick.interval.intersection.cljs$lang$maxFixedArity = (2);

tick.interval.intersects_QMARK_ = (function tick$interval$intersects_QMARK_(ivals,interval){
return cljs.core.not_empty.call(null,tick.interval.intersection.call(null,ivals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)));
});
/**
 * Return an interval set that is the first set without elements of
 *   the remaining sets.
 */
tick.interval.difference = (function tick$interval$difference(var_args){
var G__14840 = arguments.length;
switch (G__14840) {
case 1:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14856 = arguments.length;
var i__4731__auto___14857 = (0);
while(true){
if((i__4731__auto___14857 < len__4730__auto___14856)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14857]));

var G__14858 = (i__4731__auto___14857 + (1));
i__4731__auto___14857 = G__14858;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.interval.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

tick.interval.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var difference = (function tick$interval$difference(xs,ys){
var vec__14848 = xs;
var x = cljs.core.nth.call(null,vec__14848,(0),null);
var vec__14851 = ys;
var y = cljs.core.nth.call(null,vec__14851,(0),null);
if(cljs.core.truth_(x)){
if(cljs.core.truth_(y)){
return (new cljs.core.LazySeq(null,((function (vec__14848,x,vec__14851,y){
return (function (){
var G__14854 = tick.interval.relation.call(null,x,y);
var G__14854__$1 = (((G__14854 instanceof cljs.core.Keyword))?G__14854.fqn:null);
switch (G__14854__$1) {
case "precedes":
case "meets":
return cljs.core.cons.call(null,x,tick$interval$difference.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),ys));

break;
case "preceded-by":
case "met-by":
return tick$interval$difference.call(null,xs,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys)));

break;
case "finishes":
case "during":
case "equals":
return tick$interval$difference.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys)));

break;
case "starts":
return tick$interval$difference.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),ys);

break;
case "started-by":
case "overlapped-by":
return tick$interval$difference.call(null,tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.end.call(null,y),tick.core.end.call(null,x)),cljs.core.next.call(null,xs))),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys)));

break;
case "finished-by":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y)),tick$interval$difference.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
case "overlaps":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y)),tick$interval$difference.call(null,tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,xs)),ys));

break;
case "contains":
return cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.beginning.call(null,x),tick.core.beginning.call(null,y)),tick$interval$difference.call(null,tick.interval.assert_proper_head.call(null,cljs.core.cons.call(null,tick.interval.slice.call(null,x,tick.core.end.call(null,y),tick.core.end.call(null,x)),cljs.core.next.call(null,xs))),tick.interval.assert_proper_head.call(null,cljs.core.next.call(null,ys))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14854__$1)].join('')));

}
});})(vec__14848,x,vec__14851,y))
,null,null));
} else {
return xs;
}
} else {
return cljs.core.List.EMPTY;
}
});
tick.interval.assert_proper_head.call(null,s1);

tick.interval.assert_proper_head.call(null,s2);

return difference.call(null,s1,s2);
});

tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,tick.interval.difference,s1,cljs.core.conj.call(null,sets,s2));
});

/** @this {Function} */
tick.interval.difference.cljs$lang$applyTo = (function (seq14837){
var G__14838 = cljs.core.first.call(null,seq14837);
var seq14837__$1 = cljs.core.next.call(null,seq14837);
var G__14839 = cljs.core.first.call(null,seq14837__$1);
var seq14837__$2 = cljs.core.next.call(null,seq14837__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14838,G__14839,seq14837__$2);
});

tick.interval.difference.cljs$lang$maxFixedArity = (2);

tick.interval.complement = (function tick$interval$complement(coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval.call(null,tick.core.min_of_type.call(null,tick.core.now.call(null)),tick.core.max_of_type.call(null,tick.core.now.call(null)))], null);
} else {
var r = cljs.core.map.call(null,(function (p__14862){
var vec__14863 = p__14862;
var x = cljs.core.nth.call(null,vec__14863,(0),null);
var y = cljs.core.nth.call(null,vec__14863,(1),null);
return tick.interval.new_interval.call(null,tick.core.end.call(null,x),tick.core.beginning.call(null,y));
}),cljs.core.partition.call(null,(2),(1),coll));
var G__14866 = r;
var G__14866__$1 = ((cljs.core.not_EQ_.call(null,tick.core.beginning.call(null,cljs.core.first.call(null,coll)),tick.core.min_of_type.call(null,tick.core.beginning.call(null,cljs.core.first.call(null,coll)))))?((function (G__14866,r){
return (function (p1__14860_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval.call(null,tick.core.min_of_type.call(null,tick.core.beginning.call(null,cljs.core.first.call(null,coll))),tick.core.beginning.call(null,cljs.core.first.call(null,coll)))], null),p1__14860_SHARP_);
});})(G__14866,r))
.call(null,G__14866):G__14866);
if(cljs.core.not_EQ_.call(null,tick.core.end.call(null,cljs.core.last.call(null,coll)),tick.core.max_of_type.call(null,tick.core.end.call(null,cljs.core.last.call(null,coll))))){
return ((function (G__14866,G__14866__$1,r){
return (function (p1__14861_SHARP_){
return cljs.core.concat.call(null,p1__14861_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval.call(null,tick.core.end.call(null,cljs.core.last.call(null,coll)),tick.core.max_of_type.call(null,tick.core.end.call(null,cljs.core.last.call(null,coll))))], null));
});})(G__14866,G__14866__$1,r))
.call(null,G__14866__$1);
} else {
return G__14866__$1;
}
}
});
/**
 * Split s1 across the grating defined by s2
 */
tick.interval.disjoin = (function tick$interval$disjoin(var_args){
var G__14871 = arguments.length;
switch (G__14871) {
case 1:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___14875 = arguments.length;
var i__4731__auto___14876 = (0);
while(true){
if((i__4731__auto___14876 < len__4730__auto___14875)){
args_arr__4751__auto__.push((arguments[i__4731__auto___14876]));

var G__14877 = (i__4731__auto___14876 + (1));
i__4731__auto___14876 = G__14877;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var xs = s1;
var ys = s2;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty.call(null,xs))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,ys))){
var x = cljs.core.first.call(null,xs);
var y = cljs.core.first.call(null,ys);
var G__14873 = tick.interval.relation.call(null,x,y);
var G__14873__$1 = (((G__14873 instanceof cljs.core.Keyword))?G__14873.fqn:null);
switch (G__14873__$1) {
case "precedes":
case "meets":
var G__14879 = cljs.core.next.call(null,xs);
var G__14880 = ys;
var G__14881 = cljs.core.conj.call(null,result,x);
xs = G__14879;
ys = G__14880;
result = G__14881;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14873__$1)].join('')));

}
} else {
return cljs.core.apply.call(null,cljs.core.conj,result,xs);
}
} else {
return result;
}
break;
}
});

tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,tick.interval.difference,s1,cljs.core.conj.call(null,sets,s2));
});

/** @this {Function} */
tick.interval.disjoin.cljs$lang$applyTo = (function (seq14868){
var G__14869 = cljs.core.first.call(null,seq14868);
var seq14868__$1 = cljs.core.next.call(null,seq14868);
var G__14870 = cljs.core.first.call(null,seq14868__$1);
var seq14868__$2 = cljs.core.next.call(null,seq14868__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14869,G__14870,seq14868__$2);
});

tick.interval.disjoin.cljs$lang$maxFixedArity = (2);

/**
 * Return a lazy sequence of java.time.Temporal instances over the
 *   given (local) interval.
 */
tick.interval.divide_by_apply = (function tick$interval$divide_by_apply(ival,f){
var G__14882 = tick.core.range.call(null,f.call(null,tick.core.beginning.call(null,ival)),f.call(null,tick.core.end.call(null,ival)));
if(cljs.core.truth_(tick.interval.concur.call(null,f.call(null,tick.core.end.call(null,ival)),ival))){
return cljs.core.concat.call(null,G__14882,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,tick.core.end.call(null,ival))], null));
} else {
return G__14882;
}
});
/**
 * Divide an interval by a duration, returning a sequence of
 *   intervals. If the interval cannot be wholly sub-divided by the
 *   duration divisor, the last interval will represent the 'remainder'
 *   of the division and not be as long as the other preceeding
 *   intervals.
 */
tick.interval.divide_by_duration = (function tick$interval$divide_by_duration(ival,dur){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,(function (p1__14883_SHARP_){
return tick.core.min.call(null,tick.core.forward_duration.call(null,p1__14883_SHARP_,dur),tick.core.end.call(null,ival));
})),tick.core.range.call(null,tick.core.beginning.call(null,ival),tick.core.end.call(null,ival),dur));
});
tick.interval.divide_by_period = (function tick$interval$divide_by_period(ival,period){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,(function (p1__14884_SHARP_){
return tick.core.min.call(null,tick.core.forward_duration.call(null,p1__14884_SHARP_,period),tick.core.end.call(null,ival));
})),tick.core.range.call(null,tick.core.beginning.call(null,ival),tick.core.end.call(null,ival),period));
});
tick.interval.divide_by_divisor = (function tick$interval$divide_by_divisor(ival,divisor){
return tick.interval.divide_by_duration.call(null,ival,cljc.java_time.duration.divided_by.call(null,tick.core.duration.call(null,ival),divisor));
});

/**
 * @interface
 */
tick.interval.IDivisibleInterval = function(){};

/**
 * Divide an interval by a given divisor
 */
tick.interval.divide_interval = (function tick$interval$divide_interval(divisor,ival){
if((((!((divisor == null)))) && ((!((divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2 == null)))))){
return divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2(divisor,ival);
} else {
var x__4433__auto__ = (((divisor == null))?null:divisor);
var m__4434__auto__ = (tick.interval.divide_interval[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,divisor,ival);
} else {
var m__4431__auto__ = (tick.interval.divide_interval["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,divisor,ival);
} else {
throw cljs.core.missing_protocol.call(null,"IDivisibleInterval.divide-interval",divisor);
}
}
}
});

goog.object.set(tick.interval.IDivisibleInterval,"function",true);

goog.object.set(tick.interval.divide_interval,"function",(function (f,ival){
return tick.interval.divide_by_apply.call(null,ival,f);
}));

java.time.Duration.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Duration.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (dur,ival){
var dur__$1 = this;
return tick.interval.divide_by_duration.call(null,ival,dur__$1);
});

java.time.Period.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Period.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (period,ival){
var period__$1 = this;
return tick.interval.divide_by_period.call(null,ival,period__$1);
});

goog.object.set(tick.interval.IDivisibleInterval,"number",true);

goog.object.set(tick.interval.divide_interval,"number",(function (divisor,ival){
return tick.interval.divide_by_divisor.call(null,ival,divisor);
}));
java.time.LocalDate.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.LocalDate.prototype.tick$core$IDivisible$divide$arity$2 = (function (ld,d){
var ld__$1 = this;
return tick.interval.divide_interval.call(null,d,ld__$1);
});

java.time.Year.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.Year.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval.call(null,d,n__$1);
});

java.time.YearMonth.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

java.time.YearMonth.prototype.tick$core$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval.call(null,d,n__$1);
});

cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.tick$core$IDivisible$divide$arity$2 = (function (ival,o){
var ival__$1 = this;
return tick.interval.divide_interval.call(null,o,ival__$1);
});
/**
 * Divide intervals in s1 by (disjoint ordered) intervals in s2,
 *   splitting if necessary, grouping by s2. Complexity is O(n) rather
 *   than O(n^2)
 */
tick.interval.group_by_intervals = (function tick$interval$group_by_intervals(intervals_to_group_by,ivals){
if(tick.interval.ordered_disjoint_intervals_QMARK_.call(null,intervals_to_group_by)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? intervals-to-group-by)"));
}

if(tick.interval.ordered_disjoint_intervals_QMARK_.call(null,ivals)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? ivals)"));
}

var intervals = ivals;
var groups = intervals_to_group_by;
var result = cljs.core.PersistentArrayMap.EMPTY;
var current_intervals = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty.call(null,intervals))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,groups))){
var ival = cljs.core.first.call(null,intervals);
var group = cljs.core.first.call(null,groups);
var G__14897 = tick.interval.relation.call(null,ival,group);
var G__14897__$1 = (((G__14897 instanceof cljs.core.Keyword))?G__14897.fqn:null);
switch (G__14897__$1) {
case "precedes":
case "meets":
var G__14910 = cljs.core.next.call(null,intervals);
var G__14911 = groups;
var G__14912 = result;
var G__14913 = current_intervals;
intervals = G__14910;
groups = G__14911;
result = G__14912;
current_intervals = G__14913;
continue;

break;
case "preceded-by":
case "met-by":
var G__14914 = intervals;
var G__14915 = cljs.core.next.call(null,groups);
var G__14916 = (function (){var G__14898 = result;
if(cljs.core.truth_(cljs.core.not_empty.call(null,current_intervals))){
return cljs.core.assoc.call(null,G__14898,group,current_intervals);
} else {
return G__14898;
}
})();
var G__14917 = cljs.core.PersistentVector.EMPTY;
intervals = G__14914;
groups = G__14915;
result = G__14916;
current_intervals = G__14917;
continue;

break;
case "finishes":
var G__14918 = cljs.core.next.call(null,intervals);
var G__14919 = cljs.core.next.call(null,groups);
var G__14920 = cljs.core.assoc.call(null,result,group,cljs.core.conj.call(null,current_intervals,ival));
var G__14921 = cljs.core.PersistentVector.EMPTY;
intervals = G__14918;
groups = G__14919;
result = G__14920;
current_intervals = G__14921;
continue;

break;
case "equals":
var G__14922 = cljs.core.next.call(null,intervals);
var G__14923 = cljs.core.next.call(null,groups);
var G__14924 = cljs.core.assoc.call(null,result,group,cljs.core.conj.call(null,current_intervals,ival));
var G__14925 = cljs.core.PersistentVector.EMPTY;
intervals = G__14922;
groups = G__14923;
result = G__14924;
current_intervals = G__14925;
continue;

break;
case "finished-by":
var vec__14899 = tick.interval.split_with_assert.call(null,ival,tick.core.beginning.call(null,group));
var seg1 = cljs.core.nth.call(null,vec__14899,(0),null);
var seg2 = cljs.core.nth.call(null,vec__14899,(1),null);
var G__14926 = cljs.core.next.call(null,intervals);
var G__14927 = cljs.core.next.call(null,groups);
var G__14928 = cljs.core.assoc.call(null,result,group,cljs.core.conj.call(null,current_intervals,seg2));
var G__14929 = cljs.core.PersistentVector.EMPTY;
intervals = G__14926;
groups = G__14927;
result = G__14928;
current_intervals = G__14929;
continue;

break;
case "started-by":
var vec__14902 = tick.interval.split_with_assert.call(null,ival,tick.core.end.call(null,group));
var seg1 = cljs.core.nth.call(null,vec__14902,(0),null);
var seg2 = cljs.core.nth.call(null,vec__14902,(1),null);
var G__14930 = cljs.core.cons.call(null,seg2,cljs.core.next.call(null,intervals));
var G__14931 = cljs.core.next.call(null,groups);
var G__14932 = cljs.core.assoc.call(null,result,group,cljs.core.conj.call(null,current_intervals,seg1));
var G__14933 = cljs.core.PersistentVector.EMPTY;
intervals = G__14930;
groups = G__14931;
result = G__14932;
current_intervals = G__14933;
continue;

break;
case "overlapped-by":
var vec__14905 = tick.interval.split_with_assert.call(null,ival,tick.core.end.call(null,group));
var seg1 = cljs.core.nth.call(null,vec__14905,(0),null);
var seg2 = cljs.core.nth.call(null,vec__14905,(1),null);
var G__14934 = cljs.core.cons.call(null,seg2,cljs.core.next.call(null,intervals));
var G__14935 = cljs.core.next.call(null,groups);
var G__14936 = cljs.core.assoc.call(null,result,group,cljs.core.conj.call(null,current_intervals,seg1));
var G__14937 = cljs.core.PersistentVector.EMPTY;
intervals = G__14934;
groups = G__14935;
result = G__14936;
current_intervals = G__14937;
continue;

break;
case "starts":
case "during":
var G__14938 = cljs.core.next.call(null,intervals);
var G__14939 = groups;
var G__14940 = result;
var G__14941 = cljs.core.conj.call(null,current_intervals,ival);
intervals = G__14938;
groups = G__14939;
result = G__14940;
current_intervals = G__14941;
continue;

break;
case "contains":
var G__14942 = cljs.core.next.call(null,intervals);
var G__14943 = cljs.core.next.call(null,groups);
var G__14944 = cljs.core.assoc.call(null,result,group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice.call(null,ival,tick.core.beginning.call(null,group),tick.core.end.call(null,group))], null));
var G__14945 = cljs.core.PersistentVector.EMPTY;
intervals = G__14942;
groups = G__14943;
result = G__14944;
current_intervals = G__14945;
continue;

break;
case "overlaps":
var G__14946 = cljs.core.next.call(null,intervals);
var G__14947 = groups;
var G__14948 = result;
var G__14949 = cljs.core.conj.call(null,current_intervals,tick.interval.slice.call(null,ival,tick.core.beginning.call(null,group),tick.core.end.call(null,ival)));
intervals = G__14946;
groups = G__14947;
result = G__14948;
current_intervals = G__14949;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14897__$1)].join('')));

}
} else {
return result;
}
} else {
var G__14908 = result;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.first.call(null,groups);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_empty.call(null,current_intervals);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,G__14908,cljs.core.first.call(null,groups),current_intervals);
} else {
return G__14908;
}
}
break;
}
});

/**
 * @interface
 */
tick.interval.IGroupable = function(){};

tick.interval.group_by = (function tick$interval$group_by(grouping,ivals){
if((((!((grouping == null)))) && ((!((grouping.tick$interval$IGroupable$group_by$arity$2 == null)))))){
return grouping.tick$interval$IGroupable$group_by$arity$2(grouping,ivals);
} else {
var x__4433__auto__ = (((grouping == null))?null:grouping);
var m__4434__auto__ = (tick.interval.group_by[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,grouping,ivals);
} else {
var m__4431__auto__ = (tick.interval.group_by["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,grouping,ivals);
} else {
throw cljs.core.missing_protocol.call(null,"IGroupable.group-by",grouping);
}
}
}
});

goog.object.set(tick.interval.IGroupable,"function",true);

goog.object.set(tick.interval.group_by,"function",(function (f,ivals){
if(cljs.core.empty_QMARK_.call(null,ivals)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var r = cljs.core.apply.call(null,tick.interval.bounds,ivals);
var b = f.call(null,tick.core.beginning.call(null,r));
var e = f.call(null,tick.core.end.call(null,r));
var groups = tick.core.range.call(null,b,tick.core.inc.call(null,e));
return tick.interval.group_by.call(null,groups,ivals);
}
}));

cljs.core.LazySeq.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals.call(null,groups__$1,ivals);
});

cljs.core.PersistentVector.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals.call(null,groups__$1,ivals);
});
