// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import * as SDK from './SimpleInterface'
import SimpleCallback from './SimpleCallback';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleEditor extends SDK.SimpleInterface {

    initWithAdjust(adjustAppkey: string, debug: boolean) {
        this.init();
    }

    initWithAppsflyer(appsflyerkey: string, appleid: string, debug: boolean) {
        this.init();
    }

    init() {
        let a: SDK.InitSuccessResult = {
            package: "com.a.b",
            appVersion: "15",
            deviceId: "test deviceid",

            idfa: "idfa_str",
            android_id: "android_id_str",
            idfv: "idfv_str",
            band: "band_str",
            model: "model_str",
            deviceName: "device_str",
            systemVersion: "systemversion",
            network: 0
        }
        let j = JSON.stringify(a);
        SimpleCallback.instance().sdkInitSuccess(j);

        //editor 直接给出归因回调

        let e: SDK.AttributionInfo = {
            network: "Organic",
            campaign: "",
            adgroup: "",
            createive: ""
        }
        let jj = JSON.stringify(e);
        SimpleCallback.instance().getAttributionInfo(jj);

    }

    getNetworkStatus() {
        return 0;
    }
}
