// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__14199 = b.append("0");
b = G__14199;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_.call(null,num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_.call(null,year,(4))) && (((cljs.reader.indivisible_QMARK_.call(null,year,(100))) || (cljs.reader.divisible_QMARK_.call(null,year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__14200 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__14200,(0),null);
var years = cljs.core.nth.call(null,vec__14200,(1),null);
var months = cljs.core.nth.call(null,vec__14200,(2),null);
var days = cljs.core.nth.call(null,vec__14200,(3),null);
var hours = cljs.core.nth.call(null,vec__14200,(4),null);
var minutes = cljs.core.nth.call(null,vec__14200,(5),null);
var seconds = cljs.core.nth.call(null,vec__14200,(6),null);
var fraction = cljs.core.nth.call(null,vec__14200,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__14200,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__14200,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__14200,(10),null);
var v = vec__14200;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5733__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__14203 = temp__5733__auto__;
var years = cljs.core.nth.call(null,vec__14203,(0),null);
var months = cljs.core.nth.call(null,vec__14203,(1),null);
var days = cljs.core.nth.call(null,vec__14203,(2),null);
var hours = cljs.core.nth.call(null,vec__14203,(3),null);
var minutes = cljs.core.nth.call(null,vec__14203,(4),null);
var seconds = cljs.core.nth.call(null,vec__14203,(5),null);
var ms = cljs.core.nth.call(null,vec__14203,(6),null);
var offset = cljs.core.nth.call(null,vec__14203,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__14206_14228 = cljs.core.seq.call(null,form);
var chunk__14207_14229 = null;
var count__14208_14230 = (0);
var i__14209_14231 = (0);
while(true){
if((i__14209_14231 < count__14208_14230)){
var x_14232 = cljs.core._nth.call(null,chunk__14207_14229,i__14209_14231);
arr.push(x_14232);


var G__14233 = seq__14206_14228;
var G__14234 = chunk__14207_14229;
var G__14235 = count__14208_14230;
var G__14236 = (i__14209_14231 + (1));
seq__14206_14228 = G__14233;
chunk__14207_14229 = G__14234;
count__14208_14230 = G__14235;
i__14209_14231 = G__14236;
continue;
} else {
var temp__5735__auto___14237 = cljs.core.seq.call(null,seq__14206_14228);
if(temp__5735__auto___14237){
var seq__14206_14238__$1 = temp__5735__auto___14237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14206_14238__$1)){
var c__4550__auto___14239 = cljs.core.chunk_first.call(null,seq__14206_14238__$1);
var G__14240 = cljs.core.chunk_rest.call(null,seq__14206_14238__$1);
var G__14241 = c__4550__auto___14239;
var G__14242 = cljs.core.count.call(null,c__4550__auto___14239);
var G__14243 = (0);
seq__14206_14228 = G__14240;
chunk__14207_14229 = G__14241;
count__14208_14230 = G__14242;
i__14209_14231 = G__14243;
continue;
} else {
var x_14244 = cljs.core.first.call(null,seq__14206_14238__$1);
arr.push(x_14244);


var G__14245 = cljs.core.next.call(null,seq__14206_14238__$1);
var G__14246 = null;
var G__14247 = (0);
var G__14248 = (0);
seq__14206_14228 = G__14245;
chunk__14207_14229 = G__14246;
count__14208_14230 = G__14247;
i__14209_14231 = G__14248;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = ({});
var seq__14212_14249 = cljs.core.seq.call(null,form);
var chunk__14213_14250 = null;
var count__14214_14251 = (0);
var i__14215_14252 = (0);
while(true){
if((i__14215_14252 < count__14214_14251)){
var vec__14222_14253 = cljs.core._nth.call(null,chunk__14213_14250,i__14215_14252);
var k_14254 = cljs.core.nth.call(null,vec__14222_14253,(0),null);
var v_14255 = cljs.core.nth.call(null,vec__14222_14253,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_14254),v_14255);


var G__14256 = seq__14212_14249;
var G__14257 = chunk__14213_14250;
var G__14258 = count__14214_14251;
var G__14259 = (i__14215_14252 + (1));
seq__14212_14249 = G__14256;
chunk__14213_14250 = G__14257;
count__14214_14251 = G__14258;
i__14215_14252 = G__14259;
continue;
} else {
var temp__5735__auto___14260 = cljs.core.seq.call(null,seq__14212_14249);
if(temp__5735__auto___14260){
var seq__14212_14261__$1 = temp__5735__auto___14260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14212_14261__$1)){
var c__4550__auto___14262 = cljs.core.chunk_first.call(null,seq__14212_14261__$1);
var G__14263 = cljs.core.chunk_rest.call(null,seq__14212_14261__$1);
var G__14264 = c__4550__auto___14262;
var G__14265 = cljs.core.count.call(null,c__4550__auto___14262);
var G__14266 = (0);
seq__14212_14249 = G__14263;
chunk__14213_14250 = G__14264;
count__14214_14251 = G__14265;
i__14215_14252 = G__14266;
continue;
} else {
var vec__14225_14267 = cljs.core.first.call(null,seq__14212_14261__$1);
var k_14268 = cljs.core.nth.call(null,vec__14225_14267,(0),null);
var v_14269 = cljs.core.nth.call(null,vec__14225_14267,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_14268),v_14269);


var G__14270 = cljs.core.next.call(null,seq__14212_14261__$1);
var G__14271 = null;
var G__14272 = (0);
var G__14273 = (0);
seq__14212_14249 = G__14270;
chunk__14213_14250 = G__14271;
count__14214_14251 = G__14272;
i__14215_14252 = G__14273;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("time","instant","time/instant",-2013236992,null),new cljs.core.Symbol("time","duration","time/duration",-1273941668,null),new cljs.core.Symbol("time","offset-date-time","time/offset-date-time",-1254592482,null),new cljs.core.Symbol("time","day-of-week","time/day-of-week",-1018890461,null),new cljs.core.Symbol("time","time","time/time",-1246984162,null),new cljs.core.Symbol("time","year-month","time/year-month",-1840595535,null),new cljs.core.Symbol("time","offset-time","time/offset-time",-1026521346,null),new cljs.core.Symbol("time","period","time/period",1291634901,null),new cljs.core.Symbol("time","zoned-date-time","time/zoned-date-time",-2125640645,null),new cljs.core.Symbol("time","month","time/month",-324062169,null),new cljs.core.Symbol("time","date","time/date",179823674,null),new cljs.core.Symbol("time","year","time/year",1979222727,null),new cljs.core.Symbol("time","date-time","time/date-time",1814680468,null),new cljs.core.Symbol("time","zone","time/zone",-580695523,null)],[(function (x__14185__auto__){
return time_literals.data_readers.instant(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.duration(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.offset_date_time(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.day_of_week(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.time(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.year_month(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.offset_time(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.period(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.zoned_date_time(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.month(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.date(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.year(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.date_time(x__14185__auto__);
}),(function (x__14185__auto__){
return time_literals.data_readers.zone(x__14185__auto__);
})])));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__14275 = arguments.length;
switch (G__14275) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__14276,reader){
var map__14277 = p__14276;
var map__14277__$1 = (((((!((map__14277 == null))))?(((((map__14277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14277):map__14277);
var opts = map__14277__$1;
var eof = cljs.core.get.call(null,map__14277__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__14277,map__14277__$1,opts,eof){
return (function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
});})(map__14277,map__14277__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__14281 = arguments.length;
switch (G__14281) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
