"use strict";
cc._RF.push(module, '8dceaAXeBtINb9fa0rBxp0J', 'FLoadingCtrl');
// FSDK_ASS/FSript/FContrl/FLoadingCtrl.ts

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
var FGlobal_1 = require("../FModel/FGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FLoadingCtrl = /** @class */ (function (_super) {
    __extends(FLoadingCtrl, _super);
    function FLoadingCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //socket是否连接成功了
        _this.IS_LOGINSUC = false;
        _this.s_pro = null;
        return _this;
    }
    FLoadingCtrl.prototype.onLoad = function () {
        var data = {
            ip_release: "ws://47.254.87.23:20219/?pg=overseas_d",
            ip_debug: "wss://test.wps168.com:20212/?pg=overseas_d",
            pg: "com.light.overseas.demo",
            isDebug: false,
            test_aid: "2223222633",
            code: "overseas_d"
        };
        FSDK.init(data, this.loginSuc, this);
    };
    FLoadingCtrl.prototype.start = function () {
        // FNetWorkCtrl.getInstance().ConnetctServer(this.socketSuc,this)
    };
    FLoadingCtrl.prototype.onEnable = function () {
    };
    FLoadingCtrl.prototype.socketSuc = function () {
        FLog.normal("链接成功咯", this.IS_LOGINSUC);
    };
    FLoadingCtrl.prototype.loginSuc = function (msg) {
        console.log("登录信息  ", msg);
        this.IS_LOGINSUC = true;
        FSDK.addCreditListen(this.creditListen, this);
    };
    FLoadingCtrl.prototype.creditListen = function (msg) {
        FLog.normal("这个是credit监听1", msg);
    };
    FLoadingCtrl.prototype.update = function (dt) {
        if ((this.s_pro.fillRange < 0.8 || this.IS_LOGINSUC) && this.s_pro.fillRange < 1) {
            this.s_pro.fillRange += dt * 0.5;
            if (this.s_pro.fillRange >= 1) {
            }
        }
    };
    FLoadingCtrl.prototype.clickButton = function (target) {
        switch (target.target.name) {
            case "1":
                var data = {
                    ip_release: "",
                    ip_debug: "wss://test.wps168.com:20212/?pg=overseas_d",
                    pg: "com.light.overseas.demo",
                    isDebug: true,
                    test_aid: "2223262233",
                    code: "",
                    tos_img: null
                };
                FSDK.init(data, this.loginSuc, this);
                break;
            case "2":
                FSDK.showTwoCard(0, this.node);
                break;
            case "3":
                // FSDK.showSignTaskPage(this.node)
                FSDK.showTransList(this.node);
                break;
            case "4":
                // FSDK.showTaskPage(this.node, 100)
                FSDK.showInvityPage(this.node);
                break;
            case "5":
                // FSDK.showToLoad("测试Loading", 5);
                FSDK.showLeft(this.node, false, function (data) {
                    FLog.normal("返回了什么   ", data);
                });
                break;
            case "6":
                FSDK.hideToLoad();
                var data2 = FSDK.getRandomReward();
                FLog.normal(data2);
                break;
            case "7":
                FSDK.showToast("测试TIP");
                break;
            case "8":
                FSDK.setCredit("credit", 10, "test");
                break;
            case "9":
                FSDK.setCredit("pp", FGlobal_1.FGlobal.randomFrom(0.1, 5), "test");
                break;
            case "10":
                FSDK.setCredit("gp", FGlobal_1.FGlobal.randomFrom(0.1, 5), "test");
                break;
            case "11":
                FSDK.showMarQuee(this.node);
                break;
            case "12":
                FSDK.showGrade(this.node, function (data) {
                    FLog.normal("评星  ", data);
                }, this);
                break;
            case "13":
                FSDK.openVideo("test", this.videoSuc, this);
                break;
            case "14":
                FSDK.openBanner();
                break;
            case "15":
                FSDK.closeBanner();
                break;
            case "16":
                FSDK.openInters(this.intersSuc, this);
                break;
            case "17":
                FSDK.getTransList(function (data) {
                    FLog.normal("看看返回吧  ", data);
                }, this);
                break;
        }
    };
    FLoadingCtrl.prototype.videoSuc = function () {
        FLog.normal("发反反复复11111");
    };
    FLoadingCtrl.prototype.intersSuc = function () {
        FLog.normal("发反反复复22222");
    };
    __decorate([
        property(cc.Sprite)
    ], FLoadingCtrl.prototype, "s_pro", void 0);
    FLoadingCtrl = __decorate([
        ccclass
    ], FLoadingCtrl);
    return FLoadingCtrl;
}(cc.Component));
exports.default = FLoadingCtrl;

cc._RF.pop();