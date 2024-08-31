import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">ECHO</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/regions" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Regions</Link>
              <Link to="/rehab" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Rehab</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

