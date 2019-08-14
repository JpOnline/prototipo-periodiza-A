// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame.tracing');
goog.require('cljs.core');
goog.require('debux.common.util');
goog.require('debux.common.macro_specs');
goog.require('cljs.spec.alpha');
cljs.core.enable_console_print_BANG_.call(null);

/** @define {boolean} */
goog.define("day8.re_frame.tracing.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame.tracing.is_trace_enabled_QMARK_ = (function day8$re_frame$tracing$is_trace_enabled_QMARK_(){
return day8.re_frame.tracing.trace_enabled_QMARK_;
});
day8.re_frame.tracing.reset_indent_level_BANG_ = debux.common.util.reset_indent_level_BANG_;
day8.re_frame.tracing.set_print_seq_length_BANG_ = debux.common.util.set_print_seq_length_BANG_;
var ret__4776__auto___34188 = (function (){
day8.re_frame.tracing.dbgn = (function day8$re_frame$tracing$dbgn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34189 = arguments.length;
var i__4731__auto___34190 = (0);
while(true){
if((i__4731__auto___34190 < len__4730__auto___34189)){
args__4736__auto__.push((arguments[i__4731__auto___34190]));

var G__34191 = (i__4731__auto___34190 + (1));
i__4731__auto___34190 = G__34191;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

day8.re_frame.tracing.dbgn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,opts){
var opts_SINGLEQUOTE_ = debux.common.util.parse_opts.call(null,opts);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.dbgn","dbgn","debux.dbgn/dbgn",1247043830,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,opts_SINGLEQUOTE_,null,(1),null)))));
});

day8.re_frame.tracing.dbgn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
day8.re_frame.tracing.dbgn.cljs$lang$applyTo = (function (seq34184){
var G__34185 = cljs.core.first.call(null,seq34184);
var seq34184__$1 = cljs.core.next.call(null,seq34184);
var G__34186 = cljs.core.first.call(null,seq34184__$1);
var seq34184__$2 = cljs.core.next.call(null,seq34184__$1);
var G__34187 = cljs.core.first.call(null,seq34184__$2);
var seq34184__$3 = cljs.core.next.call(null,seq34184__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34185,G__34186,G__34187,seq34184__$3);
});

return null;
})()
;
day8.re_frame.tracing.dbgn.cljs$lang$macro = true;

var ret__4776__auto___34192 = day8.re_frame.tracing.register_macros_BANG_ = (function day8$re_frame$tracing$register_macros_BANG_(_AMPERSAND_form,_AMPERSAND_env,macro_type,symbols){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.cs.macro-types","register-macros!","debux.cs.macro-types/register-macros!",1232819383,null),null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)),(new cljs.core.List(null,symbols,null,(1),null)))));
});
day8.re_frame.tracing.register_macros_BANG_.cljs$lang$macro = true;

var ret__4776__auto___34195 = (function (){
day8.re_frame.tracing.show_macros = (function day8$re_frame$tracing$show_macros(var_args){
var G__34194 = arguments.length;
switch (G__34194) {
case 2:
return day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.cs.macro-types","show-macros","debux.cs.macro-types/show-macros",-155390333,null),null,(1),null)))));
});

day8.re_frame.tracing.show_macros.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,macro_type){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("debux.cs.macro-types","show-macros","debux.cs.macro-types/show-macros",-155390333,null),null,(1),null)),(new cljs.core.List(null,macro_type,null,(1),null)))));
});

day8.re_frame.tracing.show_macros.cljs$lang$maxFixedArity = 3;

return null;
})()
;
day8.re_frame.tracing.show_macros.cljs$lang$macro = true;

day8.re_frame.tracing.fn_body = (function day8$re_frame$tracing$fn_body(args_PLUS_body){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(0)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,(1),null)),cljs.core.map.call(null,(function (body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","dbgn","day8.re-frame.tracing/dbgn",-1452462212,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))));
}),cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1))))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args_PLUS_body));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"prepost","prepost",1251610712).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1))),null,(1),null)),cljs.core.map.call(null,(function (body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","dbgn","day8.re-frame.tracing/dbgn",-1452462212,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null)))));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(args_PLUS_body),(1)))))));
}
});
var ret__4776__auto___34200 = (function (){
day8.re_frame.tracing.defn_traced_STAR_ = (function day8$re_frame$tracing$defn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34201 = arguments.length;
var i__4731__auto___34202 = (0);
while(true){
if((i__4731__auto___34202 < len__4730__auto___34201)){
args__4736__auto__.push((arguments[i__4731__auto___34202]));

var G__34203 = (i__4731__auto___34202 + (1));
i__4731__auto___34202 = G__34203;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.defn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("debux.common.macro-specs","defn-args","debux.common.macro-specs/defn-args",-1822705793),definition);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(conformed);
var bs = new cljs.core.Keyword(null,"bs","bs",1748393559).cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,bs,(0)),new cljs.core.Keyword(null,"arity-1","arity-1",105892478));
var args_PLUS_body = cljs.core.nth.call(null,bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),day8.re_frame.tracing.fn_body.call(null,args_PLUS_body))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.map.call(null,day8.re_frame.tracing.fn_body,new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(args_PLUS_body)))));
}
});

