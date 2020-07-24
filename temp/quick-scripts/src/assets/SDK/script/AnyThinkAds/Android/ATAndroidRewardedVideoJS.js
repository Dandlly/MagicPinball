"use strict";
cc._RF.push(module, '86d80XErzRN/5FbSyffHIGN', 'ATAndroidRewardedVideoJS');
// SDK/script/AnyThinkAds/Android/ATAndroidRewardedVideoJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATRewardedVideoJSBridge";
var ATAndroidRewardedVideoJS = ATAndroidRewardedVideoJS || {
  loadRewardedVideo: function loadRewardedVideo(placementId, settings) {
    cc.log("Android-loadRewardedVideo");
    jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
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
    cc.log("Android-rv_showAd:" + placementId);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    cc.log("Android-rv_showAdInScenario:" + placementId + "---" + scenario);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
  }
};
module.exports = ATAndroidRewardedVideoJS;

cc._RF.pop();