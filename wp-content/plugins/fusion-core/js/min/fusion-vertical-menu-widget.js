jQuery(document).ready(function() {
    jQuery(".fusion-vertical-menu-widget .current_page_item, .fusion-vertical-menu-widget .current-menu-item").each(function() {
        jQuery(this).find(".children, .sub-menu").length && jQuery(this).find("> .children, > .sub-menu").show("slow")
    }), jQuery(".fusion-vertical-menu-widget .current_page_item , .fusion-vertical-menu-widget .current-menu-item").each(function() {
        jQuery(this).parent().hasClass("fusion-vertical-menu-widget") && jQuery(this).find("ul").show("slow"), (jQuery(this).parent().hasClass("children") || jQuery(this).parent().hasClass("sub-menu")) && jQuery(this).parents("ul").show("slow")
    })
}), jQuery(window).on("load", function() {
    jQuery(".fusion-vertical-menu-widget.click li a .arrow").on("click", function(e) {
        if (e.preventDefault(), (jQuery(this).parent().parent(".page_item_has_children").length || jQuery(this).parent().parent(".menu-item-has-children").length) && (jQuery(this).parent().parent().find("> .children, > .sub-menu").length && !jQuery(this).parent().parent().find("> .children, > .sub-menu").is(":visible") ? jQuery(this).parent().parent().find("> .children, > .sub-menu").stop(!0, !0).slideDown("slow") : jQuery(this).parent().parent().find("> .children, > .sub-menu").stop(!0, !0).slideUp("slow")), jQuery(this).parent().parent(".page_item_has_children.current_page_item, .menu-item-has-children.current-menu-item").length) return !1
    }), jQuery(".fusion-vertical-menu-widget.hover li").hoverIntent({
        over: function() {
            jQuery(this).find("> .children, > .sub-menu").length && jQuery(this).find("> .children, > .sub-menu").stop(!0, !0).slideDown("slow")
        },
        out: function() {
            (0 === jQuery(this).find(".current_page_item").length && !1 === jQuery(this).hasClass("current_page_item") || 0 === jQuery(this).find(".current-menu-item").length && !1 === jQuery(this).hasClass("current-menu-item")) && jQuery(this).find("> .children, > .sub-menu").stop(!0, !0).slideUp("slow")
        },
        timeout: 500
    })
});