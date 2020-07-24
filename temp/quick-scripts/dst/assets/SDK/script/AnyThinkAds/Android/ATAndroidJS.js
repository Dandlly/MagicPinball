
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd41e4p4ko9I44l3fEjYo0eQ', 'ATAndroidJS');
// SDK/script/AnyThinkAds/Android/ATAndroidJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATJSBridge";
var ATAndroidJS = ATAndroidJS || {
  printJsLog: function printJsLog(msg) {
    if (undefined != msg && msg != null) {
      jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "AT-Cocos-JS", msg);
    }
  },
  initSDK: function initSDK(appid, appkey) {
    jsb.reflection.callStaticMethod(classJavaName, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", appid, appkey);
  },
  initCustomMap: function initCustomMap(customMap) {
    jsb.reflection.callStaticMethod(classJavaName, "initCustomMap", "(Ljava/lang/String;)V", customMap);
  },
  setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
    jsb.reflection.callStaticMethod(classJavaName, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", placmentId, customMap);
  },
  setGDPRLevel: function setGDPRLevel(level) {
    jsb.reflection.callStaticMethod(classJavaName, "setGDPRLevel", "(I)V", level);
  },
  getGDPRLevel: function getGDPRLevel() {
    return jsb.reflection.callStaticMethod(classJavaName, "getGDPRLevel", "()I");
  },
  getUserLocation: function getUserLocation(callbackMethod) {
    jsb.reflection.callStaticMethod(classJavaName, "getUserLocation", "(Ljava/lang/String;)V", callbackMethod);
  },
  showGDPRAuth: function showGDPRAuth() {
    jsb.reflection.callStaticMethod(classJavaName, "showGDPRAuth", "()V");
  },
  setLogDebug: function setLogDebug(debug) {
    jsb.reflection.callStaticMethod(classJavaName, "setLogDebug", "(Z)V", debug);
  }
};
module.exports = ATAndroidJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxBbmRyb2lkXFxBVEFuZHJvaWRKUy5qcyJdLCJuYW1lcyI6WyJjbGFzc0phdmFOYW1lIiwiQVRBbmRyb2lkSlMiLCJwcmludEpzTG9nIiwibXNnIiwidW5kZWZpbmVkIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJpbml0U0RLIiwiYXBwaWQiLCJhcHBrZXkiLCJpbml0Q3VzdG9tTWFwIiwiY3VzdG9tTWFwIiwic2V0UGxhY2VtZW50Q3VzdG9tTWFwIiwicGxhY21lbnRJZCIsInNldEdEUFJMZXZlbCIsImxldmVsIiwiZ2V0R0RQUkxldmVsIiwiZ2V0VXNlckxvY2F0aW9uIiwiY2FsbGJhY2tNZXRob2QiLCJzaG93R0RQUkF1dGgiLCJzZXRMb2dEZWJ1ZyIsImRlYnVnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUcsaUNBQXBCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQSxXQUFXLElBQUk7QUFDN0JDLEVBQUFBLFVBQVUsRUFBRyxvQkFBU0MsR0FBVCxFQUFjO0FBQ3ZCLFFBQUlDLFNBQVMsSUFBSUQsR0FBYixJQUFvQkEsR0FBRyxJQUFJLElBQS9CLEVBQXFDO0FBQ2pDRSxNQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0Msa0JBQWhDLEVBQW9ELEdBQXBELEVBQXlELHlDQUF6RCxFQUFvRyxhQUFwRyxFQUFtSEosR0FBbkg7QUFDSDtBQUNKLEdBTDRCO0FBTzdCSyxFQUFBQSxPQUFPLEVBQUcsaUJBQVNDLEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCO0FBQzlCTCxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NQLGFBQWhDLEVBQStDLFNBQS9DLEVBQTBELHlDQUExRCxFQUFxR1MsS0FBckcsRUFBNEdDLE1BQTVHO0FBQ0gsR0FUNEI7QUFXN0JDLEVBQUFBLGFBQWEsRUFBRyx1QkFBU0MsU0FBVCxFQUFvQjtBQUNoQ1AsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUCxhQUFoQyxFQUErQyxlQUEvQyxFQUFnRSx1QkFBaEUsRUFBeUZZLFNBQXpGO0FBQ0gsR0FiNEI7QUFlN0JDLEVBQUFBLHFCQUFxQixFQUFHLCtCQUFTQyxVQUFULEVBQXFCRixTQUFyQixFQUFnQztBQUNwRFAsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUCxhQUFoQyxFQUErQyx1QkFBL0MsRUFBd0UseUNBQXhFLEVBQW1IYyxVQUFuSCxFQUErSEYsU0FBL0g7QUFDSCxHQWpCNEI7QUFtQjdCRyxFQUFBQSxZQUFZLEVBQUcsc0JBQVNDLEtBQVQsRUFBZ0I7QUFDM0JYLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1AsYUFBaEMsRUFBK0MsY0FBL0MsRUFBK0QsTUFBL0QsRUFBdUVnQixLQUF2RTtBQUNILEdBckI0QjtBQXVCN0JDLEVBQUFBLFlBQVksRUFBRyx3QkFBVztBQUN0QixXQUFPWixHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NQLGFBQWhDLEVBQStDLGNBQS9DLEVBQStELEtBQS9ELENBQVA7QUFDSCxHQXpCNEI7QUEyQjdCa0IsRUFBQUEsZUFBZSxFQUFHLHlCQUFTQyxjQUFULEVBQXlCO0FBQ3ZDZCxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NQLGFBQWhDLEVBQStDLGlCQUEvQyxFQUFrRSx1QkFBbEUsRUFBMkZtQixjQUEzRjtBQUNILEdBN0I0QjtBQStCN0JDLEVBQUFBLFlBQVksRUFBRyx3QkFBWTtBQUN2QmYsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUCxhQUFoQyxFQUErQyxjQUEvQyxFQUErRCxLQUEvRDtBQUNILEdBakM0QjtBQW1DN0JxQixFQUFBQSxXQUFXLEVBQUcscUJBQVVDLEtBQVYsRUFBaUI7QUFDM0JqQixJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NQLGFBQWhDLEVBQStDLGFBQS9DLEVBQThELE1BQTlELEVBQXNFc0IsS0FBdEU7QUFDSDtBQXJDNEIsQ0FBakM7QUF5Q0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLFdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2xhc3NKYXZhTmFtZSA9IFwiY29tL2FueXRoaW5rL2NvY29zanMvQVRKU0JyaWRnZVwiO1xyXG52YXIgQVRBbmRyb2lkSlMgPSBBVEFuZHJvaWRKUyB8fCB7XHJcbiAgICBwcmludEpzTG9nIDogZnVuY3Rpb24obXNnKSB7XHJcbiAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSBtc2cgJiYgbXNnICE9IG51bGwpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImFuZHJvaWQvdXRpbC9Mb2dcIiwgXCJpXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylJXCIsIFwiQVQtQ29jb3MtSlNcIiwgbXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRTREsgOiBmdW5jdGlvbihhcHBpZCwgYXBwa2V5KSB7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcImluaXRTREtcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgYXBwaWQsIGFwcGtleSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRDdXN0b21NYXAgOiBmdW5jdGlvbihjdXN0b21NYXApIHsgICAgICBcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwiaW5pdEN1c3RvbU1hcFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBjdXN0b21NYXApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQbGFjZW1lbnRDdXN0b21NYXAgOiBmdW5jdGlvbihwbGFjbWVudElkLCBjdXN0b21NYXApIHtcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwic2V0UGxhY2VtZW50Q3VzdG9tTWFwXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHBsYWNtZW50SWQsIGN1c3RvbU1hcCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEdEUFJMZXZlbCA6IGZ1bmN0aW9uKGxldmVsKSB7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcInNldEdEUFJMZXZlbFwiLCBcIihJKVZcIiwgbGV2ZWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRHRFBSTGV2ZWwgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcImdldEdEUFJMZXZlbFwiLCBcIigpSVwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VXNlckxvY2F0aW9uIDogZnVuY3Rpb24oY2FsbGJhY2tNZXRob2QpIHtcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKGNsYXNzSmF2YU5hbWUsIFwiZ2V0VXNlckxvY2F0aW9uXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGNhbGxiYWNrTWV0aG9kKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0dEUFJBdXRoIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoY2xhc3NKYXZhTmFtZSwgXCJzaG93R0RQUkF1dGhcIiwgXCIoKVZcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldExvZ0RlYnVnIDogZnVuY3Rpb24gKGRlYnVnKSB7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChjbGFzc0phdmFOYW1lLCBcInNldExvZ0RlYnVnXCIsIFwiKFopVlwiLCBkZWJ1Zyk7XHJcbiAgICB9XHJcbiAgXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFUQW5kcm9pZEpTOyJdfQ==