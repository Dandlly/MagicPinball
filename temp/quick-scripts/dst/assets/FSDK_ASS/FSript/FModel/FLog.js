
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FModel/FLog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '693c1h8ZOpHSY/zsLST9gjX', 'FLog');
// FSDK_ASS/FSript/FModel/FLog.ts

var FLog = /** @class */ (function () {
    function FLog() {
    }
    //普通打印
    FLog.normal = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (FConfig.IS_LOG)
            console.log.apply(console, ['Cocos打印：', message].concat(optionalParams));
    };
    return FLog;
}());
window['FLog'] = FLog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk1vZGVsXFxGTG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFNQSxDQUFDO0lBTEcsTUFBTTtJQUNDLFdBQU0sR0FBYixVQUFjLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDakQsSUFBSSxPQUFPLENBQUMsTUFBTTtZQUNkLE9BQU8sQ0FBQyxHQUFHLE9BQVgsT0FBTyxHQUFLLFVBQVUsRUFBRSxPQUFPLFNBQUssY0FBYyxHQUFDO0lBQzNELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRkxvZyB7XHJcbiAgICAvL+aZrumAmuaJk+WNsFxyXG4gICAgc3RhdGljIG5vcm1hbChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoRkNvbmZpZy5JU19MT0cpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb2Nvc+aJk+WNsO+8micsIG1lc3NhZ2UsIC4uLm9wdGlvbmFsUGFyYW1zKVxyXG4gICAgfVxyXG59XHJcbndpbmRvd1snRkxvZyddID0gRkxvZzsiXX0=