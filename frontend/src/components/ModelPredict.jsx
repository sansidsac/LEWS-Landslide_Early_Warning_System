import React, { useState } from 'react';
import Navbar from './Navbar';

const ModelPredict = () => {
  const [selectedRegion, setSelectedRegion] = useState("Wuhan");
  const [landslideChance, setLandslideChance] = useState("40%");

  // Dummy data for regions and their corresponding landslide chances
  const regions = [
    { name: "Wuhan", chance: "40%" },
    { name: "Beijing", chance: "30%" },
    { name: "Shanghai", chance: "25%" },
    { name: "Chengdu", chance: "50%" },
  ];

  // Handle region change
  const handleRegionChange = (event) => {
    const regionName = event.target.value;
    setSelectedRegion(regionName);

    // Find the landslide chance for the selected region
    const selectedRegionData = regions.find(region => region.name === regionName);
    setLandslideChance(selectedRegionData ? selectedRegionData.chance : "N/A");
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <div className="mb-6">
        <label htmlFor="region-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select a Region:
        </label>
        <select
          id="region-select"
          value={selectedRegion}
          onChange={handleRegionChange}
          className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          {regions.map(region => (
            <option key={region.name} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Model Predict</h1>
      <p className="text-lg text-gray-700">
        <span className="font-semibold text-red-600">{landslideChance}</span> chance for landslide in region{" "}
        <span className="font-semibold text-blue-600">{selectedRegion}</span>
      </p>
    </div>
    </>
  );
};

export default ModelPredict;
