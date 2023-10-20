! function(e) {
    "use strict";
    e.fn.fusion_scroll_to_anchor_target = function(t) {
        var n, o, i, s, a, r, l, c = void 0 !== e(this).attr("href") ? e(this).attr("href") : e(this).data("link"),
            u = c.substr(c.indexOf("#")).slice(1),
            f = e("#" + u),
            h = e("html").hasClass("ua-edge") || e("html").hasClass("ua-safari-12") || e("html").hasClass("ua-safari-11") || e("html").hasClass("ua-safari-10") ? "body" : "html",
            d = e(".fusion-tb-header").length,
            g = !1,
            p = !1;
        if (t = void 0 !== t ? t : 0, f.length && "" !== u) {
            if ((f.parents(".hundred-percent-height-scrolling").length || f.find(".hundred-percent-height-scrolling").length) && (0 != fusionScrollToAnchorVars.container_hundred_percent_height_mobile || !Modernizr.mq("only screen and (max-width: " + fusionScrollToAnchorVars.content_break_point + "px)"))) {
                if ((l = f.hasClass("fusion-scroll-section-element") ? f : f.parents(".fusion-scroll-section-element")).hasClass("active") && l.offset().top >= e(window).scrollTop() && l.offset().top < e(window).scrollTop() + e(window).height()) return !1;
                if (location.hash && "#_" === location.hash.substring(0, 2) && e(".fusion-page-load-link").addClass("fusion-page.load-scroll-section-link"), f.parents(".fusion-scroll-section").length) return f.parents(".fusion-scroll-section").hasClass("active") ? f.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element=" + l.data("element") + "]").trigger("click") : (r = Math.ceil(f.parents(".fusion-scroll-section").offset().top), e(h).animate({
                    scrollTop: r
                }, {
                    duration: 400,
                    easing: "easeInExpo",
                    complete: function() {
                        setTimeout(function() {
                            f.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element=" + l.data("element") + "]").trigger("click"), location.hash && "#_" === location.hash.substring(0, 2) && ("history" in window && "replaceState" in history && history.replaceState("", window.location.href.replace("#_", "#"), window.location.href.replace("#_", "#")), e(".fusion-page-load-link").removeClass("fusion-page.load-scroll-section-link"))
                        }, parseInt(fusionScrollToAnchorVars.hundred_percent_scroll_sensitivity) + 50)
                    }
                })), !1
            }
            return n = "function" == typeof getAdminbarHeight ? getAdminbarHeight() : 0, i = e(document).scrollTop(), d ? (e("body").addClass("fusion-scrolling-active"), (g = fusionGetStickyOffset()) || (g = n), s = f.offset().top - g - t) : (o = "function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : 0, s = f.offset().top - n - o - t), a = Math.abs(i - s) / 2, r = i > s ? i - a : i + a, e(h).animate({
                scrollTop: r
            }, {
                duration: 400,
                easing: "easeInExpo",
                complete: function() {
                    n = "function" == typeof getAdminbarHeight ? getAdminbarHeight() : 0, d ? ((g = fusionGetStickyOffset()) || (g = n), s = f.offset().top - g - t) : (o = "function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : 0, s = f.offset().top - n - o - t), e(h).animate({
                        scrollTop: s
                    }, 450, "easeOutExpo", function() {
                        location.hash && "#_" === location.hash.substring(0, 2) && "history" in window && "replaceState" in history && history.replaceState("", window.location.href.replace("#_", "#"), window.location.href.replace("#_", "#")), d && (p = fusionGetStickyOffset(), g !== p && (s = f.offset().top - p - t, e(h).animate({
                            scrollTop: s
                        }, 450)), e("body").removeClass("fusion-scrolling-active"))
                    })
                }
            }), (f.hasClass("tab-pane") || f.hasClass("tab-link")) && "function" == typeof e.fn.fusionSwitchTabOnLinkClick && setTimeout(function() {
                f.parents(".fusion-tabs").fusionSwitchTabOnLinkClick()
            }, 100), !1
        }
    }
}(jQuery), jQuery(document).ready(function() {
    jQuery("body").on("click", '.fusion-menu a:not([href="#"], .fusion-megamenu-widgets-container a, .search-link), .fusion-widget-menu a, .fusion-secondary-menu a, .fusion-mobile-nav-item a:not([href="#"], .search-link), .fusion-button:not([href="#"], input, button), .fusion-one-page-text-link:not([href="#"]), .fusion-content-boxes .fusion-read-more:not([href="#"]), .fusion-imageframe > .fusion-no-lightbox, .content-box-wrapper:not(.link-area-box) .heading-link, a.woocommerce-review-link', function(e) {
        var t, n, o, i, s, a, r = jQuery("body").hasClass("fusion-builder-live");
        if (jQuery(this).hasClass("avada-noscroll") || jQuery(this).parent().hasClass("avada-noscroll") || jQuery(this).is(".fusion-content-box-button, .fusion-tagline-button") && jQuery(this).parents(".avada-noscroll").length) return !0;
        if (this.hash) {
            if (a = jQuery(this).attr("target") ? jQuery(this).attr("target") : "_self", i = (o = void 0 !== (n = (t = jQuery(this).attr("href")).split("#"))[1] ? n[1] : "").substring(0, 1), "/" !== (s = n[0]).substring(s.length - 1, s.length) && (s += "/"), "!" === i || "/" === i) return;
            e.preventDefault(), location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") && "#" !== t.charAt(0) || "" !== location.search && -1 === location.search.indexOf("lang=") && -1 === location.search.indexOf("builder=") && !jQuery(this).hasClass("tfs-scroll-down-indicator") && !jQuery(this).hasClass("fusion-same-page-scroll") ? r || ("/" === s && "" !== location.search && (s = location.href.replace(location.search, "")), window.open(s + "#_" + o, a)) : (jQuery(this).fusion_scroll_to_anchor_target(), "history" in window && "replaceState" in history && !r && history.replaceState("", t, t), jQuery(this).parents(".fusion-menu-element-wrapper.flyout-submenu-expanded").length ? jQuery(".fusion-close-flyout").trigger("click") : jQuery(this).parents(".fusion-flyout-menu").length && jQuery(".fusion-flyout-menu-toggle").trigger("click"))
        }
    })
}), location.hash && "#_" === location.hash.substring(0, 2) && (jQuery(".fusion-page-load-link").attr("href", decodeURIComponent("#" + location.hash.substring(2))), jQuery(window).on("load", function() {
    jQuery(".fusion-blog-shortcode").length ? setTimeout(function() {
        jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()
    }, 300) : jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()
}));