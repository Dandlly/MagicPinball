"use strict";
cc._RF.push(module, '8c73fviCCNIV6W3283yeCzt', 'FSDK');
// FSDK_ASS/FSript/FModel/FSDK.ts

var FSDK = /** @class */ (function () {
    function FSDK() {
    }
    //初始化连接socket //正服IP，包名，代号，回调，回调对象，是否测服
    FSDK.init = function (data, cb, target) {
        if (!FSDK.object) {
            FSDK.object = new window["FSDKModel"]();
        }
        FNetWorkConfig.data = data;
        FSDK.object.initSocket(function () {
            FSDK.login(FNetWorkConfig.data.pg, cb, target, FNetWorkConfig.data.test_aid);
        }, this);
        FSDK.umengEvent("server_star", "0");
    };
    //用户登录
    FSDK.login = function (pg, cb, target, aid) {
        if (aid === void 0) { aid = '1'; }
        FSDK.object.login(pg, cb, target, aid);
    };
    //判定是活跃用户
    FSDK.setActiveUser = function () {
        FSDK.object.setActiveUser();
    };
    //切换到前台
    FSDK.onShow = function (cb) {
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (cb) {
                cb();
            }
        });
    };
    //切换到后台
    FSDK.onHide = function (cb) {
        cc.game.on(cc.game.EVENT_HIDE, function () {
            if (cb) {
                cb();
            }
        });
    };
    //注册服务器主动回调信息
    FSDK.addUserInfoListen = function (cb, target) {
        FSDK.object.addUserInfoListen(cb, target);
    };
    //存储用户数据
    FSDK.saveData = function (data1, data2) {
        if (data2 === void 0) { data2 = null; }
        FSDK.object.saveData(data1, data2);
    };
    //修改credit 数量，来源，回调，回调对象
    FSDK.setCredit = function (name, num, from) {
        FSDK.object.setCredit(name, num, from);
    };
    //注册货币修改监听
    FSDK.addCreditListen = function (cb, target) {
        cc.director.on(FEventID.FRESH_CREDIT, cb, target);
    };
    //移除货币修改监听
    FSDK.removeCreditListen = function (cb, target) {
        cc.director.off(FEventID.FRESH_CREDIT, cb, target);
    };
    //注册次日监听
    FSDK.setNextDayListen = function (cb, target) {
        FSDK.object.setNextDayListen(cb, target);
    };
    //复制
    FSDK.copy = function (str) {
        FSDK.object.copy(str);
    };
    //是否展示LOG，默认true
    FSDK.setLog = function (isLog) {
        FConfig.IS_LOG = isLog;
    };
    //展示转圈
    FSDK.showToLoad = function (msg, time, showTime) {
        if (msg === void 0) { msg = "Loading"; }
        if (time === void 0) { time = 0; }
        if (showTime === void 0) { showTime = false; }
        FSDK.object.showToLoad(msg, time, showTime);
    };
    //隐藏转圈
    FSDK.hideToLoad = function () {
        FSDK.object.hideToLoad();
    };
    //分享
    FSDK.share = function (str) {
        FNative.share(str);
    };
    //飘字
    FSDK.showToast = function (msg) {
        FSDK.object.showToast(msg);
    };
    //打开邀请界面
    FSDK.showInvityPage = function (parent) {
        FSDK.object.showInvityPage(parent);
    };
    //打开邀请任务界面
    FSDK.showTaskPage = function (parent, list) {
        FSDK.object.showTaskPage(parent, list);
    };
    //打开签到任务界面
    FSDK.showSignTaskPage = function (parent) {
        FSDK.object.showSignTaskPage(parent);
    };
    //展示评星
    FSDK.showGrade = function (parent, cb, target) {
        FSDK.object.showGrade(parent, cb, target);
    };
    //展示跑马灯
    FSDK.showMarQuee = function (parent) {
        FSDK.object.showMarQuee(parent);
    };
    //注册风控监听
    FSDK.addFlagListen = function (cb, target) {
        cc.director.on(FEventID.FRESH_FLAG, cb, target);
    };
    //展示视频
    FSDK.openVideo = function (from, cb, target) {
        FSDK.object.openVideo(from, cb, target);
    };
    //展示插屏
    FSDK.openInters = function (cb, target) {
        FSDK.object.openInters(cb, target);
    };
    //展示banner
    FSDK.openBanner = function () {
        FSDK.object.openBanner(FConfig.FSDK_CONF.AD_CONF.banner);
    };
    //隐藏banner
    FSDK.closeBanner = function () {
        FSDK.object.closeBanner();
    };
    //震动
    FSDK.shake = function (time) {
        FNative.shake(time);
    };
    //友盟上报
    FSDK.umengEvent = function (key, value, isOne) {
        if (isOne === void 0) { isOne = false; }
        if (!FSDK.object) {
            FSDK.object = new window["FSDKModel"]();
        }
        FSDK.object.umengEvent(key, value, isOne);
    };
    //视频上报
    FSDK.adEvent = function (from, type) {
        FSDK.object.adEvent(from, type);
    };
    //获取服务器当前时间
    FSDK.getNowTime = function () {
        return FSDK.object.getNowTime();
    };
    //返回新老用户
    FSDK.getUserType = function () {
        return FSDK.object.getUserType();
    };
    //返回版本号
    FSDK.getVerInfo = function () {
        return FNative.getVerInfo();
    };
    //获取兑换列表
    FSDK.getTransList = function (cb, target, type) {
        if (type === void 0) { type = "task"; }
        FSDK.object.getTransList(cb, target, type);
    };
    //返回wx信息
    FSDK.reWxInfo = function (user_info) {
        FSDK.object.reWxInfo(user_info);
    };
    //wx登录
    FSDK.wxLogin = function (cb, target) {
        FSDK.object.wxLogin(cb, target);
    };
    //获取注册人数
    FSDK.getRegCnt = function (code, cb) {
        FSDK.object.getRegCnt(code, cb);
    };
    //打开两张卡页面
    FSDK.showTwoCard = function (type, parent) {
        FSDK.object.showTwoCard(type, parent);
    };
    //打开卡片列表
    FSDK.showTransList = function (parent, type, icon) {
        if (type === void 0) { type = 0; }
        if (icon === void 0) { icon = null; }
        FSDK.object.showTransList(parent, type, icon);
    };
    //打开卡片换
    FSDK.showTransPage = function (parent, data, cb, type, isCoin, icon) {
        if (type === void 0) { type = 'invite'; }
        if (isCoin === void 0) { isCoin = false; }
        if (icon === void 0) { icon = null; }
        FSDK.object.showTransPage(parent, data, cb, type, isCoin, icon);
    };
    //开始换
    FSDK.getTrans = function (id, email, phoen, type, cb) {
        FSDK.object.getTrans(id, email, phoen, type, cb);
    };
    //展示侧边栏
    FSDK.showLeft = function (parent, padding, cb, type, icon) {
        if (type === void 0) { type = 0; }
        if (icon === void 0) { icon = null; }
        FSDK.object.showLeft(parent, padding, cb, type, icon);
    };
    //上报任务进度
    FSDK.setTask = function (num) {
        FSDK.object.setTask(num);
    };
    //获取卡0-任意 1-gp 2-pp
    FSDK.getCard = function (type) {
        return FSDK.object.getCard(type);
    };
    //获取金币难度
    FSDK.getCreditDif = function () {
        return FSDK.object.getCreditDif();
    };
    //按钮通用音效
    FSDK.setBtnSound = function (cb) {
        FSDK.object.setBtnSound(cb);
    };
    //获取任意奖励
    FSDK.getRandomReward = function () {
        return FSDK.object.getRandomReward();
    };
    //初始化szSDK
    FSDK.initSZSDK = function () {
        if (!FSDK.object) {
            FSDK.object = new window["FSDKModel"]();
        }
        FSDK.object.initSZSDK();
    };
    FSDK.object = null;
    return FSDK;
}());
window["FSDK"] = FSDK;

cc._RF.pop();