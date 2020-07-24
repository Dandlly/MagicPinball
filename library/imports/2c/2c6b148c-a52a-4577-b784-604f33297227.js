"use strict";
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