import React from 'react';
import heroImage from '../assets/hero/Hero.jpg'; // Adjust the path to your hero image
import CTAButton from '../components/design/button';
import HighlightText from './design/HighlightText';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-20 bg-gray-800">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          ScholarRank: The only <HighlightText text={"AI Tool"} /> you need!
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8">
          Ask anything, generate questions using AI, understand your documents easily, and much more.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-7 mt-10">
          <CTAButton active={true} linkto={"/about"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/signup"}>
            Try for free
          </CTAButton>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={heroImage} alt="Hero" className="w-full h-auto rounded-md " />
      </div>
    </section>
  );
};

export default HeroSection;
