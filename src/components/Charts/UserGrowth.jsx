import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserGrowth = () => {
  // Sample data for different years
  const yearlyData = {
    2021: [
      { name: "Page A", uv: 3500, pv: 2100, amt: 2200 },
      { name: "Page B", uv: 2800, pv: 1200, amt: 2000 },
      { name: "Page C", uv: 1800, pv: 8900, amt: 2100 },
      { name: "Page D", uv: 2500, pv: 3500, amt: 1900 },
      { name: "Page E", uv: 1700, pv: 4200, amt: 2000 },
      { name: "Page F", uv: 2200, pv: 3400, amt: 2300 },
      { name: "Page G", uv: 3200, pv: 4000, amt: 1950 },
    ],
    2022: [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    ],
    2023: [
      { name: "Page A", uv: 4500, pv: 2800, amt: 2600 },
      { name: "Page B", uv: 3300, pv: 1600, amt: 2400 },
      { name: "Page C", uv: 2300, pv: 10500, amt: 2500 },
      { name: "Page D", uv: 3100, pv: 4200, amt: 2200 },
      { name: "Page E", uv: 2100, pv: 5200, amt: 2350 },
      { name: "Page F", uv: 2700, pv: 4100, amt: 2700 },
      { name: "Page G", uv: 3800, pv: 4700, amt: 2300 },
    ],
    2024: [
      { name: "Page A", uv: 5000, pv: 3200, amt: 2800 },
      { name: "Page B", uv: 3600, pv: 1800, amt: 2600 },
      { name: "Page C", uv: 2600, pv: 11200, amt: 2700 },
      { name: "Page D", uv: 3400, pv: 4500, amt: 2400 },
      { name: "Page E", uv: 2300, pv: 5600, amt: 2500 },
      { name: "Page F", uv: 3000, pv: 4400, amt: 2900 },
      { name: "Page G", uv: 4100, pv: 5100, amt: 2500 },
    ],
  };

  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMetric, setSelectedMetric] = useState("uv");

  const currentData = yearlyData[selectedYear];
  const years = Object.keys(yearlyData)
    .map(Number)
    .sort((a, b) => b - a);

  const getMetricColor = (metric) => {
    switch (metric) {
      case "uv":
        return "#8884d8";
      case "pv":
        return "#82ca9d";
      case "amt":
        return "#ffc658";
      default:
        return "#8884d8";
    }
  };

  const getMetricLabel = (metric) => {
    switch (metric) {
      case "uv":
        return "Unique Visitors";
      case "pv":
        return "Page Views";
      case "amt":
        return "Amount";
      default:
        return "Unique Visitors";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
          <div className="flex justify-between items-center">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {getMetricLabel(selectedMetric)} - {selectedYear}
              </h2>
              <p className="text-gray-600">
                Performance across different pages
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-gray-700 font-medium">Year:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="bg-white text-gray-700 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year} className="bg-white">
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={currentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis
                  dataKey="name"
                  stroke="#374151"
                  fontSize={12}
                  tickLine={{ stroke: "#374151" }}
                />
                <YAxis
                  stroke="#374151"
                  fontSize={12}
                  tickLine={{ stroke: "#374151" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    color: "#374151",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                />
                <Legend />
                <Bar
                  dataKey={selectedMetric}
                  fill={getMetricColor(selectedMetric)}
                  radius={[4, 4, 0, 0]}
                  name={getMetricLabel(selectedMetric)}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default UserGrowth;
