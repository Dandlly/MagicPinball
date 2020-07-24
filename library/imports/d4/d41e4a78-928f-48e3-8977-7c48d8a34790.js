"use strict";
cc._RF.push(module, 'd41e4p4ko9I44l3fEjYo0eQ', 'ATAndroidJS');
// SDK/script/AnyThinkAds/Android/ATAndroidJS.js

"use strict";

var classJavaName = "com/anythink/cocosjs/ATJSBridge";
var ATAndroidJS = ATAndroidJS || {
  printJsLog: function printJsLog(msg) {
    if (undefined != msg && msg != null) {
      jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "AT-Cocos-JS", msg);
    }
  },
  initSDK: function initSDK(appid, appkey) {
    jsb.reflection.callStaticMethod(classJavaName, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", appid, appkey);
  },
  initCustomMap: function initCustomMap(customMap) {
    jsb.reflection.callStaticMethod(classJavaName, "initCustomMap", "(Ljava/lang/String;)V", customMap);
  },
  setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
    jsb.reflection.callStaticMethod(classJavaName, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", placmentId, customMap);
  },
  setGDPRLevel: function setGDPRLevel(level) {
    jsb.reflection.callStaticMethod(classJavaName, "setGDPRLevel", "(I)V", level);
  },
  getGDPRLevel: function getGDPRLevel() {
    return jsb.reflection.callStaticMethod(classJavaName, "getGDPRLevel", "()I");
  },
  getUserLocation: function getUserLocation(callbackMethod) {
    jsb.reflection.callStaticMethod(classJavaName, "getUserLocation", "(Ljava/lang/String;)V", callbackMethod);
  },
  showGDPRAuth: function showGDPRAuth() {
    jsb.reflection.callStaticMethod(classJavaName, "showGDPRAuth", "()V");
  },
  setLogDebug: function setLogDebug(debug) {
    jsb.reflection.callStaticMethod(classJavaName, "setLogDebug", "(Z)V", debug);
  }
};
module.exports = ATAndroidJS;

cc._RF.pop();