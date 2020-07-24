"use strict";
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