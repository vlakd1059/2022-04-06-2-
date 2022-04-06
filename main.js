$(function () {
  // 메인화면
  if ($(".main_slide_wrapper").lenth) {
    var swiper = new Swiper(".main_slide_container", {
      slidesPerView: 1,
      spaceBetween: 25,
      width: 270,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // 홈 카테고리 슬라이드
  if ($(".category_menus").length) {
    var menuswiper = new Swiper(".category_menus", {
      slidesPerView: 3,
      spaceBetween: 27,
    });
  }
});
