// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25476__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25473 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25474 = cljs.core.seq.call(null,vec__25473);
var first__25475 = cljs.core.first.call(null,seq__25474);
var seq__25474__$1 = cljs.core.next.call(null,seq__25474);
var tag = first__25475;
var body = seq__25474__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25477__i = 0, G__25477__a = new Array(arguments.length -  0);
while (G__25477__i < G__25477__a.length) {G__25477__a[G__25477__i] = arguments[G__25477__i + 0]; ++G__25477__i;}
  args = new cljs.core.IndexedSeq(G__25477__a,0,null);
} 
return G__25476__delegate.call(this,args);};
G__25476.cljs$lang$maxFixedArity = 0;
G__25476.cljs$lang$applyTo = (function (arglist__25478){
var args = cljs.core.seq(arglist__25478);
return G__25476__delegate(args);
});
G__25476.cljs$core$IFn$_invoke$arity$variadic = G__25476__delegate;
return G__25476;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__25479(s__25480){
return (new cljs.core.LazySeq(null,(function (){
var s__25480__$1 = s__25480;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25480__$1);
if(temp__5735__auto__){
var s__25480__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25480__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25480__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25482 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25481 = (0);
while(true){
if((i__25481 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__25481);
cljs.core.chunk_append.call(null,b__25482,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25483 = (i__25481 + (1));
i__25481 = G__25483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25482),sablono$core$update_arglists_$_iter__25479.call(null,cljs.core.chunk_rest.call(null,s__25480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25482),null);
}
} else {
var args = cljs.core.first.call(null,s__25480__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25479.call(null,cljs.core.rest.call(null,s__25480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25489 = arguments.length;
var i__4731__auto___25490 = (0);
while(true){
if((i__4731__auto___25490 < len__4730__auto___25489)){
args__4736__auto__.push((arguments[i__4731__auto___25490]));

var G__25491 = (i__4731__auto___25490 + (1));
i__4731__auto___25490 = G__25491;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__25485(s__25486){
return (new cljs.core.LazySeq(null,(function (){
var s__25486__$1 = s__25486;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25486__$1);
if(temp__5735__auto__){
var s__25486__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25486__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25486__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25488 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25487 = (0);
while(true){
if((i__25487 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__25487);
cljs.core.chunk_append.call(null,b__25488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25492 = (i__25487 + (1));
i__25487 = G__25492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25488),sablono$core$iter__25485.call(null,cljs.core.chunk_rest.call(null,s__25486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25488),null);
}
} else {
var style = cljs.core.first.call(null,s__25486__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25485.call(null,cljs.core.rest.call(null,s__25486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq25484){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25484));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25493 = (function sablono$core$link_to25493(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25496 = arguments.length;
var i__4731__auto___25497 = (0);
while(true){
if((i__4731__auto___25497 < len__4730__auto___25496)){
args__4736__auto__.push((arguments[i__4731__auto___25497]));

var G__25498 = (i__4731__auto___25497 + (1));
i__4731__auto___25497 = G__25498;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25493.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to25493.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25493.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to25493.cljs$lang$applyTo = (function (seq25494){
var G__25495 = cljs.core.first.call(null,seq25494);
var seq25494__$1 = cljs.core.next.call(null,seq25494);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25495,seq25494__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25493);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25499 = (function sablono$core$mail_to25499(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25506 = arguments.length;
var i__4731__auto___25507 = (0);
while(true){
if((i__4731__auto___25507 < len__4730__auto___25506)){
args__4736__auto__.push((arguments[i__4731__auto___25507]));

var G__25508 = (i__4731__auto___25507 + (1));
i__4731__auto___25507 = G__25508;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25499.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to25499.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25502){
var vec__25503 = p__25502;
var content = cljs.core.nth.call(null,vec__25503,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25499.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to25499.cljs$lang$applyTo = (function (seq25500){
var G__25501 = cljs.core.first.call(null,seq25500);
var seq25500__$1 = cljs.core.next.call(null,seq25500);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25501,seq25500__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25499);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25509 = (function sablono$core$unordered_list25509(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list25509_$_iter__25510(s__25511){
return (new cljs.core.LazySeq(null,(function (){
var s__25511__$1 = s__25511;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25511__$1);
if(temp__5735__auto__){
var s__25511__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25511__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25511__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25513 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25512 = (0);
while(true){
if((i__25512 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__25512);
cljs.core.chunk_append.call(null,b__25513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25514 = (i__25512 + (1));
i__25512 = G__25514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25513),sablono$core$unordered_list25509_$_iter__25510.call(null,cljs.core.chunk_rest.call(null,s__25511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25513),null);
}
} else {
var x = cljs.core.first.call(null,s__25511__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25509_$_iter__25510.call(null,cljs.core.rest.call(null,s__25511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25509);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25515 = (function sablono$core$ordered_list25515(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list25515_$_iter__25516(s__25517){
return (new cljs.core.LazySeq(null,(function (){
var s__25517__$1 = s__25517;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25517__$1);
if(temp__5735__auto__){
var s__25517__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25517__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25517__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25519 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25518 = (0);
while(true){
if((i__25518 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__25518);
cljs.core.chunk_append.call(null,b__25519,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25520 = (i__25518 + (1));
i__25518 = G__25520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25519),sablono$core$ordered_list25515_$_iter__25516.call(null,cljs.core.chunk_rest.call(null,s__25517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25519),null);
}
} else {
var x = cljs.core.first.call(null,s__25517__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25515_$_iter__25516.call(null,cljs.core.rest.call(null,s__25517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25515);
/**
 * Create an image element.
 */
sablono.core.image25521 = (function sablono$core$image25521(var_args){
var G__25523 = arguments.length;
switch (G__25523) {
case 1:
return sablono.core.image25521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image25521.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25521.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25521.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25521);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25525_SHARP_,p2__25526_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25525_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25526_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25527_SHARP_,p2__25528_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25527_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25528_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__25530 = arguments.length;
switch (G__25530) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field25532 = (function sablono$core$color_field25532(var_args){
var G__25534 = arguments.length;
switch (G__25534) {
case 1:
return sablono.core.color_field25532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field25532.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25293__auto__);
});

sablono.core.color_field25532.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.color_field25532.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25532);

/**
 * Creates a date input field.
 */
sablono.core.date_field25535 = (function sablono$core$date_field25535(var_args){
var G__25537 = arguments.length;
switch (G__25537) {
case 1:
return sablono.core.date_field25535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field25535.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25293__auto__);
});

sablono.core.date_field25535.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.date_field25535.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25535);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25538 = (function sablono$core$datetime_field25538(var_args){
var G__25540 = arguments.length;
switch (G__25540) {
case 1:
return sablono.core.datetime_field25538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field25538.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25293__auto__);
});

sablono.core.datetime_field25538.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.datetime_field25538.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25538);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25541 = (function sablono$core$datetime_local_field25541(var_args){
var G__25543 = arguments.length;
switch (G__25543) {
case 1:
return sablono.core.datetime_local_field25541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field25541.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25293__auto__);
});

sablono.core.datetime_local_field25541.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.datetime_local_field25541.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25541);

/**
 * Creates a email input field.
 */
sablono.core.email_field25544 = (function sablono$core$email_field25544(var_args){
var G__25546 = arguments.length;
switch (G__25546) {
case 1:
return sablono.core.email_field25544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field25544.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25293__auto__);
});

sablono.core.email_field25544.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.email_field25544.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25544);

/**
 * Creates a file input field.
 */
sablono.core.file_field25547 = (function sablono$core$file_field25547(var_args){
var G__25549 = arguments.length;
switch (G__25549) {
case 1:
return sablono.core.file_field25547.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25547.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field25547.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25293__auto__);
});

sablono.core.file_field25547.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.file_field25547.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25547);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25550 = (function sablono$core$hidden_field25550(var_args){
var G__25552 = arguments.length;
switch (G__25552) {
case 1:
return sablono.core.hidden_field25550.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25550.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field25550.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25293__auto__);
});

sablono.core.hidden_field25550.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.hidden_field25550.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25550);

/**
 * Creates a month input field.
 */
sablono.core.month_field25553 = (function sablono$core$month_field25553(var_args){
var G__25555 = arguments.length;
switch (G__25555) {
case 1:
return sablono.core.month_field25553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field25553.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25293__auto__);
});

sablono.core.month_field25553.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.month_field25553.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25553);

/**
 * Creates a number input field.
 */
sablono.core.number_field25556 = (function sablono$core$number_field25556(var_args){
var G__25558 = arguments.length;
switch (G__25558) {
case 1:
return sablono.core.number_field25556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field25556.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25293__auto__);
});

sablono.core.number_field25556.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.number_field25556.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25556);

/**
 * Creates a password input field.
 */
sablono.core.password_field25559 = (function sablono$core$password_field25559(var_args){
var G__25561 = arguments.length;
switch (G__25561) {
case 1:
return sablono.core.password_field25559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field25559.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25293__auto__);
});

sablono.core.password_field25559.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.password_field25559.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25559);

/**
 * Creates a range input field.
 */
sablono.core.range_field25562 = (function sablono$core$range_field25562(var_args){
var G__25564 = arguments.length;
switch (G__25564) {
case 1:
return sablono.core.range_field25562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field25562.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25293__auto__);
});

sablono.core.range_field25562.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.range_field25562.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25562);

/**
 * Creates a search input field.
 */
sablono.core.search_field25565 = (function sablono$core$search_field25565(var_args){
var G__25567 = arguments.length;
switch (G__25567) {
case 1:
return sablono.core.search_field25565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field25565.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25293__auto__);
});

sablono.core.search_field25565.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.search_field25565.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25565);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25568 = (function sablono$core$tel_field25568(var_args){
var G__25570 = arguments.length;
switch (G__25570) {
case 1:
return sablono.core.tel_field25568.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25568.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field25568.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25293__auto__);
});

sablono.core.tel_field25568.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.tel_field25568.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25568);

/**
 * Creates a text input field.
 */
sablono.core.text_field25571 = (function sablono$core$text_field25571(var_args){
var G__25573 = arguments.length;
switch (G__25573) {
case 1:
return sablono.core.text_field25571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field25571.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25293__auto__);
});

sablono.core.text_field25571.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.text_field25571.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25571);

/**
 * Creates a time input field.
 */
sablono.core.time_field25574 = (function sablono$core$time_field25574(var_args){
var G__25576 = arguments.length;
switch (G__25576) {
case 1:
return sablono.core.time_field25574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field25574.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25293__auto__);
});

sablono.core.time_field25574.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.time_field25574.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25574);

/**
 * Creates a url input field.
 */
sablono.core.url_field25577 = (function sablono$core$url_field25577(var_args){
var G__25579 = arguments.length;
switch (G__25579) {
case 1:
return sablono.core.url_field25577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field25577.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25293__auto__);
});

sablono.core.url_field25577.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.url_field25577.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25577);

/**
 * Creates a week input field.
 */
sablono.core.week_field25580 = (function sablono$core$week_field25580(var_args){
var G__25582 = arguments.length;
switch (G__25582) {
case 1:
return sablono.core.week_field25580.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25580.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field25580.cljs$core$IFn$_invoke$arity$1 = (function (name__25293__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25293__auto__);
});

sablono.core.week_field25580.cljs$core$IFn$_invoke$arity$2 = (function (name__25293__auto__,value__25294__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__25293__auto__,value__25294__auto__);
});

sablono.core.week_field25580.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25580);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25600 = (function sablono$core$check_box25600(var_args){
var G__25602 = arguments.length;
switch (G__25602) {
case 1:
return sablono.core.check_box25600.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25600.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25600.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box25600.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box25600.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25600.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25600.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25600);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25604 = (function sablono$core$radio_button25604(var_args){
var G__25606 = arguments.length;
switch (G__25606) {
case 1:
return sablono.core.radio_button25604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25604.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button25604.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button25604.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25604.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25604.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25604);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25608 = (function sablono$core$select_options25608(coll){
var iter__4523__auto__ = (function sablono$core$select_options25608_$_iter__25609(s__25610){
return (new cljs.core.LazySeq(null,(function (){
var s__25610__$1 = s__25610;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__25610__$1);
if(temp__5735__auto__){
var s__25610__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25610__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25610__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25612 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25611 = (0);
while(true){
if((i__25611 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__25611);
cljs.core.chunk_append.call(null,b__25612,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25613 = x;
var text = cljs.core.nth.call(null,vec__25613,(0),null);
var val = cljs.core.nth.call(null,vec__25613,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25613,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25608.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25619 = (i__25611 + (1));
i__25611 = G__25619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25612),sablono$core$select_options25608_$_iter__25609.call(null,cljs.core.chunk_rest.call(null,s__25610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25612),null);
}
} else {
var x = cljs.core.first.call(null,s__25610__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25616 = x;
var text = cljs.core.nth.call(null,vec__25616,(0),null);
var val = cljs.core.nth.call(null,vec__25616,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25616,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25608.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25608_$_iter__25609.call(null,cljs.core.rest.call(null,s__25610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25608);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25620 = (function sablono$core$drop_down25620(var_args){
var G__25622 = arguments.length;
switch (G__25622) {
case 2:
return sablono.core.drop_down25620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25620.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down25620.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25620.call(null,name,options,null);
});

sablono.core.drop_down25620.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25620.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25620);
/**
 * Creates a text area element.
 */
sablono.core.text_area25624 = (function sablono$core$text_area25624(var_args){
var G__25626 = arguments.length;
switch (G__25626) {
case 1:
return sablono.core.text_area25624.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25624.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area25624.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area25624.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area25624.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25624);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25628 = (function sablono$core$label25628(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25628);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25629 = (function sablono$core$submit_button25629(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25629);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25630 = (function sablono$core$reset_button25630(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25630);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25631 = (function sablono$core$form_to25631(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25638 = arguments.length;
var i__4731__auto___25639 = (0);
while(true){
if((i__4731__auto___25639 < len__4730__auto___25638)){
args__4736__auto__.push((arguments[i__4731__auto___25639]));

var G__25640 = (i__4731__auto___25639 + (1));
i__4731__auto___25639 = G__25640;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25631.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to25631.cljs$core$IFn$_invoke$arity$variadic = (function (p__25634,body){
var vec__25635 = p__25634;
var method = cljs.core.nth.call(null,vec__25635,(0),null);
var action = cljs.core.nth.call(null,vec__25635,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25631.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to25631.cljs$lang$applyTo = (function (seq25632){
var G__25633 = cljs.core.first.call(null,seq25632);
var seq25632__$1 = cljs.core.next.call(null,seq25632);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25633,seq25632__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25631);

//# sourceMappingURL=core.js.map
