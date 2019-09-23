// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.prototipo');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('pr4.periodization');
goog.require('button');
goog.require('slider');
goog.require('select');
goog.require('menu_item');
goog.require('form_control_label');
goog.require('checkbox');
goog.require('expand_more');
goog.require('expand_less');
goog.require('search');
goog.require('chevron_left');
goog.require('chevron_right');
goog.require('google_charts');
goog.require('tick.alpha.api');
goog.require('re_frame.core');
goog.require('pr4.app_state');
goog.require('pr4.events');
goog.require('pr4.util');
goog.require('pr4.external_storage');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.tracing');
pr4.prototipo.global$module$button = goog.global["Button"];
pr4.prototipo.global$module$slider = goog.global["Slider"];
pr4.prototipo.global$module$select = goog.global["Select"];
pr4.prototipo.global$module$menu_item = goog.global["MenuItem"];
pr4.prototipo.global$module$form_control_label = goog.global["FormControlLabel"];
pr4.prototipo.global$module$checkbox = goog.global["Checkbox"];
pr4.prototipo.global$module$expand_more = goog.global["ExpandMore"];
pr4.prototipo.global$module$expand_less = goog.global["ExpandLess"];
pr4.prototipo.global$module$search = goog.global["Search"];
pr4.prototipo.global$module$chevron_left = goog.global["ChevronLeft"];
pr4.prototipo.global$module$chevron_right = goog.global["ChevronRight"];
pr4.prototipo.global$module$google_charts = goog.global["GoogleCharts"];
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.init_app_state !== 'undefined')){
} else {
pr4.prototipo.init_app_state = (function (){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return pr4.external_storage.init_app_state.call(null);
})()
;
}
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.devcards_hidden !== 'undefined')){
} else {
pr4.prototipo.devcards_hidden = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"hidding-cards","hidding-cards",-932317179)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hidding-cards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26391 = (function (meta26392){
this.meta26392 = meta26392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26393,meta26392__$1){
var self__ = this;
var _26393__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26391(meta26392__$1));
});

pr4.prototipo.t_pr4$prototipo26391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26393){
var self__ = this;
var _26393__$1 = this;
return self__.meta26392;
});

pr4.prototipo.t_pr4$prototipo26391.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26391.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__24579__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__24579__auto____$1){
return (function (){
var seq__26394 = cljs.core.seq.call(null,cljs.core.deref.call(null,pr4.prototipo.devcards_hidden));
var chunk__26395 = null;
var count__26396 = (0);
var i__26397 = (0);
while(true){
if((i__26397 < count__26396)){
var hidden_atom = cljs.core._nth.call(null,chunk__26395,i__26397);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__26402 = seq__26394;
var G__26403 = chunk__26395;
var G__26404 = count__26396;
var G__26405 = (i__26397 + (1));
seq__26394 = G__26402;
chunk__26395 = G__26403;
count__26396 = G__26404;
i__26397 = G__26405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26394);
if(temp__5735__auto__){
var seq__26394__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26394__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26394__$1);
var G__26406 = cljs.core.chunk_rest.call(null,seq__26394__$1);
var G__26407 = c__4550__auto__;
var G__26408 = cljs.core.count.call(null,c__4550__auto__);
var G__26409 = (0);
seq__26394 = G__26406;
chunk__26395 = G__26407;
count__26396 = G__26408;
i__26397 = G__26409;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__26394__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__26410 = cljs.core.next.call(null,seq__26394__$1);
var G__26411 = null;
var G__26412 = (0);
var G__26413 = (0);
seq__26394 = G__26410;
chunk__26395 = G__26411;
count__26396 = G__26412;
i__26397 = G__26413;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__24579__auto____$1))
], null),"hide all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"show-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__24579__auto____$1){
return (function (){
var seq__26398 = cljs.core.seq.call(null,cljs.core.deref.call(null,pr4.prototipo.devcards_hidden));
var chunk__26399 = null;
var count__26400 = (0);
var i__26401 = (0);
while(true){
if((i__26401 < count__26400)){
var hidden_atom = cljs.core._nth.call(null,chunk__26399,i__26401);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__26414 = seq__26398;
var G__26415 = chunk__26399;
var G__26416 = count__26400;
var G__26417 = (i__26401 + (1));
seq__26398 = G__26414;
chunk__26399 = G__26415;
count__26400 = G__26416;
i__26401 = G__26417;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26398);
if(temp__5735__auto__){
var seq__26398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26398__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26398__$1);
var G__26418 = cljs.core.chunk_rest.call(null,seq__26398__$1);
var G__26419 = c__4550__auto__;
var G__26420 = cljs.core.count.call(null,c__4550__auto__);
var G__26421 = (0);
seq__26398 = G__26418;
chunk__26399 = G__26419;
count__26400 = G__26420;
i__26401 = G__26421;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__26398__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__26422 = cljs.core.next.call(null,seq__26398__$1);
var G__26423 = null;
var G__26424 = (0);
var G__26425 = (0);
seq__26398 = G__26422;
chunk__26399 = G__26423;
count__26400 = G__26424;
i__26401 = G__26425;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__24579__auto____$1))
], null),"show all"], null)], null);
});
;})(card_container_style,this__24579__auto____$1))
})();
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26392","meta26392",701553770,null)], null);
});

pr4.prototipo.t_pr4$prototipo26391.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26391.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26391";

pr4.prototipo.t_pr4$prototipo26391.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26391");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26391.
 */
pr4.prototipo.__GT_t_pr4$prototipo26391 = (function pr4$prototipo$__GT_t_pr4$prototipo26391(meta26392){
return (new pr4.prototipo.t_pr4$prototipo26391(meta26392));
});

}

return (new pr4.prototipo.t_pr4$prototipo26391(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Por-que-o-Periodiza?","Por-que-o-Periodiza?",46885131)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Por-que-o-Periodiza?",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26426 = (function (meta26427){
this.meta26427 = meta26427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26428,meta26427__$1){
var self__ = this;
var _26428__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26426(meta26427__$1));
});

pr4.prototipo.t_pr4$prototipo26426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26428){
var self__ = this;
var _26428__$1 = this;
return self__.meta26427;
});

pr4.prototipo.t_pr4$prototipo26426.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26426.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26429 = cljs.core.deref.call(null,devcard_data);
var map__26429__$1 = (((((!((map__26429 == null))))?(((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var hidden_QMARK_ = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26429,map__26429__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26429,map__26429__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "padding": "20px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "margin": "20px 0 10px 0"})], null),"O que \u00E9 o Periodiza?"], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),(function (){var p_style = ({"textIndent": "30px"});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"O Periodiza \u00E9 uma ferramenta para o educador f\u00EDsico que faz um planejamento de longo prazo para seus alunos. O objetivo da ferramenta \u00E9 ajudar em c\u00E1lculos de volume e intensidade de treino sem restring\u00ED-lo, ou seja, dando a liberdade total para adaptar o planejamento a realidade de seu aluno."], null)], null);
})()], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26427","meta26427",1745250349,null)], null);
});

pr4.prototipo.t_pr4$prototipo26426.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26426.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26426";

pr4.prototipo.t_pr4$prototipo26426.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26426");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26426.
 */
pr4.prototipo.__GT_t_pr4$prototipo26426 = (function pr4$prototipo$__GT_t_pr4$prototipo26426(meta26427){
return (new pr4.prototipo.t_pr4$prototipo26426(meta26427));
});

}

return (new pr4.prototipo.t_pr4$prototipo26426(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"A-metodologia-da-periodiza\u00E7\u00E3o","A-metodologia-da-periodiza\u00E7\u00E3o",1930871409)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"A-metodologia-da-periodiza\u00E7\u00E3o",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26431 = (function (meta26432){
this.meta26432 = meta26432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26433,meta26432__$1){
var self__ = this;
var _26433__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26431(meta26432__$1));
});

pr4.prototipo.t_pr4$prototipo26431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26433){
var self__ = this;
var _26433__$1 = this;
return self__.meta26432;
});

pr4.prototipo.t_pr4$prototipo26431.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26431.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26434 = cljs.core.deref.call(null,devcard_data);
var map__26434__$1 = (((((!((map__26434 == null))))?(((((map__26434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26434):map__26434);
var hidden_QMARK_ = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26434,map__26434__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26434,map__26434__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "padding": "20px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "margin": "20px 0 10px 0"})], null),"A metodologia da periodiza\u00E7\u00E3o"], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),(function (){var p_style = ({"textIndent": "30px"});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"O per\u00EDodo total do planejamento \u00E9 chamado de ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"macrociclo"], null)," divido em 3 fases: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"b\u00E1sica"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"espec\u00EDfica"], null)," e ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"transi\u00E7\u00E3o"], null),"."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"fase b\u00E1sica"], null)," \u00E9 respons\u00E1vel por uma adapta\u00E7\u00E3o do aluno, \u00E9 caracterizada por um volume de treino alto e intensidade baixa."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"fase espec\u00EDfica"], null)," \u00E9 caracterizada por um volume baixo e uma intensidade alta, \u00E9 o per\u00EDodo em que o aluno encontra seu auge de intensidade. "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"fase de transi\u00E7\u00E3o"], null)," \u00E9 o per\u00EDodo que antecede uma pr\u00F3xima periodiza\u00E7\u00E3o, com o objetivo de recuperar o aluno. "], null)], null);
})()], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26432","meta26432",53076366,null)], null);
});

pr4.prototipo.t_pr4$prototipo26431.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26431.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26431";

pr4.prototipo.t_pr4$prototipo26431.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26431");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26431.
 */
pr4.prototipo.__GT_t_pr4$prototipo26431 = (function pr4$prototipo$__GT_t_pr4$prototipo26431(meta26432){
return (new pr4.prototipo.t_pr4$prototipo26431(meta26432));
});

}

return (new pr4.prototipo.t_pr4$prototipo26431(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
(new pr4.prototipo.global$module$google_charts()).load("current",({"packages": ["timeline"]}));
pr4.prototipo.draw_timeline_chart = (function pr4$prototipo$draw_timeline_chart(element_id,data_array_input,chart_width){
return (function (){
var g_charts_instance = (new pr4.prototipo.global$module$google_charts());
var el = document.getElementById(element_id);
var color_map = cljs.core.PersistentHashMap.fromArrays(["Estabilizador","Base","Espec\u00EDfica","Macroc\u00EDclo","Ordin\u00E1rio","Recupera\u00E7\u00E3o","Auge","B\u00E1sica","Choque 1","Controle","Recuperativo","Choque 2","Incorporativo","Incorpora\u00E7\u00E3o","Transi\u00E7\u00E3o"],["#b7a6cd","#86acd3","#2965af","#3bbab5","#86acd3","#83d1d5","#3276b5","#69419b","#b7a6cd","#4cb4b9","#83d1d5","#3276b5","#8869ad","#8869ad","#44a3a8"]);
var data_array = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Type","Name",({"role": "style"}),"Start","End"], null),cljs.core.map.call(null,((function (g_charts_instance,el,color_map){
return (function (p__26438){
var vec__26439 = p__26438;
var type = cljs.core.nth.call(null,vec__26439,(0),null);
var name = cljs.core.nth.call(null,vec__26439,(1),null);
var start = cljs.core.nth.call(null,vec__26439,(2),null);
var end = cljs.core.nth.call(null,vec__26439,(3),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,name,color_map.call(null,name),tick.alpha.api.inst.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),"T00:00"].join('')),tick.alpha.api.inst.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(end),"T00:00"].join(''))], null);
});})(g_charts_instance,el,color_map))
,data_array_input))));
var data = ((function (g_charts_instance,el,color_map,data_array){
return (function (){
return g_charts_instance.api.visualization.arrayToDataTable(data_array);
});})(g_charts_instance,el,color_map,data_array))
;
var options = ({"timeline": ({"showRowLabels": false})});
var draw_fn = ((function (g_charts_instance,el,color_map,data_array,data,options){
return (function (){
var chart = (new g_charts_instance.api.visualization.Timeline(el));
var select_handler = ((function (chart,g_charts_instance,el,color_map,data_array,data,options){
return (function (){
return ((function (chart,g_charts_instance,el,color_map,data_array,data,options){
return (function (p1__26437_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","zoom-macro-timeline","pr4.events/zoom-macro-timeline",1070822918),p1__26437_SHARP_], null));
});})(chart,g_charts_instance,el,color_map,data_array,data,options))
.call(null,((function (chart,g_charts_instance,el,color_map,data_array,data,options){
return (function (p1__26436_SHARP_){
return cljs.core.nth.call(null,data_array_input,p1__26436_SHARP_,cljs.core.last.call(null,data_array_input));
});})(chart,g_charts_instance,el,color_map,data_array,data,options))
.call(null,cljs.core.first.call(null,chart.getSelection()).row));
});})(chart,g_charts_instance,el,color_map,data_array,data,options))
;
g_charts_instance.api.visualization.events.addListener(chart,"select",select_handler);

el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((document.getElementsByClassName("com-rigsomelight-devcard").item((0)).clientWidth * chart_width)),"px"].join('');

return chart.draw(data.call(null),options);
});})(g_charts_instance,el,color_map,data_array,data,options))
;
return g_charts_instance.load(draw_fn);
});
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Macroc\u00EDclo","Macroc\u00EDclo",1970044108)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Macroc\u00EDclo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26442 = (function (meta26443){
this.meta26443 = meta26443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26444,meta26443__$1){
var self__ = this;
var _26444__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26442(meta26443__$1));
});

