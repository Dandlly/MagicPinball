"use strict";
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