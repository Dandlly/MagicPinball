import { FGlobal } from "../FModel/FGlobal";

declare let require;
// let md5 = require('md5');
export namespace FSocketSend {
    //用户登录
    export function C2S_reg_login() {
        FGlobal.NetWork.request(ProtocolCode.C2S_reg_login);
    }
    //更新金币
    export function C2S_update_credit(change = 1, from = '', pos = null) {
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
        FGlobal.NetWork.request(ProtocolCode.C2S_update_credit);
    }

    //更新其它货币
    export function C2S_update_coin(name = '', change = 1, from = '', pos = null) {
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
        FGlobal.NetWork.request(ProtocolCode.C2S_update_coin);
    }

    //发送心跳
    export function C2S_heartbeat() {
        FGlobal.NetWork.request(ProtocolCode.C2S_heartbeat);
    }

    //存储数据(单参数)
    export function C2S_preference(key = '', value = null, safe = true) {
        ProtocolCode.C2S_preference.data.key = key;
        ProtocolCode.C2S_preference.data.value = value;
        ProtocolCode.C2S_preference.data.safe = safe;
        FGlobal.NetWork.request(ProtocolCode.C2S_preference);
    }

    //储存数据(多参数)
    export function C2S_preferences(data) {
        ProtocolCode.C2S_preferences.data = data;
        FGlobal.NetWork.request(ProtocolCode.C2S_preferences);
    }

    //获取签到信息
    export function C2S_sign() {
        ProtocolCode.C2S_info.data.fields = ['daily_check_in'];
        FGlobal.NetWork.request(ProtocolCode.C2S_info);
    }

    //点击签到
    export function C2S_daily_check_in() {
        FGlobal.NetWork.request(ProtocolCode.C2S_daily_check_in);
    }

    //获取国家列表
    export function C2S_gift_country() {
        FGlobal.NetWork.request(ProtocolCode.C2S_gift_country);
    }

    //填入邀请码
    export function C2S_invited(code = '') {
        ProtocolCode.C2S_invited.data.code = code;
        FGlobal.NetWork.request(ProtocolCode.C2S_invited);
    }

    //获取国家礼物列表
    export function C2S_gift_list(country = 'US') {
        ProtocolCode.C2S_gift_list.data.country = country;
        FGlobal.NetWork.request(ProtocolCode.C2S_gift_list);
    }

    //兑换礼品
    export function C2S_trans(id, email, phone, trans_type = 'credit') {
        ProtocolCode.C2S_trans.data.id = id;
        ProtocolCode.C2S_trans.data.trans_email = email;
        ProtocolCode.C2S_trans.data.mobile = phone;
        ProtocolCode.C2S_trans.data.trans_type = trans_type;
        FGlobal.NetWork.request(ProtocolCode.C2S_trans);
    }

    //发放广播
    export function C2S_broadcast(msg) {
        ProtocolCode.C2S_broadcast.data.msg = msg;
        FGlobal.NetWork.request(ProtocolCode.C2S_broadcast);
    }

    //发放谷歌广播
    export function C2S_adwords(referrer) {
        ProtocolCode.C2S_adwords.data.referrer = referrer;
        FGlobal.NetWork.request(ProtocolCode.C2S_adwords);
        FLog.normal("这个就是回调发送   ", referrer)
    }

    //推广APP任务行为
    export function C2S_app_promo_task(name: string, action: number) {
        ProtocolCode.C2S_app_promo_task.data.name = name;
        ProtocolCode.C2S_app_promo_task.data.action = action;
        FGlobal.NetWork.request(ProtocolCode.C2S_app_promo_task);
    }

    //新模块兑换记录
    export function C2S_trans_history(type) {
        ProtocolCode.C2S_trans_history.data.type = type;
        FGlobal.NetWork.request(ProtocolCode.C2S_trans_history);
    }

    //广告事件记录
    export function C2S_ad_event(sdk, type) {
        ProtocolCode.C2S_ad_event.data.sdk = sdk;
        ProtocolCode.C2S_ad_event.data.type = type;
        FGlobal.NetWork.request(ProtocolCode.C2S_ad_event);
    }

    //个人信息
    export function C2S_info(fields = []) {
        ProtocolCode.C2S_info.data.fields = fields;
        FGlobal.NetWork.request(ProtocolCode.C2S_info);
    }
    //计数器
    export function C2S_add_counters(name, count) {
        ProtocolCode.C2S_add_counters.data.name = name;
        ProtocolCode.C2S_add_counters.data.cnt = count;
        FGlobal.NetWork.request(ProtocolCode.C2S_add_counters);
    }

    //获取累计用户数
    export function C2S_pg_user_cnt(pgList = []) {
        ProtocolCode.C2S_pg_user_cnt.data.pgs = pgList;
        FGlobal.NetWork.request(ProtocolCode.C2S_pg_user_cnt);
    }
}
