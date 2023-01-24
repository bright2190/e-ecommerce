import { Flex, TextInput, Button } from '@mantine/core';
import { IconHeart, IconSearch, IconShoppingBag } from '@tabler/icons';
import React from 'react';


const Navbar: React.FC = () => {
    return (
        <>
            <nav className='homepage_nav'>
                <a href="#"><h1>BennyBags & Wears</h1></a>

                <Flex align={"center"} gap={20}>
                    <Button color={"teal"}>Sign up</Button>
                    <Button color={"teal"} variant={"outline"}>Sign in</Button>
                    <TextInput variant={"filled"} radius={5} size={"md"} icon={<IconSearch size={22} />} placeholder={"Search"} />
                    <a href="#"><IconHeart size={25} color={"gray"} /></a>
                    <a href="#"><IconShoppingBag size={25} color={"gray"} /></a>
                </Flex>
            </nav>
        </>
    );
};

export default Navbar;
