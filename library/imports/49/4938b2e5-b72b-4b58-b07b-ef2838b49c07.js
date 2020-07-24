"use strict";
cc._RF.push(module, '4938bLltytLWLB77yg4tJwH', 'Ball');
// script/game/Ball.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 作者:Dandlly
 */
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTouchedGround = false;
        _this.rigidBody = null;
        _this.collider = null;
        _this.hurtNum = 1;
        return _this;
    }
    Ball.prototype.onLoad = function () {
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        this.rigidBody.gravityScale = 0;
    };
    Ball.prototype.update = function (dt) {
        var _this = this;
        if (this.isTouchedGround) {
            this.isTouchedGround = false;
            this.rigidBody.active = false;
            this.rigidBody.linearVelocity = cc.Vec2.ZERO;
            this.node.color = cc.color().fromHEX("#02c9ff");
            //记录路径点
            var pathPos = [];
            pathPos.push(this.node.position);
            if (this.node.position.x > 0) {
                pathPos.push(cc.v2(345, -415));
                pathPos.push(cc.v2(345, 397));
                pathPos.push(cc.v2(0, 397));
                pathPos.push(cc.v2(0, 390));
            }
            else {
                pathPos.push(cc.v2(-345, -415));
                pathPos.push(cc.v2(-345, 397));
                pathPos.push(cc.v2(0, 397));
                pathPos.push(cc.v2(0, 390));
            }
            this.node.runAction(cc.sequence(cc.cardinalSplineTo(1, pathPos, 0.9), cc.callFunc(function () {
                _this.rigidBody.gravityScale = 0;
                _this.node.color = cc.color().fromHEX("#FFFFFF");
                // if (this.hurtNum == 1) {
                // } else {
                //     this.node.color = cc.color().fromHEX("#FF0000");
                // }
                _this.rigidBody.active = true;
                EventConstants_1.GameConstant.game.recycleBall();
                _this.rigidBody.type = cc.RigidBodyType.Static;
            })));
        }
    };
    Ball.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == 'wall' || otherCollider.node.name.indexOf('polygon') != -1 || otherCollider.node.name == 'bx') {
            if (this.rigidBody.gravityScale != 10) {
                this.rigidBody.gravityScale = 10;
            }
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            if (Math.abs(this.rigidBody.linearVelocity.y) < 200) {
                this.rigidBody.applyForceToCenter(cc.v2(100 * plusOrMinus, 50000), true);
            }
        }
        if (otherCollider.node.name == 'ground') {
            this.isTouchedGround = true;
        }
    };
    Ball.prototype.getHurt = function () {
        return this.hurtNum;
    };
    Ball.prototype.setHurt = function (flag) {
        this.hurtNum = flag;
    };
    __decorate([
        property()
    ], Ball.prototype, "isTouchedGround", void 0);
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

cc._RF.pop();