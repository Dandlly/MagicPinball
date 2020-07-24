class FLog {
    //普通打印
    static normal(message?: any, ...optionalParams: any[]): void {
        if (FConfig.IS_LOG)
            console.log('Cocos打印：', message, ...optionalParams)
    }
}
window['FLog'] = FLog;