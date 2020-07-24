
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FModel/FToLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df649Ki7KRMeq9Z+aOVaNyR', 'FToLoad');
// FSDK_ASS/FSript/FModel/FToLoad.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FToLoad = /** @class */ (function (_super) {
    __extends(FToLoad, _super);
    function FToLoad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dt = 0;
        _this.se = 0;
        _this.label_se = null;
        _this.label_msg = null;
        _this.mCircle = null;
        return _this;
    }
    FToLoad.prototype.onLoad = function () {
    };
    FToLoad.prototype.start = function () {
    };
    FToLoad.prototype.onEnable = function () {
    };
    FToLoad.prototype.setMsg = function (msg, time, showTime) {
        if (msg === void 0) { msg = 'Loading'; }
        if (time === void 0) { time = 0; }
        if (showTime === void 0) { showTime = false; }
        this.label_msg.string = msg;
        this.label_se.string = time + 'se';
        this.se = time;
        if (showTime) {
            if (this.se) {
                this.label_se.node.active = true;
            }
            else {
                this.label_se.node.active = false;
            }
        }
        else {
            this.label_se.node.active = false;
        }
    };
    FToLoad.prototype.update = function (dt) {
        this.mCircle.angle += 3;
        if (this.mCircle.angle >= 360) {
            this.mCircle.angle = 0;
        }
        this.dt += dt;
        if (this.dt >= 1) {
            this.dt = 0;
            if (this.se > 0) {
                this.se -= 1;
                this.label_se.string = this.se + 'se';
                if (this.se <= 0) {
                    this.se = 0;
                    this.label_se.node.active = false;
                    this.node.parent = null;
                }
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], FToLoad.prototype, "label_se", void 0);
    __decorate([
        property(cc.Label)
    ], FToLoad.prototype, "label_msg", void 0);
    __decorate([
        property(cc.Node)
    ], FToLoad.prototype, "mCircle", void 0);
    FToLoad = __decorate([
        ccclass
    ], FToLoad);
    return FToLoad;
}(cc.Component));
exports.default = FToLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk1vZGVsXFxGVG9Mb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUE2REM7UUEzREcsUUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFFUCxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUFvRDVCLENBQUM7SUFuREcsd0JBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEdBQXVCLEVBQUUsSUFBUSxFQUFDLFFBQWdCO1FBQWxELG9CQUFBLEVBQUEsZUFBdUI7UUFBRSxxQkFBQSxFQUFBLFFBQVE7UUFBQyx5QkFBQSxFQUFBLGdCQUFnQjtRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLElBQUcsUUFBUSxFQUFDO1lBQ1IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEM7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQztTQUNKO2FBQ0c7WUFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO0lBRUwsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQzNCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFwREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ007SUFSUCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNEQzQjtJQUFELGNBQUM7Q0E1REQsQUE0REMsQ0E1RG9DLEVBQUUsQ0FBQyxTQUFTLEdBNERoRDtrQkE1RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlRvTG9hZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBkdCA9IDA7XHJcbiAgICBzZSA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbF9zZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfbXNnOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1DaXJjbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TXNnKG1zZzogc3RyaW5nID0gJ0xvYWRpbmcnLCB0aW1lID0gMCxzaG93VGltZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9tc2cuc3RyaW5nID0gbXNnO1xyXG4gICAgICAgIHRoaXMubGFiZWxfc2Uuc3RyaW5nID0gdGltZSArICdzZSc7XHJcbiAgICAgICAgdGhpcy5zZSA9IHRpbWU7XHJcbiAgICAgICAgaWYoc2hvd1RpbWUpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbF9zZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsX3NlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9zZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm1DaXJjbGUuYW5nbGUgKz0gMztcclxuICAgICAgICBpZiAodGhpcy5tQ2lyY2xlLmFuZ2xlID49IDM2MCkge1xyXG4gICAgICAgICAgICB0aGlzLm1DaXJjbGUuYW5nbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmR0ICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLmR0ID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5kdCA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbF9zZS5zdHJpbmcgPSB0aGlzLnNlICsgJ3NlJztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsX3NlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19