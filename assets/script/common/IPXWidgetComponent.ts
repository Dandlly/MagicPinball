/**
 * IPXWidget适配器
 * 适用于非16:9屏幕贴边UI
 * @author yxx0
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class IPXWidgetComponent extends cc.Component {

    @property(cc.Boolean)
    public isPortait: boolean = true;

    @property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    public left: number = 0;

    @property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    public right: number = 0;

    @property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    public top: number = 0;

    @property({ type: cc.Float, tooltip: "需要勾选对应widget组件对齐的方向方可生效" })
    public bottom: number = 0;

    private widget: cc.Widget = null;

    protected onLoad(): void {
        this.widget = this.node.getComponent(cc.Widget);

        this.checkWidgetStatus();
    }

    /**
     * 检查widget状态
     */
    protected checkWidgetStatus(): void {
        if (!this.widget) return console.error('节点:', this.node.name, 'WidgetComponent 未绑定widget组件');

        const pos = cc.winSize;

        if (this.isPortait) {
            // 屏幕比不为16:9 (竖屏)
            if (!(Math.ceil(pos.height * 9 / 16) > pos.width - 2 && Math.ceil(pos.height * 9 / 16) < pos.width + 2)) {
                this.setWidgetValue();
            }
        } else {
            // 屏幕比不为16:9 (横屏)
            if (!(Math.ceil(pos.width * 9 / 16) > pos.height - 2 && Math.ceil(pos.width * 9 / 16) < pos.height + 2)) {
                this.setWidgetValue();
            }
        }
    }

    /**
     * 设置widget数值
     */
    private setWidgetValue(): void {
        if (cc.winSize.width / cc.winSize.height <= 0.5625) {
            this.top += 65;
        }
        if (this.widget.isAlignBottom) this.widget.bottom = this.bottom;
        if (this.widget.isAlignTop) this.widget.top = this.top;
        if (this.widget.isAlignLeft) this.widget.left = this.left;
        if (this.widget.isAlignRight) this.widget.right = this.right;
    }
}
