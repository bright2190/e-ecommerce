import { Flex, TextInput } from '@mantine/core';
import { IconHeart, IconSearch, IconShoppingBag } from '@tabler/icons';
import React from 'react';


const Navbar: React.FC = () => {
    return (
        <>
             <nav className='homepage_nav'>
                <a href="#"><h1>👗Matty</h1></a>

                <Flex align={"center"} gap={20}>
                <TextInput variant={"default"} radius={50} size={"md"} icon={<IconSearch size={22} />} placeholder={"Search"} />
                <a href="#"><IconHeart size={25} color={"gray"} /></a>
                <a href="#"><IconShoppingBag size={25} color={"gray"} /></a>
                </Flex>
            </nav>
        </>
    );
};

export default Navbar;
