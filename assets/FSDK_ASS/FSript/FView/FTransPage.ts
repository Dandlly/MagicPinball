import { FPanelManager } from "../FModel/FPanelManager";
import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTransPage extends cc.Component {
    @property(cc.Label)
    mPP: cc.Label = null;
    @property(cc.Label)
    mCoin: cc.Label = null;
    @property(cc.EditBox)
    mEM1: cc.EditBox = null;
    @property(cc.EditBox)
    mEM2: cc.EditBox = null;
    @property(cc.Node)
    mTos: cc.Node = null;
    @property(cc.ScrollView)
    mTosScroll: cc.ScrollView = null;
    @property(cc.Sprite)
    mTosSp: cc.Sprite = null;
    @property(cc.Sprite)
    mIcon: cc.Sprite = null;
    data = null;
    type = 'task';
    cb = null;
    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.mTosSp.spriteFrame = FNetWorkConfig.data.tos_img;
    }

    onEnable() {
        this.mEM1.string = "";
        this.mEM2.string = "";
        this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
        this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
    }

    onDisable() {
    }

    editBegin(target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = "";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "";
                break;
        }
    }

    editEnd(target, pos) {
        switch (pos) {
            case "1":
                this.mEM1.placeholderLabel.string = FConfig.FSDK_CONF.word.tip10;
                break;
            case "2":
                this.mEM2.placeholderLabel.string = FConfig.FSDK_CONF.word.tip11;
                break;
        }
    }

    setData(data, cb, type = 'task', isCoin = false, icon = null) {
        if (icon) {
            this.mIcon.spriteFrame = icon;
        }
        this.cb = cb;
        this.type = type;
        this.mCoin.node.parent.active = isCoin;
        FLog.normal("什么玩意啊   ", data);
        this.data = data;
        this.mPP.string = "$" + this.data.amount;
        this.mCoin.string = this.data.count;
        // FLog.normal("FTransPage", FConfig.conf,this.data,pos);
    }

    closePage() {
        FPanelManager.close_eff(this.node, true);
    }

    getTrans() {
        if (this.mEM1.string.length > 0) {
            if (this.mEM2.string.length <= 0) {
                FSDK.showToast(`Sorry, the phone can't be empty`);
                return;
            }
            if (this.mEM1.string.indexOf('@') != -1) {
                if (FGlobal.USER_INFO.credit >= this.data.count) {
                    FSDK.setCredit('credit', -this.data.count, 'redeem');
                    FSDK.getTrans(this.data.id, this.mEM1.string, this.mEM2.string, this.type, () => {
                        this.closePage();
                        if (this.cb) {
                            this.cb();
                            this.cb = null;
                        }
                    });
                }
                else {
                    FSDK.showToast('Diamonds is not enough')
                }

            }
            else {
                FSDK.showToast(`Sorry, your paypal email is not legal`);
            }
        }
        else {
            FSDK.showToast(`Sorry, the paypal email can't be empty`);
        }
    }

    showTos() {
        this.mTos.active = true;
        this.mTosScroll.stopAutoScroll();
        this.mTosScroll.scrollToTop(0);
    }

    closeTos() {
        this.mTos.active = false;
    }
}
