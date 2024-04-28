import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotCard from "../../LayOuts/SpotCard/SpotCard";
import { Helmet } from "react-helmet-async";


const CountrySpots = () => {
    const { country } = useParams();
    const [countrySpots, setCountrySpots] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/countrySpots/${country}`)
            .then(res => res.json())
            .then(data => setCountrySpots(data))
    }, [])
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