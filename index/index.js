(function () {
    var f = 0;
    var t = 0;
    ad_in(f);

    $('.go').click(function () {
        $('.f').eq(f).addClass('fadeOutUp');
        $('.f').eq(f).fadeOut(1000);
        ad_in(++f);
    });

    function ad_in(x) {
        var time = 1;
        $('.f').eq(x).delay(500).fadeIn();
        $('.f').eq(x).find('.t').each(
            function () {
                $(this).delay(time * 400).fadeIn();
                time++;
            }
        )
    }

})();



// setTimeout(() => {
//     $(this).fadeIn();
// }, time * 400);
// time++;