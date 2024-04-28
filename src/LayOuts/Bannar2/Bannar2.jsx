

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';


import { Autoplay, Navigation } from 'swiper/modules';

const Bannar2 = () => {



    return (
        <div className="">
            <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>

                    <div className="relative flex items-center  
        justify-center h-screen overflow-hidden">
                        <video src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4"
                            loop muted autoPlay
                            className="absolute z-10 w-auto  
            min-w-full min-h-full max-w-none">
                        </video>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className='h-screen'>
                        hello2
                    </div>

                </SwiperSlide>







            </Swiper>


        </div>
    );
};

export default Bannar2;