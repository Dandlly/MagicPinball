
import SimpleIOS from './SimpleIOS'
import SimpleAndroid from './SimpleAndroid'
import SimpleEditor from './SimpleEditor'
import * as SDK from './SimpleInterface'
import SimpleCallback from './SimpleCallback';
import SimpleUtils from './SimpleUtils';
import SimpleAnalytics from './SimpleAnalytics';
import SimpleSDKEvent from './SimpleSDKEvent';
import SimpleAd from './SimpleAd';
const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleSDK extends cc.Component {

    static CONFIG_FILE_NAME: string = "SimpleSDKConfig";

    adapter: SDK.SimpleInterface = null;
    staticInfo: SDK.StaticInfo = null;
    startConfig: SDK.SimpleConfig = null;
    simpleAnalytics: SimpleAnalytics = new SimpleAnalytics();
    simpleAd: SimpleAd = new SimpleAd();

    attributionInfo: SDK.AttributionInfo = null;
    attributionInfoCallback: (result: SDK.AttributionInfo) => void;
    // LIFE-CYCLE CALLBACKS:

    public static instance(): SimpleSDK {
        return get_simple_manager();
    }

    public static ad_instance(): SimpleAd {
        return get_simple_ad();
    }

    public static analytics_instance(): SimpleAnalytics {
        return get_simple_analytics();
    }

    onLoad() {
        cc.game.addPersistRootNode(this.node);
        if (cc.sys.os === cc.sys.OS_IOS) {
            this.adapter = new SimpleIOS();
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            this.adapter = new SimpleAndroid();
        }
        else {
            this.adapter = new SimpleEditor();
        }
        set_simple_manager(this);
        set_simple_callback(new SimpleCallback());
        SimpleUtils.log("sdk setup finish");
        this.startLoadConfig();

    }

    start() {
        SimpleUtils.log('init start node');
    }

    update(dt: number) {
        if (this.simpleAnalytics != null) {
            this.simpleAnalytics.update(dt);
        }
        if (this.simpleAd != null) {
            this.simpleAd.update(dt);
        }
    }

    startLoadConfig() {
        cc.loader.loadRes(SimpleSDK.CONFIG_FILE_NAME, cc.JsonAsset, function (err, res) {
            if (err != null) {
                SimpleUtils.log(JSON.stringify(err));
            }
            SimpleSDK.instance().loadConfigSuccess(res);
        });
    }

    parseConfig(dict: {}): SDK.SimpleConfig {
        if (cc.sys.os === cc.sys.OS_IOS) {
            let config: SDK.SimpleConfig = {
                gameName: SimpleUtils.getDictOrDefault(dict, "gameName", ""),
                appsflyerkey: SimpleUtils.getDictOrDefault(dict, "iosAppsflyerkey", ""),
                appleid: SimpleUtils.getDictOrDefault(dict, "iosAppleid", ""),
                adjustAppkey: SimpleUtils.getDictOrDefault(dict, "iosAdjustAppkey", ""),
                toponAppid: SimpleUtils.getDictOrDefault(dict, "iosTopOnAppid", ""),
                toponKey: SimpleUtils.getDictOrDefault(dict, "iosTopOnKey", ""),
                rewardPlacementId: SimpleUtils.getDictOrDefault(dict, "iosToponRewardPlacementId", ""),
                interstitialPlacementId: SimpleUtils.getDictOrDefault(dict, "iosToponInterstitialPlacementId", ""),
                bannePlacementId: SimpleUtils.getDictOrDefault(dict, "iosToponBannePlacementId", ""),
                bannerWidth: SimpleUtils.getDictOrDefault(dict, "bannerWidth", -1),
                bannerHeight: SimpleUtils.getDictOrDefault(dict, "bannerHeight", -1),
                debug: SimpleUtils.getDictOrDefault(dict, "debug", false),
            }
            if (config.appsflyerkey.length > 0 && config.appleid.length > 0 && config.adjustAppkey.length == 0) {
                cc.log("ready to start appsflyer sdk");
            }
            else if (config.appsflyerkey.length == 0 && config.adjustAppkey.length > 0) {
                cc.log("ready to start adjust sdk");
            }
            return config;
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            let config: SDK.SimpleConfig = {
                gameName: SimpleUtils.getDictOrDefault(dict, "gameName", ""),
                appsflyerkey: SimpleUtils.getDictOrDefault(dict, "androidAppsflyerkey", ""),
                appleid: "",
                adjustAppkey: SimpleUtils.getDictOrDefault(dict, "androidAdjustAppkey", ""),
                toponAppid: SimpleUtils.getDictOrDefault(dict, "androidTopOnAppid", ""),
                toponKey: SimpleUtils.getDictOrDefault(dict, "androidTopOnKey", ""),
                rewardPlacementId: SimpleUtils.getDictOrDefault(dict, "androidToponRewardPlacementId", ""),
                interstitialPlacementId: SimpleUtils.getDictOrDefault(dict, "androidToponInterstitialPlacementId", ""),
                bannePlacementId: SimpleUtils.getDictOrDefault(dict, "androidToponBannePlacementId", ""),
                bannerWidth: SimpleUtils.getDictOrDefault(dict, "bannerWidth", -1),
                bannerHeight: SimpleUtils.getDictOrDefault(dict, "bannerHeight", -1),
                debug: SimpleUtils.getDictOrDefault(dict, "debug", false),
            }
            if (config.appsflyerkey.length > 0 && config.adjustAppkey.length == 0) {
                cc.log("ready to start appsflyer sdk");
            }
            else if (config.appsflyerkey.length == 0 && config.adjustAppkey.length > 0) {
                cc.log("ready to start adjust sdk");
            }
            return config;
        }
        else {
            let config: SDK.SimpleConfig = {
                gameName: SimpleUtils.getDictOrDefault(dict, "gameName", "demo"),
                appsflyerkey: "",
                appleid: "",
                adjustAppkey: "",
                toponAppid: "",
                toponKey: "",
                rewardPlacementId: "",
                interstitialPlacementId: "",
                bannePlacementId: "",
                bannerWidth: -1,
                bannerHeight: -1,
                debug: true
            }
            return config;
        }
    }


    loadConfigSuccess(res) {
        try {
            if (res != null && 'json' in res) {
                let config = this.parseConfig(res.json);
                this.init(config);
            }
            else {
                SimpleUtils.log("fail to load json from resources/SimpleSDKConfig.json")
            }
        }
        catch (err) {
            SimpleUtils.log("config load fail" + err.toString());
        }

    }

    init(inputConfig: SDK.SimpleConfig) {
        //load config
        this.startConfig = inputConfig;
        SimpleUtils.setDebug(this.startConfig.debug);
        if (inputConfig.appsflyerkey.length > 0) {
            this.adapter.initWithAppsflyer(inputConfig.appsflyerkey, inputConfig.appleid, inputConfig.debug);
        }
        else {
            this.adapter.initWithAdjust(inputConfig.adjustAppkey, inputConfig.debug);
        }

    }

    initSuccess(e: SDK.InitSuccessResult) {
        let platform = "editor";
        if (cc.sys.os === cc.sys.OS_IOS) {
            platform = "ios";
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            platform = "android";
        }
        let sessionId = e.deviceId + "_" + SimpleUtils.getTimestamp() + "_" + SimpleUtils.getRandomInt(100)
        let networkStatue = "none"
        switch (e.network) {
            case 0: networkStatue = "none"; break;
            case 1: networkStatue = "wifi"; break;
            case 2: networkStatue = "4g"; break;
            default: networkStatue = "none";
        }
        this.staticInfo = {
            gameName: this.startConfig.gameName,
            pn: e.package,
            deviceId: e.deviceId,
            platform: platform,
            idfa: e.idfa,
            uid: "",
            sessionId: sessionId,

            idfv: e.idfv,
            android_id: e.android_id,

            band: e.band,
            model: e.model,
            deviceName: e.deviceName,
            systemVersion: e.systemVersion,
            network: networkStatue
        }
        SimpleUtils.log("init succ: " + JSON.stringify(this.staticInfo));
        this.simpleAnalytics.init(this.staticInfo);
        this.simpleAnalytics.sendLog(SimpleSDKEvent.GAME_START, {
            model: this.staticInfo.model,
            band: this.staticInfo.band
        })
        this.simpleAd.init(this.startConfig);
    }

    initFailed(e: SDK.SDKError) {
        SimpleUtils.log("call fail");
    }

    getStaticInfo(): SDK.StaticInfo {
        return this.staticInfo;
    }

    //归因回调
    innerAttributionInfoCallback(attributionInfo: SDK.AttributionInfo) {
        this.attributionInfo = attributionInfo;
        if (this.attributionInfoCallback != null) {
            this.attributionInfoCallback(this.attributionInfo);
        }
    }
    //异步获取
    setAttributionInfoCallback(attributionInfoCallback: (result: SDK.AttributionInfo) => void) {
        this.attributionInfoCallback = attributionInfoCallback;
        if (this.attributionInfo != null) {
            this.attributionInfoCallback(this.attributionInfo);
        }
    }
    //同步获取
    getAttributionInfo() {
        return this.attributionInfo;
    }

    getNetworkStatus() {
        return this.adapter.getNetworkStatus();
    }

    isNetworkOk() {
        let r = this.getNetworkStatus();
        return (undefined != r && r != null && r > 0);
    }
}
