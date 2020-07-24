"use strict";
cc._RF.push(module, '22d71H4FhVNqKwEflmjiaDK', 'FLeft');
// FSDK_ASS/FSript/FView/FLeft.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FLeft = /** @class */ (function (_super) {
    __extends(FLeft, _super);
    function FLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mFlagNode = [];
        _this.mHome = null;
        _this.mVer = null;
        _this.mCode = null;
        _this.mBtn = null;
        _this.mSound = null;
        _this.mVibration = null;
        _this.mMainNode = null;
        _this.mCreditIcon = null;
        _this.mCreditIconSp = [];
        _this.mIcon = null;
        _this.mType = 0;
        _this.cb = null;
        return _this;
    }
    FLeft.prototype.onLoad = function () {
        var _this = this;
        this.node.setContentSize(cc.winSize);
        this.setActive();
        this.mVer.string = FConfig.IS_DEBUG == true ? "debug v" + FConfig.VERSION : "release v" + FConfig.VERSION;
        this.mCode.string = FGlobal_1.FGlobal.USER_INFO.invite_code;
        FSDK.addFlagListen(function (isFlag) {
            _this.setActive();
        }, this);
        this.mSound.getChildByName('close').active = !FGlobal_1.FGlobal.USER_INFO.setting.sound;
        this.mVibration.getChildByName('close').active = !FGlobal_1.FGlobal.USER_INFO.setting.shake;
        FSDK.addCreditListen(function (data) {
            _this.mFlagNode[0].getChildByName('label').getComponent(cc.Label).string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_pp.toFixed(2);
            _this.mFlagNode[1].getChildByName('label').getComponent(cc.Label).string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_gp.toFixed(2);
            _this.mFlagNode[2].getChildByName('label').getComponent(cc.Label).string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_gp.toFixed(2);
            _this.mFlagNode[3].getChildByName('label').getComponent(cc.Label).string = "" + FGlobal_1.FGlobal.USER_INFO.credit;
        }, this);
    };
    FLeft.prototype.setActive = function () {
        for (var i = 0; i < this.mFlagNode.length; i++) {
            if (!FGlobal_1.FGlobal.USER_INFO.isBlack && FGlobal_1.FGlobal.USER_INFO.isFlag) {
                this.mFlagNode[i].active = true;
            }
            else {
                this.mFlagNode[i].active = false;
            }
        }
        this.mFlagNode[4].active = FGlobal_1.FGlobal.USER_INFO.isFlag;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            if (!FGlobal_1.FGlobal.USER_INFO.isBlack && FGlobal_1.FGlobal.USER_INFO.isFlag) {
                this.mFlagNode[1].active = true;
                this.mFlagNode[2].active = false;
            }
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            if (!FGlobal_1.FGlobal.USER_INFO.isBlack && FGlobal_1.FGlobal.USER_INFO.isFlag) {
                this.mFlagNode[2].active = true;
                this.mFlagNode[1].active = false;
            }
            this.mFlagNode[4].active = false;
        }
        this.mFlagNode[0].getChildByName('label').getComponent(cc.Label).string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_pp.toFixed(2);
        this.mFlagNode[1].getChildByName('label').getComponent(cc.Label).string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_gp.toFixed(2);
        this.mFlagNode[2].getChildByName('label').getComponent(cc.Label).string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_gp.toFixed(2);
        this.mFlagNode[3].getChildByName('label').getComponent(cc.Label).string = "" + FGlobal_1.FGlobal.USER_INFO.credit;
        this.mFlagNode[4].getChildByName('label').getComponent(cc.Label).string = "" + FGlobal_1.FGlobal.USER_INFO.invite_count;
        this.mFlagNode[4].active = false;
    };
    FLeft.prototype.setData = function (num, cb, type, icon) {
        if (type === void 0) { type = 0; }
        if (icon === void 0) { icon = null; }
        this.mCreditIcon.spriteFrame = this.mCreditIconSp[type];
        this.mIcon = icon;
        this.mType = type;
        this.cb = cb;
        //拉回去
        this.node.getChildByName('bg').active = false;
        this.mMainNode.x = -(cc.winSize.width / 2) - (this.mMainNode.width / 2);
        this.mMainNode.getComponent(cc.Widget).top = 640 + num;
        this.mBtn.getChildByName('icon').scaleX = -1;
    };
    FLeft.prototype.clickBtn = function () {
        var _this = this;
        this.mBtn.getChildByName('red').active = false;
        if (this.mMainNode.getNumberOfRunningActions())
            return;
        var endX = 0;
        if (this.mMainNode.x < -cc.winSize.width / 2) {
            endX = -(cc.winSize.width / 2) + (this.mMainNode.width / 2);
            this.node.getChildByName('bg').active = true;
            this.mFlagNode[4].getChildByName('label').getComponent(cc.Label).string = "" + FGlobal_1.FGlobal.USER_INFO.invite_count;
        }
        else {
            endX = -(cc.winSize.width / 2) - (this.mMainNode.width / 2);
        }
        cc.tween(this.mMainNode)
            .to(0.1, { x: endX })
            .call(function () {
            if (endX < -cc.winSize.width / 2) {
                _this.node.getChildByName('bg').active = false;
                _this.mBtn.getChildByName('icon').scaleX = -1;
            }
            else {
                _this.mBtn.getChildByName('icon').scaleX = 1;
            }
        })
            .start();
    };
    FLeft.prototype.clickPP = function () {
        FSDK.showTwoCard(0, this.node);
    };
    FLeft.prototype.clickGP = function () {
        FSDK.showTwoCard(1, this.node);
    };
    FLeft.prototype.clickAP = function () {
        FSDK.showTwoCard(1, this.node);
    };
    FLeft.prototype.clickCoin = function () {
        FSDK.showTransList(this.node, this.mType, this.mIcon);
    };
    FLeft.prototype.clickInvite = function () {
        FSDK.showInvityPage(this.node);
    };
    FLeft.prototype.setSound = function () {
        FGlobal_1.FGlobal.USER_INFO.setting.sound = !FGlobal_1.FGlobal.USER_INFO.setting.sound;
        this.mSound.getChildByName('close').active = !FGlobal_1.FGlobal.USER_INFO.setting.sound;
        localStorage.setItem('setting', JSON.stringify(FGlobal_1.FGlobal.USER_INFO.setting));
        if (this.cb) {
            var data = {
                type: 'sound',
                value: FGlobal_1.FGlobal.USER_INFO.setting.sound
            };
            this.cb(data);
        }
    };
    FLeft.prototype.setShake = function () {
        FGlobal_1.FGlobal.USER_INFO.setting.shake = !FGlobal_1.FGlobal.USER_INFO.setting.shake;
        this.mVibration.getChildByName('close').active = !FGlobal_1.FGlobal.USER_INFO.setting.shake;
        localStorage.setItem('setting', JSON.stringify(FGlobal_1.FGlobal.USER_INFO.setting));
        if (this.cb) {
            var data = {
                type: 'shake',
                value: FGlobal_1.FGlobal.USER_INFO.setting.shake
            };
            this.cb(data);
        }
    };
    FLeft.prototype.clickHome = function () {
        if (this.cb) {
            var data = {
                type: 'home',
                value: true
            };
            this.cb(data);
        }
        this.clickBtn();
    };
    __decorate([
        property(cc.Node)
    ], FLeft.prototype, "mFlagNode", void 0);
    __decorate([
        property(cc.Node)
    ], FLeft.prototype, "mHome", void 0);
    __decorate([
        property(cc.Label)
    ], FLeft.prototype, "mVer", void 0);
    __decorate([
        property(cc.Label)
    ], FLeft.prototype, "mCode", void 0);
    __decorate([
        property(cc.Node)
    ], FLeft.prototype, "mBtn", void 0);
    __decorate([
        property(cc.Node)
    ], FLeft.prototype, "mSound", void 0);
    __decorate([
        property(cc.Node)
    ], FLeft.prototype, "mVibration", void 0);
    __decorate([
        property(cc.Node)
    ], FLeft.prototype, "mMainNode", void 0);
    __decorate([
        property(cc.Sprite)
    ], FLeft.prototype, "mCreditIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FLeft.prototype, "mCreditIconSp", void 0);
    FLeft = __decorate([
        ccclass
    ], FLeft);
    return FLeft;
}(cc.Component));
exports.FLeft = FLeft;

cc._RF.pop();