jQuery(window).on("load", function() {
    var a;
    jQuery().eislideshow && (a = {
        autoplay: Boolean(Number(avadaElasticSliderVars.tfes_autoplay))
    }, avadaElasticSliderVars.tfes_animation && (a.animation = avadaElasticSliderVars.tfes_animation), avadaElasticSliderVars.tfes_interval && (a.slideshow_interval = parseInt(avadaElasticSliderVars.tfes_interval, 10)), avadaElasticSliderVars.tfes_speed && (a.speed = parseInt(avadaElasticSliderVars.tfes_speed, 10)), avadaElasticSliderVars.tfes_width && (a.thumbMaxWidth = parseInt(avadaElasticSliderVars.tfes_width, 10)), jQuery("#ei-slider").eislideshow(a))
});