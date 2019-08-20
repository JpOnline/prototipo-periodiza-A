// Compiled by ClojureScript 1.10.520 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20599_20603 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20600_20604 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20601_20605 = true;
var _STAR_print_fn_STAR__temp_val__20602_20606 = ((function (_STAR_print_newline_STAR__orig_val__20599_20603,_STAR_print_fn_STAR__orig_val__20600_20604,_STAR_print_newline_STAR__temp_val__20601_20605,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__20599_20603,_STAR_print_fn_STAR__orig_val__20600_20604,_STAR_print_newline_STAR__temp_val__20601_20605,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20601_20605;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20602_20606;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20600_20604;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20599_20603;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
}catch (e20597){if((e20597 instanceof Error)){
var e1 = e20597;
try{return obj.toString();
}catch (e20598){if((e20598 instanceof Error)){
var e2 = e20598;
return "<<Un-printable Type>>";
} else {
throw e20598;

}
}} else {
throw e20597;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__20607 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__20608 = cljs.pprint.code_dispatch;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__20608;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__20607;
}});
