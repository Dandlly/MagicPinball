import { FPanelManager } from "../FModel/FPanelManager";
import { FGlobal } from "../FModel/FGlobal";
import { FSocketSend } from "../FNetWork/FSocketSend";

const { ccclass, property } = cc._decorator;

@ccclass
export class FCardPage extends cc.Component {
    @property(cc.Label)
    mPP: cc.Label = null;
    @property(cc.EditBox)
    mEM1: cc.EditBox = null;
    @property(cc.EditBox)
    mEM2: cc.EditBox = null;
    @property(cc.Node)
    mTos: cc.Node = null;
    @property(cc.ScrollView)
    mTosScroll: cc.ScrollView = null;
    data = null;

    onLoad() {
        this.node.setContentSize(cc.winSize);
    }

    onEnable() {
        this.mEM1.string = "";
        this.mEM2.string = "";
        FSDK.closeBanner();
    }

    onDisable(){
        FSDK.openBanner();
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
                this.mEM1.placeholderLabel.string = "Input your email";
                break;
            case "2":
                this.mEM2.placeholderLabel.string = "Confirm your email";
                break;
        }
    }

    setData(pos) {
        this.data = FConfig.conf.invite_task[pos];
        this.mPP.string = FConfig.FSDK_CONF.word.tip1 + " $" + this.data.amount;
        FLog.normal("FTransPage", FConfig.conf,this.data,pos);
    }

    closePage() {
        FPanelManager.close_eff(this.node, true);
    }

    getTrans() {
        if (FGlobal.USER_INFO.invite_count >= this.data.count) {
            if (this.mEM1.string != this.mEM2.string) {
                FSDK.showToast('Please confirm your email');
                return;
            }
            if (this.mEM1.string.length > 0) {
                if (this.mEM1.string.indexOf('@') != -1) {
                    this.closePage();
                    FSocketSend.C2S_trans(this.data.id, this.mEM1.string, this.mEM1.string, 'invite');
                    FGlobal.invite_task.push(this.data.id);
                    cc.director.emit(FEventID.S2C_trans_history);
                }
                else {
                    FSDK.showToast(`Sorry, your email is not legal`);
                }
            }
            else {
                FSDK.showToast(`Sorry, the email can't be empty`);
            }
        }
        else {
            FSDK.showToast('Sorry, your invitation has not been completed yet');
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
