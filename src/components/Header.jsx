import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/Movieflex logo.jpg";

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.1) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const navbarClasses = ` fixed  top-0 w-full z-10 " ${scrolling ? 'bg-white shadow-lg text-black ' : 'text-white'}`;


    const links = <>
        <NavLink className="nav" to="/">Home</NavLink>
        <NavLink className="nav" to="/about">Profile</NavLink>
        <NavLink className="nav" to="/events">Events</NavLink>
        <NavLink className="nav" to="/contact">Contact</NavLink>
    </>



    return (
        <div className={navbarClasses} >
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:mr-0 mr-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className=" text-4xl text-[#FE0233] font-bold flex items-center justify-center"><img className="w-14 h-auto rounded mr-2" src={logo} alt="" />MOVIEFLEX</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-normal text-[1.4rem] px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end hidden sm:flex ">
                    <Link to="/register">  <button className="button mr-4">Register</button></Link>
                    <Link to="/login"> <button className="button btn-fill">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;