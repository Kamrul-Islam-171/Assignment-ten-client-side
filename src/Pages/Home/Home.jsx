import { Helmet } from "react-helmet-async";
import Bannar from "../../LayOuts/Bannar/Bannar";
// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SpotCard from "../../LayOuts/SpotCard/SpotCard";
import CountryCard from "../../LayOuts/CountryCard/CountryCard";

import { Fade } from "react-awesome-reveal";


const Home = () => {
    const [spots, setSpots] = useState([]);
    const [countries, setCountries] = useState([]);
    // const scrollToTop = () => {
    //     window.scrollTo(0, 0)
    // }

    useEffect(() => {
        // fetch('http://localhost:5000/allSpots')
        fetch('https://assignment-ten-server-side-delta.vercel.app/allSpots')
        // fetch('http://assignment-ten-server-side-delta.vercel.app/allSpots')
            .then(res => res.json())
            .then(data => setSpots(data))

        fetch('https://assignment-ten-server-side-delta.vercel.app/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    console.log(spots)
    // console.log(countries)
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Bannar></Bannar>
                {/* <Bannar2></Bannar2> */}
            </div>

            <div>
                <div className=' flex flex-col items-center lg:flex-row gap-8 mt-[90px] container mx-auto pb-10'>
                    {/* <h1>hello</h1> */}
                    <div className='lg:w-[50%] ' >

                        <Fade direction="left" duration={1000}>
                            <img src={'https://i.ibb.co/pdsNLWf/1604203625-1.jpg'} className=' w-full object-cover ' alt="" />
                        </Fade>
                        {/* <img src={property[0]?.insideImage1} className='w-full object-cover rounded-lg' alt="" /> */}
                        {/* image */}
                    </div>
                    <div className='space-y-3 lg:w-[49%]'>
                        <Fade direction="right" duration={1000}>
                            <h1 className="text-4xl font-medium">A perfect place to get lost</h1>

                            <p className="">The largest mangrove forest in the world. It stands as a testament to nature boundless beauty and diversity. Here, amidst the labyrinthine waterways and dense foliage, one can lose themselves in a world of tranquility and wonder.</p>
                        </Fade>

                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-16 space-y-10">
                <h1 className="lg:text-5xl text-xl md:text-3xl text-center font-medium">Tourists Spots</h1>
                <div className="flex justify-center">
                    <p className="lg:w-2/3 md:w-4/5 text-center">Discover captivating tourist spots worldwide with our curated travel guides. Embark on unforgettable journeys to iconic tourist destinations around the globe.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        spots.map(spotInfo => <SpotCard spotInfo={spotInfo} isDescription={false} isShow={false} key={spotInfo._id}></SpotCard>)
                    }
                </div>
            </div>

            <div className="container mx-auto mt-16 space-y-10">
                <h1 className="lg:text-5xl text-xl md:text-3xl text-center font-medium">Explore the world</h1>
                <div className="flex justify-center">
                    <p className="lg:w-2/3 md:w-4/5 text-center">Embark on a global adventure and unlock the wonders of diverse cultures and landscapes. Explore iconic landmarks, hidden gems, and breathtaking natural wonders with our curated travel experiences. Let us be your guide as you journey to discover the beauty and diversity of our world.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        countries.map(countryInfo => <CountryCard key={countryInfo._id} countryInfo={countryInfo}></CountryCard>)
                    }
                </div>
            </div>



            {/* <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-background-3.jpg" alt="" /> */}




            <div className="space-y-5 mt-14  bg-[url('https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-background-3.jpg')] h-[800px] lg:h-[500px] md:h-[500px] flex flex-col justify-center text-white">
                <h1 className="lg:text-5xl text-xl md:text-3xl text-center font-medium">Choose Tour</h1>
                <div className="flex justify-center">
                    <p className="lg:w-1/2 md:w-4/5 text-center">Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour. Check out our popular destinations.</p>
                </div>
                <div className=" container mx-auto flex justify-center">
                    <div className="grid lg:grid-cols-5 lg:gap-28 gap-12 md:gap-16 md:grid-cols-3 grid-cols-2 w-[85%]">
                        <div className="space-y-3 flex flex-col items-center justify-center">
                            <div className="w-[70px] h-[81px]">
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-1-hover.png" className="h-full w-full " alt="a" loading="lazy"></img>
                            </div>
                            <h3 className='text-xl font-medium '>Self-Guided</h3>
                        </div>
                        <div className="space-y-3 flex flex-col items-center justify-center">

                            <div className="w-[70px] h-[81px]">
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-2-hover.png" className="h-full w-full" alt="a" loading="lazy"></img>

                            </div>
                            <h3 className='text-xl font-medium '>Cruises</h3>
                        </div>
                        <div className="space-y-3 flex flex-col items-center justify-center">
                            <div className="w-[70px] h-[81px]">
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-3-hover.png" className="h-full w-full" alt="a" loading="lazy"></img>
                            </div>
                            <h3 className='text-xl font-medium '>Adventure</h3>
                        </div>
                        <div className="space-y-3 flex flex-col items-center justify-center">
                            <div className="w-[70px] h-[81px]">
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-4-hover.png" className="h-full w-full" alt="a" loading="lazy"></img>
                            </div>
                            <h3 className='text-xl font-medium '>Wildlife</h3>

                        </div>
                        <div className="space-y-3 flex flex-col items-center justify-center">
                            <div className="w-[70px] h-[81px]">
                                <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-5-hover.png" className="h-full w-full" alt="a" loading="lazy"></img>
                            </div>
                            <h3 className='text-xl font-medium '>Seaside</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;