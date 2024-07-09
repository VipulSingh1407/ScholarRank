import React from 'react';

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      
      <main className="flex-1">
        <section className="relative h-[80vh] w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">Procut</h1>
            <p className="mt-4 text-center text-lg text-white md:text-xl lg:text-2xl">The only AI tool you need</p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Get started
              </a>
              <a href="#" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                View pricing
              </a>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src="/placeholder.svg" alt="Meme Generator" width={600} height={400} className="rounded-lg" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Procut: Effortlessly Create Memes, Jokes, and Marketing Videos</h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  With Procut, you can easily generate engaging content, including memes, jokes, and marketing videos, in just a few clicks. Whether you're looking to entertain your audience or promote your brand, Procut streamlines the creation process, saving you time and effort.
                </p>
                <div className="mt-8">
                  <a href="#" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Coming soon....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Meme Generation</h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Start by swiftly creating humorous memes that entertain your audience and drive engagement effortlessly.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="/placeholder.svg" alt="Marketing Videos" width={600} height={400} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src="/placeholder.svg" alt="User-friendly Interface" width={600} height={400} className="rounded-lg" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Marketing Video Creation</h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Design captivating marketing videos to effectively promote your products or services, enhancing your brand's visibility and reach.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Time-Saving</h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Save valuable time and resources by utilizing Procut to generate high-quality content quickly, allowing you to focus on other essential tasks.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="/placeholder.svg" alt="Time-saving Solutions" width={600} height={400} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <img src="/placeholder.svg" alt="Innovative Solutions" width={600} height={400} className="rounded-lg" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Innovative Solutions</h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Embrace Procut as an innovative solution for content creation, empowering you to differentiate yourself in a competitive digital landscape and capture audience attention effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to try it out?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Get started with Procut today and experience the power of AI-driven content creation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Get started
              </a>
              <a href="#" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                View pricing
              </a>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
}

