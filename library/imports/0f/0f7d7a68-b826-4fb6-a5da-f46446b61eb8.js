"use strict";
cc._RF.push(module, '0f7d7pouCZPtqXa9GRGth64', 'FTransItem');
// FSDK_ASS/FSript/FView/FTransItem.ts

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
var FTransItem = /** @class */ (function (_super) {
    __extends(FTransItem, _super);
    function FTransItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mCardIcon = null;
        _this.mCoin = null;
        _this.mStatus = null;
        _this.mCardIconSp = [];
        _this.mAmount = null;
        _this.mIcon = null;
        _this.data = null;
        _this.confData = null;
        _this.mFTransInfo = null;
        return _this;
    }
    FTransItem.prototype.onLoad = function () {
        cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
    };
    FTransItem.prototype.on_S2C_trans_history = function (msg) {
        if (!msg.err && msg.data.type == 'list') {
            for (var i = 0; i < msg.data.records.length; i++) {
                if (msg.data.records[i].custom_id == this.data.id) {
                    this.setStatus(msg.data.records[i]);
                }
            }
        }
    };
    FTransItem.prototype.setData = function (data, transInfo, icon) {
        if (icon === void 0) { icon = null; }
        if (icon) {
            this.mIcon.spriteFrame = icon;
        }
        this.mFTransInfo = transInfo;
        this.data = data;
        this.mAmount.string = "$" + data.amount;
        if (!this.confData) {
            this.confData = this.getConfInfo();
        }
        this.data.count = this.confData.coin;
        this.mCoin.string = this.confData.coin;
        this.mCardIcon.spriteFrame = this.mCardIconSp[this.confData.type - 1];
        this.data['icon'] = this.mCardIconSp[this.confData.type - 1];
        if (this.confData.type == 1 && cc.sys.os == cc.sys.OS_IOS) {
            this.node.parent = null;
        }
        if (this.confData.type == 2 && cc.sys.os == cc.sys.OS_ANDROID) {
            this.node.parent = null;
        }
        if (FGlobal_1.FGlobal.USER_INFO.trans_record['list']) {
            for (var i = 0; i < FGlobal_1.FGlobal.USER_INFO.trans_record.list.length; i++) {
                if (FGlobal_1.FGlobal.USER_INFO.trans_record.list[i] == this.data.id) {
                    this.setStatus({ status: 0 });
                }
            }
        }
    };
    //返回配置表的信息
    FTransItem.prototype.getConfInfo = function () {
        for (var i = 0; i < FConfig.FSDK_CONF.LIST_CONF.target.length; i++) {
            if (this.data.id == FConfig.FSDK_CONF.LIST_CONF.target[i].id) {
                return FConfig.FSDK_CONF.LIST_CONF.target[i];
            }
        }
        return null;
    };
    FTransItem.prototype.click = function () {
        var _this = this;
        if (!FGlobal_1.FGlobal.USER_INFO.trans_record.list) {
            FGlobal_1.FGlobal.USER_INFO.trans_record.list = [];
        }
        for (var i = 0; i < FGlobal_1.FGlobal.USER_INFO.trans_record.list.length; i++) {
            if (FGlobal_1.FGlobal.USER_INFO.trans_record.list[i] == this.data.id) {
                FSDK.showToast('The order has been received');
                return;
            }
        }
        FPanelManager_1.FPanelManager.open_eff(this.mFTransInfo.node);
        this.mFTransInfo.setData({
            data: this.data, confData: this.confData, cb: function () {
                FGlobal_1.FGlobal.USER_INFO.trans_record.list.push(_this.data.id);
                _this.setStatus({ status: 0 });
            }
        });
    };
    FTransItem.prototype.setStatus = function (data) {
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
        this.mCoin.node.parent.parent.active = false;
        this.mStatus.node.active = true;
        this.mStatus.string = stutas;
        this.mStatus.node.color = new cc.Color().fromHEX(color);
    };
    __decorate([
        property(cc.Sprite)
    ], FTransItem.prototype, "mCardIcon", void 0);
    __decorate([
        property(cc.Label)
    ], FTransItem.prototype, "mCoin", void 0);
    __decorate([
        property(cc.Label)
    ], FTransItem.prototype, "mStatus", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FTransItem.prototype, "mCardIconSp", void 0);
    __decorate([
        property(cc.Label)
    ], FTransItem.prototype, "mAmount", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransItem.prototype, "mIcon", void 0);
    FTransItem = __decorate([
        ccclass
    ], FTransItem);
    return FTransItem;
}(cc.Component));
exports.FTransItem = FTransItem;

cc._RF.pop();