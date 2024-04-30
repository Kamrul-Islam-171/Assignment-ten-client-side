import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Update = () => {
    // const {id} = useParams();
    const spot = useLoaderData();
    // console.log(spot);

    const { _id, photoUrl, spotName, country, location, description, avgCost, season, travelTime, totalVisitors, } = spot;
    // console.log(spotName)



    // useEffect(() => {
    //     AOS.init();
    // }, [])






    // src = https://i.ibb.co/n0w6p8r/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { isSubmitSuccessful },
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        // mode: "onChange"
    })



    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const photoUrl = data.photoUrl;
        const spotName = data.spotName;
        const country = data.country;
        const location = data.location;
        const description = data.description;
        const avgCost = data.avgCost;
        const season = data.season;
        const travelTime = data.travelTime;
        const totalVisitors = data.totalVisitors;
        const info = { photoUrl, spotName, country, location, description, avgCost, season, travelTime, totalVisitors };
        console.log(info)
        fetch(`https://assignment-ten-server-side-delta.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount == 1) {
                    toast.success('Successfully Updated!');
                    // reset()
                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>Update Spot</title>
            </Helmet>
            <div className="container mx-auto bg-third-color px-6 py-3 rounded-md mb-8">
                <h1 className="text-5xl text-center font-medium mt-5">Update Your Spot</h1>
                <div className="">
                    <form noValidate="" className="space-y-3 mt-10 mb-6 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="photoUrl" className="block  text-lg ">Location URL</label>
                                <input defaultValue={photoUrl} type="text" {...register("photoUrl", { required: true })} placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>

                            <div className="space-y-1 text-sm">
                                <label htmlFor="spotName" className="block  text-lg">Tourists Spot Name</label>
                                <input defaultValue={spotName} type="text" {...register('spotName', { required: true })} placeholder="Spot Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />

                                {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="country" className="block  text-lg">Country Name</label>
                                {/* <input type="text" {...register("country", { required: true })} placeholder="Country" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" /> */}
                                <select className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  "  {...register("country", { required: true })}>
                                    <option value="SelectCountry" className="">Select Country</option>
                                    <option value="Bangladesh" >Bangladesh</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Cambodia">Cambodia</option>
                                </select>
                                {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>

                            <div className="space-y-1 text-sm">
                                <label htmlFor="location" className="block  text-lg">Location</label>
                                <input defaultValue={location} type="text" {...register('location', { required: true })} placeholder="Country Location" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Description" className="block text-lg">Description</label>
                            <input defaultValue={description} type="text" {...register('description', { required: true })} placeholder="Short description" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                        </div>
                        <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="cost" className="block  text-lg">Average Cost</label>
                                <input defaultValue={avgCost} type="text" {...register("avgCost", { required: true })} placeholder="Cost" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>

                            <div className="space-y-1 text-sm">
                                <label htmlFor="seasonality" className="block  text-lg">Seasonality</label>
                                <input defaultValue={season} type="text" {...register('season', { required: true })} placeholder="Summer, Winter..." className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="travelTime" className="block  text-lg">Travel Time</label>
                                <input defaultValue={travelTime} type="text" {...register("travelTime", { required: true })} placeholder="3 days, 7 days.." className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>

                            <div className="space-y-1 text-sm">
                                <label htmlFor="totalVisitorsPerYear" className="block  text-lg">Total Visitors Per Year</label>
                                <input defaultValue={totalVisitors} type="text" {...register('totalVisitors', { required: true })} placeholder="Total visitors" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                        </div>

                        {/* <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block text-lg">Your Name</label>
                                <input defaultValue={user?.displayName} type="text" {...register('name', { required: true })} placeholder="Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="email" className="block  text-lg">Your Email</label>
                                <input defaultValue={user?.email} type="email" {...register("email", { required: true })} placeholder="Email" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.email?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>
                        </div> */}


                        <button className="block w-full p-3 text-center rounded-sm  bg-primary-color text-gray-100 hover:bg-secondary-color font-medium">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;