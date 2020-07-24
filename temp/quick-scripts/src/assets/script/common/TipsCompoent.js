"use strict";
cc._RF.push(module, '73753CnXFZK0oVgKJHnTj8q', 'TipsCompoent');
// script/common/TipsCompoent.ts

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
var Events_1 = require("./Events");
var EventConstants_1 = require("./EventConstants");
/**
 * 提示框组件
 * @author yxx0
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipsComponent = /** @class */ (function (_super) {
    __extends(TipsComponent, _super);
    function TipsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeTips = null;
        _this.labelTips = null;
        return _this;
    }
    TipsComponent.prototype.onLoad = function () {
        // 添加为全局节点
        // cc.game.addPersistRootNode(this.node);
        // 保存全局方法
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.SHOW_TIPS, this.show, this);
    };
    /**
     * 显示提示框
     * @param {string} content 文本内容
     */
    TipsComponent.prototype.show = function (content) {
        var _this = this;
        this.nodeTips.stopAllActions();
        this.nodeTips.active = true;
        this.labelTips.string = content;
        this.nodeTips.y = -50;
        this.nodeTips.opacity = 0;
        this.nodeTips.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, cc.v2(0, 0)), cc.fadeIn(.15)), cc.delayTime(1), cc.spawn(cc.moveTo(.3, cc.v2(0, 50)), cc.fadeOut(.15)), cc.callFunc(function () {
            _this.clear();
        })));
    };
    TipsComponent.prototype.clear = function () {
        this.nodeTips.stopAllActions();
        this.nodeTips.active = false;
        this.nodeTips.y = -50;
        this.labelTips.string = '';
    };
    __decorate([
        property(cc.Node)
    ], TipsComponent.prototype, "nodeTips", void 0);
    __decorate([
        property(cc.Label)
    ], TipsComponent.prototype, "labelTips", void 0);
    TipsComponent = __decorate([
        ccclass
    ], TipsComponent);
    return TipsComponent;
}(cc.Component));
exports.default = TipsComponent;

cc._RF.pop();