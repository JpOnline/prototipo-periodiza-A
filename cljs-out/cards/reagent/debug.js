// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__11836__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11837__i = 0, G__11837__a = new Array(arguments.length -  0);
while (G__11837__i < G__11837__a.length) {G__11837__a[G__11837__i] = arguments[G__11837__i + 0]; ++G__11837__i;}
  args = new cljs.core.IndexedSeq(G__11837__a,0,null);
} 
return G__11836__delegate.call(this,args);};
G__11836.cljs$lang$maxFixedArity = 0;
G__11836.cljs$lang$applyTo = (function (arglist__11838){
var args = cljs.core.seq(arglist__11838);
return G__11836__delegate(args);
});
G__11836.cljs$core$IFn$_invoke$arity$variadic = G__11836__delegate;
return G__11836;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11839__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11840__i = 0, G__11840__a = new Array(arguments.length -  0);
while (G__11840__i < G__11840__a.length) {G__11840__a[G__11840__i] = arguments[G__11840__i + 0]; ++G__11840__i;}
  args = new cljs.core.IndexedSeq(G__11840__a,0,null);
} 
return G__11839__delegate.call(this,args);};
G__11839.cljs$lang$maxFixedArity = 0;
G__11839.cljs$lang$applyTo = (function (arglist__11841){
var args = cljs.core.seq(arglist__11841);
return G__11839__delegate(args);
});
G__11839.cljs$core$IFn$_invoke$arity$variadic = G__11839__delegate;
return G__11839;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
