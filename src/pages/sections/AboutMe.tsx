import Card from "../../components/Util/Card.tsx";
import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";
import {useInView} from "react-intersection-observer";
import CreativeWords from "../../components/Main/CreativeWords.tsx";

const AboutMe = () => {
    const [ref, inView] = useInView({ triggerOnce: false });
    return (
        <div className="flex snap-start relative bg-gradient-to-b from-amber-300 dark:from-amber-800 from-10% transition-colors justify-center items-center flex-col duration-500 gap-12 bg-blue-300 dark:bg-blue-800 min-h-screen">
            <div className="container">
                <div ref={ref} className="text-center">
                    {inView && <TypewriterEffect text="About Me" className={"hover underline-mid"} />}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Personal Information Card */}
                    <Card title="Personal Information">
                        <div className="flex flex-col gap-8">
                            <p>
                                Hi! I'm Liam, a passionate <CreativeWords words={['Computer Scientist', 'Frontend Developer']} style={['text-normal', 'font-bold', 'dark:text-blue-700', 'text-blue-400']}></CreativeWords> based in
                                Christchurch. I love coding, solving problems, and building things that make a difference.
                            </p>
                            <p>

                            </p>
                        </div>

                    </Card>

                    {/* Skills Card */}
                    <Card title="Programming Languages">
                        <div className="flex gap-16 max-sm:gap-0 flex-wrap">
                            <div className="flex justify-between flex-col gap-2">
                                <div>
                                    <h2 className="text-xl font-bold mb-1.5">Web Development</h2>
                                    <ul className="list-disc pl-4">
                                        <li>HTML, CSS (Bootstrap, Tailwind)</li>
                                        <li>JavaScript (Vanilla, React, Typescript)</li>
                                        <li>Thymeleaf</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-1.5">Object Oriented</h2>
                                    <ul className="list-disc pl-4">
                                        <li>Java (Springboot)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-between flex-col gap-2">
                                <div>
                                    <h2 className="text-xl font-bold mb-1.5">Database</h2>
                                    <ul className="list-disc pl-4">
                                        <li>MySql</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-1.5">Other</h2>
                                    <ul className="list-disc pl-4">
                                        <li>Python</li>
                                        <li>C</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Education Card */}
                    <Card title="Education">
                        <p>
                           Soon to have Bachelor's Degree in Computer Science, University of Canterbury, 2024
                        </p>
                    </Card>

                    {/* Experience Card */}
                    <Card title="Experience">
                        <p>
                            Currently working at Velocity Karts as a Senior Track Instructor.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;