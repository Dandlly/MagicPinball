
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleSDK.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZVNESy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBbUM7QUFDbkMsaURBQTJDO0FBQzNDLCtDQUF5QztBQUV6QyxtREFBOEM7QUFDOUMsNkNBQXdDO0FBQ3hDLHFEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsdUNBQWtDO0FBQzVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFpUEM7UUE1T0csYUFBTyxHQUF3QixJQUFJLENBQUM7UUFDcEMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBQ2xDLGlCQUFXLEdBQXFCLElBQUksQ0FBQztRQUNyQyxxQkFBZSxHQUFvQixJQUFJLHlCQUFlLEVBQUUsQ0FBQztRQUN6RCxjQUFRLEdBQWEsSUFBSSxrQkFBUSxFQUFFLENBQUM7UUFFcEMscUJBQWUsR0FBd0IsSUFBSSxDQUFDOztJQXNPaEQsQ0FBQztrQkFoUG9CLFNBQVM7SUFZMUIsd0JBQXdCO0lBRVYsa0JBQVEsR0FBdEI7UUFDSSxPQUFPLGtCQUFrQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVhLHFCQUFXLEdBQXpCO1FBQ0ksT0FBTyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRWEsNEJBQWtCLEdBQWhDO1FBQ0ksT0FBTyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwwQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFDO1NBQ2xDO2FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQWEsRUFBRSxDQUFDO1NBQ3RDO2FBQ0k7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1NBQ3JDO1FBQ0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsbUJBQW1CLENBQUMsSUFBSSx3QkFBYyxFQUFFLENBQUMsQ0FBQztRQUMxQyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLHFCQUFXLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7WUFDMUUsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNiLHFCQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4QztZQUNELFdBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksSUFBUTtRQUNoQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQzdCLElBQUksTUFBTSxHQUFxQjtnQkFDM0IsUUFBUSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUM7Z0JBQzVELFlBQVksRUFBRSxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUM7Z0JBQ3ZFLE9BQU8sRUFBRSxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDO2dCQUM3RCxZQUFZLEVBQUUscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO2dCQUN2RSxVQUFVLEVBQUUscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQUUsQ0FBQztnQkFDbkUsUUFBUSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUM7Z0JBQy9ELGlCQUFpQixFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLDJCQUEyQixFQUFFLEVBQUUsQ0FBQztnQkFDdEYsdUJBQXVCLEVBQUUscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsaUNBQWlDLEVBQUUsRUFBRSxDQUFDO2dCQUNsRyxnQkFBZ0IsRUFBRSxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxFQUFFLENBQUM7Z0JBQ3BGLFdBQVcsRUFBRSxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLFlBQVksRUFBRSxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLEtBQUssRUFBRSxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO2FBQzVELENBQUE7WUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNoRyxFQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDMUM7aUJBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4RSxFQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDdkM7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjthQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDdEMsSUFBSSxNQUFNLEdBQXFCO2dCQUMzQixRQUFRLEVBQUUscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsWUFBWSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsQ0FBQztnQkFDM0UsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsQ0FBQztnQkFDM0UsVUFBVSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsQ0FBQztnQkFDdkUsUUFBUSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztnQkFDbkUsaUJBQWlCLEVBQUUscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsK0JBQStCLEVBQUUsRUFBRSxDQUFDO2dCQUMxRix1QkFBdUIsRUFBRSxxQkFBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxxQ0FBcUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RHLGdCQUFnQixFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLDhCQUE4QixFQUFFLEVBQUUsQ0FBQztnQkFDeEYsV0FBVyxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsWUFBWSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEUsS0FBSyxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7YUFDNUQsQ0FBQTtZQUNELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkUsRUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQzFDO2lCQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEUsRUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDakI7YUFDSTtZQUNELElBQUksTUFBTSxHQUFxQjtnQkFDM0IsUUFBUSxFQUFFLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUM7Z0JBQ2hFLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osaUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsdUJBQXVCLEVBQUUsRUFBRTtnQkFDM0IsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDZixZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQixLQUFLLEVBQUUsSUFBSTthQUNkLENBQUE7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFHRCxxQ0FBaUIsR0FBakIsVUFBa0IsR0FBRztRQUNqQixJQUFJO1lBQ0EsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JCO2lCQUNJO2dCQUNELHFCQUFXLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUE7YUFDM0U7U0FDSjtRQUNELE9BQU8sR0FBRyxFQUFFO1lBQ1IscUJBQVcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDeEQ7SUFFTCxDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFLLFdBQTZCO1FBQzlCLGFBQWE7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRzthQUNJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUU7SUFFTCxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLENBQXdCO1FBQ2hDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQzdCLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDcEI7YUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ3RDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDeEI7UUFDRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxxQkFBVyxDQUFDLFlBQVksRUFBRSxHQUFHLEdBQUcsR0FBRyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNuRyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUE7UUFDMUIsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2YsS0FBSyxDQUFDO2dCQUFFLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQUMsTUFBTTtZQUN0QyxLQUFLLENBQUM7Z0JBQUUsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFBQyxNQUFNO1lBQ3RDLEtBQUssQ0FBQztnQkFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUFDLE1BQU07WUFDcEMsT0FBTyxDQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO1lBQ25DLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTztZQUNiLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNwQixRQUFRLEVBQUUsUUFBUTtZQUNsQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDWixHQUFHLEVBQUUsRUFBRTtZQUNQLFNBQVMsRUFBRSxTQUFTO1lBRXBCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtZQUNaLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVTtZQUV4QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7WUFDZCxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVU7WUFDeEIsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhO1lBQzlCLE9BQU8sRUFBRSxhQUFhO1NBQ3pCLENBQUE7UUFDRCxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsd0JBQWMsQ0FBQyxVQUFVLEVBQUU7WUFDcEQsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUM1QixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1NBQzdCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLENBQWU7UUFDdEIscUJBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU07SUFDTixnREFBNEIsR0FBNUIsVUFBNkIsZUFBb0M7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLElBQUksSUFBSSxFQUFFO1lBQ3RDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0lBQ0QsTUFBTTtJQUNOLDhDQUEwQixHQUExQixVQUEyQix1QkFBOEQ7UUFDckYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFDRCxNQUFNO0lBQ04sc0NBQWtCLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O0lBN09NLDBCQUFnQixHQUFXLGlCQUFpQixDQUFDO0lBRm5DLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FnUDdCO0lBQUQsZ0JBQUM7Q0FoUEQsQUFnUEMsQ0FoUHNDLEVBQUUsQ0FBQyxTQUFTLEdBZ1BsRDtrQkFoUG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFNpbXBsZUlPUyBmcm9tICcuL1NpbXBsZUlPUydcclxuaW1wb3J0IFNpbXBsZUFuZHJvaWQgZnJvbSAnLi9TaW1wbGVBbmRyb2lkJ1xyXG5pbXBvcnQgU2ltcGxlRWRpdG9yIGZyb20gJy4vU2ltcGxlRWRpdG9yJ1xyXG5pbXBvcnQgKiBhcyBTREsgZnJvbSAnLi9TaW1wbGVJbnRlcmZhY2UnXHJcbmltcG9ydCBTaW1wbGVDYWxsYmFjayBmcm9tICcuL1NpbXBsZUNhbGxiYWNrJztcclxuaW1wb3J0IFNpbXBsZVV0aWxzIGZyb20gJy4vU2ltcGxlVXRpbHMnO1xyXG5pbXBvcnQgU2ltcGxlQW5hbHl0aWNzIGZyb20gJy4vU2ltcGxlQW5hbHl0aWNzJztcclxuaW1wb3J0IFNpbXBsZVNES0V2ZW50IGZyb20gJy4vU2ltcGxlU0RLRXZlbnQnO1xyXG5pbXBvcnQgU2ltcGxlQWQgZnJvbSAnLi9TaW1wbGVBZCc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVTREsgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBDT05GSUdfRklMRV9OQU1FOiBzdHJpbmcgPSBcIlNpbXBsZVNES0NvbmZpZ1wiO1xyXG5cclxuICAgIGFkYXB0ZXI6IFNESy5TaW1wbGVJbnRlcmZhY2UgPSBudWxsO1xyXG4gICAgc3RhdGljSW5mbzogU0RLLlN0YXRpY0luZm8gPSBudWxsO1xyXG4gICAgc3RhcnRDb25maWc6IFNESy5TaW1wbGVDb25maWcgPSBudWxsO1xyXG4gICAgc2ltcGxlQW5hbHl0aWNzOiBTaW1wbGVBbmFseXRpY3MgPSBuZXcgU2ltcGxlQW5hbHl0aWNzKCk7XHJcbiAgICBzaW1wbGVBZDogU2ltcGxlQWQgPSBuZXcgU2ltcGxlQWQoKTtcclxuXHJcbiAgICBhdHRyaWJ1dGlvbkluZm86IFNESy5BdHRyaWJ1dGlvbkluZm8gPSBudWxsO1xyXG4gICAgYXR0cmlidXRpb25JbmZvQ2FsbGJhY2s6IChyZXN1bHQ6IFNESy5BdHRyaWJ1dGlvbkluZm8pID0+IHZvaWQ7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCk6IFNpbXBsZVNESyB7XHJcbiAgICAgICAgcmV0dXJuIGdldF9zaW1wbGVfbWFuYWdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRfaW5zdGFuY2UoKTogU2ltcGxlQWQge1xyXG4gICAgICAgIHJldHVybiBnZXRfc2ltcGxlX2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhbmFseXRpY3NfaW5zdGFuY2UoKTogU2ltcGxlQW5hbHl0aWNzIHtcclxuICAgICAgICByZXR1cm4gZ2V0X3NpbXBsZV9hbmFseXRpY3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IG5ldyBTaW1wbGVJT1MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgU2ltcGxlQW5kcm9pZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IFNpbXBsZUVkaXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRfc2ltcGxlX21hbmFnZXIodGhpcyk7XHJcbiAgICAgICAgc2V0X3NpbXBsZV9jYWxsYmFjayhuZXcgU2ltcGxlQ2FsbGJhY2soKSk7XHJcbiAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwic2RrIHNldHVwIGZpbmlzaFwiKTtcclxuICAgICAgICB0aGlzLnN0YXJ0TG9hZENvbmZpZygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBTaW1wbGVVdGlscy5sb2coJ2luaXQgc3RhcnQgbm9kZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltcGxlQW5hbHl0aWNzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaW1wbGVBbmFseXRpY3MudXBkYXRlKGR0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltcGxlQWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpbXBsZUFkLnVwZGF0ZShkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0TG9hZENvbmZpZygpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhTaW1wbGVTREsuQ09ORklHX0ZJTEVfTkFNRSwgY2MuSnNvbkFzc2V0LCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcclxuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU2ltcGxlU0RLLmluc3RhbmNlKCkubG9hZENvbmZpZ1N1Y2Nlc3MocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUNvbmZpZyhkaWN0OiB7fSk6IFNESy5TaW1wbGVDb25maWcge1xyXG4gICAgICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgbGV0IGNvbmZpZzogU0RLLlNpbXBsZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGdhbWVOYW1lOiBTaW1wbGVVdGlscy5nZXREaWN0T3JEZWZhdWx0KGRpY3QsIFwiZ2FtZU5hbWVcIiwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBhcHBzZmx5ZXJrZXk6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJpb3NBcHBzZmx5ZXJrZXlcIiwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBhcHBsZWlkOiBTaW1wbGVVdGlscy5nZXREaWN0T3JEZWZhdWx0KGRpY3QsIFwiaW9zQXBwbGVpZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGFkanVzdEFwcGtleTogU2ltcGxlVXRpbHMuZ2V0RGljdE9yRGVmYXVsdChkaWN0LCBcImlvc0FkanVzdEFwcGtleVwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIHRvcG9uQXBwaWQ6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJpb3NUb3BPbkFwcGlkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgdG9wb25LZXk6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJpb3NUb3BPbktleVwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIHJld2FyZFBsYWNlbWVudElkOiBTaW1wbGVVdGlscy5nZXREaWN0T3JEZWZhdWx0KGRpY3QsIFwiaW9zVG9wb25SZXdhcmRQbGFjZW1lbnRJZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbFBsYWNlbWVudElkOiBTaW1wbGVVdGlscy5nZXREaWN0T3JEZWZhdWx0KGRpY3QsIFwiaW9zVG9wb25JbnRlcnN0aXRpYWxQbGFjZW1lbnRJZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGJhbm5lUGxhY2VtZW50SWQ6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJpb3NUb3BvbkJhbm5lUGxhY2VtZW50SWRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBiYW5uZXJXaWR0aDogU2ltcGxlVXRpbHMuZ2V0RGljdE9yRGVmYXVsdChkaWN0LCBcImJhbm5lcldpZHRoXCIsIC0xKSxcclxuICAgICAgICAgICAgICAgIGJhbm5lckhlaWdodDogU2ltcGxlVXRpbHMuZ2V0RGljdE9yRGVmYXVsdChkaWN0LCBcImJhbm5lckhlaWdodFwiLCAtMSksXHJcbiAgICAgICAgICAgICAgICBkZWJ1ZzogU2ltcGxlVXRpbHMuZ2V0RGljdE9yRGVmYXVsdChkaWN0LCBcImRlYnVnXCIsIGZhbHNlKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmFwcHNmbHllcmtleS5sZW5ndGggPiAwICYmIGNvbmZpZy5hcHBsZWlkLmxlbmd0aCA+IDAgJiYgY29uZmlnLmFkanVzdEFwcGtleS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwicmVhZHkgdG8gc3RhcnQgYXBwc2ZseWVyIHNka1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWcuYXBwc2ZseWVya2V5Lmxlbmd0aCA9PSAwICYmIGNvbmZpZy5hZGp1c3RBcHBrZXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwicmVhZHkgdG8gc3RhcnQgYWRqdXN0IHNka1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgIGxldCBjb25maWc6IFNESy5TaW1wbGVDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZTogU2ltcGxlVXRpbHMuZ2V0RGljdE9yRGVmYXVsdChkaWN0LCBcImdhbWVOYW1lXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgYXBwc2ZseWVya2V5OiBTaW1wbGVVdGlscy5nZXREaWN0T3JEZWZhdWx0KGRpY3QsIFwiYW5kcm9pZEFwcHNmbHllcmtleVwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGFwcGxlaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhZGp1c3RBcHBrZXk6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJhbmRyb2lkQWRqdXN0QXBwa2V5XCIsIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgdG9wb25BcHBpZDogU2ltcGxlVXRpbHMuZ2V0RGljdE9yRGVmYXVsdChkaWN0LCBcImFuZHJvaWRUb3BPbkFwcGlkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgdG9wb25LZXk6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJhbmRyb2lkVG9wT25LZXlcIiwgXCJcIiksXHJcbiAgICAgICAgICAgICAgICByZXdhcmRQbGFjZW1lbnRJZDogU2ltcGxlVXRpbHMuZ2V0RGljdE9yRGVmYXVsdChkaWN0LCBcImFuZHJvaWRUb3BvblJld2FyZFBsYWNlbWVudElkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsUGxhY2VtZW50SWQ6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJhbmRyb2lkVG9wb25JbnRlcnN0aXRpYWxQbGFjZW1lbnRJZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgICAgIGJhbm5lUGxhY2VtZW50SWQ6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJhbmRyb2lkVG9wb25CYW5uZVBsYWNlbWVudElkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgYmFubmVyV2lkdGg6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJiYW5uZXJXaWR0aFwiLCAtMSksXHJcbiAgICAgICAgICAgICAgICBiYW5uZXJIZWlnaHQ6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJiYW5uZXJIZWlnaHRcIiwgLTEpLFxyXG4gICAgICAgICAgICAgICAgZGVidWc6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJkZWJ1Z1wiLCBmYWxzZSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5hcHBzZmx5ZXJrZXkubGVuZ3RoID4gMCAmJiBjb25maWcuYWRqdXN0QXBwa2V5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZWFkeSB0byBzdGFydCBhcHBzZmx5ZXIgc2RrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy5hcHBzZmx5ZXJrZXkubGVuZ3RoID09IDAgJiYgY29uZmlnLmFkanVzdEFwcGtleS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJyZWFkeSB0byBzdGFydCBhZGp1c3Qgc2RrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY29uZmlnOiBTREsuU2ltcGxlQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgZ2FtZU5hbWU6IFNpbXBsZVV0aWxzLmdldERpY3RPckRlZmF1bHQoZGljdCwgXCJnYW1lTmFtZVwiLCBcImRlbW9cIiksXHJcbiAgICAgICAgICAgICAgICBhcHBzZmx5ZXJrZXk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhcHBsZWlkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWRqdXN0QXBwa2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdG9wb25BcHBpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRvcG9uS2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmV3YXJkUGxhY2VtZW50SWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxQbGFjZW1lbnRJZDogXCJcIixcclxuICAgICAgICAgICAgICAgIGJhbm5lUGxhY2VtZW50SWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBiYW5uZXJXaWR0aDogLTEsXHJcbiAgICAgICAgICAgICAgICBiYW5uZXJIZWlnaHQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgZGVidWc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZENvbmZpZ1N1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHJlcyAhPSBudWxsICYmICdqc29uJyBpbiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB0aGlzLnBhcnNlQ29uZmlnKHJlcy5qc29uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdChjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwiZmFpbCB0byBsb2FkIGpzb24gZnJvbSByZXNvdXJjZXMvU2ltcGxlU0RLQ29uZmlnLmpzb25cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcImNvbmZpZyBsb2FkIGZhaWxcIiArIGVyci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoaW5wdXRDb25maWc6IFNESy5TaW1wbGVDb25maWcpIHtcclxuICAgICAgICAvL2xvYWQgY29uZmlnXHJcbiAgICAgICAgdGhpcy5zdGFydENvbmZpZyA9IGlucHV0Q29uZmlnO1xyXG4gICAgICAgIFNpbXBsZVV0aWxzLnNldERlYnVnKHRoaXMuc3RhcnRDb25maWcuZGVidWcpO1xyXG4gICAgICAgIGlmIChpbnB1dENvbmZpZy5hcHBzZmx5ZXJrZXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaW5pdFdpdGhBcHBzZmx5ZXIoaW5wdXRDb25maWcuYXBwc2ZseWVya2V5LCBpbnB1dENvbmZpZy5hcHBsZWlkLCBpbnB1dENvbmZpZy5kZWJ1Zyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaW5pdFdpdGhBZGp1c3QoaW5wdXRDb25maWcuYWRqdXN0QXBwa2V5LCBpbnB1dENvbmZpZy5kZWJ1Zyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0U3VjY2VzcyhlOiBTREsuSW5pdFN1Y2Nlc3NSZXN1bHQpIHtcclxuICAgICAgICBsZXQgcGxhdGZvcm0gPSBcImVkaXRvclwiO1xyXG4gICAgICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgcGxhdGZvcm0gPSBcImlvc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtID0gXCJhbmRyb2lkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZXNzaW9uSWQgPSBlLmRldmljZUlkICsgXCJfXCIgKyBTaW1wbGVVdGlscy5nZXRUaW1lc3RhbXAoKSArIFwiX1wiICsgU2ltcGxlVXRpbHMuZ2V0UmFuZG9tSW50KDEwMClcclxuICAgICAgICBsZXQgbmV0d29ya1N0YXR1ZSA9IFwibm9uZVwiXHJcbiAgICAgICAgc3dpdGNoIChlLm5ldHdvcmspIHtcclxuICAgICAgICAgICAgY2FzZSAwOiBuZXR3b3JrU3RhdHVlID0gXCJub25lXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IG5ldHdvcmtTdGF0dWUgPSBcIndpZmlcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogbmV0d29ya1N0YXR1ZSA9IFwiNGdcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG5ldHdvcmtTdGF0dWUgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0aWNJbmZvID0ge1xyXG4gICAgICAgICAgICBnYW1lTmFtZTogdGhpcy5zdGFydENvbmZpZy5nYW1lTmFtZSxcclxuICAgICAgICAgICAgcG46IGUucGFja2FnZSxcclxuICAgICAgICAgICAgZGV2aWNlSWQ6IGUuZGV2aWNlSWQsXHJcbiAgICAgICAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybSxcclxuICAgICAgICAgICAgaWRmYTogZS5pZGZhLFxyXG4gICAgICAgICAgICB1aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlc3Npb25JZDogc2Vzc2lvbklkLFxyXG5cclxuICAgICAgICAgICAgaWRmdjogZS5pZGZ2LFxyXG4gICAgICAgICAgICBhbmRyb2lkX2lkOiBlLmFuZHJvaWRfaWQsXHJcblxyXG4gICAgICAgICAgICBiYW5kOiBlLmJhbmQsXHJcbiAgICAgICAgICAgIG1vZGVsOiBlLm1vZGVsLFxyXG4gICAgICAgICAgICBkZXZpY2VOYW1lOiBlLmRldmljZU5hbWUsXHJcbiAgICAgICAgICAgIHN5c3RlbVZlcnNpb246IGUuc3lzdGVtVmVyc2lvbixcclxuICAgICAgICAgICAgbmV0d29yazogbmV0d29ya1N0YXR1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJpbml0IHN1Y2M6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0aWNJbmZvKSk7XHJcbiAgICAgICAgdGhpcy5zaW1wbGVBbmFseXRpY3MuaW5pdCh0aGlzLnN0YXRpY0luZm8pO1xyXG4gICAgICAgIHRoaXMuc2ltcGxlQW5hbHl0aWNzLnNlbmRMb2coU2ltcGxlU0RLRXZlbnQuR0FNRV9TVEFSVCwge1xyXG4gICAgICAgICAgICBtb2RlbDogdGhpcy5zdGF0aWNJbmZvLm1vZGVsLFxyXG4gICAgICAgICAgICBiYW5kOiB0aGlzLnN0YXRpY0luZm8uYmFuZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zaW1wbGVBZC5pbml0KHRoaXMuc3RhcnRDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWlsZWQoZTogU0RLLlNES0Vycm9yKSB7XHJcbiAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwiY2FsbCBmYWlsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRpY0luZm8oKTogU0RLLlN0YXRpY0luZm8ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRpY0luZm87XHJcbiAgICB9XHJcblxyXG4gICAgLy/lvZLlm6Dlm57osINcclxuICAgIGlubmVyQXR0cmlidXRpb25JbmZvQ2FsbGJhY2soYXR0cmlidXRpb25JbmZvOiBTREsuQXR0cmlidXRpb25JbmZvKSB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGlvbkluZm8gPSBhdHRyaWJ1dGlvbkluZm87XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRpb25JbmZvQ2FsbGJhY2sgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0aW9uSW5mb0NhbGxiYWNrKHRoaXMuYXR0cmlidXRpb25JbmZvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+W8guatpeiOt+WPllxyXG4gICAgc2V0QXR0cmlidXRpb25JbmZvQ2FsbGJhY2soYXR0cmlidXRpb25JbmZvQ2FsbGJhY2s6IChyZXN1bHQ6IFNESy5BdHRyaWJ1dGlvbkluZm8pID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0aW9uSW5mb0NhbGxiYWNrID0gYXR0cmlidXRpb25JbmZvQ2FsbGJhY2s7XHJcbiAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRpb25JbmZvICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGlvbkluZm9DYWxsYmFjayh0aGlzLmF0dHJpYnV0aW9uSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/lkIzmraXojrflj5ZcclxuICAgIGdldEF0dHJpYnV0aW9uSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGlvbkluZm87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV0d29ya1N0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldE5ldHdvcmtTdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc05ldHdvcmtPaygpIHtcclxuICAgICAgICBsZXQgciA9IHRoaXMuZ2V0TmV0d29ya1N0YXR1cygpO1xyXG4gICAgICAgIHJldHVybiAodW5kZWZpbmVkICE9IHIgJiYgciAhPSBudWxsICYmIHIgPiAwKTtcclxuICAgIH1cclxufVxyXG4iXX0=