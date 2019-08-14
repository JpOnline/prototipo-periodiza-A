// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('pr4.app_state');
goog.require('pr4.util');
goog.require('pr4.periodization');
goog.require('tick.alpha.api');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","initialize-app-state","pr4.events/initialize-app-state",-1875868992),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("app-state","default-app-state","app-state/default-app-state",-2138567374,null));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.app_state.default_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("app-state","default-app-state","app-state/default-app-state",-2138567374,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34280){var e = e34280;
throw e;
}}):(function (_,___$1){
return pr4.app_state.default_app_state;
})));
pr4.events.change_selected_range = (function pr4$events$change_selected_range(neg_QMARK__pos_QMARK_,default$){
return (function (app_state){
var vec__34283 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var sel_start = cljs.core.nth.call(null,vec__34283,(0),null);
var sel_end = cljs.core.nth.call(null,vec__34283,(1),null);
var updated_increment_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null),((function (vec__34283,sel_start,sel_end){
return (function (p1__34281_SHARP_){
if(cljs.core.truth_(neg_QMARK__pos_QMARK_.call(null,p1__34281_SHARP_))){
return (p1__34281_SHARP_ * (2));
} else {
return default$;
}
});})(vec__34283,sel_start,sel_end))
);
var amount_to_sum = cljs.core.get_in.call(null,updated_increment_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null));
var new_end = (sel_end + amount_to_sum);
var sessions_count = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
var corrected_end = (((new_end <= sel_start))?(sel_start + (1)):(((new_end > sessions_count))?sessions_count:new_end
));
return cljs.core.update_in.call(null,updated_increment_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (vec__34283,sel_start,sel_end,updated_increment_state,amount_to_sum,new_end,sessions_count,corrected_end){
return (function (p1__34282_SHARP_){
return cljs.core.update.call(null,p1__34282_SHARP_,(1),cljs.core.constantly.call(null,corrected_end));
});})(vec__34283,sel_start,sel_end,updated_increment_state,amount_to_sum,new_end,sessions_count,corrected_end))
);
});
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","decrease-selected-range","pr4.events/decrease-selected-range",-532870732),pr4.events.change_selected_range.call(null,cljs.core.neg_QMARK_,(-1)));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","increase-selected-range","pr4.events/increase-selected-range",199933605),pr4.events.change_selected_range.call(null,cljs.core.pos_QMARK_,(1)));
pr4.events.explode_micros = (function pr4$events$explode_micros(micros){
var val = cljs.core.PersistentVector.EMPTY;
var current = cljs.core.first.call(null,micros);
var coll = cljs.core.rest.call(null,micros);
var current_idx = (0);
while(true){
if((current == null)){
return cljs.core.butlast.call(null,val);
} else {
if(cljs.core._EQ_.call(null,current_idx,(current - (1)))){
var G__34286 = cljs.core.into.call(null,val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_idx,new cljs.core.Keyword(null,"m","m",1632677161)], null));
var G__34287 = cljs.core.first.call(null,coll);
var G__34288 = cljs.core.rest.call(null,coll);
var G__34289 = (current_idx + (1));
val = G__34286;
current = G__34287;
coll = G__34288;
current_idx = G__34289;
continue;
} else {
var G__34290 = cljs.core.conj.call(null,val,current_idx);
var G__34291 = current;
var G__34292 = coll;
var G__34293 = (current_idx + (1));
val = G__34290;
current = G__34291;
coll = G__34292;
current_idx = G__34293;
continue;

}
}
break;
}
});
pr4.events.implode_micros = (function pr4$events$implode_micros(exploded_micros){
var val = cljs.core.PersistentVector.EMPTY;
var previous = null;
var current = cljs.core.first.call(null,exploded_micros);
var coll = cljs.core.rest.call(null,exploded_micros);
var current_idx = (0);
while(true){
if((current == null)){
return cljs.core.conj.call(null,val,current_idx);
} else {
if(cljs.core._EQ_.call(null,current,previous,new cljs.core.Keyword(null,"m","m",1632677161))){
var G__34294 = val;
var G__34295 = current;
var G__34296 = cljs.core.first.call(null,coll);
var G__34297 = cljs.core.rest.call(null,coll);
var G__34298 = current_idx;
val = G__34294;
previous = G__34295;
current = G__34296;
coll = G__34297;
current_idx = G__34298;
continue;
} else {
if(cljs.core._EQ_.call(null,current,new cljs.core.Keyword(null,"m","m",1632677161))){
var G__34299 = cljs.core.conj.call(null,val,current_idx);
var G__34300 = current;
var G__34301 = cljs.core.first.call(null,coll);
var G__34302 = cljs.core.rest.call(null,coll);
var G__34303 = current_idx;
val = G__34299;
previous = G__34300;
current = G__34301;
coll = G__34302;
current_idx = G__34303;
continue;
} else {
var G__34304 = val;
var G__34305 = current;
var G__34306 = cljs.core.first.call(null,coll);
var G__34307 = cljs.core.rest.call(null,coll);
var G__34308 = (current_idx + (1));
val = G__34304;
previous = G__34305;
current = G__34306;
coll = G__34307;
current_idx = G__34308;
continue;

}
}
}
break;
}
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.delete_selected_sessions = (function pr4$events$delete_selected_sessions(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"events/delete-selected-sessions: Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"events/delete-selected-sessions: Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null)))))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions_count = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.count.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var indexes_to_keep = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = clojure.set.difference.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.set.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.range.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = sessions_count;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.set.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.apply.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__34309_SHARP_){
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.map.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.partial.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.nth;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = p1__34309_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__34309#","p1__34309#",-1018402310,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__34309#","p1__34309#",-1018402310,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = indexes_to_keep;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__34309#","p1__34309#",-1018402310,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34309#","p1__34309#",-1018402310,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__34309#","p1__34309#",-1018402310,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34309#","p1__34309#",-1018402310,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__34309#","p1__34309#",-1018402310,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null)))),(2)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__34310_SHARP_){
return debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null),(3),pr4.events.implode_micros.call(null,debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),(4),cljs.core.remove.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.set.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.apply.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),(5),pr4.events.explode_micros.call(null,debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"p1__34310#","p1__34310#",-248907190,null),(6),p1__34310_SHARP_)))))));
});})(opts__34113__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34310#","p1__34310#",-248907190,null)], null),cljs.core.list(new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),cljs.core.list(new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),new cljs.core.Symbol(null,"p1__34310#","p1__34310#",-248907190,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34310#","p1__34310#",-248907190,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"p1__34310#","p1__34310#",-248907190,null),new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34310#","p1__34310#",-248907190,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"p1__34310#","p1__34310#",-248907190,null),new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34311){var e = e34311;
throw e;
}})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"events/delete-selected-sessions: Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"events/delete-selected-sessions: Returned an invalid app-state\")"));
}

