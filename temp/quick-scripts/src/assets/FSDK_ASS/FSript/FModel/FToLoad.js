"use strict";
cc._RF.push(module, 'df649Ki7KRMeq9Z+aOVaNyR', 'FToLoad');
// FSDK_ASS/FSript/FModel/FToLoad.ts

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
var FToLoad = /** @class */ (function (_super) {
    __extends(FToLoad, _super);
    function FToLoad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dt = 0;
        _this.se = 0;
        _this.label_se = null;
        _this.label_msg = null;
        _this.mCircle = null;
        return _this;
    }
    FToLoad.prototype.onLoad = function () {
    };
    FToLoad.prototype.start = function () {
    };
    FToLoad.prototype.onEnable = function () {
    };
    FToLoad.prototype.setMsg = function (msg, time, showTime) {
        if (msg === void 0) { msg = 'Loading'; }
        if (time === void 0) { time = 0; }
        if (showTime === void 0) { showTime = false; }
        this.label_msg.string = msg;
        this.label_se.string = time + 'se';
        this.se = time;
        if (showTime) {
            if (this.se) {
                this.label_se.node.active = true;
            }
            else {
                this.label_se.node.active = false;
            }
        }
        else {
            this.label_se.node.active = false;
        }
    };
    FToLoad.prototype.update = function (dt) {
        this.mCircle.angle += 3;
        if (this.mCircle.angle >= 360) {
            this.mCircle.angle = 0;
        }
        this.dt += dt;
        if (this.dt >= 1) {
            this.dt = 0;
            if (this.se > 0) {
                this.se -= 1;
                this.label_se.string = this.se + 'se';
                if (this.se <= 0) {
                    this.se = 0;
                    this.label_se.node.active = false;
                    this.node.parent = null;
                }
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], FToLoad.prototype, "label_se", void 0);
    __decorate([
        property(cc.Label)
    ], FToLoad.prototype, "label_msg", void 0);
    __decorate([
        property(cc.Node)
    ], FToLoad.prototype, "mCircle", void 0);
    FToLoad = __decorate([
        ccclass
    ], FToLoad);
    return FToLoad;
}(cc.Component));
exports.default = FToLoad;

cc._RF.pop();