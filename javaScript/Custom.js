$(function(){
    $(window).on('load',function(){
        $('.preloader').delay(500).fadeOut(500);
    });


    //typed
    $(function(){
        $(".typed").typed({
            strings: ["B", "O", "R", "E"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speedz

            typeSpeed: 100,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 200,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 5,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });

    //counterup start 
    $('.counter').counterUp({
        delay: 1,
        time: 1000
    });
    //counterup end
    //scroll start 
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 100) {
            $('.head').addClass('head-bg');
        } else {
            $('.head').removeClass('head-bg');
        }
    });
    //scroll end


});
