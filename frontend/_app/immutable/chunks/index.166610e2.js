import {S as H, i as J, s as P, e as k, a as C, c as p, L as D, d as v, f as q, g as d, k as z, j as y, t as g, u as N, l as b, m as j, F as A, n as B, p as K, q as M, r as O, C as Q, D as R, E as T, G as U, H as W, I as X, J as Y} from "./index.05f6d0f6.js";
import {e as S} from "./index.97270af3.js";
import {$ as Z} from "./index.0136be6f.js";
function w(f) {
    let e, t, n;
    return t = new Z({
        props: {
            path: f[2],
            size: f[5]
        }
    }),
    {
        c() {
            e = k("div"),
            B(t.$$.fragment),
            this.h()
        },
        l(s) {
            e = p(s, "DIV", {
                class: !0
            });
            var l = D(e);
            K(t.$$.fragment, l),
            l.forEach(v),
            this.h()
        },
        h() {
            d(e, "class", "icon svelte-nxv5cf")
        },
        m(s, l) {
            z(s, e, l),
            M(t, e, null),
            n = !0
        },
        p(s, l) {
            const a = {};
            l & 4 && (a.path = s[2]),
            l & 32 && (a.size = s[5]),
            t.$set(a)
        },
        i(s) {
            n || (g(t.$$.fragment, s),
            n = !0)
        },
        o(s) {
            b(t.$$.fragment, s),
            n = !1
        },
        d(s) {
            s && v(e),
            O(t)
        }
    }
}
function F(f) {
    let e, t;
    return {
        c() {
            e = k("div"),
            t = Q(f[4]),
            this.h()
        },
        l(n) {
            e = p(n, "DIV", {
                class: !0
            });
            var s = D(e);
            t = R(s, f[4]),
            s.forEach(v),
            this.h()
        },
        h() {
            d(e, "class", "title svelte-nxv5cf")
        },
        m(n, s) {
            z(n, e, s),
            y(e, t)
        },
        p(n, s) {
            s & 16 && T(t, n[4])
        },
        d(n) {
            n && v(e)
        }
    }
}
function G(f) {
    let e, t, n;
    const s = f[8].default
      , l = U(s, f, f[7], null);
    return {
        c() {
            e = k("div"),
            l && l.c(),
            this.h()
        },
        l(a) {
            e = p(a, "DIV", {
                class: !0,
                style: !0
            });
            var c = D(e);
            l && l.l(c),
            c.forEach(v),
            this.h()
        },
        h() {
            d(e, "class", "content svelte-nxv5cf"),
            d(e, "style", t = S(f[0]))
        },
        m(a, c) {
            z(a, e, c),
            l && l.m(e, null),
            n = !0
        },
        p(a, c) {
            l && l.p && (!n || c & 128) && W(l, s, a, a[7], n ? Y(s, a[7], c, null) : X(a[7]), null),
            (!n || c & 1 && t !== (t = S(a[0]))) && d(e, "style", t)
        },
        i(a) {
            n || (g(l, a),
            n = !0)
        },
        o(a) {
            b(l, a),
            n = !1
        },
        d(a) {
            a && v(e),
            l && l.d(a)
        }
    }
}
function x(f) {
    let e, t, n, s, l, a, c, E, h, m, o = f[2] && w(f), i = f[4] && F(f), u = f[6].default && G(f);
    return {
        c() {
            e = k("div"),
            t = k("div"),
            n = k("div"),
            s = C(),
            l = k("div"),
            o && o.c(),
            a = C(),
            c = k("div"),
            i && i.c(),
            E = C(),
            u && u.c(),
            this.h()
        },
        l(r) {
            e = p(r, "DIV", {
                "data-notification": !0,
                class: !0,
                style: !0
            });
            var _ = D(e);
            t = p(_, "DIV", {
                class: !0,
                "data-type": !0
            });
            var I = D(t);
            n = p(I, "DIV", {
                class: !0
            }),
            D(n).forEach(v),
            s = q(I),
            l = p(I, "DIV", {
                class: !0
            });
            var V = D(l);
            o && o.l(V),
            a = q(V),
            c = p(V, "DIV", {
                class: !0
            });
            var L = D(c);
            i && i.l(L),
            L.forEach(v),
            V.forEach(v),
            E = q(I),
            u && u.l(I),
            I.forEach(v),
            _.forEach(v),
            this.h()
        },
        h() {
            d(n, "class", "background svelte-nxv5cf"),
            d(c, "class", "content-field svelte-nxv5cf"),
            d(l, "class", "top-field svelte-nxv5cf"),
            d(t, "class", "content-root svelte-nxv5cf"),
            d(t, "data-type", f[1]),
            d(e, "data-notification", ""),
            d(e, "class", "root svelte-nxv5cf"),
            d(e, "style", h = S(f[3]))
        },
        m(r, _) {
            z(r, e, _),
            y(e, t),
            y(t, n),
            y(t, s),
            y(t, l),
            o && o.m(l, null),
            y(l, a),
            y(l, c),
            i && i.m(c, null),
            y(t, E),
            u && u.m(t, null),
            m = !0
        },
        p(r, [_]) {
            r[2] ? o ? (o.p(r, _),
            _ & 4 && g(o, 1)) : (o = w(r),
            o.c(),
            g(o, 1),
            o.m(l, a)) : o && (N(),
            b(o, 1, 1, ()=>{
                o = null
            }
            ),
            j()),
            r[4] ? i ? i.p(r, _) : (i = F(r),
            i.c(),
            i.m(c, null)) : i && (i.d(1),
            i = null),
            r[6].default ? u ? (u.p(r, _),
            _ & 64 && g(u, 1)) : (u = G(r),
            u.c(),
            g(u, 1),
            u.m(t, null)) : u && (N(),
            b(u, 1, 1, ()=>{
                u = null
            }
            ),
            j()),
            (!m || _ & 2) && d(t, "data-type", r[1]),
            (!m || _ & 8 && h !== (h = S(r[3]))) && d(e, "style", h)
        },
        i(r) {
            m || (g(o),
            g(u),
            m = !0)
        },
        o(r) {
            b(o),
            b(u),
            m = !1
        },
        d(r) {
            r && v(e),
            o && o.d(),
            i && i.d(),
            u && u.d()
        }
    }
}
function $(f, e, t) {
    let {$$slots: n={}, $$scope: s} = e;
    const l = A(n);
    let {type: a="default"} = e
      , {icon: c=void 0} = e
      , {style: E={}} = e
      , {styleContent: h={}} = e
      , {title: m=void 0} = e
      , {iconSize: o=1.1} = e;
    return f.$$set = i=>{
        "type"in i && t(1, a = i.type),
        "icon"in i && t(2, c = i.icon),
        "style"in i && t(3, E = i.style),
        "styleContent"in i && t(0, h = i.styleContent),
        "title"in i && t(4, m = i.title),
        "iconSize"in i && t(5, o = i.iconSize),
        "$$scope"in i && t(7, s = i.$$scope)
    }
    ,
    f.$$.update = ()=>{
        f.$$.dirty & 4 && c && t(0, h.paddingLeft = "1.8rem", h)
    }
    ,
    [h, a, c, E, m, o, l, s, n]
}
class ie extends H {
    constructor(e) {
        super(),
        J(this, e, $, x, P, {
            type: 1,
            icon: 2,
            style: 3,
            styleContent: 0,
            title: 4,
            iconSize: 5
        })
    }
}
export {ie as N};
