! function(e) {
    e.fn.hoverFlow = function(o, u, t, r, n) {
        if (-1 == e.inArray(o, ["mouseover", "mouseenter", "mouseout", "mouseleave"])) return this;
        var i = "object" == typeof t ? t : {
            complete: n || !n && r || e.isFunction(t) && t,
            duration: t,
            easing: n && r || r && !e.isFunction(r) && r
        };
        i.queue = !1;
        var a = i.complete;
        return i.complete = function() {
            e(this).dequeue(), e.isFunction(a) && a.call(this)
        }, this.each(function() {
            var t = e(this);
            "mouseover" == o || "mouseenter" == o ? t.data("jQuery.hoverFlow", !0) : t.removeData("jQuery.hoverFlow"), t.queue(function() {
                ("mouseover" == o || "mouseenter" == o ? void 0 !== t.data("jQuery.hoverFlow") : void 0 === t.data("jQuery.hoverFlow")) ? t.animate(u, i): t.queue([])
            })
        })
    }
}(jQuery);