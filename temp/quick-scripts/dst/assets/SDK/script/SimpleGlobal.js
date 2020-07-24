
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13f6cpJlw1AWKPzpXxV/+5/', 'SimpleGlobal');
// SDK/script/SimpleGlobal.js

"use strict";

window.SIMPLE_MANAGER = null;
window.SIMPLE_CALLBACK = null;

function set_simple_manager(e) {
  window.SIMPLE_MANAGER = e;
}

function get_simple_manager() {
  return window.SIMPLE_MANAGER;
}

function get_simple_ad() {
  return window.SIMPLE_MANAGER.simpleAd;
}

function get_simple_analytics() {
  return window.SIMPLE_MANAGER.simpleAnalytics;
}

function set_simple_callback(e) {
  window.SIMPLE_CALLBACK = e;
}

function get_simple_callback() {
  return window.SIMPLE_CALLBACK;
}

function get_at() {
  return window.ATJSSDK;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZUdsb2JhbC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJTSU1QTEVfTUFOQUdFUiIsIlNJTVBMRV9DQUxMQkFDSyIsInNldF9zaW1wbGVfbWFuYWdlciIsImUiLCJnZXRfc2ltcGxlX21hbmFnZXIiLCJnZXRfc2ltcGxlX2FkIiwic2ltcGxlQWQiLCJnZXRfc2ltcGxlX2FuYWx5dGljcyIsInNpbXBsZUFuYWx5dGljcyIsInNldF9zaW1wbGVfY2FsbGJhY2siLCJnZXRfc2ltcGxlX2NhbGxiYWNrIiwiZ2V0X2F0IiwiQVRKU1NESyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxjQUFQLEdBQXdCLElBQXhCO0FBQ0FELE1BQU0sQ0FBQ0UsZUFBUCxHQUF5QixJQUF6Qjs7QUFFQSxTQUFTQyxrQkFBVCxDQUE0QkMsQ0FBNUIsRUFBK0I7QUFDM0JKLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxHQUF3QkcsQ0FBeEI7QUFDSDs7QUFFRCxTQUFTQyxrQkFBVCxHQUE4QjtBQUMxQixTQUFPTCxNQUFNLENBQUNDLGNBQWQ7QUFDSDs7QUFFRCxTQUFTSyxhQUFULEdBQXlCO0FBQ3JCLFNBQU9OLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQk0sUUFBN0I7QUFDSDs7QUFFRCxTQUFTQyxvQkFBVCxHQUFnQztBQUM1QixTQUFPUixNQUFNLENBQUNDLGNBQVAsQ0FBc0JRLGVBQTdCO0FBQ0g7O0FBRUQsU0FBU0MsbUJBQVQsQ0FBNkJOLENBQTdCLEVBQWdDO0FBQzVCSixFQUFBQSxNQUFNLENBQUNFLGVBQVAsR0FBeUJFLENBQXpCO0FBQ0g7O0FBRUQsU0FBU08sbUJBQVQsR0FBK0I7QUFDM0IsU0FBT1gsTUFBTSxDQUFDRSxlQUFkO0FBQ0g7O0FBRUQsU0FBU1UsTUFBVCxHQUFrQjtBQUNkLFNBQU9aLE1BQU0sQ0FBQ2EsT0FBZDtBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuU0lNUExFX01BTkFHRVIgPSBudWxsO1xyXG53aW5kb3cuU0lNUExFX0NBTExCQUNLID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIHNldF9zaW1wbGVfbWFuYWdlcihlKSB7XHJcbiAgICB3aW5kb3cuU0lNUExFX01BTkFHRVIgPSBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRfc2ltcGxlX21hbmFnZXIoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LlNJTVBMRV9NQU5BR0VSO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRfc2ltcGxlX2FkKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5TSU1QTEVfTUFOQUdFUi5zaW1wbGVBZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0X3NpbXBsZV9hbmFseXRpY3MoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LlNJTVBMRV9NQU5BR0VSLnNpbXBsZUFuYWx5dGljcztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0X3NpbXBsZV9jYWxsYmFjayhlKSB7XHJcbiAgICB3aW5kb3cuU0lNUExFX0NBTExCQUNLID0gZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0X3NpbXBsZV9jYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB3aW5kb3cuU0lNUExFX0NBTExCQUNLO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRfYXQoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LkFUSlNTREs7XHJcbn0iXX0=