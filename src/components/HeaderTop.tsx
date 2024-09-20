import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <header className="header-background h-[35px] flex items-center">
      <div className="container flex justify-between items-center">

        <div className="support-info-left hidden lg:flex">
          <h3 className="text-[12px] font-bold text-[#fff]">
            Komputer Təmir və Texniki Dəstək Mütəxəssisləri
          </h3>
        </div>

        <div className="support-nav-bar text-[12px] font-semibold text-[#fff] md:flex md:gap-[24px]">
          <a href="#">Haqqımızda</a>
          <a href="#">Bizimlə əlaqə</a>
          <a href="#">Bloq</a>
          <a href="#">Xəbərlər</a>

          <div className="language-switcher lg:ms-[28px] flex gap-[11px]">
            <a href="#">AZ</a>
            <a href="#">EN</a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default HeaderTop;
