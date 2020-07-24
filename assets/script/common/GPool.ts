/**全局节点池模块  
 * 注意：预制名字和其上面挂载脚本名字一样  
 */
let GPool = new class {

    /**保存所有要生成节点池的预制的根目录，相对"resources/"目录  "Pool"*/
    private _PoolPath = "prefabs";
    /**所有预制初始生成节点池的数量 0 */
    private _InitCommon = 0;
    /**分别设置每个节点池初始数量 {} */
    private _InitEach = {};
    /**获取预制节点后设置预制数据的函数名 "setData" */
    private _InitFunctionName = "setData";

    /**保存所有节点池的map */
    private _allPool: Map<string, cc.NodePool> = new Map();
    /**保存所有预制名及其预制的map */
    private _allPrefab: Map<string, cc.Prefab> = new Map();

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
    init(optional: { PoolPath?: string, InitCommon?: number, InitEach?: object, InitFunctionName?: string } = {}) {
        //设置了默认参数的替换默认的默认参数
        for (let key of Object.keys(optional)) {
            if (typeof this["_" + key] != "undefined") {
                this["_" + key] = optional[key];
            }
        }
        //初始化所有节点池
        cc.loader.loadResDir(this._PoolPath, cc.Prefab, (err, prefabs, urls: string[]) => {
            // console.warn("初始化所有节点池", err, prefabs, urls);
            for (let one of urls) {
                let url = one.split("/");
                this._initPool(url[url.length - 1]);
            }
        });
    }

    /**初始化节点池  
     * @param prefabName 预制节点的名字  
     */
    private async _initPool(prefabName: string) {
        await new Promise((resolve, reject) => {
            cc.loader.loadRes(`${this._PoolPath}/${prefabName}`, cc.Prefab, (err, prefab: cc.Prefab) => {
                if (err) {
                    console.error(err.message || err);
                    reject(err);
                    return;
                }
                let nodePool = new cc.NodePool();
                let initNum = this._InitEach[prefabName] || this._InitCommon;
                for (let i = 0; i < initNum; i++) {
                    nodePool.put(cc.instantiate(prefab));
                }
                this._allPool.set(prefabName, nodePool);
                this._allPrefab.set(prefabName, prefab);
                // console.warn("初始化节点池", prefabName);
                resolve();
            });
        });
    }

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
    async get(prefabName: string, optional: { isGetInfo?: boolean, setData?: any } = {}) {
        let { isGetInfo, setData } = optional;
        let nodePool = this._allPool.get(prefabName);
        let prefab = this._allPrefab.get(prefabName);
        if (nodePool && prefab) {//已经提前生成了节点池
            // console.warn("已经提前生成了节点池");
            return this._get(prefabName, isGetInfo, setData);
        } else {//还没有对应的节点池
            // console.warn("还没有对应的节点池");
            await this._initPool(prefabName);
            return new Promise<cc.Node>((resolve, reject) => {
                resolve(this._get(prefabName, isGetInfo, setData));
            });
        }
    }

    /**获取节点  
     * @param prefabName 预制的名字  
     * @param isGetInfo 是否只获取预制的信息不获取对应的节点  
     * @param prefabName 传递给预制上挂载的脚本的设置数据函数的参数  
     */
    private async _get(prefabName: string, isGetInfo: boolean, setData: any) {
        return new Promise<cc.Node>((resolve, reject) => {
            let nodePool = this._allPool.get(prefabName);
            let prefab = this._allPrefab.get(prefabName);
            if (isGetInfo) {//只获取预制信息
                resolve(prefab.data);
            } else {//获取预制节点
                let getNode = null;
                if (nodePool.size() > 0) {
                    getNode = nodePool.get();
                } else {
                    // console.warn(prefabName + "重新创建!");
                    getNode = cc.instantiate(prefab);
                }
                //是否初始化数据
                if (setData) {
                    let script = getNode.getComponent(prefabName);
                    if (script && script[this._InitFunctionName]) {
                        if (script.__preload && script._isOnLoadCalled == 0) script.__preload();
                        script[this._InitFunctionName](setData);
                    } else {
                        // console.warn(`没有${this._InitFunctionName}函数`, prefabName);
                    }
                }
                resolve(getNode);
            }
        });
    }

    /**将一个节点回收到对应的节点池
     * @param node 要回收的节点  
     * @example
     * GPool.put(this.node);
     */
    put(node: cc.Node) {
        //执行通用化的还原操作
        node.stopAllActions();
        this.reductionFun(node);
        let nodePool = this._allPool.get(node.name);
        nodePool.put(node);
        FLog.normal(node.name + "节点池数量:", nodePool.size());
    }

    /**销毁一个节点池并销毁其中所有的节点  
     * @param prefabName 预制的名字   
     * @example  
     * GPool.destroyPool("LabelIten");
     */
    destroyPool(prefabName: string) {
        let nodePool = this._allPool.get(prefabName);
        nodePool.clear();
    }

    /**销毁所有节点池及所有缓存的节点  
     * @example  
     * GPool.destroyAllPool();
     */
    destroyAllPool() {
        this._allPool.forEach(nodePool => nodePool.clear());
        this._allPool.clear();
        this._allPrefab.clear();
    }

    reductionFun(node: cc.Node) {
        if (node.name == 'bx') {
            node.opacity = 255;
            node.scale = 1;
            node.getChildByName('New Label').active = true;
            node.getComponent(cc.PhysicsPolygonCollider).enabled = true;
        }
    }

}();
window["GPool"] = GPool;