day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$applyTo = (function (seq34197){
var G__34198 = cljs.core.first.call(null,seq34197);
var seq34197__$1 = cljs.core.next.call(null,seq34197);
var G__34199 = cljs.core.first.call(null,seq34197__$1);
var seq34197__$2 = cljs.core.next.call(null,seq34197__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34198,G__34199,seq34197__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___34207 = (function (){
/**
 * Traced defn
 */
day8.re_frame.tracing.defn_traced = (function day8$re_frame$tracing$defn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34208 = arguments.length;
var i__4731__auto___34209 = (0);
while(true){
if((i__4731__auto___34209 < len__4730__auto___34208)){
args__4736__auto__.push((arguments[i__4731__auto___34209]));

var G__34210 = (i__4731__auto___34209 + (1));
i__4731__auto___34209 = G__34210;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.defn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","is-trace-enabled?","day8.re-frame.tracing/is-trace-enabled?",-975964058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","defn-traced*","day8.re-frame.tracing/defn-traced*",-1958619923,null),null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),definition))),null,(1),null)))));
});

day8.re_frame.tracing.defn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.defn_traced.cljs$lang$applyTo = (function (seq34204){
var G__34205 = cljs.core.first.call(null,seq34204);
var seq34204__$1 = cljs.core.next.call(null,seq34204);
var G__34206 = cljs.core.first.call(null,seq34204__$1);
var seq34204__$2 = cljs.core.next.call(null,seq34204__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34205,G__34206,seq34204__$2);
});

return null;
})()
;
day8.re_frame.tracing.defn_traced.cljs$lang$macro = true;

var ret__4776__auto___34214 = (function (){
/**
 * Traced form of fn. Prefer fn-traced to compile out under advanced optimizations.
 */
day8.re_frame.tracing.fn_traced_STAR_ = (function day8$re_frame$tracing$fn_traced_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34215 = arguments.length;
var i__4731__auto___34216 = (0);
while(true){
if((i__4731__auto___34216 < len__4730__auto___34215)){
args__4736__auto__.push((arguments[i__4731__auto___34216]));

var G__34217 = (i__4731__auto___34216 + (1));
i__4731__auto___34216 = G__34217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.fn_traced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("debux.common.macro-specs","fn-args","debux.common.macro-specs/fn-args",-527912458),definition);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(conformed);
var bs = new cljs.core.Keyword(null,"bs","bs",1748393559).cljs$core$IFn$_invoke$arity$1(conformed);
var arity_1_QMARK_ = cljs.core._EQ_.call(null,cljs.core.nth.call(null,bs,(0)),new cljs.core.Keyword(null,"arity-1","arity-1",105892478));
var args_PLUS_body = cljs.core.nth.call(null,bs,(1));
if(arity_1_QMARK_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),day8.re_frame.tracing.fn_body.call(null,args_PLUS_body))));
} else {
var bodies = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(args_PLUS_body);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(cljs.core.truth_(name)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null):null),cljs.core.map.call(null,day8.re_frame.tracing.fn_body,bodies))));
}
});

day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$applyTo = (function (seq34211){
var G__34212 = cljs.core.first.call(null,seq34211);
var seq34211__$1 = cljs.core.next.call(null,seq34211);
var G__34213 = cljs.core.first.call(null,seq34211__$1);
var seq34211__$2 = cljs.core.next.call(null,seq34211__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34212,G__34213,seq34211__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced_STAR_.cljs$lang$macro = true;

var ret__4776__auto___34221 = (function (){
/**
 * Defines a traced fn
 */
day8.re_frame.tracing.fn_traced = (function day8$re_frame$tracing$fn_traced(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34222 = arguments.length;
var i__4731__auto___34223 = (0);
while(true){
if((i__4731__auto___34223 < len__4730__auto___34222)){
args__4736__auto__.push((arguments[i__4731__auto___34223]));

var G__34224 = (i__4731__auto___34223 + (1));
i__4731__auto___34223 = G__34224;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame.tracing.fn_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,definition){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","is-trace-enabled?","day8.re-frame.tracing/is-trace-enabled?",-975964058,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame.tracing","fn-traced*","day8.re-frame.tracing/fn-traced*",-656662851,null),null,(1),null)),definition))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),definition))),null,(1),null)))));
});

day8.re_frame.tracing.fn_traced.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame.tracing.fn_traced.cljs$lang$applyTo = (function (seq34218){
var G__34219 = cljs.core.first.call(null,seq34218);
var seq34218__$1 = cljs.core.next.call(null,seq34218);
var G__34220 = cljs.core.first.call(null,seq34218__$1);
var seq34218__$2 = cljs.core.next.call(null,seq34218__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34219,G__34220,seq34218__$2);
});

return null;
})()
;
day8.re_frame.tracing.fn_traced.cljs$lang$macro = true;


//# sourceMappingURL=tracing.js.map
