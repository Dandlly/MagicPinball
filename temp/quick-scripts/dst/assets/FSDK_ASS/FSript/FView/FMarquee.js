
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FMarquee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZNYXJxdWVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQThCLDRCQUFZO0lBRDFDO1FBQUEscUVBNEVDO1FBekVHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBOEJ0QixZQUFNLEdBQUcsQ0FBQyxDQUFDOztJQXVDZixDQUFDO0lBbkVHLDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5SCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RGLElBQUksS0FBSyxHQUFHLGlCQUFPLENBQUMsU0FBUyxF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QUNqQixDQUFDO0lBRUQsTUFBTTtJQUNOLHlCQUFNLEdBQU47UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDckQsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkIsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU07SUFDTix5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDckIsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXhFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQU5iLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0EyRXBCO0lBQUQsZUFBQztDQTNFRCxBQTJFQyxDQTNFNkIsRUFBRSxDQUFDLFNBQVMsR0EyRXpDO0FBM0VZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkdsb2JhbCB9IGZyb20gXCIuLi9GTW9kZWwvRkdsb2JhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGTWFycXVlZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1NYWluTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1Nc2cxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbU1zZzI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tID0gRkdsb2JhbC5nZXRRdVJhbmRvbShGQ29uZmlnLkZTREtfQ09ORi5NQVJRVUVFX0NPTkYuZnJlc2hfdGltZVswXSwgRkNvbmZpZy5GU0RLX0NPTkYuTUFSUVVFRV9DT05GLmZyZXNoX3RpbWVbMV0pO1xyXG4gICAgICAgIHRoaXMubU1zZzEueSA9IDA7XHJcbiAgICAgICAgdGhpcy5tTXNnMi55ID0gLTUwO1xyXG4gICAgICAgIHRoaXMubU1zZzEuZ2V0Q2hpbGRCeU5hbWUoJ2VtYWlsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBGR2xvYmFsLmdldEVtYWlsKCk7XHJcbiAgICAgICAgdGhpcy5tTXNnMi5nZXRDaGlsZEJ5TmFtZSgnZW1haWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEZHbG9iYWwuZ2V0RW1haWwoKTtcclxuICAgICAgICBsZXQgZGF0YTEgPSBGR2xvYmFsLmdldE1hck1zZygpO1xyXG4gICAgICAgIGxldCBkYXRhMiA9IEZHbG9iYWwuZ2V0TWFyTXNnKCk7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoJ3NzYWRhc2Rhc2QgICcsZGF0YTEpXHJcblxyXG4gICAgICAgIHRoaXMubU1zZzEuZ2V0Q2hpbGRCeU5hbWUoJ21zZ05vZGUnKS5nZXRDaGlsZEJ5TmFtZSgndHlwZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YTEuZGVzYztcclxuICAgICAgICB0aGlzLm1Nc2cxLmdldENoaWxkQnlOYW1lKCdtc2dOb2RlJykuZ2V0Q2hpbGRCeU5hbWUoJ3R5cGUnKS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoZGF0YTEuY29sb3IpXHJcbiAgICAgICAgdGhpcy5tTXNnMi5nZXRDaGlsZEJ5TmFtZSgnbXNnTm9kZScpLmdldENoaWxkQnlOYW1lKCd0eXBlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhMi5kZXNjO1xyXG4gICAgICAgIHRoaXMubU1zZzIuZ2V0Q2hpbGRCeU5hbWUoJ21zZ05vZGUnKS5nZXRDaGlsZEJ5TmFtZSgndHlwZScpLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChkYXRhMi5jb2xvcilcclxuICAgICAgICB0aGlzLm1Nc2cxLmdldENoaWxkQnlOYW1lKCdtc2dOb2RlJykuZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBGQ29uZmlnLkZTREtfQ09ORi53b3JkLnRpcDU7XHJcbiAgICAgICAgdGhpcy5tTXNnMi5nZXRDaGlsZEJ5TmFtZSgnbXNnTm9kZScpLmdldENoaWxkQnlOYW1lKCdsYWJlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gRkNvbmZpZy5GU0RLX0NPTkYud29yZC50aXA1O1xyXG4gICAgICAgIHRoaXMubU1zZzEuZ2V0Q2hpbGRCeU5hbWUoJ21zZ05vZGUnKS5nZXRDaGlsZEJ5TmFtZSgnbnVtJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhMS5udW07XHJcbiAgICAgICAgdGhpcy5tTXNnMi5nZXRDaGlsZEJ5TmFtZSgnbXNnTm9kZScpLmdldENoaWxkQnlOYW1lKCdudW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEyLm51bTtcclxuICAgICAgICB0aGlzLm1vdmVVcCh0aGlzLm1Nc2cxKTtcclxuICAgICAgICB0aGlzLm1vdmVVcCh0aGlzLm1Nc2cyKTtcclxuICAgICAgICBGTG9nLm5vcm1hbChcIui/m+adpeS6hlwiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm1Nc2cyLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5tTXNnMS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbSA9IDA7XHJcbiAgICAvL+W+gOS4iumjmFxyXG4gICAgbW92ZVVwKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAuZGVsYXkodGhpcy5yYW5kb20pXHJcbiAgICAgICAgICAgIC5ieSgxLCB7IHk6IDUwIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnkgPT0gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSAtNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnZW1haWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEZHbG9iYWwuZ2V0RW1haWwoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEZHbG9iYWwuZ2V0TWFyTXNnKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbXNnTm9kZScpLmdldENoaWxkQnlOYW1lKCd0eXBlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLmRlc2M7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbXNnTm9kZScpLmdldENoaWxkQnlOYW1lKCd0eXBlJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKGRhdGEuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21zZ05vZGUnKS5nZXRDaGlsZEJ5TmFtZSgnbnVtJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLm51bTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVVcChub2RlKTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT0gJ21zZzInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5kb20gPSBGR2xvYmFsLmdldFF1UmFuZG9tKEZDb25maWcuRlNES19DT05GLk1BUlFVRUVfQ09ORi5mcmVzaF90aW1lWzBdLCBGQ29uZmlnLkZTREtfQ09ORi5NQVJRVUVFX0NPTkYuZnJlc2hfdGltZVsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/muJDlj5jlsZXnpLpcclxuICAgIHNob3dJbigpIHtcclxuICAgICAgICBsZXQgbnVtID0gdGhpcy5tTWFpbk5vZGUuZ2V0TnVtYmVyT2ZSdW5uaW5nQWN0aW9ucygpO1xyXG4gICAgICAgIGlmIChudW0gPiAwKSByZXR1cm47XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tTWFpbk5vZGUpXHJcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a4kOWPmOmakOiXj1xyXG4gICAgaGlkZUluKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubU1haW5Ob2RlKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==