import { Outlet } from "react-router-dom";
import Header from "../LayOuts/Header/Header";
import Footer from "../LayOuts/Footer/Footer";


const MainRoutes = () => {
    return (
        <div>
            <Header></Header>
            <div className="mt-[90px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainRoutes;