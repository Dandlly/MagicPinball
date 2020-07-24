
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/ATJSSDK.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxBVEpTU0RLLmpzIl0sIm5hbWVzIjpbIkFUQW5kcm9pZEpTIiwicmVxdWlyZSIsIkFUaU9TSlMiLCJpc0RlYnVnTG9nIiwiaW5pdFBsYXRmb3JtQnJpZGdlIiwiY2MiLCJzeXMiLCJvcyIsIk9TX0lPUyIsIk9TX0FORFJPSUQiLCJwbGF0Zm9ybUJyaWRnZSIsIkFUU0RLIiwia0FUVXNlckxvY2F0aW9uVW5rbm93biIsImtBVFVzZXJMb2NhdGlvbkluRVUiLCJrQVRVc2VyTG9jYXRpb25PdXRPZkVVIiwiUEVSU09OQUxJWkVEIiwiTk9OUEVSU09OQUxJWkVEIiwiVU5LTk9XTiIsIkFUU0RLTGlzdGVuZXIiLCJ1c2VyTG9jYXRpb25DYWxsYmFjayIsImdldFVzZXJMb2NhdGlvbkNhbGxiYWNrIiwidXNlckxvY2F0aW9uIiwidW5kZWZpbmVkIiwiaW5pdFNESyIsImFwcElkIiwiYXBwS2V5IiwibG9nIiwiaW5pdEN1c3RvbU1hcCIsImN1c3RvbU1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRQbGFjZW1lbnRDdXN0b21NYXAiLCJwbGFjbWVudElkIiwic2V0R0RQUkxldmVsIiwibGV2ZWwiLCJnZXRHRFBSTGV2ZWwiLCJnZXRVc2VyTG9jYXRpb24iLCJHZXRVc2VyTG9jYXRpb25Kc0NhbGxiYWNrIiwic2hvd0dEUFJBdXRoIiwic2V0TG9nRGVidWciLCJkZWJ1ZyIsInByaW50TG9nIiwibXNnIiwicHJpbnRKc0xvZyIsIndpbmRvdyIsIkFUSlNTREsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsdUJBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUFyQjs7QUFDQSxJQUFJRSxVQUFVLEdBQUcsS0FBakI7O0FBRUEsSUFBSUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFXO0FBQ2hD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RUFBRyxrQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLFFBQUlwQixTQUFTLElBQUlvQixHQUFiLElBQW9CLFFBQVFBLEdBQTVCLElBQW1DdkMsVUFBbkMsSUFBaURPLGNBQWMsSUFBSSxJQUF2RSxFQUE4RTtBQUMxRSxVQUFJWSxTQUFTLElBQUlaLGNBQWIsSUFBK0JBLGNBQWMsSUFBSSxJQUFyRCxFQUEyRDtBQUN2REEsUUFBQUEsY0FBYyxDQUFDaUMsVUFBZixDQUEwQkQsR0FBMUI7QUFDSCxPQUZELE1BRU87QUFDSHJDLFFBQUFBLEVBQUUsQ0FBQ3FCLEdBQUgsQ0FBTyxpQ0FBUDtBQUNIO0FBRUo7QUFDSjtBQXRHZ0IsQ0FBckI7QUEwR0EsSUFBTVcseUJBQXlCLEdBQUcsK0NBQWxDO0FBRUFPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxDLEtBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEFUQW5kcm9pZEpTID0gcmVxdWlyZShcIi4vQW5kcm9pZC9BVEFuZHJvaWRKU1wiKTtcclxudmFyIEFUaU9TSlMgPSByZXF1aXJlKFwiLi9pT1MvQVRpT1NKU1wiKTtcclxudmFyIGlzRGVidWdMb2cgPSBmYWxzZTtcclxuXHJcbnZhciBpbml0UGxhdGZvcm1CcmlkZ2UgPSBmdW5jdGlvbigpIHsgIFxyXG4gICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykgeyAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIEFUaU9TSlM7XHJcbiAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICByZXR1cm4gQVRBbmRyb2lkSlM7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcGxhdGZvcm1CcmlkZ2UgPSBpbml0UGxhdGZvcm1CcmlkZ2UoKTtcclxuXHJcblxyXG52YXIgQVRTREsgPSBBVFNESyB8fCB7XHJcblxyXG4gICAga0FUVXNlckxvY2F0aW9uVW5rbm93biA6IDAsXHJcbiAgICBrQVRVc2VyTG9jYXRpb25JbkVVIDogMSxcclxuICAgIGtBVFVzZXJMb2NhdGlvbk91dE9mRVUgOiAyLFxyXG5cclxuXHJcbiAgICBQRVJTT05BTElaRUQgOiAwLFxyXG4gICAgTk9OUEVSU09OQUxJWkVEIDoxLFxyXG4gICAgVU5LTk9XTiA6IDIsXHJcblxyXG4gICAgQVRTREtMaXN0ZW5lciA6IHtcclxuICAgICAgICB1c2VyTG9jYXRpb25DYWxsYmFjayA6IG51bGwsXHJcblxyXG4gICAgICAgIGdldFVzZXJMb2NhdGlvbkNhbGxiYWNrIDogZnVuY3Rpb24odXNlckxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKHVuZGVmaW5lZCAhPSB0aGlzLnVzZXJMb2NhdGlvbkNhbGxiYWNrICYmIHRoaXMudXNlckxvY2F0aW9uQ2FsbGJhY2sgIT0gbnVsbCApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTG9jYXRpb25DYWxsYmFjayh1c2VyTG9jYXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgaW5pdFNESyA6IGZ1bmN0aW9uKGFwcElkLCBhcHBLZXkpIHtcclxuXHJcbiAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSBwbGF0Zm9ybUJyaWRnZSAmJiBwbGF0Zm9ybUJyaWRnZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtQnJpZGdlLmluaXRTREsoYXBwSWQsIGFwcEtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiWW91IG11c3QgcnVuIG9uIEFuZHJvaWQgb3IgaU9TLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRDdXN0b21NYXAgOiBmdW5jdGlvbihjdXN0b21NYXApIHtcclxuICAgICAgICBpZiAodW5kZWZpbmVkICE9IHBsYXRmb3JtQnJpZGdlICYmIHBsYXRmb3JtQnJpZGdlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYodW5kZWZpbmVkICE9IGN1c3RvbU1hcCAmJiBjdXN0b21NYXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm1CcmlkZ2UuaW5pdEN1c3RvbU1hcChKU09OLnN0cmluZ2lmeShjdXN0b21NYXApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIllvdSBtdXN0IHJ1biBvbiBBbmRyb2lkIG9yIGlPUy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQbGFjZW1lbnRDdXN0b21NYXAgOiBmdW5jdGlvbihwbGFjbWVudElkLCBjdXN0b21NYXApIHtcclxuICAgICAgICBpZiAodW5kZWZpbmVkICE9IHBsYXRmb3JtQnJpZGdlICYmIHBsYXRmb3JtQnJpZGdlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYodW5kZWZpbmVkICE9IGN1c3RvbU1hcCAmJiBjdXN0b21NYXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgIHBsYXRmb3JtQnJpZGdlLnNldFBsYWNlbWVudEN1c3RvbU1hcChwbGFjbWVudElkLCBKU09OLnN0cmluZ2lmeShjdXN0b21NYXApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIllvdSBtdXN0IHJ1biBvbiBBbmRyb2lkIG9yIGlPUy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXRHRFBSTGV2ZWwgOiBmdW5jdGlvbihsZXZlbCkge1xyXG4gICAgICAgIGlmICh1bmRlZmluZWQgIT0gcGxhdGZvcm1CcmlkZ2UgJiYgcGxhdGZvcm1CcmlkZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwbGF0Zm9ybUJyaWRnZS5zZXRHRFBSTGV2ZWwobGV2ZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIllvdSBtdXN0IHJ1biBvbiBBbmRyb2lkIG9yIGlPUy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRHRFBSTGV2ZWwgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodW5kZWZpbmVkICE9IHBsYXRmb3JtQnJpZGdlICYmIHBsYXRmb3JtQnJpZGdlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXRmb3JtQnJpZGdlLmdldEdEUFJMZXZlbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIllvdSBtdXN0IHJ1biBvbiBBbmRyb2lkIG9yIGlPUy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLlVOS05PV047XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXJMb2NhdGlvbiA6IGZ1bmN0aW9uKHVzZXJMb2NhdGlvbkNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5BVFNES0xpc3RlbmVyLnVzZXJMb2NhdGlvbkNhbGxiYWNrID0gdXNlckxvY2F0aW9uQ2FsbGJhY2s7XHJcbiAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSBwbGF0Zm9ybUJyaWRnZSAmJiBwbGF0Zm9ybUJyaWRnZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtQnJpZGdlLmdldFVzZXJMb2NhdGlvbihHZXRVc2VyTG9jYXRpb25Kc0NhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJZb3UgbXVzdCBydW4gb24gQW5kcm9pZCBvciBpT1MuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0dEUFJBdXRoIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh1bmRlZmluZWQgIT0gcGxhdGZvcm1CcmlkZ2UgJiYgcGxhdGZvcm1CcmlkZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwbGF0Zm9ybUJyaWRnZS5zaG93R0RQUkF1dGgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJZb3UgbXVzdCBydW4gb24gQW5kcm9pZCBvciBpT1MuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0TG9nRGVidWcgOiBmdW5jdGlvbiAoZGVidWcpIHtcclxuICAgICAgICBpc0RlYnVnTG9nID0gZGVidWc7XHJcbiAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSBwbGF0Zm9ybUJyaWRnZSAmJiBwbGF0Zm9ybUJyaWRnZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtQnJpZGdlLnNldExvZ0RlYnVnKGRlYnVnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJZb3UgbXVzdCBydW4gb24gQW5kcm9pZCBvciBpT1MuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcHJpbnRMb2cgOiBmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICBpZiAodW5kZWZpbmVkICE9IG1zZyAmJiBudWxsICE9IG1zZyAmJiBpc0RlYnVnTG9nICYmIHBsYXRmb3JtQnJpZGdlICE9IG51bGwgKSB7XHJcbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT0gcGxhdGZvcm1CcmlkZ2UgJiYgcGxhdGZvcm1CcmlkZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm1CcmlkZ2UucHJpbnRKc0xvZyhtc2cpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIllvdSBtdXN0IHJ1biBvbiBBbmRyb2lkIG9yIGlPUy5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxufTtcclxuXHJcbmNvbnN0IEdldFVzZXJMb2NhdGlvbkpzQ2FsbGJhY2sgPSBcIkFUSlNTREsuQVRTREtMaXN0ZW5lci5nZXRVc2VyTG9jYXRpb25DYWxsYmFja1wiO1xyXG5cclxud2luZG93LkFUSlNTREsgPSBBVFNESzsiXX0=