
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AnimationControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70ed5iyRUtHEJuFzpQKt6ey', 'AnimationControl');
// script/common/AnimationControl.ts

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
/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-08-18 09:59:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-20 00:35:45
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnimationControl = /** @class */ (function (_super) {
    __extends(AnimationControl, _super);
    function AnimationControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOnLoad = true;
        _this.control_node = [];
        _this.delay_time = [];
        _this.appear_time = [];
        _this.disappear_time = [];
        _this.begin_time = [];
        return _this;
    }
    /**
     * 默认播放（如果要不播放，则取消那个勾）;
     */
    AnimationControl.prototype.onLoad = function () {
        var _this = this;
        if (!this.isOnLoad)
            return;
        this.control_node.forEach(function (anim, index) {
            anim.node.stopAllActions();
            anim.play();
            if (_this.begin_time[index] && _this.begin_time[index] > 0) {
                anim.setCurrentTime(_this.begin_time[index]);
            }
            if (_this.delay_time[index] && _this.delay_time[index] > 0) {
                anim.stop();
                _this.node.runAction(cc.sequence(cc.delayTime(_this.delay_time[index]), cc.callFunc(function () {
                    anim.play();
                })));
            }
            if (_this.appear_time[index] && _this.appear_time[index] > 0) {
                anim.node.active = false;
                _this.node.runAction(cc.sequence(cc.delayTime(_this.appear_time[index]), cc.callFunc(function () {
                    anim.node.active = true;
                })));
            }
            if (_this.disappear_time[index] && _this.disappear_time[index] > 0) {
                _this.node.runAction(cc.sequence(cc.delayTime(_this.disappear_time[index]), cc.callFunc(function () {
                    anim.node.active = false;
                })));
            }
        });
    };
    /**
     * 技术控制脚本（）
     */
    AnimationControl.prototype.startPlay = function () {
        var _this = this;
        this.control_node.forEach(function (anim, index) {
            anim.node.stopAllActions();
            anim.play();
            if (_this.begin_time[index] && _this.begin_time[index] > 0) {
                anim.setCurrentTime(_this.begin_time[index]);
            }
            if (_this.delay_time[index] && _this.delay_time[index] > 0) {
                anim.stop();
                _this.node.runAction(cc.sequence(cc.delayTime(_this.delay_time[index]), cc.callFunc(function () {
                    anim.play();
                })));
            }
            if (_this.appear_time[index] && _this.appear_time[index] > 0) {
                anim.node.active = false;
                _this.node.runAction(cc.sequence(cc.delayTime(_this.appear_time[index]), cc.callFunc(function () {
                    anim.node.active = true;
                })));
            }
            if (_this.disappear_time[index] && _this.disappear_time[index] > 0) {
                _this.node.runAction(cc.sequence(cc.delayTime(_this.disappear_time[index]), cc.callFunc(function () {
                    anim.node.active = false;
                })));
            }
        });
    };
    AnimationControl.prototype.onDisable = function () {
        this.node.stopAllActions();
    };
    __decorate([
        property({ displayName: '是否直接运行' })
    ], AnimationControl.prototype, "isOnLoad", void 0);
    __decorate([
        property({ type: cc.Animation, displayName: '控制节点' })
    ], AnimationControl.prototype, "control_node", void 0);
    __decorate([
        property({ type: cc.Float, displayName: '延迟播放时间' })
    ], AnimationControl.prototype, "delay_time", void 0);
    __decorate([
        property({ type: cc.Float, displayName: '出现时间' })
    ], AnimationControl.prototype, "appear_time", void 0);
    __decorate([
        property({ type: cc.Float, displayName: '消失时间' })
    ], AnimationControl.prototype, "disappear_time", void 0);
    __decorate([
        property({ type: cc.Float, displayName: '动画开始时所在的时间点' })
    ], AnimationControl.prototype, "begin_time", void 0);
    AnimationControl = __decorate([
        ccclass
    ], AnimationControl);
    return AnimationControl;
}(cc.Component));
exports.default = AnimationControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEFuaW1hdGlvbkNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFEMUQ7UUFBQSxxRUF1R0M7UUFwR0EsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUF3QixFQUFFLENBQUM7UUFFdkMsZ0JBQVUsR0FBa0IsRUFBRSxDQUFDO1FBRS9CLGlCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUVoQyxvQkFBYyxHQUFrQixFQUFFLENBQUM7UUFFbkMsZ0JBQVUsR0FBa0IsRUFBRSxDQUFDOztJQTBGaEMsQ0FBQztJQXhGQTs7T0FFRztJQUNILGlDQUFNLEdBQU47UUFBQSxpQkFzQ0M7UUFyQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM1QztZQUVELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFD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QUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDOzREQUNmO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO3dEQUMxQjtJQVpYLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBc0dwQztJQUFELHVCQUFDO0NBdEdELEFBc0dDLENBdEc2QyxFQUFFLENBQUMsU0FBUyxHQXNHekQ7a0JBdEdvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiBzdWVSaW1uXHJcbiAqIEBEYXRlOiAyMDE5LTA4LTE4IDA5OjU5OjI0XHJcbiAqIEBMYXN0RWRpdG9yczogc3VlUmltblxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDE5LTA4LTIwIDAwOjM1OjQ1XHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9uQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0QHByb3BlcnR5KHsgZGlzcGxheU5hbWU6ICfmmK/lkKbnm7TmjqXov5DooYwnIH0pXHJcblx0aXNPbkxvYWQ6IEJvb2xlYW4gPSB0cnVlO1xyXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkFuaW1hdGlvbiwgZGlzcGxheU5hbWU6ICfmjqfliLboioLngrknIH0pXHJcblx0Y29udHJvbF9ub2RlOiBBcnJheTxjYy5BbmltYXRpb24+ID0gW107XHJcblx0QHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIGRpc3BsYXlOYW1lOiAn5bu26L+f5pKt5pS+5pe26Ze0JyB9KVxyXG5cdGRlbGF5X3RpbWU6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHRAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgZGlzcGxheU5hbWU6ICflh7rnjrDml7bpl7QnIH0pXHJcblx0YXBwZWFyX3RpbWU6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHRAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgZGlzcGxheU5hbWU6ICfmtojlpLHml7bpl7QnIH0pXHJcblx0ZGlzYXBwZWFyX3RpbWU6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHRAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgZGlzcGxheU5hbWU6ICfliqjnlLvlvIDlp4vml7bmiYDlnKjnmoTml7bpl7TngrknIH0pXHJcblx0YmVnaW5fdGltZTogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiDpu5jorqTmkq3mlL7vvIjlpoLmnpzopoHkuI3mkq3mlL7vvIzliJnlj5bmtojpgqPkuKrli77vvIk7XHJcblx0ICovXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0aWYgKCF0aGlzLmlzT25Mb2FkKSByZXR1cm47XHJcblx0XHR0aGlzLmNvbnRyb2xfbm9kZS5mb3JFYWNoKChhbmltLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRhbmltLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdFx0YW5pbS5wbGF5KCk7XHJcblx0XHRcdGlmICh0aGlzLmJlZ2luX3RpbWVbaW5kZXhdICYmIHRoaXMuYmVnaW5fdGltZVtpbmRleF0gPiAwKSB7XHJcblx0XHRcdFx0YW5pbS5zZXRDdXJyZW50VGltZSh0aGlzLmJlZ2luX3RpbWVbaW5kZXhdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuZGVsYXlfdGltZVtpbmRleF0gJiYgdGhpcy5kZWxheV90aW1lW2luZGV4XSA+IDApIHtcclxuXHRcdFx0XHRhbmltLnN0b3AoKTtcclxuXHRcdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRoaXMuZGVsYXlfdGltZVtpbmRleF0pLFxyXG5cdFx0XHRcdFx0Y2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRhbmltLnBsYXkoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuYXBwZWFyX3RpbWVbaW5kZXhdICYmIHRoaXMuYXBwZWFyX3RpbWVbaW5kZXhdID4gMCkge1xyXG5cdFx0XHRcdGFuaW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRoaXMuYXBwZWFyX3RpbWVbaW5kZXhdKSxcclxuXHRcdFx0XHRcdGNjLmNhbGxGdW5jKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0YW5pbS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCkpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmRpc2FwcGVhcl90aW1lW2luZGV4XSAmJiB0aGlzLmRpc2FwcGVhcl90aW1lW2luZGV4XSA+IDApIHtcclxuXHRcdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRoaXMuZGlzYXBwZWFyX3RpbWVbaW5kZXhdKSxcclxuXHRcdFx0XHRcdGNjLmNhbGxGdW5jKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0YW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpKVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOaKgOacr+aOp+WItuiEmuacrO+8iO+8iVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGFydFBsYXkoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnRyb2xfbm9kZS5mb3JFYWNoKChhbmltLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRhbmltLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdFx0YW5pbS5wbGF5KCk7XHJcblx0XHRcdGlmICh0aGlzLmJlZ2luX3RpbWVbaW5kZXhdICYmIHRoaXMuYmVnaW5fdGltZVtpbmRleF0gPiAwKSB7XHJcblx0XHRcdFx0YW5pbS5zZXRDdXJyZW50VGltZSh0aGlzLmJlZ2luX3RpbWVbaW5kZXhdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuZGVsYXlfdGltZVtpbmRleF0gJiYgdGhpcy5kZWxheV90aW1lW2luZGV4XSA+IDApIHtcclxuXHRcdFx0XHRhbmltLnN0b3AoKTtcclxuXHRcdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRoaXMuZGVsYXlfdGltZVtpbmRleF0pLFxyXG5cdFx0XHRcdFx0Y2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRhbmltLnBsYXkoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuYXBwZWFyX3RpbWVbaW5kZXhdICYmIHRoaXMuYXBwZWFyX3RpbWVbaW5kZXhdID4gMCkge1xyXG5cdFx0XHRcdGFuaW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRoaXMuYXBwZWFyX3RpbWVbaW5kZXhdKSxcclxuXHRcdFx0XHRcdGNjLmNhbGxGdW5jKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0YW5pbS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCkpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmRpc2FwcGVhcl90aW1lW2luZGV4XSAmJiB0aGlzLmRpc2FwcGVhcl90aW1lW2luZGV4XSA+IDApIHtcclxuXHRcdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRoaXMuZGlzYXBwZWFyX3RpbWVbaW5kZXhdKSxcclxuXHRcdFx0XHRcdGNjLmNhbGxGdW5jKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0YW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpKVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uRGlzYWJsZSgpIHtcclxuXHRcdHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cdH1cclxufVxyXG4iXX0=