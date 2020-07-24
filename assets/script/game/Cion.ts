const { ccclass, property } = cc._decorator;

@ccclass
export default class Cion extends cc.Component {

    coinBigJump() {
        let x = (-(cc.winSize.width / 2) - 200) + Math.random() * (cc.winSize.width + 400);
        let time = Math.random() + 1.5;
        let scale = 0.5 + (((cc.winSize.width + 800) / 2) - Math.abs(x)) / (cc.winSize.width + 300);
        let seq = cc.sequence(
            cc.spawn(
                cc.jumpTo(time, x, (-cc.winSize.height / 2) - 200, Math.floor(Math.random() * 1000), 1),
                cc.scaleTo(time, scale, scale)
            ),
            cc.callFunc(function () {
                GPool.put(this.node);
            }.bind(this))
        )
        this.node.runAction(seq);
    }
}
