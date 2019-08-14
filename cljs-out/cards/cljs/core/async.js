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
var G__21531 = arguments.length;
switch (G__21531) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21532 = (function (f,blockable,meta21533){
this.f = f;
this.blockable = blockable;
this.meta21533 = meta21533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21534,meta21533__$1){
var self__ = this;
var _21534__$1 = this;
return (new cljs.core.async.t_cljs$core$async21532(self__.f,self__.blockable,meta21533__$1));
});

cljs.core.async.t_cljs$core$async21532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21534){
var self__ = this;
var _21534__$1 = this;
return self__.meta21533;
});

cljs.core.async.t_cljs$core$async21532.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21533","meta21533",1645462977,null)], null);
});

cljs.core.async.t_cljs$core$async21532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21532";

cljs.core.async.t_cljs$core$async21532.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21532");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21532.
 */
cljs.core.async.__GT_t_cljs$core$async21532 = (function cljs$core$async$__GT_t_cljs$core$async21532(f__$1,blockable__$1,meta21533){
return (new cljs.core.async.t_cljs$core$async21532(f__$1,blockable__$1,meta21533));
});

}

return (new cljs.core.async.t_cljs$core$async21532(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21538 = arguments.length;
switch (G__21538) {
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
var G__21541 = arguments.length;
switch (G__21541) {
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
var G__21544 = arguments.length;
switch (G__21544) {
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
var val_21546 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21546);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21546,ret){
return (function (){
return fn1.call(null,val_21546);
});})(val_21546,ret))
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
var G__21548 = arguments.length;
switch (G__21548) {
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
var n__4607__auto___21550 = n;
var x_21551 = (0);
while(true){
if((x_21551 < n__4607__auto___21550)){
(a[x_21551] = (0));

var G__21552 = (x_21551 + (1));
x_21551 = G__21552;
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

var G__21553 = (i + (1));
i = G__21553;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21554 = (function (flag,meta21555){
this.flag = flag;
this.meta21555 = meta21555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21556,meta21555__$1){
var self__ = this;
var _21556__$1 = this;
return (new cljs.core.async.t_cljs$core$async21554(self__.flag,meta21555__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21556){
var self__ = this;
var _21556__$1 = this;
return self__.meta21555;
});})(flag))
;

cljs.core.async.t_cljs$core$async21554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21554.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21555","meta21555",-2119658466,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21554";

cljs.core.async.t_cljs$core$async21554.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21554");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21554.
 */
cljs.core.async.__GT_t_cljs$core$async21554 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21554(flag__$1,meta21555){
return (new cljs.core.async.t_cljs$core$async21554(flag__$1,meta21555));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21554(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21557 = (function (flag,cb,meta21558){
this.flag = flag;
this.cb = cb;
this.meta21558 = meta21558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21559,meta21558__$1){
var self__ = this;
var _21559__$1 = this;
return (new cljs.core.async.t_cljs$core$async21557(self__.flag,self__.cb,meta21558__$1));
});

cljs.core.async.t_cljs$core$async21557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21559){
var self__ = this;
var _21559__$1 = this;
return self__.meta21558;
});

cljs.core.async.t_cljs$core$async21557.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21558","meta21558",2003477437,null)], null);
});

cljs.core.async.t_cljs$core$async21557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21557";

cljs.core.async.t_cljs$core$async21557.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21557");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21557.
 */
cljs.core.async.__GT_t_cljs$core$async21557 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21557(flag__$1,cb__$1,meta21558){
return (new cljs.core.async.t_cljs$core$async21557(flag__$1,cb__$1,meta21558));
});

}

