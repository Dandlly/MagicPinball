
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FGrade.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41668P82a5CxIPoUlql4RHK', 'FGrade');
// FSDK_ASS/FSript/FView/FGrade.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FGrade = /** @class */ (function (_super) {
    __extends(FGrade, _super);
    function FGrade() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mStarNode = null;
        _this.num = 5;
        _this.cb = null;
        return _this;
    }
    FGrade.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
    };
    FGrade.prototype.onEnable = function () {
        this.num = 5;
        for (var i = 0; i < this.mStarNode.childrenCount; i++) {
            this.mStarNode.children[i].getChildByName("guang").active = true;
        }
    };
    FGrade.prototype.clickStar = function (target) {
        this.num = parseInt(target.target.name);
        for (var i = 0; i < this.mStarNode.childrenCount; i++) {
            this.mStarNode.children[i].getChildByName("guang").active = i < this.num;
        }
    };
    FGrade.prototype.setGrade = function () {
        FGlobal_1.FGlobal.USER_INFO.isGrade = true;
        FSDK.saveData("GRADE", FGlobal_1.FGlobal.USER_INFO.isGrade);
        if (this.num > 3) {
            FNative.jumpShop(FNetWorkConfig.data.pg);
        }
        this.closePage();
    };
    FGrade.prototype.setCb = function (cb, target) {
        this.cb = {
            cb: cb,
            target: target
        };
    };
    FGrade.prototype.closePage = function (evt) {
        this.cb.cb.call(this.cb.target, FGlobal_1.FGlobal.USER_INFO.isGrade);
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    __decorate([
        property(cc.Node)
    ], FGrade.prototype, "mStarNode", void 0);
    FGrade = __decorate([
        ccclass
    ], FGrade);
    return FGrade;
}(cc.Component));
exports.FGrade = FGrade;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZHcmFkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMseURBQXdEO0FBRWxELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFEeEM7UUFBQSxxRUEwQ0M7UUF2Q0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRSxHQUFHLElBQUksQ0FBQzs7SUFxQ2QsQ0FBQztJQXBDRyx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEU7SUFDTCxDQUFDO0lBQ0QsMEJBQVMsR0FBVCxVQUFVLE1BQU07UUFDWixJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFDSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLGlCQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDZCxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHNCQUFLLEdBQUwsVUFBTSxFQUFFLEVBQUMsTUFBTTtRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUc7WUFDTixFQUFFLEVBQUMsRUFBRTtZQUNMLE1BQU0sRUFBQyxNQUFNO1NBQ2hCLENBQUE7SUFDTCxDQUFDO0lBRUQsMEJBQVMsR0FBVCxVQUFVLEdBQUk7UUFDVixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsNkJBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFGakIsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQXlDbEI7SUFBRCxhQUFDO0NBekNELEFBeUNDLENBekMyQixFQUFFLENBQUMsU0FBUyxHQXlDdkM7QUF6Q1ksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4uL0ZNb2RlbC9GR2xvYmFsXCI7XHJcbmltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi4vRk1vZGVsL0ZQYW5lbE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRkdyYWRlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVN0YXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG51bSA9IDU7XHJcbiAgICBjYiA9IG51bGw7XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm51bSA9IDU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1TdGFyTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tU3Rhck5vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJndWFuZ1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsaWNrU3Rhcih0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLm51bSA9IHBhcnNlSW50KHRhcmdldC50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1TdGFyTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tU3Rhck5vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJndWFuZ1wiKS5hY3RpdmUgPSBpIDwgdGhpcy5udW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEdyYWRlKCkge1xyXG4gICAgICAgIEZHbG9iYWwuVVNFUl9JTkZPLmlzR3JhZGUgPSB0cnVlO1xyXG4gICAgICAgIEZTREsuc2F2ZURhdGEoXCJHUkFERVwiLCBGR2xvYmFsLlVTRVJfSU5GTy5pc0dyYWRlKTtcclxuICAgICAgICBpZiAodGhpcy5udW0gPiAzKSB7XHJcbiAgICAgICAgICAgIEZOYXRpdmUuanVtcFNob3AoRk5ldFdvcmtDb25maWcuZGF0YS5wZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xvc2VQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2IoY2IsdGFyZ2V0KXtcclxuICAgICAgICB0aGlzLmNiID0ge1xyXG4gICAgICAgICAgICBjYjpjYixcclxuICAgICAgICAgICAgdGFyZ2V0OnRhcmdldFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoZXZ0Pyl7XHJcbiAgICAgICAgdGhpcy5jYi5jYi5jYWxsKHRoaXMuY2IudGFyZ2V0LEZHbG9iYWwuVVNFUl9JTkZPLmlzR3JhZGUpO1xyXG4gICAgICAgIEZQYW5lbE1hbmFnZXIuY2xvc2VfZWZmKHRoaXMubm9kZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19