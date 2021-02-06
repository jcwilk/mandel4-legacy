!(function (e) {
    function webpackJsonpCallback(n) {
        for (var i, o, a = n[0], u = n[1], c = n[2], d = 0, l = []; d < a.length; d++)
            (o = a[d]), Object.prototype.hasOwnProperty.call(t, o) && t[o] && l.push(t[o][0]), (t[o] = 0);
        for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
        for (s && s(n); l.length; ) l.shift()();
        return r.push.apply(r, c || []), checkDeferredModules();
    }
    function checkDeferredModules() {
        for (var e, n = 0; n < r.length; n++) {
            for (var i = r[n], o = !0, a = 1; a < i.length; a++) {
                var s = i[a];
                0 !== t[s] && (o = !1);
            }
            o && (r.splice(n--, 1), (e = __webpack_require__((__webpack_require__.s = i[0]))));
        }
        return e;
    }
    var n = {},
        t = { 0: 0 },
        r = [];
    function __webpack_require__(t) {
        if (n[t]) return n[t].exports;
        var r = (n[t] = { i: t, l: !1, exports: {} });
        return e[t].call(r.exports, r, r.exports, __webpack_require__), (r.l = !0), r.exports;
    }
    (__webpack_require__.m = e),
        (__webpack_require__.c = n),
        (__webpack_require__.d = function (e, n, t) {
            __webpack_require__.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
        }),
        (__webpack_require__.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (__webpack_require__.t = function (e, n) {
            if ((1 & n && (e = __webpack_require__(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (
                (__webpack_require__.r(t),
                Object.defineProperty(t, "default", { enumerable: !0, value: e }),
                2 & n && "string" != typeof e)
            )
                for (var r in e)
                    __webpack_require__.d(
                        t,
                        r,
                        function (n) {
                            return e[n];
                        }.bind(null, r)
                    );
            return t;
        }),
        (__webpack_require__.n = function (e) {
            var n =
                e && e.__esModule
                    ? function getDefault() {
                          return e.default;
                      }
                    : function getModuleExports() {
                          return e;
                      };
            return __webpack_require__.d(n, "a", n), n;
        }),
        (__webpack_require__.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (__webpack_require__.p = "");
    var i = (window.webpackJsonp = window.webpackJsonp || []),
        o = i.push.bind(i);
    (i.push = webpackJsonpCallback), (i = i.slice());
    for (var a = 0; a < i.length; a++) webpackJsonpCallback(i[a]);
    var s = o;
    r.push([52, 1]), checkDeferredModules();
})({
    100: function (e, n, t) {
        "use strict";
        t.r(n);
    },
    52: function (e, n, t) {
        "use strict";
        var r = t(53);
        t(54), t(59), t(71);
        var i = r(t(89));
        t(47);
        var o = r(t(90)),
            a = Object.create
                ? function (e, n, t, r) {
                      void 0 === r && (r = t),
                          Object.defineProperty(e, r, {
                              enumerable: !0,
                              get: function get() {
                                  return n[t];
                              },
                          });
                  }
                : function (e, n, t, r) {
                      void 0 === r && (r = t), (e[r] = n[t]);
                  },
            s = Object.create
                ? function (e, n) {
                      Object.defineProperty(e, "default", { enumerable: !0, value: n });
                  }
                : function (e, n) {
                      e.default = n;
                  },
            __importStar = function (e) {
                if (e && e.__esModule) return e;
                var n = {};
                if (null != e)
                    for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && a(n, e, t);
                return s(n, e), n;
            };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var u = __importStar(t(101));
        (u.settings.SCALE_MODE = u.SCALE_MODES.NEAREST), t(100);
        var c,
            d = new u.Application({ width: window.innerWidth, height: window.innerHeight }),
            l = {};
        function centerArrowsAt(e, n) {
            l.up.sprite.position.set(e, n - 8),
                l.down.sprite.position.set(e, n + 8),
                l.left.sprite.position.set(e - 8, n),
                l.right.sprite.position.set(e + 8, n);
        }
        !(function (e) {
            (e.plus = "plus"),
                (e.minus = "minus"),
                (e.up = "up"),
                (e.down = "down"),
                (e.left = "left"),
                (e.right = "right");
        })(c || (c = {}));
        var p = new u.Container();
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
                                        new Promise(function (e, n) {
                                            var t = u.Loader.shared;
                                            t.add("rabbit", "./assets/simpleSpriteSheet.json"),
                                                t.add("buttons", "./assets/buttons.json"),
                                                t.onComplete.once(function () {
                                                    e();
                                                }),
                                                t.onError.once(function () {
                                                    n();
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
        function setupControls() {
            for (
                var e = function _loop() {
                        var e = t[n];
                        (l[e] = { sprite: new u.Sprite(u.Texture.from(e)), isDown: !1 }),
                            d.stage.addChild(l[e].sprite),
                            (l[e].sprite.interactive = !0),
                            (l[e].sprite.buttonMode = !0),
                            l[e].sprite
                                .on("pointerdown", function () {
                                    l[e].isDown = !0;
                                })
                                .on("pointerup", function () {
                                    l[e].isDown = !1;
                                })
                                .on("pointerupoutside", function () {
                                    l[e].isDown = !1;
                                });
                    },
                    n = 0,
                    t = Object.values(c);
                n < t.length;
                n++
            )
                e();
        }
        function setupResizing() {
            var e = function resize() {
                d.renderer.resize(window.innerWidth, window.innerHeight),
                    (p.filterArea.width = Math.ceil(window.innerWidth)),
                    (p.filterArea.height = Math.ceil(window.innerHeight));
                var e = Math.min(window.innerWidth, window.innerHeight),
                    n = Math.max(window.innerWidth, window.innerHeight);
                d.stage.scale.set(e / 70);
                var t = (70 * n) / e;
                isPortrait()
                    ? (l.plus.sprite.position.set(62, t - 8),
                      l.minus.sprite.position.set(50, t - 8),
                      centerArrowsAt(12, t - 12))
                    : (l.plus.sprite.position.set(t - 8, 8),
                      l.minus.sprite.position.set(t - 8, 20),
                      centerArrowsAt(t - 12, 58)),
                    updateScreenSize();
            };
            window.addEventListener("resize", e), e();
        }
        function updateScreenSize() {
            isPortrait()
                ? ((v.screenWidth = f), (v.screenHeight = (f * window.innerHeight) / window.innerWidth))
                : ((v.screenWidth = (f * window.innerWidth) / window.innerHeight), (v.screenHeight = f));
        }
        function isPortrait() {
            return window.innerWidth < window.innerHeight;
        }
        (p.filterArea = new u.Rectangle(0, 0, 80, 80)),
            d.stage.addChild(p),
            (window.onload = (0, o.default)(
                i.default.mark(function _callee() {
                    return i.default.wrap(function _callee$(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), loadGameAssets();
                                case 2:
                                    document.body.appendChild(d.view),
                                        setupMandelRecursion(),
                                        setupMandelDrawing(),
                                        setupControls(),
                                        setupResizing();
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                    }, _callee);
                })
            ));
        var f = 2,
            _ = 4096,
            w = 0.015,
            v = {
                texIn: u.RenderTexture.create({ width: _, height: _ }),
                mandelRes: _,
                screenWidth: 2,
                screenHeight: 1,
                screenX: 0,
                screenY: 0,
            };
        function setupMandelRecursion() {
            var e = new u.Geometry()
                    .addAttribute("aVertexPosition", [0, 0, _, 0, _, _, 0, _], 2)
                    .addAttribute("aUvs", [0, 0, 1, 0, 1, 1, 0, 1], 2)
                    .addIndex([0, 1, 2, 0, 2, 3]),
                n = v.texIn,
                t = u.RenderTexture.create({ width: _, height: _ }),
                r = u.MeshMaterial.from(
                    "\n        precision mediump float;\n\n        attribute vec2 aVertexPosition;\n        attribute vec2 aUvs;\n\n        uniform mat3 translationMatrix;\n        uniform mat3 projectionMatrix;\n        uniform int mandelRes;\n\n        varying vec2 vUvs;\n\n        void main() {\n            vUvs = aUvs;\n            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n        }",
                    "\n    precision mediump float;\n\n    varying vec2 vUvs;\n    uniform sampler2D texIn;\n    uniform int mandelRes;\n\n    void main()\n    {\n        vec4 data = texture2D(texIn, vUvs);\n        float x = data.x*2.;\n        float y = data.y*2.;\n        int i = int(data.z*256.);\n        float signs = data.a;\n        vec2 c = (vUvs-vec2(0.5))*4.;\n        \n        if (i == 0) {\n            x = 0.;\n            y = 0.;\n            signs = 0.;\n        }\n\n        if (signs >= .5) x = -x;\n        if (mod(signs,.5) > 0.) y = -y;\n\n        if (abs(x) < 2. && abs(y) < 2.) {\n            float zx = x*x - y*y + c.x;\n            y = (x+x)*y + c.y;\n            x = zx;\n            i+= 1;\n        } else {\n            x = 2.;\n            y = 2.;\n        }\n        signs = 0.;\n        if (x < 0.) signs+=.5;\n        if (y < 0.) signs+=.25;\n        gl_FragColor = vec4(abs(x)/2.,abs(y)/2.,float(i)/256.,signs);\n        // TODO - mandelbrot goes here\n    }",
                    v
                ),
                i = new u.Mesh(e, r);
            d.ticker.add(function () {
                d.renderer.render(i, t);
                var e = [t, n];
                (n = e[0]), (t = e[1]), (v.texIn = n);
            });
        }
        function setupMandelDrawing() {
            var e = new u.Filter(
                void 0,
                "\n        precision mediump float;\n\n        varying vec2 vTextureCoord;\n        varying vec4 vColor;\n        uniform sampler2D uSampler;\n        uniform sampler2D texIn;\n        uniform int mandelRes;\n\n        uniform float screenWidth;\n        uniform float screenHeight;\n        uniform float screenX;\n        uniform float screenY;\n\n        void main()\n        {\n            float x = .5 + screenX + screenWidth * (vTextureCoord.x - 0.5);\n            float y = .5 + screenY + screenHeight * (vTextureCoord.y - 0.5);\n            vec4 data = texture2D(texIn, vec2(x,y));\n            gl_FragColor = vec4(vec3(data.z),1.);\n        }",
                v
            );
            (p.filters = [e]),
                d.ticker.add(function (n) {
                    l.plus.isDown && ((f /= 0.025 * n + 1), updateScreenSize()),
                        l.minus.isDown && ((f *= 0.025 * n + 1), updateScreenSize()),
                        l.up.isDown && (e.uniforms.screenY -= f * w * n),
                        l.down.isDown && (e.uniforms.screenY += f * w * n),
                        l.left.isDown && (e.uniforms.screenX -= f * w * n),
                        l.right.isDown && (e.uniforms.screenX += f * w * n);
                });
        }
    },
});
