import React from 'react';
import Webcam from '../assets/pricing/webcam.png';
import Tablock from '../assets/pricing/marketing.png';
import Alert from '../assets/pricing/akert.png';
import Random from '../assets/pricing/random.png';
import Auto from '../assets/pricing/auto.png';
import CTAButton from '../components/design/button';
import ButtonGradient from '../assets/svg/ButtonGradient';

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        <section className="relative bg-black/50 h-[80vh] w-full bg-center">
          <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl animate-pulse">Online Testing</h1>
            <p className="mt-4 text-center text-lg text-white md:text-xl lg:text-2xl animate-fade-in">
            Ensuring Integrity and Convenience Through Advanced Security and Intuitive Controls                     </p>
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
                <h3 className="text-2xl font-semibold md:text-3xl animate-fade-in">Webcam Security

</h3>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Ensure test integrity with built-in webcam monitoring, effectively deterring cheating attempts and enhancing assessment reliability.                                </p>              </div>
              <div className="order-1 md:order-2">
                <img src={Webcam} alt="Marketing Videos" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-10 sm:py-20 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src={Tablock} alt="User-friendly Interface" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Tab Locking

</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Ensure undivided attention during tests with tab locking, preventing access to other tabs or applications, thus maintaining focus and test integrity.</p>                  </div></div>
              <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
            </div>
            
        </section>

        <section className="py-16 sm:py-20 lg:py-5 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Tab Alert

</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Receive real-time alerts with Tab Alert, notifying you instantly of any unauthorized tab switching during test sessions, enabling swift intervention to uphold test integrity. </p>              </div>
              <div className="order-1 md:order-2">
                <img src={Alert} alt="Time-saving Solutions" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-10 sm:py-20 lg:py-5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src={Random} alt="Innovative Solutions" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Question Randomization
</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Enhance assessment fairness and impartiality with Question Randomization, minimizing the impact of collaboration or cheating by randomizing the order of questions.




                </p>              </div>
            </div>
            <div className="border-t-4 border-caribbeangreen-100 mt-8"></div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-5 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-4xl animate-fade-in">Auto Submission


</h2>
                <p className="mt-4 text-lg text-gray-400 md:text-xl animate-fade-in">
                Ensure test completion integrity with Auto Submission, which prevents unauthorized changes by automatically submitting tests upon completion or when the time limit expires. This feature safeguards assessment consistency and fairness.</p> </div>              <div className="order-1 md:order-2">
                <img src={Auto} alt="Time-saving Solutions" width={600} height={400} className="rounded-lg max-w-md animate-fade-in" />
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
              Get started with Online Tests today and experience the power of AI-driven Testing.
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
