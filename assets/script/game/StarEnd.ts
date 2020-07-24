const { ccclass, property } = cc._decorator;

@ccclass
export default class StarEnd extends cc.Component {
    
    private _dragonBones: dragonBones.ArmatureDisplay = null;

    init() {
        this._dragonBones = this.getComponent(dragonBones.ArmatureDisplay);
        this._dragonBones.playAnimation('play', 1); // 默认状态
        this._dragonBones.addEventListener(dragonBones.EventObject.COMPLETE, this.antmationEventHandler, this);
    }

    antmationEventHandler(event) {
        if (event.type == dragonBones.EventObject.COMPLETE) {
            GPool.put(this.node);
        }
    }

}
