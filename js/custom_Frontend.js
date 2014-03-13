

// Side Nav -  Fixed position on scrolling
$(document).ready(function(){

//  Cycle2 Sliders
    // for homepage (network section)
    $( '.videoTabsWrapper' ).cycle();

// For Football page (tempelate)
    $( '.articleWrap' ).cycle();


    // Main Nav search button
    $(".search").click(function(e){
        $('.mainNav li').removeClass('active');
        $(this).parent().addClass('active');
        $(".searchWrapper").slideToggle(200);
        e.stopPropagation();
    });
    $(document).click(function(e) {
        if (!$(e.target).is('.searchWrapper, .searchWrapper *')) {
            $(".searchWrapper").slideUp(200);
            $('.mainNav li .searchWrapper').parent().removeClass('active');
        }
    });
// Main nav search js closed


    //drop down menu starts
    /* var config = {
     '.chosen-select'           : {},
     '.chosen-select-deselect'  : {allow_single_deselect:true},
     '.chosen-select-no-single' : {disable_search_threshold:10},
     '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
     '.chosen-select-width'     : {width:"95%"}
     }
     for (var selector in config) {
     $(selector).chosen(config[selector]);
     $(".chosen-search").hide();
     }*/
//drop down menu ends
    /* hall of fame js*/
    $("a.group").fancybox();

    var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
        // advance the other slideshow
        slideshows.not(this).cycle('goto', opts.currSlide);
    });

    $('#cycle-2 .cycle-slide').click(function(){
        var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });

    /* end hall of fame js*/

    //    About page ScrollTo
    // Cache selectors
    var lastId,
        topMenu = $(".sideNav"),
    //        topMenuHeight = topMenu.outerHeight()+15,
        topMenuHeight = 0,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu itemsgi
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 400);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#" + id + "]").parent().addClass("active");
        }
    });

    $(window).scroll(function () {

        var currentScroll = $(window).scrollTop();

        var leftBarPosition = ($(".mainSliderWrap").height()) + 235;
        var footerHeight = $('.footer').height();
        var advtHeight = $('.advtWrapper').height();
        windowHeight = $(window).height();
        var menuHeight = $('.sideNav').outerHeight();
        pageHeight = $('body').height();
        var lastFixed = (currentScroll) + 585;
        var subMenuLastPos = pageHeight - footerHeight;

        $(".fixedDiv h2").html(currentScroll);
        $(".fixedDiv h3").html(subMenuLastPos);

        if((currentScroll >= leftBarPosition)&&(!(lastFixed >= subMenuLastPos)))
        {
            $(".sideNav").css({
                "position": "fixed",
                "left":"0",
                "top": "22px",
                "bottom":"auto"
            });
        }
        else if (lastFixed >= subMenuLastPos)
        {
            $(".sideNav").css({
                "position": "absolute",
                "left":"-6px",
                "top": "auto",
                "bottom": "0"
            });
        }
        else
        {
            $(".sideNav").css({
                "position": "absolute",
                "left":"-6px",
                "bottom": "0"
            });
        }
    });
    /*cycle carousel*/
    var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
        // advance the other slideshow
        slideshows.not(this).cycle('goto', opts.currSlide);
    });

    $('#cycle-2 .cycle-slide').click(function(){
        var index = $('#cycle-2').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });

});
/*document ready end*/
// Side Nav Hover effects
$(".sideNav a span").hide();

$(".sideNav a").mouseover(function(){
    $(this).stop().animate({width: 150, marginLeft: 0}, {duration: 500});
    $(this).children().show();

});

$(".sideNav a").mouseout(function(){
    $(this).children().hide();
    $(this).stop().animate({width: 0, marginLeft: 0}, {duration: 500});

});




