class FNetWorkConfig {
    //测试服socket地址
    static server_ip_debug = "";
    //正式服socket地址
    static server_ip_release = "";
    //socket连接端口
    static server_port = 8056;
    //登录信息
    static data = {
        ip_release: "",
        ip_debug: "",
        pg: "",
        isDebug: false,
        test_aid: "",
        code:"",
        tos_img:null
    };
    //获取socket地址，是测试服还是正式服
    static getServerIp() {
        return FConfig.IS_DEBUG ? FNetWorkConfig.server_ip_debug : FNetWorkConfig.server_ip_release;
    };
}
window['FNetWorkConfig'] = FNetWorkConfig;