/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-08-18 09:59:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-20 00:35:45
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimationControl extends cc.Component {
	@property({ displayName: '是否直接运行' })
	isOnLoad: Boolean = true;
	@property({ type: cc.Animation, displayName: '控制节点' })
	control_node: Array<cc.Animation> = [];
	@property({ type: cc.Float, displayName: '延迟播放时间' })
	delay_time: Array<number> = [];
	@property({ type: cc.Float, displayName: '出现时间' })
	appear_time: Array<number> = [];
	@property({ type: cc.Float, displayName: '消失时间' })
	disappear_time: Array<number> = [];
	@property({ type: cc.Float, displayName: '动画开始时所在的时间点' })
	begin_time: Array<number> = [];

	/**
	 * 默认播放（如果要不播放，则取消那个勾）;
	 */
	onLoad() {
		if (!this.isOnLoad) return;
		this.control_node.forEach((anim, index) => {
			anim.node.stopAllActions();
			anim.play();
			if (this.begin_time[index] && this.begin_time[index] > 0) {
				anim.setCurrentTime(this.begin_time[index]);
			}

			if (this.delay_time[index] && this.delay_time[index] > 0) {
				anim.stop();
				this.node.runAction(cc.sequence(
					cc.delayTime(this.delay_time[index]),
					cc.callFunc(() => {
						anim.play();
					})
				))
			}

			if (this.appear_time[index] && this.appear_time[index] > 0) {
				anim.node.active = false;
				this.node.runAction(cc.sequence(
					cc.delayTime(this.appear_time[index]),
					cc.callFunc(() => {
						anim.node.active = true;
					})
				))
			}

			if (this.disappear_time[index] && this.disappear_time[index] > 0) {
				this.node.runAction(cc.sequence(
					cc.delayTime(this.disappear_time[index]),
					cc.callFunc(() => {
						anim.node.active = false;
					})
				))
			}
		});
	}

	/**
	 * 技术控制脚本（）
	 */
	public startPlay(): void {
		this.control_node.forEach((anim, index) => {
			anim.node.stopAllActions();
			anim.play();
			if (this.begin_time[index] && this.begin_time[index] > 0) {
				anim.setCurrentTime(this.begin_time[index]);
			}

			if (this.delay_time[index] && this.delay_time[index] > 0) {
				anim.stop();
				this.node.runAction(cc.sequence(
					cc.delayTime(this.delay_time[index]),
					cc.callFunc(() => {
						anim.play();
					})
				))
			}

			if (this.appear_time[index] && this.appear_time[index] > 0) {
				anim.node.active = false;
				this.node.runAction(cc.sequence(
					cc.delayTime(this.appear_time[index]),
					cc.callFunc(() => {
						anim.node.active = true;
					})
				))
			}

			if (this.disappear_time[index] && this.disappear_time[index] > 0) {
				this.node.runAction(cc.sequence(
					cc.delayTime(this.disappear_time[index]),
					cc.callFunc(() => {
						anim.node.active = false;
					})
				))
			}
		});
	}

	onDisable() {
		this.node.stopAllActions();
	}
}
