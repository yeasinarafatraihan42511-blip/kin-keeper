import React from 'react';
import { NavLink } from 'react-router';
// import vector from '../../../assets/vector.png';
// import clock from '../../../assets/clock.png';
// import chartline from '../../../assets/chartline.png';
import { Link } from 'react-router';
import { AiTwotoneHome } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";


const Navbar = () => {
    const links = [
        { to: "/", label: "Home", icon: AiTwotoneHome },
        { to: "/timeline", label: "Timeline", icon: RiTimeLine },
        { to: "/stats", label: "Stats", icon: TfiStatsUp },
    ];
    return (
        <div className="navbar bg-base-100 shadow px-12  bg-white">
            {/* Left - Logo */}
            <div className="flex-1">
                <h1 className="text-xl font-bold">Keen<span className="text-green-800">Keeper</span></h1>
            </div>

            {/* Right - Links */}
            <div className="flex gap-6 flex-1 justify-end">
                <div className=' flex justify-between'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-white font-bold btn btn-active bg-amber-900 " : "btn"
                        }
                    >
                       <AiTwotoneHome /> <span>Home</span>
                    </NavLink>
                </div>

                <NavLink to={links[1].to} className={({ isActive }) =>
                            isActive ? "text-white font-bold btn btn-active bg-amber-900 " : "btn"
                        }>
                    <RiTimeLine /> <span>Timeline</span>
                </NavLink>
                <NavLink to={links[2].to} className={({ isActive }) =>
                            isActive ? "text-white font-bold btn btn-active bg-amber-900 " : "btn"
                        }>
                    <TfiStatsUp /> <span>Stats</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;