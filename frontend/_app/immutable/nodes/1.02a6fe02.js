import {S, i as q, s as C, e as i, a as H, b as x, h as P, c as u, d as r, f as j, g as t, j as l, k as v, t as A, l as T, m as G, o as N, n as z, p as B, q as D, r as F, u as J} from "../chunks/index.8311dc4e.js";
import {s as K} from "../chunks/index.e5219fc6.js";
import {component as L} from "./80.d1006590.js";
import "../chunks/index.5903bf3f.js";
function I(M) {
    let n, c;
    return n = new L({}),
    {
        c() {
            z(n.$$.fragment)
        },
        l(e) {
            B(n.$$.fragment, e)
        },
        m(e, m) {
            D(n, e, m),
            c = !0
        },
        i(e) {
            c || (A(n.$$.fragment, e),
            c = !0)
        },
        o(e) {
            T(n.$$.fragment, e),
            c = !1
        },
        d(e) {
            F(n, e)
        }
    }
}
function O(M) {
    let n, c, e, m, p, d, h, f, y, g, _, b, w, E, k, a = M[0] === 404 && I();
    return {
        c() {
            n = i("meta"),
            c = i("meta"),
            e = i("meta"),
            m = i("meta"),
            p = i("meta"),
            d = i("meta"),
            h = i("meta"),
            f = i("meta"),
            y = i("meta"),
            g = i("meta"),
            _ = i("meta"),
            b = i("meta"),
            w = H(),
            a && a.c(),
            E = x(),
            this.h()
        },
        l(s) {
            const o = P("svelte-16mtpnm", document.head);
            n = u(o, "META", {
                name: !0,
                content: !0
            }),
            c = u(o, "META", {
                property: !0,
                content: !0
            }),
            e = u(o, "META", {
                property: !0,
                content: !0
            }),
            m = u(o, "META", {
                property: !0,
                content: !0
            }),
            p = u(o, "META", {
                property: !0,
                content: !0
            }),
            d = u(o, "META", {
                property: !0,
                content: !0
            }),
            h = u(o, "META", {
                name: !0,
                content: !0
            }),
            f = u(o, "META", {
                property: !0,
                content: !0
            }),
            y = u(o, "META", {
                property: !0,
                content: !0
            }),
            g = u(o, "META", {
                name: !0,
                content: !0
            }),
            _ = u(o, "META", {
                name: !0,
                content: !0
            }),
            b = u(o, "META", {
                name: !0,
                content: !0
            }),
            o.forEach(r),
            w = j(s),
            a && a.l(s),
            E = x(),
            this.h()
        },
        h() {
            document.title = "Interchain Explorer by Cosmostation",
            t(n, "name", "description"),
            t(n, "content", "Interchain block explorer and data analytics for sovereign blockchain networks."),
            t(c, "property", "og:url"),
            t(c, "content", "https://hub.mintscan.io/"),
            t(e, "property", "og:type"),
            t(e, "content", "website"),
            t(m, "property", "og:title"),
            t(m, "content", "Mintscan Hub"),
            t(p, "property", "og:description"),
            t(p, "content", "Interchain block explorer and data analytics for sovereign blockchain networks."),
            t(d, "property", "og:image"),
            t(d, "content", "https://hub.mintscan.io/mintscan.png"),
            t(h, "name", "twitter:card"),
            t(h, "content", "mintscan"),
            t(f, "property", "twitter:domain"),
            t(f, "content", "https://hub.mintscan.io/"),
            t(y, "property", "twitter:url"),
            t(y, "content", "https://hub.mintscan.io/"),
            t(g, "name", "twitter:title"),
            t(g, "content", "Mintscan Hub"),
            t(_, "name", "twitter:description"),
            t(_, "content", "Interchain lorer and data analytics for sovereign blockchain networks."),
            t(b, "name", "twitter:image"),
            t(b, "content", "https://hub.mintscan.io/mintscan.png")
        },
        m(s, o) {
            l(document.head, n),
            l(document.head, c),
            l(document.head, e),
            l(document.head, m),
            l(document.head, p),
            l(document.head, d),
            l(document.head, h),
            l(document.head, f),
            l(document.head, y),
            l(document.head, g),
            l(document.head, _),
            l(document.head, b),
            v(s, w, o),
            a && a.m(s, o),
            v(s, E, o),
            k = !0
        },
        p(s, [o]) {
            s[0] === 404 ? a ? o & 1 && A(a, 1) : (a = I(),
            a.c(),
            A(a, 1),
            a.m(E.parentNode, E)) : a && (J(),
            T(a, 1, 1, ()=>{
                a = null
            }
            ),
            G())
        },
        i(s) {
            k || (A(a),
            k = !0)
        },
        o(s) {
            T(a),
            k = !1
        },
        d(s) {
            r(n),
            r(c),
            r(e),
            r(m),
            r(p),
            r(d),
            r(h),
            r(f),
            r(y),
            r(g),
            r(_),
            r(b),
            s && r(w),
            a && a.d(s),
            s && r(E)
        }
    }
}
function Q(M, n, c) {
    let {message: e} = n
      , {status: m} = n;
    return m === 404 || (m === 500 ? e = "Internal server error" : e = "Something went wrong"),
    N(async()=>{
        await K(!1, 300)
    }
    ),
    M.$$set = p=>{
        "message"in p && c(1, e = p.message),
        "status"in p && c(0, m = p.status)
    }
    ,
    [m, e]
}
class X extends S {
    constructor(n) {
        super(),
        q(this, n, Q, O, C, {
            message: 1,
            status: 0
        })
    }
}
export {X as component};
