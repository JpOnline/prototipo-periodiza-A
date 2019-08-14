// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.periodization');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27510#","p1__27510#",-907918933,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),new cljs.core.Symbol(null,"p1__27510#","p1__27510#",-907918933,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27511#","p1__27511#",1936932235,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"p1__27511#","p1__27511#",1936932235,null),(30)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(0))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(30)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,(function (p1__27510_SHARP_){
return (p1__27510_SHARP_ > (0));
}),(function (p1__27511_SHARP_){
return (p1__27511_SHARP_ <= (30));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.periodization","percentage","pr4.periodization/percentage",68703205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27512#","p1__27512#",-1624734031,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),new cljs.core.Symbol(null,"p1__27512#","p1__27512#",-1624734031,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27513#","p1__27513#",1646831683,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"p1__27513#","p1__27513#",1646831683,null),(100)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(0))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(100)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__27512_SHARP_){
return (p1__27512_SHARP_ >= (0));
}),(function (p1__27513_SHARP_){
return (p1__27513_SHARP_ <= (100));
})], null),null));
pr4.periodization.pre_validation = (function pr4$periodization$pre_validation(spec,input,message){

var or__4131__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,spec,input);
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,message,cljs.spec.alpha.explain_data.call(null,spec,input));
}
});
/**
 * Returns the percentage of 1RM associated with the number of repetitions
 *   accomplished.
 */
pr4.periodization.reps_to_intensity = (function pr4$periodization$reps_to_intensity(max_reps){
if(pr4.periodization.pre_validation.call(null,new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515),max_reps,"Repeti\u00E7\u00F5es deve ser entre 1 e 30.")){
} else {
throw (new Error("Assert failed: (pre-validation :pr4.periodization/between-1-and-30 max-reps \"Repeti\u00E7\u00F5es deve ser entre 1 e 30.\")"));
}

var _PERCENT_ = (function (){var intensity_list = new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(95),(93),(90),(87),(85),(83),(80),(77),(75),(70),67.5,(67),(66),(65),63.3,61.7,(60),58.3,56.7,(55),53.3,51.7,(50),48.3,46.7,(45),43.3,41.7,(40)], null);
return cljs.core.nth.call(null,intensity_list,max_reps);
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("pr4.periodization","percentage","pr4.periodization/percentage",68703205),_PERCENT_)){
} else {
throw (new Error("Assert failed: (spec/valid? :pr4.periodization/percentage %)"));
}

return _PERCENT_;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("pr4.periodization","reps-to-intensity","pr4.periodization/reps-to-intensity",874244215,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"max-reps","max-reps",1630745044),new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"max-reps","max-reps",1630745044),new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-reps","max-reps",1630745044)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"max-reps","max-reps",1630745044),new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,null,null));
pr4.periodization.get_1rm = (function pr4$periodization$get_1rm(reps,weight){

return (((100) * weight) / pr4.periodization.reps_to_intensity.call(null,reps));
});
pr4.periodization.session_volume = (function pr4$periodization$session_volume(reps,sets){
return ((pr4.periodization.reps_to_intensity.call(null,reps) * reps) * sets);
});
/**
 * Uses repetitions of an exercise, calculating the intensity of this
 *   reps in % of RM (max repetition) and sets to output the range of
 *   total volume in % of 1 RM.
 */
pr4.periodization.session__GT_total_volume = (function pr4$periodization$session__GT_total_volume(p__27514){
var map__27515 = p__27514;
var map__27515__$1 = (((((!((map__27515 == null))))?(((((map__27515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27515):map__27515);
var reps_min = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var total_sets = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var vol_min = Math.round(pr4.periodization.session_volume.call(null,reps_min,total_sets));
var vol_max = Math.round(pr4.periodization.session_volume.call(null,reps_max,total_sets));
if(cljs.core._EQ_.call(null,reps_min,reps_max)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(vol_min),"%"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(vol_min),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vol_max),"%"].join('');
}
});
/**
 * Receives a session with reps, sets and rest.
 *   Suppose each repetition takes 3 seconds
 *   Returns a the execution time estimation in seconds
 */
pr4.periodization.execution_time = (function pr4$periodization$execution_time(reps,sets){
return ((reps * (3)) * sets);
});
pr4.periodization.total_rest_time = (function pr4$periodization$total_rest_time(sets,rest_per_set){
return (rest_per_set * (sets - (1)));
});
/**
 * Receives a session with a: range of reps, sets and rest-time.
 *   Returns a text representing the time estimation of the session in
 *   the format mm:ss
 */
pr4.periodization.session__GT_time_estimate = (function pr4$periodization$session__GT_time_estimate(p__27517){
var map__27518 = p__27517;
var map__27518__$1 = (((((!((map__27518 == null))))?(((((map__27518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27518):map__27518);
var reps_min = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var rest_time = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
var total_sets = cljs.core.get.call(null,map__27518__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
return (pr4.periodization.execution_time.call(null,reps_max,total_sets) + pr4.periodization.total_rest_time.call(null,total_sets,rest_time));
});
pr4.periodization.micros_models = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(1),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(3),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(18)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(1),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(3),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(18)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(1),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(3),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(18)], null)], null),"Ordin\u00E1rio",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(11),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(14),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(9),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(11),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null)], null),"Incorpora\u00E7\u00E3o",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null)], null),"Ordin\u00E1rio",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null)], null),"Choque 1",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null)], null),"Choque 2",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null)], null),"Recupera\u00E7\u00E3o"]);

//# sourceMappingURL=periodization.js.map
