
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidRewardedVideoJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86d80XErzRN/5FbSyffHIGN', 'ATAndroidRewardedVideoJS');
// SDK/script/AnyThinkAds/Android/ATAndroidRewardedVideoJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATRewardedVideoJSBridge";
var ATAndroidRewardedVideoJS = ATAndroidRewardedVideoJS || {
  loadRewardedVideo: function loadRewardedVideo(placementId, settings) {
    cc.log("Android-loadRewardedVideo");
    jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
  },
  setAdListener: function setAdListener(listener) {
    cc.log("Android-setAdListener");
    jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    cc.log("Android-hasAdReady");
    return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
  },
  showAd: function showAd(placementId) {
    cc.log("Android-rv_showAd:" + placementId);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    cc.log("Android-rv_showAdInScenario:" + placementId + "---" + scenario);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
  }
};
module.exports = ATAndroidRewardedVideoJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxBbmRyb2lkXFxBVEFuZHJvaWRSZXdhcmRlZFZpZGVvSlMuanMiXSwibmFtZXMiOlsiY2xhc3NKYXZhTmFtZSIsIkFUQW5kcm9pZFJld2FyZGVkVmlkZW9KUyIsImxvYWRSZXdhcmRlZFZpZGVvIiwicGxhY2VtZW50SWQiLCJzZXR0aW5ncyIsImNjIiwibG9nIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJzZXRBZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNBZFJlYWR5Iiwic2hvd0FkIiwic2hvd0FkSW5TY2VuYXJpbyIsInNjZW5hcmlvIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUcsOENBQXBCO0FBQ0EsSUFBSUMsd0JBQXdCLEdBQUdBLHdCQUF3QixJQUFJO0FBRXZEQyxFQUFBQSxpQkFBaUIsRUFBRywyQkFBVUMsV0FBVixFQUF1QkMsUUFBdkIsRUFBaUM7QUFDakRDLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLDJCQUFQO0FBQ05DLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1QsYUFBaEMsRUFBK0MsTUFBL0MsRUFBdUQseUNBQXZELEVBQWtHRyxXQUFsRyxFQUErR0MsUUFBL0c7QUFDRyxHQUxzRDtBQU92RE0sRUFBQUEsYUFBYSxFQUFHLHVCQUFVQyxRQUFWLEVBQW9CO0FBQ2hDTixJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyx1QkFBUDtBQUNOQyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULGFBQWhDLEVBQStDLGVBQS9DLEVBQWdFLHVCQUFoRSxFQUF5RlcsUUFBekY7QUFDRyxHQVZzRDtBQVl2REMsRUFBQUEsVUFBVSxFQUFHLG9CQUFVVCxXQUFWLEVBQXVCO0FBQ2hDRSxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxvQkFBUDtBQUNBLFdBQU9DLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1QsYUFBaEMsRUFBK0MsV0FBL0MsRUFBNEQsdUJBQTVELEVBQXFGRyxXQUFyRixDQUFQO0FBQ0gsR0Fmc0Q7QUFpQnZEVSxFQUFBQSxNQUFNLEVBQUcsZ0JBQVNWLFdBQVQsRUFBc0I7QUFDM0JFLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLHVCQUF1QkgsV0FBOUI7QUFDTkksSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxhQUFoQyxFQUErQyxNQUEvQyxFQUF1RCx1QkFBdkQsRUFBZ0ZHLFdBQWhGO0FBQ0csR0FwQnNEO0FBc0J2RFcsRUFBQUEsZ0JBQWdCLEVBQUcsMEJBQVNYLFdBQVQsRUFBc0JZLFFBQXRCLEVBQWdDO0FBQy9DVixJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxpQ0FBaUNILFdBQWpDLEdBQStDLEtBQS9DLEdBQXVEWSxRQUE5RDtBQUNOUixJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULGFBQWhDLEVBQStDLE1BQS9DLEVBQXVELHlDQUF2RCxFQUFrR0csV0FBbEcsRUFBK0dZLFFBQS9HO0FBQ0c7QUF6QnNELENBQTNEO0FBNkJBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQix3QkFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjbGFzc0phdmFOYW1lID0gXCJjb20vYW55dGhpbmsvY29jb3Nqcy9BVFJld2FyZGVkVmlkZW9KU0JyaWRnZVwiO1xyXG52YXIgQVRBbmRyb2lkUmV3YXJkZWRWaWRlb0pTID0gQVRBbmRyb2lkUmV3YXJkZWRWaWRlb0pTIHx8IHtcclxuICBcclxuICAgIGxvYWRSZXdhcmRlZFZpZGVvIDogZnVuY3Rpb24gKHBsYWNlbWVudElkLCBzZXR0aW5ncykge1xyXG4gICAgICAgIGNjLmxvZyhcIkFuZHJvaWQtbG9hZFJld2FyZGVkVmlkZW9cIik7XHJcblx0XHRqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwibG9hZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspVlwiLCBwbGFjZW1lbnRJZCwgc2V0dGluZ3MpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBZExpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1zZXRBZExpc3RlbmVyXCIpO1xyXG5cdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcInNldEFkTGlzdGVuZXJcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgbGlzdGVuZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXNBZFJlYWR5IDogZnVuY3Rpb24gKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1oYXNBZFJlYWR5XCIpO1xyXG4gICAgICAgIHJldHVybiBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwiaXNBZFJlYWR5XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylaXCIsIHBsYWNlbWVudElkKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkIDogZnVuY3Rpb24ocGxhY2VtZW50SWQpIHtcclxuICAgICAgICBjYy5sb2coXCJBbmRyb2lkLXJ2X3Nob3dBZDpcIiArIHBsYWNlbWVudElkKTtcclxuXHRcdGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJzaG93XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHBsYWNlbWVudElkKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkSW5TY2VuYXJpbyA6IGZ1bmN0aW9uKHBsYWNlbWVudElkLCBzY2VuYXJpbykge1xyXG4gICAgICAgIGNjLmxvZyhcIkFuZHJvaWQtcnZfc2hvd0FkSW5TY2VuYXJpbzpcIiArIHBsYWNlbWVudElkICsgXCItLS1cIiArIHNjZW5hcmlvKTtcclxuXHRcdGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJzaG93XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHBsYWNlbWVudElkLCBzY2VuYXJpbyk7XHJcbiAgICB9IFxyXG4gIFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBVEFuZHJvaWRSZXdhcmRlZFZpZGVvSlM7Il19