
import { Calendar, MapPin, MessageCircle, User } from "lucide-react";

const TaskInfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:gap-96">
      {/* left side */}
      <div>
        <div className="flex mt-8 items-center gap-3">
          <div className="bg-[#E6F4F1] rounded-full p-2 md:p-3">
            <User className="w-4 md:w-6 h-4 md:h-6 text-[#115E59]" />
          </div>
          <div>
            <p className="text-base md:text-xl font-semibold"> Posted by</p>
            <p className="text-[#6B7280] text-sm">Marvin Fey</p>
          </div>
        </div>
        <div className="flex mt-8 items-center gap-3">
          <div className="bg-[#E6F4F1] rounded-full p-2 md:p-3">
            <MapPin className="text-[#115E59] text-sm md:text-xl" />
          </div>
          <div>
            <p className="text-base md:text-xl font-semibold"> Location</p>
            <p className="text-[#6B7280] text-sm">New York, USA</p>
          </div>
        </div>
     
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div className="flex mt-8 items-center gap-3">
          <div className="bg-[#E6F4F1] rounded-full p-2 md:p-3">
            <User className="w-4 md:w-6 h-4 md:h-6 text-[#115E59]" />
          </div>
          <div>
            <p className="text-base md:text-xl font-semibold"> Assigned To</p>
            <p className="text-[#6B7280] text-sm">Marvin Fey</p>
          </div>
        </div>
        <div className="flex mt-8 items-center gap-3">
          <div className="bg-[#E6F4F1] rounded-full p-2 md:p-3 ">
            <Calendar className="text-[#115E59] text-sm md:text-xl" />
          </div>
          <div>
            <p className="text-base md:text-xl font-semibold">To Be Done On</p>
            <p className="text-[#6B7280] text-sm">15 May 2020 8:00 am</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfoSection;