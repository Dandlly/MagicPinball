"use strict";
cc._RF.push(module, 'f26fdNkMlxGnIxj+ChZEwQ7', 'FNetWorkCtrl');
// FSDK_ASS/FSript/FNetWork/FNetWorkCtrl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FLogic_1 = require("./FLogic");
var FNetWork_1 = require("./FNetWork");
var FGlobal_1 = require("../FModel/FGlobal");
var FNetWorkCtrl = /** @class */ (function () {
    function FNetWorkCtrl() {
    }
    FNetWorkCtrl.getInstance = function () {
        if (!FNetWorkCtrl._instance) {
            FNetWorkCtrl._instance = new FNetWorkCtrl();
        }
        return FNetWorkCtrl._instance;
    };
    //链接
    FNetWorkCtrl.prototype.ConnetctServer = function (cb, target) {
        FNetWorkCtrl.cb = cb;
        FNetWorkCtrl.target = target;
        FLogic_1.FLogic.getInstance().removeCommonListenser();
        if (!FGlobal_1.FGlobal.NetWork) {
            FGlobal_1.FGlobal.NetWork = new FNetWork_1.FNetWork();
            FLogic_1.FLogic.getInstance().addCommonListenser();
        }
        ;
        var parm = {
            host: FNetWorkConfig.getServerIp(),
            port: FNetWorkConfig.server_port
        };
        FGlobal_1.FGlobal.NetWork.int(parm, cb, target);
        FGlobal_1.FGlobal.NetWork.on(FEventID.EVENT_CLOSE, function () {
            FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
            FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
            FNetWorkCtrl.getInstance().onDropLine();
        });
        FGlobal_1.FGlobal.NetWork.on(FEventID.EVENT_IO_ERROR, function () {
            FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
            FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
            FNetWorkCtrl.getInstance().onDropLine();
        });
    };
    /**
     * 当掉线或者是准备重连时
     */
    FNetWorkCtrl.prototype.onDropLine = function () {
        var _this = this;
        FSDK.showToLoad("Rebinding");
        console.error("这个是close监听");
        setTimeout(function () {
            FGlobal_1.FGlobal.NetWork.clearAllTime();
            FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
            FGlobal_1.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
            FGlobal_1.FGlobal.NetWork = null;
            var data = FLogic_1.FLogic.getInstance().cbList[FEventID.S2C_reg_login];
            FNetWorkCtrl.getInstance().ConnetctServer(function () {
                FSDK.login(FNetWorkConfig.data.pg, data.cb, data.target, FNetWorkConfig.data.test_aid);
            }, _this);
        }, 3000);
    };
    FNetWorkCtrl.cb = null;
    FNetWorkCtrl.target = null;
    return FNetWorkCtrl;
}());
exports.FNetWorkCtrl = FNetWorkCtrl;

cc._RF.pop();