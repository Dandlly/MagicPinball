
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSInterstitialJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe489+SD7xMGq/GJd5fr6ld', 'ATiOSInterstitialJS');
// SDK/script/AnyThinkAds/iOS/ATiOSInterstitialJS.js

"use strict";

var ATiOSJS = require("ATiOSJS");

var OC_WRAPPER_CLASS = "ATInterstitialAdWrapper";
var ATiOSInterstitialJS = ATiOSInterstitialJS || {
  loadInterstitial: function loadInterstitial(placementId) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + placementId + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadInterstitialWithPlacementID:extra:", placementId, null);
  },
  setAdListener: function setAdListener(listener) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::setAdListener(" + listener + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::hasAdReady(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "interstitialReadyForPlacementID:", placementId);
  },
  setUserData: function setUserData(placementId, userId, userData) {
    cc.log("Android-setUserData");
  },
  showAd: function showAd(placementId) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, null);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ", " + scenario + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, scenario);
  }
};
module.exports = ATiOSInterstitialJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxpT1NcXEFUaU9TSW50ZXJzdGl0aWFsSlMuanMiXSwibmFtZXMiOlsiQVRpT1NKUyIsInJlcXVpcmUiLCJPQ19XUkFQUEVSX0NMQVNTIiwiQVRpT1NJbnRlcnN0aXRpYWxKUyIsImxvYWRJbnRlcnN0aXRpYWwiLCJwbGFjZW1lbnRJZCIsInByaW50SnNMb2ciLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsInNldEFkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImhhc0FkUmVhZHkiLCJzZXRVc2VyRGF0YSIsInVzZXJJZCIsInVzZXJEYXRhIiwiY2MiLCJsb2ciLCJzaG93QWQiLCJzaG93QWRJblNjZW5hcmlvIiwic2NlbmFyaW8iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcseUJBQXpCO0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUdBLG1CQUFtQixJQUFJO0FBQzdDQyxFQUFBQSxnQkFBZ0IsRUFBRywwQkFBVUMsV0FBVixFQUF1QjtBQUN0Q0wsSUFBQUEsT0FBTyxDQUFDTSxVQUFSLENBQW1CLDJDQUEyQ0QsV0FBM0MsR0FBeUQsR0FBNUU7QUFDQUUsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUCxnQkFBaEMsRUFBa0Qsd0NBQWxELEVBQTRGRyxXQUE1RixFQUF5RyxJQUF6RztBQUNILEdBSjRDO0FBTTdDSyxFQUFBQSxhQUFhLEVBQUcsdUJBQVVDLFFBQVYsRUFBb0I7QUFDaENYLElBQUFBLE9BQU8sQ0FBQ00sVUFBUixDQUFtQix3Q0FBd0NLLFFBQXhDLEdBQW1ELEdBQXRFO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1AsZ0JBQWhDLEVBQWtELGVBQWxELEVBQW1FUyxRQUFuRTtBQUNILEdBVDRDO0FBVzdDQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVQLFdBQVYsRUFBdUI7QUFDaENMLElBQUFBLE9BQU8sQ0FBQ00sVUFBUixDQUFtQixxQ0FBcUNELFdBQXJDLEdBQW1ELEdBQXRFO0FBQ0EsV0FBT0UsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUCxnQkFBaEMsRUFBa0Qsa0NBQWxELEVBQXNGRyxXQUF0RixDQUFQO0FBQ0gsR0FkNEM7QUFnQjdDUSxFQUFBQSxXQUFXLEVBQUcscUJBQVVSLFdBQVYsRUFBdUJTLE1BQXZCLEVBQStCQyxRQUEvQixFQUF5QztBQUNsREMsSUFBQUEsRUFBRSxDQUFDQyxHQUFILENBQU8scUJBQVA7QUFDSixHQWxCNEM7QUFvQjdDQyxFQUFBQSxNQUFNLEVBQUcsZ0JBQVNiLFdBQVQsRUFBc0I7QUFDM0JMLElBQUFBLE9BQU8sQ0FBQ00sVUFBUixDQUFtQixpQ0FBaUNELFdBQWpDLEdBQStDLEdBQWxFO0FBQ0EsV0FBT0UsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUCxnQkFBaEMsRUFBa0Qsd0NBQWxELEVBQTRGRyxXQUE1RixFQUF5RyxJQUF6RyxDQUFQO0FBRUgsR0F4QjRDO0FBMEI3Q2MsRUFBQUEsZ0JBQWdCLEVBQUcsMEJBQVNkLFdBQVQsRUFBc0JlLFFBQXRCLEVBQWdDO0FBQy9DcEIsSUFBQUEsT0FBTyxDQUFDTSxVQUFSLENBQW1CLGlDQUFpQ0QsV0FBakMsR0FBZ0QsSUFBaEQsR0FBdURlLFFBQXZELEdBQWtFLEdBQXJGO0FBQ0EsV0FBT2IsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUCxnQkFBaEMsRUFBa0Qsd0NBQWxELEVBQTRGRyxXQUE1RixFQUF5R2UsUUFBekcsQ0FBUDtBQUNIO0FBN0I0QyxDQUFqRDtBQWlDQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsbUJBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQVRpT1NKUyA9IHJlcXVpcmUoXCJBVGlPU0pTXCIpO1xyXG5jb25zdCBPQ19XUkFQUEVSX0NMQVNTID0gXCJBVEludGVyc3RpdGlhbEFkV3JhcHBlclwiO1xyXG52YXIgQVRpT1NJbnRlcnN0aXRpYWxKUyA9IEFUaU9TSW50ZXJzdGl0aWFsSlMgfHwge1xyXG4gICAgbG9hZEludGVyc3RpdGlhbCA6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TSW50ZXJzdGl0aWFsSlM6OmxvYWRJbnRlcnN0aXRpYWwoXCIgKyBwbGFjZW1lbnRJZCArIFwiKVwiKTtcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1dSQVBQRVJfQ0xBU1MsIFwibG9hZEludGVyc3RpdGlhbFdpdGhQbGFjZW1lbnRJRDpleHRyYTpcIiwgcGxhY2VtZW50SWQsIG51bGwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBZExpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgQVRpT1NKUy5wcmludEpzTG9nKFwiQVRpT1NJbnRlcnN0aXRpYWxKUzo6c2V0QWRMaXN0ZW5lcihcIiArIGxpc3RlbmVyICsgXCIpXCIpO1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfV1JBUFBFUl9DTEFTUywgXCJzZXREZWxlZ2F0ZXM6XCIsIGxpc3RlbmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzQWRSZWFkeSA6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TSW50ZXJzdGl0aWFsSlM6Omhhc0FkUmVhZHkoXCIgKyBwbGFjZW1lbnRJZCArIFwiKVwiKTtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcImludGVyc3RpdGlhbFJlYWR5Rm9yUGxhY2VtZW50SUQ6XCIsIHBsYWNlbWVudElkKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0VXNlckRhdGEgOiBmdW5jdGlvbiAocGxhY2VtZW50SWQsIHVzZXJJZCwgdXNlckRhdGEpIHtcclxuICAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1zZXRVc2VyRGF0YVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkIDogZnVuY3Rpb24ocGxhY2VtZW50SWQpIHtcclxuICAgICAgICBBVGlPU0pTLnByaW50SnNMb2coXCJBVGlPU0ludGVyc3RpdGlhbEpTOjpzaG93QWQoXCIgKyBwbGFjZW1lbnRJZCArIFwiKVwiKTtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcInNob3dJbnRlcnN0aXRpYWxXaXRoUGxhY2VtZW50SUQ6c2NlbmU6XCIsIHBsYWNlbWVudElkLCBudWxsKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkSW5TY2VuYXJpbyA6IGZ1bmN0aW9uKHBsYWNlbWVudElkLCBzY2VuYXJpbykge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TSW50ZXJzdGl0aWFsSlM6OnNob3dBZChcIiArIHBsYWNlbWVudElkICArIFwiLCBcIiArIHNjZW5hcmlvICsgXCIpXCIpO1xyXG4gICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1dSQVBQRVJfQ0xBU1MsIFwic2hvd0ludGVyc3RpdGlhbFdpdGhQbGFjZW1lbnRJRDpzY2VuZTpcIiwgcGxhY2VtZW50SWQsIHNjZW5hcmlvKTtcclxuICAgIH0gXHJcbiAgXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFUaU9TSW50ZXJzdGl0aWFsSlM7Il19