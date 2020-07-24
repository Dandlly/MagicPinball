
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWorkConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e79f0Kr975KMJcFzmDP5351', 'FNetWorkConfig');
// FSDK_ASS/FSript/FNetWork/FNetWorkConfig.ts

var FNetWorkConfig = /** @class */ (function () {
    function FNetWorkConfig() {
    }
    //获取socket地址，是测试服还是正式服
    FNetWorkConfig.getServerIp = function () {
        return FConfig.IS_DEBUG ? FNetWorkConfig.server_ip_debug : FNetWorkConfig.server_ip_release;
    };
    ;
    //测试服socket地址
    FNetWorkConfig.server_ip_debug = "";
    //正式服socket地址
    FNetWorkConfig.server_ip_release = "";
    //socket连接端口
    FNetWorkConfig.server_port = 8056;
    //登录信息
    FNetWorkConfig.data = {
        ip_release: "",
        ip_debug: "",
        pg: "",
        isDebug: false,
        test_aid: "",
        code: "",
        tos_img: null
    };
    return FNetWorkConfig;
}());
window['FNetWorkConfig'] = FNetWorkConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk5ldFdvcmtcXEZOZXRXb3JrQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFxQkEsQ0FBQztJQUpHLHNCQUFzQjtJQUNmLDBCQUFXLEdBQWxCO1FBQ0ksT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7SUFDaEcsQ0FBQztJQUFBLENBQUM7SUFuQkYsYUFBYTtJQUNOLDhCQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLGFBQWE7SUFDTixnQ0FBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsWUFBWTtJQUNMLDBCQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE1BQU07SUFDQyxtQkFBSSxHQUFHO1FBQ1YsVUFBVSxFQUFFLEVBQUU7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLEVBQUUsRUFBRSxFQUFFO1FBQ04sT0FBTyxFQUFFLEtBQUs7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBQyxFQUFFO1FBQ1AsT0FBTyxFQUFDLElBQUk7S0FDZixDQUFDO0lBS04scUJBQUM7Q0FyQkQsQUFxQkMsSUFBQTtBQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGNBQWMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZOZXRXb3JrQ29uZmlnIHtcclxuICAgIC8v5rWL6K+V5pyNc29ja2V05Zyw5Z2AXHJcbiAgICBzdGF0aWMgc2VydmVyX2lwX2RlYnVnID0gXCJcIjtcclxuICAgIC8v5q2j5byP5pyNc29ja2V05Zyw5Z2AXHJcbiAgICBzdGF0aWMgc2VydmVyX2lwX3JlbGVhc2UgPSBcIlwiO1xyXG4gICAgLy9zb2NrZXTov57mjqXnq6/lj6NcclxuICAgIHN0YXRpYyBzZXJ2ZXJfcG9ydCA9IDgwNTY7XHJcbiAgICAvL+eZu+W9leS/oeaBr1xyXG4gICAgc3RhdGljIGRhdGEgPSB7XHJcbiAgICAgICAgaXBfcmVsZWFzZTogXCJcIixcclxuICAgICAgICBpcF9kZWJ1ZzogXCJcIixcclxuICAgICAgICBwZzogXCJcIixcclxuICAgICAgICBpc0RlYnVnOiBmYWxzZSxcclxuICAgICAgICB0ZXN0X2FpZDogXCJcIixcclxuICAgICAgICBjb2RlOlwiXCIsXHJcbiAgICAgICAgdG9zX2ltZzpudWxsXHJcbiAgICB9O1xyXG4gICAgLy/ojrflj5Zzb2NrZXTlnLDlnYDvvIzmmK/mtYvor5XmnI3ov5jmmK/mraPlvI/mnI1cclxuICAgIHN0YXRpYyBnZXRTZXJ2ZXJJcCgpIHtcclxuICAgICAgICByZXR1cm4gRkNvbmZpZy5JU19ERUJVRyA/IEZOZXRXb3JrQ29uZmlnLnNlcnZlcl9pcF9kZWJ1ZyA6IEZOZXRXb3JrQ29uZmlnLnNlcnZlcl9pcF9yZWxlYXNlO1xyXG4gICAgfTtcclxufVxyXG53aW5kb3dbJ0ZOZXRXb3JrQ29uZmlnJ10gPSBGTmV0V29ya0NvbmZpZzsiXX0=