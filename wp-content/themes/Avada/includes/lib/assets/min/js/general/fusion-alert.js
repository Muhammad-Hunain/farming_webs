jQuery(document).on("ready fusion-element-render-fusion_alert", function(e, n) {
    (void 0 !== n ? jQuery('div[data-cid="' + n + '"]').find(".fusion-alert .close") : jQuery(".fusion-alert .close")).on("click", function(e) {
        e.preventDefault(), jQuery(this).parent().slideUp()
    })
});