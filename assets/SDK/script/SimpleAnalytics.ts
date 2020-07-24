
import * as SDK from './SimpleInterface'
import SimpleUtils from './SimpleUtils';
import SimpleSDKEvent from './SimpleSDKEvent';
const { ccclass, property } = cc._decorator;


class SimpleSender {
    bodyJson: string;
    times: number = 5;
    constructor(logs: Array<LogMap>) {
        let body = {
            "__logs__": logs
        }
        this.bodyJson = JSON.stringify(body);
        this.times = 3;
    }
    sendLog() {
        this.times--;
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    SimpleUtils.log("send log success");
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
        xhr.setRequestHeader("x-log-bodyrawsize", this.bodyJson.length.toString())
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8")
        xhr.send(this.bodyJson);
        SimpleUtils.log("ready to send log " + this.times + " " + SimpleAnalytics.POST_URL + " " + this.bodyJson);
    }
}


interface LogMap {
    gameName: string
    deviceId: string
    package: string
    platform: string
    idfa: string
    uid: string
    idfv: string
    androidId: string
    sessionId: string
    ev: string
    logIndex: string
    clientTs: string
    value: string
}

export default class SimpleAnalytics {
    static POST_URL = "https://bepicdata.ap-southeast-1.log.aliyuncs.com/logstores/sdklog/track"
    static SEND_INTERVAL = 5;
    static BATCH_SIZE = 20;

    staticsInfo: SDK.StaticInfo = null;
    logIndex = 0;
    logs: Array<LogMap> = [];
    lastSendTs = -1;

    totalTime = 0;
    nextInterval = 5;
    interval = 10;
    maxInterval = 300;

    init(staticsInfo: SDK.StaticInfo) {
        this.staticsInfo = staticsInfo;
    }

    update(dt: number) {
        //send heart beat
        this.totalTime += dt;
        // cc.log(this.totalTime);
        if (this.totalTime > this.nextInterval) {
            this.sendLog(SimpleSDKEvent.HEARTBEAT, { "passTime": Math.floor(this.totalTime) });
            this.nextInterval += this.interval;
            this.interval *= 2;
            if (this.interval >= this.maxInterval) this.interval = this.maxInterval;
        }

        //send log
        if (this.logs.length > 0) {
            let now = SimpleUtils.getTimestamp();
            if (this.logs.length > SimpleAnalytics.BATCH_SIZE || this.lastSendTs + SimpleAnalytics.SEND_INTERVAL < now) {
                //达到上限或者达到发送时间
                this.sendAll();
                this.lastSendTs = now;
            }
        }
    }

    private sendAll() {
        let sender = new SimpleSender(this.logs);
        sender.sendLog();
        this.logs = [];
    }

    private buildJson(ev: string, params: {}): LogMap {
        let logIndex = this.logIndex;
        this.logIndex++;

        let logMap: LogMap = {
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
            clientTs: SimpleUtils.getTimestamp().toString(),
            value: JSON.stringify(params)
        }
        return logMap;
    }

    sendLog(ev: string, params: {}): boolean {
        if (this.staticsInfo != null) {
            let logMap = this.buildJson(ev, params);
            this.logs.push(logMap);
            return true;
        }
        else {
            return false;
        }
    }

}