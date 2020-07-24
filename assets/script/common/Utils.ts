/**
 * 工具类
 * @author yxx0
 */

class Utils {
    /**
     * 根据权重返回数组里面的元素，要求arr1和arr2数组长度一样
     * @param arr1 产生随机结果的数组
     * @param arr2 控制权重的数组，要求arr2元素个数和arr1元素个数对应
    */
    public randomByWeight(arr1: any[], arr2: any[]): any {
        if (arr1.length != arr2.length) {
            console.warn("random2输入不合法: arr1.length != arr2.length");
            // return null;
        }
        let sum = 0;
        let factor = 0;
        let random = Math.random();
        for (let i = arr2.length - 1; i >= 0; i--) {
            sum += arr2[i]; // 统计概率总和
        };
        random *= sum; // 生成概率随机数
        for (let i = arr2.length - 1; i >= 0; i--) {
            factor += arr2[i];
            if (random <= factor)
                return arr1[i];
        };
        return null;
    }

    /**随机一个范围 min~max 的整数      
     * @param min 范围的最小值，或者一个2元素的数组  
     * @param max 范围的最大值，或者为空  
     * @example
     * GNum.randomInt(1, 10);
     * GNum.randomInt([1, 10]);
     */
    public randomInt(min: number | number[], max?: number) {
        if (Array.isArray(min) && typeof max == "undefined") {
            max = min[1];
            min = min[0];
        }
        return Math.floor(Math.random() * (max - <number>min + 1)) + <number>min;
    }

    /**随机一个范围 min~max 的小数      
     * @param min 范围的最小值，或者一个2元素的数组  
     * @param max 范围的最大值，或者为空  
     * @example
     * GNum.randomInt(1, 8);
     * GNum.randomInt([2.3, 12.3]);
     */
    public randomFloat(min: number | number[], max?: number) {
        if (Array.isArray(min) && typeof max == "undefined") {
            max = min[1];
            min = min[0];
        }
        let ratio = Math.random();
        return <number>min + (max - <number>min) * ratio;
    }

    /**随机一个 0 ~ 1 的小数  
     * @example
     * GNum.random_1To1();
     */
    public random_1To1() {
        return this.randomFloat([0, 1]);
    }

    /**深拷贝一个对象或数组  
     * @param some 要拷贝的对象或者数组  
     * @example
     * GUtils.clone({ a: 1, b: 2 });
    */
    public clone<T>(some: T): T {
        return JSON.parse(JSON.stringify(some));
    }

    /**节点位置坐标转换  
     * @param fromNode 要转换的节点  
     * @param toNode 转换到的目标节点  
     * @example
     * GUtils.positionTransfor(this.fromNode, this.toNode);
     */
    public positionTransfor(fromNode: cc.Node, toNode: cc.Node) {
        return toNode.convertToNodeSpaceAR(fromNode.parent.convertToWorldSpaceAR(fromNode.position));
    }

    /**
     * 格式化时间
     * @param {number} time 时间(s)
     * @return {string}
     */
    public formatTime(time: number): string {
        const lessHour = Math.floor((time / 3600));
        const lessMin = Math.floor((time % 3600) / 60)
        const lessSecond = time % 60;

        const hour = lessHour < 10 ? '0' + lessHour : lessHour;
        const min = lessMin < 10 ? '0' + lessMin : lessMin;
        const second = lessSecond < 10 ? '0' + lessSecond : lessSecond;

        return hour === '00' ? `${min}:${second}` : `${hour}:${min}:${second}`;
    }

    /**
     * 获取图片资源 (resources目录下文件)
     * @param {string} url 地址
     * @returns {cc.SpriteFrame}
     */
    public getResTexture(url: string): Promise<cc.SpriteFrame> {
        return new Promise((resolve, reject) => {
            if (!url) { console.log('getResTexture url is null:'); return; }
            cc.loader.loadRes(`texture/${url}`, cc.SpriteFrame, (err, res) => {
                if (err) return console.log('loadResTexture error:', err);
                resolve(res)
            });
        })
    }

    /**
     * 加载图片资源 (resources目录下文件)
     * @param {string} url 地址
     * @param {sprite} sprite sprite节点
     * @param {Function} callBack 回调
     */
    public loadResTexture(url: string, sprite: cc.Sprite, callBack?: Function) {
        if (!url) return console.log('loadResTexture url is null');
        cc.loader.loadRes(`${url}`, cc.SpriteFrame, (err, res) => {
            if (err) return console.log('loadResTexture error:', err);
            if (!sprite) return console.log('loadResTexture error:', 'sprite is null');
            if (!sprite.getMaterial.length) return console.log('getMaterial error:', 'sprite is null');
            sprite.spriteFrame = res;
            if (callBack) {
                callBack();
            }
        });
    }

