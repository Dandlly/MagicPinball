"use strict";
cc._RF.push(module, 'e79f0Kr975KMJcFzmDP5351', 'FNetWorkConfig');
// FSDK_ASS/FSript/FNetWork/FNetWorkConfig.ts

var FNetWorkConfig = /** @class */ (function () {
    function FNetWorkConfig() {
    }
    //获取socket地址，是测试服还是正式服
    FNetWorkConfig.getServerIp = function () {
        return FConfig.IS_DEBUG ? FNetWorkConfig.server_ip_debug : FNetWorkConfig.server_ip_release;
    };
    ;
    //测试服socket地址
    FNetWorkConfig.server_ip_debug = "";
    //正式服socket地址
    FNetWorkConfig.server_ip_release = "";
    //socket连接端口
    FNetWorkConfig.server_port = 8056;
    //登录信息
    FNetWorkConfig.data = {
        ip_release: "",
        ip_debug: "",
        pg: "",
        isDebug: false,
        test_aid: "",
        code: "",
        tos_img: null
    };
    return FNetWorkConfig;
}());
window['FNetWorkConfig'] = FNetWorkConfig;

cc._RF.pop();