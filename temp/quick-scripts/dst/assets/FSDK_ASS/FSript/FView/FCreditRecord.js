
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FCreditRecord.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f28fiBg3tBob6TUy1XYPAj', 'FCreditRecord');
// FSDK_ASS/FSript/FView/FCreditRecord.ts

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
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var FPanelManager_1 = require("../FModel/FPanelManager");
var FGlobal_1 = require("../FModel/FGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FCreditRecord = /** @class */ (function (_super) {
    __extends(FCreditRecord, _super);
    function FCreditRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mTitle_pp = null;
        _this.mTitle_gp = null;
        _this.mScroll = null;
        _this.mItem = null;
        _this.type = "";
        return _this;
    }
    FCreditRecord.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
    };
    FCreditRecord.prototype.onEnable = function () {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        cc.director.on(FEventID.CARD_RECORD, this.cardRecord, this);
    };
    FCreditRecord.prototype.onDisable = function () {
        cc.director.off(FEventID.CARD_RECORD, this.cardRecord, this);
    };
    FCreditRecord.prototype.closePage = function () {
        FPanelManager_1.FPanelManager.close_eff(this.node, true);
    };
    FCreditRecord.prototype.setType = function (type) {
        this.type = type;
        this.mTitle_gp.active = this.mTitle_pp.active = false;
        this['mTitle_' + type].active = true;
        FSocketSend_1.FSocketSend.C2S_info(['coins']);
    };
    FCreditRecord.prototype.cardRecord = function (data) {
        if (data[this.type]) {
            var list = data[this.type];
            for (var i = 0; i < this.mScroll.content.childrenCount; i++) {
                this.mScroll.content.children[i].active = false;
            }
            for (var i = 0; i < list.length; i++) {
                var item = null;
                if (i < this.mScroll.content.childrenCount) {
                    item = this.mScroll.content.children[i];
                    item.active = true;
                }
                else {
                    item = cc.instantiate(this.mItem);
                    item.parent = this.mScroll.content;
                }
                item.getChildByName('bg').active = (i + 1) % 2 != 0;
                item.getChildByName('from').getComponent(cc.Label).string = list[i].from;
                item.getChildByName('change').getComponent(cc.Label).string = "$" + list[i].change.toFixed(2);
                item.getChildByName('amount').getComponent(cc.Label).string = "$" + list[i].amount.toFixed(2);
                item.getChildByName('time').getComponent(cc.Label).string = FGlobal_1.FGlobal.getDateDay1(list[i].time);
            }
        }
        else {
            for (var i = 0; i < this.mScroll.content.childrenCount; i++) {
                this.mScroll.content.children[i].active = false;
            }
        }
        FLog.normal("历史记录 ", data);
    };
    __decorate([
        property(cc.Node)
    ], FCreditRecord.prototype, "mTitle_pp", void 0);
    __decorate([
        property(cc.Node)
    ], FCreditRecord.prototype, "mTitle_gp", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FCreditRecord.prototype, "mScroll", void 0);
    __decorate([
        property(cc.Node)
    ], FCreditRecord.prototype, "mItem", void 0);
    FCreditRecord = __decorate([
        ccclass
    ], FCreditRecord);
    return FCreditRecord;
}(cc.Component));
exports.FCreditRecord = FCreditRecord;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZDcmVkaXRSZWNvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELHlEQUF3RDtBQUN4RCw2Q0FBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFtQyxpQ0FBWTtJQUQvQztRQUFBLHFFQWtFQztRQS9ERyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFrQixJQUFJLENBQUM7UUFFOUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixVQUFJLEdBQUcsRUFBRSxDQUFDOztJQXdEZCxDQUFDO0lBdkRHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLDZCQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FB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RTtnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDbkQ7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7a0RBQ007SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSTtJQVJiLGFBQWE7UUFEekIsT0FBTztPQUNLLGFBQWEsQ0FpRXpCO0lBQUQsb0JBQUM7Q0FqRUQsQUFpRUMsQ0FqRWtDLEVBQUUsQ0FBQyxTQUFTLEdBaUU5QztBQWpFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZTb2NrZXRTZW5kIH0gZnJvbSBcIi4uL0ZOZXRXb3JrL0ZTb2NrZXRTZW5kXCI7XHJcbmltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi4vRk1vZGVsL0ZQYW5lbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRkdsb2JhbCB9IGZyb20gXCIuLi9GTW9kZWwvRkdsb2JhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGQ3JlZGl0UmVjb3JkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVRpdGxlX3BwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbVRpdGxlX2dwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgbVNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1JdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHR5cGUgPSBcIlwiO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm1TY3JvbGwuc3RvcEF1dG9TY3JvbGwoKTtcclxuICAgICAgICB0aGlzLm1TY3JvbGwuc2Nyb2xsVG9Ub3AoMCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oRkV2ZW50SUQuQ0FSRF9SRUNPUkQsIHRoaXMuY2FyZFJlY29yZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihGRXZlbnRJRC5DQVJEX1JFQ09SRCwgdGhpcy5jYXJkUmVjb3JkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgRlBhbmVsTWFuYWdlci5jbG9zZV9lZmYodGhpcy5ub2RlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5tVGl0bGVfZ3AuYWN0aXZlID0gdGhpcy5tVGl0bGVfcHAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpc1snbVRpdGxlXycgKyB0eXBlXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIEZTb2NrZXRTZW5kLkMyU19pbmZvKFsnY29pbnMnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZFJlY29yZChkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGFbdGhpcy50eXBlXSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IGRhdGFbdGhpcy50eXBlXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1TY3JvbGwuY29udGVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubVNjcm9sbC5jb250ZW50LmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCB0aGlzLm1TY3JvbGwuY29udGVudC5jaGlsZHJlbkNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMubVNjcm9sbC5jb250ZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1JdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubVNjcm9sbC5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnYmcnKS5hY3RpdmUgPSAoaSArIDEpICUgMiAhPSAwO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnZnJvbScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbGlzdFtpXS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZSgnY2hhbmdlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiRcIiArIGxpc3RbaV0uY2hhbmdlLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKCdhbW91bnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiJFwiICsgbGlzdFtpXS5hbW91bnQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ3RpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEZHbG9iYWwuZ2V0RGF0ZURheTEobGlzdFtpXS50aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubVNjcm9sbC5jb250ZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tU2Nyb2xsLmNvbnRlbnQuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCLljoblj7LorrDlvZUgXCIsIGRhdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==