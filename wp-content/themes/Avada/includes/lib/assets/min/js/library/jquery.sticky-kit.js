(function() {
    var t, i;
    t = this.jQuery || window.jQuery, i = t(window), t.fn.stick_in_parent = function(s) {
        var o, n, e, r, c, a, f, u, l, g, d, k, p, h, y, v, m, b, _, C;
        for (null == s && (s = {}), k = s.sticky_class, a = s.inner_scrolling, d = s.recalc_every, g = s.parent, l = s.offset_top, u = s.spacer, e = s.bottoming, p = void 0 !== s.transition_offset && parseFloat(s.transition_offset), h = void 0 !== s.observer && s.observer, y = void 0 !== s.scroll_transition && parseFloat(s.scroll_transition), v = void 0 !== s.clone && s.clone, m = !1, adminBarHeight = fusion.getAdminbarHeight(), null == l && (l = 0), "fusion-container-stuck" === k && "object" == typeof fusion && "function" == typeof fusion.getHeight && (l = fusion.getHeight(l) + adminBarHeight), null == g && (g = void 0), null == a && (a = !0), null == k && (k = "is_stuck"), o = t(document), null == e && (e = !0), r = function(n, r, c, f, w, x, j, H) {
                var I, A, Q, z, B, M, O, T, F, G, S, W, D;
                if (!n.data("sticky_kit")) {
                    if (n.attr("data-sticky_kit", !0), B = o.height(), O = n.parent(), null != g && (O = O.closest(g)), !O.length) throw "failed to find stick parent";
                    if (Q = !1, I = !1, null != u ? S = u && n.closest(u) : v ? (S = n.clone(!1)).addClass("fusion-sticky-spacer").removeClass("fusion-sticky-transition") : S = jQuery('<div class="fusion-sticky-spacer" />'), S && S.css("position", n.css("position")), overlap = function(t, i) {
                            "object" == typeof t && "object" == typeof t[0] && (t[0].isIntersecting ? n.removeClass("fusion-sticky-transition") : n.addClass("fusion-sticky-transition"))
                        }, h && (D = new IntersectionObserver(overlap, {
                            rootMargin: "0px",
                            threshold: 1
                        })), (T = function() {
                            var t, i, s, e;
                            if (!H) return B = o.height(), t = parseInt(O.css("border-top-width"), 10), i = parseInt(O.css("padding-top"), 10), r = parseInt(O.css("padding-bottom"), 10), c = O.offset().top + t + i, f = O.height(), Q && (Q = !1, I = !1, null == u && (n.next(".fusion-sticky-spacer").length ? S = n.next(".fusion-sticky-spacer") : n.insertAfter(S)), n.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(k), s = !0), w = n.offset().top - (parseInt(n.css("margin-top"), 10) || 0) - l, x = n.outerHeight(!0), j = n.css("float"), S && (e = {
                                width: n.outerWidth(!0),
                                display: n.css("display"),
                                "vertical-align": n.css("vertical-align"),
                                float: j
                            }, v || (e.height = x), S.css(e)), s ? W() : void 0
                        })(), x !== f) {
                        if (z = void 0, M = l, G = d, W = function() {
                                var t, s, g, v, m, b;
                                if (!H) return g = !1, null != G && 0 >= (G -= 1) && (G = d, T(), g = !0), null == G || g || o.height() === B || (T(), g = !0), v = i.scrollTop(), null != z && (s = v - z), z = v, Q ? (e && (m = v + x + M > f + c, I && !m && (I = !1, n.css({
                                    position: "fixed",
                                    bottom: "",
                                    top: M
                                }).trigger("sticky_kit:unbottom"))), v < w && (Q = !1, M = l, null == u && ("left" !== j && "right" !== j || n.insertAfter(S), S && S.detach()), t = {
                                    position: "",
                                    width: "",
                                    top: ""
                                }, n.css(t).removeClass(k).trigger("sticky_kit:unstick"), "fusion-container-stuck" === k && i.trigger("fusion-sticky-change")), a && (b = i.height(), x + l > b && (I || (M -= s, M = Math.max(b - x, M), M = Math.min(l, M), Q && n.css({
                                    top: M + "px"
                                }))))) : v > w && (Q = !0, (t = {
                                    position: "fixed",
                                    top: M
                                }).width = "border-box" === n.css("box-sizing") ? n.outerWidth() + "px" : n.width() + "px", n.css(t).addClass(k), null == u && (n.after(S), "left" !== j && "right" !== j || S.append(n)), n.trigger("sticky_kit:stick"), "fusion-container-stuck" === k && i.trigger("fusion-sticky-change")), !1 === p || h || (!n.is(".fusion-sticky-transition") && v - w > p ? (n.addClass("fusion-sticky-transition"), "fusion-container-stuck" === k && i.trigger("fusion-sticky-transition-change")) : n.is(".fusion-sticky-transition") && v - w <= p && (n.removeClass("fusion-sticky-transition"), "fusion-container-stuck" === k && i.trigger("fusion-sticky-transition-change"))), !1 !== y && 0 !== y && (0 > s ? n.hasClass("fusion-scrolling-up") || (n.addClass("fusion-scrolling-up").removeClass("fusion-scrolling-down"), i.trigger("fusion-sticky-scroll-change")) : n.hasClass("fusion-scrolling-down") || (n.addClass("fusion-scrolling-down").removeClass("fusion-scrolling-up"), i.trigger("fusion-sticky-scroll-change")), !n.is(".fusion-sticky-scroll-transition") && v - w > y ? (n.addClass("fusion-sticky-scroll-transition"), "fusion-container-stuck" === k && i.trigger("fusion-sticky-scroll-change")) : n.is(".fusion-sticky-scroll-transition") && v - w <= y && (n.removeClass("fusion-sticky-scroll-transition"), "fusion-container-stuck" === k && i.trigger("fusion-sticky-scroll-change"))), Q && e && (null == m && (m = v + x + M > f + c), !I && m) ? (I = !0, "static" === O.css("position") && O.css({
                                    position: "relative"
                                }), n.css({
                                    position: "absolute",
                                    bottom: r,
                                    top: "auto"
                                }).trigger("sticky_kit:bottom")) : void 0
                            }, F = function() {
                                return T(), W()
                            }, _ = function(t) {
                                var i;
                                "object" == typeof fusion && "function" == typeof fusion.getHeight && (l = void 0 === s.offset_top ? 0 : s.offset_top, "fusion-container-stuck" === k ? l = fusion.getHeight(l) + adminBarHeight : "fusion-sidebar-stuck" === k && jQuery(".fusion-tb-header").length && "function" == typeof fusionGetStickyOffset && (i = fusionGetStickyOffset()) && (l = i + adminBarHeight + 50), M = l), F(), void 0 !== t && "string" == typeof t.type && "resize" === t.type && "function" == typeof q && q()
                            }, "object" == typeof fusion && "function" == typeof fusion.debounce) var q = fusion.debounce(_, 350);
                        return C = function(t) {
                            m || (m = !0, _(t), q(), setTimeout(function() {
                                m = !1
                            }, 100))
                        }, b = function() {
                            h && D.observe(n.next()[0])
                        }, A = function() {
                            if (H = !0, i.off("touchmove", W), i.off("scroll", W), i.off("resize", _), t(document.body).off("sticky_kit:recalc", F), "fusion-container-stuck" === k && i.trigger("fusion-sticky-change"), n.off("sticky_kit:detach", A), n.removeData("sticky_kit"), n.removeAttr("data-sticky_kit"), n.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), n.removeClass("fusion-sticky-transition"), O.position("position", ""), Q) return null == u && ("left" !== j && "right" !== j || n.insertAfter(S), S.remove()), n.removeClass(k);
                            n.next(".fusion-sticky-spacer").length && n.next(".fusion-sticky-spacer").remove()
                        }, S && S.detach(), "fusion-sidebar-stuck" === k && jQuery(".fusion-tb-header").length && i.on("fusion-sticky-change fusion-sticky-scroll-change fusion-sticky-transition-change", C), i.on("touchmove", W), i.on("scroll", W), i.on("resize", _), t(document.body).on("sticky_kit:recalc", F), n.on("sticky_kit:detach", A), n.on("sticky_kit:stick", b), setTimeout(W, 0)
                    }
                }
            }, c = 0, f = this.length; c < f; c++) n = this[c], r(t(n));
        return this
    }
}).call(this);