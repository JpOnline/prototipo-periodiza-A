// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18066){
var map__18067 = p__18066;
var map__18067__$1 = (((((!((map__18067 == null))))?(((((map__18067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18067):map__18067);
var m = map__18067__$1;
var n = cljs.core.get.call(null,map__18067__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18069_18101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18070_18102 = null;
var count__18071_18103 = (0);
var i__18072_18104 = (0);
while(true){
if((i__18072_18104 < count__18071_18103)){
var f_18105 = cljs.core._nth.call(null,chunk__18070_18102,i__18072_18104);
cljs.core.println.call(null,"  ",f_18105);


var G__18106 = seq__18069_18101;
var G__18107 = chunk__18070_18102;
var G__18108 = count__18071_18103;
var G__18109 = (i__18072_18104 + (1));
seq__18069_18101 = G__18106;
chunk__18070_18102 = G__18107;
count__18071_18103 = G__18108;
i__18072_18104 = G__18109;
continue;
} else {
var temp__5735__auto___18110 = cljs.core.seq.call(null,seq__18069_18101);
if(temp__5735__auto___18110){
var seq__18069_18111__$1 = temp__5735__auto___18110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18069_18111__$1)){
var c__4550__auto___18112 = cljs.core.chunk_first.call(null,seq__18069_18111__$1);
var G__18113 = cljs.core.chunk_rest.call(null,seq__18069_18111__$1);
var G__18114 = c__4550__auto___18112;
var G__18115 = cljs.core.count.call(null,c__4550__auto___18112);
var G__18116 = (0);
seq__18069_18101 = G__18113;
chunk__18070_18102 = G__18114;
count__18071_18103 = G__18115;
i__18072_18104 = G__18116;
continue;
} else {
var f_18117 = cljs.core.first.call(null,seq__18069_18111__$1);
cljs.core.println.call(null,"  ",f_18117);


var G__18118 = cljs.core.next.call(null,seq__18069_18111__$1);
var G__18119 = null;
var G__18120 = (0);
var G__18121 = (0);
seq__18069_18101 = G__18118;
chunk__18070_18102 = G__18119;
count__18071_18103 = G__18120;
i__18072_18104 = G__18121;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18122 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18122);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18122)))?cljs.core.second.call(null,arglists_18122):arglists_18122));
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
var seq__18073_18123 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18074_18124 = null;
var count__18075_18125 = (0);
var i__18076_18126 = (0);
while(true){
if((i__18076_18126 < count__18075_18125)){
var vec__18087_18127 = cljs.core._nth.call(null,chunk__18074_18124,i__18076_18126);
var name_18128 = cljs.core.nth.call(null,vec__18087_18127,(0),null);
var map__18090_18129 = cljs.core.nth.call(null,vec__18087_18127,(1),null);
var map__18090_18130__$1 = (((((!((map__18090_18129 == null))))?(((((map__18090_18129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18090_18129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18090_18129):map__18090_18129);
var doc_18131 = cljs.core.get.call(null,map__18090_18130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18132 = cljs.core.get.call(null,map__18090_18130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18128);

cljs.core.println.call(null," ",arglists_18132);

if(cljs.core.truth_(doc_18131)){
cljs.core.println.call(null," ",doc_18131);
} else {
}


var G__18133 = seq__18073_18123;
var G__18134 = chunk__18074_18124;
var G__18135 = count__18075_18125;
var G__18136 = (i__18076_18126 + (1));
seq__18073_18123 = G__18133;
chunk__18074_18124 = G__18134;
count__18075_18125 = G__18135;
i__18076_18126 = G__18136;
continue;
} else {
var temp__5735__auto___18137 = cljs.core.seq.call(null,seq__18073_18123);
if(temp__5735__auto___18137){
var seq__18073_18138__$1 = temp__5735__auto___18137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18073_18138__$1)){
var c__4550__auto___18139 = cljs.core.chunk_first.call(null,seq__18073_18138__$1);
var G__18140 = cljs.core.chunk_rest.call(null,seq__18073_18138__$1);
var G__18141 = c__4550__auto___18139;
var G__18142 = cljs.core.count.call(null,c__4550__auto___18139);
var G__18143 = (0);
seq__18073_18123 = G__18140;
chunk__18074_18124 = G__18141;
count__18075_18125 = G__18142;
i__18076_18126 = G__18143;
continue;
} else {
var vec__18092_18144 = cljs.core.first.call(null,seq__18073_18138__$1);
var name_18145 = cljs.core.nth.call(null,vec__18092_18144,(0),null);
var map__18095_18146 = cljs.core.nth.call(null,vec__18092_18144,(1),null);
var map__18095_18147__$1 = (((((!((map__18095_18146 == null))))?(((((map__18095_18146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18095_18146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18095_18146):map__18095_18146);
var doc_18148 = cljs.core.get.call(null,map__18095_18147__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18149 = cljs.core.get.call(null,map__18095_18147__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18145);

cljs.core.println.call(null," ",arglists_18149);

if(cljs.core.truth_(doc_18148)){
cljs.core.println.call(null," ",doc_18148);
} else {
}


var G__18150 = cljs.core.next.call(null,seq__18073_18138__$1);
var G__18151 = null;
var G__18152 = (0);
var G__18153 = (0);
seq__18073_18123 = G__18150;
chunk__18074_18124 = G__18151;
count__18075_18125 = G__18152;
i__18076_18126 = G__18153;
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

var seq__18097 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18098 = null;
var count__18099 = (0);
var i__18100 = (0);
while(true){
if((i__18100 < count__18099)){
var role = cljs.core._nth.call(null,chunk__18098,i__18100);
var temp__5735__auto___18154__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18154__$1)){
var spec_18155 = temp__5735__auto___18154__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18155));
} else {
}


var G__18156 = seq__18097;
var G__18157 = chunk__18098;
var G__18158 = count__18099;
var G__18159 = (i__18100 + (1));
seq__18097 = G__18156;
chunk__18098 = G__18157;
count__18099 = G__18158;
i__18100 = G__18159;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__18097);
if(temp__5735__auto____$1){
var seq__18097__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18097__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18097__$1);
var G__18160 = cljs.core.chunk_rest.call(null,seq__18097__$1);
var G__18161 = c__4550__auto__;
var G__18162 = cljs.core.count.call(null,c__4550__auto__);
var G__18163 = (0);
seq__18097 = G__18160;
chunk__18098 = G__18161;
count__18099 = G__18162;
i__18100 = G__18163;
continue;
} else {
var role = cljs.core.first.call(null,seq__18097__$1);
var temp__5735__auto___18164__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18164__$2)){
var spec_18165 = temp__5735__auto___18164__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18165));
} else {
}


var G__18166 = cljs.core.next.call(null,seq__18097__$1);
var G__18167 = null;
var G__18168 = (0);
var G__18169 = (0);
seq__18097 = G__18166;
chunk__18098 = G__18167;
count__18099 = G__18168;
i__18100 = G__18169;
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
var G__18170 = cljs.core.conj.call(null,via,t);
var G__18171 = cljs.core.ex_cause.call(null,t);
via = G__18170;
t = G__18171;
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
var map__18174 = datafied_throwable;
var map__18174__$1 = (((((!((map__18174 == null))))?(((((map__18174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18174):map__18174);
var via = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18175 = cljs.core.last.call(null,via);
var map__18175__$1 = (((((!((map__18175 == null))))?(((((map__18175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18175):map__18175);
var type = cljs.core.get.call(null,map__18175__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18175__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18175__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18176 = data;
var map__18176__$1 = (((((!((map__18176 == null))))?(((((map__18176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18176):map__18176);
var problems = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18177 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18177__$1 = (((((!((map__18177 == null))))?(((((map__18177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18177):map__18177);
var top_data = map__18177__$1;
var source = cljs.core.get.call(null,map__18177__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18182 = phase;
var G__18182__$1 = (((G__18182 instanceof cljs.core.Keyword))?G__18182.fqn:null);
switch (G__18182__$1) {
case "read-source":
var map__18183 = data;
var map__18183__$1 = (((((!((map__18183 == null))))?(((((map__18183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18183):map__18183);
var line = cljs.core.get.call(null,map__18183__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18183__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18185 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18185__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18185,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18185);
var G__18185__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18185__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18185__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18185__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18186 = top_data;
var G__18186__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18186,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18186);
var G__18186__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18186__$1);
var G__18186__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18186__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18186__$2);
var G__18186__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18186__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18186__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18186__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18186__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18187 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18187,(0),null);
var method = cljs.core.nth.call(null,vec__18187,(1),null);
var file = cljs.core.nth.call(null,vec__18187,(2),null);
var line = cljs.core.nth.call(null,vec__18187,(3),null);
var G__18190 = top_data;
var G__18190__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18190,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18190);
var G__18190__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18190__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18190__$1);
var G__18190__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__18190__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18190__$2);
var G__18190__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18190__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18190__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18190__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18190__$4;
}

break;
case "execution":
var vec__18191 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18191,(0),null);
var method = cljs.core.nth.call(null,vec__18191,(1),null);
var file = cljs.core.nth.call(null,vec__18191,(2),null);
var line = cljs.core.nth.call(null,vec__18191,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__18191,source__$1,method,file,line,G__18182,G__18182__$1,map__18174,map__18174__$1,via,trace,phase,map__18175,map__18175__$1,type,message,data,map__18176,map__18176__$1,problems,fn,caller,map__18177,map__18177__$1,top_data,source){
return (function (p1__18173_SHARP_){
var or__4131__auto__ = (p1__18173_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18173_SHARP_);
}
});})(vec__18191,source__$1,method,file,line,G__18182,G__18182__$1,map__18174,map__18174__$1,via,trace,phase,map__18175,map__18175__$1,type,message,data,map__18176,map__18176__$1,problems,fn,caller,map__18177,map__18177__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__18194 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18194__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18194,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18194);
var G__18194__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18194__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18194__$1);
var G__18194__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__18194__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18194__$2);
var G__18194__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18194__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18194__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18194__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18194__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18182__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18198){
var map__18199 = p__18198;
var map__18199__$1 = (((((!((map__18199 == null))))?(((((map__18199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18199):map__18199);
var triage_data = map__18199__$1;
var phase = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18199__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18201 = phase;
var G__18201__$1 = (((G__18201 instanceof cljs.core.Keyword))?G__18201.fqn:null);
switch (G__18201__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18202_18211 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18203_18212 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18204_18213 = true;
var _STAR_print_fn_STAR__temp_val__18205_18214 = ((function (_STAR_print_newline_STAR__orig_val__18202_18211,_STAR_print_fn_STAR__orig_val__18203_18212,_STAR_print_newline_STAR__temp_val__18204_18213,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18202_18211,_STAR_print_fn_STAR__orig_val__18203_18212,_STAR_print_newline_STAR__temp_val__18204_18213,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18204_18213;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18205_18214;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18202_18211,_STAR_print_fn_STAR__orig_val__18203_18212,_STAR_print_newline_STAR__temp_val__18204_18213,_STAR_print_fn_STAR__temp_val__18205_18214,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18202_18211,_STAR_print_fn_STAR__orig_val__18203_18212,_STAR_print_newline_STAR__temp_val__18204_18213,_STAR_print_fn_STAR__temp_val__18205_18214,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18196_SHARP_){
return cljs.core.dissoc.call(null,p1__18196_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18202_18211,_STAR_print_fn_STAR__orig_val__18203_18212,_STAR_print_newline_STAR__temp_val__18204_18213,_STAR_print_fn_STAR__temp_val__18205_18214,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18202_18211,_STAR_print_fn_STAR__orig_val__18203_18212,_STAR_print_newline_STAR__temp_val__18204_18213,_STAR_print_fn_STAR__temp_val__18205_18214,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18203_18212;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18202_18211;
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
var _STAR_print_newline_STAR__orig_val__18206_18215 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18207_18216 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18208_18217 = true;
var _STAR_print_fn_STAR__temp_val__18209_18218 = ((function (_STAR_print_newline_STAR__orig_val__18206_18215,_STAR_print_fn_STAR__orig_val__18207_18216,_STAR_print_newline_STAR__temp_val__18208_18217,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18206_18215,_STAR_print_fn_STAR__orig_val__18207_18216,_STAR_print_newline_STAR__temp_val__18208_18217,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18208_18217;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18209_18218;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__18206_18215,_STAR_print_fn_STAR__orig_val__18207_18216,_STAR_print_newline_STAR__temp_val__18208_18217,_STAR_print_fn_STAR__temp_val__18209_18218,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__18206_18215,_STAR_print_fn_STAR__orig_val__18207_18216,_STAR_print_newline_STAR__temp_val__18208_18217,_STAR_print_fn_STAR__temp_val__18209_18218,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__18197_SHARP_){
return cljs.core.dissoc.call(null,p1__18197_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__18206_18215,_STAR_print_fn_STAR__orig_val__18207_18216,_STAR_print_newline_STAR__temp_val__18208_18217,_STAR_print_fn_STAR__temp_val__18209_18218,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__18206_18215,_STAR_print_fn_STAR__orig_val__18207_18216,_STAR_print_newline_STAR__temp_val__18208_18217,_STAR_print_fn_STAR__temp_val__18209_18218,sb__4661__auto__,G__18201,G__18201__$1,loc,class_name,simple_class,cause_type,format,map__18199,map__18199__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18207_18216;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18206_18215;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18201__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
