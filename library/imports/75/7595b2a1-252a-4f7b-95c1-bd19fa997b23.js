"use strict";
cc._RF.push(module, '7595bKhJSpPe5XBvRn6mXsj', 'User');
// script/common/User.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用户
 * @author yxx0
 */
var User = /** @class */ (function () {
    function User() {
        this.mCCion = 0; // 金币
        this.mGCoin = 0; // 金币1数
        this.mPCoin = 0; // 金币2数
        this.isGuide = true; // 新手引导
        this._severData = null; // 服务器返回data
        this.userInfo = null; // 用户微信数据
        this.awardNumber = 0; // 每日领取红包或话费卡数量   
        this.isGetAward = false; // 是否领取奖励
        this.currentLine = 0; // 当前行数
        this.isRedAndCost = false; // 是否已经生成了红包或者话费
        this.currentProp = 0; // 当前道具数量
        this.recordBarrier = []; // 障碍物记录
        this.recordBall = []; // 障碍物记录
        this.currentRedLine = 0; // 红包行数
        this.deleteBarriersNum = 0; // 删除障碍物数量
        this.isLoading = false; // 是否第一次loading
        this.isOneRed = false; // 是否第一次领取红包（埋点）
        this.isRed = false; // 是否第一次领取红包
        this.ishf = false; // 是否第一次领取话费
        this.currnetReviveNum = 0;
        this.isGetGift = false; // 今天是否领取过礼物
        this.onlineTime = -9; // 在线时间
        this.getGift = 0; // 礼物领取次数
        this.collectCoins = 0; // 累计金币第一阶段
        this.collectCoins2 = 0; // 累计金币第二阶段 
        this.expDay = 0; // 每日经验
        this.exp = 0; // 玩家当前经验
        this.level = 1; // 当前等级
        this.spinCount = 0; // 轮盘次数
        this.rainAwardNum = 0; // 彩虹方块
        this.rainProbability = 0; // 彩虹概率
        this.isRain = false; // 是否场上已经有彩虹了
        this.lumpData = {
            BarrierSacleArr: [0.8, 1],
            MaxBallCount: 50,
            weight: [[850, 100, 50, 0, 0, 0, 0, 0],
                [0, 850, 100, 50, 0, 0, 0, 0],
                [0, 0, 850, 100, 50, 0, 0, 0],
                [0, 0, 0, 850, 100, 50, 0, 0],
                [0, 0, 0, 0, 850, 100, 50, 0],
                [0, 0, 0, 0, 0, 850, 100, 50],
                [0, 0, 0, 0, 0, 0, 800, 200],
                [0, 0, 0, 0, 0, 0, 0, 1000]],
            numWeight: [[1, 10], [11, 20], [21, 50], [51, 100], [101, 200], [201, 300], [301, 500], [501, 1000]],
            tager: [100, 300, 500, 1000, 20000, 50000, 10000],
            color: [['#a4a4a4', '#c8c8c8', '#b3b3b3'],
                ['#2b3f85', '#6a7bb5', '#5d6eab'],
                ['#1d8b7f', '#5bbaaa', '#3aad83'],
                ['#e3a538', '#ffdc7c', '#fdc04a'],
                ['#cc7918', '#ffb22e', '#e48d2c'],
                ['#693f92', '#a077c6', '#8e5cbc'],
                ['#e31e3f', '#f86475', '#ff4463']],
            prop: [[600, 200], [600, 600], [400, 400], [200, 100]],
            propArr: [1, 2],
            BuriedPointScore: [[10000, 50000], [50000, 100000], [100000, 500000], [500000, 1000000], [1000000, 20000000], [20000000, 50000000], [50000001, 50000000]],
            scoreInterval: [200, 750, 1500, 3000, 5000, 10000, 15000, 20000, 50000, 50001],
            reviveScore: [[3000, 5000], [5000, 10000], [10000, 50000], [50000, 100000], [100000, 500000], [500000, 99999999999]],
            initBarrierlArr: [3, 5],
            barrierlArrPosX: [-250, -125, 0, 125, 250],
            reviveNum: 2,
            MaxBigBall: 1.5,
            Ballprop: [[11, 15], [126, 20], [21, 25], [26, 30]],
            myVideoMaxCount: 40,
            videoAddPoint: [20, 40],
            outOfRedAndCost: [2, 5],
            videoBaoXiang: [10, 8, 7, 5, 3],
            MaxFirstGold: 98,
            MaxSecondGold: 68,
            giftTime: 900,
            CollectCoins: [10000, 2000],
            LevelCions: [[3, 5], [1, 4], [1, 2]],
            spinWeight: [
                [800, 800, 1000, 500, 200, 100],
                [800, 800, 300, 1000, 300, 100],
                [800, 800, 100, 200, 800, 1000]
            ],
            spinAward: [
                { id: 1, award: "gp" },
                { id: 2, award: 500 },
                { id: 3, award: 200 },
                { id: 4, award: "pp" },
                { id: 5, award: 100 },
                { id: 6, award: 50 },
            ],
            exp: [],
            hurt: 10,
            expSate: 10,
            expDayCount: 5000000,
            isDebug: true,
            bxCredit: 10,
            levelFormula: [[1.02, 1.2, 4], [1.02, 3, 7]],
            rainAwardMax: 50,
            rainProbability: 0.2,
            addProp: 3,
        };
        /** 用户状态  */
        this.status = {
            isMute: true,
            isShake: true,
            isSound: true,
        };
    }
    /**
    * 保存用户数据
    */
    User.prototype.save = function (type) {
        if (type === void 0) { type = 0; }
        var data = {
            status: this.status,
            mGCoin: this.mGCoin,
            mPCoin: this.mPCoin,
            mCCion: this.mCCion,
            isGuide: this.isGuide,
            userInfo: this.userInfo,
            awardNumber: this.awardNumber,
            isGetAward: this.isGetAward,
            isRedAndCost: this.isRedAndCost,
            currentLine: this.currentLine,
            currentProp: this.currentProp,
            recordBarrier: this.recordBarrier,
            recordBall: this.recordBall,
            currentRedLine: this.currentRedLine,
            deleteBarriersNum: this.deleteBarriersNum,
            isLoading: this.isLoading,
            isOneRed: this.isOneRed,
            currnetReviveNum: this.currnetReviveNum,
            isRed: this.isRed,
            ishf: this.ishf,
            isGetGift: this.isGetGift,
            onlineTime: this.onlineTime,
            getGift: this.getGift,
            collectCoins: this.collectCoins,
            collectCoins2: this.collectCoins2,
            expDay: this.expDay,
            exp: this.exp,
            level: this.level,
            spinCount: this.spinCount,
            rainAwardNum: this.rainAwardNum,
            rainProbability: this.rainProbability,
            isRain: this.isRain,
        };
        if (type == 0) {
            cc.sys.localStorage.setItem('ausball', JSON.stringify(data));
        }
        else {
            FSDK.saveData(data);
        }
    };
    /**
     * 读取用户数据
     */
    User.prototype.load = function () {
        var data = cc.sys.localStorage.getItem('ausball');
        if (data) {
            data = JSON.parse(data);
            for (var key in data) {
                this[key] = data[key];
            }
        }
        else {
            data = this._severData.preferences;
            if (data) {
                for (var key in data) {
                    this[key] = data[key];
                }
            }
        }
    };
    Object.defineProperty(User.prototype, "IsMute", {
        /**
         * 设置声音
         * @param flag
         */
        get: function () {
            return this.status.isMute;
        },
        set: function (flag) {
            this.status.isMute = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "IsShake", {
        /**
         * 设置震动
         * @param flag
         */
        get: function () {
            return this.status.isShake;
        },
        set: function (flag) {
            this.status.isShake = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "IsSound", {
        /**
         * 设置音效
         */
        get: function () {
            return this.status.isSound;
        },
        set: function (flag) {
            this.status.isSound = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstGold", {
        /**
         * 当前金币1
         */
        get: function () {
            return this.mGCoin;
        },
        set: function (flag) {
            this.mGCoin = flag;
            this.save(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "secondGold", {
        /**
         * 当前金币2
         */
        get: function () {
            return this.mPCoin;
        },
        set: function (flag) {
            this.mPCoin = flag;
            this.save(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "credit", {
        // 设置金币
        get: function () {
            return this.mCCion;
        },
        set: function (flag) {
            this.mCCion = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "passGuide", {
        /**
         * 是否通过新手引导
         */
        get: function () {
            return this.isGuide;
        },
        set: function (flag) {
            this.isGuide = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "serverData", {
        /**
         * 服务器数据
         */
        get: function () {
            return this._severData;
        },
        set: function (flag) {
            this._severData = flag;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 微信用户数据
     */
    User.prototype.getWX_INFO = function () {
        return this.userInfo;
    };
    User.prototype.setWX_IFFO = function (flag) {
        this.userInfo = flag;
    };
    /**
     * 获取线上配置
     */
    User.prototype.getLumpData = function () {
        return this.lumpData;
    };
    User.prototype.setLumpData = function (flag) {
        this.lumpData = flag;
    };
    /**
     * 直接获取是否可以生成话费卡或者红包
     */
    User.prototype.getAwardNumber = function () {
        return this.awardNumber;
    };
    User.prototype.setAwardNumber = function (flag) {
        if (flag == 0) {
            this.awardNumber = flag;
            return;
        }
        this.awardNumber += 1;
    };
    /**
     * 是否领取了奖励
     */
    User.prototype.getIsGetAward = function () {
        return this.isGetAward;
    };
    User.prototype.setIsGetAward = function (flag) {
        this.isGetAward = flag;
    };
    /**
     * 获取行数
     */
    User.prototype.getCurrentLine = function () {
        return this.currentLine;
    };
    User.prototype.setCurrentLine = function (flag) {
        if (flag == 0) {
            this.currentLine = flag;
            return;
        }
        this.currentLine += 1;
    };
    /**
     * 是否已经生成了红包
     */
    User.prototype.getIsRedAndCost = function () {
        return this.isRedAndCost;
    };
    User.prototype.setIsRedAndCost = function (flag) {
        this.isRedAndCost = flag;
    };
    /**
     * 获取当前场上道具数量
     */
    User.prototype.getCurrentProp = function () {
        return this.currentProp;
    };
    User.prototype.setCurrentProp = function (flag) {
        this.currentProp = flag;
        if (this.currentProp < 0)
            this.currentProp = 0;
    };
    /**
     * 记录障碍物
     */
    User.prototype.getRecordBarrier = function () {
        return this.recordBarrier;
    };
    User.prototype.setRecordBarrier = function (flag) {
        this.recordBarrier = flag;
    };
    /**
     * 记录弹球
     */
    User.prototype.getRecordBall = function () {
        return this.recordBall;
    };
    User.prototype.setRecordBall = function (flag) {
        this.recordBall = flag;
    };
    /**
     * 红包行数
     */
    User.prototype.getCurrentRedLine = function () {
        return this.currentRedLine;
    };
    User.prototype.setCurrentRenLine = function (flag) {
        if (flag == 0) {
            this.currentRedLine = flag;
            return;
        }
        this.currentRedLine += 1;
    };
    /**
     * 计算障碍物销毁
     */
    User.prototype.setDeleteBarriersNum = function () {
        this.deleteBarriersNum += 1;
        if (this.deleteBarriersNum <= 10) {
            FSDK.umengEvent("Game_Remove", "" + this.deleteBarriersNum);
        }
    };
    /**
     * 第一次登陆
     */
    User.prototype.getIsLoading = function () {
        return this.isLoading;
    };
    User.prototype.setIsLoading = function () {
        this.isLoading = true;
    };
    /**
     * 计算是否
     */
    User.prototype.setIsOneRed = function () {
        if (!this.isOneRed) {
            this.isOneRed = true;
            FSDK.umengEvent("Game_RedPacket", "1");
        }
    };
    /**
     * 是否第一次领取红包
     * @param name
     */
    User.prototype.getCost = function (name) {
        if (name == "bx") {
            return this.ishf;
        }
    };
    User.prototype.setCost = function (name, flag) {
        if (name == "bx") {
            this.ishf = flag;
        }
        this.save(1);
    };
    /**
     * 获取复活次数
     */
    User.prototype.getCurrnetReviveNum = function () {
        return this.currnetReviveNum;
    };
    User.prototype.setCurrnetReviveNum = function (flag) {
        if (flag) {
            this.currnetReviveNum = flag;
        }
        else {
            this.currnetReviveNum -= 1;
        }
        FLog.normal(this.currnetReviveNum);
    };
    /**
     * 判断今天是否领取了礼物
     */
    User.prototype.getIsGetGift = function () {
        return this.isGetGift;
    };
    User.prototype.setIsGetGift = function (flag) {
        this.isGetGift = flag;
    };
    /**
     * 在线时间
     */
    User.prototype.getOnlineTime = function () {
        return this.onlineTime;
    };
    User.prototype.setOnlineTime = function (flag) {
        this.onlineTime = flag;
    };
    /**
     * 礼物次数
     */
    User.prototype.getGiftCount = function () {
        return this.getGift;
    };
    User.prototype.setGiftCount = function (flag) {
        this.getGift = flag;
    };
    /**
     * 金币第一阶段
     */
    User.prototype.getCollectCoins = function () {
        return this.collectCoins;
    };
    User.prototype.setCollectCoins = function (flag) {
        this.collectCoins = flag;
    };
    /**
     * 金币第二阶段
     */
    User.prototype.getCollectCoins2 = function () {
        return this.collectCoins2;
    };
    User.prototype.setCollectCoins2 = function (flag) {
        this.collectCoins2 = flag;
    };
    /**
     * 获取每日经验
     */
    User.prototype.getExpDay = function () {
        return this.expDay;
    };
    User.prototype.setExpDay = function (flag) {
        this.expDay = flag;
    };
    /**
     * 获取用户经验
     */
    User.prototype.getExp = function () {
        return this.exp;
    };
    User.prototype.setExp = function (flag) {
        this.exp = flag;
    };
    /**
     * 获取当前等级
     */
    User.prototype.getLevel = function () {
        return this.level;
    };
    User.prototype.setLevel = function (flag) {
        this.level = flag;
        FSDK.setTask(this.level);
    };
    /**
     * 轮盘次数
     */
    User.prototype.getSpinCount = function () {
        return this.spinCount;
    };
    User.prototype.setSpinCount = function (flag) {
        this.spinCount = flag;
    };
    User.prototype.getRainAwardNum = function () {
        return this.rainAwardNum;
    };
    User.prototype.setRainAwardNum = function (flag) {
        if (flag == 0) {
            this.rainAwardNum = 0;
            this.save();
            return;
        }
        this.rainAwardNum += 1;
    };
    /**
     * 彩虹概率
     */
    User.prototype.getRainProbability = function () {
        return this.rainProbability;
    };
    User.prototype.setRainProbability = function (flag) {
        this.rainProbability = flag;
    };
    /**
     * 是否存在彩虹方块
     */
    User.prototype.getIsRain = function () {
        return this.isRain;
    };
    User.prototype.setIsRain = function (flag) {
        this.isRain = flag;
    };
    return User;
}());
exports.user = new User();

cc._RF.pop();