import { ArrowUpRight } from "lucide-react";
import React from "react";

function Plan() {
  return (
    <div className="mb-12">
      <h3 className="text-[#003344] text-xs uppercase text-center font-medium">
        Choose plan:
      </h3>
      <div className="mt-4 flex flex-col md:flex-row gap-5 justify-center m-auto mx-10 md:mx-0">
        <div className="bg-gray-200 text-[#003344] rounded-lg p-6 flex flex-col gap-10 w-full md:w-[400px]">
          <h1 className="text-3xl font-semibold">Plus</h1>
          <div className="flex justify-between items-center text-sm">
            <span>£2.99/month</span>
            <ArrowUpRight />
          </div>
        </div>
        <div className="bg-[#2A8E9E] text-white rounded-lg p-6 flex flex-col gap-10 w-full md:w-[400px]">
          <h1 className="text-3xl font-semibold">Premium</h1>
          <div className="flex justify-between items-center text-sm">
            <span>£6.99/month</span>
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
