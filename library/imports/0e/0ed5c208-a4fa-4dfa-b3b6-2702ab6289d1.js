"use strict";
cc._RF.push(module, '0ed5cIIpPpN+rO2JwKrYonR', 'GetPacket');
// script/popup/GetPacket.ts

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
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var User_1 = require("../common/User");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetPacket = /** @class */ (function (_super) {
    __extends(GetPacket, _super);
    function GetPacket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeThxNode = null; // 关闭按钮
        _this.cardNode = null; // 卡片节点
        _this.countNode = null; // 金币数量
        _this.cardIcon = []; // 卡片iconp
        _this.tipsLabel = null;
        _this.btnNode = []; // 按钮
        _this.creditTips = null; // 金币提示
        _this.noVideo = null;
        _this._data = null; // ["gp",1,from ,is,false] 卡片，数量， 哪里传入，是否看视频 false 不看，true 看 （默认为true）
        _this._awardNum = 0;
        _this._name = ""; // 金币 'credit'  palpay卡 'pp'	谷歌卡 'gp'
        _this.isClick = false;
        return _this;
    }
    GetPacket.prototype.onEnable = function () {
        var _this = this;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.AWARD);
        this.closeThxNode.active = false;
        this.isClick = false;
        this.scheduleOnce(function () {
            _this.closeThxNode.active = true;
        }, 2);
        this.init();
    };
    /**
     * 初始化
     */
    GetPacket.prototype.init = function () {
        // 更换图片
        switch (this._data[0]) {
            case "gp":
                this.gpFun();
                this.btnNode[0].active = true;
                this.btnNode[1].active = false;
                this.creditTips.active = false;
                break;
            case "pp":
                this.ppFun();
                this.btnNode[0].active = true;
                this.btnNode[1].active = false;
                this.creditTips.active = false;
                break;
            case "credit":
                this.creditFun();
                this.btnNode[0].active = false;
                this.btnNode[1].active = true;
                this.creditTips.active = true;
                break;
        }
        // 如果是方块传入，则要清楚宝箱并计算
        if (this._data[2] == "Brick") {
            User_1.user.setIsRedAndCost(false);
            var num = User_1.user.getAwardNumber();
            num += 1;
            User_1.user.setAwardNumber(num);
        }
        if (!this._data[3]) {
            this.btnNode[0].getComponent(cc.Sprite).spriteFrame = this.noVideo;
            this.unscheduleAllCallbacks();
        }
        // 数字
        this._awardNum = this._data[1];
        this.countNode.getComponent(cc.Label).string = "$" + this._awardNum.toFixed(2);
    };
    GetPacket.prototype.gpFun = function () {
        this._name = "gp";
        if (User_1.user.firstGold < 100) {
            this.tipsLabel.string = "Collect " + (100 - User_1.user.firstGold).toFixed(2) + " more gift card to exchange $100";
        }
        else {
            this.tipsLabel.node.active = false;
        }
        if (cc.sys.os == cc.sys.OS_IOS) {
            this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[1];
        }
        else {
            this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[0];
        }
    };
    GetPacket.prototype.ppFun = function () {
        this._name = "pp";
        if (User_1.user.secondGold < 100) {
            this.tipsLabel.string = "Collect " + (100 - User_1.user.secondGold).toFixed(2) + " more gift card to exchange $100";
        }
        else {
            this.tipsLabel.node.active = false;
        }
        this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[2];
    };
    GetPacket.prototype.creditFun = function () {
        this._name = "credit";
        this.tipsLabel.node.active = false;
        this.countNode.active = false;
        this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[3];
    };
    GetPacket.prototype.getAwardHandle = function () {
        var _this = this;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.AWARD);
        var animCionNum = 0;
        if (this._data[0] == "pp") {
            animCionNum = 1;
        }
        var cb = function () {
            if (_this._data[4]) {
                EventConstants_1.GameConstant.game.removeBarrier(_this._data[4]);
                EventConstants_1.GameConstant.game.isVideoAddBarriers();
            }
            if (EventConstants_1.GameConstant.isAward) {
                EventConstants_1.GameConstant.isAward = false;
            }
            EventConstants_1.GameConstant.game.animCion(_this._awardNum, animCionNum);
            FSDK.setCredit(_this._data[0], _this._awardNum, _this._data[2]);
            Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
        };
        // 不需要看视频
        if (!this._data[3] || !cc.sys.isNative || User_1.user.getLumpData().isDebug) {
            cb();
            return;
        }
        FSDK.openVideo(this._data[2], function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                cb();
                return [2 /*return*/];
            });
        }); }, this);
    };
    GetPacket.prototype.closeHandle = function () {
        var _this = this;
        if (this.isClick)
            return;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.AWARD);
        this.isClick = true;
        if (this._data[0] == "credit") {
            FSDK.setCredit(this._data[0], this._awardNum, this._data[2]);
            EventConstants_1.GameConstant.game.animCion(this._awardNum, 2, false);
        }
        ;
        var cb = function () {
            _this.closeThxNode.active = false;
            if (_this._data[4]) {
                EventConstants_1.GameConstant.game.removeBarrier(_this._data[4]);
                EventConstants_1.GameConstant.game.isVideoAddBarriers();
            }
            ;
            if (EventConstants_1.GameConstant.isAward) {
                EventConstants_1.GameConstant.isAward = false;
            }
            ;
            Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
        };
        if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
            cb();
            return;
        }
        ;
        FSDK.openInters(function () {
            cb();
        }, this);
    };
    /**
     * 金币领取方法
     */
    GetPacket.prototype.creditHandle = function () {
        var _this = this;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.AWARD);
        var cb = function () { return __awaiter(_this, void 0, void 0, function () {
            var iconPS;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeThxNode.active = false;
                        if (this._data[4]) {
                            EventConstants_1.GameConstant.game.removeBarrier(this._data[4]);
                            EventConstants_1.GameConstant.game.isVideoAddBarriers();
                        }
                        ;
                        if (EventConstants_1.GameConstant.isAward) {
                            EventConstants_1.GameConstant.isAward = false;
                        }
                        ;
                        if (!(this._data[0] === "credit")) return [3 /*break*/, 2];
                        return [4 /*yield*/, GPool.get('creditPS')];
                    case 1:
                        iconPS = _a.sent();
                        iconPS.parent = cc.find("Canvas");
                        FSDK.showToast("Congratulations on receiving " + this._awardNum * 2 + " gold coins");
                        _a.label = 2;
                    case 2:
                        ;
                        FSDK.setCredit(this._data[0], this._awardNum * 2, this._data[2]);
                        EventConstants_1.GameConstant.game.animCion(this._awardNum, 2, false);
                        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
                        return [2 /*return*/];
                }
            });
        }); };
        if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
            cb();
            return;
        }
        FSDK.openVideo(this._data[2], function () {
            cb();
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], GetPacket.prototype, "closeThxNode", void 0);
    __decorate([
        property(cc.Node)
    ], GetPacket.prototype, "cardNode", void 0);
    __decorate([
        property(cc.Node)
    ], GetPacket.prototype, "countNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GetPacket.prototype, "cardIcon", void 0);
    __decorate([
        property(cc.Label)
    ], GetPacket.prototype, "tipsLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GetPacket.prototype, "btnNode", void 0);
    __decorate([
        property(cc.Node)
    ], GetPacket.prototype, "creditTips", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GetPacket.prototype, "noVideo", void 0);
    GetPacket = __decorate([
        ccclass
    ], GetPacket);
    return GetPacket;
}(cc.Component));
exports.default = GetPacket;

cc._RF.pop();