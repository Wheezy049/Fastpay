import { ArrowUpRight } from "lucide-react";
import React from "react";

function GetStarted() {
  return (
    <div className="w-full relative flex justify-center m-auto z-10">
      <div className=" max-w-[1200px] w-full bg-[#003344] flex flex-col md:flex-row justify-center m-0 md:m-auto mx-10 md:mx-0 items-center gap-10 md:gap-20 rounded-lg p-10 md:p-20 relative -bottom-12">
        <div className="w-full md:w-1/2">
          <h3 className="uppercase text-xs text-[#2A8E9E] font-medium">
            Try it now
          </h3>
          <h1 className="text-2xl md:text-4xl text-white font-semibold">
            Ready to level up your payment process?
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Supports small businesses with simple invoicing, powerful
            integrations, and cash management tools.
          </p>
        </div>
        <div className=" w-full md:w-1/2 flex flex-col md:flex-row gap-4">
          <button className="flex justify-center p-4 bg-[#2A8E9E] text-white font-semibold text-xl rounded-md hover:bg-[#1a6f6f]">
            Get Started Now
          </button>
          <button className="flex justify-center p-4 border border-[#2A8E9E] text-white font-semibold text-xl rounded-md hover:bg-[#2A8E9E] hover:text-white hover:border-transparent items-center gap-2">
            Learn More <ArrowUpRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
