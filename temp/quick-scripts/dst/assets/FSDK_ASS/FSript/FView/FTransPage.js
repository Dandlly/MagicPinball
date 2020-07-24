
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FTransPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81371UlKJNPpZ3IcnmAAJ2m', 'FTransPage');
// FSDK_ASS/FSript/FView/FTransPage.ts

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
var FTransPage = /** @class */ (function (_super) {
    __extends(FTransPage, _super);
    function FTransPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mPP = null;
        _this.mCoin = null;
        _this.mEM1 = null;
        _this.mEM2 = null;
        _this.mTos = null;
        _this.mTosScroll = null;
        _this.mTosSp = null;
        _this.mIcon = null;
        _this.data = null;
        _this.type = 'task';
        _this.cb = null;
        return _this;
    }
    FTransPage.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.mTosSp.spriteFrame = FNetWorkConfig.data.tos_img;
    };
    FTransPage.prototype.onEnable = function () {
        this.mEM1.string = "";
        this.mEM2.string = "";
        this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
        this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
    };
    FTransPage.prototype.onDisable = function () {
    };
    FTransPage.prototype.editBegin = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = "";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "";
                break;
        }
    };
    FTransPage.prototype.editEnd = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
                break;
            case "2":
                this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
                break;
        }
    };
    FTransPage.prototype.setData = function (data, cb, type, isCoin, icon) {
        if (type === void 0) { type = 'task'; }
        if (isCoin === void 0) { isCoin = false; }
        if (icon === void 0) { icon = null; }
        if (icon) {
            this.mIcon.spriteFrame = icon;
        }
        this.cb = cb;
        this.type = type;
        this.mCoin.node.parent.active = isCoin;
        FLog.normal("什么玩意啊   ", data);
        this.data = data;
        this.mPP.string = "$" + this.data.amount;
        this.mCoin.string = this.data.count;
        // FLog.normal("FTransPage", FConfig.conf,this.data,pos);
    };
    FTransPage.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    FTransPage.prototype.getTrans = function () {
        var _this = this;
        if (this.mEM1.string.length > 0) {
            if (this.mEM2.string.length <= 0) {
                FSDK.showToast("Sorry, the phone can't be empty");
                return;
            }
            if (this.mEM1.string.indexOf('@') != -1) {
                if (FGlobal_1.FGlobal.USER_INFO.credit >= this.data.count) {
                    FSDK.setCredit('credit', -this.data.count, 'redeem');
                    FSDK.getTrans(this.data.id, this.mEM1.string, this.mEM2.string, this.type, function () {
                        _this.closePage();
                        if (_this.cb) {
                            _this.cb();
                            _this.cb = null;
                        }
                    });
                }
                else {
                    FSDK.showToast('Diamonds is not enough');
                }
            }
            else {
                FSDK.showToast("Sorry, your paypal email is not legal");
            }
        }
        else {
            FSDK.showToast("Sorry, the paypal email can't be empty");
        }
    };
    FTransPage.prototype.showTos = function () {
        this.mTos.active = true;
        this.mTosScroll.stopAutoScroll();
        this.mTosScroll.scrollToTop(0);
    };
    FTransPage.prototype.closeTos = function () {
        this.mTos.active = false;
    };
    __decorate([
        property(cc.Label)
    ], FTransPage.prototype, "mPP", void 0);
    __decorate([
        property(cc.Label)
    ], FTransPage.prototype, "mCoin", void 0);
    __decorate([
        property(cc.EditBox)
    ], FTransPage.prototype, "mEM1", void 0);
    __decorate([
        property(cc.EditBox)
    ], FTransPage.prototype, "mEM2", void 0);
    __decorate([
        property(cc.Node)
    ], FTransPage.prototype, "mTos", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FTransPage.prototype, "mTosScroll", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransPage.prototype, "mTosSp", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransPage.prototype, "mIcon", void 0);
    FTransPage = __decorate([
        ccclass
    ], FTransPage);
    return FTransPage;
}(cc.Component));
exports.FTransPage = FTransPage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZUcmFuc1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hELDZDQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFZO0lBRDVDO1FBQUEscUVBb0hDO1FBakhHLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWUsSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBZSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFFakMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBQ3hCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixVQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsUUFBRSxHQUFHLElBQUksQ0FBQzs7SUFnR2QsQ0FBQztJQS9GRywyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzFELENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakUsSUFBSSxD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QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7a0RBQ1M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNJO0lBaEJmLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FtSHRCO0lBQUQsaUJBQUM7Q0FuSEQsQUFtSEMsQ0FuSCtCLEVBQUUsQ0FBQyxTQUFTLEdBbUgzQztBQW5IWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi4vRk1vZGVsL0ZQYW5lbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRkdsb2JhbCB9IGZyb20gXCIuLi9GTW9kZWwvRkdsb2JhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGVHJhbnNQYWdlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1QUDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbUNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgbUVNMTogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIG1FTTI6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtVG9zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgbVRvc1Njcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbVRvc1NwOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIG1JY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgZGF0YSA9IG51bGw7XHJcbiAgICB0eXBlID0gJ3Rhc2snO1xyXG4gICAgY2IgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcclxuICAgICAgICB0aGlzLm1Ub3NTcC5zcHJpdGVGcmFtZSA9IEZOZXRXb3JrQ29uZmlnLmRhdGEudG9zX2ltZztcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm1FTTEuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1FTTIuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1FTTEucGxhY2Vob2xkZXJMYWJlbC5zdHJpbmcgPSBGQ29uZmlnLkZTREtfQ09ORi53b3JkLnRpcDEwO1xyXG4gICAgICAgIHRoaXMubUVNMi5wbGFjZWhvbGRlckxhYmVsLnN0cmluZyA9IEZDb25maWcuRlNES19DT05GLndvcmQudGlwMTE7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRCZWdpbih0YXJnZXQsIHBvcykge1xyXG4gICAgICAgIHN3aXRjaCAocG9zKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1FTTEucGxhY2Vob2xkZXJMYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1FTTIucGxhY2Vob2xkZXJMYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRFbmQodGFyZ2V0LCBwb3MpIHtcclxuICAgICAgICBzd2l0Y2ggKHBvcykge1xyXG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tRU0xLnBsYWNlaG9sZGVyTGFiZWwuc3RyaW5nID0gRkNvbmZpZy5GU0RLX0NPTkYud29yZC50aXAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tRU0yLnBsYWNlaG9sZGVyTGFiZWwuc3RyaW5nID0gRkNvbmZpZy5GU0RLX0NPTkYud29yZC50aXAxMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGRhdGEsIGNiLCB0eXBlID0gJ3Rhc2snLCBpc0NvaW4gPSBmYWxzZSwgaWNvbiA9IG51bGwpIHtcclxuICAgICAgICBpZiAoaWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1JY29uLnNwcml0ZUZyYW1lID0gaWNvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5tQ29pbi5ub2RlLnBhcmVudC5hY3RpdmUgPSBpc0NvaW47XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCLku4DkuYjnjqnmhI/llYogICBcIiwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm1QUC5zdHJpbmcgPSBcIiRcIiArIHRoaXMuZGF0YS5hbW91bnQ7XHJcbiAgICAgICAgdGhpcy5tQ29pbi5zdHJpbmcgPSB0aGlzLmRhdGEuY291bnQ7XHJcbiAgICAgICAgLy8gRkxvZy5ub3JtYWwoXCJGVHJhbnNQYWdlXCIsIEZDb25maWcuY29uZix0aGlzLmRhdGEscG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5jbG9zZV9lZmYodGhpcy5ub2RlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFucygpIHtcclxuICAgICAgICBpZiAodGhpcy5tRU0xLnN0cmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1FTTIuc3RyaW5nLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBGU0RLLnNob3dUb2FzdChgU29ycnksIHRoZSBwaG9uZSBjYW4ndCBiZSBlbXB0eWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1FTTEuc3RyaW5nLmluZGV4T2YoJ0AnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEZHbG9iYWwuVVNFUl9JTkZPLmNyZWRpdCA+PSB0aGlzLmRhdGEuY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBGU0RLLnNldENyZWRpdCgnY3JlZGl0JywgLXRoaXMuZGF0YS5jb3VudCwgJ3JlZGVlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZTREsuZ2V0VHJhbnModGhpcy5kYXRhLmlkLCB0aGlzLm1FTTEuc3RyaW5nLCB0aGlzLm1FTTIuc3RyaW5nLCB0aGlzLnR5cGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBGU0RLLnNob3dUb2FzdCgnRGlhbW9uZHMgaXMgbm90IGVub3VnaCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoYFNvcnJ5LCB5b3VyIHBheXBhbCBlbWFpbCBpcyBub3QgbGVnYWxgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoYFNvcnJ5LCB0aGUgcGF5cGFsIGVtYWlsIGNhbid0IGJlIGVtcHR5YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb3MoKSB7XHJcbiAgICAgICAgdGhpcy5tVG9zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tVG9zU2Nyb2xsLnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgdGhpcy5tVG9zU2Nyb2xsLnNjcm9sbFRvVG9wKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVG9zKCkge1xyXG4gICAgICAgIHRoaXMubVRvcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=