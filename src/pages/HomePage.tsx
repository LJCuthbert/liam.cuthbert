import Projects from "./sections/Projects.tsx";
import AboutMe from "./sections/AboutMe.tsx";
import Lander from "./sections/Lander.tsx";
import Contact from "./sections/Contact.tsx";

const HomePage = () => {
    return (
        <div className="dark:bg-gray-90 mx-auto dark:bg-gradient-to-b">
            <Lander />
            <Projects />
            <AboutMe />
            <Contact />
        </div>
    );
};
export default HomePage;
