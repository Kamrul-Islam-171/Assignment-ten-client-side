import { Outlet, useNavigation } from "react-router-dom";
import Header from "../LayOuts/Header/Header";
import Footer from "../LayOuts/Footer/Footer";


const MainRoutes = () => {
    // const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className={` mt-[80px]`}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainRoutes;