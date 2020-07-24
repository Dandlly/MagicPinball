import { GameConstant, GameEvents } from "../common/EventConstants";
import GameController from "../game/GameController";
import { user } from "../common/User";
import { actions } from "../common/Actions";
import { CacheFileNames, CacheKey, CACHE_CONFIG_PATH, cache } from "../common/Cache";
import FSidebar from "../FSidebar";
import FHideNode from "../FHideNode";
import { events } from "../common/Events";
import { AudioName } from "../common/AudioConstands";

const { ccclass, property } = cc._decorator;
/**
 * 作者:Dandlly
 */
@ccclass
export default class Loading extends cc.Component {
    @property(cc.Node)
    game: cc.Node = null;
    @property(cc.Node)
    main: cc.Node = null;
    @property(cc.Node)
    ui: cc.Node = null;
    @property(cc.Node)
    logoNode: cc.Node = null;

    @property(cc.Label)
    loadingLabel: cc.Label = null;
    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null

    @property(cc.Label)
    verLabel: cc.Label = null;

    @property(cc.SpriteFrame)
    icon: cc.SpriteFrame = null;

    @property(cc.Node)
    isBreakNode: cc.Node = null;

    private _updateTotal: number = 0;
    private _isReady: boolean = false;

    onLoad() {
        FLog.normal(this.node.parent.getComponentsInChildren(cc.Label));
        GameConstant.game = this.game.getComponent(GameController);
        actions.breatheEff(this.logoNode);
    }

    start() {
        try {
            setTimeout(()=>{
                FSDK.initSZSDK();
            },5000)
        } catch (error) {
            console.log(error);
        }
    }

    update() {
        // 加载页过三帧再执行逻辑
        if (this._updateTotal < 3) {
            this._updateTotal++;
            if (this._updateTotal === 3) {
                this.init();
            }
        }

        if (this.progressBar.progress >= 1 && this._isReady) {
            try {
                this._isReady = false;
                this.node.active = false;
                this.node.getComponent(FSidebar).init();
                this.isBreakNode.getComponent(FHideNode).init();
                if (user.getIsLoading() && user.serverData.login_days == 1 && user.serverData.login_cnt == 1) {
                    user.setIsLoading();
                    this.game.active = true;
                    FSDK.openBanner();
                    FSDK.umengEvent("Game_Loading", "1");
                } else {
                    this.main.active = true;
                }
            } catch (error) {
                FLog.normal(error);
            }

        }

        if (this.progressBar.progress >= 1) return;
        this.progressBar.progress += 0.01;
        this.loadingLabel.string = Math.floor(this.progressBar.progress * 100) + '%';
    }


    /**
     * 初始化
     */
    private async init(): Promise<void> {
        FSDK.setLog(false);

        // 初始化SKD 
        this.initSDK().then(() => {
            // 用户数据
            this.initUser();
        }).then(() => {
            this.initGameStauts();
        }).then(() => {
            // 开始游戏
            this.runGame();
        })
    }

    /**
      * 初始化SDK
      * (占据进度条百分之十进度)
      */
    private initSDK(): Promise<any> {
        return new Promise((resolve, reject) => {
            // 代号 acnball
            // 包名 com.toponegames.ball
            // 正服链接 wss://api.elswz.toponegames.cn:20212/?pg=acnball
            // 测服链接 wss://test.wps168.com:20212/?pg=acnball
            // key jCI61OzA3oAAbe3i
            // iv H6MNpakNEuD9LjNm
            let data = {
                ip_release: "wss://ausball.cc:20212/",						//socket正服地址 wss://xxxxx
                ip_debug: "wss://test.wps168.com:20212/?pg=ausball",							//socket测服地址 wss://xxxxx			
                pg: "com.yehappy.ball",										//包名com.xxx.xxx
                isDebug: false,						//是否连接测服
                // test_aid: "2392835726d32492",							//唯一id（测试用） 如果是在手机端，sdk会自己获取
                test_aid: "xvxcvsdfsfsefsf",							//唯一id（测试用） 如果是在手机端，sdk会自己获取
                code: "ausball",										//游戏代号
                tos_img: this.icon
            };
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                data.ip_release = "wss://ausball.cc:20212/",						//socket正服地址 wss://xxxxx
                    data.ip_debug = "wss://test.wps168.com:20212/?pg=ausball",							//socket测服地址 wss://xxxxx			
                    data.pg = "com.yehappy.ball",
                    data.code = "ausball"
            }
            if (cc.sys.isNative) {
                this.verLabel.string = `release v${FSDK.getVerInfo().ver}`;
            }
            FSDK.init(data, (_data) => {
                user.serverData = _data;
                FLog.normal('数据', _data);
                resolve();
            }, this);
        })
    }


    /**
     * 初始化用户信息
     */
    private initUser(): Promise<void> {
        return new Promise((resolve, reject) => {
            // 读取数据
            user.load();

            // 与服务器校正
            user.firstGold = user.serverData.credit_gp;
            user.secondGold = user.serverData.credit_pp;
            user.credit = user.serverData.credit;

            // 读取游戏配置
            user.setLumpData(user.serverData.ALL_CONF.gameData);

            FSDK.setTask(user.getLevel());

            user.setCurrentProp(0);

            if (user.getRainProbability() == 0) {
                user.setRainProbability(user.getLumpData().rainProbability);
            }

            // 红包配置判断
            for (let index = 0; index < user.getRecordBarrier().length; index++) {
                if (user.getRecordBarrier()[index].name === "bx") {
                    user.setIsRedAndCost(true);
                    break;
                } else {
                    user.setIsRedAndCost(false);
                }
            }


            // 数据隔天
            if (user.serverData.isNextDay) {
                user.setAwardNumber(0);
                user.setIsGetGift(false);// 获取红包
                user.setCollectCoins2(0);//金币第二阶段清0
                user.setExpDay(0);// 每日经验
                user.setSpinCount(0);
                user.setRainAwardNum(0);
            }

            // 数据隔天监听
            FSDK.setNextDayListen(() => {
                user.setAwardNumber(0);
                user.setIsGetGift(false);
                user.setCollectCoins2(0);
                user.setSpinCount(0);
                user.setExpDay(0);
                user.setRainAwardNum(0);
                user.save(1);
            }, this)


            user.save();
            user.save(1);
            resolve();
        })
    }

    /**
     * 初始化游戏状态（这里用来初始化对象池）
     */
    private initGameStauts(): Promise<void> {
        return new Promise((resolve, reject) => {
            GPool.init({ InitEach: { "ball": 50, "buffAddBall": 2, "buffBigBall": 2, "polygon1": 10, "polygon2": 10, "polygon3": 10, "polygon4": 10, "pp": 5, "gp": 5, "raindowCion": 100, "credit": 5, "star": 1, "bx": 5, "synthetic": 2 } })

            FSDK.setBtnSound(() => {
                events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
            })
            resolve();
        })
    }

    /**
     * 进入游戏
     */
    private runGame(): Promise<void> {
        return new Promise((resolve, reject) => {
            // cc.director.getCollisionManager().enabled = true;
            var manager = cc.director.getPhysicsManager();
            //启用物理世界
            manager.enabled = true;
            manager.enabledAccumulator = true;
            // cc.director.getPhysicsManager().debugDrawFlags = 1;
            this._isReady = true;
            resolve();
        })
    }

}
