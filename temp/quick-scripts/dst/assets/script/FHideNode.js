
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
        this.ui.getChildByName("coin_3").active = true;
        if (User_1.user.serverData.isBlack) {
            this.inviteNode[0].active = false;
            this.inviteNode[1].active = false;
        }
        else {
            if (cc.sys.os == cc.sys.OS_IOS) {
                this.inviteNode[0].active = false;
                this.inviteNode[1].active = false;
                this.turnTableNode.active = true;
                // 显示
                this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[1];
                this.ui.getChildByName("coin_1").active = true;
                this.ui.getChildByName("coin_2").active = true;
            }
            else {
                // 显示邀请
                this.inviteNode[0].active = true;
                this.inviteNode[1].active = true;
                if (User_1.user.serverData.isFlag) {
                    this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[0];
                    // 显示
                    this.ui.getChildByName("coin_1").active = true;
                    this.ui.getChildByName("coin_2").active = true;
                    this.turnTableNode.active = true;
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGSGlkZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBRS9CLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFDNUM7O0dBRUc7QUFFSDtJQUF1Qyw2QkFBWTtJQURuRDtRQUFBLHFFQTJEQztRQXhERyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFFakMsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQXFCLEVBQUUsQ0FBQzs7SUErQ2hDLENBQUM7SUE3Q1UsMEJBQU0sR0FBYjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFDLElBQUk7WUFDcEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0MsSUFBSSxXQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxLQUFLO2dCQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNILE9BQU87Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2pDLElBQUksV0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RyxLQUFLO29CQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQy9DLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDcEM7YUFDSjtTQUNKO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJDQUNHO0lBWFgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBEN0I7SUFBRCxnQkFBQztDQTFERCxBQTBEQyxDQTFEc0MsRUFBRSxDQUFDLFNBQVMsR0EwRGxEO2tCQTFEb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi9jb21tb24vVXNlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOm7keWQjeWNlemCgOivt1xyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkhpZGVOb2RlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaW52aXRlTm9kZTogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGludnRpeVBhcmVudE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1aTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHR1cm5UYWJsZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGljb246IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgb25Mb2FkKCkge1xyXG4gICAgICAgIEZTREsuYWRkRmxhZ0xpc3RlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudWkuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luXzNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZiAodXNlci5zZXJ2ZXJEYXRhLmlzQmxhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5pbnZpdGVOb2RlWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZU5vZGVbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZU5vZGVbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZU5vZGVbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5UYWJsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIOaYvuekulxyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fMVwiKS5nZXRDaGlsZEJ5TmFtZShcImdwXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uWzFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8g5pi+56S66YKA6K+3XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZU5vZGVbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlTm9kZVsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuc2VydmVyRGF0YS5pc0ZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpLmdldENoaWxkQnlOYW1lKFwiY29pbl8xXCIpLmdldENoaWxkQnlOYW1lKFwiZ3BcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmljb25bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pi+56S6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWkuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luXzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5UYWJsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgoDor7fmlrnms5VcclxuICAgICAqL1xyXG4gICAgaW52aXRlSGFuZGxlKCkge1xyXG4gICAgICAgIEZTREsuc2hvd0ludml0eVBhZ2UodGhpcy5pbnZ0aXlQYXJlbnROb2RlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19