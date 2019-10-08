// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__22361 = arguments.length;
switch (G__22361) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__22363 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__22364 = null;
var count__22365 = (0);
var i__22366 = (0);
while(true){
if((i__22366 < count__22365)){
var k = cljs.core._nth.call(null,chunk__22364,i__22366);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__22367 = seq__22363;
var G__22368 = chunk__22364;
var G__22369 = count__22365;
var G__22370 = (i__22366 + (1));
seq__22363 = G__22367;
chunk__22364 = G__22368;
count__22365 = G__22369;
i__22366 = G__22370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22363);
if(temp__5735__auto__){
var seq__22363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22363__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22363__$1);
var G__22371 = cljs.core.chunk_rest.call(null,seq__22363__$1);
var G__22372 = c__4550__auto__;
var G__22373 = cljs.core.count.call(null,c__4550__auto__);
var G__22374 = (0);
seq__22363 = G__22371;
chunk__22364 = G__22372;
count__22365 = G__22373;
i__22366 = G__22374;
continue;
} else {
var k = cljs.core.first.call(null,seq__22363__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__22375 = cljs.core.next.call(null,seq__22363__$1);
var G__22376 = null;
var G__22377 = (0);
var G__22378 = (0);
seq__22363 = G__22375;
chunk__22364 = G__22376;
count__22365 = G__22377;
i__22366 = G__22378;
continue;
}
} else {
return null;
}
}
break;
}
});
