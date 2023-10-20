! function(t) {
    "use strict";
    var e = ["sanitize", "whiteList", "sanitizeFn"],
        i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        o = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        n = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        s = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function r(e, o) {
        var r = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(r, o)) return -1 === t.inArray(r, i) || Boolean(e.nodeValue.match(n) || e.nodeValue.match(s));
        for (var a = t(o).filter(function(t, e) {
                return e instanceof RegExp
            }), l = 0, p = a.length; l < p; l++)
            if (r.match(a[l])) return !0;
        return !1
    }

    function a(e, i, o) {
        if (0 === e.length) return e;
        if (o && "function" == typeof o) return o(e);
        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
        var n = document.implementation.createHTMLDocument("sanitization");
        n.body.innerHTML = e;
        for (var s = t.map(i, function(t, e) {
                return e
            }), a = t(n.body).find("*"), l = 0, p = a.length; l < p; l++) {
            var h = a[l],
                f = h.nodeName.toLowerCase();
            if (-1 !== t.inArray(f, s))
                for (var u = t.map(h.attributes, function(t) {
                        return t
                    }), c = [].concat(i["*"] || [], i[f] || []), d = 0, m = u.length; d < m; d++) r(u[d], c) || h.removeAttribute(u[d].nodeName);
            else h.parentNode.removeChild(h)
        }
        return n.body.innerHTML
    }
    var l = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    l.VERSION = "3.3.5", l.TRANSITION_DURATION = 150, l.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: o
    }, l.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, l.prototype.getDefaults = function() {
        return l.DEFAULTS
    }, l.prototype.getOptions = function(i) {
        var o = this.$element.data();
        for (var n in o) o.hasOwnProperty(n) && -1 !== t.inArray(n, e) && delete o[n];
        return (i = t.extend({}, this.getDefaults(), this.$element.data(), i)).delay && "number" == typeof i.delay && (i.delay = {
            show: i.delay,
            hide: i.delay
        }), i.sanitize && (i.template = a(i.template, i.whiteList, i.sanitizeFn)), i
    }, l.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, l.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
        else {
            if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)
        }
    }, l.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, l.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)
        }
    }, l.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                n = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), n.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                p = a.test(r);
            p && (r = r.replace(a, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this).addClass(this.$element.data("class")), this.options.container ? n.appendTo(t(document).find(this.options.container)) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(),
                f = n[0].offsetWidth,
                u = n[0].offsetHeight;
            if (p) {
                var c = r,
                    d = this.getPosition(this.$viewport);
                r = "bottom" == r && h.bottom + u > d.bottom ? "top" : "top" == r && h.top - u < d.top ? "bottom" : "right" == r && h.right + f > d.width ? "left" : "left" == r && h.left - f < d.left ? "right" : r, n.removeClass(c).addClass(r)
            }
            var m = this.getCalculatedOffset(r, h, f, u);
            this.applyPlacement(m, r);
            var g = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", g).emulateTransitionEnd(l.TRANSITION_DURATION) : g()
        }
    }, l.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            r = parseInt(o.css("margin-top"), 10),
            a = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            p = o[0].offsetHeight;
        "top" == i && p != s && (e.top = e.top + s - p);
        var h = this.getViewportAdjustedDelta(i, e, l, p);
        h.left ? e.left += h.left : e.top += h.top;
        var f = /top|bottom/.test(i),
            u = f ? 2 * h.left - n + l : 2 * h.top - s + p,
            c = f ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(u, o[0][c], f)
    }, l.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, l.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = a(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, l.prototype.hide = function(e) {
        var i = this,
            o = t(this.$tip),
            n = t.Event("hide.bs." + this.type);

        function s() {
            "in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        if (this.$element.trigger(n), !n.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(l.TRANSITION_DURATION) : s(), this.hoverState = null, this
    }, l.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, l.prototype.hasContent = function() {
        return this.getTitle()
    }, l.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = o ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, r, a, s)
    }, l.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, l.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + o;
            a < r.top ? n.top = r.top - a : l > r.top + r.height && (n.top = r.top + r.height - l)
        } else {
            var p = e.left - s,
                h = e.left + s + i;
            p < r.left ? n.left = r.left - p : h > r.right && (n.left = r.left + r.width - h)
        }
        return n
    }, l.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, l.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, l.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, l.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, l.prototype.enable = function() {
        this.enabled = !0
    }, l.prototype.disable = function() {
        this.enabled = !1
    }, l.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, l.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, l.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    }, l.prototype.sanitizeHtml = function(t) {
        return a(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var p = t.fn.tooltip;
    t.fn.tooltip = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                n = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new l(this, n)), "string" == typeof e && "function" == typeof o[e] && o[e]())
        })
    }, t.fn.tooltip.Constructor = l, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = p, this
    }
}(jQuery);