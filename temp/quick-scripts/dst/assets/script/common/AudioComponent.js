
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/AudioComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEF1ZGlvQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUVsQyxtREFBOEM7QUFFOUMsK0JBQThCO0FBRzlCOzs7R0FHRztBQUdHLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUMsS0FBSztBQUVMO0lBREE7UUFHVyxVQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFKRztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7d0NBQ0M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBQ3BCO0lBTGpCLEtBQUs7UUFEakIsT0FBTyxDQUFDLE9BQU8sQ0FBQztPQUNKLEtBQUssQ0FNakI7SUFBRCxZQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksc0JBQUs7QUFTbEI7SUFBNEMsa0NBQVk7SUFEeEQ7UUFBQSxxRUF3T0M7UUFyT1Usa0JBQVksR0FBVSxJQUFJLENBQUMsQ0FBVSxPQUFPO1FBRzVDLFdBQUssR0FBVSxJQUFJLENBQUMsQ0FBaUIsT0FBTztRQUc1QyxTQUFHLEdBQVUsSUFBSSxDQUFDLENBQW1CLE9BQU87UUFHNUMsV0FBSyxHQUFVLElBQUksQ0FBQyxDQUFpQixPQUFPO1FBRzVDLGdCQUFVLEdBQVUsSUFBSSxDQUFDLENBQVksT0FBTztRQUc1QyxXQUFLLEdBQVUsSUFBSSxDQUFDLENBQWlCLE9BQU87UUFHNUMsZUFBUyxHQUFVLElBQUksQ0FBQyxDQUFhLE9BQU87UUFHNUMsV0FBSyxHQUFVLElBQUksQ0FBQztRQUdwQixVQUFJLEdBQVUsSUFBSSxDQUFDO1FB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bSBcIi4vRXZlbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBHYW1lRXZlbnRzIH0gZnJvbSBcIi4vRXZlbnRDb25zdGFudHNcIjtcclxuXHJcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcbmltcG9ydCB7IEF1ZGlvTmFtZSB9IGZyb20gXCIuL0F1ZGlvQ29uc3RhbmRzXCI7XHJcblxyXG4vKipcclxuICog6Z+z6aKR57uE5Lu2XHJcbiAqIEBhdXRob3IgeXh4MFxyXG4gKi9cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLy8g6Z+z5pWIXHJcbkBjY2NsYXNzKCdTb3VuZCcpXHJcbmV4cG9ydCBjbGFzcyBTb3VuZCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcclxuICAgIHB1YmxpYyBhdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCwgdG9vbHRpcDogJ+mfs+mikemfs+mHjycgfSlcclxuICAgIHB1YmxpYyB2b2x1bWU6IG51bWJlciA9IDE7XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvQ29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShTb3VuZClcclxuICAgIHB1YmxpYyBzb3VuZE1haW5CZ206IFNvdW5kID0gbnVsbDsgICAgICAgICAgLy8g6IOM5pmv6Z+z5LmQXHJcblxyXG4gICAgQHByb3BlcnR5KFNvdW5kKVxyXG4gICAgcHVibGljIGNsaWNrOiBTb3VuZCA9IG51bGw7ICAgICAgICAgICAgICAgICAvLyDngrnlh7vpn7PmlYhcclxuXHJcbiAgICBAcHJvcGVydHkoU291bmQpXHJcbiAgICBwdWJsaWMgcG9wOiBTb3VuZCA9IG51bGw7ICAgICAgICAgICAgICAgICAgIC8vIOmBk+WFt+mfs+aViFxyXG5cclxuICAgIEBwcm9wZXJ0eShTb3VuZClcclxuICAgIHB1YmxpYyBzaG9vdDogU291bmQgPSBudWxsOyAgICAgICAgICAgICAgICAgLy8g5bCE5Ye76Z+z5pWIXHJcblxyXG4gICAgQHByb3BlcnR5KFNvdW5kKVxyXG4gICAgcHVibGljIHNldHRsZW1lbnQ6IFNvdW5kID0gbnVsbDsgICAgICAgICAgICAvLyDnu5Pnrpfpn7PmlYhcclxuXHJcbiAgICBAcHJvcGVydHkoU291bmQpXHJcbiAgICBwdWJsaWMgY3Jhc2g6IFNvdW5kID0gbnVsbDsgICAgICAgICAgICAgICAgIC8vIOeisOaSnumfs+aViFxyXG5cclxuICAgIEBwcm9wZXJ0eShTb3VuZClcclxuICAgIHB1YmxpYyBlbGltaW5hdGU6IFNvdW5kID0gbnVsbDsgICAgICAgICAgICAgLy8g5raI6Zmk6Z+z5pWIXHJcblxyXG4gICAgQHByb3BlcnR5KFNvdW5kKVxyXG4gICAgcHVibGljIGF3YXJkOiBTb3VuZCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFNvdW5kKVxyXG4gICAgcHVibGljIGNpb246IFNvdW5kID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoU291bmQpXHJcbiAgICBwdWJsaWMgZGluZ2Rvbmc6IFNvdW5kID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoU291bmQpXHJcbiAgICBwdWJsaWMgYmlnd2luZ29sZDogU291bmQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShTb3VuZClcclxuICAgIHB1YmxpYyBsdWNrOiBTb3VuZCA9IG51bGw7XHJcblxyXG4gICAgLy8g5piv5ZCm6Z2Z6Z+zIFxyXG4gICAgcHJpdmF0ZSBpc011dGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDmmK/lkKbpn7PmlYhcclxuICAgIHByaXZhdGUgaXNTb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEJHTSBpZFxyXG4gICAgcHJpdmF0ZSBiZ21BdWRpb0lkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJnbVBsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDpn7PmlYhpZFxyXG4gICAgcHJpdmF0ZSBlZmZlY3RJZHM6IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBrZXk6IGFueSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOa3u+WKoOS4uuWFqOWxgOiKgueCuVxyXG4gICAgICAgIC8vIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXJFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMubmFtZSwgdGhpcy51dWlkLCBHYW1lRXZlbnRzLlBMQVlfQkdNLCB0aGlzLnBsYXlCR00sIHRoaXMpO1xyXG4gICAgICAgIGV2ZW50cy5vbih0aGlzLm5hbWUsIHRoaXMudXVpZCwgR2FtZUV2ZW50cy5TVE9QX0JHTSwgdGhpcy5zdG9wQkdNLCB0aGlzKTtcclxuICAgICAgICBldmVudHMub24odGhpcy5uYW1lLCB0aGlzLnV1aWQsIEdhbWVFdmVudHMuUExBWV9TT1VORF9FRkZFQ1QsIHRoaXMucGxheVNvdW5kRWZmZWN0LCB0aGlzKTtcclxuICAgICAgICBldmVudHMub24odGhpcy5uYW1lLCB0aGlzLnV1aWQsIEdhbWVFdmVudHMuU1RPUF9TT1VORF9FRkZFQ1QsIHRoaXMuc3RvcEVmZmVjdCwgdGhpcyk7XHJcbiAgICAgICAgZXZlbnRzLm9uKHRoaXMubmFtZSwgdGhpcy51dWlkLCBHYW1lRXZlbnRzLlNXSVRDSF9NVVRFLCB0aGlzLnN3aXRjaE11dGUsIHRoaXMpO1xyXG4gICAgICAgIGV2ZW50cy5vbih0aGlzLm5hbWUsIHRoaXMudXVpZCwgR2FtZUV2ZW50cy5TV0lUQ0hfU09VTkQsIHRoaXMuc3dpdGNoU291bmQsIHRoaXMpO1xyXG4gICAgICAgIGV2ZW50cy5vbih0aGlzLm5hbWUsIHRoaXMudXVpZCwgR2FtZUV2ZW50cy5TVE9QX0FMTF9TT1VORF9FRkZFQ1QsIHRoaXMuc3RvcEFsbEVmZmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlBMQVlfQkdNKTtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlNUT1BfQkdNKTtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlBMQVlfU09VTkRfRUZGRUNUKTtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlNUT1BfU09VTkRfRUZGRUNUKTtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlNXSVRDSF9NVVRFKTtcclxuICAgICAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIodGhpcy5uYW1lLCBHYW1lRXZlbnRzLlNXSVRDSF9TT1VORCk7XHJcbiAgICAgICAgZXZlbnRzLnJlbW92ZUxpc3RlbmVyKHRoaXMubmFtZSwgR2FtZUV2ZW50cy5TVE9QX0FMTF9TT1VORF9FRkZFQ1QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc011dGUgPSB1c2VyLklzTXV0ZTtcclxuICAgICAgICB0aGlzLmlzU291bmQgPSB1c2VyLklzU291bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZBcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYXlCR00oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyDlpoLmnpxLRVnkuI3nm7jlkIzliJnlhYjmmoLlgZxcclxuICAgICAgICBpZiAodGhpcy5rZXkgJiYga2V5ICE9IHRoaXMua2V5KSB0aGlzLnN0b3BCR00oKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5iZ21QbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYmdtID0gdGhpc1trZXldXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdXRlICYmIHR5cGVvZiB0aGlzLmJnbUF1ZGlvSWQgIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYmdtQXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYmdtLmF1ZGlvIGFzIGFueSwgdHJ1ZSwgYmdtLnZvbHVtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmdtQXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhiZ20uYXVkaW8gYXMgYW55LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6IOM5pmv6Z+z5LmQXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdG9wQkdNKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdtUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTXV0ZSAmJiB0eXBlb2YgdGhpcy5iZ21BdWRpb0lkID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuYmdtQXVkaW9JZCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnVuY2FjaGUodGhpcy5iZ21BdWRpb0lkIGFzIGFueSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJnbUF1ZGlvSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6Z+z5pWI5Ymq6L6R77yM5YWo5bGA6Z2e6Z2Z6Z+z5LiU6Z+z5pWI5byA5YWz5omT5byA5omN5Lya5pKtXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICogQHBhcmFtIHthbnl9IGlkXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3BcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGxheVNvdW5kRWZmZWN0KGtleTogc3RyaW5nLCBpZD86IGFueSwgbG9vcD86IGJvb2xlYW4sIGNiPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICAvLyBzdGVwIDE6IOagoemqjOW9k+WJjeaYr+WQpuaSreaUvumfs+aViFxyXG4gICAgICAgIGlmICghdGhpcy5pc1NvdW5kKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHN0ZXAgMjog5qCh6aqM6Z+z6aKR5Ymq6L6R5piv5ZCm5a2Y5ZyoXHJcbiAgICAgICAgbGV0IHNvdW5kID0gdGhpc1trZXldO1xyXG4gICAgICAgIGlmICghc291bmQpIHJldHVybjtcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgaWYgKHNvdW5kW2lkXSkgc291bmQgPSBzb3VuZFtpZF07XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIXNvdW5kLmF1ZGlvKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHN0ZXAgMzog5pKt5pS+6Z+z5pWIXHJcbiAgICAgICAgY29uc3QgZWZmZWN0SWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHNvdW5kLmF1ZGlvLCBsb29wLCBzb3VuZC52b2x1bWUgfHwgMSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5lZmZlY3RJZHMpIHRoaXMuZWZmZWN0SWRzID0gW107XHJcbiAgICAgICAgdGhpcy5lZmZlY3RJZHMucHVzaCh7IGtleSwgZWZmZWN0SWQgfSk7XHJcblxyXG4gICAgICAgIC8vIHN0ZXAgNO+8miDmo4Dmn6Xlm57osINcclxuICAgICAgICBpZiAobG9vcCkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGVmZmVjdElkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEVmZmVjdChrZXkpO1xyXG4gICAgICAgICAgICBpZiAoY2IpIGNiKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLpn7PmlYhcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdG9wRWZmZWN0KGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5lZmZlY3RJZHMuZmluZEluZGV4KGRhdGEgPT4ga2V5ID09PSBkYXRhLmtleSk7XHJcbiAgICAgICAgaWYgKGlkeCAhPSAtMSkge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBlZmZlY3RJZCA9IHRoaXMuZWZmZWN0SWRzW2lkeF0uZWZmZWN0SWQ7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3AoZWZmZWN0SWQpO1xyXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS51bmNhY2hlKGVmZmVjdElkIGFzIGFueSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZWZmZWN0SWRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIh+aNoumdmemfs+eKtuaAgVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3dpdGNoTXV0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzTXV0ZSA9ICF0aGlzLmlzTXV0ZTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUudW5jYWNoZUFsbCgpO1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhpcy5iZ21BdWRpb0lkO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmVmZmVjdElkcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmlzU291bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5iZ21BdWRpb0lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmkq3mlL7og4zmma/pn7PmlYhcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYmdtUGxheWluZykgdGhpcy5wbGF5QkdNKCdzb3VuZE1haW5CZ20nKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZXN1bWVBbGxFZmZlY3QoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmdtQXVkaW9JZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlCR00oJ3NvdW5kTWFpbkJnbScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmJnbUF1ZGlvSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouaJgOaciemfs+aViFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RvcEFsbEVmZmVjdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNdXRlKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUudW5jYWNoZUFsbCgpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5iZ21BdWRpb0lkO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdElkcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaBouWkjeaJgOaciemfs+aViFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgU291bmRzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzdW1lQWxsRWZmZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc011dGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmdtUGxheWluZykgdGhpcy5wbGF5QkdNKHRoaXMua2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhbPpl63pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzd2l0Y2hTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzU291bmQgPSAhdGhpcy5pc1NvdW5kO1xyXG4gICAgfVxyXG5cclxufSJdfQ==