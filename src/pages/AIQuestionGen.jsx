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
            <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl animate-pulse">AI QuestionGen</h1>
            <p className="mt-4 text-center text-lg text-white md:text-xl lg:text-2xl animate-fade-in">
              Revolutionizing Test Creation with Effortless Customization!
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
                <h3 className="text-2xl font-semibold md:text-3xl animate-fade-in">Effortless Test Generation</h3>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Effortlessly streamline your test creation process with Ai QuestionGen, utilizing advanced AI to generate customized tests in mere minutes. Say goodbye to manual tasks and embrace a time-saving solution that ensures comprehensive coverage of desired topics with ease.</p>              </div>
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
                <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Choose Your Input Method</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                  Choose your preferred method to initiate test generation: effortlessly upload a file or input a paragraph. AI QuestionGen seamlessly transforms your content into customized tests, ensuring flexibility and ease in creating educational assessments.</p>       
                  </div></div>
              <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
            </div>
            
        </section>

        <section className="py-16 sm:py-20 lg:py-5 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Customized Test Topics</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Define your test topics and witness Ai QuestionGen craft questions perfectly aligned with your preferences. Enjoy precise customization that ensures comprehensive coverage and relevance in every test generated.                         </p>
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
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Leverage Advanced AI</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Harness the power of advanced AI technology with Ai QuestionGen, which swiftly generates personalized tests, optimizing efficiency and enhancing productivity. Experience seamless integration of AI for test creation, ensuring accuracy and relevance in every assessment.






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
              Get started with AIQuestion Generator today and experience the power of AI-driven questions.
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
