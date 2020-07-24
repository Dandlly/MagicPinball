import { FGlobal } from "../FModel/FGlobal";
import { FLogic } from "./FLogic";
import { FSocketSend } from "./FSocketSend";

const { ccclass, property } = cc._decorator;
@ccclass
export class FNetWork {
    //定义socket
    socket: WebSocket;
    //设置超时时间
    private HEARTBEAT_TIME_OUT = 5000;
    //设置心跳间隔时间
    private HEARTBEAT_TIME = 10000;
    //心跳间隔定时器
    private HEART_CLICK = null;
    //心跳超时定时器
    private HEART_TIMEOUT = null;
    //回调字典
    private _callbacks = {};
    //回调函数
    public cb = null;
    public target = null;

    constructor() {

    }

    public int(data, cb?: Function, target?) {
        if (cb) {
            this.cb = cb;
            this.target = target;
        }
        FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
        FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        this.intSocket(data.host, data.port);
    }

    private intSocket(host, port) {
        this.socket = new WebSocket(host, [], cc.url.raw("resources/FSDK_RES/cacert.pem"));
        this.socket.binaryType = 'arraybuffer';
        this.socket.onopen = this.onConnect.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onerror = this.onIOError.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
    }

    //连接成功
    private onConnect() {
        FLog.normal("socket 连接成功")
        if (this.cb) {
            this.cb.call(this.target);
            this.cb = null;
        }
        this.openHeart();
    }

    //socket断开
    private onClose(e: CloseEvent) {
        this.clearAllTime();
        this.emit(FEventID.EVENT_CLOSE, e);
        FLog.normal("socket 连接断开")
    }

    public openHeart() {
        FSocketSend.C2S_heartbeat();
    }

    //连接错误
    private onIOError(e: Event) {
        this.clearAllTime();
        this.emit(FEventID.EVENT_IO_ERROR, e);
        FLog.normal("socket 连接错误")
    }

    //退出登录了
    out() {
        this.clearAllTime();
        FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
        FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
        FLogic.getInstance().removeCommonListenser();
        FGlobal.NetWork = null;
    }

    //心跳包
    public heartbeat() {
        //进来就证明没有超时
        if (this.HEART_TIMEOUT) {
            clearTimeout(this.HEART_TIMEOUT);
        }
        this.HEART_CLICK = setTimeout(function () {
            FSocketSend.C2S_heartbeat();
            this.HEART_TIMEOUT = setTimeout(function () {
                this.heartbeatOut();
            }.bind(this), this.HEARTBEAT_TIME_OUT);
        }.bind(this), this.HEARTBEAT_TIME);
    }

    //心跳超时啦
    public heartbeatOut() {
        FLog.normal("心跳超时间")
        this._disconnect();
    }

    //重连
    private _disconnect(): void {
        FLog.normal("重连")
        if (this.socket && this.socket.readyState == 1) {
            this.socket.close();
            this.socket = null;
            this.clearAllTime();
        }
    }

    //清除计时器
    clearAllTime() {
        if (this.HEART_CLICK) {
            clearTimeout(this.HEART_CLICK);
        }
        if (this.HEART_TIMEOUT) {
            clearTimeout(this.HEART_TIMEOUT);
        }
    }


    /**添加消息事件及其监听 */
    public on(event, fn) {
        (this._callbacks[event] = this._callbacks[event] || []).push(fn);
    }

    /**移除对消息的事件监听 */
    public off(event?, fn?) {
        this.removeAllListeners(event, fn);
    }

    public removeAllListeners(event?, fn?) {
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
    }

    private index(arr, obj) {
        if ([].indexOf) {
            return arr.indexOf(obj);
        }

        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj)
                return i;
        }
        return -1;
    }

    /**向服务器请求
     * 1.msg_code:对应消息码
     * 2.msg:需要发送的数据
     * 3.cb 请求返回之后的回调
      */
    public request(msg) {
        this.sendMessage(msg);
    }

    /**发送消息 */
    private sendMessage(data) {
        if (!cc.sys.isNative) {
            FLog.normal("这个是客户端的上报   ", data);
        }
        else {
            FLog.normal("这个是客户端的上报   ", JSON.stringify(data));
        }
        let msgStr: string = JSON.stringify(data);
        this.send(msgStr);
        return true;

    }

    private send(byte): void {
        if (this.socket && this.socket.readyState == 1) {
            this.socket.send(byte);
        }
    }

    //消息接收
    private onMessage(event: MessageEvent): void {
        let msgObject = JSON.parse(event.data);
        if (!cc.sys.isNative) {
            FLog.normal("服务器返回", msgObject);
        }
        else {
            FLog.normal("服务器返回", JSON.stringify(msgObject));
        }
        cc.director.emit(msgObject.type, msgObject);
    }

    private tru = 0;

    private emit(event, ...args: any[]) {
        var params = [].slice.call(arguments, 1);
        var callbacks = this._callbacks[event];
        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].call(this, params, event);
            }
        }
        return this;
    }

}