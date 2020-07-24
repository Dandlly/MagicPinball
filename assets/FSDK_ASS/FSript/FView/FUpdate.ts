import { FPanelManager } from "../FModel/FPanelManager";

const { ccclass, property } = cc._decorator;

@ccclass
export class FUpdate extends cc.Component {
    @property(cc.Label)
    mCurrent: cc.Label = null;
    @property(cc.Label)
    mLatest: cc.Label = null;
    @property(cc.Node)
    mBtnClose: cc.Node = null;

    onEnable() {
        this.mCurrent.string = `v${FConfig.VERSION}`;
        this.mLatest.string = `v${FConfig.FSDK_CONF.UPDATE_CONF.ver}`;
        this.mBtnClose.active = !FConfig.FSDK_CONF.UPDATE_CONF.must;
    }

    closePage() {
        FPanelManager.close_eff(this.node,true);
    }

    getUpdate() {
        FNative.jumpShop(FNetWorkConfig.data.pg);
    }
}
