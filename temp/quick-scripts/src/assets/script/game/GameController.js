"use strict";
cc._RF.push(module, 'b3d82RSe+pEz6WsoUjpl4eK', 'GameController');
// script/game/GameController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ball_1 = require("./Ball");
var Barrier_1 = require("./Barrier");
var EventConstants_1 = require("../common/EventConstants");
var Events_1 = require("../common/Events");
var PopupConstants_1 = require("../common/PopupConstants");
var User_1 = require("../common/User");
var Utils_1 = require("../common/Utils");
var AudioConstands_1 = require("../common/AudioConstands");
var Actions_1 = require("../common/Actions");
var Cion_1 = require("./Cion");
var AddBarrierPosY = -300;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefabBarriers = [];
        _this.prefabFunBarriers = [];
        // @property(cc.Prefab)
        // prefabRedAndCost: cc.Prefab[] = [];
        _this.prefabBall = null;
        _this.balls = [];
        _this.barriers = [];
        _this.ballCount = null;
        _this.guide = null; //开局指引 节点
        _this.gameStatus = true;
        _this.takeAim = null; //瞄准线 节点
        _this.ballParent = null; // 弹球父节点
        _this.barrierParent = null; // 障碍父节点
        _this.mPaomaNode = null; // 跑马灯节点
        _this.mAnimCions = null; // 金币节点
        _this.mCionsNode = null; // top货币节点
        _this.mStarUiNode = null; // Ui节点
        _this.levelLabel = null; // 当前等级
        _this.nextLevelLabel = null; // 下一等级
        _this.levelProgressBar = null;
        _this.numTw = null;
        _this.numTw1 = null;
        _this._upgradeExp = 0; // 所需经验
        _this.recordBall = [];
        _this.recordBarrier = [];
        _this.recycleBallsCount = 1;
        _this.barrierScoreRate = 0;
        _this.score = 0;
        _this.isGameOver = false;
        return _this;
    }
    GameController.prototype.onLoad = function () {
        //事件监听
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.UPDATALEVEL, this.updateLevel, this);
        // events.on(this.name, this.uuid, GameEvents.UPDATASCORE, this.rollHandler, this);
        this.openPm();
    };
    /**
    * 打开跑马灯
    */
    GameController.prototype.openPm = function () {
        FSDK.showMarQuee(this.mPaomaNode);
    };
    //初始化
    GameController.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var num, index, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (User_1.user.passGuide) {
                            num = User_1.user.getLumpData().reviveNum;
                            User_1.user.setCurrnetReviveNum(num);
                        }
                        for (index = 0; index < User_1.user.getRecordBarrier().length; index++) {
                            if (User_1.user.getRecordBarrier()[index].pos.y > 300) {
                                this.restartInit();
                                return [2 /*return*/];
                            }
                        }
                        if (!(User_1.user.getRecordBarrier().length > 0 && User_1.user.getRecordBall().length > 0)) return [3 /*break*/, 1];
                        this.guide.zIndex = 10;
                        this.guide.active = false;
                        this.initRecordBarrier();
                        this.initBalls();
                        this.gameStatus = true;
                        this.isGameOver = false;
                        this.setBallCount(User_1.user.getRecordBall().length);
                        this.recycleBallsCount = User_1.user.getRecordBall().length;
                        return [3 /*break*/, 5];
                    case 1:
                        this.startBall();
                        this.gameStatus = true;
                        this.score = 0; //计分牌
                        this.recycleBallsCount = 10; //收回小球数
                        this.barrierScoreRate = 0; //设置障碍物基准率
                        this.guide.zIndex = 10;
                        this.guide.active = false;
                        this.isGameOver = false;
                        this.setBallCount(this.balls.length);
                        User_1.user.setIsRain(false);
                        User_1.user.setRainProbability(User_1.user.getLumpData().rainProbability);
                        index = 0;
                        _a.label = 2;
                    case 2:
                        if (!(index < 3)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.addBarriers(index)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        index++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.updateLevel();
                        //显示游戏指引
                        this.guideShow();
                        return [2 /*return*/];
                }
            });
        });
    };
    //触摸开始时
    GameController.prototype.onTouchStart = function () {
        this.guideHide();
    };
    //触摸结束
    GameController.prototype.onTouchEnd = function (touch) {
        if (!this.isRecycleFinished()) {
            return;
        }
        if (EventConstants_1.GameConstant.isAward)
            return;
        var graphics = this.node.getChildByName("take-aim").getComponent(cc.Graphics);
        graphics.clear();
        this.recycleBallsCount = 0;
        var touchPos = this.node.convertToNodeSpaceAR(touch.getLocation());
        if (touchPos.y > 320) {
            touchPos = new cc.Vec2(touchPos.x, 320);
        }
        this.shootBalls(touchPos.sub(cc.v2(0, 390)));
    };
    /**
     * 初始化记录的障碍物
     */
    GameController.prototype.initRecordBarrier = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, barrier;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < User_1.user.getRecordBarrier().length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, GPool.get(User_1.user.getRecordBarrier()[i].name)];
                    case 2:
                        barrier = _a.sent();
                        barrier.parent = this.barrierParent;
                        barrier.position = User_1.user.getRecordBarrier()[i].pos;
                        barrier.angle = User_1.user.getRecordBarrier()[i].angle;
                        barrier.scale = User_1.user.getRecordBarrier()[i].scale;
                        if (User_1.user.getRecordBarrier()[i].name.indexOf("polygon") != -1) {
                            barrier.getComponent(Barrier_1.default).init(User_1.user.getRecordBarrier()[i].score, User_1.user.getRecordBarrier()[i].isRain);
                        }
                        else {
                            barrier.getComponent(Barrier_1.default).init(User_1.user.getRecordBarrier()[i].score);
                        }
                        this.barriers.push(barrier.getComponent(Barrier_1.default));
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 初始化球体
     */
    GameController.prototype.initBalls = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, ball;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < User_1.user.getRecordBall().length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, GPool.get('ball')];
                    case 2:
                        ball = _a.sent();
                        ball.parent = this.ballParent;
                        ball.position = cc.v2(0, 390);
                        ball.scale = User_1.user.getRecordBall()[i].scale;
                        ball.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
                        ball.getComponent(Ball_1.default).setHurt(User_1.user.getRecordBall()[i].hurt);
                        this.balls.push(ball.getComponent(Ball_1.default));
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.setRecordBalls();
                        return [2 /*return*/];
                }
            });
        });
    };
    //开始初始化
    GameController.prototype.startBall = function () {
        var _this = this;
        for (var index = 0; index < 10; index++) {
            GPool.get('ball').then(function (mNode) {
                mNode.parent = _this.ballParent;
                mNode.position = cc.v2(0, 390);
                mNode.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
                _this.balls.push(mNode.getComponent(Ball_1.default));
                _this.setBallCount(_this.balls.length);
            });
        }
        this.setRecordBalls();
    };
    // 新增小球
    GameController.prototype.addBall = function (pos) {
        return __awaiter(this, void 0, void 0, function () {
            var ball;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.POP); // 添加道具音效
                        return [4 /*yield*/, GPool.get(this.prefabBall.name)];
                    case 1:
                        ball = _a.sent();
                        ball.parent = this.ballParent;
                        ball.position = pos;
                        ball.getComponent(Ball_1.default).rigidBody.linearVelocity = cc.v2(500 * Math.random() < 0.5 ? -1 : 1, -1000);
                        ball.getComponent(Ball_1.default).rigidBody.gravityScale = 10;
                        this.balls.push(ball.getComponent(Ball_1.default));
                        this.setBallCount(this.balls.length);
                        this.setRecordBalls();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 新增障碍物
    GameController.prototype.addBarriers = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var startPosY, barrierNum, posX, initNum, getNum, initRedWeight, _mpoint, _mbxWeigt, isIntsRed, isInitProp, fiveIsProp, barrier, awardNum, i, _oldProp, weightPorp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startPosY = AddBarrierPosY;
                        // let endPosX = 250;
                        // let currentPosX = startPosX + this.getRandomSpace();
                        User_1.user.setCurrentLine();
                        User_1.user.setCurrentRenLine();
                        barrierNum = this.getInitBarrierRandom();
                        posX = this.backBarrierPosX(barrierNum);
                        initNum = 0;
                        // FLog.normal("数组", barrierNum, posX);
                        if (index) {
                            startPosY = AddBarrierPosY + 100 * index;
                        }
                        User_1.user.getAwardNumber() <= User_1.user.getLumpData().outOfRedAndCost[0] ? getNum = User_1.user.getLumpData().outOfRedAndCost[0] : getNum = User_1.user.getLumpData().outOfRedAndCost[1];
                        initRedWeight = Utils_1.utils.randomInt([1, 10]);
                        _mpoint = User_1.user.getLumpData().videoAddPoint;
                        _mbxWeigt = User_1.user.getLumpData().videoBaoXiang;
                        isIntsRed = false;
                        // 大于每日产出数 不在产出宝箱
                        if (User_1.user.getAwardNumber() >= _mpoint[_mpoint.length - 1]) {
                            isIntsRed = false;
                        }
                        isInitProp = false;
                        fiveIsProp = User_1.user.getCurrentLine() % User_1.user.getLumpData().addProp === 0;
                        _a.label = 1;
                    case 1:
                        if (!(initNum < barrierNum)) return [3 /*break*/, 13];
                        barrier = void 0;
                        awardNum = FSDK.getCard(0);
                        for (i = 0; i < _mpoint.length; i++) {
                            // 判断个数
                            if (User_1.user.getAwardNumber() <= _mpoint[i]) {
                                // 判断概率
                                if (initRedWeight <= _mbxWeigt[i]) {
                                    isIntsRed = true;
                                }
                                break;
                            }
                        }
                        if (!(User_1.user.serverData.isFlag && !User_1.user.serverData.isBlack
                            && !User_1.user.getIsRedAndCost()
                            && isIntsRed
                            && (awardNum.num > 0 || (User_1.user.getCurrentRedLine() != 0 && User_1.user.getCurrentRedLine() % getNum == 0)))) return [3 /*break*/, 3];
                        User_1.user.setIsRedAndCost(true);
                        User_1.user.save();
                        return [4 /*yield*/, GPool.get('bx')];
                    case 2:
                        // 实例化红包
                        barrier = _a.sent();
                        // 播放音效
                        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.DINGDONG);
                        User_1.user.setCurrentRenLine(0);
                        isIntsRed = false;
                        return [3 /*break*/, 12];
                    case 3:
                        if (!(fiveIsProp && !isInitProp
                            && (this.isAllBallBig() || this.balls.length < User_1.user.getLumpData().MaxBallCount)
                            && User_1.user.getCurrentProp() < 2)) return [3 /*break*/, 10];
                        _oldProp = User_1.user.getCurrentProp();
                        _oldProp += 1;
                        User_1.user.setCurrentProp(_oldProp);
                        isInitProp = true;
                        if (!(this.balls.length >= User_1.user.getLumpData().MaxBallCount)) return [3 /*break*/, 5];
                        return [4 /*yield*/, GPool.get("buffBigBall")];
                    case 4:
                        barrier = _a.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!!this.isAllBallBig()) return [3 /*break*/, 7];
                        return [4 /*yield*/, GPool.get("buffAddBall")];
                    case 6:
                        barrier = _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        weightPorp = Utils_1.utils.randomInt([0, 1]);
                        return [4 /*yield*/, GPool.get(this.prefabFunBarriers[weightPorp].name)];
                    case 8:
                        barrier = _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10: return [4 /*yield*/, GPool.get(this.prefabBarriers[Math.floor(Math.random() *
                            this.prefabBarriers.length)].name)];
                    case 11:
                        barrier = _a.sent();
                        _a.label = 12;
                    case 12:
                        this.barrierParent.addChild(barrier);
                        barrier.position = cc.v2(posX[initNum], startPosY);
                        barrier.getComponent(Barrier_1.default).init();
                        this.barriers.push(barrier.getComponent(Barrier_1.default));
                        initNum++;
                        return [3 /*break*/, 1];
                    case 13:
                        // 检测彩虹
                        this.isAddRaindow(startPosY);
                        this.isBarrierPos();
                        this.setRecordBarriers();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 小球变大
    GameController.prototype.bigBall = function (node) {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.POP); // 添加道具音效
        node.scale = User_1.user.getLumpData().MaxBigBall;
        // node.color = cc.color().fromHEX("#FF0000");
        node.getComponent(Ball_1.default).setHurt(2);
    };
    //显示小球总数
    GameController.prototype.setBallCount = function (num) {
        this.ballCount.string = num.toString();
    };
    //连续发射小球
    GameController.prototype.shootBalls = function (dir) {
        var _this = this;
        if (!this.gameStatus) {
            return;
        }
        EventConstants_1.GameConstant.isShoot = true;
        var _loop_1 = function (i) {
            var ball = this_1.balls[i];
            this_1.scheduleOnce(function () {
                _this.shootBall(ball, dir);
            }, i * 0.1);
        };
        var this_1 = this;
        for (var i = 0; i < this.balls.length; i++) {
            _loop_1(i);
        }
    };
    //发射单个小球
    GameController.prototype.shootBall = function (ball, dir) {
        ball.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
        ball.rigidBody.active = false;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.CRASH); // 添加射击音效
        ball.rigidBody.active = true;
        var angle = Math.atan2(dir.y, dir.x) / Math.PI * 180;
        var toX = Math.cos(angle * 0.017453293) * 100;
        var toY = Math.sin(angle * 0.017453293) * 100;
        ball.rigidBody.linearVelocity = cc.v2(toX * 20, toY * 20);
    };
    //收回小球，上移一排障碍物
    GameController.prototype.recycleBall = function () {
        this.recycleBallsCount++;
        this.barrierScoreRate += 0.1;
        if (this.isRecycleFinished()) {
            for (var i = 0; i < this.barriers.length; i++) {
                var barrier = this.barriers[i];
                if (this.barriers[i].getScore() == 0 && barrier.node.name === 'bx') {
                    Events_1.events.emit(EventConstants_1.GameEvents.OPENVDIEO, this.barriers[i], 0);
                    return;
                }
            }
            this.moveBarriesr();
        }
    };
    GameController.prototype.moveBarriesr = function () {
        var _this = this;
        var _loop_2 = function (i) {
            var barrier = this_2.barriers[i];
            cc.tween(barrier.node)
                .by(0.1, { position: cc.v2(0, 100) })
                .call(function () {
                _this.setRecordBarriers();
                if (barrier.node.position.y > 200) {
                    if (User_1.user.IsShake) {
                        FSDK.shake(50);
                    }
                    // 抖动
                    barrier.node.runAction(cc.shake(1.5, 5, 5));
                }
                if (barrier.node.position.y >= 390) {
                    if (barrier.node.name == "buffAddBall" || barrier.node.name == "buffBigBall") {
                        _this.removeBarrier(barrier);
                        var _oldProp = User_1.user.getCurrentProp();
                        _oldProp -= 1;
                        User_1.user.setCurrentProp(_oldProp);
                    }
                    else {
                        _this.gameOver();
                    }
                }
            })
                .start();
        };
        var this_2 = this;
        for (var i = 0; i < this.barriers.length; i++) {
            _loop_2(i);
        }
        this.isBarrierPos();
        this.setRecordBalls();
        this.scheduleOnce(function () {
            _this.addBarriers();
        }, .2);
        EventConstants_1.GameConstant.isShoot = false;
    };
    GameController.prototype.isVideoAddBarriers = function () {
        var _this = this;
        var _loop_3 = function (i) {
            var barrier = this_3.barriers[i];
            cc.tween(barrier.node)
                .by(0.1, { position: cc.v2(0, 100) })
                .call(function () {
                if (barrier.node.position.y > 200) {
                    if (User_1.user.IsShake) {
                        FSDK.shake(50);
                    }
                    // 抖动
                    barrier.node.runAction(cc.shake(1.5, 5, 5));
                }
                if (barrier.node.position.y >= 390) {
                    if (barrier.node.name == "buffAddBall" || barrier.node.name == "buffBigBall") {
                        _this.removeBarrier(barrier);
                        var _oldProp = User_1.user.getCurrentProp();
                        _oldProp -= 1;
                        User_1.user.setCurrentProp(_oldProp);
                    }
                    else {
                        _this.gameOver();
                    }
                }
            })
                .start();
        };
        var this_3 = this;
        for (var i = 0; i < this.barriers.length; i++) {
            _loop_3(i);
        }
        this.isBarrierPos();
        this.setRecordBalls();
        this.scheduleOnce(function () {
            _this.addBarriers();
        }, .2);
        EventConstants_1.GameConstant.isShoot = false;
    };
    /**
     * 判断所在有在场的节点
     */
    GameController.prototype.isBarrierPos = function () {
        for (var index = 0; index < this.barriers.length; index++) {
            if (this.barriers[index].node.position.x < -260 && this.barriers[index].node.position.x > 260 || this.barriers[index].node.position.y < AddBarrierPosY) {
                if (this.barriers[index].node.name == "bx") {
                    User_1.user.setIsRedAndCost(false);
                }
                // 不知道啥原因出界了
                this.removeBarrier(this.barriers[index]);
            }
        }
    };
    //游戏结束
    GameController.prototype.gameOver = function () {
        if (this.isGameOver)
            return;
        this.isGameOver = true;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.SETTLEMENT); // 添加结算音效
        this.gameStatus = false;
        var data = this.score.toString();
        FLog.normal("游戏结算");
        Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.GAMEOVER, null, data);
    };
    //小球是否收回完毕
    GameController.prototype.isRecycleFinished = function () {
        return this.recycleBallsCount == this.balls.length;
    };
    //抖动障碍物
    GameController.prototype.shake = function (barrier) {
        if (barrier.getNumberOfRunningActions() > 0)
            return;
        if (User_1.user.IsShake) {
            FSDK.shake(30);
        }
        var shake = cc.shake(0.1, 5, 5);
        barrier.runAction(shake);
    };
    //计分牌显示
    GameController.prototype.addScore = function (score) {
        score *= User_1.user.getLumpData().expSate;
        var exp = User_1.user.getExp();
        exp += score;
        User_1.user.setExp(exp);
        var expDay = User_1.user.getExpDay();
        expDay += score;
        User_1.user.setExpDay(expDay);
        this.updateLevel();
    };
    //设置障碍物自身分数值(海外现在改为按照等级)
    GameController.prototype.setBarrierScore = function () {
        var min = Math.floor((Math.pow(User_1.user.getCurrentLine(), User_1.user.getLumpData().levelFormula[0][0])) * User_1.user.getLumpData().levelFormula[0][1] + User_1.user.getLumpData().levelFormula[0][2]);
        var max = Math.floor((Math.pow(User_1.user.getCurrentLine(), User_1.user.getLumpData().levelFormula[1][0])) * User_1.user.getLumpData().levelFormula[1][1] + User_1.user.getLumpData().levelFormula[1][2]);
        var _score = Utils_1.utils.randomInt(min, max);
        return _score;
    };
    //消除障碍物
    GameController.prototype.removeBarrier = function (barrier, isResurgence) {
        if (isResurgence === void 0) { isResurgence = false; }
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.ELIMINATE); // 添加消除音效
        var idx = this.barriers.indexOf(barrier);
        if (barrier.node.name != "buffAddBall" && barrier.node.name != "buffBigBall" && barrier.node.name != "bx") {
            if (barrier.node.getChildByName('IrisAnim').active) {
                barrier.node.getChildByName('IrisAnim').active = false;
                if (!isResurgence) {
                    console.log("222222222222222");
                    //  金币特效
                    this.piaoBigCoin();
                    FSDK.setCredit('credit', 50, "Brick");
                    FSDK.showToast("Congratulations on receiving " + 50 + " gold coins");
                }
                User_1.user.setIsRain(false);
                User_1.user.setRainProbability(User_1.user.getLumpData().rainProbability);
            }
            else if (!isResurgence) {
                this.getCoin(barrier.node.position);
            }
        }
        if (idx != -1) {
            GPool.put(barrier.node);
            this.barriers.splice(idx, 1);
            User_1.user.setDeleteBarriersNum(); // 计算销毁个数
            this.setRecordBarriers();
        }
    };
    /**
     * 获取金币
     */
    GameController.prototype.getCoin = function (pos) {
        // 金币产出
        // 本地金币少于10000 
        var level = -1;
        level = FSDK.getCreditDif();
        var awardNum = Utils_1.utils.randomInt(User_1.user.getLumpData().LevelCions[level]);
        if (awardNum === 0)
            return;
        if (User_1.user.getCollectCoins() < User_1.user.getLumpData().CollectCoins[0]) {
            // 小于10000金币
            this.animCion(awardNum, 2, true, pos);
            FSDK.setCredit('credit', awardNum, "Brick");
            var old = User_1.user.getCollectCoins();
            old += awardNum;
            User_1.user.setCollectCoins(old);
        }
        else if (User_1.user.getCollectCoins2() < User_1.user.getLumpData().CollectCoins[1]) {
            // 每日产出2000
            this.animCion(awardNum, 2, true, pos);
            FSDK.setCredit('credit', awardNum, "Brick");
            var old = User_1.user.getCollectCoins2();
            old += awardNum;
            User_1.user.setCollectCoins2(old);
        }
    };
    //获取随机距离，用于生成障碍物的间距
    GameController.prototype.getRandomSpace = function () {
        return 100 + Math.random() * 150;
    };
    //获取区间随机值
    GameController.prototype.randomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.floor(Rand * Range);
        return num;
    };
    //显示引导动画
    GameController.prototype.guideShow = function () {
        this.guide.active = true;
        var handMove = this.guide.getChildByName('handMove');
        var animCtrl = handMove.getComponent(cc.Animation);
        animCtrl.play('handMove');
    };
    /**
     * 关闭引导动画
     */
    GameController.prototype.guideHide = function () {
        this.guide.active = false;
        var handMove = this.guide.getChildByName('handMove');
        var animCtrl = handMove.getComponent(cc.Animation);
        animCtrl.stop('handMove');
    };
    // 重新开始
    GameController.prototype.restartInit = function () {
        this.score = 0; //计分牌
        this.recycleBallsCount = 10; //收回小球数
        this.barrierScoreRate = 0; //设置障碍物基准率
        this.guide.zIndex = 10;
        this.guide.active = false;
        User_1.user.setCurrentProp(0);
        User_1.user.setIsRedAndCost(false);
        User_1.user.setCurrentLine(0);
        User_1.user.setIsRain(false);
        User_1.user.setRainProbability(User_1.user.getLumpData().rainProbability);
        User_1.user.save();
        this.balls = [];
        this.ballParent.removeAllChildren();
        this.barriers = [];
        this.barrierParent.removeAllChildren();
        this.setBallCount(this.balls.length);
        this.startBall();
        for (var index = 0; index < 3; index++) {
            this.addBarriers(index);
        }
        //显示游戏指引
        this.guideShow();
        this.gameStatus = true;
        this.isGameOver = false;
    };
    /**
     * 复活（减去上面3行）
     */
    GameController.prototype.resurgence = function () {
        for (var index = 0; index < this.barriers.length; index++) {
            var barrier = this.barriers[0];
            if (barrier.node.position.y >= 0) {
                if (barrier.node.name == "buffAddBall" || barrier.node.name == "buffBigBall") {
                    var propNum = User_1.user.getCurrentProp();
                    propNum -= 1;
                    User_1.user.setCurrentProp(propNum);
                }
                else if (barrier.node.name == "bx") {
                    User_1.user.setIsRedAndCost(false);
                }
                else if (barrier.node.getChildByName('IrisAnim').active) {
                    User_1.user.setIsRain(false);
                    User_1.user.setRainProbability(User_1.user.getLumpData().rainProbability);
                }
                this.removeBarrier(barrier, true);
            }
        }
        User_1.user.save();
        this.guide.zIndex = 10;
        this.guide.active = false;
        //显示游戏指引
        this.guideShow();
        this.gameStatus = true;
        this.isGameOver = false;
    };
    /**
     * 判断是否全部为大球
     */
    GameController.prototype.isAllBallBig = function () {
        var num = 0;
        var isOne = true;
        for (var index = 0; index < this.balls.length; index++) {
            var ball = this.balls[index];
            if (ball.getHurt() == 2) {
                num++;
                this.setRecordBalls();
            }
        }
        for (var i = 0; i < this.barriers.length; i++) {
            if (this.barriers[i].node.name == "buffBigBall") {
                isOne = false;
            }
        }
        if ((!isOne && num == this.balls.length - 1) || num === this.balls.length) {
            return false;
        }
        return true;
    };
    /**
     * 记录障碍物到数据
     */
    GameController.prototype.setRecordBarriers = function () {
        var barrierData = [];
        for (var index = 0; index < this.barriers.length; index++) {
            var barrier = this.barriers[index];
            var _data = {
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
        User_1.user.setRecordBarrier(barrierData);
        User_1.user.save();
    };
    /**
     * 记录球到数据
     */
    GameController.prototype.setRecordBalls = function () {
        var ballData = [];
        for (var index = 0; index < this.balls.length; index++) {
            var ball = this.balls[index];
            var _data = {
                hurt: ball.getHurt(),
                scale: ball.node.scale
            };
            ballData.push(_data);
        }
        User_1.user.setRecordBall(ballData);
        User_1.user.save();
    };
    /**
     * 障碍物实例化数量
     */
    GameController.prototype.getInitBarrierRandom = function () {
        return Utils_1.utils.randomInt(User_1.user.getLumpData().initBarrierlArr);
    };
    /**
     * 随机返回一个坐标
     */
    GameController.prototype.backBarrierPosX = function (num) {
        var posX_Arr = User_1.user.getLumpData().barrierlArrPosX.concat();
        var _pox = posX_Arr;
        var rePox = [];
        for (var i = 0; i < num; i++) {
            var _posX = Utils_1.utils.randomInt(0, _pox.length - 1);
            rePox.push(_pox[_posX]);
            _pox.splice(_posX, 1);
        }
        return rePox;
    };
    /**
     * 货币动画
     * @param num 数量
     * @param type 0=gp 1=pp 2=金币
     */
    GameController.prototype.animCion = function (num, type, isOne, statrPos) {
        if (isOne === void 0) { isOne = true; }
        if (statrPos === void 0) { statrPos = cc.v2(); }
        return __awaiter(this, void 0, void 0, function () {
            var coin, name, cb, index, index;
            return __generator(this, function (_a) {
                coin = this.mCionsNode.children[type];
                if (type == 0)
                    name = "gp";
                if (type == 1)
                    name = "pp";
                if (type == 2)
                    name = "credit";
                if (!name)
                    return [2 /*return*/];
                cb = function () {
                    Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.CION);
                };
                if (type == 2 && isOne) {
                    for (index = 0; index < num; index++) {
                        Actions_1.actions.addCionMove(this.mAnimCions, name, cc.v2(), coin.position.add(coin.getChildByName(name).position), cb, num - index == 1);
                    }
                }
                else {
                    for (index = 0; index < 10; index++) {
                        Actions_1.actions.addCionMove(this.mAnimCions, name, statrPos, coin.position.add(coin.getChildByName(name).position), cb, 10 - index == 1);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 球的伤害计算
     */
    GameController.prototype.hurtState = function () {
        var hurt = 1;
        if (hurt != User_1.user.getLumpData().expDayCount) {
            hurt = User_1.user.getLumpData().hurt;
        }
        return hurt;
    };
    /**
     * 更新游戏里面的等级
     */
    GameController.prototype.updateLevel = function () {
        var level = User_1.user.getLevel();
        var expData = User_1.user.getLumpData().exp[level - 1];
        this._upgradeExp = expData.exp;
        var exp = User_1.user.getExp();
        if (exp >= this._upgradeExp) {
            level++;
            User_1.user.setLevel(level);
            // 埋点
            var _data = FSDK.getUserType(); // 返回新老用户
            if (_data == 'new') {
                // 返回当前等级
                FSDK.umengEvent('GAME_LV_NEW', "" + level);
            }
            // 无论新老用户都返回
            FSDK.umengEvent('GAME_LV_ALL', "" + level);
            exp = exp - this._upgradeExp;
            User_1.user.setExp(exp);
            User_1.user.save();
        }
        this.levelBar();
        this.levelLabel.string = "" + User_1.user.getLevel();
        this.nextLevelLabel.string = "" + (User_1.user.getLevel() + 1);
    };
    /**等级滚动 */
    GameController.prototype.levelBar = function () {
        if (this.numTw) {
            this.numTw.stop();
        }
        this.numTw = cc.tween(this)
            .to(.2, { levellab: Number(User_1.user.getExp() / this._upgradeExp) })
            .start();
    };
    Object.defineProperty(GameController.prototype, "levellab", {
        get: function () {
            return Number(this.levelProgressBar.progress);
        },
        set: function (text) {
            this.levelProgressBar.progress = text;
            if (this.levelProgressBar.progress >= 1) {
                this.levelProgressBar.progress = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 彩虹动画
     */
    GameController.prototype.rainAnim = function (barrier) {
        return __awaiter(this, void 0, void 0, function () {
            var anim;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 播放音效
                        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.DINGDONG);
                        return [4 /*yield*/, GPool.get('synthetic')];
                    case 1:
                        anim = _a.sent();
                        anim.parent = this.mAnimCions;
                        anim.position = barrier.position;
                        anim.scale = barrier.scale;
                        anim.getComponent(cc.Animation).play();
                        barrier.getChildByName("rainbow").active = true;
                        barrier.getChildByName('IrisAnim').active = true; // 光圈
                        this.setRecordBarriers();
                        this.scheduleOnce(function () {
                            GPool.put(anim);
                        }, 0.75);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameController.prototype.piaoBigCoin = function (coinnum, pos) {
        return __awaiter(this, void 0, void 0, function () {
            var allnum, i, coins;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allnum = 100;
                        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BIGWINGOLD);
                        if (coinnum) {
                            allnum = coinnum;
                        }
                        // actions.rockAction(this.node);
                        if (User_1.user.IsShake) {
                            FSDK.shake(100);
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < allnum)) return [3 /*break*/, 4];
                        return [4 /*yield*/, GPool.get('raindowCion')];
                    case 2:
                        coins = _a.sent();
                        coins.parent = this.mAnimCions;
                        coins.scale = 0.5;
                        if (pos) {
                            coins.position = pos;
                        }
                        else {
                            coins.setPosition(0, 0);
                        }
                        coins.rotation = Math.random() * 360;
                        coins.getComponent(Cion_1.default).coinBigJump();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 是否生成彩虹
     * @param startPosY
     */
    GameController.prototype.isAddRaindow = function (startPosY) {
        // 判断是否生成彩虹方块
        if (User_1.user.getRainAwardNum() <= User_1.user.getLumpData().rainAwardMax && !User_1.user.getIsRain()) {
            var line = User_1.user.getCurrentLine();
            var initRaindow = false;
            var barrierArr = [];
            if (line == 3) {
                for (var i = 0; i < this.barriers.length; i++) {
                    if (this.barriers[i].node.name.indexOf("polygon") != -1 && this.barriers[i].node.position.y == startPosY) {
                        barrierArr.push(this.barriers[i].score);
                    }
                }
                var bigNum = Math.max.apply(this, barrierArr);
                for (var k = 0; k < this.barriers.length; k++) {
                    if (this.barriers[k].node.name.indexOf("polygon") != -1 && this.barriers[k].node.position.y == startPosY) {
                        if (this.barriers[k].score == bigNum) {
                            this.rainAnim(this.barriers[k].node);
                            User_1.user.setIsRain(true);
                            User_1.user.setRainProbability(User_1.user.getLumpData().rainProbability);
                            break;
                        }
                    }
                }
            }
            else if (line > 2) {
                // 计算概率
                var probability = User_1.user.getRainProbability();
                if (Math.random() <= probability) {
                    initRaindow = true;
                }
                else {
                    probability += 0.1;
                    User_1.user.setRainProbability(probability);
                }
                if (initRaindow) {
                    for (var i = 0; i < this.barriers.length; i++) {
                        if (this.barriers[i].node.name.indexOf("polygon") != -1) {
                            barrierArr.push(this.barriers[i].score);
                        }
                    }
                    var bigNum = Math.max.apply(this, barrierArr);
                    for (var k = 0; k < this.barriers.length; k++) {
                        if (this.barriers[k].node.name.indexOf("polygon") != -1) {
                            if (this.barriers[k].score == bigNum) {
                                this.rainAnim(this.barriers[k].node);
                                User_1.user.setIsRain(true);
                                User_1.user.setRainProbability(User_1.user.getLumpData().rainProbability);
                                break;
                            }
                        }
                    }
                }
            }
            ;
            // user.save();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "prefabBarriers", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "prefabFunBarriers", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "prefabBall", void 0);
    __decorate([
        property(Ball_1.default)
    ], GameController.prototype, "balls", void 0);
    __decorate([
        property(Barrier_1.default)
    ], GameController.prototype, "barriers", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "ballCount", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "guide", void 0);
    __decorate([
        property()
    ], GameController.prototype, "gameStatus", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "takeAim", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "ballParent", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "barrierParent", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "mPaomaNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "mAnimCions", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "mCionsNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "mStarUiNode", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "nextLevelLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameController.prototype, "levelProgressBar", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

cc._RF.pop();