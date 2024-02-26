import Projects from "./sections/Projects.tsx";
import AboutMe from "./sections/AboutMe.tsx";
import Details from "./sections/Details.tsx";
import Contact from "./sections/Contact.tsx";
import Header from "../components/Header/Header.tsx";
import MouseFollower from "../components/Util/MouseFollower.tsx";
const HomePage = () => {
    return (
        <div className="dark:bg-gray-90 relative dark:bg-gradient-to-b mx-auto">
            <Header/>
            <Details/>
            <Projects/>
            <AboutMe/>
            <Contact/>

            <MouseFollower className="hidden md:block duration-75 border-2 border-fuchsia-800 dark:border-fuchsia-200" circleSize={30}/>
            <MouseFollower className="hidden md:block z-0 bg-fuchsia-800 dark:bg-fuchsia-200" circleSize={4}/>

        </div>
    )
}
export default HomePage;