import React from 'react';
import Button from '../components/Button';
import aiTutorImage from '../assets/loading.png'; // Replace with actual path
import featureImage1 from '../assets/loading.png'; // Replace with actual paths
import featureImage2 from '../assets/loading.png';
import featureImage3 from '../assets/loading.png';
import ButtonGradient from '../assets/svg/ButtonGradient';

const AITutorPage = () => {
  return (
    <>
      <div className="container mx-auto  p-4 flex flex-col items-center justify-center">
        {/* Main Heading Section */}
        <h1 className="text-4xl font-bold pt-[5.25rem] mb-8 w-full text-center">AI Tutor</h1>
        <div className="lg:flex lg:items-center lg:justify-center w-full mb-16">
          <div className="lg:w-1/2 w-full lg:pr-8">
            <h2 className="text-2xl font-semibold mb-4">Learning with AI Assistance</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu turpis vel iaculis. Phasellus vitae lectus posuere, bibendum velit nec, tincidunt ex.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button active={true} linkto="/learn-more">
                Learn More
              </Button>
              <Button active={false} linkto="/pricing">
                Pricing
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-8 mt-8 lg:mt-0 flex justify-center">
            <img
              src={aiTutorImage}
              alt="AI Tutor"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <p className="text-lg text-gray-600">Explore the powerful features that make AI Tutor unique and efficient.</p>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
          <div className="lg:w-1/2 w-full lg:pr-8">
            <h3 className="text-2xl font-semibold mb-4">Feature 1</h3>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Subheading 1</li>
              <li>Bullet point text 1</li>
              <li>Bullet point text 2</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-8 mt-8 lg:mt-0 flex justify-center">
            <img
              src={featureImage1}
              alt="Feature 1"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center mb-16">
          <div className="lg:w-1/2 w-full lg:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Feature 2</h3>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Subheading 2</li>
              <li>Bullet point text 1</li>
              <li>Bullet point text 2</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full lg:pr-8 mt-8 lg:mt-0 flex justify-center">
            <img
              src={featureImage2}
              alt="Feature 2"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
          <div className="lg:w-1/2 w-full lg:pr-8">
            <h3 className="text-2xl font-semibold mb-4">Feature 3</h3>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Subheading 3</li>
              <li>Bullet point text 1</li>
              <li>Bullet point text 2</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-8 mt-8 lg:mt-0 flex justify-center">
            <img
              src={featureImage3}
              alt="Feature 3"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default AITutorPage;
