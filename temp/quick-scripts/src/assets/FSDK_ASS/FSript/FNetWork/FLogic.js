"use strict";
cc._RF.push(module, '375ffTLnMtIN5TopH4/6Wq7', 'FLogic');
// FSDK_ASS/FSript/FNetWork/FLogic.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FGlobal_1 = require("../FModel/FGlobal");
var FLogic = /** @class */ (function () {
    function FLogic() {
        this.cbList = {};
        this.RESTAR_TIME = null;
        //在线计时器
        this.ONLINE_TIME = null;
    }
    FLogic.getInstance = function () {
        if (!FLogic._instance) {
            FLogic._instance = new FLogic();
        }
        return FLogic._instance;
    };
    //注册监听
    FLogic.prototype.addCommonListenser = function () {
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
    //移除监听
    FLogic.prototype.removeCommonListenser = function () {
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
    //心跳返回
    FLogic.prototype.on_S2C_heartbeat = function (msg) {
        if (FGlobal_1.FGlobal.getDateDay(FGlobal_1.FGlobal.USER_INFO.now) < FGlobal_1.FGlobal.getDateDay(msg.data.time)) {
            FGlobal_1.FGlobal.resetData();
            if (FLogic.getInstance().cbList[FEventID.NEXT_DAY]) {
                var cb = FLogic.getInstance().cbList[FEventID.NEXT_DAY].cb;
                var target = FLogic.getInstance().cbList[FEventID.NEXT_DAY].target;
                cb.call(target);
            }
        }
        FGlobal_1.FGlobal.USER_INFO.now = msg.data.time;
        FGlobal_1.FGlobal.NetWork.heartbeat();
    };
    //登录返回信息
    FLogic.prototype.on_S2C_reg_login = function (msg) {
        FSDK.hideToLoad();
        FLog.normal("服务器返回登录信息   ", msg);
        var cb = FLogic.getInstance().cbList[FEventID.S2C_reg_login].cb;
        var target = FLogic.getInstance().cbList[FEventID.S2C_reg_login].target;
        if (msg.err) {
            if (msg.err == 'RELOGIN MUST DELAY') {
                FGlobal_1.FGlobal.NetWork.clearAllTime();
                FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
                FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
                FGlobal_1.FGlobal.NetWork = null;
                FSDK.object.RESTAR_TIME = setTimeout(function () {
                    FSDK.init(FNetWorkConfig.data, FGlobal_1.FGlobal.NetWork.cb, FGlobal_1.FGlobal.NetWork.target);
                    clearTimeout(FSDK.object.RESTAR_TIME);
                    FSDK.hideToLoad();
                }, (msg.data.must_delay + 1) * 1000);
                FSDK.showToLoad("Rebinding", msg.data.must_delay + 1);
            }
            return;
        }
        if (msg.data) {
            FGlobal_1.FGlobal.USER_INFO.preferences = msg.data.preferences;
            FGlobal_1.FGlobal.setPreferences();
            FGlobal_1.FGlobal.USER_INFO.invite_code = msg.data.invite_code;
            cc.log('Kankan      ', msg.data);
            FGlobal_1.FGlobal.USER_INFO.invite_count = msg.data.invite_count;
            FGlobal_1.FGlobal.USER_INFO.be_invite = msg.data.personal.invited;
            FGlobal_1.FGlobal.USER_INFO.login_cnt = msg.data.login_cnt;
            FGlobal_1.FGlobal.USER_INFO.login_days = msg.data.login_days;
            FGlobal_1.FGlobal.USER_INFO.credit = msg.data.basic.credit;
            FGlobal_1.FGlobal.USER_INFO.reg_time = msg.data.reg_time;
            FGlobal_1.FGlobal.USER_INFO.off_time = msg.data.offline_timelen;
            FGlobal_1.FGlobal.USER_INFO.login_time = msg.data.now;
            FGlobal_1.FGlobal.USER_INFO.trans_record = msg.data.basic.redeem_task;
            FGlobal_1.FGlobal.USER_INFO.online_total = msg.data.online_total;
            FGlobal_1.FGlobal.USER_INFO.isFlag = msg.data.basic.user_vip;
            FGlobal_1.FGlobal.USER_INFO.isBlack = msg.data.b;
            FGlobal_1.FGlobal.USER_INFO.now = msg.data.now;
            FGlobal_1.FGlobal.USER_INFO.credit_pp = msg.data.basic.coins["pp"] ? msg.data.basic.coins["pp"] : 0;
            FGlobal_1.FGlobal.USER_INFO.credit_gp = msg.data.basic.coins["gp"] ? msg.data.basic.coins["gp"] : 0;
            if (msg.data.conf_hash) {
                FConfig.conf_hash = msg.data.conf_hash;
                localStorage.setItem('conf_hash', FConfig.conf_hash);
            }
            if (msg.data.game_settings_info && msg.data.game_settings_info.zip) {
                FConfig.game_settings_info = msg.data.game_settings_info;
                localStorage.setItem('game_settings_info', JSON.stringify(FConfig.game_settings_info));
            }
            if (msg.data.conf) {
                FConfig.conf = msg.data.conf;
                localStorage.setItem('conf', JSON.stringify(FConfig.conf));
                FLog.normal("看看配置2   ", msg.data.conf);
            }
            FGlobal_1.FGlobal.setConf();
            //是否第二天重置
            if (FGlobal_1.FGlobal.getDateDay(FGlobal_1.FGlobal.USER_INFO.login_time - FGlobal_1.FGlobal.USER_INFO.off_time) < FGlobal_1.FGlobal.getDateDay(FGlobal_1.FGlobal.USER_INFO.login_time)) {
                FGlobal_1.FGlobal.resetData();
                FGlobal_1.FGlobal.USER_INFO.isNextDay = true;
            }
            else {
                FGlobal_1.FGlobal.USER_INFO.isNextDay = false;
            }
            if (!this.ONLINE_TIME && !FGlobal_1.FGlobal.USER_INFO.preferences['real']) {
                this.ONLINE_TIME = setInterval(function () {
                    FGlobal_1.FGlobal.USER_INFO.online_total++;
                    if (FGlobal_1.FGlobal.USER_INFO.online_total >= FConfig.FSDK_CONF.REAL_USER.online_time) {
                        FSDK.setActiveUser();
                    }
                }, 1000);
            }
        }
        cb.call(target, FGlobal_1.FGlobal.USER_INFO);
        FNative.preloadVideo(FConfig.FSDK_CONF.AD_CONF.video);
        FNative.preloadInters(FConfig.FSDK_CONF.AD_CONF.inters);
        FSDK.umengEvent("server_suc", "0");
        //插屏时间验证
        var lineTime = FGlobal_1.FGlobal.USER_INFO.now - FGlobal_1.FGlobal.USER_INFO.reg_time;
        if (FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - lineTime > 0) {
            FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - lineTime + FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
        }
        else {
            FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
        }
        FNative.freshInters();
    };
    //credit更新信息
    FLogic.prototype.on_S2C_update_credit = function (msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
            return;
        }
        var change = 0;
        if (msg.data) {
            change = msg.data.credit - FGlobal_1.FGlobal.USER_INFO.credit;
            FGlobal_1.FGlobal.USER_INFO.credit = msg.data.credit;
            if (FGlobal_1.FGlobal.USER_INFO.credit >= 100000) {
                FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_100000, "1", true);
            }
            if (FGlobal_1.FGlobal.USER_INFO.credit >= 225000) {
                FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_225000, "1", true);
            }
            if (FGlobal_1.FGlobal.USER_INFO.credit >= 400000) {
                FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_400000, "1", true);
            }
        }
        var data = {
            type: "credit",
            num: FGlobal_1.FGlobal.USER_INFO.credit,
            change: change
        };
        cc.director.emit(FEventID.FRESH_CREDIT, data);
    };
    //其它credit更新信息
    FLogic.prototype.on_S2C_update_coin = function (msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
            return;
        }
        var change = 0;
        if (msg.data) {
            switch (msg.data.name) {
                case 'pp':
                    change = msg.data.coin - FGlobal_1.FGlobal.USER_INFO.credit_pp;
                    FGlobal_1.FGlobal.USER_INFO.credit_pp = msg.data.coin;
                    if (FGlobal_1.FGlobal.USER_INFO.credit_pp >= 100) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_pp_100, "1", true);
                    }
                    FGlobal_1.FGlobal.USER_INFO.cardGet.pp++;
                    if (FGlobal_1.FGlobal.USER_INFO.cardGet.pp >= 497) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_pp_max, "1", true);
                    }
                    break;
                case 'gp':
                    change = msg.data.coin - FGlobal_1.FGlobal.USER_INFO.credit_gp;
                    FGlobal_1.FGlobal.USER_INFO.credit_gp = msg.data.coin;
                    if (FGlobal_1.FGlobal.USER_INFO.credit_gp >= 100) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_gp_100, "1", true);
                    }
                    FGlobal_1.FGlobal.USER_INFO.cardGet.gp++;
                    if (FGlobal_1.FGlobal.USER_INFO.cardGet.gp >= 497) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_gp_max, "1", true);
                    }
                    break;
            }
        }
        var data = {
            type: msg.data.name,
            num: FGlobal_1.FGlobal.USER_INFO["credit_" + msg.data.name],
            change: change
        };
        FSDK.saveData("CARD_GET", FGlobal_1.FGlobal.USER_INFO.cardGet);
        cc.director.emit(FEventID.FRESH_CREDIT, data);
    };
    //返回信息同步数据
    FLogic.prototype.on_S2C_info = function (msg) {
        if (msg.err) {
            return;
        }
        if (msg.data) {
            if (msg.data.basic) {
                if (msg.data.basic.user_vip) {
                    FGlobal_1.FGlobal.USER_INFO.isFlag = msg.data.basic.user_vip;
                    cc.director.emit(FEventID.FRESH_FLAG, FGlobal_1.FGlobal.USER_INFO.isFlag);
                }
                if (msg.data.basic.credit) {
                    FGlobal_1.FGlobal.USER_INFO.credit = msg.data.basic.credit;
                }
            }
            if (msg.data.invite) {
                FGlobal_1.FGlobal.USER_INFO.invite_count = msg.data.invite.count;
                if (msg.data.invite.task) {
                    FGlobal_1.FGlobal.invite_task = msg.data.invite.task;
                }
            }
            if (msg.data.coins) {
                cc.director.emit(FEventID.CARD_RECORD, msg.data.coins);
            }
            cc.director.emit(FEventID.FRESH_USERINFO, msg.data);
        }
    };
    FLogic.prototype.on_S2C_invited = function (msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
            return;
        }
    };
    FLogic.prototype.on_S2C_trans_history = function (msg) {
        var data = {
            redeem_task: FConfig.conf.redeem_task,
            history: null
        };
        if (msg.err) {
            data.history = null;
        }
        else {
            data.history = msg.data.records;
        }
        if (FLogic.getInstance().cbList[FEventID.S2C_trans_history]) {
            FLogic.getInstance().cbList[FEventID.S2C_trans_history].cb.call(FLogic.getInstance().cbList[FEventID.S2C_trans_history].target, data);
            FLogic.getInstance().cbList[FEventID.S2C_trans_history] = null;
        }
    };
    FLogic.prototype.on_S2C_pg_user_cnt = function (msg) {
        var data = null;
        if (msg.err) {
        }
        else {
            data = msg.data.info;
        }
        if (FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt]) {
            FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt].cb(data);
            FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt] = null;
        }
    };
    FLogic.prototype.on_S2C_trans = function (msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
        }
        else {
            if (FLogic.getInstance().cbList[FEventID.S2C_trans]) {
                FLogic.getInstance().cbList[FEventID.S2C_trans].cb();
                FLogic.getInstance().cbList[FEventID.S2C_trans] = null;
            }
        }
    };
    return FLogic;
}());
exports.FLogic = FLogic;

cc._RF.pop();