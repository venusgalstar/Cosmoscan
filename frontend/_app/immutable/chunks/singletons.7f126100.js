import {w as b, s as S, x as T, W as I, K as O} from "./index.8311dc4e.js";
const f = [];
function U(e, t) {
    return {
        subscribe: p(e, t).subscribe
    }
}
function p(e, t=b) {
    let n;
    const r = new Set;
    function a(s) {
        if (S(e, s) && (e = s,
        n)) {
            const i = !f.length;
            for (const l of r)
                l[1](),
                f.push(l, e);
            if (i) {
                for (let l = 0; l < f.length; l += 2)
                    f[l][0](f[l + 1]);
                f.length = 0
            }
        }
    }
    function c(s) {
        a(s(e))
    }
    function o(s, i=b) {
        const l = [s, i];
        return r.add(l),
        r.size === 1 && (n = t(a) || b),
        s(e),
        ()=>{
            r.delete(l),
            r.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: a,
        update: c,
        subscribe: o
    }
}
function Y(e, t, n) {
    const r = !Array.isArray(e)
      , a = r ? [e] : e
      , c = t.length < 2;
    return U(n, o=>{
        let s = !1;
        const i = [];
        let l = 0
          , _ = b;
        const h = ()=>{
            if (l)
                return;
            _();
            const u = t(r ? i[0] : i, o);
            c ? o(u) : _ = O(u) ? u : b
        }
          , x = a.map((u,g)=>T(u, R=>{
            i[g] = R,
            l &= ~(1 << g),
            s && h()
        }
        , ()=>{
            l |= 1 << g
        }
        ));
        return s = !0,
        h(),
        function() {
            I(x),
            _(),
            s = !1
        }
    }
    )
}
var y;
const q = ((y = globalThis.__sveltekit_1qgxa3e) == null ? void 0 : y.base) ?? "";
var w;
const L = ((w = globalThis.__sveltekit_1qgxa3e) == null ? void 0 : w.assets) ?? q
  , N = "1690102940690"
  , j = "sveltekit:snapshot"
  , $ = "sveltekit:scroll"
  , z = "sveltekit:index"
  , k = {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1
};
function C(e) {
    let t = e.baseURI;
    if (!t) {
        const n = e.getElementsByTagName("base");
        t = n.length ? n[0].href : e.URL
    }
    return t
}
function D() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}
function d(e, t) {
    return e.getAttribute(`data-sveltekit-${t}`)
}
const v = {
    ...k,
    "": k.hover
};
function A(e) {
    let t = e.assignedSlot ?? e.parentNode;
    return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host),
    t
}
function G(e, t) {
    for (; e && e !== t; ) {
        if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href"))
            return e;
        e = A(e)
    }
}
function W(e, t) {
    let n;
    try {
        n = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href,document.baseURI)
    } catch {}
    const r = e instanceof SVGAElement ? e.target.baseVal : e.target
      , a = !n || !!r || P(n, t) || (e.getAttribute("rel") || "").split(/\s+/).includes("external")
      , c = (n == null ? void 0 : n.origin) === location.origin && e.hasAttribute("download");
    return {
        url: n,
        external: a,
        target: r,
        download: c
    }
}
function X(e) {
    let t = null
      , n = null
      , r = null
      , a = null
      , c = null
      , o = null
      , s = e;
    for (; s && s !== document.documentElement; )
        r === null && (r = d(s, "preload-code")),
        a === null && (a = d(s, "preload-data")),
        t === null && (t = d(s, "keepfocus")),
        n === null && (n = d(s, "noscroll")),
        c === null && (c = d(s, "reload")),
        o === null && (o = d(s, "replacestate")),
        s = A(s);
    function i(l) {
        switch (l) {
        case "":
        case "true":
            return !0;
        case "off":
        case "false":
            return !1;
        default:
            return null
        }
    }
    return {
        preload_code: v[r ?? "off"],
        preload_data: v[a ?? "off"],
        keep_focus: i(t),
        noscroll: i(n),
        reload: i(c),
        replace_state: i(o)
    }
}
function m(e) {
    const t = p(e);
    let n = !0;
    function r() {
        n = !0,
        t.update(o=>o)
    }
    function a(o) {
        n = !1,
        t.set(o)
    }
    function c(o) {
        let s;
        return t.subscribe(i=>{
            (s === void 0 || n && i !== s) && o(s = i)
        }
        )
    }
    return {
        notify: r,
        set: a,
        subscribe: c
    }
}
function K() {
    const {set: e, subscribe: t} = p(!1);
    let n;
    async function r() {
        clearTimeout(n);
        try {
            const a = await fetch(`${L}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!a.ok)
                return !1;
            const o = (await a.json()).version !== N;
            return o && (e(!0),
            clearTimeout(n)),
            o
        } catch {
            return !1
        }
    }
    return {
        subscribe: t,
        check: r
    }
}
function P(e, t) {
    return e.origin !== location.origin || !e.pathname.startsWith(t)
}
let E;
function B(e) {
    E = e.client
}
function H(e) {
    return (...t)=>E[e](...t)
}
const F = {
    url: m({}),
    page: m({}),
    navigating: p(null),
    updated: K()
};
export {z as I, k as P, $ as S, j as a, W as b, X as c, D as d, q as e, G as f, C as g, B as h, P as i, H as j, Y as k, U as r, F as s, p as w};
