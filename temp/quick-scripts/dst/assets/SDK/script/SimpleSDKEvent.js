
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/SDK/script/SimpleSDKEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0651BbgEZB0JuOR+5Y+1zx', 'SimpleSDKEvent');
// SDK/script/SimpleSDKEvent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleSDKEvent = /** @class */ (function () {
    function SimpleSDKEvent() {
    }
    SimpleSDKEvent.buildAdLoad = function (adtype, unitid) {
        var r = {
            "adtype": adtype,
            "unitId": unitid
        };
        return r;
    };
    SimpleSDKEvent.buildAdLoadFail = function (adtype, unitid, errorInfo) {
        var r = {
            "adtype": adtype,
            "unitId": unitid,
            "errorInfo": errorInfo
        };
        return r;
    };
    SimpleSDKEvent.buildMapWithCallback = function (adtype, unitid, callbackInfo) {
        var m = {
            "network_firm_id": SimpleSDKEvent.getOrDefault(callbackInfo, "network_firm_id", ""),
            "adsource_id": SimpleSDKEvent.getOrDefault(callbackInfo, "adsource_id", ""),
            "adsource_index": SimpleSDKEvent.getOrDefault(callbackInfo, "adsource_index", ""),
            "adsource_price": SimpleSDKEvent.getOrDefault(callbackInfo, "adsource_price", ""),
            "adsource_isheaderbidding": SimpleSDKEvent.getOrDefault(callbackInfo, "adsource_isheaderbidding", "false"),
            "publisher_revenue": SimpleSDKEvent.getOrDefault(callbackInfo, "publisher_revenue", "publisher_revenue"),
            "network_type": SimpleSDKEvent.getOrDefault(callbackInfo, "network_type", ""),
            "network_placement_id": SimpleSDKEvent.getOrDefault(callbackInfo, "network_placement_id", ""),
            "adtype": adtype,
            "unitId": unitid
        };
        return m;
    };
    SimpleSDKEvent.getOrDefault = function (callbackInfo, key, defaultValue) {
        if (undefined != callbackInfo && callbackInfo != null && key in callbackInfo) {
            var a = callbackInfo[key];
            if (undefined != a && a != null) {
                return a.toString();
            }
            else
                return defaultValue;
        }
        else
            return defaultValue;
    };
    SimpleSDKEvent.GAME_START = "game_start";
    SimpleSDKEvent.HEARTBEAT = "heartbeat";
    SimpleSDKEvent.AD_LOAD = "ad_load";
    SimpleSDKEvent.AD_LOAD_FAIL = "ad_load_fail";
    SimpleSDKEvent.AD_SHOW = "ad_show";
    SimpleSDKEvent.AD_SHOW_FAIL = "ad_show_fail";
    SimpleSDKEvent.AD_CLICK = "ad_click";
    SimpleSDKEvent.AD_TYPE_REWARD = "reward";
    SimpleSDKEvent.AD_TYPE_INTERSTITIAL = "interstitial";
    SimpleSDKEvent.AD_TYPE_BANNER = "banner";
    return SimpleSDKEvent;
}());
exports.default = SimpleSDKEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU0RLXFxzY3JpcHRcXFNpbXBsZVNES0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQXdEQSxDQUFDO0lBM0NVLDBCQUFXLEdBQWxCLFVBQW1CLE1BQWMsRUFBRSxNQUFjO1FBQzdDLElBQUksQ0FBQyxHQUFHO1lBQ0osUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU07U0FDbkIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLDhCQUFlLEdBQXRCLFVBQXVCLE1BQWMsRUFBRSxNQUFjLEVBQUUsU0FBaUI7UUFDcEUsSUFBSSxDQUFDLEdBQUc7WUFDSixRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsU0FBUztTQUN6QixDQUFBO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sbUNBQW9CLEdBQTNCLFVBQTRCLE1BQWMsRUFBRSxNQUFjLEVBQUUsWUFBZ0I7UUFDeEUsSUFBSSxDQUFDLEdBQUc7WUFDSixpQkFBaUIsRUFBRSxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUM7WUFDbkYsYUFBYSxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUM7WUFDM0UsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ2pGLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztZQUNqRiwwQkFBMEIsRUFBRSxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSwwQkFBMEIsRUFBRSxPQUFPLENBQUM7WUFDMUcsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7WUFDeEcsY0FBYyxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUM7WUFDN0Usc0JBQXNCLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxDQUFDO1lBQzdGLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1NBQ25CLENBQUE7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSwyQkFBWSxHQUFuQixVQUFvQixZQUFnQixFQUFFLEdBQVcsRUFBRSxZQUFvQjtRQUNuRSxJQUFJLFNBQVMsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFO1lBQzFFLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDN0IsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7O2dCQUNJLE9BQU8sWUFBWSxDQUFDO1NBQzVCOztZQUNJLE9BQU8sWUFBWSxDQUFDO0lBQzdCLENBQUM7SUF0RE0seUJBQVUsR0FBRyxZQUFZLENBQUM7SUFDMUIsd0JBQVMsR0FBRyxXQUFXLENBQUM7SUFDeEIsc0JBQU8sR0FBRyxTQUFTLENBQUM7SUFDcEIsMkJBQVksR0FBRyxjQUFjLENBQUM7SUFDOUIsc0JBQU8sR0FBRyxTQUFTLENBQUM7SUFDcEIsMkJBQVksR0FBRyxjQUFjLENBQUM7SUFDOUIsdUJBQVEsR0FBRyxVQUFVLENBQUM7SUFFdEIsNkJBQWMsR0FBRyxRQUFRLENBQUM7SUFDMUIsbUNBQW9CLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLDZCQUFjLEdBQUcsUUFBUSxDQUFDO0lBNkNyQyxxQkFBQztDQXhERCxBQXdEQyxJQUFBO2tCQXhEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVTREtFdmVudCB7XHJcbiAgICBzdGF0aWMgR0FNRV9TVEFSVCA9IFwiZ2FtZV9zdGFydFwiO1xyXG4gICAgc3RhdGljIEhFQVJUQkVBVCA9IFwiaGVhcnRiZWF0XCI7XHJcbiAgICBzdGF0aWMgQURfTE9BRCA9IFwiYWRfbG9hZFwiO1xyXG4gICAgc3RhdGljIEFEX0xPQURfRkFJTCA9IFwiYWRfbG9hZF9mYWlsXCI7XHJcbiAgICBzdGF0aWMgQURfU0hPVyA9IFwiYWRfc2hvd1wiO1xyXG4gICAgc3RhdGljIEFEX1NIT1dfRkFJTCA9IFwiYWRfc2hvd19mYWlsXCI7XHJcbiAgICBzdGF0aWMgQURfQ0xJQ0sgPSBcImFkX2NsaWNrXCI7XHJcblxyXG4gICAgc3RhdGljIEFEX1RZUEVfUkVXQVJEID0gXCJyZXdhcmRcIjtcclxuICAgIHN0YXRpYyBBRF9UWVBFX0lOVEVSU1RJVElBTCA9IFwiaW50ZXJzdGl0aWFsXCI7XHJcbiAgICBzdGF0aWMgQURfVFlQRV9CQU5ORVIgPSBcImJhbm5lclwiO1xyXG5cclxuICAgIHN0YXRpYyBidWlsZEFkTG9hZChhZHR5cGU6IHN0cmluZywgdW5pdGlkOiBzdHJpbmcpOiB7fSB7XHJcbiAgICAgICAgbGV0IHIgPSB7XHJcbiAgICAgICAgICAgIFwiYWR0eXBlXCI6IGFkdHlwZSxcclxuICAgICAgICAgICAgXCJ1bml0SWRcIjogdW5pdGlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBidWlsZEFkTG9hZEZhaWwoYWR0eXBlOiBzdHJpbmcsIHVuaXRpZDogc3RyaW5nLCBlcnJvckluZm86IHN0cmluZyk6IHt9IHtcclxuICAgICAgICBsZXQgciA9IHtcclxuICAgICAgICAgICAgXCJhZHR5cGVcIjogYWR0eXBlLFxyXG4gICAgICAgICAgICBcInVuaXRJZFwiOiB1bml0aWQsXHJcbiAgICAgICAgICAgIFwiZXJyb3JJbmZvXCI6IGVycm9ySW5mb1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYnVpbGRNYXBXaXRoQ2FsbGJhY2soYWR0eXBlOiBzdHJpbmcsIHVuaXRpZDogc3RyaW5nLCBjYWxsYmFja0luZm86IHt9KSB7XHJcbiAgICAgICAgbGV0IG0gPSB7XHJcbiAgICAgICAgICAgIFwibmV0d29ya19maXJtX2lkXCI6IFNpbXBsZVNES0V2ZW50LmdldE9yRGVmYXVsdChjYWxsYmFja0luZm8sIFwibmV0d29ya19maXJtX2lkXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBcImFkc291cmNlX2lkXCI6IFNpbXBsZVNES0V2ZW50LmdldE9yRGVmYXVsdChjYWxsYmFja0luZm8sIFwiYWRzb3VyY2VfaWRcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIFwiYWRzb3VyY2VfaW5kZXhcIjogU2ltcGxlU0RLRXZlbnQuZ2V0T3JEZWZhdWx0KGNhbGxiYWNrSW5mbywgXCJhZHNvdXJjZV9pbmRleFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgXCJhZHNvdXJjZV9wcmljZVwiOiBTaW1wbGVTREtFdmVudC5nZXRPckRlZmF1bHQoY2FsbGJhY2tJbmZvLCBcImFkc291cmNlX3ByaWNlXCIsIFwiXCIpLFxyXG4gICAgICAgICAgICBcImFkc291cmNlX2lzaGVhZGVyYmlkZGluZ1wiOiBTaW1wbGVTREtFdmVudC5nZXRPckRlZmF1bHQoY2FsbGJhY2tJbmZvLCBcImFkc291cmNlX2lzaGVhZGVyYmlkZGluZ1wiLCBcImZhbHNlXCIpLFxyXG4gICAgICAgICAgICBcInB1Ymxpc2hlcl9yZXZlbnVlXCI6IFNpbXBsZVNES0V2ZW50LmdldE9yRGVmYXVsdChjYWxsYmFja0luZm8sIFwicHVibGlzaGVyX3JldmVudWVcIiwgXCJwdWJsaXNoZXJfcmV2ZW51ZVwiKSxcclxuICAgICAgICAgICAgXCJuZXR3b3JrX3R5cGVcIjogU2ltcGxlU0RLRXZlbnQuZ2V0T3JEZWZhdWx0KGNhbGxiYWNrSW5mbywgXCJuZXR3b3JrX3R5cGVcIiwgXCJcIiksXHJcbiAgICAgICAgICAgIFwibmV0d29ya19wbGFjZW1lbnRfaWRcIjogU2ltcGxlU0RLRXZlbnQuZ2V0T3JEZWZhdWx0KGNhbGxiYWNrSW5mbywgXCJuZXR3b3JrX3BsYWNlbWVudF9pZFwiLCBcIlwiKSxcclxuICAgICAgICAgICAgXCJhZHR5cGVcIjogYWR0eXBlLFxyXG4gICAgICAgICAgICBcInVuaXRJZFwiOiB1bml0aWRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE9yRGVmYXVsdChjYWxsYmFja0luZm86IHt9LCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh1bmRlZmluZWQgIT0gY2FsbGJhY2tJbmZvICYmIGNhbGxiYWNrSW5mbyAhPSBudWxsICYmIGtleSBpbiBjYWxsYmFja0luZm8pIHtcclxuICAgICAgICAgICAgbGV0IGEgPSBjYWxsYmFja0luZm9ba2V5XTtcclxuICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCAhPSBhICYmIGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxufSJdfQ==