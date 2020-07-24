"use strict";
cc._RF.push(module, 'd1d68i4zBpEBIe5olI11joa', 'FNative');
// FSDK_ASS/FSript/FModel/FNative.ts

var FNative = /** @class */ (function () {
    function FNative() {
    }
    //获取原生端对应类
    FNative.getNativeClass = function () {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            return 'org.cocos2dx.javascript/Cocos';
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            return 'CocosMap';
        }
    };
    //获取系统信息
    FNative.getSystemInfo = function () {
        if (!cc.sys.isNative)
            return null;
        var data;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            data = jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'getSystemInfo', '()Ljava/lang/String;');
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            data = jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'getSystemInfo');
        }
        FLog.normal("看看系统信息：" + data);
        return JSON.parse(data);
    };
    ;
    //获取系统信息
    FNative.getVerInfo = function () {
        if (!cc.sys.isNative)
            return null;
        var data;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            data = jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'getVerInfo', '()Ljava/lang/String;');
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            data = jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'getVerInfo');
        }
        data = JSON.parse(data);
        FConfig.VERSION = data.ver;
        FConfig.VERSION_CODE = data.ver_code;
        FLog.normal("看看版本号信息" + data);
        return data;
    };
    ;
    //震动
    FNative.shake = function (time) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'shake', '(I)V', time);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'shake:', time);
        }
    };
    ;
    //复制
    FNative.copy = function (str) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'copy', '(Ljava/lang/String;)V', str);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'copy:', str);
        }
        FSDK.showToast("Copy success");
    };
    ;
    //友盟埋点
    FNative.UmengOnEvemt = function (eventName, value) {
        if (value === void 0) { value = "0"; }
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'UmengOnEvent', '(Ljava/lang/String;Ljava/lang/String;)V', eventName, value);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'UmengOnEvent:addContent:', eventName, value);
        }
    };
    ;
    //跳转App
    FNative.openApp = function (apk) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openApp', '(Ljava/lang/String;)V', apk);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openApp:', apk);
        }
    };
    ;
    //跳转商店
    FNative.jumpShop = function (pg) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'jumpShop', '(Ljava/lang/String;)V', pg);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'jumpShop:', pg);
        }
    };
    //弹出提示
    FNative.showToast = function (str) {
        FSDK.showToast(str);
    };
    //打开分享
    FNative.share = function (shareInfo) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openShare', '(Ljava/lang/String;)V', shareInfo);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openShare:', shareInfo);
        }
    };
    //预加载视频
    FNative.preloadVideo = function (id) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'preloadVideo', '(Ljava/lang/String;)V', id);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'preloadVideo:', id);
        }
    };
    //预加载插屏
    FNative.preloadInters = function (id) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'preloadInters', '(Ljava/lang/String;)V', id);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'preloadInters:', id);
        }
    };
    //打开视频
    FNative.openVideo = function () {
        if (!cc.sys.isNative)
            return;
        // if (cc.sys.os == cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openVideo', '()V');
        // }
        // else if (cc.sys.os == cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openVideo:', "11");
        // }
        if (get_simple_ad().hasReward()) {
            FSDK.showToLoad("AD Loading...");
            get_simple_ad().showReward("所有场景");
        }
        else {
            FNative.videoFail();
        }
    };
    //打开Banner
    FNative.openBanner = function (id) {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openBanner', '(Ljava/lang/String;)V', id);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openBanner:', id);
        }
    };
    //隐藏banner
    FNative.closeBanner = function () {
        if (!cc.sys.isNative)
            return;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'closeBanner', '()V');
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'closeBanner', '()V');
        }
    };
    //打开插屏
    FNative.openInters = function () {
        if (!cc.sys.isNative)
            return;
        // if (cc.sys.os == cc.sys.OS_ANDROID) {
        //     jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openInters', '()V');
        // }
        // else if (cc.sys.os == cc.sys.OS_IOS) {
        //     jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'openInters:', "11");
        // }
        if (get_simple_ad().hasInter()) {
            FSDK.showToLoad("AD Loading...");
            get_simple_ad().showInter("所有场景");
        }
        else {
            FNative.intersFail();
        }
    };
    //wx登录
    FNative.wxLogin = function () {
        FSDK.showToLoad("正在授权中...");
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod(FNative.getNativeClass(), 'wxLogin', '()V');
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
        }
    };
    //视频观看
    FNative.videoShow = function () {
        cc.audioEngine.setMusicVolume(0);
        cc.audioEngine.setEffectsVolume(0);
        FSDK.umengEvent(FConfig.UMENG_CONFIG.video_show, "0");
        FSDK.hideToLoad();
        FSDK.adEvent('topon', 'video');
        FNative.AD_COUNT.video++;
        FSDK.saveData("AD_COUNT", FNative.AD_COUNT);
        FSDK.umengEvent("video_show_scene", FNative.videoCb.from);
        FLog.normal("视频展示");
    };
    //视频完整观看
    FNative.videoSuc = function () {
        FSDK.umengEvent(FConfig.UMENG_CONFIG.video_suc, "0");
        if (FNative.videoCb.cb && FNative.videoCb.target) {
            FNative.videoCb.cb.call(FNative.videoCb.target);
        }
        FNative.AD_SHOW_CNT.AD_SUC++;
        if (FNative.AD_SHOW_CNT.AD_SUC >= FConfig.FSDK_CONF.REAL_USER.ad_num) {
            FSDK.setActiveUser();
        }
        FSDK.saveData("AD_SHOW_CNT", FNative.AD_SHOW_CNT);
        FLog.normal("视频看完  ", FNative.AD_SHOW_CNT.AD_SUC);
        FNative.videoClose();
    };
    //视频关闭
    FNative.videoClose = function () {
        cc.audioEngine.setMusicVolume(1);
        cc.audioEngine.setEffectsVolume(1);
        if (!FNative.VIDEO_FRESH_TIME && FConfig.FSDK_CONF.AD_CONF.video_fresh_time) {
            FNative.video_fresh_time = FConfig.FSDK_CONF.AD_CONF.video_fresh_time;
            FNative.VIDEO_FRESH_TIME = setInterval(function () {
                if (FNative.video_fresh_time) {
                    FNative.video_fresh_time--;
                }
                else {
                    clearTimeout(FNative.VIDEO_FRESH_TIME);
                    FNative.VIDEO_FRESH_TIME = null;
                }
            }, 1000);
        }
        FLog.normal("视频关闭");
    };
    //视频失败
    FNative.videoFail = function () {
        FSDK.umengEvent(FConfig.UMENG_CONFIG.video_fail, "0");
        if (FNative.isLoad) {
            FSDK.hideToLoad();
            FSDK.showToast("Video is loading");
            return;
        }
        FNative.isLoad = true;
        FSDK.showToLoad('AD Loading...');
        setTimeout(function () {
            FNative.openVideo();
        }, 2000);
        FLog.normal("视频失败");
    };
    //视频点击
    FNative.videoClick = function () {
        FSDK.umengEvent(FConfig.UMENG_CONFIG.video_click, "0");
        FLog.normal("视频点击");
    };
    //插屏展示
    FNative.intersShow = function () {
        FSDK.umengEvent(FConfig.UMENG_CONFIG.inter_show, "0");
        FSDK.adEvent('topon', 'interstitial');
        FNative.AD_COUNT.inters++;
        FNative.AD_SHOW_CNT.AD_SHOW++;
        FSDK.saveData("AD_SHOW_CNT", FNative.AD_SHOW_CNT);
        FSDK.saveData("AD_COUNT", FNative.AD_COUNT);
        FLog.normal("插屏展示");
    };
    //刷新插屏时间
    FNative.freshInters = function () {
        if (!FNative.INTERS_FRESH_TIME) {
            FNative.INTERS_FRESH_TIME = setInterval(function () {
                if (FNative.inters_fresh_time) {
                    FNative.inters_fresh_time--;
                }
                else {
                    clearTimeout(FNative.INTERS_FRESH_TIME);
                    FNative.INTERS_FRESH_TIME = null;
                }
            }, 1000);
        }
    };
    //插屏关闭
    FNative.intersClose = function () {
        FSDK.hideToLoad();
        if (FNative.intersCb.cb && FNative.intersCb.target) {
            FNative.intersCb.cb.call(FNative.intersCb.target);
        }
        FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
        FNative.freshInters();
        FLog.normal("插屏关闭");
    };
    //插屏失败
    FNative.intersFail = function () {
        if (FNative.intersCb.cb && FNative.intersCb.target) {
            FNative.intersCb.cb.call(FNative.intersCb.target);
        }
        FSDK.umengEvent(FConfig.UMENG_CONFIG.inter_fail, "0");
        FSDK.hideToLoad();
        FLog.normal("插屏失败");
    };
    //插屏点击
    FNative.intersClick = function () {
        FSDK.umengEvent(FConfig.UMENG_CONFIG.inter_click, "0");
        FLog.normal("插屏点击");
    };
    //Banner展示
    FNative.bannerShow = function () {
        FSDK.umengEvent(FConfig.UMENG_CONFIG.banner_show, "0");
        FLog.normal("banner展示");
    };
    //Banner点击
    FNative.bannerClick = function () {
        FSDK.umengEvent(FConfig.UMENG_CONFIG.banner_click, "0");
        FLog.normal("banner点击");
    };
    //微信授权失败
    FNative.wxLoginFail = function () {
        FSDK.hideToLoad();
    };
    //微信授权成功
    FNative.wxLoginSuc = function (user_info) {
        FSDK.hideToLoad();
        if (user_info.openid) {
            FSDK.saveData('WX_INFO', user_info);
            FSDK.reWxInfo(user_info);
        }
        else {
            FNative.wxLoginFail();
        }
    };
    /**********************************************  原生端返回  **************************************************/
    //视频回调
    FNative.videoCb = {
        cb: null,
        target: null,
        from: ""
    };
    //插屏回调
    FNative.intersCb = {
        cb: null,
        target: null
    };
    //视频观看
    FNative.AD_SHOW_CNT = {
        AD_SHOW: 0,
        AD_SUC: 0 //总观看完次数
    };
    //等待2秒再拉起
    FNative.isLoad = false;
    //次数
    FNative.AD_COUNT = {
        "video": 0,
        "inters": 0
    };
    //视频间隔时间
    FNative.VIDEO_FRESH_TIME = null;
    FNative.video_fresh_time = 30;
    //插屏间隔时间
    FNative.INTERS_FRESH_TIME = null;
    FNative.inters_fresh_time = 30;
    return FNative;
}());
window['FNative'] = FNative;

cc._RF.pop();