// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.core');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.subs');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.cofx');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.std_interceptors');
goog.require('clojure.set');
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch;
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch_sync = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch_sync;
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub = mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub;
mranderson048.re_frame.v0v10v2.re_frame.core.subscribe = mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_sub = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.subs.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_sub_raw(query_id,handler_fn){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,handler_fn);
});
mranderson048.re_frame.v0v10v2.re_frame.core.reg_fx = mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_fx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.fx.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.reg_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.reg_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.inject_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_cofx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_db(var_args){
var G__17422 = arguments.length;
switch (G__17422) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_fx(var_args){
var G__17425 = arguments.length;
switch (G__17425) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_ctx(var_args){
var G__17428 = arguments.length;
switch (G__17428) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

mranderson048.re_frame.v0v10v2.re_frame.core.clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.debug = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.debug;
mranderson048.re_frame.v0v10v2.re_frame.core.path = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path;
mranderson048.re_frame.v0v10v2.re_frame.core.enrich = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.enrich;
mranderson048.re_frame.v0v10v2.re_frame.core.trim_v = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.trim_v;
mranderson048.re_frame.v0v10v2.re_frame.core.after = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.after;
mranderson048.re_frame.v0v10v2.re_frame.core.on_changes = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes;
mranderson048.re_frame.v0v10v2.re_frame.core.__GT_interceptor = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor;
mranderson048.re_frame.v0v10v2.re_frame.core.get_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.get_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.enqueue = mranderson048.re_frame.v0v10v2.re_frame.interceptor.enqueue;
mranderson048.re_frame.v0v10v2.re_frame.core.set_loggers_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_;
mranderson048.re_frame.v0v10v2.re_frame.core.console = mranderson048.re_frame.v0v10v2.re_frame.loggers.console;
/**
 * Checkpoints the state of mranderson048.re-frame.v0v10v2.re-frame and returns a function which, when
 *   later called, will restore mranderson048.re-frame.v0v10v2.re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.make_restore_fn = (function mranderson048$re_frame$v0v10v2$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_17434 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_17435 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)));
var seq__17430_17436 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_17435,original_subs_17434));
var chunk__17431_17437 = null;
var count__17432_17438 = (0);
var i__17433_17439 = (0);
while(true){
if((i__17433_17439 < count__17432_17438)){
var sub_17440 = cljs.core._nth.call(null,chunk__17431_17437,i__17433_17439);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_17440);


var G__17441 = seq__17430_17436;
var G__17442 = chunk__17431_17437;
var G__17443 = count__17432_17438;
var G__17444 = (i__17433_17439 + (1));
seq__17430_17436 = G__17441;
chunk__17431_17437 = G__17442;
count__17432_17438 = G__17443;
i__17433_17439 = G__17444;
continue;
} else {
var temp__5735__auto___17445 = cljs.core.seq.call(null,seq__17430_17436);
if(temp__5735__auto___17445){
var seq__17430_17446__$1 = temp__5735__auto___17445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17430_17446__$1)){
var c__4550__auto___17447 = cljs.core.chunk_first.call(null,seq__17430_17446__$1);
var G__17448 = cljs.core.chunk_rest.call(null,seq__17430_17446__$1);
var G__17449 = c__4550__auto___17447;
var G__17450 = cljs.core.count.call(null,c__4550__auto___17447);
var G__17451 = (0);
seq__17430_17436 = G__17448;
chunk__17431_17437 = G__17449;
count__17432_17438 = G__17450;
i__17433_17439 = G__17451;
continue;
} else {
var sub_17452 = cljs.core.first.call(null,seq__17430_17446__$1);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_17452);


var G__17453 = cljs.core.next.call(null,seq__17430_17446__$1);
var G__17454 = null;
var G__17455 = (0);
var G__17456 = (0);
seq__17430_17436 = G__17453;
chunk__17431_17437 = G__17454;
count__17432_17438 = G__17455;
i__17433_17439 = G__17456;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$add_post_event_callback(var_args){
var G__17458 = arguments.length;
switch (G__17458) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.call(null,f,f);
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return mranderson048.re_frame.v0v10v2.re_frame.router.add_post_event_callback.call(null,mranderson048.re_frame.v0v10v2.re_frame.router.event_queue,id,f);
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

mranderson048.re_frame.v0v10v2.re_frame.core.remove_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$remove_post_event_callback(id){
return mranderson048.re_frame.v0v10v2.re_frame.router.remove_post_event_callback.call(null,mranderson048.re_frame.v0v10v2.re_frame.router.event_queue,id);
});
mranderson048.re_frame.v0v10v2.re_frame.core.register_handler = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_handler(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17461 = arguments.length;
var i__4731__auto___17462 = (0);
while(true){
if((i__4731__auto___17462 < len__4730__auto___17461)){
args__4736__auto__.push((arguments[i__4731__auto___17462]));

var G__17463 = (i__4731__auto___17462 + (1));
i__4731__auto___17462 = G__17463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db,args);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq17460){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17460));
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17465 = arguments.length;
var i__4731__auto___17466 = (0);
while(true){
if((i__4731__auto___17466 < len__4730__auto___17465)){
args__4736__auto__.push((arguments[i__4731__auto___17466]));

var G__17467 = (i__4731__auto___17466 + (1));
i__4731__auto___17466 = G__17467;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args)),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw,args);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq17464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17464));
});

