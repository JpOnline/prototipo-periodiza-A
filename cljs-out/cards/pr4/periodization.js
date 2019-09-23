// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.periodization');
goog.require('cljs.core');
goog.require('pr4.util');
goog.require('cljs.spec.gen.alpha');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.periodization","between-1-and-30","pr4.periodization/between-1-and-30",-437219515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14769#","p1__14769#",-633744758,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),new cljs.core.Symbol(null,"p1__14769#","p1__14769#",-633744758,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14770#","p1__14770#",25915547,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"p1__14770#","p1__14770#",25915547,null),(30)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(0))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(30)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,(function (p1__14769_SHARP_){
return (p1__14769_SHARP_ > (0));
}),(function (p1__14770_SHARP_){
return (p1__14770_SHARP_ <= (30));
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.periodization","percentage","pr4.periodization/percentage",68703205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14771#","p1__14771#",496539836,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),new cljs.core.Symbol(null,"p1__14771#","p1__14771#",496539836,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14772#","p1__14772#",-555716814,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"p1__14772#","p1__14772#",-555716814,null),(100)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(0))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),new cljs.core.Symbol(null,"%","%",-950237169,null),(100)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__14771_SHARP_){
return (p1__14771_SHARP_ >= (0));
}),(function (p1__14772_SHARP_){
return (p1__14772_SHARP_ <= (100));
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
pr4.periodization.session__GT_total_volume = (function pr4$periodization$session__GT_total_volume(p__14773){
var map__14774 = p__14773;
var map__14774__$1 = (((((!((map__14774 == null))))?(((((map__14774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14774):map__14774);
var reps_min = cljs.core.get.call(null,map__14774__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__14774__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var total_sets = cljs.core.get.call(null,map__14774__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
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
pr4.periodization.session__GT_time_estimate = (function pr4$periodization$session__GT_time_estimate(p__14776){
var map__14777 = p__14776;
var map__14777__$1 = (((((!((map__14777 == null))))?(((((map__14777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14777):map__14777);
var reps_min = cljs.core.get.call(null,map__14777__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__14777__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var rest_time = cljs.core.get.call(null,map__14777__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
var total_sets = cljs.core.get.call(null,map__14777__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
return (pr4.periodization.execution_time.call(null,reps_max,total_sets) + pr4.periodization.total_rest_time.call(null,total_sets,rest_time));
});
pr4.periodization.micros_models = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(1),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(3),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(18)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(1),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(3),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(18)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(1),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(3),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(18)], null)], null),"Ordin\u00E1rio",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(11),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(14),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(9),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(11),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null)], null),"Incorpora\u00E7\u00E3o",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(12),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null)], null),"Ordin\u00E1rio",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null)], null),"Choque 1",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(6),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(8),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(90)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(4),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(6),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(105)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(3),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(5),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(120)], null)], null),"Choque 2",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(8),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(10),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(75)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(13),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(10),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(12),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(60)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(14),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(15),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(45)], null)], null),"Recupera\u00E7\u00E3o"]);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("pr4.periodization","count-phases","pr4.periodization/count-phases",-844718864,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Keyword(null,"debugging?","debugging?",853084163),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [true,"null"], null), null)),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null)], null)], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Keyword(null,"ret","ret",-468222814)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null),(3)),true,new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null),cljs.core.list(new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)))))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Keyword(null,"debugging?","debugging?",853084163),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [true,"null"], null), null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),new cljs.core.Keyword(null,"debugging?","debugging?",853084163)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nat_int_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [true,null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [true,"null"], null), null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),new cljs.core.Keyword(null,"debugging?","debugging?",853084163),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [true,"null"], null), null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null)], null)], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Keyword(null,"ret","ret",-468222814)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null),(3)),true,new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null),cljs.core.list(new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null))))),(function (p__14779){
var map__14780 = p__14779;
var map__14780__$1 = (((((!((map__14780 == null))))?(((((map__14780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14780):map__14780);
var map__14781 = cljs.core.get.call(null,map__14780__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var map__14781__$1 = (((((!((map__14781 == null))))?(((((map__14781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14781):map__14781);
var micros_amount = cljs.core.get.call(null,map__14781__$1,new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673));
var ret = cljs.core.get.call(null,map__14780__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
if((micros_amount < (3))){
return true;
} else {
return cljs.core._EQ_.call(null,micros_amount,cljs.core.reduce.call(null,cljs.core._PLUS_,ret));

}
}),null,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null)], null)], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Keyword(null,"ret","ret",-468222814)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.list(new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null),(3)),true,new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"micros-amount","micros-amount",-28922146,null),cljs.core.list(new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null))))),null));
/**
 * Calculate size of the phases basic, specific and
 *   transition according to the number of microcycles.
 */
pr4.periodization.count_phases = (function pr4$periodization$count_phases(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14801 = arguments.length;
var i__4731__auto___14802 = (0);
while(true){
if((i__4731__auto___14802 < len__4730__auto___14801)){
args__4736__auto__.push((arguments[i__4731__auto___14802]));

var G__14803 = (i__4731__auto___14802 + (1));
i__4731__auto___14802 = G__14803;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pr4.periodization.count_phases.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pr4.periodization.count_phases.cljs$core$IFn$_invoke$arity$variadic = (function (micros_amount,p__14787){
var vec__14788 = p__14787;
var debugging_QMARK_ = cljs.core.nth.call(null,vec__14788,(0),null);
var basic_micros1 = Math.round((0.55 * micros_amount));
var specific_micros1 = Math.round((0.45 * micros_amount));
var transition_micros1 = ((micros_amount - basic_micros1) - specific_micros1);
var vec__14791 = (function (){var basic_micros = basic_micros1;
var specific_micros = specific_micros1;
var transition_micros = transition_micros1;
var i = (0);
while(true){
if((i >= ((1) - transition_micros))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basic_micros,specific_micros,transition_micros], null);
} else {
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,i,(2)))){
var G__14804 = (basic_micros - (1));
var G__14805 = specific_micros;
var G__14806 = (transition_micros + (1));
var G__14807 = (i + (1));
basic_micros = G__14804;
specific_micros = G__14805;
transition_micros = G__14806;
i = G__14807;
continue;
} else {
var G__14808 = basic_micros;
var G__14809 = (specific_micros - (1));
var G__14810 = (transition_micros + (1));
var G__14811 = (i + (1));
basic_micros = G__14808;
specific_micros = G__14809;
transition_micros = G__14810;
i = G__14811;
continue;

}
}
break;
}
})();
var basic_micros2 = cljs.core.nth.call(null,vec__14791,(0),null);
var specific_micros2 = cljs.core.nth.call(null,vec__14791,(1),null);
var transition_micros2 = cljs.core.nth.call(null,vec__14791,(2),null);
var vec__14794 = ((cljs.core._EQ_.call(null,(2),cljs.core.mod.call(null,basic_micros2,(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(basic_micros2 - (1)),(specific_micros2 + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basic_micros2,specific_micros2], null));
var basic_micros = cljs.core.nth.call(null,vec__14794,(0),null);
var specific_micros3 = cljs.core.nth.call(null,vec__14794,(1),null);
var vec__14797 = ((cljs.core._EQ_.call(null,(2),cljs.core.mod.call(null,specific_micros3,(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(specific_micros3 - (1)),(transition_micros2 + (1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [specific_micros3,transition_micros2], null));
var specific_micros = cljs.core.nth.call(null,vec__14797,(0),null);
var transition_micros = cljs.core.nth.call(null,vec__14797,(1),null);
if(cljs.core.truth_(debugging_QMARK_)){
var last_micro_14812 = ((function (basic_micros1,specific_micros1,transition_micros1,vec__14791,basic_micros2,specific_micros2,transition_micros2,vec__14794,basic_micros,specific_micros3,vec__14797,specific_micros,transition_micros,vec__14788,debugging_QMARK_){
return (function (p1__14784_SHARP_){
var G__14800 = cljs.core.mod.call(null,p1__14784_SHARP_,(4));
switch (G__14800) {
case (0):
return (4);

break;
case (1):
return (5);

break;
case (2):
return "Should not happen";

break;
case (3):
return (3);

break;
default:
return "Impossible case";

}
});})(basic_micros1,specific_micros1,transition_micros1,vec__14791,basic_micros2,specific_micros2,transition_micros2,vec__14794,basic_micros,specific_micros3,vec__14797,specific_micros,transition_micros,vec__14788,debugging_QMARK_))
;
cljs.core.println.call(null,["Microciclos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(micros_amount)].join(''));

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor((((basic_micros / micros_amount) * (100)) / (1)))),"% Basicos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basic_micros),", ultimo micro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_micro_14812.call(null,basic_micros))].join(''));

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor((((specific_micros / micros_amount) * (100)) / (1)))),"% Especifica: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specific_micros),", ultimo micro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_micro_14812.call(null,specific_micros))].join(''));

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor((((transition_micros / micros_amount) * (100)) / (1)))),"% Transicao: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition_micros)].join(''));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basic_micros,specific_micros,transition_micros], null);
});

pr4.periodization.count_phases.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pr4.periodization.count_phases.cljs$lang$applyTo = (function (seq14785){
var G__14786 = cljs.core.first.call(null,seq14785);
var seq14785__$1 = cljs.core.next.call(null,seq14785);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14786,seq14785__$1);
});

pr4.periodization.micro_category_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["Ordin\u00E1rio",null,"Recupera\u00E7\u00E3o",null,"Choque 1",null,"Choque 2",null,"Incorpora\u00E7\u00E3o",null], null), null);
pr4.periodization.validate_micro_sessions_input = (function pr4$periodization$validate_micro_sessions_input(sessions_amount,time_length,category){
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null).call(null,sessions_amount))){
throw cljs.core.ex_info.call(null,"Only micros of 4 5 or 6 sessions can be created.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),sessions_amount], null));
} else {
if((time_length <= (0))){
throw cljs.core.ex_info.call(null,"Session time must be greater than 0.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time-length","time-length",-1438879816),time_length], null));
} else {
if(cljs.core.not.call(null,pr4.periodization.micro_category_QMARK_.call(null,category))){
throw cljs.core.ex_info.call(null,"Could not recognize this microcycle category.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),category], null));
} else {
return true;

}
}
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("pr4.periodization","micro-sessions","pr4.periodization/micro-sessions",1293831607,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),"null"], null), null),new cljs.core.Keyword(null,"time-length","time-length",-1438879816),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(7200),new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null),(600)))),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Symbol("pr4.periodization","micro-category?","pr4.periodization/micro-category?",-332493538,null))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),"null"], null), null),new cljs.core.Keyword(null,"time-length","time-length",-1438879816),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(7200),new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null),(600)))),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Symbol("pr4.periodization","micro-category?","pr4.periodization/micro-category?",-332493538,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),new cljs.core.Keyword(null,"time-length","time-length",-1438879816),new cljs.core.Keyword(null,"category","category",-593092832)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(7200),new cljs.core.Symbol(null,"%","%",-950237169,null),(600)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,(function (p1__14814_SHARP_){
return ((((7200) > p1__14814_SHARP_)) && ((p1__14814_SHARP_ > (600))));
})], null),null),pr4.periodization.micro_category_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),"null"], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(7200),new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null),(600)))),new cljs.core.Symbol("pr4.periodization","micro-category?","pr4.periodization/micro-category?",-332493538,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),"null"], null), null),new cljs.core.Keyword(null,"time-length","time-length",-1438879816),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(7200),new cljs.core.Symbol(null,"p1__14814#","p1__14814#",428636236,null),(600)))),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Symbol("pr4.periodization","micro-category?","pr4.periodization/micro-category?",-332493538,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Returns a list of sessions in the format of
 *   {:reps-min :reps-max :rest-time :total-sets}
 */
pr4.periodization.micro_sessions = (function pr4$periodization$micro_sessions(sessions_amount,time_length,category){
if(pr4.periodization.validate_micro_sessions_input.call(null,sessions_amount,time_length,category)){
} else {
throw (new Error("Assert failed: (validate-micro-sessions-input sessions-amount time-length category)"));
}

var chosen_micros_models = cljs.core.filter.call(null,(function (p1__14815_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,category).call(null,cljs.core.val.call(null,p1__14815_SHARP_));
}),pr4.periodization.micros_models);
var chosen_model = pr4.util.first_filter.call(null,((function (chosen_micros_models){
return (function (p1__14816_SHARP_){
return cljs.core.partial.call(null,cljs.core._EQ_,sessions_amount).call(null,cljs.core.count.call(null,p1__14816_SHARP_));
});})(chosen_micros_models))
,cljs.core.map.call(null,cljs.core.first,chosen_micros_models));
var add_sets_based_on_time = ((function (chosen_micros_models,chosen_model){
return (function (p__14817){
var map__14818 = p__14817;
var map__14818__$1 = (((((!((map__14818 == null))))?(((((map__14818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14818):map__14818);
var session = map__14818__$1;
var reps_max = cljs.core.get.call(null,map__14818__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var rest_time = cljs.core.get.call(null,map__14818__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
return cljs.core.assoc.call(null,session,new cljs.core.Keyword(null,"total-sets","total-sets",467388901),Math.round(((time_length + rest_time) / (((3) * reps_max) + rest_time))));
});})(chosen_micros_models,chosen_model))
;
return cljs.core.map.call(null,add_sets_based_on_time,chosen_model);
});
/**
 * Returns a list of micros category
 */
pr4.periodization.meso_micros = (function pr4$periodization$meso_micros(micros_amount,category){
var choice_table = new cljs.core.PersistentArrayMap(null, 6, ["Estabilizador",new cljs.core.PersistentArrayMap(null, 3, [(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ordin\u00E1rio","Choque 1","Recupera\u00E7\u00E3o"], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ordin\u00E1rio","Ordin\u00E1rio","Choque 1","Recupera\u00E7\u00E3o"], null),(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ordin\u00E1rio","Ordin\u00E1rio","Ordin\u00E1rio","Choque 1","Recupera\u00E7\u00E3o"], null)], null),"Controle",new cljs.core.PersistentArrayMap(null, 3, [(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Choque 1","Choque 1","Recupera\u00E7\u00E3o"], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Choque 1","Recupera\u00E7\u00E3o","Choque 1","Recupera\u00E7\u00E3o"], null),(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ordin\u00E1rio","Choque 1","Recupera\u00E7\u00E3o","Choque 1","Recupera\u00E7\u00E3o"], null)], null),"Auge",new cljs.core.PersistentArrayMap(null, 3, [(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Choque 1","Choque 2","Recupera\u00E7\u00E3o"], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Choque 1","Choque 2","Recupera\u00E7\u00E3o","Recupera\u00E7\u00E3o"], null),(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Choque 1","Choque 1","Choque 2","Recupera\u00E7\u00E3o","Recupera\u00E7\u00E3o"], null)], null),"Recuperativo",new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Recupera\u00E7\u00E3o"], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Recupera\u00E7\u00E3o","Recupera\u00E7\u00E3o"], null)], null),"Incorporativo",new cljs.core.PersistentArrayMap(null, 3, [(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Incorpora\u00E7\u00E3o","Ordin\u00E1rio","Recupera\u00E7\u00E3o"], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Incorpora\u00E7\u00E3o","Ordin\u00E1rio","Ordin\u00E1rio","Recupera\u00E7\u00E3o"], null),(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Incorpora\u00E7\u00E3o","Ordin\u00E1rio","Ordin\u00E1rio","Ordin\u00E1rio","Recupera\u00E7\u00E3o"], null)], null),"Base",new cljs.core.PersistentArrayMap(null, 3, [(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ordin\u00E1rio","Choque 1","Recupera\u00E7\u00E3o"], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ordin\u00E1rio","Ordin\u00E1rio","Choque 1","Recupera\u00E7\u00E3o"], null),(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ordin\u00E1rio","Ordin\u00E1rio","Ordin\u00E1rio","Choque 1","Recupera\u00E7\u00E3o"], null)], null)], null);
return choice_table.call(null,category).call(null,micros_amount);
});
/**
 * Returns a list of mesos in the format of
 *   {:micros-amount :category}
 *   E.g. [{:micros-amount 4 :category Incorporativo}
 *   {:micros-amount 5 :category Estabilizador}]
 */
pr4.periodization.phase_mesos = (function pr4$periodization$phase_mesos(micros_amount,category){
if(cljs.core._EQ_.call(null,category,"Transi\u00E7\u00E3o")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),micros_amount,new cljs.core.Keyword(null,"category","category",-593092832),"Recuperativo"], null)], null);
} else {
var add_basic_meso = (function (amount,creation_order,meso_list){
var G__14820 = creation_order;
switch (G__14820) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),amount,new cljs.core.Keyword(null,"category","category",-593092832),"Incorporativo"], null)], null);

