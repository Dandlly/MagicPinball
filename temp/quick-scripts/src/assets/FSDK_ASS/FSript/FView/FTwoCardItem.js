"use strict";
cc._RF.push(module, 'c26f8IRrUVHnpYeKbZH+Swq', 'FTwoCardItem');
// FSDK_ASS/FSript/FView/FTwoCardItem.ts

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
var FTwoCardItem = /** @class */ (function (_super) {
    __extends(FTwoCardItem, _super);
    function FTwoCardItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mCard = null;
        _this.mTip1 = null;
        _this.mTip2 = null;
        _this.mTip3 = null;
        _this.mTip4 = null;
        _this.mPro = null;
        _this.mProLabel = null;
        _this.mHelpBtn = null;
        _this.mTransBtn = null;
        _this.mStatus = null;
        _this.mErrSound = null;
        _this.type = 0;
        _this.pos = 1;
        _this.mFTwoCard = null;
        return _this;
    }
    FTwoCardItem.prototype.onLoad = function () {
        this.mTransBtn.node.on(cc.Node.EventType.TOUCH_END, this.clickTrans, this);
        this.mHelpBtn.on(cc.Node.EventType.TOUCH_START, this.clickHelp, this);
        this.mStatus.node.active = false;
        cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
    };
    FTwoCardItem.prototype.on_S2C_trans_history = function (msg) {
        if (!msg.err && msg.data.type == 'twocard') {
            for (var i = 0; i < msg.data.records.length; i++) {
                if (msg.data.records[i].custom_id == FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]) {
                    this.setStatus(msg.data.records[i]);
                }
            }
        }
    };
    //type 0-pp 1-gp 2-ap
    FTwoCardItem.prototype.setData = function (type, cardSp, parent) {
        this.mFTwoCard = parent;
        this.type = type;
        this.mCard.spriteFrame = cardSp;
        FLog.normal("什么吗   ", FConfig.FSDK_CONF.word);
        if (this.pos == 1) {
            this.mTip3.string = "Step1: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title + "\nStep2: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title + "\nStep3: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[2].title;
        }
        else {
            this.mTip3.string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip8, 500);
        }
        this.getTargetPos();
        if (FGlobal_1.FGlobal.USER_INFO.trans_record['twocard']) {
            for (var i = 0; i < FGlobal_1.FGlobal.USER_INFO.trans_record.twocard.length; i++) {
                if (FGlobal_1.FGlobal.USER_INFO.trans_record.twocard[i] == FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]) {
                    this.setStatus({ status: 0 });
                    return;
                }
            }
        }
        this.mTransBtn.node.active = true;
        this.mStatus.node.active = false;
    };
    //完成到哪一步
    FTwoCardItem.prototype.getTargetPos = function () {
        if (this.pos == 1) {
            this.mHelpBtn.active = false;
        }
        var target = [FGlobal_1.FGlobal.USER_INFO.credit_pp, FGlobal_1.FGlobal.USER_INFO.task, FGlobal_1.FGlobal.USER_INFO.login_days];
        if (this.type != 0) {
            target[0] = FGlobal_1.FGlobal.USER_INFO.credit_gp;
        }
        var taskPos = -1;
        for (var i = 0; i < FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target.length; i++) {
            if (target[i] < FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[i].cnt) {
                this.mTip2.string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[i].title, target[i]);
                this.mTransBtn.interactable = false;
                taskPos = i;
                break;
            }
            else {
                if (i == 0) {
                    this.mTip3.string = "Step1: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title + "\nStep2: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title;
                }
                else if (i == 1) {
                    this.mTip3.string = "Step1: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title + "\nStep2: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title + "\nStep3: " + FConfig.FSDK_CONF.TWO_CARD.card1.target[2].title;
                }
                if (i == FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target.length - 1) {
                    taskPos = i;
                    FLog.normal("任务没有达成呢true");
                    this.mTransBtn.interactable = true;
                    this.mTip2.string = "";
                }
            }
        }
        this.mPro.progress = target[taskPos] / FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[taskPos].cnt;
        if (taskPos == 0) {
            this.mProLabel.string = "$" + target[0].toFixed(2) + "/$" + FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[taskPos].cnt.toFixed(2);
        }
        else {
            this.mProLabel.string = target[taskPos] + "/" + FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[taskPos].cnt;
            if (this.pos == 1) {
                this.mHelpBtn.active = true;
            }
        }
    };
    FTwoCardItem.prototype.setCnt = function (cnt) {
        var num = 0;
        if (this.type == 0) {
            if (this.pos == 1) {
                num = Math.floor(cnt * 0.025 + 211);
            }
            else {
                num = Math.floor(cnt * 0.003 + 12);
            }
        }
        else {
            if (this.pos == 1) {
                num = Math.floor(cnt * 0.033 + 174);
            }
            else {
                num = Math.floor(cnt * 0.004 + 8);
            }
        }
        this.mTip1.string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip6, num);
        this.mTip4.string = this.mTip1.string + ",keep it up!";
    };
    FTwoCardItem.prototype.onEnable = function () {
        // this.mTip4.node.parent.stopAllActions();
        this.mTip4.node.parent.active = false;
    };
    //点击了问号
    FTwoCardItem.prototype.clickHelp = function () {
        this.mTip4.node.parent.active = !this.mTip4.node.parent.active;
        // this.mTip4.node.parent.stopAllActions();
        // this.mTip4.node.parent.active = true;
        // this.mTip4.node.parent.opacity = 0;
        // cc.tween(this.mTip4.node.parent)
        //     .to(0.05, { opacity: 255 })
        //     .start();
    };
    FTwoCardItem.prototype.closeHelp = function () {
        // this.mTip4.node.parent.stopAllActions();
        // this.mTip4.node.parent.active = true;
        // cc.tween(this.mTip4.node.parent)
        //     .to(0.05, { opacity: 0 })
        //     .start();
    };
    //点击了out
    FTwoCardItem.prototype.clickTrans = function () {
        var _this = this;
        if (this.mTransBtn.interactable) {
            // if (this.type != 0) {
            //     FSDK.showToast(FConfig.FSDK_CONF.word.tip9);
            //     return;
            // }
            FLog.normal("啥玩意儿啊  ", this.type, this.pos);
            var data = this.getGift(FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]);
            FSDK.showTransPage(this.mFTwoCard.node, data, function () {
                _this.mStatus.node.active = true;
                _this.mTransBtn.node.active = false;
                if (!FGlobal_1.FGlobal.USER_INFO.trans_record.twocard) {
                    FGlobal_1.FGlobal.USER_INFO.trans_record.twocard = [];
                }
                FGlobal_1.FGlobal.USER_INFO.trans_record.twocard.push(FConfig.FSDK_CONF.TWO_CARD.cardList[_this.type][_this.pos - 1]);
            }, 'twocard', false);
        }
        else {
            if (FGlobal_1.FGlobal.USER_INFO.setting.sound) {
                this.mErrSound.play();
            }
            FLog.normal("任务没有达成呢");
            this.noSuc();
        }
    };
    //取出礼物
    FTwoCardItem.prototype.getGift = function (id) {
        for (var i = 0; i < FConfig.conf.redeem_task.twocard.length; i++) {
            if (id == FConfig.conf.redeem_task.twocard[i].id) {
                return FConfig.conf.redeem_task.twocard[i];
            }
        }
    };
    //提示没完成
    FTwoCardItem.prototype.noSuc = function () {
        this.mTip2.node.stopAllActions();
        this.mTip2.node.scale = 1;
        cc.tween(this.mTip2.node)
            .to(0.15, { scale: 1.1 })
            .to(0.2, { scale: 1 })
            .start();
    };
    FTwoCardItem.prototype.setStatus = function (data) {
        FLog.normal("有没有进来");
        var stutas = 'Processing';
        var color = 'FF8F00';
        switch (data.status) {
            case 0:
                stutas = 'Processing';
                color = 'FF8F00';
                break;
            case 1:
                stutas = 'Finish';
                color = '15C323';
                break;
            case 2:
                stutas = 'In Review';
                color = 'FF8F00';
                break;
            case -1:
                stutas = 'Refuse';
                color = 'D32424';
                break;
            case -2:
                stutas = 'GetFail';
                color = 'D32424';
                break;
        }
        this.mTransBtn.node.active = false;
        this.mStatus.node.active = true;
        this.mStatus.string = stutas;
        this.mStatus.node.color = new cc.Color().fromHEX(color);
    };
    __decorate([
        property(cc.Sprite)
    ], FTwoCardItem.prototype, "mCard", void 0);
    __decorate([
        property(cc.RichText)
    ], FTwoCardItem.prototype, "mTip1", void 0);
    __decorate([
        property(cc.RichText)
    ], FTwoCardItem.prototype, "mTip2", void 0);
    __decorate([
        property(cc.RichText)
    ], FTwoCardItem.prototype, "mTip3", void 0);
    __decorate([
        property(cc.RichText)
    ], FTwoCardItem.prototype, "mTip4", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], FTwoCardItem.prototype, "mPro", void 0);
    __decorate([
        property(cc.Label)
    ], FTwoCardItem.prototype, "mProLabel", void 0);
    __decorate([
        property(cc.Node)
    ], FTwoCardItem.prototype, "mHelpBtn", void 0);
    __decorate([
        property(cc.Button)
    ], FTwoCardItem.prototype, "mTransBtn", void 0);
    __decorate([
        property(cc.Label)
    ], FTwoCardItem.prototype, "mStatus", void 0);
    __decorate([
        property(cc.AudioSource)
    ], FTwoCardItem.prototype, "mErrSound", void 0);
    __decorate([
        property
    ], FTwoCardItem.prototype, "pos", void 0);
    FTwoCardItem = __decorate([
        ccclass
    ], FTwoCardItem);
    return FTwoCardItem;
}(cc.Component));
exports.FTwoCardItem = FTwoCardItem;

cc._RF.pop();