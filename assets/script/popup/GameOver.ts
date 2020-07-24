import { actions } from "../common/Actions";
import { user } from "../common/User";
import { events } from "../common/Events";
import { GameEvents, GameConstant } from "../common/EventConstants";
import { AudioName } from "../common/AudioConstands";

const { ccclass, property } = cc._decorator;
/**
 * 作者：Dandlly
 * 游戏结算弹窗
 */
@ccclass
export default class GameOver extends cc.Component {
    @property(cc.Node)
    resurgenceNode: cc.Node = null;// 复活

    @property(cc.Node)
    restartNode: cc.Node = null;// 重新开始

    private isDoudle: boolean = false;

    onEnable() {
        this.isDoudle = false;
        if (!GameConstant.resurgenceVideo) {
            GameConstant.resurgenceVideo = true;
            // FSDK.preloadVideo("revive");
        }

        // 呼吸
        actions.breatheEff(this.resurgenceNode);

        if (user.getCurrnetReviveNum() <= 0) {
            this.resurgenceNode.active = false;
            actions.breatheEff(this.restartNode);
        }
    }

    /**
     * 复活
     */
    public resurgenceHandle(): void {
        if (this.isDoudle) return;
        this.isDoudle = true;

        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        if (!cc.sys.isNative || user.getLumpData().isDebug) {
            user.setCurrnetReviveNum();
            GameConstant.game.resurgence();
            events.emit(GameEvents.HIDE_POPUP);
            return;
        }

        FSDK.openVideo("revive", () => {
            user.setCurrnetReviveNum();
            FSDK.openInters(() => {
                GameConstant.game.resurgence();
                events.emit(GameEvents.HIDE_POPUP);
            }, this);
        }, this)
    }

    /**
     * 重新开始
     */
    public restartHandle(): void {
        if (this.isDoudle) return;
        this.isDoudle = true;

        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        GameConstant.game.restartInit();
        events.emit(GameEvents.HIDE_POPUP);
        let num = user.getLumpData().reviveNum;
        user.setCurrnetReviveNum(num);
    }

}
