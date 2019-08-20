// Compiled by ClojureScript 1.10.520 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.system');
goog.require('devcards.util.markdown');
goog.require('devcards.util.utils');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('cljs.core.async');
devcards.core.global$module$react = goog.global["React"];
devcards.core.global$module$react_dom = goog.global["ReactDOM"];
devcards.core.global$module$create_react_class = goog.global["createReactClass"];

/** @define {boolean} */
goog.define("devcards.core.active",false);

/** @define {number} */
goog.define("devcards.core.card_buffer_size",(5000));
cljs.core.enable_console_print_BANG_.call(null);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.devcard_event_chan !== 'undefined')){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,devcards.core.card_buffer_size));
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = (typeof Symbol !== 'undefined');
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__4120__auto____$1){
var and__4120__auto____$2 = goog.object.get(Symbol,"for");
if(cljs.core.truth_(and__4120__auto____$2)){
return goog.object.get(Symbol,"for").call(null,"react.element");
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.register_listeners_fig !== 'undefined')){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__28510_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__28510_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if((!((((m == null)) || (cljs.core.map_QMARK_.call(null,m)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var G__28512 = arguments.length;
switch (G__28512) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options))))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__4120__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__4120__auto__){
var map__28516 = c;
var map__28516__$1 = (((((!((map__28516 == null))))?(((((map__28516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28516):map__28516);
var path = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__4120__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(devcards.core.card_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.createElement("div",({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,raw_html_str)), "dangerouslySetInnerHTML": ({"__html": raw_html_str})}));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return goog.object.get(goog.global,"hljs");
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__5735__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__5735__auto____$1)){
var hljs = temp__5735__auto____$1;
var temp__5735__auto____$2 = goog.object.get(hljs,"highlightBlock");
if(cljs.core.truth_(temp__5735__auto____$2)){
var highlight_block = temp__5735__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
devcards.core.CodeHighlight = (function (){var ctor__20575__auto__ = (function (props__20572__auto__){
var this__20573__auto__ = this;
React.Component.call(this__20573__auto__,props__20572__auto__);

return this__20573__auto__;
});
goog.inherits(ctor__20575__auto__,React.Component);

var x28518_28519 = ctor__20575__auto__.prototype;
x28518_28519.componentDidMount = ((function (x28518_28519,ctor__20575__auto__){
return (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
});})(x28518_28519,ctor__20575__auto__))
;

x28518_28519.componentDidUpdate = ((function (x28518_28519,ctor__20575__auto__){
return (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
});})(x28518_28519,ctor__20575__auto__))
;

x28518_28519.render = ((function (x28518_28519,ctor__20575__auto__){
return (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__4131__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
});})(x28518_28519,ctor__20575__auto__))
;


return ctor__20575__auto__;
})();

devcards.core.CodeHighlight.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"CodeHighlight","CodeHighlight",-2140212327,null));
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.markdown_block__GT_react !== 'undefined')){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28520){
var map__28521 = p__28520;
var map__28521__$1 = (((((!((map__28521 == null))))?(((((map__28521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28521):map__28521);
var content = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__28523){
var map__28524 = p__28523;
var map__28524__$1 = (((((!((map__28524 == null))))?(((((map__28524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28524):map__28524);
var block = map__28524__$1;
var content = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28527 = arguments.length;
var i__4731__auto___28528 = (0);
while(true){
if((i__4731__auto___28528 < len__4730__auto___28527)){
args__4736__auto__.push((arguments[i__4731__auto___28528]));

var G__28529 = (i__4731__auto___28528 + (1));
i__4731__auto___28528 = G__28529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return ["```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code.call(null,x)),"```\n"].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq28526){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28526));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__28530 = devcards.system.devcards_rendered_card_class;
var G__28530__$1 = (cljs.core.truth_(padding_QMARK_)?[G__28530," com-rigsomelight-devcards-devcard-padding"].join(''):G__28530);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [G__28530__$1," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__28530__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var G__28532 = arguments.length;
switch (G__28532) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__28533 = card;
var map__28533__$1 = (((((!((map__28533 == null))))?(((((map__28533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28533):map__28533);
var path = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["com-rigsomelight-devcards-card-base-no-pad ",(cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null)].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__28533,map__28533__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__28533,map__28533__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs28535 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs28535))?sablono.interpreter.attributes.call(null,attrs28535):null),((cljs.core.map_QMARK_.call(null,attrs28535))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28535)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (devcards.core._devcard_options[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,devcard_opts);
} else {
var m__4431__auto__ = (devcards.core._devcard_options["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (devcards.core._devcard[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,devcard_opts);
} else {
var m__4431__auto__ = (devcards.core._devcard["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5735__auto__ = goog.object.get(this$.refs,ref);
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return goog.object.get(this$.props,cljs.core.name.call(null,k));
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return goog.object.get(this$.state,cljs.core.name.call(null,k));
} else {
return null;
}
});
devcards.core.DontUpdate = (function (){var ctor__20575__auto__ = (function (props__20572__auto__){
var this__20573__auto__ = this;
React.Component.call(this__20573__auto__,props__20572__auto__);

return this__20573__auto__;
});
goog.inherits(ctor__20575__auto__,React.Component);

var x28539_28541 = ctor__20575__auto__.prototype;
x28539_28541.shouldComponentUpdate = ((function (x28539_28541,ctor__20575__auto__){
return (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,goog.object.get(next_props,"change_count"),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
});})(x28539_28541,ctor__20575__auto__))
;

x28539_28541.render = ((function (x28539_28541,ctor__20575__auto__){
return (function (){
var this$ = this;
var attrs28540 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28540))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs28540)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs28540))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28540)], null)));
});})(x28539_28541,ctor__20575__auto__))
;


return ctor__20575__auto__;
})();

devcards.core.DontUpdate.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DontUpdate","DontUpdate",-547080925,null));
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((((!((main_obj_SINGLEQUOTE_ == null)))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var project = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})();
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5735__auto__)){
var docu = temp__5735__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,project.call(null,cljs.core.deref.call(null,data_atom))):null);
var card__$1 = ((((typeof main === 'string') || ((main == null))))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(new cljs.core.List(null,document,(new cljs.core.List(null,main__$1,(new cljs.core.List(null,hist_ctl,(new cljs.core.List(null,edn,null,(1),null)),(2),null)),(3),null)),(4),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
devcards.core.DevcardBase = (function (){var ctor__20575__auto__ = (function (props__20570__auto__){
var this__20571__auto__ = this;
React.Component.call(this__20571__auto__,props__20570__auto__);

((function (this__20571__auto__){
return (function (props){
var this$ = this;
return this$.state = ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
});})(this__20571__auto__))
.call(this__20571__auto__,props__20570__auto__);

return this__20571__auto__;
});
goog.inherits(ctor__20575__auto__,React.Component);

var x28543_28544 = ctor__20575__auto__.prototype;
x28543_28544.componentDidUpdate = ((function (x28543_28544,ctor__20575__auto__){
return (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
});})(x28543_28544,ctor__20575__auto__))
;

x28543_28544.componentWillMount = ((function (x28543_28544,ctor__20575__auto__){
return (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
return this$.setState((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__4120__auto__)){
return this$.state;
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
} else {
return null;
}
});})(x28543_28544,ctor__20575__auto__))
;

x28543_28544.componentWillUnmount = ((function (x28543_28544,ctor__20575__auto__){
return (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__4120__auto__ = data_atom;
if(cljs.core.truth_(and__4120__auto__)){
return id;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
});})(x28543_28544,ctor__20575__auto__))
;

x28543_28544.componentDidMount = ((function (x28543_28544,ctor__20575__auto__){
return (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
var temp__5735__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__5735__auto__)){
var data_atom = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__5735__auto____$1)){
var id = temp__5735__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__5735__auto____$1,data_atom,temp__5735__auto__,this$,x28543_28544,ctor__20575__auto__){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__5735__auto____$1,data_atom,temp__5735__auto__,this$,x28543_28544,ctor__20575__auto__))
);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(x28543_28544,ctor__20575__auto__))
;

x28543_28544.render = ((function (x28543_28544,ctor__20575__auto__){
return (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
});})(x28543_28544,ctor__20575__auto__))
;


return ctor__20575__auto__;
})();

devcards.core.DevcardBase.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DevcardBase","DevcardBase",-1441442980,null));
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__5735__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__5735__auto__)){
var node_fn = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto____$1)){
var node = temp__5735__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
devcards.core.DomComponent = (function (){var ctor__20575__auto__ = (function (props__20570__auto__){
var this__20571__auto__ = this;
React.Component.call(this__20571__auto__,props__20570__auto__);

((function (this__20571__auto__){
return (function (props){
var this$ = this;
return this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))});
});})(this__20571__auto__))
.call(this__20571__auto__,props__20570__auto__);

return this__20571__auto__;
});
goog.inherits(ctor__20575__auto__,React.Component);

var x28545_28546 = ctor__20575__auto__.prototype;
x28545_28546.componentDidUpdate = ((function (x28545_28546,ctor__20575__auto__){
return (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4120__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),goog.object.get(prevP,"node_fn"));
} else {
return and__4120__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
});})(x28545_28546,ctor__20575__auto__))
;

x28545_28546.componentWillUnmount = ((function (x28545_28546,ctor__20575__auto__){
return (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
});})(x28545_28546,ctor__20575__auto__))
;

x28545_28546.componentDidMount = ((function (x28545_28546,ctor__20575__auto__){
return (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
});})(x28545_28546,ctor__20575__auto__))
;

x28545_28546.render = ((function (x28545_28546,ctor__20575__auto__){
return (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))){
return React.createElement("div",({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
} else {
return React.createElement("div",null,"Card has not mounted DOM node.");
}
});})(x28545_28546,ctor__20575__auto__))
;


return ctor__20575__auto__;
})();

devcards.core.DomComponent.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DomComponent","DomComponent",-1557765022,null));
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__4131__auto__ = x === true;
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = x === false;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (x == null);
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__4131__auto__ = typeof x === 'string';
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (x == null);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4131__auto__ = goog.object.get(main_obj,"_isReactElement");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,goog.object.get(main_obj,"$$typeof"));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__28547_SHARP_){
return (!(p1__28547_SHARP_ === true));
});})(propagated_errors))
,(function (){var map__28549 = opts;
var map__28549__$1 = (((((!((map__28549 == null))))?(((((map__28549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28549):map__28549);
var name = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4131__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (options == null);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__4131__auto__ = (initial_data == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__4131__auto____$2){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = (((!((initial_data == null))))?(((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$))))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__4131__auto____$3){
return or__4131__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__28549,map__28549__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__28548_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__28548_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__28549,map__28549__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs28556 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs28556))?sablono.interpreter.attributes.call(null,attrs28556):null),((cljs.core.map_QMARK_.call(null,attrs28556))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28556)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs28557 = [((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),": "].join(''):null),"Devcard received bad options"].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28557))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs28557)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs28557))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28557)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs28558 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28558))?sablono.interpreter.attributes.call(null,attrs28558):null),((cljs.core.map_QMARK_.call(null,attrs28558))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28558)], null)));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs28559 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28559))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs28559)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs28559))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28559)], null)));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__28560_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__28560_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentityOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k28562,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__28566 = k28562;
var G__28566__$1 = (((G__28566 instanceof cljs.core.Keyword))?G__28566.fqn:null);
switch (G__28566__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28562,else__4388__auto__);

}
});

devcards.core.IdentityOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__28567){
var vec__28568 = p__28567;
var k__4408__auto__ = cljs.core.nth.call(null,vec__28568,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__28568,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

devcards.core.IdentityOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#devcards.core.IdentityOptions{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentityOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28561){
var self__ = this;
var G__28561__$1 = this;
return (new cljs.core.RecordIter((0),G__28561__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.IdentityOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentityOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentityOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentityOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-550579441 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

devcards.core.IdentityOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28563,other28564){
var self__ = this;
var this28563__$1 = this;
return (((!((other28564 == null)))) && ((this28563__$1.constructor === other28564.constructor)) && (cljs.core._EQ_.call(null,this28563__$1.obj,other28564.obj)) && (cljs.core._EQ_.call(null,this28563__$1.__extmap,other28564.__extmap)));
});

devcards.core.IdentityOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

devcards.core.IdentityOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__28561){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__28571 = cljs.core.keyword_identical_QMARK_;
var expr__28572 = k__4393__auto__;
if(cljs.core.truth_(pred__28571.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__28572))){
return (new devcards.core.IdentityOptions(G__28561,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__28561),null));
}
});

devcards.core.IdentityOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
});

devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentityOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__28561){
var self__ = this;
var this__4384__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,G__28561,self__.__extmap,self__.__hash));
});

devcards.core.IdentityOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

devcards.core.IdentityOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentityOptions.cljs$lang$type = true;

devcards.core.IdentityOptions.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"devcards.core/IdentityOptions",null,(1),null));
});

devcards.core.IdentityOptions.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"devcards.core/IdentityOptions");
});

/**
 * Positional factory function for devcards.core/IdentityOptions.
 */
devcards.core.__GT_IdentityOptions = (function devcards$core$__GT_IdentityOptions(obj){
return (new devcards.core.IdentityOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/IdentityOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_IdentityOptions = (function devcards$core$map__GT_IdentityOptions(G__28565){
var extmap__4424__auto__ = (function (){var G__28574 = cljs.core.dissoc.call(null,G__28565,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_.call(null,G__28565)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28574);
} else {
return G__28574;
}
})();
return (new devcards.core.IdentityOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__28565),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__28576){
var map__28577 = p__28576;
var map__28577__$1 = (((((!((map__28577 == null))))?(((((map__28577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28577):map__28577);
var devcard_opts = map__28577__$1;
var options = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__28577,map__28577__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__28577,map__28577__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k28580,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__28584 = k28580;
var G__28584__$1 = (((G__28584 instanceof cljs.core.Keyword))?G__28584.fqn:null);
switch (G__28584__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28580,else__4388__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__28585){
var vec__28586 = p__28585;
var k__4408__auto__ = cljs.core.nth.call(null,vec__28586,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__28586,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28579){
var self__ = this;
var G__28579__$1 = this;
return (new cljs.core.RecordIter((0),G__28579__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1574099704 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28581,other28582){
var self__ = this;
var this28581__$1 = this;
return (((!((other28582 == null)))) && ((this28581__$1.constructor === other28582.constructor)) && (cljs.core._EQ_.call(null,this28581__$1.obj,other28582.obj)) && (cljs.core._EQ_.call(null,this28581__$1.__extmap,other28582.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__28579){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__28589 = cljs.core.keyword_identical_QMARK_;
var expr__28590 = k__4393__auto__;
if(cljs.core.truth_(pred__28589.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__28590))){
return (new devcards.core.AtomLikeOptions(G__28579,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__28579),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__28579){
var self__ = this;
var this__4384__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__28579,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"devcards.core/AtomLikeOptions",null,(1),null));
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"devcards.core/AtomLikeOptions");
});

/**
 * Positional factory function for devcards.core/AtomLikeOptions.
 */
devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/AtomLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__28583){
var extmap__4424__auto__ = (function (){var G__28592 = cljs.core.dissoc.call(null,G__28583,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_.call(null,G__28583)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28592);
} else {
return G__28592;
}
})();
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__28583),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,(((((!((main_obj == null))))?(((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k28596,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__28600 = k28596;
var G__28600__$1 = (((G__28600 instanceof cljs.core.Keyword))?G__28600.fqn:null);
switch (G__28600__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28596,else__4388__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__28601){
var vec__28602 = p__28601;
var k__4408__auto__ = cljs.core.nth.call(null,vec__28602,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__28602,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28595){
var self__ = this;
var G__28595__$1 = this;
return (new cljs.core.RecordIter((0),G__28595__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1012705544 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28597,other28598){
var self__ = this;
var this28597__$1 = this;
return (((!((other28598 == null)))) && ((this28597__$1.constructor === other28598.constructor)) && (cljs.core._EQ_.call(null,this28597__$1.obj,other28598.obj)) && (cljs.core._EQ_.call(null,this28597__$1.__extmap,other28598.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__28595){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__28605 = cljs.core.keyword_identical_QMARK_;
var expr__28606 = k__4393__auto__;
if(cljs.core.truth_(pred__28605.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__28606))){
return (new devcards.core.EdnLikeOptions(G__28595,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__28595),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__28595){
var self__ = this;
var this__4384__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__28595,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"devcards.core/EdnLikeOptions",null,(1),null));
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"devcards.core/EdnLikeOptions");
});

/**
 * Positional factory function for devcards.core/EdnLikeOptions.
 */
devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/EdnLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__28599){
var extmap__4424__auto__ = (function (){var G__28608 = cljs.core.dissoc.call(null,G__28599,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_.call(null,G__28599)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28608);
} else {
return G__28608;
}
})();
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__28599),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__4120__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__4120__auto__){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__4120__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if((((!((main_obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(devcards.core.atom_like_QMARK_.call(null,main_obj)){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(devcards.core.edn_like_QMARK_.call(null,main_obj)){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentityOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__28615 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if((!((G__28615 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__28615.devcards$core$IDevcard$)))){
return true;
} else {
if((!G__28615.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__28615);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__28615);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
goog.object.set(devcards.core.IDevcardOptions,"string",true);

goog.object.set(devcards.core._devcard_options,"string",(function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__28616 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__28616__$1 = (((((!((map__28616 == null))))?(((((map__28616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28616):map__28616);
var history = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__28616__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return (!((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0))));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__28618 = cljs.core.deref.call(null,history_atom);
var map__28618__$1 = (((((!((map__28618 == null))))?(((((map__28618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28618):map__28618);
var history = cljs.core.get.call(null,map__28618__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__28618__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_back.call(null,this$)){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__28620 = cljs.core.deref.call(null,history_atom);
var map__28620__$1 = (((((!((map__28620 == null))))?(((((map__28620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28620):map__28620);
var history = cljs.core.get.call(null,map__28620__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__28620__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_forward.call(null,this$)){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__28622 = cljs.core.deref.call(null,history_atom);
var map__28622__$1 = (((((!((map__28622 == null))))?(((((map__28622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28622):map__28622);
var history = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(devcards.core.can_go_forward.call(null,this$)){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var ctor__20575__auto__ = (function (props__20570__auto__){
var this__20571__auto__ = this;
React.Component.call(this__20571__auto__,props__20570__auto__);

((function (this__20571__auto__){
return (function (props){
var this$ = this;
return this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null))), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
});})(this__20571__auto__))
.call(this__20571__auto__,props__20570__auto__);

return this__20571__auto__;
});
goog.inherits(ctor__20575__auto__,React.Component);

var x28624_28640 = ctor__20575__auto__.prototype;
x28624_28640.componentWillMount = ((function (x28624_28640,ctor__20575__auto__){
return (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(new cljs.core.List(null,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504))),null,(1),null)));
});})(x28624_28640,ctor__20575__auto__))
;

x28624_28640.componentDidMount = ((function (x28624_28640,ctor__20575__auto__){
return (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__4120__auto__ = data_atom;
if(cljs.core.truth_(and__4120__auto__)){
return id;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$,x28624_28640,ctor__20575__auto__){
return (function (_,___$1,___$2,n){
if(devcards.core.in_time_machine_QMARK_.call(null,this$)){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$,x28624_28640,ctor__20575__auto__){
return (function (p__28625){
var map__28626 = p__28625;
var map__28626__$1 = (((((!((map__28626 == null))))?(((((map__28626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28626):map__28626);
var ha = map__28626__$1;
var pointer = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$,x28624_28640,ctor__20575__auto__))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$,x28624_28640,ctor__20575__auto__))
);
} else {
return null;
}
});})(x28624_28640,ctor__20575__auto__))
;

x28624_28640.render = ((function (x28624_28640,ctor__20575__auto__){
return (function (){
var this$ = this;
if(((devcards.core.can_go_back.call(null,this$)) || (devcards.core.can_go_forward.call(null,this$)))){
return React.createElement("div",({"style": ({"display": ((((devcards.core.can_go_back.call(null,this$)) || (devcards.core.can_go_forward.call(null,this$))))?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$,x28624_28640,ctor__20575__auto__){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$,x28624_28640,ctor__20575__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$,x28624_28640,ctor__20575__auto__){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$,x28624_28640,ctor__20575__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$,x28624_28640,ctor__20575__auto__){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$,x28624_28640,ctor__20575__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$,x28624_28640,ctor__20575__auto__){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$,x28624_28640,ctor__20575__auto__))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
});})(x28624_28640,ctor__20575__auto__))
;


return ctor__20575__auto__;
})();

devcards.core.HistoryComponent.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"HistoryComponent","HistoryComponent",-932269385,null));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR__orig_val__28641 = cljs.test._STAR_current_env_STAR_;
var _STAR_current_env_STAR__temp_val__28642 = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__temp_val__28642;

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__orig_val__28641;
}});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_render !== 'undefined')){
} else {
devcards.core.test_render = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs28643 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28643))?sablono.interpreter.attributes.call(null,attrs28643):null),((cljs.core.map_QMARK_.call(null,attrs28643))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28643)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__28644,body){
var map__28645 = p__28644;
var map__28645__$1 = (((((!((map__28645 == null))))?(((((map__28645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28645):map__28645);
var message = cljs.core.get.call(null,map__28645__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs28647 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs28647))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs28647)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs28647))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28647)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__28648){
var map__28649 = p__28648;
var map__28649__$1 = (((((!((map__28649 == null))))?(((((map__28649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28649):map__28649);
var m = map__28649__$1;
var expected = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__28649__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs28651 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28651))?sablono.interpreter.attributes.call(null,attrs28651):null),((cljs.core.map_QMARK_.call(null,attrs28651))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret.call(null,React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))))):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28651),((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret.call(null,React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))))):null)], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs28658 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs28658))?sablono.interpreter.attributes.call(null,attrs28658):null),((cljs.core.map_QMARK_.call(null,attrs28658))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28658)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs28659 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28659))?sablono.interpreter.attributes.call(null,attrs28659):null),((cljs.core.map_QMARK_.call(null,attrs28659))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28659)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__28660){
var map__28661 = p__28660;
var map__28661__$1 = (((((!((map__28661 == null))))?(((((map__28661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);
var testing_contexts = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs28663 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__28661,map__28661__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__28661,map__28661__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null),null,(1),null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28663))?sablono.interpreter.attributes.call(null,attrs28663):null),((cljs.core.map_QMARK_.call(null,attrs28663))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28663)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),["com-rigsomelight-devcards-test-line com-rigsomelight-devcards-",cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs28664 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__28665,p__28666){
var map__28667 = p__28665;
var map__28667__$1 = (((((!((map__28667 == null))))?(((((map__28667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28667):map__28667);
var last_context = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__28668 = p__28666;
var i = cljs.core.nth.call(null,vec__28668,(0),null);
var t = cljs.core.nth.call(null,vec__28668,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (new cljs.core.List(null,devcards.core.test_renderer.call(null,t,i),null,(1),null));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28664))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs28664)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs28664))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28664)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__28673){
var map__28674 = p__28673;
var map__28674__$1 = (((((!((map__28674 == null))))?(((((map__28674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28674):map__28674);
var type = cljs.core.get.call(null,map__28674__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__28672 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__28672__$1 = (((((!((map__28672 == null))))?(((((map__28672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28672):map__28672);
var fail = cljs.core.get.call(null,map__28672__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__28672__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__28672__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1))
)}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path))):null)),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1){
return (function (p__28677){
var map__28678 = p__28677;
var map__28678__$1 = (((((!((map__28678 == null))))?(((((map__28678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28678):map__28678);
var type = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1)))))),(((((pass == null)) || ((pass === (0)))))?null:sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1){
return (function (p__28680){
var map__28681 = p__28680;
var map__28681__$1 = (((((!((map__28681 == null))))?(((((map__28681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28681):map__28681);
var type = cljs.core.get.call(null,map__28681__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__28672,map__28672__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__4131__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_channel !== 'undefined')){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_loop !== 'undefined')){
} else {
devcards.core.test_loop = (function (){var c__23813__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto__){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto__){
return (function (state_28773){
var state_val_28774 = (state_28773[(1)]);
if((state_val_28774 === (7))){
var state_28773__$1 = state_28773;
var statearr_28775_28821 = state_28773__$1;
(statearr_28775_28821[(2)] = false);

(statearr_28775_28821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (20))){
var inst_28711 = (state_28773[(7)]);
var inst_28731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28711);
var state_28773__$1 = state_28773;
var statearr_28776_28822 = state_28773__$1;
(statearr_28776_28822[(2)] = inst_28731);

(statearr_28776_28822[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (27))){
var inst_28748 = (state_28773[(8)]);
var inst_28736 = (state_28773[(9)]);
var inst_28752 = inst_28736.call(null,inst_28748);
var state_28773__$1 = state_28773;
var statearr_28777_28823 = state_28773__$1;
(statearr_28777_28823[(2)] = inst_28752);

(statearr_28777_28823[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (1))){
var state_28773__$1 = state_28773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28773__$1,(2),devcards.core.test_channel);
} else {
if((state_val_28774 === (24))){
var state_28773__$1 = state_28773;
var statearr_28778_28824 = state_28773__$1;
(statearr_28778_28824[(2)] = null);

(statearr_28778_28824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (4))){
var state_28773__$1 = state_28773;
var statearr_28779_28825 = state_28773__$1;
(statearr_28779_28825[(2)] = false);

(statearr_28779_28825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (15))){
var state_28773__$1 = state_28773;
var statearr_28780_28826 = state_28773__$1;
(statearr_28780_28826[(2)] = false);

(statearr_28780_28826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (21))){
var inst_28711 = (state_28773[(7)]);
var state_28773__$1 = state_28773;
var statearr_28781_28827 = state_28773__$1;
(statearr_28781_28827[(2)] = inst_28711);

(statearr_28781_28827[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (13))){
var inst_28771 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28773__$1,inst_28771);
} else {
if((state_val_28774 === (22))){
var inst_28735 = (state_28773[(10)]);
var inst_28734 = (state_28773[(2)]);
var inst_28735__$1 = cljs.core.get.call(null,inst_28734,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_28736 = cljs.core.get.call(null,inst_28734,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_28773__$1 = (function (){var statearr_28782 = state_28773;
(statearr_28782[(9)] = inst_28736);

(statearr_28782[(10)] = inst_28735__$1);

return statearr_28782;
})();
if(cljs.core.truth_(inst_28735__$1)){
var statearr_28783_28828 = state_28773__$1;
(statearr_28783_28828[(1)] = (23));

} else {
var statearr_28784_28829 = state_28773__$1;
(statearr_28784_28829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (29))){
var inst_28762 = (state_28773[(2)]);
var inst_28763 = cljs.test.clear_env_BANG_.call(null);
var state_28773__$1 = (function (){var statearr_28785 = state_28773;
(statearr_28785[(11)] = inst_28762);

(statearr_28785[(12)] = inst_28763);

return statearr_28785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28773__$1,(30),devcards.core.test_channel);
} else {
if((state_val_28774 === (6))){
var state_28773__$1 = state_28773;
var statearr_28786_28830 = state_28773__$1;
(statearr_28786_28830[(2)] = true);

(statearr_28786_28830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (28))){
var inst_28736 = (state_28773[(9)]);
var inst_28754 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_28755 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_28756 = cljs.core.PersistentHashMap.fromArrays(inst_28754,inst_28755);
var inst_28757 = devcards.core.collect_test.call(null,inst_28756);
var inst_28758 = cljs.test.get_current_env.call(null);
var inst_28759 = cljs.core.assoc.call(null,inst_28758,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_28760 = inst_28736.call(null,inst_28759);
var state_28773__$1 = (function (){var statearr_28787 = state_28773;
(statearr_28787[(13)] = inst_28757);

return statearr_28787;
})();
var statearr_28788_28831 = state_28773__$1;
(statearr_28788_28831[(2)] = inst_28760);

(statearr_28788_28831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (25))){
var inst_28769 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
var statearr_28789_28832 = state_28773__$1;
(statearr_28789_28832[(2)] = inst_28769);

(statearr_28789_28832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (17))){
var state_28773__$1 = state_28773;
var statearr_28790_28833 = state_28773__$1;
(statearr_28790_28833[(2)] = true);

(statearr_28790_28833[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (3))){
var inst_28687 = (state_28773[(14)]);
var inst_28692 = inst_28687.cljs$lang$protocol_mask$partition0$;
var inst_28693 = (inst_28692 & (64));
var inst_28694 = inst_28687.cljs$core$ISeq$;
var inst_28695 = (cljs.core.PROTOCOL_SENTINEL === inst_28694);
var inst_28696 = ((inst_28693) || (inst_28695));
var state_28773__$1 = state_28773;
if(cljs.core.truth_(inst_28696)){
var statearr_28791_28834 = state_28773__$1;
(statearr_28791_28834[(1)] = (6));

} else {
var statearr_28792_28835 = state_28773__$1;
(statearr_28792_28835[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (12))){
var inst_28711 = (state_28773[(7)]);
var inst_28715 = (inst_28711 == null);
var inst_28716 = cljs.core.not.call(null,inst_28715);
var state_28773__$1 = state_28773;
if(inst_28716){
var statearr_28793_28836 = state_28773__$1;
(statearr_28793_28836[(1)] = (14));

} else {
var statearr_28794_28837 = state_28773__$1;
(statearr_28794_28837[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (2))){
var inst_28687 = (state_28773[(14)]);
var inst_28687__$1 = (state_28773[(2)]);
var inst_28689 = (inst_28687__$1 == null);
var inst_28690 = cljs.core.not.call(null,inst_28689);
var state_28773__$1 = (function (){var statearr_28795 = state_28773;
(statearr_28795[(14)] = inst_28687__$1);

return statearr_28795;
})();
if(inst_28690){
var statearr_28796_28838 = state_28773__$1;
(statearr_28796_28838[(1)] = (3));

} else {
var statearr_28797_28839 = state_28773__$1;
(statearr_28797_28839[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (23))){
var inst_28741 = (state_28773[(15)]);
var inst_28735 = (state_28773[(10)]);
var inst_28741__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_28742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28743 = devcards.core.run_card_tests.call(null,inst_28735);
var inst_28744 = [inst_28743,inst_28741__$1];
var inst_28745 = (new cljs.core.PersistentVector(null,2,(5),inst_28742,inst_28744,null));
var state_28773__$1 = (function (){var statearr_28798 = state_28773;
(statearr_28798[(15)] = inst_28741__$1);

return statearr_28798;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28773__$1,(26),inst_28745);
} else {
if((state_val_28774 === (19))){
var inst_28726 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
var statearr_28799_28840 = state_28773__$1;
(statearr_28799_28840[(2)] = inst_28726);

(statearr_28799_28840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (11))){
var inst_28687 = (state_28773[(14)]);
var inst_28708 = (state_28773[(2)]);
var inst_28709 = cljs.core.get.call(null,inst_28708,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_28710 = cljs.core.get.call(null,inst_28708,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_28711 = inst_28687;
var state_28773__$1 = (function (){var statearr_28800 = state_28773;
(statearr_28800[(16)] = inst_28709);

(statearr_28800[(7)] = inst_28711);

(statearr_28800[(17)] = inst_28710);

return statearr_28800;
})();
var statearr_28801_28841 = state_28773__$1;
(statearr_28801_28841[(2)] = null);

(statearr_28801_28841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (9))){
var inst_28687 = (state_28773[(14)]);
var inst_28705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28687);
var state_28773__$1 = state_28773;
var statearr_28802_28842 = state_28773__$1;
(statearr_28802_28842[(2)] = inst_28705);

(statearr_28802_28842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (5))){
var inst_28703 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
if(cljs.core.truth_(inst_28703)){
var statearr_28803_28843 = state_28773__$1;
(statearr_28803_28843[(1)] = (9));

} else {
var statearr_28804_28844 = state_28773__$1;
(statearr_28804_28844[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (14))){
var inst_28711 = (state_28773[(7)]);
var inst_28718 = inst_28711.cljs$lang$protocol_mask$partition0$;
var inst_28719 = (inst_28718 & (64));
var inst_28720 = inst_28711.cljs$core$ISeq$;
var inst_28721 = (cljs.core.PROTOCOL_SENTINEL === inst_28720);
var inst_28722 = ((inst_28719) || (inst_28721));
var state_28773__$1 = state_28773;
if(cljs.core.truth_(inst_28722)){
var statearr_28805_28845 = state_28773__$1;
(statearr_28805_28845[(1)] = (17));

} else {
var statearr_28806_28846 = state_28773__$1;
(statearr_28806_28846[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (26))){
var inst_28741 = (state_28773[(15)]);
var inst_28747 = (state_28773[(2)]);
var inst_28748 = cljs.core.nth.call(null,inst_28747,(0),null);
var inst_28749 = cljs.core.nth.call(null,inst_28747,(1),null);
var inst_28750 = cljs.core.not_EQ_.call(null,inst_28749,inst_28741);
var state_28773__$1 = (function (){var statearr_28807 = state_28773;
(statearr_28807[(8)] = inst_28748);

return statearr_28807;
})();
if(inst_28750){
var statearr_28808_28847 = state_28773__$1;
(statearr_28808_28847[(1)] = (27));

} else {
var statearr_28809_28848 = state_28773__$1;
(statearr_28809_28848[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (16))){
var inst_28729 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
if(cljs.core.truth_(inst_28729)){
var statearr_28810_28849 = state_28773__$1;
(statearr_28810_28849[(1)] = (20));

} else {
var statearr_28811_28850 = state_28773__$1;
(statearr_28811_28850[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (30))){
var inst_28765 = (state_28773[(2)]);
var inst_28711 = inst_28765;
var state_28773__$1 = (function (){var statearr_28812 = state_28773;
(statearr_28812[(7)] = inst_28711);

return statearr_28812;
})();
var statearr_28813_28851 = state_28773__$1;
(statearr_28813_28851[(2)] = null);

(statearr_28813_28851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (10))){
var inst_28687 = (state_28773[(14)]);
var state_28773__$1 = state_28773;
var statearr_28814_28852 = state_28773__$1;
(statearr_28814_28852[(2)] = inst_28687);

(statearr_28814_28852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (18))){
var state_28773__$1 = state_28773;
var statearr_28815_28853 = state_28773__$1;
(statearr_28815_28853[(2)] = false);

(statearr_28815_28853[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (8))){
var inst_28700 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
var statearr_28816_28854 = state_28773__$1;
(statearr_28816_28854[(2)] = inst_28700);

(statearr_28816_28854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23813__auto__))
;
return ((function (switch__23718__auto__,c__23813__auto__){
return (function() {
var devcards$core$state_machine__23719__auto__ = null;
var devcards$core$state_machine__23719__auto____0 = (function (){
var statearr_28817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28817[(0)] = devcards$core$state_machine__23719__auto__);

(statearr_28817[(1)] = (1));

return statearr_28817;
});
var devcards$core$state_machine__23719__auto____1 = (function (state_28773){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_28773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e28818){if((e28818 instanceof Object)){
var ex__23722__auto__ = e28818;
var statearr_28819_28855 = state_28773;
(statearr_28819_28855[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28856 = state_28773;
state_28773 = G__28856;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
devcards$core$state_machine__23719__auto__ = function(state_28773){
switch(arguments.length){
case 0:
return devcards$core$state_machine__23719__auto____0.call(this);
case 1:
return devcards$core$state_machine__23719__auto____1.call(this,state_28773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__23719__auto____0;
devcards$core$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__23719__auto____1;
return devcards$core$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto__))
})();
var state__23815__auto__ = (function (){var statearr_28820 = f__23814__auto__.call(null);
(statearr_28820[(6)] = c__23813__auto__);

return statearr_28820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto__))
);

return c__23813__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
devcards.core.TestDevcard = (function (){var ctor__20575__auto__ = (function (props__20572__auto__){
var this__20573__auto__ = this;
React.Component.call(this__20573__auto__,props__20572__auto__);

return this__20573__auto__;
});
goog.inherits(ctor__20575__auto__,React.Component);

var x28857_28858 = ctor__20575__auto__.prototype;
x28857_28858.componentWillMount = ((function (x28857_28858,ctor__20575__auto__){
return (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
});})(x28857_28858,ctor__20575__auto__))
;

x28857_28858.componentWillReceiveProps = ((function (x28857_28858,ctor__20575__auto__){
return (function (next_props){
var this$ = this;
var temp__5735__auto__ = goog.object.get(next_props,cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805)));
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
});})(x28857_28858,ctor__20575__auto__))
;

x28857_28858.render = ((function (x28857_28858,ctor__20575__auto__){
return (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
});})(x28857_28858,ctor__20575__auto__))
;


return ctor__20575__auto__;
})();

devcards.core.TestDevcard.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"TestDevcard","TestDevcard",-506859910,null));
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28863 = arguments.length;
var i__4731__auto___28864 = (0);
while(true){
if((i__4731__auto___28864 < len__4730__auto___28863)){
args__4736__auto__.push((arguments[i__4731__auto___28864]));

var G__28865 = (i__4731__auto___28864 + (1));
i__4731__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.t_devcards$core28860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core28860 = (function (test_thunks,meta28861){
this.test_thunks = test_thunks;
this.meta28861 = meta28861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
devcards.core.t_devcards$core28860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28862,meta28861__$1){
var self__ = this;
var _28862__$1 = this;
return (new devcards.core.t_devcards$core28860(self__.test_thunks,meta28861__$1));
});

devcards.core.t_devcards$core28860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28862){
var self__ = this;
var _28862__$1 = this;
return self__.meta28861;
});

devcards.core.t_devcards$core28860.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL;

devcards.core.t_devcards$core28860.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core28860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta28861","meta28861",-1140572006,null)], null);
});

devcards.core.t_devcards$core28860.cljs$lang$type = true;

devcards.core.t_devcards$core28860.cljs$lang$ctorStr = "devcards.core/t_devcards$core28860";

devcards.core.t_devcards$core28860.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"devcards.core/t_devcards$core28860");
});

/**
 * Positional factory function for devcards.core/t_devcards$core28860.
 */
devcards.core.__GT_t_devcards$core28860 = (function devcards$core$__GT_t_devcards$core28860(test_thunks__$1,meta28861){
return (new devcards.core.t_devcards$core28860(test_thunks__$1,meta28861));
});

}

return (new devcards.core.t_devcards$core28860(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devcards.core.test_card.cljs$lang$applyTo = (function (seq28859){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28859));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,(function (p1__28866_SHARP_,p2__28867_SHARP_){
return goog.object.get(p1__28866_SHARP_,p2__28867_SHARP_);
}),goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__5735__auto__)){
var cards = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.munge.call(null,ns_symbol))], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var card = temp__5735__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,cljs.core.munge.call(null,ns_symbol))));
if(cljs.core.truth_(temp__5735__auto__)){
var base_card_options = temp__5735__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__5735__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__5735__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5735__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return ["<div id=\"com-rigsomelight-devcards-main\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ReactDOMServer.renderToString((function (){var attrs28869 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28869))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs28869)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs28869))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28869)], null)));
})())),"</div>"].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5735__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
return ReactDOM.render((function (){var attrs28870 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28870))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs28870)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs28870))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28870)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__23813__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto__){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto__){
return (function (state_28880){
var state_val_28881 = (state_28880[(1)]);
if((state_val_28881 === (1))){
var inst_28871 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_28880__$1 = state_28880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28880__$1,(2),inst_28871);
} else {
if((state_val_28881 === (2))){
var inst_28873 = (state_28880[(2)]);
var inst_28874 = cljs.core.async.timeout.call(null,(100));
var state_28880__$1 = (function (){var statearr_28882 = state_28880;
(statearr_28882[(7)] = inst_28873);

return statearr_28882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28880__$1,(3),inst_28874);
} else {
if((state_val_28881 === (3))){
var inst_28876 = (state_28880[(2)]);
var inst_28877 = (function (){return ((function (inst_28876,state_val_28881,c__23813__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_28876,state_val_28881,c__23813__auto__))
})();
var inst_28878 = setTimeout(inst_28877,(0));
var state_28880__$1 = (function (){var statearr_28883 = state_28880;
(statearr_28883[(8)] = inst_28876);

return statearr_28883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28880__$1,inst_28878);
} else {
return null;
}
}
}
});})(c__23813__auto__))
;
return ((function (switch__23718__auto__,c__23813__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__23719__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__23719__auto____0 = (function (){
var statearr_28884 = [null,null,null,null,null,null,null,null,null];
(statearr_28884[(0)] = devcards$core$mount_namespace_$_state_machine__23719__auto__);

(statearr_28884[(1)] = (1));

return statearr_28884;
});
var devcards$core$mount_namespace_$_state_machine__23719__auto____1 = (function (state_28880){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_28880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e28885){if((e28885 instanceof Object)){
var ex__23722__auto__ = e28885;
var statearr_28886_28888 = state_28880;
(statearr_28886_28888[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28889 = state_28880;
state_28880 = G__28889;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__23719__auto__ = function(state_28880){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__23719__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__23719__auto____1.call(this,state_28880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__23719__auto____0;
devcards$core$mount_namespace_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__23719__auto____1;
return devcards$core$mount_namespace_$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto__))
})();
var state__23815__auto__ = (function (){var statearr_28887 = f__23814__auto__.call(null);
(statearr_28887[(6)] = c__23813__auto__);

return statearr_28887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto__))
);

return c__23813__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
