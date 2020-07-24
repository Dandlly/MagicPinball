import { GameConstant, GameEvents } from "../common/EventConstants";
import { user } from "../common/User";
import { utils } from "../common/Utils";
import Ball from "./Ball";
import { events } from "../common/Events";

const { ccclass, property } = cc._decorator;
/**
 * 作者:Dandlly
 */
@ccclass
export default class Barrier extends cc.Component {
    @property(cc.Label)
    lbScore: cc.Label = null;
    @property()
    isAddBuffBall: boolean = false;
    @property()
    isAddRed: boolean = false;
    @property()
    isBigBuffBall: boolean = false;
    score: number = 0;

    init(score = 0, isRain = false) {
        if (this.lbScore) {
            this.node.angle = 0;
            this.lbScore.node.angle = 0;
            let angleRan = -Math.random() * 360;
            // 随机角度
            this.node.angle = angleRan;
            this.lbScore.node.color = cc.color().fromHEX("000000");
            this.lbScore.node.angle -= angleRan;
        }

        if (this.isAddRed) {
            this.node.angle = 0;
            this.lbScore.node.angle = 0;
        }

        if (score != 0) {
            this.setScore(score);
        } else {
            if (!this.isAddBuffBall && !this.isAddRed && !this.isBigBuffBall) {
                this.node.scale = utils.randomFloat(user.getLumpData().BarrierSacleArr);
            }
            this.setScore(GameConstant.game.setBarrierScore());
        }

        if (!this.isAddBuffBall && !this.isAddRed && !this.isBigBuffBall) {
            if (isRain) {
                this.node.getChildByName('IrisAnim').active = true;
                this.node.getChildByName("rainbow").active = true;
            } else {
                this.node.getChildByName('IrisAnim').active = false;
                this.node.getChildByName("rainbow").active = false;
            }
        }



    }

    //设置分数
    setScore(score) {
        if (this.lbScore) {
            this.score = score;
            this.lbScore.string = this.score.toString();
            this.setColor(this.score);
        }
    }

    getScore() {
        return this.score;
    }

    setColor(scroe) {
        if (this.isAddBuffBall || this.isAddRed || this.isBigBuffBall) return;
        let colorData = user.getLumpData().color;
        // 预防出错
        if (colorData.length != 7) return;
        let color;
        if (scroe <= 10) {
            color = colorData[0];
        } else if (scroe <= 50) {
            color = colorData[1];
        } else if (scroe <= 100) {
            color = colorData[2];
        } else if (scroe <= 300) {
            color = colorData[3];
        } else if (scroe <= 500) {
            color = colorData[4];
        } else if (scroe <= 700) {
            color = colorData[5];
        } else if (scroe > 700) {
            color = colorData[6];
        }

        for (let index = 0; index < this.node.children.length; index++) {
            if (this.node.children[index].name.indexOf("bloacks_1") != -1) {
                this.node.children[index].color = cc.color().fromHEX(color[2]);
            }
            if (this.node.children[index].name.indexOf("bloacks_2") != -1) {
                this.node.children[index].color = cc.color().fromHEX(color[1]);
            }
            if (this.node.children[index].name.indexOf("bloacks_3") != -1) {
                this.node.children[index].color = cc.color().fromHEX(color[0]);
            }
        }
    }

    //发生碰撞时
    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == 1) {
            // if (otherCollider.node.name == "ball") {
            if (this.isAddBuffBall) {
                GameConstant.game.addBall(this.node.position);
                GameConstant.game.removeBarrier(this);
                let _oldProp = user.getCurrentProp();
                _oldProp -= 1;
                user.setCurrentProp(_oldProp);
            } else if (this.isBigBuffBall) {
                if (otherCollider.node.getComponent(Ball).getHurt() == 2) return;
                GameConstant.game.bigBall(otherCollider.node);
                GameConstant.game.removeBarrier(this);
                let _oldProp = user.getCurrentProp();
                _oldProp -= 1;
                user.setCurrentProp(_oldProp);
            }
            else if (this.isAddRed) {
                let hurt = otherCollider.node.getComponent(Ball).getHurt();
                if (this.score <= hurt) {
                    GameConstant.game.addScore(this.score);
                    this.node.opacity = 120;
                    this.node.getComponent(cc.PhysicsPolygonCollider).enabled = false;
                    this.score = 0;
                    this.lbScore.node.active = false;
                } else {
                    this.setScore(this.score - hurt);
                    GameConstant.game.addScore(this.score - hurt);
                    GameConstant.game.shake(this.node);
                }
            } else {
                let hurt = otherCollider.node.getComponent(Ball).getHurt();
                if (this.score <= hurt) {
                    GameConstant.game.addScore(this.score);
                    GameConstant.game.removeBarrier(this);
                } else {
                    this.setScore(this.score - hurt);
                    GameConstant.game.addScore(this.score - hurt);
                    GameConstant.game.shake(this.node);
                }
            }
        }
    }
}
