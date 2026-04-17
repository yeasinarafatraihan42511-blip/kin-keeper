import React from 'react';
import { NavLink } from 'react-router';
import instagram from '../../../../../public/instagram.png';
import facebook from '../../../../../public/facebook.png';
import twitter from '../../../../../public/twitter.png';





const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-10 ">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Brand */}
        <h2 className="text-3xl font-bold">KeenKeeper</h2>
        <p className="text-sm opacity-80 mt-2 ">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        {/* Social Links  */}
        <div>
          <div>
            <h2 className='text-bold text-2xl'>Social Links</h2>

          </div>
          <div className="flex justify-center gap-4 mt-4">
            <span className=""><img src={instagram} alt="Instagram" /></span>

            <span className=""><img src={facebook} alt="Facebook" /></span>
            <span className=""><img src={twitter} alt="Twitter" /></span>


          </div>
        </div>

        <div className=' flex justify-between px-6'>
          {/* Copyright */}
          <p className="text-xs opacity-60 mt-6">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          {/* Bottom Links */}
          <div className="flex justify-center gap-6 mt-6 text-sm opacity-80">

            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact</span>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;