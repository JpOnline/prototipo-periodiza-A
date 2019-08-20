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
var G__23873 = arguments.length;
switch (G__23873) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23874 = (function (f,blockable,meta23875){
this.f = f;
this.blockable = blockable;
this.meta23875 = meta23875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23876,meta23875__$1){
var self__ = this;
var _23876__$1 = this;
return (new cljs.core.async.t_cljs$core$async23874(self__.f,self__.blockable,meta23875__$1));
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23876){
var self__ = this;
var _23876__$1 = this;
return self__.meta23875;
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23875","meta23875",2066412191,null)], null);
});

cljs.core.async.t_cljs$core$async23874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23874";

cljs.core.async.t_cljs$core$async23874.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23874");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23874.
 */
cljs.core.async.__GT_t_cljs$core$async23874 = (function cljs$core$async$__GT_t_cljs$core$async23874(f__$1,blockable__$1,meta23875){
return (new cljs.core.async.t_cljs$core$async23874(f__$1,blockable__$1,meta23875));
});

}

return (new cljs.core.async.t_cljs$core$async23874(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23880 = arguments.length;
switch (G__23880) {
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
var G__23883 = arguments.length;
switch (G__23883) {
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
var G__23886 = arguments.length;
switch (G__23886) {
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
var val_23888 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23888);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23888,ret){
return (function (){
return fn1.call(null,val_23888);
});})(val_23888,ret))
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
var G__23890 = arguments.length;
switch (G__23890) {
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
var n__4607__auto___23892 = n;
var x_23893 = (0);
while(true){
if((x_23893 < n__4607__auto___23892)){
(a[x_23893] = (0));

var G__23894 = (x_23893 + (1));
x_23893 = G__23894;
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

var G__23895 = (i + (1));
i = G__23895;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23896 = (function (flag,meta23897){
this.flag = flag;
this.meta23897 = meta23897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23898,meta23897__$1){
var self__ = this;
var _23898__$1 = this;
return (new cljs.core.async.t_cljs$core$async23896(self__.flag,meta23897__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23898){
var self__ = this;
var _23898__$1 = this;
return self__.meta23897;
});})(flag))
;

cljs.core.async.t_cljs$core$async23896.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23896.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23896.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23897","meta23897",1161213108,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23896.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23896";

cljs.core.async.t_cljs$core$async23896.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23896");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23896.
 */
cljs.core.async.__GT_t_cljs$core$async23896 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23896(flag__$1,meta23897){
return (new cljs.core.async.t_cljs$core$async23896(flag__$1,meta23897));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23896(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23899 = (function (flag,cb,meta23900){
this.flag = flag;
this.cb = cb;
this.meta23900 = meta23900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23901,meta23900__$1){
var self__ = this;
var _23901__$1 = this;
return (new cljs.core.async.t_cljs$core$async23899(self__.flag,self__.cb,meta23900__$1));
});

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23901){
var self__ = this;
var _23901__$1 = this;
return self__.meta23900;
});

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23900","meta23900",1789257819,null)], null);
});

cljs.core.async.t_cljs$core$async23899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23899";

cljs.core.async.t_cljs$core$async23899.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23899");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23899.
 */
cljs.core.async.__GT_t_cljs$core$async23899 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23899(flag__$1,cb__$1,meta23900){
return (new cljs.core.async.t_cljs$core$async23899(flag__$1,cb__$1,meta23900));
});

}

return (new cljs.core.async.t_cljs$core$async23899(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23902_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23902_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23903_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23903_SHARP_,port], null));
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
var G__23904 = (i + (1));
i = G__23904;
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
var len__4730__auto___23910 = arguments.length;
var i__4731__auto___23911 = (0);
while(true){
if((i__4731__auto___23911 < len__4730__auto___23910)){
args__4736__auto__.push((arguments[i__4731__auto___23911]));

var G__23912 = (i__4731__auto___23911 + (1));
i__4731__auto___23911 = G__23912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23907){
var map__23908 = p__23907;
var map__23908__$1 = (((((!((map__23908 == null))))?(((((map__23908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23908):map__23908);
var opts = map__23908__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23905){
var G__23906 = cljs.core.first.call(null,seq23905);
var seq23905__$1 = cljs.core.next.call(null,seq23905);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23906,seq23905__$1);
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
var G__23914 = arguments.length;
switch (G__23914) {
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
var c__23813__auto___23960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___23960){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___23960){
return (function (state_23938){
var state_val_23939 = (state_23938[(1)]);
if((state_val_23939 === (7))){
var inst_23934 = (state_23938[(2)]);
var state_23938__$1 = state_23938;
var statearr_23940_23961 = state_23938__$1;
(statearr_23940_23961[(2)] = inst_23934);

(statearr_23940_23961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (1))){
var state_23938__$1 = state_23938;
var statearr_23941_23962 = state_23938__$1;
(statearr_23941_23962[(2)] = null);

(statearr_23941_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (4))){
var inst_23917 = (state_23938[(7)]);
var inst_23917__$1 = (state_23938[(2)]);
var inst_23918 = (inst_23917__$1 == null);
var state_23938__$1 = (function (){var statearr_23942 = state_23938;
(statearr_23942[(7)] = inst_23917__$1);

return statearr_23942;
})();
if(cljs.core.truth_(inst_23918)){
var statearr_23943_23963 = state_23938__$1;
(statearr_23943_23963[(1)] = (5));

} else {
var statearr_23944_23964 = state_23938__$1;
(statearr_23944_23964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (13))){
var state_23938__$1 = state_23938;
var statearr_23945_23965 = state_23938__$1;
(statearr_23945_23965[(2)] = null);

(statearr_23945_23965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (6))){
var inst_23917 = (state_23938[(7)]);
var state_23938__$1 = state_23938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23938__$1,(11),to,inst_23917);
} else {
if((state_val_23939 === (3))){
var inst_23936 = (state_23938[(2)]);
var state_23938__$1 = state_23938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23938__$1,inst_23936);
} else {
if((state_val_23939 === (12))){
var state_23938__$1 = state_23938;
var statearr_23946_23966 = state_23938__$1;
(statearr_23946_23966[(2)] = null);

(statearr_23946_23966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (2))){
var state_23938__$1 = state_23938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23938__$1,(4),from);
} else {
if((state_val_23939 === (11))){
var inst_23927 = (state_23938[(2)]);
var state_23938__$1 = state_23938;
if(cljs.core.truth_(inst_23927)){
var statearr_23947_23967 = state_23938__$1;
(statearr_23947_23967[(1)] = (12));

} else {
var statearr_23948_23968 = state_23938__$1;
(statearr_23948_23968[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (9))){
var state_23938__$1 = state_23938;
var statearr_23949_23969 = state_23938__$1;
(statearr_23949_23969[(2)] = null);

(statearr_23949_23969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (5))){
var state_23938__$1 = state_23938;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23950_23970 = state_23938__$1;
(statearr_23950_23970[(1)] = (8));

} else {
var statearr_23951_23971 = state_23938__$1;
(statearr_23951_23971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (14))){
var inst_23932 = (state_23938[(2)]);
var state_23938__$1 = state_23938;
var statearr_23952_23972 = state_23938__$1;
(statearr_23952_23972[(2)] = inst_23932);

(statearr_23952_23972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (10))){
var inst_23924 = (state_23938[(2)]);
var state_23938__$1 = state_23938;
var statearr_23953_23973 = state_23938__$1;
(statearr_23953_23973[(2)] = inst_23924);

(statearr_23953_23973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23939 === (8))){
var inst_23921 = cljs.core.async.close_BANG_.call(null,to);
var state_23938__$1 = state_23938;
var statearr_23954_23974 = state_23938__$1;
(statearr_23954_23974[(2)] = inst_23921);

(statearr_23954_23974[(1)] = (10));


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
});})(c__23813__auto___23960))
;
return ((function (switch__23718__auto__,c__23813__auto___23960){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_23955 = [null,null,null,null,null,null,null,null];
(statearr_23955[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_23955[(1)] = (1));

return statearr_23955;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_23938){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_23938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e23956){if((e23956 instanceof Object)){
var ex__23722__auto__ = e23956;
var statearr_23957_23975 = state_23938;
(statearr_23957_23975[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23976 = state_23938;
state_23938 = G__23976;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_23938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_23938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___23960))
})();
var state__23815__auto__ = (function (){var statearr_23958 = f__23814__auto__.call(null);
(statearr_23958[(6)] = c__23813__auto___23960);

return statearr_23958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___23960))
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
return (function (p__23977){
var vec__23978 = p__23977;
var v = cljs.core.nth.call(null,vec__23978,(0),null);
var p = cljs.core.nth.call(null,vec__23978,(1),null);
var job = vec__23978;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23813__auto___24149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___24149,res,vec__23978,v,p,job,jobs,results){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___24149,res,vec__23978,v,p,job,jobs,results){
return (function (state_23985){
var state_val_23986 = (state_23985[(1)]);
if((state_val_23986 === (1))){
var state_23985__$1 = state_23985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23985__$1,(2),res,v);
} else {
if((state_val_23986 === (2))){
var inst_23982 = (state_23985[(2)]);
var inst_23983 = cljs.core.async.close_BANG_.call(null,res);
var state_23985__$1 = (function (){var statearr_23987 = state_23985;
(statearr_23987[(7)] = inst_23982);

return statearr_23987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23985__$1,inst_23983);
} else {
return null;
}
}
});})(c__23813__auto___24149,res,vec__23978,v,p,job,jobs,results))
;
return ((function (switch__23718__auto__,c__23813__auto___24149,res,vec__23978,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0 = (function (){
var statearr_23988 = [null,null,null,null,null,null,null,null];
(statearr_23988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__);

(statearr_23988[(1)] = (1));

return statearr_23988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1 = (function (state_23985){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_23985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e23989){if((e23989 instanceof Object)){
var ex__23722__auto__ = e23989;
var statearr_23990_24150 = state_23985;
(statearr_23990_24150[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24151 = state_23985;
state_23985 = G__24151;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = function(state_23985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1.call(this,state_23985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___24149,res,vec__23978,v,p,job,jobs,results))
})();
var state__23815__auto__ = (function (){var statearr_23991 = f__23814__auto__.call(null);
(statearr_23991[(6)] = c__23813__auto___24149);

return statearr_23991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___24149,res,vec__23978,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23992){
var vec__23993 = p__23992;
var v = cljs.core.nth.call(null,vec__23993,(0),null);
var p = cljs.core.nth.call(null,vec__23993,(1),null);
var job = vec__23993;
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
var n__4607__auto___24152 = n;
var __24153 = (0);
while(true){
if((__24153 < n__4607__auto___24152)){
var G__23996_24154 = type;
var G__23996_24155__$1 = (((G__23996_24154 instanceof cljs.core.Keyword))?G__23996_24154.fqn:null);
switch (G__23996_24155__$1) {
case "compute":
var c__23813__auto___24157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24153,c__23813__auto___24157,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (__24153,c__23813__auto___24157,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async){
return (function (state_24009){
var state_val_24010 = (state_24009[(1)]);
if((state_val_24010 === (1))){
var state_24009__$1 = state_24009;
var statearr_24011_24158 = state_24009__$1;
(statearr_24011_24158[(2)] = null);

(statearr_24011_24158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (2))){
var state_24009__$1 = state_24009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24009__$1,(4),jobs);
} else {
if((state_val_24010 === (3))){
var inst_24007 = (state_24009[(2)]);
var state_24009__$1 = state_24009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24009__$1,inst_24007);
} else {
if((state_val_24010 === (4))){
var inst_23999 = (state_24009[(2)]);
var inst_24000 = process.call(null,inst_23999);
var state_24009__$1 = state_24009;
if(cljs.core.truth_(inst_24000)){
var statearr_24012_24159 = state_24009__$1;
(statearr_24012_24159[(1)] = (5));

} else {
var statearr_24013_24160 = state_24009__$1;
(statearr_24013_24160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (5))){
var state_24009__$1 = state_24009;
var statearr_24014_24161 = state_24009__$1;
(statearr_24014_24161[(2)] = null);

(statearr_24014_24161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (6))){
var state_24009__$1 = state_24009;
var statearr_24015_24162 = state_24009__$1;
(statearr_24015_24162[(2)] = null);

(statearr_24015_24162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24010 === (7))){
var inst_24005 = (state_24009[(2)]);
var state_24009__$1 = state_24009;
var statearr_24016_24163 = state_24009__$1;
(statearr_24016_24163[(2)] = inst_24005);

(statearr_24016_24163[(1)] = (3));


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
});})(__24153,c__23813__auto___24157,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async))
;
return ((function (__24153,switch__23718__auto__,c__23813__auto___24157,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0 = (function (){
var statearr_24017 = [null,null,null,null,null,null,null];
(statearr_24017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__);

(statearr_24017[(1)] = (1));

return statearr_24017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1 = (function (state_24009){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24018){if((e24018 instanceof Object)){
var ex__23722__auto__ = e24018;
var statearr_24019_24164 = state_24009;
(statearr_24019_24164[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24165 = state_24009;
state_24009 = G__24165;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = function(state_24009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1.call(this,state_24009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__;
})()
;})(__24153,switch__23718__auto__,c__23813__auto___24157,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async))
})();
var state__23815__auto__ = (function (){var statearr_24020 = f__23814__auto__.call(null);
(statearr_24020[(6)] = c__23813__auto___24157);

return statearr_24020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(__24153,c__23813__auto___24157,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async))
);


break;
case "async":
var c__23813__auto___24166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24153,c__23813__auto___24166,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (__24153,c__23813__auto___24166,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async){
return (function (state_24033){
var state_val_24034 = (state_24033[(1)]);
if((state_val_24034 === (1))){
var state_24033__$1 = state_24033;
var statearr_24035_24167 = state_24033__$1;
(statearr_24035_24167[(2)] = null);

(statearr_24035_24167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (2))){
var state_24033__$1 = state_24033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24033__$1,(4),jobs);
} else {
if((state_val_24034 === (3))){
var inst_24031 = (state_24033[(2)]);
var state_24033__$1 = state_24033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24033__$1,inst_24031);
} else {
if((state_val_24034 === (4))){
var inst_24023 = (state_24033[(2)]);
var inst_24024 = async.call(null,inst_24023);
var state_24033__$1 = state_24033;
if(cljs.core.truth_(inst_24024)){
var statearr_24036_24168 = state_24033__$1;
(statearr_24036_24168[(1)] = (5));

} else {
var statearr_24037_24169 = state_24033__$1;
(statearr_24037_24169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (5))){
var state_24033__$1 = state_24033;
var statearr_24038_24170 = state_24033__$1;
(statearr_24038_24170[(2)] = null);

(statearr_24038_24170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (6))){
var state_24033__$1 = state_24033;
var statearr_24039_24171 = state_24033__$1;
(statearr_24039_24171[(2)] = null);

(statearr_24039_24171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24034 === (7))){
var inst_24029 = (state_24033[(2)]);
var state_24033__$1 = state_24033;
var statearr_24040_24172 = state_24033__$1;
(statearr_24040_24172[(2)] = inst_24029);

(statearr_24040_24172[(1)] = (3));


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
});})(__24153,c__23813__auto___24166,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async))
;
return ((function (__24153,switch__23718__auto__,c__23813__auto___24166,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0 = (function (){
var statearr_24041 = [null,null,null,null,null,null,null];
(statearr_24041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__);

(statearr_24041[(1)] = (1));

return statearr_24041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1 = (function (state_24033){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24042){if((e24042 instanceof Object)){
var ex__23722__auto__ = e24042;
var statearr_24043_24173 = state_24033;
(statearr_24043_24173[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24174 = state_24033;
state_24033 = G__24174;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = function(state_24033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1.call(this,state_24033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__;
})()
;})(__24153,switch__23718__auto__,c__23813__auto___24166,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async))
})();
var state__23815__auto__ = (function (){var statearr_24044 = f__23814__auto__.call(null);
(statearr_24044[(6)] = c__23813__auto___24166);

return statearr_24044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(__24153,c__23813__auto___24166,G__23996_24154,G__23996_24155__$1,n__4607__auto___24152,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23996_24155__$1)].join('')));

}

var G__24175 = (__24153 + (1));
__24153 = G__24175;
continue;
} else {
}
break;
}

var c__23813__auto___24176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___24176,jobs,results,process,async){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___24176,jobs,results,process,async){
return (function (state_24066){
var state_val_24067 = (state_24066[(1)]);
if((state_val_24067 === (7))){
var inst_24062 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
var statearr_24068_24177 = state_24066__$1;
(statearr_24068_24177[(2)] = inst_24062);

(statearr_24068_24177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24067 === (1))){
var state_24066__$1 = state_24066;
var statearr_24069_24178 = state_24066__$1;
(statearr_24069_24178[(2)] = null);

(statearr_24069_24178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24067 === (4))){
var inst_24047 = (state_24066[(7)]);
var inst_24047__$1 = (state_24066[(2)]);
var inst_24048 = (inst_24047__$1 == null);
var state_24066__$1 = (function (){var statearr_24070 = state_24066;
(statearr_24070[(7)] = inst_24047__$1);

return statearr_24070;
})();
if(cljs.core.truth_(inst_24048)){
var statearr_24071_24179 = state_24066__$1;
(statearr_24071_24179[(1)] = (5));

} else {
var statearr_24072_24180 = state_24066__$1;
(statearr_24072_24180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24067 === (6))){
var inst_24052 = (state_24066[(8)]);
var inst_24047 = (state_24066[(7)]);
var inst_24052__$1 = cljs.core.async.chan.call(null,(1));
var inst_24053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24054 = [inst_24047,inst_24052__$1];
var inst_24055 = (new cljs.core.PersistentVector(null,2,(5),inst_24053,inst_24054,null));
var state_24066__$1 = (function (){var statearr_24073 = state_24066;
(statearr_24073[(8)] = inst_24052__$1);

return statearr_24073;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24066__$1,(8),jobs,inst_24055);
} else {
if((state_val_24067 === (3))){
var inst_24064 = (state_24066[(2)]);
var state_24066__$1 = state_24066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24066__$1,inst_24064);
} else {
if((state_val_24067 === (2))){
var state_24066__$1 = state_24066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24066__$1,(4),from);
} else {
if((state_val_24067 === (9))){
var inst_24059 = (state_24066[(2)]);
var state_24066__$1 = (function (){var statearr_24074 = state_24066;
(statearr_24074[(9)] = inst_24059);

return statearr_24074;
})();
var statearr_24075_24181 = state_24066__$1;
(statearr_24075_24181[(2)] = null);

(statearr_24075_24181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24067 === (5))){
var inst_24050 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24066__$1 = state_24066;
var statearr_24076_24182 = state_24066__$1;
(statearr_24076_24182[(2)] = inst_24050);

(statearr_24076_24182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24067 === (8))){
var inst_24052 = (state_24066[(8)]);
var inst_24057 = (state_24066[(2)]);
var state_24066__$1 = (function (){var statearr_24077 = state_24066;
(statearr_24077[(10)] = inst_24057);

return statearr_24077;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24066__$1,(9),results,inst_24052);
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
});})(c__23813__auto___24176,jobs,results,process,async))
;
return ((function (switch__23718__auto__,c__23813__auto___24176,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0 = (function (){
var statearr_24078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__);

(statearr_24078[(1)] = (1));

return statearr_24078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1 = (function (state_24066){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24079){if((e24079 instanceof Object)){
var ex__23722__auto__ = e24079;
var statearr_24080_24183 = state_24066;
(statearr_24080_24183[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24184 = state_24066;
state_24066 = G__24184;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = function(state_24066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1.call(this,state_24066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___24176,jobs,results,process,async))
})();
var state__23815__auto__ = (function (){var statearr_24081 = f__23814__auto__.call(null);
(statearr_24081[(6)] = c__23813__auto___24176);

return statearr_24081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___24176,jobs,results,process,async))
);


var c__23813__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto__,jobs,results,process,async){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto__,jobs,results,process,async){
return (function (state_24119){
var state_val_24120 = (state_24119[(1)]);
if((state_val_24120 === (7))){
var inst_24115 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24121_24185 = state_24119__$1;
(statearr_24121_24185[(2)] = inst_24115);

(statearr_24121_24185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (20))){
var state_24119__$1 = state_24119;
var statearr_24122_24186 = state_24119__$1;
(statearr_24122_24186[(2)] = null);

(statearr_24122_24186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (1))){
var state_24119__$1 = state_24119;
var statearr_24123_24187 = state_24119__$1;
(statearr_24123_24187[(2)] = null);

(statearr_24123_24187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (4))){
var inst_24084 = (state_24119[(7)]);
var inst_24084__$1 = (state_24119[(2)]);
var inst_24085 = (inst_24084__$1 == null);
var state_24119__$1 = (function (){var statearr_24124 = state_24119;
(statearr_24124[(7)] = inst_24084__$1);

return statearr_24124;
})();
if(cljs.core.truth_(inst_24085)){
var statearr_24125_24188 = state_24119__$1;
(statearr_24125_24188[(1)] = (5));

} else {
var statearr_24126_24189 = state_24119__$1;
(statearr_24126_24189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (15))){
var inst_24097 = (state_24119[(8)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24119__$1,(18),to,inst_24097);
} else {
if((state_val_24120 === (21))){
var inst_24110 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24127_24190 = state_24119__$1;
(statearr_24127_24190[(2)] = inst_24110);

(statearr_24127_24190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (13))){
var inst_24112 = (state_24119[(2)]);
var state_24119__$1 = (function (){var statearr_24128 = state_24119;
(statearr_24128[(9)] = inst_24112);

return statearr_24128;
})();
var statearr_24129_24191 = state_24119__$1;
(statearr_24129_24191[(2)] = null);

(statearr_24129_24191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (6))){
var inst_24084 = (state_24119[(7)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24119__$1,(11),inst_24084);
} else {
if((state_val_24120 === (17))){
var inst_24105 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
if(cljs.core.truth_(inst_24105)){
var statearr_24130_24192 = state_24119__$1;
(statearr_24130_24192[(1)] = (19));

} else {
var statearr_24131_24193 = state_24119__$1;
(statearr_24131_24193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (3))){
var inst_24117 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24119__$1,inst_24117);
} else {
if((state_val_24120 === (12))){
var inst_24094 = (state_24119[(10)]);
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24119__$1,(14),inst_24094);
} else {
if((state_val_24120 === (2))){
var state_24119__$1 = state_24119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24119__$1,(4),results);
} else {
if((state_val_24120 === (19))){
var state_24119__$1 = state_24119;
var statearr_24132_24194 = state_24119__$1;
(statearr_24132_24194[(2)] = null);

(statearr_24132_24194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (11))){
var inst_24094 = (state_24119[(2)]);
var state_24119__$1 = (function (){var statearr_24133 = state_24119;
(statearr_24133[(10)] = inst_24094);

return statearr_24133;
})();
var statearr_24134_24195 = state_24119__$1;
(statearr_24134_24195[(2)] = null);

(statearr_24134_24195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (9))){
var state_24119__$1 = state_24119;
var statearr_24135_24196 = state_24119__$1;
(statearr_24135_24196[(2)] = null);

(statearr_24135_24196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (5))){
var state_24119__$1 = state_24119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24136_24197 = state_24119__$1;
(statearr_24136_24197[(1)] = (8));

} else {
var statearr_24137_24198 = state_24119__$1;
(statearr_24137_24198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (14))){
var inst_24099 = (state_24119[(11)]);
var inst_24097 = (state_24119[(8)]);
var inst_24097__$1 = (state_24119[(2)]);
var inst_24098 = (inst_24097__$1 == null);
var inst_24099__$1 = cljs.core.not.call(null,inst_24098);
var state_24119__$1 = (function (){var statearr_24138 = state_24119;
(statearr_24138[(11)] = inst_24099__$1);

(statearr_24138[(8)] = inst_24097__$1);

return statearr_24138;
})();
if(inst_24099__$1){
var statearr_24139_24199 = state_24119__$1;
(statearr_24139_24199[(1)] = (15));

} else {
var statearr_24140_24200 = state_24119__$1;
(statearr_24140_24200[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (16))){
var inst_24099 = (state_24119[(11)]);
var state_24119__$1 = state_24119;
var statearr_24141_24201 = state_24119__$1;
(statearr_24141_24201[(2)] = inst_24099);

(statearr_24141_24201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (10))){
var inst_24091 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24142_24202 = state_24119__$1;
(statearr_24142_24202[(2)] = inst_24091);

(statearr_24142_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (18))){
var inst_24102 = (state_24119[(2)]);
var state_24119__$1 = state_24119;
var statearr_24143_24203 = state_24119__$1;
(statearr_24143_24203[(2)] = inst_24102);

(statearr_24143_24203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24120 === (8))){
var inst_24088 = cljs.core.async.close_BANG_.call(null,to);
var state_24119__$1 = state_24119;
var statearr_24144_24204 = state_24119__$1;
(statearr_24144_24204[(2)] = inst_24088);

(statearr_24144_24204[(1)] = (10));


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
});})(c__23813__auto__,jobs,results,process,async))
;
return ((function (switch__23718__auto__,c__23813__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0 = (function (){
var statearr_24145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__);

(statearr_24145[(1)] = (1));

return statearr_24145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1 = (function (state_24119){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24146){if((e24146 instanceof Object)){
var ex__23722__auto__ = e24146;
var statearr_24147_24205 = state_24119;
(statearr_24147_24205[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24206 = state_24119;
state_24119 = G__24206;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__ = function(state_24119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1.call(this,state_24119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto__,jobs,results,process,async))
})();
var state__23815__auto__ = (function (){var statearr_24148 = f__23814__auto__.call(null);
(statearr_24148[(6)] = c__23813__auto__);

return statearr_24148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto__,jobs,results,process,async))
);

return c__23813__auto__;
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
var G__24208 = arguments.length;
switch (G__24208) {
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
var G__24211 = arguments.length;
switch (G__24211) {
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
var G__24214 = arguments.length;
switch (G__24214) {
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
var c__23813__auto___24263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___24263,tc,fc){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___24263,tc,fc){
return (function (state_24240){
var state_val_24241 = (state_24240[(1)]);
if((state_val_24241 === (7))){
var inst_24236 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24242_24264 = state_24240__$1;
(statearr_24242_24264[(2)] = inst_24236);

(statearr_24242_24264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (1))){
var state_24240__$1 = state_24240;
var statearr_24243_24265 = state_24240__$1;
(statearr_24243_24265[(2)] = null);

(statearr_24243_24265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (4))){
var inst_24217 = (state_24240[(7)]);
var inst_24217__$1 = (state_24240[(2)]);
var inst_24218 = (inst_24217__$1 == null);
var state_24240__$1 = (function (){var statearr_24244 = state_24240;
(statearr_24244[(7)] = inst_24217__$1);

return statearr_24244;
})();
if(cljs.core.truth_(inst_24218)){
var statearr_24245_24266 = state_24240__$1;
(statearr_24245_24266[(1)] = (5));

} else {
var statearr_24246_24267 = state_24240__$1;
(statearr_24246_24267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (13))){
var state_24240__$1 = state_24240;
var statearr_24247_24268 = state_24240__$1;
(statearr_24247_24268[(2)] = null);

(statearr_24247_24268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (6))){
var inst_24217 = (state_24240[(7)]);
var inst_24223 = p.call(null,inst_24217);
var state_24240__$1 = state_24240;
if(cljs.core.truth_(inst_24223)){
var statearr_24248_24269 = state_24240__$1;
(statearr_24248_24269[(1)] = (9));

} else {
var statearr_24249_24270 = state_24240__$1;
(statearr_24249_24270[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (3))){
var inst_24238 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24240__$1,inst_24238);
} else {
if((state_val_24241 === (12))){
var state_24240__$1 = state_24240;
var statearr_24250_24271 = state_24240__$1;
(statearr_24250_24271[(2)] = null);

(statearr_24250_24271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (2))){
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24240__$1,(4),ch);
} else {
if((state_val_24241 === (11))){
var inst_24217 = (state_24240[(7)]);
var inst_24227 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24240__$1,(8),inst_24227,inst_24217);
} else {
if((state_val_24241 === (9))){
var state_24240__$1 = state_24240;
var statearr_24251_24272 = state_24240__$1;
(statearr_24251_24272[(2)] = tc);

(statearr_24251_24272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (5))){
var inst_24220 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24221 = cljs.core.async.close_BANG_.call(null,fc);
var state_24240__$1 = (function (){var statearr_24252 = state_24240;
(statearr_24252[(8)] = inst_24220);

return statearr_24252;
})();
var statearr_24253_24273 = state_24240__$1;
(statearr_24253_24273[(2)] = inst_24221);

(statearr_24253_24273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (14))){
var inst_24234 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
var statearr_24254_24274 = state_24240__$1;
(statearr_24254_24274[(2)] = inst_24234);

(statearr_24254_24274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (10))){
var state_24240__$1 = state_24240;
var statearr_24255_24275 = state_24240__$1;
(statearr_24255_24275[(2)] = fc);

(statearr_24255_24275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24241 === (8))){
var inst_24229 = (state_24240[(2)]);
var state_24240__$1 = state_24240;
if(cljs.core.truth_(inst_24229)){
var statearr_24256_24276 = state_24240__$1;
(statearr_24256_24276[(1)] = (12));

} else {
var statearr_24257_24277 = state_24240__$1;
(statearr_24257_24277[(1)] = (13));

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
});})(c__23813__auto___24263,tc,fc))
;
return ((function (switch__23718__auto__,c__23813__auto___24263,tc,fc){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_24258 = [null,null,null,null,null,null,null,null,null];
(statearr_24258[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_24258[(1)] = (1));

return statearr_24258;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_24240){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24259){if((e24259 instanceof Object)){
var ex__23722__auto__ = e24259;
var statearr_24260_24278 = state_24240;
(statearr_24260_24278[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24279 = state_24240;
state_24240 = G__24279;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_24240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_24240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___24263,tc,fc))
})();
var state__23815__auto__ = (function (){var statearr_24261 = f__23814__auto__.call(null);
(statearr_24261[(6)] = c__23813__auto___24263);

return statearr_24261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___24263,tc,fc))
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
var c__23813__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto__){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto__){
return (function (state_24300){
var state_val_24301 = (state_24300[(1)]);
if((state_val_24301 === (7))){
var inst_24296 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24302_24320 = state_24300__$1;
(statearr_24302_24320[(2)] = inst_24296);

(statearr_24302_24320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (1))){
var inst_24280 = init;
var state_24300__$1 = (function (){var statearr_24303 = state_24300;
(statearr_24303[(7)] = inst_24280);

return statearr_24303;
})();
var statearr_24304_24321 = state_24300__$1;
(statearr_24304_24321[(2)] = null);

(statearr_24304_24321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (4))){
var inst_24283 = (state_24300[(8)]);
var inst_24283__$1 = (state_24300[(2)]);
var inst_24284 = (inst_24283__$1 == null);
var state_24300__$1 = (function (){var statearr_24305 = state_24300;
(statearr_24305[(8)] = inst_24283__$1);

return statearr_24305;
})();
if(cljs.core.truth_(inst_24284)){
var statearr_24306_24322 = state_24300__$1;
(statearr_24306_24322[(1)] = (5));

} else {
var statearr_24307_24323 = state_24300__$1;
(statearr_24307_24323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (6))){
var inst_24280 = (state_24300[(7)]);
var inst_24287 = (state_24300[(9)]);
var inst_24283 = (state_24300[(8)]);
var inst_24287__$1 = f.call(null,inst_24280,inst_24283);
var inst_24288 = cljs.core.reduced_QMARK_.call(null,inst_24287__$1);
var state_24300__$1 = (function (){var statearr_24308 = state_24300;
(statearr_24308[(9)] = inst_24287__$1);

return statearr_24308;
})();
if(inst_24288){
var statearr_24309_24324 = state_24300__$1;
(statearr_24309_24324[(1)] = (8));

} else {
var statearr_24310_24325 = state_24300__$1;
(statearr_24310_24325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (3))){
var inst_24298 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24300__$1,inst_24298);
} else {
if((state_val_24301 === (2))){
var state_24300__$1 = state_24300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24300__$1,(4),ch);
} else {
if((state_val_24301 === (9))){
var inst_24287 = (state_24300[(9)]);
var inst_24280 = inst_24287;
var state_24300__$1 = (function (){var statearr_24311 = state_24300;
(statearr_24311[(7)] = inst_24280);

return statearr_24311;
})();
var statearr_24312_24326 = state_24300__$1;
(statearr_24312_24326[(2)] = null);

(statearr_24312_24326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (5))){
var inst_24280 = (state_24300[(7)]);
var state_24300__$1 = state_24300;
var statearr_24313_24327 = state_24300__$1;
(statearr_24313_24327[(2)] = inst_24280);

(statearr_24313_24327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (10))){
var inst_24294 = (state_24300[(2)]);
var state_24300__$1 = state_24300;
var statearr_24314_24328 = state_24300__$1;
(statearr_24314_24328[(2)] = inst_24294);

(statearr_24314_24328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24301 === (8))){
var inst_24287 = (state_24300[(9)]);
var inst_24290 = cljs.core.deref.call(null,inst_24287);
var state_24300__$1 = state_24300;
var statearr_24315_24329 = state_24300__$1;
(statearr_24315_24329[(2)] = inst_24290);

(statearr_24315_24329[(1)] = (10));


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
});})(c__23813__auto__))
;
return ((function (switch__23718__auto__,c__23813__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23719__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23719__auto____0 = (function (){
var statearr_24316 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24316[(0)] = cljs$core$async$reduce_$_state_machine__23719__auto__);

(statearr_24316[(1)] = (1));

return statearr_24316;
});
var cljs$core$async$reduce_$_state_machine__23719__auto____1 = (function (state_24300){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24317){if((e24317 instanceof Object)){
var ex__23722__auto__ = e24317;
var statearr_24318_24330 = state_24300;
(statearr_24318_24330[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24331 = state_24300;
state_24300 = G__24331;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23719__auto__ = function(state_24300){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23719__auto____1.call(this,state_24300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23719__auto____0;
cljs$core$async$reduce_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23719__auto____1;
return cljs$core$async$reduce_$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto__))
})();
var state__23815__auto__ = (function (){var statearr_24319 = f__23814__auto__.call(null);
(statearr_24319[(6)] = c__23813__auto__);

return statearr_24319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto__))
);

return c__23813__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23813__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto__,f__$1){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto__,f__$1){
return (function (state_24337){
var state_val_24338 = (state_24337[(1)]);
if((state_val_24338 === (1))){
var inst_24332 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24337__$1,(2),inst_24332);
} else {
if((state_val_24338 === (2))){
var inst_24334 = (state_24337[(2)]);
var inst_24335 = f__$1.call(null,inst_24334);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24337__$1,inst_24335);
} else {
return null;
}
}
});})(c__23813__auto__,f__$1))
;
return ((function (switch__23718__auto__,c__23813__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23719__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23719__auto____0 = (function (){
var statearr_24339 = [null,null,null,null,null,null,null];
(statearr_24339[(0)] = cljs$core$async$transduce_$_state_machine__23719__auto__);

(statearr_24339[(1)] = (1));

return statearr_24339;
});
var cljs$core$async$transduce_$_state_machine__23719__auto____1 = (function (state_24337){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24340){if((e24340 instanceof Object)){
var ex__23722__auto__ = e24340;
var statearr_24341_24343 = state_24337;
(statearr_24341_24343[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24344 = state_24337;
state_24337 = G__24344;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23719__auto__ = function(state_24337){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23719__auto____1.call(this,state_24337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23719__auto____0;
cljs$core$async$transduce_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23719__auto____1;
return cljs$core$async$transduce_$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto__,f__$1))
})();
var state__23815__auto__ = (function (){var statearr_24342 = f__23814__auto__.call(null);
(statearr_24342[(6)] = c__23813__auto__);

return statearr_24342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto__,f__$1))
);

return c__23813__auto__;
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
var G__24346 = arguments.length;
switch (G__24346) {
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
var c__23813__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto__){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto__){
return (function (state_24371){
var state_val_24372 = (state_24371[(1)]);
if((state_val_24372 === (7))){
var inst_24353 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
var statearr_24373_24394 = state_24371__$1;
(statearr_24373_24394[(2)] = inst_24353);

(statearr_24373_24394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (1))){
var inst_24347 = cljs.core.seq.call(null,coll);
var inst_24348 = inst_24347;
var state_24371__$1 = (function (){var statearr_24374 = state_24371;
(statearr_24374[(7)] = inst_24348);

return statearr_24374;
})();
var statearr_24375_24395 = state_24371__$1;
(statearr_24375_24395[(2)] = null);

(statearr_24375_24395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (4))){
var inst_24348 = (state_24371[(7)]);
var inst_24351 = cljs.core.first.call(null,inst_24348);
var state_24371__$1 = state_24371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24371__$1,(7),ch,inst_24351);
} else {
if((state_val_24372 === (13))){
var inst_24365 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
var statearr_24376_24396 = state_24371__$1;
(statearr_24376_24396[(2)] = inst_24365);

(statearr_24376_24396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (6))){
var inst_24356 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
if(cljs.core.truth_(inst_24356)){
var statearr_24377_24397 = state_24371__$1;
(statearr_24377_24397[(1)] = (8));

} else {
var statearr_24378_24398 = state_24371__$1;
(statearr_24378_24398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (3))){
var inst_24369 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24371__$1,inst_24369);
} else {
if((state_val_24372 === (12))){
var state_24371__$1 = state_24371;
var statearr_24379_24399 = state_24371__$1;
(statearr_24379_24399[(2)] = null);

(statearr_24379_24399[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (2))){
var inst_24348 = (state_24371[(7)]);
var state_24371__$1 = state_24371;
if(cljs.core.truth_(inst_24348)){
var statearr_24380_24400 = state_24371__$1;
(statearr_24380_24400[(1)] = (4));

} else {
var statearr_24381_24401 = state_24371__$1;
(statearr_24381_24401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (11))){
var inst_24362 = cljs.core.async.close_BANG_.call(null,ch);
var state_24371__$1 = state_24371;
var statearr_24382_24402 = state_24371__$1;
(statearr_24382_24402[(2)] = inst_24362);

(statearr_24382_24402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (9))){
var state_24371__$1 = state_24371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24383_24403 = state_24371__$1;
(statearr_24383_24403[(1)] = (11));

} else {
var statearr_24384_24404 = state_24371__$1;
(statearr_24384_24404[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (5))){
var inst_24348 = (state_24371[(7)]);
var state_24371__$1 = state_24371;
var statearr_24385_24405 = state_24371__$1;
(statearr_24385_24405[(2)] = inst_24348);

(statearr_24385_24405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (10))){
var inst_24367 = (state_24371[(2)]);
var state_24371__$1 = state_24371;
var statearr_24386_24406 = state_24371__$1;
(statearr_24386_24406[(2)] = inst_24367);

(statearr_24386_24406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24372 === (8))){
var inst_24348 = (state_24371[(7)]);
var inst_24358 = cljs.core.next.call(null,inst_24348);
var inst_24348__$1 = inst_24358;
var state_24371__$1 = (function (){var statearr_24387 = state_24371;
(statearr_24387[(7)] = inst_24348__$1);

return statearr_24387;
})();
var statearr_24388_24407 = state_24371__$1;
(statearr_24388_24407[(2)] = null);

(statearr_24388_24407[(1)] = (2));


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
});})(c__23813__auto__))
;
return ((function (switch__23718__auto__,c__23813__auto__){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_24389 = [null,null,null,null,null,null,null,null];
(statearr_24389[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_24389[(1)] = (1));

return statearr_24389;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_24371){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24390){if((e24390 instanceof Object)){
var ex__23722__auto__ = e24390;
var statearr_24391_24408 = state_24371;
(statearr_24391_24408[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24409 = state_24371;
state_24371 = G__24409;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_24371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_24371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto__))
})();
var state__23815__auto__ = (function (){var statearr_24392 = f__23814__auto__.call(null);
(statearr_24392[(6)] = c__23813__auto__);

return statearr_24392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto__))
);

return c__23813__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24410 = (function (ch,cs,meta24411){
this.ch = ch;
this.cs = cs;
this.meta24411 = meta24411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24412,meta24411__$1){
var self__ = this;
var _24412__$1 = this;
return (new cljs.core.async.t_cljs$core$async24410(self__.ch,self__.cs,meta24411__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24412){
var self__ = this;
var _24412__$1 = this;
return self__.meta24411;
});})(cs))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24410.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24410.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24411","meta24411",-25997711,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24410";

cljs.core.async.t_cljs$core$async24410.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24410");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24410.
 */
cljs.core.async.__GT_t_cljs$core$async24410 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24410(ch__$1,cs__$1,meta24411){
return (new cljs.core.async.t_cljs$core$async24410(ch__$1,cs__$1,meta24411));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24410(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23813__auto___24632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___24632,cs,m,dchan,dctr,done){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___24632,cs,m,dchan,dctr,done){
return (function (state_24547){
var state_val_24548 = (state_24547[(1)]);
if((state_val_24548 === (7))){
var inst_24543 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24549_24633 = state_24547__$1;
(statearr_24549_24633[(2)] = inst_24543);

(statearr_24549_24633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (20))){
var inst_24446 = (state_24547[(7)]);
var inst_24458 = cljs.core.first.call(null,inst_24446);
var inst_24459 = cljs.core.nth.call(null,inst_24458,(0),null);
var inst_24460 = cljs.core.nth.call(null,inst_24458,(1),null);
var state_24547__$1 = (function (){var statearr_24550 = state_24547;
(statearr_24550[(8)] = inst_24459);

return statearr_24550;
})();
if(cljs.core.truth_(inst_24460)){
var statearr_24551_24634 = state_24547__$1;
(statearr_24551_24634[(1)] = (22));

} else {
var statearr_24552_24635 = state_24547__$1;
(statearr_24552_24635[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (27))){
var inst_24415 = (state_24547[(9)]);
var inst_24495 = (state_24547[(10)]);
var inst_24490 = (state_24547[(11)]);
var inst_24488 = (state_24547[(12)]);
var inst_24495__$1 = cljs.core._nth.call(null,inst_24488,inst_24490);
var inst_24496 = cljs.core.async.put_BANG_.call(null,inst_24495__$1,inst_24415,done);
var state_24547__$1 = (function (){var statearr_24553 = state_24547;
(statearr_24553[(10)] = inst_24495__$1);

return statearr_24553;
})();
if(cljs.core.truth_(inst_24496)){
var statearr_24554_24636 = state_24547__$1;
(statearr_24554_24636[(1)] = (30));

} else {
var statearr_24555_24637 = state_24547__$1;
(statearr_24555_24637[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (1))){
var state_24547__$1 = state_24547;
var statearr_24556_24638 = state_24547__$1;
(statearr_24556_24638[(2)] = null);

(statearr_24556_24638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (24))){
var inst_24446 = (state_24547[(7)]);
var inst_24465 = (state_24547[(2)]);
var inst_24466 = cljs.core.next.call(null,inst_24446);
var inst_24424 = inst_24466;
var inst_24425 = null;
var inst_24426 = (0);
var inst_24427 = (0);
var state_24547__$1 = (function (){var statearr_24557 = state_24547;
(statearr_24557[(13)] = inst_24425);

(statearr_24557[(14)] = inst_24427);

(statearr_24557[(15)] = inst_24424);

(statearr_24557[(16)] = inst_24465);

(statearr_24557[(17)] = inst_24426);

return statearr_24557;
})();
var statearr_24558_24639 = state_24547__$1;
(statearr_24558_24639[(2)] = null);

(statearr_24558_24639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (39))){
var state_24547__$1 = state_24547;
var statearr_24562_24640 = state_24547__$1;
(statearr_24562_24640[(2)] = null);

(statearr_24562_24640[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (4))){
var inst_24415 = (state_24547[(9)]);
var inst_24415__$1 = (state_24547[(2)]);
var inst_24416 = (inst_24415__$1 == null);
var state_24547__$1 = (function (){var statearr_24563 = state_24547;
(statearr_24563[(9)] = inst_24415__$1);

return statearr_24563;
})();
if(cljs.core.truth_(inst_24416)){
var statearr_24564_24641 = state_24547__$1;
(statearr_24564_24641[(1)] = (5));

} else {
var statearr_24565_24642 = state_24547__$1;
(statearr_24565_24642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (15))){
var inst_24425 = (state_24547[(13)]);
var inst_24427 = (state_24547[(14)]);
var inst_24424 = (state_24547[(15)]);
var inst_24426 = (state_24547[(17)]);
var inst_24442 = (state_24547[(2)]);
var inst_24443 = (inst_24427 + (1));
var tmp24559 = inst_24425;
var tmp24560 = inst_24424;
var tmp24561 = inst_24426;
var inst_24424__$1 = tmp24560;
var inst_24425__$1 = tmp24559;
var inst_24426__$1 = tmp24561;
var inst_24427__$1 = inst_24443;
var state_24547__$1 = (function (){var statearr_24566 = state_24547;
(statearr_24566[(13)] = inst_24425__$1);

(statearr_24566[(14)] = inst_24427__$1);

(statearr_24566[(15)] = inst_24424__$1);

(statearr_24566[(17)] = inst_24426__$1);

(statearr_24566[(18)] = inst_24442);

return statearr_24566;
})();
var statearr_24567_24643 = state_24547__$1;
(statearr_24567_24643[(2)] = null);

(statearr_24567_24643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (21))){
var inst_24469 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24571_24644 = state_24547__$1;
(statearr_24571_24644[(2)] = inst_24469);

(statearr_24571_24644[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (31))){
var inst_24495 = (state_24547[(10)]);
var inst_24499 = done.call(null,null);
var inst_24500 = cljs.core.async.untap_STAR_.call(null,m,inst_24495);
var state_24547__$1 = (function (){var statearr_24572 = state_24547;
(statearr_24572[(19)] = inst_24499);

return statearr_24572;
})();
var statearr_24573_24645 = state_24547__$1;
(statearr_24573_24645[(2)] = inst_24500);

(statearr_24573_24645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (32))){
var inst_24490 = (state_24547[(11)]);
var inst_24487 = (state_24547[(20)]);
var inst_24489 = (state_24547[(21)]);
var inst_24488 = (state_24547[(12)]);
var inst_24502 = (state_24547[(2)]);
var inst_24503 = (inst_24490 + (1));
var tmp24568 = inst_24487;
var tmp24569 = inst_24489;
var tmp24570 = inst_24488;
var inst_24487__$1 = tmp24568;
var inst_24488__$1 = tmp24570;
var inst_24489__$1 = tmp24569;
var inst_24490__$1 = inst_24503;
var state_24547__$1 = (function (){var statearr_24574 = state_24547;
(statearr_24574[(11)] = inst_24490__$1);

(statearr_24574[(20)] = inst_24487__$1);

(statearr_24574[(22)] = inst_24502);

(statearr_24574[(21)] = inst_24489__$1);

(statearr_24574[(12)] = inst_24488__$1);

return statearr_24574;
})();
var statearr_24575_24646 = state_24547__$1;
(statearr_24575_24646[(2)] = null);

(statearr_24575_24646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (40))){
var inst_24515 = (state_24547[(23)]);
var inst_24519 = done.call(null,null);
var inst_24520 = cljs.core.async.untap_STAR_.call(null,m,inst_24515);
var state_24547__$1 = (function (){var statearr_24576 = state_24547;
(statearr_24576[(24)] = inst_24519);

return statearr_24576;
})();
var statearr_24577_24647 = state_24547__$1;
(statearr_24577_24647[(2)] = inst_24520);

(statearr_24577_24647[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (33))){
var inst_24506 = (state_24547[(25)]);
var inst_24508 = cljs.core.chunked_seq_QMARK_.call(null,inst_24506);
var state_24547__$1 = state_24547;
if(inst_24508){
var statearr_24578_24648 = state_24547__$1;
(statearr_24578_24648[(1)] = (36));

} else {
var statearr_24579_24649 = state_24547__$1;
(statearr_24579_24649[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (13))){
var inst_24436 = (state_24547[(26)]);
var inst_24439 = cljs.core.async.close_BANG_.call(null,inst_24436);
var state_24547__$1 = state_24547;
var statearr_24580_24650 = state_24547__$1;
(statearr_24580_24650[(2)] = inst_24439);

(statearr_24580_24650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (22))){
var inst_24459 = (state_24547[(8)]);
var inst_24462 = cljs.core.async.close_BANG_.call(null,inst_24459);
var state_24547__$1 = state_24547;
var statearr_24581_24651 = state_24547__$1;
(statearr_24581_24651[(2)] = inst_24462);

(statearr_24581_24651[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (36))){
var inst_24506 = (state_24547[(25)]);
var inst_24510 = cljs.core.chunk_first.call(null,inst_24506);
var inst_24511 = cljs.core.chunk_rest.call(null,inst_24506);
var inst_24512 = cljs.core.count.call(null,inst_24510);
var inst_24487 = inst_24511;
var inst_24488 = inst_24510;
var inst_24489 = inst_24512;
var inst_24490 = (0);
var state_24547__$1 = (function (){var statearr_24582 = state_24547;
(statearr_24582[(11)] = inst_24490);

(statearr_24582[(20)] = inst_24487);

(statearr_24582[(21)] = inst_24489);

(statearr_24582[(12)] = inst_24488);

return statearr_24582;
})();
var statearr_24583_24652 = state_24547__$1;
(statearr_24583_24652[(2)] = null);

(statearr_24583_24652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (41))){
var inst_24506 = (state_24547[(25)]);
var inst_24522 = (state_24547[(2)]);
var inst_24523 = cljs.core.next.call(null,inst_24506);
var inst_24487 = inst_24523;
var inst_24488 = null;
var inst_24489 = (0);
var inst_24490 = (0);
var state_24547__$1 = (function (){var statearr_24584 = state_24547;
(statearr_24584[(27)] = inst_24522);

(statearr_24584[(11)] = inst_24490);

(statearr_24584[(20)] = inst_24487);

(statearr_24584[(21)] = inst_24489);

(statearr_24584[(12)] = inst_24488);

return statearr_24584;
})();
var statearr_24585_24653 = state_24547__$1;
(statearr_24585_24653[(2)] = null);

(statearr_24585_24653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (43))){
var state_24547__$1 = state_24547;
var statearr_24586_24654 = state_24547__$1;
(statearr_24586_24654[(2)] = null);

(statearr_24586_24654[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (29))){
var inst_24531 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24587_24655 = state_24547__$1;
(statearr_24587_24655[(2)] = inst_24531);

(statearr_24587_24655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (44))){
var inst_24540 = (state_24547[(2)]);
var state_24547__$1 = (function (){var statearr_24588 = state_24547;
(statearr_24588[(28)] = inst_24540);

return statearr_24588;
})();
var statearr_24589_24656 = state_24547__$1;
(statearr_24589_24656[(2)] = null);

(statearr_24589_24656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (6))){
var inst_24479 = (state_24547[(29)]);
var inst_24478 = cljs.core.deref.call(null,cs);
var inst_24479__$1 = cljs.core.keys.call(null,inst_24478);
var inst_24480 = cljs.core.count.call(null,inst_24479__$1);
var inst_24481 = cljs.core.reset_BANG_.call(null,dctr,inst_24480);
var inst_24486 = cljs.core.seq.call(null,inst_24479__$1);
var inst_24487 = inst_24486;
var inst_24488 = null;
var inst_24489 = (0);
var inst_24490 = (0);
var state_24547__$1 = (function (){var statearr_24590 = state_24547;
(statearr_24590[(30)] = inst_24481);

(statearr_24590[(11)] = inst_24490);

(statearr_24590[(20)] = inst_24487);

(statearr_24590[(29)] = inst_24479__$1);

(statearr_24590[(21)] = inst_24489);

(statearr_24590[(12)] = inst_24488);

return statearr_24590;
})();
var statearr_24591_24657 = state_24547__$1;
(statearr_24591_24657[(2)] = null);

(statearr_24591_24657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (28))){
var inst_24506 = (state_24547[(25)]);
var inst_24487 = (state_24547[(20)]);
var inst_24506__$1 = cljs.core.seq.call(null,inst_24487);
var state_24547__$1 = (function (){var statearr_24592 = state_24547;
(statearr_24592[(25)] = inst_24506__$1);

return statearr_24592;
})();
if(inst_24506__$1){
var statearr_24593_24658 = state_24547__$1;
(statearr_24593_24658[(1)] = (33));

} else {
var statearr_24594_24659 = state_24547__$1;
(statearr_24594_24659[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (25))){
var inst_24490 = (state_24547[(11)]);
var inst_24489 = (state_24547[(21)]);
var inst_24492 = (inst_24490 < inst_24489);
var inst_24493 = inst_24492;
var state_24547__$1 = state_24547;
if(cljs.core.truth_(inst_24493)){
var statearr_24595_24660 = state_24547__$1;
(statearr_24595_24660[(1)] = (27));

} else {
var statearr_24596_24661 = state_24547__$1;
(statearr_24596_24661[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (34))){
var state_24547__$1 = state_24547;
var statearr_24597_24662 = state_24547__$1;
(statearr_24597_24662[(2)] = null);

(statearr_24597_24662[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (17))){
var state_24547__$1 = state_24547;
var statearr_24598_24663 = state_24547__$1;
(statearr_24598_24663[(2)] = null);

(statearr_24598_24663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (3))){
var inst_24545 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24547__$1,inst_24545);
} else {
if((state_val_24548 === (12))){
var inst_24474 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24599_24664 = state_24547__$1;
(statearr_24599_24664[(2)] = inst_24474);

(statearr_24599_24664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (2))){
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24547__$1,(4),ch);
} else {
if((state_val_24548 === (23))){
var state_24547__$1 = state_24547;
var statearr_24600_24665 = state_24547__$1;
(statearr_24600_24665[(2)] = null);

(statearr_24600_24665[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (35))){
var inst_24529 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24601_24666 = state_24547__$1;
(statearr_24601_24666[(2)] = inst_24529);

(statearr_24601_24666[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (19))){
var inst_24446 = (state_24547[(7)]);
var inst_24450 = cljs.core.chunk_first.call(null,inst_24446);
var inst_24451 = cljs.core.chunk_rest.call(null,inst_24446);
var inst_24452 = cljs.core.count.call(null,inst_24450);
var inst_24424 = inst_24451;
var inst_24425 = inst_24450;
var inst_24426 = inst_24452;
var inst_24427 = (0);
var state_24547__$1 = (function (){var statearr_24602 = state_24547;
(statearr_24602[(13)] = inst_24425);

(statearr_24602[(14)] = inst_24427);

(statearr_24602[(15)] = inst_24424);

(statearr_24602[(17)] = inst_24426);

return statearr_24602;
})();
var statearr_24603_24667 = state_24547__$1;
(statearr_24603_24667[(2)] = null);

(statearr_24603_24667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (11))){
var inst_24424 = (state_24547[(15)]);
var inst_24446 = (state_24547[(7)]);
var inst_24446__$1 = cljs.core.seq.call(null,inst_24424);
var state_24547__$1 = (function (){var statearr_24604 = state_24547;
(statearr_24604[(7)] = inst_24446__$1);

return statearr_24604;
})();
if(inst_24446__$1){
var statearr_24605_24668 = state_24547__$1;
(statearr_24605_24668[(1)] = (16));

} else {
var statearr_24606_24669 = state_24547__$1;
(statearr_24606_24669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (9))){
var inst_24476 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24607_24670 = state_24547__$1;
(statearr_24607_24670[(2)] = inst_24476);

(statearr_24607_24670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (5))){
var inst_24422 = cljs.core.deref.call(null,cs);
var inst_24423 = cljs.core.seq.call(null,inst_24422);
var inst_24424 = inst_24423;
var inst_24425 = null;
var inst_24426 = (0);
var inst_24427 = (0);
var state_24547__$1 = (function (){var statearr_24608 = state_24547;
(statearr_24608[(13)] = inst_24425);

(statearr_24608[(14)] = inst_24427);

(statearr_24608[(15)] = inst_24424);

(statearr_24608[(17)] = inst_24426);

return statearr_24608;
})();
var statearr_24609_24671 = state_24547__$1;
(statearr_24609_24671[(2)] = null);

(statearr_24609_24671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (14))){
var state_24547__$1 = state_24547;
var statearr_24610_24672 = state_24547__$1;
(statearr_24610_24672[(2)] = null);

(statearr_24610_24672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (45))){
var inst_24537 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24611_24673 = state_24547__$1;
(statearr_24611_24673[(2)] = inst_24537);

(statearr_24611_24673[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (26))){
var inst_24479 = (state_24547[(29)]);
var inst_24533 = (state_24547[(2)]);
var inst_24534 = cljs.core.seq.call(null,inst_24479);
var state_24547__$1 = (function (){var statearr_24612 = state_24547;
(statearr_24612[(31)] = inst_24533);

return statearr_24612;
})();
if(inst_24534){
var statearr_24613_24674 = state_24547__$1;
(statearr_24613_24674[(1)] = (42));

} else {
var statearr_24614_24675 = state_24547__$1;
(statearr_24614_24675[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (16))){
var inst_24446 = (state_24547[(7)]);
var inst_24448 = cljs.core.chunked_seq_QMARK_.call(null,inst_24446);
var state_24547__$1 = state_24547;
if(inst_24448){
var statearr_24615_24676 = state_24547__$1;
(statearr_24615_24676[(1)] = (19));

} else {
var statearr_24616_24677 = state_24547__$1;
(statearr_24616_24677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (38))){
var inst_24526 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24617_24678 = state_24547__$1;
(statearr_24617_24678[(2)] = inst_24526);

(statearr_24617_24678[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (30))){
var state_24547__$1 = state_24547;
var statearr_24618_24679 = state_24547__$1;
(statearr_24618_24679[(2)] = null);

(statearr_24618_24679[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (10))){
var inst_24425 = (state_24547[(13)]);
var inst_24427 = (state_24547[(14)]);
var inst_24435 = cljs.core._nth.call(null,inst_24425,inst_24427);
var inst_24436 = cljs.core.nth.call(null,inst_24435,(0),null);
var inst_24437 = cljs.core.nth.call(null,inst_24435,(1),null);
var state_24547__$1 = (function (){var statearr_24619 = state_24547;
(statearr_24619[(26)] = inst_24436);

return statearr_24619;
})();
if(cljs.core.truth_(inst_24437)){
var statearr_24620_24680 = state_24547__$1;
(statearr_24620_24680[(1)] = (13));

} else {
var statearr_24621_24681 = state_24547__$1;
(statearr_24621_24681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (18))){
var inst_24472 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24622_24682 = state_24547__$1;
(statearr_24622_24682[(2)] = inst_24472);

(statearr_24622_24682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (42))){
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24547__$1,(45),dchan);
} else {
if((state_val_24548 === (37))){
var inst_24515 = (state_24547[(23)]);
var inst_24415 = (state_24547[(9)]);
var inst_24506 = (state_24547[(25)]);
var inst_24515__$1 = cljs.core.first.call(null,inst_24506);
var inst_24516 = cljs.core.async.put_BANG_.call(null,inst_24515__$1,inst_24415,done);
var state_24547__$1 = (function (){var statearr_24623 = state_24547;
(statearr_24623[(23)] = inst_24515__$1);

return statearr_24623;
})();
if(cljs.core.truth_(inst_24516)){
var statearr_24624_24683 = state_24547__$1;
(statearr_24624_24683[(1)] = (39));

} else {
var statearr_24625_24684 = state_24547__$1;
(statearr_24625_24684[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (8))){
var inst_24427 = (state_24547[(14)]);
var inst_24426 = (state_24547[(17)]);
var inst_24429 = (inst_24427 < inst_24426);
var inst_24430 = inst_24429;
var state_24547__$1 = state_24547;
if(cljs.core.truth_(inst_24430)){
var statearr_24626_24685 = state_24547__$1;
(statearr_24626_24685[(1)] = (10));

} else {
var statearr_24627_24686 = state_24547__$1;
(statearr_24627_24686[(1)] = (11));

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
});})(c__23813__auto___24632,cs,m,dchan,dctr,done))
;
return ((function (switch__23718__auto__,c__23813__auto___24632,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23719__auto__ = null;
var cljs$core$async$mult_$_state_machine__23719__auto____0 = (function (){
var statearr_24628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24628[(0)] = cljs$core$async$mult_$_state_machine__23719__auto__);

(statearr_24628[(1)] = (1));

return statearr_24628;
});
var cljs$core$async$mult_$_state_machine__23719__auto____1 = (function (state_24547){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24629){if((e24629 instanceof Object)){
var ex__23722__auto__ = e24629;
var statearr_24630_24687 = state_24547;
(statearr_24630_24687[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24688 = state_24547;
state_24547 = G__24688;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23719__auto__ = function(state_24547){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23719__auto____1.call(this,state_24547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23719__auto____0;
cljs$core$async$mult_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23719__auto____1;
return cljs$core$async$mult_$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___24632,cs,m,dchan,dctr,done))
})();
var state__23815__auto__ = (function (){var statearr_24631 = f__23814__auto__.call(null);
(statearr_24631[(6)] = c__23813__auto___24632);

return statearr_24631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___24632,cs,m,dchan,dctr,done))
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
var G__24690 = arguments.length;
switch (G__24690) {
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
var len__4730__auto___24702 = arguments.length;
var i__4731__auto___24703 = (0);
while(true){
if((i__4731__auto___24703 < len__4730__auto___24702)){
args__4736__auto__.push((arguments[i__4731__auto___24703]));

var G__24704 = (i__4731__auto___24703 + (1));
i__4731__auto___24703 = G__24704;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24696){
var map__24697 = p__24696;
var map__24697__$1 = (((((!((map__24697 == null))))?(((((map__24697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24697):map__24697);
var opts = map__24697__$1;
var statearr_24699_24705 = state;
(statearr_24699_24705[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24697,map__24697__$1,opts){
return (function (val){
var statearr_24700_24706 = state;
(statearr_24700_24706[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24697,map__24697__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24701_24707 = state;
(statearr_24701_24707[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24692){
var G__24693 = cljs.core.first.call(null,seq24692);
var seq24692__$1 = cljs.core.next.call(null,seq24692);
var G__24694 = cljs.core.first.call(null,seq24692__$1);
var seq24692__$2 = cljs.core.next.call(null,seq24692__$1);
var G__24695 = cljs.core.first.call(null,seq24692__$2);
var seq24692__$3 = cljs.core.next.call(null,seq24692__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24693,G__24694,G__24695,seq24692__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24708 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24709){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24709 = meta24709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24710,meta24709__$1){
var self__ = this;
var _24710__$1 = this;
return (new cljs.core.async.t_cljs$core$async24708(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24709__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24710){
var self__ = this;
var _24710__$1 = this;
return self__.meta24709;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24708.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24709","meta24709",-1285957035,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24708";

cljs.core.async.t_cljs$core$async24708.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24708");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24708.
 */
cljs.core.async.__GT_t_cljs$core$async24708 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24708(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24709){
return (new cljs.core.async.t_cljs$core$async24708(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24709));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24708(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23813__auto___24872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___24872,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___24872,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24812){
var state_val_24813 = (state_24812[(1)]);
if((state_val_24813 === (7))){
var inst_24727 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24814_24873 = state_24812__$1;
(statearr_24814_24873[(2)] = inst_24727);

(statearr_24814_24873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (20))){
var inst_24739 = (state_24812[(7)]);
var state_24812__$1 = state_24812;
var statearr_24815_24874 = state_24812__$1;
(statearr_24815_24874[(2)] = inst_24739);

(statearr_24815_24874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (27))){
var state_24812__$1 = state_24812;
var statearr_24816_24875 = state_24812__$1;
(statearr_24816_24875[(2)] = null);

(statearr_24816_24875[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (1))){
var inst_24714 = (state_24812[(8)]);
var inst_24714__$1 = calc_state.call(null);
var inst_24716 = (inst_24714__$1 == null);
var inst_24717 = cljs.core.not.call(null,inst_24716);
var state_24812__$1 = (function (){var statearr_24817 = state_24812;
(statearr_24817[(8)] = inst_24714__$1);

return statearr_24817;
})();
if(inst_24717){
var statearr_24818_24876 = state_24812__$1;
(statearr_24818_24876[(1)] = (2));

} else {
var statearr_24819_24877 = state_24812__$1;
(statearr_24819_24877[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (24))){
var inst_24763 = (state_24812[(9)]);
var inst_24786 = (state_24812[(10)]);
var inst_24772 = (state_24812[(11)]);
var inst_24786__$1 = inst_24763.call(null,inst_24772);
var state_24812__$1 = (function (){var statearr_24820 = state_24812;
(statearr_24820[(10)] = inst_24786__$1);

return statearr_24820;
})();
if(cljs.core.truth_(inst_24786__$1)){
var statearr_24821_24878 = state_24812__$1;
(statearr_24821_24878[(1)] = (29));

} else {
var statearr_24822_24879 = state_24812__$1;
(statearr_24822_24879[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (4))){
var inst_24730 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24730)){
var statearr_24823_24880 = state_24812__$1;
(statearr_24823_24880[(1)] = (8));

} else {
var statearr_24824_24881 = state_24812__$1;
(statearr_24824_24881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (15))){
var inst_24757 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24757)){
var statearr_24825_24882 = state_24812__$1;
(statearr_24825_24882[(1)] = (19));

} else {
var statearr_24826_24883 = state_24812__$1;
(statearr_24826_24883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (21))){
var inst_24762 = (state_24812[(12)]);
var inst_24762__$1 = (state_24812[(2)]);
var inst_24763 = cljs.core.get.call(null,inst_24762__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24764 = cljs.core.get.call(null,inst_24762__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24765 = cljs.core.get.call(null,inst_24762__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24812__$1 = (function (){var statearr_24827 = state_24812;
(statearr_24827[(12)] = inst_24762__$1);

(statearr_24827[(9)] = inst_24763);

(statearr_24827[(13)] = inst_24764);

return statearr_24827;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24812__$1,(22),inst_24765);
} else {
if((state_val_24813 === (31))){
var inst_24794 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24794)){
var statearr_24828_24884 = state_24812__$1;
(statearr_24828_24884[(1)] = (32));

} else {
var statearr_24829_24885 = state_24812__$1;
(statearr_24829_24885[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (32))){
var inst_24771 = (state_24812[(14)]);
var state_24812__$1 = state_24812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24812__$1,(35),out,inst_24771);
} else {
if((state_val_24813 === (33))){
var inst_24762 = (state_24812[(12)]);
var inst_24739 = inst_24762;
var state_24812__$1 = (function (){var statearr_24830 = state_24812;
(statearr_24830[(7)] = inst_24739);

return statearr_24830;
})();
var statearr_24831_24886 = state_24812__$1;
(statearr_24831_24886[(2)] = null);

(statearr_24831_24886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (13))){
var inst_24739 = (state_24812[(7)]);
var inst_24746 = inst_24739.cljs$lang$protocol_mask$partition0$;
var inst_24747 = (inst_24746 & (64));
var inst_24748 = inst_24739.cljs$core$ISeq$;
var inst_24749 = (cljs.core.PROTOCOL_SENTINEL === inst_24748);
var inst_24750 = ((inst_24747) || (inst_24749));
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24750)){
var statearr_24832_24887 = state_24812__$1;
(statearr_24832_24887[(1)] = (16));

} else {
var statearr_24833_24888 = state_24812__$1;
(statearr_24833_24888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (22))){
var inst_24771 = (state_24812[(14)]);
var inst_24772 = (state_24812[(11)]);
var inst_24770 = (state_24812[(2)]);
var inst_24771__$1 = cljs.core.nth.call(null,inst_24770,(0),null);
var inst_24772__$1 = cljs.core.nth.call(null,inst_24770,(1),null);
var inst_24773 = (inst_24771__$1 == null);
var inst_24774 = cljs.core._EQ_.call(null,inst_24772__$1,change);
var inst_24775 = ((inst_24773) || (inst_24774));
var state_24812__$1 = (function (){var statearr_24834 = state_24812;
(statearr_24834[(14)] = inst_24771__$1);

(statearr_24834[(11)] = inst_24772__$1);

return statearr_24834;
})();
if(cljs.core.truth_(inst_24775)){
var statearr_24835_24889 = state_24812__$1;
(statearr_24835_24889[(1)] = (23));

} else {
var statearr_24836_24890 = state_24812__$1;
(statearr_24836_24890[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (36))){
var inst_24762 = (state_24812[(12)]);
var inst_24739 = inst_24762;
var state_24812__$1 = (function (){var statearr_24837 = state_24812;
(statearr_24837[(7)] = inst_24739);

return statearr_24837;
})();
var statearr_24838_24891 = state_24812__$1;
(statearr_24838_24891[(2)] = null);

(statearr_24838_24891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (29))){
var inst_24786 = (state_24812[(10)]);
var state_24812__$1 = state_24812;
var statearr_24839_24892 = state_24812__$1;
(statearr_24839_24892[(2)] = inst_24786);

(statearr_24839_24892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (6))){
var state_24812__$1 = state_24812;
var statearr_24840_24893 = state_24812__$1;
(statearr_24840_24893[(2)] = false);

(statearr_24840_24893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (28))){
var inst_24782 = (state_24812[(2)]);
var inst_24783 = calc_state.call(null);
var inst_24739 = inst_24783;
var state_24812__$1 = (function (){var statearr_24841 = state_24812;
(statearr_24841[(15)] = inst_24782);

(statearr_24841[(7)] = inst_24739);

return statearr_24841;
})();
var statearr_24842_24894 = state_24812__$1;
(statearr_24842_24894[(2)] = null);

(statearr_24842_24894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (25))){
var inst_24808 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24843_24895 = state_24812__$1;
(statearr_24843_24895[(2)] = inst_24808);

(statearr_24843_24895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (34))){
var inst_24806 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24844_24896 = state_24812__$1;
(statearr_24844_24896[(2)] = inst_24806);

(statearr_24844_24896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (17))){
var state_24812__$1 = state_24812;
var statearr_24845_24897 = state_24812__$1;
(statearr_24845_24897[(2)] = false);

(statearr_24845_24897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (3))){
var state_24812__$1 = state_24812;
var statearr_24846_24898 = state_24812__$1;
(statearr_24846_24898[(2)] = false);

(statearr_24846_24898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (12))){
var inst_24810 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24812__$1,inst_24810);
} else {
if((state_val_24813 === (2))){
var inst_24714 = (state_24812[(8)]);
var inst_24719 = inst_24714.cljs$lang$protocol_mask$partition0$;
var inst_24720 = (inst_24719 & (64));
var inst_24721 = inst_24714.cljs$core$ISeq$;
var inst_24722 = (cljs.core.PROTOCOL_SENTINEL === inst_24721);
var inst_24723 = ((inst_24720) || (inst_24722));
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24723)){
var statearr_24847_24899 = state_24812__$1;
(statearr_24847_24899[(1)] = (5));

} else {
var statearr_24848_24900 = state_24812__$1;
(statearr_24848_24900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (23))){
var inst_24771 = (state_24812[(14)]);
var inst_24777 = (inst_24771 == null);
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24777)){
var statearr_24849_24901 = state_24812__$1;
(statearr_24849_24901[(1)] = (26));

} else {
var statearr_24850_24902 = state_24812__$1;
(statearr_24850_24902[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (35))){
var inst_24797 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
if(cljs.core.truth_(inst_24797)){
var statearr_24851_24903 = state_24812__$1;
(statearr_24851_24903[(1)] = (36));

} else {
var statearr_24852_24904 = state_24812__$1;
(statearr_24852_24904[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (19))){
var inst_24739 = (state_24812[(7)]);
var inst_24759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24739);
var state_24812__$1 = state_24812;
var statearr_24853_24905 = state_24812__$1;
(statearr_24853_24905[(2)] = inst_24759);

(statearr_24853_24905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (11))){
var inst_24739 = (state_24812[(7)]);
var inst_24743 = (inst_24739 == null);
var inst_24744 = cljs.core.not.call(null,inst_24743);
var state_24812__$1 = state_24812;
if(inst_24744){
var statearr_24854_24906 = state_24812__$1;
(statearr_24854_24906[(1)] = (13));

} else {
var statearr_24855_24907 = state_24812__$1;
(statearr_24855_24907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (9))){
var inst_24714 = (state_24812[(8)]);
var state_24812__$1 = state_24812;
var statearr_24856_24908 = state_24812__$1;
(statearr_24856_24908[(2)] = inst_24714);

(statearr_24856_24908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (5))){
var state_24812__$1 = state_24812;
var statearr_24857_24909 = state_24812__$1;
(statearr_24857_24909[(2)] = true);

(statearr_24857_24909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (14))){
var state_24812__$1 = state_24812;
var statearr_24858_24910 = state_24812__$1;
(statearr_24858_24910[(2)] = false);

(statearr_24858_24910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (26))){
var inst_24772 = (state_24812[(11)]);
var inst_24779 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24772);
var state_24812__$1 = state_24812;
var statearr_24859_24911 = state_24812__$1;
(statearr_24859_24911[(2)] = inst_24779);

(statearr_24859_24911[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (16))){
var state_24812__$1 = state_24812;
var statearr_24860_24912 = state_24812__$1;
(statearr_24860_24912[(2)] = true);

(statearr_24860_24912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (38))){
var inst_24802 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24861_24913 = state_24812__$1;
(statearr_24861_24913[(2)] = inst_24802);

(statearr_24861_24913[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (30))){
var inst_24763 = (state_24812[(9)]);
var inst_24764 = (state_24812[(13)]);
var inst_24772 = (state_24812[(11)]);
var inst_24789 = cljs.core.empty_QMARK_.call(null,inst_24763);
var inst_24790 = inst_24764.call(null,inst_24772);
var inst_24791 = cljs.core.not.call(null,inst_24790);
var inst_24792 = ((inst_24789) && (inst_24791));
var state_24812__$1 = state_24812;
var statearr_24862_24914 = state_24812__$1;
(statearr_24862_24914[(2)] = inst_24792);

(statearr_24862_24914[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (10))){
var inst_24714 = (state_24812[(8)]);
var inst_24735 = (state_24812[(2)]);
var inst_24736 = cljs.core.get.call(null,inst_24735,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24737 = cljs.core.get.call(null,inst_24735,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24738 = cljs.core.get.call(null,inst_24735,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24739 = inst_24714;
var state_24812__$1 = (function (){var statearr_24863 = state_24812;
(statearr_24863[(16)] = inst_24738);

(statearr_24863[(17)] = inst_24737);

(statearr_24863[(18)] = inst_24736);

(statearr_24863[(7)] = inst_24739);

return statearr_24863;
})();
var statearr_24864_24915 = state_24812__$1;
(statearr_24864_24915[(2)] = null);

(statearr_24864_24915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (18))){
var inst_24754 = (state_24812[(2)]);
var state_24812__$1 = state_24812;
var statearr_24865_24916 = state_24812__$1;
(statearr_24865_24916[(2)] = inst_24754);

(statearr_24865_24916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (37))){
var state_24812__$1 = state_24812;
var statearr_24866_24917 = state_24812__$1;
(statearr_24866_24917[(2)] = null);

(statearr_24866_24917[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24813 === (8))){
var inst_24714 = (state_24812[(8)]);
var inst_24732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24714);
var state_24812__$1 = state_24812;
var statearr_24867_24918 = state_24812__$1;
(statearr_24867_24918[(2)] = inst_24732);

(statearr_24867_24918[(1)] = (10));


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
});})(c__23813__auto___24872,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23718__auto__,c__23813__auto___24872,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23719__auto__ = null;
var cljs$core$async$mix_$_state_machine__23719__auto____0 = (function (){
var statearr_24868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24868[(0)] = cljs$core$async$mix_$_state_machine__23719__auto__);

(statearr_24868[(1)] = (1));

return statearr_24868;
});
var cljs$core$async$mix_$_state_machine__23719__auto____1 = (function (state_24812){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_24812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e24869){if((e24869 instanceof Object)){
var ex__23722__auto__ = e24869;
var statearr_24870_24919 = state_24812;
(statearr_24870_24919[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24920 = state_24812;
state_24812 = G__24920;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23719__auto__ = function(state_24812){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23719__auto____1.call(this,state_24812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23719__auto____0;
cljs$core$async$mix_$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23719__auto____1;
return cljs$core$async$mix_$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___24872,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23815__auto__ = (function (){var statearr_24871 = f__23814__auto__.call(null);
(statearr_24871[(6)] = c__23813__auto___24872);

return statearr_24871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___24872,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24922 = arguments.length;
switch (G__24922) {
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
var G__24926 = arguments.length;
switch (G__24926) {
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
return (function (p1__24924_SHARP_){
if(cljs.core.truth_(p1__24924_SHARP_.call(null,topic))){
return p1__24924_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24924_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24927 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24928){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24928 = meta24928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24929,meta24928__$1){
var self__ = this;
var _24929__$1 = this;
return (new cljs.core.async.t_cljs$core$async24927(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24928__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24929){
var self__ = this;
var _24929__$1 = this;
return self__.meta24928;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24927.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24927.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24928","meta24928",1574317724,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24927";

cljs.core.async.t_cljs$core$async24927.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24927");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24927.
 */
cljs.core.async.__GT_t_cljs$core$async24927 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24927(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24928){
return (new cljs.core.async.t_cljs$core$async24927(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24928));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24927(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23813__auto___25047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25047,mults,ensure_mult,p){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25047,mults,ensure_mult,p){
return (function (state_25001){
var state_val_25002 = (state_25001[(1)]);
if((state_val_25002 === (7))){
var inst_24997 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25003_25048 = state_25001__$1;
(statearr_25003_25048[(2)] = inst_24997);

(statearr_25003_25048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (20))){
var state_25001__$1 = state_25001;
var statearr_25004_25049 = state_25001__$1;
(statearr_25004_25049[(2)] = null);

(statearr_25004_25049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (1))){
var state_25001__$1 = state_25001;
var statearr_25005_25050 = state_25001__$1;
(statearr_25005_25050[(2)] = null);

(statearr_25005_25050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (24))){
var inst_24980 = (state_25001[(7)]);
var inst_24989 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24980);
var state_25001__$1 = state_25001;
var statearr_25006_25051 = state_25001__$1;
(statearr_25006_25051[(2)] = inst_24989);

(statearr_25006_25051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (4))){
var inst_24932 = (state_25001[(8)]);
var inst_24932__$1 = (state_25001[(2)]);
var inst_24933 = (inst_24932__$1 == null);
var state_25001__$1 = (function (){var statearr_25007 = state_25001;
(statearr_25007[(8)] = inst_24932__$1);

return statearr_25007;
})();
if(cljs.core.truth_(inst_24933)){
var statearr_25008_25052 = state_25001__$1;
(statearr_25008_25052[(1)] = (5));

} else {
var statearr_25009_25053 = state_25001__$1;
(statearr_25009_25053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (15))){
var inst_24974 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25010_25054 = state_25001__$1;
(statearr_25010_25054[(2)] = inst_24974);

(statearr_25010_25054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (21))){
var inst_24994 = (state_25001[(2)]);
var state_25001__$1 = (function (){var statearr_25011 = state_25001;
(statearr_25011[(9)] = inst_24994);

return statearr_25011;
})();
var statearr_25012_25055 = state_25001__$1;
(statearr_25012_25055[(2)] = null);

(statearr_25012_25055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (13))){
var inst_24956 = (state_25001[(10)]);
var inst_24958 = cljs.core.chunked_seq_QMARK_.call(null,inst_24956);
var state_25001__$1 = state_25001;
if(inst_24958){
var statearr_25013_25056 = state_25001__$1;
(statearr_25013_25056[(1)] = (16));

} else {
var statearr_25014_25057 = state_25001__$1;
(statearr_25014_25057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (22))){
var inst_24986 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24986)){
var statearr_25015_25058 = state_25001__$1;
(statearr_25015_25058[(1)] = (23));

} else {
var statearr_25016_25059 = state_25001__$1;
(statearr_25016_25059[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (6))){
var inst_24982 = (state_25001[(11)]);
var inst_24980 = (state_25001[(7)]);
var inst_24932 = (state_25001[(8)]);
var inst_24980__$1 = topic_fn.call(null,inst_24932);
var inst_24981 = cljs.core.deref.call(null,mults);
var inst_24982__$1 = cljs.core.get.call(null,inst_24981,inst_24980__$1);
var state_25001__$1 = (function (){var statearr_25017 = state_25001;
(statearr_25017[(11)] = inst_24982__$1);

(statearr_25017[(7)] = inst_24980__$1);

return statearr_25017;
})();
if(cljs.core.truth_(inst_24982__$1)){
var statearr_25018_25060 = state_25001__$1;
(statearr_25018_25060[(1)] = (19));

} else {
var statearr_25019_25061 = state_25001__$1;
(statearr_25019_25061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (25))){
var inst_24991 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25020_25062 = state_25001__$1;
(statearr_25020_25062[(2)] = inst_24991);

(statearr_25020_25062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (17))){
var inst_24956 = (state_25001[(10)]);
var inst_24965 = cljs.core.first.call(null,inst_24956);
var inst_24966 = cljs.core.async.muxch_STAR_.call(null,inst_24965);
var inst_24967 = cljs.core.async.close_BANG_.call(null,inst_24966);
var inst_24968 = cljs.core.next.call(null,inst_24956);
var inst_24942 = inst_24968;
var inst_24943 = null;
var inst_24944 = (0);
var inst_24945 = (0);
var state_25001__$1 = (function (){var statearr_25021 = state_25001;
(statearr_25021[(12)] = inst_24967);

(statearr_25021[(13)] = inst_24943);

(statearr_25021[(14)] = inst_24944);

(statearr_25021[(15)] = inst_24945);

(statearr_25021[(16)] = inst_24942);

return statearr_25021;
})();
var statearr_25022_25063 = state_25001__$1;
(statearr_25022_25063[(2)] = null);

(statearr_25022_25063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (3))){
var inst_24999 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25001__$1,inst_24999);
} else {
if((state_val_25002 === (12))){
var inst_24976 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25023_25064 = state_25001__$1;
(statearr_25023_25064[(2)] = inst_24976);

(statearr_25023_25064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (2))){
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25001__$1,(4),ch);
} else {
if((state_val_25002 === (23))){
var state_25001__$1 = state_25001;
var statearr_25024_25065 = state_25001__$1;
(statearr_25024_25065[(2)] = null);

(statearr_25024_25065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (19))){
var inst_24982 = (state_25001[(11)]);
var inst_24932 = (state_25001[(8)]);
var inst_24984 = cljs.core.async.muxch_STAR_.call(null,inst_24982);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25001__$1,(22),inst_24984,inst_24932);
} else {
if((state_val_25002 === (11))){
var inst_24942 = (state_25001[(16)]);
var inst_24956 = (state_25001[(10)]);
var inst_24956__$1 = cljs.core.seq.call(null,inst_24942);
var state_25001__$1 = (function (){var statearr_25025 = state_25001;
(statearr_25025[(10)] = inst_24956__$1);

return statearr_25025;
})();
if(inst_24956__$1){
var statearr_25026_25066 = state_25001__$1;
(statearr_25026_25066[(1)] = (13));

} else {
var statearr_25027_25067 = state_25001__$1;
(statearr_25027_25067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (9))){
var inst_24978 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25028_25068 = state_25001__$1;
(statearr_25028_25068[(2)] = inst_24978);

(statearr_25028_25068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (5))){
var inst_24939 = cljs.core.deref.call(null,mults);
var inst_24940 = cljs.core.vals.call(null,inst_24939);
var inst_24941 = cljs.core.seq.call(null,inst_24940);
var inst_24942 = inst_24941;
var inst_24943 = null;
var inst_24944 = (0);
var inst_24945 = (0);
var state_25001__$1 = (function (){var statearr_25029 = state_25001;
(statearr_25029[(13)] = inst_24943);

(statearr_25029[(14)] = inst_24944);

(statearr_25029[(15)] = inst_24945);

(statearr_25029[(16)] = inst_24942);

return statearr_25029;
})();
var statearr_25030_25069 = state_25001__$1;
(statearr_25030_25069[(2)] = null);

(statearr_25030_25069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (14))){
var state_25001__$1 = state_25001;
var statearr_25034_25070 = state_25001__$1;
(statearr_25034_25070[(2)] = null);

(statearr_25034_25070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (16))){
var inst_24956 = (state_25001[(10)]);
var inst_24960 = cljs.core.chunk_first.call(null,inst_24956);
var inst_24961 = cljs.core.chunk_rest.call(null,inst_24956);
var inst_24962 = cljs.core.count.call(null,inst_24960);
var inst_24942 = inst_24961;
var inst_24943 = inst_24960;
var inst_24944 = inst_24962;
var inst_24945 = (0);
var state_25001__$1 = (function (){var statearr_25035 = state_25001;
(statearr_25035[(13)] = inst_24943);

(statearr_25035[(14)] = inst_24944);

(statearr_25035[(15)] = inst_24945);

(statearr_25035[(16)] = inst_24942);

return statearr_25035;
})();
var statearr_25036_25071 = state_25001__$1;
(statearr_25036_25071[(2)] = null);

(statearr_25036_25071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (10))){
var inst_24943 = (state_25001[(13)]);
var inst_24944 = (state_25001[(14)]);
var inst_24945 = (state_25001[(15)]);
var inst_24942 = (state_25001[(16)]);
var inst_24950 = cljs.core._nth.call(null,inst_24943,inst_24945);
var inst_24951 = cljs.core.async.muxch_STAR_.call(null,inst_24950);
var inst_24952 = cljs.core.async.close_BANG_.call(null,inst_24951);
var inst_24953 = (inst_24945 + (1));
var tmp25031 = inst_24943;
var tmp25032 = inst_24944;
var tmp25033 = inst_24942;
var inst_24942__$1 = tmp25033;
var inst_24943__$1 = tmp25031;
var inst_24944__$1 = tmp25032;
var inst_24945__$1 = inst_24953;
var state_25001__$1 = (function (){var statearr_25037 = state_25001;
(statearr_25037[(13)] = inst_24943__$1);

(statearr_25037[(14)] = inst_24944__$1);

(statearr_25037[(17)] = inst_24952);

(statearr_25037[(15)] = inst_24945__$1);

(statearr_25037[(16)] = inst_24942__$1);

return statearr_25037;
})();
var statearr_25038_25072 = state_25001__$1;
(statearr_25038_25072[(2)] = null);

(statearr_25038_25072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (18))){
var inst_24971 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25039_25073 = state_25001__$1;
(statearr_25039_25073[(2)] = inst_24971);

(statearr_25039_25073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (8))){
var inst_24944 = (state_25001[(14)]);
var inst_24945 = (state_25001[(15)]);
var inst_24947 = (inst_24945 < inst_24944);
var inst_24948 = inst_24947;
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24948)){
var statearr_25040_25074 = state_25001__$1;
(statearr_25040_25074[(1)] = (10));

} else {
var statearr_25041_25075 = state_25001__$1;
(statearr_25041_25075[(1)] = (11));

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
});})(c__23813__auto___25047,mults,ensure_mult,p))
;
return ((function (switch__23718__auto__,c__23813__auto___25047,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25042[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25042[(1)] = (1));

return statearr_25042;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25001){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25043){if((e25043 instanceof Object)){
var ex__23722__auto__ = e25043;
var statearr_25044_25076 = state_25001;
(statearr_25044_25076[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25077 = state_25001;
state_25001 = G__25077;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25047,mults,ensure_mult,p))
})();
var state__23815__auto__ = (function (){var statearr_25045 = f__23814__auto__.call(null);
(statearr_25045[(6)] = c__23813__auto___25047);

return statearr_25045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25047,mults,ensure_mult,p))
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
var G__25079 = arguments.length;
switch (G__25079) {
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
var G__25082 = arguments.length;
switch (G__25082) {
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
var G__25085 = arguments.length;
switch (G__25085) {
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
var c__23813__auto___25152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25152,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25152,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25124){
var state_val_25125 = (state_25124[(1)]);
if((state_val_25125 === (7))){
var state_25124__$1 = state_25124;
var statearr_25126_25153 = state_25124__$1;
(statearr_25126_25153[(2)] = null);

(statearr_25126_25153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (1))){
var state_25124__$1 = state_25124;
var statearr_25127_25154 = state_25124__$1;
(statearr_25127_25154[(2)] = null);

(statearr_25127_25154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (4))){
var inst_25088 = (state_25124[(7)]);
var inst_25090 = (inst_25088 < cnt);
var state_25124__$1 = state_25124;
if(cljs.core.truth_(inst_25090)){
var statearr_25128_25155 = state_25124__$1;
(statearr_25128_25155[(1)] = (6));

} else {
var statearr_25129_25156 = state_25124__$1;
(statearr_25129_25156[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (15))){
var inst_25120 = (state_25124[(2)]);
var state_25124__$1 = state_25124;
var statearr_25130_25157 = state_25124__$1;
(statearr_25130_25157[(2)] = inst_25120);

(statearr_25130_25157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (13))){
var inst_25113 = cljs.core.async.close_BANG_.call(null,out);
var state_25124__$1 = state_25124;
var statearr_25131_25158 = state_25124__$1;
(statearr_25131_25158[(2)] = inst_25113);

(statearr_25131_25158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (6))){
var state_25124__$1 = state_25124;
var statearr_25132_25159 = state_25124__$1;
(statearr_25132_25159[(2)] = null);

(statearr_25132_25159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (3))){
var inst_25122 = (state_25124[(2)]);
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25124__$1,inst_25122);
} else {
if((state_val_25125 === (12))){
var inst_25110 = (state_25124[(8)]);
var inst_25110__$1 = (state_25124[(2)]);
var inst_25111 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25110__$1);
var state_25124__$1 = (function (){var statearr_25133 = state_25124;
(statearr_25133[(8)] = inst_25110__$1);

return statearr_25133;
})();
if(cljs.core.truth_(inst_25111)){
var statearr_25134_25160 = state_25124__$1;
(statearr_25134_25160[(1)] = (13));

} else {
var statearr_25135_25161 = state_25124__$1;
(statearr_25135_25161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (2))){
var inst_25087 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25088 = (0);
var state_25124__$1 = (function (){var statearr_25136 = state_25124;
(statearr_25136[(9)] = inst_25087);

(statearr_25136[(7)] = inst_25088);

return statearr_25136;
})();
var statearr_25137_25162 = state_25124__$1;
(statearr_25137_25162[(2)] = null);

(statearr_25137_25162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (11))){
var inst_25088 = (state_25124[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25124,(10),Object,null,(9));
var inst_25097 = chs__$1.call(null,inst_25088);
var inst_25098 = done.call(null,inst_25088);
var inst_25099 = cljs.core.async.take_BANG_.call(null,inst_25097,inst_25098);
var state_25124__$1 = state_25124;
var statearr_25138_25163 = state_25124__$1;
(statearr_25138_25163[(2)] = inst_25099);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (9))){
var inst_25088 = (state_25124[(7)]);
var inst_25101 = (state_25124[(2)]);
var inst_25102 = (inst_25088 + (1));
var inst_25088__$1 = inst_25102;
var state_25124__$1 = (function (){var statearr_25139 = state_25124;
(statearr_25139[(10)] = inst_25101);

(statearr_25139[(7)] = inst_25088__$1);

return statearr_25139;
})();
var statearr_25140_25164 = state_25124__$1;
(statearr_25140_25164[(2)] = null);

(statearr_25140_25164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (5))){
var inst_25108 = (state_25124[(2)]);
var state_25124__$1 = (function (){var statearr_25141 = state_25124;
(statearr_25141[(11)] = inst_25108);

return statearr_25141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25124__$1,(12),dchan);
} else {
if((state_val_25125 === (14))){
var inst_25110 = (state_25124[(8)]);
var inst_25115 = cljs.core.apply.call(null,f,inst_25110);
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25124__$1,(16),out,inst_25115);
} else {
if((state_val_25125 === (16))){
var inst_25117 = (state_25124[(2)]);
var state_25124__$1 = (function (){var statearr_25142 = state_25124;
(statearr_25142[(12)] = inst_25117);

return statearr_25142;
})();
var statearr_25143_25165 = state_25124__$1;
(statearr_25143_25165[(2)] = null);

(statearr_25143_25165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (10))){
var inst_25092 = (state_25124[(2)]);
var inst_25093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25124__$1 = (function (){var statearr_25144 = state_25124;
(statearr_25144[(13)] = inst_25092);

return statearr_25144;
})();
var statearr_25145_25166 = state_25124__$1;
(statearr_25145_25166[(2)] = inst_25093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25125 === (8))){
var inst_25106 = (state_25124[(2)]);
var state_25124__$1 = state_25124;
var statearr_25146_25167 = state_25124__$1;
(statearr_25146_25167[(2)] = inst_25106);

(statearr_25146_25167[(1)] = (5));


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
});})(c__23813__auto___25152,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23718__auto__,c__23813__auto___25152,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25147[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25147[(1)] = (1));

return statearr_25147;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25124){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25148){if((e25148 instanceof Object)){
var ex__23722__auto__ = e25148;
var statearr_25149_25168 = state_25124;
(statearr_25149_25168[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25169 = state_25124;
state_25124 = G__25169;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25152,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23815__auto__ = (function (){var statearr_25150 = f__23814__auto__.call(null);
(statearr_25150[(6)] = c__23813__auto___25152);

return statearr_25150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25152,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25172 = arguments.length;
switch (G__25172) {
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
var c__23813__auto___25226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25226,out){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25226,out){
return (function (state_25204){
var state_val_25205 = (state_25204[(1)]);
if((state_val_25205 === (7))){
var inst_25184 = (state_25204[(7)]);
var inst_25183 = (state_25204[(8)]);
var inst_25183__$1 = (state_25204[(2)]);
var inst_25184__$1 = cljs.core.nth.call(null,inst_25183__$1,(0),null);
var inst_25185 = cljs.core.nth.call(null,inst_25183__$1,(1),null);
var inst_25186 = (inst_25184__$1 == null);
var state_25204__$1 = (function (){var statearr_25206 = state_25204;
(statearr_25206[(7)] = inst_25184__$1);

(statearr_25206[(8)] = inst_25183__$1);

(statearr_25206[(9)] = inst_25185);

return statearr_25206;
})();
if(cljs.core.truth_(inst_25186)){
var statearr_25207_25227 = state_25204__$1;
(statearr_25207_25227[(1)] = (8));

} else {
var statearr_25208_25228 = state_25204__$1;
(statearr_25208_25228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (1))){
var inst_25173 = cljs.core.vec.call(null,chs);
var inst_25174 = inst_25173;
var state_25204__$1 = (function (){var statearr_25209 = state_25204;
(statearr_25209[(10)] = inst_25174);

return statearr_25209;
})();
var statearr_25210_25229 = state_25204__$1;
(statearr_25210_25229[(2)] = null);

(statearr_25210_25229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (4))){
var inst_25174 = (state_25204[(10)]);
var state_25204__$1 = state_25204;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25204__$1,(7),inst_25174);
} else {
if((state_val_25205 === (6))){
var inst_25200 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25211_25230 = state_25204__$1;
(statearr_25211_25230[(2)] = inst_25200);

(statearr_25211_25230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (3))){
var inst_25202 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25204__$1,inst_25202);
} else {
if((state_val_25205 === (2))){
var inst_25174 = (state_25204[(10)]);
var inst_25176 = cljs.core.count.call(null,inst_25174);
var inst_25177 = (inst_25176 > (0));
var state_25204__$1 = state_25204;
if(cljs.core.truth_(inst_25177)){
var statearr_25213_25231 = state_25204__$1;
(statearr_25213_25231[(1)] = (4));

} else {
var statearr_25214_25232 = state_25204__$1;
(statearr_25214_25232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (11))){
var inst_25174 = (state_25204[(10)]);
var inst_25193 = (state_25204[(2)]);
var tmp25212 = inst_25174;
var inst_25174__$1 = tmp25212;
var state_25204__$1 = (function (){var statearr_25215 = state_25204;
(statearr_25215[(10)] = inst_25174__$1);

(statearr_25215[(11)] = inst_25193);

return statearr_25215;
})();
var statearr_25216_25233 = state_25204__$1;
(statearr_25216_25233[(2)] = null);

(statearr_25216_25233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (9))){
var inst_25184 = (state_25204[(7)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25204__$1,(11),out,inst_25184);
} else {
if((state_val_25205 === (5))){
var inst_25198 = cljs.core.async.close_BANG_.call(null,out);
var state_25204__$1 = state_25204;
var statearr_25217_25234 = state_25204__$1;
(statearr_25217_25234[(2)] = inst_25198);

(statearr_25217_25234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (10))){
var inst_25196 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25218_25235 = state_25204__$1;
(statearr_25218_25235[(2)] = inst_25196);

(statearr_25218_25235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (8))){
var inst_25184 = (state_25204[(7)]);
var inst_25183 = (state_25204[(8)]);
var inst_25185 = (state_25204[(9)]);
var inst_25174 = (state_25204[(10)]);
var inst_25188 = (function (){var cs = inst_25174;
var vec__25179 = inst_25183;
var v = inst_25184;
var c = inst_25185;
return ((function (cs,vec__25179,v,c,inst_25184,inst_25183,inst_25185,inst_25174,state_val_25205,c__23813__auto___25226,out){
return (function (p1__25170_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25170_SHARP_);
});
;})(cs,vec__25179,v,c,inst_25184,inst_25183,inst_25185,inst_25174,state_val_25205,c__23813__auto___25226,out))
})();
var inst_25189 = cljs.core.filterv.call(null,inst_25188,inst_25174);
var inst_25174__$1 = inst_25189;
var state_25204__$1 = (function (){var statearr_25219 = state_25204;
(statearr_25219[(10)] = inst_25174__$1);

return statearr_25219;
})();
var statearr_25220_25236 = state_25204__$1;
(statearr_25220_25236[(2)] = null);

(statearr_25220_25236[(1)] = (2));


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
});})(c__23813__auto___25226,out))
;
return ((function (switch__23718__auto__,c__23813__auto___25226,out){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25221 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25221[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25221[(1)] = (1));

return statearr_25221;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25204){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object)){
var ex__23722__auto__ = e25222;
var statearr_25223_25237 = state_25204;
(statearr_25223_25237[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25238 = state_25204;
state_25204 = G__25238;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25226,out))
})();
var state__23815__auto__ = (function (){var statearr_25224 = f__23814__auto__.call(null);
(statearr_25224[(6)] = c__23813__auto___25226);

return statearr_25224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25226,out))
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
var G__25240 = arguments.length;
switch (G__25240) {
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
var c__23813__auto___25285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25285,out){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25285,out){
return (function (state_25264){
var state_val_25265 = (state_25264[(1)]);
if((state_val_25265 === (7))){
var inst_25246 = (state_25264[(7)]);
var inst_25246__$1 = (state_25264[(2)]);
var inst_25247 = (inst_25246__$1 == null);
var inst_25248 = cljs.core.not.call(null,inst_25247);
var state_25264__$1 = (function (){var statearr_25266 = state_25264;
(statearr_25266[(7)] = inst_25246__$1);

return statearr_25266;
})();
if(inst_25248){
var statearr_25267_25286 = state_25264__$1;
(statearr_25267_25286[(1)] = (8));

} else {
var statearr_25268_25287 = state_25264__$1;
(statearr_25268_25287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (1))){
var inst_25241 = (0);
var state_25264__$1 = (function (){var statearr_25269 = state_25264;
(statearr_25269[(8)] = inst_25241);

return statearr_25269;
})();
var statearr_25270_25288 = state_25264__$1;
(statearr_25270_25288[(2)] = null);

(statearr_25270_25288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (4))){
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25264__$1,(7),ch);
} else {
if((state_val_25265 === (6))){
var inst_25259 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25271_25289 = state_25264__$1;
(statearr_25271_25289[(2)] = inst_25259);

(statearr_25271_25289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (3))){
var inst_25261 = (state_25264[(2)]);
var inst_25262 = cljs.core.async.close_BANG_.call(null,out);
var state_25264__$1 = (function (){var statearr_25272 = state_25264;
(statearr_25272[(9)] = inst_25261);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25264__$1,inst_25262);
} else {
if((state_val_25265 === (2))){
var inst_25241 = (state_25264[(8)]);
var inst_25243 = (inst_25241 < n);
var state_25264__$1 = state_25264;
if(cljs.core.truth_(inst_25243)){
var statearr_25273_25290 = state_25264__$1;
(statearr_25273_25290[(1)] = (4));

} else {
var statearr_25274_25291 = state_25264__$1;
(statearr_25274_25291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (11))){
var inst_25241 = (state_25264[(8)]);
var inst_25251 = (state_25264[(2)]);
var inst_25252 = (inst_25241 + (1));
var inst_25241__$1 = inst_25252;
var state_25264__$1 = (function (){var statearr_25275 = state_25264;
(statearr_25275[(8)] = inst_25241__$1);

(statearr_25275[(10)] = inst_25251);

return statearr_25275;
})();
var statearr_25276_25292 = state_25264__$1;
(statearr_25276_25292[(2)] = null);

(statearr_25276_25292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (9))){
var state_25264__$1 = state_25264;
var statearr_25277_25293 = state_25264__$1;
(statearr_25277_25293[(2)] = null);

(statearr_25277_25293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (5))){
var state_25264__$1 = state_25264;
var statearr_25278_25294 = state_25264__$1;
(statearr_25278_25294[(2)] = null);

(statearr_25278_25294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (10))){
var inst_25256 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25279_25295 = state_25264__$1;
(statearr_25279_25295[(2)] = inst_25256);

(statearr_25279_25295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (8))){
var inst_25246 = (state_25264[(7)]);
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25264__$1,(11),out,inst_25246);
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
});})(c__23813__auto___25285,out))
;
return ((function (switch__23718__auto__,c__23813__auto___25285,out){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25280[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25280[(1)] = (1));

return statearr_25280;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25264){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25281){if((e25281 instanceof Object)){
var ex__23722__auto__ = e25281;
var statearr_25282_25296 = state_25264;
(statearr_25282_25296[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25297 = state_25264;
state_25264 = G__25297;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25285,out))
})();
var state__23815__auto__ = (function (){var statearr_25283 = f__23814__auto__.call(null);
(statearr_25283[(6)] = c__23813__auto___25285);

return statearr_25283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25285,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25299 = (function (f,ch,meta25300){
this.f = f;
this.ch = ch;
this.meta25300 = meta25300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25301,meta25300__$1){
var self__ = this;
var _25301__$1 = this;
return (new cljs.core.async.t_cljs$core$async25299(self__.f,self__.ch,meta25300__$1));
});

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25301){
var self__ = this;
var _25301__$1 = this;
return self__.meta25300;
});

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25302 = (function (f,ch,meta25300,_,fn1,meta25303){
this.f = f;
this.ch = ch;
this.meta25300 = meta25300;
this._ = _;
this.fn1 = fn1;
this.meta25303 = meta25303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25304,meta25303__$1){
var self__ = this;
var _25304__$1 = this;
return (new cljs.core.async.t_cljs$core$async25302(self__.f,self__.ch,self__.meta25300,self__._,self__.fn1,meta25303__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25304){
var self__ = this;
var _25304__$1 = this;
return self__.meta25303;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25302.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25302.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25298_SHARP_){
return f1.call(null,(((p1__25298_SHARP_ == null))?null:self__.f.call(null,p1__25298_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25302.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25300","meta25300",1722157128,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25299","cljs.core.async/t_cljs$core$async25299",322021970,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25303","meta25303",2041276109,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25302";

cljs.core.async.t_cljs$core$async25302.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25302");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25302.
 */
cljs.core.async.__GT_t_cljs$core$async25302 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25302(f__$1,ch__$1,meta25300__$1,___$2,fn1__$1,meta25303){
return (new cljs.core.async.t_cljs$core$async25302(f__$1,ch__$1,meta25300__$1,___$2,fn1__$1,meta25303));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25302(self__.f,self__.ch,self__.meta25300,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25300","meta25300",1722157128,null)], null);
});

cljs.core.async.t_cljs$core$async25299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25299";

cljs.core.async.t_cljs$core$async25299.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25299");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25299.
 */
cljs.core.async.__GT_t_cljs$core$async25299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25299(f__$1,ch__$1,meta25300){
return (new cljs.core.async.t_cljs$core$async25299(f__$1,ch__$1,meta25300));
});

}

return (new cljs.core.async.t_cljs$core$async25299(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25305 = (function (f,ch,meta25306){
this.f = f;
this.ch = ch;
this.meta25306 = meta25306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25307,meta25306__$1){
var self__ = this;
var _25307__$1 = this;
return (new cljs.core.async.t_cljs$core$async25305(self__.f,self__.ch,meta25306__$1));
});

cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25307){
var self__ = this;
var _25307__$1 = this;
return self__.meta25306;
});

cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25306","meta25306",-1035269452,null)], null);
});

cljs.core.async.t_cljs$core$async25305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25305";

cljs.core.async.t_cljs$core$async25305.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25305");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25305.
 */
cljs.core.async.__GT_t_cljs$core$async25305 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25305(f__$1,ch__$1,meta25306){
return (new cljs.core.async.t_cljs$core$async25305(f__$1,ch__$1,meta25306));
});

}

return (new cljs.core.async.t_cljs$core$async25305(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25308 = (function (p,ch,meta25309){
this.p = p;
this.ch = ch;
this.meta25309 = meta25309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25310,meta25309__$1){
var self__ = this;
var _25310__$1 = this;
return (new cljs.core.async.t_cljs$core$async25308(self__.p,self__.ch,meta25309__$1));
});

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25310){
var self__ = this;
var _25310__$1 = this;
return self__.meta25309;
});

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25309","meta25309",-454605048,null)], null);
});

cljs.core.async.t_cljs$core$async25308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25308";

cljs.core.async.t_cljs$core$async25308.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25308");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25308.
 */
cljs.core.async.__GT_t_cljs$core$async25308 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25308(p__$1,ch__$1,meta25309){
return (new cljs.core.async.t_cljs$core$async25308(p__$1,ch__$1,meta25309));
});

}

return (new cljs.core.async.t_cljs$core$async25308(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25312 = arguments.length;
switch (G__25312) {
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
var c__23813__auto___25352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25352,out){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25352,out){
return (function (state_25333){
var state_val_25334 = (state_25333[(1)]);
if((state_val_25334 === (7))){
var inst_25329 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
var statearr_25335_25353 = state_25333__$1;
(statearr_25335_25353[(2)] = inst_25329);

(statearr_25335_25353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (1))){
var state_25333__$1 = state_25333;
var statearr_25336_25354 = state_25333__$1;
(statearr_25336_25354[(2)] = null);

(statearr_25336_25354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (4))){
var inst_25315 = (state_25333[(7)]);
var inst_25315__$1 = (state_25333[(2)]);
var inst_25316 = (inst_25315__$1 == null);
var state_25333__$1 = (function (){var statearr_25337 = state_25333;
(statearr_25337[(7)] = inst_25315__$1);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25316)){
var statearr_25338_25355 = state_25333__$1;
(statearr_25338_25355[(1)] = (5));

} else {
var statearr_25339_25356 = state_25333__$1;
(statearr_25339_25356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (6))){
var inst_25315 = (state_25333[(7)]);
var inst_25320 = p.call(null,inst_25315);
var state_25333__$1 = state_25333;
if(cljs.core.truth_(inst_25320)){
var statearr_25340_25357 = state_25333__$1;
(statearr_25340_25357[(1)] = (8));

} else {
var statearr_25341_25358 = state_25333__$1;
(statearr_25341_25358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (3))){
var inst_25331 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else {
if((state_val_25334 === (2))){
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,(4),ch);
} else {
if((state_val_25334 === (11))){
var inst_25323 = (state_25333[(2)]);
var state_25333__$1 = state_25333;
var statearr_25342_25359 = state_25333__$1;
(statearr_25342_25359[(2)] = inst_25323);

(statearr_25342_25359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (9))){
var state_25333__$1 = state_25333;
var statearr_25343_25360 = state_25333__$1;
(statearr_25343_25360[(2)] = null);

(statearr_25343_25360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (5))){
var inst_25318 = cljs.core.async.close_BANG_.call(null,out);
var state_25333__$1 = state_25333;
var statearr_25344_25361 = state_25333__$1;
(statearr_25344_25361[(2)] = inst_25318);

(statearr_25344_25361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (10))){
var inst_25326 = (state_25333[(2)]);
var state_25333__$1 = (function (){var statearr_25345 = state_25333;
(statearr_25345[(8)] = inst_25326);

return statearr_25345;
})();
var statearr_25346_25362 = state_25333__$1;
(statearr_25346_25362[(2)] = null);

(statearr_25346_25362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25334 === (8))){
var inst_25315 = (state_25333[(7)]);
var state_25333__$1 = state_25333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,(11),out,inst_25315);
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
});})(c__23813__auto___25352,out))
;
return ((function (switch__23718__auto__,c__23813__auto___25352,out){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25347 = [null,null,null,null,null,null,null,null,null];
(statearr_25347[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25347[(1)] = (1));

return statearr_25347;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25333){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25348){if((e25348 instanceof Object)){
var ex__23722__auto__ = e25348;
var statearr_25349_25363 = state_25333;
(statearr_25349_25363[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25364 = state_25333;
state_25333 = G__25364;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25352,out))
})();
var state__23815__auto__ = (function (){var statearr_25350 = f__23814__auto__.call(null);
(statearr_25350[(6)] = c__23813__auto___25352);

return statearr_25350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25352,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25366 = arguments.length;
switch (G__25366) {
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
var c__23813__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto__){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto__){
return (function (state_25429){
var state_val_25430 = (state_25429[(1)]);
if((state_val_25430 === (7))){
var inst_25425 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25431_25469 = state_25429__$1;
(statearr_25431_25469[(2)] = inst_25425);

(statearr_25431_25469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (20))){
var inst_25395 = (state_25429[(7)]);
var inst_25406 = (state_25429[(2)]);
var inst_25407 = cljs.core.next.call(null,inst_25395);
var inst_25381 = inst_25407;
var inst_25382 = null;
var inst_25383 = (0);
var inst_25384 = (0);
var state_25429__$1 = (function (){var statearr_25432 = state_25429;
(statearr_25432[(8)] = inst_25384);

(statearr_25432[(9)] = inst_25383);

(statearr_25432[(10)] = inst_25406);

(statearr_25432[(11)] = inst_25382);

(statearr_25432[(12)] = inst_25381);

return statearr_25432;
})();
var statearr_25433_25470 = state_25429__$1;
(statearr_25433_25470[(2)] = null);

(statearr_25433_25470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (1))){
var state_25429__$1 = state_25429;
var statearr_25434_25471 = state_25429__$1;
(statearr_25434_25471[(2)] = null);

(statearr_25434_25471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (4))){
var inst_25370 = (state_25429[(13)]);
var inst_25370__$1 = (state_25429[(2)]);
var inst_25371 = (inst_25370__$1 == null);
var state_25429__$1 = (function (){var statearr_25435 = state_25429;
(statearr_25435[(13)] = inst_25370__$1);

return statearr_25435;
})();
if(cljs.core.truth_(inst_25371)){
var statearr_25436_25472 = state_25429__$1;
(statearr_25436_25472[(1)] = (5));

} else {
var statearr_25437_25473 = state_25429__$1;
(statearr_25437_25473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (15))){
var state_25429__$1 = state_25429;
var statearr_25441_25474 = state_25429__$1;
(statearr_25441_25474[(2)] = null);

(statearr_25441_25474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (21))){
var state_25429__$1 = state_25429;
var statearr_25442_25475 = state_25429__$1;
(statearr_25442_25475[(2)] = null);

(statearr_25442_25475[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (13))){
var inst_25384 = (state_25429[(8)]);
var inst_25383 = (state_25429[(9)]);
var inst_25382 = (state_25429[(11)]);
var inst_25381 = (state_25429[(12)]);
var inst_25391 = (state_25429[(2)]);
var inst_25392 = (inst_25384 + (1));
var tmp25438 = inst_25383;
var tmp25439 = inst_25382;
var tmp25440 = inst_25381;
var inst_25381__$1 = tmp25440;
var inst_25382__$1 = tmp25439;
var inst_25383__$1 = tmp25438;
var inst_25384__$1 = inst_25392;
var state_25429__$1 = (function (){var statearr_25443 = state_25429;
(statearr_25443[(8)] = inst_25384__$1);

(statearr_25443[(9)] = inst_25383__$1);

(statearr_25443[(14)] = inst_25391);

(statearr_25443[(11)] = inst_25382__$1);

(statearr_25443[(12)] = inst_25381__$1);

return statearr_25443;
})();
var statearr_25444_25476 = state_25429__$1;
(statearr_25444_25476[(2)] = null);

(statearr_25444_25476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (22))){
var state_25429__$1 = state_25429;
var statearr_25445_25477 = state_25429__$1;
(statearr_25445_25477[(2)] = null);

(statearr_25445_25477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (6))){
var inst_25370 = (state_25429[(13)]);
var inst_25379 = f.call(null,inst_25370);
var inst_25380 = cljs.core.seq.call(null,inst_25379);
var inst_25381 = inst_25380;
var inst_25382 = null;
var inst_25383 = (0);
var inst_25384 = (0);
var state_25429__$1 = (function (){var statearr_25446 = state_25429;
(statearr_25446[(8)] = inst_25384);

(statearr_25446[(9)] = inst_25383);

(statearr_25446[(11)] = inst_25382);

(statearr_25446[(12)] = inst_25381);

return statearr_25446;
})();
var statearr_25447_25478 = state_25429__$1;
(statearr_25447_25478[(2)] = null);

(statearr_25447_25478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (17))){
var inst_25395 = (state_25429[(7)]);
var inst_25399 = cljs.core.chunk_first.call(null,inst_25395);
var inst_25400 = cljs.core.chunk_rest.call(null,inst_25395);
var inst_25401 = cljs.core.count.call(null,inst_25399);
var inst_25381 = inst_25400;
var inst_25382 = inst_25399;
var inst_25383 = inst_25401;
var inst_25384 = (0);
var state_25429__$1 = (function (){var statearr_25448 = state_25429;
(statearr_25448[(8)] = inst_25384);

(statearr_25448[(9)] = inst_25383);

(statearr_25448[(11)] = inst_25382);

(statearr_25448[(12)] = inst_25381);

return statearr_25448;
})();
var statearr_25449_25479 = state_25429__$1;
(statearr_25449_25479[(2)] = null);

(statearr_25449_25479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (3))){
var inst_25427 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25429__$1,inst_25427);
} else {
if((state_val_25430 === (12))){
var inst_25415 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25450_25480 = state_25429__$1;
(statearr_25450_25480[(2)] = inst_25415);

(statearr_25450_25480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (2))){
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25429__$1,(4),in$);
} else {
if((state_val_25430 === (23))){
var inst_25423 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25451_25481 = state_25429__$1;
(statearr_25451_25481[(2)] = inst_25423);

(statearr_25451_25481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (19))){
var inst_25410 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25452_25482 = state_25429__$1;
(statearr_25452_25482[(2)] = inst_25410);

(statearr_25452_25482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (11))){
var inst_25381 = (state_25429[(12)]);
var inst_25395 = (state_25429[(7)]);
var inst_25395__$1 = cljs.core.seq.call(null,inst_25381);
var state_25429__$1 = (function (){var statearr_25453 = state_25429;
(statearr_25453[(7)] = inst_25395__$1);

return statearr_25453;
})();
if(inst_25395__$1){
var statearr_25454_25483 = state_25429__$1;
(statearr_25454_25483[(1)] = (14));

} else {
var statearr_25455_25484 = state_25429__$1;
(statearr_25455_25484[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (9))){
var inst_25417 = (state_25429[(2)]);
var inst_25418 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25429__$1 = (function (){var statearr_25456 = state_25429;
(statearr_25456[(15)] = inst_25417);

return statearr_25456;
})();
if(cljs.core.truth_(inst_25418)){
var statearr_25457_25485 = state_25429__$1;
(statearr_25457_25485[(1)] = (21));

} else {
var statearr_25458_25486 = state_25429__$1;
(statearr_25458_25486[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (5))){
var inst_25373 = cljs.core.async.close_BANG_.call(null,out);
var state_25429__$1 = state_25429;
var statearr_25459_25487 = state_25429__$1;
(statearr_25459_25487[(2)] = inst_25373);

(statearr_25459_25487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (14))){
var inst_25395 = (state_25429[(7)]);
var inst_25397 = cljs.core.chunked_seq_QMARK_.call(null,inst_25395);
var state_25429__$1 = state_25429;
if(inst_25397){
var statearr_25460_25488 = state_25429__$1;
(statearr_25460_25488[(1)] = (17));

} else {
var statearr_25461_25489 = state_25429__$1;
(statearr_25461_25489[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (16))){
var inst_25413 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25462_25490 = state_25429__$1;
(statearr_25462_25490[(2)] = inst_25413);

(statearr_25462_25490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (10))){
var inst_25384 = (state_25429[(8)]);
var inst_25382 = (state_25429[(11)]);
var inst_25389 = cljs.core._nth.call(null,inst_25382,inst_25384);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25429__$1,(13),out,inst_25389);
} else {
if((state_val_25430 === (18))){
var inst_25395 = (state_25429[(7)]);
var inst_25404 = cljs.core.first.call(null,inst_25395);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25429__$1,(20),out,inst_25404);
} else {
if((state_val_25430 === (8))){
var inst_25384 = (state_25429[(8)]);
var inst_25383 = (state_25429[(9)]);
var inst_25386 = (inst_25384 < inst_25383);
var inst_25387 = inst_25386;
var state_25429__$1 = state_25429;
if(cljs.core.truth_(inst_25387)){
var statearr_25463_25491 = state_25429__$1;
(statearr_25463_25491[(1)] = (10));

} else {
var statearr_25464_25492 = state_25429__$1;
(statearr_25464_25492[(1)] = (11));

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
});})(c__23813__auto__))
;
return ((function (switch__23718__auto__,c__23813__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23719__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23719__auto____0 = (function (){
var statearr_25465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25465[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23719__auto__);

(statearr_25465[(1)] = (1));

return statearr_25465;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23719__auto____1 = (function (state_25429){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25466){if((e25466 instanceof Object)){
var ex__23722__auto__ = e25466;
var statearr_25467_25493 = state_25429;
(statearr_25467_25493[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25494 = state_25429;
state_25429 = G__25494;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23719__auto__ = function(state_25429){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23719__auto____1.call(this,state_25429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23719__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23719__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto__))
})();
var state__23815__auto__ = (function (){var statearr_25468 = f__23814__auto__.call(null);
(statearr_25468[(6)] = c__23813__auto__);

return statearr_25468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto__))
);

return c__23813__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25496 = arguments.length;
switch (G__25496) {
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
var G__25499 = arguments.length;
switch (G__25499) {
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
var G__25502 = arguments.length;
switch (G__25502) {
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
var c__23813__auto___25549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25549,out){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25549,out){
return (function (state_25526){
var state_val_25527 = (state_25526[(1)]);
if((state_val_25527 === (7))){
var inst_25521 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
var statearr_25528_25550 = state_25526__$1;
(statearr_25528_25550[(2)] = inst_25521);

(statearr_25528_25550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (1))){
var inst_25503 = null;
var state_25526__$1 = (function (){var statearr_25529 = state_25526;
(statearr_25529[(7)] = inst_25503);

return statearr_25529;
})();
var statearr_25530_25551 = state_25526__$1;
(statearr_25530_25551[(2)] = null);

(statearr_25530_25551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (4))){
var inst_25506 = (state_25526[(8)]);
var inst_25506__$1 = (state_25526[(2)]);
var inst_25507 = (inst_25506__$1 == null);
var inst_25508 = cljs.core.not.call(null,inst_25507);
var state_25526__$1 = (function (){var statearr_25531 = state_25526;
(statearr_25531[(8)] = inst_25506__$1);

return statearr_25531;
})();
if(inst_25508){
var statearr_25532_25552 = state_25526__$1;
(statearr_25532_25552[(1)] = (5));

} else {
var statearr_25533_25553 = state_25526__$1;
(statearr_25533_25553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (6))){
var state_25526__$1 = state_25526;
var statearr_25534_25554 = state_25526__$1;
(statearr_25534_25554[(2)] = null);

(statearr_25534_25554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (3))){
var inst_25523 = (state_25526[(2)]);
var inst_25524 = cljs.core.async.close_BANG_.call(null,out);
var state_25526__$1 = (function (){var statearr_25535 = state_25526;
(statearr_25535[(9)] = inst_25523);

return statearr_25535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25526__$1,inst_25524);
} else {
if((state_val_25527 === (2))){
var state_25526__$1 = state_25526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25526__$1,(4),ch);
} else {
if((state_val_25527 === (11))){
var inst_25506 = (state_25526[(8)]);
var inst_25515 = (state_25526[(2)]);
var inst_25503 = inst_25506;
var state_25526__$1 = (function (){var statearr_25536 = state_25526;
(statearr_25536[(7)] = inst_25503);

(statearr_25536[(10)] = inst_25515);

return statearr_25536;
})();
var statearr_25537_25555 = state_25526__$1;
(statearr_25537_25555[(2)] = null);

(statearr_25537_25555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (9))){
var inst_25506 = (state_25526[(8)]);
var state_25526__$1 = state_25526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25526__$1,(11),out,inst_25506);
} else {
if((state_val_25527 === (5))){
var inst_25503 = (state_25526[(7)]);
var inst_25506 = (state_25526[(8)]);
var inst_25510 = cljs.core._EQ_.call(null,inst_25506,inst_25503);
var state_25526__$1 = state_25526;
if(inst_25510){
var statearr_25539_25556 = state_25526__$1;
(statearr_25539_25556[(1)] = (8));

} else {
var statearr_25540_25557 = state_25526__$1;
(statearr_25540_25557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (10))){
var inst_25518 = (state_25526[(2)]);
var state_25526__$1 = state_25526;
var statearr_25541_25558 = state_25526__$1;
(statearr_25541_25558[(2)] = inst_25518);

(statearr_25541_25558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25527 === (8))){
var inst_25503 = (state_25526[(7)]);
var tmp25538 = inst_25503;
var inst_25503__$1 = tmp25538;
var state_25526__$1 = (function (){var statearr_25542 = state_25526;
(statearr_25542[(7)] = inst_25503__$1);

return statearr_25542;
})();
var statearr_25543_25559 = state_25526__$1;
(statearr_25543_25559[(2)] = null);

(statearr_25543_25559[(1)] = (2));


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
});})(c__23813__auto___25549,out))
;
return ((function (switch__23718__auto__,c__23813__auto___25549,out){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25544[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25544[(1)] = (1));

return statearr_25544;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25526){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25545){if((e25545 instanceof Object)){
var ex__23722__auto__ = e25545;
var statearr_25546_25560 = state_25526;
(statearr_25546_25560[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25561 = state_25526;
state_25526 = G__25561;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25549,out))
})();
var state__23815__auto__ = (function (){var statearr_25547 = f__23814__auto__.call(null);
(statearr_25547[(6)] = c__23813__auto___25549);

return statearr_25547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25549,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25563 = arguments.length;
switch (G__25563) {
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
var c__23813__auto___25629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25629,out){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25629,out){
return (function (state_25601){
var state_val_25602 = (state_25601[(1)]);
if((state_val_25602 === (7))){
var inst_25597 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25603_25630 = state_25601__$1;
(statearr_25603_25630[(2)] = inst_25597);

(statearr_25603_25630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (1))){
var inst_25564 = (new Array(n));
var inst_25565 = inst_25564;
var inst_25566 = (0);
var state_25601__$1 = (function (){var statearr_25604 = state_25601;
(statearr_25604[(7)] = inst_25566);

(statearr_25604[(8)] = inst_25565);

return statearr_25604;
})();
var statearr_25605_25631 = state_25601__$1;
(statearr_25605_25631[(2)] = null);

(statearr_25605_25631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (4))){
var inst_25569 = (state_25601[(9)]);
var inst_25569__$1 = (state_25601[(2)]);
var inst_25570 = (inst_25569__$1 == null);
var inst_25571 = cljs.core.not.call(null,inst_25570);
var state_25601__$1 = (function (){var statearr_25606 = state_25601;
(statearr_25606[(9)] = inst_25569__$1);

return statearr_25606;
})();
if(inst_25571){
var statearr_25607_25632 = state_25601__$1;
(statearr_25607_25632[(1)] = (5));

} else {
var statearr_25608_25633 = state_25601__$1;
(statearr_25608_25633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (15))){
var inst_25591 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25609_25634 = state_25601__$1;
(statearr_25609_25634[(2)] = inst_25591);

(statearr_25609_25634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (13))){
var state_25601__$1 = state_25601;
var statearr_25610_25635 = state_25601__$1;
(statearr_25610_25635[(2)] = null);

(statearr_25610_25635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (6))){
var inst_25566 = (state_25601[(7)]);
var inst_25587 = (inst_25566 > (0));
var state_25601__$1 = state_25601;
if(cljs.core.truth_(inst_25587)){
var statearr_25611_25636 = state_25601__$1;
(statearr_25611_25636[(1)] = (12));

} else {
var statearr_25612_25637 = state_25601__$1;
(statearr_25612_25637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (3))){
var inst_25599 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25601__$1,inst_25599);
} else {
if((state_val_25602 === (12))){
var inst_25565 = (state_25601[(8)]);
var inst_25589 = cljs.core.vec.call(null,inst_25565);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25601__$1,(15),out,inst_25589);
} else {
if((state_val_25602 === (2))){
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25601__$1,(4),ch);
} else {
if((state_val_25602 === (11))){
var inst_25581 = (state_25601[(2)]);
var inst_25582 = (new Array(n));
var inst_25565 = inst_25582;
var inst_25566 = (0);
var state_25601__$1 = (function (){var statearr_25613 = state_25601;
(statearr_25613[(10)] = inst_25581);

(statearr_25613[(7)] = inst_25566);

(statearr_25613[(8)] = inst_25565);

return statearr_25613;
})();
var statearr_25614_25638 = state_25601__$1;
(statearr_25614_25638[(2)] = null);

(statearr_25614_25638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (9))){
var inst_25565 = (state_25601[(8)]);
var inst_25579 = cljs.core.vec.call(null,inst_25565);
var state_25601__$1 = state_25601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25601__$1,(11),out,inst_25579);
} else {
if((state_val_25602 === (5))){
var inst_25569 = (state_25601[(9)]);
var inst_25574 = (state_25601[(11)]);
var inst_25566 = (state_25601[(7)]);
var inst_25565 = (state_25601[(8)]);
var inst_25573 = (inst_25565[inst_25566] = inst_25569);
var inst_25574__$1 = (inst_25566 + (1));
var inst_25575 = (inst_25574__$1 < n);
var state_25601__$1 = (function (){var statearr_25615 = state_25601;
(statearr_25615[(12)] = inst_25573);

(statearr_25615[(11)] = inst_25574__$1);

return statearr_25615;
})();
if(cljs.core.truth_(inst_25575)){
var statearr_25616_25639 = state_25601__$1;
(statearr_25616_25639[(1)] = (8));

} else {
var statearr_25617_25640 = state_25601__$1;
(statearr_25617_25640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (14))){
var inst_25594 = (state_25601[(2)]);
var inst_25595 = cljs.core.async.close_BANG_.call(null,out);
var state_25601__$1 = (function (){var statearr_25619 = state_25601;
(statearr_25619[(13)] = inst_25594);

return statearr_25619;
})();
var statearr_25620_25641 = state_25601__$1;
(statearr_25620_25641[(2)] = inst_25595);

(statearr_25620_25641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (10))){
var inst_25585 = (state_25601[(2)]);
var state_25601__$1 = state_25601;
var statearr_25621_25642 = state_25601__$1;
(statearr_25621_25642[(2)] = inst_25585);

(statearr_25621_25642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25602 === (8))){
var inst_25574 = (state_25601[(11)]);
var inst_25565 = (state_25601[(8)]);
var tmp25618 = inst_25565;
var inst_25565__$1 = tmp25618;
var inst_25566 = inst_25574;
var state_25601__$1 = (function (){var statearr_25622 = state_25601;
(statearr_25622[(7)] = inst_25566);

(statearr_25622[(8)] = inst_25565__$1);

return statearr_25622;
})();
var statearr_25623_25643 = state_25601__$1;
(statearr_25623_25643[(2)] = null);

(statearr_25623_25643[(1)] = (2));


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
});})(c__23813__auto___25629,out))
;
return ((function (switch__23718__auto__,c__23813__auto___25629,out){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25624[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25624[(1)] = (1));

return statearr_25624;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25601){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25625){if((e25625 instanceof Object)){
var ex__23722__auto__ = e25625;
var statearr_25626_25644 = state_25601;
(statearr_25626_25644[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25645 = state_25601;
state_25601 = G__25645;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25629,out))
})();
var state__23815__auto__ = (function (){var statearr_25627 = f__23814__auto__.call(null);
(statearr_25627[(6)] = c__23813__auto___25629);

return statearr_25627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25629,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25647 = arguments.length;
switch (G__25647) {
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
var c__23813__auto___25717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23813__auto___25717,out){
return (function (){
var f__23814__auto__ = (function (){var switch__23718__auto__ = ((function (c__23813__auto___25717,out){
return (function (state_25689){
var state_val_25690 = (state_25689[(1)]);
if((state_val_25690 === (7))){
var inst_25685 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25691_25718 = state_25689__$1;
(statearr_25691_25718[(2)] = inst_25685);

(statearr_25691_25718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (1))){
var inst_25648 = [];
var inst_25649 = inst_25648;
var inst_25650 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25689__$1 = (function (){var statearr_25692 = state_25689;
(statearr_25692[(7)] = inst_25649);

(statearr_25692[(8)] = inst_25650);

return statearr_25692;
})();
var statearr_25693_25719 = state_25689__$1;
(statearr_25693_25719[(2)] = null);

(statearr_25693_25719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (4))){
var inst_25653 = (state_25689[(9)]);
var inst_25653__$1 = (state_25689[(2)]);
var inst_25654 = (inst_25653__$1 == null);
var inst_25655 = cljs.core.not.call(null,inst_25654);
var state_25689__$1 = (function (){var statearr_25694 = state_25689;
(statearr_25694[(9)] = inst_25653__$1);

return statearr_25694;
})();
if(inst_25655){
var statearr_25695_25720 = state_25689__$1;
(statearr_25695_25720[(1)] = (5));

} else {
var statearr_25696_25721 = state_25689__$1;
(statearr_25696_25721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (15))){
var inst_25679 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25697_25722 = state_25689__$1;
(statearr_25697_25722[(2)] = inst_25679);

(statearr_25697_25722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (13))){
var state_25689__$1 = state_25689;
var statearr_25698_25723 = state_25689__$1;
(statearr_25698_25723[(2)] = null);

(statearr_25698_25723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (6))){
var inst_25649 = (state_25689[(7)]);
var inst_25674 = inst_25649.length;
var inst_25675 = (inst_25674 > (0));
var state_25689__$1 = state_25689;
if(cljs.core.truth_(inst_25675)){
var statearr_25699_25724 = state_25689__$1;
(statearr_25699_25724[(1)] = (12));

} else {
var statearr_25700_25725 = state_25689__$1;
(statearr_25700_25725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (3))){
var inst_25687 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25689__$1,inst_25687);
} else {
if((state_val_25690 === (12))){
var inst_25649 = (state_25689[(7)]);
var inst_25677 = cljs.core.vec.call(null,inst_25649);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25689__$1,(15),out,inst_25677);
} else {
if((state_val_25690 === (2))){
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25689__$1,(4),ch);
} else {
if((state_val_25690 === (11))){
var inst_25653 = (state_25689[(9)]);
var inst_25657 = (state_25689[(10)]);
var inst_25667 = (state_25689[(2)]);
var inst_25668 = [];
var inst_25669 = inst_25668.push(inst_25653);
var inst_25649 = inst_25668;
var inst_25650 = inst_25657;
var state_25689__$1 = (function (){var statearr_25701 = state_25689;
(statearr_25701[(7)] = inst_25649);

(statearr_25701[(8)] = inst_25650);

(statearr_25701[(11)] = inst_25667);

(statearr_25701[(12)] = inst_25669);

return statearr_25701;
})();
var statearr_25702_25726 = state_25689__$1;
(statearr_25702_25726[(2)] = null);

(statearr_25702_25726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (9))){
var inst_25649 = (state_25689[(7)]);
var inst_25665 = cljs.core.vec.call(null,inst_25649);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25689__$1,(11),out,inst_25665);
} else {
if((state_val_25690 === (5))){
var inst_25650 = (state_25689[(8)]);
var inst_25653 = (state_25689[(9)]);
var inst_25657 = (state_25689[(10)]);
var inst_25657__$1 = f.call(null,inst_25653);
var inst_25658 = cljs.core._EQ_.call(null,inst_25657__$1,inst_25650);
var inst_25659 = cljs.core.keyword_identical_QMARK_.call(null,inst_25650,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25660 = ((inst_25658) || (inst_25659));
var state_25689__$1 = (function (){var statearr_25703 = state_25689;
(statearr_25703[(10)] = inst_25657__$1);

return statearr_25703;
})();
if(cljs.core.truth_(inst_25660)){
var statearr_25704_25727 = state_25689__$1;
(statearr_25704_25727[(1)] = (8));

} else {
var statearr_25705_25728 = state_25689__$1;
(statearr_25705_25728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (14))){
var inst_25682 = (state_25689[(2)]);
var inst_25683 = cljs.core.async.close_BANG_.call(null,out);
var state_25689__$1 = (function (){var statearr_25707 = state_25689;
(statearr_25707[(13)] = inst_25682);

return statearr_25707;
})();
var statearr_25708_25729 = state_25689__$1;
(statearr_25708_25729[(2)] = inst_25683);

(statearr_25708_25729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (10))){
var inst_25672 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25709_25730 = state_25689__$1;
(statearr_25709_25730[(2)] = inst_25672);

(statearr_25709_25730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (8))){
var inst_25649 = (state_25689[(7)]);
var inst_25653 = (state_25689[(9)]);
var inst_25657 = (state_25689[(10)]);
var inst_25662 = inst_25649.push(inst_25653);
var tmp25706 = inst_25649;
var inst_25649__$1 = tmp25706;
var inst_25650 = inst_25657;
var state_25689__$1 = (function (){var statearr_25710 = state_25689;
(statearr_25710[(14)] = inst_25662);

(statearr_25710[(7)] = inst_25649__$1);

(statearr_25710[(8)] = inst_25650);

return statearr_25710;
})();
var statearr_25711_25731 = state_25689__$1;
(statearr_25711_25731[(2)] = null);

(statearr_25711_25731[(1)] = (2));


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
});})(c__23813__auto___25717,out))
;
return ((function (switch__23718__auto__,c__23813__auto___25717,out){
return (function() {
var cljs$core$async$state_machine__23719__auto__ = null;
var cljs$core$async$state_machine__23719__auto____0 = (function (){
var statearr_25712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25712[(0)] = cljs$core$async$state_machine__23719__auto__);

(statearr_25712[(1)] = (1));

return statearr_25712;
});
var cljs$core$async$state_machine__23719__auto____1 = (function (state_25689){
while(true){
var ret_value__23720__auto__ = (function (){try{while(true){
var result__23721__auto__ = switch__23718__auto__.call(null,state_25689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23721__auto__;
}
break;
}
}catch (e25713){if((e25713 instanceof Object)){
var ex__23722__auto__ = e25713;
var statearr_25714_25732 = state_25689;
(statearr_25714_25732[(5)] = ex__23722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25733 = state_25689;
state_25689 = G__25733;
continue;
} else {
return ret_value__23720__auto__;
}
break;
}
});
cljs$core$async$state_machine__23719__auto__ = function(state_25689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23719__auto____1.call(this,state_25689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23719__auto____0;
cljs$core$async$state_machine__23719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23719__auto____1;
return cljs$core$async$state_machine__23719__auto__;
})()
;})(switch__23718__auto__,c__23813__auto___25717,out))
})();
var state__23815__auto__ = (function (){var statearr_25715 = f__23814__auto__.call(null);
(statearr_25715[(6)] = c__23813__auto___25717);

return statearr_25715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23815__auto__);
});})(c__23813__auto___25717,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

