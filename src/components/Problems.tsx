import React from 'react';
import { FaExclamationTriangle, FaLaptopCode, FaHdd, FaPlug } from 'react-icons/fa';

const problemData = [
  {
    icon: <FaExclamationTriangle className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Sistem Problemləri və Yavaşlamalar",
    description: "Gözlənilmədən sistemin dayanması və ya yavaşlaması kimi problemlər.",
  },
  {
    icon: <FaLaptopCode className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Proqram Xətaları",
    description: "Proqram təminatında qarşılaşdığınız xətalar və uyğunsuzluqlar.",
  },
  {
    icon: <FaHdd className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Sərt Disk Zədələnməsi",
    description: "Sərt diskdə fiziki zədələnmələr və məlumat itkisi.",
  },
  {
    icon: <FaPlug className="text-[40px] text-[#8D3EAD] mb-4" />,
    title: "Enerji Problemləri",
    description: "Kompüterin enerji təminatında yaranan problemlər, cihazın düzgün işləməməsinə və ya dayanmalarına səbəb ola bilər.",
  },
];

export const Problems: React.FC = () => {
  return (
    <section>
      <div className="problems-section mt-5">
        <div className="bg-white p-8 rounded-[15px] shadow-lg">
          <h2 className="text-[20px] font-medium mb-16">Ən Çox Qarşılaşılan Problemlər</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problemData.map((problem, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center text-center transition-colors hover:text-[#521460]"
              >
                {problem.icon}
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p>{problem.description}</p>
              </a>
            ))}
          </div>

          <div className="text-right mt-8">
            <a href="#" className="text-[#00000070] text-[15px] font-medium mb-5 hover:text-[#000]">
              Bütün problemlərə keçid &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
