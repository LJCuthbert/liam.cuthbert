import React from "react";

interface ProjectCardProps {
    projectName: string;
    imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, imageSrc }) => {
    return (
        <div className="relative max-w-sm overflow-hidden rounded-3xl shadow-2xl dark:shadow-lg dark:shadow-amber-50">
            <img
                className="h-full w-full"
                src={imageSrc}
                alt={`Project: ${projectName}`}
            />
            <div className="absolute bottom-0 z-10 w-full bg-white px-6 py-6 dark:bg-gray-950">
                <div className="cursor-pointer text-center text-xl font-bold">
                    {projectName}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
