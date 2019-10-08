// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson048$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__16851_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__16851_SHARP_));
});
if((!(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_))){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__5735__auto___16852 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5735__auto___16852)){
var not_i_16853 = temp__5735__auto___16852;
if(cljs.core.fn_QMARK_.call(null,not_i_16853)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_16853);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_16853);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson048.re_frame.v0v10v2.re_frame.events.register = (function mranderson048$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,id,mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.handle = (function mranderson048$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__5733__auto__ = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5733__auto__)){
var interceptors = temp__5733__auto__;
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR__orig_val__16854 = mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__16855 = event_v;
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__16855;

try{if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__16856 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16857 = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson048.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16857;

try{try{return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16815__auto___16878 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__16816__auto___16879 = (end__16815__auto___16878 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__16858_16880 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__16859_16881 = null;
var count__16860_16882 = (0);
var i__16861_16883 = (0);
while(true){
if((i__16861_16883 < count__16860_16882)){
var vec__16870_16884 = cljs.core._nth.call(null,chunk__16859_16881,i__16861_16883);
var k__16817__auto___16885 = cljs.core.nth.call(null,vec__16870_16884,(0),null);
var cb__16818__auto___16886 = cljs.core.nth.call(null,vec__16870_16884,(1),null);
try{cb__16818__auto___16886.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16816__auto___16879,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e16873){if((e16873 instanceof java.lang.Exception)){
var e__16819__auto___16887 = e16873;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__16817__auto___16885,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__16819__auto___16887);
} else {
throw e16873;

}
}

var G__16888 = seq__16858_16880;
var G__16889 = chunk__16859_16881;
var G__16890 = count__16860_16882;
var G__16891 = (i__16861_16883 + (1));
seq__16858_16880 = G__16888;
chunk__16859_16881 = G__16889;
count__16860_16882 = G__16890;
i__16861_16883 = G__16891;
continue;
} else {
var temp__5735__auto___16892 = cljs.core.seq.call(null,seq__16858_16880);
if(temp__5735__auto___16892){
var seq__16858_16893__$1 = temp__5735__auto___16892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16858_16893__$1)){
var c__4550__auto___16894 = cljs.core.chunk_first.call(null,seq__16858_16893__$1);
var G__16895 = cljs.core.chunk_rest.call(null,seq__16858_16893__$1);
var G__16896 = c__4550__auto___16894;
var G__16897 = cljs.core.count.call(null,c__4550__auto___16894);
var G__16898 = (0);
seq__16858_16880 = G__16895;
chunk__16859_16881 = G__16896;
count__16860_16882 = G__16897;
i__16861_16883 = G__16898;
continue;
} else {
var vec__16874_16899 = cljs.core.first.call(null,seq__16858_16893__$1);
var k__16817__auto___16900 = cljs.core.nth.call(null,vec__16874_16899,(0),null);
var cb__16818__auto___16901 = cljs.core.nth.call(null,vec__16874_16899,(1),null);
try{cb__16818__auto___16901.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16816__auto___16879,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e16877){if((e16877 instanceof java.lang.Exception)){
var e__16819__auto___16902 = e16877;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__16817__auto___16900,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__16819__auto___16902);
} else {
throw e16877;

}
}

var G__16903 = cljs.core.next.call(null,seq__16858_16893__$1);
var G__16904 = null;
var G__16905 = (0);
var G__16906 = (0);
seq__16858_16880 = G__16903;
chunk__16859_16881 = G__16904;
count__16860_16882 = G__16905;
i__16861_16883 = G__16906;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16856;
}} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__16854;
}}
} else {
return null;
}
});
