"use strict";
cc._RF.push(module, '4c7f5lpeEdBL6LOfTlEqgUW', 'FSocketSend');
// FSDK_ASS/FSript/FNetWork/FSocketSend.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FGlobal_1 = require("../FModel/FGlobal");
// let md5 = require('md5');
var FSocketSend;
(function (FSocketSend) {
    //用户登录
    function C2S_reg_login() {
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_reg_login);
    }
    FSocketSend.C2S_reg_login = C2S_reg_login;
    //更新金币
    function C2S_update_credit(change, from, pos) {
        if (change === void 0) { change = 1; }
        if (from === void 0) { from = ''; }
        if (pos === void 0) { pos = null; }
        ProtocolCode.C2S_update_credit.data.change = Math.floor(change);
        ProtocolCode.C2S_update_credit.data.from = from;
        ProtocolCode.C2S_update_credit.data.detail = '';
        from = from.replace(" ", "_");
        if (pos != null) {
            ProtocolCode.C2S_update_credit.data.conf_pos = ['credit', from, pos];
        }
        else {
            ProtocolCode.C2S_update_credit.data.conf_pos = ['credit', from];
        }
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_update_credit);
    }
    FSocketSend.C2S_update_credit = C2S_update_credit;
    //更新其它货币
    function C2S_update_coin(name, change, from, pos) {
        if (name === void 0) { name = ''; }
        if (change === void 0) { change = 1; }
        if (from === void 0) { from = ''; }
        if (pos === void 0) { pos = null; }
        ProtocolCode.C2S_update_coin.data.name = name;
        ProtocolCode.C2S_update_coin.data.change = change;
        ProtocolCode.C2S_update_coin.data.from = from;
        ProtocolCode.C2S_update_coin.data.detail = '';
        from = from.replace(" ", "_");
        if (pos != null) {
            ProtocolCode.C2S_update_coin.data.conf_pos = [name, from, pos];
        }
        else {
            ProtocolCode.C2S_update_coin.data.conf_pos = [name, from];
        }
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_update_coin);
    }
    FSocketSend.C2S_update_coin = C2S_update_coin;
    //发送心跳
    function C2S_heartbeat() {
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_heartbeat);
    }
    FSocketSend.C2S_heartbeat = C2S_heartbeat;
    //存储数据(单参数)
    function C2S_preference(key, value, safe) {
        if (key === void 0) { key = ''; }
        if (value === void 0) { value = null; }
        if (safe === void 0) { safe = true; }
        ProtocolCode.C2S_preference.data.key = key;
        ProtocolCode.C2S_preference.data.value = value;
        ProtocolCode.C2S_preference.data.safe = safe;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_preference);
    }
    FSocketSend.C2S_preference = C2S_preference;
    //储存数据(多参数)
    function C2S_preferences(data) {
        ProtocolCode.C2S_preferences.data = data;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_preferences);
    }
    FSocketSend.C2S_preferences = C2S_preferences;
    //获取签到信息
    function C2S_sign() {
        ProtocolCode.C2S_info.data.fields = ['daily_check_in'];
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_info);
    }
    FSocketSend.C2S_sign = C2S_sign;
    //点击签到
    function C2S_daily_check_in() {
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_daily_check_in);
    }
    FSocketSend.C2S_daily_check_in = C2S_daily_check_in;
    //获取国家列表
    function C2S_gift_country() {
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_gift_country);
    }
    FSocketSend.C2S_gift_country = C2S_gift_country;
    //填入邀请码
    function C2S_invited(code) {
        if (code === void 0) { code = ''; }
        ProtocolCode.C2S_invited.data.code = code;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_invited);
    }
    FSocketSend.C2S_invited = C2S_invited;
    //获取国家礼物列表
    function C2S_gift_list(country) {
        if (country === void 0) { country = 'US'; }
        ProtocolCode.C2S_gift_list.data.country = country;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_gift_list);
    }
    FSocketSend.C2S_gift_list = C2S_gift_list;
    //兑换礼品
    function C2S_trans(id, email, phone, trans_type) {
        if (trans_type === void 0) { trans_type = 'credit'; }
        ProtocolCode.C2S_trans.data.id = id;
        ProtocolCode.C2S_trans.data.trans_email = email;
        ProtocolCode.C2S_trans.data.mobile = phone;
        ProtocolCode.C2S_trans.data.trans_type = trans_type;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_trans);
    }
    FSocketSend.C2S_trans = C2S_trans;
    //发放广播
    function C2S_broadcast(msg) {
        ProtocolCode.C2S_broadcast.data.msg = msg;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_broadcast);
    }
    FSocketSend.C2S_broadcast = C2S_broadcast;
    //发放谷歌广播
    function C2S_adwords(referrer) {
        ProtocolCode.C2S_adwords.data.referrer = referrer;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_adwords);
        FLog.normal("这个就是回调发送   ", referrer);
    }
    FSocketSend.C2S_adwords = C2S_adwords;
    //推广APP任务行为
    function C2S_app_promo_task(name, action) {
        ProtocolCode.C2S_app_promo_task.data.name = name;
        ProtocolCode.C2S_app_promo_task.data.action = action;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_app_promo_task);
    }
    FSocketSend.C2S_app_promo_task = C2S_app_promo_task;
    //新模块兑换记录
    function C2S_trans_history(type) {
        ProtocolCode.C2S_trans_history.data.type = type;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_trans_history);
    }
    FSocketSend.C2S_trans_history = C2S_trans_history;
    //广告事件记录
    function C2S_ad_event(sdk, type) {
        ProtocolCode.C2S_ad_event.data.sdk = sdk;
        ProtocolCode.C2S_ad_event.data.type = type;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_ad_event);
    }
    FSocketSend.C2S_ad_event = C2S_ad_event;
    //个人信息
    function C2S_info(fields) {
        if (fields === void 0) { fields = []; }
        ProtocolCode.C2S_info.data.fields = fields;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_info);
    }
    FSocketSend.C2S_info = C2S_info;
    //计数器
    function C2S_add_counters(name, count) {
        ProtocolCode.C2S_add_counters.data.name = name;
        ProtocolCode.C2S_add_counters.data.cnt = count;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_add_counters);
    }
    FSocketSend.C2S_add_counters = C2S_add_counters;
    //获取累计用户数
    function C2S_pg_user_cnt(pgList) {
        if (pgList === void 0) { pgList = []; }
        ProtocolCode.C2S_pg_user_cnt.data.pgs = pgList;
        FGlobal_1.FGlobal.NetWork.request(ProtocolCode.C2S_pg_user_cnt);
    }
    FSocketSend.C2S_pg_user_cnt = C2S_pg_user_cnt;
})(FSocketSend = exports.FSocketSend || (exports.FSocketSend = {}));

cc._RF.pop();