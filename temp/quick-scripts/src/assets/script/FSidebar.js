"use strict";
cc._RF.push(module, 'ae58cPVhCZOObGhj/fL6uTf', 'FSidebar');
// script/FSidebar.ts

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
var User_1 = require("./common/User");
var EventConstants_1 = require("./common/EventConstants");
var Events_1 = require("./common/Events");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FSidebar = /** @class */ (function (_super) {
    __extends(FSidebar, _super);
    function FSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconSpriteFrame = null;
        _this.sidebarNode = null;
        return _this;
    }
    /**
     * 礼物初始化
     */
    FSidebar.prototype.init = function () {
        var _this = this;
        FSDK.showLeft(this.sidebarNode, -20, function (data) {
            switch (data.type) {
                case "sound":
                    // 声音
                    User_1.user.IsMute = data.value;
                    Events_1.events.emit(EventConstants_1.GameEvents.SWITCH_MUTE);
                    return;
                case "shake":
                    // 震动
                    User_1.user.IsShake = data.value;
                    Events_1.events.emit(EventConstants_1.GameEvents.SWITCH_SNAKE);
                    return;
                case "home":
                    // home
                    if (EventConstants_1.GameConstant.isShoot)
                        return;
                    if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
                        cc.find('Canvas/game').active = false;
                        cc.find('Canvas/main').active = true;
                        return;
                    }
                    FSDK.openInters(function () {
                        cc.find('Canvas/game').active = false;
                        cc.find('Canvas/main').active = true;
                    }, _this);
                    return;
            }
        }, 1);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], FSidebar.prototype, "iconSpriteFrame", void 0);
    __decorate([
        property(cc.Node)
    ], FSidebar.prototype, "sidebarNode", void 0);
    FSidebar = __decorate([
        ccclass
    ], FSidebar);
    return FSidebar;
}(cc.Component));
exports.default = FSidebar;

cc._RF.pop();