"use strict";
cc._RF.push(module, '09973NNTGxFso9yB5gTx29Z', 'FUpdate');
// FSDK_ASS/FSript/FView/FUpdate.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FUpdate = /** @class */ (function (_super) {
    __extends(FUpdate, _super);
    function FUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mCurrent = null;
        _this.mLatest = null;
        _this.mBtnClose = null;
        return _this;
    }
    FUpdate.prototype.onEnable = function () {
        this.mCurrent.string = "v" + FConfig.VERSION;
        this.mLatest.string = "v" + FConfig.FSDK_CONF.UPDATE_CONF.ver;
        this.mBtnClose.active = !FConfig.FSDK_CONF.UPDATE_CONF.must;
    };
    FUpdate.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    FUpdate.prototype.getUpdate = function () {
        FNative.jumpShop(FNetWorkConfig.data.pg);
    };
    __decorate([
        property(cc.Label)
    ], FUpdate.prototype, "mCurrent", void 0);
    __decorate([
        property(cc.Label)
    ], FUpdate.prototype, "mLatest", void 0);
    __decorate([
        property(cc.Node)
    ], FUpdate.prototype, "mBtnClose", void 0);
    FUpdate = __decorate([
        ccclass
    ], FUpdate);
    return FUpdate;
}(cc.Component));
exports.FUpdate = FUpdate;

cc._RF.pop();