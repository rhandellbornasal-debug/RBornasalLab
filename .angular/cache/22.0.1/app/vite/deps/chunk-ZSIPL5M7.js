// node_modules/@ionic/core/components/p-1sJ0ZDPe.js
var t = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(t5) {
    this.m = new Map(Object.entries(t5));
  }
  get(t5, n3) {
    const e = this.m.get(t5);
    return void 0 !== e ? e : n3;
  }
  getBoolean(t5, n3 = false) {
    const e = this.m.get(t5);
    return void 0 === e ? n3 : "string" == typeof e ? "true" === e : !!e;
  }
  getNumber(t5, n3) {
    const e = parseFloat(this.m.get(t5));
    return isNaN(e) ? void 0 !== n3 ? n3 : NaN : e;
  }
  set(t5, n3) {
    this.m.set(t5, n3);
  }
};
var n = new t();
var c;
!(function(t5) {
  t5.OFF = "OFF", t5.ERROR = "ERROR", t5.WARN = "WARN", t5.DEBUG = "DEBUG";
})(c || (c = {}));
var u = { [c.OFF]: 0, [c.ERROR]: 1, [c.WARN]: 2, [c.DEBUG]: 3 };
var f = (t5) => {
  const e = String(n.get("logLevel", c.WARN)).toUpperCase();
  return u[e] >= u[t5];
};
var a = (t5, ...n3) => {
  if (f(c.WARN)) return console.warn(`[Ionic Warning]: ${t5}`, ...n3);
};
var d = (t5, ...n3) => {
  if (f(c.ERROR)) return console.error(`[Ionic Error]: ${t5}`, ...n3);
};
var p = ((t5) => (t5.Undefined = "undefined", t5.Null = "null", t5.String = "string", t5.Number = "number", t5.SpecialNumber = "number", t5.Boolean = "boolean", t5.BigInt = "bigint", t5))(p || {});
var $ = ((t5) => (t5.Array = "array", t5.Date = "date", t5.Map = "map", t5.Object = "object", t5.RegularExpression = "regexp", t5.Set = "set", t5.Channel = "channel", t5.Symbol = "symbol", t5))($ || {});
var O = (t5) => {
  if (t5.__stencil__getHostRef) return t5.__stencil__getHostRef();
};
var S = (t5, n3) => (0, console.error)(t5, n3);
var R = "undefined" != typeof window ? window : {};
var A = R.HTMLElement || class {
};
var L = { i: 0, u: "", jmp: (t5) => t5(), raf: (t5) => requestAnimationFrame(t5), ael: (t5, n3, e, o2) => t5.addEventListener(n3, e, o2), rel: (t5, n3, e, o2) => t5.removeEventListener(n3, e, o2), ce: (t5, n3) => new CustomEvent(t5, n3) };
var B = (() => {
  var t5;
  let n3 = false;
  try {
    null == (t5 = R.document) || t5.addEventListener("e", null, Object.defineProperty({}, "passive", { get() {
      n3 = true;
    } }));
  } catch (t6) {
  }
  return n3;
})();
var _ = (() => {
  try {
    return !!R.document.adoptedStyleSheets && (new CSSStyleSheet(), "function" == typeof new CSSStyleSheet().replaceSync);
  } catch (t5) {
  }
  return false;
})();
var T = !!_ && (() => !!R.document && Object.getOwnPropertyDescriptor(R.document.adoptedStyleSheets, "length").writable)();
var F = false;
var U = [];
var D = [];
var W = () => {
  var t5;
  return (null == (t5 = R.document) ? void 0 : t5.hidden) ? q(P) : L.raf(P);
};
var V = (t5, n3) => (e) => {
  t5.push(e), F || (F = true, n3 && 4 & L.i ? q(P) : W());
};
var H = (t5) => {
  for (let n3 = 0; n3 < t5.length; n3++) try {
    t5[n3](performance.now());
  } catch (t6) {
    S(t6);
  }
  t5.length = 0;
};
var P = () => {
  H(U), H(D), (F = U.length > 0) && W();
};
var q = (t5) => Promise.resolve(void 0).then(t5);
var z = V(U, false);
var J = V(D, true);
var qt = (t5) => {
  var n3;
  return null == (n3 = O(t5)) ? void 0 : n3.A;
};
var ln = "Capture";
var rn = new RegExp(ln + "$");

