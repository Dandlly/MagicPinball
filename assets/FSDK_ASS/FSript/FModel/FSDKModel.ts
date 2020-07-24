import { FNetWorkCtrl } from "../FNetWork/FNetWorkCtrl"
import { FSocketSend } from "../FNetWork/FSocketSend";
import { FLogic } from "../FNetWork/FLogic";
import { FGlobal } from "./FGlobal";
import FToLoad from "./FToLoad";
import { FPanelManager } from "./FPanelManager";
import { FTaskPage } from "../FView/FTaskPage";
import { FGrade } from "../FView/FGrade";
import { FTwoCard } from "../FView/FTwoCard";
import { FTransList } from "../FView/FTransList";
import { FTransPage } from "../FView/FTransPage";
import { FLeft } from "../FView/FLeft";
import SimpleSDK from "../../../SDK/script/SimpleSDK";
import * as SDK from '../../../SDK/script/SimpleInterface'
import SimpleAd from '../../../SDK/script/SimpleAd';

class FSDKModel {
    //初始化socket
    initSocket(cb, target) {
        FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
            cb: cb,
            target: target
        };
        FNetWorkConfig.server_ip_release = FNetWorkConfig.data.ip_release;
        FNetWorkConfig.server_ip_debug = FNetWorkConfig.data.ip_debug;
        FConfig.IS_DEBUG = FNetWorkConfig.data.isDebug;
        FSDK.object.initLocalStorage();
        FNetWorkCtrl.getInstance().ConnetctServer(cb, target);
        //初始化加载页面跟飘字
        FSDK.object.loadToLoad();
        FSDK.object.loadToast();
        FSDK.getVerInfo();
        FLog.normal("这个是进来了")
    };
    //获取本地数据
    initLocalStorage() {
        if (localStorage.getItem('setting')) {
            FGlobal.USER_INFO.setting = JSON.parse(localStorage.getItem('setting'));
        }
        if (localStorage.getItem('conf_hash')) {
            FConfig.conf_hash = localStorage.getItem('conf_hash');
            FLog.normal("什么   ", FConfig.conf_hash)
        }
        if (localStorage.getItem('conf')) {
            FConfig.conf = JSON.parse(localStorage.getItem('conf'));
            FLog.normal("看看配置   ", FConfig.conf);
        }
        if (localStorage.getItem('game_settings_info')) {
            FConfig.game_settings_info = JSON.parse(localStorage.getItem('game_settings_info'));
        }
    }
    //登录--初始户成功后才可以
    login(pg, cb, target, aid = '1') {
        FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
            cb: cb,
            target: target
        }
        FConfig.LOGIN_DATA.pg = pg;
        FConfig.LOGIN_DATA.aid = aid;
        FConfig.LOGIN_DATA.conf_hash = FConfig.conf_hash;
        ProtocolCode.C2S_reg_login.data.game_settings_info.hash = FConfig.game_settings_info.hash;
        ProtocolCode.C2S_reg_login.data.aid = FConfig.LOGIN_DATA.aid;
        ProtocolCode.C2S_reg_login.data.pg = pg;
        ProtocolCode.C2S_reg_login.data.info.pg = pg;
        let data = FNative.getSystemInfo() ? FNative.getSystemInfo() : FConfig.LOGIN_DATA;
        for (let i in ProtocolCode.C2S_reg_login.data) {
            if (i == 'info') {
                for (let j in ProtocolCode.C2S_reg_login.data.info) {
                    for (let k in data) {
                        if (j == k) {
                            ProtocolCode.C2S_reg_login.data.info[j] = data[k];
                        }
                    }
                }
            }
            else {
                for (let m in data) {
                    if (i == m) {
                        ProtocolCode.C2S_reg_login.data[i] = data[m];
                    }
                }
            }
        }
        FSocketSend.C2S_reg_login();
    }
    //判定是活跃用户
    setActiveUser() {
        FLog.normal("上报活跃   ", !FGlobal.USER_INFO.preferences['real'])
        if (FNative.AD_SHOW_CNT.AD_SUC >= FConfig.FSDK_CONF.REAL_USER.ad_num && FGlobal.USER_INFO.online_total >= FConfig.FSDK_CONF.REAL_USER.online_time) {
            if (!FGlobal.USER_INFO.preferences['real']) {
                FGlobal.USER_INFO.preferences['real'] = 1;
                FSocketSend.C2S_preference('real', 1);
            }
        }
    }
    umengEvent(key: string, value: string, isOne = false) {
        if (isOne) {
            if (!FGlobal.isOnUmeng(key)) {
                FNative.UmengOnEvemt(key, value);
                FGlobal.ONE_UMENG.push(key);
                FSDK.saveData("ONE_UMENG", FGlobal.ONE_UMENG);
            }
            return;
        }
        FNative.UmengOnEvemt(key, value);
    }
    //客户端数据存储 多参数与单参数
    saveData(data1, data2 = null) {
        if (data2) {
            FSocketSend.C2S_preference(data1, data2);
        }
        else {
            FSocketSend.C2S_preferences(data1);
        }
    }
    //修改credit 数量，来源，回调
    setCredit(name, num, from) {
        if (name == 'credit') {
            FSocketSend.C2S_update_credit(num, from);
        }
        else {
            FSocketSend.C2S_update_coin(name, num, from);
        }
    }
    //注册用户信息回调
    addUserInfoListen(cb, target) {
        cc.director.on(FEventID.FRESH_USERINFO, cb, target);
    }
    //移除用户信息回调
    removeUserInfoListen(cb, target) {
        cc.director.off(FEventID.FRESH_USERINFO, cb, target);
    }
    //复制
    copy(str) {
        FNative.copy(str);
    }
    //次日刷新回调注册
    setNextDayListen(cb, target) {
        FLogic.getInstance().cbList[FEventID.NEXT_DAY] = {
            cb: cb,
            target: target
        }
    }
    //预加载转圈页面
    loadToLoad() {
        FPanelManager.loadPage('FToLoad', function (panel: cc.Node) {
            FGlobal.ToLoad = panel;
        }, this)
    }
    //打开加载转圈
    showToLoad(msg = "Loading", time = 0, showTime = false) {
        if (!FGlobal.ToLoad) return;
        FGlobal.ToLoad.parent = cc.director.getScene();
        FGlobal.ToLoad.getComponent(FToLoad).setMsg(msg, time, showTime)
    }
    //关闭加载转圈
    hideToLoad() {
        if (FGlobal.ToLoad && FGlobal.ToLoad.parent) {
            FGlobal.ToLoad.parent = null;
        }
    }
    //预加载toast
    loadToast() {
        FPanelManager.loadPage('FToast', function (panel: cc.Node) {
            for (let i = 0; i < 10; i++) {
                let toast = cc.instantiate(panel);
                FGlobal.piaoPool.put(toast);
            }
        }, this);
    }
    //展示toast
    showToast(msg) {
        FGlobal.Toast(msg);
    }
    //打开邀请界面
    showInvityPage(parent: cc.Node) {
        FPanelManager.loadPage('FInvityPage', function (panel: cc.Node) {
            panel.parent = parent;
        }, this);
    }
    //打开邀请任务界面
    showTaskPage(parent: cc.Node, list) {
        FPanelManager.loadPage('FTaskPage', function (panel: cc.Node) {
            panel.parent = parent;
            panel.getComponent(FTaskPage).setData(list);
        }, this);
    }
    //打开签到任务界面
    showSignTaskPage(parent: cc.Node) {
        FPanelManager.loadPage('FSignPage', function (panel: cc.Node) {
            panel.parent = parent;
        }, this);
    }
    //打开评星页面
    showGrade(parent: cc.Node, cb, target) {
        if (!FGlobal.USER_INFO.isGrade && !FGlobal.USER_INFO.isBlack && FGlobal.USER_INFO.isFlag) {
            FPanelManager.load('FGrade', parent, function (panel: cc.Node) {
                panel.getComponent(FGrade).setCb(cb, target);
            });
        }
    }
    //展示跑马灯
    showMarQuee(parent: cc.Node) {
        if (!FGlobal.USER_INFO.isBlack && FGlobal.USER_INFO.isFlag) {
            FPanelManager.loadPage('FMarquee', function (panel: cc.Node) {
                let marQuee = cc.instantiate(panel);
                marQuee.parent = parent;
            }, this, false);
        }
    }

    //展示视频
    openVideo(from, cb, target) {
        if (FNative.AD_COUNT.video >= FConfig.FSDK_CONF.AD_CONF.video_limit) {
            FSDK.showToast("Video limit reached today");
            return;
        }
        if (FNative.VIDEO_FRESH_TIME) {
            FSDK.showToast(`Video is on CD，please wait for ${FNative.video_fresh_time} seconds`);
            return;
        }
        FNative.isLoad = false;
        FNative.videoCb.cb = cb;
        FNative.videoCb.target = target;
        FNative.videoCb.from = from;
        FNative.openVideo();
    }
    //展示插屏
    openInters(cb, target) {
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
            FLog.normal(`还有${FNative.inters_fresh_time}秒刷新`);
            return;
        }
        FNative.openInters();
    }
    //打开banner
    openBanner(id) {
        if (!cc.sys.isNative) return;
        get_simple_ad().showOrReShowBanner(SimpleAd.BANNER_BOTTOM);
    }
    //关闭banner
    closeBanner() {
        if (!cc.sys.isNative) return;
        get_simple_ad().hideBanner();
    }
    //视频上报
    adEvent(sdk, type) {
        FSocketSend.C2S_ad_event(sdk, type);
    }
    //获取服务器当前时间
    getNowTime() {
        return FGlobal.USER_INFO.now;
    }
    //返回新老用户
    getUserType() {
        if (FGlobal.USER_INFO.now - FGlobal.USER_INFO.reg_time >= 24 * 60 * 60) {
            return "old";
        }
        return "new";
    }
    //国内获取兑换列表已经兑换记录
    getTransList(cb, target, type = "task") {
        FLogic.getInstance().cbList[FEventID.S2C_trans_history] = {
            cb: cb,
            target: target
        };
        FSocketSend.C2S_trans_history(type);
    }
    //登录wx
    wxLogin(cb, target) {
        FLogic.getInstance().cbList[FEventID.S2C_wx_info] = {
            cb: cb,
            target: target
        };
        FNative.wxLogin();
    }
    //返回wx信息
    reWxInfo(user_info) {
        if (FLogic.getInstance().cbList[FEventID.S2C_wx_info]) {
            FLogic.getInstance().cbList[FEventID.S2C_wx_info].cb(FLogic.getInstance().cbList[FEventID.S2C_wx_info].target, user_info);
        }
    }
    //获取注册人数
    getRegCnt(code, cb) {
        FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt] = {
            cb: cb,
            target: null
        };
        FSocketSend.C2S_pg_user_cnt([code]);
    }
    //打开两张卡页面
    showTwoCard(type, parent) {
        FPanelManager.loadPage('FTwoCard', function (panel: cc.Node) {
            panel.parent = parent;
            panel.getComponent(FTwoCard).setType(type);

        }, this);
    }
    //打开卡片列表
    showTransList(parent, type = 0, icon = null) {
        FPanelManager.loadPage('FTransList', function (panel: cc.Node) {
            panel.parent = parent;
            panel.getComponent(FTransList).setTask(type, icon);
        }, this);
    }
    //打开卡片换
    showTransPage(parent, data, cb, type = 'invite', isCoin = true, icon = null) {
        FPanelManager.load("FTransPage", parent, function (panel: cc.Node) {
            panel.getComponent(FTransPage).setData(data, cb, type, isCoin, icon);
        }.bind(this));
    }
    //开始换
    getTrans(id, email, phoen, type, cb) {
        FLogic.getInstance().cbList[FEventID.S2C_trans] = {
            cb: cb,
            target: null
        };
        FSocketSend.C2S_trans(id, email, phoen, type);
    }
    //展示侧边栏
    showLeft(parent, padding, cb, type = 0, icon = null) {
        FPanelManager.loadPage('FLeft', function (panel: cc.Node) {
            panel.parent = parent;
            panel.getComponent(FLeft).setData(padding, cb,type,icon);
        }, this);
    }
    //上报任务进度
    setTask(num) {
        FGlobal.USER_INFO.task = num;
    }
    //获取卡
    getCard(type) {
        return FGlobal.getCardType(type);
    }
    //获取金币难度
    getCreditDif() {
        for (let i = 0; i < FConfig.FSDK_CONF.CREDIT_DIF.length; i++) {
            if (FGlobal.USER_INFO.credit >= FConfig.FSDK_CONF.CREDIT_DIF[i]) {
                return i;
            }
        }
        return FConfig.FSDK_CONF.CREDIT_DIF.length - 1;
    }
    //通用按钮点击音效
    setBtnSound(cb) {
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
            }
        }
    }
    //获取任意奖励
    getRandomReward() {
        return FGlobal.getRandomReward();
    }
    //初始化SDK
    initSZSDK() {
        FLog.normal("有没有进来2222")
        SimpleSDK.instance();
        SimpleSDK.analytics_instance();
        SimpleSDK.ad_instance().setRewardListener(new RewardedVideoListener());
        SimpleSDK.ad_instance().setInterListener(new InterstitialAdListener());
        SimpleSDK.ad_instance().setBannerListener(new BannerListener());
    }
}

