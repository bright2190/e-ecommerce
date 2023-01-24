import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { MantineProvider } from "@mantine/core";


const AdminContainer: React.FC = () => {
    return (
        <>
            <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
                <div data-theme="light" className="admin_container">
                    <Sidebar />
                    <div style={{ width: "100%" }}>
                        <Outlet />
                    </div>
                </div>
            </MantineProvider>
        </>
    );
};

export default AdminContainer;
