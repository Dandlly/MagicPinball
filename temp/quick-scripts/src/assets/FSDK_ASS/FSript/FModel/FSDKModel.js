"use strict";
cc._RF.push(module, 'aecfcOmfbxHJ6i0FFKQMW7+', 'FSDKModel');
// FSDK_ASS/FSript/FModel/FSDKModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FNetWorkCtrl_1 = require("../FNetWork/FNetWorkCtrl");
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var FLogic_1 = require("../FNetWork/FLogic");
var FGlobal_1 = require("./FGlobal");
var FToLoad_1 = require("./FToLoad");
var FPanelManager_1 = require("./FPanelManager");
var FTaskPage_1 = require("../FView/FTaskPage");
var FGrade_1 = require("../FView/FGrade");
var FTwoCard_1 = require("../FView/FTwoCard");
var FTransList_1 = require("../FView/FTransList");
var FTransPage_1 = require("../FView/FTransPage");
var FLeft_1 = require("../FView/FLeft");
var SimpleSDK_1 = require("../../../SDK/script/SimpleSDK");
var SimpleAd_1 = require("../../../SDK/script/SimpleAd");
var FSDKModel = /** @class */ (function () {
    function FSDKModel() {
    }
    //初始化socket
    FSDKModel.prototype.initSocket = function (cb, target) {
        FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
            cb: cb,
            target: target
        };
        FNetWorkConfig.server_ip_release = FNetWorkConfig.data.ip_release;
        FNetWorkConfig.server_ip_debug = FNetWorkConfig.data.ip_debug;
        FConfig.IS_DEBUG = FNetWorkConfig.data.isDebug;
        FSDK.object.initLocalStorage();
        FNetWorkCtrl_1.FNetWorkCtrl.getInstance().ConnetctServer(cb, target);
        //初始化加载页面跟飘字
        FSDK.object.loadToLoad();
        FSDK.object.loadToast();
        FSDK.getVerInfo();
        FLog.normal("这个是进来了");
    };
    ;
    //获取本地数据
    FSDKModel.prototype.initLocalStorage = function () {
        if (localStorage.getItem('setting')) {
            FGlobal_1.FGlobal.USER_INFO.setting = JSON.parse(localStorage.getItem('setting'));
        }
        if (localStorage.getItem('conf_hash')) {
            FConfig.conf_hash = localStorage.getItem('conf_hash');
            FLog.normal("什么   ", FConfig.conf_hash);
        }
        if (localStorage.getItem('conf')) {
            FConfig.conf = JSON.parse(localStorage.getItem('conf'));
            FLog.normal("看看配置   ", FConfig.conf);
        }
        if (localStorage.getItem('game_settings_info')) {
            FConfig.game_settings_info = JSON.parse(localStorage.getItem('game_settings_info'));
        }
    };
    //登录--初始户成功后才可以
    FSDKModel.prototype.login = function (pg, cb, target, aid) {
        if (aid === void 0) { aid = '1'; }
        FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
            cb: cb,
            target: target
        };
        FConfig.LOGIN_DATA.pg = pg;
        FConfig.LOGIN_DATA.aid = aid;
        FConfig.LOGIN_DATA.conf_hash = FConfig.conf_hash;
        ProtocolCode.C2S_reg_login.data.game_settings_info.hash = FConfig.game_settings_info.hash;
        ProtocolCode.C2S_reg_login.data.aid = FConfig.LOGIN_DATA.aid;
        ProtocolCode.C2S_reg_login.data.pg = pg;
        ProtocolCode.C2S_reg_login.data.info.pg = pg;
        var data = FNative.getSystemInfo() ? FNative.getSystemInfo() : FConfig.LOGIN_DATA;
        for (var i in ProtocolCode.C2S_reg_login.data) {
            if (i == 'info') {
                for (var j in ProtocolCode.C2S_reg_login.data.info) {
                    for (var k in data) {
                        if (j == k) {
                            ProtocolCode.C2S_reg_login.data.info[j] = data[k];
                        }
                    }
                }
            }
            else {
                for (var m in data) {
                    if (i == m) {
                        ProtocolCode.C2S_reg_login.data[i] = data[m];
                    }
                }
            }
        }
        FSocketSend_1.FSocketSend.C2S_reg_login();
    };
    //判定是活跃用户
    FSDKModel.prototype.setActiveUser = function () {
        FLog.normal("上报活跃   ", !FGlobal_1.FGlobal.USER_INFO.preferences['real']);
        if (FNative.AD_SHOW_CNT.AD_SUC >= FConfig.FSDK_CONF.REAL_USER.ad_num && FGlobal_1.FGlobal.USER_INFO.online_total >= FConfig.FSDK_CONF.REAL_USER.online_time) {
            if (!FGlobal_1.FGlobal.USER_INFO.preferences['real']) {
                FGlobal_1.FGlobal.USER_INFO.preferences['real'] = 1;
                FSocketSend_1.FSocketSend.C2S_preference('real', 1);
            }
        }
    };
    FSDKModel.prototype.umengEvent = function (key, value, isOne) {
        if (isOne === void 0) { isOne = false; }
        if (isOne) {
            if (!FGlobal_1.FGlobal.isOnUmeng(key)) {
                FNative.UmengOnEvemt(key, value);
                FGlobal_1.FGlobal.ONE_UMENG.push(key);
                FSDK.saveData("ONE_UMENG", FGlobal_1.FGlobal.ONE_UMENG);
            }
            return;
        }
        FNative.UmengOnEvemt(key, value);
    };
    //客户端数据存储 多参数与单参数
    FSDKModel.prototype.saveData = function (data1, data2) {
        if (data2 === void 0) { data2 = null; }
        if (data2) {
            FSocketSend_1.FSocketSend.C2S_preference(data1, data2);
        }
        else {
            FSocketSend_1.FSocketSend.C2S_preferences(data1);
        }
    };
    //修改credit 数量，来源，回调
    FSDKModel.prototype.setCredit = function (name, num, from) {
        if (name == 'credit') {
            FSocketSend_1.FSocketSend.C2S_update_credit(num, from);
        }
        else {
            FSocketSend_1.FSocketSend.C2S_update_coin(name, num, from);
        }
    };
    //注册用户信息回调
    FSDKModel.prototype.addUserInfoListen = function (cb, target) {
        cc.director.on(FEventID.FRESH_USERINFO, cb, target);
    };
    //移除用户信息回调
    FSDKModel.prototype.removeUserInfoListen = function (cb, target) {
        cc.director.off(FEventID.FRESH_USERINFO, cb, target);
    };
    //复制
    FSDKModel.prototype.copy = function (str) {
        FNative.copy(str);
    };
    //次日刷新回调注册
    FSDKModel.prototype.setNextDayListen = function (cb, target) {
        FLogic_1.FLogic.getInstance().cbList[FEventID.NEXT_DAY] = {
            cb: cb,
            target: target
        };
    };
    //预加载转圈页面
    FSDKModel.prototype.loadToLoad = function () {
        FPanelManager_1.FPanelManager.loadPage('FToLoad', function (panel) {
            FGlobal_1.FGlobal.ToLoad = panel;
        }, this);
    };
    //打开加载转圈
    FSDKModel.prototype.showToLoad = function (msg, time, showTime) {
        if (msg === void 0) { msg = "Loading"; }
        if (time === void 0) { time = 0; }
        if (showTime === void 0) { showTime = false; }
        if (!FGlobal_1.FGlobal.ToLoad)
            return;
        FGlobal_1.FGlobal.ToLoad.parent = cc.director.getScene();
        FGlobal_1.FGlobal.ToLoad.getComponent(FToLoad_1.default).setMsg(msg, time, showTime);
    };
    //关闭加载转圈
    FSDKModel.prototype.hideToLoad = function () {
        if (FGlobal_1.FGlobal.ToLoad && FGlobal_1.FGlobal.ToLoad.parent) {
            FGlobal_1.FGlobal.ToLoad.parent = null;
        }
    };
    //预加载toast
    FSDKModel.prototype.loadToast = function () {
        FPanelManager_1.FPanelManager.loadPage('FToast', function (panel) {
            for (var i = 0; i < 10; i++) {
                var toast = cc.instantiate(panel);
                FGlobal_1.FGlobal.piaoPool.put(toast);
            }
        }, this);
    };
    //展示toast
    FSDKModel.prototype.showToast = function (msg) {
        FGlobal_1.FGlobal.Toast(msg);
    };
    //打开邀请界面
    FSDKModel.prototype.showInvityPage = function (parent) {
        FPanelManager_1.FPanelManager.loadPage('FInvityPage', function (panel) {
            panel.parent = parent;
        }, this);
    };
    //打开邀请任务界面
    FSDKModel.prototype.showTaskPage = function (parent, list) {
        FPanelManager_1.FPanelManager.loadPage('FTaskPage', function (panel) {
            panel.parent = parent;
            panel.getComponent(FTaskPage_1.FTaskPage).setData(list);
        }, this);
    };
    //打开签到任务界面
    FSDKModel.prototype.showSignTaskPage = function (parent) {
        FPanelManager_1.FPanelManager.loadPage('FSignPage', function (panel) {
            panel.parent = parent;
        }, this);
    };
    //打开评星页面
    FSDKModel.prototype.showGrade = function (parent, cb, target) {
        if (!FGlobal_1.FGlobal.USER_INFO.isGrade && !FGlobal_1.FGlobal.USER_INFO.isBlack && FGlobal_1.FGlobal.USER_INFO.isFlag) {
            FPanelManager_1.FPanelManager.load('FGrade', parent, function (panel) {
                panel.getComponent(FGrade_1.FGrade).setCb(cb, target);
            });
        }
    };
    //展示跑马灯
    FSDKModel.prototype.showMarQuee = function (parent) {
        if (!FGlobal_1.FGlobal.USER_INFO.isBlack && FGlobal_1.FGlobal.USER_INFO.isFlag) {
            FPanelManager_1.FPanelManager.loadPage('FMarquee', function (panel) {
                var marQuee = cc.instantiate(panel);
                marQuee.parent = parent;
            }, this, false);
        }
    };
    //展示视频
    FSDKModel.prototype.openVideo = function (from, cb, target) {
        if (FNative.AD_COUNT.video >= FConfig.FSDK_CONF.AD_CONF.video_limit) {
            FSDK.showToast("Video limit reached today");
            return;
        }
        if (FNative.VIDEO_FRESH_TIME) {
            FSDK.showToast("Video is on CD\uFF0Cplease wait for " + FNative.video_fresh_time + " seconds");
            return;
        }
        FNative.isLoad = false;
        FNative.videoCb.cb = cb;
        FNative.videoCb.target = target;
        FNative.videoCb.from = from;
        FNative.openVideo();
    };
    //展示插屏
    FSDKModel.prototype.openInters = function (cb, target) {
        FNative.intersCb.cb = cb;
        FNative.intersCb.target = target;
        if (FNative.AD_COUNT.inters >= FConfig.FSDK_CONF.AD_CONF.inters_limit[FSDK.getUserType()]) {
            if (FNative.intersCb.cb && FNative.intersCb.target) {
                FNative.intersCb.cb.call(FNative.intersCb.target);
            }
            return;
        }
        if (FNative.INTERS_FRESH_TIME) {
            if (FNative.intersCb.cb && FNative.intersCb.target) {
                FNative.intersCb.cb.call(FNative.intersCb.target);
            }
            FLog.normal("\u8FD8\u6709" + FNative.inters_fresh_time + "\u79D2\u5237\u65B0");
            return;
        }
        FNative.openInters();
    };
    //打开banner
    FSDKModel.prototype.openBanner = function (id) {
        if (!cc.sys.isNative)
            return;
        get_simple_ad().showOrReShowBanner(SimpleAd_1.default.BANNER_BOTTOM);
    };
    //关闭banner
    FSDKModel.prototype.closeBanner = function () {
        if (!cc.sys.isNative)
            return;
        get_simple_ad().hideBanner();
    };
    //视频上报
    FSDKModel.prototype.adEvent = function (sdk, type) {
        FSocketSend_1.FSocketSend.C2S_ad_event(sdk, type);
    };
    //获取服务器当前时间
    FSDKModel.prototype.getNowTime = function () {
        return FGlobal_1.FGlobal.USER_INFO.now;
    };
    //返回新老用户
    FSDKModel.prototype.getUserType = function () {
        if (FGlobal_1.FGlobal.USER_INFO.now - FGlobal_1.FGlobal.USER_INFO.reg_time >= 24 * 60 * 60) {
            return "old";
        }
        return "new";
    };
    //国内获取兑换列表已经兑换记录
    FSDKModel.prototype.getTransList = function (cb, target, type) {
        if (type === void 0) { type = "task"; }
        FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_trans_history] = {
            cb: cb,
            target: target
        };
        FSocketSend_1.FSocketSend.C2S_trans_history(type);
    };
    //登录wx
    FSDKModel.prototype.wxLogin = function (cb, target) {
        FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_wx_info] = {
            cb: cb,
            target: target
        };
        FNative.wxLogin();
    };
    //返回wx信息
    FSDKModel.prototype.reWxInfo = function (user_info) {
        if (FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_wx_info]) {
            FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_wx_info].cb(FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_wx_info].target, user_info);
        }
    };
    //获取注册人数
    FSDKModel.prototype.getRegCnt = function (code, cb) {
        FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt] = {
            cb: cb,
            target: null
        };
        FSocketSend_1.FSocketSend.C2S_pg_user_cnt([code]);
    };
    //打开两张卡页面
    FSDKModel.prototype.showTwoCard = function (type, parent) {
        FPanelManager_1.FPanelManager.loadPage('FTwoCard', function (panel) {
            panel.parent = parent;
            panel.getComponent(FTwoCard_1.FTwoCard).setType(type);
        }, this);
    };
    //打开卡片列表
    FSDKModel.prototype.showTransList = function (parent, type, icon) {
        if (type === void 0) { type = 0; }
        if (icon === void 0) { icon = null; }
        FPanelManager_1.FPanelManager.loadPage('FTransList', function (panel) {
            panel.parent = parent;
            panel.getComponent(FTransList_1.FTransList).setTask(type, icon);
        }, this);
    };
    //打开卡片换
    FSDKModel.prototype.showTransPage = function (parent, data, cb, type, isCoin, icon) {
        if (type === void 0) { type = 'invite'; }
        if (isCoin === void 0) { isCoin = true; }
        if (icon === void 0) { icon = null; }
        FPanelManager_1.FPanelManager.load("FTransPage", parent, function (panel) {
            panel.getComponent(FTransPage_1.FTransPage).setData(data, cb, type, isCoin, icon);
        }.bind(this));
    };
    //开始换
    FSDKModel.prototype.getTrans = function (id, email, phoen, type, cb) {
        FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_trans] = {
            cb: cb,
            target: null
        };
        FSocketSend_1.FSocketSend.C2S_trans(id, email, phoen, type);
    };
    //展示侧边栏
    FSDKModel.prototype.showLeft = function (parent, padding, cb, type, icon) {
        if (type === void 0) { type = 0; }
        if (icon === void 0) { icon = null; }
        FPanelManager_1.FPanelManager.loadPage('FLeft', function (panel) {
            panel.parent = parent;
            panel.getComponent(FLeft_1.FLeft).setData(padding, cb, type, icon);
        }, this);
    };
    //上报任务进度
    FSDKModel.prototype.setTask = function (num) {
        FGlobal_1.FGlobal.USER_INFO.task = num;
    };
    //获取卡
    FSDKModel.prototype.getCard = function (type) {
        return FGlobal_1.FGlobal.getCardType(type);
    };
    //获取金币难度
    FSDKModel.prototype.getCreditDif = function () {
        for (var i = 0; i < FConfig.FSDK_CONF.CREDIT_DIF.length; i++) {
            if (FGlobal_1.FGlobal.USER_INFO.credit >= FConfig.FSDK_CONF.CREDIT_DIF[i]) {
                return i;
            }
        }
        return FConfig.FSDK_CONF.CREDIT_DIF.length - 1;
    };
    //通用按钮点击音效
    FSDKModel.prototype.setBtnSound = function (cb) {
        if (!cc.Button.prototype._soundOn) {
            cc.Button.prototype.touchEndClone = cc.Button.prototype._onTouchEnded;
            cc.Button.prototype._soundOn = true;
            cc.Button.prototype._onTouchEnded = function (event) {
                if (this.interactable && this.enabledInHierarchy && this._pressed && this._soundOn == true) {
                    if (cb) {
                        cb(event);
                    }
                }
                this.touchEndClone(event);
            };
        }
    };
    //获取任意奖励
    FSDKModel.prototype.getRandomReward = function () {
        return FGlobal_1.FGlobal.getRandomReward();
    };
    //初始化SDK
    FSDKModel.prototype.initSZSDK = function () {
        FLog.normal("有没有进来2222");
        SimpleSDK_1.default.instance();
        SimpleSDK_1.default.analytics_instance();
        SimpleSDK_1.default.ad_instance().setRewardListener(new RewardedVideoListener());
        SimpleSDK_1.default.ad_instance().setInterListener(new InterstitialAdListener());
        SimpleSDK_1.default.ad_instance().setBannerListener(new BannerListener());
    };
    return FSDKModel;
}());
window['FSDKModel'] = FSDKModel;
//激励广告回调的listener
var RewardedVideoListener = /** @class */ (function () {
    function RewardedVideoListener() {
    }
    RewardedVideoListener.prototype.onRewardedVideoAdPlayStart = function (placementId, callbackInfo) {
        FLog.normal("demo reward play start" + placementId + " " + callbackInfo);
        FNative.videoShow();
    };
    RewardedVideoListener.prototype.onRewardedVideoAdPlayFailed = function (placementId, errorInfo, callbackInfo) {
        FNative.videoFail();
        FLog.normal("demo reward play fail" + placementId + " " + callbackInfo);
    };
    RewardedVideoListener.prototype.onRewardedVideoAdClosed = function (placementId, callbackInfo) {
        FNative.videoSuc();
        FLog.normal("demo reward close" + placementId + " " + callbackInfo);
    };
    RewardedVideoListener.prototype.onRewardedVideoAdPlayClicked = function (placementId, callbackInfo) {
        FNative.videoClick();
        FLog.normal("demo reward play click" + placementId + " " + callbackInfo);
    };
    return RewardedVideoListener;
}());
//插屏广告的回调实现
var InterstitialAdListener = /** @class */ (function () {
    function InterstitialAdListener() {
    }
    InterstitialAdListener.prototype.onInterstitialAdShow = function (adEntry, callbackInfo) {
        FNative.intersShow();
        FLog.normal("demo inter show" + adEntry + " " + callbackInfo);
    };
    InterstitialAdListener.prototype.onInterstitialAdClose = function (adEntry, callbackInfo) {
        FNative.intersClose();
        FLog.normal("demo inter close" + adEntry + " " + callbackInfo);
    };
    InterstitialAdListener.prototype.onInterstitialAdClick = function (adEntry, callbackInfo) {
        FNative.intersClick();
        FLog.normal("demo inter click" + adEntry + " " + callbackInfo);
    };
    return InterstitialAdListener;
}());
//banner广告的回调实现
var BannerListener = /** @class */ (function () {
    function BannerListener() {
    }
    BannerListener.prototype.onBannerAdShow = function (placementId, callbackInfo) {
        FNative.bannerShow();
        FLog.normal("demo banner show" + placementId + " " + callbackInfo);
    };
    BannerListener.prototype.onBannerAdClick = function (placementId, callbackInfo) {
        FNative.bannerClick();
        FLog.normal("demo banner click" + placementId + " " + callbackInfo);
    };
    return BannerListener;
}());

cc._RF.pop();