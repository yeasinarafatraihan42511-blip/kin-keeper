
import React, { use, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router';
import { IoCallSharp } from "react-icons/io5";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { toast } from 'react-toastify';



const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [friend, setFriend] = useState(null);


  useEffect(() => {
    fetch("/Friend.json")
      .then(res => res.json())
      .then(data => {
        const singleFriend = data.find(f => f.id == id);
        setFriend(singleFriend);
      });
  }, [id]);


  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      name: friend.name,
      date: new Date().toLocaleDateString()
    };


    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([...existing, newEntry]));


   toast.success("Entry added to timeline!");
   navigate("/timeline");
  };

  if (!friend) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">


      <div className="card bg-base-100 shadow p-6 text-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />

        <h2 className="text-xl font-bold mt-4">{friend.name}</h2>


        <p className={`mt-2 font-semibold  ${friend.status === "overdue"
            ? "btn btn-active bg-red-500 text-white rounded-3xl w-fit flex justify-center"
            : friend.status === "almost due"
              ? "btn btn-active bg-yellow-500 text-white rounded-3xl w-fit"
              : "btn btn-active bg-green-900 text-white rounded-3xl w-fit flex justify-center text-center"
          }`}>
          {friend.status}
        </p>


        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span key={i} className="rounded-3xl btn btn-active bg-amber-50  text-amber-950">{tag}</span>
          ))}
        </div>

        <p className="mt-3 text-sm opacity-70">{friend.bio}</p>
        <p className="text-sm mt-1">{friend.email}</p>


        <div className="mt-4 space-y-2">
          <button className="btn w-full"><FaClock /> Snooze 2 Weeks</button>
          <button className="btn w-full"><FaBoxArchive /> Archive</button>
          <button className="btn btn-error w-full"><MdDelete /> Delete</button>
        </div>
      </div>


      <div className="space-y-6">


        <div className="grid grid-cols-3 gap-4">
          <div className="card p-4 text-center shadow">
            <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
            <p className="text-sm">Days Since Contact</p>
          </div>

          <div className="card p-4 text-center shadow">
            <h3 className="text-xl font-bold">{friend.goal}</h3>
            <p className="text-sm">Goal (Days)</p>
          </div>

          <div className="card p-4 text-center shadow">
            <h3 className="text-xl font-bold">{friend.next_due_date}</h3>
            <p className="text-sm">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="card p-4 shadow flex justify-between  ">
          <div>
            <h3 className="font-semibold">Relationship Goal</h3>
            <p className="text-sm opacity-70">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>
          <div>
            <button className="btn btn-sm">Edit</button>
          </div>


        </div>


        <div className="card p-4 shadow">
          <h3 className="font-semibold mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">

            <button
              onClick={() => handleAction("call")}
              className="btn flex flex-col"
            >
              <div className='flex gap-4 items-center'>{<IoCallSharp />} Call</div>
            </button>

            <button
              onClick={() => handleAction("text")}
              className="btn flex flex-col"
            >
              <div className='flex gap-4 items-center'>{<BiMessageDots />} Text</div>
            </button>

            <button
              onClick={() => handleAction("video")}
              className="btn flex flex-col"
            >
              <div className='flex gap-4 items-center'>{<BsFillCameraReelsFill />} Video</div>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;











// import React, { use } from 'react';
// import { useParams } from 'react-router';
// import Friend from '../friends/Friend';


// const friendPromise = fetch("/Friend.json").then(res => res.json());
// const FriendDetails = () => {
//     const { id } = useParams();
//     console.log(id, "friend ID");
//     const friend = use(friendPromise);
//     console.log(friend, "friend details");
//     const expectedFriend = friend.find((friend) => friend.id == Number(id));
//     console.log(expectedFriend, "expected friend details");
//     return (
//           <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">

//       {/* 🔵 LEFT SIDE */}
//       <div className="card bg-base-100 shadow p-6 text-center">
//         <img
//           src={friend.picture}
//           alt={friend.name}
//           className="w-24 h-24 rounded-full mx-auto object-cover"
//         />

//         <h2 className="text-xl font-bold mt-4">{friend.name}</h2>

//         {/* Status */}
//         <p className={`mt-2 font-semibold ${
//           friend.status === "overdue"
//             ? "text-red-500"
//             : friend.status === "almost due"
//             ? "text-yellow-500"
//             : "text-green-500"
//         }`}>
//           {friend.status}
//         </p>

//         {/* Tags */}
//         <div className="flex justify-center gap-2 mt-2 flex-wrap">
//           {Friend.tags.map((tag, i) => (
//             <span key={i} className="badge badge-outline">{tag}</span>
//           ))}
//         </div>

//         <p className="mt-3 text-sm opacity-70">{friend.bio}</p>
//         <p className="text-sm mt-1">{friend.email}</p>

//         {/* Action buttons */}
//         <div className="mt-4 space-y-2">
//           <button className="btn w-full">⏰ Snooze 2 Weeks</button>
//           <button className="btn w-full">📦 Archive</button>
//           <button className="btn btn-error w-full">🗑️ Delete</button>
//         </div>
//       </div>

//       {/* 🔵 RIGHT SIDE */}
//       <div className="space-y-6">

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="card p-4 text-center shadow">
//             <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
//             <p className="text-sm">Days Since Contact</p>
//           </div>

