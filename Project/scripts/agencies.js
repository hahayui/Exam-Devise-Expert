//NAVBAR SCRIPT ON SCROLLING

}$(document).ready(function () {


 $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');

    } else {
        $('nav').removeClass('black');
    }
})

});

