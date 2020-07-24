import { FNetWork } from "../FNetWork/FNetWork";
import { FPanelManager } from "./FPanelManager";

export namespace FGlobal {
    //NetWork对象
    export let NetWork: FNetWork = null;
    //加载转圈
    export let ToLoad: cc.Node = null;
    //计数器
    export let Count = null;
    //个人通用信息
    export let USER_INFO = {
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
    }

    //签到信息
    export let SIGN_INFO = {
        signDay: 0,
        isSign: 0,
        isLongSign: 0
    }

    //单次埋点
    export let ONE_UMENG = [];

    //任务进度
    export let TASK_INFO = {};

    //邀请任务信息
    export let invite_task = [];

    export function setConf() {
        let zip = FConfig.game_settings_info.zip;
        if (zip) {
            FConfig.LINK_CONF = FGlobal.uncompress(zip);
            FLog.normal("线上配置   ", FConfig.LINK_CONF);
            let all_ver = "";
            for (let i in FConfig.LINK_CONF.VERSION_CONF.ALL_CONF) {
                if (FConfig.VERSION >= i) {
                    all_ver = i;
                }
            }
            if (FConfig.LINK_CONF.VERSION_CONF.ALL_CONF) {
                if (FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[all_ver]) {
                    let conf = FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[all_ver];
                    for (let i in conf) {
                        FConfig.LINK_CONF.ALL_CONF[i] = conf[i];
                    }
                }
            }
            let fsdk_ver = "";
            for (let i in FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF) {
                if (FConfig.VERSION >= i) {
                    fsdk_ver = i;
                }
            }
            if (FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF) {
                if (FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[fsdk_ver]) {
                    let conf = FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[fsdk_ver];
                    for (let i in conf) {
                        FConfig.LINK_CONF.FSDK_CONF[i] = conf[i];
                    }
                }
            }
        };
        FGlobal.USER_INFO.ALL_CONF = FConfig.LINK_CONF.ALL_CONF;
        FConfig.FSDK_CONF = FConfig.LINK_CONF.FSDK_CONF;
        if (FConfig.FSDK_CONF.isBlack) {
            FGlobal.USER_INFO.isBlack = true;
        }
        //是否要更新
        if (FConfig.FSDK_CONF.UPDATE_CONF.ver > FConfig.VERSION) {
            FPanelManager.load('FUpdate', cc.director.getScene());
        }
    }

    /* 
   解压 二进制数据
    */
    export function uncompress(str: string) {
        let a = str.replace(/↵/g, '');
        var zlib_result = atob(a);
        var data = new Array(zlib_result.length);
        for (let i = 0, il = zlib_result.length; i < il; ++i) {
            data[i] = zlib_result.charCodeAt(i);
        }
        var inflate = new Zlib.Inflate(data);
        var outbuffer = inflate.decompress();
        return JSON.parse(Utf8ArrayToStr(outbuffer));
    }

