import React from "react";

function Hero3() {
  return (
    <div className="w-full bg-[#003344] relative">
      <div className="max-w-[1200px] w-full mb-10  flex flex-col justify-center m-auto p-10 md:p-20 relative">
        <h4 className="text-xs text-[#2A8E9E] font-semibold uppercase">Step</h4>
        <h1 className="text-white text-2xl md:text-4xl font-semibold w-full md:w-1/2">
          Maximize your returns with a Reserve account that generates.
        </h1>
        <div className="mt-10 flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="rounded-lg p-5 bg-opacity-30 bg-gray-700">
            <span className="text-4xl font-bold text-gray-500">1</span>
            <h3 className="text-xl text-white font-medium">
              Open your account
            </h3>
            <p className="text-sm text-gray-400">
              Sign up to fastpay and set up your account from the dashboard.
            </p>
          </div>
          <div className="rounded-lg p-5 bg-opacity-30 bg-gray-700">
            <span className="text-4xl font-bold text-gray-500">2</span>
            <h3 className="text-xl text-white font-medium">
              Transfer your money
            </h3>
            <p className="text-sm text-gray-400">
              Move money from one account to another and start earning up.
            </p>
          </div>
          <div className="rounded-lg p-5 bg-opacity-30 bg-gray-700">
            <span className="text-4xl font-bold text-gray-500">3</span>
            <h3 className="text-xl text-white font-medium">
              Watch your balance grow
            </h3>
            <p className="text-sm text-gray-400">
              Accessed instantly and remain insulated from market volatility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
