! function(e, n, t) {
    for (var i, a = 0, m = function(e) {
            i && (n.requestAnimationFrame(m, e), jQuery.fx.tick())
        }, r = ["ms", "moz", "webkit", "o"], o = 0, u = r.length; o < u && !n.requestAnimationFrame; ++o) n.requestAnimationFrame = n[r[o] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[r[o] + "CancelAnimationFrame"] || n[r[o] + "CancelRequestAnimationFrame"];
    n.requestAnimationFrame || (n.requestAnimationFrame = function(e, t) {
        var i = (new Date).getTime(),
            m = i - a,
            r = Math.max(0, 16 - m),
            o = n.setTimeout(function() {
                e(i + r)
            }, r);
        return a = i + r, o
    }), n.cancelAnimationFrame || (n.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }), jQuery.fx.timer = function(e) {
        e() && jQuery.timers.push(e) && !i && (i = !0, m(e.elem))
    }, jQuery.fx.stop = function() {
        i = !1
    }
}(jQuery, this);