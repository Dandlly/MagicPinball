import { GameConstant, GameEvents } from "../common/EventConstants";
import { utils } from "../common/Utils";


const { ccclass, property } = cc._decorator;
/**
 * 作者:Dandlly
 */
@ccclass
export default class Ball extends cc.Component {
    @property()
    isTouchedGround: boolean = false;

    rigidBody: cc.RigidBody = null;
    collider: cc.PhysicsBoxCollider = null;
    private hurtNum: number = 1;
    onLoad() {
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        this.rigidBody.gravityScale = 0;
    }

    update(dt) {
        if (this.isTouchedGround) {
            this.isTouchedGround = false;

            this.rigidBody.active = false
            this.rigidBody.linearVelocity = cc.Vec2.ZERO;

            this.node.color = cc.color().fromHEX("#02c9ff");
            //记录路径点
            let pathPos = [];
            pathPos.push(this.node.position);

            if (this.node.position.x > 0) {
                pathPos.push(cc.v2(345, -415))
                pathPos.push(cc.v2(345, 397))
                pathPos.push(cc.v2(0, 397))
                pathPos.push(cc.v2(0, 390))
            } else {
                pathPos.push(cc.v2(-345, -415))
                pathPos.push(cc.v2(-345, 397))
                pathPos.push(cc.v2(0, 397))
                pathPos.push(cc.v2(0, 390))
            }

            this.node.runAction(cc.sequence(
                cc.cardinalSplineTo(1, pathPos, 0.9),
                cc.callFunc(() => {
                    this.rigidBody.gravityScale = 0;
                    this.node.color = cc.color().fromHEX("#FFFFFF");
                    // if (this.hurtNum == 1) {
                    // } else {
                    //     this.node.color = cc.color().fromHEX("#FF0000");
                    // }
                    this.rigidBody.active = true;
                    GameConstant.game.recycleBall();
                    this.rigidBody.type = cc.RigidBodyType.Static;
                })
            ))
        }
    }

    onBeginContact(contact: cc.PhysicsContact, selfCollider, otherCollider) {
        if (otherCollider.node.name == 'wall' || otherCollider.node.name.indexOf('polygon') != -1 || otherCollider.node.name == 'bx') {
            if (this.rigidBody.gravityScale != 10) {
                this.rigidBody.gravityScale = 10;
            }
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            if (Math.abs(this.rigidBody.linearVelocity.y) < 200) {
                this.rigidBody.applyForceToCenter(cc.v2(100 * plusOrMinus, 50000), true);
            }
        }

        if (otherCollider.node.name == 'ground') {
            this.isTouchedGround = true;
        }
    }

    public getHurt() {
        return this.hurtNum;
    }

    public setHurt(flag) {
        this.hurtNum = flag;
    }

}
