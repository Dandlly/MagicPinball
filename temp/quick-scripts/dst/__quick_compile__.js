
(function () {
var scripts = [{"deps":{"./assets/script/UINode/UIManager":15,"./assets/script/FHideNode":12,"./assets/script/common/Actions":7,"./assets/script/common/AudioConstands":21,"./assets/script/common/AudioComponent":1,"./assets/script/common/Cache":23,"./assets/script/common/GPool":5,"./assets/script/common/EventConstants":19,"./assets/script/common/Events":17,"./assets/script/common/User":14,"./assets/script/common/PopupConstants":18,"./assets/script/common/Utils":13,"./assets/script/common/PopupComponent":6,"./assets/script/common/IPXWidgetComponent":20,"./assets/script/common/paomaGame":25,"./assets/script/common/TipsCompoent":22,"./assets/script/common/AnimationControl":11,"./assets/script/game/Barrier":2,"./assets/script/game/Cion":28,"./assets/script/game/FCionEvent":9,"./assets/script/game/GameController":34,"./assets/script/game/Shake":27,"./assets/script/game/StarEnd":26,"./assets/script/game/TakeAim":33,"./assets/script/game/gameStart":24,"./assets/script/game/UpdateGA":32,"./assets/script/game/Ball":31,"./assets/script/loading/Loading":3,"./assets/script/popup/GameOver":29,"./assets/script/popup/Read":30,"./assets/script/popup/TurnTable":4,"./assets/script/popup/GetPacket":10,"./assets/script/main/Main":16,"./assets/FSDK_ASS/FSript/FContrl/FLanguageCtrl":37,"./assets/FSDK_ASS/FSript/FNetWork/FLogic":50,"./assets/FSDK_ASS/FSript/FNetWork/FNetWorkConfig":53,"./assets/FSDK_ASS/FSript/FNetWork/FSocketSend":43,"./assets/FSDK_ASS/FSript/FNetWork/FNetWork":42,"./assets/FSDK_ASS/FSript/FNetWork/FProtocolCode":72,"./assets/FSDK_ASS/FSript/FNetWork/FNetWorkCtrl":45,"./assets/FSDK_ASS/FSript/FModel/FGlobal":62,"./assets/FSDK_ASS/FSript/FModel/FLog":39,"./assets/FSDK_ASS/FSript/FModel/FLanguageConfig":58,"./assets/FSDK_ASS/FSript/FModel/FConfig":40,"./assets/FSDK_ASS/FSript/FModel/FPanelManager":51,"./assets/FSDK_ASS/FSript/FModel/FSDK":38,"./assets/FSDK_ASS/FSript/FModel/FNative":46,"./assets/FSDK_ASS/FSript/FModel/FToLoad":44,"./assets/FSDK_ASS/FSript/FModel/FSDKModel":68,"./assets/FSDK_ASS/FSript/FModel/FEventID":54,"./assets/FSDK_ASS/FSript/FView/FCardPage":41,"./assets/FSDK_ASS/FSript/FView/FGrade":49,"./assets/FSDK_ASS/FSript/FView/FInvityTaskItem":47,"./assets/FSDK_ASS/FSript/FView/FMarquee":48,"./assets/FSDK_ASS/FSript/FView/FInvityPage":69,"./assets/FSDK_ASS/FSript/FView/FTaskItem":70,"./assets/FSDK_ASS/FSript/FView/FTaskPage":61,"./assets/FSDK_ASS/FSript/FView/FLeft":56,"./assets/FSDK_ASS/FSript/FView/FTransList":71,"./assets/FSDK_ASS/FSript/FView/FTwoCard":59,"./assets/FSDK_ASS/FSript/FView/FTransInfo":64,"./assets/FSDK_ASS/FSript/FView/FSignPage":65,"./assets/FSDK_ASS/FSript/FView/FUpdate":52,"./assets/FSDK_ASS/FSript/FView/FTransPage":55,"./assets/FSDK_ASS/FSript/FView/FTwoCardItem":67,"./assets/FSDK_ASS/FSript/FView/FTransItem":63,"./assets/FSDK_ASS/FSript/FView/FCreditRecord":60,"./assets/FSDK_ASS/FSript/Fzlib/ByteArray":66,"./assets/FSDK_ASS/FSript/Fzlib/Base64":57,"./assets/FSDK_ASS/FSript/FContrl/FLoadingCtrl":36,"./assets/FSDK_ASS/migration/use_reversed_rotateBy":35,"./assets/SDK/script/SimpleCallback":84,"./assets/SDK/script/SimpleSDK":73,"./assets/SDK/script/SimpleAndroid":80,"./assets/SDK/script/SimpleEditor":87,"./assets/SDK/script/SimpleSDKEvent":85,"./assets/SDK/script/SimpleInterface":88,"./assets/SDK/script/SimpleIOS":86,"./assets/SDK/script/SimpleUtils":89,"./assets/SDK/script/AnyThinkAds/ATJSSDK":76,"./assets/SDK/script/AnyThinkAds/ATInterstitialJSSDK":75,"./assets/SDK/script/AnyThinkAds/ATRewardedVideoJSSDK":77,"./assets/SDK/script/AnyThinkAds/ATNativeJSSDK":78,"./assets/SDK/script/AnyThinkAds/ATBannerJSSDK":74,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidNativeJS":91,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidJS":96,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidBannerJS":92,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidRewardedVideoJS":90,"./assets/SDK/script/AnyThinkAds/Android/ATAndroidInterstitialJS":81,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSRewardedVideoJS":97,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSJS":93,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSInterstitialJS":95,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSNativeJS":94,"./assets/SDK/script/AnyThinkAds/iOS/ATiOSBannerJS":82,"./assets/SDK/script/SimpleAd":79,"./assets/SDK/script/SimpleAnalytics":83,"./assets/script/FSidebar":8},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./Events":17,"./EventConstants":19,"./User":14},"path":"preview-scripts/assets/script/common/AudioComponent.js"},{"deps":{"../common/User":14,"./Ball":31,"../common/Utils":13,"../common/EventConstants":19},"path":"preview-scripts/assets/script/game/Barrier.js"},{"deps":{"../FSidebar":8,"../FHideNode":12,"../common/User":14,"../common/Actions":7,"../common/Events":17,"../common/EventConstants":19,"../game/GameController":34,"../common/AudioConstands":21},"path":"preview-scripts/assets/script/loading/Loading.js"},{"deps":{"../common/Utils":13,"../common/User":14,"../common/EventConstants":19,"../common/Events":17,"../common/AudioConstands":21,"../common/PopupConstants":18},"path":"preview-scripts/assets/script/popup/TurnTable.js"},{"deps":{},"path":"preview-scripts/assets/script/common/GPool.js"},{"deps":{"./EventConstants":19,"./Events":17,"./Actions":7},"path":"preview-scripts/assets/script/common/PopupComponent.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Actions.js"},{"deps":{"./common/Events":17,"./common/EventConstants":19,"./common/User":14},"path":"preview-scripts/assets/script/FSidebar.js"},{"deps":{"../common/Events":17,"../common/User":14,"../common/PopupConstants":18,"../common/EventConstants":19},"path":"preview-scripts/assets/script/game/FCionEvent.js"},{"deps":{"../common/User":14,"../common/Events":17,"../common/AudioConstands":21,"../common/EventConstants":19},"path":"preview-scripts/assets/script/popup/GetPacket.js"},{"deps":{},"path":"preview-scripts/assets/script/common/AnimationControl.js"},{"deps":{"./common/User":14},"path":"preview-scripts/assets/script/FHideNode.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Utils.js"},{"deps":{},"path":"preview-scripts/assets/script/common/User.js"},{"deps":{"../common/EventConstants":19,"../common/User":14,"../common/AudioConstands":21,"../common/Events":17,"../common/PopupConstants":18},"path":"preview-scripts/assets/script/UINode/UIManager.js"},{"deps":{"../common/EventConstants":19,"../common/User":14,"../common/Actions":7,"../common/Events":17,"../common/PopupConstants":18,"../common/AudioConstands":21},"path":"preview-scripts/assets/script/main/Main.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Events.js"},{"deps":{},"path":"preview-scripts/assets/script/common/PopupConstants.js"},{"deps":{},"path":"preview-scripts/assets/script/common/EventConstants.js"},{"deps":{},"path":"preview-scripts/assets/script/common/IPXWidgetComponent.js"},{"deps":{},"path":"preview-scripts/assets/script/common/AudioConstands.js"},{"deps":{"./Events":17,"./EventConstants":19},"path":"preview-scripts/assets/script/common/TipsCompoent.js"},{"deps":{},"path":"preview-scripts/assets/script/common/Cache.js"},{"deps":{"../common/Events":17,"../common/AudioConstands":21,"../common/User":14,"../common/EventConstants":19,"../common/PopupConstants":18},"path":"preview-scripts/assets/script/game/gameStart.js"},{"deps":{"./Utils":13},"path":"preview-scripts/assets/script/common/paomaGame.js"},{"deps":{},"path":"preview-scripts/assets/script/game/StarEnd.js"},{"deps":{},"path":"preview-scripts/assets/script/game/Shake.js"},{"deps":{},"path":"preview-scripts/assets/script/game/Cion.js"},{"deps":{"../common/EventConstants":19,"../common/User":14,"../common/Actions":7,"../common/AudioConstands":21,"../common/Events":17},"path":"preview-scripts/assets/script/popup/GameOver.js"},{"deps":{"../common/EventConstants":19,"../common/Events":17,"../common/AudioConstands":21},"path":"preview-scripts/assets/script/popup/Read.js"},{"deps":{"../common/EventConstants":19},"path":"preview-scripts/assets/script/game/Ball.js"},{"deps":{},"path":"preview-scripts/assets/script/game/UpdateGA.js"},{"deps":{"../common/EventConstants":19},"path":"preview-scripts/assets/script/game/TakeAim.js"},{"deps":{"./Barrier":2,"../common/PopupConstants":18,"../common/EventConstants":19,"../common/User":14,"../common/Events":17,"../common/AudioConstands":21,"./Cion":28,"./Ball":31,"../common/Utils":13,"../common/Actions":7},"path":"preview-scripts/assets/script/game/GameController.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/migration/use_reversed_rotateBy.js"},{"deps":{"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FContrl/FLoadingCtrl.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FContrl/FLanguageCtrl.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FSDK.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FLog.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FConfig.js"},{"deps":{"../FModel/FGlobal":62,"../FModel/FPanelManager":51,"../FNetWork/FSocketSend":43},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FCardPage.js"},{"deps":{"./FSocketSend":43,"./FLogic":50,"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWork.js"},{"deps":{"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FSocketSend.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FToLoad.js"},{"deps":{"./FLogic":50,"./FNetWork":42,"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWorkCtrl.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FNative.js"},{"deps":{"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FInvityTaskItem.js"},{"deps":{"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FMarquee.js"},{"deps":{"../FModel/FGlobal":62,"../FModel/FPanelManager":51},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FGrade.js"},{"deps":{"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FLogic.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FPanelManager.js"},{"deps":{"../FModel/FPanelManager":51},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FUpdate.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FNetWorkConfig.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FEventID.js"},{"deps":{"../FModel/FGlobal":62,"../FModel/FPanelManager":51},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransPage.js"},{"deps":{"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FLeft.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/Fzlib/Base64.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FLanguageConfig.js"},{"deps":{"./FTwoCardItem":67,"../FModel/FGlobal":62,"../FNetWork/FSocketSend":43},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTwoCard.js"},{"deps":{"../FModel/FGlobal":62,"../FModel/FPanelManager":51,"../FNetWork/FSocketSend":43},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FCreditRecord.js"},{"deps":{"./FCreditRecord":60,"./FTaskItem":70,"../FModel/FGlobal":62,"../FModel/FPanelManager":51},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTaskPage.js"},{"deps":{"./FPanelManager":51},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FGlobal.js"},{"deps":{"../FModel/FGlobal":62,"../FModel/FPanelManager":51},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransItem.js"},{"deps":{"../FModel/FGlobal":62,"../FModel/FPanelManager":51},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransInfo.js"},{"deps":{"./FCreditRecord":60,"../FModel/FPanelManager":51,"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FSignPage.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/Fzlib/ByteArray.js"},{"deps":{"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTwoCardItem.js"},{"deps":{"./FGlobal":62,"./FPanelManager":51,"./FToLoad":44,"../FNetWork/FNetWorkCtrl":45,"../FNetWork/FLogic":50,"../FNetWork/FSocketSend":43,"../FView/FTwoCard":59,"../FView/FTransList":71,"../FView/FTaskPage":61,"../FView/FTransPage":55,"../FView/FLeft":56,"../FView/FGrade":49},"path":"preview-scripts/assets/FSDK_ASS/FSript/FModel/FSDKModel.js"},{"deps":{"./FInvityTaskItem":47,"../FModel/FGlobal":62,"../FNetWork/FSocketSend":43},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FInvityPage.js"},{"deps":{"./FTaskPage":61,"../FModel/FGlobal":62},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTaskItem.js"},{"deps":{"./FTransItem":63,"./FTransInfo":64,"../FModel/FGlobal":62,"../FNetWork/FSocketSend":43},"path":"preview-scripts/assets/FSDK_ASS/FSript/FView/FTransList.js"},{"deps":{},"path":"preview-scripts/assets/FSDK_ASS/FSript/FNetWork/FProtocolCode.js"},{"deps":{"./SimpleAndroid":80,"./SimpleIOS":86,"./SimpleCallback":84,"./SimpleAnalytics":83,"./SimpleEditor":87,"./SimpleUtils":89,"./SimpleSDKEvent":85,"./SimpleAd":79},"path":"preview-scripts/assets/SDK/script/SimpleSDK.js"},{"deps":{"./Android/ATAndroidBannerJS":92,"./iOS/ATiOSBannerJS":82},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATBannerJSSDK.js"},{"deps":{"./iOS/ATiOSInterstitialJS":95,"./Android/ATAndroidInterstitialJS":81},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATInterstitialJSSDK.js"},{"deps":{"./iOS/ATiOSJS":93,"./Android/ATAndroidJS":96},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATJSSDK.js"},{"deps":{"./Android/ATAndroidRewardedVideoJS":90,"./iOS/ATiOSRewardedVideoJS":97},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATRewardedVideoJSSDK.js"},{"deps":{"./iOS/ATiOSNativeJS":94,"./Android/ATAndroidNativeJS":91},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/ATNativeJSSDK.js"},{"deps":{"./SimpleUtils":89,"./SimpleSDK":73,"./SimpleSDKEvent":85},"path":"preview-scripts/assets/SDK/script/SimpleAd.js"},{"deps":{"./SimpleInterface":88},"path":"preview-scripts/assets/SDK/script/SimpleAndroid.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidInterstitialJS.js"},{"deps":{"ATiOSJS":93},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSBannerJS.js"},{"deps":{"./SimpleUtils":89,"./SimpleSDKEvent":85},"path":"preview-scripts/assets/SDK/script/SimpleAnalytics.js"},{"deps":{"./SimpleSDK":73},"path":"preview-scripts/assets/SDK/script/SimpleCallback.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/SimpleSDKEvent.js"},{"deps":{"./SimpleInterface":88},"path":"preview-scripts/assets/SDK/script/SimpleIOS.js"},{"deps":{"./SimpleCallback":84,"./SimpleInterface":88},"path":"preview-scripts/assets/SDK/script/SimpleEditor.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/SimpleInterface.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/SimpleUtils.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidRewardedVideoJS.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidNativeJS.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidBannerJS.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSJS.js"},{"deps":{"ATiOSJS":93},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSNativeJS.js"},{"deps":{"ATiOSJS":93},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSInterstitialJS.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/Android/ATAndroidJS.js"},{"deps":{"ATiOSJS":93},"path":"preview-scripts/assets/SDK/script/AnyThinkAds/iOS/ATiOSRewardedVideoJS.js"},{"deps":{},"path":"preview-scripts/assets/SDK/script/SimpleGlobal.js"}];
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
    