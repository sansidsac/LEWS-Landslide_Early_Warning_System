import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Alerts = ({ region = "Wuhan", scale = 80 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleActionClick = () => {
    setIsVisible(false);
    navigate('/');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="rounded-lg my-2 w-[750px] h-27 bg-red-500 text-[#ffffff] relative">
      <div className="flex flex-row w-full gap-5 justify-center items-center px-6 h-full">
        <div className="my-auto text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-alert-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
        </div>
        <div>
          <div className="font-bold text-2xl">Warning</div>
          <div className="text-lg">
            {region} is {scale}% Affected!!! Take immediate action&nbsp;&nbsp;
            <Link to="/" onClick={handleActionClick}>
              <span className="text-sm text-blue-900">Take action &rarr;</span>
            </Link>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="absolute top-2 right-4 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <line x1="18" x2="6" y1="6" y2="18"></line>
            <line x1="6" x2="18" y1="6" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alerts;
