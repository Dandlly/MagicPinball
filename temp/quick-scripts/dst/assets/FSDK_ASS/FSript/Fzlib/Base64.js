
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/Fzlib/Base64.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38eeeFqhAxO+JNGqWKexBI1', 'Base64');
// FSDK_ASS/FSript/Fzlib/Base64.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Base64 = /** @class */ (function () {
    function Base64() {
        this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }
    Base64.prototype.encode = function (e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = this._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            }
            else if (isNaN(i)) {
                a = 64;
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
        }
        return t;
    };
    Base64.prototype.decode = function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r);
            }
            if (a != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = this._utf8_decode(t);
        return t;
    };
    Base64.prototype._utf8_encode = function (e) {
        var a = [];
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
            }
            else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
            }
            else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
            }
        }
        return t;
    };
    Base64.prototype._utf8_decode = function (e) {
        var t = "";
        var n = 0;
        var c1;
        var c2;
        var c3;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            }
            else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            }
            else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    };
    Base64 = __decorate([
        ccclass
    ], Base64);
    return Base64;
}());
exports.Base64 = Base64;
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRnpsaWJcXEJhc2U2NC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUM7SUFHSTtRQURPLFlBQU8sR0FBRyxtRUFBbUUsQ0FBQztJQUdyRixDQUFDO0lBRU0sdUJBQU0sR0FBYixVQUFjLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2pCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNW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Q1QsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsRUFBRSxDQUFBO2FBQ047aUJBQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQzNCLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNUO2lCQUFNO2dCQUNILEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNUO1NBQ0o7UUFDRCxPQUFPLENBQUMsQ0FBQTtJQUNaLENBQUM7SUFqR1EsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQWtHbEI7SUFBRCxhQUFDO0NBbEdELEFBa0dDLElBQUE7QUFsR1ksd0JBQU07QUFrR2xCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQmFzZTY0IHtcclxuXHJcbiAgICBwdWJsaWMgX2tleVN0ciA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5jb2RlKGUpIHtcclxuICAgICAgICB2YXIgdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIG4sIHIsIGksIHMsIG8sIHUsIGE7XHJcbiAgICAgICAgdmFyIGYgPSAwO1xyXG4gICAgICAgIGUgPSB0aGlzLl91dGY4X2VuY29kZShlKTtcclxuICAgICAgICB3aGlsZSAoZiA8IGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG4gPSBlLmNoYXJDb2RlQXQoZisrKTtcclxuICAgICAgICAgICAgciA9IGUuY2hhckNvZGVBdChmKyspO1xyXG4gICAgICAgICAgICBpID0gZS5jaGFyQ29kZUF0KGYrKyk7XHJcbiAgICAgICAgICAgIHMgPSBuID4+IDI7XHJcbiAgICAgICAgICAgIG8gPSAobiAmIDMpIDw8IDQgfCByID4+IDQ7XHJcbiAgICAgICAgICAgIHUgPSAociAmIDE1KSA8PCAyIHwgaSA+PiA2O1xyXG4gICAgICAgICAgICBhID0gaSAmIDYzO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4ocikpIHtcclxuICAgICAgICAgICAgICAgIHUgPSBhID0gNjRcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc05hTihpKSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IDY0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdCA9IHQgKyB0aGlzLl9rZXlTdHIuY2hhckF0KHMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChvKSArIHRoaXMuX2tleVN0ci5jaGFyQXQodSkgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVjb2RlKGUpIHtcclxuICAgICAgICB2YXIgdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIG4sIHIsIGk7XHJcbiAgICAgICAgdmFyIHMsIG8sIHUsIGE7XHJcbiAgICAgICAgdmFyIGYgPSAwO1xyXG4gICAgICAgIGUgPSBlLnJlcGxhY2UoL1teQS1aYS16MC05Ky89XS9nLCBcIlwiKTtcclxuICAgICAgICB3aGlsZSAoZiA8IGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtcclxuICAgICAgICAgICAgbyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO1xyXG4gICAgICAgICAgICB1ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7XHJcbiAgICAgICAgICAgIGEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTtcclxuICAgICAgICAgICAgbiA9IHMgPDwgMiB8IG8gPj4gNDtcclxuICAgICAgICAgICAgciA9IChvICYgMTUpIDw8IDQgfCB1ID4+IDI7XHJcbiAgICAgICAgICAgIGkgPSAodSAmIDMpIDw8IDYgfCBhO1xyXG4gICAgICAgICAgICB0ID0gdCArIFN0cmluZy5mcm9tQ2hhckNvZGUobik7XHJcbiAgICAgICAgICAgIGlmICh1ICE9IDY0KSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gdCArIFN0cmluZy5mcm9tQ2hhckNvZGUocilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYSAhPSA2NCkge1xyXG4gICAgICAgICAgICAgICAgdCA9IHQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdCA9IHRoaXMuX3V0ZjhfZGVjb2RlKHQpO1xyXG4gICAgICAgIHJldHVybiB0XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3V0ZjhfZW5jb2RlKGU6YW55KSB7XHJcbiAgICAgICAgbGV0IGEgPSBbXTtcclxuICAgICAgICBlID0gZS5yZXBsYWNlKC9ybi9nLCBcIm5cIik7XHJcbiAgICAgICAgdmFyIHQgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IGUuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgaWYgKHIgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHIgPiAxMjcgJiYgciA8IDIwNDgpIHtcclxuICAgICAgICAgICAgICAgIHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyID4+IDYgfCAxOTIpO1xyXG4gICAgICAgICAgICAgICAgdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIgJiA2MyB8IDEyOClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyID4+IDEyIHwgMjI0KTtcclxuICAgICAgICAgICAgICAgIHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyID4+IDYgJiA2MyB8IDEyOCk7XHJcbiAgICAgICAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUociAmIDYzIHwgMTI4KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3V0ZjhfZGVjb2RlKGUpIHtcclxuICAgICAgICB2YXIgdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIG4gPSAwO1xyXG4gICAgICAgIHZhciBjMTtcclxuICAgICAgICB2YXIgYzI7XHJcbiAgICAgICAgdmFyIGMzO1xyXG4gICAgICAgIHZhciByID0gYzEgPSBjMiA9IDA7XHJcbiAgICAgICAgd2hpbGUgKG4gPCBlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByID0gZS5jaGFyQ29kZUF0KG4pO1xyXG4gICAgICAgICAgICBpZiAociA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIpO1xyXG4gICAgICAgICAgICAgICAgbisrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAociA+IDE5MSAmJiByIDwgMjI0KSB7XHJcbiAgICAgICAgICAgICAgICBjMiA9IGUuY2hhckNvZGVBdChuICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHIgJiAzMSkgPDwgNiB8IGMyICYgNjMpO1xyXG4gICAgICAgICAgICAgICAgbiArPSAyXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjMiA9IGUuY2hhckNvZGVBdChuICsgMSk7XHJcbiAgICAgICAgICAgICAgICBjMyA9IGUuY2hhckNvZGVBdChuICsgMik7XHJcbiAgICAgICAgICAgICAgICB0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHIgJiAxNSkgPDwgMTIgfCAoYzIgJiA2MykgPDwgNiB8IGMzICYgNjMpO1xyXG4gICAgICAgICAgICAgICAgbiArPSAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRcclxuICAgIH1cclxufTtcclxuIl19