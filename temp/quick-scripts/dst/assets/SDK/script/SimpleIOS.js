
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleIOS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ade2PUZqVOmasUpuPIf1jR', 'SimpleIOS');
// SDK/script/SimpleIOS.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleIOS = /** @class */ (function (_super) {
    __extends(SimpleIOS, _super);
    function SimpleIOS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleIOS_1 = SimpleIOS;
    SimpleIOS.prototype.initWithAdjust = function (adjustAppkey, debug) {
        jsb.reflection.callStaticMethod(SimpleIOS_1.bridgeName, "SDKInitWithAdjustKey:withDebug:", adjustAppkey, debug);
    };
    SimpleIOS.prototype.initWithAppsflyer = function (appsflyerkey, appleid, debug) {
        jsb.reflection.callStaticMethod(SimpleIOS_1.bridgeName, "SDKInitWithAppsflyerKey:withAppleid:withDebug:", appsflyerkey, appleid, debug);
    };
    SimpleIOS.prototype.getNetworkStatus = function () {
        return jsb.reflection.callStaticMethod(SimpleIOS_1.bridgeName, "getNetworkStatus");
    };
    var SimpleIOS_1;
    SimpleIOS.bridgeName = "SimpleBridge";
    SimpleIOS = SimpleIOS_1 = __decorate([
        ccclass
    ], SimpleIOS);
    return SimpleIOS;
}(SDK.SimpleInterface));
exports.default = SimpleIOS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZUlPUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyx1Q0FBd0M7QUFFbEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF1Qyw2QkFBbUI7SUFBMUQ7O0lBZ0JBLENBQUM7a0JBaEJvQixTQUFTO0lBSTFCLGtDQUFjLEdBQWQsVUFBZSxZQUFvQixFQUFFLEtBQWM7UUFDL0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFTLENBQUMsVUFBVSxFQUFFLGlDQUFpQyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUQscUNBQWlCLEdBQWpCLFVBQWtCLFlBQW9CLEVBQUUsT0FBZSxFQUFFLEtBQWM7UUFDbkUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFTLENBQUMsVUFBVSxFQUFFLGdEQUFnRCxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUksQ0FBQztJQUdELG9DQUFnQixHQUFoQjtRQUNJLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFTLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDckYsQ0FBQzs7SUFiTSxvQkFBVSxHQUFHLGNBQWMsQ0FBQztJQUZsQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZ0I3QjtJQUFELGdCQUFDO0NBaEJELEFBZ0JDLENBaEJzQyxHQUFHLENBQUMsZUFBZSxHQWdCekQ7a0JBaEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgKiBhcyBTREsgZnJvbSAnLi9TaW1wbGVJbnRlcmZhY2UnXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlSU9TIGV4dGVuZHMgU0RLLlNpbXBsZUludGVyZmFjZSB7XHJcblxyXG4gICAgc3RhdGljIGJyaWRnZU5hbWUgPSBcIlNpbXBsZUJyaWRnZVwiO1xyXG5cclxuICAgIGluaXRXaXRoQWRqdXN0KGFkanVzdEFwcGtleTogc3RyaW5nLCBkZWJ1ZzogYm9vbGVhbikge1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoU2ltcGxlSU9TLmJyaWRnZU5hbWUsIFwiU0RLSW5pdFdpdGhBZGp1c3RLZXk6d2l0aERlYnVnOlwiLCBhZGp1c3RBcHBrZXksIGRlYnVnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0V2l0aEFwcHNmbHllcihhcHBzZmx5ZXJrZXk6IHN0cmluZywgYXBwbGVpZDogc3RyaW5nLCBkZWJ1ZzogYm9vbGVhbikge1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoU2ltcGxlSU9TLmJyaWRnZU5hbWUsIFwiU0RLSW5pdFdpdGhBcHBzZmx5ZXJLZXk6d2l0aEFwcGxlaWQ6d2l0aERlYnVnOlwiLCBhcHBzZmx5ZXJrZXksIGFwcGxlaWQsIGRlYnVnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0TmV0d29ya1N0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChTaW1wbGVJT1MuYnJpZGdlTmFtZSwgXCJnZXROZXR3b3JrU3RhdHVzXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==