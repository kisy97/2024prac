$('.menu').hover(function () {
    // over
    $(this).children('.submenu').stop().slideDown(500);
}, function () {
    // out
    $('.submenu').stop().slideUp(500);
}
);
// 슬라이드
let slide = $('.slide > img')
slide.eq(0).siblings().hide();
let idx = 0;
let end = slide.length;

let timer = setInterval(autoslide, 3000);

function autoslide() {
    if (end >= idx) {
        idx++;
    } else {
        idx = 0;
    }
    $(slide).eq(idx).fadeIn(1000);
    $(slide).eq(idx).siblings().fadeOut(1000);
}