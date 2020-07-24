"use strict";
cc._RF.push(module, 'ce0b2+gmo9H0IxuP87dvY6V', 'Main');
// script/main/Main.ts

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
var User_1 = require("../common/User");
var Actions_1 = require("../common/Actions");
var EventConstants_1 = require("../common/EventConstants");
var Events_1 = require("../common/Events");
var AudioConstands_1 = require("../common/AudioConstands");
var PopupConstants_1 = require("../common/PopupConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mPlayGameBtn = null;
        _this.mtitle = null;
        _this.mGameNode = null;
        _this.mPaomaNode = null;
        _this.mGameOpenNode = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        if (!cc.sys.isNative) {
            FSDK.openBanner();
        }
        this.init();
    };
    Main.prototype.onEnable = function () {
    };
    /**
     * 初始化脚本
     */
    Main.prototype.init = function () {
        // 添加缓动
        Actions_1.actions.breatheEff(this.mPlayGameBtn);
        Actions_1.actions.breatheEff(this.mtitle, 0.95, 2);
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_BGM, AudioConstands_1.AudioName.MAIN_BGM);
        this.openPm();
    };
    /**
     * 开始游戏
     */
    Main.prototype.playGameHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (User_1.user.getRecordBarrier().length > 0) {
            var _data = [this.mGameNode, this.node];
            Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.READ, null, _data);
            return;
        }
        this.mGameNode.active = true;
        this.node.active = false;
        EventConstants_1.GameConstant.game.init();
    };
    /**
     * 打开跑马灯
     */
    Main.prototype.openPm = function () {
        FSDK.showMarQuee(this.mPaomaNode);
    };
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mPlayGameBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mtitle", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mGameNode", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mPaomaNode", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mGameOpenNode", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();