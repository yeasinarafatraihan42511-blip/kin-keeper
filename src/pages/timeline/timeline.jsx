// import React from 'react';

// const Timeline = () => {
//     return (
//         <div>
//             <h2>Timeline</h2>
//         </div>
//     );
// };

// export default Timeline;
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
import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const filtered =
    filter === "all" ? data : data.filter((d) => d.type === filter);

  const icon = {
    call: "📞",
    text: "💬",
    video: "🎥",
    meetup: "🤝",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      {/* Filter */}
      <select
        className="select select-bordered mb-6 w-60"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      {/* List */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-4 flex items-center gap-4 shadow-sm"
          >
            <div className="text-2xl">{icon[item.type]}</div>

            <div>
              <p className="font-semibold">
                {item.type.charAt(0).toUpperCase() +
                  item.type.slice(1)}{" "}
                with {item.name}
              </p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;