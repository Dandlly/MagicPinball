
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSBannerJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4d951eDhdCO41Twj/Orjic', 'ATiOSBannerJS');
// SDK/script/AnyThinkAds/iOS/ATiOSBannerJS.js

"use strict";

var ATiOSJS = require("ATiOSJS");

var OC_WRAPPER_CLASS = "ATBannerAdWrapper";
var ATiOSBannerJS = ATiOSBannerJS || {
  loadBanner: function loadBanner(placementId, extra) {
    ATiOSJS.printJsLog("ATiOSBannerJS::loadBanner(" + placementId + ", " + extra + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadBannerWithPlacementID:extra:", placementId, extra);
  },
  setAdListener: function setAdListener(listener) {
    ATiOSJS.printJsLog("ATiOSBannerJS::setAdListener(" + listener + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    ATiOSJS.printJsLog("ATiOSBannerJS::hasAdReady(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "bannerReadyForPlacementID:", placementId);
  },
  showAdInPosistion: function showAdInPosistion(placementId, position) {
    ATiOSJS.printJsLog("ATiOSBannerJS::showAdInPosistion(" + placementId + ", " + position + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:position:", placementId, position);
  },
  showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
    ATiOSJS.printJsLog("ATiOSBannerJS::showAdInRectangle(" + placementId + ", " + showAdRect + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:rect:", placementId, showAdRect);
  },
  rewoveAd: function rewoveAd(placementId) {
    ATiOSJS.printJsLog("ATiOSBannerJS::rewoveAd(" + placementId + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "rewoveAd:", placementId);
  },
  reShowAd: function reShowAd(placementId) {
    ATiOSJS.printJsLog("ATiOSBannerJS::reShowAd(" + placementId + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "reShowAd:", placementId);
  },
  hideAd: function hideAd(placementId) {
    ATiOSJS.printJsLog("ATiOSBannerJS::hideAd(" + placementId + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "hideAd:", placementId);
  }
};
module.exports = ATiOSBannerJS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXEFueVRoaW5rQWRzXFxpT1NcXEFUaU9TQmFubmVySlMuanMiXSwibmFtZXMiOlsiQVRpT1NKUyIsInJlcXVpcmUiLCJPQ19XUkFQUEVSX0NMQVNTIiwiQVRpT1NCYW5uZXJKUyIsImxvYWRCYW5uZXIiLCJwbGFjZW1lbnRJZCIsImV4dHJhIiwicHJpbnRKc0xvZyIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwic2V0QWRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzQWRSZWFkeSIsInNob3dBZEluUG9zaXN0aW9uIiwicG9zaXRpb24iLCJzaG93QWRJblJlY3RhbmdsZSIsInNob3dBZFJlY3QiLCJyZXdvdmVBZCIsInJlU2hvd0FkIiwiaGlkZUFkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLG1CQUF6QjtBQUNBLElBQUlDLGFBQWEsR0FBR0EsYUFBYSxJQUFJO0FBQ2pDQyxFQUFBQSxVQUFVLEVBQUUsb0JBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ3JDTixJQUFBQSxPQUFPLENBQUNPLFVBQVIsQ0FBbUIsK0JBQStCRixXQUEvQixHQUE2QyxJQUE3QyxHQUFvREMsS0FBcEQsR0FBNEQsR0FBL0U7QUFDQUUsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixnQkFBaEMsRUFBa0Qsa0NBQWxELEVBQXNGRyxXQUF0RixFQUFtR0MsS0FBbkc7QUFDSCxHQUpnQztBQU1qQ0ssRUFBQUEsYUFBYSxFQUFHLHVCQUFVQyxRQUFWLEVBQW9CO0FBQ2hDWixJQUFBQSxPQUFPLENBQUNPLFVBQVIsQ0FBbUIsa0NBQWtDSyxRQUFsQyxHQUE2QyxHQUFoRTtBQUNBSixJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NSLGdCQUFoQyxFQUFrRCxlQUFsRCxFQUFtRVUsUUFBbkU7QUFDSCxHQVRnQztBQVdqQ0MsRUFBQUEsVUFBVSxFQUFHLG9CQUFTUixXQUFULEVBQXNCO0FBQy9CTCxJQUFBQSxPQUFPLENBQUNPLFVBQVIsQ0FBbUIsK0JBQStCRixXQUEvQixHQUE2QyxHQUFoRTtBQUNBLFdBQU9HLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsZ0JBQWhDLEVBQWtELDRCQUFsRCxFQUFnRkcsV0FBaEYsQ0FBUDtBQUNILEdBZGdDO0FBZ0JqQ1MsRUFBQUEsaUJBQWlCLEVBQUcsMkJBQVNULFdBQVQsRUFBc0JVLFFBQXRCLEVBQWdDO0FBQ2hEZixJQUFBQSxPQUFPLENBQUNPLFVBQVIsQ0FBbUIsc0NBQXNDRixXQUF0QyxHQUFvRCxJQUFwRCxHQUEyRFUsUUFBM0QsR0FBc0UsR0FBekY7QUFDQVAsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixnQkFBaEMsRUFBa0QscUNBQWxELEVBQXlGRyxXQUF6RixFQUFzR1UsUUFBdEc7QUFDSCxHQW5CZ0M7QUFxQmpDQyxFQUFBQSxpQkFBaUIsRUFBRywyQkFBU1gsV0FBVCxFQUFzQlksVUFBdEIsRUFBa0M7QUFDbERqQixJQUFBQSxPQUFPLENBQUNPLFVBQVIsQ0FBbUIsc0NBQXNDRixXQUF0QyxHQUFvRCxJQUFwRCxHQUEyRFksVUFBM0QsR0FBd0UsR0FBM0Y7QUFDQVQsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixnQkFBaEMsRUFBa0QsaUNBQWxELEVBQXFGRyxXQUFyRixFQUFrR1ksVUFBbEc7QUFDSCxHQXhCZ0M7QUEwQmpDQyxFQUFBQSxRQUFRLEVBQUcsa0JBQVNiLFdBQVQsRUFBc0I7QUFDN0JMLElBQUFBLE9BQU8sQ0FBQ08sVUFBUixDQUFtQiw2QkFBNkJGLFdBQTdCLEdBQTJDLEdBQTlEO0FBQ0FHLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQ1IsZ0JBQWhDLEVBQWtELFdBQWxELEVBQStERyxXQUEvRDtBQUNILEdBN0JnQztBQStCakNjLEVBQUFBLFFBQVEsRUFBRyxrQkFBU2QsV0FBVCxFQUFzQjtBQUM3QkwsSUFBQUEsT0FBTyxDQUFDTyxVQUFSLENBQW1CLDZCQUE2QkYsV0FBN0IsR0FBMkMsR0FBOUQ7QUFDQUcsSUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDUixnQkFBaEMsRUFBa0QsV0FBbEQsRUFBK0RHLFdBQS9EO0FBQ0gsR0FsQ2dDO0FBb0NqQ2UsRUFBQUEsTUFBTSxFQUFHLGdCQUFTZixXQUFULEVBQXNCO0FBQzNCTCxJQUFBQSxPQUFPLENBQUNPLFVBQVIsQ0FBbUIsMkJBQTJCRixXQUEzQixHQUF5QyxHQUE1RDtBQUNBRyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0NSLGdCQUFoQyxFQUFrRCxTQUFsRCxFQUE2REcsV0FBN0Q7QUFDSDtBQXZDZ0MsQ0FBckM7QUEwQ0FnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixhQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFUaU9TSlMgPSByZXF1aXJlKFwiQVRpT1NKU1wiKTtcclxuY29uc3QgT0NfV1JBUFBFUl9DTEFTUyA9IFwiQVRCYW5uZXJBZFdyYXBwZXJcIjtcclxudmFyIEFUaU9TQmFubmVySlMgPSBBVGlPU0Jhbm5lckpTIHx8IHtcclxuICAgIGxvYWRCYW5uZXI6IGZ1bmN0aW9uKHBsYWNlbWVudElkLCBleHRyYSkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TQmFubmVySlM6OmxvYWRCYW5uZXIoXCIgKyBwbGFjZW1lbnRJZCArIFwiLCBcIiArIGV4dHJhICsgXCIpXCIpO1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfV1JBUFBFUl9DTEFTUywgXCJsb2FkQmFubmVyV2l0aFBsYWNlbWVudElEOmV4dHJhOlwiLCBwbGFjZW1lbnRJZCwgZXh0cmEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBZExpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgQVRpT1NKUy5wcmludEpzTG9nKFwiQVRpT1NCYW5uZXJKUzo6c2V0QWRMaXN0ZW5lcihcIiArIGxpc3RlbmVyICsgXCIpXCIpO1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfV1JBUFBFUl9DTEFTUywgXCJzZXREZWxlZ2F0ZXM6XCIsIGxpc3RlbmVyKTtcclxuICAgIH0sXHJcbiAgXHJcbiAgICBoYXNBZFJlYWR5IDogZnVuY3Rpb24ocGxhY2VtZW50SWQpIHtcclxuICAgICAgICBBVGlPU0pTLnByaW50SnNMb2coXCJBVGlPU0Jhbm5lckpTOjpoYXNBZFJlYWR5KFwiICsgcGxhY2VtZW50SWQgKyBcIilcIik7XHJcbiAgICAgICAgcmV0dXJuIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfV1JBUFBFUl9DTEFTUywgXCJiYW5uZXJSZWFkeUZvclBsYWNlbWVudElEOlwiLCBwbGFjZW1lbnRJZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dBZEluUG9zaXN0aW9uIDogZnVuY3Rpb24ocGxhY2VtZW50SWQsIHBvc2l0aW9uKSB7IFxyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TQmFubmVySlM6OnNob3dBZEluUG9zaXN0aW9uKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBwb3NpdGlvbiArIFwiKVwiKTtcclxuICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKE9DX1dSQVBQRVJfQ0xBU1MsIFwic2hvd0Jhbm5lcldpdGhQbGFjZW1lbnRJRDpwb3NpdGlvbjpcIiwgcGxhY2VtZW50SWQsIHBvc2l0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkSW5SZWN0YW5nbGUgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCwgc2hvd0FkUmVjdCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TQmFubmVySlM6OnNob3dBZEluUmVjdGFuZ2xlKFwiICsgcGxhY2VtZW50SWQgKyBcIiwgXCIgKyBzaG93QWRSZWN0ICsgXCIpXCIpO1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfV1JBUFBFUl9DTEFTUywgXCJzaG93QmFubmVyV2l0aFBsYWNlbWVudElEOnJlY3Q6XCIsIHBsYWNlbWVudElkLCBzaG93QWRSZWN0KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmV3b3ZlQWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TQmFubmVySlM6OnJld292ZUFkKFwiICsgcGxhY2VtZW50SWQgKyBcIilcIik7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChPQ19XUkFQUEVSX0NMQVNTLCBcInJld292ZUFkOlwiLCBwbGFjZW1lbnRJZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlU2hvd0FkIDogZnVuY3Rpb24ocGxhY2VtZW50SWQpIHtcclxuICAgICAgICBBVGlPU0pTLnByaW50SnNMb2coXCJBVGlPU0Jhbm5lckpTOjpyZVNob3dBZChcIiArIHBsYWNlbWVudElkICsgXCIpXCIpO1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfV1JBUFBFUl9DTEFTUywgXCJyZVNob3dBZDpcIiwgcGxhY2VtZW50SWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlQWQgOiBmdW5jdGlvbihwbGFjZW1lbnRJZCkge1xyXG4gICAgICAgIEFUaU9TSlMucHJpbnRKc0xvZyhcIkFUaU9TQmFubmVySlM6OmhpZGVBZChcIiArIHBsYWNlbWVudElkICsgXCIpXCIpO1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoT0NfV1JBUFBFUl9DTEFTUywgXCJoaWRlQWQ6XCIsIHBsYWNlbWVudElkKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQVRpT1NCYW5uZXJKUztcclxuIl19