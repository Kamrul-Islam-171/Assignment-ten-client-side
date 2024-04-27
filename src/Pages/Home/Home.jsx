import { Helmet } from "react-helmet-async";
import Bannar from "../../LayOuts/Bannar/Bannar";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Bannar></Bannar>
            </div>
        </div>
    );
};

export default Home;