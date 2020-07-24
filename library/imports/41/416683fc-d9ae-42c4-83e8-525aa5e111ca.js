"use strict";
cc._RF.push(module, '41668P82a5CxIPoUlql4RHK', 'FGrade');
// FSDK_ASS/FSript/FView/FGrade.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FGrade = /** @class */ (function (_super) {
    __extends(FGrade, _super);
    function FGrade() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mStarNode = null;
        _this.num = 5;
        _this.cb = null;
        return _this;
    }
    FGrade.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
    };
    FGrade.prototype.onEnable = function () {
        this.num = 5;
        for (var i = 0; i < this.mStarNode.childrenCount; i++) {
            this.mStarNode.children[i].getChildByName("guang").active = true;
        }
    };
    FGrade.prototype.clickStar = function (target) {
        this.num = parseInt(target.target.name);
        for (var i = 0; i < this.mStarNode.childrenCount; i++) {
            this.mStarNode.children[i].getChildByName("guang").active = i < this.num;
        }
    };
    FGrade.prototype.setGrade = function () {
        FGlobal_1.FGlobal.USER_INFO.isGrade = true;
        FSDK.saveData("GRADE", FGlobal_1.FGlobal.USER_INFO.isGrade);
        if (this.num > 3) {
            FNative.jumpShop(FNetWorkConfig.data.pg);
        }
        this.closePage();
    };
    FGrade.prototype.setCb = function (cb, target) {
        this.cb = {
            cb: cb,
            target: target
        };
    };
    FGrade.prototype.closePage = function (evt) {
        this.cb.cb.call(this.cb.target, FGlobal_1.FGlobal.USER_INFO.isGrade);
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    __decorate([
        property(cc.Node)
    ], FGrade.prototype, "mStarNode", void 0);
    FGrade = __decorate([
        ccclass
    ], FGrade);
    return FGrade;
}(cc.Component));
exports.FGrade = FGrade;

cc._RF.pop();