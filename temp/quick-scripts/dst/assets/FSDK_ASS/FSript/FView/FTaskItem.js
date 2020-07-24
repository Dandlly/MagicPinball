
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FView/FTaskItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '964a1qGV8xBfKpRjKogCFcQ', 'FTaskItem');
// FSDK_ASS/FSript/FView/FTaskItem.ts

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
var FTaskPage_1 = require("./FTaskPage");
var FGlobal_1 = require("../FModel/FGlobal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FTaskItem = /** @class */ (function (_super) {
    __extends(FTaskItem, _super);
    function FTaskItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mAmount = null;
        _this.mTitle = null;
        _this.mProSprite = null;
        _this.mProLabel = null;
        _this.mCollect = null;
        _this.mCard = null;
        _this.mAl = null;
        _this.pos = 0;
        _this.parent = null;
        _this.amount = 0;
        return _this;
    }
    FTaskItem.prototype.onLoad = function () {
    };
    FTaskItem.prototype.setOneData = function (now, i, parent) {
        this.pos = i;
        this.mAl.active = FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] && FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] == true;
        this.mCollect.node.active = !this.mAl.active;
        this.parent = parent;
        this.mAmount.string = "$" + FConfig.FSDK_CONF.TASK_CONF[0].amount[i];
        this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[0].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[0].target[i]);
        this.mProLabel.string = now + "/" + FConfig.FSDK_CONF.TASK_CONF[0].target[i];
        this.mProSprite.fillRange = now / FConfig.FSDK_CONF.TASK_CONF[0].target[i];
        this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !FGlobal_1.FGlobal.TASK_INFO[this.pos + ''];
        this.amount = FConfig.FSDK_CONF.TASK_CONF[0].amount[i];
    };
    FTaskItem.prototype.setMoreData = function (now, i, parent) {
        this.pos = i;
        this.mAl.active = FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] && FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] == true;
        this.mCollect.node.active = !this.mAl.active;
        this.parent = parent;
        this.mAmount.string = "$" + FConfig.FSDK_CONF.TASK_CONF[i].amount;
        this.mTitle.string = FConfig.FSDK_CONF.TASK_CONF[i].title.replace("#", FConfig.FSDK_CONF.TASK_CONF[i].target);
        this.mProLabel.string = now + "/" + FConfig.FSDK_CONF.TASK_CONF[i].target;
        this.mProSprite.fillRange = now / FConfig.FSDK_CONF.TASK_CONF[i].target;
        this.mCollect.interactable = this.mProSprite.fillRange >= 1 && !FGlobal_1.FGlobal.TASK_INFO[this.pos + ''];
        this.amount = FConfig.FSDK_CONF.TASK_CONF[i].amount;
    };
    FTaskItem.prototype.onEnable = function () {
        this.mCard.active = false;
    };
    FTaskItem.prototype.clickCollect = function () {
        this.moveCard();
    };
    //获取飘的起始点
    FTaskItem.prototype.getStartPosition = function () {
        var word = this.node.convertToWorldSpaceAR(this.node.getChildByName('pp').position);
        var start = this.parent.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return start;
    };
    //获取目标点
    FTaskItem.prototype.getEndPosition = function () {
        var word = this.parent.getComponent(FTaskPage_1.FTaskPage).mCardNode.convertToWorldSpaceAR(this.parent.getComponent(FTaskPage_1.FTaskPage).mCardNode.getChildByName('card').position);
        var end = this.parent.getChildByName('mainNode').convertToNodeSpaceAR(word);
        return end;
    };
    //卡飘上去
    FTaskItem.prototype.moveCard = function () {
        this.mCard.scale = 0.44;
        this.mCard.parent = this.parent.getChildByName('mainNode');
        this.mCard.position = this.getStartPosition();
        this.mCard.active = true;
        this.mCollect.interactable = false;
        this.mCollect.node.active = false;
        this.mAl.active = true;
        cc.tween(this.mCard)
            .to(0.5, { position: this.getEndPosition(), scale: 1 }, { easing: "sineIn" })
            .call(function () {
            this.mCard.active = false;
            this.mCard.parent = this.node;
            FSDK.setCredit("pp", this.amount, FConfig.CREDIT_FROM.TASK_REWARD);
            FGlobal_1.FGlobal.TASK_INFO[this.pos + ''] = true;
            FSDK.saveData('TASK_INFO', FGlobal_1.FGlobal.TASK_INFO);
        }.bind(this))
            .start();
    };
    __decorate([
        property(cc.Label)
    ], FTaskItem.prototype, "mAmount", void 0);
    __decorate([
        property(cc.Label)
    ], FTaskItem.prototype, "mTitle", void 0);
    __decorate([
        property(cc.Sprite)
    ], FTaskItem.prototype, "mProSprite", void 0);
    __decorate([
        property(cc.Label)
    ], FTaskItem.prototype, "mProLabel", void 0);
    __decorate([
        property(cc.Button)
    ], FTaskItem.prototype, "mCollect", void 0);
    __decorate([
        property(cc.Node)
    ], FTaskItem.prototype, "mCard", void 0);
    __decorate([
        property(cc.Node)
    ], FTaskItem.prototype, "mAl", void 0);
    FTaskItem = __decorate([
        ccclass
    ], FTaskItem);
    return FTaskItem;
}(cc.Component));
exports.FTaskItem = FTaskItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRlZpZXdcXEZUYXNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMsNkNBQTRDO0FBRXRDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBK0IsNkJBQVk7SUFEM0M7UUFBQSxxRUEyRkM7UUF4RkcsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsU0FBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUF5RWYsQ0FBQztJQXhFRywwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQWU7UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JC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USxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNFO0lBZFgsU0FBUztRQURyQixPQUFPO09BQ0ssU0FBUyxDQTBGckI7SUFBRCxnQkFBQztDQTFGRCxBQTBGQyxDQTFGOEIsRUFBRSxDQUFDLFNBQVMsR0EwRjFDO0FBMUZZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRlRhc2tQYWdlIH0gZnJvbSBcIi4vRlRhc2tQYWdlXCI7XHJcbmltcG9ydCB7IEZHbG9iYWwgfSBmcm9tIFwiLi4vRk1vZGVsL0ZHbG9iYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRlRhc2tJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1BbW91bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1UaXRsZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIG1Qcm9TcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtUHJvTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBtQ29sbGVjdDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbUNhcmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtQWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcG9zID0gMDtcclxuICAgIHBhcmVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBhbW91bnQgPSAwO1xyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRPbmVEYXRhKG5vdywgaSwgcGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBpO1xyXG4gICAgICAgIHRoaXMubUFsLmFjdGl2ZSA9IEZHbG9iYWwuVEFTS19JTkZPW3RoaXMucG9zICsgJyddICYmIEZHbG9iYWwuVEFTS19JTkZPW3RoaXMucG9zICsgJyddID09IHRydWU7XHJcbiAgICAgICAgdGhpcy5tQ29sbGVjdC5ub2RlLmFjdGl2ZSA9ICF0aGlzLm1BbC5hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5tQW1vdW50LnN0cmluZyA9IGAkJHtGQ29uZmlnLkZTREtfQ09ORi5UQVNLX0NPTkZbMF0uYW1vdW50W2ldfWA7XHJcbiAgICAgICAgdGhpcy5tVGl0bGUuc3RyaW5nID0gRkNvbmZpZy5GU0RLX0NPTkYuVEFTS19DT05GWzBdLnRpdGxlLnJlcGxhY2UoXCIjXCIsIEZDb25maWcuRlNES19DT05GLlRBU0tfQ09ORlswXS50YXJnZXRbaV0pO1xyXG4gICAgICAgIHRoaXMubVByb0xhYmVsLnN0cmluZyA9IGAke25vd30vJHtGQ29uZmlnLkZTREtfQ09ORi5UQVNLX0NPTkZbMF0udGFyZ2V0W2ldfWA7XHJcbiAgICAgICAgdGhpcy5tUHJvU3ByaXRlLmZpbGxSYW5nZSA9IG5vdyAvIEZDb25maWcuRlNES19DT05GLlRBU0tfQ09ORlswXS50YXJnZXRbaV07XHJcbiAgICAgICAgdGhpcy5tQ29sbGVjdC5pbnRlcmFjdGFibGUgPSB0aGlzLm1Qcm9TcHJpdGUuZmlsbFJhbmdlID49IDEgJiYgIUZHbG9iYWwuVEFTS19JTkZPW3RoaXMucG9zICsgJyddO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gRkNvbmZpZy5GU0RLX0NPTkYuVEFTS19DT05GWzBdLmFtb3VudFtpXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb3JlRGF0YShub3csIGksIHBhcmVudDogY2MuTm9kZSkge1xyXG4gICAgICAgIHRoaXMucG9zID0gaTtcclxuICAgICAgICB0aGlzLm1BbC5hY3RpdmUgPSBGR2xvYmFsLlRBU0tfSU5GT1t0aGlzLnBvcyArICcnXSAmJiBGR2xvYmFsLlRBU0tfSU5GT1t0aGlzLnBvcyArICcnXSA9PSB0cnVlO1xyXG4gICAgICAgIHRoaXMubUNvbGxlY3Qubm9kZS5hY3RpdmUgPSAhdGhpcy5tQWwuYWN0aXZlO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMubUFtb3VudC5zdHJpbmcgPSBgJCR7RkNvbmZpZy5GU0RLX0NPTkYuVEFTS19DT05GW2ldLmFtb3VudH1gO1xyXG4gICAgICAgIHRoaXMubVRpdGxlLnN0cmluZyA9IEZDb25maWcuRlNES19DT05GLlRBU0tfQ09ORltpXS50aXRsZS5yZXBsYWNlKFwiI1wiLCBGQ29uZmlnLkZTREtfQ09ORi5UQVNLX0NPTkZbaV0udGFyZ2V0KTtcclxuICAgICAgICB0aGlzLm1Qcm9MYWJlbC5zdHJpbmcgPSBgJHtub3d9LyR7RkNvbmZpZy5GU0RLX0NPTkYuVEFTS19DT05GW2ldLnRhcmdldH1gO1xyXG4gICAgICAgIHRoaXMubVByb1Nwcml0ZS5maWxsUmFuZ2UgPSBub3cgLyBGQ29uZmlnLkZTREtfQ09ORi5UQVNLX0NPTkZbaV0udGFyZ2V0O1xyXG4gICAgICAgIHRoaXMubUNvbGxlY3QuaW50ZXJhY3RhYmxlID0gdGhpcy5tUHJvU3ByaXRlLmZpbGxSYW5nZSA+PSAxICYmICFGR2xvYmFsLlRBU0tfSU5GT1t0aGlzLnBvcyArICcnXTtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IEZDb25maWcuRlNES19DT05GLlRBU0tfQ09ORltpXS5hbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5tQ2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja0NvbGxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W6aOY55qE6LW35aeL54K5XHJcbiAgICBnZXRTdGFydFBvc2l0aW9uKCkge1xyXG4gICAgICAgIGxldCB3b3JkID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BwJykucG9zaXRpb24pO1xyXG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMucGFyZW50LmdldENoaWxkQnlOYW1lKCdtYWluTm9kZScpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmQpO1xyXG4gICAgICAgIHJldHVybiBzdGFydDtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluebruagh+eCuVxyXG4gICAgZ2V0RW5kUG9zaXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHdvcmQgPSB0aGlzLnBhcmVudC5nZXRDb21wb25lbnQoRlRhc2tQYWdlKS5tQ2FyZE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucGFyZW50LmdldENvbXBvbmVudChGVGFza1BhZ2UpLm1DYXJkTm9kZS5nZXRDaGlsZEJ5TmFtZSgnY2FyZCcpLnBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgZW5kID0gdGhpcy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoJ21haW5Ob2RlJykuY29udmVydFRvTm9kZVNwYWNlQVIod29yZCk7XHJcbiAgICAgICAgcmV0dXJuIGVuZDtcclxuICAgIH1cclxuXHJcbiAgICAvL+WNoemjmOS4iuWOu1xyXG4gICAgbW92ZUNhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5tQ2FyZC5zY2FsZSA9IDAuNDQ7XHJcbiAgICAgICAgdGhpcy5tQ2FyZC5wYXJlbnQgPSB0aGlzLnBhcmVudC5nZXRDaGlsZEJ5TmFtZSgnbWFpbk5vZGUnKTtcclxuICAgICAgICB0aGlzLm1DYXJkLnBvc2l0aW9uID0gdGhpcy5nZXRTdGFydFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tQ2FyZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubUNvbGxlY3QuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tQ29sbGVjdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubUFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tQ2FyZClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBwb3NpdGlvbjogdGhpcy5nZXRFbmRQb3NpdGlvbigpLCBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KVxyXG4gICAgICAgICAgICAuY2FsbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1DYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tQ2FyZC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBGU0RLLnNldENyZWRpdChcInBwXCIsIHRoaXMuYW1vdW50LCBGQ29uZmlnLkNSRURJVF9GUk9NLlRBU0tfUkVXQVJEKTtcclxuICAgICAgICAgICAgICAgIEZHbG9iYWwuVEFTS19JTkZPW3RoaXMucG9zICsgJyddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEZTREsuc2F2ZURhdGEoJ1RBU0tfSU5GTycsIEZHbG9iYWwuVEFTS19JTkZPKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=