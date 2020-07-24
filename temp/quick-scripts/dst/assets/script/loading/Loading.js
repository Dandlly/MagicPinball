
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
            setTimeout(function () {
                FSDK.initSZSDK();
            }, 5000);
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
                ip_release: "wss://ausball.cc:20212/",
                ip_debug: "wss://test.wps168.com:20212/?pg=ausball",
                pg: "com.yehappy.ball",
                isDebug: false,
                // test_aid: "2392835726d32492",							//唯一id（测试用） 如果是在手机端，sdk会自己获取
                test_aid: "xvxcvsdfsfsefsf",
                code: "ausball",
                tos_img: _this.icon
            };
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                data.ip_release = "wss://ausball.cc:20212/", //socket正服地址 wss://xxxxx
                    data.ip_debug = "wss://test.wps168.com:20212/?pg=ausball", //socket测服地址 wss://xxxxx			
                    data.pg = "com.yehappy.ball",
                    data.code = "ausball";
            }
            if (cc.sys.isNative) {
                _this.verLabel.string = "release v" + FSDK.getVerInfo().ver;
            }
            FSDK.init(data, function (_data) {
                User_1.user.serverData = _data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2FkaW5nXFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQW9FO0FBQ3BFLHlEQUFvRDtBQUNwRCx1Q0FBc0M7QUFDdEMsNkNBQTRDO0FBRTVDLHdDQUFtQztBQUNuQywwQ0FBcUM7QUFDckMsMkNBQTBDO0FBQzFDLDJEQUFxRDtBQUUvQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOztHQUVHO0FBRUg7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUFzT0M7UUFuT0csVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFtQixJQUFJLENBQUE7UUFHbEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixVQUFJLEdBQW1CLElBQUksQ0FBQztRQUc1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUVwQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDOztJQTRNdEMsQ0FBQztJQTFNRyx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSw2QkFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBYyxDQUFDLENBQUM7UUFDM0QsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lB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QUksQ0FBQzt1Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1c7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDUztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ0c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVTtJQXRCWCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBcU8zQjtJQUFELGNBQUM7Q0FyT0QsQUFxT0MsQ0FyT29DLEVBQUUsQ0FBQyxTQUFTLEdBcU9oRDtrQkFyT29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ29uc3RhbnQsIEdhbWVFdmVudHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50Q29uc3RhbnRzXCI7XHJcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4uL2NvbW1vbi9Vc2VyXCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tIFwiLi4vY29tbW9uL0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2FjaGVGaWxlTmFtZXMsIENhY2hlS2V5LCBDQUNIRV9DT05GSUdfUEFUSCwgY2FjaGUgfSBmcm9tIFwiLi4vY29tbW9uL0NhY2hlXCI7XHJcbmltcG9ydCBGU2lkZWJhciBmcm9tIFwiLi4vRlNpZGViYXJcIjtcclxuaW1wb3J0IEZIaWRlTm9kZSBmcm9tIFwiLi4vRkhpZGVOb2RlXCI7XHJcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRzXCI7XHJcbmltcG9ydCB7IEF1ZGlvTmFtZSB9IGZyb20gXCIuLi9jb21tb24vQXVkaW9Db25zdGFuZHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiDkvZzogIU6RGFuZGxseVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsb2dvTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbG9hZGluZ0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdmVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpc0JyZWFrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlVG90YWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9pc1JlYWR5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIEZMb2cubm9ybWFsKHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuTGFiZWwpKTtcclxuICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZSA9IHRoaXMuZ2FtZS5nZXRDb21wb25lbnQoR2FtZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGFjdGlvbnMuYnJlYXRoZUVmZih0aGlzLmxvZ29Ob2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICBGU0RLLmluaXRTWlNESygpO1xyXG4gICAgICAgICAgICB9LDUwMDApXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8g5Yqg6L296aG16L+H5LiJ5bin5YaN5omn6KGM6YC76L6RXHJcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZVRvdGFsIDwgMykge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUb3RhbCsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlVG90YWwgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA+PSAxICYmIHRoaXMuX2lzUmVhZHkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRlNpZGViYXIpLmluaXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCcmVha05vZGUuZ2V0Q29tcG9uZW50KEZIaWRlTm9kZSkuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuZ2V0SXNMb2FkaW5nKCkgJiYgdXNlci5zZXJ2ZXJEYXRhLmxvZ2luX2RheXMgPT0gMSAmJiB1c2VyLnNlcnZlckRhdGEubG9naW5fY250ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldElzTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEZTREsub3BlbkJhbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZTREsudW1lbmdFdmVudChcIkdhbWVfTG9hZGluZ1wiLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgRkxvZy5ub3JtYWwoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgKz0gMC4wMTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdMYWJlbC5zdHJpbmcgPSBNYXRoLmZsb29yKHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgKiAxMDApICsgJyUnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgRlNESy5zZXRMb2coZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJZTS0QgXHJcbiAgICAgICAgdGhpcy5pbml0U0RLKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOeUqOaIt+aVsOaNrlxyXG4gICAgICAgICAgICB0aGlzLmluaXRVc2VyKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEdhbWVTdGF1dHMoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8g5byA5aeL5ri45oiPXHJcbiAgICAgICAgICAgIHRoaXMucnVuR2FtZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICog5Yid5aeL5YyWU0RLXHJcbiAgICAgICogKOWNoOaNrui/m+W6puadoeeZvuWIhuS5i+WNgei/m+W6pilcclxuICAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdFNESygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOS7o+WPtyBhY25iYWxsXHJcbiAgICAgICAgICAgIC8vIOWMheWQjSBjb20udG9wb25lZ2FtZXMuYmFsbFxyXG4gICAgICAgICAgICAvLyDmraPmnI3pk77mjqUgd3NzOi8vYXBpLmVsc3d6LnRvcG9uZWdhbWVzLmNuOjIwMjEyLz9wZz1hY25iYWxsXHJcbiAgICAgICAgICAgIC8vIOa1i+acjemTvuaOpSB3c3M6Ly90ZXN0LndwczE2OC5jb206MjAyMTIvP3BnPWFjbmJhbGxcclxuICAgICAgICAgICAgLy8ga2V5IGpDSTYxT3pBM29BQWJlM2lcclxuICAgICAgICAgICAgLy8gaXYgSDZNTnBha05FdUQ5TGpObVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlwX3JlbGVhc2U6IFwid3NzOi8vYXVzYmFsbC5jYzoyMDIxMi9cIixcdFx0XHRcdFx0XHQvL3NvY2tldOato+acjeWcsOWdgCB3c3M6Ly94eHh4eFxyXG4gICAgICAgICAgICAgICAgaXBfZGVidWc6IFwid3NzOi8vdGVzdC53cHMxNjguY29tOjIwMjEyLz9wZz1hdXNiYWxsXCIsXHRcdFx0XHRcdFx0XHQvL3NvY2tldOa1i+acjeWcsOWdgCB3c3M6Ly94eHh4eFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgcGc6IFwiY29tLnllaGFwcHkuYmFsbFwiLFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/ljIXlkI1jb20ueHh4Lnh4eFxyXG4gICAgICAgICAgICAgICAgaXNEZWJ1ZzogZmFsc2UsXHRcdFx0XHRcdFx0Ly/mmK/lkKbov57mjqXmtYvmnI1cclxuICAgICAgICAgICAgICAgIC8vIHRlc3RfYWlkOiBcIjIzOTI4MzU3MjZkMzI0OTJcIixcdFx0XHRcdFx0XHRcdC8v5ZSv5LiAaWTvvIjmtYvor5XnlKjvvIkg5aaC5p6c5piv5Zyo5omL5py656uv77yMc2Rr5Lya6Ieq5bex6I635Y+WXHJcbiAgICAgICAgICAgICAgICB0ZXN0X2FpZDogXCJ4dnhjdnNkZnNmc2Vmc2ZcIixcdFx0XHRcdFx0XHRcdC8v5ZSv5LiAaWTvvIjmtYvor5XnlKjvvIkg5aaC5p6c5piv5Zyo5omL5py656uv77yMc2Rr5Lya6Ieq5bex6I635Y+WXHJcbiAgICAgICAgICAgICAgICBjb2RlOiBcImF1c2JhbGxcIixcdFx0XHRcdFx0XHRcdFx0XHRcdC8v5ri45oiP5Luj5Y+3XHJcbiAgICAgICAgICAgICAgICB0b3NfaW1nOiB0aGlzLmljb25cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5pcF9yZWxlYXNlID0gXCJ3c3M6Ly9hdXNiYWxsLmNjOjIwMjEyL1wiLFx0XHRcdFx0XHRcdC8vc29ja2V05q2j5pyN5Zyw5Z2AIHdzczovL3h4eHh4XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pcF9kZWJ1ZyA9IFwid3NzOi8vdGVzdC53cHMxNjguY29tOjIwMjEyLz9wZz1hdXNiYWxsXCIsXHRcdFx0XHRcdFx0XHQvL3NvY2tldOa1i+acjeWcsOWdgCB3c3M6Ly94eHh4eFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucGcgPSBcImNvbS55ZWhhcHB5LmJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvZGUgPSBcImF1c2JhbGxcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyTGFiZWwuc3RyaW5nID0gYHJlbGVhc2UgdiR7RlNESy5nZXRWZXJJbmZvKCkudmVyfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRlNESy5pbml0KGRhdGEsIChfZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXJ2ZXJEYXRhID0gX2RhdGE7XHJcbiAgICAgICAgICAgICAgICBGTG9nLm5vcm1hbCgn5pWw5o2uJywgX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlueUqOaIt+S/oeaBr1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRVc2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOivu+WPluaVsOaNrlxyXG4gICAgICAgICAgICB1c2VyLmxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4juacjeWKoeWZqOagoeato1xyXG4gICAgICAgICAgICB1c2VyLmZpcnN0R29sZCA9IHVzZXIuc2VydmVyRGF0YS5jcmVkaXRfZ3A7XHJcbiAgICAgICAgICAgIHVzZXIuc2Vjb25kR29sZCA9IHVzZXIuc2VydmVyRGF0YS5jcmVkaXRfcHA7XHJcbiAgICAgICAgICAgIHVzZXIuY3JlZGl0ID0gdXNlci5zZXJ2ZXJEYXRhLmNyZWRpdDtcclxuXHJcbiAgICAgICAgICAgIC8vIOivu+WPlua4uOaIj+mFjee9rlxyXG4gICAgICAgICAgICB1c2VyLnNldEx1bXBEYXRhKHVzZXIuc2VydmVyRGF0YS5BTExfQ09ORi5nYW1lRGF0YSk7XHJcblxyXG4gICAgICAgICAgICBGU0RLLnNldFRhc2sodXNlci5nZXRMZXZlbCgpKTtcclxuXHJcbiAgICAgICAgICAgIHVzZXIuc2V0Q3VycmVudFByb3AoMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlci5nZXRSYWluUHJvYmFiaWxpdHkoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldFJhaW5Qcm9iYWJpbGl0eSh1c2VyLmdldEx1bXBEYXRhKCkucmFpblByb2JhYmlsaXR5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g57qi5YyF6YWN572u5Yik5patXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB1c2VyLmdldFJlY29yZEJhcnJpZXIoKS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLmdldFJlY29yZEJhcnJpZXIoKVtpbmRleF0ubmFtZSA9PT0gXCJieFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5zZXRJc1JlZEFuZENvc3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc2V0SXNSZWRBbmRDb3N0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIOaVsOaNrumalOWkqVxyXG4gICAgICAgICAgICBpZiAodXNlci5zZXJ2ZXJEYXRhLmlzTmV4dERheSkge1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRBd2FyZE51bWJlcigwKTtcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0SXNHZXRHaWZ0KGZhbHNlKTsvLyDojrflj5bnuqLljIVcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0Q29sbGVjdENvaW5zMigwKTsvL+mHkeW4geesrOS6jOmYtuautea4hTBcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0RXhwRGF5KDApOy8vIOavj+aXpee7j+mqjFxyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRTcGluQ291bnQoMCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldFJhaW5Bd2FyZE51bSgwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5pWw5o2u6ZqU5aSp55uR5ZCsXHJcbiAgICAgICAgICAgIEZTREsuc2V0TmV4dERheUxpc3RlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldEF3YXJkTnVtYmVyKDApO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRJc0dldEdpZnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRDb2xsZWN0Q29pbnMyKDApO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRTcGluQ291bnQoMCk7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldEV4cERheSgwKTtcclxuICAgICAgICAgICAgICAgIHVzZXIuc2V0UmFpbkF3YXJkTnVtKDApO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zYXZlKDEpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgIHVzZXIuc2F2ZSgpO1xyXG4gICAgICAgICAgICB1c2VyLnNhdmUoMSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5ri45oiP54q25oCB77yI6L+Z6YeM55So5p2l5Yid5aeL5YyW5a+56LGh5rGg77yJXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdEdhbWVTdGF1dHMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgR1Bvb2wuaW5pdCh7IEluaXRFYWNoOiB7IFwiYmFsbFwiOiA1MCwgXCJidWZmQWRkQmFsbFwiOiAyLCBcImJ1ZmZCaWdCYWxsXCI6IDIsIFwicG9seWdvbjFcIjogMTAsIFwicG9seWdvbjJcIjogMTAsIFwicG9seWdvbjNcIjogMTAsIFwicG9seWdvbjRcIjogMTAsIFwicHBcIjogNSwgXCJncFwiOiA1LCBcInJhaW5kb3dDaW9uXCI6IDEwMCwgXCJjcmVkaXRcIjogNSwgXCJzdGFyXCI6IDEsIFwiYnhcIjogNSwgXCJzeW50aGV0aWNcIjogMiB9IH0pXHJcblxyXG4gICAgICAgICAgICBGU0RLLnNldEJ0blNvdW5kKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CVVRUT04pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/m+WFpea4uOaIj1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJ1bkdhbWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIC8v5ZCv55So54mp55CG5LiW55WMXHJcbiAgICAgICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hbmFnZXIuZW5hYmxlZEFjY3VtdWxhdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19