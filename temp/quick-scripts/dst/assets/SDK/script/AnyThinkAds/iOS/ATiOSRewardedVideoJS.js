
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSRewardedVideoJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0e61Z+J79OzKNs0S1evcmU', 'ATiOSRewardedVideoJS');
// SDK/script/AnyThinkAds/iOS/ATiOSRewardedVideoJS.js

"use strict";

var ATiOSJS = require("ATiOSJS");

var OC_RV_WRAPPER_CLASS = "ATRewardedVideoWrapper";
var ATiOSRewardedVideoJS = ATiOSRewardedVideoJS || {
  loadRewardedVideo: function loadRewardedVideo(placementId, extra) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + placementId + ", " + extra + ")");
    jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "loadRewardedVideoWithPlacementID:extra:", placementId, extra);
  },
  setAdListener: function setAdListener(listener) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::setAdListener(" + listener + ")");
    jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "rewardedVideoReadyForPlacementID:", placementId);
  },
  setUserData: function setUserData(placementId, userId, userData) {
    cc.log("Android-setUserData");
  },
  showAd: function showAd(placementId) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAd(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, null);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + placementId + ", " + scenario + ")");
    return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, scenario);
  }
};
module.exports = ATiOSRewardedVideoJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxpT1NcXEFUaU9TUmV3YXJkZWRWaWRlb0pTLmpzIl0sIm5hbWVzIjpbIkFUaU9TSlMiLCJyZXF1aXJlIiwiT0NfUlZfV1JBUFBFUl9DTEFTUyIsIkFUaU9TUmV3YXJkZWRWaWRlb0pTIiwibG9hZFJld2FyZGVkVmlkZW8iLCJwbGFjZW1lbnRJZCIsImV4dHJhIiwicHJpbnRKc0xvZyIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwic2V0QWRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzQWRSZWFkeSIsInNldFVzZXJEYXRhIiwidXNlcklkIiwidXNlckRhdGEiLCJjYyIsImxvZyIsInNob3dBZCIsInNob3dBZEluU2NlbmFyaW8iLCJzY2VuYXJpbyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyx3QkFBNUI7QUFDQSxJQUFJQyxvQkFBb0IsR0FBR0Esb0JBQW9CLElBQUk7QUFDL0NDLEVBQUFBLGlCQUFpQixFQUFHLDJCQUFVQyxXQUFWLEVBQXVCQyxLQUF2QixFQUE4QjtBQUM5Q04sSUFBQUEsT0FBTyxDQUFDTyxVQUFSLENBQW1CLDZDQUE2Q0YsV0FBN0MsR0FBMkQsSUFBM0QsR0FBa0VDLEtBQWxFLEdBQTBFLEdBQTdGO0FBQ0FFLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsbUJBQWhDLEVBQXFELHlDQUFyRCxFQUFnR0csV0FBaEcsRUFBNkdDLEtBQTdHO0FBQ0gsR0FKOEM7QUFNL0NLLEVBQUFBLGFBQWEsRUFBRyx1QkFBVUMsUUFBVixFQUFvQjtBQUNoQ1osSUFBQUEsT0FBTyxDQUFDTyxVQUFSLENBQW1CLHlDQUF5Q0ssUUFBekMsR0FBb0QsR0FBdkU7QUFDQUosSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixtQkFBaEMsRUFBcUQsZUFBckQsRUFBc0VVLFFBQXRFO0FBQ0gsR0FUOEM7QUFXL0NDLEVBQUFBLFVBQVUsRUFBRyxvQkFBVVIsV0FBVixFQUF1QjtBQUNoQ0wsSUFBQUEsT0FBTyxDQUFDTyxVQUFSLENBQW1CLHNDQUFzQ0YsV0FBdEMsR0FBb0QsR0FBdkU7QUFDQSxXQUFPRyxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NSLG1CQUFoQyxFQUFxRCxtQ0FBckQsRUFBMEZHLFdBQTFGLENBQVA7QUFDSCxHQWQ4QztBQWdCL0NTLEVBQUFBLFdBQVcsRUFBRyxxQkFBVVQsV0FBVixFQUF1QlUsTUFBdkIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQ2xEQyxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxxQkFBUDtBQUNKLEdBbEI4QztBQW9CL0NDLEVBQUFBLE1BQU0sRUFBRyxnQkFBU2QsV0FBVCxFQUFzQjtBQUMzQkwsSUFBQUEsT0FBTyxDQUFDTyxVQUFSLENBQW1CLGtDQUFrQ0YsV0FBbEMsR0FBZ0QsR0FBbkU7QUFDQSxXQUFPRyxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NSLG1CQUFoQyxFQUFxRCx5Q0FBckQsRUFBZ0dHLFdBQWhHLEVBQTZHLElBQTdHLENBQVA7QUFFSCxHQXhCOEM7QUEwQi9DZSxFQUFBQSxnQkFBZ0IsRUFBRywwQkFBU2YsV0FBVCxFQUFzQmdCLFFBQXRCLEVBQWdDO0FBQy9DckIsSUFBQUEsT0FBTyxDQUFDTyxVQUFSLENBQW1CLDRDQUE0Q0YsV0FBNUMsR0FBMkQsSUFBM0QsR0FBa0VnQixRQUFsRSxHQUE2RSxHQUFoRztBQUNBLFdBQU9iLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsbUJBQWhDLEVBQXFELHlDQUFyRCxFQUFnR0csV0FBaEcsRUFBNkdnQixRQUE3RyxDQUFQO0FBQ0g7QUE3QjhDLENBQW5EO0FBaUNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJwQixvQkFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBVGlPU0pTID0gcmVxdWlyZShcIkFUaU9TSlNcIik7XHJcbmNvbnN0IE9DX1JWX1dSQVBQRVJfQ0xBU1MgPSBcIkFUUmV3YXJkZWRWaWRlb1dyYXBwZXJcIjtcclxudmFyIEFUaU9TUmV3YXJkZWRWaWRlb0pTID0gQVRpT1NSZXdhcmRlZFZpZGVvSlMgfHwge1xyXG4gICAgbG9hZFJld2FyZGVkVmlkZW8gOiBmdW5jdGlvbiAocGxhY2VtZW50SWQsIGV4dHJhKSB7XHJcbiAgICAgICAgQVRpT1NKUy5wcmludEpzTG9nKFwiQVRpT1NSZXdhcmRlZFZpZGVvSlM6OmxvYWRSZXdhcmRlZFZpZGVvKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBleHRyYSArIFwiKVwiKTtcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1JWX1dSQVBQRVJfQ0xBU1MsIFwibG9hZFJld2FyZGVkVmlkZW9XaXRoUGxhY2VtZW50SUQ6ZXh0cmE6XCIsIHBsYWNlbWVudElkLCBleHRyYSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEFkTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICBBVGlPU0pTLnByaW50SnNMb2coXCJBVGlPU1Jld2FyZGVkVmlkZW9KUzo6c2V0QWRMaXN0ZW5lcihcIiArIGxpc3RlbmVyICsgXCIpXCIpO1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfUlZfV1JBUFBFUl9DTEFTUywgXCJzZXREZWxlZ2F0ZXM6XCIsIGxpc3RlbmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzQWRSZWFkeSA6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TUmV3YXJkZWRWaWRlb0pTOjpoYXNBZFJlYWR5KFwiICsgcGxhY2VtZW50SWQgKyBcIilcIik7XHJcbiAgICAgICAgcmV0dXJuIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfUlZfV1JBUFBFUl9DTEFTUywgXCJyZXdhcmRlZFZpZGVvUmVhZHlGb3JQbGFjZW1lbnRJRDpcIiwgcGxhY2VtZW50SWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRVc2VyRGF0YSA6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCwgdXNlcklkLCB1c2VyRGF0YSkge1xyXG4gICAgICAgICBjYy5sb2coXCJBbmRyb2lkLXNldFVzZXJEYXRhXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93QWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TUmV3YXJkZWRWaWRlb0pTOjpzaG93QWQoXCIgKyBwbGFjZW1lbnRJZCArIFwiKVwiKTtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19SVl9XUkFQUEVSX0NMQVNTLCBcInNob3dSZXdhcmRlZFZpZGVvV2l0aFBsYWNlbWVudElEOnNjZW5lOlwiLCBwbGFjZW1lbnRJZCwgbnVsbCk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dBZEluU2NlbmFyaW8gOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgc2NlbmFyaW8pIHtcclxuICAgICAgICBBVGlPU0pTLnByaW50SnNMb2coXCJBVGlPU1Jld2FyZGVkVmlkZW9KUzo6c2hvd0FkSW5TY2VuYXJpbyhcIiArIHBsYWNlbWVudElkICArIFwiLCBcIiArIHNjZW5hcmlvICsgXCIpXCIpO1xyXG4gICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1JWX1dSQVBQRVJfQ0xBU1MsIFwic2hvd1Jld2FyZGVkVmlkZW9XaXRoUGxhY2VtZW50SUQ6c2NlbmU6XCIsIHBsYWNlbWVudElkLCBzY2VuYXJpbyk7XHJcbiAgICB9IFxyXG4gIFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBVGlPU1Jld2FyZGVkVmlkZW9KUztcclxuIl19