window.__require = function t(e, o, n) {
function r(c, a) {
if (!o[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!a && p) return p(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return r(e[c][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) r(n[c]);
return r;
}({
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
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./EventConstants"), c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isTouchedGround = !1;
e.rigidBody = null;
e.collider = null;
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
e.push(cc.v2(349, -498));
e.push(cc.v2(338, 608));
e.push(cc.v2(162, 557));
this.node.runAction(cc.sequence(cc.cardinalSplineTo(1, e, .9), cc.callFunc(function() {
this.rigidBody.active = !0;
this.node.group = i.GameEvents.GROUPBALLINRECYCLE;
i.GameConstant.main.recycleBall();
}.bind(this))));
this.isTouchedGround = !1;
}
};
e.prototype.onBeginContact = function(t, e, o) {
"ground" == o.node.name && (this.isTouchedGround = !0);
};
r([ s() ], e.prototype, "isTouchedGround", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants"
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
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./EventConstants"), c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbScore = null;
e.isAddBuffBall = !1;
e.score = 0;
return e;
}
e.prototype.start = function() {
this.lbScore && (this.lbScore.node.rotation = -this.node.rotation);
this.setScore(i.GameConstant.main.setBarrierScore());
this.node.color = cc.color(200, this.randomNum(0, 255), this.randomNum(0, 255), 255);
};
e.prototype.randomNum = function(t, e) {
var o = e - t, n = Math.random();
return t + Math.floor(n * o);
};
e.prototype.setScore = function(t) {
if (this.lbScore) {
this.score = t;
this.lbScore.string = this.score.toString();
}
};
e.prototype.onBeginContact = function(t, e, o) {
if (this.isAddBuffBall) {
i.GameConstant.main.addBall(this.node.position);
i.GameConstant.main.removeBarrier(this);
} else {
i.GameConstant.main.addScore();
if (1 == this.score) i.GameConstant.main.removeBarrier(this); else {
this.setScore(this.score - 1);
i.GameConstant.main.shake(this);
}
}
};
r([ s(cc.Label) ], e.prototype, "lbScore", void 0);
r([ s() ], e.prototype, "isAddBuffBall", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants"
} ],
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
})(o.GameEvents || (o.GameEvents = {}));
var n = function() {
function t() {}
t.main = null;
return t;
}();
o.GameConstant = n;
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
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./EventConstants"), c = t("./MainController"), a = cc._decorator, s = a.ccclass, p = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.game = null;
e.loadingLabel = null;
e.progressBar = null;
return e;
}
e.prototype.onLoad = function() {
this.progressBar = this.node.getChildByName("progressBar").getComponent(cc.ProgressBar);
};
e.prototype.start = function() {
i.GameConstant.main = this.game.getComponent(c.default);
};
e.prototype.palyGame = function() {
this.node.active = !1;
this.game.active = !0;
};
r([ p(cc.Node) ], e.prototype, "game", void 0);
r([ p(cc.Label) ], e.prototype, "loadingLabel", void 0);
return e = r([ s ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants",
"./MainController": "MainController"
} ],
MainController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b3d82RSe+pEz6WsoUjpl4eK", "MainController");
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
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./Ball"), c = t("./Barrier"), a = t("./EventConstants"), s = cc._decorator, p = s.ccclass, u = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefabBarriers = [];
e.prefabBall = null;
e.balls = [];
e.barriers = [];
e.lbScoreCount = null;
e.ballCount = null;
e.guide = null;
e.gameStatus = !0;
e.gameOverMark = null;
e.takeAim = null;
e.recycleBallsCount = 1;
e.barrierScoreRate = 0;
e.score = 0;
return e;
}
e.prototype.onLoad = function() {
cc.director.getPhysicsManager().enabled = !0;
cc.director.getPhysicsManager().gravity = cc.v2(0, -1e3);
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.init();
this.guideShow();
this.addBarriers();
};
e.prototype.init = function() {
this.score = 0;
this.recycleBallsCount = 1;
this.barrierScoreRate = 0;
this.balls[0].node.group = a.GameEvents.GROUPBALLINRECYCLE;
this.gameOverMark.active = !1;
this.gameOverMark.zIndex = 10;
this.guide.zIndex = 10;
this.guide.active = !1;
};
e.prototype.onTouchStart = function() {
this.guideHide();
};
e.prototype.onTouchEnd = function(t) {
if (this.isRecycleFinished()) {
this.node.getChildByName("take-aim").getComponent(cc.Graphics).clear();
this.recycleBallsCount = 0;
var e = this.node.convertTouchToNodeSpaceAR(t.touch);
this.shootBalls(e.sub(cc.v2(0, 420)));
}
};
e.prototype.addBall = function(t) {
var e = cc.instantiate(this.prefabBall).getComponent(i.default);
e.node.parent = this.node;
e.node.position = t;
e.node.group = a.GameEvents.GROUPBALLINGAME;
this.balls.push(e);
this.setBallCount(this.balls.length);
};
e.prototype.setBallCount = function(t) {
this.ballCount.string = "小球数：" + t.toString();
};
e.prototype.shootBalls = function(t) {
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
o.push(cc.v2(0, 420));
t.node.group = a.GameEvents.GROUPBALLINGAME;
t.node.runAction(cc.sequence(cc.cardinalSplineTo(.1, o, .5), cc.callFunc(function() {
t.rigidBody.active = !0;
t.rigidBody.linearVelocity = e.mul(3);
})));
};
e.prototype.recycleBall = function() {
this.recycleBallsCount++;
this.barrierScoreRate += .1;
if (this.isRecycleFinished()) {
for (var t = function(t) {
var o = e.barriers[t];
o.node.runAction(cc.sequence(cc.moveBy(.1, cc.v2(0, 100)), cc.callFunc(function() {
o.node.position.y;
o.node.position.y > 300 && this.gameOver();
}.bind(e))));
}, e = this, o = 0; o < this.barriers.length; o++) t(o);
this.addBarriers();
}
};
e.prototype.isRecycleFinished = function() {
return this.recycleBallsCount == this.balls.length;
};
e.prototype.addBarriers = function() {
for (var t = -270 + this.getRandomSpace(); t < 270; ) {
var e = cc.instantiate(this.prefabBarriers[Math.floor(Math.random() * this.prefabBarriers.length)]).getComponent(c.default);
e.node.parent = this.node;
e.node.position = cc.v2(t, -410);
e.lbScore && (e.node.rotation = 360 * Math.random());
t += this.getRandomSpace();
this.barriers.push(e);
}
};
e.prototype.shake = function(t) {};
e.prototype.addScore = function() {
this.score++;
this.lbScoreCount.string = "分数：" + this.score.toString();
};
e.prototype.setBarrierScore = function() {
return Math.floor(this.randomNum(1 + 2 * this.barrierScoreRate, 5 + 3 * this.barrierScoreRate));
};
e.prototype.removeBarrier = function(t) {
var e = this.barriers.indexOf(t);
if (-1 != e) {
t.node.removeFromParent(!1);
this.barriers.splice(e, 1);
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
e.prototype.gameStart = function() {
cc.director.loadScene("game");
};
e.prototype.gameOver = function() {
this.gameStatus = !1;
this.gameOverMark.active = !0;
this.gameOverMark.getChildByName("score").getComponent(cc.Label).string = "得分：" + this.score.toString();
};
r([ u(cc.Prefab) ], e.prototype, "prefabBarriers", void 0);
r([ u(cc.Prefab) ], e.prototype, "prefabBall", void 0);
r([ u(i.default) ], e.prototype, "balls", void 0);
r([ u(c.default) ], e.prototype, "barriers", void 0);
r([ u(cc.Label) ], e.prototype, "lbScoreCount", void 0);
r([ u(cc.Label) ], e.prototype, "ballCount", void 0);
r([ u(cc.Node) ], e.prototype, "guide", void 0);
r([ u() ], e.prototype, "gameStatus", void 0);
r([ u(cc.Node) ], e.prototype, "gameOverMark", void 0);
r([ u(cc.Node) ], e.prototype, "takeAim", void 0);
return e = r([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./Ball": "Ball",
"./Barrier": "Barrier",
"./EventConstants": "EventConstants"
} ],
Shake: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0da85MkRY1M5q2z85048bKl", "Shake");
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
}();
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, i = (r.ccclass, r.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.ctor = function(t, e, o) {
this.initWithDuration(t, e, o);
};
e.prototype.initWithDuration = function(t, e, o) {
this.initWithDuration.call(this, t);
this._strength_x = e;
this._strength_y = o;
return !0;
};
e.prototype.rangeRand = function(t, e) {
return Math.random() * (e - t) + t;
};
e.prototype.update = function() {
var t = this.rangeRand(-this._strength_x, this._strength_x), e = this.rangeRand(-this._strength_y, this._strength_y);
this.getTarget().setPosition(t + this._initial_x, e + this._initial_y);
};
e.prototype.startWithTarget = function(t) {
this.startWithTarget.call(this, t);
this._initial_x = t.x;
this._initial_y = t.y;
};
e.prototype.stop = function() {
this.getTarget().setPosition(new cc.Vec2(this._initial_x, this._initial_y));
this.stop.call(this);
};
return e;
}(cc.ActionInterval));
o.default = i;
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
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./EventConstants"), c = cc._decorator, a = c.ccclass, s = c.property, p = function(t) {
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
if (i.GameConstant.main.isRecycleFinished()) {
var e = cc.v2(0, 446), o = this.node.convertTouchToNodeSpaceAR(t.touch);
if (!(o.y > e.y)) {
var n = this.node.getComponent(cc.Graphics), r = o.sub(e), c = r.mag(), a = r.normalize().mul(40), s = e.clone();
n.fillColor = cc.color(255, 255, 255, 150);
s.addSelf(a);
s.addSelf(a);
n.clear();
for (;c > 40; ) {
n.circle(s.x, s.y, 5);
n.fill();
s.addSelf(a);
c -= 40;
}
var p = e.sub(o), u = Math.atan2(p.y, p.x) / Math.PI * 180;
this.arraw.node.angle = u;
}
}
};
r([ s(cc.Sprite) ], e.prototype, "arraw", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./EventConstants": "EventConstants"
} ],
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
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, a = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("click", this.gameStart, this);
};
e.prototype.gameStart = function() {
cc.director.loadScene("game");
};
return e = r([ c ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ]
}, {}, [ "Ball", "Barrier", "EventConstants", "Loading", "MainController", "Shake", "TakeAim", "gameStart" ]);