import { utils } from "./Utils";

/**
 * 用户
 * @author yxx0
 */
class User {
    private mCCion: number = 0;        // 金币

    private mGCoin: number = 0;            // 金币1数

    private mPCoin: number = 0;            // 金币2数

    private isGuide: boolean = true;       // 新手引导

    private _severData: any = null;        // 服务器返回data

    private userInfo: any = null;          // 用户微信数据

    private awardNumber: number = 0;       // 每日领取红包或话费卡数量   

    private isGetAward: boolean = false;   // 是否领取奖励

    private currentLine: number = 0;       // 当前行数

    private isRedAndCost: boolean = false; // 是否已经生成了红包或者话费

    private currentProp: number = 0;       // 当前道具数量

    private recordBarrier: Barrier[] = []  // 障碍物记录

    private recordBall: Ball[] = []        // 障碍物记录

    private currentRedLine: number = 0;    // 红包行数

    private deleteBarriersNum: number = 0; // 删除障碍物数量

    private isLoading: boolean = false;    // 是否第一次loading

    private isOneRed: boolean = false;     // 是否第一次领取红包（埋点）

    private isRed: boolean = false;        // 是否第一次领取红包

    private ishf: boolean = false;         // 是否第一次领取话费

    private currnetReviveNum: number = 0;

    private isGetGift: boolean = false;    // 今天是否领取过礼物

    private onlineTime: number = -9;        // 在线时间

    private getGift: number = 0;           // 礼物领取次数

    private collectCoins: number = 0;      // 累计金币第一阶段

    private collectCoins2: number = 0;      // 累计金币第二阶段 

    private expDay: number = 0;             // 每日经验

    private exp: number = 0;               // 玩家当前经验

    private level: number = 1;              // 当前等级

    private spinCount: number = 0;          // 轮盘次数

    private rainAwardNum: number = 0;       // 彩虹方块

    private rainProbability: number = 0;    // 彩虹概率

    private isRain: boolean = false;        // 是否场上已经有彩虹了

