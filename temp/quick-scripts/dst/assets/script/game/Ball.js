
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxCYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFvRTtBQUk5RCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOztHQUVHO0FBRUg7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUErRUM7UUE1RUcscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFFakMsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IsY0FBUSxHQUEwQixJQUFJLENBQUM7UUFDL0IsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUF3RWhDLENBQUM7SUF2RUcscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFBVCxpQkF1Q0M7UUF0Q0csSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRTdCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELE9BQU87WUFDUCxJQUFJLE9BQU8sR0FBRyxFQUFFLENB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akQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDNUU7U0FDSjtRQUVELElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLHNCQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQTFFRDtRQURDLFFBQVEsRUFBRTtpREFDc0I7SUFGaEIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThFeEI7SUFBRCxXQUFDO0NBOUVELEFBOEVDLENBOUVpQyxFQUFFLENBQUMsU0FBUyxHQThFN0M7a0JBOUVvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnN0YW50LCBHYW1lRXZlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudENvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi9jb21tb24vVXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vKipcclxuICog5L2c6ICFOkRhbmRsbHlcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGlzVG91Y2hlZEdyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBodXJ0TnVtOiBudW1iZXIgPSAxO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVG91Y2hlZEdyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2hlZEdyb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoXCIjMDJjOWZmXCIpO1xyXG4gICAgICAgICAgICAvL+iusOW9lei3r+W+hOeCuVxyXG4gICAgICAgICAgICBsZXQgcGF0aFBvcyA9IFtdO1xyXG4gICAgICAgICAgICBwYXRoUG9zLnB1c2godGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24ueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGhQb3MucHVzaChjYy52MigzNDUsIC00MTUpKVxyXG4gICAgICAgICAgICAgICAgcGF0aFBvcy5wdXNoKGNjLnYyKDM0NSwgMzk3KSlcclxuICAgICAgICAgICAgICAgIHBhdGhQb3MucHVzaChjYy52MigwLCAzOTcpKVxyXG4gICAgICAgICAgICAgICAgcGF0aFBvcy5wdXNoKGNjLnYyKDAsIDM5MCkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoUG9zLnB1c2goY2MudjIoLTM0NSwgLTQxNSkpXHJcbiAgICAgICAgICAgICAgICBwYXRoUG9zLnB1c2goY2MudjIoLTM0NSwgMzk3KSlcclxuICAgICAgICAgICAgICAgIHBhdGhQb3MucHVzaChjYy52MigwLCAzOTcpKVxyXG4gICAgICAgICAgICAgICAgcGF0aFBvcy5wdXNoKGNjLnYyKDAsIDM5MCkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5jYXJkaW5hbFNwbGluZVRvKDEsIHBhdGhQb3MsIDAuOSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmh1cnROdW0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNGRjAwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbnN0YW50LmdhbWUucmVjeWNsZUJhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09ICd3YWxsJyB8fCBvdGhlckNvbGxpZGVyLm5vZGUubmFtZS5pbmRleE9mKCdwb2x5Z29uJykgIT0gLTEgfHwgb3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gJ2J4Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlICE9IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcGx1c09yTWludXMgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gLTEgOiAxO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkueSkgPCAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlcihjYy52MigxMDAgKiBwbHVzT3JNaW51cywgNTAwMDApLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubm9kZS5uYW1lID09ICdncm91bmQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaGVkR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEh1cnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVydE51bTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SHVydChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5odXJ0TnVtID0gZmxhZztcclxuICAgIH1cclxuXHJcbn1cclxuIl19