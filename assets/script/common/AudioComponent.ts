import { events } from "./Events";

import { GameEvents } from "./EventConstants";

import { user } from "./User";
import { AudioName } from "./AudioConstands";

/**
 * 音频组件
 * @author yxx0
 */


const { ccclass, property } = cc._decorator;

// 音效
@ccclass('Sound')
export class Sound {
    @property({ type: cc.AudioClip })
    public audio: cc.AudioClip = null;

    @property({ type: cc.Float, tooltip: '音频音量' })
    public volume: number = 1;
}

@ccclass
export default class AudioComponent extends cc.Component {
    @property(Sound)
    public soundMainBgm: Sound = null;          // 背景音乐

    @property(Sound)
    public click: Sound = null;                 // 点击音效

    @property(Sound)
    public pop: Sound = null;                   // 道具音效

    @property(Sound)
    public shoot: Sound = null;                 // 射击音效

    @property(Sound)
    public settlement: Sound = null;            // 结算音效

    @property(Sound)
    public crash: Sound = null;                 // 碰撞音效

    @property(Sound)
    public eliminate: Sound = null;             // 消除音效

    @property(Sound)
    public award: Sound = null;

    @property(Sound)
    public cion: Sound = null;

    @property(Sound)
    public dingdong: Sound = null;

    @property(Sound)
    public bigwingold: Sound = null;

    @property(Sound)
    public luck: Sound = null;

    // 是否静音 
    private isMute: boolean = false;

    // 是否音效
    private isSound: boolean = false;

    // BGM id
    private bgmAudioId: number;
    private bgmPlaying: boolean = false;

    // 音效id
    private effectIds: any = [];
    private key: any = null;

    onLoad(): void {
        // 添加为全局节点
        // cc.game.addPersistRootNode(this.node);
        this.initEvents();
    }

    onDestroy(): void {
        this.clearEvents();
    }

    private initEvents(): void {
        events.on(this.name, this.uuid, GameEvents.PLAY_BGM, this.playBGM, this);
        events.on(this.name, this.uuid, GameEvents.STOP_BGM, this.stopBGM, this);
        events.on(this.name, this.uuid, GameEvents.PLAY_SOUND_EFFECT, this.playSoundEffect, this);
        events.on(this.name, this.uuid, GameEvents.STOP_SOUND_EFFECT, this.stopEffect, this);
        events.on(this.name, this.uuid, GameEvents.SWITCH_MUTE, this.switchMute, this);
        events.on(this.name, this.uuid, GameEvents.SWITCH_SOUND, this.switchSound, this);
        events.on(this.name, this.uuid, GameEvents.STOP_ALL_SOUND_EFFECT, this.stopAllEffect, this);
    }

    private clearEvents(): void {
        events.removeListener(this.name, GameEvents.PLAY_BGM);
        events.removeListener(this.name, GameEvents.STOP_BGM);
        events.removeListener(this.name, GameEvents.PLAY_SOUND_EFFECT);
        events.removeListener(this.name, GameEvents.STOP_SOUND_EFFECT);
        events.removeListener(this.name, GameEvents.SWITCH_MUTE);
        events.removeListener(this.name, GameEvents.SWITCH_SOUND);
        events.removeListener(this.name, GameEvents.STOP_ALL_SOUND_EFFECT);
    }


    private init(): void {
        this.isMute = user.IsMute;
        this.isSound = user.IsSound;
    }

    /**
     * 播放背景音乐
     * @private
     * @param {string} key
     * @returns
     */
    private playBGM(key: string): void {
        // 如果KEY不相同则先暂停
        if (this.key && key != this.key) this.stopBGM();

        this.init();
        this.bgmPlaying = true;
        let bgm = this[key]
        if (this.isMute && typeof this.bgmAudioId !== 'number') {
            // this.bgmAudioId = cc.audioEngine.play(bgm.audio as any, true, bgm.volume);
            this.bgmAudioId = cc.audioEngine.playMusic(bgm.audio as any, true);
            this.key = key;
        }
    }

    /**
     * 停止背景音乐
     * @private
     * @returns
     */
    private stopBGM(): void {
        this.bgmPlaying = false;
        if (this.isMute && typeof this.bgmAudioId === 'number') {
            cc.audioEngine.stop(this.bgmAudioId);
            cc.audioEngine.uncache(this.bgmAudioId as any);
            delete this.bgmAudioId;
        }
    }

    /**
     * 播放音效剪辑，全局非静音且音效开关打开才会播
     * @private
     * @param {string} key
     * @param {any} id
     * @param {boolean} loop
     * @returns
     */
    private playSoundEffect(key: string, id?: any, loop?: boolean, cb?: Function): void {
        // step 1: 校验当前是否播放音效
        if (!this.isSound) return;

        // step 2: 校验音频剪辑是否存在
        let sound = this[key];
        if (!sound) return;
        if (typeof id === 'number')
            if (sound[id]) sound = sound[id];
            else return;

        if (!sound.audio) return;

        // step 3: 播放音效
        const effectId = cc.audioEngine.play(sound.audio, loop, sound.volume || 1);

        if (!this.effectIds) this.effectIds = [];
        this.effectIds.push({ key, effectId });

        // step 4： 检查回调
        if (loop) return;
        cc.audioEngine.setFinishCallback(effectId, () => {
            this.stopEffect(key);
            if (cb) cb();
        });
    }

    /**
     * 停止音效
     * @private
     * @param {string} key
     * @returns 
     */
    private stopEffect(key: string): void {
        const idx = this.effectIds.findIndex(data => key === data.key);
        if (idx != -1) {
            // const effectId = this.effectIds[idx].effectId;
            // cc.audioEngine.stop(effectId);
            // cc.audioEngine.uncache(effectId as any);
            // this.effectIds.splice(idx, 1);
        }
    }

    /**
     * 切换静音状态
     * @private
     * @returns
     */
    private switchMute(): void {
        this.isMute = !this.isMute;
        if (!this.isMute) {
            // cc.audioEngine.stopAll();
            // cc.audioEngine.uncacheAll();
            // delete this.bgmAudioId;
            // this.effectIds = [];
            this.isSound = false;
            cc.audioEngine.pause(this.bgmAudioId);
        } else {
            // 播放背景音效
            // if (this.bgmPlaying) this.playBGM('soundMainBgm');
            // this.resumeAllEffect();
            if (this.bgmAudioId == null) {
                this.playBGM('soundMainBgm');
                return;
            }
            cc.audioEngine.resume(this.bgmAudioId);
        }
    }

    /**
     * 停止所有音效
     * @private
     * @returns
     */
    private stopAllEffect(): void {
        if (!this.isMute) {
            cc.audioEngine.stopAll();
            cc.audioEngine.uncacheAll();
            delete this.bgmAudioId;
            this.effectIds = [];
        }
    }

    /**
     * 恢复所有音效
     * @private
     * @returns
     * @memberof Sounds
     */
    private resumeAllEffect(): void {
        if (!this.isMute) {
            if (this.bgmPlaying) this.playBGM(this.key);
        }
    }

    /**
     * 关闭音效
     */
    private switchSound(): void {
        this.isSound = !this.isSound;
    }

}