$('.ll').click(
    function () {
        $('.cc').toggleClass('cca');
        $('.list .active').removeClass('active'); //一樣先消掉 active
        $(this).addClass('active'); //該元件增加 active
        $('.ccr').attr("src", "img/idn/" + $(this).attr('id') + ".png"); //直接改圖片路徑(抓該元件id)
        $('.cci').attr("src", "img/google/" + $(this).attr('id') + ".png");
    }
)

$('.pic').click(
    function () {
        $('.pic3,.pic4').fadeIn();
        $('html').animate({ scrollTop: $('.footer').offset().top }, 2000);
        $('.pic4').fadeOut(2000);
    }
)

$('.f1img,.gotop').click(function () {
    $('html').animate({ scrollTop: $('.f2').offset().top }, 500);
    $('.gotop').fadeOut();
})

$('.f2img').click(function () {
    $('html').animate({ scrollTop: $('.f3').eq($('.f2 .f2img').index(this)).offset().top }, 500);
    $('.f3').eq($('.f2 .f2img').index(this)).css("animation", "5s f3in");
    $('.gotop').fadeIn();
});

$('.f2img').hover(function () {
    // over
    $('.f2img').css("width", "24vw");
    $(this).css("width", "28vw");
}, function () {
    // out
    $('.f2img').css("width", "25vw");
}
);

$('.tg').click(function () {
    $('.translation').toggleClass('cca');
    $('.f3').eq($('.f3 .translation').index($(this).parent())).find('.tg').fadeToggle();
    $('.f3').eq($('.f3 .translation').index($(this).parent())).find('.p').fadeToggle();
});


for (var xx = 0; xx < 13; xx++) {
    $('.row .item').eq(xx).css("animation-delay", (0.1 * xx) + "s");
}

setTimeout(function () {
    $('.test').fadeOut();
    $('.f1img').fadeIn();
    $('.f1 img').attr("src", "img/lala/back.jpg");
}, 2000)

$('.goright').eq(0).css("border-left", "15px solid rgb(109,71,9)");
$('.goright').eq(1).css("border-left", "15px solid rgb(216,30,79)");
$('.goright').eq(2).css("border-left", "15px solid rgb(210,105,0)");
$('.goright').eq(3).css("border-left", "15px solid rgb(117,60,29)");
$('.goleft').eq(0).css("border-right", "15px solid rgb(109,71,9)");
$('.goleft').eq(1).css("border-right", "15px solid rgb(216,30,79)");
$('.goleft').eq(2).css("border-right", "15px solid rgb(210,105,0)");
$('.goleft').eq(3).css("border-right", "15px solid rgb(117,60,29)");

$('.gif').click(function (e) {
    $('.cute').fadeIn(3000);
    $('.cute').fadeOut(3000);
});