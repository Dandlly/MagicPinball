
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/StarEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d797GlOglIlaf6bP7CJBWZ', 'StarEnd');
// script/game/StarEnd.ts

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
var StarEnd = /** @class */ (function (_super) {
    __extends(StarEnd, _super);
    function StarEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dragonBones = null;
        return _this;
    }
    StarEnd.prototype.init = function () {
        this._dragonBones = this.getComponent(dragonBones.ArmatureDisplay);
        this._dragonBones.playAnimation('play', 1); // 默认状态
        this._dragonBones.addEventListener(dragonBones.EventObject.COMPLETE, this.antmationEventHandler, this);
    };
    StarEnd.prototype.antmationEventHandler = function (event) {
        if (event.type == dragonBones.EventObject.COMPLETE) {
            GPool.put(this.node);
        }
    };
    StarEnd = __decorate([
        ccclass
    ], StarEnd);
    return StarEnd;
}(cc.Component));
exports.default = StarEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxTdGFyRW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUFpQkM7UUFkVyxrQkFBWSxHQUFnQyxJQUFJLENBQUM7O0lBYzdELENBQUM7SUFaRyxzQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRCx1Q0FBcUIsR0FBckIsVUFBc0IsS0FBSztRQUN2QixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDaEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBZGdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FnQjNCO0lBQUQsY0FBQztDQWhCRCxBQWdCQyxDQWhCb0MsRUFBRSxDQUFDLFNBQVMsR0FnQmhEO2tCQWhCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyRW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfZHJhZ29uQm9uZXM6IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSA9IG51bGw7XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9kcmFnb25Cb25lcyA9IHRoaXMuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ29uQm9uZXMucGxheUFuaW1hdGlvbigncGxheScsIDEpOyAvLyDpu5jorqTnirbmgIFcclxuICAgICAgICB0aGlzLl9kcmFnb25Cb25lcy5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFLCB0aGlzLmFudG1hdGlvbkV2ZW50SGFuZGxlciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYW50bWF0aW9uRXZlbnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpIHtcclxuICAgICAgICAgICAgR1Bvb2wucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=