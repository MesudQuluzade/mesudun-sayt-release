import React from 'react';
import Slider from 'react-slick';
import './BannerSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaDesktop, FaVirus, FaCogs, FaCloudDownloadAlt, FaTachometerAlt, FaRocket } from 'react-icons/fa';

const BannerSection: React.FC = () => {
  const horizontalSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const verticalSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  const services = [
    {
      title: 'Virusların Təmizlənməsi',
      icon: <FaVirus className="service-icon" />
    },
    {
      title: 'Formatlama',
      icon: <FaDesktop className="service-icon" />
    },
    {
      title: 'Təmir',
      icon: <FaCogs className="service-icon" />
    },
    {
      title: 'Bərpa',
      icon: <FaCloudDownloadAlt className="service-icon" />
    },
    {
      title: 'Optimizasiya',
      icon: <FaTachometerAlt className="service-icon" />
    },
    {
      title: 'Sürətləndirmə',
      icon: <FaRocket className="service-icon" />
    },
  ];

  const rightSliderContent1 = [
    {
      title: 'Bizimlə İşləmək Rahatdır!',
      description: 'Sürətli və peşəkar xidmətlərlə yanınızdayıq.',
    },
    {
      title: 'Rahat Edin, Biz İşimizi Bilirik!',
      description: 'Yüksək keyfiyyətli xidmətlərlə sizə dəstək oluruq.',
    },
    {
      title: 'Dəstəyə Ehtiyacınız Olduqda Buradayıq!',
      description: 'Sistem problemlərini asanlıqla həll edirik.',
    },
  ];

  const rightSliderContent2 = [
    {
      title: 'Rahat Edin, Biz İşimizi Bilirik!',
      description: 'Yüksək keyfiyyətli xidmətlərlə sizə dəstək oluruq.',
    },
    {
      title: 'Dəstəyə Ehtiyacınız Olduqda Buradayıq!',
      description: 'Sistem problemlərini asanlıqla həll edirik.',
    },
    {
      title: 'Bizimlə İşləmək Rahatdır!',
      description: 'Sürətli və peşəkar xidmətlərlə yanınızdayıq.',
    },
  ];

  return (
    <>
      {/* Navbar */}

      <div className="mega-navbar bg-white h-[43px] flex items-center">
        <div className="container dropdown-menu flex justify-between items-center">
          <div className="flex gap-[27px] items-center">
            <a href="#" className="nav-link">Müştəri Dəstəyi</a>
            <div className="relative flex items-center">
              <button className="nav-link">Xidmətlərimiz</button>
              <div className="mega-menu">
                <h4 className="text-black text-[17px] pb-[10px] font-[400]">XİDMƏTLƏRİMİZ</h4>
                <ul className="list-none flex flex-col gap-2">
                  <li><a href="#" className="mega-menu-item"><FaDesktop className="inline-block mr-2" />Kompüter Təmir Xidmətləri</a></li>
                  <li><a href="#" className="mega-menu-item"><FaVirus className="inline-block mr-2" />Virusdan Təmizləmə</a></li>
                  <li><a href="#" className="mega-menu-item"><FaCogs className="inline-block mr-2" />Proqram Quraşdırılması</a></li>
                  <li><a href="#" className="mega-menu-item"><FaCloudDownloadAlt className="inline-block mr-2" />Texniki Dəstək</a></li>
                  <li>
                    <a href="#" className="more-services-link text-[13px] font-[700] text-gray-300 mt-[15px]">
                      BÜTÜN <span className="moving-text">XİDMƏTLƏR ➝</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner bölməsi */}
      
      <section className="banner-section">
        <div className="hero">
          <div className="flex flex-wrap">

            {/* Slider (Sol tərəf) */}

            <div className="left-side w-full md:w-1/2 p-4 relative">
              <Slider {...horizontalSliderSettings} className="mySlider rounded-[15px] overflow-hidden">
                <div className="slide-content bg-[#322c49] w-full h-[387px] flex items-center justify-center p-8 md:p-12">
                  <div className="text-center text-white">
                    <div className="bg-[#ffffff33] p-4 rounded-lg">
                      <h1 className="text-[24px] md:text-[28px] font-bold">Xidmətlərimiz</h1>
                      <p className="text-[16px] mt-2">Hər növ texniki dəstək və xidmətlər təqdim edirik.</p>
                    </div>
                  </div>
                </div>
                {services.map((service, index) => (
                  <div key={index} className="slide-content bg-[#322c49] w-full h-[387px] flex items-center justify-center p-8 md:p-12">
                    <div className="flex items-center text-center text-white">
                      <div className="service-icon-container mr-4">{service.icon}</div>
                      <div>
                        <h1 className="text-[24px] md:text-[28px] font-bold">{service.title}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Slider (Sağ tərəf) */}

            <div className="right-side w-full md:w-1/2 p-4 flex flex-col">
              <Slider {...verticalSliderSettings} className="mySlider rounded-[15px] overflow-hidden">
                {rightSliderContent1.map((item, index) => (
                  <div key={index} className="slide-content bg-[#322c49] h-48 flex items-center justify-center p-8 md:p-12">
                    <div className="text-center text-white">
                      <h1 className="text-[24px] md:text-[28px] font-bold">{item.title}</h1>
                      <p className="text-[16px] mt-4">{item.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>

              <Slider {...verticalSliderSettings} className="mySlider rounded-[15px] overflow-hidden">
                {rightSliderContent2.map((item, index) => (
                  <div key={index} className="slide-content bg-[#322c49] h-48 flex items-center justify-center p-8 md:p-12">
                    <div className="text-center text-white">
                      <h1 className="text-[24px] md:text-[28px] font-bold">{item.title}</h1>
                      <p className="text-[16px] mt-4">{item.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
