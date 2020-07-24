import * as AT from './AnyThinkAds/ATJSSDK'
import * as ATRW from './AnyThinkAds/ATRewardedVideoJSSDK'
import * as ATIN from './AnyThinkAds/ATInterstitialJSSDK'
import * as ATBA from './AnyThinkAds/ATBannerJSSDK'
import SimpleUtils from './SimpleUtils';
import * as SDK from './SimpleInterface';
import SimpleSDK from './SimpleSDK';
import SimpleAnalytics from './SimpleAnalytics';
import SimpleSDKEvent from './SimpleSDKEvent';
const { ccclass, property } = cc._decorator;


@ccclass
export default class SimpleAd extends cc.Component {
    hasInit = false;
    lastTryLoadAllTs = -1;
    ATJSSDK = null;
    ATRewardedVideoJSSDK = null;
    ATInterstitialJSSDK = null;
    ATBannerJSSDK = null;

    static TRT_LOAD_ALL_INTERVAL = 60;
    static STATUS_INIT = 0;
    static STATUS_LOADING = 1;
    static STATUS_SUCCESS = 2;
    static STATUS_FAILED = 3;
    static BANNER_TOP = 0;
    static BANNER_BOTTOM = 1;

    rewardId: string = null;
    rewardLoadingStatus = SimpleAd.STATUS_INIT;
    rewardListener: SDK.SimpleRewardListener = null;
    atRewardedVideoListener = {
        adEntry: "",

        setEntry: function (e) {
            this.adEntry = e;
        },
        //Callbacks
        onRewardedVideoAdLoaded: function (placementId: string) {
            SimpleUtils.log("onRewardedVideoAdLoaded(" + placementId + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.rewardLoad();
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_LOAD, SimpleSDKEvent.buildAdLoad(SimpleSDKEvent.AD_TYPE_REWARD, placementId));
        },

        onRewardedVideoAdFailed: function (placementId: string, errorInfo: string) {
            SimpleUtils.log("onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.rewardLoadFail();
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_LOAD_FAIL, SimpleSDKEvent.buildAdLoadFail(SimpleSDKEvent.AD_TYPE_REWARD, placementId, errorInfo));
        },

        onRewardedVideoAdPlayStart: function (placementId: string, callbackInfo: string) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            SimpleUtils.log("onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_SHOW, SimpleSDKEvent.buildMapWithCallback(SimpleSDKEvent.AD_TYPE_REWARD, placementId, callbackInfoJson));
            let ad: SimpleAd = SimpleSDK.ad_instance();
            if (ad.rewardListener != null) {
                ad.rewardListener.onRewardedVideoAdPlayStart(this.adEntry, callbackInfoJson);
            }
        },

        onRewardedVideoAdPlayEnd: function (placementId: string, callbackInfo: string) {
            SimpleUtils.log("onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
        },

        onRewardedVideoAdPlayFailed: function (placementId: string, errorInfo: string, callbackInfo: string) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            SimpleUtils.log("onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            if (ad.rewardListener != null) {
                ad.rewardListener.onRewardedVideoAdPlayFailed(this.adEntry, errorInfo, callbackInfoJson);
            }
        },

        onRewardedVideoAdClosed: function (placementId: string, callbackInfo: string) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            SimpleUtils.log("onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.rewardClose();
            if (ad.rewardListener != null) {
                ad.rewardListener.onRewardedVideoAdClosed(this.adEntry, callbackInfoJson);
            }
        },

        onRewardedVideoAdPlayClicked: function (placementId: string, callbackInfo: string) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            SimpleUtils.log("onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_CLICK, SimpleSDKEvent.buildMapWithCallback(SimpleSDKEvent.AD_TYPE_REWARD, placementId, callbackInfoJson));
            let ad: SimpleAd = SimpleSDK.ad_instance();
            if (ad.rewardListener != null) {
                ad.rewardListener.onRewardedVideoAdPlayClicked(this.adEntry, callbackInfoJson);
            }
        },

        onReward: function (placementId, callbackInfo) {
            SimpleUtils.log("onReward(" + placementId + ", " + callbackInfo + ")");
        }
    }

    interId: string = null;
    interLoadingStatus = SimpleAd.STATUS_INIT;
    interListener: SDK.SimpleInterListener = null;
    atInterstitialListener = {
        adEntry: "",
        setEntry(adEntry: string) {
            this.adEntry = adEntry;
        },
        onInterstitialAdLoaded: function (placementId: string) {
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.interLoad();
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_LOAD, SimpleSDKEvent.buildAdLoad(SimpleSDKEvent.AD_TYPE_INTERSTITIAL, placementId));
            SimpleUtils.log("onInterstitialAdLoaded(" + placementId + ")");
        },

        onInterstitialAdLoadFail: function (placementId: string, errorInfo: string) {
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.interLoadFail();
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_LOAD_FAIL, SimpleSDKEvent.buildAdLoadFail(SimpleSDKEvent.AD_TYPE_INTERSTITIAL, placementId, errorInfo));
            SimpleUtils.log("onInterstitialAdLoadFail(" + placementId + ", " + errorInfo + ")");
        },

        onInterstitialAdShow: function (placementId: string, callbackInfo: string) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_SHOW, SimpleSDKEvent.buildMapWithCallback(SimpleSDKEvent.AD_TYPE_INTERSTITIAL, placementId, callbackInfoJson));
            SimpleUtils.log("onInterstitialAdShow(" + placementId + ", " + callbackInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            if (ad.interListener != null) {
                ad.interListener.onInterstitialAdShow(this.adEntry, callbackInfoJson)
            }
        },

        onInterstitialAdStartPlayingVideo: function (placementId, callbackInfo) {
            SimpleUtils.log("onInterstitialAdStartPlayingVideo(" + placementId + ", " + callbackInfo + ")");
        },

        onInterstitialAdEndPlayingVideo: function (placementId, callbackInfo) {
            SimpleUtils.log("onInterstitialAdEndPlayingVideo(" + placementId + ", " + callbackInfo + ")");
        },

        onInterstitialAdFailedToPlayVideo: function (placementId, errorInfo) {
            SimpleUtils.log("onInterstitialAdFailedToPlayVideo(" + placementId + ", " + errorInfo + ")");
        },

        onInterstitialAdFailedToShow: function (placementId) {
            SimpleUtils.log("onInterstitialAdFailedToShow(" + placementId + ")");
        },

        onInterstitialAdClose: function (placementId, callbackInfo) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            SimpleUtils.log("onInterstitialAdClose(" + placementId + ", " + callbackInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.interClose();
            if (ad.interListener != null) {
                ad.interListener.onInterstitialAdClose(this.adEntry, callbackInfoJson)
            }
        },

        onInterstitialAdClick: function (placementId, callbackInfo) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_CLICK, SimpleSDKEvent.buildMapWithCallback(SimpleSDKEvent.AD_TYPE_INTERSTITIAL, placementId, JSON.parse(callbackInfo)));
            SimpleUtils.log("onInterstitialAdClick(" + placementId + ", " + callbackInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            if (ad.interListener != null) {
                ad.interListener.onInterstitialAdClick(this.adEntry, callbackInfoJson)
            }
        }
    };


    bannerId: string = null;
    bannerLoadingStatus = SimpleAd.STATUS_INIT;
    bannerWidth: number = -1;
    bannerHeight: number = -1;
    bannerHasShow = false;
    bannerListener: SDK.SimpleBannerListener = null;
    atBannerListener = {
        onBannerAdLoaded: function (placementId: string) {
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.bannerLoad();
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_LOAD, SimpleSDKEvent.buildAdLoad(SimpleSDKEvent.AD_TYPE_BANNER, placementId));
            SimpleUtils.log("onBannerAdLoaded(" + placementId + ")");
        },

        onBannerAdLoadFail: function (placementId: string, errorInfo: string) {
            let ad: SimpleAd = SimpleSDK.ad_instance();
            ad.bannerLoadFail();
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_LOAD_FAIL, SimpleSDKEvent.buildAdLoadFail(SimpleSDKEvent.AD_TYPE_BANNER, placementId, errorInfo));

            SimpleUtils.log("onBannerAdLoadFail(" + placementId + ", " + errorInfo + ")");
        },

        onBannerAdShow: function (placementId: string, callbackInfo: string) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_SHOW, SimpleSDKEvent.buildMapWithCallback(SimpleSDKEvent.AD_TYPE_BANNER, placementId, callbackInfoJson));
            SimpleUtils.log("onBannerAdShow(" + placementId + ", " + callbackInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            if (ad.bannerListener != null) {
                ad.bannerListener.onBannerAdShow(placementId, callbackInfoJson)
            }
        },

        onBannerAdClick: function (placementId: string, callbackInfo: string) {
            let callbackInfoJson = JSON.parse(callbackInfo);
            let ana: SimpleAnalytics = SimpleSDK.analytics_instance();
            ana.sendLog(SimpleSDKEvent.AD_CLICK, SimpleSDKEvent.buildMapWithCallback(SimpleSDKEvent.AD_TYPE_BANNER, placementId, callbackInfoJson));
            SimpleUtils.log("onBannerAdClick(" + placementId + ", " + callbackInfo + ")");
            let ad: SimpleAd = SimpleSDK.ad_instance();
            if (ad.bannerListener != null) {
                ad.bannerListener.onBannerAdClick(placementId, callbackInfoJson)
            }
        },

        onBannerAdAutoRefresh: function (placementId, callbackInfo) {
            SimpleUtils.log("onBannerAdAutoRefresh(" + placementId + ", " + callbackInfo + ")");
        },

        onBannerAdAutoRefreshFail: function (placementId, errorInfo) {
            SimpleUtils.log("onBannerAdAutoRefreshFail(" + placementId + ", " + errorInfo + ")");
        },

        onBannerAdCloseButtonTapped: function (placementId, callbackInfo) {
            SimpleUtils.log("onBannerAdCloseButtonTapped(" + placementId + ", " + callbackInfo + ")");
        }
    };

    init(config: SDK.SimpleConfig) {
        this.ATJSSDK = window.ATJSSDK;
        this.ATRewardedVideoJSSDK = window.ATRewardedVideoJSSDK;
        this.ATInterstitialJSSDK = window.ATInterstitialJSSDK;
        this.ATBannerJSSDK = window.ATBannerJSSDK;
        if (SimpleUtils.isEditor()) {
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

            SimpleUtils.log("start anythink sdk with " + config.toponAppid);
            this.ATJSSDK.setGDPRLevel(this.ATJSSDK.PERSONALIZED);
            this.ATJSSDK.initSDK(config.toponAppid, config.toponKey);
            this.tryLoadAll();
            this.hasInit = true;
        }
    }

    public update(dt: number) {
        if (this.hasInit) {
            let now = SimpleUtils.getTimestamp();
            if (this.lastTryLoadAllTs + SimpleAd.TRT_LOAD_ALL_INTERVAL < now) {
                this.tryLoadAll();
            }
        }
    }

    public tryLoadAll() {
        SimpleUtils.log("try to load all ad");
        let now = SimpleUtils.getTimestamp();
        this.lastTryLoadAllTs = now;
        if (!this.hasReward()) {
            this.tryLoadReward();
        }
        else {
            SimpleUtils.log("skip load reward because reward has ad");
        }
        if (!this.hasInter()) {
            this.tryLoadInter();
        }
        else {
            SimpleUtils.log("skip load inter because inter has ad");
        }
        if (!this.hasBanner()) {
            this.tryLoadBanner();
        }
        else {
            SimpleUtils.log("skip load inter because banner has ad");
        }
    }

    //load reward
    private tryLoadReward() {
        if (SimpleSDK.instance().isNetworkOk()) {
            if (this.rewardId != null && this.rewardId.length > 0) {
                if (this.rewardLoadingStatus == SimpleAd.STATUS_LOADING) {
                    SimpleUtils.log("reward is loading and skip");
                }
                else {
                    SimpleUtils.log("try to load reward");
                    this.rewardLoadingStatus = SimpleAd.STATUS_LOADING;
                    this.loadReward();
                }
            }
            else {
                SimpleUtils.log("reward id is null and skip");
            }
        }
    }

    private loadReward() {
        this.ATRewardedVideoJSSDK.loadRewardedVideo(this.rewardId, {});
    }

    setRewardListener(rewardListener: SDK.SimpleRewardListener) {
        this.rewardListener = rewardListener;
    }

    hasReward() {
        if (this.rewardId != null && this.rewardId.length > 0) {
            return this.ATRewardedVideoJSSDK.hasAdReady(this.rewardId);
        }
        else return false;
    }

    showReward(adEntry: string) {
        this.atRewardedVideoListener.setEntry(adEntry);
        this.ATRewardedVideoJSSDK.showAd(this.rewardId);
    }

    rewardLoad() {
        this.rewardLoadingStatus = SimpleAd.STATUS_SUCCESS;
    }

    rewardLoadFail() {
        this.rewardLoadingStatus = SimpleAd.STATUS_FAILED;
    }

    rewardClose() {
        this.loadReward();
    }

    //inter
    private tryLoadInter() {
        if (SimpleSDK.instance().isNetworkOk()) {
            if (this.interId != null && this.interId.length > 0) {
                if (this.interLoadingStatus == SimpleAd.STATUS_LOADING) {
                    SimpleUtils.log("inter is loading and skip");
                }
                else {
                    SimpleUtils.log("try to load inter");
                    this.interLoadingStatus = SimpleAd.STATUS_LOADING;
                    this.loadInter();
                }
            }
            else {
                SimpleUtils.log("inter id is null and skip");
            }
        }
    }


    private loadInter() {
        this.ATInterstitialJSSDK.loadInterstitial(this.interId);
    }

    setInterListener(interListener: SDK.SimpleInterListener) {
        this.interListener = interListener;
    }

    hasInter() {
        if (this.interId != null && this.interId.length > 0) {
            return this.ATInterstitialJSSDK.hasAdReady(this.interId);
        }
        else return false;
    }

    showInter(adEntry: string) {
        this.atInterstitialListener.setEntry(adEntry);
        this.ATInterstitialJSSDK.showAd(this.interId);
        this.tryLoadInter();
    }

    interLoad() {
        this.interLoadingStatus = SimpleAd.STATUS_SUCCESS;
    }

    interLoadFail() {
        this.interLoadingStatus = SimpleAd.STATUS_FAILED;
    }
    interClose() {
        this.loadInter();
    }

    //banner
    private tryLoadBanner() {
        if (SimpleSDK.instance().isNetworkOk()) {
            if (this.bannerId != null && this.bannerId.length > 0) {
                if (this.bannerLoadingStatus == SimpleAd.STATUS_LOADING) {
                    SimpleUtils.log("banner is loading and skip");
                }
                else {
                    SimpleUtils.log("try to load banner");
                    this.bannerLoadingStatus = SimpleAd.STATUS_LOADING;
                    this.loadBanner();
                }
            }
            else {
                SimpleUtils.log("banner id is null and skip");
            }
        }
    }
    private loadBanner() {
        this.ATBannerJSSDK.loadBanner(this.bannerId, this.ATBannerJSSDK.createLoadAdSize(this.bannerWidth, this.bannerHeight));
    }
    hasBanner() {
        if (this.bannerId != null && this.bannerId.length > 0) {
            return this.ATBannerJSSDK.hasAdReady(this.bannerId);
        }
        else return false;
    }

    setBannerListener(bannerListener: SDK.SimpleBannerListener) {
        this.bannerListener = bannerListener;
    }

    showOrReShowBanner(pos) {
        if (this.bannerHasShow) {
            //直接reshow
            this.ATBannerJSSDK.reShowAd(this.bannerId);
        }
        else {
            if (this.ATBannerJSSDK.hasAdReady(this.bannerId)) {
                this.bannerHasShow = true;
                let p = "";
                if (pos == SimpleAd.BANNER_TOP) {
                    p = this.ATBannerJSSDK.kATBannerAdShowingPisitionTop;
                }
                else {
                    p = this.ATBannerJSSDK.kATBannerAdShowingPisitionBottom;
                }
                this.ATBannerJSSDK.showAdInPosistion(this.bannerId, p);
            }
        }
    }

    hideBanner() {
        this.ATBannerJSSDK.hideAd(this.bannerId);
    }

    removeBanner() {
        this.ATBannerJSSDK.rewoveAd(this.bannerId);
        this.bannerHasShow = false;
        this.tryLoadBanner();
    }

    bannerLoad() {
        this.bannerLoadingStatus = SimpleAd.STATUS_SUCCESS;
    }

    bannerLoadFail() {
        this.bannerLoadingStatus = SimpleAd.STATUS_FAILED;
    }
    getAdStatus(): {} {
        let m = {
            "reward": this.rewardLoadingStatus,
            "inter": this.interLoadingStatus,
            "banner": this.bannerLoadingStatus
        }
        return m;
    }
}
