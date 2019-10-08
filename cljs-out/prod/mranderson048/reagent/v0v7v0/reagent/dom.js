// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.dom');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('mranderson048.reagent.v0v7v0.reagent.interop');
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom.imported !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.dom.imported = null;
}
mranderson048.reagent.v0v7v0.reagent.dom.module = (function mranderson048$reagent$v0v7v0$reagent$dom$module(){
if((!((mranderson048.reagent.v0v7v0.reagent.dom.imported == null)))){
return mranderson048.reagent.v0v7v0.reagent.dom.imported;
} else {
if((typeof ReactDOM !== 'undefined')){
return mranderson048.reagent.v0v7v0.reagent.dom.imported = ReactDOM;
} else {
if((typeof require !== 'undefined')){
var or__4131__auto__ = mranderson048.reagent.v0v7v0.reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.dom.roots !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v7v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v7v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots,cljs.core.dissoc,container);

return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
mranderson048.reagent.v0v7v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v7v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__16194 = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16195 = true;
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16195;

try{return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__16194,_STAR_always_update_STAR__temp_val__16195){
return (function (){
var _STAR_always_update_STAR__orig_val__16196 = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16197 = false;
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16197;

try{cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16196;
}});})(_STAR_always_update_STAR__orig_val__16194,_STAR_always_update_STAR__temp_val__16195))
);
}finally {mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16194;
}});
mranderson048.reagent.v0v7v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v7v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v7v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v7v0.reagent.dom.render = (function mranderson048$reagent$v0v7v0$reagent$dom$render(var_args){
var G__16199 = arguments.length;
switch (G__16199) {
case 2:
return mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson048.reagent.v0v7v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson048.reagent.v0v7v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson048.reagent.v0v7v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v7v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v7v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v7v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v7v0$reagent$dom$dom_node(this$){
return (mranderson048.reagent.v0v7v0.reagent.dom.module.call(null)["findDOMNode"])(this$);
});
mranderson048.reagent.v0v7v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v7v0.reagent.dom.dom_node;
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
mranderson048.reagent.v0v7v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v7v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var seq__16201_16205 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.dom.roots)));
var chunk__16202_16206 = null;
var count__16203_16207 = (0);
var i__16204_16208 = (0);
while(true){
if((i__16204_16208 < count__16203_16207)){
var v_16209 = cljs.core._nth.call(null,chunk__16202_16206,i__16204_16208);
cljs.core.apply.call(null,mranderson048.reagent.v0v7v0.reagent.dom.re_render_component,v_16209);


var G__16210 = seq__16201_16205;
var G__16211 = chunk__16202_16206;
var G__16212 = count__16203_16207;
var G__16213 = (i__16204_16208 + (1));
seq__16201_16205 = G__16210;
chunk__16202_16206 = G__16211;
count__16203_16207 = G__16212;
i__16204_16208 = G__16213;
continue;
} else {
var temp__5735__auto___16214 = cljs.core.seq.call(null,seq__16201_16205);
if(temp__5735__auto___16214){
var seq__16201_16215__$1 = temp__5735__auto___16214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16201_16215__$1)){
var c__4550__auto___16216 = cljs.core.chunk_first.call(null,seq__16201_16215__$1);
var G__16217 = cljs.core.chunk_rest.call(null,seq__16201_16215__$1);
var G__16218 = c__4550__auto___16216;
var G__16219 = cljs.core.count.call(null,c__4550__auto___16216);
var G__16220 = (0);
seq__16201_16205 = G__16217;
chunk__16202_16206 = G__16218;
count__16203_16207 = G__16219;
i__16204_16208 = G__16220;
continue;
} else {
var v_16221 = cljs.core.first.call(null,seq__16201_16215__$1);
cljs.core.apply.call(null,mranderson048.reagent.v0v7v0.reagent.dom.re_render_component,v_16221);


var G__16222 = cljs.core.next.call(null,seq__16201_16215__$1);
var G__16223 = null;
var G__16224 = (0);
var G__16225 = (0);
seq__16201_16205 = G__16222;
chunk__16202_16206 = G__16223;
count__16203_16207 = G__16224;
i__16204_16208 = G__16225;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
