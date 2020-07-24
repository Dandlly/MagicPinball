"use strict";
cc._RF.push(module, 'fe489+SD7xMGq/GJd5fr6ld', 'ATiOSInterstitialJS');
// SDK/script/AnyThinkAds/iOS/ATiOSInterstitialJS.js

"use strict";

var ATiOSJS = require("ATiOSJS");

var OC_WRAPPER_CLASS = "ATInterstitialAdWrapper";
var ATiOSInterstitialJS = ATiOSInterstitialJS || {
  loadInterstitial: function loadInterstitial(placementId) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + placementId + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadInterstitialWithPlacementID:extra:", placementId, null);
  },
  setAdListener: function setAdListener(listener) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::setAdListener(" + listener + ")");
    jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::hasAdReady(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "interstitialReadyForPlacementID:", placementId);
  },
  setUserData: function setUserData(placementId, userId, userData) {
    cc.log("Android-setUserData");
  },
  showAd: function showAd(placementId) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, null);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ", " + scenario + ")");
    return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, scenario);
  }
};
module.exports = ATiOSInterstitialJS;

cc._RF.pop();