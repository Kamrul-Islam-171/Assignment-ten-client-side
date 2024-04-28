import { useLoaderData } from "react-router-dom";
import SpotCard from "../../LayOuts/SpotCard/SpotCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";


const AllSpots = () => {
    const data = useLoaderData();
    const [toggle, setToggle] = useState(false);
    const [defaultData, setDefaultData] = useState(false);
    
    const [sortData, setSortData] = useState(data);

    
    useEffect(() => {
        
        console.log(defaultData)
        console.log('toggle = ', toggle)
        if (toggle === true) {

            fetch('http://localhost:5000/allSortedTouristSpots')
                .then(res => res.json())
                .then(data => setSortData(data))
             
        }
        else if (defaultData === true) {

            fetch('http://localhost:5000/allTouristSpots')
                .then(res => res.json())
                .then(data => {
                    setSortData(data);
                })
                
        }
    }, [toggle, defaultData])

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
                        <li onClick={() => {
                            setDefaultData(true)
                            setToggle(false)
                        }} className="hover:bg-primary-color hover:text-white hover:rounded-md"><a>Default</a></li>
                        <li onClick={() => {
                            setToggle(true)
                            setDefaultData(false)
                        }} className="hover:bg-primary-color hover:text-white hover:rounded-md"><a>Average Cost</a></li>
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