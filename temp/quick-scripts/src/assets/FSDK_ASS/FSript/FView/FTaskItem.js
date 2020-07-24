"use strict";
cc._RF.push(module, '964a1qGV8xBfKpRjKogCFcQ', 'FTaskItem');
// FSDK_ASS/FSript/FView/FTaskItem.ts

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
var FTaskPage_1 = require("./FTaskPage");
var FGlobal_1 = require("../FModel/FGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTaskItem = /** @class */ (function (_super) {
    __extends(FTaskItem, _super);
    function FTaskItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mAmount = null;
        _this.mTitle = null;
        _this.mProSprite = null;
        _this.mProLabel = null;
        _this.mCollect = null;
        _this.mCard = null;
        _this.mAl = null;
        _this.pos = 0;
        _this.parent = null;
        _this.amount = 0;
        return _this;
    }
    FTaskItem.prototype.onLoad = function () {
    };
    FTaskItem.prototype.setOneData = function (now, i, parent) {
        this.pos = i;
        this.mAl.active = FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] && FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] == true;
        this.mCollect.node.active = !this.mAl.active;
        this.parent = parent;
        this.mAmount.string = "$" + FConfig.FSDK_CONF.TASK_CONF[0].amount[i];
        this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[0].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[0].target[i]);
        this.mProLabel.string = now + "/" + FConfig.FSDK_CONF.TASK_CONF[0].target[i];
        this.mProSprite.fillRange = now / FConfig.FSDK_CONF.TASK_CONF[0].target[i];
        this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !FGlobal_1.FGlobal.TASK_INFO[this.pos + ''];
        this.amount = FConfig.FSDK_CONF.TASK_CONF[0].amount[i];
    };
    FTaskItem.prototype.setMoreData = function (now, i, parent) {
        this.pos = i;
        this.mAl.active = FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] && FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] == true;
        this.mCollect.node.active = !this.mAl.active;
        this.parent = parent;
        this.mAmount.string = "$" + FConfig.FSDK_CONF.TASK_CONF[i].amount;
        this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[i].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[i].target);
        this.mProLabel.string = now + "/" + FConfig.FSDK_CONF.TASK_CONF[i].target;
        this.mProSprite.fillRange = now / FConfig.FSDK_CONF.TASK_CONF[i].target;
        this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !FGlobal_1.FGlobal.TASK_INFO[this.pos + ''];
        this.amount = FConfig.FSDK_CONF.TASK_CONF[i].amount;
    };
    FTaskItem.prototype.onEnable = function () {
        this.mCard.active = false;
    };
    FTaskItem.prototype.clickCollect = function () {
        this.moveCard();
    };
    //获取飘的起始点
    FTaskItem.prototype.getStartPosition = function () {
        var word = this.node.convertToWorldSpaceAR(this.node.getChildByName('pp').position);
        var start = this.parent.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return start;
    };
    //获取目标点
    FTaskItem.prototype.getEndPosition = function () {
        var word = this.parent.getComponent(FTaskPage_1.FTaskPage).mCardNode.convertToWorldSpaceAR(this.parent.getComponent(FTaskPage_1.FTaskPage).mCardNode.getChildByName('card').position);
        var end = this.parent.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return end;
    };
    //卡飘上去
    FTaskItem.prototype.moveCard = function () {
        this.mCard.scale = 0.44;
        this.mCard.parent = this.parent.getChildByName('mainNode');
        this.mCard.position = this.getStartPosition();
        this.mCard.active = true;
        this.mCollect.interactable = false;
        this.mCollect.node.active = false;
        this.mAl.active = true;
        cc.tween(this.mCard)
            .to(0.5, { position: this.getEndPosition(), scale: 1 }, { easing: "sineIn" })
            .call(function () {
            this.mCard.active = false;
            this.mCard.parent = this.node;
            FSDK.setCredit("pp", this.amount, FConfig.CREDIT_FROM.TASK_REWARD);
            FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] = true;
            FSDK.saveData('TASK_INFO', FGlobal_1.FGlobal.TASK_INFO);
        }.bind(this))
            .start();
    };
    __decorate([
        property(cc.Label)
    ], FTaskItem.prototype, "mAmount", void 0);
    __decorate([
        property(cc.Label)
    ], FTaskItem.prototype, "mTitle", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTaskItem.prototype, "mProSprite", void 0);
    __decorate([
        property(cc.Label)
    ], FTaskItem.prototype, "mProLabel", void 0);
    __decorate([
        property(cc.Button)
    ], FTaskItem.prototype, "mCollect", void 0);
    __decorate([
        property(cc.Node)
    ], FTaskItem.prototype, "mCard", void 0);
    __decorate([
        property(cc.Node)
    ], FTaskItem.prototype, "mAl", void 0);
    FTaskItem = __decorate([
        ccclass
    ], FTaskItem);
    return FTaskItem;
}(cc.Component));
exports.FTaskItem = FTaskItem;

cc._RF.pop();