pr4.prototipo.t_pr4$prototipo26442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26444){
var self__ = this;
var _26444__$1 = this;
return self__.meta26443;
});

pr4.prototipo.t_pr4$prototipo26442.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26442.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26445 = cljs.core.deref.call(null,devcard_data);
var map__26445__$1 = (((((!((map__26445 == null))))?(((((map__26445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26445):map__26445);
var hidden_QMARK_ = cljs.core.get.call(null,map__26445__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26445,map__26445__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26445,map__26445__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#session2-chart","div#session2-chart",250490069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingTop": "20px", "height": (200)}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pr4.prototipo.draw_chart.call(null,"session2-chart",pr4.prototipo.sessions__GT_chart_data2.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","zoom-dates","pr4.prototipo/zoom-dates",1521240307)], null)))),0.95,pr4.prototipo.normal_chart_options.call(null,(4085),(14825),(63),(90)))], null),"Carregando.."], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#macrocycle-timeline","div#macrocycle-timeline",-1505355510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingTop": "20px", "height": (250)}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pr4.prototipo.draw_timeline_chart.call(null,"macrocycle-timeline",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","macrocycle-timeline","pr4.app-state/macrocycle-timeline",-2103232921)], null))),0.98)], null),"Carregando.."], null))], null)], null)], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26443","meta26443",-1680223409,null)], null);
});

pr4.prototipo.t_pr4$prototipo26442.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26442.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26442";

pr4.prototipo.t_pr4$prototipo26442.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26442");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26442.
 */
pr4.prototipo.__GT_t_pr4$prototipo26442 = (function pr4$prototipo$__GT_t_pr4$prototipo26442(meta26443){
return (new pr4.prototipo.t_pr4$prototipo26442(meta26443));
});

}

return (new pr4.prototipo.t_pr4$prototipo26442(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("pr4.prototipo","macrocycle-timeline","pr4.prototipo/macrocycle-timeline",-1203941531,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.Keyword(null,"end-date","end-date",-208259642)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),null,(6),null,(3),null,(2),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01",null,"2019-07-01",null,"2018-09-01",null,"2019-06-01",null,"2018-12-01",null,"2019-01-01",null,"2019-05-01",null,"2018-10-01",null,"2018-08-01",null,"2019-02-01",null,"2019-03-01",null,"2019-04-01",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01",null,"2020-07-01",null,"2019-12-01",null,"2020-05-01",null,"2020-06-01",null,"2020-02-01",null,"2019-09-01",null,"2020-04-01",null,"2019-08-01",null,"2019-10-01",null,"2020-08-01",null,"2020-01-01",null,"2019-11-01",null], null), null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
pr4.prototipo.valid_redef_args_QMARK_ = (function pr4$prototipo$valid_redef_args_QMARK_(app_state){
var vec__26447 = pr4.prototipo.get_in_redefine_periodization.call(null,app_state);
var days_of_training = cljs.core.nth.call(null,vec__26447,(0),null);
var initial_date = cljs.core.nth.call(null,vec__26447,(1),null);
var end_date = cljs.core.nth.call(null,vec__26447,(2),null);
var sessions_time_target = cljs.core.nth.call(null,vec__26447,(3),null);
var total_days = pr4.util.days_difference.call(null,end_date,initial_date);
var days_per_micro = ((28) / cljs.core.count.call(null,days_of_training));
var micros_amount = Math.floor((total_days / days_per_micro));
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,days_of_training))){
alert("Selecione pelo menos um dia na semana de treino.");

return false;
} else {
if((micros_amount < (7))){
alert("Desculpe, mas com essa altera\u00E7\u00E3o o planejamento fica muito curto.");

return false;
} else {
if(cljs.core._EQ_.call(null,(7),cljs.core.count.call(null,days_of_training))){
alert("N\u00E3o \u00E9 bom ficar pelo menos um dia na semana sem treinar? \u00C9 s\u00F3 uma sugest\u00E3o ;)");

return true;
} else {
if((sessions_time_target <= (0))){
alert("O tempo m\u00E9dio por sess\u00E3o tem que ser maior que zero :/");

return false;
} else {
return true;

}
}
}
}
});
pr4.prototipo.domain_sessions = (function pr4$prototipo$domain_sessions(days_of_training,initial_date,end_date,sessions_time_target){
var total_days = pr4.util.days_difference.call(null,end_date,initial_date);
var days_per_micro = ((28) / cljs.core.count.call(null,days_of_training));
var micros_amount = Math.floor((total_days / days_per_micro));
return pr4.periodization.periodization_sessions.call(null,((4) * micros_amount),sessions_time_target);
});
pr4.prototipo.macrocycle_timeline = (function pr4$prototipo$macrocycle_timeline(days_of_training,initial_date,end_date){
var total_days = pr4.util.days_difference.call(null,pr4.util.plus_days.call(null,end_date,(-3)),initial_date);
var days_per_micro = ((28) / cljs.core.count.call(null,days_of_training));
var micros_amount = Math.floor((total_days / days_per_micro));
var phases = cljs.core.remove.call(null,cljs.core.zero_QMARK_,pr4.periodization.count_phases.call(null,micros_amount));
var mesos = cljs.core.mapcat.call(null,((function (total_days,days_per_micro,micros_amount,phases){
return (function (p1__26451_SHARP_,p2__26450_SHARP_){
return pr4.periodization.phase_mesos.call(null,p2__26450_SHARP_,p1__26451_SHARP_);
});})(total_days,days_per_micro,micros_amount,phases))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B\u00E1sica","Espec\u00EDfica","Transi\u00E7\u00E3o"], null),phases);
var micros = cljs.core.mapcat.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos){
return (function (p1__26452_SHARP_){
return cljs.core.apply.call(null,pr4.periodization.meso_micros,p1__26452_SHARP_);
});})(total_days,days_per_micro,micros_amount,phases,mesos))
,cljs.core.map.call(null,cljs.core.vals,mesos));
var offset_list = ((function (total_days,days_per_micro,micros_amount,phases,mesos,micros){
return (function (p1__26453_SHARP_,p2__26454_SHARP_){
return cljs.core.take.call(null,cljs.core.count.call(null,p1__26453_SHARP_),cljs.core.drop.call(null,p2__26454_SHARP_,cljs.core.cycle.call(null,p1__26453_SHARP_)));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros))
;
var final_micro_date = ((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list){
return (function (start){
var i = (4);
var date = pr4.util.plus_days.call(null,start,(1));
var week_days_of_training = (function (){var current = pr4.util.plus_days.call(null,start,(1));
var index = days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current)));
while(true){
if(cljs.core._EQ_.call(null,(-1),index)){
var G__26463 = pr4.util.plus_days.call(null,current,(1));
var G__26464 = days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,pr4.util.plus_days.call(null,current,(1)))));
current = G__26463;
index = G__26464;
continue;
} else {
return offset_list.call(null,days_of_training,index);
}
break;
}
})();
while(true){
if(cljs.core._EQ_.call(null,i,(0))){
return pr4.util.plus_days.call(null,date,(-1));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,week_days_of_training),tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,date)))){
var G__26465 = (i - (1));
var G__26466 = pr4.util.plus_days.call(null,date,(1));
var G__26467 = offset_list.call(null,week_days_of_training,(1));
i = G__26465;
date = G__26466;
week_days_of_training = G__26467;
continue;
} else {
var G__26468 = i;
var G__26469 = pr4.util.plus_days.call(null,date,(1));
var G__26470 = week_days_of_training;
i = G__26468;
date = G__26469;
week_days_of_training = G__26470;
continue;

}
}
break;
}
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list))
;
var micros__GT_dates = ((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date){
return (function (val,p__26459){
var vec__26460 = p__26459;
var type = cljs.core.nth.call(null,vec__26460,(0),null);
var category = cljs.core.nth.call(null,vec__26460,(1),null);
var micros_amount__$1 = cljs.core.nth.call(null,vec__26460,(2),null);
var last_date = (function (){var or__4131__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,val));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pr4.util.plus_days.call(null,initial_date,(-1));
}
})();
var final$ = cljs.core.nth.call(null,cljs.core.iterate.call(null,final_micro_date,last_date),micros_amount__$1);
var start = pr4.util.plus_days.call(null,last_date,(1));
return cljs.core.conj.call(null,val,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,category,start,cljs.core.str.cljs$core$IFn$_invoke$arity$1(final$)], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date))
;
var macro_final_date = cljs.core.nth.call(null,cljs.core.iterate.call(null,final_micro_date,pr4.util.plus_days.call(null,initial_date,(-1))),micros_amount);
return cljs.core.concat.call(null,cljs.core.reduce.call(null,micros__GT_dates,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date){
return (function (p1__26455_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Micro",p1__26455_SHARP_,(1)], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date))
,micros)),cljs.core.reduce.call(null,micros__GT_dates,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date){
return (function (p1__26456_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Meso",new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__26456_SHARP_),new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673).cljs$core$IFn$_invoke$arity$1(p1__26456_SHARP_)], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date))
,mesos)),cljs.core.reduce.call(null,micros__GT_dates,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date){
return (function (p1__26457_SHARP_,p2__26458_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fase",p1__26457_SHARP_,p2__26458_SHARP_], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B\u00E1sica","Espec\u00EDfica","Transi\u00E7\u00E3o"], null),phases)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Macro","Macroc\u00EDclo",initial_date,cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_final_date)], null)], null));
});
pr4.prototipo.redefine_periodization_goal = (function pr4$prototipo$redefine_periodization_goal(app_state){
var goal = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null));
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 4, ["Hipertrofia","deselected","For\u00E7a","deselected","Pot\u00EAncia","deselected","Resist\u00EAncia","deselected"], null),goal,"selected-light");
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194),pr4.prototipo.redefine_periodization_goal);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_goal_select = (function pr4$prototipo$redefine_periodization_goal_select(app_state,p__26471){
var vec__26472 = p__26471;
var event = cljs.core.nth.call(null,vec__26472,(0),null);
var new_goal = cljs.core.nth.call(null,vec__26472,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new cljs.core.Symbol(null,"new-goal","new-goal",-1942070504,null)));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_goal;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-goal","new-goal",-1942070504,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new cljs.core.Symbol(null,"new-goal","new-goal",-1942070504,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26475){var e = e26475;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_goal_select = (function pr4$prototipo$redefine_periodization_goal_select(app_state,p__26476){
var vec__26477 = p__26476;
var event = cljs.core.nth.call(null,vec__26477,(0),null);
var new_goal = cljs.core.nth.call(null,vec__26477,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new_goal);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),pr4.prototipo.redefine_periodization_goal_select);
pr4.prototipo.redefine_periodization_level = (function pr4$prototipo$redefine_periodization_level(app_state){
var level = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null));
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, ["Iniciante","deselected","Intermedi\u00E1rio","deselected","Avan\u00E7ado","deselected"], null),level,"selected-light");
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814),pr4.prototipo.redefine_periodization_level);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_level_select = (function pr4$prototipo$redefine_periodization_level_select(app_state,p__26480){
var vec__26481 = p__26480;
var event = cljs.core.nth.call(null,vec__26481,(0),null);
var new_level = cljs.core.nth.call(null,vec__26481,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.Symbol(null,"new-level","new-level",1227476992,null)));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_level;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-level","new-level",1227476992,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.Symbol(null,"new-level","new-level",1227476992,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26484){var e = e26484;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_level_select = (function pr4$prototipo$redefine_periodization_level_select(app_state,p__26485){
var vec__26486 = p__26485;
var event = cljs.core.nth.call(null,vec__26486,(0),null);
var new_level = cljs.core.nth.call(null,vec__26486,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new_level);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),pr4.prototipo.redefine_periodization_level_select);
pr4.prototipo.redefine_periodization_week_sessions = (function pr4$prototipo$redefine_periodization_week_sessions(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"week-sessions","week-sessions",482312455)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions","pr4.prototipo/redefine-periodization-week-sessions",178865259),pr4.prototipo.redefine_periodization_week_sessions);
pr4.prototipo.redefine_periodization_week_sessions_class = (function pr4$prototipo$redefine_periodization_week_sessions_class(week_sessions){
var to_class = (function (day,yes_value){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26489_SHARP_){
return cljs.core._EQ_.call(null,day,p1__26489_SHARP_);
}),week_sessions))){
return yes_value;
} else {
return "deselected";
}
});
return new cljs.core.PersistentArrayMap(null, 7, ["Domingo",to_class.call(null,"Domingo","selected-dark"),"Segunda",to_class.call(null,"Segunda","selected-light"),"Ter\u00E7a",to_class.call(null,"Ter\u00E7a","selected-dark"),"Quarta",to_class.call(null,"Quarta","selected-light"),"Quinta",to_class.call(null,"Quinta","selected-dark"),"Sexta",to_class.call(null,"Sexta","selected-light"),"S\u00E1bado",to_class.call(null,"S\u00E1bado","selected-dark")], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions","pr4.prototipo/redefine-periodization-week-sessions",178865259)], null),pr4.prototipo.redefine_periodization_week_sessions_class);
pr4.prototipo.redefine_periodization_week_sessions_toggle = (function pr4$prototipo$redefine_periodization_week_sessions_toggle(p__26490,p__26491){
var map__26492 = p__26490;
var map__26492__$1 = (((((!((map__26492 == null))))?(((((map__26492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26492):map__26492);
var app_state = cljs.core.get.call(null,map__26492__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26493 = p__26491;
var event = cljs.core.nth.call(null,vec__26493,(0),null);
var week_day = cljs.core.nth.call(null,vec__26493,(1),null);
var full_week = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domingo","Segunda","Ter\u00E7a","Quarta","Quinta","Sexta","S\u00E1bado"], null);
var toggle_fn = ((function (full_week,map__26492,map__26492__$1,app_state,vec__26493,event,week_day){
return (function (week_sessions){
if(cljs.core.truth_(cljs.core.set.call(null,week_sessions).call(null,week_day))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([week_day]),week_sessions);
} else {
return cljs.core.filter.call(null,cljs.core.conj.call(null,cljs.core.set.call(null,week_sessions),week_day),full_week);
}
});})(full_week,map__26492,map__26492__$1,app_state,vec__26493,event,week_day))
;
var new_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"week-sessions","week-sessions",482312455)], null),toggle_fn);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),pr4.prototipo.redefine_periodization_week_sessions_toggle);
pr4.prototipo.redefine_periodization_planning_start = (function pr4$prototipo$redefine_periodization_planning_start(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start","pr4.prototipo/redefine-periodization-planning-start",1739749629),pr4.prototipo.redefine_periodization_planning_start);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_planning_start_event = (function pr4$prototipo$redefine_periodization_planning_start_event(p__26497,p__26498){
var map__26499 = p__26497;
var map__26499__$1 = (((((!((map__26499 == null))))?(((((map__26499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26499):map__26499);
var app_state = cljs.core.get.call(null,map__26499__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26500 = p__26498;
var event = cljs.core.nth.call(null,vec__26500,(0),null);
var new_start_date = cljs.core.nth.call(null,vec__26500,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_start_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.valid_redef_args_QMARK_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26504){var e = e26504;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_planning_start_event = (function pr4$prototipo$redefine_periodization_planning_start_event(p__26505,p__26506){
var map__26507 = p__26505;
var map__26507__$1 = (((((!((map__26507 == null))))?(((((map__26507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26507):map__26507);
var app_state = cljs.core.get.call(null,map__26507__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26508 = p__26506;
var event = cljs.core.nth.call(null,vec__26508,(0),null);
var new_start_date = cljs.core.nth.call(null,vec__26508,(1),null);
var new_app_state = cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new_start_date);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),pr4.prototipo.redefine_periodization_planning_start_event);
pr4.prototipo.redefine_periodization_planning_end = (function pr4$prototipo$redefine_periodization_planning_end(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end","pr4.prototipo/redefine-periodization-planning-end",-106317155),pr4.prototipo.redefine_periodization_planning_end);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_planning_end_event = (function pr4$prototipo$redefine_periodization_planning_end_event(p__26512,p__26513){
var map__26514 = p__26512;
var map__26514__$1 = (((((!((map__26514 == null))))?(((((map__26514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26514):map__26514);
var app_state = cljs.core.get.call(null,map__26514__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26515 = p__26513;
var event = cljs.core.nth.call(null,vec__26515,(0),null);
var new_end_date = cljs.core.nth.call(null,vec__26515,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_end_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.valid_redef_args_QMARK_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26519){var e = e26519;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_planning_end_event = (function pr4$prototipo$redefine_periodization_planning_end_event(p__26520,p__26521){
var map__26522 = p__26520;
var map__26522__$1 = (((((!((map__26522 == null))))?(((((map__26522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26522):map__26522);
var app_state = cljs.core.get.call(null,map__26522__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26523 = p__26521;
var event = cljs.core.nth.call(null,vec__26523,(0),null);
var new_end_date = cljs.core.nth.call(null,vec__26523,(1),null);
var new_app_state = cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new_end_date);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),pr4.prototipo.redefine_periodization_planning_end_event);
pr4.prototipo.redefine_periodization_planning_duration = (function pr4$prototipo$redefine_periodization_planning_duration(p__26527){
var vec__26528 = p__26527;
var planning_start = cljs.core.nth.call(null,vec__26528,(0),null);
var planning_end = cljs.core.nth.call(null,vec__26528,(1),null);
var total_days = pr4.util.days_difference.call(null,planning_end,planning_start);
var months = cljs.core.quot.call(null,total_days,30.5);
var days = Math.ceil(cljs.core.rem.call(null,total_days,30.5));
var month_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(months),(((months > (1)))?" meses":" m\u00EAs")].join('');
var days_str = (((days > (1)))?[" e ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(days)," dias"].join(''):((cljs.core._EQ_.call(null,days,(1)))?[" e ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(days)," dia"].join(''):null
));
return [month_str,days_str].join('');
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-duration","pr4.prototipo/redefine-periodization-planning-duration",-1882696871),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start","pr4.prototipo/redefine-periodization-planning-start",1739749629)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end","pr4.prototipo/redefine-periodization-planning-end",-106317155)], null),pr4.prototipo.redefine_periodization_planning_duration);
pr4.prototipo.redefine_periodization_session_time_target = (function pr4$prototipo$redefine_periodization_session_time_target(app_state){
return pr4.util.seconds__GT_minute_text.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target","pr4.prototipo/redefine-periodization-session-time-target",-334973700),pr4.prototipo.redefine_periodization_session_time_target);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_session_time_target_add = (function pr4$prototipo$redefine_periodization_session_time_target_add(p__26531,p__26532){
var map__26533 = p__26531;
var map__26533__$1 = (((((!((map__26533 == null))))?(((((map__26533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26533):map__26533);
var app_state = cljs.core.get.call(null,map__26533__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26534 = p__26532;
var event = cljs.core.nth.call(null,vec__26534,(0),null);
var to_add = cljs.core.nth.call(null,vec__26534,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core._PLUS_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = to_add;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.valid_redef_args_QMARK_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26538){var e = e26538;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_session_time_target_add = (function pr4$prototipo$redefine_periodization_session_time_target_add(p__26539,p__26540){
var map__26541 = p__26539;
var map__26541__$1 = (((((!((map__26541 == null))))?(((((map__26541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26541):map__26541);
var app_state = cljs.core.get.call(null,map__26541__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26542 = p__26540;
var event = cljs.core.nth.call(null,vec__26542,(0),null);
var to_add = cljs.core.nth.call(null,vec__26542,(1),null);
var new_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),cljs.core._PLUS_,to_add);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),pr4.prototipo.redefine_periodization_session_time_target_add);
pr4.prototipo.get_in_redefine_periodization = (function pr4$prototipo$get_in_redefine_periodization(app_state){
var week_sessions = pr4.prototipo.redefine_periodization_week_sessions.call(null,app_state);
var days_of_training = cljs.core.mapv.call(null,new cljs.core.PersistentArrayMap(null, 7, ["Segunda",tick.alpha.api.MONDAY,"Ter\u00E7a",tick.alpha.api.TUESDAY,"Quarta",tick.alpha.api.WEDNESDAY,"Quinta",tick.alpha.api.THURSDAY,"Sexta",tick.alpha.api.FRIDAY,"S\u00E1bado",tick.alpha.api.SATURDAY,"Domingo",tick.alpha.api.SUNDAY], null),week_sessions);
var start_date = pr4.prototipo.redefine_periodization_planning_start.call(null,app_state);
var end_date = pr4.prototipo.redefine_periodization_planning_end.call(null,app_state);
var sessions_time_target = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [days_of_training,start_date,end_date,sessions_time_target], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.update_timeline = (function pr4$prototipo$update_timeline(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var timeline = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.macrocycle_timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.get_in_redefine_periodization.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26547 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.last.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var _ = cljs.core.nth.call(null,vec__26547,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26547,(1),null);
var start = cljs.core.nth.call(null,vec__26547,(2),null);
var end = cljs.core.nth.call(null,vec__26547,(3),null);
return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null)),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26546){var e = e26546;
throw e;
}});
} else {
pr4.prototipo.update_timeline = (function pr4$prototipo$update_timeline(app_state){
var timeline = cljs.core.apply.call(null,pr4.prototipo.macrocycle_timeline,pr4.prototipo.get_in_redefine_periodization.call(null,app_state));
var vec__26550 = cljs.core.last.call(null,timeline);
var _ = cljs.core.nth.call(null,vec__26550,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26550,(1),null);
var start = cljs.core.nth.call(null,vec__26550,(2),null);
var end = cljs.core.nth.call(null,vec__26550,(3),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),timeline),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717),pr4.prototipo.update_timeline);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.reset_sessions = (function pr4$prototipo$reset_sessions(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.domain_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.get_in_redefine_periodization.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26553){var e = e26553;
throw e;
}});
} else {
pr4.prototipo.reset_sessions = (function pr4$prototipo$reset_sessions(app_state){
var new_sessions = cljs.core.apply.call(null,pr4.prototipo.domain_sessions,pr4.prototipo.get_in_redefine_periodization.call(null,app_state));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new_sessions);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908),pr4.prototipo.reset_sessions);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.update_calendar = (function pr4$prototipo$update_calendar(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-week-sessions","redefine-periodization-week-sessions",630571794,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null)),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-planning-start","redefine-periodization-planning-start",-1830357852,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"%2","%2",1953183984,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"%2","%2",1953183984,null)),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null))))),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))))),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)))),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)], null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)], null),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var week_sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.redefine_periodization_week_sessions.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-week-sessions","redefine-periodization-week-sessions",630571794,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var week_days_of_training = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.mapv.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["Segunda",tick.alpha.api.MONDAY,"Ter\u00E7a",tick.alpha.api.TUESDAY,"Quarta",tick.alpha.api.WEDNESDAY,"Quinta",tick.alpha.api.THURSDAY,"Sexta",tick.alpha.api.FRIDAY,"S\u00E1bado",tick.alpha.api.SATURDAY,"Domingo",tick.alpha.api.SUNDAY], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var first_day = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.redefine_periodization_planning_start.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-planning-start","redefine-periodization-planning-start",-1830357852,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var offset_list = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions,week_sessions,week_days_of_training,first_day,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26554_SHARP_,p2__26555_SHARP_){
return debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null))),(3),cljs.core.take.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.count.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p1__26554_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"p2__26555#","p2__26555#",-1961328524,null)),(4),cljs.core.drop.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p2__26555_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p2__26555#","p2__26555#",-1961328524,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),(5),cljs.core.cycle.call(null,debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null),(6),p1__26554_SHARP_)))))));
});})(opts__25969__auto____$1,sessions,week_sessions,week_days_of_training,first_day,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null),new cljs.core.Symbol(null,"p2__26555#","p2__26555#",-1961328524,null)], null),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null)),cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"p2__26555#","p2__26555#",-1961328524,null),cljs.core.list(new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var rearranged_week_days = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var current = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = first_day;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var index = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days_of_training;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})().indexOf((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.day_of_week.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
while(true){
if((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core._EQ_.call(null,(-1),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = index;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()){
var G__26609 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26610 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days_of_training;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})().indexOf((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.day_of_week.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
current = G__26609;
index = G__26610;
continue;
} else {
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = offset_list.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days_of_training;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = index;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
}
break;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))))),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_calendar_days = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var idx = (0);
var val = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.PersistentVector.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var current_day = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = first_day;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var G__26563 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var vec__26565 = G__26563;
var seq__26566 = cljs.core.seq.call(null,vec__26565);
var first__26567 = cljs.core.first.call(null,seq__26566);
var seq__26566__$1 = cljs.core.next.call(null,seq__26566);
var current_session = first__26567;
var sessions__$1 = seq__26566__$1;
var G__26564 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = rearranged_week_days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var vec__26568 = G__26564;
var seq__26569 = cljs.core.seq.call(null,vec__26568);
var first__26570 = cljs.core.first.call(null,seq__26569);
var seq__26569__$1 = cljs.core.next.call(null,seq__26569);
var current_week_day = first__26570;
var week_days = seq__26569__$1;
var idx__$1 = idx;
var val__$1 = val;
var current_day__$1 = current_day;
var G__26563__$1 = G__26563;
var G__26564__$1 = G__26564;
while(true){
var idx__$2 = idx__$1;
var val__$2 = val__$1;
var current_day__$2 = current_day__$1;
var vec__26577 = G__26563__$1;
var seq__26578 = cljs.core.seq.call(null,vec__26577);
var first__26579 = cljs.core.first.call(null,seq__26578);
var seq__26578__$1 = cljs.core.next.call(null,seq__26578);
var current_session__$1 = first__26579;
var sessions__$2 = seq__26578__$1;
var vec__26580 = G__26564__$1;
var seq__26581 = cljs.core.seq.call(null,vec__26580);
var first__26582 = cljs.core.first.call(null,seq__26581);
var seq__26581__$1 = cljs.core.next.call(null,seq__26581);
var current_week_day__$1 = first__26582;
var week_days__$1 = seq__26581__$1;
if((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_session__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})() == null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = val__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
} else {
if((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.not_EQ_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_week_day__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.day_of_week.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_day__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()){
var G__26611 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26612 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.conj.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = val__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26613 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_day__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26614 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.cons.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_session__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26615 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.cons.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_week_day__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
idx__$1 = G__26611;
val__$1 = G__26612;
current_day__$1 = G__26613;
G__26563__$1 = G__26614;
G__26564__$1 = G__26615;
continue;
} else {
var G__26616 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})() + (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26617 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.conj.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = val__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),idx__$2], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26618 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_day__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26619 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26620 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.concat.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_week_day__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
idx__$1 = G__26616;
val__$1 = G__26617;
current_day__$1 = G__26618;
G__26563__$1 = G__26619;
G__26564__$1 = G__26620;
continue;

}
}
break;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)], null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)], null),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),first_day,new cljs.core.Keyword(null,"days","days",-1394072564),new_calendar_days], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-week-sessions","redefine-periodization-week-sessions",630571794,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null)),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-planning-start","redefine-periodization-planning-start",-1830357852,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null),new cljs.core.Symbol(null,"p2__26555#","p2__26555#",-1961328524,null)], null),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null)),cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"p2__26555#","p2__26555#",-1961328524,null),cljs.core.list(new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),new cljs.core.Symbol(null,"p1__26554#","p1__26554#",1073912301,null))))),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))))),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)))),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)], null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)], null),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26556){var e = e26556;
throw e;
}});
} else {
pr4.prototipo.update_calendar = (function pr4$prototipo$update_calendar(app_state){
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var week_sessions = pr4.prototipo.redefine_periodization_week_sessions.call(null,app_state);
var week_days_of_training = cljs.core.mapv.call(null,new cljs.core.PersistentArrayMap(null, 7, ["Segunda",tick.alpha.api.MONDAY,"Ter\u00E7a",tick.alpha.api.TUESDAY,"Quarta",tick.alpha.api.WEDNESDAY,"Quinta",tick.alpha.api.THURSDAY,"Sexta",tick.alpha.api.FRIDAY,"S\u00E1bado",tick.alpha.api.SATURDAY,"Domingo",tick.alpha.api.SUNDAY], null),week_sessions);
var first_day = pr4.prototipo.redefine_periodization_planning_start.call(null,app_state);
var offset_list = ((function (sessions,week_sessions,week_days_of_training,first_day){
return (function (p1__26554_SHARP_,p2__26555_SHARP_){
return cljs.core.take.call(null,cljs.core.count.call(null,p1__26554_SHARP_),cljs.core.drop.call(null,p2__26555_SHARP_,cljs.core.cycle.call(null,p1__26554_SHARP_)));
});})(sessions,week_sessions,week_days_of_training,first_day))
;
var rearranged_week_days = (function (){var current = pr4.util.plus_days.call(null,first_day,(1));
var index = week_days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current)));
while(true){
if(cljs.core._EQ_.call(null,(-1),index)){
var G__26621 = pr4.util.plus_days.call(null,current,(1));
var G__26622 = week_days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,pr4.util.plus_days.call(null,current,(1)))));
current = G__26621;
index = G__26622;
continue;
} else {
return offset_list.call(null,week_days_of_training,index);
}
break;
}
})();
var new_calendar_days = (function (){var idx = (0);
var val = cljs.core.PersistentVector.EMPTY;
var current_day = first_day;
var G__26589 = sessions;
var vec__26591 = G__26589;
var seq__26592 = cljs.core.seq.call(null,vec__26591);
var first__26593 = cljs.core.first.call(null,seq__26592);
var seq__26592__$1 = cljs.core.next.call(null,seq__26592);
var current_session = first__26593;
var sessions__$1 = seq__26592__$1;
var G__26590 = rearranged_week_days;
var vec__26594 = G__26590;
var seq__26595 = cljs.core.seq.call(null,vec__26594);
var first__26596 = cljs.core.first.call(null,seq__26595);
var seq__26595__$1 = cljs.core.next.call(null,seq__26595);
var current_week_day = first__26596;
var week_days = seq__26595__$1;
var idx__$1 = idx;
var val__$1 = val;
var current_day__$1 = current_day;
var G__26589__$1 = G__26589;
var G__26590__$1 = G__26590;
while(true){
var idx__$2 = idx__$1;
var val__$2 = val__$1;
var current_day__$2 = current_day__$1;
var vec__26603 = G__26589__$1;
var seq__26604 = cljs.core.seq.call(null,vec__26603);
var first__26605 = cljs.core.first.call(null,seq__26604);
var seq__26604__$1 = cljs.core.next.call(null,seq__26604);
var current_session__$1 = first__26605;
var sessions__$2 = seq__26604__$1;
var vec__26606 = G__26590__$1;
var seq__26607 = cljs.core.seq.call(null,vec__26606);
var first__26608 = cljs.core.first.call(null,seq__26607);
var seq__26607__$1 = cljs.core.next.call(null,seq__26607);
var current_week_day__$1 = first__26608;
var week_days__$1 = seq__26607__$1;
if((current_session__$1 == null)){
return val__$2;
} else {
if(cljs.core.not_EQ_.call(null,current_week_day__$1,tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current_day__$2)))){
var G__26623 = idx__$2;
var G__26624 = cljs.core.conj.call(null,val__$2,cljs.core.PersistentArrayMap.EMPTY);
var G__26625 = pr4.util.plus_days.call(null,current_day__$2,(1));
var G__26626 = cljs.core.cons.call(null,current_session__$1,sessions__$2);
var G__26627 = cljs.core.cons.call(null,current_week_day__$1,week_days__$1);
idx__$1 = G__26623;
val__$1 = G__26624;
current_day__$1 = G__26625;
G__26589__$1 = G__26626;
G__26590__$1 = G__26627;
continue;
} else {
var G__26628 = (idx__$2 + (1));
var G__26629 = cljs.core.conj.call(null,val__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),idx__$2], null));
var G__26630 = pr4.util.plus_days.call(null,current_day__$2,(1));
var G__26631 = sessions__$2;
var G__26632 = cljs.core.concat.call(null,week_days__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_week_day__$1], null));
idx__$1 = G__26628;
val__$1 = G__26629;
current_day__$1 = G__26630;
G__26589__$1 = G__26631;
G__26590__$1 = G__26632;
continue;

}
}
break;
}
})();
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),first_day,new cljs.core.Keyword(null,"days","days",-1394072564),new_calendar_days], null));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237),pr4.prototipo.update_calendar);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Redefinir-Periodiza\u00E7\u00E3o","Redefinir-Periodiza\u00E7\u00E3o",-923151118)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Redefinir-Periodiza\u00E7\u00E3o",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26635 = (function (meta26636){
this.meta26636 = meta26636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26637,meta26636__$1){
var self__ = this;
var _26637__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26635(meta26636__$1));
});

