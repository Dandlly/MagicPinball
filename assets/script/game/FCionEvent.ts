import { user } from "../common/User";
import { events } from "../common/Events";
import { GameEvents, GameConstant } from "../common/EventConstants";
import { actions } from "../common/Actions";
import { PopUpName } from "../common/PopupConstants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FCionEvent extends cc.Component {
    @property(cc.Node)
    tipsLable: cc.Node[] = [];

    onLoad() {
        this.initEvents();
    }

    initEvents() {
        FSDK.addCreditListen(this.severCb, this);
        events.on(this.name, this.uuid, GameEvents.OPENVDIEO, this.openVidoe, this)
    }

    onDestroy() {
        events.removeListener(this.name, GameEvents.OPENVDIEO);
    }

    /**
    * 服务器回调
    * @param data 
    */
    severCb(data) {
        this.scheduleOnce(() => {
            switch (data.type) {
                case 'gp':
                    this.tipsAnim(0, data.num - user.firstGold);
                    user.firstGold = data.num;
                    break;
                case 'pp':
                    this.tipsAnim(1, data.num - user.secondGold);
                    user.secondGold = data.num;
                    break;
                case 'credit':
                    this.tipsAnim(2, data.num - user.credit);
                    user.credit = data.num;
                    break;
            }
            user.save();
            events.emit(GameEvents.UPDATAUI);
        }, 1);
        FLog.normal('服务器金币数量:', data.num);
    }

    /**
     * tipsAnim
     */
    public tipsAnim(num, updateNum) {
        this.tipsLable[num].stopAllActions();
        this.tipsLable[num].active = false;
        this.tipsLable[num].position = cc.v2(62.5, -5);
        this.tipsLable[num].opacity = 0;
        if (num == 2) {
            this.tipsLable[num].getComponent(cc.Label).string = `+${updateNum}`;
        } else {
            this.tipsLable[num].getComponent(cc.Label).string = `+${updateNum.toFixed(2)}`;
        }
        this.tipsLable[num].active = true;
        let t = cc.tween;
        t(this.tipsLable[num])
            .parallel(
                t().by(.2, { opacity: 255 }, { easing: 'backIn' }),
                t().by(.2, { y: 5 }, { easing: 'backIn' })
            )
            .delay(1.5)
            .call(() => {
                this.tipsLable[num].active = false;
                this.tipsLable[num].position = cc.v2(62.5, -5);
                this.tipsLable[num].opacity = 0;
            })
            .start()
    }

    /**
     * 打开红包弹窗
     * @param videoName red或者hf
     * @param isVideo 是否免费
     */
    openVidoe(videoName, getCardNum: number, isVideo = true) {
        videoName.node.opacity = 255;
        videoName.node.zIndex = 10;
        user.setIsRedAndCost(false);
        GameConstant.isAward = true;
        user.save();
        cc.tween(videoName.node)
            .to(.3, { position: cc.v2(0, 0), scale: 2 })
            .call(async () => {
                // videoName.node.opacity = 0;
                // videoName.node.zIndex = 1;

                let awardNum: any = FSDK.getRandomReward()
                let _data = ["", awardNum.num, "Brick", isVideo, videoName];

                switch (awardNum.type) {
                    case 1:
                        _data[0] = "gp";
                        break;
                    case 2:
                        _data[0] = "pp";
                        break;
                    case 3:
                        _data[0] = "credit";
                        _data[1] = user.getLumpData().bxCredit;
                        break;
                }

                events.emit(GameEvents.SHOW_POPUP, PopUpName.SUPERPRIZE, null, _data);

                if (user.IsShake) {
                    FSDK.shake(50);
                }
            })
            .start();
    }
}
