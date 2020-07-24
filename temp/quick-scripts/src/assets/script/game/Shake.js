"use strict";
cc._RF.push(module, '10459WBjgFGz4Vp4nzFnyeS', 'Shake');
// script/game/Shake.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// @ccclass
// export default class Shake extends cc.ActionInterval {
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake(duration, shakeStrengthX, shakeStrengthY) {
        var _this = _super.call(this) || this;
        cc.ActionInterval.prototype.constructor.call(_this);
        _this.duration = duration;
        _this.initWithDuration(duration, shakeStrengthX, shakeStrengthY);
        return _this;
    }
    //获取两个数间的随机值
    Shake.prototype.getRandomStrength = function (min, max) {
        return Math.random() * (max - min + 1) + min;
    };
    Shake.prototype.update = function (dt) {
        var randX = this.getRandomStrength(-this.nodeShakeStrengthX, this.nodeShakeStrengthX) * dt;
        var randY = this.getRandomStrength(-this.nodeShakeStrengthY, this.nodeShakeStrengthY) * dt;
        this.target.setPosition(this.nodeInitialPos.add(cc.v2(randX, randY)));
    };
    Shake.prototype.initWithDuration = function (duration, shakeStrengthX, shakeStrengthY) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this.nodeShakeStrengthX = shakeStrengthX;
            this.nodeShakeStrengthY = shakeStrengthY == 'undefined' ? shakeStrengthX : shakeStrengthY;
            return true;
        }
        return false;
    };
    Shake.prototype.startWithTarget = function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this.nodeInitialPos = target.getPosition();
    };
    Shake.prototype.stop = function () {
        this.target.setPosition(this.nodeInitialPos);
    };
    return Shake;
}(cc.ActionInterval));
cc.shake = function (duration, shakeStrengthX, shakeStrengthY) {
    return new Shake(duration, shakeStrengthX, shakeStrengthY);
};

cc._RF.pop();