    public getHeadImg(url, object: cc.Sprite) {
        cc.loader.load(url + `?aa=aa.jpg`, function (err, textrue) {
            let fram = new cc.SpriteFrame(textrue);
            object.spriteFrame = fram;
        })
    }

    /**
     * 加载图片资源 (http路径)
     * @param url 图片地址
     * @param sprite 
     */
    public loadRemoteTexture(url: string, sprite: cc.Sprite): void {
        if (!url) return console.log('loadRemoteTexture url is null');
        cc.loader.load({ url: url, type: 'png' }, (err, texture) => {
            if (err) return console.log('loadRemoteTexture error:', err);
            if (!sprite) return console.log('loadRemoteTexture error:', 'sprite is null');
            sprite.spriteFrame = new cc.SpriteFrame(texture);
        })
    }

    /**
     * 设置头像  (黄铭星)
     * @param objectNode 对象节点
     * @param objectUrl 对象icon地址
     * @param callBack 头像设置完毕回调方法
     */
    public setAvatar(objectNode: cc.Node, objectUrl: string, callBack: Function) {
        if (!objectUrl) {
            this.loadResTexture("acatarGirl", objectNode.getComponent(cc.Sprite));
            callBack();
        } else {
            let imgurl = objectUrl + '?aa=aa.jpg';
            cc.loader.load(imgurl, function (err, texture) {
                objectNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                callBack();
            });
        }
    }

    /**
     * 获取屏幕大小
     */
    public getScreenSize(): cc.Vec2 {
        return new cc.Vec2(cc.winSize.width, cc.winSize.height);
    }

    /**
     * 两数之间获取随机数
     * @param min 
     * @param max 
     * @param rand 随机数
     */
    public randomNum(min: number, max: number, ramdom?: number) {
        var range = max - min;
        var rand = ramdom || Math.random();
        var num = min + Math.round(rand * range);
        return num;
    }

    /**
     * 是否有重复数字
     * @param nums 
     */
    public isContainsDuplicate(nums): boolean {
        let tmpSet = new Set(nums)
        let newNums = Array.from(tmpSet)
        if (nums.length == newNums.length) {
            return false
        } else {
            return true
        }
    };

    /**
     * 获取日期 (年-月-日)
     */
    public getDate(): string {
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }

    /**
     * 获取随机ID
     */
    public getRandomId(): string {
        return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
    }

    /**
    * 随机返回数组里面的一个元素
    * @param arr 目标数组
    */
    public getRandomByArr(arr: any[]): any {
        let n = Math.floor(Math.random() * arr.length + 1) - 1;
        return arr[n];
    }

    /**
     * 数组随机
     * 费雪耶兹随机置乱算法
     * @param arr 目标数组
     */
    public randomArr(arr: any[]): void {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }

    /**
     * 替换语言包中的${rep}标签
     * @param {string} txt 待替换文本
     * @param {string} values 替换的值，不定项，按文本逐个替换
     */
    public replaceTxt(txt, ...values) {
        for (let i = 0; i < values.length; i++) {
            txt = txt.replace(/\$\{rep\}/, values[i]);
        }
        return txt;
    }

