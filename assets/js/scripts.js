$(function() {
    // Print
    $('#print-link').on('click', function(e){
        e.preventDefault();
        window.print();
    });

    // Scroll
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top - 54
            }, 1000);
            return false;
        }
        }
    });

    // Effect on appear
    var $animationElements = $('.animated');
    var $window = $(window);

    function checkIfInView() {
        var windowHeight = $window.height();
        var windowTopPosition = $window.scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function() {
            var $element = $(this);
            var elementHeight = $element.outerHeight();
            var elementTopPosition = $element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            //check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                    $element.addClass('in-view');
                }
        });
    };

    $window.on('scroll', checkIfInView);
    $window.on('resize', checkIfInView);
    $window.trigger('scroll');
});