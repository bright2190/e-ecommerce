import { ActionIcon, Table, Image, Flex, Menu, Button, Checkbox, Pagination } from '@mantine/core';
import { IconAdjustmentsHorizontal, IconChartCandle, IconDotsVertical } from '@tabler/icons';
import { PageHeader } from '../../components';

const Order: React.FC = () => {
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
                        <ActionIcon size={20} color={"gray"}>
                            <IconDotsVertical />
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item onClick={() => console.log(id)} icon={<IconChartCandle size={18} />}>
                            Update status
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </td>
        </tr>
    ));


    return (
        <>

            <PageHeader emoji={"🛍"} pageName={"Orders"} />
            <div className='order_container'>
                <div className='order_content'>
                    <Flex
                        mb={10}
                        justify="flex-end"
                        align="center"
                        direction="row"
                        gap={10}>

                        <Button radius={5} leftIcon={<IconAdjustmentsHorizontal size={18} />} variant='default'>Filter</Button>
                    </Flex>
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
                        <Flex justify={"flex-end"} align={"center"} mt={20}>
                            <Pagination radius={3} size={"xs"} total={10} />
                        </Flex>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
