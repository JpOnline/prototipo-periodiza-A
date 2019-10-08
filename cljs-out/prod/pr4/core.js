// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
pr4.core.global$module$button = goog.global["Button"];
cljs.core.println.call(null,"This text is printed from src/pr4/core.cljs.");
console.log(pr4.core.global$module$button);
pr4.core.multiply = (function pr4$core$multiply(a,b){
return (a * b);
});
if((typeof pr4 !== 'undefined') && (typeof pr4.core !== 'undefined') && (typeof pr4.core.app_state !== 'undefined')){
} else {
pr4.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
pr4.core.get_app_element = (function pr4$core$get_app_element(){
return goog.dom.getElement("app");
});
pr4.core.hello_world = (function pr4$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pr4.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.core.global$module$button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null),"bla4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/pr4/core.cljs and watch it change Jp7"], null)], null);
});
pr4.core.mount = (function pr4$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.core.hello_world], null),el);
});
pr4.core.mount_app_element = (function pr4$core$mount_app_element(){
var temp__5735__auto__ = pr4.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return pr4.core.mount.call(null,el);
} else {
return null;
}
});
pr4.core.mount_app_element.call(null);
pr4.core.on_reload = (function pr4$core$on_reload(){
return pr4.core.mount_app_element.call(null);
});
