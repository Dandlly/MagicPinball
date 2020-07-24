
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FModel/FPanelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk1vZGVsXFxGUGFuZWxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBaUIsYUFBYSxDQWdIN0I7QUFoSEQsV0FBaUIsYUFBYTtJQUNmLHVCQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzFCLFFBQVE7SUFDUixTQUFnQixRQUFRLENBQUMsS0FBYztRQUNuQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQzNDLElBQUksR0FBRyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBRXBCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDYixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxDQUFDO2FBQ3BDLEtBQUssRUFBRSxDQUFDO1FBQ1QsdUJBQXVCO0lBQzNCLENBQUM7SUFYZSxzQkFBUSxXQVd2QixDQUFBO0lBRUQsUUFBUTtJQUNSLFNBQWdCLFNBQVMsQ0FBQyxLQUFjLEVBQUUsS0FBYSxFQUFFLEVBQVM7UUFBeEIsc0JBQUEsRUFBQSxhQUFhO1FBQUUsbUJBQUEsRUFBQSxTQUFTO1FBQzlELElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNsRSxPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsa0RBQWtEO1FBQ2xELGdDQUFnQztRQUNoQyxnQ0FBZ0M7UUFDaEMsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLG1DQUFtQztRQUNuQyxzQkFBc0I7UUFDdEIsWUFBWTtRQUVaLFNBQVM7UUFDVCxJQUFJO1FBQ0osbURBQW1EO1FBQ25ELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN6QyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxDQUFDO2FBQ25DLElBQUksQ0FBQztZQUNGLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksRUFBRSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxDQUFDO2FBQ1I7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsT0FBTzthQUNWO1FBRUwsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBakNlLHVCQUFTLFlBaUN4QixDQUFBO0lBRUQsY0FBYztJQUNkLFNBQWdCLFNBQVMsQ0FBQyxLQUFjO1FBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRmUsdUJBQVMsWUFFeEIsQ0FBQTtJQUVELFVBQVU7SUFDVixTQUFnQixJQUFJLENBQUMsSUFBWSxFQUFFLE1BQWUsRUFBRSxFQUFHO1FBQ25ELElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDOUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxFQUFFLEVBQUU7Z0JBQ0osRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyQztZQUNELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxHQUFHLEVBQUUsTUFBTTtZQUNsRSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQzlDLGFBQWEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLEVBQUUsRUFBRTtvQkFDSixFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNyQztnQkFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUF6QmUsa0JBQUksT0F5Qm5CLENBQUE7SUFFRCxJQUFJO0lBQ0osU0FBZ0IsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFDLFFBQWU7UUFBZix5QkFBQSxFQUFBLGVBQWU7UUFDckQsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLElBQUksRUFBRSxFQUFFO2dCQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNsRDtZQUNELE9BQU87U0FDVjtRQUNELElBQUcsUUFBUSxFQUFDO1lBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLE1BQU07WUFDbEUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksRUFBRSxFQUFFO29CQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDbEQ7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO2lCQUNJO2dCQUNELElBQUksRUFBRSxFQUFFO29CQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN6QjtnQkFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6QmUsc0JBQVEsV0F5QnZCLENBQUE7QUFDTCxDQUFDLEVBaEhnQixhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQWdIN0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbmFtZXNwYWNlIEZQYW5lbE1hbmFnZXIge1xyXG4gICAgZXhwb3J0IGxldCBzYXZlUGFuZWwgPSB7fTtcclxuICAgIC8v5byA5ZCv5by556qX5pWI5p6cXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gb3Blbl9lZmYocGFuZWw6IGNjLk5vZGUpIHtcclxuICAgICAgICBwYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBub2RlID0gcGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ21haW5Ob2RlJyk7XHJcbiAgICAgICAgbGV0IG51bSA9IG5vZGUuZ2V0TnVtYmVyT2ZSdW5uaW5nQWN0aW9ucygpO1xyXG4gICAgICAgIGlmIChudW0gPiAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgLnRvKDAuMix7c2NhbGU6MX0se2Vhc2luZzpcImJhY2tPdXRcIn0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gbm9kZS5ydW5BY3Rpb24oc2VxKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WFs+mXreW8ueeql+aViOaenFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNsb3NlX2VmZihwYW5lbDogY2MuTm9kZSwgaXNEZXMgPSBmYWxzZSwgY2IgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHBhbmVsLmdldENoaWxkQnlOYW1lKCdtYWluTm9kZScpLmdldE51bWJlck9mUnVubmluZ0FjdGlvbnMoKSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgc2VxID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgLy8gICAgIGNjLnNjYWxlVG8oMC4yLCAwKS5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKSxcclxuICAgICAgICAvLyAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGlzRGVzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcGFuZWwucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIClcclxuICAgICAgICAvLyBwYW5lbC5nZXRDaGlsZEJ5TmFtZSgnbWFpbk5vZGUnKS5ydW5BY3Rpb24oc2VxKTtcclxuICAgICAgICBjYy50d2VlbihwYW5lbC5nZXRDaGlsZEJ5TmFtZSgnbWFpbk5vZGUnKSlcclxuICAgICAgICAudG8oMC4yLHtzY2FsZTowfSx7ZWFzaW5nOlwiYmFja0luXCJ9KVxyXG4gICAgICAgIC5jYWxsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNEZXMpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLzAt5by556qXIDEt5LuO5bem6L655Ye65p2lXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gb3BlblBhbmVsKHBhbmVsOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgb3Blbl9lZmYocGFuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yqg6L296aG16Z2ibGVmdFxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGxvYWQobmFtZTogc3RyaW5nLCBwYXJlbnQ6IGNjLk5vZGUsIGNiPykge1xyXG4gICAgICAgIGlmIChGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXSkge1xyXG4gICAgICAgICAgICBGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgIEZQYW5lbE1hbmFnZXIub3BlblBhbmVsKEZQYW5lbE1hbmFnZXIuc2F2ZVBhbmVsW25hbWVdKTtcclxuICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICBjYihGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGU0RLLnNob3dUb0xvYWQoKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnRlNES19SRVMvJyArIG5hbWUsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICBGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXS5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBGUGFuZWxNYW5hZ2VyLm9wZW5QYW5lbChGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYihGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBGU0RLLmhpZGVUb0xvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEZTREsuaGlkZVRvTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WKoOi9vVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGxvYWRQYWdlKG5hbWUsIGNiLCB0YXJnZXQsc2hvd0xvYWQgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKEZQYW5lbE1hbmFnZXIuc2F2ZVBhbmVsW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgY2IuY2FsbCh0YXJnZXQsIEZQYW5lbE1hbmFnZXIuc2F2ZVBhbmVsW25hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNob3dMb2FkKXtcclxuICAgICAgICAgICAgRlNESy5zaG93VG9Mb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdGU0RLX1JFUy8nICsgbmFtZSwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIEZQYW5lbE1hbmFnZXIuc2F2ZVBhbmVsW25hbWVdID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmNhbGwodGFyZ2V0LCBGUGFuZWxNYW5hZ2VyLnNhdmVQYW5lbFtuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBGU0RLLmhpZGVUb0xvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNiLmNhbGwodGFyZ2V0LCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEZTREsuaGlkZVRvTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=