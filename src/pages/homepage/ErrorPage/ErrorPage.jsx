import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
         <div className="min-h-[70vh] flex items-center justify-center px-4">
      {/* Card */}
      <div className="card bg-base-100 shadow-xl max-w-md w-full text-center">
        <div className="card-body">
          {/* Big 404 */}
          <h1 className="text-6xl font-bold text-error">404</h1>

          {/* Title */}
          <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>

          {/* Description */}
          <p className="opacity-70 mt-2">
            Oops! The page you are looking for does not exist or has been moved.
          </p>

          {/* Action Button */}
          <div className="mt-6">
            <Link to="/">
              <button className="btn btn-success">
                ⬅ Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;