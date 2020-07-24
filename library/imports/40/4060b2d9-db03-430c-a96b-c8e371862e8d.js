"use strict";
cc._RF.push(module, '4060bLZ2wNDDKlryONxhi6N', 'GPool');
// script/common/GPool.ts

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
/**全局节点池模块
 * 注意：预制名字和其上面挂载脚本名字一样
 */
var GPool = new /** @class */ (function () {
    function class_1() {
        /**保存所有要生成节点池的预制的根目录，相对"resources/"目录  "Pool"*/
        this._PoolPath = "prefabs";
        /**所有预制初始生成节点池的数量 0 */
        this._InitCommon = 0;
        /**分别设置每个节点池初始数量 {} */
        this._InitEach = {};
        /**获取预制节点后设置预制数据的函数名 "setData" */
        this._InitFunctionName = "setData";
        /**保存所有节点池的map */
        this._allPool = new Map();
        /**保存所有预制名及其预制的map */
        this._allPrefab = new Map();
    }
    /**初始化设置生成Pool的默认参数，一般都用默认的默认参数，
     * - ***可不调用此函数***
     * @param optional 属性参数说明如下：
     * @param optional.PoolPath 保存所有要生成节点池的预制的根目录，默认为"Pool"
     * @param optional.InitCommon 所有预制初始生成节点池的数量，默认为0
     * @param optional.InitEach 分别设置每个节点池初始数量，不设置的默认为 InitCommon
     * optional.InitEach 对象的键名为预制名字，键值为初始化数量
     * @param optional.InitFunctionName 获取预制节点后设置预制数据的函数名，默认为 "setData"
     * @example
     * //设置预制prefabName1的初始数量为10，预制prefabName2的初始数量为20
     * GPool.init({InitEach: {prefabName1: 10, prefabName2: 20}});
     *
     */
    class_1.prototype.init = function (optional) {
        var _this = this;
        if (optional === void 0) { optional = {}; }
        //设置了默认参数的替换默认的默认参数
        for (var _i = 0, _a = Object.keys(optional); _i < _a.length; _i++) {
            var key = _a[_i];
            if (typeof this["_" + key] != "undefined") {
                this["_" + key] = optional[key];
            }
        }
        //初始化所有节点池
        cc.loader.loadResDir(this._PoolPath, cc.Prefab, function (err, prefabs, urls) {
            // console.warn("初始化所有节点池", err, prefabs, urls);
            for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
                var one = urls_1[_i];
                var url = one.split("/");
                _this._initPool(url[url.length - 1]);
            }
        });
    };
    /**初始化节点池
     * @param prefabName 预制节点的名字
     */
    class_1.prototype._initPool = function (prefabName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            cc.loader.loadRes(_this._PoolPath + "/" + prefabName, cc.Prefab, function (err, prefab) {
                                if (err) {
                                    console.error(err.message || err);
                                    reject(err);
                                    return;
                                }
                                var nodePool = new cc.NodePool();
                                var initNum = _this._InitEach[prefabName] || _this._InitCommon;
                                for (var i = 0; i < initNum; i++) {
                                    nodePool.put(cc.instantiate(prefab));
                                }
                                _this._allPool.set(prefabName, nodePool);
                                _this._allPrefab.set(prefabName, prefab);
                                // console.warn("初始化节点池", prefabName);
                                resolve();
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**根据预制的名字从对应的节点池获取一个节点
     * @param prefabName 预制的名字
     * @param optional 属性参数说明如下：
     * @param optional.isGetInfo 是否只获取预制的信息不获取对应的节点
     * @param optional.setData 传递给预制上挂载的脚本的设置数据函数的参数
     * @example
     * GPool.get("LabelIten", { isGetInfo: true }).then((node: cc.Node) => {
            console.error("node info", node);
       });

       GPool.get("ColorItem", { setData: { tips: "加载成功" } }).then((node: cc.Node) => {
            node.parent = this.node;
       });
     */
    class_1.prototype.get = function (prefabName, optional) {
        if (optional === void 0) { optional = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var isGetInfo, setData, nodePool, prefab;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isGetInfo = optional.isGetInfo, setData = optional.setData;
                        nodePool = this._allPool.get(prefabName);
                        prefab = this._allPrefab.get(prefabName);
                        if (!(nodePool && prefab)) return [3 /*break*/, 1];
                        // console.warn("已经提前生成了节点池");
                        return [2 /*return*/, this._get(prefabName, isGetInfo, setData)];
                    case 1: //还没有对应的节点池
                    // console.warn("还没有对应的节点池");
                    return [4 /*yield*/, this._initPool(prefabName)];
                    case 2:
                        // console.warn("还没有对应的节点池");
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(_this._get(prefabName, isGetInfo, setData));
                            })];
                }
            });
        });
    };
    /**获取节点
     * @param prefabName 预制的名字
     * @param isGetInfo 是否只获取预制的信息不获取对应的节点
     * @param prefabName 传递给预制上挂载的脚本的设置数据函数的参数
     */
    class_1.prototype._get = function (prefabName, isGetInfo, setData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var nodePool = _this._allPool.get(prefabName);
                        var prefab = _this._allPrefab.get(prefabName);
                        if (isGetInfo) { //只获取预制信息
                            resolve(prefab.data);
                        }
                        else { //获取预制节点
                            var getNode = null;
                            if (nodePool.size() > 0) {
                                getNode = nodePool.get();
                            }
                            else {
                                // console.warn(prefabName + "重新创建!");
                                getNode = cc.instantiate(prefab);
                            }
                            //是否初始化数据
                            if (setData) {
                                var script = getNode.getComponent(prefabName);
                                if (script && script[_this._InitFunctionName]) {
                                    if (script.__preload && script._isOnLoadCalled == 0)
                                        script.__preload();
                                    script[_this._InitFunctionName](setData);
                                }
                                else {
                                    // console.warn(`没有${this._InitFunctionName}函数`, prefabName);
                                }
                            }
                            resolve(getNode);
                        }
                    })];
            });
        });
    };
    /**将一个节点回收到对应的节点池
     * @param node 要回收的节点
     * @example
     * GPool.put(this.node);
     */
    class_1.prototype.put = function (node) {
        //执行通用化的还原操作
        node.stopAllActions();
        this.reductionFun(node);
        var nodePool = this._allPool.get(node.name);
        nodePool.put(node);
        FLog.normal(node.name + "节点池数量:", nodePool.size());
    };
    /**销毁一个节点池并销毁其中所有的节点
     * @param prefabName 预制的名字
     * @example
     * GPool.destroyPool("LabelIten");
     */
    class_1.prototype.destroyPool = function (prefabName) {
        var nodePool = this._allPool.get(prefabName);
        nodePool.clear();
    };
    /**销毁所有节点池及所有缓存的节点
     * @example
     * GPool.destroyAllPool();
     */
    class_1.prototype.destroyAllPool = function () {
        this._allPool.forEach(function (nodePool) { return nodePool.clear(); });
        this._allPool.clear();
        this._allPrefab.clear();
    };
    class_1.prototype.reductionFun = function (node) {
        if (node.name == 'bx') {
            node.opacity = 255;
            node.scale = 1;
            node.getChildByName('New Label').active = true;
            node.getComponent(cc.PhysicsPolygonCollider).enabled = true;
        }
    };
    return class_1;
}())();
window["GPool"] = GPool;

cc._RF.pop();