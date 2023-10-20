! function(t) {
    "use strict";

    function s(e, r) {
        var i = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(e).is("body") ? t(window) : t(e), this.options = t.extend({}, s.DEFAULTS, r), this.selector = (this.options.target || "") + " li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), this.refresh(), this.process()
    }

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.scrollspy"),
                o = "object" == typeof e && e;
            i || r.data("bs.scrollspy", i = new s(this, o)), "string" == typeof e && i[e]()
        })
    }
    s.VERSION = "3.3.2", s.DEFAULTS = {
        offset: 10
    }, s.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, s.prototype.refresh = function() {
        var s = "offset",
            e = 0;
        fusion.isWindow(this.$scrollElement[0]) || (s = "position", e = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var r = this;
        this.$body.find(this.selector).map(function() {
            var r = t(this),
                i = r.data("target") || r.attr("href"),
                o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [
                [o[s]().top + e, i]
            ] || null
        }).sort(function(t, s) {
            return t[0] - s[0]
        }).each(function() {
            r.offsets.push(this[0]), r.targets.push(this[1])
        })
    }, s.prototype.process = function() {
        var t, s = this.$scrollElement.scrollTop() + this.options.offset,
            e = this.getScrollHeight(),
            r = this.options.offset + e - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            l = this.activeTarget;
        if (this.scrollHeight != e && this.refresh(), s >= r) return l != (t = o[o.length - 1]) && this.activate(t);
        if (l && s < i[0]) return this.activeTarget = null, this.clear();
        for (t = i.length; t--;) l != o[t] && s >= i[t] && (!i[t + 1] || s <= i[t + 1]) && this.activate(o[t])
    }, s.prototype.activate = function(s) {
        this.activeTarget = s, this.clear();
        var e = window.location.href.split("#"),
            r = "/" == e[0].charAt(e[0].length - 1) ? e[0] : e[0] + "/",
            i = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"],' + this.selector + '[href="' + r + s + '"]',
            o = t(i).parents("li").addClass("current-menu-item");
        o.parent(".sub-menu").length && (o = o.closest("li.fusion-dropdown-menu").addClass("current-menu-item")), o.trigger("activate.bs.scrollspy"), o && t(this.selector).blur()
    }, s.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item"), t(this.selector).parentsUntil(this.options.target, ".current-menu-parent").removeClass("current-menu-parent")
    };
    var r = t.fn.scrollspy;
    t.fn.scrollspy = e, t.fn.scrollspy.Constructor = s, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = r, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var s = t(this);
            e.call(s, s.data())
        })
    })
}(jQuery);