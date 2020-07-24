import { utils } from "./Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class paoma extends cc.Component {
    @property(cc.Node)
    tAnnounceNode: cc.Node[] = [];

    money = [1, 5, 10, 20, 50, 100];
    rate = [15, 15, 70];
    list = [
        `恭喜@收集了100元红包，并成功兑换`,
        `恭喜@收集了100元话费卡，并成功兑换`,
        `恭喜@达成&元红包兑换条件，并成功兑换`
    ]

    init() {
        let name1 = utils.getEmail();
        let name2 = utils.getEmail();
        this.tAnnounceNode[0].y = 0;
        this.tAnnounceNode[1].y = -57;
        let tips1 = this.list[utils.getNormalityNumByRandom(this.rate)];
        tips1 = tips1.replace('@', name1.toString()).replace('&', this.money[Math.floor(Math.random() * this.money.length)].toString());
        let tips2 = this.list[utils.getNormalityNumByRandom(this.rate)];
        tips2 = tips2.replace('@', name2.toString()).replace('&', this.money[Math.floor(Math.random() * this.money.length)].toString());

        this.tAnnounceNode[0].getChildByName('label').getComponent(cc.Label).string = tips1;
        this.tAnnounceNode[1].getChildByName('label').getComponent(cc.Label).string = tips2;
    }

    start() {

    }

    onEnable() {
        this.node.stopAllActions();
        this.init();
        this.showHorseLamp();
    }

    //显示跑马灯的效果
    showHorseLamp() {
        let time = Math.random() * 3 + 2;
        cc.tween(this.node)
            .delay(time)
            .call(() => {
                cc.tween(this.tAnnounceNode[0])
                    .to(.6, { position: cc.v2(-284, 57) })
                    .start()
                cc.tween(this.tAnnounceNode[1])
                    .to(.6, { position: cc.v2(-284, 0) })
                    .start()
            })
            .delay(0.7)
            .call(() => {
                var obj = this.tAnnounceNode.shift();
                obj.setPosition(cc.v2(-284, -57));
                let name = utils.getEmail();
                let tips1 = this.list[utils.getNormalityNumByRandom(this.rate)];
                tips1 = tips1.replace('@', name.toString()).replace('&', this.money[Math.floor(Math.random() * this.money.length)].toString())

                obj.getChildByName('label').getComponent(cc.Label).string = tips1;
                this.tAnnounceNode.push(obj);
                this.showHorseLamp();
            })
            .start();
        // let seq = cc.sequence(
        //     cc.delayTime(time),
        //     cc.callFunc(function (target) {
        //         this.tAnnounceNode[0].runAction(cc.moveTo(0.6, cc.v2(-284, 57)));
        //         this.tAnnounceNode[1].runAction(cc.moveTo(0.6, cc.v2(-284, 0)));
        //     }, this),
        //     cc.delayTime(0.7),
        //     cc.callFunc(function () {
        //         var obj = this.tAnnounceNode.shift();
        //         obj.setPosition(cc.v2(-284, -57));

        //         let name = utils.getEmail();
        //         let tips1 = this.list[utils.getNormalityNumByRandom(this.rate)];
        //         tips1 = tips1.replace('@', name.toString()).replace('&', this.money[Math.floor(Math.random() * this.money.length)].toString())

        //         obj.getChildByName('label').getComponent(cc.Label).string = tips1;
        //         this.tAnnounceNode.push(obj);
        //         this.showHorseLamp();
        //     }, this))
        // this.node.runAction(seq);
    }

}
