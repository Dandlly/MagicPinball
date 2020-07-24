
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/popup/Read.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e23995PNXxPgb2pBzFZ6ZuP', 'Read');
// script/popup/Read.ts

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
var AudioConstands_1 = require("../common/AudioConstands");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Read = /** @class */ (function (_super) {
    __extends(Read, _super);
    function Read() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        return _this;
    }
    Read.prototype.noHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        this._data[0].active = true;
        this._data[1].active = false;
        EventConstants_1.GameConstant.game.restartInit();
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
    };
    Read.prototype.yesHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        if (EventConstants_1.GameConstant.game.barriers.length > 0) {
            this._data[0].active = true;
            this._data[1].active = false;
            Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
            return;
        }
        this._data[0].active = true;
        this._data[1].active = false;
        EventConstants_1.GameConstant.game.init();
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
    };
    Read.prototype.closeHandle = function () {
        Events_1.events.emit(EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, AudioConstands_1.AudioName.BUTTON);
        Events_1.events.emit(EventConstants_1.GameEvents.HIDE_ALL_POPUP);
    };
    Read = __decorate([
        ccclass
    ], Read);
    return Read;
}(cc.Component));
exports.default = Read;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwb3B1cFxcUmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsMkRBQW9FO0FBQ3BFLDJEQUFxRDtBQUcvQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBRDlDO1FBQUEscUVBZ0NDO1FBOUJXLFdBQUssR0FBUSxJQUFJLENBQUM7O0lBOEI5QixDQUFDO0lBM0JHLHVCQUFRLEdBQVI7UUFDSSxlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsaUJBQWlCLEVBQUUsMEJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLDZCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0JBQVMsR0FBVDtRQUNJLGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksNkJBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3Qiw2QkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDSSxlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsaUJBQWlCLEVBQUUsMEJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxlQUFNLENBQUMsSUFBSSxDQUFDLDJCQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTdCZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStCeEI7SUFBRCxXQUFDO0NBL0JELEFBK0JDLENBL0JpQyxFQUFFLENBQUMsU0FBUyxHQStCN0M7a0JBL0JvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudHNcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50cywgR2FtZUNvbnN0YW50IH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudENvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBdWRpb05hbWUgfSBmcm9tIFwiLi4vY29tbW9uL0F1ZGlvQ29uc3RhbmRzXCI7XHJcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi4vY29tbW9uL1VzZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2RhdGE6IGFueSA9IG51bGw7XHJcblxyXG5cclxuICAgIG5vSGFuZGxlKCkge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CVVRUT04pO1xyXG4gICAgICAgIHRoaXMuX2RhdGFbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9kYXRhWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIEdhbWVDb25zdGFudC5nYW1lLnJlc3RhcnRJbml0KCk7XHJcbiAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5ISURFX0FMTF9QT1BVUCk7XHJcbiAgICB9XHJcblxyXG4gICAgeWVzSGFuZGxlKCkge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CVVRUT04pO1xyXG4gICAgICAgIGlmIChHYW1lQ29uc3RhbnQuZ2FtZS5iYXJyaWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5ISURFX0FMTF9QT1BVUCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YVswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RhdGFbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUuaW5pdCgpO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9BTExfUE9QVVApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIEF1ZGlvTmFtZS5CVVRUT04pO1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9BTExfUE9QVVApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=