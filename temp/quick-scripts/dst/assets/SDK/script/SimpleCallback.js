
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleCallback.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '171068Vll5E34So+RJoWi48', 'SimpleCallback');
// SDK/script/SimpleCallback.ts

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
var SimpleSDK_1 = require("./SimpleSDK");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleCallback = /** @class */ (function (_super) {
    __extends(SimpleCallback, _super);
    function SimpleCallback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleCallback.instance = function () {
        return get_simple_callback();
    };
    SimpleCallback.prototype.sdkInitSuccess = function (args) {
        cc.log(SimpleSDK_1.default.instance());
        var re = JSON.parse(args);
        SimpleSDK_1.default.instance().initSuccess(re);
    };
    SimpleCallback.prototype.sdkInitFailed = function (args) {
        var re = JSON.parse(args);
        SimpleSDK_1.default.instance().initFailed(re);
    };
    SimpleCallback.prototype.getAttributionInfo = function (args) {
        var re = JSON.parse(args);
        SimpleSDK_1.default.instance().innerAttributionInfoCallback(re);
    };
    SimpleCallback = __decorate([
        ccclass
    ], SimpleCallback);
    return SimpleCallback;
}(cc.Component));
exports.default = SimpleCallback;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZUNhbGxiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUFvQztBQUU5QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEOztJQXFCQSxDQUFDO0lBbkJpQix1QkFBUSxHQUF0QjtRQUNJLE9BQU8sbUJBQW1CLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sdUNBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLEVBQUUsR0FBMEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxtQkFBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sc0NBQWEsR0FBcEIsVUFBcUIsSUFBWTtRQUM3QixJQUFJLEVBQUUsR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxtQkFBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sMkNBQWtCLEdBQXpCLFVBQTBCLElBQVc7UUFDakMsSUFBSSxFQUFFLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsbUJBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBcEJnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBcUJsQztJQUFELHFCQUFDO0NBckJELEFBcUJDLENBckIyQyxFQUFFLENBQUMsU0FBUyxHQXFCdkQ7a0JBckJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU0RLIGZyb20gJy4vU2ltcGxlSW50ZXJmYWNlJ1xyXG5pbXBvcnQgU2ltcGxlU0RLIGZyb20gJy4vU2ltcGxlU0RLJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDYWxsYmFjayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSgpOiBTaW1wbGVDYWxsYmFjayB7XHJcbiAgICAgICAgcmV0dXJuIGdldF9zaW1wbGVfY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2RrSW5pdFN1Y2Nlc3MoYXJnczogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MubG9nKFNpbXBsZVNESy5pbnN0YW5jZSgpKTtcclxuICAgICAgICBsZXQgcmU6IFNESy5Jbml0U3VjY2Vzc1Jlc3VsdCA9IEpTT04ucGFyc2UoYXJncyk7XHJcbiAgICAgICAgU2ltcGxlU0RLLmluc3RhbmNlKCkuaW5pdFN1Y2Nlc3MocmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZGtJbml0RmFpbGVkKGFyZ3M6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByZTogU0RLLlNES0Vycm9yID0gSlNPTi5wYXJzZShhcmdzKTtcclxuICAgICAgICBTaW1wbGVTREsuaW5zdGFuY2UoKS5pbml0RmFpbGVkKHJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXR0cmlidXRpb25JbmZvKGFyZ3M6c3RyaW5nKXtcclxuICAgICAgICBsZXQgcmU6U0RLLkF0dHJpYnV0aW9uSW5mbyA9IEpTT04ucGFyc2UoYXJncyk7XHJcbiAgICAgICAgU2ltcGxlU0RLLmluc3RhbmNlKCkuaW5uZXJBdHRyaWJ1dGlvbkluZm9DYWxsYmFjayhyZSk7XHJcbiAgICB9XHJcbn1cclxuIl19