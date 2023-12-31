var fusionTimeout = [],
    prevCallback = window.onYouTubePlayerAPIReady;

function insertParam(e, t, i, o) {
    var u, a, r, s, n, d, l;
    if (0 < e.indexOf("#") ? (u = e.indexOf("#"), a = e.substring(e.indexOf("#"), e.length)) : (a = "", u = e.length), s = "", 1 < (r = e.substring(0, u).split("?")).length)
        for (n = r[1].split("&"), d = 0; d < n.length; d++)(l = n[d].split("="))[0] !== t && ("" === s ? s = "?" + l[0] + "=" + (l[1] ? l[1] : "") : (s += "&", s += l[0] + "=" + (l[1] ? l[1] : "")));
    return "" === s && (s = "?"), o ? s = "?" + t + "=" + i + (1 < s.length ? "&" + s.substring(1) : "") : ("" !== s && "?" !== s && (s += "&"), s += t + "=" + (i || "")), r[0] + s + a
}

function registerYoutubePlayers(e) {
    Number(fusionVideoGeneralVars.status_yt) && !0 === window.yt_vid_exists && (window.$youtube_players = [], jQuery(".tfs-slider").each(function() {
        var t = jQuery(this),
            i = t.find("[data-youtube-video-id]").find("iframe").length,
            o = !1;
        t.find("[data-youtube-video-id]").find("iframe").each(function(u) {
            var a = jQuery(this);
            i === u + 1 && void 0 !== e && (o = t.data("flexslider")), window.YTReady(function() {
                window.$youtube_players[a.attr("id")] = new YT.Player(a.attr("id"), {
                    events: {
                        onReady: onPlayerReady(a.parents("li"), o),
                        onStateChange: onPlayerStateChange(a.attr("id"), t)
                    }
                })
            })
        })
    }))
}

function loadYoutubeIframeAPI() {
    var e, t;
    Number(fusionVideoGeneralVars.status_yt) && (!0 === window.yt_vid_exists || jQuery("body").hasClass("fusion-builder-live")) && ((e = document.createElement("script")).src = "https://www.youtube.com/iframe_api", (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t))
}

function onYouTubePlayerAPIReadyCallback() {
    window.YTReady(!0)
}

function onPlayerStateChange(e, t) {
    return function(e) {
        e.data == YT.PlayerState.PLAYING && jQuery(t).flexslider("pause"), e.data == YT.PlayerState.PAUSED && jQuery(t).flexslider("play"), e.data == YT.PlayerState.BUFFERING && jQuery(t).flexslider("pause"), e.data == YT.PlayerState.ENDED && "1" == jQuery(t).data("autoplay") && (void 0 !== jQuery(t).find(".flex-active-slide").data("loop") && "yes" !== jQuery(t).find(".flex-active-slide").data("loop") && jQuery(t).flexslider("next"), jQuery(t).flexslider("play"))
    }
}

function onPlayerReady(e, t) {
    return function(i) {
        "yes" === jQuery(e).data("mute") && i.target.mute(), t && setTimeout(function() {
            playVideoAndPauseOthers(t)
        }, 300)
    }
}

