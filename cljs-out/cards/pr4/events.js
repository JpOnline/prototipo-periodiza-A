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
var vec__26107 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var sel_start = cljs.core.nth.call(null,vec__26107,(0),null);
var sel_end = cljs.core.nth.call(null,vec__26107,(1),null);
var updated_increment_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null),((function (vec__26107,sel_start,sel_end){
return (function (p1__26105_SHARP_){
if(cljs.core.truth_(neg_QMARK__pos_QMARK_.call(null,p1__26105_SHARP_))){
return (p1__26105_SHARP_ * (2));
} else {
return default$;
}
});})(vec__26107,sel_start,sel_end))
);
var amount_to_sum = cljs.core.get_in.call(null,updated_increment_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"increment-scale","increment-scale",-934661219)], null));
var new_end = (sel_end + amount_to_sum);
var sessions_count = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
var corrected_end = (((new_end <= sel_start))?(sel_start + (1)):(((new_end > sessions_count))?sessions_count:new_end
));
return cljs.core.update_in.call(null,updated_increment_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (vec__26107,sel_start,sel_end,updated_increment_state,amount_to_sum,new_end,sessions_count,corrected_end){
return (function (p1__26106_SHARP_){
return cljs.core.update.call(null,p1__26106_SHARP_,(1),cljs.core.constantly.call(null,corrected_end));
});})(vec__26107,sel_start,sel_end,updated_increment_state,amount_to_sum,new_end,sessions_count,corrected_end))
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
var G__26110 = cljs.core.into.call(null,val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_idx,new cljs.core.Keyword(null,"m","m",1632677161)], null));
var G__26111 = cljs.core.first.call(null,coll);
var G__26112 = cljs.core.rest.call(null,coll);
var G__26113 = (current_idx + (1));
val = G__26110;
current = G__26111;
coll = G__26112;
current_idx = G__26113;
continue;
} else {
var G__26114 = cljs.core.conj.call(null,val,current_idx);
var G__26115 = current;
var G__26116 = coll;
var G__26117 = (current_idx + (1));
val = G__26114;
current = G__26115;
coll = G__26116;
current_idx = G__26117;
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
var G__26118 = val;
var G__26119 = current;
var G__26120 = cljs.core.first.call(null,coll);
var G__26121 = cljs.core.rest.call(null,coll);
var G__26122 = current_idx;
val = G__26118;
previous = G__26119;
current = G__26120;
coll = G__26121;
current_idx = G__26122;
continue;
} else {
if(cljs.core._EQ_.call(null,current,new cljs.core.Keyword(null,"m","m",1632677161))){
var G__26123 = cljs.core.conj.call(null,val,current_idx);
var G__26124 = current;
var G__26125 = cljs.core.first.call(null,coll);
var G__26126 = cljs.core.rest.call(null,coll);
var G__26127 = current_idx;
val = G__26123;
previous = G__26124;
current = G__26125;
coll = G__26126;
current_idx = G__26127;
continue;
} else {
var G__26128 = val;
var G__26129 = current;
var G__26130 = cljs.core.first.call(null,coll);
var G__26131 = cljs.core.rest.call(null,coll);
var G__26132 = (current_idx + (1));
val = G__26128;
previous = G__26129;
current = G__26130;
coll = G__26131;
current_idx = G__26132;
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

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions_count = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.count.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var indexes_to_keep = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = clojure.set.difference.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.set.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.range.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions_count;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.set.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26133_SHARP_){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.map.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.partial.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.nth;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p1__26133_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__26133#","p1__26133#",1488338559,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__26133#","p1__26133#",1488338559,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = indexes_to_keep;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__26133#","p1__26133#",1488338559,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26133#","p1__26133#",1488338559,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__26133#","p1__26133#",1488338559,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26133#","p1__26133#",1488338559,null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__26133#","p1__26133#",1488338559,null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null)))),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26134_SHARP_){
return debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null),(3),pr4.events.implode_micros.call(null,debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),(4),cljs.core.remove.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.set.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),(5),pr4.events.explode_micros.call(null,debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"p1__26134#","p1__26134#",-366597762,null),(6),p1__26134_SHARP_)))))));
});})(opts__25969__auto____$1,sessions_count,session_sel,indexes_to_keep,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26134#","p1__26134#",-366597762,null)], null),cljs.core.list(new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),cljs.core.list(new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),new cljs.core.Symbol(null,"p1__26134#","p1__26134#",-366597762,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26134#","p1__26134#",-366597762,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"p1__26134#","p1__26134#",-366597762,null),new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"indexes-to-keep","indexes-to-keep",-961912960,null),cljs.core.list(new cljs.core.Symbol("clojure.set","difference","clojure.set/difference",-1178931405,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26134#","p1__26134#",-366597762,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"p1__26134#","p1__26134#",-366597762,null),new cljs.core.Symbol(null,"explode-micros","explode-micros",-1999896236,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Symbol(null,"implode-micros","implode-micros",-2103200382,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26135){var e = e26135;
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
return (function (p1__26133_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.nth,p1__26133_SHARP_),indexes_to_keep);
});})(sessions_count,session_sel,indexes_to_keep))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),((function (sessions_count,session_sel,indexes_to_keep){
return (function (p1__26134_SHARP_){
return pr4.events.implode_micros.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.range,session_sel)),pr4.events.explode_micros.call(null,p1__26134_SHARP_)));
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

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var selected_sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.select_indexes.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26137 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.split_at.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.second.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var before = cljs.core.nth.call(null,vec__26137,(0),null);
var after = cljs.core.nth.call(null,vec__26137,(1),null);
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.concat.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = before;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selected_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = after;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"after","after",-2059438855,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)], null),cljs.core.list(new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null))], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"before","before",6839139,null),new cljs.core.Symbol(null,"selected-sessions","selected-sessions",-326540065,null),new cljs.core.Symbol(null,"after","after",-2059438855,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26136){var e = e26136;
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
var vec__26140 = cljs.core.split_at.call(null,cljs.core.second.call(null,session_sel),sessions);
var before = cljs.core.nth.call(null,vec__26140,(0),null);
var after = cljs.core.nth.call(null,vec__26140,(1),null);
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
var vec__26143 = cljs.core.split_at.call(null,cljs.core.first.call(null,selection),coll);
var temp = cljs.core.nth.call(null,vec__26143,(0),null);
var rest = cljs.core.nth.call(null,vec__26143,(1),null);
var vec__26146 = cljs.core.split_at.call(null,(cljs.core.count.call(null,temp) - (1)),temp);
var s1 = cljs.core.nth.call(null,vec__26146,(0),null);
var s2 = cljs.core.nth.call(null,vec__26146,(1),null);
var vec__26149 = cljs.core.split_at.call(null,cljs.core.apply.call(null,cljs.core._,cljs.core.reverse.call(null,selection)),rest);
var s3 = cljs.core.nth.call(null,vec__26149,(0),null);
var rest__$1 = cljs.core.nth.call(null,vec__26149,(1),null);
var vec__26152 = cljs.core.split_at.call(null,(1),rest__$1);
var s4 = cljs.core.nth.call(null,vec__26152,(0),null);
var rest__$2 = cljs.core.nth.call(null,vec__26152,(1),null);
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

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26157 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var s1 = cljs.core.nth.call(null,vec__26157,(0),null);
var s2 = cljs.core.nth.call(null,vec__26157,(1),null);
var s3 = cljs.core.nth.call(null,vec__26157,(2),null);
var s4 = cljs.core.nth.call(null,vec__26157,(3),null);
var r = cljs.core.nth.call(null,vec__26157,(4),null);
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.concat.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s4;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s3;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = r;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions,session_sel,vec__26157,s1,s2,s3,s4,r,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26155_SHARP_){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.mapv.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.partial.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p1__26155_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,sessions,session_sel,vec__26157,s1,s2,s3,s4,r,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26155#","p1__26155#",1964715425,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26156){var e = e26156;
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
var vec__26160 = pr4.events.chop_coll.call(null,sessions,session_sel);
var s1 = cljs.core.nth.call(null,vec__26160,(0),null);
var s2 = cljs.core.nth.call(null,vec__26160,(1),null);
var s3 = cljs.core.nth.call(null,vec__26160,(2),null);
var s4 = cljs.core.nth.call(null,vec__26160,(3),null);
var r = cljs.core.nth.call(null,vec__26160,(4),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.concat.call(null,s1,s2,s4,s3,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (sessions,session_sel,vec__26160,s1,s2,s3,s4,r){
return (function (p1__26155_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.inc),p1__26155_SHARP_);
});})(sessions,session_sel,vec__26160,s1,s2,s3,s4,r))
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

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26165 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var s1 = cljs.core.nth.call(null,vec__26165,(0),null);
var s2 = cljs.core.nth.call(null,vec__26165,(1),null);
var s3 = cljs.core.nth.call(null,vec__26165,(2),null);
var s4 = cljs.core.nth.call(null,vec__26165,(3),null);
var r = cljs.core.nth.call(null,vec__26165,(4),null);
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.concat.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s3;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s4;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = r;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null))),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions,session_sel,vec__26165,s1,s2,s3,s4,r,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26163_SHARP_){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.mapv.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.partial.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p1__26163_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,sessions,session_sel,vec__26165,s1,s2,s3,s4,r,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"s3","s3",-1684465660,null),new cljs.core.Symbol(null,"s4","s4",-361572972,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26163#","p1__26163#",-860986672,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26164){var e = e26164;
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
var vec__26168 = pr4.events.chop_coll.call(null,sessions,session_sel);
var s1 = cljs.core.nth.call(null,vec__26168,(0),null);
var s2 = cljs.core.nth.call(null,vec__26168,(1),null);
var s3 = cljs.core.nth.call(null,vec__26168,(2),null);
var s4 = cljs.core.nth.call(null,vec__26168,(3),null);
var r = cljs.core.nth.call(null,vec__26168,(4),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.concat.call(null,s1,s3,s2,s4,r)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),((function (sessions,session_sel,vec__26168,s1,s2,s3,s4,r){
return (function (p1__26163_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.dec),p1__26163_SHARP_);
});})(sessions,session_sel,vec__26168,s1,s2,s3,s4,r))
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143),pr4.events.change_reps_range.call(null,(function (p__26171){
var map__26172 = p__26171;
var map__26172__$1 = (((((!((map__26172 == null))))?(((((map__26172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26172):map__26172);
var reps_max = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__26172__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
if(cljs.core._EQ_.call(null,reps_max,reps_min)){
return reps_max;
} else {
return (reps_max - (1));
}
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855),pr4.events.change_reps_range.call(null,(function (p__26174){
var map__26175 = p__26174;
var map__26175__$1 = (((((!((map__26175 == null))))?(((((map__26175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26175):map__26175);
var reps_max = cljs.core.get.call(null,map__26175__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__26175__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
if(cljs.core._EQ_.call(null,reps_max,(30))){
return reps_max;
} else {
return (reps_max + (1));
}
})));
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.reps_slider_change = (function pr4$events$reps_slider_change(app_state,p__26177){
var vec__26178 = p__26177;
var event = cljs.core.nth.call(null,vec__26178,(0),null);
var min = cljs.core.nth.call(null,vec__26178,(1),null);
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Input of an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Input of an invalid app-state\")"));
}

var _PERCENT_ = (function (){var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var last_selected = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.last.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.select_indexes.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var diff = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})() - (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_min = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})() + (function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})() > (30));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = last_selected.call(null,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})():(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_max = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})() + (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var veced_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var update_fn = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26178,event,min){
return (function (app_state__$1,idx){
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state__$1,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(5)),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_min;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null)),(4)),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_max;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null)),(3));
});})(opts__25969__auto____$1,sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26178,event,min))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.reduce.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("util","select-indexes","util/select-indexes",-2041076426,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304))),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"min","min",2085523049,null)),(30)),cljs.core.list(new cljs.core.Symbol(null,"last-selected","last-selected",-1400788751,null),new cljs.core.Keyword(null,"reps-min","reps-min",1114264304)),new cljs.core.Symbol(null,"min","min",2085523049,null)),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-min","new-min",1835870722,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Symbol(null,"new-max","new-max",1278168725,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26181){var e = e26181;
throw e;
}})();
if(pr4.util.pre_validation.call(null,new cljs.core.Keyword("pr4.app-state","valid-app-state","pr4.app-state/valid-app-state",134226262),app_state,"Returned an invalid app-state")){
} else {
throw (new Error("Assert failed: (util/pre-validation :pr4.app-state/valid-app-state app-state \"Returned an invalid app-state\")"));
}

