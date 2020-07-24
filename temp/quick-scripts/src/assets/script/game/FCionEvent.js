"use strict";
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