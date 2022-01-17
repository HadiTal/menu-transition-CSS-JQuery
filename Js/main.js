$(document).ready(function() {

    $("ul li").children("ul").css({ "opacity": "0", "margin-top": "30px", "display": "block" });
    $("ul li ul li").children("ul").css({ "opacity": "0", "margin-top": "-50px" });




    $("ul li").mouseenter(function() {

        $(this).children("ul").css({ "opacity": "1", "margin-top": "0" })


    })

    $("ul li").mouseleave(function() {
        $(this).children("ul").css({ "opacity": "0", "margin-top": "30px" })
    })

    $("ul li ul li").mouseenter(function() {

        $(this).children("ul").css({ "opacity": "1", "margin-top": "-50px" })

    })




})