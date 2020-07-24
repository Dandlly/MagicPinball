
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FContrl/FLoadingCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRkNvbnRybFxcRkxvYWRpbmdDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBdUlDO1FBcklHLGVBQWU7UUFDZixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixXQUFLLEdBQWMsSUFBSSxDQUFDOztJQWtJNUIsQ0FBQztJQWpJRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLEdBQUc7WUFDUCxVQUFVLEVBQUUsd0NBQXdDO1lBQ3BELFFBQVEsRUFBRSw0Q0FBNEM7WUFDdEQsRUFBRSxFQUFFLHlCQUF5QjtZQUM3QixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLElBQUksRUFBQyxZQUFZO1NBQ3BCLENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksaUVBQWlFO0lBQ3JFLENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxHQUFHO1FBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xELENB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SW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4uL0ZNb2RlbC9GR2xvYmFsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkxvYWRpbmdDdHJsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vc29ja2V05piv5ZCm6L+e5o6l5oiQ5Yqf5LqGXHJcbiAgICBJU19MT0dJTlNVQyA9IGZhbHNlO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNfcHJvOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBpcF9yZWxlYXNlOiBcIndzOi8vNDcuMjU0Ljg3LjIzOjIwMjE5Lz9wZz1vdmVyc2Vhc19kXCIsXHJcbiAgICAgICAgICAgIGlwX2RlYnVnOiBcIndzczovL3Rlc3Qud3BzMTY4LmNvbToyMDIxMi8/cGc9b3ZlcnNlYXNfZFwiLFxyXG4gICAgICAgICAgICBwZzogXCJjb20ubGlnaHQub3ZlcnNlYXMuZGVtb1wiLFxyXG4gICAgICAgICAgICBpc0RlYnVnOiBmYWxzZSxcclxuICAgICAgICAgICAgdGVzdF9haWQ6IFwiMjIyMzIyMjYzM1wiLFxyXG4gICAgICAgICAgICBjb2RlOlwib3ZlcnNlYXNfZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEZTREsuaW5pdChkYXRhLCB0aGlzLmxvZ2luU3VjLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBGTmV0V29ya0N0cmwuZ2V0SW5zdGFuY2UoKS5Db25uZXRjdFNlcnZlcih0aGlzLnNvY2tldFN1Yyx0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNvY2tldFN1YygpIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIumTvuaOpeaIkOWKn+WSr1wiLCB0aGlzLklTX0xPR0lOU1VDKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpblN1Yyhtc2cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIueZu+W9leS/oeaBryAgXCIsIG1zZylcclxuICAgICAgICB0aGlzLklTX0xPR0lOU1VDID0gdHJ1ZTtcclxuICAgICAgICBGU0RLLmFkZENyZWRpdExpc3Rlbih0aGlzLmNyZWRpdExpc3RlbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlZGl0TGlzdGVuKG1zZykge1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwi6L+Z5Liq5pivY3JlZGl055uR5ZCsMVwiLCBtc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICgodGhpcy5zX3Byby5maWxsUmFuZ2UgPCAwLjggfHwgdGhpcy5JU19MT0dJTlNVQykgJiYgdGhpcy5zX3Byby5maWxsUmFuZ2UgPCAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc19wcm8uZmlsbFJhbmdlICs9IGR0ICogMC41O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zX3Byby5maWxsUmFuZ2UgPj0gMSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tCdXR0b24odGFyZ2V0KSB7XHJcbiAgICAgICAgc3dpdGNoICh0YXJnZXQudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlwX3JlbGVhc2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXBfZGVidWc6IFwid3NzOi8vdGVzdC53cHMxNjguY29tOjIwMjEyLz9wZz1vdmVyc2Vhc19kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGc6IFwiY29tLmxpZ2h0Lm92ZXJzZWFzLmRlbW9cIixcclxuICAgICAgICAgICAgICAgICAgICBpc0RlYnVnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RfYWlkOiBcIjIyMjMyNjIyMzNcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2RlOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9zX2ltZzpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBGU0RLLmluaXQoZGF0YSwgdGhpcy5sb2dpblN1YywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuc2hvd1R3b0NhcmQoMCx0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgIC8vIEZTREsuc2hvd1NpZ25UYXNrUGFnZSh0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICBGU0RLLnNob3dUcmFuc0xpc3QodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gRlNESy5zaG93VGFza1BhZ2UodGhpcy5ub2RlLCAxMDApXHJcbiAgICAgICAgICAgICAgICBGU0RLLnNob3dJbnZpdHlQYWdlKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgLy8gRlNESy5zaG93VG9Mb2FkKFwi5rWL6K+VTG9hZGluZ1wiLCA1KTtcclxuICAgICAgICAgICAgICAgIEZTREsuc2hvd0xlZnQodGhpcy5ub2RlLGZhbHNlLChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIEZMb2cubm9ybWFsKFwi6L+U5Zue5LqG5LuA5LmIICAgXCIsZGF0YSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI2XCI6XHJcbiAgICAgICAgICAgICAgICBGU0RLLmhpZGVUb0xvYWQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IEZTREsuZ2V0UmFuZG9tUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICBGTG9nLm5vcm1hbChkYXRhMilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiN1wiOlxyXG4gICAgICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoXCLmtYvor5VUSVBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjhcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuc2V0Q3JlZGl0KFwiY3JlZGl0XCIsIDEwLCBcInRlc3RcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjlcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuc2V0Q3JlZGl0KFwicHBcIiwgRkdsb2JhbC5yYW5kb21Gcm9tKDAuMSwgNSksIFwidGVzdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTBcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuc2V0Q3JlZGl0KFwiZ3BcIiwgRkdsb2JhbC5yYW5kb21Gcm9tKDAuMSwgNSksIFwidGVzdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTFcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuc2hvd01hclF1ZWUodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTJcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuc2hvd0dyYWRlKHRoaXMubm9kZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBGTG9nLm5vcm1hbChcIuivhOaYnyAgXCIsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTNcIjpcclxuICAgICAgICAgICAgICAgIEZTREsub3BlblZpZGVvKFwidGVzdFwiLCB0aGlzLnZpZGVvU3VjLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTRcIjpcclxuICAgICAgICAgICAgICAgIEZTREsub3BlbkJhbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxNVwiOlxyXG4gICAgICAgICAgICAgICAgRlNESy5jbG9zZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxNlwiOlxyXG4gICAgICAgICAgICAgICAgRlNESy5vcGVuSW50ZXJzKHRoaXMuaW50ZXJzU3VjLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiMTdcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuZ2V0VHJhbnNMaXN0KGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRkxvZy5ub3JtYWwoXCLnnIvnnIvov5Tlm57lkKcgIFwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2aWRlb1N1YygpIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIuWPkeWPjeWPjeWkjeWkjTExMTExXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyc1N1YygpIHtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIuWPkeWPjeWPjeWkjeWkjTIyMjIyXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=