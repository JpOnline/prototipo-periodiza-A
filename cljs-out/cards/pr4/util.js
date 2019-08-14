// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.util');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
/**
 * it takes an argument for which number to floor,
 *   the same as the classic floor had the implicit
 *   argument of 1 (e.g. (floor 2.3) is the same as
 *   (round-to-precision 2.3 1)
 */
pr4.util.round_to_precision = (function pr4$util$round_to_precision(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10873 = arguments.length;
var i__4731__auto___10874 = (0);
while(true){
if((i__4731__auto___10874 < len__4730__auto___10873)){
args__4736__auto__.push((arguments[i__4731__auto___10874]));

var G__10875 = (i__4731__auto___10874 + (1));
i__4731__auto___10874 = G__10875;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pr4.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pr4.util.round_to_precision.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__10869){
var vec__10870 = p__10869;
var precision = cljs.core.nth.call(null,vec__10870,(0),null);
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
pr4.util.round_to_precision.cljs$lang$applyTo = (function (seq10867){
var G__10868 = cljs.core.first.call(null,seq10867);
var seq10867__$1 = cljs.core.next.call(null,seq10867);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10868,seq10867__$1);
});

pr4.util.between_QMARK_ = (function pr4$util$between_QMARK_(value,p__10876){
var vec__10877 = p__10876;
var min = cljs.core.nth.call(null,vec__10877,(0),null);
var max = cljs.core.nth.call(null,vec__10877,(1),null);
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
pr4.util.validate_interval = (function pr4$util$validate_interval(coll,p__10880){
var vec__10881 = p__10880;
var i_1 = cljs.core.nth.call(null,vec__10881,(0),null);
var i_2 = cljs.core.nth.call(null,vec__10881,(1),null);
var or__4131__auto__ = (((i_1 <= i_2)) && ((i_2 <= cljs.core.count.call(null,coll))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"Interval not in coll range",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll,new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_1,i_2], null)], null));
}
});
pr4.util.select_indexes = (function pr4$util$select_indexes(coll,interval){
if(pr4.util.validate_interval.call(null,coll,interval)){
} else {
throw (new Error("Assert failed: (validate-interval coll interval)"));
}

return cljs.core.map.call(null,(function (p1__10884_SHARP_){
return cljs.core.nth.call(null,coll,p1__10884_SHARP_);
}),cljs.core.apply.call(null,cljs.core.range,interval));
});
pr4.util.seconds__GT_minute_text = (function pr4$util$seconds__GT_minute_text(seconds){
var min = cljs.core.quot.call(null,seconds,(60));
var sec = cljs.core.mod.call(null,seconds,(60));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),":",(((sec < (10)))?"0":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sec)].join('');
});
pr4.util.first_filter = (function pr4$util$first_filter(f,coll){
return cljs.core.some.call(null,(function (p1__10885_SHARP_){
if(cljs.core.truth_(f.call(null,p1__10885_SHARP_))){
return p1__10885_SHARP_;
} else {
return null;
}
}),coll);
});

//# sourceMappingURL=util.js.map
