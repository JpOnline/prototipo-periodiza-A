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
var _STAR_current_trace_STAR__orig_val__28926 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28927 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28927;

try{try{var seq__28928 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28929 = null;
var count__28930 = (0);
var i__28931 = (0);
while(true){
if((i__28931 < count__28930)){
var vec__28938 = cljs.core._nth.call(null,chunk__28929,i__28931);
var effect_key = cljs.core.nth.call(null,vec__28938,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28938,(1),null);
var temp__5733__auto___28960 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28960)){
var effect_fn_28961 = temp__5733__auto___28960;
effect_fn_28961.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28962 = seq__28928;
var G__28963 = chunk__28929;
var G__28964 = count__28930;
var G__28965 = (i__28931 + (1));
seq__28928 = G__28962;
chunk__28929 = G__28963;
count__28930 = G__28964;
i__28931 = G__28965;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28928);
if(temp__5735__auto__){
var seq__28928__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28928__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28928__$1);
var G__28966 = cljs.core.chunk_rest.call(null,seq__28928__$1);
var G__28967 = c__4550__auto__;
var G__28968 = cljs.core.count.call(null,c__4550__auto__);
var G__28969 = (0);
seq__28928 = G__28966;
chunk__28929 = G__28967;
count__28930 = G__28968;
i__28931 = G__28969;
continue;
} else {
var vec__28941 = cljs.core.first.call(null,seq__28928__$1);
var effect_key = cljs.core.nth.call(null,vec__28941,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28941,(1),null);
var temp__5733__auto___28970 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28970)){
var effect_fn_28971 = temp__5733__auto___28970;
effect_fn_28971.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28972 = cljs.core.next.call(null,seq__28928__$1);
var G__28973 = null;
var G__28974 = (0);
var G__28975 = (0);
seq__28928 = G__28972;
chunk__28929 = G__28973;
count__28930 = G__28974;
i__28931 = G__28975;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__19173__auto___28976 = re_frame.interop.now.call(null);
var duration__19174__auto___28977 = (end__19173__auto___28976 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19174__auto___28977,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__19173__auto___28976);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28926;
}} else {
var seq__28944 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__28945 = null;
var count__28946 = (0);
var i__28947 = (0);
while(true){
if((i__28947 < count__28946)){
var vec__28954 = cljs.core._nth.call(null,chunk__28945,i__28947);
var effect_key = cljs.core.nth.call(null,vec__28954,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28954,(1),null);
var temp__5733__auto___28978 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28978)){
var effect_fn_28979 = temp__5733__auto___28978;
effect_fn_28979.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28980 = seq__28944;
var G__28981 = chunk__28945;
var G__28982 = count__28946;
var G__28983 = (i__28947 + (1));
seq__28944 = G__28980;
chunk__28945 = G__28981;
count__28946 = G__28982;
i__28947 = G__28983;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28944);
if(temp__5735__auto__){
var seq__28944__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28944__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28944__$1);
var G__28984 = cljs.core.chunk_rest.call(null,seq__28944__$1);
var G__28985 = c__4550__auto__;
var G__28986 = cljs.core.count.call(null,c__4550__auto__);
var G__28987 = (0);
seq__28944 = G__28984;
chunk__28945 = G__28985;
count__28946 = G__28986;
i__28947 = G__28987;
continue;
} else {
var vec__28957 = cljs.core.first.call(null,seq__28944__$1);
var effect_key = cljs.core.nth.call(null,vec__28957,(0),null);
var effect_value = cljs.core.nth.call(null,vec__28957,(1),null);
var temp__5733__auto___28988 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28988)){
var effect_fn_28989 = temp__5733__auto___28988;
effect_fn_28989.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__28990 = cljs.core.next.call(null,seq__28944__$1);
var G__28991 = null;
var G__28992 = (0);
var G__28993 = (0);
seq__28944 = G__28990;
chunk__28945 = G__28991;
count__28946 = G__28992;
i__28947 = G__28993;
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
var seq__28994 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__28995 = null;
var count__28996 = (0);
var i__28997 = (0);
while(true){
if((i__28997 < count__28996)){
var map__29002 = cljs.core._nth.call(null,chunk__28995,i__28997);
var map__29002__$1 = (((((!((map__29002 == null))))?(((((map__29002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29002):map__29002);
var effect = map__29002__$1;
var ms = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28994,chunk__28995,count__28996,i__28997,map__29002,map__29002__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28994,chunk__28995,count__28996,i__28997,map__29002,map__29002__$1,effect,ms,dispatch))
,ms);
}


var G__29006 = seq__28994;
var G__29007 = chunk__28995;
var G__29008 = count__28996;
var G__29009 = (i__28997 + (1));
seq__28994 = G__29006;
chunk__28995 = G__29007;
count__28996 = G__29008;
i__28997 = G__29009;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28994);
if(temp__5735__auto__){
var seq__28994__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28994__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28994__$1);
var G__29010 = cljs.core.chunk_rest.call(null,seq__28994__$1);
var G__29011 = c__4550__auto__;
var G__29012 = cljs.core.count.call(null,c__4550__auto__);
var G__29013 = (0);
seq__28994 = G__29010;
chunk__28995 = G__29011;
count__28996 = G__29012;
i__28997 = G__29013;
continue;
} else {
var map__29004 = cljs.core.first.call(null,seq__28994__$1);
var map__29004__$1 = (((((!((map__29004 == null))))?(((((map__29004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29004):map__29004);
var effect = map__29004__$1;
var ms = cljs.core.get.call(null,map__29004__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29004__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28994,chunk__28995,count__28996,i__28997,map__29004,map__29004__$1,effect,ms,dispatch,seq__28994__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28994,chunk__28995,count__28996,i__28997,map__29004,map__29004__$1,effect,ms,dispatch,seq__28994__$1,temp__5735__auto__))
,ms);
}


var G__29014 = cljs.core.next.call(null,seq__28994__$1);
var G__29015 = null;
var G__29016 = (0);
var G__29017 = (0);
seq__28994 = G__29014;
chunk__28995 = G__29015;
count__28996 = G__29016;
i__28997 = G__29017;
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
var seq__29018 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__29019 = null;
var count__29020 = (0);
var i__29021 = (0);
while(true){
if((i__29021 < count__29020)){
var event = cljs.core._nth.call(null,chunk__29019,i__29021);
re_frame.router.dispatch.call(null,event);


var G__29022 = seq__29018;
var G__29023 = chunk__29019;
var G__29024 = count__29020;
var G__29025 = (i__29021 + (1));
seq__29018 = G__29022;
chunk__29019 = G__29023;
count__29020 = G__29024;
i__29021 = G__29025;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29018);
if(temp__5735__auto__){
var seq__29018__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29018__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29018__$1);
var G__29026 = cljs.core.chunk_rest.call(null,seq__29018__$1);
var G__29027 = c__4550__auto__;
var G__29028 = cljs.core.count.call(null,c__4550__auto__);
var G__29029 = (0);
seq__29018 = G__29026;
chunk__29019 = G__29027;
count__29020 = G__29028;
i__29021 = G__29029;
continue;
} else {
var event = cljs.core.first.call(null,seq__29018__$1);
re_frame.router.dispatch.call(null,event);


var G__29030 = cljs.core.next.call(null,seq__29018__$1);
var G__29031 = null;
var G__29032 = (0);
var G__29033 = (0);
seq__29018 = G__29030;
chunk__29019 = G__29031;
count__29020 = G__29032;
i__29021 = G__29033;
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
var seq__29034 = cljs.core.seq.call(null,value);
var chunk__29035 = null;
var count__29036 = (0);
var i__29037 = (0);
while(true){
if((i__29037 < count__29036)){
var event = cljs.core._nth.call(null,chunk__29035,i__29037);
clear_event.call(null,event);


var G__29038 = seq__29034;
var G__29039 = chunk__29035;
var G__29040 = count__29036;
var G__29041 = (i__29037 + (1));
seq__29034 = G__29038;
chunk__29035 = G__29039;
count__29036 = G__29040;
i__29037 = G__29041;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29034);
if(temp__5735__auto__){
var seq__29034__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29034__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29034__$1);
var G__29042 = cljs.core.chunk_rest.call(null,seq__29034__$1);
var G__29043 = c__4550__auto__;
var G__29044 = cljs.core.count.call(null,c__4550__auto__);
var G__29045 = (0);
seq__29034 = G__29042;
chunk__29035 = G__29043;
count__29036 = G__29044;
i__29037 = G__29045;
continue;
} else {
var event = cljs.core.first.call(null,seq__29034__$1);
clear_event.call(null,event);


var G__29046 = cljs.core.next.call(null,seq__29034__$1);
var G__29047 = null;
var G__29048 = (0);
var G__29049 = (0);
seq__29034 = G__29046;
chunk__29035 = G__29047;
count__29036 = G__29048;
i__29037 = G__29049;
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
