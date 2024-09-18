import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="carousel pt-5 flex items-center justify-center">
      <div className="bg-[#fff] p-3 rounded-[15px] h-24 w-full">
        <Slider {...settings}>
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/acer.svg" alt="Acer Logo" />
          </div>
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/hp.svg" alt="HP Logo" />
          </div>
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/lenovo.svg" alt="Lenovo Logo" />
          </div> 
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/asus.svg" alt="Asus Logo" />
          </div>
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/msi.svg" alt="MSI Logo" />
          </div>

          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/acer.svg" alt="Acer Logo" />
          </div>
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/hp.svg" alt="HP Logo" />
          </div>
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/lenovo.svg" alt="Lenovo Logo" />
          </div> 
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/asus.svg" alt="Asus Logo" />
          </div>
          <div className="flex justify-center items-center px-4">
            <img className="h-[80px]" src="/images/clients/msi.svg" alt="MSI Logo" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
