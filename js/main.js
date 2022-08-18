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

// typing animation

const prH1d = document.querySelector('.pr_type');
const prH1dText = 'FRONTEND DEVELOPER';

const prH1n = document.querySelector('.pr_name');
const prH1nText = "CHOI JI WON'S PORTFOLIO"

let prd = 0;
let prn = 0;

function typing() {
    if(prd < prH1dText.length)
    {
        let txt = prH1dText.charAt(prd);
        prH1d.innerHTML += txt;
        prd++;
    }
 
    if(prn < prH1nText.length)
    {
        let i = prH1nText.charAt(prn);
        prH1n.innerHTML += i;
        prn++;
    }

}

// function typing_name(){
//     if(prn < prH1nText.length)
//     {
//         let i = prH1nText.charAt(prn);
//         prH1n.innerHTML += i == "\n" ? "<br/>" : i;
//         prn++;
//     }
// }

setInterval(typing, 200);
// setInterval(typing_name, 300);


// 첫번째 화면 배경
var blendAmount = 70;
var delay = -10;
var windowWidth = window.innerWidth;
var bg = document.getElementById('box_f1');

document.onmousemove = function(e){
    mouseX = Math.round(e.pageX / windowWidth * 100 - delay);

    col1 = mouseX - blendAmount;
    col2 = mouseX + blendAmount;

    bg.style.background = "linear-gradient(to right, #7BC6CC " +col1 + "%, #BE93C5 "+ col2 + "%)";
}
