import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div>
          <img src="/Groom&Gleam.png" alt="Groom and Gleam Logo" className="pl-24" />
        </div>

        <div className="flex space-x-12 pr-11">
          <Link to="/" className="hover:text-orange-400 text-gray-500 font-causten text-base">
            Home
          </Link>
          <Link to="/subscription" className="hover:text-orange-400 text-gray-500 font-causten text-base">
            Subscription
          </Link>
          <Link to="/shop" className="hover:text-orange-400 text-gray-500 font-causten">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-orange-400 text-gray-500 font-causten">
            Contact
          </Link>
        </div>

        <div className="pr-8">
          <button className=" font-causten px-6 py-2 border-solid border-2 border-orange-400 text-orange-400 rounded-3xl font-semibold">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Navbar;
