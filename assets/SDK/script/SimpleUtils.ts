
const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleUtils extends cc.Component {
    static debug: boolean = true;
    static getTimestamp(): number {
        return Math.round(new Date().getTime() / 1000)
    }

    static getRandomInt(max): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
    static setDebug(debug: boolean) {
        this.debug = debug;
    }
    static log(a: string) {
        if (SimpleUtils.debug) {
            cc.log("simple:" + a);
        }
    }

    static isEditor(): boolean {
        return !(cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID);
    }

    static getDictOrDefault(dict: {}, key: string, dv) {
        if (key in dict) {
            return dict[key];
        }
        else {
            return dv;
        }
    }
}