return _PERCENT_;
});
} else {
pr4.events.delete_selected_sessions = (function pr4$events$delete_selected_sessions(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"events/delete-selected-sessions: Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"events/delete-selected-sessions: Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var sessions_count = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var indexes_to_keep = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.range.call(null,sessions_count)),cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.range,session_sel)));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),((function (sessions_count,session_sel,indexes_to_keep){
return (function (p1__34309_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,p1__34309_SHARP_),indexes_to_keep);
});})(sessions_count,session_sel,indexes_to_keep))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),((function (sessions_count,session_sel,indexes_to_keep){
return (function (p1__34310_SHARP_){
return pr4.events.implode_micros.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.range,session_sel)),pr4.events.explode_micros.call(null,p1__34310_SHARP_)));
});})(sessions_count,session_sel,indexes_to_keep))
);
})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"events/delete-selected-sessions: Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"events/delete-selected-sessions: Returned an invalid app-state\")"));
}

return _PERCENT_;
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","delete-selected-sessions","pr4.events/delete-selected-sessions",246616778),pr4.events.delete_selected_sessions);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.duplicate_selected_sessions = (function pr4$events$duplicate_selected_sessions(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)], null),cljs.core.list(new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null))], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var selected_sessions = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.util.select_indexes.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var vec__34313 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.split_at.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.second.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var before = cljs.core.nth.call(null,vec__34313,(0),null);
var after = cljs.core.nth.call(null,vec__34313,(1),null);
var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.concat.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = before;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selected_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = after;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)], null),cljs.core.list(new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null))], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34312){var e = e34312;
throw e;
}})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
} else {
pr4.events.duplicate_selected_sessions = (function pr4$events$duplicate_selected_sessions(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var selected_sessions = pr4.util.select_indexes.call(null,sessions,session_sel);
var vec__34316 = cljs.core.split_at.call(null,cljs.core.second.call(null,session_sel),sessions);
var before = cljs.core.nth.call(null,vec__34316,(0),null);
var after = cljs.core.nth.call(null,vec__34316,(1),null);
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.concat.call(null,before,selected_sessions,after));
})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","duplicate-selected-sessions","pr4.events/duplicate-selected-sessions",2056027331),pr4.events.duplicate_selected_sessions);
/**
 * E.g.
 *   (chop-coll [0 1 2 3 4 5 6 7 8 9] [3 7])
 *   => [(0 1) (2) (3 4 5 6) (7) (8 9)]
 */
