!(function (e) {
    function webpackJsonpCallback(t) {
        for (var i, o, a = t[0], s = t[1], p = t[2], c = 0, l = []; c < a.length; c++)
            (o = a[c]), Object.prototype.hasOwnProperty.call(r, o) && r[o] && l.push(r[o][0]), (r[o] = 0);
        for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
        for (u && u(t); l.length; ) l.shift()();
        return n.push.apply(n, p || []), checkDeferredModules();
    }
    function checkDeferredModules() {
        for (var e, t = 0; t < n.length; t++) {
            for (var i = n[t], o = !0, a = 1; a < i.length; a++) {
                var u = i[a];
                0 !== r[u] && (o = !1);
            }
            o && (n.splice(t--, 1), (e = __webpack_require__((__webpack_require__.s = i[0]))));
        }
        return e;
    }
    var t = {},
        r = { 0: 0 },
        n = [];
    function __webpack_require__(r) {
        if (t[r]) return t[r].exports;
        var n = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(n.exports, n, n.exports, __webpack_require__), (n.l = !0), n.exports;
    }
    (__webpack_require__.m = e),
        (__webpack_require__.c = t),
        (__webpack_require__.d = function (e, t, r) {
            __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (__webpack_require__.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (__webpack_require__.t = function (e, t) {
            if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
                (__webpack_require__.r(r),
                Object.defineProperty(r, "default", { enumerable: !0, value: e }),
                2 & t && "string" != typeof e)
            )
                for (var n in e)
                    __webpack_require__.d(
                        r,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return r;
        }),
        (__webpack_require__.n = function (e) {
            var t =
                e && e.__esModule
                    ? function getDefault() {
                          return e.default;
                      }
                    : function getModuleExports() {
                          return e;
                      };
            return __webpack_require__.d(t, "a", t), t;
        }),
        (__webpack_require__.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (__webpack_require__.p = "");
    var i = (window.webpackJsonp = window.webpackJsonp || []),
        o = i.push.bind(i);
    (i.push = webpackJsonpCallback), (i = i.slice());
    for (var a = 0; a < i.length; a++) webpackJsonpCallback(i[a]);
    var u = o;
    n.push([53, 1]), checkDeferredModules();
})({
    103: function (e, t, r) {
        "use strict";
        r.r(t);
    },
    53: function (e, t, r) {
        "use strict";
        var n = r(54);
        r(55), r(60), r(71), r(89);
        var i = n(r(92));
        r(48);
        var o = n(r(93)),
            a = Object.create
                ? function (e, t, r, n) {
                      void 0 === n && (n = r),
                          Object.defineProperty(e, n, {
                              enumerable: !0,
                              get: function get() {
                                  return t[r];
                              },
                          });
                  }
                : function (e, t, r, n) {
                      void 0 === n && (n = r), (e[n] = t[r]);
                  },
            u = Object.create
                ? function (e, t) {
                      Object.defineProperty(e, "default", { enumerable: !0, value: t });
                  }
                : function (e, t) {
                      e.default = t;
                  },
            __importStar = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
                return u(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = __importStar(r(104));
        (s.settings.SCALE_MODE = s.SCALE_MODES.NEAREST), r(103);
        var p,
            c = new s.Application({ backgroundColor: 13882323, width: window.innerWidth, height: window.innerHeight }),
            l = c.stage,
            _ = {};
        function centerArrowsAt(e, t) {
            _.up.sprite.position.set(e, t - 8),
                _.down.sprite.position.set(e, t + 8),
                _.left.sprite.position.set(e - 8, t),
                _.right.sprite.position.set(e + 8, t);
        }
        function loadGameAssets() {
            return _loadGameAssets.apply(this, arguments);
        }
        function _loadGameAssets() {
            return (_loadGameAssets = (0, o.default)(
                i.default.mark(function _callee2() {
                    return i.default.wrap(function _callee2$(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return e.abrupt(
                                        "return",
                                        new Promise(function (e, t) {
                                            var r = s.Loader.shared;
                                            r.add("rabbit", "./assets/simpleSpriteSheet.json"),
                                                r.add("buttons", "./assets/buttons.json"),
                                                r.onComplete.once(function () {
                                                    e();
                                                }),
                                                r.onError.once(function () {
                                                    t();
                                                }),
                                                r.load();
                                        })
                                    );
                                case 1:
                                case "end":
                                    return e.stop();
                            }
                    }, _callee2);
                })
            )).apply(this, arguments);
        }
        !(function (e) {
            (e.plus = "plus"),
                (e.minus = "minus"),
                (e.up = "up"),
                (e.down = "down"),
                (e.left = "left"),
                (e.right = "right");
        })(p || (p = {})),
            (window.onload = (0, o.default)(
                i.default.mark(function _callee() {
                    var e;
                    return i.default.wrap(function _callee$(t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), loadGameAssets();
                                case 2:
                                    document.body.appendChild(c.view),
                                        setupControls(),
                                        d(),
                                        (e = getBird()).anchor.set(0.5, 0.5),
                                        e.position.set(35),
                                        l.addChild(e);
                                case 9:
                                case "end":
                                    return t.stop();
                            }
                    }, _callee);
                })
            ));
        var d = function setupResizing() {
            var e = function resize() {
                c.renderer.resize(window.innerWidth, window.innerHeight);
                var e = Math.min(window.innerWidth, window.innerHeight),
                    t = Math.max(window.innerWidth, window.innerHeight);
                c.stage.scale.set(e / 70);
                var r = (70 * t) / e;
                window.innerWidth < window.innerHeight
                    ? (_.plus.sprite.position.set(62, r - 8),
                      _.minus.sprite.position.set(50, r - 8),
                      centerArrowsAt(12, r - 12))
                    : (_.plus.sprite.position.set(r - 8, 8),
                      _.minus.sprite.position.set(r - 8, 20),
                      centerArrowsAt(r - 12, 58));
            };
            window.addEventListener("resize", e), e();
        };
        function setupControls() {
            for (
                var e = function _loop() {
                        var e = r[t];
                        (_[e] = { sprite: new s.Sprite(s.Texture.from(e)), isDown: !1 }),
                            c.stage.addChild(_[e].sprite),
                            (_[e].sprite.interactive = !0),
                            (_[e].sprite.buttonMode = !0),
                            _[e].sprite
                                .on("pointerdown", function () {
                                    _[e].isDown = !0;
                                })
                                .on("pointerup", function () {
                                    _[e].isDown = !1;
                                })
                                .on("pointerupoutside", function () {
                                    _[e].isDown = !1;
                                });
                    },
                    t = 0,
                    r = Object.values(p);
                t < r.length;
                t++
            )
                e();
        }
        function getBird() {
            var e = new s.AnimatedSprite([
                s.Texture.from("birdUp.png"),
                s.Texture.from("birdMiddle.png"),
                s.Texture.from("birdDown.png"),
            ]);
            return (e.loop = !0), (e.animationSpeed = 0.1), e.play(), e.scale.set(3), e;
        }
    },
});
