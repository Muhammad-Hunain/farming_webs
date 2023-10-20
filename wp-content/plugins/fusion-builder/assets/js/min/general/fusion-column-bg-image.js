! function(t) {
    "use strict";
    t.fn.fusion_set_bg_img_dims = function() {
        t(this).each(function() {
            var s, i, e, a = t(this).html();
            ('<div class="fusion-clearfix"></div>' === (a = "string" == typeof a ? a.trim() : "") || "" === a || '<div class="fusion-column-content-centered"><div class="fusion-column-content"></div></div><div class="fusion-clearfix"></div>' === a.replace(/\s/g, "") || t("body").hasClass("fusion-builder-live") && 0 < t(this).closest(".fusion-builder-live-editor").length && 1 > t(this).find(".fusion-builder-live-element").length) && t(this).data("bg-url") && ((s = new Image).src = t(this).data("bg-url"), i = parseInt(s.naturalHeight, 10), e = parseInt(s.naturalWidth, 10), (i && e || !t(this).attr("data-bg-height") || !t(this).attr("data-bg-width")) && (t(this).attr("data-bg-height", i), t(this).attr("data-bg-width", e)))
        })
    }, t.fn.fusion_calculate_empty_column_height = function() {
        t(this).each(function() {
            var s, i, e, a = t(this),
                n = a.closest(".fusion-layout-column"),
                l = !1,
                h = a.html();
            if (h = "string" == typeof h ? h.trim() : "", a.closest(".fusion-flex-container").length && (a.parent().hasClass("fusion-flex-align-self-stretch") || a.closest(".fusion-flex-align-items-stretch").length && !a.parent().is('[class^="fusion-flex-align-self-"')) && (l = !0), a.parents(".fusion-equal-height-columns").length && (Modernizr.mq("only screen and (max-width: " + fusionBgImageVars.content_break_point + "px)") || !0 === a.data("empty-column")) || !a.parents(".fusion-equal-height-columns").length)
                if ((a.parent().hasClass("fusion-column-wrapper") && 2 === a.parent().children().length || !a.parent().hasClass("fusion-column-wrapper")) && ('<div class="fusion-clearfix"></div>' === h || "" === h || t("body").hasClass("fusion-builder-live") && 0 < a.closest(".fusion-builder-live-editor").length && 1 > a.find(".fusion-builder-live-element").length)) {
                    if (s = a.data("bg-height"), i = a.data("bg-width"), e = s * (a.outerWidth() / i), l && 1 < Math.abs(n.outerWidth() - n.parent().width())) return a.css("min-height", "0"), void((t("html").hasClass("ua-edge") || t("html").hasClass("ua-ie")) && a.parent().css("min-height", "0"));
                    a.css("min-height", e), (t("html").hasClass("ua-edge") || t("html").hasClass("ua-ie")) && a.parent().css("min-height", e)
                } else a.css("min-height", "0"), (t("html").hasClass("ua-edge") || t("html").hasClass("ua-ie")) && a.parent().css("min-height", "0")
        })
    }
}(jQuery);