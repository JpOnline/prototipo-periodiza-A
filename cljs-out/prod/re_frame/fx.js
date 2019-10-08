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
var _STAR_current_trace_STAR__orig_val__22624 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22625 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22625;

try{try{var seq__22626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22627 = null;
var count__22628 = (0);
var i__22629 = (0);
while(true){
if((i__22629 < count__22628)){
var vec__22636 = cljs.core._nth.call(null,chunk__22627,i__22629);
var effect_key = cljs.core.nth.call(null,vec__22636,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22636,(1),null);
var temp__5733__auto___22658 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22658)){
var effect_fn_22659 = temp__5733__auto___22658;
effect_fn_22659.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22660 = seq__22626;
var G__22661 = chunk__22627;
var G__22662 = count__22628;
var G__22663 = (i__22629 + (1));
seq__22626 = G__22660;
chunk__22627 = G__22661;
count__22628 = G__22662;
i__22629 = G__22663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22626);
if(temp__5735__auto__){
var seq__22626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22626__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22626__$1);
var G__22664 = cljs.core.chunk_rest.call(null,seq__22626__$1);
var G__22665 = c__4550__auto__;
var G__22666 = cljs.core.count.call(null,c__4550__auto__);
var G__22667 = (0);
seq__22626 = G__22664;
chunk__22627 = G__22665;
count__22628 = G__22666;
i__22629 = G__22667;
continue;
} else {
var vec__22639 = cljs.core.first.call(null,seq__22626__$1);
var effect_key = cljs.core.nth.call(null,vec__22639,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22639,(1),null);
var temp__5733__auto___22668 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22668)){
var effect_fn_22669 = temp__5733__auto___22668;
effect_fn_22669.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22670 = cljs.core.next.call(null,seq__22626__$1);
var G__22671 = null;
var G__22672 = (0);
var G__22673 = (0);
seq__22626 = G__22670;
chunk__22627 = G__22671;
count__22628 = G__22672;
i__22629 = G__22673;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22247__auto___22674 = re_frame.interop.now.call(null);
var duration__22248__auto___22675 = (end__22247__auto___22674 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22248__auto___22675,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22247__auto___22674);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22624;
}} else {
var seq__22642 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22643 = null;
var count__22644 = (0);
var i__22645 = (0);
while(true){
if((i__22645 < count__22644)){
var vec__22652 = cljs.core._nth.call(null,chunk__22643,i__22645);
var effect_key = cljs.core.nth.call(null,vec__22652,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22652,(1),null);
var temp__5733__auto___22676 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22676)){
var effect_fn_22677 = temp__5733__auto___22676;
effect_fn_22677.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22678 = seq__22642;
var G__22679 = chunk__22643;
var G__22680 = count__22644;
var G__22681 = (i__22645 + (1));
seq__22642 = G__22678;
chunk__22643 = G__22679;
count__22644 = G__22680;
i__22645 = G__22681;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22642);
if(temp__5735__auto__){
var seq__22642__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22642__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22642__$1);
var G__22682 = cljs.core.chunk_rest.call(null,seq__22642__$1);
var G__22683 = c__4550__auto__;
var G__22684 = cljs.core.count.call(null,c__4550__auto__);
var G__22685 = (0);
seq__22642 = G__22682;
chunk__22643 = G__22683;
count__22644 = G__22684;
i__22645 = G__22685;
continue;
} else {
var vec__22655 = cljs.core.first.call(null,seq__22642__$1);
var effect_key = cljs.core.nth.call(null,vec__22655,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22655,(1),null);
var temp__5733__auto___22686 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22686)){
var effect_fn_22687 = temp__5733__auto___22686;
effect_fn_22687.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22688 = cljs.core.next.call(null,seq__22642__$1);
var G__22689 = null;
var G__22690 = (0);
var G__22691 = (0);
seq__22642 = G__22688;
chunk__22643 = G__22689;
count__22644 = G__22690;
i__22645 = G__22691;
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
var seq__22692 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22693 = null;
var count__22694 = (0);
var i__22695 = (0);
while(true){
if((i__22695 < count__22694)){
var map__22700 = cljs.core._nth.call(null,chunk__22693,i__22695);
var map__22700__$1 = (((((!((map__22700 == null))))?(((((map__22700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22700):map__22700);
var effect = map__22700__$1;
var ms = cljs.core.get.call(null,map__22700__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22700__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22692,chunk__22693,count__22694,i__22695,map__22700,map__22700__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22692,chunk__22693,count__22694,i__22695,map__22700,map__22700__$1,effect,ms,dispatch))
,ms);
}


var G__22704 = seq__22692;
var G__22705 = chunk__22693;
var G__22706 = count__22694;
var G__22707 = (i__22695 + (1));
seq__22692 = G__22704;
chunk__22693 = G__22705;
count__22694 = G__22706;
i__22695 = G__22707;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22692);
if(temp__5735__auto__){
var seq__22692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22692__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22692__$1);
var G__22708 = cljs.core.chunk_rest.call(null,seq__22692__$1);
var G__22709 = c__4550__auto__;
var G__22710 = cljs.core.count.call(null,c__4550__auto__);
var G__22711 = (0);
seq__22692 = G__22708;
chunk__22693 = G__22709;
count__22694 = G__22710;
i__22695 = G__22711;
continue;
} else {
var map__22702 = cljs.core.first.call(null,seq__22692__$1);
var map__22702__$1 = (((((!((map__22702 == null))))?(((((map__22702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22702):map__22702);
var effect = map__22702__$1;
var ms = cljs.core.get.call(null,map__22702__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22702__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22692,chunk__22693,count__22694,i__22695,map__22702,map__22702__$1,effect,ms,dispatch,seq__22692__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22692,chunk__22693,count__22694,i__22695,map__22702,map__22702__$1,effect,ms,dispatch,seq__22692__$1,temp__5735__auto__))
,ms);
}


var G__22712 = cljs.core.next.call(null,seq__22692__$1);
var G__22713 = null;
var G__22714 = (0);
var G__22715 = (0);
seq__22692 = G__22712;
chunk__22693 = G__22713;
count__22694 = G__22714;
i__22695 = G__22715;
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
var seq__22716 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22717 = null;
var count__22718 = (0);
var i__22719 = (0);
while(true){
if((i__22719 < count__22718)){
var event = cljs.core._nth.call(null,chunk__22717,i__22719);
re_frame.router.dispatch.call(null,event);


var G__22720 = seq__22716;
var G__22721 = chunk__22717;
var G__22722 = count__22718;
var G__22723 = (i__22719 + (1));
seq__22716 = G__22720;
chunk__22717 = G__22721;
count__22718 = G__22722;
i__22719 = G__22723;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22716);
if(temp__5735__auto__){
var seq__22716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22716__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22716__$1);
var G__22724 = cljs.core.chunk_rest.call(null,seq__22716__$1);
var G__22725 = c__4550__auto__;
var G__22726 = cljs.core.count.call(null,c__4550__auto__);
var G__22727 = (0);
seq__22716 = G__22724;
chunk__22717 = G__22725;
count__22718 = G__22726;
i__22719 = G__22727;
continue;
} else {
var event = cljs.core.first.call(null,seq__22716__$1);
re_frame.router.dispatch.call(null,event);


var G__22728 = cljs.core.next.call(null,seq__22716__$1);
var G__22729 = null;
var G__22730 = (0);
var G__22731 = (0);
seq__22716 = G__22728;
chunk__22717 = G__22729;
count__22718 = G__22730;
i__22719 = G__22731;
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
var seq__22732 = cljs.core.seq.call(null,value);
var chunk__22733 = null;
var count__22734 = (0);
var i__22735 = (0);
while(true){
if((i__22735 < count__22734)){
var event = cljs.core._nth.call(null,chunk__22733,i__22735);
clear_event.call(null,event);


var G__22736 = seq__22732;
var G__22737 = chunk__22733;
var G__22738 = count__22734;
var G__22739 = (i__22735 + (1));
seq__22732 = G__22736;
chunk__22733 = G__22737;
count__22734 = G__22738;
i__22735 = G__22739;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22732);
if(temp__5735__auto__){
var seq__22732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22732__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22732__$1);
var G__22740 = cljs.core.chunk_rest.call(null,seq__22732__$1);
var G__22741 = c__4550__auto__;
var G__22742 = cljs.core.count.call(null,c__4550__auto__);
var G__22743 = (0);
seq__22732 = G__22740;
chunk__22733 = G__22741;
count__22734 = G__22742;
i__22735 = G__22743;
continue;
} else {
var event = cljs.core.first.call(null,seq__22732__$1);
clear_event.call(null,event);


var G__22744 = cljs.core.next.call(null,seq__22732__$1);
var G__22745 = null;
var G__22746 = (0);
var G__22747 = (0);
seq__22732 = G__22744;
chunk__22733 = G__22745;
count__22734 = G__22746;
i__22735 = G__22747;
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
