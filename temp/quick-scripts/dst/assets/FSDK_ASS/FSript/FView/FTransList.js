
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FTransList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8dd59Er76dG4KnE3vA9XIou', 'FTransList');
// FSDK_ASS/FSript/FView/FTransList.ts

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
var FTransItem_1 = require("./FTransItem");
var FTransInfo_1 = require("./FTransInfo");
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTransList = /** @class */ (function (_super) {
    __extends(FTransList, _super);
    function FTransList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mMyCoin = null;
        _this.mAbout = null;
        _this.mTransItem = null;
        _this.mScroll = null;
        _this.mFTransInfo = null;
        _this.mIcom = null;
        _this.mIconSp = [];
        return _this;
    }
    FTransList.prototype.onLoad = function () {
        var _this = this;
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal_1.FGlobal.getScale();
        this.mScroll.node.getComponent(cc.Widget).top = 330 + FGlobal_1.FGlobal.getScale();
        FSDK.addCreditListen(function (data) {
            if (data.type == 'credit') {
                _this.mMyCoin.string = data.num;
            }
        }, this);
    };
    FTransList.prototype.setTask = function (type, icon) {
        if (type === void 0) { type = 0; }
        if (icon === void 0) { icon = null; }
        if (icon == null) {
            icon = this.mIconSp[type];
        }
        this.mIcom.spriteFrame = icon;
        this.mFTransInfo.mIconSp = icon;
        this.mFTransInfo.mIcon.spriteFrame = icon;
        this.setData(icon);
    };
    FTransList.prototype.onEnable = function () {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        FSocketSend_1.FSocketSend.C2S_trans_history('list');
    };
    FTransList.prototype.setData = function (icon) {
        this.mMyCoin.string = FGlobal_1.FGlobal.USER_INFO.credit + "";
        var abount = FGlobal_1.FGlobal.USER_INFO.credit / 10000;
        this.mAbout.string = "\u2248$" + abount.toFixed(2);
        if (!this.mScroll.content.childrenCount) {
            for (var i = 0; i < FConfig.conf.redeem_task.list.length; i++) {
                var transItem = cc.instantiate(this.mTransItem);
                transItem.parent = this.mScroll.content;
                transItem.getComponent(FTransItem_1.FTransItem).setData(FConfig.conf.redeem_task.list[i], this.mFTransInfo, icon);
            }
        }
    };
    FTransList.prototype.closePage = function () {
        this.node.parent = null;
    };
    __decorate([
        property(cc.Label)
    ], FTransList.prototype, "mMyCoin", void 0);
    __decorate([
        property(cc.Label)
    ], FTransList.prototype, "mAbout", void 0);
    __decorate([
        property(cc.Prefab)
    ], FTransList.prototype, "mTransItem", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FTransList.prototype, "mScroll", void 0);
    __decorate([
        property(FTransInfo_1.FTransInfo)
    ], FTransList.prototype, "mFTransInfo", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransList.prototype, "mIcom", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FTransList.prototype, "mIconSp", void 0);
    FTransList = __decorate([
        ccclass
    ], FTransList);
    return FTransList;
}(cc.Component));
exports.FTransList = FTransList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZUcmFuc0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLDJDQUEwQztBQUMxQywyQ0FBMEM7QUFDMUMsdURBQXNEO0FBRWhELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBZ0MsOEJBQVk7SUFENUM7UUFBQSxxRUE2REM7UUExREcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBa0IsSUFBSSxDQUFBO1FBRTdCLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRS9CLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFxQixFQUFFLENBQUM7O0lBOENuQyxDQUFDO0lBN0NHLDJCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFDLElBQUk7WUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgRkdsb2JhbCB9IGZyb20gXCIuLi9GTW9kZWwvRkdsb2JhbFwiO1xyXG5pbXBvcnQgeyBGVHJhbnNJdGVtIH0gZnJvbSBcIi4vRlRyYW5zSXRlbVwiO1xyXG5pbXBvcnQgeyBGVHJhbnNJbmZvIH0gZnJvbSBcIi4vRlRyYW5zSW5mb1wiO1xyXG5pbXBvcnQgeyBGU29ja2V0U2VuZCB9IGZyb20gXCIuLi9GTmV0V29yay9GU29ja2V0U2VuZFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGVHJhbnNMaXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1NeUNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1BYm91dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIG1UcmFuc0l0ZW06IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIG1TY3JvbGw6IGNjLlNjcm9sbFZpZXcgPSBudWxsXHJcbiAgICBAcHJvcGVydHkoRlRyYW5zSW5mbylcclxuICAgIG1GVHJhbnNJbmZvOiBGVHJhbnNJbmZvID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtSWNvbTogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIG1JY29uU3A6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVG9wXCIpLmhlaWdodCA9IDg1ICsgRkdsb2JhbC5nZXRTY2FsZSgpO1xyXG4gICAgICAgIHRoaXMubVNjcm9sbC5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDMzMCArIEZHbG9iYWwuZ2V0U2NhbGUoKTtcclxuICAgICAgICBGU0RLLmFkZENyZWRpdExpc3RlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09ICdjcmVkaXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1NeUNvaW4uc3RyaW5nID0gZGF0YS5udW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUYXNrKHR5cGUgPSAwLCBpY29uID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChpY29uID09IG51bGwpIHtcclxuICAgICAgICAgICAgaWNvbiA9IHRoaXMubUljb25TcFt0eXBlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tSWNvbS5zcHJpdGVGcmFtZSA9IGljb247XHJcbiAgICAgICAgdGhpcy5tRlRyYW5zSW5mby5tSWNvblNwID0gaWNvbjtcclxuICAgICAgICB0aGlzLm1GVHJhbnNJbmZvLm1JY29uLnNwcml0ZUZyYW1lID0gaWNvbjtcclxuICAgICAgICB0aGlzLnNldERhdGEoaWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5tU2Nyb2xsLnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgdGhpcy5tU2Nyb2xsLnNjcm9sbFRvVG9wKDApO1xyXG4gICAgICAgIEZTb2NrZXRTZW5kLkMyU190cmFuc19oaXN0b3J5KCdsaXN0Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoaWNvbikge1xyXG4gICAgICAgIHRoaXMubU15Q29pbi5zdHJpbmcgPSBGR2xvYmFsLlVTRVJfSU5GTy5jcmVkaXQgKyBcIlwiO1xyXG4gICAgICAgIGxldCBhYm91bnQgPSBGR2xvYmFsLlVTRVJfSU5GTy5jcmVkaXQgLyAxMDAwMDtcclxuICAgICAgICB0aGlzLm1BYm91dC5zdHJpbmcgPSBg4omIJCR7YWJvdW50LnRvRml4ZWQoMil9YDtcclxuICAgICAgICBpZiAoIXRoaXMubVNjcm9sbC5jb250ZW50LmNoaWxkcmVuQ291bnQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGQ29uZmlnLmNvbmYucmVkZWVtX3Rhc2subGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zSXRlbTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubVRyYW5zSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc0l0ZW0ucGFyZW50ID0gdGhpcy5tU2Nyb2xsLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc0l0ZW0uZ2V0Q29tcG9uZW50KEZUcmFuc0l0ZW0pLnNldERhdGEoRkNvbmZpZy5jb25mLnJlZGVlbV90YXNrLmxpc3RbaV0sIHRoaXMubUZUcmFuc0luZm8sIGljb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19