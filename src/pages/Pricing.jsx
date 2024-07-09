import React from 'react';
import { FaGem, FaRocket, FaCrown } from 'react-icons/fa';
import ButtonGradient from '../assets/svg/ButtonGradient';


function PricingComponent() {
  return (
    <div className="flex flex-col items-center pt-[6rem] py-20 px-5">
      <h1 className="text-3xl font-bold text-gray-500 mb-8">Our Pricing Plans</h1>
      <p className="text-center text-gray-600 mb-8">"Choose the plan that fits your needs best and start transforming your education journey today."</p>
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow-md p-6 md:p-8 w-full md:w-80 transform transition-all hover:scale-105 hover:border-green-500 border border-gray-500">
          <h2 className="text-green-500 text-3xl mb-4">Free</h2>
          <div className="flex flex-col items-center">
            <FaGem className="text-green-500 text-5xl mb-4" />
            <div className="text-gray-200 font-bold text-xl md:text-lg">No Cost</div>
            <div className="text-4xl font-bold text-gray-100">$0</div>
            <div className="text-gray-200">/ month</div>
          </div>
          <ul className="mt-6 text-sm md:text-base text-gray-300 space-y-2">
            <li className="flex items-center"><FaGem className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" /> ChatGPT 4 unlimited.</li>
            <li className="flex items-center"><FaGem className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" /> Basic test scheduling & classroom features.</li>
            <li className="flex items-center"><FaGem className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" /> Group chat.</li>
            <li className="flex items-center"><FaGem className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" /> AI based question generation 5 credit.</li>
          </ul>
          <div className="flex justify-center mt-6">
            <button linkto={'/signup'} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-all duration-300">
              Get Started →
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-md p-6 md:p-8 w-full md:w-80 transform transition-all hover:scale-105 hover:border-yellow-500 border border-gray-500">
          <h2 className="text-yellow-500 text-3xl mb-4">Premium</h2>
          <div className="flex flex-col items-center">
            <FaCrown className="text-yellow-500 text-5xl mb-4" />
            <div className="text-gray-200 font-bold text-xl md:text-lg">Best Value</div>
            <div className="text-4xl font-bold text-gray-100">$49</div>
            <div className="text-gray-200">/ month</div>
          </div>
          <ul className="mt-6 text-sm md:text-base text-gray-300 space-y-2">
            <li className="flex items-center"><FaCrown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-2" /> All included in Free.</li>
            <li className="flex items-center"><FaCrown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-2" /> Unlimited Questions Generations</li>
            <li className="flex items-center"><FaCrown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-2" /> Download your generated questions </li>
            <li className="flex items-center"><FaCrown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-2" /> AI based question generation 5 credit/month</li>
            <li className="flex items-center"><FaCrown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-2" /> Unlimited test schedule at scale</li>
            <li className="flex items-center"><FaCrown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mr-2" /> Question generation request to other person</li>
          </ul>
          <div className="flex justify-center mt-6">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded transition-all duration-300">
              Get Started →
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-md p-6 md:p-8 w-full md:w-80 transform transition-all hover:scale-105 hover:border-red-500 border border-gray-200">
          <h2 className="text-red-500 text-3xl mb-4">Enterprise</h2>
          <div className="flex flex-col items-center">
            <FaRocket className="text-red-500 text-5xl mb-4" />
            <div className="text-gray-200 font-bold text-xl md:text-lg">Custom Solutions</div>
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-gray-500 text-gray-200 font-bold py-3 px-6 rounded-full transition-all duration-300">
              Cloud
            </button>
            <button className="bg-gray-500 text-gray-200 font-bold py-3 px-6 rounded-full transition-all duration-300">
              Self Hosted
            </button>
          </div>
        
          <ul className="mt-6 text-sm md:text-base text-gray-300 space-y-2">
            <li className="flex items-center"><FaRocket className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" /> ScholarRank AI integration in your System</li>
            <li className="flex items-center"><FaRocket className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" /> Dedicated account manager & tech person regular.</li>
            <li className="flex items-center"><FaRocket className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" /> Custom feature request support.</li>
            <li className="flex items-center"><FaRocket className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" /> Dedicated pricing</li>
          </ul>
          <div className="flex justify-center mt-6">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-all duration-300">
              Schedule A Demo →
            </button>
          </div>
        </div>
      
      </div>
      <ButtonGradient/>
    </div>
  );
}

export default PricingComponent;
