import React from 'react';
import { FaDesktop, FaVirus, FaCogs, FaCloudDownloadAlt } from 'react-icons/fa';
import './BannerSection.css';

const MegaNavbar: React.FC = () => {
  return (
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
  );
};

export default MegaNavbar;
