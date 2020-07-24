"use strict";
cc._RF.push(module, '3ddfe/Mh51J6oXBBLdrGcIp', 'FInvityTaskItem');
// FSDK_ASS/FSript/FView/FInvityTaskItem.ts

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
var FInvityTaskItem = /** @class */ (function (_super) {
    __extends(FInvityTaskItem, _super);
    function FInvityTaskItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mAmount = null;
        _this.mTitle = null;
        _this.mPro = null;
        _this.sPro = null;
        _this.mBtnTrans = null;
        _this.mStaus = null;
        _this.pos = 0;
        _this.data = null;
        _this.parent = null;
        return _this;
    }
    FInvityTaskItem.prototype.onEnable = function () {
        cc.director.on(FEventID.S2C_trans_history, this.setHistory, this);
    };
    FInvityTaskItem.prototype.onDisable = function () {
        cc.director.off(FEventID.S2C_trans_history, this.setHistory, this);
    };
    FInvityTaskItem.prototype.setData = function (pos, data, parent) {
        this.pos = pos;
        this.data = data;
        this.parent = parent;
        this.mAmount.string = "$" + data.amount;
        this.mTitle.string = "invite " + data.count + " friends";
        this.mPro.string = FGlobal_1.FGlobal.USER_INFO.invite_count + "/" + data.count;
        this.sPro.fillRange = FGlobal_1.FGlobal.USER_INFO.invite_count / data.count;
        this.mBtnTrans.interactable = this.sPro.fillRange >= 1;
    };
    FInvityTaskItem.prototype.getTrans = function () {
        var _this = this;
        FSDK.showTransPage(this.parent, this.data, function () {
            FGlobal_1.FGlobal.invite_task.push(_this.data.id);
            _this.setStatus({ status: 0 });
        });
    };
    FInvityTaskItem.prototype.setHistory = function (data) {
        if (!this.data)
            return;
        if (data && data.data.records.length) {
            var type = data.data.type;
            data = data.data.records;
            if (type == 'invite') {
                for (var i = 0; i < data.length; i++) {
                    if (this.data.id == data[i].custom_id) {
                        this.setStatus(data[i]);
                    }
                }
            }
        }
        else {
            this.initStatus();
        }
    };
    FInvityTaskItem.prototype.setStatus = function (data) {
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
        this.mBtnTrans.node.active = false;
        this.mStaus.string = stutas;
        this.mStaus.node.color = new cc.Color().fromHEX(color);
    };
    FInvityTaskItem.prototype.initStatus = function () {
        if (!this.data)
            return;
        var data = FGlobal_1.FGlobal.invite_task;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == this.data.id) {
                this.mStaus.node.active = true;
                this.setStatus({ status: 0 });
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mAmount", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mTitle", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mPro", void 0);
    __decorate([
        property(cc.Sprite)
    ], FInvityTaskItem.prototype, "sPro", void 0);
    __decorate([
        property(cc.Button)
    ], FInvityTaskItem.prototype, "mBtnTrans", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mStaus", void 0);
    FInvityTaskItem = __decorate([
        ccclass
    ], FInvityTaskItem);
    return FInvityTaskItem;
}(cc.Component));
exports.FInvityTaskItem = FInvityTaskItem;

cc._RF.pop();