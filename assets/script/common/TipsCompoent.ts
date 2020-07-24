import { events } from "./Events";

import { GameEvents } from "./EventConstants";

/**
 * 提示框组件
 * @author yxx0
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class TipsComponent extends cc.Component {

    @property(cc.Node)
    nodeTips: cc.Node = null;

    @property(cc.Label)
    labelTips: cc.Label = null;


    onLoad(): void {
        // 添加为全局节点
        // cc.game.addPersistRootNode(this.node);
        // 保存全局方法
        events.on(this.name, this.uuid, GameEvents.SHOW_TIPS, this.show, this);
    }

    /**
     * 显示提示框
     * @param {string} content 文本内容
     */
    private show(content: string): void {
        this.nodeTips.stopAllActions();
        this.nodeTips.active = true;
        this.labelTips.string = content;
        this.nodeTips.y = -50;
        this.nodeTips.opacity = 0;

        this.nodeTips.runAction(
            cc.sequence(
                cc.spawn(
                    cc.moveTo(.3, cc.v2(0, 0)),
                    cc.fadeIn(.15),
                ),
                cc.delayTime(1),
                cc.spawn(
                    cc.moveTo(.3, cc.v2(0, 50)),
                    cc.fadeOut(.15),
                ),
                cc.callFunc(() => {
                    this.clear();
                })
            )
        )
    }

    private clear(): void {
        this.nodeTips.stopAllActions();
        this.nodeTips.active = false;
        this.nodeTips.y = -50;
        this.labelTips.string = '';
    }
}