"use strict";
cc._RF.push(module, '6b459xQaxpP1Lka21hvD+yY', 'FPanelManager');
// FSDK_ASS/FSript/FModel/FPanelManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FPanelManager;
(function (FPanelManager) {
    FPanelManager.savePanel = {};
    //开启弹窗效果
    function open_eff(panel) {
        panel.active = true;
        var node = panel.getChildByName('mainNode');
        var num = node.getNumberOfRunningActions();
        if (num > 0)
            return;
        node.scale = 0;
        cc.tween(node)
            .to(0.2, { scale: 1 }, { easing: "backOut" })
            .start();
        // node.runAction(seq);
    }
    FPanelManager.open_eff = open_eff;
    //关闭弹窗效果
    function close_eff(panel, isDes, cb) {
        if (isDes === void 0) { isDes = false; }
        if (cb === void 0) { cb = null; }
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
            .to(0.2, { scale: 0 }, { easing: "backIn" })
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
    FPanelManager.close_eff = close_eff;
    //0-弹窗 1-从左边出来
    function openPanel(panel) {
        open_eff(panel);
    }
    FPanelManager.openPanel = openPanel;
    //加载页面left
    function load(name, parent, cb) {
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
                var page = cc.instantiate(prefab);
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
    FPanelManager.load = load;
    //加载
    function loadPage(name, cb, target, showLoad) {
        if (showLoad === void 0) { showLoad = true; }
        if (FPanelManager.savePanel[name]) {
            if (cb) {
                cb.call(target, FPanelManager.savePanel[name]);
            }
            return;
        }
        if (showLoad) {
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
    FPanelManager.loadPage = loadPage;
})(FPanelManager = exports.FPanelManager || (exports.FPanelManager = {}));

cc._RF.pop();