pr4.prototipo.t_pr4$prototipo26635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26637){
var self__ = this;
var _26637__$1 = this;
return self__.meta26636;
});

pr4.prototipo.t_pr4$prototipo26635.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26635.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26638 = cljs.core.deref.call(null,devcard_data);
var map__26638__$1 = (((((!((map__26638 == null))))?(((((map__26638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26638):map__26638);
var hidden_QMARK_ = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),".choose-button {\n            margin: 0 2px;\n            flex: 1;\n            padding: 4px;\n            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n                        0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                        0 3px 1px -2px rgba(0, 0, 0, 0.2);\n            border-radius: 4px;\n            cursor: pointer;\n          }\n          .selected-light{\n            background: #35b39d;\n            color: white;\n          }\n          .selected-dark{\n            background: #308c7c;\n            color: white;\n          }\n          .deselected{\n            background: none;\n            color: black;\n          }"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goal","div.goal",-1770576318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"minWidth": "500px", "marginTop": "2px", "flexDirection": "column", "justifyContent": "center", "padding": "0 10px", "display": "flex", "backgroundColor": "#dedede", "height": "14vh", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"Objetivo"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "textAlign": "center", "alignSelf": "stretch"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"Hipertrofia"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"Hipertrofia"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Hipertrofia"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"For\u00E7a"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"For\u00E7a"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"For\u00E7a"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"Pot\u00EAncia"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"Pot\u00EAncia"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Pot\u00EAncia"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"Resist\u00EAncia"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"Resist\u00EAncia"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Resist\u00EAncia"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "14vh", "minWidth": "500px", "padding": "0 10px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"N\u00EDvel"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "textAlign": "center", "alignSelf": "stretch"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814)], null))).call(null,"Iniciante"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"Iniciante"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Iniciante"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814)], null))).call(null,"Intermedi\u00E1rio"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"Intermedi\u00E1rio"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Intermedi\u00E1rio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814)], null))).call(null,"Avan\u00E7ado"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"Avan\u00E7ado"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Avan\u00E7ado"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "14vh", "minWidth": "500px", "padding": "0 10px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"Sess\u00F5es na Semana"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "textAlign": "center", "alignSelf": "stretch"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Domingo"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Domingo"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Dom"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Segunda"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Segunda"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Seg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Ter\u00E7a"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Ter\u00E7a"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Ter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Quarta"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Quarta"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Qua"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Quinta"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Quinta"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Qui"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Sexta"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Sexta"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Sex"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"S\u00E1bado"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"S\u00E1bado"], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Sab"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-session-time","div.adjust-session-time",-2134098498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "12vh", "display": "grid", "grid": "2fr 1fr / 1fr 1fr 1fr"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 1 / 2 / 4", "placeSelf": "end center", "fontSize": "1.17em"})], null),"Tempo M\u00E9dio por Sess\u00E3o"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "cursor": "pointer", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),(-300)], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target","pr4.prototipo/redefine-periodization-session-time-target",-334973700)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "cursor": "pointer", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),(300)], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.duration-selector","div.duration-selector",65913048),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "14vh", "minWidth": "500px", "padding": "0 10px", "display": "flex", "justifyContent": "space-evenly", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"In\u00EDcio do planejamento",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start","pr4.prototipo/redefine-periodization-planning-start",1739749629)], null))),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (this$){
return reagent.core.dom_node.call(null,this$).onchange = ((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (p1__26633_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),p1__26633_SHARP_.target.value], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
;
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Final do planejamento",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end","pr4.prototipo/redefine-periodization-planning-end",-106317155)], null))),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (this$){
return reagent.core.dom_node.call(null,this$).onchange = ((function (map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (p1__26634_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),p1__26634_SHARP_.target.value], null));
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
;
});})(map__26638,map__26638__$1,hidden_QMARK_,this__24579__auto____$1))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.duration","div.duration",-1451404765),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "10vh", "minWidth": "500px", "padding": "0 10px", "display": "flex", "flexDirection": "column", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"Dura\u00E7\u00E3o do Planejamento"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "medium", "textAlign": "center", "color": "black"})], null),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-duration","pr4.prototipo/redefine-periodization-planning-duration",-1882696871)], null)))], null)], null)], null)], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26636","meta26636",1620897490,null)], null);
});

