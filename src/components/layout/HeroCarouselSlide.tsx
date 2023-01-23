import { Carousel } from '@mantine/carousel';
import { Button, Flex, Image, BackgroundImage, Box } from '@mantine/core';
import React from 'react';

interface HeroCarouselSlideProps {
    name: string;
    img: string;
}

const HeroCarouselSlide: React.FC<HeroCarouselSlideProps> = ({ name, img }) => {
    return (
        <>
            <Carousel.Slide p={5}>
                <div className='hero_carousel_content'>
                    <img src={img} alt="" />
                    <div className='details_content'>
                    <h2>{name}</h2>
                    <Button size={"md"} color={"teal"} variant={"filled"}>Shop now</Button>
                    </div>
                </div>
            </Carousel.Slide>
        </>
    );
};

export default HeroCarouselSlide;
