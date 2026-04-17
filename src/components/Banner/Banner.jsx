import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200  container mx-auto">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h3 className="text-2xl font-bold">Friends to keep close in your life</h3>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary bg-green-900 text-white">+ Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;