pr4.prototipo.t_pr4$prototipo26635.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26635.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26635";

pr4.prototipo.t_pr4$prototipo26635.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26635");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26635.
 */
pr4.prototipo.__GT_t_pr4$prototipo26635 = (function pr4$prototipo$__GT_t_pr4$prototipo26635(meta26636){
return (new pr4.prototipo.t_pr4$prototipo26635(meta26636));
});

}

return (new pr4.prototipo.t_pr4$prototipo26635(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pr4.prototipo.sessions__GT_chart_data = (function pr4$prototipo$sessions__GT_chart_data(sessions,selection){
var row_fn = (function (index,p__26640){
var map__26641 = p__26640;
var map__26641__$1 = (((((!((map__26641 == null))))?(((((map__26641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26641):map__26641);
var total_sets = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var reps_max = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
return [["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1)))].join(''),pr4.periodization.session_volume.call(null,reps_max,total_sets),["color: ",((pr4.util.between_QMARK_.call(null,index,selection))?"#3bbcb7":"#b3e5e3")].join(''),pr4.periodization.reps_to_intensity.call(null,reps_max),["color: ",((pr4.util.between_QMARK_.call(null,index,selection))?"#ffd237":"#ffe99c")].join('')];
});
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Sess\u00E3o","Volume",({"role": "style"}),"Intensidade",({"role": "style"})],cljs.core.map_indexed.call(null,row_fn,sessions)));
});
pr4.prototipo.sessions_with_dates_idx = (function pr4$prototipo$sessions_with_dates_idx(app_state){
var first_day = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"first-day","first-day",-1519249764)], null));
var days = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"days","days",-1394072564)], null));
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var idx_date = cljs.core.map.call(null,((function (first_day,days,sessions){
return (function (p1__26643_SHARP_,p2__26644_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168).cljs$core$IFn$_invoke$arity$1(p1__26643_SHARP_),p2__26644_SHARP_], null));
});})(first_day,days,sessions))
,days,cljs.core.iterate.call(null,((function (first_day,days,sessions){
return (function (p1__26645_SHARP_){
return pr4.util.plus_days.call(null,p1__26645_SHARP_,(1));
});})(first_day,days,sessions))
,first_day));
return cljs.core.map.call(null,((function (first_day,days,sessions,idx_date){
return (function (p__26647){
var vec__26648 = p__26647;
var idx = cljs.core.nth.call(null,vec__26648,(0),null);
var date = cljs.core.nth.call(null,vec__26648,(1),null);
return cljs.core.assoc.call(null,cljs.core.nth.call(null,sessions,idx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null)),new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"idx","idx",1053688473),idx);
});})(first_day,days,sessions,idx_date))
,cljs.core.remove.call(null,((function (first_day,days,sessions,idx_date){
return (function (p1__26646_SHARP_){
return (cljs.core.first.call(null,p1__26646_SHARP_) == null);
});})(first_day,days,sessions,idx_date))
,idx_date));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","sessions-with-dates-idx","pr4.prototipo/sessions-with-dates-idx",685675840),pr4.prototipo.sessions_with_dates_idx);
pr4.prototipo.zoom_dates = (function pr4$prototipo$zoom_dates(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","zoom-dates","pr4.prototipo/zoom-dates",1521240307),pr4.prototipo.zoom_dates);
pr4.prototipo.sessions__GT_chart_data2 = (function pr4$prototipo$sessions__GT_chart_data2(_,___$1){
var sessions_with_dates_idx = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","sessions-with-dates-idx","pr4.prototipo/sessions-with-dates-idx",685675840)], null)));
var date_between_QMARK_ = ((function (sessions_with_dates_idx){
return (function (p1__26652_SHARP_,p2__26651_SHARP_,p3__26653_SHARP_){
return tick.alpha.api._LT__EQ_.call(null,(cljs.core.truth_(p2__26651_SHARP_)?tick.alpha.api.date.call(null,p2__26651_SHARP_):tick.alpha.api.date.call(null,p1__26652_SHARP_)),tick.alpha.api.date.call(null,p1__26652_SHARP_),(cljs.core.truth_(p3__26653_SHARP_)?tick.alpha.api.date.call(null,p3__26653_SHARP_):tick.alpha.api.date.call(null,p1__26652_SHARP_)));
});})(sessions_with_dates_idx))
;
var zoom_dates = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","zoom-dates","pr4.prototipo/zoom-dates",1521240307)], null)));
var row_fn = ((function (sessions_with_dates_idx,date_between_QMARK_,zoom_dates){
return (function (p__26655){
var map__26656 = p__26655;
var map__26656__$1 = (((((!((map__26656 == null))))?(((((map__26656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26656):map__26656);
var idx = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var total_sets = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var reps_max = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var rest_time = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
var vol_min = pr4.periodization.session_volume.call(null,reps_min,total_sets);
var vol_max = pr4.periodization.session_volume.call(null,reps_max,total_sets);
var int_min = pr4.periodization.reps_to_intensity.call(null,reps_max);
var int_max = pr4.periodization.reps_to_intensity.call(null,reps_min);
return [["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))].join(''),vol_min,"color: #3bbcb7",["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1))),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_sets)," s\u00E9ries","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_min),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_max)," repeti\u00E7\u00F5es"].join(''),vol_min,vol_max,int_min,"color: #ffd237",["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1))),"\n\nIntensidade: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr4.prototipo.reps__GT_intensity_text.call(null,reps_min,reps_max))," de RM","\nRecupera\u00E7\u00E3o: ",pr4.util.seconds__GT_minute_text.call(null,rest_time)].join(''),int_min,int_max];
});})(sessions_with_dates_idx,date_between_QMARK_,zoom_dates))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Sess\u00E3o","Volume",({"role": "style"}),({"role": "tooltip"}),({"role": "interval"}),({"role": "interval"}),"Intensidade",({"role": "style"}),({"role": "tooltip"}),({"role": "interval"}),({"role": "interval"})],cljs.core.map.call(null,row_fn,cljs.core.filter.call(null,((function (sessions_with_dates_idx,date_between_QMARK_,zoom_dates,row_fn){
return (function (p1__26654_SHARP_){
return cljs.core.apply.call(null,date_between_QMARK_,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__26654_SHARP_),zoom_dates);
});})(sessions_with_dates_idx,date_between_QMARK_,zoom_dates,row_fn))
,sessions_with_dates_idx))));
});
/**
 * Output example:
 *  ([0 2] [3 5] [6 8] [9 11] [12 14] [15 17] [18 20] [21 23] [24 26] [27 29] [30 31])
 */
pr4.prototipo.microciclos__GT_ranged_micros = (function pr4$prototipo$microciclos__GT_ranged_micros(micros){
return cljs.core.map.call(null,(function (first,last){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null);
}),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),micros),micros);
});
pr4.prototipo.micro_chart_data = (function pr4$prototipo$micro_chart_data(sessions,p__26661,micros){
var vec__26662 = p__26661;
var selection_f = cljs.core.nth.call(null,vec__26662,(0),null);
var selection_l = cljs.core.nth.call(null,vec__26662,(1),null);
var summed_volumes = ((function (vec__26662,selection_f,selection_l){
return (function (sessions__$1){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__26662,selection_f,selection_l){
return (function (p1__26659_SHARP_){
return cljs.core.apply.call(null,pr4.periodization.session_volume,p1__26659_SHARP_);
});})(vec__26662,selection_f,selection_l))
,cljs.core.map.call(null,((function (vec__26662,selection_f,selection_l){
return (function (p1__26658_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26658_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26658_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
});})(vec__26662,selection_f,selection_l))
,sessions__$1)));
});})(vec__26662,selection_f,selection_l))
;
var avg_intensity = ((function (summed_volumes,vec__26662,selection_f,selection_l){
return (function (sessions__$1){
return ((function (summed_volumes,vec__26662,selection_f,selection_l){
return (function (p1__26660_SHARP_){
return (p1__26660_SHARP_ / cljs.core.count.call(null,sessions__$1));
});})(summed_volumes,vec__26662,selection_f,selection_l))
.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,pr4.periodization.reps_to_intensity,cljs.core.map.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),sessions__$1))));
});})(summed_volumes,vec__26662,selection_f,selection_l))
;
var row_fn = ((function (summed_volumes,avg_intensity,vec__26662,selection_f,selection_l){
return (function (index,micro_range){
return [["Micro ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1)))].join(''),summed_volumes.call(null,pr4.util.select_indexes.call(null,sessions,micro_range)),["color: ",((cljs.core._EQ_.call(null,micro_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_f,selection_l], null)))?"#3bbc8e":"#74deb8")].join(''),avg_intensity.call(null,pr4.util.select_indexes.call(null,sessions,micro_range)),["color: ",((cljs.core._EQ_.call(null,micro_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_f,selection_l], null)))?"#ffbd38":"#ffcf70")].join('')];
});})(summed_volumes,avg_intensity,vec__26662,selection_f,selection_l))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Micro","Volume do Micro",({"role": "style"}),"Intensidade",({"role": "style"})],cljs.core.map_indexed.call(null,row_fn,pr4.prototipo.microciclos__GT_ranged_micros.call(null,micros))));
});
pr4.prototipo.reps__GT_intensity_text = (function pr4$prototipo$reps__GT_intensity_text(min,max){
if(cljs.core._EQ_.call(null,min,max)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,min))),"%"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,max))),"%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,min))),"%"].join('');
}
});
pr4.prototipo.reps__GT_reps_zone = (function pr4$prototipo$reps__GT_reps_zone(min,max){
if(cljs.core._EQ_.call(null,min,max)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),"RM"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max),"RM"].join('');
}
});
pr4.prototipo.draw_chart = (function pr4$prototipo$draw_chart(element_id,data_array,chart_width,options){
return (function (){
var g_charts_instance = (new pr4.prototipo.global$module$google_charts());
var el = document.getElementById(element_id);
var data = ((function (g_charts_instance,el){
return (function (){
return g_charts_instance.api.visualization.arrayToDataTable(data_array);
});})(g_charts_instance,el))
;
var chart = ((function (g_charts_instance,el,data){
return (function (){
el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((document.getElementsByClassName("com-rigsomelight-devcard").item((0)).clientWidth * chart_width)),"px"].join('');

return (new g_charts_instance.api.visualization.ColumnChart(el));
});})(g_charts_instance,el,data))
;
var draw_fn = ((function (g_charts_instance,el,data,chart){
return (function (){
return chart.call(null).draw(data.call(null),options);
});})(g_charts_instance,el,data,chart))
;
return g_charts_instance.load(draw_fn);
});
});
pr4.prototipo.normal_chart_options = (function pr4$prototipo$normal_chart_options(vol_min,vol_max,inten_min,inten_max){
return ({"theme": "maximized", "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "70%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "minValue": vol_min, "maxValue": vol_max, "viewWindowMode": "maximized"}),({"textPosition": "none", "minValue": inten_min, "maxValue": inten_max, "viewWindowMode": "maximized"})]});
});
pr4.prototipo.side_arrows = (function pr4$prototipo$side_arrows(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26672 = arguments.length;
var i__4731__auto___26673 = (0);
while(true){
if((i__4731__auto___26673 < len__4730__auto___26672)){
args__4736__auto__.push((arguments[i__4731__auto___26673]));

var G__26674 = (i__4731__auto___26673 + (1));
i__4731__auto___26673 = G__26674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pr4.prototipo.side_arrows.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pr4.prototipo.side_arrows.cljs$core$IFn$_invoke$arity$variadic = (function (p__26669,children){
var map__26670 = p__26669;
var map__26670__$1 = (((((!((map__26670 == null))))?(((((map__26670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26670):map__26670);
var onClickLeft = cljs.core.get.call(null,map__26670__$1,new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512));
var onClickRight = cljs.core.get.call(null,map__26670__$1,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801));
var style = cljs.core.get.call(null,map__26670__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.js__GT_clj.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 -12px"], null),cljs.core.js__GT_clj.call(null,style)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClickLeft], null)], null),cljs.core.map_indexed.call(null,((function (map__26670,map__26670__$1,onClickLeft,onClickRight,style){
return (function (p1__26666_SHARP_,p2__26665_SHARP_){
return cljs.core.with_meta.call(null,p2__26665_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__26666_SHARP_], null));
});})(map__26670,map__26670__$1,onClickLeft,onClickRight,style))
,children),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClickRight], null)], null)], null);
});

