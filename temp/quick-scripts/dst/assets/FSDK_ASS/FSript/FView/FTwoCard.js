
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FTwoCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97e50ATWGpMrJXu1FHxLekB', 'FTwoCard');
// FSDK_ASS/FSript/FView/FTwoCard.ts

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
var FTwoCardItem_1 = require("./FTwoCardItem");
var FGlobal_1 = require("../FModel/FGlobal");
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTwoCard = /** @class */ (function (_super) {
    __extends(FTwoCard, _super);
    function FTwoCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mTitleSp = [];
        _this.mCardSp = [];
        _this.mTitle = null;
        _this.mCard1 = null;
        _this.mCard2 = null;
        return _this;
    }
    FTwoCard.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal_1.FGlobal.getScale();
    };
    FTwoCard.prototype.onEnable = function () {
        FSocketSend_1.FSocketSend.C2S_trans_history('twocard');
    };
    //0-pp 1-gp 2-ap
    FTwoCard.prototype.setType = function (type) {
        var _this = this;
        if (type == 1) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                type = 1;
            }
            else if (cc.sys.os == cc.sys.OS_IOS) {
                type = 2;
            }
        }
        this.mTitle.spriteFrame = this.mTitleSp[type];
        this.mCard1.setData(type, this.mCardSp[type], this);
        this.mCard2.setData(type, this.mCardSp[type], this);
        var cnt = 0;
        FSDK.getRegCnt(FNetWorkConfig.data.code, function (data) {
            console.log("什么啊  ", data);
            cnt = data[FNetWorkConfig.data.code];
            _this.mCard1.setCnt(cnt);
            _this.mCard2.setCnt(cnt);
        });
        this.mCard1.setCnt(cnt);
        this.mCard2.setCnt(cnt);
    };
    FTwoCard.prototype.closePage = function () {
        this.node.parent = null;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], FTwoCard.prototype, "mTitleSp", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FTwoCard.prototype, "mCardSp", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTwoCard.prototype, "mTitle", void 0);
    __decorate([
        property(FTwoCardItem_1.FTwoCardItem)
    ], FTwoCard.prototype, "mCard1", void 0);
    __decorate([
        property(FTwoCardItem_1.FTwoCardItem)
    ], FTwoCard.prototype, "mCard2", void 0);
    FTwoCard = __decorate([
        ccclass
    ], FTwoCard);
    return FTwoCard;
}(cc.Component));
exports.FTwoCard = FTwoCard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZUd29DYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyw2Q0FBNEM7QUFFNUMsdURBQXNEO0FBRWhELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBOEIsNEJBQVk7SUFEMUM7UUFBQSxxRUFrREM7UUEvQ0csY0FBUSxHQUFxQixFQUFFLENBQUM7UUFFaEMsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFFL0IsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWlCLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQWlCLElBQUksQ0FBQzs7SUF1Q2hDLENBQUM7SUFyQ0cseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSx5QkFBVyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsMEJBQU8sR0FBUCxVQUFRLElBQUk7UUFBWixpQkFxQkM7UUFwQkcsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDaEMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUNaO2lCQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLElBQUksR0FBRyxDQUFDLENBQUM7YUFDWjtTQUNKO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsSUFBSTtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDTTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLDJCQUFZLENBQUM7NENBQ0s7SUFFNUI7UUFEQyxRQUFRLENBQUMsMkJBQVksQ0FBQzs0Q0FDSztJQVZuQixRQUFRO1FBRHBCLE9BQU87T0FDSyxRQUFRLENBaURwQjtJQUFELGVBQUM7Q0FqREQsQUFpREMsQ0FqRDZCLEVBQUUsQ0FBQyxTQUFTLEdBaUR6QztBQWpEWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZUd29DYXJkSXRlbSB9IGZyb20gXCIuL0ZUd29DYXJkSXRlbVwiO1xyXG5pbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4uL0ZNb2RlbC9GR2xvYmFsXCI7XHJcbmltcG9ydCB7IEZQYW5lbE1hbmFnZXIgfSBmcm9tIFwiLi4vRk1vZGVsL0ZQYW5lbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRlNvY2tldFNlbmQgfSBmcm9tIFwiLi4vRk5ldFdvcmsvRlNvY2tldFNlbmRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRlR3b0NhcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbVRpdGxlU3A6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIG1DYXJkU3A6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtVGl0bGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoRlR3b0NhcmRJdGVtKVxyXG4gICAgbUNhcmQxOiBGVHdvQ2FyZEl0ZW0gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEZUd29DYXJkSXRlbSlcclxuICAgIG1DYXJkMjogRlR3b0NhcmRJdGVtID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRvcFwiKS5oZWlnaHQgPSA4NSArIEZHbG9iYWwuZ2V0U2NhbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBGU29ja2V0U2VuZC5DMlNfdHJhbnNfaGlzdG9yeSgndHdvY2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vMC1wcCAxLWdwIDItYXBcclxuICAgIHNldFR5cGUodHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlID09IDEpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubVRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5tVGl0bGVTcFt0eXBlXTtcclxuICAgICAgICB0aGlzLm1DYXJkMS5zZXREYXRhKHR5cGUsIHRoaXMubUNhcmRTcFt0eXBlXSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5tQ2FyZDIuc2V0RGF0YSh0eXBlLCB0aGlzLm1DYXJkU3BbdHlwZV0sIHRoaXMpO1xyXG4gICAgICAgIGxldCBjbnQgPSAwO1xyXG4gICAgICAgIEZTREsuZ2V0UmVnQ250KEZOZXRXb3JrQ29uZmlnLmRhdGEuY29kZSwgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLku4DkuYjllYogIFwiLCBkYXRhKVxyXG4gICAgICAgICAgICBjbnQgPSBkYXRhW0ZOZXRXb3JrQ29uZmlnLmRhdGEuY29kZV07XHJcbiAgICAgICAgICAgIHRoaXMubUNhcmQxLnNldENudChjbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm1DYXJkMi5zZXRDbnQoY250KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1DYXJkMS5zZXRDbnQoY250KTtcclxuICAgICAgICB0aGlzLm1DYXJkMi5zZXRDbnQoY250KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==