function getWaypointOffset(t) {
    var o = t.data("animationoffset");
    return void 0 === o && (o = "bottom-in-view"), "top-out-of-view" === o && (o = fusion.getAdminbarHeight() + ("function" === getWaypointTopOffset ? getWaypointTopOffset() : 0)), o
}
jQuery(window).on("load", function() {
    setTimeout(function() {
        "undefined" != typeof Waypoint && "function" == typeof Waypoint.viewportHeight && Waypoint.refreshAll()
    }, 300)
});