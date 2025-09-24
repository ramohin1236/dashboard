import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 600 },
  { month: "Mar", earnings: 1500 },
  { month: "Apr", earnings: 1000 },
  { month: "May", earnings: 800 },
  { month: "Jun", earnings: 1100 },
  { month: "Jul", earnings: 700 },
  { month: "Aug", earnings: 900 },
  { month: "Sep", earnings: 1000 },
  { month: "Oct", earnings: 1400 },
  { month: "Nov", earnings: 300 },
  { month: "Dec", earnings: 1100 },
];

const Earnings = () => {
  return (
    <div className="flex gap-12">
      <div className="w-[450px] relative flex flex-col pt-10 pl-12 shadow-md rounded-2xl overflow-clip bg-gradient-to-bl from-[#E6F4F1] to-white">
        <div className="absolute bottom-0 right-0">
          <img src="/bg_image.png" className="w-72" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <img src="/money.png" className="w-16" alt="" />
            <p>Total Earnings</p>
            <p className="text-4xl font-bold text-[#115E59]">₦23,0900</p>
        </div>
      </div>

      <div className="w-full h-80 bg-white shadow-md rounded-xl p-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Earnings growth
          </h2>
          <select className="border rounded px-2 py-1 text-sm">
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#115E59" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Earnings;
