
(function () {
var scripts = [{"deps":{"./assets/script/FHideNode":11,"./assets/script/common/AnimationControl":71,"./assets/script/common/Cache":65,"./assets/script/common/AudioConstands":62,"./assets/script/common/AudioComponent":52,"./assets/script/common/EventConstants":64,"./assets/script/common/Events":70,"./assets/script/common/GPool":49,"./assets/script/common/IPXWidgetComponent":63,"./assets/script/common/PopupComponent":53,"./assets/script/common/PopupConstants":67,"./assets/script/common/User":4,"./assets/script/common/TipsCompoent":66,"./assets/script/common/Utils":10,"./assets/script/common/paomaGame":68,"./assets/script/common/Actions":42,"./assets/script/UINode/UIManager":60,"./assets/script/game/Barrier":54,"./assets/script/game/Cion":5,"./assets/script/game/FCionEvent":55,"./assets/script/game/GameController":69,"./assets/script/game/Shake":17,"./assets/script/game/StarEnd":27,"./assets/script/game/gameStart":21,"./assets/script/game/TakeAim":18,"./assets/script/game/UpdateGA":19,"./assets/script/game/Ball":24,"./assets/script/main/Main":12,"./assets/script/popup/Read":22,"./assets/script/popup/TurnTable":2,"./assets/script/popup/GetPacket":6,"./assets/script/popup/GameOver":23,"./assets/script/loading/Loading":1,"./assets/FSDK_ASS/FSript/FContrl/FLanguageCtrl":94,"./assets/FSDK_ASS/FSript/FModel/FEventID":78,"./assets/FSDK_ASS/FSript/FModel/FLog":72,"./assets/FSDK_ASS/FSript/FModel/FLanguageConfig":73,"./assets/FSDK_ASS/FSript/FModel/FGlobal":7,"./assets/FSDK_ASS/FSript/FModel/FNative":56,"./assets/FSDK_ASS/FSript/FModel/FPanelManager":76,"./assets/FSDK_ASS/FSript/FModel/FSDK":77,"./assets/FSDK_ASS/FSript/FModel/FToLoad":79,"./assets/FSDK_ASS/FSript/FModel/FSDKModel":13,"./assets/FSDK_ASS/FSript/FModel/FConfig":20,"./assets/FSDK_ASS/FSript/FNetWork/FNetWork":84,"./assets/FSDK_ASS/FSript/FNetWork/FLogic":25,"./assets/FSDK_ASS/FSript/FNetWork/FNetWorkConfig":90,"./assets/FSDK_ASS/FSript/FNetWork/FSocketSend":75,"./assets/FSDK_ASS/FSript/FNetWork/FProtocolCode":80,"./assets/FSDK_ASS/FSript/FNetWork/FNetWorkCtrl":74,"./assets/FSDK_ASS/FSript/FView/FInvityPage":82,"./assets/FSDK_ASS/FSript/FView/FCardPage":96,"./assets/FSDK_ASS/FSript/FView/FGrade":85,"./assets/FSDK_ASS/FSript/FView/FInvityTaskItem":86,"./assets/FSDK_ASS/FSript/FView/FLeft":26,"./assets/FSDK_ASS/FSript/FView/FMarquee":83,"./assets/FSDK_ASS/FSript/FView/FTaskItem":93,"./assets/FSDK_ASS/FSript/FView/FSignPage":58,"./assets/FSDK_ASS/FSript/FView/FTransInfo":57,"./assets/FSDK_ASS/FSript/FView/FTaskPage":91,"./assets/FSDK_ASS/FSript/FView/FTransItem":87,"./assets/FSDK_ASS/FSript/FView/FTransList":89,"./assets/FSDK_ASS/FSript/FView/FTransPage":88,"./assets/FSDK_ASS/FSript/FView/FUpdate":92,"./assets/FSDK_ASS/FSript/FView/FTwoCard":97,"./assets/FSDK_ASS/FSript/FView/FTwoCardItem":59,"./assets/FSDK_ASS/FSript/FView/FCreditRecord":81,"./assets/FSDK_ASS/FSript/Fzlib/ByteArray":28,"./assets/FSDK_ASS/FSript/Fzlib/Base64":95,"./assets/FSDK_ASS/FSript/FContrl/FLoadingCtrl":61,"./assets/FSDK_ASS/migration/use_reversed_rotateBy":8,"./assets/SDK/script/SimpleEditor":36,"./assets/SDK/script/SimpleAndroid":39,"./assets/SDK/script/SimpleIOS":14,"./assets/SDK/script/SimpleCallback":29,"./assets/SDK/script/SimpleInterface":31,"./assets/SDK/script/SimpleSDK":3,"./assets/SDK/script/SimpleUtils":34,"./assets/SDK/script/SimpleSDKEvent":30,"./assets/SDK/script/AnyThinkAds/ATInterstitialJSSDK":32,"./assets/SDK/script/AnyThinkAds/ATJSSDK":48,"./assets/SDK/script/AnyThinkAds/ATNativeJSSDK":47,"./assets/SDK/script/AnyThinkAds/ATRewardedVideoJSSDK":37,"./assets/SDK/script/AnyThinkAds/ATBannerJSSDK":40,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidNativeJS":9,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidJS":35,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidInterstitialJS":43,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidRewardedVideoJS":45,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidBannerJS":46,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSInterstitialJS":51,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSRewardedVideoJS":38,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSJS":41,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSNativeJS":15,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSBannerJS":50,"./assets/SDK/script/SimpleAnalytics":33,"./assets/SDK/script/SimpleAd":16,"./assets/script/FSidebar":44},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../FSidebar":44,"../common/User":4,"../common/Actions":42,"../common/EventConstants":64,"../common/AudioConstands":62,"../common/Events":70,"../game/GameController":69,"../FHideNode":11},"path":"preview-scripts/assets/script/loading/Loading.js"},{"deps":{"../common/Utils":10,"../common/EventConstants":64,"../common/Events":70,"../common/PopupConstants":67,"../common/AudioConstands":62,"../common/User":4},"path":"preview-scripts/assets/script/popup/TurnTable.js"},{"deps":{"./SimpleIOS":14,"./SimpleAndroid":39,"./SimpleCallback":29,"./SimpleUtils":34,"./SimpleEditor":36,"./SimpleAnalytics":33,"./SimpleSDKEvent":30,"./SimpleAd":16},"path":"preview-scripts/assets/SDK/script/SimpleSDK.js"},{"deps":{},"path":"preview-scripts/assets/script/common/User.js"},{"deps":{},"path":"preview-scripts/assets/script/game/Cion.js"},{"deps":{"../common/Events":70,"../common/EventConstants":64,"../common/AudioConstands":62,"../common/User":4},"path":"preview-scripts/assets/script/popup/GetPacket.js"},{"deps":{"./FPanelManager":76},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FGlobal.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/migration/use_reversed_rotateBy.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidNativeJS.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Utils.js"},{"deps":{"./common/User":4},"path":"preview-scripts/assets/script/FHideNode.js"},{"deps":{"../common/User":4,"../common/Actions":42,"../common/EventConstants":64,"../common/Events":70,"../common/AudioConstands":62,"../common/PopupConstants":67},"path":"preview-scripts/assets/script/main/Main.js"},{"deps":{"../FNetWork/FNetWorkCtrl":74,"../FNetWork/FSocketSend":75,"../FNetWork/FLogic":25,"./FGlobal":7,"./FToLoad":79,"./FPanelManager":76,"../FView/FTaskPage":91,"../FView/FTwoCard":97,"../FView/FLeft":26,"../FView/FGrade":85,"../FView/FTransList":89,"../FView/FTransPage":88,"../../../SDK/script/SimpleAd":16,"../../../SDK/script/SimpleSDK":3},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FSDKModel.js"},{"deps":{"./SimpleInterface":31},"path":"preview-scripts/assets/SDK/script/SimpleIOS.js"},{"deps":{"ATiOSJS":41},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSNativeJS.js"},{"deps":{"./SimpleUtils":34,"./SimpleSDK":3,"./SimpleSDKEvent":30},"path":"preview-scripts/assets/SDK/script/SimpleAd.js"},{"deps":{},"path":"preview-scripts/assets/script/game/Shake.js"},{"deps":{"../common/EventConstants":64},"path":"preview-scripts/assets/script/game/TakeAim.js"},{"deps":{},"path":"preview-scripts/assets/script/game/UpdateGA.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FConfig.js"},{"deps":{"../common/Events":70,"../common/EventConstants":64,"../common/User":4,"../common/PopupConstants":67,"../common/AudioConstands":62},"path":"preview-scripts/assets/script/game/gameStart.js"},{"deps":{"../common/Events":70,"../common/EventConstants":64,"../common/AudioConstands":62},"path":"preview-scripts/assets/script/popup/Read.js"},{"deps":{"../common/User":4,"../common/Actions":42,"../common/Events":70,"../common/EventConstants":64,"../common/AudioConstands":62},"path":"preview-scripts/assets/script/popup/GameOver.js"},{"deps":{"../common/EventConstants":64},"path":"preview-scripts/assets/script/game/Ball.js"},{"deps":{"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FLogic.js"},{"deps":{"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FLeft.js"},{"deps":{},"path":"preview-scripts/assets/script/game/StarEnd.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/Fzlib/ByteArray.js"},{"deps":{"./SimpleSDK":3},"path":"preview-scripts/assets/SDK/script/SimpleCallback.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/SimpleSDKEvent.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/SimpleInterface.js"},{"deps":{"./Android/ATAndroidInterstitialJS":43,"./iOS/ATiOSInterstitialJS":51},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATInterstitialJSSDK.js"},{"deps":{"./SimpleUtils":34,"./SimpleSDKEvent":30},"path":"preview-scripts/assets/SDK/script/SimpleAnalytics.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/SimpleUtils.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidJS.js"},{"deps":{"./SimpleInterface":31,"./SimpleCallback":29},"path":"preview-scripts/assets/SDK/script/SimpleEditor.js"},{"deps":{"./Android/ATAndroidRewardedVideoJS":45,"./iOS/ATiOSRewardedVideoJS":38},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATRewardedVideoJSSDK.js"},{"deps":{"ATiOSJS":41},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSRewardedVideoJS.js"},{"deps":{"./SimpleInterface":31},"path":"preview-scripts/assets/SDK/script/SimpleAndroid.js"},{"deps":{"./iOS/ATiOSBannerJS":50,"./Android/ATAndroidBannerJS":46},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATBannerJSSDK.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSJS.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Actions.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidInterstitialJS.js"},{"deps":{"./common/User":4,"./common/EventConstants":64,"./common/Events":70},"path":"preview-scripts/assets/script/FSidebar.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidRewardedVideoJS.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidBannerJS.js"},{"deps":{"./Android/ATAndroidNativeJS":9,"./iOS/ATiOSNativeJS":15},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATNativeJSSDK.js"},{"deps":{"./iOS/ATiOSJS":41,"./Android/ATAndroidJS":35},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATJSSDK.js"},{"deps":{},"path":"preview-scripts/assets/script/common/GPool.js"},{"deps":{"ATiOSJS":41},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSBannerJS.js"},{"deps":{"ATiOSJS":41},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSInterstitialJS.js"},{"deps":{"./EventConstants":64,"./Events":70,"./User":4},"path":"preview-scripts/assets/script/common/AudioComponent.js"},{"deps":{"./Events":70,"./Actions":42,"./EventConstants":64},"path":"preview-scripts/assets/script/common/PopupComponent.js"},{"deps":{"../common/EventConstants":64,"../common/User":4,"./Ball":24,"../common/Utils":10},"path":"preview-scripts/assets/script/game/Barrier.js"},{"deps":{"../common/User":4,"../common/Events":70,"../common/EventConstants":64,"../common/PopupConstants":67},"path":"preview-scripts/assets/script/game/FCionEvent.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FNative.js"},{"deps":{"../FModel/FPanelManager":76,"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransInfo.js"},{"deps":{"../FModel/FGlobal":7,"../FModel/FPanelManager":76,"./FCreditRecord":81},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FSignPage.js"},{"deps":{"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTwoCardItem.js"},{"deps":{"../common/User":4,"../common/Events":70,"../common/PopupConstants":67,"../common/EventConstants":64,"../common/AudioConstands":62},"path":"preview-scripts/assets/script/UINode/UIManager.js"},{"deps":{"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FContrl/FLoadingCtrl.js"},{"deps":{},"path":"preview-scripts/assets/script/common/AudioConstands.js"},{"deps":{},"path":"preview-scripts/assets/script/common/IPXWidgetComponent.js"},{"deps":{},"path":"preview-scripts/assets/script/common/EventConstants.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Cache.js"},{"deps":{"./EventConstants":64,"./Events":70},"path":"preview-scripts/assets/script/common/TipsCompoent.js"},{"deps":{},"path":"preview-scripts/assets/script/common/PopupConstants.js"},{"deps":{"./Utils":10},"path":"preview-scripts/assets/script/common/paomaGame.js"},{"deps":{"./Barrier":54,"./Ball":24,"../common/Events":70,"../common/EventConstants":64,"../common/User":4,"../common/Utils":10,"../common/PopupConstants":67,"../common/AudioConstands":62,"../common/Actions":42,"./Cion":5},"path":"preview-scripts/assets/script/game/GameController.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Events.js"},{"deps":{},"path":"preview-scripts/assets/script/common/AnimationControl.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FLog.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FLanguageConfig.js"},{"deps":{"./FLogic":25,"./FNetWork":84,"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWorkCtrl.js"},{"deps":{"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FSocketSend.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FPanelManager.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FSDK.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FEventID.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FToLoad.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FProtocolCode.js"},{"deps":{"../FNetWork/FSocketSend":75,"../FModel/FPanelManager":76,"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FCreditRecord.js"},{"deps":{"../FModel/FGlobal":7,"../FNetWork/FSocketSend":75,"./FInvityTaskItem":86},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FInvityPage.js"},{"deps":{"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FMarquee.js"},{"deps":{"./FLogic":25,"../FModel/FGlobal":7,"./FSocketSend":75},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWork.js"},{"deps":{"../FModel/FGlobal":7,"../FModel/FPanelManager":76},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FGrade.js"},{"deps":{"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FInvityTaskItem.js"},{"deps":{"../FModel/FGlobal":7,"../FModel/FPanelManager":76},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransItem.js"},{"deps":{"../FModel/FPanelManager":76,"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransPage.js"},{"deps":{"../FModel/FGlobal":7,"./FTransItem":87,"./FTransInfo":57,"../FNetWork/FSocketSend":75},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransList.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWorkConfig.js"},{"deps":{"./FCreditRecord":81,"../FModel/FPanelManager":76,"../FModel/FGlobal":7,"./FTaskItem":93},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTaskPage.js"},{"deps":{"../FModel/FPanelManager":76},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FUpdate.js"},{"deps":{"./FTaskPage":91,"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTaskItem.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FContrl/FLanguageCtrl.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/Fzlib/Base64.js"},{"deps":{"../FNetWork/FSocketSend":75,"../FModel/FPanelManager":76,"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FCardPage.js"},{"deps":{"./FTwoCardItem":59,"../FNetWork/FSocketSend":75,"../FModel/FGlobal":7},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTwoCard.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }
                console.time && console.time('eval __quick_compile_project__');
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd('eval __quick_compile_project__');
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    