// node_modules/@ionic/core/components/p-ZjP4CjeZ.js
var d2 = "undefined" != typeof window ? window : void 0;
var o = "undefined" != typeof document ? document : void 0;

// node_modules/@ionic/core/components/p-DFLJvuRK.js
var t2;
var i = (e, o2, i2) => {
  const n3 = o2.startsWith("animation") ? (r4 = e, void 0 === t2 && (t2 = void 0 === r4.style.animationName && void 0 !== r4.style.webkitAnimationName ? "-webkit-" : ""), t2) : "";
  var r4;
  e.style.setProperty(n3 + o2, i2);
};
var n2 = (e = [], o2) => {
  if (void 0 !== o2) {
    const t5 = Array.isArray(o2) ? o2 : [o2];
    return [...e, ...t5];
  }
  return e;
};
var r = (t5) => {
  let r4, a2, s2, d3, f2, l2, c3, v2, m2, u2, p2, y = [], g = [], A2 = [], b = false, C = {}, E = [], h = [], S2 = {}, j = 0, k = false, R2 = false, w = true, D2 = false, T2 = true, F2 = false;
  const P2 = t5, W2 = [], Z = [], I = [], K = [], M = [], x = [], J2 = [], q2 = [], z2 = [], B2 = [], G2 = [], H2 = "function" == typeof AnimationEffect || void 0 !== d2 && "function" == typeof d2.AnimationEffect, L2 = "function" == typeof Element && "function" == typeof Element.prototype.animate && H2, N = () => G2, O2 = (e, o2) => {
    const t6 = o2.findIndex(((o3) => o3.c === e));
    t6 > -1 && o2.splice(t6, 1);
  }, Q = (e, o2) => ((o2?.oneTimeCallback ? Z : W2).push({ c: e, o: o2 }), p2), U2 = () => {
    L2 && (G2.forEach(((e) => {
      e.cancel();
    })), G2.length = 0);
  }, V2 = () => {
    x.forEach(((e) => {
      e?.parentNode && e.parentNode.removeChild(e);
    })), x.length = 0;
  }, X = () => void 0 !== f2 ? f2 : c3 ? c3.getFill() : "both", Y = () => void 0 !== v2 ? v2 : void 0 !== l2 ? l2 : c3 ? c3.getDirection() : "normal", $2 = () => k ? "linear" : void 0 !== s2 ? s2 : c3 ? c3.getEasing() : "linear", _2 = () => R2 ? 0 : void 0 !== m2 ? m2 : void 0 !== a2 ? a2 : c3 ? c3.getDuration() : 0, ee = () => void 0 !== d3 ? d3 : c3 ? c3.getIterations() : 1, oe = () => void 0 !== u2 ? u2 : void 0 !== r4 ? r4 : c3 ? c3.getDelay() : 0, te = () => {
    0 !== j && (j--, 0 === j && ((() => {
      z2.forEach(((e2) => e2())), B2.forEach(((e2) => e2()));
      const e = w ? 1 : 0, o2 = E, t6 = h, n3 = S2;
      K.forEach(((e2) => {
        const r5 = e2.classList;
        o2.forEach(((e3) => r5.add(e3))), t6.forEach(((e3) => r5.remove(e3)));
        for (const o3 in n3) n3.hasOwnProperty(o3) && i(e2, o3, n3[o3]);
      })), m2 = void 0, v2 = void 0, u2 = void 0, W2.forEach(((o3) => o3.c(e, p2))), Z.forEach(((o3) => o3.c(e, p2))), Z.length = 0, T2 = true, w && (D2 = true), w = true;
    })(), c3 && c3.animationFinish()));
  }, ie = () => {
    (() => {
      J2.forEach(((e2) => e2())), q2.forEach(((e2) => e2()));
      const e = g, o2 = A2, t6 = C;
      K.forEach(((n3) => {
        const r5 = n3.classList;
        e.forEach(((e2) => r5.add(e2))), o2.forEach(((e2) => r5.remove(e2)));
        for (const e2 in t6) t6.hasOwnProperty(e2) && i(n3, e2, t6[e2]);
      }));
    })(), y.length > 0 && L2 && (K.forEach(((e) => {
      const o2 = e.animate(y, { id: P2, delay: oe(), duration: _2(), easing: $2(), iterations: ee(), fill: X(), direction: Y() });
      o2.pause(), G2.push(o2);
    })), G2.length > 0 && (G2[0].onfinish = () => {
      te();
    })), b = true;
  }, ne = (e) => {
    e = Math.min(Math.max(e, 0), 0.9999), L2 && G2.forEach(((o2) => {
      o2.currentTime = o2.effect.getComputedTiming().delay + _2() * e, o2.pause();
    }));
  }, re = (e) => {
    G2.forEach(((e2) => {
      e2.effect.updateTiming({ delay: oe(), duration: _2(), easing: $2(), iterations: ee(), fill: X(), direction: Y() });
    })), void 0 !== e && ne(e);
  }, ae = (e = false, o2 = true, t6) => (e && M.forEach(((i2) => {
    i2.update(e, o2, t6);
  })), L2 && re(t6), p2), se = () => {
    b && (L2 ? G2.forEach(((e) => {
      e.pause();
    })) : K.forEach(((e) => {
      i(e, "animation-play-state", "paused");
    })), F2 = true);
  }, de = (e) => new Promise(((o2) => {
    e?.sync && (R2 = true, Q((() => R2 = false), { oneTimeCallback: true })), b || ie(), D2 && (L2 && (ne(0), re()), D2 = false), T2 && (j = M.length + 1, T2 = false);
    const t6 = () => {
      O2(i2, Z), o2();
    }, i2 = () => {
      O2(t6, I), o2();
    };
    Q(i2, { oneTimeCallback: true }), I.push({ c: t6, o: { oneTimeCallback: true } }), M.forEach(((e2) => {
      e2.play();
    })), L2 ? (G2.forEach(((e2) => {
      e2.play();
    })), 0 !== y.length && 0 !== K.length || te()) : te(), F2 = false;
  })), fe = (e, o2) => {
    const t6 = y[0];
    return void 0 === t6 || void 0 !== t6.offset && 0 !== t6.offset ? y = [{ offset: 0, [e]: o2 }, ...y] : t6[e] = o2, p2;
  };
  return p2 = { parentAnimation: c3, elements: K, childAnimations: M, id: P2, animationFinish: te, from: fe, to: (e, o2) => {
    const t6 = y[y.length - 1];
    return void 0 === t6 || void 0 !== t6.offset && 1 !== t6.offset ? y = [...y, { offset: 1, [e]: o2 }] : t6[e] = o2, p2;
  }, fromTo: (e, o2, t6) => fe(e, o2).to(e, t6), parent: (e) => (c3 = e, p2), play: de, pause: () => (M.forEach(((e) => {
    e.pause();
  })), se(), p2), stop: () => {
    M.forEach(((e) => {
      e.stop();
    })), b && (U2(), b = false), k = false, R2 = false, T2 = true, v2 = void 0, m2 = void 0, u2 = void 0, j = 0, D2 = false, w = true, F2 = false, I.forEach(((e) => e.c(0, p2))), I.length = 0;
  }, destroy: (e) => (M.forEach(((o2) => {
    o2.destroy(e);
  })), ((e2) => {
    U2(), e2 && V2();
  })(e), K.length = 0, M.length = 0, y.length = 0, W2.length = 0, Z.length = 0, b = false, T2 = true, p2), keyframes: (e) => {
    const o2 = y !== e;
    return y = e, o2 && ((e2) => {
      L2 && N().forEach(((o3) => {
        const t6 = o3.effect;
        if (t6.setKeyframes) t6.setKeyframes(e2);
        else {
          const i2 = new KeyframeEffect(t6.target, e2, t6.getTiming());
          o3.effect = i2;
        }
      }));
    })(y), p2;
  }, addAnimation: (e) => {
    if (null != e) if (Array.isArray(e)) for (const o2 of e) o2.parent(p2), M.push(o2);
    else e.parent(p2), M.push(e);
    return p2;
  }, addElement: (o2) => {
    if (null != o2) if (1 === o2.nodeType) K.push(o2);
    else if (o2.length >= 0) for (let e = 0; e < o2.length; e++) K.push(o2[e]);
    else d("createAnimation - Invalid addElement value.");
    return p2;
  }, update: ae, fill: (e) => (f2 = e, ae(true), p2), direction: (e) => (l2 = e, ae(true), p2), iterations: (e) => (d3 = e, ae(true), p2), duration: (e) => (L2 || 0 !== e || (e = 1), a2 = e, ae(true), p2), easing: (e) => (s2 = e, ae(true), p2), delay: (e) => (r4 = e, ae(true), p2), getWebAnimations: N, getKeyframes: () => y, getFill: X, getDirection: Y, getDelay: oe, getIterations: ee, getEasing: $2, getDuration: _2, afterAddRead: (e) => (z2.push(e), p2), afterAddWrite: (e) => (B2.push(e), p2), afterClearStyles: (e = []) => {
    for (const o2 of e) S2[o2] = "";
    return p2;
  }, afterStyles: (e = {}) => (S2 = e, p2), afterRemoveClass: (e) => (h = n2(h, e), p2), afterAddClass: (e) => (E = n2(E, e), p2), beforeAddRead: (e) => (J2.push(e), p2), beforeAddWrite: (e) => (q2.push(e), p2), beforeClearStyles: (e = []) => {
    for (const o2 of e) C[o2] = "";
    return p2;
  }, beforeStyles: (e = {}) => (C = e, p2), beforeRemoveClass: (e) => (A2 = n2(A2, e), p2), beforeAddClass: (e) => (g = n2(g, e), p2), onFinish: Q, isRunning: () => 0 !== j && !F2, progressStart: (e = false, o2) => (M.forEach(((t6) => {
    t6.progressStart(e, o2);
  })), se(), k = e, b || ie(), ae(false, true, o2), p2), progressStep: (e) => (M.forEach(((o2) => {
    o2.progressStep(e);
  })), ne(e), p2), progressEnd: (e, o2, t6) => (k = false, M.forEach(((i2) => {
    i2.progressEnd(e, o2, t6);
  })), void 0 !== t6 && (m2 = t6), D2 = false, w = true, 0 === e ? (v2 = "reverse" === Y() ? "normal" : "reverse", "reverse" === v2 && (w = false), L2 ? (ae(), ne(1 - o2)) : (u2 = (1 - o2) * _2() * -1, ae(false, false))) : 1 === e && (L2 ? (ae(), ne(o2)) : (u2 = o2 * _2() * -1, ae(false, false))), void 0 === e || c3 || de(), p2) };
};

// node_modules/@ionic/core/components/p-C09TXohi.js
var t3 = (a2, i2) => {
  a2.componentOnReady ? a2.componentOnReady().then(((a3) => i2(a3))) : m((() => i2(a2)));
};
var m = (a2) => "function" == typeof __zone_symbol__requestAnimationFrame ? __zone_symbol__requestAnimationFrame(a2) : "function" == typeof requestAnimationFrame ? requestAnimationFrame(a2) : setTimeout(a2);

// node_modules/@ionic/core/components/p-C4VpVfrJ.js
var r3 = "ionViewWillEnter";
var t4 = "ionViewDidEnter";
var s = "ionViewWillLeave";
var c2 = "ionViewDidLeave";
var l = "ionViewWillUnload";
var G = (n3) => {
  if (n3.classList.contains("ion-page")) return n3;
  return n3.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs") || n3;
};

export {
  n,
  a,
  qt,
  o,
  r,
  t3 as t,
  r3 as r2,
  t4 as t2,
  s,
  c2 as c,
  l,
  G
};
//# sourceMappingURL=chunk-ZSIPL5M7.js.map
