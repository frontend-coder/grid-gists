$(document).ready(function() {
    //  $("body").niceScroll({
    // horizrailenabled:false
    // });
    // вверхнее красиво-вращающееся меню
    // 1 и 2 строка это анимация крестика
    //3 строка - слайдер вниз меню
    //слайдер вниз меню отвечает за работу мобильного меню к переносу
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".top-menu").slideToggle();
        return false;
    });
    $('body, .top-menu ul li a').click(function() {
        $('.hidden-mnu').hide("slow");
    });


    var groups = {};
    $('.block_portfolio_items a').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if (!groups[id]) {
            groups[id] = [];
        }
        groups[id].push(this);
    });
    $.each(groups, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: { enabled: true }
        })
    });


    var groupsOne = {};
    $('.masonry_link').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if (!groupsOne[id]) {
            groupsOne[id] = [];
        }
        groupsOne[id].push(this);
    });
    $.each(groupsOne, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            tClose: 'Закрыть(Esc)',
            fixedContentPos: false,
            fixedBgPos: false,
            closeBtnInside: false,
            gallery: {
                enabled: true,
                tPrev: 'Вперед (левая стрелка key)', // Alt text on left arrow
                tNext: 'Назад (правая стрелка key)', // Alt text on right arrow
                tCounter: '%curr% из %total%' // Markup for "1 of 7" counter


            }
        })
    });

    var groupsthree = {};
    $('.gwt_content li:last-child a').each(function() {
        var id = parseInt($(this).attr('data-group'), 10);
        if (!groupsthree[id]) {
            groupsthree[id] = [];
        }
        groupsthree[id].push(this);
    });
    $.each(groupsthree, function() {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            tClose: 'Закрыть(Esc)',
            fixedContentPos: false,
            fixedBgPos: false,
            closeBtnInside: true,
            closeMarkup: '<button title="%title%" class="mfp-close" style="position: absolute; top: 35px; right: 5px"><img src="/img/shut-down.png" width="24" height="24"/></button>',
            gallery: {
                enabled: true,
                tPrev: 'Вперед (левая стрелка key)', // Alt text on left arrow
                tNext: 'Назад (правая стрелка key)', // Alt text on right arrow
                tCounter: '%curr% из %total%', // Markup for "1 of 7" counter
                // arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow custom-mfp-arrow-%dir%"><i class="fa fa-angle-%dir% fa-4x"></i></button>',
            }
        })
    });


    var msnry = new Masonry('.grid_masonry', {
        //  columnWidth: '.grid-sizer',
        // gutter: 10,
        // columnWidth: '.grid-sizer_lazy',
        // // options
    });


    var msnrynew = new Masonry('.grid_masonry_new', {
        //columnWidth: '.grid_masonry_new_w',
        gutter: 10,
        // columnWidth: '.grid-sizer_lazy',
        // // options
    });






























    //Ajax push mesege http://api.jquery.com/jquery.ajax/
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(".forms-calldecor .success").addClass("active");
            setTimeout(function() {
                // Done Functions
                $(".forms-calldecor .success").removeClass("active");
                th.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });
    //castom code









});