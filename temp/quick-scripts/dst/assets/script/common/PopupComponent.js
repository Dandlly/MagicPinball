
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/PopupComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c6b1SMpSpFd7eEYE8zKXIn', 'PopupComponent');
// script/common/PopupComponent.ts

"use strict";
/**
 * 弹窗组件
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Events_1 = require("./Events");
var EventConstants_1 = require("./EventConstants");
var Actions_1 = require("./Actions");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupComponent = /** @class */ (function (_super) {
    __extends(PopupComponent, _super);
    function PopupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeMask = null;
        _this.popups = [];
        _this.list = [];
        return _this;
    }
    PopupComponent.prototype.onLoad = function () {
        // 保存全局方法
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.SHOW_POPUP, this.show, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.HIDE_POPUP, this.hide, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.HIDE_ALL_POPUP, this.hideAll, this);
    };
    /**
     * 显示弹窗
     * @param {PopUpName} name 弹窗名
     * @param {() => void} cb 成功回调
     * @param {any[]} data 弹窗数据(数组类型)
     * @param {boolean} needMask 是否需要蒙层
     */
    PopupComponent.prototype.show = function (name, cb, data, needMask) {
        if (data === void 0) { data = null; }
        if (needMask === void 0) { needMask = true; }
        return __awaiter(this, void 0, Promise, function () {
            var node, comp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.list.some(function (nName) { return nName === name; }))
                            return [2 /*return*/];
                        return [4 /*yield*/, this.getPopUpNode(name)];
                    case 1:
                        node = _a.sent();
                        comp = node._components[0] // 私有属性
                        ;
                        if (comp && data) {
                            comp._data = data;
                        }
                        this.node.addChild(node);
                        Actions_1.actions.openPopup(node);
                        this.nodeMask.active = needMask;
                        this.list.push(name);
                        this.checkMaskzIndex();
                        // 执行回调
                        if (cb)
                            cb();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 隐藏弹窗
     * @param {() => void} cb 成功回调
     */
    PopupComponent.prototype.hide = function (cb) {
        if (!this.list.length)
            return;
        var name = this.list.pop();
        this.node.children.forEach(function (node) {
            if (node.name === name) {
                Actions_1.actions.closePopup(node, function () {
                    node.removeFromParent();
                    node.destroy();
                });
            }
        });
        this.checkMaskzIndex();
        // this.nodeMask.active = this.list.length >= 1;
        this.nodeMask.active = false;
        // 执行回调
        if (cb)
            cb();
    };
    /**
     * 隐藏所有弹窗
     * @param {() => void} cb 成功回调
     */
    PopupComponent.prototype.hideAll = function (cb) {
        var _this = this;
        if (!this.list.length)
            return;
        this.list = [];
        this.node.children.forEach(function (node) {
            if (_this.nodeMask.name === node.name)
                return;
            Actions_1.actions.closePopup(node, function () {
                node.removeFromParent();
                node.destroy();
            });
        });
        this.nodeMask.active = false;
        // 执行回调
        if (cb)
            cb();
    };
    /**
     * 获取弹窗节点
     */
    PopupComponent.prototype.getPopUpNode = function (name) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popups.find(function (node) { return node.name === name; })];
                    case 1: return [2 /*return*/, (_a.sent()) || this.createPopUpNode(name)];
                }
            });
        });
    };
    /**
     * 加载弹窗节点
     */
    PopupComponent.prototype.createPopUpNode = function (name) {
        var _this = this;
        Events_1.events.emit(EventConstants_1.GameEvents.SHOW_LOADING);
        return new Promise(function (resolve, reject) {
            cc.loader.loadRes("popupPerfab/" + name, cc.Prefab, function (err, res) {
                if (err) {
                    Events_1.events.emit(EventConstants_1.GameEvents.HIDE_LOADING);
                    reject(null);
                }
                var node = cc.instantiate(res);
                _this.popups.push(node);
                Events_1.events.emit(EventConstants_1.GameEvents.HIDE_LOADING);
                resolve(node);
            });
        });
    };
    /**
     * 刷新maskzIndex
     */
    PopupComponent.prototype.checkMaskzIndex = function () {
        var child = this.node.children;
        this.list.forEach(function (name, index) {
            child.find(function (node) { return node.name === name; }).zIndex = (index + 1) * 10;
        });
        child.find(function (node) { return node.name === "sprite_mask"; }).zIndex = (this.list.length) * 9;
    };
    __decorate([
        property(cc.Node)
    ], PopupComponent.prototype, "nodeMask", void 0);
    PopupComponent = __decorate([
        ccclass
    ], PopupComponent);
    return PopupComponent;
}(cc.Component));
exports.default = PopupComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXFBvcHVwQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0gsbUNBQWtDO0FBQ2xDLG1EQUE4QztBQUM5QyxxQ0FBb0M7QUFFOUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUR4RDtRQUFBLHFFQXVJQztRQW5JRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRWpCLFlBQU0sR0FBYyxFQUFFLENBQUM7UUFDdkIsVUFBSSxHQUFnQixFQUFFLENBQUM7O0lBZ0luQyxDQUFDO0lBOUhHLCtCQUFNLEdBQU47UUFDSSxTQUFTO1FBQ1QsZUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsMkJBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxlQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSwyQkFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGVBQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLDJCQUFVLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNXLDZCQUFJLEdBQWxCLFVBQW1CLElBQWUsRUFBRSxFQUFlLEVBQUUsSUFBZ0IsRUFBRSxRQUF3QjtRQUExQyxxQkFBQSxFQUFBLFdBQWdCO1FBQUUseUJBQUEs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SUFBSSxLQUFLLElBQUksRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUE7UUFFRixLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQTNCLENBQTJCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBbElEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFIUixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBc0lsQztJQUFELHFCQUFDO0NBdElELEFBc0lDLENBdEkyQyxFQUFFLENBQUMsU0FBUyxHQXNJdkQ7a0JBdElvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOW8ueeql+e7hOS7tlxyXG4gKiBAYXV0aG9yIHl4eDBcclxuICovXHJcblxyXG5pbXBvcnQgeyBQb3BVcE5hbWUgfSBmcm9tIFwiLi9Qb3B1cENvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50cyB9IGZyb20gXCIuL0V2ZW50Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tIFwiLi9BY3Rpb25zXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm9kZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcG9wdXBzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIHByaXZhdGUgbGlzdDogUG9wVXBOYW1lW10gPSBbXTtcclxuXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5L+d5a2Y5YWo5bGA5pa55rOVXHJcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMubmFtZSwgdGhpcy51dWlkLCBHYW1lRXZlbnRzLlNIT1dfUE9QVVAsIHRoaXMuc2hvdywgdGhpcyk7XHJcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMubmFtZSwgdGhpcy51dWlkLCBHYW1lRXZlbnRzLkhJREVfUE9QVVAsIHRoaXMuaGlkZSwgdGhpcyk7XHJcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMubmFtZSwgdGhpcy51dWlkLCBHYW1lRXZlbnRzLkhJREVfQUxMX1BPUFVQLCB0aGlzLmhpZGVBbGwsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65by556qXXHJcbiAgICAgKiBAcGFyYW0ge1BvcFVwTmFtZX0gbmFtZSDlvLnnqpflkI1cclxuICAgICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2Ig5oiQ5Yqf5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIOW8ueeql+aVsOaNrijmlbDnu4TnsbvlnospXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5lZWRNYXNrIOaYr+WQpumcgOimgeiSmeWxglxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHNob3cobmFtZTogUG9wVXBOYW1lLCBjYj86ICgpID0+IHZvaWQsIGRhdGE6IGFueSA9IG51bGwsIG5lZWRNYXNrOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3Quc29tZShuTmFtZSA9PiBuTmFtZSA9PT0gbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IGF3YWl0IHRoaXMuZ2V0UG9wVXBOb2RlKG5hbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wID0gbm9kZS5fY29tcG9uZW50c1swXSAvLyDnp4HmnInlsZ7mgKdcclxuICAgICAgICBpZiAoY29tcCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbXAuX2RhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIGFjdGlvbnMub3BlblBvcHVwKG5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZU1hc2suYWN0aXZlID0gbmVlZE1hc2s7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrTWFza3pJbmRleCgpO1xyXG5cclxuICAgICAgICAvLyDmiafooYzlm57osINcclxuICAgICAgICBpZiAoY2IpIGNiKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/lvLnnqpdcclxuICAgICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2Ig5oiQ5Yqf5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGlkZShjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMubGlzdC5wb3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5jbG9zZVBvcHVwKG5vZGUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrTWFza3pJbmRleCgpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm5vZGVNYXNrLmFjdGl2ZSA9IHRoaXMubGlzdC5sZW5ndGggPj0gMTtcclxuICAgICAgICB0aGlzLm5vZGVNYXNrLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyDmiafooYzlm57osINcclxuICAgICAgICBpZiAoY2IpIGNiKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/miYDmnInlvLnnqpdcclxuICAgICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2Ig5oiQ5Yqf5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGlkZUFsbChjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVNYXNrLm5hbWUgPT09IG5vZGUubmFtZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBhY3Rpb25zLmNsb3NlUG9wdXAobm9kZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm5vZGVNYXNrLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyDmiafooYzlm57osINcclxuICAgICAgICBpZiAoY2IpIGNiKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvLnnqpfoioLngrlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRQb3BVcE5vZGUobmFtZTogUG9wVXBOYW1lIHwgc3RyaW5nKTogUHJvbWlzZTxjYy5Ob2RlPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucG9wdXBzLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT09IG5hbWUpIHx8IHRoaXMuY3JlYXRlUG9wVXBOb2RlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295by556qX6IqC54K5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlUG9wVXBOb2RlKG5hbWU6IFBvcFVwTmFtZSB8IHN0cmluZyk6IFByb21pc2U8Y2MuTm9kZT4ge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuU0hPV19MT0FESU5HKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYHBvcHVwUGVyZmFiLyR7bmFtZX1gLCBjYy5QcmVmYWIsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5lbWl0KEdhbWVFdmVudHMuSElERV9MT0FESU5HKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5ISURFX0xPQURJTkcpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShub2RlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yi35pawbWFza3pJbmRleFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrTWFza3pJbmRleCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKG5hbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT09IG5hbWUpLnpJbmRleCA9IChpbmRleCArIDEpICogMTA7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2hpbGQuZmluZChub2RlID0+IG5vZGUubmFtZSA9PT0gXCJzcHJpdGVfbWFza1wiKS56SW5kZXggPSAodGhpcy5saXN0Lmxlbmd0aCkgKiA5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==