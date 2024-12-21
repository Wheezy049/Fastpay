import { useState } from "react";
import { X, AlignCenter } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full relative bg-[#E9F3F4] z-10">
      <div className="max-w-[1200px] w-full flex justify-between items-center p-5 m-auto relative">
        <div className="flex text-5xl text-[#2A8E9E] font-bold justify-center items-center">
          <h1>FastPay</h1>
        </div>
        <ul className="hidden md:flex items-center justify-center gap-6 mt-2  text-base font-semibold">
          <li className="text-[#003344] hover:text-[#2A8E9E] cursor-pointer">
            <a href="/">Products</a>
          </li>
          <li className="text-[#003344] hover:text-[#2A8E9E] cursor-pointer">
            <a href="/">Customers</a>
          </li>
          <li className="text-[#003344] hover:text-[#2A8E9E] cursor-pointer">
            <a href="/">Pricing</a>
          </li>
          <li className="text-[#003344] hover:text-[#2A8E9E] cursor-pointer">
            <a href="/">Learn</a>
          </li>
        </ul>
        <div className="hidden md:flex gap-4 font-semibold">
          <button className="flex justify-center py-2 px-6 border-[#288E9E] text-[#003344] rounded-md border transition-colors duration-300 hover:bg-[#288E9E] hover:text-white">
            Login
          </button>
          <button className="flex justify-center py-2 px-6 bg-[#288E9E] rounded-md border text-white transition-colors duration-300 hover:bg-[#1C6E6F]">
            Sign Up
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <AlignCenter className="w-6 h-6" />
          )}
        </button>

        {/* mobile */}
        <div
          className={`${
            isMenuOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden bg-white h-[100vh] absolute w-full top-20 right-0 transition-all duration-300 ease-in-out`}
        >
          <ul className="pt-4 pb-2 space-y-4 text-center">
            <li className="px-4 py-2 hover:bg-gray-100">
              <a
                href="#n"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                {" "}
                Products
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a
                href="#n"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                {" "}
                Customers
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a
                href="#n"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                {" "}
                Pricing
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a
                href="#n"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full"
              >
                {" "}
                Learn
              </a>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center mt-5 gap-4 font-semibold">
            <button className="flex justify-center py-2 px-6 w-[130px]  border-[#288E9E] text-[#180D39] rounded-md border transition-colors duration-300 hover:bg-[#288E9E] hover:text-white">
              Login
            </button>
            <button className="flex justify-center py-2 px-6 w-[130px] bg-[#288E9E] rounded-md border text-white transition-colors duration-300 hover:bg-[#1C6E6F]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
