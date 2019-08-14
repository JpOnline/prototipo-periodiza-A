// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__28938 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28939 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28939;

try{try{var seq__28940 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28941 = null;
var count__28942 = (0);
var i__28943 = (0);
while(true){
if((i__28943 < count__28942)){
var vec__28950 = cljs.core._nth.call(null,chunk__28941,i__28943);
var effect_key = cljs.core.nth.call(null,vec__28950,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28950,(1),null);
var temp__5733__auto___28972 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28972)){
var effect_fn_28973 = temp__5733__auto___28972;
effect_fn_28973.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28974 = seq__28940;
var G__28975 = chunk__28941;
var G__28976 = count__28942;
var G__28977 = (i__28943 + (1));
seq__28940 = G__28974;
chunk__28941 = G__28975;
count__28942 = G__28976;
i__28943 = G__28977;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28940);
if(temp__5735__auto__){
var seq__28940__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28940__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28940__$1);
var G__28978 = cljs.core.chunk_rest.call(null,seq__28940__$1);
var G__28979 = c__4550__auto__;
var G__28980 = cljs.core.count.call(null,c__4550__auto__);
var G__28981 = (0);
seq__28940 = G__28978;
chunk__28941 = G__28979;
count__28942 = G__28980;
i__28943 = G__28981;
continue;
} else {
var vec__28953 = cljs.core.first.call(null,seq__28940__$1);
var effect_key = cljs.core.nth.call(null,vec__28953,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28953,(1),null);
var temp__5733__auto___28982 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28982)){
var effect_fn_28983 = temp__5733__auto___28982;
effect_fn_28983.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28984 = cljs.core.next.call(null,seq__28940__$1);
var G__28985 = null;
var G__28986 = (0);
var G__28987 = (0);
seq__28940 = G__28984;
chunk__28941 = G__28985;
count__28942 = G__28986;
i__28943 = G__28987;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14277__auto___28988 = re_frame.interop.now.call(null);
var duration__14278__auto___28989 = (end__14277__auto___28988 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14278__auto___28989,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__14277__auto___28988);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28938;
}} else {
var seq__28956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28957 = null;
var count__28958 = (0);
var i__28959 = (0);
while(true){
if((i__28959 < count__28958)){
var vec__28966 = cljs.core._nth.call(null,chunk__28957,i__28959);
var effect_key = cljs.core.nth.call(null,vec__28966,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28966,(1),null);
var temp__5733__auto___28990 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28990)){
var effect_fn_28991 = temp__5733__auto___28990;
effect_fn_28991.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28992 = seq__28956;
var G__28993 = chunk__28957;
var G__28994 = count__28958;
var G__28995 = (i__28959 + (1));
seq__28956 = G__28992;
chunk__28957 = G__28993;
count__28958 = G__28994;
i__28959 = G__28995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28956);
if(temp__5735__auto__){
var seq__28956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28956__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28956__$1);
var G__28996 = cljs.core.chunk_rest.call(null,seq__28956__$1);
var G__28997 = c__4550__auto__;
var G__28998 = cljs.core.count.call(null,c__4550__auto__);
var G__28999 = (0);
seq__28956 = G__28996;
chunk__28957 = G__28997;
count__28958 = G__28998;
i__28959 = G__28999;
continue;
} else {
var vec__28969 = cljs.core.first.call(null,seq__28956__$1);
var effect_key = cljs.core.nth.call(null,vec__28969,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28969,(1),null);
var temp__5733__auto___29000 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___29000)){
var effect_fn_29001 = temp__5733__auto___29000;
effect_fn_29001.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__29002 = cljs.core.next.call(null,seq__28956__$1);
var G__29003 = null;
var G__29004 = (0);
var G__29005 = (0);
seq__28956 = G__29002;
chunk__28957 = G__29003;
count__28958 = G__29004;
i__28959 = G__29005;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__29006 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__29007 = null;
var count__29008 = (0);
var i__29009 = (0);
while(true){
if((i__29009 < count__29008)){
var map__29014 = cljs.core._nth.call(null,chunk__29007,i__29009);
var map__29014__$1 = (((((!((map__29014 == null))))?(((((map__29014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29014):map__29014);
var effect = map__29014__$1;
var ms = cljs.core.get.call(null,map__29014__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29014__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29006,chunk__29007,count__29008,i__29009,map__29014,map__29014__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__29006,chunk__29007,count__29008,i__29009,map__29014,map__29014__$1,effect,ms,dispatch))
,ms);
}


var G__29018 = seq__29006;
var G__29019 = chunk__29007;
var G__29020 = count__29008;
var G__29021 = (i__29009 + (1));
seq__29006 = G__29018;
chunk__29007 = G__29019;
count__29008 = G__29020;
i__29009 = G__29021;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29006);
if(temp__5735__auto__){
var seq__29006__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29006__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29006__$1);
var G__29022 = cljs.core.chunk_rest.call(null,seq__29006__$1);
var G__29023 = c__4550__auto__;
var G__29024 = cljs.core.count.call(null,c__4550__auto__);
var G__29025 = (0);
seq__29006 = G__29022;
chunk__29007 = G__29023;
count__29008 = G__29024;
i__29009 = G__29025;
continue;
} else {
var map__29016 = cljs.core.first.call(null,seq__29006__$1);
var map__29016__$1 = (((((!((map__29016 == null))))?(((((map__29016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29016):map__29016);
var effect = map__29016__$1;
var ms = cljs.core.get.call(null,map__29016__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29016__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29006,chunk__29007,count__29008,i__29009,map__29016,map__29016__$1,effect,ms,dispatch,seq__29006__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__29006,chunk__29007,count__29008,i__29009,map__29016,map__29016__$1,effect,ms,dispatch,seq__29006__$1,temp__5735__auto__))
,ms);
}


var G__29026 = cljs.core.next.call(null,seq__29006__$1);
var G__29027 = null;
var G__29028 = (0);
var G__29029 = (0);
seq__29006 = G__29026;
chunk__29007 = G__29027;
count__29008 = G__29028;
i__29009 = G__29029;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__29030 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__29031 = null;
var count__29032 = (0);
var i__29033 = (0);
while(true){
if((i__29033 < count__29032)){
var event = cljs.core._nth.call(null,chunk__29031,i__29033);
re_frame.router.dispatch.call(null,event);


var G__29034 = seq__29030;
var G__29035 = chunk__29031;
var G__29036 = count__29032;
var G__29037 = (i__29033 + (1));
seq__29030 = G__29034;
chunk__29031 = G__29035;
count__29032 = G__29036;
i__29033 = G__29037;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29030);
if(temp__5735__auto__){
var seq__29030__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29030__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29030__$1);
var G__29038 = cljs.core.chunk_rest.call(null,seq__29030__$1);
var G__29039 = c__4550__auto__;
var G__29040 = cljs.core.count.call(null,c__4550__auto__);
var G__29041 = (0);
seq__29030 = G__29038;
chunk__29031 = G__29039;
count__29032 = G__29040;
i__29033 = G__29041;
continue;
} else {
var event = cljs.core.first.call(null,seq__29030__$1);
re_frame.router.dispatch.call(null,event);


var G__29042 = cljs.core.next.call(null,seq__29030__$1);
var G__29043 = null;
var G__29044 = (0);
var G__29045 = (0);
seq__29030 = G__29042;
chunk__29031 = G__29043;
count__29032 = G__29044;
i__29033 = G__29045;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__29046 = cljs.core.seq.call(null,value);
var chunk__29047 = null;
var count__29048 = (0);
var i__29049 = (0);
while(true){
if((i__29049 < count__29048)){
var event = cljs.core._nth.call(null,chunk__29047,i__29049);
clear_event.call(null,event);


var G__29050 = seq__29046;
var G__29051 = chunk__29047;
var G__29052 = count__29048;
var G__29053 = (i__29049 + (1));
seq__29046 = G__29050;
chunk__29047 = G__29051;
count__29048 = G__29052;
i__29049 = G__29053;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29046);
if(temp__5735__auto__){
var seq__29046__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29046__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29046__$1);
var G__29054 = cljs.core.chunk_rest.call(null,seq__29046__$1);
var G__29055 = c__4550__auto__;
var G__29056 = cljs.core.count.call(null,c__4550__auto__);
var G__29057 = (0);
seq__29046 = G__29054;
chunk__29047 = G__29055;
count__29048 = G__29056;
i__29049 = G__29057;
continue;
} else {
var event = cljs.core.first.call(null,seq__29046__$1);
clear_event.call(null,event);


var G__29058 = cljs.core.next.call(null,seq__29046__$1);
var G__29059 = null;
var G__29060 = (0);
var G__29061 = (0);
seq__29046 = G__29058;
chunk__29047 = G__29059;
count__29048 = G__29060;
i__29049 = G__29061;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
