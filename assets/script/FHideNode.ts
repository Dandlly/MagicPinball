import { user } from "./common/User";

const { ccclass, property } = cc._decorator;
/**
 * 黑名单邀请
 */
@ccclass
export default class FHideNode extends cc.Component {
    @property(cc.Node)
    inviteNode: cc.Node[] = [];
    @property(cc.Node)
    invtiyParentNode: cc.Node = null;
    @property(cc.Node)
    ui: cc.Node = null;
    @property(cc.Node)
    turnTableNode: cc.Node = null;

    @property(cc.SpriteFrame)
    icon: cc.SpriteFrame[] = [];

    public onLoad() {
        FSDK.addFlagListen((data) => {
            if (data) {
                this.init();
            }
        }, this)
    }

    public init() {
        this.ui.getChildByName("coin_3").active = true;
        if (user.serverData.isBlack) {
            this.inviteNode[0].active = false;
            this.inviteNode[1].active = false;
        } else {
            if (cc.sys.os == cc.sys.OS_IOS) {
                this.inviteNode[0].active = false;
                this.inviteNode[1].active = false;
                this.turnTableNode.active = true;
                // 显示
                this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[1];
                this.ui.getChildByName("coin_1").active = true;
                this.ui.getChildByName("coin_2").active = true;
            } else {
                // 显示邀请
                this.inviteNode[0].active = true;
                this.inviteNode[1].active = true;
                if (user.serverData.isFlag) {
                    this.ui.getChildByName("coin_1").getChildByName("gp").getComponent(cc.Sprite).spriteFrame = this.icon[0];
                    // 显示
                    this.ui.getChildByName("coin_1").active = true;
                    this.ui.getChildByName("coin_2").active = true;
                    this.turnTableNode.active = true;
                }
            }
        }
        this.ui.active = true;
    }

    /**
     * 邀请方法
     */
    inviteHandle() {
        FSDK.showInvityPage(this.invtiyParentNode);
    }

}
