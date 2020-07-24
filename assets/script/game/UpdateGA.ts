const { ccclass, property } = cc._decorator;

@ccclass
export default class UpdateGA extends cc.Component {
    @property(cc.SpriteFrame)
    icon: cc.SpriteFrame[] = [];

    onLoad() {
        if (cc.sys.os == cc.sys.OS_IOS) {
            this.node.getComponent(cc.Sprite).spriteFrame = this.icon[1];
        } else {
            this.node.getComponent(cc.Sprite).spriteFrame = this.icon[0];
        }
    }

}
