import React from 'react';
import university1 from '../assets/collaboration/unc.png';
import university2 from '../assets/collaboration/IIT.png';
import university3 from '../assets/collaboration/niet.png';
import university4 from '../assets/collaboration/Sfu.png';
import university5 from '../assets/collaboration/kec.png';
import university6 from '../assets/collaboration/fit.png';
import 'animate.css'; // Ensure to install animate.css
import HighlightText from './design/HighlightText';

const TrustedBySection = () => {
  return (
    <section className="py-10 px-4 md:py-20 md:px-8 ">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-gray-600 animate__animated animate__fadeInUp">
          Trusted by <HighlightText text={"18000+"}/> monthly active users globally
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-8">
        <img
          src={university1}
          alt="University 1"
          className="h-12 md:h-16 object-contain animate__animated animate__fadeIn animate__delay-1s"
        />
        <img
          src={university2}
          alt="University 2"
          className="h-16 md:h-20 lg:h-24 object-contain animate__animated animate__fadeIn animate__delay-2s"
        />
        <img
          src={university3}
          alt="University 3"
          className="h-12 md:h-16 object-contain animate__animated animate__fadeIn animate__delay-3s"
        />
        <img
          src={university4}
          alt="University 4"
          className="h-16 md:h-20 lg:h-24 object-contain animate__animated animate__fadeIn animate__delay-4s"
        />
        <img
          src={university5}
          alt="University 5"
          className="h-16 md:h-20 lg:h-24 object-contain animate__animated animate__fadeIn animate__delay-5s"
        />
        <img
          src={university6}
          alt="University 6"
          className="h-10 md:h-12 lg:h-14 object-contain animate__animated animate__fadeIn animate__delay-6s"
        />
      </div>
    </section>
  );
};

export default TrustedBySection;
