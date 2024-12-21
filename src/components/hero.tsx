import React from "react";
import { ArrowUpRight } from "lucide-react";
import PaymentCard from "./paymentCard";

function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-evenly bg-[#E9F3F4] h-auto md:h-[750px] px-10 md:px-20 py-5 md:py-10 mb-10">
      <div className="mt-10 w-full md:w-1/2">
        <h1 className=" text-4xl md:text-5xl font-semibold text-[#003344]">
          Get paid early
        </h1>
        <h1 className="text-2xl md:text-4xl font-medium text-[#003344] mt-0 md:mt-1">
          save automatically
        </h1>
        <h1 className="text-2xl md:text-4xl font-medium text-[#003344] mt-0 md:mt-1">
          all your pay.
        </h1>
        <p className="mt-2 text-[#2A8E9E] opacity-50 text-base md:text-2xl">
          Supports small businesses with simple invoicing, powerful
          integrations, and cash flow management tools
        </p>

        <div className="flex justify-between items-center bg-white py-1 md:py-2 pl-3 md:pl-4 pr-1 w-full md:w-[400px] mt-5 text-xs md:text-base border rounded-lg border-[#E9F3F4]">
          <input
            type="email"
            placeholder="Your bussiness email"
            className="border-none outline-none"
          />
          <button className=" bg-[#2A8E9E] flex justify-center items-center rounded-md py-1 md:py-3 px-1.5 md:px-3 whitespace-nowrap text-white">
            Get Started <ArrowUpRight />
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <img src="/klarna-logo.wine.png" alt="klarna" className="w-20 h-10" />
          <img
            src="/Coinbase-logo.wine.png"
            alt="coinbase"
            className="w-20 h-14"
          />
          <img
            src="/instacart-logo-PNG_003.png"
            alt="instacart"
            className="w-20 h-10"
          />
        </div>
      </div>
      <div className=" mt-10 md:mt-32 mb-10 w-full md:w-1/2">
        <PaymentCard />
      </div>
    </div>
  );
}

export default Hero;