pr4.prototipo.side_arrows.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pr4.prototipo.side_arrows.cljs$lang$applyTo = (function (seq26667){
var G__26668 = cljs.core.first.call(null,seq26667);
var seq26667__$1 = cljs.core.next.call(null,seq26667);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26668,seq26667__$1);
});

/**
 * Show last session, but edit all the selected range.
 */
pr4.prototipo.old_session_component = (function pr4$prototipo$old_session_component(p__26680){
var map__26681 = p__26680;
var map__26681__$1 = (((((!((map__26681 == null))))?(((((map__26681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26681):map__26681);
var selected_sessions = cljs.core.get.call(null,map__26681__$1,new cljs.core.Keyword(null,"selected-sessions","selected-sessions",-1967071592));
var map__26683 = cljs.core.last.call(null,selected_sessions);
var map__26683__$1 = (((((!((map__26683 == null))))?(((((map__26683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26683):map__26683);
var session = map__26683__$1;
var reps_min = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var total_sets = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var rest_time = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Intensidade: ",pr4.prototipo.reps__GT_intensity_text.call(null,reps_min,reps_max)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Repeti\u00E7\u00F5es: ",pr4.prototipo.reps__GT_reps_zone.call(null,reps_min,reps_max)," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143)], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855)], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min - (1))], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min + (1))], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(30),new cljs.core.Keyword(null,"value","value",305978217),reps_min,new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"label","label",1718410804),"1RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(8),new cljs.core.Keyword(null,"label","label",1718410804),"8RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(15),new cljs.core.Keyword(null,"label","label",1718410804),"15RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(20),new cljs.core.Keyword(null,"label","label",1718410804),"20RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(25),new cljs.core.Keyword(null,"label","label",1718410804),"25RM"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (p1__26676_SHARP_,p2__26675_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),p2__26675_SHARP_], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"S\u00E9ries: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(99),new cljs.core.Keyword(null,"value","value",305978217),total_sets,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (p1__26677_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),p1__26677_SHARP_.target.value], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Descanso por s\u00E9rie: ",pr4.util.seconds__GT_minute_text.call(null,rest_time)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time - (15))], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time + (15))], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),rest_time,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions){
return (function (p1__26679_SHARP_,p2__26678_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),p2__26678_SHARP_], null));
});})(map__26683,map__26683__$1,session,reps_min,reps_max,total_sets,rest_time,map__26681,map__26681__$1,selected_sessions))
,new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"label","label",1718410804),"0"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(60),new cljs.core.Keyword(null,"label","label",1718410804),"1:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(120),new cljs.core.Keyword(null,"label","label",1718410804),"2:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(180),new cljs.core.Keyword(null,"label","label",1718410804),"3:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(240),new cljs.core.Keyword(null,"label","label",1718410804),"4:00"], null)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(300),new cljs.core.Keyword(null,"step","step",1288888124),(15)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Volume total (Intens. x Rep. x S\u00E9ries): ",pr4.periodization.session__GT_total_volume.call(null,session)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Tempo estimado da sess\u00E3o: ",pr4.util.seconds__GT_minute_text.call(null,pr4.util.round_to_precision.call(null,pr4.periodization.session__GT_time_estimate.call(null,session),(300)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Rela\u00E7\u00E3o [Execu\u00E7\u00E3o Descanso]: ",["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * (pr4.periodization.execution_time.call(null,reps_max,total_sets) / pr4.periodization.session__GT_time_estimate.call(null,session))))),"% ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * (pr4.periodization.total_rest_time.call(null,total_sets,rest_time) / pr4.periodization.session__GT_time_estimate.call(null,session))))),"%]"].join('')], null)], null);
});
/**
 * Show last session, but edit all the selected range.
 */
