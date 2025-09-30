// cancellationStatus should be

import CancellationStatusComponent from "./CancellationStatusComponent";
import DateExtensionRequestSection from "./DateExtensionRequestSection";
import PricingSection from "./PricingSection";
import ProgressBarComponent from "./ProgressBarComponent";
import TaskDetailsSection from "./TaskDetailsSection";
import TaskInfoSection from "./TaskInfoSection";

// cancellationStatus = "in-progress"
// cancellationStatus = "accepted"
// cancellationStatus = "rejected"
// cancellationStatus = null

const Progress = ({
  cancellationStatus = "in-progress",
  extensionStatus = "in-progress",
}) => {
  const steps = [
    { id: 1, label: "Offered", date: "Feb 21, 2023", completed: true },
    { id: 2, label: "In Progress", date: "Feb 21, 2023", completed: true },
    { id: 3, label: "Completed on", date: "", completed: false },
  ];

  return (
    <div>
      <div className="flex flex-col gap-12 ">
        {/* Task Info Section */}
        <TaskInfoSection />

        {/* Task Details Section */}
        <TaskDetailsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Progress Bar */}
        <ProgressBarComponent steps={steps} progressWidth="50%" />

        {/* Cancellation Status Section (conditional) */}
        <div className="flex flex-col lg:flex-row gap-20">
          <CancellationStatusComponent
            cancellationStatus={cancellationStatus}
          />
          <DateExtensionRequestSection extensionStatus={extensionStatus} />
        </div>
     
      </div>
         <div className="flex flex-wrap gap-2 lg:gap-8 justify-start">
          <button className="px-6 py-2.5 bg-[#E6F4F1] text-[#115E59] border-1 [#115E59] rounded-md transition-colors font-medium cursor-pointer">
            Approve Extension
          </button>
          <button className="px-6 py-2.5 bg-[#E6F4F1] text-[#115E59] border-1 [#115E59] rounded-md transition-colors font-medium cursor-pointer">
            Reject Extension
          </button>
          <button className="px-6 py-2.5 bg-[#FEE2E2] text-[#EF4444] border-1 [#115E59] rounded-md transition-colors font-medium cursor-pointer">
            Cancel this Task & Refund
          </button>
        </div>
    </div>
  );
};

export default Progress;
