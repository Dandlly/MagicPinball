"use strict";
cc._RF.push(module, '9d770FyhYFP7ZBFwGHM4YXH', 'Loading');
// script/loading/Loading.ts

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
var EventConstants_1 = require("../common/EventConstants");
var GameController_1 = require("../game/GameController");
var User_1 = require("../common/User");
var Actions_1 = require("../common/Actions");
var FSidebar_1 = require("../FSidebar");
var FHideNode_1 = require("../FHideNode");
var Events_1 = require("../common/Events");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.game = null;
        _this.main = null;
        _this.ui = null;
        _this.logoNode = null;
        _this.loadingLabel = null;
        _this.progressBar = null;
        _this.verLabel = null;
        _this.icon = null;
        _this.isBreakNode = null;
        _this._updateTotal = 0;
        _this._isReady = false;
        return _this;
    }
    Loading.prototype.onLoad = function () {
        FLog.normal(this.node.parent.getComponentsInChildren(cc.Label));
        EventConstants_1.GameConstant.game = this.game.getComponent(GameController_1.default);
        Actions_1.actions.breatheEff(this.logoNode);
    };
    Loading.prototype.start = function () {
        try {
            FSDK.initSZSDK();
        }
        catch (error) {
            console.log(error);
        }
    };
    Loading.prototype.update = function () {
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
                this.node.getComponent(FSidebar_1.default).init();
                this.isBreakNode.getComponent(FHideNode_1.default).init();
                if (User_1.user.getIsLoading() && User_1.user.serverData.login_days == 1 && User_1.user.serverData.login_cnt == 1) {
                    User_1.user.setIsLoading();
                    this.game.active = true;
                    FSDK.openBanner();
                    FSDK.umengEvent("Game_Loading", "1");
                }
                else {
                    this.main.active = true;
                }
            }
            catch (error) {
                FLog.normal(error);
            }
        }
        if (this.progressBar.progress >= 1)
            return;
        this.progressBar.progress += 0.01;
        this.loadingLabel.string = Math.floor(this.progressBar.progress * 100) + '%';
    };
    /**
     * 初始化
     */
    Loading.prototype.init = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                FSDK.setLog(false);
                // 初始化SKD 
                this.initSDK().then(function () {
                    // 用户数据
                    _this.initUser();
                }).then(function () {
                    _this.initGameStauts();
                }).then(function () {
                    // 开始游戏
                    _this.runGame();
                });
                return [2 /*return*/];
            });
        });
    };
    /**
      * 初始化SDK
      * (占据进度条百分之十进度)
      */
    Loading.prototype.initSDK = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // 代号 acnball
            // 包名 com.toponegames.ball
            // 正服链接 wss://api.elswz.toponegames.cn:20212/?pg=acnball
            // 测服链接 wss://test.wps168.com:20212/?pg=acnball
            // key jCI61OzA3oAAbe3i
            // iv H6MNpakNEuD9LjNm
            var data = {
                ip_release: "wss://iusball.cc:20212/",
                ip_debug: "wss://test.wps168.com:20212/?pg=iusball",
                pg: "com.super.iuspinball",
                isDebug: false,
                // test_aid: "2392835726d32492",							//唯一id（测试用） 如果是在手机端，sdk会自己获取
                test_aid: "xvxcvsdfsfsefsf",
                code: "iusball",
                tos_img: _this.icon
            };
            if (!cc.sys.isNative || cc.sys.os == cc.sys.OS_ANDROID) {
                data.ip_release = "wss://ausballpro.cc:20212/"; //socket正服地址 wss://xxxxx
                data.ip_debug = "wss://test.wps168.com:20212/?pg=ausballpro"; //socket测服地址 wss://xxxxx			
                data.pg = "com.super.auspinball";
                data.code = "ausballpro";
            }
            if (cc.sys.isNative) {
                _this.verLabel.string = "release v" + FSDK.getVerInfo().ver;
            }
            FSDK.init(data, function (_data) {
                User_1.user.serverData = _data;
                User_1.user.serverData.isFlag = true;
                FLog.normal('数据', _data);
                resolve();
            }, _this);
        });
    };
    /**
     * 初始化用户信息
     */
    Loading.prototype.initUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // 读取数据
            User_1.user.load();
            // 与服务器校正
            User_1.user.firstGold = User_1.user.serverData.credit_gp;
            User_1.user.secondGold = User_1.user.serverData.credit_pp;
            User_1.user.credit = User_1.user.serverData.credit;
            // 读取游戏配置
            User_1.user.setLumpData(User_1.user.serverData.ALL_CONF.gameData);
            FSDK.setTask(User_1.user.getLevel());
            User_1.user.setCurrentProp(0);
            if (User_1.user.getRainProbability() == 0) {
                User_1.user.setRainProbability(User_1.user.getLumpData().rainProbability);
            }
            // 红包配置判断
            for (var index = 0; index < User_1.user.getRecordBarrier().length; index++) {
                if (User_1.user.getRecordBarrier()[index].name === "bx") {
                    User_1.user.setIsRedAndCost(true);
                    break;
                }
                else {
                    User_1.user.setIsRedAndCost(false);
                }
            }
            // 数据隔天
            if (User_1.user.serverData.isNextDay) {
                User_1.user.setAwardNumber(0);
                User_1.user.setIsGetGift(false); // 获取红包
                User_1.user.setCollectCoins2(0); //金币第二阶段清0
                User_1.user.setExpDay(0); // 每日经验
                User_1.user.setSpinCount(0);
                User_1.user.setRainAwardNum(0);
            }
            // 数据隔天监听
            FSDK.setNextDayListen(function () {
                User_1.user.setAwardNumber(0);
                User_1.user.setIsGetGift(false);
                User_1.user.setCollectCoins2(0);
                User_1.user.setSpinCount(0);
                User_1.user.setExpDay(0);
                User_1.user.setRainAwardNum(0);
                User_1.user.save(1);
            }, _this);
            User_1.user.save();
            User_1.user.save(1);
            resolve();
        });
    };
    /**
     * 初始化游戏状态（这里用来初始化对象池）
     */
    Loading.prototype.initGameStauts = function () {
        return new Promise(function (resolve, reject) {
            GPool.init({ InitEach: { "ball": 50, "buffAddBall": 2, "buffBigBall": 2, "polygon1": 10, "polygon2": 10, "polygon3": 10, "polygon4": 10, "pp": 5, "gp": 5, "raindowCion": 100, "credit": 5, "star": 1, "bx": 5, "synthetic": 2 } });
            FSDK.setBtnSound(function () {
                Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
            });
            resolve();
        });
    };
    /**
     * 进入游戏
     */
    Loading.prototype.runGame = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // cc.director.getCollisionManager().enabled = true;
            var manager = cc.director.getPhysicsManager();
            //启用物理世界
            manager.enabled = true;
            manager.enabledAccumulator = true;
            // cc.director.getPhysicsManager().debugDrawFlags = 1;
            _this._isReady = true;
            resolve();
        });
    };
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "game", void 0);
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "main", void 0);
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "logoNode", void 0);
    __decorate([
        property(cc.Label)
    ], Loading.prototype, "loadingLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], Loading.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Label)
    ], Loading.prototype, "verLabel", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Loading.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "isBreakNode", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

cc._RF.pop();