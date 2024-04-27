import { Helmet } from "react-helmet-async";
import Bannar from "../../LayOuts/Bannar/Bannar";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SpotCard from "../../LayOuts/SpotCard/SpotCard";


const Home = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allSpots')
        .then(res => res.json())
        .then(data => setSpots(data))
    }, [])

    console.log(spots)
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Bannar></Bannar>
            </div>

            <div className="container mx-auto mt-16 space-y-10">
                <h1 className="lg:text-5xl text-xl md:text-3xl text-center font-medium">Tourists Spots</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols2 gap-5">
                    {
                        spots.map(spotInfo => <SpotCard spotInfo = {spotInfo} key={spotInfo._id}></SpotCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;