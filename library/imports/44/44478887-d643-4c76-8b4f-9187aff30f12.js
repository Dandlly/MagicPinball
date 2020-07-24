"use strict";
cc._RF.push(module, '44478iH1kNMdotPkYev8w8S', 'IPXWidgetComponent');
// script/common/IPXWidgetComponent.ts

"use strict";
/**
 * IPXWidget适配器
 * 适用于非16:9屏幕贴边UI
 * @author yxx0
 */
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
var IPXWidgetComponent = /** @class */ (function (_super) {
    __extends(IPXWidgetComponent, _super);
    function IPXWidgetComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPortait = true;
        _this.left = 0;
        _this.right = 0;
        _this.top = 0;
        _this.bottom = 0;
        _this.widget = null;
        return _this;
    }
    IPXWidgetComponent.prototype.onLoad = function () {
        this.widget = this.node.getComponent(cc.Widget);
        this.checkWidgetStatus();
    };
    /**
     * 检查widget状态
     */
    IPXWidgetComponent.prototype.checkWidgetStatus = function () {
        if (!this.widget)
            return console.error('节点:', this.node.name, 'WidgetComponent 未绑定widget组件');
        var pos = cc.winSize;
        if (this.isPortait) {
            // 屏幕比不为16:9 (竖屏)
            if (!(Math.ceil(pos.height * 9 / 16) > pos.width - 2 && Math.ceil(pos.height * 9 / 16) < pos.width + 2)) {
                this.setWidgetValue();
            }
        }
        else {
            // 屏幕比不为16:9 (横屏)
            if (!(Math.ceil(pos.width * 9 / 16) > pos.height - 2 && Math.ceil(pos.width * 9 / 16) < pos.height + 2)) {
                this.setWidgetValue();
            }
        }
    };
    /**
     * 设置widget数值
     */
    IPXWidgetComponent.prototype.setWidgetValue = function () {
        if (cc.winSize.width / cc.winSize.height <= 0.5625) {
            this.top += 65;
        }
        if (this.widget.isAlignBottom)
            this.widget.bottom = this.bottom;
        if (this.widget.isAlignTop)
            this.widget.top = this.top;
        if (this.widget.isAlignLeft)
            this.widget.left = this.left;
        if (this.widget.isAlignRight)
            this.widget.right = this.right;
    };
    __decorate([
        property(cc.Boolean)
    ], IPXWidgetComponent.prototype, "isPortait", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    ], IPXWidgetComponent.prototype, "left", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    ], IPXWidgetComponent.prototype, "right", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    ], IPXWidgetComponent.prototype, "top", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    ], IPXWidgetComponent.prototype, "bottom", void 0);
    IPXWidgetComponent = __decorate([
        ccclass
    ], IPXWidgetComponent);
    return IPXWidgetComponent;
}(cc.Component));
exports.default = IPXWidgetComponent;

cc._RF.pop();