break;
case (1):
return cljs.core.into.call(null,meso_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),amount,new cljs.core.Keyword(null,"category","category",-593092832),"Estabilizador"], null)], null));

break;
default:
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.butlast.call(null,meso_list),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),amount,new cljs.core.Keyword(null,"category","category",-593092832),"Base"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,meso_list)], null)));

}
});
var add_specific_meso = ((function (add_basic_meso){
return (function (amount,creation_order,meso_list){
var G__14821 = creation_order;
switch (G__14821) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),amount,new cljs.core.Keyword(null,"category","category",-593092832),"Auge"], null)], null);

break;
case (1):
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.butlast.call(null,meso_list),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),amount,new cljs.core.Keyword(null,"category","category",-593092832),"Controle"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,meso_list)], null)));

break;
case (2):
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.butlast.call(null,meso_list),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),amount,new cljs.core.Keyword(null,"category","category",-593092832),"Estabilizador"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,meso_list)], null)));

break;
default:
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.take.call(null,(creation_order - (2)),meso_list),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673),amount,new cljs.core.Keyword(null,"category","category",-593092832),"Base"], null)], null),cljs.core.drop.call(null,(creation_order - (2)),meso_list)));

}
});})(add_basic_meso))
;
var add_meso = new cljs.core.PersistentArrayMap(null, 2, ["B\u00E1sica",add_basic_meso,"Espec\u00EDfica",add_specific_meso], null).call(null,category);
var micros_rest = micros_amount;
var meso_list = cljs.core.PersistentVector.EMPTY;
var creation_order = (0);
while(true){
if((micros_rest <= (5))){
return add_meso.call(null,micros_rest,creation_order,meso_list);
} else {
var G__14824 = (micros_rest - (4));
var G__14825 = add_meso.call(null,(4),creation_order,meso_list);
var G__14826 = (creation_order + (1));
micros_rest = G__14824;
meso_list = G__14825;
creation_order = G__14826;
continue;
}
break;
}
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("pr4.periodization","periodization-sessions","pr4.periodization/periodization-sessions",-148963546,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(100),new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null),(27)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.gen.alpha","choose","cljs.spec.gen.alpha/choose",564794681,null),(27),(500))))),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-amount","sessions-amount",632890006,null)], null)], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Keyword(null,"ret","ret",-468222814)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.list(new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),(4),cljs.core.list(new cljs.core.Symbol("cljs.core","quot","cljs.core/quot",-458656343,null),new cljs.core.Symbol(null,"sessions-amount","sessions-amount",632890006,null),(4)))))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(100),new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null),(27)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.gen.alpha","choose","cljs.spec.gen.alpha/choose",564794681,null),(27),(500))))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.with_gen.call(null,cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(100),new cljs.core.Symbol(null,"%","%",-950237169,null),(27)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,(function (p1__14827_SHARP_){
return ((((100) > p1__14827_SHARP_)) && ((p1__14827_SHARP_ > (27))));
})], null),null),(function (){
return cljs.spec.gen.alpha.choose.call(null,(27),(500));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(100),new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null),(27)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.gen.alpha","choose","cljs.spec.gen.alpha/choose",564794681,null),(27),(500))))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),(100),new cljs.core.Symbol(null,"p1__14827#","p1__14827#",-1707289032,null),(27)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.gen.alpha","choose","cljs.spec.gen.alpha/choose",564794681,null),(27),(500))))),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-amount","sessions-amount",632890006,null)], null)], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Keyword(null,"ret","ret",-468222814)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.list(new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),(4),cljs.core.list(new cljs.core.Symbol("cljs.core","quot","cljs.core/quot",-458656343,null),new cljs.core.Symbol(null,"sessions-amount","sessions-amount",632890006,null),(4))))),(function (p__14828){
var map__14829 = p__14828;
var map__14829__$1 = (((((!((map__14829 == null))))?(((((map__14829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14829):map__14829);
var map__14830 = cljs.core.get.call(null,map__14829__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var map__14830__$1 = (((((!((map__14830 == null))))?(((((map__14830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14830):map__14830);
var sessions_amount = cljs.core.get.call(null,map__14830__$1,new cljs.core.Keyword(null,"sessions-amount","sessions-amount",-1007641521));
var ret = cljs.core.get.call(null,map__14829__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
return cljs.core._EQ_.call(null,cljs.core.count.call(null,ret),((4) * cljs.core.quot.call(null,sessions_amount,(4))));
}),null,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions-amount","sessions-amount",632890006,null)], null)], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Symbol(null,"ret","ret",1172308713,null),new cljs.core.Keyword(null,"ret","ret",-468222814)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.list(new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),new cljs.core.Symbol(null,"ret","ret",1172308713,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),(4),cljs.core.list(new cljs.core.Symbol("cljs.core","quot","cljs.core/quot",-458656343,null),new cljs.core.Symbol(null,"sessions-amount","sessions-amount",632890006,null),(4))))),null));
/**
 * Uses the total number of sessions to return the list of sessions
 *   according to a periodization.
 */
pr4.periodization.periodization_sessions = (function pr4$periodization$periodization_sessions(sessions_amount,sessions_time_target){
var sessions_reminder = cljs.core.mod.call(null,sessions_amount,(4));
return cljs.core.mapcat.call(null,((function (sessions_reminder){
return (function (p1__14837_SHARP_){
return pr4.periodization.micro_sessions.call(null,(4),sessions_time_target,p1__14837_SHARP_);
});})(sessions_reminder))
,cljs.core.mapcat.call(null,((function (sessions_reminder){
return (function (p1__14836_SHARP_){
return cljs.core.apply.call(null,pr4.periodization.meso_micros,p1__14836_SHARP_);
});})(sessions_reminder))
,cljs.core.map.call(null,cljs.core.vals,cljs.core.mapcat.call(null,((function (sessions_reminder){
return (function (p1__14835_SHARP_,p2__14834_SHARP_){
return pr4.periodization.phase_mesos.call(null,p2__14834_SHARP_,p1__14835_SHARP_);
});})(sessions_reminder))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B\u00E1sica","Espec\u00EDfica","Transi\u00E7\u00E3o"], null),pr4.periodization.count_phases.call(null,((function (sessions_reminder){
return (function (p1__14833_SHARP_){
return cljs.core.quot.call(null,p1__14833_SHARP_,(4));
});})(sessions_reminder))
.call(null,sessions_amount))))));
});

//# sourceMappingURL=periodization.js.map
