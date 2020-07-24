"use strict";
cc._RF.push(module, '83bb6ZpVzBLhYfohwdy5RUH', 'FHideNode');
// script/FHideNode.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 黑名单邀请
 */
var FHideNode = /** @class */ (function (_super) {
    __extends(FHideNode, _super);
    function FHideNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inviteNode = [];
        _this.invtiyParentNode = null;
        _this.ui = null;
        _this.turnTableNode = null;
        _this.icon = [];
        return _this;
    }
    FHideNode.prototype.onLoad = function () {
        var _this = this;
        FSDK.addFlagListen(function (data) {
            if (data) {
                _this.init();
            }
        }, this);
    };
    FHideNode.prototype.init = function () {
        this.ui.getChildByName("coin_3").active = true;
        if (User_1.user.serverData.isBlack) {
            this.inviteNode[0].active = false;
            this.inviteNode[1].active = false;
        }
        else {
            if (cc.sys.os == cc.sys.OS_IOS) {
                this.inviteNode[0].active = false;
                this.inviteNode[1].active = false;
                this.turnTableNode.active = true;
                // 显示
                this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[1];
                this.ui.getChildByName("coin_1").active = true;
                this.ui.getChildByName("coin_2").active = true;
            }
            else {
                // 显示邀请
                this.inviteNode[0].active = true;
                this.inviteNode[1].active = true;
                if (User_1.user.serverData.isFlag) {
                    this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[0];
                    // 显示
                    this.ui.getChildByName("coin_1").active = true;
                    this.ui.getChildByName("coin_2").active = true;
                    this.turnTableNode.active = true;
                }
            }
        }
        this.ui.active = true;
    };
    /**
     * 邀请方法
     */
    FHideNode.prototype.inviteHandle = function () {
        FSDK.showInvityPage(this.invtiyParentNode);
    };
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "inviteNode", void 0);
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "invtiyParentNode", void 0);
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "turnTableNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FHideNode.prototype, "icon", void 0);
    FHideNode = __decorate([
        ccclass
    ], FHideNode);
    return FHideNode;
}(cc.Component));
exports.default = FHideNode;

cc._RF.pop();