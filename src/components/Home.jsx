
import React from 'react'
import Header from './Header'
import Hero from "../components/Hero";
import TrustedBySection from './Trusted';
const Home = () => {
    return (
      <>
       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
      <Hero/>
      <TrustedBySection/>
      </div>
      </>
    )
  }
  
  export default Home