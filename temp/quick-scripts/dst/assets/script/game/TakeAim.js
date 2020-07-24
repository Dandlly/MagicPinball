
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/TakeAim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxUYWtlQWltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUVsRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOztHQUVHO0FBRUg7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUFpREM7UUE5Q0csV0FBSyxHQUFjLElBQUksQ0FBQzs7SUE4QzVCLENBQUM7SUE1Q0csd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxhQUFhO0lBQ2IsNkJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLENBQUMsNkJBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN4QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLDZCQUFZLENBQUMsT0FBTztZQUFFLE9BQU87UUFFakMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBRSxRQUFRO1FBQ3JDLG1FQUFtRTtRQUNuRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRW5FLElBQUksUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDbEIsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFJLFdBQVc7UUFDM0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtRQUNqRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBRWhDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWpCLGtCQUFrQjtRQUNsQixPQUFPLFVBQVUsR0FBRyxNQUFNLEVBQUU7WUFDeEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsVUFBVSxJQUFJLE1BQU0sQ0FBQztTQUN4QjtRQUVELGlDQUFpQztRQUNqQyx3REFBd0Q7UUFDeEQsaUNBQWlDO0lBQ3JDLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSTtJQUZQLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnRDNCO0lBQUQsY0FBQztDQWhERCxBQWdEQyxDQWhEb0MsRUFBRSxDQUFDLFNBQVMsR0FnRGhEO2tCQWhEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25zdGFudCB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRDb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiDkvZzogIU6RGFuZGxseVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFrZUFpbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYXJyYXc6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+inpuaRuOenu+WKqOaTjeS9nO+8jOWwhOe6v+eehOWHhlxyXG4gICAgb25Ub3VjaE1vdmUodG91Y2gpIHtcclxuICAgICAgICBpZiAoIUdhbWVDb25zdGFudC5nYW1lLmlzUmVjeWNsZUZpbmlzaGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoR2FtZUNvbnN0YW50LmlzQXdhcmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IG9yaWdpbiA9IGNjLnYyKDAsIDQwMCk7ICAvL+WwhOe6v+WOn+eCueWdkOagh1xyXG4gICAgICAgIC8vIGxldCB0b3VjaFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG91Y2hUb05vZGVTcGFjZUFSKHRvdWNoLnRvdWNoKTtcclxuICAgICAgICBsZXQgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgIGlmICh0b3VjaFBvcy55ID4gMzIwKSB7XHJcbiAgICAgICAgICAgIHRvdWNoUG9zID0gbmV3IGNjLlZlYzIodG91Y2hQb3MueCwgMzIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGxldCBsaW5lID0gdG91Y2hQb3Muc3ViKG9yaWdpbik7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IDQwO1xyXG4gICAgICAgIGxldCBsaW5lTGVuZ3RoID0gbGluZS5tYWcoKTsgICAgLy/ojrflvpfov5nkuKrlkJHph4/nmoTplb/luqZcclxuICAgICAgICBsZXQgaW5jcmVtZW50ID0gbGluZS5ub3JtYWxpemUoKS5tdWwobGVuZ3RoKTsgLy/moLnmja7mr4/mnaHnur/mrrXnmoTplb/luqbojrflvpfkuIDkuKrlop7ph4/lkJHph49cclxuICAgICAgICBsZXQgcG9zID0gb3JpZ2luLmNsb25lKCk7IC8v5Li05pe25Y+Y6YePXHJcblxyXG4gICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGNjLmNvbG9yKDc4LCA3MiwgMTI1LCAyNTUpO1xyXG4gICAgICAgIHBvcy5hZGRTZWxmKGluY3JlbWVudCk7XHJcbiAgICAgICAgcG9zLmFkZFNlbGYoaW5jcmVtZW50KTtcclxuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xyXG5cclxuICAgICAgICAvL+WPquimgee6v+autemVv+W6pui/mOWkp+S6juavj+adoee6v+auteeahOmVv+W6plxyXG4gICAgICAgIHdoaWxlIChsaW5lTGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmNpcmNsZShwb3MueCwgcG9zLnksIDUpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgICAgIHBvcy5hZGRTZWxmKGluY3JlbWVudCk7XHJcbiAgICAgICAgICAgIGxpbmVMZW5ndGggLT0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmFyIGRpcyA9IG9yaWdpbi5zdWIodG91Y2hQb3MpXHJcbiAgICAgICAgLy8gdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihkaXMueSwgZGlzLngpIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgICAgICAvLyB0aGlzLmFycmF3Lm5vZGUuYW5nbGUgPSBhbmdsZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19