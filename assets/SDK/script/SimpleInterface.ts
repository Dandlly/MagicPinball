export abstract class SimpleInterface {
    public abstract initWithAdjust(adjustAppkey: string, debug: boolean): void
    public abstract initWithAppsflyer(appsflyerkey: string, appleid: string, debug: boolean): void
    public abstract getNetworkStatus(): number
}

export interface SimpleConfig {
    gameName: string
    appsflyerkey: string,
    appleid: string,
    adjustAppkey: string
    toponAppid: string
    toponKey: string
    rewardPlacementId: string
    interstitialPlacementId: string
    bannePlacementId: string
    bannerWidth: number
    bannerHeight: number
    debug: boolean
}

export interface StaticInfo {
    gameName: string
    pn: string
    deviceId: string
    platform: string
    idfa: string
    uid: string
    sessionId: string

    idfv: string
    android_id: string

    band: string
    model: string
    deviceName: string
    systemVersion: string
    network: string
}

export interface InitSuccessResult {
    package: string,
    appVersion: string,

    deviceId: string,

    idfa: string
    android_id: string
    idfv: string

    band: string
    model: string
    deviceName: string
    systemVersion: string
    network: number
}

export interface SDKError {

}

export interface AttributionInfo {
    network: string
    campaign: string
    adgroup: string
    createive: string
}

export interface SimpleRewardListener {
    onRewardedVideoAdPlayStart(adEntry: string, callbackInfo: {}): void;

    onRewardedVideoAdPlayFailed(adEntry: string, errorInfo: string, callbackInfo: {}): void;

    onRewardedVideoAdClosed(adEntry: string, callbackInfo: {}): void;

    onRewardedVideoAdPlayClicked(adEntry: string, callbackInfo: {}): void;
}


export interface SimpleInterListener {

    onInterstitialAdShow(adEntry: string, callbackInfo: {}): void

    onInterstitialAdClose(adEntry: string, callbackInfo: {}): void

    onInterstitialAdClick(adEntry: string, callbackInfo: {}): void
}

export interface SimpleBannerListener {

    onBannerAdShow(placementId: string, callbackInfo: {}): void

    onBannerAdClick(placementId: string, callbackInfo: {}): void

}