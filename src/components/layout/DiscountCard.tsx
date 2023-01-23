import React from 'react';

interface DiscountCardProps {
    discount: string;
    img: string;
}

const DiscountCard: React.FC<DiscountCardProps> = ({ discount, img }) => {
    return (
        <>
            <div className={"card"}>
                <div className={"discount_container"}>{discount}</div>
                <img src={img} alt="" />
            </div>
        </>
    );
};

export default DiscountCard;
