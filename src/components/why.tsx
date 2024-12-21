import { ArrowLeft, ArrowRight, Landmark } from "lucide-react";
import React from "react";

function Why() {
  return (
    <div className="w-full relative justify-center m-auto">
      <div className="max-w-[1200px] w-full m-auto flex flex-col justify-center mt-10">
        <h3 className="text-xs text-[#2A8E9E] uppercase text-center font-bold">
          Why us
        </h3>
        <h1 className="text-2xl md:text-3xl text-[#1D1E20] text-center font-semibold">
          Why they prefer Finpay
        </h1>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-7 m-auto w-full">
            <div className="bg-[#E9F3F4] rounded-lg p-6 md:p-10 w-full md:w-[400px]">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2A8E9E]">
                3K+
              </h1>
              <h3 className="text-base md:text-xl font-semibold text-[#1D1E20] mt-5">
                Businesses already running on FastPay
              </h3>
            </div>
            <div className="bg-[#E9F3F4] rounded-lg p-6 md:p-10 w-full md:w-[400px]">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#1D1E20]">
                Instant withdraw your funds at any time
              </h1>
              <div className="flex items-center justify-center gap-2 mt-10">
                <div className="flex items-center justify-center bg-teal-600 w-12 h-12 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-6 h-6" />
                  <ArrowLeft className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center bg-gray-800 w-12 h-12 text-white rounded-full">
                  <Landmark />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center m-auto bg-[#E9F3F4] rounded-lg p-6 pb-6 md:pb-0 md:p-14 w-full md:w-[830px] mt-4 gap-6 md:gap-0">
            <div>
              <h2 className="text-xl font-semibold text-[#1D1E20]">
                No assest volatility
              </h2>
              <p className="mt-2 text-xs text-[#2A8E9E]">
                Generate returns on your cash reserves without making any
                investments.
              </p>
            </div>

            <div className="flex flex-col bg-white rounded-b-lg md:rounded-b-none rounded-t-lg shadow p-4">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm text-gray-600">Summary</h4>
                <span className="text-sm text-gray-400">6 Months ▼</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                $1,876,580
              </h2>
              <div className="relative h-28">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 100"
                  className="w-full h-full"
                >
                  <polyline
                    fill="none"
                    stroke="#2A8E9E"
                    strokeWidth="2"
                    points="0,80 50,60 100,65 150,40 200,50 250,30 300,20"
                  />
                </svg>
                <div className=" flex justify-between w-full text-xs text-gray-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
