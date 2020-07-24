
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/EventConstants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ce67NERfpNl4HAi9IBxjNp', 'EventConstants');
// script/common/EventConstants.ts

"use strict";
/**
 * 事件常量
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvents;
(function (GameEvents) {
    GameEvents["SHOW_TIPS"] = "showTips";
    GameEvents["UI_SHOW"] = "uiShow";
    GameEvents["UPDATAUI"] = "updataUI";
    /** Audio */
    GameEvents["PLAY_BGM"] = "playBgm";
    GameEvents["STOP_BGM"] = "stopBgm";
    GameEvents["PLAY_SOUND_EFFECT"] = "playSoundEffect";
    GameEvents["STOP_SOUND_EFFECT"] = "stopSoundEffect";
    GameEvents["STOP_ALL_SOUND_EFFECT"] = "stopAllSoundEffect";
    GameEvents["SWITCH_MUTE"] = "switchMute";
    GameEvents["SWITCH_SOUND"] = "switchSound";
    // SNAKE  震动
    GameEvents["PLAY_BIGSNAKE"] = "playbigsnake";
    GameEvents["SWITCH_SNAKE"] = "switchsnake";
    GameEvents["UP_ICEPROGRESS"] = "up_IceProgress";
    GameEvents["COUNTDOWN"] = "count_Down";
    // POPUP
    GameEvents["SHOW_POPUP"] = "showPopUp";
    GameEvents["HIDE_POPUP"] = "hidePopUp";
    GameEvents["HIDE_ALL_POPUP"] = "hideAllPopUp";
    // LOAD
    GameEvents["SHOW_LOADING"] = "showLoading";
    GameEvents["HIDE_LOADING"] = "hideLoading";
    GameEvents["GET_REWARDS"] = "get_rewards";
    GameEvents["RED_DETECTION"] = "red_detection";
    GameEvents["GROUPBALLINGAME"] = "ballInGame";
    GameEvents["GROUPBALLINRECYCLE"] = "ballInRecycle";
    GameEvents["OPENVDIEO"] = "openVideo";
    GameEvents["BUBBLETPIS"] = "bubble_Tpis";
    GameEvents["CLOSEBUBBLE"] = "close_bubbleTpis";
    GameEvents["UPDATALEVEL"] = "updatalevel";
    GameEvents["UPDATASCORE"] = "updatascore";
})(GameEvents = exports.GameEvents || (exports.GameEvents = {}));
/**
 * 常量
 */
