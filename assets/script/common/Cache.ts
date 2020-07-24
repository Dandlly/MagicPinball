/**
 * 缓存类
 * @author sheep
 */

class Cache {

  private _cache: object;

  constructor() {
    this._cache = {};
  }

  public initCache(key: CacheKey): void {
    if (key && !this._cache[key]) {
      this._cache[key] = {};
    }
  }

  public set(key: CacheKey, data: any): void {
    if (!key || !data) return;
    // this._cache[key] = data;
    this._cache[key] = data.forEach ? this.mapToObj(data) : data;
  }

  public get(key: CacheKey): any {
    return key ? JSON.parse(JSON.stringify(this._cache[key])) : undefined;
  }

  /**
   * 将Map对象转换为Object对象
   * @param {Map<number, any>} map
   * @returns {Object} 
   */
  private mapToObj(map: Map<number, any>): Object {
    let obj = Object.create(null);
    map.forEach((data, key) => {
      obj[key] = data;
    })
    return obj;
  }

  /**
   * 获取单条json数据
   * @param key CacheKey
   * @param getNum 
   * @param field 
   */
  public getItem(key: CacheKey, getNum: number): any {
    let table;
    if (!this._cache[key]) return table;
    table = this._cache[key][getNum];
    return table;
  }

  /**
   * 根据某个字段的数值获取某张配置表的某条数据
   * @param key 配置表
   * @param field 字段名
   * @param fieldNum 该字段满足=fieldNum
   */
  public getItemByType(key: CacheKey, field: string, fieldNum: number): any {
    let reList = []
    if (!this._cache[key]) return reList;
    let table = this._cache[key];

    for (let count in table) {
      if (table[count][field] == fieldNum) {
        let ci = parseInt(count)
        reList.push(ci);
      }
    }
    return reList;
  }
}


export const cache = new Cache();

// 缓存键名 (Table名)
export enum CacheKey {
  language = 'language',

}

// 缓存文件配置
export const CacheFileNames: CacheKey[] = [
  CacheKey.language
];

export const CACHE_CONFIG_PATH = 'config/';