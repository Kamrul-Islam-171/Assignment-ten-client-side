import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const NavBar = () => {

    const { user, userLogOut } = useContext(AuthContext);
    // const [photo, setPhoto] = useState(null);
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const handleLogout = () => {
        console.log('please logout');
        userLogOut()
            .then(() => {
                console.log('sign out successfully');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navlinks = <>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : " font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/'>Home</NavLink>

        {
            user &&
            <>

                <NavLink className={({ isActive }) =>
                    isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : " font-medium  p-2 rounded-lg hover:text-primary-color"
                } to='/userProfile'>User Profile</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
                } to='/updateProfile'>Update Profile</NavLink>

            </>
        }
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
        } to={`/blogs/${1}`}>Blogs</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/feedbacks'>Feedbacks</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "  font-medium border-b-2 border-primary-color text-primary-color p-2" : "font-medium  p-2 rounded-lg hover:text-primary-color"
        } to='/about'>About Us</NavLink>
    </>
    return (
        <div className="fixed top-0 z-10 w-full ">
            <div className="navbar bg-base-100 lg:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul onClick={scrollToTop} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link onClick={scrollToTop} to={'/'} className="btn btn-ghost font-bold text-lg md:text-xl lg:text-2xl ">Tourista <span className="text-primary-color"></span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul onClick={scrollToTop} className="menu menu-horizontal px-1 flex gap-5">
                        {navlinks}
                    </ul>
                </div>
                {/* {
                    user ?
                    <>
                    <button className="btn bg-primary-color text-white">Logout</button>
                    </> 
                    : 
                    <p>login</p>
                } */}
                <div className="navbar-end space-x-3 ">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end tooltip tooltip-bottom tooltip-success tooltip-" data-tip={user?.displayName}>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 rounded-full">
                                            <img alt="Not found" src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/userProfile' className="justify-between">
                                                Profile

                                            </Link>
                                        </li>
                                        <li><Link>{user?.displayName}</Link></li>

                                    </ul>
                                </div>

                                <div onClick={scrollToTop} className='border  rounded-lg hover:border-primary-color'>
                                    <button onClick={handleLogout} className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium  border-none px-5">LogOut</button>
                                </div>
                            </>
                            :
                            <>
                                <div onClick={scrollToTop} className='border  rounded-lg hover:border-primary-color'>
                                    <Link to='/login' className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium  border-none px-5">LogIn</Link>
                                </div>
                                <div onClick={scrollToTop} className='border  rounded-lg hover:border-primary-color'>
                                    <Link to='/register' className="btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium  border-none px-5">Register</Link>
                                </div>
                            </>
                    }
                  
                </div>


            </div>

          
          



        </div>
    );
};

export default NavBar;