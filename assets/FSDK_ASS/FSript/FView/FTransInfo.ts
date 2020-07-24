import { FPanelManager } from "../FModel/FPanelManager";
import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTransInfo extends cc.Component {
    @property(cc.Sprite)
    mCardIcon: cc.Sprite = null;
    @property(cc.Label)
    mAmount: cc.Label = null;
    @property(cc.Label)
    mCoin: cc.Label = null;
    @property(cc.ProgressBar)
    mPro: cc.ProgressBar = null;
    @property(cc.Label)
    mProLabel: cc.Label = null;
    @property(cc.Label)
    mTaskLabel: cc.Label[] = [];
    @property(cc.Button)
    mRedeemBtn: cc.Button = null;
    @property(cc.RichText)
    mTip: cc.RichText = null;
    @property(cc.AudioSource)
    mErrSound: cc.AudioSource = null;
    data = null;
    confData = null;
    taskPos = -1;
    cb = null;
    @property(cc.Sprite)
    mIcon: cc.Sprite = null;
    mIconSp = null;
    onLoad() {
        this.mRedeemBtn.node.on(cc.Node.EventType.TOUCH_END, this.getTrans, this);
    }

    setData(data) {
        this.taskPos = -1;
        this.data = data.data;
        this.confData = data.confData;
        this.mCardIcon.spriteFrame = this.data.icon;
        this.mAmount.string = "$" + this.data.amount;
        this.mCoin.string = this.confData.coin;
        this.cb = data.cb;
        let cnt = 0;
        FSDK.getRegCnt(FNetWorkConfig.data.code, (data) => {
            cnt = data[FNetWorkConfig.data.code];
            this.mTip.string = FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, this.getCnt(cnt));
        })
        this.mTip.string = FGlobal.exWenzi(FConfig.FSDK_CONF.word.tip12, this.getCnt(cnt));

        this.isTaskSuc();
    }

    //显示任务并且返回是否可以领取
    isTaskSuc() {
        let target: number[] = [FGlobal.USER_INFO.credit, FGlobal.USER_INFO.task, FGlobal.USER_INFO.login_days];
        for (let i = 0; i < 3; i++) {
            this.mTaskLabel[i].node.active = false;
        }
        for (let i = 0; i < 3; i++) {
            let pos = i + 1;
            if (target[i] < this.confData['step' + pos]) {
                this.mTaskLabel[i].node.active = true;
                this.mTaskLabel[i].node.color = new cc.Color().fromHEX('#FFFFFF');
                this.mRedeemBtn.interactable = false;
                if (this.taskPos == -1) {
                    this.taskPos = i;
                }
                this.mTaskLabel[i].string = "Step" + pos + ": " + FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[i], this.confData['step' + pos]);
                break;

            }
            else {
                this.mTaskLabel[i].string = "Step" + pos + ": " + FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[i], this.confData['step' + pos]);
                this.mTaskLabel[i].node.active = true;
                this.mTaskLabel[i].node.color = new cc.Color().fromHEX('#8CFF4B');
                if (i == 2) {
                    this.taskPos = i;
                    this.mRedeemBtn.interactable = true;
                }
            }
        }
        if (this.taskPos == 0) {
            this.mTaskLabel[0].string = FGlobal.exWenzi(FConfig.FSDK_CONF.LIST_CONF.targetTitle[0], this.confData['step' + 1]);
        }
        let pos = this.taskPos + 1;
        this.mPro.progress = target[this.taskPos] / this.confData['step' + pos];
        this.mProLabel.string = `${target[this.taskPos]}/${this.confData['step' + pos]}`;
    }

    closePage() {
        FPanelManager.close_eff(this.node);
    }

    //计算出要显示的人数
    getCnt(count) {
        let cnt = count;
        if (this.confData.type == 1 || this.confData.type == 2) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.07 + 821);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.012 + 258);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.0017 + 70);
                    break;
            }
        }
        else if (this.confData.type == 3) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.06 + 511);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.014 + 198);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.002 + 47);
                    break;
            }
        }
        else if (this.confData.type == 4) {
            switch (this.data.amount) {
                case 10:
                    cnt = Math.floor(count * 0.02 + 144);
                    break;
                case 25:
                    cnt = Math.floor(count * 0.007 + 85);
                    break;
                case 50:
                    cnt = Math.floor(count * 0.0014 + 8);
                    break;
            }
        }
        return cnt;
    }

    getTrans() {
        if (this.mRedeemBtn.interactable) {
            if (this.confData.type != 3) {
                FSDK.showToast(FConfig.FSDK_CONF.word.tip9)
            }
            else {
                FSDK.showTransPage(this.node.parent, this.data, (status) => {
                    if (this.cb) {
                        this.cb();
                        this.cb = null;
                    }
                }, 'list', true, this.mIconSp);
                this.closePage();
            }
        }
        else {
            if (FGlobal.USER_INFO.setting.sound) {
                this.mErrSound.play();
            }
            this.noSuc(this.mTaskLabel[this.taskPos].node)
        }
    }

    //提示没完成
    noSuc(node: cc.Node) {
        node.stopAllActions();
        node.scale = 1;
        cc.tween(node)
            .to(0.15, { scale: 1.1 })
            .to(0.2, { scale: 1 })
            .start();
    }
}
