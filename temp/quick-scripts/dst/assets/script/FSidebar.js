
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/FSidebar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae58cPVhCZOObGhj/fL6uTf', 'FSidebar');
// script/FSidebar.ts

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
var User_1 = require("./common/User");
var EventConstants_1 = require("./common/EventConstants");
var Events_1 = require("./common/Events");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FSidebar = /** @class */ (function (_super) {
    __extends(FSidebar, _super);
    function FSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconSpriteFrame = null;
        _this.sidebarNode = null;
        return _this;
    }
    /**
     * 礼物初始化
     */
    FSidebar.prototype.init = function () {
        var _this = this;
        FSDK.showLeft(this.sidebarNode, -20, function (data) {
            switch (data.type) {
                case "sound":
                    // 声音
                    User_1.user.IsMute = data.value;
                    Events_1.events.emit(EventConstants_1.GameEvents.SWITCH_MUTE);
                    return;
                case "shake":
                    // 震动
                    User_1.user.IsShake = data.value;
                    Events_1.events.emit(EventConstants_1.GameEvents.SWITCH_SNAKE);
                    return;
                case "home":
                    // home
                    if (EventConstants_1.GameConstant.isShoot)
                        return;
                    if (!cc.sys.isNative || User_1.user.getLumpData().isDebug) {
                        cc.find('Canvas/game').active = false;
                        cc.find('Canvas/main').active = true;
                        return;
                    }
                    FSDK.openInters(function () {
                        cc.find('Canvas/game').active = false;
                        cc.find('Canvas/main').active = true;
                    }, _this);
                    return;
            }
        }, 1);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], FSidebar.prototype, "iconSpriteFrame", void 0);
    __decorate([
        property(cc.Node)
    ], FSidebar.prototype, "sidebarNode", void 0);
    FSidebar = __decorate([
        ccclass
    ], FSidebar);
    return FSidebar;
}(cc.Component));
exports.default = FSidebar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGU2lkZWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUM7QUFFckMsMERBQW1FO0FBRW5FLDBDQUF5QztBQUVuQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBMkNDO1FBeENHLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUd2QyxpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUFxQ2hDLENBQUM7SUFuQ0c7O09BRUc7SUFDSSx1QkFBSSxHQUFYO1FBQUEsaUJBOEJDO1FBN0JHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFDLElBQUk7WUFDdEMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNmLEtBQUssT0FBTztvQkFDUixLQUFLO29CQUNMLFdBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDekIsZUFBTSxDQUFDLElBQUksQ0FBQywyQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNwQyxPQUFPO2dCQUNYLEtBQUssT0FBTztvQkFDUixLQUFLO29CQUNMLFdBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDMUIsZUFBTSxDQUFDLElBQUksQ0FBQywyQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyQyxPQUFPO2dCQUNYLEtBQUssTUFBTTtvQkFDUCxPQUFPO29CQUNQLElBQUksNkJBQVksQ0FBQyxPQUFPO3dCQUFFLE9BQU87b0JBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxXQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFO3dCQUNoRCxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDckMsT0FBTztxQkFDVjtvQkFFRCxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUNaLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDdEMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUN6QyxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUM7b0JBQ1QsT0FBTzthQUNkO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBRVQsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNjO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFMWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEM1QjtJQUFELGVBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMENqRDtrQkExQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vY29tbW9uL1VzZXJcIjtcclxuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi9jb21tb24vVXRpbHNcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50cywgR2FtZUNvbnN0YW50IH0gZnJvbSBcIi4vY29tbW9uL0V2ZW50Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tIFwiLi9jb21tb24vQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlNpZGViYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgaWNvblNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaWRlYmFyTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnpLznianliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgRlNESy5zaG93TGVmdCh0aGlzLnNpZGViYXJOb2RlLCAtMjAsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAvLyDlo7Dpn7NcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLklzTXV0ZSA9IGRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5TV0lUQ0hfTVVURSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNoYWtlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZyH5YqoXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5Jc1NoYWtlID0gZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuZW1pdChHYW1lRXZlbnRzLlNXSVRDSF9TTkFLRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcclxuICAgICAgICAgICAgICAgICAgICAvLyBob21lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVDb25zdGFudC5pc1Nob290KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUgfHwgdXNlci5nZXRMdW1wRGF0YSgpLmlzRGVidWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL2dhbWUnKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL21haW4nKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBGU0RLLm9wZW5JbnRlcnMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvZ2FtZScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvbWFpbicpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSlcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==