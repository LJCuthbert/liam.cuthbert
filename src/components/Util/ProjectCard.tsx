import React from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
    projectName: string;
    imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, imageSrc }) => {
    return (
        <div className="grid w-48 cursor-pointer grid-cols-1 rounded-md bg-gray-100 shadow-md dark:bg-black dark:shadow-amber-100 sm:w-64 sm:rounded-xl">
            <img
                className="h-48 w-48 rounded-md rounded-b-none object-cover sm:h-64 sm:w-64 sm:rounded-xl"
                src={imageSrc}
                alt={`Project: ${projectName}`}
            />
            <div className="my-2 p-2">
                <div className="text-center text-xl font-bold">
                    {projectName}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
