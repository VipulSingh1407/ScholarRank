import CTAButton from "./design/button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./TagLine";
import { roadmap } from "../constants";
import check2 from "../assets/check-02.svg";
import grid from "../assets/grid.png";
import loading1 from "../assets/loading-01.svg";
import { Gradient } from "./design/products";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Our Products" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "Coming Soon";

          return (
            <div
              className={`md:flex even:md:translate-y-[3.5rem] p-0.25 rounded-[1.5rem] transition duration-300 ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              } hover:border-2 hover:border-blue-100`}
              key={item.id}
            >
              <div className="relative p-4 bg-n-8 rounded-[1.4375rem] overflow-hidden xl:p-8">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={275}
                    height={275}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[20rem] mb-4 md:mb-10">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-2 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-5 -my-5 -mx-7">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={157} // Further reduced width
                      height={75} // Further reduced height
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-2">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                  <div className="mt-2">
                    <CTAButton active={false} linkto={item.url} className="w-32">
                      Try Now!
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
