jQuery(document).ready(function ($) {
    $('#page').mouseenter(function () {
        $(this).animate({
            opacity: 1
        }, 1000)
    });
    $('#page').mouseleave(function () {
        $(this).animate({
            opacity: 0
        }, 1000)
    })
})