window['FSDKModel'] = FSDKModel;



//激励广告回调的listener
class RewardedVideoListener implements SDK.SimpleRewardListener {
    onRewardedVideoAdPlayStart(placementId: string, callbackInfo: {}): void {
        FLog.normal("demo reward play start" + placementId + " " + callbackInfo);
        FNative.videoShow();
    }
    onRewardedVideoAdPlayFailed(placementId: string, errorInfo: string, callbackInfo: {}): void {
        FNative.videoFail();
        FLog.normal("demo reward play fail" + placementId + " " + callbackInfo);
    }
    onRewardedVideoAdClosed(placementId: string, callbackInfo: {}): void {
        FNative.videoSuc();
        FLog.normal("demo reward close" + placementId + " " + callbackInfo);
    }
    onRewardedVideoAdPlayClicked(placementId: string, callbackInfo: {}): void {
        FNative.videoClick();
        FLog.normal("demo reward play click" + placementId + " " + callbackInfo);
    }
}



//插屏广告的回调实现
class InterstitialAdListener implements SDK.SimpleInterListener {
    onInterstitialAdShow(adEntry: string, callbackInfo: {}): void {
        FNative.intersShow();
        FLog.normal("demo inter show" + adEntry + " " + callbackInfo);
    }
    onInterstitialAdClose(adEntry: string, callbackInfo: {}): void {
        FNative.intersClose();
        FLog.normal("demo inter close" + adEntry + " " + callbackInfo);
    }
    onInterstitialAdClick(adEntry: string, callbackInfo: {}): void {
        FNative.intersClick();
        FLog.normal("demo inter click" + adEntry + " " + callbackInfo);
    }
}

//banner广告的回调实现
class BannerListener implements SDK.SimpleBannerListener {
    onBannerAdShow(placementId: string, callbackInfo: {}): void {
        FNative.bannerShow();
        FLog.normal("demo banner show" + placementId + " " + callbackInfo);
    }
    onBannerAdClick(placementId: string, callbackInfo: {}): void {
        FNative.bannerClick();
        FLog.normal("demo banner click" + placementId + " " + callbackInfo);
    }

}