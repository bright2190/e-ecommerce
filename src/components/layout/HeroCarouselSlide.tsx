import { Carousel } from '@mantine/carousel';
import { Button, Flex, Image } from '@mantine/core';
import React from 'react';

interface HeroCarouselSlideProps {
    name: string;
    img: string;
}

const HeroCarouselSlide: React.FC<HeroCarouselSlideProps> = ({ name, img }) => {
    return (
        <>
            <Carousel.Slide p={30} >
                <Flex
                    gap={40}
                    align={"center"}
                >
                    <Image radius={10} width={500} height={400} src={img} alt="" />
                    <div>
                        <h1
                            style={{ fontSize: "50px" }}
                        >{name}</h1>
                        <Button color={"teal"} variant={"light"} radius={10} size={"xl"} mt={20}>Shop now</Button>
                    </div>
                </Flex>
            </Carousel.Slide>
        </>
    );
};

export default HeroCarouselSlide;
