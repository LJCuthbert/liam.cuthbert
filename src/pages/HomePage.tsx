import Projects from "./sections/Projects.tsx";
import AboutMe from "./sections/AboutMe.tsx";
import Details from "./sections/Details.tsx";
import Header from "../components/Header/Header.tsx";
const HomePage = () => {
    return (
        <div className="dark:bg-gray-90 dark:bg-gradient-to-b mx-auto">
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

        </div>
    )
}
export default HomePage;