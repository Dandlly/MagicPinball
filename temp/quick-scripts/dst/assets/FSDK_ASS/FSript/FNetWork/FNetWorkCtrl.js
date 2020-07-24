
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWorkCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk5ldFdvcmtcXEZOZXRXb3JrQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyx1Q0FBc0M7QUFDdEMsNkNBQTRDO0FBRTVDO0lBQUE7SUF1REEsQ0FBQztJQW5EaUIsd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUN6QixZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUk7SUFDRyxxQ0FBYyxHQUFyQixVQUFzQixFQUFFLEVBQUMsTUFBTTtRQUMzQixZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNyQixZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixlQUFNLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsaUJBQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsaUJBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDakMsZUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0M7UUFBQSxDQUFDO1FBQ0YsSUFBSSxJQUFJLEdBQUc7WUFDUCxJQUFJLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRTtZQUNsQyxJQUFJLEVBQUUsY0FBYyxDQUFDLFdBQVc7U0FDbkMsQ0FBQztRQUNGLGlCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLGlCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3JDLGlCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM3QyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUN4QyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzdDLGlCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUNBQVUsR0FBakI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMzQixVQUFVLENBQUM7WUFDUCxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMvQixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDN0MsaUJBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxHQUFHLGVBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9ELFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDMUYsQ0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFBO1FBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQW5EYSxlQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ1YsbUJBQU0sR0FBRyxJQUFJLENBQUM7SUFvRGhDLG1CQUFDO0NBdkRELEFBdURDLElBQUE7QUF2RFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGTG9naWMgfSBmcm9tIFwiLi9GTG9naWNcIjtcclxuaW1wb3J0IHsgRk5ldFdvcmsgfSBmcm9tIFwiLi9GTmV0V29ya1wiO1xyXG5pbXBvcnQgeyBGR2xvYmFsIH0gZnJvbSBcIi4uL0ZNb2RlbC9GR2xvYmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRk5ldFdvcmtDdHJsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgX2luc3RhbmNlOiBGTmV0V29ya0N0cmw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNiID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgdGFyZ2V0ID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFGTmV0V29ya0N0cmwuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEZOZXRXb3JrQ3RybC5faW5zdGFuY2UgPSBuZXcgRk5ldFdvcmtDdHJsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBGTmV0V29ya0N0cmwuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6ZO+5o6lXHJcbiAgICBwdWJsaWMgQ29ubmV0Y3RTZXJ2ZXIoY2IsdGFyZ2V0KSB7XHJcbiAgICAgICAgRk5ldFdvcmtDdHJsLmNiID0gY2I7XHJcbiAgICAgICAgRk5ldFdvcmtDdHJsLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICBGTG9naWMuZ2V0SW5zdGFuY2UoKS5yZW1vdmVDb21tb25MaXN0ZW5zZXIoKTtcclxuICAgICAgICBpZiAoIUZHbG9iYWwuTmV0V29yaykge1xyXG4gICAgICAgICAgICBGR2xvYmFsLk5ldFdvcmsgPSBuZXcgRk5ldFdvcmsoKTtcclxuICAgICAgICAgICAgRkxvZ2ljLmdldEluc3RhbmNlKCkuYWRkQ29tbW9uTGlzdGVuc2VyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgcGFybSA9IHtcclxuICAgICAgICAgICAgaG9zdDogRk5ldFdvcmtDb25maWcuZ2V0U2VydmVySXAoKSxcclxuICAgICAgICAgICAgcG9ydDogRk5ldFdvcmtDb25maWcuc2VydmVyX3BvcnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIEZHbG9iYWwuTmV0V29yay5pbnQocGFybSwgY2IsdGFyZ2V0KTtcclxuICAgICAgICBGR2xvYmFsLk5ldFdvcmsub24oRkV2ZW50SUQuRVZFTlRfQ0xPU0UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgRkdsb2JhbC5OZXRXb3JrLm9mZihGRXZlbnRJRC5FVkVOVF9DTE9TRSk7XHJcbiAgICAgICAgICAgIEZHbG9iYWwuTmV0V29yay5vZmYoRkV2ZW50SUQuRVZFTlRfSU9fRVJST1IpO1xyXG4gICAgICAgICAgICBGTmV0V29ya0N0cmwuZ2V0SW5zdGFuY2UoKS5vbkRyb3BMaW5lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgRkdsb2JhbC5OZXRXb3JrLm9uKEZFdmVudElELkVWRU5UX0lPX0VSUk9SLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEZHbG9iYWwuTmV0V29yay5vZmYoRkV2ZW50SUQuRVZFTlRfSU9fRVJST1IpO1xyXG4gICAgICAgICAgICBGR2xvYmFsLk5ldFdvcmsub2ZmKEZFdmVudElELkVWRU5UX0NMT1NFKTtcclxuICAgICAgICAgICAgRk5ldFdvcmtDdHJsLmdldEluc3RhbmNlKCkub25Ecm9wTGluZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOW9k+aOiee6v+aIluiAheaYr+WHhuWkh+mHjei/nuaXtlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Ecm9wTGluZSgpIHtcclxuICAgICAgICBGU0RLLnNob3dUb0xvYWQoXCJSZWJpbmRpbmdcIik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIui/meS4quaYr2Nsb3Nl55uR5ZCsXCIpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEZHbG9iYWwuTmV0V29yay5jbGVhckFsbFRpbWUoKTtcclxuICAgICAgICAgICAgRkdsb2JhbC5OZXRXb3JrLm9mZihGRXZlbnRJRC5FVkVOVF9DTE9TRSk7XHJcbiAgICAgICAgICAgIEZHbG9iYWwuTmV0V29yay5vZmYoRkV2ZW50SUQuRVZFTlRfSU9fRVJST1IpO1xyXG4gICAgICAgICAgICBGR2xvYmFsLk5ldFdvcmsgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IEZMb2dpYy5nZXRJbnN0YW5jZSgpLmNiTGlzdFtGRXZlbnRJRC5TMkNfcmVnX2xvZ2luXTtcclxuICAgICAgICAgICAgRk5ldFdvcmtDdHJsLmdldEluc3RhbmNlKCkuQ29ubmV0Y3RTZXJ2ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgRlNESy5sb2dpbihGTmV0V29ya0NvbmZpZy5kYXRhLnBnLCBkYXRhLmNiLCBkYXRhLnRhcmdldCwgRk5ldFdvcmtDb25maWcuZGF0YS50ZXN0X2FpZClcclxuICAgICAgICAgICAgfSwgdGhpcylcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuXHJcbn0iXX0=