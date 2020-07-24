
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FProtocolCode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d17fGOmnBOX4w39+ESCVd0', 'FProtocolCode');
// FSDK_ASS/FSript/FNetWork/FProtocolCode.ts

var ProtocolCode = /** @class */ (function () {
    function ProtocolCode() {
    }
    //测试hello
    ProtocolCode.C2S_hello = {
        type: 'C2S_hello',
        data: {}
    };
    //登陆协议
    ProtocolCode.C2S_reg_login = {
        type: 'C2S_reg_login',
        data: {
            pg: '',
            ver_code: 0,
            info: {
                pg: '',
                ver: '',
                ver_code: 0,
                sdk_int: 0,
                os_ver: '',
                lang: '',
                dev_fac: '',
                dev_model: '',
                network: '',
                resolution: '',
                channel: '',
                root: 0,
                apk_comment: '',
                tz: 0,
                imsi: '' //*sim卡运营商标识码
            },
            aid: '',
            idfa: '',
            adid: '',
            network_config: [''],
            // "": 正常
            // "Proxy": 通过代理方式
            // "VPN": 通过VPN方式
            // 比如: [""]表示正常
            // 比如: ["Proxy"]表示使用了代理
            // 比如: ["Proxy","VPN"]表示同时使用了代理和VPN
            conf_hash: '',
            activate: 1,
            d: false,
            server_tag: '',
            // "": 表示默认的正服(默认值)
            // 其他: 表示其他服务器, 例如测服或开发服
            // !!!----- 标签不正确无法登陆 -----!!!
            // !!!----- 返回错误: INVALID_SERVER_TAG -----!!!
            relogin: false,
            // 如果客户端不带此标志,服务器会自行判定是否重连(根据用户是否已经在线), 但不准确
            // 只要打开app后收到一次S2C_reg_login(不管成功还是失败)后，之后所有连接都算relogin.
            game_settings: true,
            game_settings_info: {
                hash: '',
                zip: true
            }
            // 否(默认), <包代号>_client_settings表覆盖S2C_conf(conf.client)配置
            // 是, 返回game_settings_url,不影响S2C_conf(conf.client)配置
        }
    };
    //心跳包
    ProtocolCode.C2S_heartbeat = {
        type: 'C2S_heartbeat',
        data: {}
    };
    //取得礼物的兑换记录
    ProtocolCode.C2S_info = {
        type: 'C2S_info',
        data: {
            fields: [] //S2C_info的字段列表 比如: ["gifts"]
        }
    };
    //礼物国家列表
    ProtocolCode.C2S_gift_country = {
        type: 'C2S_gift_country',
        data: {}
    };
    //礼物列表
    ProtocolCode.C2S_gift_list = {
        type: 'C2S_gift_list',
        data: {
            country: '' //国家(代码)  如果没有，则取用户礼品国家和IP国家
        }
    };
    //兑现
    ProtocolCode.C2S_trans = {
        type: 'C2S_trans',
        data: {
            id: 0,
            trans_email: '',
            mobile: '',
            trans_type: ''
        }
    };
    //更新货币
    ProtocolCode.C2S_update_credit = {
        type: 'C2S_update_credit',
        data: {
            change: 1,
            from: '',
            detail: '',
            conf_pos: []
        }
    };
    //更新其它货币
    ProtocolCode.C2S_update_coin = {
        type: 'C2S_update_coin',
        data: {
            name: '',
            change: 1,
            from: '',
            detail: '',
            conf_pos: []
        }
    };
    //存储数据(单参数)
    ProtocolCode.C2S_preference = {
        type: 'C2S_preference',
        data: {
            key: '',
            value: null,
            safe: true
        }
    };
    //存储数据(多参数)
    ProtocolCode.C2S_preferences = {
        type: 'C2S_preferences',
        data: {}
    };
    //签到(每日)
    ProtocolCode.C2S_daily_check_in = {
        type: 'C2S_daily_check_in',
        data: {}
    };
    //填入邀请码
    ProtocolCode.C2S_invited = {
        type: 'C2S_invited',
        data: {
            code: ''
        }
    };
    //发送广播
    ProtocolCode.C2S_broadcast = {
        type: 'C2S_broadcast',
        data: {
            msg: {
                def: ''
            }
        }
    };
    //发送谷歌广播
    ProtocolCode.C2S_adwords = {
        type: 'C2S_adwords',
        data: {
            referrer: ""
        }
    };
    //推广APP任务状态更新通知
    ProtocolCode.C2S_app_promo_task = {
        type: 'C2S_app_promo_task',
        data: {
            name: "",
            action: 0 //1.接受任务, state从0转为1    0.取消任务, state从1转为0     2.完成任务, state从1转为2
        }
    };
    //新模块兑换记录
    ProtocolCode.C2S_trans_history = {
        type: 'C2S_trans_history',
        data: {
            type: '' //credit|invite|paypal|gpcard
        }
    };
    //广告统计
    ProtocolCode.C2S_ad_event = {
        type: 'C2S_ad_event',
        data: {
            sdk: '',
            type: '',
            event: 'impression'
        }
    };
    //计数器
    ProtocolCode.C2S_add_counters = {
        type: 'C2S_add_counters',
        data: {
            name: '',
            cnt: 1
        }
    };
    //获取累计用户数量
    ProtocolCode.C2S_pg_user_cnt = {
        type: 'C2S_pg_user_cnt',
        data: {
            pgs: []
        }
    };
    return ProtocolCode;
}());
(window)['ProtocolCode'] = ProtocolCode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcRlNES19BU1NcXEZTcmlwdFxcRk5ldFdvcmtcXEZQcm90b2NvbENvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXNOQSxDQUFDO0lBck5HLFNBQVM7SUFDRixzQkFBUyxHQUFHO1FBQ2YsSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLEVBQUU7S0FDWCxDQUFBO0lBRUQsTUFBTTtJQUNDLDBCQUFhLEdBQUc7UUFDbkIsSUFBSSxFQUFFLGVBQWU7UUFDckIsSUFBSSxFQUFFO1lBQ0YsRUFBRSxFQUFFLEVBQUU7WUFDTixRQUFRLEVBQUUsQ0FBQztZQUNYLElBQUksRUFBRTtnQkFDRixFQUFFLEVBQUUsRUFBRTtnQkFDTixHQUFHLEVBQUUsRUFBRTtnQkFDUCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUUsRUFBRTtnQkFDVixJQUFJLEVBQUUsRUFBRTtnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsRUFBRTtnQkFDWCxVQUFVLEVBQUUsRUFBRTtnQkFDZCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxXQUFXLEVBQUUsRUFBRTtnQkFDZixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsRUFBRSxDQUFpQixhQUFhO2FBQ3pDO1lBQ0QsR0FBRyxFQUFFLEVBQUU7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BCLFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsbUNBQW1DO1lBQ25DLFNBQVMsRUFBRSxFQUFFO1lBQ2IsUUFBUSxFQUFFLENBQUM7WUFDWCxDQUFDLEVBQUUsS0FBSztZQUNSLFVBQVUs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Q0YsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsQ0FBQyxDQUFBLGlFQUFpRTtTQUM3RTtLQUNKLENBQUE7SUFFRCxTQUFTO0lBQ0YsOEJBQWlCLEdBQUc7UUFDdkIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsRUFBRSxDQUFBLDZCQUE2QjtTQUN4QztLQUNKLENBQUE7SUFFRCxNQUFNO0lBQ0MseUJBQVksR0FBRztRQUNsQixJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUU7WUFDRixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFlBQVk7U0FDdEI7S0FDSixDQUFBO0lBRUQsS0FBSztJQUNFLDZCQUFnQixHQUFHO1FBQ3RCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsQ0FBQztTQUNUO0tBQ0osQ0FBQTtJQUVELFVBQVU7SUFDSCw0QkFBZSxHQUFHO1FBQ3JCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsSUFBSSxFQUFFO1lBQ0YsR0FBRyxFQUFFLEVBQUU7U0FDVjtLQUNKLENBQUE7SUFDTCxtQkFBQztDQXRORCxBQXNOQyxJQUFBO0FBRUQsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxZQUFZLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm90b2NvbENvZGUge1xyXG4gICAgLy/mtYvor5VoZWxsb1xyXG4gICAgc3RhdGljIEMyU19oZWxsbyA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX2hlbGxvJyxcclxuICAgICAgICBkYXRhOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8v55m76ZmG5Y2P6K6uXHJcbiAgICBzdGF0aWMgQzJTX3JlZ19sb2dpbiA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX3JlZ19sb2dpbicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwZzogJycsICAgICAgICAgICAgICAgICAgICAgIC8vKuWMheWQjSDpu5jorqTkuLo6IGNvbS5mcmVlLmdpZnQuY2FyZC5nYW1lIOmprOeUsuWMheW/hemhu+aPkOS+m+atpOWPguaVsCwg55So5LqO5Yik5a6a5Y2H57qnXHJcbiAgICAgICAgICAgIHZlcl9jb2RlOiAwLCAgICAgICAgICAgICAgIC8v5a6i5oi356uv54mI5pys5YC8LCDnlKjkuo7liKTlrprljYfnuqdcclxuICAgICAgICAgICAgaW5mbzogeyAgICAgICAgICAgICAgICAgICAgICAvLyrlrqLmiLfnq6/kv6Hmga8sIOavj+WkqeWPkemAgeS4gOasoVxyXG4gICAgICAgICAgICAgICAgcGc6ICcnLCAgICAgICAgICAgICAgICAgIC8v5YyF5ZCNXHJcbiAgICAgICAgICAgICAgICB2ZXI6ICcnLCAgICAgICAgICAgICAgICAgLy/lrqLmiLfnq6/niYjmnKxcclxuICAgICAgICAgICAgICAgIHZlcl9jb2RlOiAwLCAgICAgICAgICAgICAvL+WuouaIt+err+eJiOacrOWAvFxyXG4gICAgICAgICAgICAgICAgc2RrX2ludDogMCwgICAgICAgICAgICAgIC8v57O757uf54mI5pys5YC8KEFuZHJvaWTniYjmnKwpXHJcbiAgICAgICAgICAgICAgICBvc192ZXI6ICcnLCAgICAgICAgICAgICAgLy8q57O757ufK+eJiOacrFxyXG4gICAgICAgICAgICAgICAgbGFuZzogJycsICAgICAgICAgICAgICAgIC8v6K+t6KiAXHJcbiAgICAgICAgICAgICAgICBkZXZfZmFjOiAnJywgICAgICAgICAgICAgLy/orr7lpIfnlJ/kuqfllYZcclxuICAgICAgICAgICAgICAgIGRldl9tb2RlbDogJycsICAgICAgICAgICAvL+iuvuWkh+Wei+WPt1xyXG4gICAgICAgICAgICAgICAgbmV0d29yazogJycsICAgICAgICAgICAgIC8v572R57ucXHJcbiAgICAgICAgICAgICAgICByZXNvbHV0aW9uOiAnJywgICAgICAgICAgLy/liIbovqjnjodcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6ICcnLCAgICAgICAgICAgICAvL+a4oOmBk+WQjVxyXG4gICAgICAgICAgICAgICAgcm9vdDogMCwgICAgICAgICAgICAgICAgIC8vKuaYr+WQpnJvb3Qs6buY6K6k5Li6MFxyXG4gICAgICAgICAgICAgICAgYXBrX2NvbW1lbnQ6ICcnLCAgICAgICAgIC8vKuWuieijhWFwa+aXtueahGNvbW1lbnRcclxuICAgICAgICAgICAgICAgIHR6OiAwLCAgICAgICAgICAgICAgICAgICAvLyrml7bljLoo5q+U5aaC77yM5Lit5Zu95Li6KzgsIOe+juWbveS4nOmDqOS4ui00KVxyXG4gICAgICAgICAgICAgICAgaW1zaTogJycgICAgICAgICAgICAgICAgIC8vKnNpbeWNoei/kOiQpeWVhuagh+ivhueggVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhaWQ6ICcnLCAgICAgICAgICAgICAgICAgLy9BbmRyb2lkIElEXHJcbiAgICAgICAgICAgIGlkZmE6ICcnLCAgICAgICAgICAgICAgICAgICAgLy9pZGZhXHJcbiAgICAgICAgICAgIGFkaWQ6ICcnLFxyXG4gICAgICAgICAgICBuZXR3b3JrX2NvbmZpZzogWycnXSwgICAgICAgIC8v572R57uc6YWN572uXHJcbiAgICAgICAgICAgIC8vIFwiXCI6IOato+W4uFxyXG4gICAgICAgICAgICAvLyBcIlByb3h5XCI6IOmAmui/h+S7o+eQhuaWueW8j1xyXG4gICAgICAgICAgICAvLyBcIlZQTlwiOiDpgJrov4dWUE7mlrnlvI9cclxuICAgICAgICAgICAgLy8g5q+U5aaCOiBbXCJcIl3ooajnpLrmraPluLhcclxuICAgICAgICAgICAgLy8g5q+U5aaCOiBbXCJQcm94eVwiXeihqOekuuS9v+eUqOS6huS7o+eQhlxyXG4gICAgICAgICAgICAvLyDmr5TlpoI6IFtcIlByb3h5XCIsXCJWUE5cIl3ooajnpLrlkIzml7bkvb/nlKjkuobku6PnkIblkoxWUE5cclxuICAgICAgICAgICAgY29uZl9oYXNoOiAnJywgICAgICAgICAgICAgICAgLy8q5a6i5oi356uv57yT5a2Y55qE6YWN572u55qE5ZOI5biM5YC8IOWOn0MyU19jb25mKGhhc2gpXHJcbiAgICAgICAgICAgIGFjdGl2YXRlOiAxLCAgICAgICAgICAgICAgICAgIC8vKueZu+W9leaWueW8jywg5pyN5Yqh5Zmo5qC55o2u5q2k54q25oCB57uf6K6h5a6i5oi356uv55qE5a6e6ZmF5rS76LeD5pe26Ze0ICAxLuWJjeerr+eZu+mZhijpu5jorqTlgLwpICAwLuWQjuWPsOeZu+mZhlxyXG4gICAgICAgICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAvLyrosIPor5Uo6buY6K6k5Li6ZmFsc2UpICAgISEhLS0tLS0g5byA5Y+RL+iwg+ivleaXtuaJk+W8gCAtLS0tLSEhISAgICEhIS0tLS0tIOWPkeWMhS/kuIrnur/ml7blhbPpl60gLS0tLS0hISFcclxuICAgICAgICAgICAgc2VydmVyX3RhZzogJycsICAgICAgICAgICAgICAgLy/mnI3liqHlmajmoIfnrb5cclxuICAgICAgICAgICAgLy8gXCJcIjog6KGo56S66buY6K6k55qE5q2j5pyNKOm7mOiupOWAvClcclxuICAgICAgICAgICAgLy8g5YW25LuWOiDooajnpLrlhbbku5bmnI3liqHlmagsIOS+i+Wmgua1i+acjeaIluW8gOWPkeacjVxyXG4gICAgICAgICAgICAvLyAhISEtLS0tLSDmoIfnrb7kuI3mraPnoa7ml6Dms5XnmbvpmYYgLS0tLS0hISFcclxuICAgICAgICAgICAgLy8gISEhLS0tLS0g6L+U5Zue6ZSZ6K+vOiBJTlZBTElEX1NFUlZFUl9UQUcgLS0tLS0hISFcclxuICAgICAgICAgICAgcmVsb2dpbjogZmFsc2UsICAgICAgICAgICAgICAgLy8gKuaYr+WQpumHjei/nlxyXG4gICAgICAgICAgICAvLyDlpoLmnpzlrqLmiLfnq6/kuI3luKbmraTmoIflv5cs5pyN5Yqh5Zmo5Lya6Ieq6KGM5Yik5a6a5piv5ZCm6YeN6L+eKOagueaNrueUqOaIt+aYr+WQpuW3sue7j+WcqOe6vyksIOS9huS4jeWHhuehrlxyXG4gICAgICAgICAgICAvLyDlj6ropoHmiZPlvIBhcHDlkI7mlLbliLDkuIDmrKFTMkNfcmVnX2xvZ2luKOS4jeeuoeaIkOWKn+i/mOaYr+Wksei0pSnlkI7vvIzkuYvlkI7miYDmnInov57mjqXpg73nrpdyZWxvZ2luLlxyXG4gICAgICAgICAgICBnYW1lX3NldHRpbmdzOiB0cnVlLCAgICAgICAgICAvLyrmmK/lkKbkvb/nlKhnYW1lX3NldHRpbmdzXHJcbiAgICAgICAgICAgIGdhbWVfc2V0dGluZ3NfaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgaGFzaDogJycsXHJcbiAgICAgICAgICAgICAgICB6aXA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlkKYo6buY6K6kKSwgPOWMheS7o+WPtz5fY2xpZW50X3NldHRpbmdz6KGo6KaG55uWUzJDX2NvbmYoY29uZi5jbGllbnQp6YWN572uXHJcbiAgICAgICAgICAgIC8vIOaYrywg6L+U5ZueZ2FtZV9zZXR0aW5nc191cmws5LiN5b2x5ZONUzJDX2NvbmYoY29uZi5jbGllbnQp6YWN572uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5b+D6Lez5YyFXHJcbiAgICBzdGF0aWMgQzJTX2hlYXJ0YmVhdCA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX2hlYXJ0YmVhdCcsXHJcbiAgICAgICAgZGF0YToge31cclxuICAgIH1cclxuXHJcbiAgICAvL+WPluW+l+ekvOeJqeeahOWFkeaNouiusOW9lVxyXG4gICAgc3RhdGljIEMyU19pbmZvID0ge1xyXG4gICAgICAgIHR5cGU6ICdDMlNfaW5mbycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBmaWVsZHM6IFtdICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9TMkNfaW5mb+eahOWtl+auteWIl+ihqCDmr5TlpoI6IFtcImdpZnRzXCJdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v56S854mp5Zu95a625YiX6KGoXHJcbiAgICBzdGF0aWMgQzJTX2dpZnRfY291bnRyeSA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX2dpZnRfY291bnRyeScsXHJcbiAgICAgICAgZGF0YToge31cclxuICAgIH1cclxuXHJcbiAgICAvL+ekvOeJqeWIl+ihqFxyXG4gICAgc3RhdGljIEMyU19naWZ0X2xpc3QgPSB7XHJcbiAgICAgICAgdHlwZTogJ0MyU19naWZ0X2xpc3QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY291bnRyeTogJycgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbveWutijku6PnoIEpICDlpoLmnpzmsqHmnInvvIzliJnlj5bnlKjmiLfnpLzlk4Hlm73lrrblkoxJUOWbveWutlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WFkeeOsFxyXG4gICAgc3RhdGljIEMyU190cmFucyA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX3RyYW5zJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlkOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v56S854mpSURcclxuICAgICAgICAgICAgdHJhbnNfZW1haWw6ICcnLCAgICAgICAgICAgICAgICAgICAgICAvL+WFkeaNoumCrueusVxyXG4gICAgICAgICAgICBtb2JpbGU6ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/miYvmnLpcclxuICAgICAgICAgICAgdHJhbnNfdHlwZTogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mm7TmlrDotKfluIFcclxuICAgIHN0YXRpYyBDMlNfdXBkYXRlX2NyZWRpdCA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX3VwZGF0ZV9jcmVkaXQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2hhbmdlOiAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lj5jljJblgLwo5q2jIOaIliDotJ8sIOS4jeiDveS4ujApO1xyXG4gICAgICAgICAgICBmcm9tOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WPmOWMluadpea6kOS/oeaBryjlpKfnsbspXHJcbiAgICAgICAgICAgIGRldGFpbDogJycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WPmOWMluaYjue7huS/oeaBryjlsI/nsbspXHJcbiAgICAgICAgICAgIGNvbmZfcG9zOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+abtOaWsOWFtuWug+i0p+W4gVxyXG4gICAgc3RhdGljIEMyU191cGRhdGVfY29pbiA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX3VwZGF0ZV9jb2luJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBjaGFuZ2U6IDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WPmOWMluWAvCjmraMg5oiWIOi0nywg5LiN6IO95Li6MCk7XHJcbiAgICAgICAgICAgIGZyb206ICcnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+Y5YyW5p2l5rqQ5L+h5oGvKOWkp+exuylcclxuICAgICAgICAgICAgZGV0YWlsOiAnJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+Y5YyW5piO57uG5L+h5oGvKOWwj+exuylcclxuICAgICAgICAgICAgY29uZl9wb3M6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5a2Y5YKo5pWw5o2uKOWNleWPguaVsClcclxuICAgIHN0YXRpYyBDMlNfcHJlZmVyZW5jZSA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX3ByZWZlcmVuY2UnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAga2V5OiAnJyxcclxuICAgICAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgIHNhZmU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lrZjlgqjmlbDmja4o5aSa5Y+C5pWwKVxyXG4gICAgc3RhdGljIEMyU19wcmVmZXJlbmNlcyA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX3ByZWZlcmVuY2VzJyxcclxuICAgICAgICBkYXRhOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8v562+5YiwKOavj+aXpSlcclxuICAgIHN0YXRpYyBDMlNfZGFpbHlfY2hlY2tfaW4gPSB7XHJcbiAgICAgICAgdHlwZTogJ0MyU19kYWlseV9jaGVja19pbicsXHJcbiAgICAgICAgZGF0YToge31cclxuICAgIH1cclxuXHJcbiAgICAvL+Whq+WFpemCgOivt+eggVxyXG4gICAgc3RhdGljIEMyU19pbnZpdGVkID0ge1xyXG4gICAgICAgIHR5cGU6ICdDMlNfaW52aXRlZCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjb2RlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WPkemAgeW5v+aSrVxyXG4gICAgc3RhdGljIEMyU19icm9hZGNhc3QgPSB7XHJcbiAgICAgICAgdHlwZTogJ0MyU19icm9hZGNhc3QnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbXNnOiB7XHJcbiAgICAgICAgICAgICAgICBkZWY6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lj5HpgIHosLfmrYzlub/mkq1cclxuICAgIHN0YXRpYyBDMlNfYWR3b3JkcyA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX2Fkd29yZHMnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgcmVmZXJyZXI6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mjqjlub9BUFDku7vliqHnirbmgIHmm7TmlrDpgJrnn6VcclxuICAgIHN0YXRpYyBDMlNfYXBwX3Byb21vX3Rhc2sgPSB7XHJcbiAgICAgICAgdHlwZTogJ0MyU19hcHBfcHJvbW9fdGFzaycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLC8v5Lu75Yqh5ZCNKOWUr+S4gClcclxuICAgICAgICAgICAgYWN0aW9uOiAwLy8xLuaOpeWPl+S7u+WKoSwgc3RhdGXku44w6L2s5Li6MSAgICAwLuWPlua2iOS7u+WKoSwgc3RhdGXku44x6L2s5Li6MCAgICAgMi7lrozmiJDku7vliqEsIHN0YXRl5LuOMei9rOS4ujJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlrDmqKHlnZflhZHmjaLorrDlvZVcclxuICAgIHN0YXRpYyBDMlNfdHJhbnNfaGlzdG9yeSA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX3RyYW5zX2hpc3RvcnknLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogJycvL2NyZWRpdHxpbnZpdGV8cGF5cGFsfGdwY2FyZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+W5v+WRiue7n+iuoVxyXG4gICAgc3RhdGljIEMyU19hZF9ldmVudCA9IHtcclxuICAgICAgICB0eXBlOiAnQzJTX2FkX2V2ZW50JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHNkazogJycsLy/lub/lkYrllYYgIGFkbW9iLGZhY2Vib29rLi4uLlxyXG4gICAgICAgICAgICB0eXBlOiAnJywvL+W5v+WRiuexu+WeiyAgIG5hdGl2ZeWOn+eUnyB2aWRlb+inhumikSBpbnRlcnN0aXRpYWzmj5LlsY8gYmFubmVy5qiq5bmFXHJcbiAgICAgICAgICAgIGV2ZW50OiAnaW1wcmVzc2lvbidcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/orqHmlbDlmahcclxuICAgIHN0YXRpYyBDMlNfYWRkX2NvdW50ZXJzID0ge1xyXG4gICAgICAgIHR5cGU6ICdDMlNfYWRkX2NvdW50ZXJzJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBjbnQ6IDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bntK/orqHnlKjmiLfmlbDph49cclxuICAgIHN0YXRpYyBDMlNfcGdfdXNlcl9jbnQgPSB7XHJcbiAgICAgICAgdHlwZTogJ0MyU19wZ191c2VyX2NudCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwZ3M6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4od2luZG93KVsnUHJvdG9jb2xDb2RlJ10gPSBQcm90b2NvbENvZGU7Il19