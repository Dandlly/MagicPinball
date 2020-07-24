
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk5ldFdvcmtcXEZOZXRXb3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLG1DQUFrQztBQUNsQyw2Q0FBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QztJQWlCSTtRQWRBLFFBQVE7UUFDQSx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsVUFBVTtRQUNGLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFNBQVM7UUFDRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUMzQixTQUFTO1FBQ0Qsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDN0IsTUFBTTtRQUNFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDeEIsTUFBTTtRQUNDLE9BQUUsR0FBRyxJQUFJLENBQUM7UUFDVixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBcU1iLFFBQUcsR0FBRyxDQUFDLENBQUM7SUFqTWhCLENBQUM7SUFFTSxzQkFBRyxHQUFWLFVBQVcsSUFBSSxFQUFFLEVBQWEsRUFBRSxNQUFPO1FBQ25DLElBQUksRUFBRSxFQUFFO1lBQ0osSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN4QjtRQUNELGlCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0MsaUJBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLFNBQVMs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UyxDQUFDLENBQUM7U0FDbkM7YUFDSTtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlPLHVCQUFJLEdBQVosVUFBYSxLQUFLO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDOUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxTQUFTLEVBQUU7WUFDWCxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNsRCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDMUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFoT1EsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQWtPcEI7SUFBRCxlQUFDO0NBbE9ELEFBa09DLElBQUE7QUFsT1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4uL0ZNb2RlbC9GR2xvYmFsXCI7XHJcbmltcG9ydCB7IEZMb2dpYyB9IGZyb20gXCIuL0ZMb2dpY1wiO1xyXG5pbXBvcnQgeyBGU29ja2V0U2VuZCB9IGZyb20gXCIuL0ZTb2NrZXRTZW5kXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRk5ldFdvcmsge1xyXG4gICAgLy/lrprkuYlzb2NrZXRcclxuICAgIHNvY2tldDogV2ViU29ja2V0O1xyXG4gICAgLy/orr7nva7otoXml7bml7bpl7RcclxuICAgIHByaXZhdGUgSEVBUlRCRUFUX1RJTUVfT1VUID0gNTAwMDtcclxuICAgIC8v6K6+572u5b+D6Lez6Ze06ZqU5pe26Ze0XHJcbiAgICBwcml2YXRlIEhFQVJUQkVBVF9USU1FID0gMTAwMDA7XHJcbiAgICAvL+W/g+i3s+mXtOmalOWumuaXtuWZqFxyXG4gICAgcHJpdmF0ZSBIRUFSVF9DTElDSyA9IG51bGw7XHJcbiAgICAvL+W/g+i3s+i2heaXtuWumuaXtuWZqFxyXG4gICAgcHJpdmF0ZSBIRUFSVF9USU1FT1VUID0gbnVsbDtcclxuICAgIC8v5Zue6LCD5a2X5YW4XHJcbiAgICBwcml2YXRlIF9jYWxsYmFja3MgPSB7fTtcclxuICAgIC8v5Zue6LCD5Ye95pWwXHJcbiAgICBwdWJsaWMgY2IgPSBudWxsO1xyXG4gICAgcHVibGljIHRhcmdldCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnQoZGF0YSwgY2I/OiBGdW5jdGlvbiwgdGFyZ2V0Pykge1xyXG4gICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsub2ZmKEZFdmVudElELkVWRU5UX0lPX0VSUk9SKTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsub2ZmKEZFdmVudElELkVWRU5UX0NMT1NFKTtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmludFNvY2tldChkYXRhLmhvc3QsIGRhdGEucG9ydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRTb2NrZXQoaG9zdCwgcG9ydCkge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldChob3N0LCBbXSwgY2MudXJsLnJhdyhcInJlc291cmNlcy9GU0RLX1JFUy9jYWNlcnQucGVtXCIpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uQ29ubmVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gdGhpcy5vbklPRXJyb3IuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6L+e5o6l5oiQ5YqfXHJcbiAgICBwcml2YXRlIG9uQ29ubmVjdCgpIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcInNvY2tldCDov57mjqXmiJDlip9cIilcclxuICAgICAgICBpZiAodGhpcy5jYikge1xyXG4gICAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNiID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGVuSGVhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NvY2tldOaWreW8gFxyXG4gICAgcHJpdmF0ZSBvbkNsb3NlKGU6IENsb3NlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQWxsVGltZSgpO1xyXG4gICAgICAgIHRoaXMuZW1pdChGRXZlbnRJRC5FVkVOVF9DTE9TRSwgZSk7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCJzb2NrZXQg6L+e5o6l5pat5byAXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5IZWFydCgpIHtcclxuICAgICAgICBGU29ja2V0U2VuZC5DMlNfaGVhcnRiZWF0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ov57mjqXplJnor69cclxuICAgIHByaXZhdGUgb25JT0Vycm9yKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckFsbFRpbWUoKTtcclxuICAgICAgICB0aGlzLmVtaXQoRkV2ZW50SUQuRVZFTlRfSU9fRVJST1IsIGUpO1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwic29ja2V0IOi/nuaOpemUmeivr1wiKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6YCA5Ye655m75b2V5LqGXHJcbiAgICBvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckFsbFRpbWUoKTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsub2ZmKEZFdmVudElELkVWRU5UX0lPX0VSUk9SKTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsub2ZmKEZFdmVudElELkVWRU5UX0NMT1NFKTtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGTG9naWMuZ2V0SW5zdGFuY2UoKS5yZW1vdmVDb21tb25MaXN0ZW5zZXIoKTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5b+D6Lez5YyFXHJcbiAgICBwdWJsaWMgaGVhcnRiZWF0KCkge1xyXG4gICAgICAgIC8v6L+b5p2l5bCx6K+B5piO5rKh5pyJ6LaF5pe2XHJcbiAgICAgICAgaWYgKHRoaXMuSEVBUlRfVElNRU9VVCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5IRUFSVF9USU1FT1VUKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5IRUFSVF9DTElDSyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBGU29ja2V0U2VuZC5DMlNfaGVhcnRiZWF0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuSEVBUlRfVElNRU9VVCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydGJlYXRPdXQoKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLkhFQVJUQkVBVF9USU1FX09VVCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLkhFQVJUQkVBVF9USU1FKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W/g+i3s+i2heaXtuWVplxyXG4gICAgcHVibGljIGhlYXJ0YmVhdE91dCgpIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIuW/g+i3s+i2heaXtumXtFwiKVxyXG4gICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mHjei/nlxyXG4gICAgcHJpdmF0ZSBfZGlzY29ubmVjdCgpOiB2b2lkIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIumHjei/nlwiKVxyXG4gICAgICAgIGlmICh0aGlzLnNvY2tldCAmJiB0aGlzLnNvY2tldC5yZWFkeVN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQWxsVGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+a4hemZpOiuoeaXtuWZqFxyXG4gICAgY2xlYXJBbGxUaW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkhFQVJUX0NMSUNLKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLkhFQVJUX0NMSUNLKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuSEVBUlRfVElNRU9VVCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5IRUFSVF9USU1FT1VUKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKua3u+WKoOa2iOaBr+S6i+S7tuWPiuWFtuebkeWQrCAqL1xyXG4gICAgcHVibGljIG9uKGV2ZW50LCBmbikge1xyXG4gICAgICAgICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSkucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e76Zmk5a+55raI5oGv55qE5LqL5Lu255uR5ZCsICovXHJcbiAgICBwdWJsaWMgb2ZmKGV2ZW50PywgZm4/KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQsIGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50PywgZm4/KSB7XHJcbiAgICAgICAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XHJcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV2ZW50ICYmICFmbikge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLmluZGV4KGNhbGxiYWNrcywgZm4uX29mZiB8fCBmbik7XHJcbiAgICAgICAgaWYgKH5pKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4KGFyciwgb2JqKSB7XHJcbiAgICAgICAgaWYgKFtdLmluZGV4T2YpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoYXJyW2ldID09PSBvYmopXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWQkeacjeWKoeWZqOivt+axglxyXG4gICAgICogMS5tc2dfY29kZTrlr7nlupTmtojmga/noIFcclxuICAgICAqIDIubXNnOumcgOimgeWPkemAgeeahOaVsOaNrlxyXG4gICAgICogMy5jYiDor7fmsYLov5Tlm57kuYvlkI7nmoTlm57osINcclxuICAgICAgKi9cclxuICAgIHB1YmxpYyByZXF1ZXN0KG1zZykge1xyXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlj5HpgIHmtojmga8gKi9cclxuICAgIHByaXZhdGUgc2VuZE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIEZMb2cubm9ybWFsKFwi6L+Z5Liq5piv5a6i5oi356uv55qE5LiK5oqlICAgXCIsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgRkxvZy5ub3JtYWwoXCLov5nkuKrmmK/lrqLmiLfnq6/nmoTkuIrmiqUgICBcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbXNnU3RyOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB0aGlzLnNlbmQobXNnU3RyKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kKGJ5dGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zb2NrZXQgJiYgdGhpcy5zb2NrZXQucmVhZHlTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoYnl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5raI5oGv5o6l5pS2XHJcbiAgICBwcml2YXRlIG9uTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1zZ09iamVjdCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgRkxvZy5ub3JtYWwoXCLmnI3liqHlmajov5Tlm55cIiwgbXNnT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIEZMb2cubm9ybWFsKFwi5pyN5Yqh5Zmo6L+U5ZueXCIsIEpTT04uc3RyaW5naWZ5KG1zZ09iamVjdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5kaXJlY3Rvci5lbWl0KG1zZ09iamVjdC50eXBlLCBtc2dPYmplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJ1ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGVtaXQoZXZlbnQsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcclxuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmNhbGwodGhpcywgcGFyYW1zLCBldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59Il19