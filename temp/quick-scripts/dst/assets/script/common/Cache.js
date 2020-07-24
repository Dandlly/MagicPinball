
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Cache.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXENhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0dBR0c7O0FBRUg7SUFJRTtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSx5QkFBUyxHQUFoQixVQUFpQixHQUFhO1FBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTSxtQkFBRyxHQUFWLFVBQVcsR0FBYSxFQUFFLElBQVM7UUFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQzFCLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRU0sbUJBQUcsR0FBVixVQUFXLEdBQWE7UUFDdEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssd0JBQVEsR0FBaEIsVUFBaUIsR0FBcUI7UUFDcEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7WUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksdUJBQU8sR0FBZCxVQUFlLEdBQWEsRUFBRSxNQUFjO1FBQzFDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDcEMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSw2QkFBYSxHQUFwQixVQUFxQixHQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQ2pFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDO1FBQ3JDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDdkIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxFQUFFO2dCQUNuQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FyRUEsQUFxRUMsSUFBQTtBQUdZLFFBQUEsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFFakMsZ0JBQWdCO0FBQ2hCLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNsQixpQ0FBcUIsQ0FBQTtBQUV2QixDQUFDLEVBSFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHbkI7QUFFRCxTQUFTO0FBQ0ksUUFBQSxjQUFjLEdBQWU7SUFDeEMsUUFBUSxDQUFDLFFBQVE7Q0FDbEIsQ0FBQztBQUVXLFFBQUEsaUJBQWlCLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOe8k+WtmOexu1xyXG4gKiBAYXV0aG9yIHNoZWVwXHJcbiAqL1xyXG5cclxuY2xhc3MgQ2FjaGUge1xyXG5cclxuICBwcml2YXRlIF9jYWNoZTogb2JqZWN0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2NhY2hlID0ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdENhY2hlKGtleTogQ2FjaGVLZXkpOiB2b2lkIHtcclxuICAgIGlmIChrZXkgJiYgIXRoaXMuX2NhY2hlW2tleV0pIHtcclxuICAgICAgdGhpcy5fY2FjaGVba2V5XSA9IHt9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldChrZXk6IENhY2hlS2V5LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICgha2V5IHx8ICFkYXRhKSByZXR1cm47XHJcbiAgICAvLyB0aGlzLl9jYWNoZVtrZXldID0gZGF0YTtcclxuICAgIHRoaXMuX2NhY2hlW2tleV0gPSBkYXRhLmZvckVhY2ggPyB0aGlzLm1hcFRvT2JqKGRhdGEpIDogZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQoa2V5OiBDYWNoZUtleSk6IGFueSB7XHJcbiAgICByZXR1cm4ga2V5ID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9jYWNoZVtrZXldKSkgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlsIZNYXDlr7nosaHovazmjaLkuLpPYmplY3Tlr7nosaFcclxuICAgKiBAcGFyYW0ge01hcDxudW1iZXIsIGFueT59IG1hcFxyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFxyXG4gICAqL1xyXG4gIHByaXZhdGUgbWFwVG9PYmoobWFwOiBNYXA8bnVtYmVyLCBhbnk+KTogT2JqZWN0IHtcclxuICAgIGxldCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgbWFwLmZvckVhY2goKGRhdGEsIGtleSkgPT4ge1xyXG4gICAgICBvYmpba2V5XSA9IGRhdGE7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluWNleadoWpzb27mlbDmja5cclxuICAgKiBAcGFyYW0ga2V5IENhY2hlS2V5XHJcbiAgICogQHBhcmFtIGdldE51bSBcclxuICAgKiBAcGFyYW0gZmllbGQgXHJcbiAgICovXHJcbiAgcHVibGljIGdldEl0ZW0oa2V5OiBDYWNoZUtleSwgZ2V0TnVtOiBudW1iZXIpOiBhbnkge1xyXG4gICAgbGV0IHRhYmxlO1xyXG4gICAgaWYgKCF0aGlzLl9jYWNoZVtrZXldKSByZXR1cm4gdGFibGU7XHJcbiAgICB0YWJsZSA9IHRoaXMuX2NhY2hlW2tleV1bZ2V0TnVtXTtcclxuICAgIHJldHVybiB0YWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOagueaNruafkOS4quWtl+auteeahOaVsOWAvOiOt+WPluafkOW8oOmFjee9ruihqOeahOafkOadoeaVsOaNrlxyXG4gICAqIEBwYXJhbSBrZXkg6YWN572u6KGoXHJcbiAgICogQHBhcmFtIGZpZWxkIOWtl+auteWQjVxyXG4gICAqIEBwYXJhbSBmaWVsZE51bSDor6XlrZfmrrXmu6HotrM9ZmllbGROdW1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0SXRlbUJ5VHlwZShrZXk6IENhY2hlS2V5LCBmaWVsZDogc3RyaW5nLCBmaWVsZE51bTogbnVtYmVyKTogYW55IHtcclxuICAgIGxldCByZUxpc3QgPSBbXVxyXG4gICAgaWYgKCF0aGlzLl9jYWNoZVtrZXldKSByZXR1cm4gcmVMaXN0O1xyXG4gICAgbGV0IHRhYmxlID0gdGhpcy5fY2FjaGVba2V5XTtcclxuXHJcbiAgICBmb3IgKGxldCBjb3VudCBpbiB0YWJsZSkge1xyXG4gICAgICBpZiAodGFibGVbY291bnRdW2ZpZWxkXSA9PSBmaWVsZE51bSkge1xyXG4gICAgICAgIGxldCBjaSA9IHBhcnNlSW50KGNvdW50KVxyXG4gICAgICAgIHJlTGlzdC5wdXNoKGNpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlTGlzdDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcclxuXHJcbi8vIOe8k+WtmOmUruWQjSAoVGFibGXlkI0pXHJcbmV4cG9ydCBlbnVtIENhY2hlS2V5IHtcclxuICBsYW5ndWFnZSA9ICdsYW5ndWFnZScsXHJcblxyXG59XHJcblxyXG4vLyDnvJPlrZjmlofku7bphY3nva5cclxuZXhwb3J0IGNvbnN0IENhY2hlRmlsZU5hbWVzOiBDYWNoZUtleVtdID0gW1xyXG4gIENhY2hlS2V5Lmxhbmd1YWdlXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQ0FDSEVfQ09ORklHX1BBVEggPSAnY29uZmlnLyc7Il19