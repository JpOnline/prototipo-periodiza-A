// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__15372){
var map__15373 = p__15372;
var map__15373__$1 = (((((!((map__15373 == null))))?(((((map__15373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15373):map__15373);
var operation = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__15375_15395 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__15376_15396 = null;
var count__15377_15397 = (0);
var i__15378_15398 = (0);
while(true){
if((i__15378_15398 < count__15377_15397)){
var vec__15387_15399 = cljs.core._nth.call(null,chunk__15376_15396,i__15378_15398);
var k_15400 = cljs.core.nth.call(null,vec__15387_15399,(0),null);
var cb_15401 = cljs.core.nth.call(null,vec__15387_15399,(1),null);
try{cb_15401.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15390){var e_15402 = e15390;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15400,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15402);
}

var G__15403 = seq__15375_15395;
var G__15404 = chunk__15376_15396;
var G__15405 = count__15377_15397;
var G__15406 = (i__15378_15398 + (1));
seq__15375_15395 = G__15403;
chunk__15376_15396 = G__15404;
count__15377_15397 = G__15405;
i__15378_15398 = G__15406;
continue;
} else {
var temp__5735__auto___15407 = cljs.core.seq.call(null,seq__15375_15395);
if(temp__5735__auto___15407){
var seq__15375_15408__$1 = temp__5735__auto___15407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15375_15408__$1)){
var c__4550__auto___15409 = cljs.core.chunk_first.call(null,seq__15375_15408__$1);
var G__15410 = cljs.core.chunk_rest.call(null,seq__15375_15408__$1);
var G__15411 = c__4550__auto___15409;
var G__15412 = cljs.core.count.call(null,c__4550__auto___15409);
var G__15413 = (0);
seq__15375_15395 = G__15410;
chunk__15376_15396 = G__15411;
count__15377_15397 = G__15412;
i__15378_15398 = G__15413;
continue;
} else {
var vec__15391_15414 = cljs.core.first.call(null,seq__15375_15408__$1);
var k_15415 = cljs.core.nth.call(null,vec__15391_15414,(0),null);
var cb_15416 = cljs.core.nth.call(null,vec__15391_15414,(1),null);
try{cb_15416.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e15394){var e_15417 = e15394;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_15415,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_15417);
}

var G__15418 = cljs.core.next.call(null,seq__15375_15408__$1);
var G__15419 = null;
var G__15420 = (0);
var G__15421 = (0);
seq__15375_15395 = G__15418;
chunk__15376_15396 = G__15419;
count__15377_15397 = G__15420;
i__15378_15398 = G__15421;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
