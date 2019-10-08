// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('mranderson048.garden.v1v3v3.garden.util');
goog.require('mranderson048.garden.v1v3v3.garden.color');
goog.require('mranderson048.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22891 = arguments.length;
var i__4731__auto___22892 = (0);
while(true){
if((i__4731__auto___22892 < len__4730__auto___22891)){
args__4736__auto__.push((arguments[i__4731__auto___22892]));

var G__22893 = (i__4731__auto___22892 + (1));
i__4731__auto___22892 = G__22893;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__22894__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__22894 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__22895__i = 0, G__22895__a = new Array(arguments.length -  0);
while (G__22895__i < G__22895__a.length) {G__22895__a[G__22895__i] = arguments[G__22895__i + 0]; ++G__22895__i;}
  children = new cljs.core.IndexedSeq(G__22895__a,0,null);
} 
return G__22894__delegate.call(this,children);};
G__22894.cljs$lang$maxFixedArity = 0;
G__22894.cljs$lang$applyTo = (function (arglist__22896){
var children = cljs.core.seq(arglist__22896);
return G__22894__delegate(children);
});
G__22894.cljs$core$IFn$_invoke$arity$variadic = G__22894__delegate;
return G__22894;
})()
;
}
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq22889){
var G__22890 = cljs.core.first.call(null,seq22889);
var seq22889__$1 = cljs.core.next.call(null,seq22889);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22890,seq22889__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.cssfn = (function mranderson048$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__22897__delegate = function (args){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__22897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22898__i = 0, G__22898__a = new Array(arguments.length -  0);
while (G__22898__i < G__22898__a.length) {G__22898__a[G__22898__i] = arguments[G__22898__i + 0]; ++G__22898__i;}
  args = new cljs.core.IndexedSeq(G__22898__a,0,null);
} 
return G__22897__delegate.call(this,args);};
G__22897.cljs$lang$maxFixedArity = 0;
G__22897.cljs$lang$applyTo = (function (arglist__22899){
var args = cljs.core.seq(arglist__22899);
return G__22897__delegate(args);
});
G__22897.cljs$core$IFn$_invoke$arity$variadic = G__22897__delegate;
return G__22897;
})()
;
});
mranderson048.garden.v1v3v3.garden.stylesheet.at_rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22901 = arguments.length;
var i__4731__auto___22902 = (0);
while(true){
if((i__4731__auto___22902 < len__4730__auto___22901)){
args__4736__auto__.push((arguments[i__4731__auto___22902]));

var G__22903 = (i__4731__auto___22902 + (1));
i__4731__auto___22902 = G__22903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq22900){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22900));
});

/**
 * Create a CSS @import rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__22907 = arguments.length;
switch (G__22907) {
case 1:
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___22909 = arguments.length;
var i__4731__auto___22910 = (0);
while(true){
if((i__4731__auto___22910 < len__4730__auto___22909)){
args_arr__4751__auto__.push((arguments[i__4731__auto___22910]));

var G__22911 = (i__4731__auto___22910 + (1));
i__4731__auto___22910 = G__22911;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq22905){
var G__22906 = cljs.core.first.call(null,seq22905);
var seq22905__$1 = cljs.core.next.call(null,seq22905);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22906,seq22905__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22914 = arguments.length;
var i__4731__auto___22915 = (0);
while(true){
if((i__4731__auto___22915 < len__4730__auto___22914)){
args__4736__auto__.push((arguments[i__4731__auto___22915]));

var G__22916 = (i__4731__auto___22915 + (1));
i__4731__auto___22915 = G__22916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq22912){
var G__22913 = cljs.core.first.call(null,seq22912);
var seq22912__$1 = cljs.core.next.call(null,seq22912);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22913,seq22912__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22919 = arguments.length;
var i__4731__auto___22920 = (0);
while(true){
if((i__4731__auto___22920 < len__4730__auto___22919)){
args__4736__auto__.push((arguments[i__4731__auto___22920]));

var G__22921 = (i__4731__auto___22920 + (1));
i__4731__auto___22920 = G__22921;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq22917){
var G__22918 = cljs.core.first.call(null,seq22917);
var seq22917__$1 = cljs.core.next.call(null,seq22917);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22918,seq22917__$1);
});

/**
 * Create a color from RGB values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rgb = (function mranderson048$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return mranderson048.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.hsl = (function mranderson048$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return mranderson048.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
