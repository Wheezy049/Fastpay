import { Landmark, Repeat, ShieldHalf } from "lucide-react";
import React from "react";

function Hero2() {
  return (
    <div className="w-full flex justify-center m-auto relative">
      <div className="max-w-[1200px] w-full bg-white justify-center items-center m-0 rounded-lg p-0 md:p-20 shadow-none md:shadow-md border-none md:border mb-10 mx-10 md:m-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-0 md:gap-10 w-full">
          <div className="">
            <h3 className="font-semibold text-[#2A8E9E] text-xs">
              FUTURE PAYMENT
            </h3>
            <h1 className="text-3xl md:text-4xl text-[#1D1E20]">
              Experience that grows with your scale.
            </h1>
          </div>
          <p className="text-base md:text-xl text-[#2A8E9E]">
            Design a financial operating system that works for your business and
            streamlined cash flow management
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 mt-14">
          <div className="flex flex-col gap-">
            <Repeat className="w-6 h-6 text-[#2A8E9E]" />
            <h2 className="text-xl font-semibold text-[#1D1E20]">
              Free transfers
            </h2>
            <p className="text-sm text-[#2A8E9E]">
              Create a financial experience and automate repeat purchases by
              scheduling recurring payments.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Landmark className="w-6 h-6 text-[#2A8E9E]" />
            <h2 className="text-xl font-semibold text-[#1D1E20]">
              Multiple account
            </h2>
            <p className="text-sm text-[#2A8E9E]">
              Create a financial experience and automate repeat purchases by
              scheduling recurring payments.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <ShieldHalf className="w-6 h-6 text-[#2A8E9E]" />
            <h2 className="text-xl font-semibold text-[#1D1E20]">
              Unmatched security
            </h2>
            <p className="text-sm text-[#2A8E9E]">
              Create a financial experience and automate repeat purchases by
              scheduling recurring payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
