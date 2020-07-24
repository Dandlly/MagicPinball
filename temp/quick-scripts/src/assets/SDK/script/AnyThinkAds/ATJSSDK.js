"use strict";
cc._RF.push(module, 'ac674mWNsBLUJv45yK5rg7Q', 'ATJSSDK');
// SDK/script/AnyThinkAds/ATJSSDK.js

"use strict";

var ATAndroidJS = require("./Android/ATAndroidJS");

var ATiOSJS = require("./iOS/ATiOSJS");

var isDebugLog = false;

var initPlatformBridge = function initPlatformBridge() {
  if (cc.sys.os === cc.sys.OS_IOS) {
    return ATiOSJS;
  } else if (cc.sys.os === cc.sys.OS_ANDROID) {
    return ATAndroidJS;
  }
};

var platformBridge = initPlatformBridge();
var ATSDK = ATSDK || {
  kATUserLocationUnknown: 0,
  kATUserLocationInEU: 1,
  kATUserLocationOutOfEU: 2,
  PERSONALIZED: 0,
  NONPERSONALIZED: 1,
  UNKNOWN: 2,
  ATSDKListener: {
    userLocationCallback: null,
    getUserLocationCallback: function getUserLocationCallback(userLocation) {
      if (undefined != this.userLocationCallback && this.userLocationCallback != null) {
        this.userLocationCallback(userLocation);
      }
    }
  },
  initSDK: function initSDK(appId, appKey) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.initSDK(appId, appKey);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  initCustomMap: function initCustomMap(customMap) {
    if (undefined != platformBridge && platformBridge != null) {
      if (undefined != customMap && customMap != null) {
        platformBridge.initCustomMap(JSON.stringify(customMap));
      }
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
    if (undefined != platformBridge && platformBridge != null) {
      if (undefined != customMap && customMap != null) {
        platformBridge.setPlacementCustomMap(placmentId, JSON.stringify(customMap));
      }
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  setGDPRLevel: function setGDPRLevel(level) {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.setGDPRLevel(level);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  getGDPRLevel: function getGDPRLevel() {
    if (undefined != platformBridge && platformBridge != null) {
      return platformBridge.getGDPRLevel();
    } else {
      cc.log("You must run on Android or iOS.");
    }

    return this.UNKNOWN;
  },
  getUserLocation: function getUserLocation(userLocationCallback) {
    this.ATSDKListener.userLocationCallback = userLocationCallback;

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.getUserLocation(GetUserLocationJsCallback);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  showGDPRAuth: function showGDPRAuth() {
    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.showGDPRAuth();
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  setLogDebug: function setLogDebug(debug) {
    isDebugLog = debug;

    if (undefined != platformBridge && platformBridge != null) {
      platformBridge.setLogDebug(debug);
    } else {
      cc.log("You must run on Android or iOS.");
    }
  },
  printLog: function printLog(msg) {
    if (undefined != msg && null != msg && isDebugLog && platformBridge != null) {
      if (undefined != platformBridge && platformBridge != null) {
        platformBridge.printJsLog(msg);
      } else {
        cc.log("You must run on Android or iOS.");
      }
    }
  }
};
var GetUserLocationJsCallback = "ATJSSDK.ATSDKListener.getUserLocationCallback";
window.ATJSSDK = ATSDK;

cc._RF.pop();