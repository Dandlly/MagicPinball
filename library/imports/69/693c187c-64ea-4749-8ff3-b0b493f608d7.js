"use strict";
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