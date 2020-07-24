"use strict";
cc._RF.push(module, 'cce7d7GIXRNdYHQKq/hNR1b', 'SimpleUtils');
// SDK/script/SimpleUtils.ts

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
var SimpleUtils = /** @class */ (function (_super) {
    __extends(SimpleUtils, _super);
    function SimpleUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleUtils_1 = SimpleUtils;
    SimpleUtils.getTimestamp = function () {
        return Math.round(new Date().getTime() / 1000);
    };
    SimpleUtils.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    SimpleUtils.setDebug = function (debug) {
        this.debug = debug;
    };
    SimpleUtils.log = function (a) {
        if (SimpleUtils_1.debug) {
            cc.log("simple:" + a);
        }
    };
    SimpleUtils.isEditor = function () {
        return !(cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID);
    };
    SimpleUtils.getDictOrDefault = function (dict, key, dv) {
        if (key in dict) {
            return dict[key];
        }
        else {
            return dv;
        }
    };
    var SimpleUtils_1;
    SimpleUtils.debug = true;
    SimpleUtils = SimpleUtils_1 = __decorate([
        ccclass
    ], SimpleUtils);
    return SimpleUtils;
}(cc.Component));
exports.default = SimpleUtils;

cc._RF.pop();