"use strict";
cc._RF.push(module, 'b0570jWdOFAEJFkoEcGPFvN', 'TurnTable');
// script/popup/TurnTable.ts

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
var Utils_1 = require("../common/Utils");
var User_1 = require("../common/User");
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var PopupConstants_1 = require("../common/PopupConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 轮盘
 */
var TurnTable = /** @class */ (function (_super) {
    __extends(TurnTable, _super);
    function TurnTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconSpriteFrame = []; // 更换ap gp
        _this.iconNode = null; //  节点
        _this.spinNode = null; //  节点
        _this.closeNode = null; //  节点
        _this._data = null;
        _this._awardArr = null;
        _this.isStart = false;
        return _this;
    }
    TurnTable.prototype.onEnable = function () {
        this.closeNode.active = true;
        this.spinNode.angle = 0;
        this._awardArr = User_1.user.getLumpData().spinAward;
        this.isStart = false;
        for (var i = 0; i < this._awardArr.length; i++) {
            if (this.spinNode.children[i + 1].getChildByName("New Label")) {
                this.spinNode.children[i + 1].getChildByName("New Label").getComponent(cc.Label).string = this._awardArr[i].award;
            }
        }
        if (cc.sys.os == cc.sys.OS_IOS) {
            this.iconNode.getComponent(cc.Sprite).spriteFrame = this.iconSpriteFrame[1];
        }
        else {
            this.iconNode.getComponent(cc.Sprite).spriteFrame = this.iconSpriteFrame[0];
        }
    };
    /**
     * 转盘旋转 （按钮）
     */
    TurnTable.prototype.turnAngleHandle = function () {
        var _this = this;
        if (this.isStart) {
            FSDK.showToast('The spin is starting');
            return;
        }
        if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
            this.getAwardFun();
            return;
        }
        if (User_1.user.getSpinCount() < 1) {
            this.getAwardFun();
            return;
        }
        else {
            FSDK.openVideo("spin", function () {
                _this.getAwardFun();
            }, this);
        }
    };
    TurnTable.prototype.getAwardFun = function () {
        var _this = this;
        this.closeNode.active = false;
        this.isStart = true;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.LUCK);
        // 增加次数
        var spinCount = User_1.user.getSpinCount();
        spinCount += 1;
        User_1.user.setSpinCount(spinCount);
        var level = FSDK.getCreditDif(); // 等级
        var awardData = ["", 0, "spin", false, false];
        var arrNum = Utils_1.utils.randomByWeight([0, 1, 2, 3, 4, 5], User_1.user.getLumpData().spinWeight[level]); // 要随机的数组
        if (arrNum == Number(0)) {
            var awardNum = FSDK.getCard(1);
            awardData[0] = "gp";
            if (awardNum.num <= 0) {
                arrNum = 2;
            }
            else {
                awardData[1] = awardNum.num;
            }
        }
        else if (arrNum == Number(3)) {
            var awardNum = FSDK.getCard(2);
            awardData[0] = "pp";
            if (awardNum.num <= 0) {
                arrNum = 2;
            }
            else {
                awardData[1] = awardNum.num;
            }
        }
        var rotationNum = 360 * 10 + (-arrNum * 60);
        cc.tween(this.spinNode)
            .by(4.2, { angle: rotationNum }, { easing: "sineInOut" })
            .delay(.3)
            .call(function () { return __awaiter(_this, void 0, void 0, function () {
            var iconPS;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isStart = false;
                        if (!(arrNum != Number(0) && arrNum != 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, GPool.get('creditPS')];
                    case 1:
                        iconPS = _a.sent();
                        iconPS.parent = cc.find("Canvas");
                        FSDK.setCredit('credit', this._awardArr[arrNum].award, "spin");
                        FSDK.showToast("Congratulations on receiving " + this._awardArr[arrNum].award + " gold coins");
                        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
                        return [2 /*return*/];
                    case 2:
                        Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.SUPERPRIZE, null, awardData);
                        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
                        return [2 /*return*/];
                }
            });
        }); })
            .start();
    };
    TurnTable.prototype.closeHandle = function () {
        if (this.isStart) {
            FSDK.showToast('The spin is starting');
            return;
        }
        if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
            Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
            Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
            return;
        }
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], TurnTable.prototype, "iconSpriteFrame", void 0);
    __decorate([
        property(cc.Node)
    ], TurnTable.prototype, "iconNode", void 0);
    __decorate([
        property(cc.Node)
    ], TurnTable.prototype, "spinNode", void 0);
    __decorate([
        property(cc.Node)
    ], TurnTable.prototype, "closeNode", void 0);
    TurnTable = __decorate([
        ccclass
    ], TurnTable);
    return TurnTable;
}(cc.Component));
exports.default = TurnTable;

cc._RF.pop();