pr4.prototipo.session_component = (function pr4$prototipo$session_component(p__26685){
var map__26686 = p__26685;
var map__26686__$1 = (((((!((map__26686 == null))))?(((((map__26686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26686):map__26686);
var selected_sessions = cljs.core.get.call(null,map__26686__$1,new cljs.core.Keyword(null,"selected-sessions","selected-sessions",-1967071592));
var map__26688 = cljs.core.last.call(null,selected_sessions);
var map__26688__$1 = (((((!((map__26688 == null))))?(((((map__26688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26688):map__26688);
var session = map__26688__$1;
var reps_min = cljs.core.get.call(null,map__26688__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__26688__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var total_sets = cljs.core.get.call(null,map__26688__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var rest_time = cljs.core.get.call(null,map__26688__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
var two_line_box = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexFlow","flexFlow",-537374551),"column",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"flexGrow","flexGrow",1882590718),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 0",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 4px 0 4px",new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862),"1px 3px 6px 2px #0000003b"], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","set-inten-boxes-display","pr4.app-state/set-inten-boxes-display",-2106184780)], null)))})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,two_line_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#b3e5e3"], null))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-sets-box-clicked","pr4.events/session-sets-box-clicked",-1377129740)], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),total_sets], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"S\u00E9ries"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,two_line_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ffe99c"], null))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-intensity-box-clicked","pr4.events/session-intensity-box-clicked",851837502)], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_min),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_max),"RM"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Intensidade"], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-intensity","div.adjust-intensity",-146565931),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "14vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-intensity-display","pr4.app-state/adjust-intensity-display",638208732)], null))), "grid": "2fr 1fr / 1fr 1fr 1fr", "marginTop": "2px"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 1 / 2 / 4", "placeSelf": "end center", "fontSize": "1.07em"})], null),"Intensidade ",pr4.prototipo.reps__GT_intensity_text.call(null,reps_min,reps_max)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min - (1))], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),pr4.prototipo.reps__GT_reps_zone.call(null,reps_min,reps_max)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min + (1))], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143)], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
,new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 1", "placeSelf": "center start"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855)], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
,new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 3", "placeSelf": "center end"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-sets","div.adjust-sets",-897093489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "14vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-sets-display","pr4.app-state/adjust-sets-display",-1034755893)], null))), "grid": "2fr 1fr / 1fr 1fr 1fr", "marginTop": "2px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 2", "placeSelf": "end center", "fontSize": "1.17em"})], null),"S\u00E9ries"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),(total_sets - (1))], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),total_sets], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),(total_sets + (1))], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-rest-time","div.adjust-rest-time",1455145760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "14vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-rest-time-display","pr4.app-state/adjust-rest-time-display",2009185317)], null))), "grid": "2fr 1fr / 1fr 1fr 1fr"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 1 / 2 / 4", "placeSelf": "end center", "fontSize": "1.17em"})], null),"Descanso entre s\u00E9ries"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time - (15))], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),pr4.util.seconds__GT_minute_text.call(null,rest_time)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time + (15))], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-buttons","div.adjust-buttons",-1478997565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#dedede", "height": "16vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-buttons-display","pr4.app-state/adjust-buttons-display",-1277840286)], null))), "justifyContent": "space-around", "alignItems": "center", "marginBottom": "2px"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#3bbcb7", "color": "white"}),new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-adjust-canceled","pr4.events/session-adjust-canceled",267115587)], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
], null),"Cancelar"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"width": "110px", "backgroundColor": "#3bbcb7", "color": "white"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-adjust-confirmed","pr4.events/session-adjust-confirmed",2106134146)], null));
});})(map__26688,map__26688__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26686,map__26686__$1,selected_sessions))
,new cljs.core.Keyword(null,"variant","variant",-424354234),"contained"], null),"Ok"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,two_line_box,new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),pr4.util.seconds__GT_minute_text.call(null,pr4.util.round_to_precision.call(null,pr4.periodization.session__GT_time_estimate.call(null,session),(300)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tempo estimado da sess\u00E3o"], null)], null)], null);
});
pr4.prototipo.micro_name = (function pr4$prototipo$micro_name(sessions_atoms,models){
var sessions = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__26692_SHARP_){
return cljs.core.select_keys.call(null,p1__26692_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892)], null));
}),sessions_atoms));
var or__4131__auto__ = models.call(null,sessions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Custom.";
}
});
pr4.prototipo.models_names = (function pr4$prototipo$models_names(models){
return cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,pr4.periodization.micros_models)));
});
pr4.prototipo.date_dd_mm = (function pr4$prototipo$date_dd_mm(date){
if(cljs.core.truth_(date)){
var dd = tick.alpha.api.day_of_month.call(null,date);
var MM = tick.alpha.api.int$.call(null,tick.alpha.api.month.call(null,date));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dd),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(MM)].join('');
} else {
return null;
}
});
pr4.prototipo.date_str = (function pr4$prototipo$date_str(date){
var dd = tick.alpha.api.day_of_month.call(null,date);
var MM = tick.alpha.api.int$.call(null,tick.alpha.api.month.call(null,date));
var yyyy = tick.alpha.api.int$.call(null,tick.alpha.api.year.call(null,date));
var day = tick.alpha.api.day_of_week.call(null,date);
var pt_week = cljs.core.PersistentArrayMap.createAsIfByAssoc([tick.alpha.api.MONDAY,"Segunda",tick.alpha.api.TUESDAY,"Ter\u00E7a",tick.alpha.api.WEDNESDAY,"Quarta",tick.alpha.api.THURSDAY,"Quinta",tick.alpha.api.FRIDAY,"Sexta",tick.alpha.api.SATURDAY,"S\u00E1bado",tick.alpha.api.SUNDAY,"Domingo"]);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dd),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(MM),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(yyyy)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.take.call(null,(3),pt_week.call(null,day)))),")"].join('');
});
pr4.prototipo.calendar_chart_options = ({"chartArea": ({"width": "100%"}), "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "100%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "maxValue": (35000), "viewWindowMode": "maximized"}),({"textPosition": "none", "viewWindowMode": "maximized"})]});
pr4.prototipo.calendar_chart_options2 = ({"title": "Volume por Sess\u00E3o", "chartArea": ({"width": "100%"}), "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "98%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "viewWindowMode": "maximized"}),({"textPosition": "none", "viewWindowMode": "maximized"})]});
pr4.prototipo.week_vol_options = ({"title": "Volume Semanal", "chartArea": ({"width": "100%"}), "legend": ({"position": "none"}), "bar": ({"groupWidth": "90%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "viewWindowMode": "maximized", "minValue": (20000)}),({"textPosition": "none", "viewWindowMode": "maximized"})]});
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.chart_zoom !== 'undefined')){
} else {
pr4.prototipo.chart_zoom = reagent.core.atom.call(null,(30));
}
pr4.prototipo.calendar_chart_data = (function pr4$prototipo$calendar_chart_data(calendar,sessions){
var session_idx__GT_volume = (function (session_idx){
if(cljs.core.truth_(session_idx)){
return cljs.core.apply.call(null,pr4.periodization.session_volume,(function (p1__26698_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26698_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26698_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
}).call(null,(function (p1__26697_SHARP_){
return cljs.core.nth.call(null,sessions,p1__26697_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null));
}).call(null,session_idx)));
} else {
return null;
}
});
var zoom_in = cljs.core.deref.call(null,pr4.prototipo.chart_zoom);
var all_days_without_week_vol = cljs.core.map_indexed.call(null,((function (session_idx__GT_volume,zoom_in){
return (function (p1__26700_SHARP_,p2__26699_SHARP_){
return cljs.core.assoc.call(null,p2__26699_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__26700_SHARP_);
});})(session_idx__GT_volume,zoom_in))
,calendar);
var first_week = cljs.core.take_while.call(null,((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol){
return (function (p1__26701_SHARP_){
return cljs.core.not_EQ_.call(null,tick.alpha.api.day_of_week.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__26701_SHARP_)),tick.alpha.api.SUNDAY);
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol))
,all_days_without_week_vol);
var add_week_vol = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week){
return (function (week){
if((!(cljs.core.empty_QMARK_.call(null,week)))){
return cljs.core.assoc_in.call(null,cljs.core.vec.call(null,week),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,week) - (1)),new cljs.core.Keyword(null,"week-volume","week-volume",630206840)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,session_idx__GT_volume,cljs.core.map.call(null,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),week))));
} else {
return null;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week))
;
var all_days = (function (){var $ = all_days_without_week_vol;
var $__$1 = cljs.core.drop.call(null,cljs.core.count.call(null,first_week),$);
var $__$2 = cljs.core.partition_all.call(null,(7),$__$1);
var $__$3 = cljs.core.map.call(null,((function ($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol){
return (function (p1__26702_SHARP_){
if(cljs.core.not_EQ_.call(null,(7),cljs.core.count.call(null,p1__26702_SHARP_))){
return p1__26702_SHARP_;
} else {
return add_week_vol.call(null,p1__26702_SHARP_);
}
});})($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol))
,$__$2);
return cljs.core.flatten.call(null,cljs.core.cons.call(null,add_week_vol.call(null,first_week),$__$3));
})();
var shift = ((cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))) / (2)) - (cljs.core.count.call(null,all_days) / (2)));
var to_drop = ((cljs.core.count.call(null,all_days) - zoom_in) / (2));
var r = cljs.core.drop.call(null,(to_drop + shift),all_days);
var some_days = cljs.core.take.call(null,zoom_in,r);
var on_saturday = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days){
return (function (date,if_true,if_false){
if(cljs.core._EQ_.call(null,tick.alpha.api.day_of_week.call(null,date),tick.alpha.api.SATURDAY)){
return if_true;
} else {
return if_false;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days))
;
var row_fn = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday){
return (function (p__26703){
var map__26704 = p__26703;
var map__26704__$1 = (((((!((map__26704 == null))))?(((((map__26704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26704):map__26704);
var date = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01");
var session_idx = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168));
var absent_QMARK_ = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"absent?","absent?",1101710978));
var week_volume = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"week-volume","week-volume",630206840));
var idx = cljs.core.get.call(null,map__26704__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.truth_(absent_QMARK_)){
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"color: red",[pr4.prototipo.date_str.call(null,date),"\nSeu aluno faltou nesse dia"].join(''),"Falta",on_saturday.call(null,date,week_volume,(0)),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join(''),on_saturday.call(null,date,"Volume semanal",null)];
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((session_idx == null)));
if(and__4120__auto__){
return cljs.core.nth.call(null,sessions,session_idx,false);
} else {
return and__4120__auto__;
}
})())){
return [pr4.prototipo.date_dd_mm.call(null,date),session_idx__GT_volume.call(null,session_idx),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"#3bbcb7":"#b3e5e3")].join(''),[pr4.prototipo.date_str.call(null,date),"\nSess\u00E3o: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((session_idx + (1))),"\nVolume: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_idx__GT_volume.call(null,session_idx))].join(''),null,on_saturday.call(null,date,week_volume,(0)),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join(''),on_saturday.call(null,date,"Volume semanal",null)];
} else {
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"","","",on_saturday.call(null,date,week_volume,(0)),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join(''),on_saturday.call(null,date,"Volume semanal",null)];

}
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Data","Volume ou falta",({"role": "style"}),({"role": "tooltip"}),({"role": "annotation"}),"Volume semanal",({"role": "style"}),({"role": "annotation"})],cljs.core.map.call(null,row_fn,some_days)));
});
pr4.prototipo.calendar_chart_data2 = (function pr4$prototipo$calendar_chart_data2(calendar,sessions){
var session_idx__GT_volume = (function (session_idx){
if(cljs.core.truth_(session_idx)){
return cljs.core.apply.call(null,pr4.periodization.session_volume,(function (p1__26707_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26707_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26707_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
}).call(null,(function (p1__26706_SHARP_){
return cljs.core.nth.call(null,sessions,p1__26706_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null));
}).call(null,session_idx)));
} else {
return null;
}
});
var zoom_in = (21);
var all_days = cljs.core.map_indexed.call(null,((function (session_idx__GT_volume,zoom_in){
return (function (p1__26709_SHARP_,p2__26708_SHARP_){
return cljs.core.assoc.call(null,p2__26708_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__26709_SHARP_);
});})(session_idx__GT_volume,zoom_in))
,calendar);
var shift = ((cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))) / (2)) - (cljs.core.count.call(null,all_days) / (2)));
var to_drop = ((cljs.core.count.call(null,all_days) - zoom_in) / (2));
var r = cljs.core.drop.call(null,(to_drop + shift),all_days);
var some_days = cljs.core.take.call(null,zoom_in,r);
var row_fn = ((function (session_idx__GT_volume,zoom_in,all_days,shift,to_drop,r,some_days){
return (function (p__26710){
var map__26711 = p__26710;
var map__26711__$1 = (((((!((map__26711 == null))))?(((((map__26711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26711):map__26711);
var date = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01");
var session_idx = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168));
var absent_QMARK_ = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"absent?","absent?",1101710978));
var idx = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.truth_(absent_QMARK_)){
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"color: red",[pr4.prototipo.date_str.call(null,date),"\nSeu aluno faltou nesse dia"].join(''),"Falta"];
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((session_idx == null)));
if(and__4120__auto__){
return cljs.core.nth.call(null,sessions,session_idx,false);
} else {
return and__4120__auto__;
}
})())){
return [pr4.prototipo.date_dd_mm.call(null,date),session_idx__GT_volume.call(null,session_idx),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"#3bbcb7":"#b3e5e3")].join(''),[pr4.prototipo.date_str.call(null,date),"\nSess\u00E3o: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((session_idx + (1))),"\nVolume: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_idx__GT_volume.call(null,session_idx))].join(''),null];
} else {
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"","",""];

}
}
});})(session_idx__GT_volume,zoom_in,all_days,shift,to_drop,r,some_days))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Data","Volume ou falta",({"role": "style"}),({"role": "tooltip"}),({"role": "annotation"})],cljs.core.map.call(null,row_fn,some_days)));
});
pr4.prototipo.week_vol_chart_data = (function pr4$prototipo$week_vol_chart_data(calendar,sessions){
var session_idx__GT_volume = (function (session_idx){
if(cljs.core.truth_(session_idx)){
return cljs.core.apply.call(null,pr4.periodization.session_volume,(function (p1__26714_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26714_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26714_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
}).call(null,(function (p1__26713_SHARP_){
return cljs.core.nth.call(null,sessions,p1__26713_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null));
}).call(null,session_idx)));
} else {
return null;
}
});
var zoom_in = (21);
var all_days_without_week_vol = cljs.core.map_indexed.call(null,((function (session_idx__GT_volume,zoom_in){
return (function (p1__26716_SHARP_,p2__26715_SHARP_){
return cljs.core.assoc.call(null,p2__26715_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__26716_SHARP_);
});})(session_idx__GT_volume,zoom_in))
,calendar);
var first_week = cljs.core.take_while.call(null,((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol){
return (function (p1__26717_SHARP_){
return cljs.core.not_EQ_.call(null,tick.alpha.api.day_of_week.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__26717_SHARP_)),tick.alpha.api.SUNDAY);
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol))
,all_days_without_week_vol);
var add_week_vol = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week){
return (function (week){
if((!(cljs.core.empty_QMARK_.call(null,week)))){
return cljs.core.assoc_in.call(null,cljs.core.vec.call(null,week),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,week) - (1)),new cljs.core.Keyword(null,"week-volume","week-volume",630206840)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,session_idx__GT_volume,cljs.core.map.call(null,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),week))));
} else {
return null;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week))
;
var all_days = (function (){var $ = all_days_without_week_vol;
var $__$1 = cljs.core.drop.call(null,cljs.core.count.call(null,first_week),$);
var $__$2 = cljs.core.partition_all.call(null,(7),$__$1);
var $__$3 = cljs.core.map.call(null,((function ($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol){
return (function (p1__26718_SHARP_){
if(cljs.core.not_EQ_.call(null,(7),cljs.core.count.call(null,p1__26718_SHARP_))){
return p1__26718_SHARP_;
} else {
return add_week_vol.call(null,p1__26718_SHARP_);
}
});})($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol))
,$__$2);
return cljs.core.flatten.call(null,cljs.core.cons.call(null,add_week_vol.call(null,first_week),$__$3));
})();
var shift = ((cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))) / (2)) - (cljs.core.count.call(null,all_days) / (2)));
var to_drop = ((cljs.core.count.call(null,all_days) - zoom_in) / (2));
var r = cljs.core.drop.call(null,(to_drop + shift),all_days);
var some_days = cljs.core.take.call(null,zoom_in,r);
var on_saturday = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days){
return (function (date,if_true,if_false){
if(cljs.core._EQ_.call(null,tick.alpha.api.day_of_week.call(null,date),tick.alpha.api.SATURDAY)){
return if_true;
} else {
return if_false;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days))
;
var row_fn = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday){
return (function (p__26719){
var map__26720 = p__26719;
var map__26720__$1 = (((((!((map__26720 == null))))?(((((map__26720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26720):map__26720);
var date = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01");
var session_idx = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168));
var absent_QMARK_ = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"absent?","absent?",1101710978));
var week_volume = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"week-volume","week-volume",630206840));
var idx = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return [(function (){var G__26722 = date;
switch (G__26722) {
case "2019-05-25":
return "Sem 5";

break;
case "2019-06-01":
return "Sem 6";

break;
case "2019-06-08":
return "Sem 7";

break;
default:
return pr4.prototipo.date_dd_mm.call(null,date);

}
})(),week_volume,["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join('')];
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Data","Volume semanal",({"role": "style"})],cljs.core.map.call(null,row_fn,cljs.core.filter.call(null,new cljs.core.Keyword(null,"week-volume","week-volume",630206840),some_days))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Por-que-periodizar?","Por-que-periodizar?",-358171707)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Por-que-periodizar?",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26730 = (function (meta26731){
this.meta26731 = meta26731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26732,meta26731__$1){
var self__ = this;
var _26732__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26730(meta26731__$1));
});

pr4.prototipo.t_pr4$prototipo26730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26732){
var self__ = this;
var _26732__$1 = this;
return self__.meta26731;
});

