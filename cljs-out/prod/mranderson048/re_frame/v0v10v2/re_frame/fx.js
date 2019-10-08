// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__17331 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17332 = null;
var count__17333 = (0);
var i__17334 = (0);
while(true){
if((i__17334 < count__17333)){
var vec__17341 = cljs.core._nth.call(null,chunk__17332,i__17334);
var effect_key = cljs.core.nth.call(null,vec__17341,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17341,(1),null);
var temp__5733__auto___17347 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___17347)){
var effect_fn_17348 = temp__5733__auto___17347;
effect_fn_17348.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__17349 = seq__17331;
var G__17350 = chunk__17332;
var G__17351 = count__17333;
var G__17352 = (i__17334 + (1));
seq__17331 = G__17349;
chunk__17332 = G__17350;
count__17333 = G__17351;
i__17334 = G__17352;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__17331);
if(temp__5735__auto__){
var seq__17331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17331__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17331__$1);
var G__17353 = cljs.core.chunk_rest.call(null,seq__17331__$1);
var G__17354 = c__4550__auto__;
var G__17355 = cljs.core.count.call(null,c__4550__auto__);
var G__17356 = (0);
seq__17331 = G__17353;
chunk__17332 = G__17354;
count__17333 = G__17355;
i__17334 = G__17356;
continue;
} else {
var vec__17344 = cljs.core.first.call(null,seq__17331__$1);
var effect_key = cljs.core.nth.call(null,vec__17344,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17344,(1),null);
var temp__5733__auto___17357 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___17357)){
var effect_fn_17358 = temp__5733__auto___17357;
effect_fn_17358.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__17359 = cljs.core.next.call(null,seq__17331__$1);
var G__17360 = null;
var G__17361 = (0);
var G__17362 = (0);
seq__17331 = G__17359;
chunk__17332 = G__17360;
count__17333 = G__17361;
i__17334 = G__17362;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__17363 = cljs.core.seq.call(null,value);
var chunk__17364 = null;
var count__17365 = (0);
var i__17366 = (0);
while(true){
if((i__17366 < count__17365)){
var map__17371 = cljs.core._nth.call(null,chunk__17364,i__17366);
var map__17371__$1 = (((((!((map__17371 == null))))?(((((map__17371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17371):map__17371);
var effect = map__17371__$1;
var ms = cljs.core.get.call(null,map__17371__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17371__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17363,chunk__17364,count__17365,i__17366,map__17371,map__17371__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__17363,chunk__17364,count__17365,i__17366,map__17371,map__17371__$1,effect,ms,dispatch))
,ms);
}


var G__17375 = seq__17363;
var G__17376 = chunk__17364;
var G__17377 = count__17365;
var G__17378 = (i__17366 + (1));
seq__17363 = G__17375;
chunk__17364 = G__17376;
count__17365 = G__17377;
i__17366 = G__17378;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__17363);
if(temp__5735__auto__){
var seq__17363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17363__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17363__$1);
var G__17379 = cljs.core.chunk_rest.call(null,seq__17363__$1);
var G__17380 = c__4550__auto__;
var G__17381 = cljs.core.count.call(null,c__4550__auto__);
var G__17382 = (0);
seq__17363 = G__17379;
chunk__17364 = G__17380;
count__17365 = G__17381;
i__17366 = G__17382;
continue;
} else {
var map__17373 = cljs.core.first.call(null,seq__17363__$1);
var map__17373__$1 = (((((!((map__17373 == null))))?(((((map__17373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17373):map__17373);
var effect = map__17373__$1;
var ms = cljs.core.get.call(null,map__17373__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__17373__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__17363,chunk__17364,count__17365,i__17366,map__17373,map__17373__$1,effect,ms,dispatch,seq__17363__$1,temp__5735__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__17363,chunk__17364,count__17365,i__17366,map__17373,map__17373__$1,effect,ms,dispatch,seq__17363__$1,temp__5735__auto__))
,ms);
}


var G__17383 = cljs.core.next.call(null,seq__17363__$1);
var G__17384 = null;
var G__17385 = (0);
var G__17386 = (0);
seq__17363 = G__17383;
chunk__17364 = G__17384;
count__17365 = G__17385;
i__17366 = G__17386;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__17387 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__17388 = null;
var count__17389 = (0);
var i__17390 = (0);
while(true){
if((i__17390 < count__17389)){
var event = cljs.core._nth.call(null,chunk__17388,i__17390);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__17391 = seq__17387;
var G__17392 = chunk__17388;
var G__17393 = count__17389;
var G__17394 = (i__17390 + (1));
seq__17387 = G__17391;
chunk__17388 = G__17392;
count__17389 = G__17393;
i__17390 = G__17394;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__17387);
if(temp__5735__auto__){
var seq__17387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17387__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17387__$1);
var G__17395 = cljs.core.chunk_rest.call(null,seq__17387__$1);
var G__17396 = c__4550__auto__;
var G__17397 = cljs.core.count.call(null,c__4550__auto__);
var G__17398 = (0);
seq__17387 = G__17395;
chunk__17388 = G__17396;
count__17389 = G__17397;
i__17390 = G__17398;
continue;
} else {
var event = cljs.core.first.call(null,seq__17387__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__17399 = cljs.core.next.call(null,seq__17387__$1);
var G__17400 = null;
var G__17401 = (0);
var G__17402 = (0);
seq__17387 = G__17399;
chunk__17388 = G__17400;
count__17389 = G__17401;
i__17390 = G__17402;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__17403 = cljs.core.seq.call(null,value);
var chunk__17404 = null;
var count__17405 = (0);
var i__17406 = (0);
while(true){
if((i__17406 < count__17405)){
var event = cljs.core._nth.call(null,chunk__17404,i__17406);
clear_event.call(null,event);


var G__17407 = seq__17403;
var G__17408 = chunk__17404;
var G__17409 = count__17405;
var G__17410 = (i__17406 + (1));
seq__17403 = G__17407;
chunk__17404 = G__17408;
count__17405 = G__17409;
i__17406 = G__17410;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__17403);
if(temp__5735__auto__){
var seq__17403__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17403__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17403__$1);
var G__17411 = cljs.core.chunk_rest.call(null,seq__17403__$1);
var G__17412 = c__4550__auto__;
var G__17413 = cljs.core.count.call(null,c__4550__auto__);
var G__17414 = (0);
seq__17403 = G__17411;
chunk__17404 = G__17412;
count__17405 = G__17413;
i__17406 = G__17414;
continue;
} else {
var event = cljs.core.first.call(null,seq__17403__$1);
clear_event.call(null,event);


var G__17415 = cljs.core.next.call(null,seq__17403__$1);
var G__17416 = null;
var G__17417 = (0);
var G__17418 = (0);
seq__17403 = G__17415;
chunk__17404 = G__17416;
count__17405 = G__17417;
i__17406 = G__17418;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));
