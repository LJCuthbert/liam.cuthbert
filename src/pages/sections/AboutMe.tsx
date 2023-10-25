import Card from "../../components/Util/Card.tsx";
import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";
import {useInView} from "react-intersection-observer";
import CreativeWords from "../../components/Main/CreativeWords.tsx";

const AboutMe = () => {
    const [ref, inView] = useInView({ triggerOnce: false });
    return (
        <div className="flex snap-start transition-colors justify-center items-center flex-col duration-500 gap-12 bg-blue-300 dark:bg-blue-700 min-h-screen">
            <div className="container">
                <div ref={ref} className="text-center">
                    {inView && <TypewriterEffect text="About Me" />}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Personal Information Card */}
                    <Card title="Personal Information">
                        <p>
                            Hi! I'm Liam , a passionate <CreativeWords words={['Computer Scientist', 'Frontend Developer']} style={['text-normal', 'font-bold', 'dark:text-blue-700', 'text-blue-400']}></CreativeWords> based in
                            Christchurch. I love coding, solving problems, and building things that make a difference.
                        </p>
                        {/* Add more personal information as needed */}
                    </Card>

                    {/* Skills Card */}
                    <Card title="Skills">
                        <ul className="list-disc pl-4">
                            <li>JavaScript (React, Node.js)</li>
                            <li>HTML, CSS (Tailwind CSS)</li>
                            <li>Database (MongoDB, MySQL)</li>
                            {/* Add more skills as needed */}
                        </ul>
                    </Card>

                    {/* Education Card */}
                    <Card title="Education">
                        <p>
                            Bachelor's Degree in [Your Major], [University Name], [Year of Graduation]
                        </p>
                        {/* Add more education details as needed */}
                    </Card>

                    {/* Experience Card */}
                    <Card title="Experience">
                        <p>
                            Currently working at [Your Company] as a [Your Job Title]. Previously worked at [Previous Company] as a
                            [Previous Job Title].
                        </p>
                        {/* Add more experience details as needed */}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;