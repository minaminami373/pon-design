$(function () {
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  var swiper = new Swiper(".js-works-swiper", {
    pagination: {
      el: ".js-works-pagenations",
    },
    clickable: true,
    loop: true,
    autoplay: {
      delay: 2000,
    }
  });

  $(window).on('scroll', function () {
    if ($('.js-mv').height() < $(this).scrollTop()) {
        $('.js-header').addClass('headerColorScroll');
  } else {
        $('.js-header').removeClass('headerColorScroll');
  }
  });
});