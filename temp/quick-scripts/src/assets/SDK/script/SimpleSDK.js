"use strict";
cc._RF.push(module, '3fc30LNUulHUK+UGUaUOo/M', 'SimpleSDK');
// SDK/script/SimpleSDK.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleIOS_1 = require("./SimpleIOS");
var SimpleAndroid_1 = require("./SimpleAndroid");
var SimpleEditor_1 = require("./SimpleEditor");
var SimpleCallback_1 = require("./SimpleCallback");
var SimpleUtils_1 = require("./SimpleUtils");
var SimpleAnalytics_1 = require("./SimpleAnalytics");
var SimpleSDKEvent_1 = require("./SimpleSDKEvent");
var SimpleAd_1 = require("./SimpleAd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleSDK = /** @class */ (function (_super) {
    __extends(SimpleSDK, _super);
    function SimpleSDK() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.adapter = null;
        _this.staticInfo = null;
        _this.startConfig = null;
        _this.simpleAnalytics = new SimpleAnalytics_1.default();
        _this.simpleAd = new SimpleAd_1.default();
        _this.attributionInfo = null;
        return _this;
    }
    SimpleSDK_1 = SimpleSDK;
    // LIFE-CYCLE CALLBACKS:
    SimpleSDK.instance = function () {
        return get_simple_manager();
    };
    SimpleSDK.ad_instance = function () {
        return get_simple_ad();
    };
    SimpleSDK.analytics_instance = function () {
        return get_simple_analytics();
    };
    SimpleSDK.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        if (cc.sys.os === cc.sys.OS_IOS) {
            this.adapter = new SimpleIOS_1.default();
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            this.adapter = new SimpleAndroid_1.default();
        }
        else {
            this.adapter = new SimpleEditor_1.default();
        }
        set_simple_manager(this);
        set_simple_callback(new SimpleCallback_1.default());
        SimpleUtils_1.default.log("sdk setup finish");
        this.startLoadConfig();
    };
    SimpleSDK.prototype.start = function () {
        SimpleUtils_1.default.log('init start node');
    };
    SimpleSDK.prototype.update = function (dt) {
        if (this.simpleAnalytics != null) {
            this.simpleAnalytics.update(dt);
        }
        if (this.simpleAd != null) {
            this.simpleAd.update(dt);
        }
    };
    SimpleSDK.prototype.startLoadConfig = function () {
        cc.loader.loadRes(SimpleSDK_1.CONFIG_FILE_NAME, cc.JsonAsset, function (err, res) {
            if (err != null) {
                SimpleUtils_1.default.log(JSON.stringify(err));
            }
            SimpleSDK_1.instance().loadConfigSuccess(res);
        });
    };
    SimpleSDK.prototype.parseConfig = function (dict) {
        if (cc.sys.os === cc.sys.OS_IOS) {
            var config = {
                gameName: SimpleUtils_1.default.getDictOrDefault(dict, "gameName", ""),
                appsflyerkey: SimpleUtils_1.default.getDictOrDefault(dict, "iosAppsflyerkey", ""),
                appleid: SimpleUtils_1.default.getDictOrDefault(dict, "iosAppleid", ""),
                adjustAppkey: SimpleUtils_1.default.getDictOrDefault(dict, "iosAdjustAppkey", ""),
                toponAppid: SimpleUtils_1.default.getDictOrDefault(dict, "iosTopOnAppid", ""),
                toponKey: SimpleUtils_1.default.getDictOrDefault(dict, "iosTopOnKey", ""),
                rewardPlacementId: SimpleUtils_1.default.getDictOrDefault(dict, "iosToponRewardPlacementId", ""),
                interstitialPlacementId: SimpleUtils_1.default.getDictOrDefault(dict, "iosToponInterstitialPlacementId", ""),
                bannePlacementId: SimpleUtils_1.default.getDictOrDefault(dict, "iosToponBannePlacementId", ""),
                bannerWidth: SimpleUtils_1.default.getDictOrDefault(dict, "bannerWidth", -1),
                bannerHeight: SimpleUtils_1.default.getDictOrDefault(dict, "bannerHeight", -1),
                debug: SimpleUtils_1.default.getDictOrDefault(dict, "debug", false),
            };
            if (config.appsflyerkey.length > 0 && config.appleid.length > 0 && config.adjustAppkey.length == 0) {
                cc.log("ready to start appsflyer sdk");
            }
            else if (config.appsflyerkey.length == 0 && config.adjustAppkey.length > 0) {
                cc.log("ready to start adjust sdk");
            }
            return config;
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            var config = {
                gameName: SimpleUtils_1.default.getDictOrDefault(dict, "gameName", ""),
                appsflyerkey: SimpleUtils_1.default.getDictOrDefault(dict, "androidAppsflyerkey", ""),
                appleid: "",
                adjustAppkey: SimpleUtils_1.default.getDictOrDefault(dict, "androidAdjustAppkey", ""),
                toponAppid: SimpleUtils_1.default.getDictOrDefault(dict, "androidTopOnAppid", ""),
                toponKey: SimpleUtils_1.default.getDictOrDefault(dict, "androidTopOnKey", ""),
                rewardPlacementId: SimpleUtils_1.default.getDictOrDefault(dict, "androidToponRewardPlacementId", ""),
                interstitialPlacementId: SimpleUtils_1.default.getDictOrDefault(dict, "androidToponInterstitialPlacementId", ""),
                bannePlacementId: SimpleUtils_1.default.getDictOrDefault(dict, "androidToponBannePlacementId", ""),
                bannerWidth: SimpleUtils_1.default.getDictOrDefault(dict, "bannerWidth", -1),
                bannerHeight: SimpleUtils_1.default.getDictOrDefault(dict, "bannerHeight", -1),
                debug: SimpleUtils_1.default.getDictOrDefault(dict, "debug", false),
            };
            if (config.appsflyerkey.length > 0 && config.adjustAppkey.length == 0) {
                cc.log("ready to start appsflyer sdk");
            }
            else if (config.appsflyerkey.length == 0 && config.adjustAppkey.length > 0) {
                cc.log("ready to start adjust sdk");
            }
            return config;
        }
        else {
            var config = {
                gameName: SimpleUtils_1.default.getDictOrDefault(dict, "gameName", "demo"),
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
            };
            return config;
        }
    };
    SimpleSDK.prototype.loadConfigSuccess = function (res) {
        try {
            if (res != null && 'json' in res) {
                var config = this.parseConfig(res.json);
                this.init(config);
            }
            else {
                SimpleUtils_1.default.log("fail to load json from resources/SimpleSDKConfig.json");
            }
        }
        catch (err) {
            SimpleUtils_1.default.log("config load fail" + err.toString());
        }
    };
    SimpleSDK.prototype.init = function (inputConfig) {
        //load config
        this.startConfig = inputConfig;
        SimpleUtils_1.default.setDebug(this.startConfig.debug);
        if (inputConfig.appsflyerkey.length > 0) {
            this.adapter.initWithAppsflyer(inputConfig.appsflyerkey, inputConfig.appleid, inputConfig.debug);
        }
        else {
            this.adapter.initWithAdjust(inputConfig.adjustAppkey, inputConfig.debug);
        }
    };
    SimpleSDK.prototype.initSuccess = function (e) {
        var platform = "editor";
        if (cc.sys.os === cc.sys.OS_IOS) {
            platform = "ios";
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            platform = "android";
        }
        var sessionId = e.deviceId + "_" + SimpleUtils_1.default.getTimestamp() + "_" + SimpleUtils_1.default.getRandomInt(100);
        var networkStatue = "none";
        switch (e.network) {
            case 0:
                networkStatue = "none";
                break;
            case 1:
                networkStatue = "wifi";
                break;
            case 2:
                networkStatue = "4g";
                break;
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
        };
        SimpleUtils_1.default.log("init succ: " + JSON.stringify(this.staticInfo));
        this.simpleAnalytics.init(this.staticInfo);
        this.simpleAnalytics.sendLog(SimpleSDKEvent_1.default.GAME_START, {
            model: this.staticInfo.model,
            band: this.staticInfo.band
        });
        this.simpleAd.init(this.startConfig);
    };
    SimpleSDK.prototype.initFailed = function (e) {
        SimpleUtils_1.default.log("call fail");
    };
    SimpleSDK.prototype.getStaticInfo = function () {
        return this.staticInfo;
    };
    //归因回调
    SimpleSDK.prototype.innerAttributionInfoCallback = function (attributionInfo) {
        this.attributionInfo = attributionInfo;
        if (this.attributionInfoCallback != null) {
            this.attributionInfoCallback(this.attributionInfo);
        }
    };
    //异步获取
    SimpleSDK.prototype.setAttributionInfoCallback = function (attributionInfoCallback) {
        this.attributionInfoCallback = attributionInfoCallback;
        if (this.attributionInfo != null) {
            this.attributionInfoCallback(this.attributionInfo);
        }
    };
    //同步获取
    SimpleSDK.prototype.getAttributionInfo = function () {
        return this.attributionInfo;
    };
    SimpleSDK.prototype.getNetworkStatus = function () {
        return this.adapter.getNetworkStatus();
    };
    SimpleSDK.prototype.isNetworkOk = function () {
        var r = this.getNetworkStatus();
        return (undefined != r && r != null && r > 0);
    };
    var SimpleSDK_1;
    SimpleSDK.CONFIG_FILE_NAME = "SimpleSDKConfig";
    SimpleSDK = SimpleSDK_1 = __decorate([
        ccclass
    ], SimpleSDK);
    return SimpleSDK;
}(cc.Component));
exports.default = SimpleSDK;

cc._RF.pop();