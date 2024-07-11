import React from 'react';
import Personalized from '../assets/pricing/personalized.png';
import Effortless from '../assets/pricing/effortless.png';
import Flexible from '../assets/pricing/flexible.png';
import Accessible from '../assets/pricing/accessible.png';
import UI from '../assets/pricing/UI.png';
import CTAButton from '../components/design/button';
import ButtonGradient from '../assets/svg/ButtonGradient';

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        <section className="relative bg-black/50 h-[80vh] w-full bg-center">
          <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl animate-pulse">AI Tutor</h1>
            <p className="mt-4 text-center text-lg text-white md:text-xl lg:text-2xl animate-fade-in">
            Your Ultimate Personalized Learning Companion            </p>
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
                <h3 className="text-2xl font-semibold md:text-3xl animate-fade-in">Personalized Learning
</h3>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Embark on your learning journey with AI Tutor, where personalized experiences cater to your unique needs and preferences. Enjoy customized guidance that enhances your learning process, making education more effective and engaging.                  </p>              </div>
              <div className="order-1 md:order-2">
                <img src={Personalized} alt="Marketing Videos" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-10 sm:py-20 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src={Effortless} alt="User-friendly Interface" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Effortless Learning
</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Immerse yourself effortlessly in any subject with AI Tutor's intuitive and accessible platform, designed to simplify and enhance your learning experience.                  </p>       
                  </div></div>
              <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
            </div>
            
        </section>

        <section className="py-16 sm:py-20 lg:py-5 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Flexible Learning
</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Enjoy flexible learning with AI Tutor, where you can progress at your own pace and convenience, shaping your learning schedule to suit your lifestyle and preferences.                                   </p>
              </div>
              <div className="order-1 md:order-2">
                <img src={Flexible} alt="Time-saving Solutions" width={600} height={400} className="rounded-lg max-w-sm animate-fade-in" />
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-10 sm:py-20 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src={Accessible} alt="Innovative Solutions" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Accessible Learning
</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Access educational resources effortlessly with AI Tutor, ensuring seamless availability of learning materials anytime, anywhere, regardless of your location or schedule constraints.





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
              Get started with AI Tutor today and experience the power of AI-driven personalized teaching.
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
      <ButtonGradient />
    </div>
  );
}
