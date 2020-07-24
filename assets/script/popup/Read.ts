import { events } from "../common/Events";
import { GameEvents, GameConstant } from "../common/EventConstants";
import { AudioName } from "../common/AudioConstands";
import { user } from "../common/User";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Read extends cc.Component {
    private _data: any = null;


    noHandle() {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        this._data[0].active = true;
        this._data[1].active = false;
        GameConstant.game.restartInit();
        events.emit(GameEvents.HIDE_ALL_POPUP);
    }

    yesHandle() {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        if (GameConstant.game.barriers.length > 0) {
            this._data[0].active = true;
            this._data[1].active = false;
            events.emit(GameEvents.HIDE_ALL_POPUP);
            return;
        }
        this._data[0].active = true;
        this._data[1].active = false;
        GameConstant.game.init();
        events.emit(GameEvents.HIDE_ALL_POPUP);
    }

    closeHandle() {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        events.emit(GameEvents.HIDE_ALL_POPUP);
    }

}
