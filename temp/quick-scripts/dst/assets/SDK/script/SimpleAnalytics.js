
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleAnalytics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZUFuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZDQUF3QztBQUN4QyxtREFBOEM7QUFDeEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUdJLHNCQUFZLElBQW1CO1FBRC9CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFZCxJQUFJLElBQUksR0FBRztZQUNQLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUE7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELDhCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDdkMscUJBQVcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztpQkFDdkM7cUJBQ0k7b0JBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTt3QkFDaEIsVUFBVSxDQUFDOzRCQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNaO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMs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QUM7SUE2RTNCLHNCQUFDO0NBaEZELEFBZ0ZDLElBQUE7a0JBaEZvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIFNESyBmcm9tICcuL1NpbXBsZUludGVyZmFjZSdcclxuaW1wb3J0IFNpbXBsZVV0aWxzIGZyb20gJy4vU2ltcGxlVXRpbHMnO1xyXG5pbXBvcnQgU2ltcGxlU0RLRXZlbnQgZnJvbSAnLi9TaW1wbGVTREtFdmVudCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuY2xhc3MgU2ltcGxlU2VuZGVyIHtcclxuICAgIGJvZHlKc29uOiBzdHJpbmc7XHJcbiAgICB0aW1lczogbnVtYmVyID0gNTtcclxuICAgIGNvbnN0cnVjdG9yKGxvZ3M6IEFycmF5PExvZ01hcD4pIHtcclxuICAgICAgICBsZXQgYm9keSA9IHtcclxuICAgICAgICAgICAgXCJfX2xvZ3NfX1wiOiBsb2dzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9keUpzb24gPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICB0aGlzLnRpbWVzID0gMztcclxuICAgIH1cclxuICAgIHNlbmRMb2coKSB7XHJcbiAgICAgICAgdGhpcy50aW1lcy0tO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwic2VuZCBsb2cgc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnRpbWVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VuZExvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBTaW1wbGVBbmFseXRpY3MuUE9TVF9VUkwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwieC1sb2ctYXBpdmVyc2lvblwiLCBcIjAuNi4wXCIpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwieC1sb2ctYm9keXJhd3NpemVcIiwgdGhpcy5ib2R5SnNvbi5sZW5ndGgudG9TdHJpbmcoKSlcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwiKVxyXG4gICAgICAgIHhoci5zZW5kKHRoaXMuYm9keUpzb24pO1xyXG4gICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcInJlYWR5IHRvIHNlbmQgbG9nIFwiICsgdGhpcy50aW1lcyArIFwiIFwiICsgU2ltcGxlQW5hbHl0aWNzLlBPU1RfVVJMICsgXCIgXCIgKyB0aGlzLmJvZHlKc29uKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBMb2dNYXAge1xyXG4gICAgZ2FtZU5hbWU6IHN0cmluZ1xyXG4gICAgZGV2aWNlSWQ6IHN0cmluZ1xyXG4gICAgcGFja2FnZTogc3RyaW5nXHJcbiAgICBwbGF0Zm9ybTogc3RyaW5nXHJcbiAgICBpZGZhOiBzdHJpbmdcclxuICAgIHVpZDogc3RyaW5nXHJcbiAgICBpZGZ2OiBzdHJpbmdcclxuICAgIGFuZHJvaWRJZDogc3RyaW5nXHJcbiAgICBzZXNzaW9uSWQ6IHN0cmluZ1xyXG4gICAgZXY6IHN0cmluZ1xyXG4gICAgbG9nSW5kZXg6IHN0cmluZ1xyXG4gICAgY2xpZW50VHM6IHN0cmluZ1xyXG4gICAgdmFsdWU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVBbmFseXRpY3Mge1xyXG4gICAgc3RhdGljIFBPU1RfVVJMID0gXCJodHRwczovL2JlcGljZGF0YS5hcC1zb3V0aGVhc3QtMS5sb2cuYWxpeXVuY3MuY29tL2xvZ3N0b3Jlcy9zZGtsb2cvdHJhY2tcIlxyXG4gICAgc3RhdGljIFNFTkRfSU5URVJWQUwgPSA1O1xyXG4gICAgc3RhdGljIEJBVENIX1NJWkUgPSAyMDtcclxuXHJcbiAgICBzdGF0aWNzSW5mbzogU0RLLlN0YXRpY0luZm8gPSBudWxsO1xyXG4gICAgbG9nSW5kZXggPSAwO1xyXG4gICAgbG9nczogQXJyYXk8TG9nTWFwPiA9IFtdO1xyXG4gICAgbGFzdFNlbmRUcyA9IC0xO1xyXG5cclxuICAgIHRvdGFsVGltZSA9IDA7XHJcbiAgICBuZXh0SW50ZXJ2YWwgPSA1O1xyXG4gICAgaW50ZXJ2YWwgPSAxMDtcclxuICAgIG1heEludGVydmFsID0gMzAwO1xyXG5cclxuICAgIGluaXQoc3RhdGljc0luZm86IFNESy5TdGF0aWNJbmZvKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0aWNzSW5mbyA9IHN0YXRpY3NJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9zZW5kIGhlYXJ0IGJlYXRcclxuICAgICAgICB0aGlzLnRvdGFsVGltZSArPSBkdDtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy50b3RhbFRpbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsVGltZSA+IHRoaXMubmV4dEludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZExvZyhTaW1wbGVTREtFdmVudC5IRUFSVEJFQVQsIHsgXCJwYXNzVGltZVwiOiBNYXRoLmZsb29yKHRoaXMudG90YWxUaW1lKSB9KTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0SW50ZXJ2YWwgKz0gdGhpcy5pbnRlcnZhbDtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCAqPSAyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA+PSB0aGlzLm1heEludGVydmFsKSB0aGlzLmludGVydmFsID0gdGhpcy5tYXhJbnRlcnZhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc2VuZCBsb2dcclxuICAgICAgICBpZiAodGhpcy5sb2dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IFNpbXBsZVV0aWxzLmdldFRpbWVzdGFtcCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dzLmxlbmd0aCA+IFNpbXBsZUFuYWx5dGljcy5CQVRDSF9TSVpFIHx8IHRoaXMubGFzdFNlbmRUcyArIFNpbXBsZUFuYWx5dGljcy5TRU5EX0lOVEVSVkFMIDwgbm93KSB7XHJcbiAgICAgICAgICAgICAgICAvL+i+vuWIsOS4iumZkOaIluiAhei+vuWIsOWPkemAgeaXtumXtFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZW5kVHMgPSBub3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kQWxsKCkge1xyXG4gICAgICAgIGxldCBzZW5kZXIgPSBuZXcgU2ltcGxlU2VuZGVyKHRoaXMubG9ncyk7XHJcbiAgICAgICAgc2VuZGVyLnNlbmRMb2coKTtcclxuICAgICAgICB0aGlzLmxvZ3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkSnNvbihldjogc3RyaW5nLCBwYXJhbXM6IHt9KTogTG9nTWFwIHtcclxuICAgICAgICBsZXQgbG9nSW5kZXggPSB0aGlzLmxvZ0luZGV4O1xyXG4gICAgICAgIHRoaXMubG9nSW5kZXgrKztcclxuXHJcbiAgICAgICAgbGV0IGxvZ01hcDogTG9nTWFwID0ge1xyXG4gICAgICAgICAgICBnYW1lTmFtZTogdGhpcy5zdGF0aWNzSW5mby5nYW1lTmFtZSxcclxuICAgICAgICAgICAgZGV2aWNlSWQ6IHRoaXMuc3RhdGljc0luZm8uZGV2aWNlSWQsXHJcbiAgICAgICAgICAgIHBhY2thZ2U6IHRoaXMuc3RhdGljc0luZm8ucG4sXHJcbiAgICAgICAgICAgIHBsYXRmb3JtOiB0aGlzLnN0YXRpY3NJbmZvLnBsYXRmb3JtLFxyXG4gICAgICAgICAgICBpZGZhOiB0aGlzLnN0YXRpY3NJbmZvLmlkZmEsXHJcbiAgICAgICAgICAgIHVpZDogdGhpcy5zdGF0aWNzSW5mby51aWQsXHJcbiAgICAgICAgICAgIGlkZnY6IHRoaXMuc3RhdGljc0luZm8uaWRmdixcclxuICAgICAgICAgICAgYW5kcm9pZElkOiB0aGlzLnN0YXRpY3NJbmZvLmFuZHJvaWRfaWQsXHJcbiAgICAgICAgICAgIHNlc3Npb25JZDogdGhpcy5zdGF0aWNzSW5mby5zZXNzaW9uSWQsXHJcbiAgICAgICAgICAgIGV2OiBldixcclxuICAgICAgICAgICAgbG9nSW5kZXg6IGxvZ0luZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGNsaWVudFRzOiBTaW1wbGVVdGlscy5nZXRUaW1lc3RhbXAoKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9nTWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRMb2coZXY6IHN0cmluZywgcGFyYW1zOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRpY3NJbmZvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGxvZ01hcCA9IHRoaXMuYnVpbGRKc29uKGV2LCBwYXJhbXMpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ3MucHVzaChsb2dNYXApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19