import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="pl-4 md:pl-24">
          <img
            src="/Groom&Gleam.png"
            alt="Groom and Gleam Logo"
            className="w-32 h-auto"
          />
        </div>

        <div className="hidden md:flex space-x-12 pr-11">
          <Link
            to="/"
            className="hover:text-orange-400 text-gray-500 font-causten text-base"
          >
            Home
          </Link>
          <Link
            to="/subscription"
            className="hover:text-orange-400 text-gray-500 font-causten text-base"
          >
            Subscription
          </Link>
          <Link
            to="/shop"
            className="hover:text-orange-400 text-gray-500 font-causten"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-400 text-gray-500 font-causten"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:block pr-8">
          <button className="font-causten px-6 py-2 border-solid border-2 border-orange-400 text-orange-400 rounded-3xl font-semibold">
            Subscribe
          </button>
        </div>

        <div className="flex md:hidden w-full justify-end pr-4">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr className="border-gray-300" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="hover:text-orange-400 text-gray-500 font-causten text-base"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/subscription"
              className="hover:text-orange-400 text-gray-500 font-causten text-base"
              onClick={toggleMenu}
            >
              Subscription
            </Link>
            <Link
              to="/shop"
              className="hover:text-orange-400 text-gray-500 font-causten"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="hover:text-orange-400 text-gray-500 font-causten"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button className="font-causten px-6 py-2 border-solid border-2 border-orange-400 text-orange-400 rounded-3xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
