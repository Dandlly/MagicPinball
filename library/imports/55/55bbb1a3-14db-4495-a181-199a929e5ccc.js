"use strict";
cc._RF.push(module, '55bbbGjFNtElaGBGZqSnlzM', 'Events');
// script/common/Events.ts

"use strict";
/**
 * 事件控制器
 * @author yxx0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Events = /** @class */ (function () {
    function Events() {
        // 事件对象
        this.events = [];
    }
    /**
     * 事件监听
     * @public
     * @param {string} compName
     * @param {string} compUUID
     * @param {string} eventName
     * @param {Function} callback
     * @param {any} that
     * @returns
     */
    Events.prototype.on = function (compName, compUUID, eventName, callback, that, isOnce) {
        if (isOnce === void 0) { isOnce = false; }
        if (this.hasListener(compName, eventName))
            this.removeListener(compName, eventName);
        this.events.push({ compName: compName, compUUID: compUUID, eventName: eventName, callback: callback, that: that, isOnce: isOnce });
    };
    /**
     * 事件发送
     * @public
     * @param {string} eventName
     * @param {any[]} restOfData
     * @returns
     */
    Events.prototype.emit = function (eventName) {
        var restOfData = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfData[_i - 1] = arguments[_i];
        }
        for (var _a = 0, _b = this.events; _a < _b.length; _a++) {
            var listener = _b[_a];
            if (listener.eventName === eventName) {
                listener.callback.apply(listener.that, restOfData);
                if (listener.isOnce === true) { // 执行一次就删除
                    this.removeListener(listener.compName, listener.eventName);
                }
            }
        }
    };
    /**
     * 校验是否有监听事件
     * @private
     * @param {string} compName
     * @param {string} eventName
     * @returns
     */
    Events.prototype.hasListener = function (compName, eventName) {
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var listener = _a[_i];
            if (listener.compName === compName && listener.eventName === eventName)
                return true;
        }
        return false;
    };
    /**
     * 移除事件监听器
     * @private
     * @param {string} compName
     * @param {string} eventName
     * @returns
     */
    Events.prototype.removeListener = function (compName, eventName) {
        for (var i = 0; i < this.events.length; i++) {
            var listener = this.events[i];
            if (listener.compName === compName && listener.eventName === eventName) {
                listener.compName = null;
                listener.compUUID = null;
                listener.eventName = null;
                listener.callback = null;
                listener.that = null;
                this.events.splice(i, 1);
                break;
            }
        }
    };
    return Events;
}());
exports.events = new Events();

cc._RF.pop();