pr4.prototipo.t_pr4$prototipo26730.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26730.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26733 = cljs.core.deref.call(null,devcard_data);
var map__26733__$1 = (((((!((map__26733 == null))))?(((((map__26733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26733):map__26733);
var hidden_QMARK_ = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26733,map__26733__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26733,map__26733__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "padding": "20px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "margin": "20px 0 10px 0"})], null),"Por que periodizar?"], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),(function (){var p_style = ({"textIndent": "30px"});
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A periodiza\u00E7\u00E3o surge como uma forma de facilitar e tornar mais eficaz a organiza\u00E7\u00E3o de um programa de treinamento, adequando cada fase e suas vari\u00E1veis, para alcan\u00E7ar os objetivos do indiv\u00EDduo, seja ele um atleta ou n\u00E3o. Esse sistema se ajusta \u00E0 necessidade do treinamento e de suas vari\u00E1veis, potencializando o resultado. Por conseguinte, melhores resultados s\u00E3o obtidos devido \u00E0 organiza\u00E7\u00E3o da variedade de m\u00E9todos existentes, pela implementa\u00E7\u00E3o estrat\u00E9gica das fases e das cargas espec\u00EDficas, causando altern\u00E2ncia nos est\u00EDmulos. Um exemplo pr\u00E1tico \u00E9 a estabiliza\u00E7\u00E3o dos processos hipertr\u00F3ficos observados ap\u00F3s quatro a cinco meses de treinamento quando s\u00E3o utilizadas cargas fixas, tr\u00EAs s\u00E9ries de 10 repeti\u00E7\u00F5es m\u00E1ximas (RM) durante todo o per\u00EDodo. Na periodiza\u00E7\u00E3o, o aluno iniciante de academia pode ser submetido a uma carga de hipertrofia por quatro semanas, 3 s\u00E9ries de 12-14RM, seguido de mais quatro semanas com outra carga de hipertrofia em outra intensidade, por exemplo, 3 s\u00E9ries de 8-10RM. Em suma, o praticante treinar\u00E1 para atingir seus objetivos, por\u00E9m com cargas variadas durante o seu ciclo semestral ou anual, sem esquecer que os ciclos (tempo em que a carga ser\u00E1 realizada) devem ser respeitados. Enfim, periodizar n\u00E3o se trata apenas de modificar as vari\u00E1veis do treinamento de maneira aleat\u00F3ria, mas sim de respeitar as modifica\u00E7\u00F5es de acordo com os ciclos programados."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Vale ressaltar que a periodiza\u00E7\u00E3o n\u00E3o \u00E9 um conceito r\u00EDgido, podendo ser aplicado \u00E0s mais variadas popula\u00E7\u00F5es, como atletas de diversas modalidades, indiv\u00EDduos ativos e/ou sedent\u00E1rios, desde que sejam considerados os diferentes compromissos pessoais e profissionais. No caso dos praticantes de treinamento de for\u00E7a em academias e alunos de treinamento personalizado, os objetivos podem ser: ganhos de aptid\u00E3o f\u00EDsica voltada \u00E0 sa\u00FAde, emagrecimento, aumento de for\u00E7a, resist\u00EAncia, flexibilidade, aumento da massa magra, entre outros."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Na compara\u00E7\u00E3o entre programas periodizados e n\u00E3o periodizados, foi demonstrada a superioridade do treinamento periodizado no aumento de for\u00E7a muscular. De fato, estudos que compararam treinamentos de for\u00E7a periodizados com n\u00E3o periodizados evidenciaram que a periodiza\u00E7\u00E3o foi mais eficiente em promover altera\u00E7\u00F5es positivas nos componentes da composi\u00E7\u00E3o corporal e da for\u00E7a m\u00E1xima. Programas n\u00E3o periodizados com cargas fixas tamb\u00E9m promovem altera\u00E7\u00F5es positivas na composi\u00E7\u00E3o corporal e na for\u00E7a, por\u00E9m, por per\u00EDodos limitados, at\u00E9 quatro a cinco meses. Desse modo, periodizar auxilia no processo de melhora das capacidades funcionais por per\u00EDodos superiores a seis meses."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Os programas de treinamento de for\u00E7a periodizados com varia\u00E7\u00E3o da intensidade e per\u00EDodos ativos de descanso podem atenuar a estabiliza\u00E7\u00E3o dos resultados no desempenho, diminuindo a probabilidade de sobretreinamento e proporcionando maiores aumentos na for\u00E7a e na pot\u00EAncia."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Os objetivos da periodiza\u00E7\u00E3o incluem maximizar o princ\u00EDpio da sobrecarga e garantir uma melhor rela\u00E7\u00E3o entre estresse e recupera\u00E7\u00E3o (heterocronismo). O princ\u00EDpio da sobrecarga pode ser descrito pelo processo de aplica\u00E7\u00E3o de cargas \u00E0s quais o sistema neuromuscular n\u00E3o est\u00E1 adaptado. Quando maiores demandas s\u00E3o impostas ao sistema neuromuscular, ocorrem adapta\u00E7\u00F5es que resultam em n\u00EDveis aumentados de for\u00E7a. As vari\u00E1veis do treinamento que podem ser articuladas para aperfei\u00E7oar o programa s\u00E3o: n\u00FAmero de s\u00E9ries realizadas em cada exerc\u00EDcio, n\u00FAmero de repeti\u00E7\u00F5es por s\u00E9rie, exerc\u00EDcios realizados, n\u00FAmero de exerc\u00EDcios realizados a cada sess\u00E3o, per\u00EDodos de descanso entre as s\u00E9ries e exerc\u00EDcios, carga utilizada a cada s\u00E9rie, tipo e velocidade da a\u00E7\u00E3o muscular utilizada (conc\u00EAntrica, exc\u00EAntrica, isom\u00E9trica), n\u00FAmero de sess\u00F5es de treinamento realizadas por dia e por semana. Conforme comentado anteriormente, o treinamento de for\u00E7a em academias tamb\u00E9m requer a organiza\u00E7\u00E3o em ciclos, nos quais as suas vari\u00E1veis s\u00E3o sistematizadas."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://books.google.com.br/books?id=r2aJDAAAQBAJ"], null),"Prestes, Jonato, et al. \"Prescri\u00E7\u00E3o e periodiza\u00E7\u00E3o do treinamento de for\u00E7a em academias.\" (2010)."], null)], null)], null);
})()], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26731","meta26731",-814141678,null)], null);
});

