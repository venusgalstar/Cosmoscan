import {S as we, i as ke, s as xe, n as b, a as v, p as w, f as h, q as k, k as V, t as p, l as d, r as x, d as m, v as De, e as I, c as C, L as y, g as u, Z as $e, Y as Ie, j as c, w as W, u as Ce, m as Ee, C as A, D as Y} from "./index.8311dc4e.js";
import {s as Ve, a as ge} from "./index.e5219fc6.js";
import {B as ce, C as ye, aG as Ne, s as _e, i as Be, j as Se, U as Te, G as be, k as N, f as Q, F as ue, D as ve, l as Fe, T as pe, q as ie, n as me, az as Ge} from "./index.5903bf3f.js";
import "./singletons.7f126100.js";
function Oe(f) {
    let t, s;
    return t = new pe({
        props: {
            h: 1,
            pad: !0,
            style: {
                fontSize: "1.6rem",
                marginTop: "-4rem"
            },
            mid: !0,
            harmonyShade: 2100,
            $$slots: {
                default: [Re]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function je(f) {
    let t, s;
    return t = new pe({
        props: {
            h: 1,
            harmonyShade: 2100,
            pad: !0,
            mid: !0,
            $$slots: {
                default: [Ue]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function Re(f) {
    let t, s, e;
    return {
        c() {
            t = A("404 NOT FOUND"),
            s = I("br"),
            e = A(`
										Somethings's wrong here.`)
        },
        l(l) {
            t = Y(l, "404 NOT FOUND"),
            s = C(l, "BR", {}),
            e = Y(l, `
										Somethings's wrong here.`)
        },
        m(l, r) {
            V(l, t, r),
            V(l, s, r),
            V(l, e, r)
        },
        p: W,
        d(l) {
            l && m(t),
            l && m(s),
            l && m(e)
        }
    }
}
function Ue(f) {
    let t, s, e;
    return {
        c() {
            t = A(`404 NOT FOUND
										`),
            s = I("br"),
            e = A(`
										Somethings's wrong here.`)
        },
        l(l) {
            t = Y(l, `404 NOT FOUND
										`),
            s = C(l, "BR", {}),
            e = Y(l, `
										Somethings's wrong here.`)
        },
        m(l, r) {
            V(l, t, r),
            V(l, s, r),
            V(l, e, r)
        },
        p: W,
        d(l) {
            l && m(t),
            l && m(s),
            l && m(e)
        }
    }
}
function qe(f) {
    let t;
    return {
        c() {
            t = A("The link you clicked may be broken or the page may have been removed.")
        },
        l(s) {
            t = Y(s, "The link you clicked may be broken or the page may have been removed.")
        },
        m(s, e) {
            V(s, t, e)
        },
        d(s) {
            s && m(t)
        }
    }
}
function Le(f) {
    let t, s, e, l, r, o;
    const i = [je, Oe]
      , g = [];
    function a($, n) {
        return n & 1 && (t = null),
        t == null && (t = !!N.responsive($[0], {
            xs: !1,
            sm: !0
        })),
        t ? 0 : 1
    }
    return s = a(f, -1),
    e = g[s] = i[s](f),
    r = new pe({
        props: {
            h: 4,
            light: !0,
            harmonyShade: 1800,
            $$slots: {
                default: [qe]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            e.c(),
            l = v(),
            b(r.$$.fragment)
        },
        l($) {
            e.l($),
            l = h($),
            w(r.$$.fragment, $)
        },
        m($, n) {
            g[s].m($, n),
            V($, l, n),
            k(r, $, n),
            o = !0
        },
        p($, n) {
            let D = s;
            s = a($, n),
            s !== D && (Ce(),
            d(g[D], 1, 1, ()=>{
                g[D] = null
            }
            ),
            Ee(),
            e = g[s],
            e || (e = g[s] = i[s]($),
            e.c()),
            p(e, 1),
            e.m(l.parentNode, l));
            const S = {};
            n & 16 && (S.$$scope = {
                dirty: n,
                ctx: $
            }),
            r.$set(S)
        },
        i($) {
            o || (p(e),
            p(r.$$.fragment, $),
            o = !0)
        },
        o($) {
            d(e),
            d(r.$$.fragment, $),
            o = !1
        },
        d($) {
            g[s].d($),
            $ && m(l),
            x(r, $)
        }
    }
}
function ze(f) {
    let t, s, e, l, r, o, i, g;
    return t = new ie.Link({
        props: {
            text: "Back",
            icon: me.Common.Back,
            padding: "0 .8rem 0 0.3rem"
        }
    }),
    e = new Ge({
        props: {
            width: .5
        }
    }),
    r = new ie.Link({
        props: {
            onClick: f[2],
            text: "Home",
            icon: me.Common.Cosmostation,
            padding: "0 .8rem 0 0.3rem"
        }
    }),
    i = new ie.Link({
        props: {
            text: "Explorers",
            onClick: f[3],
            icon: me.Common.Explorer,
            padding: "0 .8rem 0 0.3rem"
        }
    }),
    {
        c() {
            b(t.$$.fragment),
            s = v(),
            b(e.$$.fragment),
            l = v(),
            b(r.$$.fragment),
            o = v(),
            b(i.$$.fragment)
        },
        l(a) {
            w(t.$$.fragment, a),
            s = h(a),
            w(e.$$.fragment, a),
            l = h(a),
            w(r.$$.fragment, a),
            o = h(a),
            w(i.$$.fragment, a)
        },
        m(a, $) {
            k(t, a, $),
            V(a, s, $),
            k(e, a, $),
            V(a, l, $),
            k(r, a, $),
            V(a, o, $),
            k(i, a, $),
            g = !0
        },
        p: W,
        i(a) {
            g || (p(t.$$.fragment, a),
            p(e.$$.fragment, a),
            p(r.$$.fragment, a),
            p(i.$$.fragment, a),
            g = !0)
        },
        o(a) {
            d(t.$$.fragment, a),
            d(e.$$.fragment, a),
            d(r.$$.fragment, a),
            d(i.$$.fragment, a),
            g = !1
        },
        d(a) {
            x(t, a),
            a && m(s),
            x(e, a),
            a && m(l),
            x(r, a),
            a && m(o),
            x(i, a)
        }
    }
}
function He(f) {
    let t, s, e, l, r, o, i, g, a, $;
    return t = new Q({
        props: {
            overflow: "visible",
            $$slots: {
                default: [Le]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    e = new ve({
        props: {
            height: 1
        }
    }),
    r = new Fe.SearchButton({
        props: {
            width: N.responsive(f[0], {
                xs: "100%",
                sm: "20",
                md: "25",
                lg: "30"
            }),
            placeHolder: "Search",
            onClick: f[1]
        }
    }),
    i = new ve({
        props: {
            line: !0
        }
    }),
    a = new ue({
        props: {
            gap: .5,
            $$slots: {
                default: [ze]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment),
            s = v(),
            b(e.$$.fragment),
            l = v(),
            b(r.$$.fragment),
            o = v(),
            b(i.$$.fragment),
            g = v(),
            b(a.$$.fragment)
        },
        l(n) {
            w(t.$$.fragment, n),
            s = h(n),
            w(e.$$.fragment, n),
            l = h(n),
            w(r.$$.fragment, n),
            o = h(n),
            w(i.$$.fragment, n),
            g = h(n),
            w(a.$$.fragment, n)
        },
        m(n, D) {
            k(t, n, D),
            V(n, s, D),
            k(e, n, D),
            V(n, l, D),
            k(r, n, D),
            V(n, o, D),
            k(i, n, D),
            V(n, g, D),
            k(a, n, D),
            $ = !0
        },
        p(n, D) {
            const S = {};
            D & 17 && (S.$$scope = {
                dirty: D,
                ctx: n
            }),
            t.$set(S);
            const B = {};
            D & 1 && (B.width = N.responsive(n[0], {
                xs: "100%",
                sm: "20",
                md: "25",
                lg: "30"
            })),
            r.$set(B);
            const F = {};
            D & 16 && (F.$$scope = {
                dirty: D,
                ctx: n
            }),
            a.$set(F)
        },
        i(n) {
            $ || (p(t.$$.fragment, n),
            p(e.$$.fragment, n),
            p(r.$$.fragment, n),
            p(i.$$.fragment, n),
            p(a.$$.fragment, n),
            $ = !0)
        },
        o(n) {
            d(t.$$.fragment, n),
            d(e.$$.fragment, n),
            d(r.$$.fragment, n),
            d(i.$$.fragment, n),
            d(a.$$.fragment, n),
            $ = !1
        },
        d(n) {
            x(t, n),
            n && m(s),
            x(e, n),
            n && m(l),
            x(r, n),
            n && m(o),
            x(i, n),
            n && m(g),
            x(a, n)
        }
    }
}
function Me(f) {
    let t, s;
    return t = new be({
        props: {
            gap: 1,
            $$slots: {
                default: [He]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        p(e, l) {
            const r = {};
            l & 17 && (r.$$scope = {
                dirty: l,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function Pe(f) {
    let t, s;
    return t = new Q({
        props: {
            overflow: "visible",
            $$slots: {
                default: [Me]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        p(e, l) {
            const r = {};
            l & 17 && (r.$$scope = {
                dirty: l,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function Ae(f) {
    let t, s;
    return t = new ue({
        props: {
            alignItems: "center",
            full: !0,
            $$slots: {
                default: [Pe]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        p(e, l) {
            const r = {};
            l & 17 && (r.$$scope = {
                dirty: l,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function Ye(f) {
    let t, s, e, l, r, o, i, g, a, $, n, D, S, B, F, X, _, G, ee, O, te, j, re, R, se, U, le, q, ne, L, ae, z, fe, H, oe, M;
    return {
        c() {
            t = I("div"),
            s = I("div"),
            e = I("div"),
            l = v(),
            r = I("div"),
            o = I("div"),
            i = I("img"),
            a = v(),
            $ = I("div"),
            n = I("img"),
            S = v(),
            B = I("img"),
            X = v(),
            _ = I("div"),
            G = I("div"),
            ee = v(),
            O = I("div"),
            te = v(),
            j = I("div"),
            re = v(),
            R = I("div"),
            se = v(),
            U = I("div"),
            le = v(),
            q = I("div"),
            ne = v(),
            L = I("div"),
            ae = v(),
            z = I("div"),
            fe = v(),
            H = I("div"),
            oe = v(),
            M = I("div"),
            this.h()
        },
        l(P) {
            t = C(P, "DIV", {
                class: !0,
                style: !0
            });
            var T = y(t);
            s = C(T, "DIV", {
                class: !0,
                "data-font": !0
            });
            var de = y(s);
            e = C(de, "DIV", {
                class: !0
            }),
            y(e).forEach(m),
            de.forEach(m),
            l = h(T),
            r = C(T, "DIV", {
                class: !0
            });
            var Z = y(r);
            o = C(Z, "DIV", {
                class: !0
            });
            var J = y(o);
            i = C(J, "IMG", {
                class: !0,
                src: !0,
                width: !0,
                alt: !0
            }),
            a = h(J),
            $ = C(J, "DIV", {
                class: !0
            });
            var K = y($);
            n = C(K, "IMG", {
                alt: !0,
                class: !0,
                src: !0,
                width: !0
            }),
            S = h(K),
            B = C(K, "IMG", {
                class: !0,
                alt: !0,
                src: !0,
                width: !0
            }),
            K.forEach(m),
            J.forEach(m),
            X = h(Z),
            _ = C(Z, "DIV", {
                class: !0
            });
            var E = y(_);
            G = C(E, "DIV", {
                class: !0
            }),
            y(G).forEach(m),
            ee = h(E),
            O = C(E, "DIV", {
                class: !0
            }),
            y(O).forEach(m),
            te = h(E),
            j = C(E, "DIV", {
                class: !0
            }),
            y(j).forEach(m),
            re = h(E),
            R = C(E, "DIV", {
                class: !0
            }),
            y(R).forEach(m),
            se = h(E),
            U = C(E, "DIV", {
                class: !0
            }),
            y(U).forEach(m),
            le = h(E),
            q = C(E, "DIV", {
                class: !0
            }),
            y(q).forEach(m),
            ne = h(E),
            L = C(E, "DIV", {
                class: !0
            }),
            y(L).forEach(m),
            ae = h(E),
            z = C(E, "DIV", {
                class: !0
            }),
            y(z).forEach(m),
            fe = h(E),
            H = C(E, "DIV", {
                class: !0
            }),
            y(H).forEach(m),
            oe = h(E),
            M = C(E, "DIV", {
                class: !0
            }),
            y(M).forEach(m),
            E.forEach(m),
            Z.forEach(m),
            T.forEach(m),
            this.h()
        },
        h() {
            u(e, "class", "texts svelte-12hckfe"),
            u(s, "class", "central-body"),
            u(s, "data-font", "pin"),
            u(i, "class", "object_rocket svelte-12hckfe"),
            $e(i.src, g = "/assets/404/unit.png") || u(i, "src", g),
            u(i, "width", "80px"),
            u(i, "alt", ""),
            u(n, "alt", ""),
            u(n, "class", "object_earth svelte-12hckfe"),
            $e(n.src, D = "http://salehriaz.com/404Page/img/earth.svg") || u(n, "src", D),
            u(n, "width", "100px"),
            u(B, "class", "object_moon svelte-12hckfe"),
            u(B, "alt", ""),
            $e(B.src, F = "http://salehriaz.com/404Page/img/moon.svg") || u(B, "src", F),
            u(B, "width", "80px"),
            u($, "class", "earth-moon"),
            u(o, "class", "objects svelte-12hckfe"),
            u(G, "class", "star svelte-12hckfe"),
            u(O, "class", "star svelte-12hckfe"),
            u(j, "class", "star svelte-12hckfe"),
            u(R, "class", "star svelte-12hckfe"),
            u(U, "class", "star svelte-12hckfe"),
            u(q, "class", "star svelte-12hckfe"),
            u(L, "class", "star svelte-12hckfe"),
            u(z, "class", "star svelte-12hckfe"),
            u(H, "class", "star svelte-12hckfe"),
            u(M, "class", "star svelte-12hckfe"),
            u(_, "class", "glowing_stars svelte-12hckfe"),
            u(r, "class", "stars svelte-12hckfe"),
            u(t, "class", "bg-purple svelte-12hckfe"),
            Ie(t, "z-index", "0")
        },
        m(P, T) {
            V(P, t, T),
            c(t, s),
            c(s, e),
            c(t, l),
            c(t, r),
            c(r, o),
            c(o, i),
            c(o, a),
            c(o, $),
            c($, n),
            c($, S),
            c($, B),
            c(r, X),
            c(r, _),
            c(_, G),
            c(_, ee),
            c(_, O),
            c(_, te),
            c(_, j),
            c(_, re),
            c(_, R),
            c(_, se),
            c(_, U),
            c(_, le),
            c(_, q),
            c(_, ne),
            c(_, L),
            c(_, ae),
            c(_, z),
            c(_, fe),
            c(_, H),
            c(_, oe),
            c(_, M)
        },
        p: W,
        d(P) {
            P && m(t)
        }
    }
}
function Ze(f) {
    let t, s;
    return t = new ce.Absolute({
        props: {
            style: {
                position: "relative",
                width: N.responsive(f[0], {
                    xs: "20rem",
                    sm: "25rem",
                    xl: "25rem",
                    xxl: "30rem"
                }),
                height: N.responsive(f[0], {
                    xs: "20rem",
                    sm: "25rem",
                    xl: "25rem",
                    xxl: "30rem"
                }),
                borderRadius: "50%",
                overflow: "hidden",
                border: "solid 1rem var(--hq-lavender-purple-1200)"
            },
            $$slots: {
                default: [Ye]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        p(e, l) {
            const r = {};
            l & 1 && (r.style = {
                position: "relative",
                width: N.responsive(e[0], {
                    xs: "20rem",
                    sm: "25rem",
                    xl: "25rem",
                    xxl: "30rem"
                }),
                height: N.responsive(e[0], {
                    xs: "20rem",
                    sm: "25rem",
                    xl: "25rem",
                    xxl: "30rem"
                }),
                borderRadius: "50%",
                overflow: "hidden",
                border: "solid 1rem var(--hq-lavender-purple-1200)"
            }),
            l & 16 && (r.$$scope = {
                dirty: l,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function Je(f) {
    let t, s;
    return t = new ue({
        props: {
            full: !0,
            alignItems: "center",
            justifyContent: "center",
            $$slots: {
                default: [Ze]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        p(e, l) {
            const r = {};
            l & 17 && (r.$$scope = {
                dirty: l,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function Ke(f) {
    let t, s, e, l;
    return t = new Q({
        props: {
            style: {
                padding: `4rem ${N.responsive(f[0], {
                    xs: "2rem",
                    sm: "4rem",
                    md: "4rem",
                    lg: "4rem",
                    xl: "4rem",
                    xxl: "6rem"
                })}`
            },
            $$slots: {
                default: [Ae]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    e = new Q({
        props: {
            startRow: N.responsive(f[0], {
                lg: "1",
                xl: "auto"
            }),
            style: {
                padding: "4rem 0"
            },
            $$slots: {
                default: [Je]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment),
            s = v(),
            b(e.$$.fragment)
        },
        l(r) {
            w(t.$$.fragment, r),
            s = h(r),
            w(e.$$.fragment, r)
        },
        m(r, o) {
            k(t, r, o),
            V(r, s, o),
            k(e, r, o),
            l = !0
        },
        p(r, o) {
            const i = {};
            o & 1 && (i.style = {
                padding: `4rem ${N.responsive(r[0], {
                    xs: "2rem",
                    sm: "4rem",
                    md: "4rem",
                    lg: "4rem",
                    xl: "4rem",
                    xxl: "6rem"
                })}`
            }),
            o & 17 && (i.$$scope = {
                dirty: o,
                ctx: r
            }),
            t.$set(i);
            const g = {};
            o & 1 && (g.startRow = N.responsive(r[0], {
                lg: "1",
                xl: "auto"
            })),
            o & 17 && (g.$$scope = {
                dirty: o,
                ctx: r
            }),
            e.$set(g)
        },
        i(r) {
            l || (p(t.$$.fragment, r),
            p(e.$$.fragment, r),
            l = !0)
        },
        o(r) {
            d(t.$$.fragment, r),
            d(e.$$.fragment, r),
            l = !1
        },
        d(r) {
            x(t, r),
            r && m(s),
            x(e, r)
        }
    }
}
function Qe(f) {
    let t, s;
    return t = new be({
        props: {
            column: N.responsive(f[0], {
                lg: "1fr",
                xl: "1fr 32rem",
                xxl: "1fr 40rem"
            }),
            $$slots: {
                default: [Ke]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        p(e, l) {
            const r = {};
            l & 1 && (r.column = N.responsive(e[0], {
                lg: "1fr",
                xl: "1fr 32rem",
                xxl: "1fr 40rem"
            })),
            l & 17 && (r.$$scope = {
                dirty: l,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function We(f) {
    let t, s;
    return t = new ce.ContentsCenter({
        props: {
            fitNoTitle: !0,
            $$slots: {
                default: [Qe]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment)
        },
        l(e) {
            w(t.$$.fragment, e)
        },
        m(e, l) {
            k(t, e, l),
            s = !0
        },
        p(e, l) {
            const r = {};
            l & 17 && (r.$$scope = {
                dirty: l,
                ctx: e
            }),
            t.$set(r)
        },
        i(e) {
            s || (p(t.$$.fragment, e),
            s = !0)
        },
        o(e) {
            d(t.$$.fragment, e),
            s = !1
        },
        d(e) {
            x(t, e)
        }
    }
}
function Xe(f) {
    let t, s, e, l;
    return t = new ce.Head({
        props: {
            title: "Not Found"
        }
    }),
    e = new ye({
        props: {
            $$slots: {
                default: [We]
            },
            $$scope: {
                ctx: f
            }
        }
    }),
    {
        c() {
            b(t.$$.fragment),
            s = v(),
            b(e.$$.fragment)
        },
        l(r) {
            w(t.$$.fragment, r),
            s = h(r),
            w(e.$$.fragment, r)
        },
        m(r, o) {
            k(t, r, o),
            V(r, s, o),
            k(e, r, o),
            l = !0
        },
        p(r, [o]) {
            const i = {};
            o & 17 && (i.$$scope = {
                dirty: o,
                ctx: r
            }),
            e.$set(i)
        },
        i(r) {
            l || (p(t.$$.fragment, r),
            p(e.$$.fragment, r),
            l = !0)
        },
        o(r) {
            d(t.$$.fragment, r),
            d(e.$$.fragment, r),
            l = !1
        },
        d(r) {
            x(t, r),
            r && m(s),
            x(e, r)
        }
    }
}
function et(f, t, s) {
    let e;
    De(f, Be, i=>s(0, e = i)),
    Ne(()=>{
        _e([{
            title: "Not Found"
        }])
    }
    );
    const l = ()=>Se.instance.open()
      , r = ()=>ge("/")
      , o = ()=>ge(Te.explorers());
    return Ve(!1, 0),
    _e([]),
    [e, l, r, o]
}
class tt extends we {
    constructor(t) {
        super(),
        ke(this, t, et, Xe, xe, {})
    }
}
var he;
(f=>{
    f.NotFound = tt
}
)(he || (he = {}));
export {he as B};
