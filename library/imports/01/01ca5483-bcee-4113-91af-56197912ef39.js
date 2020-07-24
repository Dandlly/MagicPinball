"use strict";
cc._RF.push(module, '01ca5SDvO5BE5GvVhl5Eu85', 'SimpleEditor');
// SDK/script/SimpleEditor.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var SDK = require("./SimpleInterface");
var SimpleCallback_1 = require("./SimpleCallback");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleEditor = /** @class */ (function (_super) {
    __extends(SimpleEditor, _super);
    function SimpleEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleEditor.prototype.initWithAdjust = function (adjustAppkey, debug) {
        this.init();
    };
    SimpleEditor.prototype.initWithAppsflyer = function (appsflyerkey, appleid, debug) {
        this.init();
    };
    SimpleEditor.prototype.init = function () {
        var a = {
            package: "com.a.b",
            appVersion: "15",
            deviceId: "test deviceid",
            idfa: "idfa_str",
            android_id: "android_id_str",
            idfv: "idfv_str",
            band: "band_str",
            model: "model_str",
            deviceName: "device_str",
            systemVersion: "systemversion",
            network: 0
        };
        var j = JSON.stringify(a);
        SimpleCallback_1.default.instance().sdkInitSuccess(j);
        //editor 直接给出归因回调
        var e = {
            network: "Organic",
            campaign: "",
            adgroup: "",
            createive: ""
        };
        var jj = JSON.stringify(e);
        SimpleCallback_1.default.instance().getAttributionInfo(jj);
    };
    SimpleEditor.prototype.getNetworkStatus = function () {
        return 0;
    };
    SimpleEditor = __decorate([
        ccclass
    ], SimpleEditor);
    return SimpleEditor;
}(SDK.SimpleInterface));
exports.default = SimpleEditor;

cc._RF.pop();