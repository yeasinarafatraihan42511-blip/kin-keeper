import React from 'react';

const Timeline = () => {
    return (
        <div>
            <h2>Timeline</h2>
        </div>
    );
};

export default Timeline;
// import { useEffect, useState } from "react";

// const Timeline = () => {
//   const [timeline, setTimeline] = useState([]);

//   // 🔥 load data from localStorage
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("timeline")) || [];
//     setTimeline(data.reverse()); // latest first
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Timeline</h1>

//       <div className="space-y-4">

//         {timeline.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No interactions yet
//           </p>
//         ) : (
//           timeline.map((item) => (
//             <div
//               key={item.id}
//               className="card bg-base-100 shadow p-4 flex items-center gap-4"
//             >
              
//               {/* Icon */}
//               <div className="text-2xl">
//                 {item.type === "call" && "📞"}
//                 {item.type === "text" && "💬"}
//                 {item.type === "video" && "🎥"}
//               </div>

//               {/* Content */}
//               <div>
//                 <h3 className="font-semibold">
//                   {item.type.charAt(0).toUpperCase() + item.type.slice(1)} with {item.name}
//                 </h3>
//                 <p className="text-sm opacity-70">{item.date}</p>
//               </div>

//             </div>
//           ))
//         )}

//       </div>
//     </div>
//   );
// };

// export default Timeline;