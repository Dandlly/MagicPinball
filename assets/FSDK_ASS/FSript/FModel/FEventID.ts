
class FEventID {
    //socket监听
    static EVENT_CLOSE:string = 'EVENT_CLOSE';
    static EVENT_IO_ERROR:string = 'EVENT_IO_ERROR';

    //协议返回监听
    public static S2C_reg_login:string = 'S2C_reg_login';
    public static S2C_heartbeat:string = 'S2C_heartbeat';
    public static S2C_update_credit:string = 'S2C_update_credit';
    public static S2C_update_coin:string = 'S2C_update_coin';
    public static S2C_daily_check_in:string = 'S2C_daily_check_in';
    public static S2C_info:string = 'S2C_info';
    public static S2C_invited:string = 'S2C_invited';
    public static S2C_gift_country:string = 'S2C_gift_country';
    public static S2C_gift_list:string = 'S2C_gift_list';
    public static S2C_trans:string = 'S2C_trans';
    public static S2C_broadcast:string = 'S2C_broadcast';
    public static S2C_add_counters: string = 'S2C_add_counters';
    public static S2C_friends: string = 'S2C_friends';
    public static S2C_wx_info: string = 'S2C_wx_info';
    public static S2C_pg_user_cnt:string = 'S2C_pg_user_cnt';
    public static S2C_trans_history:string = 'S2C_trans_history';

    //事件监听----------
    //金币刷新
    public static FRESH_CREDIT:string = 'FRESH_CREDIT';
    //次日刷新
    public static NEXT_DAY:string = 'NEXT_DAY';
    //服务器主动信息
    public static FRESH_USERINFO:string = 'FRESH_USERINFO';
    //历史记录
    public static CARD_RECORD:string = 'CARD_RECORD';
    //风控监听
    public static FRESH_FLAG:string = 'FRESH_FLAG';

}
window['FEventID'] = FEventID;