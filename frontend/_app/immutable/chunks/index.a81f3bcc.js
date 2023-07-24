import {S as T, i as j, s as L, e as U, c as B, L as G, d as u, g as I, k as $, w as z, n as _, p, q as g, t as m, l as c, r as b, a as k, f as D, u as Y, m as J, C as w, D as y, E as C} from "./index.8311dc4e.js";
import {l as q, m as N, j as K, h as V, q as E, r as R, k as W} from "./index.e5219fc6.js";
import {ai as M, F as S, aq as F, y as H, T as A, w as Q, _ as O} from "./index.5903bf3f.js";
import "./singletons.7f126100.js";
function X(o) {
    let t, n, e;
    return {
        c() {
            t = U("div"),
            this.h()
        },
        l(s) {
            t = B(s, "DIV", {
                class: !0,
                "data-borderradius": !0,
                style: !0
            }),
            G(t).forEach(u),
            this.h()
        },
        h() {
            I(t, "class", "vali-icon svelte-2w6yjd"),
            I(t, "data-borderradius", n = q(o[1])),
            I(t, "style", e = N({
                ...o[2],
                width: o[3],
                minWidth: o[3],
                minHeight: o[3],
                height: o[3],
                backgroundImage: o[4]
            }, o[0]))
        },
        m(s, r) {
            $(s, t, r)
        },
        p(s, [r]) {
            r & 2 && n !== (n = q(s[1])) && I(t, "data-borderradius", n),
            r & 29 && e !== (e = N({
                ...s[2],
                width: s[3],
                minWidth: s[3],
                minHeight: s[3],
                height: s[3],
                backgroundImage: s[4]
            }, s[0])) && I(t, "style", e)
        },
        i: z,
        o: z,
        d(s) {
            s && u(t)
        }
    }
}
function Z(o, t, n) {
    let e, s, {chain: r} = t, {operatorAddress: a} = t, {size: l="1.3rem"} = t, {outlineColor: f="var(--hq-base-0600)"} = t, {style: i={}} = t, {borderRadius: h="circle"} = t, d = {};
    return o.$$set = v=>{
        "chain"in v && n(5, r = v.chain),
        "operatorAddress"in v && n(6, a = v.operatorAddress),
        "size"in v && n(7, l = v.size),
        "outlineColor"in v && n(8, f = v.outlineColor),
        "style"in v && n(0, i = v.style),
        "borderRadius"in v && n(1, h = v.borderRadius)
    }
    ,
    o.$$.update = ()=>{
        o.$$.dirty & 96 && n(4, e = "url(" + M.thumbnail({
            denom: r.denom,
            operatorAddress: a
        }) + ")"),
        o.$$.dirty & 128 && n(3, s = K(l)),
        o.$$.dirty & 256 && f && n(2, d.border = `1px solid ${f}`, d)
    }
    ,
    [i, h, d, s, e, r, a, l, f]
}
class x extends T {
    constructor(t) {
        super(),
        j(this, t, Z, X, L, {
            chain: 5,
            operatorAddress: 6,
            size: 7,
            outlineColor: 8,
            style: 0,
            borderRadius: 1
        })
    }
}
function ee(o) {
    let t, n;
    return t = new x({
        props: {
            size: "1.6",
            chain: o[1],
            operatorAddress: o[0].vali.operator_address,
            outlineColor: o[4].normal.base.color
        }
    }),
    {
        c() {
            _(t.$$.fragment)
        },
        l(e) {
            p(t.$$.fragment, e)
        },
        m(e, s) {
            g(t, e, s),
            n = !0
        },
        p(e, s) {
            const r = {};
            s & 2 && (r.chain = e[1]),
            s & 1 && (r.operatorAddress = e[0].vali.operator_address),
            s & 16 && (r.outlineColor = e[4].normal.base.color),
            t.$set(r)
        },
        i(e) {
            n || (m(t.$$.fragment, e),
            n = !0)
        },
        o(e) {
            c(t.$$.fragment, e),
            n = !1
        },
        d(e) {
            b(t, e)
        }
    }
}
function te(o) {
    let t, n = o[0].vali.rank + "", e, s;
    return {
        c() {
            t = w("#"),
            e = w(n),
            s = w(".")
        },
        l(r) {
            t = y(r, "#"),
            e = y(r, n),
            s = y(r, ".")
        },
        m(r, a) {
            $(r, t, a),
            $(r, e, a),
            $(r, s, a)
        },
        p(r, a) {
            a & 1 && n !== (n = r[0].vali.rank + "") && C(e, n)
        },
        d(r) {
            r && u(t),
            r && u(e),
            r && u(s)
        }
    }
}
function re(o) {
    let t, n = W(Number(o[0].vali.tokens) / o[2]) + "", e, s;
    return {
        c() {
            t = w("["),
            e = w(n),
            s = w("]")
        },
        l(r) {
            t = y(r, "["),
            e = y(r, n),
            s = y(r, "]")
        },
        m(r, a) {
            $(r, t, a),
            $(r, e, a),
            $(r, s, a)
        },
        p(r, a) {
            a & 5 && n !== (n = W(Number(r[0].vali.tokens) / r[2]) + "") && C(e, n)
        },
        d(r) {
            r && u(t),
            r && u(e),
            r && u(s)
        }
    }
}
function ne(o) {
    let t, n, e = E(o[0].vali.moniker, 18) + "", s, r, a, l;
    return t = new O({
        props: {
            $$slots: {
                default: [te]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    a = new O({
        props: {
            $$slots: {
                default: [re]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment),
            n = k(),
            s = w(e),
            r = k(),
            _(a.$$.fragment)
        },
        l(f) {
            p(t.$$.fragment, f),
            n = D(f),
            s = y(f, e),
            r = D(f),
            p(a.$$.fragment, f)
        },
        m(f, i) {
            g(t, f, i),
            $(f, n, i),
            $(f, s, i),
            $(f, r, i),
            g(a, f, i),
            l = !0
        },
        p(f, i) {
            const h = {};
            i & 257 && (h.$$scope = {
                dirty: i,
                ctx: f
            }),
            t.$set(h),
            (!l || i & 1) && e !== (e = E(f[0].vali.moniker, 18) + "") && C(s, e);
            const d = {};
            i & 261 && (d.$$scope = {
                dirty: i,
                ctx: f
            }),
            a.$set(d)
        },
        i(f) {
            l || (m(t.$$.fragment, f),
            m(a.$$.fragment, f),
            l = !0)
        },
        o(f) {
            c(t.$$.fragment, f),
            c(a.$$.fragment, f),
            l = !1
        },
        d(f) {
            b(t, f),
            f && u(n),
            f && u(s),
            f && u(r),
            b(a, f)
        }
    }
}
function se(o) {
    let t, n;
    return t = new A({
        props: {
            h: 7,
            bold: !0,
            $$slots: {
                default: [ne]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment)
        },
        l(e) {
            p(t.$$.fragment, e)
        },
        m(e, s) {
            g(t, e, s),
            n = !0
        },
        p(e, s) {
            const r = {};
            s & 261 && (r.$$scope = {
                dirty: s,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            n || (m(t.$$.fragment, e),
            n = !0)
        },
        o(e) {
            c(t.$$.fragment, e),
            n = !1
        },
        d(e) {
            b(t, e)
        }
    }
}
function P(o) {
    let t, n;
    return t = new S({
        props: {
            style: {
                flexDirection: o[5] ? "row-reverse" : void 0,
                margin: "0.4rem 0 0.2rem"
            },
            gap: .3,
            $$slots: {
                default: [fe]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment)
        },
        l(e) {
            p(t.$$.fragment, e)
        },
        m(e, s) {
            g(t, e, s),
            n = !0
        },
        p(e, s) {
            const r = {};
            s & 32 && (r.style = {
                flexDirection: e[5] ? "row-reverse" : void 0,
                margin: "0.4rem 0 0.2rem"
            }),
            s & 328 && (r.$$scope = {
                dirty: s,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            n || (m(t.$$.fragment, e),
            n = !0)
        },
        o(e) {
            c(t.$$.fragment, e),
            n = !1
        },
        d(e) {
            b(t, e)
        }
    }
}
function oe(o) {
    let t;
    return {
        c() {
            t = w(o[3])
        },
        l(n) {
            t = y(n, o[3])
        },
        m(n, e) {
            $(n, t, e)
        },
        p(n, e) {
            e & 8 && C(t, n[3])
        },
        d(n) {
            n && u(t)
        }
    }
}
function ae(o) {
    let t, n;
    return t = new A({
        props: {
            h: 7,
            $$slots: {
                default: [oe]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment)
        },
        l(e) {
            p(t.$$.fragment, e)
        },
        m(e, s) {
            g(t, e, s),
            n = !0
        },
        p(e, s) {
            const r = {};
            s & 264 && (r.$$scope = {
                dirty: s,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            n || (m(t.$$.fragment, e),
            n = !0)
        },
        o(e) {
            c(t.$$.fragment, e),
            n = !1
        },
        d(e) {
            b(t, e)
        }
    }
}
function fe(o) {
    let t, n;
    return t = new Q({
        props: {
            style: {
                maxWidth: "80%",
                background: o[6]
            },
            $$slots: {
                default: [ae]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment)
        },
        l(e) {
            p(t.$$.fragment, e)
        },
        m(e, s) {
            g(t, e, s),
            n = !0
        },
        p(e, s) {
            const r = {};
            s & 64 && (r.style = {
                maxWidth: "80%",
                background: e[6]
            }),
            s & 264 && (r.$$scope = {
                dirty: s,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            n || (m(t.$$.fragment, e),
            n = !0)
        },
        o(e) {
            c(t.$$.fragment, e),
            n = !1
        },
        d(e) {
            b(t, e)
        }
    }
}
function le(o) {
    let t;
    return {
        c() {
            t = w(o[7])
        },
        l(n) {
            t = y(n, o[7])
        },
        m(n, e) {
            $(n, t, e)
        },
        p(n, e) {
            e & 128 && C(t, n[7])
        },
        d(n) {
            n && u(t)
        }
    }
}
function ie(o) {
    let t = R(o[0].vote.timestamp) + "", n;
    return {
        c() {
            n = w(t)
        },
        l(e) {
            n = y(e, t)
        },
        m(e, s) {
            $(e, n, s)
        },
        p(e, s) {
            s & 1 && t !== (t = R(e[0].vote.timestamp) + "") && C(n, t)
        },
        d(e) {
            e && u(n)
        }
    }
}
function ue(o) {
    let t, n, e, s;
    return t = new A({
        props: {
            h: 7,
            color: o[4].normal.base.color,
            bold: !0,
            $$slots: {
                default: [le]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    e = new A({
        props: {
            h: 7,
            harmonyShade: 2100,
            $$slots: {
                default: [ie]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment),
            n = k(),
            _(e.$$.fragment)
        },
        l(r) {
            p(t.$$.fragment, r),
            n = D(r),
            p(e.$$.fragment, r)
        },
        m(r, a) {
            g(t, r, a),
            $(r, n, a),
            g(e, r, a),
            s = !0
        },
        p(r, a) {
            const l = {};
            a & 16 && (l.color = r[4].normal.base.color),
            a & 384 && (l.$$scope = {
                dirty: a,
                ctx: r
            }),
            t.$set(l);
            const f = {};
            a & 257 && (f.$$scope = {
                dirty: a,
                ctx: r
            }),
            e.$set(f)
        },
        i(r) {
            s || (m(t.$$.fragment, r),
            m(e.$$.fragment, r),
            s = !0)
        },
        o(r) {
            c(t.$$.fragment, r),
            c(e.$$.fragment, r),
            s = !1
        },
        d(r) {
            b(t, r),
            r && u(n),
            b(e, r)
        }
    }
}
function me(o) {
    let t, n, e, s, r;
    t = new S({
        props: {
            style: {
                flexDirection: o[5] ? "row-reverse" : void 0,
                padding: "0 0.2rem"
            },
            gap: .3,
            $$slots: {
                default: [se]
            },
            $$scope: {
                ctx: o
            }
        }
    });
    let a = o[3] && P(o);
    return s = new S({
        props: {
            style: {
                flexDirection: o[5] ? "row-reverse" : void 0,
                padding: "0 0.2rem"
            },
            gap: .3,
            $$slots: {
                default: [ue]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment),
            n = k(),
            a && a.c(),
            e = k(),
            _(s.$$.fragment)
        },
        l(l) {
            p(t.$$.fragment, l),
            n = D(l),
            a && a.l(l),
            e = D(l),
            p(s.$$.fragment, l)
        },
        m(l, f) {
            g(t, l, f),
            $(l, n, f),
            a && a.m(l, f),
            $(l, e, f),
            g(s, l, f),
            r = !0
        },
        p(l, f) {
            const i = {};
            f & 32 && (i.style = {
                flexDirection: l[5] ? "row-reverse" : void 0,
                padding: "0 0.2rem"
            }),
            f & 261 && (i.$$scope = {
                dirty: f,
                ctx: l
            }),
            t.$set(i),
            l[3] ? a ? (a.p(l, f),
            f & 8 && m(a, 1)) : (a = P(l),
            a.c(),
            m(a, 1),
            a.m(e.parentNode, e)) : a && (Y(),
            c(a, 1, 1, ()=>{
                a = null
            }
            ),
            J());
            const h = {};
            f & 32 && (h.style = {
                flexDirection: l[5] ? "row-reverse" : void 0,
                padding: "0 0.2rem"
            }),
            f & 401 && (h.$$scope = {
                dirty: f,
                ctx: l
            }),
            s.$set(h)
        },
        i(l) {
            r || (m(t.$$.fragment, l),
            m(a),
            m(s.$$.fragment, l),
            r = !0)
        },
        o(l) {
            c(t.$$.fragment, l),
            c(a),
            c(s.$$.fragment, l),
            r = !1
        },
        d(l) {
            b(t, l),
            l && u(n),
            a && a.d(l),
            l && u(e),
            b(s, l)
        }
    }
}
function $e(o) {
    let t, n, e, s;
    return t = new H({
        props: {
            style: {
                paddingTop: "0.4rem"
            },
            $$slots: {
                default: [ee]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    e = new H({
        props: {
            $$slots: {
                default: [me]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment),
            n = k(),
            _(e.$$.fragment)
        },
        l(r) {
            p(t.$$.fragment, r),
            n = D(r),
            p(e.$$.fragment, r)
        },
        m(r, a) {
            g(t, r, a),
            $(r, n, a),
            g(e, r, a),
            s = !0
        },
        p(r, a) {
            const l = {};
            a & 275 && (l.$$scope = {
                dirty: a,
                ctx: r
            }),
            t.$set(l);
            const f = {};
            a & 509 && (f.$$scope = {
                dirty: a,
                ctx: r
            }),
            e.$set(f)
        },
        i(r) {
            s || (m(t.$$.fragment, r),
            m(e.$$.fragment, r),
            s = !0)
        },
        o(r) {
            c(t.$$.fragment, r),
            c(e.$$.fragment, r),
            s = !1
        },
        d(r) {
            b(t, r),
            r && u(n),
            b(e, r)
        }
    }
}
function ce(o) {
    let t, n;
    return t = new S({
        props: {
            style: {
                flexDirection: o[5] ? "row-reverse" : void 0,
                padding: "0.5rem 0 0.7rem"
            },
            gap: .5,
            $$slots: {
                default: [$e]
            },
            $$scope: {
                ctx: o
            }
        }
    }),
    {
        c() {
            _(t.$$.fragment)
        },
        l(e) {
            p(t.$$.fragment, e)
        },
        m(e, s) {
            g(t, e, s),
            n = !0
        },
        p(e, [s]) {
            const r = {};
            s & 32 && (r.style = {
                flexDirection: e[5] ? "row-reverse" : void 0,
                padding: "0.5rem 0 0.7rem"
            }),
            s & 511 && (r.$$scope = {
                dirty: s,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            n || (m(t.$$.fragment, e),
            n = !0)
        },
        o(e) {
            c(t.$$.fragment, e),
            n = !1
        },
        d(e) {
            b(t, e)
        }
    }
}
function de(o, t, n) {
    let e, s, r, a, {voteInfo: l} = t, {chain: f} = t, {bonded: i} = t, {message: h=void 0} = t;
    return o.$$set = d=>{
        "voteInfo"in d && n(0, l = d.voteInfo),
        "chain"in d && n(1, f = d.chain),
        "bonded"in d && n(2, i = d.bonded),
        "message"in d && n(3, h = d.message)
    }
    ,
    o.$$.update = ()=>{
        o.$$.dirty & 1 && n(7, e = F.getOptionString(l.vote.option)),
        o.$$.dirty & 1 && n(5, s = l.vote.option !== F.VoteUnitOption.YES),
        o.$$.dirty & 32 && n(4, r = V.Harmonies.get(s ? V.Vote.harmonyName.veto : V.Vote.harmonyName.yes, "Lv1")),
        o.$$.dirty & 16 && n(6, a = r.normal.base.backgroundColor)
    }
    ,
    [l, f, i, h, r, s, a, e]
}
class he extends T {
    constructor(t) {
        super(),
        j(this, t, de, ce, L, {
            voteInfo: 0,
            chain: 1,
            bonded: 2,
            message: 3
        })
    }
}
export {he as I, x as V};
