!(function (e) {
    function webpackJsonpCallback(r) {
        for (var a, o, i = r[0], c = r[1], _ = r[2], l = 0, p = []; l < i.length; l++)
            (o = i[l]), Object.prototype.hasOwnProperty.call(t, o) && t[o] && p.push(t[o][0]), (t[o] = 0);
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        for (u && u(r); p.length; ) p.shift()();
        return n.push.apply(n, _ || []), checkDeferredModules();
    }
    function checkDeferredModules() {
        for (var e, r = 0; r < n.length; r++) {
            for (var a = n[r], o = !0, i = 1; i < a.length; i++) {
                var u = a[i];
                0 !== t[u] && (o = !1);
            }
            o && (n.splice(r--, 1), (e = __webpack_require__((__webpack_require__.s = a[0]))));
        }
        return e;
    }
    var r = {},
        t = { 0: 0 },
        n = [];
    function __webpack_require__(t) {
        if (r[t]) return r[t].exports;
        var n = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, __webpack_require__), (n.l = !0), n.exports;
    }
    (__webpack_require__.m = e),
        (__webpack_require__.c = r),
        (__webpack_require__.d = function (e, r, t) {
            __webpack_require__.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
        }),
        (__webpack_require__.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (__webpack_require__.t = function (e, r) {
            if ((1 & r && (e = __webpack_require__(e)), 8 & r)) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (
                (__webpack_require__.r(t),
                Object.defineProperty(t, "default", { enumerable: !0, value: e }),
                2 & r && "string" != typeof e)
            )
                for (var n in e)
                    __webpack_require__.d(
                        t,
                        n,
                        function (r) {
                            return e[r];
                        }.bind(null, n)
                    );
            return t;
        }),
        (__webpack_require__.n = function (e) {
            var r =
                e && e.__esModule
                    ? function getDefault() {
                          return e.default;
                      }
                    : function getModuleExports() {
                          return e;
                      };
            return __webpack_require__.d(r, "a", r), r;
        }),
        (__webpack_require__.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r);
        }),
        (__webpack_require__.p = "");
    var a = (window.webpackJsonp = window.webpackJsonp || []),
        o = a.push.bind(a);
    (a.push = webpackJsonpCallback), (a = a.slice());
    for (var i = 0; i < a.length; i++) webpackJsonpCallback(a[i]);
    var u = o;
    n.push([50, 1]), checkDeferredModules();
})({
    100: function (e, r, t) {
        "use strict";
        t.r(r);
    },
    50: function (e, r, t) {
        "use strict";
        var n = t(51);
        t(52), t(57), t(86);
        var a = n(t(89));
        t(45);
        var o = n(t(90)),
            i = Object.create
                ? function (e, r, t, n) {
                      void 0 === n && (n = t),
                          Object.defineProperty(e, n, {
                              enumerable: !0,
                              get: function get() {
                                  return r[t];
                              },
                          });
                  }
                : function (e, r, t, n) {
                      void 0 === n && (n = t), (e[n] = r[t]);
                  },
            u = Object.create
                ? function (e, r) {
                      Object.defineProperty(e, "default", { enumerable: !0, value: r });
                  }
                : function (e, r) {
                      e.default = r;
                  },
            __importStar = function (e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e)
                    for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && i(r, e, t);
                return u(r, e), r;
            };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var c = __importStar(t(101));
        t(100);
        var _ = new c.Application({ backgroundColor: 13882323, width: 800, height: 600 }),
            l = _.stage;
        function loadGameAssets() {
            return _loadGameAssets.apply(this, arguments);
        }
        function _loadGameAssets() {
            return (_loadGameAssets = (0, o.default)(
                a.default.mark(function _callee2() {
                    return a.default.wrap(function _callee2$(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return e.abrupt(
                                        "return",
                                        new Promise(function (e, r) {
                                            var t = c.Loader.shared;
                                            t.add("rabbit", "./assets/simpleSpriteSheet.json"),
                                                t.onComplete.once(function () {
                                                    e();
                                                }),
                                                t.onError.once(function () {
                                                    r();
                                                }),
                                                t.load();
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
        function resizeCanvas() {
            var e = function resize() {
                _.renderer.resize(window.innerWidth, window.innerHeight),
                    (_.stage.scale.x = window.innerWidth / 800),
                    (_.stage.scale.y = window.innerHeight / 600),
                    alert("hi");
            };
            e(), window.addEventListener("resize", e);
        }
        function getBird() {
            var e = new c.AnimatedSprite([
                c.Texture.from("birdUp.png"),
                c.Texture.from("birdMiddle.png"),
                c.Texture.from("birdDown.png"),
            ]);
            return (e.loop = !0), (e.animationSpeed = 0.1), e.play(), e.scale.set(3), e;
        }
        window.onload = (0, o.default)(
            a.default.mark(function _callee() {
                var e;
                return a.default.wrap(function _callee$(r) {
                    for (;;)
                        switch ((r.prev = r.next)) {
                            case 0:
                                return (r.next = 2), loadGameAssets();
                            case 2:
                                document.body.appendChild(_.view),
                                    resizeCanvas(),
                                    (e = getBird()).anchor.set(0.5, 0.5),
                                    e.position.set(400, 300),
                                    l.addChild(e);
                            case 8:
                            case "end":
                                return r.stop();
                        }
                }, _callee);
            })
        );
    },
});
