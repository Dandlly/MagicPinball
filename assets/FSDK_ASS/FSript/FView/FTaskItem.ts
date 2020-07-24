import { FTaskPage } from "./FTaskPage";
import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTaskItem extends cc.Component {
    @property(cc.Label)
    mAmount: cc.Label = null;
    @property(cc.Label)
    mTitle: cc.Label = null;
    @property(cc.Sprite)
    mProSprite: cc.Sprite = null;
    @property(cc.Label)
    mProLabel: cc.Label = null;
    @property(cc.Button)
    mCollect: cc.Button = null;
    @property(cc.Node)
    mCard: cc.Node = null;
    @property(cc.Node)
    mAl: cc.Node = null;
    pos = 0;
    parent: cc.Node = null;
    amount = 0;
    onLoad() {

    }

    setOneData(now, i, parent: cc.Node) {
        this.pos = i;
        this.mAl.active = FGlobal.TASK_INFO[this.pos + ''] && FGlobal.TASK_INFO[this.pos + ''] == true;
        this.mCollect.node.active = !this.mAl.active;
        this.parent = parent;
        this.mAmount.string = `$${FConfig.FSDK_CONF.TASK_CONF[0].amount[i]}`;
        this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[0].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[0].target[i]);
        this.mProLabel.string = `${now}/${FConfig.FSDK_CONF.TASK_CONF[0].target[i]}`;
        this.mProSprite.fillRange = now / FConfig.FSDK_CONF.TASK_CONF[0].target[i];
        this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !FGlobal.TASK_INFO[this.pos + ''];
        this.amount = FConfig.FSDK_CONF.TASK_CONF[0].amount[i];
    }

    setMoreData(now, i, parent: cc.Node) {
        this.pos = i;
        this.mAl.active = FGlobal.TASK_INFO[this.pos + ''] && FGlobal.TASK_INFO[this.pos + ''] == true;
        this.mCollect.node.active = !this.mAl.active;
        this.parent = parent;
        this.mAmount.string = `$${FConfig.FSDK_CONF.TASK_CONF[i].amount}`;
        this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[i].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[i].target);
        this.mProLabel.string = `${now}/${FConfig.FSDK_CONF.TASK_CONF[i].target}`;
        this.mProSprite.fillRange = now / FConfig.FSDK_CONF.TASK_CONF[i].target;
        this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !FGlobal.TASK_INFO[this.pos + ''];
        this.amount = FConfig.FSDK_CONF.TASK_CONF[i].amount;
    }

    onEnable() {
        this.mCard.active = false;
    }

    clickCollect() {
        this.moveCard();
    }

    //获取飘的起始点
    getStartPosition() {
        let word = this.node.convertToWorldSpaceAR(this.node.getChildByName('pp').position);
        let start = this.parent.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return start;
    }

    //获取目标点
    getEndPosition() {
        let word = this.parent.getComponent(FTaskPage).mCardNode.convertToWorldSpaceAR(this.parent.getComponent(FTaskPage).mCardNode.getChildByName('card').position);
        let end = this.parent.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return end;
    }

    //卡飘上去
    moveCard() {
        this.mCard.scale = 0.44;
        this.mCard.parent = this.parent.getChildByName('mainNode');
        this.mCard.position = this.getStartPosition();
        this.mCard.active = true;
        this.mCollect.interactable = false;
        this.mCollect.node.active = false;
        this.mAl.active = true;
        cc.tween(this.mCard)
            .to(0.5, { position: this.getEndPosition(), scale: 1 }, { easing: "sineIn" })
            .call(function () {
                this.mCard.active = false;
                this.mCard.parent = this.node;
                FSDK.setCredit("pp", this.amount, FConfig.CREDIT_FROM.TASK_REWARD);
                FGlobal.TASK_INFO[this.pos + ''] = true;
                FSDK.saveData('TASK_INFO', FGlobal.TASK_INFO);
            }.bind(this))
            .start();
    }
}