    private lumpData: Lump = {
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
            [800, 800, 100, 200, 800, 1000]],
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
    }

    /** 用户状态  */
    private status: UserStatus = {
        isMute: true,
        isShake: true,
        isSound: true,
    };

    /**
    * 保存用户数据
    */
    public save(type: number = 0): void {
        let data = {
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
        }

        if (type == 0) {
            cc.sys.localStorage.setItem('ausball', JSON.stringify(data));
        } else {
            FSDK.saveData(data);
        }
    }


    /**
     * 读取用户数据
     */
    public load(): void {
        let data = cc.sys.localStorage.getItem('ausball');
        if (data) {
            data = JSON.parse(data)

            for (let key in data) {
                this[key] = data[key];
            }
        }
        else {
            data = this._severData.preferences;
            if (data) {
                for (let key in data) {
                    this[key] = data[key];
                }
            }
        }
    }


    /**
     * 设置声音
     * @param flag 
     */
    public get IsMute(): boolean {
        return this.status.isMute;
    }

    public set IsMute(flag: boolean) {
        this.status.isMute = flag;

    }

    /**
     * 设置震动
     * @param flag 
     */
    public get IsShake(): boolean {
        return this.status.isShake;
    }

    public set IsShake(flag: boolean) {
        this.status.isShake = flag;

    }

    /**
     * 设置音效
     */
    public get IsSound(): boolean {
        return this.status.isSound;
    }

    public set IsSound(flag: boolean) {
        this.status.isSound = flag;

    }

    /**
     * 当前金币1
     */
    public get firstGold(): number {
        return this.mGCoin;
    }

    public set firstGold(flag) {
        this.mGCoin = flag;
        this.save(1);
    }

    /**
     * 当前金币2
     */
    public get secondGold(): number {
        return this.mPCoin;
    }

    public set secondGold(flag) {
        this.mPCoin = flag;
        this.save(1);
    }

    // 设置金币
    public get credit() {
        return this.mCCion;
    }

    public set credit(flag) {
        this.mCCion = flag;
    }

    /**
     * 是否通过新手引导
     */
    public get passGuide() {
        return this.isGuide;
    }

    public set passGuide(flag) {
        this.isGuide = flag;

    }

    /**
     * 服务器数据
     */
    public get serverData(): any {
        return this._severData;
    }

    public set serverData(flag) {
        this._severData = flag;
    }

    /**
     * 微信用户数据
     */
    public getWX_INFO() {
        return this.userInfo;
    }

    public setWX_IFFO(flag) {
        this.userInfo = flag;

    }

    /**
     * 获取线上配置
     */
    public getLumpData() {
        return this.lumpData;
    }

    public setLumpData(flag) {
        this.lumpData = flag;
    }

    /**
     * 直接获取是否可以生成话费卡或者红包
     */
    public getAwardNumber() {
        return this.awardNumber;
    }

    public setAwardNumber(flag?) {
        if (flag == 0) {
            this.awardNumber = flag;

            return;
        }
        this.awardNumber += 1;

    }

    /**
     * 是否领取了奖励
     */
    public getIsGetAward() {
        return this.isGetAward;
    }

    public setIsGetAward(flag) {
        this.isGetAward = flag;

    }

    /**
     * 获取行数
     */
    public getCurrentLine() {
        return this.currentLine;
    }

    public setCurrentLine(flag?: number) {
        if (flag == 0) {
            this.currentLine = flag;
            return;
        }
        this.currentLine += 1;
    }

    /**
     * 是否已经生成了红包
     */
    public getIsRedAndCost() {
        return this.isRedAndCost;
    }

    public setIsRedAndCost(flag) {
        this.isRedAndCost = flag;

    }

    /**
     * 获取当前场上道具数量
     */
    public getCurrentProp() {
        return this.currentProp;
    }

    public setCurrentProp(flag) {
        this.currentProp = flag;
        if (this.currentProp < 0) this.currentProp = 0;

    }

    /**
     * 记录障碍物
     */
    public getRecordBarrier() {
        return this.recordBarrier;
    }

    public setRecordBarrier(flag) {
        this.recordBarrier = flag

    }

    /**
     * 记录弹球
     */
    public getRecordBall() {
        return this.recordBall;
    }

    public setRecordBall(flag) {
        this.recordBall = flag

    }

    /**
     * 红包行数
     */
    public getCurrentRedLine() {
        return this.currentRedLine;
    }

    public setCurrentRenLine(flag?: number) {
        if (flag == 0) {
            this.currentRedLine = flag;

            return;
        }
        this.currentRedLine += 1;

    }

    /**
     * 计算障碍物销毁
     */
    public setDeleteBarriersNum() {
        this.deleteBarriersNum += 1;
        if (this.deleteBarriersNum <= 10) {
            FSDK.umengEvent("Game_Remove", `${this.deleteBarriersNum}`);
        }
    }

    /**
     * 第一次登陆
     */
    public getIsLoading() {
        return this.isLoading;
    }

    public setIsLoading() {
        this.isLoading = true;

    }

    /**
     * 计算是否
     */
    public setIsOneRed() {
        if (!this.isOneRed) {
            this.isOneRed = true;
            FSDK.umengEvent("Game_RedPacket", "1");

        }
    }

    /**
     * 是否第一次领取红包
     * @param name 
     */
    public getCost(name: string) {
        if (name == "bx") {
            return this.ishf;
        }
    }

    public setCost(name: string, flag) {
        if (name == "bx") {
            this.ishf = flag;
        }

        this.save(1);
    }

    /**
     * 获取复活次数
     */
    public getCurrnetReviveNum() {
        return this.currnetReviveNum;
    }

    public setCurrnetReviveNum(flag?) {
        if (flag) {
            this.currnetReviveNum = flag;
        } else {
            this.currnetReviveNum -= 1;
        }
        FLog.normal(this.currnetReviveNum)

    }

    /**
     * 判断今天是否领取了礼物
     */
    public getIsGetGift() {
        return this.isGetGift;
    }

    public setIsGetGift(flag) {
        this.isGetGift = flag;

    }

    /**
     * 在线时间
     */
    public getOnlineTime() {
        return this.onlineTime;
    }

    public setOnlineTime(flag) {
        this.onlineTime = flag;

    }

    /**
     * 礼物次数
     */
    public getGiftCount() {
        return this.getGift;
    }

    public setGiftCount(flag) {
        this.getGift = flag;

    }

    /**
     * 金币第一阶段
     */
    public getCollectCoins() {
        return this.collectCoins
    }

    public setCollectCoins(flag) {
        this.collectCoins = flag;

    }
    /**
     * 金币第二阶段
     */
    public getCollectCoins2() {
        return this.collectCoins2
    }

    public setCollectCoins2(flag) {
        this.collectCoins2 = flag;

    }

    /**
     * 获取每日经验
     */
    public getExpDay() {
        return this.expDay;
    }

    public setExpDay(flag) {
        this.expDay = flag;
    }

    /**
     * 获取用户经验
     */
    public getExp() {
        return this.exp;
    }

    public setExp(flag) {
        this.exp = flag;
    }

    /**
     * 获取当前等级
     */
    public getLevel() {
        return this.level
    }

    public setLevel(flag) {
        this.level = flag;
        FSDK.setTask(this.level);
    }

    /**
     * 轮盘次数
     */
    public getSpinCount() {
        return this.spinCount;
    }

    public setSpinCount(flag) {
        this.spinCount = flag;
    }

    public getRainAwardNum() {
        return this.rainAwardNum;
    }

    public setRainAwardNum(flag?) {
        if (flag == 0) {
            this.rainAwardNum = 0;
            this.save();
            return;
        }

        this.rainAwardNum += 1;
    }

    /**
     * 彩虹概率
     */
    public getRainProbability() {
        return this.rainProbability;
    }

    public setRainProbability(flag) {
        this.rainProbability = flag;
    }

    /**
     * 是否存在彩虹方块
     */
    public getIsRain() {
        return this.isRain;
    }

    public setIsRain(flag) {
        this.isRain = flag;
    }



}

