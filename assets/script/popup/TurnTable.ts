import { utils } from "../common/Utils";
import { user } from "../common/User";
import { events } from "../common/Events";
import { GameEvents } from "../common/EventConstants";
import { PopUpName } from "../common/PopupConstants";
import { AudioName } from "../common/AudioConstands";

const { ccclass, property } = cc._decorator;
/**
 * 轮盘
 */
@ccclass
export default class TurnTable extends cc.Component {
    @property(cc.SpriteFrame)
    iconSpriteFrame: cc.SpriteFrame[] = []// 更换ap gp

    @property(cc.Node)
    iconNode: cc.Node = null;  //  节点

    @property(cc.Node)
    spinNode: cc.Node = null;  //  节点

    @property(cc.Node)
    closeNode: cc.Node = null;  //  节点

    private _data: Array<any> = null
    private _awardArr: any = null;
    private isStart: boolean = false;

    onEnable() {
        this.closeNode.active = true;
        this.spinNode.angle = 0;
        this._awardArr = user.getLumpData().spinAward;
        this.isStart = false;
        
        for (let i = 0; i < this._awardArr.length; i++) {
            if (this.spinNode.children[i + 1].getChildByName("New Label")) {
                this.spinNode.children[i + 1].getChildByName("New Label").getComponent(cc.Label).string = this._awardArr[i].award;
            }
        }

        if (cc.sys.os == cc.sys.OS_IOS) {
            this.iconNode.getComponent(cc.Sprite).spriteFrame = this.iconSpriteFrame[1];
        } else {
            this.iconNode.getComponent(cc.Sprite).spriteFrame = this.iconSpriteFrame[0];
        }


    }

    /**
     * 转盘旋转 （按钮）
     */
    turnAngleHandle() {
        if (this.isStart) {
            FSDK.showToast('The spin is starting');
            return;
        }
        if (!cc.sys.isNative || user.getLumpData().isDebug) {
            this.getAwardFun();
            return;
        }

        if (user.getSpinCount() < 1) {
            this.getAwardFun();
            return;
        } else {
            FSDK.openVideo("spin", () => {
                this.getAwardFun();
            }, this)
        }

    }

    getAwardFun() {
        this.closeNode.active = false;
        this.isStart = true;

        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.LUCK)

        // 增加次数
        let spinCount = user.getSpinCount();
        spinCount += 1;
        user.setSpinCount(spinCount);

        let level = FSDK.getCreditDif();// 等级

        let awardData = ["", 0, "spin", false, false];

        let arrNum: number = utils.randomByWeight([0, 1, 2, 3, 4, 5], user.getLumpData().spinWeight[level]);// 要随机的数组

        if (arrNum == Number(0)) {
            let awardNum: any = FSDK.getCard(1);
            awardData[0] = "gp";
            if (awardNum.num <= 0) {
                arrNum = 2;
            } else {
                awardData[1] = awardNum.num;
            }
        } else if (arrNum == Number(3)) {
            let awardNum: any = FSDK.getCard(2);
            awardData[0] = "pp";
            if (awardNum.num <= 0) {
                arrNum = 2;
            } else {
                awardData[1] = awardNum.num;
            }
        }

        let rotationNum: number = 360 * 10 + (-arrNum * 60);
        cc.tween(this.spinNode)
            .by(4.2, { angle: rotationNum }, { easing: "sineInOut" })
            .delay(.3)
            .call(async () => {
                this.isStart = false;
                if (arrNum != Number(0) && arrNum != 3) {
                    // 打开宝箱
                    let iconPS = await GPool.get('creditPS');
                    iconPS.parent = cc.find("Canvas");

                    FSDK.setCredit('credit', this._awardArr[arrNum].award, "spin");
                    FSDK.showToast(`Congratulations on receiving ${this._awardArr[arrNum].award} gold coins`);

                    events.emit(GameEvents.HIDE_POPUP);
                    return;
                }
                events.emit(GameEvents.SHOW_POPUP, PopUpName.SUPERPRIZE, null, awardData);
                events.emit(GameEvents.HIDE_POPUP);
            })
            .start()
    }

    closeHandle() {
        if (this.isStart) {
            FSDK.showToast('The spin is starting');
            return;
        }

        if (!cc.sys.isNative || user.getLumpData().isDebug) {
            events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
            events.emit(GameEvents.HIDE_POPUP);
            return;
        }

        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        events.emit(GameEvents.HIDE_POPUP);
    }

}
