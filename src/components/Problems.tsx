import React, { useState } from 'react';
import { FaDatabase, FaDownload, FaTools, FaThermometerHalf, FaChartLine } from 'react-icons/fa'; 
import { GiProcessor } from 'react-icons/gi'; 
import { MdOutlineSystemUpdateAlt } from 'react-icons/md'; 
import { RiFileReduceLine, RiVirusFill } from 'react-icons/ri'; 
import { HiOutlineDocumentDownload } from 'react-icons/hi'; 
import { IoMdWarning } from 'react-icons/io'; // For system warnings

const problemData = [
  {
    icon: <FaThermometerHalf className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Noutbukun Güclü Qızması",
    description: "Noutbukun güclü qızması, soyutma sisteminin çirklənməsi və ya zədələnməsindən irəl gəlir. Bu, cihazın komponentlərinin zədələnməsinə səbəb ola bilər. Peşəkar köməyimizlə problemi aradan qaldırın.",
    category: "system"
  },
  {
    icon: <FaDatabase className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Məlumatların Bərpa Olunması",
    description: "Silinmiş və ya itirilmiş məlumatların bərpa edilməsi xidmətimizlə, dəyərli fayllarınızı geri qaytarmağı təmin edirik. Bizimlə əlaqə saxlayın.",
    category: "recovery"
  },
  {
    icon: <GiProcessor className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Noutbuk, Kompüter İşləmir",
    description: "Kompüterinizin işləmir olması, enerji təminatı, proqram xətaları və ya avadanlıq problemləri ilə bağlı ola bilər. Peşəkar diaqnostika və təmir xidmətlərimizdən yararlanın.",
    category: "system"
  },
  {
    icon: <IoMdWarning className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Soyutma Sisteminin Təmiri",
    description: "Soyutma sisteminin təcili təmirini, təmizlənməsini və dəyişdirilməsini təklif edirik. Qızma problemlərinin qarşısını almaq üçün peşəkar xidmətlərimizdən yararlanın.",
    category: "maintenance"
  },
  {
    icon: <FaChartLine className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Kompüterin Ləng İşləməsi",
    description: "Kompüterinizin ləng işləməsi, proqramların aşırı yüklənməsi, sərt diskdəki problemlər və ya sistem konfiqurasiyası ilə bağlı ola bilər. Bizimlə əlaqə saxlayın və problemi həll edək.",
    category: "system"
  },
  {
    icon: <MdOutlineSystemUpdateAlt className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Təmizləmə və Profilaktika",
    description: "Kompüterinizin təmizlənməsi və profilaktikası, cihazın uzun ömürlü olmasını təmin edir. Tozların təmizlənməsi və sistemin yoxlanılması xidmətlərimizdən yararlanın.",
    category: "maintenance"
  },
  {
    icon: <RiVirusFill className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Kompüterə Virus Düşməsi",
    description: "Kompüterinizin virus ilə yoluxması, məlumatların itirilməsi və sistemin zədələnməsi riskini artırır. Peşəkar antivirus və sistem təmizləmə xidmətlərimizdən faydalanın.",
    category: "security"
  },
  {
    icon: <HiOutlineDocumentDownload className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "RAW Problemi",
    description: "RAW formatında məlumatların olması, itirilmiş məlumatların bərpası riskini artırır. Peşəkar xidmətimizlə əlaqə saxlayın və dəyərli məlumatlarınızı geri qaytarma şansınızı artırın.",
    category: "recovery"
  },
  {
    icon: <RiFileReduceLine className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Flash Kart Bərpası",
    description: "Silinmiş və ya itirilmiş məlumatları flash kartlardan bərpa etmək üçün peşəkar xidmətlərimiz mövcuddur. Bizimlə əlaqə saxlayın və məlumatlarınızı geri qaytarmaqda sizə kömək edək.",
    category: "recovery"
  },
  {
    icon: <FaDownload className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Proqramların Yazdırılması",
    description: "Lazım olan istənilən proqramları yazdırıb sazlayırıq. Peşəkar xidmətlərimizlə proqramlarınızı yeniləyin.",
    category: "maintenance"
  },
  {
    icon: <RiVirusFill className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Virus və Troyanlardan Sonra Məlumatların Bərpası",
    description: "Virus və troyan hücumları sonrası itirilmiş məlumatların bərpası üçün peşəkar xidmətlərimizdən istifadə edin. Dəyərli fayllarınızı geri qaytarmağı təmin edirik.",
    category: "recovery"
  },
  {
    icon: <FaTools className="text-[40px] text-[#1E3D58] mb-4" />,
    title: "Noutbukun Diaqnostikası",
    description: "Noutbuk və ya kompüterinizin problemlərini diaqnostika edib, sizə optimal həll yollarını təklif edirik. Texniki xidmətlərimizlə cihazınızın işini bərpa edin.",
    category: "system"
  },
];

export const Problems: React.FC = () => {
  const [filter, setFilter] = useState("system");

  const filteredProblems = problemData.filter(problem => problem.category === filter);

  return (
    <section>
      <div className="problems-section mt-8">
        <div className="bg-white p-8 rounded-[15px] shadow-lg">
          <h2 className="text-[20px] font-medium mb-5 text-[#1E3D58]">Ən Çox Qarşılaşılan Problemlər</h2>
          
          <div className="mb-16 flex gap-4 flex-wrap">
            {["system", "recovery", "maintenance", "security"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 
                  ${filter === cat ? 'bg-[#1E3D58] text-white shadow-lg' : 'bg-gray-200 text-[#1E3D58] hover:bg-gray-300'}`}
              >
                {cat === "system" ? "Sistem" : cat === "recovery" ? "Bərpa" : cat === "maintenance" ? "Təmir" : "Təhlükəsizlik"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProblems.map((problem, index) => (
              <a
                key={index}
                href="#"
                className="flex flex-col items-center text-center transition-colors hover:text-[#5a55f4]"
              >
                {problem.icon}
                <h3 className="text-lg font-semibold mb-2 text-[#1E3D58]">{problem.title}</h3>
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
