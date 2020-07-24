"use strict";
cc._RF.push(module, 'd8ea2mqLAlH/Iq6vH0Lwlmn', 'FNetWork');
// FSDK_ASS/FSript/FNetWork/FNetWork.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FGlobal_1 = require("../FModel/FGlobal");
var FLogic_1 = require("./FLogic");
var FSocketSend_1 = require("./FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FNetWork = /** @class */ (function () {
    function FNetWork() {
        //设置超时时间
        this.HEARTBEAT_TIME_OUT = 5000;
        //设置心跳间隔时间
        this.HEARTBEAT_TIME = 10000;
        //心跳间隔定时器
        this.HEART_CLICK = null;
        //心跳超时定时器
        this.HEART_TIMEOUT = null;
        //回调字典
        this._callbacks = {};
        //回调函数
        this.cb = null;
        this.target = null;
        this.tru = 0;
    }
    FNetWork.prototype.int = function (data, cb, target) {
        if (cb) {
            this.cb = cb;
            this.target = target;
        }
        FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
        FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        this.intSocket(data.host, data.port);
    };
    FNetWork.prototype.intSocket = function (host, port) {
        this.socket = new WebSocket(host, [], cc.url.raw("resources/FSDK_RES/cacert.pem"));
        this.socket.binaryType = 'arraybuffer';
        this.socket.onopen = this.onConnect.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onerror = this.onIOError.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
    };
    //连接成功
    FNetWork.prototype.onConnect = function () {
        FLog.normal("socket 连接成功");
        if (this.cb) {
            this.cb.call(this.target);
            this.cb = null;
        }
        this.openHeart();
    };
    //socket断开
    FNetWork.prototype.onClose = function (e) {
        this.clearAllTime();
        this.emit(FEventID.EVENT_CLOSE, e);
        FLog.normal("socket 连接断开");
    };
    FNetWork.prototype.openHeart = function () {
        FSocketSend_1.FSocketSend.C2S_heartbeat();
    };
    //连接错误
    FNetWork.prototype.onIOError = function (e) {
        this.clearAllTime();
        this.emit(FEventID.EVENT_IO_ERROR, e);
        FLog.normal("socket 连接错误");
    };
    //退出登录了
    FNetWork.prototype.out = function () {
        this.clearAllTime();
        FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
        FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        FLogic_1.FLogic.getInstance().removeCommonListenser();
        FGlobal_1.FGlobal.NetWork = null;
    };
    //心跳包
    FNetWork.prototype.heartbeat = function () {
        //进来就证明没有超时
        if (this.HEART_TIMEOUT) {
            clearTimeout(this.HEART_TIMEOUT);
        }
        this.HEART_CLICK = setTimeout(function () {
            FSocketSend_1.FSocketSend.C2S_heartbeat();
            this.HEART_TIMEOUT = setTimeout(function () {
                this.heartbeatOut();
            }.bind(this), this.HEARTBEAT_TIME_OUT);
        }.bind(this), this.HEARTBEAT_TIME);
    };
    //心跳超时啦
    FNetWork.prototype.heartbeatOut = function () {
        FLog.normal("心跳超时间");
        this._disconnect();
    };
    //重连
    FNetWork.prototype._disconnect = function () {
        FLog.normal("重连");
        if (this.socket && this.socket.readyState == 1) {
            this.socket.close();
            this.socket = null;
            this.clearAllTime();
        }
    };
    //清除计时器
    FNetWork.prototype.clearAllTime = function () {
        if (this.HEART_CLICK) {
            clearTimeout(this.HEART_CLICK);
        }
        if (this.HEART_TIMEOUT) {
            clearTimeout(this.HEART_TIMEOUT);
        }
    };
    /**添加消息事件及其监听 */
    FNetWork.prototype.on = function (event, fn) {
        (this._callbacks[event] = this._callbacks[event] || []).push(fn);
    };
    /**移除对消息的事件监听 */
    FNetWork.prototype.off = function (event, fn) {
        this.removeAllListeners(event, fn);
    };
    FNetWork.prototype.removeAllListeners = function (event, fn) {
        if (0 == arguments.length) {
            this._callbacks = {};
            return;
        }
        var callbacks = this._callbacks[event];
        if (!callbacks) {
            return;
        }
        if (event && !fn) {
            delete this._callbacks[event];
            return;
        }
        var i = this.index(callbacks, fn._off || fn);
        if (~i) {
            callbacks.splice(i, 1);
        }
        return;
    };
    FNetWork.prototype.index = function (arr, obj) {
        if ([].indexOf) {
            return arr.indexOf(obj);
        }
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj)
                return i;
        }
        return -1;
    };
    /**向服务器请求
     * 1.msg_code:对应消息码
     * 2.msg:需要发送的数据
     * 3.cb 请求返回之后的回调
      */
    FNetWork.prototype.request = function (msg) {
        this.sendMessage(msg);
    };
    /**发送消息 */
    FNetWork.prototype.sendMessage = function (data) {
        if (!cc.sys.isNative) {
            FLog.normal("这个是客户端的上报   ", data);
        }
        else {
            FLog.normal("这个是客户端的上报   ", JSON.stringify(data));
        }
        var msgStr = JSON.stringify(data);
        this.send(msgStr);
        return true;
    };
    FNetWork.prototype.send = function (byte) {
        if (this.socket && this.socket.readyState == 1) {
            this.socket.send(byte);
        }
    };
    //消息接收
    FNetWork.prototype.onMessage = function (event) {
        var msgObject = JSON.parse(event.data);
        if (!cc.sys.isNative) {
            FLog.normal("服务器返回", msgObject);
        }
        else {
            FLog.normal("服务器返回", JSON.stringify(msgObject));
        }
        cc.director.emit(msgObject.type, msgObject);
    };
    FNetWork.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var params = [].slice.call(arguments, 1);
        var callbacks = this._callbacks[event];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].call(this, params, event);
            }
        }
        return this;
    };
    FNetWork = __decorate([
        ccclass
    ], FNetWork);
    return FNetWork;
}());
exports.FNetWork = FNetWork;

cc._RF.pop();