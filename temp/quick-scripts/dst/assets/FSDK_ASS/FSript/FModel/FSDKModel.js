
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FModel/FSDKModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk1vZGVsXFxGU0RLTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBdUQ7QUFDdkQsdURBQXNEO0FBQ3RELDZDQUE0QztBQUM1QyxxQ0FBb0M7QUFDcEMscUNBQWdDO0FBQ2hDLGlEQUFnRDtBQUNoRCxnREFBK0M7QUFDL0MsMENBQXlDO0FBQ3pDLDhDQUE2QztBQUM3QyxrREFBaUQ7QUFDakQsa0RBQWlEO0FBQ2pELHdDQUF1QztBQUN2QywyREFBc0Q7QUFFdEQseURBQW9EO0FBRXBEO0lBQUE7SUE4V0EsQ0FBQztJQTdXRyxXQUFXO0lBQ1gsOEJBQVUsR0FBVixVQUFXLEVBQUUsRUFBRSxNQUFNO1FBQ2pCLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHO1lBQ2xELEVBQUUsRUFBRSxFQUFFO1lBQ04sTUFBTSxFQUFFLE1BQU07U0FDakIsQ0FBQztRQUNGLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsRSxjQUFjLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9CLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxZQUFZO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMs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QUFtQixFQUFFLFlBQWdCO1FBQ2pELE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGTmV0V29ya0N0cmwgfSBmcm9tIFwiLi4vRk5ldFdvcmsvRk5ldFdvcmtDdHJsXCJcclxuaW1wb3J0IHsgRlNvY2tldFNlbmQgfSBmcm9tIFwiLi4vRk5ldFdvcmsvRlNvY2tldFNlbmRcIjtcclxuaW1wb3J0IHsgRkxvZ2ljIH0gZnJvbSBcIi4uL0ZOZXRXb3JrL0ZMb2dpY1wiO1xyXG5pbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4vRkdsb2JhbFwiO1xyXG5pbXBvcnQgRlRvTG9hZCBmcm9tIFwiLi9GVG9Mb2FkXCI7XHJcbmltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi9GUGFuZWxNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEZUYXNrUGFnZSB9IGZyb20gXCIuLi9GVmlldy9GVGFza1BhZ2VcIjtcclxuaW1wb3J0IHsgRkdyYWRlIH0gZnJvbSBcIi4uL0ZWaWV3L0ZHcmFkZVwiO1xyXG5pbXBvcnQgeyBGVHdvQ2FyZCB9IGZyb20gXCIuLi9GVmlldy9GVHdvQ2FyZFwiO1xyXG5pbXBvcnQgeyBGVHJhbnNMaXN0IH0gZnJvbSBcIi4uL0ZWaWV3L0ZUcmFuc0xpc3RcIjtcclxuaW1wb3J0IHsgRlRyYW5zUGFnZSB9IGZyb20gXCIuLi9GVmlldy9GVHJhbnNQYWdlXCI7XHJcbmltcG9ydCB7IEZMZWZ0IH0gZnJvbSBcIi4uL0ZWaWV3L0ZMZWZ0XCI7XHJcbmltcG9ydCBTaW1wbGVTREsgZnJvbSBcIi4uLy4uLy4uL1NESy9zY3JpcHQvU2ltcGxlU0RLXCI7XHJcbmltcG9ydCAqIGFzIFNESyBmcm9tICcuLi8uLi8uLi9TREsvc2NyaXB0L1NpbXBsZUludGVyZmFjZSdcclxuaW1wb3J0IFNpbXBsZUFkIGZyb20gJy4uLy4uLy4uL1NESy9zY3JpcHQvU2ltcGxlQWQnO1xyXG5cclxuY2xhc3MgRlNES01vZGVsIHtcclxuICAgIC8v5Yid5aeL5YyWc29ja2V0XHJcbiAgICBpbml0U29ja2V0KGNiLCB0YXJnZXQpIHtcclxuICAgICAgICBGTG9naWMuZ2V0SW5zdGFuY2UoKS5jYkxpc3RbRkV2ZW50SUQuUzJDX3JlZ19sb2dpbl0gPSB7XHJcbiAgICAgICAgICAgIGNiOiBjYixcclxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcclxuICAgICAgICB9O1xyXG4gICAgICAgIEZOZXRXb3JrQ29uZmlnLnNlcnZlcl9pcF9yZWxlYXNlID0gRk5ldFdvcmtDb25maWcuZGF0YS5pcF9yZWxlYXNlO1xyXG4gICAgICAgIEZOZXRXb3JrQ29uZmlnLnNlcnZlcl9pcF9kZWJ1ZyA9IEZOZXRXb3JrQ29uZmlnLmRhdGEuaXBfZGVidWc7XHJcbiAgICAgICAgRkNvbmZpZy5JU19ERUJVRyA9IEZOZXRXb3JrQ29uZmlnLmRhdGEuaXNEZWJ1ZztcclxuICAgICAgICBGU0RLLm9iamVjdC5pbml0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgRk5ldFdvcmtDdHJsLmdldEluc3RhbmNlKCkuQ29ubmV0Y3RTZXJ2ZXIoY2IsIHRhcmdldCk7XHJcbiAgICAgICAgLy/liJ3lp4vljJbliqDovb3pobXpnaLot5/po5jlrZdcclxuICAgICAgICBGU0RLLm9iamVjdC5sb2FkVG9Mb2FkKCk7XHJcbiAgICAgICAgRlNESy5vYmplY3QubG9hZFRvYXN0KCk7XHJcbiAgICAgICAgRlNESy5nZXRWZXJJbmZvKCk7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCLov5nkuKrmmK/ov5vmnaXkuoZcIilcclxuICAgIH07XHJcbiAgICAvL+iOt+WPluacrOWcsOaVsOaNrlxyXG4gICAgaW5pdExvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHRpbmcnKSkge1xyXG4gICAgICAgICAgICBGR2xvYmFsLlVTRVJfSU5GTy5zZXR0aW5nID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2V0dGluZycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25mX2hhc2gnKSkge1xyXG4gICAgICAgICAgICBGQ29uZmlnLmNvbmZfaGFzaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25mX2hhc2gnKTtcclxuICAgICAgICAgICAgRkxvZy5ub3JtYWwoXCLku4DkuYggICBcIiwgRkNvbmZpZy5jb25mX2hhc2gpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZicpKSB7XHJcbiAgICAgICAgICAgIEZDb25maWcuY29uZiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbmYnKSk7XHJcbiAgICAgICAgICAgIEZMb2cubm9ybWFsKFwi55yL55yL6YWN572uICAgXCIsIEZDb25maWcuY29uZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZV9zZXR0aW5nc19pbmZvJykpIHtcclxuICAgICAgICAgICAgRkNvbmZpZy5nYW1lX3NldHRpbmdzX2luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lX3NldHRpbmdzX2luZm8nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/nmbvlvZUtLeWIneWni+aIt+aIkOWKn+WQjuaJjeWPr+S7pVxyXG4gICAgbG9naW4ocGcsIGNiLCB0YXJnZXQsIGFpZCA9ICcxJykge1xyXG4gICAgICAgIEZMb2dpYy5nZXRJbnN0YW5jZSgpLmNiTGlzdFtGRXZlbnRJRC5TMkNfcmVnX2xvZ2luXSA9IHtcclxuICAgICAgICAgICAgY2I6IGNiLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgIH1cclxuICAgICAgICBGQ29uZmlnLkxPR0lOX0RBVEEucGcgPSBwZztcclxuICAgICAgICBGQ29uZmlnLkxPR0lOX0RBVEEuYWlkID0gYWlkO1xyXG4gICAgICAgIEZDb25maWcuTE9HSU5fREFUQS5jb25mX2hhc2ggPSBGQ29uZmlnLmNvbmZfaGFzaDtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3JlZ19sb2dpbi5kYXRhLmdhbWVfc2V0dGluZ3NfaW5mby5oYXNoID0gRkNvbmZpZy5nYW1lX3NldHRpbmdzX2luZm8uaGFzaDtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3JlZ19sb2dpbi5kYXRhLmFpZCA9IEZDb25maWcuTE9HSU5fREFUQS5haWQ7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU19yZWdfbG9naW4uZGF0YS5wZyA9IHBnO1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfcmVnX2xvZ2luLmRhdGEuaW5mby5wZyA9IHBnO1xyXG4gICAgICAgIGxldCBkYXRhID0gRk5hdGl2ZS5nZXRTeXN0ZW1JbmZvKCkgPyBGTmF0aXZlLmdldFN5c3RlbUluZm8oKSA6IEZDb25maWcuTE9HSU5fREFUQTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIFByb3RvY29sQ29kZS5DMlNfcmVnX2xvZ2luLmRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gJ2luZm8nKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIFByb3RvY29sQ29kZS5DMlNfcmVnX2xvZ2luLmRhdGEuaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm90b2NvbENvZGUuQzJTX3JlZ19sb2dpbi5kYXRhLmluZm9bal0gPSBkYXRhW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm90b2NvbENvZGUuQzJTX3JlZ19sb2dpbi5kYXRhW2ldID0gZGF0YVttXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgRlNvY2tldFNlbmQuQzJTX3JlZ19sb2dpbigpO1xyXG4gICAgfVxyXG4gICAgLy/liKTlrprmmK/mtLvot4PnlKjmiLdcclxuICAgIHNldEFjdGl2ZVVzZXIoKSB7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCLkuIrmiqXmtLvot4MgICBcIiwgIUZHbG9iYWwuVVNFUl9JTkZPLnByZWZlcmVuY2VzWydyZWFsJ10pXHJcbiAgICAgICAgaWYgKEZOYXRpdmUuQURfU0hPV19DTlQuQURfU1VDID49IEZDb25maWcuRlNES19DT05GLlJFQUxfVVNFUi5hZF9udW0gJiYgRkdsb2JhbC5VU0VSX0lORk8ub25saW5lX3RvdGFsID49IEZDb25maWcuRlNES19DT05GLlJFQUxfVVNFUi5vbmxpbmVfdGltZSkge1xyXG4gICAgICAgICAgICBpZiAoIUZHbG9iYWwuVVNFUl9JTkZPLnByZWZlcmVuY2VzWydyZWFsJ10pIHtcclxuICAgICAgICAgICAgICAgIEZHbG9iYWwuVVNFUl9JTkZPLnByZWZlcmVuY2VzWydyZWFsJ10gPSAxO1xyXG4gICAgICAgICAgICAgICAgRlNvY2tldFNlbmQuQzJTX3ByZWZlcmVuY2UoJ3JlYWwnLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVtZW5nRXZlbnQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGlzT25lID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoaXNPbmUpIHtcclxuICAgICAgICAgICAgaWYgKCFGR2xvYmFsLmlzT25VbWVuZyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBGTmF0aXZlLlVtZW5nT25FdmVtdChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIEZHbG9iYWwuT05FX1VNRU5HLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgIEZTREsuc2F2ZURhdGEoXCJPTkVfVU1FTkdcIiwgRkdsb2JhbC5PTkVfVU1FTkcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgRk5hdGl2ZS5VbWVuZ09uRXZlbXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvL+WuouaIt+err+aVsOaNruWtmOWCqCDlpJrlj4LmlbDkuI7ljZXlj4LmlbBcclxuICAgIHNhdmVEYXRhKGRhdGExLCBkYXRhMiA9IG51bGwpIHtcclxuICAgICAgICBpZiAoZGF0YTIpIHtcclxuICAgICAgICAgICAgRlNvY2tldFNlbmQuQzJTX3ByZWZlcmVuY2UoZGF0YTEsIGRhdGEyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIEZTb2NrZXRTZW5kLkMyU19wcmVmZXJlbmNlcyhkYXRhMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/kv67mlLljcmVkaXQg5pWw6YeP77yM5p2l5rqQ77yM5Zue6LCDXHJcbiAgICBzZXRDcmVkaXQobmFtZSwgbnVtLCBmcm9tKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gJ2NyZWRpdCcpIHtcclxuICAgICAgICAgICAgRlNvY2tldFNlbmQuQzJTX3VwZGF0ZV9jcmVkaXQobnVtLCBmcm9tKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIEZTb2NrZXRTZW5kLkMyU191cGRhdGVfY29pbihuYW1lLCBudW0sIGZyb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5rOo5YaM55So5oi35L+h5oGv5Zue6LCDXHJcbiAgICBhZGRVc2VySW5mb0xpc3RlbihjYiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oRkV2ZW50SUQuRlJFU0hfVVNFUklORk8sIGNiLCB0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgLy/np7vpmaTnlKjmiLfkv6Hmga/lm57osINcclxuICAgIHJlbW92ZVVzZXJJbmZvTGlzdGVuKGNiLCB0YXJnZXQpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5vZmYoRkV2ZW50SUQuRlJFU0hfVVNFUklORk8sIGNiLCB0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgLy/lpI3liLZcclxuICAgIGNvcHkoc3RyKSB7XHJcbiAgICAgICAgRk5hdGl2ZS5jb3B5KHN0cik7XHJcbiAgICB9XHJcbiAgICAvL+asoeaXpeWIt+aWsOWbnuiwg+azqOWGjFxyXG4gICAgc2V0TmV4dERheUxpc3RlbihjYiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgRkxvZ2ljLmdldEluc3RhbmNlKCkuY2JMaXN0W0ZFdmVudElELk5FWFRfREFZXSA9IHtcclxuICAgICAgICAgICAgY2I6IGNiLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6aKE5Yqg6L296L2s5ZyI6aG16Z2iXHJcbiAgICBsb2FkVG9Mb2FkKCkge1xyXG4gICAgICAgIEZQYW5lbE1hbmFnZXIubG9hZFBhZ2UoJ0ZUb0xvYWQnLCBmdW5jdGlvbiAocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgRkdsb2JhbC5Ub0xvYWQgPSBwYW5lbDtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfVxyXG4gICAgLy/miZPlvIDliqDovb3ovazlnIhcclxuICAgIHNob3dUb0xvYWQobXNnID0gXCJMb2FkaW5nXCIsIHRpbWUgPSAwLCBzaG93VGltZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCFGR2xvYmFsLlRvTG9hZCkgcmV0dXJuO1xyXG4gICAgICAgIEZHbG9iYWwuVG9Mb2FkLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgRkdsb2JhbC5Ub0xvYWQuZ2V0Q29tcG9uZW50KEZUb0xvYWQpLnNldE1zZyhtc2csIHRpbWUsIHNob3dUaW1lKVxyXG4gICAgfVxyXG4gICAgLy/lhbPpl63liqDovb3ovazlnIhcclxuICAgIGhpZGVUb0xvYWQoKSB7XHJcbiAgICAgICAgaWYgKEZHbG9iYWwuVG9Mb2FkICYmIEZHbG9iYWwuVG9Mb2FkLnBhcmVudCkge1xyXG4gICAgICAgICAgICBGR2xvYmFsLlRvTG9hZC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6aKE5Yqg6L29dG9hc3RcclxuICAgIGxvYWRUb2FzdCgpIHtcclxuICAgICAgICBGUGFuZWxNYW5hZ2VyLmxvYWRQYWdlKCdGVG9hc3QnLCBmdW5jdGlvbiAocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9hc3QgPSBjYy5pbnN0YW50aWF0ZShwYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBGR2xvYmFsLnBpYW9Qb29sLnB1dCh0b2FzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIC8v5bGV56S6dG9hc3RcclxuICAgIHNob3dUb2FzdChtc2cpIHtcclxuICAgICAgICBGR2xvYmFsLlRvYXN0KG1zZyk7XHJcbiAgICB9XHJcbiAgICAvL+aJk+W8gOmCgOivt+eVjOmdolxyXG4gICAgc2hvd0ludml0eVBhZ2UocGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5sb2FkUGFnZSgnRkludml0eVBhZ2UnLCBmdW5jdGlvbiAocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgcGFuZWwucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy/miZPlvIDpgoDor7fku7vliqHnlYzpnaJcclxuICAgIHNob3dUYXNrUGFnZShwYXJlbnQ6IGNjLk5vZGUsIGxpc3QpIHtcclxuICAgICAgICBGUGFuZWxNYW5hZ2VyLmxvYWRQYWdlKCdGVGFza1BhZ2UnLCBmdW5jdGlvbiAocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgcGFuZWwucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBwYW5lbC5nZXRDb21wb25lbnQoRlRhc2tQYWdlKS5zZXREYXRhKGxpc3QpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy/miZPlvIDnrb7liLDku7vliqHnlYzpnaJcclxuICAgIHNob3dTaWduVGFza1BhZ2UocGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5sb2FkUGFnZSgnRlNpZ25QYWdlJywgZnVuY3Rpb24gKHBhbmVsOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhbmVsLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIC8v5omT5byA6K+E5pif6aG16Z2iXHJcbiAgICBzaG93R3JhZGUocGFyZW50OiBjYy5Ob2RlLCBjYiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFGR2xvYmFsLlVTRVJfSU5GTy5pc0dyYWRlICYmICFGR2xvYmFsLlVTRVJfSU5GTy5pc0JsYWNrICYmIEZHbG9iYWwuVVNFUl9JTkZPLmlzRmxhZykge1xyXG4gICAgICAgICAgICBGUGFuZWxNYW5hZ2VyLmxvYWQoJ0ZHcmFkZScsIHBhcmVudCwgZnVuY3Rpb24gKHBhbmVsOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5nZXRDb21wb25lbnQoRkdyYWRlKS5zZXRDYihjYiwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/lsZXnpLrot5Hpqaznga9cclxuICAgIHNob3dNYXJRdWVlKHBhcmVudDogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmICghRkdsb2JhbC5VU0VSX0lORk8uaXNCbGFjayAmJiBGR2xvYmFsLlVTRVJfSU5GTy5pc0ZsYWcpIHtcclxuICAgICAgICAgICAgRlBhbmVsTWFuYWdlci5sb2FkUGFnZSgnRk1hcnF1ZWUnLCBmdW5jdGlvbiAocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXJRdWVlID0gY2MuaW5zdGFudGlhdGUocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgbWFyUXVlZS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgIH0sIHRoaXMsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lsZXnpLrop4bpopFcclxuICAgIG9wZW5WaWRlbyhmcm9tLCBjYiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKEZOYXRpdmUuQURfQ09VTlQudmlkZW8gPj0gRkNvbmZpZy5GU0RLX0NPTkYuQURfQ09ORi52aWRlb19saW1pdCkge1xyXG4gICAgICAgICAgICBGU0RLLnNob3dUb2FzdChcIlZpZGVvIGxpbWl0IHJlYWNoZWQgdG9kYXlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEZOYXRpdmUuVklERU9fRlJFU0hfVElNRSkge1xyXG4gICAgICAgICAgICBGU0RLLnNob3dUb2FzdChgVmlkZW8gaXMgb24gQ0TvvIxwbGVhc2Ugd2FpdCBmb3IgJHtGTmF0aXZlLnZpZGVvX2ZyZXNoX3RpbWV9IHNlY29uZHNgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGTmF0aXZlLmlzTG9hZCA9IGZhbHNlO1xyXG4gICAgICAgIEZOYXRpdmUudmlkZW9DYi5jYiA9IGNiO1xyXG4gICAgICAgIEZOYXRpdmUudmlkZW9DYi50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgRk5hdGl2ZS52aWRlb0NiLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIEZOYXRpdmUub3BlblZpZGVvKCk7XHJcbiAgICB9XHJcbiAgICAvL+WxleekuuaPkuWxj1xyXG4gICAgb3BlbkludGVycyhjYiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgRk5hdGl2ZS5pbnRlcnNDYi5jYiA9IGNiO1xyXG4gICAgICAgIEZOYXRpdmUuaW50ZXJzQ2IudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIGlmIChGTmF0aXZlLkFEX0NPVU5ULmludGVycyA+PSBGQ29uZmlnLkZTREtfQ09ORi5BRF9DT05GLmludGVyc19saW1pdFtGU0RLLmdldFVzZXJUeXBlKCldKSB7XHJcbiAgICAgICAgICAgIGlmIChGTmF0aXZlLmludGVyc0NiLmNiICYmIEZOYXRpdmUuaW50ZXJzQ2IudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBGTmF0aXZlLmludGVyc0NiLmNiLmNhbGwoRk5hdGl2ZS5pbnRlcnNDYi50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEZOYXRpdmUuSU5URVJTX0ZSRVNIX1RJTUUpIHtcclxuICAgICAgICAgICAgaWYgKEZOYXRpdmUuaW50ZXJzQ2IuY2IgJiYgRk5hdGl2ZS5pbnRlcnNDYi50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIEZOYXRpdmUuaW50ZXJzQ2IuY2IuY2FsbChGTmF0aXZlLmludGVyc0NiLnRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRkxvZy5ub3JtYWwoYOi/mOaciSR7Rk5hdGl2ZS5pbnRlcnNfZnJlc2hfdGltZX3np5LliLfmlrBgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGTmF0aXZlLm9wZW5JbnRlcnMoKTtcclxuICAgIH1cclxuICAgIC8v5omT5byAYmFubmVyXHJcbiAgICBvcGVuQmFubmVyKGlkKSB7XHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHJldHVybjtcclxuICAgICAgICBnZXRfc2ltcGxlX2FkKCkuc2hvd09yUmVTaG93QmFubmVyKFNpbXBsZUFkLkJBTk5FUl9CT1RUT00pO1xyXG4gICAgfVxyXG4gICAgLy/lhbPpl61iYW5uZXJcclxuICAgIGNsb3NlQmFubmVyKCkge1xyXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSByZXR1cm47XHJcbiAgICAgICAgZ2V0X3NpbXBsZV9hZCgpLmhpZGVCYW5uZXIoKTtcclxuICAgIH1cclxuICAgIC8v6KeG6aKR5LiK5oqlXHJcbiAgICBhZEV2ZW50KHNkaywgdHlwZSkge1xyXG4gICAgICAgIEZTb2NrZXRTZW5kLkMyU19hZF9ldmVudChzZGssIHR5cGUpO1xyXG4gICAgfVxyXG4gICAgLy/ojrflj5bmnI3liqHlmajlvZPliY3ml7bpl7RcclxuICAgIGdldE5vd1RpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIEZHbG9iYWwuVVNFUl9JTkZPLm5vdztcclxuICAgIH1cclxuICAgIC8v6L+U5Zue5paw6ICB55So5oi3XHJcbiAgICBnZXRVc2VyVHlwZSgpIHtcclxuICAgICAgICBpZiAoRkdsb2JhbC5VU0VSX0lORk8ubm93IC0gRkdsb2JhbC5VU0VSX0lORk8ucmVnX3RpbWUgPj0gMjQgKiA2MCAqIDYwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm9sZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJuZXdcIjtcclxuICAgIH1cclxuICAgIC8v5Zu95YaF6I635Y+W5YWR5o2i5YiX6KGo5bey57uP5YWR5o2i6K6w5b2VXHJcbiAgICBnZXRUcmFuc0xpc3QoY2IsIHRhcmdldCwgdHlwZSA9IFwidGFza1wiKSB7XHJcbiAgICAgICAgRkxvZ2ljLmdldEluc3RhbmNlKCkuY2JMaXN0W0ZFdmVudElELlMyQ190cmFuc19oaXN0b3J5XSA9IHtcclxuICAgICAgICAgICAgY2I6IGNiLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgRlNvY2tldFNlbmQuQzJTX3RyYW5zX2hpc3RvcnkodHlwZSk7XHJcbiAgICB9XHJcbiAgICAvL+eZu+W9lXd4XHJcbiAgICB3eExvZ2luKGNiLCB0YXJnZXQpIHtcclxuICAgICAgICBGTG9naWMuZ2V0SW5zdGFuY2UoKS5jYkxpc3RbRkV2ZW50SUQuUzJDX3d4X2luZm9dID0ge1xyXG4gICAgICAgICAgICBjYjogY2IsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBGTmF0aXZlLnd4TG9naW4oKTtcclxuICAgIH1cclxuICAgIC8v6L+U5Zued3jkv6Hmga9cclxuICAgIHJlV3hJbmZvKHVzZXJfaW5mbykge1xyXG4gICAgICAgIGlmIChGTG9naWMuZ2V0SW5zdGFuY2UoKS5jYkxpc3RbRkV2ZW50SUQuUzJDX3d4X2luZm9dKSB7XHJcbiAgICAgICAgICAgIEZMb2dpYy5nZXRJbnN0YW5jZSgpLmNiTGlzdFtGRXZlbnRJRC5TMkNfd3hfaW5mb10uY2IoRkxvZ2ljLmdldEluc3RhbmNlKCkuY2JMaXN0W0ZFdmVudElELlMyQ193eF9pbmZvXS50YXJnZXQsIHVzZXJfaW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/ojrflj5bms6jlhozkurrmlbBcclxuICAgIGdldFJlZ0NudChjb2RlLCBjYikge1xyXG4gICAgICAgIEZMb2dpYy5nZXRJbnN0YW5jZSgpLmNiTGlzdFtGRXZlbnRJRC5TMkNfcGdfdXNlcl9jbnRdID0ge1xyXG4gICAgICAgICAgICBjYjogY2IsXHJcbiAgICAgICAgICAgIHRhcmdldDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgRlNvY2tldFNlbmQuQzJTX3BnX3VzZXJfY250KFtjb2RlXSk7XHJcbiAgICB9XHJcbiAgICAvL+aJk+W8gOS4pOW8oOWNoemhtemdolxyXG4gICAgc2hvd1R3b0NhcmQodHlwZSwgcGFyZW50KSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5sb2FkUGFnZSgnRlR3b0NhcmQnLCBmdW5jdGlvbiAocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgcGFuZWwucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBwYW5lbC5nZXRDb21wb25lbnQoRlR3b0NhcmQpLnNldFR5cGUodHlwZSk7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy/miZPlvIDljaHniYfliJfooahcclxuICAgIHNob3dUcmFuc0xpc3QocGFyZW50LCB0eXBlID0gMCwgaWNvbiA9IG51bGwpIHtcclxuICAgICAgICBGUGFuZWxNYW5hZ2VyLmxvYWRQYWdlKCdGVHJhbnNMaXN0JywgZnVuY3Rpb24gKHBhbmVsOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhbmVsLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICAgICAgcGFuZWwuZ2V0Q29tcG9uZW50KEZUcmFuc0xpc3QpLnNldFRhc2sodHlwZSwgaWNvbik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICAvL+aJk+W8gOWNoeeJh+aNolxyXG4gICAgc2hvd1RyYW5zUGFnZShwYXJlbnQsIGRhdGEsIGNiLCB0eXBlID0gJ2ludml0ZScsIGlzQ29pbiA9IHRydWUsIGljb24gPSBudWxsKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5sb2FkKFwiRlRyYW5zUGFnZVwiLCBwYXJlbnQsIGZ1bmN0aW9uIChwYW5lbDogY2MuTm9kZSkge1xyXG4gICAgICAgICAgICBwYW5lbC5nZXRDb21wb25lbnQoRlRyYW5zUGFnZSkuc2V0RGF0YShkYXRhLCBjYiwgdHlwZSwgaXNDb2luLCBpY29uKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgLy/lvIDlp4vmjaJcclxuICAgIGdldFRyYW5zKGlkLCBlbWFpbCwgcGhvZW4sIHR5cGUsIGNiKSB7XHJcbiAgICAgICAgRkxvZ2ljLmdldEluc3RhbmNlKCkuY2JMaXN0W0ZFdmVudElELlMyQ190cmFuc10gPSB7XHJcbiAgICAgICAgICAgIGNiOiBjYixcclxuICAgICAgICAgICAgdGFyZ2V0OiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBGU29ja2V0U2VuZC5DMlNfdHJhbnMoaWQsIGVtYWlsLCBwaG9lbiwgdHlwZSk7XHJcbiAgICB9XHJcbiAgICAvL+WxleekuuS+p+i+ueagj1xyXG4gICAgc2hvd0xlZnQocGFyZW50LCBwYWRkaW5nLCBjYiwgdHlwZSA9IDAsIGljb24gPSBudWxsKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5sb2FkUGFnZSgnRkxlZnQnLCBmdW5jdGlvbiAocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgcGFuZWwucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgICAgICBwYW5lbC5nZXRDb21wb25lbnQoRkxlZnQpLnNldERhdGEocGFkZGluZywgY2IsdHlwZSxpY29uKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIC8v5LiK5oql5Lu75Yqh6L+b5bqmXHJcbiAgICBzZXRUYXNrKG51bSkge1xyXG4gICAgICAgIEZHbG9iYWwuVVNFUl9JTkZPLnRhc2sgPSBudW07XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluWNoVxyXG4gICAgZ2V0Q2FyZCh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIEZHbG9iYWwuZ2V0Q2FyZFR5cGUodHlwZSk7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPlumHkeW4gemavuW6plxyXG4gICAgZ2V0Q3JlZGl0RGlmKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkNvbmZpZy5GU0RLX0NPTkYuQ1JFRElUX0RJRi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoRkdsb2JhbC5VU0VSX0lORk8uY3JlZGl0ID49IEZDb25maWcuRlNES19DT05GLkNSRURJVF9ESUZbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBGQ29uZmlnLkZTREtfQ09ORi5DUkVESVRfRElGLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICAvL+mAmueUqOaMiemSrueCueWHu+mfs+aViFxyXG4gICAgc2V0QnRuU291bmQoY2IpIHtcclxuICAgICAgICBpZiAoIWNjLkJ1dHRvbi5wcm90b3R5cGUuX3NvdW5kT24pIHtcclxuICAgICAgICAgICAgY2MuQnV0dG9uLnByb3RvdHlwZS50b3VjaEVuZENsb25lID0gY2MuQnV0dG9uLnByb3RvdHlwZS5fb25Ub3VjaEVuZGVkO1xyXG4gICAgICAgICAgICBjYy5CdXR0b24ucHJvdG90eXBlLl9zb3VuZE9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuQnV0dG9uLnByb3RvdHlwZS5fb25Ub3VjaEVuZGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGFibGUgJiYgdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkgJiYgdGhpcy5fcHJlc3NlZCAmJiB0aGlzLl9zb3VuZE9uID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFbmRDbG9uZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluS7u+aEj+WlluWKsVxyXG4gICAgZ2V0UmFuZG9tUmV3YXJkKCkge1xyXG4gICAgICAgIHJldHVybiBGR2xvYmFsLmdldFJhbmRvbVJld2FyZCgpO1xyXG4gICAgfVxyXG4gICAgLy/liJ3lp4vljJZTREtcclxuICAgIGluaXRTWlNESygpIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIuacieayoeaciei/m+adpTIyMjJcIilcclxuICAgICAgICBTaW1wbGVTREsuaW5zdGFuY2UoKTtcclxuICAgICAgICBTaW1wbGVTREsuYW5hbHl0aWNzX2luc3RhbmNlKCk7XHJcbiAgICAgICAgU2ltcGxlU0RLLmFkX2luc3RhbmNlKCkuc2V0UmV3YXJkTGlzdGVuZXIobmV3IFJld2FyZGVkVmlkZW9MaXN0ZW5lcigpKTtcclxuICAgICAgICBTaW1wbGVTREsuYWRfaW5zdGFuY2UoKS5zZXRJbnRlckxpc3RlbmVyKG5ldyBJbnRlcnN0aXRpYWxBZExpc3RlbmVyKCkpO1xyXG4gICAgICAgIFNpbXBsZVNESy5hZF9pbnN0YW5jZSgpLnNldEJhbm5lckxpc3RlbmVyKG5ldyBCYW5uZXJMaXN0ZW5lcigpKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93WydGU0RLTW9kZWwnXSA9IEZTREtNb2RlbDtcclxuXHJcblxyXG5cclxuLy/mv4DlirHlub/lkYrlm57osIPnmoRsaXN0ZW5lclxyXG5jbGFzcyBSZXdhcmRlZFZpZGVvTGlzdGVuZXIgaW1wbGVtZW50cyBTREsuU2ltcGxlUmV3YXJkTGlzdGVuZXIge1xyXG4gICAgb25SZXdhcmRlZFZpZGVvQWRQbGF5U3RhcnQocGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwiZGVtbyByZXdhcmQgcGxheSBzdGFydFwiICsgcGxhY2VtZW50SWQgKyBcIiBcIiArIGNhbGxiYWNrSW5mbyk7XHJcbiAgICAgICAgRk5hdGl2ZS52aWRlb1Nob3coKTtcclxuICAgIH1cclxuICAgIG9uUmV3YXJkZWRWaWRlb0FkUGxheUZhaWxlZChwbGFjZW1lbnRJZDogc3RyaW5nLCBlcnJvckluZm86IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZOYXRpdmUudmlkZW9GYWlsKCk7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCJkZW1vIHJld2FyZCBwbGF5IGZhaWxcIiArIHBsYWNlbWVudElkICsgXCIgXCIgKyBjYWxsYmFja0luZm8pO1xyXG4gICAgfVxyXG4gICAgb25SZXdhcmRlZFZpZGVvQWRDbG9zZWQocGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZOYXRpdmUudmlkZW9TdWMoKTtcclxuICAgICAgICBGTG9nLm5vcm1hbChcImRlbW8gcmV3YXJkIGNsb3NlXCIgKyBwbGFjZW1lbnRJZCArIFwiIFwiICsgY2FsbGJhY2tJbmZvKTtcclxuICAgIH1cclxuICAgIG9uUmV3YXJkZWRWaWRlb0FkUGxheUNsaWNrZWQocGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZOYXRpdmUudmlkZW9DbGljaygpO1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwiZGVtbyByZXdhcmQgcGxheSBjbGlja1wiICsgcGxhY2VtZW50SWQgKyBcIiBcIiArIGNhbGxiYWNrSW5mbyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy/mj5LlsY/lub/lkYrnmoTlm57osIPlrp7njrBcclxuY2xhc3MgSW50ZXJzdGl0aWFsQWRMaXN0ZW5lciBpbXBsZW1lbnRzIFNESy5TaW1wbGVJbnRlckxpc3RlbmVyIHtcclxuICAgIG9uSW50ZXJzdGl0aWFsQWRTaG93KGFkRW50cnk6IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZOYXRpdmUuaW50ZXJzU2hvdygpO1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwiZGVtbyBpbnRlciBzaG93XCIgKyBhZEVudHJ5ICsgXCIgXCIgKyBjYWxsYmFja0luZm8pO1xyXG4gICAgfVxyXG4gICAgb25JbnRlcnN0aXRpYWxBZENsb3NlKGFkRW50cnk6IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZOYXRpdmUuaW50ZXJzQ2xvc2UoKTtcclxuICAgICAgICBGTG9nLm5vcm1hbChcImRlbW8gaW50ZXIgY2xvc2VcIiArIGFkRW50cnkgKyBcIiBcIiArIGNhbGxiYWNrSW5mbyk7XHJcbiAgICB9XHJcbiAgICBvbkludGVyc3RpdGlhbEFkQ2xpY2soYWRFbnRyeTogc3RyaW5nLCBjYWxsYmFja0luZm86IHt9KTogdm9pZCB7XHJcbiAgICAgICAgRk5hdGl2ZS5pbnRlcnNDbGljaygpO1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwiZGVtbyBpbnRlciBjbGlja1wiICsgYWRFbnRyeSArIFwiIFwiICsgY2FsbGJhY2tJbmZvKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9iYW5uZXLlub/lkYrnmoTlm57osIPlrp7njrBcclxuY2xhc3MgQmFubmVyTGlzdGVuZXIgaW1wbGVtZW50cyBTREsuU2ltcGxlQmFubmVyTGlzdGVuZXIge1xyXG4gICAgb25CYW5uZXJBZFNob3cocGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZOYXRpdmUuYmFubmVyU2hvdygpO1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwiZGVtbyBiYW5uZXIgc2hvd1wiICsgcGxhY2VtZW50SWQgKyBcIiBcIiArIGNhbGxiYWNrSW5mbyk7XHJcbiAgICB9XHJcbiAgICBvbkJhbm5lckFkQ2xpY2socGxhY2VtZW50SWQ6IHN0cmluZywgY2FsbGJhY2tJbmZvOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIEZOYXRpdmUuYmFubmVyQ2xpY2soKTtcclxuICAgICAgICBGTG9nLm5vcm1hbChcImRlbW8gYmFubmVyIGNsaWNrXCIgKyBwbGFjZW1lbnRJZCArIFwiIFwiICsgY2FsbGJhY2tJbmZvKTtcclxuICAgIH1cclxuXHJcbn0iXX0=