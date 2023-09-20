import React from 'react';
import geo1 from '../assets/geo1.jpg';

const Hero = () => {
  return (
    <section className="mx-auto container flex justify-between items-center min-h-fit gap-4  mb-2 px-10 pt-8">
      <div className="basis-3/5 px-4">
        <h1 className="text-black text-6xl font-bold">
          No need to wonder if your employees are lying.
        </h1>
      </div>
      <div className="basis-2/5  rounded-lg border">
        <img src={geo1} className="max-h-full" />
      </div>
    </section>
  );
};

export default Hero;
