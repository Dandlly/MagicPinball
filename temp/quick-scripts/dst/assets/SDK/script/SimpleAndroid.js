
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleAndroid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47353arnNZK6K04ILSYXBBG', 'SimpleAndroid');
// SDK/script/SimpleAndroid.ts

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
var SDK = require("./SimpleInterface");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleAndroid = /** @class */ (function (_super) {
    __extends(SimpleAndroid, _super);
    function SimpleAndroid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleAndroid.prototype.initWithAdjust = function (adjustAppkey, debug) {
        jsb.reflection.callStaticMethod("com/bepic/simpleafsdk/SimpleAJSDK", "initWithAdjust", "(Ljava/lang/String;Z)V", adjustAppkey, debug);
    };
    SimpleAndroid.prototype.initWithAppsflyer = function (appsflyerkey, appleid, debug) {
        jsb.reflection.callStaticMethod("com/bepic/simpleafsdk/SimpleAFSDK", "initWithAppsflyer", "(Ljava/lang/String;Z)V", appsflyerkey, debug);
    };
    SimpleAndroid.prototype.getNetworkStatus = function () {
        return jsb.reflection.callStaticMethod("com/bepic/simplesdk/SimpleSDKBase", "getNetworkStatus", "()I");
    };
    SimpleAndroid = __decorate([
        ccclass
    ], SimpleAndroid);
    return SimpleAndroid;
}(SDK.SimpleInterface));
exports.default = SimpleAndroid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZUFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXdDO0FBRWxDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMkMsaUNBQW1CO0lBQTlEOztJQWFBLENBQUM7SUFYRyxzQ0FBYyxHQUFkLFVBQWUsWUFBb0IsRUFBRSxLQUFjO1FBQy9DLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsbUNBQW1DLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFJLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsWUFBb0IsRUFBRSxPQUFlLEVBQUUsS0FBYztRQUNuRSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLG1DQUFtQyxFQUFFLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3SSxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0ksT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLG1DQUFtQyxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFaZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWFqQztJQUFELG9CQUFDO0NBYkQsQUFhQyxDQWIwQyxHQUFHLENBQUMsZUFBZSxHQWE3RDtrQkFib0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNESyBmcm9tICcuL1NpbXBsZUludGVyZmFjZSdcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVBbmRyb2lkIGV4dGVuZHMgU0RLLlNpbXBsZUludGVyZmFjZSB7XHJcblxyXG4gICAgaW5pdFdpdGhBZGp1c3QoYWRqdXN0QXBwa2V5OiBzdHJpbmcsIGRlYnVnOiBib29sZWFuKSB7XHJcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS9iZXBpYy9zaW1wbGVhZnNkay9TaW1wbGVBSlNES1wiLCBcImluaXRXaXRoQWRqdXN0XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO1opVlwiLCBhZGp1c3RBcHBrZXksIGRlYnVnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0V2l0aEFwcHNmbHllcihhcHBzZmx5ZXJrZXk6IHN0cmluZywgYXBwbGVpZDogc3RyaW5nLCBkZWJ1ZzogYm9vbGVhbikge1xyXG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vYmVwaWMvc2ltcGxlYWZzZGsvU2ltcGxlQUZTREtcIiwgXCJpbml0V2l0aEFwcHNmbHllclwiLCBcIihMamF2YS9sYW5nL1N0cmluZztaKVZcIiwgYXBwc2ZseWVya2V5LCBkZWJ1Zyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV0d29ya1N0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS9iZXBpYy9zaW1wbGVzZGsvU2ltcGxlU0RLQmFzZVwiLCBcImdldE5ldHdvcmtTdGF0dXNcIiwgXCIoKUlcIik7XHJcbiAgICB9XHJcbn1cclxuIl19