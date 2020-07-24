"use strict";
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