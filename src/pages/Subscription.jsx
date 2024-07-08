import React from "react";

const Subscription = () => {
  return (
    <div className="pb-16 font-thin bg-orange-50 px-4 md:px-16">
      <div className="flex justify-center items-center w-full pt-16">
        <h1 className="text-4xl md:text-6xl text-orange-500 font-causten text-center">
          Choose your pricing plan
        </h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-10 md:space-y-0 md:space-x-10 pt-12">
          <div className="border border-slate-400 px-6 py-8 md:px-10 md:py-10 text-center rounded-3xl shadow-lg bg-white w-full max-w-xs md:max-w-none flex flex-col">
            <h1 className="text-lg md:text-xl pb-2">3 Month Plan</h1>
            <div className="relative">
              <span className="absolute top-0 left-3 md:left-5 text-2xl md:text-3xl">
                ₹
              </span>
              <h1 className="text-5xl md:text-7xl pl-4 md:pl-6">1,750</h1>
            </div>
            <h1 className="pb-2 text-sm pt-2">Every month</h1>
            <h1>3 months subscription for full</h1>
            <h1 className="pb-2">Spa Access</h1>
            <h1 className="pb-3 text-sm">Valid for 3 months</h1>
            <button className="px-16 py-2 md:px-20 border bg-orange-500 hover:bg-orange-400 rounded-3xl">
              Select
            </button>
            <div className="w-full border-t border-slate-400 my-4"></div>
            <div className="flex-grow">
              <h1 className="pb-4">Full Spa</h1>
              <h1 className="pb-4">Medical Spray</h1>
              <h1 className="pb-8">Fur Trimming</h1>
            </div>
          </div>
          <div className="border bg-orange-50 border-slate-400  px-6 py-8 md:px-10 md:py-10 text-center rounded-3xl shadow-lg w-full max-w-xs md:max-w-none flex flex-col">
            <h1 className="text-lg md:text-xl pb-2">6 Month Plan</h1>
            <div className="relative">
              <span className="absolute top-0 left-3 md:left-5 text-2xl md:text-3xl">
                ₹
              </span>
              <h1 className="text-5xl md:text-7xl pl-4 md:pl-6">1,675</h1>
            </div>
            <h1 className="pb-2 text-sm pt-2">Every month</h1>
            <h1>6 months subscription for full</h1>
            <h1 className="pb-2">Spa Access</h1>
            <h1 className="pb-3 text-sm">Valid for 6 months</h1>
            <button className="px-16 py-2 md:px-20 border bg-orange-500 hover:bg-orange-400 rounded-3xl">
              Select
            </button>
            <div className="w-full border-t border-slate-400 my-4"></div>
            <div className="flex-grow">
              <h1 className="pb-4">Professional Bath & Spa</h1>
              <h1 className="pb-4">Medical Spray</h1>
              <h1 className="pb-8">Repetitive Grooming Expert</h1>
            </div>
          </div>
          <div className="border border-slate-400 px-6 py-8 md:px-10 md:py-10 text-center rounded-3xl shadow-lg bg-white w-full max-w-xs md:max-w-none flex flex-col">
            <h1 className="text-lg md:text-xl pb-2">12 Month Plan</h1>
            <div className="relative">
              <span className="absolute top-0 left-3 md:left-5 text-2xl md:text-3xl">
                ₹
              </span>
              <h1 className="text-5xl md:text-7xl pl-4 md:pl-6">1,600</h1>
            </div>
            <h1 className="pb-2 text-sm pt-2">Every month</h1>
            <h1 className="whitespace-nowrap">
              12 months subscription for full
            </h1>
            <h1 className="pb-2">Spa Access</h1>
            <h1 className="pb-3 text-sm">Valid for 12 months</h1>
            <button className="px-16 py-2 md:px-20 border bg-orange-500 hover:bg-orange-400 rounded-3xl">
              Select
            </button>
            <div className="w-full border-t border-slate-400 my-4"></div>
            <div className="flex-grow">
              <h1 className="pb-4">Personalized Assistance</h1>
              <h1 className="pb-4">Repetitive Grooming Expert</h1>
              <h1 className="pb-8">Free Basic Training</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
