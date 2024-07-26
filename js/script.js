var slide = $('.slideContent>img');
var sno = 0;
var eno = slide.length - 1;

var timer = setInterval('autoslide()', 3000);

function autoslide() {
    $(slide[sno]).stop().animate({
        left: '100%'
    }, 1000, function () {
        $(this).css({ left: "-100%" });
    });
    sno++;
    if (sno > eno) {
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        left: '0'
    }, 1000)

}

$('.slideContent').hover(function () {
    // over
    clearInterval(timer);
}, function () {
    // out
    timer = setInterval('autoslide()', 3000);
}
);
