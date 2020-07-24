"use strict";
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