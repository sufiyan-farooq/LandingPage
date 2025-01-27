'use client'
import React, { useState } from "react";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("Producer");

  const tabs = ["Producer", "Farmer", "Home Cook"];

  return (
    <> 
   <div className=""> 
   <div 
        className=" w-[85%] mx-auto relative bg-none md:bg-[url('/circleOne.png')]"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
          backgroundSize: "contain", 
          margin: "0px auto",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-[48px] md:text-5xl font-bold tracking-tight ">
            <span className="text-[#8cc63f]">Connecting Farmers</span> and Home Cooks <br /> for a Thriving Food <span className="text-[#8cc63f]">Community!</span>
          </h1>
          <p className="mt-6 text-[16px] text-[#767A85] max-w-2xl mx-auto">
            A platform that connects farmers, producers, and home cooks to promote local, sustainable food.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex justify-center space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm md:text-lg font-medium border-b-2 transition-all duration-300 ${
                  activeTab === tab ? "border-[#8cc63f] text-[#8cc63f]" : "border-transparent text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === "Producer" && (
            <>
              <div className="flex justify-center">
                <img
                  src="/producer.png"
                  alt="Producer"
                  className="w-[90%] max-w-4xl h-[500px] rounded-lg tab-image  "
                />
              </div>
            </>
            )}

            {activeTab === "Farmer" && (
              <div className="flex justify-center">
                <img
                  src="/farmer.png" 
                  alt="Farmer"
                  className="w-[90%] max-w-4xl h-[500px] rounded-lg tab-image"
                />
              </div>
            )}

            {activeTab === "Home Cook" && (
              <div className="flex justify-center">
                <img
                  src="/homecook.png" 
                  alt="Home Cook"
                  className="w-[90%] max-w-4xl rounded-lg h-[500px] tab-image"
                />
              </div>
            )}
          </div>
        </div>
      </div>
   </div>
 
 

    </>
  );
}
