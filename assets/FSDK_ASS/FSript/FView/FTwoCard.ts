import { FTwoCardItem } from "./FTwoCardItem";
import { FGlobal } from "../FModel/FGlobal";
import { FPanelManager } from "../FModel/FPanelManager";
import { FSocketSend } from "../FNetWork/FSocketSend";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTwoCard extends cc.Component {
    @property(cc.SpriteFrame)
    mTitleSp: cc.SpriteFrame[] = [];
    @property(cc.SpriteFrame)
    mCardSp: cc.SpriteFrame[] = [];
    @property(cc.Sprite)
    mTitle: cc.Sprite = null;
    @property(FTwoCardItem)
    mCard1: FTwoCardItem = null;
    @property(FTwoCardItem)
    mCard2: FTwoCardItem = null;

    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal.getScale();
    }

    onEnable() {
        FSocketSend.C2S_trans_history('twocard');
    }

    //0-pp 1-gp 2-ap
    setType(type) {
        if (type == 1) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                type = 1;
            }
            else if (cc.sys.os == cc.sys.OS_IOS) {
                type = 2;
            }
        }
        this.mTitle.spriteFrame = this.mTitleSp[type];
        this.mCard1.setData(type, this.mCardSp[type], this);
        this.mCard2.setData(type, this.mCardSp[type], this);
        let cnt = 0;
        FSDK.getRegCnt(FNetWorkConfig.data.code, (data) => {
            console.log("什么啊  ", data)
            cnt = data[FNetWorkConfig.data.code];
            this.mCard1.setCnt(cnt);
            this.mCard2.setCnt(cnt);
        });
        this.mCard1.setCnt(cnt);
        this.mCard2.setCnt(cnt);
    }

    closePage() {
        this.node.parent = null;
    }

}
