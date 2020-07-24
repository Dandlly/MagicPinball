
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FModel/FEventID.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk1vZGVsXFxGRXZlbnRJRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBbUNBLENBQUM7SUFsQ0csVUFBVTtJQUNILG9CQUFXLEdBQVUsYUFBYSxDQUFDO0lBQ25DLHVCQUFjLEdBQVUsZ0JBQWdCLENBQUM7SUFFaEQsUUFBUTtJQUNNLHNCQUFhLEdBQVUsZUFBZSxDQUFDO0lBQ3ZDLHNCQUFhLEdBQVUsZUFBZSxDQUFDO0lBQ3ZDLDBCQUFpQixHQUFVLG1CQUFtQixDQUFDO0lBQy9DLHdCQUFlLEdBQVUsaUJBQWlCLENBQUM7SUFDM0MsMkJBQWtCLEdBQVUsb0JBQW9CLENBQUM7SUFDakQsaUJBQVEsR0FBVSxVQUFVLENBQUM7SUFDN0Isb0JBQVcsR0FBVSxhQUFhLENBQUM7SUFDbkMseUJBQWdCLEdBQVUsa0JBQWtCLENBQUM7SUFDN0Msc0JBQWEsR0FBVSxlQUFlLENBQUM7SUFDdkMsa0JBQVMsR0FBVSxXQUFXLENBQUM7SUFDL0Isc0JBQWEsR0FBVSxlQUFlLENBQUM7SUFDdkMseUJBQWdCLEdBQVcsa0JBQWtCLENBQUM7SUFDOUMsb0JBQVcsR0FBVyxhQUFhLENBQUM7SUFDcEMsb0JBQVcsR0FBVyxhQUFhLENBQUM7SUFDcEMsd0JBQWUsR0FBVSxpQkFBaUIsQ0FBQztJQUMzQywwQkFBaUIsR0FBVSxtQkFBbUIsQ0FBQztJQUU3RCxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNRLHFCQUFZLEdBQVUsY0FBYyxDQUFDO0lBQ25ELE1BQU07SUFDUSxpQkFBUSxHQUFVLFVBQVUsQ0FBQztJQUMzQyxTQUFTO0lBQ0ssdUJBQWMsR0FBVSxnQkFBZ0IsQ0FBQztJQUN2RCxNQUFNO0lBQ1Esb0JBQVcsR0FBVSxhQUFhLENBQUM7SUFDakQsTUFBTTtJQUNRLG1CQUFVLEdBQVUsWUFBWSxDQUFDO0lBRW5ELGVBQUM7Q0FuQ0QsQUFtQ0MsSUFBQTtBQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgRkV2ZW50SUQge1xyXG4gICAgLy9zb2NrZXTnm5HlkKxcclxuICAgIHN0YXRpYyBFVkVOVF9DTE9TRTpzdHJpbmcgPSAnRVZFTlRfQ0xPU0UnO1xyXG4gICAgc3RhdGljIEVWRU5UX0lPX0VSUk9SOnN0cmluZyA9ICdFVkVOVF9JT19FUlJPUic7XHJcblxyXG4gICAgLy/ljY/orq7ov5Tlm57nm5HlkKxcclxuICAgIHB1YmxpYyBzdGF0aWMgUzJDX3JlZ19sb2dpbjpzdHJpbmcgPSAnUzJDX3JlZ19sb2dpbic7XHJcbiAgICBwdWJsaWMgc3RhdGljIFMyQ19oZWFydGJlYXQ6c3RyaW5nID0gJ1MyQ19oZWFydGJlYXQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTMkNfdXBkYXRlX2NyZWRpdDpzdHJpbmcgPSAnUzJDX3VwZGF0ZV9jcmVkaXQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTMkNfdXBkYXRlX2NvaW46c3RyaW5nID0gJ1MyQ191cGRhdGVfY29pbic7XHJcbiAgICBwdWJsaWMgc3RhdGljIFMyQ19kYWlseV9jaGVja19pbjpzdHJpbmcgPSAnUzJDX2RhaWx5X2NoZWNrX2luJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUzJDX2luZm86c3RyaW5nID0gJ1MyQ19pbmZvJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUzJDX2ludml0ZWQ6c3RyaW5nID0gJ1MyQ19pbnZpdGVkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUzJDX2dpZnRfY291bnRyeTpzdHJpbmcgPSAnUzJDX2dpZnRfY291bnRyeSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFMyQ19naWZ0X2xpc3Q6c3RyaW5nID0gJ1MyQ19naWZ0X2xpc3QnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTMkNfdHJhbnM6c3RyaW5nID0gJ1MyQ190cmFucyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFMyQ19icm9hZGNhc3Q6c3RyaW5nID0gJ1MyQ19icm9hZGNhc3QnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTMkNfYWRkX2NvdW50ZXJzOiBzdHJpbmcgPSAnUzJDX2FkZF9jb3VudGVycyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFMyQ19mcmllbmRzOiBzdHJpbmcgPSAnUzJDX2ZyaWVuZHMnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTMkNfd3hfaW5mbzogc3RyaW5nID0gJ1MyQ193eF9pbmZvJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUzJDX3BnX3VzZXJfY250OnN0cmluZyA9ICdTMkNfcGdfdXNlcl9jbnQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTMkNfdHJhbnNfaGlzdG9yeTpzdHJpbmcgPSAnUzJDX3RyYW5zX2hpc3RvcnknO1xyXG5cclxuICAgIC8v5LqL5Lu255uR5ZCsLS0tLS0tLS0tLVxyXG4gICAgLy/ph5HluIHliLfmlrBcclxuICAgIHB1YmxpYyBzdGF0aWMgRlJFU0hfQ1JFRElUOnN0cmluZyA9ICdGUkVTSF9DUkVESVQnO1xyXG4gICAgLy/mrKHml6XliLfmlrBcclxuICAgIHB1YmxpYyBzdGF0aWMgTkVYVF9EQVk6c3RyaW5nID0gJ05FWFRfREFZJztcclxuICAgIC8v5pyN5Yqh5Zmo5Li75Yqo5L+h5oGvXHJcbiAgICBwdWJsaWMgc3RhdGljIEZSRVNIX1VTRVJJTkZPOnN0cmluZyA9ICdGUkVTSF9VU0VSSU5GTyc7XHJcbiAgICAvL+WOhuWPsuiusOW9lVxyXG4gICAgcHVibGljIHN0YXRpYyBDQVJEX1JFQ09SRDpzdHJpbmcgPSAnQ0FSRF9SRUNPUkQnO1xyXG4gICAgLy/po47mjqfnm5HlkKxcclxuICAgIHB1YmxpYyBzdGF0aWMgRlJFU0hfRkxBRzpzdHJpbmcgPSAnRlJFU0hfRkxBRyc7XHJcblxyXG59XHJcbndpbmRvd1snRkV2ZW50SUQnXSA9IEZFdmVudElEOyJdfQ==