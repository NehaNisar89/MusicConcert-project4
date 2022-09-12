
document.querySelector('#menu').addEventListener('click',()=>{
  document.querySelector(' header ul').classList.toggle('showmenu')
}
)


  $('.testimonial-card-box').slick({
    centerMode: true,
    centerPadding: '320px',
    autoplay: true,
  autoplaySpeed: 2000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow:1
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.best-shots-slider').slick({
    centerMode: false,
    centerPadding: '0px',
    autoplay: false,
    arrows: true,
  autoplaySpeed: 2000,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 426,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1
        }
      },
    ]
  });