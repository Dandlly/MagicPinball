"use strict";
cc._RF.push(module, '81371UlKJNPpZ3IcnmAAJ2m', 'FTransPage');
// FSDK_ASS/FSript/FView/FTransPage.ts

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
var FPanelManager_1 = require("../FModel/FPanelManager");
var FGlobal_1 = require("../FModel/FGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTransPage = /** @class */ (function (_super) {
    __extends(FTransPage, _super);
    function FTransPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mPP = null;
        _this.mCoin = null;
        _this.mEM1 = null;
        _this.mEM2 = null;
        _this.mTos = null;
        _this.mTosScroll = null;
        _this.mTosSp = null;
        _this.mIcon = null;
        _this.data = null;
        _this.type = 'task';
        _this.cb = null;
        return _this;
    }
    FTransPage.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.mTosSp.spriteFrame = FNetWorkConfig.data.tos_img;
    };
    FTransPage.prototype.onEnable = function () {
        this.mEM1.string = "";
        this.mEM2.string = "";
        this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
        this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
    };
    FTransPage.prototype.onDisable = function () {
    };
    FTransPage.prototype.editBegin = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = "";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "";
                break;
        }
    };
    FTransPage.prototype.editEnd = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
                break;
            case "2":
                this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
                break;
        }
    };
    FTransPage.prototype.setData = function (data, cb, type, isCoin, icon) {
        if (type === void 0) { type = 'task'; }
        if (isCoin === void 0) { isCoin = false; }
        if (icon === void 0) { icon = null; }
        if (icon) {
            this.mIcon.spriteFrame = icon;
        }
        this.cb = cb;
        this.type = type;
        this.mCoin.node.parent.active = isCoin;
        FLog.normal("什么玩意啊   ", data);
        this.data = data;
        this.mPP.string = "$" + this.data.amount;
        this.mCoin.string = this.data.count;
        // FLog.normal("FTransPage", FConfig.conf,this.data,pos);
    };
    FTransPage.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    FTransPage.prototype.getTrans = function () {
        var _this = this;
        if (this.mEM1.string.length > 0) {
            if (this.mEM2.string.length <= 0) {
                FSDK.showToast("Sorry, the phone can't be empty");
                return;
            }
            if (this.mEM1.string.indexOf('@') != -1) {
                if (FGlobal_1.FGlobal.USER_INFO.credit >= this.data.count) {
                    FSDK.setCredit('credit', -this.data.count, 'redeem');
                    FSDK.getTrans(this.data.id, this.mEM1.string, this.mEM2.string, this.type, function () {
                        _this.closePage();
                        if (_this.cb) {
                            _this.cb();
                            _this.cb = null;
                        }
                    });
                }
                else {
                    FSDK.showToast('Diamonds is not enough');
                }
            }
            else {
                FSDK.showToast("Sorry, your paypal email is not legal");
            }
        }
        else {
            FSDK.showToast("Sorry, the paypal email can't be empty");
        }
    };
    FTransPage.prototype.showTos = function () {
        this.mTos.active = true;
        this.mTosScroll.stopAutoScroll();
        this.mTosScroll.scrollToTop(0);
    };
    FTransPage.prototype.closeTos = function () {
        this.mTos.active = false;
    };
    __decorate([
        property(cc.Label)
    ], FTransPage.prototype, "mPP", void 0);
    __decorate([
        property(cc.Label)
    ], FTransPage.prototype, "mCoin", void 0);
    __decorate([
        property(cc.EditBox)
    ], FTransPage.prototype, "mEM1", void 0);
    __decorate([
        property(cc.EditBox)
    ], FTransPage.prototype, "mEM2", void 0);
    __decorate([
        property(cc.Node)
    ], FTransPage.prototype, "mTos", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FTransPage.prototype, "mTosScroll", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransPage.prototype, "mTosSp", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransPage.prototype, "mIcon", void 0);
    FTransPage = __decorate([
        ccclass
    ], FTransPage);
    return FTransPage;
}(cc.Component));
exports.FTransPage = FTransPage;

cc._RF.pop();