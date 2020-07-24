
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/popup/GetPacket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwb3B1cFxcR2V0UGFja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQzFDLDJEQUFvRTtBQUNwRSwyREFBcUQ7QUFDckQsdUNBQXNDO0FBR2hDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUF3T0M7UUFyT0csa0JBQVksR0FBWSxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBR3JDLGNBQVEsR0FBWSxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBR2pDLGVBQVMsR0FBWSxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBR2xDLGNBQVEsR0FBcUIsRUFBRSxDQUFDLENBQUEsVUFBVTtRQUcxQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYyxFQUFFLENBQUMsQ0FBQyxLQUFLO1FBRzlCLGdCQUFVLEdBQVksSUFBSSxDQUFDLENBQUMsT0FBTztRQUduQyxhQUFPLEdBQW1CLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWUsSUFBSSxDQUFDLENBQUcsc0VBQXNFO1FBRWxHLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsV0FBSyxHQUFXLEVBQUUsQ0FBQyxDQUFBLHFDQUFxQztRQUV4RCxhQUFPLEdBQVksS0FBSyxDQUFDOztJQXlNckMsQ0FBQztJQXhNRyw0QkFBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsaUJBQWlCLEVBQUUsMEJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxD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UUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ087SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTTtJQXZCZCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdU83QjtJQUFELGdCQUFDO0NBdk9ELEFBdU9DLENBdk9zQyxFQUFFLENBQUMsU0FBUyxHQXVPbEQ7a0JBdk9vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudHNcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50cywgR2FtZUNvbnN0YW50IH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudENvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBdWRpb05hbWUgfSBmcm9tIFwiLi4vY29tbW9uL0F1ZGlvQ29uc3RhbmRzXCI7XHJcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi4vY29tbW9uL1VzZXJcIjtcclxuaW1wb3J0IHsgUG9wVXBOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9Qb3B1cENvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldFBhY2tldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNsb3NlVGh4Tm9kZTogY2MuTm9kZSA9IG51bGw7IC8vIOWFs+mXreaMiemSrlxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsOyAvLyDljaHniYfoioLngrlcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvdW50Tm9kZTogY2MuTm9kZSA9IG51bGw7IC8vIOmHkeW4geaVsOmHj1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGNhcmRJY29uOiBjYy5TcHJpdGVGcmFtZVtdID0gW107Ly8g5Y2h54mHaWNvbnBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXBzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk5vZGU6IGNjLk5vZGVbXSA9IFtdOyAvLyDmjInpkq5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNyZWRpdFRpcHM6IGNjLk5vZGUgPSBudWxsOyAvLyDph5HluIHmj5DnpLpcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBub1ZpZGVvOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PiA9IG51bGw7ICAgLy8gW1wiZ3BcIiwxLGZyb20gLGlzLGZhbHNlXSDljaHniYfvvIzmlbDph4/vvIwg5ZOq6YeM5Lyg5YWl77yM5piv5ZCm55yL6KeG6aKRIGZhbHNlIOS4jeeci++8jHRydWUg55yLIO+8iOm7mOiupOS4unRydWXvvIlcclxuXHJcbiAgICBwcml2YXRlIF9hd2FyZE51bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyA9IFwiXCI7Ly8g6YeR5biBICdjcmVkaXQnICBwYWxwYXnljaEgJ3BwJ1x06LC35q2M5Y2hICdncCdcclxuXHJcbiAgICBwcml2YXRlIGlzQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5BV0FSRCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZVRoeE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVGh4Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDIpXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyDmm7TmjaLlm77niYdcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2RhdGFbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImdwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdwRnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk5vZGVbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTm9kZVsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0VGlwcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucHBGdW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTm9kZVswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Ob2RlWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVkaXRUaXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjcmVkaXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0RnVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk5vZGVbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk5vZGVbMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0VGlwcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlpoLmnpzmmK/mlrnlnZfkvKDlhaXvvIzliJnopoHmuIXmpZrlrp3nrrHlubborqHnrpdcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVsyXSA9PSBcIkJyaWNrXCIpIHtcclxuICAgICAgICAgICAgdXNlci5zZXRJc1JlZEFuZENvc3QoZmFsc2UpO1xyXG4gICAgICAgICAgICBsZXQgbnVtID0gdXNlci5nZXRBd2FyZE51bWJlcigpO1xyXG4gICAgICAgICAgICBudW0gKz0gMTtcclxuICAgICAgICAgICAgdXNlci5zZXRBd2FyZE51bWJlcihudW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhWzNdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTm9kZVswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubm9WaWRlbztcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmlbDlrZdcclxuICAgICAgICB0aGlzLl9hd2FyZE51bSA9IHRoaXMuX2RhdGFbMV07XHJcbiAgICAgICAgdGhpcy5jb3VudE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiRcIiArIHRoaXMuX2F3YXJkTnVtLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgZ3BGdW4oKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IFwiZ3BcIjtcclxuICAgICAgICBpZiAodXNlci5maXJzdEdvbGQgPCAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy50aXBzTGFiZWwuc3RyaW5nID0gYENvbGxlY3QgJHsoMTAwIC0gdXNlci5maXJzdEdvbGQpLnRvRml4ZWQoMil9IG1vcmUgZ2lmdCBjYXJkIHRvIGV4Y2hhbmdlICQxMDBgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlwc0xhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZEljb25bMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZEljb25bMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBwRnVuKCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBcInBwXCI7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLnNlY29uZEdvbGQgPCAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy50aXBzTGFiZWwuc3RyaW5nID0gYENvbGxlY3QgJHsoMTAwIC0gdXNlci5zZWNvbmRHb2xkKS50b0ZpeGVkKDIpfSBtb3JlIGdpZnQgY2FyZCB0byBleGNoYW5nZSAkMTAwYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJkTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZEljb25bMl07XHJcbiAgICB9XHJcblxyXG4gICAgY3JlZGl0RnVuKCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBcImNyZWRpdFwiO1xyXG4gICAgICAgIHRoaXMudGlwc0xhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb3VudE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYXJkTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZEljb25bM107XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEF3YXJkSGFuZGxlKCkge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5BV0FSRCk7XHJcblxyXG4gICAgICAgIGxldCBhbmltQ2lvbk51bSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbMF0gPT0gXCJwcFwiKSB7XHJcbiAgICAgICAgICAgIGFuaW1DaW9uTnVtID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFbNF0pIHtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25zdGFudC5nYW1lLnJlbW92ZUJhcnJpZXIodGhpcy5fZGF0YVs0XSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZS5pc1ZpZGVvQWRkQmFycmllcnMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKEdhbWVDb25zdGFudC5pc0F3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uc3RhbnQuaXNBd2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZS5hbmltQ2lvbih0aGlzLl9hd2FyZE51bSwgYW5pbUNpb25OdW0pO1xyXG5cclxuICAgICAgICAgICAgRlNESy5zZXRDcmVkaXQodGhpcy5fZGF0YVswXSwgdGhpcy5fYXdhcmROdW0sIHRoaXMuX2RhdGFbMl0pO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5ISURFX1BPUFVQKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4jemcgOimgeeci+inhumikVxyXG4gICAgICAgIGlmICghdGhpcy5fZGF0YVszXSB8fCAhY2Muc3lzLmlzTmF0aXZlIHx8IHVzZXIuZ2V0THVtcERhdGEoKS5pc0RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEZTREsub3BlblZpZGVvKHRoaXMuX2RhdGFbMl0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NsaWNrKSByZXR1cm47XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLkFXQVJEKTtcclxuICAgICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGF0YVswXSA9PSBcImNyZWRpdFwiKSB7XHJcbiAgICAgICAgICAgIEZTREsuc2V0Q3JlZGl0KHRoaXMuX2RhdGFbMF0sIHRoaXMuX2F3YXJkTnVtLCB0aGlzLl9kYXRhWzJdKVxyXG4gICAgICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZS5hbmltQ2lvbih0aGlzLl9hd2FyZE51bSwgMiwgZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjYiA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVRoeE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YVs0XSkge1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUucmVtb3ZlQmFycmllcih0aGlzLl9kYXRhWzRdKTtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25zdGFudC5nYW1lLmlzVmlkZW9BZGRCYXJyaWVycygpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKEdhbWVDb25zdGFudC5pc0F3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uc3RhbnQuaXNBd2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5ISURFX1BPUFVQKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSB8fCB1c2VyLmdldEx1bXBEYXRhKCkuaXNEZWJ1Zykge1xyXG4gICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgRlNESy5vcGVuSW50ZXJzKCgpID0+IHtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHkeW4gemihuWPluaWueazlVxyXG4gICAgICovXHJcbiAgICBjcmVkaXRIYW5kbGUoKSB7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLkFXQVJEKTtcclxuXHJcbiAgICAgICAgbGV0IGNiID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVGh4Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhWzRdKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZS5yZW1vdmVCYXJyaWVyKHRoaXMuX2RhdGFbNF0pO1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUuaXNWaWRlb0FkZEJhcnJpZXJzKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoR2FtZUNvbnN0YW50LmlzQXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25zdGFudC5pc0F3YXJkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGF0YVswXSA9PT0gXCJjcmVkaXRcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGljb25QUyA9IGF3YWl0IEdQb29sLmdldCgnY3JlZGl0UFMnKTtcclxuICAgICAgICAgICAgICAgIGljb25QUy5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoYENvbmdyYXR1bGF0aW9ucyBvbiByZWNlaXZpbmcgJHt0aGlzLl9hd2FyZE51bSAqIDJ9IGdvbGQgY29pbnNgKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEZTREsuc2V0Q3JlZGl0KHRoaXMuX2RhdGFbMF0sIHRoaXMuX2F3YXJkTnVtICogMiwgdGhpcy5fZGF0YVsyXSlcclxuICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUuYW5pbUNpb24odGhpcy5fYXdhcmROdW0sIDIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9QT1BVUCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSB8fCB1c2VyLmdldEx1bXBEYXRhKCkuaXNEZWJ1Zykge1xyXG4gICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBGU0RLLm9wZW5WaWRlbyh0aGlzLl9kYXRhWzJdLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==