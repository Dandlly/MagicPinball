"use strict";
cc._RF.push(module, '6de99LMK95Bfqf5WRpPGYDQ', 'FInvityPage');
// FSDK_ASS/FSript/FView/FInvityPage.ts

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
var FGlobal_1 = require("../FModel/FGlobal");
var FInvityTaskItem_1 = require("./FInvityTaskItem");
var FSocketSend_1 = require("../FNetWork/FSocketSend");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FInvityPage = /** @class */ (function (_super) {
    __extends(FInvityPage, _super);
    function FInvityPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mInviteCnt = null;
        _this.mInviteCode = null;
        _this.mInviteLink = null;
        _this.mScroll = null;
        _this.mInvityItem = null;
        _this.mInvityEdit = null;
        _this.mRewardNode = null;
        _this.mInviteNode = null;
        _this.mMsg1 = null;
        _this.mMsg2 = null;
        return _this;
        // update (dt) {}
    }
    FInvityPage.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.node.getChildByName("Top").height = 85 + FGlobal_1.FGlobal.getScale();
        this.mRewardNode.getComponent(cc.Widget).top = 700 + FGlobal_1.FGlobal.getScale();
    };
    FInvityPage.prototype.start = function () {
    };
    FInvityPage.prototype.closePage = function () {
        this.node.parent = null;
    };
    FInvityPage.prototype.onEnable = function () {
        this.mScroll.stopAutoScroll();
        this.mScroll.scrollToTop(0);
        this.initData();
        FSocketSend_1.FSocketSend.C2S_trans_history('invite');
        FSDK.addUserInfoListen(this.userInfoListen, this);
        cc.director.on(FEventID.S2C_trans_history, this.S2C_trans, this);
        FSDK.closeBanner();
    };
    FInvityPage.prototype.onDisable = function () {
        cc.director.off(FEventID.S2C_trans_history, this.S2C_trans, this);
        FSDK.openBanner();
    };
    FInvityPage.prototype.S2C_trans = function () {
        var inviteTask = FGlobal_1.FGlobal.invite_task;
        var inviteTaskConf = FConfig.conf.invite_task;
        var num = 0;
        var jj = 0;
        for (var j = 0; j < inviteTaskConf.length; j++) {
            if (FGlobal_1.FGlobal.USER_INFO.invite_count < inviteTaskConf[j].count && !num) {
                jj = j;
                num = inviteTaskConf[j].count;
                this.mMsg1.getComponent(cc.Label).string = "Invite " + (num - FGlobal_1.FGlobal.USER_INFO.invite_count) + " more friends can get rewards";
            }
        }
        if (inviteTask.length != jj) {
            this.mMsg1.getComponent(cc.Label).string = "Your rewards haven't been cliamed";
        }
    };
    //userinfo监听
    FInvityPage.prototype.userInfoListen = function (data) {
        this.initData();
        FLog.normal("回调信息  ", data);
    };
    //初始化数据
    FInvityPage.prototype.initData = function () {
        this.mRewardNode.active = FGlobal_1.FGlobal.USER_INFO.isFlag;
        this.mInviteNode.active = !FGlobal_1.FGlobal.USER_INFO.isFlag && !FGlobal_1.FGlobal.USER_INFO.be_invite;
        this.mInviteCnt.string = "Invite " + FGlobal_1.FGlobal.USER_INFO.invite_count + " Friends";
        this.mInviteCode.string = FGlobal_1.FGlobal.USER_INFO.invite_code + '';
        this.mInviteLink.string = FConfig.FSDK_CONF.link + '';
        this.mMsg1.active = this.mMsg2.active = FGlobal_1.FGlobal.USER_INFO.isFlag;
        this.initTask();
    };
    //复制按钮
    FInvityPage.prototype.copy = function (target, type) {
        switch (type) {
            case "code":
                FSDK.copy(this.mInviteCode.string);
                break;
            case "url":
                FSDK.copy(this.mInviteLink.string);
                break;
        }
    };
    //邀请按钮
    FInvityPage.prototype.clickInvite = function () {
        FSDK.share(FConfig.GAME_NAME + " have fun. What are you waiting for? Download it, input the refer code " + this.mInviteCode.string + " to get reward. " + this.mInviteLink.string);
    };
    //初始化任务
    FInvityPage.prototype.initTask = function () {
        FLog.normal("是不是conf ", FConfig.conf);
        var inviteTask = FConfig.conf.invite_task;
        var num = 0;
        for (var j = 0; j < inviteTask.length; j++) {
            if (FGlobal_1.FGlobal.USER_INFO.invite_count < inviteTask[j].count && !num) {
                num = inviteTask[j].count;
                this.mMsg1.getComponent(cc.Label).string = "Invite " + (num - FGlobal_1.FGlobal.USER_INFO.invite_count) + " more friends can get rewards";
            }
        }
        for (var i = 0; i < inviteTask.length; i++) {
            var item = null;
            if (this.mScroll.content.childrenCount == inviteTask.length) {
                item = this.mScroll.content.children[i];
            }
            else {
                item = cc.instantiate(this.mInvityItem);
                item.parent = this.mScroll.content;
            }
            item.getComponent(FInvityTaskItem_1.FInvityTaskItem).setData(i, inviteTask[i], this.node);
        }
    };
    //填入邀请码
    FInvityPage.prototype.getCode = function () {
        if (this.mInvityEdit.string.length > 0) {
            FSocketSend_1.FSocketSend.C2S_invited(this.mInvityEdit.string);
        }
        else {
            FSDK.showToast('Sorry, the invitation code cannot be empty');
        }
    };
    __decorate([
        property(cc.Label)
    ], FInvityPage.prototype, "mInviteCnt", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityPage.prototype, "mInviteCode", void 0);
    __decorate([
        property(cc.Label)
    ], FInvityPage.prototype, "mInviteLink", void 0);
    __decorate([
        property(cc.ScrollView)
    ], FInvityPage.prototype, "mScroll", void 0);
    __decorate([
        property(cc.Node)
    ], FInvityPage.prototype, "mInvityItem", void 0);
    __decorate([
        property(cc.EditBox)
    ], FInvityPage.prototype, "mInvityEdit", void 0);
    __decorate([
        property(cc.Node)
    ], FInvityPage.prototype, "mRewardNode", void 0);
    __decorate([
        property(cc.Node)
    ], FInvityPage.prototype, "mInviteNode", void 0);
    __decorate([
        property(cc.Node)
    ], FInvityPage.prototype, "mMsg1", void 0);
    __decorate([
        property(cc.Node)
    ], FInvityPage.prototype, "mMsg2", void 0);
    FInvityPage = __decorate([
        ccclass
    ], FInvityPage);
    return FInvityPage;
}(cc.Component));
exports.FInvityPage = FInvityPage;

cc._RF.pop();