
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/User.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXFVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0dBR0c7QUFDSDtJQUFBO1FBQ1ksV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFRLEtBQUs7UUFFaEMsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFZLE9BQU87UUFFdEMsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFZLE9BQU87UUFFdEMsWUFBTyxHQUFZLElBQUksQ0FBQyxDQUFPLE9BQU87UUFFdEMsZUFBVSxHQUFRLElBQUksQ0FBQyxDQUFRLFlBQVk7UUFFM0MsYUFBUSxHQUFRLElBQUksQ0FBQyxDQUFVLFNBQVM7UUFFeEMsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBTyxrQkFBa0I7UUFFakQsZUFBVSxHQUFZLEtBQUssQ0FBQyxDQUFHLFNBQVM7UUFFeEMsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBTyxPQUFPO1FBRXRDLGlCQUFZLEdBQVksS0FBSyxDQUFDLENBQUMsZ0JBQWdCO1FBRS9DLGdCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQU8sU0FBUztRQUV4QyxrQkFBYSxHQUFjLEVBQUUsQ0FBQSxDQUFFLFFBQVE7UUFFdkMsZUFBVSxHQUFXLEVBQUUsQ0FBQSxDQUFRLFFBQVE7UUFFdkMsbUJBQWMsR0FBVyxDQUFDLENBQUMsQ0FBSSxPQUFPO1FBRXRDLHNCQUFpQixHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFFekMsY0FBUyxHQUFZLEtBQUssQ0FBQyxDQUFJLGVBQWU7UUFFOUMsYUFBUSxHQUFZLEtBQUssQ0FBQyxDQUFLLGdCQUFnQjtRQUUvQyxVQUFLLEdBQVksS0FBSyxDQUFDLENBQVEsWUFBWTtRQUUzQyxTQUFJLEdBQVksS0FBSyxDQUFDLENBQVMsWUFBWTtRQUUzQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFFN0IsY0FBUyxHQUFZLEtBQUssQ0FBQyxDQUFJLFlBQVk7UUFFM0MsZUFBVSxHQUFXLENBQUMsQ0FBQyxDQUFDLENBQVEsT0FBTztRQUV2QyxZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQVcsU0FBUztRQUV4QyxpQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFNLFdBQVc7UUFFMUMsa0JBQWEsR0FBVyxDQUFDLENBQUMsQ0FBTSxZQUFZO1FBRTVDLFdBQU0sR0FBVyxDQUFDLENBQUMsQ0FBYSxPQUFPO1FBRXZDLFFBQUcsR0FBVyxDQUFDLENBQUMsQ0FBZSxTQUFTO1FBRXhDLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBYyxPQUFPO1FBRXZDLGNBQVMsR0FBVyxDQUFDLENBQUMsQ0FBVSxPQUFPO1FBRXZDLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQU8sT0FBTztRQUV2QyxvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFJLE9BQU87UUFFdkMsV0FBTSxHQUFZLEtBQUssQ0FBQyxDQUFRLGFBQWE7UUFFN0MsYUFBUSxHQUFTO1lBQ3JCLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDekIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM1QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDakQsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDekMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDakMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDakMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDakMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFD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QUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBa0IsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVNLGlDQUFrQixHQUF6QixVQUEwQixJQUFJO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNJLHdCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSx3QkFBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFJTCxXQUFDO0FBQUQsQ0Fsb0JBLEFBa29CQyxJQUFBO0FBRVksUUFBQSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiDnlKjmiLdcclxuICogQGF1dGhvciB5eHgwXHJcbiAqL1xyXG5jbGFzcyBVc2VyIHtcclxuICAgIHByaXZhdGUgbUNDaW9uOiBudW1iZXIgPSAwOyAgICAgICAgLy8g6YeR5biBXHJcblxyXG4gICAgcHJpdmF0ZSBtR0NvaW46IG51bWJlciA9IDA7ICAgICAgICAgICAgLy8g6YeR5biBMeaVsFxyXG5cclxuICAgIHByaXZhdGUgbVBDb2luOiBudW1iZXIgPSAwOyAgICAgICAgICAgIC8vIOmHkeW4gTLmlbBcclxuXHJcbiAgICBwcml2YXRlIGlzR3VpZGU6IGJvb2xlYW4gPSB0cnVlOyAgICAgICAvLyDmlrDmiYvlvJXlr7xcclxuXHJcbiAgICBwcml2YXRlIF9zZXZlckRhdGE6IGFueSA9IG51bGw7ICAgICAgICAvLyDmnI3liqHlmajov5Tlm55kYXRhXHJcblxyXG4gICAgcHJpdmF0ZSB1c2VySW5mbzogYW55ID0gbnVsbDsgICAgICAgICAgLy8g55So5oi35b6u5L+h5pWw5o2uXHJcblxyXG4gICAgcHJpdmF0ZSBhd2FyZE51bWJlcjogbnVtYmVyID0gMDsgICAgICAgLy8g5q+P5pel6aKG5Y+W57qi5YyF5oiW6K+d6LS55Y2h5pWw6YePICAgXHJcblxyXG4gICAgcHJpdmF0ZSBpc0dldEF3YXJkOiBib29sZWFuID0gZmFsc2U7ICAgLy8g5piv5ZCm6aKG5Y+W5aWW5YqxXHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50TGluZTogbnVtYmVyID0gMDsgICAgICAgLy8g5b2T5YmN6KGM5pWwXHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlZEFuZENvc3Q6IGJvb2xlYW4gPSBmYWxzZTsgLy8g5piv5ZCm5bey57uP55Sf5oiQ5LqG57qi5YyF5oiW6ICF6K+d6LS5XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50UHJvcDogbnVtYmVyID0gMDsgICAgICAgLy8g5b2T5YmN6YGT5YW35pWw6YePXHJcblxyXG4gICAgcHJpdmF0ZSByZWNvcmRCYXJyaWVyOiBCYXJyaWVyW10gPSBbXSAgLy8g6Zqc56KN54mp6K6w5b2VXHJcblxyXG4gICAgcHJpdmF0ZSByZWNvcmRCYWxsOiBCYWxsW10gPSBbXSAgICAgICAgLy8g6Zqc56KN54mp6K6w5b2VXHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmVkTGluZTogbnVtYmVyID0gMDsgICAgLy8g57qi5YyF6KGM5pWwXHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVCYXJyaWVyc051bTogbnVtYmVyID0gMDsgLy8g5Yig6Zmk6Zqc56KN54mp5pWw6YePXHJcblxyXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTsgICAgLy8g5piv5ZCm56ys5LiA5qyhbG9hZGluZ1xyXG5cclxuICAgIHByaXZhdGUgaXNPbmVSZWQ6IGJvb2xlYW4gPSBmYWxzZTsgICAgIC8vIOaYr+WQpuesrOS4gOasoemihuWPlue6ouWMhe+8iOWfi+eCue+8iVxyXG5cclxuICAgIHByaXZhdGUgaXNSZWQ6IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgIC8vIOaYr+WQpuesrOS4gOasoemihuWPlue6ouWMhVxyXG5cclxuICAgIHByaXZhdGUgaXNoZjogYm9vbGVhbiA9IGZhbHNlOyAgICAgICAgIC8vIOaYr+WQpuesrOS4gOasoemihuWPluivnei0uVxyXG5cclxuICAgIHByaXZhdGUgY3Vycm5ldFJldml2ZU51bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGlzR2V0R2lmdDogYm9vbGVhbiA9IGZhbHNlOyAgICAvLyDku4rlpKnmmK/lkKbpooblj5bov4fnpLznialcclxuXHJcbiAgICBwcml2YXRlIG9ubGluZVRpbWU6IG51bWJlciA9IC05OyAgICAgICAgLy8g5Zyo57q/5pe26Ze0XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRHaWZ0OiBudW1iZXIgPSAwOyAgICAgICAgICAgLy8g56S854mp6aKG5Y+W5qyh5pWwXHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsZWN0Q29pbnM6IG51bWJlciA9IDA7ICAgICAgLy8g57Sv6K6h6YeR5biB56ys5LiA6Zi25q61XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsZWN0Q29pbnMyOiBudW1iZXIgPSAwOyAgICAgIC8vIOe0r+iuoemHkeW4geesrOS6jOmYtuautSBcclxuXHJcbiAgICBwcml2YXRlIGV4cERheTogbnVtYmVyID0gMDsgICAgICAgICAgICAgLy8g5q+P5pel57uP6aqMXHJcblxyXG4gICAgcHJpdmF0ZSBleHA6IG51bWJlciA9IDA7ICAgICAgICAgICAgICAgLy8g546p5a625b2T5YmN57uP6aqMXHJcblxyXG4gICAgcHJpdmF0ZSBsZXZlbDogbnVtYmVyID0gMTsgICAgICAgICAgICAgIC8vIOW9k+WJjeetiee6p1xyXG5cclxuICAgIHByaXZhdGUgc3BpbkNvdW50OiBudW1iZXIgPSAwOyAgICAgICAgICAvLyDova7nm5jmrKHmlbBcclxuXHJcbiAgICBwcml2YXRlIHJhaW5Bd2FyZE51bTogbnVtYmVyID0gMDsgICAgICAgLy8g5b2p6Jm55pa55Z2XXHJcblxyXG4gICAgcHJpdmF0ZSByYWluUHJvYmFiaWxpdHk6IG51bWJlciA9IDA7ICAgIC8vIOW9qeiZueamgueOh1xyXG5cclxuICAgIHByaXZhdGUgaXNSYWluOiBib29sZWFuID0gZmFsc2U7ICAgICAgICAvLyDmmK/lkKblnLrkuIrlt7Lnu4/mnInlvanombnkuoZcclxuXHJcbiAgICBwcml2YXRlIGx1bXBEYXRhOiBMdW1wID0ge1xyXG4gICAgICAgIEJhcnJpZXJTYWNsZUFycjogWzAuOCwgMV0sXHJcbiAgICAgICAgTWF4QmFsbENvdW50OiA1MCxcclxuICAgICAgICB3ZWlnaHQ6IFtbODUwLCAxMDAsIDUwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgODUwLCAxMDAsIDUwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgODUwLCAxMDAsIDUwLCAwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgODUwLCAxMDAsIDUwLCAwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgODUwLCAxMDAsIDUwLCAwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgODUwLCAxMDAsIDUwXSxcclxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgODAwLCAyMDBdLFxyXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDAwXV0sXHJcbiAgICAgICAgbnVtV2VpZ2h0OiBbWzEsIDEwXSwgWzExLCAyMF0sIFsyMSwgNTBdLCBbNTEsIDEwMF0sIFsxMDEsIDIwMF0sIFsyMDEsIDMwMF0sIFszMDEsIDUwMF0sIFs1MDEsIDEwMDBdXSxcclxuICAgICAgICB0YWdlcjogWzEwMCwgMzAwLCA1MDAsIDEwMDAsIDIwMDAwLCA1MDAwMCwgMTAwMDBdLFxyXG4gICAgICAgIGNvbG9yOiBbWycjYTRhNGE0JywgJyNjOGM4YzgnLCAnI2IzYjNiMyddLFxyXG4gICAgICAgIFsnIzJiM2Y4NScsICcjNmE3YmI1JywgJyM1ZDZlYWInXSxcclxuICAgICAgICBbJyMxZDhiN2YnLCAnIzViYmFhYScsICcjM2FhZDgzJ10sXHJcbiAgICAgICAgWycjZTNhNTM4JywgJyNmZmRjN2MnLCAnI2ZkYzA0YSddLFxyXG4gICAgICAgIFsnI2NjNzkxOCcsICcjZmZiMjJlJywgJyNlNDhkMmMnXSxcclxuICAgICAgICBbJyM2OTNmOTInLCAnI2EwNzdjNicsICcjOGU1Y2JjJ10sXHJcbiAgICAgICAgWycjZTMxZTNmJywgJyNmODY0NzUnLCAnI2ZmNDQ2MyddXSxcclxuICAgICAgICBwcm9wOiBbWzYwMCwgMjAwXSwgWzYwMCwgNjAwXSwgWzQwMCwgNDAwXSwgWzIwMCwgMTAwXV0sXHJcbiAgICAgICAgcHJvcEFycjogWzEsIDJdLFxyXG4gICAgICAgIEJ1cmllZFBvaW50U2NvcmU6IFtbMTAwMDAsIDUwMDAwXSwgWzUwMDAwLCAxMDAwMDBdLCBbMTAwMDAwLCA1MDAwMDBdLCBbNTAwMDAwLCAxMDAwMDAwXSwgWzEwMDAwMDAsIDIwMDAwMDAwXSwgWzIwMDAwMDAwLCA1MDAwMDAwMF0sIFs1MDAwMDAwMSwgNTAwMDAwMDBdXSxcclxuICAgICAgICBzY29yZUludGVydmFsOiBbMjAwLCA3NTAsIDE1MDAsIDMwMDAsIDUwMDAsIDEwMDAwLCAxNTAwMCwgMjAwMDAsIDUwMDAwLCA1MDAwMV0sXHJcbiAgICAgICAgcmV2aXZlU2NvcmU6IFtbMzAwMCwgNTAwMF0sIFs1MDAwLCAxMDAwMF0sIFsxMDAwMCwgNTAwMDBdLCBbNTAwMDAsIDEwMDAwMF0sIFsxMDAwMDAsIDUwMDAwMF0sIFs1MDAwMDAsIDk5OTk5OTk5OTk5XV0sXHJcbiAgICAgICAgaW5pdEJhcnJpZXJsQXJyOiBbMywgNV0sXHJcbiAgICAgICAgYmFycmllcmxBcnJQb3NYOiBbLTI1MCwgLTEyNSwgMCwgMTI1LCAyNTBdLFxyXG4gICAgICAgIHJldml2ZU51bTogMixcclxuICAgICAgICBNYXhCaWdCYWxsOiAxLjUsXHJcbiAgICAgICAgQmFsbHByb3A6IFtbMTEsIDE1XSwgWzEyNiwgMjBdLCBbMjEsIDI1XSwgWzI2LCAzMF1dLFxyXG4gICAgICAgIG15VmlkZW9NYXhDb3VudDogNDAsXHJcbiAgICAgICAgdmlkZW9BZGRQb2ludDogWzIwLCA0MF0sXHJcbiAgICAgICAgb3V0T2ZSZWRBbmRDb3N0OiBbMiwgNV0sXHJcbiAgICAgICAgdmlkZW9CYW9YaWFuZzogWzEwLCA4LCA3LCA1LCAzXSxcclxuICAgICAgICBNYXhGaXJzdEdvbGQ6IDk4LFxyXG4gICAgICAgIE1heFNlY29uZEdvbGQ6IDY4LFxyXG4gICAgICAgIGdpZnRUaW1lOiA5MDAsXHJcbiAgICAgICAgQ29sbGVjdENvaW5zOiBbMTAwMDAsIDIwMDBdLFxyXG4gICAgICAgIExldmVsQ2lvbnM6IFtbMywgNV0sIFsxLCA0XSwgWzEsIDJdXSxcclxuICAgICAgICBzcGluV2VpZ2h0OiBbXHJcbiAgICAgICAgICAgIFs4MDAsIDgwMCwgMTAwMCwgNTAwLCAyMDAsIDEwMF0sXHJcbiAgICAgICAgICAgIFs4MDAsIDgwMCwgMzAwLCAxMDAwLCAzMDAsIDEwMF0sXHJcbiAgICAgICAgICAgIFs4MDAsIDgwMCwgMTAwLCAyMDAsIDgwMCwgMTAwMF1dLFxyXG4gICAgICAgIHNwaW5Bd2FyZDogW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBhd2FyZDogXCJncFwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIGF3YXJkOiA1MDAgfSxcclxuICAgICAgICAgICAgeyBpZDogMywgYXdhcmQ6IDIwMCB9LFxyXG4gICAgICAgICAgICB7IGlkOiA0LCBhd2FyZDogXCJwcFwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDUsIGF3YXJkOiAxMDAgfSxcclxuICAgICAgICAgICAgeyBpZDogNiwgYXdhcmQ6IDUwIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBleHA6IFtdLFxyXG4gICAgICAgIGh1cnQ6IDEwLFxyXG4gICAgICAgIGV4cFNhdGU6IDEwLFxyXG4gICAgICAgIGV4cERheUNvdW50OiA1MDAwMDAwLFxyXG4gICAgICAgIGlzRGVidWc6IHRydWUsXHJcbiAgICAgICAgYnhDcmVkaXQ6IDEwLFxyXG4gICAgICAgIGxldmVsRm9ybXVsYTogW1sxLjAyLCAxLjIsIDRdLCBbMS4wMiwgMywgN11dLFxyXG4gICAgICAgIHJhaW5Bd2FyZE1heDogNTAsXHJcbiAgICAgICAgcmFpblByb2JhYmlsaXR5OiAwLjIsXHJcbiAgICAgICAgYWRkUHJvcDogMyxcclxuICAgIH1cclxuXHJcbiAgICAvKiog55So5oi354q25oCBICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0dXM6IFVzZXJTdGF0dXMgPSB7XHJcbiAgICAgICAgaXNNdXRlOiB0cnVlLFxyXG4gICAgICAgIGlzU2hha2U6IHRydWUsXHJcbiAgICAgICAgaXNTb3VuZDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOS/neWtmOeUqOaIt+aVsOaNrlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzYXZlKHR5cGU6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgbUdDb2luOiB0aGlzLm1HQ29pbixcclxuICAgICAgICAgICAgbVBDb2luOiB0aGlzLm1QQ29pbixcclxuICAgICAgICAgICAgbUNDaW9uOiB0aGlzLm1DQ2lvbixcclxuICAgICAgICAgICAgaXNHdWlkZTogdGhpcy5pc0d1aWRlLFxyXG4gICAgICAgICAgICB1c2VySW5mbzogdGhpcy51c2VySW5mbyxcclxuICAgICAgICAgICAgYXdhcmROdW1iZXI6IHRoaXMuYXdhcmROdW1iZXIsXHJcbiAgICAgICAgICAgIGlzR2V0QXdhcmQ6IHRoaXMuaXNHZXRBd2FyZCxcclxuICAgICAgICAgICAgaXNSZWRBbmRDb3N0OiB0aGlzLmlzUmVkQW5kQ29zdCxcclxuICAgICAgICAgICAgY3VycmVudExpbmU6IHRoaXMuY3VycmVudExpbmUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9wOiB0aGlzLmN1cnJlbnRQcm9wLFxyXG4gICAgICAgICAgICByZWNvcmRCYXJyaWVyOiB0aGlzLnJlY29yZEJhcnJpZXIsXHJcbiAgICAgICAgICAgIHJlY29yZEJhbGw6IHRoaXMucmVjb3JkQmFsbCxcclxuICAgICAgICAgICAgY3VycmVudFJlZExpbmU6IHRoaXMuY3VycmVudFJlZExpbmUsXHJcbiAgICAgICAgICAgIGRlbGV0ZUJhcnJpZXJzTnVtOiB0aGlzLmRlbGV0ZUJhcnJpZXJzTnVtLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRoaXMuaXNMb2FkaW5nLFxyXG4gICAgICAgICAgICBpc09uZVJlZDogdGhpcy5pc09uZVJlZCxcclxuICAgICAgICAgICAgY3Vycm5ldFJldml2ZU51bTogdGhpcy5jdXJybmV0UmV2aXZlTnVtLFxyXG4gICAgICAgICAgICBpc1JlZDogdGhpcy5pc1JlZCxcclxuICAgICAgICAgICAgaXNoZjogdGhpcy5pc2hmLFxyXG4gICAgICAgICAgICBpc0dldEdpZnQ6IHRoaXMuaXNHZXRHaWZ0LFxyXG4gICAgICAgICAgICBvbmxpbmVUaW1lOiB0aGlzLm9ubGluZVRpbWUsXHJcbiAgICAgICAgICAgIGdldEdpZnQ6IHRoaXMuZ2V0R2lmdCxcclxuICAgICAgICAgICAgY29sbGVjdENvaW5zOiB0aGlzLmNvbGxlY3RDb2lucyxcclxuICAgICAgICAgICAgY29sbGVjdENvaW5zMjogdGhpcy5jb2xsZWN0Q29pbnMyLFxyXG4gICAgICAgICAgICBleHBEYXk6IHRoaXMuZXhwRGF5LFxyXG4gICAgICAgICAgICBleHA6IHRoaXMuZXhwLFxyXG4gICAgICAgICAgICBsZXZlbDogdGhpcy5sZXZlbCxcclxuICAgICAgICAgICAgc3BpbkNvdW50OiB0aGlzLnNwaW5Db3VudCxcclxuICAgICAgICAgICAgcmFpbkF3YXJkTnVtOiB0aGlzLnJhaW5Bd2FyZE51bSxcclxuICAgICAgICAgICAgcmFpblByb2JhYmlsaXR5OiB0aGlzLnJhaW5Qcm9iYWJpbGl0eSxcclxuICAgICAgICAgICAgaXNSYWluOiB0aGlzLmlzUmFpbixcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09IDApIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXNiYWxsJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEZTREsuc2F2ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOivu+WPlueUqOaIt+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXVzYmFsbCcpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fc2V2ZXJEYXRhLnByZWZlcmVuY2VzO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5aOw6Z+zXHJcbiAgICAgKiBAcGFyYW0gZmxhZyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBJc011dGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzLmlzTXV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IElzTXV0ZShmbGFnOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaXNNdXRlID0gZmxhZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pnIfliqhcclxuICAgICAqIEBwYXJhbSBmbGFnIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IElzU2hha2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzLmlzU2hha2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBJc1NoYWtlKGZsYWc6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnN0YXR1cy5pc1NoYWtlID0gZmxhZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBJc1NvdW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cy5pc1NvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgSXNTb3VuZChmbGFnOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaXNTb3VuZCA9IGZsYWc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2T5YmN6YeR5biBMVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGZpcnN0R29sZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1HQ29pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGZpcnN0R29sZChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5tR0NvaW4gPSBmbGFnO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjemHkeW4gTJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBzZWNvbmRHb2xkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubVBDb2luO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2Vjb25kR29sZChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5tUENvaW4gPSBmbGFnO1xyXG4gICAgICAgIHRoaXMuc2F2ZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDorr7nva7ph5HluIFcclxuICAgIHB1YmxpYyBnZXQgY3JlZGl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1DQ2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNyZWRpdChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5tQ0Npb24gPSBmbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6YCa6L+H5paw5omL5byV5a+8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGFzc0d1aWRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzR3VpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBwYXNzR3VpZGUoZmxhZykge1xyXG4gICAgICAgIHRoaXMuaXNHdWlkZSA9IGZsYWc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyN5Yqh5Zmo5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2VydmVyRGF0YSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXZlckRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzZXJ2ZXJEYXRhKGZsYWcpIHtcclxuICAgICAgICB0aGlzLl9zZXZlckRhdGEgPSBmbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b6u5L+h55So5oi35pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRXWF9JTkZPKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXWF9JRkZPKGZsYWcpIHtcclxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gZmxhZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnur/kuIrphY3nva5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEx1bXBEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmx1bXBEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMdW1wRGF0YShmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5sdW1wRGF0YSA9IGZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm7TmjqXojrflj5bmmK/lkKblj6/ku6XnlJ/miJDor53otLnljaHmiJbogIXnuqLljIVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEF3YXJkTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF3YXJkTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRBd2FyZE51bWJlcihmbGFnPykge1xyXG4gICAgICAgIGlmIChmbGFnID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hd2FyZE51bWJlciA9IGZsYWc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXdhcmROdW1iZXIgKz0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbpooblj5bkuoblpZblirFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldElzR2V0QXdhcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNHZXRBd2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNHZXRBd2FyZChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5pc0dldEF3YXJkID0gZmxhZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5booYzmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEN1cnJlbnRMaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRMaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50TGluZShmbGFnPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGZsYWcgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaW5lID0gZmxhZztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRMaW5lICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblt7Lnu4/nlJ/miJDkuobnuqLljIVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldElzUmVkQW5kQ29zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1JlZEFuZENvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldElzUmVkQW5kQ29zdChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5pc1JlZEFuZENvc3QgPSBmbGFnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeWcuuS4iumBk+WFt+aVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFByb3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFByb3A7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRQcm9wKGZsYWcpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcm9wID0gZmxhZztcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UHJvcCA8IDApIHRoaXMuY3VycmVudFByb3AgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiusOW9lemanOeijeeJqVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVjb3JkQmFycmllcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRCYXJyaWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSZWNvcmRCYXJyaWVyKGZsYWcpIHtcclxuICAgICAgICB0aGlzLnJlY29yZEJhcnJpZXIgPSBmbGFnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6w5b2V5by555CDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSZWNvcmRCYWxsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZEJhbGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJlY29yZEJhbGwoZmxhZykge1xyXG4gICAgICAgIHRoaXMucmVjb3JkQmFsbCA9IGZsYWdcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuqLljIXooYzmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEN1cnJlbnRSZWRMaW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZWRMaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50UmVuTGluZShmbGFnPzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGZsYWcgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRSZWRMaW5lID0gZmxhZztcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVkTGluZSArPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+manOeijeeJqemUgOavgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RGVsZXRlQmFycmllcnNOdW0oKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVCYXJyaWVyc051bSArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmRlbGV0ZUJhcnJpZXJzTnVtIDw9IDEwKSB7XHJcbiAgICAgICAgICAgIEZTREsudW1lbmdFdmVudChcIkdhbWVfUmVtb3ZlXCIsIGAke3RoaXMuZGVsZXRlQmFycmllcnNOdW19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56ys5LiA5qyh55m76ZmGXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJc0xvYWRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2FkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc0xvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+aYr+WQplxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0SXNPbmVSZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT25lUmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbmVSZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBGU0RLLnVtZW5nRXZlbnQoXCJHYW1lX1JlZFBhY2tldFwiLCBcIjFcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuesrOS4gOasoemihuWPlue6ouWMhVxyXG4gICAgICogQHBhcmFtIG5hbWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDb3N0KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChuYW1lID09IFwiYnhcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc2hmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q29zdChuYW1lOiBzdHJpbmcsIGZsYWcpIHtcclxuICAgICAgICBpZiAobmFtZSA9PSBcImJ4XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc2hmID0gZmxhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2F2ZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWkjea0u+asoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q3Vycm5ldFJldml2ZU51bSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJybmV0UmV2aXZlTnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJybmV0UmV2aXZlTnVtKGZsYWc/KSB7XHJcbiAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJybmV0UmV2aXZlTnVtID0gZmxhZztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJuZXRSZXZpdmVOdW0gLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRkxvZy5ub3JtYWwodGhpcy5jdXJybmV0UmV2aXZlTnVtKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreS7iuWkqeaYr+WQpumihuWPluS6huekvOeJqVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SXNHZXRHaWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzR2V0R2lmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXNHZXRHaWZ0KGZsYWcpIHtcclxuICAgICAgICB0aGlzLmlzR2V0R2lmdCA9IGZsYWc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zyo57q/5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRPbmxpbmVUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ubGluZVRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE9ubGluZVRpbWUoZmxhZykge1xyXG4gICAgICAgIHRoaXMub25saW5lVGltZSA9IGZsYWc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56S854mp5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRHaWZ0Q291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0R2lmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0R2lmdENvdW50KGZsYWcpIHtcclxuICAgICAgICB0aGlzLmdldEdpZnQgPSBmbGFnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHkeW4geesrOS4gOmYtuautVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q29sbGVjdENvaW5zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3RDb2luc1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb2xsZWN0Q29pbnMoZmxhZykge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdENvaW5zID0gZmxhZztcclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmHkeW4geesrOS6jOmYtuautVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q29sbGVjdENvaW5zMigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0Q29pbnMyXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENvbGxlY3RDb2luczIoZmxhZykge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdENvaW5zMiA9IGZsYWc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5q+P5pel57uP6aqMXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRFeHBEYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwRGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRFeHBEYXkoZmxhZykge1xyXG4gICAgICAgIHRoaXMuZXhwRGF5ID0gZmxhZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueUqOaIt+e7j+mqjFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RXhwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4cDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RXhwKGZsYWcpIHtcclxuICAgICAgICB0aGlzLmV4cCA9IGZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3nrYnnuqdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldExldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldExldmVsKGZsYWcpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gZmxhZztcclxuICAgICAgICBGU0RLLnNldFRhc2sodGhpcy5sZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDova7nm5jmrKHmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNwaW5Db3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGluQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwaW5Db3VudChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5zcGluQ291bnQgPSBmbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSYWluQXdhcmROdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFpbkF3YXJkTnVtO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSYWluQXdhcmROdW0oZmxhZz8pIHtcclxuICAgICAgICBpZiAoZmxhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFpbkF3YXJkTnVtID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmFpbkF3YXJkTnVtICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvanombnmpoLnjodcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJhaW5Qcm9iYWJpbGl0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yYWluUHJvYmFiaWxpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJhaW5Qcm9iYWJpbGl0eShmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5yYWluUHJvYmFiaWxpdHkgPSBmbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5a2Y5Zyo5b2p6Jm55pa55Z2XXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJc1JhaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSYWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc1JhaW4oZmxhZykge1xyXG4gICAgICAgIHRoaXMuaXNSYWluID0gZmxhZztcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXIgPSBuZXcgVXNlcigpO1xyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+eKtuaAgVxyXG4gKi9cclxuaW50ZXJmYWNlIFVzZXJTdGF0dXMge1xyXG4gICAgLyoqIOaYr+WQpumdmemfsyAqL1xyXG4gICAgaXNNdXRlOiBib29sZWFuLFxyXG4gICAgaXNTaGFrZTogYm9vbGVhbixcclxuICAgIGlzU291bmQ6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmludGVyZmFjZSBMdW1wIHtcclxuICAgIEJhcnJpZXJTYWNsZUFycjogbnVtYmVyW10sXHJcbiAgICBNYXhCYWxsQ291bnQ6IG51bWJlcixcclxuICAgIHdlaWdodDogbnVtYmVyW11bXSxcclxuICAgIG51bVdlaWdodDogbnVtYmVyW11bXSxcclxuICAgIHRhZ2VyOiBudW1iZXJbXSxcclxuICAgIGNvbG9yOiBzdHJpbmdbXVtdLFxyXG4gICAgcHJvcDogbnVtYmVyW11bXSxcclxuICAgIHByb3BBcnI6IG51bWJlcltdLFxyXG4gICAgQnVyaWVkUG9pbnRTY29yZTogbnVtYmVyW11bXSxcclxuICAgIHNjb3JlSW50ZXJ2YWw6IG51bWJlcltdLFxyXG4gICAgcmV2aXZlU2NvcmU6IG51bWJlcltdW10sXHJcbiAgICBpbml0QmFycmllcmxBcnI6IG51bWJlcltdLFxyXG4gICAgYmFycmllcmxBcnJQb3NYOiBudW1iZXJbXSxcclxuICAgIHJldml2ZU51bTogbnVtYmVyLFxyXG4gICAgTWF4QmlnQmFsbDogbnVtYmVyLFxyXG4gICAgQmFsbHByb3A6IG51bWJlcltdW10sXHJcbiAgICBteVZpZGVvTWF4Q291bnQ6IG51bWJlcixcclxuICAgIHZpZGVvQWRkUG9pbnQ6IG51bWJlcltdLFxyXG4gICAgb3V0T2ZSZWRBbmRDb3N0OiBudW1iZXJbXSxcclxuICAgIE1heEZpcnN0R29sZDogbnVtYmVyLFxyXG4gICAgTWF4U2Vjb25kR29sZDogbnVtYmVyLFxyXG4gICAgZ2lmdFRpbWU6IG51bWJlcixcclxuICAgIENvbGxlY3RDb2luczogbnVtYmVyW10sXHJcbiAgICBMZXZlbENpb25zOiBudW1iZXJbXVtdLFxyXG4gICAgc3BpbldlaWdodDogbnVtYmVyW11bXSxcclxuICAgIHNwaW5Bd2FyZDogb2JqZWN0W10sXHJcbiAgICBleHA6IG9iamVjdFtdLFxyXG4gICAgaHVydDogbnVtYmVyLFxyXG4gICAgZXhwRGF5Q291bnQ6IG51bWJlcixcclxuICAgIHZpZGVvQmFvWGlhbmc6IG51bWJlcltdLFxyXG4gICAgaXNEZWJ1ZzogQm9vbGVhbixcclxuICAgIGV4cFNhdGU6IG51bWJlcixcclxuICAgIGJ4Q3JlZGl0OiBudW1iZXIsXHJcbiAgICBsZXZlbEZvcm11bGE6IG51bWJlcltdW107XHJcbiAgICByYWluQXdhcmRNYXg6IG51bWJlcixcclxuICAgIHJhaW5Qcm9iYWJpbGl0eTogbnVtYmVyLFxyXG4gICAgYWRkUHJvcDogbnVtYmVyLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgQmFycmllciB7XHJcbiAgICBuYW1lOiBzdHJpbmcsIC8vIOWQjeWtl1xyXG4gICAgc2NvcmU6IG51bWJlciwvLyDliIbmlbBcclxuICAgIHBvczogY2MuVmVjMiwgLy8g5Z2Q5qCHXHJcbiAgICBzY2FsZTogbnVtYmVyLC8vIOWkp+Wwj1xyXG4gICAgYW5nbGU6IG51bWJlciwvLyDop5LluqZcclxuICAgIGlzUmFpbjogYm9vbGVhbiwvLyDmmK/lkKblvanomblcclxufVxyXG5cclxuaW50ZXJmYWNlIEJhbGwge1xyXG4gICAgaHVydDogbnVtYmVyLFxyXG4gICAgc2NhbGU6IG51bWJlcixcclxufVxyXG4iXX0=