"use strict";
cc._RF.push(module, '3f28fiBg3tBob6TUy1XYPAj', 'FCreditRecord');
// FSDK_ASS/FSript/FView/FCreditRecord.ts

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
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var FPanelManager_1 = require("../FModel/FPanelManager");
var FGlobal_1 = require("../FModel/FGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FCreditRecord = /** @class */ (function (_super) {
    __extends(FCreditRecord, _super);
    function FCreditRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mTitle_pp = null;
        _this.mTitle_gp = null;
        _this.mScroll = null;
        _this.mItem = null;
        _this.type = "";
        return _this;
    }
    FCreditRecord.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
    };
    FCreditRecord.prototype.onEnable = function () {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        cc.director.on(FEventID.CARD_RECORD, this.cardRecord, this);
    };
    FCreditRecord.prototype.onDisable = function () {
        cc.director.off(FEventID.CARD_RECORD, this.cardRecord, this);
    };
    FCreditRecord.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    FCreditRecord.prototype.setType = function (type) {
        this.type = type;
        this.mTitle_gp.active = this.mTitle_pp.active = false;
        this['mTitle_' + type].active = true;
        FSocketSend_1.FSocketSend.C2S_info(['coins']);
    };
    FCreditRecord.prototype.cardRecord = function (data) {
        if (data[this.type]) {
            var list = data[this.type];
            for (var i = 0; i < this.mScroll.content.childrenCount; i++) {
                this.mScroll.content.children[i].active = false;
            }
            for (var i = 0; i < list.length; i++) {
                var item = null;
                if (i < this.mScroll.content.childrenCount) {
                    item = this.mScroll.content.children[i];
                    item.active = true;
                }
                else {
                    item = cc.instantiate(this.mItem);
                    item.parent = this.mScroll.content;
                }
                item.getChildByName('bg').active = (i + 1) % 2 != 0;
                item.getChildByName('from').getComponent(cc.Label).string = list[i].from;
                item.getChildByName('change').getComponent(cc.Label).string = "$" + list[i].change.toFixed(2);
                item.getChildByName('amount').getComponent(cc.Label).string = "$" + list[i].amount.toFixed(2);
                item.getChildByName('time').getComponent(cc.Label).string = FGlobal_1.FGlobal.getDateDay1(list[i].time);
            }
        }
        else {
            for (var i = 0; i < this.mScroll.content.childrenCount; i++) {
                this.mScroll.content.children[i].active = false;
            }
        }
        FLog.normal("历史记录 ", data);
    };
    __decorate([
        property(cc.Node)
    ], FCreditRecord.prototype, "mTitle_pp", void 0);
    __decorate([
        property(cc.Node)
    ], FCreditRecord.prototype, "mTitle_gp", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FCreditRecord.prototype, "mScroll", void 0);
    __decorate([
        property(cc.Node)
    ], FCreditRecord.prototype, "mItem", void 0);
    FCreditRecord = __decorate([
        ccclass
    ], FCreditRecord);
    return FCreditRecord;
}(cc.Component));
exports.FCreditRecord = FCreditRecord;

cc._RF.pop();