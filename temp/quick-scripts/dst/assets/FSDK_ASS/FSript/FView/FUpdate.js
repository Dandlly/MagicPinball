
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FUpdate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBRWxELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBNkIsMkJBQVk7SUFEekM7UUFBQSxxRUFzQkM7UUFuQkcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBZTlCLENBQUM7SUFiRywwQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBSSxPQUFPLENBQUMsT0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ2hFLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksNkJBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBTmpCLE9BQU87UUFEbkIsT0FBTztPQUNLLE9BQU8sQ0FxQm5CO0lBQUQsY0FBQztDQXJCRCxBQXFCQyxDQXJCNEIsRUFBRSxDQUFDLFNBQVMsR0FxQnhDO0FBckJZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRlBhbmVsTWFuYWdlciB9IGZyb20gXCIuLi9GTW9kZWwvRlBhbmVsTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGVXBkYXRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1DdXJyZW50OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtTGF0ZXN0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1CdG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5tQ3VycmVudC5zdHJpbmcgPSBgdiR7RkNvbmZpZy5WRVJTSU9OfWA7XHJcbiAgICAgICAgdGhpcy5tTGF0ZXN0LnN0cmluZyA9IGB2JHtGQ29uZmlnLkZTREtfQ09ORi5VUERBVEVfQ09ORi52ZXJ9YDtcclxuICAgICAgICB0aGlzLm1CdG5DbG9zZS5hY3RpdmUgPSAhRkNvbmZpZy5GU0RLX0NPTkYuVVBEQVRFX0NPTkYubXVzdDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5jbG9zZV9lZmYodGhpcy5ub2RlLHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZSgpIHtcclxuICAgICAgICBGTmF0aXZlLmp1bXBTaG9wKEZOZXRXb3JrQ29uZmlnLmRhdGEucGcpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==