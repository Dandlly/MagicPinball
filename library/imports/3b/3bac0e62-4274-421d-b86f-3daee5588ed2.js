"use strict";
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