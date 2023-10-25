import { useTheme } from '../../components/Util/ThemeContext.tsx';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../../components/Util/ProjectCard.tsx';
import ConQuestDark from '../../assets/ConQuestDark.png';
import ConQuestLight from '../../assets/ConQuestLight.png';
import UCFK from '../../assets/UCFK.jpg';
import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";

const Projects = () => {
    const { theme } = useTheme();
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="min-h-screen relative snap-start flex flex-col bg-amber-300 bg-gradient-to-b dark:from-black from-[#f2f2f2] from-10% dark:bg-amber-800 transition-colors duration-500 justify-center items-center gap-12">
            <div className="container">
                <div ref={ref} className="text-center">
                    {inView && <TypewriterEffect text="Projects" />}
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    <ProjectCard projectName="Embedded System: Battleships" imageSrc={UCFK} />
                    <ProjectCard projectName="ConQuest" imageSrc={theme === 'dark' ? ConQuestDark : ConQuestLight}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;
