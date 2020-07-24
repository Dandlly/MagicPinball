import { FTransInfo } from "./FTransInfo";
import { FPanelManager } from "../FModel/FPanelManager";
import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FTransItem extends cc.Component {
    @property(cc.Sprite)
    mCardIcon: cc.Sprite = null;
    @property(cc.Label)
    mCoin: cc.Label = null;
    @property(cc.Label)
    mStatus: cc.Label = null;
    @property(cc.SpriteFrame)
    mCardIconSp: cc.SpriteFrame[] = [];
    @property(cc.Label)
    mAmount: cc.Label = null;
    @property(cc.Sprite)
    mIcon:cc.Sprite = null;
    data = null;
    confData = null;
    mFTransInfo: FTransInfo = null;
    onLoad() {
        cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
    }

    on_S2C_trans_history(msg) {
        if (!msg.err && msg.data.type == 'list') {
            for (let i = 0; i < msg.data.records.length; i++) {
                if (msg.data.records[i].custom_id == this.data.id) {
                    this.setStatus(msg.data.records[i]);
                }
            }
        }
    }

    setData(data, transInfo,icon=null) {
        if(icon){
            this.mIcon.spriteFrame = icon;
        }
        this.mFTransInfo = transInfo;
        this.data = data;
        this.mAmount.string = "$" + data.amount;
        if (!this.confData) {
            this.confData = this.getConfInfo();
        }
        this.data.count =this.confData.coin;
        this.mCoin.string = this.confData.coin;
        this.mCardIcon.spriteFrame = this.mCardIconSp[this.confData.type - 1];
        this.data['icon'] = this.mCardIconSp[this.confData.type - 1];
        if (this.confData.type == 1 && cc.sys.os == cc.sys.OS_IOS) {
            this.node.parent = null;
        }
        if (this.confData.type == 2 && cc.sys.os == cc.sys.OS_ANDROID) {
            this.node.parent = null;
        }

        if (FGlobal.USER_INFO.trans_record['list']) {
            for (let i = 0; i < FGlobal.USER_INFO.trans_record.list.length; i++) {
                if (FGlobal.USER_INFO.trans_record.list[i] == this.data.id) {
                    this.setStatus({ status: 0 });
                }
            }
        }
    }

    //返回配置表的信息
    getConfInfo() {
        for (let i = 0; i < FConfig.FSDK_CONF.LIST_CONF.target.length; i++) {
            if (this.data.id == FConfig.FSDK_CONF.LIST_CONF.target[i].id) {
                return FConfig.FSDK_CONF.LIST_CONF.target[i];
            }
        }
        return null;
    }

    click() {
        if (!FGlobal.USER_INFO.trans_record.list) {
            FGlobal.USER_INFO.trans_record.list = [];
        }
        for (let i = 0; i < FGlobal.USER_INFO.trans_record.list.length; i++) {
            if (FGlobal.USER_INFO.trans_record.list[i] == this.data.id) {
                FSDK.showToast('The order has been received');
                return;
            }
        }
        FPanelManager.open_eff(this.mFTransInfo.node);
        this.mFTransInfo.setData({
            data: this.data, confData: this.confData, cb: () => {

                FGlobal.USER_INFO.trans_record.list.push(this.data.id);
                this.setStatus({ status: 0 });
            }
        })
    }

    setStatus(data) {
        FLog.normal("有没有进来")
        let stutas = 'Processing';
        let color = 'FF8F00';
        switch (data.status) {
            case 0:
                stutas = 'Processing';
                color = 'FF8F00'
                break;
            case 1:
                stutas = 'Finish';
                color = '15C323'
                break;
            case 2:
                stutas = 'In Review';
                color = 'FF8F00'
                break;
            case -1:
                stutas = 'Refuse';
                color = 'D32424'
                break;
            case -2:
                stutas = 'GetFail';
                color = 'D32424'
                break;
        }
        this.mCoin.node.parent.parent.active = false;
        this.mStatus.node.active = true;
        this.mStatus.string = stutas;
        this.mStatus.node.color = new cc.Color().fromHEX(color);
    }
}
