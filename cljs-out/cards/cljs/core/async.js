// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20050 = arguments.length;
switch (G__20050) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20051 = (function (f,blockable,meta20052){
this.f = f;
this.blockable = blockable;
this.meta20052 = meta20052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20053,meta20052__$1){
var self__ = this;
var _20053__$1 = this;
return (new cljs.core.async.t_cljs$core$async20051(self__.f,self__.blockable,meta20052__$1));
});

cljs.core.async.t_cljs$core$async20051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20053){
var self__ = this;
var _20053__$1 = this;
return self__.meta20052;
});

cljs.core.async.t_cljs$core$async20051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20052","meta20052",218413161,null)], null);
});

cljs.core.async.t_cljs$core$async20051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20051";

cljs.core.async.t_cljs$core$async20051.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20051");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20051.
 */
cljs.core.async.__GT_t_cljs$core$async20051 = (function cljs$core$async$__GT_t_cljs$core$async20051(f__$1,blockable__$1,meta20052){
return (new cljs.core.async.t_cljs$core$async20051(f__$1,blockable__$1,meta20052));
});

}

return (new cljs.core.async.t_cljs$core$async20051(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__20057 = arguments.length;
switch (G__20057) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__20060 = arguments.length;
switch (G__20060) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__20063 = arguments.length;
switch (G__20063) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20065 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20065);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20065,ret){
return (function (){
return fn1.call(null,val_20065);
});})(val_20065,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__20067 = arguments.length;
switch (G__20067) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___20069 = n;
var x_20070 = (0);
while(true){
if((x_20070 < n__4607__auto___20069)){
(a[x_20070] = (0));

var G__20071 = (x_20070 + (1));
x_20070 = G__20071;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20072 = (i + (1));
i = G__20072;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20073 = (function (flag,meta20074){
this.flag = flag;
this.meta20074 = meta20074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20075,meta20074__$1){
var self__ = this;
var _20075__$1 = this;
return (new cljs.core.async.t_cljs$core$async20073(self__.flag,meta20074__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20075){
var self__ = this;
var _20075__$1 = this;
return self__.meta20074;
});})(flag))
;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20073.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20074","meta20074",-1798614013,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20073";

cljs.core.async.t_cljs$core$async20073.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20073");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20073.
 */
cljs.core.async.__GT_t_cljs$core$async20073 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20073(flag__$1,meta20074){
return (new cljs.core.async.t_cljs$core$async20073(flag__$1,meta20074));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20073(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20076 = (function (flag,cb,meta20077){
this.flag = flag;
this.cb = cb;
this.meta20077 = meta20077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20078,meta20077__$1){
var self__ = this;
var _20078__$1 = this;
return (new cljs.core.async.t_cljs$core$async20076(self__.flag,self__.cb,meta20077__$1));
});

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20078){
var self__ = this;
var _20078__$1 = this;
return self__.meta20077;
});

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20077","meta20077",-2054428680,null)], null);
});

cljs.core.async.t_cljs$core$async20076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20076";

cljs.core.async.t_cljs$core$async20076.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20076");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20076.
 */
cljs.core.async.__GT_t_cljs$core$async20076 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20076(flag__$1,cb__$1,meta20077){
return (new cljs.core.async.t_cljs$core$async20076(flag__$1,cb__$1,meta20077));
});

}

