class FConfig {
    //是否开启测试服
    static IS_DEBUG = false;
    //是否开启打印控制台
    static IS_LOG = true;
    //名称
    static GAME_NAME = "测试";
    //版本号
    static VERSION = "1.0.0";
    //版本值
    static VERSION_CODE = 100;
    static LINK_CONF = null;
    static FSDK_CONF = {
        "UPDATE_CONF": {
            "ver": "1.0.1",
            "must": false
        },
        "AD_CONF": {
            "video_fresh_time": 0,
            "inters_fresh_time": {
                "star": 300,
                "new": 600,
                "old": 300
            },
            "video_limit": 100,
            "inters_limit": {
                "new": 10,
                "old": 20
            },
            "video": "b5b449f2f58cd7",
            "inters": "b5bbdc725768fa",
            "banner": "b5baca41a2536f"
        },
        "isBlack": false,
        "REAL_USER": {
            "online_time": 10800,
            "ad_num": 35
        },
        "SCALE_PADDING": 0.56,
        "TOP_PADDING": 65,
        "CREDIT_DIF": [0, 100001, 200001],
        "RANDOM_REWARD": [
            { "cardNum": [0, 50], "credit": 0, "card": 1 },
            { "cardNum": [50, 100], "credit": 0.15, "card": 0.85 },
            { "cardNum": [100, 200], "credit": 0.3, "card": 0.7 },
            { "cardNum": [200, 400], "credit": 0.5, "card": 0.5 },
            { "cardNum": [400, 500], "credit": 0.7, "card": 0.3 }
        ],
        "CAR_GET_CONF": {
            "pp": 30,
            "gp": 30,
            "card": [
                { "id": 101, "have": [0, 30], "win": [1, 3] },
                { "id": 102, "have": [30, 50], "win": [1, 2] },
                { "id": 103, "have": [50, 80], "win": [0.5, 2] },
                { "id": 104, "have": [80, 100], "win": [0.5, 1] },
                { "id": 105, "have": [100, 150], "win": [0.5, 1] },
                { "id": 106, "have": [150, 200], "win": [0.5, 1] },
                { "id": 107, "have": [200, 250], "win": [0.1, 1] },
                { "id": 108, "have": [250, 300], "win": [0.1, 1] },
                { "id": 109, "have": [300, 350], "win": [0.05, 1] },
                { "id": 110, "have": [350, 400], "win": [0.05, 1] },
                { "id": 111, "have": [400, 450], "win": [0.05, 0.5] },
                { "id": 112, "have": [450, 498], "win": [0.05, 0.1] },
                { "id": 113, "have": [498, 999], "win": [0, 0] }
            ]
        },
        "MARQUEE_CONF": {
            "fresh_time": [5, 15],
            "weight": [
                { "id": 101, "type": 1, "desc": "Google Gift Card", "weight": 10000, "num": "$10", "color": "#6CE73C" },
                { "id": 102, "type": 1, "desc": "Google Gift Card", "weight": 5000, "num": "$20", "color": "#6CE73C" },
                { "id": 103, "type": 1, "desc": "Google Gift Card", "weight": 3000, "num": "$50", "color": "#6CE73C" },
                { "id": 104, "type": 1, "desc": "Google Gift Card", "weight": 1000, "num": "$100", "color": "#6CE73C" },
                { "id": 105, "type": 1, "desc": "Google Gift Card", "weight": 500, "num": "$500", "color": "#6CE73C" },
                { "id": 201, "type": 2, "desc": "App store Gift Card", "weight": 10000, "num": "$10", "color": "#6CE73C" },
                { "id": 202, "type": 2, "desc": "App store Gift Card", "weight": 5000, "num": "$20", "color": "#6CE73C" },
                { "id": 203, "type": 2, "desc": "App store Gift Card", "weight": 3000, "num": "$50", "color": "#6CE73C" },
                { "id": 204, "type": 2, "desc": "App store Gift Card", "weight": 1000, "num": "$100", "color": "#6CE73C" },
                { "id": 205, "type": 2, "desc": "App store Gift Card", "weight": 500, "num": "$500", "color": "#6CE73C" },
                { "id": 301, "type": 3, "desc": "Paypal Gift Card", "weight": 10000, "num": "$10", "color": "#00D6FF" },
                { "id": 302, "type": 3, "desc": "Paypal Gift Card", "weight": 5000, "num": "$20", "color": "#00D6FF" },
                { "id": 303, "type": 3, "desc": "Paypal Gift Card", "weight": 3000, "num": "$50", "color": "#00D6FF" },
                { "id": 304, "type": 3, "desc": "Paypal Gift Card", "weight": 1000, "num": "$100", "color": "#00D6FF" },
                { "id": 305, "type": 3, "desc": "Paypal Gift Card", "weight": 500, "num": "$500", "color": "#00D6FF" },
                { "id": 401, "type": 4, "desc": "Amazon Gift Card", "weight": 6000, "num": "$10", "color": "#FF905C" },
                { "id": 402, "type": 4, "desc": "Amazon Gift Card", "weight": 3000, "num": "$20", "color": "#FF905C" },
                { "id": 403, "type": 4, "desc": "Amazon Gift Card", "weight": 1800, "num": "$50", "color": "#FF905C" },
                { "id": 404, "type": 4, "desc": "Amazon Gift Card", "weight": 600, "num": "$100", "color": "#FF905C" },
                { "id": 405, "type": 4, "desc": "Amazon Gift Card", "weight": 300, "num": "$500", "color": "#FF905C" }
            ]
        },
        "LIST_CONF": {
            "targetTitle": [
                "Collect & more coins to redeem",
                "Historical highest level reaches &Lv",
                "Login for & days consecutively"
            ],
            "target": [
                { "id": 101, "name": "Google", "type": 1, "value": 10, "coin": 100000, "step1": 100000, "step2": 100, "step3": 30 },
                { "id": 102, "name": "Google", "type": 1, "value": 25, "coin": 225000, "step1": 225000, "step2": 200, "step3": 50 },
                { "id": 103, "name": "Google", "type": 1, "value": 50, "coin": 400000, "step1": 400000, "step2": 300, "step3": 80 },
                { "id": 201, "name": "App store", "type": 2, "value": 10, "coin": 100000, "step1": 100000, "step2": 100, "step3": 30 },
                { "id": 202, "name": "App store", "type": 2, "value": 25, "coin": 225000, "step1": 225000, "step2": 200, "step3": 50 },
                { "id": 203, "name": "App store", "type": 2, "value": 50, "coin": 400000, "step1": 400000, "step2": 300, "step3": 80 },
                { "id": 301, "name": "Paypal", "type": 3, "value": 10, "coin": 100000, "step1": 100000, "step2": 100, "step3": 30 },
                { "id": 302, "name": "Paypal", "type": 3, "value": 25, "coin": 225000, "step1": 225000, "step2": 200, "step3": 50 },
                { "id": 303, "name": "Paypal", "type": 3, "value": 50, "coin": 400000, "step1": 400000, "step2": 300, "step3": 80 },
                { "id": 401, "name": "Amazon", "type": 4, "value": 10, "coin": 100000, "step1": 100000, "step2": 100, "step3": 30 },
                { "id": 402, "name": "Amazon", "type": 4, "value": 25, "coin": 225000, "step1": 225000, "step2": 200, "step3": 50 },
                { "id": 403, "name": "Amazon", "type": 4, "value": 50, "coin": 400000, "step1": 400000, "step2": 300, "step3": 80 }
            ]
        },
        "word": {
            "tip1": "Cash",
            "tip2": "redeem",
            "tip3": "Google Gift Card",
            "tip4": "Paypal Gift Card",
            "tip5": "Successfully redeemed",
            "tip6": "Currently <color=#5796CF>& players</c> already successfully redeemed",
            "tip7": "You hace got $& (Up to $@ can cash out)",
            "tip8": "You only need to collect <color=#F0791B>$&</c> to cash out",
            "tip9": "The card is not enough, please change it into Paypal",
            "tip10": "Input your paypal email",
            "tip11": "Input your phone",
            "tip12": "Currently <color=#8CFF4B>& players</c> already successfully redeemed"
        },
        "TWO_CARD": {
            "cardList": [
                [101, 102], [201, 202], [301, 302]
            ],
            "card1": {
                "amount": 100,
                "target": [
                    {
                        "title": "Collect <color=#F0791B>$100</c> more gifts card to cash out",
                        "cnt": 100
                    },
                    {
                        "title": "Historical highest level reaches <color=#F0791B>200Lv</c>",
                        "cnt": 200
                    },
                    {
                        "title": "Login for <color=#F0791B>30 days</c> consecutively",
                        "cnt": 30
                    }
                ]
            },
            "card2": {
                "amount": 500,
                "target": [
                    {
                        "title": "Collect <color=#F0791B>$500</c> more gifts card to cash out",
                        "cnt": 500
                    }
                ]
            }
        },
        "SIGN_CONF": [5, 5, 5, 5, 5, 5, 10],
        "TASK_CONF": [
            {
                "amount": null,
                "title": "测试标题1",
                "target": null
            },
            {
                "amount": null,
                "title": "测试标题1",
                "target": null
            },
            {
                "amount": null,
                "title": "测试标题1",
                "target": null
            },
            {
                "amount": null,
                "title": "测试标题1",
                "target": null
            },
            {
                "amount": null,
                "title": "测试标题1",
                "target": null
            }
        ],
        "link": "https://www.baidu.com"
    }
    //埋点
    static UMENG_CONFIG = {
        video_apply: "video_apply",
        video_load: "video_load",
        video_fail: "video_fail",
        video_show: "video_show",
        video_click: "video_click",
        video_suc: "video_suc",
        banner_apply: "banner_apply",
        banner_load: "banner_load",
        banner_fail: "banner_fail",
        banner_show: "banner_show",
        banner_click: "banner_click",
        inter_apply: "inter_apply",
        inter_load: "inter_load",
        inter_fail: "inter_fail",
        inter_show: "inter_show",
        inter_click: "inter_click",
        Redeem_pp_100: "Redeem_pp_100",
        Redeem_gp_100: "Redeem_gp_100",
        Redeem_pp_max: "Redeem_pp_max",
        Redeem_gp_max: "Redeem_gp_max",
        Redeem_coin_100000: "Redeem_coin_100000",
        Redeem_coin_225000: "Redeem_coin_225000",
        Redeem_coin_400000: "Redeem_coin_400000"
    }
    //邮箱后缀
    static EMAIL_SUFFIX = [
        'gamail.com',
        'hotmail.fr',
        't-online.de',
        'libero.it',
        'yahoo.com.ph',
        'hotmail.com',
        'hotmail.fr',
        'live.fr',
        'live.com'
    ];
    //配置表哈希值
    static conf_hash = "";
    //配置表信息
    static conf = null;
    //credit来源
    static CREDIT_FROM = {
        SIGN_IN: "sign in",
        TASK_REWARD: "task reward"
    }
    //客户端保存的配置信息
    static game_settings_info = {
        hash: '',
        zip: ''
    }
    //登录信息
    static LOGIN_DATA = {
        pg: '',                  //包名
        ver: '1.0.1',                 //客户端版本
        ver_code: 101,             //客户端版本值
        sdk_int: 26,              //系统版本值(Android版本)
        os_ver: 'Android 6.0',              //*系统+版本
        lang: 'zh_CN',                //语言
        dev_fac: 'weng',             //设备生产商
        dev_model: 'test',           //设备型号
        network: 'WIFI',             //网络
        resolution: '720,1280',          //分辨率
        channel: 'sdy',             //渠道名
        root: 0,                 //*是否root,默认为0
        apk_comment: '',         //*安装apk时的comment
        tz: 8,                   //*时区(比如，中国为+8, 美国东部为-4)
        imsi: '',                 //*sim卡运营商标识码
        aid: '',                    //用户唯一id
        network_config: [''],        //网络配置信息
        conf_hash: ''
    }
}
window['FConfig'] = FConfig;