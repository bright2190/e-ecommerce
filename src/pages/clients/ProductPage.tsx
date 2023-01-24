import React from 'react';
import { Navbar } from '../../components';
import { Button, Flex, Rating } from '@mantine/core';
import { IconHeart } from '@tabler/icons';


const ProductPage: React.FC = () => {
    return (
        <>
            <div className={"item_container"}>
                <div>
                    <img src="https://ae01.alicdn.com/kf/S12da40cca04f44d5b975a994cb5f0e395/High-Street-Graffiti-Bear-Print-Men-s-Fleece-Hoodie-Retro-Autumn-Casual-Pullover-Hooded-Sweatshirts-Hip.jpg_Q90.jpg_.webp" alt="" />
                </div>
                <div>
                    <h1>Nike shoe</h1>
                    <h2>$40 <span>$60</span></h2>
                    <p>High Street Graffiti Bear Print Men's Fleece Hoodie Retro Autumn Casual Pullover Hooded Sweatshirts Hip Hop Y2K Hoodies Clothes</p>
                    <Rating size={"lg"} value={3.5} fractions={2} />
                    <Flex mt={20} align={"center"} gap={10}>
                        <Button color={"teal"} size={"xl"}>Add to Bag</Button>
                        <Button variant={"light"} color={"teal"} size={"xl"}><IconHeart /></Button>
                    </Flex>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