export const user = new User();

/**
 * 用户状态
 */
interface UserStatus {
    /** 是否静音 */
    isMute: boolean,
    isShake: boolean,
    isSound: boolean,
}

interface Lump {
    BarrierSacleArr: number[],
    MaxBallCount: number,
    weight: number[][],
    numWeight: number[][],
    tager: number[],
    color: string[][],
    prop: number[][],
    propArr: number[],
    BuriedPointScore: number[][],
    scoreInterval: number[],
    reviveScore: number[][],
    initBarrierlArr: number[],
    barrierlArrPosX: number[],
    reviveNum: number,
    MaxBigBall: number,
    Ballprop: number[][],
    myVideoMaxCount: number,
    videoAddPoint: number[],
    outOfRedAndCost: number[],
    MaxFirstGold: number,
    MaxSecondGold: number,
    giftTime: number,
    CollectCoins: number[],
    LevelCions: number[][],
    spinWeight: number[][],
    spinAward: object[],
    exp: object[],
    hurt: number,
    expDayCount: number,
    videoBaoXiang: number[],
    isDebug: Boolean,
    expSate: number,
    bxCredit: number,
    levelFormula: number[][];
    rainAwardMax: number,
    rainProbability: number,
    addProp: number,
}

interface Barrier {
    name: string, // 名字
    score: number,// 分数
    pos: cc.Vec2, // 坐标
    scale: number,// 大小
    angle: number,// 角度
    isRain: boolean,// 是否彩虹
}

interface Ball {
    hurt: number,
    scale: number,
}
