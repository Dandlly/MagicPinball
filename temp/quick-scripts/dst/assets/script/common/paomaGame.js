
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/paomaGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXHBhb21hR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFFMUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQXFGQztRQWxGRyxtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUU5QixXQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLFVBQUksR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEIsVUFBSSxHQUFHO1lBQ0gsMEZBQW9CO1lBQ3BCLGdHQUFxQjtZQUNyQiwwR0FBcUI7U0FDeEIsQ0FBQTs7SUEwRUwsQ0FBQztJQXhFRyxvQkFBSSxHQUFKO1FBQ0ksSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksS0FBSyxHQUFHLGFBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEUsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtB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QUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBRTlILEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztRQUNiLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsc0NBQXNDO1FBQ3RDLDRFQUE0RTtRQUM1RSwyRUFBMkU7UUFDM0UsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixnQ0FBZ0M7UUFDaEMsZ0RBQWdEO1FBQ2hELDZDQUE2QztRQUU3Qyx1Q0FBdUM7UUFDdkMsMkVBQTJFO1FBQzNFLHlJQUF5STtRQUV6SSw2RUFBNkU7UUFDN0Usd0NBQXdDO1FBQ3hDLGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDaEIsNEJBQTRCO0lBQ2hDLENBQUM7SUFoRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDWTtJQUZiLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FvRnpCO0lBQUQsWUFBQztDQXBGRCxBQW9GQyxDQXBGa0MsRUFBRSxDQUFDLFNBQVMsR0FvRjlDO2tCQXBGb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhb21hIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0QW5ub3VuY2VOb2RlOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIG1vbmV5ID0gWzEsIDUsIDEwLCAyMCwgNTAsIDEwMF07XG4gICAgcmF0ZSA9IFsxNSwgMTUsIDcwXTtcbiAgICBsaXN0ID0gW1xuICAgICAgICBg5oGt5ZacQOaUtumbhuS6hjEwMOWFg+e6ouWMhe+8jOW5tuaIkOWKn+WFkeaNomAsXG4gICAgICAgIGDmga3llpxA5pS26ZuG5LqGMTAw5YWD6K+d6LS55Y2h77yM5bm25oiQ5Yqf5YWR5o2iYCxcbiAgICAgICAgYOaBreWWnEDovr7miJAm5YWD57qi5YyF5YWR5o2i5p2h5Lu277yM5bm25oiQ5Yqf5YWR5o2iYFxuICAgIF1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGxldCBuYW1lMSA9IHV0aWxzLmdldEVtYWlsKCk7XG4gICAgICAgIGxldCBuYW1lMiA9IHV0aWxzLmdldEVtYWlsKCk7XG4gICAgICAgIHRoaXMudEFubm91bmNlTm9kZVswXS55ID0gMDtcbiAgICAgICAgdGhpcy50QW5ub3VuY2VOb2RlWzFdLnkgPSAtNTc7XG4gICAgICAgIGxldCB0aXBzMSA9IHRoaXMubGlzdFt1dGlscy5nZXROb3JtYWxpdHlOdW1CeVJhbmRvbSh0aGlzLnJhdGUpXTtcbiAgICAgICAgdGlwczEgPSB0aXBzMS5yZXBsYWNlKCdAJywgbmFtZTEudG9TdHJpbmcoKSkucmVwbGFjZSgnJicsIHRoaXMubW9uZXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tb25leS5sZW5ndGgpXS50b1N0cmluZygpKTtcbiAgICAgICAgbGV0IHRpcHMyID0gdGhpcy5saXN0W3V0aWxzLmdldE5vcm1hbGl0eU51bUJ5UmFuZG9tKHRoaXMucmF0ZSldO1xuICAgICAgICB0aXBzMiA9IHRpcHMyLnJlcGxhY2UoJ0AnLCBuYW1lMi50b1N0cmluZygpKS5yZXBsYWNlKCcmJywgdGhpcy5tb25leVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vbmV5Lmxlbmd0aCldLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIHRoaXMudEFubm91bmNlTm9kZVswXS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpcHMxO1xuICAgICAgICB0aGlzLnRBbm5vdW5jZU5vZGVbMV0uZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aXBzMjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuc2hvd0hvcnNlTGFtcCgpO1xuICAgIH1cblxuICAgIC8v5pi+56S66LeR6ams54Gv55qE5pWI5p6cXG4gICAgc2hvd0hvcnNlTGFtcCgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBNYXRoLnJhbmRvbSgpICogMyArIDI7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC5kZWxheSh0aW1lKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudEFubm91bmNlTm9kZVswXSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKC42LCB7IHBvc2l0aW9uOiBjYy52MigtMjg0LCA1NykgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnRBbm5vdW5jZU5vZGVbMV0pXG4gICAgICAgICAgICAgICAgICAgIC50byguNiwgeyBwb3NpdGlvbjogY2MudjIoLTI4NCwgMCkgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGVsYXkoMC43KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLnRBbm5vdW5jZU5vZGUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBvYmouc2V0UG9zaXRpb24oY2MudjIoLTI4NCwgLTU3KSk7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB1dGlscy5nZXRFbWFpbCgpO1xuICAgICAgICAgICAgICAgIGxldCB0aXBzMSA9IHRoaXMubGlzdFt1dGlscy5nZXROb3JtYWxpdHlOdW1CeVJhbmRvbSh0aGlzLnJhdGUpXTtcbiAgICAgICAgICAgICAgICB0aXBzMSA9IHRpcHMxLnJlcGxhY2UoJ0AnLCBuYW1lLnRvU3RyaW5nKCkpLnJlcGxhY2UoJyYnLCB0aGlzLm1vbmV5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubW9uZXkubGVuZ3RoKV0udG9TdHJpbmcoKSlcblxuICAgICAgICAgICAgICAgIG9iai5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpcHMxO1xuICAgICAgICAgICAgICAgIHRoaXMudEFubm91bmNlTm9kZS5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SG9yc2VMYW1wKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIC8vIGxldCBzZXEgPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgLy8gICAgIGNjLmRlbGF5VGltZSh0aW1lKSxcbiAgICAgICAgLy8gICAgIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnRBbm5vdW5jZU5vZGVbMF0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjYsIGNjLnYyKC0yODQsIDU3KSkpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudEFubm91bmNlTm9kZVsxXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNiwgY2MudjIoLTI4NCwgMCkpKTtcbiAgICAgICAgLy8gICAgIH0sIHRoaXMpLFxuICAgICAgICAvLyAgICAgY2MuZGVsYXlUaW1lKDAuNyksXG4gICAgICAgIC8vICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIG9iaiA9IHRoaXMudEFubm91bmNlTm9kZS5zaGlmdCgpO1xuICAgICAgICAvLyAgICAgICAgIG9iai5zZXRQb3NpdGlvbihjYy52MigtMjg0LCAtNTcpKTtcblxuICAgICAgICAvLyAgICAgICAgIGxldCBuYW1lID0gdXRpbHMuZ2V0RW1haWwoKTtcbiAgICAgICAgLy8gICAgICAgICBsZXQgdGlwczEgPSB0aGlzLmxpc3RbdXRpbHMuZ2V0Tm9ybWFsaXR5TnVtQnlSYW5kb20odGhpcy5yYXRlKV07XG4gICAgICAgIC8vICAgICAgICAgdGlwczEgPSB0aXBzMS5yZXBsYWNlKCdAJywgbmFtZS50b1N0cmluZygpKS5yZXBsYWNlKCcmJywgdGhpcy5tb25leVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm1vbmV5Lmxlbmd0aCldLnRvU3RyaW5nKCkpXG5cbiAgICAgICAgLy8gICAgICAgICBvYmouZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aXBzMTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnRBbm5vdW5jZU5vZGUucHVzaChvYmopO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2hvd0hvcnNlTGFtcCgpO1xuICAgICAgICAvLyAgICAgfSwgdGhpcykpXG4gICAgICAgIC8vIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxKTtcbiAgICB9XG5cbn1cbiJdfQ==