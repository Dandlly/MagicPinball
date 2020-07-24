
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game/FCionEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26dffw8sylD3oAMuANOVMI2', 'FCionEvent');
// script/game/FCionEvent.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../common/User");
var Events_1 = require("../common/Events");
var EventConstants_1 = require("../common/EventConstants");
var PopupConstants_1 = require("../common/PopupConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FCionEvent = /** @class */ (function (_super) {
    __extends(FCionEvent, _super);
    function FCionEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipsLable = [];
        return _this;
    }
    FCionEvent.prototype.onLoad = function () {
        this.initEvents();
    };
    FCionEvent.prototype.initEvents = function () {
        FSDK.addCreditListen(this.severCb, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.OPENVDIEO, this.openVidoe, this);
    };
    FCionEvent.prototype.onDestroy = function () {
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.OPENVDIEO);
    };
    /**
    * 服务器回调
    * @param data
    */
    FCionEvent.prototype.severCb = function (data) {
        var _this = this;
        this.scheduleOnce(function () {
            switch (data.type) {
                case 'gp':
                    _this.tipsAnim(0, data.num - User_1.user.firstGold);
                    User_1.user.firstGold = data.num;
                    break;
                case 'pp':
                    _this.tipsAnim(1, data.num - User_1.user.secondGold);
                    User_1.user.secondGold = data.num;
                    break;
                case 'credit':
                    _this.tipsAnim(2, data.num - User_1.user.credit);
                    User_1.user.credit = data.num;
                    break;
            }
            User_1.user.save();
            Events_1.events.emit(EventConstants_1.GameEvents.UPDATAUI);
        }, 1);
        FLog.normal('服务器金币数量:', data.num);
    };
    /**
     * tipsAnim
     */
    FCionEvent.prototype.tipsAnim = function (num, updateNum) {
        var _this = this;
        this.tipsLable[num].stopAllActions();
        this.tipsLable[num].active = false;
        this.tipsLable[num].position = cc.v2(62.5, -5);
        this.tipsLable[num].opacity = 0;
        if (num == 2) {
            this.tipsLable[num].getComponent(cc.Label).string = "+" + updateNum;
        }
        else {
            this.tipsLable[num].getComponent(cc.Label).string = "+" + updateNum.toFixed(2);
        }
        this.tipsLable[num].active = true;
        var t = cc.tween;
        t(this.tipsLable[num])
            .parallel(t().by(.2, { opacity: 255 }, { easing: 'backIn' }), t().by(.2, { y: 5 }, { easing: 'backIn' }))
            .delay(1.5)
            .call(function () {
            _this.tipsLable[num].active = false;
            _this.tipsLable[num].position = cc.v2(62.5, -5);
            _this.tipsLable[num].opacity = 0;
        })
            .start();
    };
    /**
     * 打开红包弹窗
     * @param videoName red或者hf
     * @param isVideo 是否免费
     */
    FCionEvent.prototype.openVidoe = function (videoName, getCardNum, isVideo) {
        var _this = this;
        if (isVideo === void 0) { isVideo = true; }
        videoName.node.opacity = 255;
        videoName.node.zIndex = 10;
        User_1.user.setIsRedAndCost(false);
        EventConstants_1.GameConstant.isAward = true;
        User_1.user.save();
        cc.tween(videoName.node)
            .to(.3, { position: cc.v2(0, 0), scale: 2 })
            .call(function () { return __awaiter(_this, void 0, void 0, function () {
            var awardNum, _data;
            return __generator(this, function (_a) {
                awardNum = FSDK.getRandomReward();
                _data = ["", awardNum.num, "Brick", isVideo, videoName];
                switch (awardNum.type) {
                    case 1:
                        _data[0] = "gp";
                        break;
                    case 2:
                        _data[0] = "pp";
                        break;
                    case 3:
                        _data[0] = "credit";
                        _data[1] = User_1.user.getLumpData().bxCredit;
                        break;
                }
                Events_1.events.emit(EventConstants_1.GameEvents.SHOW_POPUP, PopupConstants_1.PopUpName.SUPERPRIZE, null, _data);
                if (User_1.user.IsShake) {
                    FSDK.shake(50);
                }
                return [2 /*return*/];
            });
        }); })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], FCionEvent.prototype, "tipsLable", void 0);
    FCionEvent = __decorate([
        ccclass
    ], FCionEvent);
    return FCionEvent;
}(cc.Component));
exports.default = FCionEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lXFxGQ2lvbkV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBQ3RDLDJDQUEwQztBQUMxQywyREFBb0U7QUFFcEUsMkRBQXFEO0FBRS9DLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUFrSEM7UUEvR0csZUFBUyxHQUFjLEVBQUUsQ0FBQzs7SUErRzlCLENBQUM7SUE3R0csMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxlQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSwyQkFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksZUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDJCQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7TUFHRTtJQUNGLDRCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQVosaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsS0FBSyxJQUFJO29CQUNMLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29C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QUMsR0FBRyxXQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUN2QyxNQUFNO2lCQUNiO2dCQUVELGVBQU0sQ0FBQyxJQUFJLENBQUMsMkJBQVUsQ0FBQyxVQUFVLEVBQUUsMEJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLFdBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbEI7OzthQUNKLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBOUdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1E7SUFGVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUg5QjtJQUFELGlCQUFDO0NBakhELEFBaUhDLENBakh1QyxFQUFFLENBQUMsU0FBUyxHQWlIbkQ7a0JBakhvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9jb21tb24vVXNlclwiO1xyXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnRzLCBHYW1lQ29uc3RhbnQgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tIFwiLi4vY29tbW9uL0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgUG9wVXBOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9Qb3B1cENvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZDaW9uRXZlbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aXBzTGFibGU6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RXZlbnRzKCkge1xyXG4gICAgICAgIEZTREsuYWRkQ3JlZGl0TGlzdGVuKHRoaXMuc2V2ZXJDYiwgdGhpcyk7XHJcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMubmFtZSwgdGhpcy51dWlkLCBHYW1lRXZlbnRzLk9QRU5WRElFTywgdGhpcy5vcGVuVmlkb2UsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGV2ZW50cy5yZW1vdmVMaXN0ZW5lcih0aGlzLm5hbWUsIEdhbWVFdmVudHMuT1BFTlZESUVPKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICog5pyN5Yqh5Zmo5Zue6LCDXHJcbiAgICAqIEBwYXJhbSBkYXRhIFxyXG4gICAgKi9cclxuICAgIHNldmVyQ2IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dwJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNBbmltKDAsIGRhdGEubnVtIC0gdXNlci5maXJzdEdvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuZmlyc3RHb2xkID0gZGF0YS5udW07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXBzQW5pbSgxLCBkYXRhLm51bSAtIHVzZXIuc2Vjb25kR29sZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5zZWNvbmRHb2xkID0gZGF0YS5udW07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjcmVkaXQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwc0FuaW0oMiwgZGF0YS5udW0gLSB1c2VyLmNyZWRpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5jcmVkaXQgPSBkYXRhLm51bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1c2VyLnNhdmUoKTtcclxuICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5VUERBVEFVSSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoJ+acjeWKoeWZqOmHkeW4geaVsOmHjzonLCBkYXRhLm51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aXBzQW5pbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdGlwc0FuaW0obnVtLCB1cGRhdGVOdW0pIHtcclxuICAgICAgICB0aGlzLnRpcHNMYWJsZVtudW1dLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy50aXBzTGFibGVbbnVtXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpcHNMYWJsZVtudW1dLnBvc2l0aW9uID0gY2MudjIoNjIuNSwgLTUpO1xyXG4gICAgICAgIHRoaXMudGlwc0xhYmxlW251bV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgaWYgKG51bSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlwc0xhYmxlW251bV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgKyR7dXBkYXRlTnVtfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aXBzTGFibGVbbnVtXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGArJHt1cGRhdGVOdW0udG9GaXhlZCgyKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpcHNMYWJsZVtudW1dLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHQgPSBjYy50d2VlbjtcclxuICAgICAgICB0KHRoaXMudGlwc0xhYmxlW251bV0pXHJcbiAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIHQoKS5ieSguMiwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6ICdiYWNrSW4nIH0pLFxyXG4gICAgICAgICAgICAgICAgdCgpLmJ5KC4yLCB7IHk6IDUgfSwgeyBlYXNpbmc6ICdiYWNrSW4nIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmRlbGF5KDEuNSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBzTGFibGVbbnVtXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwc0xhYmxlW251bV0ucG9zaXRpb24gPSBjYy52Mig2Mi41LCAtNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYWJsZVtudW1dLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA57qi5YyF5by556qXXHJcbiAgICAgKiBAcGFyYW0gdmlkZW9OYW1lIHJlZOaIluiAhWhmXHJcbiAgICAgKiBAcGFyYW0gaXNWaWRlbyDmmK/lkKblhY3otLlcclxuICAgICAqL1xyXG4gICAgb3BlblZpZG9lKHZpZGVvTmFtZSwgZ2V0Q2FyZE51bTogbnVtYmVyLCBpc1ZpZGVvID0gdHJ1ZSkge1xyXG4gICAgICAgIHZpZGVvTmFtZS5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdmlkZW9OYW1lLm5vZGUuekluZGV4ID0gMTA7XHJcbiAgICAgICAgdXNlci5zZXRJc1JlZEFuZENvc3QoZmFsc2UpO1xyXG4gICAgICAgIEdhbWVDb25zdGFudC5pc0F3YXJkID0gdHJ1ZTtcclxuICAgICAgICB1c2VyLnNhdmUoKTtcclxuICAgICAgICBjYy50d2Vlbih2aWRlb05hbWUubm9kZSlcclxuICAgICAgICAgICAgLnRvKC4zLCB7IHBvc2l0aW9uOiBjYy52MigwLCAwKSwgc2NhbGU6IDIgfSlcclxuICAgICAgICAgICAgLmNhbGwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdmlkZW9OYW1lLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyB2aWRlb05hbWUubm9kZS56SW5kZXggPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhd2FyZE51bTogYW55ID0gRlNESy5nZXRSYW5kb21SZXdhcmQoKVxyXG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gW1wiXCIsIGF3YXJkTnVtLm51bSwgXCJCcmlja1wiLCBpc1ZpZGVvLCB2aWRlb05hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXdhcmROdW0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RhdGFbMF0gPSBcImdwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RhdGFbMF0gPSBcInBwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RhdGFbMF0gPSBcImNyZWRpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZGF0YVsxXSA9IHVzZXIuZ2V0THVtcERhdGEoKS5ieENyZWRpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5TSE9XX1BPUFVQLCBQb3BVcE5hbWUuU1VQRVJQUklaRSwgbnVsbCwgX2RhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLklzU2hha2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBGU0RLLnNoYWtlKDUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19