import { Carousel } from '@mantine/carousel';
import React from 'react';

interface CategorySlideProps {
    name: string;
    img: string;
}

const CategorySlide: React.FC<CategorySlideProps> = ({ name, img }) => {
    return (
        <>
            <Carousel.Slide>
                <div className='category_item'>
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                </div>
            </Carousel.Slide>
        </>
    );
};

export default CategorySlide;
