import React from 'react';

interface ProjectCardProps {
    projectName: string;
    imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, imageSrc }) => {
    return (
        <div className="max-w-sm rounded-3xl relative overflow-hidden shadow-2xl dark:shadow-amber-50 dark:shadow-lg">
            <img className="w-full h-full" src={imageSrc} alt={`Project: ${projectName}`} />
            <div className="dark:bg-gray-950 absolute bottom-0 w-full z-10 bg-white px-6 py-6">
                <div className="font-bold text-xl text-center cursor-pointer">{projectName}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
