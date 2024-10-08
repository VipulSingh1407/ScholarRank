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
            <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl animate-pulse">Procut</h1>
            <p className="mt-4 text-center text-lg text-white md:text-xl lg:text-2xl animate-fade-in">
              Effortlessly Create Memes, Jokes, and Marketing Videos
            </p>
            <div className="mt-8 flex gap-4">
              <CTAButton active={true} linkto={"/about"}>
                Coming Soon
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
                <h3 className="text-2xl font-semibold md:text-3xl animate-fade-in">Meme Generation</h3>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Start by swiftly creating humorous memes that entertain your audience and drive engagement effortlessly.
                </p>
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
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Marketing Video Creation</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Design captivating marketing videos to effectively promote your products or services, enhancing your brand's visibility and reach.
                </p>
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-5 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Time-Saving</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Save valuable time and resources by utilizing Procut to generate high-quality content quickly, allowing you to focus on other essential tasks.
                </p>
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
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Innovative Solutions</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Embrace Procut as an innovative solution for content creation, empowering you to differentiate yourself in a competitive digital landscape and capture audience attention effectively.
                </p>
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-10 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">User-Friendly Interface</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Benefit from Procut's intuitive interface, simplifying content creation and making the process both easy and enjoyable.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src={UI} alt="User-Friendly Interface" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
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
              Get started with Procut today and experience the power of AI-driven content creation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <CTAButton active={true} linkto={"/about"}>
                Coming Soon
              </CTAButton>
              <CTAButton active={false} linkto={"/pricing"}>
                View Pricing
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <ButtonGradient/>
    </div>
  );
}
