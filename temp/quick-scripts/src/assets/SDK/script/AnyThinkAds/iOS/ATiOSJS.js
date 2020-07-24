"use strict";
cc._RF.push(module, 'dc9fdyQKA1AEqs/qTXKxw8e', 'ATiOSJS');
// SDK/script/AnyThinkAds/iOS/ATiOSJS.js

"use strict";

var OC_ATSDK_MANAGER_CLASS = "ATSDKManager";
var OC_BIRDGE_CLASS = "ATJSBridge";
var ATiOSJS = ATiOSJS || {
  initSDK: function initSDK(appid, appkey) {
    this.printJsLog("ATiOSJS::initSDK(" + appid + "," + appkey + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "startWithAppID:appKey:", appid, appkey);
  },
  initCustomMap: function initCustomMap(customMap) {
    this.printJsLog("ATiOSJS::initCustomMap(" + customMap + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:", customMap);
  },
  setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
    this.printJsLog("ATiOSJS::setPlacementCustomMap(" + placmentId + ", " + customMap + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:forPlacementID:", customMap, placmentId);
  },
  setGDPRLevel: function setGDPRLevel(level) {
    this.printJsLog("ATiOSJS::setGDPRLevel(" + level + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDataConsent:", level);
  },
  getGDPRLevel: function getGDPRLevel() {
    this.printJsLog("ATiOSJS::getGDPRLevel()");
    return jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "dataConsent");
  },
  getUserLocation: function getUserLocation(callbackMethod) {
    this.printJsLog("ATiOSJS::getUserLocation(" + callbackMethod + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "getUserLocationWithCallback:", callbackMethod);
  },
  showGDPRAuth: function showGDPRAuth() {
    this.printJsLog("ATiOSJS::showGDPRAuth()");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "presentDataConsentDialog");
  },
  setLogDebug: function setLogDebug(debug) {
    this.printJsLog("ATiOSJS::setLogDebug(" + debug + ")");
    jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDebugLog:", debug);
  },
  printJsLog: function printJsLog(msg) {
    if (undefined != msg && msg != null) {
      jsb.reflection.callStaticMethod(OC_BIRDGE_CLASS, "log:", msg);
    }
  }
};
module.exports = ATiOSJS;

cc._RF.pop();