return _PERCENT_;
});
} else {
pr4.events.reps_slider_change = (function pr4$events$reps_slider_change(app_state,p__26182){
var vec__26183 = p__26182;
var event = cljs.core.nth.call(null,vec__26183,(0),null);
var min = cljs.core.nth.call(null,vec__26183,(1),null);
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
var update_fn = ((function (sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,vec__26183,event,min){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new_min),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new_max);
});})(sessions,session_sel,last_selected,diff,new_min,new_max,veced_app_state,vec__26183,event,min))
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
pr4.events.total_sets_changed = (function pr4$events$total_sets_changed(app_state,p__26186){
var vec__26187 = p__26186;
var event = cljs.core.nth.call(null,vec__26187,(0),null);
var new_val = cljs.core.nth.call(null,vec__26187,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var veced_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var update_fn = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions,session_sel,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26187,event,new_val){
return (function (app_state__$1,idx){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,sessions,session_sel,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26187,event,new_val))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.reduce.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26190){var e = e26190;
throw e;
}});
} else {
pr4.events.total_sets_changed = (function pr4$events$total_sets_changed(app_state,p__26191){
var vec__26192 = p__26191;
var event = cljs.core.nth.call(null,vec__26192,(0),null);
var new_val = cljs.core.nth.call(null,vec__26192,(1),null);
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (sessions,session_sel,veced_app_state,vec__26192,event,new_val){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"total-sets","total-sets",467388901),new_val);
});})(sessions,session_sel,veced_app_state,vec__26192,event,new_val))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),pr4.events.total_sets_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.rest_slider_changed = (function pr4$events$rest_slider_changed(app_state,p__26195){
var vec__26196 = p__26195;
var event = cljs.core.nth.call(null,vec__26196,(0),null);
var new_val = cljs.core.nth.call(null,vec__26196,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var veced_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var update_fn = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions,session_sel,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26196,event,new_val){
return (function (app_state__$1,idx){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,sessions,session_sel,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26196,event,new_val))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.reduce.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.range;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel","session-sel",-569098838,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26199){var e = e26199;
throw e;
}});
} else {
pr4.events.rest_slider_changed = (function pr4$events$rest_slider_changed(app_state,p__26200){
var vec__26201 = p__26200;
var event = cljs.core.nth.call(null,vec__26201,(0),null);
var new_val = cljs.core.nth.call(null,vec__26201,(1),null);
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var session_sel = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (sessions,session_sel,veced_app_state,vec__26201,event,new_val){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.assoc,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),new_val);
});})(sessions,session_sel,veced_app_state,vec__26201,event,new_val))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.apply.call(null,cljs.core.range,session_sel));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),pr4.events.rest_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_sel_slider_changed = (function pr4$events$session_sel_slider_changed(app_state,p__26204){
var vec__26205 = p__26204;
var event = cljs.core.nth.call(null,vec__26205,(0),null);
var start = cljs.core.nth.call(null,vec__26205,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions_count = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.count.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26209 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var selected_start = cljs.core.nth.call(null,vec__26209,(0),null);
var selected_end = cljs.core.nth.call(null,vec__26209,(1),null);
var diff = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selected_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})() - (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selected_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_start = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})() + (function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})() > (function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions_count;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selected_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})():(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_end = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})() + (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = diff;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(0),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(1),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"diff","diff",-518492986,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"selected-end","selected-end",1376919757,null),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null)),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"sessions-count","sessions-count",-153201022,null)),new cljs.core.Symbol(null,"selected-start","selected-start",-412084340,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Symbol(null,"diff","diff",-518492986,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26208){var e = e26208;
throw e;
}});
} else {
pr4.events.session_sel_slider_changed = (function pr4$events$session_sel_slider_changed(app_state,p__26212){
var vec__26213 = p__26212;
var event = cljs.core.nth.call(null,vec__26213,(0),null);
var start = cljs.core.nth.call(null,vec__26213,(1),null);
var sessions_count = cljs.core.count.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)));
var vec__26216 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var selected_start = cljs.core.nth.call(null,vec__26216,(0),null);
var selected_end = cljs.core.nth.call(null,vec__26216,(1),null);
var diff = (selected_end - selected_start);
var new_start = ((((diff + start) > sessions_count))?selected_start:start);
var new_end = (new_start + diff);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(0),new_start),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(1),new_end);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-sel-slider-changed","pr4.events/session-sel-slider-changed",-423555165),pr4.events.session_sel_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.microcycles_sel_slider_changed = (function pr4$events$microcycles_sel_slider_changed(app_state,p__26219){
var vec__26220 = p__26219;
var event = cljs.core.nth.call(null,vec__26220,(0),null);
var start = cljs.core.nth.call(null,vec__26220,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)))),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var microcycles = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_end = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.nth.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.count.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})() - (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_start = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.nth.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = microcycles;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})() - (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(0));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(0),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(0),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null)),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(1),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null)),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),new cljs.core.Symbol(null,"start","start",1285322546,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null)))),new cljs.core.Symbol(null,"new-start","new-start",-429829421,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"microcycles","microcycles",468364751,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"start","start",1285322546,null)),(0))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),(1),new cljs.core.Symbol(null,"new-end","new-end",1640949214,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26223){var e = e26223;
throw e;
}});
} else {
pr4.events.microcycles_sel_slider_changed = (function pr4$events$microcycles_sel_slider_changed(app_state,p__26224){
var vec__26225 = p__26224;
var event = cljs.core.nth.call(null,vec__26225,(0),null);
var start = cljs.core.nth.call(null,vec__26225,(1),null);
var microcycles = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"microcycles","microcycles",-1172166776)], null));
var new_end = cljs.core.nth.call(null,microcycles,start,(cljs.core.count.call(null,microcycles) - (1)));
var new_start = cljs.core.nth.call(null,microcycles,(start - (1)),(0));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(0),new_start),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),cljs.core.assoc,(1),new_end);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","microcycles-sel-slider-changed","pr4.events/microcycles-sel-slider-changed",1289237402),pr4.events.microcycles_sel_slider_changed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.update_sessions_by_model = (function pr4$events$update_sessions_by_model(app_state,p__26230){
var vec__26231 = p__26230;
var event = cljs.core.nth.call(null,vec__26231,(0),null);
var chosen_model_name = cljs.core.nth.call(null,vec__26231,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null)),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null)))))),new cljs.core.Symbol(null,"first","first",996428481,null)),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var chosen_micros_models = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.filter.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$2,opts__25969__auto____$1,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26231,event,chosen_model_name){
return (function (p1__26228_SHARP_){
return debux.common.util.spy_first.call(null,cljs.core.partial.call(null,cljs.core._EQ_,chosen_model_name).call(null,debux.common.util.spy_first.call(null,cljs.core.val.call(null,debux.common.util.spy_first.call(null,p1__26228_SHARP_,new cljs.core.Symbol(null,"p1__26228#","p1__26228#",-1181361692,null),(6))),new cljs.core.Symbol(null,"val","val",1769233139,null),(5))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))),(4));
});})(opts__25969__auto____$2,opts__25969__auto____$1,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26231,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26228#","p1__26228#",-1181361692,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.periodization.micros_models;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26228#","p1__26228#",-1181361692,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26235 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var session_sel_start = cljs.core.nth.call(null,vec__26235,(0),null);
var session_sel_end = cljs.core.nth.call(null,vec__26235,(1),null);
var sel_sessions_count = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})() - (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var chosen_model = debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"first","first",996428481,null),(2),cljs.core.first.call(null,debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26229#","p1__26229#",1602732605,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__26229#","p1__26229#",1602732605,null),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null)))))),(3),cljs.core.filter.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,chosen_micros_models,vec__26235,session_sel_start,session_sel_end,sel_sessions_count,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26231,event,chosen_model_name){
return (function (p1__26229_SHARP_){
return debux.common.util.spy_first.call(null,cljs.core.partial.call(null,cljs.core._EQ_,sel_sessions_count).call(null,debux.common.util.spy_first.call(null,cljs.core.count.call(null,debux.common.util.spy_first.call(null,p1__26229_SHARP_,new cljs.core.Symbol(null,"p1__26229#","p1__26229#",1602732605,null),(7))),new cljs.core.Symbol(null,"count","count",-514511684,null),(6))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))),(5));
});})(opts__25969__auto____$1,chosen_micros_models,vec__26235,session_sel_start,session_sel_end,sel_sessions_count,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26231,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26229#","p1__26229#",1602732605,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(4),cljs.core.map.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),(5),chosen_micros_models)))))));
var veced_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.vec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var update_fn = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,chosen_micros_models,vec__26235,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26231,event,chosen_model_name){
return (function (app_state__$1,idx){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.merge;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.nth.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = chosen_model;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})() - (function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,chosen_micros_models,vec__26235,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26231,event,chosen_model_name))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.reduce.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = update_fn;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = veced_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.range.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = session_sel_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26228#","p1__26228#",-1181361692,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"chosen-model-name","chosen-model-name",1546761693,null))))),new cljs.core.Symbol("periodization","micros-models","periodization/micros-models",-33832693,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null)),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26229#","p1__26229#",1602732605,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"sel-sessions-count","sel-sessions-count",-270771532,null))))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"chosen-micros-models","chosen-micros-models",1954797444,null)))),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"vec","vec",982683596,null)),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"chosen-model","chosen-model",1651004011,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null)),cljs.core.PersistentArrayMap.EMPTY)))], null),cljs.core.list(new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"veced-app-state","veced-app-state",-424306796,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"session-sel-start","session-sel-start",1922584873,null),new cljs.core.Symbol(null,"session-sel-end","session-sel-end",-1746327584,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26234){var e = e26234;
throw e;
}});
} else {
pr4.events.update_sessions_by_model = (function pr4$events$update_sessions_by_model(app_state,p__26238){
var vec__26239 = p__26238;
var event = cljs.core.nth.call(null,vec__26239,(0),null);
var chosen_model_name = cljs.core.nth.call(null,vec__26239,(1),null);
var chosen_micros_models = cljs.core.filter.call(null,((function (vec__26239,event,chosen_model_name){
return (function (p1__26228_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,chosen_model_name).call(null,cljs.core.val.call(null,p1__26228_SHARP_));
});})(vec__26239,event,chosen_model_name))
,pr4.periodization.micros_models);
var vec__26242 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"session-selection","session-selection",-255735966)], null));
var session_sel_start = cljs.core.nth.call(null,vec__26242,(0),null);
var session_sel_end = cljs.core.nth.call(null,vec__26242,(1),null);
var sel_sessions_count = (session_sel_end - session_sel_start);
var chosen_model = cljs.core.first.call(null,cljs.core.filter.call(null,((function (chosen_micros_models,vec__26242,session_sel_start,session_sel_end,sel_sessions_count,vec__26239,event,chosen_model_name){
return (function (p1__26229_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,sel_sessions_count).call(null,cljs.core.count.call(null,p1__26229_SHARP_));
});})(chosen_micros_models,vec__26242,session_sel_start,session_sel_end,sel_sessions_count,vec__26239,event,chosen_model_name))
,cljs.core.map.call(null,cljs.core.first,chosen_micros_models)));
var veced_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),cljs.core.vec);
var update_fn = ((function (chosen_micros_models,vec__26242,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,vec__26239,event,chosen_model_name){
return (function (app_state__$1,idx){
return cljs.core.update_in.call(null,app_state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392),idx], null),cljs.core.merge,cljs.core.nth.call(null,chosen_model,(idx - session_sel_start),cljs.core.PersistentArrayMap.EMPTY));
});})(chosen_micros_models,vec__26242,session_sel_start,session_sel_end,sel_sessions_count,chosen_model,veced_app_state,vec__26239,event,chosen_model_name))
;
return cljs.core.reduce.call(null,update_fn,veced_app_state,cljs.core.range.call(null,session_sel_start,session_sel_end));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","update-sessions-by-model","pr4.events/update-sessions-by-model",-392885995),pr4.events.update_sessions_by_model);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_calendar_sel_left = (function pr4$events$move_calendar_sel_left(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null))))))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var map__26247 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var map__26247__$1 = (((((!((map__26247 == null))))?(((((map__26247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26247):map__26247);
var first_day = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26248 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selection;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var begin = cljs.core.nth.call(null,vec__26248,(0),null);
var one_left = cljs.core.nth.call(null,vec__26248,(1),null);
var selected = cljs.core.nth.call(null,vec__26248,(2),null);
var one_right = cljs.core.nth.call(null,vec__26248,(3),null);
var the_rest = cljs.core.nth.call(null,vec__26248,(4),null);
var previous_day = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api._.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = first_day;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto___26257__$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto___26258 = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (!((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.empty_QMARK_.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.first.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function(){throw cljs.core.ex_info.call(null,"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),one_left], null))})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto___26258,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (!((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.map_QMARK_.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.first.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"calendar","calendar",62308146),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),previous_day,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),one_right,the_rest)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(4)),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"days","days",-1394072564),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.concat.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = begin;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selected;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = one_right;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = the_rest;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),(3)),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$2,opts__25969__auto____$1,map__26247,map__26247__$1,first_day,days,selection,vec__26248,begin,one_left,selected,one_right,the_rest,previous_day,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26245_SHARP_){
var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.mapv.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.partial.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dec;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p1__26245_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
});})(opts__25969__auto____$2,opts__25969__auto____$1,map__26247,map__26247__$1,first_day,days,selection,vec__26248,begin,one_left,selected,one_right,the_rest,previous_day,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null)))),(2)));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol("tick","-","tick/-",-475106161,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null)),cljs.core.list(new cljs.core.Symbol("tick","new-period","tick/new-period",1092474042,null),(1),new cljs.core.Keyword(null,"days","days",-1394072564))))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null)))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"previous-day","previous-day",-1408625771,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))], null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Symbol(null,"p1__26245#","p1__26245#",1178713451,null))))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26246){var e = e26246;
throw e;
}});
} else {
pr4.events.move_calendar_sel_left = (function pr4$events$move_calendar_sel_left(app_state){
var map__26252 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null));
var map__26252__$1 = (((((!((map__26252 == null))))?(((((map__26252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26252):map__26252);
var first_day = cljs.core.get.call(null,map__26252__$1,new cljs.core.Keyword(null,"first-day","first-day",-1519249764));
var days = cljs.core.get.call(null,map__26252__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var vec__26253 = pr4.events.chop_coll.call(null,days,selection);
var begin = cljs.core.nth.call(null,vec__26253,(0),null);
var one_left = cljs.core.nth.call(null,vec__26253,(1),null);
var selected = cljs.core.nth.call(null,vec__26253,(2),null);
var one_right = cljs.core.nth.call(null,vec__26253,(3),null);
var the_rest = cljs.core.nth.call(null,vec__26253,(4),null);
var previous_day = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick.alpha.api._.call(null,tick.alpha.api.date.call(null,first_day),tick.alpha.api.new_period.call(null,(1),new cljs.core.Keyword(null,"days","days",-1394072564))));
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,one_left))))){
throw cljs.core.ex_info.call(null,"There's already information in the previous day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-day-info","previous-day-info",2077729904),one_left], null));
} else {
}

