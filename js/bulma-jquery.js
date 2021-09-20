(function ($, window) {
    $(".tag .delete").click(function (e) {
        $(this).parent(".tag").remove();
    });

    $(".notification .delete").click(function (e) {
        $(this).parent(".notification").remove();
    });

    $(".message .delete").click(function (e) {
        $(this).parents(".message").remove();
    });

    $(".tabs>ul>li").click(function (e) {
        e.preventDefault();
        $(this).addClass("is-active").siblings().removeClass("is-active");
        $(this)
            .parents(".tabs")
            .next()
            .children()
            .eq($(this).index())
            .addClass("is-block")
            .siblings()
            .removeClass("is-block");
    });

    $(".navbar-burger").click(function (e) {
        e.preventDefault();
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $(".navbar-item.has-dropdown").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("is-active");
    });

    $(".dropdown-trigger").click(function (e) {
        e.preventDefault();
        $(this).parent(".dropdown").toggleClass("is-active");
    });

    $(".card-header-icon").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().toggle();
    });

    $(".modal-button").click(function (e) {
        e.preventDefault();
        $($(this).data("target")).addClass("is-active");
        $(":root").toggleClass("is-clipped");
    });

    $(".modal-close").click(function (e) {
        e.preventDefault();
        $(this).parent(".modal").removeClass("is-active");
    });
    $(".modal .delete").click(function (e) {
        e.preventDefault();
        $(this).parents(".modal").removeClass("is-active");
    });
    $(".modal-background").click(function (e) {
        e.preventDefault();
        $(this).parent(".modal").removeClass("is-active");
    });

    $('.panel-block .input[type="search"]').on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(this)
            .parents(".panel-block")
            .siblings(".panel-block")
            .each(function () {
                if ($(this).text().toLowerCase().search(value) > -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
    });
})(jQuery, window);
