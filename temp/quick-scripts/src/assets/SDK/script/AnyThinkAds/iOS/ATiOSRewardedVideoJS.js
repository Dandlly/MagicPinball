"use strict";
cc._RF.push(module, 'a0e61Z+J79OzKNs0S1evcmU', 'ATiOSRewardedVideoJS');
// SDK/script/AnyThinkAds/iOS/ATiOSRewardedVideoJS.js

"use strict";

var ATiOSJS = require("ATiOSJS");

var OC_RV_WRAPPER_CLASS = "ATRewardedVideoWrapper";
var ATiOSRewardedVideoJS = ATiOSRewardedVideoJS || {
  loadRewardedVideo: function loadRewardedVideo(placementId, extra) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + placementId + ", " + extra + ")");
    jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "loadRewardedVideoWithPlacementID:extra:", placementId, extra);
  },
  setAdListener: function setAdListener(listener) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::setAdListener(" + listener + ")");
    jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
  },
  hasAdReady: function hasAdReady(placementId) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "rewardedVideoReadyForPlacementID:", placementId);
  },
  setUserData: function setUserData(placementId, userId, userData) {
    cc.log("Android-setUserData");
  },
  showAd: function showAd(placementId) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAd(" + placementId + ")");
    return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, null);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + placementId + ", " + scenario + ")");
    return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, scenario);
  }
};
module.exports = ATiOSRewardedVideoJS;

cc._RF.pop();