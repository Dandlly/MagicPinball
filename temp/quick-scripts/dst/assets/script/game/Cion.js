
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/Cion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0c47hgpOJCH7q6oebNgBSS', 'Cion');
// script/game/Cion.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cion = /** @class */ (function (_super) {
    __extends(Cion, _super);
    function Cion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cion.prototype.coinBigJump = function () {
        var x = (-(cc.winSize.width / 2) - 200) + Math.random() * (cc.winSize.width + 400);
        var time = Math.random() + 1.5;
        var scale = 0.5 + (((cc.winSize.width + 800) / 2) - Math.abs(x)) / (cc.winSize.width + 300);
        var seq = cc.sequence(cc.spawn(cc.jumpTo(time, x, (-cc.winSize.height / 2) - 200, Math.floor(Math.random() * 1000), 1), cc.scaleTo(time, scale, scale)), cc.callFunc(function () {
            GPool.put(this.node);
        }.bind(this)));
        this.node.runAction(seq);
    };
    Cion = __decorate([
        ccclass
    ], Cion);
    return Cion;
}(cc.Component));
exports.default = Cion;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxDaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBaUJBLENBQUM7SUFmRywwQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDNUYsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FDakIsRUFBRSxDQUFDLEtBQUssQ0FDSixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkYsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUNqQyxFQUNELEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ2hCLENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBaEJnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaUJ4QjtJQUFELFdBQUM7Q0FqQkQsQUFpQkMsQ0FqQmlDLEVBQUUsQ0FBQyxTQUFTLEdBaUI3QztrQkFqQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29pbkJpZ0p1bXAoKSB7XHJcbiAgICAgICAgbGV0IHggPSAoLShjYy53aW5TaXplLndpZHRoIC8gMikgLSAyMDApICsgTWF0aC5yYW5kb20oKSAqIChjYy53aW5TaXplLndpZHRoICsgNDAwKTtcclxuICAgICAgICBsZXQgdGltZSA9IE1hdGgucmFuZG9tKCkgKyAxLjU7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gMC41ICsgKCgoY2Mud2luU2l6ZS53aWR0aCArIDgwMCkgLyAyKSAtIE1hdGguYWJzKHgpKSAvIChjYy53aW5TaXplLndpZHRoICsgMzAwKTtcclxuICAgICAgICBsZXQgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgY2MuanVtcFRvKHRpbWUsIHgsICgtY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSAtIDIwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksIDEpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbyh0aW1lLCBzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIEdQb29sLnB1dCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH1cclxufVxyXG4iXX0=