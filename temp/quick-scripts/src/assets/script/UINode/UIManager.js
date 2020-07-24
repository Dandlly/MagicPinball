"use strict";
cc._RF.push(module, '3151bb3sstE+JoEUHR0D4w8', 'UIManager');
// script/UINode/UIManager.ts

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
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var PopupConstants_1 = require("../common/PopupConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.first_Label = null;
        _this.second_Label = null;
        _this.coin_Label = null;
        _this.wxLoginAndSetting = [];
        _this.FSDKNode = null;
        return _this;
    }
    UIManager.prototype.start = function () {
        this.initEvents();
        this.init();
    };
    UIManager.prototype.onDestroy = function () {
        this.removeEvents();
    };
    UIManager.prototype.initEvents = function () {
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.UPDATAUI, this.updateIcon, this);
    };
    UIManager.prototype.removeEvents = function () {
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.UPDATAUI);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.UPDATALEVEL);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.UPDATASCORE);
    };
    UIManager.prototype.init = function () {
        this.first_Label.string = User_1.user.firstGold.toFixed(2);
        this.second_Label.string = User_1.user.secondGold.toFixed(2);
        this.coin_Label.string = User_1.user.credit.toFixed(0);
    };
    UIManager.prototype.updateIcon = function () {
        this.first_Label.string = User_1.user.firstGold.toFixed(2);
        this.second_Label.string = User_1.user.secondGold.toFixed(2);
        this.coin_Label.string = User_1.user.credit.toFixed(0);
    };
    UIManager.prototype.firstHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
    };
    UIManager.prototype.secondHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
    };
    UIManager.prototype.settingHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.SETTING);
    };
    UIManager.prototype.getgpCardHandle = function () {
        if (User_1.user.serverData.isBlack)
            return;
        FSDK.showTwoCard(1, this.FSDKNode);
    };
    UIManager.prototype.getppCardHandle = function () {
        if (User_1.user.serverData.isBlack)
            return;
        FSDK.showTwoCard(0, this.FSDKNode);
    };
    UIManager.prototype.getCreditHandle = function () {
        if (User_1.user.serverData.isBlack)
            return;
        FSDK.showTransList(this.FSDKNode, 1);
    };
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "first_Label", void 0);
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "second_Label", void 0);
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "coin_Label", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "wxLoginAndSetting", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "FSDKNode", void 0);
    UIManager = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

cc._RF.pop();