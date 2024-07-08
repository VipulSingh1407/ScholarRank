
import React from 'react'
import Header from './Header'
import Hero from "../components/Hero";
import TrustedBySection from './Trusted';
import AIused from './AIused';
import Collaboration from './Collaboration';
import Products from './Products';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Footer from './Footer';
import Download from './Download'
const Home = () => {
    return (
      <>
       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
     
      <Hero/>
      <TrustedBySection/>
      <AIused/>
      <Collaboration/>
      <Products/>
      <Download/>
      </div>
      <ButtonGradient/>
      
      </>
    )
  }
  
  export default Home