var GameConstant = /** @class */ (function () {
    function GameConstant() {
    }
    GameConstant.game = null;
    GameConstant.resurgenceVideo = false;
    GameConstant.isShoot = false;
    GameConstant.isAward = false;
    return GameConstant;
}());
exports.GameConstant = GameConstant;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEV2ZW50Q29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7QUFJSCxJQUFZLFVBaURYO0FBakRELFdBQVksVUFBVTtJQUNsQixvQ0FBc0IsQ0FBQTtJQUV0QixnQ0FBa0IsQ0FBQTtJQUNsQixtQ0FBcUIsQ0FBQTtJQUVyQixZQUFZO0lBQ1osa0NBQW9CLENBQUE7SUFDcEIsa0NBQW9CLENBQUE7SUFDcEIsbURBQXFDLENBQUE7SUFDckMsbURBQXFDLENBQUE7SUFDckMsMERBQTRDLENBQUE7SUFFNUMsd0NBQTBCLENBQUE7SUFDMUIsMENBQTRCLENBQUE7SUFFNUIsWUFBWTtJQUNaLDRDQUE4QixDQUFBO0lBQzlCLDBDQUE0QixDQUFBO0lBRTVCLCtDQUFpQyxDQUFBO0lBQ2pDLHNDQUF3QixDQUFBO0lBRXhCLFFBQVE7SUFDUixzQ0FBd0IsQ0FBQTtJQUN4QixzQ0FBd0IsQ0FBQTtJQUN4Qiw2Q0FBK0IsQ0FBQTtJQUUvQixPQUFPO0lBQ1AsMENBQTRCLENBQUE7SUFDNUIsMENBQTRCLENBQUE7SUFFNUIseUNBQTJCLENBQUE7SUFFM0IsNkNBQStCLENBQUE7SUFFL0IsNENBQThCLENBQUE7SUFFOUIsa0RBQW9DLENBQUE7SUFFcEMscUNBQXVCLENBQUE7SUFFdkIsd0NBQTBCLENBQUE7SUFFMUIsOENBQWdDLENBQUE7SUFFaEMseUNBQTJCLENBQUE7SUFFM0IseUNBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQWpEVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQWlEckI7QUFFRDs7R0FFRztBQUNIO0lBQUE7SUFLQSxDQUFDO0lBSmlCLGlCQUFJLEdBQW1CLElBQUksQ0FBQztJQUM1Qiw0QkFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyxvQkFBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixvQkFBTyxHQUFZLEtBQUssQ0FBQztJQUMzQyxtQkFBQztDQUxELEFBS0MsSUFBQTtBQUxZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS6i+S7tuW4uOmHj1xyXG4gKi9cclxuXHJcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vZ2FtZS9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGVudW0gR2FtZUV2ZW50cyB7XHJcbiAgICBTSE9XX1RJUFMgPSAnc2hvd1RpcHMnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5o+Q56S65qGGXHJcblxyXG4gICAgVUlfU0hPVyA9ICd1aVNob3cnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVJ5pi+56S654q25oCBXHJcbiAgICBVUERBVEFVSSA9ICd1cGRhdGFVSScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pu05pawVUlcclxuXHJcbiAgICAvKiogQXVkaW8gKi9cclxuICAgIFBMQVlfQkdNID0gJ3BsYXlCZ20nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7og4zmma/pn7PkuZBcclxuICAgIFNUT1BfQkdNID0gJ3N0b3BCZ20nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmoLlgZzog4zmma/pn7PkuZBcclxuICAgIFBMQVlfU09VTkRfRUZGRUNUID0gJ3BsYXlTb3VuZEVmZmVjdCcsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7pn7PpopFcclxuICAgIFNUT1BfU09VTkRfRUZGRUNUID0gJ3N0b3BTb3VuZEVmZmVjdCcsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmoLlgZzpn7PpopFcclxuICAgIFNUT1BfQUxMX1NPVU5EX0VGRkVDVCA9ICdzdG9wQWxsU291bmRFZmZlY3QnLCAgICAgICAgICAgICAgICAgICAvLyDmmoLlgZzmmoLlgZzlhajpg6jpn7PpopFcclxuXHJcbiAgICBTV0lUQ0hfTVVURSA9ICdzd2l0Y2hNdXRlJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YiH5o2i6Z2Z6Z+zXHJcbiAgICBTV0lUQ0hfU09VTkQgPSAnc3dpdGNoU291bmQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWz6Zet6Z+z6aKRXHJcblxyXG4gICAgLy8gU05BS0UgIOmch+WKqFxyXG4gICAgUExBWV9CSUdTTkFLRSA9ICdwbGF5Ymlnc25ha2UnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaSreaUvumch+WKqFxyXG4gICAgU1dJVENIX1NOQUtFID0gJ3N3aXRjaHNuYWtlJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIh+aNoumch+WKqFxyXG5cclxuICAgIFVQX0lDRVBST0dSRVNTID0gJ3VwX0ljZVByb2dyZXNzJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmm7TmlrDlhrDlnZfov5vluqbmnaFcclxuICAgIENPVU5URE9XTiA9ICdjb3VudF9Eb3duJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDorqHml7blmajmm7TmlrBcclxuXHJcbiAgICAvLyBQT1BVUFxyXG4gICAgU0hPV19QT1BVUCA9ICdzaG93UG9wVXAnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYvuekuuW8ueeql1xyXG4gICAgSElERV9QT1BVUCA9ICdoaWRlUG9wVXAnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+W8ueeql1xyXG4gICAgSElERV9BTExfUE9QVVAgPSAnaGlkZUFsbFBvcFVwJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+aJgOacieW8ueeql1xyXG5cclxuICAgIC8vIExPQURcclxuICAgIFNIT1dfTE9BRElORyA9ICdzaG93TG9hZGluZycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmL7npLrliqDovb3kuK1cclxuICAgIEhJREVfTE9BRElORyA9ICdoaWRlTG9hZGluZycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpmpDol4/liqDovb3kuK1cclxuXHJcbiAgICBHRVRfUkVXQVJEUyA9ICdnZXRfcmV3YXJkcycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5aWW5YqxXHJcblxyXG4gICAgUkVEX0RFVEVDVElPTiA9ICdyZWRfZGV0ZWN0aW9uJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOe6oueCueajgOa1i1xyXG5cclxuICAgIEdST1VQQkFMTElOR0FNRSA9IFwiYmFsbEluR2FtZVwiLFxyXG5cclxuICAgIEdST1VQQkFMTElOUkVDWUNMRSA9IFwiYmFsbEluUmVjeWNsZVwiLFxyXG5cclxuICAgIE9QRU5WRElFTyA9ICdvcGVuVmlkZW8nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmiZPlvIDop4bpopFcclxuXHJcbiAgICBCVUJCTEVUUElTID0gJ2J1YmJsZV9UcGlzJyxcclxuXHJcbiAgICBDTE9TRUJVQkJMRSA9ICdjbG9zZV9idWJibGVUcGlzJyxcclxuXHJcbiAgICBVUERBVEFMRVZFTCA9ICd1cGRhdGFsZXZlbCcsXHJcblxyXG4gICAgVVBEQVRBU0NPUkUgPSAndXBkYXRhc2NvcmUnLFxyXG59XHJcblxyXG4vKipcclxuICog5bi46YePXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnN0YW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZTogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyByZXN1cmdlbmNlVmlkZW86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNTaG9vdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0F3YXJkOiBib29sZWFuID0gZmFsc2U7XHJcbn0iXX0=