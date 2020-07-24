
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidInterstitialJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abc0crmB4lG14Lb2AHMMA/7', 'ATAndroidInterstitialJS');
// SDK/script/AnyThinkAds/Android/ATAndroidInterstitialJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATInterstitialJSBridge";
var ATAndroidInterstitialJS = ATAndroidInterstitialJS || {
  loadInterstitial: function loadInterstitial(placementId) {
    cc.log("Android-loadInterstitial");
    jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;)V", placementId);
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
    cc.log("Android-showAd:" + placementId);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    cc.log("Android-showAdInScenario:" + placementId + "---" + scenario);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
  }
};
module.exports = ATAndroidInterstitialJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxBbmRyb2lkXFxBVEFuZHJvaWRJbnRlcnN0aXRpYWxKUy5qcyJdLCJuYW1lcyI6WyJjbGFzc0phdmFOYW1lIiwiQVRBbmRyb2lkSW50ZXJzdGl0aWFsSlMiLCJsb2FkSW50ZXJzdGl0aWFsIiwicGxhY2VtZW50SWQiLCJjYyIsImxvZyIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwic2V0QWRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzQWRSZWFkeSIsInNob3dBZCIsInNob3dBZEluU2NlbmFyaW8iLCJzY2VuYXJpbyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLDZDQUFwQjtBQUNBLElBQUlDLHVCQUF1QixHQUFHQSx1QkFBdUIsSUFBSTtBQUVyREMsRUFBQUEsZ0JBQWdCLEVBQUcsMEJBQVVDLFdBQVYsRUFBdUI7QUFDdENDLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLDBCQUFQO0FBQ05DLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsYUFBaEMsRUFBK0MsTUFBL0MsRUFBdUQsdUJBQXZELEVBQWdGRyxXQUFoRjtBQUNHLEdBTG9EO0FBT3JETSxFQUFBQSxhQUFhLEVBQUcsdUJBQVVDLFFBQVYsRUFBb0I7QUFDaENOLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLHVCQUFQO0FBQ05DLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsYUFBaEMsRUFBK0MsZUFBL0MsRUFBZ0UsdUJBQWhFLEVBQXlGVSxRQUF6RjtBQUNHLEdBVm9EO0FBWXJEQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVSLFdBQVYsRUFBdUI7QUFDL0JDLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLG9CQUFQO0FBQ0QsV0FBT0MsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixhQUFoQyxFQUErQyxXQUEvQyxFQUE0RCx1QkFBNUQsRUFBcUZHLFdBQXJGLENBQVA7QUFDSCxHQWZvRDtBQWlCckRTLEVBQUFBLE1BQU0sRUFBRyxnQkFBU1QsV0FBVCxFQUFzQjtBQUMzQkMsSUFBQUEsRUFBRSxDQUFDQyxHQUFILENBQU8sb0JBQW9CRixXQUEzQjtBQUNORyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NSLGFBQWhDLEVBQStDLE1BQS9DLEVBQXVELHVCQUF2RCxFQUFnRkcsV0FBaEY7QUFDRyxHQXBCb0Q7QUFzQnJEVSxFQUFBQSxnQkFBZ0IsRUFBRywwQkFBU1YsV0FBVCxFQUFzQlcsUUFBdEIsRUFBZ0M7QUFDOUNWLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLDhCQUE4QkYsV0FBOUIsR0FBNEMsS0FBNUMsR0FBb0RXLFFBQTNEO0FBQ05SLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsYUFBaEMsRUFBK0MsTUFBL0MsRUFBdUQseUNBQXZELEVBQWtHRyxXQUFsRyxFQUErR1csUUFBL0c7QUFDRTtBQXpCb0QsQ0FBekQ7QUE2QkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsdUJBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2xhc3NKYXZhTmFtZSA9IFwiY29tL2FueXRoaW5rL2NvY29zanMvQVRJbnRlcnN0aXRpYWxKU0JyaWRnZVwiO1xyXG52YXIgQVRBbmRyb2lkSW50ZXJzdGl0aWFsSlMgPSBBVEFuZHJvaWRJbnRlcnN0aXRpYWxKUyB8fCB7XHJcbiAgXHJcbiAgICBsb2FkSW50ZXJzdGl0aWFsIDogZnVuY3Rpb24gKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1sb2FkSW50ZXJzdGl0aWFsXCIpO1xyXG5cdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcImxvYWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgcGxhY2VtZW50SWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBZExpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1zZXRBZExpc3RlbmVyXCIpO1xyXG5cdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcInNldEFkTGlzdGVuZXJcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgbGlzdGVuZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXNBZFJlYWR5IDogZnVuY3Rpb24gKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgIGNjLmxvZyhcIkFuZHJvaWQtaGFzQWRSZWFkeVwiKTtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcImlzQWRSZWFkeVwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspWlwiLCBwbGFjZW1lbnRJZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dBZCA6IGZ1bmN0aW9uKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1zaG93QWQ6XCIgKyBwbGFjZW1lbnRJZCk7XHJcblx0XHRqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwic2hvd1wiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBwbGFjZW1lbnRJZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dBZEluU2NlbmFyaW8gOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgc2NlbmFyaW8pIHtcclxuICAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1zaG93QWRJblNjZW5hcmlvOlwiICsgcGxhY2VtZW50SWQgKyBcIi0tLVwiICsgc2NlbmFyaW8pO1xyXG5cdFx0IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJzaG93XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHBsYWNlbWVudElkLCBzY2VuYXJpbyk7XHJcbiAgICB9IFxyXG4gIFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBVEFuZHJvaWRJbnRlcnN0aXRpYWxKUzsiXX0=