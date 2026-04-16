import React from 'react';




const Footer = () => {
    return (
        <footer className="bg-green-900 text-white mt-10 container mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Brand */}
        <h2 className="text-2xl font-bold">KeenKeeper</h2>
        <p className="text-sm opacity-80 mt-2">
          Keep your meaningful friendships alive with timely check-ins.
        </p>

        {/* Social / Links (static for assignment) */}
        <div className="flex justify-center gap-4 mt-4">
          <span className="badge badge-outline">FB</span>
          <span className="badge badge-outline">TW</span>
          <span className="badge badge-outline">IG</span>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-center gap-6 mt-6 text-sm opacity-80">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact</span>
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-60 mt-6">
          © 2026 KeenKeeper. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;