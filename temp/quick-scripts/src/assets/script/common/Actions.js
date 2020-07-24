"use strict";
cc._RF.push(module, '0e349ca6ytENZGhroHTugf2', 'Actions');
// script/common/Actions.ts

"use strict";
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
/**
 * 简单动作集合
 */
var Actions = /** @class */ (function () {
    function Actions() {
    }
    Actions.prototype.tweenToPos = function (flagNode, tagerPos, time, cb) {
        if (time === void 0) { time = 0.5; }
        cc.tween(flagNode)
            .to(time, { position: tagerPos, scale: 0.5, opacity: 180 })
            .call(function () {
            if (cb) {
                cb();
            }
        })
            .start();
    };
    /**
     * 呼吸
     * @param flagNode 播放节点
     * @param shirnk 缩放最小值 默认0.9
     * @param time 时间,默认0.5秒
     */
    Actions.prototype.breatheEff = function (flagNode, shirnk, time) {
        if (shirnk === void 0) { shirnk = 0.9; }
        if (time === void 0) { time = .5; }
        flagNode.stopAllActions();
        cc.tween(flagNode)
            .repeatForever(cc.tween()
            .to(time, { scale: shirnk })
            .to(time, { scale: 1 }))
            .start();
    };
    /**
     * 弹窗打开效果
     * @param flagNode 播放节点
     * @param cb 是否需要回调
     */
    Actions.prototype.openPopup = function (flagNode, cb) {
        flagNode.scale = 0;
        var scaleTo = 1;
        if (cc.winSize.width / 720 < 1) {
            scaleTo = cc.winSize.width / 720;
        }
        cc.tween(flagNode)
            .to(.2, { scale: scaleTo }, { easing: 'backOut' })
            .call(function () {
            if (cb) {
                cb();
            }
        })
            .start();
    };
    /**
     * 弹窗关闭效果
     * @param flagNode 播放节点
     * @param cb 是否需要回调
     */
    Actions.prototype.closePopup = function (flagNode, cb) {
        cc.tween(flagNode)
            .to(.2, { scale: 0 }, { easing: 'backIn' })
            .call(function () {
            if (cb) {
                cb();
            }
        })
            .start();
    };
    /**
     * 弹出效果
     * @param flagNode 播放节点
     * @param time 时间 默认时间为0.3
     */
    Actions.prototype.popOut = function (flagNode, time) {
        if (time === void 0) { time = .3; }
        flagNode.scale = 0;
        cc.tween(flagNode)
            .to(time, { scale: 1 }, { easing: 'backOut' })
            .start();
    };
    /**
     * 弹回效果
     * @param flagNode 播放节点
     * @param time 时间 默认时间为0.3
     */
    Actions.prototype.popIn = function (flagNode, time) {
        if (time === void 0) { time = .3; }
        cc.tween(flagNode)
            .to(time, { scale: 0 }, { easing: 'backIn' })
            .start();
    };
    /**
     * 晃动
     * @param flagNode 播放节点
     * @param time 时间 默认为0.2
     * @param range 晃动角度 默认为10
     */
    Actions.prototype.rockAction = function (flagNode, time, range) {
        if (time === void 0) { time = 0.02; }
        if (range === void 0) { range = 10; }
        cc.tween(flagNode)
            .by(time, { angle: range })
            .by(time, { angle: -2 * range })
            .by(time * 0.8, { angle: 2 * range * 0.8 })
            .by(time * 0.6, { angle: -2 * range * 0.6 })
            .by(time * 0.4, { angle: 2 * range * 0.4 })
            .to(time * 0.2, { angle: 0 })
            .start();
    };
    /**
     * 从屏幕外进入
     * @param typeA 方向 上右下左
     * @param winWidth 指定宽度
     * @param winHeight 指定高度
     * @param delTime 时间
     */
    Actions.prototype.getMoveInScreenActive = function (flagNode, typeA, winWidth, winHeight, delTime) {
        switch (typeA) {
            case 0:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(0, -winHeight) })
                    .start();
                return cc.moveBy(delTime, 0, -winHeight);
            case 1:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(-winHeight, 0) })
                    .start();
                return cc.moveBy(delTime, -winWidth, 0);
            case 2:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(0, -winHeight) })
                    .start();
                return;
            case 3:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(winHeight, 0) })
                    .start();
                return;
        }
    };
    /**
     * Adds cion move
     * @param _root 金币父节点(kong)
     * @param _item 金币节点
     * @param _start
     * @param _end
     * @param [_cb]
     */
    Actions.prototype.addCionMove = function (_root, _item, _start, _end, _cb, isStar) {
        if (isStar === void 0) { isStar = false; }
        return __awaiter(this, void 0, Promise, function () {
            var _dis, element, _parent, time, x, height, _action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _dis = Math.sqrt(Math.pow((_start.x - _end.x), 2) + Math.pow((_start.y - _end.y), 2));
                        // // 贝塞尔
                        // let _speed: number = _dis / 80 * 0.05;
                        _root.zIndex = 100;
                        return [4 /*yield*/, GPool.get(_item)];
                    case 1:
                        element = _a.sent();
                        element.scale = 1.1;
                        element.position = _start;
                        element.opacity = 255;
                        _parent = cc.callFunc(function () {
                            if (_cb)
                                _cb();
                            if (isStar) {
                                GPool.get("star").then(function (mNode) {
                                    mNode.position = _end;
                                    mNode.parent = cc.find("Canvas/UINode/Anim");
                                    mNode.getComponent("StarEnd").init();
                                });
                            }
                            GPool.put(element);
                        });
                        time = Math.random() * 0.8;
                        x = -200 + Math.floor(Math.random() * 401);
                        height = 100 + Math.floor(Math.random() * 101);
                        _action = cc.sequence(
                        // // 贝塞尔
                        // cc.spawn(
                        //     cc.fadeIn(0.1),
                        //     cc.moveBy(0.1, cc.v2(utils.randomNum(-100, 100), utils.randomNum(-100, 100))).easing(cc.easeOut(1.5)),
                        //     cc.scaleTo(_speed, 1)
                        // ),
                        // cc.delayTime(utils.randomNum(1, 100) / 1000 + 0.1),
                        // cc.bezierTo(_speed, _bezier).easing(cc.easeIn(1.5)),
                        cc.jumpTo(time, cc.v2(x, 0), height, 1), cc.spawn(cc.moveTo(0.5, _end).easing(cc.easeBackIn()), cc.scaleTo(0.5, 0.8).easing(cc.easeBackIn())), _parent);
                        element.runAction(_action);
                        _root.addChild(element);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 分数往上漂效果
     * @param _root 播放节点
     * @param _start 开始坐标
     * @param _end 结束坐标
     * @param _cb 回调
     */
    Actions.prototype.addScroeMove = function (_root, _start, _end, _cb) {
        _root.zIndex = 100;
        var t = cc.tween;
        t(_root)
            .parallel(t().by(.2, { position: cc.v2(0, 20) }), t().to(.1, { opacity: 1 }))
            .delayTime(.2)
            .to(.2, { position: _end }, { easing: 'backIn' })
            .call(function () {
            if (_cb)
                _cb();
            _root.destroy();
        })
            .start();
    };
    return Actions;
}());
exports.actions = new Actions();

cc._RF.pop();