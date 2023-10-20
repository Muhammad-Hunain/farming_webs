var fusion = {
    fusionResizeWidth: 0,
    fusionResizeHeight: 0,
    toBool: function(e) {
        return 1 === e || "1" === e || !0 === e || "true" === e || "on" === e
    },
    restArguments: function(e, t) {
        return t = null == t ? e.length - 1 : +t,
            function() {
                for (var n, i = Math.max(arguments.length - t, 0), r = Array(i), o = 0; o < i; o++) r[o] = arguments[o + t];
                switch (t) {
                    case 0:
                        return e.call(this, r);
                    case 1:
                        return e.call(this, arguments[0], r);
                    case 2:
                        return e.call(this, arguments[0], arguments[1], r)
                }
                for (n = Array(t + 1), o = 0; o < t; o++) n[o] = arguments[o];
                return n[t] = r, e.apply(this, n)
            }
    },
    debounce: function(e, t, n) {
        var i, r, o, s, u, a = this;
        return o = function(t, n) {
            i = null, n && (r = e.apply(t, n))
        }, (s = this.restArguments(function(s) {
            return i && clearTimeout(i), n ? (u = !i, i = setTimeout(o, t), u && (r = e.apply(this, s))) : i = a.delay(o, t, this, s), r
        })).cancel = function() {
            clearTimeout(i), i = null
        }, s
    },
    isSmall: function() {
        return Modernizr.mq("only screen and (max-width:" + fusionJSVars.visibility_small + "px)")
    },
    isMedium: function() {
        return Modernizr.mq("only screen and (min-width:" + (parseInt(fusionJSVars.visibility_small) + 1) + "px) and (max-width:" + parseInt(fusionJSVars.visibility_medium) + "px)")
    },
    isLarge: function() {
        return Modernizr.mq("only screen and (min-width:" + (parseFloat(fusionJSVars.visibility_medium) + 1) + "px)")
    },
    getHeight: function(e, t) {
        var n = 0;
        return "number" == typeof e ? n = e : "string" != typeof e || -1 === e.indexOf(".") && -1 === e.indexOf("#") ? n = parseFloat(e) : (t = void 0 !== t && t, jQuery(e).each(function() {
            n += jQuery(this).outerHeight(t)
        })), n
    },
    getAdminbarHeight: function() {
        var e = jQuery("#wpadminbar").length ? parseInt(jQuery("#wpadminbar").height()) : 0;
        return e += jQuery(".fusion-fixed-top").length ? parseInt(jQuery(".fusion-fixed-top").height()) : 0
    },
    isWindow: function(e) {
        return null != e && e === e.window
    }
};
fusion.delay = fusion.restArguments(function(e, t, n) {
    return setTimeout(function() {
        return e.apply(null, n)
    }, t)
}), fusion.ready = function(e) {
    if ("function" == typeof e) return "complete" === document.readyState ? e() : void document.addEventListener("DOMContentLoaded", e, !1)
}, fusion.passiveSupported = function() {
    var e, t;
    if (void 0 === fusion.supportsPassive) {
        try {
            t = {
                get passive() {
                    e = !0
                }
            }, window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
        } catch (t) {
            e = !1
        }
        fusion.supportsPassive = !!e && {
            passive: !0
        }
    }
    return fusion.supportsPassive
}, fusion.getElements = function(e) {
    var t = [];
    return e ? ("object" == typeof e ? Object.keys(e).forEach(function(n) {
        Element.prototype.isPrototypeOf(e[n]) && t.push(e[n])
    }) : "string" == typeof e && (t = document.querySelectorAll(e), t = Array.prototype.slice.call(t)), t) : []
}, Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    var t = this;
    do {
        if (t.matches(e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
}), jQuery(document).ready(function() {
    var e;
    void 0 === jQuery.migrateVersion && 2 < parseInt(jQuery.fn.jquery) && jQuery(window.document).triggerHandler("ready"), e = fusion.debounce(function() {
        fusion.fusionResizeWidth !== jQuery(window).width() && (window.dispatchEvent(new Event("fusion-resize-horizontal", {
            bubbles: !0,
            cancelable: !0
        })), fusion.fusionResizeWidth = jQuery(window).width()), fusion.fusionResizeHeight !== jQuery(window).height() && (jQuery(window).trigger("fusion-resize-vertical"), fusion.fusionResizeHeight = jQuery(window).height())
    }, 250), fusion.fusionResizeWidth = jQuery(window).width(), fusion.fusionResizeHeight = jQuery(window).height(), jQuery(window).on("resize", e), jQuery("html.ua-ie").length && (jQuery(".fusion-section-separator").each(function() {
        jQuery(this).children(".fusion-section-separator-svg").height(jQuery(this).height())
    }), jQuery(window).on("resize", function() {
        jQuery(".fusion-section-separator").each(function() {
            jQuery(this).children(".fusion-section-separator-svg").height(jQuery(this).height())
        })
    }))
});