return (new cljs.core.async.t_cljs$core$async21557(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21560_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21560_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21561_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21561_SHARP_,port], null));
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
var G__21562 = (i + (1));
i = G__21562;
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
var len__4730__auto___21568 = arguments.length;
var i__4731__auto___21569 = (0);
while(true){
if((i__4731__auto___21569 < len__4730__auto___21568)){
args__4736__auto__.push((arguments[i__4731__auto___21569]));

var G__21570 = (i__4731__auto___21569 + (1));
i__4731__auto___21569 = G__21570;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21565){
var map__21566 = p__21565;
var map__21566__$1 = (((((!((map__21566 == null))))?(((((map__21566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21566):map__21566);
var opts = map__21566__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21563){
var G__21564 = cljs.core.first.call(null,seq21563);
var seq21563__$1 = cljs.core.next.call(null,seq21563);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21564,seq21563__$1);
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
var G__21572 = arguments.length;
switch (G__21572) {
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
var c__19607__auto___21618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___21618){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___21618){
return (function (state_21596){
var state_val_21597 = (state_21596[(1)]);
if((state_val_21597 === (7))){
var inst_21592 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21598_21619 = state_21596__$1;
(statearr_21598_21619[(2)] = inst_21592);

(statearr_21598_21619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (1))){
var state_21596__$1 = state_21596;
var statearr_21599_21620 = state_21596__$1;
(statearr_21599_21620[(2)] = null);

(statearr_21599_21620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (4))){
var inst_21575 = (state_21596[(7)]);
var inst_21575__$1 = (state_21596[(2)]);
var inst_21576 = (inst_21575__$1 == null);
var state_21596__$1 = (function (){var statearr_21600 = state_21596;
(statearr_21600[(7)] = inst_21575__$1);

return statearr_21600;
})();
if(cljs.core.truth_(inst_21576)){
var statearr_21601_21621 = state_21596__$1;
(statearr_21601_21621[(1)] = (5));

} else {
var statearr_21602_21622 = state_21596__$1;
(statearr_21602_21622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (13))){
var state_21596__$1 = state_21596;
var statearr_21603_21623 = state_21596__$1;
(statearr_21603_21623[(2)] = null);

(statearr_21603_21623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (6))){
var inst_21575 = (state_21596[(7)]);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21596__$1,(11),to,inst_21575);
} else {
if((state_val_21597 === (3))){
var inst_21594 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21596__$1,inst_21594);
} else {
if((state_val_21597 === (12))){
var state_21596__$1 = state_21596;
var statearr_21604_21624 = state_21596__$1;
(statearr_21604_21624[(2)] = null);

(statearr_21604_21624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (2))){
var state_21596__$1 = state_21596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21596__$1,(4),from);
} else {
if((state_val_21597 === (11))){
var inst_21585 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
if(cljs.core.truth_(inst_21585)){
var statearr_21605_21625 = state_21596__$1;
(statearr_21605_21625[(1)] = (12));

} else {
var statearr_21606_21626 = state_21596__$1;
(statearr_21606_21626[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (9))){
var state_21596__$1 = state_21596;
var statearr_21607_21627 = state_21596__$1;
(statearr_21607_21627[(2)] = null);

(statearr_21607_21627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (5))){
var state_21596__$1 = state_21596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21608_21628 = state_21596__$1;
(statearr_21608_21628[(1)] = (8));

} else {
var statearr_21609_21629 = state_21596__$1;
(statearr_21609_21629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (14))){
var inst_21590 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21610_21630 = state_21596__$1;
(statearr_21610_21630[(2)] = inst_21590);

(statearr_21610_21630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (10))){
var inst_21582 = (state_21596[(2)]);
var state_21596__$1 = state_21596;
var statearr_21611_21631 = state_21596__$1;
(statearr_21611_21631[(2)] = inst_21582);

(statearr_21611_21631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21597 === (8))){
var inst_21579 = cljs.core.async.close_BANG_.call(null,to);
var state_21596__$1 = state_21596;
var statearr_21612_21632 = state_21596__$1;
(statearr_21612_21632[(2)] = inst_21579);

(statearr_21612_21632[(1)] = (10));


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
});})(c__19607__auto___21618))
;
return ((function (switch__19440__auto__,c__19607__auto___21618){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_21613 = [null,null,null,null,null,null,null,null];
(statearr_21613[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_21613[(1)] = (1));

return statearr_21613;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_21596){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21614){if((e21614 instanceof Object)){
var ex__19444__auto__ = e21614;
var statearr_21615_21633 = state_21596;
(statearr_21615_21633[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21634 = state_21596;
state_21596 = G__21634;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_21596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_21596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___21618))
})();
var state__19609__auto__ = (function (){var statearr_21616 = f__19608__auto__.call(null);
(statearr_21616[(6)] = c__19607__auto___21618);

return statearr_21616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___21618))
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
return (function (p__21635){
var vec__21636 = p__21635;
var v = cljs.core.nth.call(null,vec__21636,(0),null);
var p = cljs.core.nth.call(null,vec__21636,(1),null);
var job = vec__21636;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19607__auto___21807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___21807,res,vec__21636,v,p,job,jobs,results){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___21807,res,vec__21636,v,p,job,jobs,results){
return (function (state_21643){
var state_val_21644 = (state_21643[(1)]);
if((state_val_21644 === (1))){
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21643__$1,(2),res,v);
} else {
if((state_val_21644 === (2))){
var inst_21640 = (state_21643[(2)]);
var inst_21641 = cljs.core.async.close_BANG_.call(null,res);
var state_21643__$1 = (function (){var statearr_21645 = state_21643;
(statearr_21645[(7)] = inst_21640);

return statearr_21645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21643__$1,inst_21641);
} else {
return null;
}
}
});})(c__19607__auto___21807,res,vec__21636,v,p,job,jobs,results))
;
return ((function (switch__19440__auto__,c__19607__auto___21807,res,vec__21636,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0 = (function (){
var statearr_21646 = [null,null,null,null,null,null,null,null];
(statearr_21646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__);

(statearr_21646[(1)] = (1));

return statearr_21646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1 = (function (state_21643){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21647){if((e21647 instanceof Object)){
var ex__19444__auto__ = e21647;
var statearr_21648_21808 = state_21643;
(statearr_21648_21808[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21809 = state_21643;
state_21643 = G__21809;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = function(state_21643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1.call(this,state_21643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___21807,res,vec__21636,v,p,job,jobs,results))
})();
var state__19609__auto__ = (function (){var statearr_21649 = f__19608__auto__.call(null);
(statearr_21649[(6)] = c__19607__auto___21807);

return statearr_21649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___21807,res,vec__21636,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21650){
var vec__21651 = p__21650;
var v = cljs.core.nth.call(null,vec__21651,(0),null);
var p = cljs.core.nth.call(null,vec__21651,(1),null);
var job = vec__21651;
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
var n__4607__auto___21810 = n;
var __21811 = (0);
while(true){
if((__21811 < n__4607__auto___21810)){
var G__21654_21812 = type;
var G__21654_21813__$1 = (((G__21654_21812 instanceof cljs.core.Keyword))?G__21654_21812.fqn:null);
switch (G__21654_21813__$1) {
case "compute":
var c__19607__auto___21815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21811,c__19607__auto___21815,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (__21811,c__19607__auto___21815,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async){
return (function (state_21667){
var state_val_21668 = (state_21667[(1)]);
if((state_val_21668 === (1))){
var state_21667__$1 = state_21667;
var statearr_21669_21816 = state_21667__$1;
(statearr_21669_21816[(2)] = null);

(statearr_21669_21816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21668 === (2))){
var state_21667__$1 = state_21667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21667__$1,(4),jobs);
} else {
if((state_val_21668 === (3))){
var inst_21665 = (state_21667[(2)]);
var state_21667__$1 = state_21667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21667__$1,inst_21665);
} else {
if((state_val_21668 === (4))){
var inst_21657 = (state_21667[(2)]);
var inst_21658 = process.call(null,inst_21657);
var state_21667__$1 = state_21667;
if(cljs.core.truth_(inst_21658)){
var statearr_21670_21817 = state_21667__$1;
(statearr_21670_21817[(1)] = (5));

} else {
var statearr_21671_21818 = state_21667__$1;
(statearr_21671_21818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21668 === (5))){
var state_21667__$1 = state_21667;
var statearr_21672_21819 = state_21667__$1;
(statearr_21672_21819[(2)] = null);

(statearr_21672_21819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21668 === (6))){
var state_21667__$1 = state_21667;
var statearr_21673_21820 = state_21667__$1;
(statearr_21673_21820[(2)] = null);

(statearr_21673_21820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21668 === (7))){
var inst_21663 = (state_21667[(2)]);
var state_21667__$1 = state_21667;
var statearr_21674_21821 = state_21667__$1;
(statearr_21674_21821[(2)] = inst_21663);

(statearr_21674_21821[(1)] = (3));


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
});})(__21811,c__19607__auto___21815,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async))
;
return ((function (__21811,switch__19440__auto__,c__19607__auto___21815,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0 = (function (){
var statearr_21675 = [null,null,null,null,null,null,null];
(statearr_21675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__);

(statearr_21675[(1)] = (1));

return statearr_21675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1 = (function (state_21667){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21676){if((e21676 instanceof Object)){
var ex__19444__auto__ = e21676;
var statearr_21677_21822 = state_21667;
(statearr_21677_21822[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21823 = state_21667;
state_21667 = G__21823;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = function(state_21667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1.call(this,state_21667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__;
})()
;})(__21811,switch__19440__auto__,c__19607__auto___21815,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async))
})();
var state__19609__auto__ = (function (){var statearr_21678 = f__19608__auto__.call(null);
(statearr_21678[(6)] = c__19607__auto___21815);

return statearr_21678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(__21811,c__19607__auto___21815,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async))
);


break;
case "async":
var c__19607__auto___21824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21811,c__19607__auto___21824,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (__21811,c__19607__auto___21824,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async){
return (function (state_21691){
var state_val_21692 = (state_21691[(1)]);
if((state_val_21692 === (1))){
var state_21691__$1 = state_21691;
var statearr_21693_21825 = state_21691__$1;
(statearr_21693_21825[(2)] = null);

(statearr_21693_21825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (2))){
var state_21691__$1 = state_21691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21691__$1,(4),jobs);
} else {
if((state_val_21692 === (3))){
var inst_21689 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21691__$1,inst_21689);
} else {
if((state_val_21692 === (4))){
var inst_21681 = (state_21691[(2)]);
var inst_21682 = async.call(null,inst_21681);
var state_21691__$1 = state_21691;
if(cljs.core.truth_(inst_21682)){
var statearr_21694_21826 = state_21691__$1;
(statearr_21694_21826[(1)] = (5));

} else {
var statearr_21695_21827 = state_21691__$1;
(statearr_21695_21827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (5))){
var state_21691__$1 = state_21691;
var statearr_21696_21828 = state_21691__$1;
(statearr_21696_21828[(2)] = null);

(statearr_21696_21828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (6))){
var state_21691__$1 = state_21691;
var statearr_21697_21829 = state_21691__$1;
(statearr_21697_21829[(2)] = null);

(statearr_21697_21829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21692 === (7))){
var inst_21687 = (state_21691[(2)]);
var state_21691__$1 = state_21691;
var statearr_21698_21830 = state_21691__$1;
(statearr_21698_21830[(2)] = inst_21687);

(statearr_21698_21830[(1)] = (3));


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
});})(__21811,c__19607__auto___21824,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async))
;
return ((function (__21811,switch__19440__auto__,c__19607__auto___21824,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0 = (function (){
var statearr_21699 = [null,null,null,null,null,null,null];
(statearr_21699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__);

(statearr_21699[(1)] = (1));

return statearr_21699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1 = (function (state_21691){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21700){if((e21700 instanceof Object)){
var ex__19444__auto__ = e21700;
var statearr_21701_21831 = state_21691;
(statearr_21701_21831[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21832 = state_21691;
state_21691 = G__21832;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = function(state_21691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1.call(this,state_21691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__;
})()
;})(__21811,switch__19440__auto__,c__19607__auto___21824,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async))
})();
var state__19609__auto__ = (function (){var statearr_21702 = f__19608__auto__.call(null);
(statearr_21702[(6)] = c__19607__auto___21824);

return statearr_21702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(__21811,c__19607__auto___21824,G__21654_21812,G__21654_21813__$1,n__4607__auto___21810,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21654_21813__$1)].join('')));

}

var G__21833 = (__21811 + (1));
__21811 = G__21833;
continue;
} else {
}
break;
}

var c__19607__auto___21834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___21834,jobs,results,process,async){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___21834,jobs,results,process,async){
return (function (state_21724){
var state_val_21725 = (state_21724[(1)]);
if((state_val_21725 === (7))){
var inst_21720 = (state_21724[(2)]);
var state_21724__$1 = state_21724;
var statearr_21726_21835 = state_21724__$1;
(statearr_21726_21835[(2)] = inst_21720);

(statearr_21726_21835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21725 === (1))){
var state_21724__$1 = state_21724;
var statearr_21727_21836 = state_21724__$1;
(statearr_21727_21836[(2)] = null);

(statearr_21727_21836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21725 === (4))){
var inst_21705 = (state_21724[(7)]);
var inst_21705__$1 = (state_21724[(2)]);
var inst_21706 = (inst_21705__$1 == null);
var state_21724__$1 = (function (){var statearr_21728 = state_21724;
(statearr_21728[(7)] = inst_21705__$1);

return statearr_21728;
})();
if(cljs.core.truth_(inst_21706)){
var statearr_21729_21837 = state_21724__$1;
(statearr_21729_21837[(1)] = (5));

} else {
var statearr_21730_21838 = state_21724__$1;
(statearr_21730_21838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21725 === (6))){
var inst_21705 = (state_21724[(7)]);
var inst_21710 = (state_21724[(8)]);
var inst_21710__$1 = cljs.core.async.chan.call(null,(1));
var inst_21711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21712 = [inst_21705,inst_21710__$1];
var inst_21713 = (new cljs.core.PersistentVector(null,2,(5),inst_21711,inst_21712,null));
var state_21724__$1 = (function (){var statearr_21731 = state_21724;
(statearr_21731[(8)] = inst_21710__$1);

return statearr_21731;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21724__$1,(8),jobs,inst_21713);
} else {
if((state_val_21725 === (3))){
var inst_21722 = (state_21724[(2)]);
var state_21724__$1 = state_21724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21724__$1,inst_21722);
} else {
if((state_val_21725 === (2))){
var state_21724__$1 = state_21724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21724__$1,(4),from);
} else {
if((state_val_21725 === (9))){
var inst_21717 = (state_21724[(2)]);
var state_21724__$1 = (function (){var statearr_21732 = state_21724;
(statearr_21732[(9)] = inst_21717);

return statearr_21732;
})();
var statearr_21733_21839 = state_21724__$1;
(statearr_21733_21839[(2)] = null);

(statearr_21733_21839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21725 === (5))){
var inst_21708 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21724__$1 = state_21724;
var statearr_21734_21840 = state_21724__$1;
(statearr_21734_21840[(2)] = inst_21708);

(statearr_21734_21840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21725 === (8))){
var inst_21710 = (state_21724[(8)]);
var inst_21715 = (state_21724[(2)]);
var state_21724__$1 = (function (){var statearr_21735 = state_21724;
(statearr_21735[(10)] = inst_21715);

return statearr_21735;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21724__$1,(9),results,inst_21710);
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
});})(c__19607__auto___21834,jobs,results,process,async))
;
return ((function (switch__19440__auto__,c__19607__auto___21834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0 = (function (){
var statearr_21736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__);

(statearr_21736[(1)] = (1));

return statearr_21736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1 = (function (state_21724){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21737){if((e21737 instanceof Object)){
var ex__19444__auto__ = e21737;
var statearr_21738_21841 = state_21724;
(statearr_21738_21841[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21842 = state_21724;
state_21724 = G__21842;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = function(state_21724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1.call(this,state_21724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___21834,jobs,results,process,async))
})();
var state__19609__auto__ = (function (){var statearr_21739 = f__19608__auto__.call(null);
(statearr_21739[(6)] = c__19607__auto___21834);

return statearr_21739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___21834,jobs,results,process,async))
);


var c__19607__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto__,jobs,results,process,async){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto__,jobs,results,process,async){
return (function (state_21777){
var state_val_21778 = (state_21777[(1)]);
if((state_val_21778 === (7))){
var inst_21773 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
var statearr_21779_21843 = state_21777__$1;
(statearr_21779_21843[(2)] = inst_21773);

(statearr_21779_21843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (20))){
var state_21777__$1 = state_21777;
var statearr_21780_21844 = state_21777__$1;
(statearr_21780_21844[(2)] = null);

(statearr_21780_21844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (1))){
var state_21777__$1 = state_21777;
var statearr_21781_21845 = state_21777__$1;
(statearr_21781_21845[(2)] = null);

(statearr_21781_21845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (4))){
var inst_21742 = (state_21777[(7)]);
var inst_21742__$1 = (state_21777[(2)]);
var inst_21743 = (inst_21742__$1 == null);
var state_21777__$1 = (function (){var statearr_21782 = state_21777;
(statearr_21782[(7)] = inst_21742__$1);

return statearr_21782;
})();
if(cljs.core.truth_(inst_21743)){
var statearr_21783_21846 = state_21777__$1;
(statearr_21783_21846[(1)] = (5));

} else {
var statearr_21784_21847 = state_21777__$1;
(statearr_21784_21847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (15))){
var inst_21755 = (state_21777[(8)]);
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21777__$1,(18),to,inst_21755);
} else {
if((state_val_21778 === (21))){
var inst_21768 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
var statearr_21785_21848 = state_21777__$1;
(statearr_21785_21848[(2)] = inst_21768);

(statearr_21785_21848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (13))){
var inst_21770 = (state_21777[(2)]);
var state_21777__$1 = (function (){var statearr_21786 = state_21777;
(statearr_21786[(9)] = inst_21770);

return statearr_21786;
})();
var statearr_21787_21849 = state_21777__$1;
(statearr_21787_21849[(2)] = null);

(statearr_21787_21849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (6))){
var inst_21742 = (state_21777[(7)]);
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21777__$1,(11),inst_21742);
} else {
if((state_val_21778 === (17))){
var inst_21763 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
if(cljs.core.truth_(inst_21763)){
var statearr_21788_21850 = state_21777__$1;
(statearr_21788_21850[(1)] = (19));

} else {
var statearr_21789_21851 = state_21777__$1;
(statearr_21789_21851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (3))){
var inst_21775 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21777__$1,inst_21775);
} else {
if((state_val_21778 === (12))){
var inst_21752 = (state_21777[(10)]);
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21777__$1,(14),inst_21752);
} else {
if((state_val_21778 === (2))){
var state_21777__$1 = state_21777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21777__$1,(4),results);
} else {
if((state_val_21778 === (19))){
var state_21777__$1 = state_21777;
var statearr_21790_21852 = state_21777__$1;
(statearr_21790_21852[(2)] = null);

(statearr_21790_21852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (11))){
var inst_21752 = (state_21777[(2)]);
var state_21777__$1 = (function (){var statearr_21791 = state_21777;
(statearr_21791[(10)] = inst_21752);

return statearr_21791;
})();
var statearr_21792_21853 = state_21777__$1;
(statearr_21792_21853[(2)] = null);

(statearr_21792_21853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (9))){
var state_21777__$1 = state_21777;
var statearr_21793_21854 = state_21777__$1;
(statearr_21793_21854[(2)] = null);

(statearr_21793_21854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (5))){
var state_21777__$1 = state_21777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21794_21855 = state_21777__$1;
(statearr_21794_21855[(1)] = (8));

} else {
var statearr_21795_21856 = state_21777__$1;
(statearr_21795_21856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (14))){
var inst_21757 = (state_21777[(11)]);
var inst_21755 = (state_21777[(8)]);
var inst_21755__$1 = (state_21777[(2)]);
var inst_21756 = (inst_21755__$1 == null);
var inst_21757__$1 = cljs.core.not.call(null,inst_21756);
var state_21777__$1 = (function (){var statearr_21796 = state_21777;
(statearr_21796[(11)] = inst_21757__$1);

(statearr_21796[(8)] = inst_21755__$1);

return statearr_21796;
})();
if(inst_21757__$1){
var statearr_21797_21857 = state_21777__$1;
(statearr_21797_21857[(1)] = (15));

} else {
var statearr_21798_21858 = state_21777__$1;
(statearr_21798_21858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (16))){
var inst_21757 = (state_21777[(11)]);
var state_21777__$1 = state_21777;
var statearr_21799_21859 = state_21777__$1;
(statearr_21799_21859[(2)] = inst_21757);

(statearr_21799_21859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (10))){
var inst_21749 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
var statearr_21800_21860 = state_21777__$1;
(statearr_21800_21860[(2)] = inst_21749);

(statearr_21800_21860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (18))){
var inst_21760 = (state_21777[(2)]);
var state_21777__$1 = state_21777;
var statearr_21801_21861 = state_21777__$1;
(statearr_21801_21861[(2)] = inst_21760);

(statearr_21801_21861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21778 === (8))){
var inst_21746 = cljs.core.async.close_BANG_.call(null,to);
var state_21777__$1 = state_21777;
var statearr_21802_21862 = state_21777__$1;
(statearr_21802_21862[(2)] = inst_21746);

(statearr_21802_21862[(1)] = (10));


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
});})(c__19607__auto__,jobs,results,process,async))
;
return ((function (switch__19440__auto__,c__19607__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0 = (function (){
var statearr_21803 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__);

(statearr_21803[(1)] = (1));

return statearr_21803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1 = (function (state_21777){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21804){if((e21804 instanceof Object)){
var ex__19444__auto__ = e21804;
var statearr_21805_21863 = state_21777;
(statearr_21805_21863[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21864 = state_21777;
state_21777 = G__21864;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__ = function(state_21777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1.call(this,state_21777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19441__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto__,jobs,results,process,async))
})();
var state__19609__auto__ = (function (){var statearr_21806 = f__19608__auto__.call(null);
(statearr_21806[(6)] = c__19607__auto__);

return statearr_21806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto__,jobs,results,process,async))
);

return c__19607__auto__;
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
var G__21866 = arguments.length;
switch (G__21866) {
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
var G__21869 = arguments.length;
switch (G__21869) {
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
var G__21872 = arguments.length;
switch (G__21872) {
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
var c__19607__auto___21921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___21921,tc,fc){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___21921,tc,fc){
return (function (state_21898){
var state_val_21899 = (state_21898[(1)]);
if((state_val_21899 === (7))){
var inst_21894 = (state_21898[(2)]);
var state_21898__$1 = state_21898;
var statearr_21900_21922 = state_21898__$1;
(statearr_21900_21922[(2)] = inst_21894);

(statearr_21900_21922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (1))){
var state_21898__$1 = state_21898;
var statearr_21901_21923 = state_21898__$1;
(statearr_21901_21923[(2)] = null);

(statearr_21901_21923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (4))){
var inst_21875 = (state_21898[(7)]);
var inst_21875__$1 = (state_21898[(2)]);
var inst_21876 = (inst_21875__$1 == null);
var state_21898__$1 = (function (){var statearr_21902 = state_21898;
(statearr_21902[(7)] = inst_21875__$1);

return statearr_21902;
})();
if(cljs.core.truth_(inst_21876)){
var statearr_21903_21924 = state_21898__$1;
(statearr_21903_21924[(1)] = (5));

} else {
var statearr_21904_21925 = state_21898__$1;
(statearr_21904_21925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (13))){
var state_21898__$1 = state_21898;
var statearr_21905_21926 = state_21898__$1;
(statearr_21905_21926[(2)] = null);

(statearr_21905_21926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (6))){
var inst_21875 = (state_21898[(7)]);
var inst_21881 = p.call(null,inst_21875);
var state_21898__$1 = state_21898;
if(cljs.core.truth_(inst_21881)){
var statearr_21906_21927 = state_21898__$1;
(statearr_21906_21927[(1)] = (9));

} else {
var statearr_21907_21928 = state_21898__$1;
(statearr_21907_21928[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (3))){
var inst_21896 = (state_21898[(2)]);
var state_21898__$1 = state_21898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21898__$1,inst_21896);
} else {
if((state_val_21899 === (12))){
var state_21898__$1 = state_21898;
var statearr_21908_21929 = state_21898__$1;
(statearr_21908_21929[(2)] = null);

(statearr_21908_21929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (2))){
var state_21898__$1 = state_21898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21898__$1,(4),ch);
} else {
if((state_val_21899 === (11))){
var inst_21875 = (state_21898[(7)]);
var inst_21885 = (state_21898[(2)]);
var state_21898__$1 = state_21898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21898__$1,(8),inst_21885,inst_21875);
} else {
if((state_val_21899 === (9))){
var state_21898__$1 = state_21898;
var statearr_21909_21930 = state_21898__$1;
(statearr_21909_21930[(2)] = tc);

(statearr_21909_21930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (5))){
var inst_21878 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21879 = cljs.core.async.close_BANG_.call(null,fc);
var state_21898__$1 = (function (){var statearr_21910 = state_21898;
(statearr_21910[(8)] = inst_21878);

return statearr_21910;
})();
var statearr_21911_21931 = state_21898__$1;
(statearr_21911_21931[(2)] = inst_21879);

(statearr_21911_21931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (14))){
var inst_21892 = (state_21898[(2)]);
var state_21898__$1 = state_21898;
var statearr_21912_21932 = state_21898__$1;
(statearr_21912_21932[(2)] = inst_21892);

(statearr_21912_21932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (10))){
var state_21898__$1 = state_21898;
var statearr_21913_21933 = state_21898__$1;
(statearr_21913_21933[(2)] = fc);

(statearr_21913_21933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21899 === (8))){
var inst_21887 = (state_21898[(2)]);
var state_21898__$1 = state_21898;
if(cljs.core.truth_(inst_21887)){
var statearr_21914_21934 = state_21898__$1;
(statearr_21914_21934[(1)] = (12));

} else {
var statearr_21915_21935 = state_21898__$1;
(statearr_21915_21935[(1)] = (13));

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
});})(c__19607__auto___21921,tc,fc))
;
return ((function (switch__19440__auto__,c__19607__auto___21921,tc,fc){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_21916 = [null,null,null,null,null,null,null,null,null];
(statearr_21916[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_21916[(1)] = (1));

return statearr_21916;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_21898){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21917){if((e21917 instanceof Object)){
var ex__19444__auto__ = e21917;
var statearr_21918_21936 = state_21898;
(statearr_21918_21936[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21937 = state_21898;
state_21898 = G__21937;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_21898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_21898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___21921,tc,fc))
})();
var state__19609__auto__ = (function (){var statearr_21919 = f__19608__auto__.call(null);
(statearr_21919[(6)] = c__19607__auto___21921);

return statearr_21919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___21921,tc,fc))
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
var c__19607__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto__){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto__){
return (function (state_21958){
var state_val_21959 = (state_21958[(1)]);
if((state_val_21959 === (7))){
var inst_21954 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
var statearr_21960_21978 = state_21958__$1;
(statearr_21960_21978[(2)] = inst_21954);

(statearr_21960_21978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (1))){
var inst_21938 = init;
var state_21958__$1 = (function (){var statearr_21961 = state_21958;
(statearr_21961[(7)] = inst_21938);

return statearr_21961;
})();
var statearr_21962_21979 = state_21958__$1;
(statearr_21962_21979[(2)] = null);

(statearr_21962_21979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (4))){
var inst_21941 = (state_21958[(8)]);
var inst_21941__$1 = (state_21958[(2)]);
var inst_21942 = (inst_21941__$1 == null);
var state_21958__$1 = (function (){var statearr_21963 = state_21958;
(statearr_21963[(8)] = inst_21941__$1);

return statearr_21963;
})();
if(cljs.core.truth_(inst_21942)){
var statearr_21964_21980 = state_21958__$1;
(statearr_21964_21980[(1)] = (5));

} else {
var statearr_21965_21981 = state_21958__$1;
(statearr_21965_21981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (6))){
var inst_21945 = (state_21958[(9)]);
var inst_21941 = (state_21958[(8)]);
var inst_21938 = (state_21958[(7)]);
var inst_21945__$1 = f.call(null,inst_21938,inst_21941);
var inst_21946 = cljs.core.reduced_QMARK_.call(null,inst_21945__$1);
var state_21958__$1 = (function (){var statearr_21966 = state_21958;
(statearr_21966[(9)] = inst_21945__$1);

return statearr_21966;
})();
if(inst_21946){
var statearr_21967_21982 = state_21958__$1;
(statearr_21967_21982[(1)] = (8));

} else {
var statearr_21968_21983 = state_21958__$1;
(statearr_21968_21983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (3))){
var inst_21956 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21958__$1,inst_21956);
} else {
if((state_val_21959 === (2))){
var state_21958__$1 = state_21958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21958__$1,(4),ch);
} else {
if((state_val_21959 === (9))){
var inst_21945 = (state_21958[(9)]);
var inst_21938 = inst_21945;
var state_21958__$1 = (function (){var statearr_21969 = state_21958;
(statearr_21969[(7)] = inst_21938);

return statearr_21969;
})();
var statearr_21970_21984 = state_21958__$1;
(statearr_21970_21984[(2)] = null);

(statearr_21970_21984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (5))){
var inst_21938 = (state_21958[(7)]);
var state_21958__$1 = state_21958;
var statearr_21971_21985 = state_21958__$1;
(statearr_21971_21985[(2)] = inst_21938);

(statearr_21971_21985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (10))){
var inst_21952 = (state_21958[(2)]);
var state_21958__$1 = state_21958;
var statearr_21972_21986 = state_21958__$1;
(statearr_21972_21986[(2)] = inst_21952);

(statearr_21972_21986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21959 === (8))){
var inst_21945 = (state_21958[(9)]);
var inst_21948 = cljs.core.deref.call(null,inst_21945);
var state_21958__$1 = state_21958;
var statearr_21973_21987 = state_21958__$1;
(statearr_21973_21987[(2)] = inst_21948);

(statearr_21973_21987[(1)] = (10));


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
});})(c__19607__auto__))
;
return ((function (switch__19440__auto__,c__19607__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19441__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19441__auto____0 = (function (){
var statearr_21974 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21974[(0)] = cljs$core$async$reduce_$_state_machine__19441__auto__);

(statearr_21974[(1)] = (1));

return statearr_21974;
});
var cljs$core$async$reduce_$_state_machine__19441__auto____1 = (function (state_21958){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21975){if((e21975 instanceof Object)){
var ex__19444__auto__ = e21975;
var statearr_21976_21988 = state_21958;
(statearr_21976_21988[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21989 = state_21958;
state_21958 = G__21989;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19441__auto__ = function(state_21958){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19441__auto____1.call(this,state_21958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19441__auto____0;
cljs$core$async$reduce_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19441__auto____1;
return cljs$core$async$reduce_$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto__))
})();
var state__19609__auto__ = (function (){var statearr_21977 = f__19608__auto__.call(null);
(statearr_21977[(6)] = c__19607__auto__);

return statearr_21977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto__))
);

return c__19607__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19607__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto__,f__$1){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto__,f__$1){
return (function (state_21995){
var state_val_21996 = (state_21995[(1)]);
if((state_val_21996 === (1))){
var inst_21990 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_21995__$1 = state_21995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21995__$1,(2),inst_21990);
} else {
if((state_val_21996 === (2))){
var inst_21992 = (state_21995[(2)]);
var inst_21993 = f__$1.call(null,inst_21992);
var state_21995__$1 = state_21995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21995__$1,inst_21993);
} else {
return null;
}
}
});})(c__19607__auto__,f__$1))
;
return ((function (switch__19440__auto__,c__19607__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19441__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19441__auto____0 = (function (){
var statearr_21997 = [null,null,null,null,null,null,null];
(statearr_21997[(0)] = cljs$core$async$transduce_$_state_machine__19441__auto__);

(statearr_21997[(1)] = (1));

return statearr_21997;
});
var cljs$core$async$transduce_$_state_machine__19441__auto____1 = (function (state_21995){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_21995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e21998){if((e21998 instanceof Object)){
var ex__19444__auto__ = e21998;
var statearr_21999_22001 = state_21995;
(statearr_21999_22001[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22002 = state_21995;
state_21995 = G__22002;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19441__auto__ = function(state_21995){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19441__auto____1.call(this,state_21995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19441__auto____0;
cljs$core$async$transduce_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19441__auto____1;
return cljs$core$async$transduce_$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto__,f__$1))
})();
var state__19609__auto__ = (function (){var statearr_22000 = f__19608__auto__.call(null);
(statearr_22000[(6)] = c__19607__auto__);

return statearr_22000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto__,f__$1))
);

return c__19607__auto__;
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
var G__22004 = arguments.length;
switch (G__22004) {
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
var c__19607__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto__){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto__){
return (function (state_22029){
var state_val_22030 = (state_22029[(1)]);
if((state_val_22030 === (7))){
var inst_22011 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
var statearr_22031_22052 = state_22029__$1;
(statearr_22031_22052[(2)] = inst_22011);

(statearr_22031_22052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (1))){
var inst_22005 = cljs.core.seq.call(null,coll);
var inst_22006 = inst_22005;
var state_22029__$1 = (function (){var statearr_22032 = state_22029;
(statearr_22032[(7)] = inst_22006);

return statearr_22032;
})();
var statearr_22033_22053 = state_22029__$1;
(statearr_22033_22053[(2)] = null);

(statearr_22033_22053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (4))){
var inst_22006 = (state_22029[(7)]);
var inst_22009 = cljs.core.first.call(null,inst_22006);
var state_22029__$1 = state_22029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22029__$1,(7),ch,inst_22009);
} else {
if((state_val_22030 === (13))){
var inst_22023 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
var statearr_22034_22054 = state_22029__$1;
(statearr_22034_22054[(2)] = inst_22023);

(statearr_22034_22054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (6))){
var inst_22014 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
if(cljs.core.truth_(inst_22014)){
var statearr_22035_22055 = state_22029__$1;
(statearr_22035_22055[(1)] = (8));

} else {
var statearr_22036_22056 = state_22029__$1;
(statearr_22036_22056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (3))){
var inst_22027 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22029__$1,inst_22027);
} else {
if((state_val_22030 === (12))){
var state_22029__$1 = state_22029;
var statearr_22037_22057 = state_22029__$1;
(statearr_22037_22057[(2)] = null);

(statearr_22037_22057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (2))){
var inst_22006 = (state_22029[(7)]);
var state_22029__$1 = state_22029;
if(cljs.core.truth_(inst_22006)){
var statearr_22038_22058 = state_22029__$1;
(statearr_22038_22058[(1)] = (4));

} else {
var statearr_22039_22059 = state_22029__$1;
(statearr_22039_22059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (11))){
var inst_22020 = cljs.core.async.close_BANG_.call(null,ch);
var state_22029__$1 = state_22029;
var statearr_22040_22060 = state_22029__$1;
(statearr_22040_22060[(2)] = inst_22020);

(statearr_22040_22060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (9))){
var state_22029__$1 = state_22029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22041_22061 = state_22029__$1;
(statearr_22041_22061[(1)] = (11));

} else {
var statearr_22042_22062 = state_22029__$1;
(statearr_22042_22062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (5))){
var inst_22006 = (state_22029[(7)]);
var state_22029__$1 = state_22029;
var statearr_22043_22063 = state_22029__$1;
(statearr_22043_22063[(2)] = inst_22006);

(statearr_22043_22063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (10))){
var inst_22025 = (state_22029[(2)]);
var state_22029__$1 = state_22029;
var statearr_22044_22064 = state_22029__$1;
(statearr_22044_22064[(2)] = inst_22025);

(statearr_22044_22064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22030 === (8))){
var inst_22006 = (state_22029[(7)]);
var inst_22016 = cljs.core.next.call(null,inst_22006);
var inst_22006__$1 = inst_22016;
var state_22029__$1 = (function (){var statearr_22045 = state_22029;
(statearr_22045[(7)] = inst_22006__$1);

return statearr_22045;
})();
var statearr_22046_22065 = state_22029__$1;
(statearr_22046_22065[(2)] = null);

(statearr_22046_22065[(1)] = (2));


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
});})(c__19607__auto__))
;
return ((function (switch__19440__auto__,c__19607__auto__){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_22047 = [null,null,null,null,null,null,null,null];
(statearr_22047[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_22047[(1)] = (1));

return statearr_22047;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_22029){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e22048){if((e22048 instanceof Object)){
var ex__19444__auto__ = e22048;
var statearr_22049_22066 = state_22029;
(statearr_22049_22066[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22067 = state_22029;
state_22029 = G__22067;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_22029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_22029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto__))
})();
var state__19609__auto__ = (function (){var statearr_22050 = f__19608__auto__.call(null);
(statearr_22050[(6)] = c__19607__auto__);

return statearr_22050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto__))
);

return c__19607__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22068 = (function (ch,cs,meta22069){
this.ch = ch;
this.cs = cs;
this.meta22069 = meta22069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22070,meta22069__$1){
var self__ = this;
var _22070__$1 = this;
return (new cljs.core.async.t_cljs$core$async22068(self__.ch,self__.cs,meta22069__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22070){
var self__ = this;
var _22070__$1 = this;
return self__.meta22069;
});})(cs))
;

cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22068.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22068.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22069","meta22069",1849477235,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22068";

cljs.core.async.t_cljs$core$async22068.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22068");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22068.
 */
cljs.core.async.__GT_t_cljs$core$async22068 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22068(ch__$1,cs__$1,meta22069){
return (new cljs.core.async.t_cljs$core$async22068(ch__$1,cs__$1,meta22069));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22068(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19607__auto___22290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___22290,cs,m,dchan,dctr,done){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___22290,cs,m,dchan,dctr,done){
return (function (state_22205){
var state_val_22206 = (state_22205[(1)]);
if((state_val_22206 === (7))){
var inst_22201 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22207_22291 = state_22205__$1;
(statearr_22207_22291[(2)] = inst_22201);

(statearr_22207_22291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (20))){
var inst_22104 = (state_22205[(7)]);
var inst_22116 = cljs.core.first.call(null,inst_22104);
var inst_22117 = cljs.core.nth.call(null,inst_22116,(0),null);
var inst_22118 = cljs.core.nth.call(null,inst_22116,(1),null);
var state_22205__$1 = (function (){var statearr_22208 = state_22205;
(statearr_22208[(8)] = inst_22117);

return statearr_22208;
})();
if(cljs.core.truth_(inst_22118)){
var statearr_22209_22292 = state_22205__$1;
(statearr_22209_22292[(1)] = (22));

} else {
var statearr_22210_22293 = state_22205__$1;
(statearr_22210_22293[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (27))){
var inst_22148 = (state_22205[(9)]);
var inst_22073 = (state_22205[(10)]);
var inst_22146 = (state_22205[(11)]);
var inst_22153 = (state_22205[(12)]);
var inst_22153__$1 = cljs.core._nth.call(null,inst_22146,inst_22148);
var inst_22154 = cljs.core.async.put_BANG_.call(null,inst_22153__$1,inst_22073,done);
var state_22205__$1 = (function (){var statearr_22211 = state_22205;
(statearr_22211[(12)] = inst_22153__$1);

return statearr_22211;
})();
if(cljs.core.truth_(inst_22154)){
var statearr_22212_22294 = state_22205__$1;
(statearr_22212_22294[(1)] = (30));

} else {
var statearr_22213_22295 = state_22205__$1;
(statearr_22213_22295[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (1))){
var state_22205__$1 = state_22205;
var statearr_22214_22296 = state_22205__$1;
(statearr_22214_22296[(2)] = null);

(statearr_22214_22296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (24))){
var inst_22104 = (state_22205[(7)]);
var inst_22123 = (state_22205[(2)]);
var inst_22124 = cljs.core.next.call(null,inst_22104);
var inst_22082 = inst_22124;
var inst_22083 = null;
var inst_22084 = (0);
var inst_22085 = (0);
var state_22205__$1 = (function (){var statearr_22215 = state_22205;
(statearr_22215[(13)] = inst_22082);

(statearr_22215[(14)] = inst_22083);

(statearr_22215[(15)] = inst_22085);

(statearr_22215[(16)] = inst_22084);

(statearr_22215[(17)] = inst_22123);

return statearr_22215;
})();
var statearr_22216_22297 = state_22205__$1;
(statearr_22216_22297[(2)] = null);

(statearr_22216_22297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (39))){
var state_22205__$1 = state_22205;
var statearr_22220_22298 = state_22205__$1;
(statearr_22220_22298[(2)] = null);

(statearr_22220_22298[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (4))){
var inst_22073 = (state_22205[(10)]);
var inst_22073__$1 = (state_22205[(2)]);
var inst_22074 = (inst_22073__$1 == null);
var state_22205__$1 = (function (){var statearr_22221 = state_22205;
(statearr_22221[(10)] = inst_22073__$1);

return statearr_22221;
})();
if(cljs.core.truth_(inst_22074)){
var statearr_22222_22299 = state_22205__$1;
(statearr_22222_22299[(1)] = (5));

} else {
var statearr_22223_22300 = state_22205__$1;
(statearr_22223_22300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (15))){
var inst_22082 = (state_22205[(13)]);
var inst_22083 = (state_22205[(14)]);
var inst_22085 = (state_22205[(15)]);
var inst_22084 = (state_22205[(16)]);
var inst_22100 = (state_22205[(2)]);
var inst_22101 = (inst_22085 + (1));
var tmp22217 = inst_22082;
var tmp22218 = inst_22083;
var tmp22219 = inst_22084;
var inst_22082__$1 = tmp22217;
var inst_22083__$1 = tmp22218;
var inst_22084__$1 = tmp22219;
var inst_22085__$1 = inst_22101;
var state_22205__$1 = (function (){var statearr_22224 = state_22205;
(statearr_22224[(13)] = inst_22082__$1);

(statearr_22224[(14)] = inst_22083__$1);

(statearr_22224[(15)] = inst_22085__$1);

(statearr_22224[(16)] = inst_22084__$1);

(statearr_22224[(18)] = inst_22100);

return statearr_22224;
})();
var statearr_22225_22301 = state_22205__$1;
(statearr_22225_22301[(2)] = null);

(statearr_22225_22301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (21))){
var inst_22127 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22229_22302 = state_22205__$1;
(statearr_22229_22302[(2)] = inst_22127);

(statearr_22229_22302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (31))){
var inst_22153 = (state_22205[(12)]);
var inst_22157 = done.call(null,null);
var inst_22158 = cljs.core.async.untap_STAR_.call(null,m,inst_22153);
var state_22205__$1 = (function (){var statearr_22230 = state_22205;
(statearr_22230[(19)] = inst_22157);

return statearr_22230;
})();
var statearr_22231_22303 = state_22205__$1;
(statearr_22231_22303[(2)] = inst_22158);

(statearr_22231_22303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (32))){
var inst_22147 = (state_22205[(20)]);
var inst_22148 = (state_22205[(9)]);
var inst_22146 = (state_22205[(11)]);
var inst_22145 = (state_22205[(21)]);
var inst_22160 = (state_22205[(2)]);
var inst_22161 = (inst_22148 + (1));
var tmp22226 = inst_22147;
var tmp22227 = inst_22146;
var tmp22228 = inst_22145;
var inst_22145__$1 = tmp22228;
var inst_22146__$1 = tmp22227;
var inst_22147__$1 = tmp22226;
var inst_22148__$1 = inst_22161;
var state_22205__$1 = (function (){var statearr_22232 = state_22205;
(statearr_22232[(20)] = inst_22147__$1);

(statearr_22232[(22)] = inst_22160);

(statearr_22232[(9)] = inst_22148__$1);

(statearr_22232[(11)] = inst_22146__$1);

(statearr_22232[(21)] = inst_22145__$1);

return statearr_22232;
})();
var statearr_22233_22304 = state_22205__$1;
(statearr_22233_22304[(2)] = null);

(statearr_22233_22304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (40))){
var inst_22173 = (state_22205[(23)]);
var inst_22177 = done.call(null,null);
var inst_22178 = cljs.core.async.untap_STAR_.call(null,m,inst_22173);
var state_22205__$1 = (function (){var statearr_22234 = state_22205;
(statearr_22234[(24)] = inst_22177);

return statearr_22234;
})();
var statearr_22235_22305 = state_22205__$1;
(statearr_22235_22305[(2)] = inst_22178);

(statearr_22235_22305[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (33))){
var inst_22164 = (state_22205[(25)]);
var inst_22166 = cljs.core.chunked_seq_QMARK_.call(null,inst_22164);
var state_22205__$1 = state_22205;
if(inst_22166){
var statearr_22236_22306 = state_22205__$1;
(statearr_22236_22306[(1)] = (36));

} else {
var statearr_22237_22307 = state_22205__$1;
(statearr_22237_22307[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (13))){
var inst_22094 = (state_22205[(26)]);
var inst_22097 = cljs.core.async.close_BANG_.call(null,inst_22094);
var state_22205__$1 = state_22205;
var statearr_22238_22308 = state_22205__$1;
(statearr_22238_22308[(2)] = inst_22097);

(statearr_22238_22308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (22))){
var inst_22117 = (state_22205[(8)]);
var inst_22120 = cljs.core.async.close_BANG_.call(null,inst_22117);
var state_22205__$1 = state_22205;
var statearr_22239_22309 = state_22205__$1;
(statearr_22239_22309[(2)] = inst_22120);

(statearr_22239_22309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (36))){
var inst_22164 = (state_22205[(25)]);
var inst_22168 = cljs.core.chunk_first.call(null,inst_22164);
var inst_22169 = cljs.core.chunk_rest.call(null,inst_22164);
var inst_22170 = cljs.core.count.call(null,inst_22168);
var inst_22145 = inst_22169;
var inst_22146 = inst_22168;
var inst_22147 = inst_22170;
var inst_22148 = (0);
var state_22205__$1 = (function (){var statearr_22240 = state_22205;
(statearr_22240[(20)] = inst_22147);

(statearr_22240[(9)] = inst_22148);

(statearr_22240[(11)] = inst_22146);

(statearr_22240[(21)] = inst_22145);

return statearr_22240;
})();
var statearr_22241_22310 = state_22205__$1;
(statearr_22241_22310[(2)] = null);

(statearr_22241_22310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (41))){
var inst_22164 = (state_22205[(25)]);
var inst_22180 = (state_22205[(2)]);
var inst_22181 = cljs.core.next.call(null,inst_22164);
var inst_22145 = inst_22181;
var inst_22146 = null;
var inst_22147 = (0);
var inst_22148 = (0);
var state_22205__$1 = (function (){var statearr_22242 = state_22205;
(statearr_22242[(20)] = inst_22147);

(statearr_22242[(27)] = inst_22180);

(statearr_22242[(9)] = inst_22148);

(statearr_22242[(11)] = inst_22146);

(statearr_22242[(21)] = inst_22145);

return statearr_22242;
})();
var statearr_22243_22311 = state_22205__$1;
(statearr_22243_22311[(2)] = null);

(statearr_22243_22311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (43))){
var state_22205__$1 = state_22205;
var statearr_22244_22312 = state_22205__$1;
(statearr_22244_22312[(2)] = null);

(statearr_22244_22312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (29))){
var inst_22189 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22245_22313 = state_22205__$1;
(statearr_22245_22313[(2)] = inst_22189);

(statearr_22245_22313[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (44))){
var inst_22198 = (state_22205[(2)]);
var state_22205__$1 = (function (){var statearr_22246 = state_22205;
(statearr_22246[(28)] = inst_22198);

return statearr_22246;
})();
var statearr_22247_22314 = state_22205__$1;
(statearr_22247_22314[(2)] = null);

(statearr_22247_22314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (6))){
var inst_22137 = (state_22205[(29)]);
var inst_22136 = cljs.core.deref.call(null,cs);
var inst_22137__$1 = cljs.core.keys.call(null,inst_22136);
var inst_22138 = cljs.core.count.call(null,inst_22137__$1);
var inst_22139 = cljs.core.reset_BANG_.call(null,dctr,inst_22138);
var inst_22144 = cljs.core.seq.call(null,inst_22137__$1);
var inst_22145 = inst_22144;
var inst_22146 = null;
var inst_22147 = (0);
var inst_22148 = (0);
var state_22205__$1 = (function (){var statearr_22248 = state_22205;
(statearr_22248[(20)] = inst_22147);

(statearr_22248[(9)] = inst_22148);

(statearr_22248[(29)] = inst_22137__$1);

(statearr_22248[(30)] = inst_22139);

(statearr_22248[(11)] = inst_22146);

(statearr_22248[(21)] = inst_22145);

return statearr_22248;
})();
var statearr_22249_22315 = state_22205__$1;
(statearr_22249_22315[(2)] = null);

(statearr_22249_22315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (28))){
var inst_22164 = (state_22205[(25)]);
var inst_22145 = (state_22205[(21)]);
var inst_22164__$1 = cljs.core.seq.call(null,inst_22145);
var state_22205__$1 = (function (){var statearr_22250 = state_22205;
(statearr_22250[(25)] = inst_22164__$1);

return statearr_22250;
})();
if(inst_22164__$1){
var statearr_22251_22316 = state_22205__$1;
(statearr_22251_22316[(1)] = (33));

} else {
var statearr_22252_22317 = state_22205__$1;
(statearr_22252_22317[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (25))){
var inst_22147 = (state_22205[(20)]);
var inst_22148 = (state_22205[(9)]);
var inst_22150 = (inst_22148 < inst_22147);
var inst_22151 = inst_22150;
var state_22205__$1 = state_22205;
if(cljs.core.truth_(inst_22151)){
var statearr_22253_22318 = state_22205__$1;
(statearr_22253_22318[(1)] = (27));

} else {
var statearr_22254_22319 = state_22205__$1;
(statearr_22254_22319[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (34))){
var state_22205__$1 = state_22205;
var statearr_22255_22320 = state_22205__$1;
(statearr_22255_22320[(2)] = null);

(statearr_22255_22320[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (17))){
var state_22205__$1 = state_22205;
var statearr_22256_22321 = state_22205__$1;
(statearr_22256_22321[(2)] = null);

(statearr_22256_22321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (3))){
var inst_22203 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22205__$1,inst_22203);
} else {
if((state_val_22206 === (12))){
var inst_22132 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22257_22322 = state_22205__$1;
(statearr_22257_22322[(2)] = inst_22132);

(statearr_22257_22322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (2))){
var state_22205__$1 = state_22205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22205__$1,(4),ch);
} else {
if((state_val_22206 === (23))){
var state_22205__$1 = state_22205;
var statearr_22258_22323 = state_22205__$1;
(statearr_22258_22323[(2)] = null);

(statearr_22258_22323[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (35))){
var inst_22187 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22259_22324 = state_22205__$1;
(statearr_22259_22324[(2)] = inst_22187);

(statearr_22259_22324[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (19))){
var inst_22104 = (state_22205[(7)]);
var inst_22108 = cljs.core.chunk_first.call(null,inst_22104);
var inst_22109 = cljs.core.chunk_rest.call(null,inst_22104);
var inst_22110 = cljs.core.count.call(null,inst_22108);
var inst_22082 = inst_22109;
var inst_22083 = inst_22108;
var inst_22084 = inst_22110;
var inst_22085 = (0);
var state_22205__$1 = (function (){var statearr_22260 = state_22205;
(statearr_22260[(13)] = inst_22082);

(statearr_22260[(14)] = inst_22083);

(statearr_22260[(15)] = inst_22085);

(statearr_22260[(16)] = inst_22084);

return statearr_22260;
})();
var statearr_22261_22325 = state_22205__$1;
(statearr_22261_22325[(2)] = null);

(statearr_22261_22325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (11))){
var inst_22082 = (state_22205[(13)]);
var inst_22104 = (state_22205[(7)]);
var inst_22104__$1 = cljs.core.seq.call(null,inst_22082);
var state_22205__$1 = (function (){var statearr_22262 = state_22205;
(statearr_22262[(7)] = inst_22104__$1);

return statearr_22262;
})();
if(inst_22104__$1){
var statearr_22263_22326 = state_22205__$1;
(statearr_22263_22326[(1)] = (16));

} else {
var statearr_22264_22327 = state_22205__$1;
(statearr_22264_22327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (9))){
var inst_22134 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22265_22328 = state_22205__$1;
(statearr_22265_22328[(2)] = inst_22134);

(statearr_22265_22328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (5))){
var inst_22080 = cljs.core.deref.call(null,cs);
var inst_22081 = cljs.core.seq.call(null,inst_22080);
var inst_22082 = inst_22081;
var inst_22083 = null;
var inst_22084 = (0);
var inst_22085 = (0);
var state_22205__$1 = (function (){var statearr_22266 = state_22205;
(statearr_22266[(13)] = inst_22082);

(statearr_22266[(14)] = inst_22083);

(statearr_22266[(15)] = inst_22085);

(statearr_22266[(16)] = inst_22084);

return statearr_22266;
})();
var statearr_22267_22329 = state_22205__$1;
(statearr_22267_22329[(2)] = null);

(statearr_22267_22329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (14))){
var state_22205__$1 = state_22205;
var statearr_22268_22330 = state_22205__$1;
(statearr_22268_22330[(2)] = null);

(statearr_22268_22330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (45))){
var inst_22195 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22269_22331 = state_22205__$1;
(statearr_22269_22331[(2)] = inst_22195);

(statearr_22269_22331[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (26))){
var inst_22137 = (state_22205[(29)]);
var inst_22191 = (state_22205[(2)]);
var inst_22192 = cljs.core.seq.call(null,inst_22137);
var state_22205__$1 = (function (){var statearr_22270 = state_22205;
(statearr_22270[(31)] = inst_22191);

return statearr_22270;
})();
if(inst_22192){
var statearr_22271_22332 = state_22205__$1;
(statearr_22271_22332[(1)] = (42));

} else {
var statearr_22272_22333 = state_22205__$1;
(statearr_22272_22333[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (16))){
var inst_22104 = (state_22205[(7)]);
var inst_22106 = cljs.core.chunked_seq_QMARK_.call(null,inst_22104);
var state_22205__$1 = state_22205;
if(inst_22106){
var statearr_22273_22334 = state_22205__$1;
(statearr_22273_22334[(1)] = (19));

} else {
var statearr_22274_22335 = state_22205__$1;
(statearr_22274_22335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (38))){
var inst_22184 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22275_22336 = state_22205__$1;
(statearr_22275_22336[(2)] = inst_22184);

(statearr_22275_22336[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (30))){
var state_22205__$1 = state_22205;
var statearr_22276_22337 = state_22205__$1;
(statearr_22276_22337[(2)] = null);

(statearr_22276_22337[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (10))){
var inst_22083 = (state_22205[(14)]);
var inst_22085 = (state_22205[(15)]);
var inst_22093 = cljs.core._nth.call(null,inst_22083,inst_22085);
var inst_22094 = cljs.core.nth.call(null,inst_22093,(0),null);
var inst_22095 = cljs.core.nth.call(null,inst_22093,(1),null);
var state_22205__$1 = (function (){var statearr_22277 = state_22205;
(statearr_22277[(26)] = inst_22094);

return statearr_22277;
})();
if(cljs.core.truth_(inst_22095)){
var statearr_22278_22338 = state_22205__$1;
(statearr_22278_22338[(1)] = (13));

} else {
var statearr_22279_22339 = state_22205__$1;
(statearr_22279_22339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (18))){
var inst_22130 = (state_22205[(2)]);
var state_22205__$1 = state_22205;
var statearr_22280_22340 = state_22205__$1;
(statearr_22280_22340[(2)] = inst_22130);

(statearr_22280_22340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (42))){
var state_22205__$1 = state_22205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22205__$1,(45),dchan);
} else {
if((state_val_22206 === (37))){
var inst_22164 = (state_22205[(25)]);
var inst_22173 = (state_22205[(23)]);
var inst_22073 = (state_22205[(10)]);
var inst_22173__$1 = cljs.core.first.call(null,inst_22164);
var inst_22174 = cljs.core.async.put_BANG_.call(null,inst_22173__$1,inst_22073,done);
var state_22205__$1 = (function (){var statearr_22281 = state_22205;
(statearr_22281[(23)] = inst_22173__$1);

return statearr_22281;
})();
if(cljs.core.truth_(inst_22174)){
var statearr_22282_22341 = state_22205__$1;
(statearr_22282_22341[(1)] = (39));

} else {
var statearr_22283_22342 = state_22205__$1;
(statearr_22283_22342[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22206 === (8))){
var inst_22085 = (state_22205[(15)]);
var inst_22084 = (state_22205[(16)]);
var inst_22087 = (inst_22085 < inst_22084);
var inst_22088 = inst_22087;
var state_22205__$1 = state_22205;
if(cljs.core.truth_(inst_22088)){
var statearr_22284_22343 = state_22205__$1;
(statearr_22284_22343[(1)] = (10));

} else {
var statearr_22285_22344 = state_22205__$1;
(statearr_22285_22344[(1)] = (11));

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
});})(c__19607__auto___22290,cs,m,dchan,dctr,done))
;
return ((function (switch__19440__auto__,c__19607__auto___22290,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19441__auto__ = null;
var cljs$core$async$mult_$_state_machine__19441__auto____0 = (function (){
var statearr_22286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22286[(0)] = cljs$core$async$mult_$_state_machine__19441__auto__);

(statearr_22286[(1)] = (1));

return statearr_22286;
});
var cljs$core$async$mult_$_state_machine__19441__auto____1 = (function (state_22205){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e22287){if((e22287 instanceof Object)){
var ex__19444__auto__ = e22287;
var statearr_22288_22345 = state_22205;
(statearr_22288_22345[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22346 = state_22205;
state_22205 = G__22346;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19441__auto__ = function(state_22205){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19441__auto____1.call(this,state_22205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19441__auto____0;
cljs$core$async$mult_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19441__auto____1;
return cljs$core$async$mult_$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___22290,cs,m,dchan,dctr,done))
})();
var state__19609__auto__ = (function (){var statearr_22289 = f__19608__auto__.call(null);
(statearr_22289[(6)] = c__19607__auto___22290);

return statearr_22289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___22290,cs,m,dchan,dctr,done))
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
var G__22348 = arguments.length;
switch (G__22348) {
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
var len__4730__auto___22360 = arguments.length;
var i__4731__auto___22361 = (0);
while(true){
if((i__4731__auto___22361 < len__4730__auto___22360)){
args__4736__auto__.push((arguments[i__4731__auto___22361]));

var G__22362 = (i__4731__auto___22361 + (1));
i__4731__auto___22361 = G__22362;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22354){
var map__22355 = p__22354;
var map__22355__$1 = (((((!((map__22355 == null))))?(((((map__22355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22355):map__22355);
var opts = map__22355__$1;
var statearr_22357_22363 = state;
(statearr_22357_22363[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__22355,map__22355__$1,opts){
return (function (val){
var statearr_22358_22364 = state;
(statearr_22358_22364[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22355,map__22355__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_22359_22365 = state;
(statearr_22359_22365[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22350){
var G__22351 = cljs.core.first.call(null,seq22350);
var seq22350__$1 = cljs.core.next.call(null,seq22350);
var G__22352 = cljs.core.first.call(null,seq22350__$1);
var seq22350__$2 = cljs.core.next.call(null,seq22350__$1);
var G__22353 = cljs.core.first.call(null,seq22350__$2);
var seq22350__$3 = cljs.core.next.call(null,seq22350__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22351,G__22352,G__22353,seq22350__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22366 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22367){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22367 = meta22367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22368,meta22367__$1){
var self__ = this;
var _22368__$1 = this;
return (new cljs.core.async.t_cljs$core$async22366(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22367__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22368){
var self__ = this;
var _22368__$1 = this;
return self__.meta22367;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22366.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22367","meta22367",-48873149,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22366";

cljs.core.async.t_cljs$core$async22366.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22366");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22366.
 */
cljs.core.async.__GT_t_cljs$core$async22366 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22366(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22367){
return (new cljs.core.async.t_cljs$core$async22366(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22367));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22366(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19607__auto___22530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___22530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___22530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22470){
var state_val_22471 = (state_22470[(1)]);
if((state_val_22471 === (7))){
var inst_22385 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22472_22531 = state_22470__$1;
(statearr_22472_22531[(2)] = inst_22385);

(statearr_22472_22531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (20))){
var inst_22397 = (state_22470[(7)]);
var state_22470__$1 = state_22470;
var statearr_22473_22532 = state_22470__$1;
(statearr_22473_22532[(2)] = inst_22397);

(statearr_22473_22532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (27))){
var state_22470__$1 = state_22470;
var statearr_22474_22533 = state_22470__$1;
(statearr_22474_22533[(2)] = null);

(statearr_22474_22533[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (1))){
var inst_22372 = (state_22470[(8)]);
var inst_22372__$1 = calc_state.call(null);
var inst_22374 = (inst_22372__$1 == null);
var inst_22375 = cljs.core.not.call(null,inst_22374);
var state_22470__$1 = (function (){var statearr_22475 = state_22470;
(statearr_22475[(8)] = inst_22372__$1);

return statearr_22475;
})();
if(inst_22375){
var statearr_22476_22534 = state_22470__$1;
(statearr_22476_22534[(1)] = (2));

} else {
var statearr_22477_22535 = state_22470__$1;
(statearr_22477_22535[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (24))){
var inst_22421 = (state_22470[(9)]);
var inst_22444 = (state_22470[(10)]);
var inst_22430 = (state_22470[(11)]);
var inst_22444__$1 = inst_22421.call(null,inst_22430);
var state_22470__$1 = (function (){var statearr_22478 = state_22470;
(statearr_22478[(10)] = inst_22444__$1);

return statearr_22478;
})();
if(cljs.core.truth_(inst_22444__$1)){
var statearr_22479_22536 = state_22470__$1;
(statearr_22479_22536[(1)] = (29));

} else {
var statearr_22480_22537 = state_22470__$1;
(statearr_22480_22537[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (4))){
var inst_22388 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22388)){
var statearr_22481_22538 = state_22470__$1;
(statearr_22481_22538[(1)] = (8));

} else {
var statearr_22482_22539 = state_22470__$1;
(statearr_22482_22539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (15))){
var inst_22415 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22415)){
var statearr_22483_22540 = state_22470__$1;
(statearr_22483_22540[(1)] = (19));

} else {
var statearr_22484_22541 = state_22470__$1;
(statearr_22484_22541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (21))){
var inst_22420 = (state_22470[(12)]);
var inst_22420__$1 = (state_22470[(2)]);
var inst_22421 = cljs.core.get.call(null,inst_22420__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22422 = cljs.core.get.call(null,inst_22420__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22423 = cljs.core.get.call(null,inst_22420__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22470__$1 = (function (){var statearr_22485 = state_22470;
(statearr_22485[(13)] = inst_22422);

(statearr_22485[(9)] = inst_22421);

(statearr_22485[(12)] = inst_22420__$1);

return statearr_22485;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22470__$1,(22),inst_22423);
} else {
if((state_val_22471 === (31))){
var inst_22452 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22452)){
var statearr_22486_22542 = state_22470__$1;
(statearr_22486_22542[(1)] = (32));

} else {
var statearr_22487_22543 = state_22470__$1;
(statearr_22487_22543[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (32))){
var inst_22429 = (state_22470[(14)]);
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22470__$1,(35),out,inst_22429);
} else {
if((state_val_22471 === (33))){
var inst_22420 = (state_22470[(12)]);
var inst_22397 = inst_22420;
var state_22470__$1 = (function (){var statearr_22488 = state_22470;
(statearr_22488[(7)] = inst_22397);

return statearr_22488;
})();
var statearr_22489_22544 = state_22470__$1;
(statearr_22489_22544[(2)] = null);

(statearr_22489_22544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (13))){
var inst_22397 = (state_22470[(7)]);
var inst_22404 = inst_22397.cljs$lang$protocol_mask$partition0$;
var inst_22405 = (inst_22404 & (64));
var inst_22406 = inst_22397.cljs$core$ISeq$;
var inst_22407 = (cljs.core.PROTOCOL_SENTINEL === inst_22406);
var inst_22408 = ((inst_22405) || (inst_22407));
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22408)){
var statearr_22490_22545 = state_22470__$1;
(statearr_22490_22545[(1)] = (16));

} else {
var statearr_22491_22546 = state_22470__$1;
(statearr_22491_22546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (22))){
var inst_22430 = (state_22470[(11)]);
var inst_22429 = (state_22470[(14)]);
var inst_22428 = (state_22470[(2)]);
var inst_22429__$1 = cljs.core.nth.call(null,inst_22428,(0),null);
var inst_22430__$1 = cljs.core.nth.call(null,inst_22428,(1),null);
var inst_22431 = (inst_22429__$1 == null);
var inst_22432 = cljs.core._EQ_.call(null,inst_22430__$1,change);
var inst_22433 = ((inst_22431) || (inst_22432));
var state_22470__$1 = (function (){var statearr_22492 = state_22470;
(statearr_22492[(11)] = inst_22430__$1);

(statearr_22492[(14)] = inst_22429__$1);

return statearr_22492;
})();
if(cljs.core.truth_(inst_22433)){
var statearr_22493_22547 = state_22470__$1;
(statearr_22493_22547[(1)] = (23));

} else {
var statearr_22494_22548 = state_22470__$1;
(statearr_22494_22548[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (36))){
var inst_22420 = (state_22470[(12)]);
var inst_22397 = inst_22420;
var state_22470__$1 = (function (){var statearr_22495 = state_22470;
(statearr_22495[(7)] = inst_22397);

return statearr_22495;
})();
var statearr_22496_22549 = state_22470__$1;
(statearr_22496_22549[(2)] = null);

(statearr_22496_22549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (29))){
var inst_22444 = (state_22470[(10)]);
var state_22470__$1 = state_22470;
var statearr_22497_22550 = state_22470__$1;
(statearr_22497_22550[(2)] = inst_22444);

(statearr_22497_22550[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (6))){
var state_22470__$1 = state_22470;
var statearr_22498_22551 = state_22470__$1;
(statearr_22498_22551[(2)] = false);

(statearr_22498_22551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (28))){
var inst_22440 = (state_22470[(2)]);
var inst_22441 = calc_state.call(null);
var inst_22397 = inst_22441;
var state_22470__$1 = (function (){var statearr_22499 = state_22470;
(statearr_22499[(7)] = inst_22397);

(statearr_22499[(15)] = inst_22440);

return statearr_22499;
})();
var statearr_22500_22552 = state_22470__$1;
(statearr_22500_22552[(2)] = null);

(statearr_22500_22552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (25))){
var inst_22466 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22501_22553 = state_22470__$1;
(statearr_22501_22553[(2)] = inst_22466);

(statearr_22501_22553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (34))){
var inst_22464 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22502_22554 = state_22470__$1;
(statearr_22502_22554[(2)] = inst_22464);

(statearr_22502_22554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (17))){
var state_22470__$1 = state_22470;
var statearr_22503_22555 = state_22470__$1;
(statearr_22503_22555[(2)] = false);

(statearr_22503_22555[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (3))){
var state_22470__$1 = state_22470;
var statearr_22504_22556 = state_22470__$1;
(statearr_22504_22556[(2)] = false);

(statearr_22504_22556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (12))){
var inst_22468 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22470__$1,inst_22468);
} else {
if((state_val_22471 === (2))){
var inst_22372 = (state_22470[(8)]);
var inst_22377 = inst_22372.cljs$lang$protocol_mask$partition0$;
var inst_22378 = (inst_22377 & (64));
var inst_22379 = inst_22372.cljs$core$ISeq$;
var inst_22380 = (cljs.core.PROTOCOL_SENTINEL === inst_22379);
var inst_22381 = ((inst_22378) || (inst_22380));
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22381)){
var statearr_22505_22557 = state_22470__$1;
(statearr_22505_22557[(1)] = (5));

} else {
var statearr_22506_22558 = state_22470__$1;
(statearr_22506_22558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (23))){
var inst_22429 = (state_22470[(14)]);
var inst_22435 = (inst_22429 == null);
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22435)){
var statearr_22507_22559 = state_22470__$1;
(statearr_22507_22559[(1)] = (26));

} else {
var statearr_22508_22560 = state_22470__$1;
(statearr_22508_22560[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (35))){
var inst_22455 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
if(cljs.core.truth_(inst_22455)){
var statearr_22509_22561 = state_22470__$1;
(statearr_22509_22561[(1)] = (36));

} else {
var statearr_22510_22562 = state_22470__$1;
(statearr_22510_22562[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (19))){
var inst_22397 = (state_22470[(7)]);
var inst_22417 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22397);
var state_22470__$1 = state_22470;
var statearr_22511_22563 = state_22470__$1;
(statearr_22511_22563[(2)] = inst_22417);

(statearr_22511_22563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (11))){
var inst_22397 = (state_22470[(7)]);
var inst_22401 = (inst_22397 == null);
var inst_22402 = cljs.core.not.call(null,inst_22401);
var state_22470__$1 = state_22470;
if(inst_22402){
var statearr_22512_22564 = state_22470__$1;
(statearr_22512_22564[(1)] = (13));

} else {
var statearr_22513_22565 = state_22470__$1;
(statearr_22513_22565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (9))){
var inst_22372 = (state_22470[(8)]);
var state_22470__$1 = state_22470;
var statearr_22514_22566 = state_22470__$1;
(statearr_22514_22566[(2)] = inst_22372);

(statearr_22514_22566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (5))){
var state_22470__$1 = state_22470;
var statearr_22515_22567 = state_22470__$1;
(statearr_22515_22567[(2)] = true);

(statearr_22515_22567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (14))){
var state_22470__$1 = state_22470;
var statearr_22516_22568 = state_22470__$1;
(statearr_22516_22568[(2)] = false);

(statearr_22516_22568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (26))){
var inst_22430 = (state_22470[(11)]);
var inst_22437 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22430);
var state_22470__$1 = state_22470;
var statearr_22517_22569 = state_22470__$1;
(statearr_22517_22569[(2)] = inst_22437);

(statearr_22517_22569[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (16))){
var state_22470__$1 = state_22470;
var statearr_22518_22570 = state_22470__$1;
(statearr_22518_22570[(2)] = true);

(statearr_22518_22570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (38))){
var inst_22460 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22519_22571 = state_22470__$1;
(statearr_22519_22571[(2)] = inst_22460);

(statearr_22519_22571[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (30))){
var inst_22422 = (state_22470[(13)]);
var inst_22421 = (state_22470[(9)]);
var inst_22430 = (state_22470[(11)]);
var inst_22447 = cljs.core.empty_QMARK_.call(null,inst_22421);
var inst_22448 = inst_22422.call(null,inst_22430);
var inst_22449 = cljs.core.not.call(null,inst_22448);
var inst_22450 = ((inst_22447) && (inst_22449));
var state_22470__$1 = state_22470;
var statearr_22520_22572 = state_22470__$1;
(statearr_22520_22572[(2)] = inst_22450);

(statearr_22520_22572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (10))){
var inst_22372 = (state_22470[(8)]);
var inst_22393 = (state_22470[(2)]);
var inst_22394 = cljs.core.get.call(null,inst_22393,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22395 = cljs.core.get.call(null,inst_22393,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22396 = cljs.core.get.call(null,inst_22393,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22397 = inst_22372;
var state_22470__$1 = (function (){var statearr_22521 = state_22470;
(statearr_22521[(16)] = inst_22394);

(statearr_22521[(17)] = inst_22396);

(statearr_22521[(7)] = inst_22397);

(statearr_22521[(18)] = inst_22395);

return statearr_22521;
})();
var statearr_22522_22573 = state_22470__$1;
(statearr_22522_22573[(2)] = null);

(statearr_22522_22573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (18))){
var inst_22412 = (state_22470[(2)]);
var state_22470__$1 = state_22470;
var statearr_22523_22574 = state_22470__$1;
(statearr_22523_22574[(2)] = inst_22412);

(statearr_22523_22574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (37))){
var state_22470__$1 = state_22470;
var statearr_22524_22575 = state_22470__$1;
(statearr_22524_22575[(2)] = null);

(statearr_22524_22575[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22471 === (8))){
var inst_22372 = (state_22470[(8)]);
var inst_22390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22372);
var state_22470__$1 = state_22470;
var statearr_22525_22576 = state_22470__$1;
(statearr_22525_22576[(2)] = inst_22390);

(statearr_22525_22576[(1)] = (10));


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
});})(c__19607__auto___22530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19440__auto__,c__19607__auto___22530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19441__auto__ = null;
var cljs$core$async$mix_$_state_machine__19441__auto____0 = (function (){
var statearr_22526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22526[(0)] = cljs$core$async$mix_$_state_machine__19441__auto__);

(statearr_22526[(1)] = (1));

return statearr_22526;
});
var cljs$core$async$mix_$_state_machine__19441__auto____1 = (function (state_22470){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e22527){if((e22527 instanceof Object)){
var ex__19444__auto__ = e22527;
var statearr_22528_22577 = state_22470;
(statearr_22528_22577[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22578 = state_22470;
state_22470 = G__22578;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19441__auto__ = function(state_22470){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19441__auto____1.call(this,state_22470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19441__auto____0;
cljs$core$async$mix_$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19441__auto____1;
return cljs$core$async$mix_$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___22530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19609__auto__ = (function (){var statearr_22529 = f__19608__auto__.call(null);
(statearr_22529[(6)] = c__19607__auto___22530);

return statearr_22529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___22530,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__22580 = arguments.length;
switch (G__22580) {
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
var G__22584 = arguments.length;
switch (G__22584) {
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
return (function (p1__22582_SHARP_){
if(cljs.core.truth_(p1__22582_SHARP_.call(null,topic))){
return p1__22582_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22582_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22585 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22586){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22586 = meta22586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22587,meta22586__$1){
var self__ = this;
var _22587__$1 = this;
return (new cljs.core.async.t_cljs$core$async22585(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22586__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22587){
var self__ = this;
var _22587__$1 = this;
return self__.meta22586;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22585.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22586","meta22586",-474771218,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22585";

cljs.core.async.t_cljs$core$async22585.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22585");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22585.
 */
cljs.core.async.__GT_t_cljs$core$async22585 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22586){
return (new cljs.core.async.t_cljs$core$async22585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22586));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22585(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19607__auto___22705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___22705,mults,ensure_mult,p){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___22705,mults,ensure_mult,p){
return (function (state_22659){
var state_val_22660 = (state_22659[(1)]);
if((state_val_22660 === (7))){
var inst_22655 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
var statearr_22661_22706 = state_22659__$1;
(statearr_22661_22706[(2)] = inst_22655);

(statearr_22661_22706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (20))){
var state_22659__$1 = state_22659;
var statearr_22662_22707 = state_22659__$1;
(statearr_22662_22707[(2)] = null);

(statearr_22662_22707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (1))){
var state_22659__$1 = state_22659;
var statearr_22663_22708 = state_22659__$1;
(statearr_22663_22708[(2)] = null);

(statearr_22663_22708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (24))){
var inst_22638 = (state_22659[(7)]);
var inst_22647 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22638);
var state_22659__$1 = state_22659;
var statearr_22664_22709 = state_22659__$1;
(statearr_22664_22709[(2)] = inst_22647);

(statearr_22664_22709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (4))){
var inst_22590 = (state_22659[(8)]);
var inst_22590__$1 = (state_22659[(2)]);
var inst_22591 = (inst_22590__$1 == null);
var state_22659__$1 = (function (){var statearr_22665 = state_22659;
(statearr_22665[(8)] = inst_22590__$1);

return statearr_22665;
})();
if(cljs.core.truth_(inst_22591)){
var statearr_22666_22710 = state_22659__$1;
(statearr_22666_22710[(1)] = (5));

} else {
var statearr_22667_22711 = state_22659__$1;
(statearr_22667_22711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (15))){
var inst_22632 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
var statearr_22668_22712 = state_22659__$1;
(statearr_22668_22712[(2)] = inst_22632);

(statearr_22668_22712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (21))){
var inst_22652 = (state_22659[(2)]);
var state_22659__$1 = (function (){var statearr_22669 = state_22659;
(statearr_22669[(9)] = inst_22652);

return statearr_22669;
})();
var statearr_22670_22713 = state_22659__$1;
(statearr_22670_22713[(2)] = null);

(statearr_22670_22713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (13))){
var inst_22614 = (state_22659[(10)]);
var inst_22616 = cljs.core.chunked_seq_QMARK_.call(null,inst_22614);
var state_22659__$1 = state_22659;
if(inst_22616){
var statearr_22671_22714 = state_22659__$1;
(statearr_22671_22714[(1)] = (16));

} else {
var statearr_22672_22715 = state_22659__$1;
(statearr_22672_22715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (22))){
var inst_22644 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
if(cljs.core.truth_(inst_22644)){
var statearr_22673_22716 = state_22659__$1;
(statearr_22673_22716[(1)] = (23));

} else {
var statearr_22674_22717 = state_22659__$1;
(statearr_22674_22717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (6))){
var inst_22590 = (state_22659[(8)]);
var inst_22638 = (state_22659[(7)]);
var inst_22640 = (state_22659[(11)]);
var inst_22638__$1 = topic_fn.call(null,inst_22590);
var inst_22639 = cljs.core.deref.call(null,mults);
var inst_22640__$1 = cljs.core.get.call(null,inst_22639,inst_22638__$1);
var state_22659__$1 = (function (){var statearr_22675 = state_22659;
(statearr_22675[(7)] = inst_22638__$1);

(statearr_22675[(11)] = inst_22640__$1);

return statearr_22675;
})();
if(cljs.core.truth_(inst_22640__$1)){
var statearr_22676_22718 = state_22659__$1;
(statearr_22676_22718[(1)] = (19));

} else {
var statearr_22677_22719 = state_22659__$1;
(statearr_22677_22719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (25))){
var inst_22649 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
var statearr_22678_22720 = state_22659__$1;
(statearr_22678_22720[(2)] = inst_22649);

(statearr_22678_22720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (17))){
var inst_22614 = (state_22659[(10)]);
var inst_22623 = cljs.core.first.call(null,inst_22614);
var inst_22624 = cljs.core.async.muxch_STAR_.call(null,inst_22623);
var inst_22625 = cljs.core.async.close_BANG_.call(null,inst_22624);
var inst_22626 = cljs.core.next.call(null,inst_22614);
var inst_22600 = inst_22626;
var inst_22601 = null;
var inst_22602 = (0);
var inst_22603 = (0);
var state_22659__$1 = (function (){var statearr_22679 = state_22659;
(statearr_22679[(12)] = inst_22602);

(statearr_22679[(13)] = inst_22601);

(statearr_22679[(14)] = inst_22600);

(statearr_22679[(15)] = inst_22603);

(statearr_22679[(16)] = inst_22625);

return statearr_22679;
})();
var statearr_22680_22721 = state_22659__$1;
(statearr_22680_22721[(2)] = null);

(statearr_22680_22721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (3))){
var inst_22657 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22659__$1,inst_22657);
} else {
if((state_val_22660 === (12))){
var inst_22634 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
var statearr_22681_22722 = state_22659__$1;
(statearr_22681_22722[(2)] = inst_22634);

(statearr_22681_22722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (2))){
var state_22659__$1 = state_22659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22659__$1,(4),ch);
} else {
if((state_val_22660 === (23))){
var state_22659__$1 = state_22659;
var statearr_22682_22723 = state_22659__$1;
(statearr_22682_22723[(2)] = null);

(statearr_22682_22723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (19))){
var inst_22590 = (state_22659[(8)]);
var inst_22640 = (state_22659[(11)]);
var inst_22642 = cljs.core.async.muxch_STAR_.call(null,inst_22640);
var state_22659__$1 = state_22659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22659__$1,(22),inst_22642,inst_22590);
} else {
if((state_val_22660 === (11))){
var inst_22600 = (state_22659[(14)]);
var inst_22614 = (state_22659[(10)]);
var inst_22614__$1 = cljs.core.seq.call(null,inst_22600);
var state_22659__$1 = (function (){var statearr_22683 = state_22659;
(statearr_22683[(10)] = inst_22614__$1);

return statearr_22683;
})();
if(inst_22614__$1){
var statearr_22684_22724 = state_22659__$1;
(statearr_22684_22724[(1)] = (13));

} else {
var statearr_22685_22725 = state_22659__$1;
(statearr_22685_22725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (9))){
var inst_22636 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
var statearr_22686_22726 = state_22659__$1;
(statearr_22686_22726[(2)] = inst_22636);

(statearr_22686_22726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (5))){
var inst_22597 = cljs.core.deref.call(null,mults);
var inst_22598 = cljs.core.vals.call(null,inst_22597);
var inst_22599 = cljs.core.seq.call(null,inst_22598);
var inst_22600 = inst_22599;
var inst_22601 = null;
var inst_22602 = (0);
var inst_22603 = (0);
var state_22659__$1 = (function (){var statearr_22687 = state_22659;
(statearr_22687[(12)] = inst_22602);

(statearr_22687[(13)] = inst_22601);

(statearr_22687[(14)] = inst_22600);

(statearr_22687[(15)] = inst_22603);

return statearr_22687;
})();
var statearr_22688_22727 = state_22659__$1;
(statearr_22688_22727[(2)] = null);

(statearr_22688_22727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (14))){
var state_22659__$1 = state_22659;
var statearr_22692_22728 = state_22659__$1;
(statearr_22692_22728[(2)] = null);

(statearr_22692_22728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (16))){
var inst_22614 = (state_22659[(10)]);
var inst_22618 = cljs.core.chunk_first.call(null,inst_22614);
var inst_22619 = cljs.core.chunk_rest.call(null,inst_22614);
var inst_22620 = cljs.core.count.call(null,inst_22618);
var inst_22600 = inst_22619;
var inst_22601 = inst_22618;
var inst_22602 = inst_22620;
var inst_22603 = (0);
var state_22659__$1 = (function (){var statearr_22693 = state_22659;
(statearr_22693[(12)] = inst_22602);

(statearr_22693[(13)] = inst_22601);

(statearr_22693[(14)] = inst_22600);

(statearr_22693[(15)] = inst_22603);

return statearr_22693;
})();
var statearr_22694_22729 = state_22659__$1;
(statearr_22694_22729[(2)] = null);

(statearr_22694_22729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (10))){
var inst_22602 = (state_22659[(12)]);
var inst_22601 = (state_22659[(13)]);
var inst_22600 = (state_22659[(14)]);
var inst_22603 = (state_22659[(15)]);
var inst_22608 = cljs.core._nth.call(null,inst_22601,inst_22603);
var inst_22609 = cljs.core.async.muxch_STAR_.call(null,inst_22608);
var inst_22610 = cljs.core.async.close_BANG_.call(null,inst_22609);
var inst_22611 = (inst_22603 + (1));
var tmp22689 = inst_22602;
var tmp22690 = inst_22601;
var tmp22691 = inst_22600;
var inst_22600__$1 = tmp22691;
var inst_22601__$1 = tmp22690;
var inst_22602__$1 = tmp22689;
var inst_22603__$1 = inst_22611;
var state_22659__$1 = (function (){var statearr_22695 = state_22659;
(statearr_22695[(12)] = inst_22602__$1);

(statearr_22695[(17)] = inst_22610);

(statearr_22695[(13)] = inst_22601__$1);

(statearr_22695[(14)] = inst_22600__$1);

(statearr_22695[(15)] = inst_22603__$1);

return statearr_22695;
})();
var statearr_22696_22730 = state_22659__$1;
(statearr_22696_22730[(2)] = null);

(statearr_22696_22730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (18))){
var inst_22629 = (state_22659[(2)]);
var state_22659__$1 = state_22659;
var statearr_22697_22731 = state_22659__$1;
(statearr_22697_22731[(2)] = inst_22629);

(statearr_22697_22731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22660 === (8))){
var inst_22602 = (state_22659[(12)]);
var inst_22603 = (state_22659[(15)]);
var inst_22605 = (inst_22603 < inst_22602);
var inst_22606 = inst_22605;
var state_22659__$1 = state_22659;
if(cljs.core.truth_(inst_22606)){
var statearr_22698_22732 = state_22659__$1;
(statearr_22698_22732[(1)] = (10));

} else {
var statearr_22699_22733 = state_22659__$1;
(statearr_22699_22733[(1)] = (11));

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
});})(c__19607__auto___22705,mults,ensure_mult,p))
;
return ((function (switch__19440__auto__,c__19607__auto___22705,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_22700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22700[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_22700[(1)] = (1));

return statearr_22700;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_22659){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e22701){if((e22701 instanceof Object)){
var ex__19444__auto__ = e22701;
var statearr_22702_22734 = state_22659;
(statearr_22702_22734[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22735 = state_22659;
state_22659 = G__22735;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_22659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_22659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___22705,mults,ensure_mult,p))
})();
var state__19609__auto__ = (function (){var statearr_22703 = f__19608__auto__.call(null);
(statearr_22703[(6)] = c__19607__auto___22705);

return statearr_22703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___22705,mults,ensure_mult,p))
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
var G__22737 = arguments.length;
switch (G__22737) {
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
var G__22740 = arguments.length;
switch (G__22740) {
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
var G__22743 = arguments.length;
switch (G__22743) {
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
var c__19607__auto___22810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___22810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___22810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22782){
var state_val_22783 = (state_22782[(1)]);
if((state_val_22783 === (7))){
var state_22782__$1 = state_22782;
var statearr_22784_22811 = state_22782__$1;
(statearr_22784_22811[(2)] = null);

(statearr_22784_22811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (1))){
var state_22782__$1 = state_22782;
var statearr_22785_22812 = state_22782__$1;
(statearr_22785_22812[(2)] = null);

(statearr_22785_22812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (4))){
var inst_22746 = (state_22782[(7)]);
var inst_22748 = (inst_22746 < cnt);
var state_22782__$1 = state_22782;
if(cljs.core.truth_(inst_22748)){
var statearr_22786_22813 = state_22782__$1;
(statearr_22786_22813[(1)] = (6));

} else {
var statearr_22787_22814 = state_22782__$1;
(statearr_22787_22814[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (15))){
var inst_22778 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22788_22815 = state_22782__$1;
(statearr_22788_22815[(2)] = inst_22778);

(statearr_22788_22815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (13))){
var inst_22771 = cljs.core.async.close_BANG_.call(null,out);
var state_22782__$1 = state_22782;
var statearr_22789_22816 = state_22782__$1;
(statearr_22789_22816[(2)] = inst_22771);

(statearr_22789_22816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (6))){
var state_22782__$1 = state_22782;
var statearr_22790_22817 = state_22782__$1;
(statearr_22790_22817[(2)] = null);

(statearr_22790_22817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (3))){
var inst_22780 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22782__$1,inst_22780);
} else {
if((state_val_22783 === (12))){
var inst_22768 = (state_22782[(8)]);
var inst_22768__$1 = (state_22782[(2)]);
var inst_22769 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22768__$1);
var state_22782__$1 = (function (){var statearr_22791 = state_22782;
(statearr_22791[(8)] = inst_22768__$1);

return statearr_22791;
})();
if(cljs.core.truth_(inst_22769)){
var statearr_22792_22818 = state_22782__$1;
(statearr_22792_22818[(1)] = (13));

} else {
var statearr_22793_22819 = state_22782__$1;
(statearr_22793_22819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (2))){
var inst_22745 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22746 = (0);
var state_22782__$1 = (function (){var statearr_22794 = state_22782;
(statearr_22794[(7)] = inst_22746);

(statearr_22794[(9)] = inst_22745);

return statearr_22794;
})();
var statearr_22795_22820 = state_22782__$1;
(statearr_22795_22820[(2)] = null);

(statearr_22795_22820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (11))){
var inst_22746 = (state_22782[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22782,(10),Object,null,(9));
var inst_22755 = chs__$1.call(null,inst_22746);
var inst_22756 = done.call(null,inst_22746);
var inst_22757 = cljs.core.async.take_BANG_.call(null,inst_22755,inst_22756);
var state_22782__$1 = state_22782;
var statearr_22796_22821 = state_22782__$1;
(statearr_22796_22821[(2)] = inst_22757);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (9))){
var inst_22746 = (state_22782[(7)]);
var inst_22759 = (state_22782[(2)]);
var inst_22760 = (inst_22746 + (1));
var inst_22746__$1 = inst_22760;
var state_22782__$1 = (function (){var statearr_22797 = state_22782;
(statearr_22797[(7)] = inst_22746__$1);

(statearr_22797[(10)] = inst_22759);

return statearr_22797;
})();
var statearr_22798_22822 = state_22782__$1;
(statearr_22798_22822[(2)] = null);

(statearr_22798_22822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (5))){
var inst_22766 = (state_22782[(2)]);
var state_22782__$1 = (function (){var statearr_22799 = state_22782;
(statearr_22799[(11)] = inst_22766);

return statearr_22799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22782__$1,(12),dchan);
} else {
if((state_val_22783 === (14))){
var inst_22768 = (state_22782[(8)]);
var inst_22773 = cljs.core.apply.call(null,f,inst_22768);
var state_22782__$1 = state_22782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22782__$1,(16),out,inst_22773);
} else {
if((state_val_22783 === (16))){
var inst_22775 = (state_22782[(2)]);
var state_22782__$1 = (function (){var statearr_22800 = state_22782;
(statearr_22800[(12)] = inst_22775);

return statearr_22800;
})();
var statearr_22801_22823 = state_22782__$1;
(statearr_22801_22823[(2)] = null);

(statearr_22801_22823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (10))){
var inst_22750 = (state_22782[(2)]);
var inst_22751 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22782__$1 = (function (){var statearr_22802 = state_22782;
(statearr_22802[(13)] = inst_22750);

return statearr_22802;
})();
var statearr_22803_22824 = state_22782__$1;
(statearr_22803_22824[(2)] = inst_22751);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (8))){
var inst_22764 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22804_22825 = state_22782__$1;
(statearr_22804_22825[(2)] = inst_22764);

(statearr_22804_22825[(1)] = (5));


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
});})(c__19607__auto___22810,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19440__auto__,c__19607__auto___22810,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_22805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22805[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_22805[(1)] = (1));

return statearr_22805;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_22782){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e22806){if((e22806 instanceof Object)){
var ex__19444__auto__ = e22806;
var statearr_22807_22826 = state_22782;
(statearr_22807_22826[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22827 = state_22782;
state_22782 = G__22827;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_22782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_22782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___22810,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19609__auto__ = (function (){var statearr_22808 = f__19608__auto__.call(null);
(statearr_22808[(6)] = c__19607__auto___22810);

return statearr_22808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___22810,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22830 = arguments.length;
switch (G__22830) {
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
var c__19607__auto___22884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___22884,out){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___22884,out){
return (function (state_22862){
var state_val_22863 = (state_22862[(1)]);
if((state_val_22863 === (7))){
var inst_22842 = (state_22862[(7)]);
var inst_22841 = (state_22862[(8)]);
var inst_22841__$1 = (state_22862[(2)]);
var inst_22842__$1 = cljs.core.nth.call(null,inst_22841__$1,(0),null);
var inst_22843 = cljs.core.nth.call(null,inst_22841__$1,(1),null);
var inst_22844 = (inst_22842__$1 == null);
var state_22862__$1 = (function (){var statearr_22864 = state_22862;
(statearr_22864[(9)] = inst_22843);

(statearr_22864[(7)] = inst_22842__$1);

(statearr_22864[(8)] = inst_22841__$1);

return statearr_22864;
})();
if(cljs.core.truth_(inst_22844)){
var statearr_22865_22885 = state_22862__$1;
(statearr_22865_22885[(1)] = (8));

} else {
var statearr_22866_22886 = state_22862__$1;
(statearr_22866_22886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (1))){
var inst_22831 = cljs.core.vec.call(null,chs);
var inst_22832 = inst_22831;
var state_22862__$1 = (function (){var statearr_22867 = state_22862;
(statearr_22867[(10)] = inst_22832);

return statearr_22867;
})();
var statearr_22868_22887 = state_22862__$1;
(statearr_22868_22887[(2)] = null);

(statearr_22868_22887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (4))){
var inst_22832 = (state_22862[(10)]);
var state_22862__$1 = state_22862;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22862__$1,(7),inst_22832);
} else {
if((state_val_22863 === (6))){
var inst_22858 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22869_22888 = state_22862__$1;
(statearr_22869_22888[(2)] = inst_22858);

(statearr_22869_22888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (3))){
var inst_22860 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22862__$1,inst_22860);
} else {
if((state_val_22863 === (2))){
var inst_22832 = (state_22862[(10)]);
var inst_22834 = cljs.core.count.call(null,inst_22832);
var inst_22835 = (inst_22834 > (0));
var state_22862__$1 = state_22862;
if(cljs.core.truth_(inst_22835)){
var statearr_22871_22889 = state_22862__$1;
(statearr_22871_22889[(1)] = (4));

} else {
var statearr_22872_22890 = state_22862__$1;
(statearr_22872_22890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (11))){
var inst_22832 = (state_22862[(10)]);
var inst_22851 = (state_22862[(2)]);
var tmp22870 = inst_22832;
var inst_22832__$1 = tmp22870;
var state_22862__$1 = (function (){var statearr_22873 = state_22862;
(statearr_22873[(10)] = inst_22832__$1);

(statearr_22873[(11)] = inst_22851);

return statearr_22873;
})();
var statearr_22874_22891 = state_22862__$1;
(statearr_22874_22891[(2)] = null);

(statearr_22874_22891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (9))){
var inst_22842 = (state_22862[(7)]);
var state_22862__$1 = state_22862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22862__$1,(11),out,inst_22842);
} else {
if((state_val_22863 === (5))){
var inst_22856 = cljs.core.async.close_BANG_.call(null,out);
var state_22862__$1 = state_22862;
var statearr_22875_22892 = state_22862__$1;
(statearr_22875_22892[(2)] = inst_22856);

(statearr_22875_22892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (10))){
var inst_22854 = (state_22862[(2)]);
var state_22862__$1 = state_22862;
var statearr_22876_22893 = state_22862__$1;
(statearr_22876_22893[(2)] = inst_22854);

(statearr_22876_22893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22863 === (8))){
var inst_22843 = (state_22862[(9)]);
var inst_22842 = (state_22862[(7)]);
var inst_22832 = (state_22862[(10)]);
var inst_22841 = (state_22862[(8)]);
var inst_22846 = (function (){var cs = inst_22832;
var vec__22837 = inst_22841;
var v = inst_22842;
var c = inst_22843;
return ((function (cs,vec__22837,v,c,inst_22843,inst_22842,inst_22832,inst_22841,state_val_22863,c__19607__auto___22884,out){
return (function (p1__22828_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22828_SHARP_);
});
;})(cs,vec__22837,v,c,inst_22843,inst_22842,inst_22832,inst_22841,state_val_22863,c__19607__auto___22884,out))
})();
var inst_22847 = cljs.core.filterv.call(null,inst_22846,inst_22832);
var inst_22832__$1 = inst_22847;
var state_22862__$1 = (function (){var statearr_22877 = state_22862;
(statearr_22877[(10)] = inst_22832__$1);

return statearr_22877;
})();
var statearr_22878_22894 = state_22862__$1;
(statearr_22878_22894[(2)] = null);

(statearr_22878_22894[(1)] = (2));


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
});})(c__19607__auto___22884,out))
;
return ((function (switch__19440__auto__,c__19607__auto___22884,out){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_22879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22879[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_22879[(1)] = (1));

return statearr_22879;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_22862){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e22880){if((e22880 instanceof Object)){
var ex__19444__auto__ = e22880;
var statearr_22881_22895 = state_22862;
(statearr_22881_22895[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22896 = state_22862;
state_22862 = G__22896;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_22862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_22862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___22884,out))
})();
var state__19609__auto__ = (function (){var statearr_22882 = f__19608__auto__.call(null);
(statearr_22882[(6)] = c__19607__auto___22884);

return statearr_22882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___22884,out))
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
var G__22898 = arguments.length;
switch (G__22898) {
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
var c__19607__auto___22943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___22943,out){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___22943,out){
return (function (state_22922){
var state_val_22923 = (state_22922[(1)]);
if((state_val_22923 === (7))){
var inst_22904 = (state_22922[(7)]);
var inst_22904__$1 = (state_22922[(2)]);
var inst_22905 = (inst_22904__$1 == null);
var inst_22906 = cljs.core.not.call(null,inst_22905);
var state_22922__$1 = (function (){var statearr_22924 = state_22922;
(statearr_22924[(7)] = inst_22904__$1);

return statearr_22924;
})();
if(inst_22906){
var statearr_22925_22944 = state_22922__$1;
(statearr_22925_22944[(1)] = (8));

} else {
var statearr_22926_22945 = state_22922__$1;
(statearr_22926_22945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (1))){
var inst_22899 = (0);
var state_22922__$1 = (function (){var statearr_22927 = state_22922;
(statearr_22927[(8)] = inst_22899);

return statearr_22927;
})();
var statearr_22928_22946 = state_22922__$1;
(statearr_22928_22946[(2)] = null);

(statearr_22928_22946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (4))){
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22922__$1,(7),ch);
} else {
if((state_val_22923 === (6))){
var inst_22917 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22929_22947 = state_22922__$1;
(statearr_22929_22947[(2)] = inst_22917);

(statearr_22929_22947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (3))){
var inst_22919 = (state_22922[(2)]);
var inst_22920 = cljs.core.async.close_BANG_.call(null,out);
var state_22922__$1 = (function (){var statearr_22930 = state_22922;
(statearr_22930[(9)] = inst_22919);

return statearr_22930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22922__$1,inst_22920);
} else {
if((state_val_22923 === (2))){
var inst_22899 = (state_22922[(8)]);
var inst_22901 = (inst_22899 < n);
var state_22922__$1 = state_22922;
if(cljs.core.truth_(inst_22901)){
var statearr_22931_22948 = state_22922__$1;
(statearr_22931_22948[(1)] = (4));

} else {
var statearr_22932_22949 = state_22922__$1;
(statearr_22932_22949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (11))){
var inst_22899 = (state_22922[(8)]);
var inst_22909 = (state_22922[(2)]);
var inst_22910 = (inst_22899 + (1));
var inst_22899__$1 = inst_22910;
var state_22922__$1 = (function (){var statearr_22933 = state_22922;
(statearr_22933[(10)] = inst_22909);

(statearr_22933[(8)] = inst_22899__$1);

return statearr_22933;
})();
var statearr_22934_22950 = state_22922__$1;
(statearr_22934_22950[(2)] = null);

(statearr_22934_22950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (9))){
var state_22922__$1 = state_22922;
var statearr_22935_22951 = state_22922__$1;
(statearr_22935_22951[(2)] = null);

(statearr_22935_22951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (5))){
var state_22922__$1 = state_22922;
var statearr_22936_22952 = state_22922__$1;
(statearr_22936_22952[(2)] = null);

(statearr_22936_22952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (10))){
var inst_22914 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22937_22953 = state_22922__$1;
(statearr_22937_22953[(2)] = inst_22914);

(statearr_22937_22953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (8))){
var inst_22904 = (state_22922[(7)]);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22922__$1,(11),out,inst_22904);
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
});})(c__19607__auto___22943,out))
;
return ((function (switch__19440__auto__,c__19607__auto___22943,out){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_22938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22938[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_22938[(1)] = (1));

return statearr_22938;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_22922){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e22939){if((e22939 instanceof Object)){
var ex__19444__auto__ = e22939;
var statearr_22940_22954 = state_22922;
(statearr_22940_22954[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22955 = state_22922;
state_22922 = G__22955;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_22922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_22922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___22943,out))
})();
var state__19609__auto__ = (function (){var statearr_22941 = f__19608__auto__.call(null);
(statearr_22941[(6)] = c__19607__auto___22943);

return statearr_22941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___22943,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22957 = (function (f,ch,meta22958){
this.f = f;
this.ch = ch;
this.meta22958 = meta22958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22959,meta22958__$1){
var self__ = this;
var _22959__$1 = this;
return (new cljs.core.async.t_cljs$core$async22957(self__.f,self__.ch,meta22958__$1));
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22959){
var self__ = this;
var _22959__$1 = this;
return self__.meta22958;
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22960 = (function (f,ch,meta22958,_,fn1,meta22961){
this.f = f;
this.ch = ch;
this.meta22958 = meta22958;
this._ = _;
this.fn1 = fn1;
this.meta22961 = meta22961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22962,meta22961__$1){
var self__ = this;
var _22962__$1 = this;
return (new cljs.core.async.t_cljs$core$async22960(self__.f,self__.ch,self__.meta22958,self__._,self__.fn1,meta22961__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22962){
var self__ = this;
var _22962__$1 = this;
return self__.meta22961;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22956_SHARP_){
return f1.call(null,(((p1__22956_SHARP_ == null))?null:self__.f.call(null,p1__22956_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22960.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22958","meta22958",-1749168843,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22957","cljs.core.async/t_cljs$core$async22957",-524366546,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22961","meta22961",-834384742,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22960";

cljs.core.async.t_cljs$core$async22960.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22960");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22960.
 */
cljs.core.async.__GT_t_cljs$core$async22960 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22960(f__$1,ch__$1,meta22958__$1,___$2,fn1__$1,meta22961){
return (new cljs.core.async.t_cljs$core$async22960(f__$1,ch__$1,meta22958__$1,___$2,fn1__$1,meta22961));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22960(self__.f,self__.ch,self__.meta22958,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22958","meta22958",-1749168843,null)], null);
});

cljs.core.async.t_cljs$core$async22957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22957";

cljs.core.async.t_cljs$core$async22957.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22957");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22957.
 */
cljs.core.async.__GT_t_cljs$core$async22957 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22957(f__$1,ch__$1,meta22958){
return (new cljs.core.async.t_cljs$core$async22957(f__$1,ch__$1,meta22958));
});

}

return (new cljs.core.async.t_cljs$core$async22957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22963 = (function (f,ch,meta22964){
this.f = f;
this.ch = ch;
this.meta22964 = meta22964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22965,meta22964__$1){
var self__ = this;
var _22965__$1 = this;
return (new cljs.core.async.t_cljs$core$async22963(self__.f,self__.ch,meta22964__$1));
});

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22965){
var self__ = this;
var _22965__$1 = this;
return self__.meta22964;
});

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22964","meta22964",223379283,null)], null);
});

cljs.core.async.t_cljs$core$async22963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22963";

cljs.core.async.t_cljs$core$async22963.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22963");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22963.
 */
cljs.core.async.__GT_t_cljs$core$async22963 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22963(f__$1,ch__$1,meta22964){
return (new cljs.core.async.t_cljs$core$async22963(f__$1,ch__$1,meta22964));
});

}

return (new cljs.core.async.t_cljs$core$async22963(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22966 = (function (p,ch,meta22967){
this.p = p;
this.ch = ch;
this.meta22967 = meta22967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22968,meta22967__$1){
var self__ = this;
var _22968__$1 = this;
return (new cljs.core.async.t_cljs$core$async22966(self__.p,self__.ch,meta22967__$1));
});

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22968){
var self__ = this;
var _22968__$1 = this;
return self__.meta22967;
});

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22967","meta22967",-583555093,null)], null);
});

cljs.core.async.t_cljs$core$async22966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22966";

cljs.core.async.t_cljs$core$async22966.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22966");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22966.
 */
cljs.core.async.__GT_t_cljs$core$async22966 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22966(p__$1,ch__$1,meta22967){
return (new cljs.core.async.t_cljs$core$async22966(p__$1,ch__$1,meta22967));
});

}

return (new cljs.core.async.t_cljs$core$async22966(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22970 = arguments.length;
switch (G__22970) {
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
var c__19607__auto___23010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___23010,out){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___23010,out){
return (function (state_22991){
var state_val_22992 = (state_22991[(1)]);
if((state_val_22992 === (7))){
var inst_22987 = (state_22991[(2)]);
var state_22991__$1 = state_22991;
var statearr_22993_23011 = state_22991__$1;
(statearr_22993_23011[(2)] = inst_22987);

(statearr_22993_23011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (1))){
var state_22991__$1 = state_22991;
var statearr_22994_23012 = state_22991__$1;
(statearr_22994_23012[(2)] = null);

(statearr_22994_23012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (4))){
var inst_22973 = (state_22991[(7)]);
var inst_22973__$1 = (state_22991[(2)]);
var inst_22974 = (inst_22973__$1 == null);
var state_22991__$1 = (function (){var statearr_22995 = state_22991;
(statearr_22995[(7)] = inst_22973__$1);

return statearr_22995;
})();
if(cljs.core.truth_(inst_22974)){
var statearr_22996_23013 = state_22991__$1;
(statearr_22996_23013[(1)] = (5));

} else {
var statearr_22997_23014 = state_22991__$1;
(statearr_22997_23014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (6))){
var inst_22973 = (state_22991[(7)]);
var inst_22978 = p.call(null,inst_22973);
var state_22991__$1 = state_22991;
if(cljs.core.truth_(inst_22978)){
var statearr_22998_23015 = state_22991__$1;
(statearr_22998_23015[(1)] = (8));

} else {
var statearr_22999_23016 = state_22991__$1;
(statearr_22999_23016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (3))){
var inst_22989 = (state_22991[(2)]);
var state_22991__$1 = state_22991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22991__$1,inst_22989);
} else {
if((state_val_22992 === (2))){
var state_22991__$1 = state_22991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22991__$1,(4),ch);
} else {
if((state_val_22992 === (11))){
var inst_22981 = (state_22991[(2)]);
var state_22991__$1 = state_22991;
var statearr_23000_23017 = state_22991__$1;
(statearr_23000_23017[(2)] = inst_22981);

(statearr_23000_23017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (9))){
var state_22991__$1 = state_22991;
var statearr_23001_23018 = state_22991__$1;
(statearr_23001_23018[(2)] = null);

(statearr_23001_23018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (5))){
var inst_22976 = cljs.core.async.close_BANG_.call(null,out);
var state_22991__$1 = state_22991;
var statearr_23002_23019 = state_22991__$1;
(statearr_23002_23019[(2)] = inst_22976);

(statearr_23002_23019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (10))){
var inst_22984 = (state_22991[(2)]);
var state_22991__$1 = (function (){var statearr_23003 = state_22991;
(statearr_23003[(8)] = inst_22984);

return statearr_23003;
})();
var statearr_23004_23020 = state_22991__$1;
(statearr_23004_23020[(2)] = null);

(statearr_23004_23020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (8))){
var inst_22973 = (state_22991[(7)]);
var state_22991__$1 = state_22991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22991__$1,(11),out,inst_22973);
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
});})(c__19607__auto___23010,out))
;
return ((function (switch__19440__auto__,c__19607__auto___23010,out){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_23005 = [null,null,null,null,null,null,null,null,null];
(statearr_23005[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_23005[(1)] = (1));

return statearr_23005;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_22991){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_22991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e23006){if((e23006 instanceof Object)){
var ex__19444__auto__ = e23006;
var statearr_23007_23021 = state_22991;
(statearr_23007_23021[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23022 = state_22991;
state_22991 = G__23022;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_22991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_22991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___23010,out))
})();
var state__19609__auto__ = (function (){var statearr_23008 = f__19608__auto__.call(null);
(statearr_23008[(6)] = c__19607__auto___23010);

return statearr_23008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___23010,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23024 = arguments.length;
switch (G__23024) {
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
var c__19607__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto__){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto__){
return (function (state_23087){
var state_val_23088 = (state_23087[(1)]);
if((state_val_23088 === (7))){
var inst_23083 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23089_23127 = state_23087__$1;
(statearr_23089_23127[(2)] = inst_23083);

(statearr_23089_23127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (20))){
var inst_23053 = (state_23087[(7)]);
var inst_23064 = (state_23087[(2)]);
var inst_23065 = cljs.core.next.call(null,inst_23053);
var inst_23039 = inst_23065;
var inst_23040 = null;
var inst_23041 = (0);
var inst_23042 = (0);
var state_23087__$1 = (function (){var statearr_23090 = state_23087;
(statearr_23090[(8)] = inst_23040);

(statearr_23090[(9)] = inst_23064);

(statearr_23090[(10)] = inst_23041);

(statearr_23090[(11)] = inst_23042);

(statearr_23090[(12)] = inst_23039);

return statearr_23090;
})();
var statearr_23091_23128 = state_23087__$1;
(statearr_23091_23128[(2)] = null);

(statearr_23091_23128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (1))){
var state_23087__$1 = state_23087;
var statearr_23092_23129 = state_23087__$1;
(statearr_23092_23129[(2)] = null);

(statearr_23092_23129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (4))){
var inst_23028 = (state_23087[(13)]);
var inst_23028__$1 = (state_23087[(2)]);
var inst_23029 = (inst_23028__$1 == null);
var state_23087__$1 = (function (){var statearr_23093 = state_23087;
(statearr_23093[(13)] = inst_23028__$1);

return statearr_23093;
})();
if(cljs.core.truth_(inst_23029)){
var statearr_23094_23130 = state_23087__$1;
(statearr_23094_23130[(1)] = (5));

} else {
var statearr_23095_23131 = state_23087__$1;
(statearr_23095_23131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (15))){
var state_23087__$1 = state_23087;
var statearr_23099_23132 = state_23087__$1;
(statearr_23099_23132[(2)] = null);

(statearr_23099_23132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (21))){
var state_23087__$1 = state_23087;
var statearr_23100_23133 = state_23087__$1;
(statearr_23100_23133[(2)] = null);

(statearr_23100_23133[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (13))){
var inst_23040 = (state_23087[(8)]);
var inst_23041 = (state_23087[(10)]);
var inst_23042 = (state_23087[(11)]);
var inst_23039 = (state_23087[(12)]);
var inst_23049 = (state_23087[(2)]);
var inst_23050 = (inst_23042 + (1));
var tmp23096 = inst_23040;
var tmp23097 = inst_23041;
var tmp23098 = inst_23039;
var inst_23039__$1 = tmp23098;
var inst_23040__$1 = tmp23096;
var inst_23041__$1 = tmp23097;
var inst_23042__$1 = inst_23050;
var state_23087__$1 = (function (){var statearr_23101 = state_23087;
(statearr_23101[(8)] = inst_23040__$1);

(statearr_23101[(10)] = inst_23041__$1);

(statearr_23101[(14)] = inst_23049);

(statearr_23101[(11)] = inst_23042__$1);

(statearr_23101[(12)] = inst_23039__$1);

return statearr_23101;
})();
var statearr_23102_23134 = state_23087__$1;
(statearr_23102_23134[(2)] = null);

(statearr_23102_23134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (22))){
var state_23087__$1 = state_23087;
var statearr_23103_23135 = state_23087__$1;
(statearr_23103_23135[(2)] = null);

(statearr_23103_23135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (6))){
var inst_23028 = (state_23087[(13)]);
var inst_23037 = f.call(null,inst_23028);
var inst_23038 = cljs.core.seq.call(null,inst_23037);
var inst_23039 = inst_23038;
var inst_23040 = null;
var inst_23041 = (0);
var inst_23042 = (0);
var state_23087__$1 = (function (){var statearr_23104 = state_23087;
(statearr_23104[(8)] = inst_23040);

(statearr_23104[(10)] = inst_23041);

(statearr_23104[(11)] = inst_23042);

(statearr_23104[(12)] = inst_23039);

return statearr_23104;
})();
var statearr_23105_23136 = state_23087__$1;
(statearr_23105_23136[(2)] = null);

(statearr_23105_23136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (17))){
var inst_23053 = (state_23087[(7)]);
var inst_23057 = cljs.core.chunk_first.call(null,inst_23053);
var inst_23058 = cljs.core.chunk_rest.call(null,inst_23053);
var inst_23059 = cljs.core.count.call(null,inst_23057);
var inst_23039 = inst_23058;
var inst_23040 = inst_23057;
var inst_23041 = inst_23059;
var inst_23042 = (0);
var state_23087__$1 = (function (){var statearr_23106 = state_23087;
(statearr_23106[(8)] = inst_23040);

(statearr_23106[(10)] = inst_23041);

(statearr_23106[(11)] = inst_23042);

(statearr_23106[(12)] = inst_23039);

return statearr_23106;
})();
var statearr_23107_23137 = state_23087__$1;
(statearr_23107_23137[(2)] = null);

(statearr_23107_23137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (3))){
var inst_23085 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23087__$1,inst_23085);
} else {
if((state_val_23088 === (12))){
var inst_23073 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23108_23138 = state_23087__$1;
(statearr_23108_23138[(2)] = inst_23073);

(statearr_23108_23138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (2))){
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23087__$1,(4),in$);
} else {
if((state_val_23088 === (23))){
var inst_23081 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23109_23139 = state_23087__$1;
(statearr_23109_23139[(2)] = inst_23081);

(statearr_23109_23139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (19))){
var inst_23068 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23110_23140 = state_23087__$1;
(statearr_23110_23140[(2)] = inst_23068);

(statearr_23110_23140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (11))){
var inst_23053 = (state_23087[(7)]);
var inst_23039 = (state_23087[(12)]);
var inst_23053__$1 = cljs.core.seq.call(null,inst_23039);
var state_23087__$1 = (function (){var statearr_23111 = state_23087;
(statearr_23111[(7)] = inst_23053__$1);

return statearr_23111;
})();
if(inst_23053__$1){
var statearr_23112_23141 = state_23087__$1;
(statearr_23112_23141[(1)] = (14));

} else {
var statearr_23113_23142 = state_23087__$1;
(statearr_23113_23142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (9))){
var inst_23075 = (state_23087[(2)]);
var inst_23076 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23087__$1 = (function (){var statearr_23114 = state_23087;
(statearr_23114[(15)] = inst_23075);

return statearr_23114;
})();
if(cljs.core.truth_(inst_23076)){
var statearr_23115_23143 = state_23087__$1;
(statearr_23115_23143[(1)] = (21));

} else {
var statearr_23116_23144 = state_23087__$1;
(statearr_23116_23144[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (5))){
var inst_23031 = cljs.core.async.close_BANG_.call(null,out);
var state_23087__$1 = state_23087;
var statearr_23117_23145 = state_23087__$1;
(statearr_23117_23145[(2)] = inst_23031);

(statearr_23117_23145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (14))){
var inst_23053 = (state_23087[(7)]);
var inst_23055 = cljs.core.chunked_seq_QMARK_.call(null,inst_23053);
var state_23087__$1 = state_23087;
if(inst_23055){
var statearr_23118_23146 = state_23087__$1;
(statearr_23118_23146[(1)] = (17));

} else {
var statearr_23119_23147 = state_23087__$1;
(statearr_23119_23147[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (16))){
var inst_23071 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23120_23148 = state_23087__$1;
(statearr_23120_23148[(2)] = inst_23071);

(statearr_23120_23148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (10))){
var inst_23040 = (state_23087[(8)]);
var inst_23042 = (state_23087[(11)]);
var inst_23047 = cljs.core._nth.call(null,inst_23040,inst_23042);
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23087__$1,(13),out,inst_23047);
} else {
if((state_val_23088 === (18))){
var inst_23053 = (state_23087[(7)]);
var inst_23062 = cljs.core.first.call(null,inst_23053);
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23087__$1,(20),out,inst_23062);
} else {
if((state_val_23088 === (8))){
var inst_23041 = (state_23087[(10)]);
var inst_23042 = (state_23087[(11)]);
var inst_23044 = (inst_23042 < inst_23041);
var inst_23045 = inst_23044;
var state_23087__$1 = state_23087;
if(cljs.core.truth_(inst_23045)){
var statearr_23121_23149 = state_23087__$1;
(statearr_23121_23149[(1)] = (10));

} else {
var statearr_23122_23150 = state_23087__$1;
(statearr_23122_23150[(1)] = (11));

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
});})(c__19607__auto__))
;
return ((function (switch__19440__auto__,c__19607__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19441__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19441__auto____0 = (function (){
var statearr_23123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23123[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19441__auto__);

(statearr_23123[(1)] = (1));

return statearr_23123;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19441__auto____1 = (function (state_23087){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_23087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e23124){if((e23124 instanceof Object)){
var ex__19444__auto__ = e23124;
var statearr_23125_23151 = state_23087;
(statearr_23125_23151[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23152 = state_23087;
state_23087 = G__23152;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19441__auto__ = function(state_23087){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19441__auto____1.call(this,state_23087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19441__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19441__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto__))
})();
var state__19609__auto__ = (function (){var statearr_23126 = f__19608__auto__.call(null);
(statearr_23126[(6)] = c__19607__auto__);

return statearr_23126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto__))
);

return c__19607__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23154 = arguments.length;
switch (G__23154) {
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
var G__23157 = arguments.length;
switch (G__23157) {
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
var G__23160 = arguments.length;
switch (G__23160) {
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
var c__19607__auto___23207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___23207,out){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___23207,out){
return (function (state_23184){
var state_val_23185 = (state_23184[(1)]);
if((state_val_23185 === (7))){
var inst_23179 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23186_23208 = state_23184__$1;
(statearr_23186_23208[(2)] = inst_23179);

(statearr_23186_23208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (1))){
var inst_23161 = null;
var state_23184__$1 = (function (){var statearr_23187 = state_23184;
(statearr_23187[(7)] = inst_23161);

return statearr_23187;
})();
var statearr_23188_23209 = state_23184__$1;
(statearr_23188_23209[(2)] = null);

(statearr_23188_23209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (4))){
var inst_23164 = (state_23184[(8)]);
var inst_23164__$1 = (state_23184[(2)]);
var inst_23165 = (inst_23164__$1 == null);
var inst_23166 = cljs.core.not.call(null,inst_23165);
var state_23184__$1 = (function (){var statearr_23189 = state_23184;
(statearr_23189[(8)] = inst_23164__$1);

return statearr_23189;
})();
if(inst_23166){
var statearr_23190_23210 = state_23184__$1;
(statearr_23190_23210[(1)] = (5));

} else {
var statearr_23191_23211 = state_23184__$1;
(statearr_23191_23211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (6))){
var state_23184__$1 = state_23184;
var statearr_23192_23212 = state_23184__$1;
(statearr_23192_23212[(2)] = null);

(statearr_23192_23212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (3))){
var inst_23181 = (state_23184[(2)]);
var inst_23182 = cljs.core.async.close_BANG_.call(null,out);
var state_23184__$1 = (function (){var statearr_23193 = state_23184;
(statearr_23193[(9)] = inst_23181);

return statearr_23193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23184__$1,inst_23182);
} else {
if((state_val_23185 === (2))){
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23184__$1,(4),ch);
} else {
if((state_val_23185 === (11))){
var inst_23164 = (state_23184[(8)]);
var inst_23173 = (state_23184[(2)]);
var inst_23161 = inst_23164;
var state_23184__$1 = (function (){var statearr_23194 = state_23184;
(statearr_23194[(7)] = inst_23161);

(statearr_23194[(10)] = inst_23173);

return statearr_23194;
})();
var statearr_23195_23213 = state_23184__$1;
(statearr_23195_23213[(2)] = null);

(statearr_23195_23213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (9))){
var inst_23164 = (state_23184[(8)]);
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23184__$1,(11),out,inst_23164);
} else {
if((state_val_23185 === (5))){
var inst_23161 = (state_23184[(7)]);
var inst_23164 = (state_23184[(8)]);
var inst_23168 = cljs.core._EQ_.call(null,inst_23164,inst_23161);
var state_23184__$1 = state_23184;
if(inst_23168){
var statearr_23197_23214 = state_23184__$1;
(statearr_23197_23214[(1)] = (8));

} else {
var statearr_23198_23215 = state_23184__$1;
(statearr_23198_23215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (10))){
var inst_23176 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23199_23216 = state_23184__$1;
(statearr_23199_23216[(2)] = inst_23176);

(statearr_23199_23216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (8))){
var inst_23161 = (state_23184[(7)]);
var tmp23196 = inst_23161;
var inst_23161__$1 = tmp23196;
var state_23184__$1 = (function (){var statearr_23200 = state_23184;
(statearr_23200[(7)] = inst_23161__$1);

return statearr_23200;
})();
var statearr_23201_23217 = state_23184__$1;
(statearr_23201_23217[(2)] = null);

(statearr_23201_23217[(1)] = (2));


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
});})(c__19607__auto___23207,out))
;
return ((function (switch__19440__auto__,c__19607__auto___23207,out){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_23202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23202[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_23202[(1)] = (1));

return statearr_23202;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_23184){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_23184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e23203){if((e23203 instanceof Object)){
var ex__19444__auto__ = e23203;
var statearr_23204_23218 = state_23184;
(statearr_23204_23218[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23219 = state_23184;
state_23184 = G__23219;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_23184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_23184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___23207,out))
})();
var state__19609__auto__ = (function (){var statearr_23205 = f__19608__auto__.call(null);
(statearr_23205[(6)] = c__19607__auto___23207);

return statearr_23205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___23207,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23221 = arguments.length;
switch (G__23221) {
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
var c__19607__auto___23287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___23287,out){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___23287,out){
return (function (state_23259){
var state_val_23260 = (state_23259[(1)]);
if((state_val_23260 === (7))){
var inst_23255 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23261_23288 = state_23259__$1;
(statearr_23261_23288[(2)] = inst_23255);

(statearr_23261_23288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (1))){
var inst_23222 = (new Array(n));
var inst_23223 = inst_23222;
var inst_23224 = (0);
var state_23259__$1 = (function (){var statearr_23262 = state_23259;
(statearr_23262[(7)] = inst_23224);

(statearr_23262[(8)] = inst_23223);

return statearr_23262;
})();
var statearr_23263_23289 = state_23259__$1;
(statearr_23263_23289[(2)] = null);

(statearr_23263_23289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (4))){
var inst_23227 = (state_23259[(9)]);
var inst_23227__$1 = (state_23259[(2)]);
var inst_23228 = (inst_23227__$1 == null);
var inst_23229 = cljs.core.not.call(null,inst_23228);
var state_23259__$1 = (function (){var statearr_23264 = state_23259;
(statearr_23264[(9)] = inst_23227__$1);

return statearr_23264;
})();
if(inst_23229){
var statearr_23265_23290 = state_23259__$1;
(statearr_23265_23290[(1)] = (5));

} else {
var statearr_23266_23291 = state_23259__$1;
(statearr_23266_23291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (15))){
var inst_23249 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23267_23292 = state_23259__$1;
(statearr_23267_23292[(2)] = inst_23249);

(statearr_23267_23292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (13))){
var state_23259__$1 = state_23259;
var statearr_23268_23293 = state_23259__$1;
(statearr_23268_23293[(2)] = null);

(statearr_23268_23293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (6))){
var inst_23224 = (state_23259[(7)]);
var inst_23245 = (inst_23224 > (0));
var state_23259__$1 = state_23259;
if(cljs.core.truth_(inst_23245)){
var statearr_23269_23294 = state_23259__$1;
(statearr_23269_23294[(1)] = (12));

} else {
var statearr_23270_23295 = state_23259__$1;
(statearr_23270_23295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (3))){
var inst_23257 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23259__$1,inst_23257);
} else {
if((state_val_23260 === (12))){
var inst_23223 = (state_23259[(8)]);
var inst_23247 = cljs.core.vec.call(null,inst_23223);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23259__$1,(15),out,inst_23247);
} else {
if((state_val_23260 === (2))){
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23259__$1,(4),ch);
} else {
if((state_val_23260 === (11))){
var inst_23239 = (state_23259[(2)]);
var inst_23240 = (new Array(n));
var inst_23223 = inst_23240;
var inst_23224 = (0);
var state_23259__$1 = (function (){var statearr_23271 = state_23259;
(statearr_23271[(7)] = inst_23224);

(statearr_23271[(8)] = inst_23223);

(statearr_23271[(10)] = inst_23239);

return statearr_23271;
})();
var statearr_23272_23296 = state_23259__$1;
(statearr_23272_23296[(2)] = null);

(statearr_23272_23296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (9))){
var inst_23223 = (state_23259[(8)]);
var inst_23237 = cljs.core.vec.call(null,inst_23223);
var state_23259__$1 = state_23259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23259__$1,(11),out,inst_23237);
} else {
if((state_val_23260 === (5))){
var inst_23232 = (state_23259[(11)]);
var inst_23224 = (state_23259[(7)]);
var inst_23227 = (state_23259[(9)]);
var inst_23223 = (state_23259[(8)]);
var inst_23231 = (inst_23223[inst_23224] = inst_23227);
var inst_23232__$1 = (inst_23224 + (1));
var inst_23233 = (inst_23232__$1 < n);
var state_23259__$1 = (function (){var statearr_23273 = state_23259;
(statearr_23273[(11)] = inst_23232__$1);

(statearr_23273[(12)] = inst_23231);

return statearr_23273;
})();
if(cljs.core.truth_(inst_23233)){
var statearr_23274_23297 = state_23259__$1;
(statearr_23274_23297[(1)] = (8));

} else {
var statearr_23275_23298 = state_23259__$1;
(statearr_23275_23298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (14))){
var inst_23252 = (state_23259[(2)]);
var inst_23253 = cljs.core.async.close_BANG_.call(null,out);
var state_23259__$1 = (function (){var statearr_23277 = state_23259;
(statearr_23277[(13)] = inst_23252);

return statearr_23277;
})();
var statearr_23278_23299 = state_23259__$1;
(statearr_23278_23299[(2)] = inst_23253);

(statearr_23278_23299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (10))){
var inst_23243 = (state_23259[(2)]);
var state_23259__$1 = state_23259;
var statearr_23279_23300 = state_23259__$1;
(statearr_23279_23300[(2)] = inst_23243);

(statearr_23279_23300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23260 === (8))){
var inst_23232 = (state_23259[(11)]);
var inst_23223 = (state_23259[(8)]);
var tmp23276 = inst_23223;
var inst_23223__$1 = tmp23276;
var inst_23224 = inst_23232;
var state_23259__$1 = (function (){var statearr_23280 = state_23259;
(statearr_23280[(7)] = inst_23224);

(statearr_23280[(8)] = inst_23223__$1);

return statearr_23280;
})();
var statearr_23281_23301 = state_23259__$1;
(statearr_23281_23301[(2)] = null);

(statearr_23281_23301[(1)] = (2));


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
});})(c__19607__auto___23287,out))
;
return ((function (switch__19440__auto__,c__19607__auto___23287,out){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_23282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23282[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_23282[(1)] = (1));

return statearr_23282;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_23259){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_23259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e23283){if((e23283 instanceof Object)){
var ex__19444__auto__ = e23283;
var statearr_23284_23302 = state_23259;
(statearr_23284_23302[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23303 = state_23259;
state_23259 = G__23303;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_23259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_23259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___23287,out))
})();
var state__19609__auto__ = (function (){var statearr_23285 = f__19608__auto__.call(null);
(statearr_23285[(6)] = c__19607__auto___23287);

return statearr_23285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___23287,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23305 = arguments.length;
switch (G__23305) {
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
var c__19607__auto___23375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19607__auto___23375,out){
return (function (){
var f__19608__auto__ = (function (){var switch__19440__auto__ = ((function (c__19607__auto___23375,out){
return (function (state_23347){
var state_val_23348 = (state_23347[(1)]);
if((state_val_23348 === (7))){
var inst_23343 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23349_23376 = state_23347__$1;
(statearr_23349_23376[(2)] = inst_23343);

(statearr_23349_23376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (1))){
var inst_23306 = [];
var inst_23307 = inst_23306;
var inst_23308 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23347__$1 = (function (){var statearr_23350 = state_23347;
(statearr_23350[(7)] = inst_23307);

(statearr_23350[(8)] = inst_23308);

return statearr_23350;
})();
var statearr_23351_23377 = state_23347__$1;
(statearr_23351_23377[(2)] = null);

(statearr_23351_23377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (4))){
var inst_23311 = (state_23347[(9)]);
var inst_23311__$1 = (state_23347[(2)]);
var inst_23312 = (inst_23311__$1 == null);
var inst_23313 = cljs.core.not.call(null,inst_23312);
var state_23347__$1 = (function (){var statearr_23352 = state_23347;
(statearr_23352[(9)] = inst_23311__$1);

return statearr_23352;
})();
if(inst_23313){
var statearr_23353_23378 = state_23347__$1;
(statearr_23353_23378[(1)] = (5));

} else {
var statearr_23354_23379 = state_23347__$1;
(statearr_23354_23379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (15))){
var inst_23337 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23355_23380 = state_23347__$1;
(statearr_23355_23380[(2)] = inst_23337);

(statearr_23355_23380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (13))){
var state_23347__$1 = state_23347;
var statearr_23356_23381 = state_23347__$1;
(statearr_23356_23381[(2)] = null);

(statearr_23356_23381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (6))){
var inst_23307 = (state_23347[(7)]);
var inst_23332 = inst_23307.length;
var inst_23333 = (inst_23332 > (0));
var state_23347__$1 = state_23347;
if(cljs.core.truth_(inst_23333)){
var statearr_23357_23382 = state_23347__$1;
(statearr_23357_23382[(1)] = (12));

} else {
var statearr_23358_23383 = state_23347__$1;
(statearr_23358_23383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (3))){
var inst_23345 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23347__$1,inst_23345);
} else {
if((state_val_23348 === (12))){
var inst_23307 = (state_23347[(7)]);
var inst_23335 = cljs.core.vec.call(null,inst_23307);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23347__$1,(15),out,inst_23335);
} else {
if((state_val_23348 === (2))){
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23347__$1,(4),ch);
} else {
if((state_val_23348 === (11))){
var inst_23315 = (state_23347[(10)]);
var inst_23311 = (state_23347[(9)]);
var inst_23325 = (state_23347[(2)]);
var inst_23326 = [];
var inst_23327 = inst_23326.push(inst_23311);
var inst_23307 = inst_23326;
var inst_23308 = inst_23315;
var state_23347__$1 = (function (){var statearr_23359 = state_23347;
(statearr_23359[(7)] = inst_23307);

(statearr_23359[(11)] = inst_23327);

(statearr_23359[(8)] = inst_23308);

(statearr_23359[(12)] = inst_23325);

return statearr_23359;
})();
var statearr_23360_23384 = state_23347__$1;
(statearr_23360_23384[(2)] = null);

(statearr_23360_23384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (9))){
var inst_23307 = (state_23347[(7)]);
var inst_23323 = cljs.core.vec.call(null,inst_23307);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23347__$1,(11),out,inst_23323);
} else {
if((state_val_23348 === (5))){
var inst_23315 = (state_23347[(10)]);
var inst_23311 = (state_23347[(9)]);
var inst_23308 = (state_23347[(8)]);
var inst_23315__$1 = f.call(null,inst_23311);
var inst_23316 = cljs.core._EQ_.call(null,inst_23315__$1,inst_23308);
var inst_23317 = cljs.core.keyword_identical_QMARK_.call(null,inst_23308,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23318 = ((inst_23316) || (inst_23317));
var state_23347__$1 = (function (){var statearr_23361 = state_23347;
(statearr_23361[(10)] = inst_23315__$1);

return statearr_23361;
})();
if(cljs.core.truth_(inst_23318)){
var statearr_23362_23385 = state_23347__$1;
(statearr_23362_23385[(1)] = (8));

} else {
var statearr_23363_23386 = state_23347__$1;
(statearr_23363_23386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (14))){
var inst_23340 = (state_23347[(2)]);
var inst_23341 = cljs.core.async.close_BANG_.call(null,out);
var state_23347__$1 = (function (){var statearr_23365 = state_23347;
(statearr_23365[(13)] = inst_23340);

return statearr_23365;
})();
var statearr_23366_23387 = state_23347__$1;
(statearr_23366_23387[(2)] = inst_23341);

(statearr_23366_23387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (10))){
var inst_23330 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23367_23388 = state_23347__$1;
(statearr_23367_23388[(2)] = inst_23330);

(statearr_23367_23388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (8))){
var inst_23315 = (state_23347[(10)]);
var inst_23307 = (state_23347[(7)]);
var inst_23311 = (state_23347[(9)]);
var inst_23320 = inst_23307.push(inst_23311);
var tmp23364 = inst_23307;
var inst_23307__$1 = tmp23364;
var inst_23308 = inst_23315;
var state_23347__$1 = (function (){var statearr_23368 = state_23347;
(statearr_23368[(14)] = inst_23320);

(statearr_23368[(7)] = inst_23307__$1);

(statearr_23368[(8)] = inst_23308);

return statearr_23368;
})();
var statearr_23369_23389 = state_23347__$1;
(statearr_23369_23389[(2)] = null);

(statearr_23369_23389[(1)] = (2));


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
});})(c__19607__auto___23375,out))
;
return ((function (switch__19440__auto__,c__19607__auto___23375,out){
return (function() {
var cljs$core$async$state_machine__19441__auto__ = null;
var cljs$core$async$state_machine__19441__auto____0 = (function (){
var statearr_23370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23370[(0)] = cljs$core$async$state_machine__19441__auto__);

(statearr_23370[(1)] = (1));

return statearr_23370;
});
var cljs$core$async$state_machine__19441__auto____1 = (function (state_23347){
while(true){
var ret_value__19442__auto__ = (function (){try{while(true){
var result__19443__auto__ = switch__19440__auto__.call(null,state_23347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19443__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19443__auto__;
}
break;
}
}catch (e23371){if((e23371 instanceof Object)){
var ex__19444__auto__ = e23371;
var statearr_23372_23390 = state_23347;
(statearr_23372_23390[(5)] = ex__19444__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19442__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23391 = state_23347;
state_23347 = G__23391;
continue;
} else {
return ret_value__19442__auto__;
}
break;
}
});
cljs$core$async$state_machine__19441__auto__ = function(state_23347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19441__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19441__auto____1.call(this,state_23347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19441__auto____0;
cljs$core$async$state_machine__19441__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19441__auto____1;
return cljs$core$async$state_machine__19441__auto__;
})()
;})(switch__19440__auto__,c__19607__auto___23375,out))
})();
var state__19609__auto__ = (function (){var statearr_23373 = f__19608__auto__.call(null);
(statearr_23373[(6)] = c__19607__auto___23375);

return statearr_23373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19609__auto__);
});})(c__19607__auto___23375,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
