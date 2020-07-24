"use strict";
cc._RF.push(module, 'f87efwvNpVF/YKrU1Ro9j3K', 'FCardPage');
// FSDK_ASS/FSript/FView/FCardPage.ts

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
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FCardPage = /** @class */ (function (_super) {
    __extends(FCardPage, _super);
    function FCardPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mPP = null;
        _this.mEM1 = null;
        _this.mEM2 = null;
        _this.mTos = null;
        _this.mTosScroll = null;
        _this.data = null;
        return _this;
    }
    FCardPage.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
    };
    FCardPage.prototype.onEnable = function () {
        this.mEM1.string = "";
        this.mEM2.string = "";
        FSDK.closeBanner();
    };
    FCardPage.prototype.onDisable = function () {
        FSDK.openBanner();
    };
    FCardPage.prototype.editBegin = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = "";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "";
                break;
        }
    };
    FCardPage.prototype.editEnd = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = "Input your email";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "Confirm your email";
                break;
        }
    };
    FCardPage.prototype.setData = function (pos) {
        this.data = FConfig.conf.invite_task[pos];
        this.mPP.string = FConfig.FSDK_CONF.word.tip1 + " $" + this.data.amount;
        FLog.normal("FTransPage", FConfig.conf, this.data, pos);
    };
    FCardPage.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    FCardPage.prototype.getTrans = function () {
        if (FGlobal_1.FGlobal.USER_INFO.invite_count >= this.data.count) {
            if (this.mEM1.string != this.mEM2.string) {
                FSDK.showToast('Please confirm your email');
                return;
            }
            if (this.mEM1.string.length > 0) {
                if (this.mEM1.string.indexOf('@') != -1) {
                    this.closePage();
                    FSocketSend_1.FSocketSend.C2S_trans(this.data.id, this.mEM1.string, this.mEM1.string, 'invite');
                    FGlobal_1.FGlobal.invite_task.push(this.data.id);
                    cc.director.emit(FEventID.S2C_trans_history);
                }
                else {
                    FSDK.showToast("Sorry, your email is not legal");
                }
            }
            else {
                FSDK.showToast("Sorry, the email can't be empty");
            }
        }
        else {
            FSDK.showToast('Sorry, your invitation has not been completed yet');
        }
    };
    FCardPage.prototype.showTos = function () {
        this.mTos.active = true;
        this.mTosScroll.stopAutoScroll();
        this.mTosScroll.scrollToTop(0);
    };
    FCardPage.prototype.closeTos = function () {
        this.mTos.active = false;
    };
    __decorate([
        property(cc.Label)
    ], FCardPage.prototype, "mPP", void 0);
    __decorate([
        property(cc.EditBox)
    ], FCardPage.prototype, "mEM1", void 0);
    __decorate([
        property(cc.EditBox)
    ], FCardPage.prototype, "mEM2", void 0);
    __decorate([
        property(cc.Node)
    ], FCardPage.prototype, "mTos", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FCardPage.prototype, "mTosScroll", void 0);
    FCardPage = __decorate([
        ccclass
    ], FCardPage);
    return FCardPage;
}(cc.Component));
exports.FCardPage = FCardPage;

cc._RF.pop();