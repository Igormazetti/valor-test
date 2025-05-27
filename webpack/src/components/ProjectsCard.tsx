import React, { useState } from "react";
import "../index.scss";
import { projectsData } from "../constants/projects";

interface Project {
  id: number;
  name: string;
  description: string;
  repositoryUrl?: string;
  deployUrl?: string;
  technologies: string[];
}

const ProjectsCard = () => {
  const [projects] = useState<Project[]>(projectsData);

  return (
    <div className="max-w-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 rounded-3xl p-6 shadow-2xl text-white font-sans transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl">
      <div className="text-left mb-6">
        <h2 className="text-2xl font-semibold drop-shadow-lg m-0">🚀 My Projects</h2>
      </div>

      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-left font-bold drop-shadow-md text-white m-0">{project.name}</h3>

              <p className="text-sm text-left leading-relaxed opacity-90 text-white/90 m-0">{project.description}</p>

              <div className="flex flex-wrap gap-2 my-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-3 py-1 rounded-xl text-xs font-medium border border-white/30 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap mt-2">
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-lg rounded-2xl text-white text-sm font-medium transition-all duration-300 border border-white/20 hover:bg-gray-800/80 hover:-translate-y-0.5 hover:shadow-md no-underline"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Repository
                  </a>
                )}

                {project.deployUrl && (
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-lg rounded-2xl text-white text-sm font-medium transition-all duration-300 border border-white/20 hover:bg-green-600/80 hover:-translate-y-0.5 hover:shadow-md no-underline"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
