import { FPanelManager } from "../FModel/FPanelManager";
import { FCreditRecord } from "./FCreditRecord";
import { FGlobal } from "../FModel/FGlobal";
import { FTaskItem } from "./FTaskItem";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTaskPage extends cc.Component {
    @property(cc.Label)
    mTip1: cc.Label = null;
    @property(cc.Sprite)
    mTransPro: cc.Sprite = null;
    @property(cc.Label)
    mNowNum: cc.Label = null;
    @property(cc.Label)
    mLabelPro: cc.Label = null;
    @property(cc.Button)
    mBtnTrans: cc.Button = null;
    @property(cc.Node)
    mItem: cc.Node = null;
    @property(cc.ScrollView)
    mScroll: cc.ScrollView = null;
    @property(cc.Node)
    mCardNode: cc.Node = null;
    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 75 + FGlobal.getScale();
        this.node.getChildByName("mainNode").getComponent(cc.Widget).top = 75 + FGlobal.getScale();
    }

    start() {

    }

    onEnable() {
        this.initData();
        FSDK.addCreditListen(this.creditListen, this);
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
    }

    onDisable() {
        FSDK.removeCreditListen(this.creditListen, this);
    }

    creditListen(data) {
        if (data.type == 'pp') {
            this.initData();
        }
    }

    initData() {
        this.mTip1.string = `can ${FConfig.FSDK_CONF.word.tip2})`;
        this.mNowNum.string = `$${FGlobal.USER_INFO.credit_pp.toFixed(2)}`;
        this.mTransPro.fillRange = FGlobal.USER_INFO.credit_pp / 100;
        this.mLabelPro.string = `$${FGlobal.USER_INFO.credit_pp.toFixed(2)} / $100.00`;
        this.mBtnTrans.interactable = this.mTransPro.fillRange >= 1;
    }

    setData(data) {
        if(FConfig.FSDK_CONF.TASK_CONF.length == 1){
           this.oneTask(data);
        }
        else{
            this.moreTask(data);
        }
       
    }

    oneTask(num){
        let length = FConfig.FSDK_CONF.TASK_CONF[0].target.length;
        for (let i = 0; i < length; i++) {
            let item: cc.Node = null;
            if (this.mScroll.content.childrenCount == length) {
                item = this.mScroll.content.children[i];
            }
            else {
                item = cc.instantiate(this.mItem);
                item.parent = this.mScroll.content;
            }
            item.getComponent(FTaskItem).setOneData(num, i, this.node);
        }
    }

    moreTask(list){
        let length = FConfig.FSDK_CONF.TASK_CONF.length;
        for (let i = 0; i < length; i++) {
            let item: cc.Node = null;
            if (this.mScroll.content.childrenCount == length) {
                item = this.mScroll.content.children[i];
            }
            else {
                item = cc.instantiate(this.mItem);
                item.parent = this.mScroll.content;
            }
            item.getComponent(FTaskItem).setMoreData(list[i], i, this.node);
        }
    }

    closePage() {
        this.node.parent = null;
    }

    ppRecord() {
        FPanelManager.load('FCreditRecord', this.node, function (panel: cc.Node) {
            panel.getComponent(FCreditRecord).setType('pp');
        })
    }

    getTrans() {
        FSDK.showToast(`You have abnormal behaviors,${FConfig.FSDK_CONF.word.tip2} failed`);
    }
    // update (dt) {}
}
