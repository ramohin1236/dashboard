/* eslint-disable no-unused-vars */
import React from "react";
import { Check, Calendar } from "lucide-react";

const ProgressBarComponent = ({ steps, progressWidth = "66.67%" }) => {
  return (
    <div className="border-[#dedfe2] border-b-2 pb-12">
      <div className="bg-white p-6 rounded-lg shadow-sm border w-full max-w-5xl mx-auto">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          <div
            className="absolute top-6 left-0 h-0.5 bg-[#115E59] z-10 transition-all duration-500"
            style={{ width: progressWidth }}
          ></div>

          {/* Steps */}
          <div className="relative z-20 flex justify-between items-start">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Circle with icon */}
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300
                    ${
                      step.completed
                        ? "bg-[#115E59] border-[#115E59]"
                        : "bg-gray-400 border-gray-400"
                    }
                  `}
                >
                  {step.completed ? (
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  ) : (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Label */}
                <div className="mt-3 min-w-[80px]">
                  <p
                    className={`
                      text-sm font-semibold mb-1 transition-colors duration-300
                      ${step.completed ? "text-gray-900" : "text-gray-400"}
                    `}
                  >
                    {step.label}
                  </p>

                  {/* Date */}
                  {step.date && (
                    <div
                      className={`
                        flex items-center justify-center text-xs transition-colors duration-300
                        ${step.completed ? "text-gray-600" : "text-gray-400"}
                      `}
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{step.date}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;