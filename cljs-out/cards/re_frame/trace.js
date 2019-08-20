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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__19195){
var map__19196 = p__19195;
var map__19196__$1 = (((((!((map__19196 == null))))?(((((map__19196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19196):map__19196);
var operation = cljs.core.get.call(null,map__19196__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__19196__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__19196__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__19196__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__19198_19218 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__19199_19219 = null;
var count__19200_19220 = (0);
var i__19201_19221 = (0);
while(true){
if((i__19201_19221 < count__19200_19220)){
var vec__19210_19222 = cljs.core._nth.call(null,chunk__19199_19219,i__19201_19221);
var k_19223 = cljs.core.nth.call(null,vec__19210_19222,(0),null);
var cb_19224 = cljs.core.nth.call(null,vec__19210_19222,(1),null);
try{cb_19224.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e19213){var e_19225 = e19213;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_19223,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_19225);
}

var G__19226 = seq__19198_19218;
var G__19227 = chunk__19199_19219;
var G__19228 = count__19200_19220;
var G__19229 = (i__19201_19221 + (1));
seq__19198_19218 = G__19226;
chunk__19199_19219 = G__19227;
count__19200_19220 = G__19228;
i__19201_19221 = G__19229;
continue;
} else {
var temp__5735__auto___19230 = cljs.core.seq.call(null,seq__19198_19218);
if(temp__5735__auto___19230){
var seq__19198_19231__$1 = temp__5735__auto___19230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19198_19231__$1)){
var c__4550__auto___19232 = cljs.core.chunk_first.call(null,seq__19198_19231__$1);
var G__19233 = cljs.core.chunk_rest.call(null,seq__19198_19231__$1);
var G__19234 = c__4550__auto___19232;
var G__19235 = cljs.core.count.call(null,c__4550__auto___19232);
var G__19236 = (0);
seq__19198_19218 = G__19233;
chunk__19199_19219 = G__19234;
count__19200_19220 = G__19235;
i__19201_19221 = G__19236;
continue;
} else {
var vec__19214_19237 = cljs.core.first.call(null,seq__19198_19231__$1);
var k_19238 = cljs.core.nth.call(null,vec__19214_19237,(0),null);
var cb_19239 = cljs.core.nth.call(null,vec__19214_19237,(1),null);
try{cb_19239.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e19217){var e_19240 = e19217;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_19238,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_19240);
}

var G__19241 = cljs.core.next.call(null,seq__19198_19231__$1);
var G__19242 = null;
var G__19243 = (0);
var G__19244 = (0);
seq__19198_19218 = G__19241;
chunk__19199_19219 = G__19242;
count__19200_19220 = G__19243;
i__19201_19221 = G__19244;
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
