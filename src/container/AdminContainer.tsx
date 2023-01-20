import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";


const AdminContainer: React.FC = () => {
    return (
        <>
            <div className="admin_container">
                <Sidebar />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AdminContainer;
