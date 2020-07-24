
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Actions.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFBQTtJQXlOQSxDQUFDO0lBeE5VLDRCQUFVLEdBQWpCLFVBQWtCLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxJQUFrQixFQUFFLEVBQWU7UUFBbkMscUJBQUEsRUFBQSxVQUFrQjtRQUN0RSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNiLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQzFELElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxDQUFDO2FBQ1I7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSw0QkFBVSxHQUFqQixVQUFrQixRQUFpQixFQUFFLE1BQW9CLEVBQUUsSUFBaUI7UUFBdkMsdUJBQUEsRUFBQSxZQUFvQjtRQUFFLHFCQUFBLEVBQUEsU0FBaUI7UUFDeEUsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2IsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDTCxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzNCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDOUI7YUFDQSxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDJCQUFTLEdBQWhCLFVBQWlCLFFBQWlCLEVBQUUs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TyxDQUFDLENBQUM7d0JBQzNCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7O0tBQzNCO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksOEJBQVksR0FBbkIsVUFBb0IsS0FBYyxFQUFFLE1BQWUsRUFBRSxJQUFhLEVBQUUsR0FBYztRQUM5RSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDSCxRQUFRLENBQ0wsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3RDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDN0I7YUFDQSxTQUFTLENBQUMsRUFBRSxDQUFDO2FBQ2IsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUNoRCxJQUFJLENBQUM7WUFDRixJQUFJLEdBQUc7Z0JBQUUsR0FBRyxFQUFFLENBQUM7WUFDZixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQXpOQSxBQXlOQyxJQUFBO0FBRVksUUFBQSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDnroDljZXliqjkvZzpm4blkIhcclxuICovXHJcbmNsYXNzIEFjdGlvbnMge1xyXG4gICAgcHVibGljIHR3ZWVuVG9Qb3MoZmxhZ05vZGU6IGNjLk5vZGUsIHRhZ2VyUG9zOiBjYy5WZWMyLCB0aW1lOiBudW1iZXIgPSAwLjUsIGNiPzogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKGZsYWdOb2RlKVxyXG4gICAgICAgICAgICAudG8odGltZSwgeyBwb3NpdGlvbjogdGFnZXJQb3MsIHNjYWxlOiAwLjUsIG9wYWNpdHk6IDE4MCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZG85ZC4XHJcbiAgICAgKiBAcGFyYW0gZmxhZ05vZGUg5pKt5pS+6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gc2hpcm5rIOe8qeaUvuacgOWwj+WAvCDpu5jorqQwLjlcclxuICAgICAqIEBwYXJhbSB0aW1lIOaXtumXtCzpu5jorqQwLjXnp5JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJyZWF0aGVFZmYoZmxhZ05vZGU6IGNjLk5vZGUsIHNoaXJuazogbnVtYmVyID0gMC45LCB0aW1lOiBudW1iZXIgPSAuNSkge1xyXG4gICAgICAgIGZsYWdOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MudHdlZW4oZmxhZ05vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byh0aW1lLCB7IHNjYWxlOiBzaGlybmsgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8odGltZSwgeyBzY2FsZTogMSB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvLnnqpfmiZPlvIDmlYjmnpxcclxuICAgICAqIEBwYXJhbSBmbGFnTm9kZSDmkq3mlL7oioLngrlcclxuICAgICAqIEBwYXJhbSBjYiDmmK/lkKbpnIDopoHlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9wZW5Qb3B1cChmbGFnTm9kZTogY2MuTm9kZSwgY2I/OiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZmxhZ05vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIGxldCBzY2FsZVRvID0gMTtcclxuICAgICAgICBpZiAoY2Mud2luU2l6ZS53aWR0aCAvIDcyMCA8IDEpIHtcclxuICAgICAgICAgICAgc2NhbGVUbyA9IGNjLndpblNpemUud2lkdGggLyA3MjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnR3ZWVuKGZsYWdOb2RlKVxyXG4gICAgICAgICAgICAudG8oLjIsIHsgc2NhbGU6IHNjYWxlVG8gfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5by556qX5YWz6Zet5pWI5p6cXHJcbiAgICAgKiBAcGFyYW0gZmxhZ05vZGUg5pKt5pS+6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gY2Ig5piv5ZCm6ZyA6KaB5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZVBvcHVwKGZsYWdOb2RlOiBjYy5Ob2RlLCBjYj86ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjYy50d2VlbihmbGFnTm9kZSlcclxuICAgICAgICAgICAgLnRvKC4yLCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiAnYmFja0luJyB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5by55Ye65pWI5p6cXHJcbiAgICAgKiBAcGFyYW0gZmxhZ05vZGUg5pKt5pS+6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gdGltZSDml7bpl7Qg6buY6K6k5pe26Ze05Li6MC4zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3BPdXQoZmxhZ05vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IC4zKSB7XHJcbiAgICAgICAgZmxhZ05vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKGZsYWdOb2RlKVxyXG4gICAgICAgICAgICAudG8odGltZSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvLnlm57mlYjmnpxcclxuICAgICAqIEBwYXJhbSBmbGFnTm9kZSDmkq3mlL7oioLngrlcclxuICAgICAqIEBwYXJhbSB0aW1lIOaXtumXtCDpu5jorqTml7bpl7TkuLowLjNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvcEluKGZsYWdOb2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAuMykge1xyXG4gICAgICAgIGNjLnR3ZWVuKGZsYWdOb2RlKVxyXG4gICAgICAgICAgICAudG8odGltZSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2JhY2tJbicgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaZg+WKqFxyXG4gICAgICogQHBhcmFtIGZsYWdOb2RlIOaSreaUvuiKgueCuVxyXG4gICAgICogQHBhcmFtIHRpbWUg5pe26Ze0IOm7mOiupOS4ujAuMlxyXG4gICAgICogQHBhcmFtIHJhbmdlIOaZg+WKqOinkuW6piDpu5jorqTkuLoxMFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcm9ja0FjdGlvbihmbGFnTm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC4wMiwgcmFuZ2U6IG51bWJlciA9IDEwKSB7XHJcbiAgICAgICAgY2MudHdlZW4oZmxhZ05vZGUpXHJcbiAgICAgICAgICAgIC5ieSh0aW1lLCB7IGFuZ2xlOiByYW5nZSB9KVxyXG4gICAgICAgICAgICAuYnkodGltZSwgeyBhbmdsZTogLTIgKiByYW5nZSB9KVxyXG4gICAgICAgICAgICAuYnkodGltZSAqIDAuOCwgeyBhbmdsZTogMiAqIHJhbmdlICogMC44IH0pXHJcbiAgICAgICAgICAgIC5ieSh0aW1lICogMC42LCB7IGFuZ2xlOiAtMiAqIHJhbmdlICogMC42IH0pXHJcbiAgICAgICAgICAgIC5ieSh0aW1lICogMC40LCB7IGFuZ2xlOiAyICogcmFuZ2UgKiAwLjQgfSlcclxuICAgICAgICAgICAgLnRvKHRpbWUgKiAwLjIsIHsgYW5nbGU6IDAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7juWxj+W5leWklui/m+WFpSBcclxuICAgICAqIEBwYXJhbSB0eXBlQSDmlrnlkJEg5LiK5Y+z5LiL5bemXHJcbiAgICAgKiBAcGFyYW0gd2luV2lkdGgg5oyH5a6a5a695bqmXHJcbiAgICAgKiBAcGFyYW0gd2luSGVpZ2h0IOaMh+WumumrmOW6plxyXG4gICAgICogQHBhcmFtIGRlbFRpbWUg5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRNb3ZlSW5TY3JlZW5BY3RpdmUoZmxhZ05vZGU6IGNjLk5vZGUsIHR5cGVBOiBudW1iZXIsIHdpbldpZHRoOiBudW1iZXIsIHdpbkhlaWdodDogbnVtYmVyLCBkZWxUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVBKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZsYWdOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieShkZWxUaW1lLCB7IHBvc2l0aW9uOiBjYy52MigwLCAtd2luSGVpZ2h0KSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2MubW92ZUJ5KGRlbFRpbWUsIDAsIC13aW5IZWlnaHQpO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihmbGFnTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoZGVsVGltZSwgeyBwb3NpdGlvbjogY2MudjIoLXdpbkhlaWdodCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNjLm1vdmVCeShkZWxUaW1lLCAtd2luV2lkdGgsIDApO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihmbGFnTm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoZGVsVGltZSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLXdpbkhlaWdodCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZsYWdOb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieShkZWxUaW1lLCB7IHBvc2l0aW9uOiBjYy52Mih3aW5IZWlnaHQsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgY2lvbiBtb3ZlXHJcbiAgICAgKiBAcGFyYW0gX3Jvb3Qg6YeR5biB54i26IqC54K5KGtvbmcpXHJcbiAgICAgKiBAcGFyYW0gX2l0ZW0g6YeR5biB6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gX3N0YXJ0IFxyXG4gICAgICogQHBhcmFtIF9lbmQgXHJcbiAgICAgKiBAcGFyYW0gW19jYl0gXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBhZGRDaW9uTW92ZShfcm9vdDogY2MuTm9kZSwgX2l0ZW06IHN0cmluZywgX3N0YXJ0OiBjYy5WZWMyLCBfZW5kOiBjYy5WZWMyLCBfY2I/OiBGdW5jdGlvbiwgaXNTdGFyOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgX2RpczogbnVtYmVyID0gTWF0aC5zcXJ0KE1hdGgucG93KChfc3RhcnQueCAtIF9lbmQueCksIDIpICsgTWF0aC5wb3coKF9zdGFydC55IC0gX2VuZC55KSwgMikpO1xyXG4gICAgICAgIC8vIC8vIOi0neWhnuWwlFxyXG4gICAgICAgIC8vIGxldCBfc3BlZWQ6IG51bWJlciA9IF9kaXMgLyA4MCAqIDAuMDU7XHJcblxyXG4gICAgICAgIF9yb290LnpJbmRleCA9IDEwMDtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcbiAgICAgICAgZWxlbWVudCA9IGF3YWl0IEdQb29sLmdldChfaXRlbSk7XHJcbiAgICAgICAgZWxlbWVudC5zY2FsZSA9IDEuMTtcclxuICAgICAgICBlbGVtZW50LnBvc2l0aW9uID0gX3N0YXJ0O1xyXG4gICAgICAgIGVsZW1lbnQub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgbGV0IF9wYXJlbnQgPSBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfY2IpIF9jYigpO1xyXG4gICAgICAgICAgICBpZiAoaXNTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICBHUG9vbC5nZXQoXCJzdGFyXCIpLnRoZW4oKG1Ob2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbU5vZGUucG9zaXRpb24gPSBfZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1Ob2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXMvVUlOb2RlL0FuaW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbU5vZGUuZ2V0Q29tcG9uZW50KFwiU3RhckVuZFwiKS5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEdQb29sLnB1dChlbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdGltZSA9IE1hdGgucmFuZG9tKCkgKiAwLjg7XHJcblxyXG4gICAgICAgIGxldCB4ID0gLTIwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwMSk7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IDEwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMSk7XHJcbiAgICAgICAgLy8gbGV0IHkgPSBfc3RhcnQueSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBsZXQgX2FjdGlvbiA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAvLyAvLyDotJ3loZ7lsJRcclxuICAgICAgICAgICAgLy8gY2Muc3Bhd24oXHJcbiAgICAgICAgICAgIC8vICAgICBjYy5mYWRlSW4oMC4xKSxcclxuICAgICAgICAgICAgLy8gICAgIGNjLm1vdmVCeSgwLjEsIGNjLnYyKHV0aWxzLnJhbmRvbU51bSgtMTAwLCAxMDApLCB1dGlscy5yYW5kb21OdW0oLTEwMCwgMTAwKSkpLmVhc2luZyhjYy5lYXNlT3V0KDEuNSkpLFxyXG4gICAgICAgICAgICAvLyAgICAgY2Muc2NhbGVUbyhfc3BlZWQsIDEpXHJcbiAgICAgICAgICAgIC8vICksXHJcbiAgICAgICAgICAgIC8vIGNjLmRlbGF5VGltZSh1dGlscy5yYW5kb21OdW0oMSwgMTAwKSAvIDEwMDAgKyAwLjEpLFxyXG4gICAgICAgICAgICAvLyBjYy5iZXppZXJUbyhfc3BlZWQsIF9iZXppZXIpLmVhc2luZyhjYy5lYXNlSW4oMS41KSksXHJcbiAgICAgICAgICAgIGNjLmp1bXBUbyh0aW1lLCBjYy52Mih4LCAwKSwgaGVpZ2h0LCAxKSxcclxuICAgICAgICAgICAgY2Muc3Bhd24oY2MubW92ZVRvKDAuNSwgX2VuZCkuZWFzaW5nKGNjLmVhc2VCYWNrSW4oKSksIGNjLnNjYWxlVG8oMC41LCAwLjgpLmVhc2luZyhjYy5lYXNlQmFja0luKCkpKSxcclxuXHJcbiAgICAgICAgICAgIF9wYXJlbnQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBlbGVtZW50LnJ1bkFjdGlvbihfYWN0aW9uKTtcclxuICAgICAgICBfcm9vdC5hZGRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIhuaVsOW+gOS4iua8guaViOaenFxyXG4gICAgICogQHBhcmFtIF9yb290IOaSreaUvuiKgueCuVxyXG4gICAgICogQHBhcmFtIF9zdGFydCDlvIDlp4vlnZDmoIdcclxuICAgICAqIEBwYXJhbSBfZW5kIOe7k+adn+WdkOagh1xyXG4gICAgICogQHBhcmFtIF9jYiDlm57osINcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFNjcm9lTW92ZShfcm9vdDogY2MuTm9kZSwgX3N0YXJ0OiBjYy5WZWMyLCBfZW5kOiBjYy5WZWMyLCBfY2I/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIF9yb290LnpJbmRleCA9IDEwMDtcclxuICAgICAgICBsZXQgdCA9IGNjLnR3ZWVuO1xyXG4gICAgICAgIHQoX3Jvb3QpXHJcbiAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIHQoKS5ieSguMiwgeyBwb3NpdGlvbjogY2MudjIoMCwgMjApIH0pLFxyXG4gICAgICAgICAgICAgICAgdCgpLnRvKC4xLCB7IG9wYWNpdHk6IDEgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuZGVsYXlUaW1lKC4yKVxyXG4gICAgICAgICAgICAudG8oLjIsIHsgcG9zaXRpb246IF9lbmQgfSwgeyBlYXNpbmc6ICdiYWNrSW4nIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChfY2IpIF9jYigpO1xyXG4gICAgICAgICAgICAgICAgX3Jvb3QuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSBuZXcgQWN0aW9ucygpOyJdfQ==