/**
 * 事件常量
 */

import GameController from "../game/GameController";

export enum GameEvents {
    SHOW_TIPS = 'showTips',                                         // 提示框

    UI_SHOW = 'uiShow',                                             // UI显示状态
    UPDATAUI = 'updataUI',                                          // 更新UI

    /** Audio */
    PLAY_BGM = 'playBgm',                                           // 播放背景音乐
    STOP_BGM = 'stopBgm',                                           // 暂停背景音乐
    PLAY_SOUND_EFFECT = 'playSoundEffect',                          // 播放音频
    STOP_SOUND_EFFECT = 'stopSoundEffect',                          // 暂停音频
    STOP_ALL_SOUND_EFFECT = 'stopAllSoundEffect',                   // 暂停暂停全部音频

    SWITCH_MUTE = 'switchMute',                                     // 切换静音
    SWITCH_SOUND = 'switchSound',                                   // 关闭音频

    // SNAKE  震动
    PLAY_BIGSNAKE = 'playbigsnake',                                 // 播放震动
    SWITCH_SNAKE = 'switchsnake',                                   // 切换震动

    UP_ICEPROGRESS = 'up_IceProgress',                              // 更新冰块进度条
    COUNTDOWN = 'count_Down',                                       // 计时器更新

    // POPUP
    SHOW_POPUP = 'showPopUp',                                       // 显示弹窗
    HIDE_POPUP = 'hidePopUp',                                       // 隐藏弹窗
    HIDE_ALL_POPUP = 'hideAllPopUp',                                // 隐藏所有弹窗

    // LOAD
    SHOW_LOADING = 'showLoading',                                   // 显示加载中
    HIDE_LOADING = 'hideLoading',                                   // 隐藏加载中

    GET_REWARDS = 'get_rewards',                                    // 获取奖励

    RED_DETECTION = 'red_detection',                                // 红点检测

    GROUPBALLINGAME = "ballInGame",

    GROUPBALLINRECYCLE = "ballInRecycle",

    OPENVDIEO = 'openVideo',                                        // 打开视频

    BUBBLETPIS = 'bubble_Tpis',

    CLOSEBUBBLE = 'close_bubbleTpis',

    UPDATALEVEL = 'updatalevel',

    UPDATASCORE = 'updatascore',
}

/**
 * 常量
 */
export class GameConstant {
    public static game: GameController = null;
    public static resurgenceVideo: boolean = false;
    public static isShoot: boolean = false;
    public static isAward: boolean = false;
}