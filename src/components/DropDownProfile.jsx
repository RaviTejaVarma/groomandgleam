import React from "react";
import { useNavigate } from "react-router-dom";

const DropDownProfile = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
    onClose();
  };

  return (
    <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 shadow-lg rounded-md w-48">
      <ul className="flex flex-col p-2">
        <li
          className="hover:bg-gray-100 p-2 rounded cursor-pointer"
          onClick={handleLoginClick}
        >
          Login
        </li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
