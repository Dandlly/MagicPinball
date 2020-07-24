
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidBannerJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '605f1PDXJhOza9UfeFOGtJm', 'ATAndroidBannerJS');
// SDK/script/AnyThinkAds/Android/ATAndroidBannerJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATBannerJSBridge";
var ATAndroidBannerJS = ATAndroidBannerJS || {
  loadBanner: function loadBanner(placementId, settings) {
    cc.log("Android-loadBanner:" + settings);
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
  showAdInPosistion: function showAdInPosistion(placementId, position) {
    cc.log("Android-showAdInPosistion");
    jsb.reflection.callStaticMethod(classJavaName, "showWithPostion", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, position);
  },
  showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
    cc.log("Android-showAdInRectangle");
    jsb.reflection.callStaticMethod(classJavaName, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, showAdRect);
  },
  rewoveAd: function rewoveAd(placementId) {
    cc.log("Android-rewoveAd");
    jsb.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
  },
  reShowAd: function reShowAd(placementId) {
    cc.log("Android-reShowAd");
    jsb.reflection.callStaticMethod(classJavaName, "reshow", "(Ljava/lang/String;)V", placementId);
  },
  hideAd: function hideAd(placementId) {
    cc.log("Android-hideAd");
    jsb.reflection.callStaticMethod(classJavaName, "hide", "(Ljava/lang/String;)V", placementId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxBbmRyb2lkXFxBVEFuZHJvaWRCYW5uZXJKUy5qcyJdLCJuYW1lcyI6WyJjbGFzc0phdmFOYW1lIiwiQVRBbmRyb2lkQmFubmVySlMiLCJsb2FkQmFubmVyIiwicGxhY2VtZW50SWQiLCJzZXR0aW5ncyIsImNjIiwibG9nIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJzZXRBZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNBZFJlYWR5Iiwic2hvd0FkSW5Qb3Npc3Rpb24iLCJwb3NpdGlvbiIsInNob3dBZEluUmVjdGFuZ2xlIiwic2hvd0FkUmVjdCIsInJld292ZUFkIiwicmVTaG93QWQiLCJoaWRlQWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBRyx1Q0FBcEI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBR0EsaUJBQWlCLElBQUk7QUFFekNDLEVBQUFBLFVBQVUsRUFBRyxvQkFBVUMsV0FBVixFQUF1QkMsUUFBdkIsRUFBaUM7QUFDMUNDLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLHdCQUF3QkYsUUFBL0I7QUFDTkcsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxhQUFoQyxFQUErQyxNQUEvQyxFQUF1RCx5Q0FBdkQsRUFBa0dHLFdBQWxHLEVBQStHQyxRQUEvRztBQUNHLEdBTHdDO0FBT3pDTSxFQUFBQSxhQUFhLEVBQUcsdUJBQVVDLFFBQVYsRUFBb0I7QUFDaENOLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLHVCQUFQO0FBQ05DLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1QsYUFBaEMsRUFBK0MsZUFBL0MsRUFBZ0UsdUJBQWhFLEVBQXlGVyxRQUF6RjtBQUNHLEdBVndDO0FBWXpDQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVVULFdBQVYsRUFBdUI7QUFDL0JFLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLG9CQUFQO0FBQ0QsV0FBT0MsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDVCxhQUFoQyxFQUErQyxXQUEvQyxFQUE0RCx1QkFBNUQsRUFBcUZHLFdBQXJGLENBQVA7QUFBeUc7QUFDNUcsR0Fmd0M7QUFpQnpDVSxFQUFBQSxpQkFBaUIsRUFBRywyQkFBU1YsV0FBVCxFQUFzQlcsUUFBdEIsRUFBZ0M7QUFDaERULElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLDJCQUFQO0FBQ05DLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1QsYUFBaEMsRUFBK0MsaUJBQS9DLEVBQWtFLHlDQUFsRSxFQUE2R0csV0FBN0csRUFBMEhXLFFBQTFIO0FBQ0csR0FwQndDO0FBc0J6Q0MsRUFBQUEsaUJBQWlCLEVBQUcsMkJBQVNaLFdBQVQsRUFBc0JhLFVBQXRCLEVBQWtDO0FBQ2xEWCxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTywyQkFBUDtBQUNOQyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULGFBQWhDLEVBQStDLGNBQS9DLEVBQStELHlDQUEvRCxFQUEwR0csV0FBMUcsRUFBdUhhLFVBQXZIO0FBQ0csR0F6QndDO0FBMkJ6Q0MsRUFBQUEsUUFBUSxFQUFHLGtCQUFTZCxXQUFULEVBQXNCO0FBQzVCRSxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxrQkFBUDtBQUNOQyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULGFBQWhDLEVBQStDLFFBQS9DLEVBQXlELHVCQUF6RCxFQUFrRkcsV0FBbEY7QUFDRSxHQTlCd0M7QUFnQ3pDZSxFQUFBQSxRQUFRLEVBQUcsa0JBQVNmLFdBQVQsRUFBc0I7QUFDN0JFLElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPLGtCQUFQO0FBQ05DLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1QsYUFBaEMsRUFBK0MsUUFBL0MsRUFBeUQsdUJBQXpELEVBQWtGRyxXQUFsRjtBQUNHLEdBbkN3QztBQXFDekNnQixFQUFBQSxNQUFNLEVBQUcsZ0JBQVNoQixXQUFULEVBQXNCO0FBQzFCRSxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxnQkFBUDtBQUNOQyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NULGFBQWhDLEVBQStDLE1BQS9DLEVBQXVELHVCQUF2RCxFQUFnRkcsV0FBaEY7QUFDRTtBQXhDd0MsQ0FBN0M7QUE0Q0FpQixNQUFNLENBQUNDLE9BQVAsR0FBaUJwQixpQkFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjbGFzc0phdmFOYW1lID0gXCJjb20vYW55dGhpbmsvY29jb3Nqcy9BVEJhbm5lckpTQnJpZGdlXCI7XHJcbnZhciBBVEFuZHJvaWRCYW5uZXJKUyA9IEFUQW5kcm9pZEJhbm5lckpTIHx8IHtcclxuICBcclxuICAgIGxvYWRCYW5uZXIgOiBmdW5jdGlvbiAocGxhY2VtZW50SWQsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1sb2FkQmFubmVyOlwiICsgc2V0dGluZ3MpO1xyXG5cdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcImxvYWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgcGxhY2VtZW50SWQsIHNldHRpbmdzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0QWRMaXN0ZW5lciA6IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgIGNjLmxvZyhcIkFuZHJvaWQtc2V0QWRMaXN0ZW5lclwiKTtcclxuXHRcdGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJzZXRBZExpc3RlbmVyXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGxpc3RlbmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzQWRSZWFkeSA6IGZ1bmN0aW9uIChwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgICBjYy5sb2coXCJBbmRyb2lkLWhhc0FkUmVhZHlcIik7XHJcbiAgICAgICAgcmV0dXJuIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJpc0FkUmVhZHlcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVpcIiwgcGxhY2VtZW50SWQpOztcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkSW5Qb3Npc3Rpb24gOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgcG9zaXRpb24pIHtcclxuICAgICAgICBjYy5sb2coXCJBbmRyb2lkLXNob3dBZEluUG9zaXN0aW9uXCIpO1xyXG5cdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcInNob3dXaXRoUG9zdGlvblwiLCBcIihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspVlwiLCBwbGFjZW1lbnRJZCwgcG9zaXRpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93QWRJblJlY3RhbmdsZSA6IGZ1bmN0aW9uKHBsYWNlbWVudElkLCBzaG93QWRSZWN0KSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1zaG93QWRJblJlY3RhbmdsZVwiKTtcclxuXHRcdGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJzaG93V2l0aFJlY3RcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgcGxhY2VtZW50SWQsIHNob3dBZFJlY3QpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcmV3b3ZlQWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgICBjYy5sb2coXCJBbmRyb2lkLXJld292ZUFkXCIpO1xyXG5cdFx0IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJyZW1vdmVcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgcGxhY2VtZW50SWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZVNob3dBZCA6IGZ1bmN0aW9uKHBsYWNlbWVudElkKSB7XHJcbiAgICAgICAgY2MubG9nKFwiQW5kcm9pZC1yZVNob3dBZFwiKTtcclxuXHRcdGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJyZXNob3dcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgcGxhY2VtZW50SWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlQWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgICBjYy5sb2coXCJBbmRyb2lkLWhpZGVBZFwiKTtcclxuXHRcdCBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwiaGlkZVwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBwbGFjZW1lbnRJZCk7XHJcbiAgICB9XHJcbiAgXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFUQW5kcm9pZEJhbm5lckpTOyJdfQ==