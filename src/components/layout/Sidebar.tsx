import React from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion } from '@mantine/core';
import { IconHome2, IconBell, IconBasket, IconSquarePlus, IconApps, IconUsers, IconChevronRight, IconInbox, IconMailForward, IconServerCog } from '@tabler/icons';
import SidebarNavLink from './SidebarNavLink';

const Sidebar: React.FC = ({ }) => {
    return (
        <>
            <nav className='admin_sidebar'>
                <ul>
                    <menu>
                        <li>
                            <SidebarNavLink path={"/admin"} icon={<IconHome2 />} name={"Home"} color={"gray"} variant={"transparent"} />
                        </li>
                        <li>
                            <SidebarNavLink path={"/admin/notifications"} icon={<IconBell />} name={"Notifications"} color={"gray"} variant={"transparent"} />
                        </li>
                    </menu>

                    <menu>
                        <li>
                            <Accordion 
                                chevron={<IconChevronRight color={"gray"} size={18} />}
                                styles={{
                                    chevron: {
                                        '&[data-rotate]': {
                                            transform: 'rotate(90deg)',
                                        },
                                    },
                                }} defaultValue="products">
                                <Accordion.Item value="products">
                                    <Accordion.Control><h3>Products</h3></Accordion.Control>
                                    <Accordion.Panel>
                                        <SidebarNavLink path={"/admin/products"} icon={<IconBasket />} name={"Products"} color={"blue"} variant={"light"} />
                                        <SidebarNavLink path={"/admin/product/add-product"} icon={<IconSquarePlus />} name={"Add product"} color={"orange"} variant={"light"} />
                                        <SidebarNavLink path={"/admin/product/category"} icon={<IconApps />} name={"Category"} color={"violet"} variant={"light"} />
                                    </Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="users">
                                    <Accordion.Control><h3>USERS</h3></Accordion.Control>
                                    <Accordion.Panel>
                                        <SidebarNavLink path={"/admin/user/users"} icon={<IconUsers />} name={"Users"} color={"teal"} variant={"light"} />
                                        <SidebarNavLink path={"/admin/user/in-app"} icon={<IconInbox />} name={"In-app notification"} color={"orange"} variant={"light"} />
                                        <SidebarNavLink path={"/admin/user/mail"} icon={<IconMailForward />} name={"Mail notification"} color={"violet"} variant={"light"} />
                                        <SidebarNavLink path={"/admin/user/settings"} icon={<IconServerCog />} name={"Settings"} color={"blue"} variant={"light"} />
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </li>
                    </menu>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
