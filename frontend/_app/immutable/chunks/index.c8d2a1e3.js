import {S as U, i as j, s as z, n as c, p, q as $, t as m, l as _, r as d, a as k, f as y, k as C, d as h, w as A, b as S, u as J, m as T, G as K, H as L, I as M, J as O, z as E, A as H, B} from "./index.05f6d0f6.js";
import {G as N, f as P, F as Q, l as R, a1 as V} from "./index.0136be6f.js";
import {j as D} from "./index.97270af3.js";
import "./singletons.9d9d4190.js";
const W = r=>({
    displayItems: r & 256,
    page: r & 1
})
  , G = r=>({
    displayItems: r[8],
    page: r[0]
});
function X(r) {
    let e, n;
    return e = new Q({
        props: {
            gap: .5
        }
    }),
    {
        c() {
            c(e.$$.fragment)
        },
        l(t) {
            p(e.$$.fragment, t)
        },
        m(t, i) {
            $(e, t, i),
            n = !0
        },
        p: A,
        i(t) {
            n || (m(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            _(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}
function Y(r) {
    let e, n;
    return e = new R.Empty({
        props: {
            prop: r[7]
        }
    }),
    {
        c() {
            c(e.$$.fragment)
        },
        l(t) {
            p(e.$$.fragment, t)
        },
        m(t, i) {
            $(e, t, i),
            n = !0
        },
        p(t, i) {
            const s = {};
            i & 128 && (s.prop = t[7]),
            e.$set(s)
        },
        i(t) {
            n || (m(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            _(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}
function Z(r) {
    let e;
    const n = r[9].default
      , t = K(n, r, r[12], G);
    return {
        c() {
            t && t.c()
        },
        l(i) {
            t && t.l(i)
        },
        m(i, s) {
            t && t.m(i, s),
            e = !0
        },
        p(i, s) {
            t && t.p && (!e || s & 4353) && L(t, n, i, i[12], e ? O(n, i[12], s, W) : M(i[12]), G)
        },
        i(i) {
            e || (m(t, i),
            e = !0)
        },
        o(i) {
            _(t, i),
            e = !1
        },
        d(i) {
            t && t.d(i)
        }
    }
}
function v(r) {
    let e, n, t, i;
    const s = [Z, Y]
      , f = [];
    function o(a, u) {
        return a[8] && a[8].length > 0 ? 0 : 1
    }
    return e = o(r),
    n = f[e] = s[e](r),
    {
        c() {
            n.c(),
            t = S()
        },
        l(a) {
            n.l(a),
            t = S()
        },
        m(a, u) {
            f[e].m(a, u),
            C(a, t, u),
            i = !0
        },
        p(a, u) {
            let g = e;
            e = o(a),
            e === g ? f[e].p(a, u) : (J(),
            _(f[g], 1, 1, ()=>{
                f[g] = null
            }
            ),
            T(),
            n = f[e],
            n ? n.p(a, u) : (n = f[e] = s[e](a),
            n.c()),
            m(n, 1),
            n.m(t.parentNode, t))
        },
        i(a) {
            i || (m(n),
            i = !0)
        },
        o(a) {
            _(n),
            i = !1
        },
        d(a) {
            f[e].d(a),
            a && h(t)
        }
    }
}
function x(r) {
    let e, n, t, i;
    function s(a) {
        r[10](a)
    }
    function f(a) {
        r[11](a)
    }
    let o = {
        style: r[6],
        items: r[1],
        options: {
            disablePageEnd: r[5],
            disablePageNext: !1,
            buttonCount: r[4],
            itemCountPerPage: r[2]
        }
    };
    return r[0] !== void 0 && (o.page = r[0]),
    r[8] !== void 0 && (o.selectedItems = r[8]),
    e = new V({
        props: o
    }),
    E.push(()=>H(e, "page", s)),
    E.push(()=>H(e, "selectedItems", f)),
    {
        c() {
            c(e.$$.fragment)
        },
        l(a) {
            p(e.$$.fragment, a)
        },
        m(a, u) {
            $(e, a, u),
            i = !0
        },
        p(a, u) {
            const g = {};
            u & 64 && (g.style = a[6]),
            u & 2 && (g.items = a[1]),
            u & 52 && (g.options = {
                disablePageEnd: a[5],
                disablePageNext: !1,
                buttonCount: a[4],
                itemCountPerPage: a[2]
            }),
            !n && u & 1 && (n = !0,
            g.page = a[0],
            B(()=>n = !1)),
            !t && u & 256 && (t = !0,
            g.selectedItems = a[8],
            B(()=>t = !1)),
            e.$set(g)
        },
        i(a) {
            i || (m(e.$$.fragment, a),
            i = !0)
        },
        o(a) {
            _(e.$$.fragment, a),
            i = !1
        },
        d(a) {
            d(e, a)
        }
    }
}
function ee(r) {
    let e, n, t, i;
    return e = new P({}),
    t = new P({
        props: {
            $$slots: {
                default: [x]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            c(e.$$.fragment),
            n = k(),
            c(t.$$.fragment)
        },
        l(s) {
            p(e.$$.fragment, s),
            n = y(s),
            p(t.$$.fragment, s)
        },
        m(s, f) {
            $(e, s, f),
            C(s, n, f),
            $(t, s, f),
            i = !0
        },
        p(s, f) {
            const o = {};
            f & 4471 && (o.$$scope = {
                dirty: f,
                ctx: s
            }),
            t.$set(o)
        },
        i(s) {
            i || (m(e.$$.fragment, s),
            m(t.$$.fragment, s),
            i = !0)
        },
        o(s) {
            _(e.$$.fragment, s),
            _(t.$$.fragment, s),
            i = !1
        },
        d(s) {
            d(e, s),
            s && h(n),
            d(t, s)
        }
    }
}
function te(r) {
    let e, n;
    return e = new N({
        props: {
            column: "1fr auto",
            $$slots: {
                default: [ee]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            c(e.$$.fragment)
        },
        l(t) {
            p(e.$$.fragment, t)
        },
        m(t, i) {
            $(e, t, i),
            n = !0
        },
        p(t, i) {
            const s = {};
            i & 4471 && (s.$$scope = {
                dirty: i,
                ctx: t
            }),
            e.$set(s)
        },
        i(t) {
            n || (m(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            _(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}
function ne(r) {
    let e, n, t, i, s, f;
    return e = new P({
        props: {
            overflow: "visible",
            $$slots: {
                default: [X]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    t = new P({
        props: {
            height: "100%",
            $$slots: {
                default: [v]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    s = new P({
        props: {
            $$slots: {
                default: [te]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            c(e.$$.fragment),
            n = k(),
            c(t.$$.fragment),
            i = k(),
            c(s.$$.fragment)
        },
        l(o) {
            p(e.$$.fragment, o),
            n = y(o),
            p(t.$$.fragment, o),
            i = y(o),
            p(s.$$.fragment, o)
        },
        m(o, a) {
            $(e, o, a),
            C(o, n, a),
            $(t, o, a),
            C(o, i, a),
            $(s, o, a),
            f = !0
        },
        p(o, a) {
            const u = {};
            a & 4096 && (u.$$scope = {
                dirty: a,
                ctx: o
            }),
            e.$set(u);
            const g = {};
            a & 4481 && (g.$$scope = {
                dirty: a,
                ctx: o
            }),
            t.$set(g);
            const b = {};
            a & 4471 && (b.$$scope = {
                dirty: a,
                ctx: o
            }),
            s.$set(b)
        },
        i(o) {
            f || (m(e.$$.fragment, o),
            m(t.$$.fragment, o),
            m(s.$$.fragment, o),
            f = !0)
        },
        o(o) {
            _(e.$$.fragment, o),
            _(t.$$.fragment, o),
            _(s.$$.fragment, o),
            f = !1
        },
        d(o) {
            d(e, o),
            o && h(n),
            d(t, o),
            o && h(i),
            d(s, o)
        }
    }
}
function ae(r) {
    let e, n;
    return e = new N({
        props: {
            row: "auto 1fr auto",
            style: {
                minHeight: D(r[3])
            },
            full: !0,
            $$slots: {
                default: [ne]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            c(e.$$.fragment)
        },
        l(t) {
            p(e.$$.fragment, t)
        },
        m(t, i) {
            $(e, t, i),
            n = !0
        },
        p(t, [i]) {
            const s = {};
            i & 8 && (s.style = {
                minHeight: D(t[3])
            }),
            i & 4599 && (s.$$scope = {
                dirty: i,
                ctx: t
            }),
            e.$set(s)
        },
        i(t) {
            n || (m(e.$$.fragment, t),
            n = !0)
        },
        o(t) {
            _(e.$$.fragment, t),
            n = !1
        },
        d(t) {
            d(e, t)
        }
    }
}
function ie(r, e, n) {
    let {$$slots: t={}, $$scope: i} = e
      , {items: s} = e
      , {itemCountPerPage: f=8} = e
      , {minHeight: o=0} = e
      , {paginationButtonCount: a=5} = e
      , {paginationDisablePageEnd: u=!1} = e
      , {page: g=0} = e
      , {paginationStyle: b={
        paddingTop: "1rem"
    }} = e
      , {emptyProp: I={
        message: "No items to display",
        title: "-"
    }} = e
      , w = [];
    function q(l) {
        g = l,
        n(0, g)
    }
    function F(l) {
        w = l,
        n(8, w)
    }
    return r.$$set = l=>{
        "items"in l && n(1, s = l.items),
        "itemCountPerPage"in l && n(2, f = l.itemCountPerPage),
        "minHeight"in l && n(3, o = l.minHeight),
        "paginationButtonCount"in l && n(4, a = l.paginationButtonCount),
        "paginationDisablePageEnd"in l && n(5, u = l.paginationDisablePageEnd),
        "page"in l && n(0, g = l.page),
        "paginationStyle"in l && n(6, b = l.paginationStyle),
        "emptyProp"in l && n(7, I = l.emptyProp),
        "$$scope"in l && n(12, i = l.$$scope)
    }
    ,
    [g, s, f, o, a, u, b, I, w, t, q, F, i]
}
class le extends U {
    constructor(e) {
        super(),
        j(this, e, ie, ae, z, {
            items: 1,
            itemCountPerPage: 2,
            minHeight: 3,
            paginationButtonCount: 4,
            paginationDisablePageEnd: 5,
            page: 0,
            paginationStyle: 6,
            emptyProp: 7
        })
    }
}
export {le as C};
