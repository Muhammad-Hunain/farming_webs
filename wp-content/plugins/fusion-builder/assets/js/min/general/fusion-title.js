! function(t) {
    "use strict";
    t.fn.fusion_responsive_title_element = function() {
        t(this).each(function() {
            var i = t(this),
                e = i.find("h1, h2, h3, h4, h5, h6, .title-heading-tag"),
                n = e.data("min-width") ? e.data("min-width") : e.outerWidth(),
                o = i.parent(),
                a = i.parents(".slide-content").length || o.hasClass("fusion-column-wrapper") ? o.width() : o.outerWidth(),
                s = i.find(".fusion-animated-texts-wrapper");
            (0 !== n && !1 !== n && "0" !== n || 0 !== a && !1 !== a && "0" !== a) && n + 100 >= a ? (i.addClass("fusion-border-below-title"), e.data("min-width", n)) : i.removeClass("fusion-border-below-title"), t(i).hasClass("fusion-title-rotating") && !t(i).is(".fusion-title-typeIn,.fusion-title-clipIn") && s.fusion_animated_title_element_rotation_width()
        })
    }, t.fn.fusion_animated_title_element = function() {
        t(this).each(function() {
            var i = t(this),
                e = i.find(".fusion-animated-texts-wrapper"),
                n = i.hasClass("fusion-loop-on"),
                o = "",
                a = "",
                s = "",
                f = "",
                l = 0,
                d = "";
            t(i).hasClass("fusion-title-rotating") && (f = getWaypointOffset(t(i).find(".fusion-animated-texts-wrapper")), d = t(i).closest("[data-animationduration]").data("animationduration"), t(i).find(".fusion-animated-texts-wrapper").removeData("textillate"), t(i).find(".fusion-textillate").remove(), t(i).is(".fusion-title-typeIn,.fusion-title-clipIn") || e.fusion_animated_title_element_rotation_width(), void 0 !== d && (l = 200 * parseFloat(d)), t(i).find(".fusion-animated-texts-wrapper").waypoint(function() {
                t(i).find(".fusion-animated-texts-wrapper").textillate({
                    selector: ".fusion-animated-texts",
                    type: e.attr("data-length"),
                    minDisplayTime: e.attr("data-minDisplayTime"),
                    loop: n,
                    initialDelay: l
                }), this.destroy()
            }, {
                offset: f
            })), t(i).hasClass("fusion-title-highlight") && (f = getWaypointOffset(t(i).find(".fusion-highlighted-text")), o = {
                circle: ["M344.6,40.1c0,0-293-3.4-330.7,40.3c-5.2,6-3.5,15.3,3.3,19.4c65.8,39,315.8,42.3,451.2-3 c6.3-2.1,12-6.1,16-11.4C527.9,27,242,16.1,242,16.1"],
                underline_zigzag: ["M6.1,133.6c0,0,173.4-20.6,328.3-14.5c154.8,6.1,162.2,8.7,162.2,8.7s-262.6-4.9-339.2,13.9 c0,0,113.8-6.1,162.9,6.9"],
                x: ["M25.8,37.1c0,0,321.2,56.7,435.5,82.3", "M55.8,108.7c0,0,374-78.3,423.6-76.3"],
                strikethrough: ["M22.2,93.2c0,0,222.1-11.3,298.8-15.8c84.2-4.9,159.1-4.7,159.1-4.7"],
                curly: ["M9.4,146.9c0,0,54.4-60.2,102.1-11.6c42.3,43.1,84.3-65.7,147.3,0.9c37.6,39.7,79.8-52.6,123.8-14.4 c68.6,59.4,107.2-7,107.2-7"],
                diagonal_bottom_left: ["M6.5,127.1C10.6,126.2,316.9,24.8,497,23.9"],
                diagonal_top_left: ["M7.2,28.5c0,0,376.7,64.4,485.2,93.4"],
                double: ["M21.7,145.7c0,0,192.2-33.7,456.3-14.6", "M13.6,28.2c0,0,296.2-22.5,474.9-5.4"],
                double_underline: ["M10.3,130.6c0,0,193.9-24.3,475.2-11.2", "M38.9,148.9c0,0,173.8-35.3,423.3-11.8"],
                underline: ["M8.1,146.2c0,0,240.6-55.6,479-13.8"]
            }[t(i).data("highlight")], a = t(), "object" == typeof o && o.forEach(function(i) {
                a = a.add(t("<path>", {
                    d: i
                }))
            }), s = t("<svg>", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 500 150",
                preserveAspectRatio: "none"
            }).html(a), t(i).find(".fusion-highlighted-text").waypoint(function() {
                t(i).find(".fusion-highlighted-text-wrapper svg").remove(), t(i).find(".fusion-highlighted-text").after(s[0].outerHTML), this.destroy()
            }, {
                offset: f
            }))
        })
    }, t.fn.fusion_animated_title_element_rotation_width = function() {
        var i = t(this),
            e = i.find(".fusion-animated-texts"),
            n = 0,
            o = 0,
            a = !1;
        n = parseInt(i.find(".fusion-animated-text").css("font-size")), n *= .6, e.is(":visible") || (a = !0, e.show()), t(i).find(".fusion-animated-text").each(function() {
            var i = t(this).width();
            i > o && (o = i)
        }), a && e.hide(), i.css("width", o + n)
    }
}(jQuery), jQuery(document).ready(function() {
    jQuery(".fusion-title").fusion_responsive_title_element(), jQuery(window).on("resize", function() {
        jQuery(".fusion-title").fusion_responsive_title_element()
    }), jQuery(".fusion-title").fusion_animated_title_element()
}), jQuery(window).on("fusion-column-resized fusion-element-render-fusion_title", function(t, i) {
    var e = jQuery('div[data-cid="' + i + '"]').find(".fusion-title");
    e.length && (e.fusion_responsive_title_element(), e.fusion_animated_title_element())
});