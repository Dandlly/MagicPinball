
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FTaskPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZUYXNrUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFDeEQsaURBQWdEO0FBQ2hELDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFFbEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUQzQztRQUFBLHFFQTJHQztRQXhHRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixhQUFPLEdBQWtCLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQVksSUFBSSxDQUFDOztRQXlGMUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6RkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0YsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJ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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQzs4Q0FDTTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNRO0lBaEJqQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBMEdyQjtJQUFELGdCQUFDO0NBMUdELEFBMEdDLENBMUc4QixFQUFFLENBQUMsU0FBUyxHQTBHMUM7QUExR1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGUGFuZWxNYW5hZ2VyIH0gZnJvbSBcIi4uL0ZNb2RlbC9GUGFuZWxNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEZDcmVkaXRSZWNvcmQgfSBmcm9tIFwiLi9GQ3JlZGl0UmVjb3JkXCI7XHJcbmltcG9ydCB7IEZHbG9iYWwgfSBmcm9tIFwiLi4vRk1vZGVsL0ZHbG9iYWxcIjtcclxuaW1wb3J0IHsgRlRhc2tJdGVtIH0gZnJvbSBcIi4vRlRhc2tJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEZUYXNrUGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtVGlwMTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIG1UcmFuc1BybzogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1Ob3dOdW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1MYWJlbFBybzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIG1CdG5UcmFuczogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbUl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXHJcbiAgICBtU2Nyb2xsOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbUNhcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVG9wXCIpLmhlaWdodCA9IDc1ICsgRkdsb2JhbC5nZXRTY2FsZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1haW5Ob2RlXCIpLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDc1ICsgRkdsb2JhbC5nZXRTY2FsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgRlNESy5hZGRDcmVkaXRMaXN0ZW4odGhpcy5jcmVkaXRMaXN0ZW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubVNjcm9sbC5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgIHRoaXMubVNjcm9sbC5zY3JvbGxUb1RvcCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgRlNESy5yZW1vdmVDcmVkaXRMaXN0ZW4odGhpcy5jcmVkaXRMaXN0ZW4sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWRpdExpc3RlbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PSAncHAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tVGlwMS5zdHJpbmcgPSBgY2FuICR7RkNvbmZpZy5GU0RLX0NPTkYud29yZC50aXAyfSlgO1xyXG4gICAgICAgIHRoaXMubU5vd051bS5zdHJpbmcgPSBgJCR7Rkdsb2JhbC5VU0VSX0lORk8uY3JlZGl0X3BwLnRvRml4ZWQoMil9YDtcclxuICAgICAgICB0aGlzLm1UcmFuc1Byby5maWxsUmFuZ2UgPSBGR2xvYmFsLlVTRVJfSU5GTy5jcmVkaXRfcHAgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5tTGFiZWxQcm8uc3RyaW5nID0gYCQke0ZHbG9iYWwuVVNFUl9JTkZPLmNyZWRpdF9wcC50b0ZpeGVkKDIpfSAvICQxMDAuMDBgO1xyXG4gICAgICAgIHRoaXMubUJ0blRyYW5zLmludGVyYWN0YWJsZSA9IHRoaXMubVRyYW5zUHJvLmZpbGxSYW5nZSA+PSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmKEZDb25maWcuRlNES19DT05GLlRBU0tfQ09ORi5sZW5ndGggPT0gMSl7XHJcbiAgICAgICAgICAgdGhpcy5vbmVUYXNrKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVUYXNrKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uZVRhc2sobnVtKXtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gRkNvbmZpZy5GU0RLX0NPTkYuVEFTS19DT05GWzBdLnRhcmdldC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1TY3JvbGwuY29udGVudC5jaGlsZHJlbkNvdW50ID09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMubVNjcm9sbC5jb250ZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLm1TY3JvbGwuY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChGVGFza0l0ZW0pLnNldE9uZURhdGEobnVtLCBpLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3JlVGFzayhsaXN0KXtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gRkNvbmZpZy5GU0RLX0NPTkYuVEFTS19DT05GLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubVNjcm9sbC5jb250ZW50LmNoaWxkcmVuQ291bnQgPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5tU2Nyb2xsLmNvbnRlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5tSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubVNjcm9sbC5jb250ZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KEZUYXNrSXRlbSkuc2V0TW9yZURhdGEobGlzdFtpXSwgaSwgdGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYWdlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHBwUmVjb3JkKCkge1xyXG4gICAgICAgIEZQYW5lbE1hbmFnZXIubG9hZCgnRkNyZWRpdFJlY29yZCcsIHRoaXMubm9kZSwgZnVuY3Rpb24gKHBhbmVsOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhbmVsLmdldENvbXBvbmVudChGQ3JlZGl0UmVjb3JkKS5zZXRUeXBlKCdwcCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnMoKSB7XHJcbiAgICAgICAgRlNESy5zaG93VG9hc3QoYFlvdSBoYXZlIGFibm9ybWFsIGJlaGF2aW9ycywke0ZDb25maWcuRlNES19DT05GLndvcmQudGlwMn0gZmFpbGVkYCk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==