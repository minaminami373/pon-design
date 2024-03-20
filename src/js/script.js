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
    },
  });
});

// $(function () {
//   $(window).on('scroll', function () {
//     if ($('.fv').height()  < $(this).scrollTop()) {
//         $('.js-header').addClass('p-header__change-color');
//     } else {
//         $('.js-header').removeClass('p-header__change-color');
//     }
//   });
// });
