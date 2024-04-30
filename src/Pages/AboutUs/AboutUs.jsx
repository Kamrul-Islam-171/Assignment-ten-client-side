import { Typewriter } from "react-simple-typewriter";
import CircularSlider from "../../LayOuts/CircularSlider/CircularSlider";

import { Fade, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {

    return (
        <div className="">
            <Helmet><title>About Us</title></Helmet>
            <div className="">
                <div className="h-[calc(100vh-80px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]" >

                    <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10 space-y-4'>

                        <div>
                            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                <h1 className='text-5xl font-bold  text-white mb-6'>Welcome to Tourista</h1>{' '}
                                <span className="text-white font-medium text-2xl">
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={['Your gateway to unforgettable travel experiences in Southeast Asia.', 'We are passionate about creating memories that last a lifetime.', 'We curate unique and immersive journeys that showcase.', 'We are here to make your dream vacation a reality.']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span>
                            </h1>
                        </div>

                    </div>
                    <img src={'https://i.ibb.co/gMX2fZH/coxs-bazar-beach-mirza-abidur-rahman.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                </div>


            </div>

            <div className="bg-gray-700 text-white h-screen flex items-center">
                <div className="container  mx-auto grid lg:grid-cols-2 md:grid-cols-2 md:px-10 gap-5 items-center lg:px-16">
                    {/* Our history */}
                    <Fade direction="left" duration={1000}><h1 className="text-6xl">Our History</h1></Fade>
                    <Fade direction="right" duration={1000}><p className="text-xl">Tourista was founded with a simple yet ambitious goal: to make travel in Southeast Asia accessible, affordable, and unforgettable for everyone. Since our inception 2016, we have grown from a small startup into a trusted authority in the travel industry. Along the way, we've overcome challenges, celebrated successes, and forged lasting partnerships with local businesses and communities across the region.</p></Fade>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-5  container mx-auto mt-16">
                {/* mission */}
                <Zoom direction="in" duration={1000}> <div className="border-2 h-[340px] lg:p-10 p-2 md:p-5 flex flex-col justify-center items-center text-center space-y-5">
                    <h1 className="text-3xl">Our Mission</h1>
                    <div className="w-1/4 h-[5px] bg-gray-500"></div>
                    <p>Our mission at Tourista is to inspire and empower travelers to explore the beauty and diversity of Southeast Asia with confidence and ease. We are committed to providing exceptional services, personalized experiences, and unbeatable value, ensuring that every journey with us exceeds expectations.</p>
                </div></Zoom>
                {/* vission */}
                <Zoom direction="in" duration={1000}><div className="border-2 h-[340px] lg:p-10 p-2 md:p-5 text-center space-y-5 flex flex-col justify-center items-center ">
                    <h1 className="text-3xl">Our Vision</h1>
                    <div className="w-1/4 h-[5px] bg-gray-500"></div>
                    <p>Our vision is to become the premier platform for discovering and booking authentic and unforgettable travel experiences in Southeast Asia. We strive to continuously innovate, expand our offerings, and foster meaningful connections between travelers and the destinations they visit.</p>
                </div></Zoom>
                <Zoom direction="in" duration={1000}><div className="border-2 h-[340px] lg:p-10 p-2 md:p-5 text-center space-y-5 flex flex-col justify-center items-center ">
                    {/* awards */}
                    <h1 className="text-3xl">Awards</h1>
                    <div className="w-1/4 h-[5px] bg-gray-500"></div>
                    <p>Tourista is proud to have been recognized for excellence in the travel industry. Our dedication to quality and customer satisfaction has earned us , showcasing our commitment to delivering exceptional experiences to our valued customers.</p>
                </div></Zoom>
            </div>



            <div className="flex lg:flex-row flex-col gap-20 md:flex-row container mx-auto mt-16">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Zoom direction="in" duration={1000}><h1 className="lg:text-4xl md:text-3xl text-2xl">Meet Our Team Members</h1></Zoom>
                    <Fade direction="left" duration={2000}><p className="text-center">Meet the passionate individuals who make Tourista possible. Our team is comprised of experienced travel experts, destination specialists, and customer service professionals who share a common love for Southeast Asia.</p></Fade>
                </div>
                <div className="lg:w-1/2 md:3-1/2 container mx-auto">
                    <Fade direction="right" duration={1000}><CircularSlider></CircularSlider></Fade>
                </div>

            </div>

            {/* <div className="lg:w-1/4 md:3-1/2 container mx-auto">
                <CircularSlider></CircularSlider>
            </div> */}



            <Zoom direction="in" duration={1000}><h1 className="text-center lg:text-4xl md:text-3xl text-2xl mt-20 mb-10">Out Commitments</h1></Zoom>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 container mx-auto gap-5 mb-10">
                {/* Our Commitments */}
                <Zoom direction="in" duration={1000}><div className="border-2 p-5  h-[230px] text-center space-y-4">
                    <h1 className="text-2xl font-medium">Exceptional Service</h1>
                    <p>We strive to exceed expectations with every interaction, providing prompt, friendly, and personalized service to each and every customer.</p>
                </div></Zoom>
                <Zoom direction="in" duration={1000}> <div className="border-2 p-5 h-[230px]  text-center space-y-4">
                    <h1 className="text-2xl font-medium">Sustainability</h1>
                    <p>We are dedicated to promoting responsible travel practices that minimize our environmental impact and support local communities.</p>
                </div></Zoom>
                <Zoom direction="in" duration={1000}><div className="border-2 p-5  h-[230px] text-center space-y-4">
                    <h1 className="text-2xl font-medium">Transparency</h1>
                    <p> We believe in open and honest communication, ensuring that our customers have all the information they need to make informed decisions about their travel experiences.</p>
                </div>
                </Zoom>
                <Zoom direction="in" duration={1000}> <div className="border-2 p-5 h-[230px]  text-center space-y-4">
                    <h1 className="text-2xl font-medium">Continuous Improvement</h1>
                    <p> We are constantly seeking ways to enhance our offerings, refine our processes, and elevate the overall quality of our services.</p>
                </div></Zoom>
            </div>

        </div>
    );
};

export default AboutUs;