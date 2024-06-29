/* 
THIS IS THE DASHBOARD PAGE
FEATURES:
  - Displays various components such as:
    - A line graph showing the growth trend of green energy in india
    - A pie chart showing the green energy distribution of india in terms of energy produced
    - An interactive map of India showing the location and basic information of different microgrids in india
    - 2 lists:
      - Major microgrids operating as of 2024
      - Upcoming major microgrids projects
*/

"use client"; // This is essential to avoid compile time error since the code uses useEffect

import React from "react";
import Map from "@/components/Map";
import PlantList from "@/components/PlantList";
import EnergyPrice from "@/components/EnergyPrice";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div>
        <EnergyPrice />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Map of Microgrids and Macrogrids in India
          </h2>
          <div className="flex text-sm text-gray-400">
            <p>This is realtime data from Google Maps*</p>
          </div>
          <Map />
        </div>
      </div>
      {/* Plant List */}
      <PlantList />
      
      {/* Data Source */}
      <div className="flex text-sm text-gray-400">
        <p>
          All the data is according to latest Annual Report (2022-2023) by the
          Ministry of New and Renewable Energy and other publicly disclosed
          sources*
        </p>
      </div>
    </main>
  );
}