const h = "modulepreload"
  , m = function(o, s) {
    return new URL(o,s).href
}
  , u = {}
  , k = function(s, l, c) {
    if (!l || l.length === 0)
        return s();
    const a = document.getElementsByTagName("link");
    return Promise.all(l.map(e=>{
        if (e = m(e, c),
        e in u)
            return;
        u[e] = !0;
        const n = e.endsWith(".css")
          , f = n ? '[rel="stylesheet"]' : "";
        if (!!c)
            for (let r = a.length - 1; r >= 0; r--) {
                const i = a[r];
                if (i.href === e && (!n || i.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${e}"]${f}`))
            return;
        const t = document.createElement("link");
        if (t.rel = n ? "stylesheet" : h,
        n || (t.as = "script",
        t.crossOrigin = ""),
        t.href = e,
        document.head.appendChild(t),
        n)
            return new Promise((r,i)=>{
                t.addEventListener("load", r),
                t.addEventListener("error", ()=>i(new Error(`Unable to preload CSS for ${e}`)))
            }
            )
    }
    )).then(()=>s())
};
export {k as _};
