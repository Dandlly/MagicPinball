"use strict";
cc._RF.push(module, 'b3894dOcBRARbAu4xSDx3Qh', 'FEventID');
// FSDK_ASS/FSript/FModel/FEventID.ts

var FEventID = /** @class */ (function () {
    function FEventID() {
    }
    //socket监听
    FEventID.EVENT_CLOSE = 'EVENT_CLOSE';
    FEventID.EVENT_IO_ERROR = 'EVENT_IO_ERROR';
    //协议返回监听
    FEventID.S2C_reg_login = 'S2C_reg_login';
    FEventID.S2C_heartbeat = 'S2C_heartbeat';
    FEventID.S2C_update_credit = 'S2C_update_credit';
    FEventID.S2C_update_coin = 'S2C_update_coin';
    FEventID.S2C_daily_check_in = 'S2C_daily_check_in';
    FEventID.S2C_info = 'S2C_info';
    FEventID.S2C_invited = 'S2C_invited';
    FEventID.S2C_gift_country = 'S2C_gift_country';
    FEventID.S2C_gift_list = 'S2C_gift_list';
    FEventID.S2C_trans = 'S2C_trans';
    FEventID.S2C_broadcast = 'S2C_broadcast';
    FEventID.S2C_add_counters = 'S2C_add_counters';
    FEventID.S2C_friends = 'S2C_friends';
    FEventID.S2C_wx_info = 'S2C_wx_info';
    FEventID.S2C_pg_user_cnt = 'S2C_pg_user_cnt';
    FEventID.S2C_trans_history = 'S2C_trans_history';
    //事件监听----------
    //金币刷新
    FEventID.FRESH_CREDIT = 'FRESH_CREDIT';
    //次日刷新
    FEventID.NEXT_DAY = 'NEXT_DAY';
    //服务器主动信息
    FEventID.FRESH_USERINFO = 'FRESH_USERINFO';
    //历史记录
    FEventID.CARD_RECORD = 'CARD_RECORD';
    //风控监听
    FEventID.FRESH_FLAG = 'FRESH_FLAG';
    return FEventID;
}());
window['FEventID'] = FEventID;

cc._RF.pop();