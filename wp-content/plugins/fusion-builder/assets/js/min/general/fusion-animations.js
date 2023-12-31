function fusionSetMobileAnimationData() {
    cssua.ua.mobile && (jQuery("body").removeClass("dont-animate do-animate"), "desktop_and_mobile" === fusionAnimationsVars.status_css_animations ? jQuery("body").addClass("do-animate") : jQuery("body").addClass("dont-animate"))
}

function fusionSetAnimationData(i) {
    jQuery("body").removeClass("dont-animate do-animate"), "off" === fusionAnimationsVars.status_css_animations ? jQuery("body").addClass("dont-animate") : (jQuery("body").addClass("do-animate"), void 0 !== i && void 0 !== i.data.custom && jQuery(window).initWaypoint())
}! function(i) {
    "use strict";
    i.fn.initWaypoint = function() {
        i().waypoint && i(".fusion-animated").each(function() {
            var n = i(this),
                a = getWaypointOffset(n);
            "top-out-of-view" === a && (a = getAdminbarHeight() + ("function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : "0")), n.waypoint(function() {
                var i, a, t;
                n.parents(".fusion-delayed-animation").length || (n.css("visibility", "visible"), i = n.data("animationtype"), a = n.data("animationduration"), n.addClass(i), a && (n.css("-moz-animation-duration", a + "s"), n.css("-webkit-animation-duration", a + "s"), n.css("-ms-animation-duration", a + "s"), n.css("-o-animation-duration", a + "s"), n.css("animation-duration", a + "s"), t = n, setTimeout(function() {
                    t.removeClass(i)
                }, 1e3 * a))), this.destroy()
            }, {
                offset: a
            })
        })
    }
}(jQuery), jQuery(document).ready(function() {
    fusionSetAnimationData(), fusionSetMobileAnimationData()
}), jQuery(window).on("load", function() {
    jQuery("body").hasClass("fusion-builder-live") || setTimeout(function() {
        jQuery(window).initWaypoint()
    }, 300)
}), jQuery(window).on("CSSAnimations", {
    custom: !0
}, fusionSetAnimationData), jQuery(window).on("CSSAnimations", fusionSetMobileAnimationData);