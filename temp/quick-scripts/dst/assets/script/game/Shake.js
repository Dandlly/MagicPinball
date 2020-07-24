
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/Shake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTaGFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxXQUFXO0FBQ1gseURBQXlEO0FBQ3pEO0lBQW9CLHlCQUFpQjtJQVdqQyxlQUFZLFFBQVEsRUFBRSxjQUFjLEVBQUUsY0FBYztRQUFwRCxZQUNJLGlCQUFPLFNBSVY7UUFIRyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ25ELEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDOztJQUNwRSxDQUFDO0lBRUQsWUFBWTtJQUNaLGlDQUFpQixHQUFqQixVQUFrQixHQUFHLEVBQUUsR0FBRztRQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2pELENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzRixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGdDQUFnQixHQUFoQixVQUFpQixRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWM7UUFDckQsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUM7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQzFGLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsK0JBQWUsR0FBZixVQUFnQixNQUFNO1FBQ2xCLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFDRCxvQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsQ0E1Q21CLEVBQUUsQ0FBQyxjQUFjLEdBNENwQztBQUVELEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWM7SUFDaEQsT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vLyBAY2NjbGFzc1xyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFrZSBleHRlbmRzIGNjLkFjdGlvbkludGVydmFsIHtcclxuY2xhc3MgU2hha2UgZXh0ZW5kcyBjYy5BY3Rpb25JbnRlcnZhbCB7XHJcbiAgICAvL+iKgueCueWIneWni+S9jee9rlxyXG4gICAgbm9kZUluaXRpYWxQb3M6IGNjLlZlYzJcclxuICAgIC8vWOi9tOaKluWKqOW5heW6plxyXG4gICAgbm9kZVNoYWtlU3RyZW5ndGhYOiAwXHJcbiAgICAvL1novbTmipbliqjluYXluqZcclxuICAgIG5vZGVTaGFrZVN0cmVuZ3RoWTogMFxyXG4gICAgLy/mipbliqjml7bpl7RcclxuICAgIGR1cmF0aW9uOiAwXHJcbiAgICB0YXJnZXQ6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkdXJhdGlvbiwgc2hha2VTdHJlbmd0aFgsIHNoYWtlU3RyZW5ndGhZKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5pbml0V2l0aER1cmF0aW9uKGR1cmF0aW9uLCBzaGFrZVN0cmVuZ3RoWCwgc2hha2VTdHJlbmd0aFkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5Lik5Liq5pWw6Ze055qE6ZqP5py65YC8XHJcbiAgICBnZXRSYW5kb21TdHJlbmd0aChtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHZhciByYW5kWCA9IHRoaXMuZ2V0UmFuZG9tU3RyZW5ndGgoLXRoaXMubm9kZVNoYWtlU3RyZW5ndGhYLCB0aGlzLm5vZGVTaGFrZVN0cmVuZ3RoWCkgKiBkdDtcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdldFJhbmRvbVN0cmVuZ3RoKC10aGlzLm5vZGVTaGFrZVN0cmVuZ3RoWSwgdGhpcy5ub2RlU2hha2VTdHJlbmd0aFkpICogZHQ7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuc2V0UG9zaXRpb24odGhpcy5ub2RlSW5pdGlhbFBvcy5hZGQoY2MudjIocmFuZFgsIHJhbmRZKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRXaXRoRHVyYXRpb24oZHVyYXRpb24sIHNoYWtlU3RyZW5ndGhYLCBzaGFrZVN0cmVuZ3RoWSkge1xyXG4gICAgICAgIGlmIChjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGUuaW5pdFdpdGhEdXJhdGlvbi5jYWxsKHRoaXMsIGR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVTaGFrZVN0cmVuZ3RoWCA9IHNoYWtlU3RyZW5ndGhYO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVTaGFrZVN0cmVuZ3RoWSA9IHNoYWtlU3RyZW5ndGhZID09ICd1bmRlZmluZWQnID8gc2hha2VTdHJlbmd0aFggOiBzaGFrZVN0cmVuZ3RoWTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHN0YXJ0V2l0aFRhcmdldCh0YXJnZXQpIHtcclxuICAgICAgICBjYy5BY3Rpb25JbnRlcnZhbC5wcm90b3R5cGUuc3RhcnRXaXRoVGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcclxuICAgICAgICB0aGlzLm5vZGVJbml0aWFsUG9zID0gdGFyZ2V0LmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnNldFBvc2l0aW9uKHRoaXMubm9kZUluaXRpYWxQb3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jYy5zaGFrZSA9IChkdXJhdGlvbiwgc2hha2VTdHJlbmd0aFgsIHNoYWtlU3RyZW5ndGhZKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFNoYWtlKGR1cmF0aW9uLCBzaGFrZVN0cmVuZ3RoWCwgc2hha2VTdHJlbmd0aFkpO1xyXG59Il19