import { FSocketSend } from "../FNetWork/FSocketSend";
import { FPanelManager } from "../FModel/FPanelManager";
import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FCreditRecord extends cc.Component {
    @property(cc.Node)
    mTitle_pp: cc.Node = null;
    @property(cc.Node)
    mTitle_gp: cc.Node = null;
    @property(cc.ScrollView)
    mScroll: cc.ScrollView = null;
    @property(cc.Node)
    mItem: cc.Node = null;
    type = "";
    onLoad() {
        this.node.setContentSize(cc.winSize);
    }

    onEnable() {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        cc.director.on(FEventID.CARD_RECORD, this.cardRecord, this);
    }

    onDisable() {
        cc.director.off(FEventID.CARD_RECORD, this.cardRecord, this);
    }

    closePage() {
        FPanelManager.close_eff(this.node, true);
    }

    setType(type: string) {
        this.type = type;
        this.mTitle_gp.active = this.mTitle_pp.active = false;
        this['mTitle_' + type].active = true;
        FSocketSend.C2S_info(['coins']);
    }

    cardRecord(data) {
        if (data[this.type]) {
            let list = data[this.type];
            for (let i = 0; i < this.mScroll.content.childrenCount; i++) {
                this.mScroll.content.children[i].active = false;
            }
            for (let i = 0; i < list.length; i++) {
                let item: cc.Node = null;
                if (i < this.mScroll.content.childrenCount) {
                    item = this.mScroll.content.children[i];
                    item.active = true;
                }
                else {
                    item = cc.instantiate(this.mItem);
                    item.parent = this.mScroll.content;
                }
                item.getChildByName('bg').active = (i + 1) % 2 != 0;
                item.getChildByName('from').getComponent(cc.Label).string = list[i].from;
                item.getChildByName('change').getComponent(cc.Label).string = "$" + list[i].change.toFixed(2);
                item.getChildByName('amount').getComponent(cc.Label).string = "$" + list[i].amount.toFixed(2);
                item.getChildByName('time').getComponent(cc.Label).string = FGlobal.getDateDay1(list[i].time);
            }
        }
        else{
            for (let i = 0; i < this.mScroll.content.childrenCount; i++) {
                this.mScroll.content.children[i].active = false;
            }
        }
        FLog.normal("历史记录 ", data);
    }
}
