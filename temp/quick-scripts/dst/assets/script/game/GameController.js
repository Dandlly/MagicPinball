
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUMxQixxQ0FBZ0M7QUFDaEMsMkRBQW9FO0FBQ3BFLDJDQUEwQztBQUMxQywyREFBcUQ7QUFDckQsdUNBQXNDO0FBQ3RDLHlDQUF3QztBQUN4QywyREFBcUQ7QUFDckQsNkNBQTRDO0FBQzVDLCtCQUEwQjtBQWUxQixJQUFNLGNBQWMsR0FBVyxDQUFDLEdBQUcsQ0FBQztBQUM5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOztHQUVHO0FBRUg7SUFBNEMsa0NBQVk7SUFEeEQ7UUFBQSxxRUF3N0JDO1FBcjdCRyxvQkFBYyxHQUFnQixFQUFFLENBQUM7UUFFakMsdUJBQWlCLEdBQWdCLEVBQUUsQ0FBQztRQUNwQyx1QkFBdUI7UUFDdkIsc0NBQXNDO1FBRXRDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUMsQ0FBQyxTQUFTO1FBRWhDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUEsQ0FBQyxRQUFRO1FBR2hDLGdCQUFVLEdBQVksSUFBSSxDQUFDLENBQUEsUUFBUTtRQUduQyxtQkFBYSxHQUFZLElBQUksQ0FBQyxDQUFBLFFBQVE7UUFHdEMsZ0JBQVUsR0FBWSxJQUFJLENBQUMsQ0FBQSxRQUFRO1FBR25DLGdCQUFVLEdBQVksSUFBSSxDQUFDLENBQUEsT0FBTztRQUdsQyxnQkFBVSxHQUFZLElBQUksQ0FBQyxDQUFBLFVBQVU7UUFHckMs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Q0FBQztzREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ2E7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0REFDZTtJQS9DdkIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXU3QmxDO0lBQUQscUJBQUM7Q0F2N0JELEFBdTdCQyxDQXY3QjJDLEVBQUUsQ0FBQyxTQUFTLEdBdTdCdkQ7a0JBdjdCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IEJhcnJpZXIgZnJvbSBcIi4vQmFycmllclwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnRzLCBHYW1lQ29uc3RhbnQgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRzXCI7XHJcbmltcG9ydCB7IFBvcFVwTmFtZSB9IGZyb20gXCIuLi9jb21tb24vUG9wdXBDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9jb21tb24vVXNlclwiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi9jb21tb24vVXRpbHNcIjtcclxuaW1wb3J0IHsgQXVkaW9OYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9BdWRpb0NvbnN0YW5kc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSBcIi4uL2NvbW1vbi9BY3Rpb25zXCI7XHJcbmltcG9ydCBDaW9uIGZyb20gXCIuL0Npb25cIjtcclxuXHJcbmludGVyZmFjZSBCYXJyaWVycyB7XHJcbiAgICBuYW1lOiBzdHJpbmcsIC8vIOWQjeWtl1xyXG4gICAgc2NvcmU6IG51bWJlciwvLyDliIbmlbBcclxuICAgIHBvczogY2MuVmVjMiwgLy8g5Z2Q5qCHXHJcbiAgICBzY2FsZTogbnVtYmVyLC8vIOWkp+Wwj1xyXG4gICAgYW5nbGU6IG51bWJlciwvLyDop5LluqZcclxuICAgIGlzUmFpbjogYm9vbGVhbiwvLyDmmK/lkKblvanomblcclxufVxyXG5cclxuaW50ZXJmYWNlIEJhbGxzIHtcclxuICAgIGh1cnQ6IG51bWJlcixcclxuICAgIHNjYWxlOiBudW1iZXIsXHJcbn1cclxuY29uc3QgQWRkQmFycmllclBvc1k6IG51bWJlciA9IC0zMDA7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiDkvZzogIU6RGFuZGxseVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZWZhYkJhcnJpZXJzOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZWZhYkZ1bkJhcnJpZXJzOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vIHByZWZhYlJlZEFuZENvc3Q6IGNjLlByZWZhYltdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiQmFsbDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShCYWxsKVxyXG4gICAgYmFsbHM6IEJhbGxbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KEJhcnJpZXIpXHJcbiAgICBiYXJyaWVyczogQmFycmllcltdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBiYWxsQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3VpZGU6IGNjLk5vZGUgPSBudWxsOyAvL+W8gOWxgOaMh+W8lSDoioLngrlcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBnYW1lU3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGFrZUFpbTogY2MuTm9kZSA9IG51bGwgLy/nnoTlh4bnur8g6IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWxsUGFyZW50OiBjYy5Ob2RlID0gbnVsbDsvLyDlvLnnkIPniLboioLngrlcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhcnJpZXJQYXJlbnQ6IGNjLk5vZGUgPSBudWxsOy8vIOmanOeijeeItuiKgueCuVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVBhb21hTm9kZTogY2MuTm9kZSA9IG51bGw7Ly8g6LeR6ams54Gv6IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtQW5pbUNpb25zOiBjYy5Ob2RlID0gbnVsbDsvLyDph5HluIHoioLngrlcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1DaW9uc05vZGU6IGNjLk5vZGUgPSBudWxsOy8vIHRvcOi0p+W4geiKgueCuVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVN0YXJVaU5vZGU6IGNjLk5vZGUgPSBudWxsOy8vIFVp6IqC54K5XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsOyAvLyDlvZPliY3nrYnnuqdcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuZXh0TGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsOy8vIOS4i+S4gOetiee6p1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIGxldmVsUHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG51bVR3OiBjYy5Ud2Vlbjxhbnk+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgbnVtVHcxOiBjYy5Ud2Vlbjxhbnk+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3VwZ3JhZGVFeHA6IG51bWJlciA9IDA7ICAgIC8vIOaJgOmcgOe7j+mqjFxyXG5cclxuICAgIHJlY29yZEJhbGw6IEJhbGxzW10gPSBbXTtcclxuICAgIHJlY29yZEJhcnJpZXI6IEJhcnJpZXJzW10gPSBbXTtcclxuXHJcbiAgICByZWN5Y2xlQmFsbHNDb3VudDogbnVtYmVyID0gMTtcclxuICAgIGJhcnJpZXJTY29yZVJhdGU6IG51bWJlciA9IDA7XHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuICAgIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy/kuovku7bnm5HlkKxcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIGV2ZW50cy5vbih0aGlzLm5hbWUsIHRoaXMudXVpZCwgR2FtZUV2ZW50cy5VUERBVEFMRVZFTCwgdGhpcy51cGRhdGVMZXZlbCwgdGhpcyk7XHJcbiAgICAgICAgLy8gZXZlbnRzLm9uKHRoaXMubmFtZSwgdGhpcy51dWlkLCBHYW1lRXZlbnRzLlVQREFUQVNDT1JFLCB0aGlzLnJvbGxIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5QbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDmiZPlvIDot5Hpqaznga9cclxuICAgICovXHJcbiAgICBwdWJsaWMgb3BlblBtKCk6IHZvaWQge1xyXG4gICAgICAgIEZTREsuc2hvd01hclF1ZWUodGhpcy5tUGFvbWFOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMllxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBpZiAodXNlci5wYXNzR3VpZGUpIHtcclxuICAgICAgICAgICAgbGV0IG51bSA9IHVzZXIuZ2V0THVtcERhdGEoKS5yZXZpdmVOdW07XHJcbiAgICAgICAgICAgIHVzZXIuc2V0Q3Vycm5ldFJldml2ZU51bShudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdXNlci5nZXRSZWNvcmRCYXJyaWVyKCkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLmdldFJlY29yZEJhcnJpZXIoKVtpbmRleF0ucG9zLnkgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydEluaXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5nZXRSZWNvcmRCYXJyaWVyKCkubGVuZ3RoID4gMCAmJiB1c2VyLmdldFJlY29yZEJhbGwoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUuekluZGV4ID0gMTA7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlY29yZEJhcnJpZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0QmFsbHMoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmFsbENvdW50KHVzZXIuZ2V0UmVjb3JkQmFsbCgpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVjeWNsZUJhbGxzQ291bnQgPSB1c2VyLmdldFJlY29yZEJhbGwoKS5sZW5ndGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJhbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7IC8v6K6h5YiG54mMXHJcbiAgICAgICAgICAgIHRoaXMucmVjeWNsZUJhbGxzQ291bnQgPSAxMDsgLy/mlLblm57lsI/nkIPmlbBcclxuICAgICAgICAgICAgdGhpcy5iYXJyaWVyU2NvcmVSYXRlID0gMDsgLy/orr7nva7pmpznoo3nianln7rlh4bnjodcclxuICAgICAgICAgICAgdGhpcy5ndWlkZS56SW5kZXggPSAxMDtcclxuICAgICAgICAgICAgdGhpcy5ndWlkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmFsbENvdW50KHRoaXMuYmFsbHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdXNlci5zZXRJc1JhaW4oZmFsc2UpO1xyXG4gICAgICAgICAgICB1c2VyLnNldFJhaW5Qcm9iYWJpbGl0eSh1c2VyLmdldEx1bXBEYXRhKCkucmFpblByb2JhYmlsaXR5KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkQmFycmllcnMoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAvL+aYvuekuua4uOaIj+aMh+W8lVxyXG4gICAgICAgIHRoaXMuZ3VpZGVTaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/op6bmkbjlvIDlp4vml7ZcclxuICAgIG9uVG91Y2hTdGFydCgpIHtcclxuICAgICAgICB0aGlzLmd1aWRlSGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6Kem5pG457uT5p2fXHJcbiAgICBvblRvdWNoRW5kKHRvdWNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVjeWNsZUZpbmlzaGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoR2FtZUNvbnN0YW50LmlzQXdhcmQpIHJldHVybjtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0YWtlLWFpbVwiKS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlQmFsbHNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdWNoUG9zOiBjYy5WZWMyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG5cclxuICAgICAgICBpZiAodG91Y2hQb3MueSA+IDMyMCkge1xyXG4gICAgICAgICAgICB0b3VjaFBvcyA9IG5ldyBjYy5WZWMyKHRvdWNoUG9zLngsIDMyMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob290QmFsbHModG91Y2hQb3Muc3ViKGNjLnYyKDAsIDM5MCkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluiusOW9leeahOmanOeijeeJqVxyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0UmVjb3JkQmFycmllcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXIuZ2V0UmVjb3JkQmFycmllcigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXJyaWVyID0gYXdhaXQgR1Bvb2wuZ2V0KHVzZXIuZ2V0UmVjb3JkQmFycmllcigpW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICBiYXJyaWVyLnBhcmVudCA9IHRoaXMuYmFycmllclBhcmVudDtcclxuICAgICAgICAgICAgYmFycmllci5wb3NpdGlvbiA9IHVzZXIuZ2V0UmVjb3JkQmFycmllcigpW2ldLnBvcztcclxuICAgICAgICAgICAgYmFycmllci5hbmdsZSA9IHVzZXIuZ2V0UmVjb3JkQmFycmllcigpW2ldLmFuZ2xlO1xyXG4gICAgICAgICAgICBiYXJyaWVyLnNjYWxlID0gdXNlci5nZXRSZWNvcmRCYXJyaWVyKClbaV0uc2NhbGU7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLmdldFJlY29yZEJhcnJpZXIoKVtpXS5uYW1lLmluZGV4T2YoXCJwb2x5Z29uXCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBiYXJyaWVyLmdldENvbXBvbmVudChCYXJyaWVyKS5pbml0KHVzZXIuZ2V0UmVjb3JkQmFycmllcigpW2ldLnNjb3JlLCB1c2VyLmdldFJlY29yZEJhcnJpZXIoKVtpXS5pc1JhaW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFycmllci5nZXRDb21wb25lbnQoQmFycmllcikuaW5pdCh1c2VyLmdldFJlY29yZEJhcnJpZXIoKVtpXS5zY29yZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJhcnJpZXJzLnB1c2goYmFycmllci5nZXRDb21wb25lbnQoQmFycmllcikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlueQg+S9k1xyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0QmFsbHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyLmdldFJlY29yZEJhbGwoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFsbCA9IGF3YWl0IEdQb29sLmdldCgnYmFsbCcpO1xyXG4gICAgICAgICAgICBiYWxsLnBhcmVudCA9IHRoaXMuYmFsbFBhcmVudDtcclxuICAgICAgICAgICAgYmFsbC5wb3NpdGlvbiA9IGNjLnYyKDAsIDM5MCk7XHJcbiAgICAgICAgICAgIGJhbGwuc2NhbGUgPSB1c2VyLmdldFJlY29yZEJhbGwoKVtpXS5zY2FsZTtcclxuICAgICAgICAgICAgYmFsbC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgICAgIGJhbGwuZ2V0Q29tcG9uZW50KEJhbGwpLnNldEh1cnQodXNlci5nZXRSZWNvcmRCYWxsKClbaV0uaHVydCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbHMucHVzaChiYWxsLmdldENvbXBvbmVudChCYWxsKSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh1c2VyLmdldFJlY29yZEJhbGwoKVtpXS5odXJ0ID09IDEpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoXCIjRkYwMDAwXCIpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UmVjb3JkQmFsbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W8gOWni+WIneWni+WMllxyXG4gICAgc3RhcnRCYWxsKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBHUG9vbC5nZXQoJ2JhbGwnKS50aGVuKChtTm9kZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbU5vZGUucGFyZW50ID0gdGhpcy5iYWxsUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbU5vZGUucG9zaXRpb24gPSBjYy52MigwLCAzOTApO1xyXG4gICAgICAgICAgICAgICAgbU5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxscy5wdXNoKG1Ob2RlLmdldENvbXBvbmVudChCYWxsKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJhbGxDb3VudCh0aGlzLmJhbGxzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UmVjb3JkQmFsbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmlrDlop7lsI/nkINcclxuICAgIGFzeW5jIGFkZEJhbGwocG9zOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLlBPUCk7Ly8g5re75Yqg6YGT5YW36Z+z5pWIXHJcbiAgICAgICAgbGV0IGJhbGwgPSBhd2FpdCBHUG9vbC5nZXQodGhpcy5wcmVmYWJCYWxsLm5hbWUpO1xyXG4gICAgICAgIGJhbGwucGFyZW50ID0gdGhpcy5iYWxsUGFyZW50O1xyXG4gICAgICAgIGJhbGwucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgYmFsbC5nZXRDb21wb25lbnQoQmFsbCkucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoNTAwICogTWF0aC5yYW5kb20oKSA8IDAuNSA/IC0xIDogMSwgLTEwMDApO1xyXG4gICAgICAgIGJhbGwuZ2V0Q29tcG9uZW50KEJhbGwpLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAxMDtcclxuICAgICAgICB0aGlzLmJhbGxzLnB1c2goYmFsbC5nZXRDb21wb25lbnQoQmFsbCkpO1xyXG4gICAgICAgIHRoaXMuc2V0QmFsbENvdW50KHRoaXMuYmFsbHMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnNldFJlY29yZEJhbGxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5paw5aKe6Zqc56KN54mpXHJcbiAgICBhc3luYyBhZGRCYXJyaWVycyhpbmRleD86IG51bWJlcikge1xyXG4gICAgICAgIC8vIGxldCBzdGFydFBvc1ggPSAtMjUwO1xyXG4gICAgICAgIGxldCBzdGFydFBvc1kgPSBBZGRCYXJyaWVyUG9zWTtcclxuICAgICAgICAvLyBsZXQgZW5kUG9zWCA9IDI1MDtcclxuICAgICAgICAvLyBsZXQgY3VycmVudFBvc1ggPSBzdGFydFBvc1ggKyB0aGlzLmdldFJhbmRvbVNwYWNlKCk7XHJcbiAgICAgICAgdXNlci5zZXRDdXJyZW50TGluZSgpO1xyXG4gICAgICAgIHVzZXIuc2V0Q3VycmVudFJlbkxpbmUoKTtcclxuXHJcbiAgICAgICAgbGV0IGJhcnJpZXJOdW0gPSB0aGlzLmdldEluaXRCYXJyaWVyUmFuZG9tKCk7Ly8g5a6e5L6L5YyW5Liq5pWwXHJcbiAgICAgICAgbGV0IHBvc1ggPSB0aGlzLmJhY2tCYXJyaWVyUG9zWChiYXJyaWVyTnVtKTtcclxuICAgICAgICBsZXQgaW5pdE51bSA9IDA7XHJcbiAgICAgICAgLy8gRkxvZy5ub3JtYWwoXCLmlbDnu4RcIiwgYmFycmllck51bSwgcG9zWCk7XHJcbiAgICAgICAgaWYgKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UG9zWSA9IEFkZEJhcnJpZXJQb3NZICsgMTAwICogaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOe6ouWMhVxyXG4gICAgICAgIGxldCBnZXROdW06IG51bWJlcjtcclxuICAgICAgICB1c2VyLmdldEF3YXJkTnVtYmVyKCkgPD0gdXNlci5nZXRMdW1wRGF0YSgpLm91dE9mUmVkQW5kQ29zdFswXSA/IGdldE51bSA9IHVzZXIuZ2V0THVtcERhdGEoKS5vdXRPZlJlZEFuZENvc3RbMF0gOiBnZXROdW0gPSB1c2VyLmdldEx1bXBEYXRhKCkub3V0T2ZSZWRBbmRDb3N0WzFdO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGluaXRSZWRXZWlnaHQgPSB1dGlscy5yYW5kb21JbnQoWzEsIDEwXSk7Ly8g5a6e5L6L5YyW57qi5YyF55qE5Yeg546HXHJcbiAgICAgICAgbGV0IF9tcG9pbnQgPSB1c2VyLmdldEx1bXBEYXRhKCkudmlkZW9BZGRQb2ludDsvLyDlrp3nrrHlkI7lj7DkuKrmlbDmpoLnjodcclxuICAgICAgICBsZXQgX21ieFdlaWd0ID0gdXNlci5nZXRMdW1wRGF0YSgpLnZpZGVvQmFvWGlhbmc7Ly8g5a6d566x5ZCO5Y+w5qaC546HXHJcbiAgICAgICAgbGV0IGlzSW50c1JlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIOWkp+S6juavj+aXpeS6p+WHuuaVsCDkuI3lnKjkuqflh7rlrp3nrrFcclxuICAgICAgICBpZiAodXNlci5nZXRBd2FyZE51bWJlcigpID49IF9tcG9pbnRbX21wb2ludC5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgICBpc0ludHNSZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6YGT5YW35p2D6YeNXHJcbiAgICAgICAgbGV0IGlzSW5pdFByb3AgPSBmYWxzZTsgLy8g5piv5ZCm5bey57uP5pS56KGM5a6e5L6L5YyW6YGT5YW35LqGXHJcblxyXG4gICAgICAgIC8vIOavjzXooYzlv4Xlrprpmo/mnLrkuIDkuKrpgZPlhbflh7rmnaVcclxuICAgICAgICBsZXQgZml2ZUlzUHJvcDogYW55ID0gdXNlci5nZXRDdXJyZW50TGluZSgpICUgdXNlci5nZXRMdW1wRGF0YSgpLmFkZFByb3AgPT09IDA7XHJcblxyXG4gICAgICAgIHdoaWxlIChpbml0TnVtIDwgYmFycmllck51bSkge1xyXG4gICAgICAgICAgICBsZXQgYmFycmllcjtcclxuICAgICAgICAgICAgbGV0IGF3YXJkTnVtOiBhbnkgPSBGU0RLLmdldENhcmQoMCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9tcG9pbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreS4quaVsFxyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuZ2V0QXdhcmROdW1iZXIoKSA8PSBfbXBvaW50W2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5qaC546HXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRSZWRXZWlnaHQgPD0gX21ieFdlaWd0W2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSW50c1JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlci5zZXJ2ZXJEYXRhLmlzRmxhZyAmJiAhdXNlci5zZXJ2ZXJEYXRhLmlzQmxhY2tcclxuICAgICAgICAgICAgICAgICYmICF1c2VyLmdldElzUmVkQW5kQ29zdCgpXHJcbiAgICAgICAgICAgICAgICAmJiBpc0ludHNSZWRcclxuICAgICAgICAgICAgICAgICYmIChhd2FyZE51bS5udW0gPiAwIHx8ICh1c2VyLmdldEN1cnJlbnRSZWRMaW5lKCkgIT0gMCAmJiB1c2VyLmdldEN1cnJlbnRSZWRMaW5lKCkgJSBnZXROdW0gPT0gMCkpKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldElzUmVkQW5kQ29zdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHVzZXIuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8g5a6e5L6L5YyW57qi5YyFXHJcbiAgICAgICAgICAgICAgICBiYXJyaWVyID0gYXdhaXQgR1Bvb2wuZ2V0KCdieCcpO1xyXG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+6Z+z5pWIXHJcbiAgICAgICAgICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNULCBBdWRpb05hbWUuRElOR0RPTkcpO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRDdXJyZW50UmVuTGluZSgwKTtcclxuICAgICAgICAgICAgICAgIGlzSW50c1JlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpdmVJc1Byb3AgJiYgIWlzSW5pdFByb3BcclxuICAgICAgICAgICAgICAgICYmICh0aGlzLmlzQWxsQmFsbEJpZygpIHx8IHRoaXMuYmFsbHMubGVuZ3RoIDwgdXNlci5nZXRMdW1wRGF0YSgpLk1heEJhbGxDb3VudClcclxuICAgICAgICAgICAgICAgICYmIHVzZXIuZ2V0Q3VycmVudFByb3AoKSA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgX29sZFByb3AgPSB1c2VyLmdldEN1cnJlbnRQcm9wKCk7XHJcbiAgICAgICAgICAgICAgICBfb2xkUHJvcCArPSAxO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRDdXJyZW50UHJvcChfb2xkUHJvcCk7XHJcbiAgICAgICAgICAgICAgICBpc0luaXRQcm9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGxzLmxlbmd0aCA+PSB1c2VyLmdldEx1bXBEYXRhKCkuTWF4QmFsbENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFycmllciA9IGF3YWl0IEdQb29sLmdldChcImJ1ZmZCaWdCYWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc0FsbEJhbGxCaWcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhcnJpZXIgPSBhd2FpdCBHUG9vbC5nZXQoXCJidWZmQWRkQmFsbFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdlaWdodFBvcnAgPSB1dGlscy5yYW5kb21JbnQoWzAsIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXJyaWVyID0gYXdhaXQgR1Bvb2wuZ2V0KHRoaXMucHJlZmFiRnVuQmFycmllcnNbd2VpZ2h0UG9ycF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYXJyaWVyID0gYXdhaXQgR1Bvb2wuZ2V0KHRoaXMucHJlZmFiQmFycmllcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZhYkJhcnJpZXJzLmxlbmd0aCldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYmFycmllclBhcmVudC5hZGRDaGlsZChiYXJyaWVyKVxyXG4gICAgICAgICAgICBiYXJyaWVyLnBvc2l0aW9uID0gY2MudjIocG9zWFtpbml0TnVtXSwgc3RhcnRQb3NZKTtcclxuICAgICAgICAgICAgYmFycmllci5nZXRDb21wb25lbnQoQmFycmllcikuaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJhcnJpZXJzLnB1c2goYmFycmllci5nZXRDb21wb25lbnQoQmFycmllcikpO1xyXG4gICAgICAgICAgICBpbml0TnVtKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmo4DmtYvlvanomblcclxuICAgICAgICB0aGlzLmlzQWRkUmFpbmRvdyhzdGFydFBvc1kpO1xyXG5cclxuICAgICAgICB0aGlzLmlzQmFycmllclBvcygpO1xyXG4gICAgICAgIHRoaXMuc2V0UmVjb3JkQmFycmllcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlsI/nkIPlj5jlpKdcclxuICAgIGJpZ0JhbGwobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5QT1ApOy8vIOa3u+WKoOmBk+WFt+mfs+aViFxyXG4gICAgICAgIG5vZGUuc2NhbGUgPSB1c2VyLmdldEx1bXBEYXRhKCkuTWF4QmlnQmFsbDtcclxuICAgICAgICAvLyBub2RlLmNvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKFwiI0ZGMDAwMFwiKTtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudChCYWxsKS5zZXRIdXJ0KDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pi+56S65bCP55CD5oC75pWwXHJcbiAgICBzZXRCYWxsQ291bnQobnVtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJhbGxDb3VudC5zdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+i/nue7reWPkeWwhOWwj+eQg1xyXG4gICAgc2hvb3RCYWxscyhkaXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdhbWVDb25zdGFudC5pc1Nob290ID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJhbGwgPSB0aGlzLmJhbGxzW2ldO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdEJhbGwoYmFsbCwgZGlyKTtcclxuICAgICAgICAgICAgfSwgaSAqIDAuMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lj5HlsITljZXkuKrlsI/nkINcclxuICAgIHNob290QmFsbChiYWxsOiBCYWxsLCBkaXIpIHtcclxuICAgICAgICBiYWxsLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICBiYWxsLnJpZ2lkQm9keS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNULCBBdWRpb05hbWUuQ1JBU0gpOy8vIOa3u+WKoOWwhOWHu+mfs+aViFxyXG4gICAgICAgIGJhbGwucmlnaWRCb2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaXIueSwgZGlyLngpIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgICAgICB2YXIgdG9YID0gTWF0aC5jb3MoYW5nbGUgKiAwLjAxNzQ1MzI5MykgKiAxMDA7XHJcbiAgICAgICAgdmFyIHRvWSA9IE1hdGguc2luKGFuZ2xlICogMC4wMTc0NTMyOTMpICogMTAwO1xyXG4gICAgICAgIGJhbGwucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIodG9YICogMjAsIHRvWSAqIDIwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aUtuWbnuWwj+eQg++8jOS4iuenu+S4gOaOkumanOeijeeJqVxyXG4gICAgcmVjeWNsZUJhbGwoKSB7XHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlQmFsbHNDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuYmFycmllclNjb3JlUmF0ZSArPSAwLjE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUmVjeWNsZUZpbmlzaGVkKCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhcnJpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFycmllciA9IHRoaXMuYmFycmllcnNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYXJyaWVyc1tpXS5nZXRTY29yZSgpID09IDAgJiYgYmFycmllci5ub2RlLm5hbWUgPT09ICdieCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLk9QRU5WRElFTywgdGhpcy5iYXJyaWVyc1tpXSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUJhcnJpZXNyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVCYXJyaWVzcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFycmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJhcnJpZXIgPSB0aGlzLmJhcnJpZXJzW2ldO1xyXG4gICAgICAgICAgICBjYy50d2VlbihiYXJyaWVyLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuYnkoMC4xLCB7IHBvc2l0aW9uOiBjYy52MigwLCAxMDApIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRSZWNvcmRCYXJyaWVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXJyaWVyLm5vZGUucG9zaXRpb24ueSA+IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5Jc1NoYWtlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGU0RLLnNoYWtlKDUwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmipbliqhcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFycmllci5ub2RlLnJ1bkFjdGlvbihjYy5zaGFrZSgxLjUsIDUsIDUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhcnJpZXIubm9kZS5wb3NpdGlvbi55ID49IDM5MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFycmllci5ub2RlLm5hbWUgPT0gXCJidWZmQWRkQmFsbFwiIHx8IGJhcnJpZXIubm9kZS5uYW1lID09IFwiYnVmZkJpZ0JhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCYXJyaWVyKGJhcnJpZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9vbGRQcm9wID0gdXNlci5nZXRDdXJyZW50UHJvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX29sZFByb3AgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuc2V0Q3VycmVudFByb3AoX29sZFByb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNCYXJyaWVyUG9zKCk7XHJcbiAgICAgICAgdGhpcy5zZXRSZWNvcmRCYWxscygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRCYXJyaWVycygpO1xyXG4gICAgICAgIH0sIC4yKVxyXG4gICAgICAgIEdhbWVDb25zdGFudC5pc1Nob290ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWaWRlb0FkZEJhcnJpZXJzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iYXJyaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFycmllciA9IHRoaXMuYmFycmllcnNbaV07XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKGJhcnJpZXIubm9kZSlcclxuICAgICAgICAgICAgICAgIC5ieSgwLjEsIHsgcG9zaXRpb246IGNjLnYyKDAsIDEwMCkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFycmllci5ub2RlLnBvc2l0aW9uLnkgPiAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIuSXNTaGFrZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRlNESy5zaGFrZSg1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oqW5YqoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcnJpZXIubm9kZS5ydW5BY3Rpb24oY2Muc2hha2UoMS41LCA1LCA1KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXJyaWVyLm5vZGUucG9zaXRpb24ueSA+PSAzOTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhcnJpZXIubm9kZS5uYW1lID09IFwiYnVmZkFkZEJhbGxcIiB8fCBiYXJyaWVyLm5vZGUubmFtZSA9PSBcImJ1ZmZCaWdCYWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQmFycmllcihiYXJyaWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfb2xkUHJvcCA9IHVzZXIuZ2V0Q3VycmVudFByb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vbGRQcm9wIC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnNldEN1cnJlbnRQcm9wKF9vbGRQcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzQmFycmllclBvcygpO1xyXG4gICAgICAgIHRoaXMuc2V0UmVjb3JkQmFsbHMoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQmFycmllcnMoKTtcclxuICAgICAgICB9LCAuMilcclxuICAgICAgICBHYW1lQ29uc3RhbnQuaXNTaG9vdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5omA5Zyo5pyJ5Zyo5Zy655qE6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0JhcnJpZXJQb3MoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYmFycmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhcnJpZXJzW2luZGV4XS5ub2RlLnBvc2l0aW9uLnggPCAtMjYwICYmIHRoaXMuYmFycmllcnNbaW5kZXhdLm5vZGUucG9zaXRpb24ueCA+IDI2MCB8fCB0aGlzLmJhcnJpZXJzW2luZGV4XS5ub2RlLnBvc2l0aW9uLnkgPCBBZGRCYXJyaWVyUG9zWSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFycmllcnNbaW5kZXhdLm5vZGUubmFtZSA9PSBcImJ4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldElzUmVkQW5kQ29zdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDkuI3nn6XpgZPllaXljp/lm6Dlh7rnlYzkuoZcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQmFycmllcih0aGlzLmJhcnJpZXJzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/muLjmiI/nu5PmnZ9cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5TRVRUTEVNRU5UKTsvLyDmt7vliqDnu5Pnrpfpn7PmlYhcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIua4uOaIj+e7k+eul1wiKTtcclxuICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlNIT1dfUE9QVVAsIFBvcFVwTmFtZS5HQU1FT1ZFUiwgbnVsbCwgZGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v5bCP55CD5piv5ZCm5pS25Zue5a6M5q+VXHJcbiAgICBpc1JlY3ljbGVGaW5pc2hlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWN5Y2xlQmFsbHNDb3VudCA9PSB0aGlzLmJhbGxzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvL+aKluWKqOmanOeijeeJqVxyXG4gICAgc2hha2UoYmFycmllcjogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChiYXJyaWVyLmdldE51bWJlck9mUnVubmluZ0FjdGlvbnMoKSA+IDApIHJldHVybjtcclxuICAgICAgICBpZiAodXNlci5Jc1NoYWtlKSB7XHJcbiAgICAgICAgICAgIEZTREsuc2hha2UoMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2hha2UgPSBjYy5zaGFrZSgwLjEsIDUsIDUpO1xyXG4gICAgICAgIGJhcnJpZXIucnVuQWN0aW9uKHNoYWtlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iuoeWIhueJjOaYvuekulxyXG4gICAgYWRkU2NvcmUoc2NvcmU6IG51bWJlcikge1xyXG4gICAgICAgIHNjb3JlICo9IHVzZXIuZ2V0THVtcERhdGEoKS5leHBTYXRlO1xyXG5cclxuICAgICAgICBsZXQgZXhwID0gdXNlci5nZXRFeHAoKTtcclxuICAgICAgICBleHAgKz0gc2NvcmU7XHJcbiAgICAgICAgdXNlci5zZXRFeHAoZXhwKTtcclxuXHJcbiAgICAgICAgbGV0IGV4cERheSA9IHVzZXIuZ2V0RXhwRGF5KCk7XHJcbiAgICAgICAgZXhwRGF5ICs9IHNjb3JlO1xyXG4gICAgICAgIHVzZXIuc2V0RXhwRGF5KGV4cERheSlcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u6Zqc56KN54mp6Ieq6Lqr5YiG5pWw5YC8KOa1t+WklueOsOWcqOaUueS4uuaMieeFp+etiee6pylcclxuICAgIHNldEJhcnJpZXJTY29yZSgpIHtcclxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcigodXNlci5nZXRDdXJyZW50TGluZSgpICoqIHVzZXIuZ2V0THVtcERhdGEoKS5sZXZlbEZvcm11bGFbMF1bMF0pICogdXNlci5nZXRMdW1wRGF0YSgpLmxldmVsRm9ybXVsYVswXVsxXSArIHVzZXIuZ2V0THVtcERhdGEoKS5sZXZlbEZvcm11bGFbMF1bMl0pO1xyXG4gICAgICAgIGxldCBtYXggPSBNYXRoLmZsb29yKCh1c2VyLmdldEN1cnJlbnRMaW5lKCkgKiogdXNlci5nZXRMdW1wRGF0YSgpLmxldmVsRm9ybXVsYVsxXVswXSkgKiB1c2VyLmdldEx1bXBEYXRhKCkubGV2ZWxGb3JtdWxhWzFdWzFdICsgdXNlci5nZXRMdW1wRGF0YSgpLmxldmVsRm9ybXVsYVsxXVsyXSk7XHJcblxyXG4gICAgICAgIGxldCBfc2NvcmU6IG51bWJlciA9IHV0aWxzLnJhbmRvbUludChtaW4sIG1heCk7XHJcbiAgICAgICAgcmV0dXJuIF9zY29yZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a2iOmZpOmanOeijeeJqVxyXG4gICAgcmVtb3ZlQmFycmllcihiYXJyaWVyLCBpc1Jlc3VyZ2VuY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5FTElNSU5BVEUpOy8vIOa3u+WKoOa2iOmZpOmfs+aViFxyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLmJhcnJpZXJzLmluZGV4T2YoYmFycmllcik7XHJcbiAgICAgICAgaWYgKGJhcnJpZXIubm9kZS5uYW1lICE9IFwiYnVmZkFkZEJhbGxcIiAmJiBiYXJyaWVyLm5vZGUubmFtZSAhPSBcImJ1ZmZCaWdCYWxsXCIgJiYgYmFycmllci5ub2RlLm5hbWUgIT0gXCJieFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXJyaWVyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0lyaXNBbmltJykuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXJyaWVyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0lyaXNBbmltJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVzdXJnZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjIyMjIyMjIyMjIyMjIyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICDph5HluIHnibnmlYhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpYW9CaWdDb2luKClcclxuICAgICAgICAgICAgICAgICAgICBGU0RLLnNldENyZWRpdCgnY3JlZGl0JywgNTAsIFwiQnJpY2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoYENvbmdyYXR1bGF0aW9ucyBvbiByZWNlaXZpbmcgJHs1MH0gZ29sZCBjb2luc2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRJc1JhaW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRSYWluUHJvYmFiaWxpdHkodXNlci5nZXRMdW1wRGF0YSgpLnJhaW5Qcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzUmVzdXJnZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2luKGJhcnJpZXIubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggIT0gLTEpIHtcclxuICAgICAgICAgICAgR1Bvb2wucHV0KGJhcnJpZXIubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFycmllcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIHVzZXIuc2V0RGVsZXRlQmFycmllcnNOdW0oKTsvLyDorqHnrpfplIDmr4HkuKrmlbBcclxuICAgICAgICAgICAgdGhpcy5zZXRSZWNvcmRCYXJyaWVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumHkeW4gVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q29pbihwb3MpIHtcclxuICAgICAgICAvLyDph5HluIHkuqflh7pcclxuICAgICAgICAvLyDmnKzlnLDph5HluIHlsJHkuo4xMDAwMCBcclxuICAgICAgICBsZXQgbGV2ZWwgPSAtMTtcclxuICAgICAgICBsZXZlbCA9IEZTREsuZ2V0Q3JlZGl0RGlmKCk7XHJcbiAgICAgICAgbGV0IGF3YXJkTnVtID0gdXRpbHMucmFuZG9tSW50KHVzZXIuZ2V0THVtcERhdGEoKS5MZXZlbENpb25zW2xldmVsXSk7XHJcblxyXG4gICAgICAgIGlmIChhd2FyZE51bSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh1c2VyLmdldENvbGxlY3RDb2lucygpIDwgdXNlci5nZXRMdW1wRGF0YSgpLkNvbGxlY3RDb2luc1swXSkge1xyXG4gICAgICAgICAgICAvLyDlsI/kuo4xMDAwMOmHkeW4gVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1DaW9uKGF3YXJkTnVtLCAyLCB0cnVlLCBwb3MpO1xyXG4gICAgICAgICAgICBGU0RLLnNldENyZWRpdCgnY3JlZGl0JywgYXdhcmROdW0sIFwiQnJpY2tcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgb2xkID0gdXNlci5nZXRDb2xsZWN0Q29pbnMoKTtcclxuICAgICAgICAgICAgb2xkICs9IGF3YXJkTnVtO1xyXG4gICAgICAgICAgICB1c2VyLnNldENvbGxlY3RDb2lucyhvbGQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlci5nZXRDb2xsZWN0Q29pbnMyKCkgPCB1c2VyLmdldEx1bXBEYXRhKCkuQ29sbGVjdENvaW5zWzFdKSB7XHJcbiAgICAgICAgICAgIC8vIOavj+aXpeS6p+WHujIwMDBcclxuICAgICAgICAgICAgdGhpcy5hbmltQ2lvbihhd2FyZE51bSwgMiwgdHJ1ZSwgcG9zKTtcclxuICAgICAgICAgICAgRlNESy5zZXRDcmVkaXQoJ2NyZWRpdCcsIGF3YXJkTnVtLCBcIkJyaWNrXCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9sZCA9IHVzZXIuZ2V0Q29sbGVjdENvaW5zMigpO1xyXG4gICAgICAgICAgICBvbGQgKz0gYXdhcmROdW07XHJcbiAgICAgICAgICAgIHVzZXIuc2V0Q29sbGVjdENvaW5zMihvbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/ojrflj5bpmo/mnLrot53nprvvvIznlKjkuo7nlJ/miJDpmpznoo3niannmoTpl7Tot51cclxuICAgIGdldFJhbmRvbVNwYWNlKCkge1xyXG4gICAgICAgIHJldHVybiAxMDAgKyBNYXRoLnJhbmRvbSgpICogMTUwO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5Yy66Ze06ZqP5py65YC8XHJcbiAgICByYW5kb21OdW0oTWluLCBNYXgpIHtcclxuICAgICAgICB2YXIgUmFuZ2UgPSBNYXggLSBNaW47XHJcbiAgICAgICAgdmFyIFJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHZhciBudW0gPSBNaW4gKyBNYXRoLmZsb29yKFJhbmQgKiBSYW5nZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aYvuekuuW8leWvvOWKqOeUu1xyXG4gICAgZ3VpZGVTaG93KCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgaGFuZE1vdmUgPSB0aGlzLmd1aWRlLmdldENoaWxkQnlOYW1lKCdoYW5kTW92ZScpO1xyXG4gICAgICAgIGxldCBhbmltQ3RybCA9IGhhbmRNb3ZlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGFuaW1DdHJsLnBsYXkoJ2hhbmRNb3ZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63lvJXlr7zliqjnlLtcclxuICAgICAqL1xyXG4gICAgZ3VpZGVIaWRlKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGhhbmRNb3ZlID0gdGhpcy5ndWlkZS5nZXRDaGlsZEJ5TmFtZSgnaGFuZE1vdmUnKTtcclxuICAgICAgICBsZXQgYW5pbUN0cmwgPSBoYW5kTW92ZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBhbmltQ3RybC5zdG9wKCdoYW5kTW92ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmHjeaWsOW8gOWni1xyXG4gICAgcmVzdGFydEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7IC8v6K6h5YiG54mMXHJcbiAgICAgICAgdGhpcy5yZWN5Y2xlQmFsbHNDb3VudCA9IDEwOyAvL+aUtuWbnuWwj+eQg+aVsFxyXG4gICAgICAgIHRoaXMuYmFycmllclNjb3JlUmF0ZSA9IDA7IC8v6K6+572u6Zqc56KN54mp5Z+65YeG546HXHJcbiAgICAgICAgdGhpcy5ndWlkZS56SW5kZXggPSAxMDtcclxuICAgICAgICB0aGlzLmd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB1c2VyLnNldEN1cnJlbnRQcm9wKDApO1xyXG4gICAgICAgIHVzZXIuc2V0SXNSZWRBbmRDb3N0KGZhbHNlKTtcclxuICAgICAgICB1c2VyLnNldEN1cnJlbnRMaW5lKDApO1xyXG5cclxuICAgICAgICB1c2VyLnNldElzUmFpbihmYWxzZSk7XHJcbiAgICAgICAgdXNlci5zZXRSYWluUHJvYmFiaWxpdHkodXNlci5nZXRMdW1wRGF0YSgpLnJhaW5Qcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgdXNlci5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5iYWxscyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFsbFBhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICB0aGlzLmJhcnJpZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5iYXJyaWVyUGFyZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5zZXRCYWxsQ291bnQodGhpcy5iYWxscy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCYWxsKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRCYXJyaWVycyhpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pi+56S65ri45oiP5oyH5byVXHJcbiAgICAgICAgdGhpcy5ndWlkZVNob3coKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSN5rS777yI5YeP5Y675LiK6Z2iM+ihjO+8iVxyXG4gICAgICovXHJcbiAgICByZXN1cmdlbmNlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJhcnJpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFycmllciA9IHRoaXMuYmFycmllcnNbMF07XHJcbiAgICAgICAgICAgIGlmIChiYXJyaWVyLm5vZGUucG9zaXRpb24ueSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFycmllci5ub2RlLm5hbWUgPT0gXCJidWZmQWRkQmFsbFwiIHx8IGJhcnJpZXIubm9kZS5uYW1lID09IFwiYnVmZkJpZ0JhbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wTnVtID0gdXNlci5nZXRDdXJyZW50UHJvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BOdW0gLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldEN1cnJlbnRQcm9wKHByb3BOdW0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXJyaWVyLm5vZGUubmFtZSA9PSBcImJ4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldElzUmVkQW5kQ29zdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhcnJpZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnSXJpc0FuaW0nKS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldElzUmFpbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5zZXRSYWluUHJvYmFiaWxpdHkodXNlci5nZXRMdW1wRGF0YSgpLnJhaW5Qcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJhcnJpZXIoYmFycmllciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlci5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5ndWlkZS56SW5kZXggPSAxMDtcclxuICAgICAgICB0aGlzLmd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8v5pi+56S65ri45oiP5oyH5byVXHJcbiAgICAgICAgdGhpcy5ndWlkZVNob3coKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5piv5ZCm5YWo6YOo5Li65aSn55CDXHJcbiAgICAgKi9cclxuICAgIGlzQWxsQmFsbEJpZygpIHtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBsZXQgaXNPbmUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJhbGxzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFsbCA9IHRoaXMuYmFsbHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoYmFsbC5nZXRIdXJ0KCkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlY29yZEJhbGxzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhcnJpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhcnJpZXJzW2ldLm5vZGUubmFtZSA9PSBcImJ1ZmZCaWdCYWxsXCIpIHtcclxuICAgICAgICAgICAgICAgIGlzT25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCghaXNPbmUgJiYgbnVtID09IHRoaXMuYmFsbHMubGVuZ3RoIC0gMSkgfHwgbnVtID09PSB0aGlzLmJhbGxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorrDlvZXpmpznoo3nianliLDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFJlY29yZEJhcnJpZXJzKCkge1xyXG4gICAgICAgIGxldCBiYXJyaWVyRGF0YTogQmFycmllcnNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJhcnJpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFycmllciA9IHRoaXMuYmFycmllcnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgX2RhdGE6IEJhcnJpZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYmFycmllci5ub2RlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwb3M6IGJhcnJpZXIubm9kZS5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBiYXJyaWVyLm5vZGUuc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBhbmdsZTogYmFycmllci5ub2RlLmFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGJhcnJpZXIuZ2V0U2NvcmUoKSxcclxuICAgICAgICAgICAgICAgIGlzUmFpbjogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGJhcnJpZXIubm9kZS5uYW1lLmluZGV4T2YoXCJwb2x5Z29uXCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBfZGF0YS5pc1JhaW4gPSBiYXJyaWVyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0lyaXNBbmltJykuYWN0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhcnJpZXJEYXRhLnB1c2goX2RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyLnNldFJlY29yZEJhcnJpZXIoYmFycmllckRhdGEpO1xyXG4gICAgICAgIHVzZXIuc2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6w5b2V55CD5Yiw5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRSZWNvcmRCYWxscygpIHtcclxuICAgICAgICBsZXQgYmFsbERhdGE6IEJhbGxzW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5iYWxscy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGJhbGwgPSB0aGlzLmJhbGxzW2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IF9kYXRhOiBCYWxscyA9IHtcclxuICAgICAgICAgICAgICAgIGh1cnQ6IGJhbGwuZ2V0SHVydCgpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGU6IGJhbGwubm9kZS5zY2FsZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBiYWxsRGF0YS5wdXNoKF9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlci5zZXRSZWNvcmRCYWxsKGJhbGxEYXRhKTtcclxuICAgICAgICB1c2VyLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmanOeijeeJqeWunuS+i+WMluaVsOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SW5pdEJhcnJpZXJSYW5kb20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMucmFuZG9tSW50KHVzZXIuZ2V0THVtcERhdGEoKS5pbml0QmFycmllcmxBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py66L+U5Zue5LiA5Liq5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBiYWNrQmFycmllclBvc1gobnVtKSB7XHJcbiAgICAgICAgbGV0IHBvc1hfQXJyOiBudW1iZXJbXSA9IHVzZXIuZ2V0THVtcERhdGEoKS5iYXJyaWVybEFyclBvc1guY29uY2F0KCk7XHJcbiAgICAgICAgbGV0IF9wb3ggPSBwb3NYX0FycjtcclxuICAgICAgICBsZXQgcmVQb3ggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBfcG9zWCA9IHV0aWxzLnJhbmRvbUludCgwLCBfcG94Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICByZVBveC5wdXNoKF9wb3hbX3Bvc1hdKTtcclxuICAgICAgICAgICAgX3BveC5zcGxpY2UoX3Bvc1gsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVQb3g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotKfluIHliqjnlLtcclxuICAgICAqIEBwYXJhbSBudW0g5pWw6YePIFxyXG4gICAgICogQHBhcmFtIHR5cGUgMD1ncCAxPXBwIDI96YeR5biBXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBhbmltQ2lvbihudW06IG51bWJlciwgdHlwZTogbnVtYmVyLCBpc09uZTogYm9vbGVhbiA9IHRydWUsIHN0YXRyUG9zOiBjYy5WZWMyID0gY2MudjIoKSkge1xyXG4gICAgICAgIGxldCBjb2luID0gdGhpcy5tQ2lvbnNOb2RlLmNoaWxkcmVuW3R5cGVdO1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIGlmICh0eXBlID09IDApIG5hbWUgPSBcImdwXCI7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gMSkgbmFtZSA9IFwicHBcIjtcclxuICAgICAgICBpZiAodHlwZSA9PSAyKSBuYW1lID0gXCJjcmVkaXRcIjtcclxuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGNiID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNULCBBdWRpb05hbWUuQ0lPTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PSAyICYmIGlzT25lKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW07IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuYWRkQ2lvbk1vdmUodGhpcy5tQW5pbUNpb25zLCBuYW1lLCBjYy52MigpLCBjb2luLnBvc2l0aW9uLmFkZChjb2luLmdldENoaWxkQnlOYW1lKG5hbWUpLnBvc2l0aW9uKSwgY2IsIG51bSAtIGluZGV4ID09IDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmFkZENpb25Nb3ZlKHRoaXMubUFuaW1DaW9ucywgbmFtZSwgc3RhdHJQb3MsIGNvaW4ucG9zaXRpb24uYWRkKGNvaW4uZ2V0Q2hpbGRCeU5hbWUobmFtZSkucG9zaXRpb24pLCBjYiwgMTAgLSBpbmRleCA9PSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeQg+eahOS8pOWus+iuoeeul1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaHVydFN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGh1cnQgPSAxO1xyXG4gICAgICAgIGlmIChodXJ0ICE9IHVzZXIuZ2V0THVtcERhdGEoKS5leHBEYXlDb3VudCkge1xyXG4gICAgICAgICAgICBodXJ0ID0gdXNlci5nZXRMdW1wRGF0YSgpLmh1cnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBodXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5ri45oiP6YeM6Z2i55qE562J57qnXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICBsZXQgbGV2ZWwgPSB1c2VyLmdldExldmVsKCk7XHJcblxyXG4gICAgICAgIGxldCBleHBEYXRhOiBhbnkgPSB1c2VyLmdldEx1bXBEYXRhKCkuZXhwW2xldmVsIC0gMV07XHJcbiAgICAgICAgdGhpcy5fdXBncmFkZUV4cCA9IGV4cERhdGEuZXhwO1xyXG5cclxuICAgICAgICBsZXQgZXhwID0gdXNlci5nZXRFeHAoKTtcclxuXHJcbiAgICAgICAgaWYgKGV4cCA+PSB0aGlzLl91cGdyYWRlRXhwKSB7XHJcbiAgICAgICAgICAgIGxldmVsKys7XHJcbiAgICAgICAgICAgIHVzZXIuc2V0TGV2ZWwobGV2ZWwpO1xyXG5cclxuICAgICAgICAgICAgLy8g5Z+L54K5XHJcbiAgICAgICAgICAgIGxldCBfZGF0YSA9IEZTREsuZ2V0VXNlclR5cGUoKTsvLyDov5Tlm57mlrDogIHnlKjmiLdcclxuICAgICAgICAgICAgaWYgKF9kYXRhID09ICduZXcnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDov5Tlm57lvZPliY3nrYnnuqdcclxuICAgICAgICAgICAgICAgIEZTREsudW1lbmdFdmVudCgnR0FNRV9MVl9ORVcnLCBgJHtsZXZlbH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDml6DorrrmlrDogIHnlKjmiLfpg73ov5Tlm55cclxuICAgICAgICAgICAgRlNESy51bWVuZ0V2ZW50KCdHQU1FX0xWX0FMTCcsIGAke2xldmVsfWApO1xyXG5cclxuICAgICAgICAgICAgZXhwID0gZXhwIC0gdGhpcy5fdXBncmFkZUV4cDtcclxuICAgICAgICAgICAgdXNlci5zZXRFeHAoZXhwKTtcclxuICAgICAgICAgICAgdXNlci5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxldmVsQmFyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBgJHt1c2VyLmdldExldmVsKCl9YDtcclxuICAgICAgICB0aGlzLm5leHRMZXZlbExhYmVsLnN0cmluZyA9IGAke3VzZXIuZ2V0TGV2ZWwoKSArIDF9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKirnrYnnuqfmu5rliqggKi9cclxuICAgIGxldmVsQmFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bVR3KSB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtVHcuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm51bVR3ID0gY2MudHdlZW4odGhpcylcclxuICAgICAgICAgICAgLnRvKC4yLCB7IGxldmVsbGFiOiBOdW1iZXIodXNlci5nZXRFeHAoKSAvIHRoaXMuX3VwZ3JhZGVFeHApIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxldmVsbGFiKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmxldmVsUHJvZ3Jlc3NCYXIucHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG4gICAgc2V0IGxldmVsbGFiKHRleHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGV2ZWxQcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHRleHQ7XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxQcm9ncmVzc0Jhci5wcm9ncmVzcyA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxQcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5b2p6Jm55Yqo55S7XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyByYWluQW5pbShiYXJyaWVyOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgLy8g5pKt5pS+6Z+z5pWIXHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLkRJTkdET05HKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBhbmltID0gYXdhaXQgR1Bvb2wuZ2V0KCdzeW50aGV0aWMnKTtcclxuICAgICAgICBhbmltLnBhcmVudCA9IHRoaXMubUFuaW1DaW9ucztcclxuICAgICAgICBhbmltLnBvc2l0aW9uID0gYmFycmllci5wb3NpdGlvbjtcclxuICAgICAgICBhbmltLnNjYWxlID0gYmFycmllci5zY2FsZTtcclxuICAgICAgICBhbmltLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuXHJcbiAgICAgICAgYmFycmllci5nZXRDaGlsZEJ5TmFtZShcInJhaW5ib3dcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBiYXJyaWVyLmdldENoaWxkQnlOYW1lKCdJcmlzQW5pbScpLmFjdGl2ZSA9IHRydWU7IC8vIOWFieWciFxyXG4gICAgICAgIHRoaXMuc2V0UmVjb3JkQmFycmllcnMoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIEdQb29sLnB1dChhbmltKTtcclxuICAgICAgICB9LCAwLjc1KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwaWFvQmlnQ29pbihjb2lubnVtPywgcG9zPykge1xyXG4gICAgICAgIGxldCBhbGxudW0gPSAxMDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CSUdXSU5HT0xEKTtcclxuXHJcbiAgICAgICAgaWYgKGNvaW5udW0pIHtcclxuICAgICAgICAgICAgYWxsbnVtID0gY29pbm51bTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFjdGlvbnMucm9ja0FjdGlvbih0aGlzLm5vZGUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICh1c2VyLklzU2hha2UpIHtcclxuICAgICAgICAgICAgRlNESy5zaGFrZSgxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxudW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29pbnMgPSBhd2FpdCBHUG9vbC5nZXQoJ3JhaW5kb3dDaW9uJyk7XHJcbiAgICAgICAgICAgIGNvaW5zLnBhcmVudCA9IHRoaXMubUFuaW1DaW9ucztcclxuICAgICAgICAgICAgY29pbnMuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgIGlmIChwb3MpIHtcclxuICAgICAgICAgICAgICAgIGNvaW5zLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29pbnMuc2V0UG9zaXRpb24oMCwgMClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29pbnMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgICAgICAgICBjb2lucy5nZXRDb21wb25lbnQoQ2lvbikuY29pbkJpZ0p1bXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm55Sf5oiQ5b2p6Jm5XHJcbiAgICAgKiBAcGFyYW0gc3RhcnRQb3NZIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNBZGRSYWluZG93KHN0YXJ0UG9zWSkge1xyXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpueUn+aIkOW9qeiZueaWueWdl1xyXG4gICAgICAgIGlmICh1c2VyLmdldFJhaW5Bd2FyZE51bSgpIDw9IHVzZXIuZ2V0THVtcERhdGEoKS5yYWluQXdhcmRNYXggJiYgIXVzZXIuZ2V0SXNSYWluKCkpIHtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSB1c2VyLmdldEN1cnJlbnRMaW5lKCk7XHJcbiAgICAgICAgICAgIGxldCBpbml0UmFpbmRvdyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJhcnJpZXJBcnIgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGxpbmUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhcnJpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFycmllcnNbaV0ubm9kZS5uYW1lLmluZGV4T2YoXCJwb2x5Z29uXCIpICE9IC0xICYmIHRoaXMuYmFycmllcnNbaV0ubm9kZS5wb3NpdGlvbi55ID09IHN0YXJ0UG9zWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJyaWVyQXJyLnB1c2godGhpcy5iYXJyaWVyc1tpXS5zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJpZ051bSA9IE1hdGgubWF4LmFwcGx5KHRoaXMsIGJhcnJpZXJBcnIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLmJhcnJpZXJzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFycmllcnNba10ubm9kZS5uYW1lLmluZGV4T2YoXCJwb2x5Z29uXCIpICE9IC0xICYmIHRoaXMuYmFycmllcnNba10ubm9kZS5wb3NpdGlvbi55ID09IHN0YXJ0UG9zWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iYXJyaWVyc1trXS5zY29yZSA9PSBiaWdOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFpbkFuaW0odGhpcy5iYXJyaWVyc1trXS5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuc2V0SXNSYWluKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5zZXRSYWluUHJvYmFiaWxpdHkodXNlci5nZXRMdW1wRGF0YSgpLnJhaW5Qcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaW5lID4gMikge1xyXG4gICAgICAgICAgICAgICAgLy8g6K6h566X5qaC546HXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvYmFiaWxpdHkgPSB1c2VyLmdldFJhaW5Qcm9iYWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPD0gcHJvYmFiaWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0UmFpbmRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2JhYmlsaXR5ICs9IDAuMTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldFJhaW5Qcm9iYWJpbGl0eShwcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluaXRSYWluZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhcnJpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhcnJpZXJzW2ldLm5vZGUubmFtZS5pbmRleE9mKFwicG9seWdvblwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFycmllckFyci5wdXNoKHRoaXMuYmFycmllcnNbaV0uc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmlnTnVtID0gTWF0aC5tYXguYXBwbHkodGhpcywgYmFycmllckFycik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5iYXJyaWVycy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iYXJyaWVyc1trXS5ub2RlLm5hbWUuaW5kZXhPZihcInBvbHlnb25cIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhcnJpZXJzW2tdLnNjb3JlID09IGJpZ051bSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFpbkFuaW0odGhpcy5iYXJyaWVyc1trXS5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnNldElzUmFpbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnNldFJhaW5Qcm9iYWJpbGl0eSh1c2VyLmdldEx1bXBEYXRhKCkucmFpblByb2JhYmlsaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gdXNlci5zYXZlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==