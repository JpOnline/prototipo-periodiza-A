// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.util');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('tick.alpha.api');
goog.require('reagent.core');
/**
 * it takes an argument for which number to round,
 *   the same as the classic round had the implicit
 *   argument of 1 (e.g. (round 2.3) is the same as
 *   (round-to-precision 2.3 1)
 */
pr4.util.round_to_precision = (function pr4$util$round_to_precision(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14748 = arguments.length;
var i__4731__auto___14749 = (0);
while(true){
if((i__4731__auto___14749 < len__4730__auto___14748)){
args__4736__auto__.push((arguments[i__4731__auto___14749]));

var G__14750 = (i__4731__auto___14749 + (1));
i__4731__auto___14749 = G__14750;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pr4.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pr4.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__14744){
var vec__14745 = p__14744;
var precision = cljs.core.nth.call(null,vec__14745,(0),null);
var temp = (n + (cljs.core.truth_(precision)?(precision / (2)):0.5));
return (temp - cljs.core.mod.call(null,temp,(function (){var or__4131__auto__ = precision;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()));
});

pr4.util.round_to_precision.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pr4.util.round_to_precision.cljs$lang$applyTo = (function (seq14742){
var G__14743 = cljs.core.first.call(null,seq14742);
var seq14742__$1 = cljs.core.next.call(null,seq14742);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14743,seq14742__$1);
});

pr4.util.between_QMARK_ = (function pr4$util$between_QMARK_(value,p__14751){
var vec__14752 = p__14751;
var min = cljs.core.nth.call(null,vec__14752,(0),null);
var max = cljs.core.nth.call(null,vec__14752,(1),null);
return (((value >= min)) && ((value < max)));
});
pr4.util.pre_validation = (function pr4$util$pre_validation(spec,input,message){

var or__4131__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,spec,input);
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,message,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec-input","spec-input",1673692123),input,new cljs.core.Keyword(null,"spec-data","spec-data",-335955080),cljs.spec.alpha.explain_data.call(null,spec,input)], null));
}
});
pr4.util.validate_interval = (function pr4$util$validate_interval(coll,p__14755){
var vec__14756 = p__14755;
var i_1 = cljs.core.nth.call(null,vec__14756,(0),null);
var i_2 = cljs.core.nth.call(null,vec__14756,(1),null);
var or__4131__auto__ = (((i_1 <= i_2)) && ((i_2 <= cljs.core.count.call(null,coll))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"Interval not in coll range",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll,new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_1,i_2], null)], null));
}
});
pr4.util.select_indexes = (function pr4$util$select_indexes(coll,interval){
if((cljs.core.second.call(null,interval) <= cljs.core.count.call(null,coll))){
return cljs.core.map.call(null,(function (p1__14759_SHARP_){
return cljs.core.nth.call(null,coll,p1__14759_SHARP_);
}),cljs.core.apply.call(null,cljs.core.range,interval));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,coll)], null);
}
});
pr4.util.seconds__GT_minute_text = (function pr4$util$seconds__GT_minute_text(seconds){
var hour = cljs.core.quot.call(null,seconds,(3600));
var hour_str = (((hour > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":"].join(''):null);
var min = cljs.core.quot.call(null,cljs.core.mod.call(null,seconds,(3600)),(60));
var sec = cljs.core.mod.call(null,seconds,(60));
return [hour_str,(((min < (10)))?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),":",(((sec < (10)))?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sec)].join('');
});
pr4.util.first_filter = (function pr4$util$first_filter(f,coll){
return cljs.core.some.call(null,(function (p1__14760_SHARP_){
if(cljs.core.truth_(f.call(null,p1__14760_SHARP_))){
return p1__14760_SHARP_;
} else {
return null;
}
}),coll);
});
pr4.util.days_difference = (function pr4$util$days_difference(end,start){
return (cljs.core.count.call(null,tick.alpha.api.divide.call(null,tick.alpha.api.new_interval.call(null,tick.alpha.api.date.call(null,start),tick.alpha.api.date.call(null,end)),tick.alpha.api.new_duration.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564)))) - (1));
});
/**
 * Wrap component in the create-class fn so the react component-did-mount
 *   hook can be used.
 */
pr4.util.with_mount_fn = (function pr4$util$with_mount_fn(p__14761){
var vec__14762 = p__14761;
var n = cljs.core.nth.call(null,vec__14762,(0),null);
var map__14765 = cljs.core.nth.call(null,vec__14762,(1),null);
var map__14765__$1 = (((((!((map__14765 == null))))?(((((map__14765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14765):map__14765);
var component_did_mount = cljs.core.get.call(null,map__14765__$1,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518));
var to_render = vec__14762;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (vec__14762,n,map__14765,map__14765__$1,component_did_mount,to_render){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.update_in.call(null,to_render,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518)));
});})(vec__14762,n,map__14765,map__14765__$1,component_did_mount,to_render))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),component_did_mount], null));
});
pr4.util.plus_days = (function pr4$util$plus_days(date,days_to_add){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api._PLUS_.call(null,tick.alpha.api.date.call(null,date),tick.alpha.api.new_period.call(null,days_to_add,new cljs.core.Keyword(null,"days","days",-1394072564))));
});

//# sourceMappingURL=util.js.map
