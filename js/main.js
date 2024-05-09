let isNav = true;
$("#openIcon").click(function () {
    $("#navSide").toggle(1000)
    if (isNav) {
        $("#openIcon").animate({ left: 250 }, 220)
        isNav = false;
    } else {
        $("#openIcon").animate({ left: 0 }, 220)
        isNav = true;
    }
})
$("#closeIcon").click(function () {
    $("#navSide").hide(1000)
    $("#openIcon").animate({ left: 0 }, 220)
    isNav = true;
})
$('.list-group li a').click(function () {
    let aHref = $(this).attr("href");
    let Offset = $(aHref).offset().top;
    $("html, body").animate({ scrollTop: Offset }, 200);

})
$("#singerOne").click(function () {
    $("#singerOneText").slideToggle(200)
    $("#singerTwoText").slideUp(200)
    $("#singerThreeText").slideUp(200)
    $("#singerFourText").slideUp(200)

})
$("#singerTwo").click(function () {
    $("#singerTwoText").slideToggle(200)
    $("#singerOneText").slideUp(200)
    $("#singerThreeText").slideUp(200)
    $("#singerFourText").slideUp(200)
})
$("#singerThree").click(function () {
    $("#singerThreeText").slideToggle(200)
    $("#singerOneText").slideUp(200)
    $("#singerTwoText").slideUp(200)
    $("#singerFourText").slideUp(200)
})
$("#singerFour").click(function () {
    $("#singerFourText").slideToggle(200)
    $("#singerOneText").slideUp(200)
    $("#singerTwoText").slideUp(200)
    $("#singerThreeText").slideUp(200)

})
let index = 100
$("#charLeft").text(index);
$("#message").keyup(function (e) {
    if (e.which != 8) {
        index--;
        $("#charLeft").text(index)
        if (index <= 0) {
            $("#charLeft").text("your available character finished");
        }
    }
    else {
        index++
        $("#charLeft").text(index - 1);
        if (index <= 0) {
            $("#charLeft").text("your available character finished");
        } else if (index > 100) {
            index = 100
        }
    }

});
var countDownDate = new Date("Apr 15, 2023 09:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $("#days").text(days+" D");
    $("#hours").text(hours+" H");
    $("#mins").text(minutes+" M");
    $("#seconds").text(seconds+" S");
    if (distance < 0) {
        clearInterval(x);
        $("#days").text("Exp");
        $("#hours").text("Exp");
        $("#mins").text("Exp");
        $("#seconds").text("Exp");
    }
}, 1000);
