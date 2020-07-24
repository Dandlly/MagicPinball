window.__require = function t(e, o, n) {
function i(a, s) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var d = o[a] = {
exports: {}
};
e[a][0].call(d.exports, function(t) {
return i(e[a][1][t] || t);
}, d, d.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
ATAndroidBannerJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "605f1PDXJhOza9UfeFOGtJm", "ATAndroidBannerJS");
var n = "com/anythink/cocosjs/ATBannerJSBridge", i = i || {
loadBanner: function(t, e) {
cc.log("Android-loadBanner:" + e);
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
setAdListener: function(t) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", t);
},
hasAdReady: function(t) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", t);
},
showAdInPosistion: function(t, e) {
cc.log("Android-showAdInPosistion");
jsb.reflection.callStaticMethod(n, "showWithPostion", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
showAdInRectangle: function(t, e) {
cc.log("Android-showAdInRectangle");
jsb.reflection.callStaticMethod(n, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
rewoveAd: function(t) {
cc.log("Android-rewoveAd");
jsb.reflection.callStaticMethod(n, "remove", "(Ljava/lang/String;)V", t);
},
reShowAd: function(t) {
cc.log("Android-reShowAd");
jsb.reflection.callStaticMethod(n, "reshow", "(Ljava/lang/String;)V", t);
},
hideAd: function(t) {
cc.log("Android-hideAd");
jsb.reflection.callStaticMethod(n, "hide", "(Ljava/lang/String;)V", t);
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidInterstitialJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "abc0crmB4lG14Lb2AHMMA/7", "ATAndroidInterstitialJS");
var n = "com/anythink/cocosjs/ATInterstitialJSBridge", i = i || {
loadInterstitial: function(t) {
cc.log("Android-loadInterstitial");
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;)V", t);
},
setAdListener: function(t) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", t);
},
hasAdReady: function(t) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", t);
},
showAd: function(t) {
cc.log("Android-showAd:" + t);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;)V", t);
},
showAdInScenario: function(t, e) {
cc.log("Android-showAdInScenario:" + t + "---" + e);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d41e4p4ko9I44l3fEjYo0eQ", "ATAndroidJS");
var n = "com/anythink/cocosjs/ATJSBridge", i = i || {
printJsLog: function(t) {
void 0 != t && null != t && jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "AT-Cocos-JS", t);
},
initSDK: function(t, e) {
jsb.reflection.callStaticMethod(n, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
initCustomMap: function(t) {
jsb.reflection.callStaticMethod(n, "initCustomMap", "(Ljava/lang/String;)V", t);
},
setPlacementCustomMap: function(t, e) {
jsb.reflection.callStaticMethod(n, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
setGDPRLevel: function(t) {
jsb.reflection.callStaticMethod(n, "setGDPRLevel", "(I)V", t);
},
getGDPRLevel: function() {
return jsb.reflection.callStaticMethod(n, "getGDPRLevel", "()I");
},
getUserLocation: function(t) {
jsb.reflection.callStaticMethod(n, "getUserLocation", "(Ljava/lang/String;)V", t);
},
showGDPRAuth: function() {
jsb.reflection.callStaticMethod(n, "showGDPRAuth", "()V");
},
setLogDebug: function(t) {
jsb.reflection.callStaticMethod(n, "setLogDebug", "(Z)V", t);
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidNativeJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f6cafvJ9ZhP660O5tpX6Kf7", "ATAndroidNativeJS");
var n = "com/anythink/cocosjs/ATNativeJSBridge", i = i || {
loadNative: function(t, e) {
cc.log("Android-loadNative");
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
setAdListener: function(t) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", t);
},
hasAdReady: function(t) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", t);
},
showAd: function(t, e) {
cc.log("Android-showAd");
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
rewoveAd: function(t) {
cc.log("Android-rewoveAd");
jsb.reflection.callStaticMethod(n, "remove", "(Ljava/lang/String;)V", t);
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidRewardedVideoJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "86d80XErzRN/5FbSyffHIGN", "ATAndroidRewardedVideoJS");
var n = "com/anythink/cocosjs/ATRewardedVideoJSBridge", i = i || {
loadRewardedVideo: function(t, e) {
cc.log("Android-loadRewardedVideo");
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
},
setAdListener: function(t) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", t);
},
hasAdReady: function(t) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", t);
},
showAd: function(t) {
cc.log("Android-rv_showAd:" + t);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;)V", t);
},
showAdInScenario: function(t, e) {
cc.log("Android-rv_showAdInScenario:" + t + "---" + e);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
ATBannerJSSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "27dbdAtJ+lEZ4gtD82v9sHp", "ATBannerJSSDK");
var n = t("./Android/ATAndroidBannerJS"), i = t("./iOS/ATiOSBannerJS"), r = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, a = a || {
kATBannerAdLoadingExtraBannerAdSizeStruct: "banner_ad_size_struct",
kATBannerAdShowingPisitionTop: "top",
kATBannerAdShowingPisitionBottom: "bottom",
ATBannerListener: {
developerCallback: null,
onBannerAdLoaded: function(t) {
null != this.developerCallback && null != this.developerCallback.onBannerAdLoaded && void 0 != this.developerCallback.onBannerAdLoaded && this.developerCallback.onBannerAdLoaded(t);
},
onBannerAdLoadFail: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onBannerAdLoadFail && void 0 != this.developerCallback.onBannerAdLoadFail && this.developerCallback.onBannerAdLoadFail(t, e);
},
onBannerAdShow: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onBannerAdShow && void 0 != this.developerCallback.onBannerAdShow && this.developerCallback.onBannerAdShow(t, e);
},
onBannerAdClick: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onBannerAdClick && void 0 != this.developerCallback.onBannerAdClick && this.developerCallback.onBannerAdClick(t, e);
},
onBannerAdAutoRefresh: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefresh && void 0 != this.developerCallback.onBannerAdAutoRefresh && this.developerCallback.onBannerAdAutoRefresh(t, e);
},
onBannerAdAutoRefreshFail: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefreshFail && void 0 != this.developerCallback.onBannerAdAutoRefreshFail && this.developerCallback.onBannerAdAutoRefreshFail(t, e);
},
onBannerAdCloseButtonTapped: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onBannerAdCloseButtonTapped && void 0 != this.developerCallback.onBannerAdCloseButtonTapped && this.developerCallback.onBannerAdCloseButtonTapped(t, e);
}
},
loadBanner: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
void 0 != r && null != r ? r.loadBanner(t, JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(t) {
var e = {};
e[s] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoaded", e[c] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoadFail", 
e[l] = "ATBannerJSSDK.ATBannerListener.onBannerAdCloseButtonTapped", e[d] = "ATBannerJSSDK.ATBannerListener.onBannerAdClick", 
e[u] = "ATBannerJSSDK.ATBannerListener.onBannerAdShow", e[p] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefresh", 
e[f] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefreshFail";
void 0 != r && null != r ? r.setAdListener(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
this.ATBannerListener.developerCallback = t;
},
hasAdReady: function(t) {
if (void 0 != r && null != r) return r.hasAdReady(t);
cc.log("You must run on Android or iOS.");
return !1;
},
showAdInPosistion: function(t, e) {
void 0 != r && null != r ? r.showAdInPosistion(t, e) : cc.log("You must run on Android or iOS.");
},
showAdInRectangle: function(t, e) {
void 0 != r && null != r ? r.showAdInRectangle(t, JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
rewoveAd: function(t) {
void 0 != r && null != r ? r.rewoveAd(t) : cc.log("You must run on Android or iOS.");
},
reShowAd: function(t) {
void 0 != r && null != r ? r.reShowAd(t) : cc.log("You must run on Android or iOS.");
},
hideAd: function(t) {
void 0 != r && null != r ? r.hideAd(t) : cc.log("You must run on Android or iOS.");
},
createLoadAdSize: function(t, e) {
var o = {};
o.width = t;
o.height = e;
return o;
},
createShowAdRect: function(t, e, o, n) {
var i = {};
i.x = t;
i.y = e;
i.width = o;
i.height = n;
return i;
}
}, s = "BannerLoaded", c = "BannerLoadFail", l = "BannerCloseButtonTapped", d = "BannerClick", u = "BannerShow", p = "BannerRefresh", f = "BannerRefreshFail";
window.ATBannerJSSDK = a;
cc._RF.pop();
}, {
"./Android/ATAndroidBannerJS": "ATAndroidBannerJS",
"./iOS/ATiOSBannerJS": "ATiOSBannerJS"
} ],
ATInterstitialJSSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bc30ap3dBNIoIY3CJlsLa9a", "ATInterstitialJSSDK");
var n = t("./iOS/ATiOSInterstitialJS"), i = t("./Android/ATAndroidInterstitialJS"), r = cc.sys.os === cc.sys.OS_IOS ? n : cc.sys.os === cc.sys.OS_ANDROID ? i : void 0, a = a || {
ATInterstitialListener: {
developerCallback: null,
onInterstitialAdLoaded: function(t) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoaded && void 0 != this.developerCallback.onInterstitialAdLoaded && this.developerCallback.onInterstitialAdLoaded(t);
},
onInterstitialAdLoadFail: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoadFail && void 0 != this.developerCallback.onInterstitialAdLoadFail && this.developerCallback.onInterstitialAdLoadFail(t, e);
},
onInterstitialAdShow: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdShow && void 0 != this.developerCallback.onInterstitialAdShow && this.developerCallback.onInterstitialAdShow(t, e);
},
onInterstitialAdStartPlayingVideo: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdStartPlayingVideo && void 0 != this.developerCallback.onInterstitialAdStartPlayingVideo && this.developerCallback.onInterstitialAdStartPlayingVideo(t, e);
},
onInterstitialAdEndPlayingVideo: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdEndPlayingVideo && void 0 != this.developerCallback.onInterstitialAdEndPlayingVideo && this.developerCallback.onInterstitialAdEndPlayingVideo(t, e);
},
onInterstitialAdFailedToPlayVideo: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && void 0 != this.developerCallback.onInterstitialAdFailedToPlayVideo && this.developerCallback.onInterstitialAdFailedToPlayVideo(t, e);
},
onInterstitialAdFailedToShow: function(t) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToShow && void 0 != this.developerCallback.onInterstitialAdFailedToShow && this.developerCallback.onInterstitialAdFailedToShow(t);
},
onInterstitialAdClose: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClose && void 0 != this.developerCallback.onInterstitialAdClose && this.developerCallback.onInterstitialAdClose(t, e);
},
onInterstitialAdClick: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClick && void 0 != this.developerCallback.onInterstitialAdClick && this.developerCallback.onInterstitialAdClick(t, e);
}
},
loadInterstitial: function(t) {
void 0 != r && null != r ? r.loadInterstitial(t) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(t) {
var e = {};
e[s] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoaded", e[c] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", 
e[l] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", 
e[d] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", 
e[u] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", 
e[p] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClose", e[f] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClick", 
e[h] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdShow", e[g] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToShow";
void 0 != r && null != r ? r.setAdListener(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
this.ATInterstitialListener.developerCallback = t;
},
hasAdReady: function(t) {
if (void 0 != r && null != r) return r.hasAdReady(t);
cc.log("You must run on Android or iOS.");
return !1;
},
showAd: function(t) {
void 0 != r && null != r ? r.showAd(t) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
void 0 != r && null != r ? r.showAdInScenario(t, e) : cc.log("You must run on Android or iOS.");
}
}, s = "InterstitialLoaded", c = "InterstitialLoadFail", l = "InterstitialPlayStart", d = "InterstitialPlayEnd", u = "InterstitialPlayFail", p = "InterstitialClose", f = "InterstitialClick", h = "InterstitialAdShow", g = "InterstitialAdShowFail";
window.ATInterstitialJSSDK = a;
cc._RF.pop();
}, {
"./Android/ATAndroidInterstitialJS": "ATAndroidInterstitialJS",
"./iOS/ATiOSInterstitialJS": "ATiOSInterstitialJS"
} ],
ATJSSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ac674mWNsBLUJv45yK5rg7Q", "ATJSSDK");
var n = t("./Android/ATAndroidJS"), i = t("./iOS/ATiOSJS"), r = !1, a = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, s = s || {
kATUserLocationUnknown: 0,
kATUserLocationInEU: 1,
kATUserLocationOutOfEU: 2,
PERSONALIZED: 0,
NONPERSONALIZED: 1,
UNKNOWN: 2,
ATSDKListener: {
userLocationCallback: null,
getUserLocationCallback: function(t) {
void 0 != this.userLocationCallback && null != this.userLocationCallback && this.userLocationCallback(t);
}
},
initSDK: function(t, e) {
void 0 != a && null != a ? a.initSDK(t, e) : cc.log("You must run on Android or iOS.");
},
initCustomMap: function(t) {
void 0 != a && null != a ? void 0 != t && null != t && a.initCustomMap(JSON.stringify(t)) : cc.log("You must run on Android or iOS.");
},
setPlacementCustomMap: function(t, e) {
void 0 != a && null != a ? void 0 != e && null != e && a.setPlacementCustomMap(t, JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setGDPRLevel: function(t) {
void 0 != a && null != a ? a.setGDPRLevel(t) : cc.log("You must run on Android or iOS.");
},
getGDPRLevel: function() {
if (void 0 != a && null != a) return a.getGDPRLevel();
cc.log("You must run on Android or iOS.");
return this.UNKNOWN;
},
getUserLocation: function(t) {
this.ATSDKListener.userLocationCallback = t;
void 0 != a && null != a ? a.getUserLocation(c) : cc.log("You must run on Android or iOS.");
},
showGDPRAuth: function() {
void 0 != a && null != a ? a.showGDPRAuth() : cc.log("You must run on Android or iOS.");
},
setLogDebug: function(t) {
r = t;
void 0 != a && null != a ? a.setLogDebug(t) : cc.log("You must run on Android or iOS.");
},
printLog: function(t) {
void 0 != t && null != t && r && null != a && (void 0 != a && null != a ? a.printJsLog(t) : cc.log("You must run on Android or iOS."));
}
}, c = "ATJSSDK.ATSDKListener.getUserLocationCallback";
window.ATJSSDK = s;
cc._RF.pop();
}, {
"./Android/ATAndroidJS": "ATAndroidJS",
"./iOS/ATiOSJS": "ATiOSJS"
} ],
ATNativeJSSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6c52fIZK8FHiKOLn/Q0An9i", "ATNativeJSSDK");
var n = t("./Android/ATAndroidNativeJS"), i = t("./iOS/ATiOSNativeJS"), r = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, a = a || {
ATNativeListener: {
developerCallback: null,
onNativeAdLoaded: function(t) {
null != this.developerCallback && null != this.developerCallback.onNativeAdLoaded && void 0 != this.developerCallback.onNativeAdLoaded && this.developerCallback.onNativeAdLoaded(t);
},
onNativeAdLoadFail: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdLoadFail && void 0 != this.developerCallback.onNativeAdLoadFail && this.developerCallback.onNativeAdLoadFail(t, e);
},
onNativeAdShow: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdShow && void 0 != this.developerCallback.onNativeAdShow && this.developerCallback.onNativeAdShow(t, e);
},
onNativeAdClick: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdClick && void 0 != this.developerCallback.onNativeAdClick && this.developerCallback.onNativeAdClick(t, e);
},
onNativeAdVideoStart: function(t) {
null != this.developerCallback && null != this.developerCallback.onNativeAdVideoStart && void 0 != this.developerCallback.onNativeAdVideoStart && this.developerCallback.onNativeAdVideoStart(t);
},
onNativeAdVideoEnd: function(t) {
null != this.developerCallback && null != this.developerCallback.onNativeAdVideoEnd && void 0 != this.developerCallback.onNativeAdVideoEnd && this.developerCallback.onNativeAdVideoEnd(t);
},
onNativeAdCloseButtonTapped: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdCloseButtonTapped && void 0 != this.developerCallback.onNativeAdCloseButtonTapped && this.developerCallback.onNativeAdCloseButtonTapped(t, e);
}
},
loadNative: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
void 0 != r && null != r ? r.loadNative(t, JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(t) {
var e = {};
e[s] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoaded", e[c] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoadFail", 
e[l] = "ATNativeJSSDK.ATNativeListener.onNativeAdCloseButtonTapped", e[d] = "ATNativeJSSDK.ATNativeListener.onNativeAdClick", 
e[u] = "ATNativeJSSDK.ATNativeListener.onNativeAdShow", e[p] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoStart", 
e[f] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoEnd";
void 0 != r && null != r ? r.setAdListener(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
this.ATNativeListener.developerCallback = t;
},
hasAdReady: function(t) {
if (void 0 != r && null != r) return r.hasAdReady(t);
cc.log("You must run on Android or iOS.");
return !1;
},
showAd: function(t, e) {
void 0 != r && null != r ? r.showAd(t, JSON.stringify(e.getAdViewProperty())) : cc.log("You must run on Android or iOS.");
},
rewoveAd: function(t) {
void 0 != r && null != r ? r.rewoveAd(t) : cc.log("You must run on Android or iOS.");
},
createLoadAdSize: function(t, e) {
var o = {};
o.width = t;
o.height = e;
return o;
},
AdViewProperty: cc.Class({
parent: null,
appIcon: null,
mainImage: null,
title: null,
desc: null,
adLogo: null,
cta: null,
rating: null,
createItemViewProperty: function(t, e, o, n, i, r, a) {
var s = {};
s.x = t;
s.y = e;
s.width = o;
s.height = n;
s.backgroundColor = i;
s.textColor = r;
s.textSize = a;
return s;
},
getAdViewProperty: function() {
var t = {};
null != this.parent && (t.parent = this.parent);
null != this.appIcon && (t.icon = this.appIcon);
null != this.mainImage && (t.mainImage = this.mainImage);
null != this.title && (t.title = this.title);
null != this.desc && (t.desc = this.desc);
null != this.adLogo && (t.adLogo = this.adLogo);
null != this.cta && (t.cta = this.cta);
null != this.rating && (t.rating = this.rating);
return t;
}
})
}, s = "NativeLoaded", c = "NativeLoadFail", l = "NativeCloseButtonTapped", d = "NativeClick", u = "NativeShow", p = "NativeVideoStart", f = "NativeVideoEnd";
window.ATNativeJSSDK = a;
cc._RF.pop();
}, {
"./Android/ATAndroidNativeJS": "ATAndroidNativeJS",
"./iOS/ATiOSNativeJS": "ATiOSNativeJS"
} ],
ATRewardedVideoJSSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8ff7dtFKRJKs5ENDmTISl8j", "ATRewardedVideoJSSDK");
var n = t("./Android/ATAndroidRewardedVideoJS"), i = t("./iOS/ATiOSRewardedVideoJS"), r = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, a = a || {
userIdKey: "userID",
userDataKey: "media_ext",
ATRewardedVideoListener: {
developerCallback: null,
onRewardedVideoAdLoaded: function(t) {
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && void 0 != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(t);
},
onRewardedVideoAdFailed: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && void 0 != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(t, e);
},
onRewardedVideoAdPlayStart: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && void 0 != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(t, e);
},
onRewardedVideoAdPlayEnd: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && void 0 != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(t, e);
},
onRewardedVideoAdPlayFailed: function(t, e, o) {
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && void 0 != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(t, e, o);
},
onRewardedVideoAdClosed: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && void 0 != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(t, e);
},
onRewardedVideoAdPlayClicked: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && void 0 != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(t, e);
},
onReward: function(t, e) {
null != this.developerCallback && null != this.developerCallback.onReward && void 0 != this.developerCallback.onReward && this.developerCallback.onReward(t, e);
}
},
loadRewardedVideo: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
void 0 != r && null != r ? r.loadRewardedVideo(t, JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(t) {
var e = {};
e[s] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", e[c] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
e[l] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
e[d] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
e[u] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
e[p] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", e[f] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
e[h] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward";
void 0 != r && null != r ? r.setAdListener(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
this.ATRewardedVideoListener.developerCallback = t;
},
hasAdReady: function(t) {
if (void 0 != r && null != r) return r.hasAdReady(t);
cc.log("You must run on Android or iOS.");
return !1;
},
showAd: function(t) {
void 0 != r && null != r ? r.showAd(t) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
void 0 != r && null != r ? r.showAdInScenario(t, e) : cc.log("You must run on Android or iOS.");
}
}, s = "RewardedVideoLoaded", c = "RewardedVideoLoadFail", l = "RewardedVideoPlayStart", d = "RewardedVideoPlayEnd", u = "RewardedVideoPlayFail", p = "RewardedVideoClose", f = "RewardedVideoClick", h = "RewardedVideoReward";
window.ATRewardedVideoJSSDK = a;
cc._RF.pop();
}, {
"./Android/ATAndroidRewardedVideoJS": "ATAndroidRewardedVideoJS",
"./iOS/ATiOSRewardedVideoJS": "ATiOSRewardedVideoJS"
} ],
ATiOSBannerJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c4d951eDhdCO41Twj/Orjic", "ATiOSBannerJS");
var n = t("ATiOSJS"), i = i || {
loadBanner: function(t, e) {
n.printJsLog("ATiOSBannerJS::loadBanner(" + t + ", " + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "loadBannerWithPlacementID:extra:", t, e);
},
setAdListener: function(t) {
n.printJsLog("ATiOSBannerJS::setAdListener(" + t + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "setDelegates:", t);
},
hasAdReady: function(t) {
n.printJsLog("ATiOSBannerJS::hasAdReady(" + t + ")");
return jsb.reflection.callStaticMethod("ATBannerAdWrapper", "bannerReadyForPlacementID:", t);
},
showAdInPosistion: function(t, e) {
n.printJsLog("ATiOSBannerJS::showAdInPosistion(" + t + ", " + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:position:", t, e);
},
showAdInRectangle: function(t, e) {
n.printJsLog("ATiOSBannerJS::showAdInRectangle(" + t + ", " + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:rect:", t, e);
},
rewoveAd: function(t) {
n.printJsLog("ATiOSBannerJS::rewoveAd(" + t + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "rewoveAd:", t);
},
reShowAd: function(t) {
n.printJsLog("ATiOSBannerJS::reShowAd(" + t + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "reShowAd:", t);
},
hideAd: function(t) {
n.printJsLog("ATiOSBannerJS::hideAd(" + t + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "hideAd:", t);
}
};
e.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSInterstitialJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fe489+SD7xMGq/GJd5fr6ld", "ATiOSInterstitialJS");
var n = t("ATiOSJS"), i = "ATInterstitialAdWrapper", r = r || {
loadInterstitial: function(t) {
n.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + t + ")");
jsb.reflection.callStaticMethod(i, "loadInterstitialWithPlacementID:extra:", t, null);
},
setAdListener: function(t) {
n.printJsLog("ATiOSInterstitialJS::setAdListener(" + t + ")");
jsb.reflection.callStaticMethod(i, "setDelegates:", t);
},
hasAdReady: function(t) {
n.printJsLog("ATiOSInterstitialJS::hasAdReady(" + t + ")");
return jsb.reflection.callStaticMethod(i, "interstitialReadyForPlacementID:", t);
},
setUserData: function(t, e, o) {
cc.log("Android-setUserData");
},
showAd: function(t) {
n.printJsLog("ATiOSInterstitialJS::showAd(" + t + ")");
return jsb.reflection.callStaticMethod(i, "showInterstitialWithPlacementID:scene:", t, null);
},
showAdInScenario: function(t, e) {
n.printJsLog("ATiOSInterstitialJS::showAd(" + t + ", " + e + ")");
return jsb.reflection.callStaticMethod(i, "showInterstitialWithPlacementID:scene:", t, e);
}
};
e.exports = r;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dc9fdyQKA1AEqs/qTXKxw8e", "ATiOSJS");
var n = n || {
initSDK: function(t, e) {
this.printJsLog("ATiOSJS::initSDK(" + t + "," + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "startWithAppID:appKey:", t, e);
},
initCustomMap: function(t) {
this.printJsLog("ATiOSJS::initCustomMap(" + t + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setCustomData:", t);
},
setPlacementCustomMap: function(t, e) {
this.printJsLog("ATiOSJS::setPlacementCustomMap(" + t + ", " + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setCustomData:forPlacementID:", e, t);
},
setGDPRLevel: function(t) {
this.printJsLog("ATiOSJS::setGDPRLevel(" + t + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setDataConsent:", t);
},
getGDPRLevel: function() {
this.printJsLog("ATiOSJS::getGDPRLevel()");
return jsb.reflection.callStaticMethod("ATSDKManager", "dataConsent");
},
getUserLocation: function(t) {
this.printJsLog("ATiOSJS::getUserLocation(" + t + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "getUserLocationWithCallback:", t);
},
showGDPRAuth: function() {
this.printJsLog("ATiOSJS::showGDPRAuth()");
jsb.reflection.callStaticMethod("ATSDKManager", "presentDataConsentDialog");
},
setLogDebug: function(t) {
this.printJsLog("ATiOSJS::setLogDebug(" + t + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setDebugLog:", t);
},
printJsLog: function(t) {
void 0 != t && null != t && jsb.reflection.callStaticMethod("ATJSBridge", "log:", t);
}
};
e.exports = n;
cc._RF.pop();
}, {} ],
ATiOSNativeJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "879ddiwctlO5pR+qZQ87WJh", "ATiOSNativeJS");
var n = t("ATiOSJS"), i = i || {
loadNative: function(t, e) {
n.printJsLog("ATiOSBannerJS::loadNative(" + t + ", " + e + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "loadNativeWithPlacementID:extra:", t, e);
},
setAdListener: function(t) {
n.printJsLog("ATiOSNativeJS::setAdListener(" + t + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "setDelegates:", t);
},
hasAdReady: function(t) {
n.printJsLog("ATiOSNativeJS::hasAdReady(" + t + ")");
return jsb.reflection.callStaticMethod("ATNativeAdWrapper", "nativeReadyForPlacementID:", t);
},
showAd: function(t, e) {
n.printJsLog("ATiOSNativeJS::showAd(" + t + ", " + e + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "showNativeWithPlacementID:metrics:", t, e);
},
rewoveAd: function(t) {
n.printJsLog("ATiOSNativeJS::rewoveAd(" + t + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "removeNativeWithPlacementID:", t);
}
};
e.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSRewardedVideoJS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a0e61Z+J79OzKNs0S1evcmU", "ATiOSRewardedVideoJS");
var n = t("ATiOSJS"), i = i || {
loadRewardedVideo: function(t, e) {
n.printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + t + ", " + e + ")");
jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "loadRewardedVideoWithPlacementID:extra:", t, e);
},
setAdListener: function(t) {
n.printJsLog("ATiOSRewardedVideoJS::setAdListener(" + t + ")");
jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "setDelegates:", t);
},
hasAdReady: function(t) {
n.printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + t + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "rewardedVideoReadyForPlacementID:", t);
},
setUserData: function(t, e, o) {
cc.log("Android-setUserData");
},
showAd: function(t) {
n.printJsLog("ATiOSRewardedVideoJS::showAd(" + t + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "showRewardedVideoWithPlacementID:scene:", t, null);
},
showAdInScenario: function(t, e) {
n.printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + t + ", " + e + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "showRewardedVideoWithPlacementID:scene:", t, e);
}
};
e.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
Actions: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e349ca6ytENZGhroHTugf2", "Actions");
var n = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.prototype.tweenToPos = function(t, e, o, n) {
void 0 === o && (o = .5);
cc.tween(t).to(o, {
position: e,
scale: .5,
opacity: 180
}).call(function() {
n && n();
}).start();
};
t.prototype.breatheEff = function(t, e, o) {
void 0 === e && (e = .9);
void 0 === o && (o = .5);
t.stopAllActions();
cc.tween(t).repeatForever(cc.tween().to(o, {
scale: e
}).to(o, {
scale: 1
})).start();
};
t.prototype.openPopup = function(t, e) {
t.scale = 0;
var o = 1;
cc.winSize.width / 720 < 1 && (o = cc.winSize.width / 720);
cc.tween(t).to(.2, {
scale: o
}, {
easing: "backOut"
}).call(function() {
e && e();
}).start();
};
t.prototype.closePopup = function(t, e) {
cc.tween(t).to(.2, {
scale: 0
}, {
easing: "backIn"
}).call(function() {
e && e();
}).start();
};
t.prototype.popOut = function(t, e) {
void 0 === e && (e = .3);
t.scale = 0;
cc.tween(t).to(e, {
scale: 1
}, {
easing: "backOut"
}).start();
};
t.prototype.popIn = function(t, e) {
void 0 === e && (e = .3);
cc.tween(t).to(e, {
scale: 0
}, {
easing: "backIn"
}).start();
};
t.prototype.rockAction = function(t, e, o) {
void 0 === e && (e = .02);
void 0 === o && (o = 10);
cc.tween(t).by(e, {
angle: o
}).by(e, {
angle: -2 * o
}).by(.8 * e, {
angle: 2 * o * .8
}).by(.6 * e, {
angle: -2 * o * .6
}).by(.4 * e, {
angle: 2 * o * .4
}).to(.2 * e, {
angle: 0
}).start();
};
t.prototype.getMoveInScreenActive = function(t, e, o, n, i) {
switch (e) {
case 0:
cc.tween(t).by(i, {
position: cc.v2(0, -n)
}).start();
return cc.moveBy(i, 0, -n);

case 1:
cc.tween(t).by(i, {
position: cc.v2(-n, 0)
}).start();
return cc.moveBy(i, -o, 0);

case 2:
cc.tween(t).by(i, {
position: cc.v2(0, -n)
}).start();
return;

case 3:
cc.tween(t).by(i, {
position: cc.v2(n, 0)
}).start();
return;
}
};
t.prototype.addCionMove = function(t, e, o, r, a, s) {
void 0 === s && (s = !1);
return n(this, void 0, Promise, function() {
var n, c, l, d, u, p;
return i(this, function(i) {
switch (i.label) {
case 0:
Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2));
t.zIndex = 100;
return [ 4, GPool.get(e) ];

case 1:
(n = i.sent()).scale = 1.1;
n.position = o;
n.opacity = 255;
c = cc.callFunc(function() {
a && a();
s && GPool.get("star").then(function(t) {
t.position = r;
t.parent = cc.find("Canvas/UINode/Anim");
t.getComponent("StarEnd").init();
});
GPool.put(n);
});
l = .8 * Math.random();
d = -200 + Math.floor(401 * Math.random());
u = 100 + Math.floor(101 * Math.random());
p = cc.sequence(cc.jumpTo(l, cc.v2(d, 0), u, 1), cc.spawn(cc.moveTo(.5, r).easing(cc.easeBackIn()), cc.scaleTo(.5, .8).easing(cc.easeBackIn())), c);
n.runAction(p);
t.addChild(n);
return [ 2 ];
}
});
});
};
t.prototype.addScroeMove = function(t, e, o, n) {
t.zIndex = 100;
var i = cc.tween;
i(t).parallel(i().by(.2, {
position: cc.v2(0, 20)
}), i().to(.1, {
opacity: 1
})).delayTime(.2).to(.2, {
position: o
}, {
easing: "backIn"
}).call(function() {
n && n();
t.destroy();
}).start();
};
return t;
}();
o.actions = new r();
cc._RF.pop();
}, {} ],
AnimationControl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "70ed5iyRUtHEJuFzpQKt6ey", "AnimationControl");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isOnLoad = !0;
e.control_node = [];
e.delay_time = [];
e.appear_time = [];
e.disappear_time = [];
e.begin_time = [];
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.isOnLoad && this.control_node.forEach(function(e, o) {
e.node.stopAllActions();
e.play();
t.begin_time[o] && t.begin_time[o] > 0 && e.setCurrentTime(t.begin_time[o]);
if (t.delay_time[o] && t.delay_time[o] > 0) {
e.stop();
t.node.runAction(cc.sequence(cc.delayTime(t.delay_time[o]), cc.callFunc(function() {
e.play();
})));
}
if (t.appear_time[o] && t.appear_time[o] > 0) {
e.node.active = !1;
t.node.runAction(cc.sequence(cc.delayTime(t.appear_time[o]), cc.callFunc(function() {
e.node.active = !0;
})));
}
t.disappear_time[o] && t.disappear_time[o] > 0 && t.node.runAction(cc.sequence(cc.delayTime(t.disappear_time[o]), cc.callFunc(function() {
e.node.active = !1;
})));
});
};
e.prototype.startPlay = function() {
var t = this;
this.control_node.forEach(function(e, o) {
e.node.stopAllActions();
e.play();
t.begin_time[o] && t.begin_time[o] > 0 && e.setCurrentTime(t.begin_time[o]);
if (t.delay_time[o] && t.delay_time[o] > 0) {
e.stop();
t.node.runAction(cc.sequence(cc.delayTime(t.delay_time[o]), cc.callFunc(function() {
e.play();
})));
}
if (t.appear_time[o] && t.appear_time[o] > 0) {
e.node.active = !1;
t.node.runAction(cc.sequence(cc.delayTime(t.appear_time[o]), cc.callFunc(function() {
e.node.active = !0;
})));
}
t.disappear_time[o] && t.disappear_time[o] > 0 && t.node.runAction(cc.sequence(cc.delayTime(t.disappear_time[o]), cc.callFunc(function() {
e.node.active = !1;
})));
});
};
e.prototype.onDisable = function() {
this.node.stopAllActions();
};
i([ s({
displayName: "是否直接运行"
}) ], e.prototype, "isOnLoad", void 0);
i([ s({
type: cc.Animation,
displayName: "控制节点"
}) ], e.prototype, "control_node", void 0);
i([ s({
type: cc.Float,
displayName: "延迟播放时间"
}) ], e.prototype, "delay_time", void 0);
i([ s({
type: cc.Float,
displayName: "出现时间"
}) ], e.prototype, "appear_time", void 0);
i([ s({
type: cc.Float,
displayName: "消失时间"
}) ], e.prototype, "disappear_time", void 0);
i([ s({
type: cc.Float,
displayName: "动画开始时所在的时间点"
}) ], e.prototype, "begin_time", void 0);
return e = i([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
AudioComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "96678eXseZDOLuqWG8GCK05", "AudioComponent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Events"), a = t("./EventConstants"), s = t("./User"), c = cc._decorator, l = c.ccclass, d = c.property, u = function() {
function t() {
this.audio = null;
this.volume = 1;
}
i([ d({
type: cc.AudioClip
}) ], t.prototype, "audio", void 0);
i([ d({
type: cc.Float,
tooltip: "音频音量"
}) ], t.prototype, "volume", void 0);
return t = i([ l("Sound") ], t);
}();
o.Sound = u;
var p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.soundMainBgm = null;
e.click = null;
e.pop = null;
e.shoot = null;
e.settlement = null;
e.crash = null;
e.eliminate = null;
e.award = null;
e.cion = null;
e.dingdong = null;
e.bigwingold = null;
e.luck = null;
e.isMute = !1;
e.isSound = !1;
e.bgmPlaying = !1;
e.effectIds = [];
e.key = null;
return e;
}
e.prototype.onLoad = function() {
this.initEvents();
};
e.prototype.onDestroy = function() {
this.clearEvents();
};
e.prototype.initEvents = function() {
r.events.on(this.name, this.uuid, a.GameEvents.PLAY_BGM, this.playBGM, this);
r.events.on(this.name, this.uuid, a.GameEvents.STOP_BGM, this.stopBGM, this);
r.events.on(this.name, this.uuid, a.GameEvents.PLAY_SOUND_EFFECT, this.playSoundEffect, this);
r.events.on(this.name, this.uuid, a.GameEvents.STOP_SOUND_EFFECT, this.stopEffect, this);
r.events.on(this.name, this.uuid, a.GameEvents.SWITCH_MUTE, this.switchMute, this);
r.events.on(this.name, this.uuid, a.GameEvents.SWITCH_SOUND, this.switchSound, this);
r.events.on(this.name, this.uuid, a.GameEvents.STOP_ALL_SOUND_EFFECT, this.stopAllEffect, this);
};
e.prototype.clearEvents = function() {
r.events.removeListener(this.name, a.GameEvents.PLAY_BGM);
r.events.removeListener(this.name, a.GameEvents.STOP_BGM);
r.events.removeListener(this.name, a.GameEvents.PLAY_SOUND_EFFECT);
r.events.removeListener(this.name, a.GameEvents.STOP_SOUND_EFFECT);
r.events.removeListener(this.name, a.GameEvents.SWITCH_MUTE);
r.events.removeListener(this.name, a.GameEvents.SWITCH_SOUND);
r.events.removeListener(this.name, a.GameEvents.STOP_ALL_SOUND_EFFECT);
};
e.prototype.init = function() {
this.isMute = s.user.IsMute;
this.isSound = s.user.IsSound;
};
e.prototype.playBGM = function(t) {
this.key && t != this.key && this.stopBGM();
this.init();
this.bgmPlaying = !0;
var e = this[t];
if (this.isMute && "number" != typeof this.bgmAudioId) {
this.bgmAudioId = cc.audioEngine.playMusic(e.audio, !0);
this.key = t;
}
};
e.prototype.stopBGM = function() {
this.bgmPlaying = !1;
if (this.isMute && "number" == typeof this.bgmAudioId) {
cc.audioEngine.stop(this.bgmAudioId);
cc.audioEngine.uncache(this.bgmAudioId);
delete this.bgmAudioId;
}
};
e.prototype.playSoundEffect = function(t, e, o, n) {
var i = this;
if (this.isSound) {
var r = this[t];
if (r) {
if ("number" == typeof e) {
if (!r[e]) return;
r = r[e];
}
if (r.audio) {
var a = cc.audioEngine.play(r.audio, o, r.volume || 1);
this.effectIds || (this.effectIds = []);
this.effectIds.push({
key: t,
effectId: a
});
o || cc.audioEngine.setFinishCallback(a, function() {
i.stopEffect(t);
n && n();
});
}
}
}
};
e.prototype.stopEffect = function(t) {
this.effectIds.findIndex(function(e) {
return t === e.key;
});
};
e.prototype.switchMute = function() {
this.isMute = !this.isMute;
if (this.isMute) {
if (null == this.bgmAudioId) {
this.playBGM("soundMainBgm");
return;
}
cc.audioEngine.resume(this.bgmAudioId);
} else {
this.isSound = !1;
cc.audioEngine.pause(this.bgmAudioId);
}
};
e.prototype.stopAllEffect = function() {
if (!this.isMute) {
cc.audioEngine.stopAll();
cc.audioEngine.uncacheAll();
delete this.bgmAudioId;
this.effectIds = [];
}
};
e.prototype.resumeAllEffect = function() {
this.isMute || this.bgmPlaying && this.playBGM(this.key);
};
e.prototype.switchSound = function() {
this.isSound = !this.isSound;
};
i([ d(u) ], e.prototype, "soundMainBgm", void 0);
i([ d(u) ], e.prototype, "click", void 0);
i([ d(u) ], e.prototype, "pop", void 0);
i([ d(u) ], e.prototype, "shoot", void 0);
i([ d(u) ], e.prototype, "settlement", void 0);
i([ d(u) ], e.prototype, "crash", void 0);
i([ d(u) ], e.prototype, "eliminate", void 0);
i([ d(u) ], e.prototype, "award", void 0);
i([ d(u) ], e.prototype, "cion", void 0);
i([ d(u) ], e.prototype, "dingdong", void 0);
i([ d(u) ], e.prototype, "bigwingold", void 0);
i([ d(u) ], e.prototype, "luck", void 0);
return e = i([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants",
"./Events": "Events",
"./User": "User"
} ],
AudioConstands: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "67378X/5ORLpZLtlHQS0wHI", "AudioConstands");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.MAIN_BGM = "soundMainBgm";
t.BUTTON = "click";
t.POP = "pop";
t.SHOOT = "shoot";
t.SETTLEMENT = "settlement";
t.CRASH = "crash";
t.ELIMINATE = "eliminate";
t.AWARD = "award";
t.CION = "cion";
t.DINGDONG = "dingdong";
t.BIGWINGOLD = "bigwingold";
t.LUCK = "luck";
})(o.AudioName || (o.AudioName = {}));
cc._RF.pop();
}, {} ],
Ball: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4938bLltytLWLB77yg4tJwH", "Ball");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/EventConstants"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isTouchedGround = !1;
e.rigidBody = null;
e.collider = null;
e.hurtNum = 1;
return e;
}
e.prototype.onLoad = function() {
this.rigidBody = this.getComponent(cc.RigidBody);
this.collider = this.getComponent(cc.PhysicsBoxCollider);
this.rigidBody.gravityScale = 0;
};
e.prototype.update = function(t) {
var e = this;
if (this.isTouchedGround) {
this.isTouchedGround = !1;
this.rigidBody.active = !1;
this.rigidBody.linearVelocity = cc.Vec2.ZERO;
this.node.color = cc.color().fromHEX("#02c9ff");
var o = [];
o.push(this.node.position);
if (this.node.position.x > 0) {
o.push(cc.v2(345, -415));
o.push(cc.v2(345, 397));
o.push(cc.v2(0, 397));
o.push(cc.v2(0, 390));
} else {
o.push(cc.v2(-345, -415));
o.push(cc.v2(-345, 397));
o.push(cc.v2(0, 397));
o.push(cc.v2(0, 390));
}
this.node.runAction(cc.sequence(cc.cardinalSplineTo(1, o, .9), cc.callFunc(function() {
e.rigidBody.gravityScale = 0;
e.node.color = cc.color().fromHEX("#FFFFFF");
e.rigidBody.active = !0;
r.GameConstant.game.recycleBall();
e.rigidBody.type = cc.RigidBodyType.Static;
})));
}
};
e.prototype.onBeginContact = function(t, e, o) {
if ("wall" == o.node.name || -1 != o.node.name.indexOf("polygon") || "bx" == o.node.name) {
10 != this.rigidBody.gravityScale && (this.rigidBody.gravityScale = 10);
var n = Math.random() < .5 ? -1 : 1;
Math.abs(this.rigidBody.linearVelocity.y) < 200 && this.rigidBody.applyForceToCenter(cc.v2(100 * n, 5e4), !0);
}
"ground" == o.node.name && (this.isTouchedGround = !0);
};
e.prototype.getHurt = function() {
return this.hurtNum;
};
e.prototype.setHurt = function(t) {
this.hurtNum = t;
};
i([ c() ], e.prototype, "isTouchedGround", void 0);
return e = i([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants"
} ],
Barrier: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3bac05iQnRCHbhvPa7lWI7S", "Barrier");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/EventConstants"), a = t("../common/User"), s = t("../common/Utils"), c = t("./Ball"), l = cc._decorator, d = l.ccclass, u = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbScore = null;
e.isAddBuffBall = !1;
e.isAddRed = !1;
e.isBigBuffBall = !1;
e.score = 0;
return e;
}
e.prototype.init = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = !1);
if (this.lbScore) {
this.node.angle = 0;
this.lbScore.node.angle = 0;
var o = 360 * -Math.random();
this.node.angle = o;
this.lbScore.node.color = cc.color().fromHEX("000000");
this.lbScore.node.angle -= o;
}
if (this.isAddRed) {
this.node.angle = 0;
this.lbScore.node.angle = 0;
}
if (0 != t) this.setScore(t); else {
this.isAddBuffBall || this.isAddRed || this.isBigBuffBall || (this.node.scale = s.utils.randomFloat(a.user.getLumpData().BarrierSacleArr));
this.setScore(r.GameConstant.game.setBarrierScore());
}
if (!this.isAddBuffBall && !this.isAddRed && !this.isBigBuffBall) if (e) {
this.node.getChildByName("IrisAnim").active = !0;
this.node.getChildByName("rainbow").active = !0;
} else {
this.node.getChildByName("IrisAnim").active = !1;
this.node.getChildByName("rainbow").active = !1;
}
};
e.prototype.setScore = function(t) {
if (this.lbScore) {
this.score = t;
this.lbScore.string = this.score.toString();
this.setColor(this.score);
}
};
e.prototype.getScore = function() {
return this.score;
};
e.prototype.setColor = function(t) {
if (!(this.isAddBuffBall || this.isAddRed || this.isBigBuffBall)) {
var e = a.user.getLumpData().color;
if (7 == e.length) {
var o;
t <= 10 ? o = e[0] : t <= 50 ? o = e[1] : t <= 100 ? o = e[2] : t <= 300 ? o = e[3] : t <= 500 ? o = e[4] : t <= 700 ? o = e[5] : t > 700 && (o = e[6]);
for (var n = 0; n < this.node.children.length; n++) {
-1 != this.node.children[n].name.indexOf("bloacks_1") && (this.node.children[n].color = cc.color().fromHEX(o[2]));
-1 != this.node.children[n].name.indexOf("bloacks_2") && (this.node.children[n].color = cc.color().fromHEX(o[1]));
-1 != this.node.children[n].name.indexOf("bloacks_3") && (this.node.children[n].color = cc.color().fromHEX(o[0]));
}
}
}
};
e.prototype.onBeginContact = function(t, e, o) {
if (1 == o.tag) if (this.isAddBuffBall) {
r.GameConstant.game.addBall(this.node.position);
r.GameConstant.game.removeBarrier(this);
var n = a.user.getCurrentProp();
n -= 1;
a.user.setCurrentProp(n);
} else if (this.isBigBuffBall) {
if (2 == o.node.getComponent(c.default).getHurt()) return;
r.GameConstant.game.bigBall(o.node);
r.GameConstant.game.removeBarrier(this);
n = a.user.getCurrentProp();
n -= 1;
a.user.setCurrentProp(n);
} else if (this.isAddRed) {
var i = o.node.getComponent(c.default).getHurt();
if (this.score <= i) {
r.GameConstant.game.addScore(this.score);
this.node.opacity = 120;
this.node.getComponent(cc.PhysicsPolygonCollider).enabled = !1;
this.score = 0;
this.lbScore.node.active = !1;
} else {
this.setScore(this.score - i);
r.GameConstant.game.addScore(this.score - i);
r.GameConstant.game.shake(this.node);
}
} else {
i = o.node.getComponent(c.default).getHurt();
if (this.score <= i) {
r.GameConstant.game.addScore(this.score);
r.GameConstant.game.removeBarrier(this);
} else {
this.setScore(this.score - i);
r.GameConstant.game.addScore(this.score - i);
r.GameConstant.game.shake(this.node);
}
}
};
i([ u(cc.Label) ], e.prototype, "lbScore", void 0);
i([ u() ], e.prototype, "isAddBuffBall", void 0);
i([ u() ], e.prototype, "isAddRed", void 0);
i([ u() ], e.prototype, "isBigBuffBall", void 0);
return e = i([ d ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants",
"../common/User": "User",
"../common/Utils": "Utils",
"./Ball": "Ball"
} ],
Base64: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "38eeeFqhAxO+JNGqWKexBI1", "Base64");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, a = (i.property, function() {
function t() {
this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
}
t.prototype.encode = function(t) {
var e, o, n, i, r, a, s, c = "", l = 0;
t = this._utf8_encode(t);
for (;l < t.length; ) {
e = t.charCodeAt(l++);
o = t.charCodeAt(l++);
n = t.charCodeAt(l++);
i = e >> 2;
r = (3 & e) << 4 | o >> 4;
a = (15 & o) << 2 | n >> 6;
s = 63 & n;
isNaN(o) ? a = s = 64 : isNaN(n) && (s = 64);
c = c + this._keyStr.charAt(i) + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
}
return c;
};
t.prototype.decode = function(t) {
var e, o, n, i, r, a, s, c = "", l = 0;
t = t.replace(/[^A-Za-z0-9+/=]/g, "");
for (;l < t.length; ) {
i = this._keyStr.indexOf(t.charAt(l++));
r = this._keyStr.indexOf(t.charAt(l++));
a = this._keyStr.indexOf(t.charAt(l++));
s = this._keyStr.indexOf(t.charAt(l++));
e = i << 2 | r >> 4;
o = (15 & r) << 4 | a >> 2;
n = (3 & a) << 6 | s;
c += String.fromCharCode(e);
64 != a && (c += String.fromCharCode(o));
64 != s && (c += String.fromCharCode(n));
}
return c = this._utf8_decode(c);
};
t.prototype._utf8_encode = function(t) {
t = t.replace(/rn/g, "n");
for (var e = "", o = 0; o < t.length; o++) {
var n = t.charCodeAt(o);
if (n < 128) e += String.fromCharCode(n); else if (n > 127 && n < 2048) {
e += String.fromCharCode(n >> 6 | 192);
e += String.fromCharCode(63 & n | 128);
} else {
e += String.fromCharCode(n >> 12 | 224);
e += String.fromCharCode(n >> 6 & 63 | 128);
e += String.fromCharCode(63 & n | 128);
}
}
return e;
};
t.prototype._utf8_decode = function(t) {
for (var e, o, n = "", i = 0, r = e = 0; i < t.length; ) if ((r = t.charCodeAt(i)) < 128) {
n += String.fromCharCode(r);
i++;
} else if (r > 191 && r < 224) {
e = t.charCodeAt(i + 1);
n += String.fromCharCode((31 & r) << 6 | 63 & e);
i += 2;
} else {
e = t.charCodeAt(i + 1);
o = t.charCodeAt(i + 2);
n += String.fromCharCode((15 & r) << 12 | (63 & e) << 6 | 63 & o);
i += 3;
}
return n;
};
return t = n([ r ], t);
}());
o.Base64 = a;
cc._RF.pop();
}, {} ],
ByteArray: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fd723GWUXVCjrU6p9oQCkHY", "ByteArray");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n;
(function(t) {
t.LITTLE_ENDIAN = "littleEndian";
t.BIG_ENDIAN = "bigEndian";
})(n || (n = {}));
var i = function() {
function t(t) {
this.BUFFER_EXT_SIZE = 0;
this.EOF_byte = -1;
this.EOF_code_point = -1;
this._setArrayBuffer(t || new ArrayBuffer(this.BUFFER_EXT_SIZE));
this.endian = n.BIG_ENDIAN;
}
Object.defineProperty(t.prototype, "_buffer", {
get: function() {
return this.data.buffer;
},
set: function(t) {
this.data = new DataView(t);
},
enumerable: !0,
configurable: !0
});
t.prototype._setArrayBuffer = function(t) {
this.data = new DataView(t);
this._position = 0;
};
t.prototype.readUnsignedShort = function() {
if (!this.validate(2)) return null;
var t = this.data.getUint16(this._position, this.endian == n.LITTLE_ENDIAN);
this._position += 2;
return t;
};
t.prototype.readUTF = function() {
if (!this.validate(2)) return null;
var t = this.data.getUint16(this._position, this.endian == n.LITTLE_ENDIAN);
this._position += 2;
return t > 0 ? this.readUTFBytes(t) : "";
};
t.prototype.readBytes = function(t) {
if (!this.validate(t)) return null;
var e = new Uint8Array(this._buffer, this._position, t);
this._position += t;
return e;
};
t.prototype.readUTFBytes = function(t) {
if (!this.validate(t)) return null;
var e = new Uint8Array(this._buffer, this._position, t);
this._position += t;
return this.decodeUTF8(e);
};
t.prototype.writeUnsignedShort = function(t) {
this.validateBuffer(2);
this.data.setUint16(this._position, t, this.endian == n.LITTLE_ENDIAN);
this._position += 2;
};
t.prototype.writeUTFBytes = function(t) {
this._writeUint8Array(this.encodeUTF8(t));
};
t.prototype.writeBytes = function(t) {
var e = new Uint8Array(t);
this._writeUint8Array(e);
};
t.prototype._writeUint8Array = function(t, e) {
void 0 === e && (e = !0);
e && this.validateBuffer(t.length);
for (var o = 0; o < t.length; o++) this.data.setUint8(this._position++, t[o]);
};
t.prototype.validate = function(t) {
if (this.data.byteLength > 0 && this._position + t <= this.data.byteLength) return !0;
};
t.prototype.validateBuffer = function(t, e) {
void 0 === e && (e = !1);
t += this._position;
if (this._buffer.byteLength < t || e) {
var o = new Uint8Array(new ArrayBuffer(t + this.BUFFER_EXT_SIZE)), n = Math.min(this.data.buffer.byteLength, t + this.BUFFER_EXT_SIZE);
o.set(new Uint8Array(this.data.buffer, 0, n));
this._buffer = o.buffer;
}
};
t.prototype.encodeUTF8 = function(t) {
for (var e = 0, o = this.stringToCodePoints(t), n = []; o.length > e; ) {
var i = o[e++];
if (this.inRange(i, 55296, 57343)) this.encoderError(i); else if (this.inRange(i, 0, 127)) n.push(i); else {
var r = void 0, a = void 0;
if (this.inRange(i, 128, 2047)) {
r = 1;
a = 192;
} else if (this.inRange(i, 2048, 65535)) {
r = 2;
a = 224;
} else if (this.inRange(i, 65536, 1114111)) {
r = 3;
a = 240;
}
n.push(this.div(i, Math.pow(64, r)) + a);
for (;r > 0; ) {
var s = this.div(i, Math.pow(64, r - 1));
n.push(128 + s % 64);
r -= 1;
}
}
}
return new Uint8Array(n);
};
t.prototype.decodeUTF8 = function(t) {
for (var e, o = 0, n = "", i = 0, r = 0, a = 0, s = 0; t.length > o; ) {
var c = t[o++];
if (c == this.EOF_byte) e = 0 != r ? this.decoderError(!1) : this.EOF_code_point; else if (0 == r) if (this.inRange(c, 0, 127)) e = c; else {
if (this.inRange(c, 194, 223)) {
r = 1;
s = 128;
i = c - 192;
} else if (this.inRange(c, 224, 239)) {
r = 2;
s = 2048;
i = c - 224;
} else if (this.inRange(c, 240, 244)) {
r = 3;
s = 65536;
i = c - 240;
} else this.decoderError(!1);
i *= Math.pow(64, r);
e = null;
} else if (this.inRange(c, 128, 191)) {
a += 1;
i += (c - 128) * Math.pow(64, r - a);
if (a !== r) e = null; else {
var l = i, d = s;
i = 0;
r = 0;
a = 0;
s = 0;
e = this.inRange(l, d, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(!1, c);
}
} else {
i = 0;
r = 0;
a = 0;
s = 0;
o--;
e = this.decoderError(!1, c);
}
if (null !== e && e !== this.EOF_code_point) if (e <= 65535) e > 0 && (n += String.fromCharCode(e)); else {
e -= 65536;
n += String.fromCharCode(55296 + (e >> 10 & 1023));
n += String.fromCharCode(56320 + (1023 & e));
}
}
return n;
};
t.prototype.encoderError = function(t) {};
t.prototype.decoderError = function(t, e) {
return e || 65533;
};
t.prototype.inRange = function(t, e, o) {
return e <= t && t <= o;
};
t.prototype.div = function(t, e) {
return Math.floor(t / e);
};
t.prototype.stringToCodePoints = function(t) {
for (var e = [], o = 0, n = t.length; o < t.length; ) {
var i = t.charCodeAt(o);
if (this.inRange(i, 55296, 57343)) if (this.inRange(i, 56320, 57343)) e.push(65533); else if (o == n - 1) e.push(65533); else {
var r = t.charCodeAt(o + 1);
if (this.inRange(r, 56320, 57343)) {
var a = 1023 & i, s = 1023 & r;
o += 1;
e.push(65536 + (a << 10) + s);
} else e.push(65533);
} else e.push(i);
o += 1;
}
return e;
};
return t;
}();
o.default = i;
cc._RF.pop();
}, {} ],
Cache: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5940aG5C+BL6JzjwV0KRUEw", "Cache");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, i = function() {
function t() {
this._cache = {};
}
t.prototype.initCache = function(t) {
t && !this._cache[t] && (this._cache[t] = {});
};
t.prototype.set = function(t, e) {
t && e && (this._cache[t] = e.forEach ? this.mapToObj(e) : e);
};
t.prototype.get = function(t) {
return t ? JSON.parse(JSON.stringify(this._cache[t])) : void 0;
};
t.prototype.mapToObj = function(t) {
var e = Object.create(null);
t.forEach(function(t, o) {
e[o] = t;
});
return e;
};
t.prototype.getItem = function(t, e) {
var o;
return this._cache[t] ? o = this._cache[t][e] : o;
};
t.prototype.getItemByType = function(t, e, o) {
var n = [];
if (!this._cache[t]) return n;
var i = this._cache[t];
for (var r in i) if (i[r][e] == o) {
var a = parseInt(r);
n.push(a);
}
return n;
};
return t;
}();
o.cache = new i();
(function(t) {
t.language = "language";
})(n = o.CacheKey || (o.CacheKey = {}));
o.CacheFileNames = [ n.language ];
o.CACHE_CONFIG_PATH = "config/";
cc._RF.pop();
}, {} ],
Cion: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e0c47hgpOJCH7q6oebNgBSS", "Cion");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = (r.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.coinBigJump = function() {
var t = -cc.winSize.width / 2 - 200 + Math.random() * (cc.winSize.width + 400), e = Math.random() + 1.5, o = .5 + ((cc.winSize.width + 800) / 2 - Math.abs(t)) / (cc.winSize.width + 300), n = cc.sequence(cc.spawn(cc.jumpTo(e, t, -cc.winSize.height / 2 - 200, Math.floor(1e3 * Math.random()), 1), cc.scaleTo(e, o, o)), cc.callFunc(function() {
GPool.put(this.node);
}.bind(this)));
this.node.runAction(n);
};
return e = i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
EventConstants: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4ce67NERfpNl4HAi9IBxjNp", "EventConstants");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.SHOW_TIPS = "showTips";
t.UI_SHOW = "uiShow";
t.UPDATAUI = "updataUI";
t.PLAY_BGM = "playBgm";
t.STOP_BGM = "stopBgm";
t.PLAY_SOUND_EFFECT = "playSoundEffect";
t.STOP_SOUND_EFFECT = "stopSoundEffect";
t.STOP_ALL_SOUND_EFFECT = "stopAllSoundEffect";
t.SWITCH_MUTE = "switchMute";
t.SWITCH_SOUND = "switchSound";
t.PLAY_BIGSNAKE = "playbigsnake";
t.SWITCH_SNAKE = "switchsnake";
t.UP_ICEPROGRESS = "up_IceProgress";
t.COUNTDOWN = "count_Down";
t.SHOW_POPUP = "showPopUp";
t.HIDE_POPUP = "hidePopUp";
t.HIDE_ALL_POPUP = "hideAllPopUp";
t.SHOW_LOADING = "showLoading";
t.HIDE_LOADING = "hideLoading";
t.GET_REWARDS = "get_rewards";
t.RED_DETECTION = "red_detection";
t.GROUPBALLINGAME = "ballInGame";
t.GROUPBALLINRECYCLE = "ballInRecycle";
t.OPENVDIEO = "openVideo";
t.BUBBLETPIS = "bubble_Tpis";
t.CLOSEBUBBLE = "close_bubbleTpis";
t.UPDATALEVEL = "updatalevel";
t.UPDATASCORE = "updatascore";
})(o.GameEvents || (o.GameEvents = {}));
var n = function() {
function t() {}
t.game = null;
t.resurgenceVideo = !1;
t.isShoot = !1;
t.isAward = !1;
return t;
}();
o.GameConstant = n;
cc._RF.pop();
}, {} ],
Events: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "55bbbGjFNtElaGBGZqSnlzM", "Events");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
this.events = [];
}
t.prototype.on = function(t, e, o, n, i, r) {
void 0 === r && (r = !1);
this.hasListener(t, o) && this.removeListener(t, o);
this.events.push({
compName: t,
compUUID: e,
eventName: o,
callback: n,
that: i,
isOnce: r
});
};
t.prototype.emit = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
for (var n = 0, i = this.events; n < i.length; n++) {
var r = i[n];
if (r.eventName === t) {
r.callback.apply(r.that, e);
!0 === r.isOnce && this.removeListener(r.compName, r.eventName);
}
}
};
t.prototype.hasListener = function(t, e) {
for (var o = 0, n = this.events; o < n.length; o++) {
var i = n[o];
if (i.compName === t && i.eventName === e) return !0;
}
return !1;
};
t.prototype.removeListener = function(t, e) {
for (var o = 0; o < this.events.length; o++) {
var n = this.events[o];
if (n.compName === t && n.eventName === e) {
n.compName = null;
n.compUUID = null;
n.eventName = null;
n.callback = null;
n.that = null;
this.events.splice(o, 1);
break;
}
}
};
return t;
}();
o.events = new n();
cc._RF.pop();
}, {} ],
FCardPage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f87efwvNpVF/YKrU1Ro9j3K", "FCardPage");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = t("../FNetWork/FSocketSend"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mPP = null;
e.mEM1 = null;
e.mEM2 = null;
e.mTos = null;
e.mTosScroll = null;
e.data = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
};
e.prototype.onEnable = function() {
this.mEM1.string = "";
this.mEM2.string = "";
FSDK.closeBanner();
};
e.prototype.onDisable = function() {
FSDK.openBanner();
};
e.prototype.editBegin = function(t, e) {
switch (e) {
case "1":
this.mEM1.placeholderLabel.string = "";
break;

case "2":
this.mEM2.placeholderLabel.string = "";
}
};
e.prototype.editEnd = function(t, e) {
switch (e) {
case "1":
this.mEM1.placeholderLabel.string = "Input your email";
break;

case "2":
this.mEM2.placeholderLabel.string = "Confirm your email";
}
};
e.prototype.setData = function(t) {
this.data = FConfig.conf.invite_task[t];
this.mPP.string = FConfig.FSDK_CONF.word.tip1 + " $" + this.data.amount;
FLog.normal("FTransPage", FConfig.conf, this.data, t);
};
e.prototype.closePage = function() {
r.FPanelManager.close_eff(this.node, !0);
};
e.prototype.getTrans = function() {
if (a.FGlobal.USER_INFO.invite_count >= this.data.count) {
if (this.mEM1.string != this.mEM2.string) {
FSDK.showToast("Please confirm your email");
return;
}
if (this.mEM1.string.length > 0) if (-1 != this.mEM1.string.indexOf("@")) {
this.closePage();
s.FSocketSend.C2S_trans(this.data.id, this.mEM1.string, this.mEM1.string, "invite");
a.FGlobal.invite_task.push(this.data.id);
cc.director.emit(FEventID.S2C_trans_history);
} else FSDK.showToast("Sorry, your email is not legal"); else FSDK.showToast("Sorry, the email can't be empty");
} else FSDK.showToast("Sorry, your invitation has not been completed yet");
};
e.prototype.showTos = function() {
this.mTos.active = !0;
this.mTosScroll.stopAutoScroll();
this.mTosScroll.scrollToTop(0);
};
e.prototype.closeTos = function() {
this.mTos.active = !1;
};
i([ d(cc.Label) ], e.prototype, "mPP", void 0);
i([ d(cc.EditBox) ], e.prototype, "mEM1", void 0);
i([ d(cc.EditBox) ], e.prototype, "mEM2", void 0);
i([ d(cc.Node) ], e.prototype, "mTos", void 0);
i([ d(cc.ScrollView) ], e.prototype, "mTosScroll", void 0);
return e = i([ l ], e);
}(cc.Component);
o.FCardPage = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"../FNetWork/FSocketSend": "FSocketSend"
} ],
FCionEvent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "26dffw8sylD3oAMuANOVMI2", "FCionEvent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, r = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../common/User"), c = t("../common/Events"), l = t("../common/EventConstants"), d = t("../common/PopupConstants"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tipsLable = [];
return e;
}
e.prototype.onLoad = function() {
this.initEvents();
};
e.prototype.initEvents = function() {
FSDK.addCreditListen(this.severCb, this);
c.events.on(this.name, this.uuid, l.GameEvents.OPENVDIEO, this.openVidoe, this);
};
e.prototype.onDestroy = function() {
c.events.removeListener(this.name, l.GameEvents.OPENVDIEO);
};
e.prototype.severCb = function(t) {
var e = this;
this.scheduleOnce(function() {
switch (t.type) {
case "gp":
e.tipsAnim(0, t.num - s.user.firstGold);
s.user.firstGold = t.num;
break;

case "pp":
e.tipsAnim(1, t.num - s.user.secondGold);
s.user.secondGold = t.num;
break;

case "credit":
e.tipsAnim(2, t.num - s.user.credit);
s.user.credit = t.num;
}
s.user.save();
c.events.emit(l.GameEvents.UPDATAUI);
}, 1);
FLog.normal("服务器金币数量:", t.num);
};
e.prototype.tipsAnim = function(t, e) {
var o = this;
this.tipsLable[t].stopAllActions();
this.tipsLable[t].active = !1;
this.tipsLable[t].position = cc.v2(62.5, -5);
this.tipsLable[t].opacity = 0;
this.tipsLable[t].getComponent(cc.Label).string = 2 == t ? "+" + e : "+" + e.toFixed(2);
this.tipsLable[t].active = !0;
var n = cc.tween;
n(this.tipsLable[t]).parallel(n().by(.2, {
opacity: 255
}, {
easing: "backIn"
}), n().by(.2, {
y: 5
}, {
easing: "backIn"
})).delay(1.5).call(function() {
o.tipsLable[t].active = !1;
o.tipsLable[t].position = cc.v2(62.5, -5);
o.tipsLable[t].opacity = 0;
}).start();
};
e.prototype.openVidoe = function(t, e, o) {
var n = this;
void 0 === o && (o = !0);
t.node.opacity = 255;
t.node.zIndex = 10;
s.user.setIsRedAndCost(!1);
l.GameConstant.isAward = !0;
s.user.save();
cc.tween(t.node).to(.3, {
position: cc.v2(0, 0),
scale: 2
}).call(function() {
return r(n, void 0, void 0, function() {
var e, n;
return a(this, function(i) {
e = FSDK.getRandomReward();
n = [ "", e.num, "Brick", o, t ];
switch (e.type) {
case 1:
n[0] = "gp";
break;

case 2:
n[0] = "pp";
break;

case 3:
n[0] = "credit";
n[1] = s.user.getLumpData().bxCredit;
}
c.events.emit(l.GameEvents.SHOW_POPUP, d.PopUpName.SUPERPRIZE, null, n);
s.user.IsShake && FSDK.shake(50);
return [ 2 ];
});
});
}).start();
};
i([ f(cc.Node) ], e.prototype, "tipsLable", void 0);
return e = i([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User"
} ],
FConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad3c1XqgJdJ55YjLkGvRwlm", "FConfig");
var n = function() {
function t() {}
t.IS_DEBUG = !1;
t.IS_LOG = !0;
t.GAME_NAME = "测试";
t.VERSION = "1.0.0";
t.VERSION_CODE = 100;
t.LINK_CONF = null;
t.FSDK_CONF = {
UPDATE_CONF: {
ver: "1.0.1",
must: !1
},
AD_CONF: {
video_fresh_time: 0,
inters_fresh_time: {
star: 300,
new: 600,
old: 300
},
video_limit: 100,
inters_limit: {
new: 10,
old: 20
},
video: "b5b449f2f58cd7",
inters: "b5bbdc725768fa",
banner: "b5baca41a2536f"
},
isBlack: !1,
REAL_USER: {
online_time: 10800,
ad_num: 35
},
SCALE_PADDING: .56,
TOP_PADDING: 65,
CREDIT_DIF: [ 0, 100001, 200001 ],
RANDOM_REWARD: [ {
cardNum: [ 0, 50 ],
credit: 0,
card: 1
}, {
cardNum: [ 50, 100 ],
credit: .15,
card: .85
}, {
cardNum: [ 100, 200 ],
credit: .3,
card: .7
}, {
cardNum: [ 200, 400 ],
credit: .5,
card: .5
}, {
cardNum: [ 400, 500 ],
credit: .7,
card: .3
} ],
CAR_GET_CONF: {
pp: 30,
gp: 30,
card: [ {
id: 101,
have: [ 0, 30 ],
win: [ 1, 3 ]
}, {
id: 102,
have: [ 30, 50 ],
win: [ 1, 2 ]
}, {
id: 103,
have: [ 50, 80 ],
win: [ .5, 2 ]
}, {
id: 104,
have: [ 80, 100 ],
win: [ .5, 1 ]
}, {
id: 105,
have: [ 100, 150 ],
win: [ .5, 1 ]
}, {
id: 106,
have: [ 150, 200 ],
win: [ .5, 1 ]
}, {
id: 107,
have: [ 200, 250 ],
win: [ .1, 1 ]
}, {
id: 108,
have: [ 250, 300 ],
win: [ .1, 1 ]
}, {
id: 109,
have: [ 300, 350 ],
win: [ .05, 1 ]
}, {
id: 110,
have: [ 350, 400 ],
win: [ .05, 1 ]
}, {
id: 111,
have: [ 400, 450 ],
win: [ .05, .5 ]
}, {
id: 112,
have: [ 450, 498 ],
win: [ .05, .1 ]
}, {
id: 113,
have: [ 498, 999 ],
win: [ 0, 0 ]
} ]
},
MARQUEE_CONF: {
fresh_time: [ 5, 15 ],
weight: [ {
id: 101,
type: 1,
desc: "Google Gift Card",
weight: 1e4,
num: "$10",
color: "#6CE73C"
}, {
id: 102,
type: 1,
desc: "Google Gift Card",
weight: 5e3,
num: "$20",
color: "#6CE73C"
}, {
id: 103,
type: 1,
desc: "Google Gift Card",
weight: 3e3,
num: "$50",
color: "#6CE73C"
}, {
id: 104,
type: 1,
desc: "Google Gift Card",
weight: 1e3,
num: "$100",
color: "#6CE73C"
}, {
id: 105,
type: 1,
desc: "Google Gift Card",
weight: 500,
num: "$500",
color: "#6CE73C"
}, {
id: 201,
type: 2,
desc: "App store Gift Card",
weight: 1e4,
num: "$10",
color: "#6CE73C"
}, {
id: 202,
type: 2,
desc: "App store Gift Card",
weight: 5e3,
num: "$20",
color: "#6CE73C"
}, {
id: 203,
type: 2,
desc: "App store Gift Card",
weight: 3e3,
num: "$50",
color: "#6CE73C"
}, {
id: 204,
type: 2,
desc: "App store Gift Card",
weight: 1e3,
num: "$100",
color: "#6CE73C"
}, {
id: 205,
type: 2,
desc: "App store Gift Card",
weight: 500,
num: "$500",
color: "#6CE73C"
}, {
id: 301,
type: 3,
desc: "Paypal Gift Card",
weight: 1e4,
num: "$10",
color: "#00D6FF"
}, {
id: 302,
type: 3,
desc: "Paypal Gift Card",
weight: 5e3,
num: "$20",
color: "#00D6FF"
}, {
id: 303,
type: 3,
desc: "Paypal Gift Card",
weight: 3e3,
num: "$50",
color: "#00D6FF"
}, {
id: 304,
type: 3,
desc: "Paypal Gift Card",
weight: 1e3,
num: "$100",
color: "#00D6FF"
}, {
id: 305,
type: 3,
desc: "Paypal Gift Card",
weight: 500,
num: "$500",
color: "#00D6FF"
}, {
id: 401,
type: 4,
desc: "Amazon Gift Card",
weight: 6e3,
num: "$10",
color: "#FF905C"
}, {
id: 402,
type: 4,
desc: "Amazon Gift Card",
weight: 3e3,
num: "$20",
color: "#FF905C"
}, {
id: 403,
type: 4,
desc: "Amazon Gift Card",
weight: 1800,
num: "$50",
color: "#FF905C"
}, {
id: 404,
type: 4,
desc: "Amazon Gift Card",
weight: 600,
num: "$100",
color: "#FF905C"
}, {
id: 405,
type: 4,
desc: "Amazon Gift Card",
weight: 300,
num: "$500",
color: "#FF905C"
} ]
},
LIST_CONF: {
targetTitle: [ "Collect & more coins to redeem", "Historical highest level reaches &Lv", "Login for & days consecutively" ],
target: [ {
id: 101,
name: "Google",
type: 1,
value: 10,
coin: 1e5,
step1: 1e5,
step2: 100,
step3: 30
}, {
id: 102,
name: "Google",
type: 1,
value: 25,
coin: 225e3,
step1: 225e3,
step2: 200,
step3: 50
}, {
id: 103,
name: "Google",
type: 1,
value: 50,
coin: 4e5,
step1: 4e5,
step2: 300,
step3: 80
}, {
id: 201,
name: "App store",
type: 2,
value: 10,
coin: 1e5,
step1: 1e5,
step2: 100,
step3: 30
}, {
id: 202,
name: "App store",
type: 2,
value: 25,
coin: 225e3,
step1: 225e3,
step2: 200,
step3: 50
}, {
id: 203,
name: "App store",
type: 2,
value: 50,
coin: 4e5,
step1: 4e5,
step2: 300,
step3: 80
}, {
id: 301,
name: "Paypal",
type: 3,
value: 10,
coin: 1e5,
step1: 1e5,
step2: 100,
step3: 30
}, {
id: 302,
name: "Paypal",
type: 3,
value: 25,
coin: 225e3,
step1: 225e3,
step2: 200,
step3: 50
}, {
id: 303,
name: "Paypal",
type: 3,
value: 50,
coin: 4e5,
step1: 4e5,
step2: 300,
step3: 80
}, {
id: 401,
name: "Amazon",
type: 4,
value: 10,
coin: 1e5,
step1: 1e5,
step2: 100,
step3: 30
}, {
id: 402,
name: "Amazon",
type: 4,
value: 25,
coin: 225e3,
step1: 225e3,
step2: 200,
step3: 50
}, {
id: 403,
name: "Amazon",
type: 4,
value: 50,
coin: 4e5,
step1: 4e5,
step2: 300,
step3: 80
} ]
},
word: {
tip1: "Cash",
tip2: "redeem",
tip3: "Google Gift Card",
tip4: "Paypal Gift Card",
tip5: "Successfully redeemed",
tip6: "Currently <color=#5796CF>& players</c> already successfully redeemed",
tip7: "You hace got $& (Up to $@ can cash out)",
tip8: "You only need to collect <color=#F0791B>$&</c> to cash out",
tip9: "The card is not enough, please change it into Paypal",
tip10: "Input your paypal email",
tip11: "Input your phone",
tip12: "Currently <color=#8CFF4B>& players</c> already successfully redeemed"
},
TWO_CARD: {
cardList: [ [ 101, 102 ], [ 201, 202 ], [ 301, 302 ] ],
card1: {
amount: 100,
target: [ {
title: "Collect <color=#F0791B>$100</c> more gifts card to cash out",
cnt: 100
}, {
title: "Historical highest level reaches <color=#F0791B>200Lv</c>",
cnt: 200
}, {
title: "Login for <color=#F0791B>30 days</c> consecutively",
cnt: 30
} ]
},
card2: {
amount: 500,
target: [ {
title: "Collect <color=#F0791B>$500</c> more gifts card to cash out",
cnt: 500
} ]
}
},
SIGN_CONF: [ 5, 5, 5, 5, 5, 5, 10 ],
TASK_CONF: [ {
amount: null,
title: "测试标题1",
target: null
}, {
amount: null,
title: "测试标题1",
target: null
}, {
amount: null,
title: "测试标题1",
target: null
}, {
amount: null,
title: "测试标题1",
target: null
}, {
amount: null,
title: "测试标题1",
target: null
} ],
link: "https://www.baidu.com"
};
t.UMENG_CONFIG = {
video_apply: "video_apply",
video_load: "video_load",
video_fail: "video_fail",
video_show: "video_show",
video_click: "video_click",
video_suc: "video_suc",
banner_apply: "banner_apply",
banner_load: "banner_load",
banner_fail: "banner_fail",
banner_show: "banner_show",
banner_click: "banner_click",
inter_apply: "inter_apply",
inter_load: "inter_load",
inter_fail: "inter_fail",
inter_show: "inter_show",
inter_click: "inter_click",
Redeem_pp_100: "Redeem_pp_100",
Redeem_gp_100: "Redeem_gp_100",
Redeem_pp_max: "Redeem_pp_max",
Redeem_gp_max: "Redeem_gp_max",
Redeem_coin_100000: "Redeem_coin_100000",
Redeem_coin_225000: "Redeem_coin_225000",
Redeem_coin_400000: "Redeem_coin_400000"
};
t.EMAIL_SUFFIX = [ "gamail.com", "hotmail.fr", "t-online.de", "libero.it", "yahoo.com.ph", "hotmail.com", "hotmail.fr", "live.fr", "live.com" ];
t.conf_hash = "";
t.conf = null;
t.CREDIT_FROM = {
SIGN_IN: "sign in",
TASK_REWARD: "task reward"
};
t.game_settings_info = {
hash: "",
zip: ""
};
t.LOGIN_DATA = {
pg: "",
ver: "1.0.1",
ver_code: 101,
sdk_int: 26,
os_ver: "Android 6.0",
lang: "zh_CN",
dev_fac: "weng",
dev_model: "test",
network: "WIFI",
resolution: "720,1280",
channel: "sdy",
root: 0,
apk_comment: "",
tz: 8,
imsi: "",
aid: "",
network_config: [ "" ],
conf_hash: ""
};
return t;
}();
window.FConfig = n;
cc._RF.pop();
}, {} ],
FCreditRecord: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3f28fiBg3tBob6TUy1XYPAj", "FCreditRecord");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FNetWork/FSocketSend"), a = t("../FModel/FPanelManager"), s = t("../FModel/FGlobal"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mTitle_pp = null;
e.mTitle_gp = null;
e.mScroll = null;
e.mItem = null;
e.type = "";
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
};
e.prototype.onEnable = function() {
this.mScroll.stopAutoScroll();
this.mScroll.scrollToTop(0);
cc.director.on(FEventID.CARD_RECORD, this.cardRecord, this);
};
e.prototype.onDisable = function() {
cc.director.off(FEventID.CARD_RECORD, this.cardRecord, this);
};
e.prototype.closePage = function() {
a.FPanelManager.close_eff(this.node, !0);
};
e.prototype.setType = function(t) {
this.type = t;
this.mTitle_gp.active = this.mTitle_pp.active = !1;
this["mTitle_" + t].active = !0;
r.FSocketSend.C2S_info([ "coins" ]);
};
e.prototype.cardRecord = function(t) {
if (t[this.type]) {
for (var e = t[this.type], o = 0; o < this.mScroll.content.childrenCount; o++) this.mScroll.content.children[o].active = !1;
for (o = 0; o < e.length; o++) {
var n = null;
o < this.mScroll.content.childrenCount ? (n = this.mScroll.content.children[o]).active = !0 : (n = cc.instantiate(this.mItem)).parent = this.mScroll.content;
n.getChildByName("bg").active = (o + 1) % 2 != 0;
n.getChildByName("from").getComponent(cc.Label).string = e[o].from;
n.getChildByName("change").getComponent(cc.Label).string = "$" + e[o].change.toFixed(2);
n.getChildByName("amount").getComponent(cc.Label).string = "$" + e[o].amount.toFixed(2);
n.getChildByName("time").getComponent(cc.Label).string = s.FGlobal.getDateDay1(e[o].time);
}
} else for (o = 0; o < this.mScroll.content.childrenCount; o++) this.mScroll.content.children[o].active = !1;
FLog.normal("历史记录 ", t);
};
i([ d(cc.Node) ], e.prototype, "mTitle_pp", void 0);
i([ d(cc.Node) ], e.prototype, "mTitle_gp", void 0);
i([ d(cc.ScrollView) ], e.prototype, "mScroll", void 0);
i([ d(cc.Node) ], e.prototype, "mItem", void 0);
return e = i([ l ], e);
}(cc.Component);
o.FCreditRecord = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"../FNetWork/FSocketSend": "FSocketSend"
} ],
FEventID: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b3894dOcBRARbAu4xSDx3Qh", "FEventID");
var n = function() {
function t() {}
t.EVENT_CLOSE = "EVENT_CLOSE";
t.EVENT_IO_ERROR = "EVENT_IO_ERROR";
t.S2C_reg_login = "S2C_reg_login";
t.S2C_heartbeat = "S2C_heartbeat";
t.S2C_update_credit = "S2C_update_credit";
t.S2C_update_coin = "S2C_update_coin";
t.S2C_daily_check_in = "S2C_daily_check_in";
t.S2C_info = "S2C_info";
t.S2C_invited = "S2C_invited";
t.S2C_gift_country = "S2C_gift_country";
t.S2C_gift_list = "S2C_gift_list";
t.S2C_trans = "S2C_trans";
t.S2C_broadcast = "S2C_broadcast";
t.S2C_add_counters = "S2C_add_counters";
t.S2C_friends = "S2C_friends";
t.S2C_wx_info = "S2C_wx_info";
t.S2C_pg_user_cnt = "S2C_pg_user_cnt";
t.S2C_trans_history = "S2C_trans_history";
t.FRESH_CREDIT = "FRESH_CREDIT";
t.NEXT_DAY = "NEXT_DAY";
t.FRESH_USERINFO = "FRESH_USERINFO";
t.CARD_RECORD = "CARD_RECORD";
t.FRESH_FLAG = "FRESH_FLAG";
return t;
}();
window.FEventID = n;
cc._RF.pop();
}, {} ],
FGlobal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9b237N5/ndPCpAeLX6cDMc9", "FGlobal");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./FPanelManager");
(function(t) {
t.NetWork = null;
t.ToLoad = null;
t.Count = null;
t.USER_INFO = {
reg_time: 0,
now: 0,
off_time: 0,
login_time: 0,
login_days: 0,
login_cnt: 0,
credit: 0,
be_invite: 0,
invite_code: "",
invite_count: 0,
isNextDay: !1,
isFlag: !0,
isBlack: !0,
isGrade: !1,
preferences: {},
credit_pp: 0,
credit_gp: 0,
setting: {
sound: !0,
shake: !0
},
online_total: 0,
task: 0,
cardGet: {
pp: 0,
gp: 0
},
trans_record: {
twocard: [],
list: []
},
ALL_CONF: null
};
t.SIGN_INFO = {
signDay: 0,
isSign: 0,
isLongSign: 0
};
t.ONE_UMENG = [];
t.TASK_INFO = {};
t.invite_task = [];
t.setConf = function() {
var e = FConfig.game_settings_info.zip;
if (e) {
FConfig.LINK_CONF = t.uncompress(e);
FLog.normal("线上配置   ", FConfig.LINK_CONF);
var o = "";
for (var i in FConfig.LINK_CONF.VERSION_CONF.ALL_CONF) FConfig.VERSION >= i && (o = i);
if (FConfig.LINK_CONF.VERSION_CONF.ALL_CONF && FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[o]) {
var r = FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[o];
for (var i in r) FConfig.LINK_CONF.ALL_CONF[i] = r[i];
}
var a = "";
for (var i in FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF) FConfig.VERSION >= i && (a = i);
if (FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF && FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[a]) {
r = FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[a];
for (var i in r) FConfig.LINK_CONF.FSDK_CONF[i] = r[i];
}
}
t.USER_INFO.ALL_CONF = FConfig.LINK_CONF.ALL_CONF;
FConfig.FSDK_CONF = FConfig.LINK_CONF.FSDK_CONF;
FConfig.FSDK_CONF.isBlack && (t.USER_INFO.isBlack = !0);
FConfig.FSDK_CONF.UPDATE_CONF.ver > FConfig.VERSION && n.FPanelManager.load("FUpdate", cc.director.getScene());
};
t.uncompress = function(t) {
for (var o = t.replace(/↵/g, ""), n = atob(o), i = new Array(n.length), r = 0, a = n.length; r < a; ++r) i[r] = n.charCodeAt(r);
var s = new Zlib.Inflate(i).decompress();
return JSON.parse(e(s));
};
function e(t) {
var e, o, n, i, r, a;
e = "";
n = t.length;
o = 0;
for (;o < n; ) switch ((i = t[o++]) >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
e += String.fromCharCode(i);
break;

case 12:
case 13:
r = t[o++];
e += String.fromCharCode((31 & i) << 6 | 63 & r);
break;

case 14:
r = t[o++];
a = t[o++];
e += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | (63 & a) << 0);
}
return e;
}
t.Utf8ArrayToStr = e;
t.getDateDay = function(t) {
var e = new Date(1e3 * t), o = e.getFullYear() + "", n = e.getMonth() + 1 > 9 ? String(e.getMonth() + 1) : "0" + (e.getMonth() + 1), i = e.getDate() > 9 ? String(e.getDate()) : "0" + e.getDate();
return parseInt(o + n + i);
};
t.getDateDay1 = function(t) {
var e = new Date(1e3 * t);
return e.getFullYear() + "." + (e.getMonth() + 1 > 9 ? String(e.getMonth() + 1) : "0" + (e.getMonth() + 1)) + "." + (e.getDate() > 9 ? String(e.getDate()) : "0" + e.getDate());
};
t.Toast = function(e, o) {
void 0 === o && (o = "#ffffff");
t.piaoPool.size() && t.piao_add(e, o);
};
t.piao_list = [];
t.color_list = [];
t.piaoPool = new cc.NodePool();
t.piao_add = function(e, o) {
t.piao_list.push(e);
t.color_list.push(o);
1 == t.piao_list.length && t.openadd();
};
t.piao_savelist = [];
t.openadd = function() {
if (t.piao_list.length) {
for (var e = 0; e < t.piao_savelist.length; e++) cc.tween(t.piao_savelist[e]).by(.5, {
y: 54
}).start();
var o = t.piaoPool.get();
o.parent = cc.director.getScene();
o.stopAllActions();
o.y = cc.winSize.height / 2;
o.opacity = 255;
o.getChildByName("msg").getComponent(cc.Label).string = this.piao_list[0];
o.getChildByName("msg").color = new cc.Color().fromHEX(this.color_list[0]);
cc.tween(o).by(.5, {
y: 54
}).call(function() {
t.piao_savelist.push(o);
t.piao_list.shift();
t.color_list.shift();
t.openadd();
}).delay(1).to(.5, {
opacity: 0
}).call(function() {
t.piao_savelist.shift();
t.piaoPool.put(o);
}).start();
}
};
t.randomFrom = function(t, e) {
var o = Math.random() * (e - t) + t;
return Math.floor(100 * o) / 100;
};
t.resetData = function() {
FLog.normal("第二天了");
t.SIGN_INFO.signDay < 7 && (t.SIGN_INFO.isSign = 0);
t.SIGN_INFO.signDay >= 7 && (t.SIGN_INFO.signDay += 1);
FNative.AD_COUNT = {
video: 0,
inters: 0
};
t.USER_INFO.cardGet = {
pp: 0,
gp: 0
};
FSDK.saveData("CARD_GET", t.USER_INFO.cardGet);
FSDK.saveData("AD_COUNT", FNative.AD_COUNT);
FSDK.saveData("SIGN_INFO", t.SIGN_INFO);
};
t.setPreferences = function() {
"SIGN_INFO" in t.USER_INFO.preferences && (t.SIGN_INFO = t.USER_INFO.preferences.SIGN_INFO);
"TASK_INFO" in t.USER_INFO.preferences && (t.TASK_INFO = t.USER_INFO.preferences.TASK_INFO);
"GRADE" in t.USER_INFO.preferences && (t.USER_INFO.isGrade = t.USER_INFO.preferences.GRADE);
"AD_SHOW_CNT" in t.USER_INFO.preferences && (FNative.AD_SHOW_CNT = t.USER_INFO.preferences.AD_SHOW_CNT);
"AD_COUNT" in t.USER_INFO.preferences && (FNative.AD_COUNT = t.USER_INFO.preferences.AD_COUNT);
"CARD_GET" in t.USER_INFO.preferences && (t.USER_INFO.cardGet = t.USER_INFO.preferences.CARD_GET);
"ONE_UMENG" in t.USER_INFO.preferences && (t.ONE_UMENG = t.USER_INFO.preferences);
cc.sys.os == cc.sys.OS_IOS && (t.USER_INFO.isGrade = !0);
};
t.getEmail = function() {
return t.randomWord(2) + "****" + t.randomWord(1) + "@" + FConfig.EMAIL_SUFFIX[Math.floor(Math.random() * FConfig.EMAIL_SUFFIX.length)];
};
t.randomWord = function(t) {
for (var e = "", o = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], n = 0; n < t; n++) e += o[Math.round(Math.random() * (o.length - 1))];
return e;
};
t.getMarMsg = function() {
return o(FConfig.FSDK_CONF.MARQUEE_CONF.weight);
};
function o(t) {
for (var e = 0, o = 0; o < t.length; o++) e += parseInt(t[o].weight);
var n = Math.floor(Math.random() * e), i = 0;
for (o = 0; o < t.length; o++) if (n < (i += parseInt(t[o].weight))) return t[o];
}
t.getPrizeAddByRandom = o;
t.getQuRandom = function(t, e) {
var o = e - t;
return t + Math.floor(Math.random() * (o + 1));
};
t.getQuCardRandom = function(t, e) {
var o = e - t, n = t + Math.random() * o;
return Math.round(100 * n) / 100;
};
t.getTopPadding = function() {
return cc.winSize.width / cc.winSize.height >= FConfig.FSDK_CONF.SCALE_PADDING ? FConfig.FSDK_CONF.TOP_PADDING : 0;
};
t.getScale = function() {
return cc.winSize.width / cc.winSize.height > FConfig.FSDK_CONF.SCALE_PADDING ? 0 : FConfig.FSDK_CONF.TOP_PADDING;
};
t.exWenzi = function(t, e, o) {
void 0 === e && (e = null);
void 0 === o && (o = null);
var n = t;
null != e && -1 != t.indexOf("&") && (n = t.replace(/&/g, String(e)));
null != o && -1 != n.indexOf("@") && (n = n.replace(/@/g, String(o)));
return n;
};
t.getCardType = function(e) {
switch (e) {
case 0:
return Math.random() > .5 ? t.USER_INFO.cardGet.gp < FConfig.FSDK_CONF.CAR_GET_CONF.gp ? {
type: 1,
num: t.getCardNum(1)
} : t.USER_INFO.cardGet.pp < FConfig.FSDK_CONF.CAR_GET_CONF.pp ? {
type: 2,
num: t.getCardNum(2)
} : {
type: 1,
num: 0
} : t.USER_INFO.cardGet.pp < FConfig.FSDK_CONF.CAR_GET_CONF.pp ? {
type: 2,
num: t.getCardNum(2)
} : t.USER_INFO.cardGet.gp < FConfig.FSDK_CONF.CAR_GET_CONF.gp ? {
type: 1,
num: t.getCardNum(1)
} : {
type: 2,
num: 0
};

case 1:
return t.USER_INFO.cardGet.gp < FConfig.FSDK_CONF.CAR_GET_CONF.gp ? {
type: 1,
num: t.getCardNum(1)
} : {
type: 1,
num: 0
};

case 2:
return t.USER_INFO.cardGet.pp < FConfig.FSDK_CONF.CAR_GET_CONF.pp ? {
type: 2,
num: t.getCardNum(2)
} : {
type: 2,
num: 0
};
}
};
t.getCardNum = function(e) {
var o = 0;
1 == e ? o = t.USER_INFO.credit_gp : 2 == e && (o = t.USER_INFO.credit_pp);
for (var n = 0; n < FConfig.FSDK_CONF.CAR_GET_CONF.card.length; n++) if (o >= FConfig.FSDK_CONF.CAR_GET_CONF.card[n].have[0] && o < FConfig.FSDK_CONF.CAR_GET_CONF.card[n].have[1]) return t.getQuCardRandom(FConfig.FSDK_CONF.CAR_GET_CONF.card[n].win[0], FConfig.FSDK_CONF.CAR_GET_CONF.card[n].win[1]);
return 0;
};
t.getRandomReward = function() {
for (var e = {
cardNum: [ 0, 50 ],
credit: 1,
card: 0
}, o = 0; o < FConfig.FSDK_CONF.RANDOM_REWARD.length; o++) if (t.USER_INFO.credit_gp >= FConfig.FSDK_CONF.RANDOM_REWARD[o].cardNum[0] && t.USER_INFO.credit_gp < FConfig.FSDK_CONF.RANDOM_REWARD[o].cardNum[1] || t.USER_INFO.credit_pp >= FConfig.FSDK_CONF.RANDOM_REWARD[o].cardNum[0] && t.USER_INFO.credit_pp < FConfig.FSDK_CONF.RANDOM_REWARD[o].cardNum[1]) {
e = FConfig.FSDK_CONF.RANDOM_REWARD[o];
break;
}
if (e) {
if (Math.random() <= e.card) {
var n = t.getCardType(0);
return n.num ? n : {
type: 3,
num: FSDK.getCreditDif()
};
}
return {
type: 3,
num: FSDK.getCreditDif()
};
}
return {
type: 3,
num: FSDK.getCreditDif()
};
};
t.isOnUmeng = function(e) {
for (var o = !1, n = 0; n < t.ONE_UMENG.length; n++) t.ONE_UMENG[n] == e && (o = !0);
return o;
};
})(o.FGlobal || (o.FGlobal = {}));
cc._RF.pop();
}, {
"./FPanelManager": "FPanelManager"
} ],
FGrade: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "41668P82a5CxIPoUlql4RHK", "FGrade");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = t("../FModel/FPanelManager"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mStarNode = null;
e.num = 5;
e.cb = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
};
e.prototype.onEnable = function() {
this.num = 5;
for (var t = 0; t < this.mStarNode.childrenCount; t++) this.mStarNode.children[t].getChildByName("guang").active = !0;
};
e.prototype.clickStar = function(t) {
this.num = parseInt(t.target.name);
for (var e = 0; e < this.mStarNode.childrenCount; e++) this.mStarNode.children[e].getChildByName("guang").active = e < this.num;
};
e.prototype.setGrade = function() {
r.FGlobal.USER_INFO.isGrade = !0;
FSDK.saveData("GRADE", r.FGlobal.USER_INFO.isGrade);
this.num > 3 && FNative.jumpShop(FNetWorkConfig.data.pg);
this.closePage();
};
e.prototype.setCb = function(t, e) {
this.cb = {
cb: t,
target: e
};
};
e.prototype.closePage = function(t) {
this.cb.cb.call(this.cb.target, r.FGlobal.USER_INFO.isGrade);
a.FPanelManager.close_eff(this.node, !0);
};
i([ l(cc.Node) ], e.prototype, "mStarNode", void 0);
return e = i([ c ], e);
}(cc.Component);
o.FGrade = d;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FHideNode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "83bb6ZpVzBLhYfohwdy5RUH", "FHideNode");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./common/User"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.inviteNode = [];
e.invtiyParentNode = null;
e.ui = null;
e.turnTableNode = null;
e.icon = [];
return e;
}
e.prototype.onLoad = function() {
var t = this;
FSDK.addFlagListen(function(e) {
e && t.init();
}, this);
};
e.prototype.init = function() {
this.inviteNode[0].active = !1;
this.inviteNode[1].active = !1;
this.ui.getChildByName("coin_3").active = !0;
if (cc.sys.os == cc.sys.OS_IOS) {
this.turnTableNode.active = !0;
this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[1];
this.ui.getChildByName("coin_1").active = !0;
this.ui.getChildByName("coin_2").active = !0;
} else if (r.user.serverData.isFlag) {
this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[0];
this.ui.getChildByName("coin_1").active = !0;
this.ui.getChildByName("coin_2").active = !0;
this.turnTableNode.active = !0;
}
this.ui.active = !0;
};
e.prototype.inviteHandle = function() {
FSDK.showInvityPage(this.invtiyParentNode);
};
i([ c(cc.Node) ], e.prototype, "inviteNode", void 0);
i([ c(cc.Node) ], e.prototype, "invtiyParentNode", void 0);
i([ c(cc.Node) ], e.prototype, "ui", void 0);
i([ c(cc.Node) ], e.prototype, "turnTableNode", void 0);
i([ c(cc.SpriteFrame) ], e.prototype, "icon", void 0);
return e = i([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./common/User": "User"
} ],
FInvityPage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6de99LMK95Bfqf5WRpPGYDQ", "FInvityPage");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = t("./FInvityTaskItem"), s = t("../FNetWork/FSocketSend"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mInviteCnt = null;
e.mInviteCode = null;
e.mInviteLink = null;
e.mScroll = null;
e.mInvityItem = null;
e.mInvityEdit = null;
e.mRewardNode = null;
e.mInviteNode = null;
e.mMsg1 = null;
e.mMsg2 = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.node.getChildByName("Top").height = 85 + r.FGlobal.getScale();
this.mRewardNode.getComponent(cc.Widget).top = 700 + r.FGlobal.getScale();
};
e.prototype.start = function() {};
e.prototype.closePage = function() {
this.node.parent = null;
};
e.prototype.onEnable = function() {
this.mScroll.stopAutoScroll();
this.mScroll.scrollToTop(0);
this.initData();
s.FSocketSend.C2S_trans_history("invite");
FSDK.addUserInfoListen(this.userInfoListen, this);
cc.director.on(FEventID.S2C_trans_history, this.S2C_trans, this);
FSDK.closeBanner();
};
e.prototype.onDisable = function() {
cc.director.off(FEventID.S2C_trans_history, this.S2C_trans, this);
FSDK.openBanner();
};
e.prototype.S2C_trans = function() {
for (var t = r.FGlobal.invite_task, e = FConfig.conf.invite_task, o = 0, n = 0, i = 0; i < e.length; i++) if (r.FGlobal.USER_INFO.invite_count < e[i].count && !o) {
n = i;
o = e[i].count;
this.mMsg1.getComponent(cc.Label).string = "Invite " + (o - r.FGlobal.USER_INFO.invite_count) + " more friends can get rewards";
}
t.length != n && (this.mMsg1.getComponent(cc.Label).string = "Your rewards haven't been cliamed");
};
e.prototype.userInfoListen = function(t) {
this.initData();
FLog.normal("回调信息  ", t);
};
e.prototype.initData = function() {
this.mRewardNode.active = r.FGlobal.USER_INFO.isFlag;
this.mInviteNode.active = !r.FGlobal.USER_INFO.isFlag && !r.FGlobal.USER_INFO.be_invite;
this.mInviteCnt.string = "Invite " + r.FGlobal.USER_INFO.invite_count + " Friends";
this.mInviteCode.string = r.FGlobal.USER_INFO.invite_code + "";
this.mInviteLink.string = FConfig.FSDK_CONF.link + "";
this.mMsg1.active = this.mMsg2.active = r.FGlobal.USER_INFO.isFlag;
this.initTask();
};
e.prototype.copy = function(t, e) {
switch (e) {
case "code":
FSDK.copy(this.mInviteCode.string);
break;

case "url":
FSDK.copy(this.mInviteLink.string);
}
};
e.prototype.clickInvite = function() {
FSDK.share(FConfig.GAME_NAME + " have fun. What are you waiting for? Download it, input the refer code " + this.mInviteCode.string + " to get reward. " + this.mInviteLink.string);
};
e.prototype.initTask = function() {
FLog.normal("是不是conf ", FConfig.conf);
for (var t = FConfig.conf.invite_task, e = 0, o = 0; o < t.length; o++) if (r.FGlobal.USER_INFO.invite_count < t[o].count && !e) {
e = t[o].count;
this.mMsg1.getComponent(cc.Label).string = "Invite " + (e - r.FGlobal.USER_INFO.invite_count) + " more friends can get rewards";
}
for (var n = 0; n < t.length; n++) {
var i = null;
this.mScroll.content.childrenCount == t.length ? i = this.mScroll.content.children[n] : (i = cc.instantiate(this.mInvityItem)).parent = this.mScroll.content;
i.getComponent(a.FInvityTaskItem).setData(n, t[n], this.node);
}
};
e.prototype.getCode = function() {
this.mInvityEdit.string.length > 0 ? s.FSocketSend.C2S_invited(this.mInvityEdit.string) : FSDK.showToast("Sorry, the invitation code cannot be empty");
};
i([ d(cc.Label) ], e.prototype, "mInviteCnt", void 0);
i([ d(cc.Label) ], e.prototype, "mInviteCode", void 0);
i([ d(cc.Label) ], e.prototype, "mInviteLink", void 0);
i([ d(cc.ScrollView) ], e.prototype, "mScroll", void 0);
i([ d(cc.Node) ], e.prototype, "mInvityItem", void 0);
i([ d(cc.EditBox) ], e.prototype, "mInvityEdit", void 0);
i([ d(cc.Node) ], e.prototype, "mRewardNode", void 0);
i([ d(cc.Node) ], e.prototype, "mInviteNode", void 0);
i([ d(cc.Node) ], e.prototype, "mMsg1", void 0);
i([ d(cc.Node) ], e.prototype, "mMsg2", void 0);
return e = i([ l ], e);
}(cc.Component);
o.FInvityPage = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FNetWork/FSocketSend": "FSocketSend",
"./FInvityTaskItem": "FInvityTaskItem"
} ],
FInvityTaskItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ddfe/Mh51J6oXBBLdrGcIp", "FInvityTaskItem");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mAmount = null;
e.mTitle = null;
e.mPro = null;
e.sPro = null;
e.mBtnTrans = null;
e.mStaus = null;
e.pos = 0;
e.data = null;
e.parent = null;
return e;
}
e.prototype.onEnable = function() {
cc.director.on(FEventID.S2C_trans_history, this.setHistory, this);
};
e.prototype.onDisable = function() {
cc.director.off(FEventID.S2C_trans_history, this.setHistory, this);
};
e.prototype.setData = function(t, e, o) {
this.pos = t;
this.data = e;
this.parent = o;
this.mAmount.string = "$" + e.amount;
this.mTitle.string = "invite " + e.count + " friends";
this.mPro.string = r.FGlobal.USER_INFO.invite_count + "/" + e.count;
this.sPro.fillRange = r.FGlobal.USER_INFO.invite_count / e.count;
this.mBtnTrans.interactable = this.sPro.fillRange >= 1;
};
e.prototype.getTrans = function() {
var t = this;
FSDK.showTransPage(this.parent, this.data, function() {
r.FGlobal.invite_task.push(t.data.id);
t.setStatus({
status: 0
});
});
};
e.prototype.setHistory = function(t) {
if (this.data) if (t && t.data.records.length) {
var e = t.data.type;
t = t.data.records;
if ("invite" == e) for (var o = 0; o < t.length; o++) this.data.id == t[o].custom_id && this.setStatus(t[o]);
} else this.initStatus();
};
e.prototype.setStatus = function(t) {
var e = "Processing", o = "FF8F00";
switch (t.status) {
case 0:
e = "Processing";
o = "FF8F00";
break;

case 1:
e = "Finish";
o = "15C323";
break;

case 2:
e = "In Review";
o = "FF8F00";
break;

case -1:
e = "Refuse";
o = "D32424";
break;

case -2:
e = "GetFail";
o = "D32424";
}
this.mBtnTrans.node.active = !1;
this.mStaus.string = e;
this.mStaus.node.color = new cc.Color().fromHEX(o);
};
e.prototype.initStatus = function() {
if (this.data) for (var t = r.FGlobal.invite_task, e = 0; e < t.length; e++) if (t[e] == this.data.id) {
this.mStaus.node.active = !0;
this.setStatus({
status: 0
});
}
};
i([ c(cc.Label) ], e.prototype, "mAmount", void 0);
i([ c(cc.Label) ], e.prototype, "mTitle", void 0);
i([ c(cc.Label) ], e.prototype, "mPro", void 0);
i([ c(cc.Sprite) ], e.prototype, "sPro", void 0);
i([ c(cc.Button) ], e.prototype, "mBtnTrans", void 0);
i([ c(cc.Label) ], e.prototype, "mStaus", void 0);
return e = i([ s ], e);
}(cc.Component);
o.FInvityTaskItem = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FLanguageConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2d66ewvOH5KgI3pw6UojbJp", "FLanguageConfig");
var n = function() {
function t() {}
t.en = [ "" ];
t.pt = [];
t.id = [];
t.th = [];
return t;
}();
window.FLanguageConfig = n;
cc._RF.pop();
}, {} ],
FLanguageCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b8e257qu15B7Lgz843uycdp", "FLanguageCtrl");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.id = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.setLanguage = function() {};
i([ s ], e.prototype, "id", void 0);
return e = i([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
FLeft: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "22d71H4FhVNqKwEflmjiaDK", "FLeft");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mFlagNode = [];
e.mHome = null;
e.mVer = null;
e.mCode = null;
e.mBtn = null;
e.mSound = null;
e.mVibration = null;
e.mMainNode = null;
e.mCreditIcon = null;
e.mCreditIconSp = [];
e.mIcon = null;
e.mType = 0;
e.cb = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.setContentSize(cc.winSize);
this.setActive();
this.mVer.string = 1 == FConfig.IS_DEBUG ? "debug v" + FConfig.VERSION : "release v" + FConfig.VERSION;
this.mCode.string = r.FGlobal.USER_INFO.invite_code;
FSDK.addFlagListen(function(e) {
t.setActive();
}, this);
this.mSound.getChildByName("close").active = !r.FGlobal.USER_INFO.setting.sound;
this.mVibration.getChildByName("close").active = !r.FGlobal.USER_INFO.setting.shake;
FSDK.addCreditListen(function(e) {
t.mFlagNode[0].getChildByName("label").getComponent(cc.Label).string = "$" + r.FGlobal.USER_INFO.credit_pp.toFixed(2);
t.mFlagNode[1].getChildByName("label").getComponent(cc.Label).string = "$" + r.FGlobal.USER_INFO.credit_gp.toFixed(2);
t.mFlagNode[2].getChildByName("label").getComponent(cc.Label).string = "$" + r.FGlobal.USER_INFO.credit_gp.toFixed(2);
t.mFlagNode[3].getChildByName("label").getComponent(cc.Label).string = "" + r.FGlobal.USER_INFO.credit;
}, this);
};
e.prototype.setActive = function() {
for (var t = 0; t < this.mFlagNode.length; t++) !r.FGlobal.USER_INFO.isBlack && r.FGlobal.USER_INFO.isFlag ? this.mFlagNode[t].active = !0 : this.mFlagNode[t].active = !1;
this.mFlagNode[4].active = r.FGlobal.USER_INFO.isFlag;
if (cc.sys.os == cc.sys.OS_ANDROID) {
if (!r.FGlobal.USER_INFO.isBlack && r.FGlobal.USER_INFO.isFlag) {
this.mFlagNode[1].active = !0;
this.mFlagNode[2].active = !1;
}
} else if (cc.sys.os == cc.sys.OS_IOS) {
if (!r.FGlobal.USER_INFO.isBlack && r.FGlobal.USER_INFO.isFlag) {
this.mFlagNode[2].active = !0;
this.mFlagNode[1].active = !1;
}
this.mFlagNode[4].active = !1;
}
this.mFlagNode[0].getChildByName("label").getComponent(cc.Label).string = "$" + r.FGlobal.USER_INFO.credit_pp.toFixed(2);
this.mFlagNode[1].getChildByName("label").getComponent(cc.Label).string = "$" + r.FGlobal.USER_INFO.credit_gp.toFixed(2);
this.mFlagNode[2].getChildByName("label").getComponent(cc.Label).string = "$" + r.FGlobal.USER_INFO.credit_gp.toFixed(2);
this.mFlagNode[3].getChildByName("label").getComponent(cc.Label).string = "" + r.FGlobal.USER_INFO.credit;
this.mFlagNode[4].getChildByName("label").getComponent(cc.Label).string = "" + r.FGlobal.USER_INFO.invite_count;
this.mFlagNode[4].active = !1;
};
e.prototype.setData = function(t, e, o, n) {
void 0 === o && (o = 0);
void 0 === n && (n = null);
this.mCreditIcon.spriteFrame = this.mCreditIconSp[o];
this.mIcon = n;
this.mType = o;
this.cb = e;
this.node.getChildByName("bg").active = !1;
this.mMainNode.x = -cc.winSize.width / 2 - this.mMainNode.width / 2;
this.mMainNode.getComponent(cc.Widget).top = 640 + t;
this.mBtn.getChildByName("icon").scaleX = -1;
};
e.prototype.clickBtn = function() {
var t = this;
this.mBtn.getChildByName("red").active = !1;
if (!this.mMainNode.getNumberOfRunningActions()) {
var e = 0;
if (this.mMainNode.x < -cc.winSize.width / 2) {
e = -cc.winSize.width / 2 + this.mMainNode.width / 2;
this.node.getChildByName("bg").active = !0;
this.mFlagNode[4].getChildByName("label").getComponent(cc.Label).string = "" + r.FGlobal.USER_INFO.invite_count;
} else e = -cc.winSize.width / 2 - this.mMainNode.width / 2;
cc.tween(this.mMainNode).to(.1, {
x: e
}).call(function() {
if (e < -cc.winSize.width / 2) {
t.node.getChildByName("bg").active = !1;
t.mBtn.getChildByName("icon").scaleX = -1;
} else t.mBtn.getChildByName("icon").scaleX = 1;
}).start();
}
};
e.prototype.clickPP = function() {
FSDK.showTwoCard(0, this.node);
};
e.prototype.clickGP = function() {
FSDK.showTwoCard(1, this.node);
};
e.prototype.clickAP = function() {
FSDK.showTwoCard(1, this.node);
};
e.prototype.clickCoin = function() {
FSDK.showTransList(this.node, this.mType, this.mIcon);
};
e.prototype.clickInvite = function() {
FSDK.showInvityPage(this.node);
};
e.prototype.setSound = function() {
r.FGlobal.USER_INFO.setting.sound = !r.FGlobal.USER_INFO.setting.sound;
this.mSound.getChildByName("close").active = !r.FGlobal.USER_INFO.setting.sound;
localStorage.setItem("setting", JSON.stringify(r.FGlobal.USER_INFO.setting));
if (this.cb) {
var t = {
type: "sound",
value: r.FGlobal.USER_INFO.setting.sound
};
this.cb(t);
}
};
e.prototype.setShake = function() {
r.FGlobal.USER_INFO.setting.shake = !r.FGlobal.USER_INFO.setting.shake;
this.mVibration.getChildByName("close").active = !r.FGlobal.USER_INFO.setting.shake;
localStorage.setItem("setting", JSON.stringify(r.FGlobal.USER_INFO.setting));
if (this.cb) {
var t = {
type: "shake",
value: r.FGlobal.USER_INFO.setting.shake
};
this.cb(t);
}
};
e.prototype.clickHome = function() {
if (this.cb) {
this.cb({
type: "home",
value: !0
});
}
this.clickBtn();
};
i([ c(cc.Node) ], e.prototype, "mFlagNode", void 0);
i([ c(cc.Node) ], e.prototype, "mHome", void 0);
i([ c(cc.Label) ], e.prototype, "mVer", void 0);
i([ c(cc.Label) ], e.prototype, "mCode", void 0);
i([ c(cc.Node) ], e.prototype, "mBtn", void 0);
i([ c(cc.Node) ], e.prototype, "mSound", void 0);
i([ c(cc.Node) ], e.prototype, "mVibration", void 0);
i([ c(cc.Node) ], e.prototype, "mMainNode", void 0);
i([ c(cc.Sprite) ], e.prototype, "mCreditIcon", void 0);
i([ c(cc.SpriteFrame) ], e.prototype, "mCreditIconSp", void 0);
return e = i([ s ], e);
}(cc.Component);
o.FLeft = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FLoadingCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8dceaAXeBtINb9fa0rBxp0J", "FLoadingCtrl");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.IS_LOGINSUC = !1;
e.s_pro = null;
return e;
}
e.prototype.onLoad = function() {
FSDK.init({
ip_release: "ws://47.254.87.23:20219/?pg=overseas_d",
ip_debug: "wss://test.wps168.com:20212/?pg=overseas_d",
pg: "com.light.overseas.demo",
isDebug: !1,
test_aid: "2223222633",
code: "overseas_d"
}, this.loginSuc, this);
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {};
e.prototype.socketSuc = function() {
FLog.normal("链接成功咯", this.IS_LOGINSUC);
};
e.prototype.loginSuc = function(t) {
console.log("登录信息  ", t);
this.IS_LOGINSUC = !0;
FSDK.addCreditListen(this.creditListen, this);
};
e.prototype.creditListen = function(t) {
FLog.normal("这个是credit监听1", t);
};
e.prototype.update = function(t) {
if ((this.s_pro.fillRange < .8 || this.IS_LOGINSUC) && this.s_pro.fillRange < 1) {
this.s_pro.fillRange += .5 * t;
this.s_pro.fillRange;
}
};
e.prototype.clickButton = function(t) {
switch (t.target.name) {
case "1":
FSDK.init({
ip_release: "",
ip_debug: "wss://test.wps168.com:20212/?pg=overseas_d",
pg: "com.light.overseas.demo",
isDebug: !0,
test_aid: "2223262233",
code: "",
tos_img: null
}, this.loginSuc, this);
break;

case "2":
FSDK.showTwoCard(0, this.node);
break;

case "3":
FSDK.showTransList(this.node);
break;

case "4":
FSDK.showInvityPage(this.node);
break;

case "5":
FSDK.showLeft(this.node, !1, function(t) {
FLog.normal("返回了什么   ", t);
});
break;

case "6":
FSDK.hideToLoad();
var e = FSDK.getRandomReward();
FLog.normal(e);
break;

case "7":
FSDK.showToast("测试TIP");
break;

case "8":
FSDK.setCredit("credit", 10, "test");
break;

case "9":
FSDK.setCredit("pp", r.FGlobal.randomFrom(.1, 5), "test");
break;

case "10":
FSDK.setCredit("gp", r.FGlobal.randomFrom(.1, 5), "test");
break;

case "11":
FSDK.showMarQuee(this.node);
break;

case "12":
FSDK.showGrade(this.node, function(t) {
FLog.normal("评星  ", t);
}, this);
break;

case "13":
FSDK.openVideo("test", this.videoSuc, this);
break;

case "14":
FSDK.openBanner();
break;

case "15":
FSDK.closeBanner();
break;

case "16":
FSDK.openInters(this.intersSuc, this);
break;

case "17":
FSDK.getTransList(function(t) {
FLog.normal("看看返回吧  ", t);
}, this);
}
};
e.prototype.videoSuc = function() {
FLog.normal("发反反复复11111");
};
e.prototype.intersSuc = function() {
FLog.normal("发反反复复22222");
};
i([ c(cc.Sprite) ], e.prototype, "s_pro", void 0);
return e = i([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "375ffTLnMtIN5TopH4/6Wq7", "FLogic");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../FModel/FGlobal"), i = function() {
function t() {
this.cbList = {};
this.RESTAR_TIME = null;
this.ONLINE_TIME = null;
}
t.getInstance = function() {
t._instance || (t._instance = new t());
return t._instance;
};
t.prototype.addCommonListenser = function() {
cc.director.on(FEventID.S2C_reg_login, this.on_S2C_reg_login, this);
cc.director.on(FEventID.S2C_heartbeat, this.on_S2C_heartbeat, this);
cc.director.on(FEventID.S2C_info, this.on_S2C_info, this);
cc.director.on(FEventID.S2C_update_credit, this.on_S2C_update_credit, this);
cc.director.on(FEventID.S2C_update_coin, this.on_S2C_update_coin, this);
cc.director.on(FEventID.S2C_invited, this.on_S2C_invited, this);
cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
cc.director.on(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
cc.director.on(FEventID.S2C_trans, this.on_S2C_trans, this);
};
t.prototype.removeCommonListenser = function() {
cc.director.off(FEventID.S2C_reg_login, this.on_S2C_reg_login, this);
cc.director.off(FEventID.S2C_update_credit, this.on_S2C_update_credit, this);
cc.director.off(FEventID.S2C_info, this.on_S2C_info, this);
cc.director.off(FEventID.S2C_heartbeat, this.on_S2C_heartbeat, this);
cc.director.off(FEventID.S2C_update_coin, this.on_S2C_update_coin, this);
cc.director.off(FEventID.S2C_invited, this.on_S2C_invited, this);
cc.director.off(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
cc.director.off(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
cc.director.off(FEventID.S2C_trans, this.on_S2C_trans, this);
};
t.prototype.on_S2C_heartbeat = function(e) {
if (n.FGlobal.getDateDay(n.FGlobal.USER_INFO.now) < n.FGlobal.getDateDay(e.data.time)) {
n.FGlobal.resetData();
if (t.getInstance().cbList[FEventID.NEXT_DAY]) {
var o = t.getInstance().cbList[FEventID.NEXT_DAY].cb, i = t.getInstance().cbList[FEventID.NEXT_DAY].target;
o.call(i);
}
}
n.FGlobal.USER_INFO.now = e.data.time;
n.FGlobal.NetWork.heartbeat();
};
t.prototype.on_S2C_reg_login = function(e) {
FSDK.hideToLoad();
FLog.normal("服务器返回登录信息   ", e);
var o = t.getInstance().cbList[FEventID.S2C_reg_login].cb, i = t.getInstance().cbList[FEventID.S2C_reg_login].target;
if (e.err) {
if ("RELOGIN MUST DELAY" == e.err) {
n.FGlobal.NetWork.clearAllTime();
n.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
n.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
n.FGlobal.NetWork = null;
FSDK.object.RESTAR_TIME = setTimeout(function() {
FSDK.init(FNetWorkConfig.data, n.FGlobal.NetWork.cb, n.FGlobal.NetWork.target);
clearTimeout(FSDK.object.RESTAR_TIME);
FSDK.hideToLoad();
}, 1e3 * (e.data.must_delay + 1));
FSDK.showToLoad("Rebinding", e.data.must_delay + 1);
}
} else {
if (e.data) {
n.FGlobal.USER_INFO.preferences = e.data.preferences;
n.FGlobal.setPreferences();
n.FGlobal.USER_INFO.invite_code = e.data.invite_code;
cc.log("Kankan      ", e.data);
n.FGlobal.USER_INFO.invite_count = e.data.invite_count;
n.FGlobal.USER_INFO.be_invite = e.data.personal.invited;
n.FGlobal.USER_INFO.login_cnt = e.data.login_cnt;
n.FGlobal.USER_INFO.login_days = e.data.login_days;
n.FGlobal.USER_INFO.credit = e.data.basic.credit;
n.FGlobal.USER_INFO.reg_time = e.data.reg_time;
n.FGlobal.USER_INFO.off_time = e.data.offline_timelen;
n.FGlobal.USER_INFO.login_time = e.data.now;
n.FGlobal.USER_INFO.trans_record = e.data.basic.redeem_task;
n.FGlobal.USER_INFO.online_total = e.data.online_total;
n.FGlobal.USER_INFO.isFlag = e.data.basic.user_vip;
n.FGlobal.USER_INFO.isBlack = e.data.b;
n.FGlobal.USER_INFO.now = e.data.now;
n.FGlobal.USER_INFO.credit_pp = e.data.basic.coins.pp ? e.data.basic.coins.pp : 0;
n.FGlobal.USER_INFO.credit_gp = e.data.basic.coins.gp ? e.data.basic.coins.gp : 0;
if (e.data.conf_hash) {
FConfig.conf_hash = e.data.conf_hash;
localStorage.setItem("conf_hash", FConfig.conf_hash);
}
if (e.data.game_settings_info && e.data.game_settings_info.zip) {
FConfig.game_settings_info = e.data.game_settings_info;
localStorage.setItem("game_settings_info", JSON.stringify(FConfig.game_settings_info));
}
if (e.data.conf) {
FConfig.conf = e.data.conf;
localStorage.setItem("conf", JSON.stringify(FConfig.conf));
FLog.normal("看看配置2   ", e.data.conf);
}
n.FGlobal.setConf();
if (n.FGlobal.getDateDay(n.FGlobal.USER_INFO.login_time - n.FGlobal.USER_INFO.off_time) < n.FGlobal.getDateDay(n.FGlobal.USER_INFO.login_time)) {
n.FGlobal.resetData();
n.FGlobal.USER_INFO.isNextDay = !0;
} else n.FGlobal.USER_INFO.isNextDay = !1;
this.ONLINE_TIME || n.FGlobal.USER_INFO.preferences.real || (this.ONLINE_TIME = setInterval(function() {
n.FGlobal.USER_INFO.online_total++;
n.FGlobal.USER_INFO.online_total >= FConfig.FSDK_CONF.REAL_USER.online_time && FSDK.setActiveUser();
}, 1e3));
}
o.call(i, n.FGlobal.USER_INFO);
FNative.preloadVideo(FConfig.FSDK_CONF.AD_CONF.video);
FNative.preloadInters(FConfig.FSDK_CONF.AD_CONF.inters);
FSDK.umengEvent("server_suc", "0");
var r = n.FGlobal.USER_INFO.now - n.FGlobal.USER_INFO.reg_time;
FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - r > 0 ? FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - r + FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()] : FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
FNative.freshInters();
}
};
t.prototype.on_S2C_update_credit = function(t) {
if (t.err) FSDK.showToast(t.err); else {
var e = 0;
if (t.data) {
e = t.data.credit - n.FGlobal.USER_INFO.credit;
n.FGlobal.USER_INFO.credit = t.data.credit;
n.FGlobal.USER_INFO.credit >= 1e5 && FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_100000, "1", !0);
n.FGlobal.USER_INFO.credit >= 225e3 && FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_225000, "1", !0);
n.FGlobal.USER_INFO.credit >= 4e5 && FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_400000, "1", !0);
}
var o = {
type: "credit",
num: n.FGlobal.USER_INFO.credit,
change: e
};
cc.director.emit(FEventID.FRESH_CREDIT, o);
}
};
t.prototype.on_S2C_update_coin = function(t) {
if (t.err) FSDK.showToast(t.err); else {
var e = 0;
if (t.data) switch (t.data.name) {
case "pp":
e = t.data.coin - n.FGlobal.USER_INFO.credit_pp;
n.FGlobal.USER_INFO.credit_pp = t.data.coin;
n.FGlobal.USER_INFO.credit_pp >= 100 && FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_pp_100, "1", !0);
n.FGlobal.USER_INFO.cardGet.pp++;
n.FGlobal.USER_INFO.cardGet.pp >= 497 && FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_pp_max, "1", !0);
break;

case "gp":
e = t.data.coin - n.FGlobal.USER_INFO.credit_gp;
n.FGlobal.USER_INFO.credit_gp = t.data.coin;
n.FGlobal.USER_INFO.credit_gp >= 100 && FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_gp_100, "1", !0);
n.FGlobal.USER_INFO.cardGet.gp++;
n.FGlobal.USER_INFO.cardGet.gp >= 497 && FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_gp_max, "1", !0);
}
var o = {
type: t.data.name,
num: n.FGlobal.USER_INFO["credit_" + t.data.name],
change: e
};
FSDK.saveData("CARD_GET", n.FGlobal.USER_INFO.cardGet);
cc.director.emit(FEventID.FRESH_CREDIT, o);
}
};
t.prototype.on_S2C_info = function(t) {
if (!t.err && t.data) {
if (t.data.basic) {
if (t.data.basic.user_vip) {
n.FGlobal.USER_INFO.isFlag = t.data.basic.user_vip;
cc.director.emit(FEventID.FRESH_FLAG, n.FGlobal.USER_INFO.isFlag);
}
t.data.basic.credit && (n.FGlobal.USER_INFO.credit = t.data.basic.credit);
}
if (t.data.invite) {
n.FGlobal.USER_INFO.invite_count = t.data.invite.count;
t.data.invite.task && (n.FGlobal.invite_task = t.data.invite.task);
}
t.data.coins && cc.director.emit(FEventID.CARD_RECORD, t.data.coins);
cc.director.emit(FEventID.FRESH_USERINFO, t.data);
}
};
t.prototype.on_S2C_invited = function(t) {
t.err && FSDK.showToast(t.err);
};
t.prototype.on_S2C_trans_history = function(e) {
var o = {
redeem_task: FConfig.conf.redeem_task,
history: null
};
e.err ? o.history = null : o.history = e.data.records;
if (t.getInstance().cbList[FEventID.S2C_trans_history]) {
t.getInstance().cbList[FEventID.S2C_trans_history].cb.call(t.getInstance().cbList[FEventID.S2C_trans_history].target, o);
t.getInstance().cbList[FEventID.S2C_trans_history] = null;
}
};
t.prototype.on_S2C_pg_user_cnt = function(e) {
var o = null;
e.err || (o = e.data.info);
if (t.getInstance().cbList[FEventID.S2C_pg_user_cnt]) {
t.getInstance().cbList[FEventID.S2C_pg_user_cnt].cb(o);
t.getInstance().cbList[FEventID.S2C_pg_user_cnt] = null;
}
};
t.prototype.on_S2C_trans = function(e) {
if (e.err) FSDK.showToast(e.err); else if (t.getInstance().cbList[FEventID.S2C_trans]) {
t.getInstance().cbList[FEventID.S2C_trans].cb();
t.getInstance().cbList[FEventID.S2C_trans] = null;
}
};
return t;
}();
o.FLogic = i;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FLog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "693c1h8ZOpHSY/zsLST9gjX", "FLog");
var n = function() {
function t() {}
t.normal = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
FConfig.IS_LOG && console.log.apply(console, [ "Cocos打印：", t ].concat(e));
};
return t;
}();
window.FLog = n;
cc._RF.pop();
}, {} ],
FMarquee: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ec3dckrnbFHRZMnSmBKwlsm", "FMarquee");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mMainNode = null;
e.mMsg1 = null;
e.mMsg2 = null;
e.random = 0;
return e;
}
e.prototype.onEnable = function() {
this.random = r.FGlobal.getQuRandom(FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[0], FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[1]);
this.mMsg1.y = 0;
this.mMsg2.y = -50;
this.mMsg1.getChildByName("email").getComponent(cc.Label).string = r.FGlobal.getEmail();
this.mMsg2.getChildByName("email").getComponent(cc.Label).string = r.FGlobal.getEmail();
var t = r.FGlobal.getMarMsg(), e = r.FGlobal.getMarMsg();
FLog.normal("ssadasdasd  ", t);
this.mMsg1.getChildByName("msgNode").getChildByName("type").getComponent(cc.Label).string = t.desc;
this.mMsg1.getChildByName("msgNode").getChildByName("type").color = new cc.Color().fromHEX(t.color);
this.mMsg2.getChildByName("msgNode").getChildByName("type").getComponent(cc.Label).string = e.desc;
this.mMsg2.getChildByName("msgNode").getChildByName("type").color = new cc.Color().fromHEX(e.color);
this.mMsg1.getChildByName("msgNode").getChildByName("label").getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip5;
this.mMsg2.getChildByName("msgNode").getChildByName("label").getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip5;
this.mMsg1.getChildByName("msgNode").getChildByName("num").getComponent(cc.Label).string = t.num;
this.mMsg2.getChildByName("msgNode").getChildByName("num").getComponent(cc.Label).string = e.num;
this.moveUp(this.mMsg1);
this.moveUp(this.mMsg2);
FLog.normal("进来了");
};
e.prototype.onDisable = function() {
this.mMsg2.stopAllActions();
this.mMsg1.stopAllActions();
};
e.prototype.moveUp = function(t) {
cc.tween(t).delay(this.random).by(1, {
y: 50
}).call(function() {
if (50 == t.y) {
t.y = -50;
t.getChildByName("email").getComponent(cc.Label).string = r.FGlobal.getEmail();
var e = r.FGlobal.getMarMsg();
t.getChildByName("msgNode").getChildByName("type").getComponent(cc.Label).string = e.desc;
t.getChildByName("msgNode").getChildByName("type").color = new cc.Color().fromHEX(e.color);
t.getChildByName("msgNode").getChildByName("num").getComponent(cc.Label).string = e.num;
}
this.moveUp(t);
"msg2" == t.name && (this.random = r.FGlobal.getQuRandom(FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[0], FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[1]));
}.bind(this)).start();
};
e.prototype.showIn = function() {
this.mMainNode.getNumberOfRunningActions() > 0 || cc.tween(this.mMainNode).to(1, {
opacity: 255
}).start();
};
e.prototype.hideIn = function() {
cc.tween(this.mMainNode).to(1, {
opacity: 0
}).start();
};
i([ c(cc.Node) ], e.prototype, "mMainNode", void 0);
i([ c(cc.Node) ], e.prototype, "mMsg1", void 0);
i([ c(cc.Node) ], e.prototype, "mMsg2", void 0);
return e = i([ s ], e);
}(cc.Component);
o.FMarquee = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FNative: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d1d68i4zBpEBIe5olI11joa", "FNative");
var n = function() {
function t() {}
t.getNativeClass = function() {
return cc.sys.os == cc.sys.OS_ANDROID ? "org.cocos2dx.javascript/Cocos" : cc.sys.os == cc.sys.OS_IOS ? "CocosMap" : void 0;
};
t.getSystemInfo = function() {
if (!cc.sys.isNative) return null;
var e;
cc.sys.os == cc.sys.OS_ANDROID ? e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getSystemInfo", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getSystemInfo"));
FLog.normal("看看系统信息：" + e);
return JSON.parse(e);
};
t.getVerInfo = function() {
if (!cc.sys.isNative) return null;
var e;
cc.sys.os == cc.sys.OS_ANDROID ? e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getVerInfo", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getVerInfo"));
e = JSON.parse(e);
FConfig.VERSION = e.ver;
FConfig.VERSION_CODE = e.ver_code;
FLog.normal("看看版本号信息" + e);
return e;
};
t.shake = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "shake", "(I)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "shake:", e));
};
t.copy = function(e) {
if (cc.sys.isNative) {
cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "copy", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "copy:", e);
FSDK.showToast("Copy success");
}
};
t.UmengOnEvemt = function(e, o) {
void 0 === o && (o = "0");
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "UmengOnEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, o) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "UmengOnEvent:addContent:", e, o));
};
t.openApp = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openApp", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openApp:", e));
};
t.jumpShop = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "jumpShop", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "jumpShop:", e));
};
t.showToast = function(t) {
FSDK.showToast(t);
};
t.share = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openShare", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openShare:", e));
};
t.preloadVideo = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "preloadVideo", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "preloadVideo:", e));
};
t.preloadInters = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "preloadInters", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "preloadInters:", e));
};
t.openVideo = function() {
if (cc.sys.isNative) if (get_simple_ad().hasReward()) {
FSDK.showToLoad("AD Loading...");
get_simple_ad().showReward("所有场景");
} else t.videoFail();
};
t.openBanner = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openBanner", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openBanner:", e));
};
t.closeBanner = function() {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "closeBanner", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "closeBanner", "()V"));
};
t.openInters = function() {
if (cc.sys.isNative) if (get_simple_ad().hasInter()) {
FSDK.showToLoad("AD Loading...");
get_simple_ad().showInter("所有场景");
} else t.intersFail();
};
t.wxLogin = function() {
FSDK.showToLoad("正在授权中...");
cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "wxLogin", "()V") : (cc.sys.os, 
cc.sys.OS_IOS);
};
t.videoShow = function() {
cc.audioEngine.setMusicVolume(0);
cc.audioEngine.setEffectsVolume(0);
FSDK.umengEvent(FConfig.UMENG_CONFIG.video_show, "0");
FSDK.hideToLoad();
FSDK.adEvent("topon", "video");
t.AD_COUNT.video++;
FSDK.saveData("AD_COUNT", t.AD_COUNT);
FSDK.umengEvent("video_show_scene", t.videoCb.from);
FLog.normal("视频展示");
};
t.videoSuc = function() {
FSDK.umengEvent(FConfig.UMENG_CONFIG.video_suc, "0");
t.videoCb.cb && t.videoCb.target && t.videoCb.cb.call(t.videoCb.target);
t.AD_SHOW_CNT.AD_SUC++;
t.AD_SHOW_CNT.AD_SUC >= FConfig.FSDK_CONF.REAL_USER.ad_num && FSDK.setActiveUser();
FSDK.saveData("AD_SHOW_CNT", t.AD_SHOW_CNT);
FLog.normal("视频看完  ", t.AD_SHOW_CNT.AD_SUC);
t.videoClose();
};
t.videoClose = function() {
cc.audioEngine.setMusicVolume(1);
cc.audioEngine.setEffectsVolume(1);
if (!t.VIDEO_FRESH_TIME && FConfig.FSDK_CONF.AD_CONF.video_fresh_time) {
t.video_fresh_time = FConfig.FSDK_CONF.AD_CONF.video_fresh_time;
t.VIDEO_FRESH_TIME = setInterval(function() {
if (t.video_fresh_time) t.video_fresh_time--; else {
clearTimeout(t.VIDEO_FRESH_TIME);
t.VIDEO_FRESH_TIME = null;
}
}, 1e3);
}
FLog.normal("视频关闭");
};
t.videoFail = function() {
FSDK.umengEvent(FConfig.UMENG_CONFIG.video_fail, "0");
if (t.isLoad) {
FSDK.hideToLoad();
FSDK.showToast("Video is loading");
} else {
t.isLoad = !0;
FSDK.showToLoad("AD Loading...");
setTimeout(function() {
t.openVideo();
}, 2e3);
FLog.normal("视频失败");
}
};
t.videoClick = function() {
FSDK.umengEvent(FConfig.UMENG_CONFIG.video_click, "0");
FLog.normal("视频点击");
};
t.intersShow = function() {
FSDK.umengEvent(FConfig.UMENG_CONFIG.inter_show, "0");
FSDK.adEvent("topon", "interstitial");
t.AD_COUNT.inters++;
t.AD_SHOW_CNT.AD_SHOW++;
FSDK.saveData("AD_SHOW_CNT", t.AD_SHOW_CNT);
FSDK.saveData("AD_COUNT", t.AD_COUNT);
FLog.normal("插屏展示");
};
t.freshInters = function() {
t.INTERS_FRESH_TIME || (t.INTERS_FRESH_TIME = setInterval(function() {
if (t.inters_fresh_time) t.inters_fresh_time--; else {
clearTimeout(t.INTERS_FRESH_TIME);
t.INTERS_FRESH_TIME = null;
}
}, 1e3));
};
t.intersClose = function() {
FSDK.hideToLoad();
t.intersCb.cb && t.intersCb.target && t.intersCb.cb.call(t.intersCb.target);
t.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
t.freshInters();
FLog.normal("插屏关闭");
};
t.intersFail = function() {
t.intersCb.cb && t.intersCb.target && t.intersCb.cb.call(t.intersCb.target);
FSDK.umengEvent(FConfig.UMENG_CONFIG.inter_fail, "0");
FSDK.hideToLoad();
FLog.normal("插屏失败");
};
t.intersClick = function() {
FSDK.umengEvent(FConfig.UMENG_CONFIG.inter_click, "0");
FLog.normal("插屏点击");
};
t.bannerShow = function() {
FSDK.umengEvent(FConfig.UMENG_CONFIG.banner_show, "0");
FLog.normal("banner展示");
};
t.bannerClick = function() {
FSDK.umengEvent(FConfig.UMENG_CONFIG.banner_click, "0");
FLog.normal("banner点击");
};
t.wxLoginFail = function() {
FSDK.hideToLoad();
};
t.wxLoginSuc = function(e) {
FSDK.hideToLoad();
if (e.openid) {
FSDK.saveData("WX_INFO", e);
FSDK.reWxInfo(e);
} else t.wxLoginFail();
};
t.videoCb = {
cb: null,
target: null,
from: ""
};
t.intersCb = {
cb: null,
target: null
};
t.AD_SHOW_CNT = {
AD_SHOW: 0,
AD_SUC: 0
};
t.isLoad = !1;
t.AD_COUNT = {
video: 0,
inters: 0
};
t.VIDEO_FRESH_TIME = null;
t.video_fresh_time = 30;
t.INTERS_FRESH_TIME = null;
t.inters_fresh_time = 30;
return t;
}();
window.FNative = n;
cc._RF.pop();
}, {} ],
FNetWorkConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e79f0Kr975KMJcFzmDP5351", "FNetWorkConfig");
var n = function() {
function t() {}
t.getServerIp = function() {
return FConfig.IS_DEBUG ? t.server_ip_debug : t.server_ip_release;
};
t.server_ip_debug = "";
t.server_ip_release = "";
t.server_port = 8056;
t.data = {
ip_release: "",
ip_debug: "",
pg: "",
isDebug: !1,
test_aid: "",
code: "",
tos_img: null
};
return t;
}();
window.FNetWorkConfig = n;
cc._RF.pop();
}, {} ],
FNetWorkCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f26fdNkMlxGnIxj+ChZEwQ7", "FNetWorkCtrl");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./FLogic"), i = t("./FNetWork"), r = t("../FModel/FGlobal"), a = function() {
function t() {}
t.getInstance = function() {
t._instance || (t._instance = new t());
return t._instance;
};
t.prototype.ConnetctServer = function(e, o) {
t.cb = e;
t.target = o;
n.FLogic.getInstance().removeCommonListenser();
if (!r.FGlobal.NetWork) {
r.FGlobal.NetWork = new i.FNetWork();
n.FLogic.getInstance().addCommonListenser();
}
var a = {
host: FNetWorkConfig.getServerIp(),
port: FNetWorkConfig.server_port
};
r.FGlobal.NetWork.int(a, e, o);
r.FGlobal.NetWork.on(FEventID.EVENT_CLOSE, function() {
r.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
r.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
t.getInstance().onDropLine();
});
r.FGlobal.NetWork.on(FEventID.EVENT_IO_ERROR, function() {
r.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
r.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
t.getInstance().onDropLine();
});
};
t.prototype.onDropLine = function() {
var e = this;
FSDK.showToLoad("Rebinding");
console.error("这个是close监听");
setTimeout(function() {
r.FGlobal.NetWork.clearAllTime();
r.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
r.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
r.FGlobal.NetWork = null;
var o = n.FLogic.getInstance().cbList[FEventID.S2C_reg_login];
t.getInstance().ConnetctServer(function() {
FSDK.login(FNetWorkConfig.data.pg, o.cb, o.target, FNetWorkConfig.data.test_aid);
}, e);
}, 3e3);
};
t.cb = null;
t.target = null;
return t;
}();
o.FNetWorkCtrl = a;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"./FLogic": "FLogic",
"./FNetWork": "FNetWork"
} ],
FNetWork: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d8ea2mqLAlH/Iq6vH0Lwlmn", "FNetWork");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FGlobal"), r = t("./FLogic"), a = t("./FSocketSend"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function() {
function t() {
this.HEARTBEAT_TIME_OUT = 5e3;
this.HEARTBEAT_TIME = 1e4;
this.HEART_CLICK = null;
this.HEART_TIMEOUT = null;
this._callbacks = {};
this.cb = null;
this.target = null;
this.tru = 0;
}
t.prototype.int = function(t, e, o) {
if (e) {
this.cb = e;
this.target = o;
}
i.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
i.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
if (this.socket) {
this.socket.close();
this.socket = null;
}
this.intSocket(t.host, t.port);
};
t.prototype.intSocket = function(t, e) {
this.socket = new WebSocket(t, [], cc.url.raw("resources/FSDK_RES/cacert.pem"));
this.socket.binaryType = "arraybuffer";
this.socket.onopen = this.onConnect.bind(this);
this.socket.onclose = this.onClose.bind(this);
this.socket.onerror = this.onIOError.bind(this);
this.socket.onmessage = this.onMessage.bind(this);
};
t.prototype.onConnect = function() {
FLog.normal("socket 连接成功");
if (this.cb) {
this.cb.call(this.target);
this.cb = null;
}
this.openHeart();
};
t.prototype.onClose = function(t) {
this.clearAllTime();
this.emit(FEventID.EVENT_CLOSE, t);
FLog.normal("socket 连接断开");
};
t.prototype.openHeart = function() {
a.FSocketSend.C2S_heartbeat();
};
t.prototype.onIOError = function(t) {
this.clearAllTime();
this.emit(FEventID.EVENT_IO_ERROR, t);
FLog.normal("socket 连接错误");
};
t.prototype.out = function() {
this.clearAllTime();
i.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
i.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
if (this.socket) {
this.socket.close();
this.socket = null;
}
r.FLogic.getInstance().removeCommonListenser();
i.FGlobal.NetWork = null;
};
t.prototype.heartbeat = function() {
this.HEART_TIMEOUT && clearTimeout(this.HEART_TIMEOUT);
this.HEART_CLICK = setTimeout(function() {
a.FSocketSend.C2S_heartbeat();
this.HEART_TIMEOUT = setTimeout(function() {
this.heartbeatOut();
}.bind(this), this.HEARTBEAT_TIME_OUT);
}.bind(this), this.HEARTBEAT_TIME);
};
t.prototype.heartbeatOut = function() {
FLog.normal("心跳超时间");
this._disconnect();
};
t.prototype._disconnect = function() {
FLog.normal("重连");
if (this.socket && 1 == this.socket.readyState) {
this.socket.close();
this.socket = null;
this.clearAllTime();
}
};
t.prototype.clearAllTime = function() {
this.HEART_CLICK && clearTimeout(this.HEART_CLICK);
this.HEART_TIMEOUT && clearTimeout(this.HEART_TIMEOUT);
};
t.prototype.on = function(t, e) {
(this._callbacks[t] = this._callbacks[t] || []).push(e);
};
t.prototype.off = function(t, e) {
this.removeAllListeners(t, e);
};
t.prototype.removeAllListeners = function(t, e) {
if (0 != arguments.length) {
var o = this._callbacks[t];
if (o) if (!t || e) {
var n = this.index(o, e._off || e);
~n && o.splice(n, 1);
} else delete this._callbacks[t];
} else this._callbacks = {};
};
t.prototype.index = function(t, e) {
if ([].indexOf) return t.indexOf(e);
for (var o = 0; o < t.length; ++o) if (t[o] === e) return o;
return -1;
};
t.prototype.request = function(t) {
this.sendMessage(t);
};
t.prototype.sendMessage = function(t) {
cc.sys.isNative ? FLog.normal("这个是客户端的上报   ", JSON.stringify(t)) : FLog.normal("这个是客户端的上报   ", t);
var e = JSON.stringify(t);
this.send(e);
return !0;
};
t.prototype.send = function(t) {
this.socket && 1 == this.socket.readyState && this.socket.send(t);
};
t.prototype.onMessage = function(t) {
var e = JSON.parse(t.data);
cc.sys.isNative ? FLog.normal("服务器返回", JSON.stringify(e)) : FLog.normal("服务器返回", e);
cc.director.emit(e.type, e);
};
t.prototype.emit = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
var n = [].slice.call(arguments, 1), i = this._callbacks[t];
if (i) for (var r = 0, a = (i = i.slice(0)).length; r < a; ++r) i[r].call(this, n, t);
return this;
};
return t = n([ c ], t);
}());
o.FNetWork = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"./FLogic": "FLogic",
"./FSocketSend": "FSocketSend"
} ],
FPanelManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b459xQaxpP1Lka21hvD+yY", "FPanelManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.savePanel = {};
function e(t) {
t.active = !0;
var e = t.getChildByName("mainNode");
if (!(e.getNumberOfRunningActions() > 0)) {
e.scale = 0;
cc.tween(e).to(.2, {
scale: 1
}, {
easing: "backOut"
}).start();
}
}
t.open_eff = e;
t.close_eff = function(t, e, o) {
void 0 === e && (e = !1);
void 0 === o && (o = null);
t.getChildByName("mainNode").getNumberOfRunningActions() > 0 || cc.tween(t.getChildByName("mainNode")).to(.2, {
scale: 0
}, {
easing: "backIn"
}).call(function() {
t.active = !1;
o && o();
e && (t.parent = null);
}).start();
};
t.openPanel = function(t) {
e(t);
};
t.load = function(e, o, n) {
if (t.savePanel[e]) {
t.savePanel[e].parent = o;
t.openPanel(t.savePanel[e]);
n && n(t.savePanel[e]);
} else {
FSDK.showToLoad();
cc.loader.loadRes("FSDK_RES/" + e, cc.Prefab, function(i, r) {
if (i) FSDK.hideToLoad(); else {
var a = cc.instantiate(r);
t.savePanel[e] = a;
t.savePanel[e].parent = o;
t.openPanel(t.savePanel[e]);
n && n(t.savePanel[e]);
FSDK.hideToLoad();
}
}.bind(this));
}
};
t.loadPage = function(e, o, n, i) {
void 0 === i && (i = !0);
if (t.savePanel[e]) o && o.call(n, t.savePanel[e]); else {
i && FSDK.showToLoad();
cc.loader.loadRes("FSDK_RES/" + e, cc.Prefab, function(i, r) {
if (i) {
o && o.call(n, null);
FSDK.hideToLoad();
} else {
t.savePanel[e] = cc.instantiate(r);
o && o.call(n, t.savePanel[e]);
FSDK.hideToLoad();
}
});
}
};
})(o.FPanelManager || (o.FPanelManager = {}));
cc._RF.pop();
}, {} ],
FProtocolCode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3d17fGOmnBOX4w39+ESCVd0", "FProtocolCode");
var n = function() {
function t() {}
t.C2S_hello = {
type: "C2S_hello",
data: {}
};
t.C2S_reg_login = {
type: "C2S_reg_login",
data: {
pg: "",
ver_code: 0,
info: {
pg: "",
ver: "",
ver_code: 0,
sdk_int: 0,
os_ver: "",
lang: "",
dev_fac: "",
dev_model: "",
network: "",
resolution: "",
channel: "",
root: 0,
apk_comment: "",
tz: 0,
imsi: ""
},
aid: "",
idfa: "",
adid: "",
network_config: [ "" ],
conf_hash: "",
activate: 1,
d: !1,
server_tag: "",
relogin: !1,
game_settings: !0,
game_settings_info: {
hash: "",
zip: !0
}
}
};
t.C2S_heartbeat = {
type: "C2S_heartbeat",
data: {}
};
t.C2S_info = {
type: "C2S_info",
data: {
fields: []
}
};
t.C2S_gift_country = {
type: "C2S_gift_country",
data: {}
};
t.C2S_gift_list = {
type: "C2S_gift_list",
data: {
country: ""
}
};
t.C2S_trans = {
type: "C2S_trans",
data: {
id: 0,
trans_email: "",
mobile: "",
trans_type: ""
}
};
t.C2S_update_credit = {
type: "C2S_update_credit",
data: {
change: 1,
from: "",
detail: "",
conf_pos: []
}
};
t.C2S_update_coin = {
type: "C2S_update_coin",
data: {
name: "",
change: 1,
from: "",
detail: "",
conf_pos: []
}
};
t.C2S_preference = {
type: "C2S_preference",
data: {
key: "",
value: null,
safe: !0
}
};
t.C2S_preferences = {
type: "C2S_preferences",
data: {}
};
t.C2S_daily_check_in = {
type: "C2S_daily_check_in",
data: {}
};
t.C2S_invited = {
type: "C2S_invited",
data: {
code: ""
}
};
t.C2S_broadcast = {
type: "C2S_broadcast",
data: {
msg: {
def: ""
}
}
};
t.C2S_adwords = {
type: "C2S_adwords",
data: {
referrer: ""
}
};
t.C2S_app_promo_task = {
type: "C2S_app_promo_task",
data: {
name: "",
action: 0
}
};
t.C2S_trans_history = {
type: "C2S_trans_history",
data: {
type: ""
}
};
t.C2S_ad_event = {
type: "C2S_ad_event",
data: {
sdk: "",
type: "",
event: "impression"
}
};
t.C2S_add_counters = {
type: "C2S_add_counters",
data: {
name: "",
cnt: 1
}
};
t.C2S_pg_user_cnt = {
type: "C2S_pg_user_cnt",
data: {
pgs: []
}
};
return t;
}();
window.ProtocolCode = n;
cc._RF.pop();
}, {} ],
FSDKModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aecfcOmfbxHJ6i0FFKQMW7+", "FSDKModel");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../FNetWork/FNetWorkCtrl"), i = t("../FNetWork/FSocketSend"), r = t("../FNetWork/FLogic"), a = t("./FGlobal"), s = t("./FToLoad"), c = t("./FPanelManager"), l = t("../FView/FTaskPage"), d = t("../FView/FGrade"), u = t("../FView/FTwoCard"), p = t("../FView/FTransList"), f = t("../FView/FTransPage"), h = t("../FView/FLeft"), g = t("../../../SDK/script/SimpleSDK"), _ = t("../../../SDK/script/SimpleAd"), m = function() {
function t() {}
t.prototype.initSocket = function(t, e) {
r.FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
cb: t,
target: e
};
FNetWorkConfig.server_ip_release = FNetWorkConfig.data.ip_release;
FNetWorkConfig.server_ip_debug = FNetWorkConfig.data.ip_debug;
FConfig.IS_DEBUG = FNetWorkConfig.data.isDebug;
FSDK.object.initLocalStorage();
n.FNetWorkCtrl.getInstance().ConnetctServer(t, e);
FSDK.object.loadToLoad();
FSDK.object.loadToast();
FSDK.getVerInfo();
FLog.normal("这个是进来了");
};
t.prototype.initLocalStorage = function() {
localStorage.getItem("setting") && (a.FGlobal.USER_INFO.setting = JSON.parse(localStorage.getItem("setting")));
if (localStorage.getItem("conf_hash")) {
FConfig.conf_hash = localStorage.getItem("conf_hash");
FLog.normal("什么   ", FConfig.conf_hash);
}
if (localStorage.getItem("conf")) {
FConfig.conf = JSON.parse(localStorage.getItem("conf"));
FLog.normal("看看配置   ", FConfig.conf);
}
localStorage.getItem("game_settings_info") && (FConfig.game_settings_info = JSON.parse(localStorage.getItem("game_settings_info")));
};
t.prototype.login = function(t, e, o, n) {
void 0 === n && (n = "1");
r.FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
cb: e,
target: o
};
FConfig.LOGIN_DATA.pg = t;
FConfig.LOGIN_DATA.aid = n;
FConfig.LOGIN_DATA.conf_hash = FConfig.conf_hash;
ProtocolCode.C2S_reg_login.data.game_settings_info.hash = FConfig.game_settings_info.hash;
ProtocolCode.C2S_reg_login.data.aid = FConfig.LOGIN_DATA.aid;
ProtocolCode.C2S_reg_login.data.pg = t;
ProtocolCode.C2S_reg_login.data.info.pg = t;
var a = FNative.getSystemInfo() ? FNative.getSystemInfo() : FConfig.LOGIN_DATA;
for (var s in ProtocolCode.C2S_reg_login.data) if ("info" == s) for (var c in ProtocolCode.C2S_reg_login.data.info) for (var l in a) c == l && (ProtocolCode.C2S_reg_login.data.info[c] = a[l]); else for (var d in a) s == d && (ProtocolCode.C2S_reg_login.data[s] = a[d]);
i.FSocketSend.C2S_reg_login();
};
t.prototype.setActiveUser = function() {
FLog.normal("上报活跃   ", !a.FGlobal.USER_INFO.preferences.real);
if (FNative.AD_SHOW_CNT.AD_SUC >= FConfig.FSDK_CONF.REAL_USER.ad_num && a.FGlobal.USER_INFO.online_total >= FConfig.FSDK_CONF.REAL_USER.online_time && !a.FGlobal.USER_INFO.preferences.real) {
a.FGlobal.USER_INFO.preferences.real = 1;
i.FSocketSend.C2S_preference("real", 1);
}
};
t.prototype.umengEvent = function(t, e, o) {
void 0 === o && (o = !1);
if (o) {
if (!a.FGlobal.isOnUmeng(t)) {
FNative.UmengOnEvemt(t, e);
a.FGlobal.ONE_UMENG.push(t);
FSDK.saveData("ONE_UMENG", a.FGlobal.ONE_UMENG);
}
} else FNative.UmengOnEvemt(t, e);
};
t.prototype.saveData = function(t, e) {
void 0 === e && (e = null);
e ? i.FSocketSend.C2S_preference(t, e) : i.FSocketSend.C2S_preferences(t);
};
t.prototype.setCredit = function(t, e, o) {
"credit" == t ? i.FSocketSend.C2S_update_credit(e, o) : i.FSocketSend.C2S_update_coin(t, e, o);
};
t.prototype.addUserInfoListen = function(t, e) {
cc.director.on(FEventID.FRESH_USERINFO, t, e);
};
t.prototype.removeUserInfoListen = function(t, e) {
cc.director.off(FEventID.FRESH_USERINFO, t, e);
};
t.prototype.copy = function(t) {
FNative.copy(t);
};
t.prototype.setNextDayListen = function(t, e) {
r.FLogic.getInstance().cbList[FEventID.NEXT_DAY] = {
cb: t,
target: e
};
};
t.prototype.loadToLoad = function() {
c.FPanelManager.loadPage("FToLoad", function(t) {
a.FGlobal.ToLoad = t;
}, this);
};
t.prototype.showToLoad = function(t, e, o) {
void 0 === t && (t = "Loading");
void 0 === e && (e = 0);
void 0 === o && (o = !1);
if (a.FGlobal.ToLoad) {
a.FGlobal.ToLoad.parent = cc.director.getScene();
a.FGlobal.ToLoad.getComponent(s.default).setMsg(t, e, o);
}
};
t.prototype.hideToLoad = function() {
a.FGlobal.ToLoad && a.FGlobal.ToLoad.parent && (a.FGlobal.ToLoad.parent = null);
};
t.prototype.loadToast = function() {
c.FPanelManager.loadPage("FToast", function(t) {
for (var e = 0; e < 10; e++) {
var o = cc.instantiate(t);
a.FGlobal.piaoPool.put(o);
}
}, this);
};
t.prototype.showToast = function(t) {
a.FGlobal.Toast(t);
};
t.prototype.showInvityPage = function(t) {
c.FPanelManager.loadPage("FInvityPage", function(e) {
e.parent = t;
}, this);
};
t.prototype.showTaskPage = function(t, e) {
c.FPanelManager.loadPage("FTaskPage", function(o) {
o.parent = t;
o.getComponent(l.FTaskPage).setData(e);
}, this);
};
t.prototype.showSignTaskPage = function(t) {
c.FPanelManager.loadPage("FSignPage", function(e) {
e.parent = t;
}, this);
};
t.prototype.showGrade = function(t, e, o) {
a.FGlobal.USER_INFO.isGrade || a.FGlobal.USER_INFO.isBlack || !a.FGlobal.USER_INFO.isFlag || c.FPanelManager.load("FGrade", t, function(t) {
t.getComponent(d.FGrade).setCb(e, o);
});
};
t.prototype.showMarQuee = function(t) {
!a.FGlobal.USER_INFO.isBlack && a.FGlobal.USER_INFO.isFlag && c.FPanelManager.loadPage("FMarquee", function(e) {
cc.instantiate(e).parent = t;
}, this, !1);
};
t.prototype.openVideo = function(t, e, o) {
if (FNative.AD_COUNT.video >= FConfig.FSDK_CONF.AD_CONF.video_limit) FSDK.showToast("Video limit reached today"); else if (FNative.VIDEO_FRESH_TIME) FSDK.showToast("Video is on CD，please wait for " + FNative.video_fresh_time + " seconds"); else {
FNative.isLoad = !1;
FNative.videoCb.cb = e;
FNative.videoCb.target = o;
FNative.videoCb.from = t;
FNative.openVideo();
}
};
t.prototype.openInters = function(t, e) {
FNative.intersCb.cb = t;
FNative.intersCb.target = e;
if (FNative.AD_COUNT.inters >= FConfig.FSDK_CONF.AD_CONF.inters_limit[FSDK.getUserType()]) FNative.intersCb.cb && FNative.intersCb.target && FNative.intersCb.cb.call(FNative.intersCb.target); else if (FNative.INTERS_FRESH_TIME) {
FNative.intersCb.cb && FNative.intersCb.target && FNative.intersCb.cb.call(FNative.intersCb.target);
FLog.normal("还有" + FNative.inters_fresh_time + "秒刷新");
} else FNative.openInters();
};
t.prototype.openBanner = function(t) {
cc.sys.isNative && get_simple_ad().showOrReShowBanner(_.default.BANNER_BOTTOM);
};
t.prototype.closeBanner = function() {
cc.sys.isNative && get_simple_ad().hideBanner();
};
t.prototype.adEvent = function(t, e) {
i.FSocketSend.C2S_ad_event(t, e);
};
t.prototype.getNowTime = function() {
return a.FGlobal.USER_INFO.now;
};
t.prototype.getUserType = function() {
return a.FGlobal.USER_INFO.now - a.FGlobal.USER_INFO.reg_time >= 86400 ? "old" : "new";
};
t.prototype.getTransList = function(t, e, o) {
void 0 === o && (o = "task");
r.FLogic.getInstance().cbList[FEventID.S2C_trans_history] = {
cb: t,
target: e
};
i.FSocketSend.C2S_trans_history(o);
};
t.prototype.wxLogin = function(t, e) {
r.FLogic.getInstance().cbList[FEventID.S2C_wx_info] = {
cb: t,
target: e
};
FNative.wxLogin();
};
t.prototype.reWxInfo = function(t) {
r.FLogic.getInstance().cbList[FEventID.S2C_wx_info] && r.FLogic.getInstance().cbList[FEventID.S2C_wx_info].cb(r.FLogic.getInstance().cbList[FEventID.S2C_wx_info].target, t);
};
t.prototype.getRegCnt = function(t, e) {
r.FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt] = {
cb: e,
target: null
};
i.FSocketSend.C2S_pg_user_cnt([ t ]);
};
t.prototype.showTwoCard = function(t, e) {
c.FPanelManager.loadPage("FTwoCard", function(o) {
o.parent = e;
o.getComponent(u.FTwoCard).setType(t);
}, this);
};
t.prototype.showTransList = function(t, e, o) {
void 0 === e && (e = 0);
void 0 === o && (o = null);
c.FPanelManager.loadPage("FTransList", function(n) {
n.parent = t;
n.getComponent(p.FTransList).setTask(e, o);
}, this);
};
t.prototype.showTransPage = function(t, e, o, n, i, r) {
void 0 === n && (n = "invite");
void 0 === i && (i = !0);
void 0 === r && (r = null);
c.FPanelManager.load("FTransPage", t, function(t) {
t.getComponent(f.FTransPage).setData(e, o, n, i, r);
}.bind(this));
};
t.prototype.getTrans = function(t, e, o, n, a) {
r.FLogic.getInstance().cbList[FEventID.S2C_trans] = {
cb: a,
target: null
};
i.FSocketSend.C2S_trans(t, e, o, n);
};
t.prototype.showLeft = function(t, e, o, n, i) {
void 0 === n && (n = 0);
void 0 === i && (i = null);
c.FPanelManager.loadPage("FLeft", function(r) {
r.parent = t;
r.getComponent(h.FLeft).setData(e, o, n, i);
}, this);
};
t.prototype.setTask = function(t) {
a.FGlobal.USER_INFO.task = t;
};
t.prototype.getCard = function(t) {
return a.FGlobal.getCardType(t);
};
t.prototype.getCreditDif = function() {
for (var t = 0; t < FConfig.FSDK_CONF.CREDIT_DIF.length; t++) if (a.FGlobal.USER_INFO.credit >= FConfig.FSDK_CONF.CREDIT_DIF[t]) return t;
return FConfig.FSDK_CONF.CREDIT_DIF.length - 1;
};
t.prototype.setBtnSound = function(t) {
if (!cc.Button.prototype._soundOn) {
cc.Button.prototype.touchEndClone = cc.Button.prototype._onTouchEnded;
cc.Button.prototype._soundOn = !0;
cc.Button.prototype._onTouchEnded = function(e) {
this.interactable && this.enabledInHierarchy && this._pressed && 1 == this._soundOn && t && t(e);
this.touchEndClone(e);
};
}
};
t.prototype.getRandomReward = function() {
return a.FGlobal.getRandomReward();
};
t.prototype.initSZSDK = function() {
FLog.normal("有没有进来2222");
g.default.instance();
g.default.analytics_instance();
g.default.ad_instance().setRewardListener(new v());
g.default.ad_instance().setInterListener(new y());
g.default.ad_instance().setBannerListener(new S());
};
return t;
}();
window.FSDKModel = m;
var v = function() {
function t() {}
t.prototype.onRewardedVideoAdPlayStart = function(t, e) {
FLog.normal("demo reward play start" + t + " " + e);
FNative.videoShow();
};
t.prototype.onRewardedVideoAdPlayFailed = function(t, e, o) {
FNative.videoFail();
FLog.normal("demo reward play fail" + t + " " + o);
};
t.prototype.onRewardedVideoAdClosed = function(t, e) {
FNative.videoSuc();
FLog.normal("demo reward close" + t + " " + e);
};
t.prototype.onRewardedVideoAdPlayClicked = function(t, e) {
FNative.videoClick();
FLog.normal("demo reward play click" + t + " " + e);
};
return t;
}(), y = function() {
function t() {}
t.prototype.onInterstitialAdShow = function(t, e) {
FNative.intersShow();
FLog.normal("demo inter show" + t + " " + e);
};
t.prototype.onInterstitialAdClose = function(t, e) {
FNative.intersClose();
FLog.normal("demo inter close" + t + " " + e);
};
t.prototype.onInterstitialAdClick = function(t, e) {
FNative.intersClick();
FLog.normal("demo inter click" + t + " " + e);
};
return t;
}(), S = function() {
function t() {}
t.prototype.onBannerAdShow = function(t, e) {
FNative.bannerShow();
FLog.normal("demo banner show" + t + " " + e);
};
t.prototype.onBannerAdClick = function(t, e) {
FNative.bannerClick();
FLog.normal("demo banner click" + t + " " + e);
};
return t;
}();
cc._RF.pop();
}, {
"../../../SDK/script/SimpleAd": "SimpleAd",
"../../../SDK/script/SimpleSDK": "SimpleSDK",
"../FNetWork/FLogic": "FLogic",
"../FNetWork/FNetWorkCtrl": "FNetWorkCtrl",
"../FNetWork/FSocketSend": "FSocketSend",
"../FView/FGrade": "FGrade",
"../FView/FLeft": "FLeft",
"../FView/FTaskPage": "FTaskPage",
"../FView/FTransList": "FTransList",
"../FView/FTransPage": "FTransPage",
"../FView/FTwoCard": "FTwoCard",
"./FGlobal": "FGlobal",
"./FPanelManager": "FPanelManager",
"./FToLoad": "FToLoad"
} ],
FSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8c73fviCCNIV6W3283yeCzt", "FSDK");
var n = function() {
function t() {}
t.init = function(e, o, n) {
t.object || (t.object = new window.FSDKModel());
FNetWorkConfig.data = e;
t.object.initSocket(function() {
t.login(FNetWorkConfig.data.pg, o, n, FNetWorkConfig.data.test_aid);
}, this);
t.umengEvent("server_star", "0");
};
t.login = function(e, o, n, i) {
void 0 === i && (i = "1");
t.object.login(e, o, n, i);
};
t.setActiveUser = function() {
t.object.setActiveUser();
};
t.onShow = function(t) {
cc.game.on(cc.game.EVENT_SHOW, function() {
t && t();
});
};
t.onHide = function(t) {
cc.game.on(cc.game.EVENT_HIDE, function() {
t && t();
});
};
t.addUserInfoListen = function(e, o) {
t.object.addUserInfoListen(e, o);
};
t.saveData = function(e, o) {
void 0 === o && (o = null);
t.object.saveData(e, o);
};
t.setCredit = function(e, o, n) {
t.object.setCredit(e, o, n);
};
t.addCreditListen = function(t, e) {
cc.director.on(FEventID.FRESH_CREDIT, t, e);
};
t.removeCreditListen = function(t, e) {
cc.director.off(FEventID.FRESH_CREDIT, t, e);
};
t.setNextDayListen = function(e, o) {
t.object.setNextDayListen(e, o);
};
t.copy = function(e) {
t.object.copy(e);
};
t.setLog = function(t) {
FConfig.IS_LOG = t;
};
t.showToLoad = function(e, o, n) {
void 0 === e && (e = "Loading");
void 0 === o && (o = 0);
void 0 === n && (n = !1);
t.object.showToLoad(e, o, n);
};
t.hideToLoad = function() {
t.object.hideToLoad();
};
t.share = function(t) {
FNative.share(t);
};
t.showToast = function(e) {
t.object.showToast(e);
};
t.showInvityPage = function(e) {
t.object.showInvityPage(e);
};
t.showTaskPage = function(e, o) {
t.object.showTaskPage(e, o);
};
t.showSignTaskPage = function(e) {
t.object.showSignTaskPage(e);
};
t.showGrade = function(e, o, n) {
t.object.showGrade(e, o, n);
};
t.showMarQuee = function(e) {
t.object.showMarQuee(e);
};
t.addFlagListen = function(t, e) {
cc.director.on(FEventID.FRESH_FLAG, t, e);
};
t.openVideo = function(e, o, n) {
t.object.openVideo(e, o, n);
};
t.openInters = function(e, o) {
t.object.openInters(e, o);
};
t.openBanner = function() {
t.object.openBanner(FConfig.FSDK_CONF.AD_CONF.banner);
};
t.closeBanner = function() {
t.object.closeBanner();
};
t.shake = function(t) {
FNative.shake(t);
};
t.umengEvent = function(e, o, n) {
void 0 === n && (n = !1);
t.object || (t.object = new window.FSDKModel());
t.object.umengEvent(e, o, n);
};
t.adEvent = function(e, o) {
t.object.adEvent(e, o);
};
t.getNowTime = function() {
return t.object.getNowTime();
};
t.getUserType = function() {
return t.object.getUserType();
};
t.getVerInfo = function() {
return FNative.getVerInfo();
};
t.getTransList = function(e, o, n) {
void 0 === n && (n = "task");
t.object.getTransList(e, o, n);
};
t.reWxInfo = function(e) {
t.object.reWxInfo(e);
};
t.wxLogin = function(e, o) {
t.object.wxLogin(e, o);
};
t.getRegCnt = function(e, o) {
t.object.getRegCnt(e, o);
};
t.showTwoCard = function(e, o) {
t.object.showTwoCard(e, o);
};
t.showTransList = function(e, o, n) {
void 0 === o && (o = 0);
void 0 === n && (n = null);
t.object.showTransList(e, o, n);
};
t.showTransPage = function(e, o, n, i, r, a) {
void 0 === i && (i = "invite");
void 0 === r && (r = !1);
void 0 === a && (a = null);
t.object.showTransPage(e, o, n, i, r, a);
};
t.getTrans = function(e, o, n, i, r) {
t.object.getTrans(e, o, n, i, r);
};
t.showLeft = function(e, o, n, i, r) {
void 0 === i && (i = 0);
void 0 === r && (r = null);
t.object.showLeft(e, o, n, i, r);
};
t.setTask = function(e) {
t.object.setTask(e);
};
t.getCard = function(e) {
return t.object.getCard(e);
};
t.getCreditDif = function() {
return t.object.getCreditDif();
};
t.setBtnSound = function(e) {
t.object.setBtnSound(e);
};
t.getRandomReward = function() {
return t.object.getRandomReward();
};
t.initSZSDK = function() {
t.object || (t.object = new window.FSDKModel());
t.object.initSZSDK();
};
t.object = null;
return t;
}();
window.FSDK = n;
cc._RF.pop();
}, {} ],
FSidebar: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ae58cPVhCZOObGhj/fL6uTf", "FSidebar");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./common/User"), a = t("./common/EventConstants"), s = t("./common/Events"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.iconSpriteFrame = null;
e.sidebarNode = null;
return e;
}
e.prototype.init = function() {
var t = this;
FSDK.showLeft(this.sidebarNode, -20, function(e) {
switch (e.type) {
case "sound":
r.user.IsMute = e.value;
s.events.emit(a.GameEvents.SWITCH_MUTE);
return;

case "shake":
r.user.IsShake = e.value;
s.events.emit(a.GameEvents.SWITCH_SNAKE);
return;

case "home":
if (a.GameConstant.isShoot) return;
if (!cc.sys.isNative || r.user.getLumpData().isDebug) {
cc.find("Canvas/game").active = !1;
cc.find("Canvas/main").active = !0;
return;
}
FSDK.openInters(function() {
cc.find("Canvas/game").active = !1;
cc.find("Canvas/main").active = !0;
}, t);
return;
}
}, 1);
};
i([ d(cc.SpriteFrame) ], e.prototype, "iconSpriteFrame", void 0);
i([ d(cc.Node) ], e.prototype, "sidebarNode", void 0);
return e = i([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./common/EventConstants": "EventConstants",
"./common/Events": "Events",
"./common/User": "User"
} ],
FSignPage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a0602N66R1BV7qUQdfKsHtu", "FSignPage");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = t("../FModel/FPanelManager"), s = t("./FCreditRecord"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mTip1 = null;
e.mTransPro = null;
e.mNowNum = null;
e.mSignDay = null;
e.mLabelPro = null;
e.mBtnTrans = null;
e.mSignNode = null;
e.mProbaly = null;
e.mCollect = null;
e.mCard = null;
e.mCardNode = null;
e.mProbablyPro = null;
e.mProbablyLab = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.node.getChildByName("Top").height = 75 + r.FGlobal.getScale();
this.node.getChildByName("mainNode").getComponent(cc.Widget).top = 75 + r.FGlobal.getScale();
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.initData();
FSDK.addCreditListen(this.creditListen, this);
};
e.prototype.onDisable = function() {
FSDK.removeCreditListen(this.creditListen, this);
};
e.prototype.creditListen = function(t) {
"gp" == t.type && this.initData();
};
e.prototype.initData = function() {
this.mTip1.string = "can " + FConfig.FSDK_CONF.word.tip2 + ")";
this.mNowNum.string = "$" + r.FGlobal.USER_INFO.credit_gp.toFixed(2);
this.mTransPro.fillRange = r.FGlobal.USER_INFO.credit_gp / 100;
this.mLabelPro.string = "$" + r.FGlobal.USER_INFO.credit_gp.toFixed(2) + " / $100.00";
this.mCard.active = !1;
this.mBtnTrans.interactable = this.mTransPro.fillRange >= 1;
this.setSign();
};
e.prototype.setSign = function() {
this.mProbaly.active = r.FGlobal.SIGN_INFO.signDay >= 7;
this.mSignNode.active = !this.mProbaly.active;
if (r.FGlobal.SIGN_INFO.signDay < 7) {
this.mCollect.interactable = !1;
for (var t = 0; t < this.mSignNode.childrenCount; t++) {
this.mSignNode.children[t].getChildByName("al_bg").active = !1;
this.mSignNode.children[r.FGlobal.SIGN_INFO.signDay - r.FGlobal.SIGN_INFO.isSign].getChildByName("al_bg").active = !0;
this.mSignNode.children[t].getChildByName("al").active = t < r.FGlobal.SIGN_INFO.signDay;
this.mSignNode.children[t].getChildByName("msg").getChildByName("label1").getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip1;
this.mSignNode.children[t].getChildByName("msg").getChildByName("label2").getComponent(cc.Label).string = 6 == t ? "50" : FConfig.FSDK_CONF.SIGN_CONF[t] + "";
t == this.mSignNode.childrenCount - 1 && (this.mSignNode.children[t].getChildByName("msg").getChildByName("label1").getComponent(cc.Label).string = "Probably get");
if (r.FGlobal.SIGN_INFO.isSign) {
this.mSignNode.children[t].stopAllActions();
this.mSignNode.children[t].scale = 1;
} else {
this.setScaleAction(this.mSignNode.children[r.FGlobal.SIGN_INFO.signDay - r.FGlobal.SIGN_INFO.isSign]);
this.mCollect.interactable = !0;
}
}
} else {
this.mProbablyPro.fillRange = r.FGlobal.SIGN_INFO.signDay / 15;
this.mProbablyLab.string = r.FGlobal.SIGN_INFO.signDay + "/15";
this.mCollect.interactable = this.mProbablyPro.fillRange >= 1 && !r.FGlobal.SIGN_INFO.isLongSign;
}
};
e.prototype.clickSign = function() {
if (r.FGlobal.SIGN_INFO.signDay < 7) {
if (!r.FGlobal.SIGN_INFO.isSign) {
r.FGlobal.SIGN_INFO.isSign = 1;
r.FGlobal.SIGN_INFO.signDay += 1;
FSDK.saveData("SIGN_INFO", r.FGlobal.SIGN_INFO);
this.moveCard();
}
} else if (!r.FGlobal.SIGN_INFO.isLongSign) {
r.FGlobal.SIGN_INFO.isLongSign = 1;
FSDK.saveData("SIGN_INFO", r.FGlobal.SIGN_INFO);
this.moveCard(1);
}
this.mCollect.interactable = !1;
};
e.prototype.setScaleAction = function(t) {
cc.tween(t).repeatForever(cc.tween().to(1, {
scale: 1.1
}).to(1, {
scale: 1
})).start();
};
e.prototype.closePage = function() {
this.node.parent = null;
};
e.prototype.moveCard = function(t) {
void 0 === t && (t = 0);
this.mCard.active = !0;
if (t) {
this.mCard.scale = .45;
this.mCard.position = this.getStartPosition(this.mProbaly.getChildByName("card"));
} else {
this.mCard.scale = .23;
this.mCard.position = this.getStartPosition(this.mSignNode.children[r.FGlobal.SIGN_INFO.signDay - 1]);
}
cc.tween(this.mCard).to(.5, {
position: this.getEndPosition(),
scale: 1
}, {
easing: "sineIn"
}).call(function() {
this.mCard.active = !1;
t ? FSDK.setCredit("gp", 10, FConfig.CREDIT_FROM.SIGN_IN) : FSDK.setCredit("gp", FConfig.FSDK_CONF.SIGN_CONF[r.FGlobal.SIGN_INFO.signDay - 1], FConfig.CREDIT_FROM.SIGN_IN);
}.bind(this)).start();
};
e.prototype.getStartPosition = function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.node.getChildByName("mainNode").convertToNodeSpaceAR(e);
};
e.prototype.getEndPosition = function() {
var t = this.mCardNode.convertToWorldSpaceAR(this.mCardNode.getChildByName("card").position);
return this.node.getChildByName("mainNode").convertToNodeSpaceAR(t);
};
e.prototype.gpRecord = function() {
a.FPanelManager.load("FCreditRecord", this.node, function(t) {
t.getComponent(s.FCreditRecord).setType("gp");
}.bind(this));
};
e.prototype.getTrans = function() {
FSDK.showToast("You have abnormal behaviors," + FConfig.FSDK_CONF.word.tip2 + " failed");
};
i([ d(cc.Label) ], e.prototype, "mTip1", void 0);
i([ d(cc.Sprite) ], e.prototype, "mTransPro", void 0);
i([ d(cc.Label) ], e.prototype, "mNowNum", void 0);
i([ d(cc.Label) ], e.prototype, "mSignDay", void 0);
i([ d(cc.Label) ], e.prototype, "mLabelPro", void 0);
i([ d(cc.Button) ], e.prototype, "mBtnTrans", void 0);
i([ d(cc.Node) ], e.prototype, "mSignNode", void 0);
i([ d(cc.Node) ], e.prototype, "mProbaly", void 0);
i([ d(cc.Button) ], e.prototype, "mCollect", void 0);
i([ d(cc.Node) ], e.prototype, "mCard", void 0);
i([ d(cc.Node) ], e.prototype, "mCardNode", void 0);
i([ d(cc.Sprite) ], e.prototype, "mProbablyPro", void 0);
i([ d(cc.Label) ], e.prototype, "mProbablyLab", void 0);
return e = i([ l ], e);
}(cc.Component);
o.FSignPage = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"./FCreditRecord": "FCreditRecord"
} ],
FSocketSend: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4c7f5lpeEdBL6LOfTlEqgUW", "FSocketSend");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../FModel/FGlobal");
(function(t) {
t.C2S_reg_login = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_reg_login);
};
t.C2S_update_credit = function(t, e, o) {
void 0 === t && (t = 1);
void 0 === e && (e = "");
void 0 === o && (o = null);
ProtocolCode.C2S_update_credit.data.change = Math.floor(t);
ProtocolCode.C2S_update_credit.data.from = e;
ProtocolCode.C2S_update_credit.data.detail = "";
e = e.replace(" ", "_");
ProtocolCode.C2S_update_credit.data.conf_pos = null != o ? [ "credit", e, o ] : [ "credit", e ];
n.FGlobal.NetWork.request(ProtocolCode.C2S_update_credit);
};
t.C2S_update_coin = function(t, e, o, i) {
void 0 === t && (t = "");
void 0 === e && (e = 1);
void 0 === o && (o = "");
void 0 === i && (i = null);
ProtocolCode.C2S_update_coin.data.name = t;
ProtocolCode.C2S_update_coin.data.change = e;
ProtocolCode.C2S_update_coin.data.from = o;
ProtocolCode.C2S_update_coin.data.detail = "";
o = o.replace(" ", "_");
ProtocolCode.C2S_update_coin.data.conf_pos = null != i ? [ t, o, i ] : [ t, o ];
n.FGlobal.NetWork.request(ProtocolCode.C2S_update_coin);
};
t.C2S_heartbeat = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_heartbeat);
};
t.C2S_preference = function(t, e, o) {
void 0 === t && (t = "");
void 0 === e && (e = null);
void 0 === o && (o = !0);
ProtocolCode.C2S_preference.data.key = t;
ProtocolCode.C2S_preference.data.value = e;
ProtocolCode.C2S_preference.data.safe = o;
n.FGlobal.NetWork.request(ProtocolCode.C2S_preference);
};
t.C2S_preferences = function(t) {
ProtocolCode.C2S_preferences.data = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_preferences);
};
t.C2S_sign = function() {
ProtocolCode.C2S_info.data.fields = [ "daily_check_in" ];
n.FGlobal.NetWork.request(ProtocolCode.C2S_info);
};
t.C2S_daily_check_in = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_daily_check_in);
};
t.C2S_gift_country = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_gift_country);
};
t.C2S_invited = function(t) {
void 0 === t && (t = "");
ProtocolCode.C2S_invited.data.code = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_invited);
};
t.C2S_gift_list = function(t) {
void 0 === t && (t = "US");
ProtocolCode.C2S_gift_list.data.country = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_gift_list);
};
t.C2S_trans = function(t, e, o, i) {
void 0 === i && (i = "credit");
ProtocolCode.C2S_trans.data.id = t;
ProtocolCode.C2S_trans.data.trans_email = e;
ProtocolCode.C2S_trans.data.mobile = o;
ProtocolCode.C2S_trans.data.trans_type = i;
n.FGlobal.NetWork.request(ProtocolCode.C2S_trans);
};
t.C2S_broadcast = function(t) {
ProtocolCode.C2S_broadcast.data.msg = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_broadcast);
};
t.C2S_adwords = function(t) {
ProtocolCode.C2S_adwords.data.referrer = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_adwords);
FLog.normal("这个就是回调发送   ", t);
};
t.C2S_app_promo_task = function(t, e) {
ProtocolCode.C2S_app_promo_task.data.name = t;
ProtocolCode.C2S_app_promo_task.data.action = e;
n.FGlobal.NetWork.request(ProtocolCode.C2S_app_promo_task);
};
t.C2S_trans_history = function(t) {
ProtocolCode.C2S_trans_history.data.type = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_trans_history);
};
t.C2S_ad_event = function(t, e) {
ProtocolCode.C2S_ad_event.data.sdk = t;
ProtocolCode.C2S_ad_event.data.type = e;
n.FGlobal.NetWork.request(ProtocolCode.C2S_ad_event);
};
t.C2S_info = function(t) {
void 0 === t && (t = []);
ProtocolCode.C2S_info.data.fields = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_info);
};
t.C2S_add_counters = function(t, e) {
ProtocolCode.C2S_add_counters.data.name = t;
ProtocolCode.C2S_add_counters.data.cnt = e;
n.FGlobal.NetWork.request(ProtocolCode.C2S_add_counters);
};
t.C2S_pg_user_cnt = function(t) {
void 0 === t && (t = []);
ProtocolCode.C2S_pg_user_cnt.data.pgs = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_pg_user_cnt);
};
})(o.FSocketSend || (o.FSocketSend = {}));
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FTaskItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "964a1qGV8xBfKpRjKogCFcQ", "FTaskItem");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./FTaskPage"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mAmount = null;
e.mTitle = null;
e.mProSprite = null;
e.mProLabel = null;
e.mCollect = null;
e.mCard = null;
e.mAl = null;
e.pos = 0;
e.parent = null;
e.amount = 0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.setOneData = function(t, e, o) {
this.pos = e;
this.mAl.active = a.FGlobal.TASK_INFO[this.pos + ""] && 1 == a.FGlobal.TASK_INFO[this.pos + ""];
this.mCollect.node.active = !this.mAl.active;
this.parent = o;
this.mAmount.string = "$" + FConfig.FSDK_CONF.TASK_CONF[0].amount[e];
this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[0].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[0].target[e]);
this.mProLabel.string = t + "/" + FConfig.FSDK_CONF.TASK_CONF[0].target[e];
this.mProSprite.fillRange = t / FConfig.FSDK_CONF.TASK_CONF[0].target[e];
this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !a.FGlobal.TASK_INFO[this.pos + ""];
this.amount = FConfig.FSDK_CONF.TASK_CONF[0].amount[e];
};
e.prototype.setMoreData = function(t, e, o) {
this.pos = e;
this.mAl.active = a.FGlobal.TASK_INFO[this.pos + ""] && 1 == a.FGlobal.TASK_INFO[this.pos + ""];
this.mCollect.node.active = !this.mAl.active;
this.parent = o;
this.mAmount.string = "$" + FConfig.FSDK_CONF.TASK_CONF[e].amount;
this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[e].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[e].target);
this.mProLabel.string = t + "/" + FConfig.FSDK_CONF.TASK_CONF[e].target;
this.mProSprite.fillRange = t / FConfig.FSDK_CONF.TASK_CONF[e].target;
this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !a.FGlobal.TASK_INFO[this.pos + ""];
this.amount = FConfig.FSDK_CONF.TASK_CONF[e].amount;
};
e.prototype.onEnable = function() {
this.mCard.active = !1;
};
e.prototype.clickCollect = function() {
this.moveCard();
};
e.prototype.getStartPosition = function() {
var t = this.node.convertToWorldSpaceAR(this.node.getChildByName("pp").position);
return this.parent.getChildByName("mainNode").convertToNodeSpaceAR(t);
};
e.prototype.getEndPosition = function() {
var t = this.parent.getComponent(r.FTaskPage).mCardNode.convertToWorldSpaceAR(this.parent.getComponent(r.FTaskPage).mCardNode.getChildByName("card").position);
return this.parent.getChildByName("mainNode").convertToNodeSpaceAR(t);
};
e.prototype.moveCard = function() {
this.mCard.scale = .44;
this.mCard.parent = this.parent.getChildByName("mainNode");
this.mCard.position = this.getStartPosition();
this.mCard.active = !0;
this.mCollect.interactable = !1;
this.mCollect.node.active = !1;
this.mAl.active = !0;
cc.tween(this.mCard).to(.5, {
position: this.getEndPosition(),
scale: 1
}, {
easing: "sineIn"
}).call(function() {
this.mCard.active = !1;
this.mCard.parent = this.node;
FSDK.setCredit("pp", this.amount, FConfig.CREDIT_FROM.TASK_REWARD);
a.FGlobal.TASK_INFO[this.pos + ""] = !0;
FSDK.saveData("TASK_INFO", a.FGlobal.TASK_INFO);
}.bind(this)).start();
};
i([ l(cc.Label) ], e.prototype, "mAmount", void 0);
i([ l(cc.Label) ], e.prototype, "mTitle", void 0);
i([ l(cc.Sprite) ], e.prototype, "mProSprite", void 0);
i([ l(cc.Label) ], e.prototype, "mProLabel", void 0);
i([ l(cc.Button) ], e.prototype, "mCollect", void 0);
i([ l(cc.Node) ], e.prototype, "mCard", void 0);
i([ l(cc.Node) ], e.prototype, "mAl", void 0);
return e = i([ c ], e);
}(cc.Component);
o.FTaskItem = d;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"./FTaskPage": "FTaskPage"
} ],
FTaskPage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fe913xrqX1An6agqwunxbml", "FTaskPage");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FPanelManager"), a = t("./FCreditRecord"), s = t("../FModel/FGlobal"), c = t("./FTaskItem"), l = cc._decorator, d = l.ccclass, u = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mTip1 = null;
e.mTransPro = null;
e.mNowNum = null;
e.mLabelPro = null;
e.mBtnTrans = null;
e.mItem = null;
e.mScroll = null;
e.mCardNode = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.node.getChildByName("Top").height = 75 + s.FGlobal.getScale();
this.node.getChildByName("mainNode").getComponent(cc.Widget).top = 75 + s.FGlobal.getScale();
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.initData();
FSDK.addCreditListen(this.creditListen, this);
this.mScroll.stopAutoScroll();
this.mScroll.scrollToTop(0);
};
e.prototype.onDisable = function() {
FSDK.removeCreditListen(this.creditListen, this);
};
e.prototype.creditListen = function(t) {
"pp" == t.type && this.initData();
};
e.prototype.initData = function() {
this.mTip1.string = "can " + FConfig.FSDK_CONF.word.tip2 + ")";
this.mNowNum.string = "$" + s.FGlobal.USER_INFO.credit_pp.toFixed(2);
this.mTransPro.fillRange = s.FGlobal.USER_INFO.credit_pp / 100;
this.mLabelPro.string = "$" + s.FGlobal.USER_INFO.credit_pp.toFixed(2) + " / $100.00";
this.mBtnTrans.interactable = this.mTransPro.fillRange >= 1;
};
e.prototype.setData = function(t) {
1 == FConfig.FSDK_CONF.TASK_CONF.length ? this.oneTask(t) : this.moreTask(t);
};
e.prototype.oneTask = function(t) {
for (var e = FConfig.FSDK_CONF.TASK_CONF[0].target.length, o = 0; o < e; o++) {
var n = null;
this.mScroll.content.childrenCount == e ? n = this.mScroll.content.children[o] : (n = cc.instantiate(this.mItem)).parent = this.mScroll.content;
n.getComponent(c.FTaskItem).setOneData(t, o, this.node);
}
};
e.prototype.moreTask = function(t) {
for (var e = FConfig.FSDK_CONF.TASK_CONF.length, o = 0; o < e; o++) {
var n = null;
this.mScroll.content.childrenCount == e ? n = this.mScroll.content.children[o] : (n = cc.instantiate(this.mItem)).parent = this.mScroll.content;
n.getComponent(c.FTaskItem).setMoreData(t[o], o, this.node);
}
};
e.prototype.closePage = function() {
this.node.parent = null;
};
e.prototype.ppRecord = function() {
r.FPanelManager.load("FCreditRecord", this.node, function(t) {
t.getComponent(a.FCreditRecord).setType("pp");
});
};
e.prototype.getTrans = function() {
FSDK.showToast("You have abnormal behaviors," + FConfig.FSDK_CONF.word.tip2 + " failed");
};
i([ u(cc.Label) ], e.prototype, "mTip1", void 0);
i([ u(cc.Sprite) ], e.prototype, "mTransPro", void 0);
i([ u(cc.Label) ], e.prototype, "mNowNum", void 0);
i([ u(cc.Label) ], e.prototype, "mLabelPro", void 0);
i([ u(cc.Button) ], e.prototype, "mBtnTrans", void 0);
i([ u(cc.Node) ], e.prototype, "mItem", void 0);
i([ u(cc.ScrollView) ], e.prototype, "mScroll", void 0);
i([ u(cc.Node) ], e.prototype, "mCardNode", void 0);
return e = i([ d ], e);
}(cc.Component);
o.FTaskPage = p;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"./FCreditRecord": "FCreditRecord",
"./FTaskItem": "FTaskItem"
} ],
FToLoad: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "df649Ki7KRMeq9Z+aOVaNyR", "FToLoad");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dt = 0;
e.se = 0;
e.label_se = null;
e.label_msg = null;
e.mCircle = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onEnable = function() {};
e.prototype.setMsg = function(t, e, o) {
void 0 === t && (t = "Loading");
void 0 === e && (e = 0);
void 0 === o && (o = !1);
this.label_msg.string = t;
this.label_se.string = e + "se";
this.se = e;
o && this.se ? this.label_se.node.active = !0 : this.label_se.node.active = !1;
};
e.prototype.update = function(t) {
this.mCircle.angle += 3;
this.mCircle.angle >= 360 && (this.mCircle.angle = 0);
this.dt += t;
if (this.dt >= 1) {
this.dt = 0;
if (this.se > 0) {
this.se -= 1;
this.label_se.string = this.se + "se";
if (this.se <= 0) {
this.se = 0;
this.label_se.node.active = !1;
this.node.parent = null;
}
}
}
};
i([ s(cc.Label) ], e.prototype, "label_se", void 0);
i([ s(cc.Label) ], e.prototype, "label_msg", void 0);
i([ s(cc.Node) ], e.prototype, "mCircle", void 0);
return e = i([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
FTransInfo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dddc6snXOZGhqOqveLOjiHr", "FTransInfo");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mCardIcon = null;
e.mAmount = null;
e.mCoin = null;
e.mPro = null;
e.mProLabel = null;
e.mTaskLabel = [];
e.mRedeemBtn = null;
e.mTip = null;
e.mErrSound = null;
e.data = null;
e.confData = null;
e.taskPos = -1;
e.cb = null;
e.mIcon = null;
e.mIconSp = null;
return e;
}
e.prototype.onLoad = function() {
this.mRedeemBtn.node.on(cc.Node.EventType.TOUCH_END, this.getTrans, this);
};
e.prototype.setData = function(t) {
var e = this;
this.taskPos = -1;
this.data = t.data;
this.confData = t.confData;
this.mCardIcon.spriteFrame = this.data.icon;
this.mAmount.string = "$" + this.data.amount;
this.mCoin.string = this.confData.coin;
this.cb = t.cb;
var o = 0;
FSDK.getRegCnt(FNetWorkConfig.data.code, function(t) {
o = t[FNetWorkConfig.data.code];
e.mTip.string = a.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, e.getCnt(o));
});
this.mTip.string = a.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, this.getCnt(o));
this.isTaskSuc();
};
e.prototype.isTaskSuc = function() {
for (var t = [ a.FGlobal.USER_INFO.credit, a.FGlobal.USER_INFO.task, a.FGlobal.USER_INFO.login_days ], e = 0; e < 3; e++) this.mTaskLabel[e].node.active = !1;
for (e = 0; e < 3; e++) {
var o = e + 1;
if (t[e] < this.confData["step" + o]) {
this.mTaskLabel[e].node.active = !0;
this.mTaskLabel[e].node.color = new cc.Color().fromHEX("#FFFFFF");
this.mRedeemBtn.interactable = !1;
-1 == this.taskPos && (this.taskPos = e);
this.mTaskLabel[e].string = "Step" + o + ": " + a.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[e], this.confData["step" + o]);
break;
}
this.mTaskLabel[e].string = "Step" + o + ": " + a.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[e], this.confData["step" + o]);
this.mTaskLabel[e].node.active = !0;
this.mTaskLabel[e].node.color = new cc.Color().fromHEX("#8CFF4B");
if (2 == e) {
this.taskPos = e;
this.mRedeemBtn.interactable = !0;
}
}
0 == this.taskPos && (this.mTaskLabel[0].string = a.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[0], this.confData.step1));
var n = this.taskPos + 1;
this.mPro.progress = t[this.taskPos] / this.confData["step" + n];
this.mProLabel.string = t[this.taskPos] + "/" + this.confData["step" + n];
};
e.prototype.closePage = function() {
r.FPanelManager.close_eff(this.node);
};
e.prototype.getCnt = function(t) {
var e = t;
if (1 == this.confData.type || 2 == this.confData.type) switch (this.data.amount) {
case 10:
e = Math.floor(.07 * t + 821);
break;

case 25:
e = Math.floor(.012 * t + 258);
break;

case 50:
e = Math.floor(.0017 * t + 70);
} else if (3 == this.confData.type) switch (this.data.amount) {
case 10:
e = Math.floor(.06 * t + 511);
break;

case 25:
e = Math.floor(.014 * t + 198);
break;

case 50:
e = Math.floor(.002 * t + 47);
} else if (4 == this.confData.type) switch (this.data.amount) {
case 10:
e = Math.floor(.02 * t + 144);
break;

case 25:
e = Math.floor(.007 * t + 85);
break;

case 50:
e = Math.floor(.0014 * t + 8);
}
return e;
};
e.prototype.getTrans = function() {
var t = this;
if (this.mRedeemBtn.interactable) if (3 != this.confData.type) FSDK.showToast(FConfig.FSDK_CONF.word.tip9); else {
FSDK.showTransPage(this.node.parent, this.data, function(e) {
if (t.cb) {
t.cb();
t.cb = null;
}
}, "list", !0, this.mIconSp);
this.closePage();
} else {
a.FGlobal.USER_INFO.setting.sound && this.mErrSound.play();
this.noSuc(this.mTaskLabel[this.taskPos].node);
}
};
e.prototype.noSuc = function(t) {
t.stopAllActions();
t.scale = 1;
cc.tween(t).to(.15, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
};
i([ l(cc.Sprite) ], e.prototype, "mCardIcon", void 0);
i([ l(cc.Label) ], e.prototype, "mAmount", void 0);
i([ l(cc.Label) ], e.prototype, "mCoin", void 0);
i([ l(cc.ProgressBar) ], e.prototype, "mPro", void 0);
i([ l(cc.Label) ], e.prototype, "mProLabel", void 0);
i([ l(cc.Label) ], e.prototype, "mTaskLabel", void 0);
i([ l(cc.Button) ], e.prototype, "mRedeemBtn", void 0);
i([ l(cc.RichText) ], e.prototype, "mTip", void 0);
i([ l(cc.AudioSource) ], e.prototype, "mErrSound", void 0);
i([ l(cc.Sprite) ], e.prototype, "mIcon", void 0);
return e = i([ c ], e);
}(cc.Component);
o.FTransInfo = d;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FTransItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0f7d7pouCZPtqXa9GRGth64", "FTransItem");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mCardIcon = null;
e.mCoin = null;
e.mStatus = null;
e.mCardIconSp = [];
e.mAmount = null;
e.mIcon = null;
e.data = null;
e.confData = null;
e.mFTransInfo = null;
return e;
}
e.prototype.onLoad = function() {
cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
};
e.prototype.on_S2C_trans_history = function(t) {
if (!t.err && "list" == t.data.type) for (var e = 0; e < t.data.records.length; e++) t.data.records[e].custom_id == this.data.id && this.setStatus(t.data.records[e]);
};
e.prototype.setData = function(t, e, o) {
void 0 === o && (o = null);
o && (this.mIcon.spriteFrame = o);
this.mFTransInfo = e;
this.data = t;
this.mAmount.string = "$" + t.amount;
this.confData || (this.confData = this.getConfInfo());
this.data.count = this.confData.coin;
this.mCoin.string = this.confData.coin;
this.mCardIcon.spriteFrame = this.mCardIconSp[this.confData.type - 1];
this.data.icon = this.mCardIconSp[this.confData.type - 1];
1 == this.confData.type && cc.sys.os == cc.sys.OS_IOS && (this.node.parent = null);
2 == this.confData.type && cc.sys.os == cc.sys.OS_ANDROID && (this.node.parent = null);
if (a.FGlobal.USER_INFO.trans_record.list) for (var n = 0; n < a.FGlobal.USER_INFO.trans_record.list.length; n++) a.FGlobal.USER_INFO.trans_record.list[n] == this.data.id && this.setStatus({
status: 0
});
};
e.prototype.getConfInfo = function() {
for (var t = 0; t < FConfig.FSDK_CONF.LIST_CONF.target.length; t++) if (this.data.id == FConfig.FSDK_CONF.LIST_CONF.target[t].id) return FConfig.FSDK_CONF.LIST_CONF.target[t];
return null;
};
e.prototype.click = function() {
var t = this;
a.FGlobal.USER_INFO.trans_record.list || (a.FGlobal.USER_INFO.trans_record.list = []);
for (var e = 0; e < a.FGlobal.USER_INFO.trans_record.list.length; e++) if (a.FGlobal.USER_INFO.trans_record.list[e] == this.data.id) {
FSDK.showToast("The order has been received");
return;
}
r.FPanelManager.open_eff(this.mFTransInfo.node);
this.mFTransInfo.setData({
data: this.data,
confData: this.confData,
cb: function() {
a.FGlobal.USER_INFO.trans_record.list.push(t.data.id);
t.setStatus({
status: 0
});
}
});
};
e.prototype.setStatus = function(t) {
FLog.normal("有没有进来");
var e = "Processing", o = "FF8F00";
switch (t.status) {
case 0:
e = "Processing";
o = "FF8F00";
break;

case 1:
e = "Finish";
o = "15C323";
break;

case 2:
e = "In Review";
o = "FF8F00";
break;

case -1:
e = "Refuse";
o = "D32424";
break;

case -2:
e = "GetFail";
o = "D32424";
}
this.mCoin.node.parent.parent.active = !1;
this.mStatus.node.active = !0;
this.mStatus.string = e;
this.mStatus.node.color = new cc.Color().fromHEX(o);
};
i([ l(cc.Sprite) ], e.prototype, "mCardIcon", void 0);
i([ l(cc.Label) ], e.prototype, "mCoin", void 0);
i([ l(cc.Label) ], e.prototype, "mStatus", void 0);
i([ l(cc.SpriteFrame) ], e.prototype, "mCardIconSp", void 0);
i([ l(cc.Label) ], e.prototype, "mAmount", void 0);
i([ l(cc.Sprite) ], e.prototype, "mIcon", void 0);
return e = i([ c ], e);
}(cc.Component);
o.FTransItem = d;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FTransList: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8dd59Er76dG4KnE3vA9XIou", "FTransList");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = t("./FTransItem"), s = t("./FTransInfo"), c = t("../FNetWork/FSocketSend"), l = cc._decorator, d = l.ccclass, u = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mMyCoin = null;
e.mAbout = null;
e.mTransItem = null;
e.mScroll = null;
e.mFTransInfo = null;
e.mIcom = null;
e.mIconSp = [];
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.setContentSize(cc.winSize);
this.node.getChildByName("Top").height = 85 + r.FGlobal.getScale();
this.mScroll.node.getComponent(cc.Widget).top = 330 + r.FGlobal.getScale();
FSDK.addCreditListen(function(e) {
"credit" == e.type && (t.mMyCoin.string = e.num);
}, this);
};
e.prototype.setTask = function(t, e) {
void 0 === t && (t = 0);
void 0 === e && (e = null);
null == e && (e = this.mIconSp[t]);
this.mIcom.spriteFrame = e;
this.mFTransInfo.mIconSp = e;
this.mFTransInfo.mIcon.spriteFrame = e;
this.setData(e);
};
e.prototype.onEnable = function() {
this.mScroll.stopAutoScroll();
this.mScroll.scrollToTop(0);
c.FSocketSend.C2S_trans_history("list");
};
e.prototype.setData = function(t) {
this.mMyCoin.string = r.FGlobal.USER_INFO.credit + "";
var e = r.FGlobal.USER_INFO.credit / 1e4;
this.mAbout.string = "≈$" + e.toFixed(2);
if (!this.mScroll.content.childrenCount) for (var o = 0; o < FConfig.conf.redeem_task.list.length; o++) {
var n = cc.instantiate(this.mTransItem);
n.parent = this.mScroll.content;
n.getComponent(a.FTransItem).setData(FConfig.conf.redeem_task.list[o], this.mFTransInfo, t);
}
};
e.prototype.closePage = function() {
this.node.parent = null;
};
i([ u(cc.Label) ], e.prototype, "mMyCoin", void 0);
i([ u(cc.Label) ], e.prototype, "mAbout", void 0);
i([ u(cc.Prefab) ], e.prototype, "mTransItem", void 0);
i([ u(cc.ScrollView) ], e.prototype, "mScroll", void 0);
i([ u(s.FTransInfo) ], e.prototype, "mFTransInfo", void 0);
i([ u(cc.Sprite) ], e.prototype, "mIcom", void 0);
i([ u(cc.SpriteFrame) ], e.prototype, "mIconSp", void 0);
return e = i([ d ], e);
}(cc.Component);
o.FTransList = p;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FNetWork/FSocketSend": "FSocketSend",
"./FTransInfo": "FTransInfo",
"./FTransItem": "FTransItem"
} ],
FTransPage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "81371UlKJNPpZ3IcnmAAJ2m", "FTransPage");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mPP = null;
e.mCoin = null;
e.mEM1 = null;
e.mEM2 = null;
e.mTos = null;
e.mTosScroll = null;
e.mTosSp = null;
e.mIcon = null;
e.data = null;
e.type = "task";
e.cb = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.mTosSp.spriteFrame = FNetWorkConfig.data.tos_img;
};
e.prototype.onEnable = function() {
this.mEM1.string = "";
this.mEM2.string = "";
this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
};
e.prototype.onDisable = function() {};
e.prototype.editBegin = function(t, e) {
switch (e) {
case "1":
this.mEM1.placeholderLabel.string = "";
break;

case "2":
this.mEM2.placeholderLabel.string = "";
}
};
e.prototype.editEnd = function(t, e) {
switch (e) {
case "1":
this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
break;

case "2":
this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
}
};
e.prototype.setData = function(t, e, o, n, i) {
void 0 === o && (o = "task");
void 0 === n && (n = !1);
void 0 === i && (i = null);
i && (this.mIcon.spriteFrame = i);
this.cb = e;
this.type = o;
this.mCoin.node.parent.active = n;
FLog.normal("什么玩意啊   ", t);
this.data = t;
this.mPP.string = "$" + this.data.amount;
this.mCoin.string = this.data.count;
};
e.prototype.closePage = function() {
r.FPanelManager.close_eff(this.node, !0);
};
e.prototype.getTrans = function() {
var t = this;
if (this.mEM1.string.length > 0) {
if (this.mEM2.string.length <= 0) {
FSDK.showToast("Sorry, the phone can't be empty");
return;
}
if (-1 != this.mEM1.string.indexOf("@")) if (a.FGlobal.USER_INFO.credit >= this.data.count) {
FSDK.setCredit("credit", -this.data.count, "redeem");
FSDK.getTrans(this.data.id, this.mEM1.string, this.mEM2.string, this.type, function() {
t.closePage();
if (t.cb) {
t.cb();
t.cb = null;
}
});
} else FSDK.showToast("Diamonds is not enough"); else FSDK.showToast("Sorry, your paypal email is not legal");
} else FSDK.showToast("Sorry, the paypal email can't be empty");
};
e.prototype.showTos = function() {
this.mTos.active = !0;
this.mTosScroll.stopAutoScroll();
this.mTosScroll.scrollToTop(0);
};
e.prototype.closeTos = function() {
this.mTos.active = !1;
};
i([ l(cc.Label) ], e.prototype, "mPP", void 0);
i([ l(cc.Label) ], e.prototype, "mCoin", void 0);
i([ l(cc.EditBox) ], e.prototype, "mEM1", void 0);
i([ l(cc.EditBox) ], e.prototype, "mEM2", void 0);
i([ l(cc.Node) ], e.prototype, "mTos", void 0);
i([ l(cc.ScrollView) ], e.prototype, "mTosScroll", void 0);
i([ l(cc.Sprite) ], e.prototype, "mTosSp", void 0);
i([ l(cc.Sprite) ], e.prototype, "mIcon", void 0);
return e = i([ c ], e);
}(cc.Component);
o.FTransPage = d;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FTwoCardItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c26f8IRrUVHnpYeKbZH+Swq", "FTwoCardItem");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mCard = null;
e.mTip1 = null;
e.mTip2 = null;
e.mTip3 = null;
e.mTip4 = null;
e.mPro = null;
e.mProLabel = null;
e.mHelpBtn = null;
e.mTransBtn = null;
e.mStatus = null;
e.mErrSound = null;
e.type = 0;
e.pos = 1;
e.mFTwoCard = null;
return e;
}
e.prototype.onLoad = function() {
this.mTransBtn.node.on(cc.Node.EventType.TOUCH_END, this.clickTrans, this);
this.mHelpBtn.on(cc.Node.EventType.TOUCH_START, this.clickHelp, this);
this.mStatus.node.active = !1;
cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
};
e.prototype.on_S2C_trans_history = function(t) {
if (!t.err && "twocard" == t.data.type) for (var e = 0; e < t.data.records.length; e++) t.data.records[e].custom_id == FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1] && this.setStatus(t.data.records[e]);
};
e.prototype.setData = function(t, e, o) {
this.mFTwoCard = o;
this.type = t;
this.mCard.spriteFrame = e;
FLog.normal("什么吗   ", FConfig.FSDK_CONF.word);
1 == this.pos ? this.mTip3.string = "Step1: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title + "\nStep2: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title + "\nStep3: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[2].title : this.mTip3.string = r.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip8, 500);
this.getTargetPos();
if (r.FGlobal.USER_INFO.trans_record.twocard) for (var n = 0; n < r.FGlobal.USER_INFO.trans_record.twocard.length; n++) if (r.FGlobal.USER_INFO.trans_record.twocard[n] == FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]) {
this.setStatus({
status: 0
});
return;
}
this.mTransBtn.node.active = !0;
this.mStatus.node.active = !1;
};
e.prototype.getTargetPos = function() {
1 == this.pos && (this.mHelpBtn.active = !1);
var t = [ r.FGlobal.USER_INFO.credit_pp, r.FGlobal.USER_INFO.task, r.FGlobal.USER_INFO.login_days ];
0 != this.type && (t[0] = r.FGlobal.USER_INFO.credit_gp);
for (var e = -1, o = 0; o < FConfig.FSDK_CONF.TWO_CARD["card" + this.pos].target.length; o++) {
if (t[o] < FConfig.FSDK_CONF.TWO_CARD["card" + this.pos].target[o].cnt) {
this.mTip2.string = r.FGlobal.exWenzi(FConfig.FSDK_CONF.TWO_CARD["card" + this.pos].target[o].title, t[o]);
this.mTransBtn.interactable = !1;
e = o;
break;
}
0 == o ? this.mTip3.string = "Step1: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title + "\nStep2: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title : 1 == o && (this.mTip3.string = "Step1: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title + "\nStep2: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title + "\nStep3: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[2].title);
if (o == FConfig.FSDK_CONF.TWO_CARD["card" + this.pos].target.length - 1) {
e = o;
FLog.normal("任务没有达成呢true");
this.mTransBtn.interactable = !0;
this.mTip2.string = "";
}
}
this.mPro.progress = t[e] / FConfig.FSDK_CONF.TWO_CARD["card" + this.pos].target[e].cnt;
if (0 == e) this.mProLabel.string = "$" + t[0].toFixed(2) + "/$" + FConfig.FSDK_CONF.TWO_CARD["card" + this.pos].target[e].cnt.toFixed(2); else {
this.mProLabel.string = t[e] + "/" + FConfig.FSDK_CONF.TWO_CARD["card" + this.pos].target[e].cnt;
1 == this.pos && (this.mHelpBtn.active = !0);
}
};
e.prototype.setCnt = function(t) {
var e = 0;
e = 0 == this.type ? 1 == this.pos ? Math.floor(.025 * t + 211) : Math.floor(.003 * t + 12) : 1 == this.pos ? Math.floor(.033 * t + 174) : Math.floor(.004 * t + 8);
this.mTip1.string = r.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip6, e);
this.mTip4.string = this.mTip1.string + ",keep it up!";
};
e.prototype.onEnable = function() {
this.mTip4.node.parent.active = !1;
};
e.prototype.clickHelp = function() {
this.mTip4.node.parent.active = !this.mTip4.node.parent.active;
};
e.prototype.closeHelp = function() {};
e.prototype.clickTrans = function() {
var t = this;
if (this.mTransBtn.interactable) {
FLog.normal("啥玩意儿啊  ", this.type, this.pos);
var e = this.getGift(FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]);
FSDK.showTransPage(this.mFTwoCard.node, e, function() {
t.mStatus.node.active = !0;
t.mTransBtn.node.active = !1;
r.FGlobal.USER_INFO.trans_record.twocard || (r.FGlobal.USER_INFO.trans_record.twocard = []);
r.FGlobal.USER_INFO.trans_record.twocard.push(FConfig.FSDK_CONF.TWO_CARD.cardList[t.type][t.pos - 1]);
}, "twocard", !1);
} else {
r.FGlobal.USER_INFO.setting.sound && this.mErrSound.play();
FLog.normal("任务没有达成呢");
this.noSuc();
}
};
e.prototype.getGift = function(t) {
for (var e = 0; e < FConfig.conf.redeem_task.twocard.length; e++) if (t == FConfig.conf.redeem_task.twocard[e].id) return FConfig.conf.redeem_task.twocard[e];
};
e.prototype.noSuc = function() {
this.mTip2.node.stopAllActions();
this.mTip2.node.scale = 1;
cc.tween(this.mTip2.node).to(.15, {
scale: 1.1
}).to(.2, {
scale: 1
}).start();
};
e.prototype.setStatus = function(t) {
FLog.normal("有没有进来");
var e = "Processing", o = "FF8F00";
switch (t.status) {
case 0:
e = "Processing";
o = "FF8F00";
break;

case 1:
e = "Finish";
o = "15C323";
break;

case 2:
e = "In Review";
o = "FF8F00";
break;

case -1:
e = "Refuse";
o = "D32424";
break;

case -2:
e = "GetFail";
o = "D32424";
}
this.mTransBtn.node.active = !1;
this.mStatus.node.active = !0;
this.mStatus.string = e;
this.mStatus.node.color = new cc.Color().fromHEX(o);
};
i([ c(cc.Sprite) ], e.prototype, "mCard", void 0);
i([ c(cc.RichText) ], e.prototype, "mTip1", void 0);
i([ c(cc.RichText) ], e.prototype, "mTip2", void 0);
i([ c(cc.RichText) ], e.prototype, "mTip3", void 0);
i([ c(cc.RichText) ], e.prototype, "mTip4", void 0);
i([ c(cc.ProgressBar) ], e.prototype, "mPro", void 0);
i([ c(cc.Label) ], e.prototype, "mProLabel", void 0);
i([ c(cc.Node) ], e.prototype, "mHelpBtn", void 0);
i([ c(cc.Button) ], e.prototype, "mTransBtn", void 0);
i([ c(cc.Label) ], e.prototype, "mStatus", void 0);
i([ c(cc.AudioSource) ], e.prototype, "mErrSound", void 0);
i([ c ], e.prototype, "pos", void 0);
return e = i([ s ], e);
}(cc.Component);
o.FTwoCardItem = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FTwoCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "97e50ATWGpMrJXu1FHxLekB", "FTwoCard");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./FTwoCardItem"), a = t("../FModel/FGlobal"), s = t("../FNetWork/FSocketSend"), c = cc._decorator, l = c.ccclass, d = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mTitleSp = [];
e.mCardSp = [];
e.mTitle = null;
e.mCard1 = null;
e.mCard2 = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.node.getChildByName("Top").height = 85 + a.FGlobal.getScale();
};
e.prototype.onEnable = function() {
s.FSocketSend.C2S_trans_history("twocard");
};
e.prototype.setType = function(t) {
var e = this;
1 == t && (cc.sys.os == cc.sys.OS_ANDROID ? t = 1 : cc.sys.os == cc.sys.OS_IOS && (t = 2));
this.mTitle.spriteFrame = this.mTitleSp[t];
this.mCard1.setData(t, this.mCardSp[t], this);
this.mCard2.setData(t, this.mCardSp[t], this);
var o = 0;
FSDK.getRegCnt(FNetWorkConfig.data.code, function(t) {
console.log("什么啊  ", t);
o = t[FNetWorkConfig.data.code];
e.mCard1.setCnt(o);
e.mCard2.setCnt(o);
});
this.mCard1.setCnt(o);
this.mCard2.setCnt(o);
};
e.prototype.closePage = function() {
this.node.parent = null;
};
i([ d(cc.SpriteFrame) ], e.prototype, "mTitleSp", void 0);
i([ d(cc.SpriteFrame) ], e.prototype, "mCardSp", void 0);
i([ d(cc.Sprite) ], e.prototype, "mTitle", void 0);
i([ d(r.FTwoCardItem) ], e.prototype, "mCard1", void 0);
i([ d(r.FTwoCardItem) ], e.prototype, "mCard2", void 0);
return e = i([ l ], e);
}(cc.Component);
o.FTwoCard = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FNetWork/FSocketSend": "FSocketSend",
"./FTwoCardItem": "FTwoCardItem"
} ],
FUpdate: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "09973NNTGxFso9yB5gTx29Z", "FUpdate");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FPanelManager"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mCurrent = null;
e.mLatest = null;
e.mBtnClose = null;
return e;
}
e.prototype.onEnable = function() {
this.mCurrent.string = "v" + FConfig.VERSION;
this.mLatest.string = "v" + FConfig.FSDK_CONF.UPDATE_CONF.ver;
this.mBtnClose.active = !FConfig.FSDK_CONF.UPDATE_CONF.must;
};
e.prototype.closePage = function() {
r.FPanelManager.close_eff(this.node, !0);
};
e.prototype.getUpdate = function() {
FNative.jumpShop(FNetWorkConfig.data.pg);
};
i([ c(cc.Label) ], e.prototype, "mCurrent", void 0);
i([ c(cc.Label) ], e.prototype, "mLatest", void 0);
i([ c(cc.Node) ], e.prototype, "mBtnClose", void 0);
return e = i([ s ], e);
}(cc.Component);
o.FUpdate = l;
cc._RF.pop();
}, {
"../FModel/FPanelManager": "FPanelManager"
} ],
GPool: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4060bLZ2wNDDKlryONxhi6N", "GPool");
var n = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, r = new (function() {
function t() {
this._PoolPath = "prefabs";
this._InitCommon = 0;
this._InitEach = {};
this._InitFunctionName = "setData";
this._allPool = new Map();
this._allPrefab = new Map();
}
t.prototype.init = function(t) {
var e = this;
void 0 === t && (t = {});
for (var o = 0, n = Object.keys(t); o < n.length; o++) {
var i = n[o];
"undefined" != typeof this["_" + i] && (this["_" + i] = t[i]);
}
cc.loader.loadResDir(this._PoolPath, cc.Prefab, function(t, o, n) {
for (var i = 0, r = n; i < r.length; i++) {
var a = r[i].split("/");
e._initPool(a[a.length - 1]);
}
});
};
t.prototype._initPool = function(t) {
return n(this, void 0, void 0, function() {
var e = this;
return i(this, function(o) {
switch (o.label) {
case 0:
return [ 4, new Promise(function(o, n) {
cc.loader.loadRes(e._PoolPath + "/" + t, cc.Prefab, function(i, r) {
if (i) {
console.error(i.message || i);
n(i);
} else {
for (var a = new cc.NodePool(), s = e._InitEach[t] || e._InitCommon, c = 0; c < s; c++) a.put(cc.instantiate(r));
e._allPool.set(t, a);
e._allPrefab.set(t, r);
o();
}
});
}) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
t.prototype.get = function(t, e) {
void 0 === e && (e = {});
return n(this, void 0, void 0, function() {
var o, n, r, a, s = this;
return i(this, function(i) {
switch (i.label) {
case 0:
o = e.isGetInfo, n = e.setData;
r = this._allPool.get(t);
a = this._allPrefab.get(t);
return r && a ? [ 2, this._get(t, o, n) ] : [ 3, 1 ];

case 1:
return [ 4, this._initPool(t) ];

case 2:
i.sent();
return [ 2, new Promise(function(e, i) {
e(s._get(t, o, n));
}) ];
}
});
});
};
t.prototype._get = function(t, e, o) {
return n(this, void 0, void 0, function() {
var n = this;
return i(this, function(i) {
return [ 2, new Promise(function(i, r) {
var a = n._allPool.get(t), s = n._allPrefab.get(t);
if (e) i(s.data); else {
var c = null;
c = a.size() > 0 ? a.get() : cc.instantiate(s);
if (o) {
var l = c.getComponent(t);
if (l && l[n._InitFunctionName]) {
l.__preload && 0 == l._isOnLoadCalled && l.__preload();
l[n._InitFunctionName](o);
}
}
i(c);
}
}) ];
});
});
};
t.prototype.put = function(t) {
t.stopAllActions();
this.reductionFun(t);
var e = this._allPool.get(t.name);
e.put(t);
FLog.normal(t.name + "节点池数量:", e.size());
};
t.prototype.destroyPool = function(t) {
this._allPool.get(t).clear();
};
t.prototype.destroyAllPool = function() {
this._allPool.forEach(function(t) {
return t.clear();
});
this._allPool.clear();
this._allPrefab.clear();
};
t.prototype.reductionFun = function(t) {
if ("bx" == t.name) {
t.opacity = 255;
t.scale = 1;
t.getChildByName("New Label").active = !0;
t.getComponent(cc.PhysicsPolygonCollider).enabled = !0;
}
};
return t;
}())();
window.GPool = r;
cc._RF.pop();
}, {} ],
GameController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b3d82RSe+pEz6WsoUjpl4eK", "GameController");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, r = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./Ball"), c = t("./Barrier"), l = t("../common/EventConstants"), d = t("../common/Events"), u = t("../common/PopupConstants"), p = t("../common/User"), f = t("../common/Utils"), h = t("../common/AudioConstands"), g = t("../common/Actions"), _ = t("./Cion"), m = cc._decorator, v = m.ccclass, y = m.property, S = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabBarriers = [];
e.prefabFunBarriers = [];
e.prefabBall = null;
e.balls = [];
e.barriers = [];
e.ballCount = null;
e.guide = null;
e.gameStatus = !0;
e.takeAim = null;
e.ballParent = null;
e.barrierParent = null;
e.mPaomaNode = null;
e.mAnimCions = null;
e.mCionsNode = null;
e.mStarUiNode = null;
e.levelLabel = null;
e.nextLevelLabel = null;
e.levelProgressBar = null;
e.numTw = null;
e.numTw1 = null;
e._upgradeExp = 0;
e.recordBall = [];
e.recordBarrier = [];
e.recycleBallsCount = 1;
e.barrierScoreRate = 0;
e.score = 0;
e.isGameOver = !1;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
d.events.on(this.name, this.uuid, l.GameEvents.UPDATALEVEL, this.updateLevel, this);
this.openPm();
};
e.prototype.openPm = function() {
FSDK.showMarQuee(this.mPaomaNode);
};
e.prototype.init = function() {
return r(this, void 0, void 0, function() {
var t, e;
return a(this, function(o) {
switch (o.label) {
case 0:
if (p.user.passGuide) {
t = p.user.getLumpData().reviveNum;
p.user.setCurrnetReviveNum(t);
}
for (e = 0; e < p.user.getRecordBarrier().length; e++) if (p.user.getRecordBarrier()[e].pos.y > 300) {
this.restartInit();
return [ 2 ];
}
if (!(p.user.getRecordBarrier().length > 0 && p.user.getRecordBall().length > 0)) return [ 3, 1 ];
this.guide.zIndex = 10;
this.guide.active = !1;
this.initRecordBarrier();
this.initBalls();
this.gameStatus = !0;
this.isGameOver = !1;
this.setBallCount(p.user.getRecordBall().length);
this.recycleBallsCount = p.user.getRecordBall().length;
return [ 3, 5 ];

case 1:
this.startBall();
this.gameStatus = !0;
this.score = 0;
this.recycleBallsCount = 10;
this.barrierScoreRate = 0;
this.guide.zIndex = 10;
this.guide.active = !1;
this.isGameOver = !1;
this.setBallCount(this.balls.length);
p.user.setIsRain(!1);
p.user.setRainProbability(p.user.getLumpData().rainProbability);
e = 0;
o.label = 2;

case 2:
return e < 3 ? [ 4, this.addBarriers(e) ] : [ 3, 5 ];

case 3:
o.sent();
o.label = 4;

case 4:
e++;
return [ 3, 2 ];

case 5:
this.updateLevel();
this.guideShow();
return [ 2 ];
}
});
});
};
e.prototype.onTouchStart = function() {
this.guideHide();
};
e.prototype.onTouchEnd = function(t) {
if (this.isRecycleFinished() && !l.GameConstant.isAward) {
this.node.getChildByName("take-aim").getComponent(cc.Graphics).clear();
this.recycleBallsCount = 0;
var e = this.node.convertToNodeSpaceAR(t.getLocation());
e.y > 320 && (e = new cc.Vec2(e.x, 320));
this.shootBalls(e.sub(cc.v2(0, 390)));
}
};
e.prototype.initRecordBarrier = function() {
return r(this, void 0, void 0, function() {
var t, e;
return a(this, function(o) {
switch (o.label) {
case 0:
t = 0;
o.label = 1;

case 1:
return t < p.user.getRecordBarrier().length ? [ 4, GPool.get(p.user.getRecordBarrier()[t].name) ] : [ 3, 4 ];

case 2:
(e = o.sent()).parent = this.barrierParent;
e.position = p.user.getRecordBarrier()[t].pos;
e.angle = p.user.getRecordBarrier()[t].angle;
e.scale = p.user.getRecordBarrier()[t].scale;
-1 != p.user.getRecordBarrier()[t].name.indexOf("polygon") ? e.getComponent(c.default).init(p.user.getRecordBarrier()[t].score, p.user.getRecordBarrier()[t].isRain) : e.getComponent(c.default).init(p.user.getRecordBarrier()[t].score);
this.barriers.push(e.getComponent(c.default));
o.label = 3;

case 3:
t++;
return [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.initBalls = function() {
return r(this, void 0, void 0, function() {
var t, e;
return a(this, function(o) {
switch (o.label) {
case 0:
t = 0;
o.label = 1;

case 1:
return t < p.user.getRecordBall().length ? [ 4, GPool.get("ball") ] : [ 3, 4 ];

case 2:
(e = o.sent()).parent = this.ballParent;
e.position = cc.v2(0, 390);
e.scale = p.user.getRecordBall()[t].scale;
e.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
e.getComponent(s.default).setHurt(p.user.getRecordBall()[t].hurt);
this.balls.push(e.getComponent(s.default));
o.label = 3;

case 3:
t++;
return [ 3, 1 ];

case 4:
this.setRecordBalls();
return [ 2 ];
}
});
});
};
e.prototype.startBall = function() {
for (var t = this, e = 0; e < 10; e++) GPool.get("ball").then(function(e) {
e.parent = t.ballParent;
e.position = cc.v2(0, 390);
e.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
t.balls.push(e.getComponent(s.default));
t.setBallCount(t.balls.length);
});
this.setRecordBalls();
};
e.prototype.addBall = function(t) {
return r(this, void 0, void 0, function() {
var e;
return a(this, function(o) {
switch (o.label) {
case 0:
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.POP);
return [ 4, GPool.get(this.prefabBall.name) ];

case 1:
(e = o.sent()).parent = this.ballParent;
e.position = t;
e.getComponent(s.default).rigidBody.linearVelocity = cc.v2(500 * Math.random() < .5 ? -1 : 1, -1e3);
e.getComponent(s.default).rigidBody.gravityScale = 10;
this.balls.push(e.getComponent(s.default));
this.setBallCount(this.balls.length);
this.setRecordBalls();
return [ 2 ];
}
});
});
};
e.prototype.addBarriers = function(t) {
return r(this, void 0, void 0, function() {
var e, o, n, i, r, s, u, g, _, m, v, y, S, F, C, b;
return a(this, function(a) {
switch (a.label) {
case 0:
e = -300;
p.user.setCurrentLine();
p.user.setCurrentRenLine();
o = this.getInitBarrierRandom();
n = this.backBarrierPosX(o);
i = 0;
t && (e = 100 * t - 300);
r = p.user.getAwardNumber() <= p.user.getLumpData().outOfRedAndCost[0] ? p.user.getLumpData().outOfRedAndCost[0] : p.user.getLumpData().outOfRedAndCost[1];
s = f.utils.randomInt([ 1, 10 ]);
u = p.user.getLumpData().videoAddPoint;
g = p.user.getLumpData().videoBaoXiang;
_ = !1;
p.user.getAwardNumber() >= u[u.length - 1] && (_ = !1);
m = !1;
v = p.user.getCurrentLine() % p.user.getLumpData().addProp == 0;
a.label = 1;

case 1:
if (!(i < o)) return [ 3, 13 ];
y = void 0;
S = FSDK.getCard(0);
for (F = 0; F < u.length; F++) if (p.user.getAwardNumber() <= u[F]) {
s <= g[F] && (_ = !0);
break;
}
if (!p.user.serverData.isFlag || p.user.serverData.isBlack || p.user.getIsRedAndCost() || !_ || !(S.num > 0 || 0 != p.user.getCurrentRedLine() && p.user.getCurrentRedLine() % r == 0)) return [ 3, 3 ];
p.user.setIsRedAndCost(!0);
p.user.save();
return [ 4, GPool.get("bx") ];

case 2:
y = a.sent();
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.DINGDONG);
p.user.setCurrentRenLine(0);
_ = !1;
return [ 3, 12 ];

case 3:
if (!(v && !m && (this.isAllBallBig() || this.balls.length < p.user.getLumpData().MaxBallCount) && p.user.getCurrentProp() < 2)) return [ 3, 10 ];
C = p.user.getCurrentProp();
C += 1;
p.user.setCurrentProp(C);
m = !0;
return this.balls.length >= p.user.getLumpData().MaxBallCount ? [ 4, GPool.get("buffBigBall") ] : [ 3, 5 ];

case 4:
y = a.sent();
return [ 3, 9 ];

case 5:
return this.isAllBallBig() ? [ 3, 7 ] : [ 4, GPool.get("buffAddBall") ];

case 6:
y = a.sent();
return [ 3, 9 ];

case 7:
b = f.utils.randomInt([ 0, 1 ]);
return [ 4, GPool.get(this.prefabFunBarriers[b].name) ];

case 8:
y = a.sent();
a.label = 9;

case 9:
return [ 3, 12 ];

case 10:
return [ 4, GPool.get(this.prefabBarriers[Math.floor(Math.random() * this.prefabBarriers.length)].name) ];

case 11:
y = a.sent();
a.label = 12;

case 12:
this.barrierParent.addChild(y);
y.position = cc.v2(n[i], e);
y.getComponent(c.default).init();
this.barriers.push(y.getComponent(c.default));
i++;
return [ 3, 1 ];

case 13:
this.isAddRaindow(e);
this.isBarrierPos();
this.setRecordBarriers();
return [ 2 ];
}
});
});
};
e.prototype.bigBall = function(t) {
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.POP);
t.scale = p.user.getLumpData().MaxBigBall;
t.getComponent(s.default).setHurt(2);
};
e.prototype.setBallCount = function(t) {
this.ballCount.string = t.toString();
};
e.prototype.shootBalls = function(t) {
var e = this;
if (this.gameStatus) {
l.GameConstant.isShoot = !0;
for (var o = function(o) {
var i = n.balls[o];
n.scheduleOnce(function() {
e.shootBall(i, t);
}, .1 * o);
}, n = this, i = 0; i < this.balls.length; i++) o(i);
}
};
e.prototype.shootBall = function(t, e) {
t.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
t.rigidBody.active = !1;
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.CRASH);
t.rigidBody.active = !0;
var o = Math.atan2(e.y, e.x) / Math.PI * 180, n = 100 * Math.cos(.017453293 * o), i = 100 * Math.sin(.017453293 * o);
t.rigidBody.linearVelocity = cc.v2(20 * n, 20 * i);
};
e.prototype.recycleBall = function() {
this.recycleBallsCount++;
this.barrierScoreRate += .1;
if (this.isRecycleFinished()) {
for (var t = 0; t < this.barriers.length; t++) {
var e = this.barriers[t];
if (0 == this.barriers[t].getScore() && "bx" === e.node.name) {
d.events.emit(l.GameEvents.OPENVDIEO, this.barriers[t], 0);
return;
}
}
this.moveBarriesr();
}
};
e.prototype.moveBarriesr = function() {
for (var t = this, e = function(e) {
var n = o.barriers[e];
cc.tween(n.node).by(.1, {
position: cc.v2(0, 100)
}).call(function() {
t.setRecordBarriers();
if (n.node.position.y > 200) {
p.user.IsShake && FSDK.shake(50);
n.node.runAction(cc.shake(1.5, 5, 5));
}
if (n.node.position.y >= 390) if ("buffAddBall" == n.node.name || "buffBigBall" == n.node.name) {
t.removeBarrier(n);
var e = p.user.getCurrentProp();
e -= 1;
p.user.setCurrentProp(e);
} else t.gameOver();
}).start();
}, o = this, n = 0; n < this.barriers.length; n++) e(n);
this.isBarrierPos();
this.setRecordBalls();
this.scheduleOnce(function() {
t.addBarriers();
}, .2);
l.GameConstant.isShoot = !1;
};
e.prototype.isVideoAddBarriers = function() {
for (var t = this, e = function(e) {
var n = o.barriers[e];
cc.tween(n.node).by(.1, {
position: cc.v2(0, 100)
}).call(function() {
if (n.node.position.y > 200) {
p.user.IsShake && FSDK.shake(50);
n.node.runAction(cc.shake(1.5, 5, 5));
}
if (n.node.position.y >= 390) if ("buffAddBall" == n.node.name || "buffBigBall" == n.node.name) {
t.removeBarrier(n);
var e = p.user.getCurrentProp();
e -= 1;
p.user.setCurrentProp(e);
} else t.gameOver();
}).start();
}, o = this, n = 0; n < this.barriers.length; n++) e(n);
this.isBarrierPos();
this.setRecordBalls();
this.scheduleOnce(function() {
t.addBarriers();
}, .2);
l.GameConstant.isShoot = !1;
};
e.prototype.isBarrierPos = function() {
for (var t = 0; t < this.barriers.length; t++) if (this.barriers[t].node.position.x < -260 && this.barriers[t].node.position.x > 260 || this.barriers[t].node.position.y < -300) {
"bx" == this.barriers[t].node.name && p.user.setIsRedAndCost(!1);
this.removeBarrier(this.barriers[t]);
}
};
e.prototype.gameOver = function() {
if (!this.isGameOver) {
this.isGameOver = !0;
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.SETTLEMENT);
this.gameStatus = !1;
var t = this.score.toString();
FLog.normal("游戏结算");
d.events.emit(l.GameEvents.SHOW_POPUP, u.PopUpName.GAMEOVER, null, t);
}
};
e.prototype.isRecycleFinished = function() {
return this.recycleBallsCount == this.balls.length;
};
e.prototype.shake = function(t) {
if (!(t.getNumberOfRunningActions() > 0)) {
p.user.IsShake && FSDK.shake(30);
var e = cc.shake(.1, 5, 5);
t.runAction(e);
}
};
e.prototype.addScore = function(t) {
t *= p.user.getLumpData().expSate;
var e = p.user.getExp();
e += t;
p.user.setExp(e);
var o = p.user.getExpDay();
o += t;
p.user.setExpDay(o);
this.updateLevel();
};
e.prototype.setBarrierScore = function() {
var t = Math.floor(Math.pow(p.user.getCurrentLine(), p.user.getLumpData().levelFormula[0][0]) * p.user.getLumpData().levelFormula[0][1] + p.user.getLumpData().levelFormula[0][2]), e = Math.floor(Math.pow(p.user.getCurrentLine(), p.user.getLumpData().levelFormula[1][0]) * p.user.getLumpData().levelFormula[1][1] + p.user.getLumpData().levelFormula[1][2]);
return f.utils.randomInt(t, e);
};
e.prototype.removeBarrier = function(t, e) {
void 0 === e && (e = !1);
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.ELIMINATE);
var o = this.barriers.indexOf(t);
if ("buffAddBall" != t.node.name && "buffBigBall" != t.node.name && "bx" != t.node.name) if (t.node.getChildByName("IrisAnim").active) {
t.node.getChildByName("IrisAnim").active = !1;
if (!e) {
console.log("222222222222222");
this.piaoBigCoin();
FSDK.setCredit("credit", 50, "Brick");
FSDK.showToast("Congratulations on receiving 50 gold coins");
}
p.user.setIsRain(!1);
p.user.setRainProbability(p.user.getLumpData().rainProbability);
} else e || this.getCoin(t.node.position);
if (-1 != o) {
GPool.put(t.node);
this.barriers.splice(o, 1);
p.user.setDeleteBarriersNum();
this.setRecordBarriers();
}
};
e.prototype.getCoin = function(t) {
var e;
e = FSDK.getCreditDif();
var o = f.utils.randomInt(p.user.getLumpData().LevelCions[e]);
if (0 !== o) if (p.user.getCollectCoins() < p.user.getLumpData().CollectCoins[0]) {
this.animCion(o, 2, !0, t);
FSDK.setCredit("credit", o, "Brick");
var n = p.user.getCollectCoins();
n += o;
p.user.setCollectCoins(n);
} else if (p.user.getCollectCoins2() < p.user.getLumpData().CollectCoins[1]) {
this.animCion(o, 2, !0, t);
FSDK.setCredit("credit", o, "Brick");
n = p.user.getCollectCoins2();
n += o;
p.user.setCollectCoins2(n);
}
};
e.prototype.getRandomSpace = function() {
return 100 + 150 * Math.random();
};
e.prototype.randomNum = function(t, e) {
var o = e - t, n = Math.random();
return t + Math.floor(n * o);
};
e.prototype.guideShow = function() {
this.guide.active = !0;
this.guide.getChildByName("handMove").getComponent(cc.Animation).play("handMove");
};
e.prototype.guideHide = function() {
this.guide.active = !1;
this.guide.getChildByName("handMove").getComponent(cc.Animation).stop("handMove");
};
e.prototype.restartInit = function() {
this.score = 0;
this.recycleBallsCount = 10;
this.barrierScoreRate = 0;
this.guide.zIndex = 10;
this.guide.active = !1;
p.user.setCurrentProp(0);
p.user.setIsRedAndCost(!1);
p.user.setCurrentLine(0);
p.user.setIsRain(!1);
p.user.setRainProbability(p.user.getLumpData().rainProbability);
p.user.save();
this.balls = [];
this.ballParent.removeAllChildren();
this.barriers = [];
this.barrierParent.removeAllChildren();
this.setBallCount(this.balls.length);
this.startBall();
for (var t = 0; t < 3; t++) this.addBarriers(t);
this.guideShow();
this.gameStatus = !0;
this.isGameOver = !1;
};
e.prototype.resurgence = function() {
for (var t = 0; t < this.barriers.length; t++) {
var e = this.barriers[0];
if (e.node.position.y >= 0) {
if ("buffAddBall" == e.node.name || "buffBigBall" == e.node.name) {
var o = p.user.getCurrentProp();
o -= 1;
p.user.setCurrentProp(o);
} else if ("bx" == e.node.name) p.user.setIsRedAndCost(!1); else if (e.node.getChildByName("IrisAnim").active) {
p.user.setIsRain(!1);
p.user.setRainProbability(p.user.getLumpData().rainProbability);
}
this.removeBarrier(e, !0);
}
}
p.user.save();
this.guide.zIndex = 10;
this.guide.active = !1;
this.guideShow();
this.gameStatus = !0;
this.isGameOver = !1;
};
e.prototype.isAllBallBig = function() {
for (var t = 0, e = !0, o = 0; o < this.balls.length; o++) {
if (2 == this.balls[o].getHurt()) {
t++;
this.setRecordBalls();
}
}
for (var n = 0; n < this.barriers.length; n++) "buffBigBall" == this.barriers[n].node.name && (e = !1);
return !(!e && t == this.balls.length - 1 || t === this.balls.length);
};
e.prototype.setRecordBarriers = function() {
for (var t = [], e = 0; e < this.barriers.length; e++) {
var o = this.barriers[e], n = {
name: o.node.name,
pos: o.node.position,
scale: o.node.scale,
angle: o.node.angle,
score: o.getScore(),
isRain: !1
};
-1 != o.node.name.indexOf("polygon") && (n.isRain = o.node.getChildByName("IrisAnim").active);
t.push(n);
}
p.user.setRecordBarrier(t);
p.user.save();
};
e.prototype.setRecordBalls = function() {
for (var t = [], e = 0; e < this.balls.length; e++) {
var o = this.balls[e], n = {
hurt: o.getHurt(),
scale: o.node.scale
};
t.push(n);
}
p.user.setRecordBall(t);
p.user.save();
};
e.prototype.getInitBarrierRandom = function() {
return f.utils.randomInt(p.user.getLumpData().initBarrierlArr);
};
e.prototype.backBarrierPosX = function(t) {
for (var e = p.user.getLumpData().barrierlArrPosX.concat(), o = [], n = 0; n < t; n++) {
var i = f.utils.randomInt(0, e.length - 1);
o.push(e[i]);
e.splice(i, 1);
}
return o;
};
e.prototype.animCion = function(t, e, o, n) {
void 0 === o && (o = !0);
void 0 === n && (n = cc.v2());
return r(this, void 0, void 0, function() {
var i, r, s, c;
return a(this, function(a) {
i = this.mCionsNode.children[e];
0 == e && (r = "gp");
1 == e && (r = "pp");
2 == e && (r = "credit");
if (!r) return [ 2 ];
s = function() {
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.CION);
};
if (2 == e && o) for (c = 0; c < t; c++) g.actions.addCionMove(this.mAnimCions, r, cc.v2(), i.position.add(i.getChildByName(r).position), s, t - c == 1); else for (c = 0; c < 10; c++) g.actions.addCionMove(this.mAnimCions, r, n, i.position.add(i.getChildByName(r).position), s, 10 - c == 1);
return [ 2 ];
});
});
};
e.prototype.hurtState = function() {
var t = 1;
t != p.user.getLumpData().expDayCount && (t = p.user.getLumpData().hurt);
return t;
};
e.prototype.updateLevel = function() {
var t = p.user.getLevel(), e = p.user.getLumpData().exp[t - 1];
this._upgradeExp = e.exp;
var o = p.user.getExp();
if (o >= this._upgradeExp) {
t++;
p.user.setLevel(t);
"new" == FSDK.getUserType() && FSDK.umengEvent("GAME_LV_NEW", "" + t);
FSDK.umengEvent("GAME_LV_ALL", "" + t);
o -= this._upgradeExp;
p.user.setExp(o);
p.user.save();
}
this.levelBar();
this.levelLabel.string = "" + p.user.getLevel();
this.nextLevelLabel.string = "" + (p.user.getLevel() + 1);
};
e.prototype.levelBar = function() {
this.numTw && this.numTw.stop();
this.numTw = cc.tween(this).to(.2, {
levellab: Number(p.user.getExp() / this._upgradeExp)
}).start();
};
Object.defineProperty(e.prototype, "levellab", {
get: function() {
return Number(this.levelProgressBar.progress);
},
set: function(t) {
this.levelProgressBar.progress = t;
this.levelProgressBar.progress >= 1 && (this.levelProgressBar.progress = 0);
},
enumerable: !0,
configurable: !0
});
e.prototype.rainAnim = function(t) {
return r(this, void 0, void 0, function() {
var e;
return a(this, function(o) {
switch (o.label) {
case 0:
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.DINGDONG);
return [ 4, GPool.get("synthetic") ];

case 1:
(e = o.sent()).parent = this.mAnimCions;
e.position = t.position;
e.scale = t.scale;
e.getComponent(cc.Animation).play();
t.getChildByName("rainbow").active = !0;
t.getChildByName("IrisAnim").active = !0;
this.setRecordBarriers();
this.scheduleOnce(function() {
GPool.put(e);
}, .75);
return [ 2 ];
}
});
});
};
e.prototype.piaoBigCoin = function(t, e) {
return r(this, void 0, void 0, function() {
var o, n, i;
return a(this, function(r) {
switch (r.label) {
case 0:
o = 100;
d.events.emit(l.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.BIGWINGOLD);
t && (o = t);
p.user.IsShake && FSDK.shake(100);
n = 0;
r.label = 1;

case 1:
return n < o ? [ 4, GPool.get("raindowCion") ] : [ 3, 4 ];

case 2:
(i = r.sent()).parent = this.mAnimCions;
i.scale = .5;
e ? i.position = e : i.setPosition(0, 0);
i.rotation = 360 * Math.random();
i.getComponent(_.default).coinBigJump();
r.label = 3;

case 3:
n++;
return [ 3, 1 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.isAddRaindow = function(t) {
if (p.user.getRainAwardNum() <= p.user.getLumpData().rainAwardMax && !p.user.getIsRain()) {
var e = p.user.getCurrentLine(), o = !1, n = [];
if (3 == e) {
for (var i = 0; i < this.barriers.length; i++) -1 != this.barriers[i].node.name.indexOf("polygon") && this.barriers[i].node.position.y == t && n.push(this.barriers[i].score);
for (var r = Math.max.apply(this, n), a = 0; a < this.barriers.length; a++) if (-1 != this.barriers[a].node.name.indexOf("polygon") && this.barriers[a].node.position.y == t && this.barriers[a].score == r) {
this.rainAnim(this.barriers[a].node);
p.user.setIsRain(!0);
p.user.setRainProbability(p.user.getLumpData().rainProbability);
break;
}
} else if (e > 2) {
var s = p.user.getRainProbability();
if (Math.random() <= s) o = !0; else {
s += .1;
p.user.setRainProbability(s);
}
if (o) {
for (i = 0; i < this.barriers.length; i++) -1 != this.barriers[i].node.name.indexOf("polygon") && n.push(this.barriers[i].score);
for (r = Math.max.apply(this, n), a = 0; a < this.barriers.length; a++) if (-1 != this.barriers[a].node.name.indexOf("polygon") && this.barriers[a].score == r) {
this.rainAnim(this.barriers[a].node);
p.user.setIsRain(!0);
p.user.setRainProbability(p.user.getLumpData().rainProbability);
break;
}
}
}
}
};
i([ y(cc.Prefab) ], e.prototype, "prefabBarriers", void 0);
i([ y(cc.Prefab) ], e.prototype, "prefabFunBarriers", void 0);
i([ y(cc.Prefab) ], e.prototype, "prefabBall", void 0);
i([ y(s.default) ], e.prototype, "balls", void 0);
i([ y(c.default) ], e.prototype, "barriers", void 0);
i([ y(cc.Label) ], e.prototype, "ballCount", void 0);
i([ y(cc.Node) ], e.prototype, "guide", void 0);
i([ y() ], e.prototype, "gameStatus", void 0);
i([ y(cc.Node) ], e.prototype, "takeAim", void 0);
i([ y(cc.Node) ], e.prototype, "ballParent", void 0);
i([ y(cc.Node) ], e.prototype, "barrierParent", void 0);
i([ y(cc.Node) ], e.prototype, "mPaomaNode", void 0);
i([ y(cc.Node) ], e.prototype, "mAnimCions", void 0);
i([ y(cc.Node) ], e.prototype, "mCionsNode", void 0);
i([ y(cc.Node) ], e.prototype, "mStarUiNode", void 0);
i([ y(cc.Label) ], e.prototype, "levelLabel", void 0);
i([ y(cc.Label) ], e.prototype, "nextLevelLabel", void 0);
i([ y(cc.ProgressBar) ], e.prototype, "levelProgressBar", void 0);
return e = i([ v ], e);
}(cc.Component);
o.default = S;
cc._RF.pop();
}, {
"../common/Actions": "Actions",
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User",
"../common/Utils": "Utils",
"./Ball": "Ball",
"./Barrier": "Barrier",
"./Cion": "Cion"
} ],
GameOver: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3d886/vbpNA5K99retBrpQy", "GameOver");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/Actions"), a = t("../common/User"), s = t("../common/Events"), c = t("../common/EventConstants"), l = t("../common/AudioConstands"), d = cc._decorator, u = d.ccclass, p = d.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.resurgenceNode = null;
e.restartNode = null;
e.isDoudle = !1;
return e;
}
e.prototype.onEnable = function() {
this.isDoudle = !1;
c.GameConstant.resurgenceVideo || (c.GameConstant.resurgenceVideo = !0);
r.actions.breatheEff(this.resurgenceNode);
if (a.user.getCurrnetReviveNum() <= 0) {
this.resurgenceNode.active = !1;
r.actions.breatheEff(this.restartNode);
}
};
e.prototype.resurgenceHandle = function() {
var t = this;
if (!this.isDoudle) {
this.isDoudle = !0;
s.events.emit(c.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.BUTTON);
if (cc.sys.isNative && !a.user.getLumpData().isDebug) FSDK.openVideo("revive", function() {
a.user.setCurrnetReviveNum();
FSDK.openInters(function() {
c.GameConstant.game.resurgence();
s.events.emit(c.GameEvents.HIDE_POPUP);
}, t);
}, this); else {
a.user.setCurrnetReviveNum();
c.GameConstant.game.resurgence();
s.events.emit(c.GameEvents.HIDE_POPUP);
}
}
};
e.prototype.restartHandle = function() {
if (!this.isDoudle) {
this.isDoudle = !0;
s.events.emit(c.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.BUTTON);
c.GameConstant.game.restartInit();
s.events.emit(c.GameEvents.HIDE_POPUP);
var t = a.user.getLumpData().reviveNum;
a.user.setCurrnetReviveNum(t);
}
};
i([ p(cc.Node) ], e.prototype, "resurgenceNode", void 0);
i([ p(cc.Node) ], e.prototype, "restartNode", void 0);
return e = i([ u ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../common/Actions": "Actions",
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/User": "User"
} ],
GetPacket: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0ed5cIIpPpN+rO2JwKrYonR", "GetPacket");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, r = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../common/Events"), c = t("../common/EventConstants"), l = t("../common/AudioConstands"), d = t("../common/User"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.closeThxNode = null;
e.cardNode = null;
e.countNode = null;
e.cardIcon = [];
e.tipsLabel = null;
e.btnNode = [];
e.creditTips = null;
e.noVideo = null;
e._data = null;
e._awardNum = 0;
e._name = "";
e.isClick = !1;
return e;
}
e.prototype.onEnable = function() {
var t = this;
s.events.emit(c.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.AWARD);
this.closeThxNode.active = !1;
this.isClick = !1;
this.scheduleOnce(function() {
t.closeThxNode.active = !0;
}, 2);
this.init();
};
e.prototype.init = function() {
switch (this._data[0]) {
case "gp":
this.gpFun();
this.btnNode[0].active = !0;
this.btnNode[1].active = !1;
this.creditTips.active = !1;
break;

case "pp":
this.ppFun();
this.btnNode[0].active = !0;
this.btnNode[1].active = !1;
this.creditTips.active = !1;
break;

case "credit":
this.creditFun();
this.btnNode[0].active = !1;
this.btnNode[1].active = !0;
this.creditTips.active = !0;
}
if ("Brick" == this._data[2]) {
d.user.setIsRedAndCost(!1);
var t = d.user.getAwardNumber();
t += 1;
d.user.setAwardNumber(t);
}
if (!this._data[3]) {
this.btnNode[0].getComponent(cc.Sprite).spriteFrame = this.noVideo;
this.unscheduleAllCallbacks();
}
this._awardNum = this._data[1];
this.countNode.getComponent(cc.Label).string = "$" + this._awardNum.toFixed(2);
};
e.prototype.gpFun = function() {
this._name = "gp";
d.user.firstGold < 100 ? this.tipsLabel.string = "Collect " + (100 - d.user.firstGold).toFixed(2) + " more gift card to exchange $100" : this.tipsLabel.node.active = !1;
cc.sys.os == cc.sys.OS_IOS ? this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[1] : this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[0];
};
e.prototype.ppFun = function() {
this._name = "pp";
d.user.secondGold < 100 ? this.tipsLabel.string = "Collect " + (100 - d.user.secondGold).toFixed(2) + " more gift card to exchange $100" : this.tipsLabel.node.active = !1;
this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[2];
};
e.prototype.creditFun = function() {
this._name = "credit";
this.tipsLabel.node.active = !1;
this.countNode.active = !1;
this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[3];
};
e.prototype.getAwardHandle = function() {
var t = this;
s.events.emit(c.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.AWARD);
var e = 0;
"pp" == this._data[0] && (e = 1);
var o = function() {
if (t._data[4]) {
c.GameConstant.game.removeBarrier(t._data[4]);
c.GameConstant.game.isVideoAddBarriers();
}
c.GameConstant.isAward && (c.GameConstant.isAward = !1);
c.GameConstant.game.animCion(t._awardNum, e);
FSDK.setCredit(t._data[0], t._awardNum, t._data[2]);
s.events.emit(c.GameEvents.HIDE_POPUP);
};
this._data[3] && cc.sys.isNative && !d.user.getLumpData().isDebug ? FSDK.openVideo(this._data[2], function() {
return r(t, void 0, void 0, function() {
return a(this, function(t) {
o();
return [ 2 ];
});
});
}, this) : o();
};
e.prototype.closeHandle = function() {
var t = this;
if (!this.isClick) {
s.events.emit(c.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.AWARD);
this.isClick = !0;
if ("credit" == this._data[0]) {
FSDK.setCredit(this._data[0], this._awardNum, this._data[2]);
c.GameConstant.game.animCion(this._awardNum, 2, !1);
}
var e = function() {
t.closeThxNode.active = !1;
if (t._data[4]) {
c.GameConstant.game.removeBarrier(t._data[4]);
c.GameConstant.game.isVideoAddBarriers();
}
c.GameConstant.isAward && (c.GameConstant.isAward = !1);
s.events.emit(c.GameEvents.HIDE_POPUP);
};
cc.sys.isNative && !d.user.getLumpData().isDebug ? FSDK.openInters(function() {
e();
}, this) : e();
}
};
e.prototype.creditHandle = function() {
var t = this;
s.events.emit(c.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.AWARD);
var e = function() {
return r(t, void 0, void 0, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
this.closeThxNode.active = !1;
if (this._data[4]) {
c.GameConstant.game.removeBarrier(this._data[4]);
c.GameConstant.game.isVideoAddBarriers();
}
c.GameConstant.isAward && (c.GameConstant.isAward = !1);
return "credit" !== this._data[0] ? [ 3, 2 ] : [ 4, GPool.get("creditPS") ];

case 1:
t.sent().parent = cc.find("Canvas");
FSDK.showToast("Congratulations on receiving " + 2 * this._awardNum + " gold coins");
t.label = 2;

case 2:
FSDK.setCredit(this._data[0], 2 * this._awardNum, this._data[2]);
c.GameConstant.game.animCion(this._awardNum, 2, !1);
s.events.emit(c.GameEvents.HIDE_POPUP);
return [ 2 ];
}
});
});
};
cc.sys.isNative && !d.user.getLumpData().isDebug ? FSDK.openVideo(this._data[2], function() {
e();
}, this) : e();
};
i([ f(cc.Node) ], e.prototype, "closeThxNode", void 0);
i([ f(cc.Node) ], e.prototype, "cardNode", void 0);
i([ f(cc.Node) ], e.prototype, "countNode", void 0);
i([ f(cc.SpriteFrame) ], e.prototype, "cardIcon", void 0);
i([ f(cc.Label) ], e.prototype, "tipsLabel", void 0);
i([ f(cc.Node) ], e.prototype, "btnNode", void 0);
i([ f(cc.Node) ], e.prototype, "creditTips", void 0);
i([ f(cc.SpriteFrame) ], e.prototype, "noVideo", void 0);
return e = i([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/User": "User"
} ],
IPXWidgetComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "44478iH1kNMdotPkYev8w8S", "IPXWidgetComponent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isPortait = !0;
e.left = 0;
e.right = 0;
e.top = 0;
e.bottom = 0;
e.widget = null;
return e;
}
e.prototype.onLoad = function() {
this.widget = this.node.getComponent(cc.Widget);
this.checkWidgetStatus();
};
e.prototype.checkWidgetStatus = function() {
if (!this.widget) return console.error("节点:", this.node.name, "WidgetComponent 未绑定widget组件");
var t = cc.winSize;
this.isPortait ? Math.ceil(9 * t.height / 16) > t.width - 2 && Math.ceil(9 * t.height / 16) < t.width + 2 || this.setWidgetValue() : Math.ceil(9 * t.width / 16) > t.height - 2 && Math.ceil(9 * t.width / 16) < t.height + 2 || this.setWidgetValue();
};
e.prototype.setWidgetValue = function() {
cc.winSize.width / cc.winSize.height <= .5625 && (this.top += 65);
this.widget.isAlignBottom && (this.widget.bottom = this.bottom);
this.widget.isAlignTop && (this.widget.top = this.top);
this.widget.isAlignLeft && (this.widget.left = this.left);
this.widget.isAlignRight && (this.widget.right = this.right);
};
i([ s(cc.Boolean) ], e.prototype, "isPortait", void 0);
i([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "left", void 0);
i([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "right", void 0);
i([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "top", void 0);
i([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "bottom", void 0);
return e = i([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
Loading: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9d770FyhYFP7ZBFwGHM4YXH", "Loading");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, r = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../common/EventConstants"), c = t("../game/GameController"), l = t("../common/User"), d = t("../common/Actions"), u = t("../FSidebar"), p = t("../FHideNode"), f = t("../common/Events"), h = t("../common/AudioConstands"), g = cc._decorator, _ = g.ccclass, m = g.property, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.game = null;
e.main = null;
e.ui = null;
e.logoNode = null;
e.loadingLabel = null;
e.progressBar = null;
e.verLabel = null;
e.icon = null;
e.isBreakNode = null;
e._updateTotal = 0;
e._isReady = !1;
return e;
}
e.prototype.onLoad = function() {
FLog.normal(this.node.parent.getComponentsInChildren(cc.Label));
s.GameConstant.game = this.game.getComponent(c.default);
d.actions.breatheEff(this.logoNode);
};
e.prototype.start = function() {
try {
FSDK.initSZSDK();
} catch (t) {
console.log(t);
}
};
e.prototype.update = function() {
if (this._updateTotal < 3) {
this._updateTotal++;
3 === this._updateTotal && this.init();
}
if (this.progressBar.progress >= 1 && this._isReady) try {
this._isReady = !1;
this.node.active = !1;
this.node.getComponent(u.default).init();
this.isBreakNode.getComponent(p.default).init();
if (l.user.getIsLoading() && 1 == l.user.serverData.login_days && 1 == l.user.serverData.login_cnt) {
l.user.setIsLoading();
this.game.active = !0;
FSDK.openBanner();
FSDK.umengEvent("Game_Loading", "1");
} else this.main.active = !0;
} catch (t) {
FLog.normal(t);
}
if (!(this.progressBar.progress >= 1)) {
this.progressBar.progress += .01;
this.loadingLabel.string = Math.floor(100 * this.progressBar.progress) + "%";
}
};
e.prototype.init = function() {
return r(this, void 0, Promise, function() {
var t = this;
return a(this, function(e) {
FSDK.setLog(!1);
this.initSDK().then(function() {
t.initUser();
}).then(function() {
t.initGameStauts();
}).then(function() {
t.runGame();
});
return [ 2 ];
});
});
};
e.prototype.initSDK = function() {
var t = this;
return new Promise(function(e, o) {
var n = {
ip_release: "wss://iusball.cc:20212/",
ip_debug: "wss://test.wps168.com:20212/?pg=iusball",
pg: "com.super.iuspinball",
isDebug: !1,
test_aid: "xvxcvsdfsfsefsf",
code: "iusball",
tos_img: t.icon
};
if (!cc.sys.isNative || cc.sys.os == cc.sys.OS_ANDROID) {
n.ip_release = "wss://ausballpro.cc:20212/";
n.ip_debug = "wss://test.wps168.com:20212/?pg=ausballpro";
n.pg = "com.super.auspinball";
n.code = "ausballpro";
}
cc.sys.isNative && (t.verLabel.string = "release v" + FSDK.getVerInfo().ver);
FSDK.init(n, function(t) {
l.user.serverData = t;
l.user.serverData.isFlag = !0;
FLog.normal("数据", t);
e();
}, t);
});
};
e.prototype.initUser = function() {
var t = this;
return new Promise(function(e, o) {
l.user.load();
l.user.firstGold = l.user.serverData.credit_gp;
l.user.secondGold = l.user.serverData.credit_pp;
l.user.credit = l.user.serverData.credit;
l.user.setLumpData(l.user.serverData.ALL_CONF.gameData);
FSDK.setTask(l.user.getLevel());
l.user.setCurrentProp(0);
0 == l.user.getRainProbability() && l.user.setRainProbability(l.user.getLumpData().rainProbability);
for (var n = 0; n < l.user.getRecordBarrier().length; n++) {
if ("bx" === l.user.getRecordBarrier()[n].name) {
l.user.setIsRedAndCost(!0);
break;
}
l.user.setIsRedAndCost(!1);
}
if (l.user.serverData.isNextDay) {
l.user.setAwardNumber(0);
l.user.setIsGetGift(!1);
l.user.setCollectCoins2(0);
l.user.setExpDay(0);
l.user.setSpinCount(0);
l.user.setRainAwardNum(0);
}
FSDK.setNextDayListen(function() {
l.user.setAwardNumber(0);
l.user.setIsGetGift(!1);
l.user.setCollectCoins2(0);
l.user.setSpinCount(0);
l.user.setExpDay(0);
l.user.setRainAwardNum(0);
l.user.save(1);
}, t);
l.user.save();
l.user.save(1);
e();
});
};
e.prototype.initGameStauts = function() {
return new Promise(function(t, e) {
GPool.init({
InitEach: {
ball: 50,
buffAddBall: 2,
buffBigBall: 2,
polygon1: 10,
polygon2: 10,
polygon3: 10,
polygon4: 10,
pp: 5,
gp: 5,
raindowCion: 100,
credit: 5,
star: 1,
bx: 5,
synthetic: 2
}
});
FSDK.setBtnSound(function() {
f.events.emit(s.GameEvents.PLAY_SOUND_EFFECT, h.AudioName.BUTTON);
});
t();
});
};
e.prototype.runGame = function() {
var t = this;
return new Promise(function(e, o) {
var n = cc.director.getPhysicsManager();
n.enabled = !0;
n.enabledAccumulator = !0;
t._isReady = !0;
e();
});
};
i([ m(cc.Node) ], e.prototype, "game", void 0);
i([ m(cc.Node) ], e.prototype, "main", void 0);
i([ m(cc.Node) ], e.prototype, "ui", void 0);
i([ m(cc.Node) ], e.prototype, "logoNode", void 0);
i([ m(cc.Label) ], e.prototype, "loadingLabel", void 0);
i([ m(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
i([ m(cc.Label) ], e.prototype, "verLabel", void 0);
i([ m(cc.SpriteFrame) ], e.prototype, "icon", void 0);
i([ m(cc.Node) ], e.prototype, "isBreakNode", void 0);
return e = i([ _ ], e);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../FHideNode": "FHideNode",
"../FSidebar": "FSidebar",
"../common/Actions": "Actions",
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/User": "User",
"../game/GameController": "GameController"
} ],
Main: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ce0b2+gmo9H0IxuP87dvY6V", "Main");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/User"), a = t("../common/Actions"), s = t("../common/EventConstants"), c = t("../common/Events"), l = t("../common/AudioConstands"), d = t("../common/PopupConstants"), u = cc._decorator, p = u.ccclass, f = u.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mPlayGameBtn = null;
e.mtitle = null;
e.mGameNode = null;
e.mPaomaNode = null;
e.mGameOpenNode = null;
return e;
}
e.prototype.onLoad = function() {
cc.sys.isNative || FSDK.openBanner();
this.init();
};
e.prototype.onEnable = function() {};
e.prototype.init = function() {
a.actions.breatheEff(this.mPlayGameBtn);
a.actions.breatheEff(this.mtitle, .95, 2);
c.events.emit(s.GameEvents.PLAY_BGM, l.AudioName.MAIN_BGM);
this.openPm();
};
e.prototype.playGameHandle = function() {
c.events.emit(s.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.BUTTON);
if (r.user.getRecordBarrier().length > 0) {
var t = [ this.mGameNode, this.node ];
c.events.emit(s.GameEvents.SHOW_POPUP, d.PopUpName.READ, null, t);
} else {
this.mGameNode.active = !0;
this.node.active = !1;
s.GameConstant.game.init();
}
};
e.prototype.openPm = function() {
FSDK.showMarQuee(this.mPaomaNode);
};
i([ f(cc.Node) ], e.prototype, "mPlayGameBtn", void 0);
i([ f(cc.Node) ], e.prototype, "mtitle", void 0);
i([ f(cc.Node) ], e.prototype, "mGameNode", void 0);
i([ f(cc.Node) ], e.prototype, "mPaomaNode", void 0);
i([ f(cc.Node) ], e.prototype, "mGameOpenNode", void 0);
return e = i([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../common/Actions": "Actions",
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User"
} ],
PopupComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2c6b1SMpSpFd7eEYE8zKXIn", "PopupComponent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, r = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./Events"), c = t("./EventConstants"), l = t("./Actions"), d = cc._decorator, u = d.ccclass, p = d.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeMask = null;
e.popups = [];
e.list = [];
return e;
}
e.prototype.onLoad = function() {
s.events.on(this.name, this.uuid, c.GameEvents.SHOW_POPUP, this.show, this);
s.events.on(this.name, this.uuid, c.GameEvents.HIDE_POPUP, this.hide, this);
s.events.on(this.name, this.uuid, c.GameEvents.HIDE_ALL_POPUP, this.hideAll, this);
};
e.prototype.show = function(t, e, o, n) {
void 0 === o && (o = null);
void 0 === n && (n = !0);
return r(this, void 0, Promise, function() {
var i, r;
return a(this, function(a) {
switch (a.label) {
case 0:
return this.list.some(function(e) {
return e === t;
}) ? [ 2 ] : [ 4, this.getPopUpNode(t) ];

case 1:
i = a.sent();
(r = i._components[0]) && o && (r._data = o);
this.node.addChild(i);
l.actions.openPopup(i);
this.nodeMask.active = n;
this.list.push(t);
this.checkMaskzIndex();
e && e();
return [ 2 ];
}
});
});
};
e.prototype.hide = function(t) {
if (this.list.length) {
var e = this.list.pop();
this.node.children.forEach(function(t) {
t.name === e && l.actions.closePopup(t, function() {
t.removeFromParent();
t.destroy();
});
});
this.checkMaskzIndex();
this.nodeMask.active = !1;
t && t();
}
};
e.prototype.hideAll = function(t) {
var e = this;
if (this.list.length) {
this.list = [];
this.node.children.forEach(function(t) {
e.nodeMask.name !== t.name && l.actions.closePopup(t, function() {
t.removeFromParent();
t.destroy();
});
});
this.nodeMask.active = !1;
t && t();
}
};
e.prototype.getPopUpNode = function(t) {
return r(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.popups.find(function(e) {
return e.name === t;
}) ];

case 1:
return [ 2, e.sent() || this.createPopUpNode(t) ];
}
});
});
};
e.prototype.createPopUpNode = function(t) {
var e = this;
s.events.emit(c.GameEvents.SHOW_LOADING);
return new Promise(function(o, n) {
cc.loader.loadRes("popupPerfab/" + t, cc.Prefab, function(t, i) {
if (t) {
s.events.emit(c.GameEvents.HIDE_LOADING);
n(null);
}
var r = cc.instantiate(i);
e.popups.push(r);
s.events.emit(c.GameEvents.HIDE_LOADING);
o(r);
});
});
};
e.prototype.checkMaskzIndex = function() {
var t = this.node.children;
this.list.forEach(function(e, o) {
t.find(function(t) {
return t.name === e;
}).zIndex = 10 * (o + 1);
});
t.find(function(t) {
return "sprite_mask" === t.name;
}).zIndex = 9 * this.list.length;
};
i([ p(cc.Node) ], e.prototype, "nodeMask", void 0);
return e = i([ u ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"./Actions": "Actions",
"./EventConstants": "EventConstants",
"./Events": "Events"
} ],
PopupConstants: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e5d8SBz/tOkp+SbhkfgYm4", "PopupConstants");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.SETTING = "node_setting";
t.POWER = "node_power";
t.SUPERPRIZE = "node_rewardPopup";
t.MISSILE_DEL = "node_missile_del";
t.GAMEOVER = "node_gameOver";
t.WXLOGIN = "node_redLogin";
t.TURNTABLE = "node_turntable";
t.READ = "node_read";
})(o.PopUpName || (o.PopUpName = {}));
cc._RF.pop();
}, {} ],
Read: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e23995PNXxPgb2pBzFZ6ZuP", "Read");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/Events"), a = t("../common/EventConstants"), s = t("../common/AudioConstands"), c = cc._decorator, l = c.ccclass, d = (c.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._data = null;
return e;
}
e.prototype.noHandle = function() {
r.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, s.AudioName.BUTTON);
this._data[0].active = !0;
this._data[1].active = !1;
a.GameConstant.game.restartInit();
r.events.emit(a.GameEvents.HIDE_ALL_POPUP);
};
e.prototype.yesHandle = function() {
r.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, s.AudioName.BUTTON);
if (a.GameConstant.game.barriers.length > 0) {
this._data[0].active = !0;
this._data[1].active = !1;
r.events.emit(a.GameEvents.HIDE_ALL_POPUP);
} else {
this._data[0].active = !0;
this._data[1].active = !1;
a.GameConstant.game.init();
r.events.emit(a.GameEvents.HIDE_ALL_POPUP);
}
};
e.prototype.closeHandle = function() {
r.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, s.AudioName.BUTTON);
r.events.emit(a.GameEvents.HIDE_ALL_POPUP);
};
return e = i([ l ], e);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events"
} ],
Shake: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "10459WBjgFGz4Vp4nzFnyeS", "Shake");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = cc._decorator, r = (i.ccclass, i.property, function(t) {
n(e, t);
function e(e, o, n) {
var i = t.call(this) || this;
cc.ActionInterval.prototype.constructor.call(i);
i.duration = e;
i.initWithDuration(e, o, n);
return i;
}
e.prototype.getRandomStrength = function(t, e) {
return Math.random() * (e - t + 1) + t;
};
e.prototype.update = function(t) {
var e = this.getRandomStrength(-this.nodeShakeStrengthX, this.nodeShakeStrengthX) * t, o = this.getRandomStrength(-this.nodeShakeStrengthY, this.nodeShakeStrengthY) * t;
this.target.setPosition(this.nodeInitialPos.add(cc.v2(e, o)));
};
e.prototype.initWithDuration = function(t, e, o) {
if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
this.nodeShakeStrengthX = e;
this.nodeShakeStrengthY = "undefined" == o ? e : o;
return !0;
}
return !1;
};
e.prototype.startWithTarget = function(t) {
cc.ActionInterval.prototype.startWithTarget.call(this, t);
this.nodeInitialPos = t.getPosition();
};
e.prototype.stop = function() {
this.target.setPosition(this.nodeInitialPos);
};
return e;
}(cc.ActionInterval));
cc.shake = function(t, e, o) {
return new r(t, e, o);
};
cc._RF.pop();
}, {} ],
SimpleAd: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4ed77QIA0xEN44lp0xr0q9+", "SimpleAd");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./SimpleUtils"), a = t("./SimpleSDK"), s = t("./SimpleSDKEvent"), c = cc._decorator, l = c.ccclass, d = (c.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.hasInit = !1;
e.lastTryLoadAllTs = -1;
e.ATJSSDK = null;
e.ATRewardedVideoJSSDK = null;
e.ATInterstitialJSSDK = null;
e.ATBannerJSSDK = null;
e.rewardId = null;
e.rewardLoadingStatus = o.STATUS_INIT;
e.rewardListener = null;
e.atRewardedVideoListener = {
adEntry: "",
setEntry: function(t) {
this.adEntry = t;
},
onRewardedVideoAdLoaded: function(t) {
r.default.log("onRewardedVideoAdLoaded(" + t + ")");
a.default.ad_instance().rewardLoad();
a.default.analytics_instance().sendLog(s.default.AD_LOAD, s.default.buildAdLoad(s.default.AD_TYPE_REWARD, t));
},
onRewardedVideoAdFailed: function(t, e) {
r.default.log("onRewardedVideoAdFailed(" + t + ", " + e + ")");
a.default.ad_instance().rewardLoadFail();
a.default.analytics_instance().sendLog(s.default.AD_LOAD_FAIL, s.default.buildAdLoadFail(s.default.AD_TYPE_REWARD, t, e));
},
onRewardedVideoAdPlayStart: function(t, e) {
var o = JSON.parse(e);
r.default.log("onRewardedVideoAdPlayStart(" + t + ", " + e + ")");
a.default.analytics_instance().sendLog(s.default.AD_SHOW, s.default.buildMapWithCallback(s.default.AD_TYPE_REWARD, t, o));
var n = a.default.ad_instance();
null != n.rewardListener && n.rewardListener.onRewardedVideoAdPlayStart(this.adEntry, o);
},
onRewardedVideoAdPlayEnd: function(t, e) {
r.default.log("onRewardedVideoAdPlayEnd(" + t + ", " + e + ")");
},
onRewardedVideoAdPlayFailed: function(t, e, o) {
var n = JSON.parse(o);
r.default.log("onRewardedVideoAdPlayFailed(" + t + ", " + e + ", " + o + ")");
var i = a.default.ad_instance();
null != i.rewardListener && i.rewardListener.onRewardedVideoAdPlayFailed(this.adEntry, e, n);
},
onRewardedVideoAdClosed: function(t, e) {
var o = JSON.parse(e);
r.default.log("onRewardedVideoAdClosed(" + t + ", " + e + ")");
var n = a.default.ad_instance();
n.rewardClose();
null != n.rewardListener && n.rewardListener.onRewardedVideoAdClosed(this.adEntry, o);
},
onRewardedVideoAdPlayClicked: function(t, e) {
var o = JSON.parse(e);
r.default.log("onRewardedVideoAdPlayClicked(" + t + ", " + e + ")");
a.default.analytics_instance().sendLog(s.default.AD_CLICK, s.default.buildMapWithCallback(s.default.AD_TYPE_REWARD, t, o));
var n = a.default.ad_instance();
null != n.rewardListener && n.rewardListener.onRewardedVideoAdPlayClicked(this.adEntry, o);
},
onReward: function(t, e) {
r.default.log("onReward(" + t + ", " + e + ")");
}
};
e.interId = null;
e.interLoadingStatus = o.STATUS_INIT;
e.interListener = null;
e.atInterstitialListener = {
adEntry: "",
setEntry: function(t) {
this.adEntry = t;
},
onInterstitialAdLoaded: function(t) {
a.default.ad_instance().interLoad();
a.default.analytics_instance().sendLog(s.default.AD_LOAD, s.default.buildAdLoad(s.default.AD_TYPE_INTERSTITIAL, t));
r.default.log("onInterstitialAdLoaded(" + t + ")");
},
onInterstitialAdLoadFail: function(t, e) {
a.default.ad_instance().interLoadFail();
a.default.analytics_instance().sendLog(s.default.AD_LOAD_FAIL, s.default.buildAdLoadFail(s.default.AD_TYPE_INTERSTITIAL, t, e));
r.default.log("onInterstitialAdLoadFail(" + t + ", " + e + ")");
},
onInterstitialAdShow: function(t, e) {
var o = JSON.parse(e);
a.default.analytics_instance().sendLog(s.default.AD_SHOW, s.default.buildMapWithCallback(s.default.AD_TYPE_INTERSTITIAL, t, o));
r.default.log("onInterstitialAdShow(" + t + ", " + e + ")");
var n = a.default.ad_instance();
null != n.interListener && n.interListener.onInterstitialAdShow(this.adEntry, o);
},
onInterstitialAdStartPlayingVideo: function(t, e) {
r.default.log("onInterstitialAdStartPlayingVideo(" + t + ", " + e + ")");
},
onInterstitialAdEndPlayingVideo: function(t, e) {
r.default.log("onInterstitialAdEndPlayingVideo(" + t + ", " + e + ")");
},
onInterstitialAdFailedToPlayVideo: function(t, e) {
r.default.log("onInterstitialAdFailedToPlayVideo(" + t + ", " + e + ")");
},
onInterstitialAdFailedToShow: function(t) {
r.default.log("onInterstitialAdFailedToShow(" + t + ")");
},
onInterstitialAdClose: function(t, e) {
var o = JSON.parse(e);
r.default.log("onInterstitialAdClose(" + t + ", " + e + ")");
var n = a.default.ad_instance();
n.interClose();
null != n.interListener && n.interListener.onInterstitialAdClose(this.adEntry, o);
},
onInterstitialAdClick: function(t, e) {
var o = JSON.parse(e);
a.default.analytics_instance().sendLog(s.default.AD_CLICK, s.default.buildMapWithCallback(s.default.AD_TYPE_INTERSTITIAL, t, JSON.parse(e)));
r.default.log("onInterstitialAdClick(" + t + ", " + e + ")");
var n = a.default.ad_instance();
null != n.interListener && n.interListener.onInterstitialAdClick(this.adEntry, o);
}
};
e.bannerId = null;
e.bannerLoadingStatus = o.STATUS_INIT;
e.bannerWidth = -1;
e.bannerHeight = -1;
e.bannerHasShow = !1;
e.bannerListener = null;
e.atBannerListener = {
onBannerAdLoaded: function(t) {
a.default.ad_instance().bannerLoad();
a.default.analytics_instance().sendLog(s.default.AD_LOAD, s.default.buildAdLoad(s.default.AD_TYPE_BANNER, t));
r.default.log("onBannerAdLoaded(" + t + ")");
},
onBannerAdLoadFail: function(t, e) {
a.default.ad_instance().bannerLoadFail();
a.default.analytics_instance().sendLog(s.default.AD_LOAD_FAIL, s.default.buildAdLoadFail(s.default.AD_TYPE_BANNER, t, e));
r.default.log("onBannerAdLoadFail(" + t + ", " + e + ")");
},
onBannerAdShow: function(t, e) {
var o = JSON.parse(e);
a.default.analytics_instance().sendLog(s.default.AD_SHOW, s.default.buildMapWithCallback(s.default.AD_TYPE_BANNER, t, o));
r.default.log("onBannerAdShow(" + t + ", " + e + ")");
var n = a.default.ad_instance();
null != n.bannerListener && n.bannerListener.onBannerAdShow(t, o);
},
onBannerAdClick: function(t, e) {
var o = JSON.parse(e);
a.default.analytics_instance().sendLog(s.default.AD_CLICK, s.default.buildMapWithCallback(s.default.AD_TYPE_BANNER, t, o));
r.default.log("onBannerAdClick(" + t + ", " + e + ")");
var n = a.default.ad_instance();
null != n.bannerListener && n.bannerListener.onBannerAdClick(t, o);
},
onBannerAdAutoRefresh: function(t, e) {
r.default.log("onBannerAdAutoRefresh(" + t + ", " + e + ")");
},
onBannerAdAutoRefreshFail: function(t, e) {
r.default.log("onBannerAdAutoRefreshFail(" + t + ", " + e + ")");
},
onBannerAdCloseButtonTapped: function(t, e) {
r.default.log("onBannerAdCloseButtonTapped(" + t + ", " + e + ")");
}
};
return e;
}
o = e;
e.prototype.init = function(t) {
this.ATJSSDK = window.ATJSSDK;
this.ATRewardedVideoJSSDK = window.ATRewardedVideoJSSDK;
this.ATInterstitialJSSDK = window.ATInterstitialJSSDK;
this.ATBannerJSSDK = window.ATBannerJSSDK;
if (r.default.isEditor()) cc.log("skip init at sdk"); else {
t.debug && this.ATJSSDK.setLogDebug(!0);
this.rewardId = t.rewardPlacementId;
this.interId = t.interstitialPlacementId;
this.bannerId = t.bannePlacementId;
this.bannerWidth = cc.view.getFrameSize().width - 10;
t.bannerWidth > 0 && (this.bannerWidth = t.bannerWidth);
this.bannerHeight = this.bannerWidth / 6.4;
t.bannerHeight > 0 && (this.bannerHeight = t.bannerHeight);
this.ATRewardedVideoJSSDK.setAdListener(this.atRewardedVideoListener);
this.ATInterstitialJSSDK.setAdListener(this.atInterstitialListener);
this.ATBannerJSSDK.setAdListener(this.atBannerListener);
r.default.log("start anythink sdk with " + t.toponAppid);
this.ATJSSDK.setGDPRLevel(this.ATJSSDK.PERSONALIZED);
this.ATJSSDK.initSDK(t.toponAppid, t.toponKey);
this.tryLoadAll();
this.hasInit = !0;
}
};
e.prototype.update = function(t) {
if (this.hasInit) {
var e = r.default.getTimestamp();
this.lastTryLoadAllTs + o.TRT_LOAD_ALL_INTERVAL < e && this.tryLoadAll();
}
};
e.prototype.tryLoadAll = function() {
r.default.log("try to load all ad");
var t = r.default.getTimestamp();
this.lastTryLoadAllTs = t;
this.hasReward() ? r.default.log("skip load reward because reward has ad") : this.tryLoadReward();
this.hasInter() ? r.default.log("skip load inter because inter has ad") : this.tryLoadInter();
this.hasBanner() ? r.default.log("skip load inter because banner has ad") : this.tryLoadBanner();
};
e.prototype.tryLoadReward = function() {
if (a.default.instance().isNetworkOk()) if (null != this.rewardId && this.rewardId.length > 0) if (this.rewardLoadingStatus == o.STATUS_LOADING) r.default.log("reward is loading and skip"); else {
r.default.log("try to load reward");
this.rewardLoadingStatus = o.STATUS_LOADING;
this.loadReward();
} else r.default.log("reward id is null and skip");
};
e.prototype.loadReward = function() {
this.ATRewardedVideoJSSDK.loadRewardedVideo(this.rewardId, {});
};
e.prototype.setRewardListener = function(t) {
this.rewardListener = t;
};
e.prototype.hasReward = function() {
return null != this.rewardId && this.rewardId.length > 0 && this.ATRewardedVideoJSSDK.hasAdReady(this.rewardId);
};
e.prototype.showReward = function(t) {
this.atRewardedVideoListener.setEntry(t);
this.ATRewardedVideoJSSDK.showAd(this.rewardId);
};
e.prototype.rewardLoad = function() {
this.rewardLoadingStatus = o.STATUS_SUCCESS;
};
e.prototype.rewardLoadFail = function() {
this.rewardLoadingStatus = o.STATUS_FAILED;
};
e.prototype.rewardClose = function() {
this.loadReward();
};
e.prototype.tryLoadInter = function() {
if (a.default.instance().isNetworkOk()) if (null != this.interId && this.interId.length > 0) if (this.interLoadingStatus == o.STATUS_LOADING) r.default.log("inter is loading and skip"); else {
r.default.log("try to load inter");
this.interLoadingStatus = o.STATUS_LOADING;
this.loadInter();
} else r.default.log("inter id is null and skip");
};
e.prototype.loadInter = function() {
this.ATInterstitialJSSDK.loadInterstitial(this.interId);
};
e.prototype.setInterListener = function(t) {
this.interListener = t;
};
e.prototype.hasInter = function() {
return null != this.interId && this.interId.length > 0 && this.ATInterstitialJSSDK.hasAdReady(this.interId);
};
e.prototype.showInter = function(t) {
this.atInterstitialListener.setEntry(t);
this.ATInterstitialJSSDK.showAd(this.interId);
this.tryLoadInter();
};
e.prototype.interLoad = function() {
this.interLoadingStatus = o.STATUS_SUCCESS;
};
e.prototype.interLoadFail = function() {
this.interLoadingStatus = o.STATUS_FAILED;
};
e.prototype.interClose = function() {
this.loadInter();
};
e.prototype.tryLoadBanner = function() {
if (a.default.instance().isNetworkOk()) if (null != this.bannerId && this.bannerId.length > 0) if (this.bannerLoadingStatus == o.STATUS_LOADING) r.default.log("banner is loading and skip"); else {
r.default.log("try to load banner");
this.bannerLoadingStatus = o.STATUS_LOADING;
this.loadBanner();
} else r.default.log("banner id is null and skip");
};
e.prototype.loadBanner = function() {
this.ATBannerJSSDK.loadBanner(this.bannerId, this.ATBannerJSSDK.createLoadAdSize(this.bannerWidth, this.bannerHeight));
};
e.prototype.hasBanner = function() {
return null != this.bannerId && this.bannerId.length > 0 && this.ATBannerJSSDK.hasAdReady(this.bannerId);
};
e.prototype.setBannerListener = function(t) {
this.bannerListener = t;
};
e.prototype.showOrReShowBanner = function(t) {
if (this.bannerHasShow) this.ATBannerJSSDK.reShowAd(this.bannerId); else if (this.ATBannerJSSDK.hasAdReady(this.bannerId)) {
this.bannerHasShow = !0;
var e = "";
e = t == o.BANNER_TOP ? this.ATBannerJSSDK.kATBannerAdShowingPisitionTop : this.ATBannerJSSDK.kATBannerAdShowingPisitionBottom;
this.ATBannerJSSDK.showAdInPosistion(this.bannerId, e);
}
};
e.prototype.hideBanner = function() {
this.ATBannerJSSDK.hideAd(this.bannerId);
};
e.prototype.removeBanner = function() {
this.ATBannerJSSDK.rewoveAd(this.bannerId);
this.bannerHasShow = !1;
this.tryLoadBanner();
};
e.prototype.bannerLoad = function() {
this.bannerLoadingStatus = o.STATUS_SUCCESS;
};
e.prototype.bannerLoadFail = function() {
this.bannerLoadingStatus = o.STATUS_FAILED;
};
e.prototype.getAdStatus = function() {
return {
reward: this.rewardLoadingStatus,
inter: this.interLoadingStatus,
banner: this.bannerLoadingStatus
};
};
var o;
e.TRT_LOAD_ALL_INTERVAL = 60;
e.STATUS_INIT = 0;
e.STATUS_LOADING = 1;
e.STATUS_SUCCESS = 2;
e.STATUS_FAILED = 3;
e.BANNER_TOP = 0;
e.BANNER_BOTTOM = 1;
return e = o = i([ l ], e);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"./SimpleSDK": "SimpleSDK",
"./SimpleSDKEvent": "SimpleSDKEvent",
"./SimpleUtils": "SimpleUtils"
} ],
SimpleAnalytics: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad668zigsBJtalLPP6Rogr3", "SimpleAnalytics");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./SimpleUtils"), i = t("./SimpleSDKEvent"), r = cc._decorator, a = (r.ccclass, 
r.property, function() {
function t(t) {
this.times = 5;
var e = {
__logs__: t
};
this.bodyJson = JSON.stringify(e);
this.times = 3;
}
t.prototype.sendLog = function() {
this.times--;
var t = new XMLHttpRequest(), e = this;
t.onreadystatechange = function() {
4 == t.readyState && (t.status >= 200 && t.status < 400 ? n.default.log("send log success") : e.times > 0 && setTimeout(function() {
e.sendLog();
}, 5e3));
};
t.open("POST", s.POST_URL, !0);
t.setRequestHeader("x-log-apiversion", "0.6.0");
t.setRequestHeader("x-log-bodyrawsize", this.bodyJson.length.toString());
t.setRequestHeader("Content-Type", "application/json;charset=utf-8");
t.send(this.bodyJson);
n.default.log("ready to send log " + this.times + " " + s.POST_URL + " " + this.bodyJson);
};
return t;
}()), s = function() {
function t() {
this.staticsInfo = null;
this.logIndex = 0;
this.logs = [];
this.lastSendTs = -1;
this.totalTime = 0;
this.nextInterval = 5;
this.interval = 10;
this.maxInterval = 300;
}
t.prototype.init = function(t) {
this.staticsInfo = t;
};
t.prototype.update = function(e) {
this.totalTime += e;
if (this.totalTime > this.nextInterval) {
this.sendLog(i.default.HEARTBEAT, {
passTime: Math.floor(this.totalTime)
});
this.nextInterval += this.interval;
this.interval *= 2;
this.interval >= this.maxInterval && (this.interval = this.maxInterval);
}
if (this.logs.length > 0) {
var o = n.default.getTimestamp();
if (this.logs.length > t.BATCH_SIZE || this.lastSendTs + t.SEND_INTERVAL < o) {
this.sendAll();
this.lastSendTs = o;
}
}
};
t.prototype.sendAll = function() {
new a(this.logs).sendLog();
this.logs = [];
};
t.prototype.buildJson = function(t, e) {
var o = this.logIndex;
this.logIndex++;
return {
gameName: this.staticsInfo.gameName,
deviceId: this.staticsInfo.deviceId,
package: this.staticsInfo.pn,
platform: this.staticsInfo.platform,
idfa: this.staticsInfo.idfa,
uid: this.staticsInfo.uid,
idfv: this.staticsInfo.idfv,
androidId: this.staticsInfo.android_id,
sessionId: this.staticsInfo.sessionId,
ev: t,
logIndex: o.toString(),
clientTs: n.default.getTimestamp().toString(),
value: JSON.stringify(e)
};
};
t.prototype.sendLog = function(t, e) {
if (null != this.staticsInfo) {
var o = this.buildJson(t, e);
this.logs.push(o);
return !0;
}
return !1;
};
t.POST_URL = "https://bepicdata.ap-southeast-1.log.aliyuncs.com/logstores/sdklog/track";
t.SEND_INTERVAL = 5;
t.BATCH_SIZE = 20;
return t;
}();
o.default = s;
cc._RF.pop();
}, {
"./SimpleSDKEvent": "SimpleSDKEvent",
"./SimpleUtils": "SimpleUtils"
} ],
SimpleAndroid: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "47353arnNZK6K04ILSYXBBG", "SimpleAndroid");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./SimpleInterface"), a = cc._decorator, s = a.ccclass, c = (a.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.initWithAdjust = function(t, e) {
jsb.reflection.callStaticMethod("com/bepic/simpleafsdk/SimpleAJSDK", "initWithAdjust", "(Ljava/lang/String;Z)V", t, e);
};
e.prototype.initWithAppsflyer = function(t, e, o) {
jsb.reflection.callStaticMethod("com/bepic/simpleafsdk/SimpleAFSDK", "initWithAppsflyer", "(Ljava/lang/String;Z)V", t, o);
};
e.prototype.getNetworkStatus = function() {
return jsb.reflection.callStaticMethod("com/bepic/simplesdk/SimpleSDKBase", "getNetworkStatus", "()I");
};
return e = i([ s ], e);
}(r.SimpleInterface));
o.default = c;
cc._RF.pop();
}, {
"./SimpleInterface": "SimpleInterface"
} ],
SimpleCallback: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "171068Vll5E34So+RJoWi48", "SimpleCallback");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./SimpleSDK"), a = cc._decorator, s = a.ccclass, c = (a.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.instance = function() {
return get_simple_callback();
};
e.prototype.sdkInitSuccess = function(t) {
cc.log(r.default.instance());
var e = JSON.parse(t);
r.default.instance().initSuccess(e);
};
e.prototype.sdkInitFailed = function(t) {
var e = JSON.parse(t);
r.default.instance().initFailed(e);
};
e.prototype.getAttributionInfo = function(t) {
var e = JSON.parse(t);
r.default.instance().innerAttributionInfoCallback(e);
};
return e = i([ s ], e);
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {
"./SimpleSDK": "SimpleSDK"
} ],
SimpleEditor: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "01ca5SDvO5BE5GvVhl5Eu85", "SimpleEditor");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./SimpleInterface"), a = t("./SimpleCallback"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.initWithAdjust = function(t, e) {
this.init();
};
e.prototype.initWithAppsflyer = function(t, e, o) {
this.init();
};
e.prototype.init = function() {
var t = JSON.stringify({
package: "com.a.b",
appVersion: "15",
deviceId: "test deviceid",
idfa: "idfa_str",
android_id: "android_id_str",
idfv: "idfv_str",
band: "band_str",
model: "model_str",
deviceName: "device_str",
systemVersion: "systemversion",
network: 0
});
a.default.instance().sdkInitSuccess(t);
var e = JSON.stringify({
network: "Organic",
campaign: "",
adgroup: "",
createive: ""
});
a.default.instance().getAttributionInfo(e);
};
e.prototype.getNetworkStatus = function() {
return 0;
};
return e = i([ c ], e);
}(r.SimpleInterface));
o.default = l;
cc._RF.pop();
}, {
"./SimpleCallback": "SimpleCallback",
"./SimpleInterface": "SimpleInterface"
} ],
SimpleIOS: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8ade2PUZqVOmasUpuPIf1jR", "SimpleIOS");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./SimpleInterface"), a = cc._decorator, s = a.ccclass, c = (a.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
o = e;
e.prototype.initWithAdjust = function(t, e) {
jsb.reflection.callStaticMethod(o.bridgeName, "SDKInitWithAdjustKey:withDebug:", t, e);
};
e.prototype.initWithAppsflyer = function(t, e, n) {
jsb.reflection.callStaticMethod(o.bridgeName, "SDKInitWithAppsflyerKey:withAppleid:withDebug:", t, e, n);
};
e.prototype.getNetworkStatus = function() {
return jsb.reflection.callStaticMethod(o.bridgeName, "getNetworkStatus");
};
var o;
e.bridgeName = "SimpleBridge";
return e = o = i([ s ], e);
}(r.SimpleInterface));
o.default = c;
cc._RF.pop();
}, {
"./SimpleInterface": "SimpleInterface"
} ],
SimpleInterface: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "da468frYlFKVYBtrhp1un8i", "SimpleInterface");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
return function() {};
}();
o.SimpleInterface = n;
cc._RF.pop();
}, {} ],
SimpleSDKEvent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c0651BbgEZB0JuOR+5Y+1zx", "SimpleSDKEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.buildAdLoad = function(t, e) {
return {
adtype: t,
unitId: e
};
};
t.buildAdLoadFail = function(t, e, o) {
return {
adtype: t,
unitId: e,
errorInfo: o
};
};
t.buildMapWithCallback = function(e, o, n) {
return {
network_firm_id: t.getOrDefault(n, "network_firm_id", ""),
adsource_id: t.getOrDefault(n, "adsource_id", ""),
adsource_index: t.getOrDefault(n, "adsource_index", ""),
adsource_price: t.getOrDefault(n, "adsource_price", ""),
adsource_isheaderbidding: t.getOrDefault(n, "adsource_isheaderbidding", "false"),
publisher_revenue: t.getOrDefault(n, "publisher_revenue", "publisher_revenue"),
network_type: t.getOrDefault(n, "network_type", ""),
network_placement_id: t.getOrDefault(n, "network_placement_id", ""),
adtype: e,
unitId: o
};
};
t.getOrDefault = function(t, e, o) {
if (void 0 != t && null != t && e in t) {
var n = t[e];
return void 0 != n && null != n ? n.toString() : o;
}
return o;
};
t.GAME_START = "game_start";
t.HEARTBEAT = "heartbeat";
t.AD_LOAD = "ad_load";
t.AD_LOAD_FAIL = "ad_load_fail";
t.AD_SHOW = "ad_show";
t.AD_SHOW_FAIL = "ad_show_fail";
t.AD_CLICK = "ad_click";
t.AD_TYPE_REWARD = "reward";
t.AD_TYPE_INTERSTITIAL = "interstitial";
t.AD_TYPE_BANNER = "banner";
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
SimpleSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3fc30LNUulHUK+UGUaUOo/M", "SimpleSDK");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./SimpleIOS"), a = t("./SimpleAndroid"), s = t("./SimpleEditor"), c = t("./SimpleCallback"), l = t("./SimpleUtils"), d = t("./SimpleAnalytics"), u = t("./SimpleSDKEvent"), p = t("./SimpleAd"), f = cc._decorator, h = f.ccclass, g = (f.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.adapter = null;
e.staticInfo = null;
e.startConfig = null;
e.simpleAnalytics = new d.default();
e.simpleAd = new p.default();
e.attributionInfo = null;
return e;
}
o = e;
e.instance = function() {
return get_simple_manager();
};
e.ad_instance = function() {
return get_simple_ad();
};
e.analytics_instance = function() {
return get_simple_analytics();
};
e.prototype.onLoad = function() {
cc.game.addPersistRootNode(this.node);
cc.sys.os === cc.sys.OS_IOS ? this.adapter = new r.default() : cc.sys.os === cc.sys.OS_ANDROID ? this.adapter = new a.default() : this.adapter = new s.default();
set_simple_manager(this);
set_simple_callback(new c.default());
l.default.log("sdk setup finish");
this.startLoadConfig();
};
e.prototype.start = function() {
l.default.log("init start node");
};
e.prototype.update = function(t) {
null != this.simpleAnalytics && this.simpleAnalytics.update(t);
null != this.simpleAd && this.simpleAd.update(t);
};
e.prototype.startLoadConfig = function() {
cc.loader.loadRes(o.CONFIG_FILE_NAME, cc.JsonAsset, function(t, e) {
null != t && l.default.log(JSON.stringify(t));
o.instance().loadConfigSuccess(e);
});
};
e.prototype.parseConfig = function(t) {
if (cc.sys.os === cc.sys.OS_IOS) {
(e = {
gameName: l.default.getDictOrDefault(t, "gameName", ""),
appsflyerkey: l.default.getDictOrDefault(t, "iosAppsflyerkey", ""),
appleid: l.default.getDictOrDefault(t, "iosAppleid", ""),
adjustAppkey: l.default.getDictOrDefault(t, "iosAdjustAppkey", ""),
toponAppid: l.default.getDictOrDefault(t, "iosTopOnAppid", ""),
toponKey: l.default.getDictOrDefault(t, "iosTopOnKey", ""),
rewardPlacementId: l.default.getDictOrDefault(t, "iosToponRewardPlacementId", ""),
interstitialPlacementId: l.default.getDictOrDefault(t, "iosToponInterstitialPlacementId", ""),
bannePlacementId: l.default.getDictOrDefault(t, "iosToponBannePlacementId", ""),
bannerWidth: l.default.getDictOrDefault(t, "bannerWidth", -1),
bannerHeight: l.default.getDictOrDefault(t, "bannerHeight", -1),
debug: l.default.getDictOrDefault(t, "debug", !1)
}).appsflyerkey.length > 0 && e.appleid.length > 0 && 0 == e.adjustAppkey.length ? cc.log("ready to start appsflyer sdk") : 0 == e.appsflyerkey.length && e.adjustAppkey.length > 0 && cc.log("ready to start adjust sdk");
return e;
}
if (cc.sys.os === cc.sys.OS_ANDROID) {
(e = {
gameName: l.default.getDictOrDefault(t, "gameName", ""),
appsflyerkey: l.default.getDictOrDefault(t, "androidAppsflyerkey", ""),
appleid: "",
adjustAppkey: l.default.getDictOrDefault(t, "androidAdjustAppkey", ""),
toponAppid: l.default.getDictOrDefault(t, "androidTopOnAppid", ""),
toponKey: l.default.getDictOrDefault(t, "androidTopOnKey", ""),
rewardPlacementId: l.default.getDictOrDefault(t, "androidToponRewardPlacementId", ""),
interstitialPlacementId: l.default.getDictOrDefault(t, "androidToponInterstitialPlacementId", ""),
bannePlacementId: l.default.getDictOrDefault(t, "androidToponBannePlacementId", ""),
bannerWidth: l.default.getDictOrDefault(t, "bannerWidth", -1),
bannerHeight: l.default.getDictOrDefault(t, "bannerHeight", -1),
debug: l.default.getDictOrDefault(t, "debug", !1)
}).appsflyerkey.length > 0 && 0 == e.adjustAppkey.length ? cc.log("ready to start appsflyer sdk") : 0 == e.appsflyerkey.length && e.adjustAppkey.length > 0 && cc.log("ready to start adjust sdk");
return e;
}
var e;
return e = {
gameName: l.default.getDictOrDefault(t, "gameName", "demo"),
appsflyerkey: "",
appleid: "",
adjustAppkey: "",
toponAppid: "",
toponKey: "",
rewardPlacementId: "",
interstitialPlacementId: "",
bannePlacementId: "",
bannerWidth: -1,
bannerHeight: -1,
debug: !0
};
};
e.prototype.loadConfigSuccess = function(t) {
try {
if (null != t && "json" in t) {
var e = this.parseConfig(t.json);
this.init(e);
} else l.default.log("fail to load json from resources/SimpleSDKConfig.json");
} catch (t) {
l.default.log("config load fail" + t.toString());
}
};
e.prototype.init = function(t) {
this.startConfig = t;
l.default.setDebug(this.startConfig.debug);
t.appsflyerkey.length > 0 ? this.adapter.initWithAppsflyer(t.appsflyerkey, t.appleid, t.debug) : this.adapter.initWithAdjust(t.adjustAppkey, t.debug);
};
e.prototype.initSuccess = function(t) {
var e = "editor";
cc.sys.os === cc.sys.OS_IOS ? e = "ios" : cc.sys.os === cc.sys.OS_ANDROID && (e = "android");
var o = t.deviceId + "_" + l.default.getTimestamp() + "_" + l.default.getRandomInt(100), n = "none";
switch (t.network) {
case 0:
n = "none";
break;

case 1:
n = "wifi";
break;

case 2:
n = "4g";
break;

default:
n = "none";
}
this.staticInfo = {
gameName: this.startConfig.gameName,
pn: t.package,
deviceId: t.deviceId,
platform: e,
idfa: t.idfa,
uid: "",
sessionId: o,
idfv: t.idfv,
android_id: t.android_id,
band: t.band,
model: t.model,
deviceName: t.deviceName,
systemVersion: t.systemVersion,
network: n
};
l.default.log("init succ: " + JSON.stringify(this.staticInfo));
this.simpleAnalytics.init(this.staticInfo);
this.simpleAnalytics.sendLog(u.default.GAME_START, {
model: this.staticInfo.model,
band: this.staticInfo.band
});
this.simpleAd.init(this.startConfig);
};
e.prototype.initFailed = function(t) {
l.default.log("call fail");
};
e.prototype.getStaticInfo = function() {
return this.staticInfo;
};
e.prototype.innerAttributionInfoCallback = function(t) {
this.attributionInfo = t;
null != this.attributionInfoCallback && this.attributionInfoCallback(this.attributionInfo);
};
e.prototype.setAttributionInfoCallback = function(t) {
this.attributionInfoCallback = t;
null != this.attributionInfo && this.attributionInfoCallback(this.attributionInfo);
};
e.prototype.getAttributionInfo = function() {
return this.attributionInfo;
};
e.prototype.getNetworkStatus = function() {
return this.adapter.getNetworkStatus();
};
e.prototype.isNetworkOk = function() {
var t = this.getNetworkStatus();
return void 0 != t && null != t && t > 0;
};
var o;
e.CONFIG_FILE_NAME = "SimpleSDKConfig";
return e = o = i([ h ], e);
}(cc.Component));
o.default = g;
cc._RF.pop();
}, {
"./SimpleAd": "SimpleAd",
"./SimpleAnalytics": "SimpleAnalytics",
"./SimpleAndroid": "SimpleAndroid",
"./SimpleCallback": "SimpleCallback",
"./SimpleEditor": "SimpleEditor",
"./SimpleIOS": "SimpleIOS",
"./SimpleSDKEvent": "SimpleSDKEvent",
"./SimpleUtils": "SimpleUtils"
} ],
SimpleUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cce7d7GIXRNdYHQKq/hNR1b", "SimpleUtils");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = (r.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
o = e;
e.getTimestamp = function() {
return Math.round(new Date().getTime() / 1e3);
};
e.getRandomInt = function(t) {
return Math.floor(Math.random() * Math.floor(t));
};
e.setDebug = function(t) {
this.debug = t;
};
e.log = function(t) {
o.debug && cc.log("simple:" + t);
};
e.isEditor = function() {
return !(cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID);
};
e.getDictOrDefault = function(t, e, o) {
return e in t ? t[e] : o;
};
var o;
e.debug = !0;
return e = o = i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
StarEnd: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8d797GlOglIlaf6bP7CJBWZ", "StarEnd");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = (r.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._dragonBones = null;
return e;
}
e.prototype.init = function() {
this._dragonBones = this.getComponent(dragonBones.ArmatureDisplay);
this._dragonBones.playAnimation("play", 1);
this._dragonBones.addEventListener(dragonBones.EventObject.COMPLETE, this.antmationEventHandler, this);
};
e.prototype.antmationEventHandler = function(t) {
t.type == dragonBones.EventObject.COMPLETE && GPool.put(this.node);
};
return e = i([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
TakeAim: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ff6d5E03utFs7Ot/obBciPr", "TakeAim");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/EventConstants"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.arraw = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
};
e.prototype.onTouchMove = function(t) {
if (r.GameConstant.game.isRecycleFinished() && !r.GameConstant.isAward) {
var e = cc.v2(0, 400), o = this.node.convertToNodeSpaceAR(t.getLocation());
o.y > 320 && (o = new cc.Vec2(o.x, 320));
var n = this.node.getComponent(cc.Graphics), i = o.sub(e), a = i.mag(), s = i.normalize().mul(40), c = e.clone();
n.fillColor = cc.color(78, 72, 125, 255);
c.addSelf(s);
c.addSelf(s);
n.clear();
for (;a > 40; ) {
n.circle(c.x, c.y, 5);
n.fill();
c.addSelf(s);
a -= 40;
}
}
};
i([ c(cc.Sprite) ], e.prototype, "arraw", void 0);
return e = i([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants"
} ],
TipsCompoent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "73753CnXFZK0oVgKJHnTj8q", "TipsCompoent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Events"), a = t("./EventConstants"), s = cc._decorator, c = s.ccclass, l = s.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeTips = null;
e.labelTips = null;
return e;
}
e.prototype.onLoad = function() {
r.events.on(this.name, this.uuid, a.GameEvents.SHOW_TIPS, this.show, this);
};
e.prototype.show = function(t) {
var e = this;
this.nodeTips.stopAllActions();
this.nodeTips.active = !0;
this.labelTips.string = t;
this.nodeTips.y = -50;
this.nodeTips.opacity = 0;
this.nodeTips.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, cc.v2(0, 0)), cc.fadeIn(.15)), cc.delayTime(1), cc.spawn(cc.moveTo(.3, cc.v2(0, 50)), cc.fadeOut(.15)), cc.callFunc(function() {
e.clear();
})));
};
e.prototype.clear = function() {
this.nodeTips.stopAllActions();
this.nodeTips.active = !1;
this.nodeTips.y = -50;
this.labelTips.string = "";
};
i([ l(cc.Node) ], e.prototype, "nodeTips", void 0);
i([ l(cc.Label) ], e.prototype, "labelTips", void 0);
return e = i([ c ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants",
"./Events": "Events"
} ],
TurnTable: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b0570jWdOFAEJFkoEcGPFvN", "TurnTable");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
}, r = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../common/Utils"), c = t("../common/User"), l = t("../common/Events"), d = t("../common/EventConstants"), u = t("../common/PopupConstants"), p = t("../common/AudioConstands"), f = cc._decorator, h = f.ccclass, g = f.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.iconSpriteFrame = [];
e.iconNode = null;
e.spinNode = null;
e.closeNode = null;
e._data = null;
e._awardArr = null;
e.isStart = !1;
return e;
}
e.prototype.onEnable = function() {
this.closeNode.active = !0;
this.spinNode.angle = 0;
this._awardArr = c.user.getLumpData().spinAward;
this.isStart = !1;
for (var t = 0; t < this._awardArr.length; t++) this.spinNode.children[t + 1].getChildByName("New Label") && (this.spinNode.children[t + 1].getChildByName("New Label").getComponent(cc.Label).string = this._awardArr[t].award);
cc.sys.os == cc.sys.OS_IOS ? this.iconNode.getComponent(cc.Sprite).spriteFrame = this.iconSpriteFrame[1] : this.iconNode.getComponent(cc.Sprite).spriteFrame = this.iconSpriteFrame[0];
};
e.prototype.turnAngleHandle = function() {
var t = this;
this.isStart ? FSDK.showToast("The spin is starting") : cc.sys.isNative && !c.user.getLumpData().isDebug ? c.user.getSpinCount() < 1 ? this.getAwardFun() : FSDK.openVideo("spin", function() {
t.getAwardFun();
}, this) : this.getAwardFun();
};
e.prototype.getAwardFun = function() {
var t = this;
this.closeNode.active = !1;
this.isStart = !0;
l.events.emit(d.GameEvents.PLAY_SOUND_EFFECT, p.AudioName.LUCK);
var e = c.user.getSpinCount();
e += 1;
c.user.setSpinCount(e);
var o = FSDK.getCreditDif(), n = [ "", 0, "spin", !1, !1 ], i = s.utils.randomByWeight([ 0, 1, 2, 3, 4, 5 ], c.user.getLumpData().spinWeight[o]);
if (i == Number(0)) {
var f = FSDK.getCard(1);
n[0] = "gp";
f.num <= 0 ? i = 2 : n[1] = f.num;
} else if (i == Number(3)) {
f = FSDK.getCard(2);
n[0] = "pp";
f.num <= 0 ? i = 2 : n[1] = f.num;
}
var h = 3600 + 60 * -i;
cc.tween(this.spinNode).by(4.2, {
angle: h
}, {
easing: "sineInOut"
}).delay(.3).call(function() {
return r(t, void 0, void 0, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
this.isStart = !1;
return i == Number(0) || 3 == i ? [ 3, 2 ] : [ 4, GPool.get("creditPS") ];

case 1:
t.sent().parent = cc.find("Canvas");
FSDK.setCredit("credit", this._awardArr[i].award, "spin");
FSDK.showToast("Congratulations on receiving " + this._awardArr[i].award + " gold coins");
l.events.emit(d.GameEvents.HIDE_POPUP);
return [ 2 ];

case 2:
l.events.emit(d.GameEvents.SHOW_POPUP, u.PopUpName.SUPERPRIZE, null, n);
l.events.emit(d.GameEvents.HIDE_POPUP);
return [ 2 ];
}
});
});
}).start();
};
e.prototype.closeHandle = function() {
if (this.isStart) FSDK.showToast("The spin is starting"); else if (cc.sys.isNative && !c.user.getLumpData().isDebug) {
l.events.emit(d.GameEvents.PLAY_SOUND_EFFECT, p.AudioName.BUTTON);
l.events.emit(d.GameEvents.HIDE_POPUP);
} else {
l.events.emit(d.GameEvents.PLAY_SOUND_EFFECT, p.AudioName.BUTTON);
l.events.emit(d.GameEvents.HIDE_POPUP);
}
};
i([ g(cc.SpriteFrame) ], e.prototype, "iconSpriteFrame", void 0);
i([ g(cc.Node) ], e.prototype, "iconNode", void 0);
i([ g(cc.Node) ], e.prototype, "spinNode", void 0);
i([ g(cc.Node) ], e.prototype, "closeNode", void 0);
return e = i([ h ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User",
"../common/Utils": "Utils"
} ],
UIManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3151bb3sstE+JoEUHR0D4w8", "UIManager");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/User"), a = t("../common/Events"), s = t("../common/EventConstants"), c = t("../common/PopupConstants"), l = t("../common/AudioConstands"), d = cc._decorator, u = d.ccclass, p = d.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.first_Label = null;
e.second_Label = null;
e.coin_Label = null;
e.wxLoginAndSetting = [];
e.FSDKNode = null;
return e;
}
e.prototype.start = function() {
this.initEvents();
this.init();
};
e.prototype.onDestroy = function() {
this.removeEvents();
};
e.prototype.initEvents = function() {
a.events.on(this.name, this.uuid, s.GameEvents.UPDATAUI, this.updateIcon, this);
};
e.prototype.removeEvents = function() {
a.events.removeListener(this.name, s.GameEvents.UPDATAUI);
a.events.removeListener(this.name, s.GameEvents.UPDATALEVEL);
a.events.removeListener(this.name, s.GameEvents.UPDATASCORE);
};
e.prototype.init = function() {
this.first_Label.string = r.user.firstGold.toFixed(2);
this.second_Label.string = r.user.secondGold.toFixed(2);
this.coin_Label.string = r.user.credit.toFixed(0);
};
e.prototype.updateIcon = function() {
this.first_Label.string = r.user.firstGold.toFixed(2);
this.second_Label.string = r.user.secondGold.toFixed(2);
this.coin_Label.string = r.user.credit.toFixed(0);
};
e.prototype.firstHandle = function() {
a.events.emit(s.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.BUTTON);
};
e.prototype.secondHandle = function() {
a.events.emit(s.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.BUTTON);
};
e.prototype.settingHandle = function() {
a.events.emit(s.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.BUTTON);
a.events.emit(s.GameEvents.SHOW_POPUP, c.PopUpName.SETTING);
};
e.prototype.getgpCardHandle = function() {
r.user.serverData.isBlack || FSDK.showTwoCard(1, this.FSDKNode);
};
e.prototype.getppCardHandle = function() {
r.user.serverData.isBlack || FSDK.showTwoCard(0, this.FSDKNode);
};
e.prototype.getCreditHandle = function() {
r.user.serverData.isBlack || FSDK.showTransList(this.FSDKNode, 1);
};
i([ p(cc.Label) ], e.prototype, "first_Label", void 0);
i([ p(cc.Label) ], e.prototype, "second_Label", void 0);
i([ p(cc.Label) ], e.prototype, "coin_Label", void 0);
i([ p(cc.Node) ], e.prototype, "wxLoginAndSetting", void 0);
i([ p(cc.Node) ], e.prototype, "FSDKNode", void 0);
return e = i([ u ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User"
} ],
UpdateGA: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "60ab9pcdIdDRowHrqCAtJ8M", "UpdateGA");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, s = r.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon = [];
return e;
}
e.prototype.onLoad = function() {
cc.sys.os == cc.sys.OS_IOS ? this.node.getComponent(cc.Sprite).spriteFrame = this.icon[1] : this.node.getComponent(cc.Sprite).spriteFrame = this.icon[0];
};
i([ s(cc.SpriteFrame) ], e.prototype, "icon", void 0);
return e = i([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
User: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7595bKhJSpPe5XBvRn6mXsj", "User");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
this.mCCion = 0;
this.mGCoin = 0;
this.mPCoin = 0;
this.isGuide = !0;
this._severData = null;
this.userInfo = null;
this.awardNumber = 0;
this.isGetAward = !1;
this.currentLine = 0;
this.isRedAndCost = !1;
this.currentProp = 0;
this.recordBarrier = [];
this.recordBall = [];
this.currentRedLine = 0;
this.deleteBarriersNum = 0;
this.isLoading = !1;
this.isOneRed = !1;
this.isRed = !1;
this.ishf = !1;
this.currnetReviveNum = 0;
this.isGetGift = !1;
this.onlineTime = -9;
this.getGift = 0;
this.collectCoins = 0;
this.collectCoins2 = 0;
this.expDay = 0;
this.exp = 0;
this.level = 1;
this.spinCount = 0;
this.rainAwardNum = 0;
this.rainProbability = 0;
this.isRain = !1;
this.lumpData = {
BarrierSacleArr: [ .8, 1 ],
MaxBallCount: 50,
weight: [ [ 850, 100, 50, 0, 0, 0, 0, 0 ], [ 0, 850, 100, 50, 0, 0, 0, 0 ], [ 0, 0, 850, 100, 50, 0, 0, 0 ], [ 0, 0, 0, 850, 100, 50, 0, 0 ], [ 0, 0, 0, 0, 850, 100, 50, 0 ], [ 0, 0, 0, 0, 0, 850, 100, 50 ], [ 0, 0, 0, 0, 0, 0, 800, 200 ], [ 0, 0, 0, 0, 0, 0, 0, 1e3 ] ],
numWeight: [ [ 1, 10 ], [ 11, 20 ], [ 21, 50 ], [ 51, 100 ], [ 101, 200 ], [ 201, 300 ], [ 301, 500 ], [ 501, 1e3 ] ],
tager: [ 100, 300, 500, 1e3, 2e4, 5e4, 1e4 ],
color: [ [ "#a4a4a4", "#c8c8c8", "#b3b3b3" ], [ "#2b3f85", "#6a7bb5", "#5d6eab" ], [ "#1d8b7f", "#5bbaaa", "#3aad83" ], [ "#e3a538", "#ffdc7c", "#fdc04a" ], [ "#cc7918", "#ffb22e", "#e48d2c" ], [ "#693f92", "#a077c6", "#8e5cbc" ], [ "#e31e3f", "#f86475", "#ff4463" ] ],
prop: [ [ 600, 200 ], [ 600, 600 ], [ 400, 400 ], [ 200, 100 ] ],
propArr: [ 1, 2 ],
BuriedPointScore: [ [ 1e4, 5e4 ], [ 5e4, 1e5 ], [ 1e5, 5e5 ], [ 5e5, 1e6 ], [ 1e6, 2e7 ], [ 2e7, 5e7 ], [ 50000001, 5e7 ] ],
scoreInterval: [ 200, 750, 1500, 3e3, 5e3, 1e4, 15e3, 2e4, 5e4, 50001 ],
reviveScore: [ [ 3e3, 5e3 ], [ 5e3, 1e4 ], [ 1e4, 5e4 ], [ 5e4, 1e5 ], [ 1e5, 5e5 ], [ 5e5, 99999999999 ] ],
initBarrierlArr: [ 3, 5 ],
barrierlArrPosX: [ -250, -125, 0, 125, 250 ],
reviveNum: 2,
MaxBigBall: 1.5,
Ballprop: [ [ 11, 15 ], [ 126, 20 ], [ 21, 25 ], [ 26, 30 ] ],
myVideoMaxCount: 40,
videoAddPoint: [ 20, 40 ],
outOfRedAndCost: [ 2, 5 ],
videoBaoXiang: [ 10, 8, 7, 5, 3 ],
MaxFirstGold: 98,
MaxSecondGold: 68,
giftTime: 900,
CollectCoins: [ 1e4, 2e3 ],
LevelCions: [ [ 3, 5 ], [ 1, 4 ], [ 1, 2 ] ],
spinWeight: [ [ 800, 800, 1e3, 500, 200, 100 ], [ 800, 800, 300, 1e3, 300, 100 ], [ 800, 800, 100, 200, 800, 1e3 ] ],
spinAward: [ {
id: 1,
award: "gp"
}, {
id: 2,
award: 500
}, {
id: 3,
award: 200
}, {
id: 4,
award: "pp"
}, {
id: 5,
award: 100
}, {
id: 6,
award: 50
} ],
exp: [],
hurt: 10,
expSate: 10,
expDayCount: 5e6,
isDebug: !0,
bxCredit: 10,
levelFormula: [ [ 1.02, 1.2, 4 ], [ 1.02, 3, 7 ] ],
rainAwardMax: 50,
rainProbability: .2,
addProp: 3
};
this.status = {
isMute: !0,
isShake: !0,
isSound: !0
};
}
t.prototype.save = function(t) {
void 0 === t && (t = 0);
var e = {
status: this.status,
mGCoin: this.mGCoin,
mPCoin: this.mPCoin,
mCCion: this.mCCion,
isGuide: this.isGuide,
userInfo: this.userInfo,
awardNumber: this.awardNumber,
isGetAward: this.isGetAward,
isRedAndCost: this.isRedAndCost,
currentLine: this.currentLine,
currentProp: this.currentProp,
recordBarrier: this.recordBarrier,
recordBall: this.recordBall,
currentRedLine: this.currentRedLine,
deleteBarriersNum: this.deleteBarriersNum,
isLoading: this.isLoading,
isOneRed: this.isOneRed,
currnetReviveNum: this.currnetReviveNum,
isRed: this.isRed,
ishf: this.ishf,
isGetGift: this.isGetGift,
onlineTime: this.onlineTime,
getGift: this.getGift,
collectCoins: this.collectCoins,
collectCoins2: this.collectCoins2,
expDay: this.expDay,
exp: this.exp,
level: this.level,
spinCount: this.spinCount,
rainAwardNum: this.rainAwardNum,
rainProbability: this.rainProbability,
isRain: this.isRain
};
0 == t ? cc.sys.localStorage.setItem("ausball", JSON.stringify(e)) : FSDK.saveData(e);
};
t.prototype.load = function() {
var t = cc.sys.localStorage.getItem("ausball");
if (t) {
t = JSON.parse(t);
for (var e in t) this[e] = t[e];
} else if (t = this._severData.preferences) for (var e in t) this[e] = t[e];
};
Object.defineProperty(t.prototype, "IsMute", {
get: function() {
return this.status.isMute;
},
set: function(t) {
this.status.isMute = t;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "IsShake", {
get: function() {
return this.status.isShake;
},
set: function(t) {
this.status.isShake = t;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "IsSound", {
get: function() {
return this.status.isSound;
},
set: function(t) {
this.status.isSound = t;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "firstGold", {
get: function() {
return this.mGCoin;
},
set: function(t) {
this.mGCoin = t;
this.save(1);
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "secondGold", {
get: function() {
return this.mPCoin;
},
set: function(t) {
this.mPCoin = t;
this.save(1);
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "credit", {
get: function() {
return this.mCCion;
},
set: function(t) {
this.mCCion = t;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "passGuide", {
get: function() {
return this.isGuide;
},
set: function(t) {
this.isGuide = t;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "serverData", {
get: function() {
return this._severData;
},
set: function(t) {
this._severData = t;
},
enumerable: !0,
configurable: !0
});
t.prototype.getWX_INFO = function() {
return this.userInfo;
};
t.prototype.setWX_IFFO = function(t) {
this.userInfo = t;
};
t.prototype.getLumpData = function() {
return this.lumpData;
};
t.prototype.setLumpData = function(t) {
this.lumpData = t;
};
t.prototype.getAwardNumber = function() {
return this.awardNumber;
};
t.prototype.setAwardNumber = function(t) {
0 != t ? this.awardNumber += 1 : this.awardNumber = t;
};
t.prototype.getIsGetAward = function() {
return this.isGetAward;
};
t.prototype.setIsGetAward = function(t) {
this.isGetAward = t;
};
t.prototype.getCurrentLine = function() {
return this.currentLine;
};
t.prototype.setCurrentLine = function(t) {
0 != t ? this.currentLine += 1 : this.currentLine = t;
};
t.prototype.getIsRedAndCost = function() {
return this.isRedAndCost;
};
t.prototype.setIsRedAndCost = function(t) {
this.isRedAndCost = t;
};
t.prototype.getCurrentProp = function() {
return this.currentProp;
};
t.prototype.setCurrentProp = function(t) {
this.currentProp = t;
this.currentProp < 0 && (this.currentProp = 0);
};
t.prototype.getRecordBarrier = function() {
return this.recordBarrier;
};
t.prototype.setRecordBarrier = function(t) {
this.recordBarrier = t;
};
t.prototype.getRecordBall = function() {
return this.recordBall;
};
t.prototype.setRecordBall = function(t) {
this.recordBall = t;
};
t.prototype.getCurrentRedLine = function() {
return this.currentRedLine;
};
t.prototype.setCurrentRenLine = function(t) {
0 != t ? this.currentRedLine += 1 : this.currentRedLine = t;
};
t.prototype.setDeleteBarriersNum = function() {
this.deleteBarriersNum += 1;
this.deleteBarriersNum <= 10 && FSDK.umengEvent("Game_Remove", "" + this.deleteBarriersNum);
};
t.prototype.getIsLoading = function() {
return this.isLoading;
};
t.prototype.setIsLoading = function() {
this.isLoading = !0;
};
t.prototype.setIsOneRed = function() {
if (!this.isOneRed) {
this.isOneRed = !0;
FSDK.umengEvent("Game_RedPacket", "1");
}
};
t.prototype.getCost = function(t) {
if ("bx" == t) return this.ishf;
};
t.prototype.setCost = function(t, e) {
"bx" == t && (this.ishf = e);
this.save(1);
};
t.prototype.getCurrnetReviveNum = function() {
return this.currnetReviveNum;
};
t.prototype.setCurrnetReviveNum = function(t) {
t ? this.currnetReviveNum = t : this.currnetReviveNum -= 1;
FLog.normal(this.currnetReviveNum);
};
t.prototype.getIsGetGift = function() {
return this.isGetGift;
};
t.prototype.setIsGetGift = function(t) {
this.isGetGift = t;
};
t.prototype.getOnlineTime = function() {
return this.onlineTime;
};
t.prototype.setOnlineTime = function(t) {
this.onlineTime = t;
};
t.prototype.getGiftCount = function() {
return this.getGift;
};
t.prototype.setGiftCount = function(t) {
this.getGift = t;
};
t.prototype.getCollectCoins = function() {
return this.collectCoins;
};
t.prototype.setCollectCoins = function(t) {
this.collectCoins = t;
};
t.prototype.getCollectCoins2 = function() {
return this.collectCoins2;
};
t.prototype.setCollectCoins2 = function(t) {
this.collectCoins2 = t;
};
t.prototype.getExpDay = function() {
return this.expDay;
};
t.prototype.setExpDay = function(t) {
this.expDay = t;
};
t.prototype.getExp = function() {
return this.exp;
};
t.prototype.setExp = function(t) {
this.exp = t;
};
t.prototype.getLevel = function() {
return this.level;
};
t.prototype.setLevel = function(t) {
this.level = t;
FSDK.setTask(this.level);
};
t.prototype.getSpinCount = function() {
return this.spinCount;
};
t.prototype.setSpinCount = function(t) {
this.spinCount = t;
};
t.prototype.getRainAwardNum = function() {
return this.rainAwardNum;
};
t.prototype.setRainAwardNum = function(t) {
if (0 != t) this.rainAwardNum += 1; else {
this.rainAwardNum = 0;
this.save();
}
};
t.prototype.getRainProbability = function() {
return this.rainProbability;
};
t.prototype.setRainProbability = function(t) {
this.rainProbability = t;
};
t.prototype.getIsRain = function() {
return this.isRain;
};
t.prototype.setIsRain = function(t) {
this.isRain = t;
};
return t;
}();
o.user = new n();
cc._RF.pop();
}, {} ],
Utils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d0800FlUfFG3pgsXbp61C3P", "Utils");
var n = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var o, n, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, r[1])).done) return i;
(n = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
o = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.prototype.randomByWeight = function(t, e) {
t.length != e.length && console.warn("random2输入不合法: arr1.length != arr2.length");
for (var o = 0, n = 0, i = Math.random(), r = e.length - 1; r >= 0; r--) o += e[r];
i *= o;
for (r = e.length - 1; r >= 0; r--) if (i <= (n += e[r])) return t[r];
return null;
};
t.prototype.randomInt = function(t, e) {
if (Array.isArray(t) && "undefined" == typeof e) {
e = t[1];
t = t[0];
}
return Math.floor(Math.random() * (e - t + 1)) + t;
};
t.prototype.randomFloat = function(t, e) {
if (Array.isArray(t) && "undefined" == typeof e) {
e = t[1];
t = t[0];
}
return t + (e - t) * Math.random();
};
t.prototype.random_1To1 = function() {
return this.randomFloat([ 0, 1 ]);
};
t.prototype.clone = function(t) {
return JSON.parse(JSON.stringify(t));
};
t.prototype.positionTransfor = function(t, e) {
return e.convertToNodeSpaceAR(t.parent.convertToWorldSpaceAR(t.position));
};
t.prototype.formatTime = function(t) {
var e = Math.floor(t / 3600), o = Math.floor(t % 3600 / 60), n = t % 60, i = e < 10 ? "0" + e : e, r = o < 10 ? "0" + o : o, a = n < 10 ? "0" + n : n;
return "00" === i ? r + ":" + a : i + ":" + r + ":" + a;
};
t.prototype.getResTexture = function(t) {
return new Promise(function(e, o) {
t ? cc.loader.loadRes("texture/" + t, cc.SpriteFrame, function(t, o) {
if (t) return console.log("loadResTexture error:", t);
e(o);
}) : console.log("getResTexture url is null:");
});
};
t.prototype.loadResTexture = function(t, e, o) {
if (!t) return console.log("loadResTexture url is null");
cc.loader.loadRes("" + t, cc.SpriteFrame, function(t, n) {
if (t) return console.log("loadResTexture error:", t);
if (!e) return console.log("loadResTexture error:", "sprite is null");
if (!e.getMaterial.length) return console.log("getMaterial error:", "sprite is null");
e.spriteFrame = n;
o && o();
});
};
t.prototype.getHeadImg = function(t, e) {
cc.loader.load(t + "?aa=aa.jpg", function(t, o) {
var n = new cc.SpriteFrame(o);
e.spriteFrame = n;
});
};
t.prototype.loadRemoteTexture = function(t, e) {
if (!t) return console.log("loadRemoteTexture url is null");
cc.loader.load({
url: t,
type: "png"
}, function(t, o) {
if (t) return console.log("loadRemoteTexture error:", t);
if (!e) return console.log("loadRemoteTexture error:", "sprite is null");
e.spriteFrame = new cc.SpriteFrame(o);
});
};
t.prototype.setAvatar = function(t, e, o) {
if (e) {
var n = e + "?aa=aa.jpg";
cc.loader.load(n, function(e, n) {
t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
o();
});
} else {
this.loadResTexture("acatarGirl", t.getComponent(cc.Sprite));
o();
}
};
t.prototype.getScreenSize = function() {
return new cc.Vec2(cc.winSize.width, cc.winSize.height);
};
t.prototype.randomNum = function(t, e, o) {
var n = e - t, i = o || Math.random();
return t + Math.round(i * n);
};
t.prototype.isContainsDuplicate = function(t) {
var e = new Set(t), o = Array.from(e);
return t.length != o.length;
};
t.prototype.getDate = function() {
var t = new Date();
return t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate();
};
t.prototype.getRandomId = function() {
return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
};
t.prototype.getRandomByArr = function(t) {
return t[Math.floor(Math.random() * t.length + 1) - 1];
};
t.prototype.randomArr = function(t) {
for (var e, o = t.length; o; ) {
var n = Math.floor(Math.random() * o--);
e = [ t[o], t[n] ], t[n] = e[0], t[o] = e[1];
}
};
t.prototype.replaceTxt = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
for (var n = 0; n < e.length; n++) t = t.replace(/\$\{rep\}/, e[n]);
return t;
};
t.prototype.formatDate = function(t, e) {
void 0 === e && (e = "YYYY-mm-dd");
var o, n = {
"Y+": t.getFullYear().toString(),
"m+": (t.getMonth() + 1).toString(),
"d+": t.getDate().toString()
};
for (var i in n) (o = new RegExp("(" + i + ")").exec(e)) && (e = e.replace(o[1], 1 == o[1].length ? n[i] : n[i].padStart(o[1].length, "0")));
return e;
};
t.prototype.secondToFormat = function(t) {
var e = Math.floor(t / 86400), o = Math.floor(t / 3600), n = Math.floor(t / 60 % 60), i = Math.floor(t % 60), r = e.toString() + "天", a = o.toString() + "时", s = n.toString() + "分";
i.toString();
return e > 0 ? r : o > 0 ? a : s;
};
t.prototype.loadAsset = function(t, e, o) {
return n(this, void 0, void 0, function() {
var n;
return i(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 4, , 5 ]);
i.label = 1;

case 1:
return t.length ? [ 4, this.loadSub(t.shift()) ] : [ 3, 3 ];

case 2:
i.sent();
return [ 3, 1 ];

case 3:
e && e();
return [ 3, 5 ];

case 4:
n = i.sent();
o && o(n);
return [ 3, 5 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.loadSub = function(t) {
return new Promise(function(e, o) {
cc.loader.downloader.loadSubpackage(t, function(t) {
if (t) return o(t);
e();
});
});
};
t.prototype.isExistArr = function(t, e, o) {
t.forEach(function(t, n) {
-1 == e.indexOf(t) && o.push(t);
});
return o;
};
t.prototype.loadPrefab = function(t, e) {
cc.loader.loadRes("prefab/" + t, cc.Prefab, function(t, o) {
e && e(o);
});
};
t.prototype.quickSort = function(t) {
if (t.length <= 1) return t;
for (var e = Math.floor(t.length / 2), o = t.splice(e, 1)[0], n = [], i = [], r = 0; r < t.length; r++) t[r] < o ? n.push(t[r]) : i.push(t[r]);
return this.quickSort(n).concat([ o ], this.quickSort(i));
};
t.prototype.getEmail = function() {
var t = [ "贤色旧梦", "暧昧与嫉妒", "爱你九妹", "宝贝伴侣", "被你浪费的情感", "天长地久的爱恋", "梦想时分", "心疼自己", "把星星放进口袋里", "软见", "额头", "衣袂翩翩", "凤眸有你", "别太快关灯", "诱惑", "自古", "沐叶清风", "亦世凡华", "繁华落世丶涐许你一抹红颜", "护食女顽童", "挑眉", "缘起", "圈心", "刺激", "红烛", "怀春", "锦妆", "虞心", "扎心", "堇夏", "残年っ", "╭淡妆╮", "笄发醒", "诗沫涵,", "重口味", "悲画扇", "黑名单", "花争发", "小性感", "北仑色", "自轻舟去", "离囚戈", "朝歌夜弦", "年少如梦", "撩情戏浪子", "撩汉实力派", "浪野少女心", "如初", "亡鱼深海花夕拾", "朝拾", "爱笑的女生", "栀晚鸢乱", "凯喵的小鱼鳅", "寻梦旅人", "失意花季少女", "季末°不寂寞", "眉眼心间", "半盏青灯", "偏执与你", "轻烟薄暮", "青橘栀耳", "傲娇萌娃", "往日柔情", "百毒不侵", "谦与谦寻", "初心莫负", "晚点相遇", "紫陌红尘", "嬡.暀苝漂", "纯粹剪爱", "毫无代价", "忧烟殇往", "潇湘夜雨", "倾尽天下", "梦醒时分", "安之若素", "愿君安好", "你好，明天", "莫失莫忘", "孑然一身", "无需善良", "野猪佩琪", "欲言又止", "酷味很正", "人走茶凉", "伴你余生", "随心所欲", "不负遇见", "陪我听风", "等风也等你", "为你上战场", "深拥意中人", "心软脾气大", "野性又迷人", "积攒一身酷", "撩妹一把手", "稳握江山权", "无聊也不聊", "持刀稳情场", "请保管好你随身携带的暧昧", "不努力拿什么给你未来", "誓言只是一时的失言", "听ゝ海哭的声音", "我欠你一个全剧终", "後知後覺", "旧街旧巷等旧人", "离人不回", "北街末雨", "眉眼如初", "雨落无声", "斩尽天下", "半点心", "淑女范", "梦中人", "平常心", "手放开", "孤美人", "刚刚好", "半生缘", "未语淚先流", "你怀里精致的猪猪", "初本ʚɞ", "一只失宠狐阿", "败给可爱", "离人久巷晚秋凉", "故人辞巷抚轻风", "我不是胆小鬼", "感恩旧爱", "恋爱进行曲", "天生傲骨", "是谁牵动了我的心", "山穷水尽更词穷", "淡然气质比天高〃", "几多岁♡", "放我出去", "熱到膨脹", "苍山有井美似空", "搁浅°", "软萌", "路途", "泸沽烟水里的过客", "淡意衬优柔丶", "如人饮水，冷暖自知", "自古空情多余恨", "疏雨萧萧千行泪", "釉色清风", "旧情返航", "烛中泪", "故事久", "毁心人", "失訫人", "少女瘾", "旧心酸", "维她命", "樱花皇后", "影伴人久", "诗人礼献", "叫醒耳朵", "过分着迷", "暖于心ゆ", "轻叹花开", "森蝶呦つ", "桃色玫瑰", "人野性子浪", "酷到不说话", "封刀不再战", "情感贩卖机", "帅哥，请留步", "深拥他入梦", "情动则心痛", "北柠陌寒", "﹎黯淡ヾ", "凸逼娚勃丸", "妳的溫柔╮只許莪擁囿", "含笑九拳", "蹲街丶吐烟圈oοО", "少女梦", "伪高冷", "别凑合", "勿相忘", "几年华", "故辞", "几味吻", "光阴负容颜╮", "TRY，舞台··", "紫色明信片", "一顾倾人城 ”", "眸敛", "搖曳紅塵中", "鹿困森林", "菊花灿烂^", "风月不等闲", "预言与梦", "文艺菇凉好愤青/*", "太阳每天都生气", "木马在旋转", "眉眼冷无情", "往事埋风中", "妩媚给谁看", "迷上男图像", "陪你到世界的尽头", "心若初晴", "姐比特仑苏还纯°", "盛世流光", "为君倾心", "生生世世", "春风乍起", "素年凉音", "逾期守候", "吶次、曖昧", "孤城旧梦", "森陌夏栀", "古城青衣", "孤酒浪友", "旧巷听风", "风穿襟袖 长叹裁红颜", "望不穿秋水//等不回旧人", "守一座空城等一个旧人", "祢若卟惜莪亦卟嗳", "岂能尽如人意但求无愧于心", "踩着棺材跳鬼步", "清泪两行", "酒笙清栀", "孤酒对饮", "余生浪子", "感性在作祟", "若遇你", "假绅士", "按时荒唐", "快快长大", "释怀", "殇旋律", "三個字對不起〆", "愿是你心之王", "擒拿美人心", "顾虑", "像风一样", "惦记", "吧唧你", "只靠听说", "爷，桀骜不驯", "只偏袒你", "你眼中盈盈月", "提笔写情书", "老爹", "笑我庸俗", "如歌", "痴情狗", "感谢经历", "青春别挥霍", "妄叙", "被淹死的鱼", "江东过客", "唯独是你", "只等公子", "安知我意", "怪性笑人.", "圈圈你个叉叉", "劳资独宠一方", "我有想你", "美汉子", "佰仙", "各路角色", "初恋情久", "葵一般的少年", "目的追你", "一杯忘情", "無奈已被傷", "糖不及你甜", "心瘾成病", "撩妹欧巴", "路旁的无奈", "小家伙", "秋北先生", "迷离的眼", "所谓的第三者", "带你回家", "蕝蝂·貨℡", "န情断", "几人难应", "我为自己代言!", "女儿国的男人", "共度余生", "骚年求逆推i", "热心市民", "阳光下的温暖°", "别涉世太深", "命中不缺狗", "梦好", "含笑记下", "有点上瘾", "迷毁少年", "活在当下", "还给你的自由", "多想强吻你", "世中仙人", "闻香识女人", "男优", "我要让情敌当伴郎", "攒一袋星星.", "白云悠悠", "情殇", "有木有妳兜一样.", "红颜醉", "清白野酒", "荒城", "纪年", "呆橘", "青稚", "腻歪", "漓汐", "初遇", "感性", "墨凉", "余醉", "孤刺", "叛逆", "始终不够爱你", "窝囊感情", "粉红色少女", "穿草裙的少女", "迷途", "小时光", "少女的英雄梦", "傲姿", "念旧", "深巷", "你笑在眉眼.", "烟花易冷", "柠栀", "久念", "习惯性依赖", "旧憶", "故事未完", "月竹挽风", "雅痞", "孤身", "凉心", "抬举", "晨曦微暖", "勿忘初心", "死撑", "闲云", "冷眸", "喵喵", "相权美人", "莫爱", "脆弱", "陌殇", "单杀", "傲娇小公主", "薄荷糖丶微凉" ], e = t[Math.floor(Math.random() * t.length)];
return e = e.length > 4 ? e.substring(0, 2) + "***" + e.substring(e.length - 2, e.length) : e.substring(0, 2) + "***";
};
t.prototype.getNormalityNumByRandom = function(t) {
for (var e = 0, o = 0; o < t.length; o++) e += parseInt(t[o]);
var n = Math.floor(Math.random() * e), i = 0;
for (o = 0; o < t.length; o++) if (n < (i += parseInt(t[o]))) return o;
};
return t;
}();
o.utils = new r();
cc._RF.pop();
}, {} ],
gameStart: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a9a83YFGtdJ6rwkJ6Y9ES+f", "gameStart");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/Events"), a = t("../common/EventConstants"), s = t("../common/User"), c = t("../common/PopupConstants"), l = t("../common/AudioConstands"), d = cc._decorator, u = d.ccclass, p = d.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bubbleTips = [];
return e;
}
e.prototype.onLoad = function() {
cc.game.on(cc.game.EVENT_HIDE, function() {
s.user.save();
s.user.save(1);
}, this);
cc.game.on(cc.game.EVENT_SHOW, function() {
s.user.save();
s.user.save(1);
}, this);
};
e.prototype.onDestroy = function() {
r.events.removeListener(this.name, a.GameEvents.BUBBLETPIS);
r.events.removeListener(this.name, a.GameEvents.CLOSEBUBBLE);
};
e.prototype.turntableHandle = function() {
r.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, l.AudioName.BUTTON);
a.GameConstant.isShoot ? FSDK.showToast("The current state can not be opened") : s.user.getSpinCount() >= 15 ? FSDK.showToast("Spin limit reached today") : r.events.emit(a.GameEvents.SHOW_POPUP, c.PopUpName.TURNTABLE);
};
i([ p(cc.Node) ], e.prototype, "bubbleTips", void 0);
return e = i([ u ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User"
} ],
paomaGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f905b0e1z9A+41ekCpu57EQ", "paomaGame");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), i = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Utils"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tAnnounceNode = [];
e.money = [ 1, 5, 10, 20, 50, 100 ];
e.rate = [ 15, 15, 70 ];
e.list = [ "恭喜@收集了100元红包，并成功兑换", "恭喜@收集了100元话费卡，并成功兑换", "恭喜@达成&元红包兑换条件，并成功兑换" ];
return e;
}
e.prototype.init = function() {
var t = r.utils.getEmail(), e = r.utils.getEmail();
this.tAnnounceNode[0].y = 0;
this.tAnnounceNode[1].y = -57;
var o = this.list[r.utils.getNormalityNumByRandom(this.rate)];
o = o.replace("@", t.toString()).replace("&", this.money[Math.floor(Math.random() * this.money.length)].toString());
var n = this.list[r.utils.getNormalityNumByRandom(this.rate)];
n = n.replace("@", e.toString()).replace("&", this.money[Math.floor(Math.random() * this.money.length)].toString());
this.tAnnounceNode[0].getChildByName("label").getComponent(cc.Label).string = o;
this.tAnnounceNode[1].getChildByName("label").getComponent(cc.Label).string = n;
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.node.stopAllActions();
this.init();
this.showHorseLamp();
};
e.prototype.showHorseLamp = function() {
var t = this, e = 3 * Math.random() + 2;
cc.tween(this.node).delay(e).call(function() {
cc.tween(t.tAnnounceNode[0]).to(.6, {
position: cc.v2(-284, 57)
}).start();
cc.tween(t.tAnnounceNode[1]).to(.6, {
position: cc.v2(-284, 0)
}).start();
}).delay(.7).call(function() {
var e = t.tAnnounceNode.shift();
e.setPosition(cc.v2(-284, -57));
var o = r.utils.getEmail(), n = t.list[r.utils.getNormalityNumByRandom(t.rate)];
n = n.replace("@", o.toString()).replace("&", t.money[Math.floor(Math.random() * t.money.length)].toString());
e.getChildByName("label").getComponent(cc.Label).string = n;
t.tAnnounceNode.push(e);
t.showHorseLamp();
}).start();
};
i([ c(cc.Node) ], e.prototype, "tAnnounceNode", void 0);
return e = i([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./Utils": "Utils"
} ],
use_reversed_rotateBy: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e2ad7a8TzlKIZXScTCcCe02", "use_reversed_rotateBy");
cc.RotateBy._reverse = !0;
cc._RF.pop();
}, {} ]
}, {}, [ "FLanguageCtrl", "FLoadingCtrl", "FConfig", "FEventID", "FGlobal", "FLanguageConfig", "FLog", "FNative", "FPanelManager", "FSDK", "FSDKModel", "FToLoad", "FLogic", "FNetWork", "FNetWorkConfig", "FNetWorkCtrl", "FProtocolCode", "FSocketSend", "FCardPage", "FCreditRecord", "FGrade", "FInvityPage", "FInvityTaskItem", "FLeft", "FMarquee", "FSignPage", "FTaskItem", "FTaskPage", "FTransInfo", "FTransItem", "FTransList", "FTransPage", "FTwoCard", "FTwoCardItem", "FUpdate", "Base64", "ByteArray", "use_reversed_rotateBy", "ATBannerJSSDK", "ATInterstitialJSSDK", "ATJSSDK", "ATNativeJSSDK", "ATRewardedVideoJSSDK", "ATAndroidBannerJS", "ATAndroidInterstitialJS", "ATAndroidJS", "ATAndroidNativeJS", "ATAndroidRewardedVideoJS", "ATiOSBannerJS", "ATiOSInterstitialJS", "ATiOSJS", "ATiOSNativeJS", "ATiOSRewardedVideoJS", "SimpleAd", "SimpleAnalytics", "SimpleAndroid", "SimpleCallback", "SimpleEditor", "SimpleIOS", "SimpleInterface", "SimpleSDK", "SimpleSDKEvent", "SimpleUtils", "FHideNode", "FSidebar", "UIManager", "Actions", "AnimationControl", "AudioComponent", "AudioConstands", "Cache", "EventConstants", "Events", "GPool", "IPXWidgetComponent", "PopupComponent", "PopupConstants", "TipsCompoent", "User", "Utils", "paomaGame", "Ball", "Barrier", "Cion", "FCionEvent", "GameController", "Shake", "StarEnd", "TakeAim", "UpdateGA", "gameStart", "Loading", "Main", "GameOver", "GetPacket", "Read", "TurnTable" ]);