import React from 'react';

interface CategorySalesCardProps {
    name: string;
    img: string;
    prize: string;
    discountPrize?: string;
    discount?: string

}

const CategorySalesCard: React.FC<CategorySalesCardProps> = ({ name, img, prize, discount, discountPrize }) => {
    return (
        <>
            <div className={"card"}>
                <img src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <div className={"prize_details"}>
                        <p >{prize} <span>{discountPrize}</span></p>
                        <p className='discount'>{discount}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategorySalesCard;
