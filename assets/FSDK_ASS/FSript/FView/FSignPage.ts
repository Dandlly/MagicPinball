import { FGlobal } from "../FModel/FGlobal";
import { FPanelManager } from "../FModel/FPanelManager";
import { FCreditRecord } from "./FCreditRecord";

const { ccclass, property } = cc._decorator;

@ccclass
export class FSignPage extends cc.Component {
    @property(cc.Label)
    mTip1: cc.Label = null;
    @property(cc.Sprite)
    mTransPro: cc.Sprite = null;
    @property(cc.Label)
    mNowNum: cc.Label = null;
    @property(cc.Label)
    mSignDay: cc.Label = null;
    @property(cc.Label)
    mLabelPro: cc.Label = null;
    @property(cc.Button)
    mBtnTrans: cc.Button = null;
    @property(cc.Node)
    mSignNode: cc.Node = null;
    @property(cc.Node)
    mProbaly: cc.Node = null;
    @property(cc.Button)
    mCollect: cc.Button = null;
    @property(cc.Node)
    mCard: cc.Node = null;
    @property(cc.Node)
    mCardNode: cc.Node = null;
    @property(cc.Sprite)
    mProbablyPro: cc.Sprite = null;
    @property(cc.Label)
    mProbablyLab: cc.Label = null;
    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 75 + FGlobal.getScale();
        this.node.getChildByName("mainNode").getComponent(cc.Widget).top = 75 + FGlobal.getScale();
    }

    start() {

    }

    onEnable() {
        this.initData();
        FSDK.addCreditListen(this.creditListen, this);
    }

    onDisable() {
        FSDK.removeCreditListen(this.creditListen, this);
    }

    creditListen(data) {
        if (data.type == 'gp') {
            this.initData();
        }
    }

    initData() {
        this.mTip1.string = `can ${FConfig.FSDK_CONF.word.tip2})`;
        this.mNowNum.string = `$${FGlobal.USER_INFO.credit_gp.toFixed(2)}`;
        this.mTransPro.fillRange = FGlobal.USER_INFO.credit_gp / 100;
        this.mLabelPro.string = `$${FGlobal.USER_INFO.credit_gp.toFixed(2)} / $100.00`;
        this.mCard.active = false;
        this.mBtnTrans.interactable = this.mTransPro.fillRange >= 1;
        this.setSign();
    }

    setSign() {
        this.mProbaly.active = FGlobal.SIGN_INFO.signDay >= 7;
        this.mSignNode.active = !this.mProbaly.active;
        if (FGlobal.SIGN_INFO.signDay < 7) {
            this.mCollect.interactable = false;
            for (let i = 0; i < this.mSignNode.childrenCount; i++) {
                this.mSignNode.children[i].getChildByName('al_bg').active = false;
                this.mSignNode.children[FGlobal.SIGN_INFO.signDay - FGlobal.SIGN_INFO.isSign].getChildByName('al_bg').active = true;
                this.mSignNode.children[i].getChildByName('al').active = i < FGlobal.SIGN_INFO.signDay;
                this.mSignNode.children[i].getChildByName('msg').getChildByName('label1').getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip1;
                this.mSignNode.children[i].getChildByName('msg').getChildByName('label2').getComponent(cc.Label).string = i == 6 ? "50" : FConfig.FSDK_CONF.SIGN_CONF[i] + "";
                if (i == this.mSignNode.childrenCount - 1) {
                    this.mSignNode.children[i].getChildByName('msg').getChildByName('label1').getComponent(cc.Label).string = "Probably get";
                }
                if (!FGlobal.SIGN_INFO.isSign) {
                    this.setScaleAction(this.mSignNode.children[FGlobal.SIGN_INFO.signDay - FGlobal.SIGN_INFO.isSign]);
                    this.mCollect.interactable = true;
                }
                else {
                    this.mSignNode.children[i].stopAllActions();
                    this.mSignNode.children[i].scale = 1;
                }
            }
        }
        else {
            this.mProbablyPro.fillRange = FGlobal.SIGN_INFO.signDay / 15;
            this.mProbablyLab.string = FGlobal.SIGN_INFO.signDay + "/" + 15;
            this.mCollect.interactable = this.mProbablyPro.fillRange >= 1 && !FGlobal.SIGN_INFO.isLongSign;
        }
    }

    clickSign() {
        if (FGlobal.SIGN_INFO.signDay < 7) {
            if (!FGlobal.SIGN_INFO.isSign) {
                FGlobal.SIGN_INFO.isSign = 1;
                FGlobal.SIGN_INFO.signDay += 1;
                FSDK.saveData('SIGN_INFO', FGlobal.SIGN_INFO);
                this.moveCard();
            }
        }
        else {
            if (!FGlobal.SIGN_INFO.isLongSign) {
                FGlobal.SIGN_INFO.isLongSign = 1;
                FSDK.saveData('SIGN_INFO', FGlobal.SIGN_INFO);
                this.moveCard(1);
            }
        }
        this.mCollect.interactable = false;
    }

    setScaleAction(node: cc.Node) {
        cc.tween(node)
            .repeatForever(
                cc.tween()
                    .to(1, { scale: 1.1 })
                    .to(1, { scale: 1 })
            )
            .start()
    }

    closePage() {
        this.node.parent = null;
    }

    //卡飘上去
    moveCard(type = 0) {
        this.mCard.active = true;
        if (type) {
            this.mCard.scale = 0.45;
            this.mCard.position = this.getStartPosition(this.mProbaly.getChildByName('card'));
        }
        else {
            this.mCard.scale = 0.23;
            this.mCard.position = this.getStartPosition(this.mSignNode.children[FGlobal.SIGN_INFO.signDay - 1]);
        }
        cc.tween(this.mCard)
            // .by(0.2,{x:0,y:-40})
            .to(0.5, { position: this.getEndPosition(), scale: 1 }, { easing: "sineIn" })
            .call(function () {
                this.mCard.active = false;
                if (type) {
                    FSDK.setCredit("gp", 10, FConfig.CREDIT_FROM.SIGN_IN);
                }
                else {
                    FSDK.setCredit("gp", FConfig.FSDK_CONF.SIGN_CONF[FGlobal.SIGN_INFO.signDay - 1], FConfig.CREDIT_FROM.SIGN_IN);
                }
            }.bind(this))
            .start();
    }

    //获取飘的起始点
    getStartPosition(node: cc.Node) {
        let word = node.parent.convertToWorldSpaceAR(node.position);
        let start = this.node.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return start;
    }
    //获取目标点
    getEndPosition() {
        let word = this.mCardNode.convertToWorldSpaceAR(this.mCardNode.getChildByName('card').position);
        let end = this.node.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return end;
    }

    //历史记录
    gpRecord() {
        FPanelManager.load('FCreditRecord', this.node, function (panel: cc.Node) {
            panel.getComponent(FCreditRecord).setType('gp');
        }.bind(this));
    }

    getTrans() {
        FSDK.showToast(`You have abnormal behaviors,${FConfig.FSDK_CONF.word.tip2} failed`);
    }
    // update (dt) {}
}
