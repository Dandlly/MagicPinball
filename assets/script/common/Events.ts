/**
 * 事件控制器
 * @author yxx0
 */

interface EventInfo {
    compName: string;       // 组件名字
    compUUID: string;       // 组件uuid
    eventName: string;      // 事件名字
    callback: Function;     // 回调函数
    that: any;              // 回调函数对象
    isOnce: boolean;       // 是否执行一次就关闭监听
}

class Events {

    // 事件对象
    private events: EventInfo[] = [];

    /**
     * 事件监听
     * @public
     * @param {string} compName 
     * @param {string} compUUID 
     * @param {string} eventName 
     * @param {Function} callback 
     * @param {any} that 
     * @returns
     */
    public on(compName: string, compUUID: string, eventName: string, callback: Function, that: any, isOnce = false): void {
        if (this.hasListener(compName, eventName)) this.removeListener(compName, eventName);
        this.events.push({ compName, compUUID, eventName, callback, that, isOnce });
    }

    /**
     * 事件发送
     * @public
     * @param {string} eventName
     * @param {any[]} restOfData
     * @returns
     */
    public emit(eventName: string, ...restOfData: any[]): void {
        for (const listener of this.events) {
            if (listener.eventName === eventName) {
                listener.callback.apply(listener.that, restOfData);
                if (listener.isOnce === true) { // 执行一次就删除
                    this.removeListener(listener.compName, listener.eventName);
                }
            }
        }
    }

    /**
     * 校验是否有监听事件
     * @private
     * @param {string} compName 
     * @param {string} eventName 
     * @returns
     */
    public hasListener(compName: string, eventName: string): boolean {
        for (const listener of this.events) {
            if (listener.compName === compName && listener.eventName === eventName) return true;
        }
        return false;
    }

    /**
     * 移除事件监听器
     * @private
     * @param {string} compName 
     * @param {string} eventName 
     * @returns
     */
    public removeListener(compName: string, eventName: string): void {
        for (let i = 0; i < this.events.length; i++) {
            let listener = this.events[i];
            if (listener.compName === compName && listener.eventName === eventName) {
                listener.compName = null;
                listener.compUUID = null;
                listener.eventName = null;
                listener.callback = null;
                listener.that = null;
                this.events.splice(i, 1);
                break;
            }
        }
    }
}
export const events = new Events();
