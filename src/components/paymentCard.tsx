import React from "react";
import { CreditCard, Landmark, Nfc } from "lucide-react";

function PaymentCard() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-[#2A8E9E] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
            D
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">Dipa Inhouse</h2>
            <p className="text-sm text-gray-500">dipainhouse@gmail.com</p>
          </div>
        </div>

        {/* Invoice */}
        <div className="mb-4 border p-2 border-[#E9F3F4] rounded">
          <h3 className="text-gray-500 text-sm">Invoice</h3>
          <p className="text-2xl font-bold text-gray-800">$1,876,580</p>
          <p className="text-xs text-gray-400">April 21, 2024</p>
        </div>

        {/* Payment Options */}
        <div className="space-y-3 mb-6">
          {/* Credit Card Option */}
          <label
            htmlFor="credit-card"
            className="flex flex-row-reverse justify-between items-center border border-gray-300 rounded-lg px-2 md:px-4 py-3 cursor-pointer hover:bg-gray-100 hover:border-[#2A8E9E] hover:border-2"
          >
            <input
              type="radio"
              id="credit-card"
              name="payment"
              className="form-radio text-blue-600 focus:ring-0"
              defaultChecked
            />
            <span className="ml-3 flex gap-2 font-semibold text-gray-800"> <CreditCard /> Credit Card</span>
          </label>

          {/* Bank Account Option */}
          <label
            htmlFor="bank-account"
            className="flex flex-row-reverse justify-between items-center border border-gray-300 rounded-lg px-2 md:px-4 py-3 cursor-pointer hover:bg-gray-100 hover:border-[#2A8E9E] hover:border-2"
          >
            <input
              type="radio"
              id="bank-account"
              name="payment"
              className="form-radio text-blue-600 focus:ring-0"
            />
            <span className="ml-3 flex gap-2 font-semibold text-gray-800"> <Landmark /> Bank Account</span>
          </label>
        </div>

        {/* Pay Button */}
        <button className="w-full bg-[#003344] text-white font-semibold py-3 rounded-lg hover:bg-[#2A8E9E] transition">
          Pay
        </button>

        {/* Credit Card Display */}
        <div className=" relative md:absolute top-5 md:-top-14 right-0 md:-right-7 mx-auto mb-4 md:mb-0 h-[230px] bg-[#00839E] text-white rounded-xl pt-4 shadow-lg w-48">
          <h3 className="text-sm mb-2  px-4">Credit Card</h3>
          <p className="text-lg font-semibold  px-4">
            234 <span className="tracking-widest">**** ****</span>
          </p>
          <div className="mt-1 bg-[#003344] w-full rounded-b-xl flex justify-between p-4 items-center absolute bottom-0">
          <p className=" text-sm font-bold">VISA</p>
           <Nfc className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
