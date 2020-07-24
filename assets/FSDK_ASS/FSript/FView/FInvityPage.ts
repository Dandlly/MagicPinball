import { FGlobal } from "../FModel/FGlobal";
import { FInvityTaskItem } from "./FInvityTaskItem";
import { FSocketSend } from "../FNetWork/FSocketSend";

const { ccclass, property } = cc._decorator;

@ccclass
export class FInvityPage extends cc.Component {
    @property(cc.Label)
    mInviteCnt: cc.Label = null;
    @property(cc.Label)
    mInviteCode: cc.Label = null;
    @property(cc.Label)
    mInviteLink: cc.Label = null;
    @property(cc.ScrollView)
    mScroll: cc.ScrollView = null;
    @property(cc.Node)
    mInvityItem: cc.Node = null;
    @property(cc.EditBox)
    mInvityEdit: cc.EditBox = null;
    @property(cc.Node)
    mRewardNode: cc.Node = null;
    @property(cc.Node)
    mInviteNode: cc.Node = null;
    @property(cc.Node)
    mMsg1: cc.Node = null;
    @property(cc.Node)
    mMsg2: cc.Node = null;
    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal.getScale();
        this.mRewardNode.getComponent(cc.Widget).top = 700 + FGlobal.getScale();
    }

    start() {

    }

    closePage() {
        this.node.parent = null;
    }

    onEnable() {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        this.initData();
        FSocketSend.C2S_trans_history('invite');
        FSDK.addUserInfoListen(this.userInfoListen, this);
        cc.director.on(FEventID.S2C_trans_history, this.S2C_trans, this);
        FSDK.closeBanner();
    }

    onDisable() {
        cc.director.off(FEventID.S2C_trans_history, this.S2C_trans, this);
        FSDK.openBanner();
    }

    S2C_trans() {
        let inviteTask = FGlobal.invite_task;
        let inviteTaskConf = FConfig.conf.invite_task;
        let num = 0;
        let jj = 0;
        for (let j = 0; j < inviteTaskConf.length; j++) {
            if (FGlobal.USER_INFO.invite_count < inviteTaskConf[j].count && !num) {
                jj = j;
                num = inviteTaskConf[j].count;
                this.mMsg1.getComponent(cc.Label).string = `Invite ${num - FGlobal.USER_INFO.invite_count} more friends can get rewards`;
            }
        }

        if (inviteTask.length != jj) {
            this.mMsg1.getComponent(cc.Label).string = `Your rewards haven't been cliamed`;
        }
    }

    //userinfo监听
    userInfoListen(data) {
        this.initData();
        FLog.normal("回调信息  ", data);
    }

    //初始化数据
    initData() {
        this.mRewardNode.active = FGlobal.USER_INFO.isFlag;
        this.mInviteNode.active = !FGlobal.USER_INFO.isFlag && !FGlobal.USER_INFO.be_invite;
        this.mInviteCnt.string = `Invite ${FGlobal.USER_INFO.invite_count} Friends`;
        this.mInviteCode.string = FGlobal.USER_INFO.invite_code + '';
        this.mInviteLink.string = FConfig.FSDK_CONF.link + '';
        this.mMsg1.active = this.mMsg2.active = FGlobal.USER_INFO.isFlag;
        this.initTask();
    }

    //复制按钮
    copy(target, type) {
        switch (type) {
            case "code":
                FSDK.copy(this.mInviteCode.string);
                break;
            case "url":
                FSDK.copy(this.mInviteLink.string);
                break;
        }
    }

    //邀请按钮
    clickInvite() {
        FSDK.share(`${FConfig.GAME_NAME} have fun. What are you waiting for? Download it, input the refer code ${this.mInviteCode.string} to get reward. ${this.mInviteLink.string}`);
    }

    //初始化任务
    initTask() {
        FLog.normal("是不是conf ", FConfig.conf);
        let inviteTask = FConfig.conf.invite_task;
        let num = 0;
        for (let j = 0; j < inviteTask.length; j++) {
            if (FGlobal.USER_INFO.invite_count < inviteTask[j].count && !num) {
                num = inviteTask[j].count;
                this.mMsg1.getComponent(cc.Label).string = `Invite ${num - FGlobal.USER_INFO.invite_count} more friends can get rewards`;
            }
        }
        for (let i = 0; i < inviteTask.length; i++) {
            let item: cc.Node = null;
            if (this.mScroll.content.childrenCount == inviteTask.length) {
                item = this.mScroll.content.children[i];
            }
            else {
                item = cc.instantiate(this.mInvityItem);
                item.parent = this.mScroll.content;
            }
            item.getComponent(FInvityTaskItem).setData(i, inviteTask[i], this.node);
        }
    }

    //填入邀请码
    getCode() {
        if (this.mInvityEdit.string.length > 0) {
            FSocketSend.C2S_invited(this.mInvityEdit.string);
        }
        else {
            FSDK.showToast('Sorry, the invitation code cannot be empty');
        }
    }

    // update (dt) {}
}
