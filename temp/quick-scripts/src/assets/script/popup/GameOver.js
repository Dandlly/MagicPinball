"use strict";
cc._RF.push(module, '3d886/vbpNA5K99retBrpQy', 'GameOver');
// script/popup/GameOver.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Actions_1 = require("../common/Actions");
var User_1 = require("../common/User");
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者：Dandlly
 * 游戏结算弹窗
 */
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resurgenceNode = null; // 复活
        _this.restartNode = null; // 重新开始
        _this.isDoudle = false;
        return _this;
    }
    GameOver.prototype.onEnable = function () {
        this.isDoudle = false;
        if (!EventConstants_1.GameConstant.resurgenceVideo) {
            EventConstants_1.GameConstant.resurgenceVideo = true;
            // FSDK.preloadVideo("revive");
        }
        // 呼吸
        Actions_1.actions.breatheEff(this.resurgenceNode);
        if (User_1.user.getCurrnetReviveNum() <= 0) {
            this.resurgenceNode.active = false;
            Actions_1.actions.breatheEff(this.restartNode);
        }
    };
    /**
     * 复活
     */
    GameOver.prototype.resurgenceHandle = function () {
        var _this = this;
        if (this.isDoudle)
            return;
        this.isDoudle = true;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
            User_1.user.setCurrnetReviveNum();
            EventConstants_1.GameConstant.game.resurgence();
            Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
            return;
        }
        FSDK.openVideo("revive", function () {
            User_1.user.setCurrnetReviveNum();
            FSDK.openInters(function () {
                EventConstants_1.GameConstant.game.resurgence();
                Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
            }, _this);
        }, this);
    };
    /**
     * 重新开始
     */
    GameOver.prototype.restartHandle = function () {
        if (this.isDoudle)
            return;
        this.isDoudle = true;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        EventConstants_1.GameConstant.game.restartInit();
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
        var num = User_1.user.getLumpData().reviveNum;
        User_1.user.setCurrnetReviveNum(num);
    };
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "resurgenceNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "restartNode", void 0);
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

cc._RF.pop();