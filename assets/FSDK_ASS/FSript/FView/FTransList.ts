import { FGlobal } from "../FModel/FGlobal";
import { FTransItem } from "./FTransItem";
import { FTransInfo } from "./FTransInfo";
import { FSocketSend } from "../FNetWork/FSocketSend";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTransList extends cc.Component {
    @property(cc.Label)
    mMyCoin: cc.Label = null;
    @property(cc.Label)
    mAbout: cc.Label = null;
    @property(cc.Prefab)
    mTransItem: cc.Prefab = null;
    @property(cc.ScrollView)
    mScroll: cc.ScrollView = null
    @property(FTransInfo)
    mFTransInfo: FTransInfo = null;
    @property(cc.Sprite)
    mIcom: cc.Sprite = null;
    @property(cc.SpriteFrame)
    mIconSp: cc.SpriteFrame[] = [];
    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal.getScale();
        this.mScroll.node.getComponent(cc.Widget).top = 330 + FGlobal.getScale();
        FSDK.addCreditListen((data) => {
            if (data.type == 'credit') {
                this.mMyCoin.string = data.num;
            }
        }, this);
    }

    setTask(type = 0, icon = null) {
        if (icon == null) {
            icon = this.mIconSp[type];
        }
        this.mIcom.spriteFrame = icon;
        this.mFTransInfo.mIconSp = icon;
        this.mFTransInfo.mIcon.spriteFrame = icon;
        this.setData(icon);
    }

    onEnable() {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        FSocketSend.C2S_trans_history('list');

    }

    setData(icon) {
        this.mMyCoin.string = FGlobal.USER_INFO.credit + "";
        let abount = FGlobal.USER_INFO.credit / 10000;
        this.mAbout.string = `≈$${abount.toFixed(2)}`;
        if (!this.mScroll.content.childrenCount) {
            for (let i = 0; i < FConfig.conf.redeem_task.list.length; i++) {
                let transItem: cc.Node = cc.instantiate(this.mTransItem);
                transItem.parent = this.mScroll.content;
                transItem.getComponent(FTransItem).setData(FConfig.conf.redeem_task.list[i], this.mFTransInfo, icon);
            }
        }

    }

    closePage() {
        this.node.parent = null;
    }
}
