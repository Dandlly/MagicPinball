
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/ATNativeJSSDK.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxBVE5hdGl2ZUpTU0RLLmpzIl0sIm5hbWVzIjpbIkFUQW5kcm9pZE5hdGl2ZUpTIiwicmVxdWlyZSIsIkFUaU9TTmF0aXZlSlMiLCJpbml0UGxhdGZvcm1CcmlkZ2UiLCJjYyIsInN5cyIsIm9zIiwiT1NfSU9TIiwiT1NfQU5EUk9JRCIsInBsYXRmb3JtQnJpZGdlIiwiQVROYXRpdmVTREsiLCJBVE5hdGl2ZUxpc3RlbmVyIiwiZGV2ZWxvcGVyQ2FsbGJhY2siLCJvbk5hdGl2ZUFkTG9hZGVkIiwicGxhY2VtZW50SWQiLCJ1bmRlZmluZWQiLCJvbk5hdGl2ZUFkTG9hZEZhaWwiLCJlcnJvckluZm8iLCJvbk5hdGl2ZUFkU2hvdyIsImNhbGxiYWNrSW5mbyIsIm9uTmF0aXZlQWRDbGljayIsIm9uTmF0aXZlQWRWaWRlb1N0YXJ0Iiwib25OYXRpdmVBZFZpZGVvRW5kIiwib25OYXRpdmVBZENsb3NlQnV0dG9uVGFwcGVkIiwibG9hZE5hdGl2ZSIsInNldHRpbmdzIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZyIsInNldEFkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImV2ZW50SlNPTiIsIkxvYWRlZENhbGxiYWNrS2V5IiwiTG9hZEZhaWxDYWxsYmFja0tleSIsIkNsb3NlQ2FsbGJhY2tLZXkiLCJDbGlja0NhbGxiYWNrS2V5IiwiU2hvd0NhbGxiYWNrS2V5IiwiVmlkZW9TdGFydEtleSIsIlZpZGVvRW5kS2V5IiwiaGFzQWRSZWFkeSIsInNob3dBZCIsImFkVmlld1Byb3BlcnR5IiwiZ2V0QWRWaWV3UHJvcGVydHkiLCJyZXdvdmVBZCIsImNyZWF0ZUxvYWRBZFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRBZFNpemUiLCJBZFZpZXdQcm9wZXJ0eSIsIkNsYXNzIiwicGFyZW50IiwiYXBwSWNvbiIsIm1haW5JbWFnZSIsInRpdGxlIiwiZGVzYyIsImFkTG9nbyIsImN0YSIsInJhdGluZyIsImNyZWF0ZUl0ZW1WaWV3UHJvcGVydHkiLCJ4IiwieSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsInRleHRTaXplIiwiaXRlbVByb3BlcnR5IiwibmF0aXZlVmlld1Byb3BlcnR5Iiwid2luZG93IiwiQVROYXRpdmVKU1NESyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDLDZCQUFELENBQS9COztBQUNBLElBQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDLHFCQUFELENBQTNCOztBQUNBLElBQUlFLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBVztBQUNoQyxNQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsRUFBUCxLQUFjRixFQUFFLENBQUNDLEdBQUgsQ0FBT0UsTUFBekIsRUFBaUM7QUFDN0IsV0FBT0wsYUFBUDtBQUNILEdBRkQsTUFFTyxJQUFJRSxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsRUFBUCxLQUFjRixFQUFFLENBQUNDLEdBQUgsQ0FBT0csVUFBekIsRUFBcUM7QUFDeEMsV0FBT1IsaUJBQVA7QUFDSDtBQUNKLENBTkQ7O0FBUUEsSUFBSVMsY0FBYyxHQUFHTixrQkFBa0IsRUFBdkM7QUFHQSxJQUFJTyxXQUFXLEdBQUdBLFdBQVcsSUFBSTtBQUU3QkMsRUFBQUEsZ0JBQWdCLEVBQUc7QUFDZkMsSUFBQUEsaUJBQWlCLEVBQUcsSUFETDtBQUdmQyxJQUFBQSxnQkFBZ0IsRUFBRywwQkFBVUMsV0FBVixFQUF1QjtBQUN0QyxVQUFHLEtBQUtGLGlCQUFMLElBQTBCLElBQTFCLElBQWtDLEtBQUtBLGlCQUFMLENBQXVCQyxnQkFBdkIsSUFBMkMsSUFBN0UsSUFBcUZFLFNBQVMsSUFBSSxLQUFLSCxpQkFBTCxDQUF1QkMsZ0JBQTVILEVBQThJO0FBQzFJLGFBQUtELGlCQUFMLENBQXVCQyxnQkFBdkIsQ0FBd0NDLFdBQXhDO0FBQ0g7QUFDSixLQVBjO0FBU2ZFLElBQUFBLGtCQUFrQixFQUFHLDRCQUFTRixXQUFULEVB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S0FBbkM7QUFDSDs7QUFFRCxVQUFHLEtBQUtDLElBQUwsSUFBYSxJQUFoQixFQUFxQjtBQUNqQlcsUUFBQUEsa0JBQWtCLENBQUMsTUFBRCxDQUFsQixHQUE2QixLQUFLWCxJQUFsQztBQUNIOztBQUVELFVBQUcsS0FBS0MsTUFBTCxJQUFlLElBQWxCLEVBQXVCO0FBQ25CVSxRQUFBQSxrQkFBa0IsQ0FBQyxRQUFELENBQWxCLEdBQStCLEtBQUtWLE1BQXBDO0FBQ0g7O0FBRUQsVUFBRyxLQUFLQyxHQUFMLElBQVksSUFBZixFQUFvQjtBQUNoQlMsUUFBQUEsa0JBQWtCLENBQUMsS0FBRCxDQUFsQixHQUE0QixLQUFLVCxHQUFqQztBQUNIOztBQUVELFVBQUcsS0FBS0MsTUFBTCxJQUFlLElBQWxCLEVBQXVCO0FBQ25CUSxRQUFBQSxrQkFBa0IsQ0FBQyxRQUFELENBQWxCLEdBQStCLEtBQUtSLE1BQXBDO0FBQ0g7O0FBRUQsYUFBT1Esa0JBQVA7QUFDSDtBQTVEcUIsR0FBVDtBQTdHWSxDQUFqQztBQThLQSxJQUFNakMsaUJBQWlCLEdBQUcsY0FBMUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxnQkFBNUI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyx5QkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxhQUF6QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxZQUF4QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxrQkFBdEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsZ0JBQXBCO0FBRUE0QixNQUFNLENBQUNDLGFBQVAsR0FBdUJ6RCxXQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBBVEFuZHJvaWROYXRpdmVKUyA9IHJlcXVpcmUoXCIuL0FuZHJvaWQvQVRBbmRyb2lkTmF0aXZlSlNcIik7XHJcbnZhciBBVGlPU05hdGl2ZUpTID0gcmVxdWlyZShcIi4vaU9TL0FUaU9TTmF0aXZlSlNcIik7XHJcbnZhciBpbml0UGxhdGZvcm1CcmlkZ2UgPSBmdW5jdGlvbigpIHsgIFxyXG4gICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykgeyAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIEFUaU9TTmF0aXZlSlM7XHJcbiAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICByZXR1cm4gQVRBbmRyb2lkTmF0aXZlSlM7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcGxhdGZvcm1CcmlkZ2UgPSBpbml0UGxhdGZvcm1CcmlkZ2UoKTtcclxuXHJcblxyXG52YXIgQVROYXRpdmVTREsgPSBBVE5hdGl2ZVNESyB8fCB7ICAgXHJcblxyXG4gICAgQVROYXRpdmVMaXN0ZW5lciA6IHtcclxuICAgICAgICBkZXZlbG9wZXJDYWxsYmFjayA6IG51bGwsXHJcblxyXG4gICAgICAgIG9uTmF0aXZlQWRMb2FkZWQgOiBmdW5jdGlvbiAocGxhY2VtZW50SWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5kZXZlbG9wZXJDYWxsYmFjayAhPSBudWxsICYmIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZExvYWRlZCAhPSBudWxsICYmIHVuZGVmaW5lZCAhPSB0aGlzLmRldmVsb3BlckNhbGxiYWNrLm9uTmF0aXZlQWRMb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZExvYWRlZChwbGFjZW1lbnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbk5hdGl2ZUFkTG9hZEZhaWwgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgZXJyb3JJbmZvKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmRldmVsb3BlckNhbGxiYWNrICE9IG51bGwgJiYgdGhpcy5kZXZlbG9wZXJDYWxsYmFjay5vbk5hdGl2ZUFkTG9hZEZhaWwgIT0gbnVsbCAmJiB1bmRlZmluZWQgIT0gdGhpcy5kZXZlbG9wZXJDYWxsYmFjay5vbk5hdGl2ZUFkTG9hZEZhaWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZExvYWRGYWlsKHBsYWNlbWVudElkLCBlcnJvckluZm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25OYXRpdmVBZFNob3cgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvKSB7XHJcbiAgICAgICAgICAgaWYodGhpcy5kZXZlbG9wZXJDYWxsYmFjayAhPSBudWxsICYmIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZFNob3cgIT0gbnVsbCAmJiB1bmRlZmluZWQgIT0gdGhpcy5kZXZlbG9wZXJDYWxsYmFjay5vbk5hdGl2ZUFkU2hvdykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZlbG9wZXJDYWxsYmFjay5vbk5hdGl2ZUFkU2hvdyhwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uTmF0aXZlQWRDbGljayA6IGZ1bmN0aW9uKHBsYWNlbWVudElkLCBjYWxsYmFja0luZm8pIHtcclxuICAgICAgICAgICAgaWYodGhpcy5kZXZlbG9wZXJDYWxsYmFjayAhPSBudWxsICYmIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZENsaWNrICE9IG51bGwgJiYgdW5kZWZpbmVkICE9IHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZENsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmVsb3BlckNhbGxiYWNrLm9uTmF0aXZlQWRDbGljayhwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uTmF0aXZlQWRWaWRlb1N0YXJ0IDogZnVuY3Rpb24ocGxhY2VtZW50SWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5kZXZlbG9wZXJDYWxsYmFjayAhPSBudWxsICYmIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZFZpZGVvU3RhcnQgIT0gbnVsbCAmJiB1bmRlZmluZWQgIT0gdGhpcy5kZXZlbG9wZXJDYWxsYmFjay5vbk5hdGl2ZUFkVmlkZW9TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZlbG9wZXJDYWxsYmFjay5vbk5hdGl2ZUFkVmlkZW9TdGFydChwbGFjZW1lbnRJZCwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25OYXRpdmVBZFZpZGVvRW5kIDogZnVuY3Rpb24ocGxhY2VtZW50SWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5kZXZlbG9wZXJDYWxsYmFjayAhPSBudWxsICYmIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZFZpZGVvRW5kICE9IG51bGwgJiYgdW5kZWZpbmVkICE9dGhpcy5kZXZlbG9wZXJDYWxsYmFjay5vbk5hdGl2ZUFkVmlkZW9FbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZFZpZGVvRW5kKHBsYWNlbWVudElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9uTmF0aXZlQWRDbG9zZUJ1dHRvblRhcHBlZCA6IGZ1bmN0aW9uKHBsYWNlbWVudElkLCBjYWxsYmFja0luZm8pIHtcclxuICAgICAgICAgICAgaWYodGhpcy5kZXZlbG9wZXJDYWxsYmFjayAhPSBudWxsICYmIHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZENsb3NlQnV0dG9uVGFwcGVkICE9IG51bGwgJiYgdW5kZWZpbmVkICE9IHRoaXMuZGV2ZWxvcGVyQ2FsbGJhY2sub25OYXRpdmVBZENsb3NlQnV0dG9uVGFwcGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmVsb3BlckNhbGxiYWNrLm9uTmF0aXZlQWRDbG9zZUJ1dHRvblRhcHBlZChwbGFjZW1lbnRJZCwgY2FsbGJhY2tJbmZvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGxvYWROYXRpdmUgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgc2V0dGluZ3M9e30pIHtcclxuXHJcbiAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSBwbGF0Zm9ybUJyaWRnZSAmJiBwbGF0Zm9ybUJyaWRnZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtQnJpZGdlLmxvYWROYXRpdmUocGxhY2VtZW50SWQsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiWW91IG11c3QgcnVuIG9uIEFuZHJvaWQgb3IgaU9TLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEFkTGlzdGVuZXIgOiBmdW5jdGlvbihsaXN0ZW5lcikge1xyXG4gICAgICAgIHZhciBldmVudEpTT04gPSB7fTtcclxuICAgICAgICBldmVudEpTT05bTG9hZGVkQ2FsbGJhY2tLZXldPVwiQVROYXRpdmVKU1NESy5BVE5hdGl2ZUxpc3RlbmVyLm9uTmF0aXZlQWRMb2FkZWRcIixcclxuICAgICAgICBldmVudEpTT05bTG9hZEZhaWxDYWxsYmFja0tleV09IFwiQVROYXRpdmVKU1NESy5BVE5hdGl2ZUxpc3RlbmVyLm9uTmF0aXZlQWRMb2FkRmFpbFwiLFxyXG4gICAgICAgIGV2ZW50SlNPTltDbG9zZUNhbGxiYWNrS2V5XT1cIkFUTmF0aXZlSlNTREsuQVROYXRpdmVMaXN0ZW5lci5vbk5hdGl2ZUFkQ2xvc2VCdXR0b25UYXBwZWRcIixcclxuICAgICAgICBldmVudEpTT05bQ2xpY2tDYWxsYmFja0tleV09IFwiQVROYXRpdmVKU1NESy5BVE5hdGl2ZUxpc3RlbmVyLm9uTmF0aXZlQWRDbGlja1wiLFxyXG4gICAgICAgIGV2ZW50SlNPTltTaG93Q2FsbGJhY2tLZXldPSBcIkFUTmF0aXZlSlNTREsuQVROYXRpdmVMaXN0ZW5lci5vbk5hdGl2ZUFkU2hvd1wiLFxyXG4gICAgICAgIGV2ZW50SlNPTltWaWRlb1N0YXJ0S2V5XT0gXCJBVE5hdGl2ZUpTU0RLLkFUTmF0aXZlTGlzdGVuZXIub25OYXRpdmVBZFZpZGVvU3RhcnRcIixcclxuICAgICAgICBldmVudEpTT05bVmlkZW9FbmRLZXldPSBcIkFUTmF0aXZlSlNTREsuQVROYXRpdmVMaXN0ZW5lci5vbk5hdGl2ZUFkVmlkZW9FbmRcIlxyXG5cclxuICAgICAgICBpZiAodW5kZWZpbmVkICE9IHBsYXRmb3JtQnJpZGdlICYmIHBsYXRmb3JtQnJpZGdlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcGxhdGZvcm1CcmlkZ2Uuc2V0QWRMaXN0ZW5lcihKU09OLnN0cmluZ2lmeShldmVudEpTT04pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJZb3UgbXVzdCBydW4gb24gQW5kcm9pZCBvciBpT1MuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5BVE5hdGl2ZUxpc3RlbmVyLmRldmVsb3BlckNhbGxiYWNrID0gbGlzdGVuZXI7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhc0FkUmVhZHkgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIGlmICh1bmRlZmluZWQgIT0gcGxhdGZvcm1CcmlkZ2UgJiYgcGxhdGZvcm1CcmlkZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGxhdGZvcm1CcmlkZ2UuaGFzQWRSZWFkeShwbGFjZW1lbnRJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiWW91IG11c3QgcnVuIG9uIEFuZHJvaWQgb3IgaU9TLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93QWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgYWRWaWV3UHJvcGVydHkpIHtcclxuICAgICAgICBpZiAodW5kZWZpbmVkICE9IHBsYXRmb3JtQnJpZGdlICYmIHBsYXRmb3JtQnJpZGdlICE9IG51bGwpIHtcclxuICAgICAgICAgICBwbGF0Zm9ybUJyaWRnZS5zaG93QWQocGxhY2VtZW50SWQsIEpTT04uc3RyaW5naWZ5KGFkVmlld1Byb3BlcnR5LmdldEFkVmlld1Byb3BlcnR5KCkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJZb3UgbXVzdCBydW4gb24gQW5kcm9pZCBvciBpT1MuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmV3b3ZlQWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIGlmICh1bmRlZmluZWQgIT0gcGxhdGZvcm1CcmlkZ2UgJiYgcGxhdGZvcm1CcmlkZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgIHBsYXRmb3JtQnJpZGdlLnJld292ZUFkKHBsYWNlbWVudElkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJZb3UgbXVzdCBydW4gb24gQW5kcm9pZCBvciBpT1MuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlTG9hZEFkU2l6ZSA6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB2YXIgbG9hZEFkU2l6ZSA9IHt9O1xyXG4gICAgICAgIGxvYWRBZFNpemVbXCJ3aWR0aFwiXSA9IHdpZHRoO1xyXG4gICAgICAgIGxvYWRBZFNpemVbXCJoZWlnaHRcIl0gPSBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIGxvYWRBZFNpemU7XHJcbiAgICB9LFxyXG5cclxuICAgIEFkVmlld1Byb3BlcnR5IDogY2MuQ2xhc3Moe1xyXG5cclxuICAgICAgICBwYXJlbnQgOiBudWxsLFxyXG4gICAgICAgIGFwcEljb24gOiBudWxsLFxyXG4gICAgICAgIG1haW5JbWFnZTogbnVsbCxcclxuICAgICAgICB0aXRsZTpudWxsLFxyXG4gICAgICAgIGRlc2M6bnVsbCxcclxuICAgICAgICBhZExvZ286bnVsbCxcclxuICAgICAgICBjdGE6bnVsbCxcclxuICAgICAgICByYXRpbmc6bnVsbCxcclxuXHJcbiAgICAgICAgY3JlYXRlSXRlbVZpZXdQcm9wZXJ0eTogZnVuY3Rpb24oeCwgeSAsd2lkdGggLGhlaWdodCAsYmFja2dyb3VuZENvbG9yICx0ZXh0Q29sb3IgLHRleHRTaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtUHJvcGVydHkgPSB7fTtcclxuICAgICAgICAgICAgaXRlbVByb3BlcnR5W1wieFwiXSA9IHg7XHJcbiAgICAgICAgICAgIGl0ZW1Qcm9wZXJ0eVtcInlcIl0gPSB5O1xyXG4gICAgICAgICAgICBpdGVtUHJvcGVydHlbXCJ3aWR0aFwiXSA9IHdpZHRoO1xyXG4gICAgICAgICAgICBpdGVtUHJvcGVydHlbXCJoZWlnaHRcIl0gPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGl0ZW1Qcm9wZXJ0eVtcImJhY2tncm91bmRDb2xvclwiXSA9IGJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgICAgaXRlbVByb3BlcnR5W1widGV4dENvbG9yXCJdID0gdGV4dENvbG9yO1xyXG4gICAgICAgICAgICBpdGVtUHJvcGVydHlbXCJ0ZXh0U2l6ZVwiXSA9IHRleHRTaXplO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1Qcm9wZXJ0eTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXRBZFZpZXdQcm9wZXJ0eTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXRpdmVWaWV3UHJvcGVydHkgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGFyZW50ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgbmF0aXZlVmlld1Byb3BlcnR5W1wicGFyZW50XCJdID0gdGhpcy5wYXJlbnQ7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmFwcEljb24gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBuYXRpdmVWaWV3UHJvcGVydHlbXCJpY29uXCJdID0gdGhpcy5hcHBJY29uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLm1haW5JbWFnZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIG5hdGl2ZVZpZXdQcm9wZXJ0eVtcIm1haW5JbWFnZVwiXSA9IHRoaXMubWFpbkltYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGl0bGUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBuYXRpdmVWaWV3UHJvcGVydHlbXCJ0aXRsZVwiXSA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5kZXNjICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgbmF0aXZlVmlld1Byb3BlcnR5W1wiZGVzY1wiXSA9IHRoaXMuZGVzYztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hZExvZ28gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBuYXRpdmVWaWV3UHJvcGVydHlbXCJhZExvZ29cIl0gPSB0aGlzLmFkTG9nbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5jdGEgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBuYXRpdmVWaWV3UHJvcGVydHlbXCJjdGFcIl0gPSB0aGlzLmN0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5yYXRpbmcgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBuYXRpdmVWaWV3UHJvcGVydHlbXCJyYXRpbmdcIl0gPSB0aGlzLnJhdGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlVmlld1Byb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgXHJcbn07XHJcblxyXG5jb25zdCBMb2FkZWRDYWxsYmFja0tleSA9IFwiTmF0aXZlTG9hZGVkXCI7XHJcbmNvbnN0IExvYWRGYWlsQ2FsbGJhY2tLZXkgPSBcIk5hdGl2ZUxvYWRGYWlsXCI7XHJcbmNvbnN0IENsb3NlQ2FsbGJhY2tLZXkgPSBcIk5hdGl2ZUNsb3NlQnV0dG9uVGFwcGVkXCI7XHJcbmNvbnN0IENsaWNrQ2FsbGJhY2tLZXkgPSBcIk5hdGl2ZUNsaWNrXCI7XHJcbmNvbnN0IFNob3dDYWxsYmFja0tleSA9IFwiTmF0aXZlU2hvd1wiO1xyXG5jb25zdCBWaWRlb1N0YXJ0S2V5ID0gXCJOYXRpdmVWaWRlb1N0YXJ0XCI7XHJcbmNvbnN0IFZpZGVvRW5kS2V5ID0gXCJOYXRpdmVWaWRlb0VuZFwiO1xyXG5cclxud2luZG93LkFUTmF0aXZlSlNTREsgPSBBVE5hdGl2ZVNESzsiXX0=