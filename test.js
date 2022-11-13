
function setSlider() {
  var widthScreenBody =  document.body.clientWidth; 
  var heightScreenBody = document.body.clientHeight;
  var slidesPerViewChangeMediaQuery = 3;

  if (widthScreenBody <= 768) {
    slidesPerViewChangeMediaQuery = 2;
  } if(widthScreenBody <= 552){
    slidesPerViewChangeMediaQuery = 1;
    console.log(slidesPerViewChangeMediaQuery);
  }

  new Swiper(".swiper-container", {
    spaceBetween: 25,
    slidesPerView: slidesPerViewChangeMediaQuery,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    // loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 5000,
    },
  });
}


window.addEventListener("resize", function (event) {
  setSlider();
})

window.addEventListener('DOMContentLoaded', (event) => {
  setSlider();
});

