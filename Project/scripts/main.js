$$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');

        } else {
            $('nav').removeClass('black');
        }
    })
    /* NOT WORKING
    var pictures = ['banner_1.png', 'banner_2.png'];
    var index = 0;
    var intId = setInterval(function(){
                //index++;
                if( index >= pictures.length){
                    index = 0;
                }
                $('.slideshow').css('background-image', 'url(../images/' + pictures[index] +')')
                .css('background-image', 'url(../images/' + pictures[index] +')').fadeOut(1000)

                index++;
               }, 2000);*/
    //SLIDESHOW SCIPRT
    setInterval(function () {

        $('.slideshow > img:first')
            .next()
            .fadeOut(2000)
            .delay(6000)
            .fadeIn(2000)
            .delay(6000)
    }, 2000);

    //NAVBAR SCRIPT ON SCROLLING
    $("nav ul a[href^='#']").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 70
            },
            1000,
            function () {});
    });
});
