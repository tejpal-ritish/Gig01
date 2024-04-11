import React from 'react';
import logo from '../../assets/logoipsum.png';
import landing from '../../assets/landing.mp4';

const Page1 = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-10 z-0">
        <source src={landing} type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center p-8 text-white">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-24 mb-8" />

        {/* Main Text */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">VelocityX: Turbo Pursuit</h1>
          <p className="mt-4">The excitement for speed: gaming pitch deck</p>
          <p className="mt-4">Avg. Reading Time: <b>4 min</b></p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
