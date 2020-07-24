/**
 * 弹窗组件
 * @author yxx0
 */

import { PopUpName } from "./PopupConstants";
import { events } from "./Events";
import { GameEvents } from "./EventConstants";
import { actions } from "./Actions";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupComponent extends cc.Component {

    @property(cc.Node)
    nodeMask: cc.Node = null;

    private popups: cc.Node[] = [];
    private list: PopUpName[] = [];

    onLoad(): void {
        // 保存全局方法
        events.on(this.name, this.uuid, GameEvents.SHOW_POPUP, this.show, this);
        events.on(this.name, this.uuid, GameEvents.HIDE_POPUP, this.hide, this);
        events.on(this.name, this.uuid, GameEvents.HIDE_ALL_POPUP, this.hideAll, this);
    }

    /**
     * 显示弹窗
     * @param {PopUpName} name 弹窗名
     * @param {() => void} cb 成功回调
     * @param {any[]} data 弹窗数据(数组类型)
     * @param {boolean} needMask 是否需要蒙层
     */
    private async show(name: PopUpName, cb?: () => void, data: any = null, needMask: boolean = true): Promise<void> {
        if (this.list.some(nName => nName === name)) return;

        const node = await this.getPopUpNode(name);

        const comp = node._components[0] // 私有属性
        if (comp && data) {
            comp._data = data;
        }

        this.node.addChild(node);
        actions.openPopup(node);
        this.nodeMask.active = needMask;

        this.list.push(name);

        this.checkMaskzIndex();

        // 执行回调
        if (cb) cb();
    }

    /**
     * 隐藏弹窗
     * @param {() => void} cb 成功回调
     */
    private hide(cb?: () => void): void {
        if (!this.list.length) return;

        const name = this.list.pop();

        this.node.children.forEach((node) => {
            if (node.name === name) {
                actions.closePopup(node, () => {
                    node.removeFromParent();
                    node.destroy();
                })
            }
        })

        this.checkMaskzIndex();

        // this.nodeMask.active = this.list.length >= 1;
        this.nodeMask.active = false;

        // 执行回调
        if (cb) cb();
    }

    /**
     * 隐藏所有弹窗
     * @param {() => void} cb 成功回调
     */
    private hideAll(cb?: () => void): void {
        if (!this.list.length) return;

        this.list = [];

        this.node.children.forEach((node) => {
            if (this.nodeMask.name === node.name) return;
            actions.closePopup(node, () => {
                node.removeFromParent();
                node.destroy();
            })
        })

        this.nodeMask.active = false;

        // 执行回调
        if (cb) cb();
    }

    /**
     * 获取弹窗节点
     */
    private async getPopUpNode(name: PopUpName | string): Promise<cc.Node> {
        return await this.popups.find(node => node.name === name) || this.createPopUpNode(name);
    }

    /**
     * 加载弹窗节点
     */
    private createPopUpNode(name: PopUpName | string): Promise<cc.Node> {
        events.emit(GameEvents.SHOW_LOADING);

        return new Promise((resolve, reject) => {
            cc.loader.loadRes(`popupPerfab/${name}`, cc.Prefab, (err, res) => {
                if (err) {
                    events.emit(GameEvents.HIDE_LOADING);
                    reject(null);
                }

                const node = cc.instantiate(res);
                this.popups.push(node);
                events.emit(GameEvents.HIDE_LOADING);
                resolve(node);
            })
        })
    }

    /**
     * 刷新maskzIndex
     */
    private checkMaskzIndex(): void {
        const child = this.node.children;

        this.list.forEach((name, index) => {
            child.find(node => node.name === name).zIndex = (index + 1) * 10;
        })

        child.find(node => node.name === "sprite_mask").zIndex = (this.list.length) * 9;
    }
}
