"use strict";
cc._RF.push(module, '96678eXseZDOLuqWG8GCK05', 'AudioComponent');
// script/common/AudioComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Events_1 = require("./Events");
var EventConstants_1 = require("./EventConstants");
var User_1 = require("./User");
/**
 * 音频组件
 * @author yxx0
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 音效
var Sound = /** @class */ (function () {
    function Sound() {
        this.audio = null;
        this.volume = 1;
    }
    __decorate([
        property({ type: cc.AudioClip })
    ], Sound.prototype, "audio", void 0);
    __decorate([
        property({ type: cc.Float, tooltip: '音频音量' })
    ], Sound.prototype, "volume", void 0);
    Sound = __decorate([
        ccclass('Sound')
    ], Sound);
    return Sound;
}());
exports.Sound = Sound;
var AudioComponent = /** @class */ (function (_super) {
    __extends(AudioComponent, _super);
    function AudioComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundMainBgm = null; // 背景音乐
        _this.click = null; // 点击音效
        _this.pop = null; // 道具音效
        _this.shoot = null; // 射击音效
        _this.settlement = null; // 结算音效
        _this.crash = null; // 碰撞音效
        _this.eliminate = null; // 消除音效
        _this.award = null;
        _this.cion = null;
        _this.dingdong = null;
        _this.bigwingold = null;
        _this.luck = null;
        // 是否静音 
        _this.isMute = false;
        // 是否音效
        _this.isSound = false;
        _this.bgmPlaying = false;
        // 音效id
        _this.effectIds = [];
        _this.key = null;
        return _this;
    }
    AudioComponent.prototype.onLoad = function () {
        // 添加为全局节点
        // cc.game.addPersistRootNode(this.node);
        this.initEvents();
    };
    AudioComponent.prototype.onDestroy = function () {
        this.clearEvents();
    };
    AudioComponent.prototype.initEvents = function () {
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.PLAY_BGM, this.playBGM, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.STOP_BGM, this.stopBGM, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.PLAY_SOUND_EFFECT, this.playSoundEffect, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.STOP_SOUND_EFFECT, this.stopEffect, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.SWITCH_MUTE, this.switchMute, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.SWITCH_SOUND, this.switchSound, this);
        Events_1.events.on(this.name, this.uuid, EventConstants_1.GameEvents.STOP_ALL_SOUND_EFFECT, this.stopAllEffect, this);
    };
    AudioComponent.prototype.clearEvents = function () {
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.PLAY_BGM);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.STOP_BGM);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.PLAY_SOUND_EFFECT);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.STOP_SOUND_EFFECT);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.SWITCH_MUTE);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.SWITCH_SOUND);
        Events_1.events.removeListener(this.name, EventConstants_1.GameEvents.STOP_ALL_SOUND_EFFECT);
    };
    AudioComponent.prototype.init = function () {
        this.isMute = User_1.user.IsMute;
        this.isSound = User_1.user.IsSound;
    };
    /**
     * 播放背景音乐
     * @private
     * @param {string} key
     * @returns
     */
    AudioComponent.prototype.playBGM = function (key) {
        // 如果KEY不相同则先暂停
        if (this.key && key != this.key)
            this.stopBGM();
        this.init();
        this.bgmPlaying = true;
        var bgm = this[key];
        if (this.isMute && typeof this.bgmAudioId !== 'number') {
            // this.bgmAudioId = cc.audioEngine.play(bgm.audio as any, true, bgm.volume);
            this.bgmAudioId = cc.audioEngine.playMusic(bgm.audio, true);
            this.key = key;
        }
    };
    /**
     * 停止背景音乐
     * @private
     * @returns
     */
    AudioComponent.prototype.stopBGM = function () {
        this.bgmPlaying = false;
        if (this.isMute && typeof this.bgmAudioId === 'number') {
            cc.audioEngine.stop(this.bgmAudioId);
            cc.audioEngine.uncache(this.bgmAudioId);
            delete this.bgmAudioId;
        }
    };
    /**
     * 播放音效剪辑，全局非静音且音效开关打开才会播
     * @private
     * @param {string} key
     * @param {any} id
     * @param {boolean} loop
     * @returns
     */
    AudioComponent.prototype.playSoundEffect = function (key, id, loop, cb) {
        var _this = this;
        // step 1: 校验当前是否播放音效
        if (!this.isSound)
            return;
        // step 2: 校验音频剪辑是否存在
        var sound = this[key];
        if (!sound)
            return;
        if (typeof id === 'number')
            if (sound[id])
                sound = sound[id];
            else
                return;
        if (!sound.audio)
            return;
        // step 3: 播放音效
        var effectId = cc.audioEngine.play(sound.audio, loop, sound.volume || 1);
        if (!this.effectIds)
            this.effectIds = [];
        this.effectIds.push({ key: key, effectId: effectId });
        // step 4： 检查回调
        if (loop)
            return;
        cc.audioEngine.setFinishCallback(effectId, function () {
            _this.stopEffect(key);
            if (cb)
                cb();
        });
    };
    /**
     * 停止音效
     * @private
     * @param {string} key
     * @returns
     */
    AudioComponent.prototype.stopEffect = function (key) {
        var idx = this.effectIds.findIndex(function (data) { return key === data.key; });
        if (idx != -1) {
            // const effectId = this.effectIds[idx].effectId;
            // cc.audioEngine.stop(effectId);
            // cc.audioEngine.uncache(effectId as any);
            // this.effectIds.splice(idx, 1);
        }
    };
    /**
     * 切换静音状态
     * @private
     * @returns
     */
    AudioComponent.prototype.switchMute = function () {
        this.isMute = !this.isMute;
        if (!this.isMute) {
            // cc.audioEngine.stopAll();
            // cc.audioEngine.uncacheAll();
            // delete this.bgmAudioId;
            // this.effectIds = [];
            this.isSound = false;
            cc.audioEngine.pause(this.bgmAudioId);
        }
        else {
            // 播放背景音效
            // if (this.bgmPlaying) this.playBGM('soundMainBgm');
            // this.resumeAllEffect();
            if (this.bgmAudioId == null) {
                this.playBGM('soundMainBgm');
                return;
            }
            cc.audioEngine.resume(this.bgmAudioId);
        }
    };
    /**
     * 停止所有音效
     * @private
     * @returns
     */
    AudioComponent.prototype.stopAllEffect = function () {
        if (!this.isMute) {
            cc.audioEngine.stopAll();
            cc.audioEngine.uncacheAll();
            delete this.bgmAudioId;
            this.effectIds = [];
        }
    };
    /**
     * 恢复所有音效
     * @private
     * @returns
     * @memberof Sounds
     */
    AudioComponent.prototype.resumeAllEffect = function () {
        if (!this.isMute) {
            if (this.bgmPlaying)
                this.playBGM(this.key);
        }
    };
    /**
     * 关闭音效
     */
    AudioComponent.prototype.switchSound = function () {
        this.isSound = !this.isSound;
    };
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "soundMainBgm", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "click", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "pop", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "shoot", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "settlement", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "crash", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "eliminate", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "award", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "cion", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "dingdong", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "bigwingold", void 0);
    __decorate([
        property(Sound)
    ], AudioComponent.prototype, "luck", void 0);
    AudioComponent = __decorate([
        ccclass
    ], AudioComponent);
    return AudioComponent;
}(cc.Component));
exports.default = AudioComponent;

cc._RF.pop();