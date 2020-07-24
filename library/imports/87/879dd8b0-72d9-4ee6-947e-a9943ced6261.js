"use strict";
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