
import { Check, GitPullRequest, User, X } from "lucide-react";
import { FaCircleUser } from "react-icons/fa6";

const CancellationStatusComponent = ({ cancellationStatus }) => {
    
  const getCancellationContent = () => {
    if (!cancellationStatus) return null;

    switch (cancellationStatus) {
      case "in-progress":
        return {
          statusText: "In Progress",
          statusColor: "text-blue-600",
          button: {
            text: "Cancel The Request",
            color: "bg-[#115e59] hover:bg-teal-700",
          },
          showMarkComplete: true,
        };
      case "accepted":
        return {
          statusText: "Accepted By Service Provider",
          statusColor: "text-green-600",
          button: {
            text: "Request For Refund",
            color: "bg-[#115e59] hover:bg-teal-700",
          },
          showMarkComplete: false,
        };
      case "rejected":
        return {
          statusText: "Rejected By Service Provider",
          statusColor: "text-red-600",
          button: {
            text: "Request Ruling on Dispute",
            color: "bg-[#115E59] ",
          },
          showMarkComplete: true,
          rejectionReason:
            "I request the immediate cancellation of the project due to repeated breaches: poor communication, multiple missed meetings, delays without real progress, and deliverables not meeting agreed standards.",
        };
      default:
        return null;
    }
  };

  const cancellationContent = getCancellationContent();

  if (!cancellationContent) return null;

  return (
    <>
      {/* Cancellation Status Section */}
      <div className="bg-[#E6F4F1] rounded-lg p-4 lg:p-6 mb-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-white rounded-full p-2 hidden lg:block">
            <GitPullRequest className="w-5 h-5 text-[#115E59]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              You Requested To Cancel The Task Via Resolution Center
            </h3>

            {/* Requested By Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-6 border-b pb-6 border-b-gray-300">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="">
                  <FaCircleUser className="text-3xl text-green-900"/>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Requested By</p>
                  <p className="text-gray-600 text-sm">Me</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">15 May 2020 8:00 am</p>
            </div>

            {/* Cancellation Reason */}
            <div className="mb-6 border-b pb-6 border-b-gray-300">
              <h4 className="font-medium text-gray-900 mb-2">
                Cancellation Reason
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I request the immediate cancellation of the project due to
                repeated breaches: poor communication, multiple missed meetings,
                delays without real progress, and deliverables not meeting
                agreed standards. I request a full refund and preservation of
                all evidence in accordance with Fiverr's Terms of Service,
                Article 5.3.
              </p>
            </div>

            {/* evedence */}

            <div className="border-b pb-6 border-b-gray-300">
                 <p>request Evidence</p>

                 <div className="flex flex-wrap">
                     <img src="/evedence.png" alt=""  className="lg:w-64"/>
                     <img src="/evedencee.png" alt="" className="lg:w-64"/>
                     <img src="/evedencee.png" alt="" className="lg:w-64"/>
                 </div>
            </div>

            {/* Status Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-6 pt-6">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="w-6 h-6 bg-[#115E59] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Cancellation Status
                  </p>
                  <p className={`text-sm ${cancellationContent.statusColor}`}>
                    {cancellationContent.statusText}
                  </p>
                </div>
              </div>
              
            </div>

            
          </div>
        </div>
      </div>

  
    </>
  );
};

export default CancellationStatusComponent;
