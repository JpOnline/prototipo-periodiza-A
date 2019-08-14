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
var _STAR_current_trace_STAR__orig_val__33055 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33056 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33056;

try{try{var seq__33057 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33058 = null;
var count__33059 = (0);
var i__33060 = (0);
while(true){
if((i__33060 < count__33059)){
var vec__33067 = cljs.core._nth.call(null,chunk__33058,i__33060);
var effect_key = cljs.core.nth.call(null,vec__33067,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33067,(1),null);
var temp__5733__auto___33089 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33089)){
var effect_fn_33090 = temp__5733__auto___33089;
effect_fn_33090.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33091 = seq__33057;
var G__33092 = chunk__33058;
var G__33093 = count__33059;
var G__33094 = (i__33060 + (1));
seq__33057 = G__33091;
chunk__33058 = G__33092;
count__33059 = G__33093;
i__33060 = G__33094;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33057);
if(temp__5735__auto__){
var seq__33057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33057__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33057__$1);
var G__33095 = cljs.core.chunk_rest.call(null,seq__33057__$1);
var G__33096 = c__4550__auto__;
var G__33097 = cljs.core.count.call(null,c__4550__auto__);
var G__33098 = (0);
seq__33057 = G__33095;
chunk__33058 = G__33096;
count__33059 = G__33097;
i__33060 = G__33098;
continue;
} else {
var vec__33070 = cljs.core.first.call(null,seq__33057__$1);
var effect_key = cljs.core.nth.call(null,vec__33070,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33070,(1),null);
var temp__5733__auto___33099 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33099)){
var effect_fn_33100 = temp__5733__auto___33099;
effect_fn_33100.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33101 = cljs.core.next.call(null,seq__33057__$1);
var G__33102 = null;
var G__33103 = (0);
var G__33104 = (0);
seq__33057 = G__33101;
chunk__33058 = G__33102;
count__33059 = G__33103;
i__33060 = G__33104;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11601__auto___33105 = re_frame.interop.now.call(null);
var duration__11602__auto___33106 = (end__11601__auto___33105 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11602__auto___33106,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11601__auto___33105);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33055;
}} else {
var seq__33073 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33074 = null;
var count__33075 = (0);
var i__33076 = (0);
while(true){
if((i__33076 < count__33075)){
var vec__33083 = cljs.core._nth.call(null,chunk__33074,i__33076);
var effect_key = cljs.core.nth.call(null,vec__33083,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33083,(1),null);
var temp__5733__auto___33107 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33107)){
var effect_fn_33108 = temp__5733__auto___33107;
effect_fn_33108.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33109 = seq__33073;
var G__33110 = chunk__33074;
var G__33111 = count__33075;
var G__33112 = (i__33076 + (1));
seq__33073 = G__33109;
chunk__33074 = G__33110;
count__33075 = G__33111;
i__33076 = G__33112;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33073);
if(temp__5735__auto__){
var seq__33073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33073__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33073__$1);
var G__33113 = cljs.core.chunk_rest.call(null,seq__33073__$1);
var G__33114 = c__4550__auto__;
var G__33115 = cljs.core.count.call(null,c__4550__auto__);
var G__33116 = (0);
seq__33073 = G__33113;
chunk__33074 = G__33114;
count__33075 = G__33115;
i__33076 = G__33116;
continue;
} else {
var vec__33086 = cljs.core.first.call(null,seq__33073__$1);
var effect_key = cljs.core.nth.call(null,vec__33086,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33086,(1),null);
var temp__5733__auto___33117 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___33117)){
var effect_fn_33118 = temp__5733__auto___33117;
effect_fn_33118.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__33119 = cljs.core.next.call(null,seq__33073__$1);
var G__33120 = null;
var G__33121 = (0);
var G__33122 = (0);
seq__33073 = G__33119;
chunk__33074 = G__33120;
count__33075 = G__33121;
i__33076 = G__33122;
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
var seq__33123 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33124 = null;
var count__33125 = (0);
var i__33126 = (0);
while(true){
if((i__33126 < count__33125)){
var map__33131 = cljs.core._nth.call(null,chunk__33124,i__33126);
var map__33131__$1 = (((((!((map__33131 == null))))?(((((map__33131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33131):map__33131);
var effect = map__33131__$1;
var ms = cljs.core.get.call(null,map__33131__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33131__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33123,chunk__33124,count__33125,i__33126,map__33131,map__33131__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33123,chunk__33124,count__33125,i__33126,map__33131,map__33131__$1,effect,ms,dispatch))
,ms);
}


var G__33135 = seq__33123;
var G__33136 = chunk__33124;
var G__33137 = count__33125;
var G__33138 = (i__33126 + (1));
seq__33123 = G__33135;
chunk__33124 = G__33136;
count__33125 = G__33137;
i__33126 = G__33138;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33123);
if(temp__5735__auto__){
var seq__33123__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33123__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33123__$1);
var G__33139 = cljs.core.chunk_rest.call(null,seq__33123__$1);
var G__33140 = c__4550__auto__;
var G__33141 = cljs.core.count.call(null,c__4550__auto__);
var G__33142 = (0);
seq__33123 = G__33139;
chunk__33124 = G__33140;
count__33125 = G__33141;
i__33126 = G__33142;
continue;
} else {
var map__33133 = cljs.core.first.call(null,seq__33123__$1);
var map__33133__$1 = (((((!((map__33133 == null))))?(((((map__33133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33133):map__33133);
var effect = map__33133__$1;
var ms = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33133__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33123,chunk__33124,count__33125,i__33126,map__33133,map__33133__$1,effect,ms,dispatch,seq__33123__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33123,chunk__33124,count__33125,i__33126,map__33133,map__33133__$1,effect,ms,dispatch,seq__33123__$1,temp__5735__auto__))
,ms);
}


var G__33143 = cljs.core.next.call(null,seq__33123__$1);
var G__33144 = null;
var G__33145 = (0);
var G__33146 = (0);
seq__33123 = G__33143;
chunk__33124 = G__33144;
count__33125 = G__33145;
i__33126 = G__33146;
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
var seq__33147 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33148 = null;
var count__33149 = (0);
var i__33150 = (0);
while(true){
if((i__33150 < count__33149)){
var event = cljs.core._nth.call(null,chunk__33148,i__33150);
re_frame.router.dispatch.call(null,event);


var G__33151 = seq__33147;
var G__33152 = chunk__33148;
var G__33153 = count__33149;
var G__33154 = (i__33150 + (1));
seq__33147 = G__33151;
chunk__33148 = G__33152;
count__33149 = G__33153;
i__33150 = G__33154;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33147);
if(temp__5735__auto__){
var seq__33147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33147__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33147__$1);
var G__33155 = cljs.core.chunk_rest.call(null,seq__33147__$1);
var G__33156 = c__4550__auto__;
var G__33157 = cljs.core.count.call(null,c__4550__auto__);
var G__33158 = (0);
seq__33147 = G__33155;
chunk__33148 = G__33156;
count__33149 = G__33157;
i__33150 = G__33158;
continue;
} else {
var event = cljs.core.first.call(null,seq__33147__$1);
re_frame.router.dispatch.call(null,event);


var G__33159 = cljs.core.next.call(null,seq__33147__$1);
var G__33160 = null;
var G__33161 = (0);
var G__33162 = (0);
seq__33147 = G__33159;
chunk__33148 = G__33160;
count__33149 = G__33161;
i__33150 = G__33162;
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
var seq__33163 = cljs.core.seq.call(null,value);
var chunk__33164 = null;
var count__33165 = (0);
var i__33166 = (0);
while(true){
if((i__33166 < count__33165)){
var event = cljs.core._nth.call(null,chunk__33164,i__33166);
clear_event.call(null,event);


var G__33167 = seq__33163;
var G__33168 = chunk__33164;
var G__33169 = count__33165;
var G__33170 = (i__33166 + (1));
seq__33163 = G__33167;
chunk__33164 = G__33168;
count__33165 = G__33169;
i__33166 = G__33170;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33163);
if(temp__5735__auto__){
var seq__33163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33163__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33163__$1);
var G__33171 = cljs.core.chunk_rest.call(null,seq__33163__$1);
var G__33172 = c__4550__auto__;
var G__33173 = cljs.core.count.call(null,c__4550__auto__);
var G__33174 = (0);
seq__33163 = G__33171;
chunk__33164 = G__33172;
count__33165 = G__33173;
i__33166 = G__33174;
continue;
} else {
var event = cljs.core.first.call(null,seq__33163__$1);
clear_event.call(null,event);


var G__33175 = cljs.core.next.call(null,seq__33163__$1);
var G__33176 = null;
var G__33177 = (0);
var G__33178 = (0);
seq__33163 = G__33175;
chunk__33164 = G__33176;
count__33165 = G__33177;
i__33166 = G__33178;
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

//# sourceMappingURL=fx.js.map
