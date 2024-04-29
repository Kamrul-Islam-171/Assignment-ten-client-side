import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';



const CircularSlider = () => {
    // const image1 = 'https://i.ibb.co/Ttp9FW6/images-q-tbn-ANd9-Gc-S7-KFo4-Wxdj-U6t0-KHb-Uuo-Zg0-Ac-JTNmz-Se3h-nzassvhvg-s.jpg';


    return (
        <div className='h-[400px]'>
            <Swiper pagination={true} loop={true} modules={[Pagination, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>
                    <div className='flex flex-col items-center space-y-4 bg-gray-800 text-white h-[400px] justify-center'>
                        <div className='w-[150px] h-[150px]'>
                            <img className='w-full h-full  rounded-full object-cover ' src="https://i.ibb.co/s2QxPkQ/1699307980103-e-2147483647-v-beta-t-Wtnv48-QUI71m-Se-77ig-ZG0-Ehgsi6e8m-Itohd-Ll-FHM70.jpg" alt="" />
                        </div>
                        <h3 className='text-xl font-medium'>Founder & CEO</h3>
                        <p className='w-[90%] text-center'>Samantha is the visionary leader behind Tourista. With a lifelong passion for travel and a keen business acumen, she founded Tourista to share her love for Southeast Asia with the world.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center space-y-4 bg-gray-800 text-white h-[400px] justify-center'>
                        <div className='w-[150px] h-[150px]'>
                            <img className='w-full h-full  rounded-full object-cover ' src="https://i.ibb.co/hDLVG9s/ab6761610000e5ebcbc1f1a454ae366fe1dad56a.jpg" alt="" />
                        </div>
                        <h3 className='text-xl font-medium'>Chief Operations Officer</h3>
                        <p className='w-[90%] text-center'> As the COO of Tourista, Michael oversees the day-to-day operations to ensure smooth and efficient service delivery.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center space-y-4 bg-gray-800 text-white h-[400px] justify-center'>
                        <div className='w-[150px] h-[150px]'>
                            <img className='w-full h-full  rounded-full object-cover ' src="https://i.ibb.co/5TnJLPX/images-q-tbn-ANd9-Gc-Q1-Qf-Hi1rb-Ak-Gsz4la-Rz3j5-d-IBo-JWWc-KNoj-SM2a-BFBMQ-s.jpg" alt="" />
                        </div>
                        <h3 className='text-xl font-medium'>Head of Customer Experience</h3>
                        <p className='w-[90%] text-center'>Emily is dedicated to providing exceptional customer service and ensuring that every traveler's journey with Tourista is nothing short of extraordinary. With her friendly demeanor and meticulous attention to detail, she goes above and beyond to address customer needs, resolve issues, and exceed expectations at every touchpoint.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center space-y-4 bg-gray-800 text-white h-[400px] justify-center'>
                        <div className='w-[150px] h-[150px]'>
                            <img className='w-full h-full  rounded-full object-cover ' src="https://i.ibb.co/GTvLsxk/0x0.jpg" alt="" />
                        </div>
                        <h3 className='text-xl font-medium'>Technology Director</h3>
                        <p className='w-[90%] text-center'> David leads Tourista's technology team in harnessing the power of innovation to enhance the travel experience. With his expertise in software development and data analytics, he spearheads the development of cutting-edge tools and platforms.</p>
                    </div>

                </SwiperSlide>
                
            </Swiper>
        </div>
    )
};

export default CircularSlider;