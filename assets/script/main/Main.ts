import { user } from "../common/User";
import { actions } from "../common/Actions";
import { GameConstant, GameEvents } from "../common/EventConstants";
import { events } from "../common/Events";
import { AudioName } from "../common/AudioConstands";
import { PopUpName } from "../common/PopupConstants";


const { ccclass, property } = cc._decorator;
/**
 * 作者:Dandlly
 */
@ccclass
export default class Main extends cc.Component {
    @property(cc.Node)
    mPlayGameBtn: cc.Node = null;

    @property(cc.Node)
    mtitle: cc.Node = null;

    @property(cc.Node)
    mGameNode: cc.Node = null;

    @property(cc.Node)
    mPaomaNode: cc.Node = null;

    @property(cc.Node)
    mGameOpenNode: cc.Node = null;

    onLoad() {
        if (!cc.sys.isNative) {
            FSDK.openBanner();
        }
        this.init();
    }

    onEnable() {
    }

    /**
     * 初始化脚本
     */
    public init(): void {
        // 添加缓动
        actions.breatheEff(this.mPlayGameBtn);
        actions.breatheEff(this.mtitle, 0.95, 2);

        events.emit(GameEvents.PLAY_BGM, AudioName.MAIN_BGM);
        this.openPm();
    }

    /**
     * 开始游戏
     */
    public playGameHandle(): void {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);

        if (user.getRecordBarrier().length > 0) {
            let _data = [this.mGameNode, this.node];
            events.emit(GameEvents.SHOW_POPUP, PopUpName.READ, null, _data);
            return;
        }

        this.mGameNode.active = true;
        this.node.active = false;
        GameConstant.game.init();
    }

    /**
     * 打开跑马灯
     */
    public openPm(): void {
        FSDK.showMarQuee(this.mPaomaNode);
    }


}
