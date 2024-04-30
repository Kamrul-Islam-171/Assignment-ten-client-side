import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import SpotCard from "../../LayOuts/SpotCard/SpotCard";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const MyLists = () => {
    const { user } = useContext(AuthContext);
    const [myData, setMydata] = useState([]);
    const [deleteCnt, setDeleteCnt] = useState(false)
    const [loading, setLoading] = useState(false);
    console.log(user)

    console.log("hello")

    useEffect(() => {
        setLoading(true);
        fetch(`https://assignment-ten-server-side-delta.vercel.app/mySpots/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMydata(data)
                setLoading(false);
            })
    }, [user, deleteCnt])
    // if(loading) {
    //     <span className="loading loading-spinner loading-lg"></span>
    // }

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-ten-server-side-delta.vercel.app/spot/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount == 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setDeleteCnt(!deleteCnt);

                        }
                    })
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });


            }
        });
    }

    // console.log(myData)
    if (loading) {
        return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    }
    return (
        <div className="container mx-auto mb-12">
            <Helmet>
                <title>My Lists</title>
            </Helmet>
            {/* <div className="grid lg:grid-cols-3 md:grid-cols2 gap-5">
                {
                    myData.map(spotInfo => <SpotCard spotInfo={spotInfo} isShow={true} key={spotInfo._id}></SpotCard>)
                }
            </div> */}

            <div className=" pt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-xl text-primary-color">No</th>
                            <th className="text-xl text-primary-color">Spot Name</th>
                            <th className="text-xl text-primary-color">Country</th>
                            <th className="text-xl text-primary-color">Location</th>

                        </tr>
                    </thead>
                    <tbody className="">

                        {
                            myData.map((item, idx) => <tr key={item._id} className="">
                                <th>{idx + 1}</th>
                                <td>{item.spotName}</td>
                                <td>{item.country}</td>
                                <td>{item.location}</td>
                                <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-2">
                                    <Link to={`/update/${item._id}`}><button title="Edit" className="btn mt-2 mb-2 text-xl border border-primary-color  text-primary-color hover:bg-primary-color hover:text-white"><MdEdit /></button></Link>
                                    <button onClick={() => handleDelete(item._id)} title="Remove" className="btn mt-2 mb-2 text-xl border border-primary-color  text-primary-color hover:bg-primary-color hover:text-white"><MdDeleteForever /></button>
                                </div>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyLists;