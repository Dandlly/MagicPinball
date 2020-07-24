import { FGlobal } from "../FModel/FGlobal";
import { FPanelManager } from "../FModel/FPanelManager";

const { ccclass, property } = cc._decorator;

@ccclass
export class FGrade extends cc.Component {
    @property(cc.Node)
    mStarNode: cc.Node = null;
    num = 5;
    cb = null;
    onLoad(){
        this.node.setContentSize(cc.winSize);
    }
    onEnable() {
        this.num = 5;
        for (let i = 0; i < this.mStarNode.childrenCount; i++) {
            this.mStarNode.children[i].getChildByName("guang").active = true;
        }
    }
    clickStar(target) {
        this.num = parseInt(target.target.name);
        for (let i = 0; i < this.mStarNode.childrenCount; i++) {
            this.mStarNode.children[i].getChildByName("guang").active = i < this.num;
        }
    }

    setGrade() {
        FGlobal.USER_INFO.isGrade = true;
        FSDK.saveData("GRADE", FGlobal.USER_INFO.isGrade);
        if (this.num > 3) {
            FNative.jumpShop(FNetWorkConfig.data.pg);
        }
        this.closePage();
    }

    setCb(cb,target){
        this.cb = {
            cb:cb,
            target:target
        }
    }

    closePage(evt?){
        this.cb.cb.call(this.cb.target,FGlobal.USER_INFO.isGrade);
        FPanelManager.close_eff(this.node, true);
    }
}
