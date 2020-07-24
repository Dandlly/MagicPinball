import { FGlobal } from "../FModel/FGlobal";
import { FTwoCard } from "./FTwoCard";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTwoCardItem extends cc.Component {
    @property(cc.Sprite)
    mCard: cc.Sprite = null;
    @property(cc.RichText)
    mTip1: cc.RichText = null;
    @property(cc.RichText)
    mTip2: cc.RichText = null;
    @property(cc.RichText)
    mTip3: cc.RichText = null;
    @property(cc.RichText)
    mTip4: cc.RichText = null;
    @property(cc.ProgressBar)
    mPro: cc.ProgressBar = null;
    @property(cc.Label)
    mProLabel: cc.Label = null;
    @property(cc.Node)
    mHelpBtn: cc.Node = null;
    @property(cc.Button)
    mTransBtn: cc.Button = null;
    @property(cc.Label)
    mStatus: cc.Label = null;
    @property(cc.AudioSource)
    mErrSound: cc.AudioSource = null;
    type = 0;
    @property
    pos = 1;
    mFTwoCard: FTwoCard = null;
    onLoad() {
        this.mTransBtn.node.on(cc.Node.EventType.TOUCH_END, this.clickTrans, this);
        this.mHelpBtn.on(cc.Node.EventType.TOUCH_START, this.clickHelp, this);
        this.mStatus.node.active = false;
        cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
    }

    on_S2C_trans_history(msg) {
        if (!msg.err && msg.data.type == 'twocard') {
            for (let i = 0; i < msg.data.records.length; i++) {
                if (msg.data.records[i].custom_id == FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]) {
                    this.setStatus(msg.data.records[i]);
                }
            }
        }
    }

    //type 0-pp 1-gp 2-ap
    setData(type: number, cardSp: cc.SpriteFrame, parent: FTwoCard) {
        this.mFTwoCard = parent;
        this.type = type;
        this.mCard.spriteFrame = cardSp;
        FLog.normal("什么吗   ", FConfig.FSDK_CONF.word)
        if (this.pos == 1) {
            this.mTip3.string = `Step1: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title}\nStep2: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title}\nStep3: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[2].title}`;
        }
        else {
            this.mTip3.string = FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip8, 500);
        }
        this.getTargetPos();

        if (FGlobal.USER_INFO.trans_record['twocard']) {
            for (let i = 0; i < FGlobal.USER_INFO.trans_record.twocard.length; i++) {
                if (FGlobal.USER_INFO.trans_record.twocard[i] == FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]) {
                    this.setStatus({ status: 0 });
                    return;
                }
            }
        }
        this.mTransBtn.node.active = true;
        this.mStatus.node.active = false;
    }


    //完成到哪一步
    getTargetPos() {
        if (this.pos == 1) {
            this.mHelpBtn.active = false;
        }
        let target: number[] = [FGlobal.USER_INFO.credit_pp, FGlobal.USER_INFO.task, FGlobal.USER_INFO.login_days];
        if (this.type != 0) {
            target[0] = FGlobal.USER_INFO.credit_gp;
        }
        let taskPos = -1;
        for (let i = 0; i < FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target.length; i++) {
            if (target[i] < FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[i].cnt) {
                this.mTip2.string = FGlobal.exWenzi(FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[i].title, target[i]);
                this.mTransBtn.interactable = false;
                taskPos = i;
                break;
            }
            else {
                if (i == 0) {
                    this.mTip3.string = `Step1: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title}\nStep2: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title}`;
                }
                else if (i == 1) {
                    this.mTip3.string = `Step1: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[0].title}\nStep2: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[1].title}\nStep3: ${FConfig.FSDK_CONF.TWO_CARD.card1.target[2].title}`;
                }
                if (i == FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target.length - 1) {
                    taskPos = i;
                    FLog.normal("任务没有达成呢true");
                    this.mTransBtn.interactable = true;
                    this.mTip2.string = "";
                }
            }
        }
        this.mPro.progress = target[taskPos] / FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[taskPos].cnt;
        if (taskPos == 0) {
            this.mProLabel.string = `$${target[0].toFixed(2)}/$${FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[taskPos].cnt.toFixed(2)}`;
        }
        else {
            this.mProLabel.string = `${target[taskPos]}/${FConfig.FSDK_CONF.TWO_CARD['card' + this.pos].target[taskPos].cnt}`;
            if (this.pos == 1) {
                this.mHelpBtn.active = true;
            }
        }
    }

    setCnt(cnt) {
        let num = 0;
        if (this.type == 0) {
            if (this.pos == 1) {
                num = Math.floor(cnt * 0.025 + 211);
            }
            else {
                num = Math.floor(cnt * 0.003 + 12);
            }
        }
        else {
            if (this.pos == 1) {
                num = Math.floor(cnt * 0.033 + 174);
            }
            else {
                num = Math.floor(cnt * 0.004 + 8);
            }
        }
        this.mTip1.string = FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip6, num);
        this.mTip4.string = this.mTip1.string + ",keep it up!";
    }

    onEnable() {
        // this.mTip4.node.parent.stopAllActions();
        this.mTip4.node.parent.active = false;
    }

    //点击了问号
    clickHelp() {
        this.mTip4.node.parent.active = !this.mTip4.node.parent.active;
        // this.mTip4.node.parent.stopAllActions();
        // this.mTip4.node.parent.active = true;
        // this.mTip4.node.parent.opacity = 0;
        // cc.tween(this.mTip4.node.parent)
        //     .to(0.05, { opacity: 255 })
        //     .start();
    }

    closeHelp() {
        // this.mTip4.node.parent.stopAllActions();
        // this.mTip4.node.parent.active = true;
        // cc.tween(this.mTip4.node.parent)
        //     .to(0.05, { opacity: 0 })
        //     .start();
    }

    //点击了out
    clickTrans() {
        if (this.mTransBtn.interactable) {
            // if (this.type != 0) {
            //     FSDK.showToast(FConfig.FSDK_CONF.word.tip9);
            //     return;
            // }
            FLog.normal("啥玩意儿啊  ", this.type, this.pos)
            let data = this.getGift(FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]);
            FSDK.showTransPage(this.mFTwoCard.node, data, () => {
                this.mStatus.node.active = true;
                this.mTransBtn.node.active = false;
                if (!FGlobal.USER_INFO.trans_record.twocard) {
                    FGlobal.USER_INFO.trans_record.twocard = [];
                }
                FGlobal.USER_INFO.trans_record.twocard.push(FConfig.FSDK_CONF.TWO_CARD.cardList[this.type][this.pos - 1]);
            }, 'twocard', false)
        }
        else {
            if (FGlobal.USER_INFO.setting.sound) {
                this.mErrSound.play();
            }
            FLog.normal("任务没有达成呢");
            this.noSuc();
        }
    }

    //取出礼物
    getGift(id) {
        for (let i = 0; i < FConfig.conf.redeem_task.twocard.length; i++) {
            if (id == FConfig.conf.redeem_task.twocard[i].id) {
                return FConfig.conf.redeem_task.twocard[i];
            }
        }
    }

    //提示没完成
    noSuc() {
        this.mTip2.node.stopAllActions();
        this.mTip2.node.scale = 1;
        cc.tween(this.mTip2.node)
            .to(0.15, { scale: 1.1 })
            .to(0.2, { scale: 1 })
            .start();
    }

    setStatus(data) {
        FLog.normal("有没有进来")
        let stutas = 'Processing';
        let color = 'FF8F00';
        switch (data.status) {
            case 0:
                stutas = 'Processing';
                color = 'FF8F00'
                break;
            case 1:
                stutas = 'Finish';
                color = '15C323'
                break;
            case 2:
                stutas = 'In Review';
                color = 'FF8F00'
                break;
            case -1:
                stutas = 'Refuse';
                color = 'D32424'
                break;
            case -2:
                stutas = 'GetFail';
                color = 'D32424'
                break;
        }
        this.mTransBtn.node.active = false;
        this.mStatus.node.active = true;
        this.mStatus.string = stutas;
        this.mStatus.node.color = new cc.Color().fromHEX(color);
    }
}
