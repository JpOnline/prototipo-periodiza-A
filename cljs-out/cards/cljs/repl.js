// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21889){
var map__21890 = p__21889;
var map__21890__$1 = (((((!((map__21890 == null))))?(((((map__21890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21890):map__21890);
var m = map__21890__$1;
var n = cljs.core.get.call(null,map__21890__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21892_21924 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21893_21925 = null;
var count__21894_21926 = (0);
var i__21895_21927 = (0);
while(true){
if((i__21895_21927 < count__21894_21926)){
var f_21928 = cljs.core._nth.call(null,chunk__21893_21925,i__21895_21927);
cljs.core.println.call(null,"  ",f_21928);


var G__21929 = seq__21892_21924;
var G__21930 = chunk__21893_21925;
var G__21931 = count__21894_21926;
var G__21932 = (i__21895_21927 + (1));
seq__21892_21924 = G__21929;
chunk__21893_21925 = G__21930;
count__21894_21926 = G__21931;
i__21895_21927 = G__21932;
continue;
} else {
var temp__5735__auto___21933 = cljs.core.seq.call(null,seq__21892_21924);
if(temp__5735__auto___21933){
var seq__21892_21934__$1 = temp__5735__auto___21933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21892_21934__$1)){
var c__4550__auto___21935 = cljs.core.chunk_first.call(null,seq__21892_21934__$1);
var G__21936 = cljs.core.chunk_rest.call(null,seq__21892_21934__$1);
var G__21937 = c__4550__auto___21935;
var G__21938 = cljs.core.count.call(null,c__4550__auto___21935);
var G__21939 = (0);
seq__21892_21924 = G__21936;
chunk__21893_21925 = G__21937;
count__21894_21926 = G__21938;
i__21895_21927 = G__21939;
continue;
} else {
var f_21940 = cljs.core.first.call(null,seq__21892_21934__$1);
cljs.core.println.call(null,"  ",f_21940);


var G__21941 = cljs.core.next.call(null,seq__21892_21934__$1);
var G__21942 = null;
var G__21943 = (0);
var G__21944 = (0);
seq__21892_21924 = G__21941;
chunk__21893_21925 = G__21942;
count__21894_21926 = G__21943;
i__21895_21927 = G__21944;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21945 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21945);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21945)))?cljs.core.second.call(null,arglists_21945):arglists_21945));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21896_21946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21897_21947 = null;
var count__21898_21948 = (0);
var i__21899_21949 = (0);
while(true){
if((i__21899_21949 < count__21898_21948)){
var vec__21910_21950 = cljs.core._nth.call(null,chunk__21897_21947,i__21899_21949);
var name_21951 = cljs.core.nth.call(null,vec__21910_21950,(0),null);
var map__21913_21952 = cljs.core.nth.call(null,vec__21910_21950,(1),null);
var map__21913_21953__$1 = (((((!((map__21913_21952 == null))))?(((((map__21913_21952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21913_21952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21913_21952):map__21913_21952);
var doc_21954 = cljs.core.get.call(null,map__21913_21953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21955 = cljs.core.get.call(null,map__21913_21953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21951);

cljs.core.println.call(null," ",arglists_21955);

if(cljs.core.truth_(doc_21954)){
cljs.core.println.call(null," ",doc_21954);
} else {
}


var G__21956 = seq__21896_21946;
var G__21957 = chunk__21897_21947;
var G__21958 = count__21898_21948;
var G__21959 = (i__21899_21949 + (1));
seq__21896_21946 = G__21956;
chunk__21897_21947 = G__21957;
count__21898_21948 = G__21958;
i__21899_21949 = G__21959;
continue;
} else {
var temp__5735__auto___21960 = cljs.core.seq.call(null,seq__21896_21946);
if(temp__5735__auto___21960){
var seq__21896_21961__$1 = temp__5735__auto___21960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21896_21961__$1)){
var c__4550__auto___21962 = cljs.core.chunk_first.call(null,seq__21896_21961__$1);
var G__21963 = cljs.core.chunk_rest.call(null,seq__21896_21961__$1);
var G__21964 = c__4550__auto___21962;
var G__21965 = cljs.core.count.call(null,c__4550__auto___21962);
var G__21966 = (0);
seq__21896_21946 = G__21963;
chunk__21897_21947 = G__21964;
count__21898_21948 = G__21965;
i__21899_21949 = G__21966;
continue;
} else {
var vec__21915_21967 = cljs.core.first.call(null,seq__21896_21961__$1);
var name_21968 = cljs.core.nth.call(null,vec__21915_21967,(0),null);
var map__21918_21969 = cljs.core.nth.call(null,vec__21915_21967,(1),null);
var map__21918_21970__$1 = (((((!((map__21918_21969 == null))))?(((((map__21918_21969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21918_21969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21918_21969):map__21918_21969);
var doc_21971 = cljs.core.get.call(null,map__21918_21970__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21972 = cljs.core.get.call(null,map__21918_21970__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21968);

cljs.core.println.call(null," ",arglists_21972);

if(cljs.core.truth_(doc_21971)){
cljs.core.println.call(null," ",doc_21971);
} else {
}


var G__21973 = cljs.core.next.call(null,seq__21896_21961__$1);
var G__21974 = null;
var G__21975 = (0);
var G__21976 = (0);
seq__21896_21946 = G__21973;
chunk__21897_21947 = G__21974;
count__21898_21948 = G__21975;
i__21899_21949 = G__21976;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__21920 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21921 = null;
var count__21922 = (0);
var i__21923 = (0);
while(true){
if((i__21923 < count__21922)){
var role = cljs.core._nth.call(null,chunk__21921,i__21923);
var temp__5735__auto___21977__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21977__$1)){
var spec_21978 = temp__5735__auto___21977__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21978));
} else {
}


var G__21979 = seq__21920;
var G__21980 = chunk__21921;
var G__21981 = count__21922;
var G__21982 = (i__21923 + (1));
seq__21920 = G__21979;
chunk__21921 = G__21980;
count__21922 = G__21981;
i__21923 = G__21982;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__21920);
if(temp__5735__auto____$1){
var seq__21920__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21920__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21920__$1);
var G__21983 = cljs.core.chunk_rest.call(null,seq__21920__$1);
var G__21984 = c__4550__auto__;
var G__21985 = cljs.core.count.call(null,c__4550__auto__);
var G__21986 = (0);
seq__21920 = G__21983;
chunk__21921 = G__21984;
count__21922 = G__21985;
i__21923 = G__21986;
continue;
} else {
var role = cljs.core.first.call(null,seq__21920__$1);
var temp__5735__auto___21987__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___21987__$2)){
var spec_21988 = temp__5735__auto___21987__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21988));
} else {
}


var G__21989 = cljs.core.next.call(null,seq__21920__$1);
var G__21990 = null;
var G__21991 = (0);
var G__21992 = (0);
seq__21920 = G__21989;
chunk__21921 = G__21990;
count__21922 = G__21991;
i__21923 = G__21992;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21993 = cljs.core.conj.call(null,via,t);
var G__21994 = cljs.core.ex_cause.call(null,t);
via = G__21993;
t = G__21994;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21997 = datafied_throwable;
var map__21997__$1 = (((((!((map__21997 == null))))?(((((map__21997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21997):map__21997);
var via = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21997__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21998 = cljs.core.last.call(null,via);
var map__21998__$1 = (((((!((map__21998 == null))))?(((((map__21998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21998):map__21998);
var type = cljs.core.get.call(null,map__21998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21998__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21998__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21999 = data;
var map__21999__$1 = (((((!((map__21999 == null))))?(((((map__21999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21999):map__21999);
var problems = cljs.core.get.call(null,map__21999__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21999__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21999__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__22000 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__22000__$1 = (((((!((map__22000 == null))))?(((((map__22000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22000):map__22000);
var top_data = map__22000__$1;
var source = cljs.core.get.call(null,map__22000__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__22005 = phase;
var G__22005__$1 = (((G__22005 instanceof cljs.core.Keyword))?G__22005.fqn:null);
switch (G__22005__$1) {
case "read-source":
var map__22006 = data;
var map__22006__$1 = (((((!((map__22006 == null))))?(((((map__22006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22006):map__22006);
var line = cljs.core.get.call(null,map__22006__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22006__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22008 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__22008__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22008,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22008);
var G__22008__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22008__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22008__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22008__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22009 = top_data;
var G__22009__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22009,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22009);
var G__22009__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22009__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22009__$1);
var G__22009__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22009__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22009__$2);
var G__22009__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22009__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22009__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22009__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22009__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22010 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22010,(0),null);
var method = cljs.core.nth.call(null,vec__22010,(1),null);
var file = cljs.core.nth.call(null,vec__22010,(2),null);
var line = cljs.core.nth.call(null,vec__22010,(3),null);
var G__22013 = top_data;
var G__22013__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__22013,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22013);
var G__22013__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__22013__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22013__$1);
var G__22013__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__22013__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22013__$2);
var G__22013__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22013__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22013__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22013__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22013__$4;
}

break;
case "execution":
var vec__22014 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22014,(0),null);
var method = cljs.core.nth.call(null,vec__22014,(1),null);
var file = cljs.core.nth.call(null,vec__22014,(2),null);
var line = cljs.core.nth.call(null,vec__22014,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__22014,source__$1,method,file,line,G__22005,G__22005__$1,map__21997,map__21997__$1,via,trace,phase,map__21998,map__21998__$1,type,message,data,map__21999,map__21999__$1,problems,fn,caller,map__22000,map__22000__$1,top_data,source){
return (function (p1__21996_SHARP_){
var or__4131__auto__ = (p1__21996_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21996_SHARP_);
}
});})(vec__22014,source__$1,method,file,line,G__22005,G__22005__$1,map__21997,map__21997__$1,via,trace,phase,map__21998,map__21998__$1,type,message,data,map__21999,map__21999__$1,problems,fn,caller,map__22000,map__22000__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__22017 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22017__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__22017,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22017);
var G__22017__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22017__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22017__$1);
var G__22017__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__22017__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22017__$2);
var G__22017__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__22017__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22017__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22017__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22017__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22005__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__22021){
var map__22022 = p__22021;
var map__22022__$1 = (((((!((map__22022 == null))))?(((((map__22022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22022):map__22022);
var triage_data = map__22022__$1;
var phase = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22024 = phase;
var G__22024__$1 = (((G__22024 instanceof cljs.core.Keyword))?G__22024.fqn:null);
switch (G__22024__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22025_22034 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22026_22035 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22027_22036 = true;
var _STAR_print_fn_STAR__temp_val__22028_22037 = ((function (_STAR_print_newline_STAR__orig_val__22025_22034,_STAR_print_fn_STAR__orig_val__22026_22035,_STAR_print_newline_STAR__temp_val__22027_22036,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22025_22034,_STAR_print_fn_STAR__orig_val__22026_22035,_STAR_print_newline_STAR__temp_val__22027_22036,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22027_22036;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22028_22037;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22025_22034,_STAR_print_fn_STAR__orig_val__22026_22035,_STAR_print_newline_STAR__temp_val__22027_22036,_STAR_print_fn_STAR__temp_val__22028_22037,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22025_22034,_STAR_print_fn_STAR__orig_val__22026_22035,_STAR_print_newline_STAR__temp_val__22027_22036,_STAR_print_fn_STAR__temp_val__22028_22037,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22019_SHARP_){
return cljs.core.dissoc.call(null,p1__22019_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22025_22034,_STAR_print_fn_STAR__orig_val__22026_22035,_STAR_print_newline_STAR__temp_val__22027_22036,_STAR_print_fn_STAR__temp_val__22028_22037,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22025_22034,_STAR_print_fn_STAR__orig_val__22026_22035,_STAR_print_newline_STAR__temp_val__22027_22036,_STAR_print_fn_STAR__temp_val__22028_22037,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22026_22035;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22025_22034;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22029_22038 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22030_22039 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22031_22040 = true;
var _STAR_print_fn_STAR__temp_val__22032_22041 = ((function (_STAR_print_newline_STAR__orig_val__22029_22038,_STAR_print_fn_STAR__orig_val__22030_22039,_STAR_print_newline_STAR__temp_val__22031_22040,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22029_22038,_STAR_print_fn_STAR__orig_val__22030_22039,_STAR_print_newline_STAR__temp_val__22031_22040,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22031_22040;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22032_22041;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22029_22038,_STAR_print_fn_STAR__orig_val__22030_22039,_STAR_print_newline_STAR__temp_val__22031_22040,_STAR_print_fn_STAR__temp_val__22032_22041,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22029_22038,_STAR_print_fn_STAR__orig_val__22030_22039,_STAR_print_newline_STAR__temp_val__22031_22040,_STAR_print_fn_STAR__temp_val__22032_22041,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22020_SHARP_){
return cljs.core.dissoc.call(null,p1__22020_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22029_22038,_STAR_print_fn_STAR__orig_val__22030_22039,_STAR_print_newline_STAR__temp_val__22031_22040,_STAR_print_fn_STAR__temp_val__22032_22041,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22029_22038,_STAR_print_fn_STAR__orig_val__22030_22039,_STAR_print_newline_STAR__temp_val__22031_22040,_STAR_print_fn_STAR__temp_val__22032_22041,sb__4661__auto__,G__22024,G__22024__$1,loc,class_name,simple_class,cause_type,format,map__22022,map__22022__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22030_22039;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22029_22038;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22024__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});
