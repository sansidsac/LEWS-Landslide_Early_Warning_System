import React from 'react';
import Navbar from './Navbar';
import Alerts from './Alerts';
import Card from './Card';
import ImageComponent from './ImageComponent';

const Home = () => {
  const imageSrc = "https://www.researchgate.net/profile/Sm-Ramasamy/publication/345083037/figure/fig7/AS:976211534696448@1609758375143/Landslide-proneness-map-of-Kerala-1-Areas-of-highly-fractured-Western-Ghats.png";

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mb-6 space-y-4">
        <Alerts region='Wuhan' scale={80}/>
        <Alerts region='Chengdu' scale={60} />
        <Alerts region='Beijing' scale={50} />
      </div>
      <div>
        <div className="text-3xl font-bold text-center mb-6">Regions</div>
        <div className="flex items-center justify-center mb-6">
        <ImageComponent imgSrc={imageSrc} />
        </div>
      </div>
      <div className="text-3xl font-bold text-center mb-6">Management</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <Card title='Regions' link='/regions' description='Regions affected by Landslides'/>
        <Card />
        <Card title='Rehabilitation' link='/rehab' description='Rehabilitation of Landslides' imageUrl='https://t3.ftcdn.net/jpg/03/19/15/80/360_F_319158029_4JKXm8ZJy7BaaciR3SB6ZuGxL1mVGPRA.jpg'/>
      </div>
    </>
  );
};

export default Home;
