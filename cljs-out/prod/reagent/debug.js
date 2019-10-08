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
var G__11834__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11835__i = 0, G__11835__a = new Array(arguments.length -  0);
while (G__11835__i < G__11835__a.length) {G__11835__a[G__11835__i] = arguments[G__11835__i + 0]; ++G__11835__i;}
  args = new cljs.core.IndexedSeq(G__11835__a,0,null);
} 
return G__11834__delegate.call(this,args);};
G__11834.cljs$lang$maxFixedArity = 0;
G__11834.cljs$lang$applyTo = (function (arglist__11836){
var args = cljs.core.seq(arglist__11836);
return G__11834__delegate(args);
});
G__11834.cljs$core$IFn$_invoke$arity$variadic = G__11834__delegate;
return G__11834;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11837__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11838__i = 0, G__11838__a = new Array(arguments.length -  0);
while (G__11838__i < G__11838__a.length) {G__11838__a[G__11838__i] = arguments[G__11838__i + 0]; ++G__11838__i;}
  args = new cljs.core.IndexedSeq(G__11838__a,0,null);
} 
return G__11837__delegate.call(this,args);};
G__11837.cljs$lang$maxFixedArity = 0;
G__11837.cljs$lang$applyTo = (function (arglist__11839){
var args = cljs.core.seq(arglist__11839);
return G__11837__delegate(args);
});
G__11837.cljs$core$IFn$_invoke$arity$variadic = G__11837__delegate;
return G__11837;
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
