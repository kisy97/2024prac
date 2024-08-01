// 메뉴 드롭다운
$('.menu > li').hover(function () {
        // over
        $('.subMenu').stop().slideDown(1000);
    }, function () {
        // out
        $('.subMenu').stop().slideUp(500);
    }
);

// 슬라이드
let slide = $('.slide > img');
let idx = 0;
let end = slide.length -1;

let timer = setInterval(autoslide,3000);

function autoslide(){
    $(slide[idx]).stop().animate({
        left: '100%'
    },1000,function(){
        $(this).css({left: '-100%'});
    });
    idx++;
    if(idx > end) idx =0;
    $(slide[idx]).stop().animate({
        left: '0'
    },1000);
}

$(slide).hover(function () {
        // over
        clearInterval(timer);
    }, function () {
        // out
        timer =setInterval(autoslide,3000);
    }
);
// tab메뉴
$('.tabmenu > li').click(function () { 
    let idx = $(this).index();

    $('.tabItem>*').hide();
    $('.tabItem>*').eq(idx).show().addClass('on');

    $('.tabmenu li').removeClass('on');
    $('.tabItem li').removeClass('on');
    $(this).addClass('on');
});
// 팝업창
function openPop() {
    $('.contentpop').show();
}
function closePop() {
    $('.contentpop').hide();
}