
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidNativeJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6cafvJ9ZhP660O5tpX6Kf7', 'ATAndroidNativeJS');
// SDK/script/AnyThinkAds/Android/ATAndroidNativeJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATNativeJSBridge";
var ATAndroidBannerJS = ATAndroidBannerJS || {
  loadNative: function loadNative(placementId, settings) {
    cc.log("Android-loadNative");
    jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
  },
  setAdListener: function setAdListener(listener) {
    cc.log("Android-setAdListener");
    jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    cc.log("Android-hasAdReady");
    return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
    ;
  },
  showAd: function showAd(placementId, adViewProperty) {
    cc.log("Android-showAd");
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty);
  },
  rewoveAd: function rewoveAd(placementId) {
    cc.log("Android-rewoveAd");
    jsb.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
  }
};
module.exports = ATAndroidBannerJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxBbmRyb2lkXFxBVEFuZHJvaWROYXRpdmVKUy5qcyJdLCJuYW1lcyI6WyJjbGFzc0phdmFOYW1lIiwiQVRBbmRyb2lkQmFubmVySlMiLCJsb2FkTmF0aXZlIiwicGxhY2VtZW50SWQiLCJzZXR0aW5ncyIsImNjIiwibG9nIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJzZXRBZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNBZFJlYWR5Iiwic2hvd0FkIiwiYWRWaWV3UHJvcGVydHkiLCJyZXdvdmVBZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLHVDQUFwQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHQSxpQkFBaUIsSUFBSTtBQUV6Q0MsRUFBQUEsVUFBVSxFQUFHLG9CQUFVQyxXQUFWLEVBQXVCQyxRQUF2QixFQUFpQztBQUMxQ0MsSUFBQUEsRUFBRSxDQUFDQyxHQUFILENBQU8sb0JBQVA7QUFDTkMsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxhQUFoQyxFQUErQyxNQUEvQyxFQUF1RCx5Q0FBdkQsRUFBa0dHLFdBQWxHLEVBQStHQyxRQUEvRztBQUNHLEdBTHdDO0FBT3pDTSxFQUFBQSxhQUFhLEVBQUcsdUJBQVVDLFFBQVYsRUFBb0I7QUFDaENOLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLHVCQUFQO0FBQ05DLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1QsYUFBaEMsRUFBK0MsZUFBL0MsRUFBZ0UsdUJBQWhFLEVBQXlGVyxRQUF6RjtBQUNHLEdBVndDO0FBWXpDQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVULFdBQVYsRUFBdUI7QUFDL0JFLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLG9CQUFQO0FBQ0QsV0FBT0MsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxhQUFoQyxFQUErQyxXQUEvQyxFQUE0RCx1QkFBNUQsRUFBcUZHLFdBQXJGLENBQVA7QUFBeUc7QUFDNUcsR0Fmd0M7QUFpQnpDVSxFQUFBQSxNQUFNLEVBQUcsZ0JBQVNWLFdBQVQsRUFBc0JXLGNBQXRCLEVBQXNDO0FBQzNDVCxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxnQkFBUDtBQUNOQyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULGFBQWhDLEVBQStDLE1BQS9DLEVBQXVELHlDQUF2RCxFQUFrR0csV0FBbEcsRUFBK0dXLGNBQS9HO0FBQ0csR0FwQndDO0FBc0J6Q0MsRUFBQUEsUUFBUSxFQUFHLGtCQUFTWixXQUFULEVBQXNCO0FBQzVCRSxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxrQkFBUDtBQUNOQyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULGFBQWhDLEVBQStDLFFBQS9DLEVBQXlELHVCQUF6RCxFQUFrRkcsV0FBbEY7QUFDRTtBQXpCd0MsQ0FBN0M7QUE2QkFhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhCLGlCQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNsYXNzSmF2YU5hbWUgPSBcImNvbS9hbnl0aGluay9jb2Nvc2pzL0FUTmF0aXZlSlNCcmlkZ2VcIjtcclxudmFyIEFUQW5kcm9pZEJhbm5lckpTID0gQVRBbmRyb2lkQmFubmVySlMgfHwge1xyXG4gIFxyXG4gICAgbG9hZE5hdGl2ZSA6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCwgc2V0dGluZ3MpIHtcclxuICAgICAgICBjYy5sb2coXCJBbmRyb2lkLWxvYWROYXRpdmVcIik7XHJcblx0XHRqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwibG9hZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspVlwiLCBwbGFjZW1lbnRJZCwgc2V0dGluZ3MpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBZExpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1zZXRBZExpc3RlbmVyXCIpO1xyXG5cdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcInNldEFkTGlzdGVuZXJcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgbGlzdGVuZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXNBZFJlYWR5IDogZnVuY3Rpb24gKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgIGNjLmxvZyhcIkFuZHJvaWQtaGFzQWRSZWFkeVwiKTtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcImlzQWRSZWFkeVwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspWlwiLCBwbGFjZW1lbnRJZCk7O1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93QWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgYWRWaWV3UHJvcGVydHkpIHtcclxuICAgICAgICBjYy5sb2coXCJBbmRyb2lkLXNob3dBZFwiKTtcclxuXHRcdGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJzaG93XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHBsYWNlbWVudElkLCBhZFZpZXdQcm9wZXJ0eSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICByZXdvdmVBZCA6IGZ1bmN0aW9uKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgIGNjLmxvZyhcIkFuZHJvaWQtcmV3b3ZlQWRcIik7XHJcblx0XHQganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcInJlbW92ZVwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBwbGFjZW1lbnRJZCk7XHJcbiAgICB9XHJcbiAgXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFUQW5kcm9pZEJhbm5lckpTOyJdfQ==