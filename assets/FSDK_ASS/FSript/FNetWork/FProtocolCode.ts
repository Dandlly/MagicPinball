class ProtocolCode {
    //测试hello
    static C2S_hello = {
        type: 'C2S_hello',
        data: {}
    }

    //登陆协议
    static C2S_reg_login = {
        type: 'C2S_reg_login',
        data: {
            pg: '',                      //*包名 默认为: com.free.gift.card.game 马甲包必须提供此参数, 用于判定升级
            ver_code: 0,               //客户端版本值, 用于判定升级
            info: {                      //*客户端信息, 每天发送一次
                pg: '',                  //包名
                ver: '',                 //客户端版本
                ver_code: 0,             //客户端版本值
                sdk_int: 0,              //系统版本值(Android版本)
                os_ver: '',              //*系统+版本
                lang: '',                //语言
                dev_fac: '',             //设备生产商
                dev_model: '',           //设备型号
                network: '',             //网络
                resolution: '',          //分辨率
                channel: '',             //渠道名
                root: 0,                 //*是否root,默认为0
                apk_comment: '',         //*安装apk时的comment
                tz: 0,                   //*时区(比如，中国为+8, 美国东部为-4)
                imsi: ''                 //*sim卡运营商标识码
            },
            aid: '',                 //Android ID
            idfa: '',                    //idfa
            adid: '',
            network_config: [''],        //网络配置
            // "": 正常
            // "Proxy": 通过代理方式
            // "VPN": 通过VPN方式
            // 比如: [""]表示正常
            // 比如: ["Proxy"]表示使用了代理
            // 比如: ["Proxy","VPN"]表示同时使用了代理和VPN
            conf_hash: '',                //*客户端缓存的配置的哈希值 原C2S_conf(hash)
            activate: 1,                  //*登录方式, 服务器根据此状态统计客户端的实际活跃时间  1.前端登陆(默认值)  0.后台登陆
            d: false,                     //*调试(默认为false)   !!!----- 开发/调试时打开 -----!!!   !!!----- 发包/上线时关闭 -----!!!
            server_tag: '',               //服务器标签
            // "": 表示默认的正服(默认值)
            // 其他: 表示其他服务器, 例如测服或开发服
            // !!!----- 标签不正确无法登陆 -----!!!
            // !!!----- 返回错误: INVALID_SERVER_TAG -----!!!
            relogin: false,               // *是否重连
            // 如果客户端不带此标志,服务器会自行判定是否重连(根据用户是否已经在线), 但不准确
            // 只要打开app后收到一次S2C_reg_login(不管成功还是失败)后，之后所有连接都算relogin.
            game_settings: true,          //*是否使用game_settings
            game_settings_info: {
                hash: '',
                zip: true
            }
            // 否(默认), <包代号>_client_settings表覆盖S2C_conf(conf.client)配置
            // 是, 返回game_settings_url,不影响S2C_conf(conf.client)配置
        }
    }

    //心跳包
    static C2S_heartbeat = {
        type: 'C2S_heartbeat',
        data: {}
    }

    //取得礼物的兑换记录
    static C2S_info = {
        type: 'C2S_info',
        data: {
            fields: []                           //S2C_info的字段列表 比如: ["gifts"]
        }
    }

    //礼物国家列表
    static C2S_gift_country = {
        type: 'C2S_gift_country',
        data: {}
    }

    //礼物列表
    static C2S_gift_list = {
        type: 'C2S_gift_list',
        data: {
            country: ''                           //国家(代码)  如果没有，则取用户礼品国家和IP国家
        }
    }

    //兑现
    static C2S_trans = {
        type: 'C2S_trans',
        data: {
            id: 0,                                 //礼物ID
            trans_email: '',                      //兑换邮箱
            mobile: '',                             //手机
            trans_type: ''
        }
    }

    //更新货币
    static C2S_update_credit = {
        type: 'C2S_update_credit',
        data: {
            change: 1,                                //变化值(正 或 负, 不能为0);
            from: '',                                 //变化来源信息(大类)
            detail: '',                                //变化明细信息(小类)
            conf_pos: []
        }
    }

    //更新其它货币
    static C2S_update_coin = {
        type: 'C2S_update_coin',
        data: {
            name: '',
            change: 1,                                //变化值(正 或 负, 不能为0);
            from: '',                                 //变化来源信息(大类)
            detail: '',                                //变化明细信息(小类)
            conf_pos: []
        }
    }

    //存储数据(单参数)
    static C2S_preference = {
        type: 'C2S_preference',
        data: {
            key: '',
            value: null,
            safe: true
        }
    }

    //存储数据(多参数)
    static C2S_preferences = {
        type: 'C2S_preferences',
        data: {}
    }

    //签到(每日)
    static C2S_daily_check_in = {
        type: 'C2S_daily_check_in',
        data: {}
    }

    //填入邀请码
    static C2S_invited = {
        type: 'C2S_invited',
        data: {
            code: ''
        }
    }

    //发送广播
    static C2S_broadcast = {
        type: 'C2S_broadcast',
        data: {
            msg: {
                def: ''
            }
        }
    }

    //发送谷歌广播
    static C2S_adwords = {
        type: 'C2S_adwords',
        data: {
            referrer: ""
        }
    }

    //推广APP任务状态更新通知
    static C2S_app_promo_task = {
        type: 'C2S_app_promo_task',
        data: {
            name: "",//任务名(唯一)
            action: 0//1.接受任务, state从0转为1    0.取消任务, state从1转为0     2.完成任务, state从1转为2
        }
    }

    //新模块兑换记录
    static C2S_trans_history = {
        type: 'C2S_trans_history',
        data: {
            type: ''//credit|invite|paypal|gpcard
        }
    }

    //广告统计
    static C2S_ad_event = {
        type: 'C2S_ad_event',
        data: {
            sdk: '',//广告商  admob,facebook....
            type: '',//广告类型   native原生 video视频 interstitial插屏 banner横幅
            event: 'impression'
        }
    }

    //计数器
    static C2S_add_counters = {
        type: 'C2S_add_counters',
        data: {
            name: '',
            cnt: 1
        }
    }

    //获取累计用户数量
    static C2S_pg_user_cnt = {
        type: 'C2S_pg_user_cnt',
        data: {
            pgs: []
        }
    }
}

(window)['ProtocolCode'] = ProtocolCode;