return (new cljs.core.async.t_cljs$core$async20076(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20079_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20079_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20080_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20080_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20081 = (i + (1));
i = G__20081;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20087 = arguments.length;
var i__4731__auto___20088 = (0);
while(true){
if((i__4731__auto___20088 < len__4730__auto___20087)){
args__4736__auto__.push((arguments[i__4731__auto___20088]));

var G__20089 = (i__4731__auto___20088 + (1));
i__4731__auto___20088 = G__20089;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20084){
var map__20085 = p__20084;
var map__20085__$1 = (((((!((map__20085 == null))))?(((((map__20085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20085):map__20085);
var opts = map__20085__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20082){
var G__20083 = cljs.core.first.call(null,seq20082);
var seq20082__$1 = cljs.core.next.call(null,seq20082);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20083,seq20082__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__20091 = arguments.length;
switch (G__20091) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19990__auto___20137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___20137){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___20137){
return (function (state_20115){
var state_val_20116 = (state_20115[(1)]);
if((state_val_20116 === (7))){
var inst_20111 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20117_20138 = state_20115__$1;
(statearr_20117_20138[(2)] = inst_20111);

(statearr_20117_20138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (1))){
var state_20115__$1 = state_20115;
var statearr_20118_20139 = state_20115__$1;
(statearr_20118_20139[(2)] = null);

(statearr_20118_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (4))){
var inst_20094 = (state_20115[(7)]);
var inst_20094__$1 = (state_20115[(2)]);
var inst_20095 = (inst_20094__$1 == null);
var state_20115__$1 = (function (){var statearr_20119 = state_20115;
(statearr_20119[(7)] = inst_20094__$1);

return statearr_20119;
})();
if(cljs.core.truth_(inst_20095)){
var statearr_20120_20140 = state_20115__$1;
(statearr_20120_20140[(1)] = (5));

} else {
var statearr_20121_20141 = state_20115__$1;
(statearr_20121_20141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (13))){
var state_20115__$1 = state_20115;
var statearr_20122_20142 = state_20115__$1;
(statearr_20122_20142[(2)] = null);

(statearr_20122_20142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (6))){
var inst_20094 = (state_20115[(7)]);
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20115__$1,(11),to,inst_20094);
} else {
if((state_val_20116 === (3))){
var inst_20113 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20115__$1,inst_20113);
} else {
if((state_val_20116 === (12))){
var state_20115__$1 = state_20115;
var statearr_20123_20143 = state_20115__$1;
(statearr_20123_20143[(2)] = null);

(statearr_20123_20143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (2))){
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20115__$1,(4),from);
} else {
if((state_val_20116 === (11))){
var inst_20104 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
if(cljs.core.truth_(inst_20104)){
var statearr_20124_20144 = state_20115__$1;
(statearr_20124_20144[(1)] = (12));

} else {
var statearr_20125_20145 = state_20115__$1;
(statearr_20125_20145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (9))){
var state_20115__$1 = state_20115;
var statearr_20126_20146 = state_20115__$1;
(statearr_20126_20146[(2)] = null);

(statearr_20126_20146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (5))){
var state_20115__$1 = state_20115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20127_20147 = state_20115__$1;
(statearr_20127_20147[(1)] = (8));

} else {
var statearr_20128_20148 = state_20115__$1;
(statearr_20128_20148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (14))){
var inst_20109 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20129_20149 = state_20115__$1;
(statearr_20129_20149[(2)] = inst_20109);

(statearr_20129_20149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (10))){
var inst_20101 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20130_20150 = state_20115__$1;
(statearr_20130_20150[(2)] = inst_20101);

(statearr_20130_20150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (8))){
var inst_20098 = cljs.core.async.close_BANG_.call(null,to);
var state_20115__$1 = state_20115;
var statearr_20131_20151 = state_20115__$1;
(statearr_20131_20151[(2)] = inst_20098);

(statearr_20131_20151[(1)] = (10));


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
});})(c__19990__auto___20137))
;
return ((function (switch__19895__auto__,c__19990__auto___20137){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_20132 = [null,null,null,null,null,null,null,null];
(statearr_20132[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_20132[(1)] = (1));

return statearr_20132;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_20115){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20133){if((e20133 instanceof Object)){
var ex__19899__auto__ = e20133;
var statearr_20134_20152 = state_20115;
(statearr_20134_20152[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20153 = state_20115;
state_20115 = G__20153;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_20115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_20115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___20137))
})();
var state__19992__auto__ = (function (){var statearr_20135 = f__19991__auto__.call(null);
(statearr_20135[(6)] = c__19990__auto___20137);

return statearr_20135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___20137))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20154){
var vec__20155 = p__20154;
var v = cljs.core.nth.call(null,vec__20155,(0),null);
var p = cljs.core.nth.call(null,vec__20155,(1),null);
var job = vec__20155;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19990__auto___20326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___20326,res,vec__20155,v,p,job,jobs,results){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___20326,res,vec__20155,v,p,job,jobs,results){
return (function (state_20162){
var state_val_20163 = (state_20162[(1)]);
if((state_val_20163 === (1))){
var state_20162__$1 = state_20162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20162__$1,(2),res,v);
} else {
if((state_val_20163 === (2))){
var inst_20159 = (state_20162[(2)]);
var inst_20160 = cljs.core.async.close_BANG_.call(null,res);
var state_20162__$1 = (function (){var statearr_20164 = state_20162;
(statearr_20164[(7)] = inst_20159);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20162__$1,inst_20160);
} else {
return null;
}
}
});})(c__19990__auto___20326,res,vec__20155,v,p,job,jobs,results))
;
return ((function (switch__19895__auto__,c__19990__auto___20326,res,vec__20155,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0 = (function (){
var statearr_20165 = [null,null,null,null,null,null,null,null];
(statearr_20165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__);

(statearr_20165[(1)] = (1));

return statearr_20165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1 = (function (state_20162){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20166){if((e20166 instanceof Object)){
var ex__19899__auto__ = e20166;
var statearr_20167_20327 = state_20162;
(statearr_20167_20327[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20328 = state_20162;
state_20162 = G__20328;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = function(state_20162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1.call(this,state_20162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___20326,res,vec__20155,v,p,job,jobs,results))
})();
var state__19992__auto__ = (function (){var statearr_20168 = f__19991__auto__.call(null);
(statearr_20168[(6)] = c__19990__auto___20326);

return statearr_20168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___20326,res,vec__20155,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20169){
var vec__20170 = p__20169;
var v = cljs.core.nth.call(null,vec__20170,(0),null);
var p = cljs.core.nth.call(null,vec__20170,(1),null);
var job = vec__20170;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___20329 = n;
var __20330 = (0);
while(true){
if((__20330 < n__4607__auto___20329)){
var G__20173_20331 = type;
var G__20173_20332__$1 = (((G__20173_20331 instanceof cljs.core.Keyword))?G__20173_20331.fqn:null);
switch (G__20173_20332__$1) {
case "compute":
var c__19990__auto___20334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20330,c__19990__auto___20334,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (__20330,c__19990__auto___20334,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async){
return (function (state_20186){
var state_val_20187 = (state_20186[(1)]);
if((state_val_20187 === (1))){
var state_20186__$1 = state_20186;
var statearr_20188_20335 = state_20186__$1;
(statearr_20188_20335[(2)] = null);

(statearr_20188_20335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (2))){
var state_20186__$1 = state_20186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20186__$1,(4),jobs);
} else {
if((state_val_20187 === (3))){
var inst_20184 = (state_20186[(2)]);
var state_20186__$1 = state_20186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20186__$1,inst_20184);
} else {
if((state_val_20187 === (4))){
var inst_20176 = (state_20186[(2)]);
var inst_20177 = process.call(null,inst_20176);
var state_20186__$1 = state_20186;
if(cljs.core.truth_(inst_20177)){
var statearr_20189_20336 = state_20186__$1;
(statearr_20189_20336[(1)] = (5));

} else {
var statearr_20190_20337 = state_20186__$1;
(statearr_20190_20337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (5))){
var state_20186__$1 = state_20186;
var statearr_20191_20338 = state_20186__$1;
(statearr_20191_20338[(2)] = null);

(statearr_20191_20338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (6))){
var state_20186__$1 = state_20186;
var statearr_20192_20339 = state_20186__$1;
(statearr_20192_20339[(2)] = null);

(statearr_20192_20339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (7))){
var inst_20182 = (state_20186[(2)]);
var state_20186__$1 = state_20186;
var statearr_20193_20340 = state_20186__$1;
(statearr_20193_20340[(2)] = inst_20182);

(statearr_20193_20340[(1)] = (3));


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
});})(__20330,c__19990__auto___20334,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async))
;
return ((function (__20330,switch__19895__auto__,c__19990__auto___20334,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0 = (function (){
var statearr_20194 = [null,null,null,null,null,null,null];
(statearr_20194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__);

(statearr_20194[(1)] = (1));

return statearr_20194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1 = (function (state_20186){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20195){if((e20195 instanceof Object)){
var ex__19899__auto__ = e20195;
var statearr_20196_20341 = state_20186;
(statearr_20196_20341[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20342 = state_20186;
state_20186 = G__20342;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = function(state_20186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1.call(this,state_20186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__;
})()
;})(__20330,switch__19895__auto__,c__19990__auto___20334,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async))
})();
var state__19992__auto__ = (function (){var statearr_20197 = f__19991__auto__.call(null);
(statearr_20197[(6)] = c__19990__auto___20334);

return statearr_20197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(__20330,c__19990__auto___20334,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async))
);


break;
case "async":
var c__19990__auto___20343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20330,c__19990__auto___20343,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (__20330,c__19990__auto___20343,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async){
return (function (state_20210){
var state_val_20211 = (state_20210[(1)]);
if((state_val_20211 === (1))){
var state_20210__$1 = state_20210;
var statearr_20212_20344 = state_20210__$1;
(statearr_20212_20344[(2)] = null);

(statearr_20212_20344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (2))){
var state_20210__$1 = state_20210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20210__$1,(4),jobs);
} else {
if((state_val_20211 === (3))){
var inst_20208 = (state_20210[(2)]);
var state_20210__$1 = state_20210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20210__$1,inst_20208);
} else {
if((state_val_20211 === (4))){
var inst_20200 = (state_20210[(2)]);
var inst_20201 = async.call(null,inst_20200);
var state_20210__$1 = state_20210;
if(cljs.core.truth_(inst_20201)){
var statearr_20213_20345 = state_20210__$1;
(statearr_20213_20345[(1)] = (5));

} else {
var statearr_20214_20346 = state_20210__$1;
(statearr_20214_20346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (5))){
var state_20210__$1 = state_20210;
var statearr_20215_20347 = state_20210__$1;
(statearr_20215_20347[(2)] = null);

(statearr_20215_20347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (6))){
var state_20210__$1 = state_20210;
var statearr_20216_20348 = state_20210__$1;
(statearr_20216_20348[(2)] = null);

(statearr_20216_20348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20211 === (7))){
var inst_20206 = (state_20210[(2)]);
var state_20210__$1 = state_20210;
var statearr_20217_20349 = state_20210__$1;
(statearr_20217_20349[(2)] = inst_20206);

(statearr_20217_20349[(1)] = (3));


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
});})(__20330,c__19990__auto___20343,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async))
;
return ((function (__20330,switch__19895__auto__,c__19990__auto___20343,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0 = (function (){
var statearr_20218 = [null,null,null,null,null,null,null];
(statearr_20218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__);

(statearr_20218[(1)] = (1));

return statearr_20218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1 = (function (state_20210){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20219){if((e20219 instanceof Object)){
var ex__19899__auto__ = e20219;
var statearr_20220_20350 = state_20210;
(statearr_20220_20350[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20351 = state_20210;
state_20210 = G__20351;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = function(state_20210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1.call(this,state_20210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__;
})()
;})(__20330,switch__19895__auto__,c__19990__auto___20343,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async))
})();
var state__19992__auto__ = (function (){var statearr_20221 = f__19991__auto__.call(null);
(statearr_20221[(6)] = c__19990__auto___20343);

return statearr_20221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(__20330,c__19990__auto___20343,G__20173_20331,G__20173_20332__$1,n__4607__auto___20329,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20173_20332__$1)].join('')));

}

var G__20352 = (__20330 + (1));
__20330 = G__20352;
continue;
} else {
}
break;
}

var c__19990__auto___20353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___20353,jobs,results,process,async){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___20353,jobs,results,process,async){
return (function (state_20243){
var state_val_20244 = (state_20243[(1)]);
if((state_val_20244 === (7))){
var inst_20239 = (state_20243[(2)]);
var state_20243__$1 = state_20243;
var statearr_20245_20354 = state_20243__$1;
(statearr_20245_20354[(2)] = inst_20239);

(statearr_20245_20354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (1))){
var state_20243__$1 = state_20243;
var statearr_20246_20355 = state_20243__$1;
(statearr_20246_20355[(2)] = null);

(statearr_20246_20355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (4))){
var inst_20224 = (state_20243[(7)]);
var inst_20224__$1 = (state_20243[(2)]);
var inst_20225 = (inst_20224__$1 == null);
var state_20243__$1 = (function (){var statearr_20247 = state_20243;
(statearr_20247[(7)] = inst_20224__$1);

return statearr_20247;
})();
if(cljs.core.truth_(inst_20225)){
var statearr_20248_20356 = state_20243__$1;
(statearr_20248_20356[(1)] = (5));

} else {
var statearr_20249_20357 = state_20243__$1;
(statearr_20249_20357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (6))){
var inst_20224 = (state_20243[(7)]);
var inst_20229 = (state_20243[(8)]);
var inst_20229__$1 = cljs.core.async.chan.call(null,(1));
var inst_20230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20231 = [inst_20224,inst_20229__$1];
var inst_20232 = (new cljs.core.PersistentVector(null,2,(5),inst_20230,inst_20231,null));
var state_20243__$1 = (function (){var statearr_20250 = state_20243;
(statearr_20250[(8)] = inst_20229__$1);

return statearr_20250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20243__$1,(8),jobs,inst_20232);
} else {
if((state_val_20244 === (3))){
var inst_20241 = (state_20243[(2)]);
var state_20243__$1 = state_20243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20243__$1,inst_20241);
} else {
if((state_val_20244 === (2))){
var state_20243__$1 = state_20243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20243__$1,(4),from);
} else {
if((state_val_20244 === (9))){
var inst_20236 = (state_20243[(2)]);
var state_20243__$1 = (function (){var statearr_20251 = state_20243;
(statearr_20251[(9)] = inst_20236);

return statearr_20251;
})();
var statearr_20252_20358 = state_20243__$1;
(statearr_20252_20358[(2)] = null);

(statearr_20252_20358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (5))){
var inst_20227 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20243__$1 = state_20243;
var statearr_20253_20359 = state_20243__$1;
(statearr_20253_20359[(2)] = inst_20227);

(statearr_20253_20359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (8))){
var inst_20229 = (state_20243[(8)]);
var inst_20234 = (state_20243[(2)]);
var state_20243__$1 = (function (){var statearr_20254 = state_20243;
(statearr_20254[(10)] = inst_20234);

return statearr_20254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20243__$1,(9),results,inst_20229);
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
});})(c__19990__auto___20353,jobs,results,process,async))
;
return ((function (switch__19895__auto__,c__19990__auto___20353,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0 = (function (){
var statearr_20255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__);

(statearr_20255[(1)] = (1));

return statearr_20255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1 = (function (state_20243){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20256){if((e20256 instanceof Object)){
var ex__19899__auto__ = e20256;
var statearr_20257_20360 = state_20243;
(statearr_20257_20360[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20361 = state_20243;
state_20243 = G__20361;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = function(state_20243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1.call(this,state_20243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___20353,jobs,results,process,async))
})();
var state__19992__auto__ = (function (){var statearr_20258 = f__19991__auto__.call(null);
(statearr_20258[(6)] = c__19990__auto___20353);

return statearr_20258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___20353,jobs,results,process,async))
);


var c__19990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto__,jobs,results,process,async){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto__,jobs,results,process,async){
return (function (state_20296){
var state_val_20297 = (state_20296[(1)]);
if((state_val_20297 === (7))){
var inst_20292 = (state_20296[(2)]);
var state_20296__$1 = state_20296;
var statearr_20298_20362 = state_20296__$1;
(statearr_20298_20362[(2)] = inst_20292);

(statearr_20298_20362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (20))){
var state_20296__$1 = state_20296;
var statearr_20299_20363 = state_20296__$1;
(statearr_20299_20363[(2)] = null);

(statearr_20299_20363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (1))){
var state_20296__$1 = state_20296;
var statearr_20300_20364 = state_20296__$1;
(statearr_20300_20364[(2)] = null);

(statearr_20300_20364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (4))){
var inst_20261 = (state_20296[(7)]);
var inst_20261__$1 = (state_20296[(2)]);
var inst_20262 = (inst_20261__$1 == null);
var state_20296__$1 = (function (){var statearr_20301 = state_20296;
(statearr_20301[(7)] = inst_20261__$1);

return statearr_20301;
})();
if(cljs.core.truth_(inst_20262)){
var statearr_20302_20365 = state_20296__$1;
(statearr_20302_20365[(1)] = (5));

} else {
var statearr_20303_20366 = state_20296__$1;
(statearr_20303_20366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (15))){
var inst_20274 = (state_20296[(8)]);
var state_20296__$1 = state_20296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20296__$1,(18),to,inst_20274);
} else {
if((state_val_20297 === (21))){
var inst_20287 = (state_20296[(2)]);
var state_20296__$1 = state_20296;
var statearr_20304_20367 = state_20296__$1;
(statearr_20304_20367[(2)] = inst_20287);

(statearr_20304_20367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (13))){
var inst_20289 = (state_20296[(2)]);
var state_20296__$1 = (function (){var statearr_20305 = state_20296;
(statearr_20305[(9)] = inst_20289);

return statearr_20305;
})();
var statearr_20306_20368 = state_20296__$1;
(statearr_20306_20368[(2)] = null);

(statearr_20306_20368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (6))){
var inst_20261 = (state_20296[(7)]);
var state_20296__$1 = state_20296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20296__$1,(11),inst_20261);
} else {
if((state_val_20297 === (17))){
var inst_20282 = (state_20296[(2)]);
var state_20296__$1 = state_20296;
if(cljs.core.truth_(inst_20282)){
var statearr_20307_20369 = state_20296__$1;
(statearr_20307_20369[(1)] = (19));

} else {
var statearr_20308_20370 = state_20296__$1;
(statearr_20308_20370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (3))){
var inst_20294 = (state_20296[(2)]);
var state_20296__$1 = state_20296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20296__$1,inst_20294);
} else {
if((state_val_20297 === (12))){
var inst_20271 = (state_20296[(10)]);
var state_20296__$1 = state_20296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20296__$1,(14),inst_20271);
} else {
if((state_val_20297 === (2))){
var state_20296__$1 = state_20296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20296__$1,(4),results);
} else {
if((state_val_20297 === (19))){
var state_20296__$1 = state_20296;
var statearr_20309_20371 = state_20296__$1;
(statearr_20309_20371[(2)] = null);

(statearr_20309_20371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (11))){
var inst_20271 = (state_20296[(2)]);
var state_20296__$1 = (function (){var statearr_20310 = state_20296;
(statearr_20310[(10)] = inst_20271);

return statearr_20310;
})();
var statearr_20311_20372 = state_20296__$1;
(statearr_20311_20372[(2)] = null);

(statearr_20311_20372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (9))){
var state_20296__$1 = state_20296;
var statearr_20312_20373 = state_20296__$1;
(statearr_20312_20373[(2)] = null);

(statearr_20312_20373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (5))){
var state_20296__$1 = state_20296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20313_20374 = state_20296__$1;
(statearr_20313_20374[(1)] = (8));

} else {
var statearr_20314_20375 = state_20296__$1;
(statearr_20314_20375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (14))){
var inst_20276 = (state_20296[(11)]);
var inst_20274 = (state_20296[(8)]);
var inst_20274__$1 = (state_20296[(2)]);
var inst_20275 = (inst_20274__$1 == null);
var inst_20276__$1 = cljs.core.not.call(null,inst_20275);
var state_20296__$1 = (function (){var statearr_20315 = state_20296;
(statearr_20315[(11)] = inst_20276__$1);

(statearr_20315[(8)] = inst_20274__$1);

return statearr_20315;
})();
if(inst_20276__$1){
var statearr_20316_20376 = state_20296__$1;
(statearr_20316_20376[(1)] = (15));

} else {
var statearr_20317_20377 = state_20296__$1;
(statearr_20317_20377[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (16))){
var inst_20276 = (state_20296[(11)]);
var state_20296__$1 = state_20296;
var statearr_20318_20378 = state_20296__$1;
(statearr_20318_20378[(2)] = inst_20276);

(statearr_20318_20378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (10))){
var inst_20268 = (state_20296[(2)]);
var state_20296__$1 = state_20296;
var statearr_20319_20379 = state_20296__$1;
(statearr_20319_20379[(2)] = inst_20268);

(statearr_20319_20379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (18))){
var inst_20279 = (state_20296[(2)]);
var state_20296__$1 = state_20296;
var statearr_20320_20380 = state_20296__$1;
(statearr_20320_20380[(2)] = inst_20279);

(statearr_20320_20380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20297 === (8))){
var inst_20265 = cljs.core.async.close_BANG_.call(null,to);
var state_20296__$1 = state_20296;
var statearr_20321_20381 = state_20296__$1;
(statearr_20321_20381[(2)] = inst_20265);

(statearr_20321_20381[(1)] = (10));


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
});})(c__19990__auto__,jobs,results,process,async))
;
return ((function (switch__19895__auto__,c__19990__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0 = (function (){
var statearr_20322 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__);

(statearr_20322[(1)] = (1));

return statearr_20322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1 = (function (state_20296){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20323){if((e20323 instanceof Object)){
var ex__19899__auto__ = e20323;
var statearr_20324_20382 = state_20296;
(statearr_20324_20382[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20383 = state_20296;
state_20296 = G__20383;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__ = function(state_20296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1.call(this,state_20296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19896__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto__,jobs,results,process,async))
})();
var state__19992__auto__ = (function (){var statearr_20325 = f__19991__auto__.call(null);
(statearr_20325[(6)] = c__19990__auto__);

return statearr_20325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto__,jobs,results,process,async))
);

return c__19990__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__20385 = arguments.length;
switch (G__20385) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__20388 = arguments.length;
switch (G__20388) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__20391 = arguments.length;
switch (G__20391) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19990__auto___20440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___20440,tc,fc){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___20440,tc,fc){
return (function (state_20417){
var state_val_20418 = (state_20417[(1)]);
if((state_val_20418 === (7))){
var inst_20413 = (state_20417[(2)]);
var state_20417__$1 = state_20417;
var statearr_20419_20441 = state_20417__$1;
(statearr_20419_20441[(2)] = inst_20413);

(statearr_20419_20441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (1))){
var state_20417__$1 = state_20417;
var statearr_20420_20442 = state_20417__$1;
(statearr_20420_20442[(2)] = null);

(statearr_20420_20442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (4))){
var inst_20394 = (state_20417[(7)]);
var inst_20394__$1 = (state_20417[(2)]);
var inst_20395 = (inst_20394__$1 == null);
var state_20417__$1 = (function (){var statearr_20421 = state_20417;
(statearr_20421[(7)] = inst_20394__$1);

return statearr_20421;
})();
if(cljs.core.truth_(inst_20395)){
var statearr_20422_20443 = state_20417__$1;
(statearr_20422_20443[(1)] = (5));

} else {
var statearr_20423_20444 = state_20417__$1;
(statearr_20423_20444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (13))){
var state_20417__$1 = state_20417;
var statearr_20424_20445 = state_20417__$1;
(statearr_20424_20445[(2)] = null);

(statearr_20424_20445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (6))){
var inst_20394 = (state_20417[(7)]);
var inst_20400 = p.call(null,inst_20394);
var state_20417__$1 = state_20417;
if(cljs.core.truth_(inst_20400)){
var statearr_20425_20446 = state_20417__$1;
(statearr_20425_20446[(1)] = (9));

} else {
var statearr_20426_20447 = state_20417__$1;
(statearr_20426_20447[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (3))){
var inst_20415 = (state_20417[(2)]);
var state_20417__$1 = state_20417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20417__$1,inst_20415);
} else {
if((state_val_20418 === (12))){
var state_20417__$1 = state_20417;
var statearr_20427_20448 = state_20417__$1;
(statearr_20427_20448[(2)] = null);

(statearr_20427_20448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (2))){
var state_20417__$1 = state_20417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20417__$1,(4),ch);
} else {
if((state_val_20418 === (11))){
var inst_20394 = (state_20417[(7)]);
var inst_20404 = (state_20417[(2)]);
var state_20417__$1 = state_20417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20417__$1,(8),inst_20404,inst_20394);
} else {
if((state_val_20418 === (9))){
var state_20417__$1 = state_20417;
var statearr_20428_20449 = state_20417__$1;
(statearr_20428_20449[(2)] = tc);

(statearr_20428_20449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (5))){
var inst_20397 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20398 = cljs.core.async.close_BANG_.call(null,fc);
var state_20417__$1 = (function (){var statearr_20429 = state_20417;
(statearr_20429[(8)] = inst_20397);

return statearr_20429;
})();
var statearr_20430_20450 = state_20417__$1;
(statearr_20430_20450[(2)] = inst_20398);

(statearr_20430_20450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (14))){
var inst_20411 = (state_20417[(2)]);
var state_20417__$1 = state_20417;
var statearr_20431_20451 = state_20417__$1;
(statearr_20431_20451[(2)] = inst_20411);

(statearr_20431_20451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (10))){
var state_20417__$1 = state_20417;
var statearr_20432_20452 = state_20417__$1;
(statearr_20432_20452[(2)] = fc);

(statearr_20432_20452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20418 === (8))){
var inst_20406 = (state_20417[(2)]);
var state_20417__$1 = state_20417;
if(cljs.core.truth_(inst_20406)){
var statearr_20433_20453 = state_20417__$1;
(statearr_20433_20453[(1)] = (12));

} else {
var statearr_20434_20454 = state_20417__$1;
(statearr_20434_20454[(1)] = (13));

}

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
});})(c__19990__auto___20440,tc,fc))
;
return ((function (switch__19895__auto__,c__19990__auto___20440,tc,fc){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_20435 = [null,null,null,null,null,null,null,null,null];
(statearr_20435[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_20435[(1)] = (1));

return statearr_20435;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_20417){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20436){if((e20436 instanceof Object)){
var ex__19899__auto__ = e20436;
var statearr_20437_20455 = state_20417;
(statearr_20437_20455[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20456 = state_20417;
state_20417 = G__20456;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_20417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_20417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___20440,tc,fc))
})();
var state__19992__auto__ = (function (){var statearr_20438 = f__19991__auto__.call(null);
(statearr_20438[(6)] = c__19990__auto___20440);

return statearr_20438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___20440,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto__){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto__){
return (function (state_20477){
var state_val_20478 = (state_20477[(1)]);
if((state_val_20478 === (7))){
var inst_20473 = (state_20477[(2)]);
var state_20477__$1 = state_20477;
var statearr_20479_20497 = state_20477__$1;
(statearr_20479_20497[(2)] = inst_20473);

(statearr_20479_20497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20478 === (1))){
var inst_20457 = init;
var state_20477__$1 = (function (){var statearr_20480 = state_20477;
(statearr_20480[(7)] = inst_20457);

return statearr_20480;
})();
var statearr_20481_20498 = state_20477__$1;
(statearr_20481_20498[(2)] = null);

(statearr_20481_20498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20478 === (4))){
var inst_20460 = (state_20477[(8)]);
var inst_20460__$1 = (state_20477[(2)]);
var inst_20461 = (inst_20460__$1 == null);
var state_20477__$1 = (function (){var statearr_20482 = state_20477;
(statearr_20482[(8)] = inst_20460__$1);

return statearr_20482;
})();
if(cljs.core.truth_(inst_20461)){
var statearr_20483_20499 = state_20477__$1;
(statearr_20483_20499[(1)] = (5));

} else {
var statearr_20484_20500 = state_20477__$1;
(statearr_20484_20500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20478 === (6))){
var inst_20464 = (state_20477[(9)]);
var inst_20460 = (state_20477[(8)]);
var inst_20457 = (state_20477[(7)]);
var inst_20464__$1 = f.call(null,inst_20457,inst_20460);
var inst_20465 = cljs.core.reduced_QMARK_.call(null,inst_20464__$1);
var state_20477__$1 = (function (){var statearr_20485 = state_20477;
(statearr_20485[(9)] = inst_20464__$1);

return statearr_20485;
})();
if(inst_20465){
var statearr_20486_20501 = state_20477__$1;
(statearr_20486_20501[(1)] = (8));

} else {
var statearr_20487_20502 = state_20477__$1;
(statearr_20487_20502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20478 === (3))){
var inst_20475 = (state_20477[(2)]);
var state_20477__$1 = state_20477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20477__$1,inst_20475);
} else {
if((state_val_20478 === (2))){
var state_20477__$1 = state_20477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20477__$1,(4),ch);
} else {
if((state_val_20478 === (9))){
var inst_20464 = (state_20477[(9)]);
var inst_20457 = inst_20464;
var state_20477__$1 = (function (){var statearr_20488 = state_20477;
(statearr_20488[(7)] = inst_20457);

return statearr_20488;
})();
var statearr_20489_20503 = state_20477__$1;
(statearr_20489_20503[(2)] = null);

(statearr_20489_20503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20478 === (5))){
var inst_20457 = (state_20477[(7)]);
var state_20477__$1 = state_20477;
var statearr_20490_20504 = state_20477__$1;
(statearr_20490_20504[(2)] = inst_20457);

(statearr_20490_20504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20478 === (10))){
var inst_20471 = (state_20477[(2)]);
var state_20477__$1 = state_20477;
var statearr_20491_20505 = state_20477__$1;
(statearr_20491_20505[(2)] = inst_20471);

(statearr_20491_20505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20478 === (8))){
var inst_20464 = (state_20477[(9)]);
var inst_20467 = cljs.core.deref.call(null,inst_20464);
var state_20477__$1 = state_20477;
var statearr_20492_20506 = state_20477__$1;
(statearr_20492_20506[(2)] = inst_20467);

(statearr_20492_20506[(1)] = (10));


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
});})(c__19990__auto__))
;
return ((function (switch__19895__auto__,c__19990__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19896__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19896__auto____0 = (function (){
var statearr_20493 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20493[(0)] = cljs$core$async$reduce_$_state_machine__19896__auto__);

(statearr_20493[(1)] = (1));

return statearr_20493;
});
var cljs$core$async$reduce_$_state_machine__19896__auto____1 = (function (state_20477){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20494){if((e20494 instanceof Object)){
var ex__19899__auto__ = e20494;
var statearr_20495_20507 = state_20477;
(statearr_20495_20507[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20508 = state_20477;
state_20477 = G__20508;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19896__auto__ = function(state_20477){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19896__auto____1.call(this,state_20477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19896__auto____0;
cljs$core$async$reduce_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19896__auto____1;
return cljs$core$async$reduce_$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto__))
})();
var state__19992__auto__ = (function (){var statearr_20496 = f__19991__auto__.call(null);
(statearr_20496[(6)] = c__19990__auto__);

return statearr_20496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto__))
);

return c__19990__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto__,f__$1){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto__,f__$1){
return (function (state_20514){
var state_val_20515 = (state_20514[(1)]);
if((state_val_20515 === (1))){
var inst_20509 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_20514__$1 = state_20514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20514__$1,(2),inst_20509);
} else {
if((state_val_20515 === (2))){
var inst_20511 = (state_20514[(2)]);
var inst_20512 = f__$1.call(null,inst_20511);
var state_20514__$1 = state_20514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20514__$1,inst_20512);
} else {
return null;
}
}
});})(c__19990__auto__,f__$1))
;
return ((function (switch__19895__auto__,c__19990__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19896__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19896__auto____0 = (function (){
var statearr_20516 = [null,null,null,null,null,null,null];
(statearr_20516[(0)] = cljs$core$async$transduce_$_state_machine__19896__auto__);

(statearr_20516[(1)] = (1));

return statearr_20516;
});
var cljs$core$async$transduce_$_state_machine__19896__auto____1 = (function (state_20514){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20517){if((e20517 instanceof Object)){
var ex__19899__auto__ = e20517;
var statearr_20518_20520 = state_20514;
(statearr_20518_20520[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20521 = state_20514;
state_20514 = G__20521;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19896__auto__ = function(state_20514){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19896__auto____1.call(this,state_20514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19896__auto____0;
cljs$core$async$transduce_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19896__auto____1;
return cljs$core$async$transduce_$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto__,f__$1))
})();
var state__19992__auto__ = (function (){var statearr_20519 = f__19991__auto__.call(null);
(statearr_20519[(6)] = c__19990__auto__);

return statearr_20519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto__,f__$1))
);

return c__19990__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__20523 = arguments.length;
switch (G__20523) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto__){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto__){
return (function (state_20548){
var state_val_20549 = (state_20548[(1)]);
if((state_val_20549 === (7))){
var inst_20530 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
var statearr_20550_20571 = state_20548__$1;
(statearr_20550_20571[(2)] = inst_20530);

(statearr_20550_20571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (1))){
var inst_20524 = cljs.core.seq.call(null,coll);
var inst_20525 = inst_20524;
var state_20548__$1 = (function (){var statearr_20551 = state_20548;
(statearr_20551[(7)] = inst_20525);

return statearr_20551;
})();
var statearr_20552_20572 = state_20548__$1;
(statearr_20552_20572[(2)] = null);

(statearr_20552_20572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (4))){
var inst_20525 = (state_20548[(7)]);
var inst_20528 = cljs.core.first.call(null,inst_20525);
var state_20548__$1 = state_20548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20548__$1,(7),ch,inst_20528);
} else {
if((state_val_20549 === (13))){
var inst_20542 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
var statearr_20553_20573 = state_20548__$1;
(statearr_20553_20573[(2)] = inst_20542);

(statearr_20553_20573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (6))){
var inst_20533 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
if(cljs.core.truth_(inst_20533)){
var statearr_20554_20574 = state_20548__$1;
(statearr_20554_20574[(1)] = (8));

} else {
var statearr_20555_20575 = state_20548__$1;
(statearr_20555_20575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (3))){
var inst_20546 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20548__$1,inst_20546);
} else {
if((state_val_20549 === (12))){
var state_20548__$1 = state_20548;
var statearr_20556_20576 = state_20548__$1;
(statearr_20556_20576[(2)] = null);

(statearr_20556_20576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (2))){
var inst_20525 = (state_20548[(7)]);
var state_20548__$1 = state_20548;
if(cljs.core.truth_(inst_20525)){
var statearr_20557_20577 = state_20548__$1;
(statearr_20557_20577[(1)] = (4));

} else {
var statearr_20558_20578 = state_20548__$1;
(statearr_20558_20578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (11))){
var inst_20539 = cljs.core.async.close_BANG_.call(null,ch);
var state_20548__$1 = state_20548;
var statearr_20559_20579 = state_20548__$1;
(statearr_20559_20579[(2)] = inst_20539);

(statearr_20559_20579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (9))){
var state_20548__$1 = state_20548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20560_20580 = state_20548__$1;
(statearr_20560_20580[(1)] = (11));

} else {
var statearr_20561_20581 = state_20548__$1;
(statearr_20561_20581[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (5))){
var inst_20525 = (state_20548[(7)]);
var state_20548__$1 = state_20548;
var statearr_20562_20582 = state_20548__$1;
(statearr_20562_20582[(2)] = inst_20525);

(statearr_20562_20582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (10))){
var inst_20544 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
var statearr_20563_20583 = state_20548__$1;
(statearr_20563_20583[(2)] = inst_20544);

(statearr_20563_20583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20549 === (8))){
var inst_20525 = (state_20548[(7)]);
var inst_20535 = cljs.core.next.call(null,inst_20525);
var inst_20525__$1 = inst_20535;
var state_20548__$1 = (function (){var statearr_20564 = state_20548;
(statearr_20564[(7)] = inst_20525__$1);

return statearr_20564;
})();
var statearr_20565_20584 = state_20548__$1;
(statearr_20565_20584[(2)] = null);

(statearr_20565_20584[(1)] = (2));


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
});})(c__19990__auto__))
;
return ((function (switch__19895__auto__,c__19990__auto__){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_20566 = [null,null,null,null,null,null,null,null];
(statearr_20566[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_20566[(1)] = (1));

return statearr_20566;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_20548){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20567){if((e20567 instanceof Object)){
var ex__19899__auto__ = e20567;
var statearr_20568_20585 = state_20548;
(statearr_20568_20585[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20586 = state_20548;
state_20548 = G__20586;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_20548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_20548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto__))
})();
var state__19992__auto__ = (function (){var statearr_20569 = f__19991__auto__.call(null);
(statearr_20569[(6)] = c__19990__auto__);

return statearr_20569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto__))
);

return c__19990__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20587 = (function (ch,cs,meta20588){
this.ch = ch;
this.cs = cs;
this.meta20588 = meta20588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20589,meta20588__$1){
var self__ = this;
var _20589__$1 = this;
return (new cljs.core.async.t_cljs$core$async20587(self__.ch,self__.cs,meta20588__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20589){
var self__ = this;
var _20589__$1 = this;
return self__.meta20588;
});})(cs))
;

cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20587.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20587.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20588","meta20588",639978302,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20587";

cljs.core.async.t_cljs$core$async20587.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20587");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20587.
 */
cljs.core.async.__GT_t_cljs$core$async20587 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20587(ch__$1,cs__$1,meta20588){
return (new cljs.core.async.t_cljs$core$async20587(ch__$1,cs__$1,meta20588));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20587(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19990__auto___20809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___20809,cs,m,dchan,dctr,done){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___20809,cs,m,dchan,dctr,done){
return (function (state_20724){
var state_val_20725 = (state_20724[(1)]);
if((state_val_20725 === (7))){
var inst_20720 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20726_20810 = state_20724__$1;
(statearr_20726_20810[(2)] = inst_20720);

(statearr_20726_20810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (20))){
var inst_20623 = (state_20724[(7)]);
var inst_20635 = cljs.core.first.call(null,inst_20623);
var inst_20636 = cljs.core.nth.call(null,inst_20635,(0),null);
var inst_20637 = cljs.core.nth.call(null,inst_20635,(1),null);
var state_20724__$1 = (function (){var statearr_20727 = state_20724;
(statearr_20727[(8)] = inst_20636);

return statearr_20727;
})();
if(cljs.core.truth_(inst_20637)){
var statearr_20728_20811 = state_20724__$1;
(statearr_20728_20811[(1)] = (22));

} else {
var statearr_20729_20812 = state_20724__$1;
(statearr_20729_20812[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (27))){
var inst_20592 = (state_20724[(9)]);
var inst_20665 = (state_20724[(10)]);
var inst_20672 = (state_20724[(11)]);
var inst_20667 = (state_20724[(12)]);
var inst_20672__$1 = cljs.core._nth.call(null,inst_20665,inst_20667);
var inst_20673 = cljs.core.async.put_BANG_.call(null,inst_20672__$1,inst_20592,done);
var state_20724__$1 = (function (){var statearr_20730 = state_20724;
(statearr_20730[(11)] = inst_20672__$1);

return statearr_20730;
})();
if(cljs.core.truth_(inst_20673)){
var statearr_20731_20813 = state_20724__$1;
(statearr_20731_20813[(1)] = (30));

} else {
var statearr_20732_20814 = state_20724__$1;
(statearr_20732_20814[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (1))){
var state_20724__$1 = state_20724;
var statearr_20733_20815 = state_20724__$1;
(statearr_20733_20815[(2)] = null);

(statearr_20733_20815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (24))){
var inst_20623 = (state_20724[(7)]);
var inst_20642 = (state_20724[(2)]);
var inst_20643 = cljs.core.next.call(null,inst_20623);
var inst_20601 = inst_20643;
var inst_20602 = null;
var inst_20603 = (0);
var inst_20604 = (0);
var state_20724__$1 = (function (){var statearr_20734 = state_20724;
(statearr_20734[(13)] = inst_20603);

(statearr_20734[(14)] = inst_20604);

(statearr_20734[(15)] = inst_20642);

(statearr_20734[(16)] = inst_20601);

(statearr_20734[(17)] = inst_20602);

return statearr_20734;
})();
var statearr_20735_20816 = state_20724__$1;
(statearr_20735_20816[(2)] = null);

(statearr_20735_20816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (39))){
var state_20724__$1 = state_20724;
var statearr_20739_20817 = state_20724__$1;
(statearr_20739_20817[(2)] = null);

(statearr_20739_20817[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (4))){
var inst_20592 = (state_20724[(9)]);
var inst_20592__$1 = (state_20724[(2)]);
var inst_20593 = (inst_20592__$1 == null);
var state_20724__$1 = (function (){var statearr_20740 = state_20724;
(statearr_20740[(9)] = inst_20592__$1);

return statearr_20740;
})();
if(cljs.core.truth_(inst_20593)){
var statearr_20741_20818 = state_20724__$1;
(statearr_20741_20818[(1)] = (5));

} else {
var statearr_20742_20819 = state_20724__$1;
(statearr_20742_20819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (15))){
var inst_20603 = (state_20724[(13)]);
var inst_20604 = (state_20724[(14)]);
var inst_20601 = (state_20724[(16)]);
var inst_20602 = (state_20724[(17)]);
var inst_20619 = (state_20724[(2)]);
var inst_20620 = (inst_20604 + (1));
var tmp20736 = inst_20603;
var tmp20737 = inst_20601;
var tmp20738 = inst_20602;
var inst_20601__$1 = tmp20737;
var inst_20602__$1 = tmp20738;
var inst_20603__$1 = tmp20736;
var inst_20604__$1 = inst_20620;
var state_20724__$1 = (function (){var statearr_20743 = state_20724;
(statearr_20743[(18)] = inst_20619);

(statearr_20743[(13)] = inst_20603__$1);

(statearr_20743[(14)] = inst_20604__$1);

(statearr_20743[(16)] = inst_20601__$1);

(statearr_20743[(17)] = inst_20602__$1);

return statearr_20743;
})();
var statearr_20744_20820 = state_20724__$1;
(statearr_20744_20820[(2)] = null);

(statearr_20744_20820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (21))){
var inst_20646 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20748_20821 = state_20724__$1;
(statearr_20748_20821[(2)] = inst_20646);

(statearr_20748_20821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (31))){
var inst_20672 = (state_20724[(11)]);
var inst_20676 = done.call(null,null);
var inst_20677 = cljs.core.async.untap_STAR_.call(null,m,inst_20672);
var state_20724__$1 = (function (){var statearr_20749 = state_20724;
(statearr_20749[(19)] = inst_20676);

return statearr_20749;
})();
var statearr_20750_20822 = state_20724__$1;
(statearr_20750_20822[(2)] = inst_20677);

(statearr_20750_20822[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (32))){
var inst_20665 = (state_20724[(10)]);
var inst_20664 = (state_20724[(20)]);
var inst_20666 = (state_20724[(21)]);
var inst_20667 = (state_20724[(12)]);
var inst_20679 = (state_20724[(2)]);
var inst_20680 = (inst_20667 + (1));
var tmp20745 = inst_20665;
var tmp20746 = inst_20664;
var tmp20747 = inst_20666;
var inst_20664__$1 = tmp20746;
var inst_20665__$1 = tmp20745;
var inst_20666__$1 = tmp20747;
var inst_20667__$1 = inst_20680;
var state_20724__$1 = (function (){var statearr_20751 = state_20724;
(statearr_20751[(10)] = inst_20665__$1);

(statearr_20751[(20)] = inst_20664__$1);

(statearr_20751[(22)] = inst_20679);

(statearr_20751[(21)] = inst_20666__$1);

(statearr_20751[(12)] = inst_20667__$1);

return statearr_20751;
})();
var statearr_20752_20823 = state_20724__$1;
(statearr_20752_20823[(2)] = null);

(statearr_20752_20823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (40))){
var inst_20692 = (state_20724[(23)]);
var inst_20696 = done.call(null,null);
var inst_20697 = cljs.core.async.untap_STAR_.call(null,m,inst_20692);
var state_20724__$1 = (function (){var statearr_20753 = state_20724;
(statearr_20753[(24)] = inst_20696);

return statearr_20753;
})();
var statearr_20754_20824 = state_20724__$1;
(statearr_20754_20824[(2)] = inst_20697);

(statearr_20754_20824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (33))){
var inst_20683 = (state_20724[(25)]);
var inst_20685 = cljs.core.chunked_seq_QMARK_.call(null,inst_20683);
var state_20724__$1 = state_20724;
if(inst_20685){
var statearr_20755_20825 = state_20724__$1;
(statearr_20755_20825[(1)] = (36));

} else {
var statearr_20756_20826 = state_20724__$1;
(statearr_20756_20826[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (13))){
var inst_20613 = (state_20724[(26)]);
var inst_20616 = cljs.core.async.close_BANG_.call(null,inst_20613);
var state_20724__$1 = state_20724;
var statearr_20757_20827 = state_20724__$1;
(statearr_20757_20827[(2)] = inst_20616);

(statearr_20757_20827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (22))){
var inst_20636 = (state_20724[(8)]);
var inst_20639 = cljs.core.async.close_BANG_.call(null,inst_20636);
var state_20724__$1 = state_20724;
var statearr_20758_20828 = state_20724__$1;
(statearr_20758_20828[(2)] = inst_20639);

(statearr_20758_20828[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (36))){
var inst_20683 = (state_20724[(25)]);
var inst_20687 = cljs.core.chunk_first.call(null,inst_20683);
var inst_20688 = cljs.core.chunk_rest.call(null,inst_20683);
var inst_20689 = cljs.core.count.call(null,inst_20687);
var inst_20664 = inst_20688;
var inst_20665 = inst_20687;
var inst_20666 = inst_20689;
var inst_20667 = (0);
var state_20724__$1 = (function (){var statearr_20759 = state_20724;
(statearr_20759[(10)] = inst_20665);

(statearr_20759[(20)] = inst_20664);

(statearr_20759[(21)] = inst_20666);

(statearr_20759[(12)] = inst_20667);

return statearr_20759;
})();
var statearr_20760_20829 = state_20724__$1;
(statearr_20760_20829[(2)] = null);

(statearr_20760_20829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (41))){
var inst_20683 = (state_20724[(25)]);
var inst_20699 = (state_20724[(2)]);
var inst_20700 = cljs.core.next.call(null,inst_20683);
var inst_20664 = inst_20700;
var inst_20665 = null;
var inst_20666 = (0);
var inst_20667 = (0);
var state_20724__$1 = (function (){var statearr_20761 = state_20724;
(statearr_20761[(10)] = inst_20665);

(statearr_20761[(20)] = inst_20664);

(statearr_20761[(21)] = inst_20666);

(statearr_20761[(12)] = inst_20667);

(statearr_20761[(27)] = inst_20699);

return statearr_20761;
})();
var statearr_20762_20830 = state_20724__$1;
(statearr_20762_20830[(2)] = null);

(statearr_20762_20830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (43))){
var state_20724__$1 = state_20724;
var statearr_20763_20831 = state_20724__$1;
(statearr_20763_20831[(2)] = null);

(statearr_20763_20831[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (29))){
var inst_20708 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20764_20832 = state_20724__$1;
(statearr_20764_20832[(2)] = inst_20708);

(statearr_20764_20832[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (44))){
var inst_20717 = (state_20724[(2)]);
var state_20724__$1 = (function (){var statearr_20765 = state_20724;
(statearr_20765[(28)] = inst_20717);

return statearr_20765;
})();
var statearr_20766_20833 = state_20724__$1;
(statearr_20766_20833[(2)] = null);

(statearr_20766_20833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (6))){
var inst_20656 = (state_20724[(29)]);
var inst_20655 = cljs.core.deref.call(null,cs);
var inst_20656__$1 = cljs.core.keys.call(null,inst_20655);
var inst_20657 = cljs.core.count.call(null,inst_20656__$1);
var inst_20658 = cljs.core.reset_BANG_.call(null,dctr,inst_20657);
var inst_20663 = cljs.core.seq.call(null,inst_20656__$1);
var inst_20664 = inst_20663;
var inst_20665 = null;
var inst_20666 = (0);
var inst_20667 = (0);
var state_20724__$1 = (function (){var statearr_20767 = state_20724;
(statearr_20767[(10)] = inst_20665);

(statearr_20767[(20)] = inst_20664);

(statearr_20767[(29)] = inst_20656__$1);

(statearr_20767[(30)] = inst_20658);

(statearr_20767[(21)] = inst_20666);

(statearr_20767[(12)] = inst_20667);

return statearr_20767;
})();
var statearr_20768_20834 = state_20724__$1;
(statearr_20768_20834[(2)] = null);

(statearr_20768_20834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (28))){
var inst_20664 = (state_20724[(20)]);
var inst_20683 = (state_20724[(25)]);
var inst_20683__$1 = cljs.core.seq.call(null,inst_20664);
var state_20724__$1 = (function (){var statearr_20769 = state_20724;
(statearr_20769[(25)] = inst_20683__$1);

return statearr_20769;
})();
if(inst_20683__$1){
var statearr_20770_20835 = state_20724__$1;
(statearr_20770_20835[(1)] = (33));

} else {
var statearr_20771_20836 = state_20724__$1;
(statearr_20771_20836[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (25))){
var inst_20666 = (state_20724[(21)]);
var inst_20667 = (state_20724[(12)]);
var inst_20669 = (inst_20667 < inst_20666);
var inst_20670 = inst_20669;
var state_20724__$1 = state_20724;
if(cljs.core.truth_(inst_20670)){
var statearr_20772_20837 = state_20724__$1;
(statearr_20772_20837[(1)] = (27));

} else {
var statearr_20773_20838 = state_20724__$1;
(statearr_20773_20838[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (34))){
var state_20724__$1 = state_20724;
var statearr_20774_20839 = state_20724__$1;
(statearr_20774_20839[(2)] = null);

(statearr_20774_20839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (17))){
var state_20724__$1 = state_20724;
var statearr_20775_20840 = state_20724__$1;
(statearr_20775_20840[(2)] = null);

(statearr_20775_20840[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (3))){
var inst_20722 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20724__$1,inst_20722);
} else {
if((state_val_20725 === (12))){
var inst_20651 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20776_20841 = state_20724__$1;
(statearr_20776_20841[(2)] = inst_20651);

(statearr_20776_20841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (2))){
var state_20724__$1 = state_20724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20724__$1,(4),ch);
} else {
if((state_val_20725 === (23))){
var state_20724__$1 = state_20724;
var statearr_20777_20842 = state_20724__$1;
(statearr_20777_20842[(2)] = null);

(statearr_20777_20842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (35))){
var inst_20706 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20778_20843 = state_20724__$1;
(statearr_20778_20843[(2)] = inst_20706);

(statearr_20778_20843[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (19))){
var inst_20623 = (state_20724[(7)]);
var inst_20627 = cljs.core.chunk_first.call(null,inst_20623);
var inst_20628 = cljs.core.chunk_rest.call(null,inst_20623);
var inst_20629 = cljs.core.count.call(null,inst_20627);
var inst_20601 = inst_20628;
var inst_20602 = inst_20627;
var inst_20603 = inst_20629;
var inst_20604 = (0);
var state_20724__$1 = (function (){var statearr_20779 = state_20724;
(statearr_20779[(13)] = inst_20603);

(statearr_20779[(14)] = inst_20604);

(statearr_20779[(16)] = inst_20601);

(statearr_20779[(17)] = inst_20602);

return statearr_20779;
})();
var statearr_20780_20844 = state_20724__$1;
(statearr_20780_20844[(2)] = null);

(statearr_20780_20844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (11))){
var inst_20623 = (state_20724[(7)]);
var inst_20601 = (state_20724[(16)]);
var inst_20623__$1 = cljs.core.seq.call(null,inst_20601);
var state_20724__$1 = (function (){var statearr_20781 = state_20724;
(statearr_20781[(7)] = inst_20623__$1);

return statearr_20781;
})();
if(inst_20623__$1){
var statearr_20782_20845 = state_20724__$1;
(statearr_20782_20845[(1)] = (16));

} else {
var statearr_20783_20846 = state_20724__$1;
(statearr_20783_20846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (9))){
var inst_20653 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20784_20847 = state_20724__$1;
(statearr_20784_20847[(2)] = inst_20653);

(statearr_20784_20847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (5))){
var inst_20599 = cljs.core.deref.call(null,cs);
var inst_20600 = cljs.core.seq.call(null,inst_20599);
var inst_20601 = inst_20600;
var inst_20602 = null;
var inst_20603 = (0);
var inst_20604 = (0);
var state_20724__$1 = (function (){var statearr_20785 = state_20724;
(statearr_20785[(13)] = inst_20603);

(statearr_20785[(14)] = inst_20604);

(statearr_20785[(16)] = inst_20601);

(statearr_20785[(17)] = inst_20602);

return statearr_20785;
})();
var statearr_20786_20848 = state_20724__$1;
(statearr_20786_20848[(2)] = null);

(statearr_20786_20848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (14))){
var state_20724__$1 = state_20724;
var statearr_20787_20849 = state_20724__$1;
(statearr_20787_20849[(2)] = null);

(statearr_20787_20849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (45))){
var inst_20714 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20788_20850 = state_20724__$1;
(statearr_20788_20850[(2)] = inst_20714);

(statearr_20788_20850[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (26))){
var inst_20656 = (state_20724[(29)]);
var inst_20710 = (state_20724[(2)]);
var inst_20711 = cljs.core.seq.call(null,inst_20656);
var state_20724__$1 = (function (){var statearr_20789 = state_20724;
(statearr_20789[(31)] = inst_20710);

return statearr_20789;
})();
if(inst_20711){
var statearr_20790_20851 = state_20724__$1;
(statearr_20790_20851[(1)] = (42));

} else {
var statearr_20791_20852 = state_20724__$1;
(statearr_20791_20852[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (16))){
var inst_20623 = (state_20724[(7)]);
var inst_20625 = cljs.core.chunked_seq_QMARK_.call(null,inst_20623);
var state_20724__$1 = state_20724;
if(inst_20625){
var statearr_20792_20853 = state_20724__$1;
(statearr_20792_20853[(1)] = (19));

} else {
var statearr_20793_20854 = state_20724__$1;
(statearr_20793_20854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (38))){
var inst_20703 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20794_20855 = state_20724__$1;
(statearr_20794_20855[(2)] = inst_20703);

(statearr_20794_20855[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (30))){
var state_20724__$1 = state_20724;
var statearr_20795_20856 = state_20724__$1;
(statearr_20795_20856[(2)] = null);

(statearr_20795_20856[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (10))){
var inst_20604 = (state_20724[(14)]);
var inst_20602 = (state_20724[(17)]);
var inst_20612 = cljs.core._nth.call(null,inst_20602,inst_20604);
var inst_20613 = cljs.core.nth.call(null,inst_20612,(0),null);
var inst_20614 = cljs.core.nth.call(null,inst_20612,(1),null);
var state_20724__$1 = (function (){var statearr_20796 = state_20724;
(statearr_20796[(26)] = inst_20613);

return statearr_20796;
})();
if(cljs.core.truth_(inst_20614)){
var statearr_20797_20857 = state_20724__$1;
(statearr_20797_20857[(1)] = (13));

} else {
var statearr_20798_20858 = state_20724__$1;
(statearr_20798_20858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (18))){
var inst_20649 = (state_20724[(2)]);
var state_20724__$1 = state_20724;
var statearr_20799_20859 = state_20724__$1;
(statearr_20799_20859[(2)] = inst_20649);

(statearr_20799_20859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (42))){
var state_20724__$1 = state_20724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20724__$1,(45),dchan);
} else {
if((state_val_20725 === (37))){
var inst_20592 = (state_20724[(9)]);
var inst_20692 = (state_20724[(23)]);
var inst_20683 = (state_20724[(25)]);
var inst_20692__$1 = cljs.core.first.call(null,inst_20683);
var inst_20693 = cljs.core.async.put_BANG_.call(null,inst_20692__$1,inst_20592,done);
var state_20724__$1 = (function (){var statearr_20800 = state_20724;
(statearr_20800[(23)] = inst_20692__$1);

return statearr_20800;
})();
if(cljs.core.truth_(inst_20693)){
var statearr_20801_20860 = state_20724__$1;
(statearr_20801_20860[(1)] = (39));

} else {
var statearr_20802_20861 = state_20724__$1;
(statearr_20802_20861[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20725 === (8))){
var inst_20603 = (state_20724[(13)]);
var inst_20604 = (state_20724[(14)]);
var inst_20606 = (inst_20604 < inst_20603);
var inst_20607 = inst_20606;
var state_20724__$1 = state_20724;
if(cljs.core.truth_(inst_20607)){
var statearr_20803_20862 = state_20724__$1;
(statearr_20803_20862[(1)] = (10));

} else {
var statearr_20804_20863 = state_20724__$1;
(statearr_20804_20863[(1)] = (11));

}

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
});})(c__19990__auto___20809,cs,m,dchan,dctr,done))
;
return ((function (switch__19895__auto__,c__19990__auto___20809,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19896__auto__ = null;
var cljs$core$async$mult_$_state_machine__19896__auto____0 = (function (){
var statearr_20805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20805[(0)] = cljs$core$async$mult_$_state_machine__19896__auto__);

(statearr_20805[(1)] = (1));

return statearr_20805;
});
var cljs$core$async$mult_$_state_machine__19896__auto____1 = (function (state_20724){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e20806){if((e20806 instanceof Object)){
var ex__19899__auto__ = e20806;
var statearr_20807_20864 = state_20724;
(statearr_20807_20864[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20865 = state_20724;
state_20724 = G__20865;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19896__auto__ = function(state_20724){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19896__auto____1.call(this,state_20724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19896__auto____0;
cljs$core$async$mult_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19896__auto____1;
return cljs$core$async$mult_$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___20809,cs,m,dchan,dctr,done))
})();
var state__19992__auto__ = (function (){var statearr_20808 = f__19991__auto__.call(null);
(statearr_20808[(6)] = c__19990__auto___20809);

return statearr_20808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___20809,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__20867 = arguments.length;
switch (G__20867) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20879 = arguments.length;
var i__4731__auto___20880 = (0);
while(true){
if((i__4731__auto___20880 < len__4730__auto___20879)){
args__4736__auto__.push((arguments[i__4731__auto___20880]));

var G__20881 = (i__4731__auto___20880 + (1));
i__4731__auto___20880 = G__20881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20873){
var map__20874 = p__20873;
var map__20874__$1 = (((((!((map__20874 == null))))?(((((map__20874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20874):map__20874);
var opts = map__20874__$1;
var statearr_20876_20882 = state;
(statearr_20876_20882[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__20874,map__20874__$1,opts){
return (function (val){
var statearr_20877_20883 = state;
(statearr_20877_20883[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20874,map__20874__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_20878_20884 = state;
(statearr_20878_20884[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20869){
var G__20870 = cljs.core.first.call(null,seq20869);
var seq20869__$1 = cljs.core.next.call(null,seq20869);
var G__20871 = cljs.core.first.call(null,seq20869__$1);
var seq20869__$2 = cljs.core.next.call(null,seq20869__$1);
var G__20872 = cljs.core.first.call(null,seq20869__$2);
var seq20869__$3 = cljs.core.next.call(null,seq20869__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20870,G__20871,G__20872,seq20869__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20885 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20886){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20886 = meta20886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20887,meta20886__$1){
var self__ = this;
var _20887__$1 = this;
return (new cljs.core.async.t_cljs$core$async20885(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20886__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20887){
var self__ = this;
var _20887__$1 = this;
return self__.meta20886;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20886","meta20886",998622898,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20885";

cljs.core.async.t_cljs$core$async20885.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20885");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20885.
 */
cljs.core.async.__GT_t_cljs$core$async20885 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20885(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20886){
return (new cljs.core.async.t_cljs$core$async20885(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20886));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20885(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19990__auto___21049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20989){
var state_val_20990 = (state_20989[(1)]);
if((state_val_20990 === (7))){
var inst_20904 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
var statearr_20991_21050 = state_20989__$1;
(statearr_20991_21050[(2)] = inst_20904);

(statearr_20991_21050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (20))){
var inst_20916 = (state_20989[(7)]);
var state_20989__$1 = state_20989;
var statearr_20992_21051 = state_20989__$1;
(statearr_20992_21051[(2)] = inst_20916);

(statearr_20992_21051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (27))){
var state_20989__$1 = state_20989;
var statearr_20993_21052 = state_20989__$1;
(statearr_20993_21052[(2)] = null);

(statearr_20993_21052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (1))){
var inst_20891 = (state_20989[(8)]);
var inst_20891__$1 = calc_state.call(null);
var inst_20893 = (inst_20891__$1 == null);
var inst_20894 = cljs.core.not.call(null,inst_20893);
var state_20989__$1 = (function (){var statearr_20994 = state_20989;
(statearr_20994[(8)] = inst_20891__$1);

return statearr_20994;
})();
if(inst_20894){
var statearr_20995_21053 = state_20989__$1;
(statearr_20995_21053[(1)] = (2));

} else {
var statearr_20996_21054 = state_20989__$1;
(statearr_20996_21054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (24))){
var inst_20940 = (state_20989[(9)]);
var inst_20963 = (state_20989[(10)]);
var inst_20949 = (state_20989[(11)]);
var inst_20963__$1 = inst_20940.call(null,inst_20949);
var state_20989__$1 = (function (){var statearr_20997 = state_20989;
(statearr_20997[(10)] = inst_20963__$1);

return statearr_20997;
})();
if(cljs.core.truth_(inst_20963__$1)){
var statearr_20998_21055 = state_20989__$1;
(statearr_20998_21055[(1)] = (29));

} else {
var statearr_20999_21056 = state_20989__$1;
(statearr_20999_21056[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (4))){
var inst_20907 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
if(cljs.core.truth_(inst_20907)){
var statearr_21000_21057 = state_20989__$1;
(statearr_21000_21057[(1)] = (8));

} else {
var statearr_21001_21058 = state_20989__$1;
(statearr_21001_21058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (15))){
var inst_20934 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
if(cljs.core.truth_(inst_20934)){
var statearr_21002_21059 = state_20989__$1;
(statearr_21002_21059[(1)] = (19));

} else {
var statearr_21003_21060 = state_20989__$1;
(statearr_21003_21060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (21))){
var inst_20939 = (state_20989[(12)]);
var inst_20939__$1 = (state_20989[(2)]);
var inst_20940 = cljs.core.get.call(null,inst_20939__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20941 = cljs.core.get.call(null,inst_20939__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20942 = cljs.core.get.call(null,inst_20939__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20989__$1 = (function (){var statearr_21004 = state_20989;
(statearr_21004[(13)] = inst_20941);

(statearr_21004[(9)] = inst_20940);

(statearr_21004[(12)] = inst_20939__$1);

return statearr_21004;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20989__$1,(22),inst_20942);
} else {
if((state_val_20990 === (31))){
var inst_20971 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
if(cljs.core.truth_(inst_20971)){
var statearr_21005_21061 = state_20989__$1;
(statearr_21005_21061[(1)] = (32));

} else {
var statearr_21006_21062 = state_20989__$1;
(statearr_21006_21062[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (32))){
var inst_20948 = (state_20989[(14)]);
var state_20989__$1 = state_20989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20989__$1,(35),out,inst_20948);
} else {
if((state_val_20990 === (33))){
var inst_20939 = (state_20989[(12)]);
var inst_20916 = inst_20939;
var state_20989__$1 = (function (){var statearr_21007 = state_20989;
(statearr_21007[(7)] = inst_20916);

return statearr_21007;
})();
var statearr_21008_21063 = state_20989__$1;
(statearr_21008_21063[(2)] = null);

(statearr_21008_21063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (13))){
var inst_20916 = (state_20989[(7)]);
var inst_20923 = inst_20916.cljs$lang$protocol_mask$partition0$;
var inst_20924 = (inst_20923 & (64));
var inst_20925 = inst_20916.cljs$core$ISeq$;
var inst_20926 = (cljs.core.PROTOCOL_SENTINEL === inst_20925);
var inst_20927 = ((inst_20924) || (inst_20926));
var state_20989__$1 = state_20989;
if(cljs.core.truth_(inst_20927)){
var statearr_21009_21064 = state_20989__$1;
(statearr_21009_21064[(1)] = (16));

} else {
var statearr_21010_21065 = state_20989__$1;
(statearr_21010_21065[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (22))){
var inst_20948 = (state_20989[(14)]);
var inst_20949 = (state_20989[(11)]);
var inst_20947 = (state_20989[(2)]);
var inst_20948__$1 = cljs.core.nth.call(null,inst_20947,(0),null);
var inst_20949__$1 = cljs.core.nth.call(null,inst_20947,(1),null);
var inst_20950 = (inst_20948__$1 == null);
var inst_20951 = cljs.core._EQ_.call(null,inst_20949__$1,change);
var inst_20952 = ((inst_20950) || (inst_20951));
var state_20989__$1 = (function (){var statearr_21011 = state_20989;
(statearr_21011[(14)] = inst_20948__$1);

(statearr_21011[(11)] = inst_20949__$1);

return statearr_21011;
})();
if(cljs.core.truth_(inst_20952)){
var statearr_21012_21066 = state_20989__$1;
(statearr_21012_21066[(1)] = (23));

} else {
var statearr_21013_21067 = state_20989__$1;
(statearr_21013_21067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (36))){
var inst_20939 = (state_20989[(12)]);
var inst_20916 = inst_20939;
var state_20989__$1 = (function (){var statearr_21014 = state_20989;
(statearr_21014[(7)] = inst_20916);

return statearr_21014;
})();
var statearr_21015_21068 = state_20989__$1;
(statearr_21015_21068[(2)] = null);

(statearr_21015_21068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (29))){
var inst_20963 = (state_20989[(10)]);
var state_20989__$1 = state_20989;
var statearr_21016_21069 = state_20989__$1;
(statearr_21016_21069[(2)] = inst_20963);

(statearr_21016_21069[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (6))){
var state_20989__$1 = state_20989;
var statearr_21017_21070 = state_20989__$1;
(statearr_21017_21070[(2)] = false);

(statearr_21017_21070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (28))){
var inst_20959 = (state_20989[(2)]);
var inst_20960 = calc_state.call(null);
var inst_20916 = inst_20960;
var state_20989__$1 = (function (){var statearr_21018 = state_20989;
(statearr_21018[(7)] = inst_20916);

(statearr_21018[(15)] = inst_20959);

return statearr_21018;
})();
var statearr_21019_21071 = state_20989__$1;
(statearr_21019_21071[(2)] = null);

(statearr_21019_21071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (25))){
var inst_20985 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
var statearr_21020_21072 = state_20989__$1;
(statearr_21020_21072[(2)] = inst_20985);

(statearr_21020_21072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (34))){
var inst_20983 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
var statearr_21021_21073 = state_20989__$1;
(statearr_21021_21073[(2)] = inst_20983);

(statearr_21021_21073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (17))){
var state_20989__$1 = state_20989;
var statearr_21022_21074 = state_20989__$1;
(statearr_21022_21074[(2)] = false);

(statearr_21022_21074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (3))){
var state_20989__$1 = state_20989;
var statearr_21023_21075 = state_20989__$1;
(statearr_21023_21075[(2)] = false);

(statearr_21023_21075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (12))){
var inst_20987 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20989__$1,inst_20987);
} else {
if((state_val_20990 === (2))){
var inst_20891 = (state_20989[(8)]);
var inst_20896 = inst_20891.cljs$lang$protocol_mask$partition0$;
var inst_20897 = (inst_20896 & (64));
var inst_20898 = inst_20891.cljs$core$ISeq$;
var inst_20899 = (cljs.core.PROTOCOL_SENTINEL === inst_20898);
var inst_20900 = ((inst_20897) || (inst_20899));
var state_20989__$1 = state_20989;
if(cljs.core.truth_(inst_20900)){
var statearr_21024_21076 = state_20989__$1;
(statearr_21024_21076[(1)] = (5));

} else {
var statearr_21025_21077 = state_20989__$1;
(statearr_21025_21077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (23))){
var inst_20948 = (state_20989[(14)]);
var inst_20954 = (inst_20948 == null);
var state_20989__$1 = state_20989;
if(cljs.core.truth_(inst_20954)){
var statearr_21026_21078 = state_20989__$1;
(statearr_21026_21078[(1)] = (26));

} else {
var statearr_21027_21079 = state_20989__$1;
(statearr_21027_21079[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (35))){
var inst_20974 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
if(cljs.core.truth_(inst_20974)){
var statearr_21028_21080 = state_20989__$1;
(statearr_21028_21080[(1)] = (36));

} else {
var statearr_21029_21081 = state_20989__$1;
(statearr_21029_21081[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (19))){
var inst_20916 = (state_20989[(7)]);
var inst_20936 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20916);
var state_20989__$1 = state_20989;
var statearr_21030_21082 = state_20989__$1;
(statearr_21030_21082[(2)] = inst_20936);

(statearr_21030_21082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (11))){
var inst_20916 = (state_20989[(7)]);
var inst_20920 = (inst_20916 == null);
var inst_20921 = cljs.core.not.call(null,inst_20920);
var state_20989__$1 = state_20989;
if(inst_20921){
var statearr_21031_21083 = state_20989__$1;
(statearr_21031_21083[(1)] = (13));

} else {
var statearr_21032_21084 = state_20989__$1;
(statearr_21032_21084[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (9))){
var inst_20891 = (state_20989[(8)]);
var state_20989__$1 = state_20989;
var statearr_21033_21085 = state_20989__$1;
(statearr_21033_21085[(2)] = inst_20891);

(statearr_21033_21085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (5))){
var state_20989__$1 = state_20989;
var statearr_21034_21086 = state_20989__$1;
(statearr_21034_21086[(2)] = true);

(statearr_21034_21086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (14))){
var state_20989__$1 = state_20989;
var statearr_21035_21087 = state_20989__$1;
(statearr_21035_21087[(2)] = false);

(statearr_21035_21087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (26))){
var inst_20949 = (state_20989[(11)]);
var inst_20956 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20949);
var state_20989__$1 = state_20989;
var statearr_21036_21088 = state_20989__$1;
(statearr_21036_21088[(2)] = inst_20956);

(statearr_21036_21088[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (16))){
var state_20989__$1 = state_20989;
var statearr_21037_21089 = state_20989__$1;
(statearr_21037_21089[(2)] = true);

(statearr_21037_21089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (38))){
var inst_20979 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
var statearr_21038_21090 = state_20989__$1;
(statearr_21038_21090[(2)] = inst_20979);

(statearr_21038_21090[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (30))){
var inst_20941 = (state_20989[(13)]);
var inst_20940 = (state_20989[(9)]);
var inst_20949 = (state_20989[(11)]);
var inst_20966 = cljs.core.empty_QMARK_.call(null,inst_20940);
var inst_20967 = inst_20941.call(null,inst_20949);
var inst_20968 = cljs.core.not.call(null,inst_20967);
var inst_20969 = ((inst_20966) && (inst_20968));
var state_20989__$1 = state_20989;
var statearr_21039_21091 = state_20989__$1;
(statearr_21039_21091[(2)] = inst_20969);

(statearr_21039_21091[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (10))){
var inst_20891 = (state_20989[(8)]);
var inst_20912 = (state_20989[(2)]);
var inst_20913 = cljs.core.get.call(null,inst_20912,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20914 = cljs.core.get.call(null,inst_20912,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20915 = cljs.core.get.call(null,inst_20912,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20916 = inst_20891;
var state_20989__$1 = (function (){var statearr_21040 = state_20989;
(statearr_21040[(16)] = inst_20915);

(statearr_21040[(17)] = inst_20913);

(statearr_21040[(18)] = inst_20914);

(statearr_21040[(7)] = inst_20916);

return statearr_21040;
})();
var statearr_21041_21092 = state_20989__$1;
(statearr_21041_21092[(2)] = null);

(statearr_21041_21092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (18))){
var inst_20931 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
var statearr_21042_21093 = state_20989__$1;
(statearr_21042_21093[(2)] = inst_20931);

(statearr_21042_21093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (37))){
var state_20989__$1 = state_20989;
var statearr_21043_21094 = state_20989__$1;
(statearr_21043_21094[(2)] = null);

(statearr_21043_21094[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20990 === (8))){
var inst_20891 = (state_20989[(8)]);
var inst_20909 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20891);
var state_20989__$1 = state_20989;
var statearr_21044_21095 = state_20989__$1;
(statearr_21044_21095[(2)] = inst_20909);

(statearr_21044_21095[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__19990__auto___21049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19895__auto__,c__19990__auto___21049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19896__auto__ = null;
var cljs$core$async$mix_$_state_machine__19896__auto____0 = (function (){
var statearr_21045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21045[(0)] = cljs$core$async$mix_$_state_machine__19896__auto__);

(statearr_21045[(1)] = (1));

return statearr_21045;
});
var cljs$core$async$mix_$_state_machine__19896__auto____1 = (function (state_20989){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_20989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21046){if((e21046 instanceof Object)){
var ex__19899__auto__ = e21046;
var statearr_21047_21096 = state_20989;
(statearr_21047_21096[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21097 = state_20989;
state_20989 = G__21097;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19896__auto__ = function(state_20989){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19896__auto____1.call(this,state_20989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19896__auto____0;
cljs$core$async$mix_$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19896__auto____1;
return cljs$core$async$mix_$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19992__auto__ = (function (){var statearr_21048 = f__19991__auto__.call(null);
(statearr_21048[(6)] = c__19990__auto___21049);

return statearr_21048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21099 = arguments.length;
switch (G__21099) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__21103 = arguments.length;
switch (G__21103) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__21101_SHARP_){
if(cljs.core.truth_(p1__21101_SHARP_.call(null,topic))){
return p1__21101_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21101_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21104 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21105){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21105 = meta21105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21106,meta21105__$1){
var self__ = this;
var _21106__$1 = this;
return (new cljs.core.async.t_cljs$core$async21104(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21105__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21106){
var self__ = this;
var _21106__$1 = this;
return self__.meta21105;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21105","meta21105",-622350798,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21104";

cljs.core.async.t_cljs$core$async21104.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21104");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21104.
 */
cljs.core.async.__GT_t_cljs$core$async21104 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21104(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21105){
return (new cljs.core.async.t_cljs$core$async21104(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21105));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21104(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19990__auto___21224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21224,mults,ensure_mult,p){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21224,mults,ensure_mult,p){
return (function (state_21178){
var state_val_21179 = (state_21178[(1)]);
if((state_val_21179 === (7))){
var inst_21174 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21180_21225 = state_21178__$1;
(statearr_21180_21225[(2)] = inst_21174);

(statearr_21180_21225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (20))){
var state_21178__$1 = state_21178;
var statearr_21181_21226 = state_21178__$1;
(statearr_21181_21226[(2)] = null);

(statearr_21181_21226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (1))){
var state_21178__$1 = state_21178;
var statearr_21182_21227 = state_21178__$1;
(statearr_21182_21227[(2)] = null);

(statearr_21182_21227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (24))){
var inst_21157 = (state_21178[(7)]);
var inst_21166 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21157);
var state_21178__$1 = state_21178;
var statearr_21183_21228 = state_21178__$1;
(statearr_21183_21228[(2)] = inst_21166);

(statearr_21183_21228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (4))){
var inst_21109 = (state_21178[(8)]);
var inst_21109__$1 = (state_21178[(2)]);
var inst_21110 = (inst_21109__$1 == null);
var state_21178__$1 = (function (){var statearr_21184 = state_21178;
(statearr_21184[(8)] = inst_21109__$1);

return statearr_21184;
})();
if(cljs.core.truth_(inst_21110)){
var statearr_21185_21229 = state_21178__$1;
(statearr_21185_21229[(1)] = (5));

} else {
var statearr_21186_21230 = state_21178__$1;
(statearr_21186_21230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (15))){
var inst_21151 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21187_21231 = state_21178__$1;
(statearr_21187_21231[(2)] = inst_21151);

(statearr_21187_21231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (21))){
var inst_21171 = (state_21178[(2)]);
var state_21178__$1 = (function (){var statearr_21188 = state_21178;
(statearr_21188[(9)] = inst_21171);

return statearr_21188;
})();
var statearr_21189_21232 = state_21178__$1;
(statearr_21189_21232[(2)] = null);

(statearr_21189_21232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (13))){
var inst_21133 = (state_21178[(10)]);
var inst_21135 = cljs.core.chunked_seq_QMARK_.call(null,inst_21133);
var state_21178__$1 = state_21178;
if(inst_21135){
var statearr_21190_21233 = state_21178__$1;
(statearr_21190_21233[(1)] = (16));

} else {
var statearr_21191_21234 = state_21178__$1;
(statearr_21191_21234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (22))){
var inst_21163 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
if(cljs.core.truth_(inst_21163)){
var statearr_21192_21235 = state_21178__$1;
(statearr_21192_21235[(1)] = (23));

} else {
var statearr_21193_21236 = state_21178__$1;
(statearr_21193_21236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (6))){
var inst_21159 = (state_21178[(11)]);
var inst_21109 = (state_21178[(8)]);
var inst_21157 = (state_21178[(7)]);
var inst_21157__$1 = topic_fn.call(null,inst_21109);
var inst_21158 = cljs.core.deref.call(null,mults);
var inst_21159__$1 = cljs.core.get.call(null,inst_21158,inst_21157__$1);
var state_21178__$1 = (function (){var statearr_21194 = state_21178;
(statearr_21194[(11)] = inst_21159__$1);

(statearr_21194[(7)] = inst_21157__$1);

return statearr_21194;
})();
if(cljs.core.truth_(inst_21159__$1)){
var statearr_21195_21237 = state_21178__$1;
(statearr_21195_21237[(1)] = (19));

} else {
var statearr_21196_21238 = state_21178__$1;
(statearr_21196_21238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (25))){
var inst_21168 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21197_21239 = state_21178__$1;
(statearr_21197_21239[(2)] = inst_21168);

(statearr_21197_21239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (17))){
var inst_21133 = (state_21178[(10)]);
var inst_21142 = cljs.core.first.call(null,inst_21133);
var inst_21143 = cljs.core.async.muxch_STAR_.call(null,inst_21142);
var inst_21144 = cljs.core.async.close_BANG_.call(null,inst_21143);
var inst_21145 = cljs.core.next.call(null,inst_21133);
var inst_21119 = inst_21145;
var inst_21120 = null;
var inst_21121 = (0);
var inst_21122 = (0);
var state_21178__$1 = (function (){var statearr_21198 = state_21178;
(statearr_21198[(12)] = inst_21120);

(statearr_21198[(13)] = inst_21121);

(statearr_21198[(14)] = inst_21119);

(statearr_21198[(15)] = inst_21122);

(statearr_21198[(16)] = inst_21144);

return statearr_21198;
})();
var statearr_21199_21240 = state_21178__$1;
(statearr_21199_21240[(2)] = null);

(statearr_21199_21240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (3))){
var inst_21176 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21178__$1,inst_21176);
} else {
if((state_val_21179 === (12))){
var inst_21153 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21200_21241 = state_21178__$1;
(statearr_21200_21241[(2)] = inst_21153);

(statearr_21200_21241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (2))){
var state_21178__$1 = state_21178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21178__$1,(4),ch);
} else {
if((state_val_21179 === (23))){
var state_21178__$1 = state_21178;
var statearr_21201_21242 = state_21178__$1;
(statearr_21201_21242[(2)] = null);

(statearr_21201_21242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (19))){
var inst_21159 = (state_21178[(11)]);
var inst_21109 = (state_21178[(8)]);
var inst_21161 = cljs.core.async.muxch_STAR_.call(null,inst_21159);
var state_21178__$1 = state_21178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21178__$1,(22),inst_21161,inst_21109);
} else {
if((state_val_21179 === (11))){
var inst_21119 = (state_21178[(14)]);
var inst_21133 = (state_21178[(10)]);
var inst_21133__$1 = cljs.core.seq.call(null,inst_21119);
var state_21178__$1 = (function (){var statearr_21202 = state_21178;
(statearr_21202[(10)] = inst_21133__$1);

return statearr_21202;
})();
if(inst_21133__$1){
var statearr_21203_21243 = state_21178__$1;
(statearr_21203_21243[(1)] = (13));

} else {
var statearr_21204_21244 = state_21178__$1;
(statearr_21204_21244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (9))){
var inst_21155 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21205_21245 = state_21178__$1;
(statearr_21205_21245[(2)] = inst_21155);

(statearr_21205_21245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (5))){
var inst_21116 = cljs.core.deref.call(null,mults);
var inst_21117 = cljs.core.vals.call(null,inst_21116);
var inst_21118 = cljs.core.seq.call(null,inst_21117);
var inst_21119 = inst_21118;
var inst_21120 = null;
var inst_21121 = (0);
var inst_21122 = (0);
var state_21178__$1 = (function (){var statearr_21206 = state_21178;
(statearr_21206[(12)] = inst_21120);

(statearr_21206[(13)] = inst_21121);

(statearr_21206[(14)] = inst_21119);

(statearr_21206[(15)] = inst_21122);

return statearr_21206;
})();
var statearr_21207_21246 = state_21178__$1;
(statearr_21207_21246[(2)] = null);

(statearr_21207_21246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (14))){
var state_21178__$1 = state_21178;
var statearr_21211_21247 = state_21178__$1;
(statearr_21211_21247[(2)] = null);

(statearr_21211_21247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (16))){
var inst_21133 = (state_21178[(10)]);
var inst_21137 = cljs.core.chunk_first.call(null,inst_21133);
var inst_21138 = cljs.core.chunk_rest.call(null,inst_21133);
var inst_21139 = cljs.core.count.call(null,inst_21137);
var inst_21119 = inst_21138;
var inst_21120 = inst_21137;
var inst_21121 = inst_21139;
var inst_21122 = (0);
var state_21178__$1 = (function (){var statearr_21212 = state_21178;
(statearr_21212[(12)] = inst_21120);

(statearr_21212[(13)] = inst_21121);

(statearr_21212[(14)] = inst_21119);

(statearr_21212[(15)] = inst_21122);

return statearr_21212;
})();
var statearr_21213_21248 = state_21178__$1;
(statearr_21213_21248[(2)] = null);

(statearr_21213_21248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (10))){
var inst_21120 = (state_21178[(12)]);
var inst_21121 = (state_21178[(13)]);
var inst_21119 = (state_21178[(14)]);
var inst_21122 = (state_21178[(15)]);
var inst_21127 = cljs.core._nth.call(null,inst_21120,inst_21122);
var inst_21128 = cljs.core.async.muxch_STAR_.call(null,inst_21127);
var inst_21129 = cljs.core.async.close_BANG_.call(null,inst_21128);
var inst_21130 = (inst_21122 + (1));
var tmp21208 = inst_21120;
var tmp21209 = inst_21121;
var tmp21210 = inst_21119;
var inst_21119__$1 = tmp21210;
var inst_21120__$1 = tmp21208;
var inst_21121__$1 = tmp21209;
var inst_21122__$1 = inst_21130;
var state_21178__$1 = (function (){var statearr_21214 = state_21178;
(statearr_21214[(17)] = inst_21129);

(statearr_21214[(12)] = inst_21120__$1);

(statearr_21214[(13)] = inst_21121__$1);

(statearr_21214[(14)] = inst_21119__$1);

(statearr_21214[(15)] = inst_21122__$1);

return statearr_21214;
})();
var statearr_21215_21249 = state_21178__$1;
(statearr_21215_21249[(2)] = null);

(statearr_21215_21249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (18))){
var inst_21148 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21216_21250 = state_21178__$1;
(statearr_21216_21250[(2)] = inst_21148);

(statearr_21216_21250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (8))){
var inst_21121 = (state_21178[(13)]);
var inst_21122 = (state_21178[(15)]);
var inst_21124 = (inst_21122 < inst_21121);
var inst_21125 = inst_21124;
var state_21178__$1 = state_21178;
if(cljs.core.truth_(inst_21125)){
var statearr_21217_21251 = state_21178__$1;
(statearr_21217_21251[(1)] = (10));

} else {
var statearr_21218_21252 = state_21178__$1;
(statearr_21218_21252[(1)] = (11));

}

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
});})(c__19990__auto___21224,mults,ensure_mult,p))
;
return ((function (switch__19895__auto__,c__19990__auto___21224,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21219[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21219[(1)] = (1));

return statearr_21219;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21178){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21220){if((e21220 instanceof Object)){
var ex__19899__auto__ = e21220;
var statearr_21221_21253 = state_21178;
(statearr_21221_21253[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21254 = state_21178;
state_21178 = G__21254;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21224,mults,ensure_mult,p))
})();
var state__19992__auto__ = (function (){var statearr_21222 = f__19991__auto__.call(null);
(statearr_21222[(6)] = c__19990__auto___21224);

return statearr_21222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21224,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__21256 = arguments.length;
switch (G__21256) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__21259 = arguments.length;
switch (G__21259) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__21262 = arguments.length;
switch (G__21262) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19990__auto___21329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21329,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21329,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21301){
var state_val_21302 = (state_21301[(1)]);
if((state_val_21302 === (7))){
var state_21301__$1 = state_21301;
var statearr_21303_21330 = state_21301__$1;
(statearr_21303_21330[(2)] = null);

(statearr_21303_21330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (1))){
var state_21301__$1 = state_21301;
var statearr_21304_21331 = state_21301__$1;
(statearr_21304_21331[(2)] = null);

(statearr_21304_21331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (4))){
var inst_21265 = (state_21301[(7)]);
var inst_21267 = (inst_21265 < cnt);
var state_21301__$1 = state_21301;
if(cljs.core.truth_(inst_21267)){
var statearr_21305_21332 = state_21301__$1;
(statearr_21305_21332[(1)] = (6));

} else {
var statearr_21306_21333 = state_21301__$1;
(statearr_21306_21333[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (15))){
var inst_21297 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21307_21334 = state_21301__$1;
(statearr_21307_21334[(2)] = inst_21297);

(statearr_21307_21334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (13))){
var inst_21290 = cljs.core.async.close_BANG_.call(null,out);
var state_21301__$1 = state_21301;
var statearr_21308_21335 = state_21301__$1;
(statearr_21308_21335[(2)] = inst_21290);

(statearr_21308_21335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (6))){
var state_21301__$1 = state_21301;
var statearr_21309_21336 = state_21301__$1;
(statearr_21309_21336[(2)] = null);

(statearr_21309_21336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (3))){
var inst_21299 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21301__$1,inst_21299);
} else {
if((state_val_21302 === (12))){
var inst_21287 = (state_21301[(8)]);
var inst_21287__$1 = (state_21301[(2)]);
var inst_21288 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21287__$1);
var state_21301__$1 = (function (){var statearr_21310 = state_21301;
(statearr_21310[(8)] = inst_21287__$1);

return statearr_21310;
})();
if(cljs.core.truth_(inst_21288)){
var statearr_21311_21337 = state_21301__$1;
(statearr_21311_21337[(1)] = (13));

} else {
var statearr_21312_21338 = state_21301__$1;
(statearr_21312_21338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (2))){
var inst_21264 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21265 = (0);
var state_21301__$1 = (function (){var statearr_21313 = state_21301;
(statearr_21313[(7)] = inst_21265);

(statearr_21313[(9)] = inst_21264);

return statearr_21313;
})();
var statearr_21314_21339 = state_21301__$1;
(statearr_21314_21339[(2)] = null);

(statearr_21314_21339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (11))){
var inst_21265 = (state_21301[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21301,(10),Object,null,(9));
var inst_21274 = chs__$1.call(null,inst_21265);
var inst_21275 = done.call(null,inst_21265);
var inst_21276 = cljs.core.async.take_BANG_.call(null,inst_21274,inst_21275);
var state_21301__$1 = state_21301;
var statearr_21315_21340 = state_21301__$1;
(statearr_21315_21340[(2)] = inst_21276);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21301__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (9))){
var inst_21265 = (state_21301[(7)]);
var inst_21278 = (state_21301[(2)]);
var inst_21279 = (inst_21265 + (1));
var inst_21265__$1 = inst_21279;
var state_21301__$1 = (function (){var statearr_21316 = state_21301;
(statearr_21316[(7)] = inst_21265__$1);

(statearr_21316[(10)] = inst_21278);

return statearr_21316;
})();
var statearr_21317_21341 = state_21301__$1;
(statearr_21317_21341[(2)] = null);

(statearr_21317_21341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (5))){
var inst_21285 = (state_21301[(2)]);
var state_21301__$1 = (function (){var statearr_21318 = state_21301;
(statearr_21318[(11)] = inst_21285);

return statearr_21318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21301__$1,(12),dchan);
} else {
if((state_val_21302 === (14))){
var inst_21287 = (state_21301[(8)]);
var inst_21292 = cljs.core.apply.call(null,f,inst_21287);
var state_21301__$1 = state_21301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21301__$1,(16),out,inst_21292);
} else {
if((state_val_21302 === (16))){
var inst_21294 = (state_21301[(2)]);
var state_21301__$1 = (function (){var statearr_21319 = state_21301;
(statearr_21319[(12)] = inst_21294);

return statearr_21319;
})();
var statearr_21320_21342 = state_21301__$1;
(statearr_21320_21342[(2)] = null);

(statearr_21320_21342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (10))){
var inst_21269 = (state_21301[(2)]);
var inst_21270 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21301__$1 = (function (){var statearr_21321 = state_21301;
(statearr_21321[(13)] = inst_21269);

return statearr_21321;
})();
var statearr_21322_21343 = state_21301__$1;
(statearr_21322_21343[(2)] = inst_21270);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21301__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (8))){
var inst_21283 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21323_21344 = state_21301__$1;
(statearr_21323_21344[(2)] = inst_21283);

(statearr_21323_21344[(1)] = (5));


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
});})(c__19990__auto___21329,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19895__auto__,c__19990__auto___21329,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21324[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21324[(1)] = (1));

return statearr_21324;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21301){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21325){if((e21325 instanceof Object)){
var ex__19899__auto__ = e21325;
var statearr_21326_21345 = state_21301;
(statearr_21326_21345[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21346 = state_21301;
state_21301 = G__21346;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21329,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19992__auto__ = (function (){var statearr_21327 = f__19991__auto__.call(null);
(statearr_21327[(6)] = c__19990__auto___21329);

return statearr_21327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21329,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__21349 = arguments.length;
switch (G__21349) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19990__auto___21403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21403,out){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21403,out){
return (function (state_21381){
var state_val_21382 = (state_21381[(1)]);
if((state_val_21382 === (7))){
var inst_21360 = (state_21381[(7)]);
var inst_21361 = (state_21381[(8)]);
var inst_21360__$1 = (state_21381[(2)]);
var inst_21361__$1 = cljs.core.nth.call(null,inst_21360__$1,(0),null);
var inst_21362 = cljs.core.nth.call(null,inst_21360__$1,(1),null);
var inst_21363 = (inst_21361__$1 == null);
var state_21381__$1 = (function (){var statearr_21383 = state_21381;
(statearr_21383[(7)] = inst_21360__$1);

(statearr_21383[(8)] = inst_21361__$1);

(statearr_21383[(9)] = inst_21362);

return statearr_21383;
})();
if(cljs.core.truth_(inst_21363)){
var statearr_21384_21404 = state_21381__$1;
(statearr_21384_21404[(1)] = (8));

} else {
var statearr_21385_21405 = state_21381__$1;
(statearr_21385_21405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (1))){
var inst_21350 = cljs.core.vec.call(null,chs);
var inst_21351 = inst_21350;
var state_21381__$1 = (function (){var statearr_21386 = state_21381;
(statearr_21386[(10)] = inst_21351);

return statearr_21386;
})();
var statearr_21387_21406 = state_21381__$1;
(statearr_21387_21406[(2)] = null);

(statearr_21387_21406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (4))){
var inst_21351 = (state_21381[(10)]);
var state_21381__$1 = state_21381;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21381__$1,(7),inst_21351);
} else {
if((state_val_21382 === (6))){
var inst_21377 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
var statearr_21388_21407 = state_21381__$1;
(statearr_21388_21407[(2)] = inst_21377);

(statearr_21388_21407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (3))){
var inst_21379 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21381__$1,inst_21379);
} else {
if((state_val_21382 === (2))){
var inst_21351 = (state_21381[(10)]);
var inst_21353 = cljs.core.count.call(null,inst_21351);
var inst_21354 = (inst_21353 > (0));
var state_21381__$1 = state_21381;
if(cljs.core.truth_(inst_21354)){
var statearr_21390_21408 = state_21381__$1;
(statearr_21390_21408[(1)] = (4));

} else {
var statearr_21391_21409 = state_21381__$1;
(statearr_21391_21409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (11))){
var inst_21351 = (state_21381[(10)]);
var inst_21370 = (state_21381[(2)]);
var tmp21389 = inst_21351;
var inst_21351__$1 = tmp21389;
var state_21381__$1 = (function (){var statearr_21392 = state_21381;
(statearr_21392[(10)] = inst_21351__$1);

(statearr_21392[(11)] = inst_21370);

return statearr_21392;
})();
var statearr_21393_21410 = state_21381__$1;
(statearr_21393_21410[(2)] = null);

(statearr_21393_21410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (9))){
var inst_21361 = (state_21381[(8)]);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21381__$1,(11),out,inst_21361);
} else {
if((state_val_21382 === (5))){
var inst_21375 = cljs.core.async.close_BANG_.call(null,out);
var state_21381__$1 = state_21381;
var statearr_21394_21411 = state_21381__$1;
(statearr_21394_21411[(2)] = inst_21375);

(statearr_21394_21411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (10))){
var inst_21373 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
var statearr_21395_21412 = state_21381__$1;
(statearr_21395_21412[(2)] = inst_21373);

(statearr_21395_21412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (8))){
var inst_21351 = (state_21381[(10)]);
var inst_21360 = (state_21381[(7)]);
var inst_21361 = (state_21381[(8)]);
var inst_21362 = (state_21381[(9)]);
var inst_21365 = (function (){var cs = inst_21351;
var vec__21356 = inst_21360;
var v = inst_21361;
var c = inst_21362;
return ((function (cs,vec__21356,v,c,inst_21351,inst_21360,inst_21361,inst_21362,state_val_21382,c__19990__auto___21403,out){
return (function (p1__21347_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21347_SHARP_);
});
;})(cs,vec__21356,v,c,inst_21351,inst_21360,inst_21361,inst_21362,state_val_21382,c__19990__auto___21403,out))
})();
var inst_21366 = cljs.core.filterv.call(null,inst_21365,inst_21351);
var inst_21351__$1 = inst_21366;
var state_21381__$1 = (function (){var statearr_21396 = state_21381;
(statearr_21396[(10)] = inst_21351__$1);

return statearr_21396;
})();
var statearr_21397_21413 = state_21381__$1;
(statearr_21397_21413[(2)] = null);

(statearr_21397_21413[(1)] = (2));


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
});})(c__19990__auto___21403,out))
;
return ((function (switch__19895__auto__,c__19990__auto___21403,out){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21398[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21398[(1)] = (1));

return statearr_21398;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21381){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21399){if((e21399 instanceof Object)){
var ex__19899__auto__ = e21399;
var statearr_21400_21414 = state_21381;
(statearr_21400_21414[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21415 = state_21381;
state_21381 = G__21415;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21403,out))
})();
var state__19992__auto__ = (function (){var statearr_21401 = f__19991__auto__.call(null);
(statearr_21401[(6)] = c__19990__auto___21403);

return statearr_21401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21403,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__21417 = arguments.length;
switch (G__21417) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19990__auto___21462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21462,out){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21462,out){
return (function (state_21441){
var state_val_21442 = (state_21441[(1)]);
if((state_val_21442 === (7))){
var inst_21423 = (state_21441[(7)]);
var inst_21423__$1 = (state_21441[(2)]);
var inst_21424 = (inst_21423__$1 == null);
var inst_21425 = cljs.core.not.call(null,inst_21424);
var state_21441__$1 = (function (){var statearr_21443 = state_21441;
(statearr_21443[(7)] = inst_21423__$1);

return statearr_21443;
})();
if(inst_21425){
var statearr_21444_21463 = state_21441__$1;
(statearr_21444_21463[(1)] = (8));

} else {
var statearr_21445_21464 = state_21441__$1;
(statearr_21445_21464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (1))){
var inst_21418 = (0);
var state_21441__$1 = (function (){var statearr_21446 = state_21441;
(statearr_21446[(8)] = inst_21418);

return statearr_21446;
})();
var statearr_21447_21465 = state_21441__$1;
(statearr_21447_21465[(2)] = null);

(statearr_21447_21465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (4))){
var state_21441__$1 = state_21441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21441__$1,(7),ch);
} else {
if((state_val_21442 === (6))){
var inst_21436 = (state_21441[(2)]);
var state_21441__$1 = state_21441;
var statearr_21448_21466 = state_21441__$1;
(statearr_21448_21466[(2)] = inst_21436);

(statearr_21448_21466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (3))){
var inst_21438 = (state_21441[(2)]);
var inst_21439 = cljs.core.async.close_BANG_.call(null,out);
var state_21441__$1 = (function (){var statearr_21449 = state_21441;
(statearr_21449[(9)] = inst_21438);

return statearr_21449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21441__$1,inst_21439);
} else {
if((state_val_21442 === (2))){
var inst_21418 = (state_21441[(8)]);
var inst_21420 = (inst_21418 < n);
var state_21441__$1 = state_21441;
if(cljs.core.truth_(inst_21420)){
var statearr_21450_21467 = state_21441__$1;
(statearr_21450_21467[(1)] = (4));

} else {
var statearr_21451_21468 = state_21441__$1;
(statearr_21451_21468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (11))){
var inst_21418 = (state_21441[(8)]);
var inst_21428 = (state_21441[(2)]);
var inst_21429 = (inst_21418 + (1));
var inst_21418__$1 = inst_21429;
var state_21441__$1 = (function (){var statearr_21452 = state_21441;
(statearr_21452[(8)] = inst_21418__$1);

(statearr_21452[(10)] = inst_21428);

return statearr_21452;
})();
var statearr_21453_21469 = state_21441__$1;
(statearr_21453_21469[(2)] = null);

(statearr_21453_21469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (9))){
var state_21441__$1 = state_21441;
var statearr_21454_21470 = state_21441__$1;
(statearr_21454_21470[(2)] = null);

(statearr_21454_21470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (5))){
var state_21441__$1 = state_21441;
var statearr_21455_21471 = state_21441__$1;
(statearr_21455_21471[(2)] = null);

(statearr_21455_21471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (10))){
var inst_21433 = (state_21441[(2)]);
var state_21441__$1 = state_21441;
var statearr_21456_21472 = state_21441__$1;
(statearr_21456_21472[(2)] = inst_21433);

(statearr_21456_21472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21442 === (8))){
var inst_21423 = (state_21441[(7)]);
var state_21441__$1 = state_21441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21441__$1,(11),out,inst_21423);
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
});})(c__19990__auto___21462,out))
;
return ((function (switch__19895__auto__,c__19990__auto___21462,out){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21457[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21457[(1)] = (1));

return statearr_21457;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21441){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21458){if((e21458 instanceof Object)){
var ex__19899__auto__ = e21458;
var statearr_21459_21473 = state_21441;
(statearr_21459_21473[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21474 = state_21441;
state_21441 = G__21474;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21462,out))
})();
var state__19992__auto__ = (function (){var statearr_21460 = f__19991__auto__.call(null);
(statearr_21460[(6)] = c__19990__auto___21462);

return statearr_21460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21462,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21476 = (function (f,ch,meta21477){
this.f = f;
this.ch = ch;
this.meta21477 = meta21477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21478,meta21477__$1){
var self__ = this;
var _21478__$1 = this;
return (new cljs.core.async.t_cljs$core$async21476(self__.f,self__.ch,meta21477__$1));
});

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21478){
var self__ = this;
var _21478__$1 = this;
return self__.meta21477;
});

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21479 = (function (f,ch,meta21477,_,fn1,meta21480){
this.f = f;
this.ch = ch;
this.meta21477 = meta21477;
this._ = _;
this.fn1 = fn1;
this.meta21480 = meta21480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21481,meta21480__$1){
var self__ = this;
var _21481__$1 = this;
return (new cljs.core.async.t_cljs$core$async21479(self__.f,self__.ch,self__.meta21477,self__._,self__.fn1,meta21480__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21481){
var self__ = this;
var _21481__$1 = this;
return self__.meta21480;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21475_SHARP_){
return f1.call(null,(((p1__21475_SHARP_ == null))?null:self__.f.call(null,p1__21475_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21479.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21477","meta21477",-1061492500,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21476","cljs.core.async/t_cljs$core$async21476",520895086,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21480","meta21480",1770012459,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21479";

cljs.core.async.t_cljs$core$async21479.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21479");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21479.
 */
cljs.core.async.__GT_t_cljs$core$async21479 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21479(f__$1,ch__$1,meta21477__$1,___$2,fn1__$1,meta21480){
return (new cljs.core.async.t_cljs$core$async21479(f__$1,ch__$1,meta21477__$1,___$2,fn1__$1,meta21480));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21479(self__.f,self__.ch,self__.meta21477,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21477","meta21477",-1061492500,null)], null);
});

cljs.core.async.t_cljs$core$async21476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21476";

cljs.core.async.t_cljs$core$async21476.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21476");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21476.
 */
cljs.core.async.__GT_t_cljs$core$async21476 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21476(f__$1,ch__$1,meta21477){
return (new cljs.core.async.t_cljs$core$async21476(f__$1,ch__$1,meta21477));
});

}

return (new cljs.core.async.t_cljs$core$async21476(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21482 = (function (f,ch,meta21483){
this.f = f;
this.ch = ch;
this.meta21483 = meta21483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21484,meta21483__$1){
var self__ = this;
var _21484__$1 = this;
return (new cljs.core.async.t_cljs$core$async21482(self__.f,self__.ch,meta21483__$1));
});

cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21484){
var self__ = this;
var _21484__$1 = this;
return self__.meta21483;
});

cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21483","meta21483",-1708765131,null)], null);
});

cljs.core.async.t_cljs$core$async21482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21482";

cljs.core.async.t_cljs$core$async21482.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21482");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21482.
 */
cljs.core.async.__GT_t_cljs$core$async21482 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21482(f__$1,ch__$1,meta21483){
return (new cljs.core.async.t_cljs$core$async21482(f__$1,ch__$1,meta21483));
});

}

return (new cljs.core.async.t_cljs$core$async21482(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21485 = (function (p,ch,meta21486){
this.p = p;
this.ch = ch;
this.meta21486 = meta21486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21487,meta21486__$1){
var self__ = this;
var _21487__$1 = this;
return (new cljs.core.async.t_cljs$core$async21485(self__.p,self__.ch,meta21486__$1));
});

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21487){
var self__ = this;
var _21487__$1 = this;
return self__.meta21486;
});

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21486","meta21486",-84168289,null)], null);
});

cljs.core.async.t_cljs$core$async21485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21485";

cljs.core.async.t_cljs$core$async21485.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21485");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21485.
 */
cljs.core.async.__GT_t_cljs$core$async21485 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21485(p__$1,ch__$1,meta21486){
return (new cljs.core.async.t_cljs$core$async21485(p__$1,ch__$1,meta21486));
});

}

return (new cljs.core.async.t_cljs$core$async21485(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__21489 = arguments.length;
switch (G__21489) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19990__auto___21529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21529,out){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21529,out){
return (function (state_21510){
var state_val_21511 = (state_21510[(1)]);
if((state_val_21511 === (7))){
var inst_21506 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
var statearr_21512_21530 = state_21510__$1;
(statearr_21512_21530[(2)] = inst_21506);

(statearr_21512_21530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (1))){
var state_21510__$1 = state_21510;
var statearr_21513_21531 = state_21510__$1;
(statearr_21513_21531[(2)] = null);

(statearr_21513_21531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (4))){
var inst_21492 = (state_21510[(7)]);
var inst_21492__$1 = (state_21510[(2)]);
var inst_21493 = (inst_21492__$1 == null);
var state_21510__$1 = (function (){var statearr_21514 = state_21510;
(statearr_21514[(7)] = inst_21492__$1);

return statearr_21514;
})();
if(cljs.core.truth_(inst_21493)){
var statearr_21515_21532 = state_21510__$1;
(statearr_21515_21532[(1)] = (5));

} else {
var statearr_21516_21533 = state_21510__$1;
(statearr_21516_21533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (6))){
var inst_21492 = (state_21510[(7)]);
var inst_21497 = p.call(null,inst_21492);
var state_21510__$1 = state_21510;
if(cljs.core.truth_(inst_21497)){
var statearr_21517_21534 = state_21510__$1;
(statearr_21517_21534[(1)] = (8));

} else {
var statearr_21518_21535 = state_21510__$1;
(statearr_21518_21535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (3))){
var inst_21508 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21510__$1,inst_21508);
} else {
if((state_val_21511 === (2))){
var state_21510__$1 = state_21510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21510__$1,(4),ch);
} else {
if((state_val_21511 === (11))){
var inst_21500 = (state_21510[(2)]);
var state_21510__$1 = state_21510;
var statearr_21519_21536 = state_21510__$1;
(statearr_21519_21536[(2)] = inst_21500);

(statearr_21519_21536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (9))){
var state_21510__$1 = state_21510;
var statearr_21520_21537 = state_21510__$1;
(statearr_21520_21537[(2)] = null);

(statearr_21520_21537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (5))){
var inst_21495 = cljs.core.async.close_BANG_.call(null,out);
var state_21510__$1 = state_21510;
var statearr_21521_21538 = state_21510__$1;
(statearr_21521_21538[(2)] = inst_21495);

(statearr_21521_21538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (10))){
var inst_21503 = (state_21510[(2)]);
var state_21510__$1 = (function (){var statearr_21522 = state_21510;
(statearr_21522[(8)] = inst_21503);

return statearr_21522;
})();
var statearr_21523_21539 = state_21510__$1;
(statearr_21523_21539[(2)] = null);

(statearr_21523_21539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21511 === (8))){
var inst_21492 = (state_21510[(7)]);
var state_21510__$1 = state_21510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21510__$1,(11),out,inst_21492);
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
});})(c__19990__auto___21529,out))
;
return ((function (switch__19895__auto__,c__19990__auto___21529,out){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21524 = [null,null,null,null,null,null,null,null,null];
(statearr_21524[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21524[(1)] = (1));

return statearr_21524;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21510){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21525){if((e21525 instanceof Object)){
var ex__19899__auto__ = e21525;
var statearr_21526_21540 = state_21510;
(statearr_21526_21540[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21541 = state_21510;
state_21510 = G__21541;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21529,out))
})();
var state__19992__auto__ = (function (){var statearr_21527 = f__19991__auto__.call(null);
(statearr_21527[(6)] = c__19990__auto___21529);

return statearr_21527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21529,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21543 = arguments.length;
switch (G__21543) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto__){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto__){
return (function (state_21606){
var state_val_21607 = (state_21606[(1)]);
if((state_val_21607 === (7))){
var inst_21602 = (state_21606[(2)]);
var state_21606__$1 = state_21606;
var statearr_21608_21646 = state_21606__$1;
(statearr_21608_21646[(2)] = inst_21602);

(statearr_21608_21646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (20))){
var inst_21572 = (state_21606[(7)]);
var inst_21583 = (state_21606[(2)]);
var inst_21584 = cljs.core.next.call(null,inst_21572);
var inst_21558 = inst_21584;
var inst_21559 = null;
var inst_21560 = (0);
var inst_21561 = (0);
var state_21606__$1 = (function (){var statearr_21609 = state_21606;
(statearr_21609[(8)] = inst_21559);

(statearr_21609[(9)] = inst_21560);

(statearr_21609[(10)] = inst_21558);

(statearr_21609[(11)] = inst_21583);

(statearr_21609[(12)] = inst_21561);

return statearr_21609;
})();
var statearr_21610_21647 = state_21606__$1;
(statearr_21610_21647[(2)] = null);

(statearr_21610_21647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (1))){
var state_21606__$1 = state_21606;
var statearr_21611_21648 = state_21606__$1;
(statearr_21611_21648[(2)] = null);

(statearr_21611_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (4))){
var inst_21547 = (state_21606[(13)]);
var inst_21547__$1 = (state_21606[(2)]);
var inst_21548 = (inst_21547__$1 == null);
var state_21606__$1 = (function (){var statearr_21612 = state_21606;
(statearr_21612[(13)] = inst_21547__$1);

return statearr_21612;
})();
if(cljs.core.truth_(inst_21548)){
var statearr_21613_21649 = state_21606__$1;
(statearr_21613_21649[(1)] = (5));

} else {
var statearr_21614_21650 = state_21606__$1;
(statearr_21614_21650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (15))){
var state_21606__$1 = state_21606;
var statearr_21618_21651 = state_21606__$1;
(statearr_21618_21651[(2)] = null);

(statearr_21618_21651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (21))){
var state_21606__$1 = state_21606;
var statearr_21619_21652 = state_21606__$1;
(statearr_21619_21652[(2)] = null);

(statearr_21619_21652[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (13))){
var inst_21559 = (state_21606[(8)]);
var inst_21560 = (state_21606[(9)]);
var inst_21558 = (state_21606[(10)]);
var inst_21561 = (state_21606[(12)]);
var inst_21568 = (state_21606[(2)]);
var inst_21569 = (inst_21561 + (1));
var tmp21615 = inst_21559;
var tmp21616 = inst_21560;
var tmp21617 = inst_21558;
var inst_21558__$1 = tmp21617;
var inst_21559__$1 = tmp21615;
var inst_21560__$1 = tmp21616;
var inst_21561__$1 = inst_21569;
var state_21606__$1 = (function (){var statearr_21620 = state_21606;
(statearr_21620[(8)] = inst_21559__$1);

(statearr_21620[(9)] = inst_21560__$1);

(statearr_21620[(10)] = inst_21558__$1);

(statearr_21620[(14)] = inst_21568);

(statearr_21620[(12)] = inst_21561__$1);

return statearr_21620;
})();
var statearr_21621_21653 = state_21606__$1;
(statearr_21621_21653[(2)] = null);

(statearr_21621_21653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (22))){
var state_21606__$1 = state_21606;
var statearr_21622_21654 = state_21606__$1;
(statearr_21622_21654[(2)] = null);

(statearr_21622_21654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (6))){
var inst_21547 = (state_21606[(13)]);
var inst_21556 = f.call(null,inst_21547);
var inst_21557 = cljs.core.seq.call(null,inst_21556);
var inst_21558 = inst_21557;
var inst_21559 = null;
var inst_21560 = (0);
var inst_21561 = (0);
var state_21606__$1 = (function (){var statearr_21623 = state_21606;
(statearr_21623[(8)] = inst_21559);

(statearr_21623[(9)] = inst_21560);

(statearr_21623[(10)] = inst_21558);

(statearr_21623[(12)] = inst_21561);

return statearr_21623;
})();
var statearr_21624_21655 = state_21606__$1;
(statearr_21624_21655[(2)] = null);

(statearr_21624_21655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (17))){
var inst_21572 = (state_21606[(7)]);
var inst_21576 = cljs.core.chunk_first.call(null,inst_21572);
var inst_21577 = cljs.core.chunk_rest.call(null,inst_21572);
var inst_21578 = cljs.core.count.call(null,inst_21576);
var inst_21558 = inst_21577;
var inst_21559 = inst_21576;
var inst_21560 = inst_21578;
var inst_21561 = (0);
var state_21606__$1 = (function (){var statearr_21625 = state_21606;
(statearr_21625[(8)] = inst_21559);

(statearr_21625[(9)] = inst_21560);

(statearr_21625[(10)] = inst_21558);

(statearr_21625[(12)] = inst_21561);

return statearr_21625;
})();
var statearr_21626_21656 = state_21606__$1;
(statearr_21626_21656[(2)] = null);

(statearr_21626_21656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (3))){
var inst_21604 = (state_21606[(2)]);
var state_21606__$1 = state_21606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21606__$1,inst_21604);
} else {
if((state_val_21607 === (12))){
var inst_21592 = (state_21606[(2)]);
var state_21606__$1 = state_21606;
var statearr_21627_21657 = state_21606__$1;
(statearr_21627_21657[(2)] = inst_21592);

(statearr_21627_21657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (2))){
var state_21606__$1 = state_21606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21606__$1,(4),in$);
} else {
if((state_val_21607 === (23))){
var inst_21600 = (state_21606[(2)]);
var state_21606__$1 = state_21606;
var statearr_21628_21658 = state_21606__$1;
(statearr_21628_21658[(2)] = inst_21600);

(statearr_21628_21658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (19))){
var inst_21587 = (state_21606[(2)]);
var state_21606__$1 = state_21606;
var statearr_21629_21659 = state_21606__$1;
(statearr_21629_21659[(2)] = inst_21587);

(statearr_21629_21659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (11))){
var inst_21572 = (state_21606[(7)]);
var inst_21558 = (state_21606[(10)]);
var inst_21572__$1 = cljs.core.seq.call(null,inst_21558);
var state_21606__$1 = (function (){var statearr_21630 = state_21606;
(statearr_21630[(7)] = inst_21572__$1);

return statearr_21630;
})();
if(inst_21572__$1){
var statearr_21631_21660 = state_21606__$1;
(statearr_21631_21660[(1)] = (14));

} else {
var statearr_21632_21661 = state_21606__$1;
(statearr_21632_21661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (9))){
var inst_21594 = (state_21606[(2)]);
var inst_21595 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21606__$1 = (function (){var statearr_21633 = state_21606;
(statearr_21633[(15)] = inst_21594);

return statearr_21633;
})();
if(cljs.core.truth_(inst_21595)){
var statearr_21634_21662 = state_21606__$1;
(statearr_21634_21662[(1)] = (21));

} else {
var statearr_21635_21663 = state_21606__$1;
(statearr_21635_21663[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (5))){
var inst_21550 = cljs.core.async.close_BANG_.call(null,out);
var state_21606__$1 = state_21606;
var statearr_21636_21664 = state_21606__$1;
(statearr_21636_21664[(2)] = inst_21550);

(statearr_21636_21664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (14))){
var inst_21572 = (state_21606[(7)]);
var inst_21574 = cljs.core.chunked_seq_QMARK_.call(null,inst_21572);
var state_21606__$1 = state_21606;
if(inst_21574){
var statearr_21637_21665 = state_21606__$1;
(statearr_21637_21665[(1)] = (17));

} else {
var statearr_21638_21666 = state_21606__$1;
(statearr_21638_21666[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (16))){
var inst_21590 = (state_21606[(2)]);
var state_21606__$1 = state_21606;
var statearr_21639_21667 = state_21606__$1;
(statearr_21639_21667[(2)] = inst_21590);

(statearr_21639_21667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21607 === (10))){
var inst_21559 = (state_21606[(8)]);
var inst_21561 = (state_21606[(12)]);
var inst_21566 = cljs.core._nth.call(null,inst_21559,inst_21561);
var state_21606__$1 = state_21606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21606__$1,(13),out,inst_21566);
} else {
if((state_val_21607 === (18))){
var inst_21572 = (state_21606[(7)]);
var inst_21581 = cljs.core.first.call(null,inst_21572);
var state_21606__$1 = state_21606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21606__$1,(20),out,inst_21581);
} else {
if((state_val_21607 === (8))){
var inst_21560 = (state_21606[(9)]);
var inst_21561 = (state_21606[(12)]);
var inst_21563 = (inst_21561 < inst_21560);
var inst_21564 = inst_21563;
var state_21606__$1 = state_21606;
if(cljs.core.truth_(inst_21564)){
var statearr_21640_21668 = state_21606__$1;
(statearr_21640_21668[(1)] = (10));

} else {
var statearr_21641_21669 = state_21606__$1;
(statearr_21641_21669[(1)] = (11));

}

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
});})(c__19990__auto__))
;
return ((function (switch__19895__auto__,c__19990__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19896__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19896__auto____0 = (function (){
var statearr_21642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21642[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19896__auto__);

(statearr_21642[(1)] = (1));

return statearr_21642;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19896__auto____1 = (function (state_21606){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21643){if((e21643 instanceof Object)){
var ex__19899__auto__ = e21643;
var statearr_21644_21670 = state_21606;
(statearr_21644_21670[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21671 = state_21606;
state_21606 = G__21671;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19896__auto__ = function(state_21606){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19896__auto____1.call(this,state_21606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19896__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19896__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto__))
})();
var state__19992__auto__ = (function (){var statearr_21645 = f__19991__auto__.call(null);
(statearr_21645[(6)] = c__19990__auto__);

return statearr_21645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto__))
);

return c__19990__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21673 = arguments.length;
switch (G__21673) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__21676 = arguments.length;
switch (G__21676) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__21679 = arguments.length;
switch (G__21679) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19990__auto___21726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21726,out){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21726,out){
return (function (state_21703){
var state_val_21704 = (state_21703[(1)]);
if((state_val_21704 === (7))){
var inst_21698 = (state_21703[(2)]);
var state_21703__$1 = state_21703;
var statearr_21705_21727 = state_21703__$1;
(statearr_21705_21727[(2)] = inst_21698);

(statearr_21705_21727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (1))){
var inst_21680 = null;
var state_21703__$1 = (function (){var statearr_21706 = state_21703;
(statearr_21706[(7)] = inst_21680);

return statearr_21706;
})();
var statearr_21707_21728 = state_21703__$1;
(statearr_21707_21728[(2)] = null);

(statearr_21707_21728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (4))){
var inst_21683 = (state_21703[(8)]);
var inst_21683__$1 = (state_21703[(2)]);
var inst_21684 = (inst_21683__$1 == null);
var inst_21685 = cljs.core.not.call(null,inst_21684);
var state_21703__$1 = (function (){var statearr_21708 = state_21703;
(statearr_21708[(8)] = inst_21683__$1);

return statearr_21708;
})();
if(inst_21685){
var statearr_21709_21729 = state_21703__$1;
(statearr_21709_21729[(1)] = (5));

} else {
var statearr_21710_21730 = state_21703__$1;
(statearr_21710_21730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (6))){
var state_21703__$1 = state_21703;
var statearr_21711_21731 = state_21703__$1;
(statearr_21711_21731[(2)] = null);

(statearr_21711_21731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (3))){
var inst_21700 = (state_21703[(2)]);
var inst_21701 = cljs.core.async.close_BANG_.call(null,out);
var state_21703__$1 = (function (){var statearr_21712 = state_21703;
(statearr_21712[(9)] = inst_21700);

return statearr_21712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21703__$1,inst_21701);
} else {
if((state_val_21704 === (2))){
var state_21703__$1 = state_21703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21703__$1,(4),ch);
} else {
if((state_val_21704 === (11))){
var inst_21683 = (state_21703[(8)]);
var inst_21692 = (state_21703[(2)]);
var inst_21680 = inst_21683;
var state_21703__$1 = (function (){var statearr_21713 = state_21703;
(statearr_21713[(7)] = inst_21680);

(statearr_21713[(10)] = inst_21692);

return statearr_21713;
})();
var statearr_21714_21732 = state_21703__$1;
(statearr_21714_21732[(2)] = null);

(statearr_21714_21732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (9))){
var inst_21683 = (state_21703[(8)]);
var state_21703__$1 = state_21703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21703__$1,(11),out,inst_21683);
} else {
if((state_val_21704 === (5))){
var inst_21683 = (state_21703[(8)]);
var inst_21680 = (state_21703[(7)]);
var inst_21687 = cljs.core._EQ_.call(null,inst_21683,inst_21680);
var state_21703__$1 = state_21703;
if(inst_21687){
var statearr_21716_21733 = state_21703__$1;
(statearr_21716_21733[(1)] = (8));

} else {
var statearr_21717_21734 = state_21703__$1;
(statearr_21717_21734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (10))){
var inst_21695 = (state_21703[(2)]);
var state_21703__$1 = state_21703;
var statearr_21718_21735 = state_21703__$1;
(statearr_21718_21735[(2)] = inst_21695);

(statearr_21718_21735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21704 === (8))){
var inst_21680 = (state_21703[(7)]);
var tmp21715 = inst_21680;
var inst_21680__$1 = tmp21715;
var state_21703__$1 = (function (){var statearr_21719 = state_21703;
(statearr_21719[(7)] = inst_21680__$1);

return statearr_21719;
})();
var statearr_21720_21736 = state_21703__$1;
(statearr_21720_21736[(2)] = null);

(statearr_21720_21736[(1)] = (2));


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
});})(c__19990__auto___21726,out))
;
return ((function (switch__19895__auto__,c__19990__auto___21726,out){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21721[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21721[(1)] = (1));

return statearr_21721;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21703){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21722){if((e21722 instanceof Object)){
var ex__19899__auto__ = e21722;
var statearr_21723_21737 = state_21703;
(statearr_21723_21737[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21738 = state_21703;
state_21703 = G__21738;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21726,out))
})();
var state__19992__auto__ = (function (){var statearr_21724 = f__19991__auto__.call(null);
(statearr_21724[(6)] = c__19990__auto___21726);

return statearr_21724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21726,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21740 = arguments.length;
switch (G__21740) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19990__auto___21806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21806,out){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21806,out){
return (function (state_21778){
var state_val_21779 = (state_21778[(1)]);
if((state_val_21779 === (7))){
var inst_21774 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21780_21807 = state_21778__$1;
(statearr_21780_21807[(2)] = inst_21774);

(statearr_21780_21807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (1))){
var inst_21741 = (new Array(n));
var inst_21742 = inst_21741;
var inst_21743 = (0);
var state_21778__$1 = (function (){var statearr_21781 = state_21778;
(statearr_21781[(7)] = inst_21742);

(statearr_21781[(8)] = inst_21743);

return statearr_21781;
})();
var statearr_21782_21808 = state_21778__$1;
(statearr_21782_21808[(2)] = null);

(statearr_21782_21808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (4))){
var inst_21746 = (state_21778[(9)]);
var inst_21746__$1 = (state_21778[(2)]);
var inst_21747 = (inst_21746__$1 == null);
var inst_21748 = cljs.core.not.call(null,inst_21747);
var state_21778__$1 = (function (){var statearr_21783 = state_21778;
(statearr_21783[(9)] = inst_21746__$1);

return statearr_21783;
})();
if(inst_21748){
var statearr_21784_21809 = state_21778__$1;
(statearr_21784_21809[(1)] = (5));

} else {
var statearr_21785_21810 = state_21778__$1;
(statearr_21785_21810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (15))){
var inst_21768 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21786_21811 = state_21778__$1;
(statearr_21786_21811[(2)] = inst_21768);

(statearr_21786_21811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (13))){
var state_21778__$1 = state_21778;
var statearr_21787_21812 = state_21778__$1;
(statearr_21787_21812[(2)] = null);

(statearr_21787_21812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (6))){
var inst_21743 = (state_21778[(8)]);
var inst_21764 = (inst_21743 > (0));
var state_21778__$1 = state_21778;
if(cljs.core.truth_(inst_21764)){
var statearr_21788_21813 = state_21778__$1;
(statearr_21788_21813[(1)] = (12));

} else {
var statearr_21789_21814 = state_21778__$1;
(statearr_21789_21814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (3))){
var inst_21776 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21778__$1,inst_21776);
} else {
if((state_val_21779 === (12))){
var inst_21742 = (state_21778[(7)]);
var inst_21766 = cljs.core.vec.call(null,inst_21742);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21778__$1,(15),out,inst_21766);
} else {
if((state_val_21779 === (2))){
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21778__$1,(4),ch);
} else {
if((state_val_21779 === (11))){
var inst_21758 = (state_21778[(2)]);
var inst_21759 = (new Array(n));
var inst_21742 = inst_21759;
var inst_21743 = (0);
var state_21778__$1 = (function (){var statearr_21790 = state_21778;
(statearr_21790[(7)] = inst_21742);

(statearr_21790[(10)] = inst_21758);

(statearr_21790[(8)] = inst_21743);

return statearr_21790;
})();
var statearr_21791_21815 = state_21778__$1;
(statearr_21791_21815[(2)] = null);

(statearr_21791_21815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (9))){
var inst_21742 = (state_21778[(7)]);
var inst_21756 = cljs.core.vec.call(null,inst_21742);
var state_21778__$1 = state_21778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21778__$1,(11),out,inst_21756);
} else {
if((state_val_21779 === (5))){
var inst_21751 = (state_21778[(11)]);
var inst_21746 = (state_21778[(9)]);
var inst_21742 = (state_21778[(7)]);
var inst_21743 = (state_21778[(8)]);
var inst_21750 = (inst_21742[inst_21743] = inst_21746);
var inst_21751__$1 = (inst_21743 + (1));
var inst_21752 = (inst_21751__$1 < n);
var state_21778__$1 = (function (){var statearr_21792 = state_21778;
(statearr_21792[(11)] = inst_21751__$1);

(statearr_21792[(12)] = inst_21750);

return statearr_21792;
})();
if(cljs.core.truth_(inst_21752)){
var statearr_21793_21816 = state_21778__$1;
(statearr_21793_21816[(1)] = (8));

} else {
var statearr_21794_21817 = state_21778__$1;
(statearr_21794_21817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (14))){
var inst_21771 = (state_21778[(2)]);
var inst_21772 = cljs.core.async.close_BANG_.call(null,out);
var state_21778__$1 = (function (){var statearr_21796 = state_21778;
(statearr_21796[(13)] = inst_21771);

return statearr_21796;
})();
var statearr_21797_21818 = state_21778__$1;
(statearr_21797_21818[(2)] = inst_21772);

(statearr_21797_21818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (10))){
var inst_21762 = (state_21778[(2)]);
var state_21778__$1 = state_21778;
var statearr_21798_21819 = state_21778__$1;
(statearr_21798_21819[(2)] = inst_21762);

(statearr_21798_21819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21779 === (8))){
var inst_21751 = (state_21778[(11)]);
var inst_21742 = (state_21778[(7)]);
var tmp21795 = inst_21742;
var inst_21742__$1 = tmp21795;
var inst_21743 = inst_21751;
var state_21778__$1 = (function (){var statearr_21799 = state_21778;
(statearr_21799[(7)] = inst_21742__$1);

(statearr_21799[(8)] = inst_21743);

return statearr_21799;
})();
var statearr_21800_21820 = state_21778__$1;
(statearr_21800_21820[(2)] = null);

(statearr_21800_21820[(1)] = (2));


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
});})(c__19990__auto___21806,out))
;
return ((function (switch__19895__auto__,c__19990__auto___21806,out){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21801[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21801[(1)] = (1));

return statearr_21801;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21778){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21802){if((e21802 instanceof Object)){
var ex__19899__auto__ = e21802;
var statearr_21803_21821 = state_21778;
(statearr_21803_21821[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21822 = state_21778;
state_21778 = G__21822;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21806,out))
})();
var state__19992__auto__ = (function (){var statearr_21804 = f__19991__auto__.call(null);
(statearr_21804[(6)] = c__19990__auto___21806);

return statearr_21804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21806,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21824 = arguments.length;
switch (G__21824) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19990__auto___21894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19990__auto___21894,out){
return (function (){
var f__19991__auto__ = (function (){var switch__19895__auto__ = ((function (c__19990__auto___21894,out){
return (function (state_21866){
var state_val_21867 = (state_21866[(1)]);
if((state_val_21867 === (7))){
var inst_21862 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
var statearr_21868_21895 = state_21866__$1;
(statearr_21868_21895[(2)] = inst_21862);

(statearr_21868_21895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (1))){
var inst_21825 = [];
var inst_21826 = inst_21825;
var inst_21827 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21866__$1 = (function (){var statearr_21869 = state_21866;
(statearr_21869[(7)] = inst_21826);

(statearr_21869[(8)] = inst_21827);

return statearr_21869;
})();
var statearr_21870_21896 = state_21866__$1;
(statearr_21870_21896[(2)] = null);

(statearr_21870_21896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (4))){
var inst_21830 = (state_21866[(9)]);
var inst_21830__$1 = (state_21866[(2)]);
var inst_21831 = (inst_21830__$1 == null);
var inst_21832 = cljs.core.not.call(null,inst_21831);
var state_21866__$1 = (function (){var statearr_21871 = state_21866;
(statearr_21871[(9)] = inst_21830__$1);

return statearr_21871;
})();
if(inst_21832){
var statearr_21872_21897 = state_21866__$1;
(statearr_21872_21897[(1)] = (5));

} else {
var statearr_21873_21898 = state_21866__$1;
(statearr_21873_21898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (15))){
var inst_21856 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
var statearr_21874_21899 = state_21866__$1;
(statearr_21874_21899[(2)] = inst_21856);

(statearr_21874_21899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (13))){
var state_21866__$1 = state_21866;
var statearr_21875_21900 = state_21866__$1;
(statearr_21875_21900[(2)] = null);

(statearr_21875_21900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (6))){
var inst_21826 = (state_21866[(7)]);
var inst_21851 = inst_21826.length;
var inst_21852 = (inst_21851 > (0));
var state_21866__$1 = state_21866;
if(cljs.core.truth_(inst_21852)){
var statearr_21876_21901 = state_21866__$1;
(statearr_21876_21901[(1)] = (12));

} else {
var statearr_21877_21902 = state_21866__$1;
(statearr_21877_21902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (3))){
var inst_21864 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21866__$1,inst_21864);
} else {
if((state_val_21867 === (12))){
var inst_21826 = (state_21866[(7)]);
var inst_21854 = cljs.core.vec.call(null,inst_21826);
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21866__$1,(15),out,inst_21854);
} else {
if((state_val_21867 === (2))){
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21866__$1,(4),ch);
} else {
if((state_val_21867 === (11))){
var inst_21830 = (state_21866[(9)]);
var inst_21834 = (state_21866[(10)]);
var inst_21844 = (state_21866[(2)]);
var inst_21845 = [];
var inst_21846 = inst_21845.push(inst_21830);
var inst_21826 = inst_21845;
var inst_21827 = inst_21834;
var state_21866__$1 = (function (){var statearr_21878 = state_21866;
(statearr_21878[(11)] = inst_21846);

(statearr_21878[(7)] = inst_21826);

(statearr_21878[(8)] = inst_21827);

(statearr_21878[(12)] = inst_21844);

return statearr_21878;
})();
var statearr_21879_21903 = state_21866__$1;
(statearr_21879_21903[(2)] = null);

(statearr_21879_21903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (9))){
var inst_21826 = (state_21866[(7)]);
var inst_21842 = cljs.core.vec.call(null,inst_21826);
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21866__$1,(11),out,inst_21842);
} else {
if((state_val_21867 === (5))){
var inst_21830 = (state_21866[(9)]);
var inst_21827 = (state_21866[(8)]);
var inst_21834 = (state_21866[(10)]);
var inst_21834__$1 = f.call(null,inst_21830);
var inst_21835 = cljs.core._EQ_.call(null,inst_21834__$1,inst_21827);
var inst_21836 = cljs.core.keyword_identical_QMARK_.call(null,inst_21827,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21837 = ((inst_21835) || (inst_21836));
var state_21866__$1 = (function (){var statearr_21880 = state_21866;
(statearr_21880[(10)] = inst_21834__$1);

return statearr_21880;
})();
if(cljs.core.truth_(inst_21837)){
var statearr_21881_21904 = state_21866__$1;
(statearr_21881_21904[(1)] = (8));

} else {
var statearr_21882_21905 = state_21866__$1;
(statearr_21882_21905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (14))){
var inst_21859 = (state_21866[(2)]);
var inst_21860 = cljs.core.async.close_BANG_.call(null,out);
var state_21866__$1 = (function (){var statearr_21884 = state_21866;
(statearr_21884[(13)] = inst_21859);

return statearr_21884;
})();
var statearr_21885_21906 = state_21866__$1;
(statearr_21885_21906[(2)] = inst_21860);

(statearr_21885_21906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (10))){
var inst_21849 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
var statearr_21886_21907 = state_21866__$1;
(statearr_21886_21907[(2)] = inst_21849);

(statearr_21886_21907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (8))){
var inst_21830 = (state_21866[(9)]);
var inst_21826 = (state_21866[(7)]);
var inst_21834 = (state_21866[(10)]);
var inst_21839 = inst_21826.push(inst_21830);
var tmp21883 = inst_21826;
var inst_21826__$1 = tmp21883;
var inst_21827 = inst_21834;
var state_21866__$1 = (function (){var statearr_21887 = state_21866;
(statearr_21887[(7)] = inst_21826__$1);

(statearr_21887[(8)] = inst_21827);

(statearr_21887[(14)] = inst_21839);

return statearr_21887;
})();
var statearr_21888_21908 = state_21866__$1;
(statearr_21888_21908[(2)] = null);

(statearr_21888_21908[(1)] = (2));


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
});})(c__19990__auto___21894,out))
;
return ((function (switch__19895__auto__,c__19990__auto___21894,out){
return (function() {
var cljs$core$async$state_machine__19896__auto__ = null;
var cljs$core$async$state_machine__19896__auto____0 = (function (){
var statearr_21889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21889[(0)] = cljs$core$async$state_machine__19896__auto__);

(statearr_21889[(1)] = (1));

return statearr_21889;
});
var cljs$core$async$state_machine__19896__auto____1 = (function (state_21866){
while(true){
var ret_value__19897__auto__ = (function (){try{while(true){
var result__19898__auto__ = switch__19895__auto__.call(null,state_21866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19898__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19898__auto__;
}
break;
}
}catch (e21890){if((e21890 instanceof Object)){
var ex__19899__auto__ = e21890;
var statearr_21891_21909 = state_21866;
(statearr_21891_21909[(5)] = ex__19899__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21910 = state_21866;
state_21866 = G__21910;
continue;
} else {
return ret_value__19897__auto__;
}
break;
}
});
cljs$core$async$state_machine__19896__auto__ = function(state_21866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19896__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19896__auto____1.call(this,state_21866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19896__auto____0;
cljs$core$async$state_machine__19896__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19896__auto____1;
return cljs$core$async$state_machine__19896__auto__;
})()
;})(switch__19895__auto__,c__19990__auto___21894,out))
})();
var state__19992__auto__ = (function (){var statearr_21892 = f__19991__auto__.call(null);
(statearr_21892[(6)] = c__19990__auto___21894);

return statearr_21892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19992__auto__);
});})(c__19990__auto___21894,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
