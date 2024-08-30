import React from 'react'
import LeftBar from './LeftBar'
import Alerts from './Alerts'
import MapArea from './MapArea'
import RightBar from './RightBar'


const Home = () => {
  return (
    <div className="flex min-h-screen">
    <div className="w-1/5 bg-sky-700">
      <LeftBar/>
      {/* Left Sidebar Content */}
    </div>
    <div className="w-3/5 flex flex-col">
      <div className="flex-30 h-[20%] bg-sky-400">
        <Alerts/>
        {/* Top Section Content */}
      </div>
      <div className="flex-70 h-[80%] bg-sky-900">
        <MapArea/>
        {/* Bottom Section Content */}
      </div>
    </div>
    <div className="w-1/5 bg-sky-600">
      <RightBar/>
      {/* Right Sidebar Content */}
    </div>
  </div>
  )
}

export default Home