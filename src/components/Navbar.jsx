import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-2xl font-bold">Groom&Gleam</h1>
        </div>

        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/subscription" className="hover:text-blue-500">
            Subscription
          </Link>
          <Link to="/shop" className="hover:text-blue-500">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>

        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-xl">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Navbar;
