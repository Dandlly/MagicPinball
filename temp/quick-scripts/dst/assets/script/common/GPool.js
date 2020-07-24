
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/GPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEdQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxJQUFJLEtBQUssR0FBRztJQUFJO1FBRVosK0NBQStDO1FBQ3ZDLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDOUIsc0JBQXNCO1FBQ2QsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDeEIsc0JBQXNCO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QixpQ0FBaUM7UUFDekIsc0JBQWlCLEdBQUcsU0FBUyxDQUFDO1FBRXRDLGlCQUFpQjtRQUNULGFBQVEsR0FBNkIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2RCxxQkFBcUI7UUFDYixlQUFVLEdBQTJCLElBQUksR0FBRyxFQUFFLENBQUM7SUFtSzNELENBQUM7SUFqS0c7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsc0JBQUksR0FBSixVQUFLLFFBQXVHO1FBQTVHLGlCQWVDO1FBZkkseUJBQUEsRUFBQSxhQUF1RztRQUN4RyxtQkFBbUI7UUFDbkIsS0FBZ0IsVUFBcUIsRUFBckIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQWxDLElBQUksR0FBRyxTQUFBO1lBQ1IsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksV0FBVyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuQztTQUNKO1FBQ0QsVUFBVTtRQUNWLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBYztZQUN6RSxn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QUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUMvRDtJQUNMLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FqTGdCLEFBaUxmLEtBQUUsQ0FBQztBQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKirlhajlsYDoioLngrnmsaDmqKHlnZcgIFxyXG4gKiDms6jmhI/vvJrpooTliLblkI3lrZflkozlhbbkuIrpnaLmjILovb3ohJrmnKzlkI3lrZfkuIDmoLcgIFxyXG4gKi9cclxubGV0IEdQb29sID0gbmV3IGNsYXNzIHtcclxuXHJcbiAgICAvKirkv53lrZjmiYDmnInopoHnlJ/miJDoioLngrnmsaDnmoTpooTliLbnmoTmoLnnm67lvZXvvIznm7jlr7lcInJlc291cmNlcy9cIuebruW9lSAgXCJQb29sXCIqL1xyXG4gICAgcHJpdmF0ZSBfUG9vbFBhdGggPSBcInByZWZhYnNcIjtcclxuICAgIC8qKuaJgOaciemihOWItuWIneWni+eUn+aIkOiKgueCueaxoOeahOaVsOmHjyAwICovXHJcbiAgICBwcml2YXRlIF9Jbml0Q29tbW9uID0gMDtcclxuICAgIC8qKuWIhuWIq+iuvue9ruavj+S4quiKgueCueaxoOWIneWni+aVsOmHjyB7fSAqL1xyXG4gICAgcHJpdmF0ZSBfSW5pdEVhY2ggPSB7fTtcclxuICAgIC8qKuiOt+WPlumihOWItuiKgueCueWQjuiuvue9rumihOWItuaVsOaNrueahOWHveaVsOWQjSBcInNldERhdGFcIiAqL1xyXG4gICAgcHJpdmF0ZSBfSW5pdEZ1bmN0aW9uTmFtZSA9IFwic2V0RGF0YVwiO1xyXG5cclxuICAgIC8qKuS/neWtmOaJgOacieiKgueCueaxoOeahG1hcCAqL1xyXG4gICAgcHJpdmF0ZSBfYWxsUG9vbDogTWFwPHN0cmluZywgY2MuTm9kZVBvb2w+ID0gbmV3IE1hcCgpO1xyXG4gICAgLyoq5L+d5a2Y5omA5pyJ6aKE5Yi25ZCN5Y+K5YW26aKE5Yi255qEbWFwICovXHJcbiAgICBwcml2YXRlIF9hbGxQcmVmYWI6IE1hcDxzdHJpbmcsIGNjLlByZWZhYj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW6K6+572u55Sf5oiQUG9vbOeahOm7mOiupOWPguaVsO+8jOS4gOiIrOmDveeUqOm7mOiupOeahOm7mOiupOWPguaVsO+8jCAgXHJcbiAgICAgKiAtICoqKuWPr+S4jeiwg+eUqOatpOWHveaVsCoqKiAgXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uYWwg5bGe5oCn5Y+C5pWw6K+05piO5aaC5LiL77yaXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uYWwuUG9vbFBhdGgg5L+d5a2Y5omA5pyJ6KaB55Sf5oiQ6IqC54K55rGg55qE6aKE5Yi255qE5qC555uu5b2V77yM6buY6K6k5Li6XCJQb29sXCIgIFxyXG4gICAgICogQHBhcmFtIG9wdGlvbmFsLkluaXRDb21tb24g5omA5pyJ6aKE5Yi25Yid5aeL55Sf5oiQ6IqC54K55rGg55qE5pWw6YeP77yM6buY6K6k5Li6MCAgXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uYWwuSW5pdEVhY2gg5YiG5Yir6K6+572u5q+P5Liq6IqC54K55rGg5Yid5aeL5pWw6YeP77yM5LiN6K6+572u55qE6buY6K6k5Li6IEluaXRDb21tb24gIFxyXG4gICAgICogb3B0aW9uYWwuSW5pdEVhY2gg5a+56LGh55qE6ZSu5ZCN5Li66aKE5Yi25ZCN5a2X77yM6ZSu5YC85Li65Yid5aeL5YyW5pWw6YePICBcclxuICAgICAqIEBwYXJhbSBvcHRpb25hbC5Jbml0RnVuY3Rpb25OYW1lIOiOt+WPlumihOWItuiKgueCueWQjuiuvue9rumihOWItuaVsOaNrueahOWHveaVsOWQje+8jOm7mOiupOS4uiBcInNldERhdGFcIiAgIFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8v6K6+572u6aKE5Yi2cHJlZmFiTmFtZTHnmoTliJ3lp4vmlbDph4/kuLoxMO+8jOmihOWItnByZWZhYk5hbWUy55qE5Yid5aeL5pWw6YeP5Li6MjAgIFxyXG4gICAgICogR1Bvb2wuaW5pdCh7SW5pdEVhY2g6IHtwcmVmYWJOYW1lMTogMTAsIHByZWZhYk5hbWUyOiAyMH19KTsgIFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgaW5pdChvcHRpb25hbDogeyBQb29sUGF0aD86IHN0cmluZywgSW5pdENvbW1vbj86IG51bWJlciwgSW5pdEVhY2g/OiBvYmplY3QsIEluaXRGdW5jdGlvbk5hbWU/OiBzdHJpbmcgfSA9IHt9KSB7XHJcbiAgICAgICAgLy/orr7nva7kuobpu5jorqTlj4LmlbDnmoTmm7/mjaLpu5jorqTnmoTpu5jorqTlj4LmlbBcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMob3B0aW9uYWwpKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tcIl9cIiArIGtleV0gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tcIl9cIiArIGtleV0gPSBvcHRpb25hbFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yid5aeL5YyW5omA5pyJ6IqC54K55rGgXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIodGhpcy5fUG9vbFBhdGgsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFicywgdXJsczogc3RyaW5nW10pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKFwi5Yid5aeL5YyW5omA5pyJ6IqC54K55rGgXCIsIGVyciwgcHJlZmFicywgdXJscyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9uZSBvZiB1cmxzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gb25lLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQb29sKHVybFt1cmwubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW6IqC54K55rGgICBcclxuICAgICAqIEBwYXJhbSBwcmVmYWJOYW1lIOmihOWItuiKgueCueeahOWQjeWtlyAgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgX2luaXRQb29sKHByZWZhYk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYCR7dGhpcy5fUG9vbFBhdGh9LyR7cHJlZmFiTmFtZX1gLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBub2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluaXROdW0gPSB0aGlzLl9Jbml0RWFjaFtwcmVmYWJOYW1lXSB8fCB0aGlzLl9Jbml0Q29tbW9uO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlUG9vbC5wdXQoY2MuaW5zdGFudGlhdGUocHJlZmFiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxQb29sLnNldChwcmVmYWJOYW1lLCBub2RlUG9vbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxQcmVmYWIuc2V0KHByZWZhYk5hbWUsIHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCLliJ3lp4vljJboioLngrnmsaBcIiwgcHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuagueaNrumihOWItueahOWQjeWtl+S7juWvueW6lOeahOiKgueCueaxoOiOt+WPluS4gOS4quiKgueCuSAgXHJcbiAgICAgKiBAcGFyYW0gcHJlZmFiTmFtZSDpooTliLbnmoTlkI3lrZcgIFxyXG4gICAgICogQHBhcmFtIG9wdGlvbmFsIOWxnuaAp+WPguaVsOivtOaYjuWmguS4i++8miAgXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uYWwuaXNHZXRJbmZvIOaYr+WQpuWPquiOt+WPlumihOWItueahOS/oeaBr+S4jeiOt+WPluWvueW6lOeahOiKgueCuSAgXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9uYWwuc2V0RGF0YSDkvKDpgJLnu5npooTliLbkuIrmjILovb3nmoTohJrmnKznmoTorr7nva7mlbDmja7lh73mlbDnmoTlj4LmlbAgXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogR1Bvb2wuZ2V0KFwiTGFiZWxJdGVuXCIsIHsgaXNHZXRJbmZvOiB0cnVlIH0pLnRoZW4oKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vZGUgaW5mb1wiLCBub2RlKTtcclxuICAgICAgIH0pO1xyXG5cclxuICAgICAgIEdQb29sLmdldChcIkNvbG9ySXRlbVwiLCB7IHNldERhdGE6IHsgdGlwczogXCLliqDovb3miJDlip9cIiB9IH0pLnRoZW4oKG5vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICB9KTtcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0KHByZWZhYk5hbWU6IHN0cmluZywgb3B0aW9uYWw6IHsgaXNHZXRJbmZvPzogYm9vbGVhbiwgc2V0RGF0YT86IGFueSB9ID0ge30pIHtcclxuICAgICAgICBsZXQgeyBpc0dldEluZm8sIHNldERhdGEgfSA9IG9wdGlvbmFsO1xyXG4gICAgICAgIGxldCBub2RlUG9vbCA9IHRoaXMuX2FsbFBvb2wuZ2V0KHByZWZhYk5hbWUpO1xyXG4gICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLl9hbGxQcmVmYWIuZ2V0KHByZWZhYk5hbWUpO1xyXG4gICAgICAgIGlmIChub2RlUG9vbCAmJiBwcmVmYWIpIHsvL+W3sue7j+aPkOWJjeeUn+aIkOS6huiKgueCueaxoFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCLlt7Lnu4/mj5DliY3nlJ/miJDkuoboioLngrnmsaBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXQocHJlZmFiTmFtZSwgaXNHZXRJbmZvLCBzZXREYXRhKTtcclxuICAgICAgICB9IGVsc2Ugey8v6L+Y5rKh5pyJ5a+55bqU55qE6IqC54K55rGgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihcIui/mOayoeacieWvueW6lOeahOiKgueCueaxoFwiKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdFBvb2wocHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5Ob2RlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX2dldChwcmVmYWJOYW1lLCBpc0dldEluZm8sIHNldERhdGEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluiKgueCuSAgXHJcbiAgICAgKiBAcGFyYW0gcHJlZmFiTmFtZSDpooTliLbnmoTlkI3lrZcgIFxyXG4gICAgICogQHBhcmFtIGlzR2V0SW5mbyDmmK/lkKblj6rojrflj5bpooTliLbnmoTkv6Hmga/kuI3ojrflj5blr7nlupTnmoToioLngrkgIFxyXG4gICAgICogQHBhcmFtIHByZWZhYk5hbWUg5Lyg6YCS57uZ6aKE5Yi25LiK5oyC6L2955qE6ISa5pys55qE6K6+572u5pWw5o2u5Ye95pWw55qE5Y+C5pWwICBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBfZ2V0KHByZWZhYk5hbWU6IHN0cmluZywgaXNHZXRJbmZvOiBib29sZWFuLCBzZXREYXRhOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuTm9kZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZVBvb2wgPSB0aGlzLl9hbGxQb29sLmdldChwcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IHRoaXMuX2FsbFByZWZhYi5nZXQocHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChpc0dldEluZm8pIHsvL+WPquiOt+WPlumihOWItuS/oeaBr1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcmVmYWIuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7Ly/ojrflj5bpooTliLboioLngrlcclxuICAgICAgICAgICAgICAgIGxldCBnZXROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Tm9kZSA9IG5vZGVQb29sLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4ocHJlZmFiTmFtZSArIFwi6YeN5paw5Yib5bu6IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXROb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5piv5ZCm5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBnZXROb2RlLmdldENvbXBvbmVudChwcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0ICYmIHNjcmlwdFt0aGlzLl9Jbml0RnVuY3Rpb25OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NyaXB0Ll9fcHJlbG9hZCAmJiBzY3JpcHQuX2lzT25Mb2FkQ2FsbGVkID09IDApIHNjcmlwdC5fX3ByZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0W3RoaXMuX0luaXRGdW5jdGlvbk5hbWVdKHNldERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybihg5rKh5pyJJHt0aGlzLl9Jbml0RnVuY3Rpb25OYW1lfeWHveaVsGAsIHByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZ2V0Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsIbkuIDkuKroioLngrnlm57mlLbliLDlr7nlupTnmoToioLngrnmsaBcclxuICAgICAqIEBwYXJhbSBub2RlIOimgeWbnuaUtueahOiKgueCuSAgXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogR1Bvb2wucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgKi9cclxuICAgIHB1dChub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgLy/miafooYzpgJrnlKjljJbnmoTov5jljp/mk43kvZxcclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5yZWR1Y3Rpb25GdW4obm9kZSk7XHJcbiAgICAgICAgbGV0IG5vZGVQb29sID0gdGhpcy5fYWxsUG9vbC5nZXQobm9kZS5uYW1lKTtcclxuICAgICAgICBub2RlUG9vbC5wdXQobm9kZSk7XHJcbiAgICAgICAgRkxvZy5ub3JtYWwobm9kZS5uYW1lICsgXCLoioLngrnmsaDmlbDph486XCIsIG5vZGVQb29sLnNpemUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZSA5q+B5LiA5Liq6IqC54K55rGg5bm26ZSA5q+B5YW25Lit5omA5pyJ55qE6IqC54K5ICBcclxuICAgICAqIEBwYXJhbSBwcmVmYWJOYW1lIOmihOWItueahOWQjeWtlyAgIFxyXG4gICAgICogQGV4YW1wbGUgIFxyXG4gICAgICogR1Bvb2wuZGVzdHJveVBvb2woXCJMYWJlbEl0ZW5cIik7XHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3lQb29sKHByZWZhYk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBub2RlUG9vbCA9IHRoaXMuX2FsbFBvb2wuZ2V0KHByZWZhYk5hbWUpO1xyXG4gICAgICAgIG5vZGVQb29sLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZSA5q+B5omA5pyJ6IqC54K55rGg5Y+K5omA5pyJ57yT5a2Y55qE6IqC54K5ICBcclxuICAgICAqIEBleGFtcGxlICBcclxuICAgICAqIEdQb29sLmRlc3Ryb3lBbGxQb29sKCk7XHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3lBbGxQb29sKCkge1xyXG4gICAgICAgIHRoaXMuX2FsbFBvb2wuZm9yRWFjaChub2RlUG9vbCA9PiBub2RlUG9vbC5jbGVhcigpKTtcclxuICAgICAgICB0aGlzLl9hbGxQb29sLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fYWxsUHJlZmFiLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVkdWN0aW9uRnVuKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZS5uYW1lID09ICdieCcpIHtcclxuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICBub2RlLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnTmV3IExhYmVsJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSgpO1xyXG53aW5kb3dbXCJHUG9vbFwiXSA9IEdQb29sO1xyXG4iXX0=