pr4.events.chop_coll = (function pr4$events$chop_coll(coll,selection){
var vec__34319 = cljs.core.split_at.call(null,cljs.core.first.call(null,selection),coll);
var temp = cljs.core.nth.call(null,vec__34319,(0),null);
var rest = cljs.core.nth.call(null,vec__34319,(1),null);
var vec__34322 = cljs.core.split_at.call(null,(cljs.core.count.call(null,temp) - (1)),temp);
var s1 = cljs.core.nth.call(null,vec__34322,(0),null);
var s2 = cljs.core.nth.call(null,vec__34322,(1),null);
var vec__34325 = cljs.core.split_at.call(null,cljs.core.apply.call(null,cljs.core._,cljs.core.reverse.call(null,selection)),rest);
var s3 = cljs.core.nth.call(null,vec__34325,(0),null);
var rest__$1 = cljs.core.nth.call(null,vec__34325,(1),null);
var vec__34328 = cljs.core.split_at.call(null,(1),rest__$1);
var s4 = cljs.core.nth.call(null,vec__34328,(0),null);
var rest__$2 = cljs.core.nth.call(null,vec__34328,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,s2,s3,s4,rest__$2], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_sessions_right = (function pr4$events$move_sessions_right(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null)))))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var vec__34333 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var s1 = cljs.core.nth.call(null,vec__34333,(0),null);
var s2 = cljs.core.nth.call(null,vec__34333,(1),null);
var s3 = cljs.core.nth.call(null,vec__34333,(2),null);
var s4 = cljs.core.nth.call(null,vec__34333,(3),null);
var r = cljs.core.nth.call(null,vec__34333,(4),null);
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.concat.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s4;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s3;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = r;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),(2)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,sessions,session_sel,vec__34333,s1,s2,s3,s4,r,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__34331_SHARP_){
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.mapv.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.partial.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = p1__34331_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,sessions,session_sel,vec__34333,s1,s2,s3,s4,r,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34331#","p1__34331#",393067047,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34332){var e = e34332;
throw e;
}})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
} else {
pr4.events.move_sessions_right = (function pr4$events$move_sessions_right(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var vec__34336 = pr4.events.chop_coll.call(null,sessions,session_sel);
var s1 = cljs.core.nth.call(null,vec__34336,(0),null);
var s2 = cljs.core.nth.call(null,vec__34336,(1),null);
var s3 = cljs.core.nth.call(null,vec__34336,(2),null);
var s4 = cljs.core.nth.call(null,vec__34336,(3),null);
var r = cljs.core.nth.call(null,vec__34336,(4),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.concat.call(null,s1,s2,s4,s3,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (sessions,session_sel,vec__34336,s1,s2,s3,s4,r){
return (function (p1__34331_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.inc),p1__34331_SHARP_);
});})(sessions,session_sel,vec__34336,s1,s2,s3,s4,r))
);
})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
}
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_sessions_left = (function pr4$events$move_sessions_left(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null)))))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var vec__34341 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var s1 = cljs.core.nth.call(null,vec__34341,(0),null);
var s2 = cljs.core.nth.call(null,vec__34341,(1),null);
var s3 = cljs.core.nth.call(null,vec__34341,(2),null);
var s4 = cljs.core.nth.call(null,vec__34341,(3),null);
var r = cljs.core.nth.call(null,vec__34341,(4),null);
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.concat.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s3;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = s4;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = r;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),(2)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,sessions,session_sel,vec__34341,s1,s2,s3,s4,r,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__34339_SHARP_){
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.mapv.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.partial.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.dec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = p1__34339_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,sessions,session_sel,vec__34341,s1,s2,s3,s4,r,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34339#","p1__34339#",-240081251,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34340){var e = e34340;
throw e;
}})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
} else {
pr4.events.move_sessions_left = (function pr4$events$move_sessions_left(app_state){
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var vec__34344 = pr4.events.chop_coll.call(null,sessions,session_sel);
var s1 = cljs.core.nth.call(null,vec__34344,(0),null);
var s2 = cljs.core.nth.call(null,vec__34344,(1),null);
var s3 = cljs.core.nth.call(null,vec__34344,(2),null);
var s4 = cljs.core.nth.call(null,vec__34344,(3),null);
var r = cljs.core.nth.call(null,vec__34344,(4),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.concat.call(null,s1,s3,s2,s4,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (sessions,session_sel,vec__34344,s1,s2,s3,s4,r){
return (function (p1__34339_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.dec),p1__34339_SHARP_);
});})(sessions,session_sel,vec__34344,s1,s2,s3,s4,r))
);
})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-sessions-left","pr4.events/move-sessions-left",-364668232),pr4.events.move_sessions_left);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-sessions-right","pr4.events/move-sessions-right",411726822),pr4.events.move_sessions_right);
pr4.events.change_reps_range = (function pr4$events$change_reps_range(comparator){
return (function (app_state){
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var reps_max_updator = ((function (session_sel,veced_app_state){
return (function (session){
return cljs.core.assoc.call(null,session,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),comparator.call(null,session));
});})(session_sel,veced_app_state))
;
var update_fn = ((function (session_sel,veced_app_state,reps_max_updator){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),reps_max_updator);
});})(session_sel,veced_app_state,reps_max_updator))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
});
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143),pr4.events.change_reps_range.call(null,(function (p__34347){
var map__34348 = p__34347;
var map__34348__$1 = (((((!((map__34348 == null))))?(((((map__34348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34348):map__34348);
var reps_max = cljs.core.get.call(null,map__34348__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__34348__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
if(cljs.core._EQ_.call(null,reps_max,reps_min)){
return reps_max;
} else {
return (reps_max - (1));
}
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855),pr4.events.change_reps_range.call(null,(function (p__34350){
var map__34351 = p__34350;
var map__34351__$1 = (((((!((map__34351 == null))))?(((((map__34351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34351):map__34351);
var reps_max = cljs.core.get.call(null,map__34351__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__34351__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
if(cljs.core._EQ_.call(null,reps_max,(30))){
return reps_max;
} else {
return (reps_max + (1));
}
})));
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.reps_slider_change = (function pr4$events$reps_slider_change(app_state,p__34353){
var vec__34354 = p__34353;
var event = cljs.core.nth.call(null,vec__34354,(0),null);
var min = cljs.core.nth.call(null,vec__34354,(1),null);
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var last_selected = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.last.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.util.select_indexes.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var diff = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})() - (function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var new_min = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})() + (function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})() > (30));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})())?(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})():(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var new_max = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})() + (function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var veced_app_state = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var update_fn = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34354,event,min){
return (function (app_state__$1,idx){
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state__$1,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(5)),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null)),(4)),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_max;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null)),(3));
});})(opts__34113__auto____$1,sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34354,event,min))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.reduce.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.apply.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34357){var e = e34357;
throw e;
}})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
} else {
pr4.events.reps_slider_change = (function pr4$events$reps_slider_change(app_state,p__34358){
var vec__34359 = p__34358;
var event = cljs.core.nth.call(null,vec__34359,(0),null);
var min = cljs.core.nth.call(null,vec__34359,(1),null);
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var last_selected = cljs.core.last.call(null,pr4.util.select_indexes.call(null,sessions,session_sel));
var diff = (last_selected.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)) - last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)));
var new_min = ((((diff + min) > (30)))?last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)):min);
var new_max = (new_min + diff);
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,vec__34359,event,min){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new_min),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new_max);
});})(sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,vec__34359,event,min))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),pr4.events.reps_slider_change);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.total_sets_changed = (function pr4$events$total_sets_changed(app_state,p__34362){
var vec__34363 = p__34362;
var event = cljs.core.nth.call(null,vec__34363,(0),null);
var new_val = cljs.core.nth.call(null,vec__34363,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var veced_app_state = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var update_fn = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,sessions,session_sel,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34363,event,new_val){
return (function (app_state__$1,idx){
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,sessions,session_sel,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34363,event,new_val))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.reduce.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.apply.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34366){var e = e34366;
throw e;
}});
} else {
pr4.events.total_sets_changed = (function pr4$events$total_sets_changed(app_state,p__34367){
var vec__34368 = p__34367;
var event = cljs.core.nth.call(null,vec__34368,(0),null);
var new_val = cljs.core.nth.call(null,vec__34368,(1),null);
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (sessions,session_sel,veced_app_state,vec__34368,event,new_val){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new_val);
});})(sessions,session_sel,veced_app_state,vec__34368,event,new_val))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),pr4.events.total_sets_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.rest_slider_changed = (function pr4$events$rest_slider_changed(app_state,p__34371){
var vec__34372 = p__34371;
var event = cljs.core.nth.call(null,vec__34372,(0),null);
var new_val = cljs.core.nth.call(null,vec__34372,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var veced_app_state = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var update_fn = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,sessions,session_sel,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34372,event,new_val){
return (function (app_state__$1,idx){
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,sessions,session_sel,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34372,event,new_val))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.reduce.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.apply.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34375){var e = e34375;
throw e;
}});
} else {
pr4.events.rest_slider_changed = (function pr4$events$rest_slider_changed(app_state,p__34376){
var vec__34377 = p__34376;
var event = cljs.core.nth.call(null,vec__34377,(0),null);
var new_val = cljs.core.nth.call(null,vec__34377,(1),null);
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (sessions,session_sel,veced_app_state,vec__34377,event,new_val){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new_val);
});})(sessions,session_sel,veced_app_state,vec__34377,event,new_val))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),pr4.events.rest_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_sel_slider_changed = (function pr4$events$session_sel_slider_changed(app_state,p__34380){
var vec__34381 = p__34380;
var event = cljs.core.nth.call(null,vec__34381,(0),null);
var start = cljs.core.nth.call(null,vec__34381,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var sessions_count = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.count.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var vec__34385 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var selected_start = cljs.core.nth.call(null,vec__34385,(0),null);
var selected_end = cljs.core.nth.call(null,vec__34385,(1),null);
var diff = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selected_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})() - (function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selected_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var new_start = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})() + (function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})() > (function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = sessions_count;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})())?(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selected_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})():(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var new_end = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})() + (function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(0),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),(2)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(1),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34384){var e = e34384;
throw e;
}});
} else {
pr4.events.session_sel_slider_changed = (function pr4$events$session_sel_slider_changed(app_state,p__34388){
var vec__34389 = p__34388;
var event = cljs.core.nth.call(null,vec__34389,(0),null);
var start = cljs.core.nth.call(null,vec__34389,(1),null);
var sessions_count = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
var vec__34392 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var selected_start = cljs.core.nth.call(null,vec__34392,(0),null);
var selected_end = cljs.core.nth.call(null,vec__34392,(1),null);
var diff = (selected_end - selected_start);
var new_start = ((((diff + start) > sessions_count))?selected_start:start);
var new_end = (new_start + diff);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(0),new_start),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(1),new_end);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-sel-slider-changed","pr4.events/session-sel-slider-changed",-423555165),pr4.events.session_sel_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.microcycles_sel_slider_changed = (function pr4$events$microcycles_sel_slider_changed(app_state,p__34395){
var vec__34396 = p__34395;
var event = cljs.core.nth.call(null,vec__34396,(0),null);
var start = cljs.core.nth.call(null,vec__34396,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var microcycles = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var new_end = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.nth.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var new_start = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.nth.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})() - (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(0));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(0),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),(2)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(1),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34399){var e = e34399;
throw e;
}});
} else {
pr4.events.microcycles_sel_slider_changed = (function pr4$events$microcycles_sel_slider_changed(app_state,p__34400){
var vec__34401 = p__34400;
var event = cljs.core.nth.call(null,vec__34401,(0),null);
var start = cljs.core.nth.call(null,vec__34401,(1),null);
var microcycles = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null));
var new_end = cljs.core.nth.call(null,microcycles,start);
var new_start = cljs.core.nth.call(null,microcycles,(start - (1)),(0));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(0),new_start),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(1),new_end);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","microcycles-sel-slider-changed","pr4.events/microcycles-sel-slider-changed",1289237402),pr4.events.microcycles_sel_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.update_sessions_by_model = (function pr4$events$update_sessions_by_model(app_state,p__34406){
var vec__34407 = p__34406;
var event = cljs.core.nth.call(null,vec__34407,(0),null);
var chosen_model_name = cljs.core.nth.call(null,vec__34407,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null)),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null)))))),new cljs.core.Symbol(null,"first","first",996428481,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var chosen_micros_models = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.filter.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$2,opts__34113__auto____$1,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34407,event,chosen_model_name){
return (function (p1__34404_SHARP_){
return debux.common.util.spy_first.call(null,cljs.core.partial.call(null,cljs.core._EQ_,chosen_model_name).call(null,debux.common.util.spy_first.call(null,cljs.core.val.call(null,debux.common.util.spy_first.call(null,p1__34404_SHARP_,new cljs.core.Symbol(null,"p1__34404#","p1__34404#",-1615830025,null),(6))),new cljs.core.Symbol(null,"val","val",1769233139,null),(5))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))),(4));
});})(opts__34113__auto____$2,opts__34113__auto____$1,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34407,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34404#","p1__34404#",-1615830025,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.periodization.micros_models;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34404#","p1__34404#",-1615830025,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var vec__34411 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var session_sel_start = cljs.core.nth.call(null,vec__34411,(0),null);
var session_sel_end = cljs.core.nth.call(null,vec__34411,(1),null);
var sel_sessions_count = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})() - (function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var chosen_model = debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"first","first",996428481,null),(2),cljs.core.first.call(null,debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34405#","p1__34405#",1496529422,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__34405#","p1__34405#",1496529422,null),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null)))))),(3),cljs.core.filter.call(null,(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,chosen_micros_models,vec__34411,session_sel_start,session_sel_end,sel_sessions_count,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34407,event,chosen_model_name){
return (function (p1__34405_SHARP_){
return debux.common.util.spy_first.call(null,cljs.core.partial.call(null,cljs.core._EQ_,sel_sessions_count).call(null,debux.common.util.spy_first.call(null,cljs.core.count.call(null,debux.common.util.spy_first.call(null,p1__34405_SHARP_,new cljs.core.Symbol(null,"p1__34405#","p1__34405#",1496529422,null),(7))),new cljs.core.Symbol(null,"count","count",-514511684,null),(6))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))),(5));
});})(opts__34113__auto____$1,chosen_micros_models,vec__34411,session_sel_start,session_sel_end,sel_sessions_count,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34407,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34405#","p1__34405#",1496529422,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(4),cljs.core.map.call(null,(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),(5),chosen_micros_models)))))));
var veced_app_state = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var update_fn = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,chosen_micros_models,vec__34411,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34407,event,chosen_model_name){
return (function (app_state__$1,idx){
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.merge;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.nth.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = chosen_model;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__34114__auto__;
})() - (function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,chosen_micros_models,vec__34411,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__34407,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.reduce.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.range.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = session_sel_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34404#","p1__34404#",-1615830025,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34405#","p1__34405#",1496529422,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null)))),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34410){var e = e34410;
throw e;
}});
} else {
pr4.events.update_sessions_by_model = (function pr4$events$update_sessions_by_model(app_state,p__34414){
var vec__34415 = p__34414;
var event = cljs.core.nth.call(null,vec__34415,(0),null);
var chosen_model_name = cljs.core.nth.call(null,vec__34415,(1),null);
var chosen_micros_models = cljs.core.filter.call(null,((function (vec__34415,event,chosen_model_name){
return (function (p1__34404_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,chosen_model_name).call(null,cljs.core.val.call(null,p1__34404_SHARP_));
});})(vec__34415,event,chosen_model_name))
,pr4.periodization.micros_models);
var vec__34418 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var session_sel_start = cljs.core.nth.call(null,vec__34418,(0),null);
var session_sel_end = cljs.core.nth.call(null,vec__34418,(1),null);
var sel_sessions_count = (session_sel_end - session_sel_start);
var chosen_model = cljs.core.first.call(null,cljs.core.filter.call(null,((function (chosen_micros_models,vec__34418,session_sel_start,session_sel_end,sel_sessions_count,vec__34415,event,chosen_model_name){
return (function (p1__34405_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,sel_sessions_count).call(null,cljs.core.count.call(null,p1__34405_SHARP_));
});})(chosen_micros_models,vec__34418,session_sel_start,session_sel_end,sel_sessions_count,vec__34415,event,chosen_model_name))
,cljs.core.map.call(null,cljs.core.first,chosen_micros_models)));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (chosen_micros_models,vec__34418,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,vec__34415,event,chosen_model_name){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.merge,cljs.core.nth.call(null,chosen_model,(idx - session_sel_start)));
});})(chosen_micros_models,vec__34418,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,vec__34415,event,chosen_model_name))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.range.call(null,session_sel_start,session_sel_end));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","update-sessions-by-model","pr4.events/update-sessions-by-model",-392885995),pr4.events.update_sessions_by_model);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_calendar_sel_left = (function pr4$events$move_calendar_sel_left(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null))))))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var map__34423 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var map__34423__$1 = (((((!((map__34423 == null))))?(((((map__34423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34423):map__34423);
var first_day = cljs.core.get.call(null,map__34423__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__34423__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var vec__34424 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selection;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var begin = cljs.core.nth.call(null,vec__34424,(0),null);
var one_left = cljs.core.nth.call(null,vec__34424,(1),null);
var selected = cljs.core.nth.call(null,vec__34424,(2),null);
var one_right = cljs.core.nth.call(null,vec__34424,(3),null);
var the_rest = cljs.core.nth.call(null,vec__34424,(4),null);
var previous_day = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = tick.alpha.api._.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = tick.alpha.api.date.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = first_day;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var opts__34113__auto___34433__$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto___34434 = (((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (!((function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.empty_QMARK_.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.first.call(null,(function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})())?(function(){throw cljs.core.ex_info.call(null,"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),one_left], null))})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto___34434,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (!((function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.map_QMARK_.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.first.call(null,(function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})())?(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"calendar","calendar",62308146),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),previous_day,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),one_right,the_rest)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})():debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(4)),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"days","days",-1394072564),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.concat.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = begin;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selected;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = one_right;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = the_rest;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),(3)),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$2,opts__34113__auto____$1,map__34423,map__34423__$1,first_day,days,selection,vec__34424,begin,one_left,selected,one_right,the_rest,previous_day,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__34421_SHARP_){
var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.mapv.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.partial.call(null,(function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.dec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = p1__34421_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
});})(opts__34113__auto____$2,opts__34113__auto____$1,map__34423,map__34423__$1,first_day,days,selection,vec__34424,begin,one_left,selected,one_right,the_rest,previous_day,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null)))),(2)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__34421#","p1__34421#",-1586803068,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34422){var e = e34422;
throw e;
}});
} else {
pr4.events.move_calendar_sel_left = (function pr4$events$move_calendar_sel_left(app_state){
var map__34428 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null));
var map__34428__$1 = (((((!((map__34428 == null))))?(((((map__34428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34428):map__34428);
var first_day = cljs.core.get.call(null,map__34428__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__34428__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var vec__34429 = pr4.events.chop_coll.call(null,days,selection);
var begin = cljs.core.nth.call(null,vec__34429,(0),null);
var one_left = cljs.core.nth.call(null,vec__34429,(1),null);
var selected = cljs.core.nth.call(null,vec__34429,(2),null);
var one_right = cljs.core.nth.call(null,vec__34429,(3),null);
var the_rest = cljs.core.nth.call(null,vec__34429,(4),null);
var previous_day = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api._.call(null,tick.alpha.api.date.call(null,first_day),tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564))));
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,one_left))))){
throw cljs.core.ex_info.call(null,"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),one_left], null));
} else {
}

if((!(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,one_left))))){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),previous_day,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),one_right,the_rest)], null));
} else {
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.assoc,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,begin,selected,one_left,one_right,the_rest)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),((function (map__34428,map__34428__$1,first_day,days,selection,vec__34429,begin,one_left,selected,one_right,the_rest,previous_day){
return (function (p1__34421_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.dec),p1__34421_SHARP_);
});})(map__34428,map__34428__$1,first_day,days,selection,vec__34429,begin,one_left,selected,one_right,the_rest,previous_day))
);
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-calendar-sel-left","pr4.events/move-calendar-sel-left",-180215541),pr4.events.move_calendar_sel_left);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_calendar_sel_right = (function pr4$events$move_calendar_sel_right(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null)))))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (function (){var map__34437 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var map__34437__$1 = (((((!((map__34437 == null))))?(((((map__34437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34437):map__34437);
var days = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.get_in.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var vec__34438 = (function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selection;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})();
var begin = cljs.core.nth.call(null,vec__34438,(0),null);
var one_left = cljs.core.nth.call(null,vec__34438,(1),null);
var selected = cljs.core.nth.call(null,vec__34438,(2),null);
var one_right = cljs.core.nth.call(null,vec__34438,(3),null);
var the_rest = cljs.core.nth.call(null,vec__34438,(4),null);
var opts__34113__auto___34447__$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto___34448 = (((function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (!((function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.empty_QMARK_.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.first.call(null,(function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = one_right;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})())?(function(){throw cljs.core.ex_info.call(null,"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),one_right], null))})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto___34448,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"days","days",-1394072564),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.concat.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = begin;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = selected;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = the_rest;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),(2)),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,map__34437,map__34437__$1,days,selection,vec__34438,begin,one_left,selected,one_right,the_rest,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__34435_SHARP_){
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.mapv.call(null,(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.partial.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = p1__34435_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,map__34437,map__34437__$1,days,selection,vec__34438,begin,one_left,selected,one_right,the_rest,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__34435#","p1__34435#",-2128983688,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34436){var e = e34436;
throw e;
}});
} else {
pr4.events.move_calendar_sel_right = (function pr4$events$move_calendar_sel_right(app_state){
var map__34442 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null));
var map__34442__$1 = (((((!((map__34442 == null))))?(((((map__34442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34442):map__34442);
var days = cljs.core.get.call(null,map__34442__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var vec__34443 = pr4.events.chop_coll.call(null,days,selection);
var begin = cljs.core.nth.call(null,vec__34443,(0),null);
var one_left = cljs.core.nth.call(null,vec__34443,(1),null);
var selected = cljs.core.nth.call(null,vec__34443,(2),null);
var one_right = cljs.core.nth.call(null,vec__34443,(3),null);
var the_rest = cljs.core.nth.call(null,vec__34443,(4),null);
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,one_right))))){
throw cljs.core.ex_info.call(null,"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),one_right], null));
} else {
}

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.assoc,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,begin,one_left,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),selected,the_rest)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),((function (map__34442,map__34442__$1,days,selection,vec__34443,begin,one_left,selected,one_right,the_rest){
return (function (p1__34435_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.inc),p1__34435_SHARP_);
});})(map__34442,map__34442__$1,days,selection,vec__34443,begin,one_left,selected,one_right,the_rest))
);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-calendar-sel-right","pr4.events/move-calendar-sel-right",-1182109671),pr4.events.move_calendar_sel_right);
pr4.events.push_days_to_right = (function pr4$events$push_days_to_right(to_add,the_rest){
var G__34455 = to_add;
var vec__34457 = G__34455;
var seq__34458 = cljs.core.seq.call(null,vec__34457);
var first__34459 = cljs.core.first.call(null,seq__34458);
var seq__34458__$1 = cljs.core.next.call(null,seq__34458);
var f_to_add = first__34459;
var to_add__$1 = seq__34458__$1;
var G__34456 = the_rest;
var vec__34460 = G__34456;
var seq__34461 = cljs.core.seq.call(null,vec__34460);
var first__34462 = cljs.core.first.call(null,seq__34461);
var seq__34461__$1 = cljs.core.next.call(null,seq__34461);
var f_coll = first__34462;
var coll = seq__34461__$1;
var added = cljs.core.PersistentVector.EMPTY;
var G__34455__$1 = G__34455;
var G__34456__$1 = G__34456;
var added__$1 = added;
while(true){
var vec__34469 = G__34455__$1;
var seq__34470 = cljs.core.seq.call(null,vec__34469);
var first__34471 = cljs.core.first.call(null,seq__34470);
var seq__34470__$1 = cljs.core.next.call(null,seq__34470);
var f_to_add__$1 = first__34471;
var to_add__$2 = seq__34470__$1;
var vec__34472 = G__34456__$1;
var seq__34473 = cljs.core.seq.call(null,vec__34472);
var first__34474 = cljs.core.first.call(null,seq__34473);
var seq__34473__$1 = cljs.core.next.call(null,seq__34473);
var f_coll__$1 = first__34474;
var coll__$1 = seq__34473__$1;
var added__$2 = added__$1;
if((((f_to_add__$1 == null)) && ((f_coll__$1 == null)))){
return added__$2;
} else {
if((f_to_add__$1 == null)){
return cljs.core.concat.call(null,added__$2,cljs.core.cons.call(null,f_coll__$1,coll__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"session-idx","session-idx",1467570168).cljs$core$IFn$_invoke$arity$1(f_coll__$1))){
var G__34475 = cljs.core.conj.call(null,cljs.core.vec.call(null,to_add__$2),f_coll__$1);
var G__34476 = coll__$1;
var G__34477 = cljs.core.conj.call(null,added__$2,f_to_add__$1);
G__34455__$1 = G__34475;
G__34456__$1 = G__34476;
added__$1 = G__34477;
continue;
} else {
var G__34478 = to_add__$2;
var G__34479 = coll__$1;
var G__34480 = cljs.core.conj.call(null,added__$2,f_to_add__$1);
G__34455__$1 = G__34478;
G__34456__$1 = G__34479;
added__$1 = G__34480;
continue;

}
}
}
break;
}
});
pr4.events.update_absent = (function pr4$events$update_absent(app_state){
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var days = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"days","days",-1394072564)], null));
var vec__34482 = pr4.events.chop_coll.call(null,days,selection);
var s1 = cljs.core.nth.call(null,vec__34482,(0),null);
var s2 = cljs.core.nth.call(null,vec__34482,(1),null);
var selected_days = cljs.core.nth.call(null,vec__34482,(2),null);
var s3 = cljs.core.nth.call(null,vec__34482,(3),null);
var the_rest = cljs.core.nth.call(null,vec__34482,(4),null);
var absences = cljs.core.map.call(null,((function (selection,days,vec__34482,s1,s2,selected_days,s3,the_rest){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absent?","absent?",1101710978),true], null));
});})(selection,days,vec__34482,s1,s2,selected_days,s3,the_rest))
,selected_days);
var selected_days_with_info = cljs.core.remove.call(null,((function (selection,days,vec__34482,s1,s2,selected_days,s3,the_rest,absences){
return (function (p1__34481_SHARP_){
return cljs.core.empty_QMARK_.call(null,p1__34481_SHARP_);
});})(selection,days,vec__34482,s1,s2,selected_days,s3,the_rest,absences))
,selected_days);
var pushed_rest = pr4.events.push_days_to_right.call(null,selected_days_with_info,cljs.core.concat.call(null,s3,the_rest));
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.assoc,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,s1,s2,absences,pushed_rest));
});
pr4.events.update_not_absent = (function pr4$events$update_not_absent(app_state){
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"days","days",-1394072564)], null),cljs.core.vec);
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var update_fn = ((function (veced_app_state,selection){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"days","days",-1394072564),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"absent?","absent?",1101710978),false);
});})(veced_app_state,selection))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,selection));
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.toggled_absent = (function pr4$events$toggled_absent(app_state,p__34485){
var vec__34486 = p__34485;
var event = cljs.core.nth.call(null,vec__34486,(0),null);
var absent_QMARK_ = cljs.core.nth.call(null,vec__34486,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (cljs.core.truth_((function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = absent_QMARK_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})())?(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.events.update_absent.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})():(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = pr4.events.update_not_absent.call(null,(function (){var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34489){var e = e34489;
throw e;
}});
} else {
pr4.events.toggled_absent = (function pr4$events$toggled_absent(app_state,p__34490){
var vec__34491 = p__34490;
var event = cljs.core.nth.call(null,vec__34491,(0),null);
var absent_QMARK_ = cljs.core.nth.call(null,vec__34491,(1),null);
if(cljs.core.truth_(absent_QMARK_)){
return pr4.events.update_absent.call(null,app_state);
} else {
return pr4.events.update_not_absent.call(null,app_state);
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","toggled-absent","pr4.events/toggled-absent",-1111391280),pr4.events.toggled_absent);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.toggle_multiple_calendar_selection = (function pr4$events$toggle_multiple_calendar_selection(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null)))));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update_in.call(null,(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (opts__34113__auto____$1,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p__34495){
var vec__34496 = p__34495;
var day_s = cljs.core.nth.call(null,vec__34496,(0),null);
var day_e = cljs.core.nth.call(null,vec__34496,(1),null);
var opts__34113__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = (((function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core._EQ_.call(null,(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = day_e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})() - (function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})())?(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = day_e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})() + (2));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})():(function (){var opts__34113__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})(),(function (){var opts__34113__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = ((function (){var opts__34113__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__34114__auto__;
})() + (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__34114__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__34114__auto__;
});})(opts__34113__auto____$1,opts__34113__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34494){var e = e34494;
throw e;
}});
} else {
pr4.events.toggle_multiple_calendar_selection = (function pr4$events$toggle_multiple_calendar_selection(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),(function (p__34499){
var vec__34500 = p__34499;
var day_s = cljs.core.nth.call(null,vec__34500,(0),null);
var day_e = cljs.core.nth.call(null,vec__34500,(1),null);
if(cljs.core._EQ_.call(null,(day_e - day_s),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day_s,(day_e + (2))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day_s,(day_s + (1))], null);
}
}));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","toggle-multiple-calendar-selection","pr4.events/toggle-multiple-calendar-selection",-731597265),pr4.events.toggle_multiple_calendar_selection);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.reset_calendar_selection = (function pr4$events$reset_calendar_selection(app_state,p__34503){
var vec__34504 = p__34503;
var event = cljs.core.nth.call(null,vec__34504,(0),null);
var new_val = cljs.core.nth.call(null,vec__34504,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)));

var opts__34113__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.update.call(null,(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})(),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),(function (){var opts__34113__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__34114__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__34114__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__34114__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__34114__auto__;
}catch (e34507){var e = e34507;
throw e;
}});
} else {
pr4.events.reset_calendar_selection = (function pr4$events$reset_calendar_selection(app_state,p__34508){
var vec__34509 = p__34508;
var event = cljs.core.nth.call(null,vec__34509,(0),null);
var new_val = cljs.core.nth.call(null,vec__34509,(1),null);
return cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new_val);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),pr4.events.reset_calendar_selection);

//# sourceMappingURL=events.js.map
