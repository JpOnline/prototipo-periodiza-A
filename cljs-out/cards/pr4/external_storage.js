// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.external_storage');
goog.require('cljs.core');
goog.require('firebase');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('pr4.app_state');
pr4.external_storage.global$module$firebase = goog.global["firebase"];
pr4.external_storage.firebaseConfig = ({"apiKey": "AIzaSyCBagO0y2sPLcng_r39NqVJNkocgbNWw", "authDomain": "pr4-periodiza.firebaseapp.com", "databaseURL": "https://pr4-periodiza.firebaseio.com", "projectId": "pr4-periodiza", "storageBucket": "pr4-periodiza.appspot.com", "messagingSenderId": "209599502229", "appId": "1:209599502229:web:7e8dc961c444d840"});
pr4.external_storage.firebase_db = (function (){
if(cljs.core._EQ_.call(null,(0),pr4.external_storage.global$module$firebase.apps.length)){
pr4.external_storage.global$module$firebase.initializeApp(pr4.external_storage.firebaseConfig);
} else {
}

return pr4.external_storage.global$module$firebase.firestore();
})()
;
pr4.external_storage.user = "tcho";
pr4.external_storage.firebase_save = (function pr4$external_storage$firebase_save(app_state_map){
var json = cljs.core.clj__GT_js.call(null,app_state_map);
if(cljs.core._EQ_.call(null,app_state_map,cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))){
} else {
throw (new Error(["Assert failed: ","The given map is different if converted back from JSON.","\n","(= app-state-map (js->clj json :keywordize-keys true))"].join('')));
}

return pr4.external_storage.firebase_db.collection("users").doc(pr4.external_storage.user).set(json);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.external-storage","domain","pr4.external-storage/domain",-1436608282),(function (p1__26093_SHARP_){
return cljs.core.get.call(null,p1__26093_SHARP_,new cljs.core.Keyword(null,"domain","domain",1847214937));
}));
pr4.external_storage.firebase_el = (function pr4$external_storage$firebase_el(){
var domain_map = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.external-storage","domain","pr4.external-storage/domain",-1436608282)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),domain_map,new cljs.core.Keyword(null,"onError","onError",1669791984),((function (domain_map){
return (function (){
return pr4.external_storage.firebase_save.call(null,domain_map);
});})(domain_map))
,new cljs.core.Keyword(null,"style","style",-496642736),({"display": "none"})], null)], null);
});
pr4.external_storage.init_app_state = (function pr4$external_storage$init_app_state(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.external-storage","initialize-app-state","pr4.external-storage/initialize-app-state",-1723937184),pr4.app_state.default_app_state], null));

return pr4.external_storage.firebase_db.collection("users").doc(pr4.external_storage.user).get().then((function (doc){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.external-storage","initialize-app-state","pr4.external-storage/initialize-app-state",-1723937184),(cljs.core.truth_(doc.exists)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(pr4.app_state.default_app_state),new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.js__GT_clj.call(null,doc.data(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null):pr4.app_state.default_app_state)], null));

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null));
})).catch((function (error){
return console.log("Error getting firebase document:",error);
}));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.external-storage","initialize-app-state","pr4.external-storage/initialize-app-state",-1723937184),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,p__26094){
var vec__26095 = p__26094;
var event = cljs.core.nth.call(null,vec__26095,(0),null);
var application_state = cljs.core.nth.call(null,vec__26095,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol(null,"application-state","application-state",-2060019929,null));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = application_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"application-state","application-state",-2060019929,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26098){var e = e26098;
throw e;
}}):(function (_,p__26099){
var vec__26100 = p__26099;
var event = cljs.core.nth.call(null,vec__26100,(0),null);
var application_state = cljs.core.nth.call(null,vec__26100,(1),null);
return application_state;
})));

//# sourceMappingURL=external_storage.js.map
