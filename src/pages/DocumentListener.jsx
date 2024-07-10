import React from 'react';
import Meme from '../assets/pricing/meme.png';
import Marketing from '../assets/pricing/marketing.png';
import Time from '../assets/pricing/time.png';
import Innovate from '../assets/pricing/innovate.png';
import UI from '../assets/pricing/UI.png';
import CTAButton from '../components/design/button';
import ButtonGradient from '../assets/svg/ButtonGradient';

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        <section className="relative bg-black/50 h-[80vh] w-full bg-center">
          <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl animate-pulse">Document Listener</h1>
            <p className="mt-4 text-center text-lg text-white md:text-xl lg:text-2xl animate-fade-in">
              Effortless Playback of Your Content Anytime, Anywhere.
            </p>
            <div className="mt-8 flex gap-4">
              <CTAButton active={true} linkto={"/about"}>
                Get Started
              </CTAButton>
              <CTAButton active={false} linkto={"/pricing"}>
                View Pricing
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-caribbeangreen-300 font-bold md:text-4xl lg:text-5xl text-primary text-center animate-bounce">What We Offer</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold md:text-3xl animate-fade-in">Automatic Playback</h3>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Experience Document Listener's revolutionary feature for automatic playback of any text or file you input. Enjoy seamless accessibility and convenience wherever you are, whether multitasking, on the go, or preferring auditory learning.                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src={Meme} alt="Marketing Videos" width={600} height={400} className="rounded-lg animate-fade-in" />
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-10 sm:py-20 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src={Marketing} alt="User-friendly Interface" width={600} height={400} className="rounded-lg animate-fade-in" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl animate-fade-in">User-Friendly Interface</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Explore Document Listener's user-friendly interface, designed for intuitive navigation and effortless interaction. Enjoy a seamless experience accessing and managing your content with ease.</p>              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-5 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Multi-Format Support</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Discover the versatility of Document Listener with support for various file formats like PDFs, Word documents, and text files. Effortlessly manage and enjoy playback of your documents in the format that suits you best.                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src={Time} alt="Time-saving Solutions" width={600} height={400} className="rounded-lg animate-fade-in" />
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-10 sm:py-20 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src={Innovate} alt="Innovative Solutions" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Privacy and Security</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  With Document Listener, prioritize privacy and security with robust encryption protocols ensuring your data remains safe and confidential. Rest assured as you enjoy seamless document playback without compromising on privacy.







                </p>              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>


        <section className="py-16 sm:py-20 lg:py-10 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl ">
              Ready to try it out?
            </h2>
            <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
              Get started with Document Listener today and experience the power of AI-driven speaker.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <CTAButton active={true} linkto={"/about"}>
                Get Started
              </CTAButton>
              <CTAButton active={false} linkto={"/pricing"}>
                View Pricing
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <ButtonGradient />
    </div>
  );
}
