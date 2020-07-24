"use strict";
cc._RF.push(module, '5940aG5C+BL6JzjwV0KRUEw', 'Cache');
// script/common/Cache.ts

"use strict";
/**
 * 缓存类
 * @author sheep
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Cache = /** @class */ (function () {
    function Cache() {
        this._cache = {};
    }
    Cache.prototype.initCache = function (key) {
        if (key && !this._cache[key]) {
            this._cache[key] = {};
        }
    };
    Cache.prototype.set = function (key, data) {
        if (!key || !data)
            return;
        // this._cache[key] = data;
        this._cache[key] = data.forEach ? this.mapToObj(data) : data;
    };
    Cache.prototype.get = function (key) {
        return key ? JSON.parse(JSON.stringify(this._cache[key])) : undefined;
    };
    /**
     * 将Map对象转换为Object对象
     * @param {Map<number, any>} map
     * @returns {Object}
     */
    Cache.prototype.mapToObj = function (map) {
        var obj = Object.create(null);
        map.forEach(function (data, key) {
            obj[key] = data;
        });
        return obj;
    };
    /**
     * 获取单条json数据
     * @param key CacheKey
     * @param getNum
     * @param field
     */
    Cache.prototype.getItem = function (key, getNum) {
        var table;
        if (!this._cache[key])
            return table;
        table = this._cache[key][getNum];
        return table;
    };
    /**
     * 根据某个字段的数值获取某张配置表的某条数据
     * @param key 配置表
     * @param field 字段名
     * @param fieldNum 该字段满足=fieldNum
     */
    Cache.prototype.getItemByType = function (key, field, fieldNum) {
        var reList = [];
        if (!this._cache[key])
            return reList;
        var table = this._cache[key];
        for (var count in table) {
            if (table[count][field] == fieldNum) {
                var ci = parseInt(count);
                reList.push(ci);
            }
        }
        return reList;
    };
    return Cache;
}());
exports.cache = new Cache();
// 缓存键名 (Table名)
var CacheKey;
(function (CacheKey) {
    CacheKey["language"] = "language";
})(CacheKey = exports.CacheKey || (exports.CacheKey = {}));
// 缓存文件配置
exports.CacheFileNames = [
    CacheKey.language
];
exports.CACHE_CONFIG_PATH = 'config/';

cc._RF.pop();