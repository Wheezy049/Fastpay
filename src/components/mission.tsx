import React from "react";

function Mission() {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center gap-1 justify-center m-auto w-full md:w-[370px]">
        <h3 className="text-xs uppercase font-semibold text-center text-[#2A8E9E]">
          Our mission
        </h3>
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          We've helped innovative companies
        </h1>
        <p className="text-sm text-gray-500 text-center">
          Hundreds of all sizes and across all industries have made a big
          improvement with us.
        </p>
      </div>
      <div className="flex justify-center m-auto mx-10 md:mx-0 mt-10 gap-3 md:gap-14">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">24%</h1>
          <h3 className="text-sm font-medium text-[#003344]">
            Revenue business
          </h3>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">180K</h1>
          <h3 className="text-sm font-medium text-[#003344]">
            In annual revenue
          </h3>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">10+</h1>
          <h3 className="text-sm font-medium text-[#003344]">
            Months of runway
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Mission;
