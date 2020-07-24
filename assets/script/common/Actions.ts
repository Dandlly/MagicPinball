/**
 * 简单动作集合
 */
class Actions {
    public tweenToPos(flagNode: cc.Node, tagerPos: cc.Vec2, time: number = 0.5, cb?: () => void) {
        cc.tween(flagNode)
            .to(time, { position: tagerPos, scale: 0.5, opacity: 180 })
            .call(() => {
                if (cb) {
                    cb();
                }
            })
            .start()
    }

    /**
     * 呼吸
     * @param flagNode 播放节点
     * @param shirnk 缩放最小值 默认0.9
     * @param time 时间,默认0.5秒
     */
    public breatheEff(flagNode: cc.Node, shirnk: number = 0.9, time: number = .5) {
        flagNode.stopAllActions();
        cc.tween(flagNode)
            .repeatForever(
                cc.tween()
                    .to(time, { scale: shirnk })
                    .to(time, { scale: 1 })
            )
            .start()
    }

    /**
     * 弹窗打开效果
     * @param flagNode 播放节点
     * @param cb 是否需要回调
     */
    public openPopup(flagNode: cc.Node, cb?: () => void): void {
        flagNode.scale = 0;
        let scaleTo = 1;
        if (cc.winSize.width / 720 < 1) {
            scaleTo = cc.winSize.width / 720;
        }
        cc.tween(flagNode)
            .to(.2, { scale: scaleTo }, { easing: 'backOut' })
            .call(() => {
                if (cb) {
                    cb();
                }
            })
            .start()
    }

    /**
     * 弹窗关闭效果
     * @param flagNode 播放节点
     * @param cb 是否需要回调
     */
    public closePopup(flagNode: cc.Node, cb?: () => void): void {
        cc.tween(flagNode)
            .to(.2, { scale: 0 }, { easing: 'backIn' })
            .call(() => {
                if (cb) {
                    cb();
                }
            })
            .start()
    }

    /**
     * 弹出效果
     * @param flagNode 播放节点
     * @param time 时间 默认时间为0.3
     */
    public popOut(flagNode: cc.Node, time: number = .3) {
        flagNode.scale = 0;
        cc.tween(flagNode)
            .to(time, { scale: 1 }, { easing: 'backOut' })
            .start()
    }

    /**
     * 弹回效果
     * @param flagNode 播放节点
     * @param time 时间 默认时间为0.3
     */
    public popIn(flagNode: cc.Node, time: number = .3) {
        cc.tween(flagNode)
            .to(time, { scale: 0 }, { easing: 'backIn' })
            .start()
    }

    /**
     * 晃动
     * @param flagNode 播放节点
     * @param time 时间 默认为0.2
     * @param range 晃动角度 默认为10
     */
    public rockAction(flagNode: cc.Node, time: number = 0.02, range: number = 10) {
        cc.tween(flagNode)
            .by(time, { angle: range })
            .by(time, { angle: -2 * range })
            .by(time * 0.8, { angle: 2 * range * 0.8 })
            .by(time * 0.6, { angle: -2 * range * 0.6 })
            .by(time * 0.4, { angle: 2 * range * 0.4 })
            .to(time * 0.2, { angle: 0 })
            .start()
    }

    /**
     * 从屏幕外进入 
     * @param typeA 方向 上右下左
     * @param winWidth 指定宽度
     * @param winHeight 指定高度
     * @param delTime 时间
     */
    public getMoveInScreenActive(flagNode: cc.Node, typeA: number, winWidth: number, winHeight: number, delTime: number) {
        switch (typeA) {
            case 0:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(0, -winHeight) })
                    .start()
                return cc.moveBy(delTime, 0, -winHeight);
            case 1:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(-winHeight, 0) })
                    .start()
                return cc.moveBy(delTime, -winWidth, 0);
            case 2:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(0, -winHeight) })
                    .start()
                return
            case 3:
                cc.tween(flagNode)
                    .by(delTime, { position: cc.v2(winHeight, 0) })
                    .start()
                return
        }
    }

    /**
     * Adds cion move
     * @param _root 金币父节点(kong)
     * @param _item 金币节点
     * @param _start 
     * @param _end 
     * @param [_cb] 
     */
    public async addCionMove(_root: cc.Node, _item: string, _start: cc.Vec2, _end: cc.Vec2, _cb?: Function, isStar: boolean = false): Promise<void> {
        let _dis: number = Math.sqrt(Math.pow((_start.x - _end.x), 2) + Math.pow((_start.y - _end.y), 2));
        // // 贝塞尔
        // let _speed: number = _dis / 80 * 0.05;

        _root.zIndex = 100;

        let element;
        element = await GPool.get(_item);
        element.scale = 1.1;
        element.position = _start;
        element.opacity = 255;

        let _parent = cc.callFunc(() => {
            if (_cb) _cb();
            if (isStar) {
                GPool.get("star").then((mNode: cc.Node) => {
                    mNode.position = _end;
                    mNode.parent = cc.find("Canvas/UINode/Anim");
                    mNode.getComponent("StarEnd").init();
                })
            }
            GPool.put(element);
        });
        let time = Math.random() * 0.8;

        let x = -200 + Math.floor(Math.random() * 401);
        let height = 100 + Math.floor(Math.random() * 101);
        // let y = _start.y + Math.floor(Math.random() * 10);
        let _action = cc.sequence(
            // // 贝塞尔
            // cc.spawn(
            //     cc.fadeIn(0.1),
            //     cc.moveBy(0.1, cc.v2(utils.randomNum(-100, 100), utils.randomNum(-100, 100))).easing(cc.easeOut(1.5)),
            //     cc.scaleTo(_speed, 1)
            // ),
            // cc.delayTime(utils.randomNum(1, 100) / 1000 + 0.1),
            // cc.bezierTo(_speed, _bezier).easing(cc.easeIn(1.5)),
            cc.jumpTo(time, cc.v2(x, 0), height, 1),
            cc.spawn(cc.moveTo(0.5, _end).easing(cc.easeBackIn()), cc.scaleTo(0.5, 0.8).easing(cc.easeBackIn())),

            _parent,
        );
        element.runAction(_action);
        _root.addChild(element);
    }

    /**
     * 分数往上漂效果
     * @param _root 播放节点
     * @param _start 开始坐标
     * @param _end 结束坐标
     * @param _cb 回调
     */
    public addScroeMove(_root: cc.Node, _start: cc.Vec2, _end: cc.Vec2, _cb?: Function): void {
        _root.zIndex = 100;
        let t = cc.tween;
        t(_root)
            .parallel(
                t().by(.2, { position: cc.v2(0, 20) }),
                t().to(.1, { opacity: 1 })
            )
            .delayTime(.2)
            .to(.2, { position: _end }, { easing: 'backIn' })
            .call(() => {
                if (_cb) _cb();
                _root.destroy();
            })
            .start()
    }

}

export const actions = new Actions();