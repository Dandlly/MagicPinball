"use strict";
cc._RF.push(module, 'a0602N66R1BV7qUQdfKsHtu', 'FSignPage');
// FSDK_ASS/FSript/FView/FSignPage.ts

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
var FPanelManager_1 = require("../FModel/FPanelManager");
var FCreditRecord_1 = require("./FCreditRecord");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FSignPage = /** @class */ (function (_super) {
    __extends(FSignPage, _super);
    function FSignPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mTip1 = null;
        _this.mTransPro = null;
        _this.mNowNum = null;
        _this.mSignDay = null;
        _this.mLabelPro = null;
        _this.mBtnTrans = null;
        _this.mSignNode = null;
        _this.mProbaly = null;
        _this.mCollect = null;
        _this.mCard = null;
        _this.mCardNode = null;
        _this.mProbablyPro = null;
        _this.mProbablyLab = null;
        return _this;
        // update (dt) {}
    }
    FSignPage.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 75 + FGlobal_1.FGlobal.getScale();
        this.node.getChildByName("mainNode").getComponent(cc.Widget).top = 75 + FGlobal_1.FGlobal.getScale();
    };
    FSignPage.prototype.start = function () {
    };
    FSignPage.prototype.onEnable = function () {
        this.initData();
        FSDK.addCreditListen(this.creditListen, this);
    };
    FSignPage.prototype.onDisable = function () {
        FSDK.removeCreditListen(this.creditListen, this);
    };
    FSignPage.prototype.creditListen = function (data) {
        if (data.type == 'gp') {
            this.initData();
        }
    };
    FSignPage.prototype.initData = function () {
        this.mTip1.string = "can " + FConfig.FSDK_CONF.word.tip2 + ")";
        this.mNowNum.string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_gp.toFixed(2);
        this.mTransPro.fillRange = FGlobal_1.FGlobal.USER_INFO.credit_gp / 100;
        this.mLabelPro.string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_gp.toFixed(2) + " / $100.00";
        this.mCard.active = false;
        this.mBtnTrans.interactable = this.mTransPro.fillRange >= 1;
        this.setSign();
    };
    FSignPage.prototype.setSign = function () {
        this.mProbaly.active = FGlobal_1.FGlobal.SIGN_INFO.signDay >= 7;
        this.mSignNode.active = !this.mProbaly.active;
        if (FGlobal_1.FGlobal.SIGN_INFO.signDay < 7) {
            this.mCollect.interactable = false;
            for (var i = 0; i < this.mSignNode.childrenCount; i++) {
                this.mSignNode.children[i].getChildByName('al_bg').active = false;
                this.mSignNode.children[FGlobal_1.FGlobal.SIGN_INFO.signDay - FGlobal_1.FGlobal.SIGN_INFO.isSign].getChildByName('al_bg').active = true;
                this.mSignNode.children[i].getChildByName('al').active = i < FGlobal_1.FGlobal.SIGN_INFO.signDay;
                this.mSignNode.children[i].getChildByName('msg').getChildByName('label1').getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip1;
                this.mSignNode.children[i].getChildByName('msg').getChildByName('label2').getComponent(cc.Label).string = i == 6 ? "50" : FConfig.FSDK_CONF.SIGN_CONF[i] + "";
                if (i == this.mSignNode.childrenCount - 1) {
                    this.mSignNode.children[i].getChildByName('msg').getChildByName('label1').getComponent(cc.Label).string = "Probably get";
                }
                if (!FGlobal_1.FGlobal.SIGN_INFO.isSign) {
                    this.setScaleAction(this.mSignNode.children[FGlobal_1.FGlobal.SIGN_INFO.signDay - FGlobal_1.FGlobal.SIGN_INFO.isSign]);
                    this.mCollect.interactable = true;
                }
                else {
                    this.mSignNode.children[i].stopAllActions();
                    this.mSignNode.children[i].scale = 1;
                }
            }
        }
        else {
            this.mProbablyPro.fillRange = FGlobal_1.FGlobal.SIGN_INFO.signDay / 15;
            this.mProbablyLab.string = FGlobal_1.FGlobal.SIGN_INFO.signDay + "/" + 15;
            this.mCollect.interactable = this.mProbablyPro.fillRange >= 1 && !FGlobal_1.FGlobal.SIGN_INFO.isLongSign;
        }
    };
    FSignPage.prototype.clickSign = function () {
        if (FGlobal_1.FGlobal.SIGN_INFO.signDay < 7) {
            if (!FGlobal_1.FGlobal.SIGN_INFO.isSign) {
                FGlobal_1.FGlobal.SIGN_INFO.isSign = 1;
                FGlobal_1.FGlobal.SIGN_INFO.signDay += 1;
                FSDK.saveData('SIGN_INFO', FGlobal_1.FGlobal.SIGN_INFO);
                this.moveCard();
            }
        }
        else {
            if (!FGlobal_1.FGlobal.SIGN_INFO.isLongSign) {
                FGlobal_1.FGlobal.SIGN_INFO.isLongSign = 1;
                FSDK.saveData('SIGN_INFO', FGlobal_1.FGlobal.SIGN_INFO);
                this.moveCard(1);
            }
        }
        this.mCollect.interactable = false;
    };
    FSignPage.prototype.setScaleAction = function (node) {
        cc.tween(node)
            .repeatForever(cc.tween()
            .to(1, { scale: 1.1 })
            .to(1, { scale: 1 }))
            .start();
    };
    FSignPage.prototype.closePage = function () {
        this.node.parent = null;
    };
    //卡飘上去
    FSignPage.prototype.moveCard = function (type) {
        if (type === void 0) { type = 0; }
        this.mCard.active = true;
        if (type) {
            this.mCard.scale = 0.45;
            this.mCard.position = this.getStartPosition(this.mProbaly.getChildByName('card'));
        }
        else {
            this.mCard.scale = 0.23;
            this.mCard.position = this.getStartPosition(this.mSignNode.children[FGlobal_1.FGlobal.SIGN_INFO.signDay - 1]);
        }
        cc.tween(this.mCard)
            // .by(0.2,{x:0,y:-40})
            .to(0.5, { position: this.getEndPosition(), scale: 1 }, { easing: "sineIn" })
            .call(function () {
            this.mCard.active = false;
            if (type) {
                FSDK.setCredit("gp", 10, FConfig.CREDIT_FROM.SIGN_IN);
            }
            else {
                FSDK.setCredit("gp", FConfig.FSDK_CONF.SIGN_CONF[FGlobal_1.FGlobal.SIGN_INFO.signDay - 1], FConfig.CREDIT_FROM.SIGN_IN);
            }
        }.bind(this))
            .start();
    };
    //获取飘的起始点
    FSignPage.prototype.getStartPosition = function (node) {
        var word = node.parent.convertToWorldSpaceAR(node.position);
        var start = this.node.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return start;
    };
    //获取目标点
    FSignPage.prototype.getEndPosition = function () {
        var word = this.mCardNode.convertToWorldSpaceAR(this.mCardNode.getChildByName('card').position);
        var end = this.node.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return end;
    };
    //历史记录
    FSignPage.prototype.gpRecord = function () {
        FPanelManager_1.FPanelManager.load('FCreditRecord', this.node, function (panel) {
            panel.getComponent(FCreditRecord_1.FCreditRecord).setType('gp');
        }.bind(this));
    };
    FSignPage.prototype.getTrans = function () {
        FSDK.showToast("You have abnormal behaviors," + FConfig.FSDK_CONF.word.tip2 + " failed");
    };
    __decorate([
        property(cc.Label)
    ], FSignPage.prototype, "mTip1", void 0);
    __decorate([
        property(cc.Sprite)
    ], FSignPage.prototype, "mTransPro", void 0);
    __decorate([
        property(cc.Label)
    ], FSignPage.prototype, "mNowNum", void 0);
    __decorate([
        property(cc.Label)
    ], FSignPage.prototype, "mSignDay", void 0);
    __decorate([
        property(cc.Label)
    ], FSignPage.prototype, "mLabelPro", void 0);
    __decorate([
        property(cc.Button)
    ], FSignPage.prototype, "mBtnTrans", void 0);
    __decorate([
        property(cc.Node)
    ], FSignPage.prototype, "mSignNode", void 0);
    __decorate([
        property(cc.Node)
    ], FSignPage.prototype, "mProbaly", void 0);
    __decorate([
        property(cc.Button)
    ], FSignPage.prototype, "mCollect", void 0);
    __decorate([
        property(cc.Node)
    ], FSignPage.prototype, "mCard", void 0);
    __decorate([
        property(cc.Node)
    ], FSignPage.prototype, "mCardNode", void 0);
    __decorate([
        property(cc.Sprite)
    ], FSignPage.prototype, "mProbablyPro", void 0);
    __decorate([
        property(cc.Label)
    ], FSignPage.prototype, "mProbablyLab", void 0);
    FSignPage = __decorate([
        ccclass
    ], FSignPage);
    return FSignPage;
}(cc.Component));
exports.FSignPage = FSignPage;

cc._RF.pop();