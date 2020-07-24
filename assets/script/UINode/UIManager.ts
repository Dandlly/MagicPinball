import { user } from "../common/User";
import { events } from "../common/Events";
import { GameEvents } from "../common/EventConstants";
import { PopUpName } from "../common/PopupConstants";
import { AudioName } from "../common/AudioConstands";

const { ccclass, property } = cc._decorator;
/**
 * 作者:Dandlly
 */
@ccclass
export default class UIManager extends cc.Component {
    @property(cc.Label)
    first_Label: cc.Label = null;

    @property(cc.Label)
    second_Label: cc.Label = null;

    @property(cc.Label)
    coin_Label: cc.Label = null;

    @property(cc.Node)
    wxLoginAndSetting: cc.Node[] = [];

    @property(cc.Node)
    FSDKNode: cc.Node = null;

    start() {
        this.initEvents();
        this.init();
    }

    onDestroy() {
        this.removeEvents();
    }

    public initEvents(): void {
        events.on(this.name, this.uuid, GameEvents.UPDATAUI, this.updateIcon, this);

    }

    public removeEvents(): void {
        events.removeListener(this.name, GameEvents.UPDATAUI);
        events.removeListener(this.name, GameEvents.UPDATALEVEL);
        events.removeListener(this.name, GameEvents.UPDATASCORE);
    }

    public init(): void {
        this.first_Label.string = user.firstGold.toFixed(2);
        this.second_Label.string = user.secondGold.toFixed(2);
        this.coin_Label.string = user.credit.toFixed(0);
    }

    public updateIcon(): void {
        this.first_Label.string = user.firstGold.toFixed(2);
        this.second_Label.string = user.secondGold.toFixed(2);
        this.coin_Label.string = user.credit.toFixed(0);
    }

    public firstHandle(): void {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
    }

    public secondHandle(): void {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
    }

    public settingHandle(): void {
        events.emit(GameEvents.PLAY_SOUND_EFFECT, AudioName.BUTTON);
        events.emit(GameEvents.SHOW_POPUP, PopUpName.SETTING);
    }

    public getgpCardHandle() {
        if (user.serverData.isBlack) return;
        FSDK.showTwoCard(1, this.FSDKNode)
    }

    public getppCardHandle() {
        if (user.serverData.isBlack) return;
        FSDK.showTwoCard(0, this.FSDKNode)
    }

    public getCreditHandle() {
        if (user.serverData.isBlack) return;
        FSDK.showTransList(this.FSDKNode, 1)
    }

}   
