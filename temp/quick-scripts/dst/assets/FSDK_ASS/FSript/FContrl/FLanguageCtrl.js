
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FContrl/FLanguageCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8e257qu15B7Lgz843uycdp', 'FLanguageCtrl');
// FSDK_ASS/FSript/FContrl/FLanguageCtrl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FLanguageCtrl = /** @class */ (function (_super) {
    __extends(FLanguageCtrl, _super);
    function FLanguageCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        return _this;
    }
    FLanguageCtrl.prototype.onLoad = function () {
    };
    FLanguageCtrl.prototype.setLanguage = function () {
    };
    __decorate([
        property
    ], FLanguageCtrl.prototype, "id", void 0);
    FLanguageCtrl = __decorate([
        ccclass
    ], FLanguageCtrl);
    return FLanguageCtrl;
}(cc.Component));
exports.default = FLanguageCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRkNvbnRybFxcRkxhbmd1YWdlQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBWUM7UUFURyxRQUFFLEdBQVcsSUFBSSxDQUFDOztJQVN0QixDQUFDO0lBUEcsOEJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCxtQ0FBVyxHQUFYO0lBRUEsQ0FBQztJQVJEO1FBREMsUUFBUTs2Q0FDUztJQUZELGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FXakM7SUFBRCxvQkFBQztDQVhELEFBV0MsQ0FYMEMsRUFBRSxDQUFDLFNBQVMsR0FXdEQ7a0JBWG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkxhbmd1YWdlQ3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19