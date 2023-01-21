import React from 'react';
import { PageHeader } from '../../components';
import { ActionIcon, Menu, Table } from '@mantine/core';
import { IconChartCandle, IconDotsVertical } from '@tabler/icons';



const Category: React.FC = () => {
    const elements = [
        { id: 1, name: "Women" },
        { id: 2, name: "Men" },
        { id: 3, name: "Kids" },
    ];

    const rows = elements.map(({ id, name }) => (
        <tr key={id}>
            <td>{name}</td>
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
                <h3 className='sub_page_header'>Category</h3>
                <div className='order_content'>
                    <div className='table_container order_table'>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
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

export default Category;
