window.__require = function t(e, o, n) {
function r(a, s) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = o[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return r(e[a][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
Actions: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e349ca6ytENZGhroHTugf2", "Actions");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.prototype.tweenToPos = function(t, e, o, n) {
void 0 === o && (o = .5);
cc.tween(t).to(o, {
position: e,
scale: .5,
opacity: 180
}).call(function() {
n && n();
}).start();
};
t.prototype.breatheEff = function(t, e, o) {
void 0 === e && (e = .9);
void 0 === o && (o = .5);
cc.tween(t).repeatForever(cc.tween().to(o, {
scale: e
}).to(o, {
scale: 1
})).start();
};
t.prototype.openPopup = function(t, e) {
t.scale = 0;
var o = 1;
cc.winSize.width / 720 < 1 && (o = cc.winSize.width / 720);
cc.tween(t).to(.2, {
scale: o
}, {
easing: "backOut"
}).call(function() {
e && e();
}).start();
};
t.prototype.closePopup = function(t, e) {
cc.tween(t).to(.2, {
scale: 0
}, {
easing: "backIn"
}).call(function() {
e && e();
}).start();
};
t.prototype.popOut = function(t, e) {
void 0 === e && (e = .3);
t.scale = 0;
cc.tween(t).to(e, {
scale: 1
}, {
easing: "backOut"
}).start();
};
t.prototype.popIn = function(t, e) {
void 0 === e && (e = .3);
cc.tween(t).to(e, {
scale: 0
}, {
easing: "backIn"
}).start();
};
t.prototype.rockAction = function(t, e, o) {
void 0 === e && (e = .02);
void 0 === o && (o = 10);
cc.tween(t).by(e, {
angle: o
}).by(e, {
angle: -2 * o
}).by(.8 * e, {
angle: 2 * o * .8
}).by(.6 * e, {
angle: -2 * o * .6
}).by(.4 * e, {
angle: 2 * o * .4
}).to(.2 * e, {
angle: 0
}).start();
};
t.prototype.getMoveInScreenActive = function(t, e, o, n, r) {
switch (e) {
case 0:
cc.tween(t).by(r, {
position: cc.v2(0, -n)
}).start();
return cc.moveBy(r, 0, -n);

case 1:
cc.tween(t).by(r, {
position: cc.v2(-n, 0)
}).start();
return cc.moveBy(r, -o, 0);

case 2:
cc.tween(t).by(r, {
position: cc.v2(0, -n)
}).start();
return;

case 3:
cc.tween(t).by(r, {
position: cc.v2(n, 0)
}).start();
return;
}
};
t.prototype.addCionMove = function(t, e, o, n, r) {
Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2));
t.zIndex = 100;
var i = cc.instantiate(e);
i.scale = 1.2;
i.setPosition(o);
i.opacity = 255;
var a = cc.callFunc(function() {
r && r();
i.setParent(null);
}), s = .8 * Math.random(), c = -200 + Math.floor(401 * Math.random()), l = 100 + Math.floor(101 * Math.random()), u = cc.sequence(cc.jumpTo(s, cc.v2(c, 0), l, 1), cc.moveTo(.5, n).easing(cc.easeBackIn()), a);
i.runAction(u);
t.addChild(i);
};
t.prototype.addScroeMove = function(t, e, o, n) {
t.zIndex = 100;
var r = cc.tween;
r(t).parallel(r().by(.2, {
position: cc.v2(0, 20)
}), r().to(.1, {
opacity: 1
})).delayTime(.2).to(.2, {
position: o
}, {
easing: "backIn"
}).call(function() {
n && n();
t.destroy();
}).start();
};
return t;
}();
o.actions = new n();
cc._RF.pop();
}, {} ],
AnimationControl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "70ed5iyRUtHEJuFzpQKt6ey", "AnimationControl");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isOnLoad = !0;
e.control_node = [];
e.delay_time = [];
e.appear_time = [];
e.disappear_time = [];
e.begin_time = [];
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.isOnLoad && this.control_node.forEach(function(e, o) {
e.node.stopAllActions();
e.play();
t.begin_time[o] && t.begin_time[o] > 0 && e.setCurrentTime(t.begin_time[o]);
if (t.delay_time[o] && t.delay_time[o] > 0) {
e.stop();
t.node.runAction(cc.sequence(cc.delayTime(t.delay_time[o]), cc.callFunc(function() {
e.play();
})));
}
if (t.appear_time[o] && t.appear_time[o] > 0) {
e.node.active = !1;
t.node.runAction(cc.sequence(cc.delayTime(t.appear_time[o]), cc.callFunc(function() {
e.node.active = !0;
})));
}
t.disappear_time[o] && t.disappear_time[o] > 0 && t.node.runAction(cc.sequence(cc.delayTime(t.disappear_time[o]), cc.callFunc(function() {
e.node.active = !1;
})));
});
};
e.prototype.startPlay = function() {
var t = this;
this.control_node.forEach(function(e, o) {
e.node.stopAllActions();
e.play();
t.begin_time[o] && t.begin_time[o] > 0 && e.setCurrentTime(t.begin_time[o]);
if (t.delay_time[o] && t.delay_time[o] > 0) {
e.stop();
t.node.runAction(cc.sequence(cc.delayTime(t.delay_time[o]), cc.callFunc(function() {
e.play();
})));
}
if (t.appear_time[o] && t.appear_time[o] > 0) {
e.node.active = !1;
t.node.runAction(cc.sequence(cc.delayTime(t.appear_time[o]), cc.callFunc(function() {
e.node.active = !0;
})));
}
t.disappear_time[o] && t.disappear_time[o] > 0 && t.node.runAction(cc.sequence(cc.delayTime(t.disappear_time[o]), cc.callFunc(function() {
e.node.active = !1;
})));
});
};
e.prototype.onDisable = function() {
this.node.stopAllActions();
};
r([ s({
displayName: "是否直接运行"
}) ], e.prototype, "isOnLoad", void 0);
r([ s({
type: cc.Animation,
displayName: "控制节点"
}) ], e.prototype, "control_node", void 0);
r([ s({
type: cc.Float,
displayName: "延迟播放时间"
}) ], e.prototype, "delay_time", void 0);
r([ s({
type: cc.Float,
displayName: "出现时间"
}) ], e.prototype, "appear_time", void 0);
r([ s({
type: cc.Float,
displayName: "消失时间"
}) ], e.prototype, "disappear_time", void 0);
r([ s({
type: cc.Float,
displayName: "动画开始时所在的时间点"
}) ], e.prototype, "begin_time", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
AudioComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "96678eXseZDOLuqWG8GCK05", "AudioComponent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./Events"), a = t("./EventConstants"), s = t("./User"), c = cc._decorator, l = c.ccclass, u = c.property, p = function() {
function t() {
this.audio = null;
this.volume = 1;
}
r([ u({
type: cc.AudioClip
}) ], t.prototype, "audio", void 0);
r([ u({
type: cc.Float,
tooltip: "音频音量"
}) ], t.prototype, "volume", void 0);
return t = r([ l("Sound") ], t);
}();
o.Sound = p;
var d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.soundMainBgm = null;
e.clickBgm = null;
e.isMute = !1;
e.isSound = !1;
e.bgmPlaying = !1;
e.effectIds = [];
e.key = null;
return e;
}
e.prototype.onLoad = function() {
this.initEvents();
};
e.prototype.onDestroy = function() {
this.clearEvents();
};
e.prototype.initEvents = function() {
i.events.on(this.name, this.uuid, a.GameEvents.PLAY_BGM, this.playBGM, this);
i.events.on(this.name, this.uuid, a.GameEvents.STOP_BGM, this.stopBGM, this);
i.events.on(this.name, this.uuid, a.GameEvents.PLAY_SOUND_EFFECT, this.playSoundEffect, this);
i.events.on(this.name, this.uuid, a.GameEvents.STOP_SOUND_EFFECT, this.stopEffect, this);
i.events.on(this.name, this.uuid, a.GameEvents.SWITCH_MUTE, this.switchMute, this);
i.events.on(this.name, this.uuid, a.GameEvents.SWITCH_SOUND, this.switchSound, this);
i.events.on(this.name, this.uuid, a.GameEvents.STOP_ALL_SOUND_EFFECT, this.stopAllEffect, this);
};
e.prototype.clearEvents = function() {
i.events.removeListener(this.name, a.GameEvents.PLAY_BGM);
i.events.removeListener(this.name, a.GameEvents.STOP_BGM);
i.events.removeListener(this.name, a.GameEvents.PLAY_SOUND_EFFECT);
i.events.removeListener(this.name, a.GameEvents.STOP_SOUND_EFFECT);
i.events.removeListener(this.name, a.GameEvents.SWITCH_MUTE);
i.events.removeListener(this.name, a.GameEvents.SWITCH_SOUND);
i.events.removeListener(this.name, a.GameEvents.STOP_ALL_SOUND_EFFECT);
};
e.prototype.init = function() {
this.isMute = s.user.IsMute;
this.isSound = s.user.IsSound;
};
e.prototype.playBGM = function(t) {
this.key && t != this.key && this.stopBGM();
this.init();
this.bgmPlaying = !0;
var e = this[t];
if (this.isMute && "number" != typeof this.bgmAudioId) {
this.bgmAudioId = cc.audioEngine.playMusic(e.audio, !0);
this.key = t;
}
};
e.prototype.stopBGM = function() {
this.bgmPlaying = !1;
if (this.isMute && "number" == typeof this.bgmAudioId) {
cc.audioEngine.stop(this.bgmAudioId);
cc.audioEngine.uncache(this.bgmAudioId);
delete this.bgmAudioId;
}
};
e.prototype.playSoundEffect = function(t, e, o, n) {
var r = this;
if (this.isSound) {
var i = this[t];
if (i) {
if ("number" == typeof e) {
if (!i[e]) return;
i = i[e];
}
if (i.audio) {
var a = cc.audioEngine.play(i.audio, o, i.volume || 1);
this.effectIds || (this.effectIds = []);
this.effectIds.push({
key: t,
effectId: a
});
o || cc.audioEngine.setFinishCallback(a, function() {
r.stopEffect(t);
n && n();
});
}
}
}
};
e.prototype.stopEffect = function(t) {
this.effectIds.findIndex(function(e) {
return t === e.key;
});
};
e.prototype.switchMute = function() {
this.isMute = !this.isMute;
if (this.isMute) {
if (null == this.bgmAudioId) {
this.playBGM("soundMainBgm");
return;
}
cc.audioEngine.resume(this.bgmAudioId);
} else cc.audioEngine.pause(this.bgmAudioId);
};
e.prototype.stopAllEffect = function() {
if (!this.isMute) {
cc.audioEngine.stopAll();
cc.audioEngine.uncacheAll();
delete this.bgmAudioId;
this.effectIds = [];
}
};
e.prototype.resumeAllEffect = function() {
this.isMute || this.bgmPlaying && this.playBGM(this.key);
};
e.prototype.switchSound = function() {
this.isSound = !this.isSound;
};
r([ u(p) ], e.prototype, "soundMainBgm", void 0);
r([ u(p) ], e.prototype, "clickBgm", void 0);
return e = r([ l ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants",
"./Events": "Events",
"./User": "User"
} ],
AudioConstands: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "67378X/5ORLpZLtlHQS0wHI", "AudioConstands");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.MAIN_BGM = "soundMainBgm";
t.BUTTON = "clickBgm";
t.AWAED = "rewardsBgm";
t.POPUP = "pop_upBgm";
t.MISSLIE = "misslie";
t.BOOM = "boom";
t.TRASH = "trash";
t.CARDMOVE = "cardMove";
t.GAMEOVER = "gameOver";
t.GIFTPOPUP = "giftPopup";
t.WARNTIPS = "warnTips";
t.MERGE_1 = "merge1";
t.MERGE_2 = "merge2";
t.MERGE_3 = "merge3";
t.MERGE_4 = "merge4";
t.MERGE_5 = "merge5";
t.MERGE_6 = "merge6";
t.MERGE_7 = "merge7";
t.MERGE_8 = "merge8";
t.MERGE_2048 = "merge2048";
t.EFFMUSIC_0 = "effmusic_0";
t.EFFMUSIC_1 = "effmusic_1";
t.EFFMUSIC_2 = "effmusic_2";
t.EFFMUSIC_3 = "effmusic_3";
})(o.AudioName || (o.AudioName = {}));
cc._RF.pop();
}, {} ],
Ball: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4938bLltytLWLB77yg4tJwH", "Ball");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/EventConstants"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isTouchedGround = !1;
e.rigidBody = null;
e.collider = null;
e.hurtNum = 1;
return e;
}
e.prototype.onLoad = function() {
this.rigidBody = this.getComponent(cc.RigidBody);
this.collider = this.getComponent(cc.PhysicsBoxCollider);
};
e.prototype.update = function(t) {
if (this.isTouchedGround) {
this.rigidBody.active = !1;
this.rigidBody.linearVelocity = cc.Vec2.ZERO;
var e = [];
e.push(this.node.position);
if (this.node.position.x > 0) {
e.push(cc.v2(350, -430));
e.push(cc.v2(350, 600));
e.push(cc.v2(200, 520));
} else {
e.push(cc.v2(-350, -430));
e.push(cc.v2(-350, 600));
e.push(cc.v2(-200, 520));
}
this.node.runAction(cc.sequence(cc.cardinalSplineTo(1, e, .9), cc.callFunc(function() {
this.rigidBody.active = !0;
i.GameConstant.game.recycleBall();
}.bind(this))));
this.isTouchedGround = !1;
}
};
e.prototype.onBeginContact = function(t, e, o) {
"ground" == o.node.name && (this.isTouchedGround = !0);
};
e.prototype.getHurt = function() {
return this.hurtNum;
};
e.prototype.setHurt = function(t) {
this.hurtNum = t;
};
r([ c() ], e.prototype, "isTouchedGround", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants"
} ],
Barrier: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3bac05iQnRCHbhvPa7lWI7S", "Barrier");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/EventConstants"), a = t("../common/User"), s = t("../common/Utils"), c = t("./Ball"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbScore = null;
e.isAddBuffBall = !1;
e.isAddRed = !1;
e.isBigBuffBall = !1;
e.score = 0;
return e;
}
e.prototype.start = function() {
if (this.lbScore) {
this.lbScore.node.color = cc.color().fromHEX("000000");
this.lbScore.node.angle -= this.node.angle;
}
this.isAddRed && (this.node.angle = 0);
this.isAddBuffBall || this.isAddRed || this.isBigBuffBall || (this.node.scale = s.utils.randomFloat([ .8, 1.2 ]));
this.setScore(i.GameConstant.game.setBarrierScore());
};
e.prototype.randomNum = function(t, e) {
var o = e - t, n = Math.random();
return t + Math.floor(n * o);
};
e.prototype.setScore = function(t) {
if (this.lbScore) {
this.score = t;
this.lbScore.string = this.score.toString();
this.setColor(this.score);
}
};
e.prototype.getScore = function() {
return this.score;
};
e.prototype.setColor = function(t) {
if (!(this.isAddBuffBall || this.isAddRed || this.isBigBuffBall)) {
var e = a.user.getLumpData().color;
if (7 == e.length) {
var o;
t <= 10 ? o = e[0] : t <= 50 ? o = e[1] : t <= 100 ? o = e[2] : t <= 300 ? o = e[3] : t <= 500 ? o = e[4] : t <= 700 ? o = e[5] : t > 700 && (o = e[6]);
for (var n = 0; n < this.node.children.length; n++) {
-1 != this.node.children[n].name.indexOf("bloacks_1") && (this.node.children[n].color = cc.color().fromHEX(o[2]));
-1 != this.node.children[n].name.indexOf("bloacks_2") && (this.node.children[n].color = cc.color().fromHEX(o[1]));
-1 != this.node.children[n].name.indexOf("bloacks_3") && (this.node.children[n].color = cc.color().fromHEX(o[0]));
}
}
}
};
e.prototype.onBeginContact = function(t, e, o) {
if (this.isAddBuffBall) {
i.GameConstant.game.addBall(this.node.position);
i.GameConstant.game.removeBarrier(this);
var n = a.user.getCurrentProp();
n -= 1;
a.user.setCurrentProp(n);
} else if (this.isAddRed) {
i.GameConstant.game.addScore();
var r = o.node.getComponent(c.default).getHurt();
if (this.score <= r) {
this.node.opacity = 120;
this.node.getComponent(cc.PhysicsPolygonCollider).enabled = !1;
this.score = 0;
this.lbScore.node.active = !1;
} else {
this.setScore(this.score - r);
i.GameConstant.game.shake(this.node);
}
} else if (this.isBigBuffBall) {
if (2 == o.node.getComponent(c.default).getHurt()) return;
i.GameConstant.game.bigBall(o.node);
i.GameConstant.game.removeBarrier(this);
n = a.user.getCurrentProp();
n -= 1;
a.user.setCurrentProp(n);
} else {
i.GameConstant.game.addScore();
r = o.node.getComponent(c.default).getHurt();
if (this.score <= r) i.GameConstant.game.removeBarrier(this); else {
this.setScore(this.score - r);
i.GameConstant.game.shake(this.node);
}
}
};
r([ p(cc.Label) ], e.prototype, "lbScore", void 0);
r([ p() ], e.prototype, "isAddBuffBall", void 0);
r([ p() ], e.prototype, "isAddRed", void 0);
r([ p() ], e.prototype, "isBigBuffBall", void 0);
return e = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants",
"../common/User": "User",
"../common/Utils": "Utils",
"./Ball": "Ball"
} ],
Base64: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "38eeeFqhAxO+JNGqWKexBI1", "Base64");
var n = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, i = r.ccclass, a = (r.property, function() {
function t() {
this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
}
t.prototype.encode = function(t) {
var e, o, n, r, i, a, s, c = "", l = 0;
t = this._utf8_encode(t);
for (;l < t.length; ) {
e = t.charCodeAt(l++);
o = t.charCodeAt(l++);
n = t.charCodeAt(l++);
r = e >> 2;
i = (3 & e) << 4 | o >> 4;
a = (15 & o) << 2 | n >> 6;
s = 63 & n;
isNaN(o) ? a = s = 64 : isNaN(n) && (s = 64);
c = c + this._keyStr.charAt(r) + this._keyStr.charAt(i) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
}
return c;
};
t.prototype.decode = function(t) {
var e, o, n, r, i, a, s, c = "", l = 0;
t = t.replace(/[^A-Za-z0-9+/=]/g, "");
for (;l < t.length; ) {
r = this._keyStr.indexOf(t.charAt(l++));
i = this._keyStr.indexOf(t.charAt(l++));
a = this._keyStr.indexOf(t.charAt(l++));
s = this._keyStr.indexOf(t.charAt(l++));
e = r << 2 | i >> 4;
o = (15 & i) << 4 | a >> 2;
n = (3 & a) << 6 | s;
c += String.fromCharCode(e);
64 != a && (c += String.fromCharCode(o));
64 != s && (c += String.fromCharCode(n));
}
return c = this._utf8_decode(c);
};
t.prototype._utf8_encode = function(t) {
t = t.replace(/rn/g, "n");
for (var e = "", o = 0; o < t.length; o++) {
var n = t.charCodeAt(o);
if (n < 128) e += String.fromCharCode(n); else if (n > 127 && n < 2048) {
e += String.fromCharCode(n >> 6 | 192);
e += String.fromCharCode(63 & n | 128);
} else {
e += String.fromCharCode(n >> 12 | 224);
e += String.fromCharCode(n >> 6 & 63 | 128);
e += String.fromCharCode(63 & n | 128);
}
}
return e;
};
t.prototype._utf8_decode = function(t) {
for (var e, o, n = "", r = 0, i = e = 0; r < t.length; ) if ((i = t.charCodeAt(r)) < 128) {
n += String.fromCharCode(i);
r++;
} else if (i > 191 && i < 224) {
e = t.charCodeAt(r + 1);
n += String.fromCharCode((31 & i) << 6 | 63 & e);
r += 2;
} else {
e = t.charCodeAt(r + 1);
o = t.charCodeAt(r + 2);
n += String.fromCharCode((15 & i) << 12 | (63 & e) << 6 | 63 & o);
r += 3;
}
return n;
};
return t = n([ i ], t);
}());
o.Base64 = a;
cc._RF.pop();
}, {} ],
ByteArray: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fd723GWUXVCjrU6p9oQCkHY", "ByteArray");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n;
(function(t) {
t.LITTLE_ENDIAN = "littleEndian";
t.BIG_ENDIAN = "bigEndian";
})(n || (n = {}));
var r = function() {
function t(t) {
this.BUFFER_EXT_SIZE = 0;
this.EOF_byte = -1;
this.EOF_code_point = -1;
this._setArrayBuffer(t || new ArrayBuffer(this.BUFFER_EXT_SIZE));
this.endian = n.BIG_ENDIAN;
}
Object.defineProperty(t.prototype, "_buffer", {
get: function() {
return this.data.buffer;
},
set: function(t) {
this.data = new DataView(t);
},
enumerable: !0,
configurable: !0
});
t.prototype._setArrayBuffer = function(t) {
this.data = new DataView(t);
this._position = 0;
};
t.prototype.readUnsignedShort = function() {
if (!this.validate(2)) return null;
var t = this.data.getUint16(this._position, this.endian == n.LITTLE_ENDIAN);
this._position += 2;
return t;
};
t.prototype.readUTF = function() {
if (!this.validate(2)) return null;
var t = this.data.getUint16(this._position, this.endian == n.LITTLE_ENDIAN);
this._position += 2;
return t > 0 ? this.readUTFBytes(t) : "";
};
t.prototype.readBytes = function(t) {
if (!this.validate(t)) return null;
var e = new Uint8Array(this._buffer, this._position, t);
this._position += t;
return e;
};
t.prototype.readUTFBytes = function(t) {
if (!this.validate(t)) return null;
var e = new Uint8Array(this._buffer, this._position, t);
this._position += t;
return this.decodeUTF8(e);
};
t.prototype.writeUnsignedShort = function(t) {
this.validateBuffer(2);
this.data.setUint16(this._position, t, this.endian == n.LITTLE_ENDIAN);
this._position += 2;
};
t.prototype.writeUTFBytes = function(t) {
this._writeUint8Array(this.encodeUTF8(t));
};
t.prototype.writeBytes = function(t) {
var e = new Uint8Array(t);
this._writeUint8Array(e);
};
t.prototype._writeUint8Array = function(t, e) {
void 0 === e && (e = !0);
e && this.validateBuffer(t.length);
for (var o = 0; o < t.length; o++) this.data.setUint8(this._position++, t[o]);
};
t.prototype.validate = function(t) {
if (this.data.byteLength > 0 && this._position + t <= this.data.byteLength) return !0;
};
t.prototype.validateBuffer = function(t, e) {
void 0 === e && (e = !1);
t += this._position;
if (this._buffer.byteLength < t || e) {
var o = new Uint8Array(new ArrayBuffer(t + this.BUFFER_EXT_SIZE)), n = Math.min(this.data.buffer.byteLength, t + this.BUFFER_EXT_SIZE);
o.set(new Uint8Array(this.data.buffer, 0, n));
this._buffer = o.buffer;
}
};
t.prototype.encodeUTF8 = function(t) {
for (var e = 0, o = this.stringToCodePoints(t), n = []; o.length > e; ) {
var r = o[e++];
if (this.inRange(r, 55296, 57343)) this.encoderError(r); else if (this.inRange(r, 0, 127)) n.push(r); else {
var i = void 0, a = void 0;
if (this.inRange(r, 128, 2047)) {
i = 1;
a = 192;
} else if (this.inRange(r, 2048, 65535)) {
i = 2;
a = 224;
} else if (this.inRange(r, 65536, 1114111)) {
i = 3;
a = 240;
}
n.push(this.div(r, Math.pow(64, i)) + a);
for (;i > 0; ) {
var s = this.div(r, Math.pow(64, i - 1));
n.push(128 + s % 64);
i -= 1;
}
}
}
return new Uint8Array(n);
};
t.prototype.decodeUTF8 = function(t) {
for (var e, o = 0, n = "", r = 0, i = 0, a = 0, s = 0; t.length > o; ) {
var c = t[o++];
if (c == this.EOF_byte) e = 0 != i ? this.decoderError(!1) : this.EOF_code_point; else if (0 == i) if (this.inRange(c, 0, 127)) e = c; else {
if (this.inRange(c, 194, 223)) {
i = 1;
s = 128;
r = c - 192;
} else if (this.inRange(c, 224, 239)) {
i = 2;
s = 2048;
r = c - 224;
} else if (this.inRange(c, 240, 244)) {
i = 3;
s = 65536;
r = c - 240;
} else this.decoderError(!1);
r *= Math.pow(64, i);
e = null;
} else if (this.inRange(c, 128, 191)) {
a += 1;
r += (c - 128) * Math.pow(64, i - a);
if (a !== i) e = null; else {
var l = r, u = s;
r = 0;
i = 0;
a = 0;
s = 0;
e = this.inRange(l, u, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(!1, c);
}
} else {
r = 0;
i = 0;
a = 0;
s = 0;
o--;
e = this.decoderError(!1, c);
}
if (null !== e && e !== this.EOF_code_point) if (e <= 65535) e > 0 && (n += String.fromCharCode(e)); else {
e -= 65536;
n += String.fromCharCode(55296 + (e >> 10 & 1023));
n += String.fromCharCode(56320 + (1023 & e));
}
}
return n;
};
t.prototype.encoderError = function(t) {};
t.prototype.decoderError = function(t, e) {
return e || 65533;
};
t.prototype.inRange = function(t, e, o) {
return e <= t && t <= o;
};
t.prototype.div = function(t, e) {
return Math.floor(t / e);
};
t.prototype.stringToCodePoints = function(t) {
for (var e = [], o = 0, n = t.length; o < t.length; ) {
var r = t.charCodeAt(o);
if (this.inRange(r, 55296, 57343)) if (this.inRange(r, 56320, 57343)) e.push(65533); else if (o == n - 1) e.push(65533); else {
var i = t.charCodeAt(o + 1);
if (this.inRange(i, 56320, 57343)) {
var a = 1023 & r, s = 1023 & i;
o += 1;
e.push(65536 + (a << 10) + s);
} else e.push(65533);
} else e.push(r);
o += 1;
}
return e;
};
return t;
}();
o.default = r;
cc._RF.pop();
}, {} ],
Cache: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5940aG5C+BL6JzjwV0KRUEw", "Cache");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
this._cache = {};
}
t.prototype.initCache = function(t) {
t && !this._cache[t] && (this._cache[t] = {});
};
t.prototype.set = function(t, e) {
t && e && (this._cache[t] = e.forEach ? this.mapToObj(e) : e);
};
t.prototype.get = function(t) {
return t ? JSON.parse(JSON.stringify(this._cache[t])) : void 0;
};
t.prototype.mapToObj = function(t) {
var e = Object.create(null);
t.forEach(function(t, o) {
e[o] = t;
});
return e;
};
t.prototype.getItem = function(t, e) {
var o;
return this._cache[t] ? o = this._cache[t][e] : o;
};
t.prototype.getItemByType = function(t, e, o) {
var n = [];
if (!this._cache[t]) return n;
var r = this._cache[t];
for (var i in r) if (r[i][e] == o) {
var a = parseInt(i);
n.push(a);
}
return n;
};
return t;
}();
o.cache = new n();
o.CacheKey || (o.CacheKey = {});
o.CacheFileNames = [];
o.CACHE_CONFIG_PATH = "config/";
cc._RF.pop();
}, {} ],
Cost: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "19429BRYO9NKases+B+8CL/", "Cost");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
r([ s(cc.Label) ], e.prototype, "label", void 0);
r([ s ], e.prototype, "text", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
EventConstants: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4ce67NERfpNl4HAi9IBxjNp", "EventConstants");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.SHOW_TIPS = "showTips";
t.UI_SHOW = "uiShow";
t.UPDATAUI = "updataUI";
t.PLAY_BGM = "playBgm";
t.STOP_BGM = "stopBgm";
t.PLAY_SOUND_EFFECT = "playSoundEffect";
t.STOP_SOUND_EFFECT = "stopSoundEffect";
t.STOP_ALL_SOUND_EFFECT = "stopAllSoundEffect";
t.SWITCH_MUTE = "switchMute";
t.SWITCH_SOUND = "switchSound";
t.PLAY_BIGSNAKE = "playbigsnake";
t.SWITCH_SNAKE = "switchsnake";
t.UP_ICEPROGRESS = "up_IceProgress";
t.COUNTDOWN = "count_Down";
t.SHOW_POPUP = "showPopUp";
t.HIDE_POPUP = "hidePopUp";
t.HIDE_ALL_POPUP = "hideAllPopUp";
t.SHOW_LOADING = "showLoading";
t.HIDE_LOADING = "hideLoading";
t.GET_REWARDS = "get_rewards";
t.RED_DETECTION = "red_detection";
t.GROUPBALLINGAME = "ballInGame";
t.GROUPBALLINRECYCLE = "ballInRecycle";
t.OPENVDIEO = "openVideo";
})(o.GameEvents || (o.GameEvents = {}));
var n = function() {
function t() {}
t.game = null;
return t;
}();
o.GameConstant = n;
cc._RF.pop();
}, {} ],
Events: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "55bbbGjFNtElaGBGZqSnlzM", "Events");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {
this.events = [];
}
t.prototype.on = function(t, e, o, n, r, i) {
void 0 === i && (i = !1);
this.hasListener(t, o) && this.removeListener(t, o);
this.events.push({
compName: t,
compUUID: e,
eventName: o,
callback: n,
that: r,
isOnce: i
});
};
t.prototype.emit = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
for (var n = 0, r = this.events; n < r.length; n++) {
var i = r[n];
if (i.eventName === t) {
i.callback.apply(i.that, e);
!0 === i.isOnce && this.removeListener(i.compName, i.eventName);
}
}
};
t.prototype.hasListener = function(t, e) {
for (var o = 0, n = this.events; o < n.length; o++) {
var r = n[o];
if (r.compName === t && r.eventName === e) return !0;
}
return !1;
};
t.prototype.removeListener = function(t, e) {
for (var o = 0; o < this.events.length; o++) {
var n = this.events[o];
if (n.compName === t && n.eventName === e) {
n.compName = null;
n.compUUID = null;
n.eventName = null;
n.callback = null;
n.that = null;
this.events.splice(o, 1);
break;
}
}
};
return t;
}();
o.events = new n();
cc._RF.pop();
}, {} ],
FCionEvent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "26dffw8sylD3oAMuANOVMI2", "FCionEvent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/User"), a = t("../common/Events"), s = t("../common/EventConstants"), c = t("../common/Actions"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.redNode = null;
e.hfNode = null;
e.FSDKNode = null;
e.redDuiNode = [];
e.hfDuiNode = [];
return e;
}
e.prototype.onLoad = function() {
this.redNode.active = !1;
this.hfNode.active = !1;
this.initEvents();
};
e.prototype.initEvents = function() {
a.events.on(this.name, this.uuid, s.GameEvents.OPENVDIEO, this.openVidoe, this);
};
e.prototype.onDestroy = function() {
a.events.removeListener(this.name, s.GameEvents.OPENVDIEO);
};
e.prototype.openVidoe = function(t, e) {
var o = this;
void 0 === e && (e = !0);
t.node.opacity = 255;
cc.tween(t.node).to(1, {
position: cc.v2(0, 0),
scale: 2
}).call(function() {
t.node.opacity = 0;
if (!(i.user.firstGold >= 98 && i.user.secondGold >= 68)) {
i.user.firstGold >= 98 && (t.node.name = "hf");
i.user.secondGold >= 98 && (t.node.name = "red");
i.user.setIsRedAndCost(!1);
FSDK.showGetPacketPage(o.FSDKNode, t.node.name, function(e) {
if (1 != e) {
s.GameConstant.game.removeBarrier(t);
s.GameConstant.game.isVideoAddBarriers();
} else o.animPlay(t);
}, e);
}
}).start();
};
e.prototype.animPlay = function(t) {
var e = this, o = function() {
e.redNode.active = !1;
e.hfNode.active = !1;
e.redNode.position = cc.v2();
e.hfNode.position = cc.v2();
s.GameConstant.game.removeBarrier(t);
s.GameConstant.game.isVideoAddBarriers();
};
if (cc.find("Canvas/game").activeInHierarchy) {
if ("red" == t.node.name) {
this.redNode.active = !0;
c.actions.tweenToPos(this.redNode, this.redDuiNode[1].position, .6, o);
} else if ("hf" == t.node.name) {
this.hfNode.active = !0;
c.actions.tweenToPos(this.hfNode, this.hfDuiNode[1].position, .6, o);
}
} else if ("red" == t.node.name) {
this.redNode.active = !0;
c.actions.tweenToPos(this.redNode, this.redDuiNode[0].position, .6, o);
} else if ("hf" == t.node.name) {
this.hfNode.active = !0;
c.actions.tweenToPos(this.hfNode, this.hfDuiNode[0].position, .6, o);
}
};
r([ p(cc.Node) ], e.prototype, "redNode", void 0);
r([ p(cc.Node) ], e.prototype, "hfNode", void 0);
r([ p(cc.Node) ], e.prototype, "FSDKNode", void 0);
r([ p(cc.Node) ], e.prototype, "redDuiNode", void 0);
r([ p(cc.Node) ], e.prototype, "hfDuiNode", void 0);
return e = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/Actions": "Actions",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/User": "User"
} ],
FConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad3c1XqgJdJ55YjLkGvRwlm", "FConfig");
var n = function() {
function t() {}
t.IS_DEBUG = !1;
t.IS_LOG = !0;
t.GAME_NAME = "测试";
t.CHANNEL = "sdy";
t.VERSION = "1.0.0";
t.VERSION_CODE = 100;
t.LINK_CONF = null;
t.MarqueeName = [ "贤色旧梦", "暧昧与嫉妒", "爱你九妹", "宝贝伴侣", "被你浪费的情感", "天长地久的爱恋", "梦想时分", "心疼自己", "把星星放进口袋里", "软见", "额头", "衣袂翩翩", "凤眸有你", "别太快关灯", "诱惑", "自古", "沐叶清风", "亦世凡华", "繁华落世丶涐许你一抹红颜", "护食女顽童", "挑眉", "缘起", "圈心", "刺激", "红烛", "怀春", "锦妆", "虞心", "扎心", "堇夏", "残年っ", "╭淡妆╮", "笄发醒", "诗沫涵,", "重口味", "悲画扇", "黑名单", "花争发", "小性感", "北仑色", "自轻舟去", "离囚戈", "朝歌夜弦", "年少如梦", "撩情戏浪子", "撩汉实力派", "浪野少女心", "如初", "亡鱼深海花夕拾", "朝拾", "爱笑的女生", "栀晚鸢乱", "凯喵的小鱼鳅", "寻梦旅人", "失意花季少女", "季末°不寂寞", "眉眼心间", "半盏青灯", "偏执与你", "轻烟薄暮", "青橘栀耳", "傲娇萌娃", "往日柔情", "百毒不侵", "谦与谦寻", "初心莫负", "晚点相遇", "紫陌红尘", "嬡.暀苝漂", "纯粹剪爱", "毫无代价", "忧烟殇往", "潇湘夜雨", "倾尽天下", "梦醒时分", "安之若素", "愿君安好", "你好，明天", "莫失莫忘", "孑然一身", "无需善良", "野猪佩琪", "欲言又止", "酷味很正", "人走茶凉", "伴你余生", "随心所欲", "不负遇见", "陪我听风", "等风也等你", "为你上战场", "深拥意中人", "心软脾气大", "野性又迷人", "积攒一身酷", "撩妹一把手", "稳握江山权", "无聊也不聊", "持刀稳情场", "请保管好你随身携带的暧昧", "不努力拿什么给你未来", "誓言只是一时的失言", "听ゝ海哭的声音", "我欠你一个全剧终", "後知後覺", "旧街旧巷等旧人", "离人不回", "北街末雨", "眉眼如初", "雨落无声", "斩尽天下", "半点心", "淑女范", "梦中人", "平常心", "手放开", "孤美人", "刚刚好", "半生缘", "未语淚先流", "你怀里精致的猪猪", "初本ʚɞ", "一只失宠狐阿", "败给可爱", "离人久巷晚秋凉", "故人辞巷抚轻风", "我不是胆小鬼", "感恩旧爱", "恋爱进行曲", "天生傲骨", "是谁牵动了我的心", "山穷水尽更词穷", "淡然气质比天高〃", "几多岁♡", "放我出去", "熱到膨脹", "苍山有井美似空", "搁浅°", "软萌", "路途", "泸沽烟水里的过客", "淡意衬优柔丶", "如人饮水，冷暖自知", "自古空情多余恨", "疏雨萧萧千行泪", "釉色清风", "旧情返航", "烛中泪", "故事久", "毁心人", "失訫人", "少女瘾", "旧心酸", "维她命", "樱花皇后", "影伴人久", "诗人礼献", "叫醒耳朵", "过分着迷", "暖于心ゆ", "轻叹花开", "森蝶呦つ", "桃色玫瑰", "人野性子浪", "酷到不说话", "封刀不再战", "情感贩卖机", "帅哥，请留步", "深拥他入梦", "情动则心痛", "北柠陌寒", "﹎黯淡ヾ", "凸逼娚勃丸", "妳的溫柔╮只許莪擁囿", "含笑九拳", "蹲街丶吐烟圈oοО", "少女梦", "伪高冷", "别凑合", "勿相忘", "几年华", "故辞", "几味吻", "光阴负容颜╮", "TRY，舞台··", "紫色明信片", "一顾倾人城 ”", "眸敛", "搖曳紅塵中", "鹿困森林", "菊花灿烂^", "风月不等闲", "预言与梦", "文艺菇凉好愤青/*", "太阳每天都生气", "木马在旋转", "眉眼冷无情", "往事埋风中", "妩媚给谁看", "迷上男图像", "陪你到世界的尽头", "心若初晴", "姐比特仑苏还纯°", "盛世流光", "为君倾心", "生生世世", "春风乍起", "素年凉音", "逾期守候", "吶次、曖昧", "孤城旧梦", "森陌夏栀", "古城青衣", "孤酒浪友", "旧巷听风", "风穿襟袖 长叹裁红颜", "望不穿秋水//等不回旧人", "守一座空城等一个旧人", "祢若卟惜莪亦卟嗳", "岂能尽如人意但求无愧于心", "踩着棺材跳鬼步", "清泪两行", "酒笙清栀", "孤酒对饮", "余生浪子", "感性在作祟", "若遇你", "假绅士", "按时荒唐", "快快长大", "释怀", "殇旋律", "三個字對不起〆", "愿是你心之王", "擒拿美人心", "顾虑", "像风一样", "惦记", "吧唧你", "只靠听说", "爷，桀骜不驯", "只偏袒你", "你眼中盈盈月", "提笔写情书", "老爹", "笑我庸俗", "如歌", "痴情狗", "感谢经历", "青春别挥霍", "妄叙", "被淹死的鱼", "江东过客", "唯独是你", "只等公子", "安知我意", "怪性笑人.", "圈圈你个叉叉", "劳资独宠一方", "我有想你", "美汉子", "佰仙", "各路角色", "初恋情久", "葵一般的少年", "目的追你", "一杯忘情", "無奈已被傷", "糖不及你甜", "心瘾成病", "撩妹欧巴", "路旁的无奈", "小家伙", "秋北先生", "迷离的眼", "所谓的第三者", "带你回家", "蕝蝂·貨℡", "န情断", "几人难应", "我为自己代言!", "女儿国的男人", "共度余生", "骚年求逆推i", "热心市民", "阳光下的温暖°", "别涉世太深", "命中不缺狗", "梦好", "含笑记下", "有点上瘾", "迷毁少年", "活在当下", "还给你的自由", "多想强吻你", "世中仙人", "闻香识女人", "男优", "我要让情敌当伴郎", "攒一袋星星.", "白云悠悠", "情殇", "有木有妳兜一样.", "红颜醉", "清白野酒", "荒城", "纪年", "呆橘", "青稚", "腻歪", "漓汐", "初遇", "感性", "墨凉", "余醉", "孤刺", "叛逆", "始终不够爱你", "窝囊感情", "粉红色少女", "穿草裙的少女", "迷途", "小时光", "少女的英雄梦", "傲姿", "念旧", "深巷", "你笑在眉眼.", "烟花易冷", "柠栀", "久念", "习惯性依赖", "旧憶", "故事未完", "月竹挽风", "雅痞", "孤身", "凉心", "抬举", "晨曦微暖", "勿忘初心", "死撑", "闲云", "冷眸", "喵喵", "相权美人", "莫爱", "脆弱", "陌殇", "单杀", "傲娇小公主", "薄荷糖丶微凉" ];
t.FSDK_CONF = {
UPDATE_CONF: {
ver: "1.0.0",
must: !1
},
AD_CONF: {
video_fresh_time: 10,
inters_fresh_time: {
star: 300,
new: 600,
old: 300
},
csj_dd: {
old: "1111",
new: "2222"
},
video_limit: 50,
inters_limit: {
new: 10,
old: 20
},
video: {
red: "11111",
red_new: "22222",
hf: "11111",
hf_new: "22222",
sign: "11111",
sign_new: "222222"
},
inters: {
main: "11111",
main_new: "222222"
},
banner: {
main: "11111",
main_new: "222222"
}
},
MORE_GAME: [],
RED_CONF: [ {
range: 0,
random: [ 1, 3 ]
}, {
range: 11,
random: [ 1, 2 ]
}, {
range: 21,
random: [ .5, 1 ]
}, {
range: 31,
random: [ .1, 1 ]
}, {
range: 41,
random: [ .1, .5 ]
}, {
range: 51,
random: [ .05, .1 ]
}, {
range: 61,
random: [ .01, .1 ]
}, {
range: 71,
random: [ .01, .05 ]
}, {
range: 81,
random: [ .01, .03 ]
}, {
range: 91,
random: [ .01, .02 ]
} ],
HF_CONF: [ {
range: 0,
random: [ 1, 2 ]
}, {
range: 11,
random: [ .5, 1 ]
}, {
range: 21,
random: [ .1, .5 ]
}, {
range: 31,
random: [ .01, .3 ]
}, {
range: 41,
random: [ .01, .1 ]
} ],
TRANS_CONF: [ {
id: 1,
allNum: 1e3,
transLimit: !0,
transQu: [ 1, 1 ]
}, {
id: 2,
allNum: 1500,
transLimit: !0,
transQu: [ 1, 1 ]
}, {
id: 3,
allNum: 2e3,
transLimit: !1,
transQu: [ 1, 1 ]
}, {
id: 4,
allNum: 2500,
transLimit: !1,
transQu: [ 1, 1 ]
}, {
id: 5,
allNum: 2600,
transLimit: !1,
transQu: [ 1, 1 ]
}, {
id: 6,
allNum: 2700,
transLimit: !1,
transQu: [ 1, 1 ]
} ],
isFlag: !0,
REAL_AD: 5,
SCALE_PADDING: .56,
TOP_PADDING: 65,
word: {
tip1: "",
tip2: "",
tip3: "",
tip4: "",
tip5: ""
},
SIGN_CONF: [ 5, 5, 5, 5, 5, 5, 10 ],
MARQUEE_CONF: {
fresh_time: [ 30, 180 ],
pp: !0,
gp: !0
},
TASK_CONF: {
title: {
target_1: "累计登陆天数达到@天",
target_2: "测试任务达到@"
},
list: [ {
id: 1,
target_1: 2,
target_2: 15
}, {
id: 2,
target_1: 7,
target_2: 40
}, {
id: 3,
target_1: 10,
target_2: 60
}, {
id: 4,
target_1: 15,
target_2: 70
}, {
id: 5,
target_1: 20,
target_2: 80
}, {
id: 6,
target_1: 30,
target_2: 90
} ]
},
link: "https://www.baidu.com"
};
t.EMAIL_SUFFIX = [ "gamail.com", "hotmail.fr", "t-online.de", "libero.it", "yahoo.com.ph", "hotmail.com", "hotmail.fr", "live.fr", "live.com" ];
t.conf_hash = "";
t.conf = null;
t.CREDIT_FROM = {
SIGN_IN: "sign in",
TASK_REWARD: "task reward"
};
t.game_settings_info = {
hash: "",
zip: ""
};
t.LOGIN_DATA = {
pg: "",
ver: "1.0.0",
ver_code: 100,
sdk_int: 26,
os_ver: "Android 6.0",
lang: "zh_CN",
dev_fac: "weng",
dev_model: "test",
network: "WIFI",
resolution: "720,1280",
channel: "sdy",
root: 0,
apk_comment: "",
tz: 8,
imsi: "",
aid: "",
network_config: [ "" ],
conf_hash: ""
};
return t;
}();
window.FConfig = n;
cc._RF.pop();
}, {} ],
FEventID: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b3894dOcBRARbAu4xSDx3Qh", "FEventID");
var n = function() {
function t() {}
t.EVENT_CLOSE = "EVENT_CLOSE";
t.EVENT_IO_ERROR = "EVENT_IO_ERROR";
t.S2C_reg_login = "S2C_reg_login";
t.S2C_heartbeat = "S2C_heartbeat";
t.S2C_update_credit = "S2C_update_credit";
t.S2C_update_coin = "S2C_update_coin";
t.S2C_daily_check_in = "S2C_daily_check_in";
t.S2C_info = "S2C_info";
t.S2C_invited = "S2C_invited";
t.S2C_gift_country = "S2C_gift_country";
t.S2C_gift_list = "S2C_gift_list";
t.S2C_trans = "S2C_trans";
t.S2C_broadcast = "S2C_broadcast";
t.S2C_add_counters = "S2C_add_counters";
t.S2C_friends = "S2C_friends";
t.S2C_wx_info = "S2C_wx_info";
t.S2C_pg_user_cnt = "S2C_pg_user_cnt";
t.S2C_trans_history = "S2C_trans_history";
t.FRESH_CREDIT = "FRESH_CREDIT";
t.NEXT_DAY = "NEXT_DAY";
t.FRESH_USERINFO = "FRESH_USERINFO";
t.CARD_RECORD = "CARD_RECORD";
t.FRESH_FLAG = "FRESH_FLAG";
t.GET_TRANS = "GET_TRANS";
return t;
}();
window.FEventID = n;
cc._RF.pop();
}, {} ],
FGetPacket: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cded6zGoVpFHpodvtPN3GuS", "FGetPacket");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mTitle = null;
e.redNode = null;
e.hfNode = null;
e.btn_close = null;
e.mIcon = null;
e.type = "";
e.isVideo = !0;
e.cb = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.mTitle.string = FNetWorkConfig.data.gameName + "给你发了一个大红包";
this.mIcon.spriteFrame = FNetWorkConfig.data.icon;
};
e.prototype.setType = function(t, e, o) {
this.btn_close.active = !0;
this.cb = e;
this.isVideo = o;
this.redNode.active = this.hfNode.active = !1;
switch (t) {
case "red":
this.initRed();
break;

case "hf":
this.initHf();
}
};
e.prototype.initRed = function() {
this.redNode.active = !0;
this.redNode.getChildByName("node1").active = !0;
this.redNode.getChildByName("node2").active = !1;
};
e.prototype.initHf = function() {
this.hfNode.active = !0;
this.hfNode.getChildByName("node1").active = !0;
this.hfNode.getChildByName("node2").active = !1;
};
e.prototype.openRed = function() {
this.isVideo ? FSDK.openVideo("red", this.openRedSuc, this) : this.openRedSuc();
};
e.prototype.openRedSuc = function() {
this.btn_close.active = !1;
this.redNode.getChildByName("node1").active = !1;
this.redNode.getChildByName("node2").active = !0;
var t = a.FGlobal.getRedNum();
this.redNode.getChildByName("node2").getChildByName("label").getComponent(cc.Label).string = t + "元";
FSDK.setCredit("red", t, "packet");
};
e.prototype.openHf = function() {
this.isVideo ? FSDK.openVideo("hf", this.openHfSuc, this) : this.openHfSuc();
};
e.prototype.openHfSuc = function() {
this.btn_close.active = !1;
this.hfNode.getChildByName("node1").active = !1;
this.hfNode.getChildByName("node2").active = !0;
var t = a.FGlobal.getHfNum();
this.hfNode.getChildByName("node2").getChildByName("label").getComponent(cc.Label).string = t + "元";
FSDK.setCredit("hf", t, "packet");
};
e.prototype.keepGame = function() {
this.cb && this.cb(1);
this.closePage();
};
e.prototype.closePage = function(t) {
this.cb && t && this.cb(0);
i.FPanelManager.close_eff(this.node, !0);
};
r([ l(cc.Label) ], e.prototype, "mTitle", void 0);
r([ l(cc.Node) ], e.prototype, "redNode", void 0);
r([ l(cc.Node) ], e.prototype, "hfNode", void 0);
r([ l(cc.Node) ], e.prototype, "btn_close", void 0);
r([ l(cc.Sprite) ], e.prototype, "mIcon", void 0);
return e = r([ c ], e);
}(cc.Component);
o.FGetPacket = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FGetTrans: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "71335vAbZNJkYBS84ZI6IFb", "FGetTrans");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = t("../FNetWork/FSocketSend"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mAmount = null;
e.mLimit = null;
e.pLimit = null;
e.mTarget_1 = null;
e.mTarGet_2 = null;
e.pTarget_1 = null;
e.pTarget_2 = null;
e.mRedTip = null;
e.mBtn = null;
e.id = 1;
e.isGet = !1;
e.amount = 1;
return e;
}
e.prototype.onLoad = function() {
this.mBtn.node.on(cc.Node.EventType.TOUCH_END, this.clickGet, this);
};
e.prototype.onEnable = function() {
cc.director.on(FEventID.S2C_add_counters, this.on_S2C_add_counters, this);
cc.director.on(FEventID.S2C_trans, this.on_S2C_trans, this);
};
e.prototype.onDisable = function() {
cc.director.off(FEventID.S2C_add_counters, this.on_S2C_add_counters, this);
cc.director.off(FEventID.S2C_trans, this.on_S2C_trans, this);
};
e.prototype.closePage = function() {
i.FPanelManager.close_eff(this.node);
};
e.prototype.setData = function(t, e, o, n) {
this.amount = t;
this.id = o;
this.mAmount.string = t + "元";
this.mTarget_1.string = this.getStr(FConfig.FSDK_CONF.TASK_CONF.title.target_1, this.getTask(o).target_1) + "（" + a.FGlobal.USER_INFO.login_days + "/" + this.getTask(o).target_1 + "）";
this.mTarGet_2.string = this.getStr(FConfig.FSDK_CONF.TASK_CONF.title.target_2, this.getTask(o).target_2) + "（" + e + "/" + this.getTask(o).target_2 + "）";
this.pTarget_1.progress = a.FGlobal.USER_INFO.login_days / this.getTask(o).target_1;
this.pTarget_2.progress = e / this.getTask(o).target_2;
this.mBtn.interactable = this.pTarget_1.progress >= 1 && this.pTarget_2.progress >= 1;
this.getTransConf(this.id).transLimit && s.FSocketSend.C2S_add_counters("TRANS_" + this.id, 0);
this.pLimit.node.active = this.getTransConf(this.id).transLimit;
this.mRedTip.string = "(已有" + [ this.getDuiNum(n) ] + "位玩家成功提现)";
};
e.prototype.getDuiNum = function(t) {
var e = 100;
switch (this.id) {
case 1:
e = Math.floor(3 * t + 3e3);
break;

case 2:
e = Math.floor(1.6 * t + 1200);
break;

case 3:
e = Math.floor(.9 * t + 680);
break;

case 4:
e = Math.floor(.5 * t + 350);
break;

case 5:
e = Math.floor(.2 * t + 207);
break;

case 6:
e = Math.floor(.05 * t + 85);
}
return e;
};
e.prototype.getStr = function(t, e) {
return t.replace("@", e);
};
e.prototype.getTask = function(t) {
for (var e = 0; e < FConfig.FSDK_CONF.TASK_CONF.list.length; e++) if (t == FConfig.FSDK_CONF.TASK_CONF.list[e].id) return FConfig.FSDK_CONF.TASK_CONF.list[e];
};
e.prototype.clickGet = function() {
if (this.mBtn.interactable) {
this.isGet = !0;
FSDK.showToLoad("请求中...");
s.FSocketSend.C2S_add_counters("TRANS_" + this.id, 0);
} else FSDK.showToast("完成任务后才可领取");
};
e.prototype.getTrans = function() {
s.FSocketSend.C2S_trans(this.id, "sdy@sdy.com", "111", "task");
};
e.prototype.on_S2C_add_counters = function(t) {
if (t.data) {
var e = this.getTransConf(this.id).allNum - t.data.cnt;
e = e < 0 ? 0 : e;
this.pLimit.progress = e / this.getTransConf(this.id).allNum;
this.mLimit.string = "今日还剩" + e + "份";
this.isGet && (e > 0 ? this.getTrans() : FSDK.showToast("今日份数已被领完，请明日再来"));
}
FLog.normal("看看返回什么  ");
};
e.prototype.getTransConf = function(t) {
for (var e = 0; e < FConfig.FSDK_CONF.TRANS_CONF.length; e++) if (t == FConfig.FSDK_CONF.TRANS_CONF[e].id) return FConfig.FSDK_CONF.TRANS_CONF[e];
};
e.prototype.on_S2C_trans = function(t) {
FSDK.hideToLoad();
this.isGet = !1;
if (t.err) FSDK.showToast(t.err); else if (t.data) {
this.getTransConf(this.id).transLimit && s.FSocketSend.C2S_add_counters("TRANS_" + this.id, 1);
cc.director.emit(FEventID.GET_TRANS, this.id);
this.closePage();
}
};
r([ u(cc.Label) ], e.prototype, "mAmount", void 0);
r([ u(cc.Label) ], e.prototype, "mLimit", void 0);
r([ u(cc.ProgressBar) ], e.prototype, "pLimit", void 0);
r([ u(cc.Label) ], e.prototype, "mTarget_1", void 0);
r([ u(cc.Label) ], e.prototype, "mTarGet_2", void 0);
r([ u(cc.ProgressBar) ], e.prototype, "pTarget_1", void 0);
r([ u(cc.ProgressBar) ], e.prototype, "pTarget_2", void 0);
r([ u(cc.Label) ], e.prototype, "mRedTip", void 0);
r([ u(cc.Button) ], e.prototype, "mBtn", void 0);
return e = r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"../FNetWork/FSocketSend": "FSocketSend"
} ],
FGlobal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9b237N5/ndPCpAeLX6cDMc9", "FGlobal");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./FPanelManager");
(function(t) {
t.NetWork = null;
t.ToLoad = null;
t.Count = null;
t.USER_INFO = {
reg_time: 0,
now: 0,
off_time: 0,
login_time: 0,
login_days: 0,
login_cnt: 0,
credit: 0,
isCanSign: !1,
be_invite: 0,
invite_code: "",
invite_count: 0,
isNextDay: !1,
isFlag: !1,
isBlack: !1,
isGrade: !1,
preferences: {},
credit_red: 0,
credit_hf: 0,
ALL_CONF: null,
channel: "",
channel_code: "",
WX_INFO: {
city: "",
country: "",
headimgurl: "",
language: "",
nickname: "",
openid: "",
privilege: [],
province: "",
sex: 1,
unionid: ""
}
};
t.SIGN_INFO = {
signDay: 0,
isSign: 0,
isLongSign: 0
};
t.AD_CNT = {
video: 0,
inters: 0
};
t.TASK_INFO = {};
t.invite_task = [];
t.setConf = function() {
var e = FConfig.game_settings_info.zip;
if (e) {
FConfig.LINK_CONF = t.uncompress(e);
FLog.normal("线上配置   ", FConfig.LINK_CONF);
var o = "";
for (var r in FConfig.LINK_CONF.VERSION_CONF.ALL_CONF) FConfig.VERSION >= r && (o = r);
if (FConfig.LINK_CONF.VERSION_CONF.ALL_CONF && FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[o]) {
var i = FConfig.LINK_CONF.VERSION_CONF.ALL_CONF[o];
for (var r in i) FConfig.LINK_CONF.ALL_CONF[r] = i[r];
}
var a = "";
for (var r in FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF) FConfig.VERSION >= r && (a = r);
if (FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF && FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[a]) {
i = FConfig.LINK_CONF.VERSION_CONF.FSDK_CONF[a];
for (var r in i) FConfig.LINK_CONF.FSDK_CONF[r] = i[r];
}
}
t.USER_INFO.ALL_CONF = FConfig.LINK_CONF.ALL_CONF;
FConfig.FSDK_CONF = FConfig.LINK_CONF.FSDK_CONF;
t.USER_INFO.isFlag = FConfig.FSDK_CONF.isFlag;
FConfig.FSDK_CONF.UPDATE_CONF.ver > FConfig.VERSION && n.FPanelManager.load("FUpdate", cc.director.getScene());
};
t.setChannelConf = function() {
var e = t.USER_INFO.channel_code;
if (FConfig.FSDK_CONF[e]) for (var o in FConfig.FSDK_CONF) for (var n in FConfig.FSDK_CONF[e]) o == n && (FConfig.FSDK_CONF[o] = FConfig.FSDK_CONF[e][n]);
};
t.uncompress = function(t) {
for (var o = t.replace(/↵/g, ""), n = atob(o), r = new Array(n.length), i = 0, a = n.length; i < a; ++i) r[i] = n.charCodeAt(i);
var s = new Zlib.Inflate(r).decompress();
return JSON.parse(e(s));
};
function e(t) {
var e, o, n, r, i, a;
e = "";
n = t.length;
o = 0;
for (;o < n; ) switch ((r = t[o++]) >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
e += String.fromCharCode(r);
break;

case 12:
case 13:
i = t[o++];
e += String.fromCharCode((31 & r) << 6 | 63 & i);
break;

case 14:
i = t[o++];
a = t[o++];
e += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | (63 & a) << 0);
}
return e;
}
t.Utf8ArrayToStr = e;
t.getDateDay = function(t) {
var e = new Date(1e3 * t), o = e.getFullYear() + "", n = e.getMonth() + 1 > 9 ? String(e.getMonth() + 1) : "0" + (e.getMonth() + 1), r = e.getDate() > 9 ? String(e.getDate()) : "0" + e.getDate();
return parseInt(o + n + r);
};
t.getDateDay1 = function(t) {
var e = new Date(1e3 * t);
return e.getFullYear() + "." + (e.getMonth() + 1 > 9 ? String(e.getMonth() + 1) : "0" + (e.getMonth() + 1)) + "." + (e.getDate() > 9 ? String(e.getDate()) : "0" + e.getDate());
};
t.Toast = function(e, o) {
void 0 === o && (o = "#ffffff");
t.piaoPool.size() && t.piao_add(e, o);
};
t.piao_list = [];
t.color_list = [];
t.piaoPool = new cc.NodePool();
t.piao_add = function(e, o) {
t.piao_list.push(e);
t.color_list.push(o);
1 == t.piao_list.length && t.openadd();
};
t.piao_savelist = [];
t.openadd = function() {
if (t.piao_list.length) {
for (var e = 0; e < t.piao_savelist.length; e++) cc.tween(t.piao_savelist[e]).by(.5, {
y: 54
}).start();
var o = t.piaoPool.get();
o.parent = cc.director.getScene();
o.stopAllActions();
o.y = cc.winSize.height / 2;
o.opacity = 255;
o.getChildByName("msg").getComponent(cc.Label).string = this.piao_list[0];
o.getChildByName("msg").color = new cc.Color().fromHEX(this.color_list[0]);
cc.tween(o).by(.5, {
y: 54
}).call(function() {
t.piao_savelist.push(o);
t.piao_list.shift();
t.color_list.shift();
t.openadd();
}).delay(1).to(.5, {
opacity: 0
}).call(function() {
t.piao_savelist.shift();
t.piaoPool.put(o);
}).start();
}
};
t.randomFrom = function(t, e) {
var o = Math.random() * (e - t) + t;
return Math.floor(100 * o) / 100;
};
t.resetData = function() {
FLog.normal("第二天了");
t.SIGN_INFO.signDay < 7 && (t.SIGN_INFO.isSign = 0);
t.SIGN_INFO.signDay >= 7 && (t.SIGN_INFO.signDay += 1);
FNative.AD_CNT = {
video: 0,
inters: 0
};
FSDK.saveData("SIGN_INFO", t.SIGN_INFO);
};
t.setPreferences = function() {
"SIGN_INFO" in t.USER_INFO.preferences && (t.SIGN_INFO = t.USER_INFO.preferences.SIGN_INFO);
"TASK_INFO" in t.USER_INFO.preferences && (t.TASK_INFO = t.USER_INFO.preferences.TASK_INFO);
"GRADE" in t.USER_INFO.preferences && (t.USER_INFO.isGrade = t.USER_INFO.preferences.GRADE);
"AD_SHOW_CNT" in t.USER_INFO.preferences && (FNative.AD_SHOW_CNT = t.USER_INFO.preferences.AD_SHOW_CNT);
"WX_INFO" in t.USER_INFO.preferences && (t.USER_INFO.WX_INFO = t.USER_INFO.preferences.WX_INFO);
"AD_CNT" in t.USER_INFO.preferences && (FNative.AD_CNT = t.USER_INFO.preferences.AD_CNT);
t.USER_INFO.channel || (t.USER_INFO.channel = FConfig.CHANNEL);
-1 != t.USER_INFO.channel.indexOf("_") && (t.USER_INFO.channel_code = t.USER_INFO.channel.split("_")[0]);
cc.sys.os == cc.sys.OS_IOS && (t.USER_INFO.isGrade = !0);
};
t.getEmail = function() {
var t = FConfig.MarqueeName[Math.floor(Math.random() * FConfig.MarqueeName.length)];
return t = t.length > 4 ? t.substring(0, 2) + "***" + t.substring(t.length - 2, t.length) : t.substring(0, 2) + "***";
};
t.randomWord = function(t) {
for (var e = "", o = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ], n = 0; n < t; n++) e += o[Math.round(Math.random() * (o.length - 1))];
return e;
};
t.getMarMsg = function() {
if (!FConfig.FSDK_CONF.MARQUEE_CONF.gp && !FConfig.FSDK_CONF.MARQUEE_CONF.pp) return null;
if (FConfig.FSDK_CONF.MARQUEE_CONF.gp && FConfig.FSDK_CONF.MARQUEE_CONF.pp) {
var t = [ {
name: FConfig.FSDK_CONF.word.tip3,
color: "#6CE73C"
}, {
name: FConfig.FSDK_CONF.word.tip4,
color: "#00D6FF"
} ];
return t[Math.floor(Math.random() * t.length)];
}
return FConfig.FSDK_CONF.MARQUEE_CONF.gp ? {
name: FConfig.FSDK_CONF.word.tip3,
color: "#6CE73C"
} : FConfig.FSDK_CONF.MARQUEE_CONF.pp ? {
name: FConfig.FSDK_CONF.word.tip4,
color: "#00D6FF"
} : void 0;
};
t.getQuRandom = function(t, e) {
var o = e - t;
return t + Math.floor(Math.random() * (o + 1));
};
t.getTopPadding = function() {
return cc.winSize.width / cc.winSize.height >= FConfig.FSDK_CONF.SCALE_PADDING ? FConfig.FSDK_CONF.TOP_PADDING : 0;
};
t.getScale = function() {
return cc.winSize.width / cc.winSize.height > FConfig.FSDK_CONF.SCALE_PADDING ? 0 : FConfig.FSDK_CONF.TOP_PADDING;
};
t.getVideoSceneNum = function() {
var t = 0;
for (var e in FConfig.FSDK_CONF.AD_CONF.video) -1 == e.indexOf("new") && t++;
return t;
};
t.getVideoPos = function(t) {
var e = 0;
for (var o in FConfig.FSDK_CONF.AD_CONF.video) if (-1 == o.indexOf("new")) {
if (t == o) return e;
e++;
}
return e;
};
t.getNormalityNumByRandom = function(t) {
for (var e = 0, o = 0; o < t.length; o++) e += parseInt(t[o]);
var n = Math.floor(Math.random() * e), r = 0;
for (o = 0; o < t.length; o++) if (n < (r += parseInt(t[o]))) return o;
};
t.getRedNum = function() {
for (var e = 0, o = 0; o < FConfig.FSDK_CONF.RED_CONF.length; o++) t.USER_INFO.credit_red >= FConfig.FSDK_CONF.RED_CONF[o].range && (e = o);
return t.randomFrom(FConfig.FSDK_CONF.RED_CONF[e].random[0], FConfig.FSDK_CONF.RED_CONF[e].random[1]);
};
t.getHfNum = function() {
for (var e = 0, o = 0; o < FConfig.FSDK_CONF.HF_CONF.length; o++) t.USER_INFO.credit_hf >= FConfig.FSDK_CONF.HF_CONF[o].range && (e = o);
return t.randomFrom(FConfig.FSDK_CONF.HF_CONF[e].random[0], FConfig.FSDK_CONF.HF_CONF[e].random[1]);
};
t.all_sprite = {};
t.loadImg = function(e, o, n, r) {
if (t.all_sprite[e]) {
n.spriteFrame = t.all_sprite[e];
r && r();
} else cc.loader.load(o, function(o, i) {
if (!o) {
var a = new cc.SpriteFrame(i);
t.all_sprite[e] = a;
n.spriteFrame = t.all_sprite[e];
r && r();
}
});
};
})(o.FGlobal || (o.FGlobal = {}));
cc._RF.pop();
}, {
"./FPanelManager": "FPanelManager"
} ],
FLoadingCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8dceaAXeBtINb9fa0rBxp0J", "FLoadingCtrl");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.IS_LOGINSUC = !1;
e.s_pro = null;
e.mIcon = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onEnable = function() {};
e.prototype.socketSuc = function() {
FLog.normal("链接成功咯", this.IS_LOGINSUC);
};
e.prototype.loginSuc = function(t) {
console.log("登录信息  ", t);
this.IS_LOGINSUC = !0;
FSDK.addCreditListen(this.creditListen, this);
};
e.prototype.creditListen = function(t) {
FLog.normal("这个是credit监听1", t);
};
e.prototype.update = function(t) {
if ((this.s_pro.fillRange < .8 || this.IS_LOGINSUC) && this.s_pro.fillRange < 1) {
this.s_pro.fillRange += .5 * t;
this.s_pro.fillRange;
}
};
e.prototype.clickButton = function(t) {
switch (t.target.name) {
case "1":
var e = {
ip_release: "wss://api.elswz.toponegames.cn:20212/?pg=china_d",
ip_debug: "wss://test.wps168.com:20212/?pg=china_d",
icon: this.mIcon,
pg: "com.light.china.demo",
code: "china_d",
gameName: "测试名字",
isDebug: !1,
test_aid: "2623233"
};
FSDK.init(e, this.loginSuc, this);
break;

case "2":
FSDK.showGetPacketPage(this.node, "red", function(t) {
FLog.normal("领取还是什么red", t);
});
break;

case "3":
FSDK.showGetPacketPage(this.node, "hf", function(t) {
FLog.normal("领取还是什么hf", t);
});
break;

case "4":
FSDK.showTransPage(this.node, 20);
break;

case "5":
FSDK.showToLoad("测试Loading", 5);
break;

case "6":
FSDK.hideToLoad();
break;

case "7":
FSDK.showToast("测试TIP");
break;

case "8":
FSDK.setCredit("credit", 10, "test");
break;

case "9":
FSDK.setCredit("pp", i.FGlobal.randomFrom(.1, 5), "test");
break;

case "10":
FSDK.setCredit("gp", i.FGlobal.randomFrom(.1, 5), "test");
break;

case "11":
FSDK.showMarQuee(this.node);
break;

case "12":
FSDK.showWxLogin(this.node, function(t) {
FLog.normal("微信返回信息   ", t);
}, this);
break;

case "13":
FSDK.openVideo("test", this.videoSuc, this);
break;

case "14":
FSDK.openBanner();
break;

case "15":
FSDK.closeBanner();
break;

case "16":
FSDK.openInters(this.intersSuc, this);
break;

case "17":
FSDK.showSignPage(this.node);
}
};
e.prototype.videoSuc = function() {
FLog.normal("发反反复复11111");
};
e.prototype.intersSuc = function() {
FLog.normal("发反反复复22222");
};
r([ c(cc.Sprite) ], e.prototype, "s_pro", void 0);
r([ c(cc.SpriteFrame) ], e.prototype, "mIcon", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FLogic: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "375ffTLnMtIN5TopH4/6Wq7", "FLogic");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../FModel/FGlobal"), r = function() {
function t() {
this.cbList = {};
this.RESTAR_TIME = null;
}
t.getInstance = function() {
t._instance || (t._instance = new t());
return t._instance;
};
t.prototype.addCommonListenser = function() {
cc.director.on(FEventID.S2C_reg_login, this.on_S2C_reg_login, this);
cc.director.on(FEventID.S2C_heartbeat, this.on_S2C_heartbeat, this);
cc.director.on(FEventID.S2C_info, this.on_S2C_info, this);
cc.director.on(FEventID.S2C_update_credit, this.on_S2C_update_credit, this);
cc.director.on(FEventID.S2C_update_coin, this.on_S2C_update_coin, this);
cc.director.on(FEventID.S2C_invited, this.on_S2C_invited, this);
cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
};
t.prototype.removeCommonListenser = function() {
cc.director.off(FEventID.S2C_reg_login, this.on_S2C_reg_login, this);
cc.director.off(FEventID.S2C_update_credit, this.on_S2C_update_credit, this);
cc.director.off(FEventID.S2C_info, this.on_S2C_info, this);
cc.director.off(FEventID.S2C_heartbeat, this.on_S2C_heartbeat, this);
cc.director.off(FEventID.S2C_update_coin, this.on_S2C_update_coin, this);
cc.director.off(FEventID.S2C_invited, this.on_S2C_invited, this);
cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
};
t.prototype.on_S2C_heartbeat = function(e) {
if (n.FGlobal.getDateDay(n.FGlobal.USER_INFO.now) < n.FGlobal.getDateDay(e.data.time)) {
n.FGlobal.resetData();
if (t.getInstance().cbList[FEventID.NEXT_DAY]) {
var o = t.getInstance().cbList[FEventID.NEXT_DAY].cb, r = t.getInstance().cbList[FEventID.NEXT_DAY].target;
o.call(r);
}
}
n.FGlobal.USER_INFO.now = e.data.time;
n.FGlobal.NetWork.heartbeat();
};
t.prototype.on_S2C_reg_login = function(e) {
FSDK.hideToLoad();
FLog.normal("服务器返回登录信息   ", e);
var o = t.getInstance().cbList[FEventID.S2C_reg_login].cb, r = t.getInstance().cbList[FEventID.S2C_reg_login].target;
if (e.err) {
if ("RELOGIN MUST DELAY" == e.err) {
n.FGlobal.NetWork.clearAllTime();
n.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
n.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
n.FGlobal.NetWork = null;
FSDK.object.RESTAR_TIME = setTimeout(function() {
FSDK.init(FNetWorkConfig.data, n.FGlobal.NetWork.cb, n.FGlobal.NetWork.target);
clearTimeout(FSDK.object.RESTAR_TIME);
FSDK.hideToLoad();
}, 1e3 * (e.data.must_delay + 1));
FSDK.showToLoad("Rebinding", e.data.must_delay + 1);
}
} else {
if (e.data) {
n.FGlobal.USER_INFO.preferences = e.data.preferences;
n.FGlobal.setPreferences();
n.FGlobal.USER_INFO.invite_code = e.data.invite_code;
n.FGlobal.USER_INFO.invite_count = e.data.invite_count;
n.FGlobal.USER_INFO.be_invite = e.data.personal.invited;
n.FGlobal.USER_INFO.login_cnt = e.data.login_cnt;
n.FGlobal.USER_INFO.login_days = e.data.login_days;
n.FGlobal.USER_INFO.credit = e.data.basic.credit;
n.FGlobal.USER_INFO.reg_time = e.data.reg_time;
n.FGlobal.USER_INFO.off_time = e.data.offline_timelen;
n.FGlobal.USER_INFO.login_time = e.data.now;
n.FGlobal.USER_INFO.now = e.data.now;
n.FGlobal.USER_INFO.credit_red = e.data.basic.coins.red ? e.data.basic.coins.red : 0;
n.FGlobal.USER_INFO.credit_hf = e.data.basic.coins.hf ? e.data.basic.coins.hf : 0;
n.FGlobal.USER_INFO.isCanSign = !n.FGlobal.SIGN_INFO.isSign;
if (e.data.conf_hash) {
FConfig.conf_hash = e.data.conf_hash;
localStorage.setItem("conf_hash", FConfig.conf_hash);
}
if (e.data.game_settings_info && e.data.game_settings_info.zip) {
FConfig.game_settings_info = e.data.game_settings_info;
localStorage.setItem("game_settings_info", JSON.stringify(FConfig.game_settings_info));
}
if (e.data.conf) {
FConfig.conf = e.data.conf;
localStorage.setItem("conf", JSON.stringify(FConfig.conf));
FLog.normal("看看配置2   ", e.data.conf);
}
n.FGlobal.setConf();
n.FGlobal.setChannelConf();
if (n.FGlobal.getDateDay(n.FGlobal.USER_INFO.login_time - n.FGlobal.USER_INFO.off_time) < n.FGlobal.getDateDay(n.FGlobal.USER_INFO.login_time)) {
n.FGlobal.resetData();
n.FGlobal.USER_INFO.isNextDay = !0;
} else n.FGlobal.USER_INFO.isNextDay = !1;
}
o.call(r, n.FGlobal.USER_INFO);
FNative.initAd(n.FGlobal.getVideoSceneNum());
FSDK.umengEvent("server_suc", "0");
var i = n.FGlobal.USER_INFO.now - n.FGlobal.USER_INFO.reg_time;
FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - i > 0 ? FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time.star - i + FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()] : FNative.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
FNative.freshInters();
}
};
t.prototype.on_S2C_update_credit = function(t) {
if (t.err) FSDK.showToast(t.err); else {
var e = 0;
if (t.data) {
e = t.data.credit - n.FGlobal.USER_INFO.credit;
n.FGlobal.USER_INFO.credit = t.data.credit;
}
var o = {
type: "credit",
num: n.FGlobal.USER_INFO.credit,
change: e
};
cc.director.emit(FEventID.FRESH_CREDIT, o);
}
};
t.prototype.on_S2C_update_coin = function(t) {
if (t.err) FSDK.showToast(t.err); else {
var e = 0;
if (t.data) switch (t.data.name) {
case "red":
e = t.data.coin - n.FGlobal.USER_INFO.credit_red;
n.FGlobal.USER_INFO.credit_red = t.data.coin;
break;

case "hf":
e = t.data.coin - n.FGlobal.USER_INFO.credit_hf;
n.FGlobal.USER_INFO.credit_hf = t.data.coin;
}
var o = {
type: t.data.name,
num: n.FGlobal.USER_INFO["credit_" + t.data.name],
change: e
};
cc.director.emit(FEventID.FRESH_CREDIT, o);
}
};
t.prototype.on_S2C_info = function(t) {
if (!t.err && t.data) {
t.data.basic && t.data.basic.credit && (n.FGlobal.USER_INFO.credit = t.data.basic.credit);
if (t.data.invite) {
n.FGlobal.USER_INFO.invite_count = t.data.invite.count;
t.data.invite.task && (n.FGlobal.invite_task = t.data.invite.task);
}
t.data.coins && cc.director.emit(FEventID.CARD_RECORD, t.data.coins);
cc.director.emit(FEventID.FRESH_USERINFO, t.data);
}
};
t.prototype.on_S2C_invited = function(t) {
t.err && FSDK.showToast(t.err);
};
t.prototype.on_S2C_trans_history = function(e) {
var o = {
redeem_task: FConfig.conf.redeem_task,
history: null
};
e.err ? o.history = null : o.history = e.data.records;
if (t.getInstance().cbList[FEventID.S2C_trans_history]) {
t.getInstance().cbList[FEventID.S2C_trans_history].cb.call(t.getInstance().cbList[FEventID.S2C_trans_history].target, o);
t.getInstance().cbList[FEventID.S2C_trans_history] = null;
}
};
return t;
}();
o.FLogic = r;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FLog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "693c1h8ZOpHSY/zsLST9gjX", "FLog");
var n = function() {
function t() {}
t.normal = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
FConfig.IS_LOG && (t = "Cocos打印：" + t);
console.log.apply(console, [ t ].concat(e));
};
return t;
}();
window.FLog = n;
cc._RF.pop();
}, {} ],
FMarqueeSmall: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "76c0c9U+z5AF5va4DgCx74W", "FMarqueeSmall");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tAnnounceNode = [];
e.type = "";
return e;
}
e.prototype.init = function() {
Math.floor(50 * Math.random() + 1), Math.floor(50 * Math.random() + 1);
var t = i.FGlobal.getEmail(), e = i.FGlobal.getEmail(), o = (9 * Math.random() + 1).toFixed(2), n = (9 * Math.random() + 1).toFixed(2), r = "现金红包";
this.tAnnounceNode[0].y = 0;
this.tAnnounceNode[1].y = -57;
"hf" == this.type && (r = "话费卡");
this.tAnnounceNode[0].getChildByName("label").getComponent(cc.Label).string = t + " 刚刚开启了" + o + "元" + r;
this.tAnnounceNode[1].getChildByName("label").getComponent(cc.Label).string = e + " 刚刚开启了" + n + "元" + r;
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.node.stopAllActions();
this.init();
this.showHorseLamp();
};
e.prototype.showHorseLamp = function() {
var t = this, e = Math.random() + 1;
cc.tween(this.node).delay(e).call(function() {
cc.tween(t.tAnnounceNode[0]).to(.6, {
y: 57
}).start();
cc.tween(t.tAnnounceNode[1]).to(.6, {
y: 0
}).start();
}).delay(.7).call(function() {
var e = t.tAnnounceNode.shift();
e.setPosition(cc.v2(0, -57));
Math.floor(50 * Math.random() + 1);
var o = i.FGlobal.getEmail(), n = (9 * Math.random() + 1).toFixed(2), r = "现金红包";
if ("hf" == t.type) {
cc.log;
r = "话费卡";
}
e.getChildByName("label").getComponent(cc.Label).string = o + " 刚刚开启了" + n + "元" + r;
t.tAnnounceNode.push(e);
t.showHorseLamp();
}).start();
};
r([ c(cc.Node) ], e.prototype, "tAnnounceNode", void 0);
r([ c(cc.String) ], e.prototype, "type", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FMarquee: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ec3dckrnbFHRZMnSmBKwlsm", "FMarquee");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tAnnounceNode = [];
e.money = [ 1, 5, 10, 20, 50, 100 ];
e.rate = [ 15, 15, 70 ];
e.list = [ "恭喜@收集了100元红包，并成功兑换", "恭喜@收集了100元话费卡，并成功兑换", "恭喜@达成&元红包兑换条件，并成功兑换" ];
return e;
}
e.prototype.init = function() {
var t = i.FGlobal.getEmail(), e = i.FGlobal.getEmail();
this.tAnnounceNode[0].y = 0;
this.tAnnounceNode[1].y = -57;
var o = this.list[i.FGlobal.getNormalityNumByRandom(this.rate)];
o = o.replace("@", t.toString()).replace("&", this.money[Math.floor(Math.random() * this.money.length)].toString());
var n = this.list[i.FGlobal.getNormalityNumByRandom(this.rate)];
n = n.replace("@", e.toString()).replace("&", this.money[Math.floor(Math.random() * this.money.length)].toString());
this.tAnnounceNode[0].getChildByName("label").getComponent(cc.Label).string = o;
this.tAnnounceNode[1].getChildByName("label").getComponent(cc.Label).string = n;
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.node.stopAllActions();
this.init();
this.showHorseLamp();
};
e.prototype.showHorseLamp = function() {
var t = this, e = 3 * Math.random() + 2;
cc.tween(this.node).delay(e).call(function() {
cc.tween(t.tAnnounceNode[0]).to(.6, {
y: 57
}).start();
cc.tween(t.tAnnounceNode[1]).to(.6, {
y: 0
}).start();
}).delay(.7).call(function() {
var e = t.tAnnounceNode.shift();
e.setPosition(cc.v2(-284, -57));
var o = i.FGlobal.getEmail(), n = t.list[i.FGlobal.getNormalityNumByRandom(t.rate)];
n = n.replace("@", o.toString()).replace("&", t.money[Math.floor(Math.random() * t.money.length)].toString());
e.getChildByName("label").getComponent(cc.Label).string = n;
t.tAnnounceNode.push(e);
t.showHorseLamp();
}).start();
};
r([ c(cc.Node) ], e.prototype, "tAnnounceNode", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FMoreIcon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "80f2e6b/Q9G8KiGsHNK4+ZE", "FMoreIcon");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FNetWork/FSocketSend"), a = t("../FModel/FGlobal"), s = t("../FModel/FPanelManager"), c = t("./FMorePanel"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon = null;
e.now_pos = 0;
e.data = null;
e.dhList = null;
e.parent = null;
e.dt = 0;
return e;
}
e.prototype.onLoad = function() {
cc.director.on(FEventID.S2C_pg_user_cnt, this.S2C_pg_user_cnt, this);
};
e.prototype.start = function() {};
e.prototype.setParent = function(t) {
this.parent = t;
};
e.prototype.onEnable = function() {
this.dt = 0;
this.setIcon();
};
e.prototype.update = function(t) {
this.dt += t;
if (this.dt >= 30) {
this.dt = 0;
this.setIcon();
}
};
e.prototype.S2C_pg_user_cnt = function(t) {
t.err || t.data && t.data.info && (this.dhList = t.data.info);
};
e.prototype.C2S_pg_user_cnt = function() {
for (var t = [], e = 0; e < FConfig.FSDK_CONF.MORE_GAME.length; e++) t.push(FConfig.FSDK_CONF.MORE_GAME[e].dh);
i.FSocketSend.C2S_pg_user_cnt(t);
};
e.prototype.setIcon = function() {
this.dt = 0;
if (!this.data) {
this.node.opacity = 0;
this.node.getComponent(cc.Button).interactable = !1;
}
this.C2S_pg_user_cnt();
var t = FConfig.FSDK_CONF.MORE_GAME[this.now_pos];
a.FGlobal.loadImg(t.name, t.icon, this.icon, function() {
this.data = FConfig.FSDK_CONF.MORE_GAME[this.now_pos];
this.now_pos++;
this.now_pos >= FConfig.FSDK_CONF.MORE_GAME.length && (this.now_pos = 0);
this.node.opacity = 255;
this.node.getComponent(cc.Button).interactable = !0;
}.bind(this));
};
e.prototype.openMorePanel = function() {
var t = this;
s.FPanelManager.load("FMorePanel", this.parent, function(e) {
e.getComponent(c.default).setData(t.data, t.dhList);
});
};
r([ p(cc.Sprite) ], e.prototype, "icon", void 0);
return e = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"../FNetWork/FSocketSend": "FSocketSend",
"./FMorePanel": "FMorePanel"
} ],
FMorePanel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4836a2vZgpMqLQPk1YRjIdZ", "FMorePanel");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.data = null;
e.moreIcon = null;
e.gameName = null;
e.gameTips = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
};
e.prototype.closePage = function() {
i.FPanelManager.close_eff(this.node, !0);
};
e.prototype.setData = function(t, e) {
this.data = t;
a.FGlobal.loadImg(t.name, t.icon, this.moreIcon);
this.gameName.string = t.name;
e && (this.gameTips.string = "已有" + e[t.dh] + "位玩家成功提现");
};
e.prototype.click = function() {
FNative.isAvilible(this.data.pg) ? FNative.openApp(this.data.pg) : FNative.openUrl(this.data.url);
this.closePage();
};
r([ l(cc.Sprite) ], e.prototype, "moreIcon", void 0);
r([ l(cc.Label) ], e.prototype, "gameName", void 0);
r([ l(cc.Label) ], e.prototype, "gameTips", void 0);
return e = r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FNative: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d1d68i4zBpEBIe5olI11joa", "FNative");
var n = function() {
function t() {}
t.getNativeClass = function() {
return cc.sys.os == cc.sys.OS_ANDROID ? "org.cocos2dx.javascript/Cocos" : cc.sys.os == cc.sys.OS_IOS ? "CocosMap" : void 0;
};
t.getSystemInfo = function() {
if (!cc.sys.isNative) return null;
var e;
cc.sys.os == cc.sys.OS_ANDROID ? e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getSystemInfo", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getSystemInfo"));
FLog.normal("看看系统信息：" + e);
var o = JSON.parse(e);
FConfig.CHANNEL = o.channel;
return o;
};
t.getVerInfo = function() {
if (!cc.sys.isNative) return null;
var e;
cc.sys.os == cc.sys.OS_ANDROID ? e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getVerInfo", "()Ljava/lang/String;") : cc.sys.os == cc.sys.OS_IOS && (e = jsb.reflection.callStaticMethod(t.getNativeClass(), "getVerInfo"));
e = JSON.parse(e);
FConfig.VERSION = e.ver;
FConfig.VERSION_CODE = e.ver_code;
FLog.normal("看看版本号信息" + e);
return e;
};
t.shake = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "shake", "(I)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "shake:", e));
};
t.copy = function(e) {
if (cc.sys.isNative) {
cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "copy", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "copy:", e);
FSDK.showToast("Copy success");
}
};
t.UmengOnEvent = function(e, o) {
void 0 === o && (o = "0");
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "UmengOnEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, o) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "UmengOnEvent:addContent:", e, o));
};
t.openApp = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openApp", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openApp:", e));
};
t.isAvilible = function(e) {
if (!cc.sys.isNative) return 0;
if (cc.sys.os == cc.sys.OS_ANDROID) {
return jsb.reflection.callStaticMethod(t.getNativeClass(), "isAvilible", "(Ljava/lang/String;)I", e);
}
cc.sys.os, cc.sys.OS_IOS;
};
t.jumpShop = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "jumpShop", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "jumpShop:", e));
};
t.openUrl = function(t) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org.cocos2dx.javascript/WebInter", "openUrl", "(Ljava/lang/String;)V", t) : (cc.sys.os, 
cc.sys.OS_IOS));
};
t.showToast = function(t) {
FSDK.showToast(t);
};
t.share = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openShare", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openShare:", e));
};
t.preloadVideo = function(e, o, n) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "preloadVideo", "(Ljava/lang/String;Ljava/lang/String;I)V", e, o, n) : (cc.sys.os, 
cc.sys.OS_IOS));
};
t.preloadInters = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "preloadInters", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "preloadInters:", e));
};
t.openVideo = function(e) {
cc.sys.isNative ? cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openVideo", "(I)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openVideo:", "11") : t.videoSuc();
};
t.openBanner = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openBanner", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openBanner:", e));
};
t.closeBanner = function() {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "closeBanner", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "closeBanner", "()V"));
};
t.openInters = function(e) {
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openInters", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(t.getNativeClass(), "openInters:", "11"));
};
t.wxLogin = function() {
FSDK.showToLoad("正在授权中...");
cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(t.getNativeClass(), "wxLogin", "()V") : (cc.sys.os, 
cc.sys.OS_IOS);
};
t.initAd = function(e) {
if (cc.sys.os == cc.sys.OS_ANDROID) {
jsb.reflection.callStaticMethod(t.getNativeClass(), "initAd", "(I)V", e);
var o = FConfig.FSDK_CONF.AD_CONF.csj_dd[FSDK.getUserType()];
o && jsb.reflection.callStaticMethod(t.getNativeClass(), "initCSJDD", "(Ljava/lang/String;)V", o);
} else cc.sys.os, cc.sys.OS_IOS;
};
t.openDDVideo = function() {
if (cc.sys.os == cc.sys.OS_ANDROID) {
var e = FConfig.FSDK_CONF.AD_CONF.csj_dd[FSDK.getUserType()];
e ? jsb.reflection.callStaticMethod(t.getNativeClass(), "openDDVideo", "(Ljava/lang/String;)V", e) : t.videoFail(!0);
} else cc.sys.os, cc.sys.OS_IOS;
};
t.videoShow = function() {
FSDK.adEvent("topon", "video");
t.AD_CNT.video++;
FSDK.umengEvent("video_show_scene", t.videoCb.from);
FLog.normal("视频展示");
FSDK.saveData("AD_CNT", t.AD_CNT);
};
t.videoSuc = function() {
t.videoCb.cb && t.videoCb.target && t.videoCb.cb.call(t.videoCb.target);
t.AD_SHOW_CNT.AD_SUC++;
t.AD_SHOW_CNT.AD_SUC >= FConfig.FSDK_CONF.REAL_AD && FSDK.setActiveUser();
FSDK.saveData("AD_SHOW_CNT", t.AD_SHOW_CNT);
FLog.normal("视频看完  ", t.AD_SHOW_CNT.AD_SUC);
};
t.videoClose = function() {
if (!t.VIDEO_FRESH_TIME && FConfig.FSDK_CONF.AD_CONF.video_fresh_time) {
t.video_fresh_time = FConfig.FSDK_CONF.AD_CONF.video_fresh_time;
t.VIDEO_FRESH_TIME = setInterval(function() {
if (t.video_fresh_time) t.video_fresh_time--; else {
clearTimeout(t.VIDEO_FRESH_TIME);
t.VIDEO_FRESH_TIME = null;
}
}, 1e3);
}
FLog.normal("视频关闭");
};
t.videoFail = function(e) {
void 0 === e && (e = !1);
if (e) {
FSDK.showToast("Video is loading");
FLog.normal("视频失败");
} else t.openDDVideo();
};
t.videoClick = function() {
FLog.normal("视频点击");
};
t.intersShow = function() {
FSDK.adEvent("topon", "interstitial");
t.AD_CNT.inters++;
t.AD_SHOW_CNT.AD_SHOW++;
FSDK.saveData("AD_SHOW_CNT", t.AD_SHOW_CNT);
FLog.normal("插屏展示");
};
t.freshInters = function() {
t.INTERS_FRESH_TIME || (t.INTERS_FRESH_TIME = setInterval(function() {
if (t.inters_fresh_time) t.inters_fresh_time--; else {
clearTimeout(t.INTERS_FRESH_TIME);
t.INTERS_FRESH_TIME = null;
}
}, 1e3));
};
t.intersClose = function() {
t.intersCb.cb && t.intersCb.target && t.intersCb.cb.call(t.intersCb.target);
t.inters_fresh_time = FConfig.FSDK_CONF.AD_CONF.inters_fresh_time[FSDK.getUserType()];
t.freshInters();
FLog.normal("插屏关闭");
};
t.intersFail = function() {
FLog.normal("插屏失败");
};
t.intersClick = function() {
FLog.normal("插屏点击");
};
t.bannerShow = function() {
FLog.normal("banner展示");
};
t.bannerClick = function() {
FLog.normal("banner点击");
};
t.wxLoginFail = function() {
FSDK.hideToLoad();
};
t.wxLoginSuc = function(e) {
FSDK.hideToLoad();
if (e.openid) {
FSDK.saveData("WX_INFO", e);
FSDK.reWxInfo(e);
} else t.wxLoginFail();
};
t.videoCb = {
cb: null,
target: null,
from: ""
};
t.intersCb = {
cb: null,
target: null
};
t.AD_SHOW_CNT = {
AD_SHOW: 0,
AD_SUC: 0
};
t.AD_CNT = {
video: 0,
inters: 0
};
t.VIDEO_FRESH_TIME = null;
t.video_fresh_time = 30;
t.INTERS_FRESH_TIME = null;
t.inters_fresh_time = 30;
return t;
}();
window.FNative = n;
cc._RF.pop();
}, {} ],
FNetWorkConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e79f0Kr975KMJcFzmDP5351", "FNetWorkConfig");
var n = function() {
function t() {}
t.getServerIp = function() {
return FConfig.IS_DEBUG ? t.server_ip_debug : t.server_ip_release;
};
t.server_ip_debug = "";
t.server_ip_release = "";
t.server_port = 8056;
t.data = {
ip_release: "",
ip_debug: "",
icon: null,
pg: "",
isDebug: !1,
test_aid: "",
code: "",
gameName: ""
};
return t;
}();
window.FNetWorkConfig = n;
cc._RF.pop();
}, {} ],
FNetWorkCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f26fdNkMlxGnIxj+ChZEwQ7", "FNetWorkCtrl");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./FLogic"), r = t("./FNetWork"), i = t("../FModel/FGlobal"), a = function() {
function t() {}
t.getInstance = function() {
t._instance || (t._instance = new t());
return t._instance;
};
t.prototype.ConnetctServer = function(e, o) {
t.cb = e;
t.target = o;
n.FLogic.getInstance().removeCommonListenser();
if (!i.FGlobal.NetWork) {
i.FGlobal.NetWork = new r.FNetWork();
n.FLogic.getInstance().addCommonListenser();
}
var a = {
host: FNetWorkConfig.getServerIp(),
port: FNetWorkConfig.server_port
};
i.FGlobal.NetWork.int(a, e, o);
i.FGlobal.NetWork.on(FEventID.EVENT_CLOSE, function() {
i.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
i.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
t.getInstance().onDropLine();
});
i.FGlobal.NetWork.on(FEventID.EVENT_IO_ERROR, function() {
i.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
i.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
t.getInstance().onDropLine();
});
};
t.prototype.onDropLine = function() {
var e = this;
FSDK.showToLoad("Rebinding");
console.error("这个是close监听");
setTimeout(function() {
i.FGlobal.NetWork.clearAllTime();
i.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
i.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
i.FGlobal.NetWork = null;
var o = n.FLogic.getInstance().cbList[FEventID.S2C_reg_login];
t.getInstance().ConnetctServer(function() {
FSDK.login(FNetWorkConfig.data.pg, o.cb, o.target, FNetWorkConfig.data.test_aid);
}, e);
}, 3e3);
};
t.cb = null;
t.target = null;
return t;
}();
o.FNetWorkCtrl = a;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"./FLogic": "FLogic",
"./FNetWork": "FNetWork"
} ],
FNetWork: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d8ea2mqLAlH/Iq6vH0Lwlmn", "FNetWork");
var n = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../FModel/FGlobal"), i = t("./FLogic"), a = t("./FSocketSend"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function() {
function t() {
this.HEARTBEAT_TIME_OUT = 5e3;
this.HEARTBEAT_TIME = 1e4;
this.HEART_CLICK = null;
this.HEART_TIMEOUT = null;
this._callbacks = {};
this.cb = null;
this.target = null;
this.tru = 0;
}
t.prototype.int = function(t, e, o) {
if (e) {
this.cb = e;
this.target = o;
}
r.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
r.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
if (this.socket) {
this.socket.close();
this.socket = null;
}
this.intSocket(t.host, t.port);
};
t.prototype.intSocket = function(t, e) {
this.socket = new WebSocket(t, [], cc.url.raw("resources/FSDK_RES/cacert.pem"));
this.socket.binaryType = "arraybuffer";
this.socket.onopen = this.onConnect.bind(this);
this.socket.onclose = this.onClose.bind(this);
this.socket.onerror = this.onIOError.bind(this);
this.socket.onmessage = this.onMessage.bind(this);
};
t.prototype.onConnect = function() {
FLog.normal("socket 连接成功");
if (this.cb) {
this.cb.call(this.target);
this.cb = null;
}
this.openHeart();
};
t.prototype.onClose = function(t) {
this.clearAllTime();
this.emit(FEventID.EVENT_CLOSE, t);
FLog.normal("socket 连接断开");
};
t.prototype.openHeart = function() {
a.FSocketSend.C2S_heartbeat();
};
t.prototype.onIOError = function(t) {
this.clearAllTime();
this.emit(FEventID.EVENT_IO_ERROR, t);
FLog.normal("socket 连接错误");
};
t.prototype.out = function() {
this.clearAllTime();
r.FGlobal.NetWork.off(FEventID.EVENT_IO_ERROR);
r.FGlobal.NetWork.off(FEventID.EVENT_CLOSE);
if (this.socket) {
this.socket.close();
this.socket = null;
}
i.FLogic.getInstance().removeCommonListenser();
r.FGlobal.NetWork = null;
};
t.prototype.heartbeat = function() {
this.HEART_TIMEOUT && clearTimeout(this.HEART_TIMEOUT);
this.HEART_CLICK = setTimeout(function() {
a.FSocketSend.C2S_heartbeat();
this.HEART_TIMEOUT = setTimeout(function() {
this.heartbeatOut();
}.bind(this), this.HEARTBEAT_TIME_OUT);
}.bind(this), this.HEARTBEAT_TIME);
};
t.prototype.heartbeatOut = function() {
FLog.normal("心跳超时间");
this._disconnect();
};
t.prototype._disconnect = function() {
FLog.normal("重连");
if (this.socket && 1 == this.socket.readyState) {
this.socket.close();
this.socket = null;
this.clearAllTime();
}
};
t.prototype.clearAllTime = function() {
this.HEART_CLICK && clearTimeout(this.HEART_CLICK);
this.HEART_TIMEOUT && clearTimeout(this.HEART_TIMEOUT);
};
t.prototype.on = function(t, e) {
(this._callbacks[t] = this._callbacks[t] || []).push(e);
};
t.prototype.off = function(t, e) {
this.removeAllListeners(t, e);
};
t.prototype.removeAllListeners = function(t, e) {
if (0 != arguments.length) {
var o = this._callbacks[t];
if (o) if (!t || e) {
var n = this.index(o, e._off || e);
~n && o.splice(n, 1);
} else delete this._callbacks[t];
} else this._callbacks = {};
};
t.prototype.index = function(t, e) {
if ([].indexOf) return t.indexOf(e);
for (var o = 0; o < t.length; ++o) if (t[o] === e) return o;
return -1;
};
t.prototype.request = function(t) {
this.sendMessage(t);
};
t.prototype.sendMessage = function(t) {
cc.sys.isNative ? FLog.normal("这个是客户端的上报   ", JSON.stringify(t)) : FLog.normal("这个是客户端的上报   ", t);
var e = JSON.stringify(t);
this.send(e);
return !0;
};
t.prototype.send = function(t) {
this.socket && 1 == this.socket.readyState && this.socket.send(t);
};
t.prototype.onMessage = function(t) {
var e = JSON.parse(t.data);
cc.sys.isNative ? FLog.normal("服务器返回", JSON.stringify(e)) : FLog.normal("服务器返回", e);
cc.director.emit(e.type, e);
};
t.prototype.emit = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
var n = [].slice.call(arguments, 1), r = this._callbacks[t];
if (r) for (var i = 0, a = (r = r.slice(0)).length; i < a; ++i) r[i].call(this, n, t);
return this;
};
return t = n([ c ], t);
}());
o.FNetWork = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"./FLogic": "FLogic",
"./FSocketSend": "FSocketSend"
} ],
FPanelManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b459xQaxpP1Lka21hvD+yY", "FPanelManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.savePanel = {};
function e(t) {
t.active = !0;
var e = t.getChildByName("mainNode");
if (!(e.getNumberOfRunningActions() > 0)) {
e.scale = 0;
cc.tween(e).to(.2, {
scale: 1
}, {
easing: "backOut"
}).start();
}
}
t.open_eff = e;
t.close_eff = function(t, e, o) {
void 0 === e && (e = !1);
void 0 === o && (o = null);
t.getChildByName("mainNode").getNumberOfRunningActions() > 0 || cc.tween(t.getChildByName("mainNode")).to(.2, {
scale: 0
}, {
easing: "backIn"
}).call(function() {
t.active = !1;
o && o();
e && (t.parent = null);
}).start();
};
t.openPanel = function(t) {
e(t);
};
t.load = function(e, o, n) {
if (t.savePanel[e]) {
t.savePanel[e].parent = o;
t.openPanel(t.savePanel[e]);
n && n(t.savePanel[e]);
} else {
FSDK.showToLoad();
cc.loader.loadRes("FSDK_RES/" + e, cc.Prefab, function(r, i) {
if (r) FSDK.hideToLoad(); else {
var a = cc.instantiate(i);
t.savePanel[e] = a;
t.savePanel[e].parent = o;
t.openPanel(t.savePanel[e]);
n && n(t.savePanel[e]);
FSDK.hideToLoad();
}
}.bind(this));
}
};
t.loadPage = function(e, o, n, r) {
void 0 === r && (r = !0);
if (t.savePanel[e]) o && o.call(n, t.savePanel[e]); else {
r && FSDK.showToLoad();
cc.loader.loadRes("FSDK_RES/" + e, cc.Prefab, function(r, i) {
if (r) {
o && o.call(n, null);
FSDK.hideToLoad();
} else {
t.savePanel[e] = cc.instantiate(i);
o && o.call(n, t.savePanel[e]);
FSDK.hideToLoad();
}
});
}
};
})(o.FPanelManager || (o.FPanelManager = {}));
cc._RF.pop();
}, {} ],
FProtocolCode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3d17fGOmnBOX4w39+ESCVd0", "FProtocolCode");
var n = function() {
function t() {}
t.C2S_hello = {
type: "C2S_hello",
data: {}
};
t.C2S_reg_login = {
type: "C2S_reg_login",
data: {
pg: "",
ver_code: 999,
info: {
pg: "",
ver: "",
ver_code: 0,
sdk_int: 0,
os_ver: "",
lang: "",
dev_fac: "",
dev_model: "",
network: "",
resolution: "",
channel: "",
root: 0,
apk_comment: "",
tz: 0,
imsi: ""
},
aid: "",
network_config: [ "" ],
conf_hash: "",
activate: 1,
d: !1,
server_tag: "",
relogin: !1,
game_settings: !0,
game_settings_info: {
hash: "",
zip: !0
}
}
};
t.C2S_heartbeat = {
type: "C2S_heartbeat",
data: {}
};
t.C2S_info = {
type: "C2S_info",
data: {
fields: []
}
};
t.C2S_gift_country = {
type: "C2S_gift_country",
data: {}
};
t.C2S_gift_list = {
type: "C2S_gift_list",
data: {
country: ""
}
};
t.C2S_trans = {
type: "C2S_trans",
data: {
id: 0,
trans_email: "",
mobile: "",
trans_type: ""
}
};
t.C2S_update_credit = {
type: "C2S_update_credit",
data: {
change: 1,
from: "",
detail: "",
conf_pos: []
}
};
t.C2S_update_coin = {
type: "C2S_update_coin",
data: {
name: "",
change: 1,
from: "",
detail: "",
conf_pos: []
}
};
t.C2S_preference = {
type: "C2S_preference",
data: {
key: "",
value: null,
safe: !0
}
};
t.C2S_preferences = {
type: "C2S_preferences",
data: {}
};
t.C2S_daily_check_in = {
type: "C2S_daily_check_in",
data: {}
};
t.C2S_invited = {
type: "C2S_invited",
data: {
code: ""
}
};
t.C2S_broadcast = {
type: "C2S_broadcast",
data: {
msg: {
def: ""
}
}
};
t.C2S_adwords = {
type: "C2S_adwords",
data: {
referrer: ""
}
};
t.C2S_app_promo_task = {
type: "C2S_app_promo_task",
data: {
name: "",
action: 0
}
};
t.C2S_trans_history = {
type: "C2S_trans_history",
data: {
type: ""
}
};
t.C2S_ad_event = {
type: "C2S_ad_event",
data: {
sdk: "",
type: "",
event: "impression"
}
};
t.C2S_add_counters = {
type: "C2S_add_counters",
data: {
name: "",
cnt: 1
}
};
t.C2S_pg_user_cnt = {
type: "C2S_pg_user_cnt",
data: {
pgs: []
}
};
return t;
}();
window.ProtocolCode = n;
cc._RF.pop();
}, {} ],
FRedLogin: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4f0b7e/IPZNRIcou7kSqtx5", "FRedLogin");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cb = null;
e.target = null;
e.card_num = 0;
e.mGetPacket = null;
e.mIcon = null;
e.mTitle = null;
e.data = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.mIcon.spriteFrame = FNetWorkConfig.data.icon;
this.mTitle.string = FNetWorkConfig.data.gameName + "给你发了一个大红包";
};
e.prototype.onEnable = function() {
this.mGetPacket.active = !1;
};
e.prototype.onDisable = function() {};
e.prototype.start = function() {};
e.prototype.getRewardSuc = function() {
this.closePage();
FSDK.hideToLoad();
i.FPanelManager.open_eff(this.mGetPacket);
};
e.prototype.getPacketSuc = function() {
this.cb && this.target && this.cb.call(this.target, this.data);
this.node.parent = null;
};
e.prototype.closePage = function() {
i.FPanelManager.close_eff(this.node, !0);
};
e.prototype.closeAll = function() {
this.node.parent = null;
};
e.prototype.login = function() {
FSDK.wxLogin(this.loginSuc, this);
};
e.prototype.loginSuc = function(t) {
this.data = t;
a.FGlobal.USER_INFO.WX_INFO = t;
setTimeout(function() {
this.getRewardSuc();
}.bind(this), 1e3);
};
e.prototype.setData = function(t, e) {
this.cb = t;
this.target = e;
};
r([ l(cc.Node) ], e.prototype, "mGetPacket", void 0);
r([ l(cc.Sprite) ], e.prototype, "mIcon", void 0);
r([ l(cc.Label) ], e.prototype, "mTitle", void 0);
return e = r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FSDKModel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aecfcOmfbxHJ6i0FFKQMW7+", "FSDKModel");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../FNetWork/FNetWorkCtrl"), r = t("../FNetWork/FSocketSend"), i = t("../FNetWork/FLogic"), a = t("./FGlobal"), s = t("./FToLoad"), c = t("./FPanelManager"), l = t("../FView/FGetPacket"), u = t("../FView/FTransPage"), p = t("../FView/FRedLogin"), d = t("../FView/FMoreIcon"), f = function() {
function t() {}
t.prototype.initSocket = function(t, e) {
i.FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
cb: t,
target: e
};
FNetWorkConfig.server_ip_release = FNetWorkConfig.data.ip_release;
FNetWorkConfig.server_ip_debug = FNetWorkConfig.data.ip_debug;
FConfig.IS_DEBUG = FNetWorkConfig.data.isDebug;
FSDK.object.initLocalStorage();
n.FNetWorkCtrl.getInstance().ConnetctServer(t, e);
FSDK.object.loadToLoad();
FSDK.object.loadToast();
FSDK.getVerInfo();
FLog.normal("这个是进来了");
};
t.prototype.initLocalStorage = function() {
if (localStorage.getItem("conf_hash")) {
FConfig.conf_hash = localStorage.getItem("conf_hash");
FLog.normal("什么   ", FConfig.conf_hash);
}
if (localStorage.getItem("conf")) {
FConfig.conf = JSON.parse(localStorage.getItem("conf"));
FLog.normal("看看配置   ", FConfig.conf);
}
localStorage.getItem("game_settings_info") && (FConfig.game_settings_info = JSON.parse(localStorage.getItem("game_settings_info")));
};
t.prototype.login = function(t, e, o, n) {
void 0 === n && (n = "1");
i.FLogic.getInstance().cbList[FEventID.S2C_reg_login] = {
cb: e,
target: o
};
FConfig.LOGIN_DATA.pg = t;
FConfig.LOGIN_DATA.aid = n;
FConfig.LOGIN_DATA.conf_hash = FConfig.conf_hash;
ProtocolCode.C2S_reg_login.data.game_settings_info.hash = FConfig.game_settings_info.hash;
ProtocolCode.C2S_reg_login.data.aid = FConfig.LOGIN_DATA.aid;
ProtocolCode.C2S_reg_login.data.pg = t;
ProtocolCode.C2S_reg_login.data.info.pg = t;
var a = FNative.getSystemInfo() ? FNative.getSystemInfo() : FConfig.LOGIN_DATA;
for (var s in ProtocolCode.C2S_reg_login.data) if ("info" == s) for (var c in ProtocolCode.C2S_reg_login.data.info) for (var l in a) c == l && (ProtocolCode.C2S_reg_login.data.info[c] = a[l]); else for (var u in a) s == u && (ProtocolCode.C2S_reg_login.data[s] = a[u]);
r.FSocketSend.C2S_reg_login();
};
t.prototype.setActiveUser = function() {
FLog.normal("上报活跃   ", !a.FGlobal.USER_INFO.preferences.real);
if (!a.FGlobal.USER_INFO.preferences.real) {
a.FGlobal.USER_INFO.preferences.real = 1;
r.FSocketSend.C2S_preference("real", 1);
}
};
t.prototype.saveData = function(t, e) {
void 0 === e && (e = null);
e ? r.FSocketSend.C2S_preference(t, e) : r.FSocketSend.C2S_preferences(t);
};
t.prototype.setCredit = function(t, e, o) {
"credit" == t ? r.FSocketSend.C2S_update_credit(e, o) : r.FSocketSend.C2S_update_coin(t, e, o);
};
t.prototype.addUserInfoListen = function(t, e) {
cc.director.on(FEventID.FRESH_USERINFO, t, e);
};
t.prototype.removeUserInfoListen = function(t, e) {
cc.director.off(FEventID.FRESH_USERINFO, t, e);
};
t.prototype.copy = function(t) {
FNative.copy(t);
};
t.prototype.setNextDayListen = function(t, e) {
i.FLogic.getInstance().cbList[FEventID.NEXT_DAY] = {
cb: t,
target: e
};
};
t.prototype.loadToLoad = function() {
c.FPanelManager.loadPage("FToLoad", function(t) {
a.FGlobal.ToLoad = t;
}, this);
};
t.prototype.showToLoad = function(t, e, o) {
void 0 === t && (t = "Loading");
void 0 === e && (e = 0);
void 0 === o && (o = !1);
if (a.FGlobal.ToLoad) {
a.FGlobal.ToLoad.parent = cc.director.getScene();
a.FGlobal.ToLoad.getComponent(s.default).setMsg(t, e, o);
}
};
t.prototype.hideToLoad = function() {
a.FGlobal.ToLoad && a.FGlobal.ToLoad.parent && (a.FGlobal.ToLoad.parent = null);
};
t.prototype.loadToast = function() {
c.FPanelManager.loadPage("FToast", function(t) {
for (var e = 0; e < 10; e++) {
var o = cc.instantiate(t);
a.FGlobal.piaoPool.put(o);
}
}, this);
};
t.prototype.showToast = function(t) {
a.FGlobal.Toast(t);
};
t.prototype.showGetPacketPage = function(t, e, o, n) {
c.FPanelManager.load("FGetPacket", t, function(t) {
t.getComponent(l.FGetPacket).setType(e, o, n);
});
};
t.prototype.showWxLogin = function(t, e, o) {
c.FPanelManager.load("FRedLogin", t, function(t) {
t.getComponent(p.default).setData(e, o);
});
};
t.prototype.showTransPage = function(t, e) {
c.FPanelManager.load("FTransPage", t, function(t) {
t.getComponent(u.default).setTask(e);
});
};
t.prototype.showSignPage = function(t) {
c.FPanelManager.load("FSignPage", t);
};
t.prototype.showMarQuee = function(t) {
a.FGlobal.getMarMsg() && a.FGlobal.USER_INFO.isFlag && c.FPanelManager.loadPage("FMarquee", function(e) {
cc.instantiate(e).parent = t;
}, this, !1);
};
t.prototype.preloadVideo = function(t) {
var e = FConfig.FSDK_CONF.AD_CONF.video[t];
"new" == FSDK.getUserType() && (e = FConfig.FSDK_CONF.AD_CONF.video[t + "_new"]);
FNative.preloadVideo(e, t, a.FGlobal.getVideoPos(t));
};
t.prototype.openVideo = function(t, e, o) {
if (FNative.AD_CNT.video >= FConfig.FSDK_CONF.AD_CONF.video_limit) FSDK.showToast("今日视频次数达到上限，请明日再来"); else if (FNative.VIDEO_FRESH_TIME) FSDK.showToast("视频冷却中，" + FNative.video_fresh_time + "秒后可观看"); else {
FNative.videoCb.cb = e;
FNative.videoCb.target = o;
FNative.videoCb.from = t;
FNative.openVideo(a.FGlobal.getVideoPos(t));
}
};
t.prototype.openBanner = function() {
var t = FConfig.FSDK_CONF.AD_CONF.banner.main;
"new" == FSDK.getUserType() && (t = FConfig.FSDK_CONF.AD_CONF.banner.main_new);
FNative.openBanner(t);
};
t.prototype.openInters = function(t, e) {
var o = FConfig.FSDK_CONF.AD_CONF.inters.main;
"new" == FSDK.getUserType() && (o = FConfig.FSDK_CONF.AD_CONF.inters.main_new);
FNative.intersCb.cb = t;
FNative.intersCb.target = e;
if (FNative.AD_CNT.inters >= FConfig.FSDK_CONF.AD_CONF.inters_limit[FSDK.getUserType()]) FNative.intersCb.cb && FNative.intersCb.target && FNative.intersCb.cb.call(FNative.intersCb.target); else if (FNative.INTERS_FRESH_TIME) {
FNative.intersCb.cb && FNative.intersCb.target && FNative.intersCb.cb.call(FNative.intersCb.target);
FLog.normal("还有" + FNative.inters_fresh_time + "秒刷新");
} else FNative.openInters(o);
};
t.prototype.adEvent = function(t, e) {
r.FSocketSend.C2S_ad_event(t, e);
};
t.prototype.getNowTime = function() {
return a.FGlobal.USER_INFO.now;
};
t.prototype.getUserType = function() {
return a.FGlobal.USER_INFO.now - a.FGlobal.USER_INFO.reg_time >= 86400 ? "old" : "new";
};
t.prototype.getTransList = function(t, e, o) {
void 0 === o && (o = "task");
i.FLogic.getInstance().cbList[FEventID.S2C_trans_history] = {
cb: t,
target: e
};
r.FSocketSend.C2S_trans_history(o);
};
t.prototype.wxLogin = function(t, e) {
i.FLogic.getInstance().cbList[FEventID.S2C_wx_info] = {
cb: t,
target: e
};
FNative.wxLogin();
};
t.prototype.reWxInfo = function(t) {
i.FLogic.getInstance().cbList[FEventID.S2C_wx_info] && i.FLogic.getInstance().cbList[FEventID.S2C_wx_info].cb(i.FLogic.getInstance().cbList[FEventID.S2C_wx_info].target, t);
};
t.prototype.showMoreGame = function(t, e) {
FConfig.FSDK_CONF.MORE_GAME.length && a.FGlobal.USER_INFO.isFlag && c.FPanelManager.loadPage("FMoreIcon", function(o) {
o.parent = t;
o.getComponent(d.default).setParent(e);
}, this, !1);
};
return t;
}();
window.FSDKModel = f;
cc._RF.pop();
}, {
"../FNetWork/FLogic": "FLogic",
"../FNetWork/FNetWorkCtrl": "FNetWorkCtrl",
"../FNetWork/FSocketSend": "FSocketSend",
"../FView/FGetPacket": "FGetPacket",
"../FView/FMoreIcon": "FMoreIcon",
"../FView/FRedLogin": "FRedLogin",
"../FView/FTransPage": "FTransPage",
"./FGlobal": "FGlobal",
"./FPanelManager": "FPanelManager",
"./FToLoad": "FToLoad"
} ],
FSDK: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8c73fviCCNIV6W3283yeCzt", "FSDK");
var n = function() {
function t() {}
t.init = function(e, o, n) {
t.object || (t.object = new window.FSDKModel());
FNetWorkConfig.data = e;
t.object.initSocket(function() {
t.login(FNetWorkConfig.data.pg, o, n, FNetWorkConfig.data.test_aid);
}, this);
t.umengEvent("server_star", "0");
};
t.login = function(e, o, n, r) {
void 0 === r && (r = "1");
t.object.login(e, o, n, r);
};
t.setActiveUser = function() {
t.object.setActiveUser();
};
t.addUserInfoListen = function(e, o) {
t.object.addUserInfoListen(e, o);
};
t.saveData = function(e, o) {
void 0 === o && (o = null);
t.object.saveData(e, o);
};
t.setCredit = function(e, o, n) {
t.object.setCredit(e, o, n);
};
t.addCreditListen = function(t, e) {
cc.director.on(FEventID.FRESH_CREDIT, t, e);
};
t.removeCreditListen = function(t, e) {
cc.director.off(FEventID.FRESH_CREDIT, t, e);
};
t.setNextDayListen = function(e, o) {
t.object.setNextDayListen(e, o);
};
t.copy = function(e) {
t.object.copy(e);
};
t.setLog = function(t) {
FConfig.IS_LOG = t;
};
t.showToLoad = function(e, o, n) {
void 0 === e && (e = "Loading");
void 0 === o && (o = 0);
void 0 === n && (n = !1);
t.object.showToLoad(e, o, n);
};
t.hideToLoad = function() {
t.object.hideToLoad();
};
t.share = function(t) {
FNative.share(t);
};
t.showToast = function(e) {
t.object.showToast(e);
};
t.showGetPacketPage = function(e, o, n, r) {
void 0 === r && (r = !0);
t.object.showGetPacketPage(e, o, n, r);
};
t.showSignPage = function(e) {
t.object.showSignPage(e);
};
t.showTransPage = function(e, o) {
t.object.showTransPage(e, o);
};
t.showMarQuee = function(e) {
t.object.showMarQuee(e);
};
t.addFlagListen = function(t, e) {
cc.director.on(FEventID.FRESH_FLAG, t, e);
};
t.preloadVideo = function(e) {
t.object.preloadVideo(e);
};
t.openVideo = function(e, o, n) {
t.object.openVideo(e, o, n);
};
t.openInters = function(e, o) {
t.object.openInters(e, o);
};
t.openBanner = function() {
t.object.openBanner();
};
t.closeBanner = function() {
FNative.closeBanner();
};
t.showWxLogin = function(e, o, n) {
t.object.showWxLogin(e, o, n);
};
t.shake = function(t) {
FNative.shake(t);
};
t.umengEvent = function(t, e) {
FNative.UmengOnEvent(t, e);
};
t.adEvent = function(e, o) {
t.object.adEvent(e, o);
};
t.getNowTime = function() {
return t.object.getNowTime();
};
t.getUserType = function() {
return t.object.getUserType();
};
t.getVerInfo = function() {
return FNative.getVerInfo();
};
t.getTransList = function(e, o, n) {
void 0 === n && (n = "task");
t.object.getTransList(e, o, n);
};
t.reWxInfo = function(e) {
t.object.reWxInfo(e);
};
t.wxLogin = function(e, o) {
t.object.wxLogin(e, o);
};
t.showMoreGame = function(e) {
t.object.showMoreGame(e);
};
t.object = null;
return t;
}();
window.FSDK = n;
cc._RF.pop();
}, {} ],
FSignPage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "63d97D/KSlIVI+DyMsIvPT8", "FSignPage");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FGlobal"), a = t("../FModel/FPanelManager"), s = t("../FNetWork/FSocketSend"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignNode = null;
e.mProbaly = null;
e.mCredit_hf = null;
e.mPro = null;
e.mBtnGet = null;
e.mHfTip = null;
e.mBtnSign = null;
e.mBtnSignFree = null;
e.mSignAl = null;
e.mCollect = null;
e.mCollectAl = null;
e.mProbablyPro = null;
e.mProbablyLab = null;
e.mHfNode = null;
e.mHfNum = null;
e.mCollectNo = null;
e.mIcon = null;
e.mTitle = null;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.mBtnGet.node.on(cc.Node.EventType.TOUCH_END, this.clickDui, this);
this.mIcon.spriteFrame = FNetWorkConfig.data.icon;
this.mTitle.string = FNetWorkConfig.data.gameName + "给你发了一个大红包";
};
e.prototype.onEnable = function() {
this.initData();
cc.director.on(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
s.FSocketSend.C2S_pg_user_cnt([ FNetWorkConfig.data.code ]);
FSDK.addCreditListen(this.updateCredit, this);
};
e.prototype.onDisable = function() {
cc.director.off(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
FSDK.removeCreditListen(this.updateCredit, this);
};
e.prototype.initData = function() {
this.mCredit_hf.string = i.FGlobal.USER_INFO.credit_hf.toFixed(2) + "元";
this.mPro.progress = i.FGlobal.USER_INFO.credit_hf / 100;
this.mBtnGet.interactable = this.mPro.progress >= 1;
this.setSign();
};
e.prototype.setSign = function() {
this.mProbaly.active = i.FGlobal.SIGN_INFO.signDay > 7;
this.mSignNode.parent.active = !this.mProbaly.active;
if (i.FGlobal.SIGN_INFO.signDay <= 7) {
this.mSignAl.active = this.mBtnSign.active = this.mBtnSignFree.active = !1;
for (var t = 0; t < this.mSignNode.childrenCount; t++) {
this.mSignNode.children[t].getChildByName("al_bg").active = !1;
this.mSignNode.children[t].getChildByName("al").active = t < i.FGlobal.SIGN_INFO.signDay;
this.mSignNode.children[t].getChildByName("msg").getComponent(cc.Label).string = FConfig.FSDK_CONF.SIGN_CONF[t] + "元";
this.mSignNode.children[t].getChildByName("msg").color = new cc.Color().fromHEX("#9F63CB");
this.mSignNode.children[t].getChildByName("label").color = new cc.Color().fromHEX("#9F63CB");
if (i.FGlobal.SIGN_INFO.isSign) {
this.mSignNode.children[t].getComponent(cc.Animation).stop();
this.mSignNode.children[t].scale = 1;
this.mSignAl.active = !0;
} else {
this.mBtnSignFree.active = 0 == i.FGlobal.SIGN_INFO.signDay;
this.mBtnSign.active = !this.mBtnSignFree.active;
}
}
i.FGlobal.SIGN_INFO.isSign || this.mSignNode.children[i.FGlobal.SIGN_INFO.signDay - i.FGlobal.SIGN_INFO.isSign].getComponent(cc.Animation).play();
this.mSignNode.children[i.FGlobal.SIGN_INFO.signDay - i.FGlobal.SIGN_INFO.isSign].getChildByName("al_bg").active = !0;
this.mSignNode.children[i.FGlobal.SIGN_INFO.signDay - i.FGlobal.SIGN_INFO.isSign].getChildByName("msg").color = new cc.Color().fromHEX("#EB814A");
this.mSignNode.children[i.FGlobal.SIGN_INFO.signDay - i.FGlobal.SIGN_INFO.isSign].getChildByName("label").color = new cc.Color().fromHEX("#EB814A");
} else {
this.mProbablyPro.progress = i.FGlobal.SIGN_INFO.signDay / 15;
this.mProbablyLab.string = "登陆15天后最高可领取50元话费卡！(" + i.FGlobal.SIGN_INFO.signDay + "/15)";
this.mCollect.active = this.mProbablyPro.progress >= 1 && !i.FGlobal.SIGN_INFO.isLongSign;
if (i.FGlobal.SIGN_INFO.isLongSign) {
this.mCollectNo.active = !1;
this.mCollectAl.active = !0;
} else {
this.mCollectNo.active = !this.mCollect.active;
this.mCollectAl.active = !1;
}
}
};
e.prototype.clickSign = function() {
0 == i.FGlobal.SIGN_INFO.signDay ? FSDK.openVideo("sign", this.signSuc, this) : this.signSuc();
};
e.prototype.alSign = function() {
FSDK.showToast("今日已签到！");
};
e.prototype.collectGray = function() {
FSDK.showToast("登陆15天后最高可得50元话费卡！");
};
e.prototype.collectSuc = function() {
FSDK.showToast("该奖励已领取！");
};
e.prototype.signSuc = function() {
if (i.FGlobal.SIGN_INFO.signDay <= 7) {
if (!i.FGlobal.SIGN_INFO.isSign) {
i.FGlobal.SIGN_INFO.isSign = 1;
i.FGlobal.SIGN_INFO.signDay += 1;
FSDK.saveData("SIGN_INFO", i.FGlobal.SIGN_INFO);
FSDK.setCredit("hf", FConfig.FSDK_CONF.SIGN_CONF[i.FGlobal.SIGN_INFO.signDay - 1], FConfig.CREDIT_FROM.SIGN_IN);
this.mHfNum.string = FConfig.FSDK_CONF.SIGN_CONF[i.FGlobal.SIGN_INFO.signDay - 1] + "元";
a.FPanelManager.open_eff(this.mHfNode);
}
} else if (!i.FGlobal.SIGN_INFO.isLongSign) {
i.FGlobal.SIGN_INFO.isLongSign = 1;
FSDK.saveData("SIGN_INFO", i.FGlobal.SIGN_INFO);
FSDK.setCredit("hf", 10, FConfig.CREDIT_FROM.SIGN_IN);
this.mHfNum.string = "10元";
a.FPanelManager.open_eff(this.mHfNode);
}
this.mCollect.active = this.mBtnSign.active = this.mBtnSignFree.active = !1;
this.mSignAl.active = !0;
this.mCollectAl.active = !0;
this.setSign();
};
e.prototype.clickDui = function() {
if (this.mBtnGet.interactable) FSDK.showToast("系统错误，请稍后再试"); else {
var t = (100 - i.FGlobal.USER_INFO.credit_hf).toFixed(2);
FSDK.showToast("还差" + t + "元可提现，继续游戏可获得更多话费哦");
}
};
e.prototype.closePage = function() {
a.FPanelManager.close_eff(this.node, !0);
};
e.prototype.on_S2C_pg_user_cnt = function(t) {
if (!t.err && t.data) {
FLog.normal("一共有多少人啊  ", t.data);
if (t.data.info && t.data.info[FNetWorkConfig.data.code]) {
var e = t.data.info[FNetWorkConfig.data.code], o = Math.floor(.09 * e + 534);
this.mHfTip.string = "(已有" + [ o ] + "位玩家成功兑换)";
}
}
};
e.prototype.closeHfPage = function() {
a.FPanelManager.close_eff(this.mHfNode);
};
e.prototype.updateCredit = function() {
this.initData();
};
r([ u(cc.Node) ], e.prototype, "mSignNode", void 0);
r([ u(cc.Node) ], e.prototype, "mProbaly", void 0);
r([ u(cc.Label) ], e.prototype, "mCredit_hf", void 0);
r([ u(cc.ProgressBar) ], e.prototype, "mPro", void 0);
r([ u(cc.Button) ], e.prototype, "mBtnGet", void 0);
r([ u(cc.Label) ], e.prototype, "mHfTip", void 0);
r([ u(cc.Node) ], e.prototype, "mBtnSign", void 0);
r([ u(cc.Node) ], e.prototype, "mBtnSignFree", void 0);
r([ u(cc.Node) ], e.prototype, "mSignAl", void 0);
r([ u(cc.Node) ], e.prototype, "mCollect", void 0);
r([ u(cc.Node) ], e.prototype, "mCollectAl", void 0);
r([ u(cc.ProgressBar) ], e.prototype, "mProbablyPro", void 0);
r([ u(cc.Label) ], e.prototype, "mProbablyLab", void 0);
r([ u(cc.Node) ], e.prototype, "mHfNode", void 0);
r([ u(cc.Label) ], e.prototype, "mHfNum", void 0);
r([ u(cc.Node) ], e.prototype, "mCollectNo", void 0);
r([ u(cc.Sprite) ], e.prototype, "mIcon", void 0);
r([ u(cc.Label) ], e.prototype, "mTitle", void 0);
return e = r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"../FNetWork/FSocketSend": "FSocketSend"
} ],
FSocketSend: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4c7f5lpeEdBL6LOfTlEqgUW", "FSocketSend");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../FModel/FGlobal");
(function(t) {
t.C2S_reg_login = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_reg_login);
};
t.C2S_update_credit = function(t, e, o) {
void 0 === t && (t = 1);
void 0 === e && (e = "");
void 0 === o && (o = null);
ProtocolCode.C2S_update_credit.data.change = Math.floor(t);
ProtocolCode.C2S_update_credit.data.from = e;
ProtocolCode.C2S_update_credit.data.detail = "";
e = e.replace(" ", "_");
ProtocolCode.C2S_update_credit.data.conf_pos = null != o ? [ "credit", e, o ] : [ "credit", e ];
n.FGlobal.NetWork.request(ProtocolCode.C2S_update_credit);
};
t.C2S_update_coin = function(t, e, o, r) {
void 0 === t && (t = "");
void 0 === e && (e = 1);
void 0 === o && (o = "");
void 0 === r && (r = null);
ProtocolCode.C2S_update_coin.data.name = t;
ProtocolCode.C2S_update_coin.data.change = e;
ProtocolCode.C2S_update_coin.data.from = o;
ProtocolCode.C2S_update_coin.data.detail = "";
o = o.replace(" ", "_");
ProtocolCode.C2S_update_coin.data.conf_pos = null != r ? [ t, o, r ] : [ t, o ];
n.FGlobal.NetWork.request(ProtocolCode.C2S_update_coin);
};
t.C2S_heartbeat = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_heartbeat);
};
t.C2S_preference = function(t, e, o) {
void 0 === t && (t = "");
void 0 === e && (e = null);
void 0 === o && (o = !0);
ProtocolCode.C2S_preference.data.key = t;
ProtocolCode.C2S_preference.data.value = e;
ProtocolCode.C2S_preference.data.safe = o;
n.FGlobal.NetWork.request(ProtocolCode.C2S_preference);
};
t.C2S_preferences = function(t) {
ProtocolCode.C2S_preferences.data = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_preferences);
};
t.C2S_sign = function() {
ProtocolCode.C2S_info.data.fields = [ "daily_check_in" ];
n.FGlobal.NetWork.request(ProtocolCode.C2S_info);
};
t.C2S_daily_check_in = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_daily_check_in);
};
t.C2S_gift_country = function() {
n.FGlobal.NetWork.request(ProtocolCode.C2S_gift_country);
};
t.C2S_invited = function(t) {
void 0 === t && (t = "");
ProtocolCode.C2S_invited.data.code = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_invited);
};
t.C2S_gift_list = function(t) {
void 0 === t && (t = "US");
ProtocolCode.C2S_gift_list.data.country = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_gift_list);
};
t.C2S_trans = function(t, e, o, r) {
void 0 === r && (r = "credit");
ProtocolCode.C2S_trans.data.id = t;
ProtocolCode.C2S_trans.data.trans_email = e;
ProtocolCode.C2S_trans.data.mobile = o;
ProtocolCode.C2S_trans.data.trans_type = r;
n.FGlobal.NetWork.request(ProtocolCode.C2S_trans);
};
t.C2S_broadcast = function(t) {
ProtocolCode.C2S_broadcast.data.msg = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_broadcast);
};
t.C2S_adwords = function(t) {
ProtocolCode.C2S_adwords.data.referrer = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_adwords);
FLog.normal("这个就是回调发送   ", t);
};
t.C2S_app_promo_task = function(t, e) {
ProtocolCode.C2S_app_promo_task.data.name = t;
ProtocolCode.C2S_app_promo_task.data.action = e;
n.FGlobal.NetWork.request(ProtocolCode.C2S_app_promo_task);
};
t.C2S_trans_history = function(t) {
ProtocolCode.C2S_trans_history.data.type = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_trans_history);
};
t.C2S_ad_event = function(t, e) {
ProtocolCode.C2S_ad_event.data.sdk = t;
ProtocolCode.C2S_ad_event.data.type = e;
n.FGlobal.NetWork.request(ProtocolCode.C2S_ad_event);
};
t.C2S_info = function(t) {
void 0 === t && (t = []);
ProtocolCode.C2S_info.data.fields = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_info);
};
t.C2S_add_counters = function(t, e) {
ProtocolCode.C2S_add_counters.data.name = t;
ProtocolCode.C2S_add_counters.data.cnt = e;
n.FGlobal.NetWork.request(ProtocolCode.C2S_add_counters);
};
t.C2S_pg_user_cnt = function(t) {
void 0 === t && (t = []);
ProtocolCode.C2S_pg_user_cnt.data.pgs = t;
n.FGlobal.NetWork.request(ProtocolCode.C2S_pg_user_cnt);
};
})(o.FSocketSend || (o.FSocketSend = {}));
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
FToLoad: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "df649Ki7KRMeq9Z+aOVaNyR", "FToLoad");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dt = 0;
e.se = 0;
e.label_se = null;
e.label_msg = null;
e.mCircle = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.onEnable = function() {};
e.prototype.setMsg = function(t, e, o) {
void 0 === t && (t = "Loading");
void 0 === e && (e = 0);
void 0 === o && (o = !1);
this.label_msg.string = t;
this.label_se.string = e + "se";
this.se = e;
o && this.se ? this.label_se.node.active = !0 : this.label_se.node.active = !1;
};
e.prototype.update = function(t) {
this.mCircle.angle += 3;
this.mCircle.angle >= 360 && (this.mCircle.angle = 0);
this.dt += t;
if (this.dt >= 1) {
this.dt = 0;
if (this.se > 0) {
this.se -= 1;
this.label_se.string = this.se + "se";
if (this.se <= 0) {
this.se = 0;
this.label_se.node.active = !1;
this.node.parent = null;
}
}
}
};
r([ s(cc.Label) ], e.prototype, "label_se", void 0);
r([ s(cc.Label) ], e.prototype, "label_msg", void 0);
r([ s(cc.Node) ], e.prototype, "mCircle", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
FTransItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "686154DQkFKfoQV2ofuhFEt", "FTransItem");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mAmount = null;
e.mAl = null;
e.mIng = null;
e.getTrans = null;
e.data = null;
e.taskNum = 0;
e.alNum = 0;
return e;
}
e.prototype.onDisable = function() {
cc.director.off(FEventID.GET_TRANS, this.on_GET_TRANS, this);
};
e.prototype.onEnable = function() {
cc.director.on(FEventID.GET_TRANS, this.on_GET_TRANS, this);
};
e.prototype.setData = function(t, e, o, n) {
this.alNum = n;
this.taskNum = o;
this.getTrans = e;
this.data = t;
this.mAmount.string = t.amount + "元";
this.mAl.active = this.mIng.active = !1;
};
e.prototype.openGetTransPage = function() {
if (a.FGlobal.USER_INFO.WX_INFO.openid) if (this.mIng.active) FSDK.showToast("该红包正在申请中"); else if (this.mAl.active) FSDK.showToast("该红包已提现"); else {
i.FPanelManager.open_eff(this.getTrans.node);
this.getTrans.setData(this.data.amount, this.taskNum, this.data.id, this.alNum);
} else FSDK.showWxLogin(this.getTrans.node.parent, function() {}, this);
};
e.prototype.setStatus = function(t) {
this.mAl.active = 1 == t;
this.mIng.active = 1 != t;
};
e.prototype.on_GET_TRANS = function(t) {
if (t == this.data.id) {
this.mAl.active = !1;
this.mIng.active = !0;
}
};
r([ l(cc.Label) ], e.prototype, "mAmount", void 0);
r([ l(cc.Node) ], e.prototype, "mAl", void 0);
r([ l(cc.Node) ], e.prototype, "mIng", void 0);
return e = r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager"
} ],
FTransPage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e3913AivhFHZoDYPla72GW9", "FTransPage");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FPanelManager"), a = t("../FModel/FGlobal"), s = t("./FGetTrans"), c = t("./FTransItem"), l = t("../FNetWork/FSocketSend"), u = cc._decorator, p = u.ccclass, d = u.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mRedCredit = null;
e.mRedTip = null;
e.mPro = null;
e.mGetRed = null;
e.itemNode = null;
e.mFGetTrans = null;
e.taskNum = 0;
e.alNum = 0;
return e;
}
e.prototype.onLoad = function() {
this.node.setContentSize(cc.winSize);
this.mGetRed.node.on(cc.Node.EventType.TOUCH_END, this.clickGetRed, this);
};
e.prototype.onEnable = function() {
cc.director.on(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
cc.director.on(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
l.FSocketSend.C2S_pg_user_cnt([ FNetWorkConfig.data.code ]);
};
e.prototype.onDisable = function() {
cc.director.off(FEventID.S2C_trans_history, this.on_S2C_trans_history, this);
cc.director.off(FEventID.S2C_pg_user_cnt, this.on_S2C_pg_user_cnt, this);
};
e.prototype.clickGetRed = function() {
if (this.mGetRed.interactable) FSDK.showToast("系统错误，请稍后再试"); else {
var t = (100 - a.FGlobal.USER_INFO.credit_red).toFixed(2);
FSDK.showToast("还差" + t + "元可提现，继续游戏可获得更多红包哦");
}
};
e.prototype.setTask = function(t) {
this.taskNum = t;
this.initData();
};
e.prototype.initData = function() {
this.mRedCredit.string = a.FGlobal.USER_INFO.credit_red.toFixed(2) + "元";
this.mPro.progress = a.FGlobal.USER_INFO.credit_red / 100;
this.mGetRed.interactable = this.mPro.progress >= 1;
for (var t = 0; t < this.itemNode.childrenCount; t++) if (FConfig.conf.redeem_task.task.length > t) {
this.itemNode.children[t].active = !0;
this.itemNode.children[t].getComponent(c.default).setData(FConfig.conf.redeem_task.task[t], this.mFGetTrans, this.taskNum, this.alNum);
} else this.itemNode.children[t].active = !1;
l.FSocketSend.C2S_trans_history("task");
};
e.prototype.on_S2C_trans_history = function(t) {
if (t && t.data && t.data.records) {
for (var e = t.data.records, o = 0; o < e.length; o++) for (var n = 0; n < this.itemNode.childrenCount; n++) e[o].custom_id == this.itemNode.children[n].getComponent(c.default).data.id && this.itemNode.children[n].getComponent(c.default).setStatus(e[o].status);
FLog.normal("这个是什么  ", e);
}
};
e.prototype.on_S2C_pg_user_cnt = function(t) {
if (!t.err && t.data) {
FLog.normal("一共有多少人啊  ", t.data);
if (t.data.info && t.data.info[FNetWorkConfig.data.code]) {
var e = t.data.info[FNetWorkConfig.data.code];
this.alNum = Math.floor(.01 * e + 66);
this.mRedTip.string = "(已有" + [ this.alNum ] + "位玩家成功提现)";
}
}
};
e.prototype.closePage = function() {
i.FPanelManager.close_eff(this.node, !0);
};
r([ d(cc.Label) ], e.prototype, "mRedCredit", void 0);
r([ d(cc.Label) ], e.prototype, "mRedTip", void 0);
r([ d(cc.ProgressBar) ], e.prototype, "mPro", void 0);
r([ d(cc.Button) ], e.prototype, "mGetRed", void 0);
r([ d(cc.Node) ], e.prototype, "itemNode", void 0);
r([ d(s.default) ], e.prototype, "mFGetTrans", void 0);
return e = r([ p ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal",
"../FModel/FPanelManager": "FPanelManager",
"../FNetWork/FSocketSend": "FSocketSend",
"./FGetTrans": "FGetTrans",
"./FTransItem": "FTransItem"
} ],
FUpdateCredit: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a057bxKWepIIaBjFaleXU1t", "FUpdateCredit");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../FModel/FGlobal"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.type = "";
return e;
}
e.prototype.onEnable = function() {
this.setCredit();
FSDK.addCreditListen(this.updateCredit, this);
};
e.prototype.onDisable = function() {
FSDK.removeCreditListen(this.updateCredit, this);
};
e.prototype.openPage = function() {
this.type;
};
e.prototype.updateCredit = function(t) {
this.setCredit();
};
e.prototype.setCredit = function() {
switch (this.type) {
case "red":
this.node.getChildByName("num").getComponent(cc.Label).string = i.FGlobal.USER_INFO.credit_red.toFixed(2);
break;

case "hf":
this.node.getChildByName("num").getComponent(cc.Label).string = i.FGlobal.USER_INFO.credit_hf.toFixed(2);
}
};
r([ c(cc.String) ], e.prototype, "type", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../FModel/FGlobal": "FGlobal"
} ],
GameController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b3d82RSe+pEz6WsoUjpl4eK", "GameController");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./Ball"), a = t("./Barrier"), s = t("../common/EventConstants"), c = t("../common/Events"), l = t("../common/PopupConstants"), u = t("../common/User"), p = t("../common/Utils"), d = cc._decorator, f = d.ccclass, h = d.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabBarriers = [];
e.prefabFunBarriers = [];
e.prefabRedAndCost = [];
e.prefabBall = null;
e.balls = [];
e.barriers = [];
e.lbScoreCount = null;
e.lsScoreCount = null;
e.ballCount = null;
e.guide = null;
e.gameStatus = !0;
e.takeAim = null;
e.ballParent = null;
e.barrierParent = null;
e.recordBall = [];
e.recordBarrier = [];
e.recycleBallsCount = 1;
e.barrierScoreRate = 0;
e.score = 0;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
};
e.prototype.init = function() {
if (u.user.getRecordBarrier().length > 0) {
this.score = u.user.scoreCurrter;
this.guide.zIndex = 10;
this.guide.active = !1;
this.initRecordBarrier();
this.initBalls();
this.gameStatus = !0;
this.recycleBallsCount = u.user.getRecordBall().length;
} else {
this.startBall();
this.gameStatus = !0;
this.score = 0;
this.recycleBallsCount = 10;
this.barrierScoreRate = 0;
this.guide.zIndex = 10;
this.guide.active = !1;
u.user.scoreCurrter = 0;
this.setBallCount(this.balls.length);
for (var t = 0; t < 3; t++) this.startBerrier(t);
}
this.lsScoreCount.string = "历史高数:" + u.user.scoreHistory;
this.guideShow();
};
e.prototype.initRecordBarrier = function() {
for (var t = 0; t < u.user.getRecordBarrier().length; t++) {
for (var e = void 0, o = 0; o < this.prefabRedAndCost.length; o++) this.prefabRedAndCost[o].name == u.user.getRecordBarrier()[t].name && (e = cc.instantiate(this.prefabRedAndCost[o]).getComponent(a.default));
for (var n = 0; n < this.prefabFunBarriers.length; n++) this.prefabFunBarriers[n].name == u.user.getRecordBarrier()[t].name && (e = cc.instantiate(this.prefabFunBarriers[n]).getComponent(a.default));
for (var r = 0; r < this.prefabBarriers.length; r++) this.prefabBarriers[r].name == u.user.getRecordBarrier()[t].name && (e = cc.instantiate(this.prefabBarriers[r]).getComponent(a.default));
if (e) {
e.node.parent = this.barrierParent;
e.node.position = u.user.getRecordBarrier()[t].pos;
e.node.angle = u.user.getRecordBarrier()[t].angle;
e.node.scale = u.user.getRecordBarrier()[t].scale;
e.setScore(u.user.getRecordBarrier()[t].score);
this.barriers.push(e);
}
}
};
e.prototype.initBalls = function() {
for (var t = 0; t < u.user.getRecordBall().length; t++) {
var e = cc.instantiate(this.prefabBall).getComponent(i.default);
e.node.parent = this.ballParent;
e.node.position = cc.v2(-99, 510);
e.node.scale = u.user.getRecordBall()[t].scale;
e.setHurt(u.user.getRecordBall()[t].hurt);
this.balls.push(e);
}
};
e.prototype.startBall = function() {
for (;this.balls.length < 10; ) {
var t = cc.instantiate(this.prefabBall);
t.parent = this.ballParent;
t.position = cc.v2(-99, 510);
this.balls.push(t.getComponent(i.default));
this.setBallCount(this.balls.length);
}
this.setRecordBalls();
};
e.prototype.startBerrier = function(t) {
var e = -300 + this.getRandomSpace();
u.user.setCurrentLine(1);
for (;e < 300; ) {
var o = void 0;
if (u.user.passGuide || !u.user.getIsRedAndCost() && u.user.getAwardNumber() < 30) if (u.user.passGuide) {
o = cc.instantiate(this.prefabRedAndCost[0]).getComponent(a.default);
u.user.setIsRedAndCost(!0);
u.user.setAwardNumber();
u.user.passGuide = !1;
} else {
var n = p.utils.randomInt([ 1, 10 ]);
if (u.user.getAwardNumber(), n <= 3) {
o = cc.instantiate(this.prefabRedAndCost[0]).getComponent(a.default);
u.user.setIsRedAndCost(!0);
u.user.setAwardNumber();
} else if (u.user.getAwardNumber(), 1 == n) {
o = cc.instantiate(this.prefabRedAndCost[0]).getComponent(a.default);
u.user.setIsRedAndCost(!0);
u.user.setAwardNumber();
} else {
if (1 == p.utils.randomInt([ 1, 2 ]) && (!this.isAllBallBig() || this.balls.length <= 50) && u.user.getCurrentProp() < 3) {
o = cc.instantiate(this.prefabFunBarriers[Math.floor(Math.random() * this.prefabFunBarriers.length)]).getComponent(a.default);
this.isAllBallBig() && (o = cc.instantiate(this.prefabFunBarriers[0]));
50 === this.balls.length && (o = cc.instantiate(this.prefabFunBarriers[1]));
var r = u.user.getCurrentProp();
r += 1;
u.user.setCurrentProp(r);
} else o = cc.instantiate(this.prefabBarriers[Math.floor(Math.random() * this.prefabBarriers.length)]).getComponent(a.default);
}
} else {
if (1 == (n = p.utils.randomInt([ 1, 2 ])) && (!this.isAllBallBig() || this.balls.length <= 50) && u.user.getCurrentProp() < 3) {
o = cc.instantiate(this.prefabFunBarriers[Math.floor(Math.random() * this.prefabFunBarriers.length)]).getComponent(a.default);
this.isAllBallBig() && (o = cc.instantiate(this.prefabFunBarriers[0]));
50 === this.balls.length && (o = cc.instantiate(this.prefabFunBarriers[1]));
r = u.user.getCurrentProp();
r += 1;
u.user.setCurrentProp(r);
} else o = cc.instantiate(this.prefabBarriers[Math.floor(Math.random() * this.prefabBarriers.length)]).getComponent(a.default);
}
o.node.parent = this.barrierParent;
o.node.position = cc.v2(e, 100 * t - 360);
o.lbScore && (o.node.angle = 360 * -Math.random());
e += this.getRandomSpace();
this.barriers.push(o);
this.setRecordBarriers();
}
};
e.prototype.onTouchStart = function() {
this.guideHide();
};
e.prototype.onTouchEnd = function(t) {
if (this.isRecycleFinished()) {
this.node.getChildByName("take-aim").getComponent(cc.Graphics).clear();
this.recycleBallsCount = 0;
var e = this.node.convertToNodeSpaceAR(t.getLocation());
this.shootBalls(e.sub(cc.v2(0, 350)));
}
};
e.prototype.addBall = function(t) {
var e = cc.instantiate(this.prefabBall);
e.parent = this.ballParent;
e.position = t;
this.balls.push(e.getComponent(i.default));
this.setBallCount(this.balls.length);
this.setRecordBalls();
};
e.prototype.bigBall = function(t) {
t.scale = 1.5;
t.getComponent(i.default).setHurt(2);
};
e.prototype.setBallCount = function(t) {
this.ballCount.string = "球数：" + t.toString();
};
e.prototype.shootBalls = function(t) {
console.log("this.gameStatus", this.gameStatus);
if (this.gameStatus) for (var e = function(e) {
var n = o.balls[e];
o.scheduleOnce(function() {
this.shootBall(n, t);
}.bind(o), .2 * e);
}, o = this, n = 0; n < this.balls.length; n++) e(n);
};
e.prototype.shootBall = function(t, e) {
t.rigidBody.active = !1;
var o = [];
o.push(t.node.position);
o.push(cc.v2(0, 435));
o.push(cc.v2(0, 350));
t.node.runAction(cc.sequence(cc.cardinalSplineTo(.5, o, .5), cc.callFunc(function() {
t.rigidBody.active = !0;
t.rigidBody.linearVelocity = e.mul(10);
})));
};
e.prototype.recycleBall = function() {
var t = this;
this.recycleBallsCount++;
this.barrierScoreRate += .1;
if (this.isRecycleFinished()) {
for (var e = function(e) {
var n = o.barriers[e];
if (0 == o.barriers[e].getScore() && ("red" === n.node.name || "hf" === n.node.name)) {
c.events.emit(s.GameEvents.OPENVDIEO, o.barriers[e]);
return {
value: void 0
};
}
cc.tween(n.node).by(.1, {
position: cc.v2(0, 100)
}).call(function() {
t.setRecordBarriers();
n.node.position.y;
n.node.position.y > 300 && t.gameOver();
}).start();
}, o = this, n = 0; n < this.barriers.length; n++) {
var r = e(n);
if ("object" == typeof r) return r.value;
}
this.setRecordBalls();
this.addBarriers();
}
};
e.prototype.isVideoAddBarriers = function() {
for (var t = this, e = function(e) {
var n = o.barriers[e];
cc.tween(n.node).by(.1, {
position: cc.v2(0, 100)
}).call(function() {
n.node.position.y;
n.node.position.y > 300 && t.gameOver();
}).start();
}, o = this, n = 0; n < this.barriers.length; n++) e(n);
this.addBarriers();
};
e.prototype.isRecycleFinished = function() {
return this.recycleBallsCount == this.balls.length;
};
e.prototype.addBarriers = function() {
var t = -270 + this.getRandomSpace();
u.user.setCurrentLine();
for (var e = !1; t < 270; ) {
var o = void 0;
if (!u.user.getIsRedAndCost() && u.user.getAwardNumber() < 30) {
var n = p.utils.randomInt([ 1, 10 ]);
if (u.user.getAwardNumber() < 15 && n <= 3) {
o = cc.instantiate(this.prefabRedAndCost[Math.floor(Math.random() * this.prefabRedAndCost.length)]).getComponent(a.default);
u.user.setIsRedAndCost(!0);
u.user.setAwardNumber();
} else if (u.user.getAwardNumber() < 30 && 1 == n) {
o = cc.instantiate(this.prefabRedAndCost[Math.floor(Math.random() * this.prefabRedAndCost.length)]).getComponent(a.default);
u.user.setIsRedAndCost(!0);
u.user.setAwardNumber();
} else o = cc.instantiate(this.prefabBarriers[Math.floor(Math.random() * this.prefabBarriers.length)]).getComponent(a.default);
} else {
n = p.utils.randomInt([ 1, 2 ]);
if (!e && 1 == n && (!this.isAllBallBig() || this.balls.length <= 50) && u.user.getCurrentProp() < 3) {
o = cc.instantiate(this.prefabFunBarriers[Math.floor(Math.random() * this.prefabFunBarriers.length)]).getComponent(a.default);
this.isAllBallBig() && (o = cc.instantiate(this.prefabFunBarriers[0]));
50 === this.balls.length && (o = cc.instantiate(this.prefabFunBarriers[1]));
e = !0;
var r = u.user.getCurrentProp();
r += 1;
u.user.setCurrentProp(r);
} else o = cc.instantiate(this.prefabBarriers[Math.floor(Math.random() * this.prefabBarriers.length)]).getComponent(a.default);
}
o.node.parent = this.barrierParent;
o.node.position = cc.v2(t, -360);
o.lbScore && (o.node.angle = 360 * -Math.random());
t += this.getRandomSpace();
this.barriers.push(o);
this.setRecordBarriers();
}
};
e.prototype.shake = function(t) {
var e = cc.shake(.7, 1, 1);
t.runAction(e);
};
e.prototype.addScore = function() {
this.score++;
u.user.scoreCurrter = this.score;
this.score > u.user.scoreHistory && (this.lsScoreCount.string = "历史高数:" + this.score);
this.lbScoreCount.string = "分数：" + this.score.toString();
};
e.prototype.setBarrierScore = function() {
var t = 0, e = u.user.getLumpData().numWeight, o = u.user.getLumpData().weight;
t = u.user.scoreCurrter <= 100 ? p.utils.randomByWeight(e, o[0]) : u.user.scoreCurrter <= 300 ? p.utils.randomByWeight(e, o[1]) : u.user.scoreCurrter <= 500 ? p.utils.randomByWeight(e, o[2]) : u.user.scoreCurrter <= 1e3 ? p.utils.randomByWeight(e, o[3]) : u.user.scoreCurrter <= 2e3 ? p.utils.randomByWeight(e, o[4]) : u.user.scoreCurrter <= 5e3 ? p.utils.randomByWeight(e, o[5]) : u.user.scoreCurrter <= 1e4 ? p.utils.randomByWeight(e, o[6]) : p.utils.randomByWeight(e, o[7]);
return p.utils.randomInt(t);
};
e.prototype.removeBarrier = function(t, e) {
var o = this.barriers.indexOf(t);
if (-1 != o) {
t.node.removeFromParent(!1);
this.barriers.splice(o, 1);
}
};
e.prototype.getRandomSpace = function() {
return 80 + 200 * Math.random();
};
e.prototype.randomNum = function(t, e) {
var o = e - t, n = Math.random();
return t + Math.floor(n * o);
};
e.prototype.guideShow = function() {
this.guide.active = !0;
this.guide.getChildByName("handMove").getComponent(cc.Animation).play("handMove");
};
e.prototype.guideHide = function() {
this.guide.active = !1;
this.guide.getChildByName("handMove").getComponent(cc.Animation).stop("handMove");
};
e.prototype.gameOver = function() {
this.gameStatus = !1;
var t = this.score.toString();
c.events.emit(s.GameEvents.SHOW_POPUP, l.PopUpName.GAMEOVER, null, t);
};
e.prototype.restartInit = function() {
this.score = 0;
this.recycleBallsCount = 10;
this.barrierScoreRate = 0;
this.guide.zIndex = 10;
this.guide.active = !1;
u.user.scoreCurrter = 0;
this.lsScoreCount.string = "历史高数:" + u.user.scoreHistory;
this.balls = [];
this.ballParent.removeAllChildren();
this.barriers = [];
this.barrierParent.removeAllChildren();
this.setBallCount(this.balls.length);
this.startBall();
for (var t = 0; t < 3; t++) this.startBerrier(t);
this.guideShow();
this.gameStatus = !0;
};
e.prototype.resurgence = function() {
for (var t = 0; t < this.barriers.length; t++) {
var e = this.barriers[0];
if (e.node.position.y >= 0) {
console.log("第" + (t + 1) + "个:", e.node.position.y);
this.removeBarrier(e);
}
}
this.guide.zIndex = 10;
this.guide.active = !1;
this.guideShow();
this.gameStatus = !0;
};
e.prototype.isAllBallBig = function() {
for (var t = 0, e = 0; e < this.balls.length; e++) {
if (2 == this.balls[e].getHurt()) {
t++;
this.setRecordBalls();
}
}
return t === this.balls.length;
};
e.prototype.setRecordBarriers = function() {
for (var t = [], e = 0; e < this.barriers.length; e++) {
var o = this.barriers[e];
console.log(o.node.name);
var n = {
name: o.node.name,
pos: o.node.position,
scale: o.node.scale,
angle: o.node.angle,
score: o.getScore()
};
t.push(n);
}
u.user.setRecordBarrier(t);
};
e.prototype.setRecordBalls = function() {
for (var t = [], e = 0; e < this.balls.length; e++) {
var o = this.balls[e];
console.log(o.node.name);
var n = {
hurt: o.getHurt(),
scale: o.node.scale
};
t.push(n);
}
u.user.setRecordBall(t);
};
r([ h(cc.Prefab) ], e.prototype, "prefabBarriers", void 0);
r([ h(cc.Prefab) ], e.prototype, "prefabFunBarriers", void 0);
r([ h(cc.Prefab) ], e.prototype, "prefabRedAndCost", void 0);
r([ h(cc.Prefab) ], e.prototype, "prefabBall", void 0);
r([ h(i.default) ], e.prototype, "balls", void 0);
r([ h(a.default) ], e.prototype, "barriers", void 0);
r([ h(cc.Label) ], e.prototype, "lbScoreCount", void 0);
r([ h(cc.Label) ], e.prototype, "lsScoreCount", void 0);
r([ h(cc.Label) ], e.prototype, "ballCount", void 0);
r([ h(cc.Node) ], e.prototype, "guide", void 0);
r([ h() ], e.prototype, "gameStatus", void 0);
r([ h(cc.Node) ], e.prototype, "takeAim", void 0);
r([ h(cc.Node) ], e.prototype, "ballParent", void 0);
r([ h(cc.Node) ], e.prototype, "barrierParent", void 0);
return e = r([ f ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User",
"../common/Utils": "Utils",
"./Ball": "Ball",
"./Barrier": "Barrier"
} ],
GameOver: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3d886/vbpNA5K99retBrpQy", "GameOver");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/Actions"), a = t("../common/User"), s = t("../common/Events"), c = t("../common/EventConstants"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.resurgenceNode = null;
e.restartNode = null;
e.currentLabel = null;
e.historyLabel = null;
return e;
}
e.prototype.start = function() {
i.actions.breatheEff(this.resurgenceNode);
i.actions.breatheEff(this.restartNode);
this.currentLabel.string = a.user.scoreCurrter.toString();
a.user.scoreCurrter > a.user.scoreHistory && (a.user.scoreHistory = a.user.scoreCurrter);
this.historyLabel.string = a.user.scoreHistory.toString();
};
e.prototype.resurgenceHandle = function() {
c.GameConstant.game.resurgence();
s.events.emit(c.GameEvents.HIDE_ALL_POPUP);
};
e.prototype.restartHandle = function() {
c.GameConstant.game.restartInit();
s.events.emit(c.GameEvents.HIDE_ALL_POPUP);
};
r([ p(cc.Node) ], e.prototype, "resurgenceNode", void 0);
r([ p(cc.Node) ], e.prototype, "restartNode", void 0);
r([ p(cc.Label) ], e.prototype, "currentLabel", void 0);
r([ p(cc.Label) ], e.prototype, "historyLabel", void 0);
return e = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/Actions": "Actions",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/User": "User"
} ],
Gpool: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "96421FsqSdA1qZcrBy/olTd", "Gpool");
var n = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(r, i) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
i(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? r(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var o, n, r, i, a = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 
0) : n.next) && !(r = r.call(n, i[1])).done) return r;
(n = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < r[1]) {
a.label = r[1];
r = i;
break;
}
if (r && a.label < r[2]) {
a.label = r[2];
a.ops.push(i);
break;
}
r[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = e.call(t, a);
} catch (t) {
i = [ 6, t ];
n = 0;
} finally {
o = r = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
}, i = new (function() {
function t() {
this._PoolPath = "pool";
this._InitCommon = 0;
this._InitEach = {};
this._InitFunctionName = "setData";
this._allPool = new Map();
this._allPrefab = new Map();
}
t.prototype.init = function(t) {
var e = this;
void 0 === t && (t = {});
for (var o = 0, n = Object.keys(t); o < n.length; o++) {
var r = n[o];
"undefined" != typeof this["_" + r] && (this["_" + r] = t[r]);
}
cc.loader.loadResDir(this._PoolPath, cc.Prefab, function(t, o, n) {
for (var r = 0, i = n; r < i.length; r++) {
var a = i[r].split("/");
e._initPool(a[a.length - 1]);
}
});
};
t.prototype._initPool = function(t) {
return n(this, void 0, void 0, function() {
var e = this;
return r(this, function(o) {
switch (o.label) {
case 0:
return [ 4, new Promise(function(o, n) {
cc.loader.loadRes(e._PoolPath + "/" + t, cc.Prefab, function(r, i) {
if (r) {
console.error(r.message || r);
n(r);
} else {
for (var a = new cc.NodePool(), s = e._InitEach[t] || e._InitCommon, c = 0; c < s; c++) a.put(cc.instantiate(i));
e._allPool.set(t, a);
e._allPrefab.set(t, i);
o();
}
});
}) ];

case 1:
o.sent();
return [ 2 ];
}
});
});
};
t.prototype.get = function(t, e) {
void 0 === e && (e = {});
return n(this, void 0, void 0, function() {
var o, n, i, a, s = this;
return r(this, function(r) {
switch (r.label) {
case 0:
o = e.isGetInfo, n = e.setData;
i = this._allPool.get(t);
a = this._allPrefab.get(t);
return i && a ? [ 2, this._get(t, o, n) ] : [ 3, 1 ];

case 1:
return [ 4, this._initPool(t) ];

case 2:
r.sent();
return [ 2, new Promise(function(e, r) {
e(s._get(t, o, n));
}) ];
}
});
});
};
t.prototype._get = function(t, e, o) {
return n(this, void 0, void 0, function() {
var n = this;
return r(this, function(r) {
return [ 2, new Promise(function(r, i) {
var a = n._allPool.get(t), s = n._allPrefab.get(t);
if (e) r(s.data); else {
var c = null;
c = a.size() > 0 ? a.get() : cc.instantiate(s);
if (o) {
var l = c.getComponent(t);
if (l && l[n._InitFunctionName]) {
l.__preload && 0 == l._isOnLoadCalled && l.__preload();
l[n._InitFunctionName](o);
}
}
r(c);
}
}) ];
});
});
};
t.prototype.put = function(t) {
this._allPool.get(t.name).put(t);
};
t.prototype.destroyPool = function(t) {
this._allPool.get(t).clear();
};
t.prototype.destroyAllPool = function() {
this._allPool.forEach(function(t) {
return t.clear();
});
this._allPool.clear();
this._allPrefab.clear();
};
t.prototype.testPool = function() {
return this._allPool;
};
return t;
}())();
window.GPool = i;
cc._RF.pop();
}, {} ],
IPXWidgetComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "44478iH1kNMdotPkYev8w8S", "IPXWidgetComponent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = i.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isPortait = !0;
e.left = 0;
e.right = 0;
e.top = 0;
e.bottom = 0;
e.widget = null;
return e;
}
e.prototype.onLoad = function() {
this.widget = this.node.getComponent(cc.Widget);
this.checkWidgetStatus();
};
e.prototype.checkWidgetStatus = function() {
if (!this.widget) return console.error("节点:", this.node.name, "WidgetComponent 未绑定widget组件");
var t = cc.winSize;
this.isPortait ? Math.ceil(9 * t.height / 16) > t.width - 2 && Math.ceil(9 * t.height / 16) < t.width + 2 || this.setWidgetValue() : Math.ceil(9 * t.width / 16) > t.height - 2 && Math.ceil(9 * t.width / 16) < t.height + 2 || this.setWidgetValue();
};
e.prototype.setWidgetValue = function() {
this.widget.isAlignBottom && (this.widget.bottom = this.bottom);
this.widget.isAlignTop && (this.widget.top = this.top);
this.widget.isAlignLeft && (this.widget.left = this.left);
this.widget.isAlignRight && (this.widget.right = this.right);
};
r([ s(cc.Boolean) ], e.prototype, "isPortait", void 0);
r([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "left", void 0);
r([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "right", void 0);
r([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "top", void 0);
r([ s({
type: cc.Float,
tooltip: "需要勾选对应widget组件对齐的方向方可生效"
}) ], e.prototype, "bottom", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
Loading: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9d770FyhYFP7ZBFwGHM4YXH", "Loading");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
}, i = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(r, i) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
i(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? r(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, r, i, a = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 
0) : n.next) && !(r = r.call(n, i[1])).done) return r;
(n = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < r[1]) {
a.label = r[1];
r = i;
break;
}
if (r && a.label < r[2]) {
a.label = r[2];
a.ops.push(i);
break;
}
r[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = e.call(t, a);
} catch (t) {
i = [ 6, t ];
n = 0;
} finally {
o = r = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../common/EventConstants"), c = t("../game/GameController"), l = t("../common/User"), u = t("../common/Actions"), p = cc._decorator, d = p.ccclass, f = p.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.game = null;
e.main = null;
e.ui = null;
e.logoNode = null;
e.loadingLabel = null;
e.progressBar = null;
e.verLabel = null;
e.icon = null;
e._updateTotal = 0;
e._isReady = !1;
return e;
}
e.prototype.onLoad = function() {
s.GameConstant.game = this.game.getComponent(c.default);
u.actions.breatheEff(this.logoNode);
};
e.prototype.update = function() {
if (this._updateTotal < 3) {
this._updateTotal++;
3 === this._updateTotal && this.init();
}
if (this.progressBar.progress >= 1 && this._isReady) try {
this._isReady = !1;
this.node.active = !1;
this.main.active = !0;
this.ui.active = !0;
} catch (t) {
console.log(t);
}
if (!(this.progressBar.progress >= 1)) {
this.progressBar.progress += .01;
this.loadingLabel.string = Math.floor(100 * this.progressBar.progress) + "%";
}
};
e.prototype.init = function() {
return i(this, void 0, Promise, function() {
var t = this;
return a(this, function(e) {
this.initSDK().then(function(e) {
t.initUser();
}).then(function(e) {
t.runGame();
});
return [ 2 ];
});
});
};
e.prototype.initSDK = function() {
var t = this;
return new Promise(function(e, o) {
var n = {
ip_release: "wss://api.elswz.toponegames.cn:20212/?pg=acnball",
ip_debug: "wss://test.wps168.com:20212/?pg=acnball",
pg: "com.toponegames.ball",
code: "acnball",
gameName: "acnball",
icon: t.icon,
isDebug: !1,
test_aid: "1"
};
FSDK.init(n, function(o) {
l.user.serverData = o;
console.log("=====>", o);
cc.sys.isBrowser || (t.verLabel.string = "v." + FSDK.getVerInfo().VERSION);
e();
}, t);
});
};
e.prototype.initUser = function() {
var t = this;
return new Promise(function(e, o) {
l.user.load();
l.user.firstGold = l.user.serverData.credit_red;
l.user.secondGold = l.user.serverData.credit_hf;
l.user.serverData.isNextDay && l.user.setAwardNumber(0);
FSDK.setNextDayListen(function() {
l.user.setAwardNumber(0);
}, t);
l.user.serverData.preferences.WX_INFO && l.user.setWX_IFFO(l.user.serverData.preferences.WX_INFO);
e();
});
};
e.prototype.runGame = function() {
var t = this;
return new Promise(function(e, o) {
cc.director.getPhysicsManager().enabled = !0;
cc.director.getPhysicsManager().gravity = cc.v2(0, -1e3);
t._isReady = !0;
e();
});
};
r([ f(cc.Node) ], e.prototype, "game", void 0);
r([ f(cc.Node) ], e.prototype, "main", void 0);
r([ f(cc.Node) ], e.prototype, "ui", void 0);
r([ f(cc.Node) ], e.prototype, "logoNode", void 0);
r([ f(cc.Label) ], e.prototype, "loadingLabel", void 0);
r([ f(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
r([ f(cc.Label) ], e.prototype, "verLabel", void 0);
r([ f(cc.SpriteFrame) ], e.prototype, "icon", void 0);
return e = r([ d ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../common/Actions": "Actions",
"../common/EventConstants": "EventConstants",
"../common/User": "User",
"../game/GameController": "GameController"
} ],
Main: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ce0b2+gmo9H0IxuP87dvY6V", "Main");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/User"), a = t("../common/Actions"), s = t("../common/EventConstants"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mPlayGameBtn = null;
e.mtitle = null;
e.mScoreLabel = null;
e.mGameNode = null;
return e;
}
e.prototype.start = function() {
this.init();
};
e.prototype.init = function() {
a.actions.breatheEff(this.mPlayGameBtn);
a.actions.breatheEff(this.mtitle, .95);
this.updateHighestScore();
};
e.prototype.updateHighestScore = function() {
this.mScoreLabel.string = i.user.scoreHistory.toString();
};
e.prototype.playGameHandle = function() {
this.mGameNode.active = !0;
this.node.active = !1;
s.GameConstant.game.init();
};
r([ u(cc.Node) ], e.prototype, "mPlayGameBtn", void 0);
r([ u(cc.Node) ], e.prototype, "mtitle", void 0);
r([ u(cc.Label) ], e.prototype, "mScoreLabel", void 0);
r([ u(cc.Node) ], e.prototype, "mGameNode", void 0);
return e = r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../common/Actions": "Actions",
"../common/EventConstants": "EventConstants",
"../common/User": "User"
} ],
PopupComponent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2c6b1SMpSpFd7eEYE8zKXIn", "PopupComponent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
}, i = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(r, i) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
i(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? r(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, n, r, i, a = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 
0) : n.next) && !(r = r.call(n, i[1])).done) return r;
(n = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < r[1]) {
a.label = r[1];
r = i;
break;
}
if (r && a.label < r[2]) {
a.label = r[2];
a.ops.push(i);
break;
}
r[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = e.call(t, a);
} catch (t) {
i = [ 6, t ];
n = 0;
} finally {
o = r = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./Events"), c = t("./EventConstants"), l = t("./Actions"), u = t("./AudioConstands"), p = cc._decorator, d = p.ccclass, f = p.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeMask = null;
e.popups = [];
e.list = [];
return e;
}
e.prototype.onLoad = function() {
s.events.on(this.name, this.uuid, c.GameEvents.SHOW_POPUP, this.show, this);
s.events.on(this.name, this.uuid, c.GameEvents.HIDE_POPUP, this.hide, this);
s.events.on(this.name, this.uuid, c.GameEvents.HIDE_ALL_POPUP, this.hideAll, this);
};
e.prototype.show = function(t, e, o, n) {
void 0 === o && (o = null);
void 0 === n && (n = !0);
return i(this, void 0, Promise, function() {
var r, i, p = this;
return a(this, function(a) {
switch (a.label) {
case 0:
return this.list.some(function(e) {
return e === t;
}) ? [ 2 ] : [ 4, this.getPopUpNode(t) ];

case 1:
r = a.sent();
(i = r._components[0]) && o && (i._data = o);
this.node.addChild(r);
l.actions.openPopup(r, function() {
p.nodeMask.active = n;
});
this.list.push(t);
this.checkMaskzIndex();
s.events.emit(c.GameEvents.PLAY_SOUND_EFFECT, u.AudioName.BUTTON);
e && e();
return [ 2 ];
}
});
});
};
e.prototype.hide = function(t) {
if (this.list.length) {
var e = this.list.pop();
this.node.children.forEach(function(t) {
t.name === e && t.removeFromParent();
});
this.checkMaskzIndex();
this.nodeMask.active = this.list.length >= 1;
t && t();
}
};
e.prototype.hideAll = function(t) {
var e = this;
if (this.list.length) {
this.list = [];
this.node.children.forEach(function(t) {
e.nodeMask.name !== t.name && t.removeFromParent();
});
this.nodeMask.active = !1;
t && t();
}
};
e.prototype.getPopUpNode = function(t) {
return i(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.popups.find(function(e) {
return e.name === t;
}) ];

case 1:
return [ 2, e.sent() || this.createPopUpNode(t) ];
}
});
});
};
e.prototype.createPopUpNode = function(t) {
var e = this;
s.events.emit(c.GameEvents.SHOW_LOADING);
return new Promise(function(o, n) {
cc.loader.loadRes("popupPerfab/" + t, cc.Prefab, function(t, r) {
if (t) {
s.events.emit(c.GameEvents.HIDE_LOADING);
n(null);
}
var i = cc.instantiate(r);
e.popups.push(i);
s.events.emit(c.GameEvents.HIDE_LOADING);
o(i);
});
});
};
e.prototype.checkMaskzIndex = function() {
var t = this.node.children;
this.list.forEach(function(e, o) {
t.find(function(t) {
return t.name === e;
}).zIndex = 10 * (o + 1);
});
t.find(function(t) {
return "sprite_mask" === t.name;
}).zIndex = 9 * this.list.length;
};
r([ f(cc.Node) ], e.prototype, "nodeMask", void 0);
return e = r([ d ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"./Actions": "Actions",
"./AudioConstands": "AudioConstands",
"./EventConstants": "EventConstants",
"./Events": "Events"
} ],
PopupConstants: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0e5d8SBz/tOkp+SbhkfgYm4", "PopupConstants");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(t) {
t.SETTING = "node_setting";
t.POWER = "node_power";
t.SUPERPRIZE = "node_superPrize";
t.MISSILE_DEL = "node_missile_del";
t.GAMEOVER = "node_gameOver";
t.WXLOGIN = "node_redLogin";
})(o.PopUpName || (o.PopUpName = {}));
cc._RF.pop();
}, {} ],
Red: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e3136HqcVBMxJ6M4qy8L1YB", "Red");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/User"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.closeBtnNode = null;
e.isFree = !1;
e._data = null;
e.award = 0;
return e;
}
e.prototype.onLoad = function() {
FSDK.preloadVideo("red");
};
e.prototype.onEnable = function() {
this.scheduleOnce(function() {});
this.init();
};
e.prototype.init = function() {
this._data || (this.award = i.user.getAward(1));
};
e.prototype.openHandle = function() {
cc.sys.isNative && !this.isFree && FSDK.openVideo("red", function() {
i.user.setIsVideo(!0);
}, this);
};
e.prototype.closeHandle = function() {
i.user.setIsVideo(!0);
};
r([ c(cc.Node) ], e.prototype, "closeBtnNode", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/User": "User"
} ],
Setting: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a75263SdB5P94LAduKv4F/O", "Setting");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/Events"), a = t("../common/EventConstants"), s = t("../common/AudioConstands"), c = t("../common/User"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.switchSpriteFrame = [];
e.musicSprite = null;
e.shakeSprite = null;
e.verLabel = null;
e.IDLabel = null;
e._isMute = !0;
e._isShake = !0;
return e;
}
e.prototype.onEnable = function() {
this._isMute = c.user.IsMute;
this._isShake = c.user.IsShake;
this.updateAudioView();
this.updateShakeView();
cc.sys.isNative || (this.verLabel.string = "v.1.0.0");
};
e.prototype.updateAudioView = function() {
this._isMute ? this.musicSprite.spriteFrame = this.switchSpriteFrame[0] : this.musicSprite.spriteFrame = this.switchSpriteFrame[1];
};
e.prototype.updateShakeView = function() {
this._isShake ? this.shakeSprite.spriteFrame = this.switchSpriteFrame[0] : this.shakeSprite.spriteFrame = this.switchSpriteFrame[1];
};
e.prototype.switchMusicHandle = function() {
i.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, s.AudioName.BUTTON);
this._isMute = !this._isMute;
c.user.IsMute = this._isMute;
this.updateAudioView();
i.events.emit(a.GameEvents.SWITCH_MUTE);
};
e.prototype.switchShakeHandle = function() {
i.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, s.AudioName.BUTTON);
this._isShake = !this._isShake;
c.user.IsShake = this._isShake;
this.updateShakeView();
i.events.emit(a.GameEvents.SWITCH_SNAKE);
};
e.prototype.homeHandle = function() {
cc.find("Canvas/game").active = !1;
cc.find("Canvas/main").active = !0;
i.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, s.AudioName.BUTTON);
i.events.emit(a.GameEvents.HIDE_ALL_POPUP);
};
e.prototype.closePopupHandle = function() {
if (cc.sys.isNative) ; else {
i.events.emit(a.GameEvents.PLAY_SOUND_EFFECT, s.AudioName.BUTTON);
i.events.emit(a.GameEvents.HIDE_ALL_POPUP);
}
};
r([ p(cc.SpriteFrame) ], e.prototype, "switchSpriteFrame", void 0);
r([ p(cc.Sprite) ], e.prototype, "musicSprite", void 0);
r([ p(cc.Sprite) ], e.prototype, "shakeSprite", void 0);
r([ p(cc.Label) ], e.prototype, "verLabel", void 0);
r([ p(cc.Label) ], e.prototype, "IDLabel", void 0);
return e = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/AudioConstands": "AudioConstands",
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/User": "User"
} ],
Shake: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "10459WBjgFGz4Vp4nzFnyeS", "Shake");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = cc._decorator, i = (r.ccclass, r.property, function(t) {
n(e, t);
function e(e, o, n) {
var r = t.call(this) || this;
cc.ActionInterval.prototype.constructor.call(r);
r.duration = e;
r.initWithDuration(e, o, n);
return r;
}
e.prototype.getRandomStrength = function(t, e) {
return Math.random() * (e - t + 1) + t;
};
e.prototype.update = function(t) {
var e = this.getRandomStrength(-this.nodeShakeStrengthX, this.nodeShakeStrengthX) * t, o = this.getRandomStrength(-this.nodeShakeStrengthY, this.nodeShakeStrengthY) * t;
this.target.setPosition(this.nodeInitialPos.add(cc.v2(e, o)));
};
e.prototype.initWithDuration = function(t, e, o) {
if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
this.nodeShakeStrengthX = e;
this.nodeShakeStrengthY = "undefined" == o ? e : o;
return !0;
}
return !1;
};
e.prototype.startWithTarget = function(t) {
cc.ActionInterval.prototype.startWithTarget.call(this, t);
this.nodeInitialPos = t.getPosition();
};
e.prototype.stop = function() {
this.target.setPosition(this.nodeInitialPos);
};
return e;
}(cc.ActionInterval));
cc.shake = function(t, e, o) {
return new i(t, e, o);
};
cc._RF.pop();
}, {} ],
TakeAim: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ff6d5E03utFs7Ot/obBciPr", "TakeAim");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/EventConstants"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.arraw = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
};
e.prototype.onTouchMove = function(t) {
if (i.GameConstant.game.isRecycleFinished()) {
var e = cc.v2(0, 446), o = this.node.convertToNodeSpaceAR(t.getLocation());
if (!(o.y > e.y)) {
var n = this.node.getComponent(cc.Graphics), r = o.sub(e), a = r.mag(), s = r.normalize().mul(40), c = e.clone();
n.fillColor = cc.color(78, 72, 125, 255);
c.addSelf(s);
c.addSelf(s);
n.clear();
for (;a > 40; ) {
n.circle(c.x, c.y, 5);
n.fill();
c.addSelf(s);
a -= 40;
}
var l = e.sub(o), u = Math.atan2(l.y, l.x) / Math.PI * 180;
this.arraw.node.angle = u;
}
}
};
r([ c(cc.Sprite) ], e.prototype, "arraw", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants"
} ],
TipsCompoent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "73753CnXFZK0oVgKJHnTj8q", "TipsCompoent");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./Events"), a = t("./EventConstants"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeTips = null;
e.labelTips = null;
return e;
}
e.prototype.onLoad = function() {
i.events.on(this.name, this.uuid, a.GameEvents.SHOW_TIPS, this.show, this);
};
e.prototype.show = function(t) {
var e = this;
this.nodeTips.stopAllActions();
this.nodeTips.active = !0;
this.labelTips.string = t;
this.nodeTips.y = -50;
this.nodeTips.opacity = 0;
this.nodeTips.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, cc.v2(0, 0)), cc.fadeIn(.15)), cc.delayTime(1), cc.spawn(cc.moveTo(.3, cc.v2(0, 50)), cc.fadeOut(.15)), cc.callFunc(function() {
e.clear();
})));
};
e.prototype.clear = function() {
this.nodeTips.stopAllActions();
this.nodeTips.active = !1;
this.nodeTips.y = -50;
this.labelTips.string = "";
};
r([ l(cc.Node) ], e.prototype, "nodeTips", void 0);
r([ l(cc.Label) ], e.prototype, "labelTips", void 0);
return e = r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants",
"./Events": "Events"
} ],
UIManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3151bb3sstE+JoEUHR0D4w8", "UIManager");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../common/User"), a = t("../common/Events"), s = t("../common/EventConstants"), c = t("../common/PopupConstants"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.first_Label = null;
e.second_Label = null;
e.wxLoginAndSetting = [];
e.FSDKNode = null;
return e;
}
e.prototype.onLoad = function() {
this.initEvents();
this.init();
};
e.prototype.onDestroy = function() {
this.removeEvents();
};
e.prototype.initEvents = function() {
a.events.on(this.name, this.uuid, s.GameEvents.UPDATAUI, this.updateIcon, this);
};
e.prototype.removeEvents = function() {
a.events.removeListener(this.name, s.GameEvents.UPDATAUI);
};
e.prototype.init = function() {
this.first_Label.string = i.user.firstGold.toFixed(2);
this.second_Label.string = i.user.secondGold.toFixed(2);
this.updateWXlogin();
};
e.prototype.updateIcon = function() {
this.first_Label.string = i.user.firstGold.toFixed(2);
this.second_Label.string = i.user.secondGold.toFixed(2);
this.updateWXlogin();
};
e.prototype.updateWXlogin = function() {
if (i.user.getWX_INFO) {
this.wxLoginAndSetting[0].active = !0;
this.wxLoginAndSetting[1].active = !1;
} else {
this.wxLoginAndSetting[0].active = !1;
this.wxLoginAndSetting[1].active = !0;
}
};
e.prototype.firstHandle = function() {
FSDK.showTransPage(this.FSDKNode, i.user.scoreHistory);
};
e.prototype.secondHandle = function() {
FSDK.showSignPage(this.FSDKNode);
};
e.prototype.settingHandle = function() {
a.events.emit(s.GameEvents.SHOW_POPUP, c.PopUpName.SETTING);
};
e.prototype.wxLoginHandle = function() {
FSDK.showWxLogin(this.FSDKNode, function(t) {
i.user.setWX_IFFO = t;
}, this);
};
r([ p(cc.Label) ], e.prototype, "first_Label", void 0);
r([ p(cc.Label) ], e.prototype, "second_Label", void 0);
r([ p(cc.Node) ], e.prototype, "wxLoginAndSetting", void 0);
r([ p(cc.Node) ], e.prototype, "FSDKNode", void 0);
return e = r([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/EventConstants": "EventConstants",
"../common/Events": "Events",
"../common/PopupConstants": "PopupConstants",
"../common/User": "User"
} ],
User: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7595bKhJSpPe5XBvRn6mXsj", "User");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./Utils"), r = function() {
function t() {
this.mGCoin = 0;
this.mPCoin = 0;
this.historyScore = 0;
this.isGuide = !0;
this._severData = null;
this.userInfo = null;
this.currentScore = 0;
this.awardNumber = 0;
this.isGetAward = !1;
this.isVideo = !1;
this.currentLine = 0;
this.isRedAndCost = !1;
this.currentProp = 0;
this.recordBarrier = [];
this.recordBall = [];
this.lumpData = {
weight: [ [ 850, 100, 50, 0, 0, 0, 0, 0 ], [ 0, 850, 100, 50, 0, 0, 0, 0 ], [ 0, 0, 850, 100, 50, 0, 0, 0 ], [ 0, 0, 0, 850, 100, 50, 0, 0 ], [ 0, 0, 0, 0, 850, 100, 50, 0 ], [ 0, 0, 0, 0, 0, 850, 100, 50 ], [ 0, 0, 0, 0, 0, 0, 800, 200 ], [ 0, 0, 0, 0, 0, 0, 0, 1e3 ] ],
numWeight: [ [ 1, 10 ], [ 11, 20 ], [ 21, 50 ], [ 51, 100 ], [ 101, 200 ], [ 201, 300 ], [ 301, 500 ], [ 501, 1e3 ] ],
tager: [ 100, 300, 500, 1e3, 2e4, 5e4, 1e4 ],
color: [ [ "#a4a4a4", "#c8c8c8", "#b3b3b3" ], [ "#2b3f85", "#6a7bb5", "#5d6eab" ], [ "#1d8b7f", "#5bbaaa", "#3aad83" ], [ "#e3a538", "#ffdc7c", "#fdc04a" ], [ "#cc7918", "#ffb22e", "#e48d2c" ], [ "#693f92", "#a077c6", "#8e5cbc" ], [ "#e31e3f", "#f86475", "#ff4463" ] ],
redArr: [ [ 1, 3 ], [ 1, 2 ], [ .5, 1 ], [ .1, 1 ], [ .1, .5 ], [ .05, .1 ], [ .01, .1 ], [ .01, .05 ], [ .01, .03 ], [ .01, .02 ], [ .01, .01 ] ],
costArr: [ [ 1, 3 ], [ 1, 2 ], [ .2, .8 ], [ .05, .2 ], [ .01, .02 ], [ .01, .01 ] ]
};
this.status = {
isMute: !0,
isShake: !0,
isSound: !0
};
}
t.prototype.load = function() {
var t = cc.sys.localStorage.getItem("user_pinball");
if (t) {
t = JSON.parse(t);
for (var e in t) this[e] = t[e];
} else if (t = this._severData.preferences) for (var e in t) this[e] = t[e];
};
t.prototype.save = function(t) {
void 0 === t && (t = 0);
var e = {
status: this.status,
mGCoin: this.mGCoin,
mPCoin: this.mPCoin,
historyScore: this.historyScore,
isGuide: this.isGuide,
userInfo: this.userInfo,
currentScore: this.currentScore,
awardNumber: this.awardNumber,
isGetAward: this.isGetAward,
isRedAndCost: this.isRedAndCost,
currentLine: this.currentLine,
currentProp: this.currentProp,
recordBarrier: this.recordBarrier,
recordBall: this.recordBall
};
0 == t ? cc.sys.localStorage.setItem("user_pinball", JSON.stringify(e)) : FSDK.saveData(e);
};
Object.defineProperty(t.prototype, "IsMute", {
get: function() {
return this.status.isMute;
},
set: function(t) {
this.status.isMute = t;
this.save();
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "IsShake", {
get: function() {
return this.status.isShake;
},
set: function(t) {
this.status.isShake = t;
this.save();
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "IsSound", {
get: function() {
return this.status.isSound;
},
set: function(t) {
this.status.isSound = t;
this.save();
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "firstGold", {
get: function() {
return this.mGCoin;
},
set: function(t) {
this.mGCoin = t;
this.save();
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "secondGold", {
get: function() {
return this.mPCoin;
},
set: function(t) {
this.mPCoin = t;
this.save();
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "scoreHistory", {
get: function() {
return this.historyScore;
},
set: function(t) {
this.historyScore = t;
this.save();
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "passGuide", {
get: function() {
return this.isGuide;
},
set: function(t) {
this.isGuide = t;
this.save();
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "serverData", {
get: function() {
return this._severData;
},
set: function(t) {
this._severData = t;
},
enumerable: !0,
configurable: !0
});
t.prototype.getWX_INFO = function() {
return this.userInfo;
};
t.prototype.setWX_IFFO = function(t) {
this.userInfo = t;
this.save();
};
t.prototype.getLumpData = function() {
return this.lumpData;
};
Object.defineProperty(t.prototype, "scoreCurrter", {
get: function() {
return this.currentScore;
},
set: function(t) {
this.currentScore = t;
this.save();
},
enumerable: !0,
configurable: !0
});
t.prototype.getAward = function(t) {
var e = 0;
1 == t ? e = this.firstGold <= 10 ? n.utils.randomFloat(this.getLumpData().redArr[0]) : this.firstGold <= 20 ? n.utils.randomFloat(this.getLumpData().redArr[1]) : this.firstGold <= 30 ? n.utils.randomFloat(this.getLumpData().redArr[2]) : this.firstGold <= 40 ? n.utils.randomFloat(this.getLumpData().redArr[3]) : this.firstGold <= 50 ? n.utils.randomFloat(this.getLumpData().redArr[4]) : this.firstGold <= 60 ? n.utils.randomFloat(this.getLumpData().redArr[5]) : this.firstGold <= 70 ? n.utils.randomFloat(this.getLumpData().redArr[6]) : this.firstGold <= 80 ? n.utils.randomFloat(this.getLumpData().redArr[7]) : this.firstGold <= 90 ? n.utils.randomFloat(this.getLumpData().redArr[8]) : this.firstGold <= 98 ? n.utils.randomFloat(this.getLumpData().redArr[9]) : n.utils.randomFloat(this.getLumpData().redArr[10]) : 2 == t && (e = this.secondGold <= 10 ? n.utils.randomFloat(this.getLumpData().costArr[0]) : this.secondGold <= 20 ? n.utils.randomFloat(this.getLumpData().costArr[1]) : this.secondGold <= 30 ? n.utils.randomFloat(this.getLumpData().costArr[2]) : this.secondGold <= 40 ? n.utils.randomFloat(this.getLumpData().costArr[3]) : this.secondGold <= 50 ? n.utils.randomFloat(this.getLumpData().costArr[4]) : n.utils.randomFloat(this.getLumpData().costArr[5]));
return e;
};
t.prototype.getAwardNumber = function() {
return this.awardNumber;
};
t.prototype.setAwardNumber = function(t) {
if (t) {
this.awardNumber = t;
this.save();
} else {
this.awardNumber += 1;
this.save();
}
};
t.prototype.getIsGetAward = function() {
return this.isGetAward;
};
t.prototype.setIsGetAward = function(t) {
this.isGetAward = t;
this.save();
};
t.prototype.getIsVideo = function() {
return this.isVideo;
};
t.prototype.setIsVideo = function(t) {
this.isVideo = t;
this.save();
};
t.prototype.getCurrentLine = function() {
return this.getCurrentLine;
};
t.prototype.setCurrentLine = function(t) {
if (t) {
this.currentLine = t;
this.save();
} else {
this.currentLine += 1;
this.save();
}
};
t.prototype.getIsRedAndCost = function() {
return this.isRedAndCost;
};
t.prototype.setIsRedAndCost = function(t) {
this.isRedAndCost = t;
this.save();
};
t.prototype.getCurrentProp = function() {
return this.currentProp;
};
t.prototype.setCurrentProp = function(t) {
this.currentProp = t;
this.save();
};
t.prototype.getRecordBarrier = function() {
return this.recordBarrier;
};
t.prototype.setRecordBarrier = function(t) {
this.recordBarrier = t;
this.save();
};
t.prototype.getRecordBall = function() {
return this.recordBall;
};
t.prototype.setRecordBall = function(t) {
this.recordBall = t;
this.save();
};
return t;
}();
o.user = new r();
cc._RF.pop();
}, {
"./Utils": "Utils"
} ],
Utils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d0800FlUfFG3pgsXbp61C3P", "Utils");
var n = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(r, i) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
i(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? r(t.value) : new o(function(e) {
e(t.value);
}).then(a, s);
}
c((n = n.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var o, n, r, i, a = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 
0) : n.next) && !(r = r.call(n, i[1])).done) return r;
(n = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < r[1]) {
a.label = r[1];
r = i;
break;
}
if (r && a.label < r[2]) {
a.label = r[2];
a.ops.push(i);
break;
}
r[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = e.call(t, a);
} catch (t) {
i = [ 6, t ];
n = 0;
} finally {
o = r = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function t() {
this.imgSrcList = [];
}
t.prototype.randomByWeight = function(t, e) {
if (t.length != e.length) return null;
for (var o = 0, n = 0, r = Math.random(), i = e.length - 1; i >= 0; i--) o += e[i];
r *= o;
for (i = e.length - 1; i >= 0; i--) if (r <= (n += e[i])) return t[i];
return null;
};
t.prototype.randomInt = function(t, e) {
if (Array.isArray(t) && "undefined" == typeof e) {
e = t[1];
t = t[0];
}
return Math.floor(Math.random() * (e - t + 1)) + t;
};
t.prototype.randomFloat = function(t, e) {
if (Array.isArray(t) && "undefined" == typeof e) {
e = t[1];
t = t[0];
}
return t + (e - t) * Math.random();
};
t.prototype.random_1To1 = function() {
return this.randomFloat([ 0, 1 ]);
};
t.prototype.clone = function(t) {
return JSON.parse(JSON.stringify(t));
};
t.prototype.positionTransfor = function(t, e) {
return e.convertToNodeSpaceAR(t.parent.convertToWorldSpaceAR(t.position));
};
t.prototype.formatTime = function(t) {
var e = Math.floor(t / 3600), o = Math.floor(t % 3600 / 60), n = t % 60, r = e < 10 ? "0" + e : e, i = o < 10 ? "0" + o : o, a = n < 10 ? "0" + n : n;
return "00" === r ? i + ":" + a : r + ":" + i + ":" + a;
};
t.prototype.getResTexture = function(t) {
return new Promise(function(e, o) {
t ? cc.loader.loadRes("texture/" + t, cc.SpriteFrame, function(t, o) {
if (t) return console.log("loadResTexture error:", t);
e(o);
}) : console.log("getResTexture url is null:");
});
};
t.prototype.loadResTexture = function(t, e, o) {
if (!t) return console.log("loadResTexture url is null");
cc.loader.loadRes("texture/" + t, cc.SpriteFrame, function(t, n) {
if (t) return console.log("loadResTexture error:", t);
if (!e) return console.log("loadResTexture error:", "sprite is null");
if (!e.getMaterial.length) return console.log("getMaterial error:", "sprite is null");
e.spriteFrame = n;
o && o();
});
};
t.prototype.getHeadImg = function(t, e) {
cc.loader.load(t + "?aa=aa.jpg", function(t, o) {
var n = new cc.SpriteFrame(o);
e.spriteFrame = n;
});
};
t.prototype.loadRemoteTexture = function(t, e) {
if (!t) return console.log("loadRemoteTexture url is null");
cc.loader.load({
url: t,
type: "png"
}, function(t, o) {
if (t) return console.log("loadRemoteTexture error:", t);
if (!e) return console.log("loadRemoteTexture error:", "sprite is null");
e.spriteFrame = new cc.SpriteFrame(o);
});
};
t.prototype.setAvatar = function(t, e, o) {
if (e) {
var n = e + "?aa=aa.jpg";
cc.loader.load(n, function(e, n) {
t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n);
o();
});
} else {
this.loadResTexture("acatarGirl", t.getComponent(cc.Sprite));
o();
}
};
t.prototype.getScreenSize = function() {
return new cc.Vec2(cc.winSize.width, cc.winSize.height);
};
t.prototype.randomNum = function(t, e, o) {
var n = e - t, r = o || Math.random();
return t + Math.round(r * n);
};
t.prototype.isContainsDuplicate = function(t) {
var e = new Set(t), o = Array.from(e);
return t.length != o.length;
};
t.prototype.getDate = function() {
var t = new Date();
return t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate();
};
t.prototype.getRandomId = function() {
return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
};
t.prototype.getRandomByArr = function(t) {
return t[Math.floor(Math.random() * t.length + 1) - 1];
};
t.prototype.randomArr = function(t) {
for (var e, o = t.length; o; ) {
var n = Math.floor(Math.random() * o--);
e = [ t[o], t[n] ], t[n] = e[0], t[o] = e[1];
}
};
t.prototype.replaceTxt = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
for (var n = 0; n < e.length; n++) t = t.replace(/\$\{rep\}/, e[n]);
return t;
};
t.prototype.formatDate = function(t, e) {
void 0 === e && (e = "YYYY-mm-dd");
var o, n = {
"Y+": t.getFullYear().toString(),
"m+": (t.getMonth() + 1).toString(),
"d+": t.getDate().toString()
};
for (var r in n) (o = new RegExp("(" + r + ")").exec(e)) && (e = e.replace(o[1], 1 == o[1].length ? n[r] : n[r].padStart(o[1].length, "0")));
return e;
};
t.prototype.secondToFormat = function(t) {
var e = Math.floor(t / 86400), o = Math.floor(t / 3600), n = Math.floor(t / 60 % 60), r = Math.floor(t % 60), i = e.toString() + "天", a = o.toString() + "时", s = n.toString() + "分";
r.toString();
return e > 0 ? i : o > 0 ? a : s;
};
t.prototype.loadAsset = function(t, e, o) {
return n(this, void 0, void 0, function() {
var n;
return r(this, function(r) {
switch (r.label) {
case 0:
r.trys.push([ 0, 4, , 5 ]);
r.label = 1;

case 1:
return t.length ? [ 4, this.loadSub(t.shift()) ] : [ 3, 3 ];

case 2:
r.sent();
return [ 3, 1 ];

case 3:
e && e();
return [ 3, 5 ];

case 4:
n = r.sent();
o && o(n);
return [ 3, 5 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.loadSub = function(t) {
return new Promise(function(e, o) {
cc.loader.downloader.loadSubpackage(t, function(t) {
if (t) return o(t);
e();
});
});
};
t.prototype.isExistArr = function(t, e, o) {
t.forEach(function(t, n) {
-1 == e.indexOf(t) && o.push(t);
});
return o;
};
t.prototype.loadPrefab = function(t, e) {
cc.loader.loadRes("prefab/" + t, cc.Prefab, function(t, o) {
e && e(o);
});
};
t.prototype.quickSort = function(t) {
if (t.length <= 1) return t;
for (var e = Math.floor(t.length / 2), o = t.splice(e, 1)[0], n = [], r = [], i = 0; i < t.length; i++) t[i] < o ? n.push(t[i]) : r.push(t[i]);
return this.quickSort(n).concat([ o ], this.quickSort(r));
};
t.prototype.getEmail = function() {
var t = [ "贤色旧梦", "暧昧与嫉妒", "爱你九妹", "宝贝伴侣", "被你浪费的情感", "天长地久的爱恋", "梦想时分", "心疼自己", "把星星放进口袋里", "软见", "额头", "衣袂翩翩", "凤眸有你", "别太快关灯", "诱惑", "自古", "沐叶清风", "亦世凡华", "繁华落世丶涐许你一抹红颜", "护食女顽童", "挑眉", "缘起", "圈心", "刺激", "红烛", "怀春", "锦妆", "虞心", "扎心", "堇夏", "残年っ", "╭淡妆╮", "笄发醒", "诗沫涵,", "重口味", "悲画扇", "黑名单", "花争发", "小性感", "北仑色", "自轻舟去", "离囚戈", "朝歌夜弦", "年少如梦", "撩情戏浪子", "撩汉实力派", "浪野少女心", "如初", "亡鱼深海花夕拾", "朝拾", "爱笑的女生", "栀晚鸢乱", "凯喵的小鱼鳅", "寻梦旅人", "失意花季少女", "季末°不寂寞", "眉眼心间", "半盏青灯", "偏执与你", "轻烟薄暮", "青橘栀耳", "傲娇萌娃", "往日柔情", "百毒不侵", "谦与谦寻", "初心莫负", "晚点相遇", "紫陌红尘", "嬡.暀苝漂", "纯粹剪爱", "毫无代价", "忧烟殇往", "潇湘夜雨", "倾尽天下", "梦醒时分", "安之若素", "愿君安好", "你好，明天", "莫失莫忘", "孑然一身", "无需善良", "野猪佩琪", "欲言又止", "酷味很正", "人走茶凉", "伴你余生", "随心所欲", "不负遇见", "陪我听风", "等风也等你", "为你上战场", "深拥意中人", "心软脾气大", "野性又迷人", "积攒一身酷", "撩妹一把手", "稳握江山权", "无聊也不聊", "持刀稳情场", "请保管好你随身携带的暧昧", "不努力拿什么给你未来", "誓言只是一时的失言", "听ゝ海哭的声音", "我欠你一个全剧终", "後知後覺", "旧街旧巷等旧人", "离人不回", "北街末雨", "眉眼如初", "雨落无声", "斩尽天下", "半点心", "淑女范", "梦中人", "平常心", "手放开", "孤美人", "刚刚好", "半生缘", "未语淚先流", "你怀里精致的猪猪", "初本ʚɞ", "一只失宠狐阿", "败给可爱", "离人久巷晚秋凉", "故人辞巷抚轻风", "我不是胆小鬼", "感恩旧爱", "恋爱进行曲", "天生傲骨", "是谁牵动了我的心", "山穷水尽更词穷", "淡然气质比天高〃", "几多岁♡", "放我出去", "熱到膨脹", "苍山有井美似空", "搁浅°", "软萌", "路途", "泸沽烟水里的过客", "淡意衬优柔丶", "如人饮水，冷暖自知", "自古空情多余恨", "疏雨萧萧千行泪", "釉色清风", "旧情返航", "烛中泪", "故事久", "毁心人", "失訫人", "少女瘾", "旧心酸", "维她命", "樱花皇后", "影伴人久", "诗人礼献", "叫醒耳朵", "过分着迷", "暖于心ゆ", "轻叹花开", "森蝶呦つ", "桃色玫瑰", "人野性子浪", "酷到不说话", "封刀不再战", "情感贩卖机", "帅哥，请留步", "深拥他入梦", "情动则心痛", "北柠陌寒", "﹎黯淡ヾ", "凸逼娚勃丸", "妳的溫柔╮只許莪擁囿", "含笑九拳", "蹲街丶吐烟圈oοО", "少女梦", "伪高冷", "别凑合", "勿相忘", "几年华", "故辞", "几味吻", "光阴负容颜╮", "TRY，舞台··", "紫色明信片", "一顾倾人城 ”", "眸敛", "搖曳紅塵中", "鹿困森林", "菊花灿烂^", "风月不等闲", "预言与梦", "文艺菇凉好愤青/*", "太阳每天都生气", "木马在旋转", "眉眼冷无情", "往事埋风中", "妩媚给谁看", "迷上男图像", "陪你到世界的尽头", "心若初晴", "姐比特仑苏还纯°", "盛世流光", "为君倾心", "生生世世", "春风乍起", "素年凉音", "逾期守候", "吶次、曖昧", "孤城旧梦", "森陌夏栀", "古城青衣", "孤酒浪友", "旧巷听风", "风穿襟袖 长叹裁红颜", "望不穿秋水//等不回旧人", "守一座空城等一个旧人", "祢若卟惜莪亦卟嗳", "岂能尽如人意但求无愧于心", "踩着棺材跳鬼步", "清泪两行", "酒笙清栀", "孤酒对饮", "余生浪子", "感性在作祟", "若遇你", "假绅士", "按时荒唐", "快快长大", "释怀", "殇旋律", "三個字對不起〆", "愿是你心之王", "擒拿美人心", "顾虑", "像风一样", "惦记", "吧唧你", "只靠听说", "爷，桀骜不驯", "只偏袒你", "你眼中盈盈月", "提笔写情书", "老爹", "笑我庸俗", "如歌", "痴情狗", "感谢经历", "青春别挥霍", "妄叙", "被淹死的鱼", "江东过客", "唯独是你", "只等公子", "安知我意", "怪性笑人.", "圈圈你个叉叉", "劳资独宠一方", "我有想你", "美汉子", "佰仙", "各路角色", "初恋情久", "葵一般的少年", "目的追你", "一杯忘情", "無奈已被傷", "糖不及你甜", "心瘾成病", "撩妹欧巴", "路旁的无奈", "小家伙", "秋北先生", "迷离的眼", "所谓的第三者", "带你回家", "蕝蝂·貨℡", "န情断", "几人难应", "我为自己代言!", "女儿国的男人", "共度余生", "骚年求逆推i", "热心市民", "阳光下的温暖°", "别涉世太深", "命中不缺狗", "梦好", "含笑记下", "有点上瘾", "迷毁少年", "活在当下", "还给你的自由", "多想强吻你", "世中仙人", "闻香识女人", "男优", "我要让情敌当伴郎", "攒一袋星星.", "白云悠悠", "情殇", "有木有妳兜一样.", "红颜醉", "清白野酒", "荒城", "纪年", "呆橘", "青稚", "腻歪", "漓汐", "初遇", "感性", "墨凉", "余醉", "孤刺", "叛逆", "始终不够爱你", "窝囊感情", "粉红色少女", "穿草裙的少女", "迷途", "小时光", "少女的英雄梦", "傲姿", "念旧", "深巷", "你笑在眉眼.", "烟花易冷", "柠栀", "久念", "习惯性依赖", "旧憶", "故事未完", "月竹挽风", "雅痞", "孤身", "凉心", "抬举", "晨曦微暖", "勿忘初心", "死撑", "闲云", "冷眸", "喵喵", "相权美人", "莫爱", "脆弱", "陌殇", "单杀", "傲娇小公主", "薄荷糖丶微凉" ], e = t[Math.floor(Math.random() * t.length)];
return e = e.length > 4 ? e.substring(0, 2) + "***" + e.substring(e.length - 2, e.length) : e.substring(0, 2) + "***";
};
t.prototype.getNormalityNumByRandom = function(t) {
for (var e = 0, o = 0; o < t.length; o++) e += parseInt(t[o]);
var n = Math.floor(Math.random() * e), r = 0;
for (o = 0; o < t.length; o++) if (n < (r += parseInt(t[o]))) return o;
};
return t;
}();
o.utils = new i();
cc._RF.pop();
}, {} ],
WXLogin: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6f48a7dkuJFJ7vx8s/5ezoz", "WXLogin");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.wxLogin = function() {};
e.prototype.closeHandle = function() {};
e.prototype.saveInfo = function(t) {};
return e = r([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
gameStart: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a9a83YFGtdJ6rwkJ6Y9ES+f", "gameStart");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {};
e.prototype.firstHandle = function() {};
e.prototype.secondHandle = function() {};
return e = r([ a ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
paomaGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f905b0e1z9A+41ekCpu57EQ", "paomaGame");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./Utils"), a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tAnnounceNode = [];
e.money = [ 1, 5, 10, 20, 50, 100 ];
e.rate = [ 15, 15, 70 ];
e.list = [ "恭喜@收集了100元红包，并成功兑换", "恭喜@收集了100元话费卡，并成功兑换", "恭喜@达成&元红包兑换条件，并成功兑换" ];
return e;
}
e.prototype.init = function() {
var t = i.utils.getEmail(), e = i.utils.getEmail();
this.tAnnounceNode[0].y = 0;
this.tAnnounceNode[1].y = -57;
var o = this.list[i.utils.getNormalityNumByRandom(this.rate)];
o = o.replace("@", t.toString()).replace("&", this.money[Math.floor(Math.random() * this.money.length)].toString());
var n = this.list[i.utils.getNormalityNumByRandom(this.rate)];
n = n.replace("@", e.toString()).replace("&", this.money[Math.floor(Math.random() * this.money.length)].toString());
this.tAnnounceNode[0].getChildByName("label").getComponent(cc.Label).string = o;
this.tAnnounceNode[1].getChildByName("label").getComponent(cc.Label).string = n;
};
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.node.stopAllActions();
this.init();
this.showHorseLamp();
};
e.prototype.showHorseLamp = function() {
var t = this, e = 3 * Math.random() + 2;
cc.tween(this.node).delay(e).call(function() {
cc.tween(t.tAnnounceNode[0]).to(.6, {
position: cc.v2(-284, 57)
}).start();
cc.tween(t.tAnnounceNode[1]).to(.6, {
position: cc.v2(-284, 0)
}).start();
}).delay(.7).call(function() {
var e = t.tAnnounceNode.shift();
e.setPosition(cc.v2(-284, -57));
var o = i.utils.getEmail(), n = t.list[i.utils.getNormalityNumByRandom(t.rate)];
n = n.replace("@", o.toString()).replace("&", t.money[Math.floor(Math.random() * t.money.length)].toString());
e.getChildByName("label").getComponent(cc.Label).string = n;
t.tAnnounceNode.push(e);
t.showHorseLamp();
}).start();
};
r([ c(cc.Node) ], e.prototype, "tAnnounceNode", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./Utils": "Utils"
} ]
}, {}, [ "FLoadingCtrl", "FConfig", "FEventID", "FGlobal", "FLog", "FNative", "FPanelManager", "FSDK", "FSDKModel", "FToLoad", "FLogic", "FNetWork", "FNetWorkConfig", "FNetWorkCtrl", "FProtocolCode", "FSocketSend", "FGetPacket", "FGetTrans", "FMarquee", "FMarqueeSmall", "FMoreIcon", "FMorePanel", "FRedLogin", "FSignPage", "FTransItem", "FTransPage", "FUpdateCredit", "Base64", "ByteArray", "UIManager", "Actions", "AnimationControl", "AudioComponent", "AudioConstands", "Cache", "EventConstants", "Events", "Gpool", "IPXWidgetComponent", "PopupComponent", "PopupConstants", "TipsCompoent", "User", "Utils", "paomaGame", "Ball", "Barrier", "FCionEvent", "GameController", "Shake", "TakeAim", "gameStart", "Loading", "Main", "Cost", "GameOver", "Red", "Setting", "WXLogin" ]);