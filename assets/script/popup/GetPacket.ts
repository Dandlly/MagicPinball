import { events } from "../common/Events";
import { GameEvents, GameConstant } from "../common/EventConstants";
import { AudioName } from "../common/AudioConstands";
import { user } from "../common/User";
import { PopUpName } from "../common/PopupConstants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GetPacket extends cc.Component {
    @property(cc.Node)
    closeThxNode: cc.Node = null; // 关闭按钮

    @property(cc.Node)
    cardNode: cc.Node = null; // 卡片节点

    @property(cc.Node)
    countNode: cc.Node = null; // 金币数量

    @property(cc.SpriteFrame)
    cardIcon: cc.SpriteFrame[] = [];// 卡片iconp

    @property(cc.Label)
    tipsLabel: cc.Label = null;

    @property(cc.Node)
    btnNode: cc.Node[] = []; // 按钮

    @property(cc.Node)
    creditTips: cc.Node = null; // 金币提示

    @property(cc.SpriteFrame)
    noVideo: cc.SpriteFrame = null;

    private _data: Array<any> = null;   // ["gp",1,from ,is,false] 卡片，数量， 哪里传入，是否看视频 false 不看，true 看 （默认为true）

    private _awardNum: number = 0;
    private _name: string = "";// 金币 'credit'  palpay卡 'pp'	谷歌卡 'gp'

    private isClick: boolean = false;
    onEnable() {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.AWARD);
        this.closeThxNode.active = false;
        this.isClick = false;
        this.scheduleOnce(() => {
            this.closeThxNode.active = true;
        }, 2)
        this.init();
    }

    /**
     * 初始化
     */
    init() {
        // 更换图片
        switch (this._data[0]) {
            case "gp":
                this.gpFun();
                this.btnNode[0].active = true;
                this.btnNode[1].active = false;
                this.creditTips.active = false;
                break;
            case "pp":
                this.ppFun();
                this.btnNode[0].active = true;
                this.btnNode[1].active = false;
                this.creditTips.active = false;
                break;
            case "credit":
                this.creditFun();
                this.btnNode[0].active = false;
                this.btnNode[1].active = true;
                this.creditTips.active = true;
                break;
        }

        // 如果是方块传入，则要清楚宝箱并计算
        if (this._data[2] == "Brick") {
            user.setIsRedAndCost(false);
            let num = user.getAwardNumber();
            num += 1;
            user.setAwardNumber(num);
        }

        if (!this._data[3]) {
            this.btnNode[0].getComponent(cc.Sprite).spriteFrame = this.noVideo;
            this.unscheduleAllCallbacks();
        }

        // 数字
        this._awardNum = this._data[1];
        this.countNode.getComponent(cc.Label).string = "$" + this._awardNum.toFixed(2);
    }

    gpFun() {
        this._name = "gp";
        if (user.firstGold < 100) {
            this.tipsLabel.string = `Collect ${(100 - user.firstGold).toFixed(2)} more gift card to exchange $100`;
        } else {
            this.tipsLabel.node.active = false;
        }

        if (cc.sys.os == cc.sys.OS_IOS) {
            this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[1];
        } else {
            this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[0];
        }
    }

    ppFun() {
        this._name = "pp";

        if (user.secondGold < 100) {
            this.tipsLabel.string = `Collect ${(100 - user.secondGold).toFixed(2)} more gift card to exchange $100`;
        } else {
            this.tipsLabel.node.active = false;
        }

        this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[2];
    }

    creditFun() {
        this._name = "credit";
        this.tipsLabel.node.active = false;
        this.countNode.active = false;
        this.cardNode.getComponent(cc.Sprite).spriteFrame = this.cardIcon[3];
    }


    getAwardHandle() {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.AWARD);

        let animCionNum = 0;
        if (this._data[0] == "pp") {
            animCionNum = 1;
        }

        let cb = () => {
            if (this._data[4]) {
                GameConstant.game.removeBarrier(this._data[4]);
                GameConstant.game.isVideoAddBarriers();
            }

            if (GameConstant.isAward) {
                GameConstant.isAward = false;
            }

            GameConstant.game.animCion(this._awardNum, animCionNum);

            FSDK.setCredit(this._data[0], this._awardNum, this._data[2]);

            events.emit(GameEvents.HIDE_POPUP);
        }

        // 不需要看视频
        if (!this._data[3] || !cc.sys.isNative || user.getLumpData().isDebug) {
            cb();
            return;
        }

        FSDK.openVideo(this._data[2], async () => {
            cb();
        }, this);
    }

    closeHandle() {
        if (this.isClick) return;
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.AWARD);
        this.isClick = true;

        if (this._data[0] == "credit") {
            FSDK.setCredit(this._data[0], this._awardNum, this._data[2])
            GameConstant.game.animCion(this._awardNum, 2, false);
        };

        let cb = () => {
            this.closeThxNode.active = false;

            if (this._data[4]) {
                GameConstant.game.removeBarrier(this._data[4]);
                GameConstant.game.isVideoAddBarriers();
            };

            if (GameConstant.isAward) {
                GameConstant.isAward = false;
            };

            events.emit(GameEvents.HIDE_POPUP);
        };

        if (!cc.sys.isNative || user.getLumpData().isDebug) {
            cb();
            return;
        };

        FSDK.openInters(() => {
            cb();
        }, this);
    }

    /**
     * 金币领取方法
     */
    creditHandle() {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.AWARD);

        let cb = async () => {
            this.closeThxNode.active = false;

            if (this._data[4]) {
                GameConstant.game.removeBarrier(this._data[4]);
                GameConstant.game.isVideoAddBarriers();
            };

            if (GameConstant.isAward) {
                GameConstant.isAward = false;
            };

            if (this._data[0] === "credit") {
                let iconPS = await GPool.get('creditPS');
                iconPS.parent = cc.find("Canvas");
                FSDK.showToast(`Congratulations on receiving ${this._awardNum * 2} gold coins`);
            };

            FSDK.setCredit(this._data[0], this._awardNum * 2, this._data[2])
            GameConstant.game.animCion(this._awardNum, 2, false);

            events.emit(GameEvents.HIDE_POPUP);
        }

        if (!cc.sys.isNative || user.getLumpData().isDebug) {
            cb();
            return;
        }

        FSDK.openVideo(this._data[2], () => {
            cb();
        }, this);
    }

}
