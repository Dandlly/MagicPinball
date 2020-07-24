
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc9fdyQKA1AEqs/qTXKxw8e', 'ATiOSJS');
// SDK/script/AnyThinkAds/iOS/ATiOSJS.js

"use strict";

var OC_ATSDK_MANAGER_CLASS = "ATSDKManager";
var OC_BIRDGE_CLASS = "ATJSBridge";
var ATiOSJS = ATiOSJS || {
  initSDK: function initSDK(appid, appkey) {
    this.printJsLog("ATiOSJS::initSDK(" + appid + "," + appkey + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "startWithAppID:appKey:", appid, appkey);
  },
  initCustomMap: function initCustomMap(customMap) {
    this.printJsLog("ATiOSJS::initCustomMap(" + customMap + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:", customMap);
  },
  setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
    this.printJsLog("ATiOSJS::setPlacementCustomMap(" + placmentId + ", " + customMap + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:forPlacementID:", customMap, placmentId);
  },
  setGDPRLevel: function setGDPRLevel(level) {
    this.printJsLog("ATiOSJS::setGDPRLevel(" + level + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDataConsent:", level);
  },
  getGDPRLevel: function getGDPRLevel() {
    this.printJsLog("ATiOSJS::getGDPRLevel()");
    return jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "dataConsent");
  },
  getUserLocation: function getUserLocation(callbackMethod) {
    this.printJsLog("ATiOSJS::getUserLocation(" + callbackMethod + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "getUserLocationWithCallback:", callbackMethod);
  },
  showGDPRAuth: function showGDPRAuth() {
    this.printJsLog("ATiOSJS::showGDPRAuth()");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "presentDataConsentDialog");
  },
  setLogDebug: function setLogDebug(debug) {
    this.printJsLog("ATiOSJS::setLogDebug(" + debug + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDebugLog:", debug);
  },
  printJsLog: function printJsLog(msg) {
    if (undefined != msg && msg != null) {
      jsb.reflection.callStaticMethod(OC_BIRDGE_CLASS, "log:", msg);
    }
  }
};
module.exports = ATiOSJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxpT1NcXEFUaU9TSlMuanMiXSwibmFtZXMiOlsiT0NfQVRTREtfTUFOQUdFUl9DTEFTUyIsIk9DX0JJUkRHRV9DTEFTUyIsIkFUaU9TSlMiLCJpbml0U0RLIiwiYXBwaWQiLCJhcHBrZXkiLCJwcmludEpzTG9nIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJpbml0Q3VzdG9tTWFwIiwiY3VzdG9tTWFwIiwic2V0UGxhY2VtZW50Q3VzdG9tTWFwIiwicGxhY21lbnRJZCIsInNldEdEUFJMZXZlbCIsImxldmVsIiwiZ2V0R0RQUkxldmVsIiwiZ2V0VXNlckxvY2F0aW9uIiwiY2FsbGJhY2tNZXRob2QiLCJzaG93R0RQUkF1dGgiLCJzZXRMb2dEZWJ1ZyIsImRlYnVnIiwibXNnIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxzQkFBc0IsR0FBRyxjQUEvQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxZQUF4QjtBQUNBLElBQUlDLE9BQU8sR0FBR0EsT0FBTyxJQUFJO0FBQ3JCQyxFQUFBQSxPQUFPLEVBQUcsaUJBQVNDLEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCO0FBQ2pDLFNBQUtDLFVBQUwsQ0FBZ0Isc0JBQXNCRixLQUF0QixHQUE4QixHQUE5QixHQUFvQ0MsTUFBcEMsR0FBNkMsR0FBN0Q7QUFDR0UsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxzQkFBaEMsRUFBd0Qsd0JBQXhELEVBQWtGSSxLQUFsRixFQUF5RkMsTUFBekY7QUFDSCxHQUpvQjtBQU1yQkssRUFBQUEsYUFBYSxFQUFHLHVCQUFTQyxTQUFULEVBQW9CO0FBQ2hDLFNBQUtMLFVBQUwsQ0FBZ0IsNEJBQTRCSyxTQUE1QixHQUF3QyxHQUF4RDtBQUNBSixJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULHNCQUFoQyxFQUF3RCxnQkFBeEQsRUFBMEVXLFNBQTFFO0FBQ0gsR0FUb0I7QUFXckJDLEVBQUFBLHFCQUFxQixFQUFHLCtCQUFTQyxVQUFULEVBQXFCRixTQUFyQixFQUFnQztBQUNwRCxTQUFLTCxVQUFMLENBQWdCLG9DQUFvQ08sVUFBcEMsR0FBaUQsSUFBakQsR0FBd0RGLFNBQXhELEdBQW9FLEdBQXBGO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1Qsc0JBQWhDLEVBQXdELCtCQUF4RCxFQUF5RlcsU0FBekYsRUFBb0dFLFVBQXBHO0FBQ0gsR0Fkb0I7QUFnQnJCQyxFQUFBQSxZQUFZLEVBQUcsc0JBQVNDLEtBQVQsRUFBZ0I7QUFDM0IsU0FBS1QsVUFBTCxDQUFnQiwyQkFBMkJTLEtBQTNCLEdBQW1DLEdBQW5EO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1Qsc0JBQWhDLEVBQXdELGlCQUF4RCxFQUEyRWUsS0FBM0U7QUFDSCxHQW5Cb0I7QUFxQnJCQyxFQUFBQSxZQUFZLEVBQUcsd0JBQVc7QUFDdEIsU0FBS1YsVUFBTCxDQUFnQix5QkFBaEI7QUFDQSxXQUFPQyxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULHNCQUFoQyxFQUF3RCxhQUF4RCxDQUFQO0FBQ0gsR0F4Qm9CO0FBMEJyQmlCLEVBQUFBLGVBQWUsRUFBRyx5QkFBU0MsY0FBVCxFQUF5QjtBQUN2QyxTQUFLWixVQUFMLENBQWdCLDhCQUE4QlksY0FBOUIsR0FBK0MsR0FBL0Q7QUFDQVgsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxzQkFBaEMsRUFBd0QsOEJBQXhELEVBQXdGa0IsY0FBeEY7QUFDSCxHQTdCb0I7QUErQnJCQyxFQUFBQSxZQUFZLEVBQUcsd0JBQVk7QUFDdkIsU0FBS2IsVUFBTCxDQUFnQix5QkFBaEI7QUFDQUMsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxzQkFBaEMsRUFBd0QsMEJBQXhEO0FBQ0gsR0FsQ29CO0FBb0NyQm9CLEVBQUFBLFdBQVcsRUFBRyxxQkFBVUMsS0FBVixFQUFpQjtBQUMzQixTQUFLZixVQUFMLENBQWdCLDBCQUEwQmUsS0FBMUIsR0FBa0MsR0FBbEQ7QUFDQWQsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxzQkFBaEMsRUFBd0QsY0FBeEQsRUFBd0VxQixLQUF4RTtBQUNILEdBdkNvQjtBQXlDckJmLEVBQUFBLFVBQVUsRUFBRyxvQkFBU2dCLEdBQVQsRUFBYztBQUN2QixRQUFJQyxTQUFTLElBQUlELEdBQWIsSUFBb0JBLEdBQUcsSUFBSSxJQUEvQixFQUFxQztBQUNqQ2YsTUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixlQUFoQyxFQUFpRCxNQUFqRCxFQUF5RHFCLEdBQXpEO0FBQ0g7QUFDSjtBQTdDb0IsQ0FBekI7QUFpREFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLE9BQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPQ19BVFNES19NQU5BR0VSX0NMQVNTID0gXCJBVFNES01hbmFnZXJcIjtcclxuY29uc3QgT0NfQklSREdFX0NMQVNTID0gXCJBVEpTQnJpZGdlXCI7XHJcbnZhciBBVGlPU0pTID0gQVRpT1NKUyB8fCB7XHJcbiAgICBpbml0U0RLIDogZnVuY3Rpb24oYXBwaWQsIGFwcGtleSkge1xyXG4gICAgXHR0aGlzLnByaW50SnNMb2coXCJBVGlPU0pTOjppbml0U0RLKFwiICsgYXBwaWQgKyBcIixcIiArIGFwcGtleSArIFwiKVwiKTtcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX0FUU0RLX01BTkFHRVJfQ0xBU1MsIFwic3RhcnRXaXRoQXBwSUQ6YXBwS2V5OlwiLCBhcHBpZCwgYXBwa2V5KTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEN1c3RvbU1hcCA6IGZ1bmN0aW9uKGN1c3RvbU1hcCkge1xyXG4gICAgICAgIHRoaXMucHJpbnRKc0xvZyhcIkFUaU9TSlM6OmluaXRDdXN0b21NYXAoXCIgKyBjdXN0b21NYXAgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19BVFNES19NQU5BR0VSX0NMQVNTLCBcInNldEN1c3RvbURhdGE6XCIsIGN1c3RvbU1hcCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFBsYWNlbWVudEN1c3RvbU1hcCA6IGZ1bmN0aW9uKHBsYWNtZW50SWQsIGN1c3RvbU1hcCkge1xyXG4gICAgICAgIHRoaXMucHJpbnRKc0xvZyhcIkFUaU9TSlM6OnNldFBsYWNlbWVudEN1c3RvbU1hcChcIiArIHBsYWNtZW50SWQgKyBcIiwgXCIgKyBjdXN0b21NYXAgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19BVFNES19NQU5BR0VSX0NMQVNTLCBcInNldEN1c3RvbURhdGE6Zm9yUGxhY2VtZW50SUQ6XCIsIGN1c3RvbU1hcCwgcGxhY21lbnRJZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEdEUFJMZXZlbCA6IGZ1bmN0aW9uKGxldmVsKSB7XHJcbiAgICAgICAgdGhpcy5wcmludEpzTG9nKFwiQVRpT1NKUzo6c2V0R0RQUkxldmVsKFwiICsgbGV2ZWwgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19BVFNES19NQU5BR0VSX0NMQVNTLCBcInNldERhdGFDb25zZW50OlwiLCBsZXZlbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEdEUFJMZXZlbCA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucHJpbnRKc0xvZyhcIkFUaU9TSlM6OmdldEdEUFJMZXZlbCgpXCIpO1xyXG4gICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX0FUU0RLX01BTkFHRVJfQ0xBU1MsIFwiZGF0YUNvbnNlbnRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXJMb2NhdGlvbiA6IGZ1bmN0aW9uKGNhbGxiYWNrTWV0aG9kKSB7XHJcbiAgICAgICAgdGhpcy5wcmludEpzTG9nKFwiQVRpT1NKUzo6Z2V0VXNlckxvY2F0aW9uKFwiICsgY2FsbGJhY2tNZXRob2QgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19BVFNES19NQU5BR0VSX0NMQVNTLCBcImdldFVzZXJMb2NhdGlvbldpdGhDYWxsYmFjazpcIiwgY2FsbGJhY2tNZXRob2QpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93R0RQUkF1dGggOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wcmludEpzTG9nKFwiQVRpT1NKUzo6c2hvd0dEUFJBdXRoKClcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19BVFNES19NQU5BR0VSX0NMQVNTLCBcInByZXNlbnREYXRhQ29uc2VudERpYWxvZ1wiKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNldExvZ0RlYnVnIDogZnVuY3Rpb24gKGRlYnVnKSB7XHJcbiAgICAgICAgdGhpcy5wcmludEpzTG9nKFwiQVRpT1NKUzo6c2V0TG9nRGVidWcoXCIgKyBkZWJ1ZyArIFwiKVwiKTtcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX0FUU0RLX01BTkFHRVJfQ0xBU1MsIFwic2V0RGVidWdMb2c6XCIsIGRlYnVnKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHByaW50SnNMb2cgOiBmdW5jdGlvbihtc2cpIHtcclxuICAgICAgICBpZiAodW5kZWZpbmVkICE9IG1zZyAmJiBtc2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX0JJUkRHRV9DTEFTUywgXCJsb2c6XCIsIG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBVGlPU0pTOyJdfQ==