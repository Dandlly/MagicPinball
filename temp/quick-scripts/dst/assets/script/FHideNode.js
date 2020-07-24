
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/FHideNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83bb6ZpVzBLhYfohwdy5RUH', 'FHideNode');
// script/FHideNode.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 黑名单邀请
 */
var FHideNode = /** @class */ (function (_super) {
    __extends(FHideNode, _super);
    function FHideNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inviteNode = [];
        _this.invtiyParentNode = null;
        _this.ui = null;
        _this.turnTableNode = null;
        _this.icon = [];
        return _this;
    }
    FHideNode.prototype.onLoad = function () {
        var _this = this;
        FSDK.addFlagListen(function (data) {
            if (data) {
                _this.init();
            }
        }, this);
    };
    FHideNode.prototype.init = function () {
        this.inviteNode[0].active = false;
        this.inviteNode[1].active = false;
        this.ui.getChildByName("coin_3").active = true;
        if (cc.sys.os == cc.sys.OS_IOS) {
            this.turnTableNode.active = true;
            // 显示
            this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[1];
            this.ui.getChildByName("coin_1").active = true;
            this.ui.getChildByName("coin_2").active = true;
        }
        else {
            // 显示邀请
            if (User_1.user.serverData.isFlag) {
                this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[0];
                // 显示
                this.ui.getChildByName("coin_1").active = true;
                this.ui.getChildByName("coin_2").active = true;
                this.turnTableNode.active = true;
            }
        }
        this.ui.active = true;
    };
    /**
     * 邀请方法
     */
    FHideNode.prototype.inviteHandle = function () {
        FSDK.showInvityPage(this.invtiyParentNode);
    };
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "inviteNode", void 0);
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "invtiyParentNode", void 0);
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], FHideNode.prototype, "turnTableNode", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FHideNode.prototype, "icon", void 0);
    FHideNode = __decorate([
        ccclass
    ], FHideNode);
    return FHideNode;
}(cc.Component));
exports.default = FHideNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGSGlkZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBRS9CLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFDNUM7O0dBRUc7QUFFSDtJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQW9EQztRQWpERyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQXFCLEVBQUUsQ0FBQzs7SUF3Q2hDLENBQUM7SUF0Q1UsMEJBQU0sR0FBYjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFDLElBQUk7WUFDcEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxLQUFLO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2xEO2FBQU07WUFDSCxPQUFPO1lBQ1AsSUFBSSxXQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLEtBQUs7Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BDO1NBQ0o7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNZO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0c7SUFYWCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbUQ3QjtJQUFELGdCQUFDO0NBbkRELEFBbURDLENBbkRzQyxFQUFFLENBQUMsU0FBUyxHQW1EbEQ7a0JBbkRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuL2NvbW1vbi9Vc2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICog6buR5ZCN5Y2V6YKA6K+3XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGSGlkZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpbnZpdGVOb2RlOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaW52dGl5UGFyZW50Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdHVyblRhYmxlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgRlNESy5hZGRGbGFnTGlzdGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnZpdGVOb2RlWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW52aXRlTm9kZVsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpLmdldENoaWxkQnlOYW1lKFwiY29pbl8zXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHVyblRhYmxlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyDmmL7npLpcclxuICAgICAgICAgICAgdGhpcy51aS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fMVwiKS5nZXRDaGlsZEJ5TmFtZShcImdwXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnVpLmdldENoaWxkQnlOYW1lKFwiY29pbl8xXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudWkuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luXzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmmL7npLrpgoDor7dcclxuICAgICAgICAgICAgaWYgKHVzZXIuc2VydmVyRGF0YS5pc0ZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luXzFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJncFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblswXTtcclxuICAgICAgICAgICAgICAgIC8vIOaYvuekulxyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuVGFibGVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51aS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YKA6K+35pa55rOVXHJcbiAgICAgKi9cclxuICAgIGludml0ZUhhbmRsZSgpIHtcclxuICAgICAgICBGU0RLLnNob3dJbnZpdHlQYWdlKHRoaXMuaW52dGl5UGFyZW50Tm9kZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==