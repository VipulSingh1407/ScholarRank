import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ButtonGradient from '../assets/svg/ButtonGradient';

const SignUpPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen  text-white"
    >
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm font-semibold">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                id="name"
                className="pl-10 pr-3 py-2 w-full border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-semibold">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                id="email"
                className="pl-10 pr-3 py-2 w-full border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-sm font-semibold">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                id="password"
                className="pl-10 pr-3 py-2 w-full border rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            <span className="flex items-center justify-center">
              Sign Up <FiArrowRight className="ml-2" />
            </span>
          </motion.button>
          <p className="text-center text-gray-500 mt-4">
            Already have an account? <Link to="/signin" className="text-blue-400 hover:underline">Sign In</Link>
          </p>
          <p className="text-center text-gray-500 mt-2">Or</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 mt-2"
          >
            <span className="flex items-center justify-center">
              <FiUser className="mr-2" />
              Sign Up with Google
            </span>
          </motion.button>
        </form>
        <Link to="/" className="block mt-4 text-sm text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
      <ButtonGradient/>
    </motion.div>
    
  );
};

export default SignUpPage;
