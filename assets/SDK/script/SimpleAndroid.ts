import * as SDK from './SimpleInterface'

const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleAndroid extends SDK.SimpleInterface {

    initWithAdjust(adjustAppkey: string, debug: boolean) {
        jsb.reflection.callStaticMethod("com/bepic/simpleafsdk/SimpleAJSDK", "initWithAdjust", "(Ljava/lang/String;Z)V", adjustAppkey, debug);
    }

    initWithAppsflyer(appsflyerkey: string, appleid: string, debug: boolean) {
        jsb.reflection.callStaticMethod("com/bepic/simpleafsdk/SimpleAFSDK", "initWithAppsflyer", "(Ljava/lang/String;Z)V", appsflyerkey, debug);
    }

    getNetworkStatus() {
        return jsb.reflection.callStaticMethod("com/bepic/simplesdk/SimpleSDKBase", "getNetworkStatus", "()I");
    }
}
