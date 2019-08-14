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
var G__19312 = arguments.length;
switch (G__19312) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19313 = (function (f,blockable,meta19314){
this.f = f;
this.blockable = blockable;
this.meta19314 = meta19314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19315,meta19314__$1){
var self__ = this;
var _19315__$1 = this;
return (new cljs.core.async.t_cljs$core$async19313(self__.f,self__.blockable,meta19314__$1));
});

cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19315){
var self__ = this;
var _19315__$1 = this;
return self__.meta19314;
});

cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19314","meta19314",1193109422,null)], null);
});

cljs.core.async.t_cljs$core$async19313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19313";

cljs.core.async.t_cljs$core$async19313.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async19313");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19313.
 */
cljs.core.async.__GT_t_cljs$core$async19313 = (function cljs$core$async$__GT_t_cljs$core$async19313(f__$1,blockable__$1,meta19314){
return (new cljs.core.async.t_cljs$core$async19313(f__$1,blockable__$1,meta19314));
});

}

return (new cljs.core.async.t_cljs$core$async19313(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19319 = arguments.length;
switch (G__19319) {
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
var G__19322 = arguments.length;
switch (G__19322) {
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
var G__19325 = arguments.length;
switch (G__19325) {
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
var val_19327 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19327);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19327,ret){
return (function (){
return fn1.call(null,val_19327);
});})(val_19327,ret))
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
var G__19329 = arguments.length;
switch (G__19329) {
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
var n__4607__auto___19331 = n;
var x_19332 = (0);
while(true){
if((x_19332 < n__4607__auto___19331)){
(a[x_19332] = (0));

var G__19333 = (x_19332 + (1));
x_19332 = G__19333;
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

var G__19334 = (i + (1));
i = G__19334;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19335 = (function (flag,meta19336){
this.flag = flag;
this.meta19336 = meta19336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19337,meta19336__$1){
var self__ = this;
var _19337__$1 = this;
return (new cljs.core.async.t_cljs$core$async19335(self__.flag,meta19336__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19337){
var self__ = this;
var _19337__$1 = this;
return self__.meta19336;
});})(flag))
;

cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19335.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19336","meta19336",2133187068,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19335";

cljs.core.async.t_cljs$core$async19335.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async19335");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19335.
 */
cljs.core.async.__GT_t_cljs$core$async19335 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19335(flag__$1,meta19336){
return (new cljs.core.async.t_cljs$core$async19335(flag__$1,meta19336));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19335(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19338 = (function (flag,cb,meta19339){
this.flag = flag;
this.cb = cb;
this.meta19339 = meta19339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19340,meta19339__$1){
var self__ = this;
var _19340__$1 = this;
return (new cljs.core.async.t_cljs$core$async19338(self__.flag,self__.cb,meta19339__$1));
});

cljs.core.async.t_cljs$core$async19338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19340){
var self__ = this;
var _19340__$1 = this;
return self__.meta19339;
});

cljs.core.async.t_cljs$core$async19338.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19338.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19339","meta19339",584956515,null)], null);
});

cljs.core.async.t_cljs$core$async19338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19338";

cljs.core.async.t_cljs$core$async19338.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async19338");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19338.
 */
cljs.core.async.__GT_t_cljs$core$async19338 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19338(flag__$1,cb__$1,meta19339){
return (new cljs.core.async.t_cljs$core$async19338(flag__$1,cb__$1,meta19339));
});

}

