import { Card } from "../../components/Card.tsx";
import { useInView } from "react-intersection-observer";
import CreativeWords from "../../components/effects/CreativeWords.tsx";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  TypeWriterEffect,
  UnderlineEffect,
} from "../../components/effects/TextEffects.tsx";

const AboutMe = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="flex min-h-svh snap-start items-center justify-center gap-12 bg-blue-300 bg-gradient-to-b from-amber-300 from-10% py-6 transition-colors dark:bg-blue-800 dark:from-amber-800 md:min-h-screen">
      <div className="container">
        <div ref={ref} className="mb-6 text-center">
          {inView && (
            <UnderlineEffect color={"after:bg-black after:dark:bg-white"}>
              <TypeWriterEffect text="About Me" />
            </UnderlineEffect>
          )}
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {windowWidth <= 640 ? (
            <Carousel
              slideInterval={5000}
              slide={false}
              className="h-64 w-full sm:h-96 sm:w-full md:h-96 md:w-full lg:h-96 lg:w-full xl:h-96 xl:w-full 2xl:h-96 2xl:w-full"
              leftControl={
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 bg-gray-500 text-white hover:border-gray-500 hover:bg-gray-400 dark:border-gray-300 dark:bg-gray-200 dark:text-black dark:hover:border-gray-200 dark:hover:bg-gray-300">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
              }
              rightControl={
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-400 bg-gray-500 text-white hover:border-gray-500 hover:bg-gray-400 dark:border-gray-300 dark:bg-gray-200 dark:text-black dark:hover:border-gray-200 dark:hover:bg-gray-300">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              }
            >
              {/* Personal Information Card */}
              <Card title="Personal Information" className="h-full w-full">
                <div className="md:inline-block">
                  Hi! I'm Liam , a passionate{" "}
                  <CreativeWords
                    words={["Computer Scientist", "Frontend Developer"]}
                    className={["h-[1.5em]"]}
                    color={"word-cycle-15em dark:text-blue-700 text-blue-400"}
                  ></CreativeWords>{" "}
                  based in Christchurch. I love coding, solving problems, and
                  building things that make a difference.
                </div>
              </Card>
              {/* Skills Card */}
              <Card title="Skills" className={"h-full w-full"}>
                <ul className="list-disc pl-4">
                  <li>JavaScript (Vanilla, React, Node.js, Typescript)</li>
                  <li>HTML, CSS (Bootstrap, Tailwind)</li>
                  <li>Java, Thymeleaf, Springboot</li>
                  <li>Database (MySQL)</li>
                </ul>
              </Card>
              {/* Education Card */}
              <Card title="Education" className={"h-full w-full"}>
                <p>
                  Soon to have Bachelor's Degree in Computer Science, University
                  of Canterbury, 2024
                </p>
              </Card>
              {/* Experience Card */}
              <Card title="Experience" className={"h-full w-full"}>
                <p>
                  Currently working at Velocity Karts as a Senior Track
                  Instructor.
                </p>
              </Card>
            </Carousel>
          ) : (
            <>
              {/* Personal Information Card */}
              <Card title="Personal Information">
                <div className="inline-block">
                  Hi! I'm Liam , a passionate{" "}
                  <CreativeWords
                    words={["Computer Scientist", "Frontend Developer"]}
                    className={["h-[1.5em]"]}
                    color={"word-cycle-15em dark:text-blue-700 text-blue-400"}
                  ></CreativeWords>{" "}
                  based in Christchurch. I love coding, solving problems, and
                  building things that make a difference.
                </div>
                {/* Add more personal information as needed */}
              </Card>
              {/* Skills Card */}
              <Card title="Skills">
                <ul className="list-disc pl-4">
                  <li>JavaScript (Vanilla, React, Node.js, Typescript)</li>
                  <li>HTML, CSS (Bootstrap, Tailwind)</li>
                  <li>Java, Thymeleaf, Springboot</li>
                  <li>Database (MySQL)</li>
                </ul>
              </Card>

              {/* Education Card */}
              <Card title="Education">
                <p>
                  Soon to have Bachelor's Degree in Computer Science, University
                  of Canterbury, 2024
                </p>
              </Card>

              {/* Experience Card */}
              <Card title="Experience">
                <p>
                  Currently working at Velocity Karts as a Senior Track
                  Instructor.
                </p>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
