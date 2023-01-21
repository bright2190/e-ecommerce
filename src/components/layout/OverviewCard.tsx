import { ActionIcon } from '@mantine/core';
import React from 'react';

interface OverviewCardProps {
    title: string;
    icon: React.ReactElement;
    color: string;
    value: string
}

const OverviewCard: React.FC<OverviewCardProps> = ({ icon, title, color, value }) => {
    return (
        <>
            <div className="card">
                <div className='card_title'>
                    <h4>{title}</h4>
                    <ActionIcon radius={10} size={35} color={color} variant={"light"}>
                        {icon}
                    </ActionIcon>
                </div>
                <h2>{value}</h2>
            </div>
        </>
    );
};

export default OverviewCard;
