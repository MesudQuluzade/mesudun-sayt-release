import React from 'react';
import { FaTools, FaLaptop, FaWifi, FaDatabase } from 'react-icons/fa';

const serviceData = [
  {
    icon: <FaTools className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Kompüter Təmiri",
    description: "Notebook və masaüstü kompüterlərin təmiri və diaqnostikası",
  },
  {
    icon: <FaLaptop className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Laptop Xidmətləri",
    description: "Laptop təmiri, ehtiyat hissələri və proqram təminatı dəstəyi",
  },
  {
    icon: <FaWifi className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Şəbəkə və İnternet",
    description: "Modem, router quraşdırma və şəbəkə problemlərinin həlli",
  },
  {
    icon: <FaDatabase className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Data Bərpası",
    description: "Silinmiş və ya itirilmiş məlumatların bərpası xidmətləri",
  },
];

export const Service: React.FC = () => {
  return (
    <section>
      <div className="service-section mt-5">
        <div className="bg-white p-8 rounded-[15px] shadow-lg">
          <h2 className="text-[20px] font-medium mb-16">Populyar xidmətlər</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center text-center transition-colors hover:text-[#521460]"
              >
                {service.icon}
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </a>
            ))}
          </div>

          <div className="flex justify-end mt-8">
            <a href="#" className="text-[#00000070] text-[15px] font-medium mb-5 hover:text-[#000]">
              Bütün xidmətlərə keçid &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
