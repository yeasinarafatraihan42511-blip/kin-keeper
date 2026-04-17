import { IoCallSharp } from "react-icons/io5";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
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
    call: <IoCallSharp />,
    text: <BiMessageDots />,
    video: <BsFillCameraReelsFill />,
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
            className="bg-white  rounded-xl p-4 flex items-center gap-4 shadow-sm"
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