    export function Utf8ArrayToStr(array) {
        var out, i, len, c;
        var char2, char3;

        out = "";
        len = array.length;
        i = 0;
        while (i < len) {
            c = array[i++];
            switch (c >> 4) {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c);
                    break;
                case 12: case 13:
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

    //返回日期 例如：20190411
    export function getDateDay(time) {
        let date = new Date(time * 1000);
        let y = date.getFullYear() + '';
        let m = date.getMonth() + 1 > 9 ? String(date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        let d = date.getDate() > 9 ? String(date.getDate()) : '0' + (date.getDate());
        return parseInt(y + m + d);
    }

    //返回日期 例如：2019.04.11
    export function getDateDay1(time) {
        let date = new Date(time * 1000);
        let y = date.getFullYear() + '';
        let m = date.getMonth() + 1 > 9 ? String(date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        let d = date.getDate() > 9 ? String(date.getDate()) : '0' + (date.getDate());
        return `${y}.${m}.${d}`;
    }

    export function Toast(str: string, color = '#ffffff') {
        if (FGlobal.piaoPool.size()) {
            FGlobal.piao_add(str, color);
        }
    }
    //物品上漂
    export let piao_list = [];
    export let color_list = [];
    export let piaoPool: cc.NodePool = new cc.NodePool();
    export function piao_add(str: string, colors: string) {
        FGlobal.piao_list.push(str);
        FGlobal.color_list.push(colors);
        if (FGlobal.piao_list.length == 1) {
            FGlobal.openadd();
        }
    }

    export let piao_savelist = [];
    export function openadd() {
        if (FGlobal.piao_list.length) {
            for (let i = 0; i < FGlobal.piao_savelist.length; i++) {
                cc.tween(FGlobal.piao_savelist[i])
                    .by(0.5, { y: 54 })
                    .start();
            }
            let add: cc.Node = FGlobal.piaoPool.get();
            add.parent = cc.director.getScene();
            add.stopAllActions();
            add.y = cc.winSize.height / 2;
            add.opacity = 255;
            add.getChildByName('msg').getComponent(cc.Label).string = this.piao_list[0];
            add.getChildByName('msg').color = new cc.Color().fromHEX(this.color_list[0]);
            cc.tween(add)
                .by(0.5, { y: 54 })
                .call(function () {
                    FGlobal.piao_savelist.push(add);
                    FGlobal.piao_list.shift();
                    FGlobal.color_list.shift();
                    FGlobal.openadd();
                })
                .delay(1)
                .to(0.5, { opacity: 0 })
                .call(function () {
                    FGlobal.piao_savelist.shift();
                    FGlobal.piaoPool.put(add);
                })
                .start();
        }
    }
    //范围取随机数
    export function randomFrom(lowerValue, upperValue) {
        let random = Math.random() * (upperValue - lowerValue) + lowerValue;
        return Math.floor(random * 100) / 100;
    }
    //第二天重置信息
    export function resetData() {
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

    export function setPreferences() {
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

    //返回一个邮箱
    export function getEmail() {
        return FGlobal.randomWord(2) + "****" + FGlobal.randomWord(1) + '@' + FConfig.EMAIL_SUFFIX[Math.floor(Math.random() * FConfig.EMAIL_SUFFIX.length)];
    }

    //返回随机字符
    export function randomWord(num) {
        var str = "",
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        // 随机产生
        for (var i = 0; i < num; i++) {
            let pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    }

    //返回p跑马
    export function getMarMsg() {
        return getPrizeAddByRandom(FConfig.FSDK_CONF.MARQUEE_CONF.weight);
    }

    //正态分布
    export function getPrizeAddByRandom(Data) {
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

    //返回区间里面的随机值
    export function getQuRandom(min, max) {
        let num = max - min;
        let random = min + Math.floor(Math.random() * (num + 1));
        return random;
    }

    //返回区间里面的随机值
    export function getQuCardRandom(min, max) {
        let num = max - min;
        let random = min + Math.random() * num;
        let num2 = Math.round(random * 100) / 100;
        return num2;
    }

    //返回需要下降的高度
    export function getTopPadding() {
        if (cc.winSize.width / cc.winSize.height >= FConfig.FSDK_CONF.SCALE_PADDING) {
            return FConfig.FSDK_CONF.TOP_PADDING;
        }
        return 0;
    }

    //是否需要适配
    export function getScale() {
        if (cc.winSize.width / cc.winSize.height > FConfig.FSDK_CONF.SCALE_PADDING) {
            return 0;
        }
        return FConfig.FSDK_CONF.TOP_PADDING;
    }

    //换
    export function exWenzi(str: string, a = null, b = null): string {
        let str1 = str;
        if (a != null && str.indexOf('&') != -1) {
            str1 = str.replace(/&/g, String(a));
        }
        if (b != null && str1.indexOf('@') != -1) {
            str1 = str1.replace(/@/g, String(b));
        }
        return str1;
    }
    //返回卡的类型跟数值
    export function getCardType(card_type) {
        switch (card_type) {
            case 0:
                let random = Math.random();
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
                };
        }
    }

    //根据卡片区间获得产出1-gp 2-pp
    export function getCardNum(type) {
        let cardNum = 0;
        if (type == 1) {
            cardNum = FGlobal.USER_INFO.credit_gp;
        }
        else if (type == 2) {
            cardNum = FGlobal.USER_INFO.credit_pp;
        }
        for (let i = 0; i < FConfig.FSDK_CONF.CAR_GET_CONF.card.length; i++) {
            if (cardNum >= FConfig.FSDK_CONF.CAR_GET_CONF.card[i].have[0] && cardNum < FConfig.FSDK_CONF.CAR_GET_CONF.card[i].have[1]) {
                return FGlobal.getQuCardRandom(FConfig.FSDK_CONF.CAR_GET_CONF.card[i].win[0], FConfig.FSDK_CONF.CAR_GET_CONF.card[i].win[1]);
            }
        }
        return 0;
    }

    export function getRandomReward() {
        let data = { "cardNum": [0, 50], "credit": 1, "card": 0 };
        for (let i = 0; i < FConfig.FSDK_CONF.RANDOM_REWARD.length; i++) {
            if ((FGlobal.USER_INFO.credit_gp >= FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[0] && FGlobal.USER_INFO.credit_gp < FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[1]) || (FGlobal.USER_INFO.credit_pp >= FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[0] && FGlobal.USER_INFO.credit_pp < FConfig.FSDK_CONF.RANDOM_REWARD[i].cardNum[1])) {
                data = FConfig.FSDK_CONF.RANDOM_REWARD[i];
                break;
            }
        }
        if (data) {
            if (Math.random() <= data.card) {
                let card = FGlobal.getCardType(0);
                if (card.num) {
                    return card;
                }
                else {
                    return { type: 3, num: FSDK.getCreditDif() }
                }
            }
            else {
                return { type: 3, num: FSDK.getCreditDif() }
            }
        }
        return { type: 3, num: FSDK.getCreditDif() }
    }

    //单次埋点是否上报过
    export function isOnUmeng(from) {
        let isUp = false;
        for (let i = 0; i < FGlobal.ONE_UMENG.length; i++) {
            if (FGlobal.ONE_UMENG[i] == from) {
                isUp = true;
            };
        };
        return isUp;
    }
}