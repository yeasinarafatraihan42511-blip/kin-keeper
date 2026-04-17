// import React from 'react';

// const Stats = () => {
//     return (
//         <div>
//             <h2>Stats</h2>
//         </div>
//     );
// };

// export default Stats;
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#6D28D9", "#1F2937", "#10B981"];

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];

    const count = {
      text: 0,
      call: 0,
      video: 0,
    };

    stored.forEach((item) => {
      if (count[item.type] !== undefined) {
        count[item.type]++;
      }
    });

    setData([
      { name: "Text", value: count.text },
      { name: "Call", value: count.call },
      { name: "Video", value: count.video },
    ]);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <p className="mb-4 font-medium">
          By Interaction Type
        </p>

        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={110}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Analytics;