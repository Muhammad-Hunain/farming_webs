var avadaTriggerPageTitleFading = function() {
    void 0 === cssua.ua.mobile && ("1" !== avadaFadeVars.page_title_fading && 1 !== avadaFadeVars.page_title_fading && !0 !== avadaFadeVars.page_title_fading || ("left" === avadaFadeVars.header_position || "right" === avadaFadeVars.header_position ? jQuery(".fusion-page-title-wrapper").fusionScroller({
        type: "opacity",
        offset: 0
    }) : jQuery(".fusion-page-title-wrapper").fusionScroller({
        type: "opacity",
        offset: 100
    })))
};
jQuery(window).on("load", function() {
    avadaTriggerPageTitleFading()
});