pr4.prototipo.t_pr4$prototipo26730.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26730.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26730";

pr4.prototipo.t_pr4$prototipo26730.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26730");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26730.
 */
pr4.prototipo.__GT_t_pr4$prototipo26730 = (function pr4$prototipo$__GT_t_pr4$prototipo26730(meta26731){
return (new pr4.prototipo.t_pr4$prototipo26730(meta26731));
});

}

return (new pr4.prototipo.t_pr4$prototipo26730(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"external-storage","external-storage",861359306)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"external-storage",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26735 = (function (meta26736){
this.meta26736 = meta26736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26737,meta26736__$1){
var self__ = this;
var _26737__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26735(meta26736__$1));
});

pr4.prototipo.t_pr4$prototipo26735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26737){
var self__ = this;
var _26737__$1 = this;
return self__.meta26736;
});

pr4.prototipo.t_pr4$prototipo26735.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26735.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.external_storage.firebase_el], null));
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26736","meta26736",2096001804,null)], null);
});

pr4.prototipo.t_pr4$prototipo26735.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26735.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26735";

pr4.prototipo.t_pr4$prototipo26735.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26735");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26735.
 */
pr4.prototipo.__GT_t_pr4$prototipo26735 = (function pr4$prototipo$__GT_t_pr4$prototipo26735(meta26736){
return (new pr4.prototipo.t_pr4$prototipo26735(meta26736));
});

}

return (new pr4.prototipo.t_pr4$prototipo26735(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pr4.prototipo.replace_logo = (function pr4$prototipo$replace_logo(event){
var periodiza_logo = document.createElement("img");
var breadcrumb = document.getElementsByClassName("com-rigsomelight-devcards_set-current-path").item((0));
var cljs_logo = document.getElementsByClassName("cljs-logo").item((0));
if(cljs.core.truth_(cljs_logo)){
periodiza_logo.src = "images/manifest/icon-48x48.png";

cljs_logo.parentNode.style = "display: flex; width: 100%; justify-content: flex-end; margin-top: -16px";

cljs_logo.parentNode.parentNode.style = "display: flex;";

breadcrumb.innerHTML = "Periodiza";

return cljs_logo.parentNode.replaceChild(periodiza_logo,cljs_logo);
} else {
return null;
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"replace-logo","replace-logo",779151097)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"replace-logo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26738 = (function (meta26739){
this.meta26739 = meta26739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26740,meta26739__$1){
var self__ = this;
var _26740__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26738(meta26739__$1));
});

pr4.prototipo.t_pr4$prototipo26738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26740){
var self__ = this;
var _26740__$1 = this;
return self__.meta26739;
});

pr4.prototipo.t_pr4$prototipo26738.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26738.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"",new cljs.core.Keyword(null,"onError","onError",1669791984),pr4.prototipo.replace_logo], null)], null));
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26739","meta26739",-126093836,null)], null);
});

pr4.prototipo.t_pr4$prototipo26738.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26738.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26738";

pr4.prototipo.t_pr4$prototipo26738.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26738");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26738.
 */
pr4.prototipo.__GT_t_pr4$prototipo26738 = (function pr4$prototipo$__GT_t_pr4$prototipo26738(meta26739){
return (new pr4.prototipo.t_pr4$prototipo26738(meta26739));
});

}

return (new pr4.prototipo.t_pr4$prototipo26738(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Pot\u00EAncia","null","Hipertrofia","null","Resist\u00EAncia","null","For\u00E7a","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Pot\u00EAncia","null","Hipertrofia","null","Resist\u00EAncia","null","For\u00E7a","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Pot\u00EAncia",null,"Hipertrofia",null,"Resist\u00EAncia",null,"For\u00E7a",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Avan\u00E7ado","null","Iniciante","null","Intermedi\u00E1rio","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Avan\u00E7ado","null","Iniciante","null","Intermedi\u00E1rio","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Avan\u00E7ado",null,"Iniciante",null,"Intermedi\u00E1rio",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Sexta","null","S\u00E1bado","null","Ter\u00E7a","null","Quinta","null","Segunda","null","Domingo","null","Quarta","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Sexta","null","S\u00E1bado","null","Ter\u00E7a","null","Quinta","null","Segunda","null","Domingo","null","Quarta","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Sexta",null,"S\u00E1bado",null,"Ter\u00E7a",null,"Quinta",null,"Segunda",null,"Domingo",null,"Quarta",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01",null,"2019-07-01",null,"2018-09-01",null,"2019-06-01",null,"2018-12-01",null,"2019-01-01",null,"2019-05-01",null,"2018-10-01",null,"2018-08-01",null,"2019-02-01",null,"2019-03-01",null,"2019-04-01",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01",null,"2020-07-01",null,"2019-12-01",null,"2020-05-01",null,"2020-06-01",null,"2020-02-01",null,"2019-09-01",null,"2020-04-01",null,"2019-08-01",null,"2019-10-01",null,"2020-08-01",null,"2020-01-01",null,"2019-11-01",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(-300),"null",(-900),"null",(300),"null",(600),"null",(-600),"null",(900),"null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(-300),"null",(-900),"null",(300),"null",(600),"null",(-600),"null",(900),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(-300),null,(-900),null,(300),null,(600),null,(-600),null,(900),null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","dispatch-an-event-args","pr4.prototipo/dispatch-an-event-args",-1254082902),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"redef-goal","redef-goal",1886246024),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),new cljs.core.Keyword(null,"redef-level","redef-level",1605415716),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),new cljs.core.Keyword(null,"redef-wk-days","redef-wk-days",-18650998),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),new cljs.core.Keyword(null,"redef-end","redef-end",-1799400107),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),new cljs.core.Keyword(null,"redef-start","redef-start",1020904956),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),new cljs.core.Keyword(null,"redef-time","redef-time",303417329),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redef-goal","redef-goal",1886246024),new cljs.core.Keyword(null,"redef-level","redef-level",1605415716),new cljs.core.Keyword(null,"redef-wk-days","redef-wk-days",-18650998),new cljs.core.Keyword(null,"redef-end","redef-end",-1799400107),new cljs.core.Keyword(null,"redef-start","redef-start",1020904956),new cljs.core.Keyword(null,"redef-time","redef-time",303417329)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573)], null),null));

//# sourceMappingURL=prototipo.js.map
