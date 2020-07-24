
export default class SimpleSDKEvent {
    static GAME_START = "game_start";
    static HEARTBEAT = "heartbeat";
    static AD_LOAD = "ad_load";
    static AD_LOAD_FAIL = "ad_load_fail";
    static AD_SHOW = "ad_show";
    static AD_SHOW_FAIL = "ad_show_fail";
    static AD_CLICK = "ad_click";

    static AD_TYPE_REWARD = "reward";
    static AD_TYPE_INTERSTITIAL = "interstitial";
    static AD_TYPE_BANNER = "banner";

    static buildAdLoad(adtype: string, unitid: string): {} {
        let r = {
            "adtype": adtype,
            "unitId": unitid
        }
        return r;
    }

    static buildAdLoadFail(adtype: string, unitid: string, errorInfo: string): {} {
        let r = {
            "adtype": adtype,
            "unitId": unitid,
            "errorInfo": errorInfo
        }
        return r;
    }

    static buildMapWithCallback(adtype: string, unitid: string, callbackInfo: {}) {
        let m = {
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
        }
        return m;
    }

    static getOrDefault(callbackInfo: {}, key: string, defaultValue: string): string {
        if (undefined != callbackInfo && callbackInfo != null && key in callbackInfo) {
            let a = callbackInfo[key];
            if (undefined != a && a != null) {
                return a.toString();
            }
            else return defaultValue;
        }
        else return defaultValue;
    }
}