// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('pr4.app_state');
goog.require('pr4.util');
goog.require('pr4.periodization');
goog.require('tick.alpha.api');
pr4.events.change_selected_range = (function pr4$events$change_selected_range(neg_QMARK__pos_QMARK_,default$){
return (function (app_state){
var vec__29926 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var sel_start = cljs.core.nth.call(null,vec__29926,(0),null);
var sel_end = cljs.core.nth.call(null,vec__29926,(1),null);
var updated_increment_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null),((function (vec__29926,sel_start,sel_end){
return (function (p1__29924_SHARP_){
if(cljs.core.truth_(neg_QMARK__pos_QMARK_.call(null,p1__29924_SHARP_))){
return (p1__29924_SHARP_ * (2));
} else {
return default$;
}
});})(vec__29926,sel_start,sel_end))
);
var amount_to_sum = cljs.core.get_in.call(null,updated_increment_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null));
var new_end = (sel_end + amount_to_sum);
var sessions_count = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
var corrected_end = (((new_end <= sel_start))?(sel_start + (1)):(((new_end > sessions_count))?sessions_count:new_end
));
return cljs.core.update_in.call(null,updated_increment_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (vec__29926,sel_start,sel_end,updated_increment_state,amount_to_sum,new_end,sessions_count,corrected_end){
return (function (p1__29925_SHARP_){
return cljs.core.update.call(null,p1__29925_SHARP_,(1),cljs.core.constantly.call(null,corrected_end));
});})(vec__29926,sel_start,sel_end,updated_increment_state,amount_to_sum,new_end,sessions_count,corrected_end))
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
var G__29929 = cljs.core.into.call(null,val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_idx,new cljs.core.Keyword(null,"m","m",1632677161)], null));
var G__29930 = cljs.core.first.call(null,coll);
var G__29931 = cljs.core.rest.call(null,coll);
var G__29932 = (current_idx + (1));
val = G__29929;
current = G__29930;
coll = G__29931;
current_idx = G__29932;
continue;
} else {
var G__29933 = cljs.core.conj.call(null,val,current_idx);
var G__29934 = current;
var G__29935 = coll;
var G__29936 = (current_idx + (1));
val = G__29933;
current = G__29934;
coll = G__29935;
current_idx = G__29936;
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
var G__29937 = val;
var G__29938 = current;
var G__29939 = cljs.core.first.call(null,coll);
var G__29940 = cljs.core.rest.call(null,coll);
var G__29941 = current_idx;
val = G__29937;
previous = G__29938;
current = G__29939;
coll = G__29940;
current_idx = G__29941;
continue;
} else {
if(cljs.core._EQ_.call(null,current,new cljs.core.Keyword(null,"m","m",1632677161))){
var G__29942 = cljs.core.conj.call(null,val,current_idx);
var G__29943 = current;
var G__29944 = cljs.core.first.call(null,coll);
var G__29945 = cljs.core.rest.call(null,coll);
var G__29946 = current_idx;
val = G__29942;
previous = G__29943;
current = G__29944;
coll = G__29945;
current_idx = G__29946;
continue;
} else {
var G__29947 = val;
var G__29948 = current;
var G__29949 = cljs.core.first.call(null,coll);
var G__29950 = cljs.core.rest.call(null,coll);
var G__29951 = (current_idx + (1));
val = G__29947;
previous = G__29948;
current = G__29949;
coll = G__29950;
current_idx = G__29951;
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

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions_count = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.count.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var indexes_to_keep = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = clojure.set.difference.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.set.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.range.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = sessions_count;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.set.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.apply.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__29952_SHARP_){
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.map.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.partial.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.nth;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = p1__29952_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__29952#","p1__29952#",1305299627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__29952#","p1__29952#",1305299627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = indexes_to_keep;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__29952#","p1__29952#",1305299627,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29952#","p1__29952#",1305299627,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__29952#","p1__29952#",1305299627,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29952#","p1__29952#",1305299627,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__29952#","p1__29952#",1305299627,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null)))),(2)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__29953_SHARP_){
return debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null),(3),pr4.events.implode_micros.call(null,debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),(4),cljs.core.remove.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.set.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.apply.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),(5),pr4.events.explode_micros.call(null,debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"p1__29953#","p1__29953#",1814486752,null),(6),p1__29953_SHARP_)))))));
});})(opts__29783__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29953#","p1__29953#",1814486752,null)], null),cljs.core.list(new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),cljs.core.list(new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),new cljs.core.Symbol(null,"p1__29953#","p1__29953#",1814486752,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29953#","p1__29953#",1814486752,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"p1__29953#","p1__29953#",1814486752,null),new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29953#","p1__29953#",1814486752,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"p1__29953#","p1__29953#",1814486752,null),new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e29954){var e = e29954;
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
return (function (p1__29952_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,p1__29952_SHARP_),indexes_to_keep);
});})(sessions_count,session_sel,indexes_to_keep))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),((function (sessions_count,session_sel,indexes_to_keep){
return (function (p1__29953_SHARP_){
return pr4.events.implode_micros.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.range,session_sel)),pr4.events.explode_micros.call(null,p1__29953_SHARP_)));
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

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var selected_sessions = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.util.select_indexes.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var vec__29956 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.split_at.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.second.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var before = cljs.core.nth.call(null,vec__29956,(0),null);
var after = cljs.core.nth.call(null,vec__29956,(1),null);
var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.concat.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = before;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selected_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = after;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)], null),cljs.core.list(new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null))], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e29955){var e = e29955;
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
var vec__29959 = cljs.core.split_at.call(null,cljs.core.second.call(null,session_sel),sessions);
var before = cljs.core.nth.call(null,vec__29959,(0),null);
var after = cljs.core.nth.call(null,vec__29959,(1),null);
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
var vec__29962 = cljs.core.split_at.call(null,cljs.core.first.call(null,selection),coll);
var temp = cljs.core.nth.call(null,vec__29962,(0),null);
var rest = cljs.core.nth.call(null,vec__29962,(1),null);
var vec__29965 = cljs.core.split_at.call(null,(cljs.core.count.call(null,temp) - (1)),temp);
var s1 = cljs.core.nth.call(null,vec__29965,(0),null);
var s2 = cljs.core.nth.call(null,vec__29965,(1),null);
var vec__29968 = cljs.core.split_at.call(null,cljs.core.apply.call(null,cljs.core._,cljs.core.reverse.call(null,selection)),rest);
var s3 = cljs.core.nth.call(null,vec__29968,(0),null);
var rest__$1 = cljs.core.nth.call(null,vec__29968,(1),null);
var vec__29971 = cljs.core.split_at.call(null,(1),rest__$1);
var s4 = cljs.core.nth.call(null,vec__29971,(0),null);
var rest__$2 = cljs.core.nth.call(null,vec__29971,(1),null);
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

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var vec__29976 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var s1 = cljs.core.nth.call(null,vec__29976,(0),null);
var s2 = cljs.core.nth.call(null,vec__29976,(1),null);
var s3 = cljs.core.nth.call(null,vec__29976,(2),null);
var s4 = cljs.core.nth.call(null,vec__29976,(3),null);
var r = cljs.core.nth.call(null,vec__29976,(4),null);
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.concat.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s4;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s3;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = r;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),(2)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,sessions,session_sel,vec__29976,s1,s2,s3,s4,r,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__29974_SHARP_){
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.mapv.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.partial.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = p1__29974_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,sessions,session_sel,vec__29976,s1,s2,s3,s4,r,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__29974#","p1__29974#",25524139,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e29975){var e = e29975;
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
var vec__29979 = pr4.events.chop_coll.call(null,sessions,session_sel);
var s1 = cljs.core.nth.call(null,vec__29979,(0),null);
var s2 = cljs.core.nth.call(null,vec__29979,(1),null);
var s3 = cljs.core.nth.call(null,vec__29979,(2),null);
var s4 = cljs.core.nth.call(null,vec__29979,(3),null);
var r = cljs.core.nth.call(null,vec__29979,(4),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.concat.call(null,s1,s2,s4,s3,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (sessions,session_sel,vec__29979,s1,s2,s3,s4,r){
return (function (p1__29974_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.inc),p1__29974_SHARP_);
});})(sessions,session_sel,vec__29979,s1,s2,s3,s4,r))
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

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var vec__29984 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var s1 = cljs.core.nth.call(null,vec__29984,(0),null);
var s2 = cljs.core.nth.call(null,vec__29984,(1),null);
var s3 = cljs.core.nth.call(null,vec__29984,(2),null);
var s4 = cljs.core.nth.call(null,vec__29984,(3),null);
var r = cljs.core.nth.call(null,vec__29984,(4),null);
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.concat.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s3;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = s4;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = r;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),(2)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,sessions,session_sel,vec__29984,s1,s2,s3,s4,r,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__29982_SHARP_){
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.mapv.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.partial.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.dec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = p1__29982_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,sessions,session_sel,vec__29984,s1,s2,s3,s4,r,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__29982#","p1__29982#",1425530766,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e29983){var e = e29983;
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
var vec__29987 = pr4.events.chop_coll.call(null,sessions,session_sel);
var s1 = cljs.core.nth.call(null,vec__29987,(0),null);
var s2 = cljs.core.nth.call(null,vec__29987,(1),null);
var s3 = cljs.core.nth.call(null,vec__29987,(2),null);
var s4 = cljs.core.nth.call(null,vec__29987,(3),null);
var r = cljs.core.nth.call(null,vec__29987,(4),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.concat.call(null,s1,s3,s2,s4,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (sessions,session_sel,vec__29987,s1,s2,s3,s4,r){
return (function (p1__29982_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.dec),p1__29982_SHARP_);
});})(sessions,session_sel,vec__29987,s1,s2,s3,s4,r))
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143),pr4.events.change_reps_range.call(null,(function (p__29990){
var map__29991 = p__29990;
var map__29991__$1 = (((((!((map__29991 == null))))?(((((map__29991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29991):map__29991);
var reps_max = cljs.core.get.call(null,map__29991__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__29991__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
if(cljs.core._EQ_.call(null,reps_max,reps_min)){
return reps_max;
} else {
return (reps_max - (1));
}
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855),pr4.events.change_reps_range.call(null,(function (p__29993){
var map__29994 = p__29993;
var map__29994__$1 = (((((!((map__29994 == null))))?(((((map__29994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29994):map__29994);
var reps_max = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
if(cljs.core._EQ_.call(null,reps_max,(30))){
return reps_max;
} else {
return (reps_max + (1));
}
})));
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.reps_slider_change = (function pr4$events$reps_slider_change(app_state,p__29996){
var vec__29997 = p__29996;
var event = cljs.core.nth.call(null,vec__29997,(0),null);
var min = cljs.core.nth.call(null,vec__29997,(1),null);
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var last_selected = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.last.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.util.select_indexes.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var diff = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})() - (function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var new_min = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})() + (function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})() > (30));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})())?(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})():(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var new_max = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})() + (function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var veced_app_state = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var update_fn = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__29997,event,min){
return (function (app_state__$1,idx){
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state__$1,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(5)),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null)),(4)),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_max;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null)),(3));
});})(opts__29783__auto____$1,sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__29997,event,min))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.reduce.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.apply.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30000){var e = e30000;
throw e;
}})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
} else {
pr4.events.reps_slider_change = (function pr4$events$reps_slider_change(app_state,p__30001){
var vec__30002 = p__30001;
var event = cljs.core.nth.call(null,vec__30002,(0),null);
var min = cljs.core.nth.call(null,vec__30002,(1),null);
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
var update_fn = ((function (sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,vec__30002,event,min){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new_min),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new_max);
});})(sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,vec__30002,event,min))
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
pr4.events.total_sets_changed = (function pr4$events$total_sets_changed(app_state,p__30005){
var vec__30006 = p__30005;
var event = cljs.core.nth.call(null,vec__30006,(0),null);
var new_val = cljs.core.nth.call(null,vec__30006,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var veced_app_state = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var update_fn = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,sessions,session_sel,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30006,event,new_val){
return (function (app_state__$1,idx){
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,sessions,session_sel,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30006,event,new_val))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.reduce.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.apply.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30009){var e = e30009;
throw e;
}});
} else {
pr4.events.total_sets_changed = (function pr4$events$total_sets_changed(app_state,p__30010){
var vec__30011 = p__30010;
var event = cljs.core.nth.call(null,vec__30011,(0),null);
var new_val = cljs.core.nth.call(null,vec__30011,(1),null);
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (sessions,session_sel,veced_app_state,vec__30011,event,new_val){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new_val);
});})(sessions,session_sel,veced_app_state,vec__30011,event,new_val))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),pr4.events.total_sets_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.rest_slider_changed = (function pr4$events$rest_slider_changed(app_state,p__30014){
var vec__30015 = p__30014;
var event = cljs.core.nth.call(null,vec__30015,(0),null);
var new_val = cljs.core.nth.call(null,vec__30015,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var veced_app_state = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var update_fn = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,sessions,session_sel,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30015,event,new_val){
return (function (app_state__$1,idx){
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,sessions,session_sel,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30015,event,new_val))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.reduce.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.apply.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30018){var e = e30018;
throw e;
}});
} else {
pr4.events.rest_slider_changed = (function pr4$events$rest_slider_changed(app_state,p__30019){
var vec__30020 = p__30019;
var event = cljs.core.nth.call(null,vec__30020,(0),null);
var new_val = cljs.core.nth.call(null,vec__30020,(1),null);
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (sessions,session_sel,veced_app_state,vec__30020,event,new_val){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new_val);
});})(sessions,session_sel,veced_app_state,vec__30020,event,new_val))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),pr4.events.rest_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_sel_slider_changed = (function pr4$events$session_sel_slider_changed(app_state,p__30023){
var vec__30024 = p__30023;
var event = cljs.core.nth.call(null,vec__30024,(0),null);
var start = cljs.core.nth.call(null,vec__30024,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var sessions_count = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.count.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var vec__30028 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var selected_start = cljs.core.nth.call(null,vec__30028,(0),null);
var selected_end = cljs.core.nth.call(null,vec__30028,(1),null);
var diff = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selected_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})() - (function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selected_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var new_start = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})() + (function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})() > (function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = sessions_count;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})())?(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selected_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})():(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var new_end = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})() + (function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(0),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),(2)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(1),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30027){var e = e30027;
throw e;
}});
} else {
pr4.events.session_sel_slider_changed = (function pr4$events$session_sel_slider_changed(app_state,p__30031){
var vec__30032 = p__30031;
var event = cljs.core.nth.call(null,vec__30032,(0),null);
var start = cljs.core.nth.call(null,vec__30032,(1),null);
var sessions_count = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
var vec__30035 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var selected_start = cljs.core.nth.call(null,vec__30035,(0),null);
var selected_end = cljs.core.nth.call(null,vec__30035,(1),null);
var diff = (selected_end - selected_start);
var new_start = ((((diff + start) > sessions_count))?selected_start:start);
var new_end = (new_start + diff);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(0),new_start),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(1),new_end);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-sel-slider-changed","pr4.events/session-sel-slider-changed",-423555165),pr4.events.session_sel_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.microcycles_sel_slider_changed = (function pr4$events$microcycles_sel_slider_changed(app_state,p__30038){
var vec__30039 = p__30038;
var event = cljs.core.nth.call(null,vec__30039,(0),null);
var start = cljs.core.nth.call(null,vec__30039,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)))),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var microcycles = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var new_end = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.nth.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.count.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})() - (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var new_start = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.nth.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})() - (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(0));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(0),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),(2)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(1),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)))),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30042){var e = e30042;
throw e;
}});
} else {
pr4.events.microcycles_sel_slider_changed = (function pr4$events$microcycles_sel_slider_changed(app_state,p__30043){
var vec__30044 = p__30043;
var event = cljs.core.nth.call(null,vec__30044,(0),null);
var start = cljs.core.nth.call(null,vec__30044,(1),null);
var microcycles = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null));
var new_end = cljs.core.nth.call(null,microcycles,start,(cljs.core.count.call(null,microcycles) - (1)));
var new_start = cljs.core.nth.call(null,microcycles,(start - (1)),(0));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(0),new_start),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(1),new_end);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","microcycles-sel-slider-changed","pr4.events/microcycles-sel-slider-changed",1289237402),pr4.events.microcycles_sel_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.update_sessions_by_model = (function pr4$events$update_sessions_by_model(app_state,p__30049){
var vec__30050 = p__30049;
var event = cljs.core.nth.call(null,vec__30050,(0),null);
var chosen_model_name = cljs.core.nth.call(null,vec__30050,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null)),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null)))))),new cljs.core.Symbol(null,"first","first",996428481,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var chosen_micros_models = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.filter.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$2,opts__29783__auto____$1,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30050,event,chosen_model_name){
return (function (p1__30047_SHARP_){
return debux.common.util.spy_first.call(null,cljs.core.partial.call(null,cljs.core._EQ_,chosen_model_name).call(null,debux.common.util.spy_first.call(null,cljs.core.val.call(null,debux.common.util.spy_first.call(null,p1__30047_SHARP_,new cljs.core.Symbol(null,"p1__30047#","p1__30047#",207649644,null),(6))),new cljs.core.Symbol(null,"val","val",1769233139,null),(5))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))),(4));
});})(opts__29783__auto____$2,opts__29783__auto____$1,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30050,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30047#","p1__30047#",207649644,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.periodization.micros_models;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30047#","p1__30047#",207649644,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var vec__30054 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var session_sel_start = cljs.core.nth.call(null,vec__30054,(0),null);
var session_sel_end = cljs.core.nth.call(null,vec__30054,(1),null);
var sel_sessions_count = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})() - (function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var chosen_model = debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"first","first",996428481,null),(2),cljs.core.first.call(null,debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30048#","p1__30048#",176491682,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30048#","p1__30048#",176491682,null),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null)))))),(3),cljs.core.filter.call(null,(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,chosen_micros_models,vec__30054,session_sel_start,session_sel_end,sel_sessions_count,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30050,event,chosen_model_name){
return (function (p1__30048_SHARP_){
return debux.common.util.spy_first.call(null,cljs.core.partial.call(null,cljs.core._EQ_,sel_sessions_count).call(null,debux.common.util.spy_first.call(null,cljs.core.count.call(null,debux.common.util.spy_first.call(null,p1__30048_SHARP_,new cljs.core.Symbol(null,"p1__30048#","p1__30048#",176491682,null),(7))),new cljs.core.Symbol(null,"count","count",-514511684,null),(6))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))),(5));
});})(opts__29783__auto____$1,chosen_micros_models,vec__30054,session_sel_start,session_sel_end,sel_sessions_count,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30050,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30048#","p1__30048#",176491682,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(4),cljs.core.map.call(null,(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),(5),chosen_micros_models)))))));
var veced_app_state = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var update_fn = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,chosen_micros_models,vec__30054,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30050,event,chosen_model_name){
return (function (app_state__$1,idx){
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.merge;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.nth.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = chosen_model;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29784__auto__;
})() - (function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,chosen_micros_models,vec__30054,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__30050,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.reduce.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.range.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = session_sel_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30047#","p1__30047#",207649644,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30048#","p1__30048#",176491682,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null)))),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30053){var e = e30053;
throw e;
}});
} else {
pr4.events.update_sessions_by_model = (function pr4$events$update_sessions_by_model(app_state,p__30057){
var vec__30058 = p__30057;
var event = cljs.core.nth.call(null,vec__30058,(0),null);
var chosen_model_name = cljs.core.nth.call(null,vec__30058,(1),null);
var chosen_micros_models = cljs.core.filter.call(null,((function (vec__30058,event,chosen_model_name){
return (function (p1__30047_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,chosen_model_name).call(null,cljs.core.val.call(null,p1__30047_SHARP_));
});})(vec__30058,event,chosen_model_name))
,pr4.periodization.micros_models);
var vec__30061 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var session_sel_start = cljs.core.nth.call(null,vec__30061,(0),null);
var session_sel_end = cljs.core.nth.call(null,vec__30061,(1),null);
var sel_sessions_count = (session_sel_end - session_sel_start);
var chosen_model = cljs.core.first.call(null,cljs.core.filter.call(null,((function (chosen_micros_models,vec__30061,session_sel_start,session_sel_end,sel_sessions_count,vec__30058,event,chosen_model_name){
return (function (p1__30048_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,sel_sessions_count).call(null,cljs.core.count.call(null,p1__30048_SHARP_));
});})(chosen_micros_models,vec__30061,session_sel_start,session_sel_end,sel_sessions_count,vec__30058,event,chosen_model_name))
,cljs.core.map.call(null,cljs.core.first,chosen_micros_models)));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (chosen_micros_models,vec__30061,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,vec__30058,event,chosen_model_name){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.merge,cljs.core.nth.call(null,chosen_model,(idx - session_sel_start),cljs.core.PersistentArrayMap.EMPTY));
});})(chosen_micros_models,vec__30061,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,vec__30058,event,chosen_model_name))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.range.call(null,session_sel_start,session_sel_end));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","update-sessions-by-model","pr4.events/update-sessions-by-model",-392885995),pr4.events.update_sessions_by_model);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_calendar_sel_left = (function pr4$events$move_calendar_sel_left(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null))))))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var map__30066 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var map__30066__$1 = (((((!((map__30066 == null))))?(((((map__30066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30066):map__30066);
var first_day = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var vec__30067 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selection;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var begin = cljs.core.nth.call(null,vec__30067,(0),null);
var one_left = cljs.core.nth.call(null,vec__30067,(1),null);
var selected = cljs.core.nth.call(null,vec__30067,(2),null);
var one_right = cljs.core.nth.call(null,vec__30067,(3),null);
var the_rest = cljs.core.nth.call(null,vec__30067,(4),null);
var previous_day = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = tick.alpha.api._.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = tick.alpha.api.date.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = first_day;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var opts__29783__auto___30076__$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto___30077 = (((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (!((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.empty_QMARK_.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.first.call(null,(function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})())?(function(){throw cljs.core.ex_info.call(null,"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),one_left], null))})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto___30077,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (!((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.map_QMARK_.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.first.call(null,(function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})())?(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"calendar","calendar",62308146),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),previous_day,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),one_right,the_rest)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})():debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(4)),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"days","days",-1394072564),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.concat.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = begin;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selected;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = one_right;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = the_rest;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),(3)),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$2,opts__29783__auto____$1,map__30066,map__30066__$1,first_day,days,selection,vec__30067,begin,one_left,selected,one_right,the_rest,previous_day,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__30064_SHARP_){
var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.mapv.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.partial.call(null,(function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.dec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = p1__30064_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
});})(opts__29783__auto____$2,opts__29783__auto____$1,map__30066,map__30066__$1,first_day,days,selection,vec__30067,begin,one_left,selected,one_right,the_rest,previous_day,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null)))),(2)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__30064#","p1__30064#",467668552,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30065){var e = e30065;
throw e;
}});
} else {
pr4.events.move_calendar_sel_left = (function pr4$events$move_calendar_sel_left(app_state){
var map__30071 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null));
var map__30071__$1 = (((((!((map__30071 == null))))?(((((map__30071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30071):map__30071);
var first_day = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__30071__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var vec__30072 = pr4.events.chop_coll.call(null,days,selection);
var begin = cljs.core.nth.call(null,vec__30072,(0),null);
var one_left = cljs.core.nth.call(null,vec__30072,(1),null);
var selected = cljs.core.nth.call(null,vec__30072,(2),null);
var one_right = cljs.core.nth.call(null,vec__30072,(3),null);
var the_rest = cljs.core.nth.call(null,vec__30072,(4),null);
var previous_day = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api._.call(null,tick.alpha.api.date.call(null,first_day),tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564))));
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,one_left))))){
throw cljs.core.ex_info.call(null,"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),one_left], null));
} else {
}

if((!(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,one_left))))){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),previous_day,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),one_right,the_rest)], null));
} else {
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.assoc,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,begin,selected,one_left,one_right,the_rest)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),((function (map__30071,map__30071__$1,first_day,days,selection,vec__30072,begin,one_left,selected,one_right,the_rest,previous_day){
return (function (p1__30064_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.dec),p1__30064_SHARP_);
});})(map__30071,map__30071__$1,first_day,days,selection,vec__30072,begin,one_left,selected,one_right,the_rest,previous_day))
);
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-calendar-sel-left","pr4.events/move-calendar-sel-left",-180215541),pr4.events.move_calendar_sel_left);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_calendar_sel_right = (function pr4$events$move_calendar_sel_right(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null)))))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (function (){var map__30080 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var map__30080__$1 = (((((!((map__30080 == null))))?(((((map__30080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30080):map__30080);
var days = cljs.core.get.call(null,map__30080__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var vec__30081 = (function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selection;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})();
var begin = cljs.core.nth.call(null,vec__30081,(0),null);
var one_left = cljs.core.nth.call(null,vec__30081,(1),null);
var selected = cljs.core.nth.call(null,vec__30081,(2),null);
var one_right = cljs.core.nth.call(null,vec__30081,(3),null);
var the_rest = cljs.core.nth.call(null,vec__30081,(4),null);
var opts__29783__auto___30090__$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto___30091 = (((function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (!((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.empty_QMARK_.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.first.call(null,(function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = one_right;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})())?(function(){throw cljs.core.ex_info.call(null,"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),one_right], null))})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto___30091,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"days","days",-1394072564),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.concat.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = begin;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = selected;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = the_rest;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),(2)),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,map__30080,map__30080__$1,days,selection,vec__30081,begin,one_left,selected,one_right,the_rest,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__30078_SHARP_){
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.mapv.call(null,(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.partial.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = p1__30078_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,map__30080,map__30080__$1,days,selection,vec__30081,begin,one_left,selected,one_right,the_rest,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__30078#","p1__30078#",-867230208,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30079){var e = e30079;
throw e;
}});
} else {
pr4.events.move_calendar_sel_right = (function pr4$events$move_calendar_sel_right(app_state){
var map__30085 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null));
var map__30085__$1 = (((((!((map__30085 == null))))?(((((map__30085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30085):map__30085);
var days = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var vec__30086 = pr4.events.chop_coll.call(null,days,selection);
var begin = cljs.core.nth.call(null,vec__30086,(0),null);
var one_left = cljs.core.nth.call(null,vec__30086,(1),null);
var selected = cljs.core.nth.call(null,vec__30086,(2),null);
var one_right = cljs.core.nth.call(null,vec__30086,(3),null);
var the_rest = cljs.core.nth.call(null,vec__30086,(4),null);
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,one_right))))){
throw cljs.core.ex_info.call(null,"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),one_right], null));
} else {
}

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.assoc,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,begin,one_left,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),selected,the_rest)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),((function (map__30085,map__30085__$1,days,selection,vec__30086,begin,one_left,selected,one_right,the_rest){
return (function (p1__30078_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.inc),p1__30078_SHARP_);
});})(map__30085,map__30085__$1,days,selection,vec__30086,begin,one_left,selected,one_right,the_rest))
);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-calendar-sel-right","pr4.events/move-calendar-sel-right",-1182109671),pr4.events.move_calendar_sel_right);
pr4.events.push_days_to_right = (function pr4$events$push_days_to_right(to_add,the_rest){
var G__30098 = to_add;
var vec__30100 = G__30098;
var seq__30101 = cljs.core.seq.call(null,vec__30100);
var first__30102 = cljs.core.first.call(null,seq__30101);
var seq__30101__$1 = cljs.core.next.call(null,seq__30101);
var f_to_add = first__30102;
var to_add__$1 = seq__30101__$1;
var G__30099 = the_rest;
var vec__30103 = G__30099;
var seq__30104 = cljs.core.seq.call(null,vec__30103);
var first__30105 = cljs.core.first.call(null,seq__30104);
var seq__30104__$1 = cljs.core.next.call(null,seq__30104);
var f_coll = first__30105;
var coll = seq__30104__$1;
var added = cljs.core.PersistentVector.EMPTY;
var G__30098__$1 = G__30098;
var G__30099__$1 = G__30099;
var added__$1 = added;
while(true){
var vec__30112 = G__30098__$1;
var seq__30113 = cljs.core.seq.call(null,vec__30112);
var first__30114 = cljs.core.first.call(null,seq__30113);
var seq__30113__$1 = cljs.core.next.call(null,seq__30113);
var f_to_add__$1 = first__30114;
var to_add__$2 = seq__30113__$1;
var vec__30115 = G__30099__$1;
var seq__30116 = cljs.core.seq.call(null,vec__30115);
var first__30117 = cljs.core.first.call(null,seq__30116);
var seq__30116__$1 = cljs.core.next.call(null,seq__30116);
var f_coll__$1 = first__30117;
var coll__$1 = seq__30116__$1;
var added__$2 = added__$1;
if((((f_to_add__$1 == null)) && ((f_coll__$1 == null)))){
return added__$2;
} else {
if((f_to_add__$1 == null)){
return cljs.core.concat.call(null,added__$2,cljs.core.cons.call(null,f_coll__$1,coll__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"session-idx","session-idx",1467570168).cljs$core$IFn$_invoke$arity$1(f_coll__$1))){
var G__30118 = cljs.core.conj.call(null,cljs.core.vec.call(null,to_add__$2),f_coll__$1);
var G__30119 = coll__$1;
var G__30120 = cljs.core.conj.call(null,added__$2,f_to_add__$1);
G__30098__$1 = G__30118;
G__30099__$1 = G__30119;
added__$1 = G__30120;
continue;
} else {
var G__30121 = to_add__$2;
var G__30122 = coll__$1;
var G__30123 = cljs.core.conj.call(null,added__$2,f_to_add__$1);
G__30098__$1 = G__30121;
G__30099__$1 = G__30122;
added__$1 = G__30123;
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
var vec__30125 = pr4.events.chop_coll.call(null,days,selection);
var s1 = cljs.core.nth.call(null,vec__30125,(0),null);
var s2 = cljs.core.nth.call(null,vec__30125,(1),null);
var selected_days = cljs.core.nth.call(null,vec__30125,(2),null);
var s3 = cljs.core.nth.call(null,vec__30125,(3),null);
var the_rest = cljs.core.nth.call(null,vec__30125,(4),null);
var absences = cljs.core.map.call(null,((function (selection,days,vec__30125,s1,s2,selected_days,s3,the_rest){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absent?","absent?",1101710978),true], null));
});})(selection,days,vec__30125,s1,s2,selected_days,s3,the_rest))
,selected_days);
var selected_days_with_info = cljs.core.remove.call(null,((function (selection,days,vec__30125,s1,s2,selected_days,s3,the_rest,absences){
return (function (p1__30124_SHARP_){
return cljs.core.empty_QMARK_.call(null,p1__30124_SHARP_);
});})(selection,days,vec__30125,s1,s2,selected_days,s3,the_rest,absences))
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
pr4.events.toggled_absent = (function pr4$events$toggled_absent(app_state,p__30128){
var vec__30129 = p__30128;
var event = cljs.core.nth.call(null,vec__30129,(0),null);
var absent_QMARK_ = cljs.core.nth.call(null,vec__30129,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (cljs.core.truth_((function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = absent_QMARK_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})())?(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.events.update_absent.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})():(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = pr4.events.update_not_absent.call(null,(function (){var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30132){var e = e30132;
throw e;
}});
} else {
pr4.events.toggled_absent = (function pr4$events$toggled_absent(app_state,p__30133){
var vec__30134 = p__30133;
var event = cljs.core.nth.call(null,vec__30134,(0),null);
var absent_QMARK_ = cljs.core.nth.call(null,vec__30134,(1),null);
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

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update_in.call(null,(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (opts__29783__auto____$1,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p__30138){
var vec__30139 = p__30138;
var day_s = cljs.core.nth.call(null,vec__30139,(0),null);
var day_e = cljs.core.nth.call(null,vec__30139,(1),null);
var opts__29783__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = (((function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core._EQ_.call(null,(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = day_e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})() - (function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})())?(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = day_e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})() + (2));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})():(function (){var opts__29783__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = ((function (){var opts__29783__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__29784__auto__;
})() + (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
});})(opts__29783__auto____$1,opts__29783__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30137){var e = e30137;
throw e;
}});
} else {
pr4.events.toggle_multiple_calendar_selection = (function pr4$events$toggle_multiple_calendar_selection(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),(function (p__30142){
var vec__30143 = p__30142;
var day_s = cljs.core.nth.call(null,vec__30143,(0),null);
var day_e = cljs.core.nth.call(null,vec__30143,(1),null);
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
pr4.events.reset_calendar_selection = (function pr4$events$reset_calendar_selection(app_state,p__30146){
var vec__30147 = p__30146;
var event = cljs.core.nth.call(null,vec__30147,(0),null);
var new_val = cljs.core.nth.call(null,vec__30147,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)));

var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.update.call(null,(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29784__auto__;
}catch (e30150){var e = e30150;
throw e;
}});
} else {
pr4.events.reset_calendar_selection = (function pr4$events$reset_calendar_selection(app_state,p__30151){
var vec__30152 = p__30151;
var event = cljs.core.nth.call(null,vec__30152,(0),null);
var new_val = cljs.core.nth.call(null,vec__30152,(1),null);
return cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new_val);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),pr4.events.reset_calendar_selection);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_sets_box_clicked = (function pr4$events$session_sets_box_clicked(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-sets"),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)))));

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-sets"),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-sets"),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),(0));
}catch (e30155){var e = e30155;
throw e;
}});
} else {
pr4.events.session_sets_box_clicked = (function pr4$events$session_sets_box_clicked(app_state){
return cljs.core.update.call(null,cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-sets"),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-sets-box-clicked","pr4.events/session-sets-box-clicked",-1377129740),pr4.events.session_sets_box_clicked);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_intensity_box_clicked = (function pr4$events$session_intensity_box_clicked(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-intensity"),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)))));

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-intensity"),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-intensity"),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),(0));
}catch (e30156){var e = e30156;
throw e;
}});
} else {
pr4.events.session_intensity_box_clicked = (function pr4$events$session_intensity_box_clicked(app_state){
return cljs.core.update.call(null,cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-intensity"),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-intensity-box-clicked","pr4.events/session-intensity-box-clicked",851837502),pr4.events.session_intensity_box_clicked);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_adjust_canceled = (function pr4$events$session_adjust_canceled(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null))),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504))));

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),new cljs.core.Keyword(null,"domain","domain",1847214937),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.get_in.call(null,(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})(),(function (){var opts__29783__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__29784__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__29784__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null))),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),(0));
}catch (e30157){var e = e30157;
throw e;
}});
} else {
pr4.events.session_adjust_canceled = (function pr4$events$session_adjust_canceled(app_state){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null))),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"session-state","session-state",1300785688)),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-adjust-canceled","pr4.events/session-adjust-canceled",267115587),pr4.events.session_adjust_canceled);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_adjust_confirmed = (function pr4$events$session_adjust_confirmed(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504))));

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__29783__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__29784__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__29784__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29784__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),(0));
}catch (e30158){var e = e30158;
throw e;
}});
} else {
pr4.events.session_adjust_confirmed = (function pr4$events$session_adjust_confirmed(app_state){
return cljs.core.update.call(null,cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"session-state","session-state",1300785688)),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-adjust-confirmed","pr4.events/session-adjust-confirmed",2106134146),pr4.events.session_adjust_confirmed);