return (new cljs.core.async.t_cljs$core$async19338(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19341_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19341_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19342_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19342_SHARP_,port], null));
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
var G__19343 = (i + (1));
i = G__19343;
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
var len__4730__auto___19349 = arguments.length;
var i__4731__auto___19350 = (0);
while(true){
if((i__4731__auto___19350 < len__4730__auto___19349)){
args__4736__auto__.push((arguments[i__4731__auto___19350]));

var G__19351 = (i__4731__auto___19350 + (1));
i__4731__auto___19350 = G__19351;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19346){
var map__19347 = p__19346;
var map__19347__$1 = (((((!((map__19347 == null))))?(((((map__19347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19347):map__19347);
var opts = map__19347__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19344){
var G__19345 = cljs.core.first.call(null,seq19344);
var seq19344__$1 = cljs.core.next.call(null,seq19344);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19345,seq19344__$1);
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
var G__19353 = arguments.length;
switch (G__19353) {
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
var c__19252__auto___19399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___19399){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___19399){
return (function (state_19377){
var state_val_19378 = (state_19377[(1)]);
if((state_val_19378 === (7))){
var inst_19373 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
var statearr_19379_19400 = state_19377__$1;
(statearr_19379_19400[(2)] = inst_19373);

(statearr_19379_19400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (1))){
var state_19377__$1 = state_19377;
var statearr_19380_19401 = state_19377__$1;
(statearr_19380_19401[(2)] = null);

(statearr_19380_19401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (4))){
var inst_19356 = (state_19377[(7)]);
var inst_19356__$1 = (state_19377[(2)]);
var inst_19357 = (inst_19356__$1 == null);
var state_19377__$1 = (function (){var statearr_19381 = state_19377;
(statearr_19381[(7)] = inst_19356__$1);

return statearr_19381;
})();
if(cljs.core.truth_(inst_19357)){
var statearr_19382_19402 = state_19377__$1;
(statearr_19382_19402[(1)] = (5));

} else {
var statearr_19383_19403 = state_19377__$1;
(statearr_19383_19403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (13))){
var state_19377__$1 = state_19377;
var statearr_19384_19404 = state_19377__$1;
(statearr_19384_19404[(2)] = null);

(statearr_19384_19404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (6))){
var inst_19356 = (state_19377[(7)]);
var state_19377__$1 = state_19377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19377__$1,(11),to,inst_19356);
} else {
if((state_val_19378 === (3))){
var inst_19375 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19377__$1,inst_19375);
} else {
if((state_val_19378 === (12))){
var state_19377__$1 = state_19377;
var statearr_19385_19405 = state_19377__$1;
(statearr_19385_19405[(2)] = null);

(statearr_19385_19405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (2))){
var state_19377__$1 = state_19377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19377__$1,(4),from);
} else {
if((state_val_19378 === (11))){
var inst_19366 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
if(cljs.core.truth_(inst_19366)){
var statearr_19386_19406 = state_19377__$1;
(statearr_19386_19406[(1)] = (12));

} else {
var statearr_19387_19407 = state_19377__$1;
(statearr_19387_19407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (9))){
var state_19377__$1 = state_19377;
var statearr_19388_19408 = state_19377__$1;
(statearr_19388_19408[(2)] = null);

(statearr_19388_19408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (5))){
var state_19377__$1 = state_19377;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19389_19409 = state_19377__$1;
(statearr_19389_19409[(1)] = (8));

} else {
var statearr_19390_19410 = state_19377__$1;
(statearr_19390_19410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (14))){
var inst_19371 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
var statearr_19391_19411 = state_19377__$1;
(statearr_19391_19411[(2)] = inst_19371);

(statearr_19391_19411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (10))){
var inst_19363 = (state_19377[(2)]);
var state_19377__$1 = state_19377;
var statearr_19392_19412 = state_19377__$1;
(statearr_19392_19412[(2)] = inst_19363);

(statearr_19392_19412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19378 === (8))){
var inst_19360 = cljs.core.async.close_BANG_.call(null,to);
var state_19377__$1 = state_19377;
var statearr_19393_19413 = state_19377__$1;
(statearr_19393_19413[(2)] = inst_19360);

(statearr_19393_19413[(1)] = (10));


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
});})(c__19252__auto___19399))
;
return ((function (switch__19157__auto__,c__19252__auto___19399){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_19394 = [null,null,null,null,null,null,null,null];
(statearr_19394[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_19394[(1)] = (1));

return statearr_19394;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_19377){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19395){if((e19395 instanceof Object)){
var ex__19161__auto__ = e19395;
var statearr_19396_19414 = state_19377;
(statearr_19396_19414[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19415 = state_19377;
state_19377 = G__19415;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_19377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_19377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___19399))
})();
var state__19254__auto__ = (function (){var statearr_19397 = f__19253__auto__.call(null);
(statearr_19397[(6)] = c__19252__auto___19399);

return statearr_19397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___19399))
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
return (function (p__19416){
var vec__19417 = p__19416;
var v = cljs.core.nth.call(null,vec__19417,(0),null);
var p = cljs.core.nth.call(null,vec__19417,(1),null);
var job = vec__19417;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19252__auto___19588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___19588,res,vec__19417,v,p,job,jobs,results){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___19588,res,vec__19417,v,p,job,jobs,results){
return (function (state_19424){
var state_val_19425 = (state_19424[(1)]);
if((state_val_19425 === (1))){
var state_19424__$1 = state_19424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19424__$1,(2),res,v);
} else {
if((state_val_19425 === (2))){
var inst_19421 = (state_19424[(2)]);
var inst_19422 = cljs.core.async.close_BANG_.call(null,res);
var state_19424__$1 = (function (){var statearr_19426 = state_19424;
(statearr_19426[(7)] = inst_19421);

return statearr_19426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19424__$1,inst_19422);
} else {
return null;
}
}
});})(c__19252__auto___19588,res,vec__19417,v,p,job,jobs,results))
;
return ((function (switch__19157__auto__,c__19252__auto___19588,res,vec__19417,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0 = (function (){
var statearr_19427 = [null,null,null,null,null,null,null,null];
(statearr_19427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__);

(statearr_19427[(1)] = (1));

return statearr_19427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1 = (function (state_19424){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19428){if((e19428 instanceof Object)){
var ex__19161__auto__ = e19428;
var statearr_19429_19589 = state_19424;
(statearr_19429_19589[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19590 = state_19424;
state_19424 = G__19590;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = function(state_19424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1.call(this,state_19424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___19588,res,vec__19417,v,p,job,jobs,results))
})();
var state__19254__auto__ = (function (){var statearr_19430 = f__19253__auto__.call(null);
(statearr_19430[(6)] = c__19252__auto___19588);

return statearr_19430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___19588,res,vec__19417,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19431){
var vec__19432 = p__19431;
var v = cljs.core.nth.call(null,vec__19432,(0),null);
var p = cljs.core.nth.call(null,vec__19432,(1),null);
var job = vec__19432;
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
var n__4607__auto___19591 = n;
var __19592 = (0);
while(true){
if((__19592 < n__4607__auto___19591)){
var G__19435_19593 = type;
var G__19435_19594__$1 = (((G__19435_19593 instanceof cljs.core.Keyword))?G__19435_19593.fqn:null);
switch (G__19435_19594__$1) {
case "compute":
var c__19252__auto___19596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19592,c__19252__auto___19596,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (__19592,c__19252__auto___19596,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async){
return (function (state_19448){
var state_val_19449 = (state_19448[(1)]);
if((state_val_19449 === (1))){
var state_19448__$1 = state_19448;
var statearr_19450_19597 = state_19448__$1;
(statearr_19450_19597[(2)] = null);

(statearr_19450_19597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (2))){
var state_19448__$1 = state_19448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19448__$1,(4),jobs);
} else {
if((state_val_19449 === (3))){
var inst_19446 = (state_19448[(2)]);
var state_19448__$1 = state_19448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19448__$1,inst_19446);
} else {
if((state_val_19449 === (4))){
var inst_19438 = (state_19448[(2)]);
var inst_19439 = process.call(null,inst_19438);
var state_19448__$1 = state_19448;
if(cljs.core.truth_(inst_19439)){
var statearr_19451_19598 = state_19448__$1;
(statearr_19451_19598[(1)] = (5));

} else {
var statearr_19452_19599 = state_19448__$1;
(statearr_19452_19599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (5))){
var state_19448__$1 = state_19448;
var statearr_19453_19600 = state_19448__$1;
(statearr_19453_19600[(2)] = null);

(statearr_19453_19600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (6))){
var state_19448__$1 = state_19448;
var statearr_19454_19601 = state_19448__$1;
(statearr_19454_19601[(2)] = null);

(statearr_19454_19601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19449 === (7))){
var inst_19444 = (state_19448[(2)]);
var state_19448__$1 = state_19448;
var statearr_19455_19602 = state_19448__$1;
(statearr_19455_19602[(2)] = inst_19444);

(statearr_19455_19602[(1)] = (3));


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
});})(__19592,c__19252__auto___19596,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async))
;
return ((function (__19592,switch__19157__auto__,c__19252__auto___19596,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0 = (function (){
var statearr_19456 = [null,null,null,null,null,null,null];
(statearr_19456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__);

(statearr_19456[(1)] = (1));

return statearr_19456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1 = (function (state_19448){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19457){if((e19457 instanceof Object)){
var ex__19161__auto__ = e19457;
var statearr_19458_19603 = state_19448;
(statearr_19458_19603[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19604 = state_19448;
state_19448 = G__19604;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = function(state_19448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1.call(this,state_19448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__;
})()
;})(__19592,switch__19157__auto__,c__19252__auto___19596,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async))
})();
var state__19254__auto__ = (function (){var statearr_19459 = f__19253__auto__.call(null);
(statearr_19459[(6)] = c__19252__auto___19596);

return statearr_19459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(__19592,c__19252__auto___19596,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async))
);


break;
case "async":
var c__19252__auto___19605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19592,c__19252__auto___19605,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (__19592,c__19252__auto___19605,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async){
return (function (state_19472){
var state_val_19473 = (state_19472[(1)]);
if((state_val_19473 === (1))){
var state_19472__$1 = state_19472;
var statearr_19474_19606 = state_19472__$1;
(statearr_19474_19606[(2)] = null);

(statearr_19474_19606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19473 === (2))){
var state_19472__$1 = state_19472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19472__$1,(4),jobs);
} else {
if((state_val_19473 === (3))){
var inst_19470 = (state_19472[(2)]);
var state_19472__$1 = state_19472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19472__$1,inst_19470);
} else {
if((state_val_19473 === (4))){
var inst_19462 = (state_19472[(2)]);
var inst_19463 = async.call(null,inst_19462);
var state_19472__$1 = state_19472;
if(cljs.core.truth_(inst_19463)){
var statearr_19475_19607 = state_19472__$1;
(statearr_19475_19607[(1)] = (5));

} else {
var statearr_19476_19608 = state_19472__$1;
(statearr_19476_19608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19473 === (5))){
var state_19472__$1 = state_19472;
var statearr_19477_19609 = state_19472__$1;
(statearr_19477_19609[(2)] = null);

(statearr_19477_19609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19473 === (6))){
var state_19472__$1 = state_19472;
var statearr_19478_19610 = state_19472__$1;
(statearr_19478_19610[(2)] = null);

(statearr_19478_19610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19473 === (7))){
var inst_19468 = (state_19472[(2)]);
var state_19472__$1 = state_19472;
var statearr_19479_19611 = state_19472__$1;
(statearr_19479_19611[(2)] = inst_19468);

(statearr_19479_19611[(1)] = (3));


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
});})(__19592,c__19252__auto___19605,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async))
;
return ((function (__19592,switch__19157__auto__,c__19252__auto___19605,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0 = (function (){
var statearr_19480 = [null,null,null,null,null,null,null];
(statearr_19480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__);

(statearr_19480[(1)] = (1));

return statearr_19480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1 = (function (state_19472){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19481){if((e19481 instanceof Object)){
var ex__19161__auto__ = e19481;
var statearr_19482_19612 = state_19472;
(statearr_19482_19612[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19613 = state_19472;
state_19472 = G__19613;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = function(state_19472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1.call(this,state_19472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__;
})()
;})(__19592,switch__19157__auto__,c__19252__auto___19605,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async))
})();
var state__19254__auto__ = (function (){var statearr_19483 = f__19253__auto__.call(null);
(statearr_19483[(6)] = c__19252__auto___19605);

return statearr_19483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(__19592,c__19252__auto___19605,G__19435_19593,G__19435_19594__$1,n__4607__auto___19591,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19435_19594__$1)].join('')));

}

var G__19614 = (__19592 + (1));
__19592 = G__19614;
continue;
} else {
}
break;
}

var c__19252__auto___19615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___19615,jobs,results,process,async){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___19615,jobs,results,process,async){
return (function (state_19505){
var state_val_19506 = (state_19505[(1)]);
if((state_val_19506 === (7))){
var inst_19501 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
var statearr_19507_19616 = state_19505__$1;
(statearr_19507_19616[(2)] = inst_19501);

(statearr_19507_19616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (1))){
var state_19505__$1 = state_19505;
var statearr_19508_19617 = state_19505__$1;
(statearr_19508_19617[(2)] = null);

(statearr_19508_19617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (4))){
var inst_19486 = (state_19505[(7)]);
var inst_19486__$1 = (state_19505[(2)]);
var inst_19487 = (inst_19486__$1 == null);
var state_19505__$1 = (function (){var statearr_19509 = state_19505;
(statearr_19509[(7)] = inst_19486__$1);

return statearr_19509;
})();
if(cljs.core.truth_(inst_19487)){
var statearr_19510_19618 = state_19505__$1;
(statearr_19510_19618[(1)] = (5));

} else {
var statearr_19511_19619 = state_19505__$1;
(statearr_19511_19619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (6))){
var inst_19486 = (state_19505[(7)]);
var inst_19491 = (state_19505[(8)]);
var inst_19491__$1 = cljs.core.async.chan.call(null,(1));
var inst_19492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19493 = [inst_19486,inst_19491__$1];
var inst_19494 = (new cljs.core.PersistentVector(null,2,(5),inst_19492,inst_19493,null));
var state_19505__$1 = (function (){var statearr_19512 = state_19505;
(statearr_19512[(8)] = inst_19491__$1);

return statearr_19512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19505__$1,(8),jobs,inst_19494);
} else {
if((state_val_19506 === (3))){
var inst_19503 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19505__$1,inst_19503);
} else {
if((state_val_19506 === (2))){
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19505__$1,(4),from);
} else {
if((state_val_19506 === (9))){
var inst_19498 = (state_19505[(2)]);
var state_19505__$1 = (function (){var statearr_19513 = state_19505;
(statearr_19513[(9)] = inst_19498);

return statearr_19513;
})();
var statearr_19514_19620 = state_19505__$1;
(statearr_19514_19620[(2)] = null);

(statearr_19514_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (5))){
var inst_19489 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19505__$1 = state_19505;
var statearr_19515_19621 = state_19505__$1;
(statearr_19515_19621[(2)] = inst_19489);

(statearr_19515_19621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (8))){
var inst_19491 = (state_19505[(8)]);
var inst_19496 = (state_19505[(2)]);
var state_19505__$1 = (function (){var statearr_19516 = state_19505;
(statearr_19516[(10)] = inst_19496);

return statearr_19516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19505__$1,(9),results,inst_19491);
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
});})(c__19252__auto___19615,jobs,results,process,async))
;
return ((function (switch__19157__auto__,c__19252__auto___19615,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0 = (function (){
var statearr_19517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__);

(statearr_19517[(1)] = (1));

return statearr_19517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1 = (function (state_19505){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19518){if((e19518 instanceof Object)){
var ex__19161__auto__ = e19518;
var statearr_19519_19622 = state_19505;
(statearr_19519_19622[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19623 = state_19505;
state_19505 = G__19623;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = function(state_19505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1.call(this,state_19505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___19615,jobs,results,process,async))
})();
var state__19254__auto__ = (function (){var statearr_19520 = f__19253__auto__.call(null);
(statearr_19520[(6)] = c__19252__auto___19615);

return statearr_19520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___19615,jobs,results,process,async))
);


var c__19252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto__,jobs,results,process,async){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto__,jobs,results,process,async){
return (function (state_19558){
var state_val_19559 = (state_19558[(1)]);
if((state_val_19559 === (7))){
var inst_19554 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
var statearr_19560_19624 = state_19558__$1;
(statearr_19560_19624[(2)] = inst_19554);

(statearr_19560_19624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (20))){
var state_19558__$1 = state_19558;
var statearr_19561_19625 = state_19558__$1;
(statearr_19561_19625[(2)] = null);

(statearr_19561_19625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (1))){
var state_19558__$1 = state_19558;
var statearr_19562_19626 = state_19558__$1;
(statearr_19562_19626[(2)] = null);

(statearr_19562_19626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (4))){
var inst_19523 = (state_19558[(7)]);
var inst_19523__$1 = (state_19558[(2)]);
var inst_19524 = (inst_19523__$1 == null);
var state_19558__$1 = (function (){var statearr_19563 = state_19558;
(statearr_19563[(7)] = inst_19523__$1);

return statearr_19563;
})();
if(cljs.core.truth_(inst_19524)){
var statearr_19564_19627 = state_19558__$1;
(statearr_19564_19627[(1)] = (5));

} else {
var statearr_19565_19628 = state_19558__$1;
(statearr_19565_19628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (15))){
var inst_19536 = (state_19558[(8)]);
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19558__$1,(18),to,inst_19536);
} else {
if((state_val_19559 === (21))){
var inst_19549 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
var statearr_19566_19629 = state_19558__$1;
(statearr_19566_19629[(2)] = inst_19549);

(statearr_19566_19629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (13))){
var inst_19551 = (state_19558[(2)]);
var state_19558__$1 = (function (){var statearr_19567 = state_19558;
(statearr_19567[(9)] = inst_19551);

return statearr_19567;
})();
var statearr_19568_19630 = state_19558__$1;
(statearr_19568_19630[(2)] = null);

(statearr_19568_19630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (6))){
var inst_19523 = (state_19558[(7)]);
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19558__$1,(11),inst_19523);
} else {
if((state_val_19559 === (17))){
var inst_19544 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
if(cljs.core.truth_(inst_19544)){
var statearr_19569_19631 = state_19558__$1;
(statearr_19569_19631[(1)] = (19));

} else {
var statearr_19570_19632 = state_19558__$1;
(statearr_19570_19632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (3))){
var inst_19556 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19558__$1,inst_19556);
} else {
if((state_val_19559 === (12))){
var inst_19533 = (state_19558[(10)]);
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19558__$1,(14),inst_19533);
} else {
if((state_val_19559 === (2))){
var state_19558__$1 = state_19558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19558__$1,(4),results);
} else {
if((state_val_19559 === (19))){
var state_19558__$1 = state_19558;
var statearr_19571_19633 = state_19558__$1;
(statearr_19571_19633[(2)] = null);

(statearr_19571_19633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (11))){
var inst_19533 = (state_19558[(2)]);
var state_19558__$1 = (function (){var statearr_19572 = state_19558;
(statearr_19572[(10)] = inst_19533);

return statearr_19572;
})();
var statearr_19573_19634 = state_19558__$1;
(statearr_19573_19634[(2)] = null);

(statearr_19573_19634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (9))){
var state_19558__$1 = state_19558;
var statearr_19574_19635 = state_19558__$1;
(statearr_19574_19635[(2)] = null);

(statearr_19574_19635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (5))){
var state_19558__$1 = state_19558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19575_19636 = state_19558__$1;
(statearr_19575_19636[(1)] = (8));

} else {
var statearr_19576_19637 = state_19558__$1;
(statearr_19576_19637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (14))){
var inst_19538 = (state_19558[(11)]);
var inst_19536 = (state_19558[(8)]);
var inst_19536__$1 = (state_19558[(2)]);
var inst_19537 = (inst_19536__$1 == null);
var inst_19538__$1 = cljs.core.not.call(null,inst_19537);
var state_19558__$1 = (function (){var statearr_19577 = state_19558;
(statearr_19577[(11)] = inst_19538__$1);

(statearr_19577[(8)] = inst_19536__$1);

return statearr_19577;
})();
if(inst_19538__$1){
var statearr_19578_19638 = state_19558__$1;
(statearr_19578_19638[(1)] = (15));

} else {
var statearr_19579_19639 = state_19558__$1;
(statearr_19579_19639[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (16))){
var inst_19538 = (state_19558[(11)]);
var state_19558__$1 = state_19558;
var statearr_19580_19640 = state_19558__$1;
(statearr_19580_19640[(2)] = inst_19538);

(statearr_19580_19640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (10))){
var inst_19530 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
var statearr_19581_19641 = state_19558__$1;
(statearr_19581_19641[(2)] = inst_19530);

(statearr_19581_19641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (18))){
var inst_19541 = (state_19558[(2)]);
var state_19558__$1 = state_19558;
var statearr_19582_19642 = state_19558__$1;
(statearr_19582_19642[(2)] = inst_19541);

(statearr_19582_19642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19559 === (8))){
var inst_19527 = cljs.core.async.close_BANG_.call(null,to);
var state_19558__$1 = state_19558;
var statearr_19583_19643 = state_19558__$1;
(statearr_19583_19643[(2)] = inst_19527);

(statearr_19583_19643[(1)] = (10));


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
});})(c__19252__auto__,jobs,results,process,async))
;
return ((function (switch__19157__auto__,c__19252__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0 = (function (){
var statearr_19584 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__);

(statearr_19584[(1)] = (1));

return statearr_19584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1 = (function (state_19558){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19585){if((e19585 instanceof Object)){
var ex__19161__auto__ = e19585;
var statearr_19586_19644 = state_19558;
(statearr_19586_19644[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19645 = state_19558;
state_19558 = G__19645;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__ = function(state_19558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1.call(this,state_19558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19158__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto__,jobs,results,process,async))
})();
var state__19254__auto__ = (function (){var statearr_19587 = f__19253__auto__.call(null);
(statearr_19587[(6)] = c__19252__auto__);

return statearr_19587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto__,jobs,results,process,async))
);

return c__19252__auto__;
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
var G__19647 = arguments.length;
switch (G__19647) {
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
var G__19650 = arguments.length;
switch (G__19650) {
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
var G__19653 = arguments.length;
switch (G__19653) {
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
var c__19252__auto___19702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___19702,tc,fc){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___19702,tc,fc){
return (function (state_19679){
var state_val_19680 = (state_19679[(1)]);
if((state_val_19680 === (7))){
var inst_19675 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
var statearr_19681_19703 = state_19679__$1;
(statearr_19681_19703[(2)] = inst_19675);

(statearr_19681_19703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (1))){
var state_19679__$1 = state_19679;
var statearr_19682_19704 = state_19679__$1;
(statearr_19682_19704[(2)] = null);

(statearr_19682_19704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (4))){
var inst_19656 = (state_19679[(7)]);
var inst_19656__$1 = (state_19679[(2)]);
var inst_19657 = (inst_19656__$1 == null);
var state_19679__$1 = (function (){var statearr_19683 = state_19679;
(statearr_19683[(7)] = inst_19656__$1);

return statearr_19683;
})();
if(cljs.core.truth_(inst_19657)){
var statearr_19684_19705 = state_19679__$1;
(statearr_19684_19705[(1)] = (5));

} else {
var statearr_19685_19706 = state_19679__$1;
(statearr_19685_19706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (13))){
var state_19679__$1 = state_19679;
var statearr_19686_19707 = state_19679__$1;
(statearr_19686_19707[(2)] = null);

(statearr_19686_19707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (6))){
var inst_19656 = (state_19679[(7)]);
var inst_19662 = p.call(null,inst_19656);
var state_19679__$1 = state_19679;
if(cljs.core.truth_(inst_19662)){
var statearr_19687_19708 = state_19679__$1;
(statearr_19687_19708[(1)] = (9));

} else {
var statearr_19688_19709 = state_19679__$1;
(statearr_19688_19709[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (3))){
var inst_19677 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19679__$1,inst_19677);
} else {
if((state_val_19680 === (12))){
var state_19679__$1 = state_19679;
var statearr_19689_19710 = state_19679__$1;
(statearr_19689_19710[(2)] = null);

(statearr_19689_19710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (2))){
var state_19679__$1 = state_19679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19679__$1,(4),ch);
} else {
if((state_val_19680 === (11))){
var inst_19656 = (state_19679[(7)]);
var inst_19666 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19679__$1,(8),inst_19666,inst_19656);
} else {
if((state_val_19680 === (9))){
var state_19679__$1 = state_19679;
var statearr_19690_19711 = state_19679__$1;
(statearr_19690_19711[(2)] = tc);

(statearr_19690_19711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (5))){
var inst_19659 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19660 = cljs.core.async.close_BANG_.call(null,fc);
var state_19679__$1 = (function (){var statearr_19691 = state_19679;
(statearr_19691[(8)] = inst_19659);

return statearr_19691;
})();
var statearr_19692_19712 = state_19679__$1;
(statearr_19692_19712[(2)] = inst_19660);

(statearr_19692_19712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (14))){
var inst_19673 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
var statearr_19693_19713 = state_19679__$1;
(statearr_19693_19713[(2)] = inst_19673);

(statearr_19693_19713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (10))){
var state_19679__$1 = state_19679;
var statearr_19694_19714 = state_19679__$1;
(statearr_19694_19714[(2)] = fc);

(statearr_19694_19714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19680 === (8))){
var inst_19668 = (state_19679[(2)]);
var state_19679__$1 = state_19679;
if(cljs.core.truth_(inst_19668)){
var statearr_19695_19715 = state_19679__$1;
(statearr_19695_19715[(1)] = (12));

} else {
var statearr_19696_19716 = state_19679__$1;
(statearr_19696_19716[(1)] = (13));

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
});})(c__19252__auto___19702,tc,fc))
;
return ((function (switch__19157__auto__,c__19252__auto___19702,tc,fc){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_19697 = [null,null,null,null,null,null,null,null,null];
(statearr_19697[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_19697[(1)] = (1));

return statearr_19697;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_19679){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19698){if((e19698 instanceof Object)){
var ex__19161__auto__ = e19698;
var statearr_19699_19717 = state_19679;
(statearr_19699_19717[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19718 = state_19679;
state_19679 = G__19718;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_19679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_19679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___19702,tc,fc))
})();
var state__19254__auto__ = (function (){var statearr_19700 = f__19253__auto__.call(null);
(statearr_19700[(6)] = c__19252__auto___19702);

return statearr_19700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___19702,tc,fc))
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
var c__19252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto__){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto__){
return (function (state_19739){
var state_val_19740 = (state_19739[(1)]);
if((state_val_19740 === (7))){
var inst_19735 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
var statearr_19741_19759 = state_19739__$1;
(statearr_19741_19759[(2)] = inst_19735);

(statearr_19741_19759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (1))){
var inst_19719 = init;
var state_19739__$1 = (function (){var statearr_19742 = state_19739;
(statearr_19742[(7)] = inst_19719);

return statearr_19742;
})();
var statearr_19743_19760 = state_19739__$1;
(statearr_19743_19760[(2)] = null);

(statearr_19743_19760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (4))){
var inst_19722 = (state_19739[(8)]);
var inst_19722__$1 = (state_19739[(2)]);
var inst_19723 = (inst_19722__$1 == null);
var state_19739__$1 = (function (){var statearr_19744 = state_19739;
(statearr_19744[(8)] = inst_19722__$1);

return statearr_19744;
})();
if(cljs.core.truth_(inst_19723)){
var statearr_19745_19761 = state_19739__$1;
(statearr_19745_19761[(1)] = (5));

} else {
var statearr_19746_19762 = state_19739__$1;
(statearr_19746_19762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (6))){
var inst_19719 = (state_19739[(7)]);
var inst_19726 = (state_19739[(9)]);
var inst_19722 = (state_19739[(8)]);
var inst_19726__$1 = f.call(null,inst_19719,inst_19722);
var inst_19727 = cljs.core.reduced_QMARK_.call(null,inst_19726__$1);
var state_19739__$1 = (function (){var statearr_19747 = state_19739;
(statearr_19747[(9)] = inst_19726__$1);

return statearr_19747;
})();
if(inst_19727){
var statearr_19748_19763 = state_19739__$1;
(statearr_19748_19763[(1)] = (8));

} else {
var statearr_19749_19764 = state_19739__$1;
(statearr_19749_19764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (3))){
var inst_19737 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19739__$1,inst_19737);
} else {
if((state_val_19740 === (2))){
var state_19739__$1 = state_19739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19739__$1,(4),ch);
} else {
if((state_val_19740 === (9))){
var inst_19726 = (state_19739[(9)]);
var inst_19719 = inst_19726;
var state_19739__$1 = (function (){var statearr_19750 = state_19739;
(statearr_19750[(7)] = inst_19719);

return statearr_19750;
})();
var statearr_19751_19765 = state_19739__$1;
(statearr_19751_19765[(2)] = null);

(statearr_19751_19765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (5))){
var inst_19719 = (state_19739[(7)]);
var state_19739__$1 = state_19739;
var statearr_19752_19766 = state_19739__$1;
(statearr_19752_19766[(2)] = inst_19719);

(statearr_19752_19766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (10))){
var inst_19733 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
var statearr_19753_19767 = state_19739__$1;
(statearr_19753_19767[(2)] = inst_19733);

(statearr_19753_19767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (8))){
var inst_19726 = (state_19739[(9)]);
var inst_19729 = cljs.core.deref.call(null,inst_19726);
var state_19739__$1 = state_19739;
var statearr_19754_19768 = state_19739__$1;
(statearr_19754_19768[(2)] = inst_19729);

(statearr_19754_19768[(1)] = (10));


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
});})(c__19252__auto__))
;
return ((function (switch__19157__auto__,c__19252__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19158__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19158__auto____0 = (function (){
var statearr_19755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19755[(0)] = cljs$core$async$reduce_$_state_machine__19158__auto__);

(statearr_19755[(1)] = (1));

return statearr_19755;
});
var cljs$core$async$reduce_$_state_machine__19158__auto____1 = (function (state_19739){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19756){if((e19756 instanceof Object)){
var ex__19161__auto__ = e19756;
var statearr_19757_19769 = state_19739;
(statearr_19757_19769[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19770 = state_19739;
state_19739 = G__19770;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19158__auto__ = function(state_19739){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19158__auto____1.call(this,state_19739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19158__auto____0;
cljs$core$async$reduce_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19158__auto____1;
return cljs$core$async$reduce_$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto__))
})();
var state__19254__auto__ = (function (){var statearr_19758 = f__19253__auto__.call(null);
(statearr_19758[(6)] = c__19252__auto__);

return statearr_19758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto__))
);

return c__19252__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__19252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto__,f__$1){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto__,f__$1){
return (function (state_19776){
var state_val_19777 = (state_19776[(1)]);
if((state_val_19777 === (1))){
var inst_19771 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19776__$1,(2),inst_19771);
} else {
if((state_val_19777 === (2))){
var inst_19773 = (state_19776[(2)]);
var inst_19774 = f__$1.call(null,inst_19773);
var state_19776__$1 = state_19776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19776__$1,inst_19774);
} else {
return null;
}
}
});})(c__19252__auto__,f__$1))
;
return ((function (switch__19157__auto__,c__19252__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__19158__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19158__auto____0 = (function (){
var statearr_19778 = [null,null,null,null,null,null,null];
(statearr_19778[(0)] = cljs$core$async$transduce_$_state_machine__19158__auto__);

(statearr_19778[(1)] = (1));

return statearr_19778;
});
var cljs$core$async$transduce_$_state_machine__19158__auto____1 = (function (state_19776){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19779){if((e19779 instanceof Object)){
var ex__19161__auto__ = e19779;
var statearr_19780_19782 = state_19776;
(statearr_19780_19782[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19783 = state_19776;
state_19776 = G__19783;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19158__auto__ = function(state_19776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19158__auto____1.call(this,state_19776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19158__auto____0;
cljs$core$async$transduce_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19158__auto____1;
return cljs$core$async$transduce_$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto__,f__$1))
})();
var state__19254__auto__ = (function (){var statearr_19781 = f__19253__auto__.call(null);
(statearr_19781[(6)] = c__19252__auto__);

return statearr_19781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto__,f__$1))
);

return c__19252__auto__;
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
var G__19785 = arguments.length;
switch (G__19785) {
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
var c__19252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto__){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto__){
return (function (state_19810){
var state_val_19811 = (state_19810[(1)]);
if((state_val_19811 === (7))){
var inst_19792 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19812_19833 = state_19810__$1;
(statearr_19812_19833[(2)] = inst_19792);

(statearr_19812_19833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (1))){
var inst_19786 = cljs.core.seq.call(null,coll);
var inst_19787 = inst_19786;
var state_19810__$1 = (function (){var statearr_19813 = state_19810;
(statearr_19813[(7)] = inst_19787);

return statearr_19813;
})();
var statearr_19814_19834 = state_19810__$1;
(statearr_19814_19834[(2)] = null);

(statearr_19814_19834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (4))){
var inst_19787 = (state_19810[(7)]);
var inst_19790 = cljs.core.first.call(null,inst_19787);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19810__$1,(7),ch,inst_19790);
} else {
if((state_val_19811 === (13))){
var inst_19804 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19815_19835 = state_19810__$1;
(statearr_19815_19835[(2)] = inst_19804);

(statearr_19815_19835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (6))){
var inst_19795 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19795)){
var statearr_19816_19836 = state_19810__$1;
(statearr_19816_19836[(1)] = (8));

} else {
var statearr_19817_19837 = state_19810__$1;
(statearr_19817_19837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (3))){
var inst_19808 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19810__$1,inst_19808);
} else {
if((state_val_19811 === (12))){
var state_19810__$1 = state_19810;
var statearr_19818_19838 = state_19810__$1;
(statearr_19818_19838[(2)] = null);

(statearr_19818_19838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (2))){
var inst_19787 = (state_19810[(7)]);
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19787)){
var statearr_19819_19839 = state_19810__$1;
(statearr_19819_19839[(1)] = (4));

} else {
var statearr_19820_19840 = state_19810__$1;
(statearr_19820_19840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (11))){
var inst_19801 = cljs.core.async.close_BANG_.call(null,ch);
var state_19810__$1 = state_19810;
var statearr_19821_19841 = state_19810__$1;
(statearr_19821_19841[(2)] = inst_19801);

(statearr_19821_19841[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (9))){
var state_19810__$1 = state_19810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19822_19842 = state_19810__$1;
(statearr_19822_19842[(1)] = (11));

} else {
var statearr_19823_19843 = state_19810__$1;
(statearr_19823_19843[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (5))){
var inst_19787 = (state_19810[(7)]);
var state_19810__$1 = state_19810;
var statearr_19824_19844 = state_19810__$1;
(statearr_19824_19844[(2)] = inst_19787);

(statearr_19824_19844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (10))){
var inst_19806 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19825_19845 = state_19810__$1;
(statearr_19825_19845[(2)] = inst_19806);

(statearr_19825_19845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (8))){
var inst_19787 = (state_19810[(7)]);
var inst_19797 = cljs.core.next.call(null,inst_19787);
var inst_19787__$1 = inst_19797;
var state_19810__$1 = (function (){var statearr_19826 = state_19810;
(statearr_19826[(7)] = inst_19787__$1);

return statearr_19826;
})();
var statearr_19827_19846 = state_19810__$1;
(statearr_19827_19846[(2)] = null);

(statearr_19827_19846[(1)] = (2));


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
});})(c__19252__auto__))
;
return ((function (switch__19157__auto__,c__19252__auto__){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_19828 = [null,null,null,null,null,null,null,null];
(statearr_19828[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_19828[(1)] = (1));

return statearr_19828;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_19810){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e19829){if((e19829 instanceof Object)){
var ex__19161__auto__ = e19829;
var statearr_19830_19847 = state_19810;
(statearr_19830_19847[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19848 = state_19810;
state_19810 = G__19848;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_19810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_19810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto__))
})();
var state__19254__auto__ = (function (){var statearr_19831 = f__19253__auto__.call(null);
(statearr_19831[(6)] = c__19252__auto__);

return statearr_19831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto__))
);

return c__19252__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19849 = (function (ch,cs,meta19850){
this.ch = ch;
this.cs = cs;
this.meta19850 = meta19850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19851,meta19850__$1){
var self__ = this;
var _19851__$1 = this;
return (new cljs.core.async.t_cljs$core$async19849(self__.ch,self__.cs,meta19850__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19851){
var self__ = this;
var _19851__$1 = this;
return self__.meta19850;
});})(cs))
;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19849.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19850","meta19850",-631118183,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19849";

cljs.core.async.t_cljs$core$async19849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async19849");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19849.
 */
cljs.core.async.__GT_t_cljs$core$async19849 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19849(ch__$1,cs__$1,meta19850){
return (new cljs.core.async.t_cljs$core$async19849(ch__$1,cs__$1,meta19850));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19849(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19252__auto___20071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20071,cs,m,dchan,dctr,done){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20071,cs,m,dchan,dctr,done){
return (function (state_19986){
var state_val_19987 = (state_19986[(1)]);
if((state_val_19987 === (7))){
var inst_19982 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_19988_20072 = state_19986__$1;
(statearr_19988_20072[(2)] = inst_19982);

(statearr_19988_20072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (20))){
var inst_19885 = (state_19986[(7)]);
var inst_19897 = cljs.core.first.call(null,inst_19885);
var inst_19898 = cljs.core.nth.call(null,inst_19897,(0),null);
var inst_19899 = cljs.core.nth.call(null,inst_19897,(1),null);
var state_19986__$1 = (function (){var statearr_19989 = state_19986;
(statearr_19989[(8)] = inst_19898);

return statearr_19989;
})();
if(cljs.core.truth_(inst_19899)){
var statearr_19990_20073 = state_19986__$1;
(statearr_19990_20073[(1)] = (22));

} else {
var statearr_19991_20074 = state_19986__$1;
(statearr_19991_20074[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (27))){
var inst_19927 = (state_19986[(9)]);
var inst_19929 = (state_19986[(10)]);
var inst_19854 = (state_19986[(11)]);
var inst_19934 = (state_19986[(12)]);
var inst_19934__$1 = cljs.core._nth.call(null,inst_19927,inst_19929);
var inst_19935 = cljs.core.async.put_BANG_.call(null,inst_19934__$1,inst_19854,done);
var state_19986__$1 = (function (){var statearr_19992 = state_19986;
(statearr_19992[(12)] = inst_19934__$1);

return statearr_19992;
})();
if(cljs.core.truth_(inst_19935)){
var statearr_19993_20075 = state_19986__$1;
(statearr_19993_20075[(1)] = (30));

} else {
var statearr_19994_20076 = state_19986__$1;
(statearr_19994_20076[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (1))){
var state_19986__$1 = state_19986;
var statearr_19995_20077 = state_19986__$1;
(statearr_19995_20077[(2)] = null);

(statearr_19995_20077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (24))){
var inst_19885 = (state_19986[(7)]);
var inst_19904 = (state_19986[(2)]);
var inst_19905 = cljs.core.next.call(null,inst_19885);
var inst_19863 = inst_19905;
var inst_19864 = null;
var inst_19865 = (0);
var inst_19866 = (0);
var state_19986__$1 = (function (){var statearr_19996 = state_19986;
(statearr_19996[(13)] = inst_19864);

(statearr_19996[(14)] = inst_19904);

(statearr_19996[(15)] = inst_19863);

(statearr_19996[(16)] = inst_19866);

(statearr_19996[(17)] = inst_19865);

return statearr_19996;
})();
var statearr_19997_20078 = state_19986__$1;
(statearr_19997_20078[(2)] = null);

(statearr_19997_20078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (39))){
var state_19986__$1 = state_19986;
var statearr_20001_20079 = state_19986__$1;
(statearr_20001_20079[(2)] = null);

(statearr_20001_20079[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (4))){
var inst_19854 = (state_19986[(11)]);
var inst_19854__$1 = (state_19986[(2)]);
var inst_19855 = (inst_19854__$1 == null);
var state_19986__$1 = (function (){var statearr_20002 = state_19986;
(statearr_20002[(11)] = inst_19854__$1);

return statearr_20002;
})();
if(cljs.core.truth_(inst_19855)){
var statearr_20003_20080 = state_19986__$1;
(statearr_20003_20080[(1)] = (5));

} else {
var statearr_20004_20081 = state_19986__$1;
(statearr_20004_20081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (15))){
var inst_19864 = (state_19986[(13)]);
var inst_19863 = (state_19986[(15)]);
var inst_19866 = (state_19986[(16)]);
var inst_19865 = (state_19986[(17)]);
var inst_19881 = (state_19986[(2)]);
var inst_19882 = (inst_19866 + (1));
var tmp19998 = inst_19864;
var tmp19999 = inst_19863;
var tmp20000 = inst_19865;
var inst_19863__$1 = tmp19999;
var inst_19864__$1 = tmp19998;
var inst_19865__$1 = tmp20000;
var inst_19866__$1 = inst_19882;
var state_19986__$1 = (function (){var statearr_20005 = state_19986;
(statearr_20005[(18)] = inst_19881);

(statearr_20005[(13)] = inst_19864__$1);

(statearr_20005[(15)] = inst_19863__$1);

(statearr_20005[(16)] = inst_19866__$1);

(statearr_20005[(17)] = inst_19865__$1);

return statearr_20005;
})();
var statearr_20006_20082 = state_19986__$1;
(statearr_20006_20082[(2)] = null);

(statearr_20006_20082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (21))){
var inst_19908 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20010_20083 = state_19986__$1;
(statearr_20010_20083[(2)] = inst_19908);

(statearr_20010_20083[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (31))){
var inst_19934 = (state_19986[(12)]);
var inst_19938 = done.call(null,null);
var inst_19939 = cljs.core.async.untap_STAR_.call(null,m,inst_19934);
var state_19986__$1 = (function (){var statearr_20011 = state_19986;
(statearr_20011[(19)] = inst_19938);

return statearr_20011;
})();
var statearr_20012_20084 = state_19986__$1;
(statearr_20012_20084[(2)] = inst_19939);

(statearr_20012_20084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (32))){
var inst_19927 = (state_19986[(9)]);
var inst_19926 = (state_19986[(20)]);
var inst_19929 = (state_19986[(10)]);
var inst_19928 = (state_19986[(21)]);
var inst_19941 = (state_19986[(2)]);
var inst_19942 = (inst_19929 + (1));
var tmp20007 = inst_19927;
var tmp20008 = inst_19926;
var tmp20009 = inst_19928;
var inst_19926__$1 = tmp20008;
var inst_19927__$1 = tmp20007;
var inst_19928__$1 = tmp20009;
var inst_19929__$1 = inst_19942;
var state_19986__$1 = (function (){var statearr_20013 = state_19986;
(statearr_20013[(22)] = inst_19941);

(statearr_20013[(9)] = inst_19927__$1);

(statearr_20013[(20)] = inst_19926__$1);

(statearr_20013[(10)] = inst_19929__$1);

(statearr_20013[(21)] = inst_19928__$1);

return statearr_20013;
})();
var statearr_20014_20085 = state_19986__$1;
(statearr_20014_20085[(2)] = null);

(statearr_20014_20085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (40))){
var inst_19954 = (state_19986[(23)]);
var inst_19958 = done.call(null,null);
var inst_19959 = cljs.core.async.untap_STAR_.call(null,m,inst_19954);
var state_19986__$1 = (function (){var statearr_20015 = state_19986;
(statearr_20015[(24)] = inst_19958);

return statearr_20015;
})();
var statearr_20016_20086 = state_19986__$1;
(statearr_20016_20086[(2)] = inst_19959);

(statearr_20016_20086[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (33))){
var inst_19945 = (state_19986[(25)]);
var inst_19947 = cljs.core.chunked_seq_QMARK_.call(null,inst_19945);
var state_19986__$1 = state_19986;
if(inst_19947){
var statearr_20017_20087 = state_19986__$1;
(statearr_20017_20087[(1)] = (36));

} else {
var statearr_20018_20088 = state_19986__$1;
(statearr_20018_20088[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (13))){
var inst_19875 = (state_19986[(26)]);
var inst_19878 = cljs.core.async.close_BANG_.call(null,inst_19875);
var state_19986__$1 = state_19986;
var statearr_20019_20089 = state_19986__$1;
(statearr_20019_20089[(2)] = inst_19878);

(statearr_20019_20089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (22))){
var inst_19898 = (state_19986[(8)]);
var inst_19901 = cljs.core.async.close_BANG_.call(null,inst_19898);
var state_19986__$1 = state_19986;
var statearr_20020_20090 = state_19986__$1;
(statearr_20020_20090[(2)] = inst_19901);

(statearr_20020_20090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (36))){
var inst_19945 = (state_19986[(25)]);
var inst_19949 = cljs.core.chunk_first.call(null,inst_19945);
var inst_19950 = cljs.core.chunk_rest.call(null,inst_19945);
var inst_19951 = cljs.core.count.call(null,inst_19949);
var inst_19926 = inst_19950;
var inst_19927 = inst_19949;
var inst_19928 = inst_19951;
var inst_19929 = (0);
var state_19986__$1 = (function (){var statearr_20021 = state_19986;
(statearr_20021[(9)] = inst_19927);

(statearr_20021[(20)] = inst_19926);

(statearr_20021[(10)] = inst_19929);

(statearr_20021[(21)] = inst_19928);

return statearr_20021;
})();
var statearr_20022_20091 = state_19986__$1;
(statearr_20022_20091[(2)] = null);

(statearr_20022_20091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (41))){
var inst_19945 = (state_19986[(25)]);
var inst_19961 = (state_19986[(2)]);
var inst_19962 = cljs.core.next.call(null,inst_19945);
var inst_19926 = inst_19962;
var inst_19927 = null;
var inst_19928 = (0);
var inst_19929 = (0);
var state_19986__$1 = (function (){var statearr_20023 = state_19986;
(statearr_20023[(9)] = inst_19927);

(statearr_20023[(20)] = inst_19926);

(statearr_20023[(27)] = inst_19961);

(statearr_20023[(10)] = inst_19929);

(statearr_20023[(21)] = inst_19928);

return statearr_20023;
})();
var statearr_20024_20092 = state_19986__$1;
(statearr_20024_20092[(2)] = null);

(statearr_20024_20092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (43))){
var state_19986__$1 = state_19986;
var statearr_20025_20093 = state_19986__$1;
(statearr_20025_20093[(2)] = null);

(statearr_20025_20093[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (29))){
var inst_19970 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20026_20094 = state_19986__$1;
(statearr_20026_20094[(2)] = inst_19970);

(statearr_20026_20094[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (44))){
var inst_19979 = (state_19986[(2)]);
var state_19986__$1 = (function (){var statearr_20027 = state_19986;
(statearr_20027[(28)] = inst_19979);

return statearr_20027;
})();
var statearr_20028_20095 = state_19986__$1;
(statearr_20028_20095[(2)] = null);

(statearr_20028_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (6))){
var inst_19918 = (state_19986[(29)]);
var inst_19917 = cljs.core.deref.call(null,cs);
var inst_19918__$1 = cljs.core.keys.call(null,inst_19917);
var inst_19919 = cljs.core.count.call(null,inst_19918__$1);
var inst_19920 = cljs.core.reset_BANG_.call(null,dctr,inst_19919);
var inst_19925 = cljs.core.seq.call(null,inst_19918__$1);
var inst_19926 = inst_19925;
var inst_19927 = null;
var inst_19928 = (0);
var inst_19929 = (0);
var state_19986__$1 = (function (){var statearr_20029 = state_19986;
(statearr_20029[(29)] = inst_19918__$1);

(statearr_20029[(9)] = inst_19927);

(statearr_20029[(20)] = inst_19926);

(statearr_20029[(10)] = inst_19929);

(statearr_20029[(21)] = inst_19928);

(statearr_20029[(30)] = inst_19920);

return statearr_20029;
})();
var statearr_20030_20096 = state_19986__$1;
(statearr_20030_20096[(2)] = null);

(statearr_20030_20096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (28))){
var inst_19945 = (state_19986[(25)]);
var inst_19926 = (state_19986[(20)]);
var inst_19945__$1 = cljs.core.seq.call(null,inst_19926);
var state_19986__$1 = (function (){var statearr_20031 = state_19986;
(statearr_20031[(25)] = inst_19945__$1);

return statearr_20031;
})();
if(inst_19945__$1){
var statearr_20032_20097 = state_19986__$1;
(statearr_20032_20097[(1)] = (33));

} else {
var statearr_20033_20098 = state_19986__$1;
(statearr_20033_20098[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (25))){
var inst_19929 = (state_19986[(10)]);
var inst_19928 = (state_19986[(21)]);
var inst_19931 = (inst_19929 < inst_19928);
var inst_19932 = inst_19931;
var state_19986__$1 = state_19986;
if(cljs.core.truth_(inst_19932)){
var statearr_20034_20099 = state_19986__$1;
(statearr_20034_20099[(1)] = (27));

} else {
var statearr_20035_20100 = state_19986__$1;
(statearr_20035_20100[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (34))){
var state_19986__$1 = state_19986;
var statearr_20036_20101 = state_19986__$1;
(statearr_20036_20101[(2)] = null);

(statearr_20036_20101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (17))){
var state_19986__$1 = state_19986;
var statearr_20037_20102 = state_19986__$1;
(statearr_20037_20102[(2)] = null);

(statearr_20037_20102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (3))){
var inst_19984 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19986__$1,inst_19984);
} else {
if((state_val_19987 === (12))){
var inst_19913 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20038_20103 = state_19986__$1;
(statearr_20038_20103[(2)] = inst_19913);

(statearr_20038_20103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (2))){
var state_19986__$1 = state_19986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19986__$1,(4),ch);
} else {
if((state_val_19987 === (23))){
var state_19986__$1 = state_19986;
var statearr_20039_20104 = state_19986__$1;
(statearr_20039_20104[(2)] = null);

(statearr_20039_20104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (35))){
var inst_19968 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20040_20105 = state_19986__$1;
(statearr_20040_20105[(2)] = inst_19968);

(statearr_20040_20105[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (19))){
var inst_19885 = (state_19986[(7)]);
var inst_19889 = cljs.core.chunk_first.call(null,inst_19885);
var inst_19890 = cljs.core.chunk_rest.call(null,inst_19885);
var inst_19891 = cljs.core.count.call(null,inst_19889);
var inst_19863 = inst_19890;
var inst_19864 = inst_19889;
var inst_19865 = inst_19891;
var inst_19866 = (0);
var state_19986__$1 = (function (){var statearr_20041 = state_19986;
(statearr_20041[(13)] = inst_19864);

(statearr_20041[(15)] = inst_19863);

(statearr_20041[(16)] = inst_19866);

(statearr_20041[(17)] = inst_19865);

return statearr_20041;
})();
var statearr_20042_20106 = state_19986__$1;
(statearr_20042_20106[(2)] = null);

(statearr_20042_20106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (11))){
var inst_19885 = (state_19986[(7)]);
var inst_19863 = (state_19986[(15)]);
var inst_19885__$1 = cljs.core.seq.call(null,inst_19863);
var state_19986__$1 = (function (){var statearr_20043 = state_19986;
(statearr_20043[(7)] = inst_19885__$1);

return statearr_20043;
})();
if(inst_19885__$1){
var statearr_20044_20107 = state_19986__$1;
(statearr_20044_20107[(1)] = (16));

} else {
var statearr_20045_20108 = state_19986__$1;
(statearr_20045_20108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (9))){
var inst_19915 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20046_20109 = state_19986__$1;
(statearr_20046_20109[(2)] = inst_19915);

(statearr_20046_20109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (5))){
var inst_19861 = cljs.core.deref.call(null,cs);
var inst_19862 = cljs.core.seq.call(null,inst_19861);
var inst_19863 = inst_19862;
var inst_19864 = null;
var inst_19865 = (0);
var inst_19866 = (0);
var state_19986__$1 = (function (){var statearr_20047 = state_19986;
(statearr_20047[(13)] = inst_19864);

(statearr_20047[(15)] = inst_19863);

(statearr_20047[(16)] = inst_19866);

(statearr_20047[(17)] = inst_19865);

return statearr_20047;
})();
var statearr_20048_20110 = state_19986__$1;
(statearr_20048_20110[(2)] = null);

(statearr_20048_20110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (14))){
var state_19986__$1 = state_19986;
var statearr_20049_20111 = state_19986__$1;
(statearr_20049_20111[(2)] = null);

(statearr_20049_20111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (45))){
var inst_19976 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20050_20112 = state_19986__$1;
(statearr_20050_20112[(2)] = inst_19976);

(statearr_20050_20112[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (26))){
var inst_19918 = (state_19986[(29)]);
var inst_19972 = (state_19986[(2)]);
var inst_19973 = cljs.core.seq.call(null,inst_19918);
var state_19986__$1 = (function (){var statearr_20051 = state_19986;
(statearr_20051[(31)] = inst_19972);

return statearr_20051;
})();
if(inst_19973){
var statearr_20052_20113 = state_19986__$1;
(statearr_20052_20113[(1)] = (42));

} else {
var statearr_20053_20114 = state_19986__$1;
(statearr_20053_20114[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (16))){
var inst_19885 = (state_19986[(7)]);
var inst_19887 = cljs.core.chunked_seq_QMARK_.call(null,inst_19885);
var state_19986__$1 = state_19986;
if(inst_19887){
var statearr_20054_20115 = state_19986__$1;
(statearr_20054_20115[(1)] = (19));

} else {
var statearr_20055_20116 = state_19986__$1;
(statearr_20055_20116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (38))){
var inst_19965 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20056_20117 = state_19986__$1;
(statearr_20056_20117[(2)] = inst_19965);

(statearr_20056_20117[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (30))){
var state_19986__$1 = state_19986;
var statearr_20057_20118 = state_19986__$1;
(statearr_20057_20118[(2)] = null);

(statearr_20057_20118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (10))){
var inst_19864 = (state_19986[(13)]);
var inst_19866 = (state_19986[(16)]);
var inst_19874 = cljs.core._nth.call(null,inst_19864,inst_19866);
var inst_19875 = cljs.core.nth.call(null,inst_19874,(0),null);
var inst_19876 = cljs.core.nth.call(null,inst_19874,(1),null);
var state_19986__$1 = (function (){var statearr_20058 = state_19986;
(statearr_20058[(26)] = inst_19875);

return statearr_20058;
})();
if(cljs.core.truth_(inst_19876)){
var statearr_20059_20119 = state_19986__$1;
(statearr_20059_20119[(1)] = (13));

} else {
var statearr_20060_20120 = state_19986__$1;
(statearr_20060_20120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (18))){
var inst_19911 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20061_20121 = state_19986__$1;
(statearr_20061_20121[(2)] = inst_19911);

(statearr_20061_20121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (42))){
var state_19986__$1 = state_19986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19986__$1,(45),dchan);
} else {
if((state_val_19987 === (37))){
var inst_19945 = (state_19986[(25)]);
var inst_19954 = (state_19986[(23)]);
var inst_19854 = (state_19986[(11)]);
var inst_19954__$1 = cljs.core.first.call(null,inst_19945);
var inst_19955 = cljs.core.async.put_BANG_.call(null,inst_19954__$1,inst_19854,done);
var state_19986__$1 = (function (){var statearr_20062 = state_19986;
(statearr_20062[(23)] = inst_19954__$1);

return statearr_20062;
})();
if(cljs.core.truth_(inst_19955)){
var statearr_20063_20122 = state_19986__$1;
(statearr_20063_20122[(1)] = (39));

} else {
var statearr_20064_20123 = state_19986__$1;
(statearr_20064_20123[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (8))){
var inst_19866 = (state_19986[(16)]);
var inst_19865 = (state_19986[(17)]);
var inst_19868 = (inst_19866 < inst_19865);
var inst_19869 = inst_19868;
var state_19986__$1 = state_19986;
if(cljs.core.truth_(inst_19869)){
var statearr_20065_20124 = state_19986__$1;
(statearr_20065_20124[(1)] = (10));

} else {
var statearr_20066_20125 = state_19986__$1;
(statearr_20066_20125[(1)] = (11));

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
});})(c__19252__auto___20071,cs,m,dchan,dctr,done))
;
return ((function (switch__19157__auto__,c__19252__auto___20071,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19158__auto__ = null;
var cljs$core$async$mult_$_state_machine__19158__auto____0 = (function (){
var statearr_20067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20067[(0)] = cljs$core$async$mult_$_state_machine__19158__auto__);

(statearr_20067[(1)] = (1));

return statearr_20067;
});
var cljs$core$async$mult_$_state_machine__19158__auto____1 = (function (state_19986){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_19986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20068){if((e20068 instanceof Object)){
var ex__19161__auto__ = e20068;
var statearr_20069_20126 = state_19986;
(statearr_20069_20126[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20127 = state_19986;
state_19986 = G__20127;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19158__auto__ = function(state_19986){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19158__auto____1.call(this,state_19986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19158__auto____0;
cljs$core$async$mult_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19158__auto____1;
return cljs$core$async$mult_$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20071,cs,m,dchan,dctr,done))
})();
var state__19254__auto__ = (function (){var statearr_20070 = f__19253__auto__.call(null);
(statearr_20070[(6)] = c__19252__auto___20071);

return statearr_20070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20071,cs,m,dchan,dctr,done))
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
var G__20129 = arguments.length;
switch (G__20129) {
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
var len__4730__auto___20141 = arguments.length;
var i__4731__auto___20142 = (0);
while(true){
if((i__4731__auto___20142 < len__4730__auto___20141)){
args__4736__auto__.push((arguments[i__4731__auto___20142]));

var G__20143 = (i__4731__auto___20142 + (1));
i__4731__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20135){
var map__20136 = p__20135;
var map__20136__$1 = (((((!((map__20136 == null))))?(((((map__20136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20136):map__20136);
var opts = map__20136__$1;
var statearr_20138_20144 = state;
(statearr_20138_20144[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__20136,map__20136__$1,opts){
return (function (val){
var statearr_20139_20145 = state;
(statearr_20139_20145[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20136,map__20136__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_20140_20146 = state;
(statearr_20140_20146[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20131){
var G__20132 = cljs.core.first.call(null,seq20131);
var seq20131__$1 = cljs.core.next.call(null,seq20131);
var G__20133 = cljs.core.first.call(null,seq20131__$1);
var seq20131__$2 = cljs.core.next.call(null,seq20131__$1);
var G__20134 = cljs.core.first.call(null,seq20131__$2);
var seq20131__$3 = cljs.core.next.call(null,seq20131__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20132,G__20133,G__20134,seq20131__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20147 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20148){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20148 = meta20148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20149,meta20148__$1){
var self__ = this;
var _20149__$1 = this;
return (new cljs.core.async.t_cljs$core$async20147(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20148__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20149){
var self__ = this;
var _20149__$1 = this;
return self__.meta20148;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20147.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20148","meta20148",738062823,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20147";

cljs.core.async.t_cljs$core$async20147.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20147");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20147.
 */
cljs.core.async.__GT_t_cljs$core$async20147 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20147(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20148){
return (new cljs.core.async.t_cljs$core$async20147(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20148));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20147(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19252__auto___20311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20251){
var state_val_20252 = (state_20251[(1)]);
if((state_val_20252 === (7))){
var inst_20166 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20253_20312 = state_20251__$1;
(statearr_20253_20312[(2)] = inst_20166);

(statearr_20253_20312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (20))){
var inst_20178 = (state_20251[(7)]);
var state_20251__$1 = state_20251;
var statearr_20254_20313 = state_20251__$1;
(statearr_20254_20313[(2)] = inst_20178);

(statearr_20254_20313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (27))){
var state_20251__$1 = state_20251;
var statearr_20255_20314 = state_20251__$1;
(statearr_20255_20314[(2)] = null);

(statearr_20255_20314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (1))){
var inst_20153 = (state_20251[(8)]);
var inst_20153__$1 = calc_state.call(null);
var inst_20155 = (inst_20153__$1 == null);
var inst_20156 = cljs.core.not.call(null,inst_20155);
var state_20251__$1 = (function (){var statearr_20256 = state_20251;
(statearr_20256[(8)] = inst_20153__$1);

return statearr_20256;
})();
if(inst_20156){
var statearr_20257_20315 = state_20251__$1;
(statearr_20257_20315[(1)] = (2));

} else {
var statearr_20258_20316 = state_20251__$1;
(statearr_20258_20316[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (24))){
var inst_20225 = (state_20251[(9)]);
var inst_20211 = (state_20251[(10)]);
var inst_20202 = (state_20251[(11)]);
var inst_20225__$1 = inst_20202.call(null,inst_20211);
var state_20251__$1 = (function (){var statearr_20259 = state_20251;
(statearr_20259[(9)] = inst_20225__$1);

return statearr_20259;
})();
if(cljs.core.truth_(inst_20225__$1)){
var statearr_20260_20317 = state_20251__$1;
(statearr_20260_20317[(1)] = (29));

} else {
var statearr_20261_20318 = state_20251__$1;
(statearr_20261_20318[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (4))){
var inst_20169 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20169)){
var statearr_20262_20319 = state_20251__$1;
(statearr_20262_20319[(1)] = (8));

} else {
var statearr_20263_20320 = state_20251__$1;
(statearr_20263_20320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (15))){
var inst_20196 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20196)){
var statearr_20264_20321 = state_20251__$1;
(statearr_20264_20321[(1)] = (19));

} else {
var statearr_20265_20322 = state_20251__$1;
(statearr_20265_20322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (21))){
var inst_20201 = (state_20251[(12)]);
var inst_20201__$1 = (state_20251[(2)]);
var inst_20202 = cljs.core.get.call(null,inst_20201__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20203 = cljs.core.get.call(null,inst_20201__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20204 = cljs.core.get.call(null,inst_20201__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20251__$1 = (function (){var statearr_20266 = state_20251;
(statearr_20266[(13)] = inst_20203);

(statearr_20266[(12)] = inst_20201__$1);

(statearr_20266[(11)] = inst_20202);

return statearr_20266;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20251__$1,(22),inst_20204);
} else {
if((state_val_20252 === (31))){
var inst_20233 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20233)){
var statearr_20267_20323 = state_20251__$1;
(statearr_20267_20323[(1)] = (32));

} else {
var statearr_20268_20324 = state_20251__$1;
(statearr_20268_20324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (32))){
var inst_20210 = (state_20251[(14)]);
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20251__$1,(35),out,inst_20210);
} else {
if((state_val_20252 === (33))){
var inst_20201 = (state_20251[(12)]);
var inst_20178 = inst_20201;
var state_20251__$1 = (function (){var statearr_20269 = state_20251;
(statearr_20269[(7)] = inst_20178);

return statearr_20269;
})();
var statearr_20270_20325 = state_20251__$1;
(statearr_20270_20325[(2)] = null);

(statearr_20270_20325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (13))){
var inst_20178 = (state_20251[(7)]);
var inst_20185 = inst_20178.cljs$lang$protocol_mask$partition0$;
var inst_20186 = (inst_20185 & (64));
var inst_20187 = inst_20178.cljs$core$ISeq$;
var inst_20188 = (cljs.core.PROTOCOL_SENTINEL === inst_20187);
var inst_20189 = ((inst_20186) || (inst_20188));
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20189)){
var statearr_20271_20326 = state_20251__$1;
(statearr_20271_20326[(1)] = (16));

} else {
var statearr_20272_20327 = state_20251__$1;
(statearr_20272_20327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (22))){
var inst_20211 = (state_20251[(10)]);
var inst_20210 = (state_20251[(14)]);
var inst_20209 = (state_20251[(2)]);
var inst_20210__$1 = cljs.core.nth.call(null,inst_20209,(0),null);
var inst_20211__$1 = cljs.core.nth.call(null,inst_20209,(1),null);
var inst_20212 = (inst_20210__$1 == null);
var inst_20213 = cljs.core._EQ_.call(null,inst_20211__$1,change);
var inst_20214 = ((inst_20212) || (inst_20213));
var state_20251__$1 = (function (){var statearr_20273 = state_20251;
(statearr_20273[(10)] = inst_20211__$1);

(statearr_20273[(14)] = inst_20210__$1);

return statearr_20273;
})();
if(cljs.core.truth_(inst_20214)){
var statearr_20274_20328 = state_20251__$1;
(statearr_20274_20328[(1)] = (23));

} else {
var statearr_20275_20329 = state_20251__$1;
(statearr_20275_20329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (36))){
var inst_20201 = (state_20251[(12)]);
var inst_20178 = inst_20201;
var state_20251__$1 = (function (){var statearr_20276 = state_20251;
(statearr_20276[(7)] = inst_20178);

return statearr_20276;
})();
var statearr_20277_20330 = state_20251__$1;
(statearr_20277_20330[(2)] = null);

(statearr_20277_20330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (29))){
var inst_20225 = (state_20251[(9)]);
var state_20251__$1 = state_20251;
var statearr_20278_20331 = state_20251__$1;
(statearr_20278_20331[(2)] = inst_20225);

(statearr_20278_20331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (6))){
var state_20251__$1 = state_20251;
var statearr_20279_20332 = state_20251__$1;
(statearr_20279_20332[(2)] = false);

(statearr_20279_20332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (28))){
var inst_20221 = (state_20251[(2)]);
var inst_20222 = calc_state.call(null);
var inst_20178 = inst_20222;
var state_20251__$1 = (function (){var statearr_20280 = state_20251;
(statearr_20280[(15)] = inst_20221);

(statearr_20280[(7)] = inst_20178);

return statearr_20280;
})();
var statearr_20281_20333 = state_20251__$1;
(statearr_20281_20333[(2)] = null);

(statearr_20281_20333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (25))){
var inst_20247 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20282_20334 = state_20251__$1;
(statearr_20282_20334[(2)] = inst_20247);

(statearr_20282_20334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (34))){
var inst_20245 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20283_20335 = state_20251__$1;
(statearr_20283_20335[(2)] = inst_20245);

(statearr_20283_20335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (17))){
var state_20251__$1 = state_20251;
var statearr_20284_20336 = state_20251__$1;
(statearr_20284_20336[(2)] = false);

(statearr_20284_20336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (3))){
var state_20251__$1 = state_20251;
var statearr_20285_20337 = state_20251__$1;
(statearr_20285_20337[(2)] = false);

(statearr_20285_20337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (12))){
var inst_20249 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20251__$1,inst_20249);
} else {
if((state_val_20252 === (2))){
var inst_20153 = (state_20251[(8)]);
var inst_20158 = inst_20153.cljs$lang$protocol_mask$partition0$;
var inst_20159 = (inst_20158 & (64));
var inst_20160 = inst_20153.cljs$core$ISeq$;
var inst_20161 = (cljs.core.PROTOCOL_SENTINEL === inst_20160);
var inst_20162 = ((inst_20159) || (inst_20161));
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20162)){
var statearr_20286_20338 = state_20251__$1;
(statearr_20286_20338[(1)] = (5));

} else {
var statearr_20287_20339 = state_20251__$1;
(statearr_20287_20339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (23))){
var inst_20210 = (state_20251[(14)]);
var inst_20216 = (inst_20210 == null);
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20216)){
var statearr_20288_20340 = state_20251__$1;
(statearr_20288_20340[(1)] = (26));

} else {
var statearr_20289_20341 = state_20251__$1;
(statearr_20289_20341[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (35))){
var inst_20236 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20236)){
var statearr_20290_20342 = state_20251__$1;
(statearr_20290_20342[(1)] = (36));

} else {
var statearr_20291_20343 = state_20251__$1;
(statearr_20291_20343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (19))){
var inst_20178 = (state_20251[(7)]);
var inst_20198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20178);
var state_20251__$1 = state_20251;
var statearr_20292_20344 = state_20251__$1;
(statearr_20292_20344[(2)] = inst_20198);

(statearr_20292_20344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (11))){
var inst_20178 = (state_20251[(7)]);
var inst_20182 = (inst_20178 == null);
var inst_20183 = cljs.core.not.call(null,inst_20182);
var state_20251__$1 = state_20251;
if(inst_20183){
var statearr_20293_20345 = state_20251__$1;
(statearr_20293_20345[(1)] = (13));

} else {
var statearr_20294_20346 = state_20251__$1;
(statearr_20294_20346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (9))){
var inst_20153 = (state_20251[(8)]);
var state_20251__$1 = state_20251;
var statearr_20295_20347 = state_20251__$1;
(statearr_20295_20347[(2)] = inst_20153);

(statearr_20295_20347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (5))){
var state_20251__$1 = state_20251;
var statearr_20296_20348 = state_20251__$1;
(statearr_20296_20348[(2)] = true);

(statearr_20296_20348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (14))){
var state_20251__$1 = state_20251;
var statearr_20297_20349 = state_20251__$1;
(statearr_20297_20349[(2)] = false);

(statearr_20297_20349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (26))){
var inst_20211 = (state_20251[(10)]);
var inst_20218 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20211);
var state_20251__$1 = state_20251;
var statearr_20298_20350 = state_20251__$1;
(statearr_20298_20350[(2)] = inst_20218);

(statearr_20298_20350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (16))){
var state_20251__$1 = state_20251;
var statearr_20299_20351 = state_20251__$1;
(statearr_20299_20351[(2)] = true);

(statearr_20299_20351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (38))){
var inst_20241 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20300_20352 = state_20251__$1;
(statearr_20300_20352[(2)] = inst_20241);

(statearr_20300_20352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (30))){
var inst_20203 = (state_20251[(13)]);
var inst_20211 = (state_20251[(10)]);
var inst_20202 = (state_20251[(11)]);
var inst_20228 = cljs.core.empty_QMARK_.call(null,inst_20202);
var inst_20229 = inst_20203.call(null,inst_20211);
var inst_20230 = cljs.core.not.call(null,inst_20229);
var inst_20231 = ((inst_20228) && (inst_20230));
var state_20251__$1 = state_20251;
var statearr_20301_20353 = state_20251__$1;
(statearr_20301_20353[(2)] = inst_20231);

(statearr_20301_20353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (10))){
var inst_20153 = (state_20251[(8)]);
var inst_20174 = (state_20251[(2)]);
var inst_20175 = cljs.core.get.call(null,inst_20174,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20176 = cljs.core.get.call(null,inst_20174,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20177 = cljs.core.get.call(null,inst_20174,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20178 = inst_20153;
var state_20251__$1 = (function (){var statearr_20302 = state_20251;
(statearr_20302[(16)] = inst_20175);

(statearr_20302[(17)] = inst_20176);

(statearr_20302[(18)] = inst_20177);

(statearr_20302[(7)] = inst_20178);

return statearr_20302;
})();
var statearr_20303_20354 = state_20251__$1;
(statearr_20303_20354[(2)] = null);

(statearr_20303_20354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (18))){
var inst_20193 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20304_20355 = state_20251__$1;
(statearr_20304_20355[(2)] = inst_20193);

(statearr_20304_20355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (37))){
var state_20251__$1 = state_20251;
var statearr_20305_20356 = state_20251__$1;
(statearr_20305_20356[(2)] = null);

(statearr_20305_20356[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (8))){
var inst_20153 = (state_20251[(8)]);
var inst_20171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20153);
var state_20251__$1 = state_20251;
var statearr_20306_20357 = state_20251__$1;
(statearr_20306_20357[(2)] = inst_20171);

(statearr_20306_20357[(1)] = (10));


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
});})(c__19252__auto___20311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19157__auto__,c__19252__auto___20311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19158__auto__ = null;
var cljs$core$async$mix_$_state_machine__19158__auto____0 = (function (){
var statearr_20307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20307[(0)] = cljs$core$async$mix_$_state_machine__19158__auto__);

(statearr_20307[(1)] = (1));

return statearr_20307;
});
var cljs$core$async$mix_$_state_machine__19158__auto____1 = (function (state_20251){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20308){if((e20308 instanceof Object)){
var ex__19161__auto__ = e20308;
var statearr_20309_20358 = state_20251;
(statearr_20309_20358[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20359 = state_20251;
state_20251 = G__20359;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19158__auto__ = function(state_20251){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19158__auto____1.call(this,state_20251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19158__auto____0;
cljs$core$async$mix_$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19158__auto____1;
return cljs$core$async$mix_$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19254__auto__ = (function (){var statearr_20310 = f__19253__auto__.call(null);
(statearr_20310[(6)] = c__19252__auto___20311);

return statearr_20310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__20361 = arguments.length;
switch (G__20361) {
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
var G__20365 = arguments.length;
switch (G__20365) {
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
return (function (p1__20363_SHARP_){
if(cljs.core.truth_(p1__20363_SHARP_.call(null,topic))){
return p1__20363_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20366 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20367){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20367 = meta20367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20368,meta20367__$1){
var self__ = this;
var _20368__$1 = this;
return (new cljs.core.async.t_cljs$core$async20366(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20367__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20368){
var self__ = this;
var _20368__$1 = this;
return self__.meta20367;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20366.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20367","meta20367",1978748955,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20366";

cljs.core.async.t_cljs$core$async20366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20366");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20366.
 */
cljs.core.async.__GT_t_cljs$core$async20366 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20367){
return (new cljs.core.async.t_cljs$core$async20366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20367));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20366(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19252__auto___20486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20486,mults,ensure_mult,p){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20486,mults,ensure_mult,p){
return (function (state_20440){
var state_val_20441 = (state_20440[(1)]);
if((state_val_20441 === (7))){
var inst_20436 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20442_20487 = state_20440__$1;
(statearr_20442_20487[(2)] = inst_20436);

(statearr_20442_20487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (20))){
var state_20440__$1 = state_20440;
var statearr_20443_20488 = state_20440__$1;
(statearr_20443_20488[(2)] = null);

(statearr_20443_20488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (1))){
var state_20440__$1 = state_20440;
var statearr_20444_20489 = state_20440__$1;
(statearr_20444_20489[(2)] = null);

(statearr_20444_20489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (24))){
var inst_20419 = (state_20440[(7)]);
var inst_20428 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20419);
var state_20440__$1 = state_20440;
var statearr_20445_20490 = state_20440__$1;
(statearr_20445_20490[(2)] = inst_20428);

(statearr_20445_20490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (4))){
var inst_20371 = (state_20440[(8)]);
var inst_20371__$1 = (state_20440[(2)]);
var inst_20372 = (inst_20371__$1 == null);
var state_20440__$1 = (function (){var statearr_20446 = state_20440;
(statearr_20446[(8)] = inst_20371__$1);

return statearr_20446;
})();
if(cljs.core.truth_(inst_20372)){
var statearr_20447_20491 = state_20440__$1;
(statearr_20447_20491[(1)] = (5));

} else {
var statearr_20448_20492 = state_20440__$1;
(statearr_20448_20492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (15))){
var inst_20413 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20449_20493 = state_20440__$1;
(statearr_20449_20493[(2)] = inst_20413);

(statearr_20449_20493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (21))){
var inst_20433 = (state_20440[(2)]);
var state_20440__$1 = (function (){var statearr_20450 = state_20440;
(statearr_20450[(9)] = inst_20433);

return statearr_20450;
})();
var statearr_20451_20494 = state_20440__$1;
(statearr_20451_20494[(2)] = null);

(statearr_20451_20494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (13))){
var inst_20395 = (state_20440[(10)]);
var inst_20397 = cljs.core.chunked_seq_QMARK_.call(null,inst_20395);
var state_20440__$1 = state_20440;
if(inst_20397){
var statearr_20452_20495 = state_20440__$1;
(statearr_20452_20495[(1)] = (16));

} else {
var statearr_20453_20496 = state_20440__$1;
(statearr_20453_20496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (22))){
var inst_20425 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
if(cljs.core.truth_(inst_20425)){
var statearr_20454_20497 = state_20440__$1;
(statearr_20454_20497[(1)] = (23));

} else {
var statearr_20455_20498 = state_20440__$1;
(statearr_20455_20498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (6))){
var inst_20421 = (state_20440[(11)]);
var inst_20371 = (state_20440[(8)]);
var inst_20419 = (state_20440[(7)]);
var inst_20419__$1 = topic_fn.call(null,inst_20371);
var inst_20420 = cljs.core.deref.call(null,mults);
var inst_20421__$1 = cljs.core.get.call(null,inst_20420,inst_20419__$1);
var state_20440__$1 = (function (){var statearr_20456 = state_20440;
(statearr_20456[(11)] = inst_20421__$1);

(statearr_20456[(7)] = inst_20419__$1);

return statearr_20456;
})();
if(cljs.core.truth_(inst_20421__$1)){
var statearr_20457_20499 = state_20440__$1;
(statearr_20457_20499[(1)] = (19));

} else {
var statearr_20458_20500 = state_20440__$1;
(statearr_20458_20500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (25))){
var inst_20430 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20459_20501 = state_20440__$1;
(statearr_20459_20501[(2)] = inst_20430);

(statearr_20459_20501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (17))){
var inst_20395 = (state_20440[(10)]);
var inst_20404 = cljs.core.first.call(null,inst_20395);
var inst_20405 = cljs.core.async.muxch_STAR_.call(null,inst_20404);
var inst_20406 = cljs.core.async.close_BANG_.call(null,inst_20405);
var inst_20407 = cljs.core.next.call(null,inst_20395);
var inst_20381 = inst_20407;
var inst_20382 = null;
var inst_20383 = (0);
var inst_20384 = (0);
var state_20440__$1 = (function (){var statearr_20460 = state_20440;
(statearr_20460[(12)] = inst_20382);

(statearr_20460[(13)] = inst_20406);

(statearr_20460[(14)] = inst_20383);

(statearr_20460[(15)] = inst_20384);

(statearr_20460[(16)] = inst_20381);

return statearr_20460;
})();
var statearr_20461_20502 = state_20440__$1;
(statearr_20461_20502[(2)] = null);

(statearr_20461_20502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (3))){
var inst_20438 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20440__$1,inst_20438);
} else {
if((state_val_20441 === (12))){
var inst_20415 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20462_20503 = state_20440__$1;
(statearr_20462_20503[(2)] = inst_20415);

(statearr_20462_20503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (2))){
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20440__$1,(4),ch);
} else {
if((state_val_20441 === (23))){
var state_20440__$1 = state_20440;
var statearr_20463_20504 = state_20440__$1;
(statearr_20463_20504[(2)] = null);

(statearr_20463_20504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (19))){
var inst_20421 = (state_20440[(11)]);
var inst_20371 = (state_20440[(8)]);
var inst_20423 = cljs.core.async.muxch_STAR_.call(null,inst_20421);
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20440__$1,(22),inst_20423,inst_20371);
} else {
if((state_val_20441 === (11))){
var inst_20381 = (state_20440[(16)]);
var inst_20395 = (state_20440[(10)]);
var inst_20395__$1 = cljs.core.seq.call(null,inst_20381);
var state_20440__$1 = (function (){var statearr_20464 = state_20440;
(statearr_20464[(10)] = inst_20395__$1);

return statearr_20464;
})();
if(inst_20395__$1){
var statearr_20465_20505 = state_20440__$1;
(statearr_20465_20505[(1)] = (13));

} else {
var statearr_20466_20506 = state_20440__$1;
(statearr_20466_20506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (9))){
var inst_20417 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20467_20507 = state_20440__$1;
(statearr_20467_20507[(2)] = inst_20417);

(statearr_20467_20507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (5))){
var inst_20378 = cljs.core.deref.call(null,mults);
var inst_20379 = cljs.core.vals.call(null,inst_20378);
var inst_20380 = cljs.core.seq.call(null,inst_20379);
var inst_20381 = inst_20380;
var inst_20382 = null;
var inst_20383 = (0);
var inst_20384 = (0);
var state_20440__$1 = (function (){var statearr_20468 = state_20440;
(statearr_20468[(12)] = inst_20382);

(statearr_20468[(14)] = inst_20383);

(statearr_20468[(15)] = inst_20384);

(statearr_20468[(16)] = inst_20381);

return statearr_20468;
})();
var statearr_20469_20508 = state_20440__$1;
(statearr_20469_20508[(2)] = null);

(statearr_20469_20508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (14))){
var state_20440__$1 = state_20440;
var statearr_20473_20509 = state_20440__$1;
(statearr_20473_20509[(2)] = null);

(statearr_20473_20509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (16))){
var inst_20395 = (state_20440[(10)]);
var inst_20399 = cljs.core.chunk_first.call(null,inst_20395);
var inst_20400 = cljs.core.chunk_rest.call(null,inst_20395);
var inst_20401 = cljs.core.count.call(null,inst_20399);
var inst_20381 = inst_20400;
var inst_20382 = inst_20399;
var inst_20383 = inst_20401;
var inst_20384 = (0);
var state_20440__$1 = (function (){var statearr_20474 = state_20440;
(statearr_20474[(12)] = inst_20382);

(statearr_20474[(14)] = inst_20383);

(statearr_20474[(15)] = inst_20384);

(statearr_20474[(16)] = inst_20381);

return statearr_20474;
})();
var statearr_20475_20510 = state_20440__$1;
(statearr_20475_20510[(2)] = null);

(statearr_20475_20510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (10))){
var inst_20382 = (state_20440[(12)]);
var inst_20383 = (state_20440[(14)]);
var inst_20384 = (state_20440[(15)]);
var inst_20381 = (state_20440[(16)]);
var inst_20389 = cljs.core._nth.call(null,inst_20382,inst_20384);
var inst_20390 = cljs.core.async.muxch_STAR_.call(null,inst_20389);
var inst_20391 = cljs.core.async.close_BANG_.call(null,inst_20390);
var inst_20392 = (inst_20384 + (1));
var tmp20470 = inst_20382;
var tmp20471 = inst_20383;
var tmp20472 = inst_20381;
var inst_20381__$1 = tmp20472;
var inst_20382__$1 = tmp20470;
var inst_20383__$1 = tmp20471;
var inst_20384__$1 = inst_20392;
var state_20440__$1 = (function (){var statearr_20476 = state_20440;
(statearr_20476[(17)] = inst_20391);

(statearr_20476[(12)] = inst_20382__$1);

(statearr_20476[(14)] = inst_20383__$1);

(statearr_20476[(15)] = inst_20384__$1);

(statearr_20476[(16)] = inst_20381__$1);

return statearr_20476;
})();
var statearr_20477_20511 = state_20440__$1;
(statearr_20477_20511[(2)] = null);

(statearr_20477_20511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (18))){
var inst_20410 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20478_20512 = state_20440__$1;
(statearr_20478_20512[(2)] = inst_20410);

(statearr_20478_20512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (8))){
var inst_20383 = (state_20440[(14)]);
var inst_20384 = (state_20440[(15)]);
var inst_20386 = (inst_20384 < inst_20383);
var inst_20387 = inst_20386;
var state_20440__$1 = state_20440;
if(cljs.core.truth_(inst_20387)){
var statearr_20479_20513 = state_20440__$1;
(statearr_20479_20513[(1)] = (10));

} else {
var statearr_20480_20514 = state_20440__$1;
(statearr_20480_20514[(1)] = (11));

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
});})(c__19252__auto___20486,mults,ensure_mult,p))
;
return ((function (switch__19157__auto__,c__19252__auto___20486,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_20481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20481[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_20481[(1)] = (1));

return statearr_20481;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_20440){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20482){if((e20482 instanceof Object)){
var ex__19161__auto__ = e20482;
var statearr_20483_20515 = state_20440;
(statearr_20483_20515[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20516 = state_20440;
state_20440 = G__20516;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_20440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_20440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20486,mults,ensure_mult,p))
})();
var state__19254__auto__ = (function (){var statearr_20484 = f__19253__auto__.call(null);
(statearr_20484[(6)] = c__19252__auto___20486);

return statearr_20484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20486,mults,ensure_mult,p))
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
var G__20518 = arguments.length;
switch (G__20518) {
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
var G__20521 = arguments.length;
switch (G__20521) {
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
var G__20524 = arguments.length;
switch (G__20524) {
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
var c__19252__auto___20591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20563){
var state_val_20564 = (state_20563[(1)]);
if((state_val_20564 === (7))){
var state_20563__$1 = state_20563;
var statearr_20565_20592 = state_20563__$1;
(statearr_20565_20592[(2)] = null);

(statearr_20565_20592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (1))){
var state_20563__$1 = state_20563;
var statearr_20566_20593 = state_20563__$1;
(statearr_20566_20593[(2)] = null);

(statearr_20566_20593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (4))){
var inst_20527 = (state_20563[(7)]);
var inst_20529 = (inst_20527 < cnt);
var state_20563__$1 = state_20563;
if(cljs.core.truth_(inst_20529)){
var statearr_20567_20594 = state_20563__$1;
(statearr_20567_20594[(1)] = (6));

} else {
var statearr_20568_20595 = state_20563__$1;
(statearr_20568_20595[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (15))){
var inst_20559 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20569_20596 = state_20563__$1;
(statearr_20569_20596[(2)] = inst_20559);

(statearr_20569_20596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (13))){
var inst_20552 = cljs.core.async.close_BANG_.call(null,out);
var state_20563__$1 = state_20563;
var statearr_20570_20597 = state_20563__$1;
(statearr_20570_20597[(2)] = inst_20552);

(statearr_20570_20597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (6))){
var state_20563__$1 = state_20563;
var statearr_20571_20598 = state_20563__$1;
(statearr_20571_20598[(2)] = null);

(statearr_20571_20598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (3))){
var inst_20561 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20563__$1,inst_20561);
} else {
if((state_val_20564 === (12))){
var inst_20549 = (state_20563[(8)]);
var inst_20549__$1 = (state_20563[(2)]);
var inst_20550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20549__$1);
var state_20563__$1 = (function (){var statearr_20572 = state_20563;
(statearr_20572[(8)] = inst_20549__$1);

return statearr_20572;
})();
if(cljs.core.truth_(inst_20550)){
var statearr_20573_20599 = state_20563__$1;
(statearr_20573_20599[(1)] = (13));

} else {
var statearr_20574_20600 = state_20563__$1;
(statearr_20574_20600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (2))){
var inst_20526 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20527 = (0);
var state_20563__$1 = (function (){var statearr_20575 = state_20563;
(statearr_20575[(9)] = inst_20526);

(statearr_20575[(7)] = inst_20527);

return statearr_20575;
})();
var statearr_20576_20601 = state_20563__$1;
(statearr_20576_20601[(2)] = null);

(statearr_20576_20601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (11))){
var inst_20527 = (state_20563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20563,(10),Object,null,(9));
var inst_20536 = chs__$1.call(null,inst_20527);
var inst_20537 = done.call(null,inst_20527);
var inst_20538 = cljs.core.async.take_BANG_.call(null,inst_20536,inst_20537);
var state_20563__$1 = state_20563;
var statearr_20577_20602 = state_20563__$1;
(statearr_20577_20602[(2)] = inst_20538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (9))){
var inst_20527 = (state_20563[(7)]);
var inst_20540 = (state_20563[(2)]);
var inst_20541 = (inst_20527 + (1));
var inst_20527__$1 = inst_20541;
var state_20563__$1 = (function (){var statearr_20578 = state_20563;
(statearr_20578[(10)] = inst_20540);

(statearr_20578[(7)] = inst_20527__$1);

return statearr_20578;
})();
var statearr_20579_20603 = state_20563__$1;
(statearr_20579_20603[(2)] = null);

(statearr_20579_20603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (5))){
var inst_20547 = (state_20563[(2)]);
var state_20563__$1 = (function (){var statearr_20580 = state_20563;
(statearr_20580[(11)] = inst_20547);

return statearr_20580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20563__$1,(12),dchan);
} else {
if((state_val_20564 === (14))){
var inst_20549 = (state_20563[(8)]);
var inst_20554 = cljs.core.apply.call(null,f,inst_20549);
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20563__$1,(16),out,inst_20554);
} else {
if((state_val_20564 === (16))){
var inst_20556 = (state_20563[(2)]);
var state_20563__$1 = (function (){var statearr_20581 = state_20563;
(statearr_20581[(12)] = inst_20556);

return statearr_20581;
})();
var statearr_20582_20604 = state_20563__$1;
(statearr_20582_20604[(2)] = null);

(statearr_20582_20604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (10))){
var inst_20531 = (state_20563[(2)]);
var inst_20532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20563__$1 = (function (){var statearr_20583 = state_20563;
(statearr_20583[(13)] = inst_20531);

return statearr_20583;
})();
var statearr_20584_20605 = state_20563__$1;
(statearr_20584_20605[(2)] = inst_20532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (8))){
var inst_20545 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20585_20606 = state_20563__$1;
(statearr_20585_20606[(2)] = inst_20545);

(statearr_20585_20606[(1)] = (5));


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
});})(c__19252__auto___20591,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19157__auto__,c__19252__auto___20591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_20586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20586[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_20586[(1)] = (1));

return statearr_20586;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_20563){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20587){if((e20587 instanceof Object)){
var ex__19161__auto__ = e20587;
var statearr_20588_20607 = state_20563;
(statearr_20588_20607[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20608 = state_20563;
state_20563 = G__20608;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_20563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_20563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20591,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19254__auto__ = (function (){var statearr_20589 = f__19253__auto__.call(null);
(statearr_20589[(6)] = c__19252__auto___20591);

return statearr_20589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20591,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__20611 = arguments.length;
switch (G__20611) {
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
var c__19252__auto___20665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20665,out){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20665,out){
return (function (state_20643){
var state_val_20644 = (state_20643[(1)]);
if((state_val_20644 === (7))){
var inst_20623 = (state_20643[(7)]);
var inst_20622 = (state_20643[(8)]);
var inst_20622__$1 = (state_20643[(2)]);
var inst_20623__$1 = cljs.core.nth.call(null,inst_20622__$1,(0),null);
var inst_20624 = cljs.core.nth.call(null,inst_20622__$1,(1),null);
var inst_20625 = (inst_20623__$1 == null);
var state_20643__$1 = (function (){var statearr_20645 = state_20643;
(statearr_20645[(7)] = inst_20623__$1);

(statearr_20645[(8)] = inst_20622__$1);

(statearr_20645[(9)] = inst_20624);

return statearr_20645;
})();
if(cljs.core.truth_(inst_20625)){
var statearr_20646_20666 = state_20643__$1;
(statearr_20646_20666[(1)] = (8));

} else {
var statearr_20647_20667 = state_20643__$1;
(statearr_20647_20667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (1))){
var inst_20612 = cljs.core.vec.call(null,chs);
var inst_20613 = inst_20612;
var state_20643__$1 = (function (){var statearr_20648 = state_20643;
(statearr_20648[(10)] = inst_20613);

return statearr_20648;
})();
var statearr_20649_20668 = state_20643__$1;
(statearr_20649_20668[(2)] = null);

(statearr_20649_20668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (4))){
var inst_20613 = (state_20643[(10)]);
var state_20643__$1 = state_20643;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20643__$1,(7),inst_20613);
} else {
if((state_val_20644 === (6))){
var inst_20639 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
var statearr_20650_20669 = state_20643__$1;
(statearr_20650_20669[(2)] = inst_20639);

(statearr_20650_20669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (3))){
var inst_20641 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20643__$1,inst_20641);
} else {
if((state_val_20644 === (2))){
var inst_20613 = (state_20643[(10)]);
var inst_20615 = cljs.core.count.call(null,inst_20613);
var inst_20616 = (inst_20615 > (0));
var state_20643__$1 = state_20643;
if(cljs.core.truth_(inst_20616)){
var statearr_20652_20670 = state_20643__$1;
(statearr_20652_20670[(1)] = (4));

} else {
var statearr_20653_20671 = state_20643__$1;
(statearr_20653_20671[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (11))){
var inst_20613 = (state_20643[(10)]);
var inst_20632 = (state_20643[(2)]);
var tmp20651 = inst_20613;
var inst_20613__$1 = tmp20651;
var state_20643__$1 = (function (){var statearr_20654 = state_20643;
(statearr_20654[(11)] = inst_20632);

(statearr_20654[(10)] = inst_20613__$1);

return statearr_20654;
})();
var statearr_20655_20672 = state_20643__$1;
(statearr_20655_20672[(2)] = null);

(statearr_20655_20672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (9))){
var inst_20623 = (state_20643[(7)]);
var state_20643__$1 = state_20643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20643__$1,(11),out,inst_20623);
} else {
if((state_val_20644 === (5))){
var inst_20637 = cljs.core.async.close_BANG_.call(null,out);
var state_20643__$1 = state_20643;
var statearr_20656_20673 = state_20643__$1;
(statearr_20656_20673[(2)] = inst_20637);

(statearr_20656_20673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (10))){
var inst_20635 = (state_20643[(2)]);
var state_20643__$1 = state_20643;
var statearr_20657_20674 = state_20643__$1;
(statearr_20657_20674[(2)] = inst_20635);

(statearr_20657_20674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20644 === (8))){
var inst_20623 = (state_20643[(7)]);
var inst_20613 = (state_20643[(10)]);
var inst_20622 = (state_20643[(8)]);
var inst_20624 = (state_20643[(9)]);
var inst_20627 = (function (){var cs = inst_20613;
var vec__20618 = inst_20622;
var v = inst_20623;
var c = inst_20624;
return ((function (cs,vec__20618,v,c,inst_20623,inst_20613,inst_20622,inst_20624,state_val_20644,c__19252__auto___20665,out){
return (function (p1__20609_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20609_SHARP_);
});
;})(cs,vec__20618,v,c,inst_20623,inst_20613,inst_20622,inst_20624,state_val_20644,c__19252__auto___20665,out))
})();
var inst_20628 = cljs.core.filterv.call(null,inst_20627,inst_20613);
var inst_20613__$1 = inst_20628;
var state_20643__$1 = (function (){var statearr_20658 = state_20643;
(statearr_20658[(10)] = inst_20613__$1);

return statearr_20658;
})();
var statearr_20659_20675 = state_20643__$1;
(statearr_20659_20675[(2)] = null);

(statearr_20659_20675[(1)] = (2));


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
});})(c__19252__auto___20665,out))
;
return ((function (switch__19157__auto__,c__19252__auto___20665,out){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_20660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20660[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_20660[(1)] = (1));

return statearr_20660;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_20643){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20661){if((e20661 instanceof Object)){
var ex__19161__auto__ = e20661;
var statearr_20662_20676 = state_20643;
(statearr_20662_20676[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20677 = state_20643;
state_20643 = G__20677;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_20643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_20643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20665,out))
})();
var state__19254__auto__ = (function (){var statearr_20663 = f__19253__auto__.call(null);
(statearr_20663[(6)] = c__19252__auto___20665);

return statearr_20663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20665,out))
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
var G__20679 = arguments.length;
switch (G__20679) {
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
var c__19252__auto___20724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20724,out){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20724,out){
return (function (state_20703){
var state_val_20704 = (state_20703[(1)]);
if((state_val_20704 === (7))){
var inst_20685 = (state_20703[(7)]);
var inst_20685__$1 = (state_20703[(2)]);
var inst_20686 = (inst_20685__$1 == null);
var inst_20687 = cljs.core.not.call(null,inst_20686);
var state_20703__$1 = (function (){var statearr_20705 = state_20703;
(statearr_20705[(7)] = inst_20685__$1);

return statearr_20705;
})();
if(inst_20687){
var statearr_20706_20725 = state_20703__$1;
(statearr_20706_20725[(1)] = (8));

} else {
var statearr_20707_20726 = state_20703__$1;
(statearr_20707_20726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (1))){
var inst_20680 = (0);
var state_20703__$1 = (function (){var statearr_20708 = state_20703;
(statearr_20708[(8)] = inst_20680);

return statearr_20708;
})();
var statearr_20709_20727 = state_20703__$1;
(statearr_20709_20727[(2)] = null);

(statearr_20709_20727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (4))){
var state_20703__$1 = state_20703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20703__$1,(7),ch);
} else {
if((state_val_20704 === (6))){
var inst_20698 = (state_20703[(2)]);
var state_20703__$1 = state_20703;
var statearr_20710_20728 = state_20703__$1;
(statearr_20710_20728[(2)] = inst_20698);

(statearr_20710_20728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (3))){
var inst_20700 = (state_20703[(2)]);
var inst_20701 = cljs.core.async.close_BANG_.call(null,out);
var state_20703__$1 = (function (){var statearr_20711 = state_20703;
(statearr_20711[(9)] = inst_20700);

return statearr_20711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20703__$1,inst_20701);
} else {
if((state_val_20704 === (2))){
var inst_20680 = (state_20703[(8)]);
var inst_20682 = (inst_20680 < n);
var state_20703__$1 = state_20703;
if(cljs.core.truth_(inst_20682)){
var statearr_20712_20729 = state_20703__$1;
(statearr_20712_20729[(1)] = (4));

} else {
var statearr_20713_20730 = state_20703__$1;
(statearr_20713_20730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (11))){
var inst_20680 = (state_20703[(8)]);
var inst_20690 = (state_20703[(2)]);
var inst_20691 = (inst_20680 + (1));
var inst_20680__$1 = inst_20691;
var state_20703__$1 = (function (){var statearr_20714 = state_20703;
(statearr_20714[(8)] = inst_20680__$1);

(statearr_20714[(10)] = inst_20690);

return statearr_20714;
})();
var statearr_20715_20731 = state_20703__$1;
(statearr_20715_20731[(2)] = null);

(statearr_20715_20731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (9))){
var state_20703__$1 = state_20703;
var statearr_20716_20732 = state_20703__$1;
(statearr_20716_20732[(2)] = null);

(statearr_20716_20732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (5))){
var state_20703__$1 = state_20703;
var statearr_20717_20733 = state_20703__$1;
(statearr_20717_20733[(2)] = null);

(statearr_20717_20733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (10))){
var inst_20695 = (state_20703[(2)]);
var state_20703__$1 = state_20703;
var statearr_20718_20734 = state_20703__$1;
(statearr_20718_20734[(2)] = inst_20695);

(statearr_20718_20734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20704 === (8))){
var inst_20685 = (state_20703[(7)]);
var state_20703__$1 = state_20703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20703__$1,(11),out,inst_20685);
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
});})(c__19252__auto___20724,out))
;
return ((function (switch__19157__auto__,c__19252__auto___20724,out){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_20719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20719[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_20719[(1)] = (1));

return statearr_20719;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_20703){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20720){if((e20720 instanceof Object)){
var ex__19161__auto__ = e20720;
var statearr_20721_20735 = state_20703;
(statearr_20721_20735[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20736 = state_20703;
state_20703 = G__20736;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_20703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_20703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20724,out))
})();
var state__19254__auto__ = (function (){var statearr_20722 = f__19253__auto__.call(null);
(statearr_20722[(6)] = c__19252__auto___20724);

return statearr_20722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20724,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20738 = (function (f,ch,meta20739){
this.f = f;
this.ch = ch;
this.meta20739 = meta20739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20740,meta20739__$1){
var self__ = this;
var _20740__$1 = this;
return (new cljs.core.async.t_cljs$core$async20738(self__.f,self__.ch,meta20739__$1));
});

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20740){
var self__ = this;
var _20740__$1 = this;
return self__.meta20739;
});

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20741 = (function (f,ch,meta20739,_,fn1,meta20742){
this.f = f;
this.ch = ch;
this.meta20739 = meta20739;
this._ = _;
this.fn1 = fn1;
this.meta20742 = meta20742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20743,meta20742__$1){
var self__ = this;
var _20743__$1 = this;
return (new cljs.core.async.t_cljs$core$async20741(self__.f,self__.ch,self__.meta20739,self__._,self__.fn1,meta20742__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20743){
var self__ = this;
var _20743__$1 = this;
return self__.meta20742;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20737_SHARP_){
return f1.call(null,(((p1__20737_SHARP_ == null))?null:self__.f.call(null,p1__20737_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20741.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20739","meta20739",1743723982,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20738","cljs.core.async/t_cljs$core$async20738",577084924,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20742","meta20742",1880031389,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20741";

cljs.core.async.t_cljs$core$async20741.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20741");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20741.
 */
cljs.core.async.__GT_t_cljs$core$async20741 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20741(f__$1,ch__$1,meta20739__$1,___$2,fn1__$1,meta20742){
return (new cljs.core.async.t_cljs$core$async20741(f__$1,ch__$1,meta20739__$1,___$2,fn1__$1,meta20742));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20741(self__.f,self__.ch,self__.meta20739,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20739","meta20739",1743723982,null)], null);
});

cljs.core.async.t_cljs$core$async20738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20738";

cljs.core.async.t_cljs$core$async20738.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20738");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20738.
 */
cljs.core.async.__GT_t_cljs$core$async20738 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20738(f__$1,ch__$1,meta20739){
return (new cljs.core.async.t_cljs$core$async20738(f__$1,ch__$1,meta20739));
});

}

return (new cljs.core.async.t_cljs$core$async20738(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20744 = (function (f,ch,meta20745){
this.f = f;
this.ch = ch;
this.meta20745 = meta20745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20746,meta20745__$1){
var self__ = this;
var _20746__$1 = this;
return (new cljs.core.async.t_cljs$core$async20744(self__.f,self__.ch,meta20745__$1));
});

cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20746){
var self__ = this;
var _20746__$1 = this;
return self__.meta20745;
});

cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20745","meta20745",562413500,null)], null);
});

cljs.core.async.t_cljs$core$async20744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20744";

cljs.core.async.t_cljs$core$async20744.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20744");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20744.
 */
cljs.core.async.__GT_t_cljs$core$async20744 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20744(f__$1,ch__$1,meta20745){
return (new cljs.core.async.t_cljs$core$async20744(f__$1,ch__$1,meta20745));
});

}

return (new cljs.core.async.t_cljs$core$async20744(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20747 = (function (p,ch,meta20748){
this.p = p;
this.ch = ch;
this.meta20748 = meta20748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20749,meta20748__$1){
var self__ = this;
var _20749__$1 = this;
return (new cljs.core.async.t_cljs$core$async20747(self__.p,self__.ch,meta20748__$1));
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20749){
var self__ = this;
var _20749__$1 = this;
return self__.meta20748;
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20748","meta20748",1937442558,null)], null);
});

cljs.core.async.t_cljs$core$async20747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20747";

cljs.core.async.t_cljs$core$async20747.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async20747");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20747.
 */
cljs.core.async.__GT_t_cljs$core$async20747 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20747(p__$1,ch__$1,meta20748){
return (new cljs.core.async.t_cljs$core$async20747(p__$1,ch__$1,meta20748));
});

}

return (new cljs.core.async.t_cljs$core$async20747(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20751 = arguments.length;
switch (G__20751) {
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
var c__19252__auto___20791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20791,out){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20791,out){
return (function (state_20772){
var state_val_20773 = (state_20772[(1)]);
if((state_val_20773 === (7))){
var inst_20768 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
var statearr_20774_20792 = state_20772__$1;
(statearr_20774_20792[(2)] = inst_20768);

(statearr_20774_20792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (1))){
var state_20772__$1 = state_20772;
var statearr_20775_20793 = state_20772__$1;
(statearr_20775_20793[(2)] = null);

(statearr_20775_20793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (4))){
var inst_20754 = (state_20772[(7)]);
var inst_20754__$1 = (state_20772[(2)]);
var inst_20755 = (inst_20754__$1 == null);
var state_20772__$1 = (function (){var statearr_20776 = state_20772;
(statearr_20776[(7)] = inst_20754__$1);

return statearr_20776;
})();
if(cljs.core.truth_(inst_20755)){
var statearr_20777_20794 = state_20772__$1;
(statearr_20777_20794[(1)] = (5));

} else {
var statearr_20778_20795 = state_20772__$1;
(statearr_20778_20795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (6))){
var inst_20754 = (state_20772[(7)]);
var inst_20759 = p.call(null,inst_20754);
var state_20772__$1 = state_20772;
if(cljs.core.truth_(inst_20759)){
var statearr_20779_20796 = state_20772__$1;
(statearr_20779_20796[(1)] = (8));

} else {
var statearr_20780_20797 = state_20772__$1;
(statearr_20780_20797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (3))){
var inst_20770 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20772__$1,inst_20770);
} else {
if((state_val_20773 === (2))){
var state_20772__$1 = state_20772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20772__$1,(4),ch);
} else {
if((state_val_20773 === (11))){
var inst_20762 = (state_20772[(2)]);
var state_20772__$1 = state_20772;
var statearr_20781_20798 = state_20772__$1;
(statearr_20781_20798[(2)] = inst_20762);

(statearr_20781_20798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (9))){
var state_20772__$1 = state_20772;
var statearr_20782_20799 = state_20772__$1;
(statearr_20782_20799[(2)] = null);

(statearr_20782_20799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (5))){
var inst_20757 = cljs.core.async.close_BANG_.call(null,out);
var state_20772__$1 = state_20772;
var statearr_20783_20800 = state_20772__$1;
(statearr_20783_20800[(2)] = inst_20757);

(statearr_20783_20800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (10))){
var inst_20765 = (state_20772[(2)]);
var state_20772__$1 = (function (){var statearr_20784 = state_20772;
(statearr_20784[(8)] = inst_20765);

return statearr_20784;
})();
var statearr_20785_20801 = state_20772__$1;
(statearr_20785_20801[(2)] = null);

(statearr_20785_20801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20773 === (8))){
var inst_20754 = (state_20772[(7)]);
var state_20772__$1 = state_20772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20772__$1,(11),out,inst_20754);
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
});})(c__19252__auto___20791,out))
;
return ((function (switch__19157__auto__,c__19252__auto___20791,out){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_20786 = [null,null,null,null,null,null,null,null,null];
(statearr_20786[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_20786[(1)] = (1));

return statearr_20786;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_20772){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20787){if((e20787 instanceof Object)){
var ex__19161__auto__ = e20787;
var statearr_20788_20802 = state_20772;
(statearr_20788_20802[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20803 = state_20772;
state_20772 = G__20803;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_20772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_20772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20791,out))
})();
var state__19254__auto__ = (function (){var statearr_20789 = f__19253__auto__.call(null);
(statearr_20789[(6)] = c__19252__auto___20791);

return statearr_20789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20791,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20805 = arguments.length;
switch (G__20805) {
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
var c__19252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto__){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto__){
return (function (state_20868){
var state_val_20869 = (state_20868[(1)]);
if((state_val_20869 === (7))){
var inst_20864 = (state_20868[(2)]);
var state_20868__$1 = state_20868;
var statearr_20870_20908 = state_20868__$1;
(statearr_20870_20908[(2)] = inst_20864);

(statearr_20870_20908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (20))){
var inst_20834 = (state_20868[(7)]);
var inst_20845 = (state_20868[(2)]);
var inst_20846 = cljs.core.next.call(null,inst_20834);
var inst_20820 = inst_20846;
var inst_20821 = null;
var inst_20822 = (0);
var inst_20823 = (0);
var state_20868__$1 = (function (){var statearr_20871 = state_20868;
(statearr_20871[(8)] = inst_20822);

(statearr_20871[(9)] = inst_20823);

(statearr_20871[(10)] = inst_20820);

(statearr_20871[(11)] = inst_20845);

(statearr_20871[(12)] = inst_20821);

return statearr_20871;
})();
var statearr_20872_20909 = state_20868__$1;
(statearr_20872_20909[(2)] = null);

(statearr_20872_20909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (1))){
var state_20868__$1 = state_20868;
var statearr_20873_20910 = state_20868__$1;
(statearr_20873_20910[(2)] = null);

(statearr_20873_20910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (4))){
var inst_20809 = (state_20868[(13)]);
var inst_20809__$1 = (state_20868[(2)]);
var inst_20810 = (inst_20809__$1 == null);
var state_20868__$1 = (function (){var statearr_20874 = state_20868;
(statearr_20874[(13)] = inst_20809__$1);

return statearr_20874;
})();
if(cljs.core.truth_(inst_20810)){
var statearr_20875_20911 = state_20868__$1;
(statearr_20875_20911[(1)] = (5));

} else {
var statearr_20876_20912 = state_20868__$1;
(statearr_20876_20912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (15))){
var state_20868__$1 = state_20868;
var statearr_20880_20913 = state_20868__$1;
(statearr_20880_20913[(2)] = null);

(statearr_20880_20913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (21))){
var state_20868__$1 = state_20868;
var statearr_20881_20914 = state_20868__$1;
(statearr_20881_20914[(2)] = null);

(statearr_20881_20914[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (13))){
var inst_20822 = (state_20868[(8)]);
var inst_20823 = (state_20868[(9)]);
var inst_20820 = (state_20868[(10)]);
var inst_20821 = (state_20868[(12)]);
var inst_20830 = (state_20868[(2)]);
var inst_20831 = (inst_20823 + (1));
var tmp20877 = inst_20822;
var tmp20878 = inst_20820;
var tmp20879 = inst_20821;
var inst_20820__$1 = tmp20878;
var inst_20821__$1 = tmp20879;
var inst_20822__$1 = tmp20877;
var inst_20823__$1 = inst_20831;
var state_20868__$1 = (function (){var statearr_20882 = state_20868;
(statearr_20882[(8)] = inst_20822__$1);

(statearr_20882[(9)] = inst_20823__$1);

(statearr_20882[(14)] = inst_20830);

(statearr_20882[(10)] = inst_20820__$1);

(statearr_20882[(12)] = inst_20821__$1);

return statearr_20882;
})();
var statearr_20883_20915 = state_20868__$1;
(statearr_20883_20915[(2)] = null);

(statearr_20883_20915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (22))){
var state_20868__$1 = state_20868;
var statearr_20884_20916 = state_20868__$1;
(statearr_20884_20916[(2)] = null);

(statearr_20884_20916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (6))){
var inst_20809 = (state_20868[(13)]);
var inst_20818 = f.call(null,inst_20809);
var inst_20819 = cljs.core.seq.call(null,inst_20818);
var inst_20820 = inst_20819;
var inst_20821 = null;
var inst_20822 = (0);
var inst_20823 = (0);
var state_20868__$1 = (function (){var statearr_20885 = state_20868;
(statearr_20885[(8)] = inst_20822);

(statearr_20885[(9)] = inst_20823);

(statearr_20885[(10)] = inst_20820);

(statearr_20885[(12)] = inst_20821);

return statearr_20885;
})();
var statearr_20886_20917 = state_20868__$1;
(statearr_20886_20917[(2)] = null);

(statearr_20886_20917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (17))){
var inst_20834 = (state_20868[(7)]);
var inst_20838 = cljs.core.chunk_first.call(null,inst_20834);
var inst_20839 = cljs.core.chunk_rest.call(null,inst_20834);
var inst_20840 = cljs.core.count.call(null,inst_20838);
var inst_20820 = inst_20839;
var inst_20821 = inst_20838;
var inst_20822 = inst_20840;
var inst_20823 = (0);
var state_20868__$1 = (function (){var statearr_20887 = state_20868;
(statearr_20887[(8)] = inst_20822);

(statearr_20887[(9)] = inst_20823);

(statearr_20887[(10)] = inst_20820);

(statearr_20887[(12)] = inst_20821);

return statearr_20887;
})();
var statearr_20888_20918 = state_20868__$1;
(statearr_20888_20918[(2)] = null);

(statearr_20888_20918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (3))){
var inst_20866 = (state_20868[(2)]);
var state_20868__$1 = state_20868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20868__$1,inst_20866);
} else {
if((state_val_20869 === (12))){
var inst_20854 = (state_20868[(2)]);
var state_20868__$1 = state_20868;
var statearr_20889_20919 = state_20868__$1;
(statearr_20889_20919[(2)] = inst_20854);

(statearr_20889_20919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (2))){
var state_20868__$1 = state_20868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20868__$1,(4),in$);
} else {
if((state_val_20869 === (23))){
var inst_20862 = (state_20868[(2)]);
var state_20868__$1 = state_20868;
var statearr_20890_20920 = state_20868__$1;
(statearr_20890_20920[(2)] = inst_20862);

(statearr_20890_20920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (19))){
var inst_20849 = (state_20868[(2)]);
var state_20868__$1 = state_20868;
var statearr_20891_20921 = state_20868__$1;
(statearr_20891_20921[(2)] = inst_20849);

(statearr_20891_20921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (11))){
var inst_20820 = (state_20868[(10)]);
var inst_20834 = (state_20868[(7)]);
var inst_20834__$1 = cljs.core.seq.call(null,inst_20820);
var state_20868__$1 = (function (){var statearr_20892 = state_20868;
(statearr_20892[(7)] = inst_20834__$1);

return statearr_20892;
})();
if(inst_20834__$1){
var statearr_20893_20922 = state_20868__$1;
(statearr_20893_20922[(1)] = (14));

} else {
var statearr_20894_20923 = state_20868__$1;
(statearr_20894_20923[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (9))){
var inst_20856 = (state_20868[(2)]);
var inst_20857 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20868__$1 = (function (){var statearr_20895 = state_20868;
(statearr_20895[(15)] = inst_20856);

return statearr_20895;
})();
if(cljs.core.truth_(inst_20857)){
var statearr_20896_20924 = state_20868__$1;
(statearr_20896_20924[(1)] = (21));

} else {
var statearr_20897_20925 = state_20868__$1;
(statearr_20897_20925[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (5))){
var inst_20812 = cljs.core.async.close_BANG_.call(null,out);
var state_20868__$1 = state_20868;
var statearr_20898_20926 = state_20868__$1;
(statearr_20898_20926[(2)] = inst_20812);

(statearr_20898_20926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (14))){
var inst_20834 = (state_20868[(7)]);
var inst_20836 = cljs.core.chunked_seq_QMARK_.call(null,inst_20834);
var state_20868__$1 = state_20868;
if(inst_20836){
var statearr_20899_20927 = state_20868__$1;
(statearr_20899_20927[(1)] = (17));

} else {
var statearr_20900_20928 = state_20868__$1;
(statearr_20900_20928[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (16))){
var inst_20852 = (state_20868[(2)]);
var state_20868__$1 = state_20868;
var statearr_20901_20929 = state_20868__$1;
(statearr_20901_20929[(2)] = inst_20852);

(statearr_20901_20929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20869 === (10))){
var inst_20823 = (state_20868[(9)]);
var inst_20821 = (state_20868[(12)]);
var inst_20828 = cljs.core._nth.call(null,inst_20821,inst_20823);
var state_20868__$1 = state_20868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20868__$1,(13),out,inst_20828);
} else {
if((state_val_20869 === (18))){
var inst_20834 = (state_20868[(7)]);
var inst_20843 = cljs.core.first.call(null,inst_20834);
var state_20868__$1 = state_20868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20868__$1,(20),out,inst_20843);
} else {
if((state_val_20869 === (8))){
var inst_20822 = (state_20868[(8)]);
var inst_20823 = (state_20868[(9)]);
var inst_20825 = (inst_20823 < inst_20822);
var inst_20826 = inst_20825;
var state_20868__$1 = state_20868;
if(cljs.core.truth_(inst_20826)){
var statearr_20902_20930 = state_20868__$1;
(statearr_20902_20930[(1)] = (10));

} else {
var statearr_20903_20931 = state_20868__$1;
(statearr_20903_20931[(1)] = (11));

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
});})(c__19252__auto__))
;
return ((function (switch__19157__auto__,c__19252__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19158__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19158__auto____0 = (function (){
var statearr_20904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20904[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19158__auto__);

(statearr_20904[(1)] = (1));

return statearr_20904;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19158__auto____1 = (function (state_20868){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20905){if((e20905 instanceof Object)){
var ex__19161__auto__ = e20905;
var statearr_20906_20932 = state_20868;
(statearr_20906_20932[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20933 = state_20868;
state_20868 = G__20933;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19158__auto__ = function(state_20868){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19158__auto____1.call(this,state_20868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19158__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19158__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto__))
})();
var state__19254__auto__ = (function (){var statearr_20907 = f__19253__auto__.call(null);
(statearr_20907[(6)] = c__19252__auto__);

return statearr_20907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto__))
);

return c__19252__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20935 = arguments.length;
switch (G__20935) {
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
var G__20938 = arguments.length;
switch (G__20938) {
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
var G__20941 = arguments.length;
switch (G__20941) {
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
var c__19252__auto___20988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___20988,out){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___20988,out){
return (function (state_20965){
var state_val_20966 = (state_20965[(1)]);
if((state_val_20966 === (7))){
var inst_20960 = (state_20965[(2)]);
var state_20965__$1 = state_20965;
var statearr_20967_20989 = state_20965__$1;
(statearr_20967_20989[(2)] = inst_20960);

(statearr_20967_20989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20966 === (1))){
var inst_20942 = null;
var state_20965__$1 = (function (){var statearr_20968 = state_20965;
(statearr_20968[(7)] = inst_20942);

return statearr_20968;
})();
var statearr_20969_20990 = state_20965__$1;
(statearr_20969_20990[(2)] = null);

(statearr_20969_20990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20966 === (4))){
var inst_20945 = (state_20965[(8)]);
var inst_20945__$1 = (state_20965[(2)]);
var inst_20946 = (inst_20945__$1 == null);
var inst_20947 = cljs.core.not.call(null,inst_20946);
var state_20965__$1 = (function (){var statearr_20970 = state_20965;
(statearr_20970[(8)] = inst_20945__$1);

return statearr_20970;
})();
if(inst_20947){
var statearr_20971_20991 = state_20965__$1;
(statearr_20971_20991[(1)] = (5));

} else {
var statearr_20972_20992 = state_20965__$1;
(statearr_20972_20992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20966 === (6))){
var state_20965__$1 = state_20965;
var statearr_20973_20993 = state_20965__$1;
(statearr_20973_20993[(2)] = null);

(statearr_20973_20993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20966 === (3))){
var inst_20962 = (state_20965[(2)]);
var inst_20963 = cljs.core.async.close_BANG_.call(null,out);
var state_20965__$1 = (function (){var statearr_20974 = state_20965;
(statearr_20974[(9)] = inst_20962);

return statearr_20974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20965__$1,inst_20963);
} else {
if((state_val_20966 === (2))){
var state_20965__$1 = state_20965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20965__$1,(4),ch);
} else {
if((state_val_20966 === (11))){
var inst_20945 = (state_20965[(8)]);
var inst_20954 = (state_20965[(2)]);
var inst_20942 = inst_20945;
var state_20965__$1 = (function (){var statearr_20975 = state_20965;
(statearr_20975[(7)] = inst_20942);

(statearr_20975[(10)] = inst_20954);

return statearr_20975;
})();
var statearr_20976_20994 = state_20965__$1;
(statearr_20976_20994[(2)] = null);

(statearr_20976_20994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20966 === (9))){
var inst_20945 = (state_20965[(8)]);
var state_20965__$1 = state_20965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20965__$1,(11),out,inst_20945);
} else {
if((state_val_20966 === (5))){
var inst_20945 = (state_20965[(8)]);
var inst_20942 = (state_20965[(7)]);
var inst_20949 = cljs.core._EQ_.call(null,inst_20945,inst_20942);
var state_20965__$1 = state_20965;
if(inst_20949){
var statearr_20978_20995 = state_20965__$1;
(statearr_20978_20995[(1)] = (8));

} else {
var statearr_20979_20996 = state_20965__$1;
(statearr_20979_20996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20966 === (10))){
var inst_20957 = (state_20965[(2)]);
var state_20965__$1 = state_20965;
var statearr_20980_20997 = state_20965__$1;
(statearr_20980_20997[(2)] = inst_20957);

(statearr_20980_20997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20966 === (8))){
var inst_20942 = (state_20965[(7)]);
var tmp20977 = inst_20942;
var inst_20942__$1 = tmp20977;
var state_20965__$1 = (function (){var statearr_20981 = state_20965;
(statearr_20981[(7)] = inst_20942__$1);

return statearr_20981;
})();
var statearr_20982_20998 = state_20965__$1;
(statearr_20982_20998[(2)] = null);

(statearr_20982_20998[(1)] = (2));


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
});})(c__19252__auto___20988,out))
;
return ((function (switch__19157__auto__,c__19252__auto___20988,out){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_20983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20983[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_20983[(1)] = (1));

return statearr_20983;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_20965){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_20965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e20984){if((e20984 instanceof Object)){
var ex__19161__auto__ = e20984;
var statearr_20985_20999 = state_20965;
(statearr_20985_20999[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21000 = state_20965;
state_20965 = G__21000;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_20965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_20965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___20988,out))
})();
var state__19254__auto__ = (function (){var statearr_20986 = f__19253__auto__.call(null);
(statearr_20986[(6)] = c__19252__auto___20988);

return statearr_20986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___20988,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21002 = arguments.length;
switch (G__21002) {
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
var c__19252__auto___21068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___21068,out){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___21068,out){
return (function (state_21040){
var state_val_21041 = (state_21040[(1)]);
if((state_val_21041 === (7))){
var inst_21036 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21042_21069 = state_21040__$1;
(statearr_21042_21069[(2)] = inst_21036);

(statearr_21042_21069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (1))){
var inst_21003 = (new Array(n));
var inst_21004 = inst_21003;
var inst_21005 = (0);
var state_21040__$1 = (function (){var statearr_21043 = state_21040;
(statearr_21043[(7)] = inst_21004);

(statearr_21043[(8)] = inst_21005);

return statearr_21043;
})();
var statearr_21044_21070 = state_21040__$1;
(statearr_21044_21070[(2)] = null);

(statearr_21044_21070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (4))){
var inst_21008 = (state_21040[(9)]);
var inst_21008__$1 = (state_21040[(2)]);
var inst_21009 = (inst_21008__$1 == null);
var inst_21010 = cljs.core.not.call(null,inst_21009);
var state_21040__$1 = (function (){var statearr_21045 = state_21040;
(statearr_21045[(9)] = inst_21008__$1);

return statearr_21045;
})();
if(inst_21010){
var statearr_21046_21071 = state_21040__$1;
(statearr_21046_21071[(1)] = (5));

} else {
var statearr_21047_21072 = state_21040__$1;
(statearr_21047_21072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (15))){
var inst_21030 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21048_21073 = state_21040__$1;
(statearr_21048_21073[(2)] = inst_21030);

(statearr_21048_21073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (13))){
var state_21040__$1 = state_21040;
var statearr_21049_21074 = state_21040__$1;
(statearr_21049_21074[(2)] = null);

(statearr_21049_21074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (6))){
var inst_21005 = (state_21040[(8)]);
var inst_21026 = (inst_21005 > (0));
var state_21040__$1 = state_21040;
if(cljs.core.truth_(inst_21026)){
var statearr_21050_21075 = state_21040__$1;
(statearr_21050_21075[(1)] = (12));

} else {
var statearr_21051_21076 = state_21040__$1;
(statearr_21051_21076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (3))){
var inst_21038 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21040__$1,inst_21038);
} else {
if((state_val_21041 === (12))){
var inst_21004 = (state_21040[(7)]);
var inst_21028 = cljs.core.vec.call(null,inst_21004);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21040__$1,(15),out,inst_21028);
} else {
if((state_val_21041 === (2))){
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21040__$1,(4),ch);
} else {
if((state_val_21041 === (11))){
var inst_21020 = (state_21040[(2)]);
var inst_21021 = (new Array(n));
var inst_21004 = inst_21021;
var inst_21005 = (0);
var state_21040__$1 = (function (){var statearr_21052 = state_21040;
(statearr_21052[(10)] = inst_21020);

(statearr_21052[(7)] = inst_21004);

(statearr_21052[(8)] = inst_21005);

return statearr_21052;
})();
var statearr_21053_21077 = state_21040__$1;
(statearr_21053_21077[(2)] = null);

(statearr_21053_21077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (9))){
var inst_21004 = (state_21040[(7)]);
var inst_21018 = cljs.core.vec.call(null,inst_21004);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21040__$1,(11),out,inst_21018);
} else {
if((state_val_21041 === (5))){
var inst_21008 = (state_21040[(9)]);
var inst_21004 = (state_21040[(7)]);
var inst_21005 = (state_21040[(8)]);
var inst_21013 = (state_21040[(11)]);
var inst_21012 = (inst_21004[inst_21005] = inst_21008);
var inst_21013__$1 = (inst_21005 + (1));
var inst_21014 = (inst_21013__$1 < n);
var state_21040__$1 = (function (){var statearr_21054 = state_21040;
(statearr_21054[(12)] = inst_21012);

(statearr_21054[(11)] = inst_21013__$1);

return statearr_21054;
})();
if(cljs.core.truth_(inst_21014)){
var statearr_21055_21078 = state_21040__$1;
(statearr_21055_21078[(1)] = (8));

} else {
var statearr_21056_21079 = state_21040__$1;
(statearr_21056_21079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (14))){
var inst_21033 = (state_21040[(2)]);
var inst_21034 = cljs.core.async.close_BANG_.call(null,out);
var state_21040__$1 = (function (){var statearr_21058 = state_21040;
(statearr_21058[(13)] = inst_21033);

return statearr_21058;
})();
var statearr_21059_21080 = state_21040__$1;
(statearr_21059_21080[(2)] = inst_21034);

(statearr_21059_21080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (10))){
var inst_21024 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21060_21081 = state_21040__$1;
(statearr_21060_21081[(2)] = inst_21024);

(statearr_21060_21081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (8))){
var inst_21004 = (state_21040[(7)]);
var inst_21013 = (state_21040[(11)]);
var tmp21057 = inst_21004;
var inst_21004__$1 = tmp21057;
var inst_21005 = inst_21013;
var state_21040__$1 = (function (){var statearr_21061 = state_21040;
(statearr_21061[(7)] = inst_21004__$1);

(statearr_21061[(8)] = inst_21005);

return statearr_21061;
})();
var statearr_21062_21082 = state_21040__$1;
(statearr_21062_21082[(2)] = null);

(statearr_21062_21082[(1)] = (2));


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
});})(c__19252__auto___21068,out))
;
return ((function (switch__19157__auto__,c__19252__auto___21068,out){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_21063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21063[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_21063[(1)] = (1));

return statearr_21063;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_21040){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_21040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e21064){if((e21064 instanceof Object)){
var ex__19161__auto__ = e21064;
var statearr_21065_21083 = state_21040;
(statearr_21065_21083[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21084 = state_21040;
state_21040 = G__21084;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_21040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_21040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___21068,out))
})();
var state__19254__auto__ = (function (){var statearr_21066 = f__19253__auto__.call(null);
(statearr_21066[(6)] = c__19252__auto___21068);

return statearr_21066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___21068,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21086 = arguments.length;
switch (G__21086) {
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
var c__19252__auto___21156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19252__auto___21156,out){
return (function (){
var f__19253__auto__ = (function (){var switch__19157__auto__ = ((function (c__19252__auto___21156,out){
return (function (state_21128){
var state_val_21129 = (state_21128[(1)]);
if((state_val_21129 === (7))){
var inst_21124 = (state_21128[(2)]);
var state_21128__$1 = state_21128;
var statearr_21130_21157 = state_21128__$1;
(statearr_21130_21157[(2)] = inst_21124);

(statearr_21130_21157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (1))){
var inst_21087 = [];
var inst_21088 = inst_21087;
var inst_21089 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21128__$1 = (function (){var statearr_21131 = state_21128;
(statearr_21131[(7)] = inst_21088);

(statearr_21131[(8)] = inst_21089);

return statearr_21131;
})();
var statearr_21132_21158 = state_21128__$1;
(statearr_21132_21158[(2)] = null);

(statearr_21132_21158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (4))){
var inst_21092 = (state_21128[(9)]);
var inst_21092__$1 = (state_21128[(2)]);
var inst_21093 = (inst_21092__$1 == null);
var inst_21094 = cljs.core.not.call(null,inst_21093);
var state_21128__$1 = (function (){var statearr_21133 = state_21128;
(statearr_21133[(9)] = inst_21092__$1);

return statearr_21133;
})();
if(inst_21094){
var statearr_21134_21159 = state_21128__$1;
(statearr_21134_21159[(1)] = (5));

} else {
var statearr_21135_21160 = state_21128__$1;
(statearr_21135_21160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (15))){
var inst_21118 = (state_21128[(2)]);
var state_21128__$1 = state_21128;
var statearr_21136_21161 = state_21128__$1;
(statearr_21136_21161[(2)] = inst_21118);

(statearr_21136_21161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (13))){
var state_21128__$1 = state_21128;
var statearr_21137_21162 = state_21128__$1;
(statearr_21137_21162[(2)] = null);

(statearr_21137_21162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (6))){
var inst_21088 = (state_21128[(7)]);
var inst_21113 = inst_21088.length;
var inst_21114 = (inst_21113 > (0));
var state_21128__$1 = state_21128;
if(cljs.core.truth_(inst_21114)){
var statearr_21138_21163 = state_21128__$1;
(statearr_21138_21163[(1)] = (12));

} else {
var statearr_21139_21164 = state_21128__$1;
(statearr_21139_21164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (3))){
var inst_21126 = (state_21128[(2)]);
var state_21128__$1 = state_21128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21128__$1,inst_21126);
} else {
if((state_val_21129 === (12))){
var inst_21088 = (state_21128[(7)]);
var inst_21116 = cljs.core.vec.call(null,inst_21088);
var state_21128__$1 = state_21128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21128__$1,(15),out,inst_21116);
} else {
if((state_val_21129 === (2))){
var state_21128__$1 = state_21128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21128__$1,(4),ch);
} else {
if((state_val_21129 === (11))){
var inst_21096 = (state_21128[(10)]);
var inst_21092 = (state_21128[(9)]);
var inst_21106 = (state_21128[(2)]);
var inst_21107 = [];
var inst_21108 = inst_21107.push(inst_21092);
var inst_21088 = inst_21107;
var inst_21089 = inst_21096;
var state_21128__$1 = (function (){var statearr_21140 = state_21128;
(statearr_21140[(7)] = inst_21088);

(statearr_21140[(11)] = inst_21108);

(statearr_21140[(8)] = inst_21089);

(statearr_21140[(12)] = inst_21106);

return statearr_21140;
})();
var statearr_21141_21165 = state_21128__$1;
(statearr_21141_21165[(2)] = null);

(statearr_21141_21165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (9))){
var inst_21088 = (state_21128[(7)]);
var inst_21104 = cljs.core.vec.call(null,inst_21088);
var state_21128__$1 = state_21128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21128__$1,(11),out,inst_21104);
} else {
if((state_val_21129 === (5))){
var inst_21089 = (state_21128[(8)]);
var inst_21096 = (state_21128[(10)]);
var inst_21092 = (state_21128[(9)]);
var inst_21096__$1 = f.call(null,inst_21092);
var inst_21097 = cljs.core._EQ_.call(null,inst_21096__$1,inst_21089);
var inst_21098 = cljs.core.keyword_identical_QMARK_.call(null,inst_21089,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21099 = ((inst_21097) || (inst_21098));
var state_21128__$1 = (function (){var statearr_21142 = state_21128;
(statearr_21142[(10)] = inst_21096__$1);

return statearr_21142;
})();
if(cljs.core.truth_(inst_21099)){
var statearr_21143_21166 = state_21128__$1;
(statearr_21143_21166[(1)] = (8));

} else {
var statearr_21144_21167 = state_21128__$1;
(statearr_21144_21167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (14))){
var inst_21121 = (state_21128[(2)]);
var inst_21122 = cljs.core.async.close_BANG_.call(null,out);
var state_21128__$1 = (function (){var statearr_21146 = state_21128;
(statearr_21146[(13)] = inst_21121);

return statearr_21146;
})();
var statearr_21147_21168 = state_21128__$1;
(statearr_21147_21168[(2)] = inst_21122);

(statearr_21147_21168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (10))){
var inst_21111 = (state_21128[(2)]);
var state_21128__$1 = state_21128;
var statearr_21148_21169 = state_21128__$1;
(statearr_21148_21169[(2)] = inst_21111);

(statearr_21148_21169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (8))){
var inst_21088 = (state_21128[(7)]);
var inst_21096 = (state_21128[(10)]);
var inst_21092 = (state_21128[(9)]);
var inst_21101 = inst_21088.push(inst_21092);
var tmp21145 = inst_21088;
var inst_21088__$1 = tmp21145;
var inst_21089 = inst_21096;
var state_21128__$1 = (function (){var statearr_21149 = state_21128;
(statearr_21149[(7)] = inst_21088__$1);

(statearr_21149[(14)] = inst_21101);

(statearr_21149[(8)] = inst_21089);

return statearr_21149;
})();
var statearr_21150_21170 = state_21128__$1;
(statearr_21150_21170[(2)] = null);

(statearr_21150_21170[(1)] = (2));


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
});})(c__19252__auto___21156,out))
;
return ((function (switch__19157__auto__,c__19252__auto___21156,out){
return (function() {
var cljs$core$async$state_machine__19158__auto__ = null;
var cljs$core$async$state_machine__19158__auto____0 = (function (){
var statearr_21151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21151[(0)] = cljs$core$async$state_machine__19158__auto__);

(statearr_21151[(1)] = (1));

return statearr_21151;
});
var cljs$core$async$state_machine__19158__auto____1 = (function (state_21128){
while(true){
var ret_value__19159__auto__ = (function (){try{while(true){
var result__19160__auto__ = switch__19157__auto__.call(null,state_21128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19160__auto__;
}
break;
}
}catch (e21152){if((e21152 instanceof Object)){
var ex__19161__auto__ = e21152;
var statearr_21153_21171 = state_21128;
(statearr_21153_21171[(5)] = ex__19161__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21172 = state_21128;
state_21128 = G__21172;
continue;
} else {
return ret_value__19159__auto__;
}
break;
}
});
cljs$core$async$state_machine__19158__auto__ = function(state_21128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19158__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19158__auto____1.call(this,state_21128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19158__auto____0;
cljs$core$async$state_machine__19158__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19158__auto____1;
return cljs$core$async$state_machine__19158__auto__;
})()
;})(switch__19157__auto__,c__19252__auto___21156,out))
})();
var state__19254__auto__ = (function (){var statearr_21154 = f__19253__auto__.call(null);
(statearr_21154[(6)] = c__19252__auto___21156);

return statearr_21154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19254__auto__);
});})(c__19252__auto___21156,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

