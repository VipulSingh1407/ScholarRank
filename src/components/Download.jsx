import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';

const DownloadApp = () => {
  return (
    <section className="bg-gray-800 py-10 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Get the ScholarRank App</h2>
        <p className="text-lg mb-8">
          Access all your favourite features on the go. Download our app from the Play Store now!
        </p>
        <a 
          href="https://play.google.com/store/apps/details?id=com.scholarrank.m" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-caribbeangreen-100 text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <FaGooglePlay className="text-2xl mr-2" />
          Download from Play Store
        </a>
      </div>
    </section>
  );
};

export default DownloadApp;
