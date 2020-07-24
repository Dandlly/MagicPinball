"use strict";
cc._RF.push(module, 'ff6d5E03utFs7Ot/obBciPr', 'TakeAim');
// script/game/TakeAim.ts

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
var TakeAim = /** @class */ (function (_super) {
    __extends(TakeAim, _super);
    function TakeAim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arraw = null;
        return _this;
    }
    TakeAim.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    //触摸移动操作，射线瞄准
    TakeAim.prototype.onTouchMove = function (touch) {
        if (!EventConstants_1.GameConstant.game.isRecycleFinished()) {
            return;
        }
        if (EventConstants_1.GameConstant.isAward)
            return;
        var origin = cc.v2(0, 400); //射线原点坐标
        // let touchPos = this.node.convertTouchToNodeSpaceAR(touch.touch);
        var touchPos = this.node.convertToNodeSpaceAR(touch.getLocation());
        if (touchPos.y > 320) {
            touchPos = new cc.Vec2(touchPos.x, 320);
        }
        var graphics = this.node.getComponent(cc.Graphics);
        var line = touchPos.sub(origin);
        var length = 40;
        var lineLength = line.mag(); //获得这个向量的长度
        var increment = line.normalize().mul(length); //根据每条线段的长度获得一个增量向量
        var pos = origin.clone(); //临时变量
        graphics.fillColor = cc.color(78, 72, 125, 255);
        pos.addSelf(increment);
        pos.addSelf(increment);
        graphics.clear();
        //只要线段长度还大于每条线段的长度
        while (lineLength > length) {
            graphics.circle(pos.x, pos.y, 5);
            graphics.fill();
            pos.addSelf(increment);
            lineLength -= length;
        }
        // var dis = origin.sub(touchPos)
        // var angle = Math.atan2(dis.y, dis.x) / Math.PI * 180;
        // this.arraw.node.angle = angle;
    };
    __decorate([
        property(cc.Sprite)
    ], TakeAim.prototype, "arraw", void 0);
    TakeAim = __decorate([
        ccclass
    ], TakeAim);
    return TakeAim;
}(cc.Component));
exports.default = TakeAim;

cc._RF.pop();