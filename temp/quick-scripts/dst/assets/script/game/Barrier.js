
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/Barrier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bac05iQnRCHbhvPa7lWI7S', 'Barrier');
// script/game/Barrier.ts

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
var EventConstants_1 = require("../common/EventConstants");
var User_1 = require("../common/User");
var Utils_1 = require("../common/Utils");
var Ball_1 = require("./Ball");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var Barrier = /** @class */ (function (_super) {
    __extends(Barrier, _super);
    function Barrier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbScore = null;
        _this.isAddBuffBall = false;
        _this.isAddRed = false;
        _this.isBigBuffBall = false;
        _this.score = 0;
        return _this;
    }
    Barrier.prototype.init = function (score, isRain) {
        if (score === void 0) { score = 0; }
        if (isRain === void 0) { isRain = false; }
        if (this.lbScore) {
            this.node.angle = 0;
            this.lbScore.node.angle = 0;
            var angleRan = -Math.random() * 360;
            // 随机角度
            this.node.angle = angleRan;
            this.lbScore.node.color = cc.color().fromHEX("000000");
            this.lbScore.node.angle -= angleRan;
        }
        if (this.isAddRed) {
            this.node.angle = 0;
            this.lbScore.node.angle = 0;
        }
        if (score != 0) {
            this.setScore(score);
        }
        else {
            if (!this.isAddBuffBall && !this.isAddRed && !this.isBigBuffBall) {
                this.node.scale = Utils_1.utils.randomFloat(User_1.user.getLumpData().BarrierSacleArr);
            }
            this.setScore(EventConstants_1.GameConstant.game.setBarrierScore());
        }
        if (!this.isAddBuffBall && !this.isAddRed && !this.isBigBuffBall) {
            if (isRain) {
                this.node.getChildByName('IrisAnim').active = true;
                this.node.getChildByName("rainbow").active = true;
            }
            else {
                this.node.getChildByName('IrisAnim').active = false;
                this.node.getChildByName("rainbow").active = false;
            }
        }
    };
    //设置分数
    Barrier.prototype.setScore = function (score) {
        if (this.lbScore) {
            this.score = score;
            this.lbScore.string = this.score.toString();
            this.setColor(this.score);
        }
    };
    Barrier.prototype.getScore = function () {
        return this.score;
    };
    Barrier.prototype.setColor = function (scroe) {
        if (this.isAddBuffBall || this.isAddRed || this.isBigBuffBall)
            return;
        var colorData = User_1.user.getLumpData().color;
        // 预防出错
        if (colorData.length != 7)
            return;
        var color;
        if (scroe <= 10) {
            color = colorData[0];
        }
        else if (scroe <= 50) {
            color = colorData[1];
        }
        else if (scroe <= 100) {
            color = colorData[2];
        }
        else if (scroe <= 300) {
            color = colorData[3];
        }
        else if (scroe <= 500) {
            color = colorData[4];
        }
        else if (scroe <= 700) {
            color = colorData[5];
        }
        else if (scroe > 700) {
            color = colorData[6];
        }
        for (var index = 0; index < this.node.children.length; index++) {
            if (this.node.children[index].name.indexOf("bloacks_1") != -1) {
                this.node.children[index].color = cc.color().fromHEX(color[2]);
            }
            if (this.node.children[index].name.indexOf("bloacks_2") != -1) {
                this.node.children[index].color = cc.color().fromHEX(color[1]);
            }
            if (this.node.children[index].name.indexOf("bloacks_3") != -1) {
                this.node.children[index].color = cc.color().fromHEX(color[0]);
            }
        }
    };
    //发生碰撞时
    Barrier.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.tag == 1) {
            // if (otherCollider.node.name == "ball") {
            if (this.isAddBuffBall) {
                EventConstants_1.GameConstant.game.addBall(this.node.position);
                EventConstants_1.GameConstant.game.removeBarrier(this);
                var _oldProp = User_1.user.getCurrentProp();
                _oldProp -= 1;
                User_1.user.setCurrentProp(_oldProp);
            }
            else if (this.isBigBuffBall) {
                if (otherCollider.node.getComponent(Ball_1.default).getHurt() == 2)
                    return;
                EventConstants_1.GameConstant.game.bigBall(otherCollider.node);
                EventConstants_1.GameConstant.game.removeBarrier(this);
                var _oldProp = User_1.user.getCurrentProp();
                _oldProp -= 1;
                User_1.user.setCurrentProp(_oldProp);
            }
            else if (this.isAddRed) {
                var hurt = otherCollider.node.getComponent(Ball_1.default).getHurt();
                if (this.score <= hurt) {
                    EventConstants_1.GameConstant.game.addScore(this.score);
                    this.node.opacity = 120;
                    this.node.getComponent(cc.PhysicsPolygonCollider).enabled = false;
                    this.score = 0;
                    this.lbScore.node.active = false;
                }
                else {
                    this.setScore(this.score - hurt);
                    EventConstants_1.GameConstant.game.addScore(this.score - hurt);
                    EventConstants_1.GameConstant.game.shake(this.node);
                }
            }
            else {
                var hurt = otherCollider.node.getComponent(Ball_1.default).getHurt();
                if (this.score <= hurt) {
                    EventConstants_1.GameConstant.game.addScore(this.score);
                    EventConstants_1.GameConstant.game.removeBarrier(this);
                }
                else {
                    this.setScore(this.score - hurt);
                    EventConstants_1.GameConstant.game.addScore(this.score - hurt);
                    EventConstants_1.GameConstant.game.shake(this.node);
                }
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], Barrier.prototype, "lbScore", void 0);
    __decorate([
        property()
    ], Barrier.prototype, "isAddBuffBall", void 0);
    __decorate([
        property()
    ], Barrier.prototype, "isAddRed", void 0);
    __decorate([
        property()
    ], Barrier.prototype, "isBigBuffBall", void 0);
    Barrier = __decorate([
        ccclass
    ], Barrier);
    return Barrier;
}(cc.Component));
exports.default = Barrier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxCYXJyaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFvRTtBQUNwRSx1Q0FBc0M7QUFDdEMseUNBQXdDO0FBQ3hDLCtCQUEwQjtBQUdwQixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOztHQUVHO0FBRUg7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUErSUM7UUE1SUcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBcUl0QixDQUFDO0lBbklHLHNCQUFJLEdBQUosVUFBSyxLQUFTLEVBQUUsTUFBYztRQUF6QixzQkFBQSxFQUFBLFNBQVM7UUFBRSx1QkFBQSxFQUFBLGNBQWM7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ3BDLE9BQU87WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQztTQUN2QztRQUVE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QUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLDZCQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUM5Qyw2QkFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBM0lEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ007SUFFekI7UUFEQyxRQUFRLEVBQUU7a0RBQ29CO0lBRS9CO1FBREMsUUFBUSxFQUFFOzZDQUNlO0lBRTFCO1FBREMsUUFBUSxFQUFFO2tEQUNvQjtJQVJkLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E4STNCO0lBQUQsY0FBQztDQTlJRCxBQThJQyxDQTlJb0MsRUFBRSxDQUFDLFNBQVMsR0E4SWhEO2tCQTlJb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25zdGFudCwgR2FtZUV2ZW50cyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRDb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9jb21tb24vVXNlclwiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi9jb21tb24vVXRpbHNcIjtcclxuaW1wb3J0IEJhbGwgZnJvbSBcIi4vQmFsbFwiO1xyXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOS9nOiAhTpEYW5kbGx5XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJyaWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBpc0FkZEJ1ZmZCYWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgaXNBZGRSZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBpc0JpZ0J1ZmZCYWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpbml0KHNjb3JlID0gMCwgaXNSYWluID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5sYlNjb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGJTY29yZS5ub2RlLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlUmFuID0gLU1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICAgICAgICAgIC8vIOmaj+acuuinkuW6plxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZVJhbjtcclxuICAgICAgICAgICAgdGhpcy5sYlNjb3JlLm5vZGUuY29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoXCIwMDAwMDBcIik7XHJcbiAgICAgICAgICAgIHRoaXMubGJTY29yZS5ub2RlLmFuZ2xlIC09IGFuZ2xlUmFuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBZGRSZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sYlNjb3JlLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjb3JlICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTY29yZShzY29yZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWRkQnVmZkJhbGwgJiYgIXRoaXMuaXNBZGRSZWQgJiYgIXRoaXMuaXNCaWdCdWZmQmFsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gdXRpbHMucmFuZG9tRmxvYXQodXNlci5nZXRMdW1wRGF0YSgpLkJhcnJpZXJTYWNsZUFycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTY29yZShHYW1lQ29uc3RhbnQuZ2FtZS5zZXRCYXJyaWVyU2NvcmUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNBZGRCdWZmQmFsbCAmJiAhdGhpcy5pc0FkZFJlZCAmJiAhdGhpcy5pc0JpZ0J1ZmZCYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1JhaW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnSXJpc0FuaW0nKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmFpbmJvd1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdJcmlzQW5pbScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicmFpbmJvd1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9ruWIhuaVsFxyXG4gICAgc2V0U2NvcmUoc2NvcmUpIHtcclxuICAgICAgICBpZiAodGhpcy5sYlNjb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcclxuICAgICAgICAgICAgdGhpcy5sYlNjb3JlLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcih0aGlzLnNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2NvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3Ioc2Nyb2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FkZEJ1ZmZCYWxsIHx8IHRoaXMuaXNBZGRSZWQgfHwgdGhpcy5pc0JpZ0J1ZmZCYWxsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNvbG9yRGF0YSA9IHVzZXIuZ2V0THVtcERhdGEoKS5jb2xvcjtcclxuICAgICAgICAvLyDpooTpmLLlh7rplJlcclxuICAgICAgICBpZiAoY29sb3JEYXRhLmxlbmd0aCAhPSA3KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgIGlmIChzY3JvZSA8PSAxMCkge1xyXG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yRGF0YVswXTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNjcm9lIDw9IDUwKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JEYXRhWzFdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2UgPD0gMTAwKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JEYXRhWzJdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2UgPD0gMzAwKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JEYXRhWzNdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2UgPD0gNTAwKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JEYXRhWzRdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2UgPD0gNzAwKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JEYXRhWzVdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2UgPiA3MDApIHtcclxuICAgICAgICAgICAgY29sb3IgPSBjb2xvckRhdGFbNl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuW2luZGV4XS5uYW1lLmluZGV4T2YoXCJibG9hY2tzXzFcIikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF0uY29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoY29sb3JbMl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5baW5kZXhdLm5hbWUuaW5kZXhPZihcImJsb2Fja3NfMlwiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2luZGV4XS5jb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWChjb2xvclsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF0ubmFtZS5pbmRleE9mKFwiYmxvYWNrc18zXCIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baW5kZXhdLmNvbG9yID0gY2MuY29sb3IoKS5mcm9tSEVYKGNvbG9yWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WPkeeUn+eisOaSnuaXtlxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09IDEpIHtcclxuICAgICAgICAgICAgLy8gaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09IFwiYmFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWRkQnVmZkJhbGwpIHtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25zdGFudC5nYW1lLmFkZEJhbGwodGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIEdhbWVDb25zdGFudC5nYW1lLnJlbW92ZUJhcnJpZXIodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgX29sZFByb3AgPSB1c2VyLmdldEN1cnJlbnRQcm9wKCk7XHJcbiAgICAgICAgICAgICAgICBfb2xkUHJvcCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdXNlci5zZXRDdXJyZW50UHJvcChfb2xkUHJvcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0JpZ0J1ZmZCYWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJDb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChCYWxsKS5nZXRIdXJ0KCkgPT0gMikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUuYmlnQmFsbChvdGhlckNvbGxpZGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUucmVtb3ZlQmFycmllcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIGxldCBfb2xkUHJvcCA9IHVzZXIuZ2V0Q3VycmVudFByb3AoKTtcclxuICAgICAgICAgICAgICAgIF9vbGRQcm9wIC09IDE7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnNldEN1cnJlbnRQcm9wKF9vbGRQcm9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzQWRkUmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaHVydCA9IG90aGVyQ29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoQmFsbCkuZ2V0SHVydCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPD0gaHVydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25zdGFudC5nYW1lLmFkZFNjb3JlKHRoaXMuc2NvcmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMTIwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJTY29yZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjb3JlKHRoaXMuc2NvcmUgLSBodXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uc3RhbnQuZ2FtZS5hZGRTY29yZSh0aGlzLnNjb3JlIC0gaHVydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUuc2hha2UodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBodXJ0ID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChCYWxsKS5nZXRIdXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY29yZSA8PSBodXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUuYWRkU2NvcmUodGhpcy5zY29yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUucmVtb3ZlQmFycmllcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY29yZSh0aGlzLnNjb3JlIC0gaHVydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUuYWRkU2NvcmUodGhpcy5zY29yZSAtIGh1cnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25zdGFudC5nYW1lLnNoYWtlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19