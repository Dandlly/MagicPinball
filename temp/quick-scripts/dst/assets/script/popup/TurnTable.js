
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/popup/TurnTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwb3B1cFxcVHVyblRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFDMUMsMkRBQXNEO0FBQ3RELDJEQUFxRDtBQUNyRCwyREFBcUQ7QUFFL0MsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUM1Qzs7R0FFRztBQUVIO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBeUlDO1FBdElHLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQSxDQUFBLFVBQVU7UUFHaEQsY0FBUSxHQUFZLElBQUksQ0FBQyxDQUFFLE1BQU07UUFHakMsY0FBUSxHQUFZLElBQUksQ0FBQyxDQUFFLE1BQU07UUFHakMsZUFBUyxHQUFZLElBQUksQ0FBQyxDQUFFLE1BQU07UUFFMUIsV0FBSyxHQUFlLElBQUksQ0FBQTtRQUN4QixlQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBeUhyQyxDQUFDO0lBdkhHLDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FB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SUFDdkMsQ0FBQztJQXBJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBWFQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdJN0I7SUFBRCxnQkFBQztDQXhJRCxBQXdJQyxDQXhJc0MsRUFBRSxDQUFDLFNBQVMsR0F3SWxEO2tCQXhJb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4uL2NvbW1vbi9Vc2VyXCI7XHJcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRzXCI7XHJcbmltcG9ydCB7IEdhbWVFdmVudHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBvcFVwTmFtZSB9IGZyb20gXCIuLi9jb21tb24vUG9wdXBDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQXVkaW9OYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9BdWRpb0NvbnN0YW5kc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOi9ruebmFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVyblRhYmxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGljb25TcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWVbXSA9IFtdLy8g5pu05o2iYXAgZ3BcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGljb25Ob2RlOiBjYy5Ob2RlID0gbnVsbDsgIC8vICDoioLngrlcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwaW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDsgIC8vICDoioLngrlcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNsb3NlTm9kZTogY2MuTm9kZSA9IG51bGw7ICAvLyAg6IqC54K5XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PiA9IG51bGxcclxuICAgIHByaXZhdGUgX2F3YXJkQXJyOiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc1N0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwaW5Ob2RlLmFuZ2xlID0gMDtcclxuICAgICAgICB0aGlzLl9hd2FyZEFyciA9IHVzZXIuZ2V0THVtcERhdGEoKS5zcGluQXdhcmQ7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hd2FyZEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGluTm9kZS5jaGlsZHJlbltpICsgMV0uZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Bpbk5vZGUuY2hpbGRyZW5baSArIDFdLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5fYXdhcmRBcnJbaV0uYXdhcmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xyXG4gICAgICAgICAgICB0aGlzLmljb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uU3ByaXRlRnJhbWVbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNwcml0ZUZyYW1lWzBdO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L2s55uY5peL6L2sIO+8iOaMiemSru+8iVxyXG4gICAgICovXHJcbiAgICB0dXJuQW5nbGVIYW5kbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICBGU0RLLnNob3dUb2FzdCgnVGhlIHNwaW4gaXMgc3RhcnRpbmcnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSB8fCB1c2VyLmdldEx1bXBEYXRhKCkuaXNEZWJ1Zykge1xyXG4gICAgICAgICAgICB0aGlzLmdldEF3YXJkRnVuKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VyLmdldFNwaW5Db3VudCgpIDwgMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldEF3YXJkRnVuKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBGU0RLLm9wZW5WaWRlbyhcInNwaW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBd2FyZEZ1bigpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXdhcmRGdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLkxVQ0spXHJcblxyXG4gICAgICAgIC8vIOWinuWKoOasoeaVsFxyXG4gICAgICAgIGxldCBzcGluQ291bnQgPSB1c2VyLmdldFNwaW5Db3VudCgpO1xyXG4gICAgICAgIHNwaW5Db3VudCArPSAxO1xyXG4gICAgICAgIHVzZXIuc2V0U3BpbkNvdW50KHNwaW5Db3VudCk7XHJcblxyXG4gICAgICAgIGxldCBsZXZlbCA9IEZTREsuZ2V0Q3JlZGl0RGlmKCk7Ly8g562J57qnXHJcblxyXG4gICAgICAgIGxldCBhd2FyZERhdGEgPSBbXCJcIiwgMCwgXCJzcGluXCIsIGZhbHNlLCBmYWxzZV07XHJcblxyXG4gICAgICAgIGxldCBhcnJOdW06IG51bWJlciA9IHV0aWxzLnJhbmRvbUJ5V2VpZ2h0KFswLCAxLCAyLCAzLCA0LCA1XSwgdXNlci5nZXRMdW1wRGF0YSgpLnNwaW5XZWlnaHRbbGV2ZWxdKTsvLyDopoHpmo/mnLrnmoTmlbDnu4RcclxuXHJcbiAgICAgICAgaWYgKGFyck51bSA9PSBOdW1iZXIoMCkpIHtcclxuICAgICAgICAgICAgbGV0IGF3YXJkTnVtOiBhbnkgPSBGU0RLLmdldENhcmQoMSk7XHJcbiAgICAgICAgICAgIGF3YXJkRGF0YVswXSA9IFwiZ3BcIjtcclxuICAgICAgICAgICAgaWYgKGF3YXJkTnVtLm51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJOdW0gPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhcmREYXRhWzFdID0gYXdhcmROdW0ubnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcnJOdW0gPT0gTnVtYmVyKDMpKSB7XHJcbiAgICAgICAgICAgIGxldCBhd2FyZE51bTogYW55ID0gRlNESy5nZXRDYXJkKDIpO1xyXG4gICAgICAgICAgICBhd2FyZERhdGFbMF0gPSBcInBwXCI7XHJcbiAgICAgICAgICAgIGlmIChhd2FyZE51bS5udW0gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgYXJyTnVtID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF3YXJkRGF0YVsxXSA9IGF3YXJkTnVtLm51bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvdGF0aW9uTnVtOiBudW1iZXIgPSAzNjAgKiAxMCArICgtYXJyTnVtICogNjApO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3Bpbk5vZGUpXHJcbiAgICAgICAgICAgIC5ieSg0LjIsIHsgYW5nbGU6IHJvdGF0aW9uTnVtIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXHJcbiAgICAgICAgICAgIC5kZWxheSguMylcclxuICAgICAgICAgICAgLmNhbGwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyTnVtICE9IE51bWJlcigwKSAmJiBhcnJOdW0gIT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJk+W8gOWuneeusVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpY29uUFMgPSBhd2FpdCBHUG9vbC5nZXQoJ2NyZWRpdFBTJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvblBTLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEZTREsuc2V0Q3JlZGl0KCdjcmVkaXQnLCB0aGlzLl9hd2FyZEFyclthcnJOdW1dLmF3YXJkLCBcInNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoYENvbmdyYXR1bGF0aW9ucyBvbiByZWNlaXZpbmcgJHt0aGlzLl9hd2FyZEFyclthcnJOdW1dLmF3YXJkfSBnb2xkIGNvaW5zYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9QT1BVUCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5TSE9XX1BPUFVQLCBQb3BVcE5hbWUuU1VQRVJQUklaRSwgbnVsbCwgYXdhcmREYXRhKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9QT1BVUCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICBGU0RLLnNob3dUb2FzdCgnVGhlIHNwaW4gaXMgc3RhcnRpbmcnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUgfHwgdXNlci5nZXRMdW1wRGF0YSgpLmlzRGVidWcpIHtcclxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLkJVVFRPTik7XHJcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9QT1BVUCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CVVRUT04pO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9QT1BVUCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==