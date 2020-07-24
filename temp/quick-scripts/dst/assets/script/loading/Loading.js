
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/loading/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2FkaW5nXFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQW9FO0FBQ3BFLHlEQUFvRDtBQUNwRCx1Q0FBc0M7QUFDdEMsNkNBQTRDO0FBRTVDLHdDQUFtQztBQUNuQywwQ0FBcUM7QUFDckMsMkNBQTBDO0FBQzFDLDJEQUFxRDtBQUUvQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOztHQUVHO0FBRUg7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUFxT0M7UUFsT0csVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFtQixJQUFJLENBQUE7UUFHbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixVQUFJLEdBQW1CLElBQUksQ0FBQztRQUc1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUVwQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDOztJQTJNdEMsQ0FBQztJQXpNRyx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSw2QkFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBYyxDQUFDLENBQUM7UUFDM0QsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lB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QyxJQUFJLENBQUM7eUNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1c7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDUztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ0c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVTtJQXRCWCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBb08zQjtJQUFELGNBQUM7Q0FwT0QsQUFvT0MsQ0FwT29DLEVBQUUsQ0FBQyxTQUFTLEdBb09oRDtrQkFwT29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RhbnQsIEdhbWVFdmVudHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50Q29uc3RhbnRzXCI7XHJcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4uL2NvbW1vbi9Vc2VyXCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tIFwiLi4vY29tbW9uL0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2FjaGVGaWxlTmFtZXMsIENhY2hlS2V5LCBDQUNIRV9DT05GSUdfUEFUSCwgY2FjaGUgfSBmcm9tIFwiLi4vY29tbW9uL0NhY2hlXCI7XHJcbmltcG9ydCBGU2lkZWJhciBmcm9tIFwiLi4vRlNpZGViYXJcIjtcclxuaW1wb3J0IEZIaWRlTm9kZSBmcm9tIFwiLi4vRkhpZGVOb2RlXCI7XHJcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRzXCI7XHJcbmltcG9ydCB7IEF1ZGlvTmFtZSB9IGZyb20gXCIuLi9jb21tb24vQXVkaW9Db25zdGFuZHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiDkvZzogIU6RGFuZGxseVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbG9hZGluZ0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdmVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpc0JyZWFrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlVG90YWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9pc1JlYWR5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEZMb2cubm9ybWFsKHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuTGFiZWwpKTtcclxuICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZSA9IHRoaXMuZ2FtZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGFjdGlvbnMuYnJlYXRoZUVmZih0aGlzLmxvZ29Ob2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBGU0RLLmluaXRTWlNESygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIC8vIOWKoOi9vemhtei/h+S4ieW4p+WGjeaJp+ihjOmAu+i+kVxyXG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVUb3RhbCA8IDMpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVG90YWwrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZVRvdGFsID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPj0gMSAmJiB0aGlzLl9pc1JlYWR5KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEZTaWRlYmFyKS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQnJlYWtOb2RlLmdldENvbXBvbmVudChGSGlkZU5vZGUpLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLmdldElzTG9hZGluZygpICYmIHVzZXIuc2VydmVyRGF0YS5sb2dpbl9kYXlzID09IDEgJiYgdXNlci5zZXJ2ZXJEYXRhLmxvZ2luX2NudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5zZXRJc0xvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBGU0RLLm9wZW5CYW5uZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBGU0RLLnVtZW5nRXZlbnQoXCJHYW1lX0xvYWRpbmdcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIEZMb2cubm9ybWFsKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID49IDEpIHJldHVybjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzICs9IDAuMDE7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nTGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcih0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzICogMTAwKSArICclJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIEZTREsuc2V0TG9nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWU0tEIFxyXG4gICAgICAgIHRoaXMuaW5pdFNESygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDnlKjmiLfmlbDmja5cclxuICAgICAgICAgICAgdGhpcy5pbml0VXNlcigpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRHYW1lU3RhdXRzKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOW8gOWni+a4uOaIj1xyXG4gICAgICAgICAgICB0aGlzLnJ1bkdhbWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIOWIneWni+WMllNES1xyXG4gICAgICAqICjljaDmja7ov5vluqbmnaHnmb7liIbkuYvljYHov5vluqYpXHJcbiAgICAgICovXHJcbiAgICBwcml2YXRlIGluaXRTREsoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDku6Plj7cgYWNuYmFsbFxyXG4gICAgICAgICAgICAvLyDljIXlkI0gY29tLnRvcG9uZWdhbWVzLmJhbGxcclxuICAgICAgICAgICAgLy8g5q2j5pyN6ZO+5o6lIHdzczovL2FwaS5lbHN3ei50b3BvbmVnYW1lcy5jbjoyMDIxMi8/cGc9YWNuYmFsbFxyXG4gICAgICAgICAgICAvLyDmtYvmnI3pk77mjqUgd3NzOi8vdGVzdC53cHMxNjguY29tOjIwMjEyLz9wZz1hY25iYWxsXHJcbiAgICAgICAgICAgIC8vIGtleSBqQ0k2MU96QTNvQUFiZTNpXHJcbiAgICAgICAgICAgIC8vIGl2IEg2TU5wYWtORXVEOUxqTm1cclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBpcF9yZWxlYXNlOiBcIndzczovL2l1c2JhbGwuY2M6MjAyMTIvXCIsXHRcdFx0XHRcdFx0Ly9zb2NrZXTmraPmnI3lnLDlnYAgd3NzOi8veHh4eHhcclxuICAgICAgICAgICAgICAgIGlwX2RlYnVnOiBcIndzczovL3Rlc3Qud3BzMTY4LmNvbToyMDIxMi8/cGc9aXVzYmFsbFwiLFx0XHRcdFx0XHRcdFx0Ly9zb2NrZXTmtYvmnI3lnLDlnYAgd3NzOi8veHh4eHhcdFx0XHRcclxuICAgICAgICAgICAgICAgIHBnOiBcImNvbS5zdXBlci5pdXNwaW5iYWxsXCIsXHRcdFx0XHRcdFx0XHRcdFx0XHQvL+WMheWQjWNvbS54eHgueHh4XHJcbiAgICAgICAgICAgICAgICBpc0RlYnVnOiBmYWxzZSxcdFx0XHRcdFx0XHQvL+aYr+WQpui/nuaOpea1i+acjVxyXG4gICAgICAgICAgICAgICAgLy8gdGVzdF9haWQ6IFwiMjM5MjgzNTcyNmQzMjQ5MlwiLFx0XHRcdFx0XHRcdFx0Ly/llK/kuIBpZO+8iOa1i+ivleeUqO+8iSDlpoLmnpzmmK/lnKjmiYvmnLrnq6/vvIxzZGvkvJroh6rlt7Hojrflj5ZcclxuICAgICAgICAgICAgICAgIHRlc3RfYWlkOiBcInh2eGN2c2Rmc2ZzZWZzZlwiLFx0XHRcdFx0XHRcdFx0Ly/llK/kuIBpZO+8iOa1i+ivleeUqO+8iSDlpoLmnpzmmK/lnKjmiYvmnLrnq6/vvIxzZGvkvJroh6rlt7Hojrflj5ZcclxuICAgICAgICAgICAgICAgIGNvZGU6IFwiaXVzYmFsbFwiLFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/muLjmiI/ku6Plj7dcclxuICAgICAgICAgICAgICAgIHRvc19pbWc6IHRoaXMuaWNvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuaXBfcmVsZWFzZSA9IFwid3NzOi8vYXVzYmFsbHByby5jYzoyMDIxMi9cIjtcdFx0XHRcdFx0XHQvL3NvY2tldOato+acjeWcsOWdgCB3c3M6Ly94eHh4eFxyXG4gICAgICAgICAgICAgICAgZGF0YS5pcF9kZWJ1ZyA9IFwid3NzOi8vdGVzdC53cHMxNjguY29tOjIwMjEyLz9wZz1hdXNiYWxscHJvXCI7XHRcdFx0XHRcdFx0Ly9zb2NrZXTmtYvmnI3lnLDlnYAgd3NzOi8veHh4eHhcdFx0XHRcclxuICAgICAgICAgICAgICAgIGRhdGEucGcgPSBcImNvbS5zdXBlci5hdXNwaW5iYWxsXCI7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvZGUgPSBcImF1c2JhbGxwcm9cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyTGFiZWwuc3RyaW5nID0gYHJlbGVhc2UgdiR7RlNESy5nZXRWZXJJbmZvKCkudmVyfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRlNESy5pbml0KGRhdGEsIChfZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXJ2ZXJEYXRhID0gX2RhdGE7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNlcnZlckRhdGEuaXNGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEZMb2cubm9ybWFsKCfmlbDmja4nLCBfZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW55So5oi35L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFVzZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8g6K+75Y+W5pWw5o2uXHJcbiAgICAgICAgICAgIHVzZXIubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgLy8g5LiO5pyN5Yqh5Zmo5qCh5q2jXHJcbiAgICAgICAgICAgIHVzZXIuZmlyc3RHb2xkID0gdXNlci5zZXJ2ZXJEYXRhLmNyZWRpdF9ncDtcclxuICAgICAgICAgICAgdXNlci5zZWNvbmRHb2xkID0gdXNlci5zZXJ2ZXJEYXRhLmNyZWRpdF9wcDtcclxuICAgICAgICAgICAgdXNlci5jcmVkaXQgPSB1c2VyLnNlcnZlckRhdGEuY3JlZGl0O1xyXG5cclxuICAgICAgICAgICAgLy8g6K+75Y+W5ri45oiP6YWN572uXHJcbiAgICAgICAgICAgIHVzZXIuc2V0THVtcERhdGEodXNlci5zZXJ2ZXJEYXRhLkFMTF9DT05GLmdhbWVEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIEZTREsuc2V0VGFzayh1c2VyLmdldExldmVsKCkpO1xyXG5cclxuICAgICAgICAgICAgdXNlci5zZXRDdXJyZW50UHJvcCgwKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VyLmdldFJhaW5Qcm9iYWJpbGl0eSgpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0UmFpblByb2JhYmlsaXR5KHVzZXIuZ2V0THVtcERhdGEoKS5yYWluUHJvYmFiaWxpdHkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDnuqLljIXphY3nva7liKTmlq1cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHVzZXIuZ2V0UmVjb3JkQmFycmllcigpLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuZ2V0UmVjb3JkQmFycmllcigpW2luZGV4XS5uYW1lID09PSBcImJ4XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldElzUmVkQW5kQ29zdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5zZXRJc1JlZEFuZENvc3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8g5pWw5o2u6ZqU5aSpXHJcbiAgICAgICAgICAgIGlmICh1c2VyLnNlcnZlckRhdGEuaXNOZXh0RGF5KSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldEF3YXJkTnVtYmVyKDApO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRJc0dldEdpZnQoZmFsc2UpOy8vIOiOt+WPlue6ouWMhVxyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRDb2xsZWN0Q29pbnMyKDApOy8v6YeR5biB56ys5LqM6Zi25q615riFMFxyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRFeHBEYXkoMCk7Ly8g5q+P5pel57uP6aqMXHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldFNwaW5Db3VudCgwKTtcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0UmFpbkF3YXJkTnVtKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDmlbDmja7pmpTlpKnnm5HlkKxcclxuICAgICAgICAgICAgRlNESy5zZXROZXh0RGF5TGlzdGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0QXdhcmROdW1iZXIoMCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldElzR2V0R2lmdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldENvbGxlY3RDb2luczIoMCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldFNwaW5Db3VudCgwKTtcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0RXhwRGF5KDApO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRSYWluQXdhcmROdW0oMCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNhdmUoMSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgdXNlci5zYXZlKCk7XHJcbiAgICAgICAgICAgIHVzZXIuc2F2ZSgxKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmuLjmiI/nirbmgIHvvIjov5nph4znlKjmnaXliJ3lp4vljJblr7nosaHmsaDvvIlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0R2FtZVN0YXV0cygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBHUG9vbC5pbml0KHsgSW5pdEVhY2g6IHsgXCJiYWxsXCI6IDUwLCBcImJ1ZmZBZGRCYWxsXCI6IDIsIFwiYnVmZkJpZ0JhbGxcIjogMiwgXCJwb2x5Z29uMVwiOiAxMCwgXCJwb2x5Z29uMlwiOiAxMCwgXCJwb2x5Z29uM1wiOiAxMCwgXCJwb2x5Z29uNFwiOiAxMCwgXCJwcFwiOiA1LCBcImdwXCI6IDUsIFwicmFpbmRvd0Npb25cIjogMTAwLCBcImNyZWRpdFwiOiA1LCBcInN0YXJcIjogMSwgXCJieFwiOiA1LCBcInN5bnRoZXRpY1wiOiAyIH0gfSlcclxuXHJcbiAgICAgICAgICAgIEZTREsuc2V0QnRuU291bmQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLkJVVFRPTik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+b5YWl5ri45oiPXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcnVuR2FtZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICAgICAgLy/lkK/nlKjniannkIbkuJbnlYxcclxuICAgICAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWFuYWdlci5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuICAgICAgICAgICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=