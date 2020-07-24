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

const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleIOS extends SDK.SimpleInterface {

    static bridgeName = "SimpleBridge";

    initWithAdjust(adjustAppkey: string, debug: boolean) {
        jsb.reflection.callStaticMethod(SimpleIOS.bridgeName, "SDKInitWithAdjustKey:withDebug:", adjustAppkey, debug);
    }

    initWithAppsflyer(appsflyerkey: string, appleid: string, debug: boolean) {
        jsb.reflection.callStaticMethod(SimpleIOS.bridgeName, "SDKInitWithAppsflyerKey:withAppleid:withDebug:", appsflyerkey, appleid, debug);
    }


    getNetworkStatus() {
        return jsb.reflection.callStaticMethod(SimpleIOS.bridgeName, "getNetworkStatus");
    }
}
