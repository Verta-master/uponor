//Tab 1
var galleryTop1 = new Swiper('.gallery-top--1', {
  loop: true,
  loopedSlides: $(".gallery-top--1 .swiper-wrapper .swiper-slide").length,
  slidesPerView: 'auto',
  centeredSlides: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next--1',
    prevEl: '.swiper-button-prev--1',
  },
});
var galleryThumbs1 = new Swiper('.gallery-thumbs--1', {
  loop: true,
  loopedSlides: $(".gallery-thumbs--1 .swiper-wrapper .swiper-slide").length,
  slidesPerView: 5,
  observer: true,
  observeParents: true,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
});
galleryTop1.update(true);
galleryThumbs1.update(true);
galleryTop1.controller.control = galleryThumbs1;
galleryThumbs1.controller.control = galleryTop1;

//Tab 2
var galleryTop2 = new Swiper('.gallery-top--2', {
  loop: true,
  loopedSlides: $(".gallery-top--2 .swiper-wrapper .swiper-slide").length,
  slidesPerView: 'auto',
  centeredSlides: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next--2',
    prevEl: '.swiper-button-prev--2',
  },
});
var galleryThumbs2 = new Swiper('.gallery-thumbs--2', {
  loop: true,
  loopedSlides: $(".gallery-thumbs--2 .swiper-wrapper .swiper-slide").length,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
});
galleryTop2.update(true);
galleryThumbs2.update(true);
galleryTop2.controller.control = galleryThumbs2;
galleryThumbs2.controller.control = galleryTop2;

//Tab 3
var galleryTop3 = new Swiper('.gallery-top--3', {
  loop: true,
  loopedSlides: $(".gallery-top--3 .swiper-wrapper .swiper-slide").length,
  slidesPerView: 'auto',
  centeredSlides: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next--3',
    prevEl: '.swiper-button-prev--3',
  },
});
var galleryThumbs3 = new Swiper('.gallery-thumbs--3', {
  loop: true,
  loopedSlides: $(".gallery-thumbs--3 .swiper-wrapper .swiper-slide").length,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
});
galleryTop3.update(true);
galleryThumbs3.update(true);
galleryTop3.controller.control = galleryThumbs3;
galleryThumbs3.controller.control = galleryTop3;
