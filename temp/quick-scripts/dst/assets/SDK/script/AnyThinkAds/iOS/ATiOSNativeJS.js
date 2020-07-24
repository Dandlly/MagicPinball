
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSNativeJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '879ddiwctlO5pR+qZQ87WJh', 'ATiOSNativeJS');
// SDK/script/AnyThinkAds/iOS/ATiOSNativeJS.js

"use strict";

var ATiOSJS = require("ATiOSJS");

var OC_WRAPPER_CLASS = "ATNativeAdWrapper";
var ATiOSNativeJS = ATiOSNativeJS || {
  loadNative: function loadNative(placementId, settings) {
    ATiOSJS.printJsLog("ATiOSBannerJS::loadNative(" + placementId + ", " + settings + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadNativeWithPlacementID:extra:", placementId, settings);
  },
  setAdListener: function setAdListener(listener) {
    ATiOSJS.printJsLog("ATiOSNativeJS::setAdListener(" + listener + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    ATiOSJS.printJsLog("ATiOSNativeJS::hasAdReady(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "nativeReadyForPlacementID:", placementId);
  },
  showAd: function showAd(placementId, adViewProperty) {
    ATiOSJS.printJsLog("ATiOSNativeJS::showAd(" + placementId + ", " + adViewProperty + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showNativeWithPlacementID:metrics:", placementId, adViewProperty);
  },
  rewoveAd: function rewoveAd(placementId) {
    ATiOSJS.printJsLog("ATiOSNativeJS::rewoveAd(" + placementId + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeNativeWithPlacementID:", placementId);
  }
};
module.exports = ATiOSNativeJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxpT1NcXEFUaU9TTmF0aXZlSlMuanMiXSwibmFtZXMiOlsiQVRpT1NKUyIsInJlcXVpcmUiLCJPQ19XUkFQUEVSX0NMQVNTIiwiQVRpT1NOYXRpdmVKUyIsImxvYWROYXRpdmUiLCJwbGFjZW1lbnRJZCIsInNldHRpbmdzIiwicHJpbnRKc0xvZyIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwic2V0QWRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzQWRSZWFkeSIsInNob3dBZCIsImFkVmlld1Byb3BlcnR5IiwicmV3b3ZlQWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsbUJBQXpCO0FBQ0EsSUFBSUMsYUFBYSxHQUFHQSxhQUFhLElBQUk7QUFDakNDLEVBQUFBLFVBQVUsRUFBRyxvQkFBU0MsV0FBVCxFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDekNOLElBQUFBLE9BQU8sQ0FBQ08sVUFBUixDQUFtQiwrQkFBK0JGLFdBQS9CLEdBQTZDLElBQTdDLEdBQW9EQyxRQUFwRCxHQUErRCxHQUFsRjtBQUNBRSxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NSLGdCQUFoQyxFQUFrRCxrQ0FBbEQsRUFBc0ZHLFdBQXRGLEVBQW1HQyxRQUFuRztBQUNILEdBSmdDO0FBTWpDSyxFQUFBQSxhQUFhLEVBQUcsdUJBQVVDLFFBQVYsRUFBb0I7QUFDaENaLElBQUFBLE9BQU8sQ0FBQ08sVUFBUixDQUFtQixrQ0FBa0NLLFFBQWxDLEdBQTZDLEdBQWhFO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsZ0JBQWhDLEVBQWtELGVBQWxELEVBQW1FVSxRQUFuRTtBQUNILEdBVGdDO0FBV2pDQyxFQUFBQSxVQUFVLEVBQUcsb0JBQVNSLFdBQVQsRUFBc0I7QUFDL0JMLElBQUFBLE9BQU8sQ0FBQ08sVUFBUixDQUFtQiwrQkFBK0JGLFdBQS9CLEdBQTZDLEdBQWhFO0FBQ0EsV0FBT0csR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixnQkFBaEMsRUFBa0QsNEJBQWxELEVBQWdGRyxXQUFoRixDQUFQO0FBQ0gsR0FkZ0M7QUFnQmpDUyxFQUFBQSxNQUFNLEVBQUcsZ0JBQVNULFdBQVQsRUFBc0JVLGNBQXRCLEVBQXNDO0FBQzNDZixJQUFBQSxPQUFPLENBQUNPLFVBQVIsQ0FBbUIsMkJBQTJCRixXQUEzQixHQUF5QyxJQUF6QyxHQUFnRFUsY0FBaEQsR0FBaUUsR0FBcEY7QUFDQVAsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixnQkFBaEMsRUFBa0Qsb0NBQWxELEVBQXdGRyxXQUF4RixFQUFxR1UsY0FBckc7QUFDSCxHQW5CZ0M7QUFxQmpDQyxFQUFBQSxRQUFRLEVBQUcsa0JBQVNYLFdBQVQsRUFBc0I7QUFDN0JMLElBQUFBLE9BQU8sQ0FBQ08sVUFBUixDQUFtQiw2QkFBNkJGLFdBQTdCLEdBQTJDLEdBQTlEO0FBQ0FHLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsZ0JBQWhDLEVBQWtELDhCQUFsRCxFQUFrRkcsV0FBbEY7QUFDSDtBQXhCZ0MsQ0FBckM7QUEyQkFZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsYUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBVGlPU0pTID0gcmVxdWlyZShcIkFUaU9TSlNcIik7XHJcbmNvbnN0IE9DX1dSQVBQRVJfQ0xBU1MgPSBcIkFUTmF0aXZlQWRXcmFwcGVyXCI7XHJcbnZhciBBVGlPU05hdGl2ZUpTID0gQVRpT1NOYXRpdmVKUyB8fCB7XHJcbiAgICBsb2FkTmF0aXZlIDogZnVuY3Rpb24ocGxhY2VtZW50SWQsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgQVRpT1NKUy5wcmludEpzTG9nKFwiQVRpT1NCYW5uZXJKUzo6bG9hZE5hdGl2ZShcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgc2V0dGluZ3MgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcImxvYWROYXRpdmVXaXRoUGxhY2VtZW50SUQ6ZXh0cmE6XCIsIHBsYWNlbWVudElkLCBzZXR0aW5ncyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEFkTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICBBVGlPU0pTLnByaW50SnNMb2coXCJBVGlPU05hdGl2ZUpTOjpzZXRBZExpc3RlbmVyKFwiICsgbGlzdGVuZXIgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcInNldERlbGVnYXRlczpcIiwgbGlzdGVuZXIpO1xyXG4gICAgfSxcclxuICBcclxuICAgIGhhc0FkUmVhZHkgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TTmF0aXZlSlM6Omhhc0FkUmVhZHkoXCIgKyBwbGFjZW1lbnRJZCArIFwiKVwiKTtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcIm5hdGl2ZVJlYWR5Rm9yUGxhY2VtZW50SUQ6XCIsIHBsYWNlbWVudElkKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkIDogZnVuY3Rpb24ocGxhY2VtZW50SWQsIGFkVmlld1Byb3BlcnR5KSB7IFxyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TTmF0aXZlSlM6OnNob3dBZChcIiArIHBsYWNlbWVudElkICsgXCIsIFwiICsgYWRWaWV3UHJvcGVydHkgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcInNob3dOYXRpdmVXaXRoUGxhY2VtZW50SUQ6bWV0cmljczpcIiwgcGxhY2VtZW50SWQsIGFkVmlld1Byb3BlcnR5KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmV3b3ZlQWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TTmF0aXZlSlM6OnJld292ZUFkKFwiICsgcGxhY2VtZW50SWQgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcInJlbW92ZU5hdGl2ZVdpdGhQbGFjZW1lbnRJRDpcIiwgcGxhY2VtZW50SWQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBVGlPU05hdGl2ZUpTO1xyXG4iXX0=