//           <div className="card p-4 text-center shadow">
//             <h3 className="text-xl font-bold">{friend.goal}</h3>
//             <p className="text-sm">Goal (Days)</p>
//           </div>

//           <div className="card p-4 text-center shadow">
//             <h3 className="text-xl font-bold">{friend.next_due_date}</h3>
//             <p className="text-sm">Next Due</p>
//           </div>
//         </div>

//         {/* Relationship Goal */}
//         <div className="card p-4 shadow flex justify-between items-center">
//           <div>
//             <h3 className="font-semibold">Relationship Goal</h3>
//             <p className="text-sm opacity-70">
//               Connect every <span className="font-bold">{friend.goal} days</span>
//             </p>
//           </div>
//           <button className="btn btn-sm">Edit</button>
//         </div>

//         {/* 🔥 Quick Check-In */}
//         <div className="card p-4 shadow">
//           <h3 className="font-semibold mb-4">Quick Check-In</h3>

//           <div className="grid grid-cols-3 gap-4">

//             <button
//               onClick={() => handleAction("call")}
//               className="btn flex flex-col"
//             >
//               📞 Call
//             </button>

//             <button
//               onClick={() => handleAction("text")}
//               className="btn flex flex-col"
//             >
//               💬 Text
//             </button>

//             <button
//               onClick={() => handleAction("video")}
//               className="btn flex flex-col"
//             >
//               🎥 Video
//             </button>

//           </div>
//         </div>

//       </div>
//     </div>
//     );
// };

// export default FriendDetails;






// import React, { useEffect, useState } from "react";
// import {useParams } from "react-router";

// const FriendDetails = () => {
//   const { id } = useParams();
//   const [friends, setFriends] = useState([]);
//   const [expectedFriend, setExpectedFriend] = useState(null);

//   useEffect(() => {
//     fetch("/Friend.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setFriends(data);
//         const single = data.find((f) => f.id == Number(id));
//         setExpectedFriend(single);
//       });
//   }, [id]);

//   if (!expectedFriend) {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">

//       {/* LEFT */}
//       <div className="card bg-base-100 shadow p-6 text-center">
//         <img
//           src={expectedFriend.picture}
//           alt={expectedFriend.name}
//           className="w-24 h-24 rounded-full mx-auto object-cover"
//         />

//         <h2 className="text-xl font-bold mt-4">
//           {expectedFriend.name}
//         </h2>

//         {/* Status */}
//         <p className={`mt-2 font-semibold ${
//           expectedFriend.status === "overdue"
//             ? "btn btn-active bg-red-500 text-white rounded-3xl px-5 py-1"
//             : expectedFriend.status === "almost due"
//             ? "btn btn-active bg-yellow-500 text-white rounded-3xl"
//             : "text-green-500"
//         }`}>
//           {expectedFriend.status}
//         </p>

//         {/* Tags */}
//         <div className="flex justify-center gap-2 mt-2 flex-wrap">
//           {expectedFriend.tags?.map((tag, i) => (
//             <span key={i} className="rounded-3xl btn btn-active bg-amber-50  text-amber-950">
//               {tag}
//             </span>
//           ))}
//         </div>

//         <p className="mt-3 text-sm opacity-70">
//           {expectedFriend.bio}
//         </p>
//         <p className="text-sm mt-1">
//           {expectedFriend.email}
//         </p>

//         <div className="mt-4 space-y-2">
//           <button className="btn w-full">⏰ Snooze 2 Weeks</button>
//           <button className="btn w-full">📦 Archive</button>
//           <button className="btn btn-error w-full">🗑️ Delete</button>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="space-y-6">

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="card p-4 text-center shadow">
//             <h3 className="text-xl font-bold">
//               {expectedFriend.days_since_contact}
//             </h3>
//             <p className="text-sm">Days Since Contact</p>
//           </div>

//           <div className="card p-4 text-center shadow">
//             <h3 className="text-xl font-bold">
//               {expectedFriend.goal}
//             </h3>
//             <p className="text-sm">Goal (Days)</p>
//           </div>

//           <div className="card p-4 text-center shadow">
//             <h3 className="text-xl font-bold">
//               {expectedFriend.next_due_date}
//             </h3>
//             <p className="text-sm">Next Due</p>
//           </div>
//         </div>

//         {/* Goal */}
//         <div className="card p-4 shadow flex justify-between items-center mt-1">
//           <div>
//             <h3 className="font-semibold">Relationship Goal</h3>
//             <p className="text-sm opacity-70">
//               Connect every{" "}
//               <span className="font-bold">
//                 {expectedFriend.goal} days
//               </span>
//             </p>
//           </div>
//           <button className="btn btn-sm">Edit</button>
//         </div>

//         {/* Quick */}
//         <div className="card p-4 shadow mt-13">
//           <h3 className="font-semibold mb-4">Quick Check-In</h3>

//           <div className="grid grid-cols-3 gap-4 mt-10">
//             <button  className="btn flex flex-col" onClick={() => handleAction("call")}>
//               📞 Call
//             </button>
//             <button  className="btn flex flex-col" onClick={() => handleAction("text")}>
//               💬 Text
//             </button>
//             <button  className="btn flex flex-col" onClick={() => handleAction("video")}>
//               🎥 Video
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FriendDetails;