if((!(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,one_left))))){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.assoc,new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),previous_day,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),one_right,the_rest)], null));
} else {
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.assoc,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,begin,selected,one_left,one_right,the_rest)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),((function (map__26252,map__26252__$1,first_day,days,selection,vec__26253,begin,one_left,selected,one_right,the_rest,previous_day){
return (function (p1__26245_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.dec),p1__26245_SHARP_);
});})(map__26252,map__26252__$1,first_day,days,selection,vec__26253,begin,one_left,selected,one_right,the_rest,previous_day))
);
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-calendar-sel-left","pr4.events/move-calendar-sel-left",-180215541),pr4.events.move_calendar_sel_left);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.move_calendar_sel_right = (function pr4$events$move_calendar_sel_right(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"%1","%1",1309450150,null)))))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var map__26261 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var map__26261__$1 = (((((!((map__26261 == null))))?(((((map__26261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26261):map__26261);
var days = cljs.core.get.call(null,map__26261__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26262 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.events.chop_coll.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selection;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var begin = cljs.core.nth.call(null,vec__26262,(0),null);
var one_left = cljs.core.nth.call(null,vec__26262,(1),null);
var selected = cljs.core.nth.call(null,vec__26262,(2),null);
var one_right = cljs.core.nth.call(null,vec__26262,(3),null);
var the_rest = cljs.core.nth.call(null,vec__26262,(4),null);
var opts__25969__auto___26271__$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto___26272 = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (!((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.empty_QMARK_.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.first.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = one_right;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function(){throw cljs.core.ex_info.call(null,"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),one_right], null))})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto___26272,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));


return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"days","days",-1394072564),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.concat.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = begin;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = one_left;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = selected;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = the_rest;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null))),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,map__26261,map__26261__$1,days,selection,vec__26262,begin,one_left,selected,one_right,the_rest,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26259_SHARP_){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.mapv.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.partial.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.inc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p1__26259_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,map__26261,map__26261__$1,days,selection,vec__26262,begin,one_left,selected,one_right,the_rest,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null)))),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"days","days",246458963,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Symbol(null,"one-left","one-left",912467203,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null),new cljs.core.Symbol(null,"the-rest","the-rest",1339025298,null)], null),cljs.core.list(new cljs.core.Symbol(null,"chop-coll","chop-coll",-1472089542,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)))),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),new cljs.core.Symbol(null,"one-right","one-right",-1702408027,null)], null)))),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Symbol(null,"p1__26259#","p1__26259#",-130759911,null)))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26260){var e = e26260;
throw e;
}});
} else {
pr4.events.move_calendar_sel_right = (function pr4$events$move_calendar_sel_right(app_state){
var map__26266 = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null));
var map__26266__$1 = (((((!((map__26266 == null))))?(((((map__26266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26266):map__26266);
var days = cljs.core.get.call(null,map__26266__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var selection = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null));
var vec__26267 = pr4.events.chop_coll.call(null,days,selection);
var begin = cljs.core.nth.call(null,vec__26267,(0),null);
var one_left = cljs.core.nth.call(null,vec__26267,(1),null);
var selected = cljs.core.nth.call(null,vec__26267,(2),null);
var one_right = cljs.core.nth.call(null,vec__26267,(3),null);
var the_rest = cljs.core.nth.call(null,vec__26267,(4),null);
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,one_right))))){
throw cljs.core.ex_info.call(null,"There's already information in the next day.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-day-info","next-day-info",-712388993),one_right], null));
} else {
}

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),cljs.core.assoc,new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.concat.call(null,begin,one_left,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),selected,the_rest)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),((function (map__26266,map__26266__$1,days,selection,vec__26267,begin,one_left,selected,one_right,the_rest){
return (function (p1__26259_SHARP_){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.inc),p1__26259_SHARP_);
});})(map__26266,map__26266__$1,days,selection,vec__26267,begin,one_left,selected,one_right,the_rest))
);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","move-calendar-sel-right","pr4.events/move-calendar-sel-right",-1182109671),pr4.events.move_calendar_sel_right);
pr4.events.push_days_to_right = (function pr4$events$push_days_to_right(to_add,the_rest){
var G__26279 = to_add;
var vec__26281 = G__26279;
var seq__26282 = cljs.core.seq.call(null,vec__26281);
var first__26283 = cljs.core.first.call(null,seq__26282);
var seq__26282__$1 = cljs.core.next.call(null,seq__26282);
var f_to_add = first__26283;
var to_add__$1 = seq__26282__$1;
var G__26280 = the_rest;
var vec__26284 = G__26280;
var seq__26285 = cljs.core.seq.call(null,vec__26284);
var first__26286 = cljs.core.first.call(null,seq__26285);
var seq__26285__$1 = cljs.core.next.call(null,seq__26285);
var f_coll = first__26286;
var coll = seq__26285__$1;
var added = cljs.core.PersistentVector.EMPTY;
var G__26279__$1 = G__26279;
var G__26280__$1 = G__26280;
var added__$1 = added;
while(true){
var vec__26293 = G__26279__$1;
var seq__26294 = cljs.core.seq.call(null,vec__26293);
var first__26295 = cljs.core.first.call(null,seq__26294);
var seq__26294__$1 = cljs.core.next.call(null,seq__26294);
var f_to_add__$1 = first__26295;
var to_add__$2 = seq__26294__$1;
var vec__26296 = G__26280__$1;
var seq__26297 = cljs.core.seq.call(null,vec__26296);
var first__26298 = cljs.core.first.call(null,seq__26297);
var seq__26297__$1 = cljs.core.next.call(null,seq__26297);
var f_coll__$1 = first__26298;
var coll__$1 = seq__26297__$1;
var added__$2 = added__$1;
if((((f_to_add__$1 == null)) && ((f_coll__$1 == null)))){
return added__$2;
} else {
if((f_to_add__$1 == null)){
return cljs.core.concat.call(null,added__$2,cljs.core.cons.call(null,f_coll__$1,coll__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"session-idx","session-idx",1467570168).cljs$core$IFn$_invoke$arity$1(f_coll__$1))){
var G__26299 = cljs.core.conj.call(null,cljs.core.vec.call(null,to_add__$2),f_coll__$1);
var G__26300 = coll__$1;
var G__26301 = cljs.core.conj.call(null,added__$2,f_to_add__$1);
G__26279__$1 = G__26299;
G__26280__$1 = G__26300;
added__$1 = G__26301;
continue;
} else {
var G__26302 = to_add__$2;
var G__26303 = coll__$1;
var G__26304 = cljs.core.conj.call(null,added__$2,f_to_add__$1);
G__26279__$1 = G__26302;
G__26280__$1 = G__26303;
added__$1 = G__26304;
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
var vec__26306 = pr4.events.chop_coll.call(null,days,selection);
var s1 = cljs.core.nth.call(null,vec__26306,(0),null);
var s2 = cljs.core.nth.call(null,vec__26306,(1),null);
var selected_days = cljs.core.nth.call(null,vec__26306,(2),null);
var s3 = cljs.core.nth.call(null,vec__26306,(3),null);
var the_rest = cljs.core.nth.call(null,vec__26306,(4),null);
var absences = cljs.core.map.call(null,((function (selection,days,vec__26306,s1,s2,selected_days,s3,the_rest){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absent?","absent?",1101710978),true], null));
});})(selection,days,vec__26306,s1,s2,selected_days,s3,the_rest))
,selected_days);
var selected_days_with_info = cljs.core.remove.call(null,((function (selection,days,vec__26306,s1,s2,selected_days,s3,the_rest,absences){
return (function (p1__26305_SHARP_){
return cljs.core.empty_QMARK_.call(null,p1__26305_SHARP_);
});})(selection,days,vec__26306,s1,s2,selected_days,s3,the_rest,absences))
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
pr4.events.toggled_absent = (function pr4$events$toggled_absent(app_state,p__26309){
var vec__26310 = p__26309;
var event = cljs.core.nth.call(null,vec__26310,(0),null);
var absent_QMARK_ = cljs.core.nth.call(null,vec__26310,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (cljs.core.truth_((function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = absent_QMARK_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.events.update_absent.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})():(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.events.update_not_absent.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"absent?","absent?",-1552724791,null),cljs.core.list(new cljs.core.Symbol(null,"update-absent","update-absent",306314416,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),cljs.core.list(new cljs.core.Symbol(null,"update-not-absent","update-not-absent",824044669,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26313){var e = e26313;
throw e;
}});
} else {
pr4.events.toggled_absent = (function pr4$events$toggled_absent(app_state,p__26314){
var vec__26315 = p__26314;
var event = cljs.core.nth.call(null,vec__26315,(0),null);
var absent_QMARK_ = cljs.core.nth.call(null,vec__26315,(1),null);
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

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p__26319){
var vec__26320 = p__26319;
var day_s = cljs.core.nth.call(null,vec__26320,(0),null);
var day_e = cljs.core.nth.call(null,vec__26320,(1),null);
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core._EQ_.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = day_e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})() - (function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = day_e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})() + (2));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})():(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = day_s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})() + (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null)),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"day-e","day-e",1784647164,null),(2))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"day-s","day-s",1915336626,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"day-s","day-s",1915336626,null))], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26318){var e = e26318;
throw e;
}});
} else {
pr4.events.toggle_multiple_calendar_selection = (function pr4$events$toggle_multiple_calendar_selection(app_state){
return cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433)], null),(function (p__26323){
var vec__26324 = p__26323;
var day_s = cljs.core.nth.call(null,vec__26324,(0),null);
var day_e = cljs.core.nth.call(null,vec__26324,(1),null);
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
pr4.events.reset_calendar_selection = (function pr4$events$reset_calendar_selection(app_state,p__26327){
var vec__26328 = p__26327;
var event = cljs.core.nth.call(null,vec__26328,(0),null);
var new_val = cljs.core.nth.call(null,vec__26328,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_val;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new cljs.core.Symbol(null,"new-val","new-val",902372928,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26331){var e = e26331;
throw e;
}});
} else {
pr4.events.reset_calendar_selection = (function pr4$events$reset_calendar_selection(app_state,p__26332){
var vec__26333 = p__26332;
var event = cljs.core.nth.call(null,vec__26333,(0),null);
var new_val = cljs.core.nth.call(null,vec__26333,(1),null);
return cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"calendar-selection","calendar-selection",-118728433),new_val);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),pr4.events.reset_calendar_selection);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.session_sets_box_clicked = (function pr4$events$session_sets_box_clicked(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-sets"),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)))));

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-sets"),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-sets"),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),(0));
}catch (e26336){var e = e26336;
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

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-intensity"),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688),"editing-intensity"),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))),(0));
}catch (e26337){var e = e26337;
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

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),new cljs.core.Keyword(null,"domain","domain",1847214937),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)], null))),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),(0));
}catch (e26338){var e = e26338;
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

return debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,cljs.core.update.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"session-state","session-state",1300785688)),(1)),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504)),(0));
}catch (e26339){var e = e26339;
throw e;
}});
} else {
pr4.events.session_adjust_confirmed = (function pr4$events$session_adjust_confirmed(app_state){
return cljs.core.update.call(null,cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"session-state","session-state",1300785688)),new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.dissoc,new cljs.core.Keyword(null,"sessions-backup","sessions-backup",1654633504));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","session-adjust-confirmed","pr4.events/session-adjust-confirmed",2106134146),pr4.events.session_adjust_confirmed);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.events.zoom_macro_timeline = (function pr4$events$zoom_macro_timeline(app_state,p__26340){
var vec__26341 = p__26340;
var event = cljs.core.nth.call(null,vec__26341,(0),null);
var vec__26344 = cljs.core.nth.call(null,vec__26341,(1),null);
var type = cljs.core.nth.call(null,vec__26344,(0),null);
var name = cljs.core.nth.call(null,vec__26344,(1),null);
var sel_start = cljs.core.nth.call(null,vec__26344,(2),null);
var sel_end = cljs.core.nth.call(null,vec__26344,(3),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null))),new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null)], null),cljs.core.list(new cljs.core.Symbol("tick","relation","tick/relation",968504961,null),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s1","s1",338671490,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null))),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s2","s2",614604262,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null))))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),cljs.core.list(new cljs.core.Symbol("util","first-filter","util/first-filter",619273365,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"t","t",242699008,null)))),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null)),new cljs.core.Symbol(null,"updated-rows","updated-rows",1140179114,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contains","contains",676899812),"null",new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),"null",new cljs.core.Keyword(null,"started-by","started-by",1211835163),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"finishes","finishes",-431359586),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null))))),new cljs.core.Symbol(null,"app-state-with-rows","app-state-with-rows",-1812498154,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058),new cljs.core.Symbol(null,"updated-rows","updated-rows",1140179114,null)),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state-with-rows","app-state-with-rows",-1812498154,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"name","name",-810760592,null),"Macroc\u00EDclo"),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var original_timeline = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var or__4131__auto__ = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var compare_interval = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,original_timeline,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end){
return (function (s1,e1,s2,e2){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.relation.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.new_interval.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s1","s1",338671490,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = e1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"e1","e1",-732861271,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s1","s1",338671490,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.new_interval.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s2","s2",614604262,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = e2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"e2","e2",1288255343,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s2","s2",614604262,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","relation","tick/relation",968504961,null),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s1","s1",338671490,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null))),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s2","s2",614604262,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,original_timeline,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null)], null),cljs.core.list(new cljs.core.Symbol("tick","relation","tick/relation",968504961,null),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s1","s1",338671490,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null))),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s2","s2",614604262,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26348 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.first_filter.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$2,opts__25969__auto____$1,original_timeline,compare_interval,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end){
return (function (p__26351){
var vec__26352 = p__26351;
var t = cljs.core.nth.call(null,vec__26352,(0),null);
var n = cljs.core.nth.call(null,vec__26352,(1),null);
var s = cljs.core.nth.call(null,vec__26352,(2),null);
var e = cljs.core.nth.call(null,vec__26352,(3),null);
var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var and__4120__auto__ = (function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),null,new cljs.core.Keyword(null,"equals","equals",-463033970),null,new cljs.core.Keyword(null,"starts","starts",-1501572425),null,new cljs.core.Keyword(null,"finishes","finishes",-431359586),null], null), null).call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = compare_interval.call(null,(function (){var opts__25969__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sel_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sel_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
if(cljs.core.truth_(and__4120__auto__)){
var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core._EQ_.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = type;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = t;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"t","t",242699008,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
} else {
return and__4120__auto__;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"t","t",242699008,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
});})(opts__25969__auto____$2,opts__25969__auto____$1,original_timeline,compare_interval,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"t","t",242699008,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","first-filter","util/first-filter",619273365,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"t","t",242699008,null)))),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var t = cljs.core.nth.call(null,vec__26348,(0),null);
var n = cljs.core.nth.call(null,vec__26348,(1),null);
var original_start = cljs.core.nth.call(null,vec__26348,(2),null);
var original_end = cljs.core.nth.call(null,vec__26348,(3),null);
var updated_rows = debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"finishes","finishes",-431359586),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)))),(2),cljs.core.map.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,original_timeline,compare_interval,vec__26348,t,n,original_start,original_end,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end){
return (function (p__26355){
var vec__26356 = p__26355;
var t__$1 = cljs.core.nth.call(null,vec__26356,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__26356,(1),null);
var s = cljs.core.nth.call(null,vec__26356,(2),null);
var e = cljs.core.nth.call(null,vec__26356,(3),null);
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var G__26359 = (function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = compare_interval.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26359__$1 = (((G__26359 instanceof cljs.core.Keyword))?G__26359.fqn:null);
switch (G__26359__$1) {
case "starts":
var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = t__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = n__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;

break;
case "during":
var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = t__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = n__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;

break;
case "finishes":
var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = t__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = n__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;

break;
default:
var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = t__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = n__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;

}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"finishes","finishes",-431359586),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,original_timeline,compare_interval,vec__26348,t,n,original_start,original_end,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"finishes","finishes",-431359586),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contains","contains",676899812),"null",new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),"null",new cljs.core.Keyword(null,"started-by","started-by",1211835163),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),(3),cljs.core.filter.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,original_timeline,compare_interval,vec__26348,t,n,original_start,original_end,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end){
return (function (p__26360){
var vec__26361 = p__26360;
var t__$1 = cljs.core.nth.call(null,vec__26361,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__26361,(1),null);
var s = cljs.core.nth.call(null,vec__26361,(2),null);
var e = cljs.core.nth.call(null,vec__26361,(3),null);
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contains","contains",676899812),null,new cljs.core.Keyword(null,"during","during",351301349),null,new cljs.core.Keyword(null,"equals","equals",-463033970),null,new cljs.core.Keyword(null,"starts","starts",-1501572425),null,new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),null,new cljs.core.Keyword(null,"started-by","started-by",1211835163),null,new cljs.core.Keyword(null,"finishes","finishes",-431359586),null], null), null).call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = compare_interval.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = s;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = e;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contains","contains",676899812),"null",new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),"null",new cljs.core.Keyword(null,"started-by","started-by",1211835163),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
});})(opts__25969__auto____$1,original_timeline,compare_interval,vec__26348,t,n,original_start,original_end,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_,vec__26341,event,vec__26344,type,name,sel_start,sel_end))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contains","contains",676899812),"null",new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),"null",new cljs.core.Keyword(null,"started-by","started-by",1211835163),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null),(4),original_timeline)))));
var app_state_with_rows = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"ui","ui",-469653645),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = updated_rows;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"updated-rows","updated-rows",1140179114,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058),new cljs.core.Symbol(null,"updated-rows","updated-rows",1140179114,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var updated_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state_with_rows;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state-with-rows","app-state-with-rows",-1812498154,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state-with-rows","app-state-with-rows",-1812498154,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core._EQ_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = name;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),"Macroc\u00EDclo");
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"name","name",-810760592,null),"Macroc\u00EDclo"),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = updated_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = updated_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = original_timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"name","name",-810760592,null),"Macroc\u00EDclo"),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null)),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null))),new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s1","s1",338671490,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null),new cljs.core.Symbol(null,"s2","s2",614604262,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null)], null),cljs.core.list(new cljs.core.Symbol("tick","relation","tick/relation",968504961,null),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s1","s1",338671490,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e1","e1",-732861271,null))),cljs.core.list(new cljs.core.Symbol("tick","new-interval","tick/new-interval",-50069801,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"s2","s2",614604262,null)),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"e2","e2",1288255343,null))))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),cljs.core.list(new cljs.core.Symbol("util","first-filter","util/first-filter",619273365,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"sel-start","sel-start",1815891316,null),new cljs.core.Symbol(null,"sel-end","sel-end",1721616792,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"t","t",242699008,null)))),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null)),new cljs.core.Symbol(null,"updated-rows","updated-rows",1140179114,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null),new cljs.core.Keyword(null,"finishes","finishes",-431359586),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null))),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)], null),cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contains","contains",676899812),"null",new cljs.core.Keyword(null,"during","during",351301349),"null",new cljs.core.Keyword(null,"equals","equals",-463033970),"null",new cljs.core.Keyword(null,"starts","starts",-1501572425),"null",new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),"null",new cljs.core.Keyword(null,"started-by","started-by",1211835163),"null",new cljs.core.Keyword(null,"finishes","finishes",-431359586),"null"], null), null),cljs.core.list(new cljs.core.Symbol(null,"compare-interval","compare-interval",-1918168553,null),new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null))),new cljs.core.Symbol(null,"app-state-with-rows","app-state-with-rows",-1812498154,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058),new cljs.core.Symbol(null,"updated-rows","updated-rows",1140179114,null)),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state-with-rows","app-state-with-rows",-1812498154,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"original-start","original-start",-528980840,null),new cljs.core.Symbol(null,"original-end","original-end",352281701,null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"name","name",-810760592,null),"Macroc\u00EDclo"),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"updated-app-state","updated-app-state",954354599,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null),new cljs.core.Symbol(null,"original-timeline","original-timeline",-1633023380,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26347){var e = e26347;
throw e;
}});
} else {
pr4.events.zoom_macro_timeline = (function pr4$events$zoom_macro_timeline(app_state,p__26364){
var vec__26365 = p__26364;
var event = cljs.core.nth.call(null,vec__26365,(0),null);
var vec__26368 = cljs.core.nth.call(null,vec__26365,(1),null);
var type = cljs.core.nth.call(null,vec__26368,(0),null);
var name = cljs.core.nth.call(null,vec__26368,(1),null);
var sel_start = cljs.core.nth.call(null,vec__26368,(2),null);
var sel_end = cljs.core.nth.call(null,vec__26368,(3),null);
var original_timeline = (function (){var or__4131__auto__ = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null));
}
})();
var compare_interval = ((function (original_timeline,vec__26365,event,vec__26368,type,name,sel_start,sel_end){
return (function (s1,e1,s2,e2){
return tick.alpha.api.relation.call(null,tick.alpha.api.new_interval.call(null,tick.alpha.api.date.call(null,s1),tick.alpha.api.date.call(null,e1)),tick.alpha.api.new_interval.call(null,tick.alpha.api.date.call(null,s2),tick.alpha.api.date.call(null,e2)));
});})(original_timeline,vec__26365,event,vec__26368,type,name,sel_start,sel_end))
;
var vec__26371 = pr4.util.first_filter.call(null,((function (original_timeline,compare_interval,vec__26365,event,vec__26368,type,name,sel_start,sel_end){
return (function (p__26374){
var vec__26375 = p__26374;
var t = cljs.core.nth.call(null,vec__26375,(0),null);
var n = cljs.core.nth.call(null,vec__26375,(1),null);
var s = cljs.core.nth.call(null,vec__26375,(2),null);
var e = cljs.core.nth.call(null,vec__26375,(3),null);
var and__4120__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"during","during",351301349),null,new cljs.core.Keyword(null,"equals","equals",-463033970),null,new cljs.core.Keyword(null,"starts","starts",-1501572425),null,new cljs.core.Keyword(null,"finishes","finishes",-431359586),null], null), null).call(null,compare_interval.call(null,sel_start,sel_end,s,e));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,type,t);
} else {
return and__4120__auto__;
}
});})(original_timeline,compare_interval,vec__26365,event,vec__26368,type,name,sel_start,sel_end))
,original_timeline);
var t = cljs.core.nth.call(null,vec__26371,(0),null);
var n = cljs.core.nth.call(null,vec__26371,(1),null);
var original_start = cljs.core.nth.call(null,vec__26371,(2),null);
var original_end = cljs.core.nth.call(null,vec__26371,(3),null);
var updated_rows = cljs.core.map.call(null,((function (original_timeline,compare_interval,vec__26371,t,n,original_start,original_end,vec__26365,event,vec__26368,type,name,sel_start,sel_end){
return (function (p__26378){
var vec__26379 = p__26378;
var t__$1 = cljs.core.nth.call(null,vec__26379,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__26379,(1),null);
var s = cljs.core.nth.call(null,vec__26379,(2),null);
var e = cljs.core.nth.call(null,vec__26379,(3),null);
var G__26382 = compare_interval.call(null,original_start,original_end,s,e);
var G__26382__$1 = (((G__26382 instanceof cljs.core.Keyword))?G__26382.fqn:null);
switch (G__26382__$1) {
case "starts":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [t__$1,n__$1,s,original_end], null);

break;
case "during":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [t__$1,n__$1,original_start,original_end], null);

break;
case "finishes":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [t__$1,n__$1,original_start,e], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [t__$1,n__$1,s,e], null);

}
});})(original_timeline,compare_interval,vec__26371,t,n,original_start,original_end,vec__26365,event,vec__26368,type,name,sel_start,sel_end))
,cljs.core.filter.call(null,((function (original_timeline,compare_interval,vec__26371,t,n,original_start,original_end,vec__26365,event,vec__26368,type,name,sel_start,sel_end){
return (function (p__26383){
var vec__26384 = p__26383;
var t__$1 = cljs.core.nth.call(null,vec__26384,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__26384,(1),null);
var s = cljs.core.nth.call(null,vec__26384,(2),null);
var e = cljs.core.nth.call(null,vec__26384,(3),null);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"contains","contains",676899812),null,new cljs.core.Keyword(null,"during","during",351301349),null,new cljs.core.Keyword(null,"equals","equals",-463033970),null,new cljs.core.Keyword(null,"starts","starts",-1501572425),null,new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),null,new cljs.core.Keyword(null,"started-by","started-by",1211835163),null,new cljs.core.Keyword(null,"finishes","finishes",-431359586),null], null), null).call(null,compare_interval.call(null,original_start,original_end,s,e));
});})(original_timeline,compare_interval,vec__26371,t,n,original_start,original_end,vec__26365,event,vec__26368,type,name,sel_start,sel_end))
,original_timeline));
var app_state_with_rows = cljs.core.update.call(null,app_state,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.assoc,new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058),updated_rows);
var updated_app_state = cljs.core.assoc_in.call(null,app_state_with_rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_start,original_end], null));
if(cljs.core._EQ_.call(null,name,"Macroc\u00EDclo")){
return cljs.core.update_in.call(null,updated_app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389));
} else {
return cljs.core.assoc_in.call(null,updated_app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"original-timeline","original-timeline",1021412389)], null),original_timeline);
}
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.events","zoom-macro-timeline","pr4.events/zoom-macro-timeline",1070822918),pr4.events.zoom_macro_timeline);

//# sourceMappingURL=events.js.map
