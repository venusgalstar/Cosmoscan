import {S as y, i as a, s as _, e as w, c as z, L as S, d as u, g as f, k as b, w as d, o as L, z as M} from "./index.8311dc4e.js";
import {e as m} from "./index.e5219fc6.js";
import "./index.5903bf3f.js";
function k(n) {
    let t, e;
    return {
        c() {
            t = w("div"),
            this.h()
        },
        l(i) {
            t = z(i, "DIV", {
                class: !0,
                "data-icon-svg": !0,
                style: !0
            }),
            S(t).forEach(u),
            this.h()
        },
        h() {
            f(t, "class", "root svelte-izmmzw"),
            f(t, "data-icon-svg", ""),
            f(t, "style", e = m(n[0]))
        },
        m(i, h) {
            b(i, t, h),
            n[6](t)
        },
        p(i, [h]) {
            h & 1 && e !== (e = m(i[0])) && f(t, "style", e)
        },
        i: d,
        o: d,
        d(i) {
            i && u(t),
            n[6](null)
        }
    }
}
function H(n, t, e) {
    let {style: i={}} = t, {svg: h} = t, {size: c="1.1rem"} = t, {width: g=void 0} = t, {height: l=void 0} = t, r;
    L(()=>{
        e(1, r.innerHTML = h, r)
    }
    );
    function o(s) {
        M[s ? "unshift" : "push"](()=>{
            r = s,
            e(1, r),
            e(2, h)
        }
        )
    }
    return n.$$set = s=>{
        "style"in s && e(0, i = s.style),
        "svg"in s && e(2, h = s.svg),
        "size"in s && e(3, c = s.size),
        "width"in s && e(4, g = s.width),
        "height"in s && e(5, l = s.height)
    }
    ,
    n.$$.update = ()=>{
        if (n.$$.dirty & 6 && r && e(1, r.innerHTML = h, r),
        n.$$.dirty & 56) {
            let s = typeof c == "string" ? c : `${c}rem`;
            c && (e(0, i.width = s, i),
            e(0, i.height = s, i)),
            g && e(0, i.width = g, i),
            l && e(0, i.height = l, i)
        }
    }
    ,
    [i, r, h, c, g, l, o]
}
class C extends y {
    constructor(t) {
        super(),
        a(this, t, H, k, _, {
            style: 0,
            svg: 2,
            size: 3,
            width: 4,
            height: 5
        })
    }
}
export {C as S};
