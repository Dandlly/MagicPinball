const { ccclass, property } = cc._decorator;

@ccclass
export default class FToLoad extends cc.Component {
    dt = 0;
    se = 0;
    @property(cc.Label)
    label_se: cc.Label = null;
    @property(cc.Label)
    label_msg: cc.Label = null;
    @property(cc.Node)
    mCircle: cc.Node = null;
    onLoad() {
    }

    start() {

    }

    onEnable() {

    }

    setMsg(msg: string = 'Loading', time = 0,showTime = false) {
        this.label_msg.string = msg;
        this.label_se.string = time + 'se';
        this.se = time;
        if(showTime){
            if (this.se) {
                this.label_se.node.active = true;
            }
            else {
                this.label_se.node.active = false;
            }
        }
        else{
            this.label_se.node.active = false;
        }
        
    }

    update(dt) {
        this.mCircle.angle += 3;
        if (this.mCircle.angle >= 360) {
            this.mCircle.angle = 0;
        }
        this.dt += dt;
        if (this.dt >= 1) {
            this.dt = 0;
            if (this.se > 0) {
                this.se -= 1;
                this.label_se.string = this.se + 'se';
                if (this.se <= 0) {
                    this.se = 0;
                    this.label_se.node.active = false;
                    this.node.parent = null;
                }
            }
        }
    }



}
