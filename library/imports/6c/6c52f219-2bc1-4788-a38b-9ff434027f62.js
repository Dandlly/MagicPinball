"use strict";
cc._RF.push(module, '6c52fIZK8FHiKOLn/Q0An9i', 'ATNativeJSSDK');
// SDK/script/AnyThinkAds/ATNativeJSSDK.js

"use strict";

var ATAndroidNativeJS = require("./Android/ATAndroidNativeJS");

var ATiOSNativeJS = require("./iOS/ATiOSNativeJS");

var initPlatformBridge = function initPlatformBridge() {
  if (cc.sys.os === cc.sys.OS_IOS) {
    return ATiOSNativeJS;
  } else if (cc.sys.os === cc.sys.OS_ANDROID) {
    return ATAndroidNativeJS;
  }
};

var platformBridge = initPlatformBridge();
var ATNativeSDK = ATNativeSDK || {
  ATNativeListener: {
    developerCallback: null,
    onNativeAdLoaded: function onNativeAdLoaded(placementId) {
      if (this.developerCallback != null && this.developerCallback.onNativeAdLoaded != null && undefined != this.developerCallback.onNativeAdLoaded) {
        this.developerCallback.onNativeAdLoaded(placementId);
      }
    },
    onNativeAdLoadFail: function onNativeAdLoadFail(placementId, errorInfo) {
      if (this.developerCallback != null && this.developerCallback.onNativeAdLoadFail != null && undefined != this.developerCallback.onNativeAdLoadFail) {
        this.developerCallback.onNativeAdLoadFail(placementId, errorInfo);
      }
    },
    onNativeAdShow: function onNativeAdShow(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onNativeAdShow != null && undefined != this.developerCallback.onNativeAdShow) {
        this.developerCallback.onNativeAdShow(placementId, callbackInfo);
      }
    },
    onNativeAdClick: function onNativeAdClick(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onNativeAdClick != null && undefined != this.developerCallback.onNativeAdClick) {
        this.developerCallback.onNativeAdClick(placementId, callbackInfo);
      }
    },
    onNativeAdVideoStart: function onNativeAdVideoStart(placementId) {
      if (this.developerCallback != null && this.developerCallback.onNativeAdVideoStart != null && undefined != this.developerCallback.onNativeAdVideoStart) {
        this.developerCallback.onNativeAdVideoStart(placementId);
      }
    },
    onNativeAdVideoEnd: function onNativeAdVideoEnd(placementId) {
      if (this.developerCallback != null && this.developerCallback.onNativeAdVideoEnd != null && undefined != this.developerCallback.onNativeAdVideoEnd) {
        this.developerCallback.onNativeAdVideoEnd(placementId);
      }
    },
    onNativeAdCloseButtonTapped: function onNativeAdCloseButtonTapped(placementId, callbackInfo) {
      if (this.developerCallback != null && this.developerCallback.onNativeAdCloseButtonTapped != null && undefined != this.developerCallback.onNativeAdCloseButtonTapped) {
        this.developerCallback.onNativeAdCloseButtonTapped(placementId, callbackInfo);
      }
    }
  },
  loadNative: function loadNative(placementId) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.loadNative(placementId, JSON.stringify(settings));
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  setAdListener: function setAdListener(listener) {
    var eventJSON = {};
    eventJSON[LoadedCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoaded", eventJSON[LoadFailCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoadFail", eventJSON[CloseCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdCloseButtonTapped", eventJSON[ClickCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdClick", eventJSON[ShowCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdShow", eventJSON[VideoStartKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoStart", eventJSON[VideoEndKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoEnd";

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.setAdListener(JSON.stringify(eventJSON));
    } else {
      cc.log("You must run on Android or iOS.");
    }

    this.ATNativeListener.developerCallback = listener;
  },
  hasAdReady: function hasAdReady(placementId) {
    if (undefined != platformBridge && platformBridge != null) {
      return platformBridge.hasAdReady(placementId);
    } else {
      cc.log("You must run on Android or iOS.");
    }

    return false;
  },
  showAd: function showAd(placementId, adViewProperty) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.showAd(placementId, JSON.stringify(adViewProperty.getAdViewProperty()));
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
  createLoadAdSize: function createLoadAdSize(width, height) {
    var loadAdSize = {};
    loadAdSize["width"] = width;
    loadAdSize["height"] = height;
    return loadAdSize;
  },
  AdViewProperty: cc.Class({
    parent: null,
    appIcon: null,
    mainImage: null,
    title: null,
    desc: null,
    adLogo: null,
    cta: null,
    rating: null,
    createItemViewProperty: function createItemViewProperty(x, y, width, height, backgroundColor, textColor, textSize) {
      var itemProperty = {};
      itemProperty["x"] = x;
      itemProperty["y"] = y;
      itemProperty["width"] = width;
      itemProperty["height"] = height;
      itemProperty["backgroundColor"] = backgroundColor;
      itemProperty["textColor"] = textColor;
      itemProperty["textSize"] = textSize;
      return itemProperty;
    },
    getAdViewProperty: function getAdViewProperty() {
      var nativeViewProperty = {};

      if (this.parent != null) {
        nativeViewProperty["parent"] = this.parent;
      }

      if (this.appIcon != null) {
        nativeViewProperty["icon"] = this.appIcon;
      }

      if (this.mainImage != null) {
        nativeViewProperty["mainImage"] = this.mainImage;
      }

      if (this.title != null) {
        nativeViewProperty["title"] = this.title;
      }

      if (this.desc != null) {
        nativeViewProperty["desc"] = this.desc;
      }

      if (this.adLogo != null) {
        nativeViewProperty["adLogo"] = this.adLogo;
      }

      if (this.cta != null) {
        nativeViewProperty["cta"] = this.cta;
      }

      if (this.rating != null) {
        nativeViewProperty["rating"] = this.rating;
      }

      return nativeViewProperty;
    }
  })
};
var LoadedCallbackKey = "NativeLoaded";
var LoadFailCallbackKey = "NativeLoadFail";
var CloseCallbackKey = "NativeCloseButtonTapped";
var ClickCallbackKey = "NativeClick";
var ShowCallbackKey = "NativeShow";
var VideoStartKey = "NativeVideoStart";
var VideoEndKey = "NativeVideoEnd";
window.ATNativeJSSDK = ATNativeSDK;

cc._RF.pop();