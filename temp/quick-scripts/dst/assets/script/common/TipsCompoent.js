
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/TipsCompoent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXFRpcHNDb21wb2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFFbEMsbURBQThDO0FBRTlDOzs7R0FHRztBQUVHLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFEdkQ7UUFBQSxxRUFvREM7UUFoREcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWEsSUFBSSxDQUFDOztJQTZDL0IsQ0FBQztJQTFDRyw4QkFBTSxHQUFOO1FBQ0ksVUFBVTtRQUNWLHlDQUF5QztRQUN6QyxTQUFTO1FBQ1QsZUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsMkJBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssNEJBQUksR0FBWixVQUFhLE9BQWU7UUFBNUIsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLEtBQUssQ0FDSixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMxQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNqQixFQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2YsRUFBRSxDQUFDLEtBQUssQ0FDSixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUMzQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUNsQixFQUNELEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQ0wsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVPLDZCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1E7SUFOVixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBbURqQztJQUFELG9CQUFDO0NBbkRELEFBbURDLENBbkQwQyxFQUFFLENBQUMsU0FBUyxHQW1EdEQ7a0JBbkRvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBHYW1lRXZlbnRzIH0gZnJvbSBcIi4vRXZlbnRDb25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiDmj5DnpLrmoYbnu4Tku7ZcclxuICogQGF1dGhvciB5eHgwXHJcbiAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHNDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm9kZVRpcHM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsVGlwczogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5re75Yqg5Li65YWo5bGA6IqC54K5XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICAvLyDkv53lrZjlhajlsYDmlrnms5VcclxuICAgICAgICBldmVudHMub24odGhpcy5uYW1lLCB0aGlzLnV1aWQsIEdhbWVFdmVudHMuU0hPV19USVBTLCB0aGlzLnNob3csIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65o+Q56S65qGGXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCDmlofmnKzlhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzaG93KGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZVRpcHMuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGVUaXBzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sYWJlbFRpcHMuc3RyaW5nID0gY29udGVudDtcclxuICAgICAgICB0aGlzLm5vZGVUaXBzLnkgPSAtNTA7XHJcbiAgICAgICAgdGhpcy5ub2RlVGlwcy5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlVGlwcy5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKC4zLCBjYy52MigwLCAwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZUluKC4xNSksXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxyXG4gICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKC4zLCBjYy52MigwLCA1MCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoLjE1KSxcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZVRpcHMuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGVUaXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZVRpcHMueSA9IC01MDtcclxuICAgICAgICB0aGlzLmxhYmVsVGlwcy5zdHJpbmcgPSAnJztcclxuICAgIH1cclxufSJdfQ==