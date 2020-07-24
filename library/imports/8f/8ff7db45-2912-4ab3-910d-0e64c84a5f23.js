"use strict";
cc._RF.push(module, '8ff7dtFKRJKs5ENDmTISl8j', 'ATRewardedVideoJSSDK');
// SDK/script/AnyThinkAds/ATRewardedVideoJSSDK.js

"use strict";

var ATAndroidRewardedVideoJS = require("./Android/ATAndroidRewardedVideoJS");

var ATiOSRewardedVideoJS = require("./iOS/ATiOSRewardedVideoJS"); // require("./AnyThinkAds/ATJSSDK");


var initPlatformBridge = function initPlatformBridge() {
  if (cc.sys.os === cc.sys.OS_IOS) {
    return ATiOSRewardedVideoJS;
  } else if (cc.sys.os === cc.sys.OS_ANDROID) {
    return ATAndroidRewardedVideoJS;
  }
};

var platformBridge = initPlatformBridge();
var ATRewardedVideoSDK = ATRewardedVideoSDK || {
  userIdKey: "userID",
  userDataKey: "media_ext",
  ATRewardedVideoListener: {
    developerCallback: null,
    onRewardedVideoAdLoaded: function onRewardedVideoAdLoaded(placementId) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + placementId + ")");
      if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdLoaded != null && undefined != this.developerCallback.onRewardedVideoAdLoaded) {
        this.developerCallback.onRewardedVideoAdLoaded(placementId);
      }
    },
    onRewardedVideoAdFailed: function onRewardedVideoAdFailed(placementId, errorInfo) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
      if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdFailed != null && undefined != this.developerCallback.onRewardedVideoAdFailed) {
        this.developerCallback.onRewardedVideoAdFailed(placementId, errorInfo);
      }
    },
    onRewardedVideoAdPlayStart: function onRewardedVideoAdPlayStart(placementId, callbackInfo) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
      if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayStart != null && undefined != this.developerCallback.onRewardedVideoAdPlayStart) {
        this.developerCallback.onRewardedVideoAdPlayStart(placementId, callbackInfo);
      }
    },
    onRewardedVideoAdPlayEnd: function onRewardedVideoAdPlayEnd(placementId, callbackInfo) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
      if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayEnd != null && undefined != this.developerCallback.onRewardedVideoAdPlayEnd) {
        this.developerCallback.onRewardedVideoAdPlayEnd(placementId, callbackInfo);
      }
    },
    onRewardedVideoAdPlayFailed: function onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + placementId + ", " + callbackInfo + ")");
      if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayFailed != null && undefined != this.developerCallback.onRewardedVideoAdPlayFailed) {
        this.developerCallback.onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo);
      }
    },
    onRewardedVideoAdClosed: function onRewardedVideoAdClosed(placementId, callbackInfo) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
      if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdClosed != null && undefined != this.developerCallback.onRewardedVideoAdClosed) {
        this.developerCallback.onRewardedVideoAdClosed(placementId, callbackInfo);
      }
    },
    onRewardedVideoAdPlayClicked: function onRewardedVideoAdPlayClicked(placementId, callbackInfo) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
      if (this.developerCallback != null && this.developerCallback.onRewardedVideoAdPlayClicked != null && undefined != this.developerCallback.onRewardedVideoAdPlayClicked) {
        this.developerCallback.onRewardedVideoAdPlayClicked(placementId, callbackInfo);
      }
    },
    onReward: function onReward(placementId, callbackInfo) {
      // ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward(" + placementId + ", " + callbackInfo + ")");
      if (this.developerCallback != null && this.developerCallback.onReward != null && undefined != this.developerCallback.onReward) {
        this.developerCallback.onReward(placementId, callbackInfo);
      }
    }
  },
  loadRewardedVideo: function loadRewardedVideo(placementId) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.loadRewardedVideo(placementId, JSON.stringify(settings));
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  setAdListener: function setAdListener(listener) {
    var eventJSON = {};
    eventJSON[LoadedCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", eventJSON[LoadFailCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", eventJSON[PlayStartCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", eventJSON[PlayEndCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", eventJSON[PlayFailCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", eventJSON[CloseCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", eventJSON[ClickCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", eventJSON[RewardCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward";

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.setAdListener(JSON.stringify(eventJSON));
    } else {
      cc.log("You must run on Android or iOS.");
    }

    this.ATRewardedVideoListener.developerCallback = listener;
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
var LoadedCallbackKey = "RewardedVideoLoaded";
var LoadFailCallbackKey = "RewardedVideoLoadFail";
var PlayStartCallbackKey = "RewardedVideoPlayStart";
var PlayEndCallbackKey = "RewardedVideoPlayEnd";
var PlayFailCallbackKey = "RewardedVideoPlayFail";
var CloseCallbackKey = "RewardedVideoClose";
var ClickCallbackKey = "RewardedVideoClick";
var RewardCallbackKey = "RewardedVideoReward";
window.ATRewardedVideoJSSDK = ATRewardedVideoSDK;

cc._RF.pop();