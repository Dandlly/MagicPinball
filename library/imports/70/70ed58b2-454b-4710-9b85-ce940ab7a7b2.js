"use strict";
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