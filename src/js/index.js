import "./import/modules";
import "./import/components";


// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".pslider", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});