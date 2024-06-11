import { useTheme } from "../../components/theme/ThemeContext.tsx";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../components/util/ProjectCard.tsx";
import ConQuestDark from "../../assets/ConQuestDark.png";
import ConQuestLight from "../../assets/ConQuestLight.png";
import UCFK from "../../assets/UCFK.jpg";
import {
    TypeWriterEffect,
    UnderlineEffect,
} from "../../components/effects/TextEffects.tsx";

const Projects = () => {
    const { theme } = useTheme();
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="flex min-h-svh snap-start flex-col items-center justify-center gap-12 bg-amber-300 bg-gradient-to-b from-[#f2f2f2] from-10% transition-colors dark:bg-amber-800 dark:from-gray-950 sm:min-h-screen">
            <div ref={ref} className="mb-6 text-center">
                {inView && (
                    <UnderlineEffect color="after:bg-black dark:after:bg-white">
                        <TypeWriterEffect text="Projects" />
                    </UnderlineEffect>
                )}
            </div>
            <div className="container">
                <div className="flex flex-col justify-evenly gap-5 max-sm:items-center sm:flex-row sm:gap-0">
                    <ProjectCard
                        projectName="Embedded System: Battleships"
                        imageSrc={UCFK}
                    />
                    <ProjectCard
                        projectName="ConQuest"
                        imageSrc={
                            theme === "dark" ? ConQuestDark : ConQuestLight
                        }
                        link="/projects/conquest"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
