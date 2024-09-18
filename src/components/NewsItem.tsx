import React from 'react';

interface NewsItemProps {
    date: string;
    text: string;
    href: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ date, text, href }) => {
    return (
        <div className="news-item mb-4">
            <span className="block text-gray-400 font-semibold text-[12px] mb-2">{date}</span>
            <a href={href} className="text-[#808080] text-[16px] hover:text-[#521460] hover:underline block truncate">
                {text}
            </a>
        </div>
    );
};

export default NewsItem;
