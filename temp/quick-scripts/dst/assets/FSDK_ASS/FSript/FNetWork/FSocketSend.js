
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FSocketSend.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk5ldFdvcmtcXEZTb2NrZXRTZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBRzVDLDRCQUE0QjtBQUM1QixJQUFpQixXQUFXLENBOEkzQjtBQTlJRCxXQUFpQixXQUFXO0lBQ3hCLE1BQU07SUFDTixTQUFnQixhQUFhO1FBQ3pCLGlCQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUZlLHlCQUFhLGdCQUU1QixDQUFBO0lBQ0QsTUFBTTtJQUNOLFNBQWdCLGlCQUFpQixDQUFDLE1BQVUsRUFBRSxJQUFTLEVBQUUsR0FBVTtRQUFqQyx1QkFBQSxFQUFBLFVBQVU7UUFBRSxxQkFBQSxFQUFBLFNBQVM7UUFBRSxvQkFBQSxFQUFBLFVBQVU7UUFDL0QsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEQsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDYixZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEU7YUFDSTtZQUNELFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25F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QUcsTUFBTSxDQUFDO1FBQy9DLGlCQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUhlLDJCQUFlLGtCQUc5QixDQUFBO0FBQ0wsQ0FBQyxFQTlJZ0IsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUE4STNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkdsb2JhbCB9IGZyb20gXCIuLi9GTW9kZWwvRkdsb2JhbFwiO1xyXG5cclxuZGVjbGFyZSBsZXQgcmVxdWlyZTtcclxuLy8gbGV0IG1kNSA9IHJlcXVpcmUoJ21kNScpO1xyXG5leHBvcnQgbmFtZXNwYWNlIEZTb2NrZXRTZW5kIHtcclxuICAgIC8v55So5oi355m75b2VXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX3JlZ19sb2dpbigpIHtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX3JlZ19sb2dpbik7XHJcbiAgICB9XHJcbiAgICAvL+abtOaWsOmHkeW4gVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEMyU191cGRhdGVfY3JlZGl0KGNoYW5nZSA9IDEsIGZyb20gPSAnJywgcG9zID0gbnVsbCkge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfdXBkYXRlX2NyZWRpdC5kYXRhLmNoYW5nZSA9IE1hdGguZmxvb3IoY2hhbmdlKTtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3VwZGF0ZV9jcmVkaXQuZGF0YS5mcm9tID0gZnJvbTtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3VwZGF0ZV9jcmVkaXQuZGF0YS5kZXRhaWwgPSAnJztcclxuICAgICAgICBmcm9tID0gZnJvbS5yZXBsYWNlKFwiIFwiLCBcIl9cIik7XHJcbiAgICAgICAgaWYgKHBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIFByb3RvY29sQ29kZS5DMlNfdXBkYXRlX2NyZWRpdC5kYXRhLmNvbmZfcG9zID0gWydjcmVkaXQnLCBmcm9tLCBwb3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUHJvdG9jb2xDb2RlLkMyU191cGRhdGVfY3JlZGl0LmRhdGEuY29uZl9wb3MgPSBbJ2NyZWRpdCcsIGZyb21dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX3VwZGF0ZV9jcmVkaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pu05paw5YW25a6D6LSn5biBXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX3VwZGF0ZV9jb2luKG5hbWUgPSAnJywgY2hhbmdlID0gMSwgZnJvbSA9ICcnLCBwb3MgPSBudWxsKSB7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU191cGRhdGVfY29pbi5kYXRhLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfdXBkYXRlX2NvaW4uZGF0YS5jaGFuZ2UgPSBjaGFuZ2U7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU191cGRhdGVfY29pbi5kYXRhLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfdXBkYXRlX2NvaW4uZGF0YS5kZXRhaWwgPSAnJztcclxuICAgICAgICBmcm9tID0gZnJvbS5yZXBsYWNlKFwiIFwiLCBcIl9cIik7XHJcbiAgICAgICAgaWYgKHBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIFByb3RvY29sQ29kZS5DMlNfdXBkYXRlX2NvaW4uZGF0YS5jb25mX3BvcyA9IFtuYW1lLCBmcm9tLCBwb3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUHJvdG9jb2xDb2RlLkMyU191cGRhdGVfY29pbi5kYXRhLmNvbmZfcG9zID0gW25hbWUsIGZyb21dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX3VwZGF0ZV9jb2luKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WPkemAgeW/g+i3s1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEMyU19oZWFydGJlYXQoKSB7XHJcbiAgICAgICAgRkdsb2JhbC5OZXRXb3JrLnJlcXVlc3QoUHJvdG9jb2xDb2RlLkMyU19oZWFydGJlYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5a2Y5YKo5pWw5o2uKOWNleWPguaVsClcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBDMlNfcHJlZmVyZW5jZShrZXkgPSAnJywgdmFsdWUgPSBudWxsLCBzYWZlID0gdHJ1ZSkge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfcHJlZmVyZW5jZS5kYXRhLmtleSA9IGtleTtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3ByZWZlcmVuY2UuZGF0YS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfcHJlZmVyZW5jZS5kYXRhLnNhZmUgPSBzYWZlO1xyXG4gICAgICAgIEZHbG9iYWwuTmV0V29yay5yZXF1ZXN0KFByb3RvY29sQ29kZS5DMlNfcHJlZmVyZW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lgqjlrZjmlbDmja4o5aSa5Y+C5pWwKVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEMyU19wcmVmZXJlbmNlcyhkYXRhKSB7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU19wcmVmZXJlbmNlcy5kYXRhID0gZGF0YTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX3ByZWZlcmVuY2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluetvuWIsOS/oeaBr1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEMyU19zaWduKCkge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfaW5mby5kYXRhLmZpZWxkcyA9IFsnZGFpbHlfY2hlY2tfaW4nXTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX2luZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v54K55Ye7562+5YiwXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX2RhaWx5X2NoZWNrX2luKCkge1xyXG4gICAgICAgIEZHbG9iYWwuTmV0V29yay5yZXF1ZXN0KFByb3RvY29sQ29kZS5DMlNfZGFpbHlfY2hlY2tfaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5Zu95a625YiX6KGoXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX2dpZnRfY291bnRyeSgpIHtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX2dpZnRfY291bnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/loavlhaXpgoDor7fnoIFcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBDMlNfaW52aXRlZChjb2RlID0gJycpIHtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX2ludml0ZWQuZGF0YS5jb2RlID0gY29kZTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX2ludml0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5Zu95a6256S854mp5YiX6KGoXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX2dpZnRfbGlzdChjb3VudHJ5ID0gJ1VTJykge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfZ2lmdF9saXN0LmRhdGEuY291bnRyeSA9IGNvdW50cnk7XHJcbiAgICAgICAgRkdsb2JhbC5OZXRXb3JrLnJlcXVlc3QoUHJvdG9jb2xDb2RlLkMyU19naWZ0X2xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YWR5o2i56S85ZOBXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX3RyYW5zKGlkLCBlbWFpbCwgcGhvbmUsIHRyYW5zX3R5cGUgPSAnY3JlZGl0Jykge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfdHJhbnMuZGF0YS5pZCA9IGlkO1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfdHJhbnMuZGF0YS50cmFuc19lbWFpbCA9IGVtYWlsO1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfdHJhbnMuZGF0YS5tb2JpbGUgPSBwaG9uZTtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3RyYW5zLmRhdGEudHJhbnNfdHlwZSA9IHRyYW5zX3R5cGU7XHJcbiAgICAgICAgRkdsb2JhbC5OZXRXb3JrLnJlcXVlc3QoUHJvdG9jb2xDb2RlLkMyU190cmFucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lj5HmlL7lub/mkq1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBDMlNfYnJvYWRjYXN0KG1zZykge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfYnJvYWRjYXN0LmRhdGEubXNnID0gbXNnO1xyXG4gICAgICAgIEZHbG9iYWwuTmV0V29yay5yZXF1ZXN0KFByb3RvY29sQ29kZS5DMlNfYnJvYWRjYXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WPkeaUvuiwt+atjOW5v+aSrVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEMyU19hZHdvcmRzKHJlZmVycmVyKSB7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU19hZHdvcmRzLmRhdGEucmVmZXJyZXIgPSByZWZlcnJlcjtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX2Fkd29yZHMpO1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwi6L+Z5Liq5bCx5piv5Zue6LCD5Y+R6YCBICAgXCIsIHJlZmVycmVyKVxyXG4gICAgfVxyXG5cclxuICAgIC8v5o6o5bm/QVBQ5Lu75Yqh6KGM5Li6XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX2FwcF9wcm9tb190YXNrKG5hbWU6IHN0cmluZywgYWN0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX2FwcF9wcm9tb190YXNrLmRhdGEubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU19hcHBfcHJvbW9fdGFzay5kYXRhLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX2FwcF9wcm9tb190YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aWsOaooeWdl+WFkeaNouiusOW9lVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIEMyU190cmFuc19oaXN0b3J5KHR5cGUpIHtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3RyYW5zX2hpc3RvcnkuZGF0YS50eXBlID0gdHlwZTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX3RyYW5zX2hpc3RvcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5bm/5ZGK5LqL5Lu26K6w5b2VXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX2FkX2V2ZW50KHNkaywgdHlwZSkge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfYWRfZXZlbnQuZGF0YS5zZGsgPSBzZGs7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU19hZF9ldmVudC5kYXRhLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIEZHbG9iYWwuTmV0V29yay5yZXF1ZXN0KFByb3RvY29sQ29kZS5DMlNfYWRfZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Liq5Lq65L+h5oGvXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX2luZm8oZmllbGRzID0gW10pIHtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX2luZm8uZGF0YS5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgRkdsb2JhbC5OZXRXb3JrLnJlcXVlc3QoUHJvdG9jb2xDb2RlLkMyU19pbmZvKTtcclxuICAgIH1cclxuICAgIC8v6K6h5pWw5ZmoXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQzJTX2FkZF9jb3VudGVycyhuYW1lLCBjb3VudCkge1xyXG4gICAgICAgIFByb3RvY29sQ29kZS5DMlNfYWRkX2NvdW50ZXJzLmRhdGEubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgUHJvdG9jb2xDb2RlLkMyU19hZGRfY291bnRlcnMuZGF0YS5jbnQgPSBjb3VudDtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsucmVxdWVzdChQcm90b2NvbENvZGUuQzJTX2FkZF9jb3VudGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bntK/orqHnlKjmiLfmlbBcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBDMlNfcGdfdXNlcl9jbnQocGdMaXN0ID0gW10pIHtcclxuICAgICAgICBQcm90b2NvbENvZGUuQzJTX3BnX3VzZXJfY250LmRhdGEucGdzID0gcGdMaXN0O1xyXG4gICAgICAgIEZHbG9iYWwuTmV0V29yay5yZXF1ZXN0KFByb3RvY29sQ29kZS5DMlNfcGdfdXNlcl9jbnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==