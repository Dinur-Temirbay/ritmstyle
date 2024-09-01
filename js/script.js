$(document).ready(function () {
  $(".reviews__carousel").slick({
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "200px",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
