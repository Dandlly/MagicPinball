"use strict";
cc._RF.push(module, '27dbdAtJ+lEZ4gtD82v9sHp', 'ATBannerJSSDK');
// SDK/script/AnyThinkAds/ATBannerJSSDK.js

"use strict";

var ATAndroidBannerJS = require("./Android/ATAndroidBannerJS");

var ATiOSBannerJS = require("./iOS/ATiOSBannerJS");

var initPlatformBridge = function initPlatformBridge() {
  if (cc.sys.os === cc.sys.OS_IOS) {
    return ATiOSBannerJS;
  } else if (cc.sys.os === cc.sys.OS_ANDROID) {
    return ATAndroidBannerJS;
  }
};

var platformBridge = initPlatformBridge();
var ATBannerSDK = ATBannerSDK || {
  kATBannerAdLoadingExtraBannerAdSizeStruct: "banner_ad_size_struct",
  kATBannerAdShowingPisitionTop: "top",
  kATBannerAdShowingPisitionBottom: "bottom",
  ATBannerListener: {
    developerCallback: null,
    onBannerAdLoaded: function onBannerAdLoaded(placementId) {
      if (this.developerCallback != null && this.developerCallback.onBannerAdLoaded != null && undefined != this.developerCallback.onBannerAdLoaded) {
        this.developerCallback.onBannerAdLoaded(placementId);
      }
    },
    onBannerAdLoadFail: function onBannerAdLoadFail(placementId, errorInfo) {
      if (this.developerCallback != null && this.developerCallback.onBannerAdLoadFail != null && undefined != this.developerCallback.onBannerAdLoadFail) {
        this.developerCallback.onBannerAdLoadFail(placementId, errorInfo);
      }
    },
    onBannerAdShow: function onBannerAdShow(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onBannerAdShow != null && undefined != this.developerCallback.onBannerAdShow) {
        this.developerCallback.onBannerAdShow(placementId, callbackInfo);
      }
    },
    onBannerAdClick: function onBannerAdClick(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onBannerAdClick != null && undefined != this.developerCallback.onBannerAdClick) {
        this.developerCallback.onBannerAdClick(placementId, callbackInfo);
      }
    },
    onBannerAdAutoRefresh: function onBannerAdAutoRefresh(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onBannerAdAutoRefresh != null && undefined != this.developerCallback.onBannerAdAutoRefresh) {
        this.developerCallback.onBannerAdAutoRefresh(placementId, callbackInfo);
      }
    },
    onBannerAdAutoRefreshFail: function onBannerAdAutoRefreshFail(placementId, errorInfo) {
      if (this.developerCallback != null && this.developerCallback.onBannerAdAutoRefreshFail != null && undefined != this.developerCallback.onBannerAdAutoRefreshFail) {
        this.developerCallback.onBannerAdAutoRefreshFail(placementId, errorInfo);
      }
    },
    onBannerAdCloseButtonTapped: function onBannerAdCloseButtonTapped(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onBannerAdCloseButtonTapped != null && undefined != this.developerCallback.onBannerAdCloseButtonTapped) {
        this.developerCallback.onBannerAdCloseButtonTapped(placementId, callbackInfo);
      }
    }
  },
  loadBanner: function loadBanner(placementId) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.loadBanner(placementId, JSON.stringify(settings));
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  setAdListener: function setAdListener(listener) {
    var eventJSON = {};
    eventJSON[LoadedCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoaded", eventJSON[LoadFailCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoadFail", eventJSON[CloseCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdCloseButtonTapped", eventJSON[ClickCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdClick", eventJSON[ShowCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdShow", eventJSON[RefreshCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefresh", eventJSON[RefreshFailCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefreshFail";

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.setAdListener(JSON.stringify(eventJSON));
    } else {
      cc.log("You must run on Android or iOS.");
    }

    this.ATBannerListener.developerCallback = listener;
  },
  hasAdReady: function hasAdReady(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      return platformBridge.hasAdReady(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }

    return false;
  },
  showAdInPosistion: function showAdInPosistion(placementId, position) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.showAdInPosistion(placementId, position);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.showAdInRectangle(placementId, JSON.stringify(showAdRect));
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  rewoveAd: function rewoveAd(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.rewoveAd(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  reShowAd: function reShowAd(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.reShowAd(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  hideAd: function hideAd(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.hideAd(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  createLoadAdSize: function createLoadAdSize(width, height) {
    var loadAdSize = {};
    loadAdSize["width"] = width;
    loadAdSize["height"] = height;
    return loadAdSize;
  },
  createShowAdRect: function createShowAdRect(x, y, width, height) {
    var adRect = {};
    adRect["x"] = x;
    adRect["y"] = y;
    adRect["width"] = width;
    adRect["height"] = height;
    return adRect;
  }
};
var LoadedCallbackKey = "BannerLoaded";
var LoadFailCallbackKey = "BannerLoadFail";
var CloseCallbackKey = "BannerCloseButtonTapped";
var ClickCallbackKey = "BannerClick";
var ShowCallbackKey = "BannerShow";
var RefreshCallbackKey = "BannerRefresh";
var RefreshFailCallbackKey = "BannerRefreshFail";
window.ATBannerJSSDK = ATBannerSDK;

cc._RF.pop();