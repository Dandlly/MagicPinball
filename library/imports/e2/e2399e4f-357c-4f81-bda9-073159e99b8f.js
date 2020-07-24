"use strict";
cc._RF.push(module, 'e23995PNXxPgb2pBzFZ6ZuP', 'Read');
// script/popup/Read.ts

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
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Read = /** @class */ (function (_super) {
    __extends(Read, _super);
    function Read() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        return _this;
    }
    Read.prototype.noHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        this._data[0].active = true;
        this._data[1].active = false;
        EventConstants_1.GameConstant.game.restartInit();
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
    };
    Read.prototype.yesHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (EventConstants_1.GameConstant.game.barriers.length > 0) {
            this._data[0].active = true;
            this._data[1].active = false;
            Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
            return;
        }
        this._data[0].active = true;
        this._data[1].active = false;
        EventConstants_1.GameConstant.game.init();
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
    };
    Read.prototype.closeHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
    };
    Read = __decorate([
        ccclass
    ], Read);
    return Read;
}(cc.Component));
exports.default = Read;

cc._RF.pop();