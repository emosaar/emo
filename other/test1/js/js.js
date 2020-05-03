$(function () {
    $('.start_click').click(function (e) {
        $(this).css({ transform: "scale(0, 0)" });
        $('.start').fadeOut();
        $('.center').fadeIn(1000);
        for (var i = 1; i <= $('.one_item').length; i++) {
            $('.one_item:nth-child(' + i + ')').delay(i * 400).fadeIn(500);
        }
    });

    $('.car').hover(function (e) {
        // over
        $(this).animate({ width: "100%", height: "100%" }, 300);
        $(this).children('h2').animate({ bottom: "0px" }, 300);
    }, function () {
        // out
        $(this).animate({ width: "95%", height: "95%" }, 300);
        $(this).children('h2').animate({ bottom: "-100%" }, 300);
    }
    );
    $('.car').click(function (e) {
        $('.main').animate({ top: "-100%" }, 1000);
        $('.main').fadeOut(0);
        $('.main_two').delay(500).fadeIn(1000);
        $('.main_two_animation').delay(1000).fadeIn(1500);
        // $('html').animate({ scrollTop: $('.f3').eq($('.f2 .f2img').index(this)).offset().top }, 500);
    });
});