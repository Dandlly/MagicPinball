
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FSignPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZTaWduUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMseURBQXdEO0FBQ3hELGlEQUFnRDtBQUUxQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBRDNDO1FBQUEscUVBaUxDO1FBOUtHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFhLElBQUksQ0FBQzs7UUFxSjlCLGlCQUFpQjtJQUNyQixDQUFDO0lBckpHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxp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Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNXO0lBMUJyQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBZ0xyQjtJQUFELGdCQUFDO0NBaExELEFBZ0xDLENBaEw4QixFQUFFLENBQUMsU0FBUyxHQWdMMUM7QUFoTFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4uL0ZNb2RlbC9GR2xvYmFsXCI7XHJcbmltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi4vRk1vZGVsL0ZQYW5lbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRkNyZWRpdFJlY29yZCB9IGZyb20gXCIuL0ZDcmVkaXRSZWNvcmRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRlNpZ25QYWdlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1UaXAxOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbVRyYW5zUHJvOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbU5vd051bTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbVNpZ25EYXk6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1MYWJlbFBybzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIG1CdG5UcmFuczogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVNpZ25Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVByb2JhbHk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIG1Db2xsZWN0OiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtQ2FyZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1DYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbVByb2JhYmx5UHJvOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbVByb2JhYmx5TGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRvcFwiKS5oZWlnaHQgPSA3NSArIEZHbG9iYWwuZ2V0U2NhbGUoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYWluTm9kZVwiKS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSA3NSArIEZHbG9iYWwuZ2V0U2NhbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgICAgIEZTREsuYWRkQ3JlZGl0TGlzdGVuKHRoaXMuY3JlZGl0TGlzdGVuLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgRlNESy5yZW1vdmVDcmVkaXRMaXN0ZW4odGhpcy5jcmVkaXRMaXN0ZW4sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWRpdExpc3RlbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSAnZ3AnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tVGlwMS5zdHJpbmcgPSBgY2FuICR7RkNvbmZpZy5GU0RLX0NPTkYud29yZC50aXAyfSlgO1xyXG4gICAgICAgIHRoaXMubU5vd051bS5zdHJpbmcgPSBgJCR7Rkdsb2JhbC5VU0VSX0lORk8uY3JlZGl0X2dwLnRvRml4ZWQoMil9YDtcclxuICAgICAgICB0aGlzLm1UcmFuc1Byby5maWxsUmFuZ2UgPSBGR2xvYmFsLlVTRVJfSU5GTy5jcmVkaXRfZ3AgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5tTGFiZWxQcm8uc3RyaW5nID0gYCQke0ZHbG9iYWwuVVNFUl9JTkZPLmNyZWRpdF9ncC50b0ZpeGVkKDIpfSAvICQxMDAuMDBgO1xyXG4gICAgICAgIHRoaXMubUNhcmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tQnRuVHJhbnMuaW50ZXJhY3RhYmxlID0gdGhpcy5tVHJhbnNQcm8uZmlsbFJhbmdlID49IDE7XHJcbiAgICAgICAgdGhpcy5zZXRTaWduKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2lnbigpIHtcclxuICAgICAgICB0aGlzLm1Qcm9iYWx5LmFjdGl2ZSA9IEZHbG9iYWwuU0lHTl9JTkZPLnNpZ25EYXkgPj0gNztcclxuICAgICAgICB0aGlzLm1TaWduTm9kZS5hY3RpdmUgPSAhdGhpcy5tUHJvYmFseS5hY3RpdmU7XHJcbiAgICAgICAgaWYgKEZHbG9iYWwuU0lHTl9JTkZPLnNpZ25EYXkgPCA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMubUNvbGxlY3QuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tU2lnbk5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1TaWduTm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZSgnYWxfYmcnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubVNpZ25Ob2RlLmNoaWxkcmVuW0ZHbG9iYWwuU0lHTl9JTkZPLnNpZ25EYXkgLSBGR2xvYmFsLlNJR05fSU5GTy5pc1NpZ25dLmdldENoaWxkQnlOYW1lKCdhbF9iZycpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1TaWduTm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZSgnYWwnKS5hY3RpdmUgPSBpIDwgRkdsb2JhbC5TSUdOX0lORk8uc2lnbkRheTtcclxuICAgICAgICAgICAgICAgIHRoaXMubVNpZ25Ob2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKCdtc2cnKS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwxJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBGQ29uZmlnLkZTREtfQ09ORi53b3JkLnRpcDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1TaWduTm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZSgnbXNnJykuZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsMicpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaSA9PSA2ID8gXCI1MFwiIDogRkNvbmZpZy5GU0RLX0NPTkYuU0lHTl9DT05GW2ldICsgXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMubVNpZ25Ob2RlLmNoaWxkcmVuQ291bnQgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tU2lnbk5vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoJ21zZycpLmdldENoaWxkQnlOYW1lKCdsYWJlbDEnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiUHJvYmFibHkgZ2V0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIUZHbG9iYWwuU0lHTl9JTkZPLmlzU2lnbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGVBY3Rpb24odGhpcy5tU2lnbk5vZGUuY2hpbGRyZW5bRkdsb2JhbC5TSUdOX0lORk8uc2lnbkRheSAtIEZHbG9iYWwuU0lHTl9JTkZPLmlzU2lnbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubUNvbGxlY3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubVNpZ25Ob2RlLmNoaWxkcmVuW2ldLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tU2lnbk5vZGUuY2hpbGRyZW5baV0uc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1Qcm9iYWJseVByby5maWxsUmFuZ2UgPSBGR2xvYmFsLlNJR05fSU5GTy5zaWduRGF5IC8gMTU7XHJcbiAgICAgICAgICAgIHRoaXMubVByb2JhYmx5TGFiLnN0cmluZyA9IEZHbG9iYWwuU0lHTl9JTkZPLnNpZ25EYXkgKyBcIi9cIiArIDE1O1xyXG4gICAgICAgICAgICB0aGlzLm1Db2xsZWN0LmludGVyYWN0YWJsZSA9IHRoaXMubVByb2JhYmx5UHJvLmZpbGxSYW5nZSA+PSAxICYmICFGR2xvYmFsLlNJR05fSU5GTy5pc0xvbmdTaWduO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja1NpZ24oKSB7XHJcbiAgICAgICAgaWYgKEZHbG9iYWwuU0lHTl9JTkZPLnNpZ25EYXkgPCA3KSB7XHJcbiAgICAgICAgICAgIGlmICghRkdsb2JhbC5TSUdOX0lORk8uaXNTaWduKSB7XHJcbiAgICAgICAgICAgICAgICBGR2xvYmFsLlNJR05fSU5GTy5pc1NpZ24gPSAxO1xyXG4gICAgICAgICAgICAgICAgRkdsb2JhbC5TSUdOX0lORk8uc2lnbkRheSArPSAxO1xyXG4gICAgICAgICAgICAgICAgRlNESy5zYXZlRGF0YSgnU0lHTl9JTkZPJywgRkdsb2JhbC5TSUdOX0lORk8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIUZHbG9iYWwuU0lHTl9JTkZPLmlzTG9uZ1NpZ24pIHtcclxuICAgICAgICAgICAgICAgIEZHbG9iYWwuU0lHTl9JTkZPLmlzTG9uZ1NpZ24gPSAxO1xyXG4gICAgICAgICAgICAgICAgRlNESy5zYXZlRGF0YSgnU0lHTl9JTkZPJywgRkdsb2JhbC5TSUdOX0lORk8pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyZCgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1Db2xsZWN0LmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjYWxlQWN0aW9uKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMS4xIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlUGFnZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL+WNoemjmOS4iuWOu1xyXG4gICAgbW92ZUNhcmQodHlwZSA9IDApIHtcclxuICAgICAgICB0aGlzLm1DYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tQ2FyZC5zY2FsZSA9IDAuNDU7XHJcbiAgICAgICAgICAgIHRoaXMubUNhcmQucG9zaXRpb24gPSB0aGlzLmdldFN0YXJ0UG9zaXRpb24odGhpcy5tUHJvYmFseS5nZXRDaGlsZEJ5TmFtZSgnY2FyZCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubUNhcmQuc2NhbGUgPSAwLjIzO1xyXG4gICAgICAgICAgICB0aGlzLm1DYXJkLnBvc2l0aW9uID0gdGhpcy5nZXRTdGFydFBvc2l0aW9uKHRoaXMubVNpZ25Ob2RlLmNoaWxkcmVuW0ZHbG9iYWwuU0lHTl9JTkZPLnNpZ25EYXkgLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubUNhcmQpXHJcbiAgICAgICAgICAgIC8vIC5ieSgwLjIse3g6MCx5Oi00MH0pXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgcG9zaXRpb246IHRoaXMuZ2V0RW5kUG9zaXRpb24oKSwgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcclxuICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tQ2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRlNESy5zZXRDcmVkaXQoXCJncFwiLCAxMCwgRkNvbmZpZy5DUkVESVRfRlJPTS5TSUdOX0lOKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIEZTREsuc2V0Q3JlZGl0KFwiZ3BcIiwgRkNvbmZpZy5GU0RLX0NPTkYuU0lHTl9DT05GW0ZHbG9iYWwuU0lHTl9JTkZPLnNpZ25EYXkgLSAxXSwgRkNvbmZpZy5DUkVESVRfRlJPTS5TSUdOX0lOKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPlumjmOeahOi1t+Wni+eCuVxyXG4gICAgZ2V0U3RhcnRQb3NpdGlvbihub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgbGV0IHdvcmQgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdtYWluTm9kZScpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmQpO1xyXG4gICAgICAgIHJldHVybiBzdGFydDtcclxuICAgIH1cclxuICAgIC8v6I635Y+W55uu5qCH54K5XHJcbiAgICBnZXRFbmRQb3NpdGlvbigpIHtcclxuICAgICAgICBsZXQgd29yZCA9IHRoaXMubUNhcmROb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm1DYXJkTm9kZS5nZXRDaGlsZEJ5TmFtZSgnY2FyZCcpLnBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgZW5kID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdtYWluTm9kZScpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmQpO1xyXG4gICAgICAgIHJldHVybiBlbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ljoblj7LorrDlvZVcclxuICAgIGdwUmVjb3JkKCkge1xyXG4gICAgICAgIEZQYW5lbE1hbmFnZXIubG9hZCgnRkNyZWRpdFJlY29yZCcsIHRoaXMubm9kZSwgZnVuY3Rpb24gKHBhbmVsOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhbmVsLmdldENvbXBvbmVudChGQ3JlZGl0UmVjb3JkKS5zZXRUeXBlKCdncCcpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnMoKSB7XHJcbiAgICAgICAgRlNESy5zaG93VG9hc3QoYFlvdSBoYXZlIGFibm9ybWFsIGJlaGF2aW9ycywke0ZDb25maWcuRlNES19DT05GLndvcmQudGlwMn0gZmFpbGVkYCk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==