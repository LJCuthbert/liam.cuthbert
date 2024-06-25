import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

interface ProjectCardProps {
  projectName: string;
  imageSrc: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  imageSrc,
  link,
}) => {
  const cardContent = (
    <div className="group relative h-full w-48 overflow-hidden rounded-md shadow-md transition ease-in-out hover:scale-105 dark:bg-black sm:w-64 sm:rounded-xl">
      <img
        className="h-48 w-full rounded-md rounded-b-none object-cover sm:h-64"
        src={imageSrc}
        alt={`Project: ${projectName}`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 bg-opacity-50 text-center text-white opacity-0 transition-opacity ease-in-out group-hover:opacity-100">
        <p className="text-lg font-bold">{projectName}</p>
        {link ? <p className="text-sm">Click to learn more</p> : <></>}
      </div>
    </div>
  );

  if (link) {
    return <Link to={link}>{cardContent}</Link>;
  } else {
    return cardContent;
  }
};

export default ProjectCard;
