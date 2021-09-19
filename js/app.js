$(function() {

    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);


    /* Fixed  header */
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset)
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $("#nav_toggle").toggleClass("active");
        $("#nav").toggleClass("active");
    })

    /* Close burger menu */
    $("#nav a").on("click", function(event) {
        /*$(this).addClass("active");*/
        $("#nav").removeClass("active");
        $("#nav_toggle").toggleClass("active");
    })

    /* Accordeon collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('collapse');
        $(this).toggleClass("active");
    })

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});