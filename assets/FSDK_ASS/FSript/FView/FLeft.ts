import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FLeft extends cc.Component {
    @property(cc.Node)
    mFlagNode: cc.Node[] = [];
    @property(cc.Node)
    mHome: cc.Node = null;
    @property(cc.Label)
    mVer: cc.Label = null;
    @property(cc.Label)
    mCode: cc.Label = null;
    @property(cc.Node)
    mBtn: cc.Node = null;
    @property(cc.Node)
    mSound: cc.Node = null;
    @property(cc.Node)
    mVibration: cc.Node = null;
    @property(cc.Node)
    mMainNode: cc.Node = null;
    @property(cc.Sprite)
    mCreditIcon: cc.Sprite = null;
    @property(cc.SpriteFrame)
    mCreditIconSp: cc.SpriteFrame[] = [];
    mIcon: cc.SpriteFrame = null;
    mType = 0;
    cb = null;
    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.setActive();
        this.mVer.string = FConfig.IS_DEBUG == true ? `debug v${FConfig.VERSION}` : `release v${FConfig.VERSION}`;
        this.mCode.string = FGlobal.USER_INFO.invite_code;
        FSDK.addFlagListen((isFlag) => {
            this.setActive();
        }, this);
        this.mSound.getChildByName('close').active = !FGlobal.USER_INFO.setting.sound;
        this.mVibration.getChildByName('close').active = !FGlobal.USER_INFO.setting.shake;

        FSDK.addCreditListen((data) => {
            this.mFlagNode[0].getChildByName('label').getComponent(cc.Label).string = `$${FGlobal.USER_INFO.credit_pp.toFixed(2)}`;
            this.mFlagNode[1].getChildByName('label').getComponent(cc.Label).string = `$${FGlobal.USER_INFO.credit_gp.toFixed(2)}`;
            this.mFlagNode[2].getChildByName('label').getComponent(cc.Label).string = `$${FGlobal.USER_INFO.credit_gp.toFixed(2)}`;
            this.mFlagNode[3].getChildByName('label').getComponent(cc.Label).string = `${FGlobal.USER_INFO.credit}`;
        }, this);
    }

    setActive() {
        for (let i = 0; i < this.mFlagNode.length; i++) {
            if (!FGlobal.USER_INFO.isBlack && FGlobal.USER_INFO.isFlag) {
                this.mFlagNode[i].active = true;
            }
            else {
                this.mFlagNode[i].active = false;
            }
        }
        this.mFlagNode[4].active = FGlobal.USER_INFO.isFlag;
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            if (!FGlobal.USER_INFO.isBlack && FGlobal.USER_INFO.isFlag) {
                this.mFlagNode[1].active = true;
                this.mFlagNode[2].active = false;
            }
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            if (!FGlobal.USER_INFO.isBlack && FGlobal.USER_INFO.isFlag) {
                this.mFlagNode[2].active = true;
                this.mFlagNode[1].active = false;
            }
            this.mFlagNode[4].active = false;
        }

        this.mFlagNode[0].getChildByName('label').getComponent(cc.Label).string = `$${FGlobal.USER_INFO.credit_pp.toFixed(2)}`;
        this.mFlagNode[1].getChildByName('label').getComponent(cc.Label).string = `$${FGlobal.USER_INFO.credit_gp.toFixed(2)}`;
        this.mFlagNode[2].getChildByName('label').getComponent(cc.Label).string = `$${FGlobal.USER_INFO.credit_gp.toFixed(2)}`;
        this.mFlagNode[3].getChildByName('label').getComponent(cc.Label).string = `${FGlobal.USER_INFO.credit}`;
        this.mFlagNode[4].getChildByName('label').getComponent(cc.Label).string = `${FGlobal.USER_INFO.invite_count}`;
        this.mFlagNode[4].active = false;
    }

    setData(num, cb, type = 0, icon = null) {
        this.mCreditIcon.spriteFrame = this.mCreditIconSp[type];
        this.mIcon = icon;
        this.mType = type;
        this.cb = cb;
        //拉回去
        this.node.getChildByName('bg').active = false;
        this.mMainNode.x = -(cc.winSize.width / 2) - (this.mMainNode.width / 2);
        this.mMainNode.getComponent(cc.Widget).top = 640 + num;
        this.mBtn.getChildByName('icon').scaleX = -1;
    }

    clickBtn() {
        this.mBtn.getChildByName('red').active = false;
        if (this.mMainNode.getNumberOfRunningActions()) return;
        let endX = 0;
        if (this.mMainNode.x < -cc.winSize.width / 2) {
            endX = -(cc.winSize.width / 2) + (this.mMainNode.width / 2);
            this.node.getChildByName('bg').active = true;
            this.mFlagNode[4].getChildByName('label').getComponent(cc.Label).string = `${FGlobal.USER_INFO.invite_count}`;
        }
        else {
            endX = -(cc.winSize.width / 2) - (this.mMainNode.width / 2);
        }
        cc.tween(this.mMainNode)
            .to(0.1, { x: endX })
            .call(() => {
                if (endX < -cc.winSize.width / 2) {
                    this.node.getChildByName('bg').active = false;
                    this.mBtn.getChildByName('icon').scaleX = -1;
                }
                else {
                    this.mBtn.getChildByName('icon').scaleX = 1;
                }
            })
            .start();
    }

    clickPP() {
        FSDK.showTwoCard(0, this.node);
    }

    clickGP() {
        FSDK.showTwoCard(1, this.node);
    }

    clickAP() {
        FSDK.showTwoCard(1, this.node);
    }

    clickCoin() {
        FSDK.showTransList(this.node, this.mType, this.mIcon);
    }

    clickInvite() {
        FSDK.showInvityPage(this.node);
    }

    setSound() {
        FGlobal.USER_INFO.setting.sound = !FGlobal.USER_INFO.setting.sound;
        this.mSound.getChildByName('close').active = !FGlobal.USER_INFO.setting.sound;
        localStorage.setItem('setting', JSON.stringify(FGlobal.USER_INFO.setting));
        if (this.cb) {
            let data = {
                type: 'sound',
                value: FGlobal.USER_INFO.setting.sound
            }
            this.cb(data);
        }
    }

    setShake() {
        FGlobal.USER_INFO.setting.shake = !FGlobal.USER_INFO.setting.shake;
        this.mVibration.getChildByName('close').active = !FGlobal.USER_INFO.setting.shake;
        localStorage.setItem('setting', JSON.stringify(FGlobal.USER_INFO.setting));
        if (this.cb) {
            let data = {
                type: 'shake',
                value: FGlobal.USER_INFO.setting.shake
            }
            this.cb(data);
        }
    }

    clickHome() {
        if (this.cb) {
            let data = {
                type: 'home',
                value: true
            }
            this.cb(data);
        }
        this.clickBtn();
    }
}
