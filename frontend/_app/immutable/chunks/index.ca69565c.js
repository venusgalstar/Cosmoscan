import {S as k, i as $, s as x, n as h, p as d, q as g, t as o, l as m, r as p, b as y, k as u, u as q, m as C, d as _, a as A, f as B, C as T, D as b, E as S} from "./index.05f6d0f6.js";
import {w as D, S as E, Y as N, T as U} from "./index.0136be6f.js";
import "./index.97270af3.js";
import "./singletons.9d9d4190.js";
function w(r) {
    let t, a, e, s;
    return t = new N({
        props: {
            mid: !0,
            h: 4,
            harmonyShade: 2400,
            $$slots: {
                default: [Y]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    e = new U({
        props: {
            mid: !0,
            h: 5,
            pad: !0,
            harmonyShade: 2400,
            $$slots: {
                default: [j]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            h(t.$$.fragment),
            a = A(),
            h(e.$$.fragment)
        },
        l(n) {
            d(t.$$.fragment, n),
            a = B(n),
            d(e.$$.fragment, n)
        },
        m(n, i) {
            g(t, n, i),
            u(n, a, i),
            g(e, n, i),
            s = !0
        },
        p(n, i) {
            const c = {};
            i & 130 && (c.$$scope = {
                dirty: i,
                ctx: n
            }),
            t.$set(c);
            const l = {};
            i & 129 && (l.$$scope = {
                dirty: i,
                ctx: n
            }),
            e.$set(l)
        },
        i(n) {
            s || (o(t.$$.fragment, n),
            o(e.$$.fragment, n),
            s = !0)
        },
        o(n) {
            m(t.$$.fragment, n),
            m(e.$$.fragment, n),
            s = !1
        },
        d(n) {
            p(t, n),
            n && _(a),
            p(e, n)
        }
    }
}
function Y(r) {
    let t;
    return {
        c() {
            t = T(r[1])
        },
        l(a) {
            t = b(a, r[1])
        },
        m(a, e) {
            u(a, t, e)
        },
        p(a, e) {
            e & 2 && S(t, a[1])
        },
        d(a) {
            a && _(t)
        }
    }
}
function j(r) {
    let t;
    return {
        c() {
            t = T(r[0])
        },
        l(a) {
            t = b(a, r[0])
        },
        m(a, e) {
            u(a, t, e)
        },
        p(a, e) {
            e & 1 && S(t, a[0])
        },
        d(a) {
            a && _(t)
        }
    }
}
function z(r) {
    let t, a, e = !r[2] && w(r);
    return {
        c() {
            e && e.c(),
            t = y()
        },
        l(s) {
            e && e.l(s),
            t = y()
        },
        m(s, n) {
            e && e.m(s, n),
            u(s, t, n),
            a = !0
        },
        p(s, n) {
            s[2] ? e && (q(),
            m(e, 1, 1, ()=>{
                e = null
            }
            ),
            C()) : e ? (e.p(s, n),
            n & 4 && o(e, 1)) : (e = w(s),
            e.c(),
            o(e, 1),
            e.m(t.parentNode, t))
        },
        i(s) {
            a || (o(e),
            a = !0)
        },
        o(s) {
            m(e),
            a = !1
        },
        d(s) {
            e && e.d(s),
            s && _(t)
        }
    }
}
function F(r) {
    let t, a;
    return t = new D({
        props: {
            style: {
                padding: "1.5rem",
                opacity: .7
            },
            $$slots: {
                default: [z]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            h(t.$$.fragment)
        },
        l(e) {
            d(t.$$.fragment, e)
        },
        m(e, s) {
            g(t, e, s),
            a = !0
        },
        p(e, [s]) {
            const n = {};
            s & 135 && (n.$$scope = {
                dirty: s,
                ctx: e
            }),
            t.$set(n)
        },
        i(e) {
            a || (o(t.$$.fragment, e),
            a = !0)
        },
        o(e) {
            m(t.$$.fragment, e),
            a = !1
        },
        d(e) {
            p(t, e)
        }
    }
}
function G(r, t, a) {
    let {message: e=""} = t
      , {header: s="TBU"} = t
      , {height: n="100%"} = t
      , {ad: i=!1} = t
      , {style: c={}} = t
      , {prop: l={}} = t;
    return r.$$set = f=>{
        "message"in f && a(0, e = f.message),
        "header"in f && a(1, s = f.header),
        "height"in f && a(3, n = f.height),
        "ad"in f && a(2, i = f.ad),
        "style"in f && a(4, c = f.style),
        "prop"in f && a(5, l = f.prop)
    }
    ,
    E.Theme.writable,
    [e, s, i, n, c, l]
}
class L extends k {
    constructor(t) {
        super(),
        $(this, t, G, F, x, {
            message: 0,
            header: 1,
            height: 3,
            ad: 2,
            style: 4,
            prop: 5
        })
    }
}
export {L as T};
