import { useLoaderData } from "react-router-dom";
import SpotCard from "../../LayOuts/SpotCard/SpotCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";


const AllSpots = () => {
    const data = useLoaderData();
    const [toggle, setToggle] = useState(false);
    // const [loading, setLoading] = useState(false);
    console.log(data)
    const [sortData, setSortData] = useState(data);

    const handleSort = () => {
        // setLoading(true);
        setToggle(!toggle)
        data.sort(function(a, b){
            return a.avgCost - b.avgCost;
        })
        
    }
    useEffect(() => {
        setSortData(data)
        // setLoading(false)
    }, [toggle, data])

    // if(loading) {<span className="loading loading-spinner loading-lg"></span>}
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>All Tourist Spots</title>
            </Helmet>
            <div className="flex justify-center p-5">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 border border-primary-color bg-white text-primary-color hover:bg-primary-color hover:text-white">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={ handleSort} className="hover:bg-primary-color hover:text-white hover:rounded-md"><a>Average Cost</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols2 gap-5">
                {
                    sortData.map(spotInfo => <SpotCard spotInfo={spotInfo} isDescription={false} isShow={true} key={spotInfo._id}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpots;