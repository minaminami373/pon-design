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

  var pagetop = $('.c-to-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });

  // スクロールするとロゴの色変更
$(window).on("scroll", function () {
  const sliderHeight = $(".js-mv").height();
  if (sliderHeight - 30 < $(this).scrollTop()) {
    $(".js-header").addClass("headerColorScroll");
  } else {
    $(".js-header").removeClass("headerColorScroll");
  }
});

});


