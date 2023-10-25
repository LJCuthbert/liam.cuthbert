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
            <div className="snap-start">
                <Details/>
            </div>
            <div className="snap-start">
                <Projects/>
            </div>
            <div className="snap-start">
                <AboutMe/>
            </div>
            <div className="snap-start">
                <Contact/>
            </div>
            <MouseFollower className="w-[30px] h-[30px] duration-200 border-2 border-fuchsia-800 dark:border-fuchsia-200" circleSize={30}/>
            <MouseFollower className="w-[8px] h-[8px]  z-0 bg-fuchsia-800 dark:bg-fuchsia-200" circleSize={8}/>
        </div>
    )
}
export default HomePage;