function ytVidId(e) {
    return !!e.match(/^(?:https?:)?(\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/) && RegExp.$1
}

function playVideoAndPauseOthers(e) {
    var t = jQuery(e).find("[data-youtube-video-id]").find("iframe"),
        i = jQuery(e).data("flexslider").slides.eq(jQuery(e).data("flexslider").currentSlide),
        o = i.find("[data-youtube-video-id]").find("iframe");
    t.each(function() {
        jQuery(this).attr("id") !== o.attr("id") && void 0 !== window.$youtube_players && void 0 !== window.$youtube_players[jQuery(this).attr("id")] && window.$youtube_players[jQuery(this).attr("id")].stopVideo()
    }), o.length && ("function" != typeof fusionGetConsent || fusionGetConsent("youtube")) && void 0 !== window.$youtube_players && (!o.parents("li").hasClass("clone") && o.parents("li").hasClass("flex-active-slide") && "yes" === o.parents("li").attr("data-autoplay") && (void 0 === window.$youtube_players || void 0 === window.$youtube_players[o.attr("id")] || void 0 === window.$youtube_players[o.attr("id")].playVideo ? fusionYouTubeTimeout(o.attr("id")) : "slide" === jQuery(e).data("animation") && 0 === e.currentSlide && void 0 === jQuery(e).data("iteration") ? window.$youtube_players[o.attr("id")] && setTimeout(function() {
        window.$youtube_players[o.attr("id")].playVideo(), jQuery(e).data("iteration", 1), e.stop(), setTimeout(function() {
            e.play()
        }, 1e3 * window.$youtube_players[o.attr("id")].getDuration() - 6e3)
    }, 2e3) : window.$youtube_players[o.attr("id")].playVideo()), "yes" === i.attr("data-mute") && void 0 !== window.$youtube_players[o.attr("id")] && void 0 !== window.$youtube_players[o.attr("id")].mute && window.$youtube_players[o.attr("id")].mute()), Number(fusionVideoGeneralVars.status_vimeo) && ("function" != typeof fusionGetConsent || fusionGetConsent("vimeo")) && setTimeout(function() {
        jQuery(e).find("[data-vimeo-video-id] > iframe").each(function() {
            new Vimeo.Player(jQuery(this)[0]).pause()
        }), 0 !== e.slides.eq(e.currentSlide).find("[data-vimeo-video-id] > iframe").length && ("yes" === jQuery(e.slides.eq(e.currentSlide)).data("autoplay") && new Vimeo.Player(e.slides.eq(e.currentSlide).find("iframe")[0]).play(), "yes" === jQuery(e.slides.eq(e.currentSlide)).data("mute") && new Vimeo.Player(e.slides.eq(e.currentSlide).find("iframe")[0]).setVolume(0))
    }, 300), jQuery(e).find("video").each(function() {
        "function" == typeof jQuery(this)[0].pause && jQuery(this)[0].pause(), !jQuery(this).parents("li").hasClass("clone") && jQuery(this).parents("li").hasClass("flex-active-slide") && "yes" === jQuery(this).parents("li").attr("data-autoplay") && "function" == typeof jQuery(this)[0].play && jQuery(this)[0].play()
    })
}

function fusionYouTubeTimeout(e) {
    void 0 === fusionTimeout[e] && (fusionTimeout[e] = 0), setTimeout(function() {
        void 0 !== window.$youtube_players && void 0 !== window.$youtube_players[e] && void 0 !== window.$youtube_players[e].playVideo ? window.$youtube_players[e].playVideo() : 5 > ++fusionTimeout[e] && fusionYouTubeTimeout(e)
    }, 325)
}
window.YTReady = function() {
    var e = [],
        t = !1;
    return function(i, o) {
        if (!0 === i)
            for (t = !0; e.length;) e.shift()();
        else "function" == typeof i && (t ? i() : e[o ? "unshift" : "push"](i))
    }
}(), window.onYouTubePlayerAPIReady = prevCallback ? function() {
    prevCallback(), onYouTubePlayerAPIReadyCallback()
} : onYouTubePlayerAPIReadyCallback, jQuery(document).ready(function() {
    var e;
    jQuery(".fusion-fullwidth.video-background").each(function() {
        jQuery(this).find("[data-youtube-video-id]") && (window.yt_vid_exists = !0)
    }), e = jQuery("iframe"), jQuery.each(e, function(e, t) {
        var i, o = jQuery(this).attr("src"),
            u = jQuery(this).data("privacy-src"),
            a = !o && u ? u : o;
        a && (Number(fusionVideoGeneralVars.status_vimeo) && 1 <= a.indexOf("vimeo") && jQuery(this).attr("id", "player_" + (e + 1)), Number(fusionVideoGeneralVars.status_yt) && ytVidId(a) && (jQuery(this).attr("id", "player_" + (e + 1)), i = insertParam(insertParam(a, "enablejsapi", "1", !1), "wmode", "opaque", !1), o ? jQuery(this).attr("src", i) : u && jQuery(this).attr("data-privacy-src", i), window.yt_vid_exists = !0))
    }), jQuery("body").hasClass("fusion-builder-live") ? setTimeout(function() {
        jQuery(".full-video, .video-shortcode, .wooslider .slide-content, .fusion-portfolio-carousel .fusion-video").not("#bbpress-forums .full-video, #bbpress-forums .video-shortcode, #bbpress-forums .wooslider .slide-content, #bbpress-forums .fusion-portfolio-carousel .fusion-video").fitVids(), jQuery("#bbpress-forums").fitVids()
    }, 350) : (jQuery(".full-video, .video-shortcode, .wooslider .slide-content, .fusion-portfolio-carousel .fusion-video").not("#bbpress-forums .full-video, #bbpress-forums .video-shortcode, #bbpress-forums .wooslider .slide-content, #bbpress-forums .fusion-portfolio-carousel .fusion-video").fitVids(), jQuery("#bbpress-forums").fitVids()), ("function" != typeof fusionGetConsent || fusionGetConsent("youtube")) && (registerYoutubePlayers(), loadYoutubeIframeAPI())
});