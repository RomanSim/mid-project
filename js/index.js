$(document).ready(function () {
    var counter = 1,
        timer;

    function rotate() {
        if (counter > 3) { counter = 1; }
        $(".bannerContent").hide();
        $("#banner" + counter).fadeIn("slow", function () {
            counter++;
            timer = setTimeout(function () {
                rotate();
            }, 8000);
        });
    }

    rotate();    // run it!
});
