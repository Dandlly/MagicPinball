
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/gameStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9a83YFGtdJ6rwkJ6Y9ES+f', 'gameStart');
// script/game/gameStart.ts

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
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var User_1 = require("../common/User");
var PopupConstants_1 = require("../common/PopupConstants");
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var gameStart = /** @class */ (function (_super) {
    __extends(gameStart, _super);
    function gameStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubbleTips = [];
        return _this;
    }
    gameStart.prototype.onLoad = function () {
        cc.game.on(cc.game.EVENT_HIDE, function () {
            //处理游戏切到后台时的事件
            User_1.user.save();
            User_1.user.save(1); // 数据存服务端
        }, this);
        cc.game.on(cc.game.EVENT_SHOW, function () {
            //处理游戏切到后台时的事件
            User_1.user.save();
            User_1.user.save(1); // 数据存服务端
        }, this);
    };
    gameStart.prototype.onDestroy = function () {
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.BUBBLETPIS);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.CLOSEBUBBLE);
    };
    /**
     * 转盘
     */
    gameStart.prototype.turntableHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (EventConstants_1.GameConstant.isShoot) {
            FSDK.showToast("The current state can not be opened");
            return;
        }
        if (User_1.user.getSpinCount() >= 15) {
            FSDK.showToast("Spin limit reached today");
            return;
        }
        Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.TURNTABLE);
    };
    __decorate([
        property(cc.Node)
    ], gameStart.prototype, "bubbleTips", void 0);
    gameStart = __decorate([
        ccclass
    ], gameStart);
    return gameStart;
}(cc.Component));
exports.default = gameStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxnYW1lU3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQzFDLDJEQUFvRTtBQUNwRSx1Q0FBc0M7QUFFdEMsMkRBQXFEO0FBQ3JELDJEQUFxRDtBQUUvQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOztHQUVHO0FBRUg7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUF5Q0M7UUFyQ0csZ0JBQVUsR0FBYyxFQUFFLENBQUM7O0lBcUMvQixDQUFDO0lBbkNHLDBCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQixjQUFjO1lBQ2QsV0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLFNBQVM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsY0FBYztZQUNkLFdBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxTQUFTO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksZUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDJCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsZUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDJCQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQWUsR0FBdEI7UUFDSSxlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsaUJBQWlCLEVBQUUsMEJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLDZCQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUN0RCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLFdBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzNDLE9BQU87U0FDVjtRQUNELGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxVQUFVLEVBQUUsMEJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFIVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBd0M3QjtJQUFELGdCQUFDO0NBeENELEFBd0NDLENBeENzQyxFQUFFLENBQUMsU0FBUyxHQXdDbEQ7a0JBeENvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudHNcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50cywgR2FtZUNvbnN0YW50IH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudENvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4uL2NvbW1vbi9Vc2VyXCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBQb3BVcE5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL1BvcHVwQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEF1ZGlvTmFtZSB9IGZyb20gXCIuLi9jb21tb24vQXVkaW9Db25zdGFuZHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiDkvZzogIU6RGFuZGxseVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZ2FtZVN0YXJ0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1YmJsZVRpcHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WkhOeQhua4uOaIj+WIh+WIsOWQjuWPsOaXtueahOS6i+S7tlxyXG4gICAgICAgICAgICB1c2VyLnNhdmUoKTtcclxuICAgICAgICAgICAgdXNlci5zYXZlKDEpOy8vIOaVsOaNruWtmOacjeWKoeerr1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL+WkhOeQhua4uOaIj+WIh+WIsOWQjuWPsOaXtueahOS6i+S7tlxyXG4gICAgICAgICAgICB1c2VyLnNhdmUoKTtcclxuICAgICAgICAgICAgdXNlci5zYXZlKDEpOy8vIOaVsOaNruWtmOacjeWKoeerr1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLkJVQkJMRVRQSVMpO1xyXG4gICAgICAgIGV2ZW50cy5yZW1vdmVMaXN0ZW5lcih0aGlzLm5hbWUsIEdhbWVFdmVudHMuQ0xPU0VCVUJCTEUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L2s55uYXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0dXJudGFibGVIYW5kbGUoKSB7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5QTEFZX1NPVU5EX0VGRkVDVCwgQXVkaW9OYW1lLkJVVFRPTik7XHJcbiAgICAgICAgaWYgKEdhbWVDb25zdGFudC5pc1Nob290KSB7XHJcbiAgICAgICAgICAgIEZTREsuc2hvd1RvYXN0KFwiVGhlIGN1cnJlbnQgc3RhdGUgY2FuIG5vdCBiZSBvcGVuZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIuZ2V0U3BpbkNvdW50KCkgPj0gMTUpIHtcclxuICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoXCJTcGluIGxpbWl0IHJlYWNoZWQgdG9kYXlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5TSE9XX1BPUFVQLCBQb3BVcE5hbWUuVFVSTlRBQkxFKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19