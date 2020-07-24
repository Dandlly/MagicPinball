
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FTransItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZUcmFuc0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQXdEO0FBQ3hELDZDQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFZO0lBRDVDO1FBQUEscUVBMEhDO1FBdkhHLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQXFCLEVBQUUsQ0FBQztRQUVuQyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsaUJBQVcsR0FBZSxJQUFJLENBQUM7O0lBMEduQyxDQUFDO0lBekdHLDJCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCx5Q0FBb0IsR0FBcEIsVUFBcUIsR0FBRztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUks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O0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDVTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0c7SUFaZCxVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBeUh0QjtJQUFELGlCQUFDO0NBekhELEFBeUhDLENBekgrQixFQUFFLENBQUMsU0FBUyxHQXlIM0M7QUF6SFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGVHJhbnNJbmZvIH0gZnJvbSBcIi4vRlRyYW5zSW5mb1wiO1xyXG5pbXBvcnQgeyBGUGFuZWxNYW5hZ2VyIH0gZnJvbSBcIi4uL0ZNb2RlbC9GUGFuZWxNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEZHbG9iYWwgfSBmcm9tIFwiLi4vRk1vZGVsL0ZHbG9iYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRlRyYW5zSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbUNhcmRJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbUNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1TdGF0dXM6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIG1DYXJkSWNvblNwOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbUljb246Y2MuU3ByaXRlID0gbnVsbDtcclxuICAgIGRhdGEgPSBudWxsO1xyXG4gICAgY29uZkRhdGEgPSBudWxsO1xyXG4gICAgbUZUcmFuc0luZm86IEZUcmFuc0luZm8gPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKEZFdmVudElELlMyQ190cmFuc19oaXN0b3J5LCB0aGlzLm9uX1MyQ190cmFuc19oaXN0b3J5LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbl9TMkNfdHJhbnNfaGlzdG9yeShtc2cpIHtcclxuICAgICAgICBpZiAoIW1zZy5lcnIgJiYgbXNnLmRhdGEudHlwZSA9PSAnbGlzdCcpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cuZGF0YS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXNnLmRhdGEucmVjb3Jkc1tpXS5jdXN0b21faWQgPT0gdGhpcy5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMobXNnLmRhdGEucmVjb3Jkc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShkYXRhLCB0cmFuc0luZm8saWNvbj1udWxsKSB7XHJcbiAgICAgICAgaWYoaWNvbil7XHJcbiAgICAgICAgICAgIHRoaXMubUljb24uc3ByaXRlRnJhbWUgPSBpY29uO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1GVHJhbnNJbmZvID0gdHJhbnNJbmZvO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5tQW1vdW50LnN0cmluZyA9IFwiJFwiICsgZGF0YS5hbW91bnQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZkRhdGEgPSB0aGlzLmdldENvbmZJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YS5jb3VudCA9dGhpcy5jb25mRGF0YS5jb2luO1xyXG4gICAgICAgIHRoaXMubUNvaW4uc3RyaW5nID0gdGhpcy5jb25mRGF0YS5jb2luO1xyXG4gICAgICAgIHRoaXMubUNhcmRJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5tQ2FyZEljb25TcFt0aGlzLmNvbmZEYXRhLnR5cGUgLSAxXTtcclxuICAgICAgICB0aGlzLmRhdGFbJ2ljb24nXSA9IHRoaXMubUNhcmRJY29uU3BbdGhpcy5jb25mRGF0YS50eXBlIC0gMV07XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZkRhdGEudHlwZSA9PSAxICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb25mRGF0YS50eXBlID09IDIgJiYgY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEZHbG9iYWwuVVNFUl9JTkZPLnRyYW5zX3JlY29yZFsnbGlzdCddKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRkdsb2JhbC5VU0VSX0lORk8udHJhbnNfcmVjb3JkLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChGR2xvYmFsLlVTRVJfSU5GTy50cmFuc19yZWNvcmQubGlzdFtpXSA9PSB0aGlzLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyh7IHN0YXR1czogMCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+i/lOWbnumFjee9ruihqOeahOS/oeaBr1xyXG4gICAgZ2V0Q29uZkluZm8oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGQ29uZmlnLkZTREtfQ09ORi5MSVNUX0NPTkYudGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuaWQgPT0gRkNvbmZpZy5GU0RLX0NPTkYuTElTVF9DT05GLnRhcmdldFtpXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZDb25maWcuRlNES19DT05GLkxJU1RfQ09ORi50YXJnZXRbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2soKSB7XHJcbiAgICAgICAgaWYgKCFGR2xvYmFsLlVTRVJfSU5GTy50cmFuc19yZWNvcmQubGlzdCkge1xyXG4gICAgICAgICAgICBGR2xvYmFsLlVTRVJfSU5GTy50cmFuc19yZWNvcmQubGlzdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZHbG9iYWwuVVNFUl9JTkZPLnRyYW5zX3JlY29yZC5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChGR2xvYmFsLlVTRVJfSU5GTy50cmFuc19yZWNvcmQubGlzdFtpXSA9PSB0aGlzLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgIEZTREsuc2hvd1RvYXN0KCdUaGUgb3JkZXIgaGFzIGJlZW4gcmVjZWl2ZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBGUGFuZWxNYW5hZ2VyLm9wZW5fZWZmKHRoaXMubUZUcmFuc0luZm8ubm9kZSk7XHJcbiAgICAgICAgdGhpcy5tRlRyYW5zSW5mby5zZXREYXRhKHtcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLCBjb25mRGF0YTogdGhpcy5jb25mRGF0YSwgY2I6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBGR2xvYmFsLlVTRVJfSU5GTy50cmFuc19yZWNvcmQubGlzdC5wdXNoKHRoaXMuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyh7IHN0YXR1czogMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzKGRhdGEpIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIuacieayoeaciei/m+adpVwiKVxyXG4gICAgICAgIGxldCBzdHV0YXMgPSAnUHJvY2Vzc2luZyc7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gJ0ZGOEYwMCc7XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBzdHV0YXMgPSAnUHJvY2Vzc2luZyc7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICdGRjhGMDAnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgc3R1dGFzID0gJ0ZpbmlzaCc7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcxNUMzMjMnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgc3R1dGFzID0gJ0luIFJldmlldyc7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICdGRjhGMDAnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgIHN0dXRhcyA9ICdSZWZ1c2UnO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnRDMyNDI0J1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgLTI6XHJcbiAgICAgICAgICAgICAgICBzdHV0YXMgPSAnR2V0RmFpbCc7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICdEMzI0MjQnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tQ29pbi5ub2RlLnBhcmVudC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tU3RhdHVzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1TdGF0dXMuc3RyaW5nID0gc3R1dGFzO1xyXG4gICAgICAgIHRoaXMubVN0YXR1cy5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChjb2xvcik7XHJcbiAgICB9XHJcbn1cclxuIl19