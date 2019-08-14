// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17466){
var map__17467 = p__17466;
var map__17467__$1 = (((((!((map__17467 == null))))?(((((map__17467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17467):map__17467);
var m = map__17467__$1;
var n = cljs.core.get.call(null,map__17467__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17469_17501 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17470_17502 = null;
var count__17471_17503 = (0);
var i__17472_17504 = (0);
while(true){
if((i__17472_17504 < count__17471_17503)){
var f_17505 = cljs.core._nth.call(null,chunk__17470_17502,i__17472_17504);
cljs.core.println.call(null,"  ",f_17505);


var G__17506 = seq__17469_17501;
var G__17507 = chunk__17470_17502;
var G__17508 = count__17471_17503;
var G__17509 = (i__17472_17504 + (1));
seq__17469_17501 = G__17506;
chunk__17470_17502 = G__17507;
count__17471_17503 = G__17508;
i__17472_17504 = G__17509;
continue;
} else {
var temp__5735__auto___17510 = cljs.core.seq.call(null,seq__17469_17501);
if(temp__5735__auto___17510){
var seq__17469_17511__$1 = temp__5735__auto___17510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17469_17511__$1)){
var c__4550__auto___17512 = cljs.core.chunk_first.call(null,seq__17469_17511__$1);
var G__17513 = cljs.core.chunk_rest.call(null,seq__17469_17511__$1);
var G__17514 = c__4550__auto___17512;
var G__17515 = cljs.core.count.call(null,c__4550__auto___17512);
var G__17516 = (0);
seq__17469_17501 = G__17513;
chunk__17470_17502 = G__17514;
count__17471_17503 = G__17515;
i__17472_17504 = G__17516;
continue;
} else {
var f_17517 = cljs.core.first.call(null,seq__17469_17511__$1);
cljs.core.println.call(null,"  ",f_17517);


var G__17518 = cljs.core.next.call(null,seq__17469_17511__$1);
var G__17519 = null;
var G__17520 = (0);
var G__17521 = (0);
seq__17469_17501 = G__17518;
chunk__17470_17502 = G__17519;
count__17471_17503 = G__17520;
i__17472_17504 = G__17521;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17522 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17522);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17522)))?cljs.core.second.call(null,arglists_17522):arglists_17522));
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
var seq__17473_17523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17474_17524 = null;
var count__17475_17525 = (0);
var i__17476_17526 = (0);
while(true){
if((i__17476_17526 < count__17475_17525)){
var vec__17487_17527 = cljs.core._nth.call(null,chunk__17474_17524,i__17476_17526);
var name_17528 = cljs.core.nth.call(null,vec__17487_17527,(0),null);
var map__17490_17529 = cljs.core.nth.call(null,vec__17487_17527,(1),null);
var map__17490_17530__$1 = (((((!((map__17490_17529 == null))))?(((((map__17490_17529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17490_17529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17490_17529):map__17490_17529);
var doc_17531 = cljs.core.get.call(null,map__17490_17530__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17532 = cljs.core.get.call(null,map__17490_17530__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17528);

cljs.core.println.call(null," ",arglists_17532);

if(cljs.core.truth_(doc_17531)){
cljs.core.println.call(null," ",doc_17531);
} else {
}


var G__17533 = seq__17473_17523;
var G__17534 = chunk__17474_17524;
var G__17535 = count__17475_17525;
var G__17536 = (i__17476_17526 + (1));
seq__17473_17523 = G__17533;
chunk__17474_17524 = G__17534;
count__17475_17525 = G__17535;
i__17476_17526 = G__17536;
continue;
} else {
var temp__5735__auto___17537 = cljs.core.seq.call(null,seq__17473_17523);
if(temp__5735__auto___17537){
var seq__17473_17538__$1 = temp__5735__auto___17537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17473_17538__$1)){
var c__4550__auto___17539 = cljs.core.chunk_first.call(null,seq__17473_17538__$1);
var G__17540 = cljs.core.chunk_rest.call(null,seq__17473_17538__$1);
var G__17541 = c__4550__auto___17539;
var G__17542 = cljs.core.count.call(null,c__4550__auto___17539);
var G__17543 = (0);
seq__17473_17523 = G__17540;
chunk__17474_17524 = G__17541;
count__17475_17525 = G__17542;
i__17476_17526 = G__17543;
continue;
} else {
var vec__17492_17544 = cljs.core.first.call(null,seq__17473_17538__$1);
var name_17545 = cljs.core.nth.call(null,vec__17492_17544,(0),null);
var map__17495_17546 = cljs.core.nth.call(null,vec__17492_17544,(1),null);
var map__17495_17547__$1 = (((((!((map__17495_17546 == null))))?(((((map__17495_17546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17495_17546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17495_17546):map__17495_17546);
var doc_17548 = cljs.core.get.call(null,map__17495_17547__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17549 = cljs.core.get.call(null,map__17495_17547__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17545);

cljs.core.println.call(null," ",arglists_17549);

if(cljs.core.truth_(doc_17548)){
cljs.core.println.call(null," ",doc_17548);
} else {
}


var G__17550 = cljs.core.next.call(null,seq__17473_17538__$1);
var G__17551 = null;
var G__17552 = (0);
var G__17553 = (0);
seq__17473_17523 = G__17550;
chunk__17474_17524 = G__17551;
count__17475_17525 = G__17552;
i__17476_17526 = G__17553;
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

var seq__17497 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17498 = null;
var count__17499 = (0);
var i__17500 = (0);
while(true){
if((i__17500 < count__17499)){
var role = cljs.core._nth.call(null,chunk__17498,i__17500);
var temp__5735__auto___17554__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___17554__$1)){
var spec_17555 = temp__5735__auto___17554__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17555));
} else {
}


var G__17556 = seq__17497;
var G__17557 = chunk__17498;
var G__17558 = count__17499;
var G__17559 = (i__17500 + (1));
seq__17497 = G__17556;
chunk__17498 = G__17557;
count__17499 = G__17558;
i__17500 = G__17559;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__17497);
if(temp__5735__auto____$1){
var seq__17497__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17497__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17497__$1);
var G__17560 = cljs.core.chunk_rest.call(null,seq__17497__$1);
var G__17561 = c__4550__auto__;
var G__17562 = cljs.core.count.call(null,c__4550__auto__);
var G__17563 = (0);
seq__17497 = G__17560;
chunk__17498 = G__17561;
count__17499 = G__17562;
i__17500 = G__17563;
continue;
} else {
var role = cljs.core.first.call(null,seq__17497__$1);
var temp__5735__auto___17564__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___17564__$2)){
var spec_17565 = temp__5735__auto___17564__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17565));
} else {
}


var G__17566 = cljs.core.next.call(null,seq__17497__$1);
var G__17567 = null;
var G__17568 = (0);
var G__17569 = (0);
seq__17497 = G__17566;
chunk__17498 = G__17567;
count__17499 = G__17568;
i__17500 = G__17569;
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
var G__17570 = cljs.core.conj.call(null,via,t);
var G__17571 = cljs.core.ex_cause.call(null,t);
via = G__17570;
t = G__17571;
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
var map__17574 = datafied_throwable;
var map__17574__$1 = (((((!((map__17574 == null))))?(((((map__17574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17574):map__17574);
var via = cljs.core.get.call(null,map__17574__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__17574__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__17574__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17575 = cljs.core.last.call(null,via);
var map__17575__$1 = (((((!((map__17575 == null))))?(((((map__17575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17575):map__17575);
var type = cljs.core.get.call(null,map__17575__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__17575__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__17575__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17576 = data;
var map__17576__$1 = (((((!((map__17576 == null))))?(((((map__17576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17576):map__17576);
var problems = cljs.core.get.call(null,map__17576__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__17576__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__17576__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17577 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__17577__$1 = (((((!((map__17577 == null))))?(((((map__17577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17577):map__17577);
var top_data = map__17577__$1;
var source = cljs.core.get.call(null,map__17577__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__17582 = phase;
var G__17582__$1 = (((G__17582 instanceof cljs.core.Keyword))?G__17582.fqn:null);
switch (G__17582__$1) {
case "read-source":
var map__17583 = data;
var map__17583__$1 = (((((!((map__17583 == null))))?(((((map__17583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17583):map__17583);
var line = cljs.core.get.call(null,map__17583__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17583__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17585 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__17585__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17585,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17585);
var G__17585__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17585__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17585__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17585__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17586 = top_data;
var G__17586__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17586,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17586);
var G__17586__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17586__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17586__$1);
var G__17586__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17586__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17586__$2);
var G__17586__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17586__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17586__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17586__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17586__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17587 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17587,(0),null);
var method = cljs.core.nth.call(null,vec__17587,(1),null);
var file = cljs.core.nth.call(null,vec__17587,(2),null);
var line = cljs.core.nth.call(null,vec__17587,(3),null);
var G__17590 = top_data;
var G__17590__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__17590,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17590);
var G__17590__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__17590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17590__$1);
var G__17590__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__17590__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17590__$2);
var G__17590__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17590__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17590__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17590__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17590__$4;
}

break;
case "execution":
var vec__17591 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17591,(0),null);
var method = cljs.core.nth.call(null,vec__17591,(1),null);
var file = cljs.core.nth.call(null,vec__17591,(2),null);
var line = cljs.core.nth.call(null,vec__17591,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__17591,source__$1,method,file,line,G__17582,G__17582__$1,map__17574,map__17574__$1,via,trace,phase,map__17575,map__17575__$1,type,message,data,map__17576,map__17576__$1,problems,fn,caller,map__17577,map__17577__$1,top_data,source){
return (function (p1__17573_SHARP_){
var or__4131__auto__ = (p1__17573_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__17573_SHARP_);
}
});})(vec__17591,source__$1,method,file,line,G__17582,G__17582__$1,map__17574,map__17574__$1,via,trace,phase,map__17575,map__17575__$1,type,message,data,map__17576,map__17576__$1,problems,fn,caller,map__17577,map__17577__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__17594 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17594__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__17594,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17594);
var G__17594__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17594__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17594__$1);
var G__17594__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__17594__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17594__$2);
var G__17594__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__17594__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17594__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17594__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17594__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17582__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17598){
var map__17599 = p__17598;
var map__17599__$1 = (((((!((map__17599 == null))))?(((((map__17599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17599):map__17599);
var triage_data = map__17599__$1;
var phase = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__17599__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17601 = phase;
var G__17601__$1 = (((G__17601 instanceof cljs.core.Keyword))?G__17601.fqn:null);
switch (G__17601__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17602_17611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17603_17612 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17604_17613 = true;
var _STAR_print_fn_STAR__temp_val__17605_17614 = ((function (_STAR_print_newline_STAR__orig_val__17602_17611,_STAR_print_fn_STAR__orig_val__17603_17612,_STAR_print_newline_STAR__temp_val__17604_17613,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__17602_17611,_STAR_print_fn_STAR__orig_val__17603_17612,_STAR_print_newline_STAR__temp_val__17604_17613,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17604_17613;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17605_17614;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__17602_17611,_STAR_print_fn_STAR__orig_val__17603_17612,_STAR_print_newline_STAR__temp_val__17604_17613,_STAR_print_fn_STAR__temp_val__17605_17614,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__17602_17611,_STAR_print_fn_STAR__orig_val__17603_17612,_STAR_print_newline_STAR__temp_val__17604_17613,_STAR_print_fn_STAR__temp_val__17605_17614,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__17596_SHARP_){
return cljs.core.dissoc.call(null,p1__17596_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__17602_17611,_STAR_print_fn_STAR__orig_val__17603_17612,_STAR_print_newline_STAR__temp_val__17604_17613,_STAR_print_fn_STAR__temp_val__17605_17614,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__17602_17611,_STAR_print_fn_STAR__orig_val__17603_17612,_STAR_print_newline_STAR__temp_val__17604_17613,_STAR_print_fn_STAR__temp_val__17605_17614,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17603_17612;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17602_17611;
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
var _STAR_print_newline_STAR__orig_val__17606_17615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17607_17616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17608_17617 = true;
var _STAR_print_fn_STAR__temp_val__17609_17618 = ((function (_STAR_print_newline_STAR__orig_val__17606_17615,_STAR_print_fn_STAR__orig_val__17607_17616,_STAR_print_newline_STAR__temp_val__17608_17617,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__17606_17615,_STAR_print_fn_STAR__orig_val__17607_17616,_STAR_print_newline_STAR__temp_val__17608_17617,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17608_17617;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17609_17618;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__17606_17615,_STAR_print_fn_STAR__orig_val__17607_17616,_STAR_print_newline_STAR__temp_val__17608_17617,_STAR_print_fn_STAR__temp_val__17609_17618,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__17606_17615,_STAR_print_fn_STAR__orig_val__17607_17616,_STAR_print_newline_STAR__temp_val__17608_17617,_STAR_print_fn_STAR__temp_val__17609_17618,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__17597_SHARP_){
return cljs.core.dissoc.call(null,p1__17597_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__17606_17615,_STAR_print_fn_STAR__orig_val__17607_17616,_STAR_print_newline_STAR__temp_val__17608_17617,_STAR_print_fn_STAR__temp_val__17609_17618,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__17606_17615,_STAR_print_fn_STAR__orig_val__17607_17616,_STAR_print_newline_STAR__temp_val__17608_17617,_STAR_print_fn_STAR__temp_val__17609_17618,sb__4661__auto__,G__17601,G__17601__$1,loc,class_name,simple_class,cause_type,format,map__17599,map__17599__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17607_17616;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17606_17615;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17601__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
