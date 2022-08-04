$(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    initialSlide: 1,
    responsive:[
      {
        breakpoint: 1070,
        settings:{
          slidesToShow: 2,
          centerMode: false,
          
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 1,
          centerMode: false,

        }
      }
    ]
 /*    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true, 
    pauseOnDotsHover: true */
  });
});
