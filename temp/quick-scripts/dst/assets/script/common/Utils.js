
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0800FlUfFG3pgsXbp61C3P', 'Utils');
// script/common/Utils.ts

"use strict";
/**
 * 工具类
 * @author yxx0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 根据权重返回数组里面的元素，要求arr1和arr2数组长度一样
     * @param arr1 产生随机结果的数组
     * @param arr2 控制权重的数组，要求arr2元素个数和arr1元素个数对应
    */
    Utils.prototype.randomByWeight = function (arr1, arr2) {
        if (arr1.length != arr2.length) {
            console.warn("random2输入不合法: arr1.length != arr2.length");
            // return null;
        }
        var sum = 0;
        var factor = 0;
        var random = Math.random();
        for (var i = arr2.length - 1; i >= 0; i--) {
            sum += arr2[i]; // 统计概率总和
        }
        ;
        random *= sum; // 生成概率随机数
        for (var i = arr2.length - 1; i >= 0; i--) {
            factor += arr2[i];
            if (random <= factor)
                return arr1[i];
        }
        ;
        return null;
    };
    /**随机一个范围 min~max 的整数
     * @param min 范围的最小值，或者一个2元素的数组
     * @param max 范围的最大值，或者为空
     * @example
     * GNum.randomInt(1, 10);
     * GNum.randomInt([1, 10]);
     */
    Utils.prototype.randomInt = function (min, max) {
        if (Array.isArray(min) && typeof max == "undefined") {
            max = min[1];
            min = min[0];
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /**随机一个范围 min~max 的小数
     * @param min 范围的最小值，或者一个2元素的数组
     * @param max 范围的最大值，或者为空
     * @example
     * GNum.randomInt(1, 8);
     * GNum.randomInt([2.3, 12.3]);
     */
    Utils.prototype.randomFloat = function (min, max) {
        if (Array.isArray(min) && typeof max == "undefined") {
            max = min[1];
            min = min[0];
        }
        var ratio = Math.random();
        return min + (max - min) * ratio;
    };
    /**随机一个 0 ~ 1 的小数
     * @example
     * GNum.random_1To1();
     */
    Utils.prototype.random_1To1 = function () {
        return this.randomFloat([0, 1]);
    };
    /**深拷贝一个对象或数组
     * @param some 要拷贝的对象或者数组
     * @example
     * GUtils.clone({ a: 1, b: 2 });
    */
    Utils.prototype.clone = function (some) {
        return JSON.parse(JSON.stringify(some));
    };
    /**节点位置坐标转换
     * @param fromNode 要转换的节点
     * @param toNode 转换到的目标节点
     * @example
     * GUtils.positionTransfor(this.fromNode, this.toNode);
     */
    Utils.prototype.positionTransfor = function (fromNode, toNode) {
        return toNode.convertToNodeSpaceAR(fromNode.parent.convertToWorldSpaceAR(fromNode.position));
    };
    /**
     * 格式化时间
     * @param {number} time 时间(s)
     * @return {string}
     */
    Utils.prototype.formatTime = function (time) {
        var lessHour = Math.floor((time / 3600));
        var lessMin = Math.floor((time % 3600) / 60);
        var lessSecond = time % 60;
        var hour = lessHour < 10 ? '0' + lessHour : lessHour;
        var min = lessMin < 10 ? '0' + lessMin : lessMin;
        var second = lessSecond < 10 ? '0' + lessSecond : lessSecond;
        return hour === '00' ? min + ":" + second : hour + ":" + min + ":" + second;
    };
    /**
     * 获取图片资源 (resources目录下文件)
     * @param {string} url 地址
     * @returns {cc.SpriteFrame}
     */
    Utils.prototype.getResTexture = function (url) {
        return new Promise(function (resolve, reject) {
            if (!url) {
                console.log('getResTexture url is null:');
                return;
            }
            cc.loader.loadRes("texture/" + url, cc.SpriteFrame, function (err, res) {
                if (err)
                    return console.log('loadResTexture error:', err);
                resolve(res);
            });
        });
    };
    /**
     * 加载图片资源 (resources目录下文件)
     * @param {string} url 地址
     * @param {sprite} sprite sprite节点
     * @param {Function} callBack 回调
     */
    Utils.prototype.loadResTexture = function (url, sprite, callBack) {
        if (!url)
            return console.log('loadResTexture url is null');
        cc.loader.loadRes("" + url, cc.SpriteFrame, function (err, res) {
            if (err)
                return console.log('loadResTexture error:', err);
            if (!sprite)
                return console.log('loadResTexture error:', 'sprite is null');
            if (!sprite.getMaterial.length)
                return console.log('getMaterial error:', 'sprite is null');
            sprite.spriteFrame = res;
            if (callBack) {
                callBack();
            }
        });
    };
    Utils.prototype.getHeadImg = function (url, object) {
        cc.loader.load(url + "?aa=aa.jpg", function (err, textrue) {
            var fram = new cc.SpriteFrame(textrue);
            object.spriteFrame = fram;
        });
    };
    /**
     * 加载图片资源 (http路径)
     * @param url 图片地址
     * @param sprite
     */
    Utils.prototype.loadRemoteTexture = function (url, sprite) {
        if (!url)
            return console.log('loadRemoteTexture url is null');
        cc.loader.load({ url: url, type: 'png' }, function (err, texture) {
            if (err)
                return console.log('loadRemoteTexture error:', err);
            if (!sprite)
                return console.log('loadRemoteTexture error:', 'sprite is null');
            sprite.spriteFrame = new cc.SpriteFrame(texture);
        });
    };
    /**
     * 设置头像  (黄铭星)
     * @param objectNode 对象节点
     * @param objectUrl 对象icon地址
     * @param callBack 头像设置完毕回调方法
     */
    Utils.prototype.setAvatar = function (objectNode, objectUrl, callBack) {
        if (!objectUrl) {
            this.loadResTexture("acatarGirl", objectNode.getComponent(cc.Sprite));
            callBack();
        }
        else {
            var imgurl = objectUrl + '?aa=aa.jpg';
            cc.loader.load(imgurl, function (err, texture) {
                objectNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                callBack();
            });
        }
    };
    /**
     * 获取屏幕大小
     */
    Utils.prototype.getScreenSize = function () {
        return new cc.Vec2(cc.winSize.width, cc.winSize.height);
    };
    /**
     * 两数之间获取随机数
     * @param min
     * @param max
     * @param rand 随机数
     */
    Utils.prototype.randomNum = function (min, max, ramdom) {
        var range = max - min;
        var rand = ramdom || Math.random();
        var num = min + Math.round(rand * range);
        return num;
    };
    /**
     * 是否有重复数字
     * @param nums
     */
    Utils.prototype.isContainsDuplicate = function (nums) {
        var tmpSet = new Set(nums);
        var newNums = Array.from(tmpSet);
        if (nums.length == newNums.length) {
            return false;
        }
        else {
            return true;
        }
    };
    ;
    /**
     * 获取日期 (年-月-日)
     */
    Utils.prototype.getDate = function () {
        var date = new Date();
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    };
    /**
     * 获取随机ID
     */
    Utils.prototype.getRandomId = function () {
        return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
    };
    /**
    * 随机返回数组里面的一个元素
    * @param arr 目标数组
    */
    Utils.prototype.getRandomByArr = function (arr) {
        var n = Math.floor(Math.random() * arr.length + 1) - 1;
        return arr[n];
    };
    /**
     * 数组随机
     * 费雪耶兹随机置乱算法
     * @param arr 目标数组
     */
    Utils.prototype.randomArr = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
    };
    /**
     * 替换语言包中的${rep}标签
     * @param {string} txt 待替换文本
     * @param {string} values 替换的值，不定项，按文本逐个替换
     */
    Utils.prototype.replaceTxt = function (txt) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < values.length; i++) {
            txt = txt.replace(/\$\{rep\}/, values[i]);
        }
        return txt;
    };
    /**
     * 格式化日期
     */
    Utils.prototype.formatDate = function (date, fmt) {
        if (fmt === void 0) { fmt = "YYYY-mm-dd"; }
        // fmt : "YYYY-mm-dd HH:MM"
        var ret;
        var opt = {
            "Y+": date.getFullYear().toString(),
            "m+": (date.getMonth() + 1).toString(),
            "d+": date.getDate().toString(),
        };
        for (var k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
            }
            ;
        }
        ;
        return fmt;
    };
    /**
     * 秒转换成文本
     * @param result 时间（秒数）
     * @returns "1时"||"5分"
     */
    Utils.prototype.secondToFormat = function (result) {
        var d = Math.floor(result / 86400);
        var h = Math.floor(result / 3600);
        var m = Math.floor((result / 60 % 60));
        var s = Math.floor((result % 60));
        var valueD = d.toString() + '天';
        var valueH = h.toString() + '时';
        var valueM = m.toString() + '分';
        var valueS = s.toString() + '秒';
        if (d > 0) {
            return valueD;
        }
        else if (h > 0) {
            return valueH;
        }
        else {
            return valueM;
        }
    };
    /**
     * 加载配置
     * @param {string[]} subs 所有子包名
     * @param {Function} sucCb 成功回调
     * @param {Function} errCb 失败回调
     */
    Utils.prototype.loadAsset = function (subs, sucCb, errCb) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        _a.label = 1;
                    case 1:
                        if (!subs.length) return [3 /*break*/, 3];
                        // 加载 && 保存子包
                        return [4 /*yield*/, this.loadSub(subs.shift())];
                    case 2:
                        // 加载 && 保存子包
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        if (sucCb)
                            sucCb();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        if (errCb)
                            errCb(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 加载JSON配置
     * @param {string} name 配置名
     */
    Utils.prototype.loadSub = function (name) {
        return new Promise(function (resolve, reject) {
            cc.loader.downloader.loadSubpackage(name, function (err) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    /**
     * 数组除重
     * @param arr1 原数组
     * @param arr2 要除去的数组
     * @param new_arr 新的空数组
     * @returns exist arr
     */
    Utils.prototype.isExistArr = function (arr1, arr2, new_arr) {
        arr1.forEach(function (item, idx) {
            if (arr2.indexOf(item) == -1) {
                new_arr.push(item);
            }
        });
        return new_arr;
    };
    /**
     *  动态加载预制体
     * @param _url Resource目录
     * @param CALLBACK
     */
    Utils.prototype.loadPrefab = function (_url, CALLBACK) {
        cc.loader.loadRes('prefab/' + _url, cc.Prefab, function (err, res) {
            if (CALLBACK) {
                CALLBACK(res);
            }
        });
    };
    Utils.prototype.quickSort = function (arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
        return this.quickSort(left).concat([pivot], this.quickSort(right));
    };
    ;
    Utils.prototype.getEmail = function () {
        var list = ["贤色旧梦", "暧昧与嫉妒", "爱你九妹", "宝贝伴侣", "被你浪费的情感", "天长地久的爱恋",
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
            "冷眸", "喵喵", "相权美人", "莫爱", "脆弱", "陌殇", "单杀", "傲娇小公主", "薄荷糖丶微凉"];
        var name = list[Math.floor(Math.random() * list.length)];
        if (name.length > 4) {
            name = name.substring(0, 2) + '***' + name.substring(name.length - 2, name.length);
        }
        else {
            name = name.substring(0, 2) + '***';
        }
        return name;
    };
    Utils.prototype.getNormalityNumByRandom = function (Data) {
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
    };
    return Utils;
}());
exports.utils = new Utils();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0dBR0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSDtJQUFBO0lBb2NBLENBQUM7SUFuY0c7Ozs7TUFJRTtJQUNLLDhCQUFjLEdBQXJCLFVBQXNCLElBQVcsRUFBRSxJQUFXO1FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztZQUN6RCxlQUFlO1NBQ2xCO1FBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUM1QjtRQUFBLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVTtRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLE1BQU0sSUFBSSxNQUFNO2dCQUNoQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUFBLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kseUJBQVMsR0FB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QUFTO1lBQzdELE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPO1lBQy9ELElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJO1lBQy9ELElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLO1lBQ3BFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSztZQUMvRCxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTO1lBQzFELElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVE7WUFDM0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07WUFDOUQsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07WUFDL0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU07WUFDL0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO1lBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPO1lBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUztZQUN0RSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUs7WUFDNUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTTtZQUM1RSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTTtZQUN6RSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSztZQUMzRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTTtZQUMzRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUMvRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU87WUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVk7WUFDMUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUTtZQUM3RSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07WUFDL0UsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTztZQUNuRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUN0RSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWTtZQUNyRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsU0FBUztZQUNuRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJO1lBQzNFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTTtZQUN0RSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07WUFDdEUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRO1lBQ3pFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVE7WUFDMUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVE7WUFDckUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO1lBQ3pFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNO1lBQ3RFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ3pFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUk7WUFDdkUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTztZQUN4RSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUN4RSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRWxFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEY7YUFDSTtZQUNELElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sdUNBQXVCLEdBQTlCLFVBQStCLElBQUk7UUFDL0IsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxLQUFLLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRTtnQkFDYixPQUFPLENBQUMsQ0FBQzthQUNaO1NBQ0o7SUFDTCxDQUFDO0lBRUwsWUFBQztBQUFELENBcGNBLEFBb2NDLElBQUE7QUFDWSxRQUFBLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOW3peWFt+exu1xyXG4gKiBAYXV0aG9yIHl4eDBcclxuICovXHJcblxyXG5jbGFzcyBVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIOagueaNruadg+mHjei/lOWbnuaVsOe7hOmHjOmdoueahOWFg+e0oO+8jOimgeaxgmFycjHlkoxhcnIy5pWw57uE6ZW/5bqm5LiA5qC3XHJcbiAgICAgKiBAcGFyYW0gYXJyMSDkuqfnlJ/pmo/mnLrnu5PmnpznmoTmlbDnu4RcclxuICAgICAqIEBwYXJhbSBhcnIyIOaOp+WItuadg+mHjeeahOaVsOe7hO+8jOimgeaxgmFycjLlhYPntKDkuKrmlbDlkoxhcnIx5YWD57Sg5Liq5pWw5a+55bqUXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHJhbmRvbUJ5V2VpZ2h0KGFycjE6IGFueVtdLCBhcnIyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgaWYgKGFycjEubGVuZ3RoICE9IGFycjIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInJhbmRvbTLovpPlhaXkuI3lkIjms5U6IGFycjEubGVuZ3RoICE9IGFycjIubGVuZ3RoXCIpO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDA7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycjIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgc3VtICs9IGFycjJbaV07IC8vIOe7n+iuoeamgueOh+aAu+WSjFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmFuZG9tICo9IHN1bTsgLy8g55Sf5oiQ5qaC546H6ZqP5py65pWwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycjIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZmFjdG9yICs9IGFycjJbaV07XHJcbiAgICAgICAgICAgIGlmIChyYW5kb20gPD0gZmFjdG9yKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjFbaV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmo/mnLrkuIDkuKrojIPlm7QgbWlufm1heCDnmoTmlbTmlbAgICAgICBcclxuICAgICAqIEBwYXJhbSBtaW4g6IyD5Zu055qE5pyA5bCP5YC877yM5oiW6ICF5LiA5LiqMuWFg+e0oOeahOaVsOe7hCAgXHJcbiAgICAgKiBAcGFyYW0gbWF4IOiMg+WbtOeahOacgOWkp+WAvO+8jOaIluiAheS4uuepuiAgXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogR051bS5yYW5kb21JbnQoMSwgMTApO1xyXG4gICAgICogR051bS5yYW5kb21JbnQoWzEsIDEwXSk7XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByYW5kb21JbnQobWluOiBudW1iZXIgfCBudW1iZXJbXSwgbWF4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWluKSAmJiB0eXBlb2YgbWF4ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgbWF4ID0gbWluWzFdO1xyXG4gICAgICAgICAgICBtaW4gPSBtaW5bMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gPG51bWJlcj5taW4gKyAxKSkgKyA8bnVtYmVyPm1pbjtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmo/mnLrkuIDkuKrojIPlm7QgbWlufm1heCDnmoTlsI/mlbAgICAgICBcclxuICAgICAqIEBwYXJhbSBtaW4g6IyD5Zu055qE5pyA5bCP5YC877yM5oiW6ICF5LiA5LiqMuWFg+e0oOeahOaVsOe7hCAgXHJcbiAgICAgKiBAcGFyYW0gbWF4IOiMg+WbtOeahOacgOWkp+WAvO+8jOaIluiAheS4uuepuiAgXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogR051bS5yYW5kb21JbnQoMSwgOCk7XHJcbiAgICAgKiBHTnVtLnJhbmRvbUludChbMi4zLCAxMi4zXSk7XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByYW5kb21GbG9hdChtaW46IG51bWJlciB8IG51bWJlcltdLCBtYXg/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtaW4pICYmIHR5cGVvZiBtYXggPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBtYXggPSBtaW5bMV07XHJcbiAgICAgICAgICAgIG1pbiA9IG1pblswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJhdGlvID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICByZXR1cm4gPG51bWJlcj5taW4gKyAobWF4IC0gPG51bWJlcj5taW4pICogcmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZqP5py65LiA5LiqIDAgfiAxIOeahOWwj+aVsCAgXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogR051bS5yYW5kb21fMVRvMSgpO1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmFuZG9tXzFUbzEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tRmxvYXQoWzAsIDFdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmt7Hmi7fotJ3kuIDkuKrlr7nosaHmiJbmlbDnu4QgIFxyXG4gICAgICogQHBhcmFtIHNvbWUg6KaB5ou36LSd55qE5a+56LGh5oiW6ICF5pWw57uEICBcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBHVXRpbHMuY2xvbmUoeyBhOiAxLCBiOiAyIH0pO1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyBjbG9uZTxUPihzb21lOiBUKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc29tZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiKgueCueS9jee9ruWdkOagh+i9rOaNoiAgXHJcbiAgICAgKiBAcGFyYW0gZnJvbU5vZGUg6KaB6L2s5o2i55qE6IqC54K5ICBcclxuICAgICAqIEBwYXJhbSB0b05vZGUg6L2s5o2i5Yiw55qE55uu5qCH6IqC54K5ICBcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBHVXRpbHMucG9zaXRpb25UcmFuc2Zvcih0aGlzLmZyb21Ob2RlLCB0aGlzLnRvTm9kZSk7XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3NpdGlvblRyYW5zZm9yKGZyb21Ob2RlOiBjYy5Ob2RlLCB0b05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdG9Ob2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGZyb21Ob2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZnJvbU5vZGUucG9zaXRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagvOW8j+WMluaXtumXtFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWUg5pe26Ze0KHMpXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmb3JtYXRUaW1lKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbGVzc0hvdXIgPSBNYXRoLmZsb29yKCh0aW1lIC8gMzYwMCkpO1xyXG4gICAgICAgIGNvbnN0IGxlc3NNaW4gPSBNYXRoLmZsb29yKCh0aW1lICUgMzYwMCkgLyA2MClcclxuICAgICAgICBjb25zdCBsZXNzU2Vjb25kID0gdGltZSAlIDYwO1xyXG5cclxuICAgICAgICBjb25zdCBob3VyID0gbGVzc0hvdXIgPCAxMCA/ICcwJyArIGxlc3NIb3VyIDogbGVzc0hvdXI7XHJcbiAgICAgICAgY29uc3QgbWluID0gbGVzc01pbiA8IDEwID8gJzAnICsgbGVzc01pbiA6IGxlc3NNaW47XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gbGVzc1NlY29uZCA8IDEwID8gJzAnICsgbGVzc1NlY29uZCA6IGxlc3NTZWNvbmQ7XHJcblxyXG4gICAgICAgIHJldHVybiBob3VyID09PSAnMDAnID8gYCR7bWlufToke3NlY29uZH1gIDogYCR7aG91cn06JHttaW59OiR7c2Vjb25kfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blm77niYfotYTmupAgKHJlc291cmNlc+ebruW9leS4i+aWh+S7tilcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg5Zyw5Z2AXHJcbiAgICAgKiBAcmV0dXJucyB7Y2MuU3ByaXRlRnJhbWV9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSZXNUZXh0dXJlKHVybDogc3RyaW5nKTogUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdXJsKSB7IGNvbnNvbGUubG9nKCdnZXRSZXNUZXh0dXJlIHVybCBpcyBudWxsOicpOyByZXR1cm47IH1cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYHRleHR1cmUvJHt1cmx9YCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNvbnNvbGUubG9nKCdsb2FkUmVzVGV4dHVyZSBlcnJvcjonLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lm77niYfotYTmupAgKHJlc291cmNlc+ebruW9leS4i+aWh+S7tilcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0ge3Nwcml0ZX0gc3ByaXRlIHNwcml0ZeiKgueCuVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbEJhY2sg5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkUmVzVGV4dHVyZSh1cmw6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUsIGNhbGxCYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoIXVybCkgcmV0dXJuIGNvbnNvbGUubG9nKCdsb2FkUmVzVGV4dHVyZSB1cmwgaXMgbnVsbCcpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGAke3VybH1gLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmxvZygnbG9hZFJlc1RleHR1cmUgZXJyb3I6JywgZXJyKTtcclxuICAgICAgICAgICAgaWYgKCFzcHJpdGUpIHJldHVybiBjb25zb2xlLmxvZygnbG9hZFJlc1RleHR1cmUgZXJyb3I6JywgJ3Nwcml0ZSBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIGlmICghc3ByaXRlLmdldE1hdGVyaWFsLmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUubG9nKCdnZXRNYXRlcmlhbCBlcnJvcjonLCAnc3ByaXRlIGlzIG51bGwnKTtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICBpZiAoY2FsbEJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGVhZEltZyh1cmwsIG9iamVjdDogY2MuU3ByaXRlKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQodXJsICsgYD9hYT1hYS5qcGdgLCBmdW5jdGlvbiAoZXJyLCB0ZXh0cnVlKSB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHRydWUpO1xyXG4gICAgICAgICAgICBvYmplY3Quc3ByaXRlRnJhbWUgPSBmcmFtO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lm77niYfotYTmupAgKGh0dHDot6/lvoQpXHJcbiAgICAgKiBAcGFyYW0gdXJsIOWbvueJh+WcsOWdgFxyXG4gICAgICogQHBhcmFtIHNwcml0ZSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRSZW1vdGVUZXh0dXJlKHVybDogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSByZXR1cm4gY29uc29sZS5sb2coJ2xvYWRSZW1vdGVUZXh0dXJlIHVybCBpcyBudWxsJyk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHVybCwgdHlwZTogJ3BuZycgfSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY29uc29sZS5sb2coJ2xvYWRSZW1vdGVUZXh0dXJlIGVycm9yOicsIGVycik7XHJcbiAgICAgICAgICAgIGlmICghc3ByaXRlKSByZXR1cm4gY29uc29sZS5sb2coJ2xvYWRSZW1vdGVUZXh0dXJlIGVycm9yOicsICdzcHJpdGUgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWktOWDjyAgKOm7hOmTreaYnylcclxuICAgICAqIEBwYXJhbSBvYmplY3ROb2RlIOWvueixoeiKgueCuVxyXG4gICAgICogQHBhcmFtIG9iamVjdFVybCDlr7nosaFpY29u5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5aS05YOP6K6+572u5a6M5q+V5Zue6LCD5pa55rOVXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRBdmF0YXIob2JqZWN0Tm9kZTogY2MuTm9kZSwgb2JqZWN0VXJsOiBzdHJpbmcsIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmICghb2JqZWN0VXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFJlc1RleHR1cmUoXCJhY2F0YXJHaXJsXCIsIG9iamVjdE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgICAgICBjYWxsQmFjaygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpbWd1cmwgPSBvYmplY3RVcmwgKyAnP2FhPWFhLmpwZyc7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGltZ3VybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Tm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWxj+W5leWkp+Wwj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2NyZWVuU2l6ZSgpOiBjYy5WZWMyIHtcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoY2Mud2luU2l6ZS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Lik5pWw5LmL6Ze06I635Y+W6ZqP5py65pWwXHJcbiAgICAgKiBAcGFyYW0gbWluIFxyXG4gICAgICogQHBhcmFtIG1heCBcclxuICAgICAqIEBwYXJhbSByYW5kIOmaj+acuuaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmFuZG9tTnVtKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgcmFtZG9tPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xyXG4gICAgICAgIHZhciByYW5kID0gcmFtZG9tIHx8IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdmFyIG51bSA9IG1pbiArIE1hdGgucm91bmQocmFuZCAqIHJhbmdlKTtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pyJ6YeN5aSN5pWw5a2XXHJcbiAgICAgKiBAcGFyYW0gbnVtcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzQ29udGFpbnNEdXBsaWNhdGUobnVtcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB0bXBTZXQgPSBuZXcgU2V0KG51bXMpXHJcbiAgICAgICAgbGV0IG5ld051bXMgPSBBcnJheS5mcm9tKHRtcFNldClcclxuICAgICAgICBpZiAobnVtcy5sZW5ndGggPT0gbmV3TnVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pel5pyfICjlubQt5pyILeaXpSlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldERhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKX0tJHtkYXRlLmdldERhdGUoKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6ZqP5py6SURcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJhbmRvbUlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3Vic3RyKDMsIDMpICsgRGF0ZS5ub3coKSkudG9TdHJpbmcoMzYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDpmo/mnLrov5Tlm57mlbDnu4Tph4zpnaLnmoTkuIDkuKrlhYPntKBcclxuICAgICogQHBhcmFtIGFyciDnm67moIfmlbDnu4RcclxuICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmFuZG9tQnlBcnIoYXJyOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoICsgMSkgLSAxO1xyXG4gICAgICAgIHJldHVybiBhcnJbbl07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4Tpmo/mnLpcclxuICAgICAqIOi0uembquiAtuWFuemaj+acuue9ruS5seeul+azlVxyXG4gICAgICogQHBhcmFtIGFyciDnm67moIfmlbDnu4RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJhbmRvbUFycihhcnI6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGkgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS0tKTtcclxuICAgICAgICAgICAgW2FycltqXSwgYXJyW2ldXSA9IFthcnJbaV0sIGFycltqXV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu/5o2i6K+t6KiA5YyF5Lit55qEJHtyZXB95qCH562+XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IOW+heabv+aNouaWh+acrFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlcyDmm7/mjaLnmoTlgLzvvIzkuI3lrprpobnvvIzmjInmlofmnKzpgJDkuKrmm7/mjaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlcGxhY2VUeHQodHh0LCAuLi52YWx1ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0eHQgPSB0eHQucmVwbGFjZSgvXFwkXFx7cmVwXFx9LywgdmFsdWVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR4dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagvOW8j+WMluaXpeacn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmbXQ6IHN0cmluZyA9IFwiWVlZWS1tbS1kZFwiKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBmbXQgOiBcIllZWVktbW0tZGQgSEg6TU1cIlxyXG4gICAgICAgIGxldCByZXQ7XHJcbiAgICAgICAgbGV0IG9wdCA9IHtcclxuICAgICAgICAgICAgXCJZK1wiOiBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSwgICAgICAgIC8vIOW5tFxyXG4gICAgICAgICAgICBcIm0rXCI6IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLCAgICAgLy8g5pyIXHJcbiAgICAgICAgICAgIFwiZCtcIjogZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSwgICAgICAgICAgICAvLyDml6VcclxuICAgICAgICAgICAgLy8gXCJIK1wiOiBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSwgICAgICAgICAgIC8vIOaXtlxyXG4gICAgICAgICAgICAvLyBcIk0rXCI6IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCksICAgICAgICAgLy8g5YiGXHJcbiAgICAgICAgICAgIC8vIFwiUytcIjogZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKSAgICAgICAgICAvLyDnp5JcclxuICAgICAgICAgICAgLy8g5pyJ5YW25LuW5qC85byP5YyW5a2X56ym6ZyA5rGC5Y+v5Lul57un57ut5re75Yqg77yM5b+F6aG76L2s5YyW5oiQ5a2X56ym5LiyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGxldCBrIGluIG9wdCkge1xyXG4gICAgICAgICAgICByZXQgPSBuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS5leGVjKGZtdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKHJldFsxXSwgKHJldFsxXS5sZW5ndGggPT0gMSkgPyAob3B0W2tdKSA6IChvcHRba10ucGFkU3RhcnQocmV0WzFdLmxlbmd0aCwgXCIwXCIpKSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmbXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp5LovazmjaLmiJDmlofmnKxcclxuICAgICAqIEBwYXJhbSByZXN1bHQg5pe26Ze077yI56eS5pWw77yJXHJcbiAgICAgKiBAcmV0dXJucyBcIjHml7ZcInx8XCI15YiGXCJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlY29uZFRvRm9ybWF0KHJlc3VsdDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZCA9IE1hdGguZmxvb3IocmVzdWx0IC8gODY0MDApO1xyXG4gICAgICAgIGxldCBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKTtcclxuICAgICAgICBsZXQgbSA9IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcclxuICAgICAgICBsZXQgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSk7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZUQ6IHN0cmluZyA9IGQudG9TdHJpbmcoKSArICflpKknO1xyXG4gICAgICAgIGxldCB2YWx1ZUg6IHN0cmluZyA9IGgudG9TdHJpbmcoKSArICfml7YnO1xyXG4gICAgICAgIGxldCB2YWx1ZU06IHN0cmluZyA9IG0udG9TdHJpbmcoKSArICfliIYnO1xyXG4gICAgICAgIGxldCB2YWx1ZVM6IHN0cmluZyA9IHMudG9TdHJpbmcoKSArICfnp5InO1xyXG5cclxuICAgICAgICBpZiAoZCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlRDtcclxuICAgICAgICB9IGVsc2UgaWYgKGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZUg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlTTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICrCoOWKoOi9vemFjee9rlxyXG4gICAgICrCoEBwYXJhbcKge3N0cmluZ1tdfcKgc3Vic8Kg5omA5pyJ5a2Q5YyF5ZCNXHJcbiAgICAgKsKgQHBhcmFtwqB7RnVuY3Rpb259wqBzdWNDYsKg5oiQ5Yqf5Zue6LCDXHJcbiAgICAgKsKgQHBhcmFtwqB7RnVuY3Rpb259wqBlcnJDYsKg5aSx6LSl5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBsb2FkQXNzZXQoc3Viczogc3RyaW5nW10sIHN1Y0NiOiBGdW5jdGlvbiwgZXJyQ2I6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKHN1YnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliqDovb0gJiYg5L+d5a2Y5a2Q5YyFXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTdWIoc3Vicy5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VjQ2IpIHN1Y0NiKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJDYikgZXJyQ2IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKsKg5Yqg6L29SlNPTumFjee9rlxyXG4gICAgICrCoEBwYXJhbcKge3N0cmluZ30gbmFtZSDphY3nva7lkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRTdWIobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmRvd25sb2FkZXIubG9hZFN1YnBhY2thZ2UobmFtZSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlbDnu4TpmaTph41cclxuICAgICAqIEBwYXJhbSBhcnIxIOWOn+aVsOe7hFxyXG4gICAgICogQHBhcmFtIGFycjIg6KaB6Zmk5Y6755qE5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gbmV3X2FyciDmlrDnmoTnqbrmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIGV4aXN0IGFyciBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRXhpc3RBcnIoYXJyMSwgYXJyMiwgbmV3X2Fycik6IGFueSB7XHJcbiAgICAgICAgYXJyMS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcclxuICAgICAgICAgICAgaWYgKGFycjIuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3X2Fyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gbmV3X2FycjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICDliqjmgIHliqDovb3pooTliLbkvZNcclxuICAgICAqIEBwYXJhbSBfdXJsIFJlc291cmNl55uu5b2VXHJcbiAgICAgKiBAcGFyYW0gQ0FMTEJBQ0sgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkUHJlZmFiKF91cmw6IHN0cmluZywgQ0FMTEJBQ0s/KSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3ByZWZhYi8nICsgX3VybCwgY2MuUHJlZmFiLCAoZXJyOiBFcnJvciwgcmVzOiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKENBTExCQUNLKSB7XHJcbiAgICAgICAgICAgICAgICBDQUxMQkFDSyhyZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcXVpY2tTb3J0KGFycik6IG51bWJlcltdIHtcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA8PSAxKSB7IHJldHVybiBhcnI7IH1cclxuICAgICAgICB2YXIgcGl2b3RJbmRleCA9IE1hdGguZmxvb3IoYXJyLmxlbmd0aCAvIDIpO1xyXG4gICAgICAgIHZhciBwaXZvdCA9IGFyci5zcGxpY2UocGl2b3RJbmRleCwgMSlbMF07XHJcbiAgICAgICAgdmFyIGxlZnQgPSBbXTtcclxuICAgICAgICB2YXIgcmlnaHQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYXJyW2ldIDwgcGl2b3QpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQucHVzaChhcnJbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQucHVzaChhcnJbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnF1aWNrU29ydChsZWZ0KS5jb25jYXQoW3Bpdm90XSwgdGhpcy5xdWlja1NvcnQocmlnaHQpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldEVtYWlsKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gW1wi6LSk6Imy5pen5qKmXCIsIFwi5pqn5pin5LiO5auJ5aaSXCIsIFwi54ix5L2g5Lmd5aa5XCIsIFwi5a6d6LSd5Ly05L6jXCIsIFwi6KKr5L2g5rWq6LS555qE5oOF5oSfXCIsIFwi5aSp6ZW/5Zyw5LmF55qE54ix5oGLXCIsXHJcbiAgICAgICAgICAgIFwi5qKm5oOz5pe25YiGXCIsIFwi5b+D55a86Ieq5bexXCIsIFwi5oqK5pif5pif5pS+6L+b5Y+j6KKL6YeMXCIsIFwi6L2v6KeBXCIsIFwi6aKd5aS0XCIsIFwi6KGj6KKC57+p57+pXCIsIFwi5Yek55y45pyJ5L2gXCIsIFwi5Yir5aSq5b+r5YWz54GvXCIsXHJcbiAgICAgICAgICAgIFwi6K+x5oORXCIsIFwi6Ieq5Y+kXCIsIFwi5rKQ5Y+25riF6aOOXCIsIFwi5Lqm5LiW5Yeh5Y2OXCIsIFwi57mB5Y2O6JC95LiW5Li25raQ6K645L2g5LiA5oq557qi6aKcXCIsIFwi5oqk6aOf5aWz6aG956ulXCIsIFwi5oyR55yJXCIsIFwi57yY6LW3XCIsXHJcbiAgICAgICAgICAgIFwi5ZyI5b+DXCIsIFwi5Yi65r+AXCIsIFwi57qi54ObXCIsIFwi5oCA5pilXCIsIFwi6ZSm5aaGXCIsIFwi6Jme5b+DXCIsIFwi5omO5b+DXCIsIFwi5aCH5aSPXCIsIFwi5q6L5bm044GjXCIsIFwi4pWt5reh5aaG4pWuXCIsIFwi56yE5Y+R6YaSXCIsXHJcbiAgICAgICAgICAgIFwi6K+X5rKr5ra1LFwiLCBcIumHjeWPo+WRs1wiLCBcIuaCsueUu+aJh1wiLCBcIum7keWQjeWNlVwiLCBcIuiKseS6ieWPkVwiLCBcIuWwj+aAp+aEn1wiLCBcIuWMl+S7keiJslwiLCBcIuiHqui9u+iIn+WOu1wiLCBcIuemu+WbmuaIiFwiLFxyXG4gICAgICAgICAgICBcIuacneatjOWknOW8plwiLCBcIuW5tOWwkeWmguaiplwiLCBcIuaSqeaDheaIj+a1quWtkFwiLCBcIuaSqeaxieWunuWKm+a0vlwiLCBcIua1qumHjuWwkeWls+W/g1wiLCBcIuWmguWInVwiLCBcIuS6oemxvOa3sea1t+iKseWkleaLvlwiLFxyXG4gICAgICAgICAgICBcIuacneaLvlwiLCBcIueIseeskeeahOWls+eUn1wiLCBcIuaggOaZmum4ouS5sVwiLCBcIuWHr+WWteeahOWwj+mxvOmzhVwiLCBcIuWvu+aipuaXheS6ulwiLCBcIuWkseaEj+iKseWto+WwkeWls1wiLCBcIuWto+acq8Kw5LiN5a+C5a+eXCIsXHJcbiAgICAgICAgICAgIFwi55yJ55y85b+D6Ze0XCIsIFwi5Y2K55uP6Z2S54GvXCIsIFwi5YGP5omn5LiO5L2gXCIsIFwi6L2754Of6JaE5pquXCIsIFwi6Z2S5qmY5qCA6ICzXCIsIFwi5YKy5aiH6JCM5aiDXCIsIFwi5b6A5pel5p+U5oOFXCIsIFwi55m+5q+S5LiN5L61XCIsXHJcbiAgICAgICAgICAgIFwi6LCm5LiO6LCm5a+7XCIsIFwi5Yid5b+D6I6r6LSfXCIsIFwi5pma54K555u46YGHXCIsIFwi57Sr6ZmM57qi5bCYXCIsIFwi5ayhLuaagOiLnea8glwiLCBcIue6r+eyueWJqueIsVwiLCBcIuavq+aXoOS7o+S7t1wiLCBcIuW/p+eDn+auh+W+gFwiLFxyXG4gICAgICAgICAgICBcIua9h+a5mOWknOmbqFwiLCBcIuWAvuWwveWkqeS4i1wiLCBcIuaipumGkuaXtuWIhlwiLCBcIuWuieS5i+iLpee0oFwiLCBcIuaEv+WQm+WuieWlvVwiLCBcIuS9oOWlve+8jOaYjuWkqVwiLCBcIuiOq+WkseiOq+W/mFwiLCBcIuWtkeeEtuS4gOi6q1wiLFxyXG4gICAgICAgICAgICBcIuaXoOmcgOWWhOiJr1wiLCBcIumHjueMquS9qeeQqlwiLCBcIuassuiogOWPiOatolwiLCBcIumFt+WRs+W+iOato1wiLCBcIuS6uui1sOiMtuWHiVwiLCBcIuS8tOS9oOS9meeUn1wiLCBcIumaj+W/g+aJgOasslwiLCBcIuS4jei0n+mBh+ingVwiLCBcIumZquaIkeWQrOmjjlwiLFxyXG4gICAgICAgICAgICBcIuetiemjjuS5n+etieS9oFwiLCBcIuS4uuS9oOS4iuaImOWculwiLCBcIua3seaLpeaEj+S4reS6ulwiLCBcIuW/g+i9r+iEvuawlOWkp1wiLCBcIumHjuaAp+WPiOi/t+S6ulwiLCBcIuenr+aUkuS4gOi6q+mFt1wiLCBcIuaSqeWmueS4gOaKiuaJi1wiLCBcIueos+aPoeaxn+Wxseadg1wiLFxyXG4gICAgICAgICAgICBcIuaXoOiBiuS5n+S4jeiBilwiLCBcIuaMgeWIgOeos+aDheWculwiLCBcIuivt+S/neeuoeWlveS9oOmaj+i6q+aQuuW4pueahOaap+aYp1wiLCBcIuS4jeWKquWKm+aLv+S7gOS5iOe7meS9oOacquadpVwiLCBcIuiqk+iogOWPquaYr+S4gOaXtueahOWkseiogFwiLCBcIuWQrOOCnea1t+WTreeahOWjsOmfs1wiLFxyXG4gICAgICAgICAgICBcIuaIkeasoOS9oOS4gOS4quWFqOWJp+e7iFwiLCBcIuW+jOefpeW+jOimulwiLCBcIuaXp+ihl+aXp+W3t+etieaXp+S6ulwiLCBcIuemu+S6uuS4jeWbnlwiLCBcIuWMl+ihl+acq+mbqFwiLCBcIuecieecvOWmguWInVwiLCBcIumbqOiQveaXoOWjsFwiLCBcIuaWqeWwveWkqeS4i1wiLCBcIuWNiueCueW/g1wiLFxyXG4gICAgICAgICAgICBcIua3keWls+iMg1wiLCBcIuaipuS4reS6ulwiLCBcIuW5s+W4uOW/g1wiLCBcIuaJi+aUvuW8gFwiLCBcIuWtpOe+juS6ulwiLCBcIuWImuWImuWlvVwiLCBcIuWNiueUn+e8mFwiLCBcIuacquivrea3muWFiOa1gVwiLCBcIuS9oOaAgOmHjOeyvuiHtOeahOeMqueMqlwiLCBcIuWIneacrMqayZ5cIixcclxuICAgICAgICAgICAgXCLkuIDlj6rlpLHlrqDni5DpmL9cIiwgXCLotKXnu5nlj6/niLFcIiwgXCLnprvkurrkuYXlt7fmmZrnp4vlh4lcIiwgXCLmlYXkurrovp7lt7fmiprovbvpo45cIiwgXCLmiJHkuI3mmK/og4blsI/prLxcIiwgXCLmhJ/mganml6fniLFcIiwgXCLmgYvniLHov5vooYzmm7JcIiwgXCLlpKnnlJ/lgrLpqqhcIixcclxuICAgICAgICAgICAgXCLmmK/osIHnibXliqjkuobmiJHnmoTlv4NcIiwgXCLlsbHnqbfmsLTlsL3mm7Tor43nqbdcIiwgXCLmt6HnhLbmsJTotKjmr5TlpKnpq5jjgINcIiwgXCLlh6DlpJrlsoHimaFcIiwgXCLmlL7miJHlh7rljrtcIiwgXCLnhrHliLDohqjohLlcIiwgXCLoi43lsbHmnInkupXnvo7kvLznqbpcIiwgXCLmkIHmtYXCsFwiLFxyXG4gICAgICAgICAgICBcIui9r+iQjFwiLCBcIui3r+mAlFwiLCBcIuazuOayveeDn+awtOmHjOeahOi/h+WuolwiLCBcIua3oeaEj+ihrOS8mOaflOS4tlwiLCBcIuWmguS6uumlruawtO+8jOWGt+aaluiHquefpVwiLCBcIuiHquWPpOepuuaDheWkmuS9meaBqFwiLCBcIueWj+mbqOiQp+iQp+WNg+ihjOazqlwiLCBcIumHieiJsua4hemjjlwiLFxyXG4gICAgICAgICAgICBcIuaXp+aDhei/lOiIqlwiLCBcIueDm+S4reazqlwiLCBcIuaVheS6i+S5hVwiLCBcIuavgeW/g+S6ulwiLCBcIuWkseioq+S6ulwiLCBcIuWwkeWls+eYvlwiLCBcIuaXp+W/g+mFuFwiLCBcIue7tOWlueWRvVwiLCBcIuaoseiKseeah+WQjlwiLCBcIuW9seS8tOS6uuS5hVwiLCBcIuivl+S6uuekvOeMrlwiLFxyXG4gICAgICAgICAgICBcIuWPq+mGkuiAs+actVwiLCBcIui/h+WIhuedgOi/t1wiLCBcIuaaluS6juW/g+OChlwiLCBcIui9u+WPueiKseW8gFwiLCBcIuajruidtuWRpuOBpFwiLCBcIuahg+iJsueOq+eRsFwiLCBcIuS6uumHjuaAp+WtkOa1qlwiLCBcIumFt+WIsOS4jeivtOivnVwiLCBcIuWwgeWIgOS4jeWGjeaImFwiLFxyXG4gICAgICAgICAgICBcIuaDheaEn+i0qeWNluaculwiLCBcIuW4heWTpe+8jOivt+eVmeatpVwiLCBcIua3seaLpeS7luWFpeaiplwiLCBcIuaDheWKqOWImeW/g+eXm1wiLCBcIuWMl+afoOmZjOWvklwiLCBcIu+5jum7r+a3oeODvlwiLCBcIuWHuOmAvOWomuWLg+S4uFwiLCBcIuWms+eahOa6q+aflOKVruWPquioseiOquaTgeWbv1wiLFxyXG4gICAgICAgICAgICBcIuWQq+eskeS5neaLs1wiLCBcIui5suihl+S4tuWQkOeDn+WciG/Ov9CeXCIsIFwi5bCR5aWz5qKmXCIsIFwi5Lyq6auY5Ya3XCIsIFwi5Yir5YeR5ZCIXCIsIFwi5Yu/55u45b+YXCIsIFwi5Yeg5bm05Y2OXCIsIFwi5pWF6L6eXCIsIFwi5Yeg5ZGz5ZC7XCIsIFwi5YWJ6Zi06LSf5a656aKc4pWuXCIsXHJcbiAgICAgICAgICAgIFwiVFJZ77yM6Iie5Y+wwrfCt1wiLCBcIue0q+iJsuaYjuS/oeeJh1wiLCBcIuS4gOmhvuWAvuS6uuWfjiDigJ1cIiwgXCLnnLjmlZtcIiwgXCLmkJbmm7PntIXlobXkuK1cIiwgXCLpub/lm7Dmo67mnpdcIiwgXCLoj4roirHngb/ng4JeXCIsIFwi6aOO5pyI5LiN562J6ZeyXCIsIFwi6aKE6KiA5LiO5qKmXCIsXHJcbiAgICAgICAgICAgIFwi5paH6Im66I+H5YeJ5aW95oSk6Z2SLypcIiwgXCLlpKrpmLPmr4/lpKnpg73nlJ/msJRcIiwgXCLmnKjpqazlnKjml4vovaxcIiwgXCLnnInnnLzlhrfml6Dmg4VcIiwgXCLlvoDkuovln4vpo47kuK1cIiwgXCLlpqnlqprnu5nosIHnnItcIiwgXCLov7fkuIrnlLflm77lg49cIixcclxuICAgICAgICAgICAgXCLpmarkvaDliLDkuJbnlYznmoTlsL3lpLRcIiwgXCLlv4Poi6XliJ3mmbRcIiwgXCLlp5Dmr5Tnibnku5Hoi4/ov5jnuq/CsFwiLCBcIuebm+S4lua1geWFiVwiLCBcIuS4uuWQm+WAvuW/g1wiLCBcIueUn+eUn+S4luS4llwiLCBcIuaYpemjjuS5jei1t1wiLCBcIue0oOW5tOWHiemfs1wiLFxyXG4gICAgICAgICAgICBcIumAvuacn+WuiOWAmVwiLCBcIuWQtuasoeOAgeabluaYp1wiLCBcIuWtpOWfjuaXp+aiplwiLCBcIuajrumZjOWkj+aggFwiLCBcIuWPpOWfjumdkuiho1wiLCBcIuWtpOmFkua1quWPi1wiLCBcIuaXp+W3t+WQrOmjjlwiLCBcIumjjuepv+iln+iiliDplb/lj7noo4HnuqLpopxcIixcclxuICAgICAgICAgICAgXCLmnJvkuI3nqb/np4vmsLQvL+etieS4jeWbnuaXp+S6ulwiLCBcIuWuiOS4gOW6p+epuuWfjuetieS4gOS4quaXp+S6ulwiLCBcIuelouiLpeWNn+aDnOiOquS6puWNn+WXs1wiLCBcIuWyguiDveWwveWmguS6uuaEj+S9huaxguaXoOaEp+S6juW/g1wiLCBcIui4qeedgOajuuadkOi3s+msvOatpVwiLFxyXG4gICAgICAgICAgICBcIua4heazquS4pOihjFwiLCBcIumFkuesmea4heaggFwiLCBcIuWtpOmFkuWvuemlrlwiLCBcIuS9meeUn+a1quWtkFwiLCBcIuaEn+aAp+WcqOS9nOeln1wiLCBcIuiLpemBh+S9oFwiLCBcIuWBh+e7heWjq1wiLCBcIuaMieaXtuiNkuWUkFwiLCBcIuW/q+W/q+mVv+Wkp1wiLCBcIumHiuaAgFwiLFxyXG4gICAgICAgICAgICBcIuauh+aXi+W+i1wiLCBcIuS4ieWAi+Wtl+WwjeS4jei1t+OAhlwiLCBcIuaEv+aYr+S9oOW/g+S5i+eOi1wiLCBcIuaTkuaLv+e+juS6uuW/g1wiLCBcIumhvuiZkVwiLCBcIuWDj+mjjuS4gOagt1wiLCBcIuaDpuiusFwiLCBcIuWQp+WUp+S9oFwiLCBcIuWPqumdoOWQrOivtFwiLFxyXG4gICAgICAgICAgICBcIueIt++8jOahgOmqnOS4jempr1wiLCBcIuWPquWBj+iikuS9oFwiLCBcIuS9oOecvOS4reebiOebiOaciFwiLCBcIuaPkOeslOWGmeaDheS5plwiLCBcIuiAgeeIuVwiLCBcIueskeaIkeW6uOS/l1wiLCBcIuWmguatjFwiLCBcIueXtOaDheeLl1wiLCBcIuaEn+iwoue7j+WOhlwiLFxyXG4gICAgICAgICAgICBcIumdkuaYpeWIq+aMpemcjVwiLCBcIuWmhOWPmVwiLCBcIuiiq+a3ueatu+eahOmxvFwiLCBcIuaxn+S4nOi/h+WuolwiLCBcIuWUr+eLrOaYr+S9oFwiLCBcIuWPquetieWFrOWtkFwiLCBcIuWuieefpeaIkeaEj1wiLCBcIuaAquaAp+eskeS6ui5cIiwgXCLlnIjlnIjkvaDkuKrlj4nlj4lcIixcclxuICAgICAgICAgICAgXCLlirPotYTni6zlrqDkuIDmlrlcIiwgXCLmiJHmnInmg7PkvaBcIiwgXCLnvo7msYnlrZBcIiwgXCLkvbDku5lcIiwgXCLlkITot6/op5LoibJcIiwgXCLliJ3mgYvmg4XkuYVcIiwgXCLokbXkuIDoiKznmoTlsJHlubRcIiwgXCLnm67nmoTov73kvaBcIiwgXCLkuIDmna/lv5jmg4VcIixcclxuICAgICAgICAgICAgXCLnhKHlpYjlt7LooqvlgrdcIiwgXCLns5bkuI3lj4rkvaDnlJxcIiwgXCLlv4PnmL7miJDnl4VcIiwgXCLmkqnlprnmrKflt7RcIiwgXCLot6/ml4HnmoTml6DlpYhcIiwgXCLlsI/lrrbkvJlcIiwgXCLnp4vljJflhYjnlJ9cIiwgXCLov7fnprvnmoTnnLxcIiwgXCLmiYDosJPnmoTnrKzkuInogIVcIixcclxuICAgICAgICAgICAgXCLluKbkvaDlm57lrrZcIiwgXCLolZ3onYLCt+iyqOKEoVwiLCBcIuGAlOaDheaWrVwiLCBcIuWHoOS6uumavuW6lFwiLCBcIuaIkeS4uuiHquW3seS7o+iogCFcIiwgXCLlpbPlhL/lm73nmoTnlLfkurpcIiwgXCLlhbHluqbkvZnnlJ9cIiwgXCLpqprlubTmsYLpgIbmjqhpXCIsXHJcbiAgICAgICAgICAgIFwi54Ot5b+D5biC5rCRXCIsIFwi6Ziz5YWJ5LiL55qE5rip5pqWwrBcIiwgXCLliKvmtonkuJblpKrmt7FcIiwgXCLlkb3kuK3kuI3nvLrni5dcIiwgXCLmoqblpb1cIiwgXCLlkKvnrJHorrDkuItcIiwgXCLmnInngrnkuIrnmL5cIiwgXCLov7fmr4HlsJHlubRcIiwgXCLmtLvlnKjlvZPkuItcIixcclxuICAgICAgICAgICAgXCLov5jnu5nkvaDnmoToh6rnlLFcIiwgXCLlpJrmg7PlvLrlkLvkvaBcIiwgXCLkuJbkuK3ku5nkurpcIiwgXCLpl7vpppnor4blpbPkurpcIiwgXCLnlLfkvJhcIiwgXCLmiJHopoHorqnmg4XmlYzlvZPkvLTpg45cIiwgXCLmlJLkuIDooovmmJ/mmJ8uXCIsIFwi55m95LqR5oKg5oKgXCIsXHJcbiAgICAgICAgICAgIFwi5oOF5q6HXCIsIFwi5pyJ5pyo5pyJ5aaz5YWc5LiA5qC3LlwiLCBcIue6ouminOmGiVwiLCBcIua4heeZvemHjumFklwiLCBcIuiNkuWfjlwiLCBcIue6quW5tFwiLCBcIuWRhuapmFwiLCBcIumdkueomlwiLCBcIuiFu+atqlwiLCBcIua8k+axkFwiLCBcIuWInemBh1wiLFxyXG4gICAgICAgICAgICBcIuaEn+aAp1wiLCBcIuWiqOWHiVwiLCBcIuS9memGiVwiLCBcIuWtpOWIulwiLCBcIuWPm+mAhlwiLCBcIuWni+e7iOS4jeWkn+eIseS9oFwiLCBcIueqneWbiuaEn+aDhVwiLCBcIueyiee6ouiJsuWwkeWls1wiLCBcIuepv+iNieijmeeahOWwkeWls1wiLCBcIui/t+mAlFwiLFxyXG4gICAgICAgICAgICBcIuWwj+aXtuWFiVwiLCBcIuWwkeWls+eahOiLsembhOaiplwiLCBcIuWCsuWnv1wiLCBcIuW/teaXp1wiLCBcIua3seW3t1wiLCBcIuS9oOeskeWcqOecieecvC5cIiwgXCLng5/oirHmmJPlhrdcIiwgXCLmn6DmoIBcIiwgXCLkuYXlv7VcIiwgXCLkuaDmg6/mgKfkvp3otZZcIixcclxuICAgICAgICAgICAgXCLml6fmhrZcIiwgXCLmlYXkuovmnKrlroxcIiwgXCLmnIjnq7nmjL3po45cIiwgXCLpm4Xnl55cIiwgXCLlraTouqtcIiwgXCLlh4nlv4NcIiwgXCLmiqzkuL5cIiwgXCLmmajmm6blvq7mmpZcIiwgXCLli7/lv5jliJ3lv4NcIiwgXCLmrbvmkpFcIiwgXCLpl7LkupFcIixcclxuICAgICAgICAgICAgXCLlhrfnnLhcIiwgXCLllrXllrVcIiwgXCLnm7jmnYPnvo7kurpcIiwgXCLojqvniLFcIiwgXCLohIblvLFcIiwgXCLpmYzmrodcIiwgXCLljZXmnYBcIiwgXCLlgrLlqIflsI/lhazkuLtcIiwgXCLoloTojbfns5bkuLblvq7lh4lcIl1cclxuXHJcbiAgICAgICAgbGV0IG5hbWUgPSBsaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMikgKyAnKioqJyArIG5hbWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoIC0gMiwgbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIDIpICsgJyoqKic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROb3JtYWxpdHlOdW1CeVJhbmRvbShEYXRhKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsRGF0YSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvdGFsRGF0YSArPSBwYXJzZUludChEYXRhW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRvdGFsRGF0YSk7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VJbnQoRGF0YVtpXSk7XHJcbiAgICAgICAgICAgIGlmIChudW0gPCB0b3RhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xyXG4iXX0=