
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/main/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce0b2+gmo9H0IxuP87dvY6V', 'Main');
// script/main/Main.ts

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
var Actions_1 = require("../common/Actions");
var EventConstants_1 = require("../common/EventConstants");
var Events_1 = require("../common/Events");
var AudioConstands_1 = require("../common/AudioConstands");
var PopupConstants_1 = require("../common/PopupConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mPlayGameBtn = null;
        _this.mtitle = null;
        _this.mGameNode = null;
        _this.mPaomaNode = null;
        _this.mGameOpenNode = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        if (!cc.sys.isNative) {
            FSDK.openBanner();
        }
        this.init();
    };
    Main.prototype.onEnable = function () {
    };
    /**
     * 初始化脚本
     */
    Main.prototype.init = function () {
        // 添加缓动
        Actions_1.actions.breatheEff(this.mPlayGameBtn);
        Actions_1.actions.breatheEff(this.mtitle, 0.95, 2);
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_BGM, AudioConstands_1.AudioName.MAIN_BGM);
        this.openPm();
    };
    /**
     * 开始游戏
     */
    Main.prototype.playGameHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (User_1.user.getRecordBarrier().length > 0) {
            var _data = [this.mGameNode, this.node];
            Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.READ, null, _data);
            return;
        }
        this.mGameNode.active = true;
        this.node.active = false;
        EventConstants_1.GameConstant.game.init();
    };
    /**
     * 打开跑马灯
     */
    Main.prototype.openPm = function () {
        FSDK.showMarQuee(this.mPaomaNode);
    };
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mPlayGameBtn", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mtitle", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mGameNode", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mPaomaNode", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "mGameOpenNode", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluXFxNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFzQztBQUN0Qyw2Q0FBNEM7QUFDNUMsMkRBQW9FO0FBQ3BFLDJDQUEwQztBQUMxQywyREFBcUQ7QUFDckQsMkRBQXFEO0FBRy9DLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFDNUM7O0dBRUc7QUFFSDtJQUFrQyx3QkFBWTtJQUQ5QztRQUFBLHFFQWdFQztRQTdERyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBaURsQyxDQUFDO0lBL0NHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1QkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUJBQUksR0FBWDtRQUNJLE9BQU87UUFDUCxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekMsZUFBTSxDQUFDLElBQUksQ0FBQywyQkFBVSxDQUFDLFFBQVEsRUFBRSwwQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDSSw2QkFBYyxHQUFyQjtRQUNJLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVELElBQUksV0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxVQUFVLEVBQUUsMEJBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsNkJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0kscUJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUExREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNZO0lBZGIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStEeEI7SUFBRCxXQUFDO0NBL0RELEFBK0RDLENBL0RpQyxFQUFFLENBQUMsU0FBUyxHQStEN0M7a0JBL0RvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9jb21tb24vVXNlclwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSBcIi4uL2NvbW1vbi9BY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdhbWVDb25zdGFudCwgR2FtZUV2ZW50cyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudHNcIjtcclxuaW1wb3J0IHsgQXVkaW9OYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9BdWRpb0NvbnN0YW5kc1wiO1xyXG5pbXBvcnQgeyBQb3BVcE5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL1BvcHVwQ29uc3RhbnRzXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOS9nOiAhTpEYW5kbGx5XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVBsYXlHYW1lQnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG10aXRsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVBhb21hTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtR2FtZU9wZW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgRlNESy5vcGVuQmFubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW6ISa5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOa3u+WKoOe8k+WKqFxyXG4gICAgICAgIGFjdGlvbnMuYnJlYXRoZUVmZih0aGlzLm1QbGF5R2FtZUJ0bik7XHJcbiAgICAgICAgYWN0aW9ucy5icmVhdGhlRWZmKHRoaXMubXRpdGxlLCAwLjk1LCAyKTtcclxuXHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX0JHTSwgQXVkaW9OYW1lLk1BSU5fQkdNKTtcclxuICAgICAgICB0aGlzLm9wZW5QbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5ri45oiPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5R2FtZUhhbmRsZSgpOiB2b2lkIHtcclxuICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNULCBBdWRpb05hbWUuQlVUVE9OKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIuZ2V0UmVjb3JkQmFycmllcigpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IF9kYXRhID0gW3RoaXMubUdhbWVOb2RlLCB0aGlzLm5vZGVdO1xyXG4gICAgICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlNIT1dfUE9QVVAsIFBvcFVwTmFtZS5SRUFELCBudWxsLCBfZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubUdhbWVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIEdhbWVDb25zdGFudC5nYW1lLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOi3kemprOeBr1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlblBtKCk6IHZvaWQge1xyXG4gICAgICAgIEZTREsuc2hvd01hclF1ZWUodGhpcy5tUGFvbWFOb2RlKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==