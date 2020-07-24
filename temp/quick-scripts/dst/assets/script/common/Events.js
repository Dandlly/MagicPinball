
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Events.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHOztBQVdIO0lBQUE7UUFFSSxPQUFPO1FBQ0MsV0FBTSxHQUFnQixFQUFFLENBQUM7SUFzRXJDLENBQUM7SUFwRUc7Ozs7Ozs7OztPQVNHO0lBQ0ksbUJBQUUsR0FBVCxVQUFVLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFFBQWtCLEVBQUUsSUFBUyxFQUFFLE1BQWM7UUFBZCx1QkFBQSxFQUFBLGNBQWM7UUFDMUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kscUJBQUksR0FBWCxVQUFZLFNBQWlCO1FBQUUsb0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQixtQ0FBb0I7O1FBQy9DLEtBQXVCLFVBQVcsRUFBWCxLQUFBLElBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFBRTtZQUEvQixJQUFNLFFBQVEsU0FBQTtZQUNmLElBQUksUUFBUSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ25ELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUUsRUFBRSxVQUFVO29CQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUM5RDthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksNEJBQVcsR0FBbEIsVUFBbUIsUUFBZ0IsRUFBRSxTQUFpQjtRQUNsRCxLQUF1QixVQUFXLEVBQVgsS0FBQSxJQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXLEVBQUU7WUFBL0IsSUFBTSxRQUFRLFNBQUE7WUFDZixJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEtBQUssU0FBUztnQkFBRSxPQUFPLElBQUksQ0FBQztTQUN2RjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSwrQkFBYyxHQUFyQixVQUFzQixRQUFnQixFQUFFLFNBQWlCO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3BFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0F6RUEsQUF5RUMsSUFBQTtBQUNZLFFBQUEsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5LqL5Lu25o6n5Yi25ZmoXHJcbiAqIEBhdXRob3IgeXh4MFxyXG4gKi9cclxuXHJcbmludGVyZmFjZSBFdmVudEluZm8ge1xyXG4gICAgY29tcE5hbWU6IHN0cmluZzsgICAgICAgLy8g57uE5Lu25ZCN5a2XXHJcbiAgICBjb21wVVVJRDogc3RyaW5nOyAgICAgICAvLyDnu4Tku7Z1dWlkXHJcbiAgICBldmVudE5hbWU6IHN0cmluZzsgICAgICAvLyDkuovku7blkI3lrZdcclxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbjsgICAgIC8vIOWbnuiwg+WHveaVsFxyXG4gICAgdGhhdDogYW55OyAgICAgICAgICAgICAgLy8g5Zue6LCD5Ye95pWw5a+56LGhXHJcbiAgICBpc09uY2U6IGJvb2xlYW47ICAgICAgIC8vIOaYr+WQpuaJp+ihjOS4gOasoeWwseWFs+mXreebkeWQrFxyXG59XHJcblxyXG5jbGFzcyBFdmVudHMge1xyXG5cclxuICAgIC8vIOS6i+S7tuWvueixoVxyXG4gICAgcHJpdmF0ZSBldmVudHM6IEV2ZW50SW5mb1tdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bnm5HlkKxcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wTmFtZSBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wVVVJRCBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBcclxuICAgICAqIEBwYXJhbSB7YW55fSB0aGF0IFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKGNvbXBOYW1lOiBzdHJpbmcsIGNvbXBVVUlEOiBzdHJpbmcsIGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRoYXQ6IGFueSwgaXNPbmNlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcihjb21wTmFtZSwgZXZlbnROYW1lKSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihjb21wTmFtZSwgZXZlbnROYW1lKTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHsgY29tcE5hbWUsIGNvbXBVVUlELCBldmVudE5hbWUsIGNhbGxiYWNrLCB0aGF0LCBpc09uY2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7blj5HpgIFcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7YW55W119IHJlc3RPZkRhdGFcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbWl0KGV2ZW50TmFtZTogc3RyaW5nLCAuLi5yZXN0T2ZEYXRhOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5ldmVudHMpIHtcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjay5hcHBseShsaXN0ZW5lci50aGF0LCByZXN0T2ZEYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5pc09uY2UgPT09IHRydWUpIHsgLy8g5omn6KGM5LiA5qyh5bCx5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lci5jb21wTmFtZSwgbGlzdGVuZXIuZXZlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagoemqjOaYr+WQpuacieebkeWQrOS6i+S7tlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wTmFtZSBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzTGlzdGVuZXIoY29tcE5hbWU6IHN0cmluZywgZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lci5jb21wTmFtZSA9PT0gY29tcE5hbWUgJiYgbGlzdGVuZXIuZXZlbnROYW1lID09PSBldmVudE5hbWUpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTkuovku7bnm5HlkKzlmahcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcE5hbWUgXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUxpc3RlbmVyKGNvbXBOYW1lOiBzdHJpbmcsIGV2ZW50TmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmV2ZW50c1tpXTtcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLmNvbXBOYW1lID09PSBjb21wTmFtZSAmJiBsaXN0ZW5lci5ldmVudE5hbWUgPT09IGV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY29tcE5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY29tcFVVSUQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZXZlbnROYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnRoYXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IG5ldyBFdmVudHMoKTtcclxuIl19