    /**
     * 格式化日期
     */
    public formatDate(date: Date, fmt: string = "YYYY-mm-dd"): string {
        // fmt : "YYYY-mm-dd HH:MM"
        let ret;
        let opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            // "H+": date.getHours().toString(),           // 时
            // "M+": date.getMinutes().toString(),         // 分
            // "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }

    /**
     * 秒转换成文本
     * @param result 时间（秒数）
     * @returns "1时"||"5分"
     */
    public secondToFormat(result: number): string {
        let d = Math.floor(result / 86400);
        let h = Math.floor(result / 3600);
        let m = Math.floor((result / 60 % 60));
        let s = Math.floor((result % 60));

        let valueD: string = d.toString() + '天';
        let valueH: string = h.toString() + '时';
        let valueM: string = m.toString() + '分';
        let valueS: string = s.toString() + '秒';

        if (d > 0) {
            return valueD;
        } else if (h > 0) {
            return valueH;
        } else {
            return valueM;
        }
    }


    /**
     * 加载配置
     * @param {string[]} subs 所有子包名
     * @param {Function} sucCb 成功回调
     * @param {Function} errCb 失败回调
     */
    public async loadAsset(subs: string[], sucCb: Function, errCb: Function) {
        try {
            while (subs.length) {
                // 加载 && 保存子包
                await this.loadSub(subs.shift());
            }
            if (sucCb) sucCb();
        } catch (err) {
            if (errCb) errCb(err);
        }
    }

    /**
     * 加载JSON配置
     * @param {string} name 配置名
     */
    public loadSub(name: string): Promise<void> {
        return new Promise((resolve, reject) => {
            cc.loader.downloader.loadSubpackage(name, (err) => {
                if (err) return reject(err);
                resolve();
            })
        })
    }

    /**
     * 数组除重
     * @param arr1 原数组
     * @param arr2 要除去的数组
     * @param new_arr 新的空数组
     * @returns exist arr 
     */
    public isExistArr(arr1, arr2, new_arr): any {
        arr1.forEach(function (item, idx) {
            if (arr2.indexOf(item) == -1) {
                new_arr.push(item);
            }
        })
        return new_arr;
    }

    /**
     *  动态加载预制体
     * @param _url Resource目录
     * @param CALLBACK 
     */
    public loadPrefab(_url: string, CALLBACK?) {
        cc.loader.loadRes('prefab/' + _url, cc.Prefab, (err: Error, res: cc.Prefab) => {
            if (CALLBACK) {
                CALLBACK(res)
            }
        });
    }

    public quickSort(arr): number[] {
        if (arr.length <= 1) { return arr; }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return this.quickSort(left).concat([pivot], this.quickSort(right));
    };

    public getEmail() {
        let list = ["贤色旧梦", "暧昧与嫉妒", "爱你九妹", "宝贝伴侣", "被你浪费的情感", "天长地久的爱恋",
            "梦想时分", "心疼自己", "把星星放进口袋里", "软见", "额头", "衣袂翩翩", "凤眸有你", "别太快关灯",
            "诱惑", "自古", "沐叶清风", "亦世凡华", "繁华落世丶涐许你一抹红颜", "护食女顽童", "挑眉", "缘起",
            "圈心", "刺激", "红烛", "怀春", "锦妆", "虞心", "扎心", "堇夏", "残年っ", "╭淡妆╮", "笄发醒",
            "诗沫涵,", "重口味", "悲画扇", "黑名单", "花争发", "小性感", "北仑色", "自轻舟去", "离囚戈",
            "朝歌夜弦", "年少如梦", "撩情戏浪子", "撩汉实力派", "浪野少女心", "如初", "亡鱼深海花夕拾",
            "朝拾", "爱笑的女生", "栀晚鸢乱", "凯喵的小鱼鳅", "寻梦旅人", "失意花季少女", "季末°不寂寞",
            "眉眼心间", "半盏青灯", "偏执与你", "轻烟薄暮", "青橘栀耳", "傲娇萌娃", "往日柔情", "百毒不侵",
            "谦与谦寻", "初心莫负", "晚点相遇", "紫陌红尘", "嬡.暀苝漂", "纯粹剪爱", "毫无代价", "忧烟殇往",
            "潇湘夜雨", "倾尽天下", "梦醒时分", "安之若素", "愿君安好", "你好，明天", "莫失莫忘", "孑然一身",
            "无需善良", "野猪佩琪", "欲言又止", "酷味很正", "人走茶凉", "伴你余生", "随心所欲", "不负遇见", "陪我听风",
            "等风也等你", "为你上战场", "深拥意中人", "心软脾气大", "野性又迷人", "积攒一身酷", "撩妹一把手", "稳握江山权",
            "无聊也不聊", "持刀稳情场", "请保管好你随身携带的暧昧", "不努力拿什么给你未来", "誓言只是一时的失言", "听ゝ海哭的声音",
            "我欠你一个全剧终", "後知後覺", "旧街旧巷等旧人", "离人不回", "北街末雨", "眉眼如初", "雨落无声", "斩尽天下", "半点心",
            "淑女范", "梦中人", "平常心", "手放开", "孤美人", "刚刚好", "半生缘", "未语淚先流", "你怀里精致的猪猪", "初本ʚɞ",
            "一只失宠狐阿", "败给可爱", "离人久巷晚秋凉", "故人辞巷抚轻风", "我不是胆小鬼", "感恩旧爱", "恋爱进行曲", "天生傲骨",
            "是谁牵动了我的心", "山穷水尽更词穷", "淡然气质比天高〃", "几多岁♡", "放我出去", "熱到膨脹", "苍山有井美似空", "搁浅°",
            "软萌", "路途", "泸沽烟水里的过客", "淡意衬优柔丶", "如人饮水，冷暖自知", "自古空情多余恨", "疏雨萧萧千行泪", "釉色清风",
            "旧情返航", "烛中泪", "故事久", "毁心人", "失訫人", "少女瘾", "旧心酸", "维她命", "樱花皇后", "影伴人久", "诗人礼献",
            "叫醒耳朵", "过分着迷", "暖于心ゆ", "轻叹花开", "森蝶呦つ", "桃色玫瑰", "人野性子浪", "酷到不说话", "封刀不再战",
            "情感贩卖机", "帅哥，请留步", "深拥他入梦", "情动则心痛", "北柠陌寒", "﹎黯淡ヾ", "凸逼娚勃丸", "妳的溫柔╮只許莪擁囿",
            "含笑九拳", "蹲街丶吐烟圈oοО", "少女梦", "伪高冷", "别凑合", "勿相忘", "几年华", "故辞", "几味吻", "光阴负容颜╮",
            "TRY，舞台··", "紫色明信片", "一顾倾人城 ”", "眸敛", "搖曳紅塵中", "鹿困森林", "菊花灿烂^", "风月不等闲", "预言与梦",
            "文艺菇凉好愤青/*", "太阳每天都生气", "木马在旋转", "眉眼冷无情", "往事埋风中", "妩媚给谁看", "迷上男图像",
            "陪你到世界的尽头", "心若初晴", "姐比特仑苏还纯°", "盛世流光", "为君倾心", "生生世世", "春风乍起", "素年凉音",
            "逾期守候", "吶次、曖昧", "孤城旧梦", "森陌夏栀", "古城青衣", "孤酒浪友", "旧巷听风", "风穿襟袖 长叹裁红颜",
            "望不穿秋水//等不回旧人", "守一座空城等一个旧人", "祢若卟惜莪亦卟嗳", "岂能尽如人意但求无愧于心", "踩着棺材跳鬼步",
            "清泪两行", "酒笙清栀", "孤酒对饮", "余生浪子", "感性在作祟", "若遇你", "假绅士", "按时荒唐", "快快长大", "释怀",
            "殇旋律", "三個字對不起〆", "愿是你心之王", "擒拿美人心", "顾虑", "像风一样", "惦记", "吧唧你", "只靠听说",
            "爷，桀骜不驯", "只偏袒你", "你眼中盈盈月", "提笔写情书", "老爹", "笑我庸俗", "如歌", "痴情狗", "感谢经历",
            "青春别挥霍", "妄叙", "被淹死的鱼", "江东过客", "唯独是你", "只等公子", "安知我意", "怪性笑人.", "圈圈你个叉叉",
            "劳资独宠一方", "我有想你", "美汉子", "佰仙", "各路角色", "初恋情久", "葵一般的少年", "目的追你", "一杯忘情",
            "無奈已被傷", "糖不及你甜", "心瘾成病", "撩妹欧巴", "路旁的无奈", "小家伙", "秋北先生", "迷离的眼", "所谓的第三者",
            "带你回家", "蕝蝂·貨℡", "န情断", "几人难应", "我为自己代言!", "女儿国的男人", "共度余生", "骚年求逆推i",
            "热心市民", "阳光下的温暖°", "别涉世太深", "命中不缺狗", "梦好", "含笑记下", "有点上瘾", "迷毁少年", "活在当下",
            "还给你的自由", "多想强吻你", "世中仙人", "闻香识女人", "男优", "我要让情敌当伴郎", "攒一袋星星.", "白云悠悠",
            "情殇", "有木有妳兜一样.", "红颜醉", "清白野酒", "荒城", "纪年", "呆橘", "青稚", "腻歪", "漓汐", "初遇",
            "感性", "墨凉", "余醉", "孤刺", "叛逆", "始终不够爱你", "窝囊感情", "粉红色少女", "穿草裙的少女", "迷途",
            "小时光", "少女的英雄梦", "傲姿", "念旧", "深巷", "你笑在眉眼.", "烟花易冷", "柠栀", "久念", "习惯性依赖",
            "旧憶", "故事未完", "月竹挽风", "雅痞", "孤身", "凉心", "抬举", "晨曦微暖", "勿忘初心", "死撑", "闲云",
            "冷眸", "喵喵", "相权美人", "莫爱", "脆弱", "陌殇", "单杀", "傲娇小公主", "薄荷糖丶微凉"]

        let name = list[Math.floor(Math.random() * list.length)];
        if (name.length > 4) {
            name = name.substring(0, 2) + '***' + name.substring(name.length - 2, name.length);
        }
        else {
            name = name.substring(0, 2) + '***';
        }
        return name;
    }

    public getNormalityNumByRandom(Data) {
        var totalData = 0;
        for (var i = 0; i < Data.length; i++) {
            totalData += parseInt(Data[i]);
        }
        var num = Math.floor(Math.random() * totalData);
        var total = 0;
        for (var i = 0; i < Data.length; i++) {
            total += parseInt(Data[i]);
            if (num < total) {
                return i;
            }
        }
    }

}
export const utils = new Utils();
