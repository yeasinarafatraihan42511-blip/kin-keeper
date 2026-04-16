import React from 'react';
import { NavLink } from 'react-router';
import vector from '../../../assets/vector.png';
import clock from '../../../assets/clock.png';
import chartline from '../../../assets/chartline.png';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow px-6 container mx-auto bg-white">
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
                        <img src={vector} alt="Vector" /> <span>Home</span>
                    </NavLink>
                </div>

                <NavLink to="/timeline" className="btn">
                    <img src={clock} alt="Clock" /> <span>Timeline</span>
                </NavLink>
                <NavLink to="/stats" className="btn">
                    <img src={chartline} alt="Chart Line" /> <span>Stats</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;