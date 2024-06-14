import React from 'react';
import pic1 from '../assets/pic1.jpg';

const LandingPage = () => {
  return (
    <div 
      className="h-96 bg-cover  bg-center flex items-center justify-center mt-8"
      style={{ backgroundImage: `url(${pic1})` }}
    >
      <div className="  p-10 rounded-md  text-center pt-28">
        <h1 className="text-4xl font-extrabold text-white mb-4">Discover Your Perfect Style</h1>
        <p className="text-base text-white mb-8">Explore the latest trends and find your new favorite outfits with our curated collections.</p>
      </div>
    </div>
  );
}

export default LandingPage;
