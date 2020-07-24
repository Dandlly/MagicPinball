"use strict";
cc._RF.push(module, 'f6cafvJ9ZhP660O5tpX6Kf7', 'ATAndroidNativeJS');
// SDK/script/AnyThinkAds/Android/ATAndroidNativeJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATNativeJSBridge";
var ATAndroidBannerJS = ATAndroidBannerJS || {
  loadNative: function loadNative(placementId, settings) {
    cc.log("Android-loadNative");
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
  showAd: function showAd(placementId, adViewProperty) {
    cc.log("Android-showAd");
    jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty);
  },
  rewoveAd: function rewoveAd(placementId) {
    cc.log("Android-rewoveAd");
    jsb.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
  }
};
module.exports = ATAndroidBannerJS;

cc._RF.pop();