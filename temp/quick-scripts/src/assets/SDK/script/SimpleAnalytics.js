"use strict";
cc._RF.push(module, 'ad668zigsBJtalLPP6Rogr3', 'SimpleAnalytics');
// SDK/script/SimpleAnalytics.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleUtils_1 = require("./SimpleUtils");
var SimpleSDKEvent_1 = require("./SimpleSDKEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleSender = /** @class */ (function () {
    function SimpleSender(logs) {
        this.times = 5;
        var body = {
            "__logs__": logs
        };
        this.bodyJson = JSON.stringify(body);
        this.times = 3;
    }
    SimpleSender.prototype.sendLog = function () {
        this.times--;
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    SimpleUtils_1.default.log("send log success");
                }
                else {
                    if (self.times > 0) {
                        setTimeout(function () {
                            self.sendLog();
                        }, 5000);
                    }
                }
            }
        };
        xhr.open("POST", SimpleAnalytics.POST_URL, true);
        xhr.setRequestHeader("x-log-apiversion", "0.6.0");
        xhr.setRequestHeader("x-log-bodyrawsize", this.bodyJson.length.toString());
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.send(this.bodyJson);
        SimpleUtils_1.default.log("ready to send log " + this.times + " " + SimpleAnalytics.POST_URL + " " + this.bodyJson);
    };
    return SimpleSender;
}());
var SimpleAnalytics = /** @class */ (function () {
    function SimpleAnalytics() {
        this.staticsInfo = null;
        this.logIndex = 0;
        this.logs = [];
        this.lastSendTs = -1;
        this.totalTime = 0;
        this.nextInterval = 5;
        this.interval = 10;
        this.maxInterval = 300;
    }
    SimpleAnalytics.prototype.init = function (staticsInfo) {
        this.staticsInfo = staticsInfo;
    };
    SimpleAnalytics.prototype.update = function (dt) {
        //send heart beat
        this.totalTime += dt;
        // cc.log(this.totalTime);
        if (this.totalTime > this.nextInterval) {
            this.sendLog(SimpleSDKEvent_1.default.HEARTBEAT, { "passTime": Math.floor(this.totalTime) });
            this.nextInterval += this.interval;
            this.interval *= 2;
            if (this.interval >= this.maxInterval)
                this.interval = this.maxInterval;
        }
        //send log
        if (this.logs.length > 0) {
            var now = SimpleUtils_1.default.getTimestamp();
            if (this.logs.length > SimpleAnalytics.BATCH_SIZE || this.lastSendTs + SimpleAnalytics.SEND_INTERVAL < now) {
                //达到上限或者达到发送时间
                this.sendAll();
                this.lastSendTs = now;
            }
        }
    };
    SimpleAnalytics.prototype.sendAll = function () {
        var sender = new SimpleSender(this.logs);
        sender.sendLog();
        this.logs = [];
    };
    SimpleAnalytics.prototype.buildJson = function (ev, params) {
        var logIndex = this.logIndex;
        this.logIndex++;
        var logMap = {
            gameName: this.staticsInfo.gameName,
            deviceId: this.staticsInfo.deviceId,
            package: this.staticsInfo.pn,
            platform: this.staticsInfo.platform,
            idfa: this.staticsInfo.idfa,
            uid: this.staticsInfo.uid,
            idfv: this.staticsInfo.idfv,
            androidId: this.staticsInfo.android_id,
            sessionId: this.staticsInfo.sessionId,
            ev: ev,
            logIndex: logIndex.toString(),
            clientTs: SimpleUtils_1.default.getTimestamp().toString(),
            value: JSON.stringify(params)
        };
        return logMap;
    };
    SimpleAnalytics.prototype.sendLog = function (ev, params) {
        if (this.staticsInfo != null) {
            var logMap = this.buildJson(ev, params);
            this.logs.push(logMap);
            return true;
        }
        else {
            return false;
        }
    };
    SimpleAnalytics.POST_URL = "https://bepicdata.ap-southeast-1.log.aliyuncs.com/logstores/sdklog/track";
    SimpleAnalytics.SEND_INTERVAL = 5;
    SimpleAnalytics.BATCH_SIZE = 20;
    return SimpleAnalytics;
}());
exports.default = SimpleAnalytics;

cc._RF.pop();