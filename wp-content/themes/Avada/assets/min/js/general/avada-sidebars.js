function fusionReSettStickySidebarStatus() {
    setStickySidebarStatus(calcStickySidebarOffset())
}

function setStickySidebarStatus(e) {
    !Modernizr.mq("only screen and (max-width:" + avadaSidebarsVars.sidebar_break_point + "px)") && Math.floor(jQuery("#content").height()) >= Math.floor(jQuery("#main").height()) ? (jQuery(".fusion-sidebar-left.fusion-sticky-sidebar .fusion-sidebar-inner-content").hasClass("fusion-sidebar-stuck") || jQuery(".fusion-sidebar-left.fusion-sticky-sidebar .fusion-sidebar-inner-content").stick_in_parent({
        parent: "#main > .fusion-row",
        sticky_class: "fusion-sidebar-stuck",
        bottoming: !0,
        spacer: !1,
        offset_top: e
    }).on("sticky_kit:stick", function(e) {
        var s = jQuery(e.target);
        jQuery("body").hasClass("double-sidebars") && (s.css("margin-left", "0"), s.parent().css({
            "margin-left": s.data("margin"),
            width: s.data("width")
        })), s.parent().children(".fusion-panel-shortcuts-wrapper").length && (s.parent().removeClass("fusion-panel-customizable-needs-positioned"), s.prepend(s.parent().children(".fusion-panel-shortcuts-wrapper")))
    }).on("sticky_kit:unstick", function(e) {
        var s = jQuery(e.target);
        jQuery("body").hasClass("double-sidebars") && s.css("margin-left", s.data("margin")), s.children(".fusion-panel-shortcuts-wrapper").length && (s.parent().addClass("fusion-panel-customizable-needs-positioned"), s.parent().prepend(s.children(".fusion-panel-shortcuts-wrapper")))
    }), jQuery(".fusion-sidebar-right.fusion-sticky-sidebar .fusion-sidebar-inner-content").hasClass("fusion-sidebar-stuck") || jQuery(".fusion-sidebar-right.fusion-sticky-sidebar .fusion-sidebar-inner-content").stick_in_parent({
        parent: "#main > .fusion-row",
        sticky_class: "fusion-sidebar-stuck",
        bottoming: !0,
        spacer: !1,
        offset_top: e
    }).on("sticky_kit:stick", function(e) {
        var s = jQuery(e.target);
        jQuery("body").hasClass("double-sidebars") && (s.css("margin-left", "0"), s.parent().css({
            "margin-left": s.data("margin"),
            width: s.data("width")
        })), s.parent().children(".fusion-panel-shortcuts-wrapper").length && (s.parent().removeClass("fusion-panel-customizable-needs-positioned"), s.prepend(s.parent().children(".fusion-panel-shortcuts-wrapper")))
    }).on("sticky_kit:unstick", function(e) {
        var s = jQuery(e.target);
        jQuery("body").hasClass("double-sidebars") && s.css("margin-left", s.data("margin")), s.children(".fusion-panel-shortcuts-wrapper").length && (s.parent().addClass("fusion-panel-customizable-needs-positioned"), s.parent().prepend(s.children(".fusion-panel-shortcuts-wrapper")))
    })) : (jQuery(".fusion-sidebar-left.fusion-sticky-sidebar .fusion-sidebar-inner-content").trigger("sticky_kit:detach"), jQuery(".fusion-sidebar-right.fusion-sticky-sidebar .fusion-sidebar-inner-content").trigger("sticky_kit:detach"))
}

function calcStickySidebarOffset() {
    var e = fusion.getAdminbarHeight() + 50,
        s = !1;
    return jQuery(".fusion-tb-header").length && "function" == typeof fusionGetStickyOffset ? (s = fusionGetStickyOffset()) ? s + e : e : ("top" === avadaSidebarsVars.header_position && avadaSidebarsVars.header_sticky && jQuery(".fusion-header").length && ("v4" === avadaSidebarsVars.header_layout || "v5" === avadaSidebarsVars.header_layout ? "menu_only" === avadaSidebarsVars.header_sticky_type2_layout ? e += jQuery(".fusion-secondary-main-menu").height() : e += jQuery(".fusion-sticky-header-wrapper").height() : avadaSidebarsVars.sticky_header_shrinkage ? e += 66 : e += jQuery(".fusion-header").height()), e)
}
jQuery(document).ready(function() {
    var e, s = calcStickySidebarOffset();
    1 <= jQuery("#sidebar-2").length && (e = jQuery("#sidebar").css("float"), jQuery("body").addClass("sidebar-position-" + e)), setStickySidebarStatus(s), jQuery(window).on("fusion-resize-vertical", function() {
        fusionReSettStickySidebarStatus()
    })
});