import { events } from "../common/Events";
import { GameEvents, GameConstant } from "../common/EventConstants";
import { user } from "../common/User";
import { utils } from "../common/Utils";
import { PopUpName } from "../common/PopupConstants";
import { AudioName } from "../common/AudioConstands";

const { ccclass, property } = cc._decorator;
/**
 * 作者:Dandlly
 */
@ccclass
export default class gameStart extends cc.Component {

    @property(cc.Node)
    bubbleTips: cc.Node[] = [];

    onLoad() {
        cc.game.on(cc.game.EVENT_HIDE, () => {
            //处理游戏切到后台时的事件
            user.save();
            user.save(1);// 数据存服务端
        }, this);

        cc.game.on(cc.game.EVENT_SHOW, () => {
            //处理游戏切到后台时的事件
            user.save();
            user.save(1);// 数据存服务端
        }, this);
    }

    onDestroy() {
        events.removeListener(this.name, GameEvents.BUBBLETPIS);
        events.removeListener(this.name, GameEvents.CLOSEBUBBLE);
    }

    /**
     * 转盘
     */
    public turntableHandle() {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        if (GameConstant.isShoot) {
            FSDK.showToast("The current state can not be opened");
            return;
        }
        if (user.getSpinCount() >= 15) {
            FSDK.showToast("Spin limit reached today");
            return;
        }
        events.emit(GameEvents.SHOW_POPUP, PopUpName.TURNTABLE);
    }

}
