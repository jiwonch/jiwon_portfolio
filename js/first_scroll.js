var bn = $(".box_f").length;
var t = $(".box").length;
var bt = $(".box");

$(".box_f").on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
    } else if (event.detail) delta = -event.detail / 3;

    if (delta < 0) {
        n = $(this).index() + 1;
    } else {
        // n = $(this).index() - 1;

        if (n == 3) {
            if (p == 0) {
                n = $(this).index() - 1;
                console.log(p);
            } else if (p >= 0) {
                n = $(this).index();
                console.log(p);
            }
        } else {
            n = $(this).index() - 1;
        }
    }

    if (n >= bn) {
        n = bn - 1;
    } else if (n <= -1) {
        n = 0
    }
    console.log(n);
    // console.log(t);
    // console.log(bt);


    $("#wrap_f").stop().animate({ top: -n * 100 + "%" });
});

$(".box").on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delt = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
        delt = event.wheelDelta / 120;
        if (window.opera) delt = -delt;
    } else if (event.detail) delt = -event.detail / 3;

    if (delt < 0) {
        p = $(this).index() + 1;
    } else {
        p = $(this).index() - 1;
    }
    // console.log(p)
    if (p >= t) {
        p = t - 1;
    } else if (p <= -1) {
        p = 0;
    }
    // console.log(t);
    // console.log(p);

    $("#wrap_f #box_f4").stop().animate({ left: -p * 100 + "%" });
    // $(".box").css({top:0},{position:fixed});
});


