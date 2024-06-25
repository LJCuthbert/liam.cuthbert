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
    <div className="flex min-h-svh snap-start flex-col items-center justify-center gap-12 bg-gradient-to-b from-white from-10% to-amber-300 transition-colors dark:bg-amber-800 dark:from-gray-950 sm:min-h-screen">
      <div ref={ref} className="mb-6 text-center">
        {inView && (
          <UnderlineEffect color="after:bg-black dark:after:bg-white">
            <TypeWriterEffect text="Projects" />
          </UnderlineEffect>
        )}
      </div>
      <div className="grid w-[80%] grid-cols-2 place-items-center">
        <ProjectCard
          projectName="Embedded System: Battleships"
          imageSrc={UCFK}
        />
        <ProjectCard
          projectName="ConQuest"
          imageSrc={theme === "dark" ? ConQuestDark : ConQuestLight}
          link="/projects/conquest"
        />
      </div>
    </div>
  );
};

export default Projects;
