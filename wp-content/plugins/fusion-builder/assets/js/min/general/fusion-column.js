function fusionCalcColumnEqualHeights() {
    var n = ".fusion-fullwidth:not(.fusion-equal-height-columns)",
        u = ".fusion-fullwidth.fusion-equal-height-columns";
    jQuery(".fusion-fullwidth.fusion-equal-height-columns .fusion-builder-row-inner").each(function() {
        jQuery(this).find(".fusion-layout-column > .fusion-column-wrapper").not(function(n, u) {
            return jQuery(u).parent(".fusion-column-wrapper").length || jQuery(u).parents(".fusion-events-shortcode").length ? 1 : 0
        }).equalHeights()
    }), jQuery(".fusion-fullwidth.fusion-equal-height-columns").each(function() {
        jQuery(this).find(".fusion-layout-column:not(.fusion-builder-row-inner .fusion-layout-column) > .fusion-column-wrapper").not(function(n, u) {
            return jQuery(u).parentsUntil(".fusion-content-tb", ".fusion-column-wrapper").length ? 1 : 0
        }).equalHeights()
    }), jQuery(n + " .fusion-recent-posts " + u + ", " + n + " .fusion-posts-container " + u + ", " + n + " .fusion-portfolio " + u).each(function() {
        jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(n, u) {
            return jQuery(u).parent(".fusion-column-wrapper").length ? 1 : 0
        }).equalHeights()
    }), jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").length ? jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height() : jQuery(".fusion-layout-column > .fusion-column-wrapper").fusion_calculate_empty_column_height()
}
jQuery(document).ready(function() {
    jQuery(".fusion-image-hovers .hover-type-liftup.fusion-column-inner-bg").on({
        mouseenter: function() {
            var n = jQuery(this).closest(".fusion_builder_column");
            jQuery(this).css("z-index", "4"), jQuery(this).siblings(".fusion-column-wrapper").css("z-index", "5"), "none" !== n.css("filter") && "auto" === n.css("z-index") && (n.css("z-index", "1"), n.attr("data-filter-zindex", "true"))
        },
        mouseleave: function() {
            var n = jQuery(this).closest(".fusion_builder_column");
            jQuery(this).css("z-index", ""), jQuery(this).siblings(".fusion-column-wrapper").css("z-index", ""), "true" === n.data("filter-zindex") && (n.css("z-index", ""), n.removeAttr("data-filter-zindex"))
        }
    })
}), jQuery(window).on("load", function() {
    setTimeout(function() {
        fusionCalcColumnEqualHeights()
    }, 100), jQuery(".fusion-layout-column .fusion-column-wrapper").fusion_set_bg_img_dims(), jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").length ? jQuery(".fusion-layout-column > .fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height() : jQuery(".fusion-layout-column > .fusion-column-wrapper").fusion_calculate_empty_column_height(), jQuery(window).on("fusion-resize-horizontal fusion-live-editor-updated", function() {
        setTimeout(function() {
            fusionCalcColumnEqualHeights()
        }, 500)
    })
}), jQuery(window).on("fusion-dynamic-content-render", function(n, u) {
    var i = jQuery(u).find(".fusion-fullwidth.fusion-equal-height-columns");
    0 < i.length && i.each(function() {
        jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").equalHeights()
    })
}), window.fusionEqualHeightsCids = [], jQuery(window).on("fusion-element-render-fusion_builder_column fusion-option-change-equal_height_columns fusion-content-changed", function(n, u) {
    var i = jQuery('div[data-cid="' + u + '"]').hasClass("fusion-builder-container") ? jQuery('div[data-cid="' + u + '"]').find("> .fusion-fullwidth") : jQuery('div[data-cid="' + u + '"]').parents(".fusion-fullwidth"); - 1 === window.fusionEqualHeightsCids.indexOf(i.closest(".fusion-builder-container").attr("data-cid")) && (window.fusionEqualHeightsCids.push(i.closest(".fusion-builder-container").attr("data-cid")), setTimeout(function() {
        if (!i.hasClass("fusion-equal-height-columns")) return i.find(".fusion-column-wrapper").css("min-height", ""), jQuery(".fusion-layout-column .fusion-column-wrapper").fusion_set_bg_img_dims(), jQuery('div[data-cid="' + u + '"]').find(".fusion-column-wrapper > .fusion-column-wrapper").length ? jQuery('div[data-cid="' + u + '"]').find(".fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height() : jQuery('div[data-cid="' + u + '"]').find(".fusion-column-wrapper").fusion_calculate_empty_column_height(), void(window.fusionEqualHeightsCids = _.without(window.fusionEqualHeightsCids, i.closest(".fusion-builder-container").attr("data-cid")));
        i.find(".fusion-builder-row-inner").each(function() {
            jQuery(this).find(".fusion-layout-column > .fusion-column-wrapper").not(function(n, u) {
                return jQuery(u).parent(".fusion-column-wrapper").length || jQuery(u).parents(".fusion-events-shortcode").length ? 1 : 0
            }).equalHeights()
        }), i.find(".fusion-layout-column:not(.fusion-builder-row-inner .fusion-layout-column) > .fusion-column-wrapper").not(function(n, u) {
            return jQuery(u).parents(".fusion-column-wrapper").length ? 1 : 0
        }).equalHeights(), jQuery('div[data-cid="' + u + '"]').find(".fusion-column-wrapper > .fusion-column-wrapper").length ? jQuery('div[data-cid="' + u + '"]').find(".fusion-column-wrapper > .fusion-column-wrapper").fusion_calculate_empty_column_height() : jQuery('div[data-cid="' + u + '"]').find(".fusion-column-wrapper").fusion_calculate_empty_column_height(), window.fusionEqualHeightsCids = _.without(window.fusionEqualHeightsCids, i.closest(".fusion-builder-container").attr("data-cid"))
    }, 100))
});