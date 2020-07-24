export namespace FPanelManager {
    export let savePanel = {};
    //开启弹窗效果
    export function open_eff(panel: cc.Node) {
        panel.active = true;
        let node = panel.getChildByName('mainNode');
        let num = node.getNumberOfRunningActions();
        if (num > 0) return;

        node.scale = 0;
        cc.tween(node)
        .to(0.2,{scale:1},{easing:"backOut"})
        .start();
        // node.runAction(seq);
    }

    //关闭弹窗效果
    export function close_eff(panel: cc.Node, isDes = false, cb = null) {
        if (panel.getChildByName('mainNode').getNumberOfRunningActions() > 0) {
            return;
        }
        // let seq = cc.sequence(
        //     cc.scaleTo(0.2, 0).easing(cc.easeBackIn()),
        //     cc.callFunc(function () {
        //         panel.active = false;
        //         if (cb) {
        //             cb();
        //         }
        //         if (isDes) {
        //             panel.parent = null;
        //             return;
        //         }

        //     })
        // )
        // panel.getChildByName('mainNode').runAction(seq);
        cc.tween(panel.getChildByName('mainNode'))
        .to(0.2,{scale:0},{easing:"backIn"})
        .call(function () {
            panel.active = false;
            if (cb) {
                cb();
            }
            if (isDes) {
                panel.parent = null;
                return;
            }

        })
        .start();
    }

    //0-弹窗 1-从左边出来
    export function openPanel(panel: cc.Node) {
        open_eff(panel);
    }

    //加载页面left
    export function load(name: string, parent: cc.Node, cb?) {
        if (FPanelManager.savePanel[name]) {
            FPanelManager.savePanel[name].parent = parent;
            FPanelManager.openPanel(FPanelManager.savePanel[name]);
            if (cb) {
                cb(FPanelManager.savePanel[name]);
            }
            return;
        }
        FSDK.showToLoad();
        cc.loader.loadRes('FSDK_RES/' + name, cc.Prefab, function (err, prefab) {
            if (!err) {
                let page = cc.instantiate(prefab);
                FPanelManager.savePanel[name] = page;
                FPanelManager.savePanel[name].parent = parent;
                FPanelManager.openPanel(FPanelManager.savePanel[name]);
                if (cb) {
                    cb(FPanelManager.savePanel[name]);
                }
                FSDK.hideToLoad();
            }
            else {
                FSDK.hideToLoad();
            }
        }.bind(this));
    }

    //加载
    export function loadPage(name, cb, target,showLoad = true) {
        if (FPanelManager.savePanel[name]) {
            if (cb) {
                cb.call(target, FPanelManager.savePanel[name]);
            }
            return;
        }
        if(showLoad){
            FSDK.showToLoad();
        }
        cc.loader.loadRes('FSDK_RES/' + name, cc.Prefab, function (err, prefab) {
            if (!err) {
                FPanelManager.savePanel[name] = cc.instantiate(prefab);
                if (cb) {
                    cb.call(target, FPanelManager.savePanel[name]);
                }
                FSDK.hideToLoad();
            }
            else {
                if (cb) {
                    cb.call(target, null);
                }
                FSDK.hideToLoad();
            }
        });
    }
}