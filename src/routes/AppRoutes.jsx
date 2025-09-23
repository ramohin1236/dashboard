import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import TaskProviders from "../pages/TaskProviders";
import ActiveTasks from "../pages/ActiveTasks";
import ServiceCategory from "../pages/ServiceCategory";
import ManageReferrals from "../pages/ManageReferrals";
import ManagePromo from "../pages/ManagePromo";
import ManagePayments from "../pages/ManagePayments";
import ManageRefund from "../pages/ManageRefund";
import ManageDispute from "../pages/ManageDispute";
import Earnings from "../pages/Earnings";
import ProfileSetting from "../pages/ProfileSetting";
import FAQ from "../pages/FAQ";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import UserBlock from "../components/Tabs/UserBlock";
import TaskProviderDetails from "../pages/TaskProviderDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout with Sidebar + Topbar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="task-providers" element={<TaskProviders />} />
          <Route path="active-tasks" element={<ActiveTasks />} />
          <Route path="block-user" element={<UserBlock />} />
          <Route path="taskproviders-details" element={<TaskProviderDetails />} />
          <Route path="service-category" element={<ServiceCategory />} />
          <Route path="manage-referrals" element={<ManageReferrals />} />
          <Route path="manage-promo" element={<ManagePromo />} />
          <Route path="manage-payments" element={<ManagePayments />} />
          <Route path="manage-refund" element={<ManageRefund />} />
          <Route path="manage-dispute" element={<ManageDispute />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-condition" element={<TermsCondition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
