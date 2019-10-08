// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__19514 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__19514,(0),null);
var zpath = cljs.core.nth.call(null,vec__19514,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Turn an uneval zloc with #_ starting it into a zipper.
 */
zprint.zutil.zparseuneval = (function zprint$zutil$zparseuneval(zloc){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,clojure.string.triml.call(null,clojure.string.replace_first.call(null,zprint.zutil.string.call(null,zloc),/#_/,""))));
});
/**
 * Turn a zloc into an #_ uneval zipper.
 */
zprint.zutil.zcreateuneval = (function zprint$zutil$zcreateuneval(zloc){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,clojure.string.triml.call(null,["#_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.string.call(null,zloc))].join(''))));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__19517 = zprint.zutil.zfirst.call(null,zloc);
var G__19517__$1 = (((G__19517 == null))?null:zprint.zutil.right_STAR_.call(null,G__19517));
var G__19517__$2 = (((G__19517__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__19517__$1));
var G__19517__$3 = (((G__19517__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__19517__$2));
if((G__19517__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__19517__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__19518 = zprint.zutil.zfirst.call(null,zloc);
var G__19518__$1 = (((G__19518 == null))?null:zprint.zutil.right_STAR_.call(null,G__19518));
var G__19518__$2 = (((G__19518__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__19518__$1));
var G__19518__$3 = (((G__19518__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__19518__$2));
var G__19518__$4 = (((G__19518__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__19518__$3));
var G__19518__$5 = (((G__19518__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__19518__$4));
if((G__19518__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__19518__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__19519 = zprint.zutil.zrightnws.call(null,nloc);
var G__19520 = nloc;
nloc = G__19519;
ploc = G__19520;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__19521 = zprint.zutil.zleftnws.call(null,nloc);
var G__19522 = nloc;
nloc = G__19521;
ploc = G__19522;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,zloc))){
return zloc;
} else {
var temp__5733__auto__ = zprint.zutil.next_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5733__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var ploc = temp__5733__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__19523 = zprint.zutil.zrightnws.call(null,nloc);
var G__19524 = (i - (1));
nloc = G__19523;
i = G__19524;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__19525 = zprint.zutil.zrightnws.call(null,nloc);
var G__19526 = (i + (1));
nloc = G__19525;
i = G__19526;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__19527 = zprint.zutil.right_STAR_.call(null,nloc);
var G__19528 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,(function (){var and__4120__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4120__auto__;
}
})()))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__19527;
out = G__19528;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__19529 = zprint.zutil.right_STAR_.call(null,nloc);
var G__19530 = (function (){var temp__5733__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__19529;
out = G__19530;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__19531 = zprint.zutil.right_STAR_.call(null,nloc);
var G__19532 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__19531;
out = G__19532;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__19533 = zprint.zutil.right_STAR_.call(null,nloc);
var G__19534 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__19533;
out = G__19534;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__19535 = zprint.zutil.up_STAR_.call(null,nloc);
var G__19536 = (0);
var G__19537 = cljs.core.cons.call(null,left,out);
nloc = G__19535;
left = G__19536;
out = G__19537;
continue;
}
} else {
var G__19538 = zprint.zutil.left_STAR_.call(null,nloc);
var G__19539 = (left + (1));
var G__19540 = out;
nloc = G__19538;
left = G__19539;
out = G__19540;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__19541 = zprint.zutil.up_STAR_.call(null,nloc);
var G__19542 = (0);
var G__19543 = cljs.core.cons.call(null,left,out);
nloc = G__19541;
left = G__19542;
out = G__19543;
continue;
}
} else {
var G__19544 = zprint.zutil.left_STAR_.call(null,nloc);
var G__19545 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__19546 = out;
nloc = G__19544;
left = G__19545;
out = G__19546;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__19547 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__19547;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__19548 = zprint.zutil.right_STAR_.call(null,nloc);
var G__19549 = (remaining_right - (1));
nloc = G__19548;
remaining_right = G__19549;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__4120__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number'));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
while(true){
var tnloc = zprint.zutil.tag.call(null,nloc);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__19550 = zprint.zutil.left_STAR_.call(null,nloc);
var G__19551 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__19550;
spaces = G__19551;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__19552 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__19552;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5733__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var doc_zloc = temp__5733__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__19556 = cljs.core.first.call(null,pair_seq__$1);
var seq__19557 = cljs.core.seq.call(null,vec__19556);
var first__19558 = cljs.core.first.call(null,seq__19557);
var seq__19557__$1 = cljs.core.next.call(null,seq__19557);
var k = first__19558;
var rest_of_pair = seq__19557__$1;
var pair = vec__19556;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not_EQ_.call(null,cljs.core.subs.call(null,rewrite_clj.zip.string.call(null,k),(0),(2)),"::");
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.call(null,ns,current_ns)){
var G__19559 = ns;
var G__19560 = cljs.core.next.call(null,pair_seq__$1);
var G__19561 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__19559;
pair_seq__$1 = G__19560;
out = G__19561;
continue;
} else {
return null;
}
} else {
var G__19562 = current_ns;
var G__19563 = cljs.core.next.call(null,pair_seq__$1);
var G__19564 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__19562;
pair_seq__$1 = G__19563;
out = G__19564;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__19565 = ns;
var G__19566 = cljs.core.next.call(null,pair_seq__$1);
var G__19567 = cljs.core.conj.call(null,out,pair);
ns = G__19565;
pair_seq__$1 = G__19566;
out = G__19567;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__19568 = zprint.zfns.zstring;
var znumstr_orig_val__19569 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__19570 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__19571 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__19572 = zprint.zfns.zsexpr;
var zseqnws_orig_val__19573 = zprint.zfns.zseqnws;
var zmap_right_orig_val__19574 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__19575 = zprint.zfns.zfocus_style;
var zfirst_orig_val__19576 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__19577 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__19578 = zprint.zfns.zsecond;
var zthird_orig_val__19579 = zprint.zfns.zthird;
var zfourth_orig_val__19580 = zprint.zfns.zfourth;
var znthnext_orig_val__19581 = zprint.zfns.znthnext;
var zcount_orig_val__19582 = zprint.zfns.zcount;
var zmap_orig_val__19583 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__19584 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__19585 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__19586 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__19587 = zprint.zfns.zfocus;
var zfind_path_orig_val__19588 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__19589 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__19590 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__19591 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__19592 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__19593 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__19594 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__19595 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__19596 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__19597 = zprint.zfns.ztag;
var zparseuneval_orig_val__19598 = zprint.zfns.zparseuneval;
var zlast_orig_val__19599 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__19600 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__19601 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__19602 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__19603 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__19604 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__19605 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__19606 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__19607 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__19608 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__19609 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__19610 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__19611 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__19612 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__19613 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__19614 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__19615 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__19616 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__19617 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__19618 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__19619 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__19620 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__19621 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__19622 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__19623 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__19624 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__19625 = zprint.zfns.zfind;
var zstring_temp_val__19626 = rewrite_clj.zip.string;
var znumstr_temp_val__19627 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__19628 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__19629 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__19630 = zprint.zutil.sexpr;
var zseqnws_temp_val__19631 = zprint.zutil.zseqnws;
var zmap_right_temp_val__19632 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__19633 = zprint.zutil.zfocus_style;
var zfirst_temp_val__19634 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__19635 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__19636 = zprint.zutil.zsecond;
var zthird_temp_val__19637 = zprint.zutil.zthird;
var zfourth_temp_val__19638 = zprint.zutil.zfourth;
var znthnext_temp_val__19639 = zprint.zutil.znthnext;
var zcount_temp_val__19640 = zprint.zutil.zcount;
var zmap_temp_val__19641 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__19642 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__19643 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__19644 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__19645 = zprint.zutil.zfocus;
var zfind_path_temp_val__19646 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__19647 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__19648 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__19649 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__19650 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__19651 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__19652 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__19653 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__19654 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__19655 = zprint.zutil.ztag;
var zparseuneval_temp_val__19656 = zprint.zutil.zparseuneval;
var zlast_temp_val__19657 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__19658 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__19659 = cljs.core.constantly.call(null,false);
var zderef_temp_val__19660 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__19661 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__19662 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__19663 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__19664 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__19665 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__19666 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__19667 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__19668 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__19669 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__19670 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__19671 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__19672 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__19673 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__19674 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__19675 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__19676 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__19677 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__19678 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__19679 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__19680 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__19681 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__19682 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__19683 = zprint.zutil.zfind;
zprint.zfns.zstring = zstring_temp_val__19626;

zprint.zfns.znumstr = znumstr_temp_val__19627;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__19628;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__19629;

zprint.zfns.zsexpr = zsexpr_temp_val__19630;

zprint.zfns.zseqnws = zseqnws_temp_val__19631;

zprint.zfns.zmap_right = zmap_right_temp_val__19632;

zprint.zfns.zfocus_style = zfocus_style_temp_val__19633;

zprint.zfns.zfirst = zfirst_temp_val__19634;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__19635;

zprint.zfns.zsecond = zsecond_temp_val__19636;

zprint.zfns.zthird = zthird_temp_val__19637;

zprint.zfns.zfourth = zfourth_temp_val__19638;

zprint.zfns.znthnext = znthnext_temp_val__19639;

zprint.zfns.zcount = zcount_temp_val__19640;

zprint.zfns.zmap = zmap_temp_val__19641;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__19642;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__19643;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__19644;

zprint.zfns.zfocus = zfocus_temp_val__19645;

zprint.zfns.zfind_path = zfind_path_temp_val__19646;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__19647;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__19648;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__19649;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__19650;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__19651;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__19652;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__19653;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__19654;

zprint.zfns.ztag = ztag_temp_val__19655;

zprint.zfns.zparseuneval = zparseuneval_temp_val__19656;

zprint.zfns.zlast = zlast_temp_val__19657;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__19658;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__19659;

zprint.zfns.zderef = zderef_temp_val__19660;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__19661;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__19662;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__19663;

zprint.zfns.zexpandarray = zexpandarray_temp_val__19664;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__19665;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__19666;

zprint.zfns.zmap_all = zmap_all_temp_val__19667;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__19668;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__19669;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__19670;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__19671;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__19672;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__19673;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__19674;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__19675;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__19676;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__19677;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__19678;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__19679;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__19680;

zprint.zfns.zlift_ns = zlift_ns_temp_val__19681;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__19682;

zprint.zfns.zfind = zfind_temp_val__19683;

try{return body_fn.call(null);
}finally {zprint.zfns.zfind = zfind_orig_val__19625;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__19624;

zprint.zfns.zlift_ns = zlift_ns_orig_val__19623;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__19622;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__19621;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__19620;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__19619;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__19618;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__19617;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__19616;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__19615;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__19614;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__19613;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__19612;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__19611;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__19610;

zprint.zfns.zmap_all = zmap_all_orig_val__19609;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__19608;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__19607;

zprint.zfns.zexpandarray = zexpandarray_orig_val__19606;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__19605;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__19604;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__19603;

zprint.zfns.zderef = zderef_orig_val__19602;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__19601;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__19600;

zprint.zfns.zlast = zlast_orig_val__19599;

zprint.zfns.zparseuneval = zparseuneval_orig_val__19598;

zprint.zfns.ztag = ztag_orig_val__19597;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__19596;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__19595;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__19594;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__19593;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__19592;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__19591;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__19590;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__19589;

zprint.zfns.zfind_path = zfind_path_orig_val__19588;

zprint.zfns.zfocus = zfocus_orig_val__19587;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__19586;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__19585;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__19584;

zprint.zfns.zmap = zmap_orig_val__19583;

zprint.zfns.zcount = zcount_orig_val__19582;

zprint.zfns.znthnext = znthnext_orig_val__19581;

zprint.zfns.zfourth = zfourth_orig_val__19580;

zprint.zfns.zthird = zthird_orig_val__19579;

zprint.zfns.zsecond = zsecond_orig_val__19578;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__19577;

zprint.zfns.zfirst = zfirst_orig_val__19576;

zprint.zfns.zfocus_style = zfocus_style_orig_val__19575;

zprint.zfns.zmap_right = zmap_right_orig_val__19574;

zprint.zfns.zseqnws = zseqnws_orig_val__19573;

zprint.zfns.zsexpr = zsexpr_orig_val__19572;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__19571;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__19570;

zprint.zfns.znumstr = znumstr_orig_val__19569;

zprint.zfns.zstring = zstring_orig_val__19568;
}});
