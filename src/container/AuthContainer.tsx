import React from 'react';
import { Outlet } from 'react-router-dom';



const AuthContainer: React.FC = () => {
    return (
        <>
            <div className={"auth_container"}>
                <a href=""><h1>Matty</h1></a>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AuthContainer;
