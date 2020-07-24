class FSDK {
    static object = null;
    //初始化连接socket //正服IP，包名，代号，回调，回调对象，是否测服
    static init(data, cb, target) {
        if (!FSDK.object) {
            FSDK.object = new window["FSDKModel"]();
        }
        FNetWorkConfig.data = data;
        FSDK.object.initSocket(function () {
            FSDK.login(FNetWorkConfig.data.pg, cb, target, FNetWorkConfig.data.test_aid)
        }, this);
        FSDK.umengEvent("server_star", "0");
    }
    //用户登录
    static login(pg, cb, target, aid = '1') {
        FSDK.object.login(pg, cb, target, aid);
    }
    //判定是活跃用户
    static setActiveUser() {
        FSDK.object.setActiveUser();
    }
    //切换到前台
    static onShow(cb) {
        cc.game.on(cc.game.EVENT_SHOW, function () { 
            if(cb){
                cb();
            }
        });
    }
    //切换到后台
    static onHide(cb) {
        cc.game.on(cc.game.EVENT_HIDE, function () { 
            if(cb){
                cb();
            }
        });
    }
    //注册服务器主动回调信息
    static addUserInfoListen(cb, target) {
        FSDK.object.addUserInfoListen(cb, target);
    }
    //存储用户数据
    static saveData(data1, data2 = null) {
        FSDK.object.saveData(data1, data2);
    }
    //修改credit 数量，来源，回调，回调对象
    static setCredit(name, num, from) {
        FSDK.object.setCredit(name, num, from);
    }
    //注册货币修改监听
    static addCreditListen(cb, target) {
        cc.director.on(FEventID.FRESH_CREDIT, cb, target);
    }
    //移除货币修改监听
    static removeCreditListen(cb, target) {
        cc.director.off(FEventID.FRESH_CREDIT, cb, target);
    }
    //注册次日监听
    static setNextDayListen(cb, target) {
        FSDK.object.setNextDayListen(cb, target);
    }
    //复制
    static copy(str) {
        FSDK.object.copy(str);
    }
    //是否展示LOG，默认true
    static setLog(isLog: boolean) {
        FConfig.IS_LOG = isLog;
    }
    //展示转圈
    static showToLoad(msg = "Loading", time = 0, showTime = false) {
        FSDK.object.showToLoad(msg, time, showTime);
    }
    //隐藏转圈
    static hideToLoad() {
        FSDK.object.hideToLoad();
    }
    //分享
    static share(str: String) {
        FNative.share(str);
    }
    //飘字
    static showToast(msg) {
        FSDK.object.showToast(msg);
    }
    //打开邀请界面
    static showInvityPage(parent: cc.Node) {
        FSDK.object.showInvityPage(parent);
    }
    //打开邀请任务界面
    static showTaskPage(parent: cc.Node, list) {
        FSDK.object.showTaskPage(parent, list);
    }
    //打开签到任务界面
    static showSignTaskPage(parent: cc.Node) {
        FSDK.object.showSignTaskPage(parent);
    }
    //展示评星
    static showGrade(parent: cc.Node, cb, target) {
        FSDK.object.showGrade(parent, cb, target)
    }
    //展示跑马灯
    static showMarQuee(parent: cc.Node) {
        FSDK.object.showMarQuee(parent);
    }
    //注册风控监听
    static addFlagListen(cb, target) {
        cc.director.on(FEventID.FRESH_FLAG, cb, target);
    }
    //展示视频
    static openVideo(from, cb, target) {
        FSDK.object.openVideo(from, cb, target);
    }
    //展示插屏
    static openInters(cb, target) {
        FSDK.object.openInters(cb, target);
    }
    //展示banner
    static openBanner() {
        FSDK.object.openBanner(FConfig.FSDK_CONF.AD_CONF.banner);
    }
    //隐藏banner
    static closeBanner() {
        FSDK.object.closeBanner();
    }
    //震动
    static shake(time) {
        FNative.shake(time);
    }
    //友盟上报
    static umengEvent(key: string, value: string, isOne = false) {
        if (!FSDK.object) {
            FSDK.object = new window["FSDKModel"]();
        }
        FSDK.object.umengEvent(key, value, isOne);
    }
    //视频上报
    static adEvent(from, type) {
        FSDK.object.adEvent(from, type);
    }
    //获取服务器当前时间
    static getNowTime() {
        return FSDK.object.getNowTime();
    }
    //返回新老用户
    static getUserType() {
        return FSDK.object.getUserType();
    }
    //返回版本号
    static getVerInfo() {
        return FNative.getVerInfo();
    }
    //获取兑换列表
    static getTransList(cb, target, type = "task") {
        FSDK.object.getTransList(cb, target, type)
    }
    //返回wx信息
    static reWxInfo(user_info) {
        FSDK.object.reWxInfo(user_info);
    }
    //wx登录
    static wxLogin(cb, target) {
        FSDK.object.wxLogin(cb, target);
    }
    //获取注册人数
    static getRegCnt(code, cb) {
        FSDK.object.getRegCnt(code, cb);
    }
    //打开两张卡页面
    static showTwoCard(type, parent) {
        FSDK.object.showTwoCard(type, parent);
    }
    //打开卡片列表
    static showTransList(parent,type=0,icon=null) {
        FSDK.object.showTransList(parent,type,icon);
    }
    //打开卡片换
    static showTransPage(parent, data, cb, type = 'invite', isCoin = false,icon=null) {
        FSDK.object.showTransPage(parent, data, cb, type, isCoin,icon);
    }
    //开始换
    static getTrans(id, email, phoen, type, cb) {
        FSDK.object.getTrans(id, email, phoen, type, cb);
    }
    //展示侧边栏
    static showLeft(parent, padding, cb,type=0,icon=null) {
        FSDK.object.showLeft(parent, padding, cb,type,icon);
    }
    //上报任务进度
    static setTask(num) {
        FSDK.object.setTask(num);
    }
    //获取卡0-任意 1-gp 2-pp
    static getCard(type) {
        return FSDK.object.getCard(type);
    }
    //获取金币难度
    static getCreditDif() {
        return FSDK.object.getCreditDif();
    }
    //按钮通用音效
    static setBtnSound(cb) {
        FSDK.object.setBtnSound(cb);
    }
    //获取任意奖励
    static getRandomReward() {
        return FSDK.object.getRandomReward();
    }
    //初始化szSDK
    static initSZSDK() {
        if (!FSDK.object) {
            FSDK.object = new window["FSDKModel"]();
        }
        FSDK.object.initSZSDK();
    }
}
window["FSDK"] = FSDK;