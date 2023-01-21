import { ActionIcon, Table, Image, Flex, Menu, Button, Checkbox, Pagination } from '@mantine/core';
import { IconAdjustmentsHorizontal, IconChartCandle, IconDotsVertical, IconLayout2, IconListDetails } from '@tabler/icons';
import { PageHeader } from '../../components';


const Products: React.FC = () => {
    const elements = [
        { category: "Women", id: 6, name: "Shirt", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", prize: '$342', qty: '4' },
        { category: "Men", id: 5, name: "Shirt", img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", prize: '$342', qty: '4' },
        { category: "Kids", id: 4, name: "Shirt", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", prize: '$342', qty: '4' },
        { category: "Bags", id: 3, name: "Shirt", img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", prize: '$342', qty: '4' },
    ];

    const rows = elements.map(({ id, img, name, prize, qty, category }) => (
        <tr key={id}>
            <td><Checkbox /></td>
            <td>{name}</td>
            <td>
                <Image
                    height={40}
                    width={40}
                    radius={5}
                    src={img}
                />
            </td>
            <td>{category}</td>
            <td>{qty}</td>
            <td>{prize}</td>
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
            <PageHeader emoji={"👚"} pageName={"Products"} />
            <div className='order_container'>
                <h3 className='sub_page_header'>All Products</h3>
                <div className='order_content'>
                    <Flex
                        mb={10}
                        justify="space-between"
                        align="center"
                        direction="row"
                        gap={10}>

                        <Button radius={5} leftIcon={<IconAdjustmentsHorizontal size={18} />} variant='default'>Filter</Button>
                        <Flex
                            mb={10}
                            justify="space-between"
                            align="center"
                            direction="row"
                            gap={5}>

                            <ActionIcon size={30} variant={"default"} color={"gray"}>
                                <IconListDetails size={20} color={"gray"} />
                            </ActionIcon>
                            <ActionIcon size={30} variant={"default"} color={"gray"}>
                                <IconLayout2 size={20} color={"gray"} />
                            </ActionIcon>
                        </Flex>
                    </Flex>
                    <div className='table_container'>
                        <Table>
                            <thead>
                                <tr>
                                    <th><Checkbox /></th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>qty</th>
                                    <th>Prize</th>
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

export default Products;
