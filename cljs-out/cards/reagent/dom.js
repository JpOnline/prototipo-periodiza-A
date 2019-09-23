// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__8650 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8651 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8651;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__8650,_STAR_always_update_STAR__temp_val__8651){
return (function (){
var _STAR_always_update_STAR__orig_val__8652 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8653 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8653;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8652;
}});})(_STAR_always_update_STAR__orig_val__8650,_STAR_always_update_STAR__temp_val__8651))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8650;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__8655 = arguments.length;
switch (G__8655) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__8657_8661 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8658_8662 = null;
var count__8659_8663 = (0);
var i__8660_8664 = (0);
while(true){
if((i__8660_8664 < count__8659_8663)){
var v_8665 = cljs.core._nth.call(null,chunk__8658_8662,i__8660_8664);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8665);


var G__8666 = seq__8657_8661;
var G__8667 = chunk__8658_8662;
var G__8668 = count__8659_8663;
var G__8669 = (i__8660_8664 + (1));
seq__8657_8661 = G__8666;
chunk__8658_8662 = G__8667;
count__8659_8663 = G__8668;
i__8660_8664 = G__8669;
continue;
} else {
var temp__5735__auto___8670 = cljs.core.seq.call(null,seq__8657_8661);
if(temp__5735__auto___8670){
var seq__8657_8671__$1 = temp__5735__auto___8670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8657_8671__$1)){
var c__4550__auto___8672 = cljs.core.chunk_first.call(null,seq__8657_8671__$1);
var G__8673 = cljs.core.chunk_rest.call(null,seq__8657_8671__$1);
var G__8674 = c__4550__auto___8672;
var G__8675 = cljs.core.count.call(null,c__4550__auto___8672);
var G__8676 = (0);
seq__8657_8661 = G__8673;
chunk__8658_8662 = G__8674;
count__8659_8663 = G__8675;
i__8660_8664 = G__8676;
continue;
} else {
var v_8677 = cljs.core.first.call(null,seq__8657_8671__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8677);


var G__8678 = cljs.core.next.call(null,seq__8657_8671__$1);
var G__8679 = null;
var G__8680 = (0);
var G__8681 = (0);
seq__8657_8661 = G__8678;
chunk__8658_8662 = G__8679;
count__8659_8663 = G__8680;
i__8660_8664 = G__8681;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
