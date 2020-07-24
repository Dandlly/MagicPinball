"use strict";
cc._RF.push(module, '97e50ATWGpMrJXu1FHxLekB', 'FTwoCard');
// FSDK_ASS/FSript/FView/FTwoCard.ts

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
var FTwoCardItem_1 = require("./FTwoCardItem");
var FGlobal_1 = require("../FModel/FGlobal");
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTwoCard = /** @class */ (function (_super) {
    __extends(FTwoCard, _super);
    function FTwoCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mTitleSp = [];
        _this.mCardSp = [];
        _this.mTitle = null;
        _this.mCard1 = null;
        _this.mCard2 = null;
        return _this;
    }
    FTwoCard.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal_1.FGlobal.getScale();
    };
    FTwoCard.prototype.onEnable = function () {
        FSocketSend_1.FSocketSend.C2S_trans_history('twocard');
    };
    //0-pp 1-gp 2-ap
    FTwoCard.prototype.setType = function (type) {
        var _this = this;
        if (type == 1) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                type = 1;
            }
            else if (cc.sys.os == cc.sys.OS_IOS) {
                type = 2;
            }
        }
        this.mTitle.spriteFrame = this.mTitleSp[type];
        this.mCard1.setData(type, this.mCardSp[type], this);
        this.mCard2.setData(type, this.mCardSp[type], this);
        var cnt = 0;
        FSDK.getRegCnt(FNetWorkConfig.data.code, function (data) {
            console.log("什么啊  ", data);
            cnt = data[FNetWorkConfig.data.code];
            _this.mCard1.setCnt(cnt);
            _this.mCard2.setCnt(cnt);
        });
        this.mCard1.setCnt(cnt);
        this.mCard2.setCnt(cnt);
    };
    FTwoCard.prototype.closePage = function () {
        this.node.parent = null;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], FTwoCard.prototype, "mTitleSp", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FTwoCard.prototype, "mCardSp", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTwoCard.prototype, "mTitle", void 0);
    __decorate([
        property(FTwoCardItem_1.FTwoCardItem)
    ], FTwoCard.prototype, "mCard1", void 0);
    __decorate([
        property(FTwoCardItem_1.FTwoCardItem)
    ], FTwoCard.prototype, "mCard2", void 0);
    FTwoCard = __decorate([
        ccclass
    ], FTwoCard);
    return FTwoCard;
}(cc.Component));
exports.FTwoCard = FTwoCard;

cc._RF.pop();