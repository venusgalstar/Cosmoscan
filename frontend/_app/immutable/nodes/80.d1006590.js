import {S as r, i as s, s as m, n as i, p as c, q as f, w as p, t as u, l, r as _} from "../chunks/index.8311dc4e.js";
import {s as $} from "../chunks/index.e5219fc6.js";
import {B as g} from "../chunks/index.99a6a081.js";
function d(o) {
    let t, e;
    return t = new g.NotFound({}),
    {
        c() {
            i(t.$$.fragment)
        },
        l(n) {
            c(t.$$.fragment, n)
        },
        m(n, a) {
            f(t, n, a),
            e = !0
        },
        p,
        i(n) {
            e || (u(t.$$.fragment, n),
            e = !0)
        },
        o(n) {
            l(t.$$.fragment, n),
            e = !1
        },
        d(n) {
            _(t, n)
        }
    }
}
function x(o) {
    return $(!1, 300),
    []
}
class w extends r {
    constructor(t) {
        super(),
        s(this, t, x, d, m, {})
    }
}
export {w as component};
