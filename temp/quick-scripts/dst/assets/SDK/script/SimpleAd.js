
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleAd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ed77QIA0xEN44lp0xr0q9+', 'SimpleAd');
// SDK/script/SimpleAd.ts

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
var SimpleUtils_1 = require("./SimpleUtils");
var SimpleSDK_1 = require("./SimpleSDK");
var SimpleSDKEvent_1 = require("./SimpleSDKEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleAd = /** @class */ (function (_super) {
    __extends(SimpleAd, _super);
    function SimpleAd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasInit = false;
        _this.lastTryLoadAllTs = -1;
        _this.ATJSSDK = null;
        _this.ATRewardedVideoJSSDK = null;
        _this.ATInterstitialJSSDK = null;
        _this.ATBannerJSSDK = null;
        _this.rewardId = null;
        _this.rewardLoadingStatus = SimpleAd_1.STATUS_INIT;
        _this.rewardListener = null;
        _this.atRewardedVideoListener = {
            adEntry: "",
            setEntry: function (e) {
                this.adEntry = e;
            },
            //Callbacks
            onRewardedVideoAdLoaded: function (placementId) {
                SimpleUtils_1.default.log("onRewardedVideoAdLoaded(" + placementId + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                ad.rewardLoad();
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_LOAD, SimpleSDKEvent_1.default.buildAdLoad(SimpleSDKEvent_1.default.AD_TYPE_REWARD, placementId));
            },
            onRewardedVideoAdFailed: function (placementId, errorInfo) {
                SimpleUtils_1.default.log("onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                ad.rewardLoadFail();
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_LOAD_FAIL, SimpleSDKEvent_1.default.buildAdLoadFail(SimpleSDKEvent_1.default.AD_TYPE_REWARD, placementId, errorInfo));
            },
            onRewardedVideoAdPlayStart: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                SimpleUtils_1.default.log("onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_SHOW, SimpleSDKEvent_1.default.buildMapWithCallback(SimpleSDKEvent_1.default.AD_TYPE_REWARD, placementId, callbackInfoJson));
                var ad = SimpleSDK_1.default.ad_instance();
                if (ad.rewardListener != null) {
                    ad.rewardListener.onRewardedVideoAdPlayStart(this.adEntry, callbackInfoJson);
                }
            },
            onRewardedVideoAdPlayEnd: function (placementId, callbackInfo) {
                SimpleUtils_1.default.log("onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
            },
            onRewardedVideoAdPlayFailed: function (placementId, errorInfo, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                SimpleUtils_1.default.log("onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                if (ad.rewardListener != null) {
                    ad.rewardListener.onRewardedVideoAdPlayFailed(this.adEntry, errorInfo, callbackInfoJson);
                }
            },
            onRewardedVideoAdClosed: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                SimpleUtils_1.default.log("onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                ad.rewardClose();
                if (ad.rewardListener != null) {
                    ad.rewardListener.onRewardedVideoAdClosed(this.adEntry, callbackInfoJson);
                }
            },
            onRewardedVideoAdPlayClicked: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                SimpleUtils_1.default.log("onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_CLICK, SimpleSDKEvent_1.default.buildMapWithCallback(SimpleSDKEvent_1.default.AD_TYPE_REWARD, placementId, callbackInfoJson));
                var ad = SimpleSDK_1.default.ad_instance();
                if (ad.rewardListener != null) {
                    ad.rewardListener.onRewardedVideoAdPlayClicked(this.adEntry, callbackInfoJson);
                }
            },
            onReward: function (placementId, callbackInfo) {
                SimpleUtils_1.default.log("onReward(" + placementId + ", " + callbackInfo + ")");
            }
        };
        _this.interId = null;
        _this.interLoadingStatus = SimpleAd_1.STATUS_INIT;
        _this.interListener = null;
        _this.atInterstitialListener = {
            adEntry: "",
            setEntry: function (adEntry) {
                this.adEntry = adEntry;
            },
            onInterstitialAdLoaded: function (placementId) {
                var ad = SimpleSDK_1.default.ad_instance();
                ad.interLoad();
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_LOAD, SimpleSDKEvent_1.default.buildAdLoad(SimpleSDKEvent_1.default.AD_TYPE_INTERSTITIAL, placementId));
                SimpleUtils_1.default.log("onInterstitialAdLoaded(" + placementId + ")");
            },
            onInterstitialAdLoadFail: function (placementId, errorInfo) {
                var ad = SimpleSDK_1.default.ad_instance();
                ad.interLoadFail();
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_LOAD_FAIL, SimpleSDKEvent_1.default.buildAdLoadFail(SimpleSDKEvent_1.default.AD_TYPE_INTERSTITIAL, placementId, errorInfo));
                SimpleUtils_1.default.log("onInterstitialAdLoadFail(" + placementId + ", " + errorInfo + ")");
            },
            onInterstitialAdShow: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_SHOW, SimpleSDKEvent_1.default.buildMapWithCallback(SimpleSDKEvent_1.default.AD_TYPE_INTERSTITIAL, placementId, callbackInfoJson));
                SimpleUtils_1.default.log("onInterstitialAdShow(" + placementId + ", " + callbackInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                if (ad.interListener != null) {
                    ad.interListener.onInterstitialAdShow(this.adEntry, callbackInfoJson);
                }
            },
            onInterstitialAdStartPlayingVideo: function (placementId, callbackInfo) {
                SimpleUtils_1.default.log("onInterstitialAdStartPlayingVideo(" + placementId + ", " + callbackInfo + ")");
            },
            onInterstitialAdEndPlayingVideo: function (placementId, callbackInfo) {
                SimpleUtils_1.default.log("onInterstitialAdEndPlayingVideo(" + placementId + ", " + callbackInfo + ")");
            },
            onInterstitialAdFailedToPlayVideo: function (placementId, errorInfo) {
                SimpleUtils_1.default.log("onInterstitialAdFailedToPlayVideo(" + placementId + ", " + errorInfo + ")");
            },
            onInterstitialAdFailedToShow: function (placementId) {
                SimpleUtils_1.default.log("onInterstitialAdFailedToShow(" + placementId + ")");
            },
            onInterstitialAdClose: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                SimpleUtils_1.default.log("onInterstitialAdClose(" + placementId + ", " + callbackInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                ad.interClose();
                if (ad.interListener != null) {
                    ad.interListener.onInterstitialAdClose(this.adEntry, callbackInfoJson);
                }
            },
            onInterstitialAdClick: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_CLICK, SimpleSDKEvent_1.default.buildMapWithCallback(SimpleSDKEvent_1.default.AD_TYPE_INTERSTITIAL, placementId, JSON.parse(callbackInfo)));
                SimpleUtils_1.default.log("onInterstitialAdClick(" + placementId + ", " + callbackInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                if (ad.interListener != null) {
                    ad.interListener.onInterstitialAdClick(this.adEntry, callbackInfoJson);
                }
            }
        };
        _this.bannerId = null;
        _this.bannerLoadingStatus = SimpleAd_1.STATUS_INIT;
        _this.bannerWidth = -1;
        _this.bannerHeight = -1;
        _this.bannerHasShow = false;
        _this.bannerListener = null;
        _this.atBannerListener = {
            onBannerAdLoaded: function (placementId) {
                var ad = SimpleSDK_1.default.ad_instance();
                ad.bannerLoad();
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_LOAD, SimpleSDKEvent_1.default.buildAdLoad(SimpleSDKEvent_1.default.AD_TYPE_BANNER, placementId));
                SimpleUtils_1.default.log("onBannerAdLoaded(" + placementId + ")");
            },
            onBannerAdLoadFail: function (placementId, errorInfo) {
                var ad = SimpleSDK_1.default.ad_instance();
                ad.bannerLoadFail();
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_LOAD_FAIL, SimpleSDKEvent_1.default.buildAdLoadFail(SimpleSDKEvent_1.default.AD_TYPE_BANNER, placementId, errorInfo));
                SimpleUtils_1.default.log("onBannerAdLoadFail(" + placementId + ", " + errorInfo + ")");
            },
            onBannerAdShow: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_SHOW, SimpleSDKEvent_1.default.buildMapWithCallback(SimpleSDKEvent_1.default.AD_TYPE_BANNER, placementId, callbackInfoJson));
                SimpleUtils_1.default.log("onBannerAdShow(" + placementId + ", " + callbackInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                if (ad.bannerListener != null) {
                    ad.bannerListener.onBannerAdShow(placementId, callbackInfoJson);
                }
            },
            onBannerAdClick: function (placementId, callbackInfo) {
                var callbackInfoJson = JSON.parse(callbackInfo);
                var ana = SimpleSDK_1.default.analytics_instance();
                ana.sendLog(SimpleSDKEvent_1.default.AD_CLICK, SimpleSDKEvent_1.default.buildMapWithCallback(SimpleSDKEvent_1.default.AD_TYPE_BANNER, placementId, callbackInfoJson));
                SimpleUtils_1.default.log("onBannerAdClick(" + placementId + ", " + callbackInfo + ")");
                var ad = SimpleSDK_1.default.ad_instance();
                if (ad.bannerListener != null) {
                    ad.bannerListener.onBannerAdClick(placementId, callbackInfoJson);
                }
            },
            onBannerAdAutoRefresh: function (placementId, callbackInfo) {
                SimpleUtils_1.default.log("onBannerAdAutoRefresh(" + placementId + ", " + callbackInfo + ")");
            },
            onBannerAdAutoRefreshFail: function (placementId, errorInfo) {
                SimpleUtils_1.default.log("onBannerAdAutoRefreshFail(" + placementId + ", " + errorInfo + ")");
            },
            onBannerAdCloseButtonTapped: function (placementId, callbackInfo) {
                SimpleUtils_1.default.log("onBannerAdCloseButtonTapped(" + placementId + ", " + callbackInfo + ")");
            }
        };
        return _this;
    }
    SimpleAd_1 = SimpleAd;
    SimpleAd.prototype.init = function (config) {
        this.ATJSSDK = window.ATJSSDK;
        this.ATRewardedVideoJSSDK = window.ATRewardedVideoJSSDK;
        this.ATInterstitialJSSDK = window.ATInterstitialJSSDK;
        this.ATBannerJSSDK = window.ATBannerJSSDK;
        if (SimpleUtils_1.default.isEditor()) {
            cc.log("skip init at sdk");
        }
        else {
            if (config.debug) {
                this.ATJSSDK.setLogDebug(true);
            }
            this.rewardId = config.rewardPlacementId;
            this.interId = config.interstitialPlacementId;
            this.bannerId = config.bannePlacementId;
            this.bannerWidth = cc.view.getFrameSize().width - 10;
            if (config.bannerWidth > 0) {
                this.bannerWidth = config.bannerWidth;
            }
            this.bannerHeight = this.bannerWidth / (320 / 50);
            if (config.bannerHeight > 0) {
                this.bannerHeight = config.bannerHeight;
            }
            // 加载广告
            this.ATRewardedVideoJSSDK.setAdListener(this.atRewardedVideoListener);
            this.ATInterstitialJSSDK.setAdListener(this.atInterstitialListener);
            this.ATBannerJSSDK.setAdListener(this.atBannerListener);
            SimpleUtils_1.default.log("start anythink sdk with " + config.toponAppid);
            this.ATJSSDK.setGDPRLevel(this.ATJSSDK.PERSONALIZED);
            this.ATJSSDK.initSDK(config.toponAppid, config.toponKey);
            this.tryLoadAll();
            this.hasInit = true;
        }
    };
    SimpleAd.prototype.update = function (dt) {
        if (this.hasInit) {
            var now = SimpleUtils_1.default.getTimestamp();
            if (this.lastTryLoadAllTs + SimpleAd_1.TRT_LOAD_ALL_INTERVAL < now) {
                this.tryLoadAll();
            }
        }
    };
    SimpleAd.prototype.tryLoadAll = function () {
        SimpleUtils_1.default.log("try to load all ad");
        var now = SimpleUtils_1.default.getTimestamp();
        this.lastTryLoadAllTs = now;
        if (!this.hasReward()) {
            this.tryLoadReward();
        }
        else {
            SimpleUtils_1.default.log("skip load reward because reward has ad");
        }
        if (!this.hasInter()) {
            this.tryLoadInter();
        }
        else {
            SimpleUtils_1.default.log("skip load inter because inter has ad");
        }
        if (!this.hasBanner()) {
            this.tryLoadBanner();
        }
        else {
            SimpleUtils_1.default.log("skip load inter because banner has ad");
        }
    };
    //load reward
    SimpleAd.prototype.tryLoadReward = function () {
        if (SimpleSDK_1.default.instance().isNetworkOk()) {
            if (this.rewardId != null && this.rewardId.length > 0) {
                if (this.rewardLoadingStatus == SimpleAd_1.STATUS_LOADING) {
                    SimpleUtils_1.default.log("reward is loading and skip");
                }
                else {
                    SimpleUtils_1.default.log("try to load reward");
                    this.rewardLoadingStatus = SimpleAd_1.STATUS_LOADING;
                    this.loadReward();
                }
            }
            else {
                SimpleUtils_1.default.log("reward id is null and skip");
            }
        }
    };
    SimpleAd.prototype.loadReward = function () {
        this.ATRewardedVideoJSSDK.loadRewardedVideo(this.rewardId, {});
    };
    SimpleAd.prototype.setRewardListener = function (rewardListener) {
        this.rewardListener = rewardListener;
    };
    SimpleAd.prototype.hasReward = function () {
        if (this.rewardId != null && this.rewardId.length > 0) {
            return this.ATRewardedVideoJSSDK.hasAdReady(this.rewardId);
        }
        else
            return false;
    };
    SimpleAd.prototype.showReward = function (adEntry) {
        this.atRewardedVideoListener.setEntry(adEntry);
        this.ATRewardedVideoJSSDK.showAd(this.rewardId);
    };
    SimpleAd.prototype.rewardLoad = function () {
        this.rewardLoadingStatus = SimpleAd_1.STATUS_SUCCESS;
    };
    SimpleAd.prototype.rewardLoadFail = function () {
        this.rewardLoadingStatus = SimpleAd_1.STATUS_FAILED;
    };
    SimpleAd.prototype.rewardClose = function () {
        this.loadReward();
    };
    //inter
    SimpleAd.prototype.tryLoadInter = function () {
        if (SimpleSDK_1.default.instance().isNetworkOk()) {
            if (this.interId != null && this.interId.length > 0) {
                if (this.interLoadingStatus == SimpleAd_1.STATUS_LOADING) {
                    SimpleUtils_1.default.log("inter is loading and skip");
                }
                else {
                    SimpleUtils_1.default.log("try to load inter");
                    this.interLoadingStatus = SimpleAd_1.STATUS_LOADING;
                    this.loadInter();
                }
            }
            else {
                SimpleUtils_1.default.log("inter id is null and skip");
            }
        }
    };
    SimpleAd.prototype.loadInter = function () {
        this.ATInterstitialJSSDK.loadInterstitial(this.interId);
    };
    SimpleAd.prototype.setInterListener = function (interListener) {
        this.interListener = interListener;
    };
    SimpleAd.prototype.hasInter = function () {
        if (this.interId != null && this.interId.length > 0) {
            return this.ATInterstitialJSSDK.hasAdReady(this.interId);
        }
        else
            return false;
    };
    SimpleAd.prototype.showInter = function (adEntry) {
        this.atInterstitialListener.setEntry(adEntry);
        this.ATInterstitialJSSDK.showAd(this.interId);
        this.tryLoadInter();
    };
    SimpleAd.prototype.interLoad = function () {
        this.interLoadingStatus = SimpleAd_1.STATUS_SUCCESS;
    };
    SimpleAd.prototype.interLoadFail = function () {
        this.interLoadingStatus = SimpleAd_1.STATUS_FAILED;
    };
    SimpleAd.prototype.interClose = function () {
        this.loadInter();
    };
    //banner
    SimpleAd.prototype.tryLoadBanner = function () {
        if (SimpleSDK_1.default.instance().isNetworkOk()) {
            if (this.bannerId != null && this.bannerId.length > 0) {
                if (this.bannerLoadingStatus == SimpleAd_1.STATUS_LOADING) {
                    SimpleUtils_1.default.log("banner is loading and skip");
                }
                else {
                    SimpleUtils_1.default.log("try to load banner");
                    this.bannerLoadingStatus = SimpleAd_1.STATUS_LOADING;
                    this.loadBanner();
                }
            }
            else {
                SimpleUtils_1.default.log("banner id is null and skip");
            }
        }
    };
    SimpleAd.prototype.loadBanner = function () {
        this.ATBannerJSSDK.loadBanner(this.bannerId, this.ATBannerJSSDK.createLoadAdSize(this.bannerWidth, this.bannerHeight));
    };
    SimpleAd.prototype.hasBanner = function () {
        if (this.bannerId != null && this.bannerId.length > 0) {
            return this.ATBannerJSSDK.hasAdReady(this.bannerId);
        }
        else
            return false;
    };
    SimpleAd.prototype.setBannerListener = function (bannerListener) {
        this.bannerListener = bannerListener;
    };
    SimpleAd.prototype.showOrReShowBanner = function (pos) {
        if (this.bannerHasShow) {
            //直接reshow
            this.ATBannerJSSDK.reShowAd(this.bannerId);
        }
        else {
            if (this.ATBannerJSSDK.hasAdReady(this.bannerId)) {
                this.bannerHasShow = true;
                var p = "";
                if (pos == SimpleAd_1.BANNER_TOP) {
                    p = this.ATBannerJSSDK.kATBannerAdShowingPisitionTop;
                }
                else {
                    p = this.ATBannerJSSDK.kATBannerAdShowingPisitionBottom;
                }
                this.ATBannerJSSDK.showAdInPosistion(this.bannerId, p);
            }
        }
    };
    SimpleAd.prototype.hideBanner = function () {
        this.ATBannerJSSDK.hideAd(this.bannerId);
    };
    SimpleAd.prototype.removeBanner = function () {
        this.ATBannerJSSDK.rewoveAd(this.bannerId);
        this.bannerHasShow = false;
        this.tryLoadBanner();
    };
    SimpleAd.prototype.bannerLoad = function () {
        this.bannerLoadingStatus = SimpleAd_1.STATUS_SUCCESS;
    };
    SimpleAd.prototype.bannerLoadFail = function () {
        this.bannerLoadingStatus = SimpleAd_1.STATUS_FAILED;
    };
    SimpleAd.prototype.getAdStatus = function () {
        var m = {
            "reward": this.rewardLoadingStatus,
            "inter": this.interLoadingStatus,
            "banner": this.bannerLoadingStatus
        };
        return m;
    };
    var SimpleAd_1;
    SimpleAd.TRT_LOAD_ALL_INTERVAL = 60;
    SimpleAd.STATUS_INIT = 0;
    SimpleAd.STATUS_LOADING = 1;
    SimpleAd.STATUS_SUCCESS = 2;
    SimpleAd.STATUS_FAILED = 3;
    SimpleAd.BANNER_TOP = 0;
    SimpleAd.BANNER_BOTTOM = 1;
    SimpleAd = SimpleAd_1 = __decorate([
        ccclass
    ], SimpleAd);
    return SimpleAd;
}(cc.Component));
exports.default = SimpleAd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZUFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLDZDQUF3QztBQUV4Qyx5Q0FBb0M7QUFFcEMsbURBQThDO0FBQ3hDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFJNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUE2ZEM7UUEzZEcsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixzQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsMEJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLHlCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQVVyQixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLHlCQUFtQixHQUFHLFVBQVEsQ0FBQyxXQUFXLENBQUM7UUFDM0Msb0JBQWMsR0FBNkIsSUFBSSxDQUFDO1FBQ2hELDZCQUF1QixHQUFHO1lBQ3RCLE9BQU8sRUFBRSxFQUFFO1lBRVgsUUFBUSxFQUFFLFVBQVUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQztZQUNELFdBQVc7WUFDWCx1QkFBdUIsRUFBRSxVQUFVLFdBQW1CO2dCQUNsRCxxQkFBVyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksRUFBRSxHQUFhLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxHQUFHLEdBQW9CLG1CQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDMUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBYyxDQUFDLE9BQU8sRUFBRSx3QkFBYyxD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VUFBUSxDQUFDLGFBQWEsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHO1lBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDbEMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDaEMsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7U0FDckMsQ0FBQTtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7SUFuZE0sOEJBQXFCLEdBQUcsRUFBRSxDQUFDO0lBQzNCLG9CQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLHVCQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLHVCQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLHNCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLG1CQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ2Ysc0JBQWEsR0FBRyxDQUFDLENBQUM7SUFkUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNGQ1QjtJQUFELGVBQUM7Q0E1ZEQsQUE0ZEMsQ0E1ZHFDLEVBQUUsQ0FBQyxTQUFTLEdBNGRqRDtrQkE1ZG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBBVCBmcm9tICcuL0FueVRoaW5rQWRzL0FUSlNTREsnXHJcbmltcG9ydCAqIGFzIEFUUlcgZnJvbSAnLi9BbnlUaGlua0Fkcy9BVFJld2FyZGVkVmlkZW9KU1NESydcclxuaW1wb3J0ICogYXMgQVRJTiBmcm9tICcuL0FueVRoaW5rQWRzL0FUSW50ZXJzdGl0aWFsSlNTREsnXHJcbmltcG9ydCAqIGFzIEFUQkEgZnJvbSAnLi9BbnlUaGlua0Fkcy9BVEJhbm5lckpTU0RLJ1xyXG5pbXBvcnQgU2ltcGxlVXRpbHMgZnJvbSAnLi9TaW1wbGVVdGlscyc7XHJcbmltcG9ydCAqIGFzIFNESyBmcm9tICcuL1NpbXBsZUludGVyZmFjZSc7XHJcbmltcG9ydCBTaW1wbGVTREsgZnJvbSAnLi9TaW1wbGVTREsnO1xyXG5pbXBvcnQgU2ltcGxlQW5hbHl0aWNzIGZyb20gJy4vU2ltcGxlQW5hbHl0aWNzJztcclxuaW1wb3J0IFNpbXBsZVNES0V2ZW50IGZyb20gJy4vU2ltcGxlU0RLRXZlbnQnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUFkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGhhc0luaXQgPSBmYWxzZTtcclxuICAgIGxhc3RUcnlMb2FkQWxsVHMgPSAtMTtcclxuICAgIEFUSlNTREsgPSBudWxsO1xyXG4gICAgQVRSZXdhcmRlZFZpZGVvSlNTREsgPSBudWxsO1xyXG4gICAgQVRJbnRlcnN0aXRpYWxKU1NESyA9IG51bGw7XHJcbiAgICBBVEJhbm5lckpTU0RLID0gbnVsbDtcclxuXHJcbiAgICBzdGF0aWMgVFJUX0xPQURfQUxMX0lOVEVSVkFMID0gNjA7XHJcbiAgICBzdGF0aWMgU1RBVFVTX0lOSVQgPSAwO1xyXG4gICAgc3RhdGljIFNUQVRVU19MT0FESU5HID0gMTtcclxuICAgIHN0YXRpYyBTVEFUVVNfU1VDQ0VTUyA9IDI7XHJcbiAgICBzdGF0aWMgU1RBVFVTX0ZBSUxFRCA9IDM7XHJcbiAgICBzdGF0aWMgQkFOTkVSX1RPUCA9IDA7XHJcbiAgICBzdGF0aWMgQkFOTkVSX0JPVFRPTSA9IDE7XHJcblxyXG4gICAgcmV3YXJkSWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICByZXdhcmRMb2FkaW5nU3RhdHVzID0gU2ltcGxlQWQuU1RBVFVTX0lOSVQ7XHJcbiAgICByZXdhcmRMaXN0ZW5lcjogU0RLLlNpbXBsZVJld2FyZExpc3RlbmVyID0gbnVsbDtcclxuICAgIGF0UmV3YXJkZWRWaWRlb0xpc3RlbmVyID0ge1xyXG4gICAgICAgIGFkRW50cnk6IFwiXCIsXHJcblxyXG4gICAgICAgIHNldEVudHJ5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkRW50cnkgPSBlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9DYWxsYmFja3NcclxuICAgICAgICBvblJld2FyZGVkVmlkZW9BZExvYWRlZDogZnVuY3Rpb24gKHBsYWNlbWVudElkOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25SZXdhcmRlZFZpZGVvQWRMb2FkZWQoXCIgKyBwbGFjZW1lbnRJZCArIFwiKVwiKTtcclxuICAgICAgICAgICAgbGV0IGFkOiBTaW1wbGVBZCA9IFNpbXBsZVNESy5hZF9pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhZC5yZXdhcmRMb2FkKCk7XHJcbiAgICAgICAgICAgIGxldCBhbmE6IFNpbXBsZUFuYWx5dGljcyA9IFNpbXBsZVNESy5hbmFseXRpY3NfaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgYW5hLnNlbmRMb2coU2ltcGxlU0RLRXZlbnQuQURfTE9BRCwgU2ltcGxlU0RLRXZlbnQuYnVpbGRBZExvYWQoU2ltcGxlU0RLRXZlbnQuQURfVFlQRV9SRVdBUkQsIHBsYWNlbWVudElkKSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25SZXdhcmRlZFZpZGVvQWRGYWlsZWQ6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZDogc3RyaW5nLCBlcnJvckluZm86IHN0cmluZykge1xyXG4gICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJvblJld2FyZGVkVmlkZW9BZEZhaWxlZChcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgZXJyb3JJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgICAgICBsZXQgYWQ6IFNpbXBsZUFkID0gU2ltcGxlU0RLLmFkX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGFkLnJld2FyZExvYWRGYWlsKCk7XHJcbiAgICAgICAgICAgIGxldCBhbmE6IFNpbXBsZUFuYWx5dGljcyA9IFNpbXBsZVNESy5hbmFseXRpY3NfaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgYW5hLnNlbmRMb2coU2ltcGxlU0RLRXZlbnQuQURfTE9BRF9GQUlMLCBTaW1wbGVTREtFdmVudC5idWlsZEFkTG9hZEZhaWwoU2ltcGxlU0RLRXZlbnQuQURfVFlQRV9SRVdBUkQsIHBsYWNlbWVudElkLCBlcnJvckluZm8pKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvblJld2FyZGVkVmlkZW9BZFBsYXlTdGFydDogZnVuY3Rpb24gKHBsYWNlbWVudElkOiBzdHJpbmcsIGNhbGxiYWNrSW5mbzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFja0luZm9Kc29uID0gSlNPTi5wYXJzZShjYWxsYmFja0luZm8pO1xyXG4gICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJvblJld2FyZGVkVmlkZW9BZFBsYXlTdGFydChcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgY2FsbGJhY2tJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgICAgICBsZXQgYW5hOiBTaW1wbGVBbmFseXRpY3MgPSBTaW1wbGVTREsuYW5hbHl0aWNzX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGFuYS5zZW5kTG9nKFNpbXBsZVNES0V2ZW50LkFEX1NIT1csIFNpbXBsZVNES0V2ZW50LmJ1aWxkTWFwV2l0aENhbGxiYWNrKFNpbXBsZVNES0V2ZW50LkFEX1RZUEVfUkVXQVJELCBwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvSnNvbikpO1xyXG4gICAgICAgICAgICBsZXQgYWQ6IFNpbXBsZUFkID0gU2ltcGxlU0RLLmFkX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGlmIChhZC5yZXdhcmRMaXN0ZW5lciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhZC5yZXdhcmRMaXN0ZW5lci5vblJld2FyZGVkVmlkZW9BZFBsYXlTdGFydCh0aGlzLmFkRW50cnksIGNhbGxiYWNrSW5mb0pzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25SZXdhcmRlZFZpZGVvQWRQbGF5RW5kOiBmdW5jdGlvbiAocGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25SZXdhcmRlZFZpZGVvQWRQbGF5RW5kKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBjYWxsYmFja0luZm8gKyBcIilcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25SZXdhcmRlZFZpZGVvQWRQbGF5RmFpbGVkOiBmdW5jdGlvbiAocGxhY2VtZW50SWQ6IHN0cmluZywgZXJyb3JJbmZvOiBzdHJpbmcsIGNhbGxiYWNrSW5mbzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFja0luZm9Kc29uID0gSlNPTi5wYXJzZShjYWxsYmFja0luZm8pO1xyXG4gICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJvblJld2FyZGVkVmlkZW9BZFBsYXlGYWlsZWQoXCIgKyBwbGFjZW1lbnRJZCArIFwiLCBcIiArIGVycm9ySW5mbyArIFwiLCBcIiArIGNhbGxiYWNrSW5mbyArIFwiKVwiKTtcclxuICAgICAgICAgICAgbGV0IGFkOiBTaW1wbGVBZCA9IFNpbXBsZVNESy5hZF9pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAoYWQucmV3YXJkTGlzdGVuZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWQucmV3YXJkTGlzdGVuZXIub25SZXdhcmRlZFZpZGVvQWRQbGF5RmFpbGVkKHRoaXMuYWRFbnRyeSwgZXJyb3JJbmZvLCBjYWxsYmFja0luZm9Kc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uUmV3YXJkZWRWaWRlb0FkQ2xvc2VkOiBmdW5jdGlvbiAocGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrSW5mb0pzb24gPSBKU09OLnBhcnNlKGNhbGxiYWNrSW5mbyk7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uUmV3YXJkZWRWaWRlb0FkQ2xvc2VkKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBjYWxsYmFja0luZm8gKyBcIilcIik7XHJcbiAgICAgICAgICAgIGxldCBhZDogU2ltcGxlQWQgPSBTaW1wbGVTREsuYWRfaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgYWQucmV3YXJkQ2xvc2UoKTtcclxuICAgICAgICAgICAgaWYgKGFkLnJld2FyZExpc3RlbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFkLnJld2FyZExpc3RlbmVyLm9uUmV3YXJkZWRWaWRlb0FkQ2xvc2VkKHRoaXMuYWRFbnRyeSwgY2FsbGJhY2tJbmZvSnNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvblJld2FyZGVkVmlkZW9BZFBsYXlDbGlja2VkOiBmdW5jdGlvbiAocGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrSW5mb0pzb24gPSBKU09OLnBhcnNlKGNhbGxiYWNrSW5mbyk7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uUmV3YXJkZWRWaWRlb0FkUGxheUNsaWNrZWQoXCIgKyBwbGFjZW1lbnRJZCArIFwiLCBcIiArIGNhbGxiYWNrSW5mbyArIFwiKVwiKTtcclxuICAgICAgICAgICAgbGV0IGFuYTogU2ltcGxlQW5hbHl0aWNzID0gU2ltcGxlU0RLLmFuYWx5dGljc19pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhbmEuc2VuZExvZyhTaW1wbGVTREtFdmVudC5BRF9DTElDSywgU2ltcGxlU0RLRXZlbnQuYnVpbGRNYXBXaXRoQ2FsbGJhY2soU2ltcGxlU0RLRXZlbnQuQURfVFlQRV9SRVdBUkQsIHBsYWNlbWVudElkLCBjYWxsYmFja0luZm9Kc29uKSk7XHJcbiAgICAgICAgICAgIGxldCBhZDogU2ltcGxlQWQgPSBTaW1wbGVTREsuYWRfaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKGFkLnJld2FyZExpc3RlbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFkLnJld2FyZExpc3RlbmVyLm9uUmV3YXJkZWRWaWRlb0FkUGxheUNsaWNrZWQodGhpcy5hZEVudHJ5LCBjYWxsYmFja0luZm9Kc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uUmV3YXJkOiBmdW5jdGlvbiAocGxhY2VtZW50SWQsIGNhbGxiYWNrSW5mbykge1xyXG4gICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJvblJld2FyZChcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgY2FsbGJhY2tJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcklkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgaW50ZXJMb2FkaW5nU3RhdHVzID0gU2ltcGxlQWQuU1RBVFVTX0lOSVQ7XHJcbiAgICBpbnRlckxpc3RlbmVyOiBTREsuU2ltcGxlSW50ZXJMaXN0ZW5lciA9IG51bGw7XHJcbiAgICBhdEludGVyc3RpdGlhbExpc3RlbmVyID0ge1xyXG4gICAgICAgIGFkRW50cnk6IFwiXCIsXHJcbiAgICAgICAgc2V0RW50cnkoYWRFbnRyeTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRFbnRyeSA9IGFkRW50cnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkludGVyc3RpdGlhbEFkTG9hZGVkOiBmdW5jdGlvbiAocGxhY2VtZW50SWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgYWQ6IFNpbXBsZUFkID0gU2ltcGxlU0RLLmFkX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGFkLmludGVyTG9hZCgpO1xyXG4gICAgICAgICAgICBsZXQgYW5hOiBTaW1wbGVBbmFseXRpY3MgPSBTaW1wbGVTREsuYW5hbHl0aWNzX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGFuYS5zZW5kTG9nKFNpbXBsZVNES0V2ZW50LkFEX0xPQUQsIFNpbXBsZVNES0V2ZW50LmJ1aWxkQWRMb2FkKFNpbXBsZVNES0V2ZW50LkFEX1RZUEVfSU5URVJTVElUSUFMLCBwbGFjZW1lbnRJZCkpO1xyXG4gICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJvbkludGVyc3RpdGlhbEFkTG9hZGVkKFwiICsgcGxhY2VtZW50SWQgKyBcIilcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25JbnRlcnN0aXRpYWxBZExvYWRGYWlsOiBmdW5jdGlvbiAocGxhY2VtZW50SWQ6IHN0cmluZywgZXJyb3JJbmZvOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGFkOiBTaW1wbGVBZCA9IFNpbXBsZVNESy5hZF9pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhZC5pbnRlckxvYWRGYWlsKCk7XHJcbiAgICAgICAgICAgIGxldCBhbmE6IFNpbXBsZUFuYWx5dGljcyA9IFNpbXBsZVNESy5hbmFseXRpY3NfaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgYW5hLnNlbmRMb2coU2ltcGxlU0RLRXZlbnQuQURfTE9BRF9GQUlMLCBTaW1wbGVTREtFdmVudC5idWlsZEFkTG9hZEZhaWwoU2ltcGxlU0RLRXZlbnQuQURfVFlQRV9JTlRFUlNUSVRJQUwsIHBsYWNlbWVudElkLCBlcnJvckluZm8pKTtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25JbnRlcnN0aXRpYWxBZExvYWRGYWlsKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBlcnJvckluZm8gKyBcIilcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25JbnRlcnN0aXRpYWxBZFNob3c6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZDogc3RyaW5nLCBjYWxsYmFja0luZm86IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2tJbmZvSnNvbiA9IEpTT04ucGFyc2UoY2FsbGJhY2tJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGFuYTogU2ltcGxlQW5hbHl0aWNzID0gU2ltcGxlU0RLLmFuYWx5dGljc19pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhbmEuc2VuZExvZyhTaW1wbGVTREtFdmVudC5BRF9TSE9XLCBTaW1wbGVTREtFdmVudC5idWlsZE1hcFdpdGhDYWxsYmFjayhTaW1wbGVTREtFdmVudC5BRF9UWVBFX0lOVEVSU1RJVElBTCwgcGxhY2VtZW50SWQsIGNhbGxiYWNrSW5mb0pzb24pKTtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25JbnRlcnN0aXRpYWxBZFNob3coXCIgKyBwbGFjZW1lbnRJZCArIFwiLCBcIiArIGNhbGxiYWNrSW5mbyArIFwiKVwiKTtcclxuICAgICAgICAgICAgbGV0IGFkOiBTaW1wbGVBZCA9IFNpbXBsZVNESy5hZF9pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAoYWQuaW50ZXJMaXN0ZW5lciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhZC5pbnRlckxpc3RlbmVyLm9uSW50ZXJzdGl0aWFsQWRTaG93KHRoaXMuYWRFbnRyeSwgY2FsbGJhY2tJbmZvSnNvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uSW50ZXJzdGl0aWFsQWRTdGFydFBsYXlpbmdWaWRlbzogZnVuY3Rpb24gKHBsYWNlbWVudElkLCBjYWxsYmFja0luZm8pIHtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25JbnRlcnN0aXRpYWxBZFN0YXJ0UGxheWluZ1ZpZGVvKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBjYWxsYmFja0luZm8gKyBcIilcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25JbnRlcnN0aXRpYWxBZEVuZFBsYXlpbmdWaWRlbzogZnVuY3Rpb24gKHBsYWNlbWVudElkLCBjYWxsYmFja0luZm8pIHtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25JbnRlcnN0aXRpYWxBZEVuZFBsYXlpbmdWaWRlbyhcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgY2FsbGJhY2tJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uSW50ZXJzdGl0aWFsQWRGYWlsZWRUb1BsYXlWaWRlbzogZnVuY3Rpb24gKHBsYWNlbWVudElkLCBlcnJvckluZm8pIHtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25JbnRlcnN0aXRpYWxBZEZhaWxlZFRvUGxheVZpZGVvKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBlcnJvckluZm8gKyBcIilcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25JbnRlcnN0aXRpYWxBZEZhaWxlZFRvU2hvdzogZnVuY3Rpb24gKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uSW50ZXJzdGl0aWFsQWRGYWlsZWRUb1Nob3coXCIgKyBwbGFjZW1lbnRJZCArIFwiKVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbkludGVyc3RpdGlhbEFkQ2xvc2U6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvKSB7XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFja0luZm9Kc29uID0gSlNPTi5wYXJzZShjYWxsYmFja0luZm8pO1xyXG4gICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJvbkludGVyc3RpdGlhbEFkQ2xvc2UoXCIgKyBwbGFjZW1lbnRJZCArIFwiLCBcIiArIGNhbGxiYWNrSW5mbyArIFwiKVwiKTtcclxuICAgICAgICAgICAgbGV0IGFkOiBTaW1wbGVBZCA9IFNpbXBsZVNESy5hZF9pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhZC5pbnRlckNsb3NlKCk7XHJcbiAgICAgICAgICAgIGlmIChhZC5pbnRlckxpc3RlbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFkLmludGVyTGlzdGVuZXIub25JbnRlcnN0aXRpYWxBZENsb3NlKHRoaXMuYWRFbnRyeSwgY2FsbGJhY2tJbmZvSnNvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uSW50ZXJzdGl0aWFsQWRDbGljazogZnVuY3Rpb24gKHBsYWNlbWVudElkLCBjYWxsYmFja0luZm8pIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrSW5mb0pzb24gPSBKU09OLnBhcnNlKGNhbGxiYWNrSW5mbyk7XHJcbiAgICAgICAgICAgIGxldCBhbmE6IFNpbXBsZUFuYWx5dGljcyA9IFNpbXBsZVNESy5hbmFseXRpY3NfaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgYW5hLnNlbmRMb2coU2ltcGxlU0RLRXZlbnQuQURfQ0xJQ0ssIFNpbXBsZVNES0V2ZW50LmJ1aWxkTWFwV2l0aENhbGxiYWNrKFNpbXBsZVNES0V2ZW50LkFEX1RZUEVfSU5URVJTVElUSUFMLCBwbGFjZW1lbnRJZCwgSlNPTi5wYXJzZShjYWxsYmFja0luZm8pKSk7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uSW50ZXJzdGl0aWFsQWRDbGljayhcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgY2FsbGJhY2tJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgICAgICBsZXQgYWQ6IFNpbXBsZUFkID0gU2ltcGxlU0RLLmFkX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGlmIChhZC5pbnRlckxpc3RlbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGFkLmludGVyTGlzdGVuZXIub25JbnRlcnN0aXRpYWxBZENsaWNrKHRoaXMuYWRFbnRyeSwgY2FsbGJhY2tJbmZvSnNvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGJhbm5lcklkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgYmFubmVyTG9hZGluZ1N0YXR1cyA9IFNpbXBsZUFkLlNUQVRVU19JTklUO1xyXG4gICAgYmFubmVyV2lkdGg6IG51bWJlciA9IC0xO1xyXG4gICAgYmFubmVySGVpZ2h0OiBudW1iZXIgPSAtMTtcclxuICAgIGJhbm5lckhhc1Nob3cgPSBmYWxzZTtcclxuICAgIGJhbm5lckxpc3RlbmVyOiBTREsuU2ltcGxlQmFubmVyTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgYXRCYW5uZXJMaXN0ZW5lciA9IHtcclxuICAgICAgICBvbkJhbm5lckFkTG9hZGVkOiBmdW5jdGlvbiAocGxhY2VtZW50SWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgYWQ6IFNpbXBsZUFkID0gU2ltcGxlU0RLLmFkX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGFkLmJhbm5lckxvYWQoKTtcclxuICAgICAgICAgICAgbGV0IGFuYTogU2ltcGxlQW5hbHl0aWNzID0gU2ltcGxlU0RLLmFuYWx5dGljc19pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhbmEuc2VuZExvZyhTaW1wbGVTREtFdmVudC5BRF9MT0FELCBTaW1wbGVTREtFdmVudC5idWlsZEFkTG9hZChTaW1wbGVTREtFdmVudC5BRF9UWVBFX0JBTk5FUiwgcGxhY2VtZW50SWQpKTtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25CYW5uZXJBZExvYWRlZChcIiArIHBsYWNlbWVudElkICsgXCIpXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uQmFubmVyQWRMb2FkRmFpbDogZnVuY3Rpb24gKHBsYWNlbWVudElkOiBzdHJpbmcsIGVycm9ySW5mbzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBhZDogU2ltcGxlQWQgPSBTaW1wbGVTREsuYWRfaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgYWQuYmFubmVyTG9hZEZhaWwoKTtcclxuICAgICAgICAgICAgbGV0IGFuYTogU2ltcGxlQW5hbHl0aWNzID0gU2ltcGxlU0RLLmFuYWx5dGljc19pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhbmEuc2VuZExvZyhTaW1wbGVTREtFdmVudC5BRF9MT0FEX0ZBSUwsIFNpbXBsZVNES0V2ZW50LmJ1aWxkQWRMb2FkRmFpbChTaW1wbGVTREtFdmVudC5BRF9UWVBFX0JBTk5FUiwgcGxhY2VtZW50SWQsIGVycm9ySW5mbykpO1xyXG5cclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25CYW5uZXJBZExvYWRGYWlsKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBlcnJvckluZm8gKyBcIilcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25CYW5uZXJBZFNob3c6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZDogc3RyaW5nLCBjYWxsYmFja0luZm86IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2tJbmZvSnNvbiA9IEpTT04ucGFyc2UoY2FsbGJhY2tJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGFuYTogU2ltcGxlQW5hbHl0aWNzID0gU2ltcGxlU0RLLmFuYWx5dGljc19pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhbmEuc2VuZExvZyhTaW1wbGVTREtFdmVudC5BRF9TSE9XLCBTaW1wbGVTREtFdmVudC5idWlsZE1hcFdpdGhDYWxsYmFjayhTaW1wbGVTREtFdmVudC5BRF9UWVBFX0JBTk5FUiwgcGxhY2VtZW50SWQsIGNhbGxiYWNrSW5mb0pzb24pKTtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwib25CYW5uZXJBZFNob3coXCIgKyBwbGFjZW1lbnRJZCArIFwiLCBcIiArIGNhbGxiYWNrSW5mbyArIFwiKVwiKTtcclxuICAgICAgICAgICAgbGV0IGFkOiBTaW1wbGVBZCA9IFNpbXBsZVNESy5hZF9pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAoYWQuYmFubmVyTGlzdGVuZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWQuYmFubmVyTGlzdGVuZXIub25CYW5uZXJBZFNob3cocGxhY2VtZW50SWQsIGNhbGxiYWNrSW5mb0pzb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbkJhbm5lckFkQ2xpY2s6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZDogc3RyaW5nLCBjYWxsYmFja0luZm86IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2tJbmZvSnNvbiA9IEpTT04ucGFyc2UoY2FsbGJhY2tJbmZvKTtcclxuICAgICAgICAgICAgbGV0IGFuYTogU2ltcGxlQW5hbHl0aWNzID0gU2ltcGxlU0RLLmFuYWx5dGljc19pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBhbmEuc2VuZExvZyhTaW1wbGVTREtFdmVudC5BRF9DTElDSywgU2ltcGxlU0RLRXZlbnQuYnVpbGRNYXBXaXRoQ2FsbGJhY2soU2ltcGxlU0RLRXZlbnQuQURfVFlQRV9CQU5ORVIsIHBsYWNlbWVudElkLCBjYWxsYmFja0luZm9Kc29uKSk7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uQmFubmVyQWRDbGljayhcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgY2FsbGJhY2tJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgICAgICBsZXQgYWQ6IFNpbXBsZUFkID0gU2ltcGxlU0RLLmFkX2luc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIGlmIChhZC5iYW5uZXJMaXN0ZW5lciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhZC5iYW5uZXJMaXN0ZW5lci5vbkJhbm5lckFkQ2xpY2socGxhY2VtZW50SWQsIGNhbGxiYWNrSW5mb0pzb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbkJhbm5lckFkQXV0b1JlZnJlc2g6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvKSB7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uQmFubmVyQWRBdXRvUmVmcmVzaChcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgY2FsbGJhY2tJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uQmFubmVyQWRBdXRvUmVmcmVzaEZhaWw6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCwgZXJyb3JJbmZvKSB7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uQmFubmVyQWRBdXRvUmVmcmVzaEZhaWwoXCIgKyBwbGFjZW1lbnRJZCArIFwiLCBcIiArIGVycm9ySW5mbyArIFwiKVwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbkJhbm5lckFkQ2xvc2VCdXR0b25UYXBwZWQ6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvKSB7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcIm9uQmFubmVyQWRDbG9zZUJ1dHRvblRhcHBlZChcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgY2FsbGJhY2tJbmZvICsgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5pdChjb25maWc6IFNESy5TaW1wbGVDb25maWcpIHtcclxuICAgICAgICB0aGlzLkFUSlNTREsgPSB3aW5kb3cuQVRKU1NESztcclxuICAgICAgICB0aGlzLkFUUmV3YXJkZWRWaWRlb0pTU0RLID0gd2luZG93LkFUUmV3YXJkZWRWaWRlb0pTU0RLO1xyXG4gICAgICAgIHRoaXMuQVRJbnRlcnN0aXRpYWxKU1NESyA9IHdpbmRvdy5BVEludGVyc3RpdGlhbEpTU0RLO1xyXG4gICAgICAgIHRoaXMuQVRCYW5uZXJKU1NESyA9IHdpbmRvdy5BVEJhbm5lckpTU0RLO1xyXG4gICAgICAgIGlmIChTaW1wbGVVdGlscy5pc0VkaXRvcigpKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInNraXAgaW5pdCBhdCBzZGtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFUSlNTREsuc2V0TG9nRGVidWcodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkSWQgPSBjb25maWcucmV3YXJkUGxhY2VtZW50SWQ7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJJZCA9IGNvbmZpZy5pbnRlcnN0aXRpYWxQbGFjZW1lbnRJZDtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJJZCA9IGNvbmZpZy5iYW5uZVBsYWNlbWVudElkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJXaWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLSAxMDtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5iYW5uZXJXaWR0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyV2lkdGggPSBjb25maWcuYmFubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJIZWlnaHQgPSB0aGlzLmJhbm5lcldpZHRoIC8gKDMyMCAvIDUwKTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5iYW5uZXJIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lckhlaWdodCA9IGNvbmZpZy5iYW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5Yqg6L295bm/5ZGKXHJcbiAgICAgICAgICAgIHRoaXMuQVRSZXdhcmRlZFZpZGVvSlNTREsuc2V0QWRMaXN0ZW5lcih0aGlzLmF0UmV3YXJkZWRWaWRlb0xpc3RlbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5BVEludGVyc3RpdGlhbEpTU0RLLnNldEFkTGlzdGVuZXIodGhpcy5hdEludGVyc3RpdGlhbExpc3RlbmVyKTtcclxuICAgICAgICAgICAgdGhpcy5BVEJhbm5lckpTU0RLLnNldEFkTGlzdGVuZXIodGhpcy5hdEJhbm5lckxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcInN0YXJ0IGFueXRoaW5rIHNkayB3aXRoIFwiICsgY29uZmlnLnRvcG9uQXBwaWQpO1xyXG4gICAgICAgICAgICB0aGlzLkFUSlNTREsuc2V0R0RQUkxldmVsKHRoaXMuQVRKU1NESy5QRVJTT05BTElaRUQpO1xyXG4gICAgICAgICAgICB0aGlzLkFUSlNTREsuaW5pdFNESyhjb25maWcudG9wb25BcHBpZCwgY29uZmlnLnRvcG9uS2V5KTtcclxuICAgICAgICAgICAgdGhpcy50cnlMb2FkQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzSW5pdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0luaXQpIHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IFNpbXBsZVV0aWxzLmdldFRpbWVzdGFtcCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0VHJ5TG9hZEFsbFRzICsgU2ltcGxlQWQuVFJUX0xPQURfQUxMX0lOVEVSVkFMIDwgbm93KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUxvYWRBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5TG9hZEFsbCgpIHtcclxuICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJ0cnkgdG8gbG9hZCBhbGwgYWRcIik7XHJcbiAgICAgICAgbGV0IG5vdyA9IFNpbXBsZVV0aWxzLmdldFRpbWVzdGFtcCgpO1xyXG4gICAgICAgIHRoaXMubGFzdFRyeUxvYWRBbGxUcyA9IG5vdztcclxuICAgICAgICBpZiAoIXRoaXMuaGFzUmV3YXJkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlMb2FkUmV3YXJkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJza2lwIGxvYWQgcmV3YXJkIGJlY2F1c2UgcmV3YXJkIGhhcyBhZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0ludGVyKCkpIHtcclxuICAgICAgICAgICAgdGhpcy50cnlMb2FkSW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcInNraXAgbG9hZCBpbnRlciBiZWNhdXNlIGludGVyIGhhcyBhZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0Jhbm5lcigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5TG9hZEJhbm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwic2tpcCBsb2FkIGludGVyIGJlY2F1c2UgYmFubmVyIGhhcyBhZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9sb2FkIHJld2FyZFxyXG4gICAgcHJpdmF0ZSB0cnlMb2FkUmV3YXJkKCkge1xyXG4gICAgICAgIGlmIChTaW1wbGVTREsuaW5zdGFuY2UoKS5pc05ldHdvcmtPaygpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJld2FyZElkICE9IG51bGwgJiYgdGhpcy5yZXdhcmRJZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXdhcmRMb2FkaW5nU3RhdHVzID09IFNpbXBsZUFkLlNUQVRVU19MT0FESU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwicmV3YXJkIGlzIGxvYWRpbmcgYW5kIHNraXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJ0cnkgdG8gbG9hZCByZXdhcmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMb2FkaW5nU3RhdHVzID0gU2ltcGxlQWQuU1RBVFVTX0xPQURJTkc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJyZXdhcmQgaWQgaXMgbnVsbCBhbmQgc2tpcFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRSZXdhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5BVFJld2FyZGVkVmlkZW9KU1NESy5sb2FkUmV3YXJkZWRWaWRlbyh0aGlzLnJld2FyZElkLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmV3YXJkTGlzdGVuZXIocmV3YXJkTGlzdGVuZXI6IFNESy5TaW1wbGVSZXdhcmRMaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMucmV3YXJkTGlzdGVuZXIgPSByZXdhcmRMaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBoYXNSZXdhcmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmV3YXJkSWQgIT0gbnVsbCAmJiB0aGlzLnJld2FyZElkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQVRSZXdhcmRlZFZpZGVvSlNTREsuaGFzQWRSZWFkeSh0aGlzLnJld2FyZElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Jld2FyZChhZEVudHJ5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmF0UmV3YXJkZWRWaWRlb0xpc3RlbmVyLnNldEVudHJ5KGFkRW50cnkpO1xyXG4gICAgICAgIHRoaXMuQVRSZXdhcmRlZFZpZGVvSlNTREsuc2hvd0FkKHRoaXMucmV3YXJkSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJld2FyZExvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRMb2FkaW5nU3RhdHVzID0gU2ltcGxlQWQuU1RBVFVTX1NVQ0NFU1M7XHJcbiAgICB9XHJcblxyXG4gICAgcmV3YXJkTG9hZEZhaWwoKSB7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRMb2FkaW5nU3RhdHVzID0gU2ltcGxlQWQuU1RBVFVTX0ZBSUxFRDtcclxuICAgIH1cclxuXHJcbiAgICByZXdhcmRDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmxvYWRSZXdhcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2ludGVyXHJcbiAgICBwcml2YXRlIHRyeUxvYWRJbnRlcigpIHtcclxuICAgICAgICBpZiAoU2ltcGxlU0RLLmluc3RhbmNlKCkuaXNOZXR3b3JrT2soKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcklkICE9IG51bGwgJiYgdGhpcy5pbnRlcklkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyTG9hZGluZ1N0YXR1cyA9PSBTaW1wbGVBZC5TVEFUVVNfTE9BRElORykge1xyXG4gICAgICAgICAgICAgICAgICAgIFNpbXBsZVV0aWxzLmxvZyhcImludGVyIGlzIGxvYWRpbmcgYW5kIHNraXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJ0cnkgdG8gbG9hZCBpbnRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVyTG9hZGluZ1N0YXR1cyA9IFNpbXBsZUFkLlNUQVRVU19MT0FESU5HO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEludGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJpbnRlciBpZCBpcyBudWxsIGFuZCBza2lwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGxvYWRJbnRlcigpIHtcclxuICAgICAgICB0aGlzLkFUSW50ZXJzdGl0aWFsSlNTREsubG9hZEludGVyc3RpdGlhbCh0aGlzLmludGVySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEludGVyTGlzdGVuZXIoaW50ZXJMaXN0ZW5lcjogU0RLLlNpbXBsZUludGVyTGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLmludGVyTGlzdGVuZXIgPSBpbnRlckxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0ludGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmludGVySWQgIT0gbnVsbCAmJiB0aGlzLmludGVySWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5BVEludGVyc3RpdGlhbEpTU0RLLmhhc0FkUmVhZHkodGhpcy5pbnRlcklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ludGVyKGFkRW50cnk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYXRJbnRlcnN0aXRpYWxMaXN0ZW5lci5zZXRFbnRyeShhZEVudHJ5KTtcclxuICAgICAgICB0aGlzLkFUSW50ZXJzdGl0aWFsSlNTREsuc2hvd0FkKHRoaXMuaW50ZXJJZCk7XHJcbiAgICAgICAgdGhpcy50cnlMb2FkSW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlckxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlckxvYWRpbmdTdGF0dXMgPSBTaW1wbGVBZC5TVEFUVVNfU1VDQ0VTUztcclxuICAgIH1cclxuXHJcbiAgICBpbnRlckxvYWRGYWlsKCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJMb2FkaW5nU3RhdHVzID0gU2ltcGxlQWQuU1RBVFVTX0ZBSUxFRDtcclxuICAgIH1cclxuICAgIGludGVyQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2Jhbm5lclxyXG4gICAgcHJpdmF0ZSB0cnlMb2FkQmFubmVyKCkge1xyXG4gICAgICAgIGlmIChTaW1wbGVTREsuaW5zdGFuY2UoKS5pc05ldHdvcmtPaygpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbm5lcklkICE9IG51bGwgJiYgdGhpcy5iYW5uZXJJZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYW5uZXJMb2FkaW5nU3RhdHVzID09IFNpbXBsZUFkLlNUQVRVU19MT0FESU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2ltcGxlVXRpbHMubG9nKFwiYmFubmVyIGlzIGxvYWRpbmcgYW5kIHNraXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJ0cnkgdG8gbG9hZCBiYW5uZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJMb2FkaW5nU3RhdHVzID0gU2ltcGxlQWQuU1RBVFVTX0xPQURJTkc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQmFubmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBTaW1wbGVVdGlscy5sb2coXCJiYW5uZXIgaWQgaXMgbnVsbCBhbmQgc2tpcFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgbG9hZEJhbm5lcigpIHtcclxuICAgICAgICB0aGlzLkFUQmFubmVySlNTREsubG9hZEJhbm5lcih0aGlzLmJhbm5lcklkLCB0aGlzLkFUQmFubmVySlNTREsuY3JlYXRlTG9hZEFkU2l6ZSh0aGlzLmJhbm5lcldpZHRoLCB0aGlzLmJhbm5lckhlaWdodCkpO1xyXG4gICAgfVxyXG4gICAgaGFzQmFubmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJhbm5lcklkICE9IG51bGwgJiYgdGhpcy5iYW5uZXJJZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkFUQmFubmVySlNTREsuaGFzQWRSZWFkeSh0aGlzLmJhbm5lcklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFubmVyTGlzdGVuZXIoYmFubmVyTGlzdGVuZXI6IFNESy5TaW1wbGVCYW5uZXJMaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMuYmFubmVyTGlzdGVuZXIgPSBiYW5uZXJMaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzaG93T3JSZVNob3dCYW5uZXIocG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFubmVySGFzU2hvdykge1xyXG4gICAgICAgICAgICAvL+ebtOaOpXJlc2hvd1xyXG4gICAgICAgICAgICB0aGlzLkFUQmFubmVySlNTREsucmVTaG93QWQodGhpcy5iYW5uZXJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5BVEJhbm5lckpTU0RLLmhhc0FkUmVhZHkodGhpcy5iYW5uZXJJZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVySGFzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zID09IFNpbXBsZUFkLkJBTk5FUl9UT1ApIHtcclxuICAgICAgICAgICAgICAgICAgICBwID0gdGhpcy5BVEJhbm5lckpTU0RLLmtBVEJhbm5lckFkU2hvd2luZ1Bpc2l0aW9uVG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcCA9IHRoaXMuQVRCYW5uZXJKU1NESy5rQVRCYW5uZXJBZFNob3dpbmdQaXNpdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuQVRCYW5uZXJKU1NESy5zaG93QWRJblBvc2lzdGlvbih0aGlzLmJhbm5lcklkLCBwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlQmFubmVyKCkge1xyXG4gICAgICAgIHRoaXMuQVRCYW5uZXJKU1NESy5oaWRlQWQodGhpcy5iYW5uZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQmFubmVyKCkge1xyXG4gICAgICAgIHRoaXMuQVRCYW5uZXJKU1NESy5yZXdvdmVBZCh0aGlzLmJhbm5lcklkKTtcclxuICAgICAgICB0aGlzLmJhbm5lckhhc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRyeUxvYWRCYW5uZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBiYW5uZXJMb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYmFubmVyTG9hZGluZ1N0YXR1cyA9IFNpbXBsZUFkLlNUQVRVU19TVUNDRVNTO1xyXG4gICAgfVxyXG5cclxuICAgIGJhbm5lckxvYWRGYWlsKCkge1xyXG4gICAgICAgIHRoaXMuYmFubmVyTG9hZGluZ1N0YXR1cyA9IFNpbXBsZUFkLlNUQVRVU19GQUlMRUQ7XHJcbiAgICB9XHJcbiAgICBnZXRBZFN0YXR1cygpOiB7fSB7XHJcbiAgICAgICAgbGV0IG0gPSB7XHJcbiAgICAgICAgICAgIFwicmV3YXJkXCI6IHRoaXMucmV3YXJkTG9hZGluZ1N0YXR1cyxcclxuICAgICAgICAgICAgXCJpbnRlclwiOiB0aGlzLmludGVyTG9hZGluZ1N0YXR1cyxcclxuICAgICAgICAgICAgXCJiYW5uZXJcIjogdGhpcy5iYW5uZXJMb2FkaW5nU3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==