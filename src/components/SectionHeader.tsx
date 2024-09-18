import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string; // İstəyə bağlı subtitle xüsusiyyəti
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
    return (
        <div>
            <h2 className="text-[16px] font-medium mb-1">{title}</h2>
            {subtitle && <h3 className="text-[14px] text-[#777]">{subtitle}</h3>}
        </div>
    );
};

export default SectionHeader;
