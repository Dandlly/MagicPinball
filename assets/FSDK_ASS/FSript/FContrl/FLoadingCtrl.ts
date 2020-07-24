import { FGlobal } from "../FModel/FGlobal";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FLoadingCtrl extends cc.Component {
    //socket是否连接成功了
    IS_LOGINSUC = false;
    @property(cc.Sprite)
    s_pro: cc.Sprite = null;
    onLoad() {
        let data = {
            ip_release: "ws://47.254.87.23:20219/?pg=overseas_d",
            ip_debug: "wss://test.wps168.com:20212/?pg=overseas_d",
            pg: "com.light.overseas.demo",
            isDebug: false,
            test_aid: "2223222633",
            code:"overseas_d"
        }
        FSDK.init(data, this.loginSuc, this);
    }

    start() {
        // FNetWorkCtrl.getInstance().ConnetctServer(this.socketSuc,this)
    }

    onEnable() {
        
    }

    socketSuc() {
        FLog.normal("链接成功咯", this.IS_LOGINSUC);
    }

    loginSuc(msg) {
        console.log("登录信息  ", msg)
        this.IS_LOGINSUC = true;
        FSDK.addCreditListen(this.creditListen, this);
    }

    creditListen(msg) {
        FLog.normal("这个是credit监听1", msg);
    }

    update(dt) {
        if ((this.s_pro.fillRange < 0.8 || this.IS_LOGINSUC) && this.s_pro.fillRange < 1) {
            this.s_pro.fillRange += dt * 0.5;
            if (this.s_pro.fillRange >= 1) {


            }
        }
    }

    clickButton(target) {
        switch (target.target.name) {
            case "1":
                let data = {
                    ip_release: "",
                    ip_debug: "wss://test.wps168.com:20212/?pg=overseas_d",
                    pg: "com.light.overseas.demo",
                    isDebug: true,
                    test_aid: "2223262233",
                    code:"",
                    tos_img:null
                }
                FSDK.init(data, this.loginSuc, this);
                break;
            case "2":
                FSDK.showTwoCard(0,this.node)
                break;
            case "3":
                // FSDK.showSignTaskPage(this.node)
                FSDK.showTransList(this.node);
                break;
            case "4":
                // FSDK.showTaskPage(this.node, 100)
                FSDK.showInvityPage(this.node)
                break;
            case "5":
                // FSDK.showToLoad("测试Loading", 5);
                FSDK.showLeft(this.node,false,(data)=>{
                    FLog.normal("返回了什么   ",data)
                });
                break;
            case "6":
                FSDK.hideToLoad();
                let data2 = FSDK.getRandomReward();
                FLog.normal(data2)
                break;
            case "7":
                FSDK.showToast("测试TIP");
                break;
            case "8":
                FSDK.setCredit("credit", 10, "test");
                break;
            case "9":
                FSDK.setCredit("pp", FGlobal.randomFrom(0.1, 5), "test");
                break;
            case "10":
                FSDK.setCredit("gp", FGlobal.randomFrom(0.1, 5), "test");
                break;
            case "11":
                FSDK.showMarQuee(this.node);
                break;
            case "12":
                FSDK.showGrade(this.node, function (data) {
                    FLog.normal("评星  ", data)
                }, this);
                break;
            case "13":
                FSDK.openVideo("test", this.videoSuc, this);
                break;
            case "14":
                FSDK.openBanner();
                break;
            case "15":
                FSDK.closeBanner();
                break;
            case "16":
                FSDK.openInters(this.intersSuc, this);
                break;
            case "17":
                FSDK.getTransList(function (data) {
                    FLog.normal("看看返回吧  ", data);
                }, this);
                break;

        }
    }

    videoSuc() {
        FLog.normal("发反反复复11111");
    }

    intersSuc() {
        FLog.normal("发反反复复22222");
    }

}
