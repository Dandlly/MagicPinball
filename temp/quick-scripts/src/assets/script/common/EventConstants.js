"use strict";
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