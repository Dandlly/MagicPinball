import { FLogic } from "./FLogic";
import { FNetWork } from "./FNetWork";
import { FGlobal } from "../FModel/FGlobal";

export class FNetWorkCtrl {
    public static _instance: FNetWorkCtrl;
    public static cb = null;
    public static target = null;
    public static getInstance() {
        if (!FNetWorkCtrl._instance) {
            FNetWorkCtrl._instance = new FNetWorkCtrl();
        }
        return FNetWorkCtrl._instance;
    }

    //链接
    public ConnetctServer(cb,target) {
        FNetWorkCtrl.cb = cb;
        FNetWorkCtrl.target = target;
        FLogic.getInstance().removeCommonListenser();
        if (!FGlobal.NetWork) {
            FGlobal.NetWork = new FNetWork();
            FLogic.getInstance().addCommonListenser();
        };
        let parm = {
            host: FNetWorkConfig.getServerIp(),
            port: FNetWorkConfig.server_port
        };
        FGlobal.NetWork.int(parm, cb,target);
        FGlobal.NetWork.on(FEventID.EVENT_CLOSE, function () {
            FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
            FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
            FNetWorkCtrl.getInstance().onDropLine();
        });
        FGlobal.NetWork.on(FEventID.EVENT_IO_ERROR, function () {
            FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
            FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
            FNetWorkCtrl.getInstance().onDropLine();
        });
    }

    /** 
     * 当掉线或者是准备重连时
     */
    public onDropLine() {
        FSDK.showToLoad("Rebinding");
        console.error("这个是close监听")
        setTimeout(() => {
            FGlobal.NetWork.clearAllTime();
            FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
            FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
            FGlobal.NetWork = null;
            let data = FLogic.getInstance().cbList[FEventID.S2C_reg_login];
            FNetWorkCtrl.getInstance().ConnetctServer(function () {
                FSDK.login(FNetWorkConfig.data.pg, data.cb, data.target, FNetWorkConfig.data.test_aid)
            }, this)
        }, 3000);
    }

}