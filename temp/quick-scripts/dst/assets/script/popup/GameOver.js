
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/popup/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d886/vbpNA5K99retBrpQy', 'GameOver');
// script/popup/GameOver.ts

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
var Actions_1 = require("../common/Actions");
var User_1 = require("../common/User");
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者：Dandlly
 * 游戏结算弹窗
 */
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resurgenceNode = null; // 复活
        _this.restartNode = null; // 重新开始
        _this.isDoudle = false;
        return _this;
    }
    GameOver.prototype.onEnable = function () {
        this.isDoudle = false;
        if (!EventConstants_1.GameConstant.resurgenceVideo) {
            EventConstants_1.GameConstant.resurgenceVideo = true;
            // FSDK.preloadVideo("revive");
        }
        // 呼吸
        Actions_1.actions.breatheEff(this.resurgenceNode);
        if (User_1.user.getCurrnetReviveNum() <= 0) {
            this.resurgenceNode.active = false;
            Actions_1.actions.breatheEff(this.restartNode);
        }
    };
    /**
     * 复活
     */
    GameOver.prototype.resurgenceHandle = function () {
        var _this = this;
        if (this.isDoudle)
            return;
        this.isDoudle = true;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
            User_1.user.setCurrnetReviveNum();
            EventConstants_1.GameConstant.game.resurgence();
            Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
            return;
        }
        FSDK.openVideo("revive", function () {
            User_1.user.setCurrnetReviveNum();
            FSDK.openInters(function () {
                EventConstants_1.GameConstant.game.resurgence();
                Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
            }, _this);
        }, this);
    };
    /**
     * 重新开始
     */
    GameOver.prototype.restartHandle = function () {
        if (this.isDoudle)
            return;
        this.isDoudle = true;
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        EventConstants_1.GameConstant.game.restartInit();
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_POPUP);
        var num = User_1.user.getLumpData().reviveNum;
        User_1.user.setCurrnetReviveNum(num);
    };
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "resurgenceNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "restartNode", void 0);
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwb3B1cFxcR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLHVDQUFzQztBQUN0QywyQ0FBMEM7QUFDMUMsMkRBQW9FO0FBQ3BFLDJEQUFxRDtBQUUvQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOzs7R0FHRztBQUVIO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBZ0VDO1FBN0RHLG9CQUFjLEdBQVksSUFBSSxDQUFDLENBQUEsS0FBSztRQUdwQyxpQkFBVyxHQUFZLElBQUksQ0FBQyxDQUFBLE9BQU87UUFFM0IsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUF3RHRDLENBQUM7SUF0REcsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyw2QkFBWSxDQUFDLGVBQWUsRUFBRTtZQUMvQiw2QkFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDcEMsK0JBQStCO1NBQ2xDO1FBRUQsS0FBSztRQUNMLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4QyxJQUFJLFdBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQWdCLEdBQXZCO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxXQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ2hELFdBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLDZCQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9CLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNyQixXQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNaLDZCQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMvQixlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0NBQWEsR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsaUJBQWlCLEVBQUUsMEJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCw2QkFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxHQUFHLEdBQUcsV0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxXQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTNERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFMWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK0Q1QjtJQUFELGVBQUM7Q0EvREQsQUErREMsQ0EvRHFDLEVBQUUsQ0FBQyxTQUFTLEdBK0RqRDtrQkEvRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSBcIi4uL2NvbW1vbi9BY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi4vY29tbW9uL1VzZXJcIjtcclxuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudHNcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50cywgR2FtZUNvbnN0YW50IH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudENvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBdWRpb05hbWUgfSBmcm9tIFwiLi4vY29tbW9uL0F1ZGlvQ29uc3RhbmRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICog5L2c6ICF77yaRGFuZGxseVxyXG4gKiDmuLjmiI/nu5PnrpflvLnnqpdcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVzdXJnZW5jZU5vZGU6IGNjLk5vZGUgPSBudWxsOy8vIOWkjea0u1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcmVzdGFydE5vZGU6IGNjLk5vZGUgPSBudWxsOy8vIOmHjeaWsOW8gOWni1xyXG5cclxuICAgIHByaXZhdGUgaXNEb3VkbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmlzRG91ZGxlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFHYW1lQ29uc3RhbnQucmVzdXJnZW5jZVZpZGVvKSB7XHJcbiAgICAgICAgICAgIEdhbWVDb25zdGFudC5yZXN1cmdlbmNlVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBGU0RLLnByZWxvYWRWaWRlbyhcInJldml2ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWRvOWQuFxyXG4gICAgICAgIGFjdGlvbnMuYnJlYXRoZUVmZih0aGlzLnJlc3VyZ2VuY2VOb2RlKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIuZ2V0Q3Vycm5ldFJldml2ZU51bSgpIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1cmdlbmNlTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYWN0aW9ucy5icmVhdGhlRWZmKHRoaXMucmVzdGFydE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkjea0u1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzdXJnZW5jZUhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWRsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEb3VkbGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNULCBBdWRpb05hbWUuQlVUVE9OKTtcclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSB8fCB1c2VyLmdldEx1bXBEYXRhKCkuaXNEZWJ1Zykge1xyXG4gICAgICAgICAgICB1c2VyLnNldEN1cnJuZXRSZXZpdmVOdW0oKTtcclxuICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUucmVzdXJnZW5jZSgpO1xyXG4gICAgICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLkhJREVfUE9QVVApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBGU0RLLm9wZW5WaWRlbyhcInJldml2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXIuc2V0Q3Vycm5ldFJldml2ZU51bSgpO1xyXG4gICAgICAgICAgICBGU0RLLm9wZW5JbnRlcnMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUucmVzdXJnZW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5ISURFX1BPUFVQKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeaWsOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzdGFydEhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RvdWRsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNEb3VkbGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNULCBBdWRpb05hbWUuQlVUVE9OKTtcclxuICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZS5yZXN0YXJ0SW5pdCgpO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9QT1BVUCk7XHJcbiAgICAgICAgbGV0IG51bSA9IHVzZXIuZ2V0THVtcERhdGEoKS5yZXZpdmVOdW07XHJcbiAgICAgICAgdXNlci5zZXRDdXJybmV0UmV2aXZlTnVtKG51bSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==