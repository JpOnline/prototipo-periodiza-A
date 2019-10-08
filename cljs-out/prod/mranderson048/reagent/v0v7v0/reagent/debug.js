// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0 !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__15925__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15926__i = 0, G__15926__a = new Array(arguments.length -  0);
while (G__15926__i < G__15926__a.length) {G__15926__a[G__15926__i] = arguments[G__15926__i + 0]; ++G__15926__i;}
  args = new cljs.core.IndexedSeq(G__15926__a,0,null);
} 
return G__15925__delegate.call(this,args);};
G__15925.cljs$lang$maxFixedArity = 0;
G__15925.cljs$lang$applyTo = (function (arglist__15927){
var args = cljs.core.seq(arglist__15927);
return G__15925__delegate(args);
});
G__15925.cljs$core$IFn$_invoke$arity$variadic = G__15925__delegate;
return G__15925;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15928__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__15928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15929__i = 0, G__15929__a = new Array(arguments.length -  0);
while (G__15929__i < G__15929__a.length) {G__15929__a[G__15929__i] = arguments[G__15929__i + 0]; ++G__15929__i;}
  args = new cljs.core.IndexedSeq(G__15929__a,0,null);
} 
return G__15928__delegate.call(this,args);};
G__15928.cljs$lang$maxFixedArity = 0;
G__15928.cljs$lang$applyTo = (function (arglist__15930){
var args = cljs.core.seq(arglist__15930);
return G__15928__delegate(args);
});
G__15928.cljs$core$IFn$_invoke$arity$variadic = G__15928__delegate;
return G__15928;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});
