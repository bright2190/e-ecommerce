import { NavLink } from 'react-router-dom';
import { ActionIcon } from '@mantine/core';
import { IconHome2 } from '@tabler/icons';
interface SidebarNavLinkProps {
    path: string;
    color:string;
    variant:"gradient" | "subtle" | "filled" | "outline" | "light" | "default" | "transparent" | undefined;
    icon:React.ReactElement;
    name:string;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({color,name,path,icon,variant }) => {
    return (
        <>
            <NavLink to={path} >
                <ActionIcon size={20} color={color} variant={variant}>
                    {icon}
                </ActionIcon>
                <span>{name}</span>
            </NavLink>
        </>
    );
};

export default SidebarNavLink;
