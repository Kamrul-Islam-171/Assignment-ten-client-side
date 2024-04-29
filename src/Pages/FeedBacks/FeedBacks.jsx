import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const FeedBacks = () => {
    useEffect(() => {
        AOS.init();

    }, [])

    const [userFeedbacks, setUserFeedbacks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refetching, setRefetch] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/feedBacks')
            .then(res => res.json())
            .then(data => {

                setUserFeedbacks(data)
                setLoading(false)
            })
    }, [refetching])



    // console.log(userFeedbacks)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        mode: "onChange"
    })

    const onSubmit = (data) => {
        // console.log(data)
        const userReply = { name: data.name, profileImg: data.profileImg, feedback: data.feedback };
        // console.log(userReply)
        // console.log('i am in')

        fetch('http://localhost:5000/feedBacks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReply)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    // toast.success('Thanks For Your ')
                    setRefetch(!refetching)
                }
            })
        scrollToTop();
        // const email = data.email;
        // const password = data.password;



    }
    if (loading) {
        return <div className=' flex justify-center h-screen'><span className="loading loading-dots loading-lg "></span></div>
    }


    return (
        <div className="container mx-auto mt-36 mb-20">
            <Helmet>
                <title>User Feedbacks</title>
            </Helmet>
            <div>
                <h1 className="text-4xl font-medium text-center mb-16" data-aos="zoom-out" data-aos-duration='1000'>Clients Testimonials</h1>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {
                        userFeedbacks.map((userFeedback, idx) =>
                            <div key={userFeedback._id} className="space-y-5 shadow-lg px-10 py-8" data-aos={idx % 2 ? 'fade-up' : 'fade-down'}
                                data-aos-duration='1000'
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" data-aos-delay='300'>
                                <div className="flex gap-8 items-center">
                                    <div className="w-[90px] h-[90px] ">
                                        <img className="w-full h-full rounded-full" src={userFeedback.profileImg} alt="" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium">{userFeedback.name}</h3>
                                        <p className="text-gray-500">Happy Traveler</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-500">{userFeedback.feedback}</p>
                                </div>

                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>

                            </div>)
                    }




                </div>
            </div>
            <div className='mt-16 space-y-3'>
                {/* give your feedback */}
                <h3 className='font-medium text-2xl' data-aos='fade-right' data-aos-duration='1000'>Please give us your valuable feedback</h3>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-700">Your Email</label>
                        <input type="email" {...register("email")} placeholder="Email" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                    </div> */}

                    <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3'>
                        <div className="space-y-1 text-sm" data-aos='fade-right' data-aos-duration='1000'>
                            <label htmlFor="photoUrl" className="block  text-lg ">Your Profile</label>
                            <input type="text" {...register("profileImg", { required: true })} placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                        </div>

                        <div className="space-y-1 text-sm " data-aos='fade-left' data-aos-duration='1000'>
                            <label htmlFor="spotName" className="block  text-lg">Your Name</label>
                            <input type="text" {...register('name', { required: true })} placeholder="Spot Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />

                            {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                        </div>
                    </div>

                    <div data-aos='fade-left' data-aos-duration='1000'>
                        <textarea {...register('feedback')} className='border border-primary-color rounded-lg w-full p-2' placeholder='Your feedback..' id="" cols="30" rows="10"></textarea>
                    </div>
                    <button data-aos='fade-right' data-aos-duration='1000' className="block p-3  text-center rounded-sm  bg-primary-color text-gray-100 hover:bg-secondary-color">Post Comment</button>
                </form>
            </div>
        </div>
    );
};

export default FeedBacks;