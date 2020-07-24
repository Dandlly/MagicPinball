
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FCardPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f87efwvNpVF/YKrU1Ro9j3K', 'FCardPage');
// FSDK_ASS/FSript/FView/FCardPage.ts

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
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FCardPage = /** @class */ (function (_super) {
    __extends(FCardPage, _super);
    function FCardPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mPP = null;
        _this.mEM1 = null;
        _this.mEM2 = null;
        _this.mTos = null;
        _this.mTosScroll = null;
        _this.data = null;
        return _this;
    }
    FCardPage.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
    };
    FCardPage.prototype.onEnable = function () {
        this.mEM1.string = "";
        this.mEM2.string = "";
        FSDK.closeBanner();
    };
    FCardPage.prototype.onDisable = function () {
        FSDK.openBanner();
    };
    FCardPage.prototype.editBegin = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = "";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "";
                break;
        }
    };
    FCardPage.prototype.editEnd = function (target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = "Input your email";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "Confirm your email";
                break;
        }
    };
    FCardPage.prototype.setData = function (pos) {
        this.data = FConfig.conf.invite_task[pos];
        this.mPP.string = FConfig.FSDK_CONF.word.tip1 + " $" + this.data.amount;
        FLog.normal("FTransPage", FConfig.conf, this.data, pos);
    };
    FCardPage.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    FCardPage.prototype.getTrans = function () {
        if (FGlobal_1.FGlobal.USER_INFO.invite_count >= this.data.count) {
            if (this.mEM1.string != this.mEM2.string) {
                FSDK.showToast('Please confirm your email');
                return;
            }
            if (this.mEM1.string.length > 0) {
                if (this.mEM1.string.indexOf('@') != -1) {
                    this.closePage();
                    FSocketSend_1.FSocketSend.C2S_trans(this.data.id, this.mEM1.string, this.mEM1.string, 'invite');
                    FGlobal_1.FGlobal.invite_task.push(this.data.id);
                    cc.director.emit(FEventID.S2C_trans_history);
                }
                else {
                    FSDK.showToast("Sorry, your email is not legal");
                }
            }
            else {
                FSDK.showToast("Sorry, the email can't be empty");
            }
        }
        else {
            FSDK.showToast('Sorry, your invitation has not been completed yet');
        }
    };
    FCardPage.prototype.showTos = function () {
        this.mTos.active = true;
        this.mTosScroll.stopAutoScroll();
        this.mTosScroll.scrollToTop(0);
    };
    FCardPage.prototype.closeTos = function () {
        this.mTos.active = false;
    };
    __decorate([
        property(cc.Label)
    ], FCardPage.prototype, "mPP", void 0);
    __decorate([
        property(cc.EditBox)
    ], FCardPage.prototype, "mEM1", void 0);
    __decorate([
        property(cc.EditBox)
    ], FCardPage.prototype, "mEM2", void 0);
    __decorate([
        property(cc.Node)
    ], FCardPage.prototype, "mTos", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FCardPage.prototype, "mTosScroll", void 0);
    FCardPage = __decorate([
        ccclass
    ], FCardPage);
    return FCardPage;
}(cc.Component));
exports.FCardPage = FCardPage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZDYXJkUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFDeEQsNkNBQTRDO0FBQzVDLHVEQUFzRDtBQUVoRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQStCLDZCQUFZO0lBRDNDO1FBQUEscUVBZ0dDO1FBN0ZHLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFlLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQWUsSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1FBQ2pDLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBb0ZoQixDQUFDO0lBbEZHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLE1BQU0sRUFBRSxHQUFHO1FBQ2pCLFFBQVEsR0FBRyxFQUFFO1lBQ1QsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDdkMsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFD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RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRTtJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNHO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkNBQ0c7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO2lEQUNTO0lBVnhCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0ErRnJCO0lBQUQsZ0JBQUM7Q0EvRkQsQUErRkMsQ0EvRjhCLEVBQUUsQ0FBQyxTQUFTLEdBK0YxQztBQS9GWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi4vRk1vZGVsL0ZQYW5lbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRkdsb2JhbCB9IGZyb20gXCIuLi9GTW9kZWwvRkdsb2JhbFwiO1xyXG5pbXBvcnQgeyBGU29ja2V0U2VuZCB9IGZyb20gXCIuLi9GTmV0V29yay9GU29ja2V0U2VuZFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGQ2FyZFBhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbVBQOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIG1FTTE6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBtRU0yOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVRvczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcclxuICAgIG1Ub3NTY3JvbGw6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xyXG4gICAgZGF0YSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm1FTTEuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1FTTIuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBGU0RLLmNsb3NlQmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgRlNESy5vcGVuQmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEJlZ2luKHRhcmdldCwgcG9zKSB7XHJcbiAgICAgICAgc3dpdGNoIChwb3MpIHtcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubUVNMS5wbGFjZWhvbGRlckxhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubUVNMi5wbGFjZWhvbGRlckxhYmVsLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEVuZCh0YXJnZXQsIHBvcykge1xyXG4gICAgICAgIHN3aXRjaCAocG9zKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1FTTEucGxhY2Vob2xkZXJMYWJlbC5zdHJpbmcgPSBcIklucHV0IHlvdXIgZW1haWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tRU0yLnBsYWNlaG9sZGVyTGFiZWwuc3RyaW5nID0gXCJDb25maXJtIHlvdXIgZW1haWxcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKHBvcykge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IEZDb25maWcuY29uZi5pbnZpdGVfdGFza1twb3NdO1xyXG4gICAgICAgIHRoaXMubVBQLnN0cmluZyA9IEZDb25maWcuRlNES19DT05GLndvcmQudGlwMSArIFwiICRcIiArIHRoaXMuZGF0YS5hbW91bnQ7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCJGVHJhbnNQYWdlXCIsIEZDb25maWcuY29uZix0aGlzLmRhdGEscG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5jbG9zZV9lZmYodGhpcy5ub2RlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFucygpIHtcclxuICAgICAgICBpZiAoRkdsb2JhbC5VU0VSX0lORk8uaW52aXRlX2NvdW50ID49IHRoaXMuZGF0YS5jb3VudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tRU0xLnN0cmluZyAhPSB0aGlzLm1FTTIuc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBGU0RLLnNob3dUb2FzdCgnUGxlYXNlIGNvbmZpcm0geW91ciBlbWFpbCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1FTTEuc3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1FTTEuc3RyaW5nLmluZGV4T2YoJ0AnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRlNvY2tldFNlbmQuQzJTX3RyYW5zKHRoaXMuZGF0YS5pZCwgdGhpcy5tRU0xLnN0cmluZywgdGhpcy5tRU0xLnN0cmluZywgJ2ludml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIEZHbG9iYWwuaW52aXRlX3Rhc2sucHVzaCh0aGlzLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmVtaXQoRkV2ZW50SUQuUzJDX3RyYW5zX2hpc3RvcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoYFNvcnJ5LCB5b3VyIGVtYWlsIGlzIG5vdCBsZWdhbGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoYFNvcnJ5LCB0aGUgZW1haWwgY2FuJ3QgYmUgZW1wdHlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoJ1NvcnJ5LCB5b3VyIGludml0YXRpb24gaGFzIG5vdCBiZWVuIGNvbXBsZXRlZCB5ZXQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb3MoKSB7XHJcbiAgICAgICAgdGhpcy5tVG9zLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tVG9zU2Nyb2xsLnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgdGhpcy5tVG9zU2Nyb2xsLnNjcm9sbFRvVG9wKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVG9zKCkge1xyXG4gICAgICAgIHRoaXMubVRvcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=