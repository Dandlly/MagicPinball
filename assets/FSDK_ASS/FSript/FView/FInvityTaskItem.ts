import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export class FInvityTaskItem extends cc.Component {
    @property(cc.Label)
    mAmount: cc.Label = null;
    @property(cc.Label)
    mTitle: cc.Label = null;
    @property(cc.Label)
    mPro: cc.Label = null;
    @property(cc.Sprite)
    sPro: cc.Sprite = null;
    @property(cc.Button)
    mBtnTrans: cc.Button = null;
    @property(cc.Label)
    mStaus: cc.Label = null;
    pos = 0;
    data = null;
    parent: cc.Node = null;
    onEnable() {
        cc.director.on(FEventID.S2C_trans_history, this.setHistory, this);
    }

    onDisable() {
        cc.director.off(FEventID.S2C_trans_history, this.setHistory, this);
    }

    setData(pos, data, parent) {
        this.pos = pos;
        this.data = data;
        this.parent = parent;
        this.mAmount.string = `$${data.amount}`;
        this.mTitle.string = `invite ${data.count} friends`;
        this.mPro.string = `${FGlobal.USER_INFO.invite_count}/${data.count}`;
        this.sPro.fillRange = FGlobal.USER_INFO.invite_count / data.count;
        this.mBtnTrans.interactable = this.sPro.fillRange >= 1;
    }

    getTrans() {
        FSDK.showTransPage(this.parent, this.data, () => {
            FGlobal.invite_task.push(this.data.id);
            this.setStatus({status:0});
        })
    }

    setHistory(data) {
        if (!this.data) return;
        if (data && data.data.records.length) {
            let type = data.data.type;
            data = data.data.records;
            if (type == 'invite') {
                for (let i = 0; i < data.length; i++) {
                    if (this.data.id == data[i].custom_id) {
                        this.setStatus(data[i]);
                    }
                }
            }
        }
        else {
            this.initStatus();
        }
    }

    setStatus(data) {
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
        this.mBtnTrans.node.active = false;
        this.mStaus.string = stutas;
        this.mStaus.node.color = new cc.Color().fromHEX(color);
    }

    initStatus() {
        if (!this.data) return;
        let data = FGlobal.invite_task;
        for (let i = 0; i < data.length; i++) {
            if (data[i] == this.data.id) {
                this.mStaus.node.active = true;
                this.setStatus({ status: 0 });
            }
        }
    }

}
