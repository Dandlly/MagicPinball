"use strict";
cc._RF.push(module, 'f905b0e1z9A+41ekCpu57EQ', 'paomaGame');
// script/common/paomaGame.ts

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
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var paoma = /** @class */ (function (_super) {
    __extends(paoma, _super);
    function paoma() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tAnnounceNode = [];
        _this.money = [1, 5, 10, 20, 50, 100];
        _this.rate = [15, 15, 70];
        _this.list = [
            "\u606D\u559C@\u6536\u96C6\u4E86100\u5143\u7EA2\u5305\uFF0C\u5E76\u6210\u529F\u5151\u6362",
            "\u606D\u559C@\u6536\u96C6\u4E86100\u5143\u8BDD\u8D39\u5361\uFF0C\u5E76\u6210\u529F\u5151\u6362",
            "\u606D\u559C@\u8FBE\u6210&\u5143\u7EA2\u5305\u5151\u6362\u6761\u4EF6\uFF0C\u5E76\u6210\u529F\u5151\u6362"
        ];
        return _this;
    }
    paoma.prototype.init = function () {
        var name1 = Utils_1.utils.getEmail();
        var name2 = Utils_1.utils.getEmail();
        this.tAnnounceNode[0].y = 0;
        this.tAnnounceNode[1].y = -57;
        var tips1 = this.list[Utils_1.utils.getNormalityNumByRandom(this.rate)];
        tips1 = tips1.replace('@', name1.toString()).replace('&', this.money[Math.floor(Math.random() * this.money.length)].toString());
        var tips2 = this.list[Utils_1.utils.getNormalityNumByRandom(this.rate)];
        tips2 = tips2.replace('@', name2.toString()).replace('&', this.money[Math.floor(Math.random() * this.money.length)].toString());
        this.tAnnounceNode[0].getChildByName('label').getComponent(cc.Label).string = tips1;
        this.tAnnounceNode[1].getChildByName('label').getComponent(cc.Label).string = tips2;
    };
    paoma.prototype.start = function () {
    };
    paoma.prototype.onEnable = function () {
        this.node.stopAllActions();
        this.init();
        this.showHorseLamp();
    };
    //显示跑马灯的效果
    paoma.prototype.showHorseLamp = function () {
        var _this = this;
        var time = Math.random() * 3 + 2;
        cc.tween(this.node)
            .delay(time)
            .call(function () {
            cc.tween(_this.tAnnounceNode[0])
                .to(.6, { position: cc.v2(-284, 57) })
                .start();
            cc.tween(_this.tAnnounceNode[1])
                .to(.6, { position: cc.v2(-284, 0) })
                .start();
        })
            .delay(0.7)
            .call(function () {
            var obj = _this.tAnnounceNode.shift();
            obj.setPosition(cc.v2(-284, -57));
            var name = Utils_1.utils.getEmail();
            var tips1 = _this.list[Utils_1.utils.getNormalityNumByRandom(_this.rate)];
            tips1 = tips1.replace('@', name.toString()).replace('&', _this.money[Math.floor(Math.random() * _this.money.length)].toString());
            obj.getChildByName('label').getComponent(cc.Label).string = tips1;
            _this.tAnnounceNode.push(obj);
            _this.showHorseLamp();
        })
            .start();
        // let seq = cc.sequence(
        //     cc.delayTime(time),
        //     cc.callFunc(function (target) {
        //         this.tAnnounceNode[0].runAction(cc.moveTo(0.6, cc.v2(-284, 57)));
        //         this.tAnnounceNode[1].runAction(cc.moveTo(0.6, cc.v2(-284, 0)));
        //     }, this),
        //     cc.delayTime(0.7),
        //     cc.callFunc(function () {
        //         var obj = this.tAnnounceNode.shift();
        //         obj.setPosition(cc.v2(-284, -57));
        //         let name = utils.getEmail();
        //         let tips1 = this.list[utils.getNormalityNumByRandom(this.rate)];
        //         tips1 = tips1.replace('@', name.toString()).replace('&', this.money[Math.floor(Math.random() * this.money.length)].toString())
        //         obj.getChildByName('label').getComponent(cc.Label).string = tips1;
        //         this.tAnnounceNode.push(obj);
        //         this.showHorseLamp();
        //     }, this))
        // this.node.runAction(seq);
    };
    __decorate([
        property(cc.Node)
    ], paoma.prototype, "tAnnounceNode", void 0);
    paoma = __decorate([
        ccclass
    ], paoma);
    return paoma;
}(cc.Component));
exports.default = paoma;

cc._RF.pop();