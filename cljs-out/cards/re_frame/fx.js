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
var _STAR_current_trace_STAR__orig_val__25103 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25104 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25104;

try{try{var seq__25105 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25106 = null;
var count__25107 = (0);
var i__25108 = (0);
while(true){
if((i__25108 < count__25107)){
var vec__25115 = cljs.core._nth.call(null,chunk__25106,i__25108);
var effect_key = cljs.core.nth.call(null,vec__25115,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25115,(1),null);
var temp__5733__auto___25137 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25137)){
var effect_fn_25138 = temp__5733__auto___25137;
effect_fn_25138.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25139 = seq__25105;
var G__25140 = chunk__25106;
var G__25141 = count__25107;
var G__25142 = (i__25108 + (1));
seq__25105 = G__25139;
chunk__25106 = G__25140;
count__25107 = G__25141;
i__25108 = G__25142;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25105);
if(temp__5735__auto__){
var seq__25105__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25105__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25105__$1);
var G__25143 = cljs.core.chunk_rest.call(null,seq__25105__$1);
var G__25144 = c__4550__auto__;
var G__25145 = cljs.core.count.call(null,c__4550__auto__);
var G__25146 = (0);
seq__25105 = G__25143;
chunk__25106 = G__25144;
count__25107 = G__25145;
i__25108 = G__25146;
continue;
} else {
var vec__25118 = cljs.core.first.call(null,seq__25105__$1);
var effect_key = cljs.core.nth.call(null,vec__25118,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25118,(1),null);
var temp__5733__auto___25147 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25147)){
var effect_fn_25148 = temp__5733__auto___25147;
effect_fn_25148.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25149 = cljs.core.next.call(null,seq__25105__$1);
var G__25150 = null;
var G__25151 = (0);
var G__25152 = (0);
seq__25105 = G__25149;
chunk__25106 = G__25150;
count__25107 = G__25151;
i__25108 = G__25152;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15350__auto___25153 = re_frame.interop.now.call(null);
var duration__15351__auto___25154 = (end__15350__auto___25153 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15351__auto___25154,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15350__auto___25153);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25103;
}} else {
var seq__25121 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25122 = null;
var count__25123 = (0);
var i__25124 = (0);
while(true){
if((i__25124 < count__25123)){
var vec__25131 = cljs.core._nth.call(null,chunk__25122,i__25124);
var effect_key = cljs.core.nth.call(null,vec__25131,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25131,(1),null);
var temp__5733__auto___25155 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25155)){
var effect_fn_25156 = temp__5733__auto___25155;
effect_fn_25156.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25157 = seq__25121;
var G__25158 = chunk__25122;
var G__25159 = count__25123;
var G__25160 = (i__25124 + (1));
seq__25121 = G__25157;
chunk__25122 = G__25158;
count__25123 = G__25159;
i__25124 = G__25160;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25121);
if(temp__5735__auto__){
var seq__25121__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25121__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25121__$1);
var G__25161 = cljs.core.chunk_rest.call(null,seq__25121__$1);
var G__25162 = c__4550__auto__;
var G__25163 = cljs.core.count.call(null,c__4550__auto__);
var G__25164 = (0);
seq__25121 = G__25161;
chunk__25122 = G__25162;
count__25123 = G__25163;
i__25124 = G__25164;
continue;
} else {
var vec__25134 = cljs.core.first.call(null,seq__25121__$1);
var effect_key = cljs.core.nth.call(null,vec__25134,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25134,(1),null);
var temp__5733__auto___25165 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___25165)){
var effect_fn_25166 = temp__5733__auto___25165;
effect_fn_25166.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25167 = cljs.core.next.call(null,seq__25121__$1);
var G__25168 = null;
var G__25169 = (0);
var G__25170 = (0);
seq__25121 = G__25167;
chunk__25122 = G__25168;
count__25123 = G__25169;
i__25124 = G__25170;
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
var seq__25171 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25172 = null;
var count__25173 = (0);
var i__25174 = (0);
while(true){
if((i__25174 < count__25173)){
var map__25179 = cljs.core._nth.call(null,chunk__25172,i__25174);
var map__25179__$1 = (((((!((map__25179 == null))))?(((((map__25179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25179):map__25179);
var effect = map__25179__$1;
var ms = cljs.core.get.call(null,map__25179__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25179__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25171,chunk__25172,count__25173,i__25174,map__25179,map__25179__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25171,chunk__25172,count__25173,i__25174,map__25179,map__25179__$1,effect,ms,dispatch))
,ms);
}


var G__25183 = seq__25171;
var G__25184 = chunk__25172;
var G__25185 = count__25173;
var G__25186 = (i__25174 + (1));
seq__25171 = G__25183;
chunk__25172 = G__25184;
count__25173 = G__25185;
i__25174 = G__25186;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25171);
if(temp__5735__auto__){
var seq__25171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25171__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25171__$1);
var G__25187 = cljs.core.chunk_rest.call(null,seq__25171__$1);
var G__25188 = c__4550__auto__;
var G__25189 = cljs.core.count.call(null,c__4550__auto__);
var G__25190 = (0);
seq__25171 = G__25187;
chunk__25172 = G__25188;
count__25173 = G__25189;
i__25174 = G__25190;
continue;
} else {
var map__25181 = cljs.core.first.call(null,seq__25171__$1);
var map__25181__$1 = (((((!((map__25181 == null))))?(((((map__25181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25181):map__25181);
var effect = map__25181__$1;
var ms = cljs.core.get.call(null,map__25181__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25181__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25171,chunk__25172,count__25173,i__25174,map__25181,map__25181__$1,effect,ms,dispatch,seq__25171__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25171,chunk__25172,count__25173,i__25174,map__25181,map__25181__$1,effect,ms,dispatch,seq__25171__$1,temp__5735__auto__))
,ms);
}


var G__25191 = cljs.core.next.call(null,seq__25171__$1);
var G__25192 = null;
var G__25193 = (0);
var G__25194 = (0);
seq__25171 = G__25191;
chunk__25172 = G__25192;
count__25173 = G__25193;
i__25174 = G__25194;
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
var seq__25195 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25196 = null;
var count__25197 = (0);
var i__25198 = (0);
while(true){
if((i__25198 < count__25197)){
var event = cljs.core._nth.call(null,chunk__25196,i__25198);
re_frame.router.dispatch.call(null,event);


var G__25199 = seq__25195;
var G__25200 = chunk__25196;
var G__25201 = count__25197;
var G__25202 = (i__25198 + (1));
seq__25195 = G__25199;
chunk__25196 = G__25200;
count__25197 = G__25201;
i__25198 = G__25202;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25195);
if(temp__5735__auto__){
var seq__25195__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25195__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25195__$1);
var G__25203 = cljs.core.chunk_rest.call(null,seq__25195__$1);
var G__25204 = c__4550__auto__;
var G__25205 = cljs.core.count.call(null,c__4550__auto__);
var G__25206 = (0);
seq__25195 = G__25203;
chunk__25196 = G__25204;
count__25197 = G__25205;
i__25198 = G__25206;
continue;
} else {
var event = cljs.core.first.call(null,seq__25195__$1);
re_frame.router.dispatch.call(null,event);


var G__25207 = cljs.core.next.call(null,seq__25195__$1);
var G__25208 = null;
var G__25209 = (0);
var G__25210 = (0);
seq__25195 = G__25207;
chunk__25196 = G__25208;
count__25197 = G__25209;
i__25198 = G__25210;
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
var seq__25211 = cljs.core.seq.call(null,value);
var chunk__25212 = null;
var count__25213 = (0);
var i__25214 = (0);
while(true){
if((i__25214 < count__25213)){
var event = cljs.core._nth.call(null,chunk__25212,i__25214);
clear_event.call(null,event);


var G__25215 = seq__25211;
var G__25216 = chunk__25212;
var G__25217 = count__25213;
var G__25218 = (i__25214 + (1));
seq__25211 = G__25215;
chunk__25212 = G__25216;
count__25213 = G__25217;
i__25214 = G__25218;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25211);
if(temp__5735__auto__){
var seq__25211__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25211__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25211__$1);
var G__25219 = cljs.core.chunk_rest.call(null,seq__25211__$1);
var G__25220 = c__4550__auto__;
var G__25221 = cljs.core.count.call(null,c__4550__auto__);
var G__25222 = (0);
seq__25211 = G__25219;
chunk__25212 = G__25220;
count__25213 = G__25221;
i__25214 = G__25222;
continue;
} else {
var event = cljs.core.first.call(null,seq__25211__$1);
clear_event.call(null,event);


var G__25223 = cljs.core.next.call(null,seq__25211__$1);
var G__25224 = null;
var G__25225 = (0);
var G__25226 = (0);
seq__25211 = G__25223;
chunk__25212 = G__25224;
count__25213 = G__25225;
i__25214 = G__25226;
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
