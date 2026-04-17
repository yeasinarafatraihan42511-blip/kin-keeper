
import React, { useEffect, useState } from 'react';

const Friend = () => {

  const [friends, setFriends] = useState([]);
useEffect(() => {
    fetch('/Friend.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className='container mx-auto mt-10'>
      <h2 className='font-bold text-2xl mb-6'>Your Friends</h2>

      
      <div className='grid md:grid-cols-4 gap-6'>
        
        {friends.map((friend) => (
          <div key={friend.id} className="card bg-base-100 shadow-sm">
            
            {/* Image */}
            <figure className="px-6 pt-6">
              <img
                src={friend.picture}   // ✅ dynamic image
                alt={friend.name}
                className="rounded-full h-32 w-32 object-cover"
              />
            </figure>

            {/* Body */}
            <div className="card-body items-center text-center">
              <h2 className="card-title">{friend.name}</h2>

              <p className="text-sm opacity-70">
                {friend.days_since_contact} days ago
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap justify-center mt-2">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="rounded-3xl btn btn-active bg-amber-50  text-amber-950">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <p
                className={`mt-2 text-sm font-semibold ${
                  friend.status === 'overdue'
                    ? 'btn btn-active bg-red-500 text-white rounded-3xl'
                    : friend.status === 'almost due'
                    ? 'btn btn-active bg-yellow-500 text-white rounded-3xl'
                    : 'btn btn-active bg-green-900 text-white rounded-3xl'
                }`}
              >
                {friend.status}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Friend;