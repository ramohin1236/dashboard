/* eslint-disable no-unused-vars */
import { useState } from 'react'
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

const EarningHistory = () => {
     const yearlyData = {
        2021: [
          { name: "jan", uv: 3500, pv: 2100, amt: 2200 },
          { name: "Feb", uv: 2800, pv: 1200, amt: 2000 },
          { name: "Mar", uv: 1800, pv: 8900, amt: 2100 },
          { name: "Apr", uv: 2500, pv: 3500, amt: 1900 },
          { name: "May", uv: 1700, pv: 4200, amt: 2000 },
          { name: "June", uv: 2200, pv: 3400, amt: 2300 },
          { name: "jul", uv: 3200, pv: 4000, amt: 1950 },
          { name: "Aug", uv: 3200, pv: 4000, amt: 1950 },
          { name: "Sep", uv: 3200, pv: 4000, amt: 1950 },
          { name: "Oct", uv: 3200, pv: 4000, amt: 1950 },
          { name: "Nov", uv: 3200, pv: 4000, amt: 1950 },
          { name: "Dec", uv: 3200, pv: 4000, amt: 1950 },
        ],
        2022: [
          { name: "jan", uv: 4000, pv: 2400, amt: 2400 },
          { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
          { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
          { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
          { name: "May", uv: 1890, pv: 4800, amt: 2181 },
          { name: "June", uv: 2390, pv: 3800, amt: 2500 },
          { name: "jul", uv: 3490, pv: 4300, amt: 2100 },
          { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
          { name: "Sep", uv: 3490, pv: 4300, amt: 2100 },
          { name: "Oct", uv: 3490, pv: 4300, amt: 2100 },
          { name: "Nov", uv: 3490, pv: 4300, amt: 2100 },
          { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
        ],
        2023: [
          { name: "jan", uv: 4500, pv: 2800, amt: 2600 },
          { name: "Feb", uv: 3300, pv: 1600, amt: 2400 },
          { name: "Mar", uv: 2300, pv: 10500, amt: 2500 },
          { name: "Apr", uv: 3100, pv: 4200, amt: 2200 },
          { name: "May", uv: 2100, pv: 5200, amt: 2350 },
          { name: "June", uv: 2700, pv: 4100, amt: 2700 },
          { name: "jul", uv: 3800, pv: 4700, amt: 2300 },
          { name: "Aug", uv: 3800, pv: 4700, amt: 2300 },
          { name: "Sep", uv: 3800, pv: 4700, amt: 2300 },
          { name: "Oct", uv: 3800, pv: 4700, amt: 2300 },
          { name: "Nov", uv: 3800, pv: 4700, amt: 2300 },
          { name: "Dec", uv: 3800, pv: 4700, amt: 2300 },
        ],
        2024: [
          { name: "jan", uv: 5000, pv: 3200, amt: 2800 },
          { name: "Feb", uv: 3600, pv: 1800, amt: 2600 },
          { name: "Mar", uv: 2600, pv: 11200, amt: 2700 },
          { name: "Apr", uv: 3400, pv: 4500, amt: 2400 },
          { name: "May", uv: 2300, pv: 5600, amt: 2500 },
          { name: "June", uv: 3000, pv: 4400, amt: 2900 },
          { name: "jul", uv: 4100, pv: 5100, amt: 2500 },
          { name: "Aug", uv: 4100, pv: 5100, amt: 2500 },
          { name: "Sep", uv: 4100, pv: 5100, amt: 2500 },
          { name: "Oct", uv: 4100, pv: 5100, amt: 2500 },
          { name: "Nov", uv: 4100, pv: 5100, amt: 2500 },
          { name: "Dec", uv: 4100, pv: 5100, amt: 2500 },
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
            return "#115E59";
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
            return "Task Providers growth";
          case "pv":
            return "Page Views";
          case "amt":
            return "Amount";
          default:
            return "Task Providers growth";
        }
      };
    
  return (
     <div className=" p-6 w-full">
          <div className="">
            
    
            {/* Chart */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <div className="mb-2">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {getMetricLabel(selectedMetric)} - {selectedYear}
                  </h2>
                
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
              <div className="h-64">
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
  )
}

export default EarningHistory