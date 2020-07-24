
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cce7d7GIXRNdYHQKq/hNR1b', 'SimpleUtils');
// SDK/script/SimpleUtils.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SimpleUtils = /** @class */ (function (_super) {
    __extends(SimpleUtils, _super);
    function SimpleUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleUtils_1 = SimpleUtils;
    SimpleUtils.getTimestamp = function () {
        return Math.round(new Date().getTime() / 1000);
    };
    SimpleUtils.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    SimpleUtils.setDebug = function (debug) {
        this.debug = debug;
    };
    SimpleUtils.log = function (a) {
        if (SimpleUtils_1.debug) {
            cc.log("simple:" + a);
        }
    };
    SimpleUtils.isEditor = function () {
        return !(cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID);
    };
    SimpleUtils.getDictOrDefault = function (dict, key, dv) {
        if (key in dict) {
            return dict[key];
        }
        else {
            return dv;
        }
    };
    var SimpleUtils_1;
    SimpleUtils.debug = true;
    SimpleUtils = SimpleUtils_1 = __decorate([
        ccclass
    ], SimpleUtils);
    return SimpleUtils;
}(cc.Component));
exports.default = SimpleUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBOEJBLENBQUM7b0JBOUJvQixXQUFXO0lBRXJCLHdCQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVNLHdCQUFZLEdBQW5CLFVBQW9CLEdBQUc7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNNLG9CQUFRLEdBQWYsVUFBZ0IsS0FBYztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00sZUFBRyxHQUFWLFVBQVcsQ0FBUztRQUNoQixJQUFJLGFBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDbkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU0sb0JBQVEsR0FBZjtRQUNJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLDRCQUFnQixHQUF2QixVQUF3QixJQUFRLEVBQUUsR0FBVyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFDSTtZQUNELE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDOztJQTVCTSxpQkFBSyxHQUFZLElBQUksQ0FBQztJQURaLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4Qi9CO0lBQUQsa0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QndDLEVBQUUsQ0FBQyxTQUFTLEdBOEJwRDtrQkE5Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZVV0aWxzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWJ1ZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgZ2V0VGltZXN0YW1wKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSYW5kb21JbnQobWF4KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzZXREZWJ1ZyhkZWJ1ZzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcclxuICAgIH1cclxuICAgIHN0YXRpYyBsb2coYTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKFNpbXBsZVV0aWxzLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInNpbXBsZTpcIiArIGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNFZGl0b3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREaWN0T3JEZWZhdWx0KGRpY3Q6IHt9LCBrZXk6IHN0cmluZywgZHYpIHtcclxuICAgICAgICBpZiAoa2V5IGluIGRpY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpY3Rba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkdjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19