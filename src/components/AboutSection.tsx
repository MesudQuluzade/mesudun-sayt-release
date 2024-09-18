import React from 'react';

const AboutSection: React.FC = () => {
    
    const aboutContent = [
        {
            header: "Biz kimik?",
            text: "Biz texnologiya və informasiya təhlükəsizliyi sahəsində mütəxəssis komandayıq. Müştərilərimizə etibarlı və innovativ həllər təqdim edirik, yüksək standartlara uyğun xidmətlər təqdim edərək müştəri məmnuniyyətini təmin edirik."
        },
        {
            header: "Nə iş görürük?",
            text: "Kompüterlərin diaqnostikası, təmiri, proqram təminatının qurulması, viruslardan qorunma və sistem təhlükəsizliyinin artırılması kimi xidmətlər təqdim edirik."
        },
        {
            header: "Əhatə dairəmiz nədir?",
            text: "Biz müştərilərimizə kompüterlərin ümumi baxımı, proqram təminatının yenilənməsi, təhlükəsizlik həlləri və şəbəkə xidmətləri üzrə mükəmməl xidmətlər təqdim edirik."
        }
    ];

    const newsItems = [
        {
            date: "20-Sen-2024",
            text: "Yeni təhlükəsizlik tədbirləri tətbiq edilərək müştəri məlumatlarının qorunması təmin edilir...",
            href: "#"
        },
        {
            date: "25-Sen-2024",
            text: "Yeni proqram təminatı buraxıldı! Əlavə funksiyalar və yeniliklər üçün bizə müraciət edin...",
            href: "#"
        }
    ];

    const blogItems = [
        {
            date: "10-Sen-2024",
            text: "Kompüter təhlükəsizliyinin artırılması üçün 7 vacib addım...",
            href: "#"
        },
        {
            date: "08-Sen-2024",
            text: "Hər kəs üçün uyğun antivirus proqramları: İcmal və tövsiyələr...",
            href: "#"
        }
    ];

    return (
        <section>
            <div className="about-section flex flex-wrap">

                {/* About Section */}

                <div className="w-full md:w-1/2 flex flex-col">
                    <article className="left-about p-4 sm:p-5 m-5 py-6 bg-white rounded-[15px] shadow-lg flex-1">
                        {aboutContent.map((section, index) => (
                            <React.Fragment key={index}>
                                <h2 className="text-[16px] font-medium mb-5">{section.header}</h2>
                                <p className="text-[#656566] text-[16px] mb-5">
                                    {section.text}
                                </p>
                            </React.Fragment>
                        ))}
                        <a href="#" className="flex justify-end text-[#00000070] text-[15px] font-medium hover:text-[#000000]">Ətraflı ➝</a>
                    </article>
                </div>

                {/* News and Blog Section */}

                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="right-news p-4 sm:p-5 m-5 py-6 bg-white rounded-[15px] shadow-lg flex-1">
                        <div className="news-section mt-5">
                            <h2 className="text-[20px] font-medium mb-4">Xəbərlər</h2>
                            {newsItems.map((item, index) => (
                                <div key={index} className="news-item mb-4">
                                    <span className="block text-gray-400 font-semibold text-[12px] mb-2">{item.date}</span>
                                    <a href={item.href} className="text-[#808080] text-[16px] hover:underline block truncate">
                                        {item.text}
                                    </a>
                                </div>
                            ))}
                            <a href="#" className="flex justify-end text-[#00000070] text-[15px] font-medium hover:text-[#000000]">Bütün xəbərlər ➝</a>
                        </div>

                        <span className="block w-full h-[1px] bg-gray-300 mt-4"></span>

                        <div className="blog-section mb-4 m-5">
                            <h2 className="text-[20px] font-medium mb-4">Bloqda Yeni</h2>
                            {blogItems.map((item, index) => (
                                <div key={index} className="news-item mb-4">
                                    <span className="block text-gray-400 font-semibold text-[12px] mb-2">{item.date}</span>
                                    <a href={item.href} className="text-[#808080] text-[16px] hover:underline block truncate">
                                        {item.text}
                                    </a>
                                </div>
                            ))}
                            <a href="#" className="flex justify-end text-[#00000070] text-[15px] font-medium hover:text-[#000000]">Bütün bloqlar ➝</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
