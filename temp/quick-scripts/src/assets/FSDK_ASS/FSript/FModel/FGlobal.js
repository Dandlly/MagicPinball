"use strict";
cc._RF.push(module, '9b237N5/ndPCpAeLX6cDMc9', 'FGlobal');
// FSDK_ASS/FSript/FModel/FGlobal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FPanelManager_1 = require("./FPanelManager");
var FGlobal;
(function (FGlobal) {
    //NetWork对象
    FGlobal.NetWork = null;
    //加载转圈
    FGlobal.ToLoad = null;
    //计数器
    FGlobal.Count = null;
    //个人通用信息
    FGlobal.USER_INFO = {
        //注册时间
        reg_time: 0,
        //当前时间
        now: 0,
        //离线时间
        off_time: 0,
        //登录时间
        login_time: 0,
        //登录天数
        login_days: 0,
        //登录次数
        login_cnt: 0,
        //货币数量
        credit: 0,
        //被邀请
        be_invite: 0,
        //邀请码
        invite_code: "",
        //邀请人数
        invite_count: 0,
        //是否第二天重置
        isNextDay: false,
        //开关
        isFlag: true,
        //是否黑
        isBlack: true,
        //是否评分过
        isGrade: false,
        //存储信息
        preferences: {},
        //其它credit
        credit_pp: 0,
        credit_gp: 0,
        //设置
        setting: {
            sound: true,
            shake: true
        },
        online_total: 0,
        //任务进度
        task: 0,
        //卡产出
        cardGet: {
            pp: 0,
            gp: 0
        },
        //换记录
        trans_record: {
            twocard: [],
            list: []
        },
        //线上配置
        ALL_CONF: null
    };
    //签到信息
    FGlobal.SIGN_INFO = {
        signDay: 0,
        isSign: 0,
        isLongSign: 0
    };
    //单次埋点
    FGlobal.ONE_UMENG = [];
    //任务进度
    FGlobal.TASK_INFO = {};
    //邀请任务信息
    FGlobal.invite_task = [];
    function setConf() {
        var zip = FConfig.game_settings_info.zip;
        if (zip) {
            FConfig.LINK_CONF = FGlobal.uncompress(zip);
            FLog.normal("线上配置   ", FConfig.LINK_CONF);
            var all_ver = "";
            for (var i in FConfig.LINK_CONF.VERSION_CONF.ALL_CONF) {
                if (FConfig.VERSION >= i) {
                    all_ver = i;
                }
            }
            if (FConfig.LINK_CONF.VERSION_CONF.ALL_CONF) {
                if (FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[all_ver]) {
                    var conf = FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[all_ver];
                    for (var i in conf) {
                        FConfig.LINK_CONF.ALL_CONF[i] = conf[i];
                    }
                }
            }
            var fsdk_ver = "";
            for (var i in FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF) {
                if (FConfig.VERSION >= i) {
                    fsdk_ver = i;
                }
            }
            if (FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF) {
                if (FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[fsdk_ver]) {
                    var conf = FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[fsdk_ver];
                    for (var i in conf) {
                        FConfig.LINK_CONF.FSDK_CONF[i] = conf[i];
                    }
                }
            }
        }
        ;
        FGlobal.USER_INFO.ALL_CONF = FConfig.LINK_CONF.ALL_CONF;
        FConfig.FSDK_CONF = FConfig.LINK_CONF.FSDK_CONF;
        if (FConfig.FSDK_CONF.isBlack) {
            FGlobal.USER_INFO.isBlack = true;
        }
        //是否要更新
        if (FConfig.FSDK_CONF.UPDATE_CONF.ver > FConfig.VERSION) {
            FPanelManager_1.FPanelManager.load('FUpdate', cc.director.getScene());
        }
    }
    FGlobal.setConf = setConf;
    /*
   解压 二进制数据
    */
    function uncompress(str) {
        var a = str.replace(/↵/g, '');
        var zlib_result = atob(a);
        var data = new Array(zlib_result.length);
        for (var i = 0, il = zlib_result.length; i < il; ++i) {
            data[i] = zlib_result.charCodeAt(i);
        }
        var inflate = new Zlib.Inflate(data);
        var outbuffer = inflate.decompress();
        return JSON.parse(Utf8ArrayToStr(outbuffer));
    }
    FGlobal.uncompress = uncompress;
    function Utf8ArrayToStr(array) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = array.length;
        i = 0;
        while (i < len) {
            c = array[i++];
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c);
                    break;
                case 12:
                case 13:
                    // 110x xxxx 10xx xxxx
                    char2 = array[i++];
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx 10xx xxxx 10xx xxxx
                    char2 = array[i++];
                    char3 = array[i++];
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    }
    FGlobal.Utf8ArrayToStr = Utf8ArrayToStr;
    //返回日期 例如：20190411
    function getDateDay(time) {
        var date = new Date(time * 1000);
        var y = date.getFullYear() + '';
        var m = date.getMonth() + 1 > 9 ? String(date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        var d = date.getDate() > 9 ? String(date.getDate()) : '0' + (date.getDate());
        return parseInt(y + m + d);
    }
    FGlobal.getDateDay = getDateDay;
    //返回日期 例如：2019.04.11
    function getDateDay1(time) {
        var date = new Date(time * 1000);
        var y = date.getFullYear() + '';
        var m = date.getMonth() + 1 > 9 ? String(date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        var d = date.getDate() > 9 ? String(date.getDate()) : '0' + (date.getDate());
        return y + "." + m + "." + d;
    }
    FGlobal.getDateDay1 = getDateDay1;
    function Toast(str, color) {
        if (color === void 0) { color = '#ffffff'; }
        if (FGlobal.piaoPool.size()) {
            FGlobal.piao_add(str, color);
        }
    }
    FGlobal.Toast = Toast;
    //物品上漂
    FGlobal.piao_list = [];
    FGlobal.color_list = [];
    FGlobal.piaoPool = new cc.NodePool();
    function piao_add(str, colors) {
        FGlobal.piao_list.push(str);
        FGlobal.color_list.push(colors);
        if (FGlobal.piao_list.length == 1) {
            FGlobal.openadd();
        }
    }
    FGlobal.piao_add = piao_add;
    FGlobal.piao_savelist = [];
    function openadd() {
        if (FGlobal.piao_list.length) {
            for (var i = 0; i < FGlobal.piao_savelist.length; i++) {
                cc.tween(FGlobal.piao_savelist[i])
                    .by(0.5, { y: 54 })
                    .start();
            }
            var add_1 = FGlobal.piaoPool.get();
            add_1.parent = cc.director.getScene();
            add_1.stopAllActions();
            add_1.y = cc.winSize.height / 2;
            add_1.opacity = 255;
            add_1.getChildByName('msg').getComponent(cc.Label).string = this.piao_list[0];
            add_1.getChildByName('msg').color = new cc.Color().fromHEX(this.color_list[0]);
            cc.tween(add_1)
                .by(0.5, { y: 54 })
                .call(function () {
                FGlobal.piao_savelist.push(add_1);
                FGlobal.piao_list.shift();
                FGlobal.color_list.shift();
                FGlobal.openadd();
            })
                .delay(1)
                .to(0.5, { opacity: 0 })
                .call(function () {
                FGlobal.piao_savelist.shift();
                FGlobal.piaoPool.put(add_1);
            })
                .start();
        }
    }
    FGlobal.openadd = openadd;
    //范围取随机数
    function randomFrom(lowerValue, upperValue) {
        var random = Math.random() * (upperValue - lowerValue) + lowerValue;
        return Math.floor(random * 100) / 100;
    }
    FGlobal.randomFrom = randomFrom;
    //第二天重置信息
    function resetData() {
        FLog.normal("第二天了");
        if (FGlobal.SIGN_INFO.signDay < 7) {
            FGlobal.SIGN_INFO.isSign = 0;
        }
        if (FGlobal.SIGN_INFO.signDay >= 7) {
            FGlobal.SIGN_INFO.signDay += 1;
        }
        FNative.AD_COUNT = {
            'video': 0,
            'inters': 0
        };
        FGlobal.USER_INFO.cardGet = {
            pp: 0,
            gp: 0
        };
        FSDK.saveData("CARD_GET", FGlobal.USER_INFO.cardGet);
        FSDK.saveData("AD_COUNT", FNative.AD_COUNT);
        FSDK.saveData('SIGN_INFO', FGlobal.SIGN_INFO);
    }
    FGlobal.resetData = resetData;
    function setPreferences() {
        if ("SIGN_INFO" in FGlobal.USER_INFO.preferences) {
            FGlobal.SIGN_INFO = FGlobal.USER_INFO.preferences["SIGN_INFO"];
        }
        if ("TASK_INFO" in FGlobal.USER_INFO.preferences) {
            FGlobal.TASK_INFO = FGlobal.USER_INFO.preferences["TASK_INFO"];
        }
        if ("GRADE" in FGlobal.USER_INFO.preferences) {
            FGlobal.USER_INFO.isGrade = FGlobal.USER_INFO.preferences["GRADE"];
        }
        if ("AD_SHOW_CNT" in FGlobal.USER_INFO.preferences) {
            FNative.AD_SHOW_CNT = FGlobal.USER_INFO.preferences["AD_SHOW_CNT"];
        }
        if ("AD_COUNT" in FGlobal.USER_INFO.preferences) {
            FNative.AD_COUNT = FGlobal.USER_INFO.preferences["AD_COUNT"];
        }
        if ("CARD_GET" in FGlobal.USER_INFO.preferences) {
            FGlobal.USER_INFO.cardGet = FGlobal.USER_INFO.preferences["CARD_GET"];
        }
        if ("ONE_UMENG" in FGlobal.USER_INFO.preferences) {
            FGlobal.ONE_UMENG = FGlobal.USER_INFO.preferences;
        }
        if (cc.sys.os == cc.sys.OS_IOS) {
            FGlobal.USER_INFO.isGrade = true;
        }
    }
    FGlobal.setPreferences = setPreferences;
    //返回一个邮箱
    function getEmail() {
        return FGlobal.randomWord(2) + "****" + FGlobal.randomWord(1) + '@' + FConfig.EMAIL_SUFFIX[Math.floor(Math.random() * FConfig.EMAIL_SUFFIX.length)];
    }
    FGlobal.getEmail = getEmail;
    //返回随机字符
    function randomWord(num) {
        var str = "", arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 随机产生
        for (var i = 0; i < num; i++) {
            var pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    }
    FGlobal.randomWord = randomWord;
    //返回p跑马
    function getMarMsg() {
        return getPrizeAddByRandom(FConfig.FSDK_CONF.MARQUEE_CONF.weight);
    }
    FGlobal.getMarMsg = getMarMsg;
    //正态分布
    function getPrizeAddByRandom(Data) {
        var totalData = 0;
        for (var i = 0; i < Data.length; i++) {
            totalData += parseInt(Data[i].weight);
        }
        var num = Math.floor(Math.random() * totalData);
        var total = 0;
        for (var i = 0; i < Data.length; i++) {
            total += parseInt(Data[i].weight);
            if (num < total) {
                return Data[i];
            }
        }
    }
    FGlobal.getPrizeAddByRandom = getPrizeAddByRandom;
    //返回区间里面的随机值
    function getQuRandom(min, max) {
        var num = max - min;
        var random = min + Math.floor(Math.random() * (num + 1));
        return random;
    }
    FGlobal.getQuRandom = getQuRandom;
    //返回区间里面的随机值
    function getQuCardRandom(min, max) {
        var num = max - min;
        var random = min + Math.random() * num;
        var num2 = Math.round(random * 100) / 100;
        return num2;
    }
    FGlobal.getQuCardRandom = getQuCardRandom;
    //返回需要下降的高度
    function getTopPadding() {
        if (cc.winSize.width / cc.winSize.height >= FConfig.FSDK_CONF.SCALE_PADDING) {
            return FConfig.FSDK_CONF.TOP_PADDING;
        }
        return 0;
    }
    FGlobal.getTopPadding = getTopPadding;
    //是否需要适配
    function getScale() {
        if (cc.winSize.width / cc.winSize.height > FConfig.FSDK_CONF.SCALE_PADDING) {
            return 0;
        }
        return FConfig.FSDK_CONF.TOP_PADDING;
    }
    FGlobal.getScale = getScale;
    //换
    function exWenzi(str, a, b) {
        if (a === void 0) { a = null; }
        if (b === void 0) { b = null; }
        var str1 = str;
        if (a != null && str.indexOf('&') != -1) {
            str1 = str.replace(/&/g, String(a));
        }
        if (b != null && str1.indexOf('@') != -1) {
            str1 = str1.replace(/@/g, String(b));
        }
        return str1;
    }
    FGlobal.exWenzi = exWenzi;
    //返回卡的类型跟数值
    function getCardType(card_type) {
        switch (card_type) {
            case 0:
                var random = Math.random();
                if (random > 0.5) {
                    if (FGlobal.USER_INFO.cardGet.gp < FConfig.FSDK_CONF.CAR_GET_CONF.gp) {
                        return { type: 1, num: FGlobal.getCardNum(1) };
                    }
                    if (FGlobal.USER_INFO.cardGet.pp < FConfig.FSDK_CONF.CAR_GET_CONF.pp) {
                        return { type: 2, num: FGlobal.getCardNum(2) };
                    }
                    return { type: 1, num: 0 };
                }
                else {
                    if (FGlobal.USER_INFO.cardGet.pp < FConfig.FSDK_CONF.CAR_GET_CONF.pp) {
                        return { type: 2, num: FGlobal.getCardNum(2) };
                    }
                    if (FGlobal.USER_INFO.cardGet.gp < FConfig.FSDK_CONF.CAR_GET_CONF.gp) {
                        return { type: 1, num: FGlobal.getCardNum(1) };
                    }
                    return { type: 2, num: 0 };
                }
            case 1:
                if (FGlobal.USER_INFO.cardGet.gp < FConfig.FSDK_CONF.CAR_GET_CONF.gp) {
                    return { type: 1, num: FGlobal.getCardNum(1) };
                }
                else {
                    return { type: 1, num: 0 };
                }
            case 2:
                if (FGlobal.USER_INFO.cardGet.pp < FConfig.FSDK_CONF.CAR_GET_CONF.pp) {
                    return { type: 2, num: FGlobal.getCardNum(2) };
                }
                else {
                    return { type: 2, num: 0 };
                }
                ;
        }
    }
    FGlobal.getCardType = getCardType;
    //根据卡片区间获得产出1-gp 2-pp
    function getCardNum(type) {
        var cardNum = 0;
        if (type == 1) {
            cardNum = FGlobal.USER_INFO.credit_gp;
        }
        else if (type == 2) {
            cardNum = FGlobal.USER_INFO.credit_pp;
        }
        for (var i = 0; i < FConfig.FSDK_CONF.CAR_GET_CONF.card.length; i++) {
            if (cardNum >= FConfig.FSDK_CONF.CAR_GET_CONF.card[i].have[0] && cardNum < FConfig.FSDK_CONF.CAR_GET_CONF.card[i].have[1]) {
                return FGlobal.getQuCardRandom(FConfig.FSDK_CONF.CAR_GET_CONF.card[i].win[0], FConfig.FSDK_CONF.CAR_GET_CONF.card[i].win[1]);
            }
        }
        return 0;
    }
    FGlobal.getCardNum = getCardNum;
    function getRandomReward() {
        var data = { "cardNum": [0, 50], "credit": 1, "card": 0 };
        for (var i = 0; i < FConfig.FSDK_CONF.RANDOM_REWARD.length; i++) {
            if ((FGlobal.USER_INFO.credit_gp >= FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[0] && FGlobal.USER_INFO.credit_gp < FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[1]) || (FGlobal.USER_INFO.credit_pp >= FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[0] && FGlobal.USER_INFO.credit_pp < FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[1])) {
                data = FConfig.FSDK_CONF.RANDOM_REWARD[i];
                break;
            }
        }
        if (data) {
            if (Math.random() <= data.card) {
                var card = FGlobal.getCardType(0);
                if (card.num) {
                    return card;
                }
                else {
                    return { type: 3, num: FSDK.getCreditDif() };
                }
            }
            else {
                return { type: 3, num: FSDK.getCreditDif() };
            }
        }
        return { type: 3, num: FSDK.getCreditDif() };
    }
    FGlobal.getRandomReward = getRandomReward;
    //单次埋点是否上报过
    function isOnUmeng(from) {
        var isUp = false;
        for (var i = 0; i < FGlobal.ONE_UMENG.length; i++) {
            if (FGlobal.ONE_UMENG[i] == from) {
                isUp = true;
            }
            ;
        }
        ;
        return isUp;
    }
    FGlobal.isOnUmeng = isOnUmeng;
})(FGlobal = exports.FGlobal || (exports.FGlobal = {}));

cc._RF.pop();