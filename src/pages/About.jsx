import React, { useEffect, useRef } from 'react';
import Card from '../components/Card'; // Adjust the path based on your project structur
import './styles.css'; // Import your CSS file if you have styles
import Mission from '../assets/notification/Mission.png'
import Vision from '../assets/notification/Vision.png'
import Team from '../assets/notification/Team.png'
import Contact from '../assets/notification/Contact.png'
import Success from '../assets/notification/Success.png'
import ButtonGradient from '../assets/svg/ButtonGradient';


function Component() {
    const sections = useRef([]);

    useEffect(() => {
        sections.current.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 300); // Delay for each section
        });
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 bg-black md:py-24 lg:py-32 fade-in">
                    <div className="container px-3 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4 text-slide-up" ref={el => sections.current.push(el)}>
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">Mission</div>
                                <h2 className="text-2xl font-bold sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Leveraging AI for Educational Solutions
                                </h2>
                                <p className="text-muted-foreground md:text-xl">
                                    Our mission is to harness the transformative potential of AI to develop intelligent educational solutions that enhance learning experiences. We are dedicated to making learning more personalized, efficient, and accessible for all learners.
                                </p>
                            </div>
                            <img
                                src={Mission} // Update with your image path
                                width="500"
                                height="500"
                                alt="Mission"
                                className="mx-auto mt-0 max-w-md  sm:w-full"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full bg-gray-900 py-12 md:py-24 lg:py-32 bg-muted fade-in">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <img
                                src={Vision} // Update with your image path
                                width="550"
                            height="310"
                                alt="Vision"
                                className="mx-auto   rounded-xl   sm:w-full "
                            />
                            <div className="space-y-4 text-slide-up" ref={el => sections.current.push(el)}>
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">Vision</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Envisioning Technology-Driven Education
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed">
                                    We envision a world where technology and education synergize, opening pathways for all learners to excel. Harnessing AI's potential, we aim to revolutionize the educational landscape, paving the way for a brighter, more informed future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 fade-in">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4 text-slide-up" ref={el => sections.current.push(el)}>
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">Who We Are</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    A Passionate Team of Experts
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed">
                                    Scholar Rank AI comprises a team of passionate educators, technologists, and innovators dedicated to developing AI-driven platforms. Our goal is to support personalized learning experiences, enhance academic outcomes, and provide valuable insights for educators and institutions.
                                </p>
                            </div>
                            <img
                                src={Team} // Update with your image path
                                width="550"
                                height="310"
                                alt="Who We Are"
                                className="mx-auto rounded-xl max-w-md sm:w-full"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 bg-gray-900 md:py-24 lg:py-32 bg-muted fade-in">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <img
                                src={Contact}// Update with your image path
                                width="550"
                                height="310"
                                alt="Contact Us"
                                className="mx-auto  max-w-md rounded-xl  sm:w-full"
                            />
                            <div className="space-y-4 text-slide-up" ref={el => sections.current.push(el)}>
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">Contact Us</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Let's Connect
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed">
                                    We're here to help. Whether you have a question, need assistance, or want to learn more about our services, feel free to reach out to us. Our team is always ready to provide the support you need.
                                </p>
                                <ul className="text-muted-foreground md:text-xl/relaxed">
                                    <li>Email: sales@scholarrank.com</li>
                                    <li>Phone: +91 7258876459</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 fade-in">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4 text-slide-up" ref={el => sections.current.push(el)}>
                                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm">Our Values</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Guiding Principles for Success
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Card className="p-6 bg-gray-700 rounded-lg">
                                        <h3 className="text-xl font-semibold">Innovation</h3>
                                        <p className="text-muted-foreground">
                                            We continuously explore new technologies and methodologies to stay at the forefront of educational innovation.
                                        </p>
                                    </Card>
                                    <Card className="p-6 bg-gray-800 rounded-lg">
                                        <h3 className="text-xl font-semibold">Integrity</h3>
                                        <p className="text-muted-foreground">
                                            We uphold the highest standards of honesty, transparency, and ethical practices in all our endeavors.
                                        </p>
                                    </Card>
                                    <Card className="p-6 bg-gray-800 rounded-lg">
                                        <h3 className="text-xl font-semibold">Accessibility</h3>
                                        <p className="text-muted-foreground">
                                            We strive to make our tools and resources available to learners of all backgrounds, promoting inclusive education for all.
                                        </p>
                                    </Card>
                                    <Card className="p-6 bg-gray-700 rounded-lg">
                                        <h3 className="text-xl font-semibold">Collaboration</h3>
                                        <p className="text-muted-foreground">
                                            We believe in the power of collaboration, working closely with educators, institutions, and learners to create meaningful solutions.
                                        </p>
                                    </Card>
                                </div>
                            </div>
                            <img
                                src={Success}
                                width="550"
                                height="310"
                                alt="Our Values"
                                className="mx-auto  rounded-xl  sm:w-full"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <ButtonGradient/>
        </div>
    );
}

export default Component;
