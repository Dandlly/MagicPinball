"use strict";
cc._RF.push(module, 'ec3dckrnbFHRZMnSmBKwlsm', 'FMarquee');
// FSDK_ASS/FSript/FView/FMarquee.ts

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
var FMarquee = /** @class */ (function (_super) {
    __extends(FMarquee, _super);
    function FMarquee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mMainNode = null;
        _this.mMsg1 = null;
        _this.mMsg2 = null;
        _this.random = 0;
        return _this;
    }
    FMarquee.prototype.onEnable = function () {
        this.random = FGlobal_1.FGlobal.getQuRandom(FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[0], FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[1]);
        this.mMsg1.y = 0;
        this.mMsg2.y = -50;
        this.mMsg1.getChildByName('email').getComponent(cc.Label).string = FGlobal_1.FGlobal.getEmail();
        this.mMsg2.getChildByName('email').getComponent(cc.Label).string = FGlobal_1.FGlobal.getEmail();
        var data1 = FGlobal_1.FGlobal.getMarMsg();
        var data2 = FGlobal_1.FGlobal.getMarMsg();
        FLog.normal('ssadasdasd  ', data1);
        this.mMsg1.getChildByName('msgNode').getChildByName('type').getComponent(cc.Label).string = data1.desc;
        this.mMsg1.getChildByName('msgNode').getChildByName('type').color = new cc.Color().fromHEX(data1.color);
        this.mMsg2.getChildByName('msgNode').getChildByName('type').getComponent(cc.Label).string = data2.desc;
        this.mMsg2.getChildByName('msgNode').getChildByName('type').color = new cc.Color().fromHEX(data2.color);
        this.mMsg1.getChildByName('msgNode').getChildByName('label').getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip5;
        this.mMsg2.getChildByName('msgNode').getChildByName('label').getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip5;
        this.mMsg1.getChildByName('msgNode').getChildByName('num').getComponent(cc.Label).string = data1.num;
        this.mMsg2.getChildByName('msgNode').getChildByName('num').getComponent(cc.Label).string = data2.num;
        this.moveUp(this.mMsg1);
        this.moveUp(this.mMsg2);
        FLog.normal("进来了");
    };
    FMarquee.prototype.onDisable = function () {
        this.mMsg2.stopAllActions();
        this.mMsg1.stopAllActions();
    };
    //往上飘
    FMarquee.prototype.moveUp = function (node) {
        cc.tween(node)
            .delay(this.random)
            .by(1, { y: 50 })
            .call(function () {
            if (node.y == 50) {
                node.y = -50;
                node.getChildByName('email').getComponent(cc.Label).string = FGlobal_1.FGlobal.getEmail();
                var data = FGlobal_1.FGlobal.getMarMsg();
                node.getChildByName('msgNode').getChildByName('type').getComponent(cc.Label).string = data.desc;
                node.getChildByName('msgNode').getChildByName('type').color = new cc.Color().fromHEX(data.color);
                node.getChildByName('msgNode').getChildByName('num').getComponent(cc.Label).string = data.num;
            }
            this.moveUp(node);
            if (node.name == 'msg2') {
                this.random = FGlobal_1.FGlobal.getQuRandom(FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[0], FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[1]);
            }
        }.bind(this))
            .start();
    };
    //渐变展示
    FMarquee.prototype.showIn = function () {
        var num = this.mMainNode.getNumberOfRunningActions();
        if (num > 0)
            return;
        cc.tween(this.mMainNode)
            .to(1, { opacity: 255 })
            .start();
    };
    //渐变隐藏
    FMarquee.prototype.hideIn = function () {
        cc.tween(this.mMainNode)
            .to(1, { opacity: 0 })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], FMarquee.prototype, "mMainNode", void 0);
    __decorate([
        property(cc.Node)
    ], FMarquee.prototype, "mMsg1", void 0);
    __decorate([
        property(cc.Node)
    ], FMarquee.prototype, "mMsg2", void 0);
    FMarquee = __decorate([
        ccclass
    ], FMarquee);
    return FMarquee;
}(cc.Component));
exports.FMarquee = FMarquee;

cc._RF.pop();