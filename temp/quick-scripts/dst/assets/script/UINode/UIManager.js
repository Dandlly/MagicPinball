
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/UINode/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3151bb3sstE+JoEUHR0D4w8', 'UIManager');
// script/UINode/UIManager.ts

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
var User_1 = require("../common/User");
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var PopupConstants_1 = require("../common/PopupConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.first_Label = null;
        _this.second_Label = null;
        _this.coin_Label = null;
        _this.wxLoginAndSetting = [];
        _this.FSDKNode = null;
        return _this;
    }
    UIManager.prototype.start = function () {
        this.initEvents();
        this.init();
    };
    UIManager.prototype.onDestroy = function () {
        this.removeEvents();
    };
    UIManager.prototype.initEvents = function () {
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.UPDATAUI, this.updateIcon, this);
    };
    UIManager.prototype.removeEvents = function () {
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.UPDATAUI);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.UPDATALEVEL);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.UPDATASCORE);
    };
    UIManager.prototype.init = function () {
        this.first_Label.string = User_1.user.firstGold.toFixed(2);
        this.second_Label.string = User_1.user.secondGold.toFixed(2);
        this.coin_Label.string = User_1.user.credit.toFixed(0);
    };
    UIManager.prototype.updateIcon = function () {
        this.first_Label.string = User_1.user.firstGold.toFixed(2);
        this.second_Label.string = User_1.user.secondGold.toFixed(2);
        this.coin_Label.string = User_1.user.credit.toFixed(0);
    };
    UIManager.prototype.firstHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
    };
    UIManager.prototype.secondHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
    };
    UIManager.prototype.settingHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.SETTING);
    };
    UIManager.prototype.getgpCardHandle = function () {
        if (User_1.user.serverData.isBlack)
            return;
        FSDK.showTwoCard(1, this.FSDKNode);
    };
    UIManager.prototype.getppCardHandle = function () {
        if (User_1.user.serverData.isBlack)
            return;
        FSDK.showTwoCard(0, this.FSDKNode);
    };
    UIManager.prototype.getCreditHandle = function () {
        if (User_1.user.serverData.isBlack)
            return;
        FSDK.showTransList(this.FSDKNode, 1);
    };
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "first_Label", void 0);
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "second_Label", void 0);
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "coin_Label", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "wxLoginAndSetting", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "FSDKNode", void 0);
    UIManager = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVSU5vZGVcXFVJTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFDdEMsMkNBQTBDO0FBQzFDLDJEQUFzRDtBQUN0RCwyREFBcUQ7QUFDckQsMkRBQXFEO0FBRS9DLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFDNUM7O0dBRUc7QUFFSDtJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQTZFQztRQTFFRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1Qix1QkFBaUIsR0FBYyxFQUFFLENBQUM7UUFHbEMsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUE4RDdCLENBQUM7SUE1REcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLDhCQUFVLEdBQWpCO1FBQ0ksZUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsMkJBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVoRixDQUFDO0lBRU0sZ0NBQVksR0FBbkI7UUFDSSxlQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsMkJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxlQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsMkJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxlQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsMkJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUNJLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUNJLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxpQ0FBYSxHQUFwQjtRQUNJLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxVQUFVLEVBQUUsMEJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sbUNBQWUsR0FBdEI7UUFDSSxJQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsT0FBTztZQUFFLE9BQU87UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFTSxtQ0FBZSxHQUF0QjtRQUNJLElBQUksV0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVNLG1DQUFlLEdBQXRCO1FBQ0ksSUFBSSxXQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBeEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNTO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ2dCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFkUixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNEU3QjtJQUFELGdCQUFDO0NBNUVELEFBNEVDLENBNUVzQyxFQUFFLENBQUMsU0FBUyxHQTRFbEQ7a0JBNUVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9jb21tb24vVXNlclwiO1xyXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudENvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBQb3BVcE5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL1BvcHVwQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEF1ZGlvTmFtZSB9IGZyb20gXCIuLi9jb21tb24vQXVkaW9Db25zdGFuZHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiDkvZzogIU6RGFuZGxseVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGZpcnN0X0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc2Vjb25kX0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29pbl9MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgd3hMb2dpbkFuZFNldHRpbmc6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRlNES05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50cy5vbih0aGlzLm5hbWUsIHRoaXMudXVpZCwgR2FtZUV2ZW50cy5VUERBVEFVSSwgdGhpcy51cGRhdGVJY29uLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlVQREFUQVVJKTtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlVQREFUQUxFVkVMKTtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlVQREFUQVNDT1JFKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpcnN0X0xhYmVsLnN0cmluZyA9IHVzZXIuZmlyc3RHb2xkLnRvRml4ZWQoMik7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRfTGFiZWwuc3RyaW5nID0gdXNlci5zZWNvbmRHb2xkLnRvRml4ZWQoMik7XHJcbiAgICAgICAgdGhpcy5jb2luX0xhYmVsLnN0cmluZyA9IHVzZXIuY3JlZGl0LnRvRml4ZWQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUljb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maXJzdF9MYWJlbC5zdHJpbmcgPSB1c2VyLmZpcnN0R29sZC50b0ZpeGVkKDIpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kX0xhYmVsLnN0cmluZyA9IHVzZXIuc2Vjb25kR29sZC50b0ZpeGVkKDIpO1xyXG4gICAgICAgIHRoaXMuY29pbl9MYWJlbC5zdHJpbmcgPSB1c2VyLmNyZWRpdC50b0ZpeGVkKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaXJzdEhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNULCBBdWRpb05hbWUuQlVUVE9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2Vjb25kSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CVVRUT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXR0aW5nSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CVVRUT04pO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuU0hPV19QT1BVUCwgUG9wVXBOYW1lLlNFVFRJTkcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRncENhcmRIYW5kbGUoKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuc2VydmVyRGF0YS5pc0JsYWNrKSByZXR1cm47XHJcbiAgICAgICAgRlNESy5zaG93VHdvQ2FyZCgxLCB0aGlzLkZTREtOb2RlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRwcENhcmRIYW5kbGUoKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuc2VydmVyRGF0YS5pc0JsYWNrKSByZXR1cm47XHJcbiAgICAgICAgRlNESy5zaG93VHdvQ2FyZCgwLCB0aGlzLkZTREtOb2RlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDcmVkaXRIYW5kbGUoKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuc2VydmVyRGF0YS5pc0JsYWNrKSByZXR1cm47XHJcbiAgICAgICAgRlNESy5zaG93VHJhbnNMaXN0KHRoaXMuRlNES05vZGUsIDEpXHJcbiAgICB9XHJcblxyXG59ICAgXHJcbiJdfQ==