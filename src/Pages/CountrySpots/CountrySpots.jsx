import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotCard from "../../LayOuts/SpotCard/SpotCard";
import { Helmet } from "react-helmet-async";
import { SyncLoader } from "react-spinners";


const CountrySpots = () => {
    const { country } = useParams();
    const [countrySpots, setCountrySpots] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch(`https://assignment-ten-server-side-delta.vercel.app/countrySpots/${country}`)
            .then(res => res.json())
            .then(data => {
                setCountrySpots(data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    }
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>{country}</title>
            </Helmet>
            <div className="grid lg:grid-cols-3 md:grid-cols2 gap-5">
                {
                    countrySpots.map(spotInfo => <SpotCard spotInfo={spotInfo} isDescription={true} isShow={true} key={spotInfo._id}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default CountrySpots;