import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

interface StoreContainerProps {

}

const StoreContainer: React.FC<StoreContainerProps> = () => {
    return (
        <>
            <div>
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default StoreContainer;
