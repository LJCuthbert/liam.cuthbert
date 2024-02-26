import Projects from "./sections/Projects.tsx";
import AboutMe from "./sections/AboutMe.tsx";
import Lander from "./sections/Lander.tsx";
import Contact from "./sections/Contact.tsx";
import Header from "../components/Header/Header.tsx";
import MouseFollower from "../components/Util/MouseFollower.tsx";

const HomePage = () => {
    return (
        <div className="dark:bg-gray-90 relative mx-auto dark:bg-gradient-to-b">
            <Header />
            <Lander />
            <Projects />
            <AboutMe />
            <Contact />

            <MouseFollower
                className="hidden border-2 border-fuchsia-800 duration-75 dark:border-fuchsia-200 md:block"
                circleSize={30}
            />
            <MouseFollower
                className="z-0 hidden bg-fuchsia-800 dark:bg-fuchsia-200 md:block"
                circleSize={4}
            />
        </div>
    );
};
export default HomePage;
