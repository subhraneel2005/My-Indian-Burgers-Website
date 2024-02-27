import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  let one = '/explore';
  let two = '/learnMore';
  return (
    <div className="bg-sky-600 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-sky-400 rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Get the best Burgers here
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore our wide range of burgers and enjoy hassle-free delivery.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 rounded-full shadow-md text-lg mb-4 md:mb-0 md:mr-4" onClick={() => navigate(one)}>
            Explore our menu
          </button>
          {/* <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full shadow-md text-lg" onClick={() => navigate(two)}>
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
