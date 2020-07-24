"use strict";
cc._RF.push(module, '8dd59Er76dG4KnE3vA9XIou', 'FTransList');
// FSDK_ASS/FSript/FView/FTransList.ts

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
var FGlobal_1 = require("../FModel/FGlobal");
var FTransItem_1 = require("./FTransItem");
var FTransInfo_1 = require("./FTransInfo");
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTransList = /** @class */ (function (_super) {
    __extends(FTransList, _super);
    function FTransList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mMyCoin = null;
        _this.mAbout = null;
        _this.mTransItem = null;
        _this.mScroll = null;
        _this.mFTransInfo = null;
        _this.mIcom = null;
        _this.mIconSp = [];
        return _this;
    }
    FTransList.prototype.onLoad = function () {
        var _this = this;
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal_1.FGlobal.getScale();
        this.mScroll.node.getComponent(cc.Widget).top = 330 + FGlobal_1.FGlobal.getScale();
        FSDK.addCreditListen(function (data) {
            if (data.type == 'credit') {
                _this.mMyCoin.string = data.num;
            }
        }, this);
    };
    FTransList.prototype.setTask = function (type, icon) {
        if (type === void 0) { type = 0; }
        if (icon === void 0) { icon = null; }
        if (icon == null) {
            icon = this.mIconSp[type];
        }
        this.mIcom.spriteFrame = icon;
        this.mFTransInfo.mIconSp = icon;
        this.mFTransInfo.mIcon.spriteFrame = icon;
        this.setData(icon);
    };
    FTransList.prototype.onEnable = function () {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        FSocketSend_1.FSocketSend.C2S_trans_history('list');
    };
    FTransList.prototype.setData = function (icon) {
        this.mMyCoin.string = FGlobal_1.FGlobal.USER_INFO.credit + "";
        var abount = FGlobal_1.FGlobal.USER_INFO.credit / 10000;
        this.mAbout.string = "\u2248$" + abount.toFixed(2);
        if (!this.mScroll.content.childrenCount) {
            for (var i = 0; i < FConfig.conf.redeem_task.list.length; i++) {
                var transItem = cc.instantiate(this.mTransItem);
                transItem.parent = this.mScroll.content;
                transItem.getComponent(FTransItem_1.FTransItem).setData(FConfig.conf.redeem_task.list[i], this.mFTransInfo, icon);
            }
        }
    };
    FTransList.prototype.closePage = function () {
        this.node.parent = null;
    };
    __decorate([
        property(cc.Label)
    ], FTransList.prototype, "mMyCoin", void 0);
    __decorate([
        property(cc.Label)
    ], FTransList.prototype, "mAbout", void 0);
    __decorate([
        property(cc.Prefab)
    ], FTransList.prototype, "mTransItem", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FTransList.prototype, "mScroll", void 0);
    __decorate([
        property(FTransInfo_1.FTransInfo)
    ], FTransList.prototype, "mFTransInfo", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransList.prototype, "mIcom", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FTransList.prototype, "mIconSp", void 0);
    FTransList = __decorate([
        ccclass
    ], FTransList);
    return FTransList;
}(cc.Component));
exports.FTransList = FTransList;

cc._RF.pop();