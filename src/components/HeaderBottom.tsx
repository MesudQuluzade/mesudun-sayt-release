import React from 'react';
import './HeaderBottom.css';

const HeaderBottom: React.FC = () => {
  return (
    <div className="header-bottom-section pt-[23px]">
      <div className="container-fluid flex justify-between items-center">
        <div className="logo-section">
          <a href="#" className="logo text-4xl font-bold text-gray-800">
            Tekno<span className="highlight text-[#8d3ead]">Destek.Az</span>
          </a>
          <p className="tagline text-sm text-[#8d3ead]">
            Sizin Texnoloji Problemlərinizin Həlli Mərkəzi
          </p>
        </div>

        <div className="search-section my-4 md:mx-4">
          <form action="" className="search-form">
            <input
              type="text"
              placeholder="Hansı kompüter xidmətini axtarırsınız?"
              className="search-input"
            />
            <i className="fa fa-search"></i>
          </form>
        </div>

        <div className="contact-info flex flex-col">
          <h1 className="phone-number text-black font-bold">051 434 21 42</h1>
          <h1 className="phone-number text-black font-bold">050 583 94 99</h1>
          <a href="tel:+994514342142" className="callback-link text-sm text-[#8d3ead] no-underline font-medium text-end">Zəng edin</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
