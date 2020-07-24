"use strict";
cc._RF.push(module, 'a9a83YFGtdJ6rwkJ6Y9ES+f', 'gameStart');
// script/game/gameStart.ts

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
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var User_1 = require("../common/User");
var PopupConstants_1 = require("../common/PopupConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var gameStart = /** @class */ (function (_super) {
    __extends(gameStart, _super);
    function gameStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubbleTips = [];
        return _this;
    }
    gameStart.prototype.onLoad = function () {
        cc.game.on(cc.game.EVENT_HIDE, function () {
            //处理游戏切到后台时的事件
            User_1.user.save();
            User_1.user.save(1); // 数据存服务端
        }, this);
        cc.game.on(cc.game.EVENT_SHOW, function () {
            //处理游戏切到后台时的事件
            User_1.user.save();
            User_1.user.save(1); // 数据存服务端
        }, this);
    };
    gameStart.prototype.onDestroy = function () {
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.BUBBLETPIS);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.CLOSEBUBBLE);
    };
    /**
     * 转盘
     */
    gameStart.prototype.turntableHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (EventConstants_1.GameConstant.isShoot) {
            FSDK.showToast("The current state can not be opened");
            return;
        }
        if (User_1.user.getSpinCount() >= 15) {
            FSDK.showToast("Spin limit reached today");
            return;
        }
        Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.TURNTABLE);
    };
    __decorate([
        property(cc.Node)
    ], gameStart.prototype, "bubbleTips", void 0);
    gameStart = __decorate([
        ccclass
    ], gameStart);
    return gameStart;
}(cc.Component));
exports.default = gameStart;

cc._RF.pop();