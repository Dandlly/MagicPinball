
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FInvityTaskItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ddfe/Mh51J6oXBBLdrGcIp', 'FInvityTaskItem');
// FSDK_ASS/FSript/FView/FInvityTaskItem.ts

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
var FInvityTaskItem = /** @class */ (function (_super) {
    __extends(FInvityTaskItem, _super);
    function FInvityTaskItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mAmount = null;
        _this.mTitle = null;
        _this.mPro = null;
        _this.sPro = null;
        _this.mBtnTrans = null;
        _this.mStaus = null;
        _this.pos = 0;
        _this.data = null;
        _this.parent = null;
        return _this;
    }
    FInvityTaskItem.prototype.onEnable = function () {
        cc.director.on(FEventID.S2C_trans_history, this.setHistory, this);
    };
    FInvityTaskItem.prototype.onDisable = function () {
        cc.director.off(FEventID.S2C_trans_history, this.setHistory, this);
    };
    FInvityTaskItem.prototype.setData = function (pos, data, parent) {
        this.pos = pos;
        this.data = data;
        this.parent = parent;
        this.mAmount.string = "$" + data.amount;
        this.mTitle.string = "invite " + data.count + " friends";
        this.mPro.string = FGlobal_1.FGlobal.USER_INFO.invite_count + "/" + data.count;
        this.sPro.fillRange = FGlobal_1.FGlobal.USER_INFO.invite_count / data.count;
        this.mBtnTrans.interactable = this.sPro.fillRange >= 1;
    };
    FInvityTaskItem.prototype.getTrans = function () {
        var _this = this;
        FSDK.showTransPage(this.parent, this.data, function () {
            FGlobal_1.FGlobal.invite_task.push(_this.data.id);
            _this.setStatus({ status: 0 });
        });
    };
    FInvityTaskItem.prototype.setHistory = function (data) {
        if (!this.data)
            return;
        if (data && data.data.records.length) {
            var type = data.data.type;
            data = data.data.records;
            if (type == 'invite') {
                for (var i = 0; i < data.length; i++) {
                    if (this.data.id == data[i].custom_id) {
                        this.setStatus(data[i]);
                    }
                }
            }
        }
        else {
            this.initStatus();
        }
    };
    FInvityTaskItem.prototype.setStatus = function (data) {
        var stutas = 'Processing';
        var color = 'FF8F00';
        switch (data.status) {
            case 0:
                stutas = 'Processing';
                color = 'FF8F00';
                break;
            case 1:
                stutas = 'Finish';
                color = '15C323';
                break;
            case 2:
                stutas = 'In Review';
                color = 'FF8F00';
                break;
            case -1:
                stutas = 'Refuse';
                color = 'D32424';
                break;
            case -2:
                stutas = 'GetFail';
                color = 'D32424';
                break;
        }
        this.mBtnTrans.node.active = false;
        this.mStaus.string = stutas;
        this.mStaus.node.color = new cc.Color().fromHEX(color);
    };
    FInvityTaskItem.prototype.initStatus = function () {
        if (!this.data)
            return;
        var data = FGlobal_1.FGlobal.invite_task;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == this.data.id) {
                this.mStaus.node.active = true;
                this.setStatus({ status: 0 });
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mAmount", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mTitle", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mPro", void 0);
    __decorate([
        property(cc.Sprite)
    ], FInvityTaskItem.prototype, "sPro", void 0);
    __decorate([
        property(cc.Button)
    ], FInvityTaskItem.prototype, "mBtnTrans", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityTaskItem.prototype, "mStaus", void 0);
    FInvityTaskItem = __decorate([
        ccclass
    ], FInvityTaskItem);
    return FInvityTaskItem;
}(cc.Component));
exports.FInvityTaskItem = FInvityTaskItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZJbnZpdHlUYXNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQyxtQ0FBWTtJQURqRDtRQUFBLHFFQXNHQztRQW5HRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixTQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBc0YzQixDQUFDO0lBckZHLGtDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFN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LyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZHbG9iYWwgfSBmcm9tIFwiLi4vRk1vZGVsL0ZHbG9iYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRkludml0eVRhc2tJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1BbW91bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1UaXRsZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbVBybzogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNQcm86IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbUJ0blRyYW5zOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbVN0YXVzOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwb3MgPSAwO1xyXG4gICAgZGF0YSA9IG51bGw7XHJcbiAgICBwYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oRkV2ZW50SUQuUzJDX3RyYW5zX2hpc3RvcnksIHRoaXMuc2V0SGlzdG9yeSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihGRXZlbnRJRC5TMkNfdHJhbnNfaGlzdG9yeSwgdGhpcy5zZXRIaXN0b3J5LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKHBvcywgZGF0YSwgcGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLm1BbW91bnQuc3RyaW5nID0gYCQke2RhdGEuYW1vdW50fWA7XHJcbiAgICAgICAgdGhpcy5tVGl0bGUuc3RyaW5nID0gYGludml0ZSAke2RhdGEuY291bnR9IGZyaWVuZHNgO1xyXG4gICAgICAgIHRoaXMubVByby5zdHJpbmcgPSBgJHtGR2xvYmFsLlVTRVJfSU5GTy5pbnZpdGVfY291bnR9LyR7ZGF0YS5jb3VudH1gO1xyXG4gICAgICAgIHRoaXMuc1Byby5maWxsUmFuZ2UgPSBGR2xvYmFsLlVTRVJfSU5GTy5pbnZpdGVfY291bnQgLyBkYXRhLmNvdW50O1xyXG4gICAgICAgIHRoaXMubUJ0blRyYW5zLmludGVyYWN0YWJsZSA9IHRoaXMuc1Byby5maWxsUmFuZ2UgPj0gMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFucygpIHtcclxuICAgICAgICBGU0RLLnNob3dUcmFuc1BhZ2UodGhpcy5wYXJlbnQsIHRoaXMuZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBGR2xvYmFsLmludml0ZV90YXNrLnB1c2godGhpcy5kYXRhLmlkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoe3N0YXR1czowfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRIaXN0b3J5KGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuZGF0YS5yZWNvcmRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IGRhdGEuZGF0YS50eXBlO1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kYXRhLnJlY29yZHM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdpbnZpdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmlkID09IGRhdGFbaV0uY3VzdG9tX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKGRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0U3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1cyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IHN0dXRhcyA9ICdQcm9jZXNzaW5nJztcclxuICAgICAgICBsZXQgY29sb3IgPSAnRkY4RjAwJztcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHN0dXRhcyA9ICdQcm9jZXNzaW5nJztcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJ0ZGOEYwMCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBzdHV0YXMgPSAnRmluaXNoJztcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJzE1QzMyMydcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBzdHV0YXMgPSAnSW4gUmV2aWV3JztcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJ0ZGOEYwMCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAgICAgICAgc3R1dGFzID0gJ1JlZnVzZSc7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICdEMzI0MjQnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAtMjpcclxuICAgICAgICAgICAgICAgIHN0dXRhcyA9ICdHZXRGYWlsJztcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJ0QzMjQyNCdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1CdG5UcmFucy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubVN0YXVzLnN0cmluZyA9IHN0dXRhcztcclxuICAgICAgICB0aGlzLm1TdGF1cy5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN0YXR1cygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBkYXRhID0gRkdsb2JhbC5pbnZpdGVfdGFzaztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gdGhpcy5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1TdGF1cy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyh7IHN0YXR1czogMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19