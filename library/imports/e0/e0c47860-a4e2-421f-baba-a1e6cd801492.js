"use strict";
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