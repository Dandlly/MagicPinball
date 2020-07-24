
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleEditor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZUVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRyx1Q0FBd0M7QUFDeEMsbURBQThDO0FBRXhDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQW1CO0lBQTdEOztJQTRDQSxDQUFDO0lBMUNHLHFDQUFjLEdBQWQsVUFBZSxZQUFvQixFQUFFLEtBQWM7UUFDL0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBaUIsR0FBakIsVUFBa0IsWUFBb0IsRUFBRSxPQUFlLEVBQUUsS0FBYztRQUNuRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsR0FBMEI7WUFDM0IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGVBQWU7WUFFekIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsV0FBVztZQUNsQixVQUFVLEVBQUUsWUFBWTtZQUN4QixhQUFhLEVBQUUsZUFBZTtZQUM5QixPQUFPLEVBQUUsQ0FBQztTQUNiLENBQUE7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLHdCQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVDLGlCQUFpQjtRQUVqQixJQUFJLENBQUMsR0FBd0I7WUFDekIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUE7UUFDRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLHdCQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFckQsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQTNDZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTRDaEM7SUFBRCxtQkFBQztDQTVDRCxBQTRDQyxDQTVDeUMsR0FBRyxDQUFDLGVBQWUsR0E0QzVEO2tCQTVDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0ICogYXMgU0RLIGZyb20gJy4vU2ltcGxlSW50ZXJmYWNlJ1xyXG5pbXBvcnQgU2ltcGxlQ2FsbGJhY2sgZnJvbSAnLi9TaW1wbGVDYWxsYmFjayc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlRWRpdG9yIGV4dGVuZHMgU0RLLlNpbXBsZUludGVyZmFjZSB7XHJcblxyXG4gICAgaW5pdFdpdGhBZGp1c3QoYWRqdXN0QXBwa2V5OiBzdHJpbmcsIGRlYnVnOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFdpdGhBcHBzZmx5ZXIoYXBwc2ZseWVya2V5OiBzdHJpbmcsIGFwcGxlaWQ6IHN0cmluZywgZGVidWc6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCBhOiBTREsuSW5pdFN1Y2Nlc3NSZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIHBhY2thZ2U6IFwiY29tLmEuYlwiLFxyXG4gICAgICAgICAgICBhcHBWZXJzaW9uOiBcIjE1XCIsXHJcbiAgICAgICAgICAgIGRldmljZUlkOiBcInRlc3QgZGV2aWNlaWRcIixcclxuXHJcbiAgICAgICAgICAgIGlkZmE6IFwiaWRmYV9zdHJcIixcclxuICAgICAgICAgICAgYW5kcm9pZF9pZDogXCJhbmRyb2lkX2lkX3N0clwiLFxyXG4gICAgICAgICAgICBpZGZ2OiBcImlkZnZfc3RyXCIsXHJcbiAgICAgICAgICAgIGJhbmQ6IFwiYmFuZF9zdHJcIixcclxuICAgICAgICAgICAgbW9kZWw6IFwibW9kZWxfc3RyXCIsXHJcbiAgICAgICAgICAgIGRldmljZU5hbWU6IFwiZGV2aWNlX3N0clwiLFxyXG4gICAgICAgICAgICBzeXN0ZW1WZXJzaW9uOiBcInN5c3RlbXZlcnNpb25cIixcclxuICAgICAgICAgICAgbmV0d29yazogMFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaiA9IEpTT04uc3RyaW5naWZ5KGEpO1xyXG4gICAgICAgIFNpbXBsZUNhbGxiYWNrLmluc3RhbmNlKCkuc2RrSW5pdFN1Y2Nlc3Moaik7XHJcblxyXG4gICAgICAgIC8vZWRpdG9yIOebtOaOpee7meWHuuW9kuWboOWbnuiwg1xyXG5cclxuICAgICAgICBsZXQgZTogU0RLLkF0dHJpYnV0aW9uSW5mbyA9IHtcclxuICAgICAgICAgICAgbmV0d29yazogXCJPcmdhbmljXCIsXHJcbiAgICAgICAgICAgIGNhbXBhaWduOiBcIlwiLFxyXG4gICAgICAgICAgICBhZGdyb3VwOiBcIlwiLFxyXG4gICAgICAgICAgICBjcmVhdGVpdmU6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGpqID0gSlNPTi5zdHJpbmdpZnkoZSk7XHJcbiAgICAgICAgU2ltcGxlQ2FsbGJhY2suaW5zdGFuY2UoKS5nZXRBdHRyaWJ1dGlvbkluZm8oamopO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXROZXR3b3JrU3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==