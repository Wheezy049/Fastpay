import React from "react";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-24 bg-[#E9F3F4]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="col-span-1">
          <div className="flex items-center space-x-2">
            <span className="text-3xl text-[#2A8E9E] font-semibold">
              FastPay
            </span>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="text-[#003344] font-medium mb-4">Solutions</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Small Business
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Freelancers
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Customers
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Taxes
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-[#003344] font-medium mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Career
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-[#003344] font-medium mb-4">Learn</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Ebooks
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Guides
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Templates
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-[#003344] font-medium mb-4">Follow us on</h3>
          <div className="flex space-x-4">
            <a href="/" className="text-[#003344] hover:text-[#2A8E9E]">
              <Twitter size={20} />
            </a>
            <a href="/" className="text-[#003344] hover:text-[#2A8E9E]">
              <Linkedin size={20} />
            </a>
            <a href="/" className="text-[#003344] hover:text-[#2A8E9E]">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-[#003344] text-sm">
        ©FastPay 2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
