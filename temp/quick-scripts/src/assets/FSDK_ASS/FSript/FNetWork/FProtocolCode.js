"use strict";
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