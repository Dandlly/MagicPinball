import { FGlobal } from "../FModel/FGlobal";

export class FLogic {
    public cbList = {};
    public static _instance: FLogic;
    public RESTAR_TIME = null;
    //在线计时器
    public ONLINE_TIME = null;
    public static getInstance() {
        if (!FLogic._instance) {
            FLogic._instance = new FLogic();
        }
        return FLogic._instance;
    }

    //注册监听
    public addCommonListenser() {
        cc.director.on(FEventID.S2C_reg_login, this.on_S2C_reg_login, this);
        cc.director.on(FEventID.S2C_heartbeat, this.on_S2C_heartbeat, this);
        cc.director.on(FEventID.S2C_info, this.on_S2C_info, this);
        cc.director.on(FEventID.S2C_update_credit, this.on_S2C_update_credit, this);
        cc.director.on(FEventID.S2C_update_coin, this.on_S2C_update_coin, this);
        cc.director.on(FEventID.S2C_invited, this.on_S2C_invited, this);
        cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
        cc.director.on(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
        cc.director.on(FEventID.S2C_trans, this.on_S2C_trans, this);
    }

    //移除监听
    public removeCommonListenser() {
        cc.director.off(FEventID.S2C_reg_login, this.on_S2C_reg_login, this);
        cc.director.off(FEventID.S2C_update_credit, this.on_S2C_update_credit, this);
        cc.director.off(FEventID.S2C_info, this.on_S2C_info, this);
        cc.director.off(FEventID.S2C_heartbeat, this.on_S2C_heartbeat, this);
        cc.director.off(FEventID.S2C_update_coin, this.on_S2C_update_coin, this);
        cc.director.off(FEventID.S2C_invited, this.on_S2C_invited, this);
        cc.director.off(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
        cc.director.off(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
        cc.director.off(FEventID.S2C_trans, this.on_S2C_trans, this);
    }

    //心跳返回
    private on_S2C_heartbeat(msg) {
        if (FGlobal.getDateDay(FGlobal.USER_INFO.now) < FGlobal.getDateDay(msg.data.time)) {
            FGlobal.resetData();
            if (FLogic.getInstance().cbList[FEventID.NEXT_DAY]) {
                let cb = FLogic.getInstance().cbList[FEventID.NEXT_DAY].cb;
                let target = FLogic.getInstance().cbList[FEventID.NEXT_DAY].target;
                cb.call(target);
            }
        }
        FGlobal.USER_INFO.now = msg.data.time;
        FGlobal.NetWork.heartbeat();
    }

    //登录返回信息
    private on_S2C_reg_login(msg) {
        FSDK.hideToLoad();
        FLog.normal("服务器返回登录信息   ", msg);
        let cb = FLogic.getInstance().cbList[FEventID.S2C_reg_login].cb;
        let target = FLogic.getInstance().cbList[FEventID.S2C_reg_login].target;
        if (msg.err) {
            if (msg.err == 'RELOGIN MUST DELAY') {
                FGlobal.NetWork.clearAllTime();
                FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
                FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
                FGlobal.NetWork = null;
                FSDK.object.RESTAR_TIME = setTimeout(function () {
                    FSDK.init(FNetWorkConfig.data, FGlobal.NetWork.cb, FGlobal.NetWork.target);
                    clearTimeout(FSDK.object.RESTAR_TIME);
                    FSDK.hideToLoad();
                }, (msg.data.must_delay + 1) * 1000);
                FSDK.showToLoad("Rebinding", msg.data.must_delay + 1);
            }
            return;
        }
        if (msg.data) {
            FGlobal.USER_INFO.preferences = msg.data.preferences;
            FGlobal.setPreferences();
            FGlobal.USER_INFO.invite_code = msg.data.invite_code;
            cc.log('Kankan      ', msg.data)
            FGlobal.USER_INFO.invite_count = msg.data.invite_count;
            FGlobal.USER_INFO.be_invite = msg.data.personal.invited;
            FGlobal.USER_INFO.login_cnt = msg.data.login_cnt;
            FGlobal.USER_INFO.login_days = msg.data.login_days;
            FGlobal.USER_INFO.credit = msg.data.basic.credit;
            FGlobal.USER_INFO.reg_time = msg.data.reg_time;
            FGlobal.USER_INFO.off_time = msg.data.offline_timelen;
            FGlobal.USER_INFO.login_time = msg.data.now;
            FGlobal.USER_INFO.trans_record = msg.data.basic.redeem_task;
            FGlobal.USER_INFO.online_total = msg.data.online_total;
            FGlobal.USER_INFO.isFlag = msg.data.basic.user_vip;
            FGlobal.USER_INFO.isBlack = msg.data.b;
            FGlobal.USER_INFO.now = msg.data.now;
            FGlobal.USER_INFO.credit_pp = msg.data.basic.coins["pp"] ? msg.data.basic.coins["pp"] : 0;
            FGlobal.USER_INFO.credit_gp = msg.data.basic.coins["gp"] ? msg.data.basic.coins["gp"] : 0;
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
            FGlobal.setConf();

            //是否第二天重置
            if (FGlobal.getDateDay(FGlobal.USER_INFO.login_time - FGlobal.USER_INFO.off_time) < FGlobal.getDateDay(FGlobal.USER_INFO.login_time)) {
                FGlobal.resetData();
                FGlobal.USER_INFO.isNextDay = true;
            }
            else {
                FGlobal.USER_INFO.isNextDay = false;
            }
            if (!this.ONLINE_TIME && !FGlobal.USER_INFO.preferences['real']) {
                this.ONLINE_TIME = setInterval(() => {
                    FGlobal.USER_INFO.online_total++;
                    if (FGlobal.USER_INFO.online_total >= FConfig.FSDK_CONF.REAL_USER.online_time) {
                        FSDK.setActiveUser();
                    }
                }, 1000)
            }
        }
        cb.call(target, FGlobal.USER_INFO);
        FNative.preloadVideo(FConfig.FSDK_CONF.AD_CONF.video);
        FNative.preloadInters(FConfig.FSDK_CONF.AD_CONF.inters);
        FSDK.umengEvent("server_suc", "0");


        //插屏时间验证
        let lineTime = FGlobal.USER_INFO.now - FGlobal.USER_INFO.reg_time;
        if (FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - lineTime > 0) {
            FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - lineTime + FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
        }
        else {
            FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
        }
        FNative.freshInters();

    }

    //credit更新信息
    private on_S2C_update_credit(msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
            return;
        }
        let change = 0;
        if (msg.data) {
            change = msg.data.credit - FGlobal.USER_INFO.credit;
            FGlobal.USER_INFO.credit = msg.data.credit;
            if (FGlobal.USER_INFO.credit >= 100000) {
                FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_100000, "1", true)
            }
            if (FGlobal.USER_INFO.credit >= 225000) {
                FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_225000, "1", true)
            }
            if (FGlobal.USER_INFO.credit >= 400000) {
                FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_coin_400000, "1", true)
            }



        }
        let data = {
            type: "credit",
            num: FGlobal.USER_INFO.credit,
            change: change
        };
        cc.director.emit(FEventID.FRESH_CREDIT, data)
    }

    //其它credit更新信息
    private on_S2C_update_coin(msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
            return;
        }
        let change = 0;
        if (msg.data) {
            switch (msg.data.name) {
                case 'pp':
                    change = msg.data.coin - FGlobal.USER_INFO.credit_pp;
                    FGlobal.USER_INFO.credit_pp = msg.data.coin;
                    if (FGlobal.USER_INFO.credit_pp >= 100) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_pp_100, "1", true);
                    }
                    FGlobal.USER_INFO.cardGet.pp++;
                    if (FGlobal.USER_INFO.cardGet.pp >= 497) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_pp_max, "1", true)
                    }
                    break;
                case 'gp':
                    change = msg.data.coin - FGlobal.USER_INFO.credit_gp;
                    FGlobal.USER_INFO.credit_gp = msg.data.coin;
                    if (FGlobal.USER_INFO.credit_gp >= 100) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_gp_100, "1", true);
                    }
                    FGlobal.USER_INFO.cardGet.gp++;
                    if (FGlobal.USER_INFO.cardGet.gp >= 497) {
                        FSDK.umengEvent(FConfig.UMENG_CONFIG.Redeem_gp_max, "1", true)
                    }
                    break;
            }
        }
        let data = {
            type: msg.data.name,
            num: FGlobal.USER_INFO["credit_" + msg.data.name],
            change: change
        };
        FSDK.saveData("CARD_GET", FGlobal.USER_INFO.cardGet);
        cc.director.emit(FEventID.FRESH_CREDIT, data);
    }

    //返回信息同步数据
    private on_S2C_info(msg) {
        if (msg.err) {
            return;
        }
        if (msg.data) {
            if (msg.data.basic) {
                if (msg.data.basic.user_vip) {
                    FGlobal.USER_INFO.isFlag = msg.data.basic.user_vip;
                    cc.director.emit(FEventID.FRESH_FLAG, FGlobal.USER_INFO.isFlag);
                }
                if (msg.data.basic.credit) {
                    FGlobal.USER_INFO.credit = msg.data.basic.credit;
                }
            }
            if (msg.data.invite) {
                FGlobal.USER_INFO.invite_count = msg.data.invite.count;
                if (msg.data.invite.task) {
                    FGlobal.invite_task = msg.data.invite.task;
                }
            }
            if (msg.data.coins) {
                cc.director.emit(FEventID.CARD_RECORD, msg.data.coins);
            }
            cc.director.emit(FEventID.FRESH_USERINFO, msg.data);
        }
    }

    private on_S2C_invited(msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
            return;
        }
    }

    private on_S2C_trans_history(msg) {
        let data = {
            redeem_task: FConfig.conf.redeem_task,
            history: null
        }
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
    }

    private on_S2C_pg_user_cnt(msg) {
        let data = null;
        if (msg.err) {

        }
        else {
            data = msg.data.info;
        }
        if (FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt]) {
            FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt].cb(data);
            FLogic.getInstance().cbList[FEventID.S2C_pg_user_cnt] = null;
        }
    }

    private on_S2C_trans(msg) {
        if (msg.err) {
            FSDK.showToast(msg.err);
        }
        else {
            if (FLogic.getInstance().cbList[FEventID.S2C_trans]) {
                FLogic.getInstance().cbList[FEventID.S2C_trans].cb();
                FLogic.getInstance().cbList[FEventID.S2C_trans] = null;
            }
        }
    }
}