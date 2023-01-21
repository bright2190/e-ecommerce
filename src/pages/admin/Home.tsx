import { ActionIcon, Table, Image, Flex, Menu, Button, Checkbox } from '@mantine/core';
import { IconChartCandle, IconDotsVertical, IconHanger2, IconShoppingCart, IconUsers } from '@tabler/icons';
import React from 'react';
import { OverviewCard, PageHeader } from '../../components';

const Home: React.FC = () => {
    const elements = [
        { status: "pending", id: 6, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
        { status: "pending", id: 5, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
        { status: "pending", id: 4, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
        { status: "pending", id: 3, product: { name: "Shirt", img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }, email: 'john@gmail.com', prize: '$342', qty: '4' },
    ];

    const rows = elements.map(({ id, product, email, prize, qty, status }) => (
        <tr key={id}>
            <td><Checkbox /></td>
            <td>{id}</td>
            <td>
                <a href="#">
                    <Flex
                        justify="flex-start"
                        align="center"
                        direction="row"
                        gap={10}
                    >
                        <Image
                            height={40}
                            width={40}
                            radius={5}
                            src={product.img}
                        />
                        <span>{product.name}</span>
                    </Flex>
                </a>
            </td>
            <td>{email}</td>
            <td><Button radius={50} size={"xs"} variant='light'>{status}</Button></td>
            <td>{prize}</td>
            <td>{qty}</td>
            <td>


                <Menu width={200} withArrow position='bottom-end' shadow="md">
                    <Menu.Target>
                        <Button radius={50} size={"xs"} variant='white'>
                            <ActionIcon size={20} color={"gray"}>
                                <IconDotsVertical />
                            </ActionIcon>
                        </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item onClick={()=> console.log(id)} icon={<IconChartCandle size={18} />}>
                            Update status
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </td>
        </tr>
    ));


    return (
        <>
            <PageHeader emoji={"🏠"} pageName={"Home"} />

            <div className='home_container'>
                <div className='overview_container'>
                    <OverviewCard value={"100"} icon={<IconShoppingCart size={25} />} title={"Total Orders"} color={'orange'} />
                    <OverviewCard value={"300"} icon={<IconHanger2 size={25} />} title={"Total Products"} color={'violet'} />
                    <OverviewCard value={"700"} icon={<IconUsers size={25} />} title={"Total Users"} color={'teal'} />
                </div>

                <div className='order_content'>
                    <h3>Recent orders</h3>
                    <div className='table_container'>
                        <Table>
                            <thead>
                                <tr>
                                    <th><Checkbox /></th>
                                    <th>Id</th>
                                    <th>Product</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Prize</th>
                                    <th>Qty</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
