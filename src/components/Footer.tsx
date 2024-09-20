import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3D58] text-white py-10">
      <div className="footer-section px-4 flex flex-col lg:flex-row justify-between gap-10">
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-4">XİDMƏTLƏR</h4>
          <ul className="flex gap-2 flex-col">
            <li><a href="#" className="hover:underline">Kompüter Təmiri</a></li>
            <li><a href="#" className="hover:underline">Laptop Xidmətləri</a></li>
            <li><a href="#" className="hover:underline">Şəbəkə və İnternet</a></li>
            <li><a href="#" className="hover:underline">Data Bərpası</a></li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-4">PROBLEMLƏR</h4>
          <ul className="flex gap-2 flex-col">
            <li><a href="#" className="hover:underline">Noutbukun Güclü Qızması</a></li>
            <li><a href="#" className="hover:underline">Məlumatların Bərpa Olunması</a></li>
            <li><a href="#" className="hover:underline">Noutbuk, Kompüter İşləmir</a></li>
            <li><a href="#" className="hover:underline">Soyutma Sisteminin Təmiri</a></li>
            <li><a href="#" className="hover:underline">Kompüterin Ləng İşləməsi</a></li>
            <li><a href="#" className="hover:underline">Təmizləmə və Profilaktika</a></li>
            <li><a href="#" className="hover:underline">Kompüterə Virus Düşməsi</a></li>
            <li><a href="#" className="hover:underline">RAW Problemi</a></li>
            <li><a href="#" className="hover:underline">Flash Kart Bərpası</a></li>
            <li><a href="#" className="hover:underline">Proqramların Yazdırılması</a></li>
            <li><a href="#" className="hover:underline">Virus və Troyanlardan Sonra Məlumatların Bərpası</a></li>
            <li><a href="#" className="hover:underline">Noutbukun Diaqnostikası</a></li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-4">ƏLAQƏ</h4>
          <ul className="flex gap-2 flex-col">
            <li><a href="#" className="hover:underline">Haqqımızda</a></li>
            <li><a href="#" className="hover:underline">Bizimlə Əlaqə</a></li>
            <li><a href="#" className="hover:underline">Bloq</a></li>
            <li><a href="#" className="hover:underline">Xəbərlər</a></li>
          </ul>
        </div>
      </div>

      <div className="w-full h-px bg-white my-8"></div>

      <div className="footer-links px-4 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        <div className="flex gap-3 mb-4 md:mb-0 text-left w-full lg:w-auto md:flex-start">
          <p className="mr-5">BİZİ İZLƏ</p>
          <a href="#" className="hover:opacity-80">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-80">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>

        <div className="right-side text-center mb-3 md:mb-0 w-full lg:w-auto">
          <p>&copy; 2024 Bütün Hüquqlar Qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
