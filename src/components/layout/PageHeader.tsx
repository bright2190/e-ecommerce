import React from 'react';

interface PageHeaderProps {
    pageName: string;
    emoji: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ emoji, pageName }) => {
    return (
        <>
            <div className='top_nav'><h3><span>{emoji}</span> {pageName}</h3></div>
        </>
    );
};

export default PageHeader;
