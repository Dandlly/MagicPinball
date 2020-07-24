import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FMarquee extends cc.Component {
    @property(cc.Node)
    mMainNode: cc.Node = null;
    @property(cc.Node)
    mMsg1: cc.Node = null;
    @property(cc.Node)
    mMsg2: cc.Node = null;

    onEnable() {
        this.random = FGlobal.getQuRandom(FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[0], FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[1]);
        this.mMsg1.y = 0;
        this.mMsg2.y = -50;
        this.mMsg1.getChildByName('email').getComponent(cc.Label).string = FGlobal.getEmail();
        this.mMsg2.getChildByName('email').getComponent(cc.Label).string = FGlobal.getEmail();
        let data1 = FGlobal.getMarMsg();
        let data2 = FGlobal.getMarMsg();
        FLog.normal('ssadasdasd  ',data1)

        this.mMsg1.getChildByName('msgNode').getChildByName('type').getComponent(cc.Label).string = data1.desc;
        this.mMsg1.getChildByName('msgNode').getChildByName('type').color = new cc.Color().fromHEX(data1.color)
        this.mMsg2.getChildByName('msgNode').getChildByName('type').getComponent(cc.Label).string = data2.desc;
        this.mMsg2.getChildByName('msgNode').getChildByName('type').color = new cc.Color().fromHEX(data2.color)
        this.mMsg1.getChildByName('msgNode').getChildByName('label').getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip5;
        this.mMsg2.getChildByName('msgNode').getChildByName('label').getComponent(cc.Label).string = FConfig.FSDK_CONF.word.tip5;
        this.mMsg1.getChildByName('msgNode').getChildByName('num').getComponent(cc.Label).string = data1.num;
        this.mMsg2.getChildByName('msgNode').getChildByName('num').getComponent(cc.Label).string = data2.num;
        this.moveUp(this.mMsg1);
        this.moveUp(this.mMsg2);
        FLog.normal("进来了")
    }

    onDisable() {
        this.mMsg2.stopAllActions();
        this.mMsg1.stopAllActions();
    }

    random = 0;
    //往上飘
    moveUp(node: cc.Node) {
        cc.tween(node)
            .delay(this.random)
            .by(1, { y: 50 })
            .call(function () {
                if (node.y == 50) {
                    node.y = -50;
                    node.getChildByName('email').getComponent(cc.Label).string = FGlobal.getEmail();
                    let data = FGlobal.getMarMsg();
                    node.getChildByName('msgNode').getChildByName('type').getComponent(cc.Label).string = data.desc;
                    node.getChildByName('msgNode').getChildByName('type').color = new cc.Color().fromHEX(data.color);
                    node.getChildByName('msgNode').getChildByName('num').getComponent(cc.Label).string = data.num;

                }
                this.moveUp(node);
                if (node.name == 'msg2') {
                    this.random = FGlobal.getQuRandom(FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[0], FConfig.FSDK_CONF.MARQUEE_CONF.fresh_time[1]);
                }
            }.bind(this))
            .start();
    }

    //渐变展示
    showIn() {
        let num = this.mMainNode.getNumberOfRunningActions();
        if (num > 0) return;
        cc.tween(this.mMainNode)
            .to(1, { opacity: 255 })
            .start();
    }

    //渐变隐藏
    hideIn() {
        cc.tween(this.mMainNode)
            .to(1, { opacity: 0 })
            .start();
    }
}
