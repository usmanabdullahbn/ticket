import React from "react";
import { FaPlane, FaUtensils, FaSuitcase } from "react-icons/fa";
import img from "./assets/Screenshot 2025-01-11 141219.png";

const FlightCard = () => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center w-full max-w-4xl">
      {/* Airline Info */}
      <div className="flex items-center space-x-4">
        <FaPlane className="text-green-500 text-2xl" />
        <div>
          <p className="text-gray-800 font-semibold">
            Pakistan International Airlines
          </p>
          <p className="text-sm text-gray-500">PK-309</p>
          <p className="text-sm text-gray-500">Fri, Jan 17, 2025</p>
        </div>
      </div>

      {/* Flight Route and Duration */}
      <div className="flex-grow flex justify-center items-center">
        <img src={img} alt="Flight Route and Duration" style={{marginRight:"170px"}}/>
      </div>

      {/* Additional Info */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FaUtensils />
          <span>Meal</span>
          <FaSuitcase />
          <span>40.0 KG</span>
        </div>
        <p className="text-xl font-semibold text-gray-800">PKR 86,935.2</p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Book Fare
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
