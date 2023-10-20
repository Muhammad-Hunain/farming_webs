function resizeOverlaySearch() {
    var e = 0,
        n = !0,
        i = 0,
        s = !0;
    jQuery(".fusion-main-menu:not(.fusion-sticky-menu)").is(":visible") || (n = !1, jQuery(".fusion-main-menu:not(.fusion-sticky-menu)").css("display", "block")), jQuery(".fusion-main-menu:not(.fusion-sticky-menu) .fusion-menu > li").each(function() {
        e += jQuery(this).outerWidth(!0)
    }), jQuery(".fusion-main-menu:not(.fusion-sticky-menu) .fusion-overlay-search").css("max-width", e + "px"), n || jQuery(".fusion-main-menu:not(.fusion-sticky-menu)").css("display", ""), jQuery(".fusion-main-menu.fusion-sticky-menu").is(":visible") || (s = !1, jQuery(".fusion-main-menu.fusion-sticky-menu").css("display", "block")), jQuery(".fusion-main-menu.fusion-sticky-menu .fusion-menu > li").each(function() {
        i += jQuery(this).outerWidth(!0)
    }), jQuery(".fusion-main-menu.fusion-sticky-menu .fusion-overlay-search").css("max-width", i + "px"), s || jQuery(".fusion-main-menu.fusion-sticky-menu").css("display", "")
}
jQuery(document).ready(function() {
    "use strict";
    var e;

    function n() {
        jQuery.fn.fusion_position_menu_dropdown && (jQuery(".fusion-dropdown-menu, .fusion-dropdown-menu li").on("mouseenter", function() {
            jQuery(this).fusion_position_menu_dropdown()
        }), jQuery(".fusion-dropdown-menu > ul > li").each(function() {
            jQuery(this).walk_through_menu_items()
        }), jQuery(window).on("fusion-resize-horizontal", function() {
            jQuery(".fusion-dropdown-menu > ul > li").each(function() {
                jQuery(this).walk_through_menu_items()
            })
        }))
    }

    function i() {
        jQuery.fn.fusion_position_megamenu && (jQuery(".fusion-main-menu > ul").fusion_position_megamenu(), jQuery(document.body).on("mouseenter", ".fusion-main-menu .fusion-megamenu-menu", function() {
            jQuery(this).parent().fusion_position_megamenu()
        }), jQuery(window).on("resize", function() {
            jQuery(".fusion-main-menu > ul").fusion_position_megamenu()
        })), jQuery.fn.calc_megamenu_widths && (jQuery(".fusion-main-menu > ul").calc_megamenu_widths(), jQuery(window).on("resize", function() {
            jQuery(".fusion-main-menu > ul").calc_megamenu_widths()
        }))
    }

    function s(e) {
        "top" === avadaMenuVars.header_position && (jQuery(e).on("mouseenter", function() {
            jQuery(this).find("> div").length && 0 > jQuery(this).find("> div").offset().left && jQuery(this).find("> div").css({
                left: "0",
                right: "auto"
            }), jQuery(this).find("> div").length && jQuery(this).find("> div").offset().left + jQuery(this).find("> div").width() > jQuery(window).width() && jQuery(this).find("> div").css({
                left: "auto",
                right: "0"
            })
        }), jQuery(window).on("fusion-resize-horizontal", function() {
            jQuery(e).find("> div").each(function() {
                var e = jQuery(this),
                    n = e.outerWidth(),
                    i = e.offset().left,
                    s = i + n,
                    u = e.parent().offset().left,
                    t = jQuery(window).width();
                jQuery("body.rtl").length ? parseInt(i, 10) === parseInt(u, 10) && s > t || i < u && s + n > t ? e.css({
                    left: "auto",
                    right: "0"
                }) : e.css({
                    left: "0",
                    right: "auto"
                }) : i < u && 0 > i || parseInt(i, 10) === parseInt(u, 10) && 0 > i - n ? e.css({
                    left: "0",
                    right: "auto"
                }) : e.css({
                    left: "auto",
                    right: "0"
                })
            })
        }))
    }

    function u() {
        jQuery(".fusion-mobile-nav-holder").not(".fusion-mobile-sticky-nav-holder").each(function() {
            var e = jQuery(this),
                n = "",
                i = "",
                s = "";
            (i = jQuery(".fusion-mobile-navigation").length ? jQuery(this).parent().find(".fusion-mobile-navigation, .fusion-secondary-menu").not(".fusion-sticky-menu") : jQuery(this).parent().find(".fusion-main-menu, .fusion-secondary-menu").not(".fusion-sticky-menu")).length && ("classic" !== avadaMenuVars.mobile_menu_design || e.find(".fusion-mobile-selector").length || (e.append('<button class="fusion-mobile-selector" aria-expanded="false"><span>' + avadaMenuVars.dropdown_goto + "</span></button>"), jQuery(this).find(".fusion-mobile-selector").append('<div class="fusion-selector-down"></div>')), jQuery(e).find("ul").length || jQuery(e).append(jQuery(i).find("> ul").clone()), void 0 !== (s = (n = jQuery(e).find("> ul")).attr("id")) && 0 !== s.indexOf("mobile-menu-") && n.attr("id", "mobile-" + s), n.removeClass("fusion-middle-logo-ul"), "classic" === avadaMenuVars.mobile_menu_design && e.find(".fusion-mobile-selector").attr("aria-controls", n.attr("id")), n.find(".fusion-middle-logo-menu-logo, .fusion-caret, .fusion-menu-login-box .fusion-custom-menu-item-contents, .fusion-menu-cart .fusion-custom-menu-item-contents, .fusion-main-menu-search, li> a > span > .button-icon-divider-left, li > a > span > .button-icon-divider-right, .fusion-arrow-svg, .fusion-dropdown-svg").remove(), (jQuery(".no-mobile-slidingbar").length || "classic" !== avadaMenuVars.mobile_menu_design) && n.find(".fusion-main-menu-sliding-bar").remove(), "classic" === avadaMenuVars.mobile_menu_design ? n.find(".fusion-menu-cart > a").html(avadaMenuVars.mobile_nav_cart) : n.find(".fusion-main-menu-cart").remove(), n.find("li").each(function() {
                var e = "fusion-mobile-nav-item";
                jQuery(this).data("classes") && (e += " " + jQuery(this).data("classes")), jQuery(this).find("img").hasClass("wpml-ls-flag") && (e += " wpml-ls-item"), jQuery(this).hasClass("menu-item-has-children") && (e += " menu-item-has-children"), jQuery(this).find("> a > .menu-text").removeAttr("class").addClass("menu-text"), (jQuery(this).hasClass("current-menu-item") || jQuery(this).hasClass("current-menu-parent") || jQuery(this).hasClass("current-menu-ancestor")) && (e += " fusion-mobile-current-nav-item"), jQuery(this).attr("class", e), jQuery(this).attr("id") && 0 !== jQuery(this).attr("id").indexOf("mobile-menu-item-") && jQuery(this).attr("id", jQuery(this).attr("id").replace("menu-item", "mobile-menu-item")), jQuery(this).attr("style", "")
            }))
        }), jQuery(".fusion-mobile-sticky-nav-holder").each(function() {
            var e = jQuery(this),
                n = "",
                i = jQuery(this).parent().find(".fusion-sticky-menu"),
                s = "";
            "classic" !== avadaMenuVars.mobile_menu_design || e.find(".fusion-mobile-selector").length || (e.append('<button class="fusion-mobile-selector" aria-expanded="false"><span>' + avadaMenuVars.dropdown_goto + "</span></button>"), jQuery(this).find(".fusion-mobile-selector").append('<div class="fusion-selector-down"></div>')), jQuery(e).find("ul").length || jQuery(e).append(jQuery(i).find("> ul").clone()), void 0 !== (s = (n = jQuery(e).find("> ul")).attr("id")) && 0 !== s.indexOf("mobile-menu-") && n.attr("id", "mobile-" + s), "classic" === avadaMenuVars.mobile_menu_design && e.find(".fusion-mobile-selector").attr("aria-controls", n.attr("id")), n.find(".fusion-middle-logo-menu-logo, .fusion-menu-cart, .fusion-menu-login-box, .fusion-main-menu-search, .fusion-arrow-svg, .fusion-dropdown-svg").remove(), (jQuery(".no-mobile-slidingbar").length || "classic" !== avadaMenuVars.mobile_menu_design) && n.find(".fusion-main-menu-sliding-bar").remove(), n.find(".fusion-button").attr("class", "menu-text"), n.find("li").each(function() {
                var e = "fusion-mobile-nav-item";
                jQuery(this).data("classes") && (e += " " + jQuery(this).data("classes")), jQuery(this).find("img").hasClass("wpml-ls-flag") && (e += " wpml-ls-item"), (jQuery(this).hasClass("current-menu-item") || jQuery(this).hasClass("current-menu-parent") || jQuery(this).hasClass("current-menu-ancestor")) && (e += " fusion-mobile-current-nav-item"), jQuery(this).attr("class", e), jQuery(this).attr("id") && 0 !== jQuery(this).attr("id").indexOf("mobile-menu-item-") && jQuery(this).attr("id", jQuery(this).attr("id").replace("menu-item", "mobile-menu-item")), jQuery(this).attr("style", "")
            })
        }), jQuery(".fusion-mobile-nav-holder > ul > li").each(function() {
            jQuery(this).find(".fusion-megamenu-widgets-container").remove(), jQuery(this).find(".fusion-megamenu-holder > ul").each(function() {
                jQuery(this).attr("class", "sub-menu"), jQuery(this).attr("style", ""), jQuery(this).find("> li").each(function() {
                    var e, n = "fusion-mobile-nav-item";
                    jQuery(this).data("classes") && (n += " " + jQuery(this).data("classes")), jQuery(this).find("img").hasClass("wpml-ls-flag") && (n += " wpml-ls-item"), (jQuery(this).hasClass("current-menu-item") || jQuery(this).hasClass("current-menu-parent") || jQuery(this).hasClass("current-menu-ancestor") || jQuery(this).hasClass("fusion-mobile-current-nav-item")) && (n += " fusion-mobile-current-nav-item"), jQuery(this).hasClass("menu-item-has-children") && (n += " menu-item-has-children"), jQuery(this).attr("class", n), jQuery(this).find(".fusion-megamenu-title a, > a").length || (jQuery(this).find(".fusion-megamenu-title").each(function() {
                        jQuery(this).children("a").length || jQuery(this).append('<a href="#">' + jQuery(this).html() + "</a>")
                    }), jQuery(this).find(".fusion-megamenu-title").length || (e = jQuery(this), jQuery(this).find(".sub-menu").each(function() {
                        e.after(jQuery(this))
                    }), jQuery("body").hasClass("fusion-builder-live") ? (jQuery(this).addClass("fusion-hidden-mobile-menu-item"), jQuery(this).hide()) : jQuery(this).remove())), jQuery(this).prepend(jQuery(this).find(".fusion-megamenu-title a, > a")), jQuery(this).find(".fusion-megamenu-title").remove()
                }), jQuery(this).closest(".fusion-mobile-nav-item").append(jQuery(this))
            }), jQuery(this).find(".fusion-megamenu-wrapper, .caret, .fusion-megamenu-bullet").remove()
        }), jQuery('.fusion-mobile-nav-holder .fusion-mobile-nav-item a:not([href="#"])').on("click", function() {
            "" !== jQuery(this.hash).length && this.hash.slice(1) && (jQuery(this).parents(".fusion-mobile-menu-design-classic").length ? jQuery(this).parents(".fusion-menu, .menu").hide().removeClass("mobile-menu-expanded") : jQuery(this).parents(".fusion-mobile-nav-holder").hide())
        }), avadaMenuVars.submenu_slideout && "flyout" !== avadaMenuVars.mobile_menu_design && (jQuery(".fusion-mobile-nav-holder > ul li").each(function() {
            var e, n, i = "fusion-mobile-nav-item",
                s = jQuery(this).find(" > ul");
            jQuery(this).data("classes") && (i += " " + jQuery(this).data("classes")), jQuery(this).find("img").hasClass("wpml-ls-flag") && (i += " wpml-ls-item"), (jQuery(this).hasClass("current-menu-item") || jQuery(this).hasClass("current-menu-parent") || jQuery(this).hasClass("current-menu-ancestor") || jQuery(this).hasClass("fusion-mobile-current-nav-item")) && (i += " fusion-mobile-current-nav-item"), jQuery(this).hasClass("menu-item-has-children") && (i += " menu-item-has-children"), jQuery(this).attr("class", i), s.length && 0 < (e = jQuery(this).find("> a")).length && (n = void 0 !== e.attr("title") ? e.attr("title") : e.children(".menu-text").length ? e.children(".menu-text").clone().children().remove().end().text() : e[0].innerText, e.after('<button href="#" aria-label="' + avadaMenuVars.mobile_submenu_open.replace("%s", n) + '" aria-expanded="false" class="fusion-open-submenu"></button>'), s.hide())
        }), jQuery(".fusion-mobile-nav-holder .fusion-open-submenu").on("click", function(e) {
            var n, i = jQuery(this).parent().children(".sub-menu"),
                s = jQuery(this).parent().children("a");
            n = void 0 !== s.attr("title") ? s.attr("title") : s.children(".menu-text").length ? s.children(".menu-text").clone().children().remove().end().text() : s[0].innerText, e.stopPropagation(), i.slideToggle(200, "easeOutQuad"), i.toggleClass("fusion-sub-menu-open"), i.hasClass("fusion-sub-menu-open") ? (jQuery(this).attr("aria-label", avadaMenuVars.mobile_submenu_close.replace("%s", n)), jQuery(this).attr("aria-expanded", "true")) : (jQuery(this).attr("aria-label", avadaMenuVars.mobile_submenu_open.replace("%s", n)), jQuery(this).attr("aria-expanded", "false"))
        }), jQuery(".fusion-mobile-nav-holder a:not(.fusion-menu-edit, .fusion-icon-sliding-bar)").on("click", function(e) {
            "#" === jQuery(this).attr("href") && ("modal" === jQuery(this).data("toggle") ? jQuery(this).trigger("show.bs.modal") : (e.preventDefault(), e.stopPropagation()), jQuery(this).next(".fusion-open-submenu").trigger("click"))
        }))
    }

    function t() {
        var e, n, i = jQuery(".fusion-header-has-flyout-menu"),
            s = 0,
            u = i.find(".fusion-header").offset().top,
            t = Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)") || Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)"),
            o = Modernizr.mq("only screen and (max-width: " + avadaMenuVars.side_header_break_point + "px)");
        jQuery("body").on("touchmove", function(e) {
            jQuery(e.target).parents(".fusion-flyout-menu").length || e.preventDefault()
        }), 1 <= jQuery(".fusion-mobile-menu-design-flyout").length ? (n = 1 <= jQuery(".fusion-is-sticky").length && 1 <= jQuery(".fusion-mobile-sticky-nav-holder").length ? i.find(".fusion-flyout-menu.fusion-mobile-sticky-nav-holder") : i.find(".fusion-flyout-menu:not(.fusion-mobile-sticky-nav-holder)"), i.find(".fusion-flyout-menu").css({
            display: "none"
        }), n.css({
            display: "flex"
        })) : n = i.find(".fusion-flyout-menu"), jQuery(".fusion-header-has-flyout-menu .fusion-secondary-header").length && (s += jQuery(".fusion-header-has-flyout-menu .fusion-secondary-header").outerHeight()), jQuery("body").hasClass("layout-boxed-mode") && (s += jQuery("body").outerHeight(!0) - jQuery("body").outerHeight()), window.$wpadminbarHeight = fusion.getAdminbarHeight(), e = jQuery(".fusion-header-has-flyout-menu-content").height() + jQuery(".fusion-secondary-header").height() + window.$wpadminbarHeight, i.hasClass("fusion-flyout-menu-active") && (n.css({
            height: "calc(100% - " + e + "px)",
            "margin-top": e
        }), n.find(".fusion-menu").height() > n.height() && n.css("display", "flex")), !avadaMenuVars.header_sticky || t && !avadaMenuVars.header_sticky_tablet || o && !avadaMenuVars.header_sticky_mobile ? (i.find(".fusion-header").css({
            position: "fixed",
            width: "100%",
            "max-width": "100%",
            top: window.$wpadminbarHeight + s,
            "z-index": "210"
        }), jQuery(".fusion-header-sticky-height").css({
            display: "block",
            height: i.find(".fusion-header").outerHeight()
        })) : u > window.$wpadminbarHeight && (i.find(".fusion-header").css({
            position: "fixed",
            top: window.$wpadminbarHeight + s
        }), jQuery(".layout-boxed-mode").length && i.find(".fusion-header").css("max-width", jQuery("#wrapper").outerWidth() + "px"), jQuery(".fusion-header-wrapper").css("height", ""))
    }

    function o() {
        setTimeout(function() {
            var e = jQuery(".fusion-header-has-flyout-menu"),
                n = 0,
                i = Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)") || Modernizr.mq("only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)"),
                s = Modernizr.mq("only screen and (max-width: " + avadaMenuVars.side_header_break_point + "px)");
            jQuery(".fusion-header-has-flyout-menu .fusion-secondary-header").length && (n = jQuery(".fusion-header-has-flyout-menu .fusion-secondary-header").outerHeight()), e.find(".fusion-flyout-menu").css("display", ""), !avadaMenuVars.header_sticky || i && !avadaMenuVars.header_sticky_tablet || s && !avadaMenuVars.header_sticky_mobile ? (e.find(".fusion-header").attr("style", ""), jQuery(".fusion-header-sticky-height").attr("style", "")) : "fixed" === e.find(".fusion-header").css("position") && (e.find(".fusion-header").css("position", ""), e.find(".fusion-header").offset().top > n && e.find(".fusion-header").css("top", window.$wpadminbarHeight), jQuery(window).trigger("scroll")), jQuery("body").off("touchmove")
        }, 250)
    }
    jQuery(".fusion-dropdown-svg").length && jQuery(".fusion-dropdown-svg").each(function() {
        var e = jQuery(this).parents("li").find("> .sub-menu > li:first-child");
        (jQuery(e).hasClass("current-menu-item") || jQuery(e).hasClass("current-menu-parent") || jQuery(e).hasClass("current_page_item")) && jQuery(this).addClass("fusion-svg-active"), jQuery(e).not(".current-menu-item, .current-menu-parent, .current_page_item").find("> a").on("mouseenter mouseleave", function() {
            jQuery(this).parents("li").find(".fusion-dropdown-svg").toggleClass("fusion-svg-active")
        })
    }), jQuery.fn.fusion_position_menu_dropdown = function() {
        return "top" === avadaMenuVars.header_position && !jQuery("body.rtl").length || "left" === avadaMenuVars.header_position ? jQuery(this).children(".sub-menu").each(function() {
            var e, n, i, s, u, t, o, r, a, d, l, m, f, h = jQuery(this);
            h.removeAttr("style"), h.show(), h.removeData("shifted"), h.length && (n = (e = h.offset()).left, t = (i = e.top) + (s = h.height()), o = n + (u = h.outerWidth()), a = fusion.getAdminbarHeight(), l = (d = jQuery(window).scrollTop()) + jQuery(window).height(), o > jQuery(window).width() ? (h.addClass("fusion-switched-side"), h.parent().parent(".sub-menu").length ? h.css({
                left: -1 * u
            }) : h.css("left", -1 * u + h.parent().width()), h.data("shifted", 1)) : h.parent().parent(".sub-menu").length && (h.removeClass("fusion-switched-side"), h.parent().parent(".sub-menu").data("shifted") && (h.css("left", -1 * u), h.data("shifted", 1))), "top" !== avadaMenuVars.header_position && t > l && (r = s < l ? -1 * (t - l + 10) : -1 * (i - d - a), jQuery(".fusion-dropdown-svg").length && (h.find("> li > a").off("mouseenter mouseleave"), h.parents("li").find(".fusion-dropdown-svg").removeClass("fusion-svg-active"), r = (m = Math.floor(r / h.find("li").outerHeight())) * h.find("li").outerHeight(), f = h.find("> li:nth-child( " + (Math.abs(m) + 1) + ")"), (jQuery(f).hasClass("current-menu-item") || jQuery(f).hasClass("current-menu-parent") || jQuery(f).hasClass("current_page_item")) && h.parents("li").find(".fusion-dropdown-svg").addClass("fusion-svg-active"), jQuery(f).not(".current-menu-item, .current-menu-parent, .current_page_item").find("> a").on("mouseenter mouseleave", function() {
                h.parents("li").find(".fusion-dropdown-svg").toggleClass("fusion-svg-active")
            })), h.css("top", r)))
        }) : jQuery(this).children(".sub-menu").each(function() {
            var e, n, i, s, u, t, o, r, a, d, l, m, f, h;
            jQuery(this).removeAttr("style"), jQuery(this).removeData("shifted"), (e = jQuery(this)).length && (i = (n = e.offset()).left, s = n.top, u = e.height(), t = e.outerWidth(), o = s + u, r = fusion.getAdminbarHeight(), d = (a = jQuery(window).scrollTop()) + jQuery(window).height(), m = "right", 0 > i ? (e.addClass("fusion-switched-side"), e.parent().parent(".sub-menu").length ? i < t ? e.attr("style", m + ":" + -1 * t + "px !important") : e.css(m, -1 * t) : e.css(m, -1 * t + e.parent().width()), e.data("shifted", 1)) : e.parent().parent(".sub-menu").length && (e.removeClass("fusion-switched-side"), e.parent().parent(".sub-menu").data("shifted") && e.css(m, -1 * t)), "top" !== avadaMenuVars.header_position && o > d && (l = u < d ? -1 * (o - d + 10) : -1 * (s - a - r), jQuery(".fusion-dropdown-svg").length && (e.find("> li > a").off("mouseenter mouseleave"), e.parents("li").find(".fusion-dropdown-svg").removeClass("fusion-svg-active"), l = (f = Math.floor(l / e.find("li").outerHeight())) * e.find("li").outerHeight(), h = e.find("> li:nth-child( " + (Math.abs(f) + 1) + ")"), (jQuery(h).hasClass("current-menu-item") || jQuery(h).hasClass("current-menu-parent") || jQuery(h).hasClass("current_page_item")) && e.parents("li").find(".fusion-dropdown-svg").addClass("fusion-svg-active"), jQuery(h).not(".current-menu-item, .current-menu-parent, .current_page_item").find("> a").on("mouseenter mouseleave", function() {
                e.parents("li").find(".fusion-dropdown-svg").toggleClass("fusion-svg-active")
            })), e.css("top", l)))
        })
    }, jQuery.fn.walk_through_menu_items = function() {
        jQuery(this).fusion_position_menu_dropdown(), jQuery(this).find(".sub-menu").length && jQuery(this).find(".sub-menu li").walk_through_menu_items()
    }, jQuery.fn.position_cart_dropdown = function() {
        "top" !== avadaMenuVars.header_position && jQuery(this).find(".fusion-menu-cart-items").each(function() {
            var e, n, i, s = jQuery(this),
                u = s.height(),
                t = fusion.getAdminbarHeight(),
                o = jQuery(window).scrollTop(),
                r = jQuery(window).height(),
                a = o + r;
            s.css("top", ""), (n = (e = s.offset().top) + u) > a && (i = u < r ? -1 * (n - a + 10) : -1 * (e - o - t), s.css("top", i))
        })
    }, jQuery.fn.position_menu_search_form = function() {
        "top" !== avadaMenuVars.header_position && jQuery(this).each(function() {
            var e, n, i = jQuery(this),
                s = i.outerHeight(),
                u = jQuery(window).scrollTop() + jQuery(window).height();
            i.css("top", ""), (e = i.offset().top + s) > u && (n = -1 * (e - u + 10), i.css("top", n))
        })
    }, jQuery.fn.fusion_position_megamenu = function() {
        var e, n, i, s, u, t, o, r, a, d, l;
        return "top" === avadaMenuVars.header_position && (o = jQuery(".fusion-secondary-main-menu").length ? jQuery(".fusion-header-wrapper .fusion-secondary-main-menu .fusion-row") : jQuery(".fusion-header-wrapper .fusion-row"), r = o.width(), a = o.offset(), d = void 0 !== a ? a.left : 0, l = d + r), jQuery(".side-header-left").length ? this.each(function() {
            jQuery(this).children("li").each(function() {
                var e, n, i, s, u, t, o, r, a = jQuery(this).find(".fusion-megamenu-wrapper");
                a.length && (a.removeAttr("style"), e = jQuery("#side-header").outerWidth() - 1, s = (n = a.offset().top) + (i = a.height()), u = fusion.getAdminbarHeight(), t = jQuery(".side-header-wrapper").offset().top - u, o = jQuery(window).height(), jQuery("body.rtl").length ? a.css({
                    left: e,
                    right: "auto"
                }) : a.css("left", e), s > t + o && jQuery(window).height() >= jQuery(".side-header-wrapper").height() && (r = i < o ? -1 * (s - t - o + 20) : -1 * (n - u), a.css("top", r)))
            })
        }) : jQuery(".side-header-right").length ? this.each(function() {
            jQuery(this).children("li").each(function() {
                var e, n, i, s, u, t, o, r, a = jQuery(this).find(".fusion-megamenu-wrapper");
                a.length && (a.removeAttr("style"), e = -1 * a.outerWidth(), s = (n = a.offset().top) + (i = a.height()), u = fusion.getAdminbarHeight(), t = jQuery(".side-header-wrapper").offset().top - u, o = jQuery(window).height(), jQuery("body.rtl").length ? a.css({
                    left: e,
                    right: "auto"
                }) : a.css("left", e), s > t + o && jQuery(window).height() >= jQuery(".side-header-wrapper").height() && (r = i < o ? -1 * (s - t - o + 20) : -1 * (n - u), a.css("top", r)))
            })
        }) : (e = "", e = jQuery(".fusion-header-v4").length ? jQuery(this).parent(".fusion-main-menu").parent() : jQuery(this).parent(".fusion-main-menu"), jQuery(this).parent(".fusion-main-menu").length ? (i = (n = e).offset(), s = n.width(), u = i.left, t = u + s, jQuery("body.rtl").length ? this.each(function() {
            jQuery(this).children("li").each(function() {
                var e = jQuery(this),
                    n = e.offset(),
                    i = n.left + e.outerWidth(),
                    s = e.find(".fusion-megamenu-wrapper"),
                    a = s.outerWidth(),
                    d = 0;
                s.length && (s.removeAttr("style"), r = o.width(), i - a < u && (a === jQuery(window).width() ? d = i - a : a > r ? d = i - l + (r - a) / 2 : (d = -1 * (n.left - (t - a)), d = -1 * (a - (i - u)), ("left" === avadaMenuVars.logo_alignment.toLowerCase() || "center" === avadaMenuVars.logo_alignment.toLowerCase() && !jQuery(".header-v5").length || jQuery(this).parents(".sticky-header").length) && i - d > t && (d = -1 * (t - i))), s.css("right", d)))
            })
        }) : this.each(function() {
            jQuery(this).children("li").each(function() {
                var e = jQuery(this),
                    n = e.offset(),
                    i = e.find(".fusion-megamenu-wrapper"),
                    s = i.outerWidth(),
                    a = 0;
                i.length && (i.removeAttr("style"), r = o.width(), n.left + s > t && (s === jQuery(window).width() ? a = -1 * n.left : s > r ? a = d - n.left + (r - s) / 2 : (a = -1 * (n.left - (t - s)), "right" === avadaMenuVars.logo_alignment.toLowerCase() && n.left + a < u && (a = -1 * (n.left - u))), i.css("left", a)))
            })
        })) : void 0)
    }, jQuery.fn.calc_megamenu_widths = function() {
        jQuery(this).find(".fusion-megamenu-menu").each(function() {
            var e, n, i, s = jQuery(this).find(".fusion-megamenu-holder"),
                u = s.data("width");
            s.css("width", u), e = s.outerWidth(), "site_width" === avadaMenuVars.megamenu_base_width ? "top" === avadaMenuVars.header_position ? n = (jQuery(".fusion-secondary-main-menu").length ? jQuery(".fusion-header-wrapper .fusion-secondary-main-menu .fusion-row") : jQuery(".fusion-header-wrapper .fusion-row")).width() : "boxed" === avadaMenuVars.site_layout.toLowerCase() ? n = jQuery("#main").outerWidth() : (i = jQuery("#main").css("padding-left").replace("px", ""), n = jQuery(window).width() - i - jQuery("#side-header").outerWidth()) : n = "viewport_width" === avadaMenuVars.megamenu_base_width && "boxed" === avadaMenuVars.site_layout.toLowerCase() && "top" !== avadaMenuVars.header_position ? jQuery("#main").outerWidth() : jQuery(window).width(), n < e ? s.css("width", n) : s.css("width", e)
        })
    }, jQuery.fn.position_last_top_menu_item = function() {
        var e, n, i, s, u, t;
        (jQuery(this).children("ul").length || jQuery(this).children("div").length) && (n = (e = jQuery(this)).position().left, u = (s = jQuery(".fusion-secondary-header .fusion-row")).position().left, t = s.outerWidth(), e.children("ul").length ? i = e.children("ul") : e.children("div").length && (i = e.children("div")), jQuery("body.rtl").length ? i.position().left < n && (i.css("left", "-1px").css("right", "auto"), i.find(".sub-menu").each(function() {
            jQuery(this).css("left", "100px").css("right", "auto")
        })) : n + i.outerWidth() > u + t && (i.css("right", "-1px").css("left", "auto"), i.find(".sub-menu").each(function() {
            jQuery(this).css("right", "100px").css("left", "auto")
        })))
    }, n(), i(), u(), jQuery(window).on("header-rendered", function() {
        n(), i(), u()
    }), jQuery(document.body).on("mouseenter", ".fusion-dropdown-menu", function() {
        jQuery(this).css("overflow", "visible")
    }), jQuery(document.body).on("mouseleave", ".fusion-dropdown-menu, .fusion-megamenu-menu, .fusion-custom-menu-item", function() {
        jQuery(this).css("overflow", ""), jQuery(".fusion-active-link").removeClass("fusion-active-link")
    }), jQuery(document.body).on("click", ".fusion-main-menu-search", function(e) {
        e.stopPropagation()
    }), jQuery(document.body).on("click", ".fusion-main-menu-search:not(.fusion-search-overlay) .fusion-main-menu-icon", function(e) {
        e.preventDefault(), e.stopPropagation(), "block" === jQuery(this).parent().find(".fusion-custom-menu-item-contents").css("display") ? (jQuery(this).parent().find(".fusion-custom-menu-item-contents").hide(), jQuery(this).parent().removeClass("fusion-main-menu-search-open"), jQuery(this).parent().find("style").remove(), jQuery(this).attr("aria-expanded", "false")) : (jQuery(this).parent().find(".fusion-custom-menu-item-contents").removeAttr("style"), jQuery(this).parent().find(".fusion-custom-menu-item-contents").show(), jQuery(this).parent().addClass("fusion-main-menu-search-open"), jQuery(this).parent().append("<style>.fusion-main-menu{overflow:visible!important;</style>"), jQuery(this).parent().find(".fusion-custom-menu-item-contents .s").focus(), jQuery(this).attr("aria-expanded", "true"), "top" === avadaMenuVars.header_position && (!jQuery("body.rtl").length && 0 > jQuery(this).parent().find(".fusion-custom-menu-item-contents").offset().left && jQuery(this).parent().find(".fusion-custom-menu-item-contents").css({
            left: "0",
            right: "auto"
        }), jQuery("body.rtl").length && jQuery(this).parent().find(".fusion-custom-menu-item-contents").offset().left + jQuery(this).parent().find(".fusion-custom-menu-item-contents").width() > jQuery(window).width() && jQuery(this).parent().find(".fusion-custom-menu-item-contents").css({
            left: "auto",
            right: "0"
        })))
    }), jQuery(document.body).on("click", ".fusion-search-overlay .fusion-main-menu-icon, .fusion-close-search", function(e) {
        var n = jQuery(".fusion-main-menu");
        e.preventDefault(), resizeOverlaySearch(), n.addClass("search-transition"), setTimeout(function() {
            n.removeClass("search-transition")
        }, 800), n.toggleClass("search-open"), n.hasClass("search-open") ? (n.find('.fusion-search-field input[type="search"]').focus(), n.find(".fusion-main-menu-search").attr("aria-expanded", "true")) : n.find(".fusion-main-menu-search").attr("aria-expanded", "false")
    }), jQuery("a").on("focus", function() {
        jQuery(".fusion-active-link ").removeClass("fusion-active-link"), jQuery(this).parents(".fusion-dropdown-menu, .fusion-main-menu-cart, .fusion-megamenu-menu, .fusion-custom-menu-item").length && (jQuery(this).parents("li").addClass("fusion-active-link"), jQuery(".fusion-main-menu").css("overflow", "visible"))
    }), jQuery(document).on("click", function() {
        jQuery(".fusion-main-menu-search-dropdown .fusion-main-menu-search .fusion-custom-menu-item-contents").hide(), jQuery(".fusion-main-menu-search-dropdown .fusion-main-menu-search").removeClass("fusion-main-menu-search-open"), jQuery(".fusion-main-menu-search-dropdown .fusion-main-menu-search").find("style").remove()
    }), jQuery(".fusion-header-wrapper .fusion-secondary-menu > ul > li:last-child").position_last_top_menu_item(), s(".fusion-main-menu .fusion-main-menu-cart"), s(".fusion-secondary-menu .fusion-menu-login-box"), jQuery(".fusion-megamenu-menu").on("mouseenter", function() {
        jQuery(this).find(".shortcode-map").length && jQuery(this).find(".shortcode-map").each(function() {
            jQuery(this).reinitializeGoogleMap()
        })
    }), e = !1, jQuery(".fusion-megamenu-menu").on("mouseover", function() {
        jQuery(this).find(".fusion-megamenu-widgets-container iframe").each(function() {
            e || jQuery(this).attr("src", jQuery(this).attr("src")), e = !0
        })
    }), jQuery(".fusion-megamenu-wrapper iframe").on("mouseover", function() {
        jQuery(this).parents(".fusion-megamenu-widgets-container").css("display", "block"), jQuery(this).parents(".fusion-megamenu-wrapper").css({
            opacity: "1",
            visibility: "visible"
        })
    }), jQuery(".fusion-megamenu-wrapper iframe").on("mouseout", function() {
        jQuery(this).parents(".fusion-megamenu-widgets-container").css("display", ""), jQuery(this).parents(".fusion-megamenu-wrapper").css({
            opacity: "",
            visibility: ""
        })
    }), jQuery(".fusion-main-menu").on("mouseenter", ".fusion-menu-cart", function() {
        jQuery(this).position_cart_dropdown()
    }), jQuery(".fusion-main-menu .fusion-main-menu-search .fusion-main-menu-icon").on("click", function() {
        var e = jQuery(this);
        setTimeout(function() {
            e.parent().find(".fusion-custom-menu-item-contents").position_menu_search_form()
        }, 5)
    }), jQuery(window).on("fusion-resize-horizontal", function() {
        jQuery(".fusion-main-menu .fusion-main-menu-search .fusion-custom-menu-item-contents").position_menu_search_form()
    }), jQuery(document).on("click", ".fusion-mobile-selector", function() {
        var e = jQuery(this).next("ul");
        e.hasClass("mobile-menu-expanded") ? (e.removeClass("mobile-menu-expanded"), jQuery(this).attr("aria-expanded", "false")) : (e.addClass("mobile-menu-expanded"), jQuery(this).attr("aria-expanded", "true")), e.slideToggle(200, "easeOutQuad"), jQuery(".fusion-mobile-menu-search").slideToggle(200, "easeOutQuad")
    }), jQuery(".fusion-is-sticky").length && jQuery(".fusion-mobile-sticky-nav-holder").length ? jQuery(".fusion-mobile-menu-icons .fusion-icon-bars").attr("aria-controls", jQuery(".fusion-mobile-sticky-nav-holder > ul").attr("id")) : jQuery(".fusion-mobile-menu-icons .fusion-icon-bars").attr("aria-controls", jQuery(".fusion-mobile-nav-holder").not(".fusion-mobile-sticky-nav-holder").find("> ul").attr("id")), jQuery(window).on("scroll", function() {
        setTimeout(function() {
            jQuery(".fusion-is-sticky").length && jQuery(".fusion-mobile-sticky-nav-holder").length ? jQuery(".fusion-mobile-menu-icons .fusion-icon-bars").attr("aria-controls", jQuery(".fusion-mobile-sticky-nav-holder > ul").attr("id")) : jQuery(".fusion-mobile-menu-icons .fusion-icon-bars").attr("aria-controls", jQuery(".fusion-mobile-nav-holder").not(".fusion-mobile-sticky-nav-holder").find("> ul").attr("id"))
        }, 50)
    }), jQuery(document).on("click", ".fusion-mobile-menu-icons .fusion-icon-bars", function(e) {
        var n, i;
        e.preventDefault(), n = 1 <= jQuery(".fusion-header-v4").length || 1 <= jQuery(".fusion-header-v5").length ? ".fusion-secondary-main-menu" : 1 <= jQuery("#side-header").length ? "#side-header" : ".fusion-header", (i = 1 <= jQuery(".fusion-is-sticky").length && 1 <= jQuery(".fusion-mobile-sticky-nav-holder").length ? jQuery(n).find(".fusion-mobile-sticky-nav-holder") : jQuery(n).find(".fusion-mobile-nav-holder").not(".fusion-mobile-sticky-nav-holder")).slideToggle(200, "easeOutQuad"), i.toggleClass("fusion-mobile-menu-expanded"), i.hasClass("fusion-mobile-menu-expanded") ? jQuery(this).attr("aria-expanded", "true") : jQuery(this).attr("aria-expanded", "false")
    }), jQuery(document).on("click", ".fusion-mobile-menu-icons .fusion-icon-search", function(e) {
        e.preventDefault(), jQuery(".fusion-secondary-main-menu .fusion-secondary-menu-search, .side-header-wrapper .fusion-secondary-menu-search, .fusion-mobile-menu-search").slideToggle(200, "easeOutQuad")
    }), jQuery(document).on("click", ".fusion-flyout-menu-icons .fusion-flyout-menu-toggle", function(e) {
        var n = jQuery(".fusion-header-has-flyout-menu");
        e.preventDefault(), jQuery(document).off("keyup.flyoutSearchEsc"), jQuery(document).off("keyup.flyoutMenuEsc"), n.hasClass("fusion-flyout-active") ? (n.hasClass("fusion-flyout-search-active") ? (n.addClass("fusion-flyout-menu-active"), t(), jQuery(document).on("keyup.flyoutMenuEsc", function(e) {
            27 === e.keyCode && document.querySelector(".fusion-flyout-menu-icons .fusion-flyout-menu-toggle").click()
        })) : (n.removeClass("fusion-flyout-active"), n.removeClass("fusion-flyout-menu-active"), o()), n.removeClass("fusion-flyout-search-active")) : (n.addClass("fusion-flyout-active"), n.addClass("fusion-flyout-menu-active"), t(), jQuery(document).on("keyup.flyoutMenuEsc", function(e) {
            27 === e.keyCode && document.querySelector(".fusion-flyout-menu-icons .fusion-flyout-menu-toggle").click()
        }))
    }), jQuery(document).on("click", ".fusion-flyout-menu-icons .fusion-flyout-search-toggle", function(e) {
        var n = jQuery(".fusion-header-has-flyout-menu");
        e.preventDefault(), jQuery(document).off("keyup.flyoutSearchEsc"), jQuery(document).off("keyup.flyoutMenuEsc"), n.hasClass("fusion-flyout-active") ? (n.hasClass("fusion-flyout-menu-active") ? (n.addClass("fusion-flyout-search-active"), Modernizr.mq("only screen and (min-width:" + parseInt(avadaMenuVars.side_header_break_point, 10) + "px)") && n.find(".fusion-flyout-search .s").focus(), jQuery(document).on("keyup.flyoutSearchEsc", function(e) {
            27 === e.keyCode && document.querySelector(".fusion-flyout-menu-icons .fusion-icon.fusion-icon-search").click()
        })) : (n.removeClass("fusion-flyout-active"), n.removeClass("fusion-flyout-search-active"), o()), n.removeClass("fusion-flyout-menu-active")) : (n.addClass("fusion-flyout-active"), n.addClass("fusion-flyout-search-active"), Modernizr.mq("only screen and (min-width:" + parseInt(avadaMenuVars.side_header_break_point, 10) + "px)") && n.find(".fusion-flyout-search .s").focus(), t(), jQuery(document).on("keyup.flyoutSearchEsc", function(e) {
            27 === e.keyCode && document.querySelector(".fusion-flyout-menu-icons .fusion-icon.fusion-icon-search").click()
        }))
    }), jQuery("html").on("mouseenter", ".fusion-no-touch .fusion-flyout-menu .menu-item a", function() {
        jQuery(this).parents(".fusion-flyout-menu").find(".fusion-flyout-menu-backgrounds #item-bg-" + jQuery(this).parent().data("item-id")).addClass("active")
    }), jQuery("html").on("mouseleave", ".fusion-no-touch .fusion-flyout-menu .menu-item a", function() {
        jQuery(this).parents(".fusion-flyout-menu").find(".fusion-flyout-menu-backgrounds #item-bg-" + jQuery(this).parent().data("item-id")).removeClass("active")
    }), jQuery(window).on("resize", function() {
        jQuery(".fusion-mobile-menu-design-flyout").hasClass("fusion-flyout-active") && Modernizr.mq("screen and (min-width: " + (parseInt(avadaHeaderVars.side_header_break_point, 10) + 1) + "px)") && jQuery(".fusion-flyout-menu-icons .fusion-flyout-menu-toggle").trigger("click")
    })
}), jQuery(window).on("load", function() {
    function e() {
        var e = 0;
        Modernizr.mq("only screen and (max-width: " + avadaMenuVars.side_header_break_point + "px)") ? (jQuery(".fusion-secondary-menu > ul").children("li").each(function() {
            e += jQuery(this).outerWidth(!0) + 2
        }), e > jQuery(window).width() && 318 < jQuery(window).width() ? window.mobileMenuSepAdded || (jQuery(".fusion-secondary-menu > ul").append('<div class="fusion-mobile-menu-sep"></div>'), jQuery(".fusion-secondary-menu > ul").css("position", "relative"), jQuery(".fusion-mobile-menu-sep").css({
            position: "absolute",
            top: jQuery(".fusion-secondary-menu > ul > li").height() - 1 + "px",
            width: "100%",
            "border-bottom-width": "1px",
            "border-bottom-style": "solid"
        }), window.mobileMenuSepAdded = !0) : (jQuery(".fusion-secondary-menu > ul").css("position", ""), jQuery(".fusion-secondary-menu > ul").find(".fusion-mobile-menu-sep").remove(), window.mobileMenuSepAdded = !1)) : (jQuery(".fusion-secondary-menu > ul").css("position", ""), jQuery(".fusion-secondary-menu > ul").find(".fusion-mobile-menu-sep").remove(), window.mobileMenuSepAdded = !1)
    }
    window.mobileMenuSepAdded = !1, e(), "classic" === avadaMenuVars.mobile_menu_design && (jQuery(".sh-mobile-nav-holder").append('<div class="mobile-selector" aria-expanded="false"><span>' + avadaMenuVars.dropdown_goto + "</span></div>"), jQuery(".sh-mobile-nav-holder .mobile-selector").append('<div class="selector-down"></div>')), jQuery(".sh-mobile-nav-holder").append(jQuery(".nav-holder .fusion-navbar-nav").clone()), jQuery(".sh-mobile-nav-holder .fusion-navbar-nav").attr("id", "mobile-nav"), jQuery(".sh-mobile-nav-holder ul#mobile-nav").removeClass("fusion-navbar-nav"), jQuery(".sh-mobile-nav-holder ul#mobile-nav").children(".cart").remove(), jQuery(".sh-mobile-nav-holder ul#mobile-nav .mobile-nav-item").children(".login-box").remove(), jQuery(".sh-mobile-nav-holder ul#mobile-nav li").children("#main-nav-search-link").each(function() {
        jQuery(this).parents("li").remove()
    }), jQuery(".sh-mobile-nav-holder ul#mobile-nav").find("li").each(function() {
        var e = "mobile-nav-item";
        (jQuery(this).hasClass("current-menu-item") || jQuery(this).hasClass("current-menu-parent") || jQuery(this).hasClass("current-menu-ancestor")) && (e += " mobile-current-nav-item"), jQuery(this).attr("class", e), jQuery(this).attr("id") && jQuery(this).attr("id", jQuery(this).attr("id").replace("menu-item", "mobile-menu-item")), jQuery(this).attr("style", "")
    }), jQuery(".sh-mobile-nav-holder .mobile-selector").on("click", function() {
        jQuery(".sh-mobile-nav-holder #mobile-nav").hasClass("mobile-menu-expanded") ? (jQuery(".sh-mobile-nav-holder #mobile-nav").removeClass("mobile-menu-expanded"), jQuery(this).attr("aria-expanded", "false")) : (jQuery(".sh-mobile-nav-holder #mobile-nav").addClass("mobile-menu-expanded"), jQuery(this).attr("aria-expanded", "true")), jQuery(".sh-mobile-nav-holder #mobile-nav").slideToggle(200, "easeOutQuad")
    }), avadaMenuVars.submenu_slideout && (jQuery(".header-wrapper .mobile-topnav-holder .mobile-topnav li, .header-wrapper .mobile-nav-holder .navigation li, .sticky-header .mobile-nav-holder .navigation li, .sh-mobile-nav-holder .navigation li").each(function() {
        var e = "mobile-nav-item";
        (jQuery(this).hasClass("current-menu-item") || jQuery(this).hasClass("current-menu-parent") || jQuery(this).hasClass("current-menu-ancestor") || jQuery(this).hasClass("mobile-current-nav-item")) && (e += " mobile-current-nav-item"), jQuery(this).attr("class", e), jQuery(this).find(" > ul").length && (jQuery(this).prepend('<span href="#" aria-haspopup="true" class="open-submenu"></span>'), jQuery(this).find(" > ul").hide())
    }), jQuery(".header-wrapper .mobile-topnav-holder .open-submenu, .header-wrapper .mobile-nav-holder .open-submenu, .sticky-header .mobile-nav-holder .open-submenu, .sh-mobile-nav-holder .open-submenu").on("click", function(e) {
        e.stopPropagation(), jQuery(this).parent().children(".sub-menu").slideToggle(200, "easeOutQuad")
    })), ("ontouchstart" in document.documentElement || navigator.msMaxTouchPoints) && (jQuery(".fusion-main-menu li.menu-item-has-children > a, .fusion-secondary-menu li.menu-item-has-children > a, .order-dropdown > li .current-li").on("click", function() {
        var e = jQuery(this);
        return e.hasClass("hover") ? (e.removeClass("hover"), !0) : (e.addClass("hover"), jQuery(".fusion-main-menu li.menu-item-has-children > a, .fusion-secondary-menu li.menu-item-has-children > a, .order-dropdown > li .current-li").not(this).removeClass("hover"), !1)
    }), jQuery(".sub-menu li, .fusion-mobile-nav-item li").not("li.menu-item-has-children").on("click", function() {
        var e = jQuery(this).find("a").attr("href");
        return "_blank" !== jQuery(this).find("a").attr("target") && (0 < e.indexOf("#") && (e = "/" === e.charAt(e.indexOf("#") - 1) ? e.replace("#", "#_") : e.replace("#", "/#_")), window.location = e), !0
    })), jQuery(".fusion-main-menu li.menu-item-has-children > a, .fusion-secondary-menu li.menu-item-has-children > a, .side-nav li.page_item_has_children > a").each(function() {
        jQuery(this).attr("aria-haspopup", "true")
    }), 1 <= jQuery(".megaResponsive").length && jQuery(".mobile-nav-holder.main-menu").addClass("set-invisible"), "top" === avadaMenuVars.header_position && jQuery(window).on("fusion-resize-horizontal", function() {
        jQuery(".main-nav-search").each(function() {
            var e, n, i, s, u, t;
            jQuery(this).hasClass("search-box-open") && (n = (e = jQuery(this).find(".main-nav-search-form")).outerWidth(), s = (i = e.offset().left) + n, u = e.parent().offset().left, t = jQuery(window).width(), jQuery("body.rtl").length ? parseInt(i, 10) === parseInt(u, 10) && s > t || i < u && s + n > t ? e.css({
                left: "auto",
                right: "0"
            }) : e.css({
                left: "0",
                right: "auto"
            }) : i < u && 0 > i || parseInt(i, 10) === parseInt(u, 10) && 0 > i - n ? e.css({
                left: "0",
                right: "auto"
            }) : e.css({
                left: "auto",
                right: "0"
            }))
        })
    }), jQuery(window).on("fusion-resize-horizontal", function() {
        e()
    }), jQuery(".fusion-menu-login-box").each(function() {
        var e = jQuery(this),
            n = e.find(".fusion-custom-menu-item-contents");
        n.find('input[id="username"]').on("click", function() {
            e.addClass("fusion-active-login"), e.closest(".fusion-main-menu").css("overflow", "visible")
        }), n.find('input[id="username"]').on("input", function() {
            e.hasClass("fusion-active-login") && e.removeClass("fusion-active-login").addClass("fusion-active-link")
        }), n.find("input").not('[id="username"]').on("click", function() {
            e.removeClass("fusion-active-login").removeClass("fusion-active-link"), e.closest(".fusion-main-menu").css("overflow", "")
        })
    }), jQuery(".fusion-main-menu .fusion-menu-login-box").length && jQuery(".fusion-main-menu").on("mouseleave", function() {
        var e = jQuery(this),
            n = e.find(".fusion-menu-login-box");
        setTimeout(function() {
            "hidden" === n.css("overflow") && e.css("overflow", "")
        }, 10)
    }), jQuery(document).on("click", function(e) {
        "fusion-custom-menu-item-contents" !== e.target.className && "input-text" !== e.target.className && (jQuery(".fusion-custom-menu-item-contents").parents(".fusion-custom-menu-item").removeClass("fusion-active-login").removeClass("fusion-active-link"), jQuery(".fusion-main-menu").css("overflow", ""))
    })
});