"use strict";
cc._RF.push(module, 'dddc6snXOZGhqOqveLOjiHr', 'FTransInfo');
// FSDK_ASS/FSript/FView/FTransInfo.ts

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
var FTransInfo = /** @class */ (function (_super) {
    __extends(FTransInfo, _super);
    function FTransInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mCardIcon = null;
        _this.mAmount = null;
        _this.mCoin = null;
        _this.mPro = null;
        _this.mProLabel = null;
        _this.mTaskLabel = [];
        _this.mRedeemBtn = null;
        _this.mTip = null;
        _this.mErrSound = null;
        _this.data = null;
        _this.confData = null;
        _this.taskPos = -1;
        _this.cb = null;
        _this.mIcon = null;
        _this.mIconSp = null;
        return _this;
    }
    FTransInfo.prototype.onLoad = function () {
        this.mRedeemBtn.node.on(cc.Node.EventType.TOUCH_END, this.getTrans, this);
    };
    FTransInfo.prototype.setData = function (data) {
        var _this = this;
        this.taskPos = -1;
        this.data = data.data;
        this.confData = data.confData;
        this.mCardIcon.spriteFrame = this.data.icon;
        this.mAmount.string = "$" + this.data.amount;
        this.mCoin.string = this.confData.coin;
        this.cb = data.cb;
        var cnt = 0;
        FSDK.getRegCnt(FNetWorkConfig.data.code, function (data) {
            cnt = data[FNetWorkConfig.data.code];
            _this.mTip.string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, _this.getCnt(cnt));
        });
        this.mTip.string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, this.getCnt(cnt));
        this.isTaskSuc();
    };
    //显示任务并且返回是否可以领取
    FTransInfo.prototype.isTaskSuc = function () {
        var target = [FGlobal_1.FGlobal.USER_INFO.credit, FGlobal_1.FGlobal.USER_INFO.task, FGlobal_1.FGlobal.USER_INFO.login_days];
        for (var i = 0; i < 3; i++) {
            this.mTaskLabel[i].node.active = false;
        }
        for (var i = 0; i < 3; i++) {
            var pos_1 = i + 1;
            if (target[i] < this.confData['step' + pos_1]) {
                this.mTaskLabel[i].node.active = true;
                this.mTaskLabel[i].node.color = new cc.Color().fromHEX('#FFFFFF');
                this.mRedeemBtn.interactable = false;
                if (this.taskPos == -1) {
                    this.taskPos = i;
                }
                this.mTaskLabel[i].string = "Step" + pos_1 + ": " + FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[i], this.confData['step' + pos_1]);
                break;
            }
            else {
                this.mTaskLabel[i].string = "Step" + pos_1 + ": " + FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[i], this.confData['step' + pos_1]);
                this.mTaskLabel[i].node.active = true;
                this.mTaskLabel[i].node.color = new cc.Color().fromHEX('#8CFF4B');
                if (i == 2) {
                    this.taskPos = i;
                    this.mRedeemBtn.interactable = true;
                }
            }
        }
        if (this.taskPos == 0) {
            this.mTaskLabel[0].string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[0], this.confData['step' + 1]);
        }
        var pos = this.taskPos + 1;
        this.mPro.progress = target[this.taskPos] / this.confData['step' + pos];
        this.mProLabel.string = target[this.taskPos] + "/" + this.confData['step' + pos];
    };
    FTransInfo.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node);
    };
    //计算出要显示的人数
    FTransInfo.prototype.getCnt = function (count) {
        var cnt = count;
        if (this.confData.type == 1 || this.confData.type == 2) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.07 + 821);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.012 + 258);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.0017 + 70);
                    break;
            }
        }
        else if (this.confData.type == 3) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.06 + 511);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.014 + 198);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.002 + 47);
                    break;
            }
        }
        else if (this.confData.type == 4) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.02 + 144);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.007 + 85);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.0014 + 8);
                    break;
            }
        }
        return cnt;
    };
    FTransInfo.prototype.getTrans = function () {
        var _this = this;
        if (this.mRedeemBtn.interactable) {
            if (this.confData.type != 3) {
                FSDK.showToast(FConfig.FSDK_CONF.word.tip9);
            }
            else {
                FSDK.showTransPage(this.node.parent, this.data, function (status) {
                    if (_this.cb) {
                        _this.cb();
                        _this.cb = null;
                    }
                }, 'list', true, this.mIconSp);
                this.closePage();
            }
        }
        else {
            if (FGlobal_1.FGlobal.USER_INFO.setting.sound) {
                this.mErrSound.play();
            }
            this.noSuc(this.mTaskLabel[this.taskPos].node);
        }
    };
    //提示没完成
    FTransInfo.prototype.noSuc = function (node) {
        node.stopAllActions();
        node.scale = 1;
        cc.tween(node)
            .to(0.15, { scale: 1.1 })
            .to(0.2, { scale: 1 })
            .start();
    };
    __decorate([
        property(cc.Sprite)
    ], FTransInfo.prototype, "mCardIcon", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mAmount", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mCoin", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], FTransInfo.prototype, "mPro", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mProLabel", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mTaskLabel", void 0);
    __decorate([
        property(cc.Button)
    ], FTransInfo.prototype, "mRedeemBtn", void 0);
    __decorate([
        property(cc.RichText)
    ], FTransInfo.prototype, "mTip", void 0);
    __decorate([
        property(cc.AudioSource)
    ], FTransInfo.prototype, "mErrSound", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransInfo.prototype, "mIcon", void 0);
    FTransInfo = __decorate([
        ccclass
    ], FTransInfo);
    return FTransInfo;
}(cc.Component));
exports.FTransInfo = FTransInfo;

cc._RF.pop();