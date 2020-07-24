const { ccclass, property } = cc._decorator;

// @ccclass
// export default class Shake extends cc.ActionInterval {
class Shake extends cc.ActionInterval {
    //节点初始位置
    nodeInitialPos: cc.Vec2
    //X轴抖动幅度
    nodeShakeStrengthX: 0
    //Y轴抖动幅度
    nodeShakeStrengthY: 0
    //抖动时间
    duration: 0
    target: any;

    constructor(duration, shakeStrengthX, shakeStrengthY) {
        super();
        cc.ActionInterval.prototype.constructor.call(this);
        this.duration = duration;
        this.initWithDuration(duration, shakeStrengthX, shakeStrengthY);
    }

    //获取两个数间的随机值
    getRandomStrength(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    update(dt) {
        var randX = this.getRandomStrength(-this.nodeShakeStrengthX, this.nodeShakeStrengthX) * dt;
        var randY = this.getRandomStrength(-this.nodeShakeStrengthY, this.nodeShakeStrengthY) * dt;
        this.target.setPosition(this.nodeInitialPos.add(cc.v2(randX, randY)));
    }

    initWithDuration(duration, shakeStrengthX, shakeStrengthY) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this.nodeShakeStrengthX = shakeStrengthX;
            this.nodeShakeStrengthY = shakeStrengthY == 'undefined' ? shakeStrengthX : shakeStrengthY;
            return true;
        }
        return false;
    }
    startWithTarget(target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this.nodeInitialPos = target.getPosition();
    }
    stop() {
        this.target.setPosition(this.nodeInitialPos);
    }
}

cc.shake = (duration, shakeStrengthX, shakeStrengthY) => {
    return new Shake(duration, shakeStrengthX, shakeStrengthY);
}