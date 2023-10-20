function fusionInitTooltips() {
    jQuery('[data-toggle="tooltip"]').each(function() {
        var o;
        o = jQuery(this).parents(".fusion-header-wrapper").length ? ".fusion-header-wrapper" : jQuery(this).parents("#side-header").length ? "#side-header" : "body", (!cssua.ua.mobile || cssua.ua.mobile && "_blank" !== jQuery(this).attr("target")) && jQuery(this).tooltip({
            container: o
        })
    })
}
jQuery(window).on("load", function() {
    fusionInitTooltips()
}), jQuery(window).on("fusion-element-render-fusion_text fusion-element-render-fusion_social_links", function(o, e) {
    var i, s = jQuery('div[data-cid="' + e + '"]').find('[data-toggle="tooltip"]');
    i = s.parents(".fusion-header-wrapper").length ? ".fusion-header-wrapper" : s.parents("#side-header").length ? "#side-header" : "body", s.each(function() {
        (!cssua.ua.mobile || cssua.ua.mobile && "_blank" !== jQuery(this).attr("target")) && jQuery(this).tooltip({
            container: i
        })
    })
}), jQuery(document).ready(function() {
    jQuery(".tooltip-shortcode, .fusion-secondary-header .fusion-social-networks li, .fusion-author-social .fusion-social-networks li, .fusion-footer-copyright-area .fusion-social-networks li, .fusion-footer-widget-area .fusion-social-networks li, .sidebar .fusion-social-networks li, .share-box li, .social-icon, .social li").on("mouseenter", function(o) {
        jQuery(this).find(".popup").hoverFlow(o.type, {
            opacity: "show"
        })
    }), jQuery(".tooltip-shortcode, .fusion-secondary-header .fusion-social-networks li, .fusion-author-social .fusion-social-networks li, .fusion-footer-copyright-area .fusion-social-networks li, .fusion-footer-widget-area .fusion-social-networks li, .sidebar .fusion-social-networks li, .share-box li, .social-icon, .social li").on("mouseleave", function(o) {
        jQuery(this).find(".popup").hoverFlow(o.type, {
            opacity: "hide"
        })
    })
});