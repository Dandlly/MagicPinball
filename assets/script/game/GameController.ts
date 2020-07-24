import Ball from "./Ball";
import Barrier from "./Barrier";
import { GameEvents, GameConstant } from "../common/EventConstants";
import { events } from "../common/Events";
import { PopUpName } from "../common/PopupConstants";
import { user } from "../common/User";
import { utils } from "../common/Utils";
import { AudioName } from "../common/AudioConstands";
import { actions } from "../common/Actions";
import Cion from "./Cion";

interface Barriers {
    name: string, // 名字
    score: number,// 分数
    pos: cc.Vec2, // 坐标
    scale: number,// 大小
    angle: number,// 角度
    isRain: boolean,// 是否彩虹
}

interface Balls {
    hurt: number,
    scale: number,
}
const AddBarrierPosY: number = -300;
const { ccclass, property } = cc._decorator;
/**
 * 作者:Dandlly
 */
@ccclass
export default class GameController extends cc.Component {
    @property(cc.Prefab)
    prefabBarriers: cc.Prefab[] = [];
    @property(cc.Prefab)
    prefabFunBarriers: cc.Prefab[] = [];
    // @property(cc.Prefab)
    // prefabRedAndCost: cc.Prefab[] = [];
    @property(cc.Prefab)
    prefabBall: cc.Prefab = null;
    @property(Ball)
    balls: Ball[] = [];
    @property(Barrier)
    barriers: Barrier[] = [];
    @property(cc.Label)
    ballCount: cc.Label = null;
    @property(cc.Node)
    guide: cc.Node = null; //开局指引 节点
    @property()
    gameStatus: boolean = true;
    @property(cc.Node)
    takeAim: cc.Node = null //瞄准线 节点

    @property(cc.Node)
    ballParent: cc.Node = null;// 弹球父节点

    @property(cc.Node)
    barrierParent: cc.Node = null;// 障碍父节点

    @property(cc.Node)
    mPaomaNode: cc.Node = null;// 跑马灯节点

    @property(cc.Node)
    mAnimCions: cc.Node = null;// 金币节点

    @property(cc.Node)
    mCionsNode: cc.Node = null;// top货币节点

    @property(cc.Node)
    mStarUiNode: cc.Node = null;// Ui节点

    @property(cc.Label)
    levelLabel: cc.Label = null; // 当前等级

    @property(cc.Label)
    nextLevelLabel: cc.Label = null;// 下一等级

    @property(cc.ProgressBar)
    levelProgressBar: cc.ProgressBar = null;

    private numTw: cc.Tween<any> = null;
    private numTw1: cc.Tween<any> = null;
    private _upgradeExp: number = 0;    // 所需经验

    recordBall: Balls[] = [];
    recordBarrier: Barriers[] = [];

    recycleBallsCount: number = 1;
    barrierScoreRate: number = 0;
    score: number = 0;
    isGameOver: boolean = false;

    onLoad() {
        //事件监听
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        events.on(this.name, this.uuid, GameEvents.UPDATALEVEL, this.updateLevel, this);
        // events.on(this.name, this.uuid, GameEvents.UPDATASCORE, this.rollHandler, this);
        this.openPm();
    }

    /**
    * 打开跑马灯
    */
    public openPm(): void {
        FSDK.showMarQuee(this.mPaomaNode);
    }

    //初始化
    async init() {
        if (user.passGuide) {
            let num = user.getLumpData().reviveNum;
            user.setCurrnetReviveNum(num);
        }
        for (let index = 0; index < user.getRecordBarrier().length; index++) {
            if (user.getRecordBarrier()[index].pos.y > 300) {
                this.restartInit();
                return;
            }
        }
        if (user.getRecordBarrier().length > 0 && user.getRecordBall().length > 0) {
            this.guide.zIndex = 10;
            this.guide.active = false;
            this.initRecordBarrier();
            this.initBalls();
            this.gameStatus = true;
            this.isGameOver = false;
            this.setBallCount(user.getRecordBall().length);
            this.recycleBallsCount = user.getRecordBall().length;
        } else {
            this.startBall();
            this.gameStatus = true;
            this.score = 0; //计分牌
            this.recycleBallsCount = 10; //收回小球数
            this.barrierScoreRate = 0; //设置障碍物基准率
            this.guide.zIndex = 10;
            this.guide.active = false;
            this.isGameOver = false;
            this.setBallCount(this.balls.length);
            user.setIsRain(false);
            user.setRainProbability(user.getLumpData().rainProbability);
            for (let index = 0; index < 3; index++) {
                await this.addBarriers(index);
            }
        }
        this.updateLevel();
        //显示游戏指引
        this.guideShow();
    }

    //触摸开始时
    onTouchStart() {
        this.guideHide();
    }

    //触摸结束
    onTouchEnd(touch) {
        if (!this.isRecycleFinished()) {
            return;
        }
        if (GameConstant.isAward) return;
        let graphics = this.node.getChildByName("take-aim").getComponent(cc.Graphics);
        graphics.clear();
        this.recycleBallsCount = 0;
        let touchPos: cc.Vec2 = this.node.convertToNodeSpaceAR(touch.getLocation());

        if (touchPos.y > 320) {
            touchPos = new cc.Vec2(touchPos.x, 320);
        }

        this.shootBalls(touchPos.sub(cc.v2(0, 390)));
    }

    /**
     * 初始化记录的障碍物
     */
    async initRecordBarrier() {
        for (let i = 0; i < user.getRecordBarrier().length; i++) {
            let barrier = await GPool.get(user.getRecordBarrier()[i].name);
            barrier.parent = this.barrierParent;
            barrier.position = user.getRecordBarrier()[i].pos;
            barrier.angle = user.getRecordBarrier()[i].angle;
            barrier.scale = user.getRecordBarrier()[i].scale;
            if (user.getRecordBarrier()[i].name.indexOf("polygon") != -1) {
                barrier.getComponent(Barrier).init(user.getRecordBarrier()[i].score, user.getRecordBarrier()[i].isRain);
            } else {
                barrier.getComponent(Barrier).init(user.getRecordBarrier()[i].score)
            }
            this.barriers.push(barrier.getComponent(Barrier));
        }
    }

    /**
     * 初始化球体
     */
    async initBalls() {
        for (let i = 0; i < user.getRecordBall().length; i++) {
            let ball = await GPool.get('ball');
            ball.parent = this.ballParent;
            ball.position = cc.v2(0, 390);
            ball.scale = user.getRecordBall()[i].scale;
            ball.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
            ball.getComponent(Ball).setHurt(user.getRecordBall()[i].hurt);
            this.balls.push(ball.getComponent(Ball));
            // if (user.getRecordBall()[i].hurt == 1) {
            //     this.node.color = cc.color().fromHEX("#FFFFFF");
            // } else {
            //     this.node.color = cc.color().fromHEX("#FF0000");
            // }
        }
        this.setRecordBalls();
    }

    //开始初始化
    startBall() {
        for (let index = 0; index < 10; index++) {
            GPool.get('ball').then((mNode: cc.Node) => {
                mNode.parent = this.ballParent;
                mNode.position = cc.v2(0, 390);
                mNode.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
                this.balls.push(mNode.getComponent(Ball));
                this.setBallCount(this.balls.length);
            })
        }
        this.setRecordBalls();
    }

    // 新增小球
    async addBall(pos: cc.Vec2) {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.POP);// 添加道具音效
        let ball = await GPool.get(this.prefabBall.name);
        ball.parent = this.ballParent;
        ball.position = pos;
        ball.getComponent(Ball).rigidBody.linearVelocity = cc.v2(500 * Math.random() < 0.5 ? -1 : 1, -1000);
        ball.getComponent(Ball).rigidBody.gravityScale = 10;
        this.balls.push(ball.getComponent(Ball));
        this.setBallCount(this.balls.length);
        this.setRecordBalls();
    }

    // 新增障碍物
    async addBarriers(index?: number) {
        // let startPosX = -250;
        let startPosY = AddBarrierPosY;
        // let endPosX = 250;
        // let currentPosX = startPosX + this.getRandomSpace();
        user.setCurrentLine();
        user.setCurrentRenLine();

        let barrierNum = this.getInitBarrierRandom();// 实例化个数
        let posX = this.backBarrierPosX(barrierNum);
        let initNum = 0;
        // FLog.normal("数组", barrierNum, posX);
        if (index) {
            startPosY = AddBarrierPosY + 100 * index;
        }
        // 红包
        let getNum: number;
        user.getAwardNumber() <= user.getLumpData().outOfRedAndCost[0] ? getNum = user.getLumpData().outOfRedAndCost[0] : getNum = user.getLumpData().outOfRedAndCost[1];


        let initRedWeight = utils.randomInt([1, 10]);// 实例化红包的几率
        let _mpoint = user.getLumpData().videoAddPoint;// 宝箱后台个数概率
        let _mbxWeigt = user.getLumpData().videoBaoXiang;// 宝箱后台概率
        let isIntsRed: boolean = false;



        // 大于每日产出数 不在产出宝箱
        if (user.getAwardNumber() >= _mpoint[_mpoint.length - 1]) {
            isIntsRed = false;
        }

        //道具权重
        let isInitProp = false; // 是否已经改行实例化道具了

        // 每5行必定随机一个道具出来
        let fiveIsProp: any = user.getCurrentLine() % user.getLumpData().addProp === 0;

        while (initNum < barrierNum) {
            let barrier;
            let awardNum: any = FSDK.getCard(0);

            for (let i = 0; i < _mpoint.length; i++) {
                // 判断个数
                if (user.getAwardNumber() <= _mpoint[i]) {
                    // 判断概率
                    if (initRedWeight <= _mbxWeigt[i]) {
                        isIntsRed = true;
                    }
                    break;
                }
            }

            if (user.serverData.isFlag && !user.serverData.isBlack
                && !user.getIsRedAndCost()
                && isIntsRed
                && (awardNum.num > 0 || (user.getCurrentRedLine() != 0 && user.getCurrentRedLine() % getNum == 0))) {
                user.setIsRedAndCost(true);
                user.save();
                // 实例化红包
                barrier = await GPool.get('bx');
                // 播放音效
                events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.DINGDONG);
                user.setCurrentRenLine(0);
                isIntsRed = false;
            } else if (fiveIsProp && !isInitProp
                && (this.isAllBallBig() || this.balls.length < user.getLumpData().MaxBallCount)
                && user.getCurrentProp() < 2) {

                let _oldProp = user.getCurrentProp();
                _oldProp += 1;
                user.setCurrentProp(_oldProp);
                isInitProp = true;
                if (this.balls.length >= user.getLumpData().MaxBallCount) {
                    barrier = await GPool.get("buffBigBall");
                } else if (!this.isAllBallBig()) {
                    barrier = await GPool.get("buffAddBall");
                } else {
                    let weightPorp = utils.randomInt([0, 1]);
                    barrier = await GPool.get(this.prefabFunBarriers[weightPorp].name);
                }
            } else {
                barrier = await GPool.get(this.prefabBarriers[Math.floor(Math.random() *
                    this.prefabBarriers.length)].name);
            }
            this.barrierParent.addChild(barrier)
            barrier.position = cc.v2(posX[initNum], startPosY);
            barrier.getComponent(Barrier).init();
            this.barriers.push(barrier.getComponent(Barrier));
            initNum++;
        }

        // 检测彩虹
        this.isAddRaindow(startPosY);

        this.isBarrierPos();
        this.setRecordBarriers();
    }

    // 小球变大
    bigBall(node: cc.Node) {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.POP);// 添加道具音效
        node.scale = user.getLumpData().MaxBigBall;
        // node.color = cc.color().fromHEX("#FF0000");
        node.getComponent(Ball).setHurt(2);
    }

    //显示小球总数
    setBallCount(num: number) {
        this.ballCount.string = num.toString();
    }

    //连续发射小球
    shootBalls(dir) {
        if (!this.gameStatus) {
            return;
        }
        GameConstant.isShoot = true;
        for (let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i];

            this.scheduleOnce(() => {
                this.shootBall(ball, dir);
            }, i * 0.1)
        }
    }

    //发射单个小球
    shootBall(ball: Ball, dir) {
        ball.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
        ball.rigidBody.active = false;
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.CRASH);// 添加射击音效
        ball.rigidBody.active = true;
        var angle = Math.atan2(dir.y, dir.x) / Math.PI * 180;
        var toX = Math.cos(angle * 0.017453293) * 100;
        var toY = Math.sin(angle * 0.017453293) * 100;
        ball.rigidBody.linearVelocity = cc.v2(toX * 20, toY * 20);
    }

    //收回小球，上移一排障碍物
    recycleBall() {
        this.recycleBallsCount++;
        this.barrierScoreRate += 0.1;

        if (this.isRecycleFinished()) {
            for (let i = 0; i < this.barriers.length; i++) {
                let barrier = this.barriers[i];
                if (this.barriers[i].getScore() == 0 && barrier.node.name === 'bx') {
                    events.emit(GameEvents.OPENVDIEO, this.barriers[i], 0);
                    return;
                }
            }
            this.moveBarriesr();
        }
    }

    moveBarriesr() {
        for (let i = 0; i < this.barriers.length; i++) {
            let barrier = this.barriers[i];
            cc.tween(barrier.node)
                .by(0.1, { position: cc.v2(0, 100) })
                .call(() => {
                    this.setRecordBarriers();
                    if (barrier.node.position.y > 200) {
                        if (user.IsShake) {
                            FSDK.shake(50);
                        }
                        // 抖动
                        barrier.node.runAction(cc.shake(1.5, 5, 5));
                    }
                    if (barrier.node.position.y >= 390) {
                        if (barrier.node.name == "buffAddBall" || barrier.node.name == "buffBigBall") {
                            this.removeBarrier(barrier);
                            let _oldProp = user.getCurrentProp();
                            _oldProp -= 1;
                            user.setCurrentProp(_oldProp);
                        } else {
                            this.gameOver();
                        }
                    }
                })
                .start()
        }
        this.isBarrierPos();
        this.setRecordBalls();
        this.scheduleOnce(() => {
            this.addBarriers();
        }, .2)
        GameConstant.isShoot = false;
    }

    isVideoAddBarriers() {
        for (let i = 0; i < this.barriers.length; i++) {
            let barrier = this.barriers[i];
            cc.tween(barrier.node)
                .by(0.1, { position: cc.v2(0, 100) })
                .call(() => {
                    if (barrier.node.position.y > 200) {
                        if (user.IsShake) {
                            FSDK.shake(50);
                        }
                        // 抖动
                        barrier.node.runAction(cc.shake(1.5, 5, 5));
                    }
                    if (barrier.node.position.y >= 390) {
                        if (barrier.node.name == "buffAddBall" || barrier.node.name == "buffBigBall") {
                            this.removeBarrier(barrier);
                            let _oldProp = user.getCurrentProp();
                            _oldProp -= 1;
                            user.setCurrentProp(_oldProp);
                        } else {
                            this.gameOver();
                        }
                    }
                })
                .start()
        }
        this.isBarrierPos();
        this.setRecordBalls();
        this.scheduleOnce(() => {
            this.addBarriers();
        }, .2)
        GameConstant.isShoot = false;
    }

    /**
     * 判断所在有在场的节点
     */
    public isBarrierPos() {
        for (let index = 0; index < this.barriers.length; index++) {
            if (this.barriers[index].node.position.x < -260 && this.barriers[index].node.position.x > 260 || this.barriers[index].node.position.y < AddBarrierPosY) {
                if (this.barriers[index].node.name == "bx") {
                    user.setIsRedAndCost(false);
                }
                // 不知道啥原因出界了
                this.removeBarrier(this.barriers[index]);
            }
        }
    }

    //游戏结束
    gameOver() {
        if (this.isGameOver) return;
        this.isGameOver = true;
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.SETTLEMENT);// 添加结算音效
        this.gameStatus = false;
        let data = this.score.toString();
        FLog.normal("游戏结算");
        events.emit(GameEvents.SHOW_POPUP, PopUpName.GAMEOVER, null, data);

    }

    //小球是否收回完毕
    isRecycleFinished() {
        return this.recycleBallsCount == this.balls.length;
    }

    //抖动障碍物
    shake(barrier: cc.Node) {
        if (barrier.getNumberOfRunningActions() > 0) return;
        if (user.IsShake) {
            FSDK.shake(30);
        }
        let shake = cc.shake(0.1, 5, 5);
        barrier.runAction(shake);
    }

    //计分牌显示
    addScore(score: number) {
        score *= user.getLumpData().expSate;

        let exp = user.getExp();
        exp += score;
        user.setExp(exp);

        let expDay = user.getExpDay();
        expDay += score;
        user.setExpDay(expDay)

        this.updateLevel();
    }

    //设置障碍物自身分数值(海外现在改为按照等级)
    setBarrierScore() {
        let min = Math.floor((user.getCurrentLine() ** user.getLumpData().levelFormula[0][0]) * user.getLumpData().levelFormula[0][1] + user.getLumpData().levelFormula[0][2]);
        let max = Math.floor((user.getCurrentLine() ** user.getLumpData().levelFormula[1][0]) * user.getLumpData().levelFormula[1][1] + user.getLumpData().levelFormula[1][2]);

        let _score: number = utils.randomInt(min, max);
        return _score;
    }

    //消除障碍物
    removeBarrier(barrier, isResurgence: boolean = false) {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.ELIMINATE);// 添加消除音效
        let idx = this.barriers.indexOf(barrier);
        if (barrier.node.name != "buffAddBall" && barrier.node.name != "buffBigBall" && barrier.node.name != "bx") {
            if (barrier.node.getChildByName('IrisAnim').active) {
                barrier.node.getChildByName('IrisAnim').active = false;
                if (!isResurgence) {
                    console.log("222222222222222");
                    //  金币特效
                    this.piaoBigCoin()
                    FSDK.setCredit('credit', 50, "Brick");
                    FSDK.showToast(`Congratulations on receiving ${50} gold coins`);
                }
                user.setIsRain(false);
                user.setRainProbability(user.getLumpData().rainProbability);
            } else if (!isResurgence) {
                this.getCoin(barrier.node.position);
            }
        }

        if (idx != -1) {
            GPool.put(barrier.node);
            this.barriers.splice(idx, 1);
            user.setDeleteBarriersNum();// 计算销毁个数
            this.setRecordBarriers();
        }
    }

    /**
     * 获取金币
     */
    public getCoin(pos) {
        // 金币产出
        // 本地金币少于10000 
        let level = -1;
        level = FSDK.getCreditDif();
        let awardNum = utils.randomInt(user.getLumpData().LevelCions[level]);

        if (awardNum === 0) return;
        if (user.getCollectCoins() < user.getLumpData().CollectCoins[0]) {
            // 小于10000金币
            this.animCion(awardNum, 2, true, pos);
            FSDK.setCredit('credit', awardNum, "Brick");

            let old = user.getCollectCoins();
            old += awardNum;
            user.setCollectCoins(old);
        } else if (user.getCollectCoins2() < user.getLumpData().CollectCoins[1]) {
            // 每日产出2000
            this.animCion(awardNum, 2, true, pos);
            FSDK.setCredit('credit', awardNum, "Brick");

            let old = user.getCollectCoins2();
            old += awardNum;
            user.setCollectCoins2(old);
        }
    }


    //获取随机距离，用于生成障碍物的间距
    getRandomSpace() {
        return 100 + Math.random() * 150;
    }

    //获取区间随机值
    randomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.floor(Rand * Range);
        return num;
    }

    //显示引导动画
    guideShow() {
        this.guide.active = true;
        let handMove = this.guide.getChildByName('handMove');
        let animCtrl = handMove.getComponent(cc.Animation);
        animCtrl.play('handMove');
    }

    /**
     * 关闭引导动画
     */
    guideHide() {
        this.guide.active = false;
        let handMove = this.guide.getChildByName('handMove');
        let animCtrl = handMove.getComponent(cc.Animation);
        animCtrl.stop('handMove');
    }

    // 重新开始
    restartInit() {
        this.score = 0; //计分牌
        this.recycleBallsCount = 10; //收回小球数
        this.barrierScoreRate = 0; //设置障碍物基准率
        this.guide.zIndex = 10;
        this.guide.active = false;

        user.setCurrentProp(0);
        user.setIsRedAndCost(false);
        user.setCurrentLine(0);

        user.setIsRain(false);
        user.setRainProbability(user.getLumpData().rainProbability);
        user.save();
        this.balls = [];
        this.ballParent.removeAllChildren();

        this.barriers = [];
        this.barrierParent.removeAllChildren();
        this.setBallCount(this.balls.length);
        this.startBall();
        for (let index = 0; index < 3; index++) {
            this.addBarriers(index);
        }
        //显示游戏指引
        this.guideShow();
        this.gameStatus = true;
        this.isGameOver = false;
    }

    /**
     * 复活（减去上面3行）
     */
    resurgence() {
        for (let index = 0; index < this.barriers.length; index++) {
            let barrier = this.barriers[0];
            if (barrier.node.position.y >= 0) {
                if (barrier.node.name == "buffAddBall" || barrier.node.name == "buffBigBall") {
                    let propNum = user.getCurrentProp();
                    propNum -= 1;
                    user.setCurrentProp(propNum);
                } else if (barrier.node.name == "bx") {
                    user.setIsRedAndCost(false);
                } else if (barrier.node.getChildByName('IrisAnim').active) {
                    user.setIsRain(false);
                    user.setRainProbability(user.getLumpData().rainProbability);
                }
                this.removeBarrier(barrier, true);
            }
        }
        user.save();
        this.guide.zIndex = 10;
        this.guide.active = false;
        //显示游戏指引
        this.guideShow();
        this.gameStatus = true;
        this.isGameOver = false;
    }

    /**
     * 判断是否全部为大球
     */
    isAllBallBig() {
        let num = 0;
        let isOne = true;
        for (let index = 0; index < this.balls.length; index++) {
            let ball = this.balls[index];
            if (ball.getHurt() == 2) {
                num++;
                this.setRecordBalls();
            }
        }
        for (let i = 0; i < this.barriers.length; i++) {
            if (this.barriers[i].node.name == "buffBigBall") {
                isOne = false;
            }
        }
        if ((!isOne && num == this.balls.length - 1) || num === this.balls.length) {
            return false;
        }
        return true
    }

    /**
     * 记录障碍物到数据
     */
    public setRecordBarriers() {
        let barrierData: Barriers[] = [];
        for (let index = 0; index < this.barriers.length; index++) {
            let barrier = this.barriers[index];
            let _data: Barriers = {
                name: barrier.node.name,
                pos: barrier.node.position,
                scale: barrier.node.scale,
                angle: barrier.node.angle,
                score: barrier.getScore(),
                isRain: false
            };
            if (barrier.node.name.indexOf("polygon") != -1) {
                _data.isRain = barrier.node.getChildByName('IrisAnim').active;
            }
            barrierData.push(_data);
        }
        user.setRecordBarrier(barrierData);
        user.save();
    }

    /**
     * 记录球到数据
     */
    public setRecordBalls() {
        let ballData: Balls[] = [];
        for (let index = 0; index < this.balls.length; index++) {
            let ball = this.balls[index];
            let _data: Balls = {
                hurt: ball.getHurt(),
                scale: ball.node.scale
            };
            ballData.push(_data);
        }
        user.setRecordBall(ballData);
        user.save();
    }

    /**
     * 障碍物实例化数量
     */
    public getInitBarrierRandom(): number {
        return utils.randomInt(user.getLumpData().initBarrierlArr);
    }

    /**
     * 随机返回一个坐标
     */
    public backBarrierPosX(num) {
        let posX_Arr: number[] = user.getLumpData().barrierlArrPosX.concat();
        let _pox = posX_Arr;
        let rePox = [];
        for (let i = 0; i < num; i++) {
            let _posX = utils.randomInt(0, _pox.length - 1);
            rePox.push(_pox[_posX]);
            _pox.splice(_posX, 1);
        }
        return rePox;
    }

    /**
     * 货币动画
     * @param num 数量 
     * @param type 0=gp 1=pp 2=金币
     */
    public async animCion(num: number, type: number, isOne: boolean = true, statrPos: cc.Vec2 = cc.v2()) {
        let coin = this.mCionsNode.children[type];
        let name;
        if (type == 0) name = "gp";
        if (type == 1) name = "pp";
        if (type == 2) name = "credit";
        if (!name) return;

        let cb = () => {
            events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.CION);
        }

        if (type == 2 && isOne) {
            for (let index = 0; index < num; index++) {
                actions.addCionMove(this.mAnimCions, name, cc.v2(), coin.position.add(coin.getChildByName(name).position), cb, num - index == 1);
            }
        } else {
            for (let index = 0; index < 10; index++) {
                actions.addCionMove(this.mAnimCions, name, statrPos, coin.position.add(coin.getChildByName(name).position), cb, 10 - index == 1);
            }
        }
    }

    /**
     * 球的伤害计算
     */
    public hurtState(): number {
        let hurt = 1;
        if (hurt != user.getLumpData().expDayCount) {
            hurt = user.getLumpData().hurt;
        }
        return hurt;
    }

    /**
     * 更新游戏里面的等级
     */
    public updateLevel() {
        let level = user.getLevel();

        let expData: any = user.getLumpData().exp[level - 1];
        this._upgradeExp = expData.exp;

        let exp = user.getExp();

        if (exp >= this._upgradeExp) {
            level++;
            user.setLevel(level);

            // 埋点
            let _data = FSDK.getUserType();// 返回新老用户
            if (_data == 'new') {
                // 返回当前等级
                FSDK.umengEvent('GAME_LV_NEW', `${level}`);
            }
            // 无论新老用户都返回
            FSDK.umengEvent('GAME_LV_ALL', `${level}`);

            exp = exp - this._upgradeExp;
            user.setExp(exp);
            user.save();
        }

        this.levelBar();

        this.levelLabel.string = `${user.getLevel()}`;
        this.nextLevelLabel.string = `${user.getLevel() + 1}`;
    }

    /**等级滚动 */
    levelBar() {
        if (this.numTw) {
            this.numTw.stop();
        }
        this.numTw = cc.tween(this)
            .to(.2, { levellab: Number(user.getExp() / this._upgradeExp) })
            .start();
    }
    get levellab(): number {
        return Number(this.levelProgressBar.progress);
    }
    set levellab(text: number) {
        this.levelProgressBar.progress = text;
        if (this.levelProgressBar.progress >= 1) {
            this.levelProgressBar.progress = 0;
        }
    }

    /**
     * 彩虹动画
     */
    public async rainAnim(barrier: cc.Node) {
        // 播放音效
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.DINGDONG);


        let anim = await GPool.get('synthetic');
        anim.parent = this.mAnimCions;
        anim.position = barrier.position;
        anim.scale = barrier.scale;
        anim.getComponent(cc.Animation).play();

        barrier.getChildByName("rainbow").active = true;
        barrier.getChildByName('IrisAnim').active = true; // 光圈
        this.setRecordBarriers();
        this.scheduleOnce(() => {
            GPool.put(anim);
        }, 0.75);
    }

    async piaoBigCoin(coinnum?, pos?) {
        let allnum = 100;

        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BIGWINGOLD);

        if (coinnum) {
            allnum = coinnum;
        }

        // actions.rockAction(this.node);



        if (user.IsShake) {
            FSDK.shake(100);
        }

        for (let i = 0; i < allnum; i++) {
            let coins = await GPool.get('raindowCion');
            coins.parent = this.mAnimCions;
            coins.scale = 0.5;
            if (pos) {
                coins.position = pos;
            } else {
                coins.setPosition(0, 0)
            }

            coins.rotation = Math.random() * 360;
            coins.getComponent(Cion).coinBigJump();
        }

    }

    /**
     * 是否生成彩虹
     * @param startPosY 
     */
    public isAddRaindow(startPosY) {
        // 判断是否生成彩虹方块
        if (user.getRainAwardNum() <= user.getLumpData().rainAwardMax && !user.getIsRain()) {
            let line = user.getCurrentLine();
            let initRaindow = false;

            let barrierArr = [];
            if (line == 3) {
                for (let i = 0; i < this.barriers.length; i++) {
                    if (this.barriers[i].node.name.indexOf("polygon") != -1 && this.barriers[i].node.position.y == startPosY) {
                        barrierArr.push(this.barriers[i].score);
                    }
                }
                let bigNum = Math.max.apply(this, barrierArr);
                for (let k = 0; k < this.barriers.length; k++) {
                    if (this.barriers[k].node.name.indexOf("polygon") != -1 && this.barriers[k].node.position.y == startPosY) {
                        if (this.barriers[k].score == bigNum) {
                            this.rainAnim(this.barriers[k].node);
                            user.setIsRain(true);
                            user.setRainProbability(user.getLumpData().rainProbability);
                            break;
                        }
                    }
                }
            } else if (line > 2) {
                // 计算概率
                let probability = user.getRainProbability();
                if (Math.random() <= probability) {
                    initRaindow = true;
                } else {
                    probability += 0.1;
                    user.setRainProbability(probability);
                }

                if (initRaindow) {
                    for (let i = 0; i < this.barriers.length; i++) {
                        if (this.barriers[i].node.name.indexOf("polygon") != -1) {
                            barrierArr.push(this.barriers[i].score);
                        }
                    }

                    let bigNum = Math.max.apply(this, barrierArr);

                    for (let k = 0; k < this.barriers.length; k++) {
                        if (this.barriers[k].node.name.indexOf("polygon") != -1) {
                            if (this.barriers[k].score == bigNum) {
                                this.rainAnim(this.barriers[k].node);
                                user.setIsRain(true);
                                user.setRainProbability(user.getLumpData().rainProbability);
                                break;
                            }
                        }
                    }
                }
            };
            // user.save();

        }
    }

}

