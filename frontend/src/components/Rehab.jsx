import React from 'react';
import Navbar from './Navbar';

const Rehab = () => {
  return (
    <>
        <Navbar/>
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Rehab Request</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Area"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Aadhar"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => {}}
          >
          Submit
        </button>
      </form>
    </div>
            </>
  );
};

export default Rehab;
