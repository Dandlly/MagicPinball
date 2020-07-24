
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/IPXWidgetComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXElQWFdpZGdldENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUQ1RDtRQUFBLHFFQTJEQztRQXZEVSxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbEIsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUF5Q3JDLENBQUM7SUF2Q2EsbUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDTyw4Q0FBaUIsR0FBM0I7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFFN0YsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDekI7U0FDSjthQUFNO1lBQ0gsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDekI7U0FDSjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLDJDQUFjLEdBQXRCO1FBQ0ksSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDakUsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNZO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUM7b0RBQ3pDO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUM7cURBQ3hDO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUM7bURBQzFDO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUM7c0RBQ3ZDO0lBZlQsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0EwRHRDO0lBQUQseUJBQUM7Q0ExREQsQUEwREMsQ0ExRCtDLEVBQUUsQ0FBQyxTQUFTLEdBMEQzRDtrQkExRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJUFhXaWRnZXTpgILphY3lmahcclxuICog6YCC55So5LqO6Z2eMTY6OeWxj+W5lei0tOi+uVVJXHJcbiAqIEBhdXRob3IgeXh4MFxyXG4gKi9cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUFhXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgcHVibGljIGlzUG9ydGFpdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwi6ZyA6KaB5Yu+6YCJ5a+55bqUd2lkZ2V057uE5Lu25a+56b2Q55qE5pa55ZCR5pa55Y+v55Sf5pWIXCIgfSlcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCB0b29sdGlwOiBcIumcgOimgeWLvumAieWvueW6lHdpZGdldOe7hOS7tuWvuem9kOeahOaWueWQkeaWueWPr+eUn+aViFwiIH0pXHJcbiAgICBwdWJsaWMgcmlnaHQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwi6ZyA6KaB5Yu+6YCJ5a+55bqUd2lkZ2V057uE5Lu25a+56b2Q55qE5pa55ZCR5pa55Y+v55Sf5pWIXCIgfSlcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHRvb2x0aXA6IFwi6ZyA6KaB5Yu+6YCJ5a+55bqUd2lkZ2V057uE5Lu25a+56b2Q55qE5pa55ZCR5pa55Y+v55Sf5pWIXCIgfSlcclxuICAgIHB1YmxpYyBib3R0b206IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB3aWRnZXQ6IGNjLldpZGdldCA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndpZGdldCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja1dpZGdldFN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+ld2lkZ2V054q25oCBXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjaGVja1dpZGdldFN0YXR1cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMud2lkZ2V0KSByZXR1cm4gY29uc29sZS5lcnJvcign6IqC54K5OicsIHRoaXMubm9kZS5uYW1lLCAnV2lkZ2V0Q29tcG9uZW50IOacque7keWumndpZGdldOe7hOS7ticpO1xyXG5cclxuICAgICAgICBjb25zdCBwb3MgPSBjYy53aW5TaXplO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1BvcnRhaXQpIHtcclxuICAgICAgICAgICAgLy8g5bGP5bmV5q+U5LiN5Li6MTY6OSAo56uW5bGPKVxyXG4gICAgICAgICAgICBpZiAoIShNYXRoLmNlaWwocG9zLmhlaWdodCAqIDkgLyAxNikgPiBwb3Mud2lkdGggLSAyICYmIE1hdGguY2VpbChwb3MuaGVpZ2h0ICogOSAvIDE2KSA8IHBvcy53aWR0aCArIDIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFdpZGdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlsY/luZXmr5TkuI3kuLoxNjo5ICjmqKrlsY8pXHJcbiAgICAgICAgICAgIGlmICghKE1hdGguY2VpbChwb3Mud2lkdGggKiA5IC8gMTYpID4gcG9zLmhlaWdodCAtIDIgJiYgTWF0aC5jZWlsKHBvcy53aWR0aCAqIDkgLyAxNikgPCBwb3MuaGVpZ2h0ICsgMikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0V2lkZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rndpZGdldOaVsOWAvFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldFdpZGdldFZhbHVlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoIC8gY2Mud2luU2l6ZS5oZWlnaHQgPD0gMC41NjI1KSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wICs9IDY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy53aWRnZXQuaXNBbGlnbkJvdHRvbSkgdGhpcy53aWRnZXQuYm90dG9tID0gdGhpcy5ib3R0b207XHJcbiAgICAgICAgaWYgKHRoaXMud2lkZ2V0LmlzQWxpZ25Ub3ApIHRoaXMud2lkZ2V0LnRvcCA9IHRoaXMudG9wO1xyXG4gICAgICAgIGlmICh0aGlzLndpZGdldC5pc0FsaWduTGVmdCkgdGhpcy53aWRnZXQubGVmdCA9IHRoaXMubGVmdDtcclxuICAgICAgICBpZiAodGhpcy53aWRnZXQuaXNBbGlnblJpZ2h0KSB0aGlzLndpZGdldC5yaWdodCA9IHRoaXMucmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuIl19