import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="bg-[#322c49] rounded-[16px] my-[20px] p-[20px] flex flex-col md:flex-row justify-between items-center">
        <div className="contact-info w-full md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-white text-[20px] md:text-[24px] font-medium mb-[16px] md:mb-[24px]">
            Kompüterinizdə problem varmı?
          </h2>
          <p className="text-white text-[14px] md:text-[16px]">
            Peşəkar texniki dəstək və xidmətlərimizlə problemlərinizi sürətlə və effektiv şəkildə həll edirik. 
            Bizə müraciət edin və biz sizə kömək etmək üçün buradayıq!
          </p>
        </div>
        <div className="contact-actions flex flex-col items-end gap-4 md:gap-5 w-full md:w-1/2">
          <a href="tel:+994514342142" className="text-white text-[20px] md:text-[24px] font-medium hover:underline">
            +994 51 434 21 42
          </a>
          <button className="bg-[#a83eb6] text-white w-full md:w-[200px] h-[45px] text-[14px] md:text-[15px] rounded-[6px] my-[20px] md:my-[25px] p-2 shadow-[0px_4px_9px_transparent] hover:bg-[#a985ab] hover:shadow-[0px_2px_4px_rgba(255,255,255,0.3)] transition-colors duration-300">
            Bizimlə Əlaqə Saxlayın
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;