"use strict";
cc._RF.push(module, 'abc0crmB4lG14Lb2AHMMA/7', 'ATAndroidInterstitialJS');
// SDK/script/AnyThinkAds/Android/ATAndroidInterstitialJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATInterstitialJSBridge";
var ATAndroidInterstitialJS = ATAndroidInterstitialJS || {
  loadInterstitial: function loadInterstitial(placementId) {
    cc.log("Android-loadInterstitial");
    jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;)V", placementId);
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
    cc.log("Android-showAd:" + placementId);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
  },
  showAdInScenario: function showAdInScenario(placementId, scenario) {
    cc.log("Android-showAdInScenario:" + placementId + "---" + scenario);
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
  }
};
module.exports = ATAndroidInterstitialJS;

cc._RF.pop();