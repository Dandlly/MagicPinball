"use strict";
cc._RF.push(module, 'bc30ap3dBNIoIY3CJlsLa9a', 'ATInterstitialJSSDK');
// SDK/script/AnyThinkAds/ATInterstitialJSSDK.js

"use strict";

var ATiOSInterstitialJS = require("./iOS/ATiOSInterstitialJS");

var ATAndroidInterstitialJS = require("./Android/ATAndroidInterstitialJS");

var initPlatformBridge = function initPlatformBridge() {
  if (cc.sys.os === cc.sys.OS_IOS) {
    return ATiOSInterstitialJS;
  } else if (cc.sys.os === cc.sys.OS_ANDROID) {
    return ATAndroidInterstitialJS;
  }
};

var platformBridge = initPlatformBridge();
var ATInterstitialSDK = ATInterstitialSDK || {
  ATInterstitialListener: {
    developerCallback: null,
    onInterstitialAdLoaded: function onInterstitialAdLoaded(placementId) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdLoaded != null && undefined != this.developerCallback.onInterstitialAdLoaded) {
        this.developerCallback.onInterstitialAdLoaded(placementId);
      }
    },
    onInterstitialAdLoadFail: function onInterstitialAdLoadFail(placementId, errorInfo) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdLoadFail != null && undefined != this.developerCallback.onInterstitialAdLoadFail) {
        this.developerCallback.onInterstitialAdLoadFail(placementId, errorInfo);
      }
    },
    onInterstitialAdShow: function onInterstitialAdShow(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdShow != null && undefined != this.developerCallback.onInterstitialAdShow) {
        this.developerCallback.onInterstitialAdShow(placementId, callbackInfo);
      }
    },
    onInterstitialAdStartPlayingVideo: function onInterstitialAdStartPlayingVideo(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdStartPlayingVideo != null && undefined != this.developerCallback.onInterstitialAdStartPlayingVideo) {
        this.developerCallback.onInterstitialAdStartPlayingVideo(placementId, callbackInfo);
      }
    },
    onInterstitialAdEndPlayingVideo: function onInterstitialAdEndPlayingVideo(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdEndPlayingVideo != null && undefined != this.developerCallback.onInterstitialAdEndPlayingVideo) {
        this.developerCallback.onInterstitialAdEndPlayingVideo(placementId, callbackInfo);
      }
    },
    onInterstitialAdFailedToPlayVideo: function onInterstitialAdFailedToPlayVideo(placementId, errorInfo) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdFailedToPlayVideo != null && undefined != this.developerCallback.onInterstitialAdFailedToPlayVideo) {
        this.developerCallback.onInterstitialAdFailedToPlayVideo(placementId, errorInfo);
      }
    },
    onInterstitialAdFailedToShow: function onInterstitialAdFailedToShow(placementId) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdFailedToShow != null && undefined != this.developerCallback.onInterstitialAdFailedToShow) {
        this.developerCallback.onInterstitialAdFailedToShow(placementId);
      }
    },
    onInterstitialAdClose: function onInterstitialAdClose(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdClose != null && undefined != this.developerCallback.onInterstitialAdClose) {
        this.developerCallback.onInterstitialAdClose(placementId, callbackInfo);
      }
    },
    onInterstitialAdClick: function onInterstitialAdClick(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onInterstitialAdClick != null && undefined != this.developerCallback.onInterstitialAdClick) {
        this.developerCallback.onInterstitialAdClick(placementId, callbackInfo);
      }
    }
  },
  loadInterstitial: function loadInterstitial(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.loadInterstitial(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  setAdListener: function setAdListener(listener) {
    var eventJSON = {};
    eventJSON[LoadedCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoaded", eventJSON[LoadFailCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", eventJSON[PlayStartCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", eventJSON[PlayEndCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", eventJSON[PlayFailCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", eventJSON[CloseCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClose", eventJSON[ClickCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClick", eventJSON[ShowCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdShow", eventJSON[ShowFailCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToShow";

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.setAdListener(JSON.stringify(eventJSON));
    } else {
      cc.log("You must run on Android or iOS.");
    }

    this.ATInterstitialListener.developerCallback = listener;
  },
  hasAdReady: function hasAdReady(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      return platformBridge.hasAdReady(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }

    return false;
  },
  showAd: function showAd(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.showAd(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  showAdInScenario: function showAdInScenario(placementId) {
    var scenario = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.showAdInScenario(placementId, scenario);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  }
};
var LoadedCallbackKey = "InterstitialLoaded";
var LoadFailCallbackKey = "InterstitialLoadFail";
var PlayStartCallbackKey = "InterstitialPlayStart";
var PlayEndCallbackKey = "InterstitialPlayEnd";
var PlayFailCallbackKey = "InterstitialPlayFail";
var CloseCallbackKey = "InterstitialClose";
var ClickCallbackKey = "InterstitialClick";
var ShowCallbackKey = "InterstitialAdShow";
var ShowFailCallbackKey = "InterstitialAdShowFail";
window.ATInterstitialJSSDK = ATInterstitialSDK;

cc._RF.pop();