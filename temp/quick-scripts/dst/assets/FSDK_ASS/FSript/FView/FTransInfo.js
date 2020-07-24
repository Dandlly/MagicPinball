
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FTransInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dddc6snXOZGhqOqveLOjiHr', 'FTransInfo');
// FSDK_ASS/FSript/FView/FTransInfo.ts

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
var FTransInfo = /** @class */ (function (_super) {
    __extends(FTransInfo, _super);
    function FTransInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mCardIcon = null;
        _this.mAmount = null;
        _this.mCoin = null;
        _this.mPro = null;
        _this.mProLabel = null;
        _this.mTaskLabel = [];
        _this.mRedeemBtn = null;
        _this.mTip = null;
        _this.mErrSound = null;
        _this.data = null;
        _this.confData = null;
        _this.taskPos = -1;
        _this.cb = null;
        _this.mIcon = null;
        _this.mIconSp = null;
        return _this;
    }
    FTransInfo.prototype.onLoad = function () {
        this.mRedeemBtn.node.on(cc.Node.EventType.TOUCH_END, this.getTrans, this);
    };
    FTransInfo.prototype.setData = function (data) {
        var _this = this;
        this.taskPos = -1;
        this.data = data.data;
        this.confData = data.confData;
        this.mCardIcon.spriteFrame = this.data.icon;
        this.mAmount.string = "$" + this.data.amount;
        this.mCoin.string = this.confData.coin;
        this.cb = data.cb;
        var cnt = 0;
        FSDK.getRegCnt(FNetWorkConfig.data.code, function (data) {
            cnt = data[FNetWorkConfig.data.code];
            _this.mTip.string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, _this.getCnt(cnt));
        });
        this.mTip.string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, this.getCnt(cnt));
        this.isTaskSuc();
    };
    //显示任务并且返回是否可以领取
    FTransInfo.prototype.isTaskSuc = function () {
        var target = [FGlobal_1.FGlobal.USER_INFO.credit, FGlobal_1.FGlobal.USER_INFO.task, FGlobal_1.FGlobal.USER_INFO.login_days];
        for (var i = 0; i < 3; i++) {
            this.mTaskLabel[i].node.active = false;
        }
        for (var i = 0; i < 3; i++) {
            var pos_1 = i + 1;
            if (target[i] < this.confData['step' + pos_1]) {
                this.mTaskLabel[i].node.active = true;
                this.mTaskLabel[i].node.color = new cc.Color().fromHEX('#FFFFFF');
                this.mRedeemBtn.interactable = false;
                if (this.taskPos == -1) {
                    this.taskPos = i;
                }
                this.mTaskLabel[i].string = "Step" + pos_1 + ": " + FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[i], this.confData['step' + pos_1]);
                break;
            }
            else {
                this.mTaskLabel[i].string = "Step" + pos_1 + ": " + FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[i], this.confData['step' + pos_1]);
                this.mTaskLabel[i].node.active = true;
                this.mTaskLabel[i].node.color = new cc.Color().fromHEX('#8CFF4B');
                if (i == 2) {
                    this.taskPos = i;
                    this.mRedeemBtn.interactable = true;
                }
            }
        }
        if (this.taskPos == 0) {
            this.mTaskLabel[0].string = FGlobal_1.FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[0], this.confData['step' + 1]);
        }
        var pos = this.taskPos + 1;
        this.mPro.progress = target[this.taskPos] / this.confData['step' + pos];
        this.mProLabel.string = target[this.taskPos] + "/" + this.confData['step' + pos];
    };
    FTransInfo.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node);
    };
    //计算出要显示的人数
    FTransInfo.prototype.getCnt = function (count) {
        var cnt = count;
        if (this.confData.type == 1 || this.confData.type == 2) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.07 + 821);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.012 + 258);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.0017 + 70);
                    break;
            }
        }
        else if (this.confData.type == 3) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.06 + 511);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.014 + 198);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.002 + 47);
                    break;
            }
        }
        else if (this.confData.type == 4) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.02 + 144);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.007 + 85);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.0014 + 8);
                    break;
            }
        }
        return cnt;
    };
    FTransInfo.prototype.getTrans = function () {
        var _this = this;
        if (this.mRedeemBtn.interactable) {
            if (this.confData.type != 3) {
                FSDK.showToast(FConfig.FSDK_CONF.word.tip9);
            }
            else {
                FSDK.showTransPage(this.node.parent, this.data, function (status) {
                    if (_this.cb) {
                        _this.cb();
                        _this.cb = null;
                    }
                }, 'list', true, this.mIconSp);
                this.closePage();
            }
        }
        else {
            if (FGlobal_1.FGlobal.USER_INFO.setting.sound) {
                this.mErrSound.play();
            }
            this.noSuc(this.mTaskLabel[this.taskPos].node);
        }
    };
    //提示没完成
    FTransInfo.prototype.noSuc = function (node) {
        node.stopAllActions();
        node.scale = 1;
        cc.tween(node)
            .to(0.15, { scale: 1.1 })
            .to(0.2, { scale: 1 })
            .start();
    };
    __decorate([
        property(cc.Sprite)
    ], FTransInfo.prototype, "mCardIcon", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mAmount", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mCoin", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], FTransInfo.prototype, "mPro", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mProLabel", void 0);
    __decorate([
        property(cc.Label)
    ], FTransInfo.prototype, "mTaskLabel", void 0);
    __decorate([
        property(cc.Button)
    ], FTransInfo.prototype, "mRedeemBtn", void 0);
    __decorate([
        property(cc.RichText)
    ], FTransInfo.prototype, "mTip", void 0);
    __decorate([
        property(cc.AudioSource)
    ], FTransInfo.prototype, "mErrSound", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTransInfo.prototype, "mIcon", void 0);
    FTransInfo = __decorate([
        ccclass
    ], FTransInfo);
    return FTransInfo;
}(cc.Component));
exports.FTransInfo = FTransInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZUcmFuc0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBQ3hELDZDQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFZO0lBRDVDO1FBQUEscUVBdUtDO1FBcEtHLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBbUIsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBZSxFQUFFLENBQUM7UUFFNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFDakMsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2IsUUFBRSxHQUFHLElBQUksQ0FBQztRQUVWLFdBQUssR0FBYyxJQUFJLENBQUM7UUFDeEIsYUFBTyxHQUFHLElBQUksQ0FBQzs7SUE2SW5CLENBQUM7SUE1SUcsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLElBQUk7UUFBWixpQkFnQkM7UUFmRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdB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SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzRDQUNHO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NENBQ0c7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDUTtJQU1qQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNJO0lBeEJmLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FzS3RCO0lBQUQsaUJBQUM7Q0F0S0QsQUFzS0MsQ0F0SytCLEVBQUUsQ0FBQyxTQUFTLEdBc0szQztBQXRLWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi4vRk1vZGVsL0ZQYW5lbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRkdsb2JhbCB9IGZyb20gXCIuLi9GTW9kZWwvRkdsb2JhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGVHJhbnNJbmZvIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtQ2FyZEljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtQW1vdW50OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtQ29pbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgbVBybzogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbVByb0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtVGFza0xhYmVsOiBjYy5MYWJlbFtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbVJlZGVlbUJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcclxuICAgIG1UaXA6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIG1FcnJTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgZGF0YSA9IG51bGw7XHJcbiAgICBjb25mRGF0YSA9IG51bGw7XHJcbiAgICB0YXNrUG9zID0gLTE7XHJcbiAgICBjYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbUljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBtSWNvblNwID0gbnVsbDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1SZWRlZW1CdG4ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuZ2V0VHJhbnMsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudGFza1BvcyA9IC0xO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcclxuICAgICAgICB0aGlzLmNvbmZEYXRhID0gZGF0YS5jb25mRGF0YTtcclxuICAgICAgICB0aGlzLm1DYXJkSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuZGF0YS5pY29uO1xyXG4gICAgICAgIHRoaXMubUFtb3VudC5zdHJpbmcgPSBcIiRcIiArIHRoaXMuZGF0YS5hbW91bnQ7XHJcbiAgICAgICAgdGhpcy5tQ29pbi5zdHJpbmcgPSB0aGlzLmNvbmZEYXRhLmNvaW47XHJcbiAgICAgICAgdGhpcy5jYiA9IGRhdGEuY2I7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgRlNESy5nZXRSZWdDbnQoRk5ldFdvcmtDb25maWcuZGF0YS5jb2RlLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjbnQgPSBkYXRhW0ZOZXRXb3JrQ29uZmlnLmRhdGEuY29kZV07XHJcbiAgICAgICAgICAgIHRoaXMubVRpcC5zdHJpbmcgPSBGR2xvYmFsLmV4V2VuemkoRkNvbmZpZy5GU0RLX0NPTkYud29yZC50aXAxMiwgdGhpcy5nZXRDbnQoY250KSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1UaXAuc3RyaW5nID0gRkdsb2JhbC5leFdlbnppKEZDb25maWcuRlNES19DT05GLndvcmQudGlwMTIsIHRoaXMuZ2V0Q250KGNudCkpO1xyXG5cclxuICAgICAgICB0aGlzLmlzVGFza1N1YygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pi+56S65Lu75Yqh5bm25LiU6L+U5Zue5piv5ZCm5Y+v5Lul6aKG5Y+WXHJcbiAgICBpc1Rhc2tTdWMoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldDogbnVtYmVyW10gPSBbRkdsb2JhbC5VU0VSX0lORk8uY3JlZGl0LCBGR2xvYmFsLlVTRVJfSU5GTy50YXNrLCBGR2xvYmFsLlVTRVJfSU5GTy5sb2dpbl9kYXlzXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1UYXNrTGFiZWxbaV0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGkgKyAxO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0W2ldIDwgdGhpcy5jb25mRGF0YVsnc3RlcCcgKyBwb3NdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1UYXNrTGFiZWxbaV0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tVGFza0xhYmVsW2ldLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKCcjRkZGRkZGJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1SZWRlZW1CdG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YXNrUG9zID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrUG9zID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubVRhc2tMYWJlbFtpXS5zdHJpbmcgPSBcIlN0ZXBcIiArIHBvcyArIFwiOiBcIiArIEZHbG9iYWwuZXhXZW56aShGQ29uZmlnLkZTREtfQ09ORi5MSVNUX0NPTkYudGFyZ2V0VGl0bGVbaV0sIHRoaXMuY29uZkRhdGFbJ3N0ZXAnICsgcG9zXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1UYXNrTGFiZWxbaV0uc3RyaW5nID0gXCJTdGVwXCIgKyBwb3MgKyBcIjogXCIgKyBGR2xvYmFsLmV4V2VuemkoRkNvbmZpZy5GU0RLX0NPTkYuTElTVF9DT05GLnRhcmdldFRpdGxlW2ldLCB0aGlzLmNvbmZEYXRhWydzdGVwJyArIHBvc10pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tVGFza0xhYmVsW2ldLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubVRhc2tMYWJlbFtpXS5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWCgnIzhDRkY0QicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza1BvcyA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tUmVkZWVtQnRuLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudGFza1BvcyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubVRhc2tMYWJlbFswXS5zdHJpbmcgPSBGR2xvYmFsLmV4V2VuemkoRkNvbmZpZy5GU0RLX0NPTkYuTElTVF9DT05GLnRhcmdldFRpdGxlWzBdLCB0aGlzLmNvbmZEYXRhWydzdGVwJyArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMudGFza1BvcyArIDE7XHJcbiAgICAgICAgdGhpcy5tUHJvLnByb2dyZXNzID0gdGFyZ2V0W3RoaXMudGFza1Bvc10gLyB0aGlzLmNvbmZEYXRhWydzdGVwJyArIHBvc107XHJcbiAgICAgICAgdGhpcy5tUHJvTGFiZWwuc3RyaW5nID0gYCR7dGFyZ2V0W3RoaXMudGFza1Bvc119LyR7dGhpcy5jb25mRGF0YVsnc3RlcCcgKyBwb3NdfWA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYWdlKCkge1xyXG4gICAgICAgIEZQYW5lbE1hbmFnZXIuY2xvc2VfZWZmKHRoaXMubm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/orqHnrpflh7ropoHmmL7npLrnmoTkurrmlbBcclxuICAgIGdldENudChjb3VudCkge1xyXG4gICAgICAgIGxldCBjbnQgPSBjb3VudDtcclxuICAgICAgICBpZiAodGhpcy5jb25mRGF0YS50eXBlID09IDEgfHwgdGhpcy5jb25mRGF0YS50eXBlID09IDIpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEuYW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNudCA9IE1hdGguZmxvb3IoY291bnQgKiAwLjA3ICsgODIxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjU6XHJcbiAgICAgICAgICAgICAgICAgICAgY250ID0gTWF0aC5mbG9vcihjb3VudCAqIDAuMDEyICsgMjU4KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTA6XHJcbiAgICAgICAgICAgICAgICAgICAgY250ID0gTWF0aC5mbG9vcihjb3VudCAqIDAuMDAxNyArIDcwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbmZEYXRhLnR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5hbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgY250ID0gTWF0aC5mbG9vcihjb3VudCAqIDAuMDYgKyA1MTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyNTpcclxuICAgICAgICAgICAgICAgICAgICBjbnQgPSBNYXRoLmZsb29yKGNvdW50ICogMC4wMTQgKyAxOTgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDpcclxuICAgICAgICAgICAgICAgICAgICBjbnQgPSBNYXRoLmZsb29yKGNvdW50ICogMC4wMDIgKyA0Nyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25mRGF0YS50eXBlID09IDQpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEuYW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNudCA9IE1hdGguZmxvb3IoY291bnQgKiAwLjAyICsgMTQ0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjU6XHJcbiAgICAgICAgICAgICAgICAgICAgY250ID0gTWF0aC5mbG9vcihjb3VudCAqIDAuMDA3ICsgODUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1MDpcclxuICAgICAgICAgICAgICAgICAgICBjbnQgPSBNYXRoLmZsb29yKGNvdW50ICogMC4wMDE0ICsgOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFucygpIHtcclxuICAgICAgICBpZiAodGhpcy5tUmVkZWVtQnRuLmludGVyYWN0YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25mRGF0YS50eXBlICE9IDMpIHtcclxuICAgICAgICAgICAgICAgIEZTREsuc2hvd1RvYXN0KEZDb25maWcuRlNES19DT05GLndvcmQudGlwOSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEZTREsuc2hvd1RyYW5zUGFnZSh0aGlzLm5vZGUucGFyZW50LCB0aGlzLmRhdGEsIChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sICdsaXN0JywgdHJ1ZSwgdGhpcy5tSWNvblNwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChGR2xvYmFsLlVTRVJfSU5GTy5zZXR0aW5nLnNvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1FcnJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub1N1Yyh0aGlzLm1UYXNrTGFiZWxbdGhpcy50YXNrUG9zXS5ub2RlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aPkOekuuayoeWujOaIkFxyXG4gICAgbm9TdWMobm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMTtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4xNSwgeyBzY2FsZTogMS4xIH0pXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19