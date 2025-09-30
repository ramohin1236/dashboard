/* eslint-disable no-unused-vars */
import { Handshake } from "lucide-react";
import  { useState } from "react";
import { Link } from "react-router";
import Progress from "../components/ManageDispute/Progress";
import { SiGoogletasks } from "react-icons/si";

const ManageDisputeDetails = () => {
  const status = ["Bids", "Progress", "Completed", "Cancelled"];

  const [currentStatus, setCurrentStatus] = useState("Progress");
  return (
    <div className="project_container mx-auto px-3 py-6 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <SiGoogletasks className="text-green-900 text-xl"/>
          <p className="font-semibold text-md md:text-xl text-color mb-1">
            My Tasks
          </p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        {/* Task Title */}
        <h1 className="text-2xl font-bold">Help move a couch</h1>
        <p className="text-sm text-gray-500">Task ID #1233</p>

        {/* Status + Image */}
        <div className="flex gap-3 mt-4 flex-col items-start">
          <p className="py-2 px-4 border text-sm bg-[#FFEDD5] text-[#F97316] rounded-lg">
            Open for {currentStatus}
          </p>
          <img
            src="/work.png"
            alt="task"
            className="lg:w-96 rounded-lg object-cover"
          />
        </div>

        {/* Conditional Sections */}
        <div className="mt-4">
          
          {currentStatus === "Progress" && <Progress />}
          
        </div>
      </div>
    </div>
  );
};

export default ManageDisputeDetails;
