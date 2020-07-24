import { user } from "./common/User";
import { utils } from "./common/Utils";
import { GameEvents, GameConstant } from "./common/EventConstants";
import { actions } from "./common/Actions";
import { events } from "./common/Events";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FSidebar extends cc.Component {
    @property(cc.SpriteFrame)
    iconSpriteFrame: cc.SpriteFrame = null;

    @property(cc.Node)
    sidebarNode: cc.Node = null;

    /**
     * 礼物初始化
     */
    public init() {
        FSDK.showLeft(this.sidebarNode, -20, (data) => {
            switch (data.type) {
                case "sound":
                    // 声音
                    user.IsMute = data.value;
                    events.emit(GameEvents.SWITCH_MUTE);
                    return;
                case "shake":
                    // 震动
                    user.IsShake = data.value;
                    events.emit(GameEvents.SWITCH_SNAKE);
                    return;
                case "home":
                    // home
                    if (GameConstant.isShoot) return;
                    if (!cc.sys.isNative || user.getLumpData().isDebug) {
                        cc.find('Canvas/game').active = false;
                        cc.find('Canvas/main').active = true;
                        return;
                    }

                    FSDK.openInters(() => {
                        cc.find('Canvas/game').active = false;
                        cc.find('Canvas/main').active = true;
                    }, this);
                    return;
            }
        }, 1)

    }

}
