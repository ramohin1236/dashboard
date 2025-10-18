import LastEarnHistory from "../components/Charts/LastEarnHistory";
import EarningHistory from "../components/Charts/EarningHistory";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const Earnings = () => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-10">
        <Link
          to="/manage-dispute"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Earning
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 lg:h-96">
        <div className="lg:w-[550px] md:h-64 lg:h-96 relative flex flex-col pt-10 pl-12 shadow-md rounded-2xl overflow-clip bg-gradient-to-bl from-[#E6F4F1] to-white">
          <div className="absolute bottom-0 right-0">
            <img src="/bg_image.png" className="w-72" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <img src="/money.png" className="w-16" alt="" />
            <p>Total Earnings</p>
            <p className="text-4xl font-bold text-[#115E59]">₦23,0900</p>
          </div>
        </div>
        <div className="flex-1">
          <EarningHistory />
        </div>
      </div>

      <div>
        <LastEarnHistory />
      </div>
    </div>
  );
};

export default Earnings;
