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
var G__23027__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23024 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23025 = cljs.core.seq.call(null,vec__23024);
var first__23026 = cljs.core.first.call(null,seq__23025);
var seq__23025__$1 = cljs.core.next.call(null,seq__23025);
var tag = first__23026;
var body = seq__23025__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23028__i = 0, G__23028__a = new Array(arguments.length -  0);
while (G__23028__i < G__23028__a.length) {G__23028__a[G__23028__i] = arguments[G__23028__i + 0]; ++G__23028__i;}
  args = new cljs.core.IndexedSeq(G__23028__a,0,null);
} 
return G__23027__delegate.call(this,args);};
G__23027.cljs$lang$maxFixedArity = 0;
G__23027.cljs$lang$applyTo = (function (arglist__23029){
var args = cljs.core.seq(arglist__23029);
return G__23027__delegate(args);
});
G__23027.cljs$core$IFn$_invoke$arity$variadic = G__23027__delegate;
return G__23027;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__23030(s__23031){
return (new cljs.core.LazySeq(null,(function (){
var s__23031__$1 = s__23031;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23031__$1);
if(temp__5735__auto__){
var s__23031__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23031__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23031__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23033 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23032 = (0);
while(true){
if((i__23032 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__23032);
cljs.core.chunk_append.call(null,b__23033,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23034 = (i__23032 + (1));
i__23032 = G__23034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23033),sablono$core$update_arglists_$_iter__23030.call(null,cljs.core.chunk_rest.call(null,s__23031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23033),null);
}
} else {
var args = cljs.core.first.call(null,s__23031__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23030.call(null,cljs.core.rest.call(null,s__23031__$2)));
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
var len__4730__auto___23040 = arguments.length;
var i__4731__auto___23041 = (0);
while(true){
if((i__4731__auto___23041 < len__4730__auto___23040)){
args__4736__auto__.push((arguments[i__4731__auto___23041]));

var G__23042 = (i__4731__auto___23041 + (1));
i__4731__auto___23041 = G__23042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__23036(s__23037){
return (new cljs.core.LazySeq(null,(function (){
var s__23037__$1 = s__23037;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23037__$1);
if(temp__5735__auto__){
var s__23037__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23037__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23037__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23039 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23038 = (0);
while(true){
if((i__23038 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__23038);
cljs.core.chunk_append.call(null,b__23039,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23043 = (i__23038 + (1));
i__23038 = G__23043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23039),sablono$core$iter__23036.call(null,cljs.core.chunk_rest.call(null,s__23037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23039),null);
}
} else {
var style = cljs.core.first.call(null,s__23037__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23036.call(null,cljs.core.rest.call(null,s__23037__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq23035){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23035));
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
sablono.core.link_to23044 = (function sablono$core$link_to23044(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23047 = arguments.length;
var i__4731__auto___23048 = (0);
while(true){
if((i__4731__auto___23048 < len__4730__auto___23047)){
args__4736__auto__.push((arguments[i__4731__auto___23048]));

var G__23049 = (i__4731__auto___23048 + (1));
i__4731__auto___23048 = G__23049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23044.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to23044.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23044.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23044.cljs$lang$applyTo = (function (seq23045){
var G__23046 = cljs.core.first.call(null,seq23045);
var seq23045__$1 = cljs.core.next.call(null,seq23045);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23046,seq23045__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23044);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23050 = (function sablono$core$mail_to23050(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23057 = arguments.length;
var i__4731__auto___23058 = (0);
while(true){
if((i__4731__auto___23058 < len__4730__auto___23057)){
args__4736__auto__.push((arguments[i__4731__auto___23058]));

var G__23059 = (i__4731__auto___23058 + (1));
i__4731__auto___23058 = G__23059;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23050.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to23050.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23053){
var vec__23054 = p__23053;
var content = cljs.core.nth.call(null,vec__23054,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23050.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23050.cljs$lang$applyTo = (function (seq23051){
var G__23052 = cljs.core.first.call(null,seq23051);
var seq23051__$1 = cljs.core.next.call(null,seq23051);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23052,seq23051__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23050);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23060 = (function sablono$core$unordered_list23060(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list23060_$_iter__23061(s__23062){
return (new cljs.core.LazySeq(null,(function (){
var s__23062__$1 = s__23062;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23062__$1);
if(temp__5735__auto__){
var s__23062__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23062__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23062__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23064 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23063 = (0);
while(true){
if((i__23063 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23063);
cljs.core.chunk_append.call(null,b__23064,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23065 = (i__23063 + (1));
i__23063 = G__23065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23064),sablono$core$unordered_list23060_$_iter__23061.call(null,cljs.core.chunk_rest.call(null,s__23062__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23064),null);
}
} else {
var x = cljs.core.first.call(null,s__23062__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23060_$_iter__23061.call(null,cljs.core.rest.call(null,s__23062__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23060);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23066 = (function sablono$core$ordered_list23066(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list23066_$_iter__23067(s__23068){
return (new cljs.core.LazySeq(null,(function (){
var s__23068__$1 = s__23068;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23068__$1);
if(temp__5735__auto__){
var s__23068__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23068__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23068__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23070 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23069 = (0);
while(true){
if((i__23069 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23069);
cljs.core.chunk_append.call(null,b__23070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23071 = (i__23069 + (1));
i__23069 = G__23071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23070),sablono$core$ordered_list23066_$_iter__23067.call(null,cljs.core.chunk_rest.call(null,s__23068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23070),null);
}
} else {
var x = cljs.core.first.call(null,s__23068__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23066_$_iter__23067.call(null,cljs.core.rest.call(null,s__23068__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23066);
/**
 * Create an image element.
 */
sablono.core.image23072 = (function sablono$core$image23072(var_args){
var G__23074 = arguments.length;
switch (G__23074) {
case 1:
return sablono.core.image23072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23072.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23072.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23072.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23072);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23076_SHARP_,p2__23077_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23076_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23077_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23078_SHARP_,p2__23079_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23078_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23079_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23081 = arguments.length;
switch (G__23081) {
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
sablono.core.color_field23083 = (function sablono$core$color_field23083(var_args){
var G__23085 = arguments.length;
switch (G__23085) {
case 1:
return sablono.core.color_field23083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23083.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23014__auto__);
});

sablono.core.color_field23083.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.color_field23083.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23083);

/**
 * Creates a date input field.
 */
sablono.core.date_field23086 = (function sablono$core$date_field23086(var_args){
var G__23088 = arguments.length;
switch (G__23088) {
case 1:
return sablono.core.date_field23086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23086.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23014__auto__);
});

sablono.core.date_field23086.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.date_field23086.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23086);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23089 = (function sablono$core$datetime_field23089(var_args){
var G__23091 = arguments.length;
switch (G__23091) {
case 1:
return sablono.core.datetime_field23089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23089.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23014__auto__);
});

sablono.core.datetime_field23089.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.datetime_field23089.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23089);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23092 = (function sablono$core$datetime_local_field23092(var_args){
var G__23094 = arguments.length;
switch (G__23094) {
case 1:
return sablono.core.datetime_local_field23092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23092.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23014__auto__);
});

sablono.core.datetime_local_field23092.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.datetime_local_field23092.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23092);

/**
 * Creates a email input field.
 */
sablono.core.email_field23095 = (function sablono$core$email_field23095(var_args){
var G__23097 = arguments.length;
switch (G__23097) {
case 1:
return sablono.core.email_field23095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23095.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23014__auto__);
});

sablono.core.email_field23095.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.email_field23095.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23095);

/**
 * Creates a file input field.
 */
sablono.core.file_field23098 = (function sablono$core$file_field23098(var_args){
var G__23100 = arguments.length;
switch (G__23100) {
case 1:
return sablono.core.file_field23098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23098.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23014__auto__);
});

sablono.core.file_field23098.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.file_field23098.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23098);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23101 = (function sablono$core$hidden_field23101(var_args){
var G__23103 = arguments.length;
switch (G__23103) {
case 1:
return sablono.core.hidden_field23101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23101.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23014__auto__);
});

sablono.core.hidden_field23101.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.hidden_field23101.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23101);

/**
 * Creates a month input field.
 */
sablono.core.month_field23104 = (function sablono$core$month_field23104(var_args){
var G__23106 = arguments.length;
switch (G__23106) {
case 1:
return sablono.core.month_field23104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23104.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23014__auto__);
});

sablono.core.month_field23104.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.month_field23104.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23104);

/**
 * Creates a number input field.
 */
sablono.core.number_field23107 = (function sablono$core$number_field23107(var_args){
var G__23109 = arguments.length;
switch (G__23109) {
case 1:
return sablono.core.number_field23107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23107.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23014__auto__);
});

sablono.core.number_field23107.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.number_field23107.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23107);

/**
 * Creates a password input field.
 */
sablono.core.password_field23110 = (function sablono$core$password_field23110(var_args){
var G__23112 = arguments.length;
switch (G__23112) {
case 1:
return sablono.core.password_field23110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23110.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23014__auto__);
});

sablono.core.password_field23110.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.password_field23110.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23110);

/**
 * Creates a range input field.
 */
sablono.core.range_field23113 = (function sablono$core$range_field23113(var_args){
var G__23115 = arguments.length;
switch (G__23115) {
case 1:
return sablono.core.range_field23113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23113.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23014__auto__);
});

sablono.core.range_field23113.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.range_field23113.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23113);

/**
 * Creates a search input field.
 */
sablono.core.search_field23116 = (function sablono$core$search_field23116(var_args){
var G__23118 = arguments.length;
switch (G__23118) {
case 1:
return sablono.core.search_field23116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23116.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23014__auto__);
});

sablono.core.search_field23116.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.search_field23116.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23116);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23119 = (function sablono$core$tel_field23119(var_args){
var G__23121 = arguments.length;
switch (G__23121) {
case 1:
return sablono.core.tel_field23119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23119.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23014__auto__);
});

sablono.core.tel_field23119.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.tel_field23119.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23119);

/**
 * Creates a text input field.
 */
sablono.core.text_field23122 = (function sablono$core$text_field23122(var_args){
var G__23124 = arguments.length;
switch (G__23124) {
case 1:
return sablono.core.text_field23122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23122.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23014__auto__);
});

sablono.core.text_field23122.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.text_field23122.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23122);

/**
 * Creates a time input field.
 */
sablono.core.time_field23125 = (function sablono$core$time_field23125(var_args){
var G__23127 = arguments.length;
switch (G__23127) {
case 1:
return sablono.core.time_field23125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23125.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23014__auto__);
});

sablono.core.time_field23125.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.time_field23125.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23125);

/**
 * Creates a url input field.
 */
sablono.core.url_field23128 = (function sablono$core$url_field23128(var_args){
var G__23130 = arguments.length;
switch (G__23130) {
case 1:
return sablono.core.url_field23128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23128.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23014__auto__);
});

sablono.core.url_field23128.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.url_field23128.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23128);

/**
 * Creates a week input field.
 */
sablono.core.week_field23131 = (function sablono$core$week_field23131(var_args){
var G__23133 = arguments.length;
switch (G__23133) {
case 1:
return sablono.core.week_field23131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23131.cljs$core$IFn$_invoke$arity$1 = (function (name__23014__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23014__auto__);
});

sablono.core.week_field23131.cljs$core$IFn$_invoke$arity$2 = (function (name__23014__auto__,value__23015__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23014__auto__,value__23015__auto__);
});

sablono.core.week_field23131.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23131);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23151 = (function sablono$core$check_box23151(var_args){
var G__23153 = arguments.length;
switch (G__23153) {
case 1:
return sablono.core.check_box23151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23151.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23151.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23151.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23151.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23151.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23151);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23155 = (function sablono$core$radio_button23155(var_args){
var G__23157 = arguments.length;
switch (G__23157) {
case 1:
return sablono.core.radio_button23155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23155.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23155.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23155.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23155.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23155.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23155);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23159 = (function sablono$core$select_options23159(coll){
var iter__4523__auto__ = (function sablono$core$select_options23159_$_iter__23160(s__23161){
return (new cljs.core.LazySeq(null,(function (){
var s__23161__$1 = s__23161;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23161__$1);
if(temp__5735__auto__){
var s__23161__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23161__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23161__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23163 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23162 = (0);
while(true){
if((i__23162 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23162);
cljs.core.chunk_append.call(null,b__23163,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23164 = x;
var text = cljs.core.nth.call(null,vec__23164,(0),null);
var val = cljs.core.nth.call(null,vec__23164,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23164,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23159.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23170 = (i__23162 + (1));
i__23162 = G__23170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23163),sablono$core$select_options23159_$_iter__23160.call(null,cljs.core.chunk_rest.call(null,s__23161__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23163),null);
}
} else {
var x = cljs.core.first.call(null,s__23161__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23167 = x;
var text = cljs.core.nth.call(null,vec__23167,(0),null);
var val = cljs.core.nth.call(null,vec__23167,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23167,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23159.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23159_$_iter__23160.call(null,cljs.core.rest.call(null,s__23161__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23159);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23171 = (function sablono$core$drop_down23171(var_args){
var G__23173 = arguments.length;
switch (G__23173) {
case 2:
return sablono.core.drop_down23171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23171.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23171.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23171.call(null,name,options,null);
});

sablono.core.drop_down23171.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23171.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23171);
/**
 * Creates a text area element.
 */
sablono.core.text_area23175 = (function sablono$core$text_area23175(var_args){
var G__23177 = arguments.length;
switch (G__23177) {
case 1:
return sablono.core.text_area23175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23175.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23175.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23175.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23175);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23179 = (function sablono$core$label23179(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23179);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23180 = (function sablono$core$submit_button23180(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23180);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23181 = (function sablono$core$reset_button23181(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23181);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23182 = (function sablono$core$form_to23182(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23189 = arguments.length;
var i__4731__auto___23190 = (0);
while(true){
if((i__4731__auto___23190 < len__4730__auto___23189)){
args__4736__auto__.push((arguments[i__4731__auto___23190]));

var G__23191 = (i__4731__auto___23190 + (1));
i__4731__auto___23190 = G__23191;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23182.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to23182.cljs$core$IFn$_invoke$arity$variadic = (function (p__23185,body){
var vec__23186 = p__23185;
var method = cljs.core.nth.call(null,vec__23186,(0),null);
var action = cljs.core.nth.call(null,vec__23186,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23182.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23182.cljs$lang$applyTo = (function (seq23183){
var G__23184 = cljs.core.first.call(null,seq23183);
var seq23183__$1 = cljs.core.next.call(null,seq23183);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23184,seq23183__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23182);
