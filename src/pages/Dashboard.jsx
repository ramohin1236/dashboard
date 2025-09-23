import React from "react";
import UserGrowth from "../components/Charts/UserGrowth";
import TaskProviderGrowth from "../components/Charts/TaskProviderGrowth";
import RecentlyJoinedUserTable from "../components/Table/RecentlyJoinedUserTable";
import DashboardStatsCard from "../components/Cards/DashboardStatsCard";

const Dashboard = () => {
  return (
    <div className="">
      <DashboardStatsCard />
      <div className="flex flex-col md:flex-row">
        <UserGrowth />
        <TaskProviderGrowth />
      </div>
      <RecentlyJoinedUserTable />
    </div>
  );
};

export default Dashboard;
