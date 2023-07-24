import {S as M, i as U, s as V, e as z, c as F, L as Q, d as T, g as _, k as R, M as X, u as Y, l as w, m as Z, t as W, K as v, G, H, I as J, J as K, n as x, p, q as $, r as ee} from "./index.05f6d0f6.js";
import {l as b, m as j, j as D, h as E, L as le} from "./index.97270af3.js";
import "./singletons.9d9d4190.js";
import {a2 as te} from "./index.0136be6f.js";
function ne(a) {
    let e;
    const t = a[22].default
      , l = G(t, a, a[23], null);
    return {
        c() {
            l && l.c()
        },
        l(n) {
            l && l.l(n)
        },
        m(n, u) {
            l && l.m(n, u),
            e = !0
        },
        p(n, u) {
            l && l.p && (!e || u & 8388608) && H(l, t, n, n[23], e ? K(t, n[23], u, null) : J(n[23]), null)
        },
        i(n) {
            e || (W(l, n),
            e = !0)
        },
        o(n) {
            w(l, n),
            e = !1
        },
        d(n) {
            l && l.d(n)
        }
    }
}
function ie(a) {
    let e, t;
    return e = new le({
        props: {
            outbound: a[10].outbound,
            href: a[10].href,
            disable: !a[10].href,
            $$slots: {
                default: [ae]
            },
            $$scope: {
                ctx: a
            }
        }
    }),
    {
        c() {
            x(e.$$.fragment)
        },
        l(l) {
            p(e.$$.fragment, l)
        },
        m(l, n) {
            $(e, l, n),
            t = !0
        },
        p(l, n) {
            const u = {};
            n & 1024 && (u.outbound = l[10].outbound),
            n & 1024 && (u.href = l[10].href),
            n & 1024 && (u.disable = !l[10].href),
            n & 8388608 && (u.$$scope = {
                dirty: n,
                ctx: l
            }),
            e.$set(u)
        },
        i(l) {
            t || (W(e.$$.fragment, l),
            t = !0)
        },
        o(l) {
            w(e.$$.fragment, l),
            t = !1
        },
        d(l) {
            ee(e, l)
        }
    }
}
function ae(a) {
    let e;
    const t = a[22].default
      , l = G(t, a, a[23], null);
    return {
        c() {
            l && l.c()
        },
        l(n) {
            l && l.l(n)
        },
        m(n, u) {
            l && l.m(n, u),
            e = !0
        },
        p(n, u) {
            l && l.p && (!e || u & 8388608) && H(l, t, n, n[23], e ? K(t, n[23], u, null) : J(n[23]), null)
        },
        i(n) {
            e || (W(l, n),
            e = !0)
        },
        o(n) {
            w(l, n),
            e = !1
        },
        d(n) {
            l && l.d(n)
        }
    }
}
function fe(a) {
    let e, t, l, n, u, c, r, h, s, m, g;
    const y = [ie, ne]
      , o = [];
    function S(f, d) {
        return f[10] ? 0 : 1
    }
    return t = S(a),
    l = o[t] = y[t](a),
    {
        c() {
            e = z("div"),
            l.c(),
            this.h()
        },
        l(f) {
            e = F(f, "DIV", {
                class: !0,
                "data-ellipsis": !0,
                "data-link": !0,
                style: !0,
                "data-h": !0
            });
            var d = Q(e);
            l.l(d),
            d.forEach(T),
            this.h()
        },
        h() {
            _(e, "class", "typo svelte-1p6l46k"),
            _(e, "data-ellipsis", n = b(a[4])),
            _(e, "data-link", u = b(a[10])),
            _(e, "style", c = j({
                color: a[11],
                fontWeight: a[12],
                padding: a[3] ? a[3] : a[2] ? void 0 : "0",
                width: D(a[5]),
                textAlign: a[6],
                wordBreak: a[9] ? "break-all" : void 0,
                userSelect: a[8]
            }, a[0])),
            _(e, "data-h", r = b(a[1]))
        },
        m(f, d) {
            R(f, e, d),
            o[t].m(e, null),
            s = !0,
            m || (g = X(h = te.call(null, e, a[7])),
            m = !0)
        },
        p(f, [d]) {
            let k = t;
            t = S(f),
            t === k ? o[t].p(f, d) : (Y(),
            w(o[k], 1, 1, ()=>{
                o[k] = null
            }
            ),
            Z(),
            l = o[t],
            l ? l.p(f, d) : (l = o[t] = y[t](f),
            l.c()),
            W(l, 1),
            l.m(e, null)),
            (!s || d & 16 && n !== (n = b(f[4]))) && _(e, "data-ellipsis", n),
            (!s || d & 1024 && u !== (u = b(f[10]))) && _(e, "data-link", u),
            (!s || d & 7021 && c !== (c = j({
                color: f[11],
                fontWeight: f[12],
                padding: f[3] ? f[3] : f[2] ? void 0 : "0",
                width: D(f[5]),
                textAlign: f[6],
                wordBreak: f[9] ? "break-all" : void 0,
                userSelect: f[8]
            }, f[0]))) && _(e, "style", c),
            (!s || d & 2 && r !== (r = b(f[1]))) && _(e, "data-h", r),
            h && v(h.update) && d & 128 && h.update.call(null, f[7])
        },
        i(f) {
            s || (W(l),
            s = !0)
        },
        o(f) {
            w(l),
            s = !1
        },
        d(f) {
            f && T(e),
            o[t].d(),
            m = !1,
            g()
        }
    }
}
function ue(a, e, t) {
    let l, n, u, {$$slots: c={}, $$scope: r} = e, {style: h={}} = e, {light: s=!1} = e, {bold: m=!1} = e, {mid: g=!1} = e, {h: y=1} = e, {pad: o=!1} = e, {padding: S=void 0} = e, {harmonyName: f=void 0} = e, {harmonyShade: d=void 0} = e, {ellipsis: k=!1} = e, {color: A=void 0} = e, {width: L=void 0} = e, {align: q="left"} = e, {tipOption: B=void 0} = e, {userSelect: C="text"} = e, {fontWeight: N=void 0} = e, {paint: O=void 0} = e, {breakAll: I=!1} = e, {link: P=void 0} = e;
    return a.$$set = i=>{
        "style"in i && t(0, h = i.style),
        "light"in i && t(13, s = i.light),
        "bold"in i && t(14, m = i.bold),
        "mid"in i && t(15, g = i.mid),
        "h"in i && t(1, y = i.h),
        "pad"in i && t(2, o = i.pad),
        "padding"in i && t(3, S = i.padding),
        "harmonyName"in i && t(16, f = i.harmonyName),
        "harmonyShade"in i && t(17, d = i.harmonyShade),
        "ellipsis"in i && t(4, k = i.ellipsis),
        "color"in i && t(18, A = i.color),
        "width"in i && t(5, L = i.width),
        "align"in i && t(6, q = i.align),
        "tipOption"in i && t(7, B = i.tipOption),
        "userSelect"in i && t(8, C = i.userSelect),
        "fontWeight"in i && t(19, N = i.fontWeight),
        "paint"in i && t(20, O = i.paint),
        "breakAll"in i && t(9, I = i.breakAll),
        "link"in i && t(10, P = i.link),
        "$$scope"in i && t(23, r = i.$$scope)
    }
    ,
    a.$$.update = ()=>{
        a.$$.dirty & 581632 && t(12, l = N ? String(N) : m ? 800 : s ? 400 : g ? 500 : 600),
        a.$$.dirty & 196608 && t(21, n = (f || d) && E.scss(f || "base", d || 2500)),
        a.$$.dirty & 3407872 && t(11, u = A || E.Paint.from({
            paint: O
        }) || n || "inhreit")
    }
    ,
    [h, y, o, S, k, L, q, B, C, I, P, u, l, s, m, g, f, d, A, N, O, n, c, r]
}
class re extends M {
    constructor(e) {
        super(),
        U(this, e, ue, fe, V, {
            style: 0,
            light: 13,
            bold: 14,
            mid: 15,
            h: 1,
            pad: 2,
            padding: 3,
            harmonyName: 16,
            harmonyShade: 17,
            ellipsis: 4,
            color: 18,
            width: 5,
            align: 6,
            tipOption: 7,
            userSelect: 8,
            fontWeight: 19,
            paint: 20,
            breakAll: 9,
            link: 10
        })
    }
}
export {re as T};
