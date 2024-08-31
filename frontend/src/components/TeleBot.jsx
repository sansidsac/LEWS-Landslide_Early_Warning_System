import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const TeleBot = ({ message = "Wuhan" }) => {
  const handleSubmit = () => {
    axios.post('https://api.telegram.org/bot6571192837:AAFG994S5fuEmrbfxDluOPKMCgj0kKzJZCA/sendMessage', {
      chat_id: '<your_chat_id>', 
      text: message,
    })
      .then(() => {
        console.log('Success');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4">Sent Warning</h1>
          <p className="text-lg font-semibold mb-4">{message}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default TeleBot;
