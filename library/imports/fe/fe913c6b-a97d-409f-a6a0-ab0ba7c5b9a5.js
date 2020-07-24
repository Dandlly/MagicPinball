"use strict";
cc._RF.push(module, 'fe913xrqX1An6agqwunxbml', 'FTaskPage');
// FSDK_ASS/FSript/FView/FTaskPage.ts

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
var FCreditRecord_1 = require("./FCreditRecord");
var FGlobal_1 = require("../FModel/FGlobal");
var FTaskItem_1 = require("./FTaskItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTaskPage = /** @class */ (function (_super) {
    __extends(FTaskPage, _super);
    function FTaskPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mTip1 = null;
        _this.mTransPro = null;
        _this.mNowNum = null;
        _this.mLabelPro = null;
        _this.mBtnTrans = null;
        _this.mItem = null;
        _this.mScroll = null;
        _this.mCardNode = null;
        return _this;
        // update (dt) {}
    }
    FTaskPage.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 75 + FGlobal_1.FGlobal.getScale();
        this.node.getChildByName("mainNode").getComponent(cc.Widget).top = 75 + FGlobal_1.FGlobal.getScale();
    };
    FTaskPage.prototype.start = function () {
    };
    FTaskPage.prototype.onEnable = function () {
        this.initData();
        FSDK.addCreditListen(this.creditListen, this);
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
    };
    FTaskPage.prototype.onDisable = function () {
        FSDK.removeCreditListen(this.creditListen, this);
    };
    FTaskPage.prototype.creditListen = function (data) {
        if (data.type == 'pp') {
            this.initData();
        }
    };
    FTaskPage.prototype.initData = function () {
        this.mTip1.string = "can " + FConfig.FSDK_CONF.word.tip2 + ")";
        this.mNowNum.string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_pp.toFixed(2);
        this.mTransPro.fillRange = FGlobal_1.FGlobal.USER_INFO.credit_pp / 100;
        this.mLabelPro.string = "$" + FGlobal_1.FGlobal.USER_INFO.credit_pp.toFixed(2) + " / $100.00";
        this.mBtnTrans.interactable = this.mTransPro.fillRange >= 1;
    };
    FTaskPage.prototype.setData = function (data) {
        if (FConfig.FSDK_CONF.TASK_CONF.length == 1) {
            this.oneTask(data);
        }
        else {
            this.moreTask(data);
        }
    };
    FTaskPage.prototype.oneTask = function (num) {
        var length = FConfig.FSDK_CONF.TASK_CONF[0].target.length;
        for (var i = 0; i < length; i++) {
            var item = null;
            if (this.mScroll.content.childrenCount == length) {
                item = this.mScroll.content.children[i];
            }
            else {
                item = cc.instantiate(this.mItem);
                item.parent = this.mScroll.content;
            }
            item.getComponent(FTaskItem_1.FTaskItem).setOneData(num, i, this.node);
        }
    };
    FTaskPage.prototype.moreTask = function (list) {
        var length = FConfig.FSDK_CONF.TASK_CONF.length;
        for (var i = 0; i < length; i++) {
            var item = null;
            if (this.mScroll.content.childrenCount == length) {
                item = this.mScroll.content.children[i];
            }
            else {
                item = cc.instantiate(this.mItem);
                item.parent = this.mScroll.content;
            }
            item.getComponent(FTaskItem_1.FTaskItem).setMoreData(list[i], i, this.node);
        }
    };
    FTaskPage.prototype.closePage = function () {
        this.node.parent = null;
    };
    FTaskPage.prototype.ppRecord = function () {
        FPanelManager_1.FPanelManager.load('FCreditRecord', this.node, function (panel) {
            panel.getComponent(FCreditRecord_1.FCreditRecord).setType('pp');
        });
    };
    FTaskPage.prototype.getTrans = function () {
        FSDK.showToast("You have abnormal behaviors," + FConfig.FSDK_CONF.word.tip2 + " failed");
    };
    __decorate([
        property(cc.Label)
    ], FTaskPage.prototype, "mTip1", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTaskPage.prototype, "mTransPro", void 0);
    __decorate([
        property(cc.Label)
    ], FTaskPage.prototype, "mNowNum", void 0);
    __decorate([
        property(cc.Label)
    ], FTaskPage.prototype, "mLabelPro", void 0);
    __decorate([
        property(cc.Button)
    ], FTaskPage.prototype, "mBtnTrans", void 0);
    __decorate([
        property(cc.Node)
    ], FTaskPage.prototype, "mItem", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FTaskPage.prototype, "mScroll", void 0);
    __decorate([
        property(cc.Node)
    ], FTaskPage.prototype, "mCardNode", void 0);
    FTaskPage = __decorate([
        ccclass
    ], FTaskPage);
    return FTaskPage;
}(cc.Component));
exports.FTaskPage = FTaskPage;

cc._RF.pop();