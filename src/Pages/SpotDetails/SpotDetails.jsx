import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpotDetails = () => {
    const { id } = useParams();
    const [spotDetails, setSpotDetails] = useState({});
    // console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/spot/${id}`)
            .then(res => res.json())
            .then(data => setSpotDetails(data))
    }, [])
    // console.log(spotDetails)
    const { _id, photoUrl, spotName, country, location, description, avgCost, season, travelTime, totalVisitors } = spotDetails;
    return (
        <div className="pt-1">
            <div className=' flex flex-col items-center lg:flex-row gap-8 mt-[90px] container mx-auto pb-10'>
                {/* <h1>hello</h1> */}
                <div className='lg:w-[50%] ' >

                    <img src={photoUrl} className=' w-full object-cover rounded-lg' alt="" />
                    {/* <img src={property[0]?.insideImage1} className='w-full object-cover rounded-lg' alt="" /> */}
                    {/* image */}
                </div>
                <div className='space-y-3 lg:w-[49%]'>
                    
                    <h1 className='text-2xl font-semibold text-primary-color'>{spotName}</h1>
                    <p className=''><span className='font-semibold '>Location : </span>{location}, {country}</p>
                    <p className='text-justify'><span className='font-semibold '>Description :</span> {description}</p>
                   
                    
                    <p><span className='font-semibold '>Traveling Time : </span>{travelTime} days / per week</p>
                    <p><span className='font-semibold '>Traveling Seasons : </span>{season}</p>
                    <p><span className='font-semibold '>Total Visitors : </span>{totalVisitors}</p>
                    <p className='font-bold text-xl '><span>Average Cost : </span>{avgCost} BDT</p> 


                </div>
            </div>
        </div>
    );
};

export default SpotDetails;