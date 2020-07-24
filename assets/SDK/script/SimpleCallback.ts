import * as SDK from './SimpleInterface'
import SimpleSDK from './SimpleSDK';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleCallback extends cc.Component {

    public static instance(): SimpleCallback {
        return get_simple_callback();
    }

    public sdkInitSuccess(args: string) {
        cc.log(SimpleSDK.instance());
        let re: SDK.InitSuccessResult = JSON.parse(args);
        SimpleSDK.instance().initSuccess(re);
    }

    public sdkInitFailed(args: string) {
        let re: SDK.SDKError = JSON.parse(args);
        SimpleSDK.instance().initFailed(re);
    }

    public getAttributionInfo(args:string){
        let re:SDK.AttributionInfo = JSON.parse(args);
        SimpleSDK.instance().innerAttributionInfoCallback(re);
    }
}
