
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FInvityPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZJbnZpdHlQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1QyxxREFBb0Q7QUFDcEQsdURBQXNEO0FBRWhELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBaUMsK0JBQVk7SUFEN0M7UUFBQSxxRUEwSUM7UUF2SUcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFrQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBZSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDOztRQW9IdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFwSEcsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIseUJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFJLFVBQVUsR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLGlCQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNsRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNQLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGFBQVUsR0FBRyxHQUFHLGlCQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksbUNBQStCLENBQUM7YUFDNUg7U0FDSjtRQUVELElBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxtQ0FBbUMsQ0FBQztTQUNsRjtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ1osb0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELE9BQU87SUFDUCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFlBQVUsaUJBQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxhQUFVLENBQUM7UUFDNUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTTtJQUNOLDBCQUFJLEdBQUosVUFBSyxNQUFNLEVBQUUsSUFBSTtRQUNiLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxNQUFNO0lBQ04saUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUksT0FBTyxDQUFDLFNBQVMsK0VBQTBFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSx3QkFBbUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFRLENBQUMsQ0FBQztJQUNsTCxDQUFDO0lBRUQsT0FBTztJQUNQLDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDOUQsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBVSxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxtQ0FBK0IsQ0FBQzthQUM1SDtTQUNKO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7aUJBQ0k7Z0JBQ0QsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQ0FBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNFO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDUCw2QkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDLHlCQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7YUFDSTtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUNoRTtJQUNMLENBQUM7SUFwSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztnREFDTTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0RBQ1U7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDSTtJQXBCYixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBeUl2QjtJQUFELGtCQUFDO0NBeklELEFBeUlDLENBeklnQyxFQUFFLENBQUMsU0FBUyxHQXlJNUM7QUF6SVksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4uL0ZNb2RlbC9GR2xvYmFsXCI7XHJcbmltcG9ydCB7IEZJbnZpdHlUYXNrSXRlbSB9IGZyb20gXCIuL0ZJbnZpdHlUYXNrSXRlbVwiO1xyXG5pbXBvcnQgeyBGU29ja2V0U2VuZCB9IGZyb20gXCIuLi9GTmV0V29yay9GU29ja2V0U2VuZFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBGSW52aXR5UGFnZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtSW52aXRlQ250OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtSW52aXRlQ29kZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbUludml0ZUxpbms6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgbVNjcm9sbDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1JbnZpdHlJdGVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgbUludml0eUVkaXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtUmV3YXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1JbnZpdGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbU1zZzE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtTXNnMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRvcFwiKS5oZWlnaHQgPSA4NSArIEZHbG9iYWwuZ2V0U2NhbGUoKTtcclxuICAgICAgICB0aGlzLm1SZXdhcmROb2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnRvcCA9IDcwMCArIEZHbG9iYWwuZ2V0U2NhbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQYWdlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMubVNjcm9sbC5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgIHRoaXMubVNjcm9sbC5zY3JvbGxUb1RvcCgwKTtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgRlNvY2tldFNlbmQuQzJTX3RyYW5zX2hpc3RvcnkoJ2ludml0ZScpO1xyXG4gICAgICAgIEZTREsuYWRkVXNlckluZm9MaXN0ZW4odGhpcy51c2VySW5mb0xpc3RlbiwgdGhpcyk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oRkV2ZW50SUQuUzJDX3RyYW5zX2hpc3RvcnksIHRoaXMuUzJDX3RyYW5zLCB0aGlzKTtcclxuICAgICAgICBGU0RLLmNsb3NlQmFubmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLm9mZihGRXZlbnRJRC5TMkNfdHJhbnNfaGlzdG9yeSwgdGhpcy5TMkNfdHJhbnMsIHRoaXMpO1xyXG4gICAgICAgIEZTREsub3BlbkJhbm5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIFMyQ190cmFucygpIHtcclxuICAgICAgICBsZXQgaW52aXRlVGFzayA9IEZHbG9iYWwuaW52aXRlX3Rhc2s7XHJcbiAgICAgICAgbGV0IGludml0ZVRhc2tDb25mID0gRkNvbmZpZy5jb25mLmludml0ZV90YXNrO1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIGxldCBqaiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbnZpdGVUYXNrQ29uZi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoRkdsb2JhbC5VU0VSX0lORk8uaW52aXRlX2NvdW50IDwgaW52aXRlVGFza0NvbmZbal0uY291bnQgJiYgIW51bSkge1xyXG4gICAgICAgICAgICAgICAgamogPSBqO1xyXG4gICAgICAgICAgICAgICAgbnVtID0gaW52aXRlVGFza0NvbmZbal0uY291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1Nc2cxLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYEludml0ZSAke251bSAtIEZHbG9iYWwuVVNFUl9JTkZPLmludml0ZV9jb3VudH0gbW9yZSBmcmllbmRzIGNhbiBnZXQgcmV3YXJkc2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnZpdGVUYXNrLmxlbmd0aCAhPSBqaikge1xyXG4gICAgICAgICAgICB0aGlzLm1Nc2cxLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYFlvdXIgcmV3YXJkcyBoYXZlbid0IGJlZW4gY2xpYW1lZGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vdXNlcmluZm/nm5HlkKxcclxuICAgIHVzZXJJbmZvTGlzdGVuKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwoXCLlm57osIPkv6Hmga8gIFwiLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMluaVsOaNrlxyXG4gICAgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tUmV3YXJkTm9kZS5hY3RpdmUgPSBGR2xvYmFsLlVTRVJfSU5GTy5pc0ZsYWc7XHJcbiAgICAgICAgdGhpcy5tSW52aXRlTm9kZS5hY3RpdmUgPSAhRkdsb2JhbC5VU0VSX0lORk8uaXNGbGFnICYmICFGR2xvYmFsLlVTRVJfSU5GTy5iZV9pbnZpdGU7XHJcbiAgICAgICAgdGhpcy5tSW52aXRlQ250LnN0cmluZyA9IGBJbnZpdGUgJHtGR2xvYmFsLlVTRVJfSU5GTy5pbnZpdGVfY291bnR9IEZyaWVuZHNgO1xyXG4gICAgICAgIHRoaXMubUludml0ZUNvZGUuc3RyaW5nID0gRkdsb2JhbC5VU0VSX0lORk8uaW52aXRlX2NvZGUgKyAnJztcclxuICAgICAgICB0aGlzLm1JbnZpdGVMaW5rLnN0cmluZyA9IEZDb25maWcuRlNES19DT05GLmxpbmsgKyAnJztcclxuICAgICAgICB0aGlzLm1Nc2cxLmFjdGl2ZSA9IHRoaXMubU1zZzIuYWN0aXZlID0gRkdsb2JhbC5VU0VSX0lORk8uaXNGbGFnO1xyXG4gICAgICAgIHRoaXMuaW5pdFRhc2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WkjeWItuaMiemSrlxyXG4gICAgY29weSh0YXJnZXQsIHR5cGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNvZGVcIjpcclxuICAgICAgICAgICAgICAgIEZTREsuY29weSh0aGlzLm1JbnZpdGVDb2RlLnN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVybFwiOlxyXG4gICAgICAgICAgICAgICAgRlNESy5jb3B5KHRoaXMubUludml0ZUxpbmsuc3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mCgOivt+aMiemSrlxyXG4gICAgY2xpY2tJbnZpdGUoKSB7XHJcbiAgICAgICAgRlNESy5zaGFyZShgJHtGQ29uZmlnLkdBTUVfTkFNRX0gaGF2ZSBmdW4uIFdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8gRG93bmxvYWQgaXQsIGlucHV0IHRoZSByZWZlciBjb2RlICR7dGhpcy5tSW52aXRlQ29kZS5zdHJpbmd9IHRvIGdldCByZXdhcmQuICR7dGhpcy5tSW52aXRlTGluay5zdHJpbmd9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liJ3lp4vljJbku7vliqFcclxuICAgIGluaXRUYXNrKCkge1xyXG4gICAgICAgIEZMb2cubm9ybWFsKFwi5piv5LiN5pivY29uZiBcIiwgRkNvbmZpZy5jb25mKTtcclxuICAgICAgICBsZXQgaW52aXRlVGFzayA9IEZDb25maWcuY29uZi5pbnZpdGVfdGFzaztcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGludml0ZVRhc2subGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKEZHbG9iYWwuVVNFUl9JTkZPLmludml0ZV9jb3VudCA8IGludml0ZVRhc2tbal0uY291bnQgJiYgIW51bSkge1xyXG4gICAgICAgICAgICAgICAgbnVtID0gaW52aXRlVGFza1tqXS5jb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMubU1zZzEuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgSW52aXRlICR7bnVtIC0gRkdsb2JhbC5VU0VSX0lORk8uaW52aXRlX2NvdW50fSBtb3JlIGZyaWVuZHMgY2FuIGdldCByZXdhcmRzYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludml0ZVRhc2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tU2Nyb2xsLmNvbnRlbnQuY2hpbGRyZW5Db3VudCA9PSBpbnZpdGVUYXNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMubVNjcm9sbC5jb250ZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubUludml0eUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLm1TY3JvbGwuY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChGSW52aXR5VGFza0l0ZW0pLnNldERhdGEoaSwgaW52aXRlVGFza1tpXSwgdGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/loavlhaXpgoDor7fnoIFcclxuICAgIGdldENvZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubUludml0eUVkaXQuc3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgRlNvY2tldFNlbmQuQzJTX2ludml0ZWQodGhpcy5tSW52aXR5RWRpdC5zdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgRlNESy5zaG93VG9hc3QoJ1NvcnJ5LCB0aGUgaW52aXRhdGlvbiBjb2RlIGNhbm5vdCBiZSBlbXB0eScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==