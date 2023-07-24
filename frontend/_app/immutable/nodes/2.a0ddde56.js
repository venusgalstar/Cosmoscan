import {S as k, i as S, s as H, n as i, a as _, p as f, f as d, q as c, k as w, t as l, l as u, r as m, d as h, v as b} from "../chunks/index.8311dc4e.js";
import {s as I} from "../chunks/index.e5219fc6.js";
import {B as P, C as L, o as A, A as D, S as G, a as B, e as O, b as T, c as q, d as M, G as y, R as v, f as C} from "../chunks/index.5903bf3f.js";
import "../chunks/singletons.7f126100.js";
function N($) {
    let n, r;
    return n = new v.Header({
        props: {
            infos: $[0]
        }
    }),
    {
        c() {
            i(n.$$.fragment)
        },
        l(e) {
            f(n.$$.fragment, e)
        },
        m(e, s) {
            c(n, e, s),
            r = !0
        },
        p(e, s) {
            const t = {};
            s & 1 && (t.infos = e[0]),
            n.$set(t)
        },
        i(e) {
            r || (l(n.$$.fragment, e),
            r = !0)
        },
        o(e) {
            u(n.$$.fragment, e),
            r = !1
        },
        d(e) {
            m(n, e)
        }
    }
}
function R($) {
    let n, r;
    return n = new v.DisplayList({
        props: {
            lists: $[1]
        }
    }),
    {
        c() {
            i(n.$$.fragment)
        },
        l(e) {
            f(n.$$.fragment, e)
        },
        m(e, s) {
            c(n, e, s),
            r = !0
        },
        p(e, s) {
            const t = {};
            s & 2 && (t.lists = e[1]),
            n.$set(t)
        },
        i(e) {
            r || (l(n.$$.fragment, e),
            r = !0)
        },
        o(e) {
            u(n.$$.fragment, e),
            r = !1
        },
        d(e) {
            m(n, e)
        }
    }
}
function E($) {
    let n, r;
    return n = new v.List({
        props: {
            infos: $[0]
        }
    }),
    {
        c() {
            i(n.$$.fragment)
        },
        l(e) {
            f(n.$$.fragment, e)
        },
        m(e, s) {
            c(n, e, s),
            r = !0
        },
        p(e, s) {
            const t = {};
            s & 1 && (t.infos = e[0]),
            n.$set(t)
        },
        i(e) {
            r || (l(n.$$.fragment, e),
            r = !0)
        },
        o(e) {
            u(n.$$.fragment, e),
            r = !1
        },
        d(e) {
            m(n, e)
        }
    }
}
function F($) {
    let n, r;
    return n = new y({
        props: {
            style: {
                minHeight: "40rem"
            },
            $$slots: {
                default: [E]
            },
            $$scope: {
                ctx: $
            }
        }
    }),
    {
        c() {
            i(n.$$.fragment)
        },
        l(e) {
            f(n.$$.fragment, e)
        },
        m(e, s) {
            c(n, e, s),
            r = !0
        },
        p(e, s) {
            const t = {};
            s & 65 && (t.$$scope = {
                dirty: s,
                ctx: e
            }),
            n.$set(t)
        },
        i(e) {
            r || (l(n.$$.fragment, e),
            r = !0)
        },
        o(e) {
            u(n.$$.fragment, e),
            r = !1
        },
        d(e) {
            m(n, e)
        }
    }
}
function j($) {
    let n, r, e, s;
    return n = new C({
        props: {
            $$slots: {
                default: [R]
            },
            $$scope: {
                ctx: $
            }
        }
    }),
    e = new C({
        props: {
            $$slots: {
                default: [F]
            },
            $$scope: {
                ctx: $
            }
        }
    }),
    {
        c() {
            i(n.$$.fragment),
            r = _(),
            i(e.$$.fragment)
        },
        l(t) {
            f(n.$$.fragment, t),
            r = d(t),
            f(e.$$.fragment, t)
        },
        m(t, a) {
            c(n, t, a),
            w(t, r, a),
            c(e, t, a),
            s = !0
        },
        p(t, a) {
            const o = {};
            a & 66 && (o.$$scope = {
                dirty: a,
                ctx: t
            }),
            n.$set(o);
            const p = {};
            a & 65 && (p.$$scope = {
                dirty: a,
                ctx: t
            }),
            e.$set(p)
        },
        i(t) {
            s || (l(n.$$.fragment, t),
            l(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            u(n.$$.fragment, t),
            u(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            m(n, t),
            t && h(r),
            m(e, t)
        }
    }
}
function z($) {
    let n, r, e, s;
    return n = new P.PageTitle({
        props: {
            title: "MINTSCAN",
            titleH: 1,
            styleTitle: {
                letterSpacing: "0.2rem"
            },
            description: "Interchain block explorer and data analytics for sovereign blockchain networks.",
            backgroundOpatity: .02,
            backgroundImage: "/assets/icons/icon/_icon/cosmostation.svg",
            $$slots: {
                default: [N]
            },
            $$scope: {
                ctx: $
            }
        }
    }),
    e = new y({
        props: {
            row: "auto auto",
            $$slots: {
                default: [j]
            },
            $$scope: {
                ctx: $
            }
        }
    }),
    {
        c() {
            i(n.$$.fragment),
            r = _(),
            i(e.$$.fragment)
        },
        l(t) {
            f(n.$$.fragment, t),
            r = d(t),
            f(e.$$.fragment, t)
        },
        m(t, a) {
            c(n, t, a),
            w(t, r, a),
            c(e, t, a),
            s = !0
        },
        p(t, a) {
            const o = {};
            a & 65 && (o.$$scope = {
                dirty: a,
                ctx: t
            }),
            n.$set(o);
            const p = {};
            a & 67 && (p.$$scope = {
                dirty: a,
                ctx: t
            }),
            e.$set(p)
        },
        i(t) {
            s || (l(n.$$.fragment, t),
            l(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            u(n.$$.fragment, t),
            u(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            m(n, t),
            t && h(r),
            m(e, t)
        }
    }
}
function J($) {
    let n, r;
    return n = new q({
        props: {
            forcePending: !$[0],
            minHeight: "80vh",
            outline: !0,
            $$slots: {
                default: [z]
            },
            $$scope: {
                ctx: $
            }
        }
    }),
    {
        c() {
            i(n.$$.fragment)
        },
        l(e) {
            f(n.$$.fragment, e)
        },
        m(e, s) {
            c(n, e, s),
            r = !0
        },
        p(e, s) {
            const t = {};
            s & 1 && (t.forcePending = !e[0]),
            s & 67 && (t.$$scope = {
                dirty: s,
                ctx: e
            }),
            n.$set(t)
        },
        i(e) {
            r || (l(n.$$.fragment, e),
            r = !0)
        },
        o(e) {
            u(n.$$.fragment, e),
            r = !1
        },
        d(e) {
            m(n, e)
        }
    }
}
function K($) {
    let n, r, e, s;
    return n = new P.Head({
        props: {
            title: "Interchain Explorer"
        }
    }),
    e = new L({
        props: {
            $$slots: {
                default: [J]
            },
            $$scope: {
                ctx: $
            }
        }
    }),
    {
        c() {
            i(n.$$.fragment),
            r = _(),
            i(e.$$.fragment)
        },
        l(t) {
            f(n.$$.fragment, t),
            r = d(t),
            f(e.$$.fragment, t)
        },
        m(t, a) {
            c(n, t, a),
            w(t, r, a),
            c(e, t, a),
            s = !0
        },
        p(t, [a]) {
            const o = {};
            a & 67 && (o.$$scope = {
                dirty: a,
                ctx: t
            }),
            e.$set(o)
        },
        i(t) {
            s || (l(n.$$.fragment, t),
            l(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            u(n.$$.fragment, t),
            u(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            m(n, t),
            t && h(r),
            m(e, t)
        }
    }
}
function Q($, n, r) {
    let e, s, t;
    I(!1),
    A(()=>{
        a.connect(void 0)
    }
    , [M("Overview", "/chains/overview")]);
    let a = D.Firebase.Chain.info.consume()
      , {writable: o} = G.PinChain;
    b($, o, g=>r(4, s = g));
    let {writable: p} = a;
    return b($, p, g=>r(0, t = g)),
    B(()=>a.release()),
    $.$$.update = ()=>{
        $.$$.dirty & 17 && r(1, e = O(()=>T.Listing.getLists(t, s)))
    }
    ,
    [t, e, o, p, s]
}
class Y extends k {
    constructor(n) {
        super(),
        S(this, n, Q, K